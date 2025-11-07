import { Event as e } from "../services/EventEmitter.js";
import t from "../constants/httpStatusCode.js";
let n = {};
const r = {},
  o = function (e) {
    let t = {};
    if (e instanceof Headers) for (const [n, r] of e.entries()) t[n] = r;
    else t = e;
    return t;
  },
  s = function (e, t) {
    return e + JSON.stringify(t);
  },
  i = function (e, t) {
    const n = s(e, t);
    delete r[n];
  },
  c = function (e) {
    const { errorMessage: t } = e,
      n = new Error(t);
    throw ((n.errorMessage = t), (n.data = e), n);
  },
  a = function (e) {
    return (
      "object" == typeof e &&
        e.redirectUrl &&
        ((window.location.href = e.redirectUrl), (e.redirectInProgress = !0)),
      e
    );
  },
  u = function (e) {
    const t = e.headers.get("content-type") || "";
    let n = null;
    return (
      (n = t.includes("application/json")
        ? e.json()
        : t.includes("text/html")
          ? e.text().then((e) => ({ errorMessage: e }))
          : Promise.resolve({})),
      n.then(c)
    );
  },
  f = function (t, n = {}) {
    const r = t.headers.get("content-type") || "";
    let o = null;
    return (
      (o = r.includes("application/json")
        ? t.json()
        : r.includes("text/html")
          ? t.text().then((e) => ({ errorMessage: e }))
          : Promise.resolve({})),
      o
        .then((t) => {
          var r;
          return (
            n.showGlobalErrorMessage &&
              ((r = t.errorMessage),
              e.emit("globalMessage.show", { type: "error", content: r })),
            t
          );
        })
        .then(c)
    );
  },
  l = function (n, r) {
    if (!r.ok) {
      const { statusText: s, status: i, headers: c } = r;
      if (i === t.VALIDATION_ERROR) return u(r);
      if (i === t.AUTHENTIFICATION_ERROR) {
        const { loginUrl: t, configId: r } = n;
        (o = { configId: r }),
          import("../services/Resources.js").then(({ getResources: t }) =>
            t().then((t) => {
              e.emit("modal.open", {
                options: Object.assign({}, t.data.LOGIN_MODAL_OPTIONS, {
                  configId: o.configId,
                  afterClose: () => {
                    e.emit("login.modal.close");
                  },
                }),
              });
            }),
          );
      }
      if (i === t.FORBIDDEN_ERROR) return r.json().then(a);
      if (i === t.GONE_ERROR)
        return Number(c.get("X-SF-CC-CUSTOM-STATUS")) === t.VALIDATION_ERROR
          ? u(r)
          : (window.location.reload(), f(r));
      if ("5" === `${i}`.charAt(0)) return f(r, n);
      const l = new Error(s);
      throw ((l.errorMessage = s), (l.response = r), (l.status = i), l);
    }
    var o;
    return r;
  },
  d = function (e) {
    const t = e.headers.get("content-type");
    if (t) {
      if (t.includes("application/json")) return e.json();
      if (t.includes("text/html")) return e.text();
    }
    return e;
  },
  h = function (e) {
    if (e && !1 === e.success) throw e;
    return e;
  };
function g(e, t = {}) {
  const c = t;
  if (
    ((c.headers = Object.assign({}, o(c.headers), n)),
    (c.method = c.method || "GET"),
    (c.credentials = "same-origin"),
    c.body && "string" != typeof c.body && !(c.body instanceof FormData))
  ) {
    const e = new FormData();
    Object.entries(c.body).forEach(([t, n]) => e.append(t, n)), (c.body = e);
  }
  void 0 === c.showGlobalErrorMessage && (c.showGlobalErrorMessage = !0);
  const u = (function (e, t) {
    const n = s(e, t);
    return r[n];
  })(e, c);
  if (u) return u;
  const f = -1 === e.indexOf("?") ? "?" : "&";
  let g = `${e + f}ajax=true`;
  c.configId && (g += `&configId=${c.configId}`);
  const m = fetch(g, c)
    .then(l.bind(null, c))
    .then(d)
    .then(a)
    .then(h)
    .then((t) => (i(e, c), t))
    .catch((t) => (i(e, c), Promise.reject(t)));
  return (
    (function (e, t, n) {
      const o = s(e, t);
      r[o] = n;
    })(e, c, m),
    m
  );
}
function m(e) {
  n = o(e);
}
export { g as ajax, m as setDefaultHeaders };
