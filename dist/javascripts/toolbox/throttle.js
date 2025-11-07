function n(n, l, t) {
  let e,
    u,
    i,
    o,
    a = 0;
  t || (t = {});
  const r = Date.now || (() => new Date().getTime()),
    c = () => {
      (a = !1 === t.leading ? 0 : r()),
        (e = null),
        (o = n.apply(u, i)),
        e || ((i = null), (u = null));
    };
  return function (...p) {
    const s = r();
    a || !1 !== t.leading || (a = s);
    const g = l - (s - a);
    return (
      (u = this),
      (i = p),
      g <= 0 || g > l
        ? (e && (clearTimeout(e), (e = null)),
          (a = s),
          (o = n.apply(u, i)),
          e || ((u = null), (i = null)))
        : e || !1 === t.trailing || (e = setTimeout(c, g)),
      o
    );
  };
}
export { n as throttle };
