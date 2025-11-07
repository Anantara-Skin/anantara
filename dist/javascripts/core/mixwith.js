const t = "__mixwith_appliedMixin"
  , e = "__mixwith_wrappedMixin"
  , r = t => t[e] || t
  , s = (e, s) => {
    const n = s(e);
    return n.prototype[t] = r(s),
    n
}
  , n = (e, s) => e.hasOwnProperty(t) && e[t] === r(s)
  , o = (t, e) => {
    for (; null != t; ) {
        if (n(t, e))
            return !0;
        t = Object.getPrototypeOf(t)
    }
    return !1
}
  , c = (t, r) => (Object.setPrototypeOf(r, t),
t[e] || (t[e] = t),
r)
  , i = "__mixwith_cachedApplications"
  , p = t => c(t, e => {
    let r = e[i];
    r || (e[i] = new Map,
    r = e[i]);
    let s = r.get(t);
    return s || (s = t(e),
    r.set(t, s)),
    s
}
)
  , a = t => c(t, e => o(e.prototype, t) ? e : t(e))
  , l = t => (Symbol && Symbol.hasInstance && !t[Symbol.hasInstance] && Object.defineProperty(t, Symbol.hasInstance, {
    value: e => o(e, t)
}),
t)
  , h = t => c(t, e => s(e, t))
  , u = t => a(h(t));
class y {
    constructor(t) {
        this.superclass = t || class {
        }
    }
    with(...t) {
        return t.reduce( (t, e) => e(t), this.superclass)
    }
}
const _ = t => new y(t);
export {h as BareMixin, p as Cached, a as DeDupe, l as HasInstance, u as Mixin, s as apply, o as hasMixin, n as isApplicationOf, _ as mix, r as unwrap, c as wrap};

