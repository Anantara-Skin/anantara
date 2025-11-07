function r(r) {
  return (
    r &&
    "object" == typeof r &&
    "[object RegExp]" !== Object.prototype.toString.call(r) &&
    "[object Date]" !== Object.prototype.toString.call(r)
  );
}
function t(t, e) {
  return e && !0 === e.clone && r(t)
    ? n(((o = t), Array.isArray(o) ? [] : {}), t, e)
    : t;
  var o;
}
function e(e, o, a) {
  const c = e.slice();
  return (
    o.forEach((o, i) => {
      void 0 === c[i]
        ? (c[i] = t(o, a))
        : r(o)
          ? (c[i] = n(e[i], o, a))
          : -1 === e.indexOf(o) && c.push(t(o, a));
    }),
    c
  );
}
function n(o, a, c) {
  const i = Array.isArray(a),
    u = (c || { arrayMerge: e }).arrayMerge || e;
  return i
    ? Array.isArray(o)
      ? u(o, a, c)
      : t(a, c)
    : (function (e, o, a) {
        const c = {};
        return (
          r(e) &&
            Object.keys(e).forEach((r) => {
              c[r] = t(e[r], a);
            }),
          Object.keys(o).forEach((i) => {
            r(o[i]) && e[i] ? (c[i] = n(e[i], o[i], a)) : (c[i] = t(o[i], a));
          }),
          c
        );
      })(o, a, c);
}
n.all = function (r, t) {
  if (!Array.isArray(r) || r.length < 2)
    throw new Error(
      "first argument should be an array with at least two elements",
    );
  return r.reduce((r, e) => n(r, e, t));
};
export { n as deepMerge };
