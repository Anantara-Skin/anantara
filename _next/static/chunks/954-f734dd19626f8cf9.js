(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [954],
  {
    2033: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGTMEvent = void 0),
        (t.GoogleTagManager = function (e) {
          let {
            gtmId: t,
            gtmScriptUrl: n = "https://www.googletagmanager.com/gtm.js",
            dataLayerName: a = "dataLayer",
            auth: l,
            preview: u,
            dataLayer: c,
            nonce: d,
          } = e;
          s = a;
          let h = "dataLayer" !== a ? "&l=".concat(a) : "";
          return (
            (0, o.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-gtm" },
              });
            }, []),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(i.default, {
                  id: "_next-gtm-init",
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        "
                        .concat(
                          c ? "w[l].push(".concat(JSON.stringify(c), ")") : "",
                          "\n      })(window,'",
                        )
                        .concat(a, "');"),
                  },
                  nonce: d,
                }),
                (0, r.jsx)(i.default, {
                  id: "_next-gtm",
                  "data-ntpc": "GTM",
                  src: ""
                    .concat(n, "?id=")
                    .concat(t)
                    .concat(h)
                    .concat(l ? "&gtm_auth=".concat(l) : "")
                    .concat(
                      u ? "&gtm_preview=".concat(u, "&gtm_cookies_win=x") : "",
                    ),
                  nonce: d,
                }),
              ],
            })
          );
        });
      let r = n(94799),
        o = n(34023),
        i = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(95320)),
        s = "dataLayer";
      t.sendGTMEvent = (e, t) => {
        let n = t || s;
        (window[n] = window[n] || []), window[n].push(e);
      };
    },
    5594: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          let { apiKey: t, ...n } = e,
            r = { ...n, key: t },
            { html: a } = (0, i.GoogleMapsEmbed)(r);
          return (0, o.jsx)(s.default, {
            height: r.height || null,
            width: r.width || null,
            html: a,
            dataNtpc: "GoogleMapsEmbed",
          });
        });
      let o = n(94799),
        i = n(69384),
        s = r(n(36088));
    },
    10580: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}',
      );
    },
    15430: (e) => {
      e.exports = Array.isArray;
    },
    21428: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}',
      );
    },
    29185: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__rest) ||
          function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var o = 0, r = Object.getOwnPropertySymbols(e);
                o < r.length;
                o++
              )
                0 > t.indexOf(r[o]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                  (n[r[o]] = e[r[o]]);
            return n;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.YouTubeEmbed = void 0);
      let i = o(n(21428)),
        s = n(90410);
      t.YouTubeEmbed = (e) => {
        var t = r(e, []);
        return (0, s.formatData)(i.default, t);
      };
    },
    36088: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          let {
            html: t,
            height: n = null,
            width: i = null,
            children: s,
            dataNtpc: a = "",
          } = e;
          return (
            (0, o.useEffect)(() => {
              a &&
                performance.mark("mark_feature_usage", {
                  detail: { feature: "next-third-parties-".concat(a) },
                });
            }, [a]),
            (0, r.jsxs)(r.Fragment, {
              children: [
                s,
                t
                  ? (0, r.jsx)("div", {
                      style: {
                        height: null != n ? "".concat(n, "px") : "auto",
                        width: null != i ? "".concat(i, "px") : "auto",
                      },
                      "data-ntpc": a,
                      dangerouslySetInnerHTML: { __html: t },
                    })
                  : null,
              ],
            })
          );
        });
      let r = n(94799),
        o = n(34023);
    },
    41851: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}',
      );
    },
    43716: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "setAttributesFromProps", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
          noModule: "noModule",
        },
        r = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ];
      function o(e) {
        return ["async", "defer", "noModule"].includes(e);
      }
      function i(e, t) {
        for (let [i, s] of Object.entries(t)) {
          if (!t.hasOwnProperty(i) || r.includes(i) || void 0 === s) continue;
          let a = n[i] || i.toLowerCase();
          "SCRIPT" === e.tagName && o(a)
            ? (e[a] = !!s)
            : e.setAttribute(a, String(s)),
            (!1 === s ||
              ("SCRIPT" === e.tagName && o(a) && (!s || "false" === s))) &&
              (e.setAttribute(a, ""), e.removeAttribute(a));
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    43722: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          Identify: () => a.T,
          Revenue: () => s.n,
          Types: () => r,
          add: () => v,
          createInstance: () => o.Q,
          extendSession: () => m,
          flush: () => y,
          getDeviceId: () => b,
          getSessionId: () => S,
          getUserId: () => w,
          groupIdentify: () => I,
          identify: () => M,
          init: () => C,
          logEvent: () => E,
          remove: () => O,
          reset: () => k,
          revenue: () => x,
          runQueuedFunctions: () => i.UV,
          setDeviceId: () => T,
          setGroup: () => _,
          setOptOut: () => R,
          setSessionId: () => L,
          setTransport: () => D,
          setUserId: () => N,
          track: () => P,
        });
      var r = {};
      n.r(r),
        n.d(r, {
          DEFAULT_ACTION_CLICK_ALLOWLIST: () => g,
          DEFAULT_CSS_SELECTOR_ALLOWLIST: () => f,
          DEFAULT_DATA_ATTRIBUTE_PREFIX: () => p,
          IdentifyOperation: () => l.eX,
          LogLevel: () => u.$,
          OfflineDisabled: () => h.I,
          RevenueProperty: () => l.Kl,
          ServerZone: () => c.e,
          SpecialEventType: () => l.SE,
          Status: () => d.n,
        });
      var o = n(13186),
        i = n(48217),
        s = n(97275),
        a = n(16609),
        l = n(43639),
        u = n(40165),
        c = n(83571),
        d = n(87291),
        h = n(82944),
        f = [
          "a",
          "button",
          "input",
          "select",
          "textarea",
          "label",
          "video",
          "audio",
          '[contenteditable="true" i]',
          "[data-amp-default-track]",
          ".amp-default-track",
        ],
        p = "data-amp-track-",
        g = ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6"],
        v = o.A.add,
        m = o.A.extendSession,
        y = o.A.flush,
        b = o.A.getDeviceId,
        S = o.A.getSessionId,
        w = o.A.getUserId,
        I = o.A.groupIdentify,
        M = o.A.identify,
        C = o.A.init,
        E = o.A.logEvent,
        O = o.A.remove,
        k = o.A.reset,
        x = o.A.revenue,
        T = o.A.setDeviceId,
        _ = o.A.setGroup,
        R = o.A.setOptOut,
        L = o.A.setSessionId,
        D = o.A.setTransport,
        N = o.A.setUserId,
        P = o.A.track;
    },
    47015: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGAEvent =
          t.GoogleAnalytics =
          t.sendGTMEvent =
          t.GoogleTagManager =
          t.YouTubeEmbed =
          t.GoogleMapsEmbed =
            void 0);
      var o = n(5594);
      Object.defineProperty(t, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function () {
          return r(o).default;
        },
      });
      var i = n(93146);
      Object.defineProperty(t, "YouTubeEmbed", {
        enumerable: !0,
        get: function () {
          return r(i).default;
        },
      });
      var s = n(2033);
      Object.defineProperty(t, "GoogleTagManager", {
        enumerable: !0,
        get: function () {
          return s.GoogleTagManager;
        },
      }),
        Object.defineProperty(t, "sendGTMEvent", {
          enumerable: !0,
          get: function () {
            return s.sendGTMEvent;
          },
        });
      var a = n(56481);
      Object.defineProperty(t, "GoogleAnalytics", {
        enumerable: !0,
        get: function () {
          return a.GoogleAnalytics;
        },
      }),
        Object.defineProperty(t, "sendGAEvent", {
          enumerable: !0,
          get: function () {
            return a.sendGAEvent;
          },
        });
    },
    49573: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return y;
          },
          handleClientScriptLoad: function () {
            return g;
          },
          initScriptLoader: function () {
            return v;
          },
        });
      let r = n(55623),
        o = n(30948),
        i = n(94799),
        s = r._(n(56742)),
        a = o._(n(34023)),
        l = n(3308),
        u = n(43716),
        c = n(89776),
        d = new Map(),
        h = new Set(),
        f = (e) => {
          if (s.default.preinit) {
            e.forEach((e) => {
              s.default.preinit(e, { as: "style" });
            });
            return;
          }
          {
            let t = document.head;
            e.forEach((e) => {
              let n = document.createElement("link");
              (n.type = "text/css"),
                (n.rel = "stylesheet"),
                (n.href = e),
                t.appendChild(n);
            });
          }
        },
        p = (e) => {
          let {
              src: t,
              id: n,
              onLoad: r = () => {},
              onReady: o = null,
              dangerouslySetInnerHTML: i,
              children: s = "",
              strategy: a = "afterInteractive",
              onError: l,
              stylesheets: c,
            } = e,
            p = n || t;
          if (p && h.has(p)) return;
          if (d.has(t)) {
            h.add(p), d.get(t).then(r, l);
            return;
          }
          let g = () => {
              o && o(), h.add(p);
            },
            v = document.createElement("script"),
            m = new Promise((e, t) => {
              v.addEventListener("load", function (t) {
                e(), r && r.call(this, t), g();
              }),
                v.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              l && l(e);
            });
          i
            ? ((v.innerHTML = i.__html || ""), g())
            : s
              ? ((v.textContent =
                  "string" == typeof s
                    ? s
                    : Array.isArray(s)
                      ? s.join("")
                      : ""),
                g())
              : t && ((v.src = t), d.set(t, m)),
            (0, u.setAttributesFromProps)(v, e),
            "worker" === a && v.setAttribute("type", "text/partytown"),
            v.setAttribute("data-nscript", a),
            c && f(c),
            document.body.appendChild(v);
        };
      function g(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, c.requestIdleCallback)(() => p(e));
            })
          : p(e);
      }
      function v(e) {
        e.forEach(g),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            h.add(t);
          });
      }
      function m(e) {
        let {
            id: t,
            src: n = "",
            onLoad: r = () => {},
            onReady: o = null,
            strategy: u = "afterInteractive",
            onError: d,
            stylesheets: f,
            ...g
          } = e,
          {
            updateScripts: v,
            scripts: m,
            getIsSsr: y,
            appDir: b,
            nonce: S,
          } = (0, a.useContext)(l.HeadManagerContext),
          w = (0, a.useRef)(!1);
        (0, a.useEffect)(() => {
          let e = t || n;
          w.current || (o && e && h.has(e) && o(), (w.current = !0));
        }, [o, t, n]);
        let I = (0, a.useRef)(!1);
        if (
          ((0, a.useEffect)(() => {
            if (!I.current) {
              if ("afterInteractive" === u) p(e);
              else if ("lazyOnload" === u)
                "complete" === document.readyState
                  ? (0, c.requestIdleCallback)(() => p(e))
                  : window.addEventListener("load", () => {
                      (0, c.requestIdleCallback)(() => p(e));
                    });
              I.current = !0;
            }
          }, [e, u]),
          ("beforeInteractive" === u || "worker" === u) &&
            (v
              ? ((m[u] = (m[u] || []).concat([
                  { id: t, src: n, onLoad: r, onReady: o, onError: d, ...g },
                ])),
                v(m))
              : y && y()
                ? h.add(t || n)
                : y && !y() && p(e)),
          b)
        ) {
          if (
            (f &&
              f.forEach((e) => {
                s.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === u)
          )
            return n
              ? (s.default.preload(
                  n,
                  g.integrity
                    ? {
                        as: "script",
                        integrity: g.integrity,
                        nonce: S,
                        crossOrigin: g.crossOrigin,
                      }
                    : { as: "script", nonce: S, crossOrigin: g.crossOrigin },
                ),
                (0, i.jsx)("script", {
                  nonce: S,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([n, { ...g, id: t }]) +
                      ")",
                  },
                }))
              : (g.dangerouslySetInnerHTML &&
                  ((g.children = g.dangerouslySetInnerHTML.__html),
                  delete g.dangerouslySetInnerHTML),
                (0, i.jsx)("script", {
                  nonce: S,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...g, id: t }]) +
                      ")",
                  },
                }));
          "afterInteractive" === u &&
            n &&
            s.default.preload(
              n,
              g.integrity
                ? {
                    as: "script",
                    integrity: g.integrity,
                    nonce: S,
                    crossOrigin: g.crossOrigin,
                  }
                : { as: "script", nonce: S, crossOrigin: g.crossOrigin },
            );
        }
        return null;
      }
      Object.defineProperty(m, "__nextScript", { value: !0 });
      let y = m;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    54473: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__rest) ||
          function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var o = 0, r = Object.getOwnPropertySymbols(e);
                o < r.length;
                o++
              )
                0 > t.indexOf(r[o]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                  (n[r[o]] = e[r[o]]);
            return n;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleMapsEmbed = void 0);
      let i = o(n(10580)),
        s = n(90410);
      t.GoogleMapsEmbed = (e) => {
        var t = r(e, []);
        return (0, s.formatData)(i.default, t);
      };
    },
    56481: (e, t, n) => {
      "use strict";
      let r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleAnalytics = function (e) {
          let {
            gaId: t,
            debugMode: n,
            dataLayerName: a = "dataLayer",
            nonce: l,
          } = e;
          return (
            void 0 === r && (r = a),
            (0, i.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-ga" },
              });
            }, []),
            (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(s.default, {
                  id: "_next-ga-init",
                  dangerouslySetInnerHTML: {
                    __html: "\n          window['"
                      .concat(a, "'] = window['")
                      .concat(
                        a,
                        "'] || [];\n          function gtag(){window['",
                      )
                      .concat(
                        a,
                        "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '",
                      )
                      .concat(t, "' ")
                      .concat(n ? ",{ 'debug_mode': true }" : "", ");"),
                  },
                  nonce: l,
                }),
                (0, o.jsx)(s.default, {
                  id: "_next-ga",
                  src: "https://www.googletagmanager.com/gtag/js?id=".concat(t),
                  nonce: l,
                }),
              ],
            })
          );
        }),
        (t.sendGAEvent = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          if (void 0 === r) {
            console.warn("@next/third-parties: GA has not been initialized");
            return;
          }
          window[r]
            ? window[r].push(arguments)
            : console.warn(
                "@next/third-parties: GA dataLayer ".concat(
                  r,
                  " does not exist",
                ),
              );
        });
      let o = n(94799),
        i = n(34023),
        s = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(95320));
    },
    69384: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.YouTubeEmbed = t.GoogleMapsEmbed = t.GoogleAnalytics = void 0);
      var r = n(97928);
      Object.defineProperty(t, "GoogleAnalytics", {
        enumerable: !0,
        get: function () {
          return r.GoogleAnalytics;
        },
      });
      var o = n(54473);
      Object.defineProperty(t, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function () {
          return o.GoogleMapsEmbed;
        },
      });
      var i = n(29185);
      Object.defineProperty(t, "YouTubeEmbed", {
        enumerable: !0,
        get: function () {
          return i.YouTubeEmbed;
        },
      });
    },
    70710: (e, t, n) => {
      "use strict";
      let r, o, i, s, a, l, u, c;
      n.d(t, { j: () => rL });
      var d,
        h,
        f,
        p,
        g,
        v,
        m,
        y,
        b = n(90535);
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Error = 1)] = "Error"),
          (e[(e.Warn = 2)] = "Warn"),
          (e[(e.Verbose = 3)] = "Verbose"),
          (e[(e.Debug = 4)] = "Debug");
      })(d || (d = {}));
      var S = function (e, t, n, r, o) {
          return (
            void 0 === o && (o = null),
            function () {
              for (var i = [], s = 0; s < arguments.length; s++)
                i[s] = arguments[s];
              var a = n(),
                l = a.logger,
                u = a.logLevel;
              if ((u && u < d.Debug) || !u || !l) return e.apply(o, i);
              var c = {
                type: "invoke public method",
                name: t,
                args: i,
                stacktrace: (Error().stack || "")
                  .split("\n")
                  .slice(3)
                  .map(function (e) {
                    return e.trim();
                  }),
                time: { start: new Date().toISOString() },
                states: {},
              };
              r && c.states && (c.states.before = r());
              var h = e.apply(o, i);
              return (
                h && h.promise
                  ? h.promise.then(function () {
                      r && c.states && (c.states.after = r()),
                        c.time && (c.time.end = new Date().toISOString()),
                        l.debug(JSON.stringify(c, null, 2));
                    })
                  : (r && c.states && (c.states.after = r()),
                    c.time && (c.time.end = new Date().toISOString()),
                    l.debug(JSON.stringify(c, null, 2))),
                h
              );
            }
          );
        },
        w = n(67024),
        I = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            (0, b.C6)(t, e),
            (t.prototype.send = function (e, t) {
              return (0, b.sH)(this, void 0, void 0, function () {
                var n;
                return (0, b.YH)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if ("undefined" == typeof fetch)
                        throw Error("FetchTransport is not supported");
                      return [
                        4,
                        fetch(e, {
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "*/*",
                          },
                          body: JSON.stringify(t),
                          method: "POST",
                        }),
                      ];
                    case 1:
                      return [4, r.sent().json()];
                    case 2:
                      return (n = r.sent()), [2, this.buildResponse(n)];
                  }
                });
              });
            }),
            t
          );
        })(w.j),
        M = "Amplitude Logger ",
        C = (function () {
          function e() {
            this.logLevel = d.None;
          }
          return (
            (e.prototype.disable = function () {
              this.logLevel = d.None;
            }),
            (e.prototype.enable = function (e) {
              void 0 === e && (e = d.Warn), (this.logLevel = e);
            }),
            (e.prototype.log = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              !(this.logLevel < d.Verbose) &&
                console.log("".concat(M, "[Log]: ").concat(e.join(" ")));
            }),
            (e.prototype.warn = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              !(this.logLevel < d.Warn) &&
                console.warn("".concat(M, "[Warn]: ").concat(e.join(" ")));
            }),
            (e.prototype.error = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              !(this.logLevel < d.Error) &&
                console.error("".concat(M, "[Error]: ").concat(e.join(" ")));
            }),
            (e.prototype.debug = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              !(this.logLevel < d.Debug) &&
                console.log("".concat(M, "[Debug]: ").concat(e.join(" ")));
            }),
            e
          );
        })(),
        E = "".concat("AMP", "_unsent"),
        O = "https://api2.amplitude.com/2/httpapi",
        k = function () {
          return {
            flushMaxRetries: 12,
            flushQueueSize: 200,
            flushIntervalMillis: 1e4,
            instanceName: "$default_instance",
            logLevel: d.Warn,
            loggerProvider: new C(),
            offline: !1,
            optOut: !1,
            serverUrl: O,
            serverZone: "US",
            useBatch: !1,
          };
        },
        x = (function () {
          function e(e) {
            this._optOut = !1;
            var t,
              n,
              r,
              o,
              i = k();
            (this.apiKey = e.apiKey),
              (this.flushIntervalMillis =
                null !== (t = e.flushIntervalMillis) && void 0 !== t
                  ? t
                  : i.flushIntervalMillis),
              (this.flushMaxRetries = e.flushMaxRetries || i.flushMaxRetries),
              (this.flushQueueSize = e.flushQueueSize || i.flushQueueSize),
              (this.instanceName = e.instanceName || i.instanceName),
              (this.loggerProvider = e.loggerProvider || i.loggerProvider),
              (this.logLevel =
                null !== (n = e.logLevel) && void 0 !== n ? n : i.logLevel),
              (this.minIdLength = e.minIdLength),
              (this.plan = e.plan),
              (this.ingestionMetadata = e.ingestionMetadata),
              (this.offline = void 0 !== e.offline ? e.offline : i.offline),
              (this.optOut =
                null !== (r = e.optOut) && void 0 !== r ? r : i.optOut),
              (this.serverUrl = e.serverUrl),
              (this.serverZone = e.serverZone || i.serverZone),
              (this.storageProvider = e.storageProvider),
              (this.transportProvider = e.transportProvider),
              (this.useBatch =
                null !== (o = e.useBatch) && void 0 !== o ? o : i.useBatch),
              this.loggerProvider.enable(this.logLevel);
            var s = T(e.serverUrl, e.serverZone, e.useBatch);
            (this.serverZone = s.serverZone), (this.serverUrl = s.serverUrl);
          }
          return (
            Object.defineProperty(e.prototype, "optOut", {
              get: function () {
                return this._optOut;
              },
              set: function (e) {
                this._optOut = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(),
        T = function (e, t, n) {
          if (
            (void 0 === e && (e = ""),
            void 0 === t && (t = k().serverZone),
            void 0 === n && (n = k().useBatch),
            e)
          )
            return { serverUrl: e, serverZone: void 0 };
          var r,
            o = ["US", "EU"].includes(t) ? t : k().serverZone;
          return {
            serverZone: o,
            serverUrl:
              ((r = n),
              "EU" === o
                ? r
                  ? "https://api.eu.amplitude.com/batch"
                  : "https://api.eu.amplitude.com/2/httpapi"
                : r
                  ? "https://api2.amplitude.com/batch"
                  : O),
          };
        },
        _ = n(64540),
        R = "[Amplitude]",
        L = "".concat(R, " Session Replay ID"),
        D = _.e.US,
        N = "".concat(R, " Session Replay Debug"),
        P = "amp-mask";
      !(function (e) {
        (e.GET_SR_PROPS = "get-sr-props"), (e.DEBUG_INFO = "debug-info");
      })(h || (h = {}));
      var A = function () {
          return {
            flushMaxRetries: 2,
            logLevel: d.Warn,
            loggerProvider: new C(),
            transportProvider: new I(),
          };
        },
        j = (function (e) {
          function t(t, n) {
            var r = this,
              o = A();
            return (
              ((r =
                e.call(
                  this,
                  (0, b.Cl)(
                    (0, b.Cl)({ transportProvider: o.transportProvider }, n),
                    { apiKey: t },
                  ),
                ) || this).flushMaxRetries =
                void 0 !== n.flushMaxRetries &&
                n.flushMaxRetries <= o.flushMaxRetries
                  ? n.flushMaxRetries
                  : o.flushMaxRetries),
              (r.apiKey = t),
              (r.sampleRate = n.sampleRate || 0),
              (r.serverZone = n.serverZone || D),
              (r.configEndpointUrl = n.configEndpointUrl),
              (r.shouldInlineStylesheet = n.shouldInlineStylesheet),
              n.privacyConfig && (r.privacyConfig = n.privacyConfig),
              n.debugMode && (r.debugMode = n.debugMode),
              r
            );
          }
          return (0, b.C6)(t, e), t;
        })(x),
        H = function () {
          return "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
              ? window
              : "undefined" != typeof self
                ? self
                : void 0 !== n.g
                  ? n.g
                  : void 0;
        },
        F = n(82602),
        q = function (e) {
          return void 0 === e && (e = "$default_instance"), F.i.getInstance(e);
        },
        U = function (e) {
          return { promise: e || Promise.resolve() };
        };
      function W(e) {
        let t = null == e ? void 0 : e.host;
        return (null == t ? void 0 : t.shadowRoot) === e;
      }
      function B(e) {
        return "[object ShadowRoot]" === Object.prototype.toString.call(e);
      }
      function G(e) {
        try {
          var t;
          let n = e.rules || e.cssRules;
          return n
            ? ((t = Array.from(n, z).join("")).includes(
                " background-clip: text;",
              ) &&
                !t.includes(" -webkit-background-clip: text;") &&
                (t = t.replace(
                  " background-clip: text;",
                  " -webkit-background-clip: text; background-clip: text;",
                )),
              t)
            : null;
        } catch (e) {
          return null;
        }
      }
      function z(e) {
        let t;
        if ("styleSheet" in e)
          try {
            t =
              G(e.styleSheet) ||
              (function (e) {
                let { cssText: t } = e;
                if (t.split('"').length < 3) return t;
                let n = ["@import", `url(${JSON.stringify(e.href)})`];
                return (
                  "" === e.layerName
                    ? n.push("layer")
                    : e.layerName && n.push(`layer(${e.layerName})`),
                  e.supportsText && n.push(`supports(${e.supportsText})`),
                  e.media.length && n.push(e.media.mediaText),
                  n.join(" ") + ";"
                );
              })(e);
          } catch (e) {}
        else {
          if ("selectorText" in e && e.selectorText.includes(":"))
            return e.cssText.replace(
              /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm,
              "$1\\$2",
            );
        }
        return t || e.cssText;
      }
      !(function (e) {
        (e[(e.Document = 0)] = "Document"),
          (e[(e.DocumentType = 1)] = "DocumentType"),
          (e[(e.Element = 2)] = "Element"),
          (e[(e.Text = 3)] = "Text"),
          (e[(e.CDATA = 4)] = "CDATA"),
          (e[(e.Comment = 5)] = "Comment");
      })(f || (f = {}));
      class Y {
        constructor() {
          (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
        }
        getId(e) {
          var t;
          if (!e) return -1;
          let n =
            null === (t = this.getMeta(e)) || void 0 === t ? void 0 : t.id;
          return null != n ? n : -1;
        }
        getNode(e) {
          return this.idNodeMap.get(e) || null;
        }
        getIds() {
          return Array.from(this.idNodeMap.keys());
        }
        getMeta(e) {
          return this.nodeMetaMap.get(e) || null;
        }
        removeNodeFromMap(e) {
          let t = this.getId(e);
          this.idNodeMap.delete(t),
            e.childNodes &&
              e.childNodes.forEach((e) => this.removeNodeFromMap(e));
        }
        has(e) {
          return this.idNodeMap.has(e);
        }
        hasNode(e) {
          return this.nodeMetaMap.has(e);
        }
        add(e, t) {
          let n = t.id;
          this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t);
        }
        replace(e, t) {
          let n = this.getNode(e);
          if (n) {
            let e = this.nodeMetaMap.get(n);
            e && this.nodeMetaMap.set(t, e);
          }
          this.idNodeMap.set(e, t);
        }
        reset() {
          (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
        }
      }
      function V({
        element: e,
        maskInputOptions: t,
        tagName: n,
        type: r,
        value: o,
        maskInputFn: i,
      }) {
        let s = o || "",
          a = r && $(r);
        return (
          (t[n.toLowerCase()] || (a && t[a])) &&
            (s = i ? i(s, e) : "*".repeat(s.length)),
          s
        );
      }
      function $(e) {
        return e.toLowerCase();
      }
      let K = "__rrweb_original__";
      function J(e) {
        let t = e.type;
        return e.hasAttribute("data-rr-is-password")
          ? "password"
          : t
            ? $(t)
            : null;
      }
      let X = 1,
        Z = RegExp("[^a-z0-9-_:]");
      function Q() {
        return X++;
      }
      let ee = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        et = /^(?:[a-z+]+:)?\/\//i,
        en = /^www\..*/i,
        er = /^(data:)([^,]*),(.*)/i;
      function eo(e, t) {
        return (e || "").replace(ee, (e, n, r, o, i, s) => {
          let a = r || i || s,
            l = n || o || "";
          if (!a) return e;
          if (et.test(a) || en.test(a) || er.test(a))
            return `url(${l}${a}${l})`;
          if ("/" === a[0]) {
            let e;
            return `url(${l}${(t.indexOf("//") > -1 ? t.split("/").slice(0, 3).join("/") : t.split("/")[0]).split("?")[0] + a}${l})`;
          }
          let u = t.split("/"),
            c = a.split("/");
          for (let e of (u.pop(), c))
            "." !== e && (".." === e ? u.pop() : u.push(e));
          return `url(${l}${u.join("/")}${l})`;
        });
      }
      let ei = /^[^ \t\n\r\u000c]+/,
        es = /^[, \t\n\r\u000c]+/;
      function ea(e, t) {
        if (!t || "" === t.trim()) return t;
        let n = e.createElement("a");
        return (n.href = t), n.href;
      }
      function el() {
        let e = document.createElement("a");
        return (e.href = ""), e.href;
      }
      function eu(e, t, n, r) {
        if (!r) return r;
        if (
          "src" === n ||
          ("href" === n && ("use" !== t || "#" !== r[0])) ||
          ("xlink:href" === n && "#" !== r[0])
        )
          return ea(e, r);
        if ("background" === n && ("table" === t || "td" === t || "th" === t))
          return ea(e, r);
        if ("srcset" === n)
          return (function (e, t) {
            if ("" === t.trim()) return t;
            let n = 0;
            function r(e) {
              let r;
              let o = e.exec(t.substring(n));
              return o ? ((r = o[0]), (n += r.length), r) : "";
            }
            let o = [];
            for (; r(es), !(n >= t.length); ) {
              let i = r(ei);
              if ("," === i.slice(-1))
                (i = ea(e, i.substring(0, i.length - 1))), o.push(i);
              else {
                let r = "";
                i = ea(e, i);
                let s = !1;
                for (;;) {
                  let e = t.charAt(n);
                  if ("" === e) {
                    o.push((i + r).trim());
                    break;
                  }
                  if (s) ")" === e && (s = !1);
                  else {
                    if ("," === e) {
                      (n += 1), o.push((i + r).trim());
                      break;
                    }
                    "(" === e && (s = !0);
                  }
                  (r += e), (n += 1);
                }
              }
            }
            return o.join(", ");
          })(e, r);
        if ("style" === n) return eo(r, el());
        else if ("object" === t && "data" === n) return ea(e, r);
        return r;
      }
      function ec(e, t, n) {
        return ("video" === e || "audio" === e) && "autoplay" === t;
      }
      function ed(e, t, n) {
        if (!e) return !1;
        if (e.nodeType !== e.ELEMENT_NODE) return !!n && ed(e.parentNode, t, n);
        for (let n = e.classList.length; n--; ) {
          let r = e.classList[n];
          if (t.test(r)) return !0;
        }
        return !!n && ed(e.parentNode, t, n);
      }
      function eh(e, t, n) {
        try {
          let r = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
          if (null === r) return !1;
          if ("string" == typeof t) {
            if (r.classList.contains(t) || r.closest(`.${t}`)) return !0;
          } else if (ed(r, t, !0)) return !0;
          if (n && (r.matches(n) || r.closest(n))) return !0;
        } catch (e) {}
        return !1;
      }
      function ef(e) {
        return null == e ? "" : e.toLowerCase();
      }
      function ep(e, t) {
        let n;
        let {
            doc: i,
            mirror: s,
            blockClass: a,
            blockSelector: l,
            maskTextClass: u,
            maskTextSelector: c,
            skipChild: d = !1,
            inlineStylesheet: h = !0,
            maskInputOptions: p = {},
            maskTextFn: g,
            maskInputFn: v,
            slimDOMOptions: m,
            dataURLOptions: y = {},
            inlineImages: b = !1,
            recordCanvas: S = !1,
            onSerialize: w,
            onIframeLoad: I,
            iframeLoadTimeout: M = 5e3,
            onStylesheetLoad: C,
            stylesheetLoadTimeout: E = 5e3,
            keepIframeSrcFn: O = () => !1,
            newlyAddedElement: k = !1,
          } = t,
          { preserveWhiteSpace: x = !0 } = t,
          T = (function (e, t) {
            let {
                doc: n,
                mirror: i,
                blockClass: s,
                blockSelector: a,
                maskTextClass: l,
                maskTextSelector: u,
                inlineStylesheet: c,
                maskInputOptions: d = {},
                maskTextFn: h,
                maskInputFn: p,
                dataURLOptions: g = {},
                inlineImages: v,
                recordCanvas: m,
                keepIframeSrcFn: y,
                newlyAddedElement: b = !1,
              } = t,
              S = (function (e, t) {
                if (!t.hasNode(e)) return;
                let n = t.getId(e);
                return 1 === n ? void 0 : n;
              })(n, i);
            switch (e.nodeType) {
              case e.DOCUMENT_NODE:
                if ("CSS1Compat" !== e.compatMode)
                  return {
                    type: f.Document,
                    childNodes: [],
                    compatMode: e.compatMode,
                  };
                return { type: f.Document, childNodes: [] };
              case e.DOCUMENT_TYPE_NODE:
                return {
                  type: f.DocumentType,
                  name: e.name,
                  publicId: e.publicId,
                  systemId: e.systemId,
                  rootId: S,
                };
              case e.ELEMENT_NODE:
                return (function (e, t) {
                  let {
                      doc: n,
                      blockClass: i,
                      blockSelector: s,
                      inlineStylesheet: a,
                      maskInputOptions: l = {},
                      maskInputFn: u,
                      dataURLOptions: c = {},
                      inlineImages: d,
                      recordCanvas: h,
                      keepIframeSrcFn: p,
                      newlyAddedElement: g = !1,
                      rootId: v,
                    } = t,
                    m = (function (e, t, n) {
                      try {
                        if ("string" == typeof t) {
                          if (e.classList.contains(t)) return !0;
                        } else
                          for (let n = e.classList.length; n--; ) {
                            let r = e.classList[n];
                            if (t.test(r)) return !0;
                          }
                        if (n) return e.matches(n);
                      } catch (e) {}
                      return !1;
                    })(e, i, s),
                    y = (function (e) {
                      if (e instanceof HTMLFormElement) return "form";
                      let t = $(e.tagName);
                      return Z.test(t) ? "div" : t;
                    })(e),
                    b = {},
                    S = e.attributes.length;
                  for (let t = 0; t < S; t++) {
                    let r = e.attributes[t];
                    ec(y, r.name, r.value) ||
                      (b[r.name] = eu(n, y, $(r.name), r.value));
                  }
                  if ("link" === y && a) {
                    let t = Array.from(n.styleSheets).find(
                        (t) => t.href === e.href,
                      ),
                      r = null;
                    t && (r = G(t)),
                      r &&
                        (delete b.rel,
                        delete b.href,
                        (b._cssText = eo(r, t.href)));
                  }
                  if (
                    "style" === y &&
                    e.sheet &&
                    !(e.innerText || e.textContent || "").trim().length
                  ) {
                    let t = G(e.sheet);
                    t && (b._cssText = eo(t, el()));
                  }
                  if ("input" === y || "textarea" === y || "select" === y) {
                    let t = e.value,
                      n = e.checked;
                    "radio" !== b.type &&
                    "checkbox" !== b.type &&
                    "submit" !== b.type &&
                    "button" !== b.type &&
                    t
                      ? (b.value = V({
                          element: e,
                          type: J(e),
                          tagName: y,
                          value: t,
                          maskInputOptions: l,
                          maskInputFn: u,
                        }))
                      : n && (b.checked = n);
                  }
                  if (
                    ("option" === y &&
                      (e.selected && !l.select
                        ? (b.selected = !0)
                        : delete b.selected),
                    "canvas" === y && h)
                  ) {
                    if ("2d" === e.__context)
                      !(function (e) {
                        let t = e.getContext("2d");
                        if (!t) return !0;
                        for (let n = 0; n < e.width; n += 50)
                          for (let r = 0; r < e.height; r += 50) {
                            let o = t.getImageData;
                            if (
                              new Uint32Array(
                                (K in o ? o[K] : o).call(
                                  t,
                                  n,
                                  r,
                                  Math.min(50, e.width - n),
                                  Math.min(50, e.height - r),
                                ).data.buffer,
                              ).some((e) => 0 !== e)
                            )
                              return !1;
                          }
                        return !0;
                      })(e) && (b.rr_dataURL = e.toDataURL(c.type, c.quality));
                    else if (!("__context" in e)) {
                      let t = e.toDataURL(c.type, c.quality),
                        n = document.createElement("canvas");
                      (n.width = e.width),
                        (n.height = e.height),
                        t !== n.toDataURL(c.type, c.quality) &&
                          (b.rr_dataURL = t);
                    }
                  }
                  if ("img" === y && d) {
                    r || (o = (r = n.createElement("canvas")).getContext("2d"));
                    let t = e.crossOrigin;
                    e.crossOrigin = "anonymous";
                    let i = () => {
                      e.removeEventListener("load", i);
                      try {
                        (r.width = e.naturalWidth),
                          (r.height = e.naturalHeight),
                          o.drawImage(e, 0, 0),
                          (b.rr_dataURL = r.toDataURL(c.type, c.quality));
                      } catch (t) {
                        console.warn(
                          `Cannot inline img src=${e.currentSrc}! Error: ${t}`,
                        );
                      }
                      t
                        ? (b.crossOrigin = t)
                        : e.removeAttribute("crossorigin");
                    };
                    e.complete && 0 !== e.naturalWidth
                      ? i()
                      : e.addEventListener("load", i);
                  }
                  if (
                    (("audio" === y || "video" === y) &&
                      ((b.rr_mediaState = e.paused ? "paused" : "played"),
                      (b.rr_mediaCurrentTime = e.currentTime)),
                    !g &&
                      (e.scrollLeft && (b.rr_scrollLeft = e.scrollLeft),
                      e.scrollTop && (b.rr_scrollTop = e.scrollTop)),
                    m)
                  ) {
                    let { width: t, height: n } = e.getBoundingClientRect();
                    b = {
                      class: b.class,
                      rr_width: `${t}px`,
                      rr_height: `${n}px`,
                    };
                  }
                  return (
                    "iframe" !== y ||
                      p(b.src) ||
                      (e.contentDocument || (b.rr_src = b.src), delete b.src),
                    {
                      type: f.Element,
                      tagName: y,
                      attributes: b,
                      childNodes: [],
                      isSVG:
                        !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                      needBlock: m,
                      rootId: v,
                    }
                  );
                })(e, {
                  doc: n,
                  blockClass: s,
                  blockSelector: a,
                  inlineStylesheet: c,
                  maskInputOptions: d,
                  maskInputFn: p,
                  dataURLOptions: g,
                  inlineImages: v,
                  recordCanvas: m,
                  keepIframeSrcFn: y,
                  newlyAddedElement: b,
                  rootId: S,
                });
              case e.TEXT_NODE:
                return (function (e, t) {
                  var n;
                  let {
                      maskTextClass: r,
                      maskTextSelector: o,
                      maskTextFn: i,
                      rootId: s,
                    } = t,
                    a = e.parentNode && e.parentNode.tagName,
                    l = e.textContent,
                    u = "STYLE" === a || void 0,
                    c = "SCRIPT" === a || void 0;
                  if (u && l) {
                    try {
                      e.nextSibling ||
                        e.previousSibling ||
                        ((null === (n = e.parentNode.sheet) || void 0 === n
                          ? void 0
                          : n.cssRules) &&
                          (l = G(e.parentNode.sheet)));
                    } catch (t) {
                      console.warn(
                        `Cannot get CSS styles from text's parentNode. Error: ${t}`,
                        e,
                      );
                    }
                    l = eo(l, el());
                  }
                  return (
                    c && (l = "SCRIPT_PLACEHOLDER"),
                    !u &&
                      !c &&
                      l &&
                      eh(e, r, o) &&
                      (l = i ? i(l, e.parentElement) : l.replace(/[\S]/g, "*")),
                    {
                      type: f.Text,
                      textContent: l || "",
                      isStyle: u,
                      rootId: s,
                    }
                  );
                })(e, {
                  maskTextClass: l,
                  maskTextSelector: u,
                  maskTextFn: h,
                  rootId: S,
                });
              case e.CDATA_SECTION_NODE:
                return { type: f.CDATA, textContent: "", rootId: S };
              case e.COMMENT_NODE:
                return {
                  type: f.Comment,
                  textContent: e.textContent || "",
                  rootId: S,
                };
              default:
                return !1;
            }
          })(e, {
            doc: i,
            mirror: s,
            blockClass: a,
            blockSelector: l,
            maskTextClass: u,
            maskTextSelector: c,
            inlineStylesheet: h,
            maskInputOptions: p,
            maskTextFn: g,
            maskInputFn: v,
            dataURLOptions: y,
            inlineImages: b,
            recordCanvas: S,
            keepIframeSrcFn: O,
            newlyAddedElement: k,
          });
        if (!T) return console.warn(e, "not serialized"), null;
        n = s.hasNode(e)
          ? s.getId(e)
          : !(function (e, t) {
                if (t.comment && e.type === f.Comment) return !0;
                if (e.type === f.Element) {
                  if (
                    t.script &&
                    ("script" === e.tagName ||
                      ("link" === e.tagName &&
                        ("preload" === e.attributes.rel ||
                          "modulepreload" === e.attributes.rel) &&
                        "script" === e.attributes.as) ||
                      ("link" === e.tagName &&
                        "prefetch" === e.attributes.rel &&
                        "string" == typeof e.attributes.href &&
                        e.attributes.href.endsWith(".js")))
                  )
                    return !0;
                  if (
                    t.headFavicon &&
                    (("link" === e.tagName &&
                      "shortcut icon" === e.attributes.rel) ||
                      ("meta" === e.tagName &&
                        (ef(e.attributes.name).match(
                          /^msapplication-tile(image|color)$/,
                        ) ||
                          "application-name" === ef(e.attributes.name) ||
                          "icon" === ef(e.attributes.rel) ||
                          "apple-touch-icon" === ef(e.attributes.rel) ||
                          "shortcut icon" === ef(e.attributes.rel))))
                  )
                    return !0;
                  if ("meta" === e.tagName) {
                    if (
                      t.headMetaDescKeywords &&
                      ef(e.attributes.name).match(/^description|keywords$/)
                    )
                      return !0;
                    if (
                      t.headMetaSocial &&
                      (ef(e.attributes.property).match(/^(og|twitter|fb):/) ||
                        ef(e.attributes.name).match(/^(og|twitter):/) ||
                        "pinterest" === ef(e.attributes.name))
                    )
                      return !0;
                    if (
                      t.headMetaRobots &&
                      ("robots" === ef(e.attributes.name) ||
                        "googlebot" === ef(e.attributes.name) ||
                        "bingbot" === ef(e.attributes.name))
                    )
                      return !0;
                    else if (
                      t.headMetaHttpEquiv &&
                      void 0 !== e.attributes["http-equiv"]
                    )
                      return !0;
                    else if (
                      t.headMetaAuthorship &&
                      ("author" === ef(e.attributes.name) ||
                        "generator" === ef(e.attributes.name) ||
                        "framework" === ef(e.attributes.name) ||
                        "publisher" === ef(e.attributes.name) ||
                        "progid" === ef(e.attributes.name) ||
                        ef(e.attributes.property).match(/^article:/) ||
                        ef(e.attributes.property).match(/^product:/))
                    )
                      return !0;
                    else if (
                      t.headMetaVerification &&
                      ("google-site-verification" === ef(e.attributes.name) ||
                        "yandex-verification" === ef(e.attributes.name) ||
                        "csrf-token" === ef(e.attributes.name) ||
                        "p:domain_verify" === ef(e.attributes.name) ||
                        "verify-v1" === ef(e.attributes.name) ||
                        "verification" === ef(e.attributes.name) ||
                        "shopify-checkout-api-token" === ef(e.attributes.name))
                    )
                      return !0;
                  }
                }
                return !1;
              })(T, m) &&
              (x ||
                T.type !== f.Text ||
                T.isStyle ||
                T.textContent.replace(/^\s+|\s+$/gm, "").length)
            ? Q()
            : -2;
        let _ = Object.assign(T, { id: n });
        if ((s.add(e, _), -2 === n)) return null;
        w && w(e);
        let R = !d;
        if (_.type === f.Element) {
          (R = R && !_.needBlock), delete _.needBlock;
          let t = e.shadowRoot;
          t && B(t) && (_.isShadowHost = !0);
        }
        if ((_.type === f.Document || _.type === f.Element) && R) {
          var L;
          m.headWhitespace &&
            _.type === f.Element &&
            "head" === _.tagName &&
            (x = !1);
          let t = {
            doc: i,
            mirror: s,
            blockClass: a,
            blockSelector: l,
            maskTextClass: u,
            maskTextSelector: c,
            skipChild: d,
            inlineStylesheet: h,
            maskInputOptions: p,
            maskTextFn: g,
            maskInputFn: v,
            slimDOMOptions: m,
            dataURLOptions: y,
            inlineImages: b,
            recordCanvas: S,
            preserveWhiteSpace: x,
            onSerialize: w,
            onIframeLoad: I,
            iframeLoadTimeout: M,
            onStylesheetLoad: C,
            stylesheetLoadTimeout: E,
            keepIframeSrcFn: O,
          };
          if (
            _.type === f.Element &&
            "textarea" === _.tagName &&
            void 0 !== _.attributes.value
          );
          else
            for (let n of Array.from(e.childNodes)) {
              let e = ep(n, t);
              e && _.childNodes.push(e);
            }
          if ((L = e).nodeType === L.ELEMENT_NODE && e.shadowRoot)
            for (let n of Array.from(e.shadowRoot.childNodes)) {
              let r = ep(n, t);
              r && (B(e.shadowRoot) && (r.isShadow = !0), _.childNodes.push(r));
            }
        }
        return (
          e.parentNode &&
            W(e.parentNode) &&
            B(e.parentNode) &&
            (_.isShadow = !0),
          _.type === f.Element &&
            "iframe" === _.tagName &&
            (function (e, t, n) {
              let r;
              let o = e.contentWindow;
              if (!o) return;
              let i = !1;
              try {
                r = o.document.readyState;
              } catch (e) {
                return;
              }
              if ("complete" !== r) {
                let r = setTimeout(() => {
                  i || (t(), (i = !0));
                }, n);
                e.addEventListener("load", () => {
                  clearTimeout(r), (i = !0), t();
                });
                return;
              }
              let s = "about:blank";
              if (o.location.href !== s || e.src === s || "" === e.src)
                return setTimeout(t, 0), e.addEventListener("load", t);
              e.addEventListener("load", t);
            })(
              e,
              () => {
                let t = e.contentDocument;
                if (t && I) {
                  let n = ep(t, {
                    doc: t,
                    mirror: s,
                    blockClass: a,
                    blockSelector: l,
                    maskTextClass: u,
                    maskTextSelector: c,
                    skipChild: !1,
                    inlineStylesheet: h,
                    maskInputOptions: p,
                    maskTextFn: g,
                    maskInputFn: v,
                    slimDOMOptions: m,
                    dataURLOptions: y,
                    inlineImages: b,
                    recordCanvas: S,
                    preserveWhiteSpace: x,
                    onSerialize: w,
                    onIframeLoad: I,
                    iframeLoadTimeout: M,
                    onStylesheetLoad: C,
                    stylesheetLoadTimeout: E,
                    keepIframeSrcFn: O,
                  });
                  n && I(e, n);
                }
              },
              M,
            ),
          _.type === f.Element &&
            "link" === _.tagName &&
            "stylesheet" === _.attributes.rel &&
            (function (e, t, n) {
              let r,
                o = !1;
              try {
                r = e.sheet;
              } catch (e) {
                return;
              }
              if (r) return;
              let i = setTimeout(() => {
                o || (t(), (o = !0));
              }, n);
              e.addEventListener("load", () => {
                clearTimeout(i), (o = !0), t();
              });
            })(
              e,
              () => {
                if (C) {
                  let t = ep(e, {
                    doc: i,
                    mirror: s,
                    blockClass: a,
                    blockSelector: l,
                    maskTextClass: u,
                    maskTextSelector: c,
                    skipChild: !1,
                    inlineStylesheet: h,
                    maskInputOptions: p,
                    maskTextFn: g,
                    maskInputFn: v,
                    slimDOMOptions: m,
                    dataURLOptions: y,
                    inlineImages: b,
                    recordCanvas: S,
                    preserveWhiteSpace: x,
                    onSerialize: w,
                    onIframeLoad: I,
                    iframeLoadTimeout: M,
                    onStylesheetLoad: C,
                    stylesheetLoadTimeout: E,
                    keepIframeSrcFn: O,
                  });
                  t && C(e, t);
                }
              },
              E,
            ),
          _
        );
      }
      let eg = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
      function ev(e) {
        return e ? e.replace(/^\s+|\s+$/g, "") : "";
      }
      function em(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      let ey = /(max|min)-device-(width|height)/,
        eb = RegExp(ey.source, "g"),
        eS = /([^\\]):hover/,
        ew = RegExp(eS.source, "g");
      var eI = ((e) => (
          (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
          (e[(e.Load = 1)] = "Load"),
          (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
          (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
          (e[(e.Meta = 4)] = "Meta"),
          (e[(e.Custom = 5)] = "Custom"),
          (e[(e.Plugin = 6)] = "Plugin"),
          e
        ))(eI || {}),
        eM = ((e) => (
          (e[(e.Mutation = 0)] = "Mutation"),
          (e[(e.MouseMove = 1)] = "MouseMove"),
          (e[(e.MouseInteraction = 2)] = "MouseInteraction"),
          (e[(e.Scroll = 3)] = "Scroll"),
          (e[(e.ViewportResize = 4)] = "ViewportResize"),
          (e[(e.Input = 5)] = "Input"),
          (e[(e.TouchMove = 6)] = "TouchMove"),
          (e[(e.MediaInteraction = 7)] = "MediaInteraction"),
          (e[(e.StyleSheetRule = 8)] = "StyleSheetRule"),
          (e[(e.CanvasMutation = 9)] = "CanvasMutation"),
          (e[(e.Font = 10)] = "Font"),
          (e[(e.Log = 11)] = "Log"),
          (e[(e.Drag = 12)] = "Drag"),
          (e[(e.StyleDeclaration = 13)] = "StyleDeclaration"),
          (e[(e.Selection = 14)] = "Selection"),
          (e[(e.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
          e
        ))(eM || {}),
        eC = ((e) => (
          (e[(e.MouseUp = 0)] = "MouseUp"),
          (e[(e.MouseDown = 1)] = "MouseDown"),
          (e[(e.Click = 2)] = "Click"),
          (e[(e.ContextMenu = 3)] = "ContextMenu"),
          (e[(e.DblClick = 4)] = "DblClick"),
          (e[(e.Focus = 5)] = "Focus"),
          (e[(e.Blur = 6)] = "Blur"),
          (e[(e.TouchStart = 7)] = "TouchStart"),
          (e[(e.TouchMove_Departed = 8)] = "TouchMove_Departed"),
          (e[(e.TouchEnd = 9)] = "TouchEnd"),
          (e[(e.TouchCancel = 10)] = "TouchCancel"),
          e
        ))(eC || {}),
        eE = ((e) => (
          (e[(e.Mouse = 0)] = "Mouse"),
          (e[(e.Pen = 1)] = "Pen"),
          (e[(e.Touch = 2)] = "Touch"),
          e
        ))(eE || {}),
        eO = ((e) => (
          (e[(e["2D"] = 0)] = "2D"),
          (e[(e.WebGL = 1)] = "WebGL"),
          (e[(e.WebGL2 = 2)] = "WebGL2"),
          e
        ))(eO || {}),
        ek = ((e) => (
          (e.Start = "start"),
          (e.Pause = "pause"),
          (e.Resume = "resume"),
          (e.Resize = "resize"),
          (e.Finish = "finish"),
          (e.FullsnapshotRebuilded = "fullsnapshot-rebuilded"),
          (e.LoadStylesheetStart = "load-stylesheet-start"),
          (e.LoadStylesheetEnd = "load-stylesheet-end"),
          (e.SkipStart = "skip-start"),
          (e.SkipEnd = "skip-end"),
          (e.MouseInteraction = "mouse-interaction"),
          (e.EventCast = "event-cast"),
          (e.CustomEvent = "custom-event"),
          (e.Flush = "flush"),
          (e.StateChange = "state-change"),
          (e.PlayBack = "play-back"),
          (e.Destroy = "destroy"),
          e
        ))(ek || {});
      function ex(e, t, n = document) {
        let r = { capture: !0, passive: !0 };
        return (
          n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r)
        );
      }
      let eT =
          "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        e_ = {
          map: {},
          getId: () => (console.error(eT), -1),
          getNode: () => (console.error(eT), null),
          removeNodeFromMap() {
            console.error(eT);
          },
          has: () => (console.error(eT), !1),
          reset() {
            console.error(eT);
          },
        };
      function eR(e, t, n = {}) {
        let r = null,
          o = 0;
        return function (...i) {
          let s = Date.now();
          o || !1 !== n.leading || (o = s);
          let a = t - (s - o),
            l = this;
          a <= 0 || a > t
            ? (r && (clearTimeout(r), (r = null)), (o = s), e.apply(l, i))
            : r ||
              !1 === n.trailing ||
              (r = setTimeout(() => {
                (o = !1 === n.leading ? 0 : Date.now()),
                  (r = null),
                  e.apply(l, i);
              }, a));
        };
      }
      function eL(e, t, n, r, o = window) {
        let i = o.Object.getOwnPropertyDescriptor(e, t);
        return (
          o.Object.defineProperty(
            e,
            t,
            r
              ? n
              : {
                  set(e) {
                    setTimeout(() => {
                      n.set.call(this, e);
                    }, 0),
                      i && i.set && i.set.call(this, e);
                  },
                },
          ),
          () => eL(e, t, i || {}, !0)
        );
      }
      function eD(e, t, n) {
        try {
          if (!(t in e)) return () => {};
          let r = e[t],
            o = n(r);
          return (
            "function" == typeof o &&
              ((o.prototype = o.prototype || {}),
              Object.defineProperties(o, {
                __rrweb_original__: { enumerable: !1, value: r },
              })),
            (e[t] = o),
            () => {
              e[t] = r;
            }
          );
        } catch (e) {
          return () => {};
        }
      }
      "undefined" != typeof window &&
        window.Proxy &&
        window.Reflect &&
        (e_ = new Proxy(e_, {
          get: (e, t, n) => (
            "map" === t && console.error(eT), Reflect.get(e, t, n)
          ),
        }));
      let eN = Date.now;
      function eP(e) {
        var t, n, r, o, i, s;
        let a = e.document;
        return {
          left: a.scrollingElement
            ? a.scrollingElement.scrollLeft
            : void 0 !== e.pageXOffset
              ? e.pageXOffset
              : (null == a ? void 0 : a.documentElement.scrollLeft) ||
                (null ===
                  (n =
                    null === (t = null == a ? void 0 : a.body) || void 0 === t
                      ? void 0
                      : t.parentElement) || void 0 === n
                  ? void 0
                  : n.scrollLeft) ||
                (null === (r = null == a ? void 0 : a.body) || void 0 === r
                  ? void 0
                  : r.scrollLeft) ||
                0,
          top: a.scrollingElement
            ? a.scrollingElement.scrollTop
            : void 0 !== e.pageYOffset
              ? e.pageYOffset
              : (null == a ? void 0 : a.documentElement.scrollTop) ||
                (null ===
                  (i =
                    null === (o = null == a ? void 0 : a.body) || void 0 === o
                      ? void 0
                      : o.parentElement) || void 0 === i
                  ? void 0
                  : i.scrollTop) ||
                (null === (s = null == a ? void 0 : a.body) || void 0 === s
                  ? void 0
                  : s.scrollTop) ||
                0,
        };
      }
      function eA() {
        return (
          window.innerHeight ||
          (document.documentElement && document.documentElement.clientHeight) ||
          (document.body && document.body.clientHeight)
        );
      }
      function ej() {
        return (
          window.innerWidth ||
          (document.documentElement && document.documentElement.clientWidth) ||
          (document.body && document.body.clientWidth)
        );
      }
      function eH(e) {
        return e ? (e.nodeType === e.ELEMENT_NODE ? e : e.parentElement) : null;
      }
      function eF(e, t, n, r) {
        if (!e) return !1;
        let o = eH(e);
        if (!o) return !1;
        try {
          if ("string" == typeof t) {
            if (o.classList.contains(t) || (r && null !== o.closest("." + t)))
              return !0;
          } else if (ed(o, t, r)) return !0;
        } catch (e) {}
        return !!(n && (o.matches(n) || (r && null !== o.closest(n))));
      }
      function eq(e, t) {
        return -2 === t.getId(e);
      }
      function eU(e) {
        return !!e.changedTouches;
      }
      function eW(e, t) {
        return !!("IFRAME" === e.nodeName && t.getMeta(e));
      }
      function eB(e, t) {
        return !!(
          "LINK" === e.nodeName &&
          e.nodeType === e.ELEMENT_NODE &&
          e.getAttribute &&
          "stylesheet" === e.getAttribute("rel") &&
          t.getMeta(e)
        );
      }
      function eG(e) {
        return !!(null == e ? void 0 : e.shadowRoot);
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) ||
        (eN = () => new Date().getTime());
      class ez {
        constructor() {
          (this.id = 1),
            (this.styleIDMap = new WeakMap()),
            (this.idStyleMap = new Map());
        }
        getId(e) {
          var t;
          return null !== (t = this.styleIDMap.get(e)) && void 0 !== t ? t : -1;
        }
        has(e) {
          return this.styleIDMap.has(e);
        }
        add(e, t) {
          let n;
          return this.has(e)
            ? this.getId(e)
            : ((n = void 0 === t ? this.id++ : t),
              this.styleIDMap.set(e, n),
              this.idStyleMap.set(n, e),
              n);
        }
        getStyle(e) {
          return this.idStyleMap.get(e) || null;
        }
        reset() {
          (this.styleIDMap = new WeakMap()),
            (this.idStyleMap = new Map()),
            (this.id = 1);
        }
        generateId() {
          return this.id++;
        }
      }
      function eY(e) {
        var t, n;
        let r = null;
        return (
          (null ===
            (n =
              null === (t = e.getRootNode) || void 0 === t
                ? void 0
                : t.call(e)) || void 0 === n
            ? void 0
            : n.nodeType) === Node.DOCUMENT_FRAGMENT_NODE &&
            e.getRootNode().host &&
            (r = e.getRootNode().host),
          r
        );
      }
      function eV(e) {
        let t = e.ownerDocument;
        return (
          !!t &&
          (t.contains(e) ||
            (function (e) {
              let t = e.ownerDocument;
              if (!t) return !1;
              let n = (function (e) {
                let t,
                  n = e;
                for (; (t = eY(n)); ) n = t;
                return n;
              })(e);
              return t.contains(n);
            })(e))
        );
      }
      let e$ = (e) =>
        i
          ? (...t) => {
              try {
                return e(...t);
              } catch (e) {
                if (i && !0 === i(e)) return;
                throw e;
              }
            }
          : e;
      function eK(e) {
        return (...t) => {
          try {
            return e(...t);
          } catch (e) {
            try {
              e._external_ = !0;
            } catch (e) {}
            throw e;
          }
        };
      }
      class eJ {
        constructor(e) {
          (this.generateIdFn = e),
            (this.iframeIdToRemoteIdMap = new WeakMap()),
            (this.iframeRemoteIdToIdMap = new WeakMap());
        }
        getId(e, t, n, r) {
          let o = n || this.getIdToRemoteIdMap(e),
            i = r || this.getRemoteIdToIdMap(e),
            s = o.get(t);
          return s || ((s = this.generateIdFn()), o.set(t, s), i.set(s, t)), s;
        }
        getIds(e, t) {
          let n = this.getIdToRemoteIdMap(e),
            r = this.getRemoteIdToIdMap(e);
          return t.map((t) => this.getId(e, t, n, r));
        }
        getRemoteId(e, t, n) {
          let r = n || this.getRemoteIdToIdMap(e);
          if ("number" != typeof t) return t;
          let o = r.get(t);
          return o || -1;
        }
        getRemoteIds(e, t) {
          let n = this.getRemoteIdToIdMap(e);
          return t.map((t) => this.getRemoteId(e, t, n));
        }
        reset(e) {
          if (!e) {
            (this.iframeIdToRemoteIdMap = new WeakMap()),
              (this.iframeRemoteIdToIdMap = new WeakMap());
            return;
          }
          this.iframeIdToRemoteIdMap.delete(e),
            this.iframeRemoteIdToIdMap.delete(e);
        }
        getIdToRemoteIdMap(e) {
          let t = this.iframeIdToRemoteIdMap.get(e);
          return (
            t || ((t = new Map()), this.iframeIdToRemoteIdMap.set(e, t)), t
          );
        }
        getRemoteIdToIdMap(e) {
          let t = this.iframeRemoteIdToIdMap.get(e);
          return (
            t || ((t = new Map()), this.iframeRemoteIdToIdMap.set(e, t)), t
          );
        }
      }
      class eX {
        constructor(e) {
          (this.iframes = new WeakMap()),
            (this.crossOriginIframeMap = new WeakMap()),
            (this.crossOriginIframeMirror = new eJ(Q)),
            (this.crossOriginIframeRootIdMap = new WeakMap()),
            (this.mutationCb = e.mutationCb),
            (this.wrappedEmit = e.wrappedEmit),
            (this.stylesheetManager = e.stylesheetManager),
            (this.recordCrossOriginIframes = e.recordCrossOriginIframes),
            (this.crossOriginIframeStyleMirror = new eJ(
              this.stylesheetManager.styleMirror.generateId.bind(
                this.stylesheetManager.styleMirror,
              ),
            )),
            (this.mirror = e.mirror),
            this.recordCrossOriginIframes &&
              window.addEventListener("message", this.handleMessage.bind(this));
        }
        addIframe(e) {
          this.iframes.set(e, !0),
            e.contentWindow &&
              this.crossOriginIframeMap.set(e.contentWindow, e);
        }
        addLoadListener(e) {
          this.loadListener = e;
        }
        attachIframe(e, t) {
          var n;
          this.mutationCb({
            adds: [{ parentId: this.mirror.getId(e), nextId: null, node: t }],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0,
          }),
            null === (n = this.loadListener) || void 0 === n || n.call(this, e),
            e.contentDocument &&
              e.contentDocument.adoptedStyleSheets &&
              e.contentDocument.adoptedStyleSheets.length > 0 &&
              this.stylesheetManager.adoptStyleSheets(
                e.contentDocument.adoptedStyleSheets,
                this.mirror.getId(e.contentDocument),
              );
        }
        handleMessage(e) {
          if (
            "rrweb" !== e.data.type ||
            e.origin !== e.data.origin ||
            !e.source
          )
            return;
          let t = this.crossOriginIframeMap.get(e.source);
          if (!t) return;
          let n = this.transformCrossOriginEvent(t, e.data.event);
          n && this.wrappedEmit(n, e.data.isCheckout);
        }
        transformCrossOriginEvent(e, t) {
          var n;
          switch (t.type) {
            case eI.FullSnapshot: {
              this.crossOriginIframeMirror.reset(e),
                this.crossOriginIframeStyleMirror.reset(e),
                this.replaceIdOnNode(t.data.node, e);
              let n = t.data.node.id;
              return (
                this.crossOriginIframeRootIdMap.set(e, n),
                this.patchRootIdOnNode(t.data.node, n),
                {
                  timestamp: t.timestamp,
                  type: eI.IncrementalSnapshot,
                  data: {
                    source: eM.Mutation,
                    adds: [
                      {
                        parentId: this.mirror.getId(e),
                        nextId: null,
                        node: t.data.node,
                      },
                    ],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0,
                  },
                }
              );
            }
            case eI.Meta:
            case eI.Load:
            case eI.DomContentLoaded:
              return !1;
            case eI.Plugin:
              return t;
            case eI.Custom:
              return (
                this.replaceIds(t.data.payload, e, [
                  "id",
                  "parentId",
                  "previousId",
                  "nextId",
                ]),
                t
              );
            case eI.IncrementalSnapshot:
              switch (t.data.source) {
                case eM.Mutation:
                  return (
                    t.data.adds.forEach((t) => {
                      this.replaceIds(t, e, [
                        "parentId",
                        "nextId",
                        "previousId",
                      ]),
                        this.replaceIdOnNode(t.node, e);
                      let n = this.crossOriginIframeRootIdMap.get(e);
                      n && this.patchRootIdOnNode(t.node, n);
                    }),
                    t.data.removes.forEach((t) => {
                      this.replaceIds(t, e, ["parentId", "id"]);
                    }),
                    t.data.attributes.forEach((t) => {
                      this.replaceIds(t, e, ["id"]);
                    }),
                    t.data.texts.forEach((t) => {
                      this.replaceIds(t, e, ["id"]);
                    }),
                    t
                  );
                case eM.Drag:
                case eM.TouchMove:
                case eM.MouseMove:
                  return (
                    t.data.positions.forEach((t) => {
                      this.replaceIds(t, e, ["id"]);
                    }),
                    t
                  );
                case eM.ViewportResize:
                  return !1;
                case eM.MediaInteraction:
                case eM.MouseInteraction:
                case eM.Scroll:
                case eM.CanvasMutation:
                case eM.Input:
                  return this.replaceIds(t.data, e, ["id"]), t;
                case eM.StyleSheetRule:
                case eM.StyleDeclaration:
                  return (
                    this.replaceIds(t.data, e, ["id"]),
                    this.replaceStyleIds(t.data, e, ["styleId"]),
                    t
                  );
                case eM.Font:
                  return t;
                case eM.Selection:
                  return (
                    t.data.ranges.forEach((t) => {
                      this.replaceIds(t, e, ["start", "end"]);
                    }),
                    t
                  );
                case eM.AdoptedStyleSheet:
                  return (
                    this.replaceIds(t.data, e, ["id"]),
                    this.replaceStyleIds(t.data, e, ["styleIds"]),
                    null === (n = t.data.styles) ||
                      void 0 === n ||
                      n.forEach((t) => {
                        this.replaceStyleIds(t, e, ["styleId"]);
                      }),
                    t
                  );
              }
          }
        }
        replace(e, t, n, r) {
          for (let o of r)
            (Array.isArray(t[o]) || "number" == typeof t[o]) &&
              (Array.isArray(t[o])
                ? (t[o] = e.getIds(n, t[o]))
                : (t[o] = e.getId(n, t[o])));
          return t;
        }
        replaceIds(e, t, n) {
          return this.replace(this.crossOriginIframeMirror, e, t, n);
        }
        replaceStyleIds(e, t, n) {
          return this.replace(this.crossOriginIframeStyleMirror, e, t, n);
        }
        replaceIdOnNode(e, t) {
          this.replaceIds(e, t, ["id", "rootId"]),
            "childNodes" in e &&
              e.childNodes.forEach((e) => {
                this.replaceIdOnNode(e, t);
              });
        }
        patchRootIdOnNode(e, t) {
          e.type === f.Document || e.rootId || (e.rootId = t),
            "childNodes" in e &&
              e.childNodes.forEach((e) => {
                this.patchRootIdOnNode(e, t);
              });
        }
      }
      class eZ {
        constructor() {
          (this.length = 0), (this.head = null), (this.tail = null);
        }
        get(e) {
          if (e >= this.length) throw Error("Position outside of list range");
          let t = this.head;
          for (let n = 0; n < e; n++) t = (null == t ? void 0 : t.next) || null;
          return t;
        }
        addNode(e) {
          let t = { value: e, previous: null, next: null };
          if (
            ((e.__ln = t), e.previousSibling && "__ln" in e.previousSibling)
          ) {
            let n = e.previousSibling.__ln.next;
            (t.next = n),
              (t.previous = e.previousSibling.__ln),
              (e.previousSibling.__ln.next = t),
              n && (n.previous = t);
          } else if (
            e.nextSibling &&
            "__ln" in e.nextSibling &&
            e.nextSibling.__ln.previous
          ) {
            let n = e.nextSibling.__ln.previous;
            (t.previous = n),
              (t.next = e.nextSibling.__ln),
              (e.nextSibling.__ln.previous = t),
              n && (n.next = t);
          } else
            this.head && (this.head.previous = t),
              (t.next = this.head),
              (this.head = t);
          null === t.next && (this.tail = t), this.length++;
        }
        removeNode(e) {
          let t = e.__ln;
          this.head &&
            (t.previous
              ? ((t.previous.next = t.next),
                t.next
                  ? (t.next.previous = t.previous)
                  : (this.tail = t.previous))
              : ((this.head = t.next),
                this.head ? (this.head.previous = null) : (this.tail = null)),
            e.__ln && delete e.__ln,
            this.length--);
        }
      }
      let eQ = (e, t) => `${e}@${t}`;
      class e0 {
        constructor() {
          (this.frozen = !1),
            (this.locked = !1),
            (this.texts = []),
            (this.attributes = []),
            (this.attributeMap = new WeakMap()),
            (this.removes = []),
            (this.mapRemoves = []),
            (this.movedMap = {}),
            (this.addedSet = new Set()),
            (this.movedSet = new Set()),
            (this.droppedSet = new Set()),
            (this.processMutations = (e) => {
              e.forEach(this.processMutation), this.emit();
            }),
            (this.emit = () => {
              if (this.frozen || this.locked) return;
              let e = [],
                t = new Set(),
                n = new eZ(),
                r = (e) => {
                  let t = e,
                    n = -2;
                  for (; -2 === n; )
                    n = (t = t && t.nextSibling) && this.mirror.getId(t);
                  return n;
                },
                o = (o) => {
                  if (
                    !o.parentNode ||
                    !eV(o) ||
                    "TEXTAREA" === o.parentNode.tagName
                  )
                    return;
                  let i = W(o.parentNode)
                      ? this.mirror.getId(eY(o))
                      : this.mirror.getId(o.parentNode),
                    s = r(o);
                  if (-1 === i || -1 === s) return n.addNode(o);
                  let a = ep(o, {
                    doc: this.doc,
                    mirror: this.mirror,
                    blockClass: this.blockClass,
                    blockSelector: this.blockSelector,
                    maskTextClass: this.maskTextClass,
                    maskTextSelector: this.maskTextSelector,
                    skipChild: !0,
                    newlyAddedElement: !0,
                    inlineStylesheet: this.inlineStylesheet,
                    maskInputOptions: this.maskInputOptions,
                    maskTextFn: this.maskTextFn,
                    maskInputFn: this.maskInputFn,
                    slimDOMOptions: this.slimDOMOptions,
                    dataURLOptions: this.dataURLOptions,
                    recordCanvas: this.recordCanvas,
                    inlineImages: this.inlineImages,
                    onSerialize: (e) => {
                      eW(e, this.mirror) && this.iframeManager.addIframe(e),
                        eB(e, this.mirror) &&
                          this.stylesheetManager.trackLinkElement(e),
                        eG(o) &&
                          this.shadowDomManager.addShadowRoot(
                            o.shadowRoot,
                            this.doc,
                          );
                    },
                    onIframeLoad: (e, t) => {
                      this.iframeManager.attachIframe(e, t),
                        this.shadowDomManager.observeAttachShadow(e);
                    },
                    onStylesheetLoad: (e, t) => {
                      this.stylesheetManager.attachLinkElement(e, t);
                    },
                  });
                  a &&
                    (e.push({ parentId: i, nextId: s, node: a }), t.add(a.id));
                };
              for (; this.mapRemoves.length; )
                this.mirror.removeNodeFromMap(this.mapRemoves.shift());
              for (let e of this.movedSet)
                (!e2(this.removes, e, this.mirror) ||
                  this.movedSet.has(e.parentNode)) &&
                  o(e);
              for (let e of this.addedSet)
                e3(this.droppedSet, e) || e2(this.removes, e, this.mirror)
                  ? e3(this.movedSet, e)
                    ? o(e)
                    : this.droppedSet.add(e)
                  : o(e);
              let i = null;
              for (; n.length; ) {
                let e = null;
                if (i) {
                  let t = this.mirror.getId(i.value.parentNode),
                    n = r(i.value);
                  -1 !== t && -1 !== n && (e = i);
                }
                if (!e) {
                  let t = n.tail;
                  for (; t; ) {
                    let n = t;
                    if (((t = t.previous), n)) {
                      let t = this.mirror.getId(n.value.parentNode);
                      if (-1 === r(n.value)) continue;
                      if (-1 !== t) {
                        e = n;
                        break;
                      }
                      {
                        let t = n.value;
                        if (
                          t.parentNode &&
                          t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                        ) {
                          let r = t.parentNode.host;
                          if (-1 !== this.mirror.getId(r)) {
                            e = n;
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if (!e) {
                  for (; n.head; ) n.removeNode(n.head.value);
                  break;
                }
                (i = e.previous), n.removeNode(e.value), o(e.value);
              }
              let s = {
                texts: this.texts
                  .map((e) => {
                    let t = e.node;
                    return (
                      "TEXTAREA" === t.parentNode.tagName &&
                        this.genTextAreaValueMutation(t.parentNode),
                      { id: this.mirror.getId(t), value: e.value }
                    );
                  })
                  .filter((e) => !t.has(e.id))
                  .filter((e) => this.mirror.has(e.id)),
                attributes: this.attributes
                  .map((e) => {
                    let { attributes: t } = e;
                    if ("string" == typeof t.style) {
                      let n = JSON.stringify(e.styleDiff),
                        r = JSON.stringify(e._unchangedStyles);
                      n.length < t.style.length &&
                        (n + r).split("var(").length ===
                          t.style.split("var(").length &&
                        (t.style = e.styleDiff);
                    }
                    return { id: this.mirror.getId(e.node), attributes: t };
                  })
                  .filter((e) => !t.has(e.id))
                  .filter((e) => this.mirror.has(e.id)),
                removes: this.removes,
                adds: e,
              };
              (s.texts.length ||
                s.attributes.length ||
                s.removes.length ||
                s.adds.length) &&
                ((this.texts = []),
                (this.attributes = []),
                (this.attributeMap = new WeakMap()),
                (this.removes = []),
                (this.addedSet = new Set()),
                (this.movedSet = new Set()),
                (this.droppedSet = new Set()),
                (this.movedMap = {}),
                this.mutationCb(s));
            }),
            (this.genTextAreaValueMutation = (e) => {
              let t = this.attributeMap.get(e);
              t ||
                ((t = {
                  node: e,
                  attributes: {},
                  styleDiff: {},
                  _unchangedStyles: {},
                }),
                this.attributes.push(t),
                this.attributeMap.set(e, t)),
                (t.attributes.value = Array.from(
                  e.childNodes,
                  (e) => e.textContent || "",
                ).join(""));
            }),
            (this.processMutation = (e) => {
              if (!eq(e.target, this.mirror))
                switch (e.type) {
                  case "characterData": {
                    let t = e.target.textContent;
                    eF(e.target, this.blockClass, this.blockSelector, !1) ||
                      t === e.oldValue ||
                      this.texts.push({
                        value:
                          eh(
                            e.target,
                            this.maskTextClass,
                            this.maskTextSelector,
                          ) && t
                            ? this.maskTextFn
                              ? this.maskTextFn(t, eH(e.target))
                              : t.replace(/[\S]/g, "*")
                            : t,
                        node: e.target,
                      });
                    break;
                  }
                  case "attributes": {
                    let t = e.target,
                      n = e.attributeName,
                      r = e.target.getAttribute(n);
                    if ("value" === n) {
                      let e = J(t);
                      r = V({
                        element: t,
                        maskInputOptions: this.maskInputOptions,
                        tagName: t.tagName,
                        type: e,
                        value: r,
                        maskInputFn: this.maskInputFn,
                      });
                    }
                    if (
                      eF(e.target, this.blockClass, this.blockSelector, !1) ||
                      r === e.oldValue
                    )
                      return;
                    let o = this.attributeMap.get(e.target);
                    if (
                      "IFRAME" === t.tagName &&
                      "src" === n &&
                      !this.keepIframeSrcFn(r)
                    ) {
                      if (t.contentDocument) return;
                      n = "rr_src";
                    }
                    if (
                      (o ||
                        ((o = {
                          node: e.target,
                          attributes: {},
                          styleDiff: {},
                          _unchangedStyles: {},
                        }),
                        this.attributes.push(o),
                        this.attributeMap.set(e.target, o)),
                      "type" === n &&
                        "INPUT" === t.tagName &&
                        "password" === (e.oldValue || "").toLowerCase() &&
                        t.setAttribute("data-rr-is-password", "true"),
                      !ec(t.tagName, n) &&
                        ((o.attributes[n] = eu(
                          this.doc,
                          $(t.tagName),
                          $(n),
                          r,
                        )),
                        "style" === n))
                    ) {
                      let n;
                      try {
                        n = document.implementation.createHTMLDocument();
                      } catch (e) {
                        n = this.doc;
                      }
                      let r = n.createElement("span");
                      for (let n of (e.oldValue &&
                        r.setAttribute("style", e.oldValue),
                      Array.from(t.style))) {
                        let e = t.style.getPropertyValue(n),
                          i = t.style.getPropertyPriority(n);
                        e !== r.style.getPropertyValue(n) ||
                        i !== r.style.getPropertyPriority(n)
                          ? "" === i
                            ? (o.styleDiff[n] = e)
                            : (o.styleDiff[n] = [e, i])
                          : (o._unchangedStyles[n] = [e, i]);
                      }
                      for (let e of Array.from(r.style))
                        "" === t.style.getPropertyValue(e) &&
                          (o.styleDiff[e] = !1);
                    }
                    break;
                  }
                  case "childList":
                    if (eF(e.target, this.blockClass, this.blockSelector, !0))
                      return;
                    if ("TEXTAREA" === e.target.tagName) {
                      this.genTextAreaValueMutation(e.target);
                      return;
                    }
                    e.addedNodes.forEach((t) => this.genAdds(t, e.target)),
                      e.removedNodes.forEach((t) => {
                        let n = this.mirror.getId(t),
                          r = W(e.target)
                            ? this.mirror.getId(e.target.host)
                            : this.mirror.getId(e.target);
                        !(
                          eF(
                            e.target,
                            this.blockClass,
                            this.blockSelector,
                            !1,
                          ) || eq(t, this.mirror)
                        ) &&
                          -1 !== this.mirror.getId(t) &&
                          (this.addedSet.has(t)
                            ? (e1(this.addedSet, t), this.droppedSet.add(t))
                            : (this.addedSet.has(e.target) && -1 === n) ||
                              (function e(t, n) {
                                if (W(t)) return !1;
                                let r = n.getId(t);
                                return (
                                  !n.has(r) ||
                                  ((!t.parentNode ||
                                    t.parentNode.nodeType !==
                                      t.DOCUMENT_NODE) &&
                                    (!t.parentNode || e(t.parentNode, n)))
                                );
                              })(e.target, this.mirror) ||
                              (this.movedSet.has(t) && this.movedMap[eQ(n, r)]
                                ? e1(this.movedSet, t)
                                : this.removes.push({
                                    parentId: r,
                                    id: n,
                                    isShadow:
                                      !!(W(e.target) && B(e.target)) || void 0,
                                  })),
                          this.mapRemoves.push(t));
                      });
                }
            }),
            (this.genAdds = (e, t) => {
              if (
                !this.processedNodeManager.inOtherBuffer(e, this) &&
                !(this.addedSet.has(e) || this.movedSet.has(e))
              ) {
                if (this.mirror.hasNode(e)) {
                  if (eq(e, this.mirror)) return;
                  this.movedSet.add(e);
                  let n = null;
                  t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)),
                    n &&
                      -1 !== n &&
                      (this.movedMap[eQ(this.mirror.getId(e), n)] = !0);
                } else this.addedSet.add(e), this.droppedSet.delete(e);
                !eF(e, this.blockClass, this.blockSelector, !1) &&
                  (e.childNodes.forEach((e) => this.genAdds(e)),
                  eG(e) &&
                    e.shadowRoot.childNodes.forEach((t) => {
                      this.processedNodeManager.add(t, this),
                        this.genAdds(t, e);
                    }));
              }
            });
        }
        init(e) {
          [
            "mutationCb",
            "blockClass",
            "blockSelector",
            "maskTextClass",
            "maskTextSelector",
            "inlineStylesheet",
            "maskInputOptions",
            "maskTextFn",
            "maskInputFn",
            "keepIframeSrcFn",
            "recordCanvas",
            "inlineImages",
            "slimDOMOptions",
            "dataURLOptions",
            "doc",
            "mirror",
            "iframeManager",
            "stylesheetManager",
            "shadowDomManager",
            "canvasManager",
            "processedNodeManager",
          ].forEach((t) => {
            this[t] = e[t];
          });
        }
        freeze() {
          (this.frozen = !0), this.canvasManager.freeze();
        }
        unfreeze() {
          (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
        }
        isFrozen() {
          return this.frozen;
        }
        lock() {
          (this.locked = !0), this.canvasManager.lock();
        }
        unlock() {
          (this.locked = !1), this.canvasManager.unlock(), this.emit();
        }
        reset() {
          this.shadowDomManager.reset(), this.canvasManager.reset();
        }
      }
      function e1(e, t) {
        e.delete(t), t.childNodes.forEach((t) => e1(e, t));
      }
      function e2(e, t, n) {
        return (
          0 !== e.length &&
          (function e(t, n, r) {
            let { parentNode: o } = n;
            if (!o) return !1;
            let i = r.getId(o);
            return !!t.some((e) => e.id === i) || e(t, o, r);
          })(e, t, n)
        );
      }
      function e3(e, t) {
        return (
          0 !== e.size &&
          (function e(t, n) {
            let { parentNode: r } = n;
            return !!r && (!!t.has(r) || e(t, r));
          })(e, t)
        );
      }
      let e4 = [];
      function e5(e) {
        try {
          if ("composedPath" in e) {
            let t = e.composedPath();
            if (t.length) return t[0];
          } else if ("path" in e && e.path.length) return e.path[0];
        } catch (e) {}
        return e && e.target;
      }
      function e8(e, t) {
        var n, r;
        let o = new e0();
        e4.push(o), o.init(e);
        let i = window.MutationObserver || window.__rrMutationObserver,
          s =
            null ===
              (r =
                null === (n = null == window ? void 0 : window.Zone) ||
                void 0 === n
                  ? void 0
                  : n.__symbol__) || void 0 === r
              ? void 0
              : r.call(n, "MutationObserver");
        s && window[s] && (i = window[s]);
        let a = new i(e$(o.processMutations.bind(o)));
        return (
          a.observe(t, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0,
          }),
          a
        );
      }
      function e6({
        scrollCb: e,
        doc: t,
        mirror: n,
        blockClass: r,
        blockSelector: o,
        sampling: i,
      }) {
        return ex(
          "scroll",
          e$(
            eR(
              e$((i) => {
                let s = e5(i);
                if (!s || eF(s, r, o, !0)) return;
                let a = n.getId(s);
                if (s === t && t.defaultView) {
                  let n = eP(t.defaultView);
                  e({ id: a, x: n.left, y: n.top });
                } else e({ id: a, x: s.scrollLeft, y: s.scrollTop });
              }),
              i.scroll || 100,
            ),
          ),
          t,
        );
      }
      function e7(e, t) {
        let n = Object.assign({}, e);
        return t || delete n.userTriggered, n;
      }
      let e9 = ["INPUT", "TEXTAREA", "SELECT"],
        te = new WeakMap();
      function tt(e) {
        var t, n;
        return (
          (t = e),
          (n = []),
          (ti("CSSGroupingRule") && t.parentRule instanceof CSSGroupingRule) ||
          (ti("CSSMediaRule") && t.parentRule instanceof CSSMediaRule) ||
          (ti("CSSSupportsRule") && t.parentRule instanceof CSSSupportsRule) ||
          (ti("CSSConditionRule") && t.parentRule instanceof CSSConditionRule)
            ? n.unshift(Array.from(t.parentRule.cssRules).indexOf(t))
            : t.parentStyleSheet &&
              n.unshift(Array.from(t.parentStyleSheet.cssRules).indexOf(t)),
          n
        );
      }
      function tn(e, t, n) {
        let r, o;
        return e
          ? (e.ownerNode ? (r = t.getId(e.ownerNode)) : (o = n.getId(e)),
            { styleId: o, id: r })
          : {};
      }
      function tr({ mirror: e, stylesheetManager: t }, n) {
        var r, o, i;
        let s = null;
        s = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
        let a =
            "#document" === n.nodeName
              ? null === (r = n.defaultView) || void 0 === r
                ? void 0
                : r.Document
              : null ===
                    (i =
                      null === (o = n.ownerDocument) || void 0 === o
                        ? void 0
                        : o.defaultView) || void 0 === i
                ? void 0
                : i.ShadowRoot,
          l = (null == a ? void 0 : a.prototype)
            ? Object.getOwnPropertyDescriptor(
                null == a ? void 0 : a.prototype,
                "adoptedStyleSheets",
              )
            : void 0;
        return null !== s && -1 !== s && a && l
          ? (Object.defineProperty(n, "adoptedStyleSheets", {
              configurable: l.configurable,
              enumerable: l.enumerable,
              get() {
                var e;
                return null === (e = l.get) || void 0 === e
                  ? void 0
                  : e.call(this);
              },
              set(e) {
                var n;
                let r =
                  null === (n = l.set) || void 0 === n
                    ? void 0
                    : n.call(this, e);
                if (null !== s && -1 !== s)
                  try {
                    t.adoptStyleSheets(e, s);
                  } catch (e) {}
                return r;
              },
            }),
            e$(() => {
              Object.defineProperty(n, "adoptedStyleSheets", {
                configurable: l.configurable,
                enumerable: l.enumerable,
                get: l.get,
                set: l.set,
              });
            }))
          : () => {};
      }
      function to(e, t = {}) {
        let n;
        let r = e.doc.defaultView;
        if (!r) return () => {};
        !(function (e, t) {
          let {
            mutationCb: n,
            mousemoveCb: r,
            mouseInteractionCb: o,
            scrollCb: i,
            viewportResizeCb: s,
            inputCb: a,
            mediaInteractionCb: l,
            styleSheetRuleCb: u,
            styleDeclarationCb: c,
            canvasMutationCb: d,
            fontCb: h,
            selectionCb: f,
          } = e;
          (e.mutationCb = (...e) => {
            t.mutation && t.mutation(...e), n(...e);
          }),
            (e.mousemoveCb = (...e) => {
              t.mousemove && t.mousemove(...e), r(...e);
            }),
            (e.mouseInteractionCb = (...e) => {
              t.mouseInteraction && t.mouseInteraction(...e), o(...e);
            }),
            (e.scrollCb = (...e) => {
              t.scroll && t.scroll(...e), i(...e);
            }),
            (e.viewportResizeCb = (...e) => {
              t.viewportResize && t.viewportResize(...e), s(...e);
            }),
            (e.inputCb = (...e) => {
              t.input && t.input(...e), a(...e);
            }),
            (e.mediaInteractionCb = (...e) => {
              t.mediaInteaction && t.mediaInteaction(...e), l(...e);
            }),
            (e.styleSheetRuleCb = (...e) => {
              t.styleSheetRule && t.styleSheetRule(...e), u(...e);
            }),
            (e.styleDeclarationCb = (...e) => {
              t.styleDeclaration && t.styleDeclaration(...e), c(...e);
            }),
            (e.canvasMutationCb = (...e) => {
              t.canvasMutation && t.canvasMutation(...e), d(...e);
            }),
            (e.fontCb = (...e) => {
              t.font && t.font(...e), h(...e);
            }),
            (e.selectionCb = (...e) => {
              t.selection && t.selection(...e), f(...e);
            });
        })(e, t),
          e.recordDOM && (n = e8(e, e.doc));
        let o = (function ({ mousemoveCb: e, sampling: t, doc: n, mirror: r }) {
            let o;
            if (!1 === t.mousemove) return () => {};
            let i = "number" == typeof t.mousemove ? t.mousemove : 50,
              s =
                "number" == typeof t.mousemoveCallback
                  ? t.mousemoveCallback
                  : 500,
              a = [],
              l = eR(
                e$((t) => {
                  let n = Date.now() - o;
                  e(
                    a.map((e) => ((e.timeOffset -= n), e)),
                    t,
                  ),
                    (a = []),
                    (o = null);
                }),
                s,
              ),
              u = e$(
                eR(
                  e$((e) => {
                    let t = e5(e),
                      { clientX: n, clientY: i } = eU(e)
                        ? e.changedTouches[0]
                        : e;
                    o || (o = eN()),
                      a.push({
                        x: n,
                        y: i,
                        id: r.getId(t),
                        timeOffset: eN() - o,
                      }),
                      l(
                        "undefined" != typeof DragEvent &&
                          e instanceof DragEvent
                          ? eM.Drag
                          : e instanceof MouseEvent
                            ? eM.MouseMove
                            : eM.TouchMove,
                      );
                  }),
                  i,
                  { trailing: !1 },
                ),
              ),
              c = [
                ex("mousemove", u, n),
                ex("touchmove", u, n),
                ex("drag", u, n),
              ];
            return e$(() => {
              c.forEach((e) => e());
            });
          })(e),
          i = (function ({
            mouseInteractionCb: e,
            doc: t,
            mirror: n,
            blockClass: r,
            blockSelector: o,
            sampling: i,
          }) {
            if (!1 === i.mouseInteraction) return () => {};
            let s =
                !0 === i.mouseInteraction || void 0 === i.mouseInteraction
                  ? {}
                  : i.mouseInteraction,
              a = [],
              l = null,
              u = (t) => (i) => {
                let s = e5(i);
                if (eF(s, r, o, !0)) return;
                let a = null,
                  u = t;
                if ("pointerType" in i) {
                  switch (i.pointerType) {
                    case "mouse":
                      a = eE.Mouse;
                      break;
                    case "touch":
                      a = eE.Touch;
                      break;
                    case "pen":
                      a = eE.Pen;
                  }
                  a === eE.Touch
                    ? eC[t] === eC.MouseDown
                      ? (u = "TouchStart")
                      : eC[t] === eC.MouseUp && (u = "TouchEnd")
                    : eE.Pen;
                } else eU(i) && (a = eE.Touch);
                null !== a
                  ? ((l = a),
                    ((u.startsWith("Touch") && a === eE.Touch) ||
                      (u.startsWith("Mouse") && a === eE.Mouse)) &&
                      (a = null))
                  : eC[t] === eC.Click && ((a = l), (l = null));
                let c = eU(i) ? i.changedTouches[0] : i;
                if (!c) return;
                let d = n.getId(s),
                  { clientX: h, clientY: f } = c;
                e$(e)(
                  Object.assign(
                    { type: eC[u], id: d, x: h, y: f },
                    null !== a && { pointerType: a },
                  ),
                );
              };
            return (
              Object.keys(eC)
                .filter(
                  (e) =>
                    Number.isNaN(Number(e)) &&
                    !e.endsWith("_Departed") &&
                    !1 !== s[e],
                )
                .forEach((e) => {
                  let n = $(e),
                    r = u(e);
                  if (window.PointerEvent)
                    switch (eC[e]) {
                      case eC.MouseDown:
                      case eC.MouseUp:
                        n = n.replace("mouse", "pointer");
                        break;
                      case eC.TouchStart:
                      case eC.TouchEnd:
                        return;
                    }
                  a.push(ex(n, r, t));
                }),
              e$(() => {
                a.forEach((e) => e());
              })
            );
          })(e),
          s = e6(e),
          a = (function ({ viewportResizeCb: e }, { win: t }) {
            let n = -1,
              r = -1;
            return ex(
              "resize",
              e$(
                eR(
                  e$(() => {
                    let t = eA(),
                      o = ej();
                    (n !== t || r !== o) &&
                      (e({ width: Number(o), height: Number(t) }),
                      (n = t),
                      (r = o));
                  }),
                  200,
                ),
              ),
              t,
            );
          })(e, { win: r }),
          l = (function ({
            inputCb: e,
            doc: t,
            mirror: n,
            blockClass: r,
            blockSelector: o,
            ignoreClass: i,
            ignoreSelector: s,
            maskInputOptions: a,
            maskInputFn: l,
            sampling: u,
            userTriggeredOnInput: c,
          }) {
            function d(e) {
              let n = e5(e),
                u = e.isTrusted,
                d = n && n.tagName;
              if (
                (n && "OPTION" === d && (n = n.parentElement),
                !n ||
                  !d ||
                  0 > e9.indexOf(d) ||
                  eF(n, r, o, !0) ||
                  n.classList.contains(i) ||
                  (s && n.matches(s)))
              )
                return;
              let f = n.value,
                p = !1,
                g = J(n) || "";
              "radio" === g || "checkbox" === g
                ? (p = n.checked)
                : (a[d.toLowerCase()] || a[g]) &&
                  (f = V({
                    element: n,
                    maskInputOptions: a,
                    tagName: d,
                    type: g,
                    value: f,
                    maskInputFn: l,
                  })),
                h(n, e$(e7)({ text: f, isChecked: p, userTriggered: u }, c));
              let v = n.name;
              "radio" === g &&
                v &&
                p &&
                t
                  .querySelectorAll(`input[type="radio"][name="${v}"]`)
                  .forEach((e) => {
                    e !== n &&
                      h(
                        e,
                        e$(e7)(
                          { text: e.value, isChecked: !p, userTriggered: !1 },
                          c,
                        ),
                      );
                  });
            }
            function h(t, r) {
              let o = te.get(t);
              if (!o || o.text !== r.text || o.isChecked !== r.isChecked) {
                te.set(t, r);
                let o = n.getId(t);
                e$(e)(Object.assign(Object.assign({}, r), { id: o }));
              }
            }
            let f = ("last" === u.input ? ["change"] : ["input", "change"]).map(
                (e) => ex(e, e$(d), t),
              ),
              p = t.defaultView;
            if (!p)
              return () => {
                f.forEach((e) => e());
              };
            let g = p.Object.getOwnPropertyDescriptor(
                p.HTMLInputElement.prototype,
                "value",
              ),
              v = [
                [p.HTMLInputElement.prototype, "value"],
                [p.HTMLInputElement.prototype, "checked"],
                [p.HTMLSelectElement.prototype, "value"],
                [p.HTMLTextAreaElement.prototype, "value"],
                [p.HTMLSelectElement.prototype, "selectedIndex"],
                [p.HTMLOptionElement.prototype, "selected"],
              ];
            return (
              g &&
                g.set &&
                f.push(
                  ...v.map((e) =>
                    eL(
                      e[0],
                      e[1],
                      {
                        set() {
                          e$(d)({ target: this, isTrusted: !1 });
                        },
                      },
                      !1,
                      p,
                    ),
                  ),
                ),
              e$(() => {
                f.forEach((e) => e());
              })
            );
          })(e),
          u = (function ({
            mediaInteractionCb: e,
            blockClass: t,
            blockSelector: n,
            mirror: r,
            sampling: o,
            doc: i,
          }) {
            let s = e$((i) =>
                eR(
                  e$((o) => {
                    let s = e5(o);
                    if (!s || eF(s, t, n, !0)) return;
                    let {
                      currentTime: a,
                      volume: l,
                      muted: u,
                      playbackRate: c,
                    } = s;
                    e({
                      type: i,
                      id: r.getId(s),
                      currentTime: a,
                      volume: l,
                      muted: u,
                      playbackRate: c,
                    });
                  }),
                  o.media || 500,
                ),
              ),
              a = [
                ex("play", s(0), i),
                ex("pause", s(1), i),
                ex("seeked", s(2), i),
                ex("volumechange", s(3), i),
                ex("ratechange", s(4), i),
              ];
            return e$(() => {
              a.forEach((e) => e());
            });
          })(e),
          c = () => {},
          d = () => {},
          h = () => {},
          f = () => {};
        e.recordDOM &&
          ((c = (function (
            { styleSheetRuleCb: e, mirror: t, stylesheetManager: n },
            { win: r },
          ) {
            let o, i;
            if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
            let s = r.CSSStyleSheet.prototype.insertRule;
            r.CSSStyleSheet.prototype.insertRule = new Proxy(s, {
              apply: e$((r, o, i) => {
                let [s, a] = i,
                  { id: l, styleId: u } = tn(o, t, n.styleMirror);
                return (
                  ((l && -1 !== l) || (u && -1 !== u)) &&
                    e({ id: l, styleId: u, adds: [{ rule: s, index: a }] }),
                  eK(() => r.apply(o, i))()
                );
              }),
            });
            let a = r.CSSStyleSheet.prototype.deleteRule;
            (r.CSSStyleSheet.prototype.deleteRule = new Proxy(a, {
              apply: e$((r, o, i) => {
                let [s] = i,
                  { id: a, styleId: l } = tn(o, t, n.styleMirror);
                return (
                  ((a && -1 !== a) || (l && -1 !== l)) &&
                    e({ id: a, styleId: l, removes: [{ index: s }] }),
                  eK(() => r.apply(o, i))()
                );
              }),
            })),
              r.CSSStyleSheet.prototype.replace &&
                ((o = r.CSSStyleSheet.prototype.replace),
                (r.CSSStyleSheet.prototype.replace = new Proxy(o, {
                  apply: e$((r, o, i) => {
                    let [s] = i,
                      { id: a, styleId: l } = tn(o, t, n.styleMirror);
                    return (
                      ((a && -1 !== a) || (l && -1 !== l)) &&
                        e({ id: a, styleId: l, replace: s }),
                      r.apply(o, i)
                    );
                  }),
                }))),
              r.CSSStyleSheet.prototype.replaceSync &&
                ((i = r.CSSStyleSheet.prototype.replaceSync),
                (r.CSSStyleSheet.prototype.replaceSync = new Proxy(i, {
                  apply: e$((r, o, i) => {
                    let [s] = i,
                      { id: a, styleId: l } = tn(o, t, n.styleMirror);
                    return (
                      ((a && -1 !== a) || (l && -1 !== l)) &&
                        e({ id: a, styleId: l, replaceSync: s }),
                      r.apply(o, i)
                    );
                  }),
                })));
            let l = {};
            ts("CSSGroupingRule")
              ? (l.CSSGroupingRule = r.CSSGroupingRule)
              : (ts("CSSMediaRule") && (l.CSSMediaRule = r.CSSMediaRule),
                ts("CSSConditionRule") &&
                  (l.CSSConditionRule = r.CSSConditionRule),
                ts("CSSSupportsRule") &&
                  (l.CSSSupportsRule = r.CSSSupportsRule));
            let u = {};
            return (
              Object.entries(l).forEach(([r, o]) => {
                (u[r] = {
                  insertRule: o.prototype.insertRule,
                  deleteRule: o.prototype.deleteRule,
                }),
                  (o.prototype.insertRule = new Proxy(u[r].insertRule, {
                    apply: e$((r, o, i) => {
                      let [s, a] = i,
                        { id: l, styleId: u } = tn(
                          o.parentStyleSheet,
                          t,
                          n.styleMirror,
                        );
                      return (
                        ((l && -1 !== l) || (u && -1 !== u)) &&
                          e({
                            id: l,
                            styleId: u,
                            adds: [{ rule: s, index: [...tt(o), a || 0] }],
                          }),
                        r.apply(o, i)
                      );
                    }),
                  })),
                  (o.prototype.deleteRule = new Proxy(u[r].deleteRule, {
                    apply: e$((r, o, i) => {
                      let [s] = i,
                        { id: a, styleId: l } = tn(
                          o.parentStyleSheet,
                          t,
                          n.styleMirror,
                        );
                      return (
                        ((a && -1 !== a) || (l && -1 !== l)) &&
                          e({
                            id: a,
                            styleId: l,
                            removes: [{ index: [...tt(o), s] }],
                          }),
                        r.apply(o, i)
                      );
                    }),
                  }));
              }),
              e$(() => {
                (r.CSSStyleSheet.prototype.insertRule = s),
                  (r.CSSStyleSheet.prototype.deleteRule = a),
                  o && (r.CSSStyleSheet.prototype.replace = o),
                  i && (r.CSSStyleSheet.prototype.replaceSync = i),
                  Object.entries(l).forEach(([e, t]) => {
                    (t.prototype.insertRule = u[e].insertRule),
                      (t.prototype.deleteRule = u[e].deleteRule);
                  });
              })
            );
          })(e, { win: r })),
          (d = tr(e, e.doc)),
          (h = (function (
            {
              styleDeclarationCb: e,
              mirror: t,
              ignoreCSSAttributes: n,
              stylesheetManager: r,
            },
            { win: o },
          ) {
            let i = o.CSSStyleDeclaration.prototype.setProperty;
            o.CSSStyleDeclaration.prototype.setProperty = new Proxy(i, {
              apply: e$((o, s, a) => {
                var l;
                let [u, c, d] = a;
                if (n.has(u)) return i.apply(s, [u, c, d]);
                let { id: h, styleId: f } = tn(
                  null === (l = s.parentRule) || void 0 === l
                    ? void 0
                    : l.parentStyleSheet,
                  t,
                  r.styleMirror,
                );
                return (
                  ((h && -1 !== h) || (f && -1 !== f)) &&
                    e({
                      id: h,
                      styleId: f,
                      set: { property: u, value: c, priority: d },
                      index: tt(s.parentRule),
                    }),
                  o.apply(s, a)
                );
              }),
            });
            let s = o.CSSStyleDeclaration.prototype.removeProperty;
            return (
              (o.CSSStyleDeclaration.prototype.removeProperty = new Proxy(s, {
                apply: e$((o, i, a) => {
                  var l;
                  let [u] = a;
                  if (n.has(u)) return s.apply(i, [u]);
                  let { id: c, styleId: d } = tn(
                    null === (l = i.parentRule) || void 0 === l
                      ? void 0
                      : l.parentStyleSheet,
                    t,
                    r.styleMirror,
                  );
                  return (
                    ((c && -1 !== c) || (d && -1 !== d)) &&
                      e({
                        id: c,
                        styleId: d,
                        remove: { property: u },
                        index: tt(i.parentRule),
                      }),
                    o.apply(i, a)
                  );
                }),
              })),
              e$(() => {
                (o.CSSStyleDeclaration.prototype.setProperty = i),
                  (o.CSSStyleDeclaration.prototype.removeProperty = s);
              })
            );
          })(e, { win: r })),
          e.collectFonts &&
            (f = (function ({ fontCb: e, doc: t }) {
              let n = t.defaultView;
              if (!n) return () => {};
              let r = [],
                o = new WeakMap(),
                i = n.FontFace;
              n.FontFace = function (e, t, n) {
                let r = new i(e, t, n);
                return (
                  o.set(r, {
                    family: e,
                    buffer: "string" != typeof t,
                    descriptors: n,
                    fontSource:
                      "string" == typeof t
                        ? t
                        : JSON.stringify(Array.from(new Uint8Array(t))),
                  }),
                  r
                );
              };
              let s = eD(t.fonts, "add", function (t) {
                return function (n) {
                  return (
                    setTimeout(
                      e$(() => {
                        let t = o.get(n);
                        t && (e(t), o.delete(n));
                      }),
                      0,
                    ),
                    t.apply(this, [n])
                  );
                };
              });
              return (
                r.push(() => {
                  n.FontFace = i;
                }),
                r.push(s),
                e$(() => {
                  r.forEach((e) => e());
                })
              );
            })(e)));
        let p = (function (e) {
            let {
                doc: t,
                mirror: n,
                blockClass: r,
                blockSelector: o,
                selectionCb: i,
              } = e,
              s = !0,
              a = e$(() => {
                let e = t.getSelection();
                if (!e || (s && (null == e ? void 0 : e.isCollapsed))) return;
                s = e.isCollapsed || !1;
                let a = [],
                  l = e.rangeCount || 0;
                for (let t = 0; t < l; t++) {
                  let {
                    startContainer: i,
                    startOffset: s,
                    endContainer: l,
                    endOffset: u,
                  } = e.getRangeAt(t);
                  eF(i, r, o, !0) ||
                    eF(l, r, o, !0) ||
                    a.push({
                      start: n.getId(i),
                      startOffset: s,
                      end: n.getId(l),
                      endOffset: u,
                    });
                }
                i({ ranges: a });
              });
            return a(), ex("selectionchange", a);
          })(e),
          g = [];
        for (let t of e.plugins) g.push(t.observer(t.callback, r, t.options));
        return e$(() => {
          e4.forEach((e) => e.reset()),
            null == n || n.disconnect(),
            o(),
            i(),
            s(),
            a(),
            l(),
            u(),
            c(),
            d(),
            h(),
            f(),
            p(),
            g.forEach((e) => e());
        });
      }
      function ti(e) {
        return void 0 !== window[e];
      }
      function ts(e) {
        return !!(
          void 0 !== window[e] &&
          window[e].prototype &&
          "insertRule" in window[e].prototype &&
          "deleteRule" in window[e].prototype
        );
      }
      for (
        var ta = (function (e, t) {
            var n;
            return function (t) {
              var r;
              return new Worker(
                (n =
                  n ||
                  ((r = new Blob(
                    (function (e, t) {
                      var n = t,
                        r = e.toString().split("\n");
                      r.pop(), r.shift();
                      for (
                        var o = r[0].search(/\S/),
                          i = /(['"])__worker_loader_strict__(['"])/g,
                          s = 0,
                          a = r.length;
                        s < a;
                        ++s
                      )
                        r[s] =
                          r[s].substring(o).replace(i, "$1use strict$2") + "\n";
                      return n && r.push("//# sourceMappingURL=" + n + "\n"), r;
                    })(e, null),
                    { type: "application/javascript" },
                  )),
                  URL.createObjectURL(r))),
                t,
              );
            };
          })(function () {
            !(function () {
              function e(e, t, n, r) {
                return new (n || (n = Promise))(function (o, i) {
                  function s(e) {
                    try {
                      l(r.next(e));
                    } catch (e) {
                      i(e);
                    }
                  }
                  function a(e) {
                    try {
                      l(r.throw(e));
                    } catch (e) {
                      i(e);
                    }
                  }
                  function l(e) {
                    var t;
                    e.done
                      ? o(e.value)
                      : ((t = e.value) instanceof n
                          ? t
                          : new n(function (e) {
                              e(t);
                            })
                        ).then(s, a);
                  }
                  l((r = r.apply(e, t || [])).next());
                });
              }
              for (
                var t =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  n =
                    "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
                  r = 0;
                r < t.length;
                r++
              )
                n[t.charCodeAt(r)] = r;
              var o = function (e) {
                var n,
                  r = new Uint8Array(e),
                  o = r.length,
                  i = "";
                for (n = 0; n < o; n += 3)
                  (i += t[r[n] >> 2]),
                    (i += t[((3 & r[n]) << 4) | (r[n + 1] >> 4)]),
                    (i += t[((15 & r[n + 1]) << 2) | (r[n + 2] >> 6)]),
                    (i += t[63 & r[n + 2]]);
                return (
                  o % 3 == 2
                    ? (i = i.substring(0, i.length - 1) + "=")
                    : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="),
                  i
                );
              };
              let i = new Map(),
                s = new Map(),
                a = self;
              a.onmessage = function (t) {
                return e(this, void 0, void 0, function* () {
                  if (!("OffscreenCanvas" in globalThis))
                    return a.postMessage({ id: t.data.id });
                  {
                    let {
                        id: n,
                        bitmap: r,
                        width: l,
                        height: u,
                        dataURLOptions: c,
                      } = t.data,
                      d = (function (t, n, r) {
                        return e(this, void 0, void 0, function* () {
                          let e = `${t}-${n}`;
                          if (!("OffscreenCanvas" in globalThis)) return "";
                          {
                            if (s.has(e)) return s.get(e);
                            let i = new OffscreenCanvas(t, n);
                            i.getContext("2d");
                            let a = yield i.convertToBlob(r),
                              l = o(yield a.arrayBuffer());
                            return s.set(e, l), l;
                          }
                        });
                      })(l, u, c),
                      h = new OffscreenCanvas(l, u);
                    h.getContext("2d").drawImage(r, 0, 0), r.close();
                    let f = yield h.convertToBlob(c),
                      p = f.type,
                      g = o(yield f.arrayBuffer());
                    if (!i.has(n) && (yield d) === g)
                      return i.set(n, g), a.postMessage({ id: n });
                    if (i.get(n) === g) return a.postMessage({ id: n });
                    a.postMessage({
                      id: n,
                      type: p,
                      base64: g,
                      width: l,
                      height: u,
                    }),
                      i.set(n, g);
                  }
                });
              };
            })();
          }, 0),
          tl =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          tu = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
          tc = 0;
        tc < tl.length;
        tc++
      )
        tu[tl.charCodeAt(tc)] = tc;
      var td = function (e) {
        var t,
          n = new Uint8Array(e),
          r = n.length,
          o = "";
        for (t = 0; t < r; t += 3)
          (o += tl[n[t] >> 2]),
            (o += tl[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
            (o += tl[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
            (o += tl[63 & n[t + 2]]);
        return (
          r % 3 == 2
            ? (o = o.substring(0, o.length - 1) + "=")
            : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="),
          o
        );
      };
      let th = new Map(),
        tf = (e, t, n) => {
          if (!e || !(tg(e, t) || "object" == typeof e)) return;
          let r = (function (e, t) {
              let n = th.get(e);
              return (
                n || ((n = new Map()), th.set(e, n)),
                n.has(t) || n.set(t, []),
                n.get(t)
              );
            })(n, e.constructor.name),
            o = r.indexOf(e);
          return -1 === o && ((o = r.length), r.push(e)), o;
        },
        tp = (e, t, n) =>
          [...e].map((e) =>
            (function e(t, n, r) {
              if (t instanceof Array) return t.map((t) => e(t, n, r));
              if (null === t);
              else if (
                t instanceof Float32Array ||
                t instanceof Float64Array ||
                t instanceof Int32Array ||
                t instanceof Uint32Array ||
                t instanceof Uint8Array ||
                t instanceof Uint16Array ||
                t instanceof Int16Array ||
                t instanceof Int8Array ||
                t instanceof Uint8ClampedArray
              )
                return {
                  rr_type: t.constructor.name,
                  args: [Object.values(t)],
                };
              else if (t instanceof ArrayBuffer)
                return { rr_type: t.constructor.name, base64: td(t) };
              else if (t instanceof DataView)
                return {
                  rr_type: t.constructor.name,
                  args: [e(t.buffer, n, r), t.byteOffset, t.byteLength],
                };
              else if (t instanceof HTMLImageElement) {
                let e = t.constructor.name,
                  { src: n } = t;
                return { rr_type: e, src: n };
              } else if (t instanceof HTMLCanvasElement)
                return { rr_type: "HTMLImageElement", src: t.toDataURL() };
              else if (t instanceof ImageData)
                return {
                  rr_type: t.constructor.name,
                  args: [e(t.data, n, r), t.width, t.height],
                };
              else if (tg(t, n) || "object" == typeof t)
                return { rr_type: t.constructor.name, index: tf(t, n, r) };
              return t;
            })(e, t, n),
          ),
        tg = (e, t) =>
          !![
            "WebGLActiveInfo",
            "WebGLBuffer",
            "WebGLFramebuffer",
            "WebGLProgram",
            "WebGLRenderbuffer",
            "WebGLShader",
            "WebGLShaderPrecisionFormat",
            "WebGLTexture",
            "WebGLUniformLocation",
            "WebGLVertexArrayObject",
            "WebGLVertexArrayObjectOES",
          ]
            .filter((e) => "function" == typeof t[e])
            .find((n) => e instanceof t[n]);
      function tv(e, t, n, r) {
        let o = [];
        try {
          let i = eD(e.HTMLCanvasElement.prototype, "getContext", function (e) {
            return function (o, ...i) {
              if (!eF(this, t, n, !0)) {
                let e = "experimental-webgl" === o ? "webgl" : o;
                if (
                  ("__context" in this || (this.__context = e),
                  r && ["webgl", "webgl2"].includes(e))
                ) {
                  if (i[0] && "object" == typeof i[0]) {
                    let e = i[0];
                    e.preserveDrawingBuffer || (e.preserveDrawingBuffer = !0);
                  } else i.splice(0, 1, { preserveDrawingBuffer: !0 });
                }
              }
              return e.apply(this, [o, ...i]);
            };
          });
          o.push(i);
        } catch (e) {
          console.error(
            "failed to patch HTMLCanvasElement.prototype.getContext",
          );
        }
        return () => {
          o.forEach((e) => e());
        };
      }
      function tm(e, t, n, r, o, i, s) {
        let a = [];
        for (let i of Object.getOwnPropertyNames(e))
          if (
            ![
              "isContextLost",
              "canvas",
              "drawingBufferWidth",
              "drawingBufferHeight",
            ].includes(i)
          )
            try {
              if ("function" != typeof e[i]) continue;
              let l = eD(e, i, function (e) {
                return function (...a) {
                  let l = e.apply(this, a);
                  if (
                    (tf(l, s, this),
                    "tagName" in this.canvas && !eF(this.canvas, r, o, !0))
                  ) {
                    let e = tp([...a], s, this),
                      r = { type: t, property: i, args: e };
                    n(this.canvas, r);
                  }
                  return l;
                };
              });
              a.push(l);
            } catch (o) {
              let r = eL(e, i, {
                set(e) {
                  n(this.canvas, {
                    type: t,
                    property: i,
                    args: [e],
                    setter: !0,
                  });
                },
              });
              a.push(r);
            }
        return a;
      }
      class ty {
        reset() {
          this.pendingCanvasMutations.clear(),
            this.resetObservers && this.resetObservers();
        }
        freeze() {
          this.frozen = !0;
        }
        unfreeze() {
          this.frozen = !1;
        }
        lock() {
          this.locked = !0;
        }
        unlock() {
          this.locked = !1;
        }
        constructor(e) {
          (this.pendingCanvasMutations = new Map()),
            (this.rafStamps = { latestId: 0, invokeId: null }),
            (this.frozen = !1),
            (this.locked = !1),
            (this.processMutation = (e, t) => {
              ((this.rafStamps.invokeId &&
                this.rafStamps.latestId !== this.rafStamps.invokeId) ||
                !this.rafStamps.invokeId) &&
                (this.rafStamps.invokeId = this.rafStamps.latestId),
                this.pendingCanvasMutations.has(e) ||
                  this.pendingCanvasMutations.set(e, []),
                this.pendingCanvasMutations.get(e).push(t);
            });
          let {
            sampling: t = "all",
            win: n,
            blockClass: r,
            blockSelector: o,
            recordCanvas: i,
            dataURLOptions: s,
          } = e;
          (this.mutationCb = e.mutationCb),
            (this.mirror = e.mirror),
            i && "all" === t && this.initCanvasMutationObserver(n, r, o),
            i &&
              "number" == typeof t &&
              this.initCanvasFPSObserver(t, n, r, o, { dataURLOptions: s });
        }
        initCanvasFPSObserver(e, t, n, r, o) {
          let i;
          let s = tv(t, n, r, !0),
            a = new Map(),
            l = new ta();
          l.onmessage = (e) => {
            let { id: t } = e.data;
            if ((a.set(t, !1), !("base64" in e.data))) return;
            let { base64: n, type: r, width: o, height: i } = e.data;
            this.mutationCb({
              id: t,
              type: eO["2D"],
              commands: [
                { property: "clearRect", args: [0, 0, o, i] },
                {
                  property: "drawImage",
                  args: [
                    {
                      rr_type: "ImageBitmap",
                      args: [
                        {
                          rr_type: "Blob",
                          data: [{ rr_type: "ArrayBuffer", base64: n }],
                          type: r,
                        },
                      ],
                    },
                    0,
                    0,
                  ],
                },
              ],
            });
          };
          let u = 1e3 / e,
            c = 0,
            d = () => {
              let e = [];
              return (
                t.document.querySelectorAll("canvas").forEach((t) => {
                  eF(t, n, r, !0) || e.push(t);
                }),
                e
              );
            },
            h = (e) => {
              if (c && e - c < u) {
                i = requestAnimationFrame(h);
                return;
              }
              (c = e),
                d().forEach((e) => {
                  var t, n, r, i;
                  return (
                    (t = this),
                    (n = void 0),
                    (r = void 0),
                    (i = function* () {
                      var t;
                      let n = this.mirror.getId(e);
                      if (a.get(n)) return;
                      if (
                        (a.set(n, !0),
                        ["webgl", "webgl2"].includes(e.__context))
                      ) {
                        let n = e.getContext(e.__context);
                        (null ===
                          (t = null == n ? void 0 : n.getContextAttributes()) ||
                        void 0 === t
                          ? void 0
                          : t.preserveDrawingBuffer) === !1 &&
                          n.clear(n.COLOR_BUFFER_BIT);
                      }
                      let r = yield createImageBitmap(e);
                      l.postMessage(
                        {
                          id: n,
                          bitmap: r,
                          width: e.width,
                          height: e.height,
                          dataURLOptions: o.dataURLOptions,
                        },
                        [r],
                      );
                    }),
                    new (r || (r = Promise))(function (e, o) {
                      function s(e) {
                        try {
                          l(i.next(e));
                        } catch (e) {
                          o(e);
                        }
                      }
                      function a(e) {
                        try {
                          l(i.throw(e));
                        } catch (e) {
                          o(e);
                        }
                      }
                      function l(t) {
                        var n;
                        t.done
                          ? e(t.value)
                          : ((n = t.value) instanceof r
                              ? n
                              : new r(function (e) {
                                  e(n);
                                })
                            ).then(s, a);
                      }
                      l((i = i.apply(t, n || [])).next());
                    })
                  );
                }),
                (i = requestAnimationFrame(h));
            };
          (i = requestAnimationFrame(h)),
            (this.resetObservers = () => {
              s(), cancelAnimationFrame(i);
            });
        }
        initCanvasMutationObserver(e, t, n) {
          this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
          let r = tv(e, t, n, !1),
            o = (function (e, t, n, r) {
              let o = [];
              for (let i of Object.getOwnPropertyNames(
                t.CanvasRenderingContext2D.prototype,
              ))
                try {
                  if (
                    "function" != typeof t.CanvasRenderingContext2D.prototype[i]
                  )
                    continue;
                  let s = eD(
                    t.CanvasRenderingContext2D.prototype,
                    i,
                    function (o) {
                      return function (...s) {
                        return (
                          eF(this.canvas, n, r, !0) ||
                            setTimeout(() => {
                              let n = tp([...s], t, this);
                              e(this.canvas, {
                                type: eO["2D"],
                                property: i,
                                args: n,
                              });
                            }, 0),
                          o.apply(this, s)
                        );
                      };
                    },
                  );
                  o.push(s);
                } catch (r) {
                  let n = eL(t.CanvasRenderingContext2D.prototype, i, {
                    set(t) {
                      e(this.canvas, {
                        type: eO["2D"],
                        property: i,
                        args: [t],
                        setter: !0,
                      });
                    },
                  });
                  o.push(n);
                }
              return () => {
                o.forEach((e) => e());
              };
            })(this.processMutation.bind(this), e, t, n),
            i = (function (e, t, n, r, o) {
              let i = [];
              return (
                i.push(
                  ...tm(
                    t.WebGLRenderingContext.prototype,
                    eO.WebGL,
                    e,
                    n,
                    r,
                    o,
                    t,
                  ),
                ),
                void 0 !== t.WebGL2RenderingContext &&
                  i.push(
                    ...tm(
                      t.WebGL2RenderingContext.prototype,
                      eO.WebGL2,
                      e,
                      n,
                      r,
                      o,
                      t,
                    ),
                  ),
                () => {
                  i.forEach((e) => e());
                }
              );
            })(this.processMutation.bind(this), e, t, n, this.mirror);
          this.resetObservers = () => {
            r(), o(), i();
          };
        }
        startPendingCanvasMutationFlusher() {
          requestAnimationFrame(() => this.flushPendingCanvasMutations());
        }
        startRAFTimestamping() {
          let e = (t) => {
            (this.rafStamps.latestId = t), requestAnimationFrame(e);
          };
          requestAnimationFrame(e);
        }
        flushPendingCanvasMutations() {
          this.pendingCanvasMutations.forEach((e, t) => {
            let n = this.mirror.getId(t);
            this.flushPendingCanvasMutationFor(t, n);
          }),
            requestAnimationFrame(() => this.flushPendingCanvasMutations());
        }
        flushPendingCanvasMutationFor(e, t) {
          if (this.frozen || this.locked) return;
          let n = this.pendingCanvasMutations.get(e);
          if (!n || -1 === t) return;
          let r = n.map((e) =>
              (function (e, t) {
                var n = {};
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) &&
                    0 > t.indexOf(r) &&
                    (n[r] = e[r]);
                if (
                  null != e &&
                  "function" == typeof Object.getOwnPropertySymbols
                )
                  for (
                    var o = 0, r = Object.getOwnPropertySymbols(e);
                    o < r.length;
                    o++
                  )
                    0 > t.indexOf(r[o]) &&
                      Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                      (n[r[o]] = e[r[o]]);
                return n;
              })(e, ["type"]),
            ),
            { type: o } = n[0];
          this.mutationCb({ id: t, type: o, commands: r }),
            this.pendingCanvasMutations.delete(e);
        }
      }
      class tb {
        constructor() {
          (this.nodeMap = new WeakMap()),
            (this.loop = !0),
            this.periodicallyClear();
        }
        periodicallyClear() {
          requestAnimationFrame(() => {
            this.clear(), this.loop && this.periodicallyClear();
          });
        }
        inOtherBuffer(e, t) {
          let n = this.nodeMap.get(e);
          return n && Array.from(n).some((e) => e !== t);
        }
        add(e, t) {
          this.nodeMap.set(e, (this.nodeMap.get(e) || new Set()).add(t));
        }
        clear() {
          this.nodeMap = new WeakMap();
        }
        destroy() {
          this.loop = !1;
        }
      }
      class tS {
        constructor(e) {
          (this.shadowDoms = new WeakSet()),
            (this.restoreHandlers = []),
            (this.mutationCb = e.mutationCb),
            (this.scrollCb = e.scrollCb),
            (this.bypassOptions = e.bypassOptions),
            (this.mirror = e.mirror),
            this.init();
        }
        init() {
          this.reset(), this.patchAttachShadow(Element, document);
        }
        addShadowRoot(e, t) {
          if (!B(e) || this.shadowDoms.has(e)) return;
          this.shadowDoms.add(e);
          let n = e8(
            Object.assign(Object.assign({}, this.bypassOptions), {
              doc: t,
              mutationCb: this.mutationCb,
              mirror: this.mirror,
              shadowDomManager: this,
            }),
            e,
          );
          this.restoreHandlers.push(() => n.disconnect()),
            this.restoreHandlers.push(
              e6(
                Object.assign(Object.assign({}, this.bypassOptions), {
                  scrollCb: this.scrollCb,
                  doc: e,
                  mirror: this.mirror,
                }),
              ),
            ),
            setTimeout(() => {
              e.adoptedStyleSheets &&
                e.adoptedStyleSheets.length > 0 &&
                this.bypassOptions.stylesheetManager.adoptStyleSheets(
                  e.adoptedStyleSheets,
                  this.mirror.getId(e.host),
                ),
                this.restoreHandlers.push(
                  tr(
                    {
                      mirror: this.mirror,
                      stylesheetManager: this.bypassOptions.stylesheetManager,
                    },
                    e,
                  ),
                );
            }, 0);
        }
        observeAttachShadow(e) {
          e.contentWindow &&
            e.contentDocument &&
            this.patchAttachShadow(e.contentWindow.Element, e.contentDocument);
        }
        patchAttachShadow(e, t) {
          let n = this;
          this.restoreHandlers.push(
            eD(e.prototype, "attachShadow", function (e) {
              return function (r) {
                let o = e.call(this, r);
                return (
                  this.shadowRoot &&
                    eV(this) &&
                    n.addShadowRoot(this.shadowRoot, t),
                  o
                );
              };
            }),
          );
        }
        reset() {
          this.restoreHandlers.forEach((e) => {
            try {
              e();
            } catch (e) {}
          }),
            (this.restoreHandlers = []),
            (this.shadowDoms = new WeakSet());
        }
      }
      class tw {
        constructor(e) {
          (this.trackedLinkElements = new WeakSet()),
            (this.styleMirror = new ez()),
            (this.mutationCb = e.mutationCb),
            (this.adoptedStyleSheetCb = e.adoptedStyleSheetCb);
        }
        attachLinkElement(e, t) {
          "_cssText" in t.attributes &&
            this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{ id: t.id, attributes: t.attributes }],
            }),
            this.trackLinkElement(e);
        }
        trackLinkElement(e) {
          this.trackedLinkElements.has(e) ||
            (this.trackedLinkElements.add(e),
            this.trackStylesheetInLinkElement(e));
        }
        adoptStyleSheets(e, t) {
          if (0 === e.length) return;
          let n = { id: t, styleIds: [] },
            r = [];
          for (let t of e) {
            let e;
            this.styleMirror.has(t)
              ? (e = this.styleMirror.getId(t))
              : ((e = this.styleMirror.add(t)),
                r.push({
                  styleId: e,
                  rules: Array.from(t.rules || CSSRule, (e, t) => ({
                    rule: z(e),
                    index: t,
                  })),
                })),
              n.styleIds.push(e);
          }
          r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n);
        }
        reset() {
          this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet());
        }
        trackStylesheetInLinkElement(e) {}
      }
      function tI(e) {
        return Object.assign(Object.assign({}, e), { timestamp: eN() });
      }
      let tM = !1,
        tC = new Y();
      function tE(e = {}) {
        let t;
        let {
          emit: n,
          checkoutEveryNms: r,
          checkoutEveryNth: o,
          blockClass: u = "rr-block",
          blockSelector: c = null,
          ignoreClass: d = "rr-ignore",
          ignoreSelector: h = null,
          maskTextClass: f = "rr-mask",
          maskTextSelector: p = null,
          inlineStylesheet: g = !0,
          maskAllInputs: v,
          maskInputOptions: m,
          slimDOMOptions: y,
          maskInputFn: b,
          maskTextFn: S,
          hooks: w,
          packFn: I,
          sampling: M = {},
          dataURLOptions: C = {},
          mousemoveWait: E,
          recordDOM: O = !0,
          recordCanvas: k = !1,
          recordCrossOriginIframes: x = !1,
          recordAfter: T = "DOMContentLoaded" === e.recordAfter
            ? e.recordAfter
            : "load",
          userTriggeredOnInput: _ = !1,
          collectFonts: R = !1,
          inlineImages: L = !1,
          plugins: D,
          keepIframeSrcFn: N = () => !1,
          ignoreCSSAttributes: P = new Set([]),
          errorHandler: A,
        } = e;
        i = A;
        let j = !x || window.parent === window,
          H = !1;
        if (!j)
          try {
            window.parent.document && (H = !1);
          } catch (e) {
            H = !0;
          }
        if (j && !n) throw Error("emit function is required");
        void 0 !== E && void 0 === M.mousemove && (M.mousemove = E), tC.reset();
        let F =
            !0 === v
              ? {
                  color: !0,
                  date: !0,
                  "datetime-local": !0,
                  email: !0,
                  month: !0,
                  number: !0,
                  range: !0,
                  search: !0,
                  tel: !0,
                  text: !0,
                  time: !0,
                  url: !0,
                  week: !0,
                  textarea: !0,
                  select: !0,
                  password: !0,
                }
              : void 0 !== m
                ? m
                : { password: !0 },
          q =
            !0 === y || "all" === y
              ? {
                  script: !0,
                  comment: !0,
                  headFavicon: !0,
                  headWhitespace: !0,
                  headMetaSocial: !0,
                  headMetaRobots: !0,
                  headMetaHttpEquiv: !0,
                  headMetaVerification: !0,
                  headMetaAuthorship: "all" === y,
                  headMetaDescKeywords: "all" === y,
                }
              : y || {};
        !(function (e = window) {
          "NodeList" in e &&
            !e.NodeList.prototype.forEach &&
            (e.NodeList.prototype.forEach = Array.prototype.forEach),
            "DOMTokenList" in e &&
              !e.DOMTokenList.prototype.forEach &&
              (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
            Node.prototype.contains ||
              (Node.prototype.contains = (...e) => {
                let t = e[0];
                if (!(0 in e)) throw TypeError("1 argument is required");
                do if (this === t) return !0;
                while ((t = t && t.parentNode));
                return !1;
              });
        })();
        let U = 0,
          W = (e) => {
            for (let t of D || [])
              t.eventProcessor && (e = t.eventProcessor(e));
            return I && !H && (e = I(e)), e;
          };
        s = (e, i) => {
          var s;
          if (
            ((null === (s = e4[0]) || void 0 === s ? void 0 : s.isFrozen()) &&
              e.type !== eI.FullSnapshot &&
              (e.type !== eI.IncrementalSnapshot ||
                e.data.source !== eM.Mutation) &&
              e4.forEach((e) => e.unfreeze()),
            j)
          )
            null == n || n(W(e), i);
          else if (H) {
            let t = {
              type: "rrweb",
              event: W(e),
              origin: window.location.origin,
              isCheckout: i,
            };
            window.parent.postMessage(t, "*");
          }
          if (e.type === eI.FullSnapshot) (t = e), (U = 0);
          else if (e.type === eI.IncrementalSnapshot) {
            if (e.data.source === eM.Mutation && e.data.isAttachIframe) return;
            U++;
            let n = o && U >= o,
              i = r && e.timestamp - t.timestamp > r;
            (n || i) && a(!0);
          }
        };
        let B = (e) => {
            s(
              tI({
                type: eI.IncrementalSnapshot,
                data: Object.assign({ source: eM.Mutation }, e),
              }),
            );
          },
          G = (e) =>
            s(
              tI({
                type: eI.IncrementalSnapshot,
                data: Object.assign({ source: eM.Scroll }, e),
              }),
            ),
          z = (e) =>
            s(
              tI({
                type: eI.IncrementalSnapshot,
                data: Object.assign({ source: eM.CanvasMutation }, e),
              }),
            ),
          V = new tw({
            mutationCb: B,
            adoptedStyleSheetCb: (e) =>
              s(
                tI({
                  type: eI.IncrementalSnapshot,
                  data: Object.assign({ source: eM.AdoptedStyleSheet }, e),
                }),
              ),
          }),
          $ = new eX({
            mirror: tC,
            mutationCb: B,
            stylesheetManager: V,
            recordCrossOriginIframes: x,
            wrappedEmit: s,
          });
        for (let e of D || [])
          e.getMirror &&
            e.getMirror({
              nodeMirror: tC,
              crossOriginIframeMirror: $.crossOriginIframeMirror,
              crossOriginIframeStyleMirror: $.crossOriginIframeStyleMirror,
            });
        let K = new tb();
        l = new ty({
          recordCanvas: k,
          mutationCb: z,
          win: window,
          blockClass: u,
          blockSelector: c,
          mirror: tC,
          sampling: M.canvas,
          dataURLOptions: C,
        });
        let J = new tS({
          mutationCb: B,
          scrollCb: G,
          bypassOptions: {
            blockClass: u,
            blockSelector: c,
            maskTextClass: f,
            maskTextSelector: p,
            inlineStylesheet: g,
            maskInputOptions: F,
            dataURLOptions: C,
            maskTextFn: S,
            maskInputFn: b,
            recordCanvas: k,
            inlineImages: L,
            sampling: M,
            slimDOMOptions: q,
            iframeManager: $,
            stylesheetManager: V,
            canvasManager: l,
            keepIframeSrcFn: N,
            processedNodeManager: K,
          },
          mirror: tC,
        });
        a = (e = !1) => {
          if (!O) return;
          s(
            tI({
              type: eI.Meta,
              data: { href: window.location.href, width: ej(), height: eA() },
            }),
            e,
          ),
            V.reset(),
            J.init(),
            e4.forEach((e) => e.lock());
          let t = (function (e, t) {
            let {
              mirror: n = new Y(),
              blockClass: r = "rr-block",
              blockSelector: o = null,
              maskTextClass: i = "rr-mask",
              maskTextSelector: s = null,
              inlineStylesheet: a = !0,
              inlineImages: l = !1,
              recordCanvas: u = !1,
              maskAllInputs: c = !1,
              maskTextFn: d,
              maskInputFn: h,
              slimDOM: f = !1,
              dataURLOptions: p,
              preserveWhiteSpace: g,
              onSerialize: v,
              onIframeLoad: m,
              iframeLoadTimeout: y,
              onStylesheetLoad: b,
              stylesheetLoadTimeout: S,
              keepIframeSrcFn: w = () => !1,
            } = t || {};
            return ep(e, {
              doc: e,
              mirror: n,
              blockClass: r,
              blockSelector: o,
              maskTextClass: i,
              maskTextSelector: s,
              skipChild: !1,
              inlineStylesheet: a,
              maskInputOptions:
                !0 === c
                  ? {
                      color: !0,
                      date: !0,
                      "datetime-local": !0,
                      email: !0,
                      month: !0,
                      number: !0,
                      range: !0,
                      search: !0,
                      tel: !0,
                      text: !0,
                      time: !0,
                      url: !0,
                      week: !0,
                      textarea: !0,
                      select: !0,
                      password: !0,
                    }
                  : !1 === c
                    ? { password: !0 }
                    : c,
              maskTextFn: d,
              maskInputFn: h,
              slimDOMOptions:
                !0 === f || "all" === f
                  ? {
                      script: !0,
                      comment: !0,
                      headFavicon: !0,
                      headWhitespace: !0,
                      headMetaDescKeywords: "all" === f,
                      headMetaSocial: !0,
                      headMetaRobots: !0,
                      headMetaHttpEquiv: !0,
                      headMetaAuthorship: !0,
                      headMetaVerification: !0,
                    }
                  : !1 === f
                    ? {}
                    : f,
              dataURLOptions: p,
              inlineImages: l,
              recordCanvas: u,
              preserveWhiteSpace: g,
              onSerialize: v,
              onIframeLoad: m,
              iframeLoadTimeout: y,
              onStylesheetLoad: b,
              stylesheetLoadTimeout: S,
              keepIframeSrcFn: w,
              newlyAddedElement: !1,
            });
          })(document, {
            mirror: tC,
            blockClass: u,
            blockSelector: c,
            maskTextClass: f,
            maskTextSelector: p,
            inlineStylesheet: g,
            maskAllInputs: F,
            maskTextFn: S,
            maskInputFn: b,
            slimDOM: q,
            dataURLOptions: C,
            recordCanvas: k,
            inlineImages: L,
            onSerialize: (e) => {
              eW(e, tC) && $.addIframe(e),
                eB(e, tC) && V.trackLinkElement(e),
                eG(e) && J.addShadowRoot(e.shadowRoot, document);
            },
            onIframeLoad: (e, t) => {
              $.attachIframe(e, t), J.observeAttachShadow(e);
            },
            onStylesheetLoad: (e, t) => {
              V.attachLinkElement(e, t);
            },
            keepIframeSrcFn: N,
          });
          if (!t) return console.warn("Failed to snapshot the document");
          s(
            tI({
              type: eI.FullSnapshot,
              data: { node: t, initialOffset: eP(window) },
            }),
            e,
          ),
            e4.forEach((e) => e.unlock()),
            document.adoptedStyleSheets &&
              document.adoptedStyleSheets.length > 0 &&
              V.adoptStyleSheets(
                document.adoptedStyleSheets,
                tC.getId(document),
              );
        };
        try {
          let e = [],
            t = (e) => {
              var t;
              return e$(to)(
                {
                  mutationCb: B,
                  mousemoveCb: (e, t) =>
                    s(
                      tI({
                        type: eI.IncrementalSnapshot,
                        data: { source: t, positions: e },
                      }),
                    ),
                  mouseInteractionCb: (e) =>
                    s(
                      tI({
                        type: eI.IncrementalSnapshot,
                        data: Object.assign({ source: eM.MouseInteraction }, e),
                      }),
                    ),
                  scrollCb: G,
                  viewportResizeCb: (e) =>
                    s(
                      tI({
                        type: eI.IncrementalSnapshot,
                        data: Object.assign({ source: eM.ViewportResize }, e),
                      }),
                    ),
                  inputCb: (e) =>
                    s(
                      tI({
                        type: eI.IncrementalSnapshot,
                        data: Object.assign({ source: eM.Input }, e),
                      }),
                    ),
                  mediaInteractionCb: (e) =>
                    s(
                      tI({
                        type: eI.IncrementalSnapshot,
                        data: Object.assign({ source: eM.MediaInteraction }, e),
                      }),
                    ),
                  styleSheetRuleCb: (e) =>
                    s(
                      tI({
                        type: eI.IncrementalSnapshot,
                        data: Object.assign({ source: eM.StyleSheetRule }, e),
                      }),
                    ),
                  styleDeclarationCb: (e) =>
                    s(
                      tI({
                        type: eI.IncrementalSnapshot,
                        data: Object.assign({ source: eM.StyleDeclaration }, e),
                      }),
                    ),
                  canvasMutationCb: z,
                  fontCb: (e) =>
                    s(
                      tI({
                        type: eI.IncrementalSnapshot,
                        data: Object.assign({ source: eM.Font }, e),
                      }),
                    ),
                  selectionCb: (e) => {
                    s(
                      tI({
                        type: eI.IncrementalSnapshot,
                        data: Object.assign({ source: eM.Selection }, e),
                      }),
                    );
                  },
                  blockClass: u,
                  ignoreClass: d,
                  ignoreSelector: h,
                  maskTextClass: f,
                  maskTextSelector: p,
                  maskInputOptions: F,
                  inlineStylesheet: g,
                  sampling: M,
                  recordDOM: O,
                  recordCanvas: k,
                  inlineImages: L,
                  userTriggeredOnInput: _,
                  collectFonts: R,
                  doc: e,
                  maskInputFn: b,
                  maskTextFn: S,
                  keepIframeSrcFn: N,
                  blockSelector: c,
                  slimDOMOptions: q,
                  dataURLOptions: C,
                  mirror: tC,
                  iframeManager: $,
                  stylesheetManager: V,
                  shadowDomManager: J,
                  processedNodeManager: K,
                  canvasManager: l,
                  ignoreCSSAttributes: P,
                  plugins:
                    (null ===
                      (t = null == D ? void 0 : D.filter((e) => e.observer)) ||
                    void 0 === t
                      ? void 0
                      : t.map((e) => ({
                          observer: e.observer,
                          options: e.options,
                          callback: (t) =>
                            s(
                              tI({
                                type: eI.Plugin,
                                data: { plugin: e.name, payload: t },
                              }),
                            ),
                        }))) || [],
                },
                w,
              );
            };
          $.addLoadListener((n) => {
            try {
              e.push(t(n.contentDocument));
            } catch (e) {
              console.warn(e);
            }
          });
          let n = () => {
            a(), e.push(t(document)), (tM = !0);
          };
          return (
            "interactive" === document.readyState ||
            "complete" === document.readyState
              ? n()
              : (e.push(
                  ex("DOMContentLoaded", () => {
                    s(tI({ type: eI.DomContentLoaded, data: {} })),
                      "DOMContentLoaded" === T && n();
                  }),
                ),
                e.push(
                  ex(
                    "load",
                    () => {
                      s(tI({ type: eI.Load, data: {} })), "load" === T && n();
                    },
                    window,
                  ),
                )),
            () => {
              e.forEach((e) => e()), K.destroy(), (tM = !1), (i = void 0);
            }
          );
        } catch (e) {
          console.warn(e);
        }
      }
      (tE.addCustomEvent = (e, t) => {
        if (!tM) throw Error("please add custom event after start recording");
        s(tI({ type: eI.Custom, data: { tag: e, payload: t } }));
      }),
        (tE.freezePage = () => {
          e4.forEach((e) => e.freeze());
        }),
        (tE.takeFullSnapshot = (e) => {
          if (!tM)
            throw Error("please take full snapshot after start recording");
          a(e);
        }),
        (tE.mirror = tC);
      var tO = Uint8Array,
        tk = Uint16Array,
        tx = Uint32Array,
        tT = new tO([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0, 0, 0, 0,
        ]),
        t_ = new tO([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13, 0, 0,
        ]),
        tR = new tO([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]),
        tL = function (e, t) {
          for (var n = new tk(31), r = 0; r < 31; ++r)
            n[r] = t += 1 << e[r - 1];
          for (var o = new tx(n[30]), r = 1; r < 30; ++r)
            for (var i = n[r]; i < n[r + 1]; ++i) o[i] = ((i - n[r]) << 5) | r;
          return [n, o];
        },
        tD = tL(tT, 2),
        tN = tD[0],
        tP = tD[1];
      (tN[28] = 258), (tP[258] = 28);
      for (
        var tA = tL(t_, 0), tj = tA[0], tH = tA[1], tF = new tk(32768), tq = 0;
        tq < 32768;
        ++tq
      ) {
        var tU = ((43690 & tq) >>> 1) | ((21845 & tq) << 1);
        (tU =
          ((61680 & (tU = ((52428 & tU) >>> 2) | ((13107 & tU) << 2))) >>> 4) |
          ((3855 & tU) << 4)),
          (tF[tq] = (((65280 & tU) >>> 8) | ((255 & tU) << 8)) >>> 1);
      }
      for (
        var tW = function (e, t, n) {
            for (var r, o = e.length, i = 0, s = new tk(t); i < o; ++i)
              ++s[e[i] - 1];
            var a = new tk(t);
            for (i = 0; i < t; ++i) a[i] = (a[i - 1] + s[i - 1]) << 1;
            if (n) {
              r = new tk(1 << t);
              var l = 15 - t;
              for (i = 0; i < o; ++i)
                if (e[i])
                  for (
                    var u = (i << 4) | e[i],
                      c = t - e[i],
                      d = a[e[i] - 1]++ << c,
                      h = d | ((1 << c) - 1);
                    d <= h;
                    ++d
                  )
                    r[tF[d] >>> l] = u;
            } else
              for (i = 0, r = new tk(o); i < o; ++i)
                r[i] = tF[a[e[i] - 1]++] >>> (15 - e[i]);
            return r;
          },
          tB = new tO(288),
          tq = 0;
        tq < 144;
        ++tq
      )
        tB[tq] = 8;
      for (var tq = 144; tq < 256; ++tq) tB[tq] = 9;
      for (var tq = 256; tq < 280; ++tq) tB[tq] = 7;
      for (var tq = 280; tq < 288; ++tq) tB[tq] = 8;
      for (var tG = new tO(32), tq = 0; tq < 32; ++tq) tG[tq] = 5;
      var tz = tW(tB, 9, 0),
        tY = tW(tG, 5, 0),
        tV = function (e) {
          for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
          return t;
        },
        t$ = function (e, t, n) {
          var r = (t / 8) >> 0;
          return ((e[r] | (e[r + 1] << 8)) >>> (7 & t)) & n;
        },
        tK = function (e, t) {
          var n = (t / 8) >> 0;
          return (e[n] | (e[n + 1] << 8) | (e[n + 2] << 16)) >>> (7 & t);
        },
        tJ = function (e) {
          return ((e / 8) >> 0) + (7 & e && 1);
        },
        tX = function (e, t, n) {
          (null == t || t < 0) && (t = 0),
            (null == n || n > e.length) && (n = e.length);
          var r = new (e instanceof tk ? tk : e instanceof tx ? tx : tO)(n - t);
          return r.set(e.subarray(t, n)), r;
        },
        tZ = function (e, t, n) {
          n <<= 7 & t;
          var r = (t / 8) >> 0;
          (e[r] |= n), (e[r + 1] |= n >>> 8);
        },
        tQ = function (e, t, n) {
          n <<= 7 & t;
          var r = (t / 8) >> 0;
          (e[r] |= n), (e[r + 1] |= n >>> 8), (e[r + 2] |= n >>> 16);
        },
        t0 = function (e, t) {
          for (var n = [], r = 0; r < e.length; ++r)
            e[r] && n.push({ s: r, f: e[r] });
          var o = n.length,
            i = n.slice();
          if (!o) return [new tO(0), 0];
          if (1 == o) {
            var s = new tO(n[0].s + 1);
            return (s[n[0].s] = 1), [s, 1];
          }
          n.sort(function (e, t) {
            return e.f - t.f;
          }),
            n.push({ s: -1, f: 25001 });
          var a = n[0],
            l = n[1],
            u = 0,
            c = 1,
            d = 2;
          for (n[0] = { s: -1, f: a.f + l.f, l: a, r: l }; c != o - 1; )
            (a = n[n[u].f < n[d].f ? u++ : d++]),
              (l = n[u != c && n[u].f < n[d].f ? u++ : d++]),
              (n[c++] = { s: -1, f: a.f + l.f, l: a, r: l });
          for (var h = i[0].s, r = 1; r < o; ++r) i[r].s > h && (h = i[r].s);
          var f = new tk(h + 1),
            p = t1(n[c - 1], f, 0);
          if (p > t) {
            var r = 0,
              g = 0,
              v = p - t,
              m = 1 << v;
            for (
              i.sort(function (e, t) {
                return f[t.s] - f[e.s] || e.f - t.f;
              });
              r < o;
              ++r
            ) {
              var y = i[r].s;
              if (f[y] > t) (g += m - (1 << (p - f[y]))), (f[y] = t);
              else break;
            }
            for (g >>>= v; g > 0; ) {
              var b = i[r].s;
              f[b] < t ? (g -= 1 << (t - f[b]++ - 1)) : ++r;
            }
            for (; r >= 0 && g; --r) {
              var S = i[r].s;
              f[S] == t && (--f[S], ++g);
            }
            p = t;
          }
          return [new tO(f), p];
        },
        t1 = function (e, t, n) {
          return -1 == e.s
            ? Math.max(t1(e.l, t, n + 1), t1(e.r, t, n + 1))
            : (t[e.s] = n);
        },
        t2 = function (e) {
          for (var t = e.length; t && !e[--t]; );
          for (
            var n = new tk(++t),
              r = 0,
              o = e[0],
              i = 1,
              s = function (e) {
                n[r++] = e;
              },
              a = 1;
            a <= t;
            ++a
          )
            if (e[a] == o && a != t) ++i;
            else {
              if (!o && i > 2) {
                for (; i > 138; i -= 138) s(32754);
                i > 2 &&
                  (s(i > 10 ? ((i - 11) << 5) | 28690 : ((i - 3) << 5) | 12305),
                  (i = 0));
              } else if (i > 3) {
                for (s(o), --i; i > 6; i -= 6) s(8304);
                i > 2 && (s(((i - 3) << 5) | 8208), (i = 0));
              }
              for (; i--; ) s(o);
              (i = 1), (o = e[a]);
            }
          return [n.subarray(0, r), t];
        },
        t3 = function (e, t) {
          for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
          return n;
        },
        t4 = function (e, t, n) {
          var r = n.length,
            o = tJ(t + 2);
          (e[o] = 255 & r),
            (e[o + 1] = r >>> 8),
            (e[o + 2] = 255 ^ e[o]),
            (e[o + 3] = 255 ^ e[o + 1]);
          for (var i = 0; i < r; ++i) e[o + i + 4] = n[i];
          return (o + 4 + r) * 8;
        },
        t5 = function (e, t, n, r, o, i, s, a, l, u, c) {
          tZ(t, c++, n), ++o[256];
          for (
            var d,
              h,
              f,
              p,
              g = t0(o, 15),
              v = g[0],
              m = g[1],
              y = t0(i, 15),
              b = y[0],
              S = y[1],
              w = t2(v),
              I = w[0],
              M = w[1],
              C = t2(b),
              E = C[0],
              O = C[1],
              k = new tk(19),
              x = 0;
            x < I.length;
            ++x
          )
            k[31 & I[x]]++;
          for (var x = 0; x < E.length; ++x) k[31 & E[x]]++;
          for (
            var T = t0(k, 7), _ = T[0], R = T[1], L = 19;
            L > 4 && !_[tR[L - 1]];
            --L
          );
          var D = (u + 5) << 3,
            N = t3(o, tB) + t3(i, tG) + s,
            P =
              t3(o, v) +
              t3(i, b) +
              s +
              14 +
              3 * L +
              t3(k, _) +
              (2 * k[16] + 3 * k[17] + 7 * k[18]);
          if (D <= N && D <= P) return t4(t, c, e.subarray(l, l + u));
          if ((tZ(t, c, 1 + (P < N)), (c += 2), P < N)) {
            (d = tW(v, m, 0)), (h = v), (f = tW(b, S, 0)), (p = b);
            var A = tW(_, R, 0);
            tZ(t, c, M - 257),
              tZ(t, c + 5, O - 1),
              tZ(t, c + 10, L - 4),
              (c += 14);
            for (var x = 0; x < L; ++x) tZ(t, c + 3 * x, _[tR[x]]);
            c += 3 * L;
            for (var j = [I, E], H = 0; H < 2; ++H)
              for (var F = j[H], x = 0; x < F.length; ++x) {
                var q = 31 & F[x];
                tZ(t, c, A[q]),
                  (c += _[q]),
                  q > 15 && (tZ(t, c, (F[x] >>> 5) & 127), (c += F[x] >>> 12));
              }
          } else (d = tz), (h = tB), (f = tY), (p = tG);
          for (var x = 0; x < a; ++x)
            if (r[x] > 255) {
              var q = (r[x] >>> 18) & 31;
              tQ(t, c, d[q + 257]),
                (c += h[q + 257]),
                q > 7 && (tZ(t, c, (r[x] >>> 23) & 31), (c += tT[q]));
              var U = 31 & r[x];
              tQ(t, c, f[U]),
                (c += p[U]),
                U > 3 && (tQ(t, c, (r[x] >>> 5) & 8191), (c += t_[U]));
            } else tQ(t, c, d[r[x]]), (c += h[r[x]]);
          return tQ(t, c, d[256]), c + h[256];
        },
        t8 = new tx([
          65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560,
          2117632,
        ]),
        t6 = new tO(0),
        t7 = function (e, t, n, r, o, i) {
          var s = e.length,
            a = new tO(r + s + 5 * (1 + Math.floor(s / 7e3)) + o),
            l = a.subarray(r, a.length - o),
            u = 0;
          if (!t || s < 8)
            for (var c = 0; c <= s; c += 65535) {
              var d = c + 65535;
              d < s
                ? (u = t4(l, u, e.subarray(c, d)))
                : ((l[c] = i), (u = t4(l, u, e.subarray(c, s))));
            }
          else {
            for (
              var h = t8[t - 1],
                f = h >>> 13,
                p = 8191 & h,
                g = (1 << n) - 1,
                v = new tk(32768),
                m = new tk(g + 1),
                y = Math.ceil(n / 3),
                b = 2 * y,
                S = function (t) {
                  return (e[t] ^ (e[t + 1] << y) ^ (e[t + 2] << b)) & g;
                },
                w = new tx(25e3),
                I = new tk(288),
                M = new tk(32),
                C = 0,
                E = 0,
                c = 0,
                O = 0,
                k = 0,
                x = 0;
              c < s;
              ++c
            ) {
              var T = S(c),
                _ = 32767 & c,
                R = m[T];
              if (((v[_] = R), (m[T] = _), k <= c)) {
                var L = s - c;
                if ((C > 7e3 || O > 24576) && L > 423) {
                  (u = t5(e, l, 0, w, I, M, E, O, x, c - x, u)),
                    (O = C = E = 0),
                    (x = c);
                  for (var D = 0; D < 286; ++D) I[D] = 0;
                  for (var D = 0; D < 30; ++D) M[D] = 0;
                }
                var N = 2,
                  P = 0,
                  A = p,
                  j = (_ - R) & 32767;
                if (L > 2 && T == S(c - j))
                  for (
                    var H = Math.min(f, L) - 1,
                      F = Math.min(32767, c),
                      q = Math.min(258, L);
                    j <= F && --A && _ != R;

                  ) {
                    if (e[c + N] == e[c + N - j]) {
                      for (var U = 0; U < q && e[c + U] == e[c + U - j]; ++U);
                      if (U > N) {
                        if (((N = U), (P = j), U > H)) break;
                        for (
                          var W = Math.min(j, U - 2), B = 0, D = 0;
                          D < W;
                          ++D
                        ) {
                          var G = (c - j + D + 32768) & 32767,
                            z = v[G],
                            Y = (G - z + 32768) & 32767;
                          Y > B && ((B = Y), (R = G));
                        }
                      }
                    }
                    (R = v[(_ = R)]), (j += (_ - R + 32768) & 32767);
                  }
                if (P) {
                  w[O++] = 0x10000000 | (tP[N] << 18) | tH[P];
                  var V = 31 & tP[N],
                    $ = 31 & tH[P];
                  (E += tT[V] + t_[$]), ++I[257 + V], ++M[$], (k = c + N), ++C;
                } else (w[O++] = e[c]), ++I[e[c]];
              }
            }
            (u = t5(e, l, i, w, I, M, E, O, x, c - x, u)),
              i || (u = t4(l, u, t6));
          }
          return tX(a, 0, r + tJ(u) + o);
        },
        t9 = function () {
          var e = 1,
            t = 0;
          return {
            p: function (n) {
              for (var r = e, o = t, i = n.length, s = 0; s != i; ) {
                for (var a = Math.min(s + 5552, i); s < a; ++s)
                  (r += n[s]), (o += r);
                (r %= 65521), (o %= 65521);
              }
              (e = r), (t = o);
            },
            d: function () {
              return (
                (((e >>> 8) << 16) | ((255 & t) << 8) | (t >>> 8)) +
                ((255 & e) << 23) * 2
              );
            },
          };
        },
        ne = function (e, t, n) {
          for (; n; ++t) (e[t] = n), (n >>>= 8);
        },
        nt = function (e, t) {
          var n = t.level,
            r = 0 == n ? 0 : n < 6 ? 1 : 9 == n ? 3 : 2;
          (e[0] = 120), (e[1] = (r << 6) | (r ? 32 - 2 * r : 1));
        };
      let nn = (e) =>
        (function (e, t) {
          var n = "";
          if (!t && "undefined" != typeof TextDecoder)
            return new TextDecoder().decode(e);
          for (var r = 0; r < e.length; ) {
            var o = e[r++];
            o < 128 || t
              ? (n += String.fromCharCode(o))
              : o < 224
                ? (n += String.fromCharCode(((31 & o) << 6) | (63 & e[r++])))
                : o < 240
                  ? (n += String.fromCharCode(
                      ((15 & o) << 12) | ((63 & e[r++]) << 6) | (63 & e[r++]),
                    ))
                  : (n += String.fromCharCode(
                      55296 |
                        ((o =
                          (((15 & o) << 18) |
                            ((63 & e[r++]) << 12) |
                            ((63 & e[r++]) << 6) |
                            (63 & e[r++])) -
                          65536) >>
                          10),
                      56320 | (1023 & o),
                    ));
          }
          return n;
        })(
          (function (e, t) {
            void 0 === t && (t = {});
            var n,
              r = t9();
            r.p(e);
            var o = t7(
              e,
              null == (n = t).level ? 6 : n.level,
              null == n.mem
                ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length))))
                : 12 + n.mem,
              2,
              4,
              !0,
            );
            return nt(o, t), ne(o, o.length - 4, r.d()), o;
          })(
            (function (e, t) {
              var n = e.length;
              if ("undefined" != typeof TextEncoder)
                return new TextEncoder().encode(e);
              for (
                var r = new tO(e.length + (e.length >>> 1)),
                  o = 0,
                  i = function (e) {
                    r[o++] = e;
                  },
                  s = 0;
                s < n;
                ++s
              ) {
                if (o + 5 > r.length) {
                  var a = new tO(o + 8 + ((n - s) << 1));
                  a.set(r), (r = a);
                }
                var l = e.charCodeAt(s);
                l < 128
                  ? i(l)
                  : (l < 2048
                      ? i(192 | (l >>> 6))
                      : (l > 55295 && l < 57344
                          ? (i(
                              240 |
                                ((l =
                                  (65536 + (1047552 & l)) |
                                  (1023 & e.charCodeAt(++s))) >>>
                                  18),
                            ),
                            i(128 | ((l >>> 12) & 63)))
                          : i(224 | (l >>> 12)),
                        i(128 | ((l >>> 6) & 63))),
                    i(128 | (63 & l)));
              }
              return tX(r, 0, o);
            })(
              JSON.stringify(Object.assign(Object.assign({}, e), { v: "v1" })),
            ),
          ),
          !0,
        );
      var nr = n(27486);
      let no = (e, t) => t.some((t) => e instanceof t),
        ni = new WeakMap(),
        ns = new WeakMap(),
        na = new WeakMap(),
        nl = {
          get(e, t, n) {
            if (e instanceof IDBTransaction) {
              if ("done" === t) return ni.get(e);
              if ("store" === t)
                return n.objectStoreNames[1]
                  ? void 0
                  : n.objectStore(n.objectStoreNames[0]);
            }
            return nu(e[t]);
          },
          set: (e, t, n) => ((e[t] = n), !0),
          has: (e, t) =>
            (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
            t in e,
        };
      function nu(e) {
        if (e instanceof IDBRequest)
          return (function (e) {
            let t = new Promise((t, n) => {
              let r = () => {
                  e.removeEventListener("success", o),
                    e.removeEventListener("error", i);
                },
                o = () => {
                  t(nu(e.result)), r();
                },
                i = () => {
                  n(e.error), r();
                };
              e.addEventListener("success", o), e.addEventListener("error", i);
            });
            return na.set(t, e), t;
          })(e);
        if (ns.has(e)) return ns.get(e);
        let t = (function (e) {
          if ("function" == typeof e)
            return (
              c ||
              (c = [
                IDBCursor.prototype.advance,
                IDBCursor.prototype.continue,
                IDBCursor.prototype.continuePrimaryKey,
              ])
            ).includes(e)
              ? function (...t) {
                  return e.apply(nc(this), t), nu(this.request);
                }
              : function (...t) {
                  return nu(e.apply(nc(this), t));
                };
          return (e instanceof IDBTransaction &&
            (function (e) {
              if (ni.has(e)) return;
              let t = new Promise((t, n) => {
                let r = () => {
                    e.removeEventListener("complete", o),
                      e.removeEventListener("error", i),
                      e.removeEventListener("abort", i);
                  },
                  o = () => {
                    t(), r();
                  },
                  i = () => {
                    n(e.error || new DOMException("AbortError", "AbortError")),
                      r();
                  };
                e.addEventListener("complete", o),
                  e.addEventListener("error", i),
                  e.addEventListener("abort", i);
              });
              ni.set(e, t);
            })(e),
          no(
            e,
            u ||
              (u = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction,
              ]),
          ))
            ? new Proxy(e, nl)
            : e;
        })(e);
        return t !== e && (ns.set(e, t), na.set(t, e)), t;
      }
      let nc = (e) => na.get(e);
      function nd(
        e,
        t,
        { blocked: n, upgrade: r, blocking: o, terminated: i } = {},
      ) {
        let s = indexedDB.open(e, t),
          a = nu(s);
        return (
          r &&
            s.addEventListener("upgradeneeded", (e) => {
              r(nu(s.result), e.oldVersion, e.newVersion, nu(s.transaction), e);
            }),
          n &&
            s.addEventListener("blocked", (e) =>
              n(e.oldVersion, e.newVersion, e),
            ),
          a
            .then((e) => {
              i && e.addEventListener("close", () => i()),
                o &&
                  e.addEventListener("versionchange", (e) =>
                    o(e.oldVersion, e.newVersion, e),
                  );
            })
            .catch(() => {}),
          a
        );
      }
      let nh = ["get", "getKey", "getAll", "getAllKeys", "count"],
        nf = ["put", "add", "delete", "clear"],
        np = new Map();
      function ng(e, t) {
        if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t))
          return;
        if (np.get(t)) return np.get(t);
        let n = t.replace(/FromIndex$/, ""),
          r = t !== n,
          o = nf.includes(n);
        if (
          !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
          !(o || nh.includes(n))
        )
          return;
        let i = async function (e, ...t) {
          let i = this.transaction(e, o ? "readwrite" : "readonly"),
            s = i.store;
          return (
            r && (s = s.index(t.shift())),
            (await Promise.all([s[n](...t), o && i.done]))[0]
          );
        };
        return np.set(t, i), i;
      }
      nl = ((e) => ({
        ...e,
        get: (t, n, r) => ng(t, n) || e.get(t, n, r),
        has: (t, n) => !!ng(t, n) || e.has(t, n),
      }))(nl);
      let nv = ["continue", "continuePrimaryKey", "advance"],
        nm = {},
        ny = new WeakMap(),
        nb = new WeakMap(),
        nS = {
          get(e, t) {
            if (!nv.includes(t)) return e[t];
            let n = nm[t];
            return (
              n ||
                (n = nm[t] =
                  function (...e) {
                    ny.set(this, nb.get(this)[t](...e));
                  }),
              n
            );
          },
        };
      async function* nw(...e) {
        let t = this;
        if ((t instanceof IDBCursor || (t = await t.openCursor(...e)), !t))
          return;
        let n = new Proxy(t, nS);
        for (nb.set(n, t), na.set(n, nc(t)); t; )
          yield n, (t = await (ny.get(n) || t.continue())), ny.delete(n);
      }
      function nI(e, t) {
        return (
          (t === Symbol.asyncIterator &&
            no(e, [IDBIndex, IDBObjectStore, IDBCursor])) ||
          ("iterate" === t && no(e, [IDBIndex, IDBObjectStore]))
        );
      }
      nl = ((e) => ({
        ...e,
        get: (t, n, r) => (nI(t, n) ? nw : e.get(t, n, r)),
        has: (t, n) => nI(t, n) || e.has(t, n),
      }))(nl);
      var nM = function (e, t) {
          return (0, b.sH)(void 0, void 0, void 0, function () {
            return (0, b.YH)(this, function (n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    nd(e, 1, {
                      upgrade: function (e) {
                        t.forEach(function (t) {
                          e.objectStoreNames.contains(t) ||
                            e.createObjectStore(t);
                        });
                      },
                    }),
                  ];
                case 1:
                  return [2, n.sent()];
              }
            });
          });
        },
        nC = function (e) {
          var t = e.loggerProvider,
            n = e.apiKey,
            r = e.configKeys;
          return (0, b.sH)(void 0, void 0, void 0, function () {
            var e, o, i, s, a;
            return (0, b.YH)(this, function (l) {
              switch (l.label) {
                case 0:
                  return [
                    4,
                    nM((e = "".concat(n.substring(0, 10), "_amp_config")), r),
                  ];
                case 1:
                  var u;
                  return (
                    (o = l.sent()),
                    [
                      4,
                      ((u = "".concat(n.substring(0, 10), "_amp_config_meta")),
                      (0, b.sH)(void 0, void 0, void 0, function () {
                        return (0, b.YH)(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return [
                                4,
                                nd(u, 1, {
                                  upgrade: function (e) {
                                    e.objectStoreNames.contains(
                                      "lastFetchedSessionId",
                                    ) ||
                                      e.createObjectStore(
                                        "lastFetchedSessionId",
                                      );
                                  },
                                }),
                              ];
                            case 1:
                              return [2, e.sent()];
                          }
                        });
                      })),
                    ]
                  );
                case 2:
                  (i = l.sent()), (l.label = 3);
                case 3:
                  return (
                    l.trys.push([3, 8, , 9]),
                    [4, i.get("lastFetchedSessionId", "sessionId")]
                  );
                case 4:
                  if (!((s = l.sent()) && Date.now() - s >= 2592e5))
                    return [3, 7];
                  return (
                    o.close(),
                    [
                      4,
                      (function (e, { blocked: t } = {}) {
                        let n = indexedDB.deleteDatabase(e);
                        return (
                          t &&
                            n.addEventListener("blocked", (e) =>
                              t(e.oldVersion, e),
                            ),
                          nu(n).then(() => void 0)
                        );
                      })(e),
                    ]
                  );
                case 5:
                  return l.sent(), [4, nM(e, r)];
                case 6:
                  (o = l.sent()), (l.label = 7);
                case 7:
                  return [3, 9];
                case 8:
                  return (
                    (a = l.sent()),
                    t.warn("Failed to reset store: ".concat(a)),
                    [3, 9]
                  );
                case 9:
                  return [
                    2,
                    {
                      storeRemoteConfig: function (e, n) {
                        return (0, b.sH)(void 0, void 0, void 0, function () {
                          var r, s, a, l, u, c;
                          return (0, b.YH)(this, function (d) {
                            switch (d.label) {
                              case 0:
                                if ((d.trys.push([0, 7, , 8]), !n))
                                  return [3, 2];
                                return [
                                  4,
                                  i.put("lastFetchedSessionId", n, "sessionId"),
                                ];
                              case 1:
                                d.sent(), (d.label = 2);
                              case 2:
                                for (l in ((r = function (t) {
                                  var n, r;
                                  return (0, b.YH)(this, function (i) {
                                    switch (i.label) {
                                      case 0:
                                        return (
                                          (n = e.configs[t]),
                                          (r = o.transaction(t, "readwrite")),
                                          [
                                            4,
                                            Promise.all(
                                              (0, b.fX)(
                                                (0, b.fX)(
                                                  [],
                                                  (0, b.zs)(
                                                    Object.keys(n).map(
                                                      function (e) {
                                                        return r.store.put(
                                                          (0, b.Cl)({}, n[e]),
                                                          e,
                                                        );
                                                      },
                                                    ),
                                                  ),
                                                  !1,
                                                ),
                                                [r.done],
                                                !1,
                                              ),
                                            ),
                                          ]
                                        );
                                      case 1:
                                        return i.sent(), [2];
                                    }
                                  });
                                }),
                                (s = e.configs),
                                (a = []),
                                s))
                                  a.push(l);
                                (u = 0), (d.label = 3);
                              case 3:
                                if (!(u < a.length)) return [3, 6];
                                if (!((l = a[u]) in s)) return [3, 5];
                                return [5, r(l)];
                              case 4:
                                d.sent(), (d.label = 5);
                              case 5:
                                return u++, [3, 3];
                              case 6:
                                return [3, 8];
                              case 7:
                                return (
                                  (c = d.sent()),
                                  t.warn(
                                    "Failed to store remote config: ".concat(c),
                                  ),
                                  [3, 8]
                                );
                              case 8:
                                return [2];
                            }
                          });
                        });
                      },
                      getRemoteConfig: function (e, n) {
                        return (0, b.sH)(void 0, void 0, void 0, function () {
                          var r;
                          return (0, b.YH)(this, function (i) {
                            switch (i.label) {
                              case 0:
                                return (
                                  i.trys.push([0, 2, , 3]), [4, o.get(e, n)]
                                );
                              case 1:
                                return [2, i.sent()];
                              case 2:
                                return (
                                  (r = i.sent()),
                                  t.warn(
                                    "Failed to fetch remote config: ".concat(r),
                                  ),
                                  [3, 3]
                                );
                              case 3:
                                return [2, void 0];
                            }
                          });
                        });
                      },
                      getLastFetchedSessionId: function () {
                        return (0, b.sH)(void 0, void 0, void 0, function () {
                          var e;
                          return (0, b.YH)(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return (
                                  n.trys.push([0, 2, , 3]),
                                  [
                                    4,
                                    i.get("lastFetchedSessionId", "sessionId"),
                                  ]
                                );
                              case 1:
                                return [2, n.sent()];
                              case 2:
                                return (
                                  (e = n.sent()),
                                  t.warn(
                                    "Failed to fetch lastFetchedSessionId: ".concat(
                                      e,
                                    ),
                                  ),
                                  [3, 3]
                                );
                              case 3:
                                return [2, void 0];
                            }
                          });
                        });
                      },
                      remoteConfigHasValues: function (e) {
                        return (0, b.sH)(void 0, void 0, void 0, function () {
                          var n;
                          return (0, b.YH)(this, function (r) {
                            switch (r.label) {
                              case 0:
                                return (
                                  r.trys.push([0, 2, , 3]), [4, o.getAll(e)]
                                );
                              case 1:
                                return [2, !!r.sent().length];
                              case 2:
                                return (
                                  (n = r.sent()),
                                  t.warn(
                                    "Failed to fetch remote config: ".concat(n),
                                  ),
                                  [3, 3]
                                );
                              case 3:
                                return [2, !1];
                            }
                          });
                        });
                      },
                    },
                  ];
              }
            });
          });
        },
        nE = "Remote config fetch rejected due to timeout after 5 seconds",
        nO = (function () {
          function e(e) {
            var t = e.localConfig,
              n = e.configKeys,
              r = this;
            (this.retryTimeout = 1e3),
              (this.attempts = 0),
              (this.sessionTargetingMatch = !1),
              (this.metrics = {}),
              (this.getRemoteConfig = function (e, t, n) {
                return (0, b.sH)(r, void 0, void 0, function () {
                  var r, o, i, s, a;
                  return (0, b.YH)(this, function (l) {
                    switch (l.label) {
                      case 0:
                        if (((r = Date.now()), !this.remoteConfigIDBStore))
                          return [3, 3];
                        return [
                          4,
                          this.remoteConfigIDBStore.getLastFetchedSessionId(),
                        ];
                      case 1:
                        if (!((o = l.sent()) && n && o === n)) return [3, 3];
                        return [
                          4,
                          this.remoteConfigIDBStore.getRemoteConfig(e, t),
                        ];
                      case 2:
                        return (
                          (i = l.sent()),
                          (this.metrics.fetchTimeIDB = Date.now() - r),
                          [2, i]
                        );
                      case 3:
                        return [4, this.fetchWithTimeout(n)];
                      case 4:
                        if ((s = l.sent()) && (a = s.configs && s.configs[e]))
                          return (
                            (this.metrics.fetchTimeAPISuccess = Date.now() - r),
                            [2, a[t]]
                          );
                        return (
                          (this.metrics.fetchTimeAPIFail = Date.now() - r),
                          [2, void 0]
                        );
                    }
                  });
                });
              }),
              (this.fetchWithTimeout = function (e) {
                return (0, b.sH)(r, void 0, void 0, function () {
                  var t, n, r;
                  return (0, b.YH)(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          (t = new AbortController()),
                          (n = setTimeout(function () {
                            return t.abort();
                          }, 5e3)),
                          [4, this.fetchRemoteConfig(t.signal, e)]
                        );
                      case 1:
                        return (r = o.sent()), clearTimeout(n), [2, r];
                    }
                  });
                });
              }),
              (this.fetchRemoteConfig = function (e, t) {
                return (0, b.sH)(r, void 0, void 0, function () {
                  var n, r, o, i, s;
                  return (0, b.YH)(this, function (a) {
                    switch (a.label) {
                      case 0:
                        if (
                          t === this.lastFetchedSessionId &&
                          this.attempts >= this.localConfig.flushMaxRetries
                        )
                          return [
                            2,
                            this.completeRequest({
                              err: "Remote config fetch rejected due to exceeded retry count",
                            }),
                          ];
                        if (e.aborted)
                          return [2, this.completeRequest({ err: nE })];
                        t !== this.lastFetchedSessionId &&
                          ((this.lastFetchedSessionId = t),
                          (this.attempts = 0));
                        a.label = 1;
                      case 1:
                        return (
                          a.trys.push([1, 3, , 4]),
                          (n = new URLSearchParams({
                            api_key: this.localConfig.apiKey,
                            config_keys: this.configKeys.join(","),
                          })),
                          (r = {
                            headers: {
                              "Content-Type": "application/json",
                              Accept: "*/*",
                            },
                            method: "GET",
                          }),
                          (o = ""
                            .concat(this.getServerUrl(), "?")
                            .concat(n.toString())),
                          (this.attempts += 1),
                          [
                            4,
                            fetch(
                              o,
                              (0, b.Cl)((0, b.Cl)({}, r), { signal: e }),
                            ),
                          ]
                        );
                      case 2:
                        if (null === (i = a.sent()))
                          return [
                            2,
                            this.completeRequest({
                              err: "Unexpected error occurred",
                            }),
                          ];
                        switch (new w.j().buildStatus(i.status)) {
                          case nr.n.Success:
                            return (
                              (this.attempts = 0),
                              [2, this.parseAndStoreConfig(i, t)]
                            );
                          case nr.n.Failed:
                            return [2, this.retryFetch(e, t)];
                          default:
                            return [
                              2,
                              this.completeRequest({
                                err: "Network error occurred, remote config fetch failed",
                              }),
                            ];
                        }
                        return [3, 4];
                      case 3:
                        if (((s = a.sent()), e.aborted))
                          return [2, this.completeRequest({ err: nE })];
                        return [2, this.completeRequest({ err: s.message })];
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (this.retryFetch = function (e, t) {
                return (0, b.sH)(r, void 0, void 0, function () {
                  var n = this;
                  return (0, b.YH)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [
                          4,
                          new Promise(function (e) {
                            return setTimeout(e, n.attempts * n.retryTimeout);
                          }),
                        ];
                      case 1:
                        return r.sent(), [2, this.fetchRemoteConfig(e, t)];
                    }
                  });
                });
              }),
              (this.parseAndStoreConfig = function (e, t) {
                return (0, b.sH)(r, void 0, void 0, function () {
                  var n, r;
                  return (0, b.YH)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, e.json()];
                      case 1:
                        if (((n = r.sent()), !this.remoteConfigIDBStore))
                          return [3, 3];
                        return [
                          4,
                          this.remoteConfigIDBStore.storeRemoteConfig(n, t),
                        ];
                      case 2:
                        r.sent(), (r.label = 3);
                      case 3:
                        return (
                          this.completeRequest({
                            success: "Remote config successfully fetched",
                          }),
                          [2, n]
                        );
                    }
                  });
                });
              }),
              (this.localConfig = t),
              (this.configKeys = n);
          }
          return (
            (e.prototype.initialize = function () {
              return (0, b.sH)(this, void 0, void 0, function () {
                var e;
                return (0, b.YH)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = this),
                        [
                          4,
                          nC({
                            apiKey: this.localConfig.apiKey,
                            loggerProvider: this.localConfig.loggerProvider,
                            configKeys: this.configKeys,
                          }),
                        ]
                      );
                    case 1:
                      return (e.remoteConfigIDBStore = t.sent()), [2];
                  }
                });
              });
            }),
            (e.prototype.getServerUrl = function () {
              return this.localConfig.serverZone === _.e.STAGING
                ? "https://sr-client-cfg.stag2.amplitude.com/config"
                : this.localConfig.serverZone === _.e.EU
                  ? "https://sr-client-cfg.eu.amplitude.com/config"
                  : "https://sr-client-cfg.amplitude.com/config";
            }),
            (e.prototype.completeRequest = function (e) {
              var t = e.err,
                n = e.success;
              if (t) throw Error(t);
              n && this.localConfig.loggerProvider.log(n);
            }),
            e
          );
        })(),
        nk = function (e) {
          var t = e.localConfig,
            n = e.configKeys;
          return (0, b.sH)(void 0, void 0, void 0, function () {
            var e;
            return (0, b.YH)(this, function (r) {
              switch (r.label) {
                case 0:
                  return [
                    4,
                    (e = new nO({
                      localConfig: t,
                      configKeys: n,
                    })).initialize(),
                  ];
                case 1:
                  return r.sent(), [2, e];
              }
            });
          });
        },
        nx = "medium";
      !(function (e) {
        (e[(e.Document = 0)] = "Document"),
          (e[(e.DocumentType = 1)] = "DocumentType"),
          (e[(e.Element = 2)] = "Element"),
          (e[(e.Text = 3)] = "Text"),
          (e[(e.CDATA = 4)] = "CDATA"),
          (e[(e.Comment = 5)] = "Comment");
      })(p || (p = {}));
      function nT(e) {
        let t;
        if ("styleSheet" in e)
          try {
            t =
              (function (e) {
                try {
                  var t;
                  let n = e.rules || e.cssRules;
                  return n
                    ? ((t = Array.from(n, nT).join("")).includes(
                        " background-clip: text;",
                      ) &&
                        !t.includes(" -webkit-background-clip: text;") &&
                        (t = t.replace(
                          " background-clip: text;",
                          " -webkit-background-clip: text; background-clip: text;",
                        )),
                      t)
                    : null;
                } catch (e) {
                  return null;
                }
              })(e.styleSheet) ||
              (function (e) {
                let { cssText: t } = e;
                if (t.split('"').length < 3) return t;
                let n = ["@import", `url(${JSON.stringify(e.href)})`];
                return (
                  "" === e.layerName
                    ? n.push("layer")
                    : e.layerName && n.push(`layer(${e.layerName})`),
                  e.supportsText && n.push(`supports(${e.supportsText})`),
                  e.media.length && n.push(e.media.mediaText),
                  n.join(" ") + ";"
                );
              })(e);
          } catch (e) {}
        else {
          if ("selectorText" in e && e.selectorText.includes(":"))
            return e.cssText.replace(
              /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm,
              "$1\\$2",
            );
        }
        return t || e.cssText;
      }
      let n_ = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        nR = /^(?:[a-z+]+:)?\/\//i,
        nL = /^www\..*/i,
        nD = /^(data:)([^,]*),(.*)/i,
        nN = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
      function nP(e) {
        return e ? e.replace(/^\s+|\s+$/g, "") : "";
      }
      function nA(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      let nj = /(max|min)-device-(width|height)/,
        nH = RegExp(nj.source, "g"),
        nF = /([^\\]):hover/,
        nq = RegExp(nF.source, "g");
      var nU = function (e, t, n) {
          switch (t) {
            case "light":
              if ("input" !== e) return !0;
              var r = n
                ? (function (e) {
                    let t = e.type;
                    return e.hasAttribute("data-rr-is-password")
                      ? "password"
                      : t
                        ? t.toLowerCase()
                        : null;
                  })(n)
                : "";
              if (!r) return !1;
              if (
                ["password", "hidden", "email", "tel"].includes(r) ||
                n.autocomplete.startsWith("cc-")
              )
                return !0;
              return !1;
            case "medium":
            case "conservative":
              return !0;
            default:
              return nU(e, nx, n);
          }
        },
        nW = function (e, t, n) {
          var r, o, i;
          if ((void 0 === t && (t = { defaultMaskLevel: nx }), n)) {
            if (
              n.closest("." + P) ||
              (null !== (r = t.maskSelector) && void 0 !== r ? r : []).some(
                function (e) {
                  return n.closest(e);
                },
              )
            )
              return !0;
            if (
              n.closest(".amp-unmask") ||
              (null !== (o = t.unmaskSelector) && void 0 !== o ? o : []).some(
                function (e) {
                  return n.closest(e);
                },
              )
            )
              return !1;
          }
          return nU(
            e,
            null !== (i = t.defaultMaskLevel) && void 0 !== i ? i : nx,
            n,
          );
        },
        nB = function (e, t) {
          return function (n, r) {
            return nW(e, t, r) ? n.replace(/[^\s]/g, "*") : n;
          };
        },
        nG = function (e) {
          var t = 0;
          if (0 === e.length) return t;
          for (var n = 0; n < e.length; n++)
            t = ((t << 5) - t + e.charCodeAt(n)) | 0;
          return t;
        },
        nz = function () {
          var e = H();
          return (null == e ? void 0 : e.location) ? e.location.href : "";
        },
        nY = function (e) {
          return e === _.e.STAGING
            ? "https://api-sr.stag2.amplitude.com/sessions/v2/track"
            : e === _.e.EU
              ? "https://api-sr.eu.amplitude.com/sessions/v2/track"
              : "https://api-sr.amplitude.com/sessions/v2/track";
        },
        nV = function () {
          return (0, b.sH)(void 0, void 0, void 0, function () {
            var e, t, n, r;
            return (0, b.YH)(this, function (o) {
              switch (o.label) {
                case 0:
                  if ((o.trys.push([0, 3, , 4]), !(e = H()))) return [3, 2];
                  return [4, e.navigator.storage.estimate()];
                case 1:
                  return (
                    (n = (t = o.sent()).usage),
                    (r = t.quota),
                    [
                      2,
                      {
                        totalStorageSize: n ? Math.round(n / 1024) : 0,
                        percentOfQuota:
                          n && r
                            ? Math.round((n / r + Number.EPSILON) * 1e3) / 1e3
                            : 0,
                        usageDetails: JSON.stringify(t.usageDetails),
                      },
                    ]
                  );
                case 2:
                  return [3, 4];
                case 3:
                  return o.sent(), [3, 4];
                case 4:
                  return [
                    2,
                    {
                      totalStorageSize: 0,
                      percentOfQuota: 0,
                      usageDetails: "",
                    },
                  ];
              }
            });
          });
        },
        n$ = function (e) {
          var t = (0, b.Cl)({}, e),
            n = t.apiKey;
          return (t.apiKey = "****".concat(n.substring(n.length - 4))), t;
        },
        nK = function (e, t) {
          var n = document.createDocumentFragment(),
            r = function (e) {
              if (
                (void 0 === e && (e = []),
                "string" == typeof e && (e = [e]),
                0 !==
                  (e = e.filter(function (e) {
                    try {
                      n.querySelector(e);
                    } catch (n) {
                      return (
                        t.warn(
                          '[session-replay-browser] omitting selector "'.concat(
                            e,
                            '" because it is invalid',
                          ),
                        ),
                        !1
                      );
                    }
                    return !0;
                  })).length)
              )
                return e;
            };
          return (
            (e.blockSelector = r(e.blockSelector)),
            (e.maskSelector = r(e.maskSelector)),
            (e.unmaskSelector = r(e.unmaskSelector)),
            e
          );
        },
        nJ = (function () {
          function e(e, t) {
            this.localConfig = new j(e, t);
          }
          return (
            (e.prototype.initialize = function () {
              return (0, b.sH)(this, void 0, void 0, function () {
                var e;
                return (0, b.YH)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = this),
                        [
                          4,
                          nk({
                            localConfig: this.localConfig,
                            configKeys: ["sessionReplay"],
                          }),
                        ]
                      );
                    case 1:
                      return (e.remoteConfigFetch = t.sent()), [2];
                  }
                });
              });
            }),
            (e.prototype.generateJoinedConfig = function (e) {
              var t, n, r;
              return (0, b.sH)(this, void 0, void 0, function () {
                var o, i, s, a, l, u, c, d, h, f, p, g, v, m, y, S, w, I, M;
                return (0, b.YH)(this, function (C) {
                  switch (C.label) {
                    case 0:
                      ((o = (0, b.Cl)({}, this.localConfig)).optOut =
                        this.localConfig.optOut),
                        (o.captureEnabled = !0),
                        (C.label = 1);
                    case 1:
                      if ((C.trys.push([1, 5, , 6]), !this.remoteConfigFetch))
                        return (o.captureEnabled = !1), [2, o];
                      return [
                        4,
                        this.remoteConfigFetch.getRemoteConfig(
                          "sessionReplay",
                          "sr_sampling_config",
                          e,
                        ),
                      ];
                    case 2:
                      return (
                        (s = C.sent()),
                        [
                          4,
                          this.remoteConfigFetch.getRemoteConfig(
                            "sessionReplay",
                            "sr_privacy_config",
                            e,
                          ),
                        ]
                      );
                    case 3:
                      return (
                        (a = C.sent()),
                        (l = o),
                        [
                          4,
                          this.remoteConfigFetch.getRemoteConfig(
                            "sessionReplay",
                            "sr_interaction_config",
                            e,
                          ),
                        ]
                      );
                    case 4:
                      return (
                        (l.interactionConfig = C.sent()),
                        (s || a) &&
                          ((i = {}),
                          s && (i.sr_sampling_config = s),
                          a && (i.sr_privacy_config = a)),
                        [3, 6]
                      );
                    case 5:
                      return (
                        (u = C.sent()),
                        this.localConfig.loggerProvider.warn(u.message),
                        (o.captureEnabled = !1),
                        [3, 6]
                      );
                    case 6:
                      if (!i) return [2, o];
                      if (
                        ((c = i.sr_sampling_config),
                        (d = i.sr_privacy_config),
                        c && Object.keys(c).length > 0
                          ? (Object.prototype.hasOwnProperty.call(
                              c,
                              "capture_enabled",
                            )
                              ? (o.captureEnabled = c.capture_enabled)
                              : (o.captureEnabled = !1),
                            Object.prototype.hasOwnProperty.call(
                              c,
                              "sample_rate",
                            ) && (o.sampleRate = c.sample_rate))
                          : ((o.captureEnabled = !0),
                            this.localConfig.loggerProvider.debug(
                              "Remote config successfully fetched, but no values set for project, Session Replay capture enabled.",
                            )),
                        d)
                      ) {
                        (h =
                          null !== (t = o.privacyConfig) && void 0 !== t
                            ? t
                            : {}),
                          (f = {
                            defaultMaskLevel:
                              null !==
                                (r =
                                  null !== (n = d.defaultMaskLevel) &&
                                  void 0 !== n
                                    ? n
                                    : h.defaultMaskLevel) && void 0 !== r
                                ? r
                                : "medium",
                            blockSelector: [],
                            maskSelector: [],
                            unmaskSelector: [],
                          }),
                          (p = function (e) {
                            var t,
                              n,
                              r,
                              o,
                              i,
                              s,
                              a,
                              l,
                              u,
                              c = {};
                            "string" == typeof e.blockSelector &&
                              (e.blockSelector = [e.blockSelector]);
                            try {
                              for (
                                var d = (0, b.Ju)(
                                    null !== (a = e.blockSelector) &&
                                      void 0 !== a
                                      ? a
                                      : [],
                                  ),
                                  h = d.next();
                                !h.done;
                                h = d.next()
                              ) {
                                var f = h.value;
                                c[f] = "block";
                              }
                            } catch (e) {
                              t = { error: e };
                            } finally {
                              try {
                                h && !h.done && (n = d.return) && n.call(d);
                              } finally {
                                if (t) throw t.error;
                              }
                            }
                            try {
                              for (
                                var p = (0, b.Ju)(
                                    null !== (l = e.maskSelector) &&
                                      void 0 !== l
                                      ? l
                                      : [],
                                  ),
                                  g = p.next();
                                !g.done;
                                g = p.next()
                              ) {
                                var f = g.value;
                                c[f] = "mask";
                              }
                            } catch (e) {
                              r = { error: e };
                            } finally {
                              try {
                                g && !g.done && (o = p.return) && o.call(p);
                              } finally {
                                if (r) throw r.error;
                              }
                            }
                            try {
                              for (
                                var v = (0, b.Ju)(
                                    null !== (u = e.unmaskSelector) &&
                                      void 0 !== u
                                      ? u
                                      : [],
                                  ),
                                  m = v.next();
                                !m.done;
                                m = v.next()
                              ) {
                                var f = m.value;
                                c[f] = "unmask";
                              }
                            } catch (e) {
                              i = { error: e };
                            } finally {
                              try {
                                m && !m.done && (s = v.return) && s.call(v);
                              } finally {
                                if (i) throw i.error;
                              }
                            }
                            return c;
                          }),
                          (g = (0, b.Cl)((0, b.Cl)({}, p(h)), p(d)));
                        try {
                          for (
                            m = (v = (0, b.Ju)(Object.entries(g))).next();
                            !m.done;
                            m = v.next()
                          )
                            (S = (y = (0, b.zs)(m.value, 2))[0]),
                              (w = y[1]),
                              "mask" === w
                                ? f.maskSelector.push(S)
                                : "block" === w
                                  ? f.blockSelector.push(S)
                                  : "unmask" === w && f.unmaskSelector.push(S);
                        } catch (e) {
                          I = { error: e };
                        } finally {
                          try {
                            m && !m.done && (M = v.return) && M.call(v);
                          } finally {
                            if (I) throw I.error;
                          }
                        }
                        o.privacyConfig = nK(
                          f,
                          this.localConfig.loggerProvider,
                        );
                      }
                      return (
                        this.localConfig.loggerProvider.debug(
                          JSON.stringify(
                            {
                              name: "session replay joined config",
                              config: n$(o),
                            },
                            null,
                            2,
                          ),
                        ),
                        [2, o]
                      );
                  }
                });
              });
            }),
            e
          );
        })(),
        nX = "Failed to store session replay events in IndexedDB";
      !(function (e) {
        (e.RECORDING = "recording"), (e.SENT = "sent");
      })(g || (g = {}));
      var nZ = "sessionCurrentSequence",
        nQ = "sequencesToSend",
        n0 = function () {
          var e = H();
          return new Promise(function (t, n) {
            if (!e) return n(Error("Global scope not found"));
            if (!e.indexedDB)
              return n(Error("Session Replay: cannot find indexedDB"));
            try {
              var r = e.indexedDB.open("keyval-store");
              (r.onupgradeneeded = function () {
                1 === r.result.version &&
                  (r.result.close(),
                  r.transaction && r.transaction.abort(),
                  e.indexedDB.deleteDatabase("keyval-store"),
                  t());
              }),
                (r.onsuccess = function () {
                  t(r.result);
                });
            } catch (e) {
              n(e);
            }
          });
        },
        n1 = function (e) {
          return (0, b.sH)(void 0, void 0, void 0, function () {
            return (0, b.YH)(this, function (t) {
              switch (t.label) {
                case 0:
                  if (!(e.length > 0)) return [3, 2];
                  return [4, Promise.all(e.splice(0, 10))];
                case 1:
                  return t.sent(), [3, 0];
                case 2:
                  return [2];
              }
            });
          });
        },
        n2 = function (e) {
          var t, n;
          return (
            e.objectStoreNames.contains(nZ) ||
              (n = e.createObjectStore(nZ, { keyPath: "sessionId" })),
            e.objectStoreNames.contains(nQ) ||
              (t = e.createObjectStore(nQ, {
                keyPath: "sequenceId",
                autoIncrement: !0,
              })).createIndex("sessionId", "sessionId"),
            { sequencesStore: t, currentSequenceStore: n }
          );
        },
        n3 = (function () {
          function e(e) {
            var t = e.loggerProvider,
              n = e.apiKey,
              r = e.minInterval,
              o = e.maxInterval,
              i = this;
            (this.storageKey = ""),
              (this.maxPersistedEventsSize = 1e6),
              (this.timeAtLastSplit = null),
              (this.shouldSplitEventsList = function (e, t) {
                var n = new Blob([t]).size;
                return (
                  new Blob(e).size + n >= i.maxPersistedEventsSize ||
                  (!!(
                    null !== i.timeAtLastSplit &&
                    i.interval &&
                    Date.now() - i.timeAtLastSplit > i.interval
                  ) &&
                    !!e.length &&
                    ((i.interval = Math.min(
                      i.maxInterval,
                      i.interval + i.minInterval,
                    )),
                    (i.timeAtLastSplit = Date.now()),
                    !0))
                );
              }),
              (this.getSequencesToSend = function () {
                return (0, b.sH)(i, void 0, void 0, function () {
                  var e, t;
                  return (0, b.YH)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          n.trys.push([0, 2, , 3]),
                          [
                            4,
                            null === (t = this.db) || void 0 === t
                              ? void 0
                              : t.getAll(nQ),
                          ]
                        );
                      case 1:
                        return [2, n.sent()];
                      case 2:
                        return (
                          (e = n.sent()),
                          this.loggerProvider.warn(
                            "".concat(nX, ": ").concat(e),
                          ),
                          [3, 3]
                        );
                      case 3:
                        return [2, void 0];
                    }
                  });
                });
              }),
              (this.storeCurrentSequence = function (e) {
                return (0, b.sH)(i, void 0, void 0, function () {
                  var t, n, r;
                  return (0, b.YH)(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if ((o.trys.push([0, 4, , 5]), !this.db))
                          return [2, void 0];
                        return [4, this.db.get(nZ, e)];
                      case 1:
                        if (!(t = o.sent())) return [2, void 0];
                        return [
                          4,
                          this.db.put(nQ, { sessionId: e, events: t.events }),
                        ];
                      case 2:
                        return (
                          (n = o.sent()),
                          [4, this.db.put(nZ, { sessionId: e, events: [] })]
                        );
                      case 3:
                        return (
                          o.sent(),
                          [
                            2,
                            (0, b.Cl)((0, b.Cl)({}, t), {
                              sessionId: e,
                              sequenceId: n,
                            }),
                          ]
                        );
                      case 4:
                        return (
                          (r = o.sent()),
                          this.loggerProvider.warn(
                            "".concat(nX, ": ").concat(r),
                          ),
                          [3, 5]
                        );
                      case 5:
                        return [2, void 0];
                    }
                  });
                });
              }),
              (this.addEventToCurrentSequence = function (e, t) {
                return (0, b.sH)(i, void 0, void 0, function () {
                  var n, r, o, i, s, a, l;
                  return (0, b.YH)(this, function (u) {
                    switch (u.label) {
                      case 0:
                        0 === this.interval &&
                          (this.interval = this.minInterval),
                          (u.label = 1);
                      case 1:
                        if (
                          (u.trys.push([1, 11, , 12]),
                          !(n =
                            null === (l = this.db) || void 0 === l
                              ? void 0
                              : l.transaction(nZ, "readwrite")))
                        )
                          return [2];
                        return [4, n.store.get(e)];
                      case 2:
                        if ((r = u.sent())) return [3, 4];
                        return [4, n.store.put({ sessionId: e, events: [t] })];
                      case 3:
                        return u.sent(), [2];
                      case 4:
                        if (
                          ((o = void 0),
                          !this.shouldSplitEventsList(r.events, t))
                        )
                          return [3, 6];
                        return (
                          (o = r.events),
                          [4, n.store.put({ sessionId: e, events: [t] })]
                        );
                      case 5:
                        return u.sent(), [3, 8];
                      case 6:
                        return (
                          (i = r.events.concat(t)),
                          [4, n.store.put({ sessionId: e, events: i })]
                        );
                      case 7:
                        u.sent(), (u.label = 8);
                      case 8:
                        return [4, n.done];
                      case 9:
                        if ((u.sent(), !o)) return [2, void 0];
                        return [4, this.storeSendingEvents(e, o)];
                      case 10:
                        if (!(s = u.sent())) return [2, void 0];
                        return [2, { events: o, sessionId: e, sequenceId: s }];
                      case 11:
                        return (
                          (a = u.sent()),
                          this.loggerProvider.warn(
                            "".concat(nX, ": ").concat(a),
                          ),
                          [3, 12]
                        );
                      case 12:
                        return [2, void 0];
                    }
                  });
                });
              }),
              (this.storeSendingEvents = function (e, t) {
                return (0, b.sH)(i, void 0, void 0, function () {
                  var n, r;
                  return (0, b.YH)(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          o.trys.push([0, 2, , 3]),
                          [
                            4,
                            null === (r = this.db) || void 0 === r
                              ? void 0
                              : r.put(nQ, { sessionId: e, events: t }),
                          ]
                        );
                      case 1:
                        return [2, o.sent()];
                      case 2:
                        return (
                          (n = o.sent()),
                          this.loggerProvider.warn(
                            "".concat(nX, ": ").concat(n),
                          ),
                          [3, 3]
                        );
                      case 3:
                        return [2, void 0];
                    }
                  });
                });
              }),
              (this.cleanUpSessionEventsStore = function (e) {
                return (0, b.sH)(i, void 0, void 0, function () {
                  var t, n;
                  return (0, b.YH)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          r.trys.push([0, 2, , 3]),
                          [
                            4,
                            null === (n = this.db) || void 0 === n
                              ? void 0
                              : n.delete(nQ, e),
                          ]
                        );
                      case 1:
                        return r.sent(), [3, 3];
                      case 2:
                        return (
                          (t = r.sent()),
                          this.loggerProvider.warn(
                            "".concat(nX, ": ").concat(t),
                          ),
                          [3, 3]
                        );
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (this.transitionFromKeyValStore = function (e) {
                return (0, b.sH)(i, void 0, void 0, function () {
                  var t,
                    n,
                    r,
                    o,
                    i,
                    s,
                    a,
                    l = this;
                  return (0, b.YH)(this, function (u) {
                    switch (u.label) {
                      case 0:
                        return u.trys.push([0, 6, , 7]), [4, n0()];
                      case 1:
                        if (!(t = u.sent())) return [2];
                        (n = function (e, t) {
                          return (0, b.sH)(l, void 0, void 0, function () {
                            var n,
                              r,
                              o = this;
                            return (0, b.YH)(this, function (i) {
                              switch (i.label) {
                                case 0:
                                  return (
                                    (n = t.sessionSequences),
                                    (r = []),
                                    Object.keys(n).forEach(function (i) {
                                      var s = parseInt(i, 10),
                                        a = n[s];
                                      if (s === t.currentSequenceId) {
                                        var l = a.events.map(function (t) {
                                          return (0, b.sH)(
                                            o,
                                            void 0,
                                            void 0,
                                            function () {
                                              return (0, b.YH)(
                                                this,
                                                function (n) {
                                                  return [
                                                    2,
                                                    this.addEventToCurrentSequence(
                                                      e,
                                                      t,
                                                    ),
                                                  ];
                                                },
                                              );
                                            },
                                          );
                                        });
                                        r.concat(l);
                                      } else
                                        a.status !== g.SENT &&
                                          r.push(
                                            o.storeSendingEvents(e, a.events),
                                          );
                                    }),
                                    [4, n1(r)]
                                  );
                                case 1:
                                  return i.sent(), [2];
                              }
                            });
                          });
                        }),
                          (r = ""
                            .concat(E, "_")
                            .concat(this.apiKey.substring(0, 10))),
                          (u.label = 2);
                      case 2:
                        return (
                          u.trys.push([2, 4, , 5]),
                          (o = t
                            .transaction("keyval")
                            .objectStore("keyval")
                            .getAll(r)),
                          [
                            4,
                            new Promise(function (t) {
                              o.onsuccess = function (r) {
                                return (0, b.sH)(
                                  l,
                                  void 0,
                                  void 0,
                                  function () {
                                    var o,
                                      i,
                                      s,
                                      a = this;
                                    return (0, b.YH)(this, function (l) {
                                      switch (l.label) {
                                        case 0:
                                          if (
                                            !(i =
                                              (o = r && r.target.result) &&
                                              o[0])
                                          )
                                            return [3, 2];
                                          return (
                                            (s = []),
                                            Object.keys(i).forEach(
                                              function (t) {
                                                var r = parseInt(t, 10),
                                                  o = i[r];
                                                if (e === r) s.push(n(r, o));
                                                else {
                                                  var l = o.sessionSequences;
                                                  Object.keys(l).forEach(
                                                    function (e) {
                                                      var t = parseInt(e, 10);
                                                      l[t].status !== g.SENT &&
                                                        s.push(
                                                          a.storeSendingEvents(
                                                            r,
                                                            l[t].events,
                                                          ),
                                                        );
                                                    },
                                                  );
                                                }
                                              },
                                            ),
                                            [4, n1(s)]
                                          );
                                        case 1:
                                          l.sent(), (l.label = 2);
                                        case 2:
                                          return t(), [2];
                                      }
                                    });
                                  },
                                );
                              };
                            }),
                          ]
                        );
                      case 3:
                        return (
                          u.sent(),
                          (i = H()) &&
                            i.indexedDB.deleteDatabase("keyval-store"),
                          [3, 5]
                        );
                      case 4:
                        return (
                          (s = u.sent()),
                          this.loggerProvider.warn(
                            "Failed to transition session replay events from keyval to new store: ".concat(
                              s,
                            ),
                          ),
                          [3, 5]
                        );
                      case 5:
                        return [3, 7];
                      case 6:
                        return (
                          (a = u.sent()),
                          this.loggerProvider.warn(
                            "Failed to access keyval store: ".concat(
                              a,
                              ". For more information, visit: https://www.docs.developers.amplitude.com/session-replay/sdks/standalone/#indexeddb-best-practices",
                            ),
                          ),
                          [3, 7]
                        );
                      case 7:
                        return [2];
                    }
                  });
                });
              }),
              (this.loggerProvider = t),
              (this.apiKey = n),
              (this.maxInterval = null != o ? o : 1e4),
              (this.minInterval = null != r ? r : 500),
              (this.interval = 0);
          }
          return (
            (e.prototype.initialize = function (e, t) {
              return (0, b.sH)(this, void 0, void 0, function () {
                var n, r, o;
                return (0, b.YH)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (n = "replay" === e ? "" : "_".concat(e)),
                        (r = ""
                          .concat(
                            this.apiKey.substring(0, 10),
                            "_amp_session_replay_events",
                          )
                          .concat(n)),
                        (o = this),
                        [
                          4,
                          (0, b.sH)(void 0, void 0, void 0, function () {
                            return (0, b.YH)(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  return [4, nd(r, 1, { upgrade: n2 })];
                                case 1:
                                  return [2, e.sent()];
                              }
                            });
                          }),
                        ]
                      );
                    case 1:
                      return (
                        (o.db = i.sent()),
                        (this.timeAtLastSplit = Date.now()),
                        [4, this.transitionFromKeyValStore(t)]
                      );
                    case 2:
                      return i.sent(), [2];
                  }
                });
              });
            }),
            e
          );
        })(),
        n4 = function (e) {
          var t = e.loggerProvider,
            n = e.apiKey,
            r = e.sessionId,
            o = e.type,
            i = e.minInterval,
            s = e.maxInterval;
          return (0, b.sH)(void 0, void 0, void 0, function () {
            var e;
            return (0, b.YH)(this, function (a) {
              switch (a.label) {
                case 0:
                  return [
                    4,
                    (e = new n3({
                      loggerProvider: t,
                      apiKey: n,
                      minInterval: i,
                      maxInterval: s,
                    })).initialize(o, r),
                  ];
                case 1:
                  return a.sent(), [2, e];
              }
            });
          });
        },
        n5 = "1.13.4",
        n8 = (function () {
          function e(e) {
            var t = e.loggerProvider,
              n = e.payloadBatcher;
            (this.storageKey = ""),
              (this.retryTimeout = 1e3),
              (this.scheduled = null),
              (this.queue = []),
              (this.loggerProvider = t),
              (this.payloadBatcher =
                n ||
                function (e) {
                  return e;
                });
          }
          return (
            (e.prototype.sendEventsList = function (e) {
              this.addToQueue(
                (0, b.Cl)((0, b.Cl)({}, e), { attempts: 0, timeout: 0 }),
              );
            }),
            (e.prototype.addToQueue = function () {
              for (var e = this, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              t.filter(function (t) {
                return t.attempts < (t.flushMaxRetries || 0)
                  ? ((t.attempts += 1), !0)
                  : (e.completeRequest({
                      context: t,
                      err: ""
                        .concat(
                          "Session replay event batch rejected due to exceeded retry count",
                          ", batch sequence id, ",
                        )
                        .concat(t.sequenceId),
                    }),
                    !1);
              }).forEach(function (t) {
                if (((e.queue = e.queue.concat(t)), 0 === t.timeout)) {
                  e.schedule(0);
                  return;
                }
                setTimeout(function () {
                  (t.timeout = 0), e.schedule(0);
                }, t.timeout);
              });
            }),
            (e.prototype.schedule = function (e) {
              var t = this;
              this.scheduled ||
                (this.scheduled = setTimeout(function () {
                  t.flush(!0).then(function () {
                    t.queue.length > 0 && t.schedule(e);
                  });
                }, e));
            }),
            (e.prototype.flush = function (e) {
              return (
                void 0 === e && (e = !1),
                (0, b.sH)(this, void 0, void 0, function () {
                  var t,
                    n,
                    r = this;
                  return (0, b.YH)(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          (t = []),
                          (n = []),
                          this.queue.forEach(function (e) {
                            return 0 === e.timeout ? t.push(e) : n.push(e);
                          }),
                          (this.queue = n),
                          this.scheduled &&
                            (clearTimeout(this.scheduled),
                            (this.scheduled = null)),
                          [
                            4,
                            Promise.all(
                              t.map(function (t) {
                                return r.send(t, e);
                              }),
                            ),
                          ]
                        );
                      case 1:
                        return o.sent(), [2];
                    }
                  });
                })
              );
            }),
            (e.prototype.send = function (e, t) {
              var n, r;
              return (
                void 0 === t && (t = !0),
                (0, b.sH)(this, void 0, void 0, function () {
                  var o, i, s, a, l, u, c, d, h, f, p, g;
                  return (0, b.YH)(this, function (v) {
                    switch (v.label) {
                      case 0:
                        if (!(o = e.apiKey))
                          return [
                            2,
                            this.completeRequest({
                              context: e,
                              err: "Session replay event batch not sent due to missing api key",
                            }),
                          ];
                        if (!(i = e.deviceId))
                          return [
                            2,
                            this.completeRequest({
                              context: e,
                              err: "Session replay event batch not sent due to missing device ID",
                            }),
                          ];
                        if (
                          ((s = nz()),
                          (a = n5),
                          (l = e.sampleRate),
                          (u = new URLSearchParams({
                            device_id: i,
                            session_id: "".concat(e.sessionId),
                            seq_number: "".concat(e.sequenceId),
                            type: "".concat(e.type),
                          })),
                          (c = ""
                            .concat(
                              (null === (n = e.version) || void 0 === n
                                ? void 0
                                : n.type) || "standalone",
                              "/",
                            )
                            .concat(
                              (null === (r = e.version) || void 0 === r
                                ? void 0
                                : r.version) || a,
                            )),
                          0 ===
                            (d = this.payloadBatcher({
                              version: 1,
                              events: e.events,
                            })).events.length)
                        )
                          return this.completeRequest({ context: e }), [2];
                        v.label = 1;
                      case 1:
                        return (
                          v.trys.push([1, 3, , 4]),
                          (h = {
                            headers: {
                              "Content-Type": "application/json",
                              Accept: "*/*",
                              Authorization: "Bearer ".concat(o),
                              "X-Client-Version": a,
                              "X-Client-Library": c,
                              "X-Client-Url": s,
                              "X-Client-Sample-Rate": "".concat(l),
                            },
                            body: JSON.stringify(d),
                            method: "POST",
                          }),
                          [
                            4,
                            fetch(
                              ""
                                .concat(nY(e.serverZone), "?")
                                .concat(u.toString()),
                              h,
                            ),
                          ]
                        );
                      case 2:
                        if (null === (f = v.sent()))
                          return (
                            this.completeRequest({
                              context: e,
                              err: "Unexpected error occurred",
                            }),
                            [2]
                          );
                        if (t) this.handleReponse(f.status, e);
                        else {
                          p = "";
                          try {
                            p = JSON.stringify(f.body, null, 2);
                          } catch (e) {}
                          this.completeRequest({
                            context: e,
                            success: "".concat(f.status, ": ").concat(p),
                          });
                        }
                        return [3, 4];
                      case 3:
                        return (
                          (g = v.sent()),
                          this.completeRequest({ context: e, err: g }),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                  });
                })
              );
            }),
            (e.prototype.handleReponse = function (e, t) {
              switch (new w.j().buildStatus(e)) {
                case nr.n.Success:
                  this.handleSuccessResponse(t);
                  break;
                case nr.n.Failed:
                  this.handleOtherResponse(t);
                  break;
                default:
                  this.completeRequest({
                    context: t,
                    err: "Network error occurred, event batch rejected",
                  });
              }
            }),
            (e.prototype.handleSuccessResponse = function (e) {
              var t = Math.round(new Blob(e.events).size / 1024);
              this.completeRequest({
                context: e,
                success: "Session replay event batch with seq id "
                  .concat(e.sequenceId, " tracked successfully for session id ")
                  .concat(e.sessionId, ", size of events: ")
                  .concat(t, " KB"),
              });
            }),
            (e.prototype.handleOtherResponse = function (e) {
              this.addToQueue(
                (0, b.Cl)((0, b.Cl)({}, e), {
                  timeout: e.attempts * this.retryTimeout,
                }),
              );
            }),
            (e.prototype.completeRequest = function (e) {
              var t = e.context,
                n = e.err,
                r = e.success;
              t.onComplete(t.sequenceId),
                n
                  ? this.loggerProvider.warn(n)
                  : r && this.loggerProvider.log(r);
            }),
            e
          );
        })(),
        n6 = function (e) {
          var t = e.config,
            n = e.sessionId,
            r = e.minInterval,
            o = e.maxInterval,
            i = e.type,
            s = e.payloadBatcher;
          return (0, b.sH)(void 0, void 0, void 0, function () {
            var e, a, l;
            function u(t) {
              return (
                void 0 === t && (t = !1),
                (0, b.sH)(this, void 0, void 0, function () {
                  return (0, b.YH)(this, function (n) {
                    return [2, e.flush(t)];
                  });
                })
              );
            }
            return (0, b.YH)(this, function (c) {
              switch (c.label) {
                case 0:
                  return (
                    (e = new n8({
                      loggerProvider: t.loggerProvider,
                      payloadBatcher: s,
                    })),
                    [
                      4,
                      n4({
                        loggerProvider: t.loggerProvider,
                        apiKey: t.apiKey,
                        sessionId: n,
                        minInterval: r,
                        maxInterval: o,
                        type: i,
                      }),
                    ]
                  );
                case 1:
                  return (
                    (a = c.sent()),
                    (l = function (n) {
                      var r = n.events,
                        o = n.sessionId,
                        s = n.deviceId,
                        l = n.sequenceId;
                      t.debugMode &&
                        nV()
                          .then(function (e) {
                            var n = e.totalStorageSize,
                              r = e.percentOfQuota,
                              o = e.usageDetails;
                            t.loggerProvider.debug(
                              "Total storage size: "
                                .concat(n, " KB, percentage of quota: ")
                                .concat(r, "%, usage details: ")
                                .concat(o),
                            );
                          })
                          .catch(function () {}),
                        e.sendEventsList({
                          events: r,
                          sequenceId: l,
                          sessionId: o,
                          flushMaxRetries: t.flushMaxRetries,
                          apiKey: t.apiKey,
                          deviceId: s,
                          sampleRate: t.sampleRate,
                          serverZone: t.serverZone,
                          version: t.version,
                          type: i,
                          onComplete: a.cleanUpSessionEventsStore.bind(a),
                        });
                    }),
                    [
                      2,
                      {
                        sendCurrentSequenceEvents: function (e) {
                          var n = e.sessionId,
                            r = e.deviceId;
                          a.storeCurrentSequence(n)
                            .then(function (e) {
                              e &&
                                l({
                                  sequenceId: e.sequenceId,
                                  events: e.events,
                                  sessionId: e.sessionId,
                                  deviceId: r,
                                });
                            })
                            .catch(function (e) {
                              t.loggerProvider.warn(
                                "Failed to get current sequence of session replay events for session:",
                                e,
                              );
                            });
                        },
                        addEvent: function (e) {
                          var n = e.event,
                            r = e.sessionId,
                            o = e.deviceId;
                          a.addEventToCurrentSequence(r, n.data)
                            .then(function (e) {
                              return (
                                e &&
                                l({
                                  sequenceId: e.sequenceId,
                                  events: e.events,
                                  sessionId: e.sessionId,
                                  deviceId: o,
                                })
                              );
                            })
                            .catch(function (e) {
                              t.loggerProvider.warn(
                                "Failed to add event to session replay capture:",
                                e,
                              );
                            });
                        },
                        sendStoredEvents: function (e) {
                          var t = e.deviceId;
                          return (0, b.sH)(void 0, void 0, void 0, function () {
                            var e;
                            return (0, b.YH)(this, function (n) {
                              switch (n.label) {
                                case 0:
                                  return [4, a.getSequencesToSend()];
                                case 1:
                                  return (
                                    (e = n.sent()) &&
                                      e.forEach(function (e) {
                                        l({
                                          sequenceId: e.sequenceId,
                                          events: e.events,
                                          sessionId: e.sessionId,
                                          deviceId: t,
                                        });
                                      }),
                                    [2]
                                  );
                              }
                            });
                          });
                        },
                        flush: u,
                      },
                    ]
                  );
              }
            });
          });
        },
        n7 = (function () {
          function e() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = new Map();
            e.forEach(function (e) {
              n.set(e.name, e.manager);
            }),
              (this.managers = n);
          }
          return (
            (e.prototype.sendStoredEvents = function (e) {
              return (0, b.sH)(this, void 0, void 0, function () {
                var t;
                return (0, b.YH)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (t = []),
                        this.managers.forEach(function (n) {
                          t.push(n.sendStoredEvents(e));
                        }),
                        [4, Promise.all(t)]
                      );
                    case 1:
                      return n.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.addEvent = function (e) {
              var t,
                n = e.sessionId,
                r = e.event,
                o = e.deviceId;
              null === (t = this.managers.get(r.type)) ||
                void 0 === t ||
                t.addEvent({ sessionId: n, event: r, deviceId: o });
            }),
            (e.prototype.sendCurrentSequenceEvents = function (e) {
              var t = e.sessionId,
                n = e.deviceId;
              this.managers.forEach(function (e) {
                e.sendCurrentSequenceEvents({ sessionId: t, deviceId: n });
              });
            }),
            (e.prototype.flush = function (e) {
              return (0, b.sH)(this, void 0, void 0, function () {
                var t;
                return (0, b.YH)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (t = []),
                        this.managers.forEach(function (n) {
                          t.push(n.flush(e));
                        }),
                        [4, Promise.all(t)]
                      );
                    case 1:
                      return n.sent(), [2];
                  }
                });
              });
            }),
            e
          );
        })(),
        n9 = ((e) => (
          (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
          (e[(e.Load = 1)] = "Load"),
          (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
          (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
          (e[(e.Meta = 4)] = "Meta"),
          (e[(e.Custom = 5)] = "Custom"),
          (e[(e.Plugin = 6)] = "Plugin"),
          e
        ))(n9 || {}),
        re = ((e) => (
          (e[(e.Mutation = 0)] = "Mutation"),
          (e[(e.MouseMove = 1)] = "MouseMove"),
          (e[(e.MouseInteraction = 2)] = "MouseInteraction"),
          (e[(e.Scroll = 3)] = "Scroll"),
          (e[(e.ViewportResize = 4)] = "ViewportResize"),
          (e[(e.Input = 5)] = "Input"),
          (e[(e.TouchMove = 6)] = "TouchMove"),
          (e[(e.MediaInteraction = 7)] = "MediaInteraction"),
          (e[(e.StyleSheetRule = 8)] = "StyleSheetRule"),
          (e[(e.CanvasMutation = 9)] = "CanvasMutation"),
          (e[(e.Font = 10)] = "Font"),
          (e[(e.Log = 11)] = "Log"),
          (e[(e.Drag = 12)] = "Drag"),
          (e[(e.StyleDeclaration = 13)] = "StyleDeclaration"),
          (e[(e.Selection = 14)] = "Selection"),
          (e[(e.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
          e
        ))(re || {}),
        rt = ((e) => (
          (e[(e.MouseUp = 0)] = "MouseUp"),
          (e[(e.MouseDown = 1)] = "MouseDown"),
          (e[(e.Click = 2)] = "Click"),
          (e[(e.ContextMenu = 3)] = "ContextMenu"),
          (e[(e.DblClick = 4)] = "DblClick"),
          (e[(e.Focus = 5)] = "Focus"),
          (e[(e.Blur = 6)] = "Blur"),
          (e[(e.TouchStart = 7)] = "TouchStart"),
          (e[(e.TouchMove_Departed = 8)] = "TouchMove_Departed"),
          (e[(e.TouchEnd = 9)] = "TouchEnd"),
          (e[(e.TouchCancel = 10)] = "TouchCancel"),
          e
        ))(rt || {}),
        rn = ((e) => (
          (e[(e.Mouse = 0)] = "Mouse"),
          (e[(e.Pen = 1)] = "Pen"),
          (e[(e.Touch = 2)] = "Touch"),
          e
        ))(rn || {}),
        rr = ((e) => (
          (e[(e["2D"] = 0)] = "2D"),
          (e[(e.WebGL = 1)] = "WebGL"),
          (e[(e.WebGL2 = 2)] = "WebGL2"),
          e
        ))(rr || {}),
        ro = ((e) => (
          (e[(e.Play = 0)] = "Play"),
          (e[(e.Pause = 1)] = "Pause"),
          (e[(e.Seeked = 2)] = "Seeked"),
          (e[(e.VolumeChange = 3)] = "VolumeChange"),
          (e[(e.RateChange = 4)] = "RateChange"),
          e
        ))(ro || {}),
        ri = ((e) => (
          (e.Start = "start"),
          (e.Pause = "pause"),
          (e.Resume = "resume"),
          (e.Resize = "resize"),
          (e.Finish = "finish"),
          (e.FullsnapshotRebuilded = "fullsnapshot-rebuilded"),
          (e.LoadStylesheetStart = "load-stylesheet-start"),
          (e.LoadStylesheetEnd = "load-stylesheet-end"),
          (e.SkipStart = "skip-start"),
          (e.SkipEnd = "skip-end"),
          (e.MouseInteraction = "mouse-interaction"),
          (e.EventCast = "event-cast"),
          (e.CustomEvent = "custom-event"),
          (e.Flush = "flush"),
          (e.StateChange = "state-change"),
          (e.PlayBack = "play-back"),
          (e.Destroy = "destroy"),
          e
        ))(ri || {});
      function rs(e, t, n) {
        for (
          var r = null, o = [], i = e, s = 0;
          i &&
          "break" !==
            (function () {
              var e,
                a,
                l,
                u,
                c = new Date().getTime() - y.getTime();
              if (void 0 !== v.timeoutMs && c > v.timeoutMs)
                throw Error(
                  "Timeout: Can't find a unique selector after ".concat(
                    c,
                    "ms",
                  ),
                );
              var d = rp(
                  (e = i.getAttribute("id")) && v.idName(e)
                    ? { name: "#" + CSS.escape(e), penalty: 0 }
                    : null,
                ) ||
                  rp.apply(
                    void 0,
                    (0, b.fX)(
                      [],
                      (0, b.zs)(
                        Array.from(i.attributes)
                          .filter(function (e) {
                            return v.attr(e.name, e.value);
                          })
                          .map(function (e) {
                            return {
                              name: "["
                                .concat(CSS.escape(e.name), '="')
                                .concat(CSS.escape(e.value), '"]'),
                              penalty: 0.5,
                            };
                          }),
                      ),
                      !1,
                    ),
                  ) ||
                  rp.apply(
                    void 0,
                    (0, b.fX)(
                      [],
                      (0, b.zs)(
                        Array.from(i.classList)
                          .filter(v.className)
                          .map(function (e) {
                            return { name: "." + CSS.escape(e), penalty: 1 };
                          }),
                      ),
                      !1,
                    ),
                  ) ||
                  rp(
                    ((a = i.tagName.toLowerCase()),
                    v.tagName(a) ? { name: a, penalty: 2 } : null),
                  ) || [rd()],
                h = (function (e) {
                  var t = e.parentNode;
                  if (!t) return null;
                  var n = t.firstChild;
                  if (!n) return null;
                  for (
                    var r = 0;
                    n && (n.nodeType === Node.ELEMENT_NODE && r++, n !== e);

                  )
                    n = n.nextSibling;
                  return r;
                })(i);
              if ("all" == t)
                h &&
                  (d = d.concat(
                    d.filter(rf).map(function (e) {
                      return rh(e, h);
                    }),
                  ));
              else if ("two" == t)
                (d = d.slice(0, 1)),
                  h &&
                    (d = d.concat(
                      d.filter(rf).map(function (e) {
                        return rh(e, h);
                      }),
                    ));
              else if ("one" == t) {
                var f = (0, b.zs)((d = d.slice(0, 1)), 1)[0];
                h && rf(f) && (d = [rh(f, h)]);
              } else "none" == t && ((d = [rd()]), h && (d = [rh(d[0], h)]));
              try {
                for (
                  var p = ((l = void 0), (0, b.Ju)(d)), g = p.next();
                  !g.done;
                  g = p.next()
                ) {
                  var f = g.value;
                  f.level = s;
                }
              } catch (e) {
                l = { error: e };
              } finally {
                try {
                  g && !g.done && (u = p.return) && u.call(p);
                } finally {
                  if (l) throw l.error;
                }
              }
              if ((o.push(d), o.length >= v.seedMinLength && (r = ra(o, n))))
                return "break";
              (i = i.parentElement), s++;
            })();

        );
        return (r || (r = ra(o, n)), !r && n) ? n() : r;
      }
      function ra(e, t) {
        var n,
          r,
          o = rv(
            (function e(t, n) {
              var r, o, i, s, a;
              return (
                void 0 === n && (n = []),
                (0, b.YH)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      if (!(t.length > 0)) return [3, 9];
                      l.label = 1;
                    case 1:
                      l.trys.push([1, 6, 7, 8]),
                        (o = (r = (0, b.Ju)(t[0])).next()),
                        (l.label = 2);
                    case 2:
                      if (o.done) return [3, 5];
                      return (
                        (i = o.value),
                        [5, (0, b.Ju)(e(t.slice(1, t.length), n.concat(i)))]
                      );
                    case 3:
                      l.sent(), (l.label = 4);
                    case 4:
                      return (o = r.next()), [3, 2];
                    case 5:
                      return [3, 8];
                    case 6:
                      return (s = { error: l.sent() }), [3, 8];
                    case 7:
                      try {
                        o && !o.done && (a = r.return) && a.call(r);
                      } finally {
                        if (s) throw s.error;
                      }
                      return [7];
                    case 8:
                      return [3, 11];
                    case 9:
                      return [4, n];
                    case 10:
                      l.sent(), (l.label = 11);
                    case 11:
                      return [2];
                  }
                })
              );
            })(e),
          );
        if (o.length > v.threshold) return t ? t() : null;
        try {
          for (var i = (0, b.Ju)(o), s = i.next(); !s.done; s = i.next()) {
            var a = s.value;
            if (rc(a)) return a;
          }
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            s && !s.done && (r = i.return) && r.call(i);
          } finally {
            if (n) throw n.error;
          }
        }
        return null;
      }
      function rl(e) {
        for (var t = e[0], n = t.name, r = 1; r < e.length; r++) {
          var o = e[r].level || 0;
          (n =
            t.level === o - 1
              ? "".concat(e[r].name, " > ").concat(n)
              : "".concat(e[r].name, " ").concat(n)),
            (t = e[r]);
        }
        return n;
      }
      function ru(e) {
        return e
          .map(function (e) {
            return e.penalty;
          })
          .reduce(function (e, t) {
            return e + t;
          }, 0);
      }
      function rc(e) {
        var t = rl(e);
        switch (m.querySelectorAll(t).length) {
          case 0:
            throw Error("Can't select any node with this selector: ".concat(t));
          case 1:
            return !0;
          default:
            return !1;
        }
      }
      function rd() {
        return { name: "*", penalty: 3 };
      }
      function rh(e, t) {
        return {
          name: e.name + ":nth-child(".concat(t, ")"),
          penalty: e.penalty + 1,
        };
      }
      function rf(e) {
        return "html" !== e.name && !e.name.startsWith("#");
      }
      function rp() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = e.filter(rg);
        return n.length > 0 ? n : null;
      }
      function rg(e) {
        return null != e;
      }
      function rv(e) {
        return (0, b.fX)([], (0, b.zs)(e), !1).sort(function (e, t) {
          return ru(e) - ru(t);
        });
      }
      var rm = function (e) {
          var t = e.version,
            n = e.events,
            r = [];
          return (
            n.forEach(function (e) {
              var t = JSON.parse(e);
              "click" === t.type && r.push(t);
            }),
            {
              version: t,
              events: Object.values(
                r.reduce(function (e, t) {
                  var n = t.x,
                    r = t.y,
                    o = t.selector,
                    i = t.timestamp,
                    s = i - (i % 36e5),
                    a = ""
                      .concat(n, ":")
                      .concat(r, ":")
                      .concat(null != o ? o : "", ":")
                      .concat(s);
                  return (
                    e[a]
                      ? (e[a].count += 1)
                      : (e[a] = (0, b.Cl)((0, b.Cl)({}, t), {
                          timestamp: s,
                          count: 1,
                        })),
                    e
                  );
                }, {}),
              ),
            }
          );
        },
        ry = function (e) {
          var t = e.eventsManager,
            n = e.sessionId,
            r = e.deviceIdFn;
          return function (e) {
            if (e.type === rt.Click) {
              var o,
                i = H();
              if (i) {
                var s = i.location,
                  a = i.innerHeight,
                  l = i.innerWidth;
                if (s) {
                  var u = e.x,
                    c = e.y,
                    d = tE.mirror.getNode(e.id);
                  d &&
                    (o = (function (e, t) {
                      if (((y = new Date()), e.nodeType !== Node.ELEMENT_NODE))
                        throw Error(
                          "Can't generate CSS selector for non-element node type.",
                        );
                      if ("html" === e.tagName.toLowerCase()) return "html";
                      var n,
                        r,
                        o = {
                          root: document.body,
                          idName: function (e) {
                            return !0;
                          },
                          className: function (e) {
                            return !0;
                          },
                          tagName: function (e) {
                            return !0;
                          },
                          attr: function (e, t) {
                            return !1;
                          },
                          seedMinLength: 1,
                          optimizedMinLength: 2,
                          threshold: 1e3,
                          maxNumberOfTries: 1e4,
                          timeoutMs: void 0,
                        };
                      (n = (v = (0, b.Cl)((0, b.Cl)({}, o), void 0)).root),
                        (r = o),
                        (m =
                          n.nodeType === Node.DOCUMENT_NODE
                            ? n
                            : n === r.root
                              ? n.ownerDocument
                              : n);
                      var i = rs(e, "all", function () {
                        return rs(e, "two", function () {
                          return rs(e, "one", function () {
                            return rs(e, "none");
                          });
                        });
                      });
                      if (i) {
                        var s = rv(
                          (function e(t, n, r) {
                            var o, i, s;
                            return (
                              void 0 === r &&
                                (r = { counter: 0, visited: new Map() }),
                              (0, b.YH)(this, function (a) {
                                switch (a.label) {
                                  case 0:
                                    if (
                                      !(
                                        t.length > 2 &&
                                        t.length > v.optimizedMinLength
                                      )
                                    )
                                      return [3, 5];
                                    (o = 1), (a.label = 1);
                                  case 1:
                                    var l, u;
                                    if (!(o < t.length - 1)) return [3, 5];
                                    if (
                                      r.counter > v.maxNumberOfTries ||
                                      ((r.counter += 1),
                                      (i = (0, b.fX)(
                                        [],
                                        (0, b.zs)(t),
                                        !1,
                                      )).splice(o, 1),
                                      (s = rl(i)),
                                      r.visited.has(s))
                                    )
                                      return [2];
                                    if (
                                      !(
                                        rc(i) &&
                                        ((l = i),
                                        (u = n),
                                        m.querySelector(rl(l)) === u)
                                      )
                                    )
                                      return [3, 4];
                                    return [4, i];
                                  case 2:
                                    return (
                                      a.sent(),
                                      r.visited.set(s, !0),
                                      [5, (0, b.Ju)(e(i, n, r))]
                                    );
                                  case 3:
                                    a.sent(), (a.label = 4);
                                  case 4:
                                    return o++, [3, 1];
                                  case 5:
                                    return [2];
                                }
                              })
                            );
                          })(i, e),
                        );
                        return s.length > 0 && (i = s[0]), rl(i);
                      }
                      throw Error("Selector was not found.");
                    })(d));
                  var h = eP(i),
                    f = {
                      x: u + h.left,
                      y: c + h.top,
                      selector: o,
                      viewportHeight: a,
                      viewportWidth: l,
                      pageUrl: s.href,
                      timestamp: Date.now(),
                      type: "click",
                    },
                    p = r();
                  p &&
                    t.addEvent({
                      sessionId: n,
                      event: { type: "interaction", data: JSON.stringify(f) },
                      deviceId: p,
                    });
                }
              }
            }
          };
        },
        rb = (function () {
          function e(e, t) {
            var n = H();
            n && n.navigator && "function" == typeof n.navigator.sendBeacon
              ? (this.sendBeacon = function (e, t) {
                  try {
                    if (n.navigator.sendBeacon(e, JSON.stringify(t))) return !0;
                  } catch (e) {}
                  return !1;
                })
              : (this.sendBeacon = function () {
                  return !1;
                }),
              (this.sendXhr = function (e, t) {
                var n = new XMLHttpRequest();
                return (
                  n.open("POST", e, !0),
                  n.setRequestHeader("Accept", "*/*"),
                  n.send(JSON.stringify(t)),
                  !0
                );
              }),
              (this.basePageUrl = nY(t.serverZone)),
              (this.context = e);
          }
          return (
            (e.prototype.send = function (e, t) {
              var n = this.context,
                r = n.sessionId,
                o = n.type,
                i = new URLSearchParams({
                  device_id: e,
                  session_id: String(r),
                  type: String(o),
                }),
                s = "".concat(this.basePageUrl, "?").concat(i.toString());
              this.sendBeacon(s, t) || this.sendXhr(s, t);
            }),
            e
          );
        })(),
        rS = (function () {
          function e(e) {
            var t = this;
            (this.timestamp = Date.now()),
              (this.hook = function (e) {
                t.update(e);
              }),
              (this.send = function (e) {
                return function (n) {
                  var r = e(),
                    o = H();
                  o &&
                    r &&
                    t.transport.send(r, {
                      maxScrollX: t._maxScrollX,
                      maxScrollY: t._maxScrollY,
                      maxScrollWidth: t._maxScrollWidth,
                      maxScrollHeight: t._maxScrollHeight,
                      viewportHeight: eA(),
                      viewportWidth: ej(),
                      pageUrl: o.location.href,
                      timestamp: t.timestamp,
                      type: "scroll",
                    });
                };
              }),
              (this._maxScrollX = 0),
              (this._maxScrollY = 0),
              (this._maxScrollWidth = ej()),
              (this._maxScrollHeight = eA()),
              (this.transport = e);
          }
          return (
            (e.default = function (t, n) {
              return new e(new rb(t, n));
            }),
            Object.defineProperty(e.prototype, "maxScrollX", {
              get: function () {
                return this._maxScrollX;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "maxScrollY", {
              get: function () {
                return this._maxScrollY;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "maxScrollWidth", {
              get: function () {
                return this._maxScrollWidth;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "maxScrollHeight", {
              get: function () {
                return this._maxScrollHeight;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.update = function (e) {
              var t = Date.now();
              if (e.x > this._maxScrollX) {
                var n = ej();
                this._maxScrollX = e.x;
                var r = e.x + n;
                r > this._maxScrollWidth && (this._maxScrollWidth = r),
                  (this.timestamp = t);
              }
              if (e.y > this._maxScrollY) {
                var o = eA();
                this._maxScrollY = e.y;
                var i = e.y + o;
                i > this._maxScrollHeight && (this._maxScrollHeight = i),
                  (this.timestamp = t);
              }
            }),
            e
          );
        })(),
        rw = function (e) {
          var t = e.sessionId,
            n = e.deviceId;
          (this.deviceId = n),
            (this.sessionId = t),
            t && n && (this.sessionReplayId = "".concat(n, "/").concat(t));
        },
        rI = (function () {
          function e() {
            var e = this;
            (this.name = "@amplitude/session-replay-browser"),
              (this.recordCancelCallback = null),
              (this.eventCount = 0),
              (this.pageLeaveFns = []),
              (this.teardownEventListeners = function (t) {
                var n = H();
                n &&
                  (n.removeEventListener("blur", e.blurListener),
                  n.removeEventListener("focus", e.focusListener),
                  t || n.addEventListener("blur", e.blurListener),
                  t || n.addEventListener("focus", e.focusListener),
                  n.self && "onpagehide" in n.self
                    ? (n.removeEventListener("pagehide", e.pageLeaveListener),
                      t || n.addEventListener("pagehide", e.pageLeaveListener))
                    : (n.removeEventListener(
                        "beforeunload",
                        e.pageLeaveListener,
                      ),
                      t ||
                        n.addEventListener(
                          "beforeunload",
                          e.pageLeaveListener,
                        )));
              }),
              (this.blurListener = function () {
                e.sendEvents();
              }),
              (this.focusListener = function () {
                e.recordEvents();
              }),
              (this.pageLeaveListener = function (t) {
                e.pageLeaveFns.forEach(function (e) {
                  e(t);
                });
              }),
              (this.addCustomRRWebEvent = function (t, n, r) {
                return (
                  void 0 === n && (n = {}),
                  void 0 === r && (r = !0),
                  (0, b.sH)(e, void 0, void 0, function () {
                    var e, o, i;
                    return (0, b.YH)(this, function (s) {
                      switch (s.label) {
                        case 0:
                          if (
                            (s.trys.push([0, 3, , 4]),
                            (e = void 0),
                            !this.config ||
                              ((e = { config: n$(this.config), version: n5 }),
                              !r))
                          )
                            return [3, 2];
                          return [4, nV()];
                        case 1:
                          (o = s.sent()),
                            (e = (0, b.Cl)((0, b.Cl)({}, o), e)),
                            (s.label = 2);
                        case 2:
                          return (
                            this.recordCancelCallback
                              ? tE.addCustomEvent(
                                  t,
                                  (0, b.Cl)((0, b.Cl)({}, n), e),
                                )
                              : this.loggerProvider.debug(
                                  "Not able to add custom replay capture event ".concat(
                                    t,
                                    " due to no ongoing recording.",
                                  ),
                                ),
                            [3, 4]
                          );
                        case 3:
                          return (
                            (i = s.sent()),
                            this.loggerProvider.debug(
                              "Error while adding custom replay capture event: ",
                              i,
                            ),
                            [3, 4]
                          );
                        case 4:
                          return [2];
                      }
                    });
                  })
                );
              }),
              (this.stopRecordingEvents = function () {
                try {
                  e.loggerProvider.log("Session Replay capture stopping."),
                    e.recordCancelCallback && e.recordCancelCallback(),
                    (e.recordCancelCallback = null);
                } catch (t) {
                  e.loggerProvider.warn(
                    "Error occurred while stopping replay capture: ".concat(
                      t.toString(),
                    ),
                  );
                }
              }),
              (this.loggerProvider = new C());
          }
          return (
            (e.prototype.init = function (e, t) {
              return U(this._init(e, t));
            }),
            (e.prototype._init = function (e, t) {
              var n, r, o;
              return (0, b.sH)(this, void 0, void 0, function () {
                var i, s, a, l, u, c, d;
                return (0, b.YH)(this, function (h) {
                  switch (h.label) {
                    case 0:
                      return (
                        (this.loggerProvider = t.loggerProvider || new C()),
                        Object.prototype.hasOwnProperty.call(t, "logLevel") &&
                          this.loggerProvider.enable(t.logLevel),
                        (this.identifiers = new rw({
                          sessionId: t.sessionId,
                          deviceId: t.deviceId,
                        })),
                        (i = this),
                        [
                          4,
                          (0, b.sH)(void 0, void 0, void 0, function () {
                            var n;
                            return (0, b.YH)(this, function (r) {
                              switch (r.label) {
                                case 0:
                                  return [4, (n = new nJ(e, t)).initialize()];
                                case 1:
                                  return r.sent(), [2, n];
                              }
                            });
                          }),
                        ]
                      );
                    case 1:
                      return (
                        (i.joinedConfigGenerator = h.sent()),
                        (s = this),
                        [
                          4,
                          this.joinedConfigGenerator.generateJoinedConfig(
                            this.identifiers.sessionId,
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (s.config = h.sent()),
                        t.sessionId &&
                          (null === (n = this.config.interactionConfig) ||
                          void 0 === n
                            ? void 0
                            : n.enabled) &&
                          ((a = rS.default(
                            { sessionId: t.sessionId, type: "interaction" },
                            this.config,
                          )),
                          (this.pageLeaveFns = [
                            a.send(this.getDeviceId.bind(this)),
                          ]),
                          (this.scrollHook = a.hook.bind(a))),
                        (l = []),
                        [
                          4,
                          n6({
                            config: this.config,
                            sessionId: this.identifiers.sessionId,
                            type: "replay",
                          }),
                        ]
                      );
                    case 3:
                      if (
                        ((u = h.sent()),
                        l.push({ name: "replay", manager: u }),
                        !(null === (r = this.config.interactionConfig) ||
                        void 0 === r
                          ? void 0
                          : r.enabled))
                      )
                        return [3, 5];
                      return (
                        (c = this.config.interactionConfig.batch ? rm : void 0),
                        [
                          4,
                          n6({
                            config: this.config,
                            sessionId: this.identifiers.sessionId,
                            type: "interaction",
                            minInterval:
                              null !==
                                (o =
                                  this.config.interactionConfig
                                    .trackEveryNms) && void 0 !== o
                                ? o
                                : 3e4,
                            maxInterval: 6e4,
                            payloadBatcher: c,
                          }),
                        ]
                      );
                    case 4:
                      (d = h.sent()),
                        l.push({ name: "interaction", manager: d }),
                        (h.label = 5);
                    case 5:
                      return (
                        (this.eventsManager = new (n7.bind.apply(
                          n7,
                          (0, b.fX)([void 0], (0, b.zs)(l), !1),
                        ))()),
                        this.loggerProvider.log(
                          "Installing @amplitude/session-replay-browser.",
                        ),
                        this.teardownEventListeners(!1),
                        this.initialize(!0),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.setSessionId = function (e, t) {
              return U(this.asyncSetSessionId(e, t));
            }),
            (e.prototype.asyncSetSessionId = function (e, t) {
              return (0, b.sH)(this, void 0, void 0, function () {
                var n, r, o;
                return (0, b.YH)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (
                        ((n = this.identifiers && this.identifiers.sessionId) &&
                          this.sendEvents(n),
                        (r = t || this.getDeviceId()),
                        (this.identifiers = new rw({
                          sessionId: e,
                          deviceId: r,
                        })),
                        !(this.joinedConfigGenerator && n))
                      )
                        return [3, 2];
                      return (
                        (o = this),
                        [
                          4,
                          this.joinedConfigGenerator.generateJoinedConfig(
                            this.identifiers.sessionId,
                          ),
                        ]
                      );
                    case 1:
                      (o.config = i.sent()), (i.label = 2);
                    case 2:
                      return this.recordEvents(), [2];
                  }
                });
              });
            }),
            (e.prototype.getSessionReplayDebugPropertyValue = function () {
              var e = "";
              return (
                this.config && (e = nG(this.config.apiKey).toString()),
                JSON.stringify({ appHash: e })
              );
            }),
            (e.prototype.getSessionReplayProperties = function () {
              if (!this.config || !this.identifiers)
                return (
                  this.loggerProvider.warn(
                    "Session replay init has not been called, cannot get session replay properties.",
                  ),
                  {}
                );
              var e,
                t = this.getShouldRecord(),
                n = {};
              return (
                t &&
                  (((e = {})[L] = this.identifiers.sessionReplayId
                    ? this.identifiers.sessionReplayId
                    : null),
                  (n = e),
                  this.config.debugMode &&
                    (n[N] = this.getSessionReplayDebugPropertyValue())),
                this.addCustomRRWebEvent(
                  h.GET_SR_PROPS,
                  { shouldRecord: t, eventProperties: n },
                  10 === this.eventCount,
                ),
                10 === this.eventCount && (this.eventCount = 0),
                this.eventCount++,
                n
              );
            }),
            (e.prototype.sendEvents = function (e) {
              var t,
                n =
                  e ||
                  (null === (t = this.identifiers) || void 0 === t
                    ? void 0
                    : t.sessionId),
                r = this.getDeviceId();
              this.eventsManager &&
                n &&
                r &&
                this.eventsManager.sendCurrentSequenceEvents({
                  sessionId: n,
                  deviceId: r,
                });
            }),
            (e.prototype.initialize = function (e) {
              if (
                (void 0 === e && (e = !1),
                !(null === (t = this.identifiers) || void 0 === t
                  ? void 0
                  : t.sessionId))
              ) {
                this.loggerProvider.log(
                  "Session is not being recorded due to lack of session id.",
                );
                return;
              }
              var t,
                n = this.getDeviceId();
              if (!n) {
                this.loggerProvider.log(
                  "Session is not being recorded due to lack of device id.",
                );
                return;
              }
              this.eventsManager &&
                e &&
                this.eventsManager.sendStoredEvents({ deviceId: n }),
                this.recordEvents();
            }),
            (e.prototype.shouldOptOut = function () {
              if (
                null === (e = this.config) || void 0 === e
                  ? void 0
                  : e.instanceName
              ) {
                var e, t, n;
                n = q(this.config.instanceName).identityStore.getIdentity()
                  .optOut;
              }
              return void 0 !== n
                ? n
                : null === (t = this.config) || void 0 === t
                  ? void 0
                  : t.optOut;
            }),
            (e.prototype.getShouldRecord = function () {
              if (
                !this.identifiers ||
                !this.config ||
                !this.identifiers.sessionId
              )
                return (
                  this.loggerProvider.warn(
                    "Session is not being recorded due to lack of config, please call sessionReplay.init.",
                  ),
                  !1
                );
              if (!this.config.captureEnabled)
                return (
                  this.loggerProvider.log(
                    "Session ".concat(
                      this.identifiers.sessionId,
                      " not being captured due to capture being disabled for project or because the remote config could not be fetched.",
                    ),
                  ),
                  !1
                );
              if (this.shouldOptOut())
                return (
                  this.loggerProvider.log(
                    "Opting session ".concat(
                      this.identifiers.sessionId,
                      " out of recording due to optOut config.",
                    ),
                  ),
                  !1
                );
              var e,
                t,
                n =
                  ((e = this.identifiers.sessionId),
                  (t = this.config.sampleRate),
                  ((31 * Math.abs(nG(e.toString()))) % 1e6) / 1e6 < t);
              return (
                n ||
                  this.loggerProvider.log(
                    "Opting session ".concat(
                      this.identifiers.sessionId,
                      " out of recording due to sample rate.",
                    ),
                  ),
                n
              );
            }),
            (e.prototype.getBlockSelectors = function () {
              var e,
                t,
                n,
                r =
                  null !==
                    (n =
                      null ===
                        (t =
                          null === (e = this.config) || void 0 === e
                            ? void 0
                            : e.privacyConfig) || void 0 === t
                        ? void 0
                        : t.blockSelector) && void 0 !== n
                    ? n
                    : [];
              if (0 !== r.length) return r;
            }),
            (e.prototype.getMaskTextSelectors = function () {
              if (
                (null ===
                  (t =
                    null === (e = this.config) || void 0 === e
                      ? void 0
                      : e.privacyConfig) || void 0 === t
                  ? void 0
                  : t.defaultMaskLevel) === "conservative"
              )
                return "*";
              var e,
                t,
                n,
                r,
                o =
                  null ===
                    (r =
                      null === (n = this.config) || void 0 === n
                        ? void 0
                        : n.privacyConfig) || void 0 === r
                    ? void 0
                    : r.maskSelector;
              if (o) return o;
            }),
            (e.prototype.recordEvents = function () {
              var e,
                t = this,
                n = this.getShouldRecord(),
                r =
                  null === (e = this.identifiers) || void 0 === e
                    ? void 0
                    : e.sessionId;
              if (n && r && this.config) {
                this.stopRecordingEvents();
                var o = this.config.privacyConfig;
                this.loggerProvider.log("Session Replay capture beginning."),
                  (this.recordCancelCallback = tE({
                    emit: function (e) {
                      if (t.shouldOptOut()) {
                        t.loggerProvider.log(
                          "Opting session ".concat(
                            r,
                            " out of recording due to optOut config.",
                          ),
                        ),
                          t.stopRecordingEvents(),
                          t.sendEvents();
                        return;
                      }
                      var n = JSON.stringify(e),
                        o = t.getDeviceId();
                      t.eventsManager &&
                        o &&
                        t.eventsManager.addEvent({
                          event: { type: "replay", data: n },
                          sessionId: r,
                          deviceId: o,
                        });
                    },
                    packFn: nn,
                    inlineStylesheet: this.config.shouldInlineStylesheet,
                    hooks: {
                      mouseInteraction:
                        this.eventsManager &&
                        ry({
                          eventsManager: this.eventsManager,
                          sessionId: r,
                          deviceIdFn: this.getDeviceId.bind(this),
                        }),
                      scroll: this.scrollHook,
                    },
                    maskAllInputs: !0,
                    maskTextClass: P,
                    blockClass: "amp-block",
                    blockSelector: this.getBlockSelectors(),
                    maskInputFn: nB("input", o),
                    maskTextFn: nB("text", o),
                    maskTextSelector: this.getMaskTextSelectors(),
                    recordCanvas: !1,
                    errorHandler: function (e) {
                      if (
                        (e.message.includes("insertRule") &&
                          e.message.includes("CSSStyleSheet")) ||
                        e._external_
                      )
                        throw e;
                      return (
                        t.loggerProvider.warn(
                          "Error while capturing replay: ",
                          e.toString(),
                        ),
                        !0
                      );
                    },
                  })),
                  this.addCustomRRWebEvent(h.DEBUG_INFO);
              }
            }),
            (e.prototype.getDeviceId = function () {
              if (
                null === (e = this.config) || void 0 === e
                  ? void 0
                  : e.instanceName
              ) {
                var e, t, n;
                n = q(this.config.instanceName).identityStore.getIdentity()
                  .deviceId;
              }
              return (
                n ||
                (null === (t = this.identifiers) || void 0 === t
                  ? void 0
                  : t.deviceId)
              );
            }),
            (e.prototype.getSessionId = function () {
              var e;
              return null === (e = this.identifiers) || void 0 === e
                ? void 0
                : e.sessionId;
            }),
            (e.prototype.flush = function (e) {
              var t;
              return (
                void 0 === e && (e = !1),
                (0, b.sH)(this, void 0, void 0, function () {
                  return (0, b.YH)(this, function (n) {
                    return [
                      2,
                      null === (t = this.eventsManager) || void 0 === t
                        ? void 0
                        : t.flush(e),
                    ];
                  });
                })
              );
            }),
            (e.prototype.shutdown = function () {
              this.teardownEventListeners(!0),
                this.stopRecordingEvents(),
                this.sendEvents();
            }),
            e
          );
        })(),
        rM = function (e) {
          return function () {
            var t = e.config || A();
            return { logger: t.loggerProvider, logLevel: t.logLevel };
          };
        };
      let rC = (function () {
        var e = new rI();
        return {
          init: S(e.init.bind(e), "init", rM(e)),
          setSessionId: S(e.setSessionId.bind(e), "setSessionId", rM(e)),
          getSessionId: S(e.getSessionId.bind(e), "getSessionId", rM(e)),
          getSessionReplayProperties: S(
            e.getSessionReplayProperties.bind(e),
            "getSessionReplayProperties",
            rM(e),
          ),
          flush: S(e.flush.bind(e), "flush", rM(e)),
          shutdown: S(e.shutdown.bind(e), "shutdown", rM(e)),
        };
      })();
      var rE = rC.init,
        rO = rC.setSessionId,
        rk = rC.getSessionId,
        rx = rC.getSessionReplayProperties,
        rT = (rC.flush, rC.shutdown),
        r_ = "1.6.20",
        rR = (function () {
          function e(e) {
            (this.name = "@amplitude/plugin-session-replay-browser"),
              (this.type = "enrichment"),
              (this.options = (0, b.Cl)({}, e)),
              !1 !== this.options.forceSessionTracking &&
                (this.options.forceSessionTracking = !0);
          }
          return (
            (e.prototype.setup = function (e) {
              var t, n, r, o;
              return (0, b.sH)(this, void 0, void 0, function () {
                return (0, b.YH)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        e.loggerProvider.log(
                          "Installing @amplitude/plugin-session-replay, version ".concat(
                            r_,
                            ".",
                          ),
                        ),
                        (this.config = e),
                        this.options.forceSessionTracking &&
                          ("boolean" == typeof e.defaultTracking
                            ? !1 === e.defaultTracking &&
                              (e.defaultTracking = {
                                pageViews: !1,
                                formInteractions: !1,
                                fileDownloads: !1,
                                sessions: !0,
                              })
                            : (e.defaultTracking = (0, b.Cl)(
                                (0, b.Cl)({}, e.defaultTracking),
                                { sessions: !0 },
                              ))),
                        [
                          4,
                          rE(e.apiKey, {
                            instanceName: this.config.instanceName,
                            deviceId: this.config.deviceId,
                            optOut: this.config.optOut,
                            sessionId: this.config.sessionId,
                            loggerProvider: this.config.loggerProvider,
                            logLevel: this.config.logLevel,
                            flushMaxRetries: this.config.flushMaxRetries,
                            serverZone: this.config.serverZone,
                            sampleRate: this.options.sampleRate,
                            privacyConfig: {
                              blockSelector:
                                null === (t = this.options.privacyConfig) ||
                                void 0 === t
                                  ? void 0
                                  : t.blockSelector,
                              maskSelector:
                                null === (n = this.options.privacyConfig) ||
                                void 0 === n
                                  ? void 0
                                  : n.maskSelector,
                              unmaskSelector:
                                null === (r = this.options.privacyConfig) ||
                                void 0 === r
                                  ? void 0
                                  : r.unmaskSelector,
                              defaultMaskLevel:
                                null === (o = this.options.privacyConfig) ||
                                void 0 === o
                                  ? void 0
                                  : o.defaultMaskLevel,
                            },
                            debugMode: this.options.debugMode,
                            configEndpointUrl: this.options.configEndpointUrl,
                            shouldInlineStylesheet:
                              this.options.shouldInlineStylesheet,
                            version: { type: "plugin", version: r_ },
                          }).promise,
                        ]
                      );
                    case 1:
                      return i.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.execute = function (e) {
              return (0, b.sH)(this, void 0, void 0, function () {
                var t;
                return (0, b.YH)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (
                        !(
                          this.config.sessionId &&
                          this.config.sessionId !== rk()
                        )
                      )
                        return [3, 2];
                      return [4, rO(this.config.sessionId).promise];
                    case 1:
                      n.sent(), (n.label = 2);
                    case 2:
                      return (
                        this.config.sessionId &&
                          this.config.sessionId === e.session_id &&
                          ((t = rx()),
                          (e.event_properties = (0, b.Cl)(
                            (0, b.Cl)({}, e.event_properties),
                            t,
                          ))),
                        [2, Promise.resolve(e)]
                      );
                  }
                });
              });
            }),
            (e.prototype.teardown = function () {
              return (0, b.sH)(this, void 0, void 0, function () {
                return (0, b.YH)(this, function (e) {
                  return rT(), (this.config = null), [2];
                });
              });
            }),
            (e.prototype.getSessionReplayProperties = function () {
              return rx();
            }),
            e
          );
        })(),
        rL = function (e) {
          return new rR(e);
        };
    },
    89776: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    90410: (e, t) => {
      "use strict";
      function n(e, t, r = !1) {
        return t
          ? Object.keys(e)
              .filter((e) => (r ? !t.includes(e) : t.includes(e)))
              .reduce((t, n) => ((t[n] = e[n]), t), {})
          : {};
      }
      function r(e, t, n, r) {
        let o =
          r && Object.keys(r).length > 0
            ? new URL(Object.values(r)[0], e)
            : new URL(e);
        return (
          t &&
            n &&
            t.forEach((e) => {
              n[e] && o.searchParams.set(e, n[e]);
            }),
          o.toString()
        );
      }
      function o(e, t, n, o, i) {
        var s;
        if (!t) return `<${e}></${e}>`;
        let a = (null === (s = t.src) || void 0 === s ? void 0 : s.url)
            ? Object.assign(Object.assign({}, t), {
                src: r(t.src.url, t.src.params, o, i),
              })
            : t,
          l = Object.keys(Object.assign(Object.assign({}, a), n)).reduce(
            (e, t) => {
              let r = null == n ? void 0 : n[t],
                o = a[t],
                i = null != r ? r : o,
                s = !0 === i ? t : `${t}="${i}"`;
              return i ? e + ` ${s}` : e;
            },
            "",
          );
        return `<${e}${l}></${e}>`;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatData = t.createHtml = t.formatUrl = void 0),
        (t.formatUrl = r),
        (t.createHtml = o),
        (t.formatData = function (e, t) {
          var i, s, a, l, u;
          let c = n(
              t,
              null === (i = e.scripts) || void 0 === i
                ? void 0
                : i.reduce(
                    (e, t) => [
                      ...e,
                      ...(Array.isArray(t.params) ? t.params : []),
                    ],
                    [],
                  ),
            ),
            d = n(
              t,
              null ===
                (a =
                  null === (s = e.html) || void 0 === s
                    ? void 0
                    : s.attributes.src) || void 0 === a
                ? void 0
                : a.params,
            ),
            h = n(t, [
              null ===
                (u =
                  null === (l = e.html) || void 0 === l
                    ? void 0
                    : l.attributes.src) || void 0 === u
                ? void 0
                : u.slugParam,
            ]),
            f = n(
              t,
              [...Object.keys(c), ...Object.keys(d), ...Object.keys(h)],
              !0,
            );
          return Object.assign(Object.assign({}, e), {
            html: e.html ? o(e.html.element, e.html.attributes, f, d, h) : null,
            scripts: e.scripts
              ? e.scripts.map((e) =>
                  Object.assign(Object.assign({}, e), {
                    url: r(e.url, e.params, c),
                  }),
                )
              : null,
          });
        });
    },
    93146: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          let { html: t, scripts: n, stylesheets: r } = (0, s.YouTubeEmbed)(e);
          return (0, o.jsx)(a.default, {
            height: e.height || null,
            width: e.width || null,
            html: t,
            dataNtpc: "YouTubeEmbed",
            children:
              null == n
                ? void 0
                : n.map((e) =>
                    (0, o.jsx)(
                      i.default,
                      { src: e.url, strategy: l[e.strategy], stylesheets: r },
                      e.url,
                    ),
                  ),
          });
        });
      let o = n(94799),
        i = r(n(95320)),
        s = n(69384),
        a = r(n(36088)),
        l = {
          server: "beforeInteractive",
          client: "afterInteractive",
          idle: "lazyOnload",
          worker: "worker",
        };
    },
    95320: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => o.a });
      var r = n(49573),
        o = n.n(r),
        i = {};
      for (let e in r) "default" !== e && (i[e] = () => r[e]);
      n.d(t, i);
    },
    97928: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__rest) ||
          function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var o = 0, r = Object.getOwnPropertySymbols(e);
                o < r.length;
                o++
              )
                0 > t.indexOf(r[o]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                  (n[r[o]] = e[r[o]]);
            return n;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleAnalytics = void 0);
      let i = o(n(41851)),
        s = n(90410);
      t.GoogleAnalytics = (e) => {
        var t = r(e, []);
        return (0, s.formatData)(i.default, t);
      };
    },
  },
]);
