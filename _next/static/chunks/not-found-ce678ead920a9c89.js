(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4345],
  {
    1450: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => d, E: () => c });
      var o = r(94799),
        l = r(34023),
        i = r(4130);
      let n = { isDockVisible: !0, logoColor: "white" },
        a = (0, l.createContext)(n),
        s = (0, l.createContext)(() => {}),
        c = () => (0, l.useContext)(s),
        d = (e) => {
          let { children: t, initialState: r = n } = e,
            [i, c] = (0, l.useReducer)(u, r);
          return (0, o.jsx)(a.Provider, {
            value: i,
            children: (0, o.jsx)(s.Provider, { value: c, children: t }),
          });
        },
        u = (e, t) => {
          switch (t.type) {
            case i.R.SetIsDockVisible:
              return { ...e, isDockVisible: t.payload };
            case i.R.SetLogoColor:
              return { ...e, logoColor: t.payload };
            default:
              return e;
          }
        };
    },
    4130: (e, t, r) => {
      "use strict";
      r.d(t, { C: () => l, R: () => o });
      var o = (function (e) {
          return (
            (e.SetIsDockVisible = "SET_IS_DOCK_VISIBLE"),
            (e.SetLogoColor = "SET_LOGO_COLOR"),
            e
          );
        })({}),
        l = (function (e) {
          return (
            (e.ROUTINE_STEPS = "routineSteps"),
            (e.SKIN_CONCERNS = "skinConcerns"),
            (e.BRANDS = "brands"),
            e
          );
        })({});
    },
    11128: (e, t, r) => {
      "use strict";
      r.d(t, { Y: () => o.Header });
      var o = r(49988);
    },
    24297: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 79431));
    },
    49071: (e, t, r) => {
      "use strict";
      r.d(t, { n: () => a });
      var o = r(94799),
        l = r(24689),
        i = r(82536),
        n = r(95785);
      let a = (e) => {
        var t, r;
        let { entry: a, onClick: s } = e,
          { isHaircareDecoded: c, isSkincareDecoded: d } = (0, i.A)(),
          u = a.careType === l.ch.SKINCARE,
          h = a.careType === l.ch.HAIRCARE,
          g = (u && !!d) || (h && !!c);
        return (0, o.jsx)(n.m, {
          imageSrc:
            null !==
              (t = (() => {
                var e, t;
                return g
                  ? null === (e = a.decodedImage) || void 0 === e
                    ? void 0
                    : e.url
                  : null === (t = a.defaultImage) || void 0 === t
                    ? void 0
                    : t.url;
              })()) && void 0 !== t
              ? t
              : "",
          ctaLabel:
            null !==
              (r = (() => {
                var e;
                return g
                  ? a.decodedLabel
                  : null !== (e = a.pluralLabel) && void 0 !== e
                    ? e
                    : a.label;
              })()) && void 0 !== r
              ? r
              : "",
          href: g ? a.decodedLink : a.defaultLink,
          onClick: s,
        });
      };
    },
    74578: (e, t, r) => {
      "use strict";
      r.d(t, { R: () => d });
      var o = r(94799),
        l = r(4306),
        i = r(89136),
        n = r(27357),
        a = r(39693),
        s = r(93869),
        c = r(15231);
      let d = (e) => {
        let {
            title: t,
            description: r,
            retry: d = !1,
            buttonText: u = "Back to home",
            buttonTarget: h = "/",
            buttonCallback: g,
            height: x = "calc(100vh - 80px)",
            children: v,
          } = e,
          b = (0, n.useRouter)();
        return (0, o.jsxs)(l.Box, {
          display: "flex",
          flexDirection: "column",
          gap: 4,
          p: 4,
          alignItems: "center",
          textAlign: "center",
          height: x,
          maxWidth: 122,
          justifyContent: "center",
          margin: "auto",
          children: [
            (0, o.jsx)(a.BDNAIcon, { width: 14, height: 14, color: "black" }),
            (0, o.jsx)(i.Text, {
              textStyle: "display.h4",
              color: "primary.black.10",
              children: t,
            }),
            (0, o.jsx)(i.Text, {
              textStyle: "body.semibold",
              color: "primary.black.40",
              children: r,
            }),
            (0, o.jsx)(s.$, {
              mt: { base: 8, lg: 10 },
              onClick: () =>
                g ? g() : d ? window.location.reload() : b.push(h),
              size: "lg",
              variant: "bdnaFill",
              fullWidth: !0,
              ariaLabel: "".concat(u, " button"),
              "data-testid": "".concat(u, " button"),
              children: d ? "Retry" : u,
            }),
            d &&
              (0, o.jsx)(c.ButtonLink, {
                href: h,
                variant: "secondary",
                size: "lg",
                fullWidth: !0,
                children: u,
              }),
            v,
          ],
        });
      };
    },
    79431: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => g });
      var o = r(94799),
        l = r(4306),
        i = r(34023),
        n = r(92616),
        a = r(17422),
        s = r(57184),
        c = r(11128),
        d = r(74578),
        u = r(1450),
        h = r(4130);
      function g(e) {
        let { includeNavigation: t = !0 } = e,
          r = (0, u.E)(),
          { sendAnalyticsEvent: g } = (0, s.s)();
        (0, i.useEffect)(
          () => (
            r({ type: h.R.SetLogoColor, payload: "black" }),
            () => r({ type: h.R.SetLogoColor, payload: "white" })
          ),
          [r],
        ),
          (0, i.useEffect)(() => {
            g(n.m3.errorEcountered.bind(n.m3), a.s.ERROR_ENCOUNTERED, {
              error_code: "404",
              error_name: "Page not found",
            });
          }, []);
        let x = (0, o.jsx)(d.R, {
          title: "Hmm... looks like things have changed",
          description: "The page you are looking for no longer exists.",
        });
        return t
          ? (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(l.Box, {
                  pos: "relative",
                  zIndex: "sticky",
                  children: (0, o.jsx)(c.Y, {}),
                }),
                x,
              ],
            })
          : x;
      }
    },
    95785: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => c });
      var o = r(94799),
        l = r(31634),
        i = r(36008),
        n = r.n(i),
        a = r(39693),
        s = r(93869);
      let c = (e) => {
        let {
          imageSrc: t,
          ctaLabel: r,
          href: i,
          onMouseEnter: c,
          onClick: d,
        } = e;
        return (0, o.jsx)(l.Flex, {
          as: i ? n() : "button",
          backgroundImage: t,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",
          minHeight: 30,
          borderRadius: "2xl",
          padding: 4,
          alignItems: "flex-end",
          onMouseEnter: c,
          onClick: d,
          ...(i ? { href: i } : {}),
          children: (0, o.jsxs)(s.$, {
            as: "span",
            variant: "primaryLight",
            size: "sm",
            children: [
              r,
              (0, o.jsx)(a.ArrowRightIcon, { width: 6, height: 6 }),
            ],
          }),
        });
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [
        486, 8202, 6292, 3146, 6008, 1268, 992, 6618, 6710, 692, 9976, 248,
        8847, 2801, 1407, 9038, 7100, 5430, 8098, 8173, 5790, 5738, 5398, 7325,
        9988, 7408, 8572, 7358,
      ],
      () => t(24297),
    ),
      (_N_E = e.O());
  },
]);
