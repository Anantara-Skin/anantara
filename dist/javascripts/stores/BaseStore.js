import { createStore as o } from "../vendors/storeon.js";
import { deepMerge as e } from "../toolbox/deepMerge.js";
class r {
  constructor(r = {}, t = {}) {
    return o([
      (o) => {
        o.on("@init", () => r), o.on("update", (o, r) => e(o, r));
        const n = Object.entries(t);
        for (const [e, r] of n) {
          if ("update" === e)
            return void console.error('"update" action name is reserved');
          r && "function" == typeof r
            ? o.on(e, r)
            : console.error(`The action "${e}" is not a function`);
        }
      },
    ]);
  }
}
export { r as default };
