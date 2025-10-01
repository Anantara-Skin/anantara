(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4743],
  {
    866: () => {},
    1796: (e, t, r) => {
      "use strict";
      r.d(t, { L: () => i, a: () => n });
      let [n, i] = (0, r(79872).createContext)({
        name: "CheckboxGroupContext",
        strict: !1,
      });
    },
    2348: (e) => {
      e.exports = function (e) {
        return e != e;
      };
    },
    5610: (e, t, r) => {
      "use strict";
      function n(e, t = {}) {
        let r = !1;
        function i(t) {
          let r = (
              ["container", "root"].includes(null != t ? t : "") ? [e] : [e, t]
            )
              .filter(Boolean)
              .join("__"),
            n = `chakra-${r}`;
          return { className: n, selector: `.${n}`, toString: () => t };
        }
        return {
          parts: function (...s) {
            for (let e of (!(function () {
              if (!r) {
                r = !0;
                return;
              }
              throw Error(
                "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?",
              );
            })(),
            s))
              t[e] = i(e);
            return n(e, t);
          },
          toPart: i,
          extend: function (...r) {
            for (let e of r) e in t || (t[e] = i(e));
            return n(e, t);
          },
          selectors: function () {
            return Object.fromEntries(
              Object.entries(t).map(([e, t]) => [e, t.selector]),
            );
          },
          classnames: function () {
            return Object.fromEntries(
              Object.entries(t).map(([e, t]) => [e, t.className]),
            );
          },
          get keys() {
            return Object.keys(t);
          },
          __type: {},
        };
      }
      r.d(t, {
        aH: () => i,
        M9: () => m,
        fZ: () => s,
        Lx: () => a,
        _8: () => o,
        Gq: () => u,
        yj: () => l,
        Pe: () => c,
        Zt: () => h,
        vI: () => d,
        j_: () => f,
        Vg: () => p,
        af: () => y,
      });
      var i = n("accordion")
        .parts("root", "container", "button", "panel")
        .extend("icon");
      n("alert")
        .parts("title", "description", "container")
        .extend("icon", "spinner"),
        n("avatar")
          .parts("label", "badge", "container")
          .extend("excessLabel", "group"),
        n("breadcrumb").parts("link", "item", "container").extend("separator"),
        n("button").parts();
      var s = n("checkbox")
        .parts("control", "icon", "container")
        .extend("label");
      n("progress").parts("track", "filledTrack").extend("label");
      var a = n("drawer")
        .parts("overlay", "dialogContainer", "dialog")
        .extend("header", "closeButton", "body", "footer");
      n("editable").parts("preview", "input", "textarea"),
        n("form").parts("container", "requiredIndicator", "helperText");
      var o = n("formError").parts("text", "icon"),
        u = n("input").parts("addon", "field", "element", "group"),
        l = n("list").parts("container", "item", "icon"),
        c = n("menu")
          .parts("button", "list", "item")
          .extend("groupTitle", "icon", "command", "divider"),
        h = n("modal")
          .parts("overlay", "dialogContainer", "dialog")
          .extend("header", "closeButton", "body", "footer");
      n("numberinput").parts("root", "field", "stepperGroup", "stepper"),
        n("pininput").parts("field");
      var d = n("popover")
          .parts("content", "header", "body", "footer")
          .extend("popper", "arrow", "closeButton"),
        f = n("progress").parts("label", "filledTrack", "track"),
        p = n("radio").parts("container", "control", "label");
      n("select").parts("field", "icon"),
        n("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
        n("stat").parts("container", "label", "helpText", "number", "icon");
      var y = n("switch").parts("container", "track", "thumb", "label");
      n("table").parts(
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
        "tfoot",
        "caption",
      ),
        n("tabs").parts(
          "root",
          "tab",
          "tablist",
          "tabpanel",
          "tabpanels",
          "indicator",
        ),
        n("tag").parts("container", "label", "closeButton");
      var m = n("card").parts("container", "header", "body", "footer");
      n("stepper").parts(
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
    7252: () => {},
    12846: (e, t, r) => {
      "use strict";
      r.d(t, { DrawerContent: () => d });
      var n = r(94799),
        i = r(49708),
        s = r(33014),
        a = r(16774),
        o = r(98671),
        u = r(95468),
        l = r(13331),
        c = r(39738);
      let h = (0, l.chakra)(u.Slide),
        d = (0, c.forwardRef)((e, t) => {
          let {
              className: r,
              children: u,
              motionProps: c,
              containerProps: d,
              ...f
            } = e,
            {
              getDialogProps: p,
              getDialogContainerProps: y,
              isOpen: m,
            } = (0, a.useModalContext)(),
            v = p(f, t),
            x = y(d),
            b = (0, i.cx)("chakra-modal__content", r),
            g = (0, a.useModalStyles)(),
            C = {
              display: "flex",
              flexDirection: "column",
              position: "relative",
              width: "100%",
              outline: 0,
              ...g.dialog,
            },
            k = {
              display: "flex",
              width: "100vw",
              height: "$100vh",
              position: "fixed",
              left: 0,
              top: 0,
              ...g.dialogContainer,
            },
            { placement: q } = (0, s.useDrawerContext)();
          return (0, n.jsx)(o.ModalFocusScope, {
            children: (0, n.jsx)(l.chakra.div, {
              ...x,
              className: "chakra-modal__content-container",
              __css: k,
              children: (0, n.jsx)(h, {
                motionProps: c,
                direction: q,
                in: m,
                className: b,
                ...v,
                __css: C,
                children: u,
              }),
            }),
          });
        });
      d.displayName = "DrawerContent";
    },
    15560: (e, t, r) => {
      var n = r(21432),
        i = r(2348),
        s = r(84056);
      e.exports = function (e, t, r) {
        return t == t ? s(e, t, r) : n(e, i, r);
      };
    },
    16854: () => {},
    21432: (e) => {
      e.exports = function (e, t, r, n) {
        for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
          if (t(e[s], s, e)) return s;
        return -1;
      };
    },
    22924: (e, t, r) => {
      "use strict";
      r.d(t, { Square: () => s });
      var n = r(94799),
        i = r(4306);
      let s = (0, r(39738).forwardRef)(function (e, t) {
        let { size: r, centerContent: s = !0, ...a } = e;
        return (0, n.jsx)(i.Box, {
          ref: t,
          boxSize: r,
          __css: {
            ...(s
              ? {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }
              : {}),
            flexShrink: 0,
            flexGrow: 0,
          },
          ...a,
        });
      });
      s.displayName = "Square";
    },
    31734: (e, t, r) => {
      "use strict";
      r.d(t, { CheckboxIcon: () => o });
      var n = r(94799),
        i = r(13331);
      function s(e) {
        return (0, n.jsx)(i.chakra.svg, {
          width: "1.2em",
          viewBox: "0 0 12 10",
          style: {
            fill: "none",
            strokeWidth: 2,
            stroke: "currentColor",
            strokeDasharray: 16,
          },
          ...e,
          children: (0, n.jsx)("polyline", { points: "1.5 6 4.5 9 10.5 1" }),
        });
      }
      function a(e) {
        return (0, n.jsx)(i.chakra.svg, {
          width: "1.2em",
          viewBox: "0 0 24 24",
          style: { stroke: "currentColor", strokeWidth: 4 },
          ...e,
          children: (0, n.jsx)("line", {
            x1: "21",
            x2: "3",
            y1: "12",
            y2: "12",
          }),
        });
      }
      function o(e) {
        let { isIndeterminate: t, isChecked: r, ...o } = e;
        return r || t
          ? (0, n.jsx)(i.chakra.div, {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              },
              children: (0, n.jsx)(t ? a : s, { ...o }),
            })
          : null;
      }
    },
    33014: (e, t, r) => {
      "use strict";
      r.d(t, { Drawer: () => c, useDrawerContext: () => u });
      var n = r(94799),
        i = r(79872),
        s = r(16774),
        a = r(29968);
      let [o, u] = (0, i.createContext)(),
        l = {
          start: { ltr: "left", rtl: "right" },
          end: { ltr: "right", rtl: "left" },
        };
      function c(e) {
        var t;
        let {
            isOpen: r,
            onClose: i,
            placement: u = "right",
            children: c,
            ...h
          } = e,
          d = (0, a.useTheme)(),
          f = null === (t = d.components) || void 0 === t ? void 0 : t.Drawer,
          p = (function (e, t) {
            var r, n;
            if (e)
              return null !==
                (n = null === (r = l[e]) || void 0 === r ? void 0 : r[t]) &&
                void 0 !== n
                ? n
                : e;
          })(u, d.direction);
        return (0, n.jsx)(o, {
          value: { placement: p },
          children: (0, n.jsx)(s.Modal, {
            isOpen: r,
            onClose: i,
            styleConfig: f,
            ...h,
            children: c,
          }),
        });
      }
    },
    46535: () => {},
    47069: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var n = r(34023),
        i = r(85416),
        s = r(17779);
      class a extends n.Component {
        constructor(e) {
          super(e),
            e.cookies
              ? (this.cookies = e.cookies)
              : (this.cookies = new i.A(void 0, e.defaultSetOptions));
        }
        render() {
          return n.createElement(
            s.Kq,
            { value: this.cookies },
            this.props.children,
          );
        }
      }
    },
    47092: () => {},
    47474: (e) => {
      e.exports = function (e, t, r) {
        for (var n = -1, i = null == e ? 0 : e.length; ++n < i; )
          if (r(t, e[n])) return !0;
        return !1;
      };
    },
    47752: (e, t, r) => {
      var n = r(59254);
      e.exports = function (e) {
        return e && e.length ? n(e) : [];
      };
    },
    56406: (e, t, r) => {
      "use strict";
      r.d(t, { Checkbox: () => C });
      var n = r(94799),
        i = r(26943),
        s = r(63831),
        a = r(47066),
        o = r(49708),
        u = r(67162),
        l = r(34023),
        c = r(1796),
        h = r(31734),
        d = r(47892),
        f = r(39738),
        p = r(98814),
        y = r(13331);
      let m = {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          verticalAlign: "top",
          userSelect: "none",
          flexShrink: 0,
        },
        v = {
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          verticalAlign: "top",
          position: "relative",
        },
        x = (0, u.i7)({
          from: { opacity: 0, strokeDashoffset: 16, transform: "scale(0.95)" },
          to: { opacity: 1, strokeDashoffset: 0, transform: "scale(1)" },
        }),
        b = (0, u.i7)({ from: { opacity: 0 }, to: { opacity: 1 } }),
        g = (0, u.i7)({
          from: { transform: "scaleX(0.65)" },
          to: { transform: "scaleX(1)" },
        }),
        C = (0, f.forwardRef)(function (e, t) {
          let r = (0, c.L)(),
            u = { ...r, ...e },
            f = (0, p.useMultiStyleConfig)("Checkbox", u),
            C = (0, i.M)(e),
            {
              spacing: k = "0.5rem",
              className: q,
              children: j,
              iconColor: w,
              iconSize: O,
              icon: Q = (0, n.jsx)(h.CheckboxIcon, {}),
              isChecked: _,
              isDisabled: D = null == r ? void 0 : r.isDisabled,
              onChange: S,
              inputProps: M,
              ...A
            } = C,
            E = _;
          (null == r ? void 0 : r.value) &&
            C.value &&
            (E = r.value.includes(C.value));
          let I = S;
          (null == r ? void 0 : r.onChange) &&
            C.value &&
            (I = (0, s.O)(r.onChange, S));
          let {
              state: N,
              getInputProps: T,
              getCheckboxProps: P,
              getLabelProps: F,
              getRootProps: H,
            } = (0, d.useCheckbox)({
              ...A,
              isDisabled: D,
              isChecked: E,
              onChange: I,
            }),
            R = (function (e) {
              let [t, r] = (0, l.useState)(e),
                [n, i] = (0, l.useState)(!1);
              return e !== t && (i(!0), r(e)), n;
            })(N.isChecked),
            K = (0, l.useMemo)(
              () => ({
                animation: R
                  ? N.isIndeterminate
                    ? "".concat(b, " 20ms linear, ").concat(g, " 200ms linear")
                    : "".concat(x, " 200ms linear")
                  : void 0,
                ...f.icon,
                ...(0, a.o)({ fontSize: O, color: w }),
              }),
              [w, O, R, N.isIndeterminate, f.icon],
            ),
            B = (0, l.cloneElement)(Q, {
              __css: K,
              isIndeterminate: N.isIndeterminate,
              isChecked: N.isChecked,
            });
          return (0, n.jsxs)(y.chakra.label, {
            __css: { ...v, ...f.container },
            className: (0, o.cx)("chakra-checkbox", q),
            ...H(),
            children: [
              (0, n.jsx)("input", {
                className: "chakra-checkbox__input",
                ...T(M, t),
              }),
              (0, n.jsx)(y.chakra.span, {
                __css: { ...m, ...f.control },
                className: "chakra-checkbox__control",
                ...P(),
                children: B,
              }),
              j &&
                (0, n.jsx)(y.chakra.span, {
                  className: "chakra-checkbox__label",
                  ...F(),
                  __css: { marginStart: k, ...f.label },
                  children: j,
                }),
            ],
          });
        });
      C.displayName = "Checkbox";
    },
    59254: (e, t, r) => {
      var n = r(8940),
        i = r(92282),
        s = r(47474),
        a = r(74356),
        o = r(78434),
        u = r(78500);
      e.exports = function (e, t, r) {
        var l = -1,
          c = i,
          h = e.length,
          d = !0,
          f = [],
          p = f;
        if (r) (d = !1), (c = s);
        else if (h >= 200) {
          var y = t ? null : o(e);
          if (y) return u(y);
          (d = !1), (c = a), (p = new n());
        } else p = t ? [] : f;
        e: for (; ++l < h; ) {
          var m = e[l],
            v = t ? t(m) : m;
          if (((m = r || 0 !== m ? m : 0), d && v == v)) {
            for (var x = p.length; x--; ) if (p[x] === v) continue e;
            t && p.push(v), f.push(m);
          } else c(p, v, r) || (p !== f && p.push(v), f.push(m));
        }
        return f;
      };
    },
    64525: (e, t, r) => {
      "use strict";
      function n(e, t, r) {
        return (
          !(function (e, t, r) {
            let n = t < 0 ? e.length + t : t;
            if (n >= 0 && n < e.length) {
              let n = r < 0 ? e.length + r : r,
                [i] = e.splice(t, 1);
              e.splice(n, 0, i);
            }
          })((e = [...e]), t, r),
          e
        );
      }
      r.d(t, { p: () => n });
    },
    68504: (e, t, r) => {
      "use strict";
      r.d(t, { _: () => c });
      var n,
        i = r(12296),
        s = r(27357),
        a = r(34023),
        o = null != (n = i.A.default) ? n : i.A,
        u = r(85786),
        l = r(94799);
      function c({ children: e, ...t }) {
        return (0, l.jsx)(u.C, {
          value: (function (e) {
            let t = (0, a.useMemo)(() => {
              let t = o({ key: "css", prepend: !0, ...e });
              return (t.compat = !0), t;
            }, [e]);
            return (
              (0, s.useServerInsertedHTML)(() =>
                (0, a.createElement)("style", {
                  key: t.key,
                  "data-emotion": `${t.key} ${Object.keys(t.inserted).join(" ")}`,
                  dangerouslySetInnerHTML: {
                    __html: Object.values(t.inserted).join(" "),
                  },
                }),
              ),
              t
            );
          })(t),
          children: e,
        });
      }
    },
    70369: (e, t, r) => {
      "use strict";
      r.d(t, { Circle: () => s });
      var n = r(94799),
        i = r(22924);
      let s = (0, r(39738).forwardRef)(function (e, t) {
        let { size: r, ...s } = e;
        return (0, n.jsx)(i.Square, {
          size: r,
          ref: t,
          borderRadius: "9999px",
          ...s,
        });
      });
      s.displayName = "Circle";
    },
    76747: () => {},
    78434: (e, t, r) => {
      var n = r(5662),
        i = r(88329),
        s = r(78500);
      e.exports =
        n && 1 / s(new n([, -0]))[1] == 1 / 0
          ? function (e) {
              return new n(e);
            }
          : i;
    },
    84056: (e) => {
      e.exports = function (e, t, r) {
        for (var n = r - 1, i = e.length; ++n < i; ) if (e[n] === t) return n;
        return -1;
      };
    },
    88329: (e) => {
      e.exports = function () {};
    },
    90176: () => {},
    92282: (e, t, r) => {
      var n = r(15560);
      e.exports = function (e, t) {
        return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1;
      };
    },
    95468: (e, t, r) => {
      "use strict";
      r.d(t, { Slide: () => h });
      var n = r(94799),
        i = r(49708),
        s = r(53738),
        a = r(65329),
        o = r(34023),
        u = r(46222);
      let l = {
          exit: { duration: 0.15, ease: u.TRANSITION_EASINGS.easeInOut },
          enter: { type: "spring", damping: 25, stiffness: 180 },
        },
        c = {
          exit: (e) => {
            var t;
            let { direction: r, transition: n, transitionEnd: i, delay: s } = e,
              { exit: a } = (0, u.getSlideTransition)({ direction: r });
            return {
              ...a,
              transition:
                null !== (t = null == n ? void 0 : n.exit) && void 0 !== t
                  ? t
                  : u.withDelay.exit(l.exit, s),
              transitionEnd: null == i ? void 0 : i.exit,
            };
          },
          enter: (e) => {
            var t;
            let { direction: r, transitionEnd: n, transition: i, delay: s } = e,
              { enter: a } = (0, u.getSlideTransition)({ direction: r });
            return {
              ...a,
              transition:
                null !== (t = null == i ? void 0 : i.enter) && void 0 !== t
                  ? t
                  : u.withDelay.enter(l.enter, s),
              transitionEnd: null == n ? void 0 : n.enter,
            };
          },
        },
        h = (0, o.forwardRef)(function (e, t) {
          let {
              direction: r = "right",
              style: o,
              unmountOnExit: l,
              in: h,
              className: d,
              transition: f,
              transitionEnd: p,
              delay: y,
              motionProps: m,
              animatePresenceProps: v,
              ...x
            } = e,
            b = Object.assign(
              { position: "fixed" },
              (0, u.getSlideTransition)({ direction: r }).position,
              o,
            ),
            g = !l || (h && l),
            C = h || l ? "enter" : "exit",
            k = { transitionEnd: p, transition: f, direction: r, delay: y };
          return (0, n.jsx)(s.N, {
            ...v,
            custom: k,
            children:
              g &&
              (0, n.jsx)(a.P.div, {
                ...x,
                ref: t,
                initial: "exit",
                className: (0, i.cx)("chakra-slide", d),
                animate: C,
                exit: "exit",
                custom: k,
                variants: c,
                style: b,
                ...m,
              }),
          });
        });
      h.displayName = "Slide";
    },
    95901: () => {},
    96977: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => p });
      var n = r(54642),
        i = r(79179),
        s = r(75791),
        a = r(56728),
        o = class extends a.Q {
          constructor(e = {}) {
            super(), (this.config = e), (this.#e = new Map());
          }
          #e;
          build(e, t, r) {
            let s = t.queryKey,
              a = t.queryHash ?? (0, n.F$)(s, t),
              o = this.get(a);
            return (
              o ||
                ((o = new i.X({
                  cache: this,
                  queryKey: s,
                  queryHash: a,
                  options: e.defaultQueryOptions(t),
                  state: r,
                  defaultOptions: e.getQueryDefaults(s),
                })),
                this.add(o)),
              o
            );
          }
          add(e) {
            this.#e.has(e.queryHash) ||
              (this.#e.set(e.queryHash, e),
              this.notify({ type: "added", query: e }));
          }
          remove(e) {
            let t = this.#e.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#e.delete(e.queryHash),
              this.notify({ type: "removed", query: e }));
          }
          clear() {
            s.j.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#e.get(e);
          }
          getAll() {
            return [...this.#e.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, n.MK)(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0
              ? t.filter((t) => (0, n.MK)(e, t))
              : t;
          }
          notify(e) {
            s.j.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            s.j.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            s.j.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        u = r(17918),
        l = class extends a.Q {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#t = new Map()),
              (this.#r = Date.now());
          }
          #t;
          #r;
          build(e, t, r) {
            let n = new u.s({
              mutationCache: this,
              mutationId: ++this.#r,
              options: e.defaultMutationOptions(t),
              state: r,
            });
            return this.add(n), n;
          }
          add(e) {
            let t = c(e),
              r = this.#t.get(t) ?? [];
            r.push(e),
              this.#t.set(t, r),
              this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            let t = c(e);
            if (this.#t.has(t)) {
              let r = this.#t.get(t)?.filter((t) => t !== e);
              r && (0 === r.length ? this.#t.delete(t) : this.#t.set(t, r));
            }
            this.notify({ type: "removed", mutation: e });
          }
          canRun(e) {
            let t = this.#t
              .get(c(e))
              ?.find((e) => "pending" === e.state.status);
            return !t || t === e;
          }
          runNext(e) {
            let t = this.#t.get(c(e))?.find((t) => t !== e && t.state.isPaused);
            return t?.continue() ?? Promise.resolve();
          }
          clear() {
            s.j.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          getAll() {
            return [...this.#t.values()].flat();
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, n.nJ)(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => (0, n.nJ)(e, t));
          }
          notify(e) {
            s.j.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return s.j.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(n.lQ))),
            );
          }
        };
      function c(e) {
        return e.options.scope?.id ?? String(e.mutationId);
      }
      var h = r(94786),
        d = r(26753),
        f = r(43277),
        p = class {
          #n;
          #i;
          #s;
          #a;
          #o;
          #u;
          #l;
          #c;
          constructor(e = {}) {
            (this.#n = e.queryCache || new o()),
              (this.#i = e.mutationCache || new l()),
              (this.#s = e.defaultOptions || {}),
              (this.#a = new Map()),
              (this.#o = new Map()),
              (this.#u = 0);
          }
          mount() {
            this.#u++,
              1 === this.#u &&
                ((this.#l = h.m.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#n.onFocus());
                })),
                (this.#c = d.t.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#n.onOnline());
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
          isFetching(e) {
            return this.#n.findAll({ ...e, fetchStatus: "fetching" }).length;
          }
          isMutating(e) {
            return this.#i.findAll({ ...e, status: "pending" }).length;
          }
          getQueryData(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#n.get(t.queryHash)?.state.data;
          }
          ensureQueryData(e) {
            let t = this.getQueryData(e.queryKey);
            if (void 0 === t) return this.fetchQuery(e);
            {
              let r = this.defaultQueryOptions(e),
                n = this.#n.build(this, r);
              return (
                e.revalidateIfStale &&
                  n.isStaleByTime(r.staleTime) &&
                  this.prefetchQuery(r),
                Promise.resolve(t)
              );
            }
          }
          getQueriesData(e) {
            return this.#n
              .findAll(e)
              .map(({ queryKey: e, state: t }) => [e, t.data]);
          }
          setQueryData(e, t, r) {
            let i = this.defaultQueryOptions({ queryKey: e }),
              s = this.#n.get(i.queryHash),
              a = s?.state.data,
              o = (0, n.Zw)(t, a);
            if (void 0 !== o)
              return this.#n.build(this, i).setData(o, { ...r, manual: !0 });
          }
          setQueriesData(e, t, r) {
            return s.j.batch(() =>
              this.#n
                .findAll(e)
                .map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)]),
            );
          }
          getQueryState(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#n.get(t.queryHash)?.state;
          }
          removeQueries(e) {
            let t = this.#n;
            s.j.batch(() => {
              t.findAll(e).forEach((e) => {
                t.remove(e);
              });
            });
          }
          resetQueries(e, t) {
            let r = this.#n,
              n = { type: "active", ...e };
            return s.j.batch(
              () => (
                r.findAll(e).forEach((e) => {
                  e.reset();
                }),
                this.refetchQueries(n, t)
              ),
            );
          }
          cancelQueries(e = {}, t = {}) {
            let r = { revert: !0, ...t };
            return Promise.all(
              s.j.batch(() => this.#n.findAll(e).map((e) => e.cancel(r))),
            )
              .then(n.lQ)
              .catch(n.lQ);
          }
          invalidateQueries(e = {}, t = {}) {
            return s.j.batch(() => {
              if (
                (this.#n.findAll(e).forEach((e) => {
                  e.invalidate();
                }),
                "none" === e.refetchType)
              )
                return Promise.resolve();
              let r = { ...e, type: e.refetchType ?? e.type ?? "active" };
              return this.refetchQueries(r, t);
            });
          }
          refetchQueries(e = {}, t) {
            let r = { ...t, cancelRefetch: t?.cancelRefetch ?? !0 };
            return Promise.all(
              s.j.batch(() =>
                this.#n
                  .findAll(e)
                  .filter((e) => !e.isDisabled())
                  .map((e) => {
                    let t = e.fetch(void 0, r);
                    return (
                      r.throwOnError || (t = t.catch(n.lQ)),
                      "paused" === e.state.fetchStatus ? Promise.resolve() : t
                    );
                  }),
              ),
            ).then(n.lQ);
          }
          fetchQuery(e) {
            let t = this.defaultQueryOptions(e);
            void 0 === t.retry && (t.retry = !1);
            let r = this.#n.build(this, t);
            return r.isStaleByTime(t.staleTime)
              ? r.fetch(t)
              : Promise.resolve(r.state.data);
          }
          prefetchQuery(e) {
            return this.fetchQuery(e).then(n.lQ).catch(n.lQ);
          }
          fetchInfiniteQuery(e) {
            return (e.behavior = (0, f.PL)(e.pages)), this.fetchQuery(e);
          }
          prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(n.lQ).catch(n.lQ);
          }
          resumePausedMutations() {
            return d.t.isOnline()
              ? this.#i.resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return this.#n;
          }
          getMutationCache() {
            return this.#i;
          }
          getDefaultOptions() {
            return this.#s;
          }
          setDefaultOptions(e) {
            this.#s = e;
          }
          setQueryDefaults(e, t) {
            this.#a.set((0, n.EN)(e), { queryKey: e, defaultOptions: t });
          }
          getQueryDefaults(e) {
            let t = [...this.#a.values()],
              r = {};
            return (
              t.forEach((t) => {
                (0, n.Cp)(e, t.queryKey) && (r = { ...r, ...t.defaultOptions });
              }),
              r
            );
          }
          setMutationDefaults(e, t) {
            this.#o.set((0, n.EN)(e), { mutationKey: e, defaultOptions: t });
          }
          getMutationDefaults(e) {
            let t = [...this.#o.values()],
              r = {};
            return (
              t.forEach((t) => {
                (0, n.Cp)(e, t.mutationKey) &&
                  (r = { ...r, ...t.defaultOptions });
              }),
              r
            );
          }
          defaultQueryOptions(e) {
            if (e._defaulted) return e;
            let t = {
              ...this.#s.queries,
              ...this.getQueryDefaults(e.queryKey),
              ...e,
              _defaulted: !0,
            };
            return (
              t.queryHash || (t.queryHash = (0, n.F$)(t.queryKey, t)),
              void 0 === t.refetchOnReconnect &&
                (t.refetchOnReconnect = "always" !== t.networkMode),
              void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
              !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
              !0 !== t.enabled && t.queryFn === n.hT && (t.enabled = !1),
              t
            );
          }
          defaultMutationOptions(e) {
            return e?._defaulted
              ? e
              : {
                  ...this.#s.mutations,
                  ...(e?.mutationKey &&
                    this.getMutationDefaults(e.mutationKey)),
                  ...e,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#n.clear(), this.#i.clear();
          }
        };
    },
  },
]);
