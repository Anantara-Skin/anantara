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

function generateToken() {
	return crypto.randomUUID();
}

// ── KV key: uid-based for signed-in, token-based for guests ──
function cartKey(id) {
	return `cart:${id}`;
}

// ── Verify Firebase ID token → returns { uid, email } or null ─
async function verifyFirebaseToken(idToken, env) {
	if (!idToken) return null;
	try {
		const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${env.FIREBASE_WEB_API_KEY}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ idToken }),
		});
		if (!res.ok) return null;
		const data = await res.json();
		const user = data.users?.[0];
		if (!user) return null;
		return { uid: user.localId, email: user.email };
	} catch {
		return null;
	}
}

// ── KV helpers ───────────────────────────────────────────────
async function getCart(id, env) {
	const raw = await env.CART_KV.get(cartKey(id));
	if (!raw) return { id, items: [], updatedAt: Date.now() };
	return JSON.parse(raw);
}

async function saveCart(cart, env) {
	await env.CART_KV.put(cartKey(cart.id), JSON.stringify(cart), {
		expirationTtl: CART_TTL_SECONDS,
	});
}

// ── Merge anonymous cart into user cart on sign-in ───────────
async function mergeGuestCart(guestToken, userCart, env) {
	if (!guestToken) return userCart;
	const guestCart = await env.CART_KV.get(cartKey(guestToken));
	if (!guestCart) return userCart;

	const guest = JSON.parse(guestCart);
	for (const guestItem of guest.items) {
		const idx = userCart.items.findIndex((i) => i.pid === guestItem.pid && i.size === guestItem.size);
		if (idx > -1) {
			// Add guest qty to existing item
			userCart.items[idx].qty += guestItem.qty;
		} else {
			userCart.items.push(guestItem);
		}
	}

	// Delete the old guest cart from KV
	await env.CART_KV.delete(cartKey(guestToken));
	return userCart;
}

// ── Sync to Firestore under carts/{uid} ──────────────────────
async function syncToFirebase(cart, uid, firebaseToken, env) {
	if (!uid || !firebaseToken) return; // ✅ only sync signed-in users

	const projectId = env.FIREBASE_PROJECT_ID;
	const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/carts/${uid}`; // ✅ uid not token

	const body = {
		fields: {
			uid: { stringValue: uid },
			cartId: { stringValue: cart.id },
			items: { stringValue: JSON.stringify(cart.items) },
			updatedAt: { integerValue: String(cart.updatedAt) },
		},
	};

	await fetch(url, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${firebaseToken}`,
		},
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

			// Guest cart token (cookie or header)
			const guestToken = request.headers.get('X-Cart-Token') || parseCookie(request.headers.get('Cookie') || '', 'cart_token');

			// Verify Firebase token → get uid
			const authHeader = request.headers.get('Authorization') || '';
			const rawIdToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
			const firebaseUser = await verifyFirebaseToken(rawIdToken, env);

			// ✅ Signed-in users use uid as cart ID; guests use their token
			const cartId = firebaseUser?.uid || guestToken || generateToken();
			const isUser = !!firebaseUser?.uid;

			// ── POST /cart/add ──────────────────────────────────────
			if (url.pathname === '/cart/add' && request.method === 'POST') {
				const body = await request.json();
				const { pid, url: productUrl, name, subname, price, imageUrl, size, qty = 1 } = body;

				if (!pid || !productUrl) {
					return jsonResponse({ error: 'pid and url are required' }, 400, origin);
				}

				let cart = await getCart(cartId, env);
				cart.id = cartId;

				// Merge guest cart into user cart if just signed in
				if (isUser && guestToken && guestToken !== cartId) {
					cart = await mergeGuestCart(guestToken, cart, env);
				}

				const existingIdx = cart.items.findIndex((i) => i.pid === pid && i.size === size);
				if (existingIdx > -1) {
					cart.items[existingIdx].qty += qty;
				} else {
					cart.items.push({ pid, url: productUrl, name, subname, price, imageUrl, size, qty });
				}

				cart.updatedAt = Date.now();
				await saveCart(cart, env);
				ctx.waitUntil(syncToFirebase(cart, firebaseUser?.uid, rawIdToken, env));

				const response = jsonResponse({ success: true, token: cartId, cart }, 200, origin);
				response.headers.append('Set-Cookie', `cart_token=${cartId}; Path=/; Max-Age=${CART_TTL_SECONDS}; SameSite=Lax`);
				return response;
			}

			// ── GET /cart ───────────────────────────────────────────
			if (url.pathname === '/cart' && request.method === 'GET') {
				if (!cartId) return jsonResponse({ id: null, items: [] }, 200, origin);
				let cart = await getCart(cartId, env);
				cart.id = cartId;

				// Merge on GET too (e.g. user loads cart page right after login)
				if (isUser && guestToken && guestToken !== cartId) {
					cart = await mergeGuestCart(guestToken, cart, env);
					await saveCart(cart, env);
				}

				return jsonResponse(cart, 200, origin);
			}

			// ── POST /cart/remove ───────────────────────────────────
			if (url.pathname === '/cart/remove' && request.method === 'POST') {
				const { pid, size } = await request.json();
				const cart = await getCart(cartId, env);
				cart.id = cartId;
				cart.items = cart.items.filter((i) => !(i.pid === pid && i.size === size));
				cart.updatedAt = Date.now();
				await saveCart(cart, env);
				ctx.waitUntil(syncToFirebase(cart, firebaseUser?.uid, rawIdToken, env));
				return jsonResponse({ success: true, cart }, 200, origin);
			}

			// ── POST /cart/update ───────────────────────────────────
			if (url.pathname === '/cart/update' && request.method === 'POST') {
				const { pid, size, qty } = await request.json();
				const cart = await getCart(cartId, env);
				cart.id = cartId;
				const item = cart.items.find((i) => i.pid === pid && i.size === size);
				if (item) item.qty = Math.max(0, qty);
				cart.items = cart.items.filter((i) => i.qty > 0);
				cart.updatedAt = Date.now();
				await saveCart(cart, env);
				ctx.waitUntil(syncToFirebase(cart, firebaseUser?.uid, rawIdToken, env));
				return jsonResponse({ success: true, cart }, 200, origin);
			}

			// ── DELETE /cart ────────────────────────────────────────
			if (url.pathname === '/cart' && request.method === 'DELETE') {
				await env.CART_KV.delete(cartKey(cartId));
				return jsonResponse({ success: true }, 200, origin);
			}

			return jsonResponse({ error: 'Not found' }, 404, origin);
		} catch (err) {
			console.error('Worker error:', err);
			return jsonResponse({ error: err.message }, 500, origin);
		}
	},
};
