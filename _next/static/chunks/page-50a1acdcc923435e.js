(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7049],
  {
    25864: (e, i, a) => {
      "use strict";
      a.d(i, { BdnaQuizContent: () => g });
      var t = a(94799),
        r = a(4306),
        n = a(24854),
        s = a(89136),
        l = a(31634),
        c = a(36008),
        o = a.n(c),
        d = a(27357),
        h = a(92616),
        u = a(17422),
        x = a(57184),
        m = a(95785),
        b = a(39693);
      let g = () => {
        let e = (0, d.useRouter)(),
          { sendAnalyticsEvent: i } = (0, x.s)(),
          a = async (a, t) => {
            i(h.m3.ctaClicked.bind(h.m3), u.s.CTA_CLICKED, {
              click_location: "bdna-quiz",
              ...t,
            }),
              e.push(a);
          };
        return (0, t.jsx)(r.Box, {
          height: "100dvh",
          padding: { base: 0, lg: 4 },
          children: (0, t.jsxs)(r.Box, {
            bgColor: "primary.warmGrey.90",
            borderRadius: { lg: "2xl" },
            height: "100%",
            px: { base: 6, md: 8, lg: 12 },
            children: [
              (0, t.jsx)(r.Box, {
                py: { base: 5, lg: 12 },
                children: (0, t.jsx)(n.IconButton, {
                  "aria-label": "Back button",
                  icon: (0, t.jsx)(b.ChevronLeftIcon, { height: 4, width: 4 }),
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
              (0, t.jsxs)(r.Box, {
                py: 4,
                children: [
                  (0, t.jsx)(s.Text, {
                    textStyle: "display.h4",
                    marginBottom: 8,
                    children: "What can we help you diagnose today?",
                  }),
                  (0, t.jsx)(s.Text, {
                    textStyle: "function.text.large",
                    color: "primary.black.40",
                    marginBottom: 4,
                    children:
                      "Pick one to start with, and complete the other later.",
                  }),
                  (0, t.jsxs)(l.Flex, {
                    gap: 4,
                    flexDirection: { base: "column", md: "row" },
                    children: [
                      (0, t.jsx)(o(), {
                        "data-testid": "Skin Care Quiz",
                        href: "/bdna-quiz/skincare",
                        style: { width: "100%" },
                        onClick: async (e) => {
                          e.preventDefault(),
                            await a("/bdna-quiz/skincare", {
                              click_name: "My skin",
                            });
                        },
                        children: (0, t.jsx)(m.m, {
                          imageSrc: "/images/quiz/intro-skincare.webp",
                          ctaLabel: "My skin",
                          "data-testid": "Skin Care Quiz",
                        }),
                      }),
                      (0, t.jsx)(o(), {
                        "data-testid": "Hair Care Quiz",
                        href: "/bdna-quiz/haircare",
                        style: { width: "100%" },
                        onClick: async (e) => {
                          e.preventDefault(),
                            await a("/bdna-quiz/haircare", {
                              click_name: "My hair",
                            });
                        },
                        children: (0, t.jsx)(m.m, {
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
    31634: (e, i, a) => {
      "use strict";
      a.d(i, { Flex: () => s });
      var t = a(94799),
        r = a(39738),
        n = a(13331);
      let s = (0, r.forwardRef)(function (e, i) {
        let {
          direction: a,
          align: r,
          justify: s,
          wrap: l,
          basis: c,
          grow: o,
          shrink: d,
          ...h
        } = e;
        return (0, t.jsx)(n.chakra.div, {
          ref: i,
          __css: {
            display: "flex",
            flexDirection: a,
            alignItems: r,
            justifyContent: s,
            flexWrap: l,
            flexBasis: c,
            flexGrow: o,
            flexShrink: d,
          },
          ...h,
        });
      });
      s.displayName = "Flex";
    },
    87243: (e, i, a) => {
      Promise.resolve().then(a.bind(a, 25864));
    },
    95785: (e, i, a) => {
      "use strict";
      a.d(i, { m: () => o });
      var t = a(94799),
        r = a(31634),
        n = a(36008),
        s = a.n(n),
        l = a(39693),
        c = a(93869);
      let o = (e) => {
        let {
          imageSrc: i,
          ctaLabel: a,
          href: n,
          onMouseEnter: o,
          onClick: d,
        } = e;
        return (0, t.jsx)(r.Flex, {
          as: n ? s() : "button",
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
          ...(n ? { href: n } : {}),
          children: (0, t.jsxs)(c.$, {
            as: "span",
            variant: "primaryLight",
            size: "sm",
            children: [
              a,
              (0, t.jsx)(l.ArrowRightIcon, { width: 6, height: 6 }),
            ],
          }),
        });
      };
    },
  },
  (e) => {
    var i = (i) => e((e.s = i));
    e.O(0, [6292, 3146, 6008, 8098, 7408, 8572, 7358], () => i(87243)),
      (_N_E = e.O());
  },
]);
