"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9976],
  {
    35: (t, e, n) => {
      n.d(e, { y: () => s });
      var i = n(33784),
        r = n(96281),
        o = n(34741);
      let s = {
        test: (t) => o.B.test(t) || i.u.test(t) || r.V.test(t),
        parse: (t) =>
          o.B.test(t)
            ? o.B.parse(t)
            : r.V.test(t)
              ? r.V.parse(t)
              : i.u.parse(t),
        transform: (t) =>
          "string" == typeof t
            ? t
            : t.hasOwnProperty("red")
              ? o.B.transform(t)
              : r.V.transform(t),
      };
    },
    584: (t, e, n) => {
      n.d(e, { useModal: () => m });
      var i = n(47267),
        r = n(63831),
        o = function (t) {
          return "undefined" == typeof document
            ? null
            : (Array.isArray(t) ? t[0] : t).ownerDocument.body;
        },
        s = new WeakMap(),
        a = new WeakMap(),
        l = {},
        u = 0,
        c = function (t) {
          return t && (t.host || c(t.parentNode));
        },
        d = function (t, e, n, i) {
          var r = (Array.isArray(t) ? t : [t])
            .map(function (t) {
              if (e.contains(t)) return t;
              var n = c(t);
              return n && e.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    t,
                    "in not contained inside",
                    e,
                    ". Doing nothing",
                  ),
                  null);
            })
            .filter(function (t) {
              return !!t;
            });
          l[n] || (l[n] = new WeakMap());
          var o = l[n],
            d = [],
            h = new Set(),
            f = new Set(r),
            p = function (t) {
              !(!t || h.has(t)) && (h.add(t), p(t.parentNode));
            };
          r.forEach(p);
          var m = function (t) {
            !(!t || f.has(t)) &&
              Array.prototype.forEach.call(t.children, function (t) {
                if (h.has(t)) m(t);
                else
                  try {
                    var e = t.getAttribute(i),
                      r = null !== e && "false" !== e,
                      l = (s.get(t) || 0) + 1,
                      u = (o.get(t) || 0) + 1;
                    s.set(t, l),
                      o.set(t, u),
                      d.push(t),
                      1 === l && r && a.set(t, !0),
                      1 === u && t.setAttribute(n, "true"),
                      r || t.setAttribute(i, "true");
                  } catch (e) {
                    console.error("aria-hidden: cannot operate on ", t, e);
                  }
              });
          };
          return (
            m(e),
            h.clear(),
            u++,
            function () {
              d.forEach(function (t) {
                var e = s.get(t) - 1,
                  r = o.get(t) - 1;
                s.set(t, e),
                  o.set(t, r),
                  e || (a.has(t) || t.removeAttribute(i), a.delete(t)),
                  r || t.removeAttribute(n);
              }),
                --u ||
                  ((s = new WeakMap()),
                  (s = new WeakMap()),
                  (a = new WeakMap()),
                  (l = {}));
            }
          );
        },
        h = function (t, e, n) {
          void 0 === n && (n = "data-aria-hidden");
          var i = Array.from(Array.isArray(t) ? t : [t]),
            r = e || o(t);
          return r
            ? (i.push.apply(i, Array.from(r.querySelectorAll("[aria-live]"))),
              d(i, r, n, "aria-hidden"))
            : function () {
                return null;
              };
        },
        f = n(34023),
        p = n(65772);
      function m(t) {
        let {
            isOpen: e,
            onClose: n,
            id: o,
            closeOnOverlayClick: s = !0,
            closeOnEsc: a = !0,
            useInert: l = !0,
            onOverlayClick: u,
            onEsc: c,
          } = t,
          d = (0, f.useRef)(null),
          m = (0, f.useRef)(null),
          [v, g, y] = (function (t) {
            for (
              var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1;
              i < e;
              i++
            )
              n[i - 1] = arguments[i];
            let r = (0, f.useId)(),
              o = t || r;
            return (0, f.useMemo)(
              () => n.map((t) => "".concat(t, "-").concat(o)),
              [o, n],
            );
          })(o, "chakra-modal", "chakra-modal--header", "chakra-modal--body");
        !(function (t, e) {
          let n = t.current;
          (0, f.useEffect)(() => {
            if (t.current && e) return h(t.current);
          }, [e, t, n]);
        })(d, e && l);
        let x = (0, p.useModalManager)(d, e),
          b = (0, f.useRef)(null),
          w = (0, f.useCallback)((t) => {
            b.current = t.target;
          }, []),
          P = (0, f.useCallback)(
            (t) => {
              "Escape" === t.key &&
                (t.stopPropagation(),
                a && (null == n || n()),
                null == c || c());
            },
            [a, n, c],
          ),
          [S, T] = (0, f.useState)(!1),
          [E, M] = (0, f.useState)(!1),
          A = (0, f.useCallback)(
            function () {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              return {
                role: "dialog",
                ...t,
                ref: (0, i.mergeRefs)(e, d),
                id: v,
                tabIndex: -1,
                "aria-modal": !0,
                "aria-labelledby": S ? g : void 0,
                "aria-describedby": E ? y : void 0,
                onClick: (0, r.H)(t.onClick, (t) => t.stopPropagation()),
              };
            },
            [y, E, v, g, S],
          ),
          C = (0, f.useCallback)(
            (t) => {
              t.stopPropagation(),
                b.current === t.target &&
                  p.J.isTopModal(d.current) &&
                  (s && (null == n || n()), null == u || u());
            },
            [n, s, u],
          ),
          k = (0, f.useCallback)(
            function () {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              return {
                ...t,
                ref: (0, i.mergeRefs)(e, m),
                onClick: (0, r.H)(t.onClick, C),
                onKeyDown: (0, r.H)(t.onKeyDown, P),
                onMouseDown: (0, r.H)(t.onMouseDown, w),
              };
            },
            [P, w, C],
          );
        return {
          isOpen: e,
          onClose: n,
          headerId: g,
          bodyId: y,
          setBodyMounted: M,
          setHeaderMounted: T,
          dialogRef: d,
          overlayRef: m,
          getDialogProps: A,
          getDialogContainerProps: k,
          index: x,
        };
      }
    },
    1498: (t, e, n) => {
      n.d(e, { C: () => s, f: () => a });
      var i = n(90535);
      function r(t) {
        return t;
      }
      function o(t, e) {
        void 0 === e && (e = r);
        var n = [],
          i = !1;
        return {
          read: function () {
            if (i)
              throw Error(
                "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
              );
            return n.length ? n[n.length - 1] : t;
          },
          useMedium: function (t) {
            var r = e(t, i);
            return (
              n.push(r),
              function () {
                n = n.filter(function (t) {
                  return t !== r;
                });
              }
            );
          },
          assignSyncMedium: function (t) {
            for (i = !0; n.length; ) {
              var e = n;
              (n = []), e.forEach(t);
            }
            n = {
              push: function (e) {
                return t(e);
              },
              filter: function () {
                return n;
              },
            };
          },
          assignMedium: function (t) {
            i = !0;
            var e = [];
            if (n.length) {
              var r = n;
              (n = []), r.forEach(t), (e = n);
            }
            var o = function () {
                var n = e;
                (e = []), n.forEach(t);
              },
              s = function () {
                return Promise.resolve().then(o);
              };
            s(),
              (n = {
                push: function (t) {
                  e.push(t), s();
                },
                filter: function (t) {
                  return (e = e.filter(t)), n;
                },
              });
          },
        };
      }
      function s(t, e) {
        return void 0 === e && (e = r), o(t, e);
      }
      function a(t) {
        void 0 === t && (t = {});
        var e = o(null);
        return (e.options = (0, i.Cl)({ async: !0, ssr: !1 }, t)), e;
      }
    },
    5317: (t, e, n) => {
      n.d(e, { F: () => r });
      let i = (t, e) => (n) => e(t(n)),
        r = (...t) => t.reduce(i);
    },
    9784: (t, e, n) => {
      n.d(e, { j: () => E });
      var i = n(16843),
        r = n(76305);
      function o(t, e, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? t + (e - t) * 6 * n
          : n < 0.5
            ? e
            : n < 2 / 3
              ? t + (e - t) * (2 / 3 - n) * 6
              : t;
      }
      var s = n(33784),
        a = n(34741),
        l = n(96281);
      function u(t, e) {
        return (n) => (n > 0 ? e : t);
      }
      let c = (t, e, n) => {
          let i = t * t,
            r = n * (e * e - i) + i;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        d = [s.u, a.B, l.V],
        h = (t) => d.find((e) => e.test(t));
      function f(t) {
        let e = h(t);
        if (
          ((0, r.$e)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`,
          ),
          !e)
        )
          return !1;
        let n = e.parse(t);
        return (
          e === l.V &&
            (n = (function ({ hue: t, saturation: e, lightness: n, alpha: i }) {
              (t /= 360), (n /= 100);
              let r = 0,
                s = 0,
                a = 0;
              if ((e /= 100)) {
                let i = n < 0.5 ? n * (1 + e) : n + e - n * e,
                  l = 2 * n - i;
                (r = o(l, i, t + 1 / 3)),
                  (s = o(l, i, t)),
                  (a = o(l, i, t - 1 / 3));
              } else r = s = a = n;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * a),
                alpha: i,
              };
            })(n)),
          n
        );
      }
      let p = (t, e) => {
        let n = f(t),
          r = f(e);
        if (!n || !r) return u(t, e);
        let o = { ...n };
        return (t) => (
          (o.red = c(n.red, r.red, t)),
          (o.green = c(n.green, r.green, t)),
          (o.blue = c(n.blue, r.blue, t)),
          (o.alpha = (0, i.k)(n.alpha, r.alpha, t)),
          a.B.transform(o)
        );
      };
      var m = n(5317),
        v = n(35),
        g = n(37587),
        y = n(88878);
      let x = new Set(["none", "hidden"]);
      function b(t, e) {
        return (n) => (0, i.k)(t, e, n);
      }
      function w(t) {
        return "number" == typeof t
          ? b
          : "string" == typeof t
            ? (0, y.p)(t)
              ? u
              : v.y.test(t)
                ? p
                : T
            : Array.isArray(t)
              ? P
              : "object" == typeof t
                ? v.y.test(t)
                  ? p
                  : S
                : u;
      }
      function P(t, e) {
        let n = [...t],
          i = n.length,
          r = t.map((t, n) => w(t)(t, e[n]));
        return (t) => {
          for (let e = 0; e < i; e++) n[e] = r[e](t);
          return n;
        };
      }
      function S(t, e) {
        let n = { ...t, ...e },
          i = {};
        for (let r in n)
          void 0 !== t[r] && void 0 !== e[r] && (i[r] = w(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in i) n[e] = i[e](t);
          return n;
        };
      }
      let T = (t, e) => {
        let n = g.f.createTransformer(e),
          i = (0, g.V)(t),
          o = (0, g.V)(e);
        return i.indexes.var.length === o.indexes.var.length &&
          i.indexes.color.length === o.indexes.color.length &&
          i.indexes.number.length >= o.indexes.number.length
          ? (x.has(t) && !o.values.length) || (x.has(e) && !i.values.length)
            ? (function (t, e) {
                return x.has(t)
                  ? (n) => (n <= 0 ? t : e)
                  : (n) => (n >= 1 ? e : t);
              })(t, e)
            : (0, m.F)(
                P(
                  (function (t, e) {
                    var n;
                    let i = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let o = 0; o < e.values.length; o++) {
                      let s = e.types[o],
                        a = t.indexes[s][r[s]],
                        l = null !== (n = t.values[a]) && void 0 !== n ? n : 0;
                      (i[o] = l), r[s]++;
                    }
                    return i;
                  })(i, o),
                  o.values,
                ),
                n,
              )
          : ((0, r.$e)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            ),
            u(t, e));
      };
      function E(t, e, n) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof n
          ? (0, i.k)(t, e, n)
          : w(t)(t, e);
      }
    },
    10321: (t, e, n) => {
      n.d(e, { S: () => i });
      let i = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    11844: (t, e, n) => {
      n.d(e, { useSafeLayoutEffect: () => o });
      var i,
        r = n(34023);
      let o = (null === (i = globalThis) || void 0 === i ? void 0 : i.document)
        ? r.useLayoutEffect
        : r.useEffect;
    },
    16581: (t, e, n) => {
      n.d(e, { ModalBody: () => u });
      var i = n(94799),
        r = n(49708),
        o = n(34023),
        s = n(16774),
        a = n(39738),
        l = n(13331);
      let u = (0, a.forwardRef)((t, e) => {
        let { className: n, ...a } = t,
          { bodyId: u, setBodyMounted: c } = (0, s.useModalContext)();
        (0, o.useEffect)(() => (c(!0), () => c(!1)), [c]);
        let d = (0, r.cx)("chakra-modal__body", n),
          h = (0, s.useModalStyles)();
        return (0, i.jsx)(l.chakra.div, {
          ref: e,
          className: d,
          id: u,
          ...a,
          __css: h.body,
        });
      });
      u.displayName = "ModalBody";
    },
    16774: (t, e, n) => {
      n.d(e, {
        Modal: () => f,
        ModalContextProvider: () => d,
        useModalContext: () => h,
        useModalStyles: () => c,
      });
      var i = n(94799),
        r = n(79872),
        o = n(53738),
        s = n(584),
        a = n(71924),
        l = n(98814);
      let [u, c] = (0, r.createContext)({
          name: "ModalStylesContext",
          errorMessage:
            "useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Modal />\" ",
        }),
        [d, h] = (0, r.createContext)({
          strict: !0,
          name: "ModalContext",
          errorMessage:
            "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`",
        }),
        f = (t) => {
          let e = {
              scrollBehavior: "outside",
              autoFocus: !0,
              trapFocus: !0,
              returnFocusOnClose: !0,
              blockScrollOnMount: !0,
              allowPinchZoom: !1,
              preserveScrollBarGap: !0,
              motionPreset: "scale",
              ...t,
              lockFocusAcrossFrames: t.lockFocusAcrossFrames || !0,
            },
            {
              portalProps: n,
              children: r,
              autoFocus: c,
              trapFocus: h,
              initialFocusRef: f,
              finalFocusRef: p,
              returnFocusOnClose: m,
              blockScrollOnMount: v,
              allowPinchZoom: g,
              preserveScrollBarGap: y,
              motionPreset: x,
              lockFocusAcrossFrames: b,
              animatePresenceProps: w,
              onCloseComplete: P,
            } = e,
            S = (0, l.useMultiStyleConfig)("Modal", e),
            T = {
              ...(0, s.useModal)(e),
              autoFocus: c,
              trapFocus: h,
              initialFocusRef: f,
              finalFocusRef: p,
              returnFocusOnClose: m,
              blockScrollOnMount: v,
              allowPinchZoom: g,
              preserveScrollBarGap: y,
              motionPreset: x,
              lockFocusAcrossFrames: b,
            };
          return (0, i.jsx)(d, {
            value: T,
            children: (0, i.jsx)(u, {
              value: S,
              children: (0, i.jsx)(o.N, {
                ...w,
                onExitComplete: P,
                children:
                  T.isOpen && (0, i.jsx)(a.Portal, { ...n, children: r }),
              }),
            }),
          });
        };
      f.displayName = "Modal";
    },
    16843: (t, e, n) => {
      n.d(e, { k: () => i });
      let i = (t, e, n) => t + (e - t) * n;
    },
    18347: (t, e, n) => {
      n.d(e, { t: () => i });
      let i = (0, n(34023).createContext)(null);
    },
    20924: (t, e, n) => {
      n.d(e, { E: () => r });
      var i = n(34023);
      let r = n(29342).B ? i.useLayoutEffect : i.useEffect;
    },
    22550: (t, e, n) => {
      n.d(e, { PortalManager: () => s, usePortalManager: () => o });
      var i = n(94799);
      let [r, o] = (0, n(79872).createContext)({
        strict: !1,
        name: "PortalManagerContext",
      });
      function s(t) {
        let { children: e, zIndex: n } = t;
        return (0, i.jsx)(r, { value: { zIndex: n }, children: e });
      }
      s.displayName = "PortalManager";
    },
    22732: (t, e, n) => {
      n.d(e, { r: () => r });
      var i = n(94799);
      let r = (0, n(39738).forwardRef)(function (t, e) {
        let { htmlWidth: n, htmlHeight: r, alt: o, ...s } = t;
        return (0, i.jsx)("img", { width: n, height: r, ref: e, alt: o, ...s });
      });
      r.displayName = "NativeImage";
    },
    26654: (t, e, n) => {
      function i(t) {
        return (
          null != t &&
          "object" == typeof t &&
          "nodeType" in t &&
          t.nodeType === Node.ELEMENT_NODE
        );
      }
      function r() {
        return !!globalThis?.document;
      }
      function o(t) {
        let e = t.getAttribute("contenteditable");
        return "false" !== e && null != e;
      }
      function s(t) {
        return (
          !0 == !!t.getAttribute("disabled") ||
          !0 == !!t.getAttribute("aria-disabled")
        );
      }
      n.d(e, {
        Bd: () => r,
        N3: () =>
          function t(e) {
            return !!(e.parentElement && t(e.parentElement)) || e.hidden;
          },
        pj: () => s,
        sb: () => i,
        wu: () => o,
      });
    },
    27566: (t, e, n) => {
      n.d(e, { ModalHeader: () => c });
      var i = n(94799),
        r = n(2568),
        o = n(49708),
        s = n(34023),
        a = n(16774),
        l = n(39738),
        u = n(13331);
      let c = (0, l.forwardRef)((t, e) => {
        let { className: n, ...l } = t,
          { headerId: c, setHeaderMounted: d } = (0, a.useModalContext)();
        (0, s.useEffect)(() => (d(!0), () => d(!1)), [d]);
        let h = (0, o.cx)("chakra-modal__header", n),
          f = (0, a.useModalStyles)(),
          p = (0, r.H2)({ flex: 0, ...f.header });
        return (0, i.jsx)(u.chakra.header, {
          ref: e,
          className: h,
          id: c,
          ...l,
          __css: p,
        });
      });
      c.displayName = "ModalHeader";
    },
    29342: (t, e, n) => {
      n.d(e, { B: () => i });
      let i = "undefined" != typeof window;
    },
    30454: (t, e, n) => {
      n.d(e, { S: () => a });
      var i = n(34023);
      function r(t, e) {
        return "function" == typeof t ? t(e) : t && (t.current = e), t;
      }
      var o = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
        s = new WeakMap();
      function a(t, e) {
        var n,
          a,
          l,
          u =
            ((n = e || null),
            (a = function (e) {
              return t.forEach(function (t) {
                return r(t, e);
              });
            }),
            ((l = (0, i.useState)(function () {
              return {
                value: n,
                callback: a,
                facade: {
                  get current() {
                    return l.value;
                  },
                  set current(value) {
                    var t = l.value;
                    t !== value && ((l.value = value), l.callback(value, t));
                  },
                },
              };
            })[0]).callback = a),
            l.facade);
        return (
          o(
            function () {
              var e = s.get(u);
              if (e) {
                var n = new Set(e),
                  i = new Set(t),
                  o = u.current;
                n.forEach(function (t) {
                  i.has(t) || r(t, null);
                }),
                  i.forEach(function (t) {
                    n.has(t) || r(t, o);
                  });
              }
              s.set(u, t);
            },
            [t],
          ),
          u
        );
      }
    },
    30986: (t, e, n) => {
      n.d(e, { ScaleFade: () => c, scaleFadeConfig: () => u });
      var i = n(94799),
        r = n(49708),
        o = n(53738),
        s = n(65329),
        a = n(34023),
        l = n(46222);
      let u = {
          initial: "exit",
          animate: "enter",
          exit: "exit",
          variants: {
            exit: (t) => {
              var e;
              let {
                reverse: n,
                initialScale: i,
                transition: r,
                transitionEnd: o,
                delay: s,
              } = t;
              return {
                opacity: 0,
                ...(n
                  ? { scale: i, transitionEnd: null == o ? void 0 : o.exit }
                  : {
                      transitionEnd: {
                        scale: i,
                        ...(null == o ? void 0 : o.exit),
                      },
                    }),
                transition:
                  null !== (e = null == r ? void 0 : r.exit) && void 0 !== e
                    ? e
                    : l.withDelay.exit(l.j.exit, s),
              };
            },
            enter: (t) => {
              var e;
              let { transitionEnd: n, transition: i, delay: r } = t;
              return {
                opacity: 1,
                scale: 1,
                transition:
                  null !== (e = null == i ? void 0 : i.enter) && void 0 !== e
                    ? e
                    : l.withDelay.enter(l.j.enter, r),
                transitionEnd: null == n ? void 0 : n.enter,
              };
            },
          },
        },
        c = (0, a.forwardRef)(function (t, e) {
          let {
              unmountOnExit: n,
              in: a,
              reverse: l = !0,
              initialScale: c = 0.95,
              className: d,
              transition: h,
              transitionEnd: f,
              delay: p,
              animatePresenceProps: m,
              ...v
            } = t,
            g = !n || (a && n),
            y = a || n ? "enter" : "exit",
            x = {
              initialScale: c,
              reverse: l,
              transition: h,
              transitionEnd: f,
              delay: p,
            };
          return (0, i.jsx)(o.N, {
            ...m,
            custom: x,
            children:
              g &&
              (0, i.jsx)(s.P.div, {
                ref: e,
                className: (0, r.cx)("chakra-offset-slide", d),
                ...u,
                animate: y,
                custom: x,
                ...v,
              }),
          });
        });
      c.displayName = "ScaleFade";
    },
    33529: (t, e, n) => {
      let i;
      n.d(e, {
        P6: () => a,
        qU: () => Y,
        vG: () => h,
        tu: () => c,
        WG: () => T,
        bt: () => Z,
        Gt: () => S,
        uv: () => E,
        PP: () => M,
        KZ: () => v,
        rU: () => l,
        PT: () => F,
        DW: () => f,
        WH: () => d,
        Mc: () => O,
        yL: () => g,
        TU: () =>
          function t(e, n) {
            if (e)
              return "function" == typeof e && m()
                ? v(e, n)
                : f(e)
                  ? y(e)
                  : Array.isArray(e)
                    ? e.map((e) => t(e, n) || x.easeOut)
                    : x[e];
          },
        YE: () => u,
        k2: () => A,
        OQ: () => tt,
        c$: () => X,
        KJ: () => V,
        Wp: () => R,
        Qu: () => w,
        nL: () => m,
        Jb: () => o,
        kB: () => k,
      });
      var r = n(76305);
      let o = (0, r.ph)(() => void 0 !== window.ScrollTimeline);
      class s {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        get finished() {
          return Promise.all(
            this.animations.map((t) => ("finished" in t ? t.finished : t)),
          );
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let n = 0; n < this.animations.length; n++)
            this.animations[n][t] = e;
        }
        attachTimeline(t, e) {
          let n = this.animations.map((n) =>
            o() && n.attachTimeline
              ? n.attachTimeline(t)
              : "function" == typeof e
                ? e(n)
                : void 0,
          );
          return () => {
            n.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      class a extends s {
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
      }
      function l(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      let u = 2e4;
      function c(t) {
        let e = 0,
          n = t.next(e);
        for (; !n.done && e < u; ) (e += 50), (n = t.next(e));
        return e >= u ? 1 / 0 : e;
      }
      function d(t) {
        return "function" == typeof t;
      }
      function h(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let f = (t) => Array.isArray(t) && "number" == typeof t[0],
        p = { linearEasing: void 0 },
        m = (function (t, e) {
          let n = (0, r.ph)(t);
          return () => {
            var t;
            return null !== (t = p[e]) && void 0 !== t ? t : n();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        v = (t, e, n = 10) => {
          let i = "",
            o = Math.max(Math.round(e / n), 2);
          for (let e = 0; e < o; e++) i += t((0, r.qB)(0, o - 1, e)) + ", ";
          return `linear(${i.substring(0, i.length - 2)})`;
        };
      function g(t) {
        return !!(
          ("function" == typeof t && m()) ||
          !t ||
          ("string" == typeof t && (t in x || m())) ||
          f(t) ||
          (Array.isArray(t) && t.every(g))
        );
      }
      let y = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
        x = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: y([0, 0.65, 0.55, 1]),
          circOut: y([0.55, 0, 1, 0.45]),
          backIn: y([0.31, 0.01, 0.66, -0.59]),
          backOut: y([0.33, 1.53, 0.69, 0.99]),
        },
        b = [
          "read",
          "resolveKeyframes",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        w = { value: null, addProjectionMetrics: null };
      function P(t, e) {
        let n = !1,
          i = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          s = () => (n = !0),
          a = b.reduce(
            (t, n) => (
              (t[n] = (function (t, e) {
                let n = new Set(),
                  i = new Set(),
                  r = !1,
                  o = !1,
                  s = new WeakSet(),
                  a = { delta: 0, timestamp: 0, isProcessing: !1 },
                  l = 0;
                function u(e) {
                  s.has(e) && (c.schedule(e), t()), l++, e(a);
                }
                let c = {
                  schedule: (t, e = !1, o = !1) => {
                    let a = o && r ? n : i;
                    return e && s.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), s.delete(t);
                  },
                  process: (t) => {
                    if (((a = t), r)) {
                      o = !0;
                      return;
                    }
                    (r = !0),
                      ([n, i] = [i, n]),
                      n.forEach(u),
                      e && w.value && w.value.frameloop[e].push(l),
                      (l = 0),
                      n.clear(),
                      (r = !1),
                      o && ((o = !1), c.process(t));
                  },
                };
                return c;
              })(s, e ? n : void 0)),
              t
            ),
            {},
          ),
          {
            read: l,
            resolveKeyframes: u,
            update: c,
            preRender: d,
            render: h,
            postRender: f,
          } = a,
          p = () => {
            let s = r.W9.useManualTiming ? o.timestamp : performance.now();
            (n = !1),
              r.W9.useManualTiming ||
                (o.delta = i
                  ? 1e3 / 60
                  : Math.max(Math.min(s - o.timestamp, 40), 1)),
              (o.timestamp = s),
              (o.isProcessing = !0),
              l.process(o),
              u.process(o),
              c.process(o),
              d.process(o),
              h.process(o),
              f.process(o),
              (o.isProcessing = !1),
              n && e && ((i = !1), t(p));
          },
          m = () => {
            (n = !0), (i = !0), o.isProcessing || t(p);
          };
        return {
          schedule: b.reduce((t, e) => {
            let i = a[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (n || m(), i.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < b.length; e++) a[b[e]].cancel(t);
          },
          state: o,
          steps: a,
        };
      }
      let {
          schedule: S,
          cancel: T,
          state: E,
          steps: M,
        } = P(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : r.lQ,
          !0,
        ),
        { schedule: A } = P(queueMicrotask, !1);
      function C() {
        i = void 0;
      }
      let k = {
          now: () => (
            void 0 === i &&
              k.set(
                E.isProcessing || r.W9.useManualTiming
                  ? E.timestamp
                  : performance.now(),
              ),
            i
          ),
          set: (t) => {
            (i = t), queueMicrotask(C);
          },
        },
        D = { x: !1, y: !1 };
      function R(t) {
        return "x" === t || "y" === t
          ? D[t]
            ? null
            : ((D[t] = !0),
              () => {
                D[t] = !1;
              })
          : D.x || D.y
            ? null
            : ((D.x = D.y = !0),
              () => {
                D.x = D.y = !1;
              });
      }
      function V(t, e, n) {
        var i;
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
          let r = document;
          e && (r = e.current);
          let o =
            null !== (i = null == n ? void 0 : n[t]) && void 0 !== i
              ? i
              : r.querySelectorAll(t);
          return o ? Array.from(o) : [];
        }
        return Array.from(t);
      }
      function j(t, e) {
        let n = V(t),
          i = new AbortController();
        return [n, { passive: !0, ...e, signal: i.signal }, () => i.abort()];
      }
      function L(t) {
        return !("touch" === t.pointerType || D.x || D.y);
      }
      function F(t, e, n = {}) {
        let [i, r, o] = j(t, n),
          s = (t) => {
            if (!L(t)) return;
            let { target: n } = t,
              i = e(n, t);
            if ("function" != typeof i || !n) return;
            let o = (t) => {
              L(t) && (i(t), n.removeEventListener("pointerleave", o));
            };
            n.addEventListener("pointerleave", o, r);
          };
        return (
          i.forEach((t) => {
            t.addEventListener("pointerenter", s, r);
          }),
          o
        );
      }
      function B(t, e) {
        let n = `${e}PointerCapture`;
        if (
          t.target instanceof Element &&
          n in t.target &&
          void 0 !== t.pointerId
        )
          try {
            t.target[n](t.pointerId);
          } catch (t) {}
      }
      let N = (t, e) => !!e && (t === e || N(t, e.parentElement)),
        O = (t) =>
          "mouse" === t.pointerType
            ? "number" != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary,
        I = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        U = new WeakSet();
      function W(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function $(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }),
        );
      }
      let G = (t, e) => {
        let n = t.currentTarget;
        if (!n) return;
        let i = W(() => {
          if (U.has(n)) return;
          $(n, "down");
          let t = W(() => {
            $(n, "up");
          });
          n.addEventListener("keyup", t, e),
            n.addEventListener("blur", () => $(n, "cancel"), e);
        });
        n.addEventListener("keydown", i, e),
          n.addEventListener(
            "blur",
            () => n.removeEventListener("keydown", i),
            e,
          );
      };
      function q(t) {
        return O(t) && !(D.x || D.y);
      }
      function X(t, e, n = {}) {
        let [i, r, o] = j(t, n),
          s = (t) => {
            let n = t.currentTarget;
            if (!n || !q(t) || U.has(n)) return;
            U.add(n), B(t, "set");
            let i = e(n, t),
              o = (t, e) => {
                n.removeEventListener("pointerup", s),
                  n.removeEventListener("pointercancel", a),
                  B(t, "release"),
                  q(t) &&
                    U.has(n) &&
                    (U.delete(n),
                    "function" == typeof i && i(t, { success: e }));
              },
              s = (t) => {
                var e, i;
                t.isTrusted &&
                ((e = t),
                (i =
                  n instanceof Element
                    ? n.getBoundingClientRect()
                    : {
                        left: 0,
                        top: 0,
                        right: window.innerWidth,
                        bottom: window.innerHeight,
                      }),
                e.clientX < i.left ||
                  e.clientX > i.right ||
                  e.clientY < i.top ||
                  e.clientY > i.bottom)
                  ? o(t, !1)
                  : o(t, !(n instanceof Element) || N(n, t.target));
              },
              a = (t) => {
                o(t, !1);
              };
            n.addEventListener("pointerup", s, r),
              n.addEventListener("pointercancel", a, r),
              n.addEventListener("lostpointercapture", a, r);
          };
        return (
          i.forEach((t) => {
            t = n.useGlobalTarget ? window : t;
            let e = !1;
            if (t instanceof HTMLElement) {
              var i;
              (e = !0),
                (i = t),
                !I.has(i.tagName) &&
                  -1 === i.tabIndex &&
                  null === t.getAttribute("tabindex") &&
                  (t.tabIndex = 0);
            }
            t.addEventListener("pointerdown", s, r),
              e && t.addEventListener("focus", (t) => G(t, r), r);
          }),
          o
        );
      }
      let Y = { layout: 0, mainThread: 0, waapi: 0 };
      function H() {
        let { value: t } = statsBuffer;
        if (null === t) {
          cancelFrame(H);
          return;
        }
        t.frameloop.rate.push(frameData.delta),
          t.animations.mainThread.push(activeAnimations.mainThread),
          t.animations.waapi.push(activeAnimations.waapi),
          t.animations.layout.push(activeAnimations.layout);
      }
      function _(t) {
        return t.reduce((t, e) => t + e, 0) / t.length;
      }
      function z(t, e = _) {
        return 0 === t.length
          ? { min: 0, max: 0, avg: 0 }
          : { min: Math.min(...t), max: Math.max(...t), avg: e(t) };
      }
      let K = (t) => Math.round(1e3 / t),
        Q = (t) => !isNaN(parseFloat(t)),
        Z = { current: void 0 };
      class J {
        constructor(t, e = {}) {
          (this.version = "12.5.0"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let n = k.now();
              this.updatedAt !== n && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = k.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = Q(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new r.vY());
          let n = this.events[t].add(e);
          return "change" === t
            ? () => {
                n(),
                  S.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, n) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - n);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return Z.current && Z.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = k.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.fj)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e,
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function tt(t, e) {
        return new J(t, e);
      }
    },
    33784: (t, e, n) => {
      n.d(e, { u: () => r });
      var i = n(34741);
      let r = {
        test: (0, n(67237).$)("#"),
        parse: function (t) {
          let e = "",
            n = "",
            i = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (n = t.substring(3, 5)),
                (i = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (n = t.substring(2, 3)),
                (i = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (n += n),
                (i += i),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(i, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: i.B.transform,
      };
    },
    34741: (t, e, n) => {
      n.d(e, { B: () => u });
      var i = n(78172),
        r = n(96644),
        o = n(86300),
        s = n(67237);
      let a = (t) => (0, i.q)(0, 255, t),
        l = { ...r.ai, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, s.$)("rgb", "red"),
          parse: (0, s.q)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(n) +
            ", " +
            (0, o.a)(r.X4.transform(i)) +
            ")",
        };
    },
    34916: (t, e, n) => {
      n.d(e, { S: () => r });
      let i = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function r(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          i.has(t)
        );
      }
    },
    37587: (t, e, n) => {
      n.d(e, { V: () => c, f: () => p });
      var i = n(35);
      let r =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var o = n(10321),
        s = n(86300);
      let a = "number",
        l = "color",
        u =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function c(t) {
        let e = t.toString(),
          n = [],
          r = { color: [], number: [], var: [] },
          o = [],
          s = 0,
          c = e
            .replace(
              u,
              (t) => (
                i.y.test(t)
                  ? (r.color.push(s), o.push(l), n.push(i.y.parse(t)))
                  : t.startsWith("var(")
                    ? (r.var.push(s), o.push("var"), n.push(t))
                    : (r.number.push(s), o.push(a), n.push(parseFloat(t))),
                ++s,
                "${}"
              ),
            )
            .split("${}");
        return { values: n, split: c, indexes: r, types: o };
      }
      function d(t) {
        return c(t).values;
      }
      function h(t) {
        let { split: e, types: n } = c(t),
          r = e.length;
        return (t) => {
          let o = "";
          for (let u = 0; u < r; u++)
            if (((o += e[u]), void 0 !== t[u])) {
              let e = n[u];
              e === a
                ? (o += (0, s.a)(t[u]))
                : e === l
                  ? (o += i.y.transform(t[u]))
                  : (o += t[u]);
            }
          return o;
        };
      }
      let f = (t) => ("number" == typeof t ? 0 : t),
        p = {
          test: function (t) {
            var e, n;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(o.S)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (n = t.match(r)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: d,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = d(t);
            return h(t)(e.map(f));
          },
        };
    },
    44132: (t, e, n) => {
      n.d(e, { FocusLock: () => tJ });
      var i,
        r,
        o = n(94799),
        s = n(91800),
        a = n(34023),
        l = "data-focus-lock",
        u = "data-focus-lock-disabled",
        c = n(30454),
        d = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px",
        },
        h = n(1498),
        f = (0, h.C)({}, function (t) {
          return { target: t.target, currentTarget: t.currentTarget };
        }),
        p = (0, h.C)(),
        m = (0, h.C)(),
        v = (0, h.f)({ async: !0, ssr: "undefined" != typeof document }),
        g = (0, a.createContext)(void 0),
        y = [],
        x = (0, a.forwardRef)(function (t, e) {
          var n,
            i = (0, a.useState)(),
            r = i[0],
            o = i[1],
            h = (0, a.useRef)(),
            m = (0, a.useRef)(!1),
            x = (0, a.useRef)(null),
            b = (0, a.useState)({})[1],
            w = t.children,
            P = t.disabled,
            S = void 0 !== P && P,
            T = t.noFocusGuards,
            E = void 0 !== T && T,
            M = t.persistentFocus,
            A = t.crossFrame,
            C = t.autoFocus,
            k = (t.allowTextSelection, t.group),
            D = t.className,
            R = t.whiteList,
            V = t.hasPositiveIndices,
            j = t.shards,
            L = void 0 === j ? y : j,
            F = t.as,
            B = t.lockProps,
            N = t.sideCar,
            O = t.returnFocus,
            I = void 0 !== O && O,
            U = t.focusOptions,
            W = t.onActivation,
            $ = t.onDeactivation,
            G = (0, a.useState)({})[0],
            q = (0, a.useCallback)(
              function (t) {
                var e = t.captureFocusRestore;
                if (!x.current) {
                  var n,
                    i = null == (n = document) ? void 0 : n.activeElement;
                  (x.current = i), i !== document.body && (x.current = e(i));
                }
                h.current && W && W(h.current), (m.current = !0), b();
              },
              [W],
            ),
            X = (0, a.useCallback)(
              function () {
                (m.current = !1), $ && $(h.current), b();
              },
              [$],
            ),
            Y = (0, a.useCallback)(
              function (t) {
                var e = x.current;
                if (e) {
                  var n = ("function" == typeof e ? e() : e) || document.body,
                    i = "function" == typeof I ? I(n) : I;
                  if (i) {
                    var r = "object" == typeof i ? i : void 0;
                    (x.current = null),
                      t
                        ? Promise.resolve().then(function () {
                            return n.focus(r);
                          })
                        : n.focus(r);
                  }
                }
              },
              [I],
            ),
            H = (0, a.useCallback)(function (t) {
              m.current && f.useMedium(t);
            }, []),
            _ = p.useMedium,
            z = (0, a.useCallback)(function (t) {
              h.current !== t && ((h.current = t), o(t));
            }, []),
            K = (0, s.A)(
              (((n = {})[u] = S && "disabled"), (n[l] = k), n),
              void 0 === B ? {} : B,
            ),
            Q = !0 !== E,
            Z = Q && "tail" !== E,
            J = (0, c.S)([e, z]),
            tt = (0, a.useMemo)(
              function () {
                return {
                  observed: h,
                  shards: L,
                  enabled: !S,
                  active: m.current,
                };
              },
              [S, m.current, L, r],
            );
          return a.createElement(
            a.Fragment,
            null,
            Q && [
              a.createElement("div", {
                key: "guard-first",
                "data-focus-guard": !0,
                tabIndex: S ? -1 : 0,
                style: d,
              }),
              V
                ? a.createElement("div", {
                    key: "guard-nearest",
                    "data-focus-guard": !0,
                    tabIndex: S ? -1 : 1,
                    style: d,
                  })
                : null,
            ],
            !S &&
              a.createElement(N, {
                id: G,
                sideCar: v,
                observed: r,
                disabled: S,
                persistentFocus: void 0 !== M && M,
                crossFrame: void 0 === A || A,
                autoFocus: void 0 === C || C,
                whiteList: R,
                shards: L,
                onActivation: q,
                onDeactivation: X,
                returnFocus: Y,
                focusOptions: U,
                noFocusGuards: E,
              }),
            a.createElement(
              void 0 === F ? "div" : F,
              (0, s.A)({ ref: J }, K, { className: D, onBlur: _, onFocus: H }),
              a.createElement(g.Provider, { value: tt }, w),
            ),
            Z &&
              a.createElement("div", {
                "data-focus-guard": !0,
                tabIndex: S ? -1 : 0,
                style: d,
              }),
          );
        });
      function b(t, e) {
        return (b = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function w(t) {
        return (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      x.propTypes = {};
      var P = function (t) {
          for (var e = Array(t.length), n = 0; n < t.length; ++n) e[n] = t[n];
          return e;
        },
        S = function (t) {
          return Array.isArray(t) ? t : [t];
        },
        T = function (t) {
          return Array.isArray(t) ? t[0] : t;
        },
        E = function (t) {
          if (t.nodeType !== Node.ELEMENT_NODE) return !1;
          var e = window.getComputedStyle(t, null);
          return (
            !!e &&
            !!e.getPropertyValue &&
            ("none" === e.getPropertyValue("display") ||
              "hidden" === e.getPropertyValue("visibility"))
          );
        },
        M = function (t) {
          return t.parentNode &&
            t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
            ? t.parentNode.host
            : t.parentNode;
        },
        A = function (t) {
          return t === document || (t && t.nodeType === Node.DOCUMENT_NODE);
        },
        C = function (t, e) {
          var n,
            i,
            r = t.get(e);
          if (void 0 !== r) return r;
          var o =
            ((n = e),
            (i = C.bind(void 0, t)),
            !n || A(n) || (!E(n) && !n.hasAttribute("inert") && i(M(n))));
          return t.set(e, o), o;
        },
        k = function (t, e) {
          var n,
            i = t.get(e);
          if (void 0 !== i) return i;
          var r =
            ((n = k.bind(void 0, t)), !e || !!A(e) || (!!j(e) && n(M(e))));
          return t.set(e, r), r;
        },
        D = function (t) {
          return t.dataset;
        },
        R = function (t) {
          return "INPUT" === t.tagName;
        },
        V = function (t) {
          return R(t) && "radio" === t.type;
        },
        j = function (t) {
          return ![!0, "true", ""].includes(
            t.getAttribute("data-no-autofocus"),
          );
        },
        L = function (t) {
          var e;
          return !!(
            t && (null === (e = D(t)) || void 0 === e ? void 0 : e.focusGuard)
          );
        },
        F = function (t) {
          return !L(t);
        },
        B = function (t) {
          return !!t;
        },
        N = function (t, e) {
          var n = Math.max(0, t.tabIndex),
            i = Math.max(0, e.tabIndex),
            r = n - i,
            o = t.index - e.index;
          if (r) {
            if (!n) return 1;
            if (!i) return -1;
          }
          return r || o;
        },
        O = function (t, e, n) {
          return P(t)
            .map(function (t, e) {
              var i =
                t.tabIndex < 0 && !t.hasAttribute("tabindex") ? 0 : t.tabIndex;
              return {
                node: t,
                index: e,
                tabIndex:
                  n && -1 === i ? ((t.dataset || {}).focusGuard ? 0 : -1) : i,
              };
            })
            .filter(function (t) {
              return !e || t.tabIndex >= 0;
            })
            .sort(N);
        },
        I =
          "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]",
        U = "".concat(I, ", [data-focus-guard]"),
        W = function (t, e) {
          return P((t.shadowRoot || t).children).reduce(function (t, n) {
            return t.concat(n.matches(e ? U : I) ? [n] : [], W(n));
          }, []);
        },
        $ = function (t, e) {
          var n;
          return t instanceof HTMLIFrameElement &&
            (null === (n = t.contentDocument) || void 0 === n ? void 0 : n.body)
            ? G([t.contentDocument.body], e)
            : [t];
        },
        G = function (t, e) {
          return t.reduce(function (t, n) {
            var i,
              r = W(n, e),
              o = (i = []).concat.apply(
                i,
                r.map(function (t) {
                  return $(t, e);
                }),
              );
            return t.concat(
              o,
              n.parentNode
                ? P(n.parentNode.querySelectorAll(I)).filter(function (t) {
                    return t === n;
                  })
                : [],
            );
          }, []);
        },
        q = function (t, e) {
          return P(t)
            .filter(function (t) {
              return C(e, t);
            })
            .filter(function (t) {
              var e;
              return !(
                (R((e = t)) || "BUTTON" === e.tagName) &&
                ("hidden" === e.type || e.disabled)
              );
            });
        },
        X = function (t, e) {
          return (
            void 0 === e && (e = new Map()),
            P(t).filter(function (t) {
              return k(e, t);
            })
          );
        },
        Y = function (t, e, n) {
          return O(q(G(t, n), e), !0, n);
        },
        H = function (t, e) {
          return O(q(G(t), e), !1);
        },
        _ = function (t, e) {
          return t.shadowRoot
            ? _(t.shadowRoot, e)
            : !!(
                void 0 !== Object.getPrototypeOf(t).contains &&
                Object.getPrototypeOf(t).contains.call(t, e)
              ) ||
                P(t.children).some(function (t) {
                  var n;
                  if (t instanceof HTMLIFrameElement) {
                    var i =
                      null === (n = t.contentDocument) || void 0 === n
                        ? void 0
                        : n.body;
                    return !!i && _(i, e);
                  }
                  return _(t, e);
                });
        },
        z = function (t) {
          try {
            return t();
          } catch (t) {
            return;
          }
        },
        K = function (t) {
          if ((void 0 === t && (t = document), t && t.activeElement)) {
            var e = t.activeElement;
            return e.shadowRoot
              ? K(e.shadowRoot)
              : e instanceof HTMLIFrameElement &&
                  z(function () {
                    return e.contentWindow.document;
                  })
                ? K(e.contentWindow.document)
                : e;
          }
        },
        Q = function (t) {
          void 0 === t && (t = document);
          var e = K(t);
          return (
            !!e &&
            P(t.querySelectorAll("[".concat("data-no-focus-lock", "]"))).some(
              function (t) {
                return _(t, e);
              },
            )
          );
        },
        Z = function (t) {
          for (var e = new Set(), n = t.length, i = 0; i < n; i += 1)
            for (var r = i + 1; r < n; r += 1) {
              var o = t[i].compareDocumentPosition(t[r]);
              (o & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && e.add(r),
                (o & Node.DOCUMENT_POSITION_CONTAINS) > 0 && e.add(i);
            }
          return t.filter(function (t, n) {
            return !e.has(n);
          });
        },
        J = function (t) {
          return t.parentNode ? J(t.parentNode) : t;
        },
        tt = function (t) {
          return S(t)
            .filter(Boolean)
            .reduce(function (t, e) {
              var n = e.getAttribute(l);
              return (
                t.push.apply(
                  t,
                  n
                    ? Z(
                        P(
                          J(e).querySelectorAll(
                            "["
                              .concat(l, '="')
                              .concat(n, '"]:not([')
                              .concat(u, '="disabled"])'),
                          ),
                        ),
                      )
                    : [e],
                ),
                t
              );
            }, []);
        },
        te = function (t, e) {
          return (
            void 0 === e && (e = K(T(t).ownerDocument)),
            !!e &&
              (!e.dataset || !e.dataset.focusGuard) &&
              tt(t).some(function (t) {
                var n;
                return (
                  _(t, e) ||
                  ((n = e),
                  !!P(t.querySelectorAll("iframe")).some(function (t) {
                    return t === n;
                  }))
                );
              })
          );
        },
        tn = function (t, e) {
          t &&
            ("focus" in t && t.focus(e),
            "contentWindow" in t && t.contentWindow && t.contentWindow.focus());
        },
        ti = function (t, e) {
          if (V(t) && t.name)
            return (
              e
                .filter(V)
                .filter(function (e) {
                  return e.name === t.name;
                })
                .filter(function (t) {
                  return t.checked;
                })[0] || t
            );
          return t;
        },
        tr = function (t) {
          var e = new Set();
          return (
            t.forEach(function (n) {
              return e.add(ti(n, t));
            }),
            t.filter(function (t) {
              return e.has(t);
            })
          );
        },
        to = function (t) {
          return t[0] && t.length > 1 ? ti(t[0], t) : t[0];
        },
        ts = function (t, e) {
          return t.indexOf(ti(e, t));
        },
        ta = "NEW_FOCUS",
        tl = function (t, e, n, i, r) {
          var o = t.length,
            s = t[0],
            a = t[o - 1],
            l = L(i);
          if (!(i && t.indexOf(i) >= 0)) {
            var u = void 0 !== i ? n.indexOf(i) : -1,
              c = r ? n.indexOf(r) : u,
              d = r ? t.indexOf(r) : -1;
            if (-1 === u) return -1 !== d ? d : ta;
            if (-1 === d) return ta;
            var h = u - c,
              f = n.indexOf(s),
              p = n.indexOf(a),
              m = tr(n),
              v = void 0 !== i ? m.indexOf(i) : -1,
              g = r ? m.indexOf(r) : v,
              y = m.filter(function (t) {
                return t.tabIndex >= 0;
              }),
              x = void 0 !== i ? y.indexOf(i) : -1,
              b = r ? y.indexOf(r) : x;
            if ((!h && d >= 0) || 0 === e.length) return d;
            var w = ts(t, e[0]),
              P = ts(t, e[e.length - 1]);
            if (u <= f && l && Math.abs(h) > 1) return P;
            if (u >= p && l && Math.abs(h) > 1) return w;
            if (h && Math.abs(x >= 0 && b >= 0 ? b - x : g - v) > 1) return d;
            if (u <= f) return P;
            if (u > p) return w;
            if (h) return Math.abs(h) > 1 ? d : (o + d + h) % o;
          }
        },
        tu = function (t, e, n) {
          var i = X(
            t
              .map(function (t) {
                return t.node;
              })
              .filter(function (t) {
                var e,
                  i =
                    null === (e = D(t)) || void 0 === e ? void 0 : e.autofocus;
                return (
                  t.autofocus ||
                  (void 0 !== i && "false" !== i) ||
                  n.indexOf(t) >= 0
                );
              }),
          );
          return i && i.length ? to(i) : to(X(e));
        },
        tc = function (t, e) {
          return (
            void 0 === e && (e = []),
            e.push(t),
            t.parentNode && tc(t.parentNode.host || t.parentNode, e),
            e
          );
        },
        td = function (t, e) {
          for (var n = tc(t), i = tc(e), r = 0; r < n.length; r += 1) {
            var o = n[r];
            if (i.indexOf(o) >= 0) return o;
          }
          return !1;
        },
        th = function (t, e, n) {
          var i = S(t),
            r = S(e),
            o = i[0],
            s = !1;
          return (
            r.filter(Boolean).forEach(function (t) {
              (s = td(s || t, t) || s),
                n.filter(Boolean).forEach(function (t) {
                  var e = td(o, t);
                  e && (s = !s || _(e, s) ? e : td(e, s));
                });
            }),
            s
          );
        },
        tf = function (t, e) {
          return t.reduce(function (t, n) {
            var i, r;
            return t.concat(
              ((i = n),
              (r = e),
              q(
                P(i.querySelectorAll("[".concat("data-autofocus-inside", "]")))
                  .map(function (t) {
                    return G([t]);
                  })
                  .reduce(function (t, e) {
                    return t.concat(e);
                  }, []),
                r,
              )),
            );
          }, []);
        },
        tp = function (t, e) {
          var n = new Map();
          return (
            e.forEach(function (t) {
              return n.set(t.node, t);
            }),
            t
              .map(function (t) {
                return n.get(t);
              })
              .filter(B)
          );
        },
        tm = function (t, e) {
          var n = K(S(t).length > 0 ? document : T(t).ownerDocument),
            i = tt(t).filter(F),
            r = th(n || t, t, i),
            o = new Map(),
            s = H(i, o),
            a = s.filter(function (t) {
              return F(t.node);
            });
          if (a[0]) {
            var l = H([r], o).map(function (t) {
                return t.node;
              }),
              u = tp(l, a),
              c = u.map(function (t) {
                return t.node;
              }),
              d = u
                .filter(function (t) {
                  return t.tabIndex >= 0;
                })
                .map(function (t) {
                  return t.node;
                }),
              h = tl(c, d, l, n, e);
            if (h === ta) {
              var f = tu(s, d, tf(i, o)) || tu(s, c, tf(i, o));
              return f
                ? { node: f }
                : (console.warn(
                    "focus-lock: cannot find any node to move focus into",
                  ),
                  void 0);
            }
            return void 0 === h ? h : u[h];
          }
        },
        tv = 0,
        tg = !1,
        ty = function (t, e, n) {
          void 0 === n && (n = {});
          var i = tm(t, e);
          if (!tg && i) {
            if (tv > 2) {
              console.error(
                "FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting",
              ),
                (tg = !0),
                setTimeout(function () {
                  tg = !1;
                }, 1);
              return;
            }
            tv++, tn(i.node, n.focusOptions), tv--;
          }
        };
      function tx(t) {
        if (!t) return null;
        if ("undefined" == typeof WeakRef)
          return function () {
            return t || null;
          };
        var e = t ? new WeakRef(t) : null;
        return function () {
          return (null == e ? void 0 : e.deref()) || null;
        };
      }
      var tb = function (t) {
          if (!t) return null;
          for (var e = [], n = t; n && n !== document.body; )
            e.push({
              current: tx(n),
              parent: tx(n.parentElement),
              left: tx(n.previousElementSibling),
              right: tx(n.nextElementSibling),
            }),
              (n = n.parentElement);
          return { element: tx(t), stack: e, ownerDocument: t.ownerDocument };
        },
        tw = function (t) {
          if (t)
            for (
              var e,
                n,
                i,
                r,
                o,
                s = t.stack,
                a = t.ownerDocument,
                l = new Map(),
                u = 0;
              u < s.length;
              u++
            ) {
              var c = s[u],
                d =
                  null === (e = c.parent) || void 0 === e ? void 0 : e.call(c);
              if (d && a.contains(d)) {
                for (
                  var h =
                      null === (n = c.left) || void 0 === n
                        ? void 0
                        : n.call(c),
                    f = c.current(),
                    p = d.contains(f) ? f : void 0,
                    m =
                      null === (i = c.right) || void 0 === i
                        ? void 0
                        : i.call(c),
                    v = Y([d], l),
                    g =
                      null !==
                        (o =
                          null !==
                            (r =
                              null != p
                                ? p
                                : null == h
                                  ? void 0
                                  : h.nextElementSibling) && void 0 !== r
                            ? r
                            : m) && void 0 !== o
                        ? o
                        : h;
                  g;

                ) {
                  for (var y = 0; y < v.length; y++) {
                    var x = v[y];
                    if (null == g ? void 0 : g.contains(x.node)) return x.node;
                  }
                  g = g.nextElementSibling;
                }
                if (v.length) return v[0].node;
              }
            }
        },
        tP = function (t) {
          var e = tb(t);
          return function () {
            return tw(e);
          };
        },
        tS = function (t) {
          var e = tt(t).filter(F),
            n = O(G([th(t, t, e)], !0), !0, !0),
            i = G(e, !1);
          return n.map(function (t) {
            var e = t.node;
            return {
              node: e,
              index: t.index,
              lockItem: i.indexOf(e) >= 0,
              guard: L(e),
            };
          });
        },
        tT = function (t, e, n) {
          if (!t || !e) return console.error("no element or scope given"), {};
          var i = S(e);
          if (
            i.every(function (e) {
              return !_(e, t);
            })
          )
            return (
              console.error("Active element is not contained in the scope"), {}
            );
          var r = n ? Y(i, new Map()) : H(i, new Map()),
            o = r.findIndex(function (e) {
              return e.node === t;
            });
          if (-1 !== o)
            return {
              prev: r[o - 1],
              next: r[o + 1],
              first: r[0],
              last: r[r.length - 1],
            };
        },
        tE = function (t, e) {
          var n = e ? Y(S(t), new Map()) : H(S(t), new Map());
          return { first: n[0], last: n[n.length - 1] };
        },
        tM = function (t, e, n) {
          void 0 === e && (e = {});
          var i,
            r =
              ((i = e),
              Object.assign(
                { scope: document.body, cycle: !0, onlyTabbable: !0 },
                i,
              )),
            o = tT(t, r.scope, r.onlyTabbable);
          if (o) {
            var s = n(o, r.cycle);
            s && tn(s.node, r.focusOptions);
          }
        },
        tA = function (t, e, n) {
          var i,
            r = tE(t, null === (i = e.onlyTabbable) || void 0 === i || i)[n];
          r && tn(r.node, e.focusOptions);
        };
      function tC(t) {
        setTimeout(t, 1);
      }
      var tk = function (t) {
          return t && "current" in t ? t.current : t;
        },
        tD = function () {
          return document && document.activeElement === document.body;
        },
        tR = null,
        tV = null,
        tj = function () {
          return null;
        },
        tL = null,
        tF = !1,
        tB = !1,
        tN = function (t, e) {
          tL = { observerNode: t, portaledElement: e };
        };
      function tO(t, e, n, i) {
        var r = null,
          o = t;
        do {
          var s = i[o];
          if (s.guard) s.node.dataset.focusAutoGuard && (r = s);
          else if (s.lockItem) {
            if (o !== t) return;
            r = null;
          } else break;
        } while ((o += n) !== e);
        r && (r.node.tabIndex = 0);
      }
      var tI = function (t) {
          return H(t, new Map());
        },
        tU = function () {
          var t = !1;
          if (tR) {
            var e = tR,
              n = e.observed,
              i = e.persistentFocus,
              r = e.autoFocus,
              o = e.shards,
              s = e.crossFrame,
              a = e.focusOptions,
              l = e.noFocusGuards,
              u = n || (tL && tL.portaledElement);
            if (
              tD() &&
              tV &&
              tV !== document.body &&
              (!document.body.contains(tV) ||
                !tI([(h = tV).parentNode]).some(function (t) {
                  return t.node === h;
                }))
            ) {
              var c = tj();
              c && c.focus();
            }
            var d = document && document.activeElement;
            if (u) {
              var h,
                f = [u].concat(o.map(tk).filter(Boolean));
              if (
                ((!d ||
                  (
                    tR.whiteList ||
                    function () {
                      return !0;
                    }
                  )(d)) &&
                  (i ||
                    (function () {
                      if (!(s ? !!tF : "meanwhile" === tF) || !l || !tV || tB)
                        return !1;
                      var t = tI(f),
                        e = t.findIndex(function (t) {
                          return t.node === tV;
                        });
                      return 0 === e || e === t.length - 1;
                    })() ||
                    !(tD() || Q()) ||
                    (!tV && r)) &&
                  (u &&
                    !(
                      te(f) ||
                      (d &&
                        f.some(function (t) {
                          return (function t(e, n, i) {
                            return (
                              n &&
                              ((n.host === e &&
                                (!n.activeElement ||
                                  i.contains(n.activeElement))) ||
                                (n.parentNode && t(e, n.parentNode, i)))
                            );
                          })(d, t, t);
                        })) ||
                      (tL && tL.portaledElement === d)
                    ) &&
                    (document && !tV && d && !r
                      ? (d.blur && d.blur(), document.body.focus())
                      : ((t = ty(f, tV, { focusOptions: a })), (tL = {}))),
                  (tV = document && document.activeElement) !== document.body &&
                    (tj = tP(tV)),
                  (tF = !1)),
                document &&
                  d !== document.activeElement &&
                  document.querySelector("[data-focus-auto-guard]"))
              ) {
                var p = document && document.activeElement,
                  m = tS(f),
                  v = m
                    .map(function (t) {
                      return t.node;
                    })
                    .indexOf(p);
                v > -1 &&
                  (m
                    .filter(function (t) {
                      var e = t.guard,
                        n = t.node;
                      return e && n.dataset.focusAutoGuard;
                    })
                    .forEach(function (t) {
                      return t.node.removeAttribute("tabIndex");
                    }),
                  tO(v, m.length, 1, m),
                  tO(v, -1, -1, m));
              }
            }
          }
          return t;
        },
        tW = function (t) {
          tU() && t && (t.stopPropagation(), t.preventDefault());
        },
        t$ = function () {
          return tC(tU);
        },
        tG = function () {
          tB = !0;
        },
        tq = function () {
          (tB = !1),
            (tF = "just"),
            tC(function () {
              tF = "meanwhile";
            });
        },
        tX = function () {
          document.addEventListener("focusin", tW),
            document.addEventListener("focusout", t$),
            window.addEventListener("focus", tG),
            window.addEventListener("blur", tq);
        },
        tY = function () {
          document.removeEventListener("focusin", tW),
            document.removeEventListener("focusout", t$),
            window.removeEventListener("focus", tG),
            window.removeEventListener("blur", tq);
        },
        tH = {
          moveFocusInside: ty,
          focusInside: te,
          focusNextElement: function (t, e) {
            void 0 === e && (e = {}),
              tM(t, e, function (t, e) {
                var n = t.next,
                  i = t.first;
                return n || (e && i);
              });
          },
          focusPrevElement: function (t, e) {
            void 0 === e && (e = {}),
              tM(t, e, function (t, e) {
                var n = t.prev,
                  i = t.last;
                return n || (e && i);
              });
          },
          focusFirstElement: function (t, e) {
            void 0 === e && (e = {}), tA(t, e, "first");
          },
          focusLastElement: function (t, e) {
            void 0 === e && (e = {}), tA(t, e, "last");
          },
          captureFocusRestore: tP,
        };
      f.assignSyncMedium(function (t) {
        var e = t.target,
          n = t.currentTarget;
        n.contains(e) || tN(n, e);
      }),
        p.assignMedium(t$),
        m.assignMedium(function (t) {
          return t(tH);
        });
      let t_ = ((i = function (t) {
        var e = t.slice(-1)[0];
        e && !tR && tX();
        var n = tR,
          i = n && e && e.id === n.id;
        (tR = e),
          !n ||
            i ||
            (n.onDeactivation(),
            t.filter(function (t) {
              return t.id === n.id;
            }).length || n.returnFocus(!e)),
          e
            ? ((tV = null),
              (i && n.observed === e.observed) || e.onActivation(tH),
              tU(!0),
              tC(tU))
            : (tY(), (tV = null));
      }),
      function (t) {
        var e,
          n,
          r,
          o,
          s,
          l = [];
        function u() {
          i(
            (s = l
              .map(function (t) {
                return t.props;
              })
              .filter(function (t) {
                return !t.disabled;
              })),
          );
        }
        var c = (function (e) {
          function n() {
            return e.apply(this, arguments) || this;
          }
          (n.prototype = Object.create(e.prototype)),
            (n.prototype.constructor = n),
            b(n, e),
            (n.peek = function () {
              return s;
            });
          var i = n.prototype;
          return (
            (i.componentDidMount = function () {
              l.push(this), u();
            }),
            (i.componentDidUpdate = function () {
              u();
            }),
            (i.componentWillUnmount = function () {
              var t = l.indexOf(this);
              l.splice(t, 1), u();
            }),
            (i.render = function () {
              return a.createElement(t, this.props);
            }),
            n
          );
        })(a.PureComponent);
        return (
          (e = c),
          (n = "displayName"),
          (r = "SideEffect(" + (t.displayName || t.name || "Component") + ")"),
          (o = (function (t, e) {
            if ("object" != w(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(t, e || "default");
              if ("object" != w(i)) return i;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          })(n, "string")),
          (n = "symbol" == w(o) ? o : o + "") in e
            ? Object.defineProperty(e, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = r),
          c
        );
      })(function () {
        return null;
      });
      var tz = (0, a.forwardRef)(function (t, e) {
          return a.createElement(x, (0, s.A)({ sideCar: t_, ref: e }, t));
        }),
        tK = x.propTypes || {};
      tK.sideCar,
        (function (t, e) {
          if (null != t) {
            var n = {};
            for (var i in t)
              if (Object.prototype.hasOwnProperty.call(t, i)) {
                if (e.indexOf(i) >= 0) continue;
                n[i] = t[i];
              }
          }
        })(tK, ["sideCar"]),
        (tz.propTypes = {});
      var tQ = n(56113);
      let tZ = null !== (r = tz.default) && void 0 !== r ? r : tz,
        tJ = (t) => {
          let {
              initialFocusRef: e,
              finalFocusRef: n,
              contentRef: i,
              restoreFocus: r,
              children: s,
              isDisabled: l,
              autoFocus: u,
              persistentFocus: c,
              lockFocusAcrossFrames: d,
            } = t,
            h = (0, a.useCallback)(() => {
              (null == e ? void 0 : e.current)
                ? e.current.focus()
                : (null == i ? void 0 : i.current) &&
                  0 === (0, tQ.ep)(i.current).length &&
                  requestAnimationFrame(() => {
                    var t;
                    null === (t = i.current) || void 0 === t || t.focus();
                  });
            }, [e, i]),
            f = (0, a.useCallback)(() => {
              var t;
              null == n ||
                null === (t = n.current) ||
                void 0 === t ||
                t.focus();
            }, [n]),
            p = r && !n;
          return (0, o.jsx)(tZ, {
            crossFrame: d,
            persistentFocus: c,
            autoFocus: u,
            disabled: l,
            onActivation: h,
            onDeactivation: f,
            returnFocus: p,
            children: s,
          });
        };
      tJ.displayName = "FocusLock";
    },
    44637: (t, e, n) => {
      n.d(e, {
        KN: () => o,
        gQ: () => u,
        px: () => s,
        uj: () => r,
        vh: () => a,
        vw: () => l,
      });
      let i = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        r = i("deg"),
        o = i("%"),
        s = i("px"),
        a = i("vh"),
        l = i("vw"),
        u = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    46222: (t, e, n) => {
      n.d(e, {
        TRANSITION_EASINGS: () => i,
        getSlideTransition: () => o,
        j: () => s,
        withDelay: () => a,
      });
      let i = {
          ease: [0.25, 0.1, 0.25, 1],
          easeIn: [0.4, 0, 1, 1],
          easeOut: [0, 0, 0.2, 1],
          easeInOut: [0.4, 0, 0.2, 1],
        },
        r = {
          slideLeft: {
            position: { left: 0, top: 0, bottom: 0, width: "100%" },
            enter: { x: 0, y: 0 },
            exit: { x: "-100%", y: 0 },
          },
          slideRight: {
            position: { right: 0, top: 0, bottom: 0, width: "100%" },
            enter: { x: 0, y: 0 },
            exit: { x: "100%", y: 0 },
          },
          slideUp: {
            position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
            enter: { x: 0, y: 0 },
            exit: { x: 0, y: "-100%" },
          },
          slideDown: {
            position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
            enter: { x: 0, y: 0 },
            exit: { x: 0, y: "100%" },
          },
        };
      function o(t) {
        var e;
        switch (
          null !== (e = null == t ? void 0 : t.direction) && void 0 !== e
            ? e
            : "right"
        ) {
          case "right":
          default:
            return r.slideRight;
          case "left":
            return r.slideLeft;
          case "bottom":
            return r.slideDown;
          case "top":
            return r.slideUp;
        }
      }
      let s = {
          enter: { duration: 0.2, ease: i.easeOut },
          exit: { duration: 0.1, ease: i.easeIn },
        },
        a = {
          enter: (t, e) => ({
            ...t,
            delay: "number" == typeof e ? e : null == e ? void 0 : e.enter,
          }),
          exit: (t, e) => ({
            ...t,
            delay: "number" == typeof e ? e : null == e ? void 0 : e.exit,
          }),
        };
    },
    49325: (t, e, n) => {
      n.d(e, { useControllableProp: () => o, useControllableState: () => s });
      var i = n(34023),
        r = n(59013);
      function o(t, e) {
        let n = void 0 !== t,
          r = n ? t : e;
        return (0, i.useMemo)(() => [n, r], [n, r]);
      }
      function s(t) {
        let {
            value: e,
            defaultValue: n,
            onChange: o,
            shouldUpdate: s = (t, e) => t !== e,
          } = t,
          a = (0, r.useCallbackRef)(o),
          l = (0, r.useCallbackRef)(s),
          [u, c] = (0, i.useState)(n),
          d = void 0 !== e,
          h = d ? e : u,
          f = (0, r.useCallbackRef)(
            (t) => {
              let e = "function" == typeof t ? t(h) : t;
              l(h, e) && (d || c(e), a(e));
            },
            [d, a, h, l],
          );
        return [h, f];
      }
    },
    53738: (t, e, n) => {
      n.d(e, { N: () => g });
      var i = n(94799),
        r = n(34023),
        o = n(92655),
        s = n(89091),
        a = n(20924),
        l = n(18347),
        u = n(91538);
      class c extends r.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = e.offsetParent,
              n = (t instanceof HTMLElement && t.offsetWidth) || 0,
              i = this.props.sizeRef.current;
            (i.height = e.offsetHeight || 0),
              (i.width = e.offsetWidth || 0),
              (i.top = e.offsetTop),
              (i.left = e.offsetLeft),
              (i.right = n - i.width - i.left);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function d(t) {
        let { children: e, isPresent: n, anchorX: o } = t,
          s = (0, r.useId)(),
          a = (0, r.useRef)(null),
          l = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: d } = (0, r.useContext)(u.Q);
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: t, height: e, top: i, left: r, right: u } = l.current;
            if (n || !a.current || !t || !e) return;
            a.current.dataset.motionPopId = s;
            let c = document.createElement("style");
            return (
              d && (c.nonce = d),
              document.head.appendChild(c),
              c.sheet &&
                c.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      s,
                      '"] {\n            position: absolute !important;\n            width: ',
                    )
                    .concat(t, "px !important;\n            height: ")
                    .concat(e, "px !important;\n            ")
                    .concat(
                      "left" === o ? "left: ".concat(r) : "right: ".concat(u),
                      "px !important;\n            top: ",
                    )
                    .concat(i, "px !important;\n          }\n        "),
                ),
              () => {
                document.head.removeChild(c);
              }
            );
          }, [n]),
          (0, i.jsx)(c, {
            isPresent: n,
            childRef: a,
            sizeRef: l,
            children: r.cloneElement(e, { ref: a }),
          })
        );
      }
      let h = (t) => {
        let {
            children: e,
            initial: n,
            isPresent: o,
            onExitComplete: a,
            custom: u,
            presenceAffectsLayout: c,
            mode: h,
            anchorX: p,
          } = t,
          m = (0, s.M)(f),
          v = (0, r.useId)(),
          g = (0, r.useCallback)(
            (t) => {
              for (let e of (m.set(t, !0), m.values())) if (!e) return;
              a && a();
            },
            [m, a],
          ),
          y = (0, r.useMemo)(
            () => ({
              id: v,
              initial: n,
              isPresent: o,
              custom: u,
              onExitComplete: g,
              register: (t) => (m.set(t, !1), () => m.delete(t)),
            }),
            c ? [Math.random(), g] : [o, g],
          );
        return (
          (0, r.useMemo)(() => {
            m.forEach((t, e) => m.set(e, !1));
          }, [o]),
          r.useEffect(() => {
            o || m.size || !a || a();
          }, [o]),
          "popLayout" === h &&
            (e = (0, i.jsx)(d, { isPresent: o, anchorX: p, children: e })),
          (0, i.jsx)(l.t.Provider, { value: y, children: e })
        );
      };
      function f() {
        return new Map();
      }
      var p = n(59660);
      let m = (t) => t.key || "";
      function v(t) {
        let e = [];
        return (
          r.Children.forEach(t, (t) => {
            (0, r.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      let g = (t) => {
        let {
            children: e,
            custom: n,
            initial: l = !0,
            onExitComplete: u,
            presenceAffectsLayout: c = !0,
            mode: d = "sync",
            propagate: f = !1,
            anchorX: g = "left",
          } = t,
          [y, x] = (0, p.xQ)(f),
          b = (0, r.useMemo)(() => v(e), [e]),
          w = f && !y ? [] : b.map(m),
          P = (0, r.useRef)(!0),
          S = (0, r.useRef)(b),
          T = (0, s.M)(() => new Map()),
          [E, M] = (0, r.useState)(b),
          [A, C] = (0, r.useState)(b);
        (0, a.E)(() => {
          (P.current = !1), (S.current = b);
          for (let t = 0; t < A.length; t++) {
            let e = m(A[t]);
            w.includes(e) ? T.delete(e) : !0 !== T.get(e) && T.set(e, !1);
          }
        }, [A, w.length, w.join("-")]);
        let k = [];
        if (b !== E) {
          let t = [...b];
          for (let e = 0; e < A.length; e++) {
            let n = A[e],
              i = m(n);
            w.includes(i) || (t.splice(e, 0, n), k.push(n));
          }
          return "wait" === d && k.length && (t = k), C(v(t)), M(b), null;
        }
        let { forceRender: D } = (0, r.useContext)(o.L);
        return (0, i.jsx)(i.Fragment, {
          children: A.map((t) => {
            let e = m(t),
              r = (!f || !!y) && (b === A || w.includes(e));
            return (0, i.jsx)(
              h,
              {
                isPresent: r,
                initial: (!P.current || !!l) && void 0,
                custom: n,
                presenceAffectsLayout: c,
                mode: d,
                onExitComplete: r
                  ? void 0
                  : () => {
                      if (!T.has(e)) return;
                      T.set(e, !0);
                      let t = !0;
                      T.forEach((e) => {
                        e || (t = !1);
                      }),
                        t &&
                          (null == D || D(),
                          C(S.current),
                          f && (null == x || x()),
                          u && u());
                    },
                anchorX: g,
                children: t,
              },
              e,
            );
          }),
        });
      };
    },
    56113: (t, e, n) => {
      n.d(e, { ep: () => s });
      var i = n(91532);
      let r =
          "input:not(:disabled):not([disabled]),select:not(:disabled):not([disabled]),textarea:not(:disabled):not([disabled]),embed,iframe,object,a[href],area[href],button:not(:disabled):not([disabled]),[tabindex],audio[controls],video[controls],*[tabindex]:not([aria-disabled]),*[contenteditable]",
        o = (t) => t.offsetWidth > 0 && t.offsetHeight > 0;
      function s(t) {
        let e = Array.from(t.querySelectorAll(r));
        return e.unshift(t), e.filter((t) => (0, i.tp)(t) && o(t));
      }
    },
    59013: (t, e, n) => {
      n.d(e, { useCallbackRef: () => r });
      var i = n(34023);
      function r(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = (0, i.useRef)(t);
        return (
          (0, i.useEffect)(() => {
            n.current = t;
          }),
          (0, i.useCallback)(function () {
            for (var t, e = arguments.length, i = Array(e), r = 0; r < e; r++)
              i[r] = arguments[r];
            return null === (t = n.current) || void 0 === t
              ? void 0
              : t.call(n, ...i);
          }, e)
        );
      }
    },
    59660: (t, e, n) => {
      n.d(e, { tF: () => s, xQ: () => o });
      var i = n(34023),
        r = n(18347);
      function o(t = !0) {
        let e = (0, i.useContext)(r.t);
        if (null === e) return [!0, null];
        let { isPresent: n, onExitComplete: s, register: a } = e,
          l = (0, i.useId)();
        (0, i.useEffect)(() => {
          if (t) return a(l);
        }, [t]);
        let u = (0, i.useCallback)(() => t && s && s(l), [l, s, t]);
        return !n && s ? [!1, u] : [!0];
      }
      function s() {
        var t;
        return null === (t = (0, i.useContext)(r.t)) || t.isPresent;
      }
    },
    62434: (t, e, n) => {
      n.d(e, { EnvironmentProvider: () => l, useEnvironment: () => a });
      var i = n(94799),
        r = n(11844),
        o = n(34023);
      let s = (0, o.createContext)({
        getDocument: () => document,
        getWindow: () => window,
      });
      function a() {
        let { defer: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          [, e] = (0, o.useReducer)((t) => t + 1, 0);
        return (
          (0, r.useSafeLayoutEffect)(() => {
            t && e();
          }, [t]),
          (0, o.useContext)(s)
        );
      }
      function l(t) {
        let { children: e, environment: n, disabled: r } = t,
          a = (0, o.useRef)(null),
          l = (0, o.useMemo)(
            () =>
              n || {
                getDocument: () => {
                  var t, e;
                  return null !==
                    (e =
                      null === (t = a.current) || void 0 === t
                        ? void 0
                        : t.ownerDocument) && void 0 !== e
                    ? e
                    : document;
                },
                getWindow: () => {
                  var t, e;
                  return null !==
                    (e =
                      null === (t = a.current) || void 0 === t
                        ? void 0
                        : t.ownerDocument.defaultView) && void 0 !== e
                    ? e
                    : window;
                },
              },
            [n],
          ),
          u = !r || !n;
        return (0, i.jsxs)(s.Provider, {
          value: l,
          children: [
            e,
            u && (0, i.jsx)("span", { id: "__chakra_env", hidden: !0, ref: a }),
          ],
        });
      }
      (s.displayName = "EnvironmentContext"),
        (l.displayName = "EnvironmentProvider");
    },
    65329: (t, e, n) => {
      n.d(e, { P: () => rn });
      var i,
        r,
        o = n(76305);
      function s(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      function a(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, n) => {
              (e[0][n] = t.get()), (e[1][n] = t.getVelocity());
            }),
          e
        );
      }
      function l(t, e, n, i) {
        if ("function" == typeof e) {
          let [r, o] = a(i);
          e = e(void 0 !== n ? n : t.custom, r, o);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [r, o] = a(i);
          e = e(void 0 !== n ? n : t.custom, r, o);
        }
        return e;
      }
      function u(t, e, n) {
        let i = t.getProps();
        return l(i, e, void 0 !== n ? n : i.custom, t);
      }
      var c = n(33529);
      let d = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        h = new Set(d),
        f = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...d,
        ]),
        p = (t) => Array.isArray(t),
        m = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        v = (t) => (p(t) ? t[t.length - 1] || 0 : t),
        g = (t) => !!(t && t.getVelocity);
      function y(t, e) {
        let n = t.getValue("willChange");
        if (g(n) && n.add) return n.add(e);
      }
      let x = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        b = "data-" + x("framerAppearId"),
        w = { current: !1 },
        P = (t, e, n) =>
          (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
      function S(t, e, n, i) {
        if (t === e && n === i) return o.lQ;
        let r = (e) =>
          (function (t, e, n, i, r) {
            let o, s;
            let a = 0;
            do (o = P((s = e + (n - e) / 2), i, r) - t) > 0 ? (n = s) : (e = s);
            while (Math.abs(o) > 1e-7 && ++a < 12);
            return s;
          })(e, 0, 1, t, n);
        return (t) => (0 === t || 1 === t ? t : P(r(t), e, i));
      }
      let T = (t) => (e) =>
          e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        E = (t) => (e) => 1 - t(1 - e),
        M = S(0.33, 1.53, 0.69, 0.99),
        A = E(M),
        C = T(A),
        k = (t) =>
          (t *= 2) < 1 ? 0.5 * A(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        D = (t) => 1 - Math.sin(Math.acos(t)),
        R = E(D),
        V = T(D),
        j = (t) => /^0[^.\s]+$/u.test(t);
      var L = n(37587),
        F = n(10321);
      let B = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function N(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [i] = n.match(F.S) || [];
        if (!i) return t;
        let r = n.replace(i, ""),
          o = +!!B.has(e);
        return i !== n && (o *= 100), e + "(" + o + r + ")";
      }
      let O = /\b([a-z-]*)\(.*?\)/gu,
        I = {
          ...L.f,
          getAnimatableNone: (t) => {
            let e = t.match(O);
            return e ? e.map(N).join(" ") : t;
          },
        };
      var U = n(35),
        W = n(96644),
        $ = n(44637);
      let G = {
          borderWidth: $.px,
          borderTopWidth: $.px,
          borderRightWidth: $.px,
          borderBottomWidth: $.px,
          borderLeftWidth: $.px,
          borderRadius: $.px,
          radius: $.px,
          borderTopLeftRadius: $.px,
          borderTopRightRadius: $.px,
          borderBottomRightRadius: $.px,
          borderBottomLeftRadius: $.px,
          width: $.px,
          maxWidth: $.px,
          height: $.px,
          maxHeight: $.px,
          top: $.px,
          right: $.px,
          bottom: $.px,
          left: $.px,
          padding: $.px,
          paddingTop: $.px,
          paddingRight: $.px,
          paddingBottom: $.px,
          paddingLeft: $.px,
          margin: $.px,
          marginTop: $.px,
          marginRight: $.px,
          marginBottom: $.px,
          marginLeft: $.px,
          backgroundPositionX: $.px,
          backgroundPositionY: $.px,
        },
        q = {
          rotate: $.uj,
          rotateX: $.uj,
          rotateY: $.uj,
          rotateZ: $.uj,
          scale: W.hs,
          scaleX: W.hs,
          scaleY: W.hs,
          scaleZ: W.hs,
          skew: $.uj,
          skewX: $.uj,
          skewY: $.uj,
          distance: $.px,
          translateX: $.px,
          translateY: $.px,
          translateZ: $.px,
          x: $.px,
          y: $.px,
          z: $.px,
          perspective: $.px,
          transformPerspective: $.px,
          opacity: W.X4,
          originX: $.gQ,
          originY: $.gQ,
          originZ: $.px,
        },
        X = { ...W.ai, transform: Math.round },
        Y = {
          ...G,
          ...q,
          zIndex: X,
          size: $.px,
          fillOpacity: W.X4,
          strokeOpacity: W.X4,
          numOctaves: X,
        },
        H = {
          ...Y,
          color: U.y,
          backgroundColor: U.y,
          outlineColor: U.y,
          fill: U.y,
          stroke: U.y,
          borderColor: U.y,
          borderTopColor: U.y,
          borderRightColor: U.y,
          borderBottomColor: U.y,
          borderLeftColor: U.y,
          filter: I,
          WebkitFilter: I,
        },
        _ = (t) => H[t];
      function z(t, e) {
        let n = _(t);
        return (
          n !== I && (n = L.f),
          n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
        );
      }
      let K = new Set(["auto", "none", "0"]),
        Q = (t) => (180 * t) / Math.PI,
        Z = (t) => tt(Q(Math.atan2(t[1], t[0]))),
        J = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: Z,
          rotateZ: Z,
          skewX: (t) => Q(Math.atan(t[1])),
          skewY: (t) => Q(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        tt = (t) => ((t %= 360) < 0 && (t += 360), t),
        te = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        tn = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        ti = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: te,
          scaleY: tn,
          scale: (t) => (te(t) + tn(t)) / 2,
          rotateX: (t) => tt(Q(Math.atan2(t[6], t[5]))),
          rotateY: (t) => tt(Q(Math.atan2(-t[2], t[0]))),
          rotateZ: Z,
          rotate: Z,
          skewX: (t) => Q(Math.atan(t[4])),
          skewY: (t) => Q(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function tr(t) {
        return +!!t.includes("scale");
      }
      function to(t, e) {
        let n, i;
        if (!t || "none" === t) return tr(e);
        let r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (r) (n = ti), (i = r);
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          (n = J), (i = e);
        }
        if (!i) return tr(e);
        let o = n[e],
          s = i[1].split(",").map(ta);
        return "function" == typeof o ? o(s) : s[o];
      }
      let ts = (t, e) => {
        let { transform: n = "none" } = getComputedStyle(t);
        return to(n, e);
      };
      function ta(t) {
        return parseFloat(t.trim());
      }
      let tl = (t) => t === W.ai || t === $.px,
        tu = new Set(["x", "y", "z"]),
        tc = d.filter((t) => !tu.has(t)),
        td = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: (t, { transform: e }) => to(e, "x"),
          y: (t, { transform: e }) => to(e, "y"),
        };
      (td.translateX = td.x), (td.translateY = td.y);
      let th = new Set(),
        tf = !1,
        tp = !1;
      function tm() {
        if (tp) {
          let t = Array.from(th).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            n = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                tc.forEach((n) => {
                  let i = t.getValue(n);
                  void 0 !== i &&
                    (e.push([n, i.get()]), i.set(+!!n.startsWith("scale")));
                }),
                e
              );
            })(t);
            e.length && (n.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = n.get(t);
              e &&
                e.forEach(([e, n]) => {
                  var i;
                  null === (i = t.getValue(e)) || void 0 === i || i.set(n);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (tp = !1), (tf = !1), th.forEach((t) => t.complete()), th.clear();
      }
      function tv() {
        th.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (tp = !0);
        });
      }
      class tg {
        constructor(t, e, n, i, r, o = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = n),
            (this.motionValue = i),
            (this.element = r),
            (this.isAsync = o);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (th.add(this),
                tf || ((tf = !0), c.Gt.read(tv), c.Gt.resolveKeyframes(tm)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: n,
            motionValue: i,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == i ? void 0 : i.get(),
                  o = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (n && e) {
                  let i = n.readValue(e, o);
                  null != i && (t[0] = i);
                }
                void 0 === t[0] && (t[0] = o), i && void 0 === r && i.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            th.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), th.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let ty = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
      var tx = n(88878);
      let tb = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        tw = (t) => (e) => e.test(t),
        tP = [
          W.ai,
          $.px,
          $.KN,
          $.uj,
          $.vw,
          $.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        tS = (t) => tP.find(tw(t));
      class tT extends tg {
        constructor(t, e, n, i, r) {
          super(t, e, n, i, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: n } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let n = 0; n < t.length; n++) {
            let i = t[n];
            if ("string" == typeof i && ((i = i.trim()), (0, tx.p)(i))) {
              let r = (function t(e, n, i = 1) {
                (0, o.V1)(
                  i <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                );
                let [r, s] = (function (t) {
                  let e = tb.exec(t);
                  if (!e) return [,];
                  let [, n, i, r] = e;
                  return [`--${null != n ? n : i}`, r];
                })(e);
                if (!r) return;
                let a = window.getComputedStyle(n).getPropertyValue(r);
                if (a) {
                  let t = a.trim();
                  return ty(t) ? parseFloat(t) : t;
                }
                return (0, tx.p)(s) ? t(s, n, i + 1) : s;
              })(i, e.current);
              void 0 !== r && (t[n] = r),
                n === t.length - 1 && (this.finalKeyframe = i);
            }
          }
          if ((this.resolveNoneKeyframes(), !f.has(n) || 2 !== t.length))
            return;
          let [i, r] = t,
            s = tS(i),
            a = tS(r);
          if (s !== a) {
            if (tl(s) && tl(a))
              for (let e = 0; e < t.length; e++) {
                let n = t[e];
                "string" == typeof n && (t[e] = parseFloat(n));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            n = [];
          for (let e = 0; e < t.length; e++) {
            var i;
            ("number" == typeof (i = t[e])
              ? 0 === i
              : null === i || "none" === i || "0" === i || j(i)) && n.push(e);
          }
          n.length &&
            (function (t, e, n) {
              let i,
                r = 0;
              for (; r < t.length && !i; ) {
                let e = t[r];
                "string" == typeof e &&
                  !K.has(e) &&
                  (0, L.V)(e).values.length &&
                  (i = t[r]),
                  r++;
              }
              if (i && n) for (let r of e) t[r] = z(n, i);
            })(t, n, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: n } = this;
          if (!t || !t.current) return;
          "height" === n && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = td[n](
              t.measureViewportBox(),
              window.getComputedStyle(t.current),
            )),
            (e[0] = this.measuredOrigin);
          let i = e[e.length - 1];
          void 0 !== i && t.getValue(n, i).jump(i, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: n, unresolvedKeyframes: i } = this;
          if (!e || !e.current) return;
          let r = e.getValue(n);
          r && r.jump(this.measuredOrigin, !1);
          let o = i.length - 1,
            s = i[o];
          (i[o] = td[n](
            e.measureViewportBox(),
            window.getComputedStyle(e.current),
          )),
            null !== s &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = s),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, n]) => {
                e.getValue(t).set(n);
              }),
            this.resolveNoneKeyframes();
        }
      }
      let tE = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (L.f.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        tM = (t) => null !== t;
      function tA(t, { repeat: e, repeatType: n = "loop" }, i) {
        let r = t.filter(tM),
          o = e && "loop" !== n && e % 2 == 1 ? 0 : r.length - 1;
        return o && void 0 !== i ? i : r[o];
      }
      class tC {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: n = "keyframes",
          repeat: i = 0,
          repeatDelay: r = 0,
          repeatType: o = "loop",
          ...s
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = c.kB.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: n,
              repeat: i,
              repeatDelay: r,
              repeatType: o,
              ...s,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (tv(), tm()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = c.kB.now()), (this.hasAttemptedResolve = !0);
          let {
            name: n,
            type: i,
            velocity: r,
            delay: s,
            onComplete: a,
            onUpdate: l,
            isGenerator: u,
          } = this.options;
          if (
            !u &&
            !(function (t, e, n, i) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                a = tE(r, e),
                l = tE(s, e);
              return (
                (0, o.$e)(
                  a === l,
                  `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`,
                ),
                !!a &&
                  !!l &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let n = 0; n < t.length; n++)
                      if (t[n] !== e) return !0;
                  })(t) ||
                    (("spring" === n || (0, c.WH)(n)) && i))
              );
            })(t, n, i, r)
          ) {
            if (w.current || !s) {
              l && l(tA(t, this.options, e)),
                a && a(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let d = this.initPlayback(t, e);
          !1 !== d &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...d }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          this.options.allowFlatten &&
            ((this.options.type = "keyframes"), (this.options.ease = "linear"));
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      var tk = n(78172),
        tD = n(9784),
        tR = n(5317);
      function tV(t, e, n) {
        let i = Math.max(e - 5, 0);
        return (0, o.fj)(n - t(i), e - i);
      }
      let tj = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function tL(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let tF = ["duration", "bounce"],
        tB = ["stiffness", "damping", "mass"];
      function tN(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function tO(t = tj.visualDuration, e = tj.bounce) {
        let n;
        let i =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: r, restDelta: s } = i,
          a = i.keyframes[0],
          l = i.keyframes[i.keyframes.length - 1],
          u = { done: !1, value: a },
          {
            stiffness: d,
            damping: h,
            mass: f,
            duration: p,
            velocity: m,
            isResolvedFromDuration: v,
          } = (function (t) {
            let e = {
              velocity: tj.velocity,
              stiffness: tj.stiffness,
              damping: tj.damping,
              mass: tj.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!tN(t, tB) && tN(t, tF)) {
              if (t.visualDuration) {
                let n = (2 * Math.PI) / (1.2 * t.visualDuration),
                  i = n * n,
                  r =
                    2 * (0, tk.q)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
                e = { ...e, mass: tj.mass, stiffness: i, damping: r };
              } else {
                let n = (function ({
                  duration: t = tj.duration,
                  bounce: e = tj.bounce,
                  velocity: n = tj.velocity,
                  mass: i = tj.mass,
                }) {
                  let r, s;
                  (0, o.$e)(
                    t <= (0, o.fD)(tj.maxDuration),
                    "Spring duration must be 10 seconds or less",
                  );
                  let a = 1 - e;
                  (a = (0, tk.q)(tj.minDamping, tj.maxDamping, a)),
                    (t = (0, tk.q)(
                      tj.minDuration,
                      tj.maxDuration,
                      (0, o.Xu)(t),
                    )),
                    a < 1
                      ? ((r = (e) => {
                          let i = e * a,
                            r = i * t;
                          return 0.001 - ((i - n) / tL(e, a)) * Math.exp(-r);
                        }),
                        (s = (e) => {
                          let i = e * a * t,
                            o = Math.pow(a, 2) * Math.pow(e, 2) * t,
                            s = Math.exp(-i),
                            l = tL(Math.pow(e, 2), a);
                          return (
                            ((i * n + n - o) *
                              s *
                              (-r(e) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((r = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - n) * t + 1)),
                        (s = (e) => t * t * (n - e) * Math.exp(-e * t)));
                  let l = (function (t, e, n) {
                    let i = n;
                    for (let n = 1; n < 12; n++) i -= t(i) / e(i);
                    return i;
                  })(r, s, 5 / t);
                  if (((t = (0, o.fD)(t)), isNaN(l)))
                    return {
                      stiffness: tj.stiffness,
                      damping: tj.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(l, 2) * i;
                    return {
                      stiffness: e,
                      damping: 2 * a * Math.sqrt(i * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...n, mass: tj.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...i, velocity: -(0, o.Xu)(i.velocity || 0) }),
          g = m || 0,
          y = h / (2 * Math.sqrt(d * f)),
          x = l - a,
          b = (0, o.Xu)(Math.sqrt(d / f)),
          w = 5 > Math.abs(x);
        if (
          (r || (r = w ? tj.restSpeed.granular : tj.restSpeed.default),
          s || (s = w ? tj.restDelta.granular : tj.restDelta.default),
          y < 1)
        ) {
          let t = tL(b, y);
          n = (e) =>
            l -
            Math.exp(-y * b * e) *
              (((g + y * b * x) / t) * Math.sin(t * e) + x * Math.cos(t * e));
        } else if (1 === y)
          n = (t) => l - Math.exp(-b * t) * (x + (g + b * x) * t);
        else {
          let t = b * Math.sqrt(y * y - 1);
          n = (e) => {
            let n = Math.exp(-y * b * e),
              i = Math.min(t * e, 300);
            return (
              l -
              (n * ((g + y * b * x) * Math.sinh(i) + t * x * Math.cosh(i))) / t
            );
          };
        }
        let P = {
          calculatedDuration: (v && p) || null,
          next: (t) => {
            let e = n(t);
            if (v) u.done = t >= p;
            else {
              let i = 0;
              y < 1 && (i = 0 === t ? (0, o.fD)(g) : tV(n, t, e));
              let a = Math.abs(l - e) <= s;
              u.done = Math.abs(i) <= r && a;
            }
            return (u.value = u.done ? l : e), u;
          },
          toString: () => {
            let t = Math.min((0, c.tu)(P), c.YE),
              e = (0, c.KZ)((e) => P.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return P;
      }
      function tI({
        keyframes: t,
        velocity: e = 0,
        power: n = 0.8,
        timeConstant: i = 325,
        bounceDamping: r = 10,
        bounceStiffness: o = 500,
        modifyTarget: s,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let d, h;
        let f = t[0],
          p = { done: !1, value: f },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
                ? a
                : Math.abs(a - t) < Math.abs(l - t)
                  ? a
                  : l,
          g = n * e,
          y = f + g,
          x = void 0 === s ? y : s(y);
        x !== y && (g = x - f);
        let b = (t) => -g * Math.exp(-t / i),
          w = (t) => x + b(t),
          P = (t) => {
            let e = b(t),
              n = w(t);
            (p.done = Math.abs(e) <= u), (p.value = p.done ? x : n);
          },
          S = (t) => {
            m(p.value) &&
              ((d = t),
              (h = tO({
                keyframes: [p.value, v(p.value)],
                velocity: tV(w, t, p.value),
                damping: r,
                stiffness: o,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (h || void 0 !== d || ((e = !0), P(t), S(t)),
              void 0 !== d && t >= d)
                ? h.next(t - d)
                : (e || P(t), p);
            },
          }
        );
      }
      let tU = S(0.42, 0, 1, 1),
        tW = S(0, 0, 0.58, 1),
        t$ = S(0.42, 0, 0.58, 1),
        tG = (t) => Array.isArray(t) && "number" != typeof t[0],
        tq = {
          linear: o.lQ,
          easeIn: tU,
          easeInOut: t$,
          easeOut: tW,
          circIn: D,
          circInOut: V,
          circOut: R,
          backIn: A,
          backInOut: C,
          backOut: M,
          anticipate: k,
        },
        tX = (t) => {
          if ((0, c.DW)(t)) {
            (0, o.V1)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values.",
            );
            let [e, n, i, r] = t;
            return S(e, n, i, r);
          }
          return "string" == typeof t
            ? ((0, o.V1)(void 0 !== tq[t], `Invalid easing type '${t}'`), tq[t])
            : t;
        };
      var tY = n(83108),
        tH = n(93396);
      function t_({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: i = "easeInOut",
      }) {
        let r = tG(i) ? i.map(tX) : tX(i),
          o = { done: !1, value: e[0] },
          s = (n && n.length === e.length ? n : (0, tH.Z)(e)).map((e) => e * t),
          a = (0, tY.G)(s, e, {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || t$).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((o.value = a(e)), (o.done = e >= t), o),
        };
      }
      let tz = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => c.Gt.update(e, !0),
            stop: () => (0, c.WG)(e),
            now: () => (c.uv.isProcessing ? c.uv.timestamp : c.kB.now()),
          };
        },
        tK = { decay: tI, inertia: tI, tween: t_, keyframes: t_, spring: tO },
        tQ = (t) => t / 100;
      class tZ extends tC {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: n,
              element: i,
              keyframes: r,
            } = this.options,
            o = (null == i ? void 0 : i.KeyframeResolver) || tg;
          (this.resolver = new o(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            n,
            i,
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes),
              );
        }
        initPlayback(t) {
          let e, n;
          let {
              type: i = "keyframes",
              repeat: r = 0,
              repeatDelay: o = 0,
              repeatType: s,
              velocity: a = 0,
            } = this.options,
            l = (0, c.WH)(i) ? i : tK[i] || t_;
          l !== t_ &&
            "number" != typeof t[0] &&
            ((e = (0, tR.F)(tQ, (0, tD.j)(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === s &&
            (n = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (0, c.tu)(u));
          let { calculatedDuration: d } = u,
            h = d + o;
          return {
            generator: u,
            mirroredGenerator: n,
            mapPercentToKeyframes: e,
            calculatedDuration: d,
            resolvedDuration: h,
            totalDuration: h * (r + 1) - o,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          c.qU.mainThread++,
            this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: n } = this;
          if (!n) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: i,
            generator: r,
            mirroredGenerator: o,
            mapPercentToKeyframes: s,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: c,
          } = n;
          if (null === this.startTime) return r.next(0);
          let {
            delay: d,
            repeat: h,
            repeatType: f,
            repeatDelay: p,
            onUpdate: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
                ? (this.currentTime = this.holdTime)
                : (this.currentTime =
                    Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            x = r;
          if (h) {
            let t = Math.min(this.currentTime, u) / c,
              e = Math.floor(t),
              n = t % 1;
            !n && t >= 1 && (n = 1),
              1 === n && e--,
              (e = Math.min(e, h + 1)) % 2 &&
                ("reverse" === f
                  ? ((n = 1 - n), p && (n -= p / c))
                  : "mirror" === f && (x = o)),
              (y = (0, tk.q)(0, 1, n) * c);
          }
          let b = g ? { done: !1, value: a[0] } : x.next(y);
          s && (b.value = s(b.value));
          let { done: w } = b;
          g ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let P =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            P && void 0 !== i && (b.value = tA(a, this.options, i)),
            m && m(b.value),
            P && this.finish(),
            b
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, o.Xu)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, o.Xu)(this.currentTime);
        }
        set time(t) {
          (t = (0, o.fD)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, o.Xu)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = tz, onPlay: e, startTime: n } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : this.startTime
              ? "finished" === this.state && (this.startTime = i)
              : (this.startTime = null != n ? n : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel(),
            c.qU.mainThread--;
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let tJ = new Set(["opacity", "clipPath", "filter", "transform"]),
        t0 = (0, o.ph)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate"),
        ),
        t1 = { anticipate: k, backInOut: C, circInOut: V };
      class t3 extends tC {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: n,
            element: i,
            keyframes: r,
          } = this.options;
          (this.resolver = new tT(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            n,
            i,
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var n;
          let {
            duration: i = 300,
            times: r,
            ease: o,
            type: s,
            motionValue: a,
            name: l,
            startTime: u,
          } = this.options;
          if (!a.owner || !a.owner.current) return !1;
          if (
            ("string" == typeof o && (0, c.nL)() && o in t1 && (o = t1[o]),
            (n = this.options),
            (0, c.WH)(n.type) || "spring" === n.type || !(0, c.yL)(n.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: n,
                motionValue: a,
                element: l,
                ...u
              } = this.options,
              c = (function (t, e) {
                let n = new tZ({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  i = { done: !1, value: t[0] },
                  r = [],
                  o = 0;
                for (; !i.done && o < 2e4; )
                  r.push((i = n.sample(o)).value), (o += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: o - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = c.keyframes).length && (t[1] = t[0]),
              (i = c.duration),
              (r = c.times),
              (o = c.ease),
              (s = "keyframes");
          }
          let d = (function (
            t,
            e,
            n,
            {
              delay: i = 0,
              duration: r = 300,
              repeat: o = 0,
              repeatType: s = "loop",
              ease: a = "easeInOut",
              times: l,
            } = {},
          ) {
            let u = { [e]: n };
            l && (u.offset = l);
            let d = (0, c.TU)(a, r);
            Array.isArray(d) && (u.easing = d), c.Qu.value && c.qU.waapi++;
            let h = t.animate(u, {
              delay: i,
              duration: r,
              easing: Array.isArray(d) ? "linear" : d,
              fill: "both",
              iterations: o + 1,
              direction: "reverse" === s ? "alternate" : "normal",
            });
            return (
              c.Qu.value &&
                h.finished.finally(() => {
                  c.qU.waapi--;
                }),
              h
            );
          })(a.owner.current, l, t, {
            ...this.options,
            duration: i,
            times: r,
            ease: o,
          });
          return (
            (d.startTime = null != u ? u : this.calcStartTime()),
            this.pendingTimeline
              ? ((0, c.vG)(d, this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: n } = this.options;
                  a.set(tA(t, this.options, e)),
                    n && n(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: i,
              times: r,
              type: s,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, o.Xu)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, o.Xu)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: n } = e;
          n.currentTime = (0, o.fD)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: n } = e;
          n.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return o.lQ;
            let { animation: n } = e;
            (0, c.vG)(n, t);
          } else this.pendingTimeline = t;
          return o.lQ;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: n,
            duration: i,
            type: r,
            ease: s,
            times: a,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: l,
                element: u,
                ...c
              } = this.options,
              d = new tZ({
                ...c,
                keyframes: n,
                duration: i,
                type: r,
                ease: s,
                times: a,
                isGenerator: !0,
              }),
              h = (0, o.fD)(this.time);
            t.setWithVelocity(d.sample(h - 10).value, d.sample(h).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: n,
            repeatDelay: i,
            repeatType: r,
            damping: o,
            type: s,
          } = t;
          if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
            return !1;
          let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
          return (
            t0() &&
            n &&
            tJ.has(n) &&
            !a &&
            !l &&
            !i &&
            "mirror" !== r &&
            0 !== o &&
            "inertia" !== s
          );
        }
      }
      let t2 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        t9 = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        t4 = { type: "keyframes", duration: 0.8 },
        t5 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        t7 = (t, { keyframes: e }) =>
          e.length > 2
            ? t4
            : h.has(t)
              ? t.startsWith("scale")
                ? t9(e[1])
                : t2
              : t5,
        t6 =
          (t, e, n, i = {}, r, s) =>
          (a) => {
            let l = (0, c.rU)(i, t) || {},
              u = l.delay || i.delay || 0,
              { elapsed: d = 0 } = i;
            d -= (0, o.fD)(u);
            let h = {
              keyframes: Array.isArray(n) ? n : [null, n],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...l,
              delay: -d,
              onUpdate: (t) => {
                e.set(t), l.onUpdate && l.onUpdate(t);
              },
              onComplete: () => {
                a(), l.onComplete && l.onComplete();
              },
              name: t,
              motionValue: e,
              element: s ? void 0 : r,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: n,
              staggerChildren: i,
              staggerDirection: r,
              repeat: o,
              repeatType: s,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...c
            }) {
              return !!Object.keys(c).length;
            })(l) && (h = { ...h, ...t7(t, h) }),
              h.duration && (h.duration = (0, o.fD)(h.duration)),
              h.repeatDelay && (h.repeatDelay = (0, o.fD)(h.repeatDelay)),
              void 0 !== h.from && (h.keyframes[0] = h.from);
            let f = !1;
            if (
              ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
                ((h.duration = 0), 0 !== h.delay || (f = !0)),
              (w.current || o.W9.skipAnimations) &&
                ((f = !0), (h.duration = 0), (h.delay = 0)),
              (h.allowFlatten = !l.type && !l.ease),
              f && !s && void 0 !== e.get())
            ) {
              let t = tA(h.keyframes, l);
              if (void 0 !== t)
                return (
                  c.Gt.update(() => {
                    h.onUpdate(t), h.onComplete();
                  }),
                  new c.P6([])
                );
            }
            return !s && t3.supports(h) ? new t3(h) : new tZ(h);
          };
      function t8(t, e, { delay: n = 0, transitionOverride: i, type: r } = {}) {
        var o;
        let {
          transition: s = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e;
        i && (s = i);
        let d = [],
          h = r && t.animationState && t.animationState.getState()[r];
        for (let e in l) {
          let i = t.getValue(
              e,
              null !== (o = t.latestValues[e]) && void 0 !== o ? o : null,
            ),
            r = l[e];
          if (
            void 0 === r ||
            (h &&
              (function ({ protectedKeys: t, needsAnimating: e }, n) {
                let i = t.hasOwnProperty(n) && !0 !== e[n];
                return (e[n] = !1), i;
              })(h, e))
          )
            continue;
          let a = { delay: n, ...(0, c.rU)(s || {}, e) },
            u = !1;
          if (window.MotionHandoffAnimation) {
            let n = t.props[b];
            if (n) {
              let t = window.MotionHandoffAnimation(n, e, c.Gt);
              null !== t && ((a.startTime = t), (u = !0));
            }
          }
          y(t, e),
            i.start(
              t6(
                e,
                i,
                r,
                t.shouldReduceMotion && f.has(e) ? { type: !1 } : a,
                t,
                u,
              ),
            );
          let p = i.animation;
          p && d.push(p);
        }
        return (
          a &&
            Promise.all(d).then(() => {
              c.Gt.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: n = {},
                      transition: i = {},
                      ...r
                    } = u(t, e) || {};
                    for (let e in (r = { ...r, ...n })) {
                      let n = v(r[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(n)
                        : t.addValue(e, (0, c.OQ)(n));
                    }
                  })(t, a);
              });
            }),
          d
        );
      }
      function et(t, e, n = {}) {
        var i;
        let r = u(
            t,
            e,
            "exit" === n.type
              ? null === (i = t.presenceContext) || void 0 === i
                ? void 0
                : i.custom
              : void 0,
          ),
          { transition: o = t.getDefaultTransition() || {} } = r || {};
        n.transitionOverride && (o = n.transitionOverride);
        let s = r ? () => Promise.all(t8(t, r, n)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (i = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: s,
                    staggerDirection: a,
                  } = o;
                  return (function (t, e, n = 0, i = 0, r = 1, o) {
                    let s = [],
                      a = (t.variantChildren.size - 1) * i,
                      l = 1 === r ? (t = 0) => t * i : (t = 0) => a - t * i;
                    return (
                      Array.from(t.variantChildren)
                        .sort(ee)
                        .forEach((t, i) => {
                          t.notify("AnimationStart", e),
                            s.push(
                              et(t, e, { ...o, delay: n + l(i) }).then(() =>
                                t.notify("AnimationComplete", e),
                              ),
                            );
                        }),
                      Promise.all(s)
                    );
                  })(t, e, r + i, s, a, n);
                }
              : () => Promise.resolve(),
          { when: l } = o;
        if (!l) return Promise.all([s(), a(n.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [s, a] : [a, s];
          return t().then(() => e());
        }
      }
      function ee(t, e) {
        return t.sortNodePosition(e);
      }
      function en(t, e) {
        if (!Array.isArray(e)) return !1;
        let n = e.length;
        if (n !== t.length) return !1;
        for (let i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
        return !0;
      }
      function ei(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      let er = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        eo = ["initial", ...er],
        es = eo.length,
        ea = [...er].reverse(),
        el = er.length;
      function eu(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function ec() {
        return {
          animate: eu(!0),
          whileInView: eu(),
          whileHover: eu(),
          whileTap: eu(),
          whileDrag: eu(),
          whileFocus: eu(),
          exit: eu(),
        };
      }
      class ed {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class eh extends ed {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: n }) =>
                        (function (t, e, n = {}) {
                          let i;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            i = Promise.all(e.map((e) => et(t, e, n)));
                          else if ("string" == typeof e) i = et(t, e, n);
                          else {
                            let r =
                              "function" == typeof e ? u(t, e, n.custom) : e;
                            i = Promise.all(t8(t, r, n));
                          }
                          return i.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, n),
                      ),
                    ),
                  n = ec(),
                  i = !0,
                  r = (e) => (n, i) => {
                    var r;
                    let o = u(
                      t,
                      i,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0,
                    );
                    if (o) {
                      let { transition: t, transitionEnd: e, ...i } = o;
                      n = { ...n, ...i, ...e };
                    }
                    return n;
                  };
                function o(o) {
                  let { props: a } = t,
                    l =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let n = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (n.initial = e.props.initial),
                            n
                          );
                        }
                        let n = {};
                        for (let t = 0; t < es; t++) {
                          let i = eo[t],
                            r = e.props[i];
                          (ei(r) || !1 === r) && (n[i] = r);
                        }
                        return n;
                      })(t.parent) || {},
                    c = [],
                    d = new Set(),
                    h = {},
                    f = 1 / 0;
                  for (let e = 0; e < el; e++) {
                    var m, v;
                    let u = ea[e],
                      g = n[u],
                      y = void 0 !== a[u] ? a[u] : l[u],
                      x = ei(y),
                      b = u === o ? g.isActive : null;
                    !1 === b && (f = e);
                    let w = y === l[u] && y !== a[u] && x;
                    if (
                      (w && i && t.manuallyAnimateOnMount && (w = !1),
                      (g.protectedKeys = { ...h }),
                      (!g.isActive && null === b) ||
                        (!y && !g.prevProp) ||
                        s(y) ||
                        "boolean" == typeof y)
                    )
                      continue;
                    let P =
                        ((m = g.prevProp),
                        "string" == typeof (v = y)
                          ? v !== m
                          : !!Array.isArray(v) && !en(v, m)),
                      S =
                        P || (u === o && g.isActive && !w && x) || (e > f && x),
                      T = !1,
                      E = Array.isArray(y) ? y : [y],
                      M = E.reduce(r(u), {});
                    !1 === b && (M = {});
                    let { prevResolvedValues: A = {} } = g,
                      C = { ...A, ...M },
                      k = (e) => {
                        (S = !0),
                          d.has(e) && ((T = !0), d.delete(e)),
                          (g.needsAnimating[e] = !0);
                        let n = t.getValue(e);
                        n && (n.liveStyle = !1);
                      };
                    for (let t in C) {
                      let e = M[t],
                        n = A[t];
                      if (h.hasOwnProperty(t)) continue;
                      let i = !1;
                      (p(e) && p(n) ? en(e, n) : e === n)
                        ? void 0 !== e && d.has(t)
                          ? k(t)
                          : (g.protectedKeys[t] = !0)
                        : null != e
                          ? k(t)
                          : d.add(t);
                    }
                    (g.prevProp = y),
                      (g.prevResolvedValues = M),
                      g.isActive && (h = { ...h, ...M }),
                      i && t.blockInitialAnimation && (S = !1);
                    let D = !(w && P) || T;
                    S &&
                      D &&
                      c.push(
                        ...E.map((t) => ({
                          animation: t,
                          options: { type: u },
                        })),
                      );
                  }
                  if (d.size) {
                    let e = {};
                    if ("boolean" != typeof a.initial) {
                      let n = u(
                        t,
                        Array.isArray(a.initial) ? a.initial[0] : a.initial,
                      );
                      n && n.transition && (e.transition = n.transition);
                    }
                    d.forEach((n) => {
                      let i = t.getBaseTarget(n),
                        r = t.getValue(n);
                      r && (r.liveStyle = !0), (e[n] = null != i ? i : null);
                    }),
                      c.push({ animation: e });
                  }
                  let g = !!c.length;
                  return (
                    i &&
                      (!1 === a.initial || a.initial === a.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (g = !1),
                    (i = !1),
                    g ? e(c) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: o,
                  setActive: function (e, i) {
                    var r;
                    if (n[e].isActive === i) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var n;
                        return null === (n = t.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(e, i);
                      }),
                      (n[e].isActive = i);
                    let s = o(e);
                    for (let t in n) n[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (n) {
                    e = n(t);
                  },
                  getState: () => n,
                  reset: () => {
                    (n = ec()), (i = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          s(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let ef = 0;
      class ep extends ed {
        constructor() {
          super(...arguments), (this.id = ef++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === n) return;
          let i = this.node.animationState.setActive("exit", !t);
          e &&
            !t &&
            i.then(() => {
              e(this.id);
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          e && e(this.id), t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      function em(t, e, n, i = { passive: !0 }) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
      }
      function ev(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let eg = (t) => (e) => (0, c.Mc)(e) && t(e, ev(e));
      function ey(t, e, n, i) {
        return em(t, e, eg(n), i);
      }
      function ex({ top: t, left: e, right: n, bottom: i }) {
        return { x: { min: e, max: n }, y: { min: t, max: i } };
      }
      var eb = n(16843);
      function ew(t) {
        return t.max - t.min;
      }
      function eP(t, e, n, i = 0.5) {
        (t.origin = i),
          (t.originPoint = (0, eb.k)(e.min, e.max, t.origin)),
          (t.scale = ew(n) / ew(e)),
          (t.translate = (0, eb.k)(n.min, n.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function eS(t, e, n, i) {
        eP(t.x, e.x, n.x, i ? i.originX : void 0),
          eP(t.y, e.y, n.y, i ? i.originY : void 0);
      }
      function eT(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + ew(e));
      }
      function eE(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + ew(e));
      }
      function eM(t, e, n) {
        eE(t.x, e.x, n.x), eE(t.y, e.y, n.y);
      }
      let eA = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        eC = () => ({ x: eA(), y: eA() }),
        ek = () => ({ min: 0, max: 0 }),
        eD = () => ({ x: ek(), y: ek() });
      function eR(t) {
        return [t("x"), t("y")];
      }
      function eV(t) {
        return void 0 === t || 1 === t;
      }
      function ej({ scale: t, scaleX: e, scaleY: n }) {
        return !eV(t) || !eV(e) || !eV(n);
      }
      function eL(t) {
        return (
          ej(t) ||
          eF(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function eF(t) {
        var e, n;
        return ((e = t.x) && "0%" !== e) || ((n = t.y) && "0%" !== n);
      }
      function eB(t, e, n, i, r) {
        return void 0 !== r && (t = i + r * (t - i)), i + n * (t - i) + e;
      }
      function eN(t, e = 0, n = 1, i, r) {
        (t.min = eB(t.min, e, n, i, r)), (t.max = eB(t.max, e, n, i, r));
      }
      function eO(t, { x: e, y: n }) {
        eN(t.x, e.translate, e.scale, e.originPoint),
          eN(t.y, n.translate, n.scale, n.originPoint);
      }
      function eI(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function eU(t, e, n, i, r = 0.5) {
        let o = (0, eb.k)(t.min, t.max, r);
        eN(t, e, n, o, i);
      }
      function eW(t, e) {
        eU(t.x, e.x, e.scaleX, e.scale, e.originX),
          eU(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function e$(t, e) {
        return ex(
          (function (t, e) {
            if (!e) return t;
            let n = e({ x: t.left, y: t.top }),
              i = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: i.y, right: i.x };
          })(t.getBoundingClientRect(), e),
        );
      }
      let eG = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      function eq(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      let eX = (t, e) => Math.abs(t - e);
      class eY {
        constructor(
          t,
          e,
          {
            transformPagePoint: n,
            contextWindow: i,
            dragSnapToOrigin: r = !1,
          } = {},
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = ez(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n =
                  (function (t, e) {
                    return Math.sqrt(eX(t.x, e.x) ** 2 + eX(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !n) return;
              let { point: i } = t,
                { timestamp: r } = c.uv;
              this.history.push({ ...i, timestamp: r });
              let { onStart: o, onMove: s } = this.handlers;
              e ||
                (o && o(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                s && s(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = eH(e, this.transformPagePoint)),
                c.Gt.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: n,
                onSessionEnd: i,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let o = ez(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : eH(e, this.transformPagePoint),
                this.history,
              );
              this.startEvent && n && n(t, o), i && i(t, o);
            }),
            !(0, c.Mc)(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = n),
            (this.contextWindow = i || window);
          let o = eH(ev(t), this.transformPagePoint),
            { point: s } = o,
            { timestamp: a } = c.uv;
          this.history = [{ ...s, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, ez(o, this.history)),
            (this.removeListeners = (0, tR.F)(
              ey(this.contextWindow, "pointermove", this.handlePointerMove),
              ey(this.contextWindow, "pointerup", this.handlePointerUp),
              ey(this.contextWindow, "pointercancel", this.handlePointerUp),
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, c.WG)(this.updatePoint);
        }
      }
      function eH(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function e_(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function ez({ point: t }, e) {
        return {
          point: t,
          delta: e_(t, eK(e)),
          offset: e_(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let n = t.length - 1,
              i = null,
              r = eK(t);
            for (
              ;
              n >= 0 &&
              ((i = t[n]), !(r.timestamp - i.timestamp > (0, o.fD)(0.1)));

            )
              n--;
            if (!i) return { x: 0, y: 0 };
            let s = (0, o.Xu)(r.timestamp - i.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let a = { x: (r.x - i.x) / s, y: (r.y - i.y) / s };
            return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
          })(e, 0.1),
        };
      }
      function eK(t) {
        return t[t.length - 1];
      }
      function eQ(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function eZ(t, e) {
        let n = e.min - t.min,
          i = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i }
        );
      }
      function eJ(t, e, n) {
        return { min: e0(t, e), max: e0(t, n) };
      }
      function e0(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let e1 = new WeakMap();
      class e3 {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = eD()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: i } = this.getProps();
          this.panSession = new eY(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: n } = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(ev(t).point);
              },
              onStart: (t, e) => {
                let {
                  drag: n,
                  dragPropagation: i,
                  onDragStart: r,
                } = this.getProps();
                if (
                  n &&
                  !i &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock = (0, c.Wp)(n)),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  eR((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if ($.KN.test(e)) {
                      let { projection: n } = this.visualElement;
                      if (n && n.layout) {
                        let i = n.layout.layoutBox[t];
                        i && (e = ew(i) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && c.Gt.postRender(() => r(t, e)),
                  y(this.visualElement, "transform");
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: n,
                  dragDirectionLock: i,
                  onDirectionLock: r,
                  onDrag: o,
                } = this.getProps();
                if (!n && !this.openDragLock) return;
                let { offset: s } = e;
                if (i && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let n = null;
                    return (
                      Math.abs(t.y) > e
                        ? (n = "y")
                        : Math.abs(t.x) > e && (n = "x"),
                      n
                    );
                  })(s)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, s),
                  this.updateAxis("y", e.point, s),
                  this.visualElement.render(),
                  o && o(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                eR((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: i,
              contextWindow: eG(this.visualElement),
            },
          );
        }
        stop(t, e) {
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: i } = e;
          this.startAnimation(i);
          let { onDragEnd: r } = this.getProps();
          r && c.Gt.postRender(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: n } = this.getProps();
          !n &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, n) {
          let { drag: i } = this.getProps();
          if (!n || !e2(t, i, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            o = this.originPoint[t] + n[t];
          this.constraints &&
            this.constraints[t] &&
            (o = (function (t, { min: e, max: n }, i) {
              return (
                void 0 !== e && t < e
                  ? (t = i ? (0, eb.k)(e, t, i.min) : Math.max(t, e))
                  : void 0 !== n &&
                    t > n &&
                    (t = i ? (0, eb.k)(n, t, i.max) : Math.min(t, n)),
                t
              );
            })(o, this.constraints[t], this.elastic[t])),
            r.set(o);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: n } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                  ? void 0
                  : t.layout,
            r = this.constraints;
          e && eq(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && i
              ? (this.constraints = (function (
                  t,
                  { top: e, left: n, bottom: i, right: r },
                ) {
                  return { x: eQ(t.x, n, r), y: eQ(t.y, e, i) };
                })(i.layoutBox, e))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: eJ(t, "left", "right"), y: eJ(t, "top", "bottom") }
              );
            })(n)),
            r !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              eR((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let n = {};
                    return (
                      void 0 !== e.min && (n.min = e.min - t.min),
                      void 0 !== e.max && (n.max = e.max - t.min),
                      n
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: n } =
            this.getProps();
          if (!e || !eq(e)) return !1;
          let i = e.current;
          (0, o.V1)(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, n) {
              let i = e$(t, n),
                { scroll: r } = e;
              return r && (eI(i.x, r.offset.x), eI(i.y, r.offset.y)), i;
            })(i, r.root, this.visualElement.getTransformPagePoint()),
            a = { x: eZ((t = r.layout.layoutBox).x, s.x), y: eZ(t.y, s.y) };
          if (n) {
            let t = n(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(a),
            );
            (this.hasMutatedConstraints = !!t), t && (a = ex(t));
          }
          return a;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: n,
              dragElastic: i,
              dragTransition: r,
              dragSnapToOrigin: o,
              onDragTransitionEnd: s,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            eR((s) => {
              if (!e2(s, e, this.currentDirection)) return;
              let l = (a && a[s]) || {};
              o && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: n ? t[s] : 0,
                bounceStiffness: i ? 200 : 1e6,
                bounceDamping: i ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(s, u);
            }),
          ).then(s);
        }
        startAxisValueAnimation(t, e) {
          let n = this.getAxisMotionValue(t);
          return (
            y(this.visualElement, t),
            n.start(t6(t, n, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          eR((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          eR((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            n = this.visualElement.getProps();
          return (
            n[e] ||
            this.visualElement.getValue(
              t,
              (n.initial ? n.initial[t] : void 0) || 0,
            )
          );
        }
        snapToCursor(t) {
          eR((e) => {
            let { drag: n } = this.getProps();
            if (!e2(e, n, this.currentDirection)) return;
            let { projection: i } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (i && i.layout) {
              let { min: n, max: o } = i.layout.layoutBox[e];
              r.set(t[e] - (0, eb.k)(n, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!eq(e) || !n || !this.constraints) return;
          this.stopAnimation();
          let i = { x: 0, y: 0 };
          eR((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let n = e.get();
              i[t] = (function (t, e) {
                let n = 0.5,
                  i = ew(t),
                  r = ew(e);
                return (
                  r > i
                    ? (n = (0, o.qB)(e.min, e.max - i, t.min))
                    : i > r && (n = (0, o.qB)(t.min, t.max - r, e.min)),
                  (0, tk.q)(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            eR((e) => {
              if (!e2(e, t, null)) return;
              let n = this.getAxisMotionValue(e),
                { min: r, max: o } = this.constraints[e];
              n.set((0, eb.k)(r, o, i[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          e1.set(this.visualElement, this);
          let t = ey(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: n = !0 } = this.getProps();
              e && n && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              eq(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            i = n.addEventListener("measure", e);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            c.Gt.read(e);
          let r = em(window, "resize", () =>
              this.scalePositionWithinConstraints(),
            ),
            o = n.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (eR((e) => {
                    let n = this.getAxisMotionValue(e);
                    n &&
                      ((this.originPoint[e] += t[e].translate),
                      n.set(n.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              },
            );
          return () => {
            r(), t(), i(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: i = !1,
              dragConstraints: r = !1,
              dragElastic: o = 0.35,
              dragMomentum: s = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: r,
            dragElastic: o,
            dragMomentum: s,
          };
        }
      }
      function e2(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      class e9 extends ed {
        constructor(t) {
          super(t),
            (this.removeGroupControls = o.lQ),
            (this.removeListeners = o.lQ),
            (this.controls = new e3(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || o.lQ);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let e4 = (t) => (e, n) => {
        t && c.Gt.postRender(() => t(e, n));
      };
      class e5 extends ed {
        constructor() {
          super(...arguments), (this.removePointerDownListener = o.lQ);
        }
        onPointerDown(t) {
          this.session = new eY(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: eG(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: n,
            onPanEnd: i,
          } = this.node.getProps();
          return {
            onSessionStart: e4(t),
            onStart: e4(e),
            onMove: n,
            onEnd: (t, e) => {
              delete this.session, i && c.Gt.postRender(() => i(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = ey(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t),
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var e7 = n(94799),
        e6 = n(34023),
        e8 = n(59660),
        nt = n(92655);
      let ne = (0, e6.createContext)({}),
        nn = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ni(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let nr = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!$.px.test(t)) return t;
              t = parseFloat(t);
            }
            let n = ni(t, e.target.x),
              i = ni(t, e.target.y);
            return `${n}% ${i}%`;
          },
        },
        no = {};
      class ns extends e6.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
              layoutId: i,
            } = this.props,
            { projection: r } = t;
          !(function (t) {
            for (let e in t)
              (no[e] = t[e]), (0, tx.j)(e) && (no[e].isCSSVariable = !0);
          })(nl),
            r &&
              (e.group && e.group.add(r),
              n && n.register && i && n.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (nn.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: n,
              drag: i,
              isPresent: r,
            } = this.props,
            o = n.projection;
          return (
            o &&
              ((o.isPresent = r),
              i || t.layoutDependency !== e || void 0 === e || t.isPresent !== r
                ? o.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? o.promote()
                  : o.relegate() ||
                    c.Gt.postRender(() => {
                      let t = o.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            c.k2.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
            } = this.props,
            { projection: i } = t;
          i &&
            (i.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(i),
            n && n.deregister && n.deregister(i));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function na(t) {
        let [e, n] = (0, e8.xQ)(),
          i = (0, e6.useContext)(nt.L);
        return (0, e7.jsx)(ns, {
          ...t,
          layoutGroup: i,
          switchLayoutGroup: (0, e6.useContext)(ne),
          isPresent: e,
          safeToRemove: n,
        });
      }
      let nl = {
          borderRadius: {
            ...nr,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: nr,
          borderTopRightRadius: nr,
          borderBottomLeftRadius: nr,
          borderBottomRightRadius: nr,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: n }) => {
              let i = L.f.parse(t);
              if (i.length > 5) return t;
              let r = L.f.createTransformer(t),
                o = +("number" != typeof i[0]),
                s = n.x.scale * e.x,
                a = n.y.scale * e.y;
              (i[0 + o] /= s), (i[1 + o] /= a);
              let l = (0, eb.k)(s, a, 0.5);
              return (
                "number" == typeof i[2 + o] && (i[2 + o] /= l),
                "number" == typeof i[3 + o] && (i[3 + o] /= l),
                r(i)
              );
            },
          },
        },
        nu = (t, e) => t.depth - e.depth;
      class nc {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, o.Kq)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, o.Ai)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nu),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      function nd(t) {
        let e = g(t) ? t.get() : t;
        return m(e) ? e.toValue() : e;
      }
      let nh = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nf = nh.length,
        np = (t) => ("string" == typeof t ? parseFloat(t) : t),
        nm = (t) => "number" == typeof t || $.px.test(t);
      function nv(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let ng = nx(0, 0.5, R),
        ny = nx(0.5, 0.95, o.lQ);
      function nx(t, e, n) {
        return (i) => (i < t ? 0 : i > e ? 1 : n((0, o.qB)(t, e, i)));
      }
      function nb(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nw(t, e) {
        nb(t.x, e.x), nb(t.y, e.y);
      }
      function nP(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function nS(t, e, n, i, r) {
        return (
          (t -= e),
          (t = i + (1 / n) * (t - i)),
          void 0 !== r && (t = i + (1 / r) * (t - i)),
          t
        );
      }
      function nT(t, e, [n, i, r], o, s) {
        !(function (t, e = 0, n = 1, i = 0.5, r, o = t, s = t) {
          if (
            ($.KN.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, eb.k)(s.min, s.max, e / 100) - s.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, eb.k)(o.min, o.max, i);
          t === o && (a -= e),
            (t.min = nS(t.min, e, n, a, r)),
            (t.max = nS(t.max, e, n, a, r));
        })(t, e[n], e[i], e[r], e.scale, o, s);
      }
      let nE = ["x", "scaleX", "originX"],
        nM = ["y", "scaleY", "originY"];
      function nA(t, e, n, i) {
        nT(t.x, e, nE, n ? n.x : void 0, i ? i.x : void 0),
          nT(t.y, e, nM, n ? n.y : void 0, i ? i.y : void 0);
      }
      function nC(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nk(t) {
        return nC(t.x) && nC(t.y);
      }
      function nD(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function nR(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function nV(t, e) {
        return nR(t.x, e.x) && nR(t.y, e.y);
      }
      function nj(t) {
        return ew(t.x) / ew(t.y);
      }
      function nL(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class nF {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, o.Kq)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, o.Ai)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let n = this.members.findIndex((e) => t === e);
          if (0 === n) return !1;
          for (let t = n; t >= 0; t--) {
            let n = this.members[t];
            if (!1 !== n.isPresent) {
              e = n;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let n = this.lead;
          if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
            n.instance && n.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = n),
              e && (t.resumeFrom.preserveOpacity = !0),
              n.snapshot &&
                ((t.snapshot = n.snapshot),
                (t.snapshot.latestValues =
                  n.animationValues || n.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: i } = t.options;
            !1 === i && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: n } = t;
            e.onExitComplete && e.onExitComplete(),
              n && n.options.onExitComplete && n.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let nB = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        nN = ["", "X", "Y", "Z"],
        nO = { visibility: "hidden" },
        nI = 0;
      function nU(t, e, n, i) {
        let { latestValues: r } = e;
        r[t] && ((n[t] = r[t]), e.setStaticValue(t, 0), i && (i[t] = 0));
      }
      function nW({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, n = null == e ? void 0 : e()) {
            (this.id = nI++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  c.Qu.value &&
                    (nB.nodes =
                      nB.calculatedTargetDeltas =
                      nB.calculatedProjections =
                        0),
                  this.nodes.forEach(nq),
                  this.nodes.forEach(nQ),
                  this.nodes.forEach(nZ),
                  this.nodes.forEach(nX),
                  c.Qu.addProjectionMetrics && c.Qu.addProjectionMetrics(nB);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nc());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new o.vY()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let n = this.eventHandlers.get(t);
            n && n.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: i, layout: r, visualElement: o } = this.options;
            if (
              (o && !o.current && o.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              n && (r || i) && (this.isLayoutDirty = !0),
              t)
            ) {
              let n;
              let i = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = (function (t, e) {
                    let n = c.kB.now(),
                      i = ({ timestamp: r }) => {
                        let o = r - n;
                        o >= 250 && ((0, c.WG)(i), t(o - e));
                      };
                    return c.Gt.read(i, !0), () => (0, c.WG)(i);
                  })(i, 250)),
                  nn.hasAnimatedSinceResize &&
                    ((nn.hasAnimatedSinceResize = !1), this.nodes.forEach(nK));
              });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                o &&
                (i || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: n,
                    layout: i,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        o.getDefaultTransition() ||
                        n9,
                      {
                        onLayoutAnimationStart: s,
                        onLayoutAnimationComplete: a,
                      } = o.getProps(),
                      l = !this.targetLayout || !nV(this.targetLayout, i),
                      u = !e && n;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, c.rU)(r, "layout"),
                        onPlay: s,
                        onComplete: a,
                      };
                      (o.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || nK(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = i;
                  },
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, c.WG)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(nJ),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: n } = e.options;
                  if (!n) return;
                  let i = n.props[b];
                  if (window.MotionHasOptimisedAnimation(i, "transform")) {
                    let { layout: t, layoutId: n } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      i,
                      "transform",
                      c.Gt,
                      !(t || n),
                    );
                  }
                  let { parent: r } = e;
                  r && !r.hasCheckedOptimisedAppear && t(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: n } = this.options;
            if (void 0 === e && !n) return;
            let i = this.getTransformTemplate();
            (this.prevTransformTemplateValue = i
              ? i(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nH);
              return;
            }
            this.isUpdating || this.nodes.forEach(n_),
              (this.isUpdating = !1),
              this.nodes.forEach(nz),
              this.nodes.forEach(n$),
              this.nodes.forEach(nG),
              this.clearAllSnapshots();
            let t = c.kB.now();
            (c.uv.delta = (0, tk.q)(0, 1e3 / 60, t - c.uv.timestamp)),
              (c.uv.timestamp = t),
              (c.uv.isProcessing = !0),
              c.PP.update.process(c.uv),
              c.PP.preRender.process(c.uv),
              c.PP.render.process(c.uv),
              (c.uv.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), c.k2.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nY), this.sharedNodes.forEach(n0);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              c.Gt.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            c.Gt.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            this.snapshot ||
              !this.instance ||
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                ew(this.snapshot.measuredBox.x) ||
                ew(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = eD()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0,
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = i(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: n(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !nk(this.projectionDelta),
              n = this.getTransformTemplate(),
              i = n ? n(this.latestValues, "") : void 0,
              o = i !== this.prevTransformTemplateValue;
            t &&
              (e || eL(this.latestValues) || o) &&
              (r(this.instance, i),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let n = this.measurePageBox(),
              i = this.removeElementScroll(n);
            return (
              t && (i = this.removeTransform(i)),
              n7((e = i).x),
              n7(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: n,
                layoutBox: i,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return eD();
            let n = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(n8)
              )
            ) {
              let { scroll: t } = this.root;
              t && (eI(n.x, t.offset.x), eI(n.y, t.offset.y));
            }
            return n;
          }
          removeElementScroll(t) {
            var e;
            let n = eD();
            if (
              (nw(n, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return n;
            for (let e = 0; e < this.path.length; e++) {
              let i = this.path[e],
                { scroll: r, options: o } = i;
              i !== this.root &&
                r &&
                o.layoutScroll &&
                (r.wasRoot && nw(n, t),
                eI(n.x, r.offset.x),
                eI(n.y, r.offset.y));
            }
            return n;
          }
          applyTransform(t, e = !1) {
            let n = eD();
            nw(n, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              !e &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                eW(n, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                eL(i.latestValues) && eW(n, i.latestValues);
            }
            return eL(this.latestValues) && eW(n, this.latestValues), n;
          }
          removeTransform(t) {
            let e = eD();
            nw(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              if (!n.instance || !eL(n.latestValues)) continue;
              ej(n.latestValues) && n.updateSnapshot();
              let i = eD();
              nw(i, n.measurePageBox()),
                nA(
                  e,
                  n.latestValues,
                  n.snapshot ? n.snapshot.layoutBox : void 0,
                  i,
                );
            }
            return eL(this.latestValues) && nA(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== c.uv.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, n, i, r;
            let o = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = o.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = o.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
            let s = !!this.resumingFrom || this !== o;
            if (
              !(
                t ||
                (s && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = c.uv.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = eD()),
                    (this.relativeTargetOrigin = eD()),
                    eM(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox,
                    ),
                    nw(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = eD()), (this.targetWithTransforms = eD())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (n = this.target),
                      (i = this.relativeTarget),
                      (r = this.relativeParent.target),
                      eT(n.x, i.x, r.x),
                      eT(n.y, i.y, r.y))
                    : this.targetDelta
                      ? (this.resumingFrom
                          ? (this.target = this.applyTransform(
                              this.layout.layoutBox,
                            ))
                          : nw(this.target, this.layout.layoutBox),
                        eO(this.target, this.targetDelta))
                      : nw(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = eD()),
                      (this.relativeTargetOrigin = eD()),
                      eM(this.relativeTargetOrigin, this.target, t.target),
                      nw(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                c.Qu.value && nB.calculatedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              ej(this.parent.latestValues) ||
              eF(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              n = !!this.resumingFrom || this !== e,
              i = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (i = !1),
              n &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === c.uv.timestamp && (i = !1),
              i)
            )
              return;
            let { layout: r, layoutId: o } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || o))
            )
              return;
            nw(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, n, i = !1) {
              let r, o;
              let s = n.length;
              if (s) {
                e.x = e.y = 1;
                for (let a = 0; a < s; a++) {
                  o = (r = n[a]).projectionDelta;
                  let { visualElement: s } = r.options;
                  (!s ||
                    !s.props.style ||
                    "contents" !== s.props.style.display) &&
                    (i &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      eW(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    o && ((e.x *= o.x.scale), (e.y *= o.y.scale), eO(t, o)),
                    i && eL(r.latestValues) && eW(t, r.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, n),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = eD()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (nP(this.prevProjectionDelta.x, this.projectionDelta.x),
                nP(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              eS(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues,
              ),
              (this.treeScale.x === s &&
                this.treeScale.y === a &&
                nL(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                nL(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              c.Qu.value && nB.calculatedProjections++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = eC()),
              (this.projectionDelta = eC()),
              (this.projectionDeltaWithTransform = eC());
          }
          setAnimationOrigin(t, e = !1) {
            let n;
            let i = this.snapshot,
              r = i ? i.latestValues : {},
              o = { ...this.latestValues },
              s = eC();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = eD(),
              l =
                (i ? i.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              d = !!(
                l &&
                !c &&
                !0 === this.options.crossfade &&
                !this.path.some(n2)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let i = e / 1e3;
                if (
                  (n1(s.x, t.x, i),
                  n1(s.y, t.y, i),
                  this.setTargetDelta(s),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, h, f, p, m, v;
                  if (
                    (eM(
                      a,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox,
                    ),
                    (f = this.relativeTarget),
                    (p = this.relativeTargetOrigin),
                    (m = a),
                    (v = i),
                    n3(f.x, p.x, m.x, v),
                    n3(f.y, p.y, m.y, v),
                    n &&
                      ((u = this.relativeTarget),
                      (h = n),
                      nD(u.x, h.x) && nD(u.y, h.y)))
                  )
                    this.isProjectionDirty = !1;
                  n || (n = eD()), nw(n, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = o),
                  (function (t, e, n, i, r, o) {
                    r
                      ? ((t.opacity = (0, eb.k)(
                          0,
                          void 0 !== n.opacity ? n.opacity : 1,
                          ng(i),
                        )),
                        (t.opacityExit = (0, eb.k)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          ny(i),
                        )))
                      : o &&
                        (t.opacity = (0, eb.k)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== n.opacity ? n.opacity : 1,
                          i,
                        ));
                    for (let r = 0; r < nf; r++) {
                      let o = `border${nh[r]}Radius`,
                        s = nv(e, o),
                        a = nv(n, o);
                      (void 0 !== s || void 0 !== a) &&
                        (s || (s = 0),
                        a || (a = 0),
                        0 === s || 0 === a || nm(s) === nm(a)
                          ? ((t[o] = Math.max((0, eb.k)(np(s), np(a), i), 0)),
                            ($.KN.test(a) || $.KN.test(s)) && (t[o] += "%"))
                          : (t[o] = a));
                    }
                    (e.rotate || n.rotate) &&
                      (t.rotate = (0, eb.k)(e.rotate || 0, n.rotate || 0, i));
                  })(o, r, this.latestValues, i, d, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = i);
              }),
              this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, c.WG)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = c.Gt.update(() => {
                (nn.hasAnimatedSinceResize = !0),
                  c.qU.layout++,
                  (this.currentAnimation = (function (t, e, n) {
                    let i = g(0) ? 0 : (0, c.OQ)(t);
                    return i.start(t6("", i, 1e3, n)), i.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onStop: () => {
                      c.qU.layout--;
                    },
                    onComplete: () => {
                      c.qU.layout--,
                        t.onComplete && t.onComplete(),
                        this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: n,
                layout: i,
                latestValues: r,
              } = t;
            if (e && n && i) {
              if (
                this !== t &&
                this.layout &&
                i &&
                n6(
                  this.options.animationType,
                  this.layout.layoutBox,
                  i.layoutBox,
                )
              ) {
                n = this.target || eD();
                let e = ew(this.layout.layoutBox.x);
                (n.x.min = t.target.x.min), (n.x.max = n.x.min + e);
                let i = ew(this.layout.layoutBox.y);
                (n.y.min = t.target.y.min), (n.y.max = n.y.min + i);
              }
              nw(e, n),
                eW(e, r),
                eS(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r,
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nF()),
              this.sharedNodes.get(t).add(e);
            let n = e.options.initialPromotionConfig;
            e.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: n,
          } = {}) {
            let i = this.getStack();
            i && i.promote(this, n),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: n } = t;
            if (
              ((n.z ||
                n.rotate ||
                n.rotateX ||
                n.rotateY ||
                n.rotateZ ||
                n.skewX ||
                n.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let i = {};
            n.z && nU("z", t, i, this.animationValues);
            for (let e = 0; e < nN.length; e++)
              nU(`rotate${nN[e]}`, t, i, this.animationValues),
                nU(`skew${nN[e]}`, t, i, this.animationValues);
            for (let e in (t.render(), i))
              t.setStaticValue(e, i[e]),
                this.animationValues && (this.animationValues[e] = i[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, n;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return nO;
            let i = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (i.opacity = ""),
                (i.pointerEvents =
                  nd(null == t ? void 0 : t.pointerEvents) || ""),
                (i.transform = r ? r(this.latestValues, "") : "none"),
                i
              );
            let o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    nd(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !eL(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let s = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(),
              (i.transform = (function (t, e, n) {
                let i = "",
                  r = t.x.translate / e.x,
                  o = t.y.translate / e.y,
                  s = (null == n ? void 0 : n.z) || 0;
                if (
                  ((r || o || s) &&
                    (i = `translate3d(${r}px, ${o}px, ${s}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (i += `scale(${1 / e.x}, ${1 / e.y}) `),
                  n)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: r,
                    rotateY: o,
                    skewX: s,
                    skewY: a,
                  } = n;
                  t && (i = `perspective(${t}px) ${i}`),
                    e && (i += `rotate(${e}deg) `),
                    r && (i += `rotateX(${r}deg) `),
                    o && (i += `rotateY(${o}deg) `),
                    s && (i += `skewX(${s}deg) `),
                    a && (i += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (i += `scale(${a}, ${l})`),
                  i || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, s)),
              r && (i.transform = r(s, i.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((i.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
            o.animationValues
              ? (i.opacity =
                  o === this
                    ? null !==
                        (n =
                          null !== (e = s.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : s.opacityExit)
              : (i.opacity =
                  o === this
                    ? void 0 !== s.opacity
                      ? s.opacity
                      : ""
                    : void 0 !== s.opacityExit
                      ? s.opacityExit
                      : 0),
            no)) {
              if (void 0 === s[t]) continue;
              let { correct: e, applyTo: n, isCSSVariable: r } = no[t],
                a = "none" === i.transform ? s[t] : e(s[t], o);
              if (n) {
                let t = n.length;
                for (let e = 0; e < t; e++) i[n[e]] = a;
              } else
                r
                  ? (this.options.visualElement.renderState.vars[t] = a)
                  : (i[t] = a);
            }
            return (
              this.options.layoutId &&
                (i.pointerEvents =
                  o === this
                    ? nd(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              i
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(nH),
              this.root.sharedNodes.clear();
          }
        };
      }
      function n$(t) {
        t.updateLayout();
      }
      function nG(t) {
        var e;
        let n =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: i } = t.layout,
            { animationType: r } = t.options,
            o = n.source !== t.layout.source;
          "size" === r
            ? eR((t) => {
                let i = o ? n.measuredBox[t] : n.layoutBox[t],
                  r = ew(i);
                (i.min = e[t].min), (i.max = i.min + r);
              })
            : n6(r, n.layoutBox, e) &&
              eR((i) => {
                let r = o ? n.measuredBox[i] : n.layoutBox[i],
                  s = ew(e[i]);
                (r.max = r.min + s),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[i].max = t.relativeTarget[i].min + s));
              });
          let s = eC();
          eS(s, e, n.layoutBox);
          let a = eC();
          o
            ? eS(a, t.applyTransform(i, !0), n.measuredBox)
            : eS(a, e, n.layoutBox);
          let l = !nk(s),
            u = !1;
          if (!t.resumeFrom) {
            let i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              let { snapshot: r, layout: o } = i;
              if (r && o) {
                let s = eD();
                eM(s, n.layoutBox, r.layoutBox);
                let a = eD();
                eM(a, e, o.layoutBox),
                  nV(s, a) || (u = !0),
                  i.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = s),
                    (t.relativeParent = i));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: n,
            delta: a,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function nq(t) {
        c.Qu.value && nB.nodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nX(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nY(t) {
        t.clearSnapshot();
      }
      function nH(t) {
        t.clearMeasurements();
      }
      function n_(t) {
        t.isLayoutDirty = !1;
      }
      function nz(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function nK(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function nQ(t) {
        t.resolveTargetDelta();
      }
      function nZ(t) {
        t.calcProjection();
      }
      function nJ(t) {
        t.resetSkewAndRotation();
      }
      function n0(t) {
        t.removeLeadSnapshot();
      }
      function n1(t, e, n) {
        (t.translate = (0, eb.k)(e.translate, 0, n)),
          (t.scale = (0, eb.k)(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function n3(t, e, n, i) {
        (t.min = (0, eb.k)(e.min, n.min, i)),
          (t.max = (0, eb.k)(e.max, n.max, i));
      }
      function n2(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let n9 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        n4 = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        n5 = n4("applewebkit/") && !n4("chrome/") ? Math.round : o.lQ;
      function n7(t) {
        (t.min = n5(t.min)), (t.max = n5(t.max));
      }
      function n6(t, e, n) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(nj(e) - nj(n))))
        );
      }
      function n8(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let it = nW({
          attachResizeListener: (t, e) => em(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ie = { current: void 0 },
        ii = nW({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!ie.current) {
              let t = new it({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ie.current = t);
            }
            return ie.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function ir(t, e, n) {
        let { props: i } = t;
        t.animationState &&
          i.whileHover &&
          t.animationState.setActive("whileHover", "Start" === n);
        let r = i["onHover" + n];
        r && c.Gt.postRender(() => r(e, ev(e)));
      }
      class io extends ed {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, c.PT)(
              t,
              (t, e) => (
                ir(this.node, e, "Start"), (t) => ir(this.node, t, "End")
              ),
            ));
        }
        unmount() {}
      }
      class is extends ed {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, tR.F)(
            em(this.node.current, "focus", () => this.onFocus()),
            em(this.node.current, "blur", () => this.onBlur()),
          );
        }
        unmount() {}
      }
      function ia(t, e, n) {
        let { props: i } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          i.whileTap &&
          t.animationState.setActive("whileTap", "Start" === n);
        let r = i["onTap" + ("End" === n ? "" : n)];
        r && c.Gt.postRender(() => r(e, ev(e)));
      }
      class il extends ed {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, c.c$)(
              t,
              (t, e) => (
                ia(this.node, e, "Start"),
                (t, { success: e }) => ia(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget },
            ));
        }
        unmount() {}
      }
      let iu = new WeakMap(),
        ic = new WeakMap(),
        id = (t) => {
          let e = iu.get(t.target);
          e && e(t);
        },
        ih = (t) => {
          t.forEach(id);
        },
        ip = { some: 0, all: 1 };
      class im extends ed {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: n, amount: i = "some", once: r } = t,
            o = {
              root: e ? e.current : void 0,
              rootMargin: n,
              threshold: "number" == typeof i ? i : ip[i],
            };
          return (function (t, e, n) {
            let i = (function ({ root: t, ...e }) {
              let n = t || document;
              ic.has(n) || ic.set(n, {});
              let i = ic.get(n),
                r = JSON.stringify(e);
              return (
                i[r] ||
                  (i[r] = new IntersectionObserver(ih, { root: t, ...e })),
                i[r]
              );
            })(e);
            return (
              iu.set(t, n),
              i.observe(t),
              () => {
                iu.delete(t), i.unobserve(t);
              }
            );
          })(this.node.current, o, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: n, onViewportLeave: i } =
                this.node.getProps(),
              o = e ? n : i;
            o && o(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (n) => t[n] !== e[n];
            })(t, e),
          ) && this.startObserver();
        }
        unmount() {}
      }
      let iv = (0, e6.createContext)({ strict: !1 });
      var ig = n(91538);
      let iy = (0, e6.createContext)({});
      function ix(t) {
        return s(t.animate) || eo.some((e) => ei(t[e]));
      }
      function ib(t) {
        return !!(ix(t) || t.variants);
      }
      function iw(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var iP = n(29342);
      let iS = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        iT = {};
      for (let t in iS) iT[t] = { isEnabled: (e) => iS[t].some((t) => !!e[t]) };
      let iE = Symbol.for("motionComponentSymbol");
      var iM = n(18347),
        iA = n(20924);
      function iC(t, { layout: e, layoutId: n }) {
        return (
          h.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== n) && (!!no[t] || "opacity" === t))
        );
      }
      let ik = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        iD = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        iR = d.length;
      function iV(t, e, n) {
        let { style: i, vars: r, transformOrigin: o } = t,
          s = !1,
          a = !1;
        for (let t in e) {
          let n = e[t];
          if (h.has(t)) {
            s = !0;
            continue;
          }
          if ((0, tx.j)(t)) {
            r[t] = n;
            continue;
          }
          {
            let e = ik(n, Y[t]);
            t.startsWith("origin") ? ((a = !0), (o[t] = e)) : (i[t] = e);
          }
        }
        if (
          (!e.transform &&
            (s || n
              ? (i.transform = (function (t, e, n) {
                  let i = "",
                    r = !0;
                  for (let o = 0; o < iR; o++) {
                    let s = d[o],
                      a = t[s];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === +!!s.startsWith("scale")
                          : 0 === parseFloat(a)) ||
                      n
                    ) {
                      let t = ik(a, Y[s]);
                      if (!l) {
                        r = !1;
                        let e = iD[s] || s;
                        i += `${e}(${t}) `;
                      }
                      n && (e[s] = t);
                    }
                  }
                  return (
                    (i = i.trim()),
                    n ? (i = n(e, r ? "" : i)) : r && (i = "none"),
                    i
                  );
                })(e, t.transform, n))
              : i.transform && (i.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: n = 0 } = o;
          i.transformOrigin = `${t} ${e} ${n}`;
        }
      }
      let ij = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function iL(t, e, n) {
        for (let i in e) g(e[i]) || iC(i, n) || (t[i] = e[i]);
      }
      var iF = n(34916);
      let iB = (t) => !(0, iF.S)(t);
      try {
        !(function (t) {
          t && (iB = (e) => (e.startsWith("on") ? !(0, iF.S)(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch (t) {}
      let iN = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function iO(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (iN.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let iI = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        iU = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function iW(t, e, n) {
        return "string" == typeof t ? t : $.px.transform(e + n * t);
      }
      function i$(
        t,
        {
          attrX: e,
          attrY: n,
          attrScale: i,
          originX: r,
          originY: o,
          pathLength: s,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        c,
        d,
      ) {
        if ((iV(t, u, d), c)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: h, style: f, dimensions: p } = t;
        h.transform && (p && (f.transform = h.transform), delete h.transform),
          p &&
            (void 0 !== r || void 0 !== o || f.transform) &&
            (f.transformOrigin = (function (t, e, n) {
              let i = iW(e, t.x, t.width),
                r = iW(n, t.y, t.height);
              return `${i} ${r}`;
            })(p, void 0 !== r ? r : 0.5, void 0 !== o ? o : 0.5)),
          void 0 !== e && (h.x = e),
          void 0 !== n && (h.y = n),
          void 0 !== i && (h.scale = i),
          void 0 !== s &&
            (function (t, e, n = 1, i = 0, r = !0) {
              t.pathLength = 1;
              let o = r ? iI : iU;
              t[o.offset] = $.px.transform(-i);
              let s = $.px.transform(e),
                a = $.px.transform(n);
              t[o.array] = `${s} ${a}`;
            })(h, s, a, l, !1);
      }
      let iG = () => ({ ...ij(), attrs: {} }),
        iq = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      var iX = n(89091);
      let iY = (t) => (e, n) => {
        let i = (0, e6.useContext)(iy),
          r = (0, e6.useContext)(iM.t),
          o = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onUpdate: n,
              },
              i,
              r,
              o,
            ) {
              let a = {
                latestValues: (function (t, e, n, i) {
                  let r = {},
                    o = i(t, {});
                  for (let t in o) r[t] = nd(o[t]);
                  let { initial: a, animate: u } = t,
                    c = ix(t),
                    d = ib(t);
                  e &&
                    d &&
                    !c &&
                    !1 !== t.inherit &&
                    (void 0 === a && (a = e.initial),
                    void 0 === u && (u = e.animate));
                  let h = !!n && !1 === n.initial,
                    f = (h = h || !1 === a) ? u : a;
                  if (f && "boolean" != typeof f && !s(f)) {
                    let e = Array.isArray(f) ? f : [f];
                    for (let n = 0; n < e.length; n++) {
                      let i = l(t, e[n]);
                      if (i) {
                        let { transitionEnd: t, transition: e, ...n } = i;
                        for (let t in n) {
                          let e = n[t];
                          if (Array.isArray(e)) {
                            let t = h ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (r[t] = e);
                        }
                        for (let e in t) r[e] = t[e];
                      }
                    }
                  }
                  return r;
                })(i, r, o, t),
                renderState: e(),
              };
              return (
                n &&
                  ((a.onMount = (t) => n({ props: i, current: t, ...a })),
                  (a.onUpdate = (t) => n(t))),
                a
              );
            })(t, e, i, r);
        return n ? o() : (0, iX.M)(o);
      };
      function iH(t, e, n) {
        var i;
        let { style: r } = t,
          o = {};
        for (let s in r)
          (g(r[s]) ||
            (e.style && g(e.style[s])) ||
            iC(s, t) ||
            (null === (i = null == n ? void 0 : n.getValue(s)) || void 0 === i
              ? void 0
              : i.liveStyle) !== void 0) &&
            (o[s] = r[s]);
        return o;
      }
      let i_ = {
        useVisualState: iY({
          scrapeMotionValuesFromProps: iH,
          createRenderState: ij,
        }),
      };
      function iz(t, e) {
        try {
          e.dimensions =
            "function" == typeof t.getBBox
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch (t) {
          e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
      }
      function iK(t, { style: e, vars: n }, i, r) {
        for (let o in (Object.assign(t.style, e, r && r.getProjectionStyles(i)),
        n))
          t.style.setProperty(o, n[o]);
      }
      let iQ = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function iZ(t, e, n, i) {
        for (let n in (iK(t, e, void 0, i), e.attrs))
          t.setAttribute(iQ.has(n) ? n : x(n), e.attrs[n]);
      }
      function iJ(t, e, n) {
        let i = iH(t, e, n);
        for (let n in t)
          (g(t[n]) || g(e[n])) &&
            (i[
              -1 !== d.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = t[n]);
        return i;
      }
      let i0 = ["x", "y", "width", "height", "cx", "cy", "r"],
        i1 = {
          useVisualState: iY({
            scrapeMotionValuesFromProps: iJ,
            createRenderState: iG,
            onUpdate: ({
              props: t,
              prevProps: e,
              current: n,
              renderState: i,
              latestValues: r,
            }) => {
              if (!n) return;
              let o = !!t.drag;
              if (!o) {
                for (let t in r)
                  if (h.has(t)) {
                    o = !0;
                    break;
                  }
              }
              if (!o) return;
              let s = !e;
              if (e)
                for (let n = 0; n < i0.length; n++) {
                  let i = i0[n];
                  t[i] !== e[i] && (s = !0);
                }
              s &&
                c.Gt.read(() => {
                  iz(n, i),
                    c.Gt.render(() => {
                      i$(i, r, iq(n.tagName), t.transformTemplate), iZ(n, i);
                    });
                });
            },
          }),
        },
        i3 = { current: null },
        i2 = { current: !1 },
        i9 = [...tP, U.y, L.f],
        i4 = (t) => i9.find(tw(t)),
        i5 = new WeakMap(),
        i7 = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class i6 {
        scrapeMotionValuesFromProps(t, e, n) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: n,
            reducedMotionConfig: i,
            blockInitialAnimation: r,
            visualState: o,
          },
          s = {},
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tg),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection,
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = c.kB.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                c.Gt.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l, onUpdate: u } = o;
          (this.onUpdate = u),
            (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = n),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = s),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = ix(e)),
            (this.isVariantNode = ib(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: d, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this,
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && g(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            i5.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            i2.current ||
              (function () {
                if (((i2.current = !0), iP.B)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (i3.current = t.matches);
                    t.addListener(e), e();
                  } else i3.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || i3.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          (0, c.WG)(this.notifyUpdate),
          (0, c.WG)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let n;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let i = h.has(t);
          i && this.onBindTransform && this.onBindTransform();
          let r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && c.Gt.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            o = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (n = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              r(), o(), n && n(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in iT) {
            let e = iT[t];
            if (!e) continue;
            let { isEnabled: n, Feature: i } = e;
            if (
              (!this.features[t] &&
                i &&
                n(this.props) &&
                (this.features[t] = new i(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : eD();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < i7.length; e++) {
            let n = i7[e];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let i = t["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i));
          }
          (this.prevMotionValues = (function (t, e, n) {
            for (let i in e) {
              let r = e[i],
                o = n[i];
              if (g(r)) t.addValue(i, r);
              else if (g(o)) t.addValue(i, (0, c.OQ)(r, { owner: t }));
              else if (o !== r) {
                if (t.hasValue(i)) {
                  let e = t.getValue(i);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(i);
                  t.addValue(i, (0, c.OQ)(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let i in n) void 0 === e[i] && t.removeValue(i);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this);
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let n = this.values.get(t);
          e !== n &&
            (n && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let n = this.values.get(t);
          return (
            void 0 === n &&
              void 0 !== e &&
              ((n = (0, c.OQ)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, n)),
            n
          );
        }
        readValue(t, e) {
          var n;
          let i =
            void 0 === this.latestValues[t] && this.current
              ? null !== (n = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== n
                ? n
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != i &&
              ("string" == typeof i && (ty(i) || j(i))
                ? (i = parseFloat(i))
                : !i4(i) && L.f.test(e) && (i = z(t, e)),
              this.setBaseTarget(t, g(i) ? i.get() : i)),
            g(i) ? i.get() : i
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let n;
          let { initial: i } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let r = l(
              this.props,
              i,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom,
            );
            r && (n = r[t]);
          }
          if (i && void 0 !== n) return n;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || g(r)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new o.vY()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class i8 extends i6 {
        constructor() {
          super(...arguments), (this.KeyframeResolver = tT);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: n }) {
          delete e[t], delete n[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          g(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class rt extends i8 {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = iK);
        }
        readValueFromInstance(t, e) {
          if (h.has(e)) return ts(t, e);
          {
            let n = window.getComputedStyle(t),
              i = ((0, tx.j)(e) ? n.getPropertyValue(e) : n[e]) || 0;
            return "string" == typeof i ? i.trim() : i;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return e$(t, e);
        }
        build(t, e, n) {
          iV(t, e, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return iH(t, e, n);
        }
      }
      class re extends i8 {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = eD),
            (this.updateDimensions = () => {
              this.current &&
                !this.renderState.dimensions &&
                iz(this.current, this.renderState);
            });
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (h.has(e)) {
            let t = _(e);
            return (t && t.default) || 0;
          }
          return (e = iQ.has(e) ? e : x(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return iJ(t, e, n);
        }
        onBindTransform() {
          this.current &&
            !this.renderState.dimensions &&
            c.Gt.postRender(this.updateDimensions);
        }
        build(t, e, n) {
          i$(t, e, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, n, i) {
          iZ(t, e, n, i);
        }
        mount(t) {
          (this.isSVGTag = iq(t.tagName)), super.mount(t);
        }
      }
      let rn = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (n, i) =>
            "create" === i ? t : (e.has(i) || e.set(i, t(i)), e.get(i)),
        });
      })(
        ((i = {
          animation: { Feature: eh },
          exit: { Feature: ep },
          inView: { Feature: im },
          tap: { Feature: il },
          focus: { Feature: is },
          hover: { Feature: io },
          pan: { Feature: e5 },
          drag: { Feature: e9, ProjectionNode: ii, MeasureLayout: na },
          layout: { ProjectionNode: ii, MeasureLayout: na },
        }),
        (r = (t, e) =>
          iO(t)
            ? new re(e)
            : new rt(e, { allowProjection: t !== e6.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            var e, n;
            let {
              preloadedFeatures: i,
              createVisualElement: r,
              useRender: o,
              useVisualState: s,
              Component: a,
            } = t;
            function l(t, e) {
              var n, i, l;
              let u;
              let d = {
                  ...(0, e6.useContext)(ig.Q),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      n = (0, e6.useContext)(nt.L).id;
                    return n && void 0 !== e ? n + "-" + e : e;
                  })(t),
                },
                { isStatic: h } = d,
                f = (function (t) {
                  let { initial: e, animate: n } = (function (t, e) {
                    if (ix(t)) {
                      let { initial: e, animate: n } = t;
                      return {
                        initial: !1 === e || ei(e) ? e : void 0,
                        animate: ei(n) ? n : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, e6.useContext)(iy));
                  return (0, e6.useMemo)(
                    () => ({ initial: e, animate: n }),
                    [iw(e), iw(n)],
                  );
                })(t),
                p = s(t, h);
              if (!h && iP.B) {
                (i = 0), (l = 0), (0, e6.useContext)(iv).strict;
                let t = (function (t) {
                  let { drag: e, layout: n } = iT;
                  if (!e && !n) return {};
                  let i = { ...e, ...n };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == n ? void 0 : n.isEnabled(t))
                        ? i.MeasureLayout
                        : void 0,
                    ProjectionNode: i.ProjectionNode,
                  };
                })(d);
                (u = t.MeasureLayout),
                  (f.visualElement = (function (t, e, n, i, r) {
                    var o, s;
                    let { visualElement: a } = (0, e6.useContext)(iy),
                      l = (0, e6.useContext)(iv),
                      u = (0, e6.useContext)(iM.t),
                      d = (0, e6.useContext)(ig.Q).reducedMotion,
                      h = (0, e6.useRef)(null);
                    (i = i || l.renderer),
                      !h.current &&
                        i &&
                        (h.current = i(t, {
                          visualState: e,
                          parent: a,
                          props: n,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: d,
                        }));
                    let f = h.current,
                      p = (0, e6.useContext)(ne);
                    f &&
                      !f.projection &&
                      r &&
                      ("html" === f.type || "svg" === f.type) &&
                      (function (t, e, n, i) {
                        let {
                          layoutId: r,
                          layout: o,
                          drag: s,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new n(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent),
                        )),
                          t.projection.setOptions({
                            layoutId: r,
                            layout: o,
                            alwaysMeasureLayout: !!s || (a && eq(a)),
                            visualElement: t,
                            animationType: "string" == typeof o ? o : "both",
                            initialPromotionConfig: i,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(h.current, n, r, p);
                    let m = (0, e6.useRef)(!1);
                    (0, e6.useInsertionEffect)(() => {
                      f && m.current && f.update(n, u);
                    });
                    let v = n[b],
                      g = (0, e6.useRef)(
                        !!v &&
                          !(null === (o = window.MotionHandoffIsComplete) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, v)) &&
                          (null === (s = window.MotionHasOptimisedAnimation) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, v)),
                      );
                    return (
                      (0, iA.E)(() => {
                        f &&
                          ((m.current = !0),
                          (window.MotionIsMounted = !0),
                          f.updateFeatures(),
                          c.k2.render(f.render),
                          g.current &&
                            f.animationState &&
                            f.animationState.animateChanges());
                      }),
                      (0, e6.useEffect)(() => {
                        f &&
                          (!g.current &&
                            f.animationState &&
                            f.animationState.animateChanges(),
                          g.current &&
                            (queueMicrotask(() => {
                              var t;
                              null ===
                                (t = window.MotionHandoffMarkAsComplete) ||
                                void 0 === t ||
                                t.call(window, v);
                            }),
                            (g.current = !1)));
                      }),
                      f
                    );
                  })(a, p, d, r, t.ProjectionNode));
              }
              return (0, e7.jsxs)(iy.Provider, {
                value: f,
                children: [
                  u && f.visualElement
                    ? (0, e7.jsx)(u, { visualElement: f.visualElement, ...d })
                    : null,
                  o(
                    a,
                    t,
                    ((n = f.visualElement),
                    (0, e6.useCallback)(
                      (t) => {
                        t && p.onMount && p.onMount(t),
                          n && (t ? n.mount(t) : n.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : eq(e) && (e.current = t));
                      },
                      [n],
                    )),
                    p,
                    h,
                    f.visualElement,
                  ),
                ],
              });
            }
            i &&
              (function (t) {
                for (let e in t) iT[e] = { ...iT[e], ...t[e] };
              })(i),
              (l.displayName = "motion.".concat(
                "string" == typeof a
                  ? a
                  : "create(".concat(
                      null !==
                        (n =
                          null !== (e = a.displayName) && void 0 !== e
                            ? e
                            : a.name) && void 0 !== n
                        ? n
                        : "",
                      ")",
                    ),
              ));
            let u = (0, e6.forwardRef)(l);
            return (u[iE] = a), u;
          })({
            ...(iO(t) ? i1 : i_),
            preloadedFeatures: i,
            useRender: (function (t = !1) {
              return (e, n, i, { latestValues: r }, o) => {
                let s = (
                    iO(e)
                      ? function (t, e, n, i) {
                          let r = (0, e6.useMemo)(() => {
                            let n = iG();
                            return (
                              i$(n, e, iq(i), t.transformTemplate),
                              { ...n.attrs, style: { ...n.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            iL(e, t.style, t), (r.style = { ...e, ...r.style });
                          }
                          return r;
                        }
                      : function (t, e) {
                          let n = {},
                            i = (function (t, e) {
                              let n = t.style || {},
                                i = {};
                              return (
                                iL(i, n, t),
                                Object.assign(
                                  i,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, e6.useMemo)(() => {
                                      let n = ij();
                                      return (
                                        iV(n, e, t),
                                        Object.assign({}, n.vars, n.style)
                                      );
                                    }, [e]);
                                  })(t, e),
                                ),
                                i
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((n.draggable = !1),
                              (i.userSelect =
                                i.WebkitUserSelect =
                                i.WebkitTouchCallout =
                                  "none"),
                              (i.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (n.tabIndex = 0),
                            (n.style = i),
                            n
                          );
                        }
                  )(n, r, o, e),
                  a = (function (t, e, n) {
                    let i = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (iB(r) ||
                          (!0 === n && (0, iF.S)(r)) ||
                          (!e && !(0, iF.S)(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (i[r] = t[r]);
                    return i;
                  })(n, "string" == typeof e, t),
                  l = e !== e6.Fragment ? { ...a, ...s, ref: i } : {},
                  { children: u } = n,
                  c = (0, e6.useMemo)(() => (g(u) ? u.get() : u), [u]);
                return (0, e6.createElement)(e, { ...l, children: c });
              };
            })(e),
            createVisualElement: r,
            Component: t,
          });
        }),
      );
    },
    65772: (t, e, n) => {
      n.d(e, { J: () => l, useModalManager: () => u });
      var i = n(34023),
        r = Object.defineProperty,
        o = (t, e, n) =>
          e in t
            ? r(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n),
        s = (t, e, n) => (o(t, "symbol" != typeof e ? e + "" : e, n), n);
      class a {
        add(t) {
          return this.modals.add(t), this.modals.size;
        }
        remove(t) {
          this.modals.delete(t);
        }
        isTopModal(t) {
          return !!t && t === Array.from(this.modals)[this.modals.size - 1];
        }
        constructor() {
          s(this, "modals"), (this.modals = new Set());
        }
      }
      let l = new a();
      function u(t, e) {
        let [n, r] = (0, i.useState)(0);
        return (
          (0, i.useEffect)(() => {
            let n = t.current;
            if (n)
              return (
                e && r(l.add(n)),
                () => {
                  l.remove(n), r(0);
                }
              );
          }, [e, t]),
          n
        );
      }
    },
    67237: (t, e, n) => {
      n.d(e, { $: () => o, q: () => s });
      var i = n(10321);
      let r =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        o = (t, e) => (n) =>
          !!(
            ("string" == typeof n && r.test(n) && n.startsWith(t)) ||
            (e && null != n && Object.prototype.hasOwnProperty.call(n, e))
          ),
        s = (t, e, n) => (r) => {
          if ("string" != typeof r) return r;
          let [o, s, a, l] = r.match(i.S);
          return {
            [t]: parseFloat(o),
            [e]: parseFloat(s),
            [n]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    71924: (t, e, n) => {
      n.d(e, { Portal: () => m });
      var i = n(94799),
        r = n(11844),
        o = n(79872),
        s = n(34023),
        a = n(56742),
        l = n(22550);
      let [u, c] = (0, o.createContext)({ strict: !1, name: "PortalContext" }),
        d = "chakra-portal",
        h = (t) =>
          (0, i.jsx)("div", {
            className: "chakra-portal-zIndex",
            style: {
              position: "absolute",
              zIndex: t.zIndex,
              top: 0,
              left: 0,
              right: 0,
            },
            children: t.children,
          }),
        f = (t) => {
          let { appendToParentPortal: e, children: n } = t,
            [o, f] = (0, s.useState)(null),
            p = (0, s.useRef)(null),
            [, m] = (0, s.useState)({});
          (0, s.useEffect)(() => m({}), []);
          let v = c(),
            g = (0, l.usePortalManager)();
          (0, r.useSafeLayoutEffect)(() => {
            if (!o) return;
            let t = o.ownerDocument,
              n = e && null != v ? v : t.body;
            if (!n) return;
            (p.current = t.createElement("div")),
              (p.current.className = d),
              n.appendChild(p.current),
              m({});
            let i = p.current;
            return () => {
              n.contains(i) && n.removeChild(i);
            };
          }, [o]);
          let y = (null == g ? void 0 : g.zIndex)
            ? (0, i.jsx)(h, {
                zIndex: null == g ? void 0 : g.zIndex,
                children: n,
              })
            : n;
          return p.current
            ? (0, a.createPortal)(
                (0, i.jsx)(u, { value: p.current, children: y }),
                p.current,
              )
            : (0, i.jsx)("span", {
                ref: (t) => {
                  t && f(t);
                },
              });
        },
        p = (t) => {
          let { children: e, containerRef: n, appendToParentPortal: o } = t,
            l = n.current,
            c =
              null != l
                ? l
                : "undefined" != typeof window
                  ? document.body
                  : void 0,
            h = (0, s.useMemo)(() => {
              let t = null == l ? void 0 : l.ownerDocument.createElement("div");
              return t && (t.className = d), t;
            }, [l]),
            [, f] = (0, s.useState)({});
          return ((0, r.useSafeLayoutEffect)(() => f({}), []),
          (0, r.useSafeLayoutEffect)(() => {
            if (h && c)
              return (
                c.appendChild(h),
                () => {
                  c.removeChild(h);
                }
              );
          }, [h, c]),
          c && h)
            ? (0, a.createPortal)(
                (0, i.jsx)(u, { value: o ? h : null, children: e }),
                h,
              )
            : null;
        };
      function m(t) {
        let { containerRef: e, ...n } = { appendToParentPortal: !0, ...t };
        return e
          ? (0, i.jsx)(p, { containerRef: e, ...n })
          : (0, i.jsx)(f, { ...n });
      }
      (m.className = d),
        (m.selector = ".chakra-portal"),
        (m.displayName = "Portal");
    },
    72484: (t, e, n) => {
      n.d(e, { useMediaQuery: () => o });
      var i = n(34023),
        r = n(62434);
      function o(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { ssr: n = !0, fallback: o } = e,
          { getWindow: s } = (0, r.useEnvironment)(),
          a = Array.isArray(t) ? t : [t],
          l = Array.isArray(o) ? o : [o];
        l = l.filter((t) => null != t);
        let [u, c] = (0, i.useState)(() =>
          a.map((t, e) => ({
            media: t,
            matches: n ? !!l[e] : s().matchMedia(t).matches,
          })),
        );
        return (
          (0, i.useEffect)(() => {
            let t = s();
            c(a.map((e) => ({ media: e, matches: t.matchMedia(e).matches })));
            let e = a.map((e) => t.matchMedia(e)),
              n = (t) => {
                c((e) =>
                  e
                    .slice()
                    .map((e) =>
                      e.media === t.media ? { ...e, matches: t.matches } : e,
                    ),
                );
              };
            return (
              e.forEach((t) => {
                "function" == typeof t.addListener
                  ? t.addListener(n)
                  : t.addEventListener("change", n);
              }),
              () => {
                e.forEach((t) => {
                  "function" == typeof t.removeListener
                    ? t.removeListener(n)
                    : t.removeEventListener("change", n);
                });
              }
            );
          }, [s]),
          u.map((t) => t.matches)
        );
      }
    },
    75093: (t, e, n) => {
      n.d(e, { ModalContent: () => g });
      var i = n(94799),
        r = n(2568),
        o = n(49708),
        s = n(16774),
        a = n(98671),
        l = n(65329),
        u = n(34023),
        c = n(79761),
        d = n(30986),
        h = n(13331);
      let f = {
          slideInBottom: {
            ...c.slideFadeConfig,
            custom: { offsetY: 16, reverse: !0 },
          },
          slideInRight: {
            ...c.slideFadeConfig,
            custom: { offsetX: 16, reverse: !0 },
          },
          slideInTop: {
            ...c.slideFadeConfig,
            custom: { offsetY: -16, reverse: !0 },
          },
          slideInLeft: {
            ...c.slideFadeConfig,
            custom: { offsetX: -16, reverse: !0 },
          },
          scale: {
            ...d.scaleFadeConfig,
            custom: { initialScale: 0.95, reverse: !0 },
          },
          none: {},
        },
        p = (0, h.chakra)(l.P.section),
        m = (t) => f[t || "none"],
        v = (0, u.forwardRef)((t, e) => {
          let { preset: n, motionProps: r = m(n), ...o } = t;
          return (0, i.jsx)(p, { ref: e, ...r, ...o });
        });
      v.displayName = "ModalTransition";
      let g = (0, n(39738).forwardRef)((t, e) => {
        let {
            className: n,
            children: l,
            containerProps: u,
            motionProps: c,
            ...d
          } = t,
          { getDialogProps: f, getDialogContainerProps: p } = (0,
          s.useModalContext)(),
          m = f(d, e),
          g = p(u),
          y = (0, o.cx)("chakra-modal__content", n),
          x = (0, s.useModalStyles)(),
          b = (0, r.H2)({
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: "100%",
            outline: 0,
            ...x.dialog,
          }),
          w = (0, r.H2)({
            display: "flex",
            width: "100vw",
            height: "$100vh",
            position: "fixed",
            left: 0,
            top: 0,
            ...x.dialogContainer,
          }),
          { motionPreset: P } = (0, s.useModalContext)();
        return (0, i.jsx)(a.ModalFocusScope, {
          children: (0, i.jsx)(h.chakra.div, {
            ...g,
            className: "chakra-modal__content-container",
            tabIndex: -1,
            __css: w,
            children: (0, i.jsx)(v, {
              preset: P,
              motionProps: c,
              className: y,
              ...m,
              __css: b,
              children: l,
            }),
          }),
        });
      });
      g.displayName = "ModalContent";
    },
    76305: (t, e, n) => {
      function i(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      n.d(e, {
        W9: () => l,
        vY: () => d,
        Kq: () => i,
        V1: () => a,
        ph: () => u,
        Xu: () => f,
        lQ: () => o,
        qB: () => c,
        Ai: () => r,
        fD: () => h,
        fj: () => p,
        $e: () => s,
      });
      let o = (t) => t,
        s = o,
        a = o,
        l = { skipAnimations: !1, useManualTiming: !1 };
      function u(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let c = (t, e, n) => {
        let i = e - t;
        return 0 === i ? 1 : (n - t) / i;
      };
      class d {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return i(this.subscriptions, t), () => r(this.subscriptions, t);
        }
        notify(t, e, n) {
          let i = this.subscriptions.length;
          if (i) {
            if (1 === i) this.subscriptions[0](t, e, n);
            else
              for (let r = 0; r < i; r++) {
                let i = this.subscriptions[r];
                i && i(t, e, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let h = (t) => 1e3 * t,
        f = (t) => t / 1e3;
      function p(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    78172: (t, e, n) => {
      n.d(e, { q: () => i });
      let i = (t, e, n) => (n > e ? e : n < t ? t : n);
    },
    79761: (t, e, n) => {
      n.d(e, { SlideFade: () => c, slideFadeConfig: () => u });
      var i = n(94799),
        r = n(49708),
        o = n(53738),
        s = n(65329),
        a = n(34023),
        l = n(46222);
      let u = {
          initial: "initial",
          animate: "enter",
          exit: "exit",
          variants: {
            initial: (t) => {
              var e;
              let {
                offsetX: n,
                offsetY: i,
                transition: r,
                transitionEnd: o,
                delay: s,
              } = t;
              return {
                opacity: 0,
                x: n,
                y: i,
                transition:
                  null !== (e = null == r ? void 0 : r.exit) && void 0 !== e
                    ? e
                    : l.withDelay.exit(l.j.exit, s),
                transitionEnd: null == o ? void 0 : o.exit,
              };
            },
            enter: (t) => {
              var e;
              let { transition: n, transitionEnd: i, delay: r } = t;
              return {
                opacity: 1,
                x: 0,
                y: 0,
                transition:
                  null !== (e = null == n ? void 0 : n.enter) && void 0 !== e
                    ? e
                    : l.withDelay.enter(l.j.enter, r),
                transitionEnd: null == i ? void 0 : i.enter,
              };
            },
            exit: (t) => {
              var e;
              let {
                  offsetY: n,
                  offsetX: i,
                  transition: r,
                  transitionEnd: o,
                  reverse: s,
                  delay: a,
                } = t,
                u = { x: i, y: n };
              return {
                opacity: 0,
                transition:
                  null !== (e = null == r ? void 0 : r.exit) && void 0 !== e
                    ? e
                    : l.withDelay.exit(l.j.exit, a),
                ...(s
                  ? { ...u, transitionEnd: null == o ? void 0 : o.exit }
                  : {
                      transitionEnd: { ...u, ...(null == o ? void 0 : o.exit) },
                    }),
              };
            },
          },
        },
        c = (0, a.forwardRef)(function (t, e) {
          let {
              unmountOnExit: n,
              in: a,
              reverse: l = !0,
              className: c,
              offsetX: d = 0,
              offsetY: h = 8,
              transition: f,
              transitionEnd: p,
              delay: m,
              animatePresenceProps: v,
              ...g
            } = t,
            y = !n || (a && n),
            x = a || n ? "enter" : "exit",
            b = {
              offsetX: d,
              offsetY: h,
              reverse: l,
              transition: f,
              transitionEnd: p,
              delay: m,
            };
          return (0, i.jsx)(o.N, {
            ...v,
            custom: b,
            children:
              y &&
              (0, i.jsx)(s.P.div, {
                ref: e,
                className: (0, r.cx)("chakra-offset-slide", c),
                custom: b,
                ...u,
                animate: x,
                ...g,
              }),
          });
        });
      c.displayName = "SlideFade";
    },
    83108: (t, e, n) => {
      n.d(e, { G: () => a });
      var i = n(76305),
        r = n(78172),
        o = n(9784),
        s = n(5317);
      function a(t, e, { clamp: n = !0, ease: l, mixer: u } = {}) {
        let c = t.length;
        if (
          ((0, i.V1)(
            c === e.length,
            "Both input and output ranges must be the same length",
          ),
          1 === c)
        )
          return () => e[0];
        if (2 === c && e[0] === e[1]) return () => e[1];
        let d = t[0] === t[1];
        t[0] > t[c - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let h = (function (t, e, n) {
            let r = [],
              a = n || o.j,
              l = t.length - 1;
            for (let n = 0; n < l; n++) {
              let o = a(t[n], t[n + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[n] || i.lQ : e;
                o = (0, s.F)(t, o);
              }
              r.push(o);
            }
            return r;
          })(e, l, u),
          f = h.length,
          p = (n) => {
            if (d && n < t[0]) return e[0];
            let r = 0;
            if (f > 1) for (; r < t.length - 2 && !(n < t[r + 1]); r++);
            let o = (0, i.qB)(t[r], t[r + 1], n);
            return h[r](o);
          };
        return n ? (e) => p((0, r.q)(t[0], t[c - 1], e)) : p;
      }
    },
    86300: (t, e, n) => {
      n.d(e, { a: () => i });
      let i = (t) => Math.round(1e5 * t) / 1e5;
    },
    87798: (t, e, n) => {
      n.d(e, { Image: () => u });
      var i = n(94799),
        r = n(27670),
        o = n(22732),
        s = n(97252),
        a = n(39738),
        l = n(13331);
      let u = (0, a.forwardRef)(function (t, e) {
        let {
            fallbackSrc: n,
            fallback: a,
            src: u,
            srcSet: c,
            align: d,
            fit: h,
            loading: f,
            ignoreFallback: p,
            crossOrigin: m,
            fallbackStrategy: v = "beforeLoadOrError",
            referrerPolicy: g,
            ...y
          } = t,
          x = void 0 !== n || void 0 !== a,
          b = null != f || p || !x,
          w = (0, s.useImage)({ ...t, crossOrigin: m, ignoreFallback: b }),
          P = (0, s.m)(w, v),
          S = {
            ref: e,
            objectFit: h,
            objectPosition: d,
            ...(b ? y : (0, r.c)(y, ["onError", "onLoad"])),
          };
        return P
          ? a ||
              (0, i.jsx)(l.chakra.img, {
                as: o.r,
                className: "chakra-image__placeholder",
                src: n,
                ...S,
              })
          : (0, i.jsx)(l.chakra.img, {
              as: o.r,
              src: u,
              srcSet: c,
              crossOrigin: m,
              loading: f,
              referrerPolicy: g,
              className: "chakra-image",
              ...S,
            });
      });
      u.displayName = "Image";
    },
    88878: (t, e, n) => {
      n.d(e, { j: () => r, p: () => s });
      let i = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = i("--"),
        o = i("var(--"),
        s = (t) => !!o(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    89091: (t, e, n) => {
      n.d(e, { M: () => r });
      var i = n(34023);
      function r(t) {
        let e = (0, i.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    91532: (t, e, n) => {
      n.d(e, { AO: () => a, tp: () => s });
      var i = n(26654);
      let r = (t) => t.hasAttribute("tabindex"),
        o = (t) => r(t) && -1 === t.tabIndex;
      function s(t) {
        if (!(0, i.sb)(t) || (0, i.N3)(t) || (0, i.pj)(t)) return !1;
        let { localName: e } = t;
        if (["input", "select", "textarea", "button"].indexOf(e) >= 0)
          return !0;
        let n = {
          a: () => t.hasAttribute("href"),
          audio: () => t.hasAttribute("controls"),
          video: () => t.hasAttribute("controls"),
        };
        return e in n ? n[e]() : !!(0, i.wu)(t) || r(t);
      }
      function a(t) {
        return !!t && (0, i.sb)(t) && s(t) && !o(t);
      }
    },
    91538: (t, e, n) => {
      n.d(e, { Q: () => i });
      let i = (0, n(34023).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    92655: (t, e, n) => {
      n.d(e, { L: () => i });
      let i = (0, n(34023).createContext)({});
    },
    93396: (t, e, n) => {
      n.d(e, { Z: () => o });
      var i = n(76305),
        r = n(16843);
      function o(t) {
        let e = [0];
        return (
          !(function (t, e) {
            let n = t[t.length - 1];
            for (let o = 1; o <= e; o++) {
              let s = (0, i.qB)(0, e, o);
              t.push((0, r.k)(n, 1, s));
            }
          })(e, t.length - 1),
          e
        );
      }
    },
    96281: (t, e, n) => {
      n.d(e, { V: () => a });
      var i = n(96644),
        r = n(44637),
        o = n(86300),
        s = n(67237);
      let a = {
        test: (0, s.$)("hsl", "hue"),
        parse: (0, s.q)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.KN.transform((0, o.a)(e)) +
          ", " +
          r.KN.transform((0, o.a)(n)) +
          ", " +
          (0, o.a)(i.X4.transform(s)) +
          ")",
      };
    },
    96644: (t, e, n) => {
      n.d(e, { X4: () => o, ai: () => r, hs: () => s });
      var i = n(78172);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        o = { ...r, transform: (t) => (0, i.q)(0, 1, t) },
        s = { ...r, default: 1 };
    },
    97252: (t, e, n) => {
      n.d(e, { m: () => s, useImage: () => o });
      var i = n(11844),
        r = n(34023);
      function o(t) {
        let {
            loading: e,
            src: n,
            srcSet: o,
            onLoad: s,
            onError: a,
            crossOrigin: l,
            sizes: u,
            ignoreFallback: c,
          } = t,
          [d, h] = (0, r.useState)("pending");
        (0, r.useEffect)(() => {
          h(n ? "loading" : "pending");
        }, [n]);
        let f = (0, r.useRef)(null),
          p = (0, r.useCallback)(() => {
            if (!n) return;
            m();
            let t = new Image();
            (t.src = n),
              l && (t.crossOrigin = l),
              o && (t.srcset = o),
              u && (t.sizes = u),
              e && (t.loading = e),
              (t.onload = (t) => {
                m(), h("loaded"), null == s || s(t);
              }),
              (t.onerror = (t) => {
                m(), h("failed"), null == a || a(t);
              }),
              (f.current = t);
          }, [n, l, o, u, s, a, e]),
          m = () => {
            f.current &&
              ((f.current.onload = null),
              (f.current.onerror = null),
              (f.current = null));
          };
        return (
          (0, i.useSafeLayoutEffect)(() => {
            if (!c)
              return (
                "loading" === d && p(),
                () => {
                  m();
                }
              );
          }, [d, p, c]),
          c ? "loaded" : d
        );
      }
      let s = (t, e) =>
        ("loaded" !== t && "beforeLoadOrError" === e) ||
        ("failed" === t && "onError" === e);
    },
    98671: (t, e, n) => {
      n.d(e, { ModalFocusScope: () => Y });
      var i,
        r = n(94799),
        o = n(59660),
        s = n(34023),
        a = n(90535),
        l = "right-scroll-bar-position",
        u = "width-before-scroll-bar",
        c = n(30454),
        d = (0, n(1498).f)(),
        h = function () {},
        f = s.forwardRef(function (t, e) {
          var n = s.useRef(null),
            i = s.useState({
              onScrollCapture: h,
              onWheelCapture: h,
              onTouchMoveCapture: h,
            }),
            r = i[0],
            o = i[1],
            l = t.forwardProps,
            u = t.children,
            f = t.className,
            p = t.removeScrollBar,
            m = t.enabled,
            v = t.shards,
            g = t.sideCar,
            y = t.noIsolation,
            x = t.inert,
            b = t.allowPinchZoom,
            w = t.as,
            P = t.gapMode,
            S = (0, a.Tt)(t, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            T = (0, c.S)([n, e]),
            E = (0, a.Cl)((0, a.Cl)({}, S), r);
          return s.createElement(
            s.Fragment,
            null,
            m &&
              s.createElement(g, {
                sideCar: d,
                removeScrollBar: p,
                shards: v,
                noIsolation: y,
                inert: x,
                setCallbacks: o,
                allowPinchZoom: !!b,
                lockRef: n,
                gapMode: P,
              }),
            l
              ? s.cloneElement(
                  s.Children.only(u),
                  (0, a.Cl)((0, a.Cl)({}, E), { ref: T }),
                )
              : s.createElement(
                  void 0 === w ? "div" : w,
                  (0, a.Cl)({}, E, { className: f, ref: T }),
                  u,
                ),
          );
        });
      (f.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (f.classNames = { fullWidth: u, zeroRight: l });
      var p = function (t) {
        var e = t.sideCar,
          n = (0, a.Tt)(t, ["sideCar"]);
        if (!e)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car",
          );
        var i = e.read();
        if (!i) throw Error("Sidecar medium not found");
        return s.createElement(i, (0, a.Cl)({}, n));
      };
      p.isSideCarExport = !0;
      var m = function () {
          var t = 0,
            e = null;
          return {
            add: function (r) {
              if (
                0 == t &&
                (e = (function () {
                  if (!document) return null;
                  var t = document.createElement("style");
                  t.type = "text/css";
                  var e = i || n.nc;
                  return e && t.setAttribute("nonce", e), t;
                })())
              ) {
                var o, s;
                (o = e).styleSheet
                  ? (o.styleSheet.cssText = r)
                  : o.appendChild(document.createTextNode(r)),
                  (s = e),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(s);
              }
              t++;
            },
            remove: function () {
              --t ||
                !e ||
                (e.parentNode && e.parentNode.removeChild(e), (e = null));
            },
          };
        },
        v = function () {
          var t = m();
          return function (e, n) {
            s.useEffect(
              function () {
                return (
                  t.add(e),
                  function () {
                    t.remove();
                  }
                );
              },
              [e && n],
            );
          };
        },
        g = function () {
          var t = v();
          return function (e) {
            return t(e.styles, e.dynamic), null;
          };
        },
        y = { left: 0, top: 0, right: 0, gap: 0 },
        x = function (t) {
          return parseInt(t || "", 10) || 0;
        },
        b = function (t) {
          var e = window.getComputedStyle(document.body),
            n = e["padding" === t ? "paddingLeft" : "marginLeft"],
            i = e["padding" === t ? "paddingTop" : "marginTop"],
            r = e["padding" === t ? "paddingRight" : "marginRight"];
          return [x(n), x(i), x(r)];
        },
        w = function (t) {
          if ((void 0 === t && (t = "margin"), "undefined" == typeof window))
            return y;
          var e = b(t),
            n = document.documentElement.clientWidth,
            i = window.innerWidth;
          return {
            left: e[0],
            top: e[1],
            right: e[2],
            gap: Math.max(0, i - n + e[2] - e[0]),
          };
        },
        P = g(),
        S = "data-scroll-locked",
        T = function (t, e, n, i) {
          var r = t.left,
            o = t.top,
            s = t.right,
            a = t.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(i, ";\n   padding-right: ")
              .concat(a, "px ")
              .concat(i, ";\n  }\n  body[")
              .concat(S, "] {\n    overflow: hidden ")
              .concat(i, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  e && "position: relative ".concat(i, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(r, "px;\n    padding-top: ")
                      .concat(o, "px;\n    padding-right: ")
                      .concat(
                        s,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ",
                      )
                      .concat(a, "px ")
                      .concat(i, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(a, "px ").concat(i, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  .",
              )
              .concat(l, " {\n    right: ")
              .concat(a, "px ")
              .concat(i, ";\n  }\n  \n  .")
              .concat(u, " {\n    margin-right: ")
              .concat(a, "px ")
              .concat(i, ";\n  }\n  \n  .")
              .concat(l, " .")
              .concat(l, " {\n    right: 0 ")
              .concat(i, ";\n  }\n  \n  .")
              .concat(u, " .")
              .concat(u, " {\n    margin-right: 0 ")
              .concat(i, ";\n  }\n  \n  body[")
              .concat(S, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(a, "px;\n  }\n")
          );
        },
        E = function () {
          var t = parseInt(document.body.getAttribute(S) || "0", 10);
          return isFinite(t) ? t : 0;
        },
        M = function () {
          s.useEffect(function () {
            return (
              document.body.setAttribute(S, (E() + 1).toString()),
              function () {
                var t = E() - 1;
                t <= 0
                  ? document.body.removeAttribute(S)
                  : document.body.setAttribute(S, t.toString());
              }
            );
          }, []);
        },
        A = function (t) {
          var e = t.noRelative,
            n = t.noImportant,
            i = t.gapMode,
            r = void 0 === i ? "margin" : i;
          M();
          var o = s.useMemo(
            function () {
              return w(r);
            },
            [r],
          );
          return s.createElement(P, {
            styles: T(o, !e, r, n ? "" : "!important"),
          });
        },
        C = !1;
      if ("undefined" != typeof window)
        try {
          var k = Object.defineProperty({}, "passive", {
            get: function () {
              return (C = !0), !0;
            },
          });
          window.addEventListener("test", k, k),
            window.removeEventListener("test", k, k);
        } catch (t) {
          C = !1;
        }
      var D = !!C && { passive: !1 },
        R = function (t, e) {
          if (!(t instanceof Element)) return !1;
          var n = window.getComputedStyle(t);
          return (
            "hidden" !== n[e] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === t.tagName ||
              "visible" !== n[e])
          );
        },
        V = function (t, e) {
          var n = e.ownerDocument,
            i = e;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                i instanceof ShadowRoot &&
                (i = i.host),
              j(t, i))
            ) {
              var r = L(t, i);
              if (r[1] > r[2]) return !0;
            }
            i = i.parentNode;
          } while (i && i !== n.body);
          return !1;
        },
        j = function (t, e) {
          return "v" === t ? R(e, "overflowY") : R(e, "overflowX");
        },
        L = function (t, e) {
          return "v" === t
            ? [e.scrollTop, e.scrollHeight, e.clientHeight]
            : [e.scrollLeft, e.scrollWidth, e.clientWidth];
        },
        F = function (t, e, n, i, r) {
          var o,
            s =
              ((o = window.getComputedStyle(e).direction),
              "h" === t && "rtl" === o ? -1 : 1),
            a = s * i,
            l = n.target,
            u = e.contains(l),
            c = !1,
            d = a > 0,
            h = 0,
            f = 0;
          do {
            var p = L(t, l),
              m = p[0],
              v = p[1] - p[2] - s * m;
            (m || v) && j(t, l) && ((h += v), (f += m)),
              (l = l instanceof ShadowRoot ? l.host : l.parentNode);
          } while (
            (!u && l !== document.body) ||
            (u && (e.contains(l) || e === l))
          );
          return (
            d && ((r && 1 > Math.abs(h)) || (!r && a > h))
              ? (c = !0)
              : !d && ((r && 1 > Math.abs(f)) || (!r && -a > f)) && (c = !0),
            c
          );
        },
        B = function (t) {
          return "changedTouches" in t
            ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY]
            : [0, 0];
        },
        N = function (t) {
          return [t.deltaX, t.deltaY];
        },
        O = function (t) {
          return t && "current" in t ? t.current : t;
        },
        I = 0,
        U = [];
      let W =
        (d.useMedium(function (t) {
          var e = s.useRef([]),
            n = s.useRef([0, 0]),
            i = s.useRef(),
            r = s.useState(I++)[0],
            o = s.useState(g)[0],
            l = s.useRef(t);
          s.useEffect(
            function () {
              l.current = t;
            },
            [t],
          ),
            s.useEffect(
              function () {
                if (t.inert) {
                  document.body.classList.add("block-interactivity-".concat(r));
                  var e = (0, a.fX)(
                    [t.lockRef.current],
                    (t.shards || []).map(O),
                    !0,
                  ).filter(Boolean);
                  return (
                    e.forEach(function (t) {
                      return t.classList.add("allow-interactivity-".concat(r));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(r),
                      ),
                        e.forEach(function (t) {
                          return t.classList.remove(
                            "allow-interactivity-".concat(r),
                          );
                        });
                    }
                  );
                }
              },
              [t.inert, t.lockRef.current, t.shards],
            );
          var u = s.useCallback(function (t, e) {
              if (
                ("touches" in t && 2 === t.touches.length) ||
                ("wheel" === t.type && t.ctrlKey)
              )
                return !l.current.allowPinchZoom;
              var r,
                o = B(t),
                s = n.current,
                a = "deltaX" in t ? t.deltaX : s[0] - o[0],
                u = "deltaY" in t ? t.deltaY : s[1] - o[1],
                c = t.target,
                d = Math.abs(a) > Math.abs(u) ? "h" : "v";
              if ("touches" in t && "h" === d && "range" === c.type) return !1;
              var h = V(d, c);
              if (!h) return !0;
              if (
                (h ? (r = d) : ((r = "v" === d ? "h" : "v"), (h = V(d, c))), !h)
              )
                return !1;
              if (
                (!i.current &&
                  "changedTouches" in t &&
                  (a || u) &&
                  (i.current = r),
                !r)
              )
                return !0;
              var f = i.current || r;
              return F(f, e, t, "h" === f ? a : u, !0);
            }, []),
            c = s.useCallback(function (t) {
              if (U.length && U[U.length - 1] === o) {
                var n = "deltaY" in t ? N(t) : B(t),
                  i = e.current.filter(function (e) {
                    var i;
                    return (
                      e.name === t.type &&
                      (e.target === t.target || t.target === e.shadowParent) &&
                      (i = e.delta)[0] === n[0] &&
                      i[1] === n[1]
                    );
                  })[0];
                if (i && i.should) {
                  t.cancelable && t.preventDefault();
                  return;
                }
                if (!i) {
                  var r = (l.current.shards || [])
                    .map(O)
                    .filter(Boolean)
                    .filter(function (e) {
                      return e.contains(t.target);
                    });
                  (r.length > 0 ? u(t, r[0]) : !l.current.noIsolation) &&
                    t.cancelable &&
                    t.preventDefault();
                }
              }
            }, []),
            d = s.useCallback(function (t, n, i, r) {
              var o = {
                name: t,
                delta: n,
                target: i,
                should: r,
                shadowParent: (function (t) {
                  for (var e = null; null !== t; )
                    t instanceof ShadowRoot && ((e = t.host), (t = t.host)),
                      (t = t.parentNode);
                  return e;
                })(i),
              };
              e.current.push(o),
                setTimeout(function () {
                  e.current = e.current.filter(function (t) {
                    return t !== o;
                  });
                }, 1);
            }, []),
            h = s.useCallback(function (t) {
              (n.current = B(t)), (i.current = void 0);
            }, []),
            f = s.useCallback(function (e) {
              d(e.type, N(e), e.target, u(e, t.lockRef.current));
            }, []),
            p = s.useCallback(function (e) {
              d(e.type, B(e), e.target, u(e, t.lockRef.current));
            }, []);
          s.useEffect(function () {
            return (
              U.push(o),
              t.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", c, D),
              document.addEventListener("touchmove", c, D),
              document.addEventListener("touchstart", h, D),
              function () {
                (U = U.filter(function (t) {
                  return t !== o;
                })),
                  document.removeEventListener("wheel", c, D),
                  document.removeEventListener("touchmove", c, D),
                  document.removeEventListener("touchstart", h, D);
              }
            );
          }, []);
          var m = t.removeScrollBar,
            v = t.inert;
          return s.createElement(
            s.Fragment,
            null,
            v
              ? s.createElement(o, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      r,
                      " {pointer-events: none;}\n  .allow-interactivity-",
                    )
                    .concat(r, " {pointer-events: all;}\n"),
                })
              : null,
            m ? s.createElement(A, { gapMode: t.gapMode }) : null,
          );
        }),
        p);
      var $ = s.forwardRef(function (t, e) {
        return s.createElement(f, (0, a.Cl)({}, t, { ref: e, sideCar: W }));
      });
      $.classNames = f.classNames;
      var G = n(16774),
        q = n(65772),
        X = n(44132);
      function Y(t) {
        let {
            autoFocus: e,
            trapFocus: n,
            dialogRef: i,
            initialFocusRef: a,
            blockScrollOnMount: l,
            allowPinchZoom: u,
            finalFocusRef: c,
            returnFocusOnClose: d,
            preserveScrollBarGap: h,
            lockFocusAcrossFrames: f,
            isOpen: p,
          } = (0, G.useModalContext)(),
          [m, v] = (0, o.xQ)();
        (0, s.useEffect)(() => {
          !m && v && setTimeout(v);
        }, [m, v]);
        let g = (0, q.useModalManager)(i, p);
        return (0, r.jsx)(X.FocusLock, {
          autoFocus: e,
          isDisabled: !n,
          initialFocusRef: a,
          finalFocusRef: c,
          restoreFocus: d,
          contentRef: i,
          lockFocusAcrossFrames: f,
          children: (0, r.jsx)($, {
            removeScrollBar: !h,
            allowPinchZoom: u,
            enabled: 1 === g && l,
            forwardProps: !0,
            children: t.children,
          }),
        });
      }
    },
  },
]);
