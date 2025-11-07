import { mediaQuery as t } from "../../toolbox/mediaQuery.js";
const n = {
  isContext: function (n) {
    const o = n.getAttribute("data-component-context");
    return !o || t.is(o);
  },
  isForceLoad: function (n) {
    const o = n.getAttribute("data-component-force");
    if (null === o) return !1;
    let e = "small";
    return "" !== o && (e = o), t.is(e);
  },
  isUnforceLoad: function (n) {
    const o = n.getAttribute("data-component-unforce");
    if (null === o) return !1;
    let e = "small";
    return "" !== o && (e = o), t.is(e);
  },
};
export { n as default };
