
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDRXbVGU6aH2B18HcsJiCmbOb0LM0mxwws",
  authDomain:        "anantara-212b9.firebaseapp.com",
  projectId:         "anantara-212b9",
  storageBucket:     "anantara-212b9.firebasestorage.app",
  messagingSenderId: "516807976298",
  appId:             "1:516807976298:web:313af6104989363f98b113",
};

// Cloudflare Worker cart API base URL
const CART_WORKER_URL = "https://anantara-cart.anantara-skin.workers.dev";

// ── Initialise Firebase ───────────────────────────────────────
firebase.initializeApp(FIREBASE_CONFIG);
const auth = firebase.auth();
const db   = firebase.firestore();

// ── Cart token helper (mirrors the Worker cookie) ─────────────
function getCartToken() {
  const match = document.cookie.match(/(?:^|;\s*)cart_token=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : null;
}

// ── Worker request helper ─────────────────────────────────────
async function workerFetch(path, method = "GET", body = null) {
  const token = await auth.currentUser?.getIdToken();
  const opts = {
    method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...( getCartToken() ? { "X-Cart-Token": getCartToken() } : {} ),
    },
  };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`${CART_WORKER_URL}${path}`, opts);
  return res.json();
}

// ── Save product URL to Firestore ─────────────────────────────
async function saveCartItemToFirestore(user, cartItem) {
  /*
   * Each user document under /users/{uid}/cartItems/{pid}
   * stores the product URL so it can be restored later or
   * used for analytics / recommendations.
   */
  await db
    .collection("users")
    .doc(user.uid)
    .collection("cartItems")
    .doc(cartItem.pid)
    .set(
      {
        pid:        cartItem.pid,
        productUrl: cartItem.url,        // The full product page URL
        name:       cartItem.name || "",
        price:      cartItem.price || 0,
        size:       cartItem.size  || "",
        imageUrl:   cartItem.imageUrl || "",
        qty:        cartItem.qty   || 1,
        addedAt:    firebase.firestore.FieldValue.serverTimestamp(),
        cartToken:  getCartToken(),
      },
      { merge: true }
    );
}

// ── Load Firestore cart items for a signed-in user ────────────
async function loadUserCartFromFirestore(user) {
  const snap = await db
    .collection("users")
    .doc(user.uid)
    .collection("cartItems")
    .get();

  return snap.docs.map((d) => d.data());
}

// ── Merge anonymous KV cart → Firestore user cart ─────────────
async function mergeAnonCartToUser(user) {
  const cart = await workerFetch("/cart");
  if (!cart.items || cart.items.length === 0) return;

  const batch = db.batch();
  const ref = db.collection("users").doc(user.uid).collection("cartItems");

  cart.items.forEach((item) => {
    batch.set(
      ref.doc(item.pid),
      {
        pid:        item.pid,
        productUrl: item.url,
        name:       item.name       || "",
        price:      item.price      || 0,
        size:       item.size       || "",
        imageUrl:   item.imageUrl   || "",
        qty:        item.qty        || 1,
        mergedAt:   firebase.firestore.FieldValue.serverTimestamp(),
        cartToken:  getCartToken(),
      },
      { merge: true }
    );
  });

  await batch.commit();
  console.log(`Merged ${cart.items.length} items from anonymous cart`);
}

// ── Public Cart API (used by your page JS) ────────────────────
window.AnantaraCart = {
  /**
   * Add an item to the cart.
   * Pulls product info straight from the product tile's data attributes.
   *
   * Usage:
   *   AnantaraCart.add({
   *     pid:       "9319944070125",
   *     url:       "/gifts/.../9319944070125.html",
   *     name:      "Anua Heartleaf Cleansing Foam",
   *     subname:   "Heartleaf + BHA",
   *     price:     400,
   *     imageUrl:  "/images/anua-cleansing-foam.jpg",
   *     size:      "Kit",
   *     qty:       1,
   *   });
   */
  async add(item) {
    const result = await workerFetch("/cart/add", "POST", item);
    if (result.success) {
      // If user is signed in, also persist the product URL to Firestore
      const user = auth.currentUser;
      if (user) {
        await saveCartItemToFirestore(user, item);
      }
      AnantaraCart.updateUI(result.cart);
    }
    return result;
  },

  async remove(pid, size) {
    const result = await workerFetch("/cart/remove", "POST", { pid, size });
    if (result.success) {
      // Remove from Firestore too
      const user = auth.currentUser;
      if (user) {
        await db
          .collection("users")
          .doc(user.uid)
          .collection("cartItems")
          .doc(pid)
          .delete()
          .catch(() => {});
      }
      AnantaraCart.updateUI(result.cart);
    }
    return result;
  },

  async update(pid, size, qty) {
    const result = await workerFetch("/cart/update", "POST", { pid, size, qty });
    if (result.success) AnantaraCart.updateUI(result.cart);
    return result;
  },

  async get() {
    return workerFetch("/cart");
  },

  async clear() {
    const result = await workerFetch("/cart", "DELETE");
    AnantaraCart.updateUI({ items: [] });
    return result;
  },

  /** Update the cart icon counter in the header */
  updateUI(cart) {
    const items = cart?.items || [];
    const totalQty = items.reduce((sum, i) => sum + (i.qty || 1), 0);

    // Update the minicart badge (matches your existing HTML structure)
    document.querySelectorAll(".c-minicart-icon__qty").forEach((el) => {
      el.textContent = totalQty;
    });
    document.querySelectorAll(".h-show-for-sr").forEach((el) => {
      if (el.textContent.includes("product in cart")) {
        el.textContent = `${totalQty} product${totalQty !== 1 ? "s" : ""} in cart`;
      }
    });

    // Dispatch event for any custom listeners
    document.dispatchEvent(new CustomEvent("cart:updated", { detail: cart }));
  },
};
function renderHeader(user) {
  if (user) {
    document.querySelectorAll(".c-user__text.m-login")
      .forEach(el => el.textContent = user.displayName || "My Account");
  } else {
    document.querySelectorAll(".c-user__text.m-login")
      .forEach(el => el.textContent = "Login");
  }
}
// ── Auth state listener ───────────────────────────────────────
auth.onAuthStateChanged(async (user) => {
  if (user) {
    renderHeader({ displayName: user.displayName, email: user.email });

    await mergeAnonCartToUser(user);

    const kvCart = await workerFetch("/cart");
    if (!kvCart.items || kvCart.items.length === 0) {
      const firestoreItems = await loadUserCartFromFirestore(user);
      for (const item of firestoreItems) {
        await workerFetch("/cart/add", "POST", {
          pid:      item.pid,
          url:      item.productUrl,
          name:     item.name,
          price:    item.price,
          imageUrl: item.imageUrl,
          size:     item.size,
          qty:      item.qty,
        });
      }
    }

    const cart = await workerFetch("/cart");
    AnantaraCart.updateUI(cart);

    document
      .querySelectorAll(".c-user__text.m-login")
      .forEach((el) => (el.textContent = user.displayName || "My Account"));

  } else {
    renderHeader(null);
    console.log("No user — anonymous session");
    const cart = await AnantaraCart.get();
    AnantaraCart.updateUI(cart);
  }
});
// ── Auth helpers (call from your login/register pages) ────────
window.AnantaraAuth = {
  async signInWithEmail(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  },

  async registerWithEmail(email, password, displayName) {
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    await cred.user.updateProfile({ displayName });
    // Create user document in Firestore
    await db.collection("users").doc(cred.user.uid).set(
      {
        email,
        displayName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    return cred;
  },

  async signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  },

  async signOut() {
    await AnantaraCart.clear();
    return auth.signOut();
  },

  currentUser() {
    return auth.currentUser;
  },
};

// ── Wire up "Add to cart" buttons ─────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  /*
   * Intercepts clicks on .c-product-add-bag__button buttons.
   * Reads product data from the closest product tile wrapper
   * using the existing data-analytics attribute.
   */
  document.body.addEventListener("click", async (e) => {
    const btn = e.target.closest(".c-product-add-bag__button");
    if (!btn) return;

    e.preventDefault();
    e.stopPropagation();

    const tile = btn.closest("[data-analytics]");
    if (!tile) return;

    let analyticsData;
    try {
      analyticsData = JSON.parse(tile.getAttribute("data-analytics"));
    } catch {
      return;
    }

    const product = analyticsData?.products?.[0];
    if (!product) return;

    // Get selected size from the dropdown if present
    const sizeSelect = tile.querySelector("select[data-js-field]");
    const selectedOption = sizeSelect?.options[sizeSelect.selectedIndex];
    const size = selectedOption?.textContent?.trim() || product.size || "";
    const pid  = selectedOption?.getAttribute("data-js-pid") || product.pid;

    // Get image URL
    const img = tile.querySelector("img[data-src], img[src]");
    const imageUrl = img?.getAttribute("data-src") || img?.getAttribute("src") || product.imgUrl || "";

    // Build cart item — the product URL is the key field saved to Firebase
    const item = {
      pid,
      url:      product.url || window.location.pathname,
      name:     product.name     || product.title || "",
      subname:  product.subname  || "",
      price:    product.salePrice || product.price || 0,
      imageUrl: window.AnantaraCF?.toCloudflareSrc(imageUrl) || imageUrl,
      size,
      qty: 1,
    };

    btn.disabled = true;
    btn.querySelector("span")?.classList.add("loading");

    try {
      await AnantaraCart.add(item);
      btn.querySelector("span").textContent = "Added!";
      setTimeout(() => {
        btn.querySelector("span").textContent = "Add to cart";
        btn.disabled = false;
      }, 1500);
    } catch (err) {
      console.error("Add to cart failed:", err);
      btn.disabled = false;
    }
  });
});