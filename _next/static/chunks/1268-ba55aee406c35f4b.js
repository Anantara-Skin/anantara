"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1268],
  {
    2873: (e, t, n) => {
      n.d(t, {
        QueryClientContext: () => s,
        QueryClientProvider: () => u,
        useQueryClient: () => o,
      });
      var i = n(34023),
        r = n(94799),
        s = i.createContext(void 0),
        o = (e) => {
          let t = i.useContext(s);
          if (e) return e;
          if (!t)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one",
            );
          return t;
        },
        u = (e) => {
          let { client: t, children: n } = e;
          return (
            i.useEffect(
              () => (
                t.mount(),
                () => {
                  t.unmount();
                }
              ),
              [t],
            ),
            (0, r.jsx)(s.Provider, { value: t, children: n })
          );
        };
    },
    16166: (e, t, n) => {
      n.d(t, { k: () => r });
      var i = n(54642),
        r = class {
          #e;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, i.gn)(this.gcTime) &&
                (this.#e = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (i.S$ ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#e && (clearTimeout(this.#e), (this.#e = void 0));
          }
        };
    },
    22387: (e, t, n) => {
      n.d(t, { VStack: () => s });
      var i = n(94799),
        r = n(38196);
      let s = (0, n(39738).forwardRef)((e, t) =>
        (0, i.jsx)(r.Stack, {
          align: "center",
          ...e,
          direction: "column",
          ref: t,
        }),
      );
      s.displayName = "VStack";
    },
    26753: (e, t, n) => {
      n.d(t, { t: () => s });
      var i = n(56728),
        r = n(54642),
        s = new (class extends i.Q {
          #t = !0;
          #n;
          #i;
          constructor() {
            super(),
              (this.#i = (e) => {
                if (!r.S$ && window.addEventListener) {
                  let t = () => e(!0),
                    n = () => e(!1);
                  return (
                    window.addEventListener("online", t, !1),
                    window.addEventListener("offline", n, !1),
                    () => {
                      window.removeEventListener("online", t),
                        window.removeEventListener("offline", n);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#n || this.setEventListener(this.#i);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#n?.(), (this.#n = void 0));
          }
          setEventListener(e) {
            (this.#i = e),
              this.#n?.(),
              (this.#n = e(this.setOnline.bind(this)));
          }
          setOnline(e) {
            this.#t !== e &&
              ((this.#t = e),
              this.listeners.forEach((t) => {
                t(e);
              }));
          }
          isOnline() {
            return this.#t;
          }
        })();
    },
    29838: (e, t, n) => {
      function i(e, t) {
        return "function" == typeof e ? e(...t) : !!e;
      }
      function r() {}
      n.d(t, { G: () => i, l: () => r });
    },
    38196: (e, t, n) => {
      n.d(t, { Stack: () => a });
      var i = n(94799),
        r = n(39232),
        s = n(49708),
        o = n(34023),
        u = n(13331);
      let c = (e) =>
        (0, i.jsx)(u.chakra.div, {
          className: "chakra-stack__item",
          ...e,
          __css: {
            display: "inline-block",
            flex: "0 0 auto",
            minWidth: 0,
            ...e.__css,
          },
        });
      c.displayName = "StackItem";
      var l = n(87391);
      let a = (0, n(39738).forwardRef)((e, t) => {
        let {
            isInline: n,
            direction: a,
            align: h,
            justify: f,
            spacing: d = "0.5rem",
            wrap: y,
            children: m,
            divider: p,
            className: b,
            shouldWrapChildren: v,
            ...w
          } = e,
          g = n ? "row" : null != a ? a : "column",
          k = (0, o.useMemo)(
            () =>
              (function (e) {
                let { spacing: t, direction: n } = e,
                  i = {
                    column: {
                      my: t,
                      mx: 0,
                      borderLeftWidth: 0,
                      borderBottomWidth: "1px",
                    },
                    "column-reverse": {
                      my: t,
                      mx: 0,
                      borderLeftWidth: 0,
                      borderBottomWidth: "1px",
                    },
                    row: {
                      mx: t,
                      my: 0,
                      borderLeftWidth: "1px",
                      borderBottomWidth: 0,
                    },
                    "row-reverse": {
                      mx: t,
                      my: 0,
                      borderLeftWidth: "1px",
                      borderBottomWidth: 0,
                    },
                  };
                return { "&": (0, l.bk)(n, (e) => i[e]) };
              })({ spacing: d, direction: g }),
            [d, g],
          ),
          x = !!p,
          S = !v && !x,
          j = (0, o.useMemo)(() => {
            let e = (0, r.a)(m);
            return S
              ? e
              : e.map((t, n) => {
                  let r = void 0 !== t.key ? t.key : n,
                    s = n + 1 === e.length,
                    u = (0, i.jsx)(c, { children: t }, r),
                    l = v ? u : t;
                  if (!x) return l;
                  let a = (0, o.cloneElement)(p, { __css: k });
                  return (0, i.jsxs)(
                    o.Fragment,
                    { children: [l, s ? null : a] },
                    r,
                  );
                });
          }, [p, k, x, S, v, m]),
          E = (0, s.cx)("chakra-stack", b);
        return (0, i.jsx)(u.chakra.div, {
          ref: t,
          display: "flex",
          alignItems: h,
          justifyContent: f,
          flexDirection: g,
          flexWrap: y,
          gap: x ? void 0 : d,
          className: E,
          ...w,
          children: j,
        });
      });
      a.displayName = "Stack";
    },
    39232: (e, t, n) => {
      n.d(t, { a: () => r });
      var i = n(34023);
      function r(e) {
        return i.Children.toArray(e).filter((e) => (0, i.isValidElement)(e));
      }
    },
    54642: (e, t, n) => {
      n.d(t, {
        BH: () => d,
        Cp: () => f,
        EN: () => h,
        F$: () => a,
        MK: () => c,
        S$: () => i,
        ZZ: () => k,
        Zw: () => s,
        f8: () => y,
        gn: () => o,
        hT: () => x,
        j3: () => u,
        lQ: () => r,
        nJ: () => l,
        pl: () => w,
        y9: () => g,
        yy: () => v,
      });
      var i = "undefined" == typeof window || "Deno" in globalThis;
      function r() {}
      function s(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function o(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0;
      }
      function u(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function c(e, t) {
        let {
          type: n = "all",
          exact: i,
          fetchStatus: r,
          predicate: s,
          queryKey: o,
          stale: u,
        } = e;
        if (o) {
          if (i) {
            if (t.queryHash !== a(o, t.options)) return !1;
          } else if (!f(t.queryKey, o)) return !1;
        }
        if ("all" !== n) {
          let e = t.isActive();
          if (("active" === n && !e) || ("inactive" === n && e)) return !1;
        }
        return (
          ("boolean" != typeof u || t.isStale() === u) &&
          (!r || r === t.state.fetchStatus) &&
          (!s || !!s(t))
        );
      }
      function l(e, t) {
        let { exact: n, status: i, predicate: r, mutationKey: s } = e;
        if (s) {
          if (!t.options.mutationKey) return !1;
          if (n) {
            if (h(t.options.mutationKey) !== h(s)) return !1;
          } else if (!f(t.options.mutationKey, s)) return !1;
        }
        return (!i || t.state.status === i) && (!r || !!r(t));
      }
      function a(e, t) {
        return (t?.queryKeyHashFn || h)(e);
      }
      function h(e) {
        return JSON.stringify(e, (e, t) =>
          p(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, n) => ((e[n] = t[n]), e), {})
            : t,
        );
      }
      function f(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            "object" == typeof e &&
            "object" == typeof t &&
            !Object.keys(t).some((n) => !f(e[n], t[n])))
        );
      }
      function d(e, t) {
        if (e === t) return e;
        let n = m(e) && m(t);
        if (n || (p(e) && p(t))) {
          let i = n ? e : Object.keys(e),
            r = i.length,
            s = n ? t : Object.keys(t),
            o = s.length,
            u = n ? [] : {},
            c = 0;
          for (let r = 0; r < o; r++) {
            let o = n ? r : s[r];
            ((!n && i.includes(o)) || n) && void 0 === e[o] && void 0 === t[o]
              ? ((u[o] = void 0), c++)
              : ((u[o] = d(e[o], t[o])),
                u[o] === e[o] && void 0 !== e[o] && c++);
          }
          return r === o && c === r ? e : u;
        }
        return t;
      }
      function y(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let n in e) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function m(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function p(e) {
        if (!b(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let n = t.prototype;
        return (
          !!(b(n) && n.hasOwnProperty("isPrototypeOf")) &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function b(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function v(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function w(e, t, n) {
        return "function" == typeof n.structuralSharing
          ? n.structuralSharing(e, t)
          : !1 !== n.structuralSharing
            ? d(e, t)
            : t;
      }
      function g(e, t, n = 0) {
        let i = [...e, t];
        return n && i.length > n ? i.slice(1) : i;
      }
      function k(e, t, n = 0) {
        let i = [t, ...e];
        return n && i.length > n ? i.slice(0, -1) : i;
      }
      var x = Symbol();
    },
    56728: (e, t, n) => {
      n.d(t, { Q: () => i });
      var i = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
          return (
            this.listeners.add(e),
            this.onSubscribe(),
            () => {
              this.listeners.delete(e), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    75791: (e, t, n) => {
      n.d(t, { j: () => i });
      var i = (function () {
        let e = [],
          t = 0,
          n = (e) => {
            e();
          },
          i = (e) => {
            e();
          },
          r = (e) => setTimeout(e, 0),
          s = (i) => {
            t
              ? e.push(i)
              : r(() => {
                  n(i);
                });
          },
          o = () => {
            let t = e;
            (e = []),
              t.length &&
                r(() => {
                  i(() => {
                    t.forEach((e) => {
                      n(e);
                    });
                  });
                });
          };
        return {
          batch: (e) => {
            let n;
            t++;
            try {
              n = e();
            } finally {
              --t || o();
            }
            return n;
          },
          batchCalls:
            (e) =>
            (...t) => {
              s(() => {
                e(...t);
              });
            },
          schedule: s,
          setNotifyFunction: (e) => {
            n = e;
          },
          setBatchNotifyFunction: (e) => {
            i = e;
          },
          setScheduler: (e) => {
            r = e;
          },
        };
      })();
    },
    87391: (e, t, n) => {
      n.d(t, { a1: () => o, bk: () => s, fi: () => r });
      var i = n(62917);
      let r = Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
      function s(e, t) {
        return Array.isArray(e)
          ? e.map((e) => (null === e ? null : t(e)))
          : (0, i.Gv)(e)
            ? Object.keys(e).reduce((n, i) => ((n[i] = t(e[i])), n), {})
            : null != e
              ? t(e)
              : null;
      }
      function o(e, t = r) {
        let n = {};
        return (
          e.forEach((e, i) => {
            let r = t[i];
            null != e && (n[r] = e);
          }),
          n
        );
      }
    },
    94786: (e, t, n) => {
      n.d(t, { m: () => s });
      var i = n(56728),
        r = n(54642),
        s = new (class extends i.Q {
          #r;
          #n;
          #i;
          constructor() {
            super(),
              (this.#i = (e) => {
                if (!r.S$ && window.addEventListener) {
                  let t = () => e();
                  return (
                    window.addEventListener("visibilitychange", t, !1),
                    () => {
                      window.removeEventListener("visibilitychange", t);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#n || this.setEventListener(this.#i);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#n?.(), (this.#n = void 0));
          }
          setEventListener(e) {
            (this.#i = e),
              this.#n?.(),
              (this.#n = e((e) => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
              }));
          }
          setFocused(e) {
            this.#r !== e && ((this.#r = e), this.onFocus());
          }
          onFocus() {
            let e = this.isFocused();
            this.listeners.forEach((t) => {
              t(e);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#r
              ? this.#r
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    96134: (e, t, n) => {
      n.d(t, { II: () => a, v_: () => u, wm: () => l });
      var i = n(94786),
        r = n(26753),
        s = n(54642);
      function o(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function u(e) {
        return (e ?? "online") !== "online" || r.t.isOnline();
      }
      var c = class {
        constructor(e) {
          (this.revert = e?.revert), (this.silent = e?.silent);
        }
      };
      function l(e) {
        return e instanceof c;
      }
      function a(e) {
        let t,
          n,
          l,
          a = !1,
          h = 0,
          f = !1,
          d = new Promise((e, t) => {
            (n = e), (l = t);
          }),
          y = () =>
            i.m.isFocused() &&
            ("always" === e.networkMode || r.t.isOnline()) &&
            e.canRun(),
          m = () => u(e.networkMode) && e.canRun(),
          p = (i) => {
            f || ((f = !0), e.onSuccess?.(i), t?.(), n(i));
          },
          b = (n) => {
            f || ((f = !0), e.onError?.(n), t?.(), l(n));
          },
          v = () =>
            new Promise((n) => {
              (t = (e) => {
                (f || y()) && n(e);
              }),
                e.onPause?.();
            }).then(() => {
              (t = void 0), f || e.onContinue?.();
            }),
          w = () => {
            let t;
            if (!f) {
              try {
                t = e.fn();
              } catch (e) {
                t = Promise.reject(e);
              }
              Promise.resolve(t)
                .then(p)
                .catch((t) => {
                  if (f) return;
                  let n = e.retry ?? 3 * !s.S$,
                    i = e.retryDelay ?? o,
                    r = "function" == typeof i ? i(h, t) : i,
                    u =
                      !0 === n ||
                      ("number" == typeof n && h < n) ||
                      ("function" == typeof n && n(h, t));
                  if (a || !u) {
                    b(t);
                    return;
                  }
                  h++,
                    e.onFail?.(h, t),
                    (0, s.yy)(r)
                      .then(() => (y() ? void 0 : v()))
                      .then(() => {
                        a ? b(t) : w();
                      });
                });
            }
          };
        return {
          promise: d,
          cancel: (t) => {
            f || (b(new c(t)), e.abort?.());
          },
          continue: () => (t?.(), d),
          cancelRetry: () => {
            a = !0;
          },
          continueRetry: () => {
            a = !1;
          },
          canStart: m,
          start: () => (m() ? w() : v().then(w), d),
        };
      }
    },
  },
]);
