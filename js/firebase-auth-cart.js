const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDRXbVGU6aH2B18HcsJiCmbOb0LM0mxwws",
  authDomain: "anantara-212b9.firebaseapp.com",
  projectId: "anantara-212b9",
  storageBucket: "anantara-212b9.firebasestorage.app",
  messagingSenderId: "516807976298",
  appId: "1:516807976298:web:313af6104989363f98b113",
};

// Cloudflare Worker cart API base URL
const CART_WORKER_URL = "https://anantara-cart.anantara-skin.workers.dev";
const CART_TTL = 60 * 60 * 24 * 30; // 30 days

// ── Initialise Firebase ───────────────────────────────────────
firebase.initializeApp(FIREBASE_CONFIG);
const auth = firebase.auth();
const db = firebase.firestore();

// ── Cart token helpers ────────────────────────────────────────
// Reads from cookie first, falls back to localStorage (merged from add-to-cart.js)
function getCartToken() {
  const fromCookie =
    document.cookie
      .split(";")
      .map((c) => c.trim())
      .find((c) => c.startsWith("cart_token="))
      ?.split("=")[1] || null;
  return fromCookie || localStorage.getItem("cart_token") || null;
}

// Persists cart token to both cookie and localStorage (from add-to-cart.js)
function setCartToken(token) {
  localStorage.setItem("cart_token", token);
  document.cookie = `cart_token=${token}; path=/; max-age=${CART_TTL}; SameSite=Lax`;
}

// ── Toast notification (from add-to-cart.js) ──────────────────
function showAddToCartToast(msg, isError = false) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.style.cssText = `
      position:fixed;bottom:24px;left:50%;transform:translateX(-50%);
      padding:.75rem 1.5rem;border-radius:4px;font-size:.9rem;
      color:#fff;z-index:9999;opacity:0;pointer-events:none;
      transition:opacity .3s;
    `;
    document.body.appendChild(toast);
  }
  toast.style.background = isError ? "#c0392b" : "#333";
  toast.textContent = msg;
  toast.style.opacity = "1";
  setTimeout(() => {
    toast.style.opacity = "0";
  }, 2500);
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
      ...(getCartToken() ? { "X-Cart-Token": getCartToken() } : {}),
    },
  };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`${CART_WORKER_URL}${path}`, opts);
  return res.json();
}
window.AnantaraCheckout = {
  async begin(shippingAddress) {
    const user = auth.currentUser;
    if (!user) {
      // Redirect to login first
      window.location.href = "/login.html?next=/checkout.html";
      return;
    }

    const cart = await AnantaraCart.get();
    if (!cart.items?.length) return;

    const result = await workerFetch("/checkout/create", "POST", {
      items: cart.items,
      userId: user.uid,
      shippingAddress,
    });

    if (result.checkoutUrl) {
      // Save orderId locally before redirecting
      sessionStorage.setItem("pendingOrderId", result.orderId);
      window.location.href = result.checkoutUrl; // redirect to Yoco/PayFast
    }
  },
};
// ── Save product URL to Firestore ─────────────────────────────
async function saveCartItemToFirestore(user, cartItem) {
  await db
    .collection("users")
    .doc(user.uid)
    .collection("cartItems")
    .doc(cartItem.pid)
    .set(
      {
        pid: cartItem.pid,
        productUrl: cartItem.url,
        name: cartItem.name || "",
        price: cartItem.price || 0,
        size: cartItem.size || "",
        imageUrl: cartItem.imageUrl || "",
        qty: cartItem.qty || 1,
        addedAt: firebase.firestore.FieldValue.serverTimestamp(),
        cartToken: getCartToken(),
      },
      { merge: true },
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
        pid: item.pid,
        productUrl: item.url,
        name: item.name || "",
        price: item.price || 0,
        size: item.size || "",
        imageUrl: item.imageUrl || "",
        qty: item.qty || 1,
        mergedAt: firebase.firestore.FieldValue.serverTimestamp(),
        cartToken: getCartToken(),
      },
      { merge: true },
    );
  });

  await batch.commit();
  console.log(`Merged ${cart.items.length} items from anonymous cart`);
}

// ── Extract product data from a tile (from add-to-cart.js) ────
// Scrapes the DOM so buttons without data-* attributes still work.
function extractProductFromTile(button) {
  const tile =
    button.closest(
      '[class*="product-tile"], [class*="product"], article, li',
    ) || button.parentElement;

  // Name
  const nameEl = tile.querySelector(
    "[data-js-product-name], .c-product-tile__name a, h3 a, h2 a",
  );
  const name = nameEl?.textContent?.trim() || "Product";

  // URL
  const href = nameEl?.getAttribute("href") || window.location.pathname;
  const url = href.startsWith("http") ? href : window.location.origin + href;

  // PID — from data-lora-datalayer, or fall back to a slug of the URL
  let pid = null;
  try {
    const layerStr = nameEl?.getAttribute("data-lora-datalayer");
    if (layerStr) {
      const layer = JSON.parse(layerStr);
      pid = Object.keys(layer.products || {})[0] || null;
    }
  } catch {}
  pid = pid || url.split("/").filter(Boolean).pop().replace(".html", "");

  // Price
  const priceEl = tile.querySelector(
    "[data-js-saleprice], .c-product-price__value:not(.m-old)",
  );
  const priceRaw = priceEl?.textContent?.replace(/[^\d.]/g, "") || "0";
  const price = parseFloat(priceRaw) || 0;

  // Subname / size
  const sizeEl = tile.querySelector(".c-select__field, .c-select__label");
  const subname = sizeEl?.textContent?.trim() || "";

  // Image
  const imgEl = tile.querySelector("img");
  const imageUrl = imgEl?.src || imgEl?.dataset?.src || "";

  return { pid, url, name, subname, price, imageUrl, size: subname, qty: 1 };
}

// ── Public Cart API ───────────────────────────────────────────
window.AnantaraCart = {
  async add(item) {
    const result = await workerFetch("/cart/add", "POST", item);
    if (result.success) {
      // Persist cart token returned by the Worker (from add-to-cart.js)
      if (result.token) setCartToken(result.token);

      // If user is signed in, also persist to Firestore
      const user = auth.currentUser;
      if (user) {
        await saveCartItemToFirestore(user, item);
      }

      AnantaraCart.updateUI(result.cart);
      showAddToCartToast("Added to cart ✓");
    } else {
      showAddToCartToast("Could not add to cart. Please try again.", true);
    }
    return result;
  },

  async remove(pid, size) {
    const result = await workerFetch("/cart/remove", "POST", { pid, size });
    if (result.success) {
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
    const result = await workerFetch("/cart/update", "POST", {
      pid,
      size,
      qty,
    });
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

    document.querySelectorAll(".c-minicart-icon__qty").forEach((el) => {
      el.textContent = totalQty;
    });
    document.querySelectorAll(".h-show-for-sr").forEach((el) => {
      if (el.textContent.includes("product in cart")) {
        el.textContent = `${totalQty} product${totalQty !== 1 ? "s" : ""} in cart`;
      }
    });

    // Also update #headerCartQty if present (from add-to-cart.js)
    const badge = document.getElementById("headerCartQty");
    if (badge) badge.textContent = totalQty;

    document.dispatchEvent(new CustomEvent("cart:updated", { detail: cart }));
  },
};

// ── Header render helper ──────────────────────────────────────
function renderHeader(user) {
  if (user) {
    document
      .querySelectorAll(".c-user__text.m-login")
      .forEach((el) => (el.textContent = user.displayName || "My Account"));
  } else {
    document
      .querySelectorAll(".c-user__text.m-login")
      .forEach((el) => (el.textContent = "Login"));
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
          pid: item.pid,
          url: item.productUrl,
          name: item.name,
          price: item.price,
          imageUrl: item.imageUrl,
          size: item.size,
          qty: item.qty,
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

// ── Auth helpers ──────────────────────────────────────────────
window.AnantaraAuth = {
  async signInWithEmail(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  },

  async registerWithEmail(email, password, displayName) {
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    await cred.user.updateProfile({ displayName });
    await db.collection("users").doc(cred.user.uid).set(
      {
        email,
        displayName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true },
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

  // Exposed so other scripts can request a fresh ID token (used by add-to-cart.js pattern)
  async getIdToken() {
    return auth.currentUser?.getIdToken() || null;
  },
};

// ── Wire up "Add to Cart" buttons ─────────────────────────────
// Single delegated listener — handles both static and dynamically injected tiles.
function wireAddToCartButtons() {
  const selector = [
    ".c-product-add-bag__button",
    '[class*="add-bag"]',
    '[class*="add-to-cart"]',
    "button[data-js-add-to-cart]",
  ].join(", ");

  document.querySelectorAll(selector).forEach((btn) => {
    if (btn.dataset.atcWired) return; // don't double-wire
    btn.dataset.atcWired = "true";

    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const tile = btn.closest("[data-analytics]");

      // ── Strategy 1: data-analytics attribute (original approach) ──
      let item = null;
      if (tile) {
        try {
          const analyticsData = JSON.parse(tile.getAttribute("data-analytics"));
          const product = analyticsData?.products?.[0];
          if (product) {
            const sizeSelect = tile.querySelector("select[data-js-field]");
            const selectedOption =
              sizeSelect?.options[sizeSelect.selectedIndex];
            const size =
              selectedOption?.textContent?.trim() || product.size || "";
            const pid =
              selectedOption?.getAttribute("data-js-pid") || product.pid;
            const img = tile.querySelector("img[data-src], img[src]");
            const imageUrl =
              img?.getAttribute("data-src") ||
              img?.getAttribute("src") ||
              product.imgUrl ||
              "";

            item = {
              pid,
              url: product.url || window.location.pathname,
              name: product.name || product.title || "",
              subname: product.subname || "",
              price: product.salePrice || product.price || 0,
              imageUrl:
                window.AnantaraCF?.toCloudflareSrc(imageUrl) || imageUrl,
              size,
              qty: 1,
            };
          }
        } catch {}
      }

      // ── Strategy 2: data-* overrides + DOM scrape fallback ────────
      if (!item) {
        const scraped = extractProductFromTile(btn);
        item = {
          ...scraped,
          ...(btn.dataset.pid ? { pid: btn.dataset.pid } : {}),
          ...(btn.dataset.url ? { url: btn.dataset.url } : {}),
          ...(btn.dataset.name ? { name: btn.dataset.name } : {}),
          ...(btn.dataset.price
            ? { price: parseFloat(btn.dataset.price) }
            : {}),
          ...(btn.dataset.size ? { size: btn.dataset.size } : {}),
          ...(btn.dataset.imageUrl ? { imageUrl: btn.dataset.imageUrl } : {}),
          ...(btn.dataset.qty ? { qty: parseInt(btn.dataset.qty) } : {}),
        };
      }

      btn.disabled = true;
      const originalHTML = btn.innerHTML;
      btn.innerHTML = "<span>Adding…</span>";

      try {
        await AnantaraCart.add(item);
        btn.innerHTML = "<span>Added ✓</span>";
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.disabled = false;
        }, 2000);
      } catch (err) {
        console.error("Add to cart failed:", err);
        btn.innerHTML = originalHTML;
        btn.disabled = false;
      }
    });
  });
}

// ── MutationObserver for dynamically injected tiles (from add-to-cart.js) ──
const atcObserver = new MutationObserver(() => wireAddToCartButtons());
atcObserver.observe(document.body, { childList: true, subtree: true });

// ── Init ──────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", wireAddToCartButtons);

// ── Global alias so inline onclick="" calls also work ─────────
window.addToCart = (item) => AnantaraCart.add(item);
