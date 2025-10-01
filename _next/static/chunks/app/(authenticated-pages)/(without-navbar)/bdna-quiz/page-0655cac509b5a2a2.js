(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8829],
  {
    78663: function (e, i, t) {
      Promise.resolve().then(t.bind(t, 79731));
    },
    79731: function (e, i, t) {
      "use strict";
      t.d(i, {
        BdnaQuizContent: function () {
          return f;
        },
      });
      var a = t(24004),
        n = t(585),
        r = t(16407),
        c = t(44982),
        s = t(35138),
        l = t(64147),
        o = t(38912),
        d = t(3466),
        u = t(47056),
        h = t(91351),
        x = t(78381),
        k = t(92832);
      let f = () => {
        let e = (0, o.useRouter)(),
          { sendAnalyticsEvent: i } = (0, h.z)(),
          t = async (t, a) => {
            i(d.iN.ctaClicked.bind(d.iN), u.$.CTA_CLICKED, {
              click_location: "bdna-quiz",
              ...a,
            }),
              e.push(t);
          };
        return (0, a.jsx)(n.xu, {
          height: "100dvh",
          padding: { base: 0, lg: 4 },
          children: (0, a.jsxs)(n.xu, {
            bgColor: "primary.warmGrey.90",
            borderRadius: { lg: "2xl" },
            height: "100%",
            px: { base: 6, md: 8, lg: 12 },
            children: [
              (0, a.jsx)(n.xu, {
                py: { base: 5, lg: 12 },
                children: (0, a.jsx)(r.h, {
                  "aria-label": "Back button",
                  icon: (0, a.jsx)(k.ChevronLeftIcon, { height: 4, width: 4 }),
                  isRound: !0,
                  minWidth: 8,
                  width: 8,
                  height: 8,
                  color: "primary.black.40",
                  bgColor: "primary.white",
                  _hover: { color: "primary.black.10" },
                  onClick: () => {
                    e.back();
                  },
                }),
              }),
              (0, a.jsxs)(n.xu, {
                py: 4,
                children: [
                  (0, a.jsx)(c.x, {
                    textStyle: "display.h4",
                    marginBottom: 8,
                    children: "What can we help you diagnose today?",
                  }),
                  (0, a.jsx)(c.x, {
                    textStyle: "function.text.large",
                    color: "primary.black.40",
                    marginBottom: 4,
                    children:
                      "Pick one to start with, and complete the other later.",
                  }),
                  (0, a.jsxs)(s.k, {
                    gap: 4,
                    flexDirection: { base: "column", md: "row" },
                    children: [
                      (0, a.jsx)(l.default, {
                        "data-testid": "Skin Care Quiz",
                        href: "/bdna-quiz/skincare",
                        style: { width: "100%" },
                        onClick: async (e) => {
                          e.preventDefault(),
                            await t("/bdna-quiz/skincare", {
                              click_name: "My skin",
                            });
                        },
                        children: (0, a.jsx)(x.D, {
                          imageSrc: "/images/quiz/intro-skincare.webp",
                          ctaLabel: "My skin",
                          "data-testid": "Skin Care Quiz",
                        }),
                      }),
                      (0, a.jsx)(l.default, {
                        "data-testid": "Hair Care Quiz",
                        href: "/bdna-quiz/haircare",
                        style: { width: "100%" },
                        onClick: async (e) => {
                          e.preventDefault(),
                            await t("/bdna-quiz/haircare", {
                              click_name: "My hair",
                            });
                        },
                        children: (0, a.jsx)(x.D, {
                          imageSrc: "/images/quiz/intro-haircare.webp",
                          ctaLabel: "My hair",
                          "data-testid": "Hair Care Quiz",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    78381: function (e, i, t) {
      "use strict";
      t.d(i, {
        D: function () {
          return l;
        },
      });
      var a = t(24004),
        n = t(35138),
        r = t(64147),
        c = t(92832),
        s = t(95714);
      let l = (e) => {
        let {
          imageSrc: i,
          ctaLabel: t,
          href: l,
          onMouseEnter: o,
          onClick: d,
        } = e;
        return (0, a.jsx)(n.k, {
          as: l ? r.default : "button",
          backgroundImage: i,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",
          minHeight: 30,
          borderRadius: "2xl",
          padding: 4,
          alignItems: "flex-end",
          onMouseEnter: o,
          onClick: d,
          ...(l ? { href: l } : {}),
          children: (0, a.jsxs)(s.z, {
            as: "span",
            variant: "primaryLight",
            size: "sm",
            children: [
              t,
              (0, a.jsx)(c.ArrowRightIcon, { width: 6, height: 6 }),
            ],
          }),
        });
      };
    },
    35138: function (e, i, t) {
      "use strict";
      t.d(i, {
        k: function () {
          return c;
        },
      });
      var a = t(9232),
        n = t(87342),
        r = t(24004),
        c = (0, a.forwardRef)(function (e, i) {
          let {
            direction: t,
            align: a,
            justify: c,
            wrap: s,
            basis: l,
            grow: o,
            shrink: d,
            ...u
          } = e;
          return (0, r.jsx)(n.chakra.div, {
            ref: i,
            __css: {
              display: "flex",
              flexDirection: t,
              alignItems: a,
              justifyContent: c,
              flexWrap: s,
              flexBasis: l,
              flexGrow: o,
              flexShrink: d,
            },
            ...u,
          });
        });
      c.displayName = "Flex";
    },
  },
  function (e) {
    e.O(0, [2650, 4751, 4147, 5814, 8470, 146, 1744], function () {
      return e((e.s = 78663));
    }),
      (_N_E = e.O());
  },
]);
