const CART_TTL_SECONDS = 60 * 60 * 24 * 30;
const ALLOWED_ORIGINS = ['https://anantara.africa', 'http://127.0.0.1:5502', 'http://localhost:5502'];

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : '',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Cart-Token',
    'Access-Control-Allow-Credentials': 'true',
  };
}

function jsonResponse(data, status = 200, origin = '') {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}

function cartKey(token) { return `cart:${token}`; }
function generateToken() { return crypto.randomUUID(); }

// ── KV: GET ───────────────────────────────────────────────────
async function getCart(token, env) {
  const raw = await env.CART_KV.get(cartKey(token));  // KV GET
  if (!raw) return { token, items: [], updatedAt: Date.now() };
  return JSON.parse(raw);
}

// ── KV: PUT ───────────────────────────────────────────────────
async function saveCart(cart, env) {
  await env.CART_KV.put(cartKey(cart.token), JSON.stringify(cart), {  // KV PUT
    expirationTtl: CART_TTL_SECONDS,
  });
}

async function syncToFirebase(cart, firebaseToken, env) {
  if (!firebaseToken) return;
  const projectId = env.FIREBASE_PROJECT_ID;
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/carts/${cart.token}`;
  const body = {
    fields: {
      token:     { stringValue: cart.token },
      items:     { stringValue: JSON.stringify(cart.items) },
      updatedAt: { integerValue: String(cart.updatedAt) },
    },
  };
  await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${firebaseToken}` },
    body: JSON.stringify(body),
  }).catch(() => {});
}

function parseCookie(cookieString, name) {
  const match = cookieString.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    try {
      const url = new URL(request.url);

      let token = request.headers.get('X-Cart-Token') || parseCookie(request.headers.get('Cookie') || '', 'cart_token');

      const authHeader = request.headers.get('Authorization') || '';
      const firebaseToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

      // POST /cart/add
      if (url.pathname === '/cart/add' && request.method === 'POST') {
        const body = await request.json();
        const { pid, url: productUrl, name, subname, price, imageUrl, size, qty = 1 } = body;

        if (!pid || !productUrl) return jsonResponse({ error: 'pid and url are required' }, 400, origin);

        if (!token) token = generateToken();
        const cart = await getCart(token, env);

        const existingIdx = cart.items.findIndex((i) => i.pid === pid && i.size === size);
        if (existingIdx > -1) {
          cart.items[existingIdx].qty += qty;
        } else {
          cart.items.push({ pid, url: productUrl, name, subname, price, imageUrl, size, qty });
        }

        cart.updatedAt = Date.now();
        await saveCart(cart, env);
        ctx.waitUntil(syncToFirebase(cart, firebaseToken, env));

        const response = jsonResponse({ success: true, token, cart }, 200, origin);
        response.headers.append('Set-Cookie', `cart_token=${token}; Path=/; Max-Age=${CART_TTL_SECONDS}; SameSite=None`);
        return response;
      }

      // GET /cart
      if (url.pathname === '/cart' && request.method === 'GET') {
        if (!token) return jsonResponse({ token: null, items: [] }, 200, origin);
        const cart = await getCart(token, env);
        return jsonResponse(cart, 200, origin);
      }

      // POST /cart/remove
      if (url.pathname === '/cart/remove' && request.method === 'POST') {
        const { pid, size } = await request.json();
        if (!token) return jsonResponse({ error: 'No cart' }, 400, origin);
        const cart = await getCart(token, env);
        cart.items = cart.items.filter((i) => !(i.pid === pid && i.size === size));
        cart.updatedAt = Date.now();
        await saveCart(cart, env);
        ctx.waitUntil(syncToFirebase(cart, firebaseToken, env));
        return jsonResponse({ success: true, cart }, 200, origin);
      }

      // POST /cart/update
      if (url.pathname === '/cart/update' && request.method === 'POST') {
        const { pid, size, qty } = await request.json();
        if (!token) return jsonResponse({ error: 'No cart' }, 400, origin);
        const cart = await getCart(token, env);
        const item = cart.items.find((i) => i.pid === pid && i.size === size);
        if (item) item.qty = Math.max(0, qty);
        cart.items = cart.items.filter((i) => i.qty > 0);
        cart.updatedAt = Date.now();
        await saveCart(cart, env);
        ctx.waitUntil(syncToFirebase(cart, firebaseToken, env));
        return jsonResponse({ success: true, cart }, 200, origin);
      }

      // DELETE /cart  ← KV DELETE
      if (url.pathname === '/cart' && request.method === 'DELETE') {
        if (token) await env.CART_KV.delete(cartKey(token));  // KV DELETE
        return jsonResponse({ success: true }, 200, origin);
      }

      // GET /cart/debug  ← KV LIST (remove in production!)
      if (url.pathname === '/cart/debug' && request.method === 'GET') {
        const allKeys = await env.CART_KV.list();             // KV LIST
        return jsonResponse({ allKeys }, 200, origin);
      }

      return jsonResponse({ error: 'Not found' }, 404, origin);

    } catch (err) {
      console.error('Worker error:', err);
      return jsonResponse({ error: err.message }, 500, origin);
    }
  },
};