"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2485],
  {
    5843: (e, r, t) => {
      t.d(r, {
        createExtendTheme: () => s,
        extendBaseTheme: () => c,
        extendTheme: () => d,
        mergeThemeOverride: () => b,
      });
      var o = t(62917);
      let a = [
        "borders",
        "breakpoints",
        "colors",
        "components",
        "config",
        "direction",
        "fonts",
        "fontSizes",
        "fontWeights",
        "letterSpacings",
        "lineHeights",
        "radii",
        "shadows",
        "sizes",
        "space",
        "styles",
        "transition",
        "zIndices",
      ];
      var i = t(59382),
        n = t(2337);
      function l(e) {
        return "function" == typeof e;
      }
      let s = (e) =>
          function () {
            for (var r, t = arguments.length, i = Array(t), n = 0; n < t; n++)
              i[n] = arguments[n];
            let s = [...i],
              d = i[i.length - 1];
            return (
              ((r = d),
              (0, o.Gv)(r) &&
                a.every((e) => Object.prototype.hasOwnProperty.call(r, e)) &&
                s.length > 1)
                ? (s = s.slice(0, s.length - 1))
                : (d = e),
              (function () {
                for (var e = arguments.length, r = Array(e), t = 0; t < e; t++)
                  r[t] = arguments[t];
                return (e) => r.reduce((e, r) => r(e), e);
              })(...s.map((e) => (r) => (l(e) ? e(r) : b(r, e))))(d)
            );
          },
        d = s(i.w4),
        c = s(i.$7);
      function b() {
        for (var e = arguments.length, r = Array(e), t = 0; t < e; t++)
          r[t] = arguments[t];
        return n({}, ...r, p);
      }
      function p(e, r, t, a) {
        return (l(e) || l(r)) && Object.prototype.hasOwnProperty.call(a, t)
          ? function () {
              for (var t = arguments.length, o = Array(t), a = 0; a < t; a++)
                o[a] = arguments[a];
              return n({}, l(e) ? e(...o) : e, l(r) ? r(...o) : r, p);
            }
          : ((0, o.Gv)(e) && (0, o.cy)(r)) || ((0, o.cy)(e) && (0, o.Gv)(r))
            ? r
            : void 0;
      }
    },
    11842: (e, r, t) => {
      t.d(r, { Toast: () => c, createRenderToast: () => b });
      var o = t(94799),
        a = t(47562),
        i = t(82710),
        n = t(91287),
        l = t(12615),
        s = t(45762),
        d = t(13331);
      let c = (e) => {
        let {
            status: r,
            variant: t = "solid",
            id: c,
            title: b,
            isClosable: p,
            onClose: u,
            description: f,
            colorScheme: m,
            icon: h,
          } = e,
          g = c
            ? {
                root: "toast-".concat(c),
                title: "toast-".concat(c, "-title"),
                description: "toast-".concat(c, "-description"),
              }
            : void 0;
        return (0, o.jsxs)(a.Alert, {
          addRole: !1,
          status: r,
          variant: t,
          id: null == g ? void 0 : g.root,
          alignItems: "start",
          borderRadius: "md",
          boxShadow: "lg",
          paddingEnd: 8,
          textAlign: "start",
          width: "auto",
          colorScheme: m,
          children: [
            (0, o.jsx)(i.AlertIcon, { children: h }),
            (0, o.jsxs)(d.chakra.div, {
              flex: "1",
              maxWidth: "100%",
              children: [
                b &&
                  (0, o.jsx)(n.AlertTitle, {
                    id: null == g ? void 0 : g.title,
                    children: b,
                  }),
                f &&
                  (0, o.jsx)(l.AlertDescription, {
                    id: null == g ? void 0 : g.description,
                    display: "block",
                    children: f,
                  }),
              ],
            }),
            p &&
              (0, o.jsx)(s.CloseButton, {
                size: "sm",
                onClick: u,
                position: "absolute",
                insetEnd: 1,
                top: 1,
              }),
          ],
        });
      };
      function b() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { render: r, toastComponent: t = c } = e;
        return (a) =>
          "function" == typeof r
            ? r({ ...a, ...e })
            : (0, o.jsx)(t, { ...a, ...e });
      }
    },
    12615: (e, r, t) => {
      t.d(r, { AlertDescription: () => d });
      var o = t(94799),
        a = t(2568),
        i = t(49708),
        n = t(16924),
        l = t(39738),
        s = t(13331);
      let d = (0, l.forwardRef)(function (e, r) {
        let { status: t } = (0, n.useAlertContext)(),
          l = (0, n.useAlertStyles)(),
          d = (0, a.H2)({ display: "inline", ...l.description });
        return (0, o.jsx)(s.chakra.div, {
          ref: r,
          "data-status": t,
          ...e,
          className: (0, i.cx)("chakra-alert__desc", e.className),
          __css: d,
        });
      });
      d.displayName = "AlertDescription";
    },
    14011: (e, r, t) => {
      t.d(r, { ChakraProvider: () => a });
      var o = t(59382);
      let a = (0, t(92038).Q)(o.w4);
    },
    16924: (e, r, t) => {
      t.d(r, {
        Sw: () => s,
        _N: () => c,
        He: () => u,
        cR: () => f,
        useAlertContext: () => d,
        useAlertStyles: () => b,
      });
      var o = t(79872),
        a = t(94799),
        i = t(55130);
      function n(e) {
        return (0, a.jsx)(i.Icon, {
          viewBox: "0 0 24 24",
          ...e,
          children: (0, a.jsx)("path", {
            fill: "currentColor",
            d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
          }),
        });
      }
      var l = t(37034);
      let [s, d] = (0, o.createContext)({
          name: "AlertContext",
          hookName: "useAlertContext",
          providerName: "<Alert />",
        }),
        [c, b] = (0, o.createContext)({
          name: "AlertStylesContext",
          hookName: "useAlertStyles",
          providerName: "<Alert />",
        }),
        p = {
          info: {
            icon: function (e) {
              return (0, a.jsx)(i.Icon, {
                viewBox: "0 0 24 24",
                ...e,
                children: (0, a.jsx)("path", {
                  fill: "currentColor",
                  d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
                }),
              });
            },
            colorScheme: "blue",
          },
          warning: { icon: n, colorScheme: "orange" },
          success: {
            icon: function (e) {
              return (0, a.jsx)(i.Icon, {
                viewBox: "0 0 24 24",
                ...e,
                children: (0, a.jsx)("path", {
                  fill: "currentColor",
                  d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
                }),
              });
            },
            colorScheme: "green",
          },
          error: { icon: n, colorScheme: "red" },
          loading: { icon: l.Spinner, colorScheme: "blue" },
        };
      function u(e) {
        return p[e].colorScheme;
      }
      function f(e) {
        return p[e].icon;
      }
    },
    24335: (e, r, t) => {
      t.d(r, { useTimeout: () => i });
      var o = t(34023),
        a = t(59013);
      function i(e, r) {
        let t = (0, a.useCallbackRef)(e);
        (0, o.useEffect)(() => {
          if (null == r) return;
          let e = null;
          return (
            (e = window.setTimeout(() => {
              t();
            }, r)),
            () => {
              e && window.clearTimeout(e);
            }
          );
        }, [r, t]);
      }
    },
    30309: (e, r, t) => {
      t.d(r, {
        ColorModeProvider: () => u,
        DarkMode: () => f,
        LightMode: () => m,
      });
      var o = t(94799),
        a = t(26654),
        i = t(85786),
        n = t(34023),
        l = t(55188);
      let s = { light: "chakra-ui-light", dark: "chakra-ui-dark" };
      var d = t(74263);
      let c = () => {},
        b = (0, a.Bd)() ? n.useLayoutEffect : n.useEffect;
      function p(e, r) {
        return "cookie" === e.type && e.ssr ? e.get(r) : r;
      }
      let u = function (e) {
        let {
            value: r,
            children: t,
            options: {
              useSystemColorMode: a,
              initialColorMode: u,
              disableTransitionOnChange: f,
            } = {},
            colorModeManager: m = d.localStorageManager,
          } = e,
          h = (0, i._)(),
          g = "dark" === u ? "dark" : "light",
          [x, v] = (0, n.useState)(() => p(m, g)),
          [y, S] = (0, n.useState)(() => p(m)),
          {
            getSystemTheme: k,
            setClassName: w,
            setDataset: _,
            addListener: z,
          } = (0, n.useMemo)(
            () =>
              (function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  { preventTransition: r = !0, nonce: t } = e,
                  o = {
                    setDataset: (e) => {
                      let t = r ? o.preventTransition() : void 0;
                      (document.documentElement.dataset.theme = e),
                        (document.documentElement.style.colorScheme = e),
                        null == t || t();
                    },
                    setClassName(e) {
                      document.body.classList.add(e ? s.dark : s.light),
                        document.body.classList.remove(e ? s.light : s.dark);
                    },
                    query: () =>
                      window.matchMedia("(prefers-color-scheme: dark)"),
                    getSystemTheme(e) {
                      var r;
                      return (
                        null !== (r = o.query().matches) && void 0 !== r
                          ? r
                          : "dark" === e
                      )
                        ? "dark"
                        : "light";
                    },
                    addListener(e) {
                      let r = o.query(),
                        t = (r) => {
                          e(r.matches ? "dark" : "light");
                        };
                      return (
                        "function" == typeof r.addListener
                          ? r.addListener(t)
                          : r.addEventListener("change", t),
                        () => {
                          "function" == typeof r.removeListener
                            ? r.removeListener(t)
                            : r.removeEventListener("change", t);
                        }
                      );
                    },
                    preventTransition() {
                      let e = document.createElement("style");
                      return (
                        e.appendChild(
                          document.createTextNode(
                            "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
                          ),
                        ),
                        void 0 !== t && (e.nonce = t),
                        document.head.appendChild(e),
                        () => {
                          window.getComputedStyle(document.body),
                            requestAnimationFrame(() => {
                              requestAnimationFrame(() => {
                                document.head.removeChild(e);
                              });
                            });
                        }
                      );
                    },
                  };
                return o;
              })({ preventTransition: f, nonce: null == h ? void 0 : h.nonce }),
            [f, null == h ? void 0 : h.nonce],
          ),
          C = "system" !== u || x ? x : y,
          H = (0, n.useCallback)(
            (e) => {
              let r = "system" === e ? k() : e;
              v(r), w("dark" === r), _(r), m.set(r);
            },
            [m, k, w, _],
          );
        b(() => {
          "system" === u && S(k());
        }, []),
          (0, n.useEffect)(() => {
            let e = m.get();
            if (e) {
              H(e);
              return;
            }
            if ("system" === u) {
              H("system");
              return;
            }
            H(g);
          }, [m, g, u, H]);
        let A = (0, n.useCallback)(() => {
          H("dark" === C ? "light" : "dark");
        }, [C, H]);
        (0, n.useEffect)(() => {
          if (a) return z(H);
        }, [a, z, H]);
        let $ = (0, n.useMemo)(
          () => ({
            colorMode: null != r ? r : C,
            toggleColorMode: r ? c : A,
            setColorMode: r ? c : H,
            forced: void 0 !== r,
          }),
          [C, A, H, r],
        );
        return (0, o.jsx)(l.ColorModeContext.Provider, {
          value: $,
          children: t,
        });
      };
      function f(e) {
        let r = (0, n.useMemo)(
          () => ({
            colorMode: "dark",
            toggleColorMode: c,
            setColorMode: c,
            forced: !0,
          }),
          [],
        );
        return (0, o.jsx)(l.ColorModeContext.Provider, { value: r, ...e });
      }
      function m(e) {
        let r = (0, n.useMemo)(
          () => ({
            colorMode: "light",
            toggleColorMode: c,
            setColorMode: c,
            forced: !0,
          }),
          [],
        );
        return (0, o.jsx)(l.ColorModeContext.Provider, { value: r, ...e });
      }
      (u.displayName = "ColorModeProvider"),
        (f.displayName = "DarkMode"),
        (m.displayName = "LightMode");
    },
    30955: (e, r, t) => {
      t.d(r, { toastStore: () => i });
      var o = t(11842),
        a = t(85547);
      let i = (function (e) {
          let r = e,
            t = new Set(),
            l = (e) => {
              (r = e(r)), t.forEach((e) => e());
            };
          return {
            getState: () => r,
            subscribe: (r) => (
              t.add(r),
              () => {
                l(() => e), t.delete(r);
              }
            ),
            removeToast: (e, r) => {
              l((t) => ({ ...t, [r]: t[r].filter((r) => r.id != e) }));
            },
            notify: (e, r) => {
              let t = (function (e) {
                  var r, t;
                  let o =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  n += 1;
                  let a = null !== (r = o.id) && void 0 !== r ? r : n,
                    l =
                      null !== (t = o.position) && void 0 !== t ? t : "bottom";
                  return {
                    id: a,
                    message: e,
                    position: l,
                    duration: o.duration,
                    onCloseComplete: o.onCloseComplete,
                    onRequestRemove: () => i.removeToast(String(a), l),
                    status: o.status,
                    requestClose: !1,
                    containerStyle: o.containerStyle,
                  };
                })(e, r),
                { position: o, id: a } = t;
              return (
                l((e) => {
                  var r, a;
                  let i = o.includes("top")
                    ? [t, ...(null !== (r = e[o]) && void 0 !== r ? r : [])]
                    : [...(null !== (a = e[o]) && void 0 !== a ? a : []), t];
                  return { ...e, [o]: i };
                }),
                a
              );
            },
            update: (e, r) => {
              e &&
                l((t) => {
                  let i = { ...t },
                    { position: n, index: l } = (0, a.xi)(i, e);
                  return (
                    n &&
                      -1 !== l &&
                      (i[n][l] = {
                        ...i[n][l],
                        ...r,
                        message: (0, o.createRenderToast)(r),
                      }),
                    i
                  );
                });
            },
            closeAll: function () {
              let { positions: e } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              l((r) =>
                (null != e
                  ? e
                  : [
                      "bottom",
                      "bottom-right",
                      "bottom-left",
                      "top",
                      "top-left",
                      "top-right",
                    ]
                ).reduce(
                  (e, t) => (
                    (e[t] = r[t].map((e) => ({ ...e, requestClose: !0 }))), e
                  ),
                  { ...r },
                ),
              );
            },
            close: (e) => {
              l((r) => {
                let t = (0, a.r3)(r, e);
                return t
                  ? {
                      ...r,
                      [t]: r[t].map((r) =>
                        r.id == e ? { ...r, requestClose: !0 } : r,
                      ),
                    }
                  : r;
              });
            },
            isActive: (e) => !!(0, a.xi)(i.getState(), e).position,
          };
        })({
          top: [],
          "top-left": [],
          "top-right": [],
          "bottom-left": [],
          bottom: [],
          "bottom-right": [],
        }),
        n = 0;
    },
    34150: (e, r, t) => {
      t.d(r, { StackDivider: () => i });
      var o = t(94799),
        a = t(13331);
      let i = (e) =>
        (0, o.jsx)(a.chakra.div, {
          className: "chakra-stack__divider",
          ...e,
          __css: {
            ...e.__css,
            borderWidth: 0,
            alignSelf: "stretch",
            borderColor: "inherit",
            width: "auto",
            height: "auto",
          },
        });
      i.displayName = "StackDivider";
    },
    39906: (e, r, t) => {
      t.d(r, { Progress: () => u, useProgressStyles: () => b });
      var o = t(94799),
        a = t(26943),
        i = t(79872),
        n = t(96107),
        l = t(39738),
        s = t(13331),
        d = t(98814);
      let [c, b] = (0, i.createContext)({
          name: "ProgressStylesContext",
          errorMessage:
            "useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Progress />\" ",
        }),
        p = (0, l.forwardRef)((e, r) => {
          let {
              min: t,
              max: a,
              value: i,
              isIndeterminate: l,
              role: d,
              ...c
            } = e,
            p = (0, n.SD)({
              value: i,
              min: t,
              max: a,
              isIndeterminate: l,
              role: d,
            }),
            u = { height: "100%", ...b().filledTrack };
          return (0, o.jsx)(s.chakra.div, {
            ref: r,
            style: { width: "".concat(p.percent, "%"), ...c.style },
            ...p.bind,
            ...c,
            __css: u,
          });
        }),
        u = (0, l.forwardRef)((e, r) => {
          var t;
          let {
              value: i,
              min: l = 0,
              max: b = 100,
              hasStripe: u,
              isAnimated: f,
              children: m,
              borderRadius: h,
              isIndeterminate: g,
              "aria-label": x,
              "aria-labelledby": v,
              "aria-valuetext": y,
              title: S,
              role: k,
              ...w
            } = (0, a.M)(e),
            _ = (0, d.useMultiStyleConfig)("Progress", e),
            z =
              null != h
                ? h
                : null === (t = _.track) || void 0 === t
                  ? void 0
                  : t.borderRadius,
            C = { animation: "".concat(n._4, " 1s linear infinite") },
            H = {
              ...(!g && u && f && C),
              ...(g && {
                position: "absolute",
                willChange: "left",
                minWidth: "50%",
                animation: "".concat(
                  n.qB,
                  " 1s ease infinite normal none running",
                ),
              }),
            },
            A = { overflow: "hidden", position: "relative", ..._.track };
          return (0, o.jsx)(s.chakra.div, {
            ref: r,
            borderRadius: z,
            __css: A,
            ...w,
            children: (0, o.jsxs)(c, {
              value: _,
              children: [
                (0, o.jsx)(p, {
                  "aria-label": x,
                  "aria-labelledby": v,
                  "aria-valuetext": y,
                  min: l,
                  max: b,
                  value: i,
                  isIndeterminate: g,
                  css: H,
                  borderRadius: z,
                  title: S,
                  role: k,
                }),
                m,
              ],
            }),
          });
        });
      u.displayName = "Progress";
    },
    47562: (e, r, t) => {
      t.d(r, { Alert: () => b });
      var o = t(94799),
        a = t(26943),
        i = t(2568),
        n = t(49708),
        l = t(16924),
        s = t(98814),
        d = t(39738),
        c = t(13331);
      let b = (0, d.forwardRef)(function (e, r) {
        var t;
        let { status: d = "info", addRole: b = !0, ...p } = (0, a.M)(e),
          u = null !== (t = e.colorScheme) && void 0 !== t ? t : (0, l.He)(d),
          f = (0, s.useMultiStyleConfig)("Alert", { ...e, colorScheme: u }),
          m = (0, i.H2)({
            width: "100%",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            ...f.container,
          });
        return (0, o.jsx)(l.Sw, {
          value: { status: d },
          children: (0, o.jsx)(l._N, {
            value: f,
            children: (0, o.jsx)(c.chakra.div, {
              "data-status": d,
              role: b ? "alert" : void 0,
              ref: r,
              ...p,
              className: (0, n.cx)("chakra-alert", e.className),
              __css: m,
            }),
          }),
        });
      });
      b.displayName = "Alert";
    },
    49758: (e, r, t) => {
      t.d(r, { CSSPolyfill: () => c, CSSReset: () => b });
      var o = t(60715),
        a = t(94799),
        i = t(67162);
      function n() {
        let e = (0, o._)([
          "\n  :root,\n  :host {\n    --chakra-vh: 100vh;\n  }\n\n  @supports (height: -webkit-fill-available) {\n    :root,\n    :host {\n      --chakra-vh: -webkit-fill-available;\n    }\n  }\n\n  @supports (height: -moz-fill-available) {\n    :root,\n    :host {\n      --chakra-vh: -moz-fill-available;\n    }\n  }\n\n  @supports (height: 100dvh) {\n    :root,\n    :host {\n      --chakra-vh: 100dvh;\n    }\n  }\n",
        ]);
        return (
          (n = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        let e = (0, o._)([
          '\n      html {\n        line-height: 1.5;\n        -webkit-text-size-adjust: 100%;\n        font-family: system-ui, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        touch-action: manipulation;\n      }\n\n      body {\n        position: relative;\n        min-height: 100%;\n        margin: 0;\n        font-feature-settings: "kern";\n      }\n\n      ',
          " :where(*, *::before, *::after) {\n        border-width: 0;\n        border-style: solid;\n        box-sizing: border-box;\n        word-wrap: break-word;\n      }\n\n      main {\n        display: block;\n      }\n\n      ",
          " hr {\n        border-top-width: 1px;\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n      }\n\n      ",
          " :where(pre, code, kbd,samp) {\n        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;\n        font-size: 1em;\n      }\n\n      ",
          " a {\n        background-color: transparent;\n        color: inherit;\n        text-decoration: inherit;\n      }\n\n      ",
          " abbr[title] {\n        border-bottom: none;\n        text-decoration: underline;\n        -webkit-text-decoration: underline dotted;\n        text-decoration: underline dotted;\n      }\n\n      ",
          " :where(b, strong) {\n        font-weight: bold;\n      }\n\n      ",
          " small {\n        font-size: 80%;\n      }\n\n      ",
          " :where(sub,sup) {\n        font-size: 75%;\n        line-height: 0;\n        position: relative;\n        vertical-align: baseline;\n      }\n\n      ",
          " sub {\n        bottom: -0.25em;\n      }\n\n      ",
          " sup {\n        top: -0.5em;\n      }\n\n      ",
          " img {\n        border-style: none;\n      }\n\n      ",
          " :where(button, input, optgroup, select, textarea) {\n        font-family: inherit;\n        font-size: 100%;\n        line-height: 1.15;\n        margin: 0;\n      }\n\n      ",
          " :where(button, input) {\n        overflow: visible;\n      }\n\n      ",
          " :where(button, select) {\n        text-transform: none;\n      }\n\n      ",
          ' :where(\n          button::-moz-focus-inner,\n          [type="button"]::-moz-focus-inner,\n          [type="reset"]::-moz-focus-inner,\n          [type="submit"]::-moz-focus-inner\n        ) {\n        border-style: none;\n        padding: 0;\n      }\n\n      ',
          " fieldset {\n        padding: 0.35em 0.75em 0.625em;\n      }\n\n      ",
          " legend {\n        box-sizing: border-box;\n        color: inherit;\n        display: table;\n        max-width: 100%;\n        padding: 0;\n        white-space: normal;\n      }\n\n      ",
          " progress {\n        vertical-align: baseline;\n      }\n\n      ",
          " textarea {\n        overflow: auto;\n      }\n\n      ",
          ' :where([type="checkbox"], [type="radio"]) {\n        box-sizing: border-box;\n        padding: 0;\n      }\n\n      ',
          ' input[type="number"]::-webkit-inner-spin-button,\n      ',
          ' input[type="number"]::-webkit-outer-spin-button {\n        -webkit-appearance: none !important;\n      }\n\n      ',
          ' input[type="number"] {\n        -moz-appearance: textfield;\n      }\n\n      ',
          ' input[type="search"] {\n        -webkit-appearance: textfield;\n        outline-offset: -2px;\n      }\n\n      ',
          ' input[type="search"]::-webkit-search-decoration {\n        -webkit-appearance: none !important;\n      }\n\n      ',
          " ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit;\n      }\n\n      ",
          " details {\n        display: block;\n      }\n\n      ",
          " summary {\n        display: list-item;\n      }\n\n      template {\n        display: none;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      ",
          " :where(\n          blockquote,\n          dl,\n          dd,\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6,\n          hr,\n          figure,\n          p,\n          pre\n        ) {\n        margin: 0;\n      }\n\n      ",
          " button {\n        background: transparent;\n        padding: 0;\n      }\n\n      ",
          " fieldset {\n        margin: 0;\n        padding: 0;\n      }\n\n      ",
          " :where(ol, ul) {\n        margin: 0;\n        padding: 0;\n      }\n\n      ",
          " textarea {\n        resize: vertical;\n      }\n\n      ",
          ' :where(button, [role="button"]) {\n        cursor: pointer;\n      }\n\n      ',
          " button::-moz-focus-inner {\n        border: 0 !important;\n      }\n\n      ",
          " table {\n        border-collapse: collapse;\n      }\n\n      ",
          " :where(h1, h2, h3, h4, h5, h6) {\n        font-size: inherit;\n        font-weight: inherit;\n      }\n\n      ",
          " :where(button, input, optgroup, select, textarea) {\n        padding: 0;\n        line-height: inherit;\n        color: inherit;\n      }\n\n      ",
          " :where(img, svg, video, canvas, audio, iframe, embed, object) {\n        display: block;\n      }\n\n      ",
          " :where(img, video) {\n        max-width: 100%;\n        height: auto;\n      }\n\n      [data-js-focus-visible]\n        :focus:not([data-focus-visible-added]):not(\n          [data-focus-visible-disabled]\n        ) {\n        outline: none;\n        box-shadow: none;\n      }\n\n      ",
          " select::-ms-expand {\n        display: none;\n      }\n\n      ",
          "\n    ",
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      let s = String.raw,
        d = s(n()),
        c = () => (0, a.jsx)(i.mL, { styles: d }),
        b = (e) => {
          let { scope: r = "" } = e;
          return (0, a.jsx)(i.mL, {
            styles: s(
              l(),
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              r,
              d,
            ),
          });
        };
    },
    50762: (e, r, t) => {
      t.d(r, {
        ToastOptionProvider: () => x,
        ToastProvider: () => y,
        N: () => v,
      });
      var o = t(94799),
        a = t(79872),
        i = t(53738),
        n = t(34023),
        l = t(76749),
        s = t(24335),
        d = t(20019),
        c = t(59660),
        b = t(65329),
        p = t(85547),
        u = t(13331);
      let f = {
          initial: (e) => {
            let { position: r } = e,
              t = ["top", "bottom"].includes(r) ? "y" : "x",
              o = ["top-right", "bottom-right"].includes(r) ? 1 : -1;
            return "bottom" === r && (o = 1), { opacity: 0, [t]: 24 * o };
          },
          animate: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          },
          exit: {
            opacity: 0,
            scale: 0.85,
            transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
          },
        },
        m = (0, n.memo)((e) => {
          let {
              id: r,
              message: t,
              onCloseComplete: a,
              onRequestRemove: i,
              requestClose: m = !1,
              position: h = "bottom",
              duration: g = 5e3,
              containerStyle: x,
              motionVariants: v = f,
              toastSpacing: y = "0.5rem",
            } = e,
            [S, k] = (0, n.useState)(g),
            w = (0, c.tF)();
          (0, l.useUpdateEffect)(() => {
            w || null == a || a();
          }, [w]),
            (0, l.useUpdateEffect)(() => {
              k(g);
            }, [g]);
          let _ = () => {
            w && i();
          };
          (0, n.useEffect)(() => {
            w && m && i();
          }, [w, m, i]),
            (0, s.useTimeout)(_, S);
          let z = (0, n.useMemo)(
              () => ({
                pointerEvents: "auto",
                maxWidth: 560,
                minWidth: 300,
                margin: y,
                ...x,
              }),
              [x, y],
            ),
            C = (0, n.useMemo)(() => (0, p.Tc)(h), [h]);
          return (0, o.jsx)(b.P.div, {
            layout: !0,
            className: "chakra-toast",
            variants: v,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            onHoverStart: () => k(null),
            onHoverEnd: () => k(g),
            custom: { position: h },
            style: C,
            children: (0, o.jsx)(u.chakra.div, {
              role: "status",
              "aria-atomic": "true",
              className: "chakra-toast__inner",
              __css: z,
              children: (0, d.J)(t, { id: r, onClose: _ }),
            }),
          });
        });
      m.displayName = "ToastComponent";
      var h = t(30955),
        g = t(71924);
      let [x, v] = (0, a.createContext)({
          name: "ToastOptionsContext",
          strict: !1,
        }),
        y = (e) => {
          let r = (0, n.useSyncExternalStore)(
              h.toastStore.subscribe,
              h.toastStore.getState,
              h.toastStore.getState,
            ),
            {
              motionVariants: t,
              component: a = m,
              portalProps: l,
              animatePresenceProps: s,
            } = e,
            d = Object.keys(r).map((e) => {
              let n = r[e];
              return (0, o.jsx)(
                "div",
                {
                  role: "region",
                  "aria-live": "polite",
                  "aria-label": "Notifications-".concat(e),
                  id: "chakra-toast-manager-".concat(e),
                  style: (0, p.V1)(e),
                  children: (0, o.jsx)(i.N, {
                    ...s,
                    initial: !1,
                    children: n.map((e) =>
                      (0, o.jsx)(a, { motionVariants: t, ...e }, e.id),
                    ),
                  }),
                },
                e,
              );
            });
          return (0, o.jsx)(g.Portal, { ...l, children: d });
        };
    },
    59382: (e, r, t) => {
      function o(e, r = {}) {
        let t = !1;
        function a(r) {
          let t = (["container", "root"].includes(r ?? "") ? [e] : [e, r])
              .filter(Boolean)
              .join("__"),
            o = `chakra-${t}`;
          return { className: o, selector: `.${o}`, toString: () => r };
        }
        return {
          parts: function (...i) {
            for (let e of (!(function () {
              if (!t) {
                t = !0;
                return;
              }
              throw Error(
                "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?",
              );
            })(),
            i))
              r[e] = a(e);
            return o(e, r);
          },
          toPart: a,
          extend: function (...t) {
            for (let e of t) e in r || (r[e] = a(e));
            return o(e, r);
          },
          selectors: function () {
            return Object.fromEntries(
              Object.entries(r).map(([e, r]) => [e, r.selector]),
            );
          },
          classnames: function () {
            return Object.fromEntries(
              Object.entries(r).map(([e, r]) => [e, r.className]),
            );
          },
          get keys() {
            return Object.keys(r);
          },
          __type: {},
        };
      }
      t.d(r, { $7: () => a6, w4: () => a3 });
      let a = o("accordion").parts(
          "root",
          "container",
          "button",
          "panel",
          "icon",
        ),
        i = o("alert").parts(
          "title",
          "description",
          "container",
          "icon",
          "spinner",
        ),
        n = o("avatar").parts(
          "label",
          "badge",
          "container",
          "excessLabel",
          "group",
        ),
        l = o("breadcrumb").parts("link", "item", "container", "separator");
      o("button").parts();
      let s = o("checkbox").parts("control", "icon", "container", "label");
      o("progress").parts("track", "filledTrack", "label");
      let d = o("drawer").parts(
          "overlay",
          "dialogContainer",
          "dialog",
          "header",
          "closeButton",
          "body",
          "footer",
        ),
        c = o("editable").parts("preview", "input", "textarea"),
        b = o("form").parts("container", "requiredIndicator", "helperText"),
        p = o("formError").parts("text", "icon"),
        u = o("input").parts("addon", "field", "element", "group"),
        f = o("list").parts("container", "item", "icon"),
        m = o("menu").parts(
          "button",
          "list",
          "item",
          "groupTitle",
          "icon",
          "command",
          "divider",
        ),
        h = o("modal").parts(
          "overlay",
          "dialogContainer",
          "dialog",
          "header",
          "closeButton",
          "body",
          "footer",
        ),
        g = o("numberinput").parts("root", "field", "stepperGroup", "stepper");
      o("pininput").parts("field");
      let x = o("popover").parts(
          "content",
          "header",
          "body",
          "footer",
          "popper",
          "arrow",
          "closeButton",
        ),
        v = o("progress").parts("label", "filledTrack", "track"),
        y = o("radio").parts("container", "control", "label"),
        S = o("select").parts("field", "icon"),
        k = o("slider").parts(
          "container",
          "track",
          "thumb",
          "filledTrack",
          "mark",
        ),
        w = o("stat").parts("container", "label", "helpText", "number", "icon"),
        _ = o("switch").parts("container", "track", "thumb", "label"),
        z = o("table").parts(
          "table",
          "thead",
          "tbody",
          "tr",
          "th",
          "td",
          "tfoot",
          "caption",
        ),
        C = o("tabs").parts(
          "root",
          "tab",
          "tablist",
          "tabpanel",
          "tabpanels",
          "indicator",
        ),
        H = o("tag").parts("container", "label", "closeButton"),
        A = o("card").parts("container", "header", "body", "footer");
      o("stepper").parts(
        "stepper",
        "step",
        "title",
        "description",
        "indicator",
        "separator",
        "icon",
        "number",
      );
      var $ = t(2568);
      let { definePartsStyle: P, defineMultiStyleConfig: j } = (0, $.YU)(
          a.keys,
        ),
        F = (0, $.H2)({
          borderTopWidth: "1px",
          borderColor: "inherit",
          _last: { borderBottomWidth: "1px" },
        }),
        D = (0, $.H2)({
          transitionProperty: "common",
          transitionDuration: "normal",
          fontSize: "md",
          _focusVisible: { boxShadow: "outline" },
          _hover: { bg: "blackAlpha.50" },
          _disabled: { opacity: 0.4, cursor: "not-allowed" },
          px: "4",
          py: "2",
        }),
        E = j({
          baseStyle: P({
            container: F,
            button: D,
            panel: (0, $.H2)({ pt: "2", px: "4", pb: "5" }),
            icon: (0, $.H2)({ fontSize: "1.25em" }),
          }),
        });
      var M = t(42139);
      function B(e, r, t) {
        return Math.min(Math.max(e, t), r);
      }
      class V extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`);
        }
      }
      function R(e) {
        if ("string" != typeof e) throw new V(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let r = e.trim();
        r = Y.test(e)
          ? (function (e) {
              let r =
                I[
                  (function (e) {
                    let r = 5381,
                      t = e.length;
                    for (; t; ) r = (33 * r) ^ e.charCodeAt(--t);
                    return (r >>> 0) % 2341;
                  })(e.toLowerCase().trim())
                ];
              if (!r) throw new V(e);
              return `#${r}`;
            })(e)
          : e;
        let t = N.exec(r);
        if (t) {
          let e = Array.from(t).slice(1);
          return [
            ...e.slice(0, 3).map((e) => parseInt(W(e, 2), 16)),
            parseInt(W(e[3] || "f", 2), 16) / 255,
          ];
        }
        let o = U.exec(r);
        if (o) {
          let e = Array.from(o).slice(1);
          return [
            ...e.slice(0, 3).map((e) => parseInt(e, 16)),
            parseInt(e[3] || "ff", 16) / 255,
          ];
        }
        let a = q.exec(r);
        if (a) {
          let e = Array.from(a).slice(1);
          return [
            ...e.slice(0, 3).map((e) => parseInt(e, 10)),
            parseFloat(e[3] || "1"),
          ];
        }
        let i = L.exec(r);
        if (i) {
          let [r, t, o, a] = Array.from(i).slice(1).map(parseFloat);
          if (B(0, 100, t) !== t || B(0, 100, o) !== o) throw new V(e);
          return [...Z(r, t, o), Number.isNaN(a) ? 1 : a];
        }
        throw new V(e);
      }
      let T = (e) => parseInt(e.replace(/_/g, ""), 36),
        I =
          "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm"
            .split(" ")
            .reduce((e, r) => {
              let t = T(r.substring(0, 3)),
                o = T(r.substring(3)).toString(16),
                a = "";
              for (let e = 0; e < 6 - o.length; e++) a += "0";
              return (e[t] = `${a}${o}`), e;
            }, {}),
        W = (e, r) =>
          Array.from(Array(r))
            .map(() => e)
            .join(""),
        N = RegExp(`^#${W("([a-f0-9])", 3)}([a-f0-9])?$`, "i"),
        U = RegExp(`^#${W("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"),
        q = RegExp(
          `^rgba?\\(\\s*(\\d+)\\s*${W(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,
          "i",
        ),
        L =
          /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        Y = /^[a-z]+$/i,
        O = (e) => Math.round(255 * e),
        Z = (e, r, t) => {
          let o = t / 100;
          if (0 === r) return [o, o, o].map(O);
          let a = (((e % 360) + 360) % 360) / 60,
            i = (r / 100) * (1 - Math.abs(2 * o - 1)),
            n = i * (1 - Math.abs((a % 2) - 1)),
            l = 0,
            s = 0,
            d = 0;
          a >= 0 && a < 1
            ? ((l = i), (s = n))
            : a >= 1 && a < 2
              ? ((l = n), (s = i))
              : a >= 2 && a < 3
                ? ((s = i), (d = n))
                : a >= 3 && a < 4
                  ? ((s = n), (d = i))
                  : a >= 4 && a < 5
                    ? ((l = n), (d = i))
                    : a >= 5 && a < 6 && ((l = i), (d = n));
          let c = o - i / 2;
          return [l + c, s + c, d + c].map(O);
        },
        G = (e) => 0 === Object.keys(e).length,
        X = (e, r, t) => {
          let o = (function (e, r, t, o, a) {
            for (o = 0, r = r.split ? r.split(".") : r; o < r.length; o++)
              e = e ? e[r[o]] : void 0;
            return void 0 === e ? t : e;
          })(e, `colors.${r}`, r);
          try {
            return (
              !(function (e) {
                let [r, t, o, a] = R(e),
                  i = (e) => {
                    let r = B(0, 255, e).toString(16);
                    return 1 === r.length ? `0${r}` : r;
                  };
                i(r), i(t), i(o), a < 1 && i(Math.round(255 * a));
              })(o),
              o
            );
          } catch {
            return t ?? "#000000";
          }
        },
        Q = (e) => {
          let [r, t, o] = R(e);
          return (299 * r + 587 * t + 114 * o) / 1e3;
        },
        J = (e) => (r) => (128 > Q(X(r, e)) ? "dark" : "light"),
        K = (e) => (r) => "dark" === J(e)(r),
        ee = (e, r) => (t) =>
          (function (e, r) {
            var t, o, a, i;
            let [n, l, s, d] = R(e);
            return (
              (t = n),
              (o = l),
              (a = s),
              (i = d - r),
              `rgba(${B(0, 255, t).toFixed()}, ${B(0, 255, o).toFixed()}, ${B(0, 255, a).toFixed()}, ${parseFloat(B(0, 1, i).toFixed(3))})`
            );
          })(X(t, e), 1 - r);
      function er(e = "1rem", r = "rgba(255, 255, 255, 0.15)") {
        return {
          backgroundImage: `linear-gradient(
    45deg,
    ${r} 25%,
    transparent 25%,
    transparent 50%,
    ${r} 50%,
    ${r} 75%,
    transparent 75%,
    transparent
  )`,
          backgroundSize: `${e} ${e}`,
        };
      }
      let et = () =>
          `#${Math.floor(0xffffff * Math.random())
            .toString(16)
            .padEnd(6, "0")}`,
        { definePartsStyle: eo, defineMultiStyleConfig: ea } = (0, $.YU)(
          i.keys,
        ),
        ei = (0, M.Vg)("alert-fg"),
        en = (0, M.Vg)("alert-bg"),
        el = eo({
          container: { bg: en.reference, px: "4", py: "3" },
          title: { fontWeight: "bold", lineHeight: "6", marginEnd: "2" },
          description: { lineHeight: "6" },
          icon: {
            color: ei.reference,
            flexShrink: 0,
            marginEnd: "3",
            w: "5",
            h: "6",
          },
          spinner: {
            color: ei.reference,
            flexShrink: 0,
            marginEnd: "3",
            w: "5",
            h: "5",
          },
        });
      function es(e) {
        let { theme: r, colorScheme: t } = e,
          o = ee(`${t}.200`, 0.16)(r);
        return { light: `colors.${t}.100`, dark: o };
      }
      let ed = eo((e) => {
          let { colorScheme: r } = e,
            t = es(e);
          return {
            container: {
              [ei.variable]: `colors.${r}.600`,
              [en.variable]: t.light,
              _dark: {
                [ei.variable]: `colors.${r}.200`,
                [en.variable]: t.dark,
              },
            },
          };
        }),
        ec = eo((e) => {
          let { colorScheme: r } = e,
            t = es(e);
          return {
            container: {
              [ei.variable]: `colors.${r}.600`,
              [en.variable]: t.light,
              _dark: {
                [ei.variable]: `colors.${r}.200`,
                [en.variable]: t.dark,
              },
              paddingStart: "3",
              borderStartWidth: "4px",
              borderStartColor: ei.reference,
            },
          };
        }),
        eb = eo((e) => {
          let { colorScheme: r } = e,
            t = es(e);
          return {
            container: {
              [ei.variable]: `colors.${r}.600`,
              [en.variable]: t.light,
              _dark: {
                [ei.variable]: `colors.${r}.200`,
                [en.variable]: t.dark,
              },
              pt: "2",
              borderTopWidth: "4px",
              borderTopColor: ei.reference,
            },
          };
        }),
        ep = ea({
          baseStyle: el,
          variants: {
            subtle: ed,
            "left-accent": ec,
            "top-accent": eb,
            solid: eo((e) => {
              let { colorScheme: r } = e;
              return {
                container: {
                  [ei.variable]: "colors.white",
                  [en.variable]: `colors.${r}.600`,
                  _dark: {
                    [ei.variable]: "colors.gray.900",
                    [en.variable]: `colors.${r}.200`,
                  },
                  color: ei.reference,
                },
              };
            }),
          },
          defaultProps: { variant: "subtle", colorScheme: "blue" },
        }),
        eu = {
          px: "1px",
          0.5: "0.125rem",
          1: "0.25rem",
          1.5: "0.375rem",
          2: "0.5rem",
          2.5: "0.625rem",
          3: "0.75rem",
          3.5: "0.875rem",
          4: "1rem",
          5: "1.25rem",
          6: "1.5rem",
          7: "1.75rem",
          8: "2rem",
          9: "2.25rem",
          10: "2.5rem",
          12: "3rem",
          14: "3.5rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          28: "7rem",
          32: "8rem",
          36: "9rem",
          40: "10rem",
          44: "11rem",
          48: "12rem",
          52: "13rem",
          56: "14rem",
          60: "15rem",
          64: "16rem",
          72: "18rem",
          80: "20rem",
          96: "24rem",
        },
        ef = {
          ...eu,
          max: "max-content",
          min: "min-content",
          full: "100%",
          "3xs": "14rem",
          "2xs": "16rem",
          xs: "20rem",
          sm: "24rem",
          md: "28rem",
          lg: "32rem",
          xl: "36rem",
          "2xl": "42rem",
          "3xl": "48rem",
          "4xl": "56rem",
          "5xl": "64rem",
          "6xl": "72rem",
          "7xl": "80rem",
          "8xl": "90rem",
          prose: "60ch",
          container: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
        },
        em = (e) => "function" == typeof e;
      function eh(e, ...r) {
        return em(e) ? e(...r) : e;
      }
      let { definePartsStyle: eg, defineMultiStyleConfig: ex } = (0, $.YU)(
          n.keys,
        ),
        ev = (0, M.Vg)("avatar-border-color"),
        ey = (0, M.Vg)("avatar-bg"),
        eS = (0, M.Vg)("avatar-font-size"),
        ek = (0, M.Vg)("avatar-size"),
        ew = (0, $.H2)({
          borderRadius: "full",
          border: "0.2em solid",
          borderColor: ev.reference,
          [ev.variable]: "white",
          _dark: { [ev.variable]: "colors.gray.800" },
        }),
        e_ = (0, $.H2)({
          bg: ey.reference,
          fontSize: eS.reference,
          width: ek.reference,
          height: ek.reference,
          lineHeight: "1",
          [ey.variable]: "colors.gray.200",
          _dark: { [ey.variable]: "colors.whiteAlpha.400" },
        }),
        ez = (0, $.H2)((e) => {
          let { name: r, theme: t } = e,
            o = r
              ? (function (e) {
                  var r;
                  let t = et();
                  return !e || G(e)
                    ? t
                    : e.string && e.colors
                      ? (function (e, r) {
                          let t = 0;
                          if (0 === e.length) return r[0];
                          for (let r = 0; r < e.length; r += 1)
                            (t = e.charCodeAt(r) + ((t << 5) - t)), (t &= t);
                          return (
                            (t = ((t % r.length) + r.length) % r.length), r[t]
                          );
                        })(e.string, e.colors)
                      : e.string && !e.colors
                        ? (function (e) {
                            let r = 0;
                            if (0 === e.length) return r.toString();
                            for (let t = 0; t < e.length; t += 1)
                              (r = e.charCodeAt(t) + ((r << 5) - r)), (r &= r);
                            let t = "#";
                            for (let e = 0; e < 3; e += 1) {
                              let o = (r >> (8 * e)) & 255;
                              t += `00${o.toString(16)}`.substr(-2);
                            }
                            return t;
                          })(e.string)
                        : e.colors && !e.string
                          ? (r = e.colors)[Math.floor(Math.random() * r.length)]
                          : t;
                })({ string: r })
              : "colors.gray.400",
            a = K(o)(t),
            i = "white";
          return (
            a || (i = "gray.800"),
            {
              bg: ey.reference,
              fontSize: eS.reference,
              color: i,
              borderColor: ev.reference,
              verticalAlign: "top",
              width: ek.reference,
              height: ek.reference,
              "&:not([data-loaded])": { [ey.variable]: o },
              [ev.variable]: "colors.white",
              _dark: { [ev.variable]: "colors.gray.800" },
            }
          );
        }),
        eC = (0, $.H2)({ fontSize: eS.reference, lineHeight: "1" });
      function eH(e) {
        let r = "100%" !== e ? ef[e] : void 0;
        return eg({
          container: {
            [ek.variable]: r ?? e,
            [eS.variable]: `calc(${r ?? e} / 2.5)`,
          },
          excessLabel: {
            [ek.variable]: r ?? e,
            [eS.variable]: `calc(${r ?? e} / 2.5)`,
          },
        });
      }
      let eA = ex({
          baseStyle: eg((e) => ({
            badge: eh(ew, e),
            excessLabel: eh(e_, e),
            container: eh(ez, e),
            label: eC,
          })),
          sizes: {
            "2xs": eH(4),
            xs: eH(6),
            sm: eH(8),
            md: eH(12),
            lg: eH(16),
            xl: eH(24),
            "2xl": eH(32),
            full: eH("100%"),
          },
          defaultProps: { size: "md" },
        }),
        e$ = (0, M.lL)("badge", ["bg", "color", "shadow"]),
        eP = (0, $.H2)({
          px: 1,
          textTransform: "uppercase",
          fontSize: "xs",
          borderRadius: "sm",
          fontWeight: "bold",
          bg: e$.bg.reference,
          color: e$.color.reference,
          boxShadow: e$.shadow.reference,
        }),
        ej = (0, $.H2)((e) => {
          let { colorScheme: r, theme: t } = e,
            o = ee(`${r}.500`, 0.6)(t);
          return {
            [e$.bg.variable]: `colors.${r}.500`,
            [e$.color.variable]: "colors.white",
            _dark: {
              [e$.bg.variable]: o,
              [e$.color.variable]: "colors.whiteAlpha.800",
            },
          };
        }),
        eF = (0, $.H2)((e) => {
          let { colorScheme: r, theme: t } = e,
            o = ee(`${r}.200`, 0.16)(t);
          return {
            [e$.bg.variable]: `colors.${r}.100`,
            [e$.color.variable]: `colors.${r}.800`,
            _dark: {
              [e$.bg.variable]: o,
              [e$.color.variable]: `colors.${r}.200`,
            },
          };
        }),
        eD = (0, $.H2)((e) => {
          let { colorScheme: r, theme: t } = e,
            o = ee(`${r}.200`, 0.8)(t);
          return {
            [e$.color.variable]: `colors.${r}.500`,
            _dark: { [e$.color.variable]: o },
            [e$.shadow.variable]: `inset 0 0 0px 1px ${e$.color.reference}`,
          };
        }),
        eE = (0, $.Dt)({
          baseStyle: eP,
          variants: { solid: ej, subtle: eF, outline: eD },
          defaultProps: { variant: "subtle", colorScheme: "gray" },
        }),
        { defineMultiStyleConfig: eM, definePartsStyle: eB } = (0, $.YU)(
          l.keys,
        ),
        eV = (0, M.Vg)("breadcrumb-link-decor"),
        eR = eM({
          baseStyle: eB({
            link: (0, $.H2)({
              transitionProperty: "common",
              transitionDuration: "fast",
              transitionTimingFunction: "ease-out",
              outline: "none",
              color: "inherit",
              textDecoration: eV.reference,
              [eV.variable]: "none",
              "&:not([aria-current=page])": {
                cursor: "pointer",
                _hover: { [eV.variable]: "underline" },
                _focusVisible: { boxShadow: "outline" },
              },
            }),
          }),
        });
      function eT(e, r) {
        return (t) => ("dark" === t.colorMode ? r : e);
      }
      function eI(e) {
        let { orientation: r, vertical: t, horizontal: o } = e;
        return r ? ("vertical" === r ? t : o) : {};
      }
      let eW = (0, $.H2)({
          lineHeight: "1.2",
          borderRadius: "md",
          fontWeight: "semibold",
          transitionProperty: "common",
          transitionDuration: "normal",
          _focusVisible: { boxShadow: "outline" },
          _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
          _hover: { _disabled: { bg: "initial" } },
        }),
        eN = (0, $.H2)((e) => {
          let { colorScheme: r, theme: t } = e;
          if ("gray" === r)
            return {
              color: eT("gray.800", "whiteAlpha.900")(e),
              _hover: { bg: eT("gray.100", "whiteAlpha.200")(e) },
              _active: { bg: eT("gray.200", "whiteAlpha.300")(e) },
            };
          let o = ee(`${r}.200`, 0.12)(t),
            a = ee(`${r}.200`, 0.24)(t);
          return {
            color: eT(`${r}.600`, `${r}.200`)(e),
            bg: "transparent",
            _hover: { bg: eT(`${r}.50`, o)(e) },
            _active: { bg: eT(`${r}.100`, a)(e) },
          };
        }),
        eU = (0, $.H2)((e) => {
          let { colorScheme: r } = e,
            t = eT("gray.200", "whiteAlpha.300")(e);
          return {
            border: "1px solid",
            borderColor: "gray" === r ? t : "currentColor",
            ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
              { marginEnd: "-1px" },
            ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
              { marginBottom: "-1px" },
            ...eh(eN, e),
          };
        }),
        eq = {
          yellow: {
            bg: "yellow.400",
            color: "black",
            hoverBg: "yellow.500",
            activeBg: "yellow.600",
          },
          cyan: {
            bg: "cyan.400",
            color: "black",
            hoverBg: "cyan.500",
            activeBg: "cyan.600",
          },
        },
        eL = (0, $.H2)((e) => {
          let { colorScheme: r } = e;
          if ("gray" === r) {
            let r = eT("gray.100", "whiteAlpha.200")(e);
            return {
              bg: r,
              color: eT("gray.800", "whiteAlpha.900")(e),
              _hover: {
                bg: eT("gray.200", "whiteAlpha.300")(e),
                _disabled: { bg: r },
              },
              _active: { bg: eT("gray.300", "whiteAlpha.400")(e) },
            };
          }
          let {
              bg: t = `${r}.500`,
              color: o = "white",
              hoverBg: a = `${r}.600`,
              activeBg: i = `${r}.700`,
            } = eq[r] ?? {},
            n = eT(t, `${r}.200`)(e);
          return {
            bg: n,
            color: eT(o, "gray.800")(e),
            _hover: { bg: eT(a, `${r}.300`)(e), _disabled: { bg: n } },
            _active: { bg: eT(i, `${r}.400`)(e) },
          };
        }),
        eY = (0, $.H2)((e) => {
          let { colorScheme: r } = e;
          return {
            padding: 0,
            height: "auto",
            lineHeight: "normal",
            verticalAlign: "baseline",
            color: eT(`${r}.500`, `${r}.200`)(e),
            _hover: {
              textDecoration: "underline",
              _disabled: { textDecoration: "none" },
            },
            _active: { color: eT(`${r}.700`, `${r}.500`)(e) },
          };
        }),
        eO = (0, $.H2)({
          bg: "none",
          color: "inherit",
          display: "inline",
          lineHeight: "inherit",
          m: "0",
          p: "0",
        }),
        eZ = {
          lg: (0, $.H2)({ h: "12", minW: "12", fontSize: "lg", px: "6" }),
          md: (0, $.H2)({ h: "10", minW: "10", fontSize: "md", px: "4" }),
          sm: (0, $.H2)({ h: "8", minW: "8", fontSize: "sm", px: "3" }),
          xs: (0, $.H2)({ h: "6", minW: "6", fontSize: "xs", px: "2" }),
        },
        eG = (0, $.Dt)({
          baseStyle: eW,
          variants: {
            ghost: eN,
            outline: eU,
            solid: eL,
            link: eY,
            unstyled: eO,
          },
          sizes: eZ,
          defaultProps: { variant: "solid", size: "md", colorScheme: "gray" },
        }),
        { definePartsStyle: eX, defineMultiStyleConfig: eQ } = (0, $.YU)(
          A.keys,
        ),
        eJ = (0, M.Vg)("card-bg"),
        eK = (0, M.Vg)("card-padding"),
        e0 = (0, M.Vg)("card-shadow"),
        e1 = (0, M.Vg)("card-radius"),
        e2 = (0, M.Vg)("card-border-width", "0"),
        e5 = (0, M.Vg)("card-border-color"),
        e4 = eX({
          container: {
            [eJ.variable]: "colors.chakra-body-bg",
            backgroundColor: eJ.reference,
            boxShadow: e0.reference,
            borderRadius: e1.reference,
            color: "chakra-body-text",
            borderWidth: e2.reference,
            borderColor: e5.reference,
          },
          body: { padding: eK.reference, flex: "1 1 0%" },
          header: { padding: eK.reference },
          footer: { padding: eK.reference },
        }),
        e3 = {
          sm: eX({
            container: {
              [e1.variable]: "radii.base",
              [eK.variable]: "space.3",
            },
          }),
          md: eX({
            container: { [e1.variable]: "radii.md", [eK.variable]: "space.5" },
          }),
          lg: eX({
            container: { [e1.variable]: "radii.xl", [eK.variable]: "space.7" },
          }),
        },
        e6 = eQ({
          baseStyle: e4,
          variants: {
            elevated: eX({
              container: {
                [e0.variable]: "shadows.base",
                _dark: { [eJ.variable]: "colors.gray.700" },
              },
            }),
            outline: eX({
              container: {
                [e2.variable]: "1px",
                [e5.variable]: "colors.chakra-border-color",
              },
            }),
            filled: eX({
              container: { [eJ.variable]: "colors.chakra-subtle-bg" },
            }),
            unstyled: {
              body: { [eK.variable]: 0 },
              header: { [eK.variable]: 0 },
              footer: { [eK.variable]: 0 },
            },
          },
          sizes: e3,
          defaultProps: { variant: "elevated", size: "md" },
        }),
        { definePartsStyle: e9, defineMultiStyleConfig: e7 } = (0, $.YU)(
          s.keys,
        ),
        e8 = (0, M.Vg)("checkbox-size"),
        re = (0, $.H2)((e) => {
          let { colorScheme: r } = e;
          return {
            w: e8.reference,
            h: e8.reference,
            transitionProperty: "box-shadow",
            transitionDuration: "normal",
            border: "2px solid",
            borderRadius: "sm",
            borderColor: "inherit",
            color: "white",
            _checked: {
              bg: eT(`${r}.500`, `${r}.200`)(e),
              borderColor: eT(`${r}.500`, `${r}.200`)(e),
              color: eT("white", "gray.900")(e),
              _hover: {
                bg: eT(`${r}.600`, `${r}.300`)(e),
                borderColor: eT(`${r}.600`, `${r}.300`)(e),
              },
              _disabled: {
                borderColor: eT("gray.200", "transparent")(e),
                bg: eT("gray.200", "whiteAlpha.300")(e),
                color: eT("gray.500", "whiteAlpha.500")(e),
              },
            },
            _indeterminate: {
              bg: eT(`${r}.500`, `${r}.200`)(e),
              borderColor: eT(`${r}.500`, `${r}.200`)(e),
              color: eT("white", "gray.900")(e),
            },
            _disabled: {
              bg: eT("gray.100", "whiteAlpha.100")(e),
              borderColor: eT("gray.100", "transparent")(e),
            },
            _focusVisible: { boxShadow: "outline" },
            _invalid: { borderColor: eT("red.500", "red.300")(e) },
          };
        }),
        rr = (0, $.H2)({ _disabled: { cursor: "not-allowed" } }),
        rt = (0, $.H2)({ userSelect: "none", _disabled: { opacity: 0.4 } }),
        ro = (0, $.H2)({
          transitionProperty: "transform",
          transitionDuration: "normal",
        }),
        ra = e7({
          baseStyle: e9((e) => ({
            icon: ro,
            container: rr,
            control: eh(re, e),
            label: rt,
          })),
          sizes: {
            sm: e9({
              control: { [e8.variable]: "sizes.3" },
              label: { fontSize: "sm" },
              icon: { fontSize: "3xs" },
            }),
            md: e9({
              control: { [e8.variable]: "sizes.4" },
              label: { fontSize: "md" },
              icon: { fontSize: "2xs" },
            }),
            lg: e9({
              control: { [e8.variable]: "sizes.5" },
              label: { fontSize: "lg" },
              icon: { fontSize: "2xs" },
            }),
          },
          defaultProps: { size: "md", colorScheme: "blue" },
        });
      function ri(e) {
        let r = (function (e, r = "-") {
          return e.replace(/\s+/g, r);
        })(e.toString());
        return r.includes("\\.")
          ? e
          : Number.isInteger(parseFloat(e.toString()))
            ? e
            : r.replace(".", "\\.");
      }
      function rn(e, r) {
        var t, o;
        let a = (function (e, r = "") {
          return `--${(function (e, r = "") {
            return [r, ri(e)].filter(Boolean).join("-");
          })(e, r)}`;
        })(e, r?.prefix);
        return {
          variable: a,
          reference:
            ((t = "string" == typeof (o = r?.fallback) ? o : o?.reference),
            `var(${ri(a)}${t ? `, ${t}` : ""})`),
        };
      }
      let rl = rn("close-button-size"),
        rs = rn("close-button-bg"),
        rd = (0, $.H2)({
          w: [rl.reference],
          h: [rl.reference],
          borderRadius: "md",
          transitionProperty: "common",
          transitionDuration: "normal",
          _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
          _hover: {
            [rs.variable]: "colors.blackAlpha.100",
            _dark: { [rs.variable]: "colors.whiteAlpha.100" },
          },
          _active: {
            [rs.variable]: "colors.blackAlpha.200",
            _dark: { [rs.variable]: "colors.whiteAlpha.200" },
          },
          _focusVisible: { boxShadow: "outline" },
          bg: rs.reference,
        }),
        rc = {
          lg: (0, $.H2)({ [rl.variable]: "sizes.10", fontSize: "md" }),
          md: (0, $.H2)({ [rl.variable]: "sizes.8", fontSize: "xs" }),
          sm: (0, $.H2)({ [rl.variable]: "sizes.6", fontSize: "2xs" }),
        },
        rb = (0, $.Dt)({
          baseStyle: rd,
          sizes: rc,
          defaultProps: { size: "md" },
        }),
        { variants: rp, defaultProps: ru } = eE,
        rf = (0, $.H2)({
          fontFamily: "mono",
          fontSize: "sm",
          px: "0.2em",
          borderRadius: "sm",
          bg: e$.bg.reference,
          color: e$.color.reference,
          boxShadow: e$.shadow.reference,
        }),
        rm = (0, $.Dt)({ baseStyle: rf, variants: rp, defaultProps: ru }),
        rh = (0, $.H2)({ w: "100%", mx: "auto", maxW: "prose", px: "4" }),
        rg = (0, $.Dt)({ baseStyle: rh }),
        rx = (0, $.H2)({ opacity: 0.6, borderColor: "inherit" }),
        rv = (0, $.H2)({ borderStyle: "solid" }),
        ry = (0, $.H2)({ borderStyle: "dashed" }),
        rS = (0, $.Dt)({
          baseStyle: rx,
          variants: { solid: rv, dashed: ry },
          defaultProps: { variant: "solid" },
        }),
        { definePartsStyle: rk, defineMultiStyleConfig: rw } = (0, $.YU)(
          d.keys,
        ),
        r_ = (0, M.Vg)("drawer-bg"),
        rz = (0, M.Vg)("drawer-box-shadow");
      function rC(e) {
        return "full" === e
          ? rk({ dialog: { maxW: "100vw", h: "100vh" } })
          : rk({ dialog: { maxW: e } });
      }
      let rH = (0, $.H2)({ bg: "blackAlpha.600", zIndex: "modal" }),
        rA = (0, $.H2)({
          display: "flex",
          zIndex: "modal",
          justifyContent: "center",
        }),
        r$ = (0, $.H2)((e) => {
          let { isFullHeight: r } = e;
          return {
            ...(r && { height: "100vh" }),
            zIndex: "modal",
            maxH: "100vh",
            color: "inherit",
            [r_.variable]: "colors.white",
            [rz.variable]: "shadows.lg",
            _dark: {
              [r_.variable]: "colors.gray.700",
              [rz.variable]: "shadows.dark-lg",
            },
            bg: r_.reference,
            boxShadow: rz.reference,
          };
        }),
        rP = (0, $.H2)({
          px: "6",
          py: "4",
          fontSize: "xl",
          fontWeight: "semibold",
        }),
        rj = (0, $.H2)({ position: "absolute", top: "2", insetEnd: "3" }),
        rF = (0, $.H2)({ px: "6", py: "2", flex: "1", overflow: "auto" }),
        rD = (0, $.H2)({ px: "6", py: "4" }),
        rE = rw({
          baseStyle: rk((e) => ({
            overlay: rH,
            dialogContainer: rA,
            dialog: eh(r$, e),
            header: rP,
            closeButton: rj,
            body: rF,
            footer: rD,
          })),
          sizes: {
            xs: rC("xs"),
            sm: rC("md"),
            md: rC("lg"),
            lg: rC("2xl"),
            xl: rC("4xl"),
            full: rC("full"),
          },
          defaultProps: { size: "xs" },
        }),
        { definePartsStyle: rM, defineMultiStyleConfig: rB } = (0, $.YU)(
          c.keys,
        ),
        rV = (0, $.H2)({
          borderRadius: "md",
          py: "1",
          transitionProperty: "common",
          transitionDuration: "normal",
        }),
        rR = rB({
          baseStyle: rM({
            preview: rV,
            input: (0, $.H2)({
              borderRadius: "md",
              py: "1",
              transitionProperty: "common",
              transitionDuration: "normal",
              width: "full",
              _focusVisible: { boxShadow: "outline" },
              _placeholder: { opacity: 0.6 },
            }),
            textarea: (0, $.H2)({
              borderRadius: "md",
              py: "1",
              transitionProperty: "common",
              transitionDuration: "normal",
              width: "full",
              _focusVisible: { boxShadow: "outline" },
              _placeholder: { opacity: 0.6 },
            }),
          }),
        }),
        { definePartsStyle: rT, defineMultiStyleConfig: rI } = (0, $.YU)(
          b.keys,
        ),
        rW = (0, M.Vg)("form-control-color"),
        rN = rI({
          baseStyle: rT({
            container: { width: "100%", position: "relative" },
            requiredIndicator: (0, $.H2)({
              marginStart: "1",
              [rW.variable]: "colors.red.500",
              _dark: { [rW.variable]: "colors.red.300" },
              color: rW.reference,
            }),
            helperText: (0, $.H2)({
              mt: "2",
              [rW.variable]: "colors.gray.600",
              _dark: { [rW.variable]: "colors.whiteAlpha.600" },
              color: rW.reference,
              lineHeight: "normal",
              fontSize: "sm",
            }),
          }),
        }),
        { definePartsStyle: rU, defineMultiStyleConfig: rq } = (0, $.YU)(
          p.keys,
        ),
        rL = (0, M.Vg)("form-error-color"),
        rY = rq({
          baseStyle: rU({
            text: (0, $.H2)({
              [rL.variable]: "colors.red.500",
              _dark: { [rL.variable]: "colors.red.300" },
              color: rL.reference,
              mt: "2",
              fontSize: "sm",
              lineHeight: "normal",
            }),
            icon: (0, $.H2)({
              marginEnd: "0.5em",
              [rL.variable]: "colors.red.500",
              _dark: { [rL.variable]: "colors.red.300" },
              color: rL.reference,
            }),
          }),
        }),
        rO = (0, $.H2)({
          fontSize: "md",
          marginEnd: "3",
          mb: "2",
          fontWeight: "medium",
          transitionProperty: "common",
          transitionDuration: "normal",
          opacity: 1,
          _disabled: { opacity: 0.4 },
        }),
        rZ = (0, $.Dt)({ baseStyle: rO }),
        rG = (0, $.H2)({ fontFamily: "heading", fontWeight: "bold" }),
        rX = {
          "4xl": (0, $.H2)({ fontSize: ["6xl", null, "7xl"], lineHeight: 1 }),
          "3xl": (0, $.H2)({ fontSize: ["5xl", null, "6xl"], lineHeight: 1 }),
          "2xl": (0, $.H2)({
            fontSize: ["4xl", null, "5xl"],
            lineHeight: [1.2, null, 1],
          }),
          xl: (0, $.H2)({
            fontSize: ["3xl", null, "4xl"],
            lineHeight: [1.33, null, 1.2],
          }),
          lg: (0, $.H2)({
            fontSize: ["2xl", null, "3xl"],
            lineHeight: [1.33, null, 1.2],
          }),
          md: (0, $.H2)({ fontSize: "xl", lineHeight: 1.2 }),
          sm: (0, $.H2)({ fontSize: "md", lineHeight: 1.2 }),
          xs: (0, $.H2)({ fontSize: "sm", lineHeight: 1.2 }),
        },
        rQ = (0, $.Dt)({
          baseStyle: rG,
          sizes: rX,
          defaultProps: { size: "xl" },
        }),
        { definePartsStyle: rJ, defineMultiStyleConfig: rK } = (0, $.YU)(
          u.keys,
        ),
        r0 = (0, M.Vg)("input-height"),
        r1 = (0, M.Vg)("input-font-size"),
        r2 = (0, M.Vg)("input-padding"),
        r5 = (0, M.Vg)("input-border-radius"),
        r4 = rJ({
          addon: {
            height: r0.reference,
            fontSize: r1.reference,
            px: r2.reference,
            borderRadius: r5.reference,
          },
          field: {
            width: "100%",
            height: r0.reference,
            fontSize: r1.reference,
            px: r2.reference,
            borderRadius: r5.reference,
            minWidth: 0,
            outline: 0,
            position: "relative",
            appearance: "none",
            transitionProperty: "common",
            transitionDuration: "normal",
            _disabled: { opacity: 0.4, cursor: "not-allowed" },
          },
        }),
        r3 = {
          lg: (0, $.H2)({
            [r1.variable]: "fontSizes.lg",
            [r2.variable]: "space.4",
            [r5.variable]: "radii.md",
            [r0.variable]: "sizes.12",
          }),
          md: (0, $.H2)({
            [r1.variable]: "fontSizes.md",
            [r2.variable]: "space.4",
            [r5.variable]: "radii.md",
            [r0.variable]: "sizes.10",
          }),
          sm: (0, $.H2)({
            [r1.variable]: "fontSizes.sm",
            [r2.variable]: "space.3",
            [r5.variable]: "radii.sm",
            [r0.variable]: "sizes.8",
          }),
          xs: (0, $.H2)({
            [r1.variable]: "fontSizes.xs",
            [r2.variable]: "space.2",
            [r5.variable]: "radii.sm",
            [r0.variable]: "sizes.6",
          }),
        },
        r6 = {
          lg: rJ({ field: r3.lg, group: r3.lg }),
          md: rJ({ field: r3.md, group: r3.md }),
          sm: rJ({ field: r3.sm, group: r3.sm }),
          xs: rJ({ field: r3.xs, group: r3.xs }),
        };
      function r9(e) {
        let { focusBorderColor: r, errorBorderColor: t } = e;
        return {
          focusBorderColor: r || eT("blue.500", "blue.300")(e),
          errorBorderColor: t || eT("red.500", "red.300")(e),
        };
      }
      let r7 = rJ((e) => {
          let { theme: r } = e,
            { focusBorderColor: t, errorBorderColor: o } = r9(e);
          return {
            field: {
              border: "1px solid",
              borderColor: "inherit",
              bg: "inherit",
              _hover: { borderColor: eT("gray.300", "whiteAlpha.400")(e) },
              _readOnly: { boxShadow: "none !important", userSelect: "all" },
              _invalid: {
                borderColor: X(r, o),
                boxShadow: `0 0 0 1px ${X(r, o)}`,
              },
              _focusVisible: {
                zIndex: 1,
                borderColor: X(r, t),
                boxShadow: `0 0 0 1px ${X(r, t)}`,
              },
            },
            addon: {
              border: "1px solid",
              borderColor: eT("inherit", "whiteAlpha.50")(e),
              bg: eT("gray.100", "whiteAlpha.300")(e),
            },
          };
        }),
        r8 = rJ((e) => {
          let { theme: r } = e,
            { focusBorderColor: t, errorBorderColor: o } = r9(e);
          return {
            field: {
              border: "2px solid",
              borderColor: "transparent",
              bg: eT("gray.100", "whiteAlpha.50")(e),
              _hover: { bg: eT("gray.200", "whiteAlpha.100")(e) },
              _readOnly: { boxShadow: "none !important", userSelect: "all" },
              _invalid: { borderColor: X(r, o) },
              _focusVisible: { bg: "transparent", borderColor: X(r, t) },
            },
            addon: {
              border: "2px solid",
              borderColor: "transparent",
              bg: eT("gray.100", "whiteAlpha.50")(e),
            },
          };
        }),
        te = rJ((e) => {
          let { theme: r } = e,
            { focusBorderColor: t, errorBorderColor: o } = r9(e);
          return {
            field: {
              borderBottom: "1px solid",
              borderColor: "inherit",
              borderRadius: "0",
              px: "0",
              bg: "transparent",
              _readOnly: { boxShadow: "none !important", userSelect: "all" },
              _invalid: {
                borderColor: X(r, o),
                boxShadow: `0px 1px 0px 0px ${X(r, o)}`,
              },
              _focusVisible: {
                borderColor: X(r, t),
                boxShadow: `0px 1px 0px 0px ${X(r, t)}`,
              },
            },
            addon: {
              borderBottom: "2px solid",
              borderColor: "inherit",
              borderRadius: "0",
              px: "0",
              bg: "transparent",
            },
          };
        }),
        tr = rK({
          baseStyle: r4,
          sizes: r6,
          variants: {
            outline: r7,
            filled: r8,
            flushed: te,
            unstyled: rJ({
              field: { bg: "transparent", px: "0", height: "auto" },
              addon: { bg: "transparent", px: "0", height: "auto" },
            }),
          },
          defaultProps: { size: "md", variant: "outline" },
        }),
        tt = (0, M.Vg)("kbd-bg"),
        to = (0, $.H2)({
          [tt.variable]: "colors.gray.100",
          _dark: { [tt.variable]: "colors.whiteAlpha.100" },
          bg: tt.reference,
          borderRadius: "md",
          borderWidth: "1px",
          borderBottomWidth: "3px",
          fontSize: "0.8em",
          fontWeight: "bold",
          lineHeight: "normal",
          px: "0.4em",
          whiteSpace: "nowrap",
        }),
        ta = (0, $.Dt)({ baseStyle: to }),
        ti = (0, $.H2)({
          transitionProperty: "common",
          transitionDuration: "fast",
          transitionTimingFunction: "ease-out",
          cursor: "pointer",
          textDecoration: "none",
          outline: "none",
          color: "inherit",
          _hover: { textDecoration: "underline" },
          _focusVisible: { boxShadow: "outline" },
        }),
        tn = (0, $.Dt)({ baseStyle: ti }),
        { defineMultiStyleConfig: tl, definePartsStyle: ts } = (0, $.YU)(
          f.keys,
        ),
        td = tl({
          baseStyle: ts({
            icon: (0, $.H2)({
              marginEnd: "2",
              display: "inline",
              verticalAlign: "text-bottom",
            }),
          }),
        }),
        { defineMultiStyleConfig: tc, definePartsStyle: tb } = (0, $.YU)(
          m.keys,
        ),
        tp = (0, M.Vg)("menu-bg"),
        tu = (0, M.Vg)("menu-shadow"),
        tf = (0, $.H2)({
          [tp.variable]: "#fff",
          [tu.variable]: "shadows.sm",
          _dark: {
            [tp.variable]: "colors.gray.700",
            [tu.variable]: "shadows.dark-lg",
          },
          color: "inherit",
          minW: "3xs",
          py: "2",
          zIndex: "dropdown",
          borderRadius: "md",
          borderWidth: "1px",
          bg: tp.reference,
          boxShadow: tu.reference,
        }),
        tm = (0, $.H2)({
          py: "1.5",
          px: "3",
          transitionProperty: "background",
          transitionDuration: "ultra-fast",
          transitionTimingFunction: "ease-in",
          _focus: {
            [tp.variable]: "colors.gray.100",
            _dark: { [tp.variable]: "colors.whiteAlpha.100" },
          },
          _active: {
            [tp.variable]: "colors.gray.200",
            _dark: { [tp.variable]: "colors.whiteAlpha.200" },
          },
          _expanded: {
            [tp.variable]: "colors.gray.100",
            _dark: { [tp.variable]: "colors.whiteAlpha.100" },
          },
          _disabled: { opacity: 0.4, cursor: "not-allowed" },
          bg: tp.reference,
        }),
        th = (0, $.H2)({
          mx: 4,
          my: 2,
          fontWeight: "semibold",
          fontSize: "sm",
        }),
        tg = (0, $.H2)({
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }),
        tx = (0, $.H2)({ opacity: 0.6 }),
        tv = (0, $.H2)({
          border: 0,
          borderBottom: "1px solid",
          borderColor: "inherit",
          my: "2",
          opacity: 0.6,
        }),
        ty = tc({
          baseStyle: tb({
            button: (0, $.H2)({
              transitionProperty: "common",
              transitionDuration: "normal",
            }),
            list: tf,
            item: tm,
            groupTitle: th,
            icon: tg,
            command: tx,
            divider: tv,
          }),
        }),
        { defineMultiStyleConfig: tS, definePartsStyle: tk } = (0, $.YU)(
          h.keys,
        ),
        tw = (0, M.Vg)("modal-bg"),
        t_ = (0, M.Vg)("modal-shadow"),
        tz = (0, $.H2)({ bg: "blackAlpha.600", zIndex: "modal" }),
        tC = (0, $.H2)((e) => {
          let { isCentered: r, scrollBehavior: t } = e;
          return {
            display: "flex",
            zIndex: "modal",
            justifyContent: "center",
            alignItems: r ? "center" : "flex-start",
            overflow: "inside" === t ? "hidden" : "auto",
            overscrollBehaviorY: "none",
          };
        }),
        tH = (0, $.H2)((e) => {
          let { isCentered: r, scrollBehavior: t } = e;
          return {
            borderRadius: "md",
            color: "inherit",
            my: r ? "auto" : "16",
            mx: r ? "auto" : void 0,
            zIndex: "modal",
            maxH: "inside" === t ? "calc(100% - 7.5rem)" : void 0,
            [tw.variable]: "colors.white",
            [t_.variable]: "shadows.lg",
            _dark: {
              [tw.variable]: "colors.gray.700",
              [t_.variable]: "shadows.dark-lg",
            },
            bg: tw.reference,
            boxShadow: t_.reference,
          };
        }),
        tA = (0, $.H2)({
          px: "6",
          py: "4",
          fontSize: "xl",
          fontWeight: "semibold",
        }),
        t$ = (0, $.H2)({ position: "absolute", top: "2", insetEnd: "3" }),
        tP = (0, $.H2)((e) => {
          let { scrollBehavior: r } = e;
          return {
            px: "6",
            py: "2",
            flex: "1",
            overflow: "inside" === r ? "auto" : void 0,
          };
        }),
        tj = (0, $.H2)({ px: "6", py: "4" });
      function tF(e) {
        return "full" === e
          ? tk({
              dialog: {
                maxW: "100vw",
                minH: "$100vh",
                my: "0",
                borderRadius: "0",
              },
            })
          : tk({ dialog: { maxW: e } });
      }
      let tD = tS({
        baseStyle: tk((e) => ({
          overlay: tz,
          dialogContainer: eh(tC, e),
          dialog: eh(tH, e),
          header: tA,
          closeButton: t$,
          body: eh(tP, e),
          footer: tj,
        })),
        sizes: {
          xs: tF("xs"),
          sm: tF("sm"),
          md: tF("md"),
          lg: tF("lg"),
          xl: tF("xl"),
          "2xl": tF("2xl"),
          "3xl": tF("3xl"),
          "4xl": tF("4xl"),
          "5xl": tF("5xl"),
          "6xl": tF("6xl"),
          full: tF("full"),
        },
        defaultProps: { size: "md" },
      });
      var tE = t(62917);
      function tM(e) {
        return (0, tE.Gv)(e) && e.reference ? e.reference : String(e);
      }
      let tB = (e, ...r) => r.map(tM).join(` ${e} `).replace(/calc/g, ""),
        tV = (...e) => `calc(${tB("+", ...e)})`,
        tR = (...e) => `calc(${tB("-", ...e)})`,
        tT = (...e) => `calc(${tB("*", ...e)})`,
        tI = (...e) => `calc(${tB("/", ...e)})`,
        tW = (e) => {
          let r = tM(e);
          return null == r || Number.isNaN(parseFloat(r))
            ? tT(r, -1)
            : String(r).startsWith("-")
              ? String(r).slice(1)
              : `-${r}`;
        },
        tN = Object.assign(
          (e) => ({
            add: (...r) => tN(tV(e, ...r)),
            subtract: (...r) => tN(tR(e, ...r)),
            multiply: (...r) => tN(tT(e, ...r)),
            divide: (...r) => tN(tI(e, ...r)),
            negate: () => tN(tW(e)),
            toString: () => e.toString(),
          }),
          { add: tV, subtract: tR, multiply: tT, divide: tI, negate: tW },
        ),
        tU = {
          letterSpacings: {
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em",
          },
          lineHeights: {
            normal: "normal",
            none: 1,
            shorter: 1.25,
            short: 1.375,
            base: 1.5,
            tall: 1.625,
            taller: "2",
            3: ".75rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
          },
          fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
          },
          fonts: {
            heading:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
          },
          fontSizes: {
            "3xs": "0.45rem",
            "2xs": "0.625rem",
            xs: "0.75rem",
            sm: "0.875rem",
            md: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.75rem",
            "7xl": "4.5rem",
            "8xl": "6rem",
            "9xl": "8rem",
          },
        },
        { defineMultiStyleConfig: tq, definePartsStyle: tL } = (0, $.YU)(
          g.keys,
        ),
        tY = rn("number-input-stepper-width"),
        tO = rn("number-input-input-padding"),
        tZ = tN(tY).add("0.5rem").toString(),
        tG = rn("number-input-bg"),
        tX = rn("number-input-color"),
        tQ = rn("number-input-border-color"),
        tJ = (0, $.H2)({ [tY.variable]: "sizes.6", [tO.variable]: tZ }),
        tK = (0, $.H2)((e) => eh(tr.baseStyle, e)?.field ?? {}),
        t0 = (0, $.H2)({ width: tY.reference }),
        t1 = (0, $.H2)({
          borderStart: "1px solid",
          borderStartColor: tQ.reference,
          color: tX.reference,
          bg: tG.reference,
          [tX.variable]: "colors.chakra-body-text",
          [tQ.variable]: "colors.chakra-border-color",
          _dark: {
            [tX.variable]: "colors.whiteAlpha.800",
            [tQ.variable]: "colors.whiteAlpha.300",
          },
          _active: {
            [tG.variable]: "colors.gray.200",
            _dark: { [tG.variable]: "colors.whiteAlpha.300" },
          },
          _disabled: { opacity: 0.4, cursor: "not-allowed" },
        });
      function t2(e) {
        let r = tr.sizes?.[e],
          t = { lg: "md", md: "md", sm: "sm", xs: "sm" },
          o = r.field?.fontSize ?? "md",
          a = tU.fontSizes[o];
        return tL({
          field: {
            ...r.field,
            paddingInlineEnd: tO.reference,
            verticalAlign: "top",
          },
          stepper: {
            fontSize: tN(a).multiply(0.75).toString(),
            _first: { borderTopEndRadius: t[e] },
            _last: {
              borderBottomEndRadius: t[e],
              mt: "-1px",
              borderTopWidth: 1,
            },
          },
        });
      }
      let t5 = tq({
          baseStyle: tL((e) => ({
            root: tJ,
            field: eh(tK, e) ?? {},
            stepperGroup: t0,
            stepper: t1,
          })),
          sizes: { xs: t2("xs"), sm: t2("sm"), md: t2("md"), lg: t2("lg") },
          variants: tr.variants,
          defaultProps: tr.defaultProps,
        }),
        t4 = (0, $.H2)({ ...tr.baseStyle?.field, textAlign: "center" }),
        t3 = {
          lg: (0, $.H2)({ fontSize: "lg", w: 12, h: 12, borderRadius: "md" }),
          md: (0, $.H2)({ fontSize: "md", w: 10, h: 10, borderRadius: "md" }),
          sm: (0, $.H2)({ fontSize: "sm", w: 8, h: 8, borderRadius: "sm" }),
          xs: (0, $.H2)({ fontSize: "xs", w: 6, h: 6, borderRadius: "sm" }),
        },
        t6 = {
          outline: (0, $.H2)((e) => eh(tr.variants?.outline, e)?.field ?? {}),
          flushed: (0, $.H2)((e) => eh(tr.variants?.flushed, e)?.field ?? {}),
          filled: (0, $.H2)((e) => eh(tr.variants?.filled, e)?.field ?? {}),
          unstyled: tr.variants?.unstyled.field ?? {},
        },
        t9 = (0, $.Dt)({
          baseStyle: t4,
          sizes: t3,
          variants: t6,
          defaultProps: tr.defaultProps,
        }),
        { defineMultiStyleConfig: t7, definePartsStyle: t8 } = (0, $.YU)(
          x.keys,
        ),
        oe = rn("popper-bg"),
        or = rn("popper-arrow-bg"),
        ot = rn("popper-arrow-shadow-color"),
        oo = (0, $.H2)({ zIndex: "popover" }),
        oa = (0, $.H2)({
          [oe.variable]: "colors.white",
          bg: oe.reference,
          [or.variable]: oe.reference,
          [ot.variable]: "colors.gray.200",
          _dark: {
            [oe.variable]: "colors.gray.700",
            [ot.variable]: "colors.whiteAlpha.300",
          },
          width: "xs",
          border: "1px solid",
          borderColor: "inherit",
          borderRadius: "md",
          boxShadow: "sm",
          zIndex: "inherit",
          _focusVisible: { outline: 0, boxShadow: "outline" },
        }),
        oi = (0, $.H2)({ px: 3, py: 2, borderBottomWidth: "1px" }),
        on = (0, $.H2)({ px: 3, py: 2 }),
        ol = t7({
          baseStyle: t8({
            popper: oo,
            content: oa,
            header: oi,
            body: on,
            footer: (0, $.H2)({ px: 3, py: 2, borderTopWidth: "1px" }),
            closeButton: (0, $.H2)({
              position: "absolute",
              borderRadius: "md",
              top: 1,
              insetEnd: 2,
              padding: 2,
            }),
          }),
        }),
        { defineMultiStyleConfig: os, definePartsStyle: od } = (0, $.YU)(
          v.keys,
        ),
        oc = (0, $.H2)((e) => {
          let {
              colorScheme: r,
              theme: t,
              isIndeterminate: o,
              hasStripe: a,
            } = e,
            i = eT(er(), er("1rem", "rgba(0,0,0,0.1)"))(e),
            n = eT(`${r}.500`, `${r}.200`)(e),
            l = `linear-gradient(
    to right,
    transparent 0%,
    ${X(t, n)} 50%,
    transparent 100%
  )`;
          return {
            ...(!o && a && i),
            ...(o ? { bgImage: l } : { bgColor: n }),
          };
        }),
        ob = (0, $.H2)({
          lineHeight: "1",
          fontSize: "0.25em",
          fontWeight: "bold",
          color: "white",
        }),
        op = (0, $.H2)((e) => ({ bg: eT("gray.100", "whiteAlpha.300")(e) })),
        ou = (0, $.H2)((e) => ({
          transitionProperty: "common",
          transitionDuration: "slow",
          ...oc(e),
        })),
        of = od((e) => ({ label: ob, filledTrack: ou(e), track: op(e) })),
        om = os({
          sizes: {
            xs: od({ track: { h: "1" } }),
            sm: od({ track: { h: "2" } }),
            md: od({ track: { h: "3" } }),
            lg: od({ track: { h: "4" } }),
          },
          baseStyle: of,
          defaultProps: { size: "md", colorScheme: "blue" },
        }),
        { defineMultiStyleConfig: oh, definePartsStyle: og } = (0, $.YU)(
          y.keys,
        ),
        ox = (0, $.H2)((e) => {
          let r = eh(ra.baseStyle, e)?.control;
          return {
            ...r,
            borderRadius: "full",
            _checked: {
              ...r?._checked,
              _before: {
                content: '""',
                display: "inline-block",
                pos: "relative",
                w: "50%",
                h: "50%",
                borderRadius: "50%",
                bg: "currentColor",
              },
            },
          };
        }),
        ov = oh({
          baseStyle: og((e) => ({
            label: ra.baseStyle?.(e).label,
            container: ra.baseStyle?.(e).container,
            control: ox(e),
          })),
          sizes: {
            md: og({ control: { w: "4", h: "4" }, label: { fontSize: "md" } }),
            lg: og({ control: { w: "5", h: "5" }, label: { fontSize: "lg" } }),
            sm: og({
              control: { width: "3", height: "3" },
              label: { fontSize: "sm" },
            }),
          },
          defaultProps: { size: "md", colorScheme: "blue" },
        }),
        { defineMultiStyleConfig: oy, definePartsStyle: oS } = (0, $.YU)(
          S.keys,
        ),
        ok = (0, M.Vg)("select-bg"),
        ow = oS({
          field: (0, $.H2)({
            ...tr.baseStyle?.field,
            appearance: "none",
            paddingBottom: "1px",
            lineHeight: "normal",
            bg: ok.reference,
            [ok.variable]: "colors.white",
            _dark: { [ok.variable]: "colors.gray.700" },
            "> option, > optgroup": { bg: ok.reference },
          }),
          icon: (0, $.H2)({
            width: "6",
            height: "100%",
            insetEnd: "2",
            position: "relative",
            color: "currentColor",
            fontSize: "xl",
            _disabled: { opacity: 0.5 },
          }),
        }),
        o_ = (0, $.H2)({ paddingInlineEnd: "8" }),
        oz = oy({
          baseStyle: ow,
          sizes: {
            lg: { ...tr.sizes?.lg, field: { ...tr.sizes?.lg.field, ...o_ } },
            md: { ...tr.sizes?.md, field: { ...tr.sizes?.md.field, ...o_ } },
            sm: { ...tr.sizes?.sm, field: { ...tr.sizes?.sm.field, ...o_ } },
            xs: {
              ...tr.sizes?.xs,
              field: { ...tr.sizes?.xs.field, ...o_ },
              icon: { insetEnd: "1" },
            },
          },
          variants: tr.variants,
          defaultProps: tr.defaultProps,
        }),
        oC = (0, M.Vg)("skeleton-start-color"),
        oH = (0, M.Vg)("skeleton-end-color"),
        oA = (0, $.H2)({
          [oC.variable]: "colors.gray.100",
          [oH.variable]: "colors.gray.400",
          _dark: {
            [oC.variable]: "colors.gray.800",
            [oH.variable]: "colors.gray.600",
          },
          background: oC.reference,
          borderColor: oH.reference,
          opacity: 0.7,
          borderRadius: "sm",
        }),
        o$ = (0, $.Dt)({ baseStyle: oA }),
        oP = (0, M.Vg)("skip-link-bg"),
        oj = (0, $.H2)({
          borderRadius: "md",
          fontWeight: "semibold",
          _focusVisible: {
            boxShadow: "outline",
            padding: "4",
            position: "fixed",
            top: "6",
            insetStart: "6",
            [oP.variable]: "colors.white",
            _dark: { [oP.variable]: "colors.gray.700" },
            bg: oP.reference,
          },
        }),
        oF = (0, $.Dt)({ baseStyle: oj });
      var oD = t(26579);
      let { defineMultiStyleConfig: oE, definePartsStyle: oM } = (0, $.YU)(
          k.keys,
        ),
        oB = (0, M.Vg)("slider-thumb-size"),
        oV = (0, M.Vg)("slider-track-size"),
        oR = (0, M.Vg)("slider-bg"),
        oT = (0, $.H2)((e) => {
          let { orientation: r } = e;
          return {
            display: "inline-block",
            position: "relative",
            cursor: "pointer",
            _disabled: {
              opacity: 0.6,
              cursor: "default",
              pointerEvents: "none",
            },
            ...eI({
              orientation: r,
              vertical: {
                h: "100%",
                px: (0, oD._)(oB.reference).divide(2).toString(),
              },
              horizontal: {
                w: "100%",
                py: (0, oD._)(oB.reference).divide(2).toString(),
              },
            }),
          };
        }),
        oI = (0, $.H2)((e) => ({
          ...eI({
            orientation: e.orientation,
            horizontal: { h: oV.reference },
            vertical: { w: oV.reference },
          }),
          overflow: "hidden",
          borderRadius: "sm",
          [oR.variable]: "colors.gray.200",
          _dark: { [oR.variable]: "colors.whiteAlpha.200" },
          _disabled: {
            [oR.variable]: "colors.gray.300",
            _dark: { [oR.variable]: "colors.whiteAlpha.300" },
          },
          bg: oR.reference,
        })),
        oW = (0, $.H2)((e) => {
          let { orientation: r } = e;
          return {
            ...eI({
              orientation: r,
              vertical: {
                left: "50%",
                transform: "translateX(-50%)",
                _active: { transform: "translateX(-50%) scale(1.15)" },
              },
              horizontal: {
                top: "50%",
                transform: "translateY(-50%)",
                _active: { transform: "translateY(-50%) scale(1.15)" },
              },
            }),
            w: oB.reference,
            h: oB.reference,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            outline: 0,
            zIndex: 1,
            borderRadius: "full",
            bg: "white",
            boxShadow: "base",
            border: "1px solid",
            borderColor: "transparent",
            transitionProperty: "transform",
            transitionDuration: "normal",
            _focusVisible: { boxShadow: "outline" },
            _disabled: { bg: "gray.300" },
          };
        }),
        oN = (0, $.H2)((e) => {
          let { colorScheme: r } = e;
          return {
            width: "inherit",
            height: "inherit",
            [oR.variable]: `colors.${r}.500`,
            _dark: { [oR.variable]: `colors.${r}.200` },
            bg: oR.reference,
          };
        }),
        oU = oM((e) => ({
          container: oT(e),
          track: oI(e),
          thumb: oW(e),
          filledTrack: oN(e),
        })),
        oq = oM({
          container: { [oB.variable]: "sizes.4", [oV.variable]: "sizes.1" },
        }),
        oL = oM({
          container: { [oB.variable]: "sizes.3.5", [oV.variable]: "sizes.1" },
        }),
        oY = oE({
          baseStyle: oU,
          sizes: {
            lg: oq,
            md: oL,
            sm: oM({
              container: {
                [oB.variable]: "sizes.2.5",
                [oV.variable]: "sizes.0.5",
              },
            }),
          },
          defaultProps: { size: "md", colorScheme: "blue" },
        }),
        oO = rn("spinner-size"),
        oZ = (0, $.H2)({ width: [oO.reference], height: [oO.reference] }),
        oG = {
          xs: (0, $.H2)({ [oO.variable]: "sizes.3" }),
          sm: (0, $.H2)({ [oO.variable]: "sizes.4" }),
          md: (0, $.H2)({ [oO.variable]: "sizes.6" }),
          lg: (0, $.H2)({ [oO.variable]: "sizes.8" }),
          xl: (0, $.H2)({ [oO.variable]: "sizes.12" }),
        },
        oX = (0, $.Dt)({
          baseStyle: oZ,
          sizes: oG,
          defaultProps: { size: "md" },
        }),
        { defineMultiStyleConfig: oQ, definePartsStyle: oJ } = (0, $.YU)(
          w.keys,
        ),
        oK = (0, $.H2)({ fontWeight: "medium" }),
        o0 = (0, $.H2)({ opacity: 0.8, marginBottom: "2" }),
        o1 = oQ({
          baseStyle: oJ({
            container: {},
            label: oK,
            helpText: o0,
            number: (0, $.H2)({
              verticalAlign: "baseline",
              fontWeight: "semibold",
            }),
            icon: (0, $.H2)({
              marginEnd: 1,
              w: "3.5",
              h: "3.5",
              verticalAlign: "middle",
            }),
          }),
          sizes: {
            md: oJ({
              label: { fontSize: "sm" },
              helpText: { fontSize: "sm" },
              number: { fontSize: "2xl" },
            }),
          },
          defaultProps: { size: "md" },
        }),
        { defineMultiStyleConfig: o2, definePartsStyle: o5 } = (0, $.YU)([
          "stepper",
          "step",
          "title",
          "description",
          "indicator",
          "separator",
          "icon",
          "number",
        ]),
        o4 = (0, M.Vg)("stepper-indicator-size"),
        o3 = (0, M.Vg)("stepper-icon-size"),
        o6 = (0, M.Vg)("stepper-title-font-size"),
        o9 = (0, M.Vg)("stepper-description-font-size"),
        o7 = (0, M.Vg)("stepper-accent-color"),
        o8 = o2({
          baseStyle: o5(({ colorScheme: e }) => ({
            stepper: {
              display: "flex",
              justifyContent: "space-between",
              gap: "4",
              "&[data-orientation=vertical]": {
                flexDirection: "column",
                alignItems: "flex-start",
              },
              "&[data-orientation=horizontal]": {
                flexDirection: "row",
                alignItems: "center",
              },
              [o7.variable]: `colors.${e}.500`,
              _dark: { [o7.variable]: `colors.${e}.200` },
            },
            title: { fontSize: o6.reference, fontWeight: "medium" },
            description: {
              fontSize: o9.reference,
              color: "chakra-subtle-text",
            },
            number: { fontSize: o6.reference },
            step: {
              flexShrink: 0,
              position: "relative",
              display: "flex",
              gap: "2",
              "&[data-orientation=horizontal]": { alignItems: "center" },
              flex: "1",
              "&:last-of-type:not([data-stretch])": { flex: "initial" },
            },
            icon: { flexShrink: 0, width: o3.reference, height: o3.reference },
            indicator: {
              flexShrink: 0,
              borderRadius: "full",
              width: o4.reference,
              height: o4.reference,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&[data-status=active]": {
                borderWidth: "2px",
                borderColor: o7.reference,
              },
              "&[data-status=complete]": {
                bg: o7.reference,
                color: "chakra-inverse-text",
              },
              "&[data-status=incomplete]": { borderWidth: "2px" },
            },
            separator: {
              bg: "chakra-border-color",
              flex: "1",
              "&[data-status=complete]": { bg: o7.reference },
              "&[data-orientation=horizontal]": {
                width: "100%",
                height: "2px",
                marginStart: "2",
              },
              "&[data-orientation=vertical]": {
                width: "2px",
                position: "absolute",
                height: "100%",
                maxHeight: `calc(100% - ${o4.reference} - 8px)`,
                top: `calc(${o4.reference} + 4px)`,
                insetStart: `calc(${o4.reference} / 2 - 1px)`,
              },
            },
          })),
          sizes: {
            xs: o5({
              stepper: {
                [o4.variable]: "sizes.4",
                [o3.variable]: "sizes.3",
                [o6.variable]: "fontSizes.xs",
                [o9.variable]: "fontSizes.xs",
              },
            }),
            sm: o5({
              stepper: {
                [o4.variable]: "sizes.6",
                [o3.variable]: "sizes.4",
                [o6.variable]: "fontSizes.sm",
                [o9.variable]: "fontSizes.xs",
              },
            }),
            md: o5({
              stepper: {
                [o4.variable]: "sizes.8",
                [o3.variable]: "sizes.5",
                [o6.variable]: "fontSizes.md",
                [o9.variable]: "fontSizes.sm",
              },
            }),
            lg: o5({
              stepper: {
                [o4.variable]: "sizes.10",
                [o3.variable]: "sizes.6",
                [o6.variable]: "fontSizes.lg",
                [o9.variable]: "fontSizes.md",
              },
            }),
          },
          defaultProps: { size: "md", colorScheme: "blue" },
        }),
        { defineMultiStyleConfig: ae, definePartsStyle: ar } = (0, $.YU)(
          _.keys,
        ),
        at = rn("switch-track-width"),
        ao = rn("switch-track-height"),
        aa = rn("switch-track-diff"),
        ai = tN.subtract(at, ao),
        an = rn("switch-thumb-x"),
        al = rn("switch-bg"),
        as = (0, $.H2)((e) => {
          let { colorScheme: r } = e;
          return {
            borderRadius: "full",
            p: "0.5",
            width: [at.reference],
            height: [ao.reference],
            transitionProperty: "common",
            transitionDuration: "fast",
            [al.variable]: "colors.gray.300",
            _dark: { [al.variable]: "colors.whiteAlpha.400" },
            _focusVisible: { boxShadow: "outline" },
            _disabled: { opacity: 0.4, cursor: "not-allowed" },
            _checked: {
              [al.variable]: `colors.${r}.500`,
              _dark: { [al.variable]: `colors.${r}.200` },
            },
            bg: al.reference,
          };
        }),
        ad = (0, $.H2)({
          bg: "white",
          transitionProperty: "transform",
          transitionDuration: "normal",
          borderRadius: "inherit",
          width: [ao.reference],
          height: [ao.reference],
          _checked: { transform: `translateX(${an.reference})` },
        }),
        ac = ae({
          baseStyle: ar((e) => ({
            container: {
              [aa.variable]: ai,
              [an.variable]: aa.reference,
              _rtl: { [an.variable]: tN(aa).negate().toString() },
            },
            track: as(e),
            thumb: ad,
          })),
          sizes: {
            sm: ar({
              container: {
                [at.variable]: "1.375rem",
                [ao.variable]: "sizes.3",
              },
            }),
            md: ar({
              container: {
                [at.variable]: "1.875rem",
                [ao.variable]: "sizes.4",
              },
            }),
            lg: ar({
              container: {
                [at.variable]: "2.875rem",
                [ao.variable]: "sizes.6",
              },
            }),
          },
          defaultProps: { size: "md", colorScheme: "blue" },
        }),
        { defineMultiStyleConfig: ab, definePartsStyle: ap } = (0, $.YU)(
          z.keys,
        ),
        au = ap({
          table: {
            fontVariantNumeric: "lining-nums tabular-nums",
            borderCollapse: "collapse",
            width: "full",
          },
          th: {
            fontFamily: "heading",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "wider",
            textAlign: "start",
          },
          td: { textAlign: "start" },
          caption: {
            mt: 4,
            fontFamily: "heading",
            textAlign: "center",
            fontWeight: "medium",
          },
        }),
        af = (0, $.H2)({ "&[data-is-numeric=true]": { textAlign: "end" } }),
        am = ab({
          baseStyle: au,
          variants: {
            simple: ap((e) => {
              let { colorScheme: r } = e;
              return {
                th: {
                  color: eT("gray.600", "gray.400")(e),
                  borderBottom: "1px",
                  borderColor: eT(`${r}.100`, `${r}.700`)(e),
                  ...af,
                },
                td: {
                  borderBottom: "1px",
                  borderColor: eT(`${r}.100`, `${r}.700`)(e),
                  ...af,
                },
                caption: { color: eT("gray.600", "gray.100")(e) },
                tfoot: {
                  tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } },
                },
              };
            }),
            striped: ap((e) => {
              let { colorScheme: r } = e;
              return {
                th: {
                  color: eT("gray.600", "gray.400")(e),
                  borderBottom: "1px",
                  borderColor: eT(`${r}.100`, `${r}.700`)(e),
                  ...af,
                },
                td: {
                  borderBottom: "1px",
                  borderColor: eT(`${r}.100`, `${r}.700`)(e),
                  ...af,
                },
                caption: { color: eT("gray.600", "gray.100")(e) },
                tbody: {
                  tr: {
                    "&:nth-of-type(odd)": {
                      "th, td": {
                        borderBottomWidth: "1px",
                        borderColor: eT(`${r}.100`, `${r}.700`)(e),
                      },
                      td: { background: eT(`${r}.100`, `${r}.700`)(e) },
                    },
                  },
                },
                tfoot: {
                  tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } },
                },
              };
            }),
            unstyled: (0, $.H2)({}),
          },
          sizes: {
            sm: ap({
              th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" },
              td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" },
              caption: { px: "4", py: "2", fontSize: "xs" },
            }),
            md: ap({
              th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" },
              td: { px: "6", py: "4", lineHeight: "5" },
              caption: { px: "6", py: "2", fontSize: "sm" },
            }),
            lg: ap({
              th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" },
              td: { px: "8", py: "5", lineHeight: "6" },
              caption: { px: "6", py: "2", fontSize: "md" },
            }),
          },
          defaultProps: { variant: "simple", size: "md", colorScheme: "gray" },
        }),
        ah = (0, M.Vg)("tabs-color"),
        ag = (0, M.Vg)("tabs-bg"),
        ax = (0, M.Vg)("tabs-border-color"),
        { defineMultiStyleConfig: av, definePartsStyle: ay } = (0, $.YU)(
          C.keys,
        ),
        aS = (0, $.H2)((e) => {
          let { orientation: r } = e;
          return { display: "vertical" === r ? "flex" : "block" };
        }),
        ak = (0, $.H2)((e) => {
          let { isFitted: r } = e;
          return {
            flex: r ? 1 : void 0,
            transitionProperty: "common",
            transitionDuration: "normal",
            _focusVisible: { zIndex: 1, boxShadow: "outline" },
            _disabled: { cursor: "not-allowed", opacity: 0.4 },
          };
        }),
        aw = (0, $.H2)((e) => {
          let { align: r = "start", orientation: t } = e;
          return {
            justifyContent: {
              end: "flex-end",
              center: "center",
              start: "flex-start",
            }[r],
            flexDirection: "vertical" === t ? "column" : "row",
          };
        }),
        a_ = (0, $.H2)({ p: 4 }),
        az = ay((e) => ({
          root: aS(e),
          tab: ak(e),
          tablist: aw(e),
          tabpanel: a_,
        })),
        aC = {
          sm: ay({ tab: { py: 1, px: 4, fontSize: "sm" } }),
          md: ay({ tab: { fontSize: "md", py: 2, px: 4 } }),
          lg: ay({ tab: { fontSize: "lg", py: 3, px: 4 } }),
        },
        aH = ay((e) => {
          let { colorScheme: r, orientation: t } = e,
            o = "vertical" === t,
            a = o ? "borderStart" : "borderBottom";
          return {
            tablist: { [a]: "2px solid", borderColor: "inherit" },
            tab: {
              [a]: "2px solid",
              borderColor: "transparent",
              [o ? "marginStart" : "marginBottom"]: "-2px",
              _selected: {
                [ah.variable]: `colors.${r}.600`,
                _dark: { [ah.variable]: `colors.${r}.300` },
                borderColor: "currentColor",
              },
              _active: {
                [ag.variable]: "colors.gray.200",
                _dark: { [ag.variable]: "colors.whiteAlpha.300" },
              },
              _disabled: { _active: { bg: "none" } },
              color: ah.reference,
              bg: ag.reference,
            },
          };
        }),
        aA = ay((e) => {
          let { colorScheme: r } = e;
          return {
            tab: {
              borderTopRadius: "md",
              border: "1px solid",
              borderColor: "transparent",
              mb: "-1px",
              [ax.variable]: "transparent",
              _selected: {
                [ah.variable]: `colors.${r}.600`,
                [ax.variable]: "colors.white",
                _dark: {
                  [ah.variable]: `colors.${r}.300`,
                  [ax.variable]: "colors.gray.800",
                },
                borderColor: "inherit",
                borderBottomColor: ax.reference,
              },
              color: ah.reference,
            },
            tablist: {
              mb: "-1px",
              borderBottom: "1px solid",
              borderColor: "inherit",
            },
          };
        }),
        a$ = ay((e) => {
          let { colorScheme: r } = e;
          return {
            tab: {
              border: "1px solid",
              borderColor: "inherit",
              [ag.variable]: "colors.gray.50",
              _dark: { [ag.variable]: "colors.whiteAlpha.50" },
              mb: "-1px",
              _notLast: { marginEnd: "-1px" },
              _selected: {
                [ag.variable]: "colors.white",
                [ah.variable]: `colors.${r}.600`,
                _dark: {
                  [ag.variable]: "colors.gray.800",
                  [ah.variable]: `colors.${r}.300`,
                },
                borderColor: "inherit",
                borderTopColor: "currentColor",
                borderBottomColor: "transparent",
              },
              color: ah.reference,
              bg: ag.reference,
            },
            tablist: {
              mb: "-1px",
              borderBottom: "1px solid",
              borderColor: "inherit",
            },
          };
        }),
        aP = ay((e) => {
          let { colorScheme: r, theme: t } = e;
          return {
            tab: {
              borderRadius: "full",
              fontWeight: "semibold",
              color: "gray.600",
              _selected: { color: X(t, `${r}.700`), bg: X(t, `${r}.100`) },
            },
          };
        }),
        aj = ay((e) => {
          let { colorScheme: r } = e;
          return {
            tab: {
              borderRadius: "full",
              fontWeight: "semibold",
              [ah.variable]: "colors.gray.600",
              _dark: { [ah.variable]: "inherit" },
              _selected: {
                [ah.variable]: "colors.white",
                [ag.variable]: `colors.${r}.600`,
                _dark: {
                  [ah.variable]: "colors.gray.800",
                  [ag.variable]: `colors.${r}.300`,
                },
              },
              color: ah.reference,
              bg: ag.reference,
            },
          };
        }),
        aF = av({
          baseStyle: az,
          sizes: aC,
          variants: {
            line: aH,
            enclosed: aA,
            "enclosed-colored": a$,
            "soft-rounded": aP,
            "solid-rounded": aj,
            unstyled: ay({}),
          },
          defaultProps: { size: "md", variant: "line", colorScheme: "blue" },
        }),
        { defineMultiStyleConfig: aD, definePartsStyle: aE } = (0, $.YU)(
          H.keys,
        ),
        aM = (0, M.Vg)("tag-bg"),
        aB = (0, M.Vg)("tag-color"),
        aV = (0, M.Vg)("tag-shadow"),
        aR = (0, M.Vg)("tag-min-height"),
        aT = (0, M.Vg)("tag-min-width"),
        aI = (0, M.Vg)("tag-font-size"),
        aW = (0, M.Vg)("tag-padding-inline"),
        aN = (0, $.H2)({
          fontWeight: "medium",
          lineHeight: 1.2,
          outline: 0,
          [aB.variable]: e$.color.reference,
          [aM.variable]: e$.bg.reference,
          [aV.variable]: e$.shadow.reference,
          color: aB.reference,
          bg: aM.reference,
          boxShadow: aV.reference,
          borderRadius: "md",
          minH: aR.reference,
          minW: aT.reference,
          fontSize: aI.reference,
          px: aW.reference,
          _focusVisible: { [aV.variable]: "shadows.outline" },
        }),
        aU = aE({
          container: aN,
          label: (0, $.H2)({ lineHeight: 1.2, overflow: "visible" }),
          closeButton: (0, $.H2)({
            fontSize: "lg",
            w: "5",
            h: "5",
            transitionProperty: "common",
            transitionDuration: "normal",
            borderRadius: "full",
            marginStart: "1.5",
            marginEnd: "-1",
            opacity: 0.5,
            _disabled: { opacity: 0.4 },
            _focusVisible: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" },
            _hover: { opacity: 0.8 },
            _active: { opacity: 1 },
          }),
        }),
        aq = {
          sm: aE({
            container: {
              [aR.variable]: "sizes.5",
              [aT.variable]: "sizes.5",
              [aI.variable]: "fontSizes.xs",
              [aW.variable]: "space.2",
            },
            closeButton: { marginEnd: "-2px", marginStart: "0.35rem" },
          }),
          md: aE({
            container: {
              [aR.variable]: "sizes.6",
              [aT.variable]: "sizes.6",
              [aI.variable]: "fontSizes.sm",
              [aW.variable]: "space.2",
            },
          }),
          lg: aE({
            container: {
              [aR.variable]: "sizes.8",
              [aT.variable]: "sizes.8",
              [aI.variable]: "fontSizes.md",
              [aW.variable]: "space.3",
            },
          }),
        },
        aL = aD({
          variants: {
            subtle: aE((e) => ({ container: eE.variants?.subtle(e) })),
            solid: aE((e) => ({ container: eE.variants?.solid(e) })),
            outline: aE((e) => ({ container: eE.variants?.outline(e) })),
          },
          baseStyle: aU,
          sizes: aq,
          defaultProps: { size: "md", variant: "subtle", colorScheme: "gray" },
        }),
        aY = (0, $.H2)({
          ...tr.baseStyle?.field,
          paddingY: "2",
          minHeight: "20",
          lineHeight: "short",
          verticalAlign: "top",
        }),
        aO = {
          outline: (0, $.H2)((e) => tr.variants?.outline(e).field ?? {}),
          flushed: (0, $.H2)((e) => tr.variants?.flushed(e).field ?? {}),
          filled: (0, $.H2)((e) => tr.variants?.filled(e).field ?? {}),
          unstyled: tr.variants?.unstyled.field ?? {},
        },
        aZ = {
          xs: tr.sizes?.xs.field ?? {},
          sm: tr.sizes?.sm.field ?? {},
          md: tr.sizes?.md.field ?? {},
          lg: tr.sizes?.lg.field ?? {},
        },
        aG = (0, $.Dt)({
          baseStyle: aY,
          sizes: aZ,
          variants: aO,
          defaultProps: { size: "md", variant: "outline" },
        }),
        aX = rn("tooltip-bg"),
        aQ = rn("tooltip-fg"),
        aJ = rn("popper-arrow-bg"),
        aK = (0, $.H2)({
          bg: aX.reference,
          color: aQ.reference,
          [aX.variable]: "colors.gray.700",
          [aQ.variable]: "colors.whiteAlpha.900",
          _dark: {
            [aX.variable]: "colors.gray.300",
            [aQ.variable]: "colors.gray.900",
          },
          [aJ.variable]: aX.reference,
          px: "2",
          py: "0.5",
          borderRadius: "sm",
          fontWeight: "medium",
          fontSize: "sm",
          boxShadow: "md",
          maxW: "xs",
          zIndex: "tooltip",
        }),
        a0 = (0, $.Dt)({ baseStyle: aK }),
        a1 = {
          breakpoints: {
            base: "0em",
            sm: "30em",
            md: "48em",
            lg: "62em",
            xl: "80em",
            "2xl": "96em",
          },
          zIndices: {
            hide: -1,
            auto: "auto",
            base: 0,
            docked: 10,
            dropdown: 1e3,
            sticky: 1100,
            banner: 1200,
            overlay: 1300,
            modal: 1400,
            popover: 1500,
            skipLink: 1600,
            toast: 1700,
            tooltip: 1800,
          },
          radii: {
            none: "0",
            sm: "0.125rem",
            base: "0.25rem",
            md: "0.375rem",
            lg: "0.5rem",
            xl: "0.75rem",
            "2xl": "1rem",
            "3xl": "1.5rem",
            full: "9999px",
          },
          blur: {
            none: 0,
            sm: "4px",
            base: "8px",
            md: "12px",
            lg: "16px",
            xl: "24px",
            "2xl": "40px",
            "3xl": "64px",
          },
          colors: {
            transparent: "transparent",
            current: "currentColor",
            black: "#000000",
            white: "#FFFFFF",
            whiteAlpha: {
              50: "rgba(255, 255, 255, 0.04)",
              100: "rgba(255, 255, 255, 0.06)",
              200: "rgba(255, 255, 255, 0.08)",
              300: "rgba(255, 255, 255, 0.16)",
              400: "rgba(255, 255, 255, 0.24)",
              500: "rgba(255, 255, 255, 0.36)",
              600: "rgba(255, 255, 255, 0.48)",
              700: "rgba(255, 255, 255, 0.64)",
              800: "rgba(255, 255, 255, 0.80)",
              900: "rgba(255, 255, 255, 0.92)",
            },
            blackAlpha: {
              50: "rgba(0, 0, 0, 0.04)",
              100: "rgba(0, 0, 0, 0.06)",
              200: "rgba(0, 0, 0, 0.08)",
              300: "rgba(0, 0, 0, 0.16)",
              400: "rgba(0, 0, 0, 0.24)",
              500: "rgba(0, 0, 0, 0.36)",
              600: "rgba(0, 0, 0, 0.48)",
              700: "rgba(0, 0, 0, 0.64)",
              800: "rgba(0, 0, 0, 0.80)",
              900: "rgba(0, 0, 0, 0.92)",
            },
            gray: {
              50: "#F7FAFC",
              100: "#EDF2F7",
              200: "#E2E8F0",
              300: "#CBD5E0",
              400: "#A0AEC0",
              500: "#718096",
              600: "#4A5568",
              700: "#2D3748",
              800: "#1A202C",
              900: "#171923",
            },
            red: {
              50: "#FFF5F5",
              100: "#FED7D7",
              200: "#FEB2B2",
              300: "#FC8181",
              400: "#F56565",
              500: "#E53E3E",
              600: "#C53030",
              700: "#9B2C2C",
              800: "#822727",
              900: "#63171B",
            },
            orange: {
              50: "#FFFAF0",
              100: "#FEEBC8",
              200: "#FBD38D",
              300: "#F6AD55",
              400: "#ED8936",
              500: "#DD6B20",
              600: "#C05621",
              700: "#9C4221",
              800: "#7B341E",
              900: "#652B19",
            },
            yellow: {
              50: "#FFFFF0",
              100: "#FEFCBF",
              200: "#FAF089",
              300: "#F6E05E",
              400: "#ECC94B",
              500: "#D69E2E",
              600: "#B7791F",
              700: "#975A16",
              800: "#744210",
              900: "#5F370E",
            },
            green: {
              50: "#F0FFF4",
              100: "#C6F6D5",
              200: "#9AE6B4",
              300: "#68D391",
              400: "#48BB78",
              500: "#38A169",
              600: "#2F855A",
              700: "#276749",
              800: "#22543D",
              900: "#1C4532",
            },
            teal: {
              50: "#E6FFFA",
              100: "#B2F5EA",
              200: "#81E6D9",
              300: "#4FD1C5",
              400: "#38B2AC",
              500: "#319795",
              600: "#2C7A7B",
              700: "#285E61",
              800: "#234E52",
              900: "#1D4044",
            },
            blue: {
              50: "#ebf8ff",
              100: "#bee3f8",
              200: "#90cdf4",
              300: "#63b3ed",
              400: "#4299e1",
              500: "#3182ce",
              600: "#2b6cb0",
              700: "#2c5282",
              800: "#2a4365",
              900: "#1A365D",
            },
            cyan: {
              50: "#EDFDFD",
              100: "#C4F1F9",
              200: "#9DECF9",
              300: "#76E4F7",
              400: "#0BC5EA",
              500: "#00B5D8",
              600: "#00A3C4",
              700: "#0987A0",
              800: "#086F83",
              900: "#065666",
            },
            purple: {
              50: "#FAF5FF",
              100: "#E9D8FD",
              200: "#D6BCFA",
              300: "#B794F4",
              400: "#9F7AEA",
              500: "#805AD5",
              600: "#6B46C1",
              700: "#553C9A",
              800: "#44337A",
              900: "#322659",
            },
            pink: {
              50: "#FFF5F7",
              100: "#FED7E2",
              200: "#FBB6CE",
              300: "#F687B3",
              400: "#ED64A6",
              500: "#D53F8C",
              600: "#B83280",
              700: "#97266D",
              800: "#702459",
              900: "#521B41",
            },
          },
          ...tU,
          sizes: ef,
          shadows: {
            xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
            sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
            inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
            none: "none",
            "dark-lg":
              "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
          },
          space: eu,
          borders: {
            none: 0,
            "1px": "1px solid",
            "2px": "2px solid",
            "4px": "4px solid",
            "8px": "8px solid",
          },
          transition: {
            property: {
              common:
                "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
              colors: "background-color, border-color, color, fill, stroke",
              dimensions: "width, height",
              position: "left, right, top, bottom",
              background:
                "background-color, background-image, background-position",
            },
            easing: {
              "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
              "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
              "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
            },
            duration: {
              "ultra-fast": "50ms",
              faster: "100ms",
              fast: "150ms",
              normal: "200ms",
              slow: "300ms",
              slower: "400ms",
              "ultra-slow": "500ms",
            },
          },
        },
        a2 = {
          colors: {
            "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
            "chakra-body-bg": { _light: "white", _dark: "gray.800" },
            "chakra-border-color": {
              _light: "gray.200",
              _dark: "whiteAlpha.300",
            },
            "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
            "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
            "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
            "chakra-placeholder-color": {
              _light: "gray.500",
              _dark: "whiteAlpha.400",
            },
          },
        },
        a5 = {
          global: {
            body: {
              fontFamily: "body",
              color: "chakra-body-text",
              bg: "chakra-body-bg",
              transitionProperty: "background-color",
              transitionDuration: "normal",
              lineHeight: "base",
            },
            "*::placeholder": { color: "chakra-placeholder-color" },
            "*, *::before, &::after": { borderColor: "chakra-border-color" },
          },
        },
        a4 = {
          useSystemColorMode: !1,
          initialColorMode: "light",
          cssVarPrefix: "chakra",
        },
        a3 = {
          semanticTokens: a2,
          direction: "ltr",
          ...a1,
          components: {
            Accordion: E,
            Alert: ep,
            Avatar: eA,
            Badge: eE,
            Breadcrumb: eR,
            Button: eG,
            Checkbox: ra,
            CloseButton: rb,
            Code: rm,
            Container: rg,
            Divider: rS,
            Drawer: rE,
            Editable: rR,
            Form: rN,
            FormError: rY,
            FormLabel: rZ,
            Heading: rQ,
            Input: tr,
            Kbd: ta,
            Link: tn,
            List: td,
            Menu: ty,
            Modal: tD,
            NumberInput: t5,
            PinInput: t9,
            Popover: ol,
            Progress: om,
            Radio: ov,
            Select: oz,
            Skeleton: o$,
            SkipLink: oF,
            Slider: oY,
            Spinner: oX,
            Stat: o1,
            Switch: ac,
            Table: am,
            Tabs: aF,
            Tag: aL,
            Textarea: aG,
            Tooltip: a0,
            Card: e6,
            Stepper: o8,
          },
          styles: a5,
          config: a4,
        },
        a6 = {
          semanticTokens: a2,
          direction: "ltr",
          components: {},
          ...a1,
          styles: a5,
          config: a4,
        };
    },
    60715: (e, r, t) => {
      t.d(r, { _: () => o });
      function o(e, r) {
        return (
          r || (r = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(r) } }),
          )
        );
      }
    },
    74263: (e, r, t) => {
      t.d(r, {
        cookieStorageManager: () => s,
        cookieStorageManagerSSR: () => d,
        createCookieStorageManager: () => l,
        createLocalStorageManager: () => a,
        localStorageManager: () => i,
      });
      let o = "chakra-ui-color-mode";
      function a(e) {
        return {
          ssr: !1,
          type: "localStorage",
          get(r) {
            var t;
            let o;
            if (
              !(null === (t = globalThis) || void 0 === t ? void 0 : t.document)
            )
              return r;
            try {
              o = localStorage.getItem(e) || r;
            } catch (e) {}
            return o || r;
          },
          set(r) {
            try {
              localStorage.setItem(e, r);
            } catch (e) {}
          },
        };
      }
      let i = a(o);
      function n(e, r) {
        let t = e.match(new RegExp("(^| )".concat(r, "=([^;]+)")));
        return null == t ? void 0 : t[2];
      }
      function l(e, r) {
        return {
          ssr: !!r,
          type: "cookie",
          get(t) {
            var o;
            return r
              ? n(r, e)
              : ((null === (o = globalThis) || void 0 === o
                  ? void 0
                  : o.document) &&
                  n(document.cookie, e)) ||
                  t;
          },
          set(r) {
            document.cookie = ""
              .concat(e, "=")
              .concat(r, "; max-age=31536000; path=/");
          },
        };
      }
      let s = l(o),
        d = (e) => l(o, e);
    },
    82710: (e, r, t) => {
      t.d(r, { AlertIcon: () => l });
      var o = t(94799),
        a = t(49708),
        i = t(16924),
        n = t(13331);
      function l(e) {
        let { status: r } = (0, i.useAlertContext)(),
          t = (0, i.cR)(r),
          l = (0, i.useAlertStyles)(),
          s = "loading" === r ? l.spinner : l.icon;
        return (0, o.jsx)(n.chakra.span, {
          display: "inherit",
          "data-status": r,
          ...e,
          className: (0, a.cx)("chakra-alert__icon", e.className),
          __css: s,
          children: e.children || (0, o.jsx)(t, { h: "100%", w: "100%" }),
        });
      }
      l.displayName = "AlertIcon";
    },
    85547: (e, r, t) => {
      t.d(r, { Tc: () => n, V1: () => l, r3: () => i, xi: () => a });
      let o = (e, r) => e.find((e) => e.id === r);
      function a(e, r) {
        let t = i(e, r),
          o = t ? e[t].findIndex((e) => e.id === r) : -1;
        return { position: t, index: o };
      }
      function i(e, r) {
        for (let [t, a] of Object.entries(e)) if (o(a, r)) return t;
      }
      function n(e) {
        let r = e.includes("right"),
          t = e.includes("left"),
          o = "center";
        return (
          r && (o = "flex-end"),
          t && (o = "flex-start"),
          { display: "flex", flexDirection: "column", alignItems: o }
        );
      }
      function l(e) {
        let r = "top" === e || "bottom" === e,
          t = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
          o = e.includes("bottom")
            ? "env(safe-area-inset-bottom, 0px)"
            : void 0;
        return {
          position: "fixed",
          zIndex: "var(--toast-z-index, 5500)",
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          margin: r ? "0 auto" : void 0,
          top: t,
          bottom: o,
          right: e.includes("left")
            ? void 0
            : "env(safe-area-inset-right, 0px)",
          left: e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)",
        };
      }
    },
    91287: (e, r, t) => {
      t.d(r, { AlertTitle: () => s });
      var o = t(94799),
        a = t(49708),
        i = t(16924),
        n = t(39738),
        l = t(13331);
      let s = (0, n.forwardRef)(function (e, r) {
        let t = (0, i.useAlertStyles)(),
          { status: n } = (0, i.useAlertContext)();
        return (0, o.jsx)(l.chakra.div, {
          ref: r,
          "data-status": n,
          ...e,
          className: (0, a.cx)("chakra-alert__title", e.className),
          __css: t.title,
        });
      });
      s.displayName = "AlertTitle";
    },
    92038: (e, r, t) => {
      t.d(r, { Q: () => b });
      var o = t(94799),
        a = t(30309),
        i = t(49758),
        n = t(67307),
        l = t(22550),
        s = t(62434);
      let d = (e) => {
        let {
            children: r,
            colorModeManager: t,
            portalZIndex: d,
            resetScope: c,
            resetCSS: b = !0,
            theme: p = {},
            environment: u,
            cssVarsRoot: f,
            disableEnvironment: m,
            disableGlobalStyle: h,
          } = e,
          g = (0, o.jsx)(s.EnvironmentProvider, {
            environment: u,
            disabled: m,
            children: r,
          });
        return (0, o.jsx)(n.ThemeProvider, {
          theme: p,
          cssVarsRoot: f,
          children: (0, o.jsxs)(a.ColorModeProvider, {
            colorModeManager: t,
            options: p.config,
            children: [
              b
                ? (0, o.jsx)(i.CSSReset, { scope: c })
                : (0, o.jsx)(i.CSSPolyfill, {}),
              !h && (0, o.jsx)(n.GlobalStyle, {}),
              d ? (0, o.jsx)(l.PortalManager, { zIndex: d, children: g }) : g,
            ],
          }),
        });
      };
      var c = t(50762);
      let b = (e) =>
        function (r) {
          let { children: t, theme: a = e, toastOptions: i, ...n } = r;
          return (0, o.jsxs)(d, {
            theme: a,
            ...n,
            children: [
              (0, o.jsx)(c.ToastOptionProvider, {
                value: null == i ? void 0 : i.defaultOptions,
                children: t,
              }),
              (0, o.jsx)(c.ToastProvider, { ...i }),
            ],
          });
        };
    },
    96107: (e, r, t) => {
      t.d(r, {
        SD: () => s,
        _4: () => l,
        e$: () => i,
        qB: () => n,
        t0: () => a,
      });
      var o = t(67162);
      let a = (0, o.i7)({
          "0%": { strokeDasharray: "1, 400", strokeDashoffset: "0" },
          "50%": { strokeDasharray: "400, 400", strokeDashoffset: "-100" },
          "100%": { strokeDasharray: "400, 400", strokeDashoffset: "-260" },
        }),
        i = (0, o.i7)({
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }),
        n = (0, o.i7)({ "0%": { left: "-40%" }, "100%": { left: "100%" } }),
        l = (0, o.i7)({
          from: { backgroundPosition: "1rem 0" },
          to: { backgroundPosition: "0 0" },
        });
      function s(e) {
        let {
            value: r = 0,
            min: t,
            max: o,
            valueText: a,
            getValueText: i,
            isIndeterminate: n,
            role: l = "progressbar",
          } = e,
          s = ((r - t) * 100) / (o - t);
        return {
          bind: {
            "data-indeterminate": n ? "" : void 0,
            "aria-valuemax": o,
            "aria-valuemin": t,
            "aria-valuenow": n ? void 0 : r,
            "aria-valuetext": (() => {
              if (null != r) return "function" == typeof i ? i(r, s) : a;
            })(),
            role: l,
          },
          percent: s,
          value: r,
        };
      }
    },
  },
]);
