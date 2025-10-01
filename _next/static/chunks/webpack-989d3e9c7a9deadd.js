(() => {
  "use strict";
  var e = {},
    t = {};
  function r(a) {
    var o = t[a];
    if (void 0 !== o) return o.exports;
    var d = (t[a] = { id: a, loaded: !1, exports: {} }),
      n = !0;
    try {
      e[a].call(d.exports, d, d.exports, r), (n = !1);
    } finally {
      n && delete t[a];
    }
    return (d.loaded = !0), d.exports;
  }
  (r.m = e),
    (r.amdO = {}),
    (() => {
      var e = [];
      r.O = (t, a, o, d) => {
        if (a) {
          d = d || 0;
          for (var n = e.length; n > 0 && e[n - 1][2] > d; n--) e[n] = e[n - 1];
          e[n] = [a, o, d];
          return;
        }
        for (var c = 1 / 0, n = 0; n < e.length; n++) {
          for (var [a, o, d] = e[n], i = !0, f = 0; f < a.length; f++)
            (!1 & d || c >= d) && Object.keys(r.O).every((e) => r.O[e](a[f]))
              ? a.splice(f--, 1)
              : ((i = !1), d < c && (c = d));
          if (i) {
            e.splice(n--, 1);
            var l = o();
            void 0 !== l && (t = l);
          }
        }
        return t;
      };
    })(),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      r.t = function (a, o) {
        if (
          (1 & o && (a = this(a)),
          8 & o ||
            ("object" == typeof a &&
              a &&
              ((4 & o && a.__esModule) ||
                (16 & o && "function" == typeof a.then))))
        )
          return a;
        var d = Object.create(null);
        r.r(d);
        var n = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var c = 2 & o && a;
          "object" == typeof c && !~e.indexOf(c);
          c = t(c)
        )
          Object.getOwnPropertyNames(c).forEach((e) => (n[e] = () => a[e]));
        return (n.default = () => a), r.d(d, n), d;
      };
    })(),
    (r.d = (e, t) => {
      for (var a in t)
        r.o(t, a) &&
          !r.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (r.f = {}),
    (r.e = (e) =>
      Promise.all(Object.keys(r.f).reduce((t, a) => (r.f[a](e, t), t), []))),
    (r.u = (e) =>
      "static/chunks/" +
      ({ 8381: "7b59f00e", 9777: "recorder" }[e] || e) +
      "." +
      {
        481: "ef3e4a66e2cb0ce9",
        1097: "02dd52c592d4f602",
        1473: "70841ccf4f5ba6bc",
        2793: "8caad2f8f7ee7ce4",
        3217: "2ba34c82faecba0d",
        3867: "40c84a83db94b6bc",
        4950: "94cbb6ae91d42217",
        5084: "ff63f8642e767ded",
        5219: "2a2e1f66787320d5",
        5487: "c64b13bb578d5077",
        5680: "b7ebabbb072c7a73",
        5745: "133ad2be2afbea67",
        5925: "038e7a687de807b7",
        5985: "0d08fea08c059918",
        6139: "45ae5b0d28206c62",
        6475: "1f20b8f4869daa40",
        6564: "9b233d0b7e8f2a1a",
        6871: "d9572205b3e65273",
        6905: "e38a260755d82b8d",
        6991: "a8642d85a544c94f",
        7015: "1a19d16dee13d165",
        7595: "f5f728b690ebc65d",
        8283: "47779f3dcbfc4d8a",
        8381: "e764b63bdfeeccf6",
        8875: "adee73111393742b",
        8936: "4424cb0f5a85547e",
        9534: "31076d994ae9c716",
        9777: "08fca6dd91296a59",
      }[e] +
      ".js"),
    (r.miniCssF = (e) => {}),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "_N_E:";
      r.l = (a, o, d, n) => {
        if (e[a]) {
          e[a].push(o);
          return;
        }
        if (void 0 !== d)
          for (
            var c, i, f = document.getElementsByTagName("script"), l = 0;
            l < f.length;
            l++
          ) {
            var u = f[l];
            if (
              u.getAttribute("src") == a ||
              u.getAttribute("data-webpack") == t + d
            ) {
              c = u;
              break;
            }
          }
        c ||
          ((i = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          r.nc && c.setAttribute("nonce", r.nc),
          c.setAttribute("data-webpack", t + d),
          (c.src = r.tu(a))),
          (e[a] = [o]);
        var b = (t, r) => {
            (c.onerror = c.onload = null), clearTimeout(s);
            var o = e[a];
            if (
              (delete e[a],
              c.parentNode && c.parentNode.removeChild(c),
              o && o.forEach((e) => e(r)),
              t)
            )
              return t(r);
          },
          s = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: c }),
            12e4,
          );
        (c.onerror = b.bind(null, c.onerror)),
          (c.onload = b.bind(null, c.onload)),
          i && document.head.appendChild(c);
      };
    })(),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      r.tt = () => (
        void 0 === e &&
          ((e = { createScriptURL: (e) => e }),
          "undefined" != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (e = trustedTypes.createPolicy("nextjs#bundler", e))),
        e
      );
    })(),
    (r.tu = (e) => r.tt().createScriptURL(e)),
    (r.p = "/_next/"),
    (() => {
      var e = { 8068: 0, 787: 0, 5271: 0, 4613: 0 };
      (r.f.j = (t, a) => {
        var o = r.o(e, t) ? e[t] : void 0;
        if (0 !== o) {
          if (o) a.push(o[2]);
          else if (/^(4613|5271|787|8068)$/.test(t)) e[t] = 0;
          else {
            var d = new Promise((r, a) => (o = e[t] = [r, a]));
            a.push((o[2] = d));
            var n = r.p + r.u(t),
              c = Error();
            r.l(
              n,
              (a) => {
                if (r.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var d = a && ("load" === a.type ? "missing" : a.type),
                    n = a && a.target && a.target.src;
                  (c.message =
                    "Loading chunk " + t + " failed.\n(" + d + ": " + n + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = d),
                    (c.request = n),
                    o[1](c);
                }
              },
              "chunk-" + t,
              t,
            );
          }
        }
      }),
        (r.O.j = (t) => 0 === e[t]);
      var t = (t, a) => {
          var o,
            d,
            [n, c, i] = a,
            f = 0;
          if (n.some((t) => 0 !== e[t])) {
            for (o in c) r.o(c, o) && (r.m[o] = c[o]);
            if (i) var l = i(r);
          }
          for (t && t(a); f < n.length; f++)
            (d = n[f]), r.o(e, d) && e[d] && e[d][0](), (e[d] = 0);
          return r.O(l);
        },
        a = (self.webpackChunk_N_E = self.webpackChunk_N_E || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })(),
    (r.nc = void 0);
})();
