const CART_TTL_SECONDS = 60 * 60 * 24 * 30;
const ALLOWED_ORIGINS = [
	'https://anantara.africa',
	'http://127.0.0.1:5502',
	'http://localhost:5502',
	'http://127.0.0.1:5515',
	'http://localhost:5515',
];

// ── CORS ──────────────────────────────────────────────────────
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

function cartKey(id) {
	return `cart:${id}`;
}

function parseCookie(cookieString, name) {
	const match = cookieString.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
	return match ? decodeURIComponent(match[1]) : null;
}

// ── Firebase token verification ───────────────────────────────
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

// ── KV helpers ────────────────────────────────────────────────
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

async function clearCart(cartId, env) {
	await env.CART_KV.delete(cartKey(cartId));
}

// ── Merge guest cart into user cart on sign-in ────────────────
async function mergeGuestCart(guestToken, userCart, env) {
	if (!guestToken) return userCart;
	const guestCart = await env.CART_KV.get(cartKey(guestToken));
	if (!guestCart) return userCart;

	const guest = JSON.parse(guestCart);
	for (const guestItem of guest.items) {
		const idx = userCart.items.findIndex((i) => i.pid === guestItem.pid && i.size === guestItem.size);
		if (idx > -1) {
			userCart.items[idx].qty += guestItem.qty;
		} else {
			userCart.items.push(guestItem);
		}
	}

	await env.CART_KV.delete(cartKey(guestToken));
	return userCart;
}

// ── Sync cart to Firestore carts/{uid} ────────────────────────
async function syncToFirebase(cart, uid, firebaseToken, env) {
	if (!uid || !firebaseToken) return;

	const url = `https://firestore.googleapis.com/v1/projects/${env.FIREBASE_PROJECT_ID}/databases/(default)/documents/carts/${uid}`;
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

// ── Write a pending order to Firestore orders/{orderId} ───────
async function createFirestoreOrder(orderId, userId, items, total, shippingAddress, firebaseToken, env) {
	const url = `https://firestore.googleapis.com/v1/projects/${env.FIREBASE_PROJECT_ID}/databases/(default)/documents/orders/${orderId}`;
	const body = {
		fields: {
			orderId: { stringValue: orderId },
			userId: { stringValue: userId },
			status: { stringValue: 'pending' },
			total: { doubleValue: total },
			items: { stringValue: JSON.stringify(items) },
			shippingAddress: { stringValue: JSON.stringify(shippingAddress) },
			createdAt: { integerValue: String(Date.now()) },
		},
	};

	await fetch(url, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${firebaseToken}`,
		},
		body: JSON.stringify(body),
	});
}

// ── Update an existing Firestore document ─────────────────────
async function updateFirestoreOrder(orderId, fields, env) {
	// Uses the Firebase service account stored as a Worker secret
	const tokenRes = await fetch(`https://oauth2.googleapis.com/token`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({
			grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
			assertion: env.FIREBASE_SERVICE_ACCOUNT_JWT, // Worker secret
		}),
	});
	const { access_token } = await tokenRes.json();

	const url = `https://firestore.googleapis.com/v1/projects/${env.FIREBASE_PROJECT_ID}/databases/(default)/documents/orders/${orderId}`;

	const firestoreFields = {};
	for (const [key, value] of Object.entries(fields)) {
		if (typeof value === 'number') {
			firestoreFields[key] = { doubleValue: value };
		} else {
			firestoreFields[key] = { stringValue: String(value) };
		}
	}

	await fetch(url, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${access_token}`,
		},
		body: JSON.stringify({ fields: firestoreFields }),
	});
}

// ── Verify Yoco webhook signature ─────────────────────────────
async function verifyYocoWebhook(request, env) {
	const signature = request.headers.get('X-Yoco-Signature') || '';
	const body = await request.text();
	const key = await crypto.subtle.importKey(
		'raw',
		new TextEncoder().encode(env.YOCO_WEBHOOK_SECRET),
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['verify'],
	);
	const sigBytes = Uint8Array.from(atob(signature), (c) => c.charCodeAt(0));
	const valid = await crypto.subtle.verify('HMAC', key, sigBytes, new TextEncoder().encode(body));
	return { valid, body };
}

// ─────────────────────────────────────────────────────────────
export default {
	async fetch(request, env, ctx) {
		const origin = request.headers.get('Origin') || '';

		// ── Preflight ─────────────────────────────────────────────
		if (request.method === 'OPTIONS') {
			return new Response(null, { status: 204, headers: corsHeaders(origin) });
		}

		try {
			const url = new URL(request.url);

			// ── Auth & token resolution ───────────────────────────
			const guestToken = request.headers.get('X-Cart-Token') || parseCookie(request.headers.get('Cookie') || '', 'cart_token');

			const authHeader = request.headers.get('Authorization') || '';
			const rawIdToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
			const firebaseUser = await verifyFirebaseToken(rawIdToken, env);

			const cartId = firebaseUser?.uid || guestToken || generateToken();
			const isUser = !!firebaseUser?.uid;

			// ════════════════════════════════════════════════════════
			// CART ROUTES
			// ════════════════════════════════════════════════════════

			// ── GET /cart ─────────────────────────────────────────
			if (url.pathname === '/cart' && request.method === 'GET') {
				if (!cartId) return jsonResponse({ id: null, items: [] }, 200, origin);
				let cart = await getCart(cartId, env);
				cart.id = cartId;

				if (isUser && guestToken && guestToken !== cartId) {
					cart = await mergeGuestCart(guestToken, cart, env);
					await saveCart(cart, env);
				}

				return jsonResponse(cart, 200, origin);
			}

			// ── POST /cart/add ────────────────────────────────────
			if (url.pathname === '/cart/add' && request.method === 'POST') {
				const body = await request.json();
				const { pid, url: productUrl, name, subname, price, imageUrl, size, qty = 1 } = body;

				if (!pid || !productUrl) {
					return jsonResponse({ error: 'pid and url are required' }, 400, origin);
				}

				let cart = await getCart(cartId, env);
				cart.id = cartId;

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

			// ── POST /cart/remove ─────────────────────────────────
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

			// ── POST /cart/update ─────────────────────────────────
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

			// ── DELETE /cart ──────────────────────────────────────
			if (url.pathname === '/cart' && request.method === 'DELETE') {
				await clearCart(cartId, env);
				return jsonResponse({ success: true }, 200, origin);
			}

			// ════════════════════════════════════════════════════════
			// CHECKOUT ROUTES
			// ════════════════════════════════════════════════════════

			// ── POST /checkout/create ─────────────────────────────
			if (url.pathname === '/checkout/create' && request.method === 'POST') {
				// Must be signed in to checkout
				if (!firebaseUser) {
					return jsonResponse({ error: 'Authentication required' }, 401, origin);
				}

				const { items, shippingAddress } = await request.json();

				if (!items?.length) {
					return jsonResponse({ error: 'Cart is empty' }, 400, origin);
				}

				const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
				const orderId = crypto.randomUUID();
				const userId = firebaseUser.uid;

				// 1. Save pending order to Firestore
				await createFirestoreOrder(orderId, userId, items, total, shippingAddress || {}, rawIdToken, env);

				// 2. Create Yoco checkout session
				const yocoRes = await fetch('https://payments.yoco.com/api/checkouts', {
					method: 'POST',
					headers: {
						Authorization: `Bearer ${env.YOCO_SECRET_KEY}`,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						amount: Math.round(total * 100), // Yoco uses cents
						currency: 'ZAR',
						successUrl: `${env.STORE_URL}/order-success.html?orderId=${orderId}`,
						cancelUrl: `${env.STORE_URL}/checkout.html?cancelled=true`,
						metadata: { orderId, userId },
					}),
				});

				if (!yocoRes.ok) {
					const err = await yocoRes.json().catch(() => ({}));
					console.error('Yoco error:', err);
					return jsonResponse({ error: 'Payment provider error' }, 502, origin);
				}

				const session = await yocoRes.json();
				return jsonResponse({ checkoutUrl: session.redirectUrl, orderId }, 200, origin);
			}

			// ── POST /checkout/webhook ────────────────────────────
			// Yoco calls this URL after payment — register it in your Yoco dashboard
			if (url.pathname === '/checkout/webhook' && request.method === 'POST') {
				// Verify the webhook came from Yoco
				const { valid, body: rawBody } = await verifyYocoWebhook(request.clone(), env);
				if (!valid) {
					return new Response('Invalid signature', { status: 401 });
				}

				const event = JSON.parse(rawBody);

				if (event.type === 'payment.succeeded') {
					const { orderId, userId } = event.payload.metadata;

					// Mark order as paid
					await updateFirestoreOrder(
						orderId,
						{
							status: 'paid',
							paymentRef: event.payload.id,
							paidAt: new Date().toISOString(),
						},
						env,
					);

					// Clear the KV cart for this user
					await clearCart(userId, env);
				}

				if (event.type === 'payment.failed') {
					const { orderId } = event.payload.metadata;
					await updateFirestoreOrder(orderId, { status: 'failed' }, env);
				}

				return jsonResponse({ received: true }, 200, origin);
			}

			return jsonResponse({ error: 'Not found' }, 404, origin);
		} catch (err) {
			console.error('Worker error:', err);
			return jsonResponse({ error: err.message }, 500, origin);
		}
	},
};
