import { Event as t } from "../services/EventEmitter.js";
import e from "../constants/breakpoints.js";
const n = {
  breakpoints: e,
  current: null,
  _init() {
    this.init ||
      ((this.init = !0),
      (this.current = this._getCurrentSize()),
      this.bindEvents());
  },
  bindEvents() {
    t.on("page.resized", this.onResize, this);
  },
  onResize() {
    const e = this._getCurrentSize(),
      n = this.current;
    e !== n &&
      ((this.current = e),
      t.emit("mediaQuery.changed", { size: e, oldSize: n }));
  },
  is(t) {
    this.current || this._init();
    const e = t.toLowerCase().trim().split(" "),
      n = e.length,
      i = e[0];
    if (!(n > 1)) return this.atLeast(i);
    {
      const t = e[1];
      if ("only" !== t && "down" !== t)
        throw new Error(
          'only keyword "only" and "down" are allowed to be used',
        );
      if ("only" === t && i === this.current) return !0;
      if ("down" === t) return this.atMost(i);
    }
    return !1;
  },
  atLeast(t) {
    return this.current || this._init(), this.matchQuery(t);
  },
  atMost(t) {
    return this.current || this._init(), this.matchQuery(t, !1);
  },
  matchQuery(t, e = !0) {
    if ((this.current || this._init(), !t || "string" != typeof t)) return !1;
    const n = t.toLowerCase(),
      i = this.get(n, !!e);
    return !!i && window.matchMedia(i).matches;
  },
  get(t, n = !0) {
    if ((this.current || this._init(), t && "string" == typeof t)) {
      const i = t.toUpperCase(),
        r = e[i];
      if (r) return this._getBreakpointValue(r, n);
    }
    return null;
  },
  _getBreakpointValue(t, e) {
    if (!e && !t.max) return `only screen and (min-width: ${t.min}px)`;
    const n = e ? t.min : t.max;
    return n || 0 === n
      ? `only screen and (${e ? "min" : "max"}-width: ${n}px)`
      : null;
  },
  _getCurrentSize() {
    let t;
    return (
      Object.keys(e).forEach((n) => {
        if (t) return;
        const i = e[n];
        let r = "only screen";
        (i.min || 0 === i.min) && (r += ` and (min-width:  ${i.min}px)`),
          i.max && (r += ` and (max-width:  ${i.max}px)`),
          window.matchMedia(r).matches && ((t = i), (t.name = n.toLowerCase()));
      }),
      "object" == typeof t ? t.name : t
    );
  },
};
export { n as mediaQuery };
