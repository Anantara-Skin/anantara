(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1203],
  {
    98097: function (t, e, n) {
      "use strict";
      n.d(e, {
        r: function () {
          return a;
        },
        y: function () {
          return s;
        },
      });
      var r = n(31485),
        i = n(70798),
        o = n(58947);
      function a(t) {
        let e = {
          version: "6.5.1",
          onReady(t) {
            t();
          },
          ...t,
        };
        return (
          Object.defineProperty(e, "_setDebug", {
            get: () => i.yD,
            enumerable: !1,
          }),
          e
        );
      }
      function s(t, e, n) {
        let i = t[e];
        i &&
          !i.q &&
          i.version &&
          o.jf.warn(
            "SDK is loaded more than once. This is unsupported and might have unexpected behavior.",
          ),
          (t[e] = n),
          i &&
            i.q &&
            i.q.forEach((t) =>
              (0, r.Z)(t, "onReady callback threw an error:")(),
            );
      }
    },
    55436: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return o;
        },
        y: function () {
          return a;
        },
      });
      var r = n(70798),
        i = n(59951);
      function o(t, e, n, r, i) {
        return a(t, e, [n], r, i);
      }
      function a(t, e, n, o, { once: a, capture: s, passive: u } = {}) {
        let l = (0, r.zk)((e) => {
            (e.isTrusted || e.__ddIsTrusted || t.allowUntrustedEvents) &&
              (a && p(), o(e));
          }),
          c = u ? { capture: s, passive: u } : s,
          d =
            window.EventTarget && e instanceof EventTarget
              ? window.EventTarget.prototype
              : e,
          f = (0, i.I)(d, "addEventListener");
        function p() {
          let t = (0, i.I)(d, "removeEventListener");
          n.forEach((n) => t.call(e, n, l, c));
        }
        return n.forEach((t) => f.call(e, t, l, c)), { stop: p };
      }
    },
    70606: function (t, e, n) {
      "use strict";
      n.d(e, {
        PT: function () {
          return u;
        },
        Pd: function () {
          return s;
        },
        k$: function () {
          return a;
        },
      });
      var r = n(63460),
        i = n(42322),
        o = n(55436);
      let a = {
        HIDDEN: "visibility_hidden",
        UNLOADING: "before_unload",
        PAGEHIDE: "page_hide",
        FROZEN: "page_frozen",
      };
      function s(t) {
        return new r.y((e) => {
          let { stop: n } = (0, o.y)(
              t,
              window,
              ["visibilitychange", "freeze"],
              (t) => {
                "visibilitychange" === t.type &&
                "hidden" === document.visibilityState
                  ? e.notify({ reason: a.HIDDEN })
                  : "freeze" === t.type && e.notify({ reason: a.FROZEN });
              },
              { capture: !0 },
            ),
            r = (0, o.O)(t, window, "beforeunload", () => {
              e.notify({ reason: a.UNLOADING });
            }).stop;
          return () => {
            n(), r();
          };
        });
      }
      function u(t) {
        return (0, i.TT)(a).includes(t);
      }
    },
    80320: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return o;
        },
        _: function () {
          return a;
        },
      });
      var r = n(65770),
        i = n(55436);
      function o(t, e, n) {
        return document.readyState === e || "complete" === document.readyState
          ? (n(), { stop: r.Z })
          : (0, i.O)(
              t,
              window,
              "complete" === e ? "load" : "DOMContentLoaded",
              n,
              { once: !0 },
            );
      }
      function a(t, e) {
        return new Promise((n) => {
          o(t, e, n);
        });
      }
    },
    17954: function (t, e, n) {
      "use strict";
      n.d(e, {
        DZ: function () {
          return r;
        },
        D_: function () {
          return o;
        },
        Ds: function () {
          return a;
        },
        Rg: function () {
          return l;
        },
        by: function () {
          return i;
        },
        iL: function () {
          return u;
        },
        y7: function () {
          return s;
        },
      });
      let r = "datad0g.com",
        i = "dd0g-gov.com",
        o = "datadoghq.com",
        a = "datadoghq.eu",
        s = "ddog-gov.com",
        u = "pci.browser-intake-datadoghq.com",
        l = ["ddsource", "ddtags"];
    },
    36304: function (t, e, n) {
      "use strict";
      function r() {
        var t;
        let e = window.navigator;
        return {
          status: e.onLine ? "connected" : "not_connected",
          interfaces:
            e.connection && e.connection.type ? [e.connection.type] : void 0,
          effective_type:
            null === (t = e.connection) || void 0 === t
              ? void 0
              : t.effectiveType,
        };
      }
      n.d(e, {
        T: function () {
          return r;
        },
      });
    },
    24446: function (t, e, n) {
      "use strict";
      n.d(e, {
        AP: function () {
          return u;
        },
        K$: function () {
          return s;
        },
        VZ: function () {
          return d;
        },
        cf: function () {
          return c;
        },
        mD: function () {
          return f;
        },
        un: function () {
          return l;
        },
      });
      var r = n(84422),
        i = n(11233),
        o = n(48225),
        a = n(20496);
      let s = "No stack, consider using an instance of Error";
      function u({
        stackTrace: t,
        originalError: e,
        handlingStack: n,
        componentStack: o,
        startClocks: u,
        nonErrorPrefix: p,
        source: h,
        handling: g,
      }) {
        let m = d(e),
          y =
            (null == t ? void 0 : t.message) && (null == t ? void 0 : t.name)
              ? t.message
              : m
                ? "Empty message"
                : `${p} ${(0, i.l)((0, r.N)(e))}`,
          v =
            void 0 !== t &&
            (m ||
              (t.stack.length > 0 &&
                (t.stack.length > 1 || void 0 !== t.stack[0].url)))
              ? (0, a.P3)(t)
              : s,
          _ = m ? f(e, h) : void 0,
          b = t ? t.name : void 0,
          w = l(e),
          S = c(e);
        return {
          startClocks: u,
          source: h,
          handling: g,
          handlingStack: n,
          componentStack: o,
          originalError: e,
          type: b,
          message: y,
          stack: v,
          causes: _,
          fingerprint: w,
          context: S,
        };
      }
      function l(t) {
        return d(t) && "dd_fingerprint" in t
          ? String(t.dd_fingerprint)
          : void 0;
      }
      function c(t) {
        if (null !== t && "object" == typeof t && "dd_context" in t)
          return t.dd_context;
      }
      function d(t) {
        return (
          t instanceof Error ||
          "[object Error]" === Object.prototype.toString.call(t)
        );
      }
      function f(t, e) {
        let n = t,
          r = [];
        for (; d(null == n ? void 0 : n.cause) && r.length < 10; ) {
          let t = (0, o._)(n.cause);
          r.push({
            message: n.cause.message,
            source: e,
            type: null == t ? void 0 : t.name,
            stack: t && (0, a.P3)(t),
          }),
            (n = n.cause);
        }
        return r.length ? r : void 0;
      }
    },
    43678: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return r;
        },
      });
      let r = {
        AGENT: "agent",
        CONSOLE: "console",
        CUSTOM: "custom",
        LOGGER: "logger",
        NETWORK: "network",
        SOURCE: "source",
        REPORT: "report",
      };
    },
    25447: function (t, e, n) {
      "use strict";
      n.d(e, {
        Uo: function () {
          return O;
        },
        eJ: function () {
          return C;
        },
        Sz: function () {
          return E;
        },
        eG: function () {
          return R;
        },
        kx: function () {
          return A;
        },
        VG: function () {
          return T;
        },
        VL: function () {
          return x;
        },
      });
      var r = n(58947),
        i = n(24446),
        o = n(20496),
        a = n(99909),
        s = n(17954),
        u = n(63460),
        l = n(85313),
        c = n(70798),
        d = n(38167),
        f = n(8456),
        p = n(11233),
        h = n(96886),
        g = n(48225),
        m = n(36304),
        y = n(93524);
      let v = "configuration",
        _ = "usage",
        b = [
          "https://www.datadoghq-browser-agent.com",
          "https://www.datad0g-browser-agent.com",
          "https://d3uc069fcn7uxw.cloudfront.net",
          "https://d20xtzwzcl0ceb.cloudfront.net",
          "http://localhost",
          "<anonymous>",
        ],
        w = [s.y7],
        S = (0, y.D)(),
        k = (t) => {
          S.add(() => k(t));
        };
      function x(t, e) {
        let n;
        let r = new u.y(),
          i = new Set(),
          o = !w.includes(e.site) && (0, f.y7)(e.telemetrySampleRate),
          s = {
            log: o,
            [v]: o && (0, f.y7)(e.telemetryConfigurationSampleRate),
            [_]: o && (0, f.y7)(e.telemetryUsageSampleRate),
          },
          g = {
            is_local_file: "file:" === window.location.protocol,
            is_worker: "WorkerGlobalScope" in self,
          };
        return (
          (k = (o) => {
            let u = (0, p.l)(o);
            if (
              s[o.type] &&
              i.size < e.maxTelemetryEventsPerPage &&
              !i.has(u)
            ) {
              let e = (0, h.$e)(
                {
                  type: "telemetry",
                  date: (0, l.n$)(),
                  service: t,
                  version: "6.5.1",
                  source: "browser",
                  _dd: { format_version: 2 },
                  telemetry: (0, h.$e)(o, {
                    runtime_env: g,
                    connectivity: (0, m.T)(),
                    sdk_setup: "npm",
                  }),
                  experimental_features: Array.from((0, a.u0)()),
                },
                void 0 !== n ? n() : {},
              );
              r.notify(e), (0, d.j)("telemetry", e), i.add(u);
            }
          }),
          (0, c.P_)(E),
          {
            setContextProvider: (t) => {
              n = t;
            },
            observable: r,
            enabled: o,
          }
        );
      }
      function A() {
        S.drain();
      }
      function T(t) {
        return t.site === s.DZ;
      }
      function C(t, e) {
        (0, c.DV)(r.vA.debug, t, e),
          k({ type: "log", message: t, status: "debug", ...e });
      }
      function E(t, e) {
        k({
          type: "log",
          status: "error",
          ...(function (t) {
            if ((0, i.VZ)(t)) {
              let e = (0, g._)(t);
              return {
                error: {
                  kind: e.name,
                  stack: (0, o.P3)(
                    ((e.stack = e.stack.filter(
                      (t) => !t.url || b.some((e) => t.url.startsWith(e)),
                    )),
                    e),
                  ),
                },
                message: e.message,
              };
            }
            return {
              error: { stack: i.K$ },
              message: `Uncaught ${(0, p.l)(t)}`,
            };
          })(t),
          ...e,
        });
      }
      function O(t) {
        k({ type: v, configuration: t });
      }
      function R(t) {
        k({ type: _, usage: t });
      }
    },
    93524: function (t, e, n) {
      "use strict";
      n.d(e, {
        D: function () {
          return i;
        },
      });
      var r = n(38475);
      function i() {
        let t = [];
        return {
          add: (e) => {
            t.push(e) > 500 && t.splice(0, 1);
          },
          remove: (e) => {
            (0, r.c)(t, e);
          },
          drain: (e) => {
            t.forEach((t) => t(e)), (t.length = 0);
          },
        };
      }
    },
    31485: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var r = n(58947);
      function i(t, e) {
        return (...n) => {
          try {
            return t(...n);
          } catch (t) {
            r.jf.error(e, t);
          }
        };
      }
    },
    58947: function (t, e, n) {
      "use strict";
      n.d(e, {
        IA: function () {
          return c;
        },
        Qo: function () {
          return l;
        },
        aA: function () {
          return u;
        },
        jG: function () {
          return i;
        },
        jf: function () {
          return s;
        },
        vA: function () {
          return r;
        },
      });
      let r = {
          log: "log",
          debug: "debug",
          info: "info",
          warn: "warn",
          error: "error",
        },
        i = console,
        o = {};
      Object.keys(r).forEach((t) => {
        o[t] = i[t];
      });
      let a = "Datadog Browser SDK:",
        s = {
          debug: o.debug.bind(i, a),
          log: o.log.bind(i, a),
          info: o.info.bind(i, a),
          warn: o.warn.bind(i, a),
          error: o.error.bind(i, a),
        },
        u = "https://docs.datadoghq.com",
        l = `${u}/real_user_monitoring/browser/troubleshooting`,
        c = "More details:";
    },
    99909: function (t, e, n) {
      "use strict";
      n.d(e, {
        W_: function () {
          return u;
        },
        fG: function () {
          return s;
        },
        u0: function () {
          return l;
        },
        uh: function () {
          return i;
        },
      });
      var r,
        i,
        o = n(46677);
      ((r = i || (i = {})).WRITABLE_RESOURCE_GRAPHQL =
        "writable_resource_graphql"),
        (r.MISSING_URL_CONTEXT_TELEMETRY = "missing_url_context_telemetry");
      let a = new Set();
      function s(t) {
        Array.isArray(t) &&
          (function (t) {
            t.forEach((t) => {
              a.add(t);
            });
          })(t.filter((t) => (0, o.E5)(i, t)));
      }
      function u(t) {
        return a.has(t);
      }
      function l() {
        return a;
      }
    },
    53334: function (t, e, n) {
      "use strict";
      function r() {
        if ("object" == typeof globalThis) return globalThis;
        Object.defineProperty(Object.prototype, "_dd_temp_", {
          get() {
            return this;
          },
          configurable: !0,
        });
        let t = _dd_temp_;
        return (
          delete Object.prototype._dd_temp_,
          "object" != typeof t &&
            ("object" == typeof self
              ? (t = self)
              : (t = "object" == typeof window ? window : {})),
          t
        );
      }
      n.d(e, {
        R: function () {
          return r;
        },
      });
    },
    59951: function (t, e, n) {
      "use strict";
      n.d(e, {
        I: function () {
          return i;
        },
      });
      var r = n(53334);
      function i(t, e) {
        let n;
        let i = (0, r.R)();
        return (
          i.Zone &&
            "function" == typeof i.Zone.__symbol__ &&
            (n = t[i.Zone.__symbol__(e)]),
          n || (n = t[e]),
          n
        );
      }
    },
    70650: function (t, e, n) {
      "use strict";
      n.d(e, {
        S: function () {
          return s;
        },
        X: function () {
          return u;
        },
      });
      var r = n(4483),
        i = n(70798),
        o = n(65770),
        a = n(20496);
      function s(t, e, n, { computeHandlingStack: r } = {}) {
        let s = t[e];
        if ("function" != typeof s) {
          if (!(e in t && e.startsWith("on"))) return { stop: o.Z };
          s = o.Z;
        }
        let u = !1,
          l = function () {
            let t;
            if (u) return s.apply(this, arguments);
            let e = Array.from(arguments);
            (0, i.L6)(n, null, [
              {
                target: this,
                parameters: e,
                onPostCall: (e) => {
                  t = e;
                },
                handlingStack: r ? (0, a.Xp)("instrumented method") : void 0,
              },
            ]);
            let o = s.apply(this, e);
            return t && (0, i.L6)(t, null, [o]), o;
          };
        return (
          (t[e] = l),
          {
            stop: () => {
              (u = !0), t[e] === l && (t[e] = s);
            },
          }
        );
      }
      function u(t, e, n) {
        let i = Object.getOwnPropertyDescriptor(t, e);
        if (!i || !i.set || !i.configurable) return { stop: o.Z };
        let a = o.Z,
          s = (t, e) => {
            (0, r.iK)(() => {
              s !== a && n(t, e);
            }, 0);
          },
          u = function (t) {
            i.set.call(this, t), s(this, t);
          };
        return (
          Object.defineProperty(t, e, { set: u }),
          {
            stop: () => {
              var n;
              (null === (n = Object.getOwnPropertyDescriptor(t, e)) ||
              void 0 === n
                ? void 0
                : n.set) === u && Object.defineProperty(t, e, i),
                (s = a);
            },
          }
        );
      }
    },
    96886: function (t, e, n) {
      "use strict";
      n.d(e, {
        $e: function () {
          return a;
        },
        I8: function () {
          return o;
        },
      });
      var r = n(58608);
      function i(
        t,
        e,
        n = (function () {
          if ("undefined" != typeof WeakSet) {
            let t = new WeakSet();
            return {
              hasAlreadyBeenSeen(e) {
                let n = t.has(e);
                return n || t.add(e), n;
              },
            };
          }
          let t = [];
          return {
            hasAlreadyBeenSeen(e) {
              let n = t.indexOf(e) >= 0;
              return n || t.push(e), n;
            },
          };
        })(),
      ) {
        if (void 0 === e) return t;
        if ("object" != typeof e || null === e) return e;
        if (e instanceof Date) return new Date(e.getTime());
        if (e instanceof RegExp) {
          let t =
            e.flags ||
            [
              e.global ? "g" : "",
              e.ignoreCase ? "i" : "",
              e.multiline ? "m" : "",
              e.sticky ? "y" : "",
              e.unicode ? "u" : "",
            ].join("");
          return new RegExp(e.source, t);
        }
        if (n.hasAlreadyBeenSeen(e)) return;
        if (Array.isArray(e)) {
          let r = Array.isArray(t) ? t : [];
          for (let t = 0; t < e.length; ++t) r[t] = i(r[t], e[t], n);
          return r;
        }
        let o = "object" === (0, r.o)(t) ? t : {};
        for (let t in e)
          Object.prototype.hasOwnProperty.call(e, t) &&
            (o[t] = i(o[t], e[t], n));
        return o;
      }
      function o(t) {
        return i(void 0, t);
      }
      function a(...t) {
        let e;
        for (let n of t) null != n && (e = i(e, n));
        return e;
      }
    },
    70798: function (t, e, n) {
      "use strict";
      let r;
      n.d(e, {
        $y: function () {
          return c;
        },
        DV: function () {
          return d;
        },
        L6: function () {
          return l;
        },
        P_: function () {
          return a;
        },
        yD: function () {
          return s;
        },
        zk: function () {
          return u;
        },
      });
      var i = n(58947);
      let o = !1;
      function a(t) {
        r = t;
      }
      function s(t) {
        o = t;
      }
      function u(t) {
        return function () {
          return l(t, this, arguments);
        };
      }
      function l(t, e, n) {
        try {
          return t.apply(e, n);
        } catch (t) {
          c(t);
        }
      }
      function c(t) {
        if ((d(t), r))
          try {
            r(t);
          } catch (t) {
            d(t);
          }
      }
      function d(...t) {
        o && i.jf.error("[MONITOR]", ...t);
      }
    },
    63460: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return i;
        },
        y: function () {
          return r;
        },
      });
      class r {
        constructor(t) {
          (this.onFirstSubscribe = t), (this.observers = []);
        }
        subscribe(t) {
          return (
            this.observers.push(t),
            1 === this.observers.length &&
              this.onFirstSubscribe &&
              (this.onLastUnsubscribe = this.onFirstSubscribe(this) || void 0),
            {
              unsubscribe: () => {
                (this.observers = this.observers.filter((e) => t !== e)),
                  !this.observers.length &&
                    this.onLastUnsubscribe &&
                    this.onLastUnsubscribe();
              },
            }
          );
        }
        notify(t) {
          this.observers.forEach((e) => e(t));
        }
      }
      function i(...t) {
        return new r((e) => {
          let n = t.map((t) => t.subscribe((t) => e.notify(t)));
          return () => n.forEach((t) => t.unsubscribe());
        });
      }
    },
    81186: function (t, e, n) {
      "use strict";
      n.d(e, {
        Kk: function () {
          return a;
        },
      });
      var r = n(4483),
        i = n(70798),
        o = n(85313);
      function a(t, e) {
        if (window.requestIdleCallback && window.cancelIdleCallback) {
          let n = window.requestIdleCallback((0, i.zk)(t), e);
          return () => window.cancelIdleCallback(n);
        }
        return (function (t) {
          let e = (0, o.m6)(),
            n = (0, r.iK)(() => {
              t({
                didTimeout: !1,
                timeRemaining: () => Math.max(0, 50 - ((0, o.m6)() - e)),
              });
            }, 0);
          return () => (0, r.gr)(n);
        })(t);
      }
    },
    38167: function (t, e, n) {
      "use strict";
      function r(t, e) {
        let n = window.__ddBrowserSdkExtensionCallback;
        n && n({ type: t, payload: e });
      }
      n.d(e, {
        j: function () {
          return r;
        },
      });
    },
    11233: function (t, e, n) {
      "use strict";
      n.d(e, {
        l: function () {
          return i;
        },
        y: function () {
          return o;
        },
      });
      var r = n(65770);
      function i(t, e, n) {
        if ("object" != typeof t || null === t) return JSON.stringify(t);
        let r = o(Object.prototype),
          i = o(Array.prototype),
          a = o(Object.getPrototypeOf(t)),
          s = o(t);
        try {
          return JSON.stringify(t, e, n);
        } catch (t) {
          return "<error: unable to serialize object>";
        } finally {
          r(), i(), a(), s();
        }
      }
      function o(t) {
        let e = t.toJSON;
        return e
          ? (delete t.toJSON,
            () => {
              t.toJSON = e;
            })
          : r.Z;
      }
    },
    84422: function (t, e, n) {
      "use strict";
      n.d(e, {
        N: function () {
          return s;
        },
      });
      var r = n(58947),
        i = n(12541),
        o = n(11233);
      let a = 220 * i.Hi;
      function s(t, e = a) {
        let n = (0, o.y)(Object.prototype),
          r = (0, o.y)(Array.prototype),
          i = [],
          s = new WeakMap(),
          c = u(t, "$", void 0, i, s),
          d = JSON.stringify(c),
          f = d ? d.length : 0;
        if (f > e) {
          l(e, "discarded", t);
          return;
        }
        for (; i.length > 0 && f < e; ) {
          let n = i.shift(),
            r = 0;
          if (Array.isArray(n.source))
            for (let o = 0; o < n.source.length; o++) {
              let a = u(n.source[o], n.path, o, i, s);
              if (
                (void 0 !== a ? (f += JSON.stringify(a).length) : (f += 4),
                (f += r),
                (r = 1),
                f > e)
              ) {
                l(e, "truncated", t);
                break;
              }
              n.target[o] = a;
            }
          else
            for (let o in n.source)
              if (Object.prototype.hasOwnProperty.call(n.source, o)) {
                let a = u(n.source[o], n.path, o, i, s);
                if (
                  (void 0 !== a &&
                    ((f += JSON.stringify(a).length + r + o.length + 3),
                    (r = 1)),
                  f > e)
                ) {
                  l(e, "truncated", t);
                  break;
                }
                n.target[o] = a;
              }
        }
        return n(), r(), c;
      }
      function u(t, e, n, r, i) {
        let o = (function (t) {
          if (t && "function" == typeof t.toJSON)
            try {
              return t.toJSON();
            } catch (t) {}
          return t;
        })(t);
        if (!o || "object" != typeof o)
          return "bigint" == typeof o
            ? `[BigInt] ${o.toString()}`
            : "function" == typeof o
              ? `[Function] ${o.name || "unknown"}`
              : "symbol" == typeof o
                ? `[Symbol] ${o.description || o.toString()}`
                : o;
        let a = (function t(e) {
          try {
            if (e instanceof Event)
              return {
                type: e.type,
                isTrusted: e.isTrusted,
                currentTarget: e.currentTarget ? t(e.currentTarget) : null,
                target: e.target ? t(e.target) : null,
              };
            if (e instanceof RegExp) return `[RegExp] ${e.toString()}`;
            let n = Object.prototype.toString.call(e).match(/\[object (.*)\]/);
            if (n && n[1]) return `[${n[1]}]`;
          } catch (t) {}
          return "[Unserializable]";
        })(o);
        if ("[Object]" !== a && "[Array]" !== a && "[Error]" !== a) return a;
        if (i.has(t)) return `[Reference seen at ${i.get(t)}]`;
        let s = void 0 !== n ? `${e}.${n}` : e,
          u = Array.isArray(o) ? [] : {};
        return i.set(t, s), r.push({ source: o, target: u, path: s }), u;
      }
      function l(t, e, n) {
        r.jf.warn(
          `The data provided has been ${e} as it is over the limit of ${t} characters:`,
          n,
        );
      }
    },
    48225: function (t, e, n) {
      "use strict";
      function r(t) {
        let e = [],
          n = f(t, "stack"),
          r = String(t);
        return (
          n && n.startsWith(r) && (n = n.slice(r.length)),
          n &&
            n.split("\n").forEach((t) => {
              let n =
                (function (t) {
                  let e = a.exec(t);
                  if (!e) return;
                  let n = e[2] && 0 === e[2].indexOf("native"),
                    r = e[2] && 0 === e[2].indexOf("eval"),
                    i = s.exec(e[2]);
                  return (
                    r && i && ((e[2] = i[1]), (e[3] = i[2]), (e[4] = i[3])),
                    {
                      args: n ? [e[2]] : [],
                      column: e[4] ? +e[4] : void 0,
                      func: e[1] || "?",
                      line: e[3] ? +e[3] : void 0,
                      url: n ? void 0 : e[2],
                    }
                  );
                })(t) ||
                (function (t) {
                  let e = u.exec(t);
                  if (e)
                    return {
                      args: [],
                      column: e[3] ? +e[3] : void 0,
                      func: "?",
                      line: e[2] ? +e[2] : void 0,
                      url: e[1],
                    };
                })(t) ||
                (function (t) {
                  let e = l.exec(t);
                  if (e)
                    return {
                      args: [],
                      column: e[4] ? +e[4] : void 0,
                      func: e[1] || "?",
                      line: +e[3],
                      url: e[2],
                    };
                })(t) ||
                (function (t) {
                  let e = c.exec(t);
                  if (!e) return;
                  let n = e[3] && e[3].indexOf(" > eval") > -1,
                    r = d.exec(e[3]);
                  return (
                    n && r && ((e[3] = r[1]), (e[4] = r[2]), (e[5] = void 0)),
                    {
                      args: e[2] ? e[2].split(",") : [],
                      column: e[5] ? +e[5] : void 0,
                      func: e[1] || "?",
                      line: e[4] ? +e[4] : void 0,
                      url: e[3],
                    }
                  );
                })(t);
              n && (!n.func && n.line && (n.func = "?"), e.push(n));
            }),
          { message: f(t, "message"), name: f(t, "name"), stack: e }
        );
      }
      n.d(e, {
        _: function () {
          return r;
        },
        f: function () {
          return p;
        },
      });
      let i =
          "((?:file|https?|blob|chrome-extension|electron|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)",
        o = "(?::(\\d+))",
        a = RegExp(`^\\s*at (.*?) ?\\(${i}${o}?${o}?\\)?\\s*$`, "i"),
        s = RegExp(`\\((\\S*)${o}${o}\\)`),
        u = RegExp(`^\\s*at ?${i}${o}?${o}??\\s*$`, "i"),
        l =
          /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        c =
          /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
        d = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
      function f(t, e) {
        if ("object" != typeof t || !t || !(e in t)) return;
        let n = t[e];
        return "string" == typeof n ? n : void 0;
      }
      function p(t, e, n, r) {
        let i, o;
        let { name: a, message: s } =
          ("[object String]" === {}.toString.call(t) && ([, i, o] = h.exec(t)),
          { name: i, message: o });
        return { name: a, message: s, stack: [{ url: e, column: r, line: n }] };
      }
      let h =
        /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/;
    },
    20496: function (t, e, n) {
      "use strict";
      n.d(e, {
        P3: function () {
          return a;
        },
        Xp: function () {
          return o;
        },
        jN: function () {
          return s;
        },
      });
      var r = n(70798),
        i = n(48225);
      function o(t) {
        let e;
        let n = Error(t);
        return (
          (n.name = "HandlingStack"),
          (0, r.L6)(() => {
            let t = (0, i._)(n);
            (t.stack = t.stack.slice(2)), (e = a(t));
          }),
          e
        );
      }
      function a(t) {
        let e = s(t);
        return (
          t.stack.forEach((t) => {
            let n = "?" === t.func ? "<anonymous>" : t.func,
              r = t.args && t.args.length > 0 ? `(${t.args.join(", ")})` : "",
              i = t.line ? `:${t.line}` : "",
              o = t.line && t.column ? `:${t.column}` : "";
            e += `
  at ${n}${r} @ ${t.url}${i}${o}`;
          }),
          e
        );
      }
      function s(t) {
        return `${t.name || "Error"}: ${t.message}`;
      }
    },
    4483: function (t, e, n) {
      "use strict";
      n.d(e, {
        Zi: function () {
          return u;
        },
        cv: function () {
          return l;
        },
        gr: function () {
          return s;
        },
        iK: function () {
          return a;
        },
      });
      var r = n(59951),
        i = n(70798),
        o = n(53334);
      function a(t, e) {
        return (0, r.I)((0, o.R)(), "setTimeout")((0, i.zk)(t), e);
      }
      function s(t) {
        (0, r.I)((0, o.R)(), "clearTimeout")(t);
      }
      function u(t, e) {
        return (0, r.I)((0, o.R)(), "setInterval")((0, i.zk)(t), e);
      }
      function l(t) {
        (0, r.I)((0, o.R)(), "clearInterval")(t);
      }
    },
    38475: function (t, e, n) {
      "use strict";
      function r(t, e) {
        let n = t.indexOf(e);
        n >= 0 && t.splice(n, 1);
      }
      n.d(e, {
        c: function () {
          return r;
        },
      });
    },
    14851: function (t, e, n) {
      "use strict";
      let r;
      function i() {
        return 0 === a();
      }
      function o() {
        return 1 === a();
      }
      function a() {
        return null != r
          ? r
          : (r = (function (t = window) {
              var e;
              let n = t.navigator.userAgent;
              return t.chrome || /HeadlessChrome/.test(n)
                ? 0
                : (null === (e = t.navigator.vendor) || void 0 === e
                      ? void 0
                      : e.indexOf("Apple")) === 0 ||
                    (/safari/i.test(n) && !/chrome|android/i.test(n))
                  ? 1
                  : 2;
            })());
      }
      n.d(e, {
        G6: function () {
          return o;
        },
        mJ: function () {
          return i;
        },
      });
    },
    12541: function (t, e, n) {
      "use strict";
      n.d(e, {
        Hi: function () {
          return r;
        },
        Kb: function () {
          return s;
        },
        X9: function () {
          return i;
        },
        qt: function () {
          return a;
        },
      });
      let r = 1024,
        i = 1048576,
        o = /[^\u0000-\u007F]/;
      function a(t) {
        return o.test(t)
          ? void 0 !== window.TextEncoder
            ? new TextEncoder().encode(t).length
            : new Blob([t]).size
          : t.length;
      }
      function s(t) {
        let e = new Uint8Array(t.reduce((t, e) => t + e.length, 0)),
          n = 0;
        for (let r of t) e.set(r, n), (n += r.length);
        return e;
      }
    },
    65770: function (t, e, n) {
      "use strict";
      n.d(e, {
        P: function () {
          return i;
        },
        Z: function () {
          return o;
        },
      });
      var r = n(4483);
      function i(t, e, n) {
        let i, o;
        let a = !n || void 0 === n.leading || n.leading,
          s = !n || void 0 === n.trailing || n.trailing,
          u = !1;
        return {
          throttled: (...n) => {
            if (u) {
              i = n;
              return;
            }
            a ? t(...n) : (i = n),
              (u = !0),
              (o = (0, r.iK)(() => {
                s && i && t(...i), (u = !1), (i = void 0);
              }, e));
          },
          cancel: () => {
            (0, r.gr)(o), (u = !1), (i = void 0);
          },
        };
      }
      function o() {}
    },
    8456: function (t, e, n) {
      "use strict";
      function r(t) {
        return 0 !== t && 100 * Math.random() <= t;
      }
      function i(t, e) {
        return +t.toFixed(e);
      }
      function o(t) {
        return a(t) && t >= 0 && t <= 100;
      }
      function a(t) {
        return "number" == typeof t;
      }
      n.d(e, {
        NM: function () {
          return i;
        },
        hj: function () {
          return a;
        },
        y7: function () {
          return r;
        },
        zz: function () {
          return o;
        },
      });
    },
    46677: function (t, e, n) {
      "use strict";
      function r(t) {
        return { ...t };
      }
      function i(t, e) {
        return Object.keys(t).some((n) => t[n] === e);
      }
      function o(t) {
        return 0 === Object.keys(t).length;
      }
      function a(t, e) {
        let n = {};
        for (let r of Object.keys(t)) n[r] = e(t[r]);
        return n;
      }
      n.d(e, {
        E5: function () {
          return i;
        },
        Q8: function () {
          return a;
        },
        Qr: function () {
          return o;
        },
        mv: function () {
          return r;
        },
      });
    },
    42322: function (t, e, n) {
      "use strict";
      function r(t, e) {
        for (let n = t.length - 1; n >= 0; n -= 1) {
          let r = t[n];
          if (e(r, n, t)) return r;
        }
      }
      function i(t) {
        return Object.values(t);
      }
      function o(t) {
        return Object.entries(t);
      }
      n.d(e, {
        TT: function () {
          return i;
        },
        dF: function () {
          return r;
        },
        qP: function () {
          return o;
        },
      });
    },
    89173: function (t, e, n) {
      "use strict";
      function r(t) {
        return t >= 500;
      }
      function i(t) {
        try {
          return t.clone();
        } catch (t) {
          return;
        }
      }
      n.d(e, {
        o: function () {
          return r;
        },
        u: function () {
          return i;
        },
      });
    },
    85313: function (t, e, n) {
      "use strict";
      let r;
      n.d(e, {
        $I: function () {
          return m;
        },
        Cn: function () {
          return w;
        },
        DY: function () {
          return l;
        },
        P5: function () {
          return u;
        },
        QA: function () {
          return d;
        },
        WK: function () {
          return _;
        },
        WT: function () {
          return o;
        },
        _J: function () {
          return v;
        },
        _q: function () {
          return g;
        },
        c0: function () {
          return f;
        },
        cQ: function () {
          return y;
        },
        dV: function () {
          return s;
        },
        lO: function () {
          return c;
        },
        m6: function () {
          return p;
        },
        n$: function () {
          return h;
        },
        ni: function () {
          return b;
        },
        yR: function () {
          return a;
        },
      });
      var i = n(8456);
      let o = 1e3,
        a = 6e4,
        s = 36e5,
        u = 31536e6;
      function l(t) {
        return {
          relative: t,
          timeStamp: (function (t) {
            let e = p() - performance.now();
            return e > S() ? Math.round(e + t) : Math.round(S() + t);
          })(t),
        };
      }
      function c(t) {
        return { relative: b(t), timeStamp: t };
      }
      function d() {
        return Math.round(p() - (S() + performance.now()));
      }
      function f(t) {
        return (0, i.hj)(t) ? (0, i.NM)(1e6 * t, 0) : t;
      }
      function p() {
        return new Date().getTime();
      }
      function h() {
        return p();
      }
      function g() {
        return performance.now();
      }
      function m() {
        return { relative: g(), timeStamp: h() };
      }
      function y() {
        return { relative: 0, timeStamp: S() };
      }
      function v(t, e) {
        return e - t;
      }
      function _(t, e) {
        return t + e;
      }
      function b(t) {
        return t - S();
      }
      function w(t) {
        return t < u;
      }
      function S() {
        return void 0 === r && (r = performance.timing.navigationStart), r;
      }
    },
    58608: function (t, e, n) {
      "use strict";
      function r(t) {
        return null === t ? "null" : Array.isArray(t) ? "array" : typeof t;
      }
      n.d(e, {
        o: function () {
          return r;
        },
      });
    },
    27073: function (t, e, n) {
      "use strict";
      let r;
      n.d(e, {
        D5: function () {
          return o;
        },
        Q2: function () {
          return u;
        },
        jv: function () {
          return a;
        },
        ye: function () {
          return s;
        },
      });
      var i = n(11233);
      function o(t) {
        return u(t, location.href).href;
      }
      function a(t) {
        try {
          return !!u(t);
        } catch (t) {
          return !1;
        }
      }
      function s(t) {
        let e = u(t).pathname;
        return "/" === e[0] ? e : `/${e}`;
      }
      function u(t, e) {
        let n = (function () {
          if (void 0 === r)
            try {
              let t = new l("http://test/path");
              r = "http://test/path" === t.href;
            } catch (t) {
              r = !1;
            }
          return r ? l : void 0;
        })();
        if (n)
          try {
            return void 0 !== e ? new n(t, e) : new n(t);
          } catch (n) {
            throw Error(
              `Failed to construct URL: ${String(n)} ${(0, i.l)({
                url: t,
                base: e,
              })}`,
            );
          }
        if (void 0 === e && !/:/.test(t)) throw Error(`Invalid URL: '${t}'`);
        let o = document,
          a = o.createElement("a");
        if (void 0 !== e) {
          let t = (o =
            document.implementation.createHTMLDocument("")).createElement(
            "base",
          );
          (t.href = e), o.head.appendChild(t), o.body.appendChild(a);
        }
        return (a.href = t), a;
      }
      let l = URL;
    },
    58729: function (t, e, n) {
      "use strict";
      n.d(e, {
        Ad: function () {
          return i;
        },
        ke: function () {
          return o;
        },
        xT: function () {
          return a;
        },
      });
      var r = n(53334);
      function i() {
        let t = (0, r.R)().DatadogEventBridge;
        if (t)
          return {
            getCapabilities() {
              var e;
              return JSON.parse(
                (null === (e = t.getCapabilities) || void 0 === e
                  ? void 0
                  : e.call(t)) || "[]",
              );
            },
            getPrivacyLevel() {
              var e;
              return null === (e = t.getPrivacyLevel) || void 0 === e
                ? void 0
                : e.call(t);
            },
            getAllowedWebViewHosts: () =>
              JSON.parse(t.getAllowedWebViewHosts()),
            send(e, n, r) {
              t.send(
                JSON.stringify({
                  eventType: e,
                  event: n,
                  view: r ? { id: r } : void 0,
                }),
              );
            },
          };
      }
      function o(t) {
        let e = i();
        return !!e && e.getCapabilities().includes(t);
      }
      function a(t) {
        var e;
        void 0 === t &&
          (t =
            null === (e = (0, r.R)().location) || void 0 === e
              ? void 0
              : e.hostname);
        let n = i();
        return (
          !!n &&
          n.getAllowedWebViewHosts().some((e) => t === e || t.endsWith(`.${e}`))
        );
      }
    },
    91260: function (t, e, n) {
      "use strict";
      n.d(e, {
        UF: function () {
          return _;
        },
      });
      var r = n(25447),
        i = n(70798),
        o = n(55436),
        a = n(4483),
        s = n(85313),
        u = n(12541),
        l = n(89173),
        c = n(43678);
      let d = 80 * u.Hi,
        f = 3 * u.X9,
        p = s.yR,
        h = s.WT;
      function g(t, e, n, r, i) {
        0 === e.transportStatus &&
        0 === e.queuedPayloads.size() &&
        e.bandwidthMonitor.canHandle(t)
          ? m(t, e, n, {
              onSuccess: () => y(0, e, n, r, i),
              onFailure: () => {
                e.queuedPayloads.enqueue(t),
                  (function t(e, n, r, i) {
                    2 === e.transportStatus &&
                      (0, a.iK)(() => {
                        m(e.queuedPayloads.first(), e, n, {
                          onSuccess: () => {
                            e.queuedPayloads.dequeue(),
                              (e.currentBackoffTime = h),
                              y(1, e, n, r, i);
                          },
                          onFailure: () => {
                            (e.currentBackoffTime = Math.min(
                              p,
                              2 * e.currentBackoffTime,
                            )),
                              t(e, n, r, i);
                          },
                        });
                      }, e.currentBackoffTime);
                  })(e, n, r, i);
              },
            })
          : e.queuedPayloads.enqueue(t);
      }
      function m(t, e, n, { onSuccess: r, onFailure: i }) {
        e.bandwidthMonitor.add(t),
          n(t, (n) => {
            e.bandwidthMonitor.remove(t),
              "opaque" !== n.type &&
              ((0 === n.status && !navigator.onLine) ||
                408 === n.status ||
                429 === n.status ||
                (0, l.o)(n.status))
                ? ((e.transportStatus =
                    e.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2),
                  (t.retry = {
                    count: t.retry ? t.retry.count + 1 : 1,
                    lastFailureStatus: n.status,
                  }),
                  i())
                : ((e.transportStatus = 0), r());
          });
      }
      function y(t, e, n, r, i) {
        0 === t &&
          e.queuedPayloads.isFull() &&
          !e.queueFullReported &&
          (i({
            message: `Reached max ${r} events size queued for upload: ${
              f / u.X9
            }MiB`,
            source: c.z.AGENT,
            startClocks: (0, s.$I)(),
          }),
          (e.queueFullReported = !0));
        let o = e.queuedPayloads;
        for (e.queuedPayloads = v(); o.size() > 0; ) g(o.dequeue(), e, n, r, i);
      }
      function v() {
        let t = [];
        return {
          bytesCount: 0,
          enqueue(e) {
            this.isFull() || (t.push(e), (this.bytesCount += e.bytesCount));
          },
          first: () => t[0],
          dequeue() {
            let e = t.shift();
            return e && (this.bytesCount -= e.bytesCount), e;
          },
          size: () => t.length,
          isFull() {
            return this.bytesCount >= f;
          },
        };
      }
      function _(t, e, n) {
        let o = {
            transportStatus: 0,
            currentBackoffTime: h,
            bandwidthMonitor: {
              ongoingRequestCount: 0,
              ongoingByteCount: 0,
              canHandle(t) {
                return (
                  0 === this.ongoingRequestCount ||
                  (this.ongoingByteCount + t.bytesCount <= d &&
                    this.ongoingRequestCount < 32)
                );
              },
              add(t) {
                (this.ongoingRequestCount += 1),
                  (this.ongoingByteCount += t.bytesCount);
              },
              remove(t) {
                (this.ongoingRequestCount -= 1),
                  (this.ongoingByteCount -= t.bytesCount);
              },
            },
            queuedPayloads: v(),
            queueFullReported: !1,
          },
          a = (n, r) => {
            (function () {
              try {
                return window.Request && "keepalive" in new Request("http://a");
              } catch (t) {
                return !1;
              }
            })() && n.bytesCount < e
              ? fetch(t.build("fetch", n), {
                  method: "POST",
                  body: n.data,
                  keepalive: !0,
                  mode: "cors",
                }).then(
                  (0, i.zk)((t) =>
                    null == r ? void 0 : r({ status: t.status, type: t.type }),
                  ),
                  (0, i.zk)(() => {
                    w(t.build("xhr", n), n.data, r);
                  }),
                )
              : w(t.build("xhr", n), n.data, r);
          };
        return {
          send: (e) => {
            g(e, o, a, t.trackType, n);
          },
          sendOnExit: (n) => {
            !(function (t, e, n) {
              if (navigator.sendBeacon && n.bytesCount < e)
                try {
                  let e = t.build("beacon", n);
                  if (navigator.sendBeacon(e, n.data)) return;
                } catch (t) {
                  b || ((b = !0), (0, r.Sz)(t));
                }
              w(t.build("xhr", n), n.data);
            })(t, e, n);
          },
        };
      }
      let b = !1;
      function w(t, e, n) {
        let r = new XMLHttpRequest();
        r.open("POST", t, !0),
          e instanceof Blob && r.setRequestHeader("Content-Type", e.type),
          (0, o.O)(
            { allowUntrustedEvents: !0 },
            r,
            "loadend",
            () => {
              null == n || n({ status: r.status });
            },
            { once: !0 },
          ),
          r.send(e);
      }
    },
    42197: function (t, e, n) {
      "use strict";
      let r, i, o, a, s, u, l, c, d, f, p, h, g;
      n.d(e, {
        Xn: function () {
          return eq;
        },
        k6: function () {
          return eU;
        },
        zx: function () {
          return ez;
        },
        $n: function () {
          return ej;
        },
        nw: function () {
          return eL;
        },
        YO: function () {
          return e8;
        },
        Uo: function () {
          return eD;
        },
        q5: function () {
          return tY;
        },
        IE: function () {
          return eB;
        },
        SZ: function () {
          return eG;
        },
        Ow: function () {
          return eM;
        },
        $1: function () {
          return nG;
        },
        X_: function () {
          return nH;
        },
        Gm: function () {
          return rs;
        },
        FB: function () {
          return eZ;
        },
        PA: function () {
          return nQ;
        },
        Sn: function () {
          return e$;
        },
        AX: function () {
          return nK;
        },
        p2: function () {
          return e_;
        },
        aT: function () {
          return eN;
        },
        VO: function () {
          return eP;
        },
        _r: function () {
          return tZ;
        },
        Ch: function () {
          return eF;
        },
        lk: function () {
          return eb;
        },
        gR: function () {
          return eH;
        },
        iB: function () {
          return ra;
        },
      });
      var m,
        y,
        v = n(12541),
        _ = n(65770),
        b = n(11233),
        w = n(58947),
        S = n(46677);
      let k = 3 * v.Hi,
        x = 16 * v.Hi;
      function A(t) {
        let e = 0,
          { throttled: n, cancel: r } = (0, _.P)((n) => {
            (e = (0, v.qt)((0, b.l)(n))), t();
          }, 200),
          i = () => {
            r(), (e = 0);
          };
        return {
          updateCustomerData: (t) => {
            (0, S.Qr)(t) ? i() : n(t);
          },
          resetCustomerData: i,
          getBytesCount: () => e,
          stop: () => {
            r();
          },
        };
      }
      var T = n(96886),
        C = n(84422),
        E = n(63460),
        O = n(58608);
      function R(t, e, n) {
        let r = { ...t };
        for (let [i, { required: o, type: a }] of Object.entries(e))
          "string" === a && i in r && (r[i] = String(r[i])),
            !o ||
              i in t ||
              w.jf.warn(
                `The property ${i} of ${n} is required; context will not be sent to the intake.`,
              );
        return r;
      }
      function I(
        t = "",
        { customerDataTracker: e, propertiesConfig: n = {} } = {},
      ) {
        let r = {},
          i = new E.y(),
          o = {
            getContext: () => (0, T.I8)(r),
            setContext: (a) => {
              !(function (t) {
                let e = "object" === (0, O.o)(t);
                return e || w.jf.error("Unsupported context:", t), e;
              })(a)
                ? o.clearContext()
                : ((r = (0, C.N)(R(a, n, t))),
                  null == e || e.updateCustomerData(r)),
                i.notify();
            },
            setContextProperty: (o, a) => {
              (r = (0, C.N)(R({ ...r, [o]: a }, n, t))),
                null == e || e.updateCustomerData(r),
                i.notify();
            },
            removeContextProperty: (o) => {
              delete r[o],
                null == e || e.updateCustomerData(r),
                R(r, n, t),
                i.notify();
            },
            clearContext: () => {
              (r = {}), null == e || e.resetCustomerData(), i.notify();
            },
            changeObservable: i,
          };
        return o;
      }
      let N = { GRANTED: "granted", NOT_GRANTED: "not-granted" };
      var P = n(55436);
      let $ = [];
      function D(t, e, n, r) {
        let i = `_dd_c_${n}_${r}`;
        $.push(
          (0, P.O)(t, window, "storage", ({ key: t }) => {
            i === t && e.setContext(a());
          }),
        ),
          e.changeObservable.subscribe(function () {
            localStorage.setItem(i, JSON.stringify(e.getContext()));
          });
        let o = (0, T.$e)(a(), e.getContext());
        function a() {
          let t = localStorage.getItem(i);
          return t ? JSON.parse(t) : {};
        }
        (0, S.Qr)(o) || e.setContext(o);
      }
      function M() {
        let t = "",
          e = 0;
        return {
          isAsync: !1,
          get isEmpty() {
            return !t;
          },
          write(n, r) {
            let i = (0, v.qt)(n);
            (e += i), (t += n), r && r(i);
          },
          finish(t) {
            t(this.finishSync());
          },
          finishSync() {
            let n = {
              output: t,
              outputBytesCount: e,
              rawBytesCount: e,
              pendingData: "",
            };
            return (t = ""), (e = 0), n;
          },
          estimateEncodedBytesCount: (t) => t.length,
        };
      }
      var z = n(70798),
        j = n(25447),
        L = n(98097),
        U = n(20496),
        q = n(85313);
      function V(t, e) {
        e.silentMultipleInit || w.jf.error(`${t} is already initialized.`);
      }
      function B(t) {
        return t
          ? (
              parseInt(t, 10) ^
              ((16 * Math.random()) >> (parseInt(t, 10) / 4))
            ).toString(16)
          : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, B);
      }
      let F = /([\w-]+)\s*=\s*([^;]+)/g;
      function G(t, e) {
        for (F.lastIndex = 0; ; ) {
          let n = F.exec(t);
          if (n) {
            if (n[1] === e) return n[2];
          } else break;
        }
      }
      function H(t, e, n = "") {
        let r = t.charCodeAt(e - 1),
          i = r >= 55296 && r <= 56319 ? e + 1 : e;
        return t.length <= i ? t : `${t.slice(0, i)}${n}`;
      }
      function K({ vitalsByName: t, vitalsByReference: e }, n, r = {}) {
        let i = {
            name: n,
            startClocks: (0, q.$I)(),
            context: r.context,
            description: r.description,
          },
          o = { __dd_vital_reference: !0 };
        return t.set(n, i), e.set(o, i), o;
      }
      function Q(t, { vitalsByName: e, vitalsByReference: n }, r, i = {}) {
        let o = "string" == typeof r ? e.get(r) : n.get(r);
        if (o) {
          var a, s, u;
          t(
            ((a = o.startClocks),
            (s = (0, q.$I)()),
            {
              name: o.name,
              type: "duration",
              startClocks: a,
              duration: (0, q._J)(a.timeStamp, s.timeStamp),
              context: (0, T.$e)(o.context, i.context),
              description:
                null !== (u = i.description) && void 0 !== u
                  ? u
                  : o.description,
            }),
          ),
            "string" == typeof r ? e.delete(r) : n.delete(r);
        }
      }
      function Z(t, e, n) {
        if (t)
          for (let r of t) {
            let t = r[e];
            t && t(n);
          }
      }
      var W = n(93524),
        J = n(58729),
        X = n(70650),
        Y = n(27073);
      function tt() {
        return (
          r ||
            (r = new E.y((t) => {
              if (!window.fetch) return;
              let { stop: e } = (0, X.S)(
                window,
                "fetch",
                (e) =>
                  (function (
                    { parameters: t, onPostCall: e, handlingStack: n },
                    r,
                  ) {
                    let [i, o] = t,
                      a = o && o.method;
                    void 0 === a && i instanceof Request && (a = i.method);
                    let s = void 0 !== a ? String(a).toUpperCase() : "GET",
                      u = i instanceof Request ? i.url : (0, Y.D5)(String(i)),
                      l = {
                        state: "start",
                        init: o,
                        input: i,
                        method: s,
                        startClocks: (0, q.$I)(),
                        url: u,
                        handlingStack: n,
                      };
                    r.notify(l),
                      (t[0] = l.input),
                      (t[1] = l.init),
                      e((t) =>
                        (function (t, e, n) {
                          function r(e) {
                            (n.state = "resolve"),
                              Object.assign(n, e),
                              t.notify(n);
                          }
                          e.then(
                            (0, z.zk)((t) => {
                              r({
                                response: t,
                                responseType: t.type,
                                status: t.status,
                                isAborted: !1,
                              });
                            }),
                            (0, z.zk)((t) => {
                              var e, i;
                              r({
                                status: 0,
                                isAborted:
                                  (null ===
                                    (i =
                                      null === (e = n.init) || void 0 === e
                                        ? void 0
                                        : e.signal) || void 0 === i
                                    ? void 0
                                    : i.aborted) ||
                                  (t instanceof DOMException &&
                                    t.code === DOMException.ABORT_ERR),
                                error: t,
                              });
                            }),
                          );
                        })(r, t, l),
                      );
                  })(e, t),
                { computeHandlingStack: !0 },
              );
              return e;
            })),
          r
        );
      }
      var te = n(99909);
      function tn(t, e, n = 0, r) {
        let i = new Date();
        i.setTime(i.getTime() + n);
        let o = `expires=${i.toUTCString()}`,
          a = r && r.crossSite ? "none" : "strict",
          s = r && r.domain ? `;domain=${r.domain}` : "",
          u = r && r.secure ? ";secure" : "",
          l = r && r.partitioned ? ";partitioned" : "";
        document.cookie = `${t}=${e};${o};path=/;samesite=${a}${s}${u}${l}`;
      }
      function tr(t) {
        return G(document.cookie, t);
      }
      function ti(t) {
        return (
          i ||
            (i = (function (t) {
              let e = new Map();
              for (F.lastIndex = 0; ; ) {
                let n = F.exec(t);
                if (n) e.set(n[1], n[2]);
                else break;
              }
              return e;
            })(document.cookie)),
          i.get(t)
        );
      }
      function to() {
        return !!(
          window._DATADOG_SYNTHETICS_INJECTS_RUM ||
          ti("datadog-synthetics-injects-rum")
        );
      }
      var ta = n(31485),
        ts = n(8456),
        tu = n(4483),
        tl = n(14851);
      let tc = "_dd_s";
      var td = n(42322);
      let tf = 4 * q.dV,
        tp = 15 * q.yR,
        th = q.P5,
        tg = { COOKIE: "cookie", LOCAL_STORAGE: "local-storage" },
        tm = /^([a-zA-Z]+)=([a-z0-9-]+)$/;
      function ty(t, e) {
        let n = { isExpired: "1" };
        return (
          e.trackAnonymousUser &&
            ((null == t ? void 0 : t.anonymousId)
              ? (n.anonymousId = null == t ? void 0 : t.anonymousId)
              : (n.anonymousId = B())),
          n
        );
      }
      function tv(t) {
        return (0, S.Qr)(t);
      }
      function t_(t) {
        return (
          void 0 !== t.isExpired ||
          !(
            (void 0 === t.created || (0, q.m6)() - Number(t.created) < tf) &&
            (void 0 === t.expire || (0, q.m6)() < Number(t.expire))
          )
        );
      }
      function tb(t) {
        t.expire = String((0, q.m6)() + tp);
      }
      function tw(t) {
        return (0, td.qP)(t)
          .map(([t, e]) => ("anonymousId" === t ? `aid=${e}` : `${t}=${e}`))
          .join("&");
      }
      function tS(t) {
        let e = {};
        return (
          t &&
            (-1 !== t.indexOf("&") || tm.test(t)) &&
            t.split("&").forEach((t) => {
              let n = tm.exec(t);
              if (null !== n) {
                let [, t, r] = n;
                "aid" === t ? (e.anonymousId = r) : (e[t] = r);
              }
            }),
          e
        );
      }
      function tk(t) {
        let e = (function (t) {
          let e = {};
          return (
            (e.secure =
              !!t.useSecureSessionCookie ||
              !!t.usePartitionedCrossSiteSessionCookie),
            (e.crossSite = !!t.usePartitionedCrossSiteSessionCookie),
            (e.partitioned = !!t.usePartitionedCrossSiteSessionCookie),
            t.trackSessionAcrossSubdomains &&
              (e.domain = (function () {
                if (void 0 === o) {
                  let t = `dd_site_test_${B()}`,
                    e = window.location.hostname.split("."),
                    n = e.pop();
                  for (; e.length && !tr(t); )
                    (n = `${e.pop()}.${n}`), tn(t, "test", q.WT, { domain: n });
                  tn(t, "", 0, { domain: n }), (o = n);
                }
                return o;
              })()),
            e
          );
        })(t);
        return !(function (t) {
          if (void 0 === document.cookie || null === document.cookie) return !1;
          try {
            let e = `dd_cookie_test_${B()}`,
              n = "test";
            tn(e, n, q.yR, t);
            let r = tr(e) === n;
            return tn(e, "", 0, t), r;
          } catch (t) {
            return w.jf.error(t), !1;
          }
        })(e)
          ? void 0
          : { type: tg.COOKIE, cookieOptions: e };
      }
      function tx() {
        return tS(tr(tc));
      }
      function tA() {
        try {
          let t = B(),
            e = `_dd_test_${t}`;
          localStorage.setItem(e, t);
          let n = localStorage.getItem(e);
          return (
            localStorage.removeItem(e),
            t === n ? { type: tg.LOCAL_STORAGE } : void 0
          );
        } catch (t) {
          return;
        }
      }
      function tT(t) {
        localStorage.setItem(tc, tw(t));
      }
      function tC() {
        return tS(localStorage.getItem(tc));
      }
      let tE = [];
      function tO(t, e, n = 0) {
        var r;
        let i;
        let { isLockEnabled: o, persistSession: s, expireSession: u } = e,
          l = (t) => s({ ...t, lock: i }),
          c = () => {
            let t = e.retrieveSession(),
              n = t.lock;
            return t.lock && delete t.lock, { session: t, lock: n };
          };
        if ((a || (a = t), t !== a)) {
          tE.push(t);
          return;
        }
        if (o && n >= 100) {
          tI(e);
          return;
        }
        let d = c();
        if (o && (d.lock || ((i = B()), l(d.session), (d = c()).lock !== i))) {
          tR(t, e, n);
          return;
        }
        let f = t.process(d.session);
        if (o && (d = c()).lock !== i) {
          tR(t, e, n);
          return;
        }
        if (
          (f && (t_(f) ? u(f) : (tb(f), o ? l(f) : s(f))), o && !(f && t_(f)))
        ) {
          if ((d = c()).lock !== i) {
            tR(t, e, n);
            return;
          }
          s(d.session), (f = d.session);
        }
        null === (r = t.after) || void 0 === r || r.call(t, f || d.session),
          tI(e);
      }
      function tR(t, e, n) {
        (0, tu.iK)(() => {
          tO(t, e, n + 1);
        }, 10);
      }
      function tI(t) {
        a = void 0;
        let e = tE.shift();
        e && tO(e, t);
      }
      let tN = q.WT;
      var tP = n(17954);
      function t$(t, e, n) {
        let r = (function (t, e) {
          let n = `/api/v2/${e}`,
            r = t.proxy;
          if ("string" == typeof r) {
            let t = (0, Y.D5)(r);
            return (e) => `${t}?ddforward=${encodeURIComponent(`${n}?${e}`)}`;
          }
          if ("function" == typeof r)
            return (t) => r({ path: n, parameters: t });
          let i = tD(e, t);
          return (t) => `https://${i}${n}?${t}`;
        })(t, e);
        return {
          build: (i, o) =>
            r(
              (function (
                { clientToken: t, internalAnalyticsSubdomain: e },
                n,
                r,
                i,
                { retry: o, encoding: a },
              ) {
                let s = ["sdk_version:6.5.1", `api:${i}`].concat(r);
                o &&
                  s.push(
                    `retry_count:${o.count}`,
                    `retry_after:${o.lastFailureStatus}`,
                  );
                let u = [
                  "ddsource=browser",
                  `ddtags=${encodeURIComponent(s.join(","))}`,
                  `dd-api-key=${t}`,
                  `dd-evp-origin-version=${encodeURIComponent("6.5.1")}`,
                  "dd-evp-origin=browser",
                  `dd-request-id=${B()}`,
                ];
                return (
                  a && u.push(`dd-evp-encoding=${a}`),
                  "rum" === n && u.push(`batch_time=${(0, q.n$)()}`),
                  e && u.reverse(),
                  u.join("&")
                );
              })(t, e, n, i, o),
            ),
          urlPrefix: r(""),
          trackType: e,
        };
      }
      function tD(t, e) {
        let { site: n = tP.D_, internalAnalyticsSubdomain: r } = e;
        if ("logs" === t && e.usePciIntake && n === tP.D_) return tP.iL;
        if (r && n === tP.D_) return `${r}.${tP.D_}`;
        if (n === tP.by) return `http-intake.logs.${n}`;
        let i = n.split("."),
          o = i.pop();
        return `browser-intake-${i.join("-")}.${o}`;
      }
      function tM(t, e) {
        let n = 200 - t.length - 1;
        (e.length > n ||
          ((function () {
            try {
              return RegExp("[\\p{Ll}]", "u"), !0;
            } catch (t) {
              return !1;
            }
          })() &&
            RegExp("[^\\p{Ll}\\p{Lo}0-9_:./-]", "u").test(e))) &&
          w.jf.warn(
            `${t} value doesn't meet tag requirements and will be sanitized. ${w.IA} ${w.aA}/getting_started/tagging/#defining-tags`,
          );
        let r = e.replace(/,/g, "_");
        return `${t}:${r}`;
      }
      let tz = {
          ALLOW: "allow",
          MASK: "mask",
          MASK_USER_INPUT: "mask-user-input",
        },
        tj = { ALL: "all", SAMPLED: "sampled" };
      function tL(t, e) {
        return (
          null == t ||
          "string" == typeof t ||
          (w.jf.error(`${e} must be defined as a string`), !1)
        );
      }
      function tU(t, e) {
        return (
          !!(void 0 === t || (0, ts.zz)(t)) ||
          (w.jf.error(`${e} Sample Rate should be a number between 0 and 100`),
          !1)
        );
      }
      function tq(t) {
        let e = (0, O.o)(t);
        return "string" === e || "function" === e || t instanceof RegExp;
      }
      function tV(t, e, n = !1) {
        return t.some((t) => {
          try {
            if ("function" == typeof t) return t(e);
            if (t instanceof RegExp) return t.test(e);
            if ("string" == typeof t) return n ? e.startsWith(t) : t === e;
          } catch (t) {
            w.jf.error(t);
          }
          return !1;
        });
      }
      function tB(t) {
        let e = crypto.getRandomValues(new Uint32Array(2));
        return (
          63 === t && (e[e.length - 1] >>>= 1),
          {
            toString(t = 10) {
              let n = e[1],
                r = e[0],
                i = "";
              do {
                let e = (n % t) * 4294967296 + r;
                (n = Math.floor(n / t)),
                  (r = Math.floor(e / t)),
                  (i = (e % t).toString(t) + i);
              } while (n || r);
              return i;
            },
          }
        );
      }
      function tF(t) {
        return t.toString(16).padStart(16, "0");
      }
      function tG(t) {
        0 !== t.status ||
          t.isAborted ||
          ((t.traceId = void 0),
          (t.spanId = void 0),
          (t.traceSampled = void 0));
      }
      function tH(t, e, n, r) {
        var i, o;
        let a;
        let u = n.findTrackedSession();
        if (!u) return;
        let l = t.allowedTracingUrls.find((t) => tV([t.match], e.url, !0));
        if (!l) return;
        let c =
          ((i = u.id),
          100 === (o = t.traceSampleRate) ||
            (0 !== o &&
              (s && i === s.sessionId
                ? s.decision
                : ((a = window.BigInt
                    ? (function (t, e) {
                        let n = BigInt("1111111111111111111"),
                          r = BigInt("0x10000000000000000");
                        return Number((t * n) % r) <= (e / 100) * Number(r);
                      })(BigInt(`0x${i.split("-")[4]}`), o)
                    : (0, ts.y7)(o)),
                  (s = { sessionId: i, decision: a }),
                  a))));
        (c || t.traceContextInjection === tj.ALL) &&
          ((e.traceSampled = c),
          (e.traceId = tB(64)),
          (e.spanId = tB(63)),
          r(
            (function (t, e, n, r) {
              let i = {};
              return (
                r.forEach((r) => {
                  switch (r) {
                    case "datadog":
                      Object.assign(i, {
                        "x-datadog-origin": "rum",
                        "x-datadog-parent-id": e.toString(),
                        "x-datadog-sampling-priority": n ? "1" : "0",
                        "x-datadog-trace-id": t.toString(),
                      });
                      break;
                    case "tracecontext":
                      Object.assign(i, {
                        traceparent: `00-0000000000000000${tF(t)}-${tF(e)}-0${
                          n ? "1" : "0"
                        }`,
                        tracestate: `dd=s:${n ? "1" : "0"};o:rum`,
                      });
                      break;
                    case "b3":
                      Object.assign(i, {
                        b3: `${tF(t)}-${tF(e)}-${n ? "1" : "0"}`,
                      });
                      break;
                    case "b3multi":
                      Object.assign(i, {
                        "X-B3-TraceId": tF(t),
                        "X-B3-SpanId": tF(e),
                        "X-B3-Sampled": n ? "1" : "0",
                      });
                  }
                }),
                i
              );
            })(e.traceId, e.spanId, e.traceSampled, l.propagatorTypes),
          ));
      }
      let tK = ["tracecontext", "datadog"];
      function tQ() {
        w.jf.error("Error fetching the remote configuration.");
      }
      function tZ(t, e, n = {}) {
        let r = (function (t = 2) {
            let e = new Map(),
              n = !1;
            function r(r = 0) {
              if (n || 0 === t) return;
              let i = 2 === t ? k : x,
                o = r;
              e.forEach((t) => {
                o += t.getBytesCount();
              }),
                o > i &&
                  (w.jf.warn(
                    `Customer data exceeds the recommended ${
                      i / v.Hi
                    }KiB threshold. ${w.IA} ${
                      w.Qo
                    }/#customer-data-exceeds-the-recommended-threshold-warning`,
                  ),
                  (n = !0));
            }
            return {
              createDetachedTracker: () => {
                let t = A(() => r(t.getBytesCount()));
                return t;
              },
              getOrCreateTracker: (t) => (e.has(t) || e.set(t, A(r)), e.get(t)),
              setCompressionStatus: (e) => {
                0 === t && ((t = e), r());
              },
              getCompressionStatus: () => t,
              stop: () => {
                e.forEach((t) => t.stop()), e.clear();
              },
            };
          })(0),
          i = I("global context", {
            customerDataTracker: r.getOrCreateTracker(2),
          }),
          o = I("user", {
            customerDataTracker: r.getOrCreateTracker(1),
            propertiesConfig: {
              id: { type: "string" },
              name: { type: "string" },
              email: { type: "string" },
            },
          }),
          a = I("account", {
            customerDataTracker: r.getOrCreateTracker(1),
            propertiesConfig: {
              id: { type: "string", required: !0 },
              name: { type: "string" },
            },
          }),
          s = (function (t) {
            let e = new E.y();
            return {
              tryToInit(e) {
                t || (t = e);
              },
              update(n) {
                (t = n), e.notify();
              },
              isGranted: () => t === N.GRANTED,
              observable: e,
            };
          })(),
          u = { vitalsByName: new Map(), vitalsByReference: new WeakMap() };
        function l() {
          return {
            context: i.getContext(),
            user: o.getContext(),
            account: a.getContext(),
            hasReplay: !!e.isRecording() || void 0,
          };
        }
        let c = (function (
            { ignoreInitIfSyntheticsWillInjectRum: t, startDeflateWorker: e },
            n,
            r,
            i,
            o,
          ) {
            let a, s, u, l;
            let c = (0, W.D)(),
              d = r.observable.subscribe(p),
              f = {};
            function p() {
              let t;
              if (!u || !l || !r.isGranted()) return;
              if ((d.unsubscribe(), l.trackViewsManually)) {
                if (!a) return;
                c.remove(a.callback), (t = a.options);
              }
              let e = o(l, s, t);
              c.drain(e);
            }
            function h(t) {
              var n, i, o;
              let a = (0, J.xT)();
              if (
                (a &&
                  (t = {
                    ...(n = t),
                    applicationId: "00000000-aaaa-0000-aaaa-000000000000",
                    clientToken: "empty",
                    sessionSampleRate: 100,
                    defaultPrivacyLevel:
                      null !== (i = n.defaultPrivacyLevel) && void 0 !== i
                        ? i
                        : null === (o = (0, J.Ad)()) || void 0 === o
                          ? void 0
                          : o.getPrivacyLevel(),
                  }),
                (u = t),
                (0, j.Uo)(
                  (function (t) {
                    var e;
                    let n = {
                      session_sample_rate: t.sessionSampleRate,
                      telemetry_sample_rate: t.telemetrySampleRate,
                      telemetry_configuration_sample_rate:
                        t.telemetryConfigurationSampleRate,
                      telemetry_usage_sample_rate: t.telemetryUsageSampleRate,
                      use_before_send: !!t.beforeSend,
                      use_partitioned_cross_site_session_cookie:
                        t.usePartitionedCrossSiteSessionCookie,
                      use_secure_session_cookie: t.useSecureSessionCookie,
                      use_proxy: !!t.proxy,
                      silent_multiple_init: t.silentMultipleInit,
                      track_session_across_subdomains:
                        t.trackSessionAcrossSubdomains,
                      track_anonymous_user: t.trackAnonymousUser,
                      session_persistence: t.sessionPersistence,
                      allow_fallback_to_local_storage:
                        !!t.allowFallbackToLocalStorage,
                      store_contexts_across_pages: !!t.storeContextsAcrossPages,
                      allow_untrusted_events: !!t.allowUntrustedEvents,
                      tracking_consent: t.trackingConsent,
                    };
                    return {
                      session_replay_sample_rate: t.sessionReplaySampleRate,
                      start_session_replay_recording_manually:
                        t.startSessionReplayRecordingManually,
                      trace_sample_rate: t.traceSampleRate,
                      trace_context_injection: t.traceContextInjection,
                      action_name_attribute: t.actionNameAttribute,
                      use_allowed_tracing_urls:
                        Array.isArray(t.allowedTracingUrls) &&
                        t.allowedTracingUrls.length > 0,
                      selected_tracing_propagators: (function (t) {
                        let e = new Set();
                        return (
                          Array.isArray(t.allowedTracingUrls) &&
                            t.allowedTracingUrls.length > 0 &&
                            t.allowedTracingUrls.forEach((t) => {
                              tq(t)
                                ? tK.forEach((t) => e.add(t))
                                : "object" === (0, O.o)(t) &&
                                  Array.isArray(t.propagatorTypes) &&
                                  t.propagatorTypes.forEach((t) => e.add(t));
                            }),
                          Array.from(e)
                        );
                      })(t),
                      default_privacy_level: t.defaultPrivacyLevel,
                      enable_privacy_for_action_name:
                        t.enablePrivacyForActionName,
                      use_excluded_activity_urls:
                        Array.isArray(t.excludedActivityUrls) &&
                        t.excludedActivityUrls.length > 0,
                      use_worker_url: !!t.workerUrl,
                      compress_intake_requests: t.compressIntakeRequests,
                      track_views_manually: t.trackViewsManually,
                      track_user_interactions: t.trackUserInteractions,
                      track_resources: t.trackResources,
                      track_long_task: t.trackLongTasks,
                      plugins:
                        null === (e = t.plugins) || void 0 === e
                          ? void 0
                          : e.map((t) => {
                              var e;
                              return {
                                name: t.name,
                                ...(null ===
                                  (e = t.getConfigurationTelemetry) ||
                                void 0 === e
                                  ? void 0
                                  : e.call(t)),
                              };
                            }),
                      track_feature_flags_for_events:
                        t.trackFeatureFlagsForEvents,
                      ...n,
                    };
                  })(t),
                ),
                l)
              ) {
                V("DD_RUM", t);
                return;
              }
              let c = (function (t) {
                var e, n, r, i, o, a;
                if (
                  (void 0 === t.trackFeatureFlagsForEvents ||
                    Array.isArray(t.trackFeatureFlagsForEvents) ||
                    w.jf.warn("trackFeatureFlagsForEvents should be an array"),
                  !t.applicationId)
                ) {
                  w.jf.error(
                    "Application ID is not configured, no RUM data will be collected.",
                  );
                  return;
                }
                if (
                  !tU(t.sessionReplaySampleRate, "Session Replay") ||
                  !tU(t.traceSampleRate, "Trace")
                )
                  return;
                if (
                  void 0 !== t.excludedActivityUrls &&
                  !Array.isArray(t.excludedActivityUrls)
                ) {
                  w.jf.error("Excluded Activity Urls should be an array");
                  return;
                }
                let s = (function (t) {
                  if (void 0 === t.allowedTracingUrls) return [];
                  if (!Array.isArray(t.allowedTracingUrls)) {
                    w.jf.error("Allowed Tracing URLs should be an array");
                    return;
                  }
                  if (
                    0 !== t.allowedTracingUrls.length &&
                    void 0 === t.service
                  ) {
                    w.jf.error(
                      "Service needs to be configured when tracing is enabled",
                    );
                    return;
                  }
                  let e = [];
                  return (
                    t.allowedTracingUrls.forEach((t) => {
                      tq(t)
                        ? e.push({ match: t, propagatorTypes: tK })
                        : "object" === (0, O.o)(t) &&
                            tq(t.match) &&
                            Array.isArray(t.propagatorTypes)
                          ? e.push(t)
                          : w.jf.warn(
                              "Allowed Tracing Urls parameters should be a string, RegExp, function, or an object. Ignoring parameter",
                              t,
                            );
                    }),
                    e
                  );
                })(t);
                if (!s) return;
                let u = (function (t) {
                  var e, n, r, i, o, a, s;
                  if (!t || !t.clientToken) {
                    w.jf.error(
                      "Client Token is not configured, we will not send any data.",
                    );
                    return;
                  }
                  if (
                    (!(s = t.site) ||
                      "string" != typeof s ||
                      /(datadog|ddog|datad0g|dd0g)/.test(s) ||
                      (w.jf.error(
                        `Site should be a valid Datadog site. ${w.IA} ${w.aA}/getting_started/site/.`,
                      ),
                      0)) &&
                    tU(t.sessionSampleRate, "Session") &&
                    tU(t.telemetrySampleRate, "Telemetry") &&
                    tU(
                      t.telemetryConfigurationSampleRate,
                      "Telemetry Configuration",
                    ) &&
                    tU(t.telemetryUsageSampleRate, "Telemetry Usage") &&
                    tL(t.version, "Version") &&
                    tL(t.env, "Env") &&
                    tL(t.service, "Service")
                  ) {
                    if (
                      void 0 !== t.trackingConsent &&
                      !(0, S.E5)(N, t.trackingConsent)
                    ) {
                      w.jf.error(
                        'Tracking Consent should be either "granted" or "not-granted"',
                      );
                      return;
                    }
                    return {
                      beforeSend:
                        t.beforeSend &&
                        (0, ta.Z)(t.beforeSend, "beforeSend threw an error:"),
                      sessionStoreStrategyType: (function (t) {
                        switch (t.sessionPersistence) {
                          case tg.COOKIE:
                            return tk(t);
                          case tg.LOCAL_STORAGE:
                            return tA();
                          case void 0: {
                            let e = tk(t);
                            return (
                              !e && t.allowFallbackToLocalStorage && (e = tA()),
                              e
                            );
                          }
                          default:
                            w.jf.error(
                              `Invalid session persistence '${String(
                                t.sessionPersistence,
                              )}'`,
                            );
                        }
                      })(t),
                      sessionSampleRate:
                        null !== (e = t.sessionSampleRate) && void 0 !== e
                          ? e
                          : 100,
                      telemetrySampleRate:
                        null !== (n = t.telemetrySampleRate) && void 0 !== n
                          ? n
                          : 20,
                      telemetryConfigurationSampleRate:
                        null !== (r = t.telemetryConfigurationSampleRate) &&
                        void 0 !== r
                          ? r
                          : 5,
                      telemetryUsageSampleRate:
                        null !== (i = t.telemetryUsageSampleRate) &&
                        void 0 !== i
                          ? i
                          : 5,
                      service: t.service || void 0,
                      silentMultipleInit: !!t.silentMultipleInit,
                      allowUntrustedEvents: !!t.allowUntrustedEvents,
                      trackingConsent:
                        null !== (o = t.trackingConsent) && void 0 !== o
                          ? o
                          : N.GRANTED,
                      trackAnonymousUser:
                        null === (a = t.trackAnonymousUser) ||
                        void 0 === a ||
                        a,
                      storeContextsAcrossPages: !!t.storeContextsAcrossPages,
                      batchBytesLimit: 16 * v.Hi,
                      eventRateLimiterThreshold: 3e3,
                      maxTelemetryEventsPerPage: 15,
                      flushTimeout: 30 * q.WT,
                      batchMessagesLimit: 50,
                      messageBytesLimit: 256 * v.Hi,
                      ...(function (t) {
                        let e = t.site || tP.D_,
                          n = (function (t) {
                            let {
                                env: e,
                                service: n,
                                version: r,
                                datacenter: i,
                              } = t,
                              o = [];
                            return (
                              e && o.push(tM("env", e)),
                              n && o.push(tM("service", n)),
                              r && o.push(tM("version", r)),
                              i && o.push(tM("datacenter", i)),
                              o
                            );
                          })(t),
                          r = {
                            logsEndpointBuilder: t$(t, "logs", n),
                            rumEndpointBuilder: t$(t, "rum", n),
                            sessionReplayEndpointBuilder: t$(t, "replay", n),
                          };
                        return {
                          replica: (function (t, e) {
                            if (!t.replica) return;
                            let n = {
                                ...t,
                                site: tP.D_,
                                clientToken: t.replica.clientToken,
                              },
                              r = {
                                logsEndpointBuilder: t$(n, "logs", e),
                                rumEndpointBuilder: t$(n, "rum", e),
                              };
                            return {
                              applicationId: t.replica.applicationId,
                              ...r,
                            };
                          })(t, n),
                          site: e,
                          ...r,
                        };
                      })(t),
                    };
                  }
                })(t);
                if (!u) return;
                let l =
                  null !== (e = t.sessionReplaySampleRate) && void 0 !== e
                    ? e
                    : 0;
                return {
                  applicationId: t.applicationId,
                  version: t.version || void 0,
                  actionNameAttribute: t.actionNameAttribute,
                  sessionReplaySampleRate: l,
                  startSessionReplayRecordingManually:
                    void 0 !== t.startSessionReplayRecordingManually
                      ? !!t.startSessionReplayRecordingManually
                      : 0 === l,
                  traceSampleRate:
                    null !== (n = t.traceSampleRate) && void 0 !== n ? n : 100,
                  rulePsr: (0, ts.hj)(t.traceSampleRate)
                    ? t.traceSampleRate / 100
                    : void 0,
                  allowedTracingUrls: s,
                  excludedActivityUrls:
                    null !== (r = t.excludedActivityUrls) && void 0 !== r
                      ? r
                      : [],
                  workerUrl: t.workerUrl,
                  compressIntakeRequests: !!t.compressIntakeRequests,
                  trackUserInteractions: !!(
                    null === (i = t.trackUserInteractions) ||
                    void 0 === i ||
                    i
                  ),
                  trackViewsManually: !!t.trackViewsManually,
                  trackResources: !!(
                    null === (o = t.trackResources) ||
                    void 0 === o ||
                    o
                  ),
                  trackLongTasks: !!(
                    null === (a = t.trackLongTasks) ||
                    void 0 === a ||
                    a
                  ),
                  subdomain: t.subdomain,
                  defaultPrivacyLevel: (0, S.E5)(tz, t.defaultPrivacyLevel)
                    ? t.defaultPrivacyLevel
                    : tz.MASK,
                  enablePrivacyForActionName: !!t.enablePrivacyForActionName,
                  customerDataTelemetrySampleRate: 1,
                  traceContextInjection: (0, S.E5)(tj, t.traceContextInjection)
                    ? t.traceContextInjection
                    : tj.SAMPLED,
                  plugins: t.plugins || [],
                  trackFeatureFlagsForEvents:
                    t.trackFeatureFlagsForEvents || [],
                  ...u,
                };
              })(t);
              if (c) {
                if (!a && !c.sessionStoreStrategyType) {
                  w.jf.warn(
                    "No storage available for session. We will not send any data.",
                  );
                  return;
                }
                (!c.compressIntakeRequests ||
                  a ||
                  !e ||
                  (s = e(c, "Datadog RUM", _.Z))) &&
                  ((l = c),
                  tt().subscribe(_.Z),
                  r.tryToInit(c.trackingConsent),
                  p());
              }
            }
            let g = (t) => {
              c.add((e) => e.addDurationVital(t));
            };
            return {
              init(e, n) {
                if (!e) {
                  w.jf.error("Missing configuration");
                  return;
                }
                (0, te.fG)(e.enableExperimentalFeatures),
                  (u = e),
                  !(t && to()) &&
                    ((Z(e.plugins, "onInit", {
                      initConfiguration: e,
                      publicApi: n,
                    }),
                    e.remoteConfigurationId)
                      ? !(function (t, e) {
                          let n = new XMLHttpRequest();
                          (0, P.O)(t, n, "load", function () {
                            200 === n.status
                              ? e(JSON.parse(n.responseText).rum)
                              : tQ();
                          }),
                            (0, P.O)(t, n, "error", function () {
                              tQ();
                            }),
                            n.open(
                              "GET",
                              `https://sdk-configuration.${tD(
                                "rum",
                                t,
                              )}/v1/${encodeURIComponent(
                                t.remoteConfigurationId,
                              )}.json`,
                            ),
                            n.send();
                        })(e, (t) => {
                          h({ ...e, ...t });
                        })
                      : h(e));
              },
              get initConfiguration() {
                return u;
              },
              getInternalContext: _.Z,
              stopSession: _.Z,
              addTiming(t, e = (0, q.n$)()) {
                c.add((n) => n.addTiming(t, e));
              },
              startView(t, e = (0, q.$I)()) {
                let n = (n) => {
                  n.startView(t, e);
                };
                c.add(n), a || ((a = { options: t, callback: n }), p());
              },
              setViewName(t) {
                c.add((e) => e.setViewName(t));
              },
              setViewContext(t) {
                c.add((e) => e.setViewContext(t));
              },
              setViewContextProperty(t, e) {
                c.add((n) => n.setViewContextProperty(t, e));
              },
              getViewContext: () => f,
              addAction(t, e = n()) {
                c.add((n) => n.addAction(t, e));
              },
              addError(t, e = n()) {
                c.add((n) => n.addError(t, e));
              },
              addFeatureFlagEvaluation(t, e) {
                c.add((n) => n.addFeatureFlagEvaluation(t, e));
              },
              startDurationVital: (t, e) => K(i, t, e),
              stopDurationVital(t, e) {
                Q(g, i, t, e);
              },
              addDurationVital: g,
            };
          })(n, l, s, u, (d, f, p) => {
            d.storeContextsAcrossPages &&
              (D(d, i, "rum", 2), D(d, o, "rum", 1), D(d, a, "rum", 4)),
              r.setCompressionStatus(f ? 1 : 2);
            let h = t(
              d,
              e,
              r,
              l,
              p,
              f && n.createDeflateEncoder
                ? (t) => n.createDeflateEncoder(d, f, t)
                : M,
              s,
              u,
            );
            return (
              e.onRumStart(h.lifeCycle, d, h.session, h.viewHistory, f),
              (c = {
                init: (t) => {
                  V("DD_RUM", t);
                },
                initConfiguration: c.initConfiguration,
                ...h,
              }),
              Z(d.plugins, "onRumStart", { strategy: c }),
              h
            );
          }),
          d = (0, z.zk)((t) => {
            let e = "object" == typeof t ? t : { name: t };
            e.context && r.getOrCreateTracker(3).updateCustomerData(e.context),
              c.startView(e),
              (0, j.eG)({ feature: "start-view" });
          }),
          f = (0, L.r)({
            init: (0, z.zk)((t) => {
              c.init(t, f);
            }),
            setTrackingConsent: (0, z.zk)((t) => {
              s.update(t),
                (0, j.eG)({
                  feature: "set-tracking-consent",
                  tracking_consent: t,
                });
            }),
            setViewName: (0, z.zk)((t) => {
              c.setViewName(t), (0, j.eG)({ feature: "set-view-name" });
            }),
            setViewContext: (0, z.zk)((t) => {
              c.setViewContext(t), (0, j.eG)({ feature: "set-view-context" });
            }),
            setViewContextProperty: (0, z.zk)((t, e) => {
              c.setViewContextProperty(t, e),
                (0, j.eG)({ feature: "set-view-context-property" });
            }),
            getViewContext: (0, z.zk)(
              () => (
                (0, j.eG)({ feature: "set-view-context-property" }),
                c.getViewContext()
              ),
            ),
            setGlobalContext: (0, z.zk)((t) => {
              i.setContext(t), (0, j.eG)({ feature: "set-global-context" });
            }),
            getGlobalContext: (0, z.zk)(() => i.getContext()),
            setGlobalContextProperty: (0, z.zk)((t, e) => {
              i.setContextProperty(t, e),
                (0, j.eG)({ feature: "set-global-context" });
            }),
            removeGlobalContextProperty: (0, z.zk)((t) =>
              i.removeContextProperty(t),
            ),
            clearGlobalContext: (0, z.zk)(() => i.clearContext()),
            getInternalContext: (0, z.zk)((t) => c.getInternalContext(t)),
            getInitConfiguration: (0, z.zk)(() =>
              (0, T.I8)(c.initConfiguration),
            ),
            addAction: (t, e) => {
              let n = (0, U.Xp)("action");
              (0, z.L6)(() => {
                c.addAction({
                  name: (0, C.N)(t),
                  context: (0, C.N)(e),
                  startClocks: (0, q.$I)(),
                  type: "custom",
                  handlingStack: n,
                }),
                  (0, j.eG)({ feature: "add-action" });
              });
            },
            addError: (t, e) => {
              let n = (0, U.Xp)("error");
              (0, z.L6)(() => {
                c.addError({
                  error: t,
                  handlingStack: n,
                  context: (0, C.N)(e),
                  startClocks: (0, q.$I)(),
                }),
                  (0, j.eG)({ feature: "add-error" });
              });
            },
            addTiming: (0, z.zk)((t, e) => {
              c.addTiming((0, C.N)(t), e);
            }),
            setUser: (0, z.zk)((t) => {
              o.setContext(t), (0, j.eG)({ feature: "set-user" });
            }),
            getUser: (0, z.zk)(o.getContext),
            setUserProperty: (0, z.zk)((t, e) => {
              o.setContextProperty(t, e), (0, j.eG)({ feature: "set-user" });
            }),
            removeUserProperty: (0, z.zk)(o.removeContextProperty),
            clearUser: (0, z.zk)(o.clearContext),
            setAccount: (0, z.zk)(a.setContext),
            getAccount: (0, z.zk)(a.getContext),
            setAccountProperty: (0, z.zk)(a.setContextProperty),
            removeAccountProperty: (0, z.zk)(a.removeContextProperty),
            clearAccount: (0, z.zk)(a.clearContext),
            startView: d,
            stopSession: (0, z.zk)(() => {
              c.stopSession(), (0, j.eG)({ feature: "stop-session" });
            }),
            addFeatureFlagEvaluation: (0, z.zk)((t, e) => {
              c.addFeatureFlagEvaluation((0, C.N)(t), (0, C.N)(e)),
                (0, j.eG)({ feature: "add-feature-flag-evaluation" });
            }),
            getSessionReplayLink: (0, z.zk)(() => e.getSessionReplayLink()),
            startSessionReplayRecording: (0, z.zk)((t) => {
              e.start(t),
                (0, j.eG)({
                  feature: "start-session-replay-recording",
                  force: t && t.force,
                });
            }),
            stopSessionReplayRecording: (0, z.zk)(() => e.stop()),
            addDurationVital: (0, z.zk)((t, e) => {
              (0, j.eG)({ feature: "add-duration-vital" }),
                c.addDurationVital({
                  name: (0, C.N)(t),
                  type: "duration",
                  startClocks: (0, q.lO)(e.startTime),
                  duration: e.duration,
                  context: (0, C.N)(e && e.context),
                  description: (0, C.N)(e && e.description),
                });
            }),
            startDurationVital: (0, z.zk)(
              (t, e) => (
                (0, j.eG)({ feature: "start-duration-vital" }),
                c.startDurationVital((0, C.N)(t), {
                  context: (0, C.N)(e && e.context),
                  description: (0, C.N)(e && e.description),
                })
              ),
            ),
            stopDurationVital: (0, z.zk)((t, e) => {
              (0, j.eG)({ feature: "stop-duration-vital" }),
                c.stopDurationVital("string" == typeof t ? (0, C.N)(t) : t, {
                  context: (0, C.N)(e && e.context),
                  description: (0, C.N)(e && e.description),
                });
            }),
          });
        return f;
      }
      var tW = n(38167),
        tJ = n(70606),
        tX = n(59951);
      function tY() {
        let t;
        let e = window;
        if (
          e.Zone &&
          ((t = (0, tX.I)(e, "MutationObserver")),
          e.MutationObserver && t === e.MutationObserver)
        ) {
          let n = new e.MutationObserver(_.Z),
            r = (0, tX.I)(n, "originalInstance");
          t = r && r.constructor;
        }
        return t || (t = e.MutationObserver), t;
      }
      var t0 = n(43678);
      function t1(t, e, n) {
        let r = 0,
          i = !1;
        return {
          isLimitReached() {
            if (
              (0 === r &&
                (0, tu.iK)(() => {
                  r = 0;
                }, q.yR),
              (r += 1) <= e || i)
            )
              return (i = !1), !1;
            if (r === e + 1) {
              i = !0;
              try {
                n({
                  message: `Reached max number of ${t}s by minute: ${e}`,
                  source: t0.z.AGENT,
                  startClocks: (0, q.$I)(),
                });
              } finally {
                i = !1;
              }
            }
            return !0;
          },
        };
      }
      var t2 = n(36304);
      function t5(t) {
        return "object" === (0, O.o)(t);
      }
      let t3 = {
          "view.name": "string",
          "view.url": "string",
          "view.referrer": "string",
        },
        t6 = { context: "object" },
        t4 = { service: "string", version: "string" };
      class t8 {
        constructor() {
          this.callbacks = {};
        }
        notify(t, e) {
          let n = this.callbacks[t];
          n && n.forEach((t) => t(e));
        }
        subscribe(t, e) {
          return (
            this.callbacks[t] || (this.callbacks[t] = []),
            this.callbacks[t].push(e),
            {
              unsubscribe: () => {
                this.callbacks[t] = this.callbacks[t].filter((t) => e !== t);
              },
            }
          );
        }
      }
      var t7 = n(38475);
      let t9 = 1 / 0,
        et = q.yR,
        ee = null,
        en = new Set();
      function er({ expireDelay: t, maxEntries: e }) {
        let n = [],
          r = [];
        ee || (ee = (0, tu.Zi)(() => void en.forEach((t) => t()), et));
        let i = () => {
          let e = (0, q._q)() - t;
          for (; n.length > 0 && n[n.length - 1].endTime < e; ) {
            let t = n.pop();
            t && r.push(t.startTime);
          }
        };
        return (
          en.add(i),
          {
            add: function (t, r) {
              let i = {
                value: t,
                startTime: r,
                endTime: t9,
                remove: () => {
                  (0, t7.c)(n, i);
                },
                close: (t) => {
                  i.endTime = t;
                },
              };
              return e && n.length >= e && n.pop(), n.unshift(i), i;
            },
            find: function (t = t9, e = { returnInactive: !1 }) {
              for (let r of n)
                if (r.startTime <= t) {
                  if (e.returnInactive || t <= r.endTime) return r.value;
                  break;
                }
            },
            closeActive: function (t) {
              let e = n[0];
              e && e.endTime === t9 && e.close(t);
            },
            findAll: function (t = t9, e = 0) {
              let r = (0, q.WK)(t, e);
              return n
                .filter((e) => e.startTime <= r && t <= e.endTime)
                .map((t) => t.value);
            },
            reset: function () {
              n = [];
            },
            stop: function () {
              en.delete(i),
                0 === en.size && ee && ((0, tu.cv)(ee), (ee = null));
            },
            getAllEntries: function () {
              return n.map(({ startTime: t, endTime: e, value: n }) => ({
                startTime: t,
                endTime: e === t9 ? "Infinity" : e,
                value: n,
              }));
            },
            getDeletedEntries: function () {
              return r;
            },
          }
        );
      }
      let ei = new WeakMap();
      function eo({ target: t, parameters: [e, n] }) {
        ei.set(t, {
          state: "open",
          method: String(e).toUpperCase(),
          url: (0, Y.D5)(String(n)),
        });
      }
      function ea({ target: t }) {
        let e = ei.get(t);
        e && (e.isAborted = !0);
      }
      var es = n(89173);
      let eu = "initial_document",
        el = [
          ["document", (t) => eu === t],
          ["xhr", (t) => "xmlhttprequest" === t],
          ["fetch", (t) => "fetch" === t],
          ["beacon", (t) => "beacon" === t],
          ["css", (t, e) => /\.css$/i.test(e)],
          ["js", (t, e) => /\.js$/i.test(e)],
          [
            "image",
            (t, e) =>
              ["image", "img", "icon"].includes(t) ||
              null !== /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(e),
          ],
          ["font", (t, e) => null !== /\.(woff|eot|woff2|ttf)$/i.exec(e)],
          [
            "media",
            (t, e) =>
              ["audio", "video"].includes(t) ||
              null !== /\.(mp3|mp4)$/i.exec(e),
          ],
        ];
      function ec(...t) {
        for (let e = 1; e < t.length; e += 1) if (t[e - 1] > t[e]) return !1;
        return !0;
      }
      function ed(t) {
        let { duration: e, startTime: n, responseEnd: r } = t;
        return 0 === e && n < r ? (0, q._J)(n, r) : e;
      }
      function ef(t) {
        return t.duration >= 0;
      }
      function ep(t) {
        let e = ec(
            t.startTime,
            t.fetchStart,
            t.domainLookupStart,
            t.domainLookupEnd,
            t.connectStart,
            t.connectEnd,
            t.requestStart,
            t.responseStart,
            t.responseEnd,
          ),
          n =
            !(t.redirectEnd > t.startTime) ||
            ec(t.startTime, t.redirectStart, t.redirectEnd, t.fetchStart);
        return e && n;
      }
      function eh(t, e, n) {
        if (t <= e && e <= n)
          return {
            duration: (0, q.c0)((0, q._J)(e, n)),
            start: (0, q.c0)((0, q._J)(t, e)),
          };
      }
      function eg(t) {
        return "" === t.nextHopProtocol ? void 0 : t.nextHopProtocol;
      }
      function em(t) {
        return "" === t.deliveryType ? "other" : t.deliveryType;
      }
      function ey(t) {
        return t && !tP.Rg.every((e) => t.includes(e));
      }
      let ev = /data:(.+)?(;base64)?,/g;
      function e_(t) {
        if (t.length <= 24e3);
        else if ("data:" === t.substring(0, 5))
          return (t = t.substring(0, 24e3)), !0;
        return !1;
      }
      function eb(t) {
        return `${t.match(ev)[0]}[...]`;
      }
      let ew = 1;
      function eS() {
        let t = ew;
        return (ew += 1), t;
      }
      function ek(t) {
        return (0, ts.hj)(t) && t < 0 ? void 0 : t;
      }
      function ex({ lifeCycle: t, isChildEvent: e, onChange: n = _.Z }) {
        let r = {
            errorCount: 0,
            longTaskCount: 0,
            resourceCount: 0,
            actionCount: 0,
            frustrationCount: 0,
          },
          i = t.subscribe(13, (t) => {
            var i;
            if ("view" !== t.type && "vital" !== t.type && e(t))
              switch (t.type) {
                case "error":
                  (r.errorCount += 1), n();
                  break;
                case "action":
                  (r.actionCount += 1),
                    t.action.frustration &&
                      (r.frustrationCount += t.action.frustration.type.length),
                    n();
                  break;
                case "long_task":
                  (r.longTaskCount += 1), n();
                  break;
                case "resource":
                  (null === (i = t._dd) || void 0 === i
                    ? void 0
                    : i.discarded) || ((r.resourceCount += 1), n());
              }
          });
        return {
          stop: () => {
            i.unsubscribe();
          },
          eventCounts: r,
        };
      }
      function eA(t, e) {
        return new E.y((n) => {
          let r, i;
          if (!window.PerformanceObserver) return;
          let o = (t) => {
              let e = t.filter(
                (t) => !(t.entryType === y.RESOURCE && (!ey(t.name) || !ef(t))),
              );
              e.length > 0 && n.notify(e);
            },
            a = !0,
            s = new PerformanceObserver(
              (0, z.zk)((t) => {
                a
                  ? (r = (0, tu.iK)(() => o(t.getEntries())))
                  : o(t.getEntries());
              }),
            );
          try {
            s.observe(e);
          } catch (t) {
            if (
              [y.RESOURCE, y.NAVIGATION, y.LONG_TASK, y.PAINT].includes(e.type)
            ) {
              e.buffered &&
                (r = (0, tu.iK)(() => o(performance.getEntriesByType(e.type))));
              try {
                s.observe({ entryTypes: [e.type] });
              } catch (t) {
                return;
              }
            }
          }
          return (
            (a = !1),
            !c &&
              void 0 !== window.performance &&
              "getEntries" in performance &&
              "addEventListener" in performance &&
              (c = (0, P.O)(t, performance, "resourcetimingbufferfull", () => {
                performance.clearResourceTimings();
              })),
            eT(y.FIRST_INPUT) ||
              e.type !== y.FIRST_INPUT ||
              ({ stop: i } = (function (t, e) {
                let n = (0, q.m6)(),
                  r = !1,
                  { stop: i } = (0, P.y)(
                    t,
                    window,
                    [
                      "click",
                      "mousedown",
                      "keydown",
                      "touchstart",
                      "pointerdown",
                    ],
                    (e) => {
                      if (!e.cancelable) return;
                      let n = {
                        entryType: "first-input",
                        processingStart: (0, q._q)(),
                        processingEnd: (0, q._q)(),
                        startTime: e.timeStamp,
                        duration: 0,
                        name: "",
                        cancelable: !1,
                        target: null,
                        toJSON: () => ({}),
                      };
                      "pointerdown" === e.type
                        ? (0, P.y)(
                            t,
                            window,
                            ["pointerup", "pointercancel"],
                            (t) => {
                              "pointerup" === t.type && o(n);
                            },
                            { once: !0 },
                          )
                        : o(n);
                    },
                    { passive: !0, capture: !0 },
                  );
                return { stop: i };
                function o(t) {
                  if (!r) {
                    (r = !0), i();
                    let o = t.processingStart - t.startTime;
                    o >= 0 && o < (0, q.m6)() - n && e(t);
                  }
                }
              })(t, (t) => {
                o([t]);
              })),
            () => {
              s.disconnect(), i && i(), (0, tu.gr)(r);
            }
          );
        });
      }
      function eT(t) {
        return (
          window.PerformanceObserver &&
          void 0 !== PerformanceObserver.supportedEntryTypes &&
          PerformanceObserver.supportedEntryTypes.includes(t)
        );
      }
      function eC(t, e, n) {
        let r;
        let i = !1,
          o = (0, tu.iK)(
            (0, z.zk)(() => l({ hadActivity: !1 })),
            100,
          ),
          a =
            void 0 !== n
              ? (0, tu.iK)(
                  (0, z.zk)(() => l({ hadActivity: !0, end: (0, q.n$)() })),
                  n,
                )
              : void 0,
          s = t.subscribe(({ isBusy: t }) => {
            (0, tu.gr)(o), (0, tu.gr)(r);
            let e = (0, q.n$)();
            t ||
              (r = (0, tu.iK)(
                (0, z.zk)(() => l({ hadActivity: !0, end: e })),
                100,
              ));
          }),
          u = () => {
            (i = !0),
              (0, tu.gr)(o),
              (0, tu.gr)(r),
              (0, tu.gr)(a),
              s.unsubscribe();
          };
        function l(t) {
          i || (u(), e(t));
        }
        return { stop: u };
      }
      function eE(t, e, n, r) {
        return new E.y((i) => {
          let o;
          let a = [],
            s = 0;
          return (
            a.push(
              e.subscribe(u),
              n.subscribe(u),
              eA(r, { type: y.RESOURCE }).subscribe((t) => {
                t.some((t) => !eO(r, t.name)) && u();
              }),
              t.subscribe(7, (t) => {
                eO(r, t.url) ||
                  (void 0 === o && (o = t.requestIndex), (s += 1), u());
              }),
              t.subscribe(8, (t) => {
                eO(r, t.url) ||
                  void 0 === o ||
                  t.requestIndex < o ||
                  ((s -= 1), u());
              }),
            ),
            () => {
              a.forEach((t) => t.unsubscribe());
            }
          );
          function u() {
            i.notify({ isBusy: s > 0 });
          }
        });
      }
      function eO(t, e) {
        return tV(t.excludedActivityUrls, e);
      }
      function eR(t) {
        return t.nodeType === Node.TEXT_NODE;
      }
      function eI(t) {
        return t.nodeType === Node.ELEMENT_NODE;
      }
      function eN(t) {
        return eI(t) && !!t.shadowRoot;
      }
      function eP(t) {
        return (
          !!t.host && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && eI(t.host)
        );
      }
      function e$(t) {
        return t.childNodes.length > 0 || eN(t);
      }
      function eD(t, e) {
        let n = t.firstChild;
        for (; n; ) e(n), (n = n.nextSibling);
        eN(t) && e(t.shadowRoot);
      }
      function eM(t) {
        return eP(t) ? t.host : t.parentNode;
      }
      ((m = y || (y = {})).EVENT = "event"),
        (m.FIRST_INPUT = "first-input"),
        (m.LARGEST_CONTENTFUL_PAINT = "largest-contentful-paint"),
        (m.LAYOUT_SHIFT = "layout-shift"),
        (m.LONG_TASK = "longtask"),
        (m.LONG_ANIMATION_FRAME = "long-animation-frame"),
        (m.NAVIGATION = "navigation"),
        (m.PAINT = "paint"),
        (m.RESOURCE = "resource");
      let ez = {
          IGNORE: "ignore",
          HIDDEN: "hidden",
          ALLOW: tz.ALLOW,
          MASK: tz.MASK,
          MASK_USER_INPUT: tz.MASK_USER_INPUT,
        },
        ej = "data-dd-privacy",
        eL = "hidden",
        eU = "***",
        eq =
          "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
        eV = {
          INPUT: !0,
          OUTPUT: !0,
          TEXTAREA: !0,
          SELECT: !0,
          OPTION: !0,
          DATALIST: !0,
          OPTGROUP: !0,
        };
      function eB(t, e, n) {
        if (n && n.has(t)) return n.get(t);
        let r = eM(t),
          i = r ? eB(r, e, n) : e,
          o = eF(eG(t), i);
        return n && n.set(t, o), o;
      }
      function eF(t, e) {
        switch (e) {
          case ez.HIDDEN:
          case ez.IGNORE:
            return e;
        }
        switch (t) {
          case ez.ALLOW:
          case ez.MASK:
          case ez.MASK_USER_INPUT:
          case ez.HIDDEN:
          case ez.IGNORE:
            return t;
          default:
            return e;
        }
      }
      function eG(t) {
        if (eI(t)) {
          if ("BASE" === t.tagName) return ez.ALLOW;
          if ("INPUT" === t.tagName) {
            if (
              "password" === t.type ||
              "email" === t.type ||
              "tel" === t.type ||
              "hidden" === t.type
            )
              return ez.MASK;
            let e = t.getAttribute("autocomplete");
            if (e && (e.startsWith("cc-") || e.endsWith("-password")))
              return ez.MASK;
          }
          return t.matches(eW(ez.HIDDEN))
            ? ez.HIDDEN
            : t.matches(eW(ez.MASK))
              ? ez.MASK
              : t.matches(eW(ez.MASK_USER_INPUT))
                ? ez.MASK_USER_INPUT
                : t.matches(eW(ez.ALLOW))
                  ? ez.ALLOW
                  : !(function (t) {
                        if ("SCRIPT" === t.nodeName) return !0;
                        if ("LINK" === t.nodeName) {
                          let t = e("rel");
                          return (
                            (/preload|prefetch/i.test(t) &&
                              "script" === e("as")) ||
                            "shortcut icon" === t ||
                            "icon" === t
                          );
                        }
                        if ("META" === t.nodeName) {
                          let n = e("name"),
                            r = e("rel"),
                            i = e("property");
                          return (
                            /^msapplication-tile(image|color)$/.test(n) ||
                            "application-name" === n ||
                            "icon" === r ||
                            "apple-touch-icon" === r ||
                            "shortcut icon" === r ||
                            "keywords" === n ||
                            "description" === n ||
                            /^(og|twitter|fb):/.test(i) ||
                            /^(og|twitter):/.test(n) ||
                            "pinterest" === n ||
                            "robots" === n ||
                            "googlebot" === n ||
                            "bingbot" === n ||
                            t.hasAttribute("http-equiv") ||
                            "author" === n ||
                            "generator" === n ||
                            "framework" === n ||
                            "publisher" === n ||
                            "progid" === n ||
                            /^article:/.test(i) ||
                            /^product:/.test(i) ||
                            "google-site-verification" === n ||
                            "yandex-verification" === n ||
                            "csrf-token" === n ||
                            "p:domain_verify" === n ||
                            "verify-v1" === n ||
                            "verification" === n ||
                            "shopify-checkout-api-token" === n
                          );
                        }
                        function e(e) {
                          return (t.getAttribute(e) || "").toLowerCase();
                        }
                        return !1;
                      })(t)
                    ? void 0
                    : ez.IGNORE;
        }
      }
      function eH(t, e) {
        switch (e) {
          case ez.MASK:
          case ez.HIDDEN:
          case ez.IGNORE:
            return !0;
          case ez.MASK_USER_INPUT:
            return eR(t) ? eK(t.parentNode) : eK(t);
          default:
            return !1;
        }
      }
      function eK(t) {
        if (!t || t.nodeType !== t.ELEMENT_NODE) return !1;
        if ("INPUT" === t.tagName)
          switch (t.type) {
            case "button":
            case "color":
            case "reset":
            case "submit":
              return !1;
          }
        return !!eV[t.tagName];
      }
      let eQ = (t) => t.replace(/\S/g, "x");
      function eZ(t, e, n) {
        var r;
        let i =
            null === (r = t.parentElement) || void 0 === r ? void 0 : r.tagName,
          o = t.textContent || "";
        if (!e || o.trim()) {
          if ("SCRIPT" === i) o = eU;
          else if (n === ez.HIDDEN) o = eU;
          else if (eH(t, n)) {
            if ("DATALIST" === i || "SELECT" === i || "OPTGROUP" === i) {
              if (!o.trim()) return;
            } else o = "OPTION" === i ? eU : eQ(o);
          }
          return o;
        }
      }
      function eW(t) {
        return `[${ej}="${t}"], .dd-privacy-${t}`;
      }
      let eJ = "data-dd-action-name";
      function eX(t, e) {
        let n = t.closest(`[${e}]`);
        if (n) return e5(e2(n.getAttribute(e).trim()));
      }
      let eY = [
          (t, e) => {
            if ("labels" in t && t.labels && t.labels.length > 0)
              return e6(t.labels[0], e);
          },
          (t) => {
            if ("INPUT" === t.nodeName) {
              let e = t.getAttribute("type");
              if ("button" === e || "submit" === e || "reset" === e)
                return { name: t.value, nameSource: "text_content" };
            }
          },
          (t, e, n) => {
            if (
              "BUTTON" === t.nodeName ||
              "LABEL" === t.nodeName ||
              "button" === t.getAttribute("role")
            )
              return e6(t, e, n);
          },
          (t) => e3(t, "aria-label"),
          (t, e, n) => {
            let r = t.getAttribute("aria-labelledby");
            if (r)
              return {
                name: r
                  .split(/\s+/)
                  .map((e) =>
                    t.ownerDocument ? t.ownerDocument.getElementById(e) : null,
                  )
                  .filter((t) => !!t)
                  .map((t) => e4(t, e, n))
                  .join(" "),
                nameSource: "text_content",
              };
          },
          (t) => e3(t, "alt"),
          (t) => e3(t, "name"),
          (t) => e3(t, "title"),
          (t) => e3(t, "placeholder"),
          (t, e) => {
            if ("options" in t && t.options.length > 0)
              return e6(t.options[0], e);
          },
        ],
        e0 = [(t, e, n) => e6(t, e, n)];
      function e1(t, e, n, r) {
        let i = t,
          o = 0;
        for (
          ;
          o <= 10 &&
          i &&
          "BODY" !== i.nodeName &&
          "HTML" !== i.nodeName &&
          "HEAD" !== i.nodeName;

        ) {
          for (let t of n) {
            let n = t(i, e, r);
            if (n) {
              let { name: t, nameSource: e } = n,
                r = t && t.trim();
              if (r) return { name: e5(e2(r)), nameSource: e };
            }
          }
          if ("FORM" === i.nodeName) break;
          (i = i.parentElement), (o += 1);
        }
      }
      function e2(t) {
        return t.replace(/\s+/g, " ");
      }
      function e5(t) {
        return t.length > 100 ? `${H(t, 100)} [...]` : t;
      }
      function e3(t, e) {
        return {
          name: t.getAttribute(e) || "",
          nameSource: "standard_attribute",
        };
      }
      function e6(t, e, n) {
        return { name: e4(t, e, n) || "", nameSource: "text_content" };
      }
      function e4(t, e, n) {
        if (!t.isContentEditable) {
          if ("innerText" in t) {
            let r = t.innerText,
              i = (e) => {
                let n = t.querySelectorAll(e);
                for (let t = 0; t < n.length; t += 1) {
                  let e = n[t];
                  if ("innerText" in e) {
                    let t = e.innerText;
                    t && t.trim().length > 0 && (r = r.replace(t, ""));
                  }
                }
              };
            return (
              i(`[${eJ}]`),
              e && i(`[${e}]`),
              n && i(`${eW(ez.HIDDEN)}, ${eW(ez.MASK)}`),
              r
            );
          }
          return t.textContent;
        }
      }
      let e8 = [
          eJ,
          "data-testid",
          "data-test",
          "data-qa",
          "data-cy",
          "data-test-id",
          "data-qa-id",
          "data-testing",
          "data-component",
          "data-element",
          "data-source-file",
        ],
        e7 = [
          nn,
          function (t) {
            if (t.id && !ne(t.id)) return `#${CSS.escape(t.id)}`;
          },
        ],
        e9 = [
          nn,
          function (t) {
            if ("BODY" === t.tagName) return;
            let e = t.classList;
            for (let n = 0; n < e.length; n += 1) {
              let r = e[n];
              if (!ne(r)) return `${CSS.escape(t.tagName)}.${CSS.escape(r)}`;
            }
          },
          function (t) {
            return CSS.escape(t.tagName);
          },
        ];
      function nt(t, e) {
        let n;
        if (!t.isConnected) return;
        let r = t;
        for (; r && "HTML" !== r.nodeName; ) {
          let t = nr(r, e7, ni, e, n);
          if (t) return t;
          (n =
            nr(r, e9, no, e, n) ||
            na(
              (function (t) {
                let e = t.parentElement.firstElementChild,
                  n = 1;
                for (; e && e !== t; )
                  e.tagName === t.tagName && (n += 1),
                    (e = e.nextElementSibling);
                return `${CSS.escape(t.tagName)}:nth-of-type(${n})`;
              })(r),
              n,
            )),
            (r = r.parentElement);
        }
        return n;
      }
      function ne(t) {
        return /[0-9]/.test(t);
      }
      function nn(t, e) {
        if (e) {
          let t = n(e);
          if (t) return t;
        }
        for (let t of e8) {
          let e = n(t);
          if (e) return e;
        }
        function n(e) {
          if (t.hasAttribute(e))
            return `${CSS.escape(t.tagName)}[${e}="${CSS.escape(
              t.getAttribute(e),
            )}"]`;
        }
      }
      function nr(t, e, n, r, i) {
        for (let o of e) {
          let e = o(t, r);
          if (e && n(t, e, i)) return na(e, i);
        }
      }
      function ni(t, e, n) {
        return 1 === t.ownerDocument.querySelectorAll(na(e, n)).length;
      }
      function no(t, e, n) {
        let r;
        if (void 0 === n) r = (t) => t.matches(e);
        else {
          let t = na(`${e}:scope`, n);
          r = (e) => null !== e.querySelector(t);
        }
        let i = t.parentElement.firstElementChild;
        for (; i; ) {
          if (i !== t && r(i)) return !1;
          i = i.nextElementSibling;
        }
        return !0;
      }
      function na(t, e) {
        return e ? `${t}>${e}` : t;
      }
      let ns = q.WT;
      function nu() {
        let t = window.getSelection();
        return !t || t.isCollapsed;
      }
      function nl(t) {
        return t.target instanceof Element && !1 !== t.isPrimary;
      }
      function nc(t) {
        return (
          !t.hasPageActivity &&
          !t.getUserActivity().input &&
          !t.getUserActivity().scroll &&
          !t.event.target.matches(
            'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="range"]),textarea,select,[contenteditable],[contenteditable] *,canvas,a[href],a[href] *',
          )
        );
      }
      let nd = 10 * q.WT,
        nf = new Map();
      function np(t, e) {
        nf.set(t, e),
          nf.forEach((t, e) => {
            (0, q._J)(e, (0, q._q)()) > nd && nf.delete(e);
          });
      }
      let nh = 5 * q.yR;
      function ng(t) {
        let e = nm(t)
            ? {
                action: {
                  id: t.id,
                  loading_time: ek((0, q.c0)(t.duration)),
                  frustration: { type: t.frustrationTypes },
                  error: { count: t.counts.errorCount },
                  long_task: { count: t.counts.longTaskCount },
                  resource: { count: t.counts.resourceCount },
                },
                _dd: {
                  action: {
                    target: t.target,
                    position: t.position,
                    name_source: t.nameSource,
                  },
                },
              }
            : void 0,
          n = (0, T.$e)(
            {
              action: { id: B(), target: { name: t.name }, type: t.type },
              date: t.startClocks.timeStamp,
              type: "action",
            },
            e,
          ),
          r = nm(t) ? t.duration : void 0,
          i = nm(t) ? void 0 : t.context,
          o = nm(t) ? { events: t.events } : { handlingStack: t.handlingStack };
        return {
          customerContext: i,
          rawRumEvent: n,
          duration: r,
          startTime: t.startClocks.relative,
          domainContext: o,
        };
      }
      function nm(t) {
        return "custom" !== t.type;
      }
      var ny = n(48225),
        nv = n(24446);
      let n_ = {},
        nb = "csp_violation";
      function nw(t) {
        return {
          startClocks: (0, q.$I)(),
          source: t0.z.REPORT,
          handling: "unhandled",
          ...t,
        };
      }
      function nS(t, e, n, r, i) {
        return n
          ? (0, U.P3)({
              name: t,
              message: e,
              stack: [
                {
                  func: "?",
                  url: n,
                  line: null != r ? r : void 0,
                  column: null != i ? i : void 0,
                },
              ],
            })
          : void 0;
      }
      var nk = n(81186);
      let nx = q.WT,
        nA = new WeakSet();
      function nT(t) {
        return (0, q.WK)(t.startTime, t.duration);
      }
      var nC = n(80320);
      let nE = 2 * q.yR;
      function nO(t, e) {
        let n = e && Number(e);
        if (t && n) return { traceId: t, traceTime: n };
      }
      function nR(t) {
        if (t && t.nodeType === Node.COMMENT_NODE) {
          let e = /^\s*DATADOG;(.*?)\s*$/.exec(t.data);
          if (e) return e[1];
        }
      }
      function nI() {
        if (eT(y.NAVIGATION)) {
          let t = performance.getEntriesByType(y.NAVIGATION)[0];
          if (t) return t;
        }
        let t = (function () {
            let t = {},
              e = performance.timing;
            for (let n in e)
              if ((0, ts.hj)(e[n])) {
                let r = e[n];
                t[n] = 0 === r ? 0 : (0, q.ni)(r);
              }
            return t;
          })(),
          e = {
            entryType: y.NAVIGATION,
            initiatorType: "navigation",
            name: window.location.href,
            startTime: 0,
            duration: t.loadEventEnd,
            decodedBodySize: 0,
            encodedBodySize: 0,
            transferSize: 0,
            workerStart: 0,
            toJSON: () => ({ ...e, toJSON: void 0 }),
            ...t,
          };
        return e;
      }
      function nN(t, e) {
        var n;
        let r = (0, q.DY)(t.startTime),
          i = (function (t, e) {
            if (t.traceId)
              return {
                _dd: {
                  trace_id: t.traceId,
                  span_id: tB(63).toString(),
                  rule_psr: e.rulePsr,
                },
              };
          })(t, e);
        if (!e.trackResources && !i) return;
        let o = (function (t) {
            let e = t.name;
            if (!(0, Y.jv)(e))
              return (
                (0, j.eJ)(`Failed to construct URL for "${t.name}"`), "other"
              );
            let n = (0, Y.ye)(e);
            for (let [e, r] of el) if (r(t.initiatorType, n)) return e;
            return "other";
          })(t),
          a = nP(t),
          s = ed(t),
          u = (0, T.$e)(
            {
              date: r.timeStamp,
              resource: {
                id: B(),
                type: o,
                duration: (0, q.c0)(s),
                url: t.name,
                status_code: 0 === (n = t.responseStatus) ? void 0 : n,
                protocol: eg(t),
                delivery_type: em(t),
              },
              type: "resource",
              _dd: { discarded: !e.trackResources },
            },
            i,
            a,
          );
        return {
          startTime: r.relative,
          duration: s,
          rawRumEvent: u,
          domainContext: { performanceEntry: t },
        };
      }
      function nP(t) {
        let { renderBlockingStatus: e } = t;
        return {
          resource: {
            render_blocking_status: e,
            ...(function (t) {
              if (t.startTime < t.responseStart) {
                let {
                  encodedBodySize: e,
                  decodedBodySize: n,
                  transferSize: r,
                } = t;
                return {
                  size: n,
                  encoded_body_size: e,
                  decoded_body_size: n,
                  transfer_size: r,
                };
              }
              return {
                size: void 0,
                encoded_body_size: void 0,
                decoded_body_size: void 0,
                transfer_size: void 0,
              };
            })(t),
            ...(function (t) {
              if (!ep(t)) return;
              let {
                  startTime: e,
                  fetchStart: n,
                  workerStart: r,
                  redirectStart: i,
                  redirectEnd: o,
                  domainLookupStart: a,
                  domainLookupEnd: s,
                  connectStart: u,
                  secureConnectionStart: l,
                  connectEnd: c,
                  requestStart: d,
                  responseStart: f,
                  responseEnd: p,
                } = t,
                h = { download: eh(e, f, p), first_byte: eh(e, d, f) };
              return (
                0 < r && r < n && (h.worker = eh(e, r, n)),
                n < c &&
                  ((h.connect = eh(e, u, c)),
                  u <= l && l <= c && (h.ssl = eh(e, l, c))),
                n < s && (h.dns = eh(e, a, s)),
                e < o && (h.redirect = eh(e, i, o)),
                h
              );
            })(t),
          },
        };
      }
      let n$ = 10 * q.yR,
        nD = 10 * q.yR;
      function nM(t, e = window) {
        let n, r;
        return (
          "hidden" === document.visibilityState
            ? (n = 0)
            : ((n = 1 / 0),
              ({ stop: r } = (0, P.y)(
                t,
                e,
                ["pagehide", "visibilitychange"],
                (t) => {
                  ("pagehide" === t.type ||
                    "hidden" === document.visibilityState) &&
                    ((n = t.timeStamp), r());
                },
                { capture: !0 },
              ))),
          {
            get timeStamp() {
              return n;
            },
            stop() {
              null == r || r();
            },
          }
        );
      }
      function nz({ x: t, y: e, width: n, height: r }) {
        return { x: t, y: e, width: n, height: r };
      }
      let nj = 5 * q.WT,
        nL = q.WT,
        nU = 0,
        nq = 1 / 0,
        nV = 0,
        nB = () => (d ? nU : window.performance.interactionCount || 0),
        nF = 1 * q.yR;
      function nG() {
        let t = window.visualViewport;
        return Math.round(
          t
            ? t.pageLeft - t.offsetLeft
            : void 0 !== window.scrollX
              ? window.scrollX
              : window.pageXOffset || 0,
        );
      }
      function nH() {
        let t = window.visualViewport;
        return Math.round(
          t
            ? t.pageTop - t.offsetTop
            : void 0 !== window.scrollY
              ? window.scrollY
              : window.pageYOffset || 0,
        );
      }
      function nK(t) {
        return (
          f ||
            (f = new E.y((e) => {
              let { throttled: n } = (0, _.P)(() => {
                e.notify(nQ());
              }, 200);
              return (0, P.O)(t, window, "resize", n, {
                capture: !0,
                passive: !0,
              }).stop;
            })),
          f
        );
      }
      function nQ() {
        let t = window.visualViewport;
        return t
          ? {
              width: Number(t.width * t.scale),
              height: Number(t.height * t.scale),
            }
          : {
              width: Number(window.innerWidth || 0),
              height: Number(window.innerHeight || 0),
            };
      }
      let nZ = q.WT,
        nW = 5 * q.yR,
        nJ = 5 * q.yR;
      function nX(t) {
        let e = t.indexOf("?");
        return e < 0 ? t : t.slice(0, e);
      }
      let nY = q.yR,
        n0 = [];
      function n1(t) {
        return "2" === t || "1" === t;
      }
      function n2(t) {
        return {
          data:
            "string" == typeof t.output
              ? t.output
              : new Blob([t.output], { type: "text/plain" }),
          bytesCount: t.outputBytesCount,
          encoding: t.encoding,
        };
      }
      var n5 = n(91260);
      function n3(t) {
        return Object.prototype.hasOwnProperty.call(history, t)
          ? history
          : History.prototype;
      }
      let n6 = 10 * q.WT;
      function n4() {
        0 !== p.batchCount && ((0, j.eJ)("Customer data measures", p), rt());
      }
      function n8() {
        return { min: 1 / 0, max: 0, sum: 0 };
      }
      function n7(t, e) {
        (t.sum += e),
          (t.min = Math.min(t.min, e)),
          (t.max = Math.max(t.max, e));
      }
      function n9(t, e) {
        (t.sum += e.sum),
          (t.min = Math.min(t.min, e.min)),
          (t.max = Math.max(t.max, e.max));
      }
      function rt() {
        p = {
          batchCount: 0,
          batchBytesCount: n8(),
          batchMessagesCount: n8(),
          globalContextBytes: n8(),
          userContextBytes: n8(),
          featureFlagBytes: n8(),
        };
      }
      function re() {
        (g = !1),
          (h = {
            globalContextBytes: n8(),
            userContextBytes: n8(),
            featureFlagBytes: n8(),
          });
      }
      function rn() {
        return "hidden" === document.visibilityState
          ? "hidden"
          : document.hasFocus()
            ? "active"
            : "passive";
      }
      let rr = q.WT;
      function ri(t, e) {
        let n = G(document.cookie, t),
          r = (0, tu.Zi)(() => {
            let r = G(document.cookie, t);
            r !== n && e(r);
          }, rr);
        return () => {
          (0, tu.cv)(r);
        };
      }
      let ro = "datadog-ci-visibility-test-execution-id";
      function ra(t, e, n, r, i, o, a, s) {
        var c, f, m, k, x;
        let A;
        let R = [],
          N = new t8(),
          $ = (function () {
            let t = {};
            return {
              register: (e, n) => (
                t[e] || (t[e] = []),
                t[e].push(n),
                {
                  unregister: () => {
                    t[e] = t[e].filter((t) => t !== n);
                  },
                }
              ),
              triggerHook(e, n) {
                let r = (t[e] || []).map((t) => t(n));
                return (0, T.$e)(...r);
              },
            };
          })();
        N.subscribe(13, (t) => (0, tW.j)("rum", t));
        let D = (function (t) {
          let e = (0, j.VL)("browser-rum-sdk", t);
          if ((0, J.xT)()) {
            let t = (0, J.Ad)();
            e.observable.subscribe((e) => t.send("internal_telemetry", e));
          }
          return e;
        })(t);
        D.setContextProvider(() => {
          var e, n;
          return {
            application: { id: t.applicationId },
            session: {
              id:
                null === (e = F.findTrackedSession()) || void 0 === e
                  ? void 0
                  : e.id,
            },
            view: {
              id: null === (n = tr.findView()) || void 0 === n ? void 0 : n.id,
            },
            action: { id: tA.findActionId() },
          };
        });
        let M = (t) => {
            N.notify(14, { error: t }),
              (0, j.eJ)("Error reported to customer", {
                "error.message": t.message,
              });
          },
          L = (0, tJ.Pd)(t),
          V = L.subscribe((t) => {
            N.notify(11, t);
          });
        R.push(() => V.unsubscribe());
        let F = (0, J.xT)()
          ? (function () {
              let t = {
                id: "00000000-aaaa-0000-aaaa-000000000000",
                sessionReplay: (0, J.ke)("records") ? 1 : 0,
              };
              return {
                findTrackedSession: () => t,
                expire: _.Z,
                expireObservable: new E.y(),
                setForcedReplay: _.Z,
              };
            })()
          : (function (t, e, n) {
              let r = (function (t, e, n, r) {
                let i = new E.y(),
                  o = new E.y(),
                  a = (function (t, e, n, r) {
                    let i;
                    let o = new E.y(),
                      a = new E.y(),
                      s = new E.y(),
                      u =
                        t.type === tg.COOKIE
                          ? (function (t, e) {
                              let n = {
                                isLockEnabled: (0, tl.mJ)(),
                                persistSession: (t) => {
                                  tn(tc, tw(t), tp, e);
                                },
                                retrieveSession: tx,
                                expireSession: (n) => {
                                  tn(
                                    tc,
                                    tw(ty(n, t)),
                                    t.trackAnonymousUser ? th : tf,
                                    e,
                                  );
                                },
                              };
                              return (
                                !(function (t) {
                                  if (!ti(tc)) {
                                    let e = ti("_dd"),
                                      n = ti("_dd_r"),
                                      r = ti("_dd_l"),
                                      i = {};
                                    e && (i.id = e),
                                      r && /^[01]$/.test(r) && (i.logs = r),
                                      n && /^[012]$/.test(n) && (i.rum = n),
                                      tv(i) || (tb(i), t.persistSession(i));
                                  }
                                })(n),
                                n
                              );
                            })(e, t.cookieOptions)
                          : {
                              isLockEnabled: !1,
                              persistSession: tT,
                              retrieveSession: tC,
                              expireSession: (t) => {
                                tT(ty(t, e));
                              },
                            },
                      { expireSession: l } = u,
                      c = (0, tu.Zi)(function () {
                        tO(
                          {
                            process: (t) => (t_(t) ? ty(t, e) : void 0),
                            after: p,
                          },
                          u,
                        );
                      }, tN);
                    h();
                    let { throttled: d, cancel: f } = (0, _.P)(() => {
                      tO(
                        {
                          process: (t) => {
                            if (tv(t)) return;
                            let e = p(t);
                            return (
                              (function (t) {
                                if (tv(t)) return 0;
                                let { trackingType: e, isTracked: n } = r(
                                  t.rum,
                                );
                                (t.rum = e),
                                  delete t.isExpired,
                                  n &&
                                    !t.id &&
                                    ((t.id = B()),
                                    (t.created = String((0, q.m6)())));
                              })(e),
                              e
                            );
                          },
                          after: (t) => {
                            !tv(t) && !g() && ((i = t), o.notify()), (i = t);
                          },
                        },
                        u,
                      );
                    }, tN);
                    function p(t) {
                      var r;
                      return (
                        t_(t) && (t = ty(t, e)),
                        g() &&
                          (((r = t), i.id !== r.id || i[n] !== r[n])
                            ? ((i = ty(i, e)), a.notify())
                            : (s.notify({ previousState: i, newState: t }),
                              (i = t))),
                        t
                      );
                    }
                    function h() {
                      tO(
                        {
                          process: (t) => {
                            if (tv(t)) return ty(t, e);
                          },
                          after: (t) => {
                            i = t;
                          },
                        },
                        u,
                      );
                    }
                    function g() {
                      return void 0 !== i[n];
                    }
                    return {
                      expandOrRenewSession: d,
                      expandSession: function () {
                        tO({ process: (t) => (g() ? p(t) : void 0) }, u);
                      },
                      getSession: () => i,
                      renewObservable: o,
                      expireObservable: a,
                      sessionStateUpdateObservable: s,
                      restartSession: h,
                      expire: () => {
                        f(), l(i), p(ty(i, e));
                      },
                      stop: () => {
                        (0, tu.cv)(c);
                      },
                      updateSessionState: function (t) {
                        tO({ process: (e) => ({ ...e, ...t }), after: p }, u);
                      },
                    };
                  })(t.sessionStoreStrategyType, t, "rum", n);
                n0.push(() => a.stop());
                let s = er({ expireDelay: tf });
                function u() {
                  return {
                    id: a.getSession().id,
                    trackingType: a.getSession().rum,
                    isReplayForced: !!a.getSession().forcedReplay,
                    anonymousId: a.getSession().anonymousId,
                  };
                }
                return (
                  n0.push(() => s.stop()),
                  a.renewObservable.subscribe(() => {
                    s.add(u(), (0, q._q)()), i.notify();
                  }),
                  a.expireObservable.subscribe(() => {
                    o.notify(), s.closeActive((0, q._q)());
                  }),
                  a.expandOrRenewSession(),
                  s.add(u(), (0, q.cQ)().relative),
                  r.observable.subscribe(() => {
                    r.isGranted() ? a.expandOrRenewSession() : a.expire();
                  }),
                  (function (t, e) {
                    let { stop: n } = (0, P.y)(
                      t,
                      window,
                      ["click", "touchstart", "keydown", "scroll"],
                      e,
                      { capture: !0, passive: !0 },
                    );
                    n0.push(n);
                  })(t, () => {
                    r.isGranted() && a.expandOrRenewSession();
                  }),
                  (function (t, e) {
                    let n = () => {
                        "visible" === document.visibilityState && e();
                      },
                      { stop: r } = (0, P.O)(
                        t,
                        document,
                        "visibilitychange",
                        n,
                      );
                    n0.push(r);
                    let i = (0, tu.Zi)(n, nY);
                    n0.push(() => {
                      (0, tu.cv)(i);
                    });
                  })(t, () => a.expandSession()),
                  (function (t, e) {
                    let { stop: n } = (0, P.O)(t, window, "resume", e, {
                      capture: !0,
                    });
                    n0.push(n);
                  })(t, () => a.restartSession()),
                  {
                    findSession: (t, e) => s.find(t, e),
                    renewObservable: i,
                    expireObservable: o,
                    sessionStateUpdateObservable:
                      a.sessionStateUpdateObservable,
                    expire: a.expire,
                    updateSessionState: a.updateSessionState,
                  }
                );
              })(
                t,
                0,
                (e) => {
                  let n;
                  return {
                    trackingType: (n =
                      "0" === e || "1" === e || "2" === e
                        ? e
                        : (0, ts.y7)(t.sessionSampleRate)
                          ? (0, ts.y7)(t.sessionReplaySampleRate)
                            ? "1"
                            : "2"
                          : "0"),
                    isTracked: n1(n),
                  };
                },
                n,
              );
              return (
                r.expireObservable.subscribe(() => {
                  e.notify(9);
                }),
                r.renewObservable.subscribe(() => {
                  e.notify(10);
                }),
                r.sessionStateUpdateObservable.subscribe(
                  ({ previousState: t, newState: e }) => {
                    if (!t.forcedReplay && e.forcedReplay) {
                      let t = r.findSession();
                      t && (t.isReplayForced = !0);
                    }
                  },
                ),
                {
                  findTrackedSession: (t) => {
                    let e = r.findSession(t);
                    if (e && n1(e.trackingType))
                      return {
                        id: e.id,
                        sessionReplay:
                          "1" === e.trackingType ? 1 : e.isReplayForced ? 2 : 0,
                        anonymousId: e.anonymousId,
                      };
                  },
                  expire: r.expire,
                  expireObservable: r.expireObservable,
                  setForcedReplay: () =>
                    r.updateSessionState({ forcedReplay: "1" }),
                }
              );
            })(t, N, a);
        if ((0, J.xT)())
          !(function (t) {
            let e = (0, J.Ad)();
            t.subscribe(13, (t) => {
              e.send("rum", t);
            });
          })(N);
        else {
          let e = (function (t, e, n, r, i, o, a) {
            let s = t.replica,
              u = (function (
                t,
                e,
                n,
                r,
                i,
                o,
                a = function ({
                  encoder: t,
                  request: e,
                  flushController: n,
                  messageBytesLimit: r,
                }) {
                  let i = {},
                    o = n.flushObservable.subscribe((n) =>
                      (function (n) {
                        let r = (0, td.TT)(i).join("\n");
                        i = {};
                        let o = (0, tJ.PT)(n.reason),
                          a = o ? e.sendOnExit : e.send;
                        if (o && t.isAsync) {
                          let e = t.finishSync();
                          e.outputBytesCount && a(n2(e));
                          let n = [e.pendingData, r].filter(Boolean).join("\n");
                          n && a({ data: n, bytesCount: (0, v.qt)(n) });
                        } else
                          r &&
                            t.write(
                              t.isEmpty
                                ? r
                                : `
${r}`,
                            ),
                            t.finish((t) => {
                              a(n2(t));
                            });
                      })(n),
                    );
                  function a(e, o) {
                    let a = (0, b.l)(e),
                      s = t.estimateEncodedBytesCount(a);
                    if (s >= r) {
                      w.jf.warn(
                        `Discarded a message whose size was bigger than the maximum allowed size ${r}KB. ${w.IA} ${w.Qo}/#technical-limitations`,
                      );
                      return;
                    }
                    void 0 !== o &&
                      void 0 !== i[o] &&
                      (function (e) {
                        let r = i[e];
                        delete i[e];
                        let o = t.estimateEncodedBytesCount(r);
                        n.notifyAfterRemoveMessage(o);
                      })(o),
                      n.notifyBeforeAddMessage(s),
                      void 0 !== o
                        ? ((i[o] = a), n.notifyAfterAddMessage())
                        : t.write(
                            t.isEmpty
                              ? a
                              : `
${a}`,
                            (t) => {
                              n.notifyAfterAddMessage(t - s);
                            },
                          );
                  }
                  return {
                    flushController: n,
                    add: a,
                    upsert: a,
                    stop: o.unsubscribe,
                  };
                },
              ) {
                let s = l(t, e),
                  u = n && l(t, n);
                function l(t, { endpoint: e, encoder: n }) {
                  return a({
                    encoder: n,
                    request: (0, n5.UF)(e, t.batchBytesLimit, r),
                    flushController: (function ({
                      messagesLimit: t,
                      bytesLimit: e,
                      durationLimit: n,
                      pageExitObservable: r,
                      sessionExpireObservable: i,
                    }) {
                      let o;
                      let a = r.subscribe((t) => d(t.reason)),
                        s = i.subscribe(() => d("session_expire")),
                        u = new E.y(() => () => {
                          a.unsubscribe(), s.unsubscribe();
                        }),
                        l = 0,
                        c = 0;
                      function d(t) {
                        if (0 === c) return;
                        let e = c,
                          n = l;
                        (c = 0),
                          (l = 0),
                          f(),
                          u.notify({
                            reason: t,
                            messagesCount: e,
                            bytesCount: n,
                          });
                      }
                      function f() {
                        (0, tu.gr)(o), (o = void 0);
                      }
                      return {
                        flushObservable: u,
                        get messagesCount() {
                          return c;
                        },
                        notifyBeforeAddMessage(t) {
                          l + t >= e && d("bytes_limit"),
                            (c += 1),
                            (l += t),
                            void 0 === o &&
                              (o = (0, tu.iK)(() => {
                                d("duration_limit");
                              }, n));
                        },
                        notifyAfterAddMessage(n = 0) {
                          (l += n),
                            c >= t
                              ? d("messages_limit")
                              : l >= e && d("bytes_limit");
                        },
                        notifyAfterRemoveMessage(t) {
                          (l -= t), 0 == (c -= 1) && f();
                        },
                      };
                    })({
                      messagesLimit: t.batchMessagesLimit,
                      bytesLimit: t.batchBytesLimit,
                      durationLimit: t.flushTimeout,
                      pageExitObservable: i,
                      sessionExpireObservable: o,
                    }),
                    messageBytesLimit: t.messageBytesLimit,
                  });
                }
                return {
                  flushObservable: s.flushController.flushObservable,
                  add(t, e = !0) {
                    s.add(t),
                      u &&
                        e &&
                        u.add(n.transformMessage ? n.transformMessage(t) : t);
                  },
                  upsert: (t, e) => {
                    s.upsert(t, e),
                      u &&
                        u.upsert(
                          n.transformMessage ? n.transformMessage(t) : t,
                          e,
                        );
                  },
                  stop: () => {
                    s.stop(), u && u.stop();
                  },
                };
              })(
                t,
                { endpoint: t.rumEndpointBuilder, encoder: a(2) },
                s && {
                  endpoint: s.rumEndpointBuilder,
                  transformMessage: (t) =>
                    (0, T.$e)(t, { application: { id: s.applicationId } }),
                  encoder: a(3),
                },
                r,
                i,
                o,
              );
            return (
              e.subscribe(13, (t) => {
                "view" === t.type ? u.upsert(t, t.view.id) : u.add(t);
              }),
              n.subscribe((e) => u.add(e, (0, j.VG)(t))),
              u
            );
          })(t, N, D.observable, M, L, F.expireObservable, o);
          R.push(() => e.stop()),
            (x = e.flushObservable),
            D.enabled &&
              (0, ts.y7)(t.customerDataTelemetrySampleRate) &&
              (rt(),
              re(),
              N.subscribe(13, (t) => {
                (g = !0),
                  n7(
                    h.globalContextBytes,
                    n.getOrCreateTracker(2).getBytesCount(),
                  ),
                  n7(
                    h.userContextBytes,
                    n.getOrCreateTracker(1).getBytesCount(),
                  ),
                  n7(
                    h.featureFlagBytes,
                    ["view", "error"].includes(t.type)
                      ? n.getOrCreateTracker(0).getBytesCount()
                      : 0,
                  );
              }),
              x.subscribe(({ bytesCount: t, messagesCount: e }) => {
                g &&
                  ((p.batchCount += 1),
                  n7(p.batchBytesCount, t),
                  n7(p.batchMessagesCount, e),
                  n9(p.globalContextBytes, h.globalContextBytes),
                  n9(p.userContextBytes, h.userContextBytes),
                  n9(p.featureFlagBytes, h.featureFlagBytes),
                  re());
              }),
              (0, tu.Zi)(n4, n6));
        }
        let Z = (function () {
            let t = tY();
            return new E.y((e) => {
              if (!t) return;
              let n = new t((0, z.zk)(() => e.notify()));
              return (
                n.observe(document, {
                  attributes: !0,
                  characterData: !0,
                  childList: !0,
                  subtree: !0,
                }),
                () => n.disconnect()
              );
            });
          })(),
          W =
            ((f = location),
            (A = (0, S.mv)(f)),
            new E.y((e) => {
              let { stop: n } = (function (t, e) {
                  let { stop: n } = (0, X.S)(
                      n3("pushState"),
                      "pushState",
                      ({ onPostCall: t }) => {
                        t(e);
                      },
                    ),
                    { stop: r } = (0, X.S)(
                      n3("replaceState"),
                      "replaceState",
                      ({ onPostCall: t }) => {
                        t(e);
                      },
                    ),
                    { stop: i } = (0, P.O)(t, window, "popstate", e);
                  return {
                    stop: () => {
                      n(), r(), i();
                    },
                  };
                })(t, i),
                { stop: r } = (0, P.O)(t, window, "hashchange", i);
              function i() {
                if (A.href === f.href) return;
                let t = (0, S.mv)(f);
                e.notify({ newLocation: t, oldLocation: A }), (A = t);
              }
              return () => {
                n(), r();
              };
            })),
          Y = (function (t, e, n = 500) {
            let r;
            let i = er({ expireDelay: tf, maxEntries: 4e3 });
            a(rn(), (0, q._q)());
            let { stop: o } = (0, P.y)(
              e,
              window,
              [
                "pageshow",
                "focus",
                "blur",
                "visibilitychange",
                "resume",
                "freeze",
                "pagehide",
              ],
              (t) => {
                a(
                  "freeze" === t.type
                    ? "frozen"
                    : "pagehide" === t.type
                      ? t.persisted
                        ? "frozen"
                        : "terminated"
                      : rn(),
                  t.timeStamp,
                );
              },
              { capture: !0 },
            );
            function a(t, e = (0, q._q)()) {
              t !== r &&
                ((r = t),
                i.closeActive(e),
                i.add({ state: r, startTime: e }, e));
            }
            function s(t, e, n) {
              return i.findAll(e, n).some((e) => e.state === t);
            }
            return (
              t.register(
                0,
                ({ startTime: t, duration: e = 0, eventType: r }) =>
                  "view" === r
                    ? {
                        type: r,
                        _dd: {
                          page_states: (function (t, e, n) {
                            if (0 !== t.length)
                              return t
                                .slice(-n)
                                .reverse()
                                .map(({ state: t, startTime: n }) => ({
                                  state: t,
                                  start: (0, q.c0)((0, q._J)(e, n)),
                                }));
                          })(i.findAll(t, e), t, n),
                        },
                      }
                    : "action" === r || "error" === r
                      ? { type: r, view: { in_foreground: s("active", t, 0) } }
                      : void 0,
              ),
              {
                wasInPageStateDuringPeriod: s,
                addPageState: a,
                stop: () => {
                  o(), i.stop();
                },
              }
            );
          })($, t),
          tr = (function (t) {
            let e = er({ expireDelay: tf });
            return (
              t.subscribe(1, (t) => {
                e.add(
                  {
                    service: t.service,
                    version: t.version,
                    context: t.context,
                    id: t.id,
                    name: t.name,
                    startClocks: t.startClocks,
                  },
                  t.startClocks.relative,
                );
              }),
              t.subscribe(6, ({ endClocks: t }) => {
                e.closeActive(t.relative);
              }),
              t.subscribe(3, (t) => {
                let n = e.find(t.startClocks.relative);
                n && t.name && (n.name = t.name),
                  n && t.context && (n.context = t.context);
              }),
              t.subscribe(10, () => {
                e.reset();
              }),
              {
                findView: (t) => e.find(t),
                getAllEntries: () => e.getAllEntries(),
                getDeletedEntries: () => e.getDeletedEntries(),
                stop: () => {
                  e.stop();
                },
              }
            );
          })(N),
          ta = (function (t, e, n, r) {
            let i;
            let o = er({ expireDelay: tf });
            t.subscribe(1, ({ startClocks: t }) => {
              let e = r.href;
              o.add(
                s({ url: e, referrer: i || document.referrer }),
                t.relative,
              ),
                (i = e);
            }),
              t.subscribe(6, ({ endClocks: t }) => {
                o.closeActive(t.relative);
              });
            let a = n.subscribe(({ newLocation: t }) => {
              let e = o.find();
              if (e) {
                let n = (0, q._q)();
                o.closeActive(n),
                  o.add(s({ url: t.href, referrer: e.referrer }), n);
              }
            });
            function s({ url: t, referrer: e }) {
              return { url: t, referrer: e };
            }
            return (
              e.register(0, ({ startTime: t, eventType: e }) => {
                let { url: n, referrer: r } = o.find(t);
                return { type: e, view: { url: n, referrer: r } };
              }),
              {
                findUrl: (t) => o.find(t),
                getAllEntries: () => o.getAllEntries(),
                getDeletedEntries: () => o.getDeletedEntries(),
                stop: () => {
                  a.unsubscribe(), o.stop();
                },
              }
            );
          })(N, $, W, location),
          tm = (function (t, e, n, r) {
            let i = er({ expireDelay: tf });
            return (
              t.subscribe(1, ({ startClocks: t }) => {
                i.add({}, t.relative), r.resetCustomerData();
              }),
              t.subscribe(6, ({ endClocks: t }) => {
                i.closeActive(t.relative);
              }),
              e.register(0, ({ startTime: t, eventType: e }) => {
                if (
                  !n.trackFeatureFlagsForEvents
                    .concat(["view", "error"])
                    .includes(e)
                )
                  return;
                let r = i.find(t);
                if (!(!r || (0, S.Qr)(r))) return { type: e, feature_flags: r };
              }),
              {
                addFeatureFlagEvaluation: (t, e) => {
                  let n = i.find();
                  n && ((n[t] = e), r.updateCustomerData(n));
                },
                stop: () => r.stop(),
              }
            );
          })(N, $, t, n.getOrCreateTracker(0));
        R.push(() => tm.stop());
        let { observable: tS, stop: tk } = (function () {
          let t = new E.y(),
            { stop: e } = (0, X.S)(window, "open", () => t.notify());
          return { observable: t, stop: e };
        })();
        R.push(tk);
        let {
          actionContexts: tA,
          addAction: tE,
          stop: tR,
        } = (function (t, e, n, r, i, o, a, s, l, c, d) {
          let f, p;
          let h =
              (t.subscribe(0, (e) => t.notify(12, ng(e))),
              e.register(0, ({ startTime: t, eventType: e }) => {
                if ("error" !== e && "resource" !== e && "long_task" !== e)
                  return;
                let n = f.findActionId(t);
                if (n) return { type: e, action: { id: n } };
              }),
              (f = { findActionId: _.Z }),
              (p = _.Z),
              n.trackUserInteractions &&
                ({ actionContexts: f, stop: p } = (function (t, e, n, r) {
                  let i;
                  let o = er({ expireDelay: nh }),
                    a = new E.y();
                  t.subscribe(10, () => {
                    o.reset();
                  }),
                    t.subscribe(5, l);
                  let { stop: s } = (function (
                    t,
                    { onPointerDown: e, onPointerUp: n },
                  ) {
                    let r, i;
                    let o = { selection: !1, input: !1, scroll: !1 },
                      a = [
                        (0, P.O)(
                          t,
                          window,
                          "pointerdown",
                          (t) => {
                            nl(t) &&
                              ((r = nu()),
                              (o = { selection: !1, input: !1, scroll: !1 }),
                              (i = e(t)));
                          },
                          { capture: !0 },
                        ),
                        (0, P.O)(
                          t,
                          window,
                          "selectionchange",
                          () => {
                            (r && nu()) || (o.selection = !0);
                          },
                          { capture: !0 },
                        ),
                        (0, P.O)(
                          t,
                          window,
                          "scroll",
                          () => {
                            o.scroll = !0;
                          },
                          { capture: !0, passive: !0 },
                        ),
                        (0, P.O)(
                          t,
                          window,
                          "pointerup",
                          (t) => {
                            if (nl(t) && i) {
                              let e = o;
                              n(i, t, () => e), (i = void 0);
                            }
                          },
                          { capture: !0 },
                        ),
                        (0, P.O)(
                          t,
                          window,
                          "input",
                          () => {
                            o.input = !0;
                          },
                          { capture: !0 },
                        ),
                      ];
                    return {
                      stop: () => {
                        a.forEach((t) => t.stop());
                      },
                    };
                  })(r, {
                    onPointerDown: (i) =>
                      (function (t, e, n, r, i) {
                        var o;
                        let a = t.enablePrivacyForActionName
                          ? eB(r.target, t.defaultPrivacyLevel)
                          : ez.ALLOW;
                        if (a === ez.HIDDEN) return;
                        let s = (function (t, e, n) {
                            let r = t.target.getBoundingClientRect(),
                              i = nt(t.target, n.actionNameAttribute);
                            i && np(t.timeStamp, i);
                            let o = (function (
                              t,
                              {
                                enablePrivacyForActionName: e,
                                actionNameAttribute: n,
                              },
                              r,
                            ) {
                              let i = eX(t, eJ) || (n && eX(t, n));
                              return i
                                ? { name: i, nameSource: "custom_attribute" }
                                : r === ez.MASK
                                  ? {
                                      name: "Masked Element",
                                      nameSource: "mask_placeholder",
                                    }
                                  : e1(t, n, eY, e) ||
                                    e1(t, n, e0, e) || {
                                      name: "",
                                      nameSource: "blank",
                                    };
                            })(t.target, n, e);
                            return {
                              type: "click",
                              target: {
                                width: Math.round(r.width),
                                height: Math.round(r.height),
                                selector: i,
                              },
                              position: {
                                x: Math.round(t.clientX - r.left),
                                y: Math.round(t.clientY - r.top),
                              },
                              name: o.name,
                              nameSource: o.nameSource,
                            };
                          })(r, a, t),
                          u = !1;
                        return (
                          (o = (t) => {
                            u = t.hadActivity;
                          }),
                          eC(eE(e, n, i, t), o, 100),
                          {
                            clickActionBase: s,
                            hadActivityOnPointerDown: () => u,
                          }
                        );
                      })(r, t, e, i, n),
                    onPointerUp: (
                      { clickActionBase: i, hadActivityOnPointerDown: s },
                      l,
                      c,
                    ) => {
                      (function (t, e, n, r, i, o, a, s, u, l, c) {
                        var d, f;
                        let p = (function t(e, n, r, i, o) {
                          let a;
                          let s = B(),
                            u = (0, q.$I)(),
                            l = n.add(s, u.relative),
                            c = ex({
                              lifeCycle: e,
                              isChildEvent: (t) =>
                                void 0 !== t.action &&
                                (Array.isArray(t.action.id)
                                  ? t.action.id.includes(s)
                                  : t.action.id === s),
                            }),
                            d = 0,
                            f = [],
                            p = new E.y();
                          function h(t) {
                            0 === d &&
                              ((d = 1),
                              (a = t) ? l.close((0, q.ni)(a)) : l.remove(),
                              c.stop(),
                              p.notify());
                          }
                          return {
                            event: o,
                            stop: h,
                            stopObservable: p,
                            get hasError() {
                              return c.eventCounts.errorCount > 0;
                            },
                            get hasPageActivity() {
                              return void 0 !== a;
                            },
                            getUserActivity: r,
                            addFrustration: (t) => {
                              f.push(t);
                            },
                            startClocks: u,
                            isStopped: () => 1 === d || 2 === d,
                            clone: () => t(e, n, r, i, o),
                            validate: (t) => {
                              if ((h(), 1 !== d)) return;
                              let {
                                  resourceCount: n,
                                  errorCount: r,
                                  longTaskCount: l,
                                } = c.eventCounts,
                                p = {
                                  duration: a && (0, q._J)(u.timeStamp, a),
                                  startClocks: u,
                                  id: s,
                                  frustrationTypes: f,
                                  counts: {
                                    resourceCount: n,
                                    errorCount: r,
                                    longTaskCount: l,
                                  },
                                  events: null != t ? t : [o],
                                  event: o,
                                  ...i,
                                };
                              e.notify(0, p), (d = 2);
                            },
                            discard: () => {
                              h(), (d = 2);
                            },
                          };
                        })(e, i, l, s, u);
                        a(p);
                        let h =
                          null === (d = null == s ? void 0 : s.target) ||
                          void 0 === d
                            ? void 0
                            : d.selector;
                        h && np(u.timeStamp, h);
                        let { stop: g } =
                            ((f = (t) => {
                              t.hadActivity && t.end < p.startClocks.timeStamp
                                ? p.discard()
                                : t.hadActivity
                                  ? p.stop(t.end)
                                  : c()
                                    ? p.stop(p.startClocks.timeStamp)
                                    : p.stop();
                            }),
                            eC(eE(e, n, r, t), f, nd)),
                          m = e.subscribe(5, ({ endClocks: t }) => {
                            p.stop(t.timeStamp);
                          }),
                          y = o.subscribe(() => {
                            p.stop();
                          });
                        p.stopObservable.subscribe(() => {
                          m.unsubscribe(), g(), y.unsubscribe();
                        });
                      })(r, t, e, n, o, a, u, i, l, c, s);
                    },
                  });
                  return {
                    stop: () => {
                      l(), a.notify(), s();
                    },
                    actionContexts: { findActionId: (t) => o.findAll(t) },
                  };
                  function u(t) {
                    if (!i || !i.tryAppend(t)) {
                      let e = t.clone();
                      i = (function (t, e) {
                        let n;
                        let r = [],
                          i = 0;
                        function o(t) {
                          t.stopObservable.subscribe(a),
                            r.push(t),
                            (0, tu.gr)(n),
                            (n = (0, tu.iK)(s, ns));
                        }
                        function a() {
                          1 === i &&
                            r.every((t) => t.isStopped()) &&
                            ((i = 2), e(r));
                        }
                        function s() {
                          (0, tu.gr)(n), 0 === i && ((i = 1), a());
                        }
                        return (
                          o(t),
                          {
                            tryAppend: (t) => {
                              var e, n;
                              return (
                                0 === i &&
                                (!(r.length > 0) ||
                                ((e = r[r.length - 1].event),
                                (n = t.event),
                                e.target === n.target &&
                                  100 >=
                                    Math.sqrt(
                                      Math.pow(e.clientX - n.clientX, 2) +
                                        Math.pow(e.clientY - n.clientY, 2),
                                    ) &&
                                  e.timeStamp - n.timeStamp <= ns)
                                  ? (o(t), !0)
                                  : (s(), !1))
                              );
                            },
                            stop: () => {
                              s();
                            },
                          }
                        );
                      })(t, (t) => {
                        (function (t, e) {
                          let { isRage: n } = (function (t, e) {
                            if (
                              (function (t) {
                                if (
                                  t.some(
                                    (t) =>
                                      t.getUserActivity().selection ||
                                      t.getUserActivity().scroll,
                                  )
                                )
                                  return !1;
                                for (let e = 0; e < t.length - 2; e += 1)
                                  if (
                                    t[e + 3 - 1].event.timeStamp -
                                      t[e].event.timeStamp <=
                                    q.WT
                                  )
                                    return !0;
                                return !1;
                              })(t)
                            )
                              return (
                                e.addFrustration("rage_click"),
                                t.some(nc) && e.addFrustration("dead_click"),
                                e.hasError && e.addFrustration("error_click"),
                                { isRage: !0 }
                              );
                            let n = t.some(
                              (t) => t.getUserActivity().selection,
                            );
                            return (
                              t.forEach((t) => {
                                t.hasError && t.addFrustration("error_click"),
                                  nc(t) && !n && t.addFrustration("dead_click");
                              }),
                              { isRage: !1 }
                            );
                          })(t, e);
                          n
                            ? (t.forEach((t) => t.discard()),
                              e.stop((0, q.n$)()),
                              e.validate(t.map((t) => t.event)))
                            : (e.discard(), t.forEach((t) => t.validate()));
                        })(t, e);
                      });
                    }
                  }
                  function l() {
                    i && i.stop();
                  }
                })(t, o, a, n)),
              {
                addAction: (e, n) => {
                  t.notify(12, { savedCommonContext: n, ...ng(e) });
                },
                actionContexts: f,
                stop: p,
              }),
            g = (function (t) {
              let e;
              let n = requestAnimationFrame(
                  (0, z.zk)(() => {
                    e = nQ();
                  }),
                ),
                r = nK(t).subscribe((t) => {
                  e = t;
                }).unsubscribe;
              return {
                get: () => (e ? { viewport: e } : void 0),
                stop: () => {
                  r(), n && cancelAnimationFrame(n);
                },
              };
            })(n),
            m = (function (
              t,
              e,
              n = (function (t, e) {
                let n = window.cookieStore
                  ? (function (t) {
                      return (e, n) =>
                        (0, P.O)(t, window.cookieStore, "change", (t) => {
                          let r =
                            t.changed.find((t) => t.name === e) ||
                            t.deleted.find((t) => t.name === e);
                          r && n(r.value);
                        }).stop;
                    })(t)
                  : ri;
                return new E.y((t) => n(e, (e) => t.notify(e)));
              })(t, ro),
            ) {
              var r;
              let i =
                  ti(ro) ||
                  (null === (r = window.Cypress) || void 0 === r
                    ? void 0
                    : r.env("traceId")),
                o = n.subscribe((t) => {
                  i = t;
                });
              return (
                e.register(0, ({ eventType: t }) => {
                  if ("string" == typeof i)
                    return {
                      type: t,
                      session: { type: "ci_test" },
                      ci_test: { test_execution_id: i },
                    };
                }),
                {
                  stop: () => {
                    o.unsubscribe();
                  },
                }
              );
            })(n, e);
          return (
            !(function (t) {
              t.register(0, ({ eventType: t }) => {
                let e = (function () {
                    let t =
                      window._DATADOG_SYNTHETICS_PUBLIC_ID ||
                      ti("datadog-synthetics-public-id");
                    return "string" == typeof t ? t : void 0;
                  })(),
                  n = (function () {
                    let t =
                      window._DATADOG_SYNTHETICS_RESULT_ID ||
                      ti("datadog-synthetics-result-id");
                    return "string" == typeof t ? t : void 0;
                  })();
                if (e && n)
                  return {
                    type: t,
                    session: { type: "synthetics" },
                    synthetics: { test_id: e, result_id: n, injected: to() },
                  };
              });
            })(e),
            !(function (t, e, n, r, i, o, a, s, l) {
              u = {
                view: {
                  "view.performance.lcp.resource_url": "string",
                  ...t6,
                  ...t3,
                },
                error: {
                  "error.message": "string",
                  "error.stack": "string",
                  "error.resource.url": "string",
                  "error.fingerprint": "string",
                  ...t6,
                  ...t3,
                  ...t4,
                },
                resource: {
                  "resource.url": "string",
                  ...((0, te.W_)(te.uh.WRITABLE_RESOURCE_GRAPHQL)
                    ? { "resource.graphql": "object" }
                    : {}),
                  ...t6,
                  ...t3,
                  ...t4,
                },
                action: { "action.target.name": "string", ...t6, ...t3, ...t4 },
                long_task: {
                  "long_task.scripts[].source_url": "string",
                  "long_task.scripts[].invoker": "string",
                  ...t6,
                  ...t3,
                },
                vital: { ...t6, ...t3 },
              };
              let c = {
                error: t1("error", t.eventRateLimiterThreshold, l),
                action: t1("action", t.eventRateLimiterThreshold, l),
                vital: t1("vital", t.eventRateLimiterThreshold, l),
              };
              e.subscribe(
                12,
                ({
                  startTime: l,
                  duration: d,
                  rawRumEvent: f,
                  domainContext: p,
                  savedCommonContext: h,
                  customerContext: g,
                }) => {
                  let m = i.findView(l),
                    y = o.findUrl(l),
                    v = r.findTrackedSession(l);
                  if (
                    (v &&
                      m &&
                      !y &&
                      (0, te.W_)(te.uh.MISSING_URL_CONTEXT_TELEMETRY) &&
                      (0, j.eJ)("Missing URL entry", {
                        debug: {
                          eventType: f.type,
                          startTime: l,
                          urlEntries: o.getAllEntries(),
                          urlDeletedEntries: o.getDeletedEntries(),
                          viewEntries: i.getAllEntries(),
                          viewDeletedEntries: i.getDeletedEntries(),
                        },
                      }),
                    v && m && y)
                  ) {
                    let r = h || s(),
                      i = {
                        _dd: {
                          format_version: 2,
                          drift: (0, q.QA)(),
                          configuration: {
                            session_sample_rate: (0, ts.NM)(
                              t.sessionSampleRate,
                              3,
                            ),
                            session_replay_sample_rate: (0, ts.NM)(
                              t.sessionReplaySampleRate,
                              3,
                            ),
                          },
                          browser_sdk_version: (0, J.xT)() ? "6.5.1" : void 0,
                        },
                        application: { id: t.applicationId },
                        date: (0, q.n$)(),
                        source: "browser",
                        session: { id: v.id, type: "user" },
                        display: a.get(),
                        connectivity: (0, t2.T)(),
                        context: r.context,
                      },
                      o = (0, T.$e)(
                        i,
                        n.triggerHook(0, {
                          eventType: f.type,
                          startTime: l,
                          duration: d,
                        }),
                        { context: g },
                        f,
                      );
                    "has_replay" in o.session ||
                      (o.session.has_replay = r.hasReplay),
                      "view" === o.type &&
                        (o.session.sampled_for_replay = 1 === v.sessionReplay),
                      v.anonymousId &&
                        !r.user.anonymous_id &&
                        t.trackAnonymousUser &&
                        (r.user.anonymous_id = v.anonymousId),
                      (0, S.Qr)(r.user) || (o.usr = r.user),
                      !(0, S.Qr)(r.account) &&
                        r.account.id &&
                        (o.account = r.account),
                      (function (t, e, n, r) {
                        var i;
                        if (e) {
                          let r = (function (t, e, n) {
                            let r = (0, T.I8)(t),
                              i = n(r);
                            return (
                              (0, td.qP)(e).forEach(([e, n]) =>
                                (function t(e, n, r, i) {
                                  let [o, ...a] = r;
                                  if ("[]" === o) {
                                    Array.isArray(e) &&
                                      Array.isArray(n) &&
                                      e.forEach((e, r) => t(e, n[r], a, i));
                                    return;
                                  }
                                  if (t5(e) && t5(n)) {
                                    if (a.length > 0)
                                      return t(e[o], n[o], a, i);
                                    (function (t, e, n, r) {
                                      let i = (0, O.o)(n);
                                      i === r
                                        ? (t[e] = (0, C.N)(n))
                                        : "object" === r &&
                                          ("undefined" === i || "null" === i) &&
                                          (t[e] = {});
                                    })(e, o, n[o], i);
                                  }
                                })(t, r, e.split(/\.|(?=\[\])/), n),
                              ),
                              i
                            );
                          })(t, u[t.type], (t) => e(t, n));
                          if (!1 === r && "view" !== t.type) return !1;
                          !1 === r &&
                            w.jf.warn(
                              "Can't dismiss view events using beforeSend!",
                            );
                        }
                        return !(null === (i = r[t.type]) || void 0 === i
                          ? void 0
                          : i.isLimitReached());
                      })(o, t.beforeSend, p, c) &&
                        ((0, S.Qr)(o.context) && delete o.context,
                        e.notify(13, o));
                  }
                },
              );
            })(n, t, e, r, l, s, g, c, d),
            {
              pageStateHistory: i,
              addAction: h.addAction,
              actionContexts: h.actionContexts,
              stop: () => {
                h.stop(), m.stop(), g.stop(), l.stop(), i.stop(), s.stop();
              },
            }
          );
        })(N, $, t, F, Y, Z, tS, ta, tr, r, M);
        R.push(tR), (0, j.kx)();
        let {
          addTiming: tI,
          startView: tP,
          setViewName: t$,
          setViewContext: tD,
          setViewContextProperty: tM,
          getViewContext: tz,
          stop: tj,
        } = ((m = location),
        N.subscribe(4, (n) =>
          N.notify(
            12,
            (function (t, e, n) {
              var r, i, o, a, s, u, l, c, d, f, p, h, g, m, y, v, _, b;
              let w = n.getReplayStats(t.id),
                k =
                  null ===
                    (i =
                      null === (r = t.commonViewMetrics) || void 0 === r
                        ? void 0
                        : r.cumulativeLayoutShift) || void 0 === i
                    ? void 0
                    : i.devicePixelRatio,
                x = {
                  _dd: {
                    document_version: t.documentVersion,
                    replay_stats: w,
                    cls: k ? { device_pixel_ratio: k } : void 0,
                    configuration: {
                      start_session_replay_recording_manually:
                        e.startSessionReplayRecordingManually,
                    },
                  },
                  date: t.startClocks.timeStamp,
                  type: "view",
                  view: {
                    action: { count: t.eventCounts.actionCount },
                    frustration: { count: t.eventCounts.frustrationCount },
                    cumulative_layout_shift:
                      null ===
                        (o = t.commonViewMetrics.cumulativeLayoutShift) ||
                      void 0 === o
                        ? void 0
                        : o.value,
                    cumulative_layout_shift_time: (0, q.c0)(
                      null ===
                        (a = t.commonViewMetrics.cumulativeLayoutShift) ||
                        void 0 === a
                        ? void 0
                        : a.time,
                    ),
                    cumulative_layout_shift_target_selector:
                      null ===
                        (s = t.commonViewMetrics.cumulativeLayoutShift) ||
                      void 0 === s
                        ? void 0
                        : s.targetSelector,
                    first_byte: (0, q.c0)(
                      null === (u = t.initialViewMetrics.navigationTimings) ||
                        void 0 === u
                        ? void 0
                        : u.firstByte,
                    ),
                    dom_complete: (0, q.c0)(
                      null === (l = t.initialViewMetrics.navigationTimings) ||
                        void 0 === l
                        ? void 0
                        : l.domComplete,
                    ),
                    dom_content_loaded: (0, q.c0)(
                      null === (c = t.initialViewMetrics.navigationTimings) ||
                        void 0 === c
                        ? void 0
                        : c.domContentLoaded,
                    ),
                    dom_interactive: (0, q.c0)(
                      null === (d = t.initialViewMetrics.navigationTimings) ||
                        void 0 === d
                        ? void 0
                        : d.domInteractive,
                    ),
                    error: { count: t.eventCounts.errorCount },
                    first_contentful_paint: (0, q.c0)(
                      t.initialViewMetrics.firstContentfulPaint,
                    ),
                    first_input_delay: (0, q.c0)(
                      null === (f = t.initialViewMetrics.firstInput) ||
                        void 0 === f
                        ? void 0
                        : f.delay,
                    ),
                    first_input_time: (0, q.c0)(
                      null === (p = t.initialViewMetrics.firstInput) ||
                        void 0 === p
                        ? void 0
                        : p.time,
                    ),
                    first_input_target_selector:
                      null === (h = t.initialViewMetrics.firstInput) ||
                      void 0 === h
                        ? void 0
                        : h.targetSelector,
                    interaction_to_next_paint: (0, q.c0)(
                      null ===
                        (g = t.commonViewMetrics.interactionToNextPaint) ||
                        void 0 === g
                        ? void 0
                        : g.value,
                    ),
                    interaction_to_next_paint_time: (0, q.c0)(
                      null ===
                        (m = t.commonViewMetrics.interactionToNextPaint) ||
                        void 0 === m
                        ? void 0
                        : m.time,
                    ),
                    interaction_to_next_paint_target_selector:
                      null ===
                        (y = t.commonViewMetrics.interactionToNextPaint) ||
                      void 0 === y
                        ? void 0
                        : y.targetSelector,
                    is_active: t.isActive,
                    name: t.name,
                    largest_contentful_paint: (0, q.c0)(
                      null ===
                        (v = t.initialViewMetrics.largestContentfulPaint) ||
                        void 0 === v
                        ? void 0
                        : v.value,
                    ),
                    largest_contentful_paint_target_selector:
                      null ===
                        (_ = t.initialViewMetrics.largestContentfulPaint) ||
                      void 0 === _
                        ? void 0
                        : _.targetSelector,
                    load_event: (0, q.c0)(
                      null === (b = t.initialViewMetrics.navigationTimings) ||
                        void 0 === b
                        ? void 0
                        : b.loadEvent,
                    ),
                    loading_time: ek(
                      (0, q.c0)(t.commonViewMetrics.loadingTime),
                    ),
                    loading_type: t.loadingType,
                    long_task: { count: t.eventCounts.longTaskCount },
                    performance: (function (
                      { cumulativeLayoutShift: t, interactionToNextPaint: e },
                      {
                        firstContentfulPaint: n,
                        firstInput: r,
                        largestContentfulPaint: i,
                      },
                    ) {
                      return {
                        cls: t && {
                          score: t.value,
                          timestamp: (0, q.c0)(t.time),
                          target_selector: t.targetSelector,
                          previous_rect: t.previousRect,
                          current_rect: t.currentRect,
                        },
                        fcp: n && { timestamp: (0, q.c0)(n) },
                        fid: r && {
                          duration: (0, q.c0)(r.delay),
                          timestamp: (0, q.c0)(r.time),
                          target_selector: r.targetSelector,
                        },
                        inp: e && {
                          duration: (0, q.c0)(e.value),
                          timestamp: (0, q.c0)(e.time),
                          target_selector: e.targetSelector,
                        },
                        lcp: i && {
                          timestamp: (0, q.c0)(i.value),
                          target_selector: i.targetSelector,
                          resource_url: i.resourceUrl,
                        },
                      };
                    })(t.commonViewMetrics, t.initialViewMetrics),
                    resource: { count: t.eventCounts.resourceCount },
                    time_spent: (0, q.c0)(t.duration),
                  },
                  display: t.commonViewMetrics.scroll
                    ? {
                        scroll: {
                          max_depth: t.commonViewMetrics.scroll.maxDepth,
                          max_depth_scroll_top:
                            t.commonViewMetrics.scroll.maxDepthScrollTop,
                          max_scroll_height:
                            t.commonViewMetrics.scroll.maxScrollHeight,
                          max_scroll_height_time: (0, q.c0)(
                            t.commonViewMetrics.scroll.maxScrollHeightTime,
                          ),
                        },
                      }
                    : void 0,
                  session: {
                    has_replay: !!w || void 0,
                    is_active: !!t.sessionIsActive && void 0,
                  },
                  privacy: { replay_level: e.defaultPrivacyLevel },
                };
              return (
                (0, S.Qr)(t.customTimings) ||
                  (x.view.custom_timings = (0, S.Q8)(t.customTimings, q.c0)),
                {
                  rawRumEvent: x,
                  startTime: t.startClocks.relative,
                  duration: t.duration,
                  domainContext: { location: t.location },
                }
              );
            })(n, t, e),
          ),
        ),
        $.register(0, ({ startTime: t, eventType: e }) => {
          let {
            service: n,
            version: r,
            id: i,
            name: o,
            context: a,
          } = tr.findView(t);
          return {
            type: e,
            service: n,
            version: r,
            context: a,
            view: { id: i, name: o },
          };
        }),
        (function (t, e, n, r, i, o, a, s) {
          let u;
          let l = new Set(),
            c = f("initial_load", (0, q.cQ)(), s);
          function f(o, a, s) {
            let u = (function (t, e, n, r, i, o, a = (0, q.$I)(), s) {
              let u;
              let l = B(),
                c = new E.y(),
                f = {},
                p = 0,
                h = (0, S.mv)(i),
                g = I(),
                m = !0,
                v = null == s ? void 0 : s.name,
                b = (null == s ? void 0 : s.service) || r.service,
                k = (null == s ? void 0 : s.version) || r.version,
                x = null == s ? void 0 : s.context;
              x && g.setContext(x);
              let A = {
                id: l,
                name: v,
                startClocks: a,
                service: b,
                version: k,
                context: x,
              };
              t.notify(1, A), t.notify(2, A);
              let { throttled: T, cancel: C } = (0, _.P)(H, 3e3, {
                  leading: !1,
                }),
                {
                  setLoadEvent: O,
                  setViewEnd: R,
                  stop: N,
                  stopINPTracking: $,
                  getCommonViewMetrics: D,
                } = (function (t, e, n, r, i, o, a) {
                  let s = {},
                    { stop: u, setLoadEvent: l } = (function (
                      t,
                      e,
                      n,
                      r,
                      i,
                      o,
                      a,
                    ) {
                      var s;
                      let u = "initial_load" === i,
                        l = !0,
                        c = [],
                        d = nM(r);
                      function f() {
                        if (!l && !u && c.length > 0) {
                          let t = Math.max(...c);
                          t < d.timeStamp && a(t);
                        }
                      }
                      let { stop: p } =
                        ((s = (t) => {
                          l &&
                            ((l = !1),
                            t.hadActivity &&
                              c.push((0, q._J)(o.timeStamp, t.end)),
                            f());
                        }),
                        eC(eE(t, e, n, r), s, void 0));
                      return {
                        stop: () => {
                          p(), d.stop();
                        },
                        setLoadEvent: (t) => {
                          u && ((u = !1), c.push(t), f());
                        },
                      };
                    })(t, e, n, r, o, a, (t) => {
                      (s.loadingTime = t), i();
                    }),
                    { stop: c } = (function (
                      t,
                      e,
                      n,
                      r = (function (t, e = nZ) {
                        return new E.y((n) => {
                          if (window.ResizeObserver) {
                            let r = (0, _.P)(
                                function () {
                                  n.notify(
                                    (function () {
                                      let t = nH(),
                                        { height: e } = nQ();
                                      return {
                                        scrollHeight: Math.round(
                                          (
                                            document.scrollingElement ||
                                            document.documentElement
                                          ).scrollHeight,
                                        ),
                                        scrollDepth: Math.round(e + t),
                                        scrollTop: t,
                                      };
                                    })(),
                                  );
                                },
                                e,
                                { leading: !1, trailing: !0 },
                              ),
                              i =
                                document.scrollingElement ||
                                document.documentElement,
                              o = new ResizeObserver((0, z.zk)(r.throttled));
                            i && o.observe(i);
                            let a = (0, P.O)(t, window, "scroll", r.throttled, {
                              passive: !0,
                            });
                            return () => {
                              r.cancel(), o.disconnect(), a.stop();
                            };
                          }
                        });
                      })(t),
                    ) {
                      let i = 0,
                        o = 0,
                        a = 0,
                        s = r.subscribe(
                          ({
                            scrollDepth: t,
                            scrollTop: r,
                            scrollHeight: s,
                          }) => {
                            let u = !1;
                            if ((t > i && ((i = t), (u = !0)), s > o)) {
                              o = s;
                              let t = (0, q._q)();
                              (a = (0, q._J)(e.relative, t)), (u = !0);
                            }
                            u &&
                              n({
                                maxDepth: Math.min(i, o),
                                maxDepthScrollTop: r,
                                maxScrollHeight: o,
                                maxScrollHeightTime: a,
                              });
                          },
                        );
                      return { stop: () => s.unsubscribe() };
                    })(r, a, (t) => {
                      s.scroll = t;
                    }),
                    { stop: f } = (function (t, e, n) {
                      let r, i, o, a, s;
                      if (!(eT(y.LAYOUT_SHIFT) && "WeakRef" in window))
                        return { stop: _.Z };
                      let u = 0;
                      n({ value: 0 });
                      let l =
                          ((a = 0),
                          (s = 0),
                          {
                            update: (t) => {
                              let e;
                              return (
                                void 0 === i ||
                                t.startTime - o >= nL ||
                                t.startTime - i >= nj
                                  ? ((i = o = t.startTime),
                                    (s = a = t.value),
                                    (e = !0))
                                  : ((a += t.value),
                                    (o = t.startTime),
                                    (e = t.value > s) && (s = t.value)),
                                { cumulatedValue: a, isMaxValue: e }
                              );
                            },
                          }),
                        c = eA(t, {
                          type: y.LAYOUT_SHIFT,
                          buffered: !0,
                        }).subscribe((i) => {
                          var o;
                          for (let a of i) {
                            if (a.hadRecentInput || a.startTime < e) continue;
                            let { cumulatedValue: i, isMaxValue: s } =
                              l.update(a);
                            if (s) {
                              let t = a.sources.find(
                                (t) => !!t.node && eI(t.node),
                              );
                              r = {
                                target: (null == t ? void 0 : t.node)
                                  ? new WeakRef(t.node)
                                  : void 0,
                                time: (0, q._J)(e, a.startTime),
                                previousRect:
                                  null == t ? void 0 : t.previousRect,
                                currentRect: null == t ? void 0 : t.currentRect,
                                devicePixelRatio: window.devicePixelRatio,
                              };
                            }
                            if (i > u) {
                              u = i;
                              let e =
                                null === (o = null == r ? void 0 : r.target) ||
                                void 0 === o
                                  ? void 0
                                  : o.deref();
                              n({
                                value: (0, ts.NM)(u, 4),
                                targetSelector:
                                  e && nt(e, t.actionNameAttribute),
                                time: null == r ? void 0 : r.time,
                                previousRect: (
                                  null == r ? void 0 : r.previousRect
                                )
                                  ? nz(r.previousRect)
                                  : void 0,
                                currentRect: (
                                  null == r ? void 0 : r.currentRect
                                )
                                  ? nz(r.currentRect)
                                  : void 0,
                                devicePixelRatio:
                                  null == r ? void 0 : r.devicePixelRatio,
                              });
                            }
                          }
                        });
                      return {
                        stop: () => {
                          c.unsubscribe();
                        },
                      };
                    })(r, a.relative, (t) => {
                      (s.cumulativeLayoutShift = t), i();
                    }),
                    {
                      stop: p,
                      getInteractionToNextPaint: h,
                      setViewEnd: g,
                    } = (function (t, e, n) {
                      let r, i;
                      if (
                        !(
                          eT(y.EVENT) &&
                          window.PerformanceEventTiming &&
                          "interactionId" in PerformanceEventTiming.prototype
                        )
                      )
                        return {
                          getInteractionToNextPaint: () => void 0,
                          setViewEnd: _.Z,
                          stop: _.Z,
                        };
                      let {
                          getViewInteractionCount: o,
                          stopViewInteractionCount: a,
                        } = (function (t) {
                          "interactionCount" in performance ||
                            d ||
                            (d = new window.PerformanceObserver(
                              (0, z.zk)((t) => {
                                t.getEntries().forEach((t) => {
                                  t.interactionId &&
                                    ((nq = Math.min(nq, t.interactionId)),
                                    (nU =
                                      ((nV = Math.max(nV, t.interactionId)) -
                                        nq) /
                                        7 +
                                      1));
                                });
                              }),
                            )).observe({
                              type: "event",
                              buffered: !0,
                              durationThreshold: 0,
                            });
                          let e = "initial_load" === t ? 0 : nB(),
                            n = { stopped: !1 };
                          return {
                            getViewInteractionCount: () =>
                              n.stopped ? n.interactionCount : nB() - e,
                            stopViewInteractionCount: () => {
                              n = { stopped: !0, interactionCount: nB() - e };
                            },
                          };
                        })(n),
                        s = 1 / 0,
                        u = (function (t) {
                          let e = [];
                          function n() {
                            e.sort((t, e) => e.duration - t.duration).splice(
                              10,
                            );
                          }
                          return {
                            process(t) {
                              let r = e.findIndex(
                                  (e) => t.interactionId === e.interactionId,
                                ),
                                i = e[e.length - 1];
                              -1 !== r
                                ? t.duration > e[r].duration &&
                                  ((e[r] = t), n())
                                : (e.length < 10 || t.duration > i.duration) &&
                                  (e.push(t), n());
                            },
                            estimateP98Interaction() {
                              let n = Math.min(
                                e.length - 1,
                                Math.floor(t() / 50),
                              );
                              return e[n];
                            },
                          };
                        })(o),
                        l = -1;
                      function c(n) {
                        for (let t of n)
                          t.interactionId &&
                            t.startTime >= e &&
                            t.startTime <= s &&
                            u.process(t);
                        let o = u.estimateP98Interaction();
                        o &&
                          o.duration !== l &&
                          ((l = o.duration),
                          (i = (0, q._J)(e, o.startTime)),
                          !(r = (function (t) {
                            let e = nf.get(t);
                            return nf.delete(t), e;
                          })(o.startTime)) &&
                            o.target &&
                            eI(o.target) &&
                            (r = nt(o.target, t.actionNameAttribute)));
                      }
                      let f = eA(t, {
                          type: y.FIRST_INPUT,
                          buffered: !0,
                        }).subscribe(c),
                        p = eA(t, {
                          type: y.EVENT,
                          durationThreshold: 40,
                          buffered: !0,
                        }).subscribe(c);
                      return {
                        getInteractionToNextPaint: () =>
                          l >= 0
                            ? {
                                value: Math.min(l, nF),
                                targetSelector: r,
                                time: i,
                              }
                            : o()
                              ? { value: 0 }
                              : void 0,
                        setViewEnd: (t) => {
                          (s = t), a();
                        },
                        stop: () => {
                          p.unsubscribe(), f.unsubscribe();
                        },
                      };
                    })(r, a.relative, o);
                  return {
                    stop: () => {
                      u(), f(), c();
                    },
                    stopINPTracking: p,
                    setLoadEvent: l,
                    setViewEnd: g,
                    getCommonViewMetrics: () => (
                      (s.interactionToNextPaint = h()), s
                    ),
                  };
                })(t, e, n, r, G, o, a),
                { stop: M, initialViewMetrics: j } =
                  "initial_load" === o
                    ? (function (t, e, n) {
                        var r;
                        let i = {},
                          { stop: o } = (function (t, e, n = nI) {
                            return (function (t, e) {
                              let n;
                              let { stop: r } = (0, nC.T)(t, "complete", () => {
                                n = (0, tu.iK)(() => e());
                              });
                              return {
                                stop: () => {
                                  r(), (0, tu.gr)(n);
                                },
                              };
                            })(t, () => {
                              let t = n();
                              t.loadEventEnd <= 0 ||
                                e({
                                  domComplete: t.domComplete,
                                  domContentLoaded: t.domContentLoadedEventEnd,
                                  domInteractive: t.domInteractive,
                                  loadEvent: t.loadEventEnd,
                                  firstByte:
                                    t.responseStart >= 0 &&
                                    t.responseStart <= (0, q._q)()
                                      ? t.responseStart
                                      : void 0,
                                });
                            });
                          })(t, (t) => {
                            e(t.loadEvent), (i.navigationTimings = t), n();
                          }),
                          a = nM(t),
                          { stop: s } =
                            ((r = (t) => {
                              (i.firstContentfulPaint = t), n();
                            }),
                            {
                              stop: eA(t, {
                                type: y.PAINT,
                                buffered: !0,
                              }).subscribe((t) => {
                                let e = t.find(
                                  (t) =>
                                    "first-contentful-paint" === t.name &&
                                    t.startTime < a.timeStamp &&
                                    t.startTime < n$,
                                );
                                e && r(e.startTime);
                              }).unsubscribe,
                            }),
                          { stop: u } = (function (t, e, n, r) {
                            let i = 1 / 0,
                              { stop: o } = (0, P.y)(
                                t,
                                n,
                                ["pointerdown", "keydown"],
                                (t) => {
                                  i = t.timeStamp;
                                },
                                { capture: !0, once: !0 },
                              ),
                              a = 0,
                              s = eA(t, {
                                type: y.LARGEST_CONTENTFUL_PAINT,
                                buffered: !0,
                              }).subscribe((n) => {
                                let o = (0, td.dF)(
                                  n,
                                  (t) =>
                                    t.entryType ===
                                      y.LARGEST_CONTENTFUL_PAINT &&
                                    t.startTime < i &&
                                    t.startTime < e.timeStamp &&
                                    t.startTime < nD &&
                                    t.size > a,
                                );
                                if (o) {
                                  let e;
                                  o.element &&
                                    (e = nt(o.element, t.actionNameAttribute)),
                                    r({
                                      value: o.startTime,
                                      targetSelector: e,
                                      resourceUrl:
                                        "" === o.url ? void 0 : o.url,
                                    }),
                                    (a = o.size);
                                }
                              });
                            return {
                              stop: () => {
                                o(), s.unsubscribe();
                              },
                            };
                          })(t, a, window, (t) => {
                            (i.largestContentfulPaint = t), n();
                          }),
                          { stop: l } = (function (t, e, n) {
                            let r = eA(t, {
                              type: y.FIRST_INPUT,
                              buffered: !0,
                            }).subscribe((r) => {
                              let i = r.find((t) => t.startTime < e.timeStamp);
                              if (i) {
                                let e;
                                let r = (0, q._J)(
                                  i.startTime,
                                  i.processingStart,
                                );
                                i.target &&
                                  eI(i.target) &&
                                  (e = nt(i.target, t.actionNameAttribute)),
                                  n({
                                    delay: r >= 0 ? r : 0,
                                    time: i.startTime,
                                    targetSelector: e,
                                  });
                              }
                            });
                            return {
                              stop: () => {
                                r.unsubscribe();
                              },
                            };
                          })(t, a, (t) => {
                            (i.firstInput = t), n();
                          });
                        return {
                          stop: function () {
                            o(), s(), u(), l(), a.stop();
                          },
                          initialViewMetrics: i,
                        };
                      })(r, O, G)
                    : { stop: _.Z, initialViewMetrics: {} },
                { stop: L, eventCounts: U } = (function (t, e, n) {
                  let { stop: r, eventCounts: i } = ex({
                    lifeCycle: t,
                    isChildEvent: (t) => t.view.id === e,
                    onChange: n,
                  });
                  return { stop: r, eventCounts: i };
                })(t, l, G),
                V = (0, tu.Zi)(H, nW);
              function F() {
                t.notify(3, {
                  id: l,
                  name: v,
                  context: g.getContext(),
                  startClocks: a,
                });
              }
              function G() {
                F(), T();
              }
              function H() {
                C(), F(), (p += 1);
                let e = void 0 === u ? (0, q.n$)() : u.timeStamp;
                t.notify(4, {
                  customTimings: f,
                  documentVersion: p,
                  id: l,
                  name: v,
                  service: b,
                  version: k,
                  context: g.getContext(),
                  loadingType: o,
                  location: h,
                  startClocks: a,
                  commonViewMetrics: D(),
                  initialViewMetrics: j,
                  duration: (0, q._J)(a.timeStamp, e),
                  isActive: void 0 === u,
                  sessionIsActive: m,
                  eventCounts: U,
                });
              }
              return (
                H(),
                g.changeObservable.subscribe(G),
                {
                  get name() {
                    return v;
                  },
                  service: b,
                  version: k,
                  contextManager: g,
                  stopObservable: c,
                  end(e = {}) {
                    var n, r;
                    u ||
                      ((u =
                        null !== (n = e.endClocks) && void 0 !== n
                          ? n
                          : (0, q.$I)()),
                      (m =
                        null === (r = e.sessionIsActive) || void 0 === r || r),
                      t.notify(5, { endClocks: u }),
                      t.notify(6, { endClocks: u }),
                      (0, tu.cv)(V),
                      R(u.relative),
                      N(),
                      H(),
                      (0, tu.iK)(() => {
                        this.stop();
                      }, nJ));
                  },
                  stop() {
                    M(), L(), $(), c.notify();
                  },
                  addTiming(t, e) {
                    if (u) return;
                    let n = (0, q.Cn)(e) ? e : (0, q._J)(a.timeStamp, e);
                    (f[
                      (function (t) {
                        let e = t.replace(/[^a-zA-Z0-9-_.@$]/g, "_");
                        return (
                          e !== t &&
                            w.jf.warn(
                              `Invalid timing name: ${t}, sanitized to: ${e}`,
                            ),
                          e
                        );
                      })(t)
                    ] = n),
                      G();
                  },
                  setViewName(t) {
                    (v = t), H();
                  },
                }
              );
            })(e, n, r, i, t, o, a, s);
            return (
              l.add(u),
              u.stopObservable.subscribe(() => {
                l.delete(u);
              }),
              u
            );
          }
          return (
            e.subscribe(10, () => {
              c = f("route_change", void 0, {
                name: c.name,
                service: c.service,
                version: c.version,
                context: c.contextManager.getContext(),
              });
            }),
            e.subscribe(9, () => {
              c.end({ sessionIsActive: !1 });
            }),
            e.subscribe(11, (t) => {
              t.reason === tJ.k$.UNLOADING && c.end();
            }),
            a &&
              (u = o.subscribe(({ oldLocation: t, newLocation: e }) => {
                (t.pathname !== e.pathname ||
                  (!(function (t) {
                    let e = t.substring(1);
                    return "" !== e && !!document.getElementById(e);
                  })(e.hash) &&
                    nX(e.hash) !== nX(t.hash))) &&
                  (c.end(), (c = f("route_change")));
              })),
            {
              addTiming: (t, e = (0, q.n$)()) => {
                c.addTiming(t, e);
              },
              startView: (t, e) => {
                c.end({ endClocks: e }), (c = f("route_change", e, t));
              },
              setViewContext: (t) => {
                c.contextManager.setContext(t);
              },
              setViewContextProperty: (t, e) => {
                c.contextManager.setContextProperty(t, e);
              },
              setViewName: (t) => {
                c.setViewName(t);
              },
              getViewContext: () => c.contextManager.getContext(),
              stop: () => {
                u && u.unsubscribe(), c.end(), l.forEach((t) => t.stop());
              },
            }
          );
        })(m, N, Z, tS, t, W, !t.trackViewsManually, i));
        R.push(tj);
        let { stop: tL } = (function (
          t,
          e,
          n,
          r = (function () {
            let t = [];
            function e(e) {
              let r;
              if (e.didTimeout) {
                let t = performance.now();
                r = () => 30 - (performance.now() - t);
              } else r = e.timeRemaining.bind(e);
              for (; r() > 0 && t.length; ) t.shift()();
              t.length && n();
            }
            function n() {
              (0, nk.Kk)(e, { timeout: nx });
            }
            return {
              push(e) {
                1 === t.push(e) && n();
              },
            };
          })(),
          i = function (t, e, n = nI) {
            (0, nC.T)(t, "interactive", () => {
              let t = n(),
                r = Object.assign(t.toJSON(), {
                  entryType: y.RESOURCE,
                  initiatorType: eu,
                  duration: t.responseEnd,
                  traceId: (function (t) {
                    let e =
                      (function (t) {
                        let e = t.querySelector("meta[name=dd-trace-id]"),
                          n = t.querySelector("meta[name=dd-trace-time]");
                        return nO(e && e.content, n && n.content);
                      })(t) ||
                      (function (t) {
                        let e = (function (t) {
                          for (let e = 0; e < t.childNodes.length; e += 1) {
                            let n = nR(t.childNodes[e]);
                            if (n) return n;
                          }
                          if (t.body)
                            for (
                              let e = t.body.childNodes.length - 1;
                              e >= 0;
                              e -= 1
                            ) {
                              let n = t.body.childNodes[e],
                                r = nR(n);
                              if (r) return r;
                              if (!eR(n)) break;
                            }
                        })(t);
                        if (e) return nO(G(e, "trace-id"), G(e, "trace-time"));
                      })(t);
                    if (!(!e || e.traceTime <= (0, q.m6)() - nE))
                      return e.traceId;
                  })(document),
                  toJSON: () => ({ ...r, toJSON: void 0 }),
                });
              e(r);
            });
          },
        ) {
          t.subscribe(8, (t) => {
            a(() =>
              (function (t, e, n) {
                var r;
                let i = (function (t) {
                    if (!performance || !("getEntriesByName" in performance))
                      return;
                    let e = performance.getEntriesByName(t.url, "resource");
                    if (!e.length || !("toJSON" in e[0])) return;
                    let n = e
                      .filter((t) => !nA.has(t))
                      .filter((t) => ef(t) && ep(t))
                      .filter((e) => {
                        var n, r;
                        return (
                          (n = t.startClocks.relative),
                          (r = nT({
                            startTime: t.startClocks.relative,
                            duration: t.duration,
                          })),
                          e.startTime >= n - 1 && nT(e) <= (0, q.WK)(r, 1)
                        );
                      });
                    if (1 === n.length) return nA.add(n[0]), n[0].toJSON();
                  })(t),
                  o = i ? (0, q.DY)(i.startTime) : t.startClocks,
                  a = (function (t, e) {
                    if (t.traceSampled && t.traceId && t.spanId)
                      return {
                        _dd: {
                          span_id: t.spanId.toString(),
                          trace_id: t.traceId.toString(),
                          rule_psr: e.rulePsr,
                        },
                      };
                  })(t, e);
                if (!e.trackResources && !a) return;
                let s = "xhr" === t.type ? "xhr" : "fetch",
                  u = i ? nP(i) : void 0,
                  l = i
                    ? ed(i)
                    : ((r = t.duration),
                      n.wasInPageStateDuringPeriod("frozen", o.relative, r)
                        ? void 0
                        : r),
                  c = (0, T.$e)(
                    {
                      date: o.timeStamp,
                      resource: {
                        id: B(),
                        type: s,
                        duration: (0, q.c0)(l),
                        method: t.method,
                        status_code: t.status,
                        protocol: i && eg(i),
                        url: e_(t.url) ? eb(t.url) : t.url,
                        delivery_type: i && em(i),
                      },
                      type: "resource",
                      _dd: { discarded: !e.trackResources },
                    },
                    a,
                    u,
                  );
                return {
                  startTime: o.relative,
                  duration: l,
                  rawRumEvent: c,
                  domainContext: {
                    performanceEntry: i,
                    xhr: t.xhr,
                    response: t.response,
                    requestInput: t.input,
                    requestInit: t.init,
                    error: t.error,
                    isAborted: t.isAborted,
                    handlingStack: t.handlingStack,
                  },
                };
              })(t, e, n),
            );
          });
          let o = eA(e, { type: y.RESOURCE, buffered: !0 }).subscribe((t) => {
            for (let n of t)
              "xmlhttprequest" === n.initiatorType ||
                "fetch" === n.initiatorType ||
                a(() => nN(n, e));
          });
          function a(e) {
            r.push(() => {
              let n = e();
              n && t.notify(12, n);
            });
          }
          return (
            i(e, (t) => {
              a(() => nN(t, e));
            }),
            {
              stop: () => {
                o.unsubscribe();
              },
            }
          );
        })(N, t, Y);
        if ((R.push(tL), t.trackLongTasks)) {
          if (
            null === (c = PerformanceObserver.supportedEntryTypes) ||
            void 0 === c
              ? void 0
              : c.includes(y.LONG_ANIMATION_FRAME)
          ) {
            let { stop: e } = (function (t, e) {
              let n = eA(e, {
                type: y.LONG_ANIMATION_FRAME,
                buffered: !0,
              }).subscribe((e) => {
                for (let n of e) {
                  let e = (0, q.DY)(n.startTime),
                    r = {
                      date: e.timeStamp,
                      long_task: {
                        id: B(),
                        entry_type: "long-animation-frame",
                        duration: (0, q.c0)(n.duration),
                        blocking_duration: (0, q.c0)(n.blockingDuration),
                        first_ui_event_timestamp: (0, q.c0)(
                          n.firstUIEventTimestamp,
                        ),
                        render_start: (0, q.c0)(n.renderStart),
                        style_and_layout_start: (0, q.c0)(
                          n.styleAndLayoutStart,
                        ),
                        start_time: (0, q.c0)(n.startTime),
                        scripts: n.scripts.map((t) => ({
                          duration: (0, q.c0)(t.duration),
                          pause_duration: (0, q.c0)(t.pauseDuration),
                          forced_style_and_layout_duration: (0, q.c0)(
                            t.forcedStyleAndLayoutDuration,
                          ),
                          start_time: (0, q.c0)(t.startTime),
                          execution_start: (0, q.c0)(t.executionStart),
                          source_url: t.sourceURL,
                          source_function_name: t.sourceFunctionName,
                          source_char_position: t.sourceCharPosition,
                          invoker: t.invoker,
                          invoker_type: t.invokerType,
                          window_attribution: t.windowAttribution,
                        })),
                      },
                      type: "long_task",
                      _dd: { discarded: !1 },
                    };
                  t.notify(12, {
                    rawRumEvent: r,
                    startTime: e.relative,
                    duration: n.duration,
                    domainContext: { performanceEntry: n },
                  });
                }
              });
              return { stop: () => n.unsubscribe() };
            })(N, t);
            R.push(e);
          } else
            !(function (t, e) {
              eA(e, { type: y.LONG_TASK, buffered: !0 }).subscribe((n) => {
                for (let r of n) {
                  if (r.entryType !== y.LONG_TASK || !e.trackLongTasks) break;
                  let n = (0, q.DY)(r.startTime),
                    i = {
                      date: n.timeStamp,
                      long_task: {
                        id: B(),
                        entry_type: "long-task",
                        duration: (0, q.c0)(r.duration),
                      },
                      type: "long_task",
                      _dd: { discarded: !1 },
                    };
                  t.notify(12, {
                    rawRumEvent: i,
                    startTime: n.relative,
                    duration: r.duration,
                    domainContext: { performanceEntry: r },
                  });
                }
              });
            })(N, t);
        }
        let { addError: tU } = (function (t, e) {
          let n = new E.y();
          return (
            (function (t) {
              let e = t.map(
                (t) => (
                  n_[t] ||
                    (n_[t] = new E.y((e) => {
                      let n = w.jG[t];
                      return (
                        (w.jG[t] = (...r) => {
                          n.apply(console, r);
                          let i = (0, U.Xp)("console error");
                          (0, z.L6)(() => {
                            e.notify(
                              (function (t, e, n) {
                                let r;
                                let i = t
                                  .map((t) =>
                                    "string" == typeof t
                                      ? (0, C.N)(t)
                                      : (0, nv.VZ)(t)
                                        ? (0, U.jN)((0, ny._)(t))
                                        : (0, b.l)((0, C.N)(t), void 0, 2),
                                  )
                                  .join(" ");
                                if (e === w.vA.error) {
                                  let e = t.find(nv.VZ);
                                  r = {
                                    stack: e ? (0, U.P3)((0, ny._)(e)) : void 0,
                                    fingerprint: (0, nv.un)(e),
                                    causes: e
                                      ? (0, nv.mD)(e, "console")
                                      : void 0,
                                    startClocks: (0, q.$I)(),
                                    message: i,
                                    source: t0.z.CONSOLE,
                                    handling: "handled",
                                    handlingStack: n,
                                    context: (0, nv.cf)(e),
                                  };
                                }
                                return {
                                  api: e,
                                  message: i,
                                  error: r,
                                  handlingStack: n,
                                };
                              })(r, t, i),
                            );
                          });
                        }),
                        () => {
                          w.jG[t] = n;
                        }
                      );
                    })),
                  n_[t]
                ),
              );
              return (0, E.$)(...e);
            })([w.vA.error]).subscribe((t) => n.notify(t.error)),
            !(function (t) {
              let e = (e, n) => {
                  let r = (0, nv.AP)({
                    stackTrace: e,
                    originalError: n,
                    startClocks: (0, q.$I)(),
                    nonErrorPrefix: "Uncaught",
                    source: t0.z.SOURCE,
                    handling: "unhandled",
                  });
                  t.notify(r);
                },
                { stop: n } = (0, X.S)(
                  window,
                  "onerror",
                  ({ parameters: [t, n, r, i, o] }) => {
                    e(
                      (0, nv.VZ)(o) ? (0, ny._)(o) : (0, ny.f)(t, n, r, i),
                      null != o ? o : t,
                    );
                  },
                ),
                { stop: r } = (0, X.S)(
                  window,
                  "onunhandledrejection",
                  ({ parameters: [t] }) => {
                    let n = t.reason || "Empty reason";
                    e((0, ny._)(n), n);
                  },
                );
            })(n),
            !(function (t, e) {
              (function (t, e) {
                let n = [];
                e.includes(nb) &&
                  n.push(
                    new E.y((e) => {
                      let { stop: n } = (0, P.O)(
                        t,
                        document,
                        "securitypolicyviolation",
                        (t) => {
                          e.notify(
                            (function (t) {
                              let e = `'${t.blockedURI}' blocked by '${t.effectiveDirective}' directive`;
                              return nw({
                                type: t.effectiveDirective,
                                message: `${nb}: ${e}`,
                                originalError: t,
                                csp: { disposition: t.disposition },
                                stack: nS(
                                  t.effectiveDirective,
                                  t.originalPolicy
                                    ? `${e} of the policy "${H(
                                        t.originalPolicy,
                                        100,
                                        "...",
                                      )}"`
                                    : "no policy",
                                  t.sourceFile,
                                  t.lineNumber,
                                  t.columnNumber,
                                ),
                              });
                            })(t),
                          );
                        },
                      );
                      return n;
                    }),
                  );
                let r = e.filter((t) => t !== nb);
                return (
                  r.length &&
                    n.push(
                      new E.y((t) => {
                        if (!window.ReportingObserver) return;
                        let e = (0, z.zk)((e, n) =>
                            e.forEach((e) =>
                              t.notify(
                                (function (t) {
                                  let { type: e, body: n } = t;
                                  return nw({
                                    type: n.id,
                                    message: `${e}: ${n.message}`,
                                    originalError: t,
                                    stack: nS(
                                      n.id,
                                      n.message,
                                      n.sourceFile,
                                      n.lineNumber,
                                      n.columnNumber,
                                    ),
                                  });
                                })(e),
                              ),
                            ),
                          ),
                          n = new window.ReportingObserver(e, {
                            types: r,
                            buffered: !0,
                          });
                        return (
                          n.observe(),
                          () => {
                            n.disconnect();
                          }
                        );
                      }),
                    ),
                  (0, E.$)(...n)
                );
              })(t, [nb, "intervention"]).subscribe((t) => e.notify(t));
            })(e, n),
            n.subscribe((e) => t.notify(14, { error: e })),
            t.subscribe(
              14,
              ({ error: e, customerContext: n, savedCommonContext: r }) => {
                (n = (0, T.$e)(e.context, n)),
                  t.notify(12, {
                    customerContext: n,
                    savedCommonContext: r,
                    ...(function (t) {
                      let e = {
                          date: t.startClocks.timeStamp,
                          error: {
                            id: B(),
                            message: t.message,
                            source: t.source,
                            stack: t.stack,
                            handling_stack: t.handlingStack,
                            component_stack: t.componentStack,
                            type: t.type,
                            handling: t.handling,
                            causes: t.causes,
                            source_type: "browser",
                            fingerprint: t.fingerprint,
                            csp: t.csp,
                          },
                          type: "error",
                        },
                        n = {
                          error: t.originalError,
                          handlingStack: t.handlingStack,
                        };
                      return {
                        rawRumEvent: e,
                        startTime: t.startClocks.relative,
                        domainContext: n,
                      };
                    })(e),
                  });
              },
            ),
            {
              addError: (
                {
                  error: e,
                  handlingStack: n,
                  componentStack: r,
                  startClocks: i,
                  context: o,
                },
                a,
              ) => {
                let s = (0, nv.VZ)(e) ? (0, ny._)(e) : void 0,
                  u = (0, nv.AP)({
                    stackTrace: s,
                    originalError: e,
                    handlingStack: n,
                    componentStack: r,
                    startClocks: i,
                    nonErrorPrefix: "Provided",
                    source: t0.z.CUSTOM,
                    handling: "handled",
                  });
                t.notify(14, {
                  customerContext: o,
                  savedCommonContext: a,
                  error: u,
                });
              },
            }
          );
        })(N, t);
        !(function (t, e, n) {
          let r = {
            clearTracingIfNeeded: tG,
            traceFetch: (t) =>
              tH(e, t, n, (e) => {
                var n;
                if (
                  t.input instanceof Request &&
                  !(null === (n = t.init) || void 0 === n ? void 0 : n.headers)
                )
                  (t.input = new Request(t.input)),
                    Object.keys(e).forEach((n) => {
                      t.input.headers.append(n, e[n]);
                    });
                else {
                  t.init = (0, S.mv)(t.init);
                  let n = [];
                  t.init.headers instanceof Headers
                    ? t.init.headers.forEach((t, e) => {
                        n.push([e, t]);
                      })
                    : Array.isArray(t.init.headers)
                      ? t.init.headers.forEach((t) => {
                          n.push(t);
                        })
                      : t.init.headers &&
                        Object.keys(t.init.headers).forEach((e) => {
                          n.push([e, t.init.headers[e]]);
                        }),
                    (t.init.headers = n.concat((0, td.qP)(e)));
                }
              }),
            traceXhr: (t, r) =>
              tH(e, t, n, (t) => {
                Object.keys(t).forEach((e) => {
                  r.setRequestHeader(e, t[e]);
                });
              }),
          };
          (function (t, e, n) {
            (l ||
              (l = new E.y((t) => {
                let { stop: n } = (0, X.S)(
                    XMLHttpRequest.prototype,
                    "open",
                    eo,
                  ),
                  { stop: r } = (0, X.S)(
                    XMLHttpRequest.prototype,
                    "send",
                    (n) => {
                      (function ({ target: t, handlingStack: e }, n, r) {
                        let i = ei.get(t);
                        if (!i) return;
                        (i.state = "start"),
                          (i.startClocks = (0, q.$I)()),
                          (i.isAborted = !1),
                          (i.xhr = t),
                          (i.handlingStack = e);
                        let o = !1,
                          { stop: a } = (0, X.S)(
                            t,
                            "onreadystatechange",
                            () => {
                              t.readyState === XMLHttpRequest.DONE && s();
                            },
                          ),
                          s = () => {
                            u(),
                              a(),
                              o ||
                                ((o = !0),
                                (i.state = "complete"),
                                (i.duration = (0, q._J)(
                                  i.startClocks.timeStamp,
                                  (0, q.n$)(),
                                )),
                                (i.status = t.status),
                                r.notify((0, S.mv)(i)));
                          },
                          { stop: u } = (0, P.O)(n, t, "loadend", s);
                        r.notify(i);
                      })(n, e, t);
                    },
                    { computeHandlingStack: !0 },
                  ),
                  { stop: i } = (0, X.S)(XMLHttpRequest.prototype, "abort", ea);
                return () => {
                  n(), r(), i();
                };
              })),
            l).subscribe((e) => {
              if (ey(e.url))
                switch (e.state) {
                  case "start":
                    n.traceXhr(e, e.xhr),
                      (e.requestIndex = eS()),
                      t.notify(7, { requestIndex: e.requestIndex, url: e.url });
                    break;
                  case "complete":
                    n.clearTracingIfNeeded(e),
                      t.notify(8, {
                        duration: e.duration,
                        method: e.method,
                        requestIndex: e.requestIndex,
                        spanId: e.spanId,
                        startClocks: e.startClocks,
                        status: e.status,
                        traceId: e.traceId,
                        traceSampled: e.traceSampled,
                        type: "xhr",
                        url: e.url,
                        xhr: e.xhr,
                        isAborted: e.isAborted,
                        handlingStack: e.handlingStack,
                      });
                }
            });
          })(t, e, r),
            tt().subscribe((e) => {
              if (ey(e.url))
                switch (e.state) {
                  case "start":
                    r.traceFetch(e),
                      (e.requestIndex = eS()),
                      t.notify(7, { requestIndex: e.requestIndex, url: e.url });
                    break;
                  case "resolve":
                    (function (t, e) {
                      let n = t.response && (0, es.u)(t.response);
                      n && n.body
                        ? (function (t, e, n) {
                            let r = t.getReader(),
                              i = [],
                              o = 0;
                            function a() {
                              let t, a;
                              if (
                                (r.cancel().catch(_.Z), n.collectStreamBody)
                              ) {
                                let e;
                                if (1 === i.length) e = i[0];
                                else {
                                  e = new Uint8Array(o);
                                  let t = 0;
                                  i.forEach((n) => {
                                    e.set(n, t), (t += n.length);
                                  });
                                }
                                (t = e.slice(0, n.bytesLimit)),
                                  (a = e.length > n.bytesLimit);
                              }
                              e(void 0, t, a);
                            }
                            (function t() {
                              r.read().then(
                                (0, z.zk)((e) => {
                                  if (e.done) {
                                    a();
                                    return;
                                  }
                                  n.collectStreamBody && i.push(e.value),
                                    (o += e.value.length) > n.bytesLimit
                                      ? a()
                                      : t();
                                }),
                                (0, z.zk)((t) => e(t)),
                              );
                            })();
                          })(
                            n.body,
                            () => {
                              e(
                                (0, q._J)(t.startClocks.timeStamp, (0, q.n$)()),
                              );
                            },
                            {
                              bytesLimit: Number.POSITIVE_INFINITY,
                              collectStreamBody: !1,
                            },
                          )
                        : e((0, q._J)(t.startClocks.timeStamp, (0, q.n$)()));
                    })(e, (n) => {
                      r.clearTracingIfNeeded(e),
                        t.notify(8, {
                          duration: n,
                          method: e.method,
                          requestIndex: e.requestIndex,
                          responseType: e.responseType,
                          spanId: e.spanId,
                          startClocks: e.startClocks,
                          status: e.status,
                          traceId: e.traceId,
                          traceSampled: e.traceSampled,
                          type: "fetch",
                          url: e.url,
                          response: e.response,
                          init: e.init,
                          input: e.input,
                          isAborted: e.isAborted,
                          handlingStack: e.handlingStack,
                        });
                    });
                }
            });
        })(N, t, F);
        let tq = (function (t, e, n) {
            function r(n) {
              e.wasInPageStateDuringPeriod(
                "frozen",
                n.startClocks.relative,
                n.duration,
              ) ||
                t.notify(
                  12,
                  (function (t, e) {
                    let n = {
                      date: t.startClocks.timeStamp,
                      vital: {
                        id: B(),
                        type: t.type,
                        name: t.name,
                        duration: (0, q.c0)(t.duration),
                        description: t.description,
                      },
                      type: "vital",
                    };
                    return (
                      e && (n._dd = { vital: { computed_value: !0 } }),
                      {
                        rawRumEvent: n,
                        startTime: t.startClocks.relative,
                        duration: t.duration,
                        customerContext: t.context,
                        domainContext: {},
                      }
                    );
                  })(n, !0),
                );
            }
            return {
              addDurationVital: r,
              startDurationVital: (t, e = {}) => K(n, t, e),
              stopDurationVital: (t, e = {}) => {
                Q(r, n, t, e);
              },
            };
          })(N, Y, s),
          tV =
            ((k = t.applicationId),
            {
              get: (t) => {
                let e = tr.findView(t),
                  n = ta.findUrl(t),
                  r = F.findTrackedSession(t);
                if (r && e && n) {
                  let i = tA.findActionId(t);
                  return {
                    application_id: k,
                    session_id: r.id,
                    user_action: i ? { id: i } : void 0,
                    view: {
                      id: e.id,
                      name: e.name,
                      referrer: n.referrer,
                      url: n.url,
                    },
                  };
                }
              },
            });
        return {
          addAction: tE,
          addError: tU,
          addTiming: tI,
          addFeatureFlagEvaluation: tm.addFeatureFlagEvaluation,
          startView: tP,
          setViewContext: tD,
          setViewContextProperty: tM,
          getViewContext: tz,
          setViewName: t$,
          lifeCycle: N,
          viewHistory: tr,
          session: F,
          stopSession: () => F.expire(),
          getInternalContext: tV.get,
          startDurationVital: tq.startDurationVital,
          stopDurationVital: tq.stopDurationVital,
          addDurationVital: tq.addDurationVital,
          stop: () => {
            R.forEach((t) => t());
          },
        };
      }
      function rs(t, { session: e, viewContext: n, errorType: r }) {
        let i = e ? e.id : "no-session-id",
          o = [];
        void 0 !== r && o.push(`error-type=${r}`),
          n &&
            (o.push(`seed=${n.id}`), o.push(`from=${n.startClocks.timeStamp}`));
        let a = (function (t) {
            let e = t.site,
              n =
                t.subdomain ||
                (function (t) {
                  switch (t.site) {
                    case tP.D_:
                    case tP.Ds:
                      return "app";
                    case tP.DZ:
                      return "dd";
                    default:
                      return;
                  }
                })(t);
            return `https://${n ? `${n}.` : ""}${e}`;
          })(t),
          s = `/rum/replay/sessions/${i}`;
        return `${a}${s}?${o.join("&")}`;
      }
    },
    63050: function (t, e, n) {
      "use strict";
      let r;
      function i(t) {
        return l(t).segments_count;
      }
      function o(t) {
        l(t).segments_count += 1;
      }
      function a(t) {
        l(t).records_count += 1;
      }
      function s(t, e) {
        l(t).segments_total_raw_size += e;
      }
      function u(t) {
        return null == r ? void 0 : r.get(t);
      }
      function l(t) {
        let e;
        return (
          r || (r = new Map()),
          r.has(t)
            ? (e = r.get(t))
            : ((e = {
                records_count: 0,
                segments_count: 0,
                segments_total_raw_size: 0,
              }),
              r.set(t, e),
              r.size > 1e3 &&
                (function () {
                  if (!r) return;
                  let t = r.keys().next().value;
                  t && r.delete(t);
                })()),
          e
        );
      }
      n.d(e, {
        FT: function () {
          return i;
        },
        MA: function () {
          return u;
        },
        pk: function () {
          return s;
        },
        ui: function () {
          return o;
        },
        xK: function () {
          return a;
        },
      });
    },
    53297: function (t, e, n) {
      "use strict";
      n.d(e, {
        v: function () {
          return E;
        },
      });
      var r = n(98097),
        i = n(53334),
        o = n(42197),
        a = n(58729),
        s = n(65770),
        u = n(63050),
        l = n(55436),
        c = n(25447),
        d = n(12541);
      function f(t, e, n) {
        let r,
          i = 0,
          o = [],
          a = 0,
          s = [],
          { stop: u } = (0, l.O)(t, e, "message", ({ data: t }) => {
            if ("wrote" !== t.type || t.streamId !== n) return;
            (i += t.additionalBytesCount), o.push(t.result), (r = t.trailer);
            let e = s.shift();
            e && e.id === t.id
              ? e.writeCallback
                ? e.writeCallback(t.result.byteLength)
                : e.finishCallback && e.finishCallback()
              : (u(), (0, c.eJ)("Worker responses received out of order."));
          });
        function f() {
          let t = 0 === o.length ? new Uint8Array(0) : (0, d.Kb)(o.concat(r)),
            e = {
              rawBytesCount: i,
              output: t,
              outputBytesCount: t.byteLength,
              encoding: "deflate",
            };
          return (i = 0), (o = []), e;
        }
        function p() {
          a > 0 && (e.postMessage({ action: "reset", streamId: n }), (a = 0));
        }
        return {
          isAsync: !0,
          get isEmpty() {
            return 0 === a;
          },
          write(t, r) {
            e.postMessage({ action: "write", id: a, data: t, streamId: n }),
              s.push({ id: a, writeCallback: r, data: t }),
              (a += 1);
          },
          finish(t) {
            p(),
              s.length
                ? (s.forEach((t) => {
                    delete t.writeCallback;
                  }),
                  (s[s.length - 1].finishCallback = () => t(f())))
                : t(f());
          },
          finishSync() {
            p();
            let t = s
              .map(
                (t) => (
                  delete t.writeCallback, delete t.finishCallback, t.data
                ),
              )
              .join("");
            return { ...f(), pendingData: t };
          },
          estimateEncodedBytesCount: (t) => t.length / 8,
          stop() {
            u();
          },
        };
      }
      var p = n(85313),
        h = n(4483),
        g = n(58947);
      function m({ configuredUrl: t, error: e, source: n, scriptType: r }) {
        var i;
        if (
          (g.jf.error(
            `${n} failed to start: an error occurred while initializing the ${r}:`,
            e,
          ),
          e instanceof Event ||
            (e instanceof Error &&
              ((i = e.message).includes("Content Security Policy") ||
                i.includes("requires 'TrustedScriptURL'"))))
        ) {
          let e;
          (e = t
            ? `Please make sure the ${r} URL ${t} is correct and CSP is correctly configured.`
            : "Please make sure CSP is correctly configured."),
            g.jf.error(
              `${e} See documentation at ${g.aA}/integrations/content_security_policy_logs/#use-csp-with-real-user-monitoring-and-session-replay`,
            );
        } else "worker" === r && (0, c.Sz)(e);
      }
      let y = 30 * p.WT;
      function v(t) {
        return new Worker(
          t.workerUrl ||
            URL.createObjectURL(
              new Blob([
                '(()=>{"use strict";function t(t){const e=t.reduce(((t,e)=>t+e.length),0),a=new Uint8Array(e);let n=0;for(const e of t)a.set(e,n),n+=e.length;return a}function e(t){for(var e=t.length;--e>=0;)t[e]=0}var a=256,n=286,r=30,i=15,s=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),h=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),l=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),_=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=new Array(576);e(o);var d=new Array(60);e(d);var u=new Array(512);e(u);var f=new Array(256);e(f);var c=new Array(29);e(c);var p,g,w,v=new Array(r);function b(t,e,a,n,r){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=n,this.max_length=r,this.has_stree=t&&t.length}function m(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}e(v);var y=function(t){return t<256?u[t]:u[256+(t>>>7)]},k=function(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},z=function(t,e,a){t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,k(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},x=function(t,e,a){z(t,a[2*e],a[2*e+1])},A=function(t,e){var a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},U=function(t,e,a){var n,r,s=new Array(16),h=0;for(n=1;n<=i;n++)s[n]=h=h+a[n-1]<<1;for(r=0;r<=e;r++){var l=t[2*r+1];0!==l&&(t[2*r]=A(s[l]++,l))}},I=function(t){var e;for(e=0;e<n;e++)t.dyn_ltree[2*e]=0;for(e=0;e<r;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0},B=function(t){t.bi_valid>8?k(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},E=function(t,e,a,n){var r=2*e,i=2*a;return t[r]<t[i]||t[r]===t[i]&&n[e]<=n[a]},S=function(t,e,a){for(var n=t.heap[a],r=a<<1;r<=t.heap_len&&(r<t.heap_len&&E(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!E(e,n,t.heap[r],t.depth));)t.heap[a]=t.heap[r],a=r,r<<=1;t.heap[a]=n},C=function(t,e,n){var r,i,l,_,o=0;if(0!==t.last_lit)do{r=t.pending_buf[t.d_buf+2*o]<<8|t.pending_buf[t.d_buf+2*o+1],i=t.pending_buf[t.l_buf+o],o++,0===r?x(t,i,e):(l=f[i],x(t,l+a+1,e),0!==(_=s[l])&&(i-=c[l],z(t,i,_)),r--,l=y(r),x(t,l,n),0!==(_=h[l])&&(r-=v[l],z(t,r,_)))}while(o<t.last_lit);x(t,256,e)},D=function(t,e){var a,n,r,s=e.dyn_tree,h=e.stat_desc.static_tree,l=e.stat_desc.has_stree,_=e.stat_desc.elems,o=-1;for(t.heap_len=0,t.heap_max=573,a=0;a<_;a++)0!==s[2*a]?(t.heap[++t.heap_len]=o=a,t.depth[a]=0):s[2*a+1]=0;for(;t.heap_len<2;)s[2*(r=t.heap[++t.heap_len]=o<2?++o:0)]=1,t.depth[r]=0,t.opt_len--,l&&(t.static_len-=h[2*r+1]);for(e.max_code=o,a=t.heap_len>>1;a>=1;a--)S(t,s,a);r=_;do{a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],S(t,s,1),n=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=n,s[2*r]=s[2*a]+s[2*n],t.depth[r]=(t.depth[a]>=t.depth[n]?t.depth[a]:t.depth[n])+1,s[2*a+1]=s[2*n+1]=r,t.heap[1]=r++,S(t,s,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],function(t,e){var a,n,r,s,h,l,_=e.dyn_tree,o=e.max_code,d=e.stat_desc.static_tree,u=e.stat_desc.has_stree,f=e.stat_desc.extra_bits,c=e.stat_desc.extra_base,p=e.stat_desc.max_length,g=0;for(s=0;s<=i;s++)t.bl_count[s]=0;for(_[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<573;a++)(s=_[2*_[2*(n=t.heap[a])+1]+1]+1)>p&&(s=p,g++),_[2*n+1]=s,n>o||(t.bl_count[s]++,h=0,n>=c&&(h=f[n-c]),l=_[2*n],t.opt_len+=l*(s+h),u&&(t.static_len+=l*(d[2*n+1]+h)));if(0!==g){do{for(s=p-1;0===t.bl_count[s];)s--;t.bl_count[s]--,t.bl_count[s+1]+=2,t.bl_count[p]--,g-=2}while(g>0);for(s=p;0!==s;s--)for(n=t.bl_count[s];0!==n;)(r=t.heap[--a])>o||(_[2*r+1]!==s&&(t.opt_len+=(s-_[2*r+1])*_[2*r],_[2*r+1]=s),n--)}}(t,e),U(s,o,t.bl_count)},j=function(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,_=4;for(0===s&&(l=138,_=3),e[2*(a+1)+1]=65535,n=0;n<=a;n++)r=s,s=e[2*(n+1)+1],++h<l&&r===s||(h<_?t.bl_tree[2*r]+=h:0!==r?(r!==i&&t.bl_tree[2*r]++,t.bl_tree[32]++):h<=10?t.bl_tree[34]++:t.bl_tree[36]++,h=0,i=r,0===s?(l=138,_=3):r===s?(l=6,_=3):(l=7,_=4))},M=function(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,_=4;for(0===s&&(l=138,_=3),n=0;n<=a;n++)if(r=s,s=e[2*(n+1)+1],!(++h<l&&r===s)){if(h<_)do{x(t,r,t.bl_tree)}while(0!=--h);else 0!==r?(r!==i&&(x(t,r,t.bl_tree),h--),x(t,16,t.bl_tree),z(t,h-3,2)):h<=10?(x(t,17,t.bl_tree),z(t,h-3,3)):(x(t,18,t.bl_tree),z(t,h-11,7));h=0,i=r,0===s?(l=138,_=3):r===s?(l=6,_=3):(l=7,_=4)}},L=!1,T=function(t,e,a,n){z(t,0+(n?1:0),3),function(t,e,a,n){B(t),n&&(k(t,a),k(t,~a)),t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a}(t,e,a,!0)},H=function(t,e,n,r){var i,s,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,n=4093624447;for(e=0;e<=31;e++,n>>>=1)if(1&n&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<a;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0}(t)),D(t,t.l_desc),D(t,t.d_desc),h=function(t){var e;for(j(t,t.dyn_ltree,t.l_desc.max_code),j(t,t.dyn_dtree,t.d_desc.max_code),D(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*_[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),i=t.opt_len+3+7>>>3,(s=t.static_len+3+7>>>3)<=i&&(i=s)):i=s=n+5,n+4<=i&&-1!==e?T(t,e,n,r):4===t.strategy||s===i?(z(t,2+(r?1:0),3),C(t,o,d)):(z(t,4+(r?1:0),3),function(t,e,a,n){var r;for(z(t,e-257,5),z(t,a-1,5),z(t,n-4,4),r=0;r<n;r++)z(t,t.bl_tree[2*_[r]+1],3);M(t,t.dyn_ltree,e-1),M(t,t.dyn_dtree,a-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),C(t,t.dyn_ltree,t.dyn_dtree)),I(t),r&&B(t)},R={_tr_init:function(t){L||(!function(){var t,e,a,_,m,y=new Array(16);for(a=0,_=0;_<28;_++)for(c[_]=a,t=0;t<1<<s[_];t++)f[a++]=_;for(f[a-1]=_,m=0,_=0;_<16;_++)for(v[_]=m,t=0;t<1<<h[_];t++)u[m++]=_;for(m>>=7;_<r;_++)for(v[_]=m<<7,t=0;t<1<<h[_]-7;t++)u[256+m++]=_;for(e=0;e<=i;e++)y[e]=0;for(t=0;t<=143;)o[2*t+1]=8,t++,y[8]++;for(;t<=255;)o[2*t+1]=9,t++,y[9]++;for(;t<=279;)o[2*t+1]=7,t++,y[7]++;for(;t<=287;)o[2*t+1]=8,t++,y[8]++;for(U(o,287,y),t=0;t<r;t++)d[2*t+1]=5,d[2*t]=A(t,5);p=new b(o,s,257,n,i),g=new b(d,h,0,r,i),w=new b(new Array(0),l,0,19,7)}(),L=!0),t.l_desc=new m(t.dyn_ltree,p),t.d_desc=new m(t.dyn_dtree,g),t.bl_desc=new m(t.bl_tree,w),t.bi_buf=0,t.bi_valid=0,I(t)},_tr_stored_block:T,_tr_flush_block:H,_tr_tally:function(t,e,n){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&n,t.last_lit++,0===e?t.dyn_ltree[2*n]++:(t.matches++,e--,t.dyn_ltree[2*(f[n]+a+1)]++,t.dyn_dtree[2*y(e)]++),t.last_lit===t.lit_bufsize-1},_tr_align:function(t){z(t,2,3),x(t,256,o),function(t){16===t.bi_valid?(k(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}},K=function(t,e,a,n){for(var r=65535&t,i=t>>>16&65535,s=0;0!==a;){a-=s=a>2e3?2e3:a;do{i=i+(r=r+e[n++]|0)|0}while(--s);r%=65521,i%=65521}return r|i<<16},N=new Uint32Array(function(){for(var t,e=[],a=0;a<256;a++){t=a;for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}()),O=function(t,e,a,n){var r=N,i=n+a;t^=-1;for(var s=n;s<i;s++)t=t>>>8^r[255&(t^e[s])];return~t},q={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},F=0,G=2,J=3,P=4,Q=0,V=1,W=-1,X=0,Y=8,Z=R._tr_init,$=R._tr_stored_block,tt=R._tr_flush_block,et=R._tr_tally,at=R._tr_align,nt=F,rt=1,it=J,st=P,ht=5,lt=Q,_t=V,ot=-2,dt=-3,ut=-5,ft=W,ct=1,pt=2,gt=3,wt=4,vt=X,bt=2,mt=Y,yt=258,kt=262,zt=103,xt=113,At=666,Ut=function(t,e){return t.msg=q[e],e},It=function(t){return(t<<1)-(t>4?9:0)},Bt=function(t){for(var e=t.length;--e>=0;)t[e]=0},Et=function(t,e,a){return(e<<t.hash_shift^a)&t.hash_mask},St=function(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},Ct=function(t,e){tt(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,St(t.strm)},Dt=function(t,e){t.pending_buf[t.pending++]=e},jt=function(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},Mt=function(t,e){var a,n,r=t.max_chain_length,i=t.strstart,s=t.prev_length,h=t.nice_match,l=t.strstart>t.w_size-kt?t.strstart-(t.w_size-kt):0,_=t.window,o=t.w_mask,d=t.prev,u=t.strstart+yt,f=_[i+s-1],c=_[i+s];t.prev_length>=t.good_match&&(r>>=2),h>t.lookahead&&(h=t.lookahead);do{if(_[(a=e)+s]===c&&_[a+s-1]===f&&_[a]===_[i]&&_[++a]===_[i+1]){i+=2,a++;do{}while(_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&i<u);if(n=yt-(u-i),i=u-yt,n>s){if(t.match_start=e,s=n,n>=h)break;f=_[i+s-1],c=_[i+s]}}}while((e=d[e&o])>l&&0!=--r);return s<=t.lookahead?s:t.lookahead},Lt=function(t){var e,a,n,r,i,s,h,l,_,o,d=t.w_size;do{if(r=t.window_size-t.lookahead-t.strstart,t.strstart>=d+(d-kt)){t.window.set(t.window.subarray(d,d+d),0),t.match_start-=d,t.strstart-=d,t.block_start-=d,e=a=t.hash_size;do{n=t.head[--e],t.head[e]=n>=d?n-d:0}while(--a);e=a=d;do{n=t.prev[--e],t.prev[e]=n>=d?n-d:0}while(--a);r+=d}if(0===t.strm.avail_in)break;if(s=t.strm,h=t.window,l=t.strstart+t.lookahead,_=r,o=void 0,(o=s.avail_in)>_&&(o=_),a=0===o?0:(s.avail_in-=o,h.set(s.input.subarray(s.next_in,s.next_in+o),l),1===s.state.wrap?s.adler=K(s.adler,h,o,l):2===s.state.wrap&&(s.adler=O(s.adler,h,o,l)),s.next_in+=o,s.total_in+=o,o),t.lookahead+=a,t.lookahead+t.insert>=3)for(i=t.strstart-t.insert,t.ins_h=t.window[i],t.ins_h=Et(t,t.ins_h,t.window[i+1]);t.insert&&(t.ins_h=Et(t,t.ins_h,t.window[i+3-1]),t.prev[i&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=i,i++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<kt&&0!==t.strm.avail_in)},Tt=function(t,e){for(var a,n;;){if(t.lookahead<kt){if(Lt(t),t.lookahead<kt&&e===nt)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-kt&&(t.match_length=Mt(t,a)),t.match_length>=3)if(n=et(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=Et(t,t.ins_h,t.window[t.strstart+1]);else n=et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(n&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2},Ht=function(t,e){for(var a,n,r;;){if(t.lookahead<kt){if(Lt(t),t.lookahead<kt&&e===nt)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-kt&&(t.match_length=Mt(t,a),t.match_length<=5&&(t.strategy===ct||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-3,n=et(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=r&&(t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,n&&(Ct(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if((n=et(t,0,t.window[t.strstart-1]))&&Ct(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(n=et(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2};function Rt(t,e,a,n,r){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=n,this.func=r}var Kt=[new Rt(0,0,0,0,(function(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(Lt(t),0===t.lookahead&&e===nt)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var n=t.block_start+a;if((0===t.strstart||t.strstart>=n)&&(t.lookahead=t.strstart-n,t.strstart=n,Ct(t,!1),0===t.strm.avail_out))return 1;if(t.strstart-t.block_start>=t.w_size-kt&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(Ct(t,!1),t.strm.avail_out),1)})),new Rt(4,4,8,4,Tt),new Rt(4,5,16,8,Tt),new Rt(4,6,32,32,Tt),new Rt(4,4,16,16,Ht),new Rt(8,16,32,32,Ht),new Rt(8,16,128,128,Ht),new Rt(8,32,128,256,Ht),new Rt(32,128,258,1024,Ht),new Rt(32,258,258,4096,Ht)];function Nt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=mt,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),Bt(this.dyn_ltree),Bt(this.dyn_dtree),Bt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),Bt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),Bt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}var Ot=function(t){if(!t||!t.state)return Ut(t,ot);t.total_in=t.total_out=0,t.data_type=bt;var e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:xt,t.adler=2===e.wrap?0:1,e.last_flush=nt,Z(e),lt},qt=function(t){var e,a=Ot(t);return a===lt&&((e=t.state).window_size=2*e.w_size,Bt(e.head),e.max_lazy_match=Kt[e.level].max_lazy,e.good_match=Kt[e.level].good_length,e.nice_match=Kt[e.level].nice_length,e.max_chain_length=Kt[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0),a},Ft=function(t,e,a,n,r,i){if(!t)return ot;var s=1;if(e===ft&&(e=6),n<0?(s=0,n=-n):n>15&&(s=2,n-=16),r<1||r>9||a!==mt||n<8||n>15||e<0||e>9||i<0||i>wt)return Ut(t,ot);8===n&&(n=9);var h=new Nt;return t.state=h,h.strm=t,h.wrap=s,h.gzhead=null,h.w_bits=n,h.w_size=1<<h.w_bits,h.w_mask=h.w_size-1,h.hash_bits=r+7,h.hash_size=1<<h.hash_bits,h.hash_mask=h.hash_size-1,h.hash_shift=~~((h.hash_bits+3-1)/3),h.window=new Uint8Array(2*h.w_size),h.head=new Uint16Array(h.hash_size),h.prev=new Uint16Array(h.w_size),h.lit_bufsize=1<<r+6,h.pending_buf_size=4*h.lit_bufsize,h.pending_buf=new Uint8Array(h.pending_buf_size),h.d_buf=1*h.lit_bufsize,h.l_buf=3*h.lit_bufsize,h.level=e,h.strategy=i,h.method=a,qt(t)},Gt={deflateInit:function(t,e){return Ft(t,e,mt,15,8,vt)},deflateInit2:Ft,deflateReset:qt,deflateResetKeep:Ot,deflateSetHeader:function(t,e){return t&&t.state?2!==t.state.wrap?ot:(t.state.gzhead=e,lt):ot},deflate:function(t,e){var a,n;if(!t||!t.state||e>ht||e<0)return t?Ut(t,ot):ot;var r=t.state;if(!t.output||!t.input&&0!==t.avail_in||r.status===At&&e!==st)return Ut(t,0===t.avail_out?ut:ot);r.strm=t;var i=r.last_flush;if(r.last_flush=e,42===r.status)if(2===r.wrap)t.adler=0,Dt(r,31),Dt(r,139),Dt(r,8),r.gzhead?(Dt(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),Dt(r,255&r.gzhead.time),Dt(r,r.gzhead.time>>8&255),Dt(r,r.gzhead.time>>16&255),Dt(r,r.gzhead.time>>24&255),Dt(r,9===r.level?2:r.strategy>=pt||r.level<2?4:0),Dt(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(Dt(r,255&r.gzhead.extra.length),Dt(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(t.adler=O(t.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(Dt(r,0),Dt(r,0),Dt(r,0),Dt(r,0),Dt(r,0),Dt(r,9===r.level?2:r.strategy>=pt||r.level<2?4:0),Dt(r,3),r.status=xt);else{var s=mt+(r.w_bits-8<<4)<<8;s|=(r.strategy>=pt||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(s|=32),s+=31-s%31,r.status=xt,jt(r,s),0!==r.strstart&&(jt(r,t.adler>>>16),jt(r,65535&t.adler)),t.adler=1}if(69===r.status)if(r.gzhead.extra){for(a=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),St(t),a=r.pending,r.pending!==r.pending_buf_size));)Dt(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73;if(73===r.status)if(r.gzhead.name){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),St(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0,Dt(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.gzindex=0,r.status=91)}else r.status=91;if(91===r.status)if(r.gzhead.comment){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),St(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0,Dt(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.status=zt)}else r.status=zt;if(r.status===zt&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&St(t),r.pending+2<=r.pending_buf_size&&(Dt(r,255&t.adler),Dt(r,t.adler>>8&255),t.adler=0,r.status=xt)):r.status=xt),0!==r.pending){if(St(t),0===t.avail_out)return r.last_flush=-1,lt}else if(0===t.avail_in&&It(e)<=It(i)&&e!==st)return Ut(t,ut);if(r.status===At&&0!==t.avail_in)return Ut(t,ut);if(0!==t.avail_in||0!==r.lookahead||e!==nt&&r.status!==At){var h=r.strategy===pt?function(t,e){for(var a;;){if(0===t.lookahead&&(Lt(t),0===t.lookahead)){if(e===nt)return 1;break}if(t.match_length=0,a=et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2}(r,e):r.strategy===gt?function(t,e){for(var a,n,r,i,s=t.window;;){if(t.lookahead<=yt){if(Lt(t),t.lookahead<=yt&&e===nt)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=s[r=t.strstart-1])===s[++r]&&n===s[++r]&&n===s[++r]){i=t.strstart+yt;do{}while(n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&r<i);t.match_length=yt-(i-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=et(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2}(r,e):Kt[r.level].func(r,e);if(3!==h&&4!==h||(r.status=At),1===h||3===h)return 0===t.avail_out&&(r.last_flush=-1),lt;if(2===h&&(e===rt?at(r):e!==ht&&($(r,0,0,!1),e===it&&(Bt(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),St(t),0===t.avail_out))return r.last_flush=-1,lt}return e!==st?lt:r.wrap<=0?_t:(2===r.wrap?(Dt(r,255&t.adler),Dt(r,t.adler>>8&255),Dt(r,t.adler>>16&255),Dt(r,t.adler>>24&255),Dt(r,255&t.total_in),Dt(r,t.total_in>>8&255),Dt(r,t.total_in>>16&255),Dt(r,t.total_in>>24&255)):(jt(r,t.adler>>>16),jt(r,65535&t.adler)),St(t),r.wrap>0&&(r.wrap=-r.wrap),0!==r.pending?lt:_t)},deflateEnd:function(t){if(!t||!t.state)return ot;var e=t.state.status;return 42!==e&&69!==e&&73!==e&&91!==e&&e!==zt&&e!==xt&&e!==At?Ut(t,ot):(t.state=null,e===xt?Ut(t,dt):lt)},deflateSetDictionary:function(t,e){var a=e.length;if(!t||!t.state)return ot;var n=t.state,r=n.wrap;if(2===r||1===r&&42!==n.status||n.lookahead)return ot;if(1===r&&(t.adler=K(t.adler,e,a,0)),n.wrap=0,a>=n.w_size){0===r&&(Bt(n.head),n.strstart=0,n.block_start=0,n.insert=0);var i=new Uint8Array(n.w_size);i.set(e.subarray(a-n.w_size,a),0),e=i,a=n.w_size}var s=t.avail_in,h=t.next_in,l=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,Lt(n);n.lookahead>=3;){var _=n.strstart,o=n.lookahead-2;do{n.ins_h=Et(n,n.ins_h,n.window[_+3-1]),n.prev[_&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=_,_++}while(--o);n.strstart=_,n.lookahead=2,Lt(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=2,n.match_available=0,t.next_in=h,t.input=l,t.avail_in=s,n.wrap=r,lt},deflateInfo:"pako deflate (from Nodeca project)"};for(var Jt=new Uint8Array(256),Pt=0;Pt<256;Pt++)Jt[Pt]=Pt>=252?6:Pt>=248?5:Pt>=240?4:Pt>=224?3:Pt>=192?2:1;Jt[254]=Jt[254]=1;var Qt=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},Vt=Object.prototype.toString,Wt=F,Xt=G,Yt=J,Zt=P,$t=Q,te=V,ee=W,ae=X,ne=Y;function re(){this.options={level:ee,method:ne,chunkSize:16384,windowBits:15,memLevel:8,strategy:ae};var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Qt,this.strm.avail_out=0;var e=Gt.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(e!==$t)throw new Error(q[e]);if(t.header&&Gt.deflateSetHeader(this.strm,t.header),t.dictionary){var a;if(a="[object ArrayBuffer]"===Vt.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(e=Gt.deflateSetDictionary(this.strm,a))!==$t)throw new Error(q[e]);this._dict_set=!0}}function ie(t,e,a){try{t.postMessage({type:"errored",error:e,streamId:a})}catch(n){t.postMessage({type:"errored",error:String(e),streamId:a})}}function se(t){const e=t.strm.adler;return new Uint8Array([3,0,e>>>24&255,e>>>16&255,e>>>8&255,255&e])}re.prototype.push=function(t,e){var a,n,r=this.strm,i=this.options.chunkSize;if(this.ended)return!1;for(n=e===~~e?e:!0===e?Zt:Wt,"[object ArrayBuffer]"===Vt.call(t)?r.input=new Uint8Array(t):r.input=t,r.next_in=0,r.avail_in=r.input.length;;)if(0===r.avail_out&&(r.output=new Uint8Array(i),r.next_out=0,r.avail_out=i),(n===Xt||n===Yt)&&r.avail_out<=6)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else{if((a=Gt.deflate(r,n))===te)return r.next_out>0&&this.onData(r.output.subarray(0,r.next_out)),a=Gt.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===$t;if(0!==r.avail_out){if(n>0&&r.next_out>0)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else if(0===r.avail_in)break}else this.onData(r.output)}return!0},re.prototype.onData=function(t){this.chunks.push(t)},re.prototype.onEnd=function(t){t===$t&&(this.result=function(t){for(var e=0,a=0,n=t.length;a<n;a++)e+=t[a].length;for(var r=new Uint8Array(e),i=0,s=0,h=t.length;i<h;i++){var l=t[i];r.set(l,s),s+=l.length}return r}(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},function(e=self){try{const a=new Map;e.addEventListener("message",(n=>{try{const r=function(e,a){switch(a.action){case"init":return{type:"initialized",version:"6.5.1"};case"write":{let n=e.get(a.streamId);n||(n=new re,e.set(a.streamId,n));const r=n.chunks.length,i=function(t){if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,n,r,i,s=t.length,h=0;for(r=0;r<s;r++)a=t.charCodeAt(r),55296==(64512&a)&&r+1<s&&(n=t.charCodeAt(r+1),56320==(64512&n)&&(a=65536+(a-55296<<10)+(n-56320),r++)),h+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(h),i=0,r=0;i<h;r++)a=t.charCodeAt(r),55296==(64512&a)&&r+1<s&&(n=t.charCodeAt(r+1),56320==(64512&n)&&(a=65536+(a-55296<<10)+(n-56320),r++)),a<128?e[i++]=a:a<2048?(e[i++]=192|a>>>6,e[i++]=128|63&a):a<65536?(e[i++]=224|a>>>12,e[i++]=128|a>>>6&63,e[i++]=128|63&a):(e[i++]=240|a>>>18,e[i++]=128|a>>>12&63,e[i++]=128|a>>>6&63,e[i++]=128|63&a);return e}(a.data);return n.push(i,G),{type:"wrote",id:a.id,streamId:a.streamId,result:t(n.chunks.slice(r)),trailer:se(n),additionalBytesCount:i.length}}case"reset":e.delete(a.streamId)}}(a,n.data);r&&e.postMessage(r)}catch(t){ie(e,t,n.data&&"streamId"in n.data?n.data.streamId:void 0)}}))}catch(t){ie(e,t)}}()})();',
              ]),
            ),
        );
      }
      let _ = { status: 0 };
      function b(t, e, n, r = v) {
        switch (
          (0 === _.status &&
            (function (t, e, n = v) {
              try {
                let r = n(t),
                  { stop: i } = (0, l.O)(t, r, "error", (n) => {
                    w(t, e, n);
                  }),
                  { stop: o } = (0, l.O)(t, r, "message", ({ data: n }) => {
                    var r;
                    "errored" === n.type
                      ? w(t, e, n.error, n.streamId)
                      : "initialized" === n.type &&
                        ((r = n.version),
                        1 === _.status &&
                          (_ = {
                            status: 3,
                            worker: _.worker,
                            stop: _.stop,
                            version: r,
                          }));
                  });
                r.postMessage({ action: "init" }),
                  (0, h.iK)(() => {
                    1 === _.status &&
                      (g.jf.error(
                        `${e} failed to start: a timeout occurred while initializing the Worker`,
                      ),
                      _.initializationFailureCallbacks.forEach((t) => t()),
                      (_ = { status: 2 }));
                  }, y),
                  (_ = {
                    status: 1,
                    worker: r,
                    stop: () => {
                      i(), o();
                    },
                    initializationFailureCallbacks: [],
                  });
              } catch (n) {
                w(t, e, n);
              }
            })(t, e, r),
          _.status)
        ) {
          case 1:
            return _.initializationFailureCallbacks.push(n), _.worker;
          case 3:
            return _.worker;
        }
      }
      function w(t, e, n, r) {
        1 === _.status || 0 === _.status
          ? (m({
              configuredUrl: t.workerUrl,
              error: n,
              source: e,
              scriptType: "worker",
            }),
            1 === _.status &&
              _.initializationFailureCallbacks.forEach((t) => t()),
            (_ = { status: 2 }))
          : (0, c.Sz)(n, {
              worker_version: 3 === _.status && _.version,
              stream_id: r,
            });
      }
      function S() {
        return (
          "function" == typeof Array.from &&
          "function" == typeof CSSSupportsRule &&
          "function" == typeof URL.createObjectURL &&
          "forEach" in NodeList.prototype
        );
      }
      var k = n(70606),
        x = n(80320),
        A = n(70798);
      async function T() {
        return (await n.e(7538).then(n.bind(n, 12192))).startRecording;
      }
      let C = (function (t, e) {
          let n;
          if (((0, a.xT)() && !(0, a.ke)("records")) || !S())
            return {
              start: s.Z,
              stop: s.Z,
              getReplayStats: () => void 0,
              onRumStart: s.Z,
              isRecording: () => !1,
              getSessionReplayLink: () => void 0,
            };
          let { strategy: r, shouldStartImmediately: i } =
            ((n = 0),
            {
              strategy: {
                start() {
                  n = 1;
                },
                stop() {
                  n = 2;
                },
                isRecording: () => !1,
                getSessionReplayLink: s.Z,
              },
              shouldStartImmediately: (t) =>
                1 === n || (0 === n && !t.startSessionReplayRecordingManually),
            });
          return {
            start: (t) => r.start(t),
            stop: () => r.stop(),
            getSessionReplayLink: () => r.getSessionReplayLink(),
            onRumStart: function (e, n, a, s, u) {
              let l;
              (r = (function (t, e, n, r, i, a) {
                let s,
                  u = 0;
                e.subscribe(9, () => {
                  (2 === u || 3 === u) && (d(), (u = 1));
                }),
                  e.subscribe(11, (t) => {
                    t.reason === k.k$.UNLOADING && d();
                  }),
                  e.subscribe(10, () => {
                    1 === u && c();
                  });
                let l = async () => {
                  let [o] = await Promise.all([
                    i(),
                    (0, x._)(t, "interactive"),
                  ]);
                  if (2 !== u) return;
                  let l = a();
                  if (!l || !o) {
                    u = 0;
                    return;
                  }
                  ({ stop: s } = o(e, t, n, r, l)), (u = 3);
                };
                function c(t) {
                  var e;
                  let r = n.findTrackedSession();
                  if (!r || (0 === r.sessionReplay && (!t || !t.force))) {
                    u = 1;
                    return;
                  }
                  !(2 === (e = u) || 3 === e) &&
                    ((u = 2),
                    l().catch(A.$y),
                    t &&
                      t.force &&
                      0 === r.sessionReplay &&
                      n.setForcedReplay());
                }
                function d() {
                  3 === u && (null == s || s()), (u = 0);
                }
                return {
                  start: c,
                  stop: d,
                  getSessionReplayLink: () =>
                    (function (t, e, n, r) {
                      let i = e.findTrackedSession(),
                        a = S()
                          ? i
                            ? 0 === i.sessionReplay
                              ? "incorrect-session-plan"
                              : r
                                ? void 0
                                : "replay-not-started"
                            : "rum-not-tracked"
                          : "browser-not-supported",
                        s = n.findView();
                      return (0, o.Gm)(t, {
                        viewContext: s,
                        errorType: a,
                        session: i,
                      });
                    })(t, n, r, 0 !== u),
                  isRecording: () => 3 === u,
                };
              })(n, e, a, s, t, function () {
                return (
                  !l &&
                    (null != u ||
                      (u = b(
                        n,
                        "Datadog Session Replay",
                        () => {
                          r.stop();
                        },
                        void 0,
                      )),
                    u && (l = f(n, u, 1))),
                  l
                );
              })),
                i(n) && r.start();
            },
            isRecording: () => 3 === _.status && r.isRecording(),
            getReplayStats: (t) => (3 === _.status ? (0, u.MA)(t) : void 0),
          };
        })(async function (t = T) {
          try {
            return await t();
          } catch (t) {
            m({ error: t, source: "Recorder", scriptType: "module" });
          }
        }),
        E = (0, o._r)(o.iB, C, {
          startDeflateWorker: b,
          createDeflateEncoder: f,
        });
      (0, r.y)((0, i.R)(), "DD_RUM", E);
    },
    50381: function (t, e) {
      "use strict";
      let n = () => "undefined" != typeof window,
        r = () => !(!n() || !window.hj),
        i = (t, ...e) => {
          if (n() && window.hj) return window.hj(t, ...e);
          throw Error(
            "Hotjar is not available, make sure init has been called.",
          );
        },
        o = (t, e, n) => {
          if (
            !((t, e, n) => {
              try {
                let r =
                  document.getElementById(e) ||
                  document.createElement("script");
                return (
                  (r.id = e),
                  (r.nonce = n),
                  (r.innerText = t),
                  (r.crossOrigin = "anonymous"),
                  document.head.appendChild(r),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })(
              `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${t},hjsv:${e},hjdebug:${
                (null == n ? void 0 : n.debug) || !1
              }};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
              "hotjar-init-script",
              null == n ? void 0 : n.nonce,
            ) ||
            !r()
          )
            throw Error("Failed to initialize Hotjar tracking script.");
        };
      e.Z = {
        init: (t, e, n) => {
          try {
            return o(t, e, n), !0;
          } catch (t) {
            return console.error("Error:", t), !1;
          }
        },
        event: (t) => {
          try {
            return i("event", t), !0;
          } catch (t) {
            return console.error("Error:", t), !1;
          }
        },
        identify: (t, e) => {
          try {
            return i("identify", t, e), !0;
          } catch (t) {
            return console.error("Error:", t), !1;
          }
        },
        stateChange: (t) => {
          try {
            return i("stateChange", t), !0;
          } catch (t) {
            return console.error("Error:", t), !1;
          }
        },
        isReady: r,
      };
    },
    71722: function (t, e, n) {
      var r = n(97188);
      t.exports = function (t, e) {
        return !!(null == t ? 0 : t.length) && r(t, e, 0) > -1;
      };
    },
    52068: function (t) {
      t.exports = function (t, e, n) {
        for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
          if (n(e, t[r])) return !0;
        return !1;
      };
    },
    5677: function (t) {
      t.exports = function (t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
          if (e(t[o], o, t)) return o;
        return -1;
      };
    },
    97188: function (t, e, n) {
      var r = n(5677),
        i = n(83989),
        o = n(23344);
      t.exports = function (t, e, n) {
        return e == e ? o(t, e, n) : r(t, i, n);
      };
    },
    83989: function (t) {
      t.exports = function (t) {
        return t != t;
      };
    },
    52138: function (t, e, n) {
      var r = n(90372),
        i = n(71722),
        o = n(52068),
        a = n(56742),
        s = n(9952),
        u = n(93040);
      t.exports = function (t, e, n) {
        var l = -1,
          c = i,
          d = t.length,
          f = !0,
          p = [],
          h = p;
        if (n) (f = !1), (c = o);
        else if (d >= 200) {
          var g = e ? null : s(t);
          if (g) return u(g);
          (f = !1), (c = a), (h = new r());
        } else h = e ? [] : p;
        t: for (; ++l < d; ) {
          var m = t[l],
            y = e ? e(m) : m;
          if (((m = n || 0 !== m ? m : 0), f && y == y)) {
            for (var v = h.length; v--; ) if (h[v] === y) continue t;
            e && h.push(y), p.push(m);
          } else c(h, y, n) || (h !== p && h.push(y), p.push(m));
        }
        return p;
      };
    },
    9952: function (t, e, n) {
      var r = n(75720),
        i = n(35554),
        o = n(93040),
        a =
          r && 1 / o(new r([, -0]))[1] == 1 / 0
            ? function (t) {
                return new r(t);
              }
            : i;
      t.exports = a;
    },
    23344: function (t) {
      t.exports = function (t, e, n) {
        for (var r = n - 1, i = t.length; ++r < i; ) if (t[r] === e) return r;
        return -1;
      };
    },
    35554: function (t) {
      t.exports = function () {};
    },
    17514: function (t, e, n) {
      var r = n(52138);
      t.exports = function (t) {
        return t && t.length ? r(t) : [];
      };
    },
    26081: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var r = n(14978),
        i = n(20799),
        o = n(54197);
      class a extends r.Component {
        constructor(t) {
          super(t),
            t.cookies
              ? (this.cookies = t.cookies)
              : (this.cookies = new i.Z(void 0, t.defaultSetOptions));
        }
        render() {
          return r.createElement(
            o.zt,
            { value: this.cookies },
            this.props.children,
          );
        }
      }
    },
    45897: function () {},
    92092: function () {},
    29270: function () {},
    31479: function () {},
    87008: function () {},
    37095: function () {},
    69979: function () {},
    96378: function () {},
    29232: function (t, e, n) {
      "use strict";
      n.d(e, {
        n: function () {
          return c;
        },
      });
      var r,
        i = n(63043),
        o = n(38912),
        a = n(14978),
        s = null != (r = i.Z.default) ? r : i.Z,
        u = n(86369),
        l = n(24004);
      function c({ children: t, ...e }) {
        return (0, l.jsx)(u.C, {
          value: (function (t) {
            let e = (0, a.useMemo)(() => {
              let e = s({ key: "css", prepend: !0, ...t });
              return (e.compat = !0), e;
            }, [t]);
            return (
              (0, o.useServerInsertedHTML)(() =>
                (0, a.createElement)("style", {
                  key: e.key,
                  "data-emotion": `${e.key} ${Object.keys(e.inserted).join(
                    " ",
                  )}`,
                  dangerouslySetInnerHTML: {
                    __html: Object.values(e.inserted).join(" "),
                  },
                }),
              ),
              e
            );
          })(e),
          children: t,
        });
      }
    },
    2738: function (t, e, n) {
      "use strict";
      n.d(e, {
        S: function () {
          return h;
        },
      });
      var r = n(58052),
        i = n(28735),
        o = n(57757),
        a = n(24764),
        s = class extends a.l {
          constructor(t = {}) {
            super(), (this.config = t), (this.#t = new Map());
          }
          #t;
          build(t, e, n) {
            let o = e.queryKey,
              a = e.queryHash ?? (0, r.Rm)(o, e),
              s = this.get(a);
            return (
              s ||
                ((s = new i.A({
                  cache: this,
                  queryKey: o,
                  queryHash: a,
                  options: t.defaultQueryOptions(e),
                  state: n,
                  defaultOptions: t.getQueryDefaults(o),
                })),
                this.add(s)),
              s
            );
          }
          add(t) {
            this.#t.has(t.queryHash) ||
              (this.#t.set(t.queryHash, t),
              this.notify({ type: "added", query: t }));
          }
          remove(t) {
            let e = this.#t.get(t.queryHash);
            e &&
              (t.destroy(),
              e === t && this.#t.delete(t.queryHash),
              this.notify({ type: "removed", query: t }));
          }
          clear() {
            o.V.batch(() => {
              this.getAll().forEach((t) => {
                this.remove(t);
              });
            });
          }
          get(t) {
            return this.#t.get(t);
          }
          getAll() {
            return [...this.#t.values()];
          }
          find(t) {
            let e = { exact: !0, ...t };
            return this.getAll().find((t) => (0, r._x)(e, t));
          }
          findAll(t = {}) {
            let e = this.getAll();
            return Object.keys(t).length > 0
              ? e.filter((e) => (0, r._x)(t, e))
              : e;
          }
          notify(t) {
            o.V.batch(() => {
              this.listeners.forEach((e) => {
                e(t);
              });
            });
          }
          onFocus() {
            o.V.batch(() => {
              this.getAll().forEach((t) => {
                t.onFocus();
              });
            });
          }
          onOnline() {
            o.V.batch(() => {
              this.getAll().forEach((t) => {
                t.onOnline();
              });
            });
          }
        },
        u = n(67076),
        l = class extends a.l {
          constructor(t = {}) {
            super(),
              (this.config = t),
              (this.#e = new Map()),
              (this.#n = Date.now());
          }
          #e;
          #n;
          build(t, e, n) {
            let r = new u.m({
              mutationCache: this,
              mutationId: ++this.#n,
              options: t.defaultMutationOptions(e),
              state: n,
            });
            return this.add(r), r;
          }
          add(t) {
            let e = c(t),
              n = this.#e.get(e) ?? [];
            n.push(t),
              this.#e.set(e, n),
              this.notify({ type: "added", mutation: t });
          }
          remove(t) {
            let e = c(t);
            if (this.#e.has(e)) {
              let n = this.#e.get(e)?.filter((e) => e !== t);
              n && (0 === n.length ? this.#e.delete(e) : this.#e.set(e, n));
            }
            this.notify({ type: "removed", mutation: t });
          }
          canRun(t) {
            let e = this.#e
              .get(c(t))
              ?.find((t) => "pending" === t.state.status);
            return !e || e === t;
          }
          runNext(t) {
            let e = this.#e.get(c(t))?.find((e) => e !== t && e.state.isPaused);
            return e?.continue() ?? Promise.resolve();
          }
          clear() {
            o.V.batch(() => {
              this.getAll().forEach((t) => {
                this.remove(t);
              });
            });
          }
          getAll() {
            return [...this.#e.values()].flat();
          }
          find(t) {
            let e = { exact: !0, ...t };
            return this.getAll().find((t) => (0, r.X7)(e, t));
          }
          findAll(t = {}) {
            return this.getAll().filter((e) => (0, r.X7)(t, e));
          }
          notify(t) {
            o.V.batch(() => {
              this.listeners.forEach((e) => {
                e(t);
              });
            });
          }
          resumePausedMutations() {
            let t = this.getAll().filter((t) => t.state.isPaused);
            return o.V.batch(() =>
              Promise.all(t.map((t) => t.continue().catch(r.ZT))),
            );
          }
        };
      function c(t) {
        return t.options.scope?.id ?? String(t.mutationId);
      }
      var d = n(11101),
        f = n(10942),
        p = n(77780),
        h = class {
          #r;
          #i;
          #o;
          #a;
          #s;
          #u;
          #l;
          #c;
          constructor(t = {}) {
            (this.#r = t.queryCache || new s()),
              (this.#i = t.mutationCache || new l()),
              (this.#o = t.defaultOptions || {}),
              (this.#a = new Map()),
              (this.#s = new Map()),
              (this.#u = 0);
          }
          mount() {
            this.#u++,
              1 === this.#u &&
                ((this.#l = d.j.subscribe(async (t) => {
                  t && (await this.resumePausedMutations(), this.#r.onFocus());
                })),
                (this.#c = f.N.subscribe(async (t) => {
                  t && (await this.resumePausedMutations(), this.#r.onOnline());
                })));
          }
          unmount() {
            this.#u--,
              0 === this.#u &&
                (this.#l?.(),
                (this.#l = void 0),
                this.#c?.(),
                (this.#c = void 0));
          }
          isFetching(t) {
            return this.#r.findAll({ ...t, fetchStatus: "fetching" }).length;
          }
          isMutating(t) {
            return this.#i.findAll({ ...t, status: "pending" }).length;
          }
          getQueryData(t) {
            let e = this.defaultQueryOptions({ queryKey: t });
            return this.#r.get(e.queryHash)?.state.data;
          }
          ensureQueryData(t) {
            let e = this.getQueryData(t.queryKey);
            if (void 0 === e) return this.fetchQuery(t);
            {
              let n = this.defaultQueryOptions(t),
                r = this.#r.build(this, n);
              return (
                t.revalidateIfStale &&
                  r.isStaleByTime(n.staleTime) &&
                  this.prefetchQuery(n),
                Promise.resolve(e)
              );
            }
          }
          getQueriesData(t) {
            return this.#r
              .findAll(t)
              .map(({ queryKey: t, state: e }) => [t, e.data]);
          }
          setQueryData(t, e, n) {
            let i = this.defaultQueryOptions({ queryKey: t }),
              o = this.#r.get(i.queryHash),
              a = o?.state.data,
              s = (0, r.SE)(e, a);
            if (void 0 !== s)
              return this.#r.build(this, i).setData(s, { ...n, manual: !0 });
          }
          setQueriesData(t, e, n) {
            return o.V.batch(() =>
              this.#r
                .findAll(t)
                .map(({ queryKey: t }) => [t, this.setQueryData(t, e, n)]),
            );
          }
          getQueryState(t) {
            let e = this.defaultQueryOptions({ queryKey: t });
            return this.#r.get(e.queryHash)?.state;
          }
          removeQueries(t) {
            let e = this.#r;
            o.V.batch(() => {
              e.findAll(t).forEach((t) => {
                e.remove(t);
              });
            });
          }
          resetQueries(t, e) {
            let n = this.#r,
              r = { type: "active", ...t };
            return o.V.batch(
              () => (
                n.findAll(t).forEach((t) => {
                  t.reset();
                }),
                this.refetchQueries(r, e)
              ),
            );
          }
          cancelQueries(t = {}, e = {}) {
            let n = { revert: !0, ...e };
            return Promise.all(
              o.V.batch(() => this.#r.findAll(t).map((t) => t.cancel(n))),
            )
              .then(r.ZT)
              .catch(r.ZT);
          }
          invalidateQueries(t = {}, e = {}) {
            return o.V.batch(() => {
              if (
                (this.#r.findAll(t).forEach((t) => {
                  t.invalidate();
                }),
                "none" === t.refetchType)
              )
                return Promise.resolve();
              let n = { ...t, type: t.refetchType ?? t.type ?? "active" };
              return this.refetchQueries(n, e);
            });
          }
          refetchQueries(t = {}, e) {
            let n = { ...e, cancelRefetch: e?.cancelRefetch ?? !0 };
            return Promise.all(
              o.V.batch(() =>
                this.#r
                  .findAll(t)
                  .filter((t) => !t.isDisabled())
                  .map((t) => {
                    let e = t.fetch(void 0, n);
                    return (
                      n.throwOnError || (e = e.catch(r.ZT)),
                      "paused" === t.state.fetchStatus ? Promise.resolve() : e
                    );
                  }),
              ),
            ).then(r.ZT);
          }
          fetchQuery(t) {
            let e = this.defaultQueryOptions(t);
            void 0 === e.retry && (e.retry = !1);
            let n = this.#r.build(this, e);
            return n.isStaleByTime(e.staleTime)
              ? n.fetch(e)
              : Promise.resolve(n.state.data);
          }
          prefetchQuery(t) {
            return this.fetchQuery(t).then(r.ZT).catch(r.ZT);
          }
          fetchInfiniteQuery(t) {
            return (t.behavior = (0, p.Gm)(t.pages)), this.fetchQuery(t);
          }
          prefetchInfiniteQuery(t) {
            return this.fetchInfiniteQuery(t).then(r.ZT).catch(r.ZT);
          }
          resumePausedMutations() {
            return f.N.isOnline()
              ? this.#i.resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return this.#r;
          }
          getMutationCache() {
            return this.#i;
          }
          getDefaultOptions() {
            return this.#o;
          }
          setDefaultOptions(t) {
            this.#o = t;
          }
          setQueryDefaults(t, e) {
            this.#a.set((0, r.Ym)(t), { queryKey: t, defaultOptions: e });
          }
          getQueryDefaults(t) {
            let e = [...this.#a.values()],
              n = {};
            return (
              e.forEach((e) => {
                (0, r.to)(t, e.queryKey) && (n = { ...n, ...e.defaultOptions });
              }),
              n
            );
          }
          setMutationDefaults(t, e) {
            this.#s.set((0, r.Ym)(t), { mutationKey: t, defaultOptions: e });
          }
          getMutationDefaults(t) {
            let e = [...this.#s.values()],
              n = {};
            return (
              e.forEach((e) => {
                (0, r.to)(t, e.mutationKey) &&
                  (n = { ...n, ...e.defaultOptions });
              }),
              n
            );
          }
          defaultQueryOptions(t) {
            if (t._defaulted) return t;
            let e = {
              ...this.#o.queries,
              ...this.getQueryDefaults(t.queryKey),
              ...t,
              _defaulted: !0,
            };
            return (
              e.queryHash || (e.queryHash = (0, r.Rm)(e.queryKey, e)),
              void 0 === e.refetchOnReconnect &&
                (e.refetchOnReconnect = "always" !== e.networkMode),
              void 0 === e.throwOnError && (e.throwOnError = !!e.suspense),
              !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
              !0 !== e.enabled && e.queryFn === r.CN && (e.enabled = !1),
              e
            );
          }
          defaultMutationOptions(t) {
            return t?._defaulted
              ? t
              : {
                  ...this.#o.mutations,
                  ...(t?.mutationKey &&
                    this.getMutationDefaults(t.mutationKey)),
                  ...t,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#r.clear(), this.#i.clear();
          }
        };
    },
    62337: function (t, e, n) {
      "use strict";
      n.d(e, {
        $T: function () {
          return t$;
        },
        $W: function () {
          return O;
        },
        AI: function () {
          return ez;
        },
        D$: function () {
          return tP;
        },
        Df: function () {
          return w;
        },
        F3: function () {
          return S;
        },
        FW: function () {
          return tE;
        },
        GW: function () {
          return k;
        },
        H3: function () {
          return E;
        },
        H9: function () {
          return eF;
        },
        IZ: function () {
          return eD;
        },
        K_: function () {
          return eK;
        },
        LM: function () {
          return tt;
        },
        LO: function () {
          return R;
        },
        Oo: function () {
          return tI;
        },
        P$: function () {
          return tO;
        },
        Pz: function () {
          return eI;
        },
        Q$: function () {
          return eG;
        },
        QR: function () {
          return eU;
        },
        Qj: function () {
          return tC;
        },
        Rk: function () {
          return tm;
        },
        U2: function () {
          return td;
        },
        V_: function () {
          return eN;
        },
        Vo: function () {
          return ts;
        },
        WU: function () {
          return eM;
        },
        XK: function () {
          return tT;
        },
        Yz: function () {
          return D;
        },
        Zw: function () {
          return T;
        },
        _y: function () {
          return e$;
        },
        bh: function () {
          return s;
        },
        dC: function () {
          return A;
        },
        dD: function () {
          return x;
        },
        dG: function () {
          return to;
        },
        di: function () {
          return tp;
        },
        eY: function () {
          return ta;
        },
        ei: function () {
          return I;
        },
        g4: function () {
          return tl;
        },
        gQ: function () {
          return b;
        },
        gm: function () {
          return tf;
        },
        h_: function () {
          return tB;
        },
        hw: function () {
          return tN;
        },
        jk: function () {
          return eP;
        },
        jt: function () {
          return u;
        },
        kr: function () {
          return M;
        },
        kw: function () {
          return eB;
        },
        m5: function () {
          return tF;
        },
        nf: function () {
          return eH;
        },
        ok: function () {
          return tR;
        },
        on: function () {
          return C;
        },
        pI: function () {
          return j;
        },
        qE: function () {
          return tg;
        },
        qp: function () {
          return z;
        },
        rs: function () {
          return th;
        },
        sY: function () {
          return tA;
        },
        sk: function () {
          return tq;
        },
        so: function () {
          return _;
        },
        ws: function () {
          return eQ;
        },
      });
      var r,
        i,
        o = { context: void 0, registry: void 0 };
      function a(t) {
        o.context = t;
      }
      var s = Symbol("solid-proxy"),
        u = Symbol("solid-track"),
        l = { equals: (t, e) => t === e },
        c = H,
        d = { owned: null, cleanups: null, context: null, owner: null },
        f = {},
        p = null,
        h = null,
        g = null,
        m = null,
        y = null,
        v = 0;
      function _(t, e) {
        let n = g,
          r = p,
          i = 0 === t.length,
          o = void 0 === e ? r : e,
          a = i
            ? d
            : {
                owned: null,
                cleanups: null,
                context: o ? o.context : null,
                owner: o,
              };
        (p = a), (g = null);
        try {
          return G(i ? t : () => t(() => T(() => Z(a))), !0);
        } finally {
          (g = n), (p = r);
        }
      }
      function b(t, e) {
        let n = {
          value: t,
          observers: null,
          observerSlots: null,
          comparator: (e = e ? Object.assign({}, l, e) : l).equals || void 0,
        };
        return [
          L.bind(n),
          (t) => (
            "function" == typeof t &&
              (t = t(h && h.running && h.sources.has(n) ? n.tValue : n.value)),
            U(n, t)
          ),
        ];
      }
      function w(t, e, n) {
        q(B(t, e, !0, 1));
      }
      function S(t, e, n) {
        q(B(t, e, !1, 1));
      }
      function k(t, e, n) {
        c = K;
        let r = B(t, e, !1, 1),
          o = i && z(i);
        o && (r.suspense = o),
          (n && n.render) || (r.user = !0),
          y ? y.push(r) : q(r);
      }
      function x(t, e, n) {
        n = n ? Object.assign({}, l, n) : l;
        let r = B(t, e, !0, 0);
        return (
          (r.observers = null),
          (r.observerSlots = null),
          (r.comparator = n.equals || void 0),
          q(r),
          L.bind(r)
        );
      }
      function A(t) {
        return G(t, !1);
      }
      function T(t) {
        if (null === g) return t();
        let e = g;
        g = null;
        try {
          return t();
        } finally {
          g = e;
        }
      }
      function C(t, e, n) {
        let r;
        let i = Array.isArray(t),
          o = n && n.defer;
        return (n) => {
          let a;
          if (i) {
            a = Array(t.length);
            for (let e = 0; e < t.length; e++) a[e] = t[e]();
          } else a = t();
          if (o) {
            o = !1;
            return;
          }
          let s = T(() => e(a, r, n));
          return (r = a), s;
        };
      }
      function E(t) {
        k(() => T(t));
      }
      function O(t) {
        return (
          null === p ||
            (null === p.cleanups ? (p.cleanups = [t]) : p.cleanups.push(t)),
          t
        );
      }
      function R() {
        return g;
      }
      function I() {
        return p;
      }
      function N(t) {
        if (h && h.running) return t(), h.done;
        let e = g,
          n = p;
        return Promise.resolve().then(() => {
          let r;
          return (
            (g = e),
            (p = n),
            i &&
              ((r =
                h ||
                (h = {
                  sources: new Set(),
                  effects: [],
                  promises: new Set(),
                  disposed: new Set(),
                  queue: new Set(),
                  running: !0,
                })).done || (r.done = new Promise((t) => (r.resolve = t))),
              (r.running = !0)),
            G(t, !1),
            (g = p = null),
            r ? r.done : void 0
          );
        });
      }
      var [P, $] = b(!1);
      function D() {
        return [P, N];
      }
      function M(t, e) {
        let n = Symbol("context");
        return {
          id: n,
          Provider: function (t) {
            let e;
            return (
              S(
                () =>
                  (e = T(
                    () => (
                      (p.context = { ...p.context, [n]: t.value }),
                      j(() => t.children)
                    ),
                  )),
                void 0,
              ),
              e
            );
          },
          defaultValue: t,
        };
      }
      function z(t) {
        return p && p.context && void 0 !== p.context[t.id]
          ? p.context[t.id]
          : t.defaultValue;
      }
      function j(t) {
        let e = x(t),
          n = x(() =>
            (function t(e) {
              if ("function" == typeof e && !e.length) return t(e());
              if (Array.isArray(e)) {
                let n = [];
                for (let r = 0; r < e.length; r++) {
                  let i = t(e[r]);
                  Array.isArray(i) ? n.push.apply(n, i) : n.push(i);
                }
                return n;
              }
              return e;
            })(e()),
          );
        return (
          (n.toArray = () => {
            let t = n();
            return Array.isArray(t) ? t : null != t ? [t] : [];
          }),
          n
        );
      }
      function L() {
        let t = h && h.running;
        if (this.sources && (t ? this.tState : this.state)) {
          if ((t ? this.tState : this.state) === 1) q(this);
          else {
            let t = m;
            (m = null), G(() => Q(this), !1), (m = t);
          }
        }
        if (g) {
          let t = this.observers ? this.observers.length : 0;
          g.sources
            ? (g.sources.push(this), g.sourceSlots.push(t))
            : ((g.sources = [this]), (g.sourceSlots = [t])),
            this.observers
              ? (this.observers.push(g),
                this.observerSlots.push(g.sources.length - 1))
              : ((this.observers = [g]),
                (this.observerSlots = [g.sources.length - 1]));
        }
        return t && h.sources.has(this) ? this.tValue : this.value;
      }
      function U(t, e, n) {
        let r = h && h.running && h.sources.has(t) ? t.tValue : t.value;
        if (!t.comparator || !t.comparator(r, e)) {
          if (h) {
            let r = h.running;
            (r || (!n && h.sources.has(t))) &&
              (h.sources.add(t), (t.tValue = e)),
              r || (t.value = e);
          } else t.value = e;
          t.observers &&
            t.observers.length &&
            G(() => {
              for (let e = 0; e < t.observers.length; e += 1) {
                let n = t.observers[e],
                  r = h && h.running;
                (r && h.disposed.has(n)) ||
                  ((r ? n.tState : n.state) ||
                    (n.pure ? m.push(n) : y.push(n),
                    n.observers &&
                      (function t(e) {
                        let n = h && h.running;
                        for (let r = 0; r < e.observers.length; r += 1) {
                          let i = e.observers[r];
                          (n ? i.tState : i.state) ||
                            (n ? (i.tState = 2) : (i.state = 2),
                            i.pure ? m.push(i) : y.push(i),
                            i.observers && t(i));
                        }
                      })(n)),
                  r ? (n.tState = 1) : (n.state = 1));
              }
              if (m.length > 1e6) throw ((m = []), Error());
            }, !1);
        }
        return e;
      }
      function q(t) {
        if (!t.fn) return;
        Z(t);
        let e = v;
        V(t, h && h.running && h.sources.has(t) ? t.tValue : t.value, e),
          h &&
            !h.running &&
            h.sources.has(t) &&
            queueMicrotask(() => {
              G(() => {
                h && (h.running = !0),
                  (g = p = t),
                  V(t, t.tValue, e),
                  (g = p = null);
              }, !1);
            });
      }
      function V(t, e, n) {
        let r;
        let i = p,
          o = g;
        g = p = t;
        try {
          r = t.fn(e);
        } catch (e) {
          return (
            t.pure &&
              (h && h.running
                ? ((t.tState = 1),
                  t.tOwned && t.tOwned.forEach(Z),
                  (t.tOwned = void 0))
                : ((t.state = 1),
                  t.owned && t.owned.forEach(Z),
                  (t.owned = null))),
            (t.updatedAt = n + 1),
            J(e)
          );
        } finally {
          (g = o), (p = i);
        }
        (!t.updatedAt || t.updatedAt <= n) &&
          (null != t.updatedAt && "observers" in t
            ? U(t, r, !0)
            : h && h.running && t.pure
              ? (h.sources.add(t), (t.tValue = r))
              : (t.value = r),
          (t.updatedAt = n));
      }
      function B(t, e, n, r = 1, i) {
        let o = {
          fn: t,
          state: r,
          updatedAt: null,
          owned: null,
          sources: null,
          sourceSlots: null,
          cleanups: null,
          value: e,
          owner: p,
          context: p ? p.context : null,
          pure: n,
        };
        return (
          h && h.running && ((o.state = 0), (o.tState = r)),
          null === p ||
            (p !== d &&
              (h && h.running && p.pure
                ? p.tOwned
                  ? p.tOwned.push(o)
                  : (p.tOwned = [o])
                : p.owned
                  ? p.owned.push(o)
                  : (p.owned = [o]))),
          o
        );
      }
      function F(t) {
        let e = h && h.running;
        if ((e ? t.tState : t.state) === 0) return;
        if ((e ? t.tState : t.state) === 2) return Q(t);
        if (t.suspense && T(t.suspense.inFallback))
          return t.suspense.effects.push(t);
        let n = [t];
        for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < v); ) {
          if (e && h.disposed.has(t)) return;
          (e ? t.tState : t.state) && n.push(t);
        }
        for (let r = n.length - 1; r >= 0; r--) {
          if (((t = n[r]), e)) {
            let e = t,
              i = n[r + 1];
            for (; (e = e.owner) && e !== i; ) if (h.disposed.has(e)) return;
          }
          if ((e ? t.tState : t.state) === 1) q(t);
          else if ((e ? t.tState : t.state) === 2) {
            let e = m;
            (m = null), G(() => Q(t, n[0]), !1), (m = e);
          }
        }
      }
      function G(t, e) {
        if (m) return t();
        let n = !1;
        e || (m = []), y ? (n = !0) : (y = []), v++;
        try {
          let e = t();
          return (
            (function (t) {
              let e;
              if ((m && (H(m), (m = null)), t)) return;
              if (h) {
                if (h.promises.size || h.queue.size) {
                  if (h.running) {
                    (h.running = !1),
                      h.effects.push.apply(h.effects, y),
                      (y = null),
                      $(!0);
                    return;
                  }
                } else {
                  let t = h.sources,
                    n = h.disposed;
                  for (let t of (y.push.apply(y, h.effects),
                  (e = h.resolve),
                  y))
                    "tState" in t && (t.state = t.tState), delete t.tState;
                  (h = null),
                    G(() => {
                      for (let t of n) Z(t);
                      for (let e of t) {
                        if (((e.value = e.tValue), e.owned))
                          for (let t = 0, n = e.owned.length; t < n; t++)
                            Z(e.owned[t]);
                        e.tOwned && (e.owned = e.tOwned),
                          delete e.tValue,
                          delete e.tOwned,
                          (e.tState = 0);
                      }
                      $(!1);
                    }, !1);
                }
              }
              let n = y;
              (y = null), n.length && G(() => c(n), !1), e && e();
            })(n),
            e
          );
        } catch (t) {
          n || (y = null), (m = null), J(t);
        }
      }
      function H(t) {
        for (let e = 0; e < t.length; e++) F(t[e]);
      }
      function K(t) {
        let e,
          n = 0;
        for (e = 0; e < t.length; e++) {
          let r = t[e];
          r.user ? (t[n++] = r) : F(r);
        }
        if (o.context) {
          if (o.count) {
            o.effects || (o.effects = []), o.effects.push(...t.slice(0, n));
            return;
          }
          o.effects &&
            ((t = [...o.effects, ...t]),
            (n += o.effects.length),
            delete o.effects),
            a();
        }
        for (e = 0; e < n; e++) F(t[e]);
      }
      function Q(t, e) {
        let n = h && h.running;
        n ? (t.tState = 0) : (t.state = 0);
        for (let r = 0; r < t.sources.length; r += 1) {
          let i = t.sources[r];
          if (i.sources) {
            let t = n ? i.tState : i.state;
            1 === t
              ? i !== e && (!i.updatedAt || i.updatedAt < v) && F(i)
              : 2 === t && Q(i, e);
          }
        }
      }
      function Z(t) {
        let e;
        if (t.sources)
          for (; t.sources.length; ) {
            let e = t.sources.pop(),
              n = t.sourceSlots.pop(),
              r = e.observers;
            if (r && r.length) {
              let t = r.pop(),
                i = e.observerSlots.pop();
              n < r.length &&
                ((t.sourceSlots[i] = n), (r[n] = t), (e.observerSlots[n] = i));
            }
          }
        if (h && h.running && t.pure) {
          if (t.tOwned) {
            for (e = t.tOwned.length - 1; e >= 0; e--) Z(t.tOwned[e]);
            delete t.tOwned;
          }
          !(function t(e, n) {
            if ((n || ((e.tState = 0), h.disposed.add(e)), e.owned))
              for (let n = 0; n < e.owned.length; n++) t(e.owned[n]);
          })(t, !0);
        } else if (t.owned) {
          for (e = t.owned.length - 1; e >= 0; e--) Z(t.owned[e]);
          t.owned = null;
        }
        if (t.cleanups) {
          for (e = t.cleanups.length - 1; e >= 0; e--) t.cleanups[e]();
          t.cleanups = null;
        }
        h && h.running ? (t.tState = 0) : (t.state = 0);
      }
      function W(t) {
        return t instanceof Error
          ? t
          : Error("string" == typeof t ? t : "Unknown error", { cause: t });
      }
      function J(t, e = p) {
        throw W(t);
      }
      var X = Symbol("fallback");
      function Y(t) {
        for (let e = 0; e < t.length; e++) t[e]();
      }
      function tt(t, e) {
        return T(() => t(e || {}));
      }
      function te() {
        return !0;
      }
      var tn = {
        get: (t, e, n) => (e === s ? n : t.get(e)),
        has: (t, e) => e === s || t.has(e),
        set: te,
        deleteProperty: te,
        getOwnPropertyDescriptor: (t, e) => ({
          configurable: !0,
          enumerable: !0,
          get: () => t.get(e),
          set: te,
          deleteProperty: te,
        }),
        ownKeys: (t) => t.keys(),
      };
      function tr(t) {
        return (t = "function" == typeof t ? t() : t) ? t : {};
      }
      function ti() {
        for (let t = 0, e = this.length; t < e; ++t) {
          let e = this[t]();
          if (void 0 !== e) return e;
        }
      }
      function to(...t) {
        let e = !1;
        for (let n = 0; n < t.length; n++) {
          let r = t[n];
          (e = e || (!!r && s in r)),
            (t[n] = "function" == typeof r ? ((e = !0), x(r)) : r);
        }
        if (e)
          return new Proxy(
            {
              get(e) {
                for (let n = t.length - 1; n >= 0; n--) {
                  let r = tr(t[n])[e];
                  if (void 0 !== r) return r;
                }
              },
              has(e) {
                for (let n = t.length - 1; n >= 0; n--)
                  if (e in tr(t[n])) return !0;
                return !1;
              },
              keys() {
                let e = [];
                for (let n = 0; n < t.length; n++)
                  e.push(...Object.keys(tr(t[n])));
                return [...new Set(e)];
              },
            },
            tn,
          );
        let n = {},
          r = Object.create(null);
        for (let e = t.length - 1; e >= 0; e--) {
          let i = t[e];
          if (!i) continue;
          let o = Object.getOwnPropertyNames(i);
          for (let t = o.length - 1; t >= 0; t--) {
            let e = o[t];
            if ("__proto__" === e || "constructor" === e) continue;
            let a = Object.getOwnPropertyDescriptor(i, e);
            if (r[e]) {
              let t = n[e];
              t &&
                (a.get
                  ? t.push(a.get.bind(i))
                  : void 0 !== a.value && t.push(() => a.value));
            } else
              r[e] = a.get
                ? {
                    enumerable: !0,
                    configurable: !0,
                    get: ti.bind((n[e] = [a.get.bind(i)])),
                  }
                : void 0 !== a.value
                  ? a
                  : void 0;
          }
        }
        let i = {},
          o = Object.keys(r);
        for (let t = o.length - 1; t >= 0; t--) {
          let e = o[t],
            n = r[e];
          n && n.get
            ? Object.defineProperty(i, e, n)
            : (i[e] = n ? n.value : void 0);
        }
        return i;
      }
      function ta(t, ...e) {
        if (s in t) {
          let n = new Set(e.length > 1 ? e.flat() : e[0]),
            r = e.map(
              (e) =>
                new Proxy(
                  {
                    get: (n) => (e.includes(n) ? t[n] : void 0),
                    has: (n) => e.includes(n) && n in t,
                    keys: () => e.filter((e) => e in t),
                  },
                  tn,
                ),
            );
          return (
            r.push(
              new Proxy(
                {
                  get: (e) => (n.has(e) ? void 0 : t[e]),
                  has: (e) => !n.has(e) && e in t,
                  keys: () => Object.keys(t).filter((t) => !n.has(t)),
                },
                tn,
              ),
            ),
            r
          );
        }
        let n = {},
          r = e.map(() => ({}));
        for (let i of Object.getOwnPropertyNames(t)) {
          let o = Object.getOwnPropertyDescriptor(t, i),
            a =
              !o.get && !o.set && o.enumerable && o.writable && o.configurable,
            s = !1,
            u = 0;
          for (let t of e)
            t.includes(i) &&
              ((s = !0),
              a ? (r[u][i] = o.value) : Object.defineProperty(r[u], i, o)),
              ++u;
          s || (a ? (n[i] = o.value) : Object.defineProperty(n, i, o));
        }
        return [...r, n];
      }
      function ts(t) {
        let e, n;
        let r = (r) => {
          let s;
          let u = o.context;
          if (u) {
            let [r, i] = b();
            o.count || (o.count = 0),
              o.count++,
              (n || (n = t())).then((t) => {
                a(u), o.count--, i(() => t.default), a();
              }),
              (e = r);
          } else if (!e) {
            let [r] = (function (t, e, n) {
              let r, a, s;
              (2 == arguments.length && "object" == typeof e) ||
              1 == arguments.length
                ? ((r = !0), (a = t), (s = e || {}))
                : ((r = t), (a = e), (s = n || {}));
              let u = null,
                l = f,
                c = null,
                d = !1,
                p = !1,
                m = "initialValue" in s,
                y = "function" == typeof r && x(r),
                v = new Set(),
                [_, S] = (s.storage || b)(s.initialValue),
                [k, A] = b(void 0),
                [C, E] = b(void 0, { equals: !1 }),
                [O, R] = b(m ? "ready" : "unresolved");
              if (o.context) {
                let t;
                (c = `${o.context.id}${o.context.count++}`),
                  "initial" === s.ssrLoadFrom
                    ? (l = s.initialValue)
                    : o.load && (t = o.load(c)) && (l = t);
              }
              function I(t, e, n, r) {
                return (
                  u === t &&
                    ((u = null),
                    void 0 !== r && (m = !0),
                    (t === l || e === l) &&
                      s.onHydrated &&
                      queueMicrotask(() => s.onHydrated(r, { value: e })),
                    (l = f),
                    h && t && d
                      ? (h.promises.delete(t),
                        (d = !1),
                        G(() => {
                          (h.running = !0), N(e, n);
                        }, !1))
                      : N(e, n)),
                  e
                );
              }
              function N(t, e) {
                G(() => {
                  for (let n of (void 0 === e && S(() => t),
                  R(void 0 !== e ? "errored" : m ? "ready" : "unresolved"),
                  A(e),
                  v.keys()))
                    n.decrement();
                  v.clear();
                }, !1);
              }
              function P() {
                let t = i && z(i),
                  e = _(),
                  n = k();
                if (void 0 !== n && !u) throw n;
                return (
                  g &&
                    !g.user &&
                    t &&
                    w(() => {
                      C(),
                        u &&
                          (t.resolved && h && d
                            ? h.promises.add(u)
                            : v.has(t) || (t.increment(), v.add(t)));
                    }),
                  e
                );
              }
              function $(t = !0) {
                if (!1 !== t && p) return;
                p = !1;
                let e = y ? y() : r;
                if (((d = h && h.running), null == e || !1 === e)) {
                  I(u, T(_));
                  return;
                }
                h && u && h.promises.delete(u);
                let n =
                  l !== f ? l : T(() => a(e, { value: _(), refetching: t }));
                return n && "object" == typeof n && "then" in n
                  ? ((u = n), "value" in n)
                    ? ("success" === n.status
                        ? I(u, n.value, void 0, e)
                        : I(u, void 0, void 0, e),
                      n)
                    : ((p = !0),
                      queueMicrotask(() => (p = !1)),
                      G(() => {
                        R(m ? "refreshing" : "pending"), E();
                      }, !1),
                      n.then(
                        (t) => I(n, t, void 0, e),
                        (t) => I(n, void 0, W(t), e),
                      ))
                  : (I(u, n, void 0, e), n);
              }
              return (
                Object.defineProperties(P, {
                  state: { get: () => O() },
                  error: { get: () => k() },
                  loading: {
                    get() {
                      let t = O();
                      return "pending" === t || "refreshing" === t;
                    },
                  },
                  latest: {
                    get() {
                      if (!m) return P();
                      let t = k();
                      if (t && !u) throw t;
                      return _();
                    },
                  },
                }),
                y ? w(() => $(!1)) : $(!1),
                [P, { refetch: $, mutate: S }]
              );
            })(() => (n || (n = t())).then((t) => t.default));
            e = r;
          }
          return x(
            () =>
              (s = e()) &&
              T(() => {
                if (!u) return s(r);
                let t = o.context;
                a(u);
                let e = s(r);
                return a(t), e;
              }),
          );
        };
        return (
          (r.preload = () =>
            n || ((n = t()).then((t) => (e = () => t.default)), n)),
          r
        );
      }
      var tu = 0;
      function tl() {
        let t = o.context;
        return t ? `${t.id}${t.count++}` : `cl-${tu++}`;
      }
      var tc = (t) => `Stale read from <${t}>.`;
      function td(t) {
        return x(
          (function (t, e, n = {}) {
            let r = [],
              i = [],
              o = [],
              a = 0,
              s = e.length > 1 ? [] : null;
            return (
              O(() => Y(o)),
              () => {
                let l = t() || [],
                  c,
                  d;
                return (
                  l[u],
                  T(() => {
                    let t = l.length,
                      e,
                      u,
                      p,
                      h,
                      g,
                      m,
                      y,
                      v,
                      b;
                    if (0 === t)
                      0 !== a &&
                        (Y(o),
                        (o = []),
                        (r = []),
                        (i = []),
                        (a = 0),
                        s && (s = [])),
                        n.fallback &&
                          ((r = [X]),
                          (i[0] = _((t) => ((o[0] = t), n.fallback()))),
                          (a = 1));
                    else if (0 === a) {
                      for (d = 0, i = Array(t); d < t; d++)
                        (r[d] = l[d]), (i[d] = _(f));
                      a = t;
                    } else {
                      for (
                        p = Array(t),
                          h = Array(t),
                          s && (g = Array(t)),
                          m = 0,
                          y = Math.min(a, t);
                        m < y && r[m] === l[m];
                        m++
                      );
                      for (
                        y = a - 1, v = t - 1;
                        y >= m && v >= m && r[y] === l[v];
                        y--, v--
                      )
                        (p[v] = i[y]), (h[v] = o[y]), s && (g[v] = s[y]);
                      for (e = new Map(), u = Array(v + 1), d = v; d >= m; d--)
                        (b = l[d]),
                          (c = e.get(b)),
                          (u[d] = void 0 === c ? -1 : c),
                          e.set(b, d);
                      for (c = m; c <= y; c++)
                        (b = r[c]),
                          void 0 !== (d = e.get(b)) && -1 !== d
                            ? ((p[d] = i[c]),
                              (h[d] = o[c]),
                              s && (g[d] = s[c]),
                              (d = u[d]),
                              e.set(b, d))
                            : o[c]();
                      for (d = m; d < t; d++)
                        d in p
                          ? ((i[d] = p[d]),
                            (o[d] = h[d]),
                            s && ((s[d] = g[d]), s[d](d)))
                          : (i[d] = _(f));
                      (i = i.slice(0, (a = t))), (r = l.slice(0));
                    }
                    return i;
                  })
                );
                function f(t) {
                  if (((o[d] = t), s)) {
                    let [t, n] = b(d);
                    return (s[d] = n), e(l[d], t);
                  }
                  return e(l[d]);
                }
              }
            );
          })(
            () => t.each,
            t.children,
            ("fallback" in t && { fallback: () => t.fallback }) || void 0,
          ),
        );
      }
      function tf(t) {
        return x(
          (function (t, e, n = {}) {
            let r = [],
              i = [],
              o = [],
              a = [],
              s = 0,
              l;
            return (
              O(() => Y(o)),
              () => {
                let c = t() || [];
                return (
                  c[u],
                  T(() => {
                    if (0 === c.length)
                      return (
                        0 !== s &&
                          (Y(o),
                          (o = []),
                          (r = []),
                          (i = []),
                          (s = 0),
                          (a = [])),
                        n.fallback &&
                          ((r = [X]),
                          (i[0] = _((t) => ((o[0] = t), n.fallback()))),
                          (s = 1)),
                        i
                      );
                    for (
                      r[0] === X &&
                        (o[0](), (o = []), (r = []), (i = []), (s = 0)),
                        l = 0;
                      l < c.length;
                      l++
                    )
                      l < r.length && r[l] !== c[l]
                        ? a[l](() => c[l])
                        : l >= r.length && (i[l] = _(d));
                    for (; l < r.length; l++) o[l]();
                    return (
                      (s = a.length = o.length = c.length),
                      (r = c.slice(0)),
                      (i = i.slice(0, s))
                    );
                  })
                );
                function d(t) {
                  o[l] = t;
                  let [n, r] = b(c[l]);
                  return (a[l] = r), e(n, l);
                }
              }
            );
          })(
            () => t.each,
            t.children,
            ("fallback" in t && { fallback: () => t.fallback }) || void 0,
          ),
        );
      }
      function tp(t) {
        let e = t.keyed,
          n = x(() => t.when, void 0, {
            equals: (t, n) => (e ? t === n : !t == !n),
          });
        return x(
          () => {
            let r = n();
            if (r) {
              let i = t.children;
              return "function" == typeof i && i.length > 0
                ? T(() =>
                    i(
                      e
                        ? r
                        : () => {
                            if (!T(n)) throw tc("Show");
                            return t.when;
                          },
                    ),
                  )
                : i;
            }
            return t.fallback;
          },
          void 0,
          void 0,
        );
      }
      function th(t) {
        let e = !1,
          n = j(() => t.children),
          r = x(
            () => {
              let t = n();
              Array.isArray(t) || (t = [t]);
              for (let n = 0; n < t.length; n++) {
                let r = t[n].when;
                if (r) return (e = !!t[n].keyed), [n, r, t[n]];
              }
              return [-1];
            },
            void 0,
            {
              equals: (t, n) =>
                (e ? t[1] === n[1] : !t[1] == !n[1]) && t[2] === n[2],
            },
          );
        return x(
          () => {
            let [n, i, o] = r();
            if (n < 0) return t.fallback;
            let a = o.children;
            return "function" == typeof a && a.length > 0
              ? T(() =>
                  a(
                    e
                      ? i
                      : () => {
                          if (T(r)[0] !== n) throw tc("Match");
                          return o.when;
                        },
                  ),
                )
              : a;
          },
          void 0,
          void 0,
        );
      }
      function tg(t) {
        return t;
      }
      var tm = void 0,
        ty = new Set([
          "className",
          "value",
          "readOnly",
          "formNoValidate",
          "isMap",
          "noModule",
          "playsInline",
          "allowfullscreen",
          "async",
          "autofocus",
          "autoplay",
          "checked",
          "controls",
          "default",
          "disabled",
          "formnovalidate",
          "hidden",
          "indeterminate",
          "inert",
          "ismap",
          "loop",
          "multiple",
          "muted",
          "nomodule",
          "novalidate",
          "open",
          "playsinline",
          "readonly",
          "required",
          "reversed",
          "seamless",
          "selected",
        ]),
        tv = new Set(["innerHTML", "textContent", "innerText", "children"]),
        t_ = Object.assign(Object.create(null), {
          className: "class",
          htmlFor: "for",
        }),
        tb = Object.assign(Object.create(null), {
          class: "className",
          formnovalidate: { $: "formNoValidate", BUTTON: 1, INPUT: 1 },
          ismap: { $: "isMap", IMG: 1 },
          nomodule: { $: "noModule", SCRIPT: 1 },
          playsinline: { $: "playsInline", VIDEO: 1 },
          readonly: { $: "readOnly", INPUT: 1, TEXTAREA: 1 },
        }),
        tw = new Set([
          "beforeinput",
          "click",
          "dblclick",
          "contextmenu",
          "focusin",
          "focusout",
          "input",
          "keydown",
          "keyup",
          "mousedown",
          "mousemove",
          "mouseout",
          "mouseover",
          "mouseup",
          "pointerdown",
          "pointermove",
          "pointerout",
          "pointerover",
          "pointerup",
          "touchend",
          "touchmove",
          "touchstart",
        ]),
        tS = new Set([
          "altGlyph",
          "altGlyphDef",
          "altGlyphItem",
          "animate",
          "animateColor",
          "animateMotion",
          "animateTransform",
          "circle",
          "clipPath",
          "color-profile",
          "cursor",
          "defs",
          "desc",
          "ellipse",
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
          "filter",
          "font",
          "font-face",
          "font-face-format",
          "font-face-name",
          "font-face-src",
          "font-face-uri",
          "foreignObject",
          "g",
          "glyph",
          "glyphRef",
          "hkern",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "metadata",
          "missing-glyph",
          "mpath",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "set",
          "stop",
          "svg",
          "switch",
          "symbol",
          "text",
          "textPath",
          "tref",
          "tspan",
          "use",
          "view",
          "vkern",
        ]),
        tk = {
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
        },
        tx = "_$DX_DELEGATE";
      function tA(t, e, n, r = {}) {
        let i;
        return (
          _((r) => {
            (i = r),
              e === document
                ? t()
                : t$(e, t(), e.firstChild ? null : void 0, n);
          }, r.owner),
          () => {
            i(), (e.textContent = "");
          }
        );
      }
      function tT(t, e, n) {
        let r;
        let i = () => {
            let e = document.createElement("template");
            return (
              (e.innerHTML = t),
              n ? e.content.firstChild.firstChild : e.content.firstChild
            );
          },
          o = e
            ? () => T(() => document.importNode(r || (r = i()), !0))
            : () => (r || (r = i())).cloneNode(!0);
        return (o.cloneNode = o), o;
      }
      function tC(t, e = window.document) {
        let n = e[tx] || (e[tx] = new Set());
        for (let r = 0, i = t.length; r < i; r++) {
          let i = t[r];
          n.has(i) || (n.add(i), e.addEventListener(i, tz));
        }
      }
      function tE(t = window.document) {
        if (t[tx]) {
          for (let e of t[tx].keys()) t.removeEventListener(e, tz);
          delete t[tx];
        }
      }
      function tO(t, e, n) {
        o.context || (null == n ? t.removeAttribute(e) : t.setAttribute(e, n));
      }
      function tR(t, e) {
        o.context ||
          (null == e ? t.removeAttribute("class") : (t.className = e));
      }
      function tI(t, e, n, r) {
        if (r)
          Array.isArray(n)
            ? ((t[`$$${e}`] = n[0]), (t[`$$${e}Data`] = n[1]))
            : (t[`$$${e}`] = n);
        else if (Array.isArray(n)) {
          let r = n[0];
          t.addEventListener(e, (n[0] = (e) => r.call(t, n[1], e)));
        } else t.addEventListener(e, n);
      }
      function tN(t, e = {}, n, r) {
        let i = {};
        return (
          r || S(() => (i.children = tj(t, e.children, i.children))),
          S(() => e.ref && e.ref(t)),
          S(() =>
            (function (t, e, n, r, i = {}, o = !1) {
              for (let r in (e || (e = {}), i))
                if (!(r in e)) {
                  if ("children" === r) continue;
                  i[r] = tM(t, r, null, i[r], n, o);
                }
              for (let a in e) {
                if ("children" === a) {
                  r || tj(t, e.children);
                  continue;
                }
                let s = e[a];
                i[a] = tM(t, a, s, i[a], n, o);
              }
            })(t, e, n, !0, i, !0),
          ),
          i
        );
      }
      function tP(t, e, n) {
        return T(() => t(e, n));
      }
      function t$(t, e, n, r) {
        if ((void 0 === n || r || (r = []), "function" != typeof e))
          return tj(t, e, r, n);
        S((r) => tj(t, e(), r, n), r);
      }
      function tD(t, e, n) {
        let r = e.trim().split(/\s+/);
        for (let e = 0, i = r.length; e < i; e++) t.classList.toggle(r[e], n);
      }
      function tM(t, e, n, r, i, a) {
        let s, u, l, c, d;
        if ("style" === e)
          return (function (t, e, n) {
            let r, i;
            if (!e) return n ? tO(t, "style") : e;
            let o = t.style;
            if ("string" == typeof e) return (o.cssText = e);
            for (i in ("string" == typeof n && (o.cssText = n = void 0),
            n || (n = {}),
            e || (e = {}),
            n))
              null == e[i] && o.removeProperty(i), delete n[i];
            for (i in e)
              (r = e[i]) !== n[i] && (o.setProperty(i, r), (n[i] = r));
            return n;
          })(t, n, r);
        if ("classList" === e)
          return (function (t, e, n = {}) {
            let r, i;
            let o = Object.keys(e || {}),
              a = Object.keys(n);
            for (r = 0, i = a.length; r < i; r++) {
              let i = a[r];
              i && "undefined" !== i && !e[i] && (tD(t, i, !1), delete n[i]);
            }
            for (r = 0, i = o.length; r < i; r++) {
              let i = o[r],
                a = !!e[i];
              i &&
                "undefined" !== i &&
                n[i] !== a &&
                a &&
                (tD(t, i, !0), (n[i] = a));
            }
            return n;
          })(t, n, r);
        if (n === r) return r;
        if ("ref" === e) a || n(t);
        else if ("on:" === e.slice(0, 3)) {
          let i = e.slice(3);
          r && t.removeEventListener(i, r), n && t.addEventListener(i, n);
        } else if ("oncapture:" === e.slice(0, 10)) {
          let i = e.slice(10);
          r && t.removeEventListener(i, r, !0),
            n && t.addEventListener(i, n, !0);
        } else if ("on" === e.slice(0, 2)) {
          let i = e.slice(2).toLowerCase(),
            o = tw.has(i);
          if (!o && r) {
            let e = Array.isArray(r) ? r[0] : r;
            t.removeEventListener(i, e);
          }
          (o || n) && (tI(t, i, n, o), o && tC([i]));
        } else if ("attr:" === e.slice(0, 5)) tO(t, e.slice(5), n);
        else if (
          (d = "prop:" === e.slice(0, 5)) ||
          (l = tv.has(e)) ||
          (!i &&
            ((c = (function (t, e) {
              let n = tb[t];
              return "object" == typeof n ? (n[e] ? n.$ : void 0) : n;
            })(e, t.tagName)) ||
              (u = ty.has(e)))) ||
          (s = t.nodeName.includes("-"))
        ) {
          if (d) (e = e.slice(5)), (u = !0);
          else if (o.context) return n;
          "class" === e || "className" === e
            ? tR(t, n)
            : !s || u || l
              ? (t[c || e] = n)
              : (t[
                  e
                    .toLowerCase()
                    .replace(/-([a-z])/g, (t, e) => e.toUpperCase())
                ] = n);
        } else {
          let r = i && e.indexOf(":") > -1 && tk[e.split(":")[0]];
          if (r) {
            var f;
            (f = e),
              o.context ||
                (null == n
                  ? t.removeAttributeNS(r, f)
                  : t.setAttributeNS(r, f, n));
          } else tO(t, t_[e] || e, n);
        }
        return n;
      }
      function tz(t) {
        let e = `$$${t.type}`,
          n = (t.composedPath && t.composedPath()[0]) || t.target;
        for (
          t.target !== n &&
            Object.defineProperty(t, "target", { configurable: !0, value: n }),
            Object.defineProperty(t, "currentTarget", {
              configurable: !0,
              get: () => n || document,
            }),
            o.registry && !o.done && (o.done = _$HY.done = !0);
          n;

        ) {
          let r = n[e];
          if (r && !n.disabled) {
            let i = n[`${e}Data`];
            if ((void 0 !== i ? r.call(n, i, t) : r.call(n, t), t.cancelBubble))
              return;
          }
          n = n._$host || n.parentNode || n.host;
        }
      }
      function tj(t, e, n, r, i) {
        if (o.context) {
          n || (n = [...t.childNodes]);
          let e = [];
          for (let t = 0; t < n.length; t++) {
            let r = n[t];
            8 === r.nodeType && "!$" === r.data.slice(0, 2)
              ? r.remove()
              : e.push(r);
          }
          n = e;
        }
        for (; "function" == typeof n; ) n = n();
        if (e === n) return n;
        let a = typeof e,
          s = void 0 !== r;
        if (
          ((t = (s && n[0] && n[0].parentNode) || t),
          "string" === a || "number" === a)
        ) {
          if (o.context) return n;
          if (("number" === a && (e = e.toString()), s)) {
            let i = n[0];
            i && 3 === i.nodeType
              ? i.data !== e && (i.data = e)
              : (i = document.createTextNode(e)),
              (n = tU(t, n, r, i));
          } else
            n =
              "" !== n && "string" == typeof n
                ? (t.firstChild.data = e)
                : (t.textContent = e);
        } else if (null == e || "boolean" === a) {
          if (o.context) return n;
          n = tU(t, n, r);
        } else if ("function" === a)
          return (
            S(() => {
              let i = e();
              for (; "function" == typeof i; ) i = i();
              n = tj(t, i, n, r);
            }),
            () => n
          );
        else if (Array.isArray(e)) {
          let a = [],
            u = n && Array.isArray(n);
          if (
            (function t(e, n, r, i) {
              let o = !1;
              for (let a = 0, s = n.length; a < s; a++) {
                let s = n[a],
                  u = r && r[a],
                  l;
                if (null == s || !0 === s || !1 === s);
                else if ("object" == (l = typeof s) && s.nodeType) e.push(s);
                else if (Array.isArray(s)) o = t(e, s, u) || o;
                else if ("function" === l) {
                  if (i) {
                    for (; "function" == typeof s; ) s = s();
                    o =
                      t(
                        e,
                        Array.isArray(s) ? s : [s],
                        Array.isArray(u) ? u : [u],
                      ) || o;
                  } else e.push(s), (o = !0);
                } else {
                  let t = String(s);
                  u && 3 === u.nodeType && u.data === t
                    ? e.push(u)
                    : e.push(document.createTextNode(t));
                }
              }
              return o;
            })(a, e, n, i)
          )
            return S(() => (n = tj(t, a, n, r, !0))), () => n;
          if (o.context) {
            if (!a.length) return n;
            if (void 0 === r) return [...t.childNodes];
            let e = a[0],
              i = [e];
            for (; (e = e.nextSibling) !== r; ) i.push(e);
            return (n = i);
          }
          if (0 === a.length) {
            if (((n = tU(t, n, r)), s)) return n;
          } else
            u
              ? 0 === n.length
                ? tL(t, a, r)
                : (function (t, e, n) {
                    let r = n.length,
                      i = e.length,
                      o = r,
                      a = 0,
                      s = 0,
                      u = e[i - 1].nextSibling,
                      l = null;
                    for (; a < i || s < o; ) {
                      if (e[a] === n[s]) {
                        a++, s++;
                        continue;
                      }
                      for (; e[i - 1] === n[o - 1]; ) i--, o--;
                      if (i === a) {
                        let e =
                          o < r ? (s ? n[s - 1].nextSibling : n[o - s]) : u;
                        for (; s < o; ) t.insertBefore(n[s++], e);
                      } else if (o === s)
                        for (; a < i; )
                          (l && l.has(e[a])) || e[a].remove(), a++;
                      else if (e[a] === n[o - 1] && n[s] === e[i - 1]) {
                        let r = e[--i].nextSibling;
                        t.insertBefore(n[s++], e[a++].nextSibling),
                          t.insertBefore(n[--o], r),
                          (e[i] = n[o]);
                      } else {
                        if (!l) {
                          l = new Map();
                          let t = s;
                          for (; t < o; ) l.set(n[t], t++);
                        }
                        let r = l.get(e[a]);
                        if (null != r) {
                          if (s < r && r < o) {
                            let u = a,
                              c = 1,
                              d;
                            for (
                              ;
                              ++u < i &&
                              u < o &&
                              null != (d = l.get(e[u])) &&
                              d === r + c;

                            )
                              c++;
                            if (c > r - s) {
                              let i = e[a];
                              for (; s < r; ) t.insertBefore(n[s++], i);
                            } else t.replaceChild(n[s++], e[a++]);
                          } else a++;
                        } else e[a++].remove();
                      }
                    }
                  })(t, n, a)
              : (n && tU(t), tL(t, a));
          n = a;
        } else if (e.nodeType) {
          if (o.context && e.parentNode) return (n = s ? [e] : e);
          if (Array.isArray(n)) {
            if (s) return (n = tU(t, n, r, e));
            tU(t, n, null, e);
          } else
            null != n && "" !== n && t.firstChild
              ? t.replaceChild(e, t.firstChild)
              : t.appendChild(e);
          n = e;
        }
        return n;
      }
      function tL(t, e, n = null) {
        for (let r = 0, i = e.length; r < i; r++) t.insertBefore(e[r], n);
      }
      function tU(t, e, n, r) {
        if (void 0 === n) return (t.textContent = "");
        let i = r || document.createTextNode("");
        if (e.length) {
          let r = !1;
          for (let o = e.length - 1; o >= 0; o--) {
            let a = e[o];
            if (i !== a) {
              let e = a.parentNode === t;
              r || o
                ? e && a.remove()
                : e
                  ? t.replaceChild(i, a)
                  : t.insertBefore(i, n);
            } else r = !0;
          }
        } else t.insertBefore(i, n);
        return [i];
      }
      var tq = !1;
      function tV(t, e = !1) {
        return e
          ? document.createElementNS("http://www.w3.org/2000/svg", t)
          : document.createElement(t);
      }
      function tB(t) {
        let e;
        let { useShadow: n } = t,
          r = document.createTextNode(""),
          i = () => t.mount || document.body,
          a = p,
          s = !!o.context;
        return (
          k(
            () => {
              s && (p.user = s = !1),
                e ||
                  (e = (function (t, e) {
                    let n = p,
                      r = g;
                    (p = t), (g = null);
                    try {
                      return G(e, !0);
                    } catch (t) {
                      J(t);
                    } finally {
                      (p = n), (g = r);
                    }
                  })(a, () => x(() => t.children)));
              let o = i();
              if (o instanceof HTMLHeadElement) {
                let [t, n] = b(!1);
                _((n) => t$(o, () => (t() ? n() : e()), null)), O(() => n(!0));
              } else {
                let i = tV(t.isSVG ? "g" : "div", t.isSVG),
                  a =
                    n && i.attachShadow ? i.attachShadow({ mode: "open" }) : i;
                Object.defineProperty(i, "_$host", {
                  get: () => r.parentNode,
                  configurable: !0,
                }),
                  t$(a, e),
                  o.appendChild(i),
                  t.ref && t.ref(i),
                  O(() => o.removeChild(i));
              }
            },
            void 0,
            { render: !s },
          ),
          r
        );
      }
      function tF(t) {
        let [e, n] = ta(t, ["component"]),
          r = x(() => e.component);
        return x(() => {
          let t = r();
          switch (typeof t) {
            case "function":
              return T(() => t(n));
            case "string":
              let e, i;
              let a = tS.has(t),
                s = o.context
                  ? o.context &&
                    (e = o.registry.get(
                      (i = (function () {
                        let t = o.context;
                        return `${t.id}${t.count++}`;
                      })()),
                    ))
                    ? (o.completed && o.completed.add(e),
                      o.registry.delete(i),
                      e)
                    : (void 0)()
                  : tV(t, a);
              return tN(s, n, a), s;
          }
        });
      }
      var tG = (function () {
          function t() {
            (this.keyToValue = new Map()), (this.valueToKey = new Map());
          }
          return (
            (t.prototype.set = function (t, e) {
              this.keyToValue.set(t, e), this.valueToKey.set(e, t);
            }),
            (t.prototype.getByKey = function (t) {
              return this.keyToValue.get(t);
            }),
            (t.prototype.getByValue = function (t) {
              return this.valueToKey.get(t);
            }),
            (t.prototype.clear = function () {
              this.keyToValue.clear(), this.valueToKey.clear();
            }),
            t
          );
        })(),
        tH = (function () {
          function t(t) {
            (this.generateIdentifier = t), (this.kv = new tG());
          }
          return (
            (t.prototype.register = function (t, e) {
              this.kv.getByValue(t) ||
                (e || (e = this.generateIdentifier(t)), this.kv.set(e, t));
            }),
            (t.prototype.clear = function () {
              this.kv.clear();
            }),
            (t.prototype.getIdentifier = function (t) {
              return this.kv.getByValue(t);
            }),
            (t.prototype.getValue = function (t) {
              return this.kv.getByKey(t);
            }),
            t
          );
        })(),
        tK =
          ((r = function (t, e) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              })(t, e);
          }),
          function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null",
              );
            function n() {
              this.constructor = t;
            }
            r(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()));
          }),
        tQ = (function (t) {
          function e() {
            var e =
              t.call(this, function (t) {
                return t.name;
              }) || this;
            return (e.classToAllowedProps = new Map()), e;
          }
          return (
            tK(e, t),
            (e.prototype.register = function (e, n) {
              "object" == typeof n
                ? (n.allowProps &&
                    this.classToAllowedProps.set(e, n.allowProps),
                  t.prototype.register.call(this, e, n.identifier))
                : t.prototype.register.call(this, e, n);
            }),
            (e.prototype.getAllowedProps = function (t) {
              return this.classToAllowedProps.get(t);
            }),
            e
          );
        })(tH),
        tZ = function (t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r,
            i,
            o = n.call(t),
            a = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        };
      function tW(t, e) {
        Object.entries(t).forEach(function (t) {
          var n = tZ(t, 2),
            r = n[0];
          return e(n[1], r);
        });
      }
      function tJ(t, e) {
        return -1 !== t.indexOf(e);
      }
      function tX(t, e) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          if (e(r)) return r;
        }
      }
      var tY = (function () {
          function t() {
            this.transfomers = {};
          }
          return (
            (t.prototype.register = function (t) {
              this.transfomers[t.name] = t;
            }),
            (t.prototype.findApplicable = function (t) {
              return (function (t, e) {
                var n = (function (t) {
                  if ("values" in Object) return Object.values(t);
                  var e = [];
                  for (var n in t) t.hasOwnProperty(n) && e.push(t[n]);
                  return e;
                })(t);
                if ("find" in n) return n.find(e);
                for (var r = 0; r < n.length; r++) {
                  var i = n[r];
                  if (e(i)) return i;
                }
              })(this.transfomers, function (e) {
                return e.isApplicable(t);
              });
            }),
            (t.prototype.findByName = function (t) {
              return this.transfomers[t];
            }),
            t
          );
        })(),
        t0 = function (t) {
          return void 0 === t;
        },
        t1 = function (t) {
          return (
            "object" == typeof t &&
            null !== t &&
            t !== Object.prototype &&
            (null === Object.getPrototypeOf(t) ||
              Object.getPrototypeOf(t) === Object.prototype)
          );
        },
        t2 = function (t) {
          return t1(t) && 0 === Object.keys(t).length;
        },
        t5 = function (t) {
          return Array.isArray(t);
        },
        t3 = function (t) {
          return t instanceof Map;
        },
        t6 = function (t) {
          return t instanceof Set;
        },
        t4 = function (t) {
          return "Symbol" === Object.prototype.toString.call(t).slice(8, -1);
        },
        t8 = function (t) {
          return "number" == typeof t && isNaN(t);
        },
        t7 = function (t) {
          return t.replace(/\./g, "\\.");
        },
        t9 = function (t) {
          return t.map(String).map(t7).join(".");
        },
        et = function (t) {
          for (var e = [], n = "", r = 0; r < t.length; r++) {
            var i = t.charAt(r);
            if ("\\" === i && "." === t.charAt(r + 1)) {
              (n += "."), r++;
              continue;
            }
            if ("." === i) {
              e.push(n), (n = "");
              continue;
            }
            n += i;
          }
          var o = n;
          return e.push(o), e;
        },
        ee = function () {
          return (ee =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
        en = function (t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r,
            i,
            o = n.call(t),
            a = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        er = function (t, e) {
          for (var n = 0, r = e.length, i = t.length; n < r; n++, i++)
            t[i] = e[n];
          return t;
        };
      function ei(t, e, n, r) {
        return { isApplicable: t, annotation: e, transform: n, untransform: r };
      }
      var eo = [
        ei(
          t0,
          "undefined",
          function () {
            return null;
          },
          function () {},
        ),
        ei(
          function (t) {
            return "bigint" == typeof t;
          },
          "bigint",
          function (t) {
            return t.toString();
          },
          function (t) {
            return "undefined" != typeof BigInt ? BigInt(t) : t;
          },
        ),
        ei(
          function (t) {
            return t instanceof Date && !isNaN(t.valueOf());
          },
          "Date",
          function (t) {
            return t.toISOString();
          },
          function (t) {
            return new Date(t);
          },
        ),
        ei(
          function (t) {
            return t instanceof Error;
          },
          "Error",
          function (t, e) {
            var n = { name: t.name, message: t.message };
            return (
              e.allowedErrorProps.forEach(function (e) {
                n[e] = t[e];
              }),
              n
            );
          },
          function (t, e) {
            var n = Error(t.message);
            return (
              (n.name = t.name),
              (n.stack = t.stack),
              e.allowedErrorProps.forEach(function (e) {
                n[e] = t[e];
              }),
              n
            );
          },
        ),
        ei(
          function (t) {
            return t instanceof RegExp;
          },
          "regexp",
          function (t) {
            return "" + t;
          },
          function (t) {
            return new RegExp(
              t.slice(1, t.lastIndexOf("/")),
              t.slice(t.lastIndexOf("/") + 1),
            );
          },
        ),
        ei(
          t6,
          "set",
          function (t) {
            return er([], en(t.values()));
          },
          function (t) {
            return new Set(t);
          },
        ),
        ei(
          t3,
          "map",
          function (t) {
            return er([], en(t.entries()));
          },
          function (t) {
            return new Map(t);
          },
        ),
        ei(
          function (t) {
            var e;
            return t8(t) || (e = t) === 1 / 0 || e === -1 / 0;
          },
          "number",
          function (t) {
            return t8(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity";
          },
          Number,
        ),
        ei(
          function (t) {
            return 0 === t && 1 / t == -1 / 0;
          },
          "number",
          function () {
            return "-0";
          },
          Number,
        ),
        ei(
          function (t) {
            return t instanceof URL;
          },
          "URL",
          function (t) {
            return t.toString();
          },
          function (t) {
            return new URL(t);
          },
        ),
      ];
      function ea(t, e, n, r) {
        return { isApplicable: t, annotation: e, transform: n, untransform: r };
      }
      var es = ea(
          function (t, e) {
            return !!t4(t) && !!e.symbolRegistry.getIdentifier(t);
          },
          function (t, e) {
            return ["symbol", e.symbolRegistry.getIdentifier(t)];
          },
          function (t) {
            return t.description;
          },
          function (t, e, n) {
            var r = n.symbolRegistry.getValue(e[1]);
            if (!r) throw Error("Trying to deserialize unknown symbol");
            return r;
          },
        ),
        eu = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
          Uint8ClampedArray,
        ].reduce(function (t, e) {
          return (t[e.name] = e), t;
        }, {}),
        el = ea(
          function (t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView);
          },
          function (t) {
            return ["typed-array", t.constructor.name];
          },
          function (t) {
            return er([], en(t));
          },
          function (t, e) {
            var n = eu[e[1]];
            if (!n) throw Error("Trying to deserialize unknown typed array");
            return new n(t);
          },
        );
      function ec(t, e) {
        return (
          null != t &&
          !!t.constructor &&
          !!e.classRegistry.getIdentifier(t.constructor)
        );
      }
      var ed = ea(
          ec,
          function (t, e) {
            return ["class", e.classRegistry.getIdentifier(t.constructor)];
          },
          function (t, e) {
            var n = e.classRegistry.getAllowedProps(t.constructor);
            if (!n) return ee({}, t);
            var r = {};
            return (
              n.forEach(function (e) {
                r[e] = t[e];
              }),
              r
            );
          },
          function (t, e, n) {
            var r = n.classRegistry.getValue(e[1]);
            if (!r)
              throw Error(
                "Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564",
              );
            return Object.assign(Object.create(r.prototype), t);
          },
        ),
        ef = ea(
          function (t, e) {
            return !!e.customTransformerRegistry.findApplicable(t);
          },
          function (t, e) {
            return [
              "custom",
              e.customTransformerRegistry.findApplicable(t).name,
            ];
          },
          function (t, e) {
            return e.customTransformerRegistry.findApplicable(t).serialize(t);
          },
          function (t, e, n) {
            var r = n.customTransformerRegistry.findByName(e[1]);
            if (!r) throw Error("Trying to deserialize unknown custom value");
            return r.deserialize(t);
          },
        ),
        ep = [ed, es, ef, el],
        eh = function (t, e) {
          var n = tX(ep, function (n) {
            return n.isApplicable(t, e);
          });
          if (n) return { value: n.transform(t, e), type: n.annotation(t, e) };
          var r = tX(eo, function (n) {
            return n.isApplicable(t, e);
          });
          if (r) return { value: r.transform(t, e), type: r.annotation };
        },
        eg = {};
      eo.forEach(function (t) {
        eg[t.annotation] = t;
      });
      var em = function (t, e, n) {
          if (t5(e))
            switch (e[0]) {
              case "symbol":
                return es.untransform(t, e, n);
              case "class":
                return ed.untransform(t, e, n);
              case "custom":
                return ef.untransform(t, e, n);
              case "typed-array":
                return el.untransform(t, e, n);
              default:
                throw Error("Unknown transformation: " + e);
            }
          else {
            var r = eg[e];
            if (!r) throw Error("Unknown transformation: " + e);
            return r.untransform(t, n);
          }
        },
        ey = function (t, e) {
          for (var n = t.keys(); e > 0; ) n.next(), e--;
          return n.next().value;
        };
      function ev(t) {
        if (tJ(t, "__proto__"))
          throw Error("__proto__ is not allowed as a property");
        if (tJ(t, "prototype"))
          throw Error("prototype is not allowed as a property");
        if (tJ(t, "constructor"))
          throw Error("constructor is not allowed as a property");
      }
      var e_ = function (t, e) {
          ev(e);
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (t6(t)) t = ey(t, +r);
            else if (t3(t)) {
              var i = +r,
                o = 0 == +e[++n] ? "key" : "value",
                a = ey(t, i);
              switch (o) {
                case "key":
                  t = a;
                  break;
                case "value":
                  t = t.get(a);
              }
            } else t = t[r];
          }
          return t;
        },
        eb = function (t, e, n) {
          if ((ev(e), 0 === e.length)) return n(t);
          for (var r = t, i = 0; i < e.length - 1; i++) {
            var o = e[i];
            if (t5(r)) r = r[+o];
            else if (t1(r)) r = r[o];
            else if (t6(r)) {
              var a = +o;
              r = ey(r, a);
            } else if (t3(r)) {
              if (i === e.length - 2) break;
              var a = +o,
                s = 0 == +e[++i] ? "key" : "value",
                u = ey(r, a);
              switch (s) {
                case "key":
                  r = u;
                  break;
                case "value":
                  r = r.get(u);
              }
            }
          }
          var l = e[e.length - 1];
          if ((t5(r) ? (r[+l] = n(r[+l])) : t1(r) && (r[l] = n(r[l])), t6(r))) {
            var c = ey(r, +l),
              d = n(c);
            c !== d && (r.delete(c), r.add(d));
          }
          if (t3(r)) {
            var a = +e[e.length - 2],
              f = ey(r, a),
              s = 0 == +l ? "key" : "value";
            switch (s) {
              case "key":
                var p = n(f);
                r.set(p, r.get(f)), p !== f && r.delete(f);
                break;
              case "value":
                r.set(f, n(r.get(f)));
            }
          }
          return t;
        },
        ew = function (t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r,
            i,
            o = n.call(t),
            a = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        eS = function (t, e) {
          for (var n = 0, r = e.length, i = t.length; n < r; n++, i++)
            t[i] = e[n];
          return t;
        },
        ek = function (t, e, n, r, i, o, a) {
          void 0 === i && (i = []),
            void 0 === o && (o = []),
            void 0 === a && (a = new Map());
          var s,
            u,
            l =
              "boolean" == typeof (s = t) ||
              null === s ||
              t0(s) ||
              ("number" == typeof s && !isNaN(s)) ||
              "string" == typeof s ||
              t4(s);
          if (!l) {
            (c = i), (d = e.get(t)) ? d.push(c) : e.set(t, [c]);
            var c,
              d,
              f = a.get(t);
            if (f) return r ? { transformedValue: null } : f;
          }
          if (!(t1(t) || t5(t) || t3(t) || t6(t) || ec(t, n))) {
            var p = eh(t, n),
              h = p
                ? { transformedValue: p.value, annotations: [p.type] }
                : { transformedValue: t };
            return l || a.set(t, h), h;
          }
          if (tJ(o, t)) return { transformedValue: null };
          var g = eh(t, n),
            m =
              null !== (u = null == g ? void 0 : g.value) && void 0 !== u
                ? u
                : t,
            y = t5(m) ? [] : {},
            v = {};
          tW(m, function (s, u) {
            var l = ek(
              s,
              e,
              n,
              r,
              eS(eS([], ew(i)), [u]),
              eS(eS([], ew(o)), [t]),
              a,
            );
            (y[u] = l.transformedValue),
              t5(l.annotations)
                ? (v[u] = l.annotations)
                : t1(l.annotations) &&
                  tW(l.annotations, function (t, e) {
                    v[t7(u) + "." + e] = t;
                  });
          });
          var _ = t2(v)
            ? { transformedValue: y, annotations: g ? [g.type] : void 0 }
            : { transformedValue: y, annotations: g ? [g.type, v] : v };
          return l || a.set(t, _), _;
        };
      function ex(t) {
        return Object.prototype.toString.call(t).slice(8, -1);
      }
      function eA(t) {
        return "Array" === ex(t);
      }
      var eT = function () {
          return (eT =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
        eC = function (t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r,
            i,
            o = n.call(t),
            a = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        eE = function (t, e) {
          for (var n = 0, r = e.length, i = t.length; n < r; n++, i++)
            t[i] = e[n];
          return t;
        },
        eO = (function () {
          function t(t) {
            var e = (void 0 === t ? {} : t).dedupe;
            (this.classRegistry = new tQ()),
              (this.symbolRegistry = new tH(function (t) {
                var e;
                return null !== (e = t.description) && void 0 !== e ? e : "";
              })),
              (this.customTransformerRegistry = new tY()),
              (this.allowedErrorProps = []),
              (this.dedupe = void 0 !== e && e);
          }
          return (
            (t.prototype.serialize = function (t) {
              var e,
                n,
                r,
                i = new Map(),
                o = ek(t, i, this, this.dedupe),
                a = { json: o.transformedValue };
              o.annotations &&
                (a.meta = eT(eT({}, a.meta), { values: o.annotations }));
              var s =
                ((e = this.dedupe),
                (n = {}),
                (r = void 0),
                (i.forEach(function (t) {
                  if (!(t.length <= 1)) {
                    e ||
                      (t = t
                        .map(function (t) {
                          return t.map(String);
                        })
                        .sort(function (t, e) {
                          return t.length - e.length;
                        }));
                    var i = ew(t),
                      o = i[0],
                      a = i.slice(1);
                    0 === o.length ? (r = a.map(t9)) : (n[t9(o)] = a.map(t9));
                  }
                }),
                r)
                  ? t2(n)
                    ? [r]
                    : [r, n]
                  : t2(n)
                    ? void 0
                    : n);
              return (
                s &&
                  (a.meta = eT(eT({}, a.meta), { referentialEqualities: s })),
                a
              );
            }),
            (t.prototype.deserialize = function (t) {
              var e,
                n,
                r,
                i = t.json,
                o = t.meta,
                a = (function t(e, n = {}) {
                  return eA(e)
                    ? e.map((e) => t(e, n))
                    : !(function (t) {
                          if ("Object" !== ex(t)) return !1;
                          let e = Object.getPrototypeOf(t);
                          return (
                            !!e &&
                            e.constructor === Object &&
                            e === Object.prototype
                          );
                        })(e)
                      ? e
                      : [
                          ...Object.getOwnPropertyNames(e),
                          ...Object.getOwnPropertySymbols(e),
                        ].reduce((r, i) => {
                          if (eA(n.props) && !n.props.includes(i)) return r;
                          let o = t(e[i], n);
                          return (
                            (function (t, e, n, r, i) {
                              let o = {}.propertyIsEnumerable.call(r, e)
                                ? "enumerable"
                                : "nonenumerable";
                              "enumerable" === o && (t[e] = n),
                                i &&
                                  "nonenumerable" === o &&
                                  Object.defineProperty(t, e, {
                                    value: n,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0,
                                  });
                            })(r, i, o, e, n.nonenumerable),
                            r
                          );
                        }, {});
                })(i);
              return (
                (null == o ? void 0 : o.values) &&
                  ((e = a),
                  (n = o.values),
                  (r = this),
                  (function t(e, n, r) {
                    if ((void 0 === r && (r = []), e)) {
                      if (!t5(e)) {
                        tW(e, function (e, i) {
                          return t(e, n, eS(eS([], ew(r)), ew(et(i))));
                        });
                        return;
                      }
                      var i = ew(e, 2),
                        o = i[0],
                        a = i[1];
                      a &&
                        tW(a, function (e, i) {
                          t(e, n, eS(eS([], ew(r)), ew(et(i))));
                        }),
                        n(o, r);
                    }
                  })(n, function (t, n) {
                    e = eb(e, n, function (e) {
                      return em(e, t, r);
                    });
                  }),
                  (a = e)),
                (null == o ? void 0 : o.referentialEqualities) &&
                  (a = (function (t, e) {
                    function n(e, n) {
                      var r = e_(t, et(n));
                      e.map(et).forEach(function (e) {
                        t = eb(t, e, function () {
                          return r;
                        });
                      });
                    }
                    if (t5(e)) {
                      var r = ew(e, 2),
                        i = r[0],
                        o = r[1];
                      i.forEach(function (e) {
                        t = eb(t, et(e), function () {
                          return t;
                        });
                      }),
                        o && tW(o, n);
                    } else tW(e, n);
                    return t;
                  })(a, o.referentialEqualities)),
                a
              );
            }),
            (t.prototype.stringify = function (t) {
              return JSON.stringify(this.serialize(t));
            }),
            (t.prototype.parse = function (t) {
              return this.deserialize(JSON.parse(t));
            }),
            (t.prototype.registerClass = function (t, e) {
              this.classRegistry.register(t, e);
            }),
            (t.prototype.registerSymbol = function (t, e) {
              this.symbolRegistry.register(t, e);
            }),
            (t.prototype.registerCustom = function (t, e) {
              this.customTransformerRegistry.register(eT({ name: e }, t));
            }),
            (t.prototype.allowErrorProps = function () {
              for (var t, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              (t = this.allowedErrorProps).push.apply(t, eE([], eC(e)));
            }),
            (t.defaultInstance = new t()),
            (t.serialize = t.defaultInstance.serialize.bind(t.defaultInstance)),
            (t.deserialize = t.defaultInstance.deserialize.bind(
              t.defaultInstance,
            )),
            (t.stringify = t.defaultInstance.stringify.bind(t.defaultInstance)),
            (t.parse = t.defaultInstance.parse.bind(t.defaultInstance)),
            (t.registerClass = t.defaultInstance.registerClass.bind(
              t.defaultInstance,
            )),
            (t.registerSymbol = t.defaultInstance.registerSymbol.bind(
              t.defaultInstance,
            )),
            (t.registerCustom = t.defaultInstance.registerCustom.bind(
              t.defaultInstance,
            )),
            (t.allowErrorProps = t.defaultInstance.allowErrorProps.bind(
              t.defaultInstance,
            )),
            t
          );
        })(),
        eR = eO.serialize;
      eO.deserialize;
      var eI = eO.stringify;
      function eN(t) {
        return "fetching" === t.state.fetchStatus
          ? "fetching"
          : t.getObserversCount()
            ? "paused" === t.state.fetchStatus
              ? "paused"
              : t.isStale()
                ? "stale"
                : "fresh"
            : "inactive";
      }
      function eP(t, e) {
        return `${t}${e.charAt(0).toUpperCase() + e.slice(1)}`;
      }
      function e$({ queryState: t, observerCount: e, isStale: n }) {
        return "fetching" === t.fetchStatus
          ? "blue"
          : e
            ? "paused" === t.fetchStatus
              ? "purple"
              : n
                ? "yellow"
                : "green"
            : "gray";
      }
      function eD({ status: t, isPaused: e }) {
        return e
          ? "purple"
          : "error" === t
            ? "red"
            : "pending" === t
              ? "yellow"
              : "success" === t
                ? "green"
                : "gray";
      }
      function eM(t) {
        return "fresh" === t
          ? "green"
          : "stale" === t
            ? "yellow"
            : "paused" === t
              ? "purple"
              : "inactive" === t
                ? "gray"
                : "blue";
      }
      eO.parse,
        eO.registerClass,
        eO.registerCustom,
        eO.registerSymbol,
        eO.allowErrorProps;
      var ez = (t, e = !1) => {
          let { json: n } = eR(t);
          return JSON.stringify(n, null, e ? 2 : void 0);
        },
        ej = (t) =>
          "idle" !== t.state.fetchStatus
            ? 0
            : t.getObserversCount()
              ? t.isStale()
                ? 2
                : 1
              : 3,
        eL = (t, e) => (t.state.dataUpdatedAt < e.state.dataUpdatedAt ? 1 : -1),
        eU = {
          status: (t, e) =>
            ej(t) === ej(e) ? eL(t, e) : ej(t) > ej(e) ? 1 : -1,
          "query hash": (t, e) => t.queryHash.localeCompare(e.queryHash),
          "last updated": eL,
        },
        eq = (t) =>
          t.state.isPaused
            ? 0
            : "error" === t.state.status
              ? 2
              : "pending" === t.state.status
                ? 1
                : 3,
        eV = (t, e) => (t.state.submittedAt < e.state.submittedAt ? 1 : -1),
        eB = {
          status: (t, e) =>
            eq(t) === eq(e) ? eV(t, e) : eq(t) > eq(e) ? 1 : -1,
          "last updated": eV,
        },
        eF = (t) =>
          t * parseFloat(getComputedStyle(document.documentElement).fontSize),
        eG = () => {
          let [t, e] = b("dark");
          return (
            E(() => {
              let t = window.matchMedia("(prefers-color-scheme: dark)");
              e(t.matches ? "dark" : "light");
              let n = (t) => {
                e(t.matches ? "dark" : "light");
              };
              t.addEventListener("change", n),
                O(() => t.removeEventListener("change", n));
            }),
            t
          );
        },
        eH = (t, e, n) => {
          if (0 === e.length) return n;
          if (t instanceof Map) {
            let r = new Map(t);
            if (1 === e.length) return r.set(e[0], n), r;
            let [i, ...o] = e;
            return r.set(i, eH(r.get(i), o, n)), r;
          }
          if (t instanceof Set) return new Set(eH(Array.from(t), e, n));
          if (Array.isArray(t)) {
            let r = [...t];
            if (1 === e.length) return (r[e[0]] = n), r;
            let [i, ...o] = e;
            return (r[i] = eH(r[i], o, n)), r;
          }
          if (t instanceof Object) {
            let r = { ...t };
            if (1 === e.length) return (r[e[0]] = n), r;
            let [i, ...o] = e;
            return (r[i] = eH(r[i], o, n)), r;
          }
          return t;
        },
        eK = (t, e) => {
          if (t instanceof Map) {
            let n = new Map(t);
            if (1 === e.length) return n.delete(e[0]), n;
            let [r, ...i] = e;
            return n.set(r, eK(n.get(r), i)), n;
          }
          if (t instanceof Set) return new Set(eK(Array.from(t), e));
          if (Array.isArray(t)) {
            let n = [...t];
            if (1 === e.length)
              return n.filter((t, n) => n.toString() !== e[0]);
            let [r, ...i] = e;
            return (n[r] = eK(n[r], i)), n;
          }
          if (t instanceof Object) {
            let n = { ...t };
            if (1 === e.length) return delete n[e[0]], n;
            let [r, ...i] = e;
            return (n[r] = eK(n[r], i)), n;
          }
          return t;
        },
        eQ = (t, e) => {
          if (
            !t ||
            document.querySelector("#_goober") ||
            e?.querySelector("#_goober")
          )
            return;
          let n = document.createElement("style"),
            r = document.createTextNode("");
          n.appendChild(r),
            (n.id = "_goober"),
            n.setAttribute("nonce", t),
            e ? e.appendChild(n) : document.head.appendChild(n);
        };
    },
    54829: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          ReactQueryDevtools: function () {
            return l;
          },
        });
      var r = n(14978),
        i = n(42493),
        o = n(10942),
        a = n(62337),
        s = class {
          #d;
          #f;
          #p;
          #h;
          #g = !1;
          #m;
          #y;
          #v;
          #_;
          #b;
          #w;
          #S;
          #k;
          constructor(t) {
            let {
              client: e,
              queryFlavor: n,
              version: r,
              onlineManager: i,
              buttonPosition: o,
              position: s,
              initialIsOpen: u,
              errorTypes: l,
              styleNonce: c,
              shadowDOMTarget: d,
            } = t;
            (this.#d = (0, a.gQ)(e)),
              (this.#p = n),
              (this.#h = r),
              (this.#f = i),
              (this.#m = c),
              (this.#y = d),
              (this.#v = (0, a.gQ)(o)),
              (this.#_ = (0, a.gQ)(s)),
              (this.#b = (0, a.gQ)(u)),
              (this.#w = (0, a.gQ)(l));
          }
          setButtonPosition(t) {
            this.#v[1](t);
          }
          setPosition(t) {
            this.#_[1](t);
          }
          setInitialIsOpen(t) {
            this.#b[1](t);
          }
          setErrorTypes(t) {
            this.#w[1](t);
          }
          setClient(t) {
            this.#d[1](t);
          }
          mount(t) {
            if (this.#g) throw Error("Devtools is already mounted");
            let e = (0, a.sY)(() => {
              let t;
              let e = this,
                [r] = this.#v,
                [i] = this.#_,
                [o] = this.#b,
                [s] = this.#w,
                [u] = this.#d;
              return (
                this.#S
                  ? (t = this.#S)
                  : ((t = (0, a.Vo)(() => n.e(8997).then(n.bind(n, 86917)))),
                    (this.#S = t)),
                (0, a.ws)(this.#m, this.#y),
                (0, a.LM)(
                  t,
                  (0, a.dG)(
                    {
                      get queryFlavor() {
                        return e.#p;
                      },
                      get version() {
                        return e.#h;
                      },
                      get onlineManager() {
                        return e.#f;
                      },
                      get shadowDOMTarget() {
                        return e.#y;
                      },
                    },
                    {
                      get client() {
                        return u();
                      },
                      get buttonPosition() {
                        return r();
                      },
                      get position() {
                        return i();
                      },
                      get initialIsOpen() {
                        return o();
                      },
                      get errorTypes() {
                        return s();
                      },
                    },
                  ),
                )
              );
            }, t);
            (this.#g = !0), (this.#k = e);
          }
          unmount() {
            if (!this.#g) throw Error("Devtools is not mounted");
            this.#k?.(), (this.#g = !1);
          }
        },
        u = n(24004),
        l = function (t) {
          let e = (0, i.useQueryClient)(t.client),
            n = r.useRef(null),
            {
              buttonPosition: a,
              position: l,
              initialIsOpen: c,
              errorTypes: d,
              styleNonce: f,
              shadowDOMTarget: p,
            } = t,
            [h] = r.useState(
              new s({
                client: e,
                queryFlavor: "React Query",
                version: "5",
                onlineManager: o.N,
                buttonPosition: a,
                position: l,
                initialIsOpen: c,
                errorTypes: d,
                styleNonce: f,
                shadowDOMTarget: p,
              }),
            );
          return (
            r.useEffect(() => {
              h.setClient(e);
            }, [e, h]),
            r.useEffect(() => {
              a && h.setButtonPosition(a);
            }, [a, h]),
            r.useEffect(() => {
              l && h.setPosition(l);
            }, [l, h]),
            r.useEffect(() => {
              h.setInitialIsOpen(c || !1);
            }, [c, h]),
            r.useEffect(() => {
              h.setErrorTypes(d || []);
            }, [d, h]),
            r.useEffect(
              () => (
                n.current && h.mount(n.current),
                () => {
                  h.unmount();
                }
              ),
              [h],
            ),
            (0, u.jsx)("div", { className: "tsqd-parent-container", ref: n })
          );
        };
    },
    39264: function (t, e, n) {
      "use strict";
      n.d(e, {
        W: function () {
          return i;
        },
      });
      var r = n(14978);
      function i(t, e, n) {
        (0, r.useInsertionEffect)(() => t.on(e, n), [t, e, n]);
      }
    },
  },
]);
