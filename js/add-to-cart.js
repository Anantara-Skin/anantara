/**
 * add-to-cart.js
 * Drop this script on any page that has "Add to cart" product tile buttons.
 * It reads product data from data attributes on the button (or its wrapper),
 * posts to the Cloudflare Worker, and keeps the header badge in sync.
 *
 * SETUP:
 *  1. Include this file AFTER your firebase-auth-cart.js
 *  2. Add data attributes to your button (see below)
 *  3. Make sure AnantaraAuth is exposed by firebase-auth-cart.js
 */

(function () {
  'use strict';

  const WORKER_URL = 'https://anantara-cart.anantara-skin.workers.dev';
  const CART_TTL   = 60 * 60 * 24 * 30; // 30 days

  // ── Token helpers ────────────────────────────────────────────────────────
  function getCartToken() {
    const fromCookie = document.cookie
      .split(';')
      .map(c => c.trim())
      .find(c => c.startsWith('cart_token='))
      ?.split('=')[1] || null;
    return fromCookie || localStorage.getItem('cart_token') || null;
  }

  function saveCartToken(token) {
    localStorage.setItem('cart_token', token);
    // Also set as cookie for cross-page persistence
    document.cookie = `cart_token=${token}; path=/; max-age=${CART_TTL}; SameSite=Lax`;
  }

  async function getFirebaseIdToken() {
    if (typeof AnantaraAuth === 'undefined') return null;
    try {
      // AnantaraAuth.getIdToken() should return a Promise<string|null>
      return await AnantaraAuth.getIdToken?.() || null;
    } catch {
      return null;
    }
  }

  // ── Build fetch headers ──────────────────────────────────────────────────
  async function buildHeaders() {
    const headers = { 'Content-Type': 'application/json' };
    const token = getCartToken();
    if (token) headers['X-Cart-Token'] = token;
    const fbToken = await getFirebaseIdToken();
    if (fbToken) headers['Authorization'] = `Bearer ${fbToken}`;
    return headers;
  }

  // ── Toast notification ────────────────────────────────────────────────────
  function showToast(msg, isError = false) {
    let toast = document.getElementById('atc-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'atc-toast';
      Object.assign(toast.style, {
        position:       'fixed',
        bottom:         '24px',
        left:           '50%',
        transform:      'translateX(-50%)',
        background:     isError ? '#c0392b' : '#333',
        color:          '#fff',
        padding:        '0.75rem 1.5rem',
        borderRadius:   '4px',
        fontSize:       '0.9rem',
        zIndex:         '99999',
        opacity:        '0',
        transition:     'opacity 0.3s',
        pointerEvents:  'none',
        whiteSpace:     'nowrap',
      });
      document.body.appendChild(toast);
    }
    toast.textContent  = msg;
    toast.style.background = isError ? '#c0392b' : '#333';
    toast.style.opacity = '1';
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => { toast.style.opacity = '0'; }, 2800);
  }

  // ── Update header cart badge ──────────────────────────────────────────────
  function updateBadge(delta) {
    const badge = document.getElementById('headerCartQty');
    if (!badge) return;
    const current = parseInt(badge.textContent) || 0;
    const next = Math.max(0, current + delta);
    badge.textContent = next;
    // Animate the badge briefly
    badge.style.transform = 'scale(1.4)';
    setTimeout(() => { badge.style.transform = 'scale(1)'; }, 250);
  }

  // ── Extract product data from a button or its ancestors ──────────────────
  /**
   * Priority order for finding product data:
   *  1. data-* attributes directly on the <button>
   *  2. Closest ancestor with data-pid (e.g. .c-product-tile or <article>)
   *  3. Closest <article> / product tile container
   *
   * Expected data attributes (put them on the button OR the tile wrapper):
   *   data-pid        — product ID / SKU  (required)
   *   data-name       — product display name
   *   data-price      — numeric price (e.g. "299.00")
   *   data-image-url  — product image URL
   *   data-url        — product page URL
   *   data-subname    — subtitle / size label (optional)
   *   data-size       — variant / size key (optional)
   */
  function extractProductData(btn) {
    // Walk up to find a container that has at least data-pid
    const container = btn.closest('[data-pid]') || btn.closest('.c-product-tile') || btn.closest('article') || btn;

    const get = (attr) =>
      btn.dataset[attr] ||
      (container !== btn ? container.dataset[attr] : '') ||
      '';

    const pid = get('pid');
    if (!pid) {
      // Last-ditch: try reading from a sibling or nearby element
      console.warn('[add-to-cart] No data-pid found near button:', btn);
      return null;
    }

    // Resolve image: try data-image-url, then first <img> in the tile
    let imageUrl = get('imageUrl') || get('image');
    if (!imageUrl) {
      const img = (container !== btn ? container : document).querySelector('img');
      if (img) imageUrl = img.src || img.dataset.src || '';
    }

    // Resolve product page URL
    const productUrl =
      get('url') ||
      (container !== btn ? container.querySelector('a')?.href : '') ||
      window.location.href;

    return {
      pid,
      name:       get('name')    || document.title,
      subname:    get('subname') || get('variant') || '',
      price:      parseFloat(get('price')) || 0,
      imageUrl:   imageUrl || '',
      url:        productUrl,
      size:       get('size')    || get('variant') || '',
      qty:        parseInt(get('qty')) || 1,
    };
  }

  // ── Core add-to-cart call ─────────────────────────────────────────────────
  async function addToCart(btn) {
    const product = extractProductData(btn);
    if (!product || !product.pid) {
      showToast('Could not identify product. Please try again.', true);
      return;
    }

    // Visual feedback on button
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span>Adding…</span>';

    try {
      const headers = await buildHeaders();
      const res = await fetch(`${WORKER_URL}/cart/add`, {
        method:      'POST',
        credentials: 'include',
        headers,
        body: JSON.stringify(product),
      });

      if (!res.ok) throw new Error(`Worker responded ${res.status}`);

      const data = await res.json();

      // Persist the cart token for future requests
      if (data.token) saveCartToken(data.token);

      updateBadge(product.qty);
      showToast(`"${product.name}" added to cart ✓`);

      // Brief success state on button before restoring
      btn.innerHTML = '<span>Added ✓</span>';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled  = false;
      }, 1500);

    } catch (err) {
      console.error('[add-to-cart] Error:', err);
      showToast('Could not add item. Please try again.', true);
      btn.innerHTML = originalText;
      btn.disabled  = false;
    }
  }

  // ── Event delegation — catches ALL "Add to cart" buttons on the page ─────
  document.addEventListener('click', function (e) {
    const btn =
      e.target.closest('.c-product-add-bag__button') ||
      e.target.closest('[data-js-add-to-cart]');

    if (!btn) return;
    e.preventDefault();
    addToCart(btn);
  });

  // ── Badge transition style (injected once) ────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #headerCartQty { transition: transform 0.2s cubic-bezier(.36,1.6,.54,1); display: inline-block; }
  `;
  document.head.appendChild(style);

})();