(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [309],
  {
    866: () => {},
    2348: (t) => {
      t.exports = function (t) {
        return t != t;
      };
    },
    3603: (t, e, n) => {
      "use strict";
      n.d(e, { SelectField: () => s });
      var r = n(94799),
        i = n(49708),
        o = n(39738),
        a = n(13331);
      let s = (0, o.forwardRef)(function (t, e) {
        let { children: n, placeholder: o, className: s, ...l } = t;
        return (0, r.jsxs)(a.chakra.select, {
          ...l,
          ref: e,
          className: (0, i.cx)("chakra-select", s),
          children: [o && (0, r.jsx)("option", { value: "", children: o }), n],
        });
      });
      s.displayName = "SelectField";
    },
    4550: (t, e, n) => {
      "use strict";
      n.d(e, { WW: () => a, _m: () => r, iH: () => i, wh: () => s });
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
    5610: (t, e, n) => {
      "use strict";
      function r(t, e = {}) {
        let n = !1;
        function i(e) {
          let n = (
              ["container", "root"].includes(null != e ? e : "") ? [t] : [t, e]
            )
              .filter(Boolean)
              .join("__"),
            r = `chakra-${n}`;
          return { className: r, selector: `.${r}`, toString: () => e };
        }
        return {
          parts: function (...o) {
            for (let t of (!(function () {
              if (!n) {
                n = !0;
                return;
              }
              throw Error(
                "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?",
              );
            })(),
            o))
              e[t] = i(t);
            return r(t, e);
          },
          toPart: i,
          extend: function (...n) {
            for (let t of n) t in e || (e[t] = i(t));
            return r(t, e);
          },
          selectors: function () {
            return Object.fromEntries(
              Object.entries(e).map(([t, e]) => [t, e.selector]),
            );
          },
          classnames: function () {
            return Object.fromEntries(
              Object.entries(e).map(([t, e]) => [t, e.className]),
            );
          },
          get keys() {
            return Object.keys(e);
          },
          __type: {},
        };
      }
      n.d(e, {
        aH: () => i,
        M9: () => m,
        fZ: () => o,
        Lx: () => a,
        _8: () => s,
        Gq: () => l,
        yj: () => u,
        Pe: () => c,
        Zt: () => d,
        vI: () => f,
        j_: () => p,
        Vg: () => h,
        af: () => g,
      });
      var i = r("accordion")
        .parts("root", "container", "button", "panel")
        .extend("icon");
      r("alert")
        .parts("title", "description", "container")
        .extend("icon", "spinner"),
        r("avatar")
          .parts("label", "badge", "container")
          .extend("excessLabel", "group"),
        r("breadcrumb").parts("link", "item", "container").extend("separator"),
        r("button").parts();
      var o = r("checkbox")
        .parts("control", "icon", "container")
        .extend("label");
      r("progress").parts("track", "filledTrack").extend("label");
      var a = r("drawer")
        .parts("overlay", "dialogContainer", "dialog")
        .extend("header", "closeButton", "body", "footer");
      r("editable").parts("preview", "input", "textarea"),
        r("form").parts("container", "requiredIndicator", "helperText");
      var s = r("formError").parts("text", "icon"),
        l = r("input").parts("addon", "field", "element", "group"),
        u = r("list").parts("container", "item", "icon"),
        c = r("menu")
          .parts("button", "list", "item")
          .extend("groupTitle", "icon", "command", "divider"),
        d = r("modal")
          .parts("overlay", "dialogContainer", "dialog")
          .extend("header", "closeButton", "body", "footer");
      r("numberinput").parts("root", "field", "stepperGroup", "stepper"),
        r("pininput").parts("field");
      var f = r("popover")
          .parts("content", "header", "body", "footer")
          .extend("popper", "arrow", "closeButton"),
        p = r("progress").parts("label", "filledTrack", "track"),
        h = r("radio").parts("container", "control", "label");
      r("select").parts("field", "icon"),
        r("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
        r("stat").parts("container", "label", "helpText", "number", "icon");
      var g = r("switch").parts("container", "track", "thumb", "label");
      r("table").parts(
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
        "tfoot",
        "caption",
      ),
        r("tabs").parts(
          "root",
          "tab",
          "tablist",
          "tabpanel",
          "tabpanels",
          "indicator",
        ),
        r("tag").parts("container", "label", "closeButton");
      var m = r("card").parts("container", "header", "body", "footer");
      r("stepper").parts(
        "stepper",
        "step",
        "title",
        "description",
        "indicator",
        "separator",
        "icon",
        "number",
      );
    },
    6085: (t, e, n) => {
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
      n.d(e, { q: () => r });
    },
    7252: () => {},
    8200: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, { ReactQueryDevtools: () => u });
      var r = n(34023),
        i = n(2873),
        o = n(26753),
        a = n(22194),
        s = class {
          #t;
          #e;
          #n;
          #r;
          #i = !1;
          #o;
          #a;
          #s;
          #l;
          #u;
          #c;
          #d;
          #f;
          constructor(t) {
            let {
              client: e,
              queryFlavor: n,
              version: r,
              onlineManager: i,
              buttonPosition: o,
              position: s,
              initialIsOpen: l,
              errorTypes: u,
              styleNonce: c,
              shadowDOMTarget: d,
            } = t;
            (this.#t = (0, a.n5)(e)),
              (this.#n = n),
              (this.#r = r),
              (this.#e = i),
              (this.#o = c),
              (this.#a = d),
              (this.#s = (0, a.n5)(o)),
              (this.#l = (0, a.n5)(s)),
              (this.#u = (0, a.n5)(l)),
              (this.#c = (0, a.n5)(u));
          }
          setButtonPosition(t) {
            this.#s[1](t);
          }
          setPosition(t) {
            this.#l[1](t);
          }
          setInitialIsOpen(t) {
            this.#u[1](t);
          }
          setErrorTypes(t) {
            this.#c[1](t);
          }
          setClient(t) {
            this.#t[1](t);
          }
          mount(t) {
            if (this.#i) throw Error("Devtools is already mounted");
            let e = (0, a.XX)(() => {
              let t;
              let e = this,
                [r] = this.#s,
                [i] = this.#l,
                [o] = this.#u,
                [s] = this.#c,
                [l] = this.#t;
              return (
                this.#d
                  ? (t = this.#d)
                  : ((t = (0, a.RZ)(() => n.e(8381).then(n.bind(n, 8303)))),
                    (this.#d = t)),
                (0, a.gg)(this.#o, this.#a),
                (0, a.a0)(
                  t,
                  (0, a.v6)(
                    {
                      get queryFlavor() {
                        return e.#n;
                      },
                      get version() {
                        return e.#r;
                      },
                      get onlineManager() {
                        return e.#e;
                      },
                      get shadowDOMTarget() {
                        return e.#a;
                      },
                    },
                    {
                      get client() {
                        return l();
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
            (this.#i = !0), (this.#f = e);
          }
          unmount() {
            if (!this.#i) throw Error("Devtools is not mounted");
            this.#f?.(), (this.#i = !1);
          }
        },
        l = n(94799),
        u = function (t) {
          let e = (0, i.useQueryClient)(t.client),
            n = r.useRef(null),
            {
              buttonPosition: a,
              position: u,
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
                onlineManager: o.t,
                buttonPosition: a,
                position: u,
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
              u && h.setPosition(u);
            }, [u, h]),
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
            (0, l.jsx)("div", { className: "tsqd-parent-container", ref: n })
          );
        };
    },
    8275: (t, e, n) => {
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
            (t =
              "object" == typeof self
                ? self
                : "object" == typeof window
                  ? window
                  : {}),
          t
        );
      }
      n.d(e, { V: () => r });
    },
    9389: (t, e, n) => {
      "use strict";
      n.d(e, { Kp: () => l, hL: () => s, y5: () => a });
      var r = n(19004),
        i = n(77269),
        o = n(38737);
      let a = {
        HIDDEN: "visibility_hidden",
        UNLOADING: "before_unload",
        PAGEHIDE: "page_hide",
        FROZEN: "page_frozen",
      };
      function s(t) {
        return new r.c((e) => {
          let { stop: n } = (0, o.l)(
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
            r = (0, o.q)(t, window, "beforeunload", () => {
              e.notify({ reason: a.UNLOADING });
            }).stop;
          return () => {
            n(), r();
          };
        });
      }
      function l(t) {
        return (0, i.KQ)(a).includes(t);
      }
    },
    11204: (t, e, n) => {
      "use strict";
      n.d(e, { Z: () => s, m: () => a });
      var r = n(51064),
        i = n(84957),
        o = n(87189);
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
            get: () => i.pM,
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
          o.Vy.warn(
            "SDK is loaded more than once. This is unsupported and might have unexpected behavior.",
          ),
          (t[e] = n),
          i &&
            i.q &&
            i.q.forEach((t) =>
              (0, r.y)(t, "onReady callback threw an error:")(),
            );
      }
    },
    11556: (t, e, n) => {
      "use strict";
      let r, i, o, a, s, l, u, c, d, f, p, h, g;
      n.d(e, {
        eT: () => eq,
        o: () => eU,
        $m: () => eD,
        NT: () => e$,
        Wd: () => eL,
        yF: () => e8,
        wI: () => eP,
        W3: () => tY,
        PJ: () => eV,
        dT: () => eF,
        $4: () => ej,
        Gn: () => nF,
        zL: () => nH,
        dx: () => ra,
        rf: () => eQ,
        pB: () => nW,
        wR: () => eM,
        g1: () => nG,
        YR: () => ev,
        XS: () => eI,
        p_: () => eN,
        AB: () => tQ,
        jR: () => eB,
        jK: () => eb,
        Ie: () => eH,
        rJ: () => ro,
      });
      var m,
        y = n(4550),
        v = n(77930),
        b = n(92266),
        _ = n(87189),
        w = n(84437);
      let S = 3 * y._m,
        k = 16 * y._m;
      function x(t) {
        let e = 0,
          { throttled: n, cancel: r } = (0, v.n)((n) => {
            (e = (0, y.WW)((0, b.s)(n))), t();
          }, 200),
          i = () => {
            r(), (e = 0);
          };
        return {
          updateCustomerData: (t) => {
            (0, w.RI)(t) ? i() : n(t);
          },
          resetCustomerData: i,
          getBytesCount: () => e,
          stop: () => {
            r();
          },
        };
      }
      var A = n(13977),
        C = n(16056),
        E = n(19004),
        T = n(46928);
      function O(t, e, n) {
        let r = { ...t };
        for (let [i, { required: o, type: a }] of Object.entries(e))
          "string" === a && i in r && (r[i] = String(r[i])),
            !o ||
              i in t ||
              _.Vy.warn(
                `The property ${i} of ${n} is required; context will not be sent to the intake.`,
              );
        return r;
      }
      function R(
        t = "",
        { customerDataTracker: e, propertiesConfig: n = {} } = {},
      ) {
        let r = {},
          i = new E.c(),
          o = {
            getContext: () => (0, A.Go)(r),
            setContext: (a) => {
              !(function (t) {
                let e = "object" === (0, T.P)(t);
                return e || _.Vy.error("Unsupported context:", t), e;
              })(a)
                ? o.clearContext()
                : ((r = (0, C.a)(O(a, n, t))),
                  null == e || e.updateCustomerData(r)),
                i.notify();
            },
            setContextProperty: (o, a) => {
              (r = (0, C.a)(O({ ...r, [o]: a }, n, t))),
                null == e || e.updateCustomerData(r),
                i.notify();
            },
            removeContextProperty: (o) => {
              delete r[o],
                null == e || e.updateCustomerData(r),
                O(r, n, t),
                i.notify();
            },
            clearContext: () => {
              (r = {}), null == e || e.resetCustomerData(), i.notify();
            },
            changeObservable: i,
          };
        return o;
      }
      let I = { GRANTED: "granted", NOT_GRANTED: "not-granted" };
      var N = n(38737);
      let M = [];
      function P(t, e, n, r) {
        var i, o;
        let a = ((i = n), (o = r), `_dd_c_${i}_${o}`);
        M.push(
          (0, N.q)(t, window, "storage", ({ key: t }) => {
            a === t && e.setContext(l());
          }),
        ),
          e.changeObservable.subscribe(function () {
            localStorage.setItem(a, JSON.stringify(e.getContext()));
          });
        let s = (0, A.kg)(l(), e.getContext());
        function l() {
          let t = localStorage.getItem(a);
          return t ? JSON.parse(t) : {};
        }
        (0, w.RI)(s) || e.setContext(s);
      }
      function j() {
        let t = "",
          e = 0;
        return {
          isAsync: !1,
          get isEmpty() {
            return !t;
          },
          write(n, r) {
            let i = (0, y.WW)(n);
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
      var D = n(84957),
        $ = n(59880),
        L = n(11204),
        U = n(21580),
        q = n(45019);
      function z(t, e) {
        e.silentMultipleInit || _.Vy.error(`${t} is already initialized.`);
      }
      function V(t) {
        return t
          ? (
              parseInt(t, 10) ^
              ((16 * Math.random()) >> (parseInt(t, 10) / 4))
            ).toString(16)
          : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, V);
      }
      let B = /([\w-]+)\s*=\s*([^;]+)/g;
      function F(t, e) {
        for (B.lastIndex = 0; ; ) {
          let n = B.exec(t);
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
      function G({ vitalsByName: t, vitalsByReference: e }, n, r = {}) {
        let i = {
            name: n,
            startClocks: (0, q.M8)(),
            context: r.context,
            description: r.description,
          },
          o = { __dd_vital_reference: !0 };
        return t.set(n, i), e.set(o, i), o;
      }
      function W(t, { vitalsByName: e, vitalsByReference: n }, r, i = {}) {
        let o = "string" == typeof r ? e.get(r) : n.get(r);
        if (o) {
          var a, s, l, u, c;
          t(
            ((a = o),
            (s = o.startClocks),
            (l = i),
            (u = (0, q.M8)()),
            {
              name: a.name,
              type: "duration",
              startClocks: s,
              duration: (0, q.vk)(s.timeStamp, u.timeStamp),
              context: (0, A.kg)(a.context, l.context),
              description:
                null !== (c = l.description) && void 0 !== c
                  ? c
                  : a.description,
            }),
          ),
            "string" == typeof r ? e.delete(r) : n.delete(r);
        }
      }
      function Q(t, e, n) {
        if (t)
          for (let r of t) {
            let t = r[e];
            t && t(n);
          }
      }
      var K = n(30856),
        Z = n(37992),
        J = n(32621),
        Y = n(12203);
      function X() {
        return (
          r ||
            (r = new E.c((t) => {
              if (!window.fetch) return;
              let { stop: e } = (0, J.H)(
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
                      l = i instanceof Request ? i.url : (0, Y.l2)(String(i)),
                      u = {
                        state: "start",
                        init: o,
                        input: i,
                        method: s,
                        startClocks: (0, q.M8)(),
                        url: l,
                        handlingStack: n,
                      };
                    r.notify(u),
                      (t[0] = u.input),
                      (t[1] = u.init),
                      e((t) =>
                        (function (t, e, n) {
                          function r(e) {
                            (n.state = "resolve"),
                              Object.assign(n, e),
                              t.notify(n);
                          }
                          e.then(
                            (0, D.dm)((t) => {
                              r({
                                response: t,
                                responseType: t.type,
                                status: t.status,
                                isAborted: !1,
                              });
                            }),
                            (0, D.dm)((t) => {
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
                        })(r, t, u),
                      );
                  })(e, t),
                { computeHandlingStack: !0 },
              );
              return e;
            })),
          r
        );
      }
      var tt = n(27032);
      function te(t, e, n = 0, r) {
        let i = new Date();
        i.setTime(i.getTime() + n);
        let o = `expires=${i.toUTCString()}`,
          a = r && r.crossSite ? "none" : "strict",
          s = r && r.domain ? `;domain=${r.domain}` : "",
          l = r && r.secure ? ";secure" : "",
          u = r && r.partitioned ? ";partitioned" : "";
        document.cookie = `${t}=${e};${o};path=/;samesite=${a}${s}${l}${u}`;
      }
      function tn(t) {
        return F(document.cookie, t);
      }
      function tr(t) {
        return (
          i ||
            (i = (function (t) {
              let e = new Map();
              for (B.lastIndex = 0; ; ) {
                let n = B.exec(t);
                if (n) e.set(n[1], n[2]);
                else break;
              }
              return e;
            })(document.cookie)),
          i.get(t)
        );
      }
      function ti() {
        return !!(
          window._DATADOG_SYNTHETICS_INJECTS_RUM ||
          tr("datadog-synthetics-injects-rum")
        );
      }
      var to = n(51064),
        ta = n(29439),
        ts = n(43066),
        tl = n(69848);
      let tu = "_dd_s";
      var tc = n(77269);
      let td = 4 * q.MA,
        tf = 15 * q.iW,
        tp = q.$H,
        th = { COOKIE: "cookie", LOCAL_STORAGE: "local-storage" },
        tg = /^([a-zA-Z]+)=([a-z0-9-]+)$/;
      function tm(t, e) {
        let n = { isExpired: "1" };
        return (
          e.trackAnonymousUser &&
            ((null == t ? void 0 : t.anonymousId)
              ? (n.anonymousId = null == t ? void 0 : t.anonymousId)
              : (n.anonymousId = V())),
          n
        );
      }
      function ty(t) {
        return (0, w.RI)(t);
      }
      function tv(t) {
        var e;
        return (
          void 0 !== t.isExpired ||
          !(
            (void 0 === (e = t).created ||
              (0, q.x3)() - Number(e.created) < td) &&
            (void 0 === e.expire || (0, q.x3)() < Number(e.expire))
          )
        );
      }
      function tb(t) {
        t.expire = String((0, q.x3)() + tf);
      }
      function t_(t) {
        return (0, tc.WP)(t)
          .map(([t, e]) => ("anonymousId" === t ? `aid=${e}` : `${t}=${e}`))
          .join("&");
      }
      function tw(t) {
        let e = {};
        return (
          t &&
            (-1 !== t.indexOf("&") || tg.test(t)) &&
            t.split("&").forEach((t) => {
              let n = tg.exec(t);
              if (null !== n) {
                let [, t, r] = n;
                "aid" === t ? (e.anonymousId = r) : (e[t] = r);
              }
            }),
          e
        );
      }
      function tS(t) {
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
                  let t = `dd_site_test_${V()}`,
                    e = window.location.hostname.split("."),
                    n = e.pop();
                  for (; e.length && !tn(t); )
                    (n = `${e.pop()}.${n}`), te(t, "test", q.OY, { domain: n });
                  te(t, "", 0, { domain: n }), (o = n);
                }
                return o;
              })()),
            e
          );
        })(t);
        return !(function (t) {
          if (void 0 === document.cookie || null === document.cookie) return !1;
          try {
            let e = `dd_cookie_test_${V()}`,
              n = "test";
            te(e, n, q.iW, t);
            let r = tn(e) === n;
            return te(e, "", 0, t), r;
          } catch (t) {
            return _.Vy.error(t), !1;
          }
        })(e)
          ? void 0
          : { type: th.COOKIE, cookieOptions: e };
      }
      function tk() {
        return tw(tn(tu));
      }
      function tx() {
        try {
          let t = V(),
            e = `_dd_test_${t}`;
          localStorage.setItem(e, t);
          let n = localStorage.getItem(e);
          return (
            localStorage.removeItem(e),
            t === n ? { type: th.LOCAL_STORAGE } : void 0
          );
        } catch (t) {
          return;
        }
      }
      function tA(t) {
        localStorage.setItem(tu, t_(t));
      }
      function tC() {
        return tw(localStorage.getItem(tu));
      }
      let tE = [];
      function tT(t, e, n = 0) {
        var r;
        let i;
        let { isLockEnabled: o, persistSession: s, expireSession: l } = e,
          u = (t) => s({ ...t, lock: i }),
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
          tR(e);
          return;
        }
        let d = c();
        if (o && (d.lock || ((i = V()), u(d.session), (d = c()).lock !== i))) {
          tO(t, e, n);
          return;
        }
        let f = t.process(d.session);
        if (o && (d = c()).lock !== i) {
          tO(t, e, n);
          return;
        }
        if (
          (f && (tv(f) ? l(f) : (tb(f), o ? u(f) : s(f))), o && !(f && tv(f)))
        ) {
          if ((d = c()).lock !== i) {
            tO(t, e, n);
            return;
          }
          s(d.session), (f = d.session);
        }
        null === (r = t.after) || void 0 === r || r.call(t, f || d.session),
          tR(e);
      }
      function tO(t, e, n) {
        (0, ts.wg)(() => {
          tT(t, e, n + 1);
        }, 10);
      }
      function tR(t) {
        a = void 0;
        let e = tE.shift();
        e && tT(e, t);
      }
      let tI = q.OY;
      var tN = n(71151);
      function tM(t, e, n) {
        let r = (function (t, e) {
          let n = `/api/v2/${e}`,
            r = t.proxy;
          if ("string" == typeof r) {
            let t = (0, Y.l2)(r);
            return (e) => `${t}?ddforward=${encodeURIComponent(`${n}?${e}`)}`;
          }
          if ("function" == typeof r)
            return (t) => r({ path: n, parameters: t });
          let i = tP(e, t);
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
                let l = [
                  "ddsource=browser",
                  `ddtags=${encodeURIComponent(s.join(","))}`,
                  `dd-api-key=${t}`,
                  `dd-evp-origin-version=${encodeURIComponent("6.5.1")}`,
                  "dd-evp-origin=browser",
                  `dd-request-id=${V()}`,
                ];
                return (
                  a && l.push(`dd-evp-encoding=${a}`),
                  "rum" === n && l.push(`batch_time=${(0, q.nx)()}`),
                  e && l.reverse(),
                  l.join("&")
                );
              })(t, e, n, i, o),
            ),
          urlPrefix: r(""),
          trackType: e,
        };
      }
      function tP(t, e) {
        let { site: n = tN.NW, internalAnalyticsSubdomain: r } = e;
        if ("logs" === t && e.usePciIntake && n === tN.NW) return tN.$A;
        if (r && n === tN.NW) return `${r}.${tN.NW}`;
        if (n === tN.TC) return `http-intake.logs.${n}`;
        let i = n.split("."),
          o = i.pop();
        return `browser-intake-${i.join("-")}.${o}`;
      }
      function tj(t, e) {
        var n;
        let r = 200 - t.length - 1;
        (e.length > r ||
          ((n = e),
          (function () {
            try {
              return RegExp("[\\p{Ll}]", "u"), !0;
            } catch (t) {
              return !1;
            }
          })() && RegExp("[^\\p{Ll}\\p{Lo}0-9_:./-]", "u").test(n))) &&
          _.Vy.warn(
            `${t} value doesn't meet tag requirements and will be sanitized. ${_.xG} ${_.fH}/getting_started/tagging/#defining-tags`,
          );
        let i = e.replace(/,/g, "_");
        return `${t}:${i}`;
      }
      let tD = {
          ALLOW: "allow",
          MASK: "mask",
          MASK_USER_INPUT: "mask-user-input",
        },
        t$ = { ALL: "all", SAMPLED: "sampled" };
      function tL(t, e) {
        return (
          null == t ||
          "string" == typeof t ||
          (_.Vy.error(`${e} must be defined as a string`), !1)
        );
      }
      function tU(t, e) {
        return (
          !!(void 0 === t || (0, ta.fp)(t)) ||
          (_.Vy.error(`${e} Sample Rate should be a number between 0 and 100`),
          !1)
        );
      }
      function tq(t) {
        let e = (0, T.P)(t);
        return "string" === e || "function" === e || t instanceof RegExp;
      }
      function tz(t, e, n = !1) {
        return t.some((t) => {
          try {
            if ("function" == typeof t) return t(e);
            if (t instanceof RegExp) return t.test(e);
            if ("string" == typeof t) return n ? e.startsWith(t) : t === e;
          } catch (t) {
            _.Vy.error(t);
          }
          return !1;
        });
      }
      function tV(t) {
        let e = crypto.getRandomValues(new Uint32Array(2));
        return (
          63 === t && (e[e.length - 1] >>>= 1),
          {
            toString(t = 10) {
              let n = e[1],
                r = e[0],
                i = "";
              do {
                let e = (n % t) * 0x100000000 + r;
                (n = Math.floor(n / t)),
                  (r = Math.floor(e / t)),
                  (i = (e % t).toString(t) + i);
              } while (n || r);
              return i;
            },
          }
        );
      }
      function tB(t) {
        return t.toString(16).padStart(16, "0");
      }
      function tF(t) {
        0 !== t.status ||
          t.isAborted ||
          ((t.traceId = void 0),
          (t.spanId = void 0),
          (t.traceSampled = void 0));
      }
      function tH(t, e, n, r) {
        var i, o;
        let a;
        let l = n.findTrackedSession();
        if (!l) return;
        let u = t.allowedTracingUrls.find((t) => tz([t.match], e.url, !0));
        if (!u) return;
        let c =
          ((i = l.id),
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
                    : (0, ta.ic)(o)),
                  (s = { sessionId: i, decision: a }),
                  a))));
        (c || t.traceContextInjection === t$.ALL) &&
          ((e.traceSampled = c),
          (e.traceId = tV(64)),
          (e.spanId = tV(63)),
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
                        traceparent: `00-0000000000000000${tB(t)}-${tB(e)}-0${n ? "1" : "0"}`,
                        tracestate: `dd=s:${n ? "1" : "0"};o:rum`,
                      });
                      break;
                    case "b3":
                      Object.assign(i, {
                        b3: `${tB(t)}-${tB(e)}-${n ? "1" : "0"}`,
                      });
                      break;
                    case "b3multi":
                      Object.assign(i, {
                        "X-B3-TraceId": tB(t),
                        "X-B3-SpanId": tB(e),
                        "X-B3-Sampled": n ? "1" : "0",
                      });
                  }
                }),
                i
              );
            })(e.traceId, e.spanId, e.traceSampled, u.propagatorTypes),
          ));
      }
      let tG = ["tracecontext", "datadog"];
      function tW() {
        _.Vy.error("Error fetching the remote configuration.");
      }
      function tQ(t, e, n = {}) {
        let r = (function (t = 2) {
            let e = new Map(),
              n = !1;
            function r(i = 0) {
              var o;
              if (n || 0 === t) return;
              let a = 2 === t ? S : k,
                s = i;
              e.forEach((t) => {
                s += t.getBytesCount();
              }),
                s > a &&
                  ((o = a),
                  _.Vy.warn(
                    `Customer data exceeds the recommended ${o / y._m}KiB threshold. ${_.xG} ${_.Xs}/#customer-data-exceeds-the-recommended-threshold-warning`,
                  ),
                  (n = !0));
            }
            return {
              createDetachedTracker: () => {
                let t = x(() => r(t.getBytesCount()));
                return t;
              },
              getOrCreateTracker: (t) => (e.has(t) || e.set(t, x(r)), e.get(t)),
              setCompressionStatus: (e) => {
                0 === t && ((t = e), r());
              },
              getCompressionStatus: () => t,
              stop: () => {
                e.forEach((t) => t.stop()), e.clear();
              },
            };
          })(0),
          i = R("global context", {
            customerDataTracker: r.getOrCreateTracker(2),
          }),
          o = R("user", {
            customerDataTracker: r.getOrCreateTracker(1),
            propertiesConfig: {
              id: { type: "string" },
              name: { type: "string" },
              email: { type: "string" },
            },
          }),
          a = R("account", {
            customerDataTracker: r.getOrCreateTracker(1),
            propertiesConfig: {
              id: { type: "string", required: !0 },
              name: { type: "string" },
            },
          }),
          s = (function (t) {
            let e = new E.c();
            return {
              tryToInit(e) {
                t || (t = e);
              },
              update(n) {
                (t = n), e.notify();
              },
              isGranted: () => t === I.GRANTED,
              observable: e,
            };
          })(),
          l = { vitalsByName: new Map(), vitalsByReference: new WeakMap() };
        function u() {
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
            let a, s, l, u;
            let c = (0, K.O)(),
              d = r.observable.subscribe(p),
              f = {};
            function p() {
              let t;
              if (!l || !u || !r.isGranted()) return;
              if ((d.unsubscribe(), u.trackViewsManually)) {
                if (!a) return;
                c.remove(a.callback), (t = a.options);
              }
              let e = o(u, s, t);
              c.drain(e);
            }
            function h(t) {
              var n, i, o;
              let a = (0, Z.d0)();
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
                        : null === (o = (0, Z.Y9)()) || void 0 === o
                          ? void 0
                          : o.getPrivacyLevel(),
                  }),
                (l = t),
                (0, $.Rr)(
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
                                ? tG.forEach((t) => e.add(t))
                                : "object" === (0, T.P)(t) &&
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
                u)
              ) {
                z("DD_RUM", t);
                return;
              }
              let c = (function (t) {
                var e, n, r, i, o, a;
                if (
                  (void 0 === t.trackFeatureFlagsForEvents ||
                    Array.isArray(t.trackFeatureFlagsForEvents) ||
                    _.Vy.warn("trackFeatureFlagsForEvents should be an array"),
                  !t.applicationId)
                ) {
                  _.Vy.error(
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
                  _.Vy.error("Excluded Activity Urls should be an array");
                  return;
                }
                let s = (function (t) {
                  if (void 0 === t.allowedTracingUrls) return [];
                  if (!Array.isArray(t.allowedTracingUrls)) {
                    _.Vy.error("Allowed Tracing URLs should be an array");
                    return;
                  }
                  if (
                    0 !== t.allowedTracingUrls.length &&
                    void 0 === t.service
                  ) {
                    _.Vy.error(
                      "Service needs to be configured when tracing is enabled",
                    );
                    return;
                  }
                  let e = [];
                  return (
                    t.allowedTracingUrls.forEach((t) => {
                      if (tq(t)) e.push({ match: t, propagatorTypes: tG });
                      else
                        "object" === (0, T.P)(t) &&
                        tq(t.match) &&
                        Array.isArray(t.propagatorTypes)
                          ? e.push(t)
                          : _.Vy.warn(
                              "Allowed Tracing Urls parameters should be a string, RegExp, function, or an object. Ignoring parameter",
                              t,
                            );
                    }),
                    e
                  );
                })(t);
                if (!s) return;
                let l = (function (t) {
                  var e, n, r, i, o, a, s;
                  if (!t || !t.clientToken) {
                    _.Vy.error(
                      "Client Token is not configured, we will not send any data.",
                    );
                    return;
                  }
                  if (
                    (!(s = t.site) ||
                      "string" != typeof s ||
                      /(datadog|ddog|datad0g|dd0g)/.test(s) ||
                      (_.Vy.error(
                        `Site should be a valid Datadog site. ${_.xG} ${_.fH}/getting_started/site/.`,
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
                      !(0, w.Rj)(I, t.trackingConsent)
                    ) {
                      _.Vy.error(
                        'Tracking Consent should be either "granted" or "not-granted"',
                      );
                      return;
                    }
                    return {
                      beforeSend:
                        t.beforeSend &&
                        (0, to.y)(t.beforeSend, "beforeSend threw an error:"),
                      sessionStoreStrategyType: (function (t) {
                        switch (t.sessionPersistence) {
                          case th.COOKIE:
                            return tS(t);
                          case th.LOCAL_STORAGE:
                            return tx();
                          case void 0: {
                            let e = tS(t);
                            return (
                              !e && t.allowFallbackToLocalStorage && (e = tx()),
                              e
                            );
                          }
                          default:
                            _.Vy.error(
                              `Invalid session persistence '${String(t.sessionPersistence)}'`,
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
                          : I.GRANTED,
                      trackAnonymousUser:
                        null === (a = t.trackAnonymousUser) ||
                        void 0 === a ||
                        a,
                      storeContextsAcrossPages: !!t.storeContextsAcrossPages,
                      batchBytesLimit: 16 * y._m,
                      eventRateLimiterThreshold: 3e3,
                      maxTelemetryEventsPerPage: 15,
                      flushTimeout: 30 * q.OY,
                      batchMessagesLimit: 50,
                      messageBytesLimit: 256 * y._m,
                      ...(function (t) {
                        var e, n;
                        let r = t.site || tN.NW,
                          i = (function (t) {
                            let {
                                env: e,
                                service: n,
                                version: r,
                                datacenter: i,
                              } = t,
                              o = [];
                            return (
                              e && o.push(tj("env", e)),
                              n && o.push(tj("service", n)),
                              r && o.push(tj("version", r)),
                              i && o.push(tj("datacenter", i)),
                              o
                            );
                          })(t),
                          o = {
                            logsEndpointBuilder: tM((e = t), "logs", (n = i)),
                            rumEndpointBuilder: tM(e, "rum", n),
                            sessionReplayEndpointBuilder: tM(e, "replay", n),
                          };
                        return {
                          replica: (function (t, e) {
                            if (!t.replica) return;
                            let n = {
                                ...t,
                                site: tN.NW,
                                clientToken: t.replica.clientToken,
                              },
                              r = {
                                logsEndpointBuilder: tM(n, "logs", e),
                                rumEndpointBuilder: tM(n, "rum", e),
                              };
                            return {
                              applicationId: t.replica.applicationId,
                              ...r,
                            };
                          })(t, i),
                          site: r,
                          ...o,
                        };
                      })(t),
                    };
                  }
                })(t);
                if (!l) return;
                let u =
                  null !== (e = t.sessionReplaySampleRate) && void 0 !== e
                    ? e
                    : 0;
                return {
                  applicationId: t.applicationId,
                  version: t.version || void 0,
                  actionNameAttribute: t.actionNameAttribute,
                  sessionReplaySampleRate: u,
                  startSessionReplayRecordingManually:
                    void 0 !== t.startSessionReplayRecordingManually
                      ? !!t.startSessionReplayRecordingManually
                      : 0 === u,
                  traceSampleRate:
                    null !== (n = t.traceSampleRate) && void 0 !== n ? n : 100,
                  rulePsr: (0, ta.Et)(t.traceSampleRate)
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
                  defaultPrivacyLevel: (0, w.Rj)(tD, t.defaultPrivacyLevel)
                    ? t.defaultPrivacyLevel
                    : tD.MASK,
                  enablePrivacyForActionName: !!t.enablePrivacyForActionName,
                  customerDataTelemetrySampleRate: 1,
                  traceContextInjection: (0, w.Rj)(t$, t.traceContextInjection)
                    ? t.traceContextInjection
                    : t$.SAMPLED,
                  plugins: t.plugins || [],
                  trackFeatureFlagsForEvents:
                    t.trackFeatureFlagsForEvents || [],
                  ...l,
                };
              })(t);
              if (c) {
                if (!a && !c.sessionStoreStrategyType) {
                  _.Vy.warn(
                    "No storage available for session. We will not send any data.",
                  );
                  return;
                }
                (!c.compressIntakeRequests ||
                  a ||
                  !e ||
                  (s = e(c, "Datadog RUM", v.l))) &&
                  ((u = c),
                  X().subscribe(v.l),
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
                  _.Vy.error("Missing configuration");
                  return;
                }
                if (
                  ((0, tt.Aq)(e.enableExperimentalFeatures),
                  (l = e),
                  !(t && ti()))
                ) {
                  if (
                    (Q(e.plugins, "onInit", {
                      initConfiguration: e,
                      publicApi: n,
                    }),
                    e.remoteConfigurationId)
                  )
                    !(function (t, e) {
                      var n;
                      let r = new XMLHttpRequest();
                      (0, N.q)(t, r, "load", function () {
                        200 === r.status
                          ? e(JSON.parse(r.responseText).rum)
                          : tW();
                      }),
                        (0, N.q)(t, r, "error", function () {
                          tW();
                        }),
                        r.open(
                          "GET",
                          ((n = t),
                          `https://sdk-configuration.${tP("rum", n)}/v1/${encodeURIComponent(n.remoteConfigurationId)}.json`),
                        ),
                        r.send();
                    })(e, (t) => {
                      var n, r;
                      h(((n = e), (r = t), { ...n, ...r }));
                    });
                  else h(e);
                }
              },
              get initConfiguration() {
                return l;
              },
              getInternalContext: v.l,
              stopSession: v.l,
              addTiming(t, e = (0, q.nx)()) {
                c.add((n) => n.addTiming(t, e));
              },
              startView(t, e = (0, q.M8)()) {
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
              startDurationVital: (t, e) => G(i, t, e),
              stopDurationVital(t, e) {
                W(g, i, t, e);
              },
              addDurationVital: g,
            };
          })(n, u, s, l, (d, f, p) => {
            var h, g;
            d.storeContextsAcrossPages &&
              (P(d, i, "rum", 2), P(d, o, "rum", 1), P(d, a, "rum", 4)),
              r.setCompressionStatus(f ? 1 : 2);
            let m = t(
              d,
              e,
              r,
              u,
              p,
              f && n.createDeflateEncoder
                ? (t) => n.createDeflateEncoder(d, f, t)
                : j,
              s,
              l,
            );
            return (
              e.onRumStart(m.lifeCycle, d, m.session, m.viewHistory, f),
              (h = c),
              (g = m),
              (c = {
                init: (t) => {
                  z("DD_RUM", t);
                },
                initConfiguration: h.initConfiguration,
                ...g,
              }),
              Q(d.plugins, "onRumStart", { strategy: c }),
              m
            );
          }),
          d = (0, D.dm)((t) => {
            let e = "object" == typeof t ? t : { name: t };
            e.context && r.getOrCreateTracker(3).updateCustomerData(e.context),
              c.startView(e),
              (0, $.Q6)({ feature: "start-view" });
          }),
          f = (0, L.m)({
            init: (0, D.dm)((t) => {
              c.init(t, f);
            }),
            setTrackingConsent: (0, D.dm)((t) => {
              s.update(t),
                (0, $.Q6)({
                  feature: "set-tracking-consent",
                  tracking_consent: t,
                });
            }),
            setViewName: (0, D.dm)((t) => {
              c.setViewName(t), (0, $.Q6)({ feature: "set-view-name" });
            }),
            setViewContext: (0, D.dm)((t) => {
              c.setViewContext(t), (0, $.Q6)({ feature: "set-view-context" });
            }),
            setViewContextProperty: (0, D.dm)((t, e) => {
              c.setViewContextProperty(t, e),
                (0, $.Q6)({ feature: "set-view-context-property" });
            }),
            getViewContext: (0, D.dm)(
              () => (
                (0, $.Q6)({ feature: "set-view-context-property" }),
                c.getViewContext()
              ),
            ),
            setGlobalContext: (0, D.dm)((t) => {
              i.setContext(t), (0, $.Q6)({ feature: "set-global-context" });
            }),
            getGlobalContext: (0, D.dm)(() => i.getContext()),
            setGlobalContextProperty: (0, D.dm)((t, e) => {
              i.setContextProperty(t, e),
                (0, $.Q6)({ feature: "set-global-context" });
            }),
            removeGlobalContextProperty: (0, D.dm)((t) =>
              i.removeContextProperty(t),
            ),
            clearGlobalContext: (0, D.dm)(() => i.clearContext()),
            getInternalContext: (0, D.dm)((t) => c.getInternalContext(t)),
            getInitConfiguration: (0, D.dm)(() =>
              (0, A.Go)(c.initConfiguration),
            ),
            addAction: (t, e) => {
              let n = (0, U.uC)("action");
              (0, D.um)(() => {
                c.addAction({
                  name: (0, C.a)(t),
                  context: (0, C.a)(e),
                  startClocks: (0, q.M8)(),
                  type: "custom",
                  handlingStack: n,
                }),
                  (0, $.Q6)({ feature: "add-action" });
              });
            },
            addError: (t, e) => {
              let n = (0, U.uC)("error");
              (0, D.um)(() => {
                c.addError({
                  error: t,
                  handlingStack: n,
                  context: (0, C.a)(e),
                  startClocks: (0, q.M8)(),
                }),
                  (0, $.Q6)({ feature: "add-error" });
              });
            },
            addTiming: (0, D.dm)((t, e) => {
              c.addTiming((0, C.a)(t), e);
            }),
            setUser: (0, D.dm)((t) => {
              o.setContext(t), (0, $.Q6)({ feature: "set-user" });
            }),
            getUser: (0, D.dm)(o.getContext),
            setUserProperty: (0, D.dm)((t, e) => {
              o.setContextProperty(t, e), (0, $.Q6)({ feature: "set-user" });
            }),
            removeUserProperty: (0, D.dm)(o.removeContextProperty),
            clearUser: (0, D.dm)(o.clearContext),
            setAccount: (0, D.dm)(a.setContext),
            getAccount: (0, D.dm)(a.getContext),
            setAccountProperty: (0, D.dm)(a.setContextProperty),
            removeAccountProperty: (0, D.dm)(a.removeContextProperty),
            clearAccount: (0, D.dm)(a.clearContext),
            startView: d,
            stopSession: (0, D.dm)(() => {
              c.stopSession(), (0, $.Q6)({ feature: "stop-session" });
            }),
            addFeatureFlagEvaluation: (0, D.dm)((t, e) => {
              c.addFeatureFlagEvaluation((0, C.a)(t), (0, C.a)(e)),
                (0, $.Q6)({ feature: "add-feature-flag-evaluation" });
            }),
            getSessionReplayLink: (0, D.dm)(() => e.getSessionReplayLink()),
            startSessionReplayRecording: (0, D.dm)((t) => {
              e.start(t),
                (0, $.Q6)({
                  feature: "start-session-replay-recording",
                  force: t && t.force,
                });
            }),
            stopSessionReplayRecording: (0, D.dm)(() => e.stop()),
            addDurationVital: (0, D.dm)((t, e) => {
              (0, $.Q6)({ feature: "add-duration-vital" }),
                c.addDurationVital({
                  name: (0, C.a)(t),
                  type: "duration",
                  startClocks: (0, q.jR)(e.startTime),
                  duration: e.duration,
                  context: (0, C.a)(e && e.context),
                  description: (0, C.a)(e && e.description),
                });
            }),
            startDurationVital: (0, D.dm)(
              (t, e) => (
                (0, $.Q6)({ feature: "start-duration-vital" }),
                c.startDurationVital((0, C.a)(t), {
                  context: (0, C.a)(e && e.context),
                  description: (0, C.a)(e && e.description),
                })
              ),
            ),
            stopDurationVital: (0, D.dm)((t, e) => {
              (0, $.Q6)({ feature: "stop-duration-vital" }),
                c.stopDurationVital("string" == typeof t ? (0, C.a)(t) : t, {
                  context: (0, C.a)(e && e.context),
                  description: (0, C.a)(e && e.description),
                });
            }),
          });
        return f;
      }
      var tK = n(92935),
        tZ = n(9389),
        tJ = n(96178);
      function tY() {
        let t;
        let e = window;
        if (
          e.Zone &&
          ((t = (0, tJ.W)(e, "MutationObserver")),
          e.MutationObserver && t === e.MutationObserver)
        ) {
          let n = new e.MutationObserver(v.l),
            r = (0, tJ.W)(n, "originalInstance");
          t = r && r.constructor;
        }
        return t || (t = e.MutationObserver), t;
      }
      var tX = n(77826);
      function t0(t, e, n) {
        let r = 0,
          i = !1;
        return {
          isLimitReached() {
            if (
              (0 === r &&
                (0, ts.wg)(() => {
                  r = 0;
                }, q.iW),
              (r += 1) <= e || i)
            )
              return (i = !1), !1;
            if (r === e + 1) {
              i = !0;
              try {
                n({
                  message: `Reached max number of ${t}s by minute: ${e}`,
                  source: tX.g.AGENT,
                  startClocks: (0, q.M8)(),
                });
              } finally {
                i = !1;
              }
            }
            return !0;
          },
        };
      }
      var t1 = n(6085);
      function t2(t) {
        return "object" === (0, T.P)(t);
      }
      let t5 = {
          "view.name": "string",
          "view.url": "string",
          "view.referrer": "string",
        },
        t3 = { context: "object" },
        t6 = { service: "string", version: "string" };
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
      var t4 = n(17417);
      let t9 = 1 / 0,
        t7 = q.iW,
        et = null,
        ee = new Set();
      function en({ expireDelay: t, maxEntries: e }) {
        let n = [],
          r = [];
        et || (et = (0, ts.yb)(() => void ee.forEach((t) => t()), t7));
        let i = () => {
          let e = (0, q.$S)() - t;
          for (; n.length > 0 && n[n.length - 1].endTime < e; ) {
            let t = n.pop();
            t && r.push(t.startTime);
          }
        };
        return (
          ee.add(i),
          {
            add: function (t, r) {
              let i = {
                value: t,
                startTime: r,
                endTime: t9,
                remove: () => {
                  (0, t4.A)(n, i);
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
              let r = (0, q.Gw)(t, e);
              return n
                .filter((e) => e.startTime <= r && t <= e.endTime)
                .map((t) => t.value);
            },
            reset: function () {
              n = [];
            },
            stop: function () {
              ee.delete(i),
                0 === ee.size && et && ((0, ts.vG)(et), (et = null));
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
      let er = new WeakMap();
      function ei({ target: t, parameters: [e, n] }) {
        er.set(t, {
          state: "open",
          method: String(e).toUpperCase(),
          url: (0, Y.l2)(String(n)),
        });
      }
      function eo({ target: t }) {
        let e = er.get(t);
        e && (e.isAborted = !0);
      }
      var ea = n(50929);
      let es = "initial_document",
        el = [
          ["document", (t) => es === t],
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
      function eu(...t) {
        for (let e = 1; e < t.length; e += 1) if (t[e - 1] > t[e]) return !1;
        return !0;
      }
      function ec(t) {
        let { duration: e, startTime: n, responseEnd: r } = t;
        return 0 === e && n < r ? (0, q.vk)(n, r) : e;
      }
      function ed(t) {
        return t.duration >= 0;
      }
      function ef(t) {
        var e;
        let n = eu(
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
          r =
            !((e = t).redirectEnd > e.startTime) ||
            eu(t.startTime, t.redirectStart, t.redirectEnd, t.fetchStart);
        return n && r;
      }
      function ep(t, e, n) {
        if (t <= e && e <= n)
          return {
            duration: (0, q.Zj)((0, q.vk)(e, n)),
            start: (0, q.Zj)((0, q.vk)(t, e)),
          };
      }
      function eh(t) {
        return "" === t.nextHopProtocol ? void 0 : t.nextHopProtocol;
      }
      function eg(t) {
        return "" === t.deliveryType ? "other" : t.deliveryType;
      }
      function em(t) {
        return t && !tN.Ih.every((e) => t.includes(e));
      }
      let ey = /data:(.+)?(;base64)?,/g;
      function ev(t) {
        if (t.length <= 24e3);
        else if ("data:" === t.substring(0, 5))
          return (t = t.substring(0, 24e3)), !0;
        return !1;
      }
      function eb(t) {
        return `${t.match(ey)[0]}[...]`;
      }
      let e_ = 1;
      function ew() {
        let t = e_;
        return (e_ += 1), t;
      }
      function eS(t) {
        return (0, ta.Et)(t) && t < 0 ? void 0 : t;
      }
      function ek({ lifeCycle: t, isChildEvent: e, onChange: n = v.l }) {
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
      function ex(t, e) {
        return new E.c((n) => {
          var r;
          let i, o;
          if (!window.PerformanceObserver) return;
          let a = (t) => {
              let e = t.filter((t) => {
                var e;
                return !(
                  (e = t).entryType === m.RESOURCE &&
                  (!em(e.name) || !ed(e))
                );
              });
              e.length > 0 && n.notify(e);
            },
            s = !0,
            l = new PerformanceObserver(
              (0, D.dm)((t) => {
                s
                  ? (i = (0, ts.wg)(() => a(t.getEntries())))
                  : a(t.getEntries());
              }),
            );
          try {
            l.observe(e);
          } catch (t) {
            if (
              [m.RESOURCE, m.NAVIGATION, m.LONG_TASK, m.PAINT].includes(e.type)
            ) {
              e.buffered &&
                (i = (0, ts.wg)(() => a(performance.getEntriesByType(e.type))));
              try {
                l.observe({ entryTypes: [e.type] });
              } catch (t) {
                return;
              }
            }
          }
          return (
            (s = !1),
            (r = t),
            !c &&
              void 0 !== window.performance &&
              "getEntries" in performance &&
              "addEventListener" in performance &&
              (c = (0, N.q)(r, performance, "resourcetimingbufferfull", () => {
                performance.clearResourceTimings();
              })),
            eA(m.FIRST_INPUT) ||
              e.type !== m.FIRST_INPUT ||
              ({ stop: o } = (function (t, e) {
                let n = (0, q.x3)(),
                  r = !1,
                  { stop: i } = (0, N.l)(
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
                      var n, r;
                      if (!e.cancelable) return;
                      let i = {
                        entryType: "first-input",
                        processingStart: (0, q.$S)(),
                        processingEnd: (0, q.$S)(),
                        startTime: e.timeStamp,
                        duration: 0,
                        name: "",
                        cancelable: !1,
                        target: null,
                        toJSON: () => ({}),
                      };
                      "pointerdown" === e.type
                        ? ((n = t),
                          (r = i),
                          (0, N.l)(
                            n,
                            window,
                            ["pointerup", "pointercancel"],
                            (t) => {
                              "pointerup" === t.type && o(r);
                            },
                            { once: !0 },
                          ))
                        : o(i);
                    },
                    { passive: !0, capture: !0 },
                  );
                return { stop: i };
                function o(t) {
                  if (!r) {
                    (r = !0), i();
                    let o = t.processingStart - t.startTime;
                    o >= 0 && o < (0, q.x3)() - n && e(t);
                  }
                }
              })(t, (t) => {
                a([t]);
              })),
            () => {
              l.disconnect(), o && o(), (0, ts.DJ)(i);
            }
          );
        });
      }
      function eA(t) {
        return (
          window.PerformanceObserver &&
          void 0 !== PerformanceObserver.supportedEntryTypes &&
          PerformanceObserver.supportedEntryTypes.includes(t)
        );
      }
      !(function (t) {
        (t.EVENT = "event"),
          (t.FIRST_INPUT = "first-input"),
          (t.LARGEST_CONTENTFUL_PAINT = "largest-contentful-paint"),
          (t.LAYOUT_SHIFT = "layout-shift"),
          (t.LONG_TASK = "longtask"),
          (t.LONG_ANIMATION_FRAME = "long-animation-frame"),
          (t.NAVIGATION = "navigation"),
          (t.PAINT = "paint"),
          (t.RESOURCE = "resource");
      })(m || (m = {}));
      function eC(t, e, n) {
        let r;
        let i = !1,
          o = (0, ts.wg)(
            (0, D.dm)(() => u({ hadActivity: !1 })),
            100,
          ),
          a =
            void 0 !== n
              ? (0, ts.wg)(
                  (0, D.dm)(() => u({ hadActivity: !0, end: (0, q.nx)() })),
                  n,
                )
              : void 0,
          s = t.subscribe(({ isBusy: t }) => {
            (0, ts.DJ)(o), (0, ts.DJ)(r);
            let e = (0, q.nx)();
            t ||
              (r = (0, ts.wg)(
                (0, D.dm)(() => u({ hadActivity: !0, end: e })),
                100,
              ));
          }),
          l = () => {
            (i = !0),
              (0, ts.DJ)(o),
              (0, ts.DJ)(r),
              (0, ts.DJ)(a),
              s.unsubscribe();
          };
        function u(t) {
          !i && (l(), e(t));
        }
        return { stop: l };
      }
      function eE(t, e, n, r) {
        return new E.c((i) => {
          let o;
          let a = [],
            s = 0;
          return (
            a.push(
              e.subscribe(l),
              n.subscribe(l),
              ex(r, { type: m.RESOURCE }).subscribe((t) => {
                t.some((t) => !eT(r, t.name)) && l();
              }),
              t.subscribe(7, (t) => {
                !eT(r, t.url) &&
                  (void 0 === o && (o = t.requestIndex), (s += 1), l());
              }),
              t.subscribe(8, (t) => {
                !eT(r, t.url) &&
                  void 0 !== o &&
                  !(t.requestIndex < o) &&
                  ((s -= 1), l());
              }),
            ),
            () => {
              a.forEach((t) => t.unsubscribe());
            }
          );
          function l() {
            i.notify({ isBusy: s > 0 });
          }
        });
      }
      function eT(t, e) {
        return tz(t.excludedActivityUrls, e);
      }
      function eO(t) {
        return t.nodeType === Node.TEXT_NODE;
      }
      function eR(t) {
        return t.nodeType === Node.ELEMENT_NODE;
      }
      function eI(t) {
        return eR(t) && !!t.shadowRoot;
      }
      function eN(t) {
        return (
          !!t.host && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && eR(t.host)
        );
      }
      function eM(t) {
        return t.childNodes.length > 0 || eI(t);
      }
      function eP(t, e) {
        let n = t.firstChild;
        for (; n; ) e(n), (n = n.nextSibling);
        eI(t) && e(t.shadowRoot);
      }
      function ej(t) {
        return eN(t) ? t.host : t.parentNode;
      }
      let eD = {
          IGNORE: "ignore",
          HIDDEN: "hidden",
          ALLOW: tD.ALLOW,
          MASK: tD.MASK,
          MASK_USER_INPUT: tD.MASK_USER_INPUT,
        },
        e$ = "data-dd-privacy",
        eL = "hidden",
        eU = "***",
        eq =
          "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
        ez = {
          INPUT: !0,
          OUTPUT: !0,
          TEXTAREA: !0,
          SELECT: !0,
          OPTION: !0,
          DATALIST: !0,
          OPTGROUP: !0,
        };
      function eV(t, e, n) {
        if (n && n.has(t)) return n.get(t);
        let r = ej(t),
          i = r ? eV(r, e, n) : e,
          o = eB(eF(t), i);
        return n && n.set(t, o), o;
      }
      function eB(t, e) {
        switch (e) {
          case eD.HIDDEN:
          case eD.IGNORE:
            return e;
        }
        switch (t) {
          case eD.ALLOW:
          case eD.MASK:
          case eD.MASK_USER_INPUT:
          case eD.HIDDEN:
          case eD.IGNORE:
            return t;
          default:
            return e;
        }
      }
      function eF(t) {
        if (eR(t)) {
          if ("BASE" === t.tagName) return eD.ALLOW;
          if ("INPUT" === t.tagName) {
            if (
              "password" === t.type ||
              "email" === t.type ||
              "tel" === t.type ||
              "hidden" === t.type
            )
              return eD.MASK;
            let e = t.getAttribute("autocomplete");
            if (e && (e.startsWith("cc-") || e.endsWith("-password")))
              return eD.MASK;
          }
          return t.matches(eK(eD.HIDDEN))
            ? eD.HIDDEN
            : t.matches(eK(eD.MASK))
              ? eD.MASK
              : t.matches(eK(eD.MASK_USER_INPUT))
                ? eD.MASK_USER_INPUT
                : t.matches(eK(eD.ALLOW))
                  ? eD.ALLOW
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
                    : eD.IGNORE;
        }
      }
      function eH(t, e) {
        switch (e) {
          case eD.MASK:
          case eD.HIDDEN:
          case eD.IGNORE:
            return !0;
          case eD.MASK_USER_INPUT:
            return eO(t) ? eG(t.parentNode) : eG(t);
          default:
            return !1;
        }
      }
      function eG(t) {
        if (!t || t.nodeType !== t.ELEMENT_NODE) return !1;
        if ("INPUT" === t.tagName)
          switch (t.type) {
            case "button":
            case "color":
            case "reset":
            case "submit":
              return !1;
          }
        return !!ez[t.tagName];
      }
      let eW = (t) => t.replace(/\S/g, "x");
      function eQ(t, e, n) {
        var r;
        let i =
            null === (r = t.parentElement) || void 0 === r ? void 0 : r.tagName,
          o = t.textContent || "";
        if (!e || o.trim()) {
          if ("SCRIPT" === i) o = eU;
          else if (n === eD.HIDDEN) o = eU;
          else if (eH(t, n)) {
            if ("DATALIST" === i || "SELECT" === i || "OPTGROUP" === i) {
              if (!o.trim()) return;
            } else o = "OPTION" === i ? eU : eW(o);
          }
          return o;
        }
      }
      function eK(t) {
        return `[${e$}="${t}"], .dd-privacy-${t}`;
      }
      let eZ = "data-dd-action-name";
      function eJ(t, e) {
        let n = t.closest(`[${e}]`);
        if (n) return e2(e1(n.getAttribute(e).trim()));
      }
      let eY = [
          (t, e) => {
            if ("labels" in t && t.labels && t.labels.length > 0)
              return e3(t.labels[0], e);
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
              return e3(t, e, n);
          },
          (t) => e5(t, "aria-label"),
          (t, e, n) => {
            let r = t.getAttribute("aria-labelledby");
            if (r)
              return {
                name: r
                  .split(/\s+/)
                  .map((e) =>
                    (function (t, e) {
                      return t.ownerDocument
                        ? t.ownerDocument.getElementById(e)
                        : null;
                    })(t, e),
                  )
                  .filter((t) => !!t)
                  .map((t) => e6(t, e, n))
                  .join(" "),
                nameSource: "text_content",
              };
          },
          (t) => e5(t, "alt"),
          (t) => e5(t, "name"),
          (t) => e5(t, "title"),
          (t) => e5(t, "placeholder"),
          (t, e) => {
            if ("options" in t && t.options.length > 0)
              return e3(t.options[0], e);
          },
        ],
        eX = [(t, e, n) => e3(t, e, n)];
      function e0(t, e, n, r) {
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
              if (r) return { name: e2(e1(r)), nameSource: e };
            }
          }
          if ("FORM" === i.nodeName) break;
          (i = i.parentElement), (o += 1);
        }
      }
      function e1(t) {
        return t.replace(/\s+/g, " ");
      }
      function e2(t) {
        return t.length > 100 ? `${H(t, 100)} [...]` : t;
      }
      function e5(t, e) {
        return {
          name: t.getAttribute(e) || "",
          nameSource: "standard_attribute",
        };
      }
      function e3(t, e, n) {
        return { name: e6(t, e, n) || "", nameSource: "text_content" };
      }
      function e6(t, e, n) {
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
              i(`[${eZ}]`),
              e && i(`[${e}]`),
              n && i(`${eK(eD.HIDDEN)}, ${eK(eD.MASK)}`),
              r
            );
          }
          return t.textContent;
        }
      }
      let e8 = [
          eZ,
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
        e4 = [
          ne,
          function (t) {
            if (t.id && !nt(t.id)) return `#${CSS.escape(t.id)}`;
          },
        ],
        e9 = [
          ne,
          function (t) {
            if ("BODY" === t.tagName) return;
            let e = t.classList;
            for (let n = 0; n < e.length; n += 1) {
              let r = e[n];
              if (!nt(r)) return `${CSS.escape(t.tagName)}.${CSS.escape(r)}`;
            }
          },
          function (t) {
            return CSS.escape(t.tagName);
          },
        ];
      function e7(t, e) {
        let n;
        if (!t.isConnected) return;
        let r = t;
        for (; r && "HTML" !== r.nodeName; ) {
          let t = nn(r, e4, nr, e, n);
          if (t) return t;
          (n =
            nn(r, e9, ni, e, n) ||
            no(
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
      function nt(t) {
        return /[0-9]/.test(t);
      }
      function ne(t, e) {
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
            return `${CSS.escape(t.tagName)}[${e}="${CSS.escape(t.getAttribute(e))}"]`;
        }
      }
      function nn(t, e, n, r, i) {
        for (let o of e) {
          let e = o(t, r);
          if (e && n(t, e, i)) return no(e, i);
        }
      }
      function nr(t, e, n) {
        return 1 === t.ownerDocument.querySelectorAll(no(e, n)).length;
      }
      function ni(t, e, n) {
        let r;
        if (void 0 === n) r = (t) => t.matches(e);
        else {
          let t = no(`${e}:scope`, n);
          r = (e) => null !== e.querySelector(t);
        }
        let i = t.parentElement.firstElementChild;
        for (; i; ) {
          if (i !== t && r(i)) return !1;
          i = i.nextElementSibling;
        }
        return !0;
      }
      function no(t, e) {
        return e ? `${t}>${e}` : t;
      }
      let na = q.OY;
      function ns() {
        let t = window.getSelection();
        return !t || t.isCollapsed;
      }
      function nl(t) {
        return t.target instanceof Element && !1 !== t.isPrimary;
      }
      function nu(t) {
        return (
          !t.hasPageActivity &&
          !t.getUserActivity().input &&
          !t.getUserActivity().scroll &&
          !t.event.target.matches(
            'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="range"]),textarea,select,[contenteditable],[contenteditable] *,canvas,a[href],a[href] *',
          )
        );
      }
      let nc = 10 * q.OY,
        nd = new Map();
      function nf(t, e) {
        nd.set(t, e),
          nd.forEach((t, e) => {
            (0, q.vk)(e, (0, q.$S)()) > nc && nd.delete(e);
          });
      }
      let np = 5 * q.iW;
      function nh(t) {
        let e = ng(t)
            ? {
                action: {
                  id: t.id,
                  loading_time: eS((0, q.Zj)(t.duration)),
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
          n = (0, A.kg)(
            {
              action: { id: V(), target: { name: t.name }, type: t.type },
              date: t.startClocks.timeStamp,
              type: "action",
            },
            e,
          ),
          r = ng(t) ? t.duration : void 0,
          i = ng(t) ? void 0 : t.context,
          o = ng(t) ? { events: t.events } : { handlingStack: t.handlingStack };
        return {
          customerContext: i,
          rawRumEvent: n,
          duration: r,
          startTime: t.startClocks.relative,
          domainContext: o,
        };
      }
      function ng(t) {
        return "custom" !== t.type;
      }
      var nm = n(31195),
        ny = n(38513);
      let nv = {},
        nb = { intervention: "intervention", cspViolation: "csp_violation" };
      function n_(t) {
        return {
          startClocks: (0, q.M8)(),
          source: tX.g.REPORT,
          handling: "unhandled",
          ...t,
        };
      }
      function nw(t, e, n, r, i) {
        return n
          ? (0, U.Yn)({
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
      var nS = n(22167);
      let nk = q.OY,
        nx = new WeakSet();
      function nA(t) {
        return (0, q.Gw)(t.startTime, t.duration);
      }
      var nC = n(82328);
      let nE = 2 * q.iW;
      function nT(t, e) {
        let n = e && Number(e);
        if (t && n) return { traceId: t, traceTime: n };
      }
      function nO(t) {
        if (t && t.nodeType === Node.COMMENT_NODE) {
          let e = /^\s*DATADOG;(.*?)\s*$/.exec(t.data);
          if (e) return e[1];
        }
      }
      function nR() {
        if (eA(m.NAVIGATION)) {
          let t = performance.getEntriesByType(m.NAVIGATION)[0];
          if (t) return t;
        }
        let t = (function () {
            let t = {},
              e = performance.timing;
            for (let n in e)
              if ((0, ta.Et)(e[n])) {
                let r = e[n];
                t[n] = 0 === r ? 0 : (0, q.gs)(r);
              }
            return t;
          })(),
          e = {
            entryType: m.NAVIGATION,
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
      function nI(t, e) {
        var n;
        let r = (0, q.FR)(t.startTime),
          i = (function (t, e) {
            if (t.traceId)
              return {
                _dd: {
                  trace_id: t.traceId,
                  span_id: tV(63).toString(),
                  rule_psr: e.rulePsr,
                },
              };
          })(t, e);
        if (!e.trackResources && !i) return;
        let o = (function (t) {
            let e = t.name;
            if (!(0, Y.AY)(e))
              return (
                (0, $.A2)(`Failed to construct URL for "${t.name}"`), "other"
              );
            let n = (0, Y.L2)(e);
            for (let [e, r] of el) if (r(t.initiatorType, n)) return e;
            return "other";
          })(t),
          a = nN(t),
          s = ec(t),
          l = (0, A.kg)(
            {
              date: r.timeStamp,
              resource: {
                id: V(),
                type: o,
                duration: (0, q.Zj)(s),
                url: t.name,
                status_code: 0 === (n = t.responseStatus) ? void 0 : n,
                protocol: eh(t),
                delivery_type: eg(t),
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
          rawRumEvent: l,
          domainContext: { performanceEntry: t },
        };
      }
      function nN(t) {
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
              if (!ef(t)) return;
              let {
                  startTime: e,
                  fetchStart: n,
                  workerStart: r,
                  redirectStart: i,
                  redirectEnd: o,
                  domainLookupStart: a,
                  domainLookupEnd: s,
                  connectStart: l,
                  secureConnectionStart: u,
                  connectEnd: c,
                  requestStart: d,
                  responseStart: f,
                  responseEnd: p,
                } = t,
                h = { download: ep(e, f, p), first_byte: ep(e, d, f) };
              return (
                0 < r && r < n && (h.worker = ep(e, r, n)),
                n < c &&
                  ((h.connect = ep(e, l, c)),
                  l <= u && u <= c && (h.ssl = ep(e, u, c))),
                n < s && (h.dns = ep(e, a, s)),
                e < o && (h.redirect = ep(e, i, o)),
                h
              );
            })(t),
          },
        };
      }
      let nM = 10 * q.iW,
        nP = 10 * q.iW;
      function nj(t, e = window) {
        let n, r;
        return (
          "hidden" === document.visibilityState
            ? (n = 0)
            : ((n = 1 / 0),
              ({ stop: r } = (0, N.l)(
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
      function nD({ x: t, y: e, width: n, height: r }) {
        return { x: t, y: e, width: n, height: r };
      }
      let n$ = 5 * q.OY,
        nL = q.OY,
        nU = 0,
        nq = 1 / 0,
        nz = 0,
        nV = () => (d ? nU : window.performance.interactionCount || 0),
        nB = +q.iW;
      function nF() {
        let t;
        let e = window.visualViewport;
        return Math.round(
          e
            ? e.pageLeft - e.offsetLeft
            : void 0 !== window.scrollX
              ? window.scrollX
              : window.pageXOffset || 0,
        );
      }
      function nH() {
        let t;
        let e = window.visualViewport;
        return Math.round(
          e
            ? e.pageTop - e.offsetTop
            : void 0 !== window.scrollY
              ? window.scrollY
              : window.pageYOffset || 0,
        );
      }
      function nG(t) {
        var e;
        return (
          f ||
            ((e = t),
            (f = new E.c((t) => {
              let { throttled: n } = (0, v.n)(() => {
                t.notify(nW());
              }, 200);
              return (0, N.q)(e, window, "resize", n, {
                capture: !0,
                passive: !0,
              }).stop;
            }))),
          f
        );
      }
      function nW() {
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
      let nQ = q.OY,
        nK = 5 * q.iW,
        nZ = 5 * q.iW;
      function nJ(t) {
        let e = t.indexOf("?");
        return e < 0 ? t : t.slice(0, e);
      }
      let nY = q.iW,
        nX = [];
      function n0(t) {
        return "2" === t || "1" === t;
      }
      function n1(t) {
        let e;
        return {
          data:
            "string" == typeof t.output
              ? t.output
              : new Blob([t.output], { type: "text/plain" }),
          bytesCount: t.outputBytesCount,
          encoding: t.encoding,
        };
      }
      var n2 = n(65868);
      function n5(t) {
        return Object.prototype.hasOwnProperty.call(history, t)
          ? history
          : History.prototype;
      }
      let n3 = 10 * q.OY;
      function n6() {
        0 !== p.batchCount && ((0, $.A2)("Customer data measures", p), n7());
      }
      function n8() {
        return { min: 1 / 0, max: 0, sum: 0 };
      }
      function n4(t, e) {
        (t.sum += e),
          (t.min = Math.min(t.min, e)),
          (t.max = Math.max(t.max, e));
      }
      function n9(t, e) {
        (t.sum += e.sum),
          (t.min = Math.min(t.min, e.min)),
          (t.max = Math.max(t.max, e.max));
      }
      function n7() {
        p = {
          batchCount: 0,
          batchBytesCount: n8(),
          batchMessagesCount: n8(),
          globalContextBytes: n8(),
          userContextBytes: n8(),
          featureFlagBytes: n8(),
        };
      }
      function rt() {
        (g = !1),
          (h = {
            globalContextBytes: n8(),
            userContextBytes: n8(),
            featureFlagBytes: n8(),
          });
      }
      function re() {
        return "hidden" === document.visibilityState
          ? "hidden"
          : document.hasFocus()
            ? "active"
            : "passive";
      }
      let rn = q.OY;
      function rr(t, e) {
        let n = F(document.cookie, t),
          r = (0, ts.yb)(() => {
            let r = F(document.cookie, t);
            r !== n && e(r);
          }, rn);
        return () => {
          (0, ts.vG)(r);
        };
      }
      let ri = "datadog-ci-visibility-test-execution-id";
      function ro(t, e, n, r, i, o, a, s) {
        var c, f, S, k, x, O, I, M, P;
        let j;
        let L = [],
          z = new t8(),
          B = (function () {
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
                return (0, A.kg)(...r);
              },
            };
          })();
        z.subscribe(13, (t) => (0, tK.b)("rum", t));
        let Q = (function (t) {
          let e = (0, $.a5)("browser-rum-sdk", t);
          if ((0, Z.d0)()) {
            let t = (0, Z.Y9)();
            e.observable.subscribe((e) => t.send("internal_telemetry", e));
          }
          return e;
        })(t);
        Q.setContextProvider(() => {
          var e, n;
          return {
            application: { id: t.applicationId },
            session: {
              id:
                null === (e = to.findTrackedSession()) || void 0 === e
                  ? void 0
                  : e.id,
            },
            view: {
              id: null === (n = tx.findView()) || void 0 === n ? void 0 : n.id,
            },
            action: { id: tM.findActionId() },
          };
        });
        let K = (t) => {
            z.notify(14, { error: t }),
              (0, $.A2)("Error reported to customer", {
                "error.message": t.message,
              });
          },
          Y = (0, tZ.hL)(t),
          tn = Y.subscribe((t) => {
            z.notify(11, t);
          });
        L.push(() => tn.unsubscribe());
        let to = (0, Z.d0)()
          ? (function () {
              let t = {
                id: "00000000-aaaa-0000-aaaa-000000000000",
                sessionReplay: +!!(0, Z.Ww)("records"),
              };
              return {
                findTrackedSession: () => t,
                expire: v.l,
                expireObservable: new E.c(),
                setForcedReplay: v.l,
              };
            })()
          : (function (t, e, n) {
              let r = (function (t, e, n, r) {
                let i = new E.c(),
                  o = new E.c(),
                  a = (function (t, e, n, r) {
                    let i;
                    let o = new E.c(),
                      a = new E.c(),
                      s = new E.c(),
                      l =
                        t.type === th.COOKIE
                          ? (function (t, e) {
                              var n;
                              let r = {
                                isLockEnabled: (0, tl.F2)(),
                                persistSession:
                                  ((n = e),
                                  (t) => {
                                    te(tu, t_(t), tf, n);
                                  }),
                                retrieveSession: tk,
                                expireSession: (n) => {
                                  var r, i;
                                  return (
                                    (r = e),
                                    void te(
                                      tu,
                                      t_(tm(n, (i = t))),
                                      i.trackAnonymousUser ? tp : td,
                                      r,
                                    )
                                  );
                                },
                              };
                              return (
                                !(function (t) {
                                  if (!tr(tu)) {
                                    let e = tr("_dd"),
                                      n = tr("_dd_r"),
                                      r = tr("_dd_l"),
                                      i = {};
                                    e && (i.id = e),
                                      r && /^[01]$/.test(r) && (i.logs = r),
                                      n && /^[012]$/.test(n) && (i.rum = n),
                                      !ty(i) && (tb(i), t.persistSession(i));
                                  }
                                })(r),
                                r
                              );
                            })(e, t.cookieOptions)
                          : {
                              isLockEnabled: !1,
                              persistSession: tA,
                              retrieveSession: tC,
                              expireSession: (t) => {
                                tA(tm(t, e));
                              },
                            },
                      { expireSession: u } = l,
                      c = (0, ts.yb)(function () {
                        tT(
                          {
                            process: (t) => (tv(t) ? tm(t, e) : void 0),
                            after: p,
                          },
                          l,
                        );
                      }, tI);
                    h();
                    let { throttled: d, cancel: f } = (0, v.n)(() => {
                      tT(
                        {
                          process: (t) => {
                            if (ty(t)) return;
                            let e = p(t);
                            return (
                              (function (t) {
                                if (ty(t)) return 0;
                                let { trackingType: e, isTracked: i } = r(
                                  t.rum,
                                );
                                (t[n] = e),
                                  delete t.isExpired,
                                  i &&
                                    !t.id &&
                                    ((t.id = V()),
                                    (t.created = String((0, q.x3)())));
                              })(e),
                              e
                            );
                          },
                          after: (t) => {
                            if (!ty(t) && !g()) (i = t), o.notify();
                            i = t;
                          },
                        },
                        l,
                      );
                    }, tI);
                    function p(t) {
                      var r;
                      return (
                        tv(t) && (t = tm(t, e)),
                        g() &&
                          (((r = t), i.id !== r.id || i[n] !== r[n])
                            ? ((i = tm(i, e)), a.notify())
                            : (s.notify({ previousState: i, newState: t }),
                              (i = t))),
                        t
                      );
                    }
                    function h() {
                      tT(
                        {
                          process: (t) => {
                            if (ty(t)) return tm(t, e);
                          },
                          after: (t) => {
                            i = t;
                          },
                        },
                        l,
                      );
                    }
                    function g() {
                      return void 0 !== i[n];
                    }
                    return {
                      expandOrRenewSession: d,
                      expandSession: function () {
                        tT({ process: (t) => (g() ? p(t) : void 0) }, l);
                      },
                      getSession: () => i,
                      renewObservable: o,
                      expireObservable: a,
                      sessionStateUpdateObservable: s,
                      restartSession: h,
                      expire: () => {
                        f(), u(i), p(tm(i, e));
                      },
                      stop: () => {
                        (0, ts.vG)(c);
                      },
                      updateSessionState: function (t) {
                        tT({ process: (e) => ({ ...e, ...t }), after: p }, l);
                      },
                    };
                  })(t.sessionStoreStrategyType, t, "rum", n);
                nX.push(() => a.stop());
                let s = en({ expireDelay: td });
                function l() {
                  return {
                    id: a.getSession().id,
                    trackingType: a.getSession().rum,
                    isReplayForced: !!a.getSession().forcedReplay,
                    anonymousId: a.getSession().anonymousId,
                  };
                }
                return (
                  nX.push(() => s.stop()),
                  a.renewObservable.subscribe(() => {
                    s.add(l(), (0, q.$S)()), i.notify();
                  }),
                  a.expireObservable.subscribe(() => {
                    o.notify(), s.closeActive((0, q.$S)());
                  }),
                  a.expandOrRenewSession(),
                  s.add(l(), (0, q.Oc)().relative),
                  r.observable.subscribe(() => {
                    r.isGranted() ? a.expandOrRenewSession() : a.expire();
                  }),
                  (function (t, e) {
                    let { stop: n } = (0, N.l)(
                      t,
                      window,
                      ["click", "touchstart", "keydown", "scroll"],
                      e,
                      { capture: !0, passive: !0 },
                    );
                    nX.push(n);
                  })(t, () => {
                    r.isGranted() && a.expandOrRenewSession();
                  }),
                  (function (t, e) {
                    let n = () => {
                        "visible" === document.visibilityState && e();
                      },
                      { stop: r } = (0, N.q)(
                        t,
                        document,
                        "visibilitychange",
                        n,
                      );
                    nX.push(r);
                    let i = (0, ts.yb)(n, nY);
                    nX.push(() => {
                      (0, ts.vG)(i);
                    });
                  })(t, () => a.expandSession()),
                  (function (t, e) {
                    let { stop: n } = (0, N.q)(t, window, "resume", e, {
                      capture: !0,
                    });
                    nX.push(n);
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
                "rum",
                (e) => {
                  var n, r, i;
                  let o;
                  return (
                    (n = t),
                    {
                      trackingType: (o =
                        "0" === (i = r = e) || "1" === i || "2" === i
                          ? r
                          : (0, ta.ic)(n.sessionSampleRate)
                            ? (0, ta.ic)(n.sessionReplaySampleRate)
                              ? "1"
                              : "2"
                            : "0"),
                      isTracked: n0(o),
                    }
                  );
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
                    if (e && n0(e.trackingType))
                      return {
                        id: e.id,
                        sessionReplay:
                          "1" === e.trackingType ? 1 : 2 * !!e.isReplayForced,
                        anonymousId: e.anonymousId,
                      };
                  },
                  expire: r.expire,
                  expireObservable: r.expireObservable,
                  setForcedReplay: () =>
                    r.updateSessionState({ forcedReplay: "1" }),
                }
              );
            })(t, z, a);
        if ((0, Z.d0)())
          !(function (t) {
            let e = (0, Z.Y9)();
            t.subscribe(13, (t) => {
              e.send("rum", t);
            });
          })(z);
        else {
          let e = (function (t, e, n, r, i, o, a) {
            let s = t.replica,
              l = (function (
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
                        let r = (0, tc.KQ)(i).join("\n");
                        i = {};
                        let o = (0, tZ.Kp)(n.reason),
                          a = o ? e.sendOnExit : e.send;
                        if (o && t.isAsync) {
                          let e = t.finishSync();
                          e.outputBytesCount && a(n1(e));
                          let n = [e.pendingData, r].filter(Boolean).join("\n");
                          n && a({ data: n, bytesCount: (0, y.WW)(n) });
                        } else
                          r &&
                            t.write(
                              t.isEmpty
                                ? r
                                : `
${r}`,
                            ),
                            t.finish((t) => {
                              a(n1(t));
                            });
                      })(n),
                    );
                  function a(e, o) {
                    let a = (0, b.s)(e),
                      s = t.estimateEncodedBytesCount(a);
                    if (s >= r) {
                      _.Vy.warn(
                        `Discarded a message whose size was bigger than the maximum allowed size ${r}KB. ${_.xG} ${_.Xs}/#technical-limitations`,
                      );
                      return;
                    }
                    void 0 !== o &&
                      void 0 !== i[o] &&
                      !(function (e) {
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
                let s = u(t, e),
                  l = n && u(t, n);
                function u(t, { endpoint: e, encoder: n }) {
                  return a({
                    encoder: n,
                    request: (0, n2.sA)(e, t.batchBytesLimit, r),
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
                        l = new E.c(() => () => {
                          a.unsubscribe(), s.unsubscribe();
                        }),
                        u = 0,
                        c = 0;
                      function d(t) {
                        if (0 === c) return;
                        let e = c,
                          n = u;
                        (c = 0),
                          (u = 0),
                          f(),
                          l.notify({
                            reason: t,
                            messagesCount: e,
                            bytesCount: n,
                          });
                      }
                      function f() {
                        (0, ts.DJ)(o), (o = void 0);
                      }
                      return {
                        flushObservable: l,
                        get messagesCount() {
                          return c;
                        },
                        notifyBeforeAddMessage(t) {
                          u + t >= e && d("bytes_limit"),
                            (c += 1),
                            (u += t),
                            void 0 === o &&
                              (o = (0, ts.wg)(() => {
                                d("duration_limit");
                              }, n));
                        },
                        notifyAfterAddMessage(n = 0) {
                          (u += n),
                            c >= t
                              ? d("messages_limit")
                              : u >= e && d("bytes_limit");
                        },
                        notifyAfterRemoveMessage(t) {
                          (u -= t), 0 == (c -= 1) && f();
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
                      l &&
                        e &&
                        l.add(n.transformMessage ? n.transformMessage(t) : t);
                  },
                  upsert: (t, e) => {
                    s.upsert(t, e),
                      l &&
                        l.upsert(
                          n.transformMessage ? n.transformMessage(t) : t,
                          e,
                        );
                  },
                  stop: () => {
                    s.stop(), l && l.stop();
                  },
                };
              })(
                t,
                { endpoint: t.rumEndpointBuilder, encoder: a(2) },
                s && {
                  endpoint: s.rumEndpointBuilder,
                  transformMessage: (t) =>
                    (0, A.kg)(t, { application: { id: s.applicationId } }),
                  encoder: a(3),
                },
                r,
                i,
                o,
              );
            return (
              e.subscribe(13, (t) => {
                "view" === t.type ? l.upsert(t, t.view.id) : l.add(t);
              }),
              n.subscribe((e) => l.add(e, (0, $.Wb)(t))),
              l
            );
          })(t, z, Q.observable, K, Y, to.expireObservable, o);
          L.push(() => e.stop()),
            (x = t),
            (O = Q),
            (I = z),
            (M = n),
            (P = e.flushObservable),
            !(O.enabled && (0, ta.ic)(x.customerDataTelemetrySampleRate)) ||
              (n7(),
              rt(),
              I.subscribe(13, (t) => {
                (g = !0),
                  n4(
                    h.globalContextBytes,
                    M.getOrCreateTracker(2).getBytesCount(),
                  ),
                  n4(
                    h.userContextBytes,
                    M.getOrCreateTracker(1).getBytesCount(),
                  ),
                  n4(
                    h.featureFlagBytes,
                    ["view", "error"].includes(t.type)
                      ? M.getOrCreateTracker(0).getBytesCount()
                      : 0,
                  );
              }),
              P.subscribe(({ bytesCount: t, messagesCount: e }) => {
                g &&
                  ((p.batchCount += 1),
                  n4(p.batchBytesCount, t),
                  n4(p.batchMessagesCount, e),
                  n9(p.globalContextBytes, h.globalContextBytes),
                  n9(p.userContextBytes, h.userContextBytes),
                  n9(p.featureFlagBytes, h.featureFlagBytes),
                  rt());
              }),
              (0, ts.yb)(n6, n3));
        }
        let tg = (function () {
            let t = tY();
            return new E.c((e) => {
              if (!t) return;
              let n = new t((0, D.dm)(() => e.notify()));
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
          tw =
            ((f = location),
            (j = (0, w.yG)(f)),
            new E.c((e) => {
              var n, r;
              let { stop: i } = (function (t, e) {
                  let { stop: n } = (0, J.H)(
                      n5("pushState"),
                      "pushState",
                      ({ onPostCall: t }) => {
                        t(e);
                      },
                    ),
                    { stop: r } = (0, J.H)(
                      n5("replaceState"),
                      "replaceState",
                      ({ onPostCall: t }) => {
                        t(e);
                      },
                    ),
                    { stop: i } = (0, N.q)(t, window, "popstate", e);
                  return {
                    stop: () => {
                      n(), r(), i();
                    },
                  };
                })(t, a),
                { stop: o } =
                  ((n = t), (r = a), (0, N.q)(n, window, "hashchange", r));
              function a() {
                if (j.href === f.href) return;
                let t = (0, w.yG)(f);
                e.notify({ newLocation: t, oldLocation: j }), (j = t);
              }
              return () => {
                i(), o();
              };
            })),
          tS = (function (t, e, n = 500) {
            let r;
            let i = en({ expireDelay: td, maxEntries: 4e3 });
            a(re(), (0, q.$S)());
            let { stop: o } = (0, N.l)(
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
                var e;
                a(
                  "freeze" === (e = t).type
                    ? "frozen"
                    : "pagehide" === e.type
                      ? e.persisted
                        ? "frozen"
                        : "terminated"
                      : re(),
                  t.timeStamp,
                );
              },
              { capture: !0 },
            );
            function a(t, e = (0, q.$S)()) {
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
                                  start: (0, q.Zj)((0, q.vk)(e, n)),
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
          })(B, t),
          tx = (function (t) {
            let e = en({ expireDelay: td });
            return (
              t.subscribe(1, (t) => {
                var n;
                e.add(
                  {
                    service: (n = t).service,
                    version: n.version,
                    context: n.context,
                    id: n.id,
                    name: n.name,
                    startClocks: n.startClocks,
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
          })(z),
          tE = (function (t, e, n, r) {
            let i;
            let o = en({ expireDelay: td });
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
                let n = (0, q.$S)();
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
          })(z, B, tw, location),
          tO = (function (t, e, n, r) {
            let i = en({ expireDelay: td });
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
                if (!(!r || (0, w.RI)(r))) return { type: e, feature_flags: r };
              }),
              {
                addFeatureFlagEvaluation: (t, e) => {
                  let n = i.find();
                  n && ((n[t] = e), r.updateCustomerData(n));
                },
                stop: () => r.stop(),
              }
            );
          })(z, B, t, n.getOrCreateTracker(0));
        L.push(() => tO.stop());
        let { observable: tR, stop: tN } = (function () {
          let t = new E.c(),
            { stop: e } = (0, J.H)(window, "open", () => t.notify());
          return { observable: t, stop: e };
        })();
        L.push(tN);
        let {
          actionContexts: tM,
          addAction: tP,
          stop: tj,
        } = (function (t, e, n, r, i, o, a, s, u, c, d) {
          let f, p;
          let h =
              (t.subscribe(0, (e) => t.notify(12, nh(e))),
              e.register(0, ({ startTime: t, eventType: e }) => {
                if ("error" !== e && "resource" !== e && "long_task" !== e)
                  return;
                let n = f.findActionId(t);
                if (n) return { type: e, action: { id: n } };
              }),
              (f = { findActionId: v.l }),
              (p = v.l),
              n.trackUserInteractions &&
                ({ actionContexts: f, stop: p } = (function (t, e, n, r) {
                  let i;
                  let o = en({ expireDelay: np }),
                    a = new E.c();
                  t.subscribe(10, () => {
                    o.reset();
                  }),
                    t.subscribe(5, u);
                  let { stop: s } = (function (
                    t,
                    { onPointerDown: e, onPointerUp: n },
                  ) {
                    let r, i;
                    let o = { selection: !1, input: !1, scroll: !1 },
                      a = [
                        (0, N.q)(
                          t,
                          window,
                          "pointerdown",
                          (t) => {
                            nl(t) &&
                              ((r = ns()),
                              (o = { selection: !1, input: !1, scroll: !1 }),
                              (i = e(t)));
                          },
                          { capture: !0 },
                        ),
                        (0, N.q)(
                          t,
                          window,
                          "selectionchange",
                          () => {
                            (r && ns()) || (o.selection = !0);
                          },
                          { capture: !0 },
                        ),
                        (0, N.q)(
                          t,
                          window,
                          "scroll",
                          () => {
                            o.scroll = !0;
                          },
                          { capture: !0, passive: !0 },
                        ),
                        (0, N.q)(
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
                        (0, N.q)(
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
                        let o = t.enablePrivacyForActionName
                          ? eV(r.target, t.defaultPrivacyLevel)
                          : eD.ALLOW;
                        if (o === eD.HIDDEN) return;
                        let a = (function (t, e, n) {
                            let r = t.target.getBoundingClientRect(),
                              i = e7(t.target, n.actionNameAttribute);
                            i && nf(t.timeStamp, i);
                            let o = (function (
                              t,
                              {
                                enablePrivacyForActionName: e,
                                actionNameAttribute: n,
                              },
                              r,
                            ) {
                              let i = eJ(t, eZ) || (n && eJ(t, n));
                              return i
                                ? { name: i, nameSource: "custom_attribute" }
                                : r === eD.MASK
                                  ? {
                                      name: "Masked Element",
                                      nameSource: "mask_placeholder",
                                    }
                                  : e0(t, n, eY, e) ||
                                    e0(t, n, eX, e) || {
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
                          })(r, o, t),
                          s = !1;
                        return (
                          eC(
                            eE(e, n, i, t),
                            (t) => {
                              s = t.hadActivity;
                            },
                            100,
                          ),
                          {
                            clickActionBase: a,
                            hadActivityOnPointerDown: () => s,
                          }
                        );
                      })(r, t, e, i, n),
                    onPointerUp: (
                      { clickActionBase: i, hadActivityOnPointerDown: s },
                      u,
                      c,
                    ) => {
                      (function (t, e, n, r, i, o, a, s, l, u, c) {
                        var d;
                        let f = (function t(e, n, r, i, o) {
                          let a;
                          let s = V(),
                            l = (0, q.M8)(),
                            u = n.add(s, l.relative),
                            c = ek({
                              lifeCycle: e,
                              isChildEvent: (t) =>
                                void 0 !== t.action &&
                                (Array.isArray(t.action.id)
                                  ? t.action.id.includes(s)
                                  : t.action.id === s),
                            }),
                            d = 0,
                            f = [],
                            p = new E.c();
                          function h(t) {
                            0 === d &&
                              ((d = 1),
                              (a = t) ? u.close((0, q.gs)(a)) : u.remove(),
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
                            startClocks: l,
                            isStopped: () => 1 === d || 2 === d,
                            clone: () => t(e, n, r, i, o),
                            validate: (t) => {
                              if ((h(), 1 !== d)) return;
                              let {
                                  resourceCount: n,
                                  errorCount: r,
                                  longTaskCount: u,
                                } = c.eventCounts,
                                p = {
                                  duration: a && (0, q.vk)(l.timeStamp, a),
                                  startClocks: l,
                                  id: s,
                                  frustrationTypes: f,
                                  counts: {
                                    resourceCount: n,
                                    errorCount: r,
                                    longTaskCount: u,
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
                        })(e, i, u, s, l);
                        a(f);
                        let p =
                          null === (d = null == s ? void 0 : s.target) ||
                          void 0 === d
                            ? void 0
                            : d.selector;
                        p && nf(l.timeStamp, p);
                        let { stop: h } = eC(
                            eE(e, n, r, t),
                            (t) => {
                              t.hadActivity && t.end < f.startClocks.timeStamp
                                ? f.discard()
                                : t.hadActivity
                                  ? f.stop(t.end)
                                  : c()
                                    ? f.stop(f.startClocks.timeStamp)
                                    : f.stop();
                            },
                            nc,
                          ),
                          g = e.subscribe(5, ({ endClocks: t }) => {
                            f.stop(t.timeStamp);
                          }),
                          m = o.subscribe(() => {
                            f.stop();
                          });
                        f.stopObservable.subscribe(() => {
                          g.unsubscribe(), h(), m.unsubscribe();
                        });
                      })(r, t, e, n, o, a, l, i, u, c, s);
                    },
                  });
                  return {
                    stop: () => {
                      u(), a.notify(), s();
                    },
                    actionContexts: { findActionId: (t) => o.findAll(t) },
                  };
                  function l(t) {
                    if (!i || !i.tryAppend(t)) {
                      let e = t.clone();
                      i = (function (t, e) {
                        let n;
                        let r = [],
                          i = 0;
                        function o(t) {
                          t.stopObservable.subscribe(a),
                            r.push(t),
                            (0, ts.DJ)(n),
                            (n = (0, ts.wg)(s, na));
                        }
                        function a() {
                          1 === i &&
                            r.every((t) => t.isStopped()) &&
                            ((i = 2), e(r));
                        }
                        function s() {
                          (0, ts.DJ)(n), 0 === i && ((i = 1), a());
                        }
                        return (
                          o(t),
                          {
                            tryAppend: (t) => {
                              var e, n, a, l;
                              return (
                                0 === i &&
                                (!(r.length > 0) ||
                                ((e = r[r.length - 1].event),
                                (n = t.event),
                                e.target === n.target &&
                                  100 >=
                                    ((a = e),
                                    (l = n),
                                    Math.sqrt(
                                      Math.pow(a.clientX - l.clientX, 2) +
                                        Math.pow(a.clientY - l.clientY, 2),
                                    )) &&
                                  e.timeStamp - n.timeStamp <= na)
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
                                    q.OY
                                  )
                                    return !0;
                                return !1;
                              })(t)
                            )
                              return (
                                e.addFrustration("rage_click"),
                                t.some(nu) && e.addFrustration("dead_click"),
                                e.hasError && e.addFrustration("error_click"),
                                { isRage: !0 }
                              );
                            let n = t.some(
                              (t) => t.getUserActivity().selection,
                            );
                            return (
                              t.forEach((t) => {
                                t.hasError && t.addFrustration("error_click"),
                                  nu(t) && !n && t.addFrustration("dead_click");
                              }),
                              { isRage: !1 }
                            );
                          })(t, e);
                          n
                            ? (t.forEach((t) => t.discard()),
                              e.stop((0, q.nx)()),
                              e.validate(t.map((t) => t.event)))
                            : (e.discard(), t.forEach((t) => t.validate()));
                        })(t, e);
                      });
                    }
                  }
                  function u() {
                    i && i.stop();
                  }
                })(t, o, a, n)),
              {
                addAction: (e, n) => {
                  t.notify(12, { savedCommonContext: n, ...nh(e) });
                },
                actionContexts: f,
                stop: p,
              }),
            g = (function (t) {
              let e;
              let n = requestAnimationFrame(
                  (0, D.dm)(() => {
                    e = nW();
                  }),
                ),
                r = nG(t).subscribe((t) => {
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
                        (0, N.q)(t, window.cookieStore, "change", (t) => {
                          let r =
                            t.changed.find((t) => t.name === e) ||
                            t.deleted.find((t) => t.name === e);
                          r && n(r.value);
                        }).stop;
                    })(t)
                  : rr;
                return new E.c((t) => n(e, (e) => t.notify(e)));
              })(t, ri),
            ) {
              var r;
              let i =
                  tr(ri) ||
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
                      tr("datadog-synthetics-public-id");
                    return "string" == typeof t ? t : void 0;
                  })(),
                  n = (function () {
                    let t =
                      window._DATADOG_SYNTHETICS_RESULT_ID ||
                      tr("datadog-synthetics-result-id");
                    return "string" == typeof t ? t : void 0;
                  })();
                if (e && n)
                  return {
                    type: t,
                    session: { type: "synthetics" },
                    synthetics: { test_id: e, result_id: n, injected: ti() },
                  };
              });
            })(e),
            !(function (t, e, n, r, i, o, a, s, u) {
              l = {
                view: {
                  "view.performance.lcp.resource_url": "string",
                  ...t3,
                  ...t5,
                },
                error: {
                  "error.message": "string",
                  "error.stack": "string",
                  "error.resource.url": "string",
                  "error.fingerprint": "string",
                  ...t3,
                  ...t5,
                  ...t6,
                },
                resource: {
                  "resource.url": "string",
                  ...((0, tt.sr)(tt.R9.WRITABLE_RESOURCE_GRAPHQL)
                    ? { "resource.graphql": "object" }
                    : {}),
                  ...t3,
                  ...t5,
                  ...t6,
                },
                action: { "action.target.name": "string", ...t3, ...t5, ...t6 },
                long_task: {
                  "long_task.scripts[].source_url": "string",
                  "long_task.scripts[].invoker": "string",
                  ...t3,
                  ...t5,
                },
                vital: { ...t3, ...t5 },
              };
              let c = {
                error: t0("error", t.eventRateLimiterThreshold, u),
                action: t0("action", t.eventRateLimiterThreshold, u),
                vital: t0("vital", t.eventRateLimiterThreshold, u),
              };
              e.subscribe(
                12,
                ({
                  startTime: u,
                  duration: d,
                  rawRumEvent: f,
                  domainContext: p,
                  savedCommonContext: h,
                  customerContext: g,
                }) => {
                  let m = i.findView(u),
                    y = o.findUrl(u),
                    v = r.findTrackedSession(u);
                  if (
                    (v &&
                      m &&
                      !y &&
                      (0, tt.sr)(tt.R9.MISSING_URL_CONTEXT_TELEMETRY) &&
                      (0, $.A2)("Missing URL entry", {
                        debug: {
                          eventType: f.type,
                          startTime: u,
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
                          drift: (0, q.TP)(),
                          configuration: {
                            session_sample_rate: (0, ta.LI)(
                              t.sessionSampleRate,
                              3,
                            ),
                            session_replay_sample_rate: (0, ta.LI)(
                              t.sessionReplaySampleRate,
                              3,
                            ),
                          },
                          browser_sdk_version: (0, Z.d0)() ? "6.5.1" : void 0,
                        },
                        application: { id: t.applicationId },
                        date: (0, q.nx)(),
                        source: "browser",
                        session: { id: v.id, type: "user" },
                        display: a.get(),
                        connectivity: (0, t1.q)(),
                        context: r.context,
                      },
                      o = (0, A.kg)(
                        i,
                        n.triggerHook(0, {
                          eventType: f.type,
                          startTime: u,
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
                      (0, w.RI)(r.user) || (o.usr = r.user),
                      !(0, w.RI)(r.account) &&
                        r.account.id &&
                        (o.account = r.account),
                      (function (t, e, n, r) {
                        var i;
                        if (e) {
                          let r = (function (t, e, n) {
                            let r = (0, A.Go)(t),
                              i = n(r);
                            return (
                              (0, tc.WP)(e).forEach(([e, n]) =>
                                (function t(e, n, r, i) {
                                  let [o, ...a] = r;
                                  if ("[]" === o) {
                                    Array.isArray(e) &&
                                      Array.isArray(n) &&
                                      e.forEach((e, r) => t(e, n[r], a, i));
                                    return;
                                  }
                                  if (t2(e) && t2(n)) {
                                    if (a.length > 0)
                                      return t(e[o], n[o], a, i);
                                    (function (t, e, n, r) {
                                      let i = (0, T.P)(n);
                                      i === r
                                        ? (t[e] = (0, C.a)(n))
                                        : "object" === r &&
                                          ("undefined" === i || "null" === i) &&
                                          (t[e] = {});
                                    })(e, o, n[o], i);
                                  }
                                })(t, r, e.split(/\.|(?=\[\])/), n),
                              ),
                              i
                            );
                          })(t, l[t.type], (t) => e(t, n));
                          if (!1 === r && "view" !== t.type) return !1;
                          !1 === r &&
                            _.Vy.warn(
                              "Can't dismiss view events using beforeSend!",
                            );
                        }
                        return !(null === (i = r[t.type]) || void 0 === i
                          ? void 0
                          : i.isLimitReached());
                      })(o, t.beforeSend, p, c) &&
                        ((0, w.RI)(o.context) && delete o.context,
                        e.notify(13, o));
                  }
                },
              );
            })(n, t, e, r, u, s, g, c, d),
            {
              pageStateHistory: i,
              addAction: h.addAction,
              actionContexts: h.actionContexts,
              stop: () => {
                h.stop(), m.stop(), g.stop(), u.stop(), i.stop(), s.stop();
              },
            }
          );
        })(z, B, t, to, tS, tg, tR, tE, tx, r, K);
        L.push(tj), (0, $.JK)();
        let {
          addTiming: tD,
          startView: t$,
          setViewName: tL,
          setViewContext: tU,
          setViewContextProperty: tq,
          getViewContext: tz,
          stop: tV,
        } = ((S = location),
        z.subscribe(4, (n) =>
          z.notify(
            12,
            (function (t, e, n) {
              var r, i, o, a, s, l, u, c, d, f, p, h, g, m, y, v, b, _;
              let S = n.getReplayStats(t.id),
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
                    replay_stats: S,
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
                    cumulative_layout_shift_time: (0, q.Zj)(
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
                    first_byte: (0, q.Zj)(
                      null === (l = t.initialViewMetrics.navigationTimings) ||
                        void 0 === l
                        ? void 0
                        : l.firstByte,
                    ),
                    dom_complete: (0, q.Zj)(
                      null === (u = t.initialViewMetrics.navigationTimings) ||
                        void 0 === u
                        ? void 0
                        : u.domComplete,
                    ),
                    dom_content_loaded: (0, q.Zj)(
                      null === (c = t.initialViewMetrics.navigationTimings) ||
                        void 0 === c
                        ? void 0
                        : c.domContentLoaded,
                    ),
                    dom_interactive: (0, q.Zj)(
                      null === (d = t.initialViewMetrics.navigationTimings) ||
                        void 0 === d
                        ? void 0
                        : d.domInteractive,
                    ),
                    error: { count: t.eventCounts.errorCount },
                    first_contentful_paint: (0, q.Zj)(
                      t.initialViewMetrics.firstContentfulPaint,
                    ),
                    first_input_delay: (0, q.Zj)(
                      null === (f = t.initialViewMetrics.firstInput) ||
                        void 0 === f
                        ? void 0
                        : f.delay,
                    ),
                    first_input_time: (0, q.Zj)(
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
                    interaction_to_next_paint: (0, q.Zj)(
                      null ===
                        (g = t.commonViewMetrics.interactionToNextPaint) ||
                        void 0 === g
                        ? void 0
                        : g.value,
                    ),
                    interaction_to_next_paint_time: (0, q.Zj)(
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
                    largest_contentful_paint: (0, q.Zj)(
                      null ===
                        (v = t.initialViewMetrics.largestContentfulPaint) ||
                        void 0 === v
                        ? void 0
                        : v.value,
                    ),
                    largest_contentful_paint_target_selector:
                      null ===
                        (b = t.initialViewMetrics.largestContentfulPaint) ||
                      void 0 === b
                        ? void 0
                        : b.targetSelector,
                    load_event: (0, q.Zj)(
                      null === (_ = t.initialViewMetrics.navigationTimings) ||
                        void 0 === _
                        ? void 0
                        : _.loadEvent,
                    ),
                    loading_time: eS(
                      (0, q.Zj)(t.commonViewMetrics.loadingTime),
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
                          timestamp: (0, q.Zj)(t.time),
                          target_selector: t.targetSelector,
                          previous_rect: t.previousRect,
                          current_rect: t.currentRect,
                        },
                        fcp: n && { timestamp: (0, q.Zj)(n) },
                        fid: r && {
                          duration: (0, q.Zj)(r.delay),
                          timestamp: (0, q.Zj)(r.time),
                          target_selector: r.targetSelector,
                        },
                        inp: e && {
                          duration: (0, q.Zj)(e.value),
                          timestamp: (0, q.Zj)(e.time),
                          target_selector: e.targetSelector,
                        },
                        lcp: i && {
                          timestamp: (0, q.Zj)(i.value),
                          target_selector: i.targetSelector,
                          resource_url: i.resourceUrl,
                        },
                      };
                    })(t.commonViewMetrics, t.initialViewMetrics),
                    resource: { count: t.eventCounts.resourceCount },
                    time_spent: (0, q.Zj)(t.duration),
                  },
                  display: t.commonViewMetrics.scroll
                    ? {
                        scroll: {
                          max_depth: t.commonViewMetrics.scroll.maxDepth,
                          max_depth_scroll_top:
                            t.commonViewMetrics.scroll.maxDepthScrollTop,
                          max_scroll_height:
                            t.commonViewMetrics.scroll.maxScrollHeight,
                          max_scroll_height_time: (0, q.Zj)(
                            t.commonViewMetrics.scroll.maxScrollHeightTime,
                          ),
                        },
                      }
                    : void 0,
                  session: {
                    has_replay: !!S || void 0,
                    is_active: !!t.sessionIsActive && void 0,
                  },
                  privacy: { replay_level: e.defaultPrivacyLevel },
                };
              return (
                (0, w.RI)(t.customTimings) ||
                  (x.view.custom_timings = (0, w.LG)(t.customTimings, q.Zj)),
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
        B.register(0, ({ startTime: t, eventType: e }) => {
          let {
            service: n,
            version: r,
            id: i,
            name: o,
            context: a,
          } = tx.findView(t);
          return {
            type: e,
            service: n,
            version: r,
            context: a,
            view: { id: i, name: o },
          };
        }),
        (function (t, e, n, r, i, o, a, s) {
          let l;
          let u = new Set(),
            c = f("initial_load", (0, q.Oc)(), s);
          function f(o, a, s) {
            let l = (function (t, e, n, r, i, o, a = (0, q.M8)(), s) {
              let l;
              let u = V(),
                c = new E.c(),
                f = {},
                p = 0,
                h = (0, w.yG)(i),
                g = R(),
                y = !0,
                b = null == s ? void 0 : s.name,
                S = (null == s ? void 0 : s.service) || r.service,
                k = (null == s ? void 0 : s.version) || r.version,
                x = null == s ? void 0 : s.context;
              x && g.setContext(x);
              let A = {
                id: u,
                name: b,
                startClocks: a,
                service: S,
                version: k,
                context: x,
              };
              t.notify(1, A), t.notify(2, A);
              let { throttled: C, cancel: T } = (0, v.n)(G, 3e3, {
                  leading: !1,
                }),
                {
                  setLoadEvent: O,
                  setViewEnd: I,
                  stop: M,
                  stopINPTracking: P,
                  getCommonViewMetrics: j,
                } = (function (t, e, n, r, i, o, a) {
                  let s = {},
                    { stop: l, setLoadEvent: u } = (function (
                      t,
                      e,
                      n,
                      r,
                      i,
                      o,
                      a,
                    ) {
                      let s = "initial_load" === i,
                        l = !0,
                        u = [],
                        c = nj(r);
                      function d() {
                        if (!l && !s && u.length > 0) {
                          let t = Math.max(...u);
                          t < c.timeStamp && a(t);
                        }
                      }
                      let { stop: f } = eC(
                        eE(t, e, n, r),
                        (t) => {
                          l &&
                            ((l = !1),
                            t.hadActivity &&
                              u.push((0, q.vk)(o.timeStamp, t.end)),
                            d());
                        },
                        void 0,
                      );
                      return {
                        stop: () => {
                          f(), c.stop();
                        },
                        setLoadEvent: (t) => {
                          s && ((s = !1), u.push(t), d());
                        },
                      };
                    })(t, e, n, r, o, a, (t) => {
                      (s.loadingTime = t), i();
                    }),
                    { stop: c } = (function (
                      t,
                      e,
                      n,
                      r = (function (t, e = nQ) {
                        return new E.c((n) => {
                          if (window.ResizeObserver) {
                            let r = (0, v.n)(
                                function () {
                                  n.notify(
                                    (function () {
                                      let t = nH(),
                                        { height: e } = nW();
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
                              o = new ResizeObserver((0, D.dm)(r.throttled));
                            i && o.observe(i);
                            let a = (0, N.q)(t, window, "scroll", r.throttled, {
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
                            let l = !1;
                            if ((t > i && ((i = t), (l = !0)), s > o)) {
                              o = s;
                              let t = (0, q.$S)();
                              (a = (0, q.vk)(e.relative, t)), (l = !0);
                            }
                            l &&
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
                      if (!(eA(m.LAYOUT_SHIFT) && "WeakRef" in window))
                        return { stop: v.l };
                      let l = 0;
                      n({ value: 0 });
                      let u =
                          ((a = 0),
                          (s = 0),
                          {
                            update: (t) => {
                              let e;
                              return (
                                void 0 === i ||
                                t.startTime - o >= nL ||
                                t.startTime - i >= n$
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
                        c = ex(t, {
                          type: m.LAYOUT_SHIFT,
                          buffered: !0,
                        }).subscribe((i) => {
                          var o;
                          for (let a of i) {
                            if (a.hadRecentInput || a.startTime < e) continue;
                            let { cumulatedValue: i, isMaxValue: s } =
                              u.update(a);
                            if (s) {
                              let t = a.sources.find(
                                (t) => !!t.node && eR(t.node),
                              );
                              r = {
                                target: (null == t ? void 0 : t.node)
                                  ? new WeakRef(t.node)
                                  : void 0,
                                time: (0, q.vk)(e, a.startTime),
                                previousRect:
                                  null == t ? void 0 : t.previousRect,
                                currentRect: null == t ? void 0 : t.currentRect,
                                devicePixelRatio: window.devicePixelRatio,
                              };
                            }
                            if (i > l) {
                              l = i;
                              let e =
                                null === (o = null == r ? void 0 : r.target) ||
                                void 0 === o
                                  ? void 0
                                  : o.deref();
                              n({
                                value: (0, ta.LI)(l, 4),
                                targetSelector:
                                  e && e7(e, t.actionNameAttribute),
                                time: null == r ? void 0 : r.time,
                                previousRect: (
                                  null == r ? void 0 : r.previousRect
                                )
                                  ? nD(r.previousRect)
                                  : void 0,
                                currentRect: (
                                  null == r ? void 0 : r.currentRect
                                )
                                  ? nD(r.currentRect)
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
                          eA(m.EVENT) &&
                          window.PerformanceEventTiming &&
                          "interactionId" in PerformanceEventTiming.prototype
                        )
                      )
                        return {
                          getInteractionToNextPaint: () => void 0,
                          setViewEnd: v.l,
                          stop: v.l,
                        };
                      let {
                          getViewInteractionCount: o,
                          stopViewInteractionCount: a,
                        } = (function (t) {
                          "interactionCount" in performance ||
                            d ||
                            (d = new window.PerformanceObserver(
                              (0, D.dm)((t) => {
                                t.getEntries().forEach((t) => {
                                  t.interactionId &&
                                    ((nq = Math.min(nq, t.interactionId)),
                                    (nU =
                                      ((nz = Math.max(nz, t.interactionId)) -
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
                          let e = "initial_load" === t ? 0 : nV(),
                            n = { stopped: !1 };
                          return {
                            getViewInteractionCount: () =>
                              n.stopped ? n.interactionCount : nV() - e,
                            stopViewInteractionCount: () => {
                              n = { stopped: !0, interactionCount: nV() - e };
                            },
                          };
                        })(n),
                        s = 1 / 0,
                        l = (function (t) {
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
                        u = -1;
                      function c(n) {
                        for (let t of n)
                          t.interactionId &&
                            t.startTime >= e &&
                            t.startTime <= s &&
                            l.process(t);
                        let o = l.estimateP98Interaction();
                        o &&
                          o.duration !== u &&
                          ((u = o.duration),
                          (i = (0, q.vk)(e, o.startTime)),
                          !(r = (function (t) {
                            let e = nd.get(t);
                            return nd.delete(t), e;
                          })(o.startTime)) &&
                            o.target &&
                            eR(o.target) &&
                            (r = e7(o.target, t.actionNameAttribute)));
                      }
                      let f = ex(t, {
                          type: m.FIRST_INPUT,
                          buffered: !0,
                        }).subscribe(c),
                        p = ex(t, {
                          type: m.EVENT,
                          durationThreshold: 40,
                          buffered: !0,
                        }).subscribe(c);
                      return {
                        getInteractionToNextPaint: () =>
                          u >= 0
                            ? {
                                value: Math.min(u, nB),
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
                      l(), f(), c();
                    },
                    stopINPTracking: p,
                    setLoadEvent: u,
                    setViewEnd: g,
                    getCommonViewMetrics: () => (
                      (s.interactionToNextPaint = h()), s
                    ),
                  };
                })(t, e, n, r, H, o, a),
                { stop: $, initialViewMetrics: L } =
                  "initial_load" === o
                    ? (function (t, e, n) {
                        var r;
                        let i = {},
                          { stop: o } = (function (t, e, n = nR) {
                            return (function (t, e) {
                              let n;
                              let { stop: r } = (0, nC.H)(t, "complete", () => {
                                n = (0, ts.wg)(() => e());
                              });
                              return {
                                stop: () => {
                                  r(), (0, ts.DJ)(n);
                                },
                              };
                            })(t, () => {
                              var t;
                              let r = n();
                              r.loadEventEnd <= 0 ||
                                e({
                                  domComplete: (t = r).domComplete,
                                  domContentLoaded: t.domContentLoadedEventEnd,
                                  domInteractive: t.domInteractive,
                                  loadEvent: t.loadEventEnd,
                                  firstByte:
                                    t.responseStart >= 0 &&
                                    t.responseStart <= (0, q.$S)()
                                      ? t.responseStart
                                      : void 0,
                                });
                            });
                          })(t, (t) => {
                            e(t.loadEvent), (i.navigationTimings = t), n();
                          }),
                          a = nj(t),
                          { stop: s } =
                            ((r = (t) => {
                              (i.firstContentfulPaint = t), n();
                            }),
                            {
                              stop: ex(t, {
                                type: m.PAINT,
                                buffered: !0,
                              }).subscribe((t) => {
                                let e = t.find(
                                  (t) =>
                                    "first-contentful-paint" === t.name &&
                                    t.startTime < a.timeStamp &&
                                    t.startTime < nM,
                                );
                                e && r(e.startTime);
                              }).unsubscribe,
                            }),
                          { stop: l } = (function (t, e, n, r) {
                            let i = 1 / 0,
                              { stop: o } = (0, N.l)(
                                t,
                                n,
                                ["pointerdown", "keydown"],
                                (t) => {
                                  i = t.timeStamp;
                                },
                                { capture: !0, once: !0 },
                              ),
                              a = 0,
                              s = ex(t, {
                                type: m.LARGEST_CONTENTFUL_PAINT,
                                buffered: !0,
                              }).subscribe((n) => {
                                let o = (0, tc.Uk)(
                                  n,
                                  (t) =>
                                    t.entryType ===
                                      m.LARGEST_CONTENTFUL_PAINT &&
                                    t.startTime < i &&
                                    t.startTime < e.timeStamp &&
                                    t.startTime < nP &&
                                    t.size > a,
                                );
                                if (o) {
                                  var s;
                                  let e;
                                  o.element &&
                                    (e = e7(o.element, t.actionNameAttribute)),
                                    r({
                                      value: o.startTime,
                                      targetSelector: e,
                                      resourceUrl:
                                        "" === (s = o).url ? void 0 : s.url,
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
                          { stop: u } = (function (t, e, n) {
                            let r = ex(t, {
                              type: m.FIRST_INPUT,
                              buffered: !0,
                            }).subscribe((r) => {
                              let i = r.find((t) => t.startTime < e.timeStamp);
                              if (i) {
                                let e;
                                let r = (0, q.vk)(
                                  i.startTime,
                                  i.processingStart,
                                );
                                i.target &&
                                  eR(i.target) &&
                                  (e = e7(i.target, t.actionNameAttribute)),
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
                            o(), s(), l(), u(), a.stop();
                          },
                          initialViewMetrics: i,
                        };
                      })(r, O, H)
                    : { stop: v.l, initialViewMetrics: {} },
                { stop: U, eventCounts: z } = (function (t, e, n) {
                  let { stop: r, eventCounts: i } = ek({
                    lifeCycle: t,
                    isChildEvent: (t) => t.view.id === e,
                    onChange: n,
                  });
                  return { stop: r, eventCounts: i };
                })(t, u, H),
                B = (0, ts.yb)(G, nK);
              function F() {
                t.notify(3, {
                  id: u,
                  name: b,
                  context: g.getContext(),
                  startClocks: a,
                });
              }
              function H() {
                F(), C();
              }
              function G() {
                T(), F(), (p += 1);
                let e = void 0 === l ? (0, q.nx)() : l.timeStamp;
                t.notify(4, {
                  customTimings: f,
                  documentVersion: p,
                  id: u,
                  name: b,
                  service: S,
                  version: k,
                  context: g.getContext(),
                  loadingType: o,
                  location: h,
                  startClocks: a,
                  commonViewMetrics: j(),
                  initialViewMetrics: L,
                  duration: (0, q.vk)(a.timeStamp, e),
                  isActive: void 0 === l,
                  sessionIsActive: y,
                  eventCounts: z,
                });
              }
              return (
                G(),
                g.changeObservable.subscribe(H),
                {
                  get name() {
                    return b;
                  },
                  service: S,
                  version: k,
                  contextManager: g,
                  stopObservable: c,
                  end(e = {}) {
                    var n, r;
                    !l &&
                      ((l =
                        null !== (n = e.endClocks) && void 0 !== n
                          ? n
                          : (0, q.M8)()),
                      (y =
                        null === (r = e.sessionIsActive) || void 0 === r || r),
                      t.notify(5, { endClocks: l }),
                      t.notify(6, { endClocks: l }),
                      (0, ts.vG)(B),
                      I(l.relative),
                      M(),
                      G(),
                      (0, ts.wg)(() => {
                        this.stop();
                      }, nZ));
                  },
                  stop() {
                    $(), U(), P(), c.notify();
                  },
                  addTiming(t, e) {
                    if (l) return;
                    let n = (0, q.pu)(e) ? e : (0, q.vk)(a.timeStamp, e);
                    (f[
                      (function (t) {
                        let e = t.replace(/[^a-zA-Z0-9-_.@$]/g, "_");
                        return (
                          e !== t &&
                            _.Vy.warn(
                              `Invalid timing name: ${t}, sanitized to: ${e}`,
                            ),
                          e
                        );
                      })(t)
                    ] = n),
                      H();
                  },
                  setViewName(t) {
                    (b = t), G();
                  },
                }
              );
            })(e, n, r, i, t, o, a, s);
            return (
              u.add(l),
              l.stopObservable.subscribe(() => {
                u.delete(l);
              }),
              l
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
              t.reason === tZ.y5.UNLOADING && c.end();
            }),
            a &&
              (l = o.subscribe(({ oldLocation: t, newLocation: e }) => {
                var n, r;
                (n = t),
                  (r = e),
                  (n.pathname !== r.pathname ||
                    (!(function (t) {
                      let e = t.substring(1);
                      return "" !== e && !!document.getElementById(e);
                    })(r.hash) &&
                      nJ(r.hash) !== nJ(n.hash))) &&
                    (c.end(), (c = f("route_change")));
              })),
            {
              addTiming: (t, e = (0, q.nx)()) => {
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
                l && l.unsubscribe(), c.end(), u.forEach((t) => t.stop());
              },
            }
          );
        })(S, z, tg, tR, t, tw, !t.trackViewsManually, i));
        L.push(tV);
        let { stop: tB } = (function (
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
              (0, nS.BB)(e, { timeout: nk });
            }
            return {
              push(e) {
                1 === t.push(e) && n();
              },
            };
          })(),
          i = function (t, e, n = nR) {
            (0, nC.H)(t, "interactive", () => {
              let t = n(),
                r = Object.assign(t.toJSON(), {
                  entryType: m.RESOURCE,
                  initiatorType: es,
                  duration: t.responseEnd,
                  traceId: (function (t) {
                    let e =
                      (function (t) {
                        let e = t.querySelector("meta[name=dd-trace-id]"),
                          n = t.querySelector("meta[name=dd-trace-time]");
                        return nT(e && e.content, n && n.content);
                      })(t) ||
                      (function (t) {
                        let e = (function (t) {
                          for (let e = 0; e < t.childNodes.length; e += 1) {
                            let n = nO(t.childNodes[e]);
                            if (n) return n;
                          }
                          if (t.body)
                            for (
                              let e = t.body.childNodes.length - 1;
                              e >= 0;
                              e -= 1
                            ) {
                              let n = t.body.childNodes[e],
                                r = nO(n);
                              if (r) return r;
                              if (!eO(n)) break;
                            }
                        })(t);
                        if (e) return nT(F(e, "trace-id"), F(e, "trace-time"));
                      })(t);
                    if (!(!e || e.traceTime <= (0, q.x3)() - nE))
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
                var r, i, o;
                let a = (function (t) {
                    if (!performance || !("getEntriesByName" in performance))
                      return;
                    let e = performance.getEntriesByName(t.url, "resource");
                    if (!e.length || !("toJSON" in e[0])) return;
                    let n = e
                      .filter((t) => !nx.has(t))
                      .filter((t) => ed(t) && ef(t))
                      .filter((e) => {
                        var n, r, i;
                        return (
                          (n = e),
                          (r = t.startClocks.relative),
                          (i = nA({
                            startTime: t.startClocks.relative,
                            duration: t.duration,
                          })),
                          n.startTime >= r - 1 && nA(n) <= (0, q.Gw)(i, 1)
                        );
                      });
                    if (1 === n.length) return nx.add(n[0]), n[0].toJSON();
                  })(t),
                  s = a ? (0, q.FR)(a.startTime) : t.startClocks,
                  l = (function (t, e) {
                    if (t.traceSampled && t.traceId && t.spanId)
                      return {
                        _dd: {
                          span_id: t.spanId.toString(),
                          trace_id: t.traceId.toString(),
                          rule_psr: e.rulePsr,
                        },
                      };
                  })(t, e);
                if (!e.trackResources && !l) return;
                let u = "xhr" === t.type ? "xhr" : "fetch",
                  c = a ? nN(a) : void 0,
                  d = a
                    ? ec(a)
                    : ((r = n),
                      (i = s),
                      (o = t.duration),
                      r.wasInPageStateDuringPeriod("frozen", i.relative, o)
                        ? void 0
                        : o),
                  f = (0, A.kg)(
                    {
                      date: s.timeStamp,
                      resource: {
                        id: V(),
                        type: u,
                        duration: (0, q.Zj)(d),
                        method: t.method,
                        status_code: t.status,
                        protocol: a && eh(a),
                        url: ev(t.url) ? eb(t.url) : t.url,
                        delivery_type: a && eg(a),
                      },
                      type: "resource",
                      _dd: { discarded: !e.trackResources },
                    },
                    l,
                    c,
                  );
                return {
                  startTime: s.relative,
                  duration: d,
                  rawRumEvent: f,
                  domainContext: {
                    performanceEntry: a,
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
          let o = ex(e, { type: m.RESOURCE, buffered: !0 }).subscribe((t) => {
            for (let n of t)
              "xmlhttprequest" !== n.initiatorType &&
                "fetch" !== n.initiatorType &&
                a(() => nI(n, e));
          });
          function a(e) {
            r.push(() => {
              let n = e();
              n && t.notify(12, n);
            });
          }
          return (
            i(e, (t) => {
              a(() => nI(t, e));
            }),
            {
              stop: () => {
                o.unsubscribe();
              },
            }
          );
        })(z, t, tS);
        if ((L.push(tB), t.trackLongTasks)) {
          if (
            null === (c = PerformanceObserver.supportedEntryTypes) ||
            void 0 === c
              ? void 0
              : c.includes(m.LONG_ANIMATION_FRAME)
          ) {
            let { stop: e } = (function (t, e) {
              let n = ex(e, {
                type: m.LONG_ANIMATION_FRAME,
                buffered: !0,
              }).subscribe((e) => {
                for (let n of e) {
                  let e = (0, q.FR)(n.startTime),
                    r = {
                      date: e.timeStamp,
                      long_task: {
                        id: V(),
                        entry_type: "long-animation-frame",
                        duration: (0, q.Zj)(n.duration),
                        blocking_duration: (0, q.Zj)(n.blockingDuration),
                        first_ui_event_timestamp: (0, q.Zj)(
                          n.firstUIEventTimestamp,
                        ),
                        render_start: (0, q.Zj)(n.renderStart),
                        style_and_layout_start: (0, q.Zj)(
                          n.styleAndLayoutStart,
                        ),
                        start_time: (0, q.Zj)(n.startTime),
                        scripts: n.scripts.map((t) => ({
                          duration: (0, q.Zj)(t.duration),
                          pause_duration: (0, q.Zj)(t.pauseDuration),
                          forced_style_and_layout_duration: (0, q.Zj)(
                            t.forcedStyleAndLayoutDuration,
                          ),
                          start_time: (0, q.Zj)(t.startTime),
                          execution_start: (0, q.Zj)(t.executionStart),
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
            })(z, t);
            L.push(e);
          } else
            !(function (t, e) {
              ex(e, { type: m.LONG_TASK, buffered: !0 }).subscribe((n) => {
                for (let r of n) {
                  if (r.entryType !== m.LONG_TASK || !e.trackLongTasks) break;
                  let n = (0, q.FR)(r.startTime),
                    i = {
                      date: n.timeStamp,
                      long_task: {
                        id: V(),
                        entry_type: "long-task",
                        duration: (0, q.Zj)(r.duration),
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
            })(z, t);
        }
        let { addError: tG } = (function (t, e) {
          var n, r;
          let i = new E.c();
          return (
            (n = i),
            (function (t) {
              let e = t.map((t) => {
                var e;
                return (
                  nv[t] ||
                    (nv[t] =
                      ((e = t),
                      new E.c((t) => {
                        let n = _.JZ[e];
                        return (
                          (_.JZ[e] = (...r) => {
                            n.apply(console, r);
                            let i = (0, U.uC)("console error");
                            (0, D.um)(() => {
                              t.notify(
                                (function (t, e, n) {
                                  let r;
                                  let i = t
                                    .map((t) => {
                                      var e;
                                      return "string" == typeof (e = t)
                                        ? (0, C.a)(e)
                                        : (0, ny.bJ)(e)
                                          ? (0, U.NR)((0, nm.T)(e))
                                          : (0, b.s)((0, C.a)(e), void 0, 2);
                                    })
                                    .join(" ");
                                  if (e === _.bP.error) {
                                    let e = t.find(ny.bJ);
                                    r = {
                                      stack: e
                                        ? (0, U.Yn)((0, nm.T)(e))
                                        : void 0,
                                      fingerprint: (0, ny.Nt)(e),
                                      causes: e
                                        ? (0, ny.Dr)(e, "console")
                                        : void 0,
                                      startClocks: (0, q.M8)(),
                                      message: i,
                                      source: tX.g.CONSOLE,
                                      handling: "handled",
                                      handlingStack: n,
                                      context: (0, ny.Qb)(e),
                                    };
                                  }
                                  return {
                                    api: e,
                                    message: i,
                                    error: r,
                                    handlingStack: n,
                                  };
                                })(r, e, i),
                              );
                            });
                          }),
                          () => {
                            _.JZ[e] = n;
                          }
                        );
                      }))),
                  nv[t]
                );
              });
              return (0, E.F)(...e);
            })([_.bP.error]).subscribe((t) => n.notify(t.error)),
            !(function (t) {
              var e, n;
              let r = (e, n) => {
                  let r = (0, ny.As)({
                    stackTrace: e,
                    originalError: n,
                    startClocks: (0, q.M8)(),
                    nonErrorPrefix: "Uncaught",
                    source: tX.g.SOURCE,
                    handling: "unhandled",
                  });
                  t.notify(r);
                },
                { stop: i } =
                  ((e = r),
                  (0, J.H)(
                    window,
                    "onerror",
                    ({ parameters: [t, n, r, i, o] }) => {
                      let a;
                      e(
                        (0, ny.bJ)(o) ? (0, nm.T)(o) : (0, nm.h)(t, n, r, i),
                        null != o ? o : t,
                      );
                    },
                  )),
                { stop: o } =
                  ((n = r),
                  (0, J.H)(
                    window,
                    "onunhandledrejection",
                    ({ parameters: [t] }) => {
                      let e = t.reason || "Empty reason";
                      n((0, nm.T)(e), e);
                    },
                  ));
            })(i),
            !(function (t, e) {
              (function (t, e) {
                var n, r;
                let i = [];
                e.includes(nb.cspViolation) &&
                  i.push(
                    ((n = t),
                    new E.c((t) => {
                      let { stop: e } = (0, N.q)(
                        n,
                        document,
                        "securitypolicyviolation",
                        (e) => {
                          t.notify(
                            (function (t) {
                              let e = `'${t.blockedURI}' blocked by '${t.effectiveDirective}' directive`;
                              return n_({
                                type: t.effectiveDirective,
                                message: `${nb.cspViolation}: ${e}`,
                                originalError: t,
                                csp: { disposition: t.disposition },
                                stack: nw(
                                  t.effectiveDirective,
                                  t.originalPolicy
                                    ? `${e} of the policy "${H(t.originalPolicy, 100, "...")}"`
                                    : "no policy",
                                  t.sourceFile,
                                  t.lineNumber,
                                  t.columnNumber,
                                ),
                              });
                            })(e),
                          );
                        },
                      );
                      return e;
                    })),
                  );
                let o = e.filter((t) => t !== nb.cspViolation);
                return (
                  o.length &&
                    i.push(
                      ((r = o),
                      new E.c((t) => {
                        if (!window.ReportingObserver) return;
                        let e = (0, D.dm)((e, n) =>
                            e.forEach((e) =>
                              t.notify(
                                (function (t) {
                                  let { type: e, body: n } = t;
                                  return n_({
                                    type: n.id,
                                    message: `${e}: ${n.message}`,
                                    originalError: t,
                                    stack: nw(
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
                      })),
                    ),
                  (0, E.F)(...i)
                );
              })(t, [nb.cspViolation, nb.intervention]).subscribe((t) =>
                e.notify(t),
              );
            })(e, i),
            i.subscribe((e) => t.notify(14, { error: e })),
            (r = t).subscribe(
              14,
              ({ error: t, customerContext: e, savedCommonContext: n }) => {
                (e = (0, A.kg)(t.context, e)),
                  r.notify(12, {
                    customerContext: e,
                    savedCommonContext: n,
                    ...(function (t) {
                      let e = {
                          date: t.startClocks.timeStamp,
                          error: {
                            id: V(),
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
                    })(t),
                  });
              },
            ),
            {
              addError: (
                {
                  error: t,
                  handlingStack: e,
                  componentStack: n,
                  startClocks: i,
                  context: o,
                },
                a,
              ) => {
                let s = (0, ny.bJ)(t) ? (0, nm.T)(t) : void 0,
                  l = (0, ny.As)({
                    stackTrace: s,
                    originalError: t,
                    handlingStack: e,
                    componentStack: n,
                    startClocks: i,
                    nonErrorPrefix: "Provided",
                    source: tX.g.CUSTOM,
                    handling: "handled",
                  });
                r.notify(14, {
                  customerContext: o,
                  savedCommonContext: a,
                  error: l,
                });
              },
            }
          );
        })(z, t);
        !(function (t, e, n) {
          var r, i;
          let o = {
            clearTracingIfNeeded: tF,
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
                  t.init = (0, w.yG)(t.init);
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
                    (t.init.headers = n.concat((0, tc.WP)(e)));
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
            var r;
            (u ||
              ((r = e),
              (u = new E.c((t) => {
                let { stop: e } = (0, J.H)(
                    XMLHttpRequest.prototype,
                    "open",
                    ei,
                  ),
                  { stop: n } = (0, J.H)(
                    XMLHttpRequest.prototype,
                    "send",
                    (e) => {
                      (function ({ target: t, handlingStack: e }, n, r) {
                        let i = er.get(t);
                        if (!i) return;
                        (i.state = "start"),
                          (i.startClocks = (0, q.M8)()),
                          (i.isAborted = !1),
                          (i.xhr = t),
                          (i.handlingStack = e);
                        let o = !1,
                          { stop: a } = (0, J.H)(
                            t,
                            "onreadystatechange",
                            () => {
                              t.readyState === XMLHttpRequest.DONE && s();
                            },
                          ),
                          s = () => {
                            l(),
                              a(),
                              o ||
                                ((o = !0),
                                (i.state = "complete"),
                                (i.duration = (0, q.vk)(
                                  i.startClocks.timeStamp,
                                  (0, q.nx)(),
                                )),
                                (i.status = t.status),
                                r.notify((0, w.yG)(i)));
                          },
                          { stop: l } = (0, N.q)(n, t, "loadend", s);
                        r.notify(i);
                      })(e, r, t);
                    },
                    { computeHandlingStack: !0 },
                  ),
                  { stop: i } = (0, J.H)(XMLHttpRequest.prototype, "abort", eo);
                return () => {
                  e(), n(), i();
                };
              }))),
            u).subscribe((e) => {
              if (em(e.url))
                switch (e.state) {
                  case "start":
                    n.traceXhr(e, e.xhr),
                      (e.requestIndex = ew()),
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
          })(t, e, o),
            (r = t),
            (i = o),
            X().subscribe((t) => {
              if (em(t.url))
                switch (t.state) {
                  case "start":
                    i.traceFetch(t),
                      (t.requestIndex = ew()),
                      r.notify(7, { requestIndex: t.requestIndex, url: t.url });
                    break;
                  case "resolve":
                    (function (t, e) {
                      let n = t.response && (0, ea.i)(t.response);
                      n && n.body
                        ? (function (t, e, n) {
                            let r = t.getReader(),
                              i = [],
                              o = 0;
                            function a() {
                              let t, a;
                              if (
                                (r.cancel().catch(v.l), n.collectStreamBody)
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
                                (0, D.dm)((e) => {
                                  if (e.done) {
                                    a();
                                    return;
                                  }
                                  n.collectStreamBody && i.push(e.value),
                                    (o += e.value.length) > n.bytesLimit
                                      ? a()
                                      : t();
                                }),
                                (0, D.dm)((t) => e(t)),
                              );
                            })();
                          })(
                            n.body,
                            () => {
                              e(
                                (0, q.vk)(t.startClocks.timeStamp, (0, q.nx)()),
                              );
                            },
                            {
                              bytesLimit: Number.POSITIVE_INFINITY,
                              collectStreamBody: !1,
                            },
                          )
                        : e((0, q.vk)(t.startClocks.timeStamp, (0, q.nx)()));
                    })(t, (e) => {
                      i.clearTracingIfNeeded(t),
                        r.notify(8, {
                          duration: e,
                          method: t.method,
                          requestIndex: t.requestIndex,
                          responseType: t.responseType,
                          spanId: t.spanId,
                          startClocks: t.startClocks,
                          status: t.status,
                          traceId: t.traceId,
                          traceSampled: t.traceSampled,
                          type: "fetch",
                          url: t.url,
                          response: t.response,
                          init: t.init,
                          input: t.input,
                          isAborted: t.isAborted,
                          handlingStack: t.handlingStack,
                        });
                    });
                }
            });
        })(z, t, to);
        let tW = (function (t, e, n) {
            function r(n) {
              !e.wasInPageStateDuringPeriod(
                "frozen",
                n.startClocks.relative,
                n.duration,
              ) &&
                t.notify(
                  12,
                  (function (t, e) {
                    let n = {
                      date: t.startClocks.timeStamp,
                      vital: {
                        id: V(),
                        type: t.type,
                        name: t.name,
                        duration: (0, q.Zj)(t.duration),
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
              startDurationVital: (t, e = {}) => G(n, t, e),
              stopDurationVital: (t, e = {}) => {
                W(r, n, t, e);
              },
            };
          })(z, tS, s),
          tQ =
            ((k = t.applicationId),
            {
              get: (t) => {
                let e = tx.findView(t),
                  n = tE.findUrl(t),
                  r = to.findTrackedSession(t);
                if (r && e && n) {
                  let i = tM.findActionId(t);
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
          addAction: tP,
          addError: tG,
          addTiming: tD,
          addFeatureFlagEvaluation: tO.addFeatureFlagEvaluation,
          startView: t$,
          setViewContext: tU,
          setViewContextProperty: tq,
          getViewContext: tz,
          setViewName: tL,
          lifeCycle: z,
          viewHistory: tx,
          session: to,
          stopSession: () => to.expire(),
          getInternalContext: tQ.get,
          startDurationVital: tW.startDurationVital,
          stopDurationVital: tW.stopDurationVital,
          addDurationVital: tW.addDurationVital,
          stop: () => {
            L.forEach((t) => t());
          },
        };
      }
      function ra(t, { session: e, viewContext: n, errorType: r }) {
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
                    case tN.NW:
                    case tN.dV:
                      return "app";
                    case tN.Bb:
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
    12203: (t, e, n) => {
      "use strict";
      let r;
      n.d(e, { AY: () => a, L2: () => s, c$: () => l, l2: () => o });
      var i = n(92266);
      function o(t) {
        return l(t, location.href).href;
      }
      function a(t) {
        try {
          return !!l(t);
        } catch (t) {
          return !1;
        }
      }
      function s(t) {
        let e = l(t).pathname;
        return "/" === e[0] ? e : `/${e}`;
      }
      function l(t, e) {
        let n = (function () {
          if (void 0 === r)
            try {
              let t = new u("http://test/path");
              r = "http://test/path" === t.href;
            } catch (t) {
              r = !1;
            }
          return r ? u : void 0;
        })();
        if (n)
          try {
            return void 0 !== e ? new n(t, e) : new n(t);
          } catch (n) {
            throw Error(
              `Failed to construct URL: ${String(n)} ${(0, i.s)({ url: t, base: e })}`,
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
      let u = URL;
    },
    13977: (t, e, n) => {
      "use strict";
      n.d(e, { Go: () => o, kg: () => a });
      var r = n(46928);
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
        let o = "object" === (0, r.P)(t) ? t : {};
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
    15560: (t, e, n) => {
      var r = n(21432),
        i = n(2348),
        o = n(84056);
      t.exports = function (t, e, n) {
        return e == e ? o(t, e, n) : r(t, i, n);
      };
    },
    16056: (t, e, n) => {
      "use strict";
      n.d(e, { a: () => s });
      var r = n(87189),
        i = n(4550),
        o = n(92266);
      let a = 220 * i._m;
      function s(t, e = a) {
        let n = (0, o.M)(Object.prototype),
          r = (0, o.M)(Array.prototype),
          i = [],
          c = new WeakMap(),
          d = l(t, "$", void 0, i, c),
          f = JSON.stringify(d),
          p = f ? f.length : 0;
        if (p > e) {
          u(e, "discarded", t);
          return;
        }
        for (; i.length > 0 && p < e; ) {
          let n = i.shift(),
            r = 0;
          if (Array.isArray(n.source))
            for (let o = 0; o < n.source.length; o++) {
              let a = l(n.source[o], n.path, o, i, c);
              if (
                (void 0 !== a ? (p += JSON.stringify(a).length) : (p += 4),
                (p += r),
                (r = 1),
                p > e)
              ) {
                u(e, "truncated", t);
                break;
              }
              n.target[o] = a;
            }
          else
            for (let o in n.source)
              if (Object.prototype.hasOwnProperty.call(n.source, o)) {
                let a = l(n.source[o], n.path, o, i, c);
                if (
                  (void 0 !== a &&
                    ((p += JSON.stringify(a).length + r + o.length + 3),
                    (r = 1)),
                  p > e)
                ) {
                  u(e, "truncated", t);
                  break;
                }
                n.target[o] = a;
              }
        }
        return n(), r(), d;
      }
      function l(t, e, n, r, i) {
        let o = (function (t) {
          if (t && "function" == typeof t.toJSON)
            try {
              return t.toJSON();
            } catch (t) {}
          return t;
        })(t);
        if (!o || "object" != typeof o) {
          var a;
          return "bigint" == typeof (a = o)
            ? `[BigInt] ${a.toString()}`
            : "function" == typeof a
              ? `[Function] ${a.name || "unknown"}`
              : "symbol" == typeof a
                ? `[Symbol] ${a.description || a.toString()}`
                : a;
        }
        let s = (function t(e) {
          try {
            if (e instanceof Event) {
              var n;
              return {
                type: (n = e).type,
                isTrusted: n.isTrusted,
                currentTarget: n.currentTarget ? t(n.currentTarget) : null,
                target: n.target ? t(n.target) : null,
              };
            }
            if (e instanceof RegExp) return `[RegExp] ${e.toString()}`;
            let r = Object.prototype.toString.call(e).match(/\[object (.*)\]/);
            if (r && r[1]) return `[${r[1]}]`;
          } catch (t) {}
          return "[Unserializable]";
        })(o);
        if ("[Object]" !== s && "[Array]" !== s && "[Error]" !== s) return s;
        if (i.has(t)) return `[Reference seen at ${i.get(t)}]`;
        let l = void 0 !== n ? `${e}.${n}` : e,
          u = Array.isArray(o) ? [] : {};
        return i.set(t, l), r.push({ source: o, target: u, path: l }), u;
      }
      function u(t, e, n) {
        r.Vy.warn(
          `The data provided has been ${e} as it is over the limit of ${t} characters:`,
          n,
        );
      }
    },
    16854: () => {},
    16881: (t, e, n) => {
      "use strict";
      function r(t, e) {
        let n = {},
          r = {};
        for (let [i, o] of Object.entries(t))
          e.includes(i) ? (n[i] = o) : (r[i] = o);
        return [n, r];
      }
      n.d(e, { l: () => r });
    },
    17417: (t, e, n) => {
      "use strict";
      function r(t, e) {
        let n = t.indexOf(e);
        n >= 0 && t.splice(n, 1);
      }
      n.d(e, { A: () => r });
    },
    19004: (t, e, n) => {
      "use strict";
      n.d(e, { F: () => i, c: () => r });
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
    21327: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => s });
      let r = () => "undefined" != typeof window,
        i = () => !(!r() || !window.hj),
        o = (t, ...e) => {
          if (r() && window.hj) return window.hj(t, ...e);
          throw Error(
            "Hotjar is not available, make sure init has been called.",
          );
        },
        a = (t, e, n) => {
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
              `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${t},hjsv:${e},hjdebug:${(null == n ? void 0 : n.debug) || !1}};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
              "hotjar-init-script",
              null == n ? void 0 : n.nonce,
            ) ||
            !i()
          )
            throw Error("Failed to initialize Hotjar tracking script.");
        },
        s = {
          init: (t, e, n) => {
            try {
              return a(t, e, n), !0;
            } catch (t) {
              return console.error("Error:", t), !1;
            }
          },
          event: (t) => {
            try {
              return o("event", t), !0;
            } catch (t) {
              return console.error("Error:", t), !1;
            }
          },
          identify: (t, e) => {
            try {
              return o("identify", t, e), !0;
            } catch (t) {
              return console.error("Error:", t), !1;
            }
          },
          stateChange: (t) => {
            try {
              return o("stateChange", t), !0;
            } catch (t) {
              return console.error("Error:", t), !1;
            }
          },
          isReady: i,
        };
    },
    21432: (t) => {
      t.exports = function (t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
          if (e(t[o], o, t)) return o;
        return -1;
      };
    },
    21580: (t, e, n) => {
      "use strict";
      n.d(e, { NR: () => s, Yn: () => a, uC: () => o });
      var r = n(84957),
        i = n(31195);
      function o(t) {
        let e;
        let n = Error(t);
        return (
          (n.name = "HandlingStack"),
          (0, r.um)(() => {
            let t = (0, i.T)(n);
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
    22167: (t, e, n) => {
      "use strict";
      n.d(e, { BB: () => a });
      var r = n(43066),
        i = n(84957),
        o = n(45019);
      function a(t, e) {
        if (window.requestIdleCallback && window.cancelIdleCallback) {
          let n = window.requestIdleCallback((0, i.dm)(t), e);
          return () => window.cancelIdleCallback(n);
        }
        return (function (t) {
          let e = (0, o.x3)(),
            n = (0, r.wg)(() => {
              t({
                didTimeout: !1,
                timeRemaining: () => Math.max(0, 50 - ((0, o.x3)() - e)),
              });
            }, 0);
          return () => (0, r.DJ)(n);
        })(t);
      }
    },
    22194: (t, e, n) => {
      "use strict";
      n.d(e, {
        As: () => eN,
        Bq: () => tO,
        Dc: () => eQ,
        Ds: () => tu,
        EH: () => S,
        Hr: () => v,
        IJ: () => tm,
        KN: () => eL,
        KZ: () => _,
        Ki: () => T,
        MI: () => ej,
        MQ: () => tT,
        NT: () => D,
        O$: () => ez,
        Oy: () => eG,
        QQ: () => R,
        Qi: () => tF,
        RZ: () => ts,
        Rc: () => E,
        S$: () => tz,
        TH: () => eD,
        To: () => k,
        WX: () => s,
        XX: () => tA,
        YG: () => tg,
        Y_: () => $,
        Yr: () => tP,
        Yx: () => tM,
        ZL: () => tB,
        ZR: () => O,
        ZZ: () => e$,
        a: () => td,
        a0: () => tt,
        bs: () => eF,
        dO: () => th,
        dg: () => a,
        gb: () => w,
        gg: () => eK,
        il: () => tN,
        jK: () => tf,
        lR: () => eM,
        mO: () => eH,
        n5: () => b,
        on: () => C,
        pn: () => P,
        q2: () => tI,
        q6: () => j,
        rg: () => ta,
        s7: () => tR,
        v6: () => to,
        vA: () => x,
        vs: () => tC,
        vz: () => A,
        wv: () => tp,
        zZ: () => eP,
        z_: () => tE,
        zt: () => eW,
      });
      var r,
        i = { context: void 0, registry: void 0 };
      function o(t) {
        i.context = t;
      }
      var a = Symbol("solid-proxy"),
        s = Symbol("solid-track"),
        l = { equals: (t, e) => t === e },
        u = H,
        c = { owned: null, cleanups: null, context: null, owner: null },
        d = {},
        f = null,
        p = null,
        h = null,
        g = null,
        m = null,
        y = 0;
      function v(t, e) {
        let n = h,
          r = f,
          i = 0 === t.length,
          o = void 0 === e ? r : e,
          a = i
            ? c
            : {
                owned: null,
                cleanups: null,
                context: o ? o.context : null,
                owner: o,
              },
          s = i ? t : () => t(() => A(() => Q(a)));
        (f = a), (h = null);
        try {
          return F(s, !0);
        } finally {
          (h = n), (f = r);
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
              (t = t(p && p.running && p.sources.has(n) ? n.tValue : n.value)),
            U(n, t)
          ),
        ];
      }
      function _(t, e, n) {
        q(V(t, e, !0, 1));
      }
      function w(t, e, n) {
        q(V(t, e, !1, 1));
      }
      function S(t, e, n) {
        u = G;
        let i = V(t, e, !1, 1),
          o = r && D(r);
        o && (i.suspense = o),
          (n && n.render) || (i.user = !0),
          m ? m.push(i) : q(i);
      }
      function k(t, e, n) {
        n = n ? Object.assign({}, l, n) : l;
        let r = V(t, e, !0, 0);
        return (
          (r.observers = null),
          (r.observerSlots = null),
          (r.comparator = n.equals || void 0),
          q(r),
          L.bind(r)
        );
      }
      function x(t) {
        return F(t, !1);
      }
      function A(t) {
        if (null === h) return t();
        let e = h;
        h = null;
        try {
          return t();
        } finally {
          h = e;
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
          let s = A(() => e(a, r, n));
          return (r = a), s;
        };
      }
      function E(t) {
        S(() => A(t));
      }
      function T(t) {
        return (
          null === f ||
            (null === f.cleanups ? (f.cleanups = [t]) : f.cleanups.push(t)),
          t
        );
      }
      function O() {
        return h;
      }
      function R() {
        return f;
      }
      function I(t) {
        if (p && p.running) return t(), p.done;
        let e = h,
          n = f;
        return Promise.resolve().then(() => {
          let i;
          return (
            (h = e),
            (f = n),
            r &&
              ((i =
                p ||
                (p = {
                  sources: new Set(),
                  effects: [],
                  promises: new Set(),
                  disposed: new Set(),
                  queue: new Set(),
                  running: !0,
                })).done || (i.done = new Promise((t) => (i.resolve = t))),
              (i.running = !0)),
            F(t, !1),
            (h = f = null),
            i ? i.done : void 0
          );
        });
      }
      var [N, M] = b(!1);
      function P() {
        return [N, I];
      }
      function j(t, e) {
        var n, r;
        let i = Symbol("context");
        return {
          id: i,
          Provider:
            ((n = i),
            function (t) {
              let e;
              return (
                w(
                  () =>
                    (e = A(
                      () => (
                        (f.context = { ...f.context, [n]: t.value }),
                        $(() => t.children)
                      ),
                    )),
                  void 0,
                ),
                e
              );
            }),
          defaultValue: t,
        };
      }
      function D(t) {
        return f && f.context && void 0 !== f.context[t.id]
          ? f.context[t.id]
          : t.defaultValue;
      }
      function $(t) {
        let e = k(t),
          n = k(() =>
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
        let t = p && p.running;
        if (this.sources && (t ? this.tState : this.state)) {
          if ((t ? this.tState : this.state) === 1) q(this);
          else {
            let t = g;
            (g = null), F(() => W(this), !1), (g = t);
          }
        }
        if (h) {
          let t = this.observers ? this.observers.length : 0;
          h.sources
            ? (h.sources.push(this), h.sourceSlots.push(t))
            : ((h.sources = [this]), (h.sourceSlots = [t])),
            this.observers
              ? (this.observers.push(h),
                this.observerSlots.push(h.sources.length - 1))
              : ((this.observers = [h]),
                (this.observerSlots = [h.sources.length - 1]));
        }
        return t && p.sources.has(this) ? this.tValue : this.value;
      }
      function U(t, e, n) {
        let r = p && p.running && p.sources.has(t) ? t.tValue : t.value;
        if (!t.comparator || !t.comparator(r, e)) {
          if (p) {
            let r = p.running;
            (r || (!n && p.sources.has(t))) &&
              (p.sources.add(t), (t.tValue = e)),
              r || (t.value = e);
          } else t.value = e;
          t.observers &&
            t.observers.length &&
            F(() => {
              for (let e = 0; e < t.observers.length; e += 1) {
                let n = t.observers[e],
                  r = p && p.running;
                (r && p.disposed.has(n)) ||
                  ((r ? n.tState : n.state) ||
                    (n.pure ? g.push(n) : m.push(n),
                    n.observers &&
                      (function t(e) {
                        let n = p && p.running;
                        for (let r = 0; r < e.observers.length; r += 1) {
                          let i = e.observers[r];
                          (n ? i.tState : i.state) ||
                            (n ? (i.tState = 2) : (i.state = 2),
                            i.pure ? g.push(i) : m.push(i),
                            i.observers && t(i));
                        }
                      })(n)),
                  r ? (n.tState = 1) : (n.state = 1));
              }
              if (g.length > 1e6) throw ((g = []), Error());
            }, !1);
        }
        return e;
      }
      function q(t) {
        if (!t.fn) return;
        Q(t);
        let e = y;
        z(t, p && p.running && p.sources.has(t) ? t.tValue : t.value, e),
          p &&
            !p.running &&
            p.sources.has(t) &&
            queueMicrotask(() => {
              F(() => {
                p && (p.running = !0),
                  (h = f = t),
                  z(t, t.tValue, e),
                  (h = f = null);
              }, !1);
            });
      }
      function z(t, e, n) {
        let r;
        let i = f,
          o = h;
        h = f = t;
        try {
          r = t.fn(e);
        } catch (e) {
          return (
            t.pure &&
              (p && p.running
                ? ((t.tState = 1),
                  t.tOwned && t.tOwned.forEach(Q),
                  (t.tOwned = void 0))
                : ((t.state = 1),
                  t.owned && t.owned.forEach(Q),
                  (t.owned = null))),
            (t.updatedAt = n + 1),
            J(e)
          );
        } finally {
          (h = o), (f = i);
        }
        (!t.updatedAt || t.updatedAt <= n) &&
          (null != t.updatedAt && "observers" in t
            ? U(t, r, !0)
            : p && p.running && t.pure
              ? (p.sources.add(t), (t.tValue = r))
              : (t.value = r),
          (t.updatedAt = n));
      }
      function V(t, e, n, r = 1, i) {
        let o = {
          fn: t,
          state: r,
          updatedAt: null,
          owned: null,
          sources: null,
          sourceSlots: null,
          cleanups: null,
          value: e,
          owner: f,
          context: f ? f.context : null,
          pure: n,
        };
        return (
          p && p.running && ((o.state = 0), (o.tState = r)),
          null === f ||
            (f !== c &&
              (p && p.running && f.pure
                ? f.tOwned
                  ? f.tOwned.push(o)
                  : (f.tOwned = [o])
                : f.owned
                  ? f.owned.push(o)
                  : (f.owned = [o]))),
          o
        );
      }
      function B(t) {
        let e = p && p.running;
        if ((e ? t.tState : t.state) === 0) return;
        if ((e ? t.tState : t.state) === 2) return W(t);
        if (t.suspense && A(t.suspense.inFallback))
          return t.suspense.effects.push(t);
        let n = [t];
        for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < y); ) {
          if (e && p.disposed.has(t)) return;
          (e ? t.tState : t.state) && n.push(t);
        }
        for (let r = n.length - 1; r >= 0; r--) {
          if (((t = n[r]), e)) {
            let e = t,
              i = n[r + 1];
            for (; (e = e.owner) && e !== i; ) if (p.disposed.has(e)) return;
          }
          if ((e ? t.tState : t.state) === 1) q(t);
          else if ((e ? t.tState : t.state) === 2) {
            let e = g;
            (g = null), F(() => W(t, n[0]), !1), (g = e);
          }
        }
      }
      function F(t, e) {
        if (g) return t();
        let n = !1;
        e || (g = []), m ? (n = !0) : (m = []), y++;
        try {
          let e = t();
          return (
            (function (t) {
              let e;
              if ((g && (H(g), (g = null)), t)) return;
              if (p) {
                if (p.promises.size || p.queue.size) {
                  if (p.running) {
                    (p.running = !1),
                      p.effects.push.apply(p.effects, m),
                      (m = null),
                      M(!0);
                    return;
                  }
                } else {
                  let t = p.sources,
                    n = p.disposed;
                  for (let t of (m.push.apply(m, p.effects),
                  (e = p.resolve),
                  m))
                    "tState" in t && (t.state = t.tState), delete t.tState;
                  (p = null),
                    F(() => {
                      for (let t of n) Q(t);
                      for (let e of t) {
                        if (((e.value = e.tValue), e.owned))
                          for (let t = 0, n = e.owned.length; t < n; t++)
                            Q(e.owned[t]);
                        e.tOwned && (e.owned = e.tOwned),
                          delete e.tValue,
                          delete e.tOwned,
                          (e.tState = 0);
                      }
                      M(!1);
                    }, !1);
                }
              }
              let n = m;
              (m = null), n.length && F(() => u(n), !1), e && e();
            })(n),
            e
          );
        } catch (t) {
          n || (m = null), (g = null), J(t);
        }
      }
      function H(t) {
        for (let e = 0; e < t.length; e++) B(t[e]);
      }
      function G(t) {
        let e,
          n = 0;
        for (e = 0; e < t.length; e++) {
          let r = t[e];
          r.user ? (t[n++] = r) : B(r);
        }
        if (i.context) {
          if (i.count) {
            i.effects || (i.effects = []), i.effects.push(...t.slice(0, n));
            return;
          }
          i.effects &&
            ((t = [...i.effects, ...t]),
            (n += i.effects.length),
            delete i.effects),
            o();
        }
        for (e = 0; e < n; e++) B(t[e]);
      }
      function W(t, e) {
        let n = p && p.running;
        n ? (t.tState = 0) : (t.state = 0);
        for (let r = 0; r < t.sources.length; r += 1) {
          let i = t.sources[r];
          if (i.sources) {
            let t = n ? i.tState : i.state;
            1 === t
              ? i !== e && (!i.updatedAt || i.updatedAt < y) && B(i)
              : 2 === t && W(i, e);
          }
        }
      }
      function Q(t) {
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
        if (p && p.running && t.pure) {
          if (t.tOwned) {
            for (e = t.tOwned.length - 1; e >= 0; e--) Q(t.tOwned[e]);
            delete t.tOwned;
          }
          !(function t(e, n) {
            if ((n || ((e.tState = 0), p.disposed.add(e)), e.owned))
              for (let n = 0; n < e.owned.length; n++) t(e.owned[n]);
          })(t, !0);
        } else if (t.owned) {
          for (e = t.owned.length - 1; e >= 0; e--) Q(t.owned[e]);
          t.owned = null;
        }
        if (t.cleanups) {
          for (e = t.cleanups.length - 1; e >= 0; e--) t.cleanups[e]();
          t.cleanups = null;
        }
        p && p.running ? (t.tState = 0) : (t.state = 0);
      }
      function K(t) {
        return t instanceof Error
          ? t
          : Error("string" == typeof t ? t : "Unknown error", { cause: t });
      }
      function Z(t, e, n) {
        try {
          for (let n of e) n(t);
        } catch (t) {
          J(t, (n && n.owner) || null);
        }
      }
      function J(t, e = f) {
        let n = K(t);
        throw n;
      }
      var Y = Symbol("fallback");
      function X(t) {
        for (let e = 0; e < t.length; e++) t[e]();
      }
      function tt(t, e) {
        return A(() => t(e || {}));
      }
      function te() {
        return !0;
      }
      var tn = {
        get: (t, e, n) => (e === a ? n : t.get(e)),
        has: (t, e) => e === a || t.has(e),
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
          (e = e || (!!r && a in r)),
            (t[n] = "function" == typeof r ? ((e = !0), k(r)) : r);
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
        if (a in t) {
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
            l = 0;
          for (let t of e)
            t.includes(i) &&
              ((s = !0),
              a ? (r[l][i] = o.value) : Object.defineProperty(r[l], i, o)),
              ++l;
          s || (a ? (n[i] = o.value) : Object.defineProperty(n, i, o));
        }
        return [...r, n];
      }
      function ts(t) {
        let e, n;
        let a = (a) => {
          let s;
          let l = i.context;
          if (l) {
            let [r, a] = b();
            i.count || (i.count = 0),
              i.count++,
              (n || (n = t())).then((t) => {
                o(l), i.count--, a(() => t.default), o();
              }),
              (e = r);
          } else if (!e) {
            let [o] = (function (t, e, n) {
              let o, a, s;
              (2 == arguments.length && "object" == typeof e) ||
              1 == arguments.length
                ? ((o = !0), (a = t), (s = e || {}))
                : ((o = t), (a = e), (s = n || {}));
              let l = null,
                u = d,
                c = null,
                f = !1,
                g = !1,
                m = "initialValue" in s,
                y = "function" == typeof o && k(o),
                v = new Set(),
                [w, S] = (s.storage || b)(s.initialValue),
                [x, C] = b(void 0),
                [E, T] = b(void 0, { equals: !1 }),
                [O, R] = b(m ? "ready" : "unresolved");
              if (i.context) {
                let t;
                (c = `${i.context.id}${i.context.count++}`),
                  "initial" === s.ssrLoadFrom
                    ? (u = s.initialValue)
                    : i.load && (t = i.load(c)) && (u = t);
              }
              function I(t, e, n, r) {
                return (
                  l === t &&
                    ((l = null),
                    void 0 !== r && (m = !0),
                    (t === u || e === u) &&
                      s.onHydrated &&
                      queueMicrotask(() => s.onHydrated(r, { value: e })),
                    (u = d),
                    p && t && f
                      ? (p.promises.delete(t),
                        (f = !1),
                        F(() => {
                          (p.running = !0), N(e, n);
                        }, !1))
                      : N(e, n)),
                  e
                );
              }
              function N(t, e) {
                F(() => {
                  for (let n of (void 0 === e && S(() => t),
                  R(void 0 !== e ? "errored" : m ? "ready" : "unresolved"),
                  C(e),
                  v.keys()))
                    n.decrement();
                  v.clear();
                }, !1);
              }
              function M() {
                let t = r && D(r),
                  e = w(),
                  n = x();
                if (void 0 !== n && !l) throw n;
                return (
                  h &&
                    !h.user &&
                    t &&
                    _(() => {
                      E(),
                        l &&
                          (t.resolved && p && f
                            ? p.promises.add(l)
                            : v.has(t) || (t.increment(), v.add(t)));
                    }),
                  e
                );
              }
              function P(t = !0) {
                if (!1 !== t && g) return;
                g = !1;
                let e = y ? y() : o;
                if (((f = p && p.running), null == e || !1 === e)) {
                  I(l, A(w));
                  return;
                }
                p && l && p.promises.delete(l);
                let n =
                  u !== d ? u : A(() => a(e, { value: w(), refetching: t }));
                return n && "object" == typeof n && "then" in n
                  ? ((l = n), "value" in n)
                    ? ("success" === n.status
                        ? I(l, n.value, void 0, e)
                        : I(l, void 0, void 0, e),
                      n)
                    : ((g = !0),
                      queueMicrotask(() => (g = !1)),
                      F(() => {
                        R(m ? "refreshing" : "pending"), T();
                      }, !1),
                      n.then(
                        (t) => I(n, t, void 0, e),
                        (t) => I(n, void 0, K(t), e),
                      ))
                  : (I(l, n, void 0, e), n);
              }
              return (
                Object.defineProperties(M, {
                  state: { get: () => O() },
                  error: { get: () => x() },
                  loading: {
                    get() {
                      let t = O();
                      return "pending" === t || "refreshing" === t;
                    },
                  },
                  latest: {
                    get() {
                      if (!m) return M();
                      let t = x();
                      if (t && !l) throw t;
                      return w();
                    },
                  },
                }),
                y ? _(() => P(!1)) : P(!1),
                [M, { refetch: P, mutate: S }]
              );
            })(() => (n || (n = t())).then((t) => t.default));
            e = o;
          }
          return k(
            () =>
              (s = e()) &&
              A(() => {
                if (!l) return s(a);
                let t = i.context;
                o(l);
                let e = s(a);
                return o(t), e;
              }),
          );
        };
        return (
          (a.preload = () =>
            n || ((n = t()).then((t) => (e = () => t.default)), n)),
          a
        );
      }
      var tl = 0;
      function tu() {
        let t = i.context;
        return t ? `${t.id}${t.count++}` : `cl-${tl++}`;
      }
      var tc = (t) => `Stale read from <${t}>.`;
      function td(t) {
        let e = "fallback" in t && { fallback: () => t.fallback };
        return k(
          (function (t, e, n = {}) {
            let r = [],
              i = [],
              o = [],
              a = 0,
              l = e.length > 1 ? [] : null;
            return (
              T(() => X(o)),
              () => {
                let u = t() || [],
                  c,
                  d;
                return (
                  u[s],
                  A(() => {
                    let t = u.length,
                      e,
                      s,
                      p,
                      h,
                      g,
                      m,
                      y,
                      b,
                      _;
                    if (0 === t)
                      0 !== a &&
                        (X(o),
                        (o = []),
                        (r = []),
                        (i = []),
                        (a = 0),
                        l && (l = [])),
                        n.fallback &&
                          ((r = [Y]),
                          (i[0] = v((t) => ((o[0] = t), n.fallback()))),
                          (a = 1));
                    else if (0 === a) {
                      for (d = 0, i = Array(t); d < t; d++)
                        (r[d] = u[d]), (i[d] = v(f));
                      a = t;
                    } else {
                      for (
                        p = Array(t),
                          h = Array(t),
                          l && (g = Array(t)),
                          m = 0,
                          y = Math.min(a, t);
                        m < y && r[m] === u[m];
                        m++
                      );
                      for (
                        y = a - 1, b = t - 1;
                        y >= m && b >= m && r[y] === u[b];
                        y--, b--
                      )
                        (p[b] = i[y]), (h[b] = o[y]), l && (g[b] = l[y]);
                      for (e = new Map(), s = Array(b + 1), d = b; d >= m; d--)
                        (_ = u[d]),
                          (c = e.get(_)),
                          (s[d] = void 0 === c ? -1 : c),
                          e.set(_, d);
                      for (c = m; c <= y; c++)
                        (_ = r[c]),
                          void 0 !== (d = e.get(_)) && -1 !== d
                            ? ((p[d] = i[c]),
                              (h[d] = o[c]),
                              l && (g[d] = l[c]),
                              (d = s[d]),
                              e.set(_, d))
                            : o[c]();
                      for (d = m; d < t; d++)
                        d in p
                          ? ((i[d] = p[d]),
                            (o[d] = h[d]),
                            l && ((l[d] = g[d]), l[d](d)))
                          : (i[d] = v(f));
                      (i = i.slice(0, (a = t))), (r = u.slice(0));
                    }
                    return i;
                  })
                );
                function f(t) {
                  if (((o[d] = t), l)) {
                    let [t, n] = b(d);
                    return (l[d] = n), e(u[d], t);
                  }
                  return e(u[d]);
                }
              }
            );
          })(() => t.each, t.children, e || void 0),
        );
      }
      function tf(t) {
        let e = "fallback" in t && { fallback: () => t.fallback };
        return k(
          (function (t, e, n = {}) {
            let r = [],
              i = [],
              o = [],
              a = [],
              l = 0,
              u;
            return (
              T(() => X(o)),
              () => {
                let c = t() || [];
                return (
                  c[s],
                  A(() => {
                    if (0 === c.length)
                      return (
                        0 !== l &&
                          (X(o),
                          (o = []),
                          (r = []),
                          (i = []),
                          (l = 0),
                          (a = [])),
                        n.fallback &&
                          ((r = [Y]),
                          (i[0] = v((t) => ((o[0] = t), n.fallback()))),
                          (l = 1)),
                        i
                      );
                    for (
                      r[0] === Y &&
                        (o[0](), (o = []), (r = []), (i = []), (l = 0)),
                        u = 0;
                      u < c.length;
                      u++
                    )
                      u < r.length && r[u] !== c[u]
                        ? a[u](() => c[u])
                        : u >= r.length && (i[u] = v(d));
                    for (; u < r.length; u++) o[u]();
                    return (
                      (l = a.length = o.length = c.length),
                      (r = c.slice(0)),
                      (i = i.slice(0, l))
                    );
                  })
                );
                function d(t) {
                  o[u] = t;
                  let [n, r] = b(c[u]);
                  return (a[u] = r), e(n, u);
                }
              }
            );
          })(() => t.each, t.children, e || void 0),
        );
      }
      function tp(t) {
        let e = t.keyed,
          n = k(() => t.when, void 0, {
            equals: (t, n) => (e ? t === n : !t == !n),
          });
        return k(
          () => {
            let r = n();
            if (r) {
              let i = t.children;
              return "function" == typeof i && i.length > 0
                ? A(() =>
                    i(
                      e
                        ? r
                        : () => {
                            if (!A(n)) throw tc("Show");
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
          n = $(() => t.children),
          r = k(
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
        return k(
          () => {
            let [n, i, o] = r();
            if (n < 0) return t.fallback;
            let a = o.children;
            return "function" == typeof a && a.length > 0
              ? A(() =>
                  a(
                    e
                      ? i
                      : () => {
                          if (A(r)[0] !== n) throw tc("Match");
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
        tb = Object.assign(Object.create(null), {
          className: "class",
          htmlFor: "for",
        }),
        t_ = Object.assign(Object.create(null), {
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
          v((r) => {
            (i = r),
              e === document
                ? t()
                : tP(e, t(), e.firstChild ? null : void 0, n);
          }, r.owner),
          () => {
            i(), (e.textContent = "");
          }
        );
      }
      function tC(t, e, n) {
        let r;
        let i = () => {
            let e = document.createElement("template");
            return (
              (e.innerHTML = t),
              n ? e.content.firstChild.firstChild : e.content.firstChild
            );
          },
          o = e
            ? () => A(() => document.importNode(r || (r = i()), !0))
            : () => (r || (r = i())).cloneNode(!0);
        return (o.cloneNode = o), o;
      }
      function tE(t, e = window.document) {
        let n = e[tx] || (e[tx] = new Set());
        for (let r = 0, i = t.length; r < i; r++) {
          let i = t[r];
          n.has(i) || (n.add(i), e.addEventListener(i, t$));
        }
      }
      function tT(t = window.document) {
        if (t[tx]) {
          for (let e of t[tx].keys()) t.removeEventListener(e, t$);
          delete t[tx];
        }
      }
      function tO(t, e, n) {
        i.context || (null == n ? t.removeAttribute(e) : t.setAttribute(e, n));
      }
      function tR(t, e) {
        i.context ||
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
          r || w(() => (i.children = tL(t, e.children, i.children))),
          w(() => e.ref && e.ref(t)),
          w(() =>
            (function (t, e, n, r, i = {}, o = !1) {
              for (let r in (e || (e = {}), i))
                if (!(r in e)) {
                  if ("children" === r) continue;
                  i[r] = tD(t, r, null, i[r], n, o);
                }
              for (let a in e) {
                if ("children" === a) {
                  r || tL(t, e.children);
                  continue;
                }
                let s = e[a];
                i[a] = tD(t, a, s, i[a], n, o);
              }
            })(t, e, n, !0, i, !0),
          ),
          i
        );
      }
      function tM(t, e, n) {
        return A(() => t(e, n));
      }
      function tP(t, e, n, r) {
        if ((void 0 === n || r || (r = []), "function" != typeof e))
          return tL(t, e, r, n);
        w((r) => tL(t, e(), r, n), r);
      }
      function tj(t, e, n) {
        let r = e.trim().split(/\s+/);
        for (let e = 0, i = r.length; e < i; e++) t.classList.toggle(r[e], n);
      }
      function tD(t, e, n, r, o, a) {
        let s, l, u, c, d;
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
              i && "undefined" !== i && !e[i] && (tj(t, i, !1), delete n[i]);
            }
            for (r = 0, i = o.length; r < i; r++) {
              let i = o[r],
                a = !!e[i];
              i &&
                "undefined" !== i &&
                n[i] !== a &&
                a &&
                (tj(t, i, !0), (n[i] = a));
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
          (o || n) && (tI(t, i, n, o), o && tE([i]));
        } else if ("attr:" === e.slice(0, 5)) tO(t, e.slice(5), n);
        else if (
          (d = "prop:" === e.slice(0, 5)) ||
          (u = tv.has(e)) ||
          (!o &&
            ((c = (function (t, e) {
              let n = t_[t];
              return "object" == typeof n ? (n[e] ? n.$ : void 0) : n;
            })(e, t.tagName)) ||
              (l = ty.has(e)))) ||
          (s = t.nodeName.includes("-"))
        ) {
          if (d) (e = e.slice(5)), (l = !0);
          else if (i.context) return n;
          "class" === e || "className" === e
            ? tR(t, n)
            : !s || l || u
              ? (t[c || e] = n)
              : (t[
                  e
                    .toLowerCase()
                    .replace(/-([a-z])/g, (t, e) => e.toUpperCase())
                ] = n);
        } else {
          let r = o && e.indexOf(":") > -1 && tk[e.split(":")[0]];
          if (r) {
            var f;
            (f = e),
              i.context ||
                (null == n
                  ? t.removeAttributeNS(r, f)
                  : t.setAttributeNS(r, f, n));
          } else tO(t, tb[e] || e, n);
        }
        return n;
      }
      function t$(t) {
        let e = `$$${t.type}`,
          n = (t.composedPath && t.composedPath()[0]) || t.target;
        for (
          t.target !== n &&
            Object.defineProperty(t, "target", { configurable: !0, value: n }),
            Object.defineProperty(t, "currentTarget", {
              configurable: !0,
              get: () => n || document,
            }),
            i.registry && !i.done && (i.done = _$HY.done = !0);
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
      function tL(t, e, n, r, o) {
        if (i.context) {
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
          if (i.context) return n;
          if (("number" === a && (e = e.toString()), s)) {
            let i = n[0];
            i && 3 === i.nodeType
              ? i.data !== e && (i.data = e)
              : (i = document.createTextNode(e)),
              (n = tq(t, n, r, i));
          } else
            n =
              "" !== n && "string" == typeof n
                ? (t.firstChild.data = e)
                : (t.textContent = e);
        } else if (null == e || "boolean" === a) {
          if (i.context) return n;
          n = tq(t, n, r);
        } else if ("function" === a)
          return (
            w(() => {
              let i = e();
              for (; "function" == typeof i; ) i = i();
              n = tL(t, i, n, r);
            }),
            () => n
          );
        else if (Array.isArray(e)) {
          let a = [],
            l = n && Array.isArray(n);
          if (
            (function t(e, n, r, i) {
              let o = !1;
              for (let a = 0, s = n.length; a < s; a++) {
                let s = n[a],
                  l = r && r[a],
                  u;
                if (null == s || !0 === s || !1 === s);
                else if ("object" == (u = typeof s) && s.nodeType) e.push(s);
                else if (Array.isArray(s)) o = t(e, s, l) || o;
                else if ("function" === u) {
                  if (i) {
                    for (; "function" == typeof s; ) s = s();
                    o =
                      t(
                        e,
                        Array.isArray(s) ? s : [s],
                        Array.isArray(l) ? l : [l],
                      ) || o;
                  } else e.push(s), (o = !0);
                } else {
                  let t = String(s);
                  l && 3 === l.nodeType && l.data === t
                    ? e.push(l)
                    : e.push(document.createTextNode(t));
                }
              }
              return o;
            })(a, e, n, o)
          )
            return w(() => (n = tL(t, a, n, r, !0))), () => n;
          if (i.context) {
            if (!a.length) return n;
            if (void 0 === r) return [...t.childNodes];
            let e = a[0],
              i = [e];
            for (; (e = e.nextSibling) !== r; ) i.push(e);
            return (n = i);
          }
          if (0 === a.length) {
            if (((n = tq(t, n, r)), s)) return n;
          } else
            l
              ? 0 === n.length
                ? tU(t, a, r)
                : (function (t, e, n) {
                    let r = n.length,
                      i = e.length,
                      o = r,
                      a = 0,
                      s = 0,
                      l = e[i - 1].nextSibling,
                      u = null;
                    for (; a < i || s < o; ) {
                      if (e[a] === n[s]) {
                        a++, s++;
                        continue;
                      }
                      for (; e[i - 1] === n[o - 1]; ) i--, o--;
                      if (i === a) {
                        let e =
                          o < r ? (s ? n[s - 1].nextSibling : n[o - s]) : l;
                        for (; s < o; ) t.insertBefore(n[s++], e);
                      } else if (o === s)
                        for (; a < i; )
                          (u && u.has(e[a])) || e[a].remove(), a++;
                      else if (e[a] === n[o - 1] && n[s] === e[i - 1]) {
                        let r = e[--i].nextSibling;
                        t.insertBefore(n[s++], e[a++].nextSibling),
                          t.insertBefore(n[--o], r),
                          (e[i] = n[o]);
                      } else {
                        if (!u) {
                          u = new Map();
                          let t = s;
                          for (; t < o; ) u.set(n[t], t++);
                        }
                        let r = u.get(e[a]);
                        if (null != r) {
                          if (s < r && r < o) {
                            let l = a,
                              c = 1,
                              d;
                            for (
                              ;
                              ++l < i &&
                              l < o &&
                              null != (d = u.get(e[l])) &&
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
              : (n && tq(t), tU(t, a));
          n = a;
        } else if (e.nodeType) {
          if (i.context && e.parentNode) return (n = s ? [e] : e);
          if (Array.isArray(n)) {
            if (s) return (n = tq(t, n, r, e));
            tq(t, n, null, e);
          } else
            null != n && "" !== n && t.firstChild
              ? t.replaceChild(e, t.firstChild)
              : t.appendChild(e);
          n = e;
        }
        return n;
      }
      function tU(t, e, n = null) {
        for (let r = 0, i = e.length; r < i; r++) t.insertBefore(e[r], n);
      }
      function tq(t, e, n, r) {
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
      var tz = !1;
      function tV(t, e = !1) {
        return e
          ? document.createElementNS("http://www.w3.org/2000/svg", t)
          : document.createElement(t);
      }
      function tB(t) {
        let e;
        let { useShadow: n } = t,
          r = document.createTextNode(""),
          o = () => t.mount || document.body,
          a = f,
          s = !!i.context;
        return (
          S(
            () => {
              s && (f.user = s = !1),
                e ||
                  (e = (function (t, e) {
                    let n = f,
                      r = h;
                    (f = t), (h = null);
                    try {
                      return F(e, !0);
                    } catch (t) {
                      J(t);
                    } finally {
                      (f = n), (h = r);
                    }
                  })(a, () => k(() => t.children)));
              let i = o();
              if (i instanceof HTMLHeadElement) {
                let [t, n] = b(!1);
                v((n) => tP(i, () => (t() ? n() : e()), null)), T(() => n(!0));
              } else {
                let o = tV(t.isSVG ? "g" : "div", t.isSVG),
                  a =
                    n && o.attachShadow ? o.attachShadow({ mode: "open" }) : o;
                Object.defineProperty(o, "_$host", {
                  get: () => r.parentNode,
                  configurable: !0,
                }),
                  tP(a, e),
                  i.appendChild(o),
                  t.ref && t.ref(o),
                  T(() => i.removeChild(o));
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
          r = k(() => e.component);
        return k(() => {
          let t = r();
          switch (typeof t) {
            case "function":
              return A(() => t(n));
            case "string":
              let e, o;
              let a = tS.has(t),
                s = i.context
                  ? i.context &&
                    (e = i.registry.get(
                      (o = (function () {
                        let t = i.context;
                        return `${t.id}${t.count++}`;
                      })()),
                    ))
                    ? (i.completed && i.completed.add(e),
                      i.registry.delete(o),
                      e)
                    : (void 0)()
                  : tV(t, a);
              return tN(s, n, a), s;
          }
        });
      }
      var tH = (function () {
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
        tG = (function () {
          function t(t) {
            (this.generateIdentifier = t), (this.kv = new tH());
          }
          return (
            (t.prototype.register = function (t, e) {
              !this.kv.getByValue(t) &&
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
        tW = (function () {
          var t = function (e, n) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              })(e, n);
          };
          return function (e, n) {
            if ("function" != typeof n && null !== n)
              throw TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })(),
        tQ = (function (t) {
          function e() {
            var e =
              t.call(this, function (t) {
                return t.name;
              }) || this;
            return (e.classToAllowedProps = new Map()), e;
          }
          return (
            tW(e, t),
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
        })(tG),
        tK = function (t, e) {
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
      function tZ(t, e) {
        Object.entries(t).forEach(function (t) {
          var n = tK(t, 2),
            r = n[0];
          return e(n[1], r);
        });
      }
      function tJ(t, e) {
        return -1 !== t.indexOf(e);
      }
      function tY(t, e) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          if (e(r)) return r;
        }
      }
      var tX = (function () {
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
        t8 = function (t) {
          return "Symbol" === Object.prototype.toString.call(t).slice(8, -1);
        },
        t4 = function (t) {
          return "number" == typeof t && isNaN(t);
        },
        t9 = function (t) {
          return (
            "boolean" == typeof t ||
            null === t ||
            t0(t) ||
            ("number" == typeof t && !isNaN(t)) ||
            "string" == typeof t ||
            t8(t)
          );
        },
        t7 = function (t) {
          return t.replace(/\./g, "\\.");
        },
        et = function (t) {
          return t.map(String).map(t7).join(".");
        },
        ee = function (t) {
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
        en = function () {
          return (en =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
        er = function (t, e) {
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
        ei = function (t, e) {
          for (var n = 0, r = e.length, i = t.length; n < r; n++, i++)
            t[i] = e[n];
          return t;
        };
      function eo(t, e, n, r) {
        return { isApplicable: t, annotation: e, transform: n, untransform: r };
      }
      var ea = [
        eo(
          t0,
          "undefined",
          function () {
            return null;
          },
          function () {},
        ),
        eo(
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
        eo(
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
        eo(
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
        eo(
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
        eo(
          t6,
          "set",
          function (t) {
            return ei([], er(t.values()));
          },
          function (t) {
            return new Set(t);
          },
        ),
        eo(
          t3,
          "map",
          function (t) {
            return ei([], er(t.entries()));
          },
          function (t) {
            return new Map(t);
          },
        ),
        eo(
          function (t) {
            var e;
            return t4(t) || (e = t) === 1 / 0 || e === -1 / 0;
          },
          "number",
          function (t) {
            return t4(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity";
          },
          Number,
        ),
        eo(
          function (t) {
            return 0 === t && 1 / t == -1 / 0;
          },
          "number",
          function () {
            return "-0";
          },
          Number,
        ),
        eo(
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
      function es(t, e, n, r) {
        return { isApplicable: t, annotation: e, transform: n, untransform: r };
      }
      var el = es(
          function (t, e) {
            return !!t8(t) && !!e.symbolRegistry.getIdentifier(t);
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
        ec = es(
          function (t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView);
          },
          function (t) {
            return ["typed-array", t.constructor.name];
          },
          function (t) {
            return ei([], er(t));
          },
          function (t, e) {
            var n = eu[e[1]];
            if (!n) throw Error("Trying to deserialize unknown typed array");
            return new n(t);
          },
        );
      function ed(t, e) {
        return (
          null != t &&
          !!t.constructor &&
          !!e.classRegistry.getIdentifier(t.constructor)
        );
      }
      var ef = es(
          ed,
          function (t, e) {
            return ["class", e.classRegistry.getIdentifier(t.constructor)];
          },
          function (t, e) {
            var n = e.classRegistry.getAllowedProps(t.constructor);
            if (!n) return en({}, t);
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
        ep = es(
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
        eh = [ef, el, ep, ec],
        eg = function (t, e) {
          var n = tY(eh, function (n) {
            return n.isApplicable(t, e);
          });
          if (n) return { value: n.transform(t, e), type: n.annotation(t, e) };
          var r = tY(ea, function (n) {
            return n.isApplicable(t, e);
          });
          if (r) return { value: r.transform(t, e), type: r.annotation };
        },
        em = {};
      ea.forEach(function (t) {
        em[t.annotation] = t;
      });
      var ey = function (t, e, n) {
          if (t5(e))
            switch (e[0]) {
              case "symbol":
                return el.untransform(t, e, n);
              case "class":
                return ef.untransform(t, e, n);
              case "custom":
                return ep.untransform(t, e, n);
              case "typed-array":
                return ec.untransform(t, e, n);
              default:
                throw Error("Unknown transformation: " + e);
            }
          else {
            var r = em[e];
            if (!r) throw Error("Unknown transformation: " + e);
            return r.untransform(t, n);
          }
        },
        ev = function (t, e) {
          for (var n = t.keys(); e > 0; ) n.next(), e--;
          return n.next().value;
        };
      function eb(t) {
        if (tJ(t, "__proto__"))
          throw Error("__proto__ is not allowed as a property");
        if (tJ(t, "prototype"))
          throw Error("prototype is not allowed as a property");
        if (tJ(t, "constructor"))
          throw Error("constructor is not allowed as a property");
      }
      var e_ = function (t, e) {
          eb(e);
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (t6(t)) t = ev(t, +r);
            else if (t3(t)) {
              var i = +r,
                o = 0 == +e[++n] ? "key" : "value",
                a = ev(t, i);
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
        ew = function (t, e, n) {
          if ((eb(e), 0 === e.length)) return n(t);
          for (var r = t, i = 0; i < e.length - 1; i++) {
            var o = e[i];
            if (t5(r)) r = r[+o];
            else if (t1(r)) r = r[o];
            else if (t6(r)) {
              var a = +o;
              r = ev(r, a);
            } else if (t3(r)) {
              if (i === e.length - 2) break;
              var a = +o,
                s = 0 == +e[++i] ? "key" : "value",
                l = ev(r, a);
              switch (s) {
                case "key":
                  r = l;
                  break;
                case "value":
                  r = r.get(l);
              }
            }
          }
          var u = e[e.length - 1];
          if ((t5(r) ? (r[+u] = n(r[+u])) : t1(r) && (r[u] = n(r[u])), t6(r))) {
            var c = ev(r, +u),
              d = n(c);
            c !== d && (r.delete(c), r.add(d));
          }
          if (t3(r)) {
            var a = +e[e.length - 2],
              f = ev(r, a),
              s = 0 == +u ? "key" : "value";
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
        eS = function (t, e) {
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
        ek = function (t, e) {
          for (var n = 0, r = e.length, i = t.length; n < r; n++, i++)
            t[i] = e[n];
          return t;
        },
        ex = function (t, e, n, r, i, o, a) {
          void 0 === i && (i = []),
            void 0 === o && (o = []),
            void 0 === a && (a = new Map());
          var s,
            l = t9(t);
          if (!l) {
            (u = i), (c = e.get(t)) ? c.push(u) : e.set(t, [u]);
            var u,
              c,
              d = a.get(t);
            if (d) return r ? { transformedValue: null } : d;
          }
          if (!(t1(t) || t5(t) || t3(t) || t6(t) || ed(t, n))) {
            var f = eg(t, n),
              p = f
                ? { transformedValue: f.value, annotations: [f.type] }
                : { transformedValue: t };
            return l || a.set(t, p), p;
          }
          if (tJ(o, t)) return { transformedValue: null };
          var h = eg(t, n),
            g =
              null !== (s = null == h ? void 0 : h.value) && void 0 !== s
                ? s
                : t,
            m = t5(g) ? [] : {},
            y = {};
          tZ(g, function (s, l) {
            var u = ex(
              s,
              e,
              n,
              r,
              ek(ek([], eS(i)), [l]),
              ek(ek([], eS(o)), [t]),
              a,
            );
            (m[l] = u.transformedValue),
              t5(u.annotations)
                ? (y[l] = u.annotations)
                : t1(u.annotations) &&
                  tZ(u.annotations, function (t, e) {
                    y[t7(l) + "." + e] = t;
                  });
          });
          var v = t2(y)
            ? { transformedValue: m, annotations: h ? [h.type] : void 0 }
            : { transformedValue: m, annotations: h ? [h.type, y] : y };
          return l || a.set(t, v), v;
        };
      function eA(t) {
        return Object.prototype.toString.call(t).slice(8, -1);
      }
      function eC(t) {
        return "Array" === eA(t);
      }
      var eE = function () {
          return (eE =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
        eT = function (t, e) {
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
        eO = function (t, e) {
          for (var n = 0, r = e.length, i = t.length; n < r; n++, i++)
            t[i] = e[n];
          return t;
        },
        eR = (function () {
          function t(t) {
            var e = (void 0 === t ? {} : t).dedupe;
            (this.classRegistry = new tQ()),
              (this.symbolRegistry = new tG(function (t) {
                var e;
                return null !== (e = t.description) && void 0 !== e ? e : "";
              })),
              (this.customTransformerRegistry = new tX()),
              (this.allowedErrorProps = []),
              (this.dedupe = void 0 !== e && e);
          }
          return (
            (t.prototype.serialize = function (t) {
              var e,
                n,
                r,
                i = new Map(),
                o = ex(t, i, this, this.dedupe),
                a = { json: o.transformedValue };
              o.annotations &&
                (a.meta = eE(eE({}, a.meta), { values: o.annotations }));
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
                    var i = eS(t),
                      o = i[0],
                      a = i.slice(1);
                    0 === o.length ? (r = a.map(et)) : (n[et(o)] = a.map(et));
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
                  (a.meta = eE(eE({}, a.meta), { referentialEqualities: s })),
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
                  return eC(e)
                    ? e.map((e) => t(e, n))
                    : !(function (t) {
                          if ("Object" !== eA(t)) return !1;
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
                          if (eC(n.props) && !n.props.includes(i)) return r;
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
                        tZ(e, function (e, i) {
                          return t(e, n, ek(ek([], eS(r)), eS(ee(i))));
                        });
                        return;
                      }
                      var i = eS(e, 2),
                        o = i[0],
                        a = i[1];
                      a &&
                        tZ(a, function (e, i) {
                          t(e, n, ek(ek([], eS(r)), eS(ee(i))));
                        }),
                        n(o, r);
                    }
                  })(n, function (t, n) {
                    e = ew(e, n, function (e) {
                      return ey(e, t, r);
                    });
                  }),
                  (a = e)),
                (null == o ? void 0 : o.referentialEqualities) &&
                  (a = (function (t, e) {
                    function n(e, n) {
                      var r = e_(t, ee(n));
                      e.map(ee).forEach(function (e) {
                        t = ew(t, e, function () {
                          return r;
                        });
                      });
                    }
                    if (t5(e)) {
                      var r = eS(e, 2),
                        i = r[0],
                        o = r[1];
                      i.forEach(function (e) {
                        t = ew(t, ee(e), function () {
                          return t;
                        });
                      }),
                        o && tZ(o, n);
                    } else tZ(e, n);
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
              this.customTransformerRegistry.register(eE({ name: e }, t));
            }),
            (t.prototype.allowErrorProps = function () {
              for (var t, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              (t = this.allowedErrorProps).push.apply(t, eO([], eT(e)));
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
        eI = eR.serialize;
      eR.deserialize;
      var eN = eR.stringify;
      function eM(t) {
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
      function ej({ queryState: t, observerCount: e, isStale: n }) {
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
      function e$(t) {
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
      eR.parse,
        eR.registerClass,
        eR.registerCustom,
        eR.registerSymbol,
        eR.allowErrorProps;
      var eL = (t, e = !1) => {
          let { json: n } = eI(t);
          return JSON.stringify(n, null, e ? 2 : void 0);
        },
        eU = (t) =>
          "idle" !== t.state.fetchStatus
            ? 0
            : t.getObserversCount()
              ? t.isStale()
                ? 2
                : 1
              : 3,
        eq = (t, e) => (t.state.dataUpdatedAt < e.state.dataUpdatedAt ? 1 : -1),
        ez = {
          status: (t, e) =>
            eU(t) === eU(e) ? eq(t, e) : eU(t) > eU(e) ? 1 : -1,
          "query hash": (t, e) => t.queryHash.localeCompare(e.queryHash),
          "last updated": eq,
        },
        eV = (t) =>
          t.state.isPaused
            ? 0
            : "error" === t.state.status
              ? 2
              : "pending" === t.state.status
                ? 1
                : 3,
        eB = (t, e) => (t.state.submittedAt < e.state.submittedAt ? 1 : -1),
        eF = {
          status: (t, e) =>
            eV(t) === eV(e) ? eB(t, e) : eV(t) > eV(e) ? 1 : -1,
          "last updated": eB,
        },
        eH = (t) =>
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
                T(() => t.removeEventListener("change", n));
            }),
            t
          );
        },
        eW = (t, e, n) => {
          if (0 === e.length) return n;
          if (t instanceof Map) {
            let r = new Map(t);
            if (1 === e.length) return r.set(e[0], n), r;
            let [i, ...o] = e;
            return r.set(i, eW(r.get(i), o, n)), r;
          }
          if (t instanceof Set) return new Set(eW(Array.from(t), e, n));
          if (Array.isArray(t)) {
            let r = [...t];
            if (1 === e.length) return (r[e[0]] = n), r;
            let [i, ...o] = e;
            return (r[i] = eW(r[i], o, n)), r;
          }
          if (t instanceof Object) {
            let r = { ...t };
            if (1 === e.length) return (r[e[0]] = n), r;
            let [i, ...o] = e;
            return (r[i] = eW(r[i], o, n)), r;
          }
          return t;
        },
        eQ = (t, e) => {
          if (t instanceof Map) {
            let n = new Map(t);
            if (1 === e.length) return n.delete(e[0]), n;
            let [r, ...i] = e;
            return n.set(r, eQ(n.get(r), i)), n;
          }
          if (t instanceof Set) return new Set(eQ(Array.from(t), e));
          if (Array.isArray(t)) {
            let n = [...t];
            if (1 === e.length)
              return n.filter((t, n) => n.toString() !== e[0]);
            let [r, ...i] = e;
            return (n[r] = eQ(n[r], i)), n;
          }
          if (t instanceof Object) {
            let n = { ...t };
            if (1 === e.length) return delete n[e[0]], n;
            let [r, ...i] = e;
            return (n[r] = eQ(n[r], i)), n;
          }
          return t;
        },
        eK = (t, e) => {
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
    27032: (t, e, n) => {
      "use strict";
      n.d(e, { Aq: () => a, R9: () => r, q7: () => l, sr: () => s });
      var r,
        i = n(84437);
      !(function (t) {
        (t.WRITABLE_RESOURCE_GRAPHQL = "writable_resource_graphql"),
          (t.MISSING_URL_CONTEXT_TELEMETRY = "missing_url_context_telemetry");
      })(r || (r = {}));
      let o = new Set();
      function a(t) {
        Array.isArray(t) &&
          (function (t) {
            t.forEach((t) => {
              o.add(t);
            });
          })(t.filter((t) => (0, i.Rj)(r, t)));
      }
      function s(t) {
        return o.has(t);
      }
      function l() {
        return o;
      }
    },
    29439: (t, e, n) => {
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
      n.d(e, { Et: () => a, LI: () => i, fp: () => o, ic: () => r });
    },
    30856: (t, e, n) => {
      "use strict";
      n.d(e, { O: () => i });
      var r = n(17417);
      function i() {
        let t = [];
        return {
          add: (e) => {
            t.push(e) > 500 && t.splice(0, 1);
          },
          remove: (e) => {
            (0, r.A)(t, e);
          },
          drain: (e) => {
            t.forEach((t) => t(e)), (t.length = 0);
          },
        };
      }
    },
    31195: (t, e, n) => {
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
                  let e = l.exec(t);
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
                  let e = u.exec(t);
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
      n.d(e, { T: () => r, h: () => p });
      let i =
          "((?:file|https?|blob|chrome-extension|electron|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)",
        o = "(?::(\\d+))",
        a = RegExp(`^\\s*at (.*?) ?\\(${i}${o}?${o}?\\)?\\s*$`, "i"),
        s = RegExp(`\\((\\S*)${o}${o}\\)`),
        l = RegExp(`^\\s*at ?${i}${o}?${o}??\\s*$`, "i"),
        u =
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
        var i;
        let o, a;
        let { name: s, message: l } =
          ((i = t),
          "[object String]" === {}.toString.call(i) && ([, o, a] = h.exec(i)),
          { name: o, message: a });
        return { name: s, message: l, stack: [{ url: e, column: r, line: n }] };
      }
      let h =
        /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/;
    },
    32621: (t, e, n) => {
      "use strict";
      n.d(e, { H: () => s, t: () => l });
      var r = n(43066),
        i = n(84957),
        o = n(77930),
        a = n(21580);
      function s(t, e, n, { computeHandlingStack: r } = {}) {
        let l = t[e];
        if ("function" != typeof l) {
          if (!(e in t && e.startsWith("on"))) return { stop: o.l };
          l = o.l;
        }
        let u = !1,
          c = function () {
            let t;
            if (u) return l.apply(this, arguments);
            let e = Array.from(arguments);
            (0, i.um)(n, null, [
              {
                target: this,
                parameters: e,
                onPostCall: (e) => {
                  t = e;
                },
                handlingStack: r ? (0, a.uC)("instrumented method") : void 0,
              },
            ]);
            let o = l.apply(this, e);
            return t && (0, i.um)(t, null, [o]), o;
          };
        return (
          (t[e] = c),
          {
            stop: () => {
              (u = !0), t[e] === c && (t[e] = l);
            },
          }
        );
      }
      function l(t, e, n) {
        let i = Object.getOwnPropertyDescriptor(t, e);
        if (!i || !i.set || !i.configurable) return { stop: o.l };
        let a = o.l,
          s = (t, e) => {
            (0, r.wg)(() => {
              s !== a && n(t, e);
            }, 0);
          },
          l = function (t) {
            i.set.call(this, t), s(this, t);
          };
        return (
          Object.defineProperty(t, e, { set: l }),
          {
            stop: () => {
              var n;
              (null === (n = Object.getOwnPropertyDescriptor(t, e)) ||
              void 0 === n
                ? void 0
                : n.set) === l && Object.defineProperty(t, e, i),
                (s = a);
            },
          }
        );
      }
    },
    37992: (t, e, n) => {
      "use strict";
      n.d(e, { Ww: () => o, Y9: () => i, d0: () => a });
      var r = n(8275);
      function i() {
        let t = (0, r.V)().DatadogEventBridge;
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
            null === (e = (0, r.V)().location) || void 0 === e
              ? void 0
              : e.hostname);
        let n = i();
        return (
          !!n &&
          n.getAllowedWebViewHosts().some((e) => t === e || t.endsWith(`.${e}`))
        );
      }
    },
    38513: (t, e, n) => {
      "use strict";
      n.d(e, {
        As: () => l,
        Dr: () => f,
        Nt: () => u,
        Qb: () => c,
        bJ: () => d,
        e6: () => s,
      });
      var r = n(16056),
        i = n(92266),
        o = n(31195),
        a = n(21580);
      let s = "No stack, consider using an instance of Error";
      function l({
        stackTrace: t,
        originalError: e,
        handlingStack: n,
        componentStack: o,
        startClocks: l,
        nonErrorPrefix: p,
        source: h,
        handling: g,
      }) {
        var m, y, v, b, _, w;
        let S = d(e),
          k =
            ((m = t),
            (y = S),
            (v = p),
            (b = e),
            (null == m ? void 0 : m.message) && (null == m ? void 0 : m.name)
              ? m.message
              : y
                ? "Empty message"
                : `${v} ${(0, i.s)((0, r.a)(b))}`),
          x = ((_ = S),
          void 0 !== (w = t) &&
            (_ ||
              (w.stack.length > 0 &&
                (w.stack.length > 1 || void 0 !== w.stack[0].url))))
            ? (0, a.Yn)(t)
            : s,
          A = S ? f(e, h) : void 0,
          C = t ? t.name : void 0,
          E = u(e),
          T = c(e);
        return {
          startClocks: l,
          source: h,
          handling: g,
          handlingStack: n,
          componentStack: o,
          originalError: e,
          type: C,
          message: k,
          stack: x,
          causes: A,
          fingerprint: E,
          context: T,
        };
      }
      function u(t) {
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
          let t = (0, o.T)(n.cause);
          r.push({
            message: n.cause.message,
            source: e,
            type: null == t ? void 0 : t.name,
            stack: t && (0, a.Yn)(t),
          }),
            (n = n.cause);
        }
        return r.length ? r : void 0;
      }
    },
    38737: (t, e, n) => {
      "use strict";
      n.d(e, { l: () => a, q: () => o });
      var r = n(84957),
        i = n(96178);
      function o(t, e, n, r, i) {
        return a(t, e, [n], r, i);
      }
      function a(t, e, n, o, { once: s, capture: l, passive: u } = {}) {
        let c = (0, r.dm)((e) => {
            (e.isTrusted || e.__ddIsTrusted || t.allowUntrustedEvents) &&
              (s && h(), o(e));
          }),
          d = u ? { capture: l, passive: u } : l,
          f =
            window.EventTarget && e instanceof EventTarget
              ? window.EventTarget.prototype
              : e,
          p = (0, i.W)(f, "addEventListener");
        function h() {
          let t = (0, i.W)(f, "removeEventListener");
          n.forEach((n) => t.call(e, n, c, d));
        }
        return n.forEach((t) => p.call(e, t, c, d)), { stop: h };
      }
    },
    43066: (t, e, n) => {
      "use strict";
      n.d(e, { DJ: () => s, vG: () => u, wg: () => a, yb: () => l });
      var r = n(96178),
        i = n(84957),
        o = n(8275);
      function a(t, e) {
        return (0, r.W)((0, o.V)(), "setTimeout")((0, i.dm)(t), e);
      }
      function s(t) {
        (0, r.W)((0, o.V)(), "clearTimeout")(t);
      }
      function l(t, e) {
        return (0, r.W)((0, o.V)(), "setInterval")((0, i.dm)(t), e);
      }
      function u(t) {
        (0, r.W)((0, o.V)(), "clearInterval")(t);
      }
    },
    45019: (t, e, n) => {
      "use strict";
      let r;
      n.d(e, {
        $H: () => l,
        $S: () => g,
        FR: () => u,
        Gw: () => b,
        M8: () => m,
        MA: () => s,
        OY: () => o,
        Oc: () => y,
        TP: () => d,
        Zj: () => f,
        gs: () => _,
        iW: () => a,
        jR: () => c,
        nx: () => h,
        pu: () => w,
        vk: () => v,
        x3: () => p,
      });
      var i = n(29439);
      let o = 1e3,
        a = 6e4,
        s = 36e5,
        l = 31536e6;
      function u(t) {
        return {
          relative: t,
          timeStamp: (function (t) {
            var e;
            let n = p() - performance.now();
            return n > S()
              ? Math.round(
                  (function (t, e) {
                    return t + e;
                  })(n, t),
                )
              : ((e = t), Math.round(S() + e));
          })(t),
        };
      }
      function c(t) {
        return { relative: _(t), timeStamp: t };
      }
      function d() {
        var t;
        return Math.round(p() - ((t = S()), t + performance.now()));
      }
      function f(t) {
        return (0, i.Et)(t) ? (0, i.LI)(1e6 * t, 0) : t;
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
      function b(t, e) {
        return t + e;
      }
      function _(t) {
        return t - S();
      }
      function w(t) {
        return t < l;
      }
      function S() {
        return void 0 === r && (r = performance.timing.navigationStart), r;
      }
    },
    46535: () => {},
    46928: (t, e, n) => {
      "use strict";
      function r(t) {
        return null === t ? "null" : Array.isArray(t) ? "array" : typeof t;
      }
      n.d(e, { P: () => r });
    },
    47069: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => a });
      var r = n(34023),
        i = n(85416),
        o = n(17779);
      class a extends r.Component {
        constructor(t) {
          super(t),
            t.cookies
              ? (this.cookies = t.cookies)
              : (this.cookies = new i.A(void 0, t.defaultSetOptions));
        }
        render() {
          return r.createElement(
            o.Kq,
            { value: this.cookies },
            this.props.children,
          );
        }
      }
    },
    47092: () => {},
    47474: (t) => {
      t.exports = function (t, e, n) {
        for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
          if (n(e, t[r])) return !0;
        return !1;
      };
    },
    47752: (t, e, n) => {
      var r = n(59254);
      t.exports = function (t) {
        return t && t.length ? r(t) : [];
      };
    },
    50929: (t, e, n) => {
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
      n.d(e, { G: () => r, i: () => i });
    },
    51064: (t, e, n) => {
      "use strict";
      n.d(e, { y: () => i });
      var r = n(87189);
      function i(t, e) {
        return (...n) => {
          try {
            return t(...n);
          } catch (t) {
            r.Vy.error(e, t);
          }
        };
      }
    },
    59254: (t, e, n) => {
      var r = n(8940),
        i = n(92282),
        o = n(47474),
        a = n(74356),
        s = n(78434),
        l = n(78500);
      t.exports = function (t, e, n) {
        var u = -1,
          c = i,
          d = t.length,
          f = !0,
          p = [],
          h = p;
        if (n) (f = !1), (c = o);
        else if (d >= 200) {
          var g = e ? null : s(t);
          if (g) return l(g);
          (f = !1), (c = a), (h = new r());
        } else h = e ? [] : p;
        t: for (; ++u < d; ) {
          var m = t[u],
            y = e ? e(m) : m;
          if (((m = n || 0 !== m ? m : 0), f && y == y)) {
            for (var v = h.length; v--; ) if (h[v] === y) continue t;
            e && h.push(y), p.push(m);
          } else c(h, y, n) || (h !== p && h.push(y), p.push(m));
        }
        return p;
      };
    },
    59880: (t, e, n) => {
      "use strict";
      n.d(e, {
        Rr: () => T,
        A2: () => C,
        VJ: () => E,
        Q6: () => O,
        JK: () => x,
        Wb: () => A,
        a5: () => k,
      });
      var r = n(87189),
        i = n(38513),
        o = n(21580),
        a = n(27032),
        s = n(71151),
        l = n(19004),
        u = n(45019),
        c = n(84957),
        d = n(92935),
        f = n(29439),
        p = n(92266),
        h = n(13977),
        g = n(31195),
        m = n(6085),
        y = n(30856);
      let v = { log: "log", configuration: "configuration", usage: "usage" },
        b = [
          "https://www.datadoghq-browser-agent.com",
          "https://www.datad0g-browser-agent.com",
          "https://d3uc069fcn7uxw.cloudfront.net",
          "https://d20xtzwzcl0ceb.cloudfront.net",
          "http://localhost",
          "<anonymous>",
        ],
        _ = [s.R8],
        w = (0, y.O)(),
        S = (t) => {
          w.add(() => S(t));
        };
      function k(t, e) {
        let n;
        let r = new l.c(),
          i = new Set(),
          o = !_.includes(e.site) && (0, f.ic)(e.telemetrySampleRate),
          s = {
            [v.log]: o,
            [v.configuration]:
              o && (0, f.ic)(e.telemetryConfigurationSampleRate),
            [v.usage]: o && (0, f.ic)(e.telemetryUsageSampleRate),
          },
          g = {
            is_local_file: "file:" === window.location.protocol,
            is_worker: "WorkerGlobalScope" in self,
          };
        return (
          (S = (o) => {
            let l = (0, p.s)(o);
            if (
              s[o.type] &&
              i.size < e.maxTelemetryEventsPerPage &&
              !i.has(l)
            ) {
              var c, f, y;
              let e =
                ((c = t),
                (f = o),
                (y = g),
                (0, h.kg)(
                  {
                    type: "telemetry",
                    date: (0, u.nx)(),
                    service: c,
                    version: "6.5.1",
                    source: "browser",
                    _dd: { format_version: 2 },
                    telemetry: (0, h.kg)(f, {
                      runtime_env: y,
                      connectivity: (0, m.q)(),
                      sdk_setup: "npm",
                    }),
                    experimental_features: Array.from((0, a.q7)()),
                  },
                  void 0 !== n ? n() : {},
                ));
              r.notify(e), (0, d.b)("telemetry", e), i.add(l);
            }
          }),
          (0, c.Bd)(E),
          {
            setContextProvider: (t) => {
              n = t;
            },
            observable: r,
            enabled: o,
          }
        );
      }
      function x() {
        w.drain();
      }
      function A(t) {
        return t.site === s.Bb;
      }
      function C(t, e) {
        (0, c.oO)(r.bP.debug, t, e),
          S({ type: v.log, message: t, status: "debug", ...e });
      }
      function E(t, e) {
        S({
          type: v.log,
          status: "error",
          ...(function (t) {
            if ((0, i.bJ)(t)) {
              var e;
              let n = (0, g.T)(t);
              return {
                error: {
                  kind: n.name,
                  stack: (0, o.Yn)(
                    (((e = n).stack = e.stack.filter(
                      (t) => !t.url || b.some((e) => t.url.startsWith(e)),
                    )),
                    e),
                  ),
                },
                message: n.message,
              };
            }
            return {
              error: { stack: i.e6 },
              message: `Uncaught ${(0, p.s)(t)}`,
            };
          })(t),
          ...e,
        });
      }
      function T(t) {
        S({ type: v.configuration, configuration: t });
      }
      function O(t) {
        S({ type: v.usage, usage: t });
      }
    },
    65218: (t, e, n) => {
      "use strict";
      n.d(e, { L: () => i });
      var r = n(34023);
      function i(t, e, n) {
        (0, r.useInsertionEffect)(() => t.on(e, n), [t, e, n]);
      }
    },
    65868: (t, e, n) => {
      "use strict";
      n.d(e, { sA: () => b });
      var r = n(59880),
        i = n(84957),
        o = n(38737),
        a = n(43066),
        s = n(45019),
        l = n(4550),
        u = n(50929),
        c = n(77826);
      let d = 80 * l._m,
        f = 3 * l.iH,
        p = s.iW,
        h = s.OY;
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
                      (0, a.wg)(() => {
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
            var o;
            e.bandwidthMonitor.remove(t),
              "opaque" !== (o = n).type &&
              ((0 === o.status && !navigator.onLine) ||
                408 === o.status ||
                429 === o.status ||
                (0, u.G)(o.status))
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
            message: `Reached max ${r} events size queued for upload: ${f / l.iH}MiB`,
            source: c.g.AGENT,
            startClocks: (0, s.M8)(),
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
            !this.isFull() && (t.push(e), (this.bytesCount += e.bytesCount));
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
      function b(t, e, n) {
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
            var o, a, s, l;
            return (
              (o = t),
              (a = e),
              (s = n),
              (l = r),
              void ((function () {
                try {
                  return (
                    window.Request && "keepalive" in new Request("http://a")
                  );
                } catch (t) {
                  return !1;
                }
              })() && s.bytesCount < a
                ? fetch(o.build("fetch", s), {
                    method: "POST",
                    body: s.data,
                    keepalive: !0,
                    mode: "cors",
                  }).then(
                    (0, i.dm)((t) =>
                      null == l
                        ? void 0
                        : l({ status: t.status, type: t.type }),
                    ),
                    (0, i.dm)(() => {
                      w(o.build("xhr", s), s.data, l);
                    }),
                  )
                : w(o.build("xhr", s), s.data, l))
            );
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
                  var i;
                  (i = t), _ || ((_ = !0), (0, r.VJ)(i));
                }
              w(t.build("xhr", n), n.data);
            })(t, e, n);
          },
        };
      }
      let _ = !1;
      function w(t, e, n) {
        let r = new XMLHttpRequest();
        r.open("POST", t, !0),
          e instanceof Blob && r.setRequestHeader("Content-Type", e.type),
          (0, o.q)(
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
    68504: (t, e, n) => {
      "use strict";
      n.d(e, { _: () => c });
      var r,
        i = n(12296),
        o = n(27357),
        a = n(34023),
        s = null != (r = i.A.default) ? r : i.A,
        l = n(85786),
        u = n(94799);
      function c({ children: t, ...e }) {
        return (0, u.jsx)(l.C, {
          value: (function (t) {
            let e = (0, a.useMemo)(() => {
              let e = s({ key: "css", prepend: !0, ...t });
              return (e.compat = !0), e;
            }, [t]);
            return (
              (0, o.useServerInsertedHTML)(() =>
                (0, a.createElement)("style", {
                  key: e.key,
                  "data-emotion": `${e.key} ${Object.keys(e.inserted).join(" ")}`,
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
    69848: (t, e, n) => {
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
      n.d(e, { F2: () => i, nr: () => o });
    },
    71151: (t, e, n) => {
      "use strict";
      n.d(e, {
        $A: () => l,
        Bb: () => r,
        Ih: () => u,
        NW: () => o,
        R8: () => s,
        TC: () => i,
        dV: () => a,
      });
      let r = "datad0g.com",
        i = "dd0g-gov.com",
        o = "datadoghq.com",
        a = "datadoghq.eu",
        s = "ddog-gov.com",
        l = "pci.browser-intake-datadoghq.com",
        u = ["ddsource", "ddtags"];
    },
    75984: (t, e, n) => {
      "use strict";
      n.d(e, { Select: () => h });
      var r = n(94799),
        i = n(26943),
        o = n(49854),
        a = n(16881),
        s = n(33724),
        l = n(34023),
        u = n(3603),
        c = n(17474),
        d = n(39738),
        f = n(13331),
        p = n(98814);
      let h = (0, d.forwardRef)((t, e) => {
        var n;
        let l = (0, p.useMultiStyleConfig)("Select", t),
          {
            rootProps: d,
            placeholder: h,
            icon: g,
            color: m,
            height: v,
            h: b,
            minH: _,
            minHeight: w,
            iconColor: S,
            iconSize: k,
            ...x
          } = (0, i.M)(t),
          [A, C] = (0, a.l)(x, o.GF),
          E = (0, c.useFormControl)(C),
          T = {
            paddingEnd: "2rem",
            ...l.field,
            _focus: {
              zIndex: "unset",
              ...(null === (n = l.field) || void 0 === n ? void 0 : n._focus),
            },
          };
        return (0, r.jsxs)(f.chakra.div, {
          className: "chakra-select__wrapper",
          __css: {
            width: "100%",
            height: "fit-content",
            position: "relative",
            color: m,
          },
          ...A,
          ...d,
          children: [
            (0, r.jsx)(u.SelectField, {
              ref: e,
              height: null != b ? b : v,
              minH: null != _ ? _ : w,
              placeholder: h,
              ...E,
              __css: T,
              children: t.children,
            }),
            (0, r.jsx)(y, {
              "data-disabled": (0, s.s)(E.disabled),
              ...((S || m) && { color: S || m }),
              __css: l.icon,
              ...(k && { fontSize: k }),
              children: g,
            }),
          ],
        });
      });
      h.displayName = "Select";
      let g = (t) =>
          (0, r.jsx)("svg", {
            viewBox: "0 0 24 24",
            ...t,
            children: (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
            }),
          }),
        m = (0, f.chakra)("div", {
          baseStyle: {
            position: "absolute",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            top: "50%",
            transform: "translateY(-50%)",
          },
        }),
        y = (t) => {
          let { children: e = (0, r.jsx)(g, {}), ...n } = t,
            i = (0, l.cloneElement)(e, {
              role: "presentation",
              className: "chakra-select__icon",
              focusable: !1,
              "aria-hidden": !0,
              style: { width: "1em", height: "1em", color: "currentColor" },
            });
          return (0, r.jsx)(m, {
            ...n,
            className: "chakra-select__icon-wrapper",
            children: (0, l.isValidElement)(e) ? i : null,
          });
        };
      y.displayName = "SelectIcon";
    },
    76747: () => {},
    77269: (t, e, n) => {
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
      n.d(e, { KQ: () => i, Uk: () => r, WP: () => o });
    },
    77826: (t, e, n) => {
      "use strict";
      n.d(e, { g: () => r });
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
    77930: (t, e, n) => {
      "use strict";
      n.d(e, { l: () => o, n: () => i });
      var r = n(43066);
      function i(t, e, n) {
        let i, o;
        let a = !n || void 0 === n.leading || n.leading,
          s = !n || void 0 === n.trailing || n.trailing,
          l = !1;
        return {
          throttled: (...n) => {
            if (l) {
              i = n;
              return;
            }
            a ? t(...n) : (i = n),
              (l = !0),
              (o = (0, r.wg)(() => {
                s && i && t(...i), (l = !1), (i = void 0);
              }, e));
          },
          cancel: () => {
            (0, r.DJ)(o), (l = !1), (i = void 0);
          },
        };
      }
      function o() {}
    },
    78434: (t, e, n) => {
      var r = n(5662),
        i = n(88329),
        o = n(78500);
      t.exports =
        r && 1 / o(new r([, -0]))[1] == 1 / 0
          ? function (t) {
              return new r(t);
            }
          : i;
    },
    79074: (t, e, n) => {
      "use strict";
      n.d(e, { L: () => T });
      var r = n(11204),
        i = n(8275),
        o = n(11556),
        a = n(37992),
        s = n(77930),
        l = n(79119),
        u = n(38737),
        c = n(59880),
        d = n(4550);
      function f(t, e, n) {
        let r,
          i = 0,
          o = [],
          a = 0,
          s = [],
          { stop: l } = (0, u.q)(t, e, "message", ({ data: t }) => {
            if ("wrote" !== t.type || t.streamId !== n) return;
            (i += t.additionalBytesCount), o.push(t.result), (r = t.trailer);
            let e = s.shift();
            e && e.id === t.id
              ? e.writeCallback
                ? e.writeCallback(t.result.byteLength)
                : e.finishCallback && e.finishCallback()
              : (l(), (0, c.A2)("Worker responses received out of order."));
          });
        function f() {
          let t = 0 === o.length ? new Uint8Array(0) : (0, d.wh)(o.concat(r)),
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
            l();
          },
        };
      }
      var p = n(45019),
        h = n(43066),
        g = n(87189);
      function m({ configuredUrl: t, error: e, source: n, scriptType: r }) {
        var i;
        if (
          (g.Vy.error(
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
            g.Vy.error(
              `${e} See documentation at ${g.fH}/integrations/content_security_policy_logs/#use-csp-with-real-user-monitoring-and-session-replay`,
            );
        } else "worker" === r && (0, c.VJ)(e);
      }
      let y = 30 * p.OY;
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
      let b = { status: 0 };
      function _(t, e, n, r = v) {
        switch (
          (0 === b.status &&
            (function (t, e, n = v) {
              try {
                let r = n(t),
                  { stop: i } = (0, u.q)(t, r, "error", (n) => {
                    w(t, e, n);
                  }),
                  { stop: o } = (0, u.q)(t, r, "message", ({ data: n }) => {
                    var r;
                    "errored" === n.type
                      ? w(t, e, n.error, n.streamId)
                      : "initialized" === n.type &&
                        ((r = n.version),
                        1 === b.status &&
                          (b = {
                            status: 3,
                            worker: b.worker,
                            stop: b.stop,
                            version: r,
                          }));
                  });
                r.postMessage({ action: "init" }),
                  (0, h.wg)(() => {
                    var t;
                    return (
                      (t = e),
                      void (
                        1 === b.status &&
                        (g.Vy.error(
                          `${t} failed to start: a timeout occurred while initializing the Worker`,
                        ),
                        b.initializationFailureCallbacks.forEach((t) => t()),
                        (b = { status: 2 }))
                      )
                    );
                  }, y),
                  (b = {
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
          b.status)
        ) {
          case 1:
            return b.initializationFailureCallbacks.push(n), b.worker;
          case 3:
            return b.worker;
        }
      }
      function w(t, e, n, r) {
        1 === b.status || 0 === b.status
          ? (m({
              configuredUrl: t.workerUrl,
              error: n,
              source: e,
              scriptType: "worker",
            }),
            1 === b.status &&
              b.initializationFailureCallbacks.forEach((t) => t()),
            (b = { status: 2 }))
          : (0, c.VJ)(n, {
              worker_version: 3 === b.status && b.version,
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
      var k = n(9389),
        x = n(82328),
        A = n(84957);
      async function C() {
        return (await n.e(9777).then(n.bind(n, 20240))).startRecording;
      }
      let E = (function (t, e) {
          let n;
          if (((0, a.d0)() && !(0, a.Ww)("records")) || !S())
            return {
              start: s.l,
              stop: s.l,
              getReplayStats: () => void 0,
              onRumStart: s.l,
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
                getSessionReplayLink: s.l,
              },
              shouldStartImmediately: (t) =>
                1 === n || (0 === n && !t.startSessionReplayRecordingManually),
            });
          return {
            start: (t) => r.start(t),
            stop: () => r.stop(),
            getSessionReplayLink: () => r.getSessionReplayLink(),
            onRumStart: function (e, n, a, s, l) {
              let u;
              (r = (function (t, e, n, r, i, a) {
                let s,
                  l = 0;
                e.subscribe(9, () => {
                  (2 === l || 3 === l) && (d(), (l = 1));
                }),
                  e.subscribe(11, (t) => {
                    t.reason === k.y5.UNLOADING && d();
                  }),
                  e.subscribe(10, () => {
                    1 === l && c();
                  });
                let u = async () => {
                  let [o] = await Promise.all([
                    i(),
                    (0, x.N)(t, "interactive"),
                  ]);
                  if (2 !== l) return;
                  let u = a();
                  if (!u || !o) {
                    l = 0;
                    return;
                  }
                  ({ stop: s } = o(e, t, n, r, u)), (l = 3);
                };
                function c(t) {
                  var e, r, i, o, a;
                  let s = n.findTrackedSession();
                  if (
                    ((e = s),
                    (r = t),
                    !e || (0 === e.sessionReplay && (!r || !r.force)))
                  ) {
                    l = 1;
                    return;
                  }
                  if (2 !== (i = l) && 3 !== i) {
                    (l = 2),
                      u().catch(A.Dx),
                      (o = s),
                      (a = t) &&
                        a.force &&
                        0 === o.sessionReplay &&
                        n.setForcedReplay();
                  }
                }
                function d() {
                  3 === l && (null == s || s()), (l = 0);
                }
                return {
                  start: c,
                  stop: d,
                  getSessionReplayLink: () =>
                    (function (t, e, n, r) {
                      var i, a;
                      let s = e.findTrackedSession(),
                        l =
                          ((i = s),
                          (a = r),
                          S()
                            ? i
                              ? 0 === i.sessionReplay
                                ? "incorrect-session-plan"
                                : a
                                  ? void 0
                                  : "replay-not-started"
                              : "rum-not-tracked"
                            : "browser-not-supported"),
                        u = n.findView();
                      return (0, o.dx)(t, {
                        viewContext: u,
                        errorType: l,
                        session: s,
                      });
                    })(t, n, r, 0 !== l),
                  isRecording: () => 3 === l,
                };
              })(n, e, a, s, t, function () {
                return (
                  !u &&
                    (null != l ||
                      (l = _(
                        n,
                        "Datadog Session Replay",
                        () => {
                          r.stop();
                        },
                        void 0,
                      )),
                    l && (u = f(n, l, 1))),
                  u
                );
              })),
                i(n) && r.start();
            },
            isRecording: () => 3 === b.status && r.isRecording(),
            getReplayStats: (t) => (3 === b.status ? (0, l.lv)(t) : void 0),
          };
        })(async function (t = C) {
          try {
            return await t();
          } catch (t) {
            m({ error: t, source: "Recorder", scriptType: "module" });
          }
        }),
        T = (0, o.AB)(o.rJ, E, {
          startDeflateWorker: _,
          createDeflateEncoder: f,
        });
      (0, r.Z)((0, i.V)(), "DD_RUM", T);
    },
    79119: (t, e, n) => {
      "use strict";
      let r;
      function i(t) {
        return u(t).segments_count;
      }
      function o(t) {
        u(t).segments_count += 1;
      }
      function a(t) {
        u(t).records_count += 1;
      }
      function s(t, e) {
        u(t).segments_total_raw_size += e;
      }
      function l(t) {
        return null == r ? void 0 : r.get(t);
      }
      function u(t) {
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
        $1: () => a,
        H5: () => o,
        K_: () => i,
        L7: () => s,
        lv: () => l,
      });
    },
    82328: (t, e, n) => {
      "use strict";
      n.d(e, { H: () => o, N: () => a });
      var r = n(77930),
        i = n(38737);
      function o(t, e, n) {
        return document.readyState === e || "complete" === document.readyState
          ? (n(), { stop: r.l })
          : (0, i.q)(
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
    84056: (t) => {
      t.exports = function (t, e, n) {
        for (var r = n - 1, i = t.length; ++r < i; ) if (t[r] === e) return r;
        return -1;
      };
    },
    84437: (t, e, n) => {
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
      n.d(e, { LG: () => a, RI: () => o, Rj: () => i, yG: () => r });
    },
    84957: (t, e, n) => {
      "use strict";
      let r;
      n.d(e, {
        Bd: () => a,
        Dx: () => c,
        dm: () => l,
        oO: () => d,
        pM: () => s,
        um: () => u,
      });
      var i = n(87189);
      let o = !1;
      function a(t) {
        r = t;
      }
      function s(t) {
        o = t;
      }
      function l(t) {
        return function () {
          return u(t, this, arguments);
        };
      }
      function u(t, e, n) {
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
        o && i.Vy.error("[MONITOR]", ...t);
      }
    },
    87189: (t, e, n) => {
      "use strict";
      n.d(e, {
        JZ: () => i,
        Vy: () => s,
        Xs: () => u,
        bP: () => r,
        fH: () => l,
        xG: () => c,
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
        l = "https://docs.datadoghq.com",
        u = `${l}/real_user_monitoring/browser/troubleshooting`,
        c = "More details:";
    },
    88329: (t) => {
      t.exports = function () {};
    },
    90176: () => {},
    92266: (t, e, n) => {
      "use strict";
      n.d(e, { M: () => o, s: () => i });
      var r = n(77930);
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
          : r.l;
      }
    },
    92282: (t, e, n) => {
      var r = n(15560);
      t.exports = function (t, e) {
        return !!(null == t ? 0 : t.length) && r(t, e, 0) > -1;
      };
    },
    92935: (t, e, n) => {
      "use strict";
      function r(t, e) {
        let n = window.__ddBrowserSdkExtensionCallback;
        n && n({ type: t, payload: e });
      }
      n.d(e, { b: () => r });
    },
    95901: () => {},
    96178: (t, e, n) => {
      "use strict";
      n.d(e, { W: () => i });
      var r = n(8275);
      function i(t, e) {
        let n;
        let i = (0, r.V)();
        return (
          i.Zone &&
            "function" == typeof i.Zone.__symbol__ &&
            (n = t[i.Zone.__symbol__(e)]),
          n || (n = t[e]),
          n
        );
      }
    },
    96977: (t, e, n) => {
      "use strict";
      n.d(e, { E: () => h });
      var r = n(54642),
        i = n(79179),
        o = n(75791),
        a = n(56728),
        s = class extends a.Q {
          constructor(t = {}) {
            super(), (this.config = t), (this.#p = new Map());
          }
          #p;
          build(t, e, n) {
            let o = e.queryKey,
              a = e.queryHash ?? (0, r.F$)(o, e),
              s = this.get(a);
            return (
              s ||
                ((s = new i.X({
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
            this.#p.has(t.queryHash) ||
              (this.#p.set(t.queryHash, t),
              this.notify({ type: "added", query: t }));
          }
          remove(t) {
            let e = this.#p.get(t.queryHash);
            e &&
              (t.destroy(),
              e === t && this.#p.delete(t.queryHash),
              this.notify({ type: "removed", query: t }));
          }
          clear() {
            o.j.batch(() => {
              this.getAll().forEach((t) => {
                this.remove(t);
              });
            });
          }
          get(t) {
            return this.#p.get(t);
          }
          getAll() {
            return [...this.#p.values()];
          }
          find(t) {
            let e = { exact: !0, ...t };
            return this.getAll().find((t) => (0, r.MK)(e, t));
          }
          findAll(t = {}) {
            let e = this.getAll();
            return Object.keys(t).length > 0
              ? e.filter((e) => (0, r.MK)(t, e))
              : e;
          }
          notify(t) {
            o.j.batch(() => {
              this.listeners.forEach((e) => {
                e(t);
              });
            });
          }
          onFocus() {
            o.j.batch(() => {
              this.getAll().forEach((t) => {
                t.onFocus();
              });
            });
          }
          onOnline() {
            o.j.batch(() => {
              this.getAll().forEach((t) => {
                t.onOnline();
              });
            });
          }
        },
        l = n(17918),
        u = class extends a.Q {
          constructor(t = {}) {
            super(),
              (this.config = t),
              (this.#h = new Map()),
              (this.#g = Date.now());
          }
          #h;
          #g;
          build(t, e, n) {
            let r = new l.s({
              mutationCache: this,
              mutationId: ++this.#g,
              options: t.defaultMutationOptions(e),
              state: n,
            });
            return this.add(r), r;
          }
          add(t) {
            let e = c(t),
              n = this.#h.get(e) ?? [];
            n.push(t),
              this.#h.set(e, n),
              this.notify({ type: "added", mutation: t });
          }
          remove(t) {
            let e = c(t);
            if (this.#h.has(e)) {
              let n = this.#h.get(e)?.filter((e) => e !== t);
              n && (0 === n.length ? this.#h.delete(e) : this.#h.set(e, n));
            }
            this.notify({ type: "removed", mutation: t });
          }
          canRun(t) {
            let e = this.#h
              .get(c(t))
              ?.find((t) => "pending" === t.state.status);
            return !e || e === t;
          }
          runNext(t) {
            let e = this.#h.get(c(t))?.find((e) => e !== t && e.state.isPaused);
            return e?.continue() ?? Promise.resolve();
          }
          clear() {
            o.j.batch(() => {
              this.getAll().forEach((t) => {
                this.remove(t);
              });
            });
          }
          getAll() {
            return [...this.#h.values()].flat();
          }
          find(t) {
            let e = { exact: !0, ...t };
            return this.getAll().find((t) => (0, r.nJ)(e, t));
          }
          findAll(t = {}) {
            return this.getAll().filter((e) => (0, r.nJ)(t, e));
          }
          notify(t) {
            o.j.batch(() => {
              this.listeners.forEach((e) => {
                e(t);
              });
            });
          }
          resumePausedMutations() {
            let t = this.getAll().filter((t) => t.state.isPaused);
            return o.j.batch(() =>
              Promise.all(t.map((t) => t.continue().catch(r.lQ))),
            );
          }
        };
      function c(t) {
        return t.options.scope?.id ?? String(t.mutationId);
      }
      var d = n(94786),
        f = n(26753),
        p = n(43277),
        h = class {
          #m;
          #y;
          #v;
          #b;
          #_;
          #w;
          #S;
          #k;
          constructor(t = {}) {
            (this.#m = t.queryCache || new s()),
              (this.#y = t.mutationCache || new u()),
              (this.#v = t.defaultOptions || {}),
              (this.#b = new Map()),
              (this.#_ = new Map()),
              (this.#w = 0);
          }
          mount() {
            this.#w++,
              1 === this.#w &&
                ((this.#S = d.m.subscribe(async (t) => {
                  t && (await this.resumePausedMutations(), this.#m.onFocus());
                })),
                (this.#k = f.t.subscribe(async (t) => {
                  t && (await this.resumePausedMutations(), this.#m.onOnline());
                })));
          }
          unmount() {
            this.#w--,
              0 === this.#w &&
                (this.#S?.(),
                (this.#S = void 0),
                this.#k?.(),
                (this.#k = void 0));
          }
          isFetching(t) {
            return this.#m.findAll({ ...t, fetchStatus: "fetching" }).length;
          }
          isMutating(t) {
            return this.#y.findAll({ ...t, status: "pending" }).length;
          }
          getQueryData(t) {
            let e = this.defaultQueryOptions({ queryKey: t });
            return this.#m.get(e.queryHash)?.state.data;
          }
          ensureQueryData(t) {
            let e = this.getQueryData(t.queryKey);
            if (void 0 === e) return this.fetchQuery(t);
            {
              let n = this.defaultQueryOptions(t),
                r = this.#m.build(this, n);
              return (
                t.revalidateIfStale &&
                  r.isStaleByTime(n.staleTime) &&
                  this.prefetchQuery(n),
                Promise.resolve(e)
              );
            }
          }
          getQueriesData(t) {
            return this.#m
              .findAll(t)
              .map(({ queryKey: t, state: e }) => [t, e.data]);
          }
          setQueryData(t, e, n) {
            let i = this.defaultQueryOptions({ queryKey: t }),
              o = this.#m.get(i.queryHash),
              a = o?.state.data,
              s = (0, r.Zw)(e, a);
            if (void 0 !== s)
              return this.#m.build(this, i).setData(s, { ...n, manual: !0 });
          }
          setQueriesData(t, e, n) {
            return o.j.batch(() =>
              this.#m
                .findAll(t)
                .map(({ queryKey: t }) => [t, this.setQueryData(t, e, n)]),
            );
          }
          getQueryState(t) {
            let e = this.defaultQueryOptions({ queryKey: t });
            return this.#m.get(e.queryHash)?.state;
          }
          removeQueries(t) {
            let e = this.#m;
            o.j.batch(() => {
              e.findAll(t).forEach((t) => {
                e.remove(t);
              });
            });
          }
          resetQueries(t, e) {
            let n = this.#m,
              r = { type: "active", ...t };
            return o.j.batch(
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
              o.j.batch(() => this.#m.findAll(t).map((t) => t.cancel(n))),
            )
              .then(r.lQ)
              .catch(r.lQ);
          }
          invalidateQueries(t = {}, e = {}) {
            return o.j.batch(() => {
              if (
                (this.#m.findAll(t).forEach((t) => {
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
              o.j.batch(() =>
                this.#m
                  .findAll(t)
                  .filter((t) => !t.isDisabled())
                  .map((t) => {
                    let e = t.fetch(void 0, n);
                    return (
                      n.throwOnError || (e = e.catch(r.lQ)),
                      "paused" === t.state.fetchStatus ? Promise.resolve() : e
                    );
                  }),
              ),
            ).then(r.lQ);
          }
          fetchQuery(t) {
            let e = this.defaultQueryOptions(t);
            void 0 === e.retry && (e.retry = !1);
            let n = this.#m.build(this, e);
            return n.isStaleByTime(e.staleTime)
              ? n.fetch(e)
              : Promise.resolve(n.state.data);
          }
          prefetchQuery(t) {
            return this.fetchQuery(t).then(r.lQ).catch(r.lQ);
          }
          fetchInfiniteQuery(t) {
            return (t.behavior = (0, p.PL)(t.pages)), this.fetchQuery(t);
          }
          prefetchInfiniteQuery(t) {
            return this.fetchInfiniteQuery(t).then(r.lQ).catch(r.lQ);
          }
          resumePausedMutations() {
            return f.t.isOnline()
              ? this.#y.resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return this.#m;
          }
          getMutationCache() {
            return this.#y;
          }
          getDefaultOptions() {
            return this.#v;
          }
          setDefaultOptions(t) {
            this.#v = t;
          }
          setQueryDefaults(t, e) {
            this.#b.set((0, r.EN)(t), { queryKey: t, defaultOptions: e });
          }
          getQueryDefaults(t) {
            let e = [...this.#b.values()],
              n = {};
            return (
              e.forEach((e) => {
                (0, r.Cp)(t, e.queryKey) && (n = { ...n, ...e.defaultOptions });
              }),
              n
            );
          }
          setMutationDefaults(t, e) {
            this.#_.set((0, r.EN)(t), { mutationKey: t, defaultOptions: e });
          }
          getMutationDefaults(t) {
            let e = [...this.#_.values()],
              n = {};
            return (
              e.forEach((e) => {
                (0, r.Cp)(t, e.mutationKey) &&
                  (n = { ...n, ...e.defaultOptions });
              }),
              n
            );
          }
          defaultQueryOptions(t) {
            if (t._defaulted) return t;
            let e = {
              ...this.#v.queries,
              ...this.getQueryDefaults(t.queryKey),
              ...t,
              _defaulted: !0,
            };
            return (
              e.queryHash || (e.queryHash = (0, r.F$)(e.queryKey, e)),
              void 0 === e.refetchOnReconnect &&
                (e.refetchOnReconnect = "always" !== e.networkMode),
              void 0 === e.throwOnError && (e.throwOnError = !!e.suspense),
              !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
              !0 !== e.enabled && e.queryFn === r.hT && (e.enabled = !1),
              e
            );
          }
          defaultMutationOptions(t) {
            return t?._defaulted
              ? t
              : {
                  ...this.#v.mutations,
                  ...(t?.mutationKey &&
                    this.getMutationDefaults(t.mutationKey)),
                  ...t,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#m.clear(), this.#y.clear();
          }
        };
    },
  },
]);
