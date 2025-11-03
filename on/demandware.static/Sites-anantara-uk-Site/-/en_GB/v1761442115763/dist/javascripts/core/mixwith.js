(function (System, SystemJS) {
  "use strict";
  System.register([], function (a) {
    "use strict";
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p;
    return {
      setters: [],
      execute: function () {
        (c = "__mixwith_appliedMixin"),
          (d = "__mixwith_wrappedMixin"),
          a("unwrap", (e = (a) => a[d] || a)),
          a(
            "apply",
            (f = (a, b) => {
              const d = b(a);
              return (d.prototype[c] = e(b)), d;
            }),
          ),
          a(
            "isApplicationOf",
            (g = (a, b) => a.hasOwnProperty(c) && a[c] === e(b)),
          ),
          a(
            "hasMixin",
            (h = (a, b) => {
              for (; null != a; ) {
                if (g(a, b)) return !0;
                a = Object.getPrototypeOf(a);
              }
              return !1;
            }),
          ),
          a(
            "wrap",
            (i = (a, b) => (
              Object.setPrototypeOf(b, a), a[d] || (a[d] = a), b
            )),
          ),
          (j = "__mixwith_cachedApplications"),
          a(
            "Cached",
            (k = (a) =>
              i(a, (b) => {
                let c = b[j];
                c || ((b[j] = new Map()), (c = b[j]));
                let d = c.get(a);
                return d || ((d = a(b)), c.set(a, d)), d;
              })),
          ),
          a("DeDupe", (l = (a) => i(a, (b) => (h(b.prototype, a) ? b : a(b))))),
          a(
            "HasInstance",
            (m = (a) => (
              Symbol &&
                Symbol.hasInstance &&
                !a[Symbol.hasInstance] &&
                Object.defineProperty(a, Symbol.hasInstance, {
                  value(b) {
                    return h(b, a);
                  },
                }),
              a
            )),
          ),
          a("BareMixin", (n = (a) => i(a, (b) => f(b, a)))),
          a("Mixin", (o = (a) => l(n(a)))),
          (b = class {
            constructor(a) {
              this.superclass = a || class {};
            }
            with() {
              for (var a = arguments.length, b = Array(a), c = 0; c < a; c++)
                b[c] = arguments[c];
              return b.reduce((a, b) => b(a), this.superclass);
            }
          }),
          a("mix", (p = (a) => new b(a)));
      },
    };
  });
  //# sourceMappingURL=mixwith.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/core/mixwith.js
