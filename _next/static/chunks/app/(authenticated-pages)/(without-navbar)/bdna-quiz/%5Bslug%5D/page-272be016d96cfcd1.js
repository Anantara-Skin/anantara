(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1877],
  {
    72483: function (e, i, t) {
      Promise.resolve().then(t.bind(t, 39681)),
        Promise.resolve().then(t.bind(t, 6985)),
        Promise.resolve().then(t.bind(t, 44251)),
        Promise.resolve().then(t.bind(t, 3479)),
        Promise.resolve().then(t.bind(t, 98924)),
        Promise.resolve().then(t.bind(t, 83466)),
        Promise.resolve().then(t.bind(t, 4381)),
        Promise.resolve().then(t.bind(t, 11747)),
        Promise.resolve().then(t.bind(t, 76324)),
        Promise.resolve().then(t.bind(t, 49197)),
        Promise.resolve().then(t.bind(t, 66497)),
        Promise.resolve().then(t.bind(t, 32356)),
        Promise.resolve().then(t.bind(t, 60878)),
        Promise.resolve().then(t.bind(t, 97523)),
        Promise.resolve().then(t.bind(t, 55337)),
        Promise.resolve().then(t.bind(t, 78366)),
        Promise.resolve().then(t.bind(t, 47408)),
        Promise.resolve().then(t.bind(t, 72397)),
        Promise.resolve().then(t.bind(t, 50699)),
        Promise.resolve().then(t.bind(t, 37882)),
        Promise.resolve().then(t.bind(t, 41741)),
        Promise.resolve().then(t.bind(t, 74457)),
        Promise.resolve().then(t.bind(t, 33308)),
        Promise.resolve().then(t.bind(t, 14990)),
        Promise.resolve().then(t.bind(t, 48674)),
        Promise.resolve().then(t.bind(t, 51658)),
        Promise.resolve().then(t.bind(t, 71885)),
        Promise.resolve().then(t.bind(t, 81037)),
        Promise.resolve().then(t.bind(t, 66160)),
        Promise.resolve().then(t.bind(t, 56954)),
        Promise.resolve().then(t.bind(t, 83553)),
        Promise.resolve().then(t.bind(t, 12209)),
        Promise.resolve().then(t.bind(t, 30124)),
        Promise.resolve().then(t.bind(t, 76419)),
        Promise.resolve().then(t.bind(t, 45951)),
        Promise.resolve().then(t.bind(t, 24668)),
        Promise.resolve().then(t.bind(t, 15125)),
        Promise.resolve().then(t.bind(t, 72279)),
        Promise.resolve().then(t.bind(t, 46066)),
        Promise.resolve().then(t.bind(t, 80462)),
        Promise.resolve().then(t.bind(t, 51464)),
        Promise.resolve().then(t.bind(t, 16217)),
        Promise.resolve().then(t.bind(t, 26324)),
        Promise.resolve().then(t.bind(t, 30354)),
        Promise.resolve().then(t.bind(t, 75133)),
        Promise.resolve().then(t.bind(t, 60179)),
        Promise.resolve().then(t.bind(t, 13793)),
        Promise.resolve().then(t.bind(t, 87342)),
        Promise.resolve().then(t.bind(t, 9232)),
        Promise.resolve().then(t.bind(t, 11219)),
        Promise.resolve().then(t.bind(t, 24012)),
        Promise.resolve().then(t.bind(t, 5693)),
        Promise.resolve().then(t.bind(t, 90127)),
        Promise.resolve().then(t.bind(t, 12981)),
        Promise.resolve().then(t.bind(t, 16157)),
        Promise.resolve().then(t.bind(t, 19269)),
        Promise.resolve().then(t.bind(t, 23474)),
        Promise.resolve().then(t.bind(t, 59377)),
        Promise.resolve().then(t.bind(t, 59274)),
        Promise.resolve().then(t.bind(t, 67086)),
        Promise.resolve().then(t.bind(t, 90590)),
        Promise.resolve().then(t.bind(t, 61321)),
        Promise.resolve().then(t.bind(t, 69989)),
        Promise.resolve().then(t.bind(t, 3012)),
        Promise.resolve().then(t.bind(t, 19919)),
        Promise.resolve().then(t.bind(t, 86611)),
        Promise.resolve().then(t.bind(t, 14178)),
        Promise.resolve().then(t.bind(t, 44517)),
        Promise.resolve().then(t.bind(t, 40356)),
        Promise.resolve().then(t.bind(t, 20793)),
        Promise.resolve().then(t.bind(t, 43804)),
        Promise.resolve().then(t.bind(t, 66719)),
        Promise.resolve().then(t.bind(t, 90421)),
        Promise.resolve().then(t.bind(t, 97996)),
        Promise.resolve().then(t.bind(t, 16257));
    },
    59377: function (e, i, t) {
      "use strict";
      let n;
      t.d(i, {
        default: function () {
          return t5;
        },
      });
      var a,
        r,
        s,
        o,
        l,
        c,
        d,
        u,
        h,
        x,
        m,
        g,
        p,
        y,
        b,
        k,
        f = t(24004),
        v = t(38912),
        j = t(14978),
        S = t(13327),
        w = t(39468),
        C = t(44982),
        E = t(585),
        I = t(72835),
        _ = t(1900),
        A = t(22659),
        D = t(3466),
        N = t(85888),
        B = t(47056),
        T = t(91351),
        P = t(64553),
        R = t(55029),
        L = t(92832),
        F = t(30480),
        H = t(32818),
        O = t(28317),
        G = t(66637);
      let V = (e, i) => {
          let t;
          return function () {
            for (var n = arguments.length, a = Array(n), r = 0; r < n; r++)
              a[r] = arguments[r];
            t && clearTimeout(t),
              (t = setTimeout(() => {
                e(...a), (t = null);
              }, i));
          };
        },
        z = (0, O.cn)({});
      var q = t(73263),
        U = t(95714);
      let W = (e) => {
          var i;
          let {
              children: t,
              variant: n,
              onBackClick: a,
              onExitClick: r,
              progressValue: s,
              continueProps: o,
              resetScrollPosition: l,
              endOfQuizPage: c,
            } = e,
            { ref: d, setScroll: u } = (function (e) {
              let { debounceTime: i = 100, persist: t = !1 } =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                [n, a] = (0, G.KO)(z),
                [r, s] = (0, j.useState)(null),
                o = (0, j.useCallback)((e) => {
                  e && s(e);
                }, []),
                l = n[e],
                c = e in n;
              return (
                (0, j.useEffect)(() => {
                  if (!r) return;
                  let t = V(() => {
                    let i = r.scrollTop,
                      t = r.scrollLeft;
                    a((n) => ({ ...n, [e]: { scrollTop: i, scrollLeft: t } }));
                  }, i);
                  return (
                    r.addEventListener("scroll", t),
                    () => {
                      r.removeEventListener("scroll", t);
                    }
                  );
                }, [i, e, r, t, a]),
                (0, j.useEffect)(() => {
                  if (r) {
                    if (c) r.scrollTo(l.scrollLeft, l.scrollTop);
                    else {
                      let i = {
                        scrollTop: r.scrollTop,
                        scrollLeft: r.scrollLeft,
                      };
                      if ("localStorage" === t) {
                        let t = localStorage.getItem(
                          "scrollRestoration-".concat(e),
                        );
                        t && (i = JSON.parse(t));
                      }
                      if ("sessionStorage" === t) {
                        let t = sessionStorage.getItem(
                          "scrollRestoration-".concat(e),
                        );
                        t && (i = JSON.parse(t));
                      }
                      a((t) => ({ ...t, [e]: i }));
                    }
                  }
                }, [l, r, e, t, c, a]),
                (0, j.useEffect)(() => {
                  t &&
                    l &&
                    ("localStorage" === t
                      ? localStorage.setItem(
                          "scrollRestoration-".concat(e),
                          JSON.stringify(l),
                        )
                      : "sessionStorage" === t &&
                        sessionStorage.setItem(
                          "scrollRestoration-".concat(e),
                          JSON.stringify(l),
                        ));
                }, [e, t, l]),
                {
                  ref: o,
                  setScroll: (i) => {
                    let { x: t, y: n } = i;
                    a((i) => ({
                      ...i,
                      [e]: {
                        scrollLeft: null != t ? t : i[e].scrollLeft,
                        scrollTop: null != n ? n : i[e].scrollTop,
                      },
                    }));
                  },
                }
              );
            })("quiz-scroll-ref", { persist: !1 });
          return (
            (0, j.useEffect)(() => {
              l && u({ x: 0, y: 0 });
            }, [l]),
            (0, f.jsxs)(f.Fragment, {
              children: [
                (0, f.jsx)(E.xu, {
                  paddingX: { base: c ? "0" : "6", lg: c ? "0" : "4" },
                  marginTop: 2,
                  width: "100%",
                  children: (0, f.jsx)(q.t, {
                    endOfQuizPage: c,
                    variant: n,
                    progressValue: s,
                    onBackClick: a,
                    onExitClick: r,
                  }),
                }),
                !c &&
                  (0, f.jsx)(I.g, {
                    overflowY: "auto",
                    width: "100%",
                    alignItems: "start",
                    flexGrow: 1,
                    paddingX: { base: 6, lg: 4 },
                    paddingY: { base: 2, lg: 4 },
                    marginTop: { base: -6, lg: -4 },
                    paddingBottom: { base: 6, lg: 4 },
                    ref: d,
                    children: t,
                  }),
                o &&
                  !c &&
                  (0, f.jsx)(H.K, {
                    position: "fixed",
                    bottom: { base: 6, lg: 16 },
                    right: { base: 6, lg: 16 },
                    children: (0, f.jsx)(U.z, {
                      ariaLabel: "Right Pagination Button",
                      dataTestId: "Right Pagination Button",
                      isDisabled: o.isDisabled,
                      rightIcon: (0, f.jsx)(L.ArrowRightIcon, {
                        height: 4,
                        width: 4,
                      }),
                      variant: "primary",
                      onClick: () => o.onClick(),
                      children:
                        null !== (i = o.label) && void 0 !== i ? i : "Continue",
                    }),
                  }),
              ],
            })
          );
        },
        M = (e) => {
          let { bgColor: i, children: t, color: n, layerStyle: a, size: r } = e;
          return (0, f.jsx)(E.xu, {
            bgColor: i,
            layerStyle: a,
            borderRadius: "50%",
            height: { base: r },
            width: { base: r },
            minWidth: { base: r },
            textStyle: "function.text.medium",
            color: n,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            children: t,
          });
        };
      var Q = t(79202),
        K = t(25508);
      let Y = (e) => {
          let { stepNumber: i } = e;
          return (0, f.jsx)(M, {
            bgColor: "bdna.bdna.100",
            size: 6,
            color: "primary.white",
            children: i,
          });
        },
        $ = (e) => {
          let { heading: i, description: t, stepNumber: n } = e;
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(w.P, { children: (0, f.jsx)(Y, { stepNumber: n }) }),
              (0, f.jsx)(w.P, {
                children: (0, f.jsx)(C.x, {
                  textStyle: "body.semi",
                  children: i,
                }),
              }),
              (0, f.jsx)(w.P, {
                children: (0, f.jsx)(E.xu, {
                  display: "flex",
                  justifyContent: "center",
                  h: "100%",
                  children: (0, f.jsx)(E.xu, {
                    pt: 1,
                    borderLeft: "2px",
                    borderLeftColor: "primary.black.50",
                    borderLeftStyle: "dotted",
                    h: "100%",
                  }),
                }),
              }),
              (0, f.jsx)(w.P, {
                children: (0, f.jsx)(C.x, {
                  textStyle: "function.caption.small",
                  pb: 8,
                  children: t,
                }),
              }),
            ],
          });
        },
        X = (e) => {
          let { description: i, title: t, iconName: n } = e,
            a = n ? (0, F.ky)(n) : void 0,
            r = a
              ? (0, f.jsx)(M, {
                  bgColor: "primary.white",
                  size: 10,
                  children: (0, f.jsx)(a, {
                    height: 6,
                    width: 6,
                    color: "bdna.bdna.100",
                  }),
                })
              : void 0;
          return (0, f.jsx)(K.r, {
            variant: "bdnaGradient",
            title: null != t ? t : "",
            description: i,
            icon: r,
          });
        },
        Z = (e) =>
          (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(I.g, {
                alignItems: "start",
                gap: { base: 4, lg: 10 },
              }),
              (0, f.jsxs)(I.g, {
                gap: { base: 4, lg: 8 },
                alignItems: "start",
                children: [
                  (0, f.jsxs)(C.x, {
                    textStyle: "display.d2",
                    children: [
                      (0, f.jsx)(C.x, { as: "span", children: e.title }),
                      e.titleEmphasisSegment &&
                        (0, f.jsx)(C.x, {
                          color: "bdna.bdna.100",
                          as: "span",
                          children: " " + e.titleEmphasisSegment,
                        }),
                    ],
                  }),
                  (0, f.jsxs)(_.U, {
                    gap: 1,
                    color: "primary.black.30",
                    textStyle: "function.text.small",
                    children: [
                      (0, f.jsx)(L.ClockIcon, { height: 6, width: 6 }),
                      (0, f.jsx)(C.x, { children: "Approx 4 mins" }),
                    ],
                  }),
                ],
              }),
              (0, f.jsxs)(I.g, {
                alignItems: "start",
                gap: 0,
                py: { base: 4 },
                width: "100%",
                children: [
                  (0, f.jsxs)(A.r, {
                    templateColumns: "24px 1fr",
                    columnGap: { base: 4 },
                    rowGap: { base: 1 },
                    px: 6,
                    children: [
                      (0, f.jsx)($, {
                        stepNumber: 1,
                        heading: "Your skin and preferences",
                        description:
                          "Tell us about your skin, current routine and your preferences",
                      }),
                      (0, f.jsx)($, {
                        stepNumber: 2,
                        heading: "Define your Goals",
                        description:
                          "Use our AI-powered face scan to pick your skincare goals",
                      }),
                    ],
                  }),
                  e.promotional && (0, f.jsx)(X, { ...e.promotional }),
                ],
              }),
            ],
          }),
        J = (e) =>
          (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(I.g, {
                alignItems: "start",
                gap: { base: 4, lg: 10 },
              }),
              (0, f.jsxs)(I.g, {
                gap: { base: 4, lg: 8 },
                alignItems: "start",
                children: [
                  (0, f.jsxs)(C.x, {
                    textStyle: "display.d2",
                    children: [
                      (0, f.jsx)(C.x, { as: "span", children: e.title }),
                      e.titleEmphasisSegment &&
                        (0, f.jsx)(C.x, {
                          color: "bdna.bdna.100",
                          as: "span",
                          children: " " + e.titleEmphasisSegment,
                        }),
                    ],
                  }),
                  (0, f.jsxs)(_.U, {
                    gap: 1,
                    color: "primary.black.30",
                    textStyle: "function.text.small",
                    children: [
                      (0, f.jsx)(L.ClockIcon, { height: 6, width: 6 }),
                      (0, f.jsx)(C.x, { children: "Approx 4 to 6 mins" }),
                      (0, f.jsx)(E.xu, {
                        bgColor: "primary.black.10",
                        color: "primary.white",
                        px: 3,
                        py: 2,
                        ml: 3,
                        borderRadius: "full",
                        children: (0, f.jsx)(C.x, { children: "BETA version" }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, f.jsxs)(I.g, {
                alignItems: "start",
                gap: 0,
                py: { base: 4 },
                width: "100%",
                children: [
                  (0, f.jsxs)(A.r, {
                    templateColumns: "24px 1fr",
                    columnGap: { base: 4 },
                    rowGap: { base: 1 },
                    px: 6,
                    children: [
                      (0, f.jsx)($, {
                        stepNumber: 1,
                        heading: "Your hair & scalp",
                        description: "Tell us about your hair and your routine",
                      }),
                      (0, f.jsx)($, {
                        stepNumber: 2,
                        heading: "Define your Goals",
                        description:
                          "Define your haircare goals and tell us about your preferences",
                      }),
                    ],
                  }),
                  e.promotional && (0, f.jsx)(X, { ...e.promotional }),
                ],
              }),
            ],
          }),
        ee = (e) => {
          let { onExitClick: i, onStartClick: t, introPage: n } = e,
            a = (0, v.useRouter)(),
            { cart: r, isCartLoading: s } = (0, R.iQ)(),
            o = (0, v.usePathname)(),
            { sendAnalyticsEvent: l } = (0, T.z)();
          (0, j.useEffect)(() => {
            if (!s) {
              let e =
                (null == r ? void 0 : r.items) && r.items.length > 0
                  ? null == r
                    ? void 0
                    : r.id
                  : void 0;
              l(D.iN.pageViewedEnhanced.bind(D.iN), B.$.PAGE_VIEW_ENHANCED, {
                page_name: N.q.BDNA_INTRO,
                page_subcategory_1: "bdna-quiz",
                page_category: (0, P.T)(o),
                cart_id: e,
              });
            }
          }, [s]);
          let c = (0, f.jsx)(Q.b, {
            image: {
              src: n.imageUrl,
              fill: !0,
              sizes: { base: "100vw", lg: "50vw" },
              quality: 90,
              alt: "",
            },
            objectFit: "cover",
            borderRadius: "2xl",
          });
          return (0, f.jsxs)(E.xu, {
            bgColor: { base: "bdna.bdna.10--new", lg: "primary.white" },
            display: "flex",
            gap: { base: 0, lg: "2.5" },
            padding: { base: 0, lg: 4 },
            height: "100vh",
            flexDirection: { base: "column", lg: "row-reverse" },
            children: [
              (0, f.jsx)(I.g, {
                bgColor: "bdna.bdna.10--new",
                gap: 0,
                paddingTop: { base: 0, lg: 12 },
                paddingX: { base: 0, lg: 12 },
                height: "100%",
                alignItems: "start",
                flex: { base: 0, lg: "1 1 100%" },
                borderRadius: { base: "0", lg: "2xl" },
                children: (0, f.jsxs)(W, {
                  variant: "cover",
                  onBackClick: () => a.back(),
                  onExitClick: i,
                  progressValue: 0,
                  continueProps: { onClick: t, label: "Start", isDisabled: !1 },
                  children: [
                    (() => {
                      switch (n.quizType) {
                        case S.kv.SKINCARE:
                          return (0, f.jsx)(Z, { ...n });
                        case S.kv.HAIRCARE:
                          return (0, f.jsx)(J, { ...n });
                      }
                    })(),
                    n.imageUrl &&
                      (0, f.jsx)(E.xu, {
                        display: { base: "block", lg: "none" },
                        position: "relative",
                        aspectRatio: { base: 1.3625, lg: "unset" },
                        width: "100%",
                        children: c,
                      }),
                  ],
                }),
              }),
              n.imageUrl &&
                (0, f.jsx)(E.xu, {
                  display: { base: "none", lg: "block" },
                  flex: { base: "0 0", lg: "1 1 100%" },
                  position: "relative",
                  children: c,
                }),
            ],
          });
        },
        ei = (e) => {
          let i = (0, v.useRouter)();
          return (0, f.jsx)(ee, { ...e, onExitClick: () => i.back() });
        };
      var et = t(35138),
        en = t(35202),
        ea = t(93888),
        er = t(26324),
        es = t(37299),
        eo = t(48963);
      let el = (e, i, t) => (e ? i : t);
      var ec = t(77393);
      let ed = (e) => {
          let { size: i, indicatorTag: t, onItemClick: n, dark: a = !1 } = e,
            r = (0, eo._)(),
            s = (e) => {
              e.clickable && n && n(e.index);
            };
          return (0, f.jsx)(_.U, {
            alignItems: "center",
            spacing: el(r, 1, 2),
            children:
              null == t
                ? void 0
                : t.map((e) => {
                    let {
                      numberTagLabel: t,
                      textTagLabel: n,
                      isActive: o,
                      tagWidth: l,
                      tagHeight: c,
                    } = e;
                    return (0, f.jsx)(
                      _.U,
                      {
                        alignItems: "center",
                        spacing: el(r, 1, 2),
                        onClick: () => s(e),
                        children: o
                          ? (0, f.jsxs)(f.Fragment, {
                              children: [
                                (0, f.jsx)(ec.V, {
                                  tagLabel: t,
                                  size: null != i ? i : el(r, "sm", "lg"),
                                  ariaLabel: "indicator-"
                                    .concat(t, "-")
                                    .concat(n),
                                  "data-testid": "indicator-"
                                    .concat(t, "-")
                                    .concat(n),
                                  variant: a ? "filledBlack" : "filledWhite",
                                  width: null != l ? l : el(r, "8", "10"),
                                  height: null != c ? c : el(r, "8", "10"),
                                }),
                                (0, f.jsx)(ec.V, {
                                  tagLabel: n,
                                  size: null != i ? i : el(r, "sm", "lg"),
                                  ariaLabel: n,
                                  "data-testid": n,
                                  variant: a ? "filledBlack" : "filledWhite",
                                  height: el(r, "8", "10"),
                                }),
                              ],
                            })
                          : (0, f.jsx)(ec.V, {
                              tagLabel: t,
                              size: null != i ? i : el(r, "sm", "lg"),
                              ariaLabel: n,
                              "data-testid": n,
                              variant: a ? "outlineBlack" : "outlineWhite",
                              width: el(r, "8", "10"),
                              height: el(r, "8", "10"),
                              cursor: e.clickable ? "pointer" : void 0,
                            }),
                      },
                      "mt_".concat(t, "_").concat(n),
                    );
                  }),
          });
        },
        eu = (e) => {
          var i, t;
          let {
              children: n,
              indicatorTags: a,
              image: r,
              isFullScreenOnOpen: s,
              setModuleIndex: o,
              topTemplate: l,
              minimal: c = !1,
            } = e,
            d = (0, er.useMultiStyleConfig)("BDNAQuizLayout");
          return c
            ? n
            : (0, f.jsxs)(et.k, {
                flexDirection: { base: "column", lg: "row" },
                position: { base: "relative", lg: "unset" },
                gap: { base: "unset", lg: 6 },
                height: "100%",
                width: "100%",
                padding: { base: 0, lg: 4 },
                children: [
                  !s &&
                    (0, f.jsx)(E.xu, {
                      id: "left-grid-item",
                      flex: { base: 12, lg: 4 },
                      borderRadius: { base: "none", lg: "2xl" },
                      children:
                        null != l
                          ? l
                          : (0, f.jsx)(en.Z, {
                              __css: d.container,
                              backgroundImage: c
                                ? void 0
                                : (0, es.toContentfulImageUrl)(
                                    null !==
                                      (t =
                                        null !==
                                          (i = null == r ? void 0 : r.src) &&
                                        void 0 !== i
                                          ? i
                                          : r) && void 0 !== t
                                      ? t
                                      : void 0,
                                    { w: "1000", fm: "webp" },
                                  ),
                              children: (0, f.jsx)(ea.e, {
                                __css: c ? d.minimal : d.body,
                                children: (0, f.jsx)(E.xu, {
                                  marginX: 2,
                                  children: (0, f.jsx)(ed, {
                                    indicatorTag: a,
                                    size: "sm",
                                    onItemClick: o,
                                    dark: c,
                                  }),
                                }),
                              }),
                            }),
                    }),
                  (0, f.jsx)(E.xu, {
                    id: "right-grid-item",
                    maxWidth: "100%",
                    flex: s ? { base: 12 } : { base: 12, lg: 8 },
                    width: { base: "100vw", lg: "unset" },
                    height: "100%",
                    children: n,
                  }),
                ],
              });
        };
      ((a = u || (u = {})).ONE_CHOICE = "ONE_CHOICE"),
        (a.MULTI_CHOICE = "MULTI_CHOICE"),
        (a.RANKED_MULTI_CHOICE = "RANKED_MULTI_CHOICE"),
        (a.TEXT = "TEXT"),
        (a.NUMERIC = "NUMERIC"),
        (a.FACE_SCAN = "FACE_SCAN");
      let eh = (e) => {
        let i = e instanceof Date ? e.getFullYear() : e;
        return new Date().getFullYear() - i;
      };
      var ex = t(49996);
      let em = (e) =>
          (0, f.jsx)(C.x, {
            "aria-label": e,
            "data-testid": "Header",
            color: "primary.black.10",
            textStyle: "heading.h5.bold",
            my: 0,
            py: 0,
            children: e,
          }),
        eg = (e) => {
          let {
            headerTemplate: i = em,
            header: t,
            subHeader: n,
            children: a,
            topOfPageRef: r,
          } = e;
          return (0, f.jsxs)(en.Z, {
            bgColor: "primary.warmGrey.90",
            width: "100%",
            border: "none",
            boxShadow: "none",
            height: "max-content",
            children: [
              (0, f.jsxs)(ex.O, {
                mb: "24px",
                padding: { base: "unset", lg: "0 0 1 0" },
                ref: r,
                children: [
                  t && i(t),
                  n &&
                    (0, f.jsx)(C.x, {
                      "aria-label": n,
                      "data-testid": "Sub header",
                      color: "primary.black.40",
                      textStyle: "function.text.medium",
                      mt: 6,
                      mb: 0,
                      py: 0,
                      children: n,
                    }),
                ],
              }),
              (0, f.jsx)(ea.e, {
                mt: 0,
                padding: { base: "unset", lg: "1 0 0 0" },
                children: a,
              }),
            ],
          });
        };
      var ep = t(24883),
        ey = t(34573);
      ((r = h || (h = {})).FACE_SCAN = "face-scan"),
        (r.SELF_SELECT = "self-select"),
        ((s = x || (x = {})).SKIN = "Skin"),
        (s.GOALS = "Goals"),
        (s.PREFERENCES = "Preferences"),
        (s.SKIP_SCAN = "skip-face-scan"),
        ((o = m || (m = {})).CONCERNS = "concerns"),
        (o.HAIR = "hair"),
        (o.SCALP = "scalp"),
        (o.STYLING = "styling"),
        (o.ROUTINE = "routine"),
        (o.DETAILS = "details"),
        ((l = g || (g = {})).CAPTURE_PHOTO = "capture photo"),
        (l.TAKE_PHOTO = "take photo"),
        (l.UPLOAD_PHOTO = "upload photo"),
        (l.RE_TAKE = "retake photo"),
        ((p || (p = {})).handleBdnaChoiceSelected =
          "HANDLE_BDNA_CHOICE_SELECTED"),
        ((c = y || (y = {})).updateNavigationState = "UPDATE_NAVIGATION_STATE"),
        (c.updateSubcategory = "UPDATE_SUBCATEGORY"),
        ((b || (b = {})).updateQuiz = "UPDATE_QUIZ");
      let eb = {
          quiz: void 0,
          navigationState: {
            currentSectionIndex: 0,
            currentSectionQuestionIndex: 0,
            currentSectionSubQuestionIndex: 0,
            subCategory: void 0,
          },
        },
        ek = (0, j.createContext)(eb),
        ef = (0, j.createContext)(() => {}),
        ev = () => (0, j.useContext)(ek),
        ej = () => (0, j.useContext)(ef),
        eS = (e) => {
          let { children: i, initialState: t = eb } = e,
            [n, a] = (0, j.useReducer)(ew, t);
          return (0, f.jsx)(ek.Provider, {
            value: n,
            children: (0, f.jsx)(ef.Provider, { value: a, children: i }),
          });
        },
        ew = (e, i) => {
          switch (i.type) {
            case b.updateQuiz:
              let t;
              return (t = i.payload), { ...e, quiz: t };
            case y.updateNavigationState:
              let n;
              return (n = i.payload), { ...e, navigationState: n };
            case y.updateSubcategory:
              let a;
              return (
                (a = i.payload),
                {
                  ...e,
                  navigationState: { ...e.navigationState, subCategory: a },
                }
              );
            default:
              return e;
          }
        };
      var eC = t(13260);
      let eE = (e, i, t) => {
          let n = "Section ".concat(e, ", Question ").concat(i);
          return t ? "".concat(n, ", Sub-Question ").concat(t) : n;
        },
        eI = (e, i) => e.find((e) => e.value === i),
        e_ = (e, i, t) => {
          if (e !== u.MULTI_CHOICE && e !== u.RANKED_MULTI_CHOICE) return t[0];
          {
            let e = eI(i, t[t.length - 1]),
              n = i.find((e) => !!e.overrideValue);
            return (null == e ? void 0 : e.overrideValue)
              ? [e.overrideValue]
              : n
                ? t.filter((e) => e !== n.overrideValue || e !== n.value)
                : t;
          }
        };
      var eA = t(75974),
        eD = t(58342);
      let eN = (e) => {
          let {
              question: i,
              excludedOptions: t = [],
              sectionIndex: n,
              questionIndex: a,
              subQuestionIndex: r,
              paddingBottom: s,
              onChange: o,
              buttonGroupVariant: l = "singleSelectPill",
              iconTemplate: c = (e) =>
                !!e.icon && (0, f.jsx)(eD.o, { concern: e.icon, size: 8 }),
              labelTemplate: d,
              groupHeadTemplate: h,
              buttonLayout: x,
              currentValue: m,
            } = e,
            g = m ? (Array.isArray(m) ? m : [m]) : [],
            p = Object.fromEntries(
              Object.entries(
                i.options
                  .filter((e) => !t.includes(e.value))
                  .reduce((e, i) => {
                    var t;
                    let n =
                      null !== (t = i.group_name) && void 0 !== t
                        ? t
                        : "default";
                    return (
                      e[n] || (e[n] = { name: n, entries: [] }),
                      e[n].entries.push({
                        label: d ? d(i) : i.label,
                        value: i.value,
                        icon: c(i),
                        overrideValue: i.overrideValue,
                      }),
                      e
                    );
                  }, {}),
              ).sort((e, i) => e[0].charAt(0).localeCompare(i[0].charAt(0))),
            ),
            y = eE(n + 1, a + 1, void 0 !== r ? r + 1 : void 0),
            b = i.type === u.MULTI_CHOICE || i.type === u.RANKED_MULTI_CHOICE;
          return (0, f.jsx)(
            j.Fragment,
            {
              children: Object.values(p).map((e, t) => {
                var n;
                return (0, f.jsxs)(
                  E.xu,
                  {
                    paddingBottom: Object.values(p).length - 1 === t ? s : 0,
                    children: [
                      "default" !== e.name &&
                        (h
                          ? h(e)
                          : (0, f.jsx)(C.x, {
                              textStyle: "body.semibold",
                              margin: "16px 0",
                              children: e.name,
                            })),
                      (0, f.jsx)(eA.h, {
                        labelPrefix: "".concat(y, ", Option: "),
                        buttons: e.entries,
                        defaultSelection: g,
                        selection: g,
                        variant: l,
                        allowMulti: b,
                        allowDeselection: !0,
                        onChange: (e) => {
                          let t = Object.values(p).reduce(
                            (e, i) => (e.push(...i.entries), e),
                            [],
                          );
                          o(e_(i.type, t, e));
                        },
                        unselectable:
                          i.type !== u.MULTI_CHOICE &&
                          i.type !== u.RANKED_MULTI_CHOICE,
                        maxAnswers:
                          null == i
                            ? void 0
                            : null === (n = i.configuration) || void 0 === n
                              ? void 0
                              : n.max_answers,
                        labelTemplate: d ? (e) => e : void 0,
                        layout: x,
                      }),
                    ],
                  },
                  e.name,
                );
              }),
            },
            y,
          );
        },
        eB = (e) => {
          let {
            concern: i,
            size: t,
            color: n,
            trafficLightColor: a,
            withTrafficLight: r = !0,
          } = e;
          return (0, f.jsxs)(et.k, {
            borderRadius: "full",
            backgroundColor: "primary.warmGrey.90",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            minWidth: 10,
            height: 10,
            color: n,
            children: [
              (0, f.jsx)(eD.o, { concern: i, size: t }),
              r &&
                (0, f.jsx)(E.xu, {
                  position: "absolute",
                  right: "-4px",
                  bottom: "-4px",
                  children: (0, f.jsx)(E.xu, {
                    borderRadius: "full",
                    backgroundColor: null != a ? a : "primary.black.70",
                    height: 4,
                    width: 4,
                    borderColor: "primary.white",
                    borderStyle: "solid",
                    borderWidth: "2px",
                    "data-testid": "concern icon traffic light",
                  }),
                }),
            ],
          });
        };
      var eT = t(35095);
      let eP = (e) => {
        let { question: i, sectionIndex: t, questionIndex: n, onChange: a } = e,
          [r, s] = (0, j.useState)(
            Array.isArray(i.user_value) ? i.user_value : [],
          ),
          o = (e) => {
            (i.user_value = e), s(e), a(e);
          };
        return (0, f.jsx)(eN, {
          paddingBottom: { base: 18, lg: 24 },
          question: i,
          sectionIndex: t,
          questionIndex: n,
          onChange: (e) => o(e),
          buttonGroupVariant: "bdnaWithTag",
          iconTemplate: (e) =>
            !!e.icon &&
            (0, f.jsx)(eB, {
              concern: e.icon,
              size: 6,
              color: "primary.black.10",
              withTrafficLight: !1,
            }),
          labelTemplate: (e) =>
            (0, f.jsxs)(et.k, {
              width: "100%",
              direction: "row",
              alignItems: "center",
              children: [
                (0, f.jsx)(et.k, {
                  direction: "column",
                  gap: 2,
                  marginLeft: 2,
                  textAlign: "left",
                  children: (0, f.jsx)(C.x, {
                    textStyle: "heading.h7.bold",
                    children: e.label,
                  }),
                }),
                (0, f.jsx)(eC.L, {}),
                !!(null == r ? void 0 : r.length) &&
                  -1 !== r.indexOf(e.value) &&
                  (0, f.jsxs)(f.Fragment, {
                    children: [
                      (0, f.jsx)(eC.L, {}),
                      (0, f.jsx)(eT.Tag, {
                        size: "lg",
                        tagLabel: (r.indexOf(e.value) + 1).toString(),
                        variant: "filledWhite",
                      }),
                    ],
                  }),
              ],
            }),
          buttonLayout: "column",
          currentValue: r,
        });
      };
      var eR = t(5186),
        eL = t(86645),
        eF = t(11125),
        eH = t(90693),
        eO = t(56929),
        eG = t(80176);
      let eV = (e) =>
          (0, eO.useMutation)({
            ...e,
            mutationFn: (e) => {
              let { profile: i } = e;
              return eG.Z.updateUserProfile(i);
            },
          }),
        ez = (e) =>
          new Promise((i, t) => {
            let n = document.createElement("script");
            (n.onload = i),
              (n.onerror = t),
              (n.async = !0),
              (n.src = e),
              document.body.appendChild(n);
          }),
        eq = async () => {
          await ez(
            "https://cdn.jsdelivr.net/npm/@vladmandic/human/dist/human.js",
          );
          let { Human: e } = window.Human;
          return (n = e);
        },
        eU = async () => {
          if (n) return Promise.resolve(n);
          if (window.Human) {
            let { Human: e } = window.Human;
            return (n = e), e;
          }
          return eq();
        },
        eW = (e) =>
          e.options.reduce((e, i, t) => {
            var n, a, r;
            return (
              e.push({
                focus_area: i.value,
                severity:
                  null !==
                    (r =
                      null == i
                        ? void 0
                        : null === (a = i.metadata) || void 0 === a
                          ? void 0
                          : null === (n = a.score) || void 0 === n
                            ? void 0
                            : n.severity) && void 0 !== r
                    ? r
                    : "none",
                position: t + 1,
              }),
              e
            );
          }, []);
      var eM = t(96834),
        eQ = t(3492),
        eK = t(16407),
        eY = t(62296);
      let e$ = (e) => {
          switch (!0) {
            case e.startsWith("section-skin"):
              return x.SKIN;
            case e.startsWith("section-goals"):
              return x.GOALS;
            case e.startsWith("section-preferences"):
              return x.PREFERENCES;
            case e.startsWith("section-concern"):
              return m.CONCERNS;
            case e.startsWith("section-hair"):
              return m.HAIR;
            case e.startsWith("section-scalp"):
              return m.SCALP;
            case e.startsWith("section-styling"):
              return m.STYLING;
            case e.startsWith("section-routine"):
              return m.ROUTINE;
            case e.startsWith("section-demographics"):
              return m.DETAILS;
            default:
              return e;
          }
        },
        eX = (e) => {
          let { navigationState: i, quiz: t } = e;
          return null == t ? void 0 : t.sections[i.currentSectionIndex];
        },
        eZ = (e) => {
          let { navigationState: i, quiz: t } = e,
            n = eX({ navigationState: i, quiz: t });
          if (n) return e$(n.id);
        },
        eJ = (e) => e.navigationState.currentSectionIndex + 1,
        e0 = (e) => {
          let i = eJ(e);
          return ""
            .concat(i, ".")
            .concat(e.navigationState.currentSectionQuestionIndex + 1);
        },
        e1 = (e) => {
          let i = e0(e);
          return ""
            .concat(i, ".")
            .concat(e.navigationState.currentSectionSubQuestionIndex + 1);
        },
        e3 = (e) => ({
          bdna_step_name: e0(e),
          bdna_step_name_with_subquestion: e1(e),
          bdna_category: eZ(e),
          bdna_subcategory: e.navigationState.subCategory,
          bdna_step: eJ(e),
        }),
        e2 = () => {
          let e = ev(),
            i = ej(),
            { navigationState: t } = e,
            { sendAnalyticsEvent: n } = (0, T.z)();
          (0, j.useEffect)(() => {
            1 !== t.currentSectionIndex &&
              i({ type: y.updateSubcategory, payload: void 0 });
          }, [t.currentSectionIndex, i]);
          let a = (0, j.useMemo)(() => e3(e), [e]),
            { user: r } = (0, eF.Z)(),
            s = (0, j.useCallback)(
              () => n(D.iN.bdnaStarted.bind(D.iN), B.$.BDNA_STARTED, {}),
              [],
            ),
            o = (0, j.useCallback)(
              () =>
                n(
                  null === D.iN || void 0 === D.iN
                    ? void 0
                    : D.iN.bdnaCompleted.bind(D.iN),
                  B.$.BDNA_COMPLETED,
                  {},
                ),
              [],
            ),
            l = (0, j.useCallback)(
              (e) => {
                let i = {
                  bdna_step: a.bdna_step,
                  bdna_category: a.bdna_category,
                };
                return e
                  ? n(
                      null === D.iN || void 0 === D.iN
                        ? void 0
                        : D.iN.quizSectionSaved.bind(D.iN),
                      B.$.QUIZ_SECTION_SAVED,
                      i,
                    )
                  : n(
                      null === D.iN || void 0 === D.iN
                        ? void 0
                        : D.iN.bdnaUpdated.bind(D.iN),
                      B.$.BDNA_UPDATED,
                      i,
                    );
              },
              [a],
            ),
            c = (0, j.useCallback)(
              (e) => {
                var i, t, a, s, o, l;
                let c = {
                  bdna_segment_id: e.bdna_segment,
                  bdna_focus_areas: [
                    null !==
                      (s =
                        null === (i = e.skincare) || void 0 === i
                          ? void 0
                          : i.primary_concern) && void 0 !== s
                      ? s
                      : "none",
                    null !==
                      (o =
                        null === (t = e.skincare) || void 0 === t
                          ? void 0
                          : t.secondary_concern) && void 0 !== o
                      ? o
                      : "none",
                    null !==
                      (l =
                        null === (a = e.skincare) || void 0 === a
                          ? void 0
                          : a.tertiary_concern) && void 0 !== l
                      ? l
                      : "none",
                  ],
                };
                n(
                  async () => {
                    D.iN.identify(null == r ? void 0 : r.id, c);
                  },
                  B.$.IDENTIFY,
                  c,
                );
              },
              [r],
            ),
            d = (0, j.useCallback)(
              (e, i) => {
                let t = { ...a, bdna_choice: e, ...i };
                n(
                  D.iN.bdnaChoiceSelected.bind(D.iN),
                  B.$.BDNA_CHOICE_SELECTED,
                  t,
                );
              },
              [a],
            ),
            u = (0, j.useCallback)(
              () =>
                n(D.iN.ctaClicked.bind(D.iN), B.$.CTA_CLICKED, {
                  click_name: "Exit quiz",
                  click_location: "bdna quiz "
                    .concat(a.bdna_category, " ")
                    .concat(a.bdna_step_name),
                  page_category: N.q.BDNA_MODULES,
                  page_location: location.href,
                  page_path: location.pathname,
                  referrer: document.referrer,
                }),
              [a],
            );
          return {
            analyticsArgs: a,
            handleBdnaChoiceSelected: d,
            handleBdnaCompleted: o,
            handleBdnaStarted: s,
            handleBdnaStepViewed: function (e) {
              let i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                t = eZ({
                  navigationState: { currentSectionIndex: i },
                  quiz: e,
                });
              n(
                null === D.iN || void 0 === D.iN
                  ? void 0
                  : D.iN.bdnaStepViewed.bind(D.iN),
                B.$.BDNA_STEP_VIEWED,
                { bdna_category: t },
              );
            },
            handleBdnaUpdated: l,
            handleExitQuiz: u,
            handleIdentifyUserFromBdnaProfile: c,
            handleSkipModule: (0, j.useCallback)(
              () =>
                n(D.iN.bdnaStepStarted.bind(D.iN), B.$.BDNA_STEP_STARTED, {
                  bdna_step_name: x.SKIP_SCAN,
                }),
              [],
            ),
          };
        };
      var e6 = t(26659),
        e4 = t(13758),
        e7 = t(96916);
      let e5 = () => ({
        compressResizeImage: async (e, i) => {
          let t = new File(
              [await (0, e6.o_)(e)],
              "".concat((0, e7.Z)(), ".jpg"),
              { type: "image/jpeg" },
            ),
            n = await (0, e4.Z)(t, i);
          return (0, e6.n5)(n);
        },
      });
      async function e8(e, i) {
        try {
          var t;
          (null === (t = navigator) || void 0 === t
            ? void 0
            : t.mediaDevices) &&
            void 0 === navigator.mediaDevices.getUserMedia &&
            (navigator.mediaDevices.getUserMedia = function (e) {
              var i;
              let t =
                null !== (i = navigator.webkitGetUserMedia) && void 0 !== i
                  ? i
                  : navigator.mozGetUserMedia;
              return t
                ? new Promise((i, n) => {
                    t.call(navigator, null != e ? e : { video: !0 }, i, n);
                  })
                : Promise.reject(
                    Error("getUserMedia is not implemented in this browser"),
                  );
            });
          let i = await navigator.mediaDevices.getUserMedia({
            audio: !1,
            video: !0,
          });
          return e(!0), i.getTracks().forEach((e) => e.stop()), !0;
        } catch (n) {
          let t = "";
          switch (n.name) {
            case "NotFoundError":
              t = "Please attach a camera.";
              break;
            case "NotAllowedError":
              t = "Please grant permission to access the camera.";
              break;
            default:
              t = "An error occurred accessing the camera.";
          }
          return e(!1), i(t), !1;
        }
      }
      let e9 = [
          {
            message: "Push your hair back and remove any accessories",
            imgSource: "faceNoObstacles",
            imgAlt: "Face with no obstructions",
          },
          {
            message: "Look straight on with a neutral expression",
            imgSource: "faceCorrectPosition",
            imgAlt: "Face positioned in center of camera view",
          },
          {
            message: "Find a well lit area to take your selfie",
            imgSource: "faceGoodLighting",
            imgAlt: "Face in well lit area",
          },
        ],
        ie = (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)(C.x, {
              width: ["2xs", "sm", "lg"],
              textAlign: "center",
              textStyle: "display.h3",
              color: "primary.black.10",
              "data-testid": "Facescan error",
              children: "Oops! We need to try that again",
            }),
            (0, f.jsx)(C.x, {
              width: ["2xs", "sm"],
              textStyle: "function.text.medium",
              color: "primary.black.40",
              textAlign: "center",
              paddingY: 4,
              "data-testid": "We cannot analyse error",
              children:
                "We couldn’t quite analyse your photo, try again and remember to follow the steps below to get the best quality photo",
            }),
          ],
        }),
        ii = (e) => {
          let {
              onRetake: i,
              onTryAgainLater: t,
              instructions: n = e9,
              children: a = ie,
              buttonRetryLabel: r = "Retry face scan",
              buttonNextLabel: s = "Select focus area manually",
            } = e,
            o = (0, er.useMultiStyleConfig)("FaceScanError");
          return (0, f.jsxs)(E.xu, {
            __css: o.container,
            children: [
              a,
              !!(null == n ? void 0 : n.length) &&
                (0, f.jsx)(H.K, {
                  width: ["xs", "sm", "lg"],
                  marginBottom: 4,
                  children: (0, f.jsx)(ey.aV, {
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    children: n.map((e, i) =>
                      (0, f.jsxs)(
                        ey.HC,
                        {
                          paddingX: 4,
                          paddingY: 6,
                          gap: 6,
                          borderRadius: "2xl",
                          backgroundColor: "primary.warmGrey.80",
                          display: "inline-flex",
                          alignItems: "center",
                          children: [
                            (0, f.jsx)(ep.E, {
                              src: "images/faceScan/".concat(
                                e.imgSource,
                                ".png",
                              ),
                              alt: e.imgAlt,
                            }),
                            (0, f.jsx)(C.x, {
                              "aria-label": e.message,
                              "data-testid": "Instructional video",
                              color: "primary.black.10",
                              textStyle: "heading.h7.bold",
                              children: e.message,
                            }),
                          ],
                        },
                        i,
                      ),
                    ),
                  }),
                }),
              (0, f.jsxs)(H.K, {
                minW: ["xs", "lg"],
                spacing: 4,
                align: "center",
                children: [
                  (0, f.jsx)(U.z, {
                    fullWidth: !0,
                    variant: "bdnaFill",
                    onClick: i,
                    children: r,
                  }),
                  (0, f.jsx)(U.z, {
                    fullWidth: !0,
                    variant: "tertiary",
                    onClick: t,
                    children: s,
                  }),
                ],
              }),
            ],
          });
        };
      var it = t(11933),
        ia = t(63125),
        ir = t(8023);
      let is = (e) => {
          let { feature: i } = e,
            t = (0, er.useStyleConfig)("RotateDevice");
          return (0, f.jsx)(E.xu, {
            __css: t,
            children: (0, f.jsx)(eQ.u, {
              axis: "both",
              children: (0, f.jsxs)(H.K, {
                gap: 6,
                children: [
                  (0, f.jsx)(eQ.M, {
                    children: (0, f.jsx)(ia.J, {
                      "aria-label": "Rotate Your Device Icon",
                      "data-testid": "Rotate Your Device Icon",
                      as: ir.RotateDeviceIcon,
                      boxSize: 30,
                      color: "white",
                    }),
                  }),
                  (0, f.jsx)(C.x, {
                    as: "h3",
                    children: "Please rotate your device to use ".concat(
                      i,
                      ".",
                    ),
                  }),
                ],
              }),
            }),
          });
        },
        io = (e) => {
          let { onSkipModule: i } = e;
          return (0, f.jsx)(E.xu, {
            role: "button",
            cursor: "pointer",
            width: "full",
            height: 10,
            padding: 2,
            position: "absolute",
            bottom: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "primary.white",
            onClick: i,
            children: (0, f.jsxs)(E.xu, {
              display: "flex",
              position: "absolute",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              children: [
                (0, f.jsx)(C.x, {
                  align: "center",
                  textStyle: "function.text.medium",
                  children: "Skip and select your focus areas manually",
                }),
                (0, f.jsx)(L.ArrowRightIcon, { height: 6, width: 6 }),
              ],
            }),
          });
        };
      var il = t(33280),
        ic = JSON.parse(
          '{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.5.1","a":"","k":"","d":"","tc":""},"fr":29.9700012207031,"ip":0,"op":59.0000024031193,"w":416,"h":570,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"1","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[207.567,13.106,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[184.615,184.615,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":30,"s":[47.842,47.842,100]},{"t":59.0000024031193,"s":[184.615,184.615,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20.469,20.469],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.234,3.734],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"2","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[20.567,145.637,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[55.756,55.756,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":30,"s":[184.615,184.615,100]},{"t":59.0000024031193,"s":[55.756,55.756,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20.469,20.469],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.234,3.734],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"3","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[207.567,145.637,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[89.063,89.063,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":30,"s":[164.231,164.231,100]},{"t":59.0000024031193,"s":[89.063,89.063,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20.469,20.469],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.234,3.734],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"4","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[393.067,145.637,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[191.063,191.063,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":30,"s":[80.018,80.018,100]},{"t":59.0000024031193,"s":[191.063,191.063,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20.469,20.469],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.234,3.734],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"5","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[20.817,278.106,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[184.615,184.615,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":30,"s":[36.556,36.556,100]},{"t":59.0000024031193,"s":[184.615,184.615,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20.469,20.469],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.234,3.734],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"6","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[207.567,278.168,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[36.556,36.556,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":30,"s":[165.511,165.511,100]},{"t":59.0000024031193,"s":[36.556,36.556,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20.469,20.469],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.234,3.734],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"7","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[393.067,278.106,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[120.186,120.186,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":30,"s":[30.7,30.7,100]},{"t":59.0000024031193,"s":[120.186,120.186,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20.469,20.469],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.234,3.734],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"8","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[20.567,410.7,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[70.074,70.074,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":30,"s":[184.701,184.701,100]},{"t":59.0000024031193,"s":[70.074,70.074,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20.469,20.469],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.234,3.734],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"9","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[207.567,410.7,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[184.615,184.615,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":30,"s":[55.756,55.756,100]},{"t":59.0000024031193,"s":[184.615,184.615,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20.469,20.469],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.234,3.734],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"10","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[393.067,410.7,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[84.392,84.392,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":30,"s":[127.345,127.345,100]},{"t":59.0000024031193,"s":[84.392,84.392,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20.469,20.469],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.234,3.734],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":61.0000024845809,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"11","sr":1,"ks":{"o":{"a":0,"k":80,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[207.567,543.231,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[43.228,43.228,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":30,"s":[172.184,172.184,100]},{"t":59.0000024031193,"s":[43.228,43.228,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20.469,20.469],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0.234,3.734],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":61.0000024845809,"st":0,"bm":0}],"markers":[]}',
        ),
        id = t(57773),
        iu = () => {
          let e = (0, eo._)(),
            i = (0, id.l)();
          return {
            getCenterScreenThreshold: () =>
              e ? { x: 0.04, y: 0.04 } : { x: 0.03, y: 0.03 },
            getDistanceThreshold: () =>
              e
                ? { upper: 0.3, lower: 0.2 }
                : i
                  ? { upper: 0.4, lower: 0.3 }
                  : { upper: 0.3, lower: 0.25 },
            getRectangleAreaSize: () =>
              e
                ? { height: "365px", width: "260px" }
                : i
                  ? { height: "550px", width: "400px" }
                  : { height: "700px", width: "500px" },
          };
        };
      let ih = (e, i, t, n, a) => {
          let { getDistanceThreshold: r } = iu(),
            [s, o] = (0, j.useState)(),
            [l, c] = (0, j.useState)(!1),
            [d, u] = (0, j.useState)(),
            [h, x] = (0, j.useState)(!1),
            [m, g] = (0, j.useState)(),
            [p, y] = (0, j.useState)(!1),
            [b, k] = (0, j.useState)(),
            [f, v] = (0, j.useState)(!1),
            [S, w] = (0, j.useState)(),
            C = (e) => {
              switch (e) {
                case "facing left":
                case "facing right":
                  return "Look forward";
                case "head up":
                  return "Tilt your head down";
                case "head down":
                  return "Tilt your head up";
                case null:
                  return "No face detected";
                default:
                  return null;
              }
            };
          return (
            (0, j.useEffect)(() => {
              let i = !!e && e > 50;
              u(i ? null : "Find somewhere brighter"), c(i);
            }, [e]),
            (0, j.useEffect)(() => {
              var e;
              a &&
                (y("facing center" === i),
                k(null !== (e = C(i)) && void 0 !== e ? e : null),
                i || (x(!1), g("No face detected")));
            }, [i, a]),
            (0, j.useEffect)(() => {
              a &&
                (t && t < r().lower
                  ? w("Move further away")
                  : t && t > r().upper
                    ? (w("Move closer"), v(!1))
                    : (w(null), v(!0)));
            }, [t, r, a]),
            (0, j.useEffect)(() => {
              a && !n
                ? (g("Move to center of screen"), x(!1))
                : (g(null), x(!0));
            }, [a, n]),
            (0, j.useEffect)(() => {
              d ? o(d) : S ? o(S) : m ? o(m) : b ? o(b) : o("");
            }, [d, m, b, S]),
            {
              feedback: s,
              isLightingValid: l,
              isPositionValid: h,
              isLookStraightValid: p,
              isDistanceValid: f,
            }
          );
        },
        ix = {
          debug: !1,
          modelBasePath:
            "https://cdn.jsdelivr.net/npm/@vladmandic/human/models",
          face: {
            enabled: !0,
            iris: { enabled: !1 },
            distance: { enabled: !0 },
            emotion: { enabled: !1 },
            description: { enabled: !1 },
          },
          gesture: { enabled: !1 },
          body: { enabled: !1 },
          hand: { enabled: !1 },
          object: { enabled: !1 },
          filter: { enabled: !1 },
          segmentation: { enabled: !1 },
        },
        im = {
          drawLabels: !1,
          drawBoxes: !1,
          drawAttention: !1,
          drawGestures: !1,
          drawPolygons: !0,
          drawPoints: !1,
          drawGaze: !1,
          color: "rgb(114, 94, 233)",
          useDepth: !1,
        },
        ig = () => {
          var e;
          return (
            (null === (e = window) || void 0 === e
              ? void 0
              : e.FACE_SCAN_DEBUG) === !0
          );
        },
        ip = function () {
          for (var e = arguments.length, i = Array(e), t = 0; t < e; t++)
            i[t] = arguments[t];
          ig() && console.log(i);
        },
        iy = function (e, i) {
          let t =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            [n, a] = (0, j.useState)(!1),
            [r, s] = (0, j.useState)(!1),
            [o, l] = (0, j.useState)(),
            [c, d] = (0, j.useState)(null),
            [u, h] = (0, j.useState)(!1),
            [x, m] = (0, j.useState)(null),
            [g, p] = (0, j.useState)(null),
            { getCenterScreenThreshold: y } = iu(),
            { sendAnalyticsEvent: b } = (0, T.z)(),
            k = async function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1;
              if (e < 0) return;
              let i = !1,
                t = setTimeout(async () => {
                  i ||
                    (b(D.iN.bdnaDebug.bind(D.iN), B.$.BDNA_DEBUG, {
                      action_name: "Load human lib",
                      action_value: "Timeout: Disabling face detection",
                    }),
                    (ix.face.enabled = !1),
                    m(!1),
                    await k(e - 1));
                }, 3e3);
              try {
                let e = new (await eU())(ix);
                await e.warmup(),
                  (i = !0),
                  clearTimeout(t),
                  b(D.iN.bdnaDebug.bind(D.iN), B.$.BDNA_DEBUG, {
                    action_name: "Load human lib",
                    action_value: "Success",
                  }),
                  m(ix.face.enabled),
                  l(e),
                  a(!0);
              } catch (i) {
                b(D.iN.bdnaDebug.bind(D.iN), B.$.BDNA_DEBUG, {
                  action_name: "Load human lib",
                  action_value: "Error",
                }),
                  clearTimeout(t),
                  e > 0 ? k(e - 1) : s(!0);
              }
            };
          (0, j.useEffect)(() => {
            k();
          }, []);
          let f = (0, j.useCallback)(
              (e) => {
                if (!(null == i ? void 0 : i.current))
                  throw Error("Canvas not initialised");
                let n = i.current.getContext("2d");
                t && n && (n.translate(i.current.width, 0), n.scale(-1, 1)),
                  e(),
                  t && n && (n.scale(-1, 1), n.translate(-i.current.width, 0));
              },
              [e, i, o],
            ),
            v = (0, j.useCallback)(() => {
              if (!o) throw Error("Human not initialised");
              if (!e) throw Error("Video not initialised");
              if (!(null == i ? void 0 : i.current))
                throw Error("Canvas not initialised");
              f(() => {
                if (!(null == i ? void 0 : i.current))
                  throw Error("Canvas not initialised");
                o.draw.canvas(e, i.current);
              });
            }, [e, i, o]),
            S = function () {
              let i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null == o
                    ? void 0
                    : o.result;
              p(
                (function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null == o
                          ? void 0
                          : o.result,
                    i = null == e ? void 0 : e.face[0];
                  return (null == i ? void 0 : i.distance) ? i.distance : null;
                })(i),
              ),
                d(
                  E(
                    (function () {
                      var e, i;
                      let t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null == o
                            ? void 0
                            : o.result;
                      return null == t
                        ? void 0
                        : null === (i = t.face[0]) || void 0 === i
                          ? void 0
                          : null === (e = i.rotation) || void 0 === e
                            ? void 0
                            : e.angle;
                    })(i),
                  ),
                ),
                h(
                  (function () {
                    let i =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null == o
                          ? void 0
                          : o.result;
                    if (
                      x &&
                      (null == i ? void 0 : i.face) &&
                      i.face.length > 0
                    ) {
                      let [t, n, a, r] = i.face[0].box,
                        s = e.videoWidth,
                        o = e.videoHeight,
                        l = s / 2,
                        c = o / 2;
                      if (l && c) {
                        let { x: e, y: i } = y();
                        return (
                          Math.abs(t + a / 2 - l) < s * e &&
                          Math.abs(n + r / 2 - c) < o * i
                        );
                      }
                    }
                    return !1;
                  })(i),
                );
            },
            w = (0, j.useCallback)(() => {
              if (!o) throw Error("Human not initialised");
              if (!e) throw Error("Video not initialised");
              if (!(null == i ? void 0 : i.current))
                throw Error("Canvas not initialised");
              o.detect(e);
              let t = o.next(o.result);
              return S(t), ip("[Human] Results", t), t;
            }, [e, i, o]),
            C = (0, j.useCallback)(() => {
              if (!x) return;
              if (!o) throw Error("Human not initialised");
              if (!e) throw Error("Video not initialised");
              if (!(null == i ? void 0 : i.current))
                throw Error("Canvas not initialised");
              let t = w();
              t &&
                f(() => {
                  if (!(null == i ? void 0 : i.current))
                    throw Error("Canvas not initialised");
                  o.draw.all(i.current, t, im);
                });
            }, [e, i, o]),
            E = (e) =>
              e
                ? e.yaw < -0.1
                  ? "facing left"
                  : e.yaw > 0.1
                    ? "facing right"
                    : e.pitch > 0.2
                      ? "head down"
                      : e.pitch < -0.2
                        ? "head up"
                        : "facing center"
                : null;
          return {
            isReady: n,
            isError: r,
            human: o,
            renderVideo: v,
            renderHumanDraw: C,
            facePosition: c,
            isFaceCenterScreen: u,
            getFaceGesturePosition: E,
            faceDistance: g,
            hasFaceDetection: x,
          };
        },
        ib = (e) => {
          var i, t;
          let [n, a] = (0, j.useState)(!1),
            [r, s] = (0, j.useState)(),
            [o, l] = (0, j.useState)(null),
            c = () =>
              eY.tq || eY.Em
                ? {
                    facingMode: "user",
                    height: { min: window.innerWidth },
                    width: { min: window.innerHeight },
                    aspectRatio: 1.5,
                  }
                : {
                    facingMode: "user",
                    height: { min: document.body.clientHeight },
                    aspectRatio: 0.6,
                  },
            d = {
              audio: !1,
              video: {
                facingMode: "user",
                height: { ideal: c().height.min },
                width: {
                  ideal:
                    null === (t = c()) || void 0 === t
                      ? void 0
                      : null === (i = t.width) || void 0 === i
                        ? void 0
                        : i.min,
                },
                aspectRatio: c().aspectRatio,
              },
            };
          return (
            (0, j.useEffect)(() => {
              let i;
              let t = document.createElement("video");
              (t.style.display = "none"),
                (t.id = "video"),
                (t.playsInline = !0),
                s(t);
              let n = null != e ? e : d;
              return (
                (async () => {
                  try {
                    (i = await navigator.mediaDevices.getUserMedia(n)),
                      (t.srcObject = i),
                      (t.onloadeddata = () => {
                        t.play()
                          .then(() => {
                            a(!0);
                          })
                          .catch((e) => {
                            l("Error playing video: ".concat(e.message));
                          });
                      });
                  } catch (e) {
                    e instanceof Error &&
                      (l(e.message),
                      console.error("Error accessing webcam:", e));
                  }
                })(),
                () => {
                  i &&
                    i.getTracks().forEach(function (e) {
                      e.stop();
                    });
                }
              );
            }, []),
            { isReady: n, video: r, stop, error: o }
          );
        },
        ik = (e) => {
          let i = 0,
            t = e.getContext("2d", { willReadFrequently: !0 });
          if (!t) throw Error("Context not found for canvas");
          let n = t.getImageData(0, 0, e.width, e.height).data;
          for (let e = 0, t = n.length; e < t; e += 4)
            i += Math.floor((n[e] + n[e + 1] + n[e + 2]) / 3);
          return Math.floor(i / (e.width * e.height));
        },
        iv = { format: "image/jpeg", screenshotQuality: 0.9 },
        ij = function (e) {
          var i;
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iv;
          if (!e) throw Error("Canvas is required for getScreenShot");
          return e.toDataURL(
            t.format,
            null !== (i = t.screenshotQuality) && void 0 !== i
              ? i
              : iv.screenshotQuality,
          );
        };
      var iS = t(96097),
        iw = t(81391),
        iC = () =>
          (0, f.jsx)(E.xu, {
            bg: "primary.black.10",
            h: "100vh",
            w: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            children: (0, f.jsxs)(I.g, {
              spacing: 4,
              children: [
                (0, f.jsx)(iw.$, { color: "primary.white", size: "lg" }),
                (0, f.jsx)(C.x, {
                  textStyle: "heading.h5.bold",
                  textColor: "primary.white",
                  textAlign: "center",
                  marginTop: "32px",
                  children: "Camera is loading",
                }),
              ],
            }),
          }),
        iE = (e) => {
          let { onClick: i, isDisabled: t, text: n } = e;
          return (0, f.jsxs)("button", {
            "aria-label": "Capture button",
            "data-testid": "Capture button",
            onClick: i,
            disabled: t,
            style: {
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              opacity: t ? 0.6 : 1,
            },
            children: [
              (0, f.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "85",
                height: "85",
                viewBox: "0 0 96 96",
                fill: "none",
                children: [
                  (0, f.jsx)("circle", {
                    opacity: "0.4",
                    cx: "48",
                    cy: "48",
                    r: "48",
                    fill: "url(#paint0_linear_4275_13062)",
                  }),
                  (0, f.jsx)("circle", {
                    cx: "48",
                    cy: "48",
                    r: "44",
                    fill: "url(#paint1_linear_4275_13062)",
                  }),
                  (0, f.jsx)("circle", {
                    cx: "48",
                    cy: "48",
                    r: "36",
                    fill: "white",
                  }),
                  (0, f.jsxs)("defs", {
                    children: [
                      (0, f.jsxs)("linearGradient", {
                        id: "paint0_linear_4275_13062",
                        x1: "82.2353",
                        y1: "7.65359e-06",
                        x2: "0.657652",
                        y2: "96.5556",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, f.jsx)("stop", {
                            offset: "0.203125",
                            stopColor: "#6558EE",
                          }),
                          (0, f.jsx)("stop", {
                            offset: "0.760417",
                            stopColor: "#7E5EE8",
                          }),
                        ],
                      }),
                      (0, f.jsxs)("linearGradient", {
                        id: "paint1_linear_4275_13062",
                        x1: "79.3824",
                        y1: "4.00001",
                        x2: "4.60285",
                        y2: "92.5093",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, f.jsx)("stop", {
                            offset: "0.203125",
                            stopColor: "#6558EE",
                          }),
                          (0, f.jsx)("stop", {
                            offset: "0.760417",
                            stopColor: "#7E5EE8",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              n &&
                (0, f.jsx)("span", {
                  style: { position: "relative", zIndex: 1 },
                  children: n,
                }),
            ],
          });
        },
        iI = t(5048),
        i_ = t(58835);
      let iA = (e) => {
        let { isValid: i, label: t } = e;
        return (0, f.jsx)(ec.V, {
          variant: i ? "pass" : "fail",
          icon: i
            ? (0, f.jsx)(L.TickCircledFilledIcon, {
                height: 6,
                width: 6,
                color: "black.primary.10",
                childStrokeColor: "var(--chakra-colors-semantic-green-50)",
              })
            : (0, f.jsx)(L.CrossCircledFilledIcon, {
                height: 6,
                width: 6,
                color: "primary.white",
                childStrokeColor:
                  "var(--chakra-colors-primary-black-10\\[\\@0-7\\])",
              }),
          children: t,
        });
      };
      var iD = (e) => {
        let {
            isLightingValid: i,
            isPositionValid: t,
            isLookStraightValid: n,
            isFaceValid: a,
            isAnimationVisible: r,
            hasFaceDetection: s,
          } = e,
          { getRectangleAreaSize: o } = iu(),
          l = o(),
          c = () =>
            (0, f.jsxs)(et.k, {
              position: "absolute",
              gap: 1,
              top: 18,
              children: [
                (0, f.jsx)(iA, { isValid: i, label: "Lighting" }),
                s &&
                  (0, f.jsxs)(f.Fragment, {
                    children: [
                      (0, f.jsx)(iA, { isValid: t, label: "Head position" }),
                      (0, f.jsx)(iA, { isValid: n, label: "Look forward" }),
                    ],
                  }),
              ],
            }),
          d = (e) => {
            let { isValid: i } = e;
            return (0, f.jsx)(et.k, {
              direction: "column",
              justifyContent: "center",
              alignItems: "center",
              width: l.width,
              height: l.height,
              mb: i ? 0 : 4,
              mt: i ? 24 : 0,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundImage: i
                ? "/images/faceScan/rectangleOutlineValid.svg"
                : "/images/faceScan/rectangleOutline.svg",
              "data-testid": "camera-frame",
            });
          },
          u = (e, i) => (0, f.jsx)(iI.E.div, { ...e, children: i });
        return a || r
          ? a && !r
            ? (0, f.jsxs)(f.Fragment, {
                children: [(0, f.jsx)(d, { isValid: !1 }), (0, f.jsx)(c, {})],
              })
            : r
              ? (0, f.jsxs)(f.Fragment, {
                  children: [
                    u(
                      {
                        animate: { scale: [1, 1.05, 1], rotate: 0 },
                        transition: { duration: 0.5 },
                      },
                      (0, f.jsx)(d, { isValid: !0 }),
                    ),
                    (0, f.jsx)(E.xu, {
                      as: "span",
                      opacity: 0.5,
                      "data-testid": "valid-face-icon",
                      children: (0, f.jsx)(i_.t, {
                        height: 20,
                        width: 20,
                        color: "semantic.green.50",
                      }),
                    }),
                  ],
                })
              : null
          : (0, f.jsxs)(f.Fragment, {
              children: [
                u(
                  {
                    animate: { rotate: [0, 5, -5, 0] },
                    transition: {
                      repeatType: "mirror",
                      duration: 0.3,
                      delay: 3,
                      repeatDelay: 4,
                      repeat: 1 / 0,
                    },
                  },
                  (0, f.jsx)(d, { isValid: !1 }),
                ),
                (0, f.jsx)(c, {}),
              ],
            });
      };
      let iN = (0, iS.N)(),
        iB = (e) => {
          let {
              isLoadingFaceScanResults: i,
              capturedImage: t,
              handleCapturePhoto: n,
              onSkipModule: a,
              restartFaceScan: r,
            } = e,
            s = (0, j.useRef)(null),
            [o, l] = (0, j.useState)(),
            [c, d] = (0, j.useState)(),
            [u, h] = (0, j.useState)(0),
            x = (0, eL.CR)(),
            { video: m, isReady: g, error: p } = ib(),
            {
              isReady: y,
              isError: b,
              renderVideo: k,
              renderHumanDraw: v,
              facePosition: S,
              isFaceCenterScreen: w,
              faceDistance: I,
              hasFaceDetection: _,
            } = iy(m, s),
            {
              isLightingValid: A,
              isPositionValid: N,
              isLookStraightValid: P,
              feedback: R,
              isDistanceValid: L,
            } = ih(u, S, I, w, _),
            [F, H] = (0, j.useState)(),
            [O, G] = (0, j.useState)(!1),
            { sendAnalyticsEvent: V } = (0, T.z)(),
            z = g && y;
          (0, j.useEffect)(() => {
            y &&
              V(D.iN.bdnaDebug.bind(D.iN), B.$.BDNA_DEBUG, {
                action_name: "Human ready",
                action_value: "".concat(y),
              });
          }, [y]),
            (0, j.useEffect)(() => {
              g &&
                V(D.iN.bdnaDebug.bind(D.iN), B.$.BDNA_DEBUG, {
                  action_name: "Webcam ready",
                  action_value: "".concat(g),
                });
            }, [g]);
          let q = A && N && P && L,
            W = () => {
              o && clearInterval(o);
            },
            M = () => {
              x({ type: eL.nz.Delete, id: iN }), c && clearTimeout(c);
            };
          (0, j.useEffect)(() => {
            q ? H("Perfect! Tap button") : H(R);
          }, [A, N, P, L, q]),
            (0, j.useEffect)(() => {
              O && H("Got it!");
            }, [t, O]),
            (0, j.useEffect)(() => {
              t || q || H(R);
            }, [R, t]),
            (0, j.useEffect)(() => {
              if (z && m && s.current)
                return (
                  m &&
                    ((s.current.width = m.videoWidth),
                    (s.current.height = m.videoHeight),
                    (m.onresize = () => {
                      (s.current.width = m.videoWidth),
                        (s.current.height = m.videoHeight);
                    })),
                  o ||
                    (V(D.iN.bdnaDebug.bind(D.iN), B.$.BDNA_DEBUG, {
                      action_name: "Start rendering",
                      action_value: "true",
                    }),
                    l(
                      setInterval(() => {
                        z &&
                          !m.paused &&
                          s.current &&
                          (k(), v(), h(ik(s.current)));
                      }, 100),
                    )),
                  c ||
                    d(
                      setTimeout(() => {
                        V(D.iN.bdnaDebug.bind(D.iN), B.$.BDNA_DEBUG, {
                          action_name: "Having trouble top banner error",
                          action_value: "error",
                        }),
                          x({
                            type: eL.nz.Add,
                            id: iN,
                            alertKey: "face-scan-degraded",
                            message: "Having trouble?",
                            variant: eL.hq.Warning,
                            buttonLabel: "Select focus area manually",
                            onButtonClick: () => {
                              V(D.iN.ctaClicked.bind(D.iN), B.$.CTA_CLICKED, {
                                click_name: "Select focus area manually",
                                click_location: "Having trouble",
                              }),
                                a();
                            },
                            keepOpen: !0,
                          });
                      }, 7e3),
                    ),
                  () => {
                    W(), M();
                  }
                );
            }, [z, t, c]);
          let Q = (0, j.useCallback)(async () => {
            var e;
            if (!s.current) return;
            G(!0), W(), M(), k();
            let i = null !== (e = ij(s.current)) && void 0 !== e ? e : null;
            setTimeout(() => {
              s.current &&
                n(i, {
                  isLightingValid: A,
                  isPositionValid: N,
                  isLookStraightValid: P,
                });
            }, 600);
          }, [z, s, O, A, N, P]);
          return b
            ? (V(D.iN.bdnaDebug.bind(D.iN), B.$.BDNA_DEBUG, {
                action_name: "Camera or API failure error",
                action_value: "error",
              }),
              (0, f.jsx)(E.xu, {
                backgroundColor: "primary.warmGrey.90",
                children: (0, f.jsx)(it._, {
                  title: "Oops! Something went wrong",
                  description:
                    "An error has occurred, please try again or select your focus areas manually",
                  buttonCallback: () => {
                    V(D.iN.ctaClicked.bind(D.iN), B.$.CTA_CLICKED, {
                      click_name: "Retry face scan",
                      click_location: "Camera or API bug",
                    }),
                      r();
                  },
                  buttonText: "Retry face scan",
                  height: "100vh",
                  children: (0, f.jsx)(U.z, {
                    variant: "secondary",
                    "data-testid": "Select focus area manually",
                    fullWidth: !0,
                    onClick: () => {
                      V(D.iN.ctaClicked.bind(D.iN), B.$.CTA_CLICKED, {
                        click_name: "Select focus area manually",
                        click_location: "Camera or API bug",
                      }),
                        a();
                    },
                    children: "Select focus area manually",
                  }),
                }),
              }))
            : z
              ? p
                ? (V(D.iN.bdnaDebug.bind(D.iN), B.$.BDNA_DEBUG, {
                    action_name: "Webcam error",
                    action_value: p,
                  }),
                  (0, f.jsx)(eQ.u, {
                    children: (0, f.jsx)(C.x, { children: p }),
                  }))
                : t
                  ? (0, f.jsxs)(f.Fragment, {
                      children: [
                        (0, f.jsx)(eQ.u, {
                          width: "100%",
                          children: (0, f.jsx)(ep.E, {
                            src: t,
                            width: "100%",
                            alt: "",
                          }),
                        }),
                        i &&
                          (0, f.jsx)(eQ.u, {
                            children: (0, f.jsx)(il.nI, {
                              autoplay: !0,
                              loop: !0,
                              style: {
                                width: "18rem",
                                height: "18rem",
                                zIndex: "modal",
                              },
                              data: ic,
                            }),
                          }),
                      ],
                    })
                  : (0, f.jsxs)(et.k, {
                      alignItems: "center",
                      justifyContent: "center",
                      direction: "column",
                      children: [
                        (0, f.jsx)(et.k, {
                          direction: "column",
                          align: "center",
                          justify: "center",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          gap: 6,
                          w: "100%",
                          h: "100%",
                          children: (0, f.jsx)(iD, {
                            isLightingValid: A,
                            isPositionValid: N,
                            isLookStraightValid: P,
                            isFaceValid: q,
                            isAnimationVisible: O,
                            hasFaceDetection: _,
                          }),
                        }),
                        F &&
                          (0, f.jsx)(eQ.u, {
                            children: (0, f.jsx)(C.x, {
                              textColor: "primary.white",
                              textStyle: "body.semibold",
                              whiteSpace: "nowrap",
                              style: {
                                backgroundColor: "rgba(0, 0, 0, 0.30)",
                                padding: "1rem",
                                borderRadius: "1rem",
                              },
                              children: F,
                            }),
                          }),
                        (0, f.jsx)("canvas", { ref: s, id: "canvas" }),
                        !O &&
                          (0, f.jsx)(E.xu, {
                            position: "absolute",
                            bottom: 10,
                            children: (0, f.jsx)(iE, {
                              isDisabled: !1,
                              onClick: Q,
                            }),
                          }),
                      ],
                    })
              : (0, f.jsx)(iC, {});
        },
        iT = (e) => {
          let {
            capturedImage: i,
            isLoadingFaceScanResults: t,
            isComplete: n,
          } = e;
          return (0, f.jsx)(E.xu, {
            zIndex: "popover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            w: "100%",
            h: "15%",
            children: (0, f.jsx)(C.x, {
              textAlign: "center",
              justifyContent: "center",
              textStyle: "heading.h6.bold",
              textColor: i && n ? "white" : "primary.black.10",
              color: "white",
              children: i
                ? !i || t || n
                  ? i && t && !n
                    ? "Analysing your photo"
                    : n
                      ? "Your results are ready!"
                      : void 0
                  : "Looking good?"
                : "Position your face in the frame",
            }),
          });
        };
      var iP = t(90058),
        iR = (e) => {
          let { isComplete: i, animDuration: t, handleNextPage: n } = e;
          return (
            (0, j.useEffect)(() => {
              if (i) {
                let e = setTimeout(() => {
                  n();
                }, 2e3);
                return () => clearTimeout(e);
              }
            }, [i, n]),
            (0, f.jsxs)(et.k, {
              flexDirection: "column",
              w: { base: "100%", md: "30%" },
              overflow: "hidden",
              px: 4,
              children: [
                (0, f.jsxs)(iI.E.div, {
                  style: { display: "flex", width: "100%" },
                  variants: {
                    initial: { x: "0%" },
                    animate: {
                      x: ["0%", "0%", "-100%", "-100%", "-200%"],
                      transition: {
                        duration: t,
                        times: [0, 2 / t, 2.5 / t, 4.5 / t, 5 / t],
                        ease: "easeInOut",
                      },
                    },
                  },
                  initial: "initial",
                  animate: "animate",
                  children: [
                    (0, f.jsx)(C.x, {
                      minW: "100%",
                      textAlign: "center",
                      children: "Examining 20 skin concerns",
                    }),
                    (0, f.jsx)(C.x, {
                      minW: "100%",
                      textAlign: "center",
                      children: "10 million face scans and counting",
                    }),
                    (0, f.jsx)(C.x, {
                      minW: "100%",
                      textAlign: "center",
                      children: "Nearly done",
                    }),
                  ],
                }),
                (0, f.jsx)(E.xu, {
                  w: "100%",
                  h: 2.5,
                  backgroundColor: "primary.black.20",
                  mt: 6,
                  borderRadius: "full",
                  overflow: "hidden",
                  children: (0, f.jsx)(iI.E.span, {
                    style: {
                      display: "flex",
                      backgroundColor: "#6558EE",
                      height: "100%",
                      borderRadius: "full",
                    },
                    variants: {
                      initial: { width: "0" },
                      animate: {
                        width: ["0%", "100%"],
                        transition: {
                          duration: t,
                          times: [0, 1],
                          ease: "linear",
                        },
                      },
                    },
                    initial: "initial",
                    animate: "animate",
                  }),
                }),
              ],
            })
          );
        },
        iL = (e) => {
          let {
              capturedImage: i,
              isLoadingFaceScanResults: t,
              isComplete: n,
              animDuration: a,
              handleNextPage: r,
              handleUpload: s,
              handleRetake: o,
            } = e,
            l = !t && !n;
          return (
            (0, j.useEffect)(() => {
              if (n) {
                let e = setTimeout(() => {
                  r();
                }, 2e3);
                return () => clearTimeout(e);
              }
            }, [n, r]),
            (0, f.jsxs)(E.xu, {
              position: "relative",
              bg: "gray.900",
              color: "white",
              w: "100dvw",
              h: "100dvh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 4,
              children: [
                (0, f.jsxs)(E.xu, {
                  mt: 4,
                  borderRadius: "2xl",
                  overflow: "hidden",
                  boxShadow: "lg",
                  border: n ? "solid 5px" : "",
                  borderColor: "semantic.green.50",
                  children: [
                    t &&
                      (0, f.jsx)(eQ.u, {
                        children: (0, f.jsx)(il.nI, {
                          autoplay: !0,
                          loop: !0,
                          style: {
                            width: "18rem",
                            height: "18rem",
                            zIndex: "modal",
                          },
                          data: ic,
                        }),
                      }),
                    (0, f.jsx)(E.xu, {
                      "aria-label": "Face scan photo",
                      "data-testid": "Face scan photo",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundImage: i,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      h: ["sm", "md"],
                      w: "xs",
                    }),
                  ],
                }),
                (0, f.jsxs)(et.k, {
                  width: "inherit",
                  flexDirection: "column",
                  alignContent: "stretch",
                  alignItems: "center",
                  gap: 4,
                  marginTop: 4,
                  position: "sticky",
                  right: 0,
                  bottom: 0,
                  left: 0,
                  paddingY: { base: 2, lg: 4 },
                  children: [
                    !n &&
                      !t &&
                      (0, f.jsx)(iP.z, {
                        width: ["80%", "50%"],
                        size: "md",
                        onClick: s,
                        variant: "primaryLight",
                        "data-testid": "Use photo",
                        children: "Use Photo",
                      }),
                    t &&
                      (0, f.jsx)(iR, {
                        handleNextPage: r,
                        isComplete: n,
                        animDuration: a,
                      }),
                    n &&
                      (0, f.jsx)(E.xu, {
                        "data-testid": "valid-face-icon",
                        children: (0, f.jsx)(i_.t, {
                          height: 13,
                          width: 13,
                          color: "semantic.green.50",
                        }),
                      }),
                    l &&
                      (0, f.jsx)(iP.z, {
                        size: "md",
                        onClick: o,
                        variant: "tertiaryLight",
                        "aria-label": "Re-take your photo",
                        "data-testid": "Re-take photo",
                        children: "Re-take",
                      }),
                  ],
                }),
              ],
            })
          );
        };
      let iF = (e) => {
        let {
            onSkipModule: i,
            onRestartModule: t,
            age: n,
            gender: a,
            skinType: r,
            sectionIndex: s,
            analyticsData: o,
            onChange: l,
            onScanSuccess: c,
            onImageUploaded: d,
          } = e,
          u = e2(),
          h = ej(),
          { navigationState: x } = ev(),
          m = () => {
            h({
              type: y.updateNavigationState,
              payload: {
                ...x,
                currentSectionQuestionIndex: x.currentSectionQuestionIndex + 1,
              },
            });
          },
          p = () => {
            h({
              type: y.updateNavigationState,
              payload: {
                ...x,
                currentSectionQuestionIndex: x.currentSectionQuestionIndex - 1,
              },
            });
          },
          { compressResizeImage: b } = e5(),
          { isLandscape: k } = (0, eY.Nt)(),
          [v, S] = (0, j.useState)(!1),
          [w, C] = (0, j.useState)(""),
          [I, _] = (0, j.useState)(null),
          [A, N] = (0, j.useState)(),
          [P, R] = (0, j.useState)(!1),
          [F, { on: H }] = (0, eM.k)(!1),
          [O, G] = (0, j.useState)(!1),
          [V, z] = (0, j.useState)(!1),
          { sendAnalyticsEvent: q } = (0, T.z)(),
          W = () => e8(S, C);
        (0, j.useEffect)(() => {
          W().then((e) => {
            q(D.iN.bdnaDebug.bind(D.iN), B.$.BDNA_DEBUG, {
              action_name: "Camera check",
              action_value: e ? "Authorized" : "Refused",
            });
          });
        }, []),
          (0, j.useEffect)(() => {
            let e = setTimeout(() => {
              H();
            }, 8e3);
            return () => clearTimeout(e);
          }, [H]),
          (0, j.useEffect)(() => {
            A && (G(!0), l(""));
          }, [s, A]);
        let M = async () => {
            m(),
              u.handleBdnaChoiceSelected(g.CAPTURE_PHOTO, o),
              R(!0),
              null === I && z(!0);
            let e = await b(null != I ? I : "", {
              maxSizeMB: 0.5,
              maxWidthOrHeight: 800,
            });
            d(e);
            let i = Date.now();
            try {
              let i = await eG.Z.uploadImage({
                age: n,
                gender: a,
                image: "".concat(e),
                declared_skin_type: r,
              });
              N(i);
            } catch (e) {
              z(!0);
            } finally {
              let e = 7e3 - (Date.now() - i);
              e > 0 && (await new Promise((i) => setTimeout(i, e))), R(!1);
            }
          },
          Q = () => {
            z(!1), R(!1), _(null);
          },
          K = () => t();
        return V
          ? (q(D.iN.bdnaDebug.bind(D.iN), B.$.BDNA_DEBUG, {
              action_name: "Poor photo error",
              action_value: "error",
            }),
            (0, f.jsx)(ii, {
              onRetake: () => {
                q(D.iN.ctaClicked.bind(D.iN), B.$.CTA_CLICKED, {
                  click_name: "Retry face scan",
                  click_location: "Bad image",
                }),
                  Q();
              },
              onTryAgainLater: () => {
                q(D.iN.ctaClicked.bind(D.iN), B.$.CTA_CLICKED, {
                  click_name: "Select focus area manually",
                  click_location: "Bad image",
                }),
                  i();
              },
            }))
          : "" !== w
            ? (0, f.jsx)(it._, {
                title: "Please allow access to access to your camera",
                description:
                  "To take the face scan you will need to give permission for ‘Noli.com’ to have access to your camera",
                buttonCallback: () => {
                  q(D.iN.ctaClicked.bind(D.iN), B.$.CTA_CLICKED, {
                    click_name: "Retry face scan",
                    click_location: "No camera permission",
                  }),
                    K();
                },
                buttonText: "Retry face scan",
                height: "100vh",
                children: (0, f.jsx)(U.z, {
                  variant: "secondary",
                  fullWidth: !0,
                  onClick: () => {
                    q(D.iN.ctaClicked.bind(D.iN), B.$.CTA_CLICKED, {
                      click_name: "Select focus area manually",
                      click_location: "No camera permission",
                    }),
                      i();
                  },
                  children: "Select focus area manually",
                }),
              })
            : k && (eY.tq || eY.Em)
              ? (0, f.jsx)(is, { feature: "Face Scan" })
              : (0, f.jsxs)(f.Fragment, {
                  children: [
                    (0, f.jsx)(E.xu, {
                      position: "relative",
                      w: "100%",
                      h: { md: "100dvh", lg: "95dvh" },
                      overflow: "hidden",
                      borderRadius: { lg: "2xl" },
                      backgroundColor: { lg: "primary.black.10" },
                      children: v
                        ? I
                          ? (0, f.jsxs)(f.Fragment, {
                              children: [
                                (0, f.jsx)(iT, {
                                  capturedImage: I,
                                  isLoadingFaceScanResults: P,
                                  isComplete: O && !P,
                                }),
                                (0, f.jsx)(iL, {
                                  isComplete: O && !P,
                                  isLoadingFaceScanResults: P,
                                  capturedImage: I,
                                  animDuration: 7,
                                  handleUpload: M,
                                  handleRetake: () => {
                                    u.handleBdnaChoiceSelected(g.RE_TAKE, o),
                                      p(),
                                      _(null);
                                  },
                                  handleNextPage: () => {
                                    m(),
                                      u.handleBdnaChoiceSelected(
                                        g.UPLOAD_PHOTO,
                                        o,
                                      ),
                                      c(A);
                                  },
                                }),
                              ],
                            })
                          : (0, f.jsxs)(f.Fragment, {
                              children: [
                                (0, f.jsx)(iB, {
                                  capturedImage: I,
                                  isLoadingFaceScanResults: P,
                                  handleCapturePhoto: (e, i) => {
                                    let {
                                      isLightingValid: t,
                                      isPositionValid: n,
                                      isLookStraightValid: a,
                                    } = i;
                                    m(),
                                      u.handleBdnaChoiceSelected(g.TAKE_PHOTO, {
                                        ...o,
                                        bdna_photo_lighting: t,
                                        bdna_photo_look_straight: a,
                                        bdna_photo_position: n,
                                      }),
                                      _(e);
                                  },
                                  onSkipModule: i,
                                  restartFaceScan: K,
                                }),
                                I &&
                                  (0, f.jsx)(iT, {
                                    capturedImage: I,
                                    isLoadingFaceScanResults: P,
                                    isComplete: O && !P,
                                  }),
                                (0, f.jsx)(eK.h, {
                                  zIndex: "popover",
                                  position: "absolute",
                                  top: F ? 15 : 5,
                                  right: 5,
                                  backgroundColor: "primary.white",
                                  backdropBlur: 4,
                                  opacity: 0.7,
                                  height: 8,
                                  width: 8,
                                  minWidth: 8,
                                  onClick: K,
                                  "aria-label": "go back",
                                  "data-testid": "go back",
                                  icon: (0, f.jsx)(L.CrossIcon, {
                                    color: "primary.black",
                                    height: 6,
                                    width: 6,
                                  }),
                                }),
                              ],
                            })
                        : (0, f.jsx)(eQ.u, { children: (0, f.jsx)(iC, {}) }),
                    }),
                    v && (0, f.jsx)(io, { onSkipModule: i }),
                  ],
                });
      };
      var iH = JSON.parse(
        '{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.5.7","a":"","k":"","d":"","tc":""},"fr":29.9700012207031,"ip":0,"op":270.000010997325,"w":600,"h":600,"nm":"VF 1Gradient visual","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 7","sr":1,"ks":{"o":{"a":0,"k":40,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":25,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":132,"s":[-360]},{"t":269.000010956595,"s":[0]}],"ix":10},"p":{"a":0,"k":[300.488,292.969,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":23,"s":[59.028,79.092,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":153,"s":[101.019,100,100]},{"t":269.000010956595,"s":[59.028,79.092,100]}],"ix":6}},"ao":0,"ef":[{"ty":29,"nm":"Gaussian Blur","np":5,"mn":"ADBE Gaussian Blur 2","ix":1,"en":1,"ef":[{"ty":0,"nm":"Blurriness","mn":"ADBE Gaussian Blur 2-0001","ix":1,"v":{"a":0,"k":120,"ix":1}},{"ty":7,"nm":"Blur Dimensions","mn":"ADBE Gaussian Blur 2-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":7,"nm":"Repeat Edge Pixels","mn":"ADBE Gaussian Blur 2-0003","ix":3,"v":{"a":0,"k":0,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[347.242,501.438],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.527,7.602],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270.000010997325,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 5","sr":1,"ks":{"o":{"a":0,"k":40,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":178,"s":[270]},{"t":269.000010956595,"s":[0]}],"ix":10},"p":{"a":0,"k":[300.488,292.969,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[79.092,79.092,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":170,"s":[88.336,86.497,100]},{"t":269.000010956595,"s":[79.092,79.092,100]}],"ix":6}},"ao":0,"ef":[{"ty":29,"nm":"Gaussian Blur","np":5,"mn":"ADBE Gaussian Blur 2","ix":1,"en":1,"ef":[{"ty":0,"nm":"Blurriness","mn":"ADBE Gaussian Blur 2-0001","ix":1,"v":{"a":0,"k":120,"ix":1}},{"ty":7,"nm":"Blur Dimensions","mn":"ADBE Gaussian Blur 2-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":7,"nm":"Repeat Edge Pixels","mn":"ADBE Gaussian Blur 2-0003","ix":3,"v":{"a":0,"k":0,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[347.242,501.438],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.245698824525,0.076920062304,0.775137841702,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.527,7.602],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270.000010997325,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":40,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":142,"s":[270]},{"t":269.000010956595,"s":[0]}],"ix":10},"p":{"a":0,"k":[300.488,292.969,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[79.092,79.092,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":134,"s":[88.336,86.497,100]},{"t":269.000010956595,"s":[79.092,79.092,100]}],"ix":6}},"ao":0,"ef":[{"ty":29,"nm":"Gaussian Blur","np":5,"mn":"ADBE Gaussian Blur 2","ix":1,"en":1,"ef":[{"ty":0,"nm":"Blurriness","mn":"ADBE Gaussian Blur 2-0001","ix":1,"v":{"a":0,"k":120,"ix":1}},{"ty":7,"nm":"Blur Dimensions","mn":"ADBE Gaussian Blur 2-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":7,"nm":"Repeat Edge Pixels","mn":"ADBE Gaussian Blur 2-0003","ix":3,"v":{"a":0,"k":0,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[347.242,501.438],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.597657680511,0.05624840036,0.845863997936,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.527,7.602],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270.000010997325,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":40,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":161,"s":[180]},{"t":269.000010956595,"s":[0]}],"ix":10},"p":{"a":0,"k":[300.488,292.969,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[98.735,79.092,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":153,"s":[107.979,86.497,100]},{"t":269.000010956595,"s":[98.735,79.092,100]}],"ix":6}},"ao":0,"ef":[{"ty":29,"nm":"Gaussian Blur","np":5,"mn":"ADBE Gaussian Blur 2","ix":1,"en":1,"ef":[{"ty":0,"nm":"Blurriness","mn":"ADBE Gaussian Blur 2-0001","ix":1,"v":{"a":0,"k":120,"ix":1}},{"ty":7,"nm":"Blur Dimensions","mn":"ADBE Gaussian Blur 2-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":7,"nm":"Repeat Edge Pixels","mn":"ADBE Gaussian Blur 2-0003","ix":3,"v":{"a":0,"k":0,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[347.242,501.438],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.177464529872,0.044472187757,0.786121308804,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.527,7.602],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270.000010997325,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Shape Layer 6","sr":1,"ks":{"o":{"a":0,"k":15,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":52,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":214,"s":[-360]},{"t":269.000010956595,"s":[0]}],"ix":10},"p":{"a":0,"k":[300.488,292.969,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":52,"s":[79.092,79.092,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":173,"s":[100,100,100]},{"t":269.000010956595,"s":[79,79,100]}],"ix":6}},"ao":0,"ef":[{"ty":29,"nm":"Gaussian Blur","np":5,"mn":"ADBE Gaussian Blur 2","ix":1,"en":1,"ef":[{"ty":0,"nm":"Blurriness","mn":"ADBE Gaussian Blur 2-0001","ix":1,"v":{"a":0,"k":120,"ix":1}},{"ty":7,"nm":"Blur Dimensions","mn":"ADBE Gaussian Blur 2-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":7,"nm":"Repeat Edge Pixels","mn":"ADBE Gaussian Blur 2-0003","ix":3,"v":{"a":0,"k":0,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[347.242,501.438],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0,1,0.881709498985,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.527,7.602],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":270.000010997325,"st":0,"bm":0}],"markers":[]}',
      );
      let iO = (e) => {
        let { image: i } = e;
        return (0, f.jsxs)(E.xu, {
          position: "relative",
          mt: { base: 10, lg: 20 },
          mb: { base: 2, lg: 0 },
          children: [
            (0, f.jsx)(E.xu, {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translateY(-50%) translateX(-50%)",
              width: "160%",
              height: "160%",
              filter: "blur(0.875rem)",
              children: (0, f.jsx)(il.nI, { autoplay: !0, loop: !0, data: iH }),
            }),
            (0, f.jsx)(et.k, {
              w: { base: "12.5rem", lg: "18.75rem" },
              h: { base: "12.5rem", lg: "18.75rem" },
              children: (0, f.jsx)(ep.E, {
                width: "100%",
                borderTopRadius: "50%",
                borderBottomRadius: "50%",
                objectFit: "cover",
                zIndex: 1,
                src: i,
                alt: "",
              }),
            }),
          ],
        });
      };
      var iG = t(33835);
      let iV = (e) => {
        let {
            onBackArrowClick: i,
            onSkipModule: t,
            setHasFinishedInstructions: n,
          } = e,
          { navigationState: a } = ev(),
          r = ej(),
          { handleBdnaChoiceSelected: s } = e2(),
          o = [
            {
              mediaSources: [
                {
                  src: "/videos/bdnaInstructions/fs_instruction_accessories.webm",
                  type: "video/webm",
                },
                {
                  src: "/videos/bdnaInstructions/fs_instruction_accessories.mp4",
                  type: "video/mp4",
                },
              ],
              placeholderImagePath:
                "/images/bdnaInstructions/fs_instruction_placeholder_accessories.png",
              title: (0, f.jsxs)(f.Fragment, {
                children: [
                  "Push your hair back and remove ",
                  (0, f.jsx)("br", {}),
                  " any make up or accessories",
                ],
              }),
            },
            {
              mediaSources: [
                {
                  src: "/videos/bdnaInstructions/fs_instruction_light.webm",
                  type: "video/webm",
                },
                {
                  src: "/videos/bdnaInstructions/fs_instruction_light.mp4",
                  type: "video/mp4",
                },
              ],
              placeholderImagePath:
                "/images/bdnaInstructions/fs_instruction_placeholder_light.png",
              title: (0, f.jsxs)(f.Fragment, {
                children: [
                  "Find a well lit area ",
                  (0, f.jsx)("br", {}),
                  " to take your photo",
                ],
              }),
            },
            {
              mediaSources: [
                {
                  src: "/videos/bdnaInstructions/fs_instruction_orientation.webm",
                  type: "video/webm",
                },
                {
                  src: "/videos/bdnaInstructions/fs_instruction_orientation.mp4",
                  type: "video/mp4",
                },
              ],
              placeholderImagePath:
                "/images/bdnaInstructions/fs_instruction_placeholder_orientation.png",
              title: (0, f.jsx)(f.Fragment, {
                children: "Look straight on with a neutral expression",
              }),
            },
          ],
          { currentSectionQuestionIndex: l } = a,
          c = (e) =>
            r({
              type: y.updateNavigationState,
              payload: { ...a, currentSectionQuestionIndex: e },
            }),
          d = o[l],
          u = () => {
            if ((s(), c(l + 1), l === o.length - 1)) return h();
          },
          h = () => {
            n(!0);
          },
          x = l === o.length - 1;
        return (0, f.jsxs)(et.k, {
          height: "100%",
          direction: "column",
          alignItems: "center",
          justifyContent: { base: "center", lg: "flex-start" },
          backgroundColor: "primary.warmGrey.90",
          borderRadius: { lg: "2xl" },
          gap: { lg: 6 },
          padding: { lg: 8 },
          children: [
            (0, f.jsx)(et.k, {
              justifyContent: "center",
              width: "100%",
              display: { base: "none", lg: "flex" },
              children: (0, f.jsx)(C.x, {
                textStyle: "body.semibold",
                color: "primary.black.40",
                children: "Before we get started",
              }),
            }),
            (0, f.jsx)(E.xu, {
              flex: { base: 1, lg: "inherit" },
              position: "relative",
              maxWidth: { lg: "sm" },
              width: "100%",
              children: (0, f.jsx)(E.xu, {
                position: { base: "absolute", lg: "relative" },
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
                borderRadius: { lg: "2xl" },
                overflow: "hidden",
                children:
                  !!d.mediaSources &&
                  (0, f.jsxs)(
                    "video",
                    {
                      loop: !0,
                      autoPlay: !0,
                      muted: !0,
                      playsInline: !0,
                      preload: "auto",
                      style: { margin: "auto", height: "100%" },
                      poster: d.placeholderImagePath,
                      children: [
                        d.mediaSources.map((e, i) =>
                          (0, f.jsx)(
                            "source",
                            { src: e.src, type: e.type },
                            "source-".concat(i),
                          ),
                        ),
                        "Your browser does not support the video tag.",
                      ],
                    },
                    l,
                  ),
              }),
            }),
            (0, f.jsxs)(et.k, {
              direction: "column",
              gap: 6,
              backgroundColor: "primary.warmGrey.90",
              padding: { base: 6, lg: 0 },
              borderTopRadius: "2xl",
              textAlign: "center",
              position: "relative",
              zIndex: 2,
              minHeight: { base: "30dvh", lg: 0 },
              maxWidth: { lg: "sm" },
              width: "100%",
              marginTop: { base: -4, lg: 0 },
              children: [
                (0, f.jsx)(C.x, {
                  textStyle: "heading.h5",
                  fontSize: "md",
                  children: d.title,
                }),
                (0, f.jsxs)(f.Fragment, {
                  children: [
                    (0, f.jsxs)(et.k, {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: x ? 4 : 0,
                      children: [
                        (0, f.jsx)(iG.a, {
                          direction: "left",
                          variant: "blackOutlineArrow",
                          ariaLabel:
                            "Go to previous face scan instruction page",
                          size: 14,
                          onClick: () => {
                            if (0 === l) return i();
                            c(l - 1), s();
                          },
                          dataTestId: "previous-instruction-screen-".concat(
                            l - 1,
                          ),
                        }),
                        x
                          ? (0, f.jsx)(U.z, {
                              variant: "bdnaFill",
                              fullWidth: !0,
                              onClick: u,
                              minHeight: 16,
                              "aria-label": "I'm ready",
                              "data-testid": "Next",
                              children: "I'm ready",
                            })
                          : (0, f.jsx)(ey.aV, {
                              display: "flex",
                              gap: 2,
                              alignItems: "center",
                              justifyContent: "center",
                              children: o.map((e, i) =>
                                (0, f.jsx)(
                                  ey.HC,
                                  {
                                    color:
                                      i === l
                                        ? "primary.black.10"
                                        : "primary.warmGrey.80",
                                    children: (0, f.jsx)(L.DotIcon, {
                                      height: 1.5,
                                      width: 1.5,
                                    }),
                                  },
                                  i,
                                ),
                              ),
                            }),
                        !x &&
                          (0, f.jsx)(iG.a, {
                            direction: "right",
                            variant: "blackOutlineArrow",
                            ariaLabel: "Go to next face scan instruction page",
                            size: 14,
                            onClick: u,
                            dataTestId: "next-instruction-screen-".concat(
                              l - 1,
                            ),
                          }),
                      ],
                    }),
                    x &&
                      (0, f.jsx)(U.z, {
                        variant: "tertiary",
                        fullWidth: !0,
                        onClick: t,
                        left: 0,
                        children: "Skip and select your focus areas manually",
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var iz = t(79312),
        iq = t(51566);
      let iU = (e) => {
          switch (e) {
            case iq.H.LOW:
              return "#0D8C45";
            case iq.H.MEDIUM:
              return "#FFBC00";
            case iq.H.HIGH:
              return "#FF6B00";
          }
        },
        iW = (e) => {
          let {
            question: i,
            sectionIndex: t,
            questionIndex: n,
            selectedConcerns: a,
            handleSelectedConcern: r,
          } = e;
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsxs)(et.k, {
                height: 6,
                borderTopRadius: "md",
                color: "primary.white",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                bgGradient: iz.c.bdna,
                width: "fit-content",
                px: 2,
                py: 1.5,
                gap: 2,
                mx: "auto",
                children: [
                  (0, f.jsx)(L.SparkleIcon, { height: 4, width: 4 }),
                  (0, f.jsx)(C.x, {
                    textStyle: "function.text.medium",
                    textAlign: "center",
                    children: "Recommended by face scan",
                  }),
                ],
              }),
              (0, f.jsx)(eN, {
                question: i,
                sectionIndex: t,
                questionIndex: n,
                onChange: (e) => r(e),
                buttonGroupVariant: "bdnaWithTag",
                iconTemplate: (e) => {
                  var i, t;
                  return (
                    !!e.icon &&
                    (0, f.jsx)(eB, {
                      concern: e.icon,
                      size: 6,
                      trafficLightColor: iU(
                        null == e
                          ? void 0
                          : null === (t = e.metadata) || void 0 === t
                            ? void 0
                            : null === (i = t.score) || void 0 === i
                              ? void 0
                              : i.severity,
                      ),
                      color: "primary.black.10",
                    })
                  );
                },
                labelTemplate: (e) => {
                  var i, t;
                  return (0, f.jsxs)(et.k, {
                    width: "100%",
                    direction: "row",
                    alignItems: "center",
                    children: [
                      (0, f.jsxs)(et.k, {
                        direction: "column",
                        gap: 2,
                        marginLeft: 2,
                        textAlign: "left",
                        children: [
                          (0, f.jsx)(C.x, {
                            textStyle: "heading.h7.bold",
                            children: e.label,
                          }),
                          (0, f.jsx)(C.x, {
                            textStyle: "function.caption.small",
                            children:
                              null == e
                                ? void 0
                                : null === (t = e.metadata) || void 0 === t
                                  ? void 0
                                  : null === (i = t.score) || void 0 === i
                                    ? void 0
                                    : i.description,
                          }),
                        ],
                      }),
                      (0, f.jsx)(eC.L, {}),
                      !!(null == a ? void 0 : a.length) &&
                        -1 !== a.indexOf(e.value) &&
                        (0, f.jsxs)(f.Fragment, {
                          children: [
                            (0, f.jsx)(eC.L, {}),
                            (0, f.jsx)(ec.V, {
                              size: "lg",
                              tagLabel: (a.indexOf(e.value) + 1).toString(),
                              variant: "filledWhite",
                            }),
                          ],
                        }),
                    ],
                  });
                },
                buttonLayout: "column",
                currentValue: a,
              }),
            ],
          });
        },
        iM = "5rem",
        iQ = "3.5rem",
        iK = "calc(".concat(iM, " + ").concat(iQ, ")"),
        iY = "40dvh";
      ((d = k || (k = {})).EXPLANATIONS = "EXPLANATIONS"),
        (d.SELECT_CONCERNS = "SELECT_CONCERNS"),
        (d.CONCERN_DETAIL = "CONCERN_DETAIL");
      var i$ = t(7778),
        iX = t(21240);
      let iZ = (e) => ({
          isOnExplanationScreen: e === k.EXPLANATIONS,
          isOnConcernsScreen: e === k.SELECT_CONCERNS,
          isOnDetailScreen: e === k.CONCERN_DETAIL,
        }),
        iJ = (e) => {
          let {
              refRightGridItem: i,
              handleNextScreen: t,
              onBackArrowClick: n,
              currentScreen: a,
            } = e,
            { isOnConcernsScreen: r } = iZ(a),
            s = (0, id.l)(),
            { scrollY: o } = (0, i$.v)(),
            l = (0, iX.H)(o, () => {
              if (!i.current) return 0;
              let { top: e } = i.current.getBoundingClientRect();
              return e;
            }),
            c = (0, iX.H)(l, (e) => (e >= 0 ? "100%" : "0"));
          return (0, f.jsx)(iI.E.div, {
            style: {
              position: "sticky",
              bottom: 0,
              translateY: s ? c : 0,
              transition: "transform 0.3s",
            },
            children: (0, f.jsxs)(et.k, {
              flexDirection: "column",
              alignSelf: "stretch",
              alignItems: "center",
              gap: 4,
              backgroundColor: "primary.warmGrey.90",
              paddingY: { base: 4, lg: 8 },
              paddingBottom: { base: 4, lg: 0 },
              children: [
                (0, f.jsx)(U.z, {
                  fullWidth: !0,
                  onClick: t,
                  variant: "primary",
                  height: 18,
                  children: r ? "Continue" : "Choose your focus areas",
                }),
                (0, f.jsx)(U.z, {
                  onClick: n,
                  variant: "tertiary",
                  children: "Redo scan",
                }),
              ],
            }),
          });
        },
        i0 = {
          [iq.H.HIGH]: "Room for improvement",
          [iq.H.MEDIUM]: "Doing fine",
          [iq.H.LOW]: "Glowing",
          [iq.H.UNKNOWN]: "Coming soon",
        };
      function i1(e) {
        let i =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          t = [iq.H.HIGH, iq.H.MEDIUM, iq.H.LOW, iq.H.UNKNOWN],
          n = t.map((e) => ({
            heading: i0[e],
            focusAreasItems: [],
            severity: e,
          }));
        return (e.forEach((e) => {
          let {
              label: i,
              metadata: { score: a },
            } = e,
            { severity: r } = a;
          n[t.indexOf(null != r ? r : iq.H.UNKNOWN)].focusAreasItems.push({
            id: e.value,
            label: i,
            score: a,
          });
        }),
        i)
          ? n.filter((e) => e.focusAreasItems.length > 0)
          : n;
      }
      var i3 = t(35046),
        i2 = t(74835);
      let i6 = (e) => {
        let { severity: i } = e,
          t = (0, i2.b2)(i);
        return (0, f.jsx)(et.k, {
          borderRadius: "full",
          backgroundColor: "".concat(t, "[@.002]"),
          color: t,
          "data-testid": "severity-".concat(i),
          height: 6,
          width: 6,
          alignItems: "center",
          justifyContent: "center",
          children: (0, f.jsx)(
            (e) => {
              let { severity: i } = e;
              switch (i) {
                case iq.H.LOW:
                  return (0, f.jsx)(L.SparkleIcon, { height: 5, width: 5 });
                case iq.H.MEDIUM:
                  return (0, f.jsx)(L.ThumbUpIcon, { height: 6, width: 6 });
                case iq.H.HIGH:
                  return (0, f.jsx)(L.AreaPerfIcon, { height: 6, width: 6 });
                default:
                  return (0, f.jsx)(i3.y, { height: 6, width: 6 });
              }
            },
            { severity: i },
          ),
        });
      };
      var i4 = t(89797),
        i7 = t(87208),
        i5 = t(20065),
        i8 = t(94365),
        i9 = t(86895);
      let te = (e) =>
        (0, i7.useQuery)({
          queryKey: ["useGetFocusAreaDetails", e],
          queryFn: () => i9.O[e],
          enabled: !!e,
        });
      var ti = t(57824),
        tt = t(74574),
        tn = t(79053),
        ta = t(18690),
        tr = t(21902);
      let ts = (e) => {
          if (null === e) return 0;
          let i = Math.floor(e),
            t = e - i;
          return t < 0.3 ? i : t < 0.8 ? i + 0.5 : Math.ceil(e);
        },
        to = (e) => {
          let {
              averageScoreForAge: i,
              userScore: t,
              userScoreForAge: n,
              severity: a,
            } = e,
            r = ts(t),
            s = ts(i),
            o = ts(n),
            l = (0, i2.b2)(a);
          return (0, f.jsxs)(_.U, {
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
            pb: 2,
            px: 2,
            children: [
              (0, f.jsx)(et.k, {
                alignItems: "center",
                gap: 1,
                children: [...Array(20)].map((e, i) => {
                  let t = (i + 1) * 0.5;
                  return t != r
                    ? (0, f.jsx)(
                        E.xu,
                        {
                          color: t == s ? "#544E45" : "#BAB4AB",
                          children: (0, f.jsx)(ta.C, { height: 18, width: 4 }),
                        },
                        i,
                      )
                    : r == s
                      ? (0, f.jsx)(
                          E.xu,
                          { color: l, children: (0, f.jsx)(tn.g, {}) },
                          i,
                        )
                      : (0, f.jsx)(
                          E.xu,
                          {
                            color: l,
                            children: (0, f.jsx)(tr.O, {
                              height: 31,
                              width: 4,
                            }),
                          },
                          i,
                        );
                }),
              }),
              (0, f.jsxs)(et.k, {
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
                children: [
                  (0, f.jsx)(C.x, {
                    justifySelf: "flex-end",
                    textStyle: "heading.h5.bold",
                    children: o,
                  }),
                  (0, f.jsx)(C.x, {
                    textStyle: "function.text.large",
                    color: "primary.black.50",
                    children: "/ 10",
                  }),
                ],
              }),
            ],
          });
        },
        tl = (e) => {
          let { label: i, score: t, isLastItem: n, onClick: a } = e;
          return (0, f.jsxs)(et.k, {
            w: "100%",
            direction: "column",
            gap: 4,
            borderBottomColor: "primary.warmGrey.70",
            borderBottomWidth: "1px",
            borderBottomStyle: n ? "hidden" : "solid",
            paddingBottom: n ? void 0 : 3,
            onClick: a,
            children: [
              (0, f.jsxs)(et.k, {
                alignItems: "center",
                justifyContent: "space-between",
                alignSelf: "stretch",
                mb: 2,
                children: [
                  (0, f.jsx)(E.Cd, {
                    size: 2,
                    bgColor: (0, i2.b2)(t.severity),
                  }),
                  (0, f.jsx)(C.x, {
                    ml: 2,
                    textStyle: "function.text.large",
                    children: i,
                  }),
                  (0, f.jsx)(eC.L, {}),
                  !!a &&
                    (0, f.jsx)(L.ChevronRightIcon, { height: 8, width: 8 }),
                ],
              }),
              (null == t ? void 0 : t.severity)
                ? (0, f.jsx)(to, {
                    userScore: t.userScore,
                    averageScoreForAge: t.averageScoreForAge,
                    userScoreForAge: t.userScoreForAge,
                    severity: t.severity,
                  })
                : (0, f.jsxs)(et.k, {
                    justifyContent: "space-between",
                    alignSelf: "stretch",
                    alignItems: "center",
                    children: [
                      (0, f.jsx)(ec.V, {
                        size: "md",
                        textStyle: "function.text.small",
                        tagLabel: "Coming soon",
                        variant: "filledBeige",
                      }),
                      (0, f.jsx)(C.x, {
                        textStyle: "function.text.large",
                        color: "primary.black.50",
                        children: "n/a",
                      }),
                    ],
                  }),
            ],
          });
        };
      var tc = t(52075);
      let td = (e) => {
          var i, t, n, a, r, s;
          let { detailedConcern: o, question: l } = e,
            { data: c } = te(o),
            d = l.options.find((e) => e.value === o),
            u =
              null ===
                (i = i8.u.find((e) => "".concat(e.id) === "".concat(o))) ||
              void 0 === i
                ? void 0
                : i.filterValue,
            { data: h } = (0, i7.useQuery)({
              enabled: !!u,
              queryKey: ["getLearnContent", u],
              queryFn: () =>
                ti.Q.getFocusAreaLearnContent("".concat(u), {
                  "fields.slug[match]": "*truth*",
                  "fields.colorNames": "Prune",
                }),
            });
          return (0, f.jsxs)(E.xu, {
            children: [
              (0, f.jsx)(E.xu, {
                width: 12,
                height: 12,
                marginX: "auto",
                marginTop: 4,
                marginBottom: { base: 2, lg: 4 },
              }),
              (0, f.jsx)(C.x, {
                textStyle: "heading.h5.bold",
                textAlign: "center",
                children: (0, i5.N1)(i5.NL, o),
              }),
              !!(null == c ? void 0 : c.focusAreaDescription) &&
                (0, f.jsx)(C.x, {
                  textStyle: "function.caption.medium",
                  textAlign: "center",
                  marginTop: { base: 2, lg: 4 },
                  children: c.focusAreaDescription,
                }),
              !!d &&
                (0, f.jsx)(E.xu, {
                  backgroundColor: "primary.white",
                  borderRadius: "xl",
                  marginY: 8,
                  padding: 4,
                  children: (0, f.jsx)(tl, {
                    label: d.label,
                    score: d.metadata.score,
                    isLastItem: !0,
                  }),
                }),
              !!(
                (null == c ? void 0 : c.ingredients) ||
                (null == c ? void 0 : c.characteristics)
              ) &&
                (0, f.jsxs)(et.k, {
                  flexDirection: "column",
                  backgroundColor: "primary.white",
                  borderRadius: "xl",
                  marginY: 8,
                  padding: 4,
                  paddingY: { lg: 6 },
                  gap: 4,
                  children: [
                    (null == c ? void 0 : c.ingredients) &&
                      (0, f.jsxs)(f.Fragment, {
                        children: [
                          (0, f.jsx)(C.x, {
                            textStyle: "function.text.medium",
                            color: "primary.black.40",
                            children: "Ingredients to look for",
                          }),
                          c.ingredients.map((e) =>
                            (0, f.jsx)(
                              tt.Z,
                              {
                                label: e.label,
                                imgSrc: ""
                                  .concat("images/playback/textures", "/")
                                  .concat(e.textureImageSrc),
                                content: e.description,
                              },
                              "".concat(e.label),
                            ),
                          ),
                        ],
                      }),
                    (null == c ? void 0 : c.ingredients) &&
                      (null == c ? void 0 : c.characteristics) &&
                      (0, f.jsx)(_.U, {
                        height: 4,
                        width: "100%",
                        children: (0, f.jsx)(i4.i, {
                          borderColor: "primary.warmGrey.90",
                        }),
                      }),
                    (null == c ? void 0 : c.characteristics) &&
                      (0, f.jsxs)(f.Fragment, {
                        children: [
                          (0, f.jsxs)(C.x, {
                            textStyle: "function.text.medium",
                            color: "primary.black.40",
                            children: [
                              "Causes of",
                              " ",
                              (0, f.jsx)(C.x, {
                                as: "span",
                                color: "bdna.bdna.100",
                                children: null == d ? void 0 : d.label,
                              }),
                            ],
                          }),
                          (0, f.jsx)(et.k, {
                            gap: 2,
                            flexWrap: "wrap",
                            children: c.characteristics.map((e) =>
                              (0, f.jsx)(
                                ec.V,
                                {
                                  variant: "filledBeige",
                                  width: "max",
                                  children: e,
                                },
                                e,
                              ),
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
              !!(null == h
                ? void 0
                : null === (t = h.stories) || void 0 === t
                  ? void 0
                  : t.length) &&
                (0, f.jsxs)(E.xu, {
                  children: [
                    (0, f.jsxs)(C.x, {
                      textStyle: "heading.h6.bold",
                      color: "primary.warmGrey.50",
                      children: [(0, i5.N1)(i5.NL, o), " decoded"],
                    }),
                    (0, f.jsx)(E.xu, {
                      marginTop: 4,
                      children: (0, f.jsx)(tc._, {
                        title:
                          null === (n = h.stories[0]) || void 0 === n
                            ? void 0
                            : n.coverTitle,
                        description:
                          null !==
                            (s =
                              null === (a = h.stories[0]) || void 0 === a
                                ? void 0
                                : a.description) && void 0 !== s
                            ? s
                            : "",
                        imageSrc:
                          null === (r = h.stories[0]) || void 0 === r
                            ? void 0
                            : r.coverImgSrc,
                        onClick: () => {},
                        width: "100%",
                        paddingX: "0",
                        imageMaxHeight: { lg: 52 },
                        noHover: !0,
                      }),
                    }),
                  ],
                }),
            ],
          });
        },
        tu = (e) => {
          let { icon: i, label: t } = e;
          return (0, f.jsxs)(et.k, {
            align: "center",
            justifyContent: "start",
            gap: 4,
            children: [
              i,
              (0, f.jsx)(C.x, {
                textStyle: "heading.h7",
                fontWeight: "bold",
                children: t,
              }),
            ],
          });
        },
        th = (e) => {
          let { title: i, focusAreasItems: t, severity: n, onClick: a } = e;
          return (0, f.jsxs)(et.k, {
            direction: "column",
            borderRadius: "2xl",
            children: [
              (0, f.jsx)(tu, {
                icon: (0, f.jsx)(i6, { severity: n }),
                label: i,
              }),
              (0, f.jsx)(ey.aV, {
                borderRadius: "lg",
                bgColor: "white",
                mt: 4,
                children: t.map((e, i) => {
                  let n = i === t.length - 1;
                  return (0, f.jsx)(
                    ey.HC,
                    {
                      p: 4,
                      paddingBottom: n ? 4 : 2,
                      children: (0, f.jsx)(tl, {
                        label: e.label,
                        score: e.score,
                        isLastItem: n,
                        onClick: () => a(e.id),
                      }),
                    },
                    e.label,
                  );
                }),
              }),
            ],
          });
        },
        tx = (e) => {
          var i, t;
          let { focusAreas: n } = e,
            { user: a } = (0, eF.Z)(),
            r =
              null !==
                (t =
                  null === (i = n.find((e) => e.severity === iq.H.LOW)) ||
                  void 0 === i
                    ? void 0
                    : i.count) && void 0 !== t
                ? t
                : 0;
          return (0, f.jsxs)(et.k, {
            flexDirection: "column",
            gap: 4,
            p: 4,
            children: [
              (0, f.jsx)(C.x, {
                textStyle: { base: "heading.h7.bold", lg: "heading.h5" },
                color: "primary.black.10",
                textAlign: "center",
                children: (0, f.jsx)(
                  () =>
                    (null == a ? void 0 : a.firstName)
                      ? (0, f.jsxs)(f.Fragment, {
                          children: [
                            a.firstName,
                            ", you’re above",
                            (0, f.jsx)("br", {}),
                            "average in ",
                            r,
                            " focus areas",
                          ],
                        })
                      : (0, f.jsxs)(f.Fragment, {
                          children: [
                            "You’re above",
                            (0, f.jsx)("br", {}),
                            "average in ",
                            r,
                            " focus areas",
                          ],
                        }),
                  {},
                ),
              }),
              (0, f.jsx)(ey.aV, {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-start",
                py: 4,
                children: n.map((e, i) =>
                  (0, f.jsxs)(
                    ey.HC,
                    {
                      position: "relative",
                      px: 4.5,
                      h: "100%",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      _even: {
                        _before: {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "1px",
                          height: "100%",
                          backgroundColor: "primary.warmGrey.80",
                        },
                        _after: {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          right: 0,
                          width: "1px",
                          height: "100%",
                          backgroundColor: "primary.warmGrey.80",
                        },
                      },
                      maxWidth: 26,
                      children: [
                        (0, f.jsx)(et.k, {
                          as: "span",
                          w: 12,
                          h: 12,
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "".concat(e.color, "[@.002]"),
                          borderRadius: "full",
                          color: e.color,
                          textStyle: "heading.h4",
                          fontSize: { lg: "1.5rem" },
                          children: e.count,
                        }),
                        (0, f.jsx)(C.x, {
                          mt: 2.5,
                          textAlign: "center",
                          textStyle: "function.text.medium",
                          color: "primary.black.10",
                          children: e.description,
                        }),
                      ],
                    },
                    i,
                  ),
                ),
              }),
            ],
          });
        };
      var tm = t(38097),
        tg = t(33926),
        tp = t(64830);
      let ty = [
          {
            imageSrc: "images/faceScan/howItWorks_1.png",
            title: "How does the tech work?",
            description:
              "Modiface’s AI predicts 21 clinical skin signs from a single selfie, including wrinkles, pigmentation, vascular disorders, texture, acne, and more. We then aggregate these into focus areas.",
          },
          {
            imageSrc: "images/faceScan/howItWorks_2.png",
            title: "How do the scores work?",
            description:
              "Our AI face scan takes your selfie data and scores the clinical signs found out of 10 compared to people your age, ethnicity and gender.",
          },
          {
            imageSrc: "images/faceScan/howItWorks_3.png",
            title: "How was it built?",
            description:
              "It was built by skin experts and AI researchers, including Dermatologists scoring clinical signs across 25,000 selfies covering a range of ages, genders, and ethnicities - the AI is then trained on this data. ",
          },
        ],
        tb = (e) => {
          let { onClick: i } = e;
          return (0, f.jsxs)(et.k, {
            as: iP.z,
            width: "100%",
            borderRadius: 0,
            gap: 4,
            paddingX: 5,
            paddingY: 1.5,
            color: "bdna.bdna.60",
            backgroundColor: "bdna.bdna.10--new",
            _hover: { backgroundColor: "bdna.bdna.10--new" },
            onClick: i,
            children: [
              (0, f.jsx)(tg.Q, { width: 8, height: 8, color: "bdna.bdna.100" }),
              (0, f.jsx)(C.x, {
                textStyle: "function.text.large",
                children: "How it works",
              }),
              (0, f.jsx)(E.xu, {
                marginLeft: "auto",
                children: (0, f.jsx)(L.ChevronRightIcon, {
                  height: 6,
                  width: 6,
                }),
              }),
            ],
          });
        },
        tk = () =>
          (0, f.jsxs)(E.xu, {
            borderRadius: "2xl",
            overflow: "hidden",
            children: [
              (0, f.jsxs)(et.k, {
                backgroundColor: "primary.white",
                paddingY: 4,
                paddingX: 6,
                flexDirection: { base: "column", lg: "row" },
                gap: 2.5,
                alignItems: { lg: "center" },
                children: [
                  (0, f.jsx)(C.x, {
                    textStyle: "function.text.large",
                    whiteSpace: "nowrap",
                    children: "How to read the results",
                  }),
                  (0, f.jsx)(E.xu, {
                    position: "relative",
                    height: 20,
                    width: "100%",
                    children: (0, f.jsx)(tm.default, {
                      src: "/images/faceScan/howToReadResults.png",
                      alt: "Your score is colored, average is grey",
                      fill: !0,
                      style: { objectFit: "contain" },
                    }),
                  }),
                ],
              }),
              (0, f.jsx)(tp.r, {
                CtaComponent: tb,
                title: "Understanding your results",
                explainerSections: ty,
                analyticsProperties: {
                  click_location: "Face Scan results",
                  click_name: "How it works",
                },
              }),
            ],
          }),
        tf = (e) => {
          let { question: i, setDetailedConcern: t } = e,
            n = i1(i.options),
            a = i1(i.options, !1)
              .filter((e) => e.severity !== iq.H.UNKNOWN)
              .map((e) => ({
                count: e.focusAreasItems.length,
                description: e.heading,
                severity: e.severity,
                color:
                  e.severity === iq.H.MEDIUM
                    ? "semantic.yellow.30"
                    : (0, i2.b2)(e.severity || iq.H.LOW),
              }));
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(tx, { focusAreas: a }),
              (0, f.jsx)(E.xu, {
                marginBottom: 6,
                px: { lg: 4 },
                children: (0, f.jsx)(tk, {}),
              }),
              (0, f.jsx)(et.k, {
                flexDirection: "column",
                gap: 4,
                px: { lg: 4 },
                children: n.map((e) => {
                  var i;
                  return (0, f.jsx)(
                    th,
                    {
                      title: e.heading,
                      focusAreasItems: e.focusAreasItems,
                      severity:
                        null !== (i = e.severity) && void 0 !== i ? i : null,
                      onClick: t,
                    },
                    e.heading,
                  );
                }),
              }),
            ],
          });
        },
        tv = (e) => {
          let {
              question: i,
              selectedConcerns: t,
              sectionIndex: n,
              questionIndex: a,
              handleSelectedConcern: r,
              currentScreen: s,
              detailedConcern: o,
              setDetailedConcern: l,
            } = e,
            { isOnExplanationScreen: c, isOnConcernsScreen: d } = iZ(s);
          if (c) return (0, f.jsx)(tf, { question: i, setDetailedConcern: l });
          if (d) {
            let e = {
              ...i,
              options: i.options.map((e) => {
                var i;
                return {
                  ...e,
                  group_name:
                    null !== (i = e.metadata.score.severity) && void 0 !== i
                      ? i
                      : "na",
                };
              }),
            };
            return (0, f.jsxs)(E.xu, {
              p: { base: 2, lg: 0 },
              children: [
                (0, f.jsx)(C.x, { textStyle: "heading.h6", children: i.title }),
                (0, f.jsx)(E.xu, {
                  marginTop: 6,
                  children: (0, f.jsx)(eN, {
                    question: e,
                    sectionIndex: n,
                    questionIndex: a,
                    onChange: (e) => r(e),
                    buttonGroupVariant: "bdnaWithTag",
                    iconTemplate: (e) => {
                      let i = e.metadata.score.userScoreForAge,
                        t = Number.isInteger(i) ? i : i.toFixed(1);
                      return (0, f.jsx)(C.x, {
                        textStyle: "heading.h7",
                        p: 4,
                        width: 15,
                        whiteSpace: "nowrap",
                        children: null != t ? t : "n/a",
                      });
                    },
                    labelTemplate: (e) =>
                      (0, f.jsxs)(et.k, {
                        width: "100%",
                        direction: "row",
                        alignItems: "center",
                        children: [
                          (0, f.jsx)(et.k, {
                            direction: "column",
                            gap: 2,
                            marginLeft: 2,
                            textAlign: "left",
                            children: (0, f.jsx)(C.x, {
                              textStyle: "heading.h7.bold",
                              children: e.label,
                            }),
                          }),
                          (0, f.jsx)(eC.L, {}),
                          !!(null == t ? void 0 : t.length) &&
                            -1 !== t.indexOf(e.value) &&
                            (0, f.jsxs)(f.Fragment, {
                              children: [
                                (0, f.jsx)(eC.L, {}),
                                (0, f.jsx)(ec.V, {
                                  size: "md",
                                  tagLabel: (t.indexOf(e.value) + 1).toString(),
                                  variant: "filledWhite",
                                }),
                              ],
                            }),
                        ],
                      }),
                    buttonLayout: "column",
                    currentValue: t,
                    groupHeadTemplate: (e) =>
                      (0, f.jsxs)(et.k, {
                        align: "center",
                        justifyContent: "start",
                        gap: 4,
                        mb: 4,
                        mt: 4,
                        children: [
                          (0, f.jsx)(i6, { severity: e.name }),
                          (0, f.jsx)(C.x, {
                            textStyle: "heading.h7.bold",
                            children: i0[e.name],
                          }),
                        ],
                      }),
                  }),
                }),
              ],
            });
          }
          if (o) return (0, f.jsx)(td, { detailedConcern: o, question: i });
        },
        tj = (e) => {
          let { concerns: i, detailedConcern: t, setDetailedConcern: n } = e;
          return (0, f.jsxs)(ey.aV, {
            display: "flex",
            gap: 2,
            overflow: "auto",
            paddingX: { base: 4, lg: 12 },
            children: [
              (0, f.jsx)(ey.HC, {
                children: (0, f.jsx)(U.z, {
                  variant: "unstyled",
                  onClick: () => n(null),
                  children: (0, f.jsx)(ec.V, {
                    tagLabel: "\xa0Overview\xa0",
                    variant: t ? "severity" : "filledWhite",
                    height: "2.5rem",
                    size: "lg",
                  }),
                }),
              }),
              i.map((e, i) => {
                var a, r;
                return (0, f.jsx)(
                  ey.HC,
                  {
                    children: (0, f.jsx)(U.z, {
                      variant: "unstyled",
                      onClick: () => n(e.value),
                      autoFocus: t === e.value,
                      children: (0, f.jsx)(ec.V, {
                        icon: (0, f.jsx)(E.xu, {
                          marginRight: 1,
                          lineHeight: 1,
                          children: (0, f.jsx)(i6, {
                            severity:
                              null === (r = e.metadata) || void 0 === r
                                ? void 0
                                : null === (a = r.score) || void 0 === a
                                  ? void 0
                                  : a.severity,
                          }),
                        }),
                        size: "lg",
                        tagLabel: e.label,
                        variant: t === e.value ? "filledWhite" : "severity",
                        height: "2.5rem",
                      }),
                    }),
                  },
                  i,
                );
              }),
            ],
          });
        },
        tS = (e) => {
          let {
            question: i,
            withBackButton: t = !1,
            goToExplanations: n,
            detailedConcern: a,
            setDetailedConcern: r,
          } = e;
          return (0, f.jsxs)(et.k, {
            flexDirection: "column",
            gap: 4,
            children: [
              (0, f.jsxs)(et.k, {
                flexDirection: "row",
                gap: 2.5,
                alignItems: "center",
                children: [
                  t &&
                    (0, f.jsx)(U.z, {
                      onClick: n,
                      variant: "tertiary",
                      color: "primary.white",
                      "data-testid": "Choose your focus",
                      "aria-label": "Choose your focus areas",
                      children: (0, f.jsx)(L.ChevronLeftIcon, {
                        width: 6,
                        height: 6,
                      }),
                    }),
                  (0, f.jsx)(C.x, {
                    textStyle: "heading.h4",
                    color: "primary.white",
                    children: "Explore your scan results",
                  }),
                ],
              }),
              (0, f.jsx)(E.xu, {
                width: {
                  base: "calc(100% + var(--chakra-space-8))",
                  lg: "calc(100% + var(--chakra-space-24))",
                },
                marginLeft: { base: -4, lg: -12 },
                children: (0, f.jsx)(tj, {
                  concerns: i.options,
                  detailedConcern: a,
                  setDetailedConcern: r,
                }),
              }),
            ],
          });
        },
        tw = (e) => {
          let { goToExplanations: i } = e;
          return (0, f.jsxs)(et.k, {
            flexDirection: "row",
            gap: 2.5,
            alignItems: "center",
            justifyContent: "space-between",
            children: [
              (0, f.jsx)(U.z, {
                onClick: i,
                variant: "tertiary",
                color: "primary.white",
                "aria-label": "Choose your focus areas",
                children: (0, f.jsx)(L.ChevronLeftIcon, {
                  width: 6,
                  height: 6,
                }),
              }),
              (0, f.jsx)(C.x, {
                textStyle: "heading.h4",
                color: "primary.white",
                children: "Choose your focus areas",
              }),
              (0, f.jsx)(E.xu, { width: 6 }),
            ],
          });
        },
        tC = (e) => {
          let {
              question: i,
              image: t,
              goToExplanations: n,
              currentScreen: a,
              detailedConcern: r,
              setDetailedConcern: s,
            } = e,
            { isOnConcernsScreen: o } = iZ(a),
            { scrollY: l } = (0, i$.v)(),
            c = (0, iX.H)(l, [0, 200], [1, 0.95]);
          return (0, f.jsxs)(et.k, {
            flexDirection: "column",
            gap: { base: 4, lg: 6 },
            children: [
              (0, f.jsx)(et.k, {
                flexDirection: "column",
                gap: { base: 4, lg: 6 },
                p: { base: 4, lg: 0 },
                position: { base: "fixed", lg: "relative" },
                zIndex: 3,
                left: 0,
                right: 0,
                backgroundColor: "primary.black.10",
                paddingTop: { base: 8, lg: 0 },
                children: (0, f.jsx)(() => {
                  switch (a) {
                    case k.EXPLANATIONS:
                    case k.CONCERN_DETAIL:
                      return (0, f.jsx)(tS, {
                        question: i,
                        goToExplanations: n,
                        detailedConcern: r,
                        setDetailedConcern: s,
                      });
                    case k.SELECT_CONCERNS:
                      return (0, f.jsx)(tw, { goToExplanations: n });
                  }
                }, {}),
              }),
              (0, f.jsx)(et.k, {
                position: { base: "fixed", lg: "relative" },
                top: "0",
                marginTop: { base: o ? iM : iK, lg: o ? "4rem" : "0" },
                "z-index": "1",
                justifyContent: "center",
                width: "100%",
                left: "0",
                padding: { base: "0 1rem 1rem", lg: "0" },
                height: {
                  base: o ? "calc(".concat(iQ, " + ").concat(iY, ")") : iY,
                  lg: "75dvh",
                },
                children: (0, f.jsx)(iI.E.div, {
                  style: {
                    scale: c,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  children: (0, f.jsx)(ep.E, {
                    width: "100%",
                    borderRadius: "lg",
                    objectFit: "cover",
                    zIndex: "1",
                    objectPosition: "center center",
                    src: t,
                    aspectRatio: "1/1",
                    alt: "",
                    maxWidth: { base: "sm", lg: "lg" },
                  }),
                }),
              }),
            ],
          });
        },
        tE = (e) => {
          let {
              onBackArrowClick: i,
              handleFaceScanEnd: t,
              question: n,
              image: a,
              sectionIndex: r,
              questionIndex: s,
              selectedConcerns: o,
              handleSelectedConcern: l,
            } = e,
            [c, d] = (0, j.useState)(k.EXPLANATIONS),
            [u, h] = (0, j.useState)(null),
            {
              isOnExplanationScreen: x,
              isOnConcernsScreen: m,
              isOnDetailScreen: g,
            } = iZ(c),
            p = () => {
              var e, i;
              null == b ||
                null === (i = b.current) ||
                void 0 === i ||
                null === (e = i.scrollTo) ||
                void 0 === e ||
                e.call(i, { top: 0 }),
                window.scrollTo({ top: 0 });
            };
          (0, j.useEffect)(() => {
            u ? d(k.CONCERN_DETAIL) : d(k.EXPLANATIONS), p();
          }, [u]);
          let y = (0, j.useRef)(null),
            b = (0, j.useRef)(null);
          return (0, f.jsxs)(A.r, {
            position: { base: "relative", lg: "unset" },
            templateColumns: "repeat(12, 1fr)",
            gap: { base: "unset", lg: 6 },
            backgroundColor: { base: "primary.black.10", lg: "transparent" },
            children: [
              (0, f.jsx)(w.P, {
                id: "left-grid-item",
                colSpan: { base: 12, lg: 6 },
                borderRadius: { base: "none", lg: "2xl" },
                overflow: "hidden",
                backgroundColor: "primary.black.10",
                p: { base: 0, lg: 12 },
                children: (0, f.jsx)(tC, {
                  question: n,
                  image: a,
                  currentScreen: c,
                  goToExplanations: () => {
                    d(k.EXPLANATIONS), h(null), p();
                  },
                  detailedConcern: u,
                  setDetailedConcern: h,
                }),
              }),
              (0, f.jsx)(w.P, {
                id: "right-grid-item",
                ref: y,
                colSpan: { base: 12, lg: 6 },
                width: { base: "100vw", lg: "unset" },
                backgroundColor: "primary.warmGrey.90",
                zIndex: 2,
                borderTopRadius: "2xl",
                borderBottomRadius: { lg: "2xl" },
                marginTop: {
                  base: "calc(".concat(iK, " + ").concat(iY, ")"),
                  lg: "0",
                },
                padding: { base: 4, lg: 12 },
                paddingBottom: { base: 0, lg: 6 },
                children: (0, f.jsxs)(et.k, {
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  overflow: { lg: "auto" },
                  ref: b,
                  children: [
                    (0, f.jsx)(et.k, {
                      flexDirection: "column",
                      children: (0, f.jsx)(tv, {
                        question: n,
                        selectedConcerns: o,
                        sectionIndex: r,
                        questionIndex: s,
                        handleSelectedConcern: l,
                        currentScreen: c,
                        detailedConcern: u,
                        setDetailedConcern: h,
                      }),
                    }),
                    (0, f.jsx)(iJ, {
                      refRightGridItem: y,
                      handleNextScreen: () => {
                        x || g ? d(k.SELECT_CONCERNS) : m && t(), p();
                      },
                      onBackArrowClick: i,
                      currentScreen: c,
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        tI = (0, eH.x)(eR.T.FACE_SCAN_RESULTS_V2),
        t_ = (e) => {
          let {
              onSkipModule: i,
              age: t,
              gender: n,
              skinType: a,
              sectionIndex: r,
              onPagePreviousNavigation: s,
              onChange: o,
              questionIndex: l,
              indicatorTags: c,
              coverImage: d,
              onPageNextNavigation: u,
              onRestartModule: m,
              analyticsData: g,
            } = e,
            p = ej();
          (0, j.useEffect)(() => {
            p({ type: y.updateSubcategory, payload: h.FACE_SCAN });
          }, [p]);
          let b = (0, er.useMultiStyleConfig)("BDNAQuizQuestion"),
            { user: k } = (0, eF.Z)(),
            v = (0, eL.CR)(),
            { mutate: S } = eV(),
            [w, I] = (0, j.useState)(!1),
            [_, A] = (0, j.useState)([]),
            [N, P] = (0, j.useState)(void 0),
            [R, L] = (0, j.useState)(""),
            { sendAnalyticsEvent: F } = (0, T.z)();
          (0, j.useEffect)(() => {
            eq();
          }, []);
          let H = () => {
              s();
            },
            O = () => {
              F(D.iN.bdnaStepStarted.bind(D.iN), B.$.BDNA_STEP_STARTED, {
                bdna_step_name: x.SKIP_SCAN,
              }),
                i();
            };
          if (!w)
            return (0, f.jsx)(iV, {
              onBackArrowClick: () => H(),
              setHasFinishedInstructions: I,
              onSkipModule: O,
            });
          let G = (e) => {
              (N.user_value = e), A(e);
            },
            V = async () => {
              let [e, i, t] = _,
                n = {
                  skincare: {
                    primary_concern: e,
                    secondary_concern: i,
                    tertiary_concern: t,
                  },
                };
              return new Promise((e, i) => {
                S(
                  { profile: n },
                  {
                    onSuccess: (i) => (
                      v({
                        type: eL.nz.Add,
                        alertKey: "quiz-submit-success",
                        message: "Your answers have been updated.",
                        variant: eL.hq.Success,
                      }),
                      e(i)
                    ),
                    onError: () => (
                      v({
                        type: eL.nz.Add,
                        alertKey: "quiz-submit-error",
                        message:
                          "Error on submitting answers, something has gone wrong. Please try again !",
                        variant: eL.hq.Error,
                      }),
                      i()
                    ),
                  },
                );
              });
            },
            z = async () => {
              k && (await V());
              let [e, i, t] = _,
                n = [
                  {
                    field: "primary_concern,secondary_concern,tertiary_concern",
                    value: [e, null != i ? i : "none", null != t ? t : "none"],
                  },
                ],
                a = !!N && eW(N);
              u({
                nextSection: r + 1,
                nextQuestion: 0,
                nextSubQuestion: null,
                quizUpdates: n,
                questionValue: [e, i, t],
                analyticsData: {
                  ...g,
                  ...(a ? { bdna_recommendations_severity: a } : {}),
                },
                fireAnalytics: !0,
              });
            },
            q = (e) =>
              (0, f.jsx)(C.x, {
                color: "primary.black.10",
                textStyle: "heading.h6",
                textAlign: { base: "center", lg: "left" },
                my: 0,
                py: 0,
                children: e,
              });
          return N
            ? tI
              ? (0, f.jsx)(tE, {
                  onBackArrowClick: H,
                  handleFaceScanEnd: z,
                  question: N,
                  image: R,
                  sectionIndex: r,
                  questionIndex: l,
                  selectedConcerns: _,
                  handleSelectedConcern: G,
                })
              : (0, f.jsx)(
                  (e) => {
                    let { children: i } = e;
                    return (0, f.jsx)(eu, {
                      indicatorTags: c,
                      image: d,
                      isFullScreenOnOpen: !1,
                      topTemplate: (0, f.jsxs)(et.k, {
                        direction: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: { lg: "100%" },
                        backgroundColor: "primary.warmGrey.90",
                        pt: { base: 3.5, lg: 0 },
                        pb: { base: 5, lg: 0 },
                        mb: { base: -6, lg: 0 },
                        children: [
                          (0, f.jsx)(ed, {
                            indicatorTag: c,
                            size: "sm",
                            dark: !0,
                          }),
                          (null == k ? void 0 : k.firstName) &&
                            (0, f.jsxs)(C.x, {
                              mt: { base: 10, lg: 12 },
                              textStyle: "heading.h4",
                              textAlign: "center",
                              children: [
                                (0, f.jsx)(C.x, {
                                  as: "span",
                                  color: "bdna.bdna.100",
                                  children: "".concat(k.firstName, "'s"),
                                }),
                                " ",
                                "recommended focus areas",
                              ],
                            }),
                          !!R && (0, f.jsx)(iO, { image: R }),
                        ],
                      }),
                      children: (0, f.jsxs)(E.xu, {
                        __css: b.container,
                        children: [
                          (0, f.jsx)(eg, {
                            headerTemplate: q,
                            header: null == N ? void 0 : N.title,
                            subHeader: null == N ? void 0 : N.description,
                            topOfPageRef: null,
                            children: i,
                          }),
                          (0, f.jsxs)(et.k, {
                            flexDirection: "column",
                            alignSelf: "stretch",
                            gap: 2,
                            marginTop: 4,
                            position: "sticky",
                            right: 0,
                            bottom: 0,
                            left: 0,
                            backgroundColor: "primary.warmGrey.90",
                            paddingY: { base: 4, lg: 0 },
                            children: [
                              (0, f.jsx)(U.z, {
                                onClick: z,
                                variant: "primary",
                                fullWidth: !0,
                                isDisabled: !_.length,
                                children: "Continue",
                              }),
                              (0, f.jsx)(U.z, {
                                onClick: H,
                                variant: "tertiary",
                                fullWidth: !0,
                                children: "Redo scan",
                              }),
                            ],
                          }),
                        ],
                      }),
                    });
                  },
                  {
                    children: (0, f.jsx)(iW, {
                      question: N,
                      sectionIndex: r,
                      questionIndex: l,
                      selectedConcerns: _,
                      handleSelectedConcern: G,
                    }),
                  },
                )
            : (0, f.jsx)(iF, {
                age: t,
                gender: n,
                skinType: a,
                onSkipModule: O,
                onRestartModule: m,
                sectionIndex: r,
                onChange: o,
                onScanSuccess: (e) => {
                  P(e);
                },
                onImageUploaded: (e) => {
                  L(e);
                },
                analyticsData: g,
              });
        };
      var tA = t(68533),
        tD = t(34015),
        tN = t(23356);
      let tB = (e) => {
        let { value: i = "", name: t, onChange: n, onBlur: a } = e,
          r = (0, er.useStyleConfig)("DateYearOnlyInput"),
          [s, o] = (0, j.useState)(i),
          [l, c] = (0, j.useState)(""),
          d = (e) => {
            let i;
            let t = new Date().getFullYear() - e;
            return (
              c(
                (i =
                  t >= 18
                    ? t <= 100
                      ? { isValid: !0, errMessage: "" }
                      : {
                          isValid: !1,
                          errMessage:
                            "Please enter a date within the last 100 years",
                        }
                    : {
                        isValid: !1,
                        errMessage: "Age must be a minimum of 18 years",
                      }).errMessage,
              ),
              i
            );
          },
          u = (e, i, t) => {
            n({ isValid: e, errMessage: i, value: t });
          };
        return (0, f.jsxs)(tA.NI, {
          isInvalid: !!l,
          children: [
            (0, f.jsx)(tD.I, {
              sx: r,
              border: "none",
              _focus: { border: "none", boxShadow: "none" },
              _invalid: { border: "none", boxShadow: "none" },
              type: "text",
              inputMode: "numeric",
              pattern: "[0-9]*",
              maxLength: 4,
              placeholder: "YYYY",
              "aria-label": "Birth Year",
              "data-testid": "Birth Year",
              onChange: (e) => {
                let i = parseInt(e.target.value, 10);
                if (isNaN(i)) c(""), o(""), u(!1, "", "");
                else if ((o(i.toString()), 4 === i.toString().length)) {
                  let { isValid: e, errMessage: t } = d(i);
                  u(e, t, i.toString());
                } else u(!1, "", "");
              },
              onBlur: () => {
                let { isValid: e, errMessage: t } = d(parseInt(s, 10));
                (!s || s.length < 4) &&
                  ((e = !1),
                  (t = "Please enter a birth year"),
                  c("Please enter a birth year")),
                  null == a || a({ value: i, isValid: e, errMessage: t });
              },
              onFocus: () => c(""),
              name: null != t ? t : "yearOnlyDate",
              value: s,
              autoFocus: !s,
            }),
            l &&
              (0, f.jsx)(tN.J1, {
                children: (0, f.jsx)(C.x, {
                  "aria-label": l,
                  color: "semantic.red.50",
                  textStyle: "body",
                  children: l,
                }),
              }),
          ],
        });
      };
      t(98204);
      let tT = (e) => {
          var i;
          let {
              question: t,
              sectionIndex: n,
              questionIndex: a,
              subQuestionIndex: r,
              onChange: s,
            } = e,
            o = null !== (i = t.user_value) && void 0 !== i ? i : "",
            l = eE(n + 1, a + 1, void 0 !== r ? r + 1 : void 0);
          return (0, f.jsx)(
            E.xu,
            {
              children: (() => {
                if (t.type === u.NUMERIC)
                  return (0, f.jsx)(tB, {
                    value: o ? "".concat(o) : void 0,
                    onChange: (e) => {
                      let { value: i, isValid: t } = e;
                      if (o != i) {
                        if ("" !== i && t) {
                          let e = Number(i);
                          s(isNaN(e) ? i : e);
                        } else s("");
                      }
                    },
                    name: "date",
                  });
              })(),
            },
            l,
          );
        },
        tP = {
          BDNAFaceScanIntro: (e) => {
            let {
                onChange: i,
                onExitQuiz: t,
                onPageNextNavigation: n,
                onPagePreviousNavigation: a,
                question: r,
                questionIndex: s,
                quizProgress: o,
                sectionIndex: l,
                subQuestionIndex: c,
              } = e,
              d = ej(),
              u = (0, er.useMultiStyleConfig)("BDNAQuizQuestion", {
                variant: "fullScreen",
              });
            return (0, f.jsx)(E.xu, {
              __css: u.container,
              "data-testid": "bdna-face-scan-intro-container",
              textAlign: "center",
              borderRadius: { base: 0, lg: "2xl" },
              children: (0, f.jsx)(W, {
                variant: "question",
                onBackClick: a,
                onExitClick: t,
                progressValue: o,
                resetScrollPosition: !0,
                children: (0, f.jsx)(eg, {
                  headerTemplate: (e) =>
                    (0, f.jsx)(C.x, {
                      color: "primary.black.10",
                      textStyle: "heading.h4",
                      my: 0,
                      py: 0,
                      children: e,
                    }),
                  header: r.title,
                  subHeader: r.description,
                  topOfPageRef: null,
                  children: (0, f.jsxs)(et.k, {
                    gap: 2,
                    flexDirection: "column",
                    children: [
                      (0, f.jsx)(et.k, {
                        justifyContent: "center",
                        children: (0, f.jsxs)(C.x, {
                          bgColor: "primary.white",
                          py: 2,
                          px: 4,
                          borderRadius: "full",
                          textStyle: "function.text.medium",
                          textAlign: "center",
                          children: [
                            "Powered by Modiface",
                            (0, f.jsx)("sup", { children: "TM" }),
                          ],
                        }),
                      }),
                      (0, f.jsx)(ep.E, {
                        style: {
                          maxWidth: "25rem",
                          maxHeight: "25vh",
                          margin: "0 auto",
                        },
                        src: "/_next/static/media/face-scan-intro.9eccf746.png",
                        alt: "A woman performing the Noli face scan",
                        "data-testid": "bdna face scan intro image",
                        rel: "preload",
                      }),
                      (0, f.jsxs)(ey.aV, {
                        margin: "auto",
                        children: [
                          (0, f.jsxs)(ey.HC, {
                            display: "flex",
                            gap: 2,
                            alignItems: "center",
                            textStyle: "function.text.medium",
                            "aria-label":
                              "Helps you understand your skin concerns",
                            "data-testid":
                              "Helps you understand your skin concerns",
                            children: [
                              (0, f.jsx)(L.TickCircledFilledIcon, {
                                height: 6,
                                width: 6,
                                color: "bdna.bdna.100",
                              }),
                              "Helps you understand your skin concerns",
                            ],
                          }),
                          (0, f.jsxs)(ey.HC, {
                            display: "flex",
                            gap: 2,
                            mt: 2,
                            alignItems: "center",
                            textStyle: "function.text.medium",
                            "aria-label":
                              "Built by dermatologists and AI researchers",
                            "data-testid":
                              "Built by dermatologists and AI researchers",
                            children: [
                              (0, f.jsx)(L.TickCircledFilledIcon, {
                                height: 6,
                                width: 6,
                                color: "bdna.bdna.100",
                              }),
                              "Built by dermatologists and AI researchers",
                            ],
                          }),
                          (0, f.jsxs)(ey.HC, {
                            display: "flex",
                            gap: 2,
                            mt: 2,
                            alignItems: "center",
                            textStyle: "function.text.medium",
                            "aria-label": "Trained on 25,000 face scan images",
                            "data-testid": "Trained on 25,000 face scan images",
                            children: [
                              (0, f.jsx)(L.TickCircledFilledIcon, {
                                height: 6,
                                width: 6,
                                color: "bdna.bdna.100",
                              }),
                              "Trained on 25,000 face scan images",
                            ],
                          }),
                        ],
                      }),
                      (0, f.jsxs)(ey.aV, {
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        mt: 4,
                        children: [
                          (0, f.jsx)(ey.HC, {
                            display: "flex",
                            justifyContent: "center",
                            children: (0, f.jsx)(E.xu, {
                              w: "100%",
                              maxW: { lg: 120 },
                              children: (0, f.jsx)(U.z, {
                                fullWidth: !0,
                                variant: "bdnaFill",
                                onClick: () => {
                                  i("face_scan"),
                                    d({
                                      type: y.updateSubcategory,
                                      payload: h.FACE_SCAN,
                                    }),
                                    n({
                                      nextSection: l,
                                      nextQuestion: s,
                                      nextSubQuestion: (null != c ? c : -1) + 1,
                                      fireAnalytics: !1,
                                    });
                                },
                                "aria-label": "Start face scan",
                                "data-testid": "Start face scan",
                                children: "Start face scan",
                              }),
                            }),
                          }),
                          (0, f.jsx)(ey.HC, {
                            display: "flex",
                            justifyContent: "center",
                            children: (0, f.jsx)(E.xu, {
                              w: "100%",
                              maxW: { lg: 120 },
                              children: (0, f.jsx)(U.z, {
                                "aria-label": "Ill do my face scan later",
                                "data-testid": "Ill do it later",
                                variant: "secondary",
                                onClick: () => {
                                  i("manual"),
                                    d({
                                      type: y.updateSubcategory,
                                      payload: h.SELF_SELECT,
                                    }),
                                    n({ nextQuestion: s + 1 });
                                },
                                fullWidth: !0,
                                children: "Skip for now",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            });
          },
        },
        tR = (e) => {
          var i;
          return null !== (i = tP[e]) && void 0 !== i ? i : null;
        },
        tL = (e) => {
          let {
              bdnaProfile: i,
              coverImage: t,
              excludedOptions: n = [],
              indicatorTags: a,
              loading: r = !1,
              onChange: s,
              onExitQuiz: o,
              onPageNextNavigation: l,
              onPagePreviousNavigation: c,
              onRestartModule: d,
              question: h,
              overallIndex: x,
              questionIndex: m,
              quizProgress: g,
              sectionIndex: p,
              subQuestionIndex: y,
              variant: b,
            } = e,
            k = (0, er.useMultiStyleConfig)("BDNAQuizQuestion", { variant: b }),
            v = (e) =>
              Array.isArray(e.user_value)
                ? !e.user_value.length || !!r
                : !e.user_value || !!r,
            j = { bdna_step: x, bdna_step_name: h.profile_field },
            w = (e) => {
              let { children: i } = e,
                t = v(h);
              return (0, f.jsx)(E.xu, {
                __css: k.container,
                children: (0, f.jsx)(W, {
                  variant: "question",
                  onBackClick: c,
                  onExitClick: o,
                  progressValue: g,
                  continueProps: {
                    isDisabled: t,
                    onClick: () => l({ analyticsData: j }),
                  },
                  resetScrollPosition: t,
                  children: (0, f.jsx)(eg, {
                    header: h.title,
                    subHeader: h.description,
                    topOfPageRef: null,
                    children: i,
                  }),
                }),
              });
            };
          return (() => {
            var e, r, x, b, k;
            if (
              null === (e = h.configuration) || void 0 === e ? void 0 : e.layout
            )
              try {
                let e = tR(
                  null === (r = h.configuration) || void 0 === r
                    ? void 0
                    : r.layout,
                );
                if (e)
                  return (0, f.jsx)(e, {
                    question: h,
                    onChange: s,
                    sectionIndex: p,
                    questionIndex: m,
                    subQuestionIndex: y,
                    onPageNextNavigation: l,
                    onPagePreviousNavigation: c,
                    onExitQuiz: o,
                    quizProgress: g,
                  });
                throw Error("Custom layout not found");
              } catch (e) {
                console.warn(
                  "Not able to load custom layout properly, fallback to default.",
                  e,
                );
              }
            switch (h.type) {
              case u.ONE_CHOICE:
              case u.MULTI_CHOICE:
                return (0, f.jsx)(w, {
                  children: (0, f.jsx)(eN, {
                    paddingBottom: { base: 18, lg: 24 },
                    question: h,
                    excludedOptions: n,
                    sectionIndex: p,
                    questionIndex: m,
                    subQuestionIndex: y,
                    onChange: s,
                    currentValue: h.user_value,
                  }),
                });
              case u.RANKED_MULTI_CHOICE:
                return (0, f.jsx)(w, {
                  children: (0, f.jsx)(eP, {
                    question: h,
                    sectionIndex: p,
                    questionIndex: m,
                    onChange: s,
                  }),
                });
              case u.FACE_SCAN:
                return (0, f.jsx)(t_, {
                  onPagePreviousNavigation: c,
                  onSkipModule: () => l({}),
                  sectionIndex: p,
                  onChange: s,
                  age: (null == i ? void 0 : i.year_of_birth)
                    ? eh(i.year_of_birth)
                    : 36,
                  gender:
                    null !== (b = null == i ? void 0 : i.gender) && void 0 !== b
                      ? b
                      : "female",
                  skinType:
                    null !==
                      (k =
                        null == i
                          ? void 0
                          : null === (x = i.skincare) || void 0 === x
                            ? void 0
                            : x.skin_morning) && void 0 !== k
                      ? k
                      : S.Oz.NORMAL,
                  questionIndex: m,
                  indicatorTags: a,
                  coverImage: t,
                  onPageNextNavigation: l,
                  onRestartModule: d,
                  analyticsData: j,
                });
              default:
                return (0, f.jsx)(w, {
                  children: (0, f.jsx)(tT, {
                    question: h,
                    sectionIndex: p,
                    questionIndex: m,
                    subQuestionIndex: y,
                    onChange: s,
                  }),
                });
            }
          })();
        },
        tF = (e) => {
          let {
              questions: i,
              decorativeImage: t,
              onBackNavigation: n,
              onCompleted: a,
              pageViewedAnalytics: r,
            } = e,
            { sendAnalyticsEvent: s } = (0, T.z)(),
            o = (0, v.useRouter)(),
            [l, c] = (0, j.useState)(0),
            [d, u] = (0, j.useState)(void 0);
          (0, j.useEffect)(() => {
            r &&
              s(D.iN.pageViewedEnhanced.bind(D.iN), B.$.PAGE_VIEW_ENHANCED, r);
          }, []);
          let h = i[l];
          return (0, f.jsx)(E.xu, {
            children: (0, f.jsx)(E.xu, {
              backgroundColor: "primary.white",
              height: "100vh",
              children: (0, f.jsx)(eu, {
                indicatorTags: [],
                minimal: !t,
                image: null != t ? t : "",
                isFullScreenOnOpen: !1,
                children:
                  !!h &&
                  (0, f.jsx)(tL, {
                    question: h,
                    overallIndex: 0,
                    sectionIndex: -1,
                    questionIndex: l,
                    onChange: (e) => {
                      u(e), (h.user_value = e);
                    },
                    onPagePreviousNavigation: () => {
                      if (l <= 0) return null == n ? void 0 : n();
                      c(l - 1);
                    },
                    onPageNextNavigation: () => {
                      if (l >= i.length - 1) return null == a ? void 0 : a();
                      c(l + 1);
                    },
                    onRestartModule: () => {},
                    indicatorTags: [],
                    coverImage: null != t ? t : "",
                    variant: t ? "card" : "fullScreen",
                    onExitQuiz: () => {
                      o.push("/");
                    },
                    quizProgress: (i.length ? l / i.length : 1) * 100,
                  }),
              }),
            }),
          });
        };
      var tH = t(36278);
      let tO = () =>
          (0, f.jsxs)(E.xu, {
            color: "primary.white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "primary.black.10",
            padding: "none",
            height: "calc(100vh)",
            children: [
              (0, f.jsx)(iw.$, { color: "primary.white", size: "lg" }),
              (0, f.jsx)(C.x, {
                textStyle: "heading.h5.bold",
                textColor: "primary.white",
                textAlign: "center",
                marginTop: "32px",
                "data-testid": "BeautyDNA Quiz loading",
                children: "BeautyDNA Quiz loading",
              }),
            ],
          }),
        tG = (e) => {
          let { headingText: i, iconName: t, promoIncentiveText: n } = e,
            a = t ? (0, F.ky)(t) : void 0,
            r = a
              ? (0, f.jsx)(M, {
                  layerStyle: "gradient.bdna.background",
                  size: 10,
                  color: "primary.white",
                  children: (0, f.jsx)(a, { height: 6, width: 6 }),
                })
              : void 0;
          return (0, f.jsxs)(I.g, {
            gap: 6,
            children: [
              (0, f.jsx)(C.x, { textStyle: "heading.h5.bold", children: i }),
              (0, f.jsxs)(_.U, {
                gap: 4,
                children: [
                  r,
                  (0, f.jsx)(C.x, {
                    color: "bdna.bdna.100",
                    textStyle: "function.text.medium",
                    children: n,
                  }),
                ],
              }),
            ],
          });
        },
        tV = (e) => {
          let { justification: i, statistic: t } = e;
          return (0, f.jsxs)(I.g, {
            gap: 2.5,
            color: "primary.warmGrey.50",
            textAlign: "center",
            children: [
              (0, f.jsx)(C.x, {
                textStyle: "function.text.medium",
                children: t,
              }),
              (0, f.jsx)(C.x, {
                textStyle: "function.text.small",
                children: i,
              }),
            ],
          });
        },
        tz = {
          headingText: "Almost done!",
          iconName: "PadlockIcon",
          promoIncentiveText:
            "Unlock your unique BeautyDNA  profile, personalised routine and exclusive discounts",
        },
        tq = {
          justification: "Based on autumn 2024 survey",
          statistic:
            "92% of users say Noli has helped them shop with more confidence",
        },
        tU = () => ({
          data: { titleContent: tz, statisticsContent: tq },
          isLoading: !1,
        });
      var tW = t(88644);
      let tM = (e) =>
        (0, eO.useMutation)({
          ...e,
          mutationFn: (e) => {
            let { oldUserId: i } = e;
            return eG.Z.migrateAnonymousProfile(i);
          },
        });
      var tQ = t(86093);
      let tK = "anonymousUserId",
        tY = (e) => {
          var i, t;
          let {
              quizEndPage: n,
              productCategory: a,
              openAuthenticationModal: r,
              closeAuthenticationModal: s,
              authenticationModalOpened: o,
              onEndOfQuiz: l,
              showEndOfQuiz: c,
            } = e,
            d = (0, er.useMultiStyleConfig)("BDNAQuizEnd"),
            u = (0, eH.x)(eR.T.ENABLE_BDNA_ANON_FLOW),
            {
              isAnonymous: h,
              setSkincareDecoded: x,
              setHaircareDecoded: m,
            } = (0, eF.Z)(),
            g = (0, eo._)(),
            p = (0, id.l)(),
            y = (0, v.useRouter)(),
            { sendAnalyticsEvent: b } = (0, T.z)(),
            { data: k, refetch: w } = (0, tW.D)(),
            I = localStorage.getItem(tK);
          (0, j.useEffect)(() => {
            (null == k ? void 0 : k.user_id) &&
              h &&
              !I &&
              localStorage.setItem(tK, k.user_id);
          }, [I, h, null == k ? void 0 : k.user_id]),
            (0, j.useEffect)(() => {
              o && h && !I && w();
            }, [o, h, w, I]);
          let { mutate: _, isPending: A } = tM(),
            {
              data: { titleContent: N, statisticsContent: P },
            } = tU(),
            R = async () => {
              s(),
                I && !A && (_({ oldUserId: I }), localStorage.removeItem(tK)),
                a === S.kv.SKINCARE ? await x(!0) : await m(!0),
                await l();
            },
            L = async () => {
              b(D.iN.ctaClicked.bind(D.iN), B.$.CTA_CLICKED, {
                click_action_category: "skip top results",
                page_name: "account creation option",
                page_category: "bdna modules",
                page_subcategory_1: "bdna-quiz",
                page_subcategory_2: a,
              }),
                await l();
            };
          return (0, f.jsxs)(f.Fragment, {
            children: [
              u &&
                c &&
                (0, f.jsxs)(et.k, {
                  position: { base: "relative", lg: "unset" },
                  gap: { base: "unset", lg: 6 },
                  height: "100vH",
                  width: "100%",
                  padding: { base: 0, md: 4 },
                  children: [
                    (0, f.jsx)(E.xu, {
                      id: "left-grid-item",
                      __css: d.leftGridItem,
                      children: (0, f.jsx)(en.Z, {
                        __css: d.container,
                        backgroundImage: (0, es.toContentfulImageUrl)(
                          null !==
                            (t =
                              null !== (i = n.imageLeftL) && void 0 !== i
                                ? i
                                : n.imageLeftL) && void 0 !== t
                            ? t
                            : void 0,
                          { w: "1000", fm: "webp" },
                        ),
                      }),
                    }),
                    (0, f.jsxs)(E.xu, {
                      id: "right-grid-item",
                      __css: d.rightGridItem,
                      children: [
                        (0, f.jsx)(W, {
                          endOfQuizPage: !0,
                          variant: "cover",
                          onBackClick: () => y.back(),
                          onExitClick: () => {
                            y.push("/"),
                              b(D.iN.ctaClicked.bind(D.iN), B.$.CTA_CLICKED, {
                                click_action_category: "exit",
                                click_location: "quiz bar",
                                page_name: "account creation option",
                                page_category: "bdna modules",
                                page_subcategory_1: "bdna-quiz",
                                page_subcategory_2: a,
                              });
                          },
                          progressValue: 100,
                        }),
                        (0, f.jsx)(C.x, {
                          textStyle: "heading.h5.bold",
                          pb: 7,
                          children: n.title,
                        }),
                        (0, f.jsxs)(E.xu, {
                          __css: d.imageContainer,
                          children: [
                            (0, f.jsx)(Q.b, {
                              image: {
                                src: g || p ? n.imageSm : n.imageRightL,
                                quality: 90,
                                fill: !0,
                                sizes: "20vw",
                                alt: "",
                              },
                              __css: d.contentfulImage,
                            }),
                            (0, f.jsx)(E.xu, {
                              __css: d.textContainer,
                              children: (0, f.jsxs)(C.x, {
                                textStyle: "title.t3",
                                children: [
                                  (0, f.jsx)(C.x, {
                                    as: "span",
                                    children: n.text,
                                  }),
                                  n.textEmphasisSegment &&
                                    (0, f.jsx)(C.x, {
                                      color: "bdna.bdna.100",
                                      as: "span",
                                      children: " " + n.textEmphasisSegment,
                                    }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, f.jsxs)(E.xu, {
                          __css: d.buttonContainer,
                          children: [
                            (0, f.jsx)(U.z, {
                              variant: "primary",
                              fullWidth: !0,
                              onClick: () => {
                                r(),
                                  b(
                                    D.iN.ctaClicked.bind(D.iN),
                                    B.$.CTA_CLICKED,
                                    {
                                      click_action_category: "create account",
                                      page_name: "account creation option",
                                      page_category: "bdna modules",
                                      page_subcategory_1: "bdna-quiz",
                                      page_subcategory_2: a,
                                    },
                                  );
                              },
                              children: "Create account",
                            }),
                            g
                              ? (0, f.jsx)(U.z, {
                                  variant: "tertiaryLight",
                                  fontSize: "14px",
                                  textDecoration: "underline",
                                  textColor: "primary.black.10",
                                  "data-testid": "Skip to results",
                                  "aria-label": "Skip to results",
                                  onClick: L,
                                  children: "Skip to the results",
                                })
                              : (0, f.jsx)(U.z, {
                                  variant: "primaryLight",
                                  fullWidth: !0,
                                  "data-testid": "Create account",
                                  "aria-label": "Create account",
                                  onClick: L,
                                  children: "Skip to the results",
                                }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              (0, f.jsx)(tQ.X, {
                identityTitle: (0, f.jsx)(tG, { ...N }),
                statisticsIncentive: (0, f.jsx)(tV, { ...P }),
                isOpen: o,
                onAuthenticated: R,
                onClose: s,
              }),
            ],
          });
        };
      var t$ = t(61834),
        tX = JSON.parse(
          '{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.5.4","a":"","k":"","d":"","tc":""},"fr":59,"ip":1,"op":270,"w":800,"h":800,"nm":"Full Animation","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Star Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[286.5,238.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":197,"s":[51.682,51.682,100]},{"t":216,"s":[0,0,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-1.781,10.213],[0,0],[0,0],[0,0],[-10.213,-1.781],[0,0],[0,0],[0,0],[1.781,-10.213],[0,0],[0,0],[0,0],[10.213,1.781],[0,0],[0,0]],"o":[[10.213,-1.781],[0,0],[0,0],[0,0],[1.781,10.213],[0,0],[0,0],[0,0],[-10.213,1.781],[0,0],[0,0],[0,0],[-1.781,-10.213],[0,0],[0,0],[0,0]],"v":[[-33.465,-13.471],[-13.474,-33.461],[-4.093,-104.374],[4.085,-104.374],[13.466,-33.461],[33.458,-13.471],[104.374,-4.089],[104.374,4.089],[33.458,13.469],[13.466,33.462],[4.085,104.374],[-4.093,104.374],[-13.474,33.462],[-33.465,13.469],[-104.374,4.09],[-104.374,-4.089]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.96862745098,0.956862745098,0.941176470588,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[286.603,238.168],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":68,"op":3577,"st":-33,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-45,"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[-45.218,-132.218,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":197,"s":[120.931,120.931,100]},{"t":216,"s":[0,0,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[67.565,67.565],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.101960784314,0.101960784314,0.101960784314,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-45.218,-132.218],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-76,"op":322,"st":-177,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"Shape Layer 10 Comp 1","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":180,"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[400,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":800,"h":800,"ip":0,"op":3540,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":0.451},"o":{"x":0.265,"y":0},"t":197,"s":[344.411,400,0],"to":[0.079,0,0],"ti":[40.881,0,0]},{"i":{"x":0.521,"y":1},"o":{"x":0.216,"y":0.216},"t":217,"s":[269.99,400,0],"to":[-63.292,0,0],"ti":[0,0,0]},{"t":246.999609375,"s":[126,400,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[47.101,47.101,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":211,"s":[{"i":[[0,0],[20.403,-18.917],[36.326,0],[0,91.875],[-91.875,0],[-25.788,-27.079]],"o":[[0,0],[-24.747,22.945],[-91.875,0],[0,-91.875],[40.315,0],[9.963,10.462]],"v":[[229.346,0],[97.291,134.954],[0,166.355],[-166.355,0],[0,-166.355],[106.074,-128.156]],"c":true}]},{"t":216.999609375,"s":[{"i":[[0,-51.56],[41.837,-30.214],[36.326,0],[0,91.875],[-91.875,0],[-28.793,-23.859]],"o":[[0,55.55],[-27.359,19.758],[-91.875,0],[0,-91.875],[40.315,0],[36.825,30.514]],"v":[[166.355,0],[97.291,134.954],[0,166.355],[-166.355,0],[0,-166.355],[106.074,-128.156]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.101960784314,0.101960784314,0.101960784314,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":54,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":102,"op":429,"st":262.4,"bm":0}]},{"id":"comp_1","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 10","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.575,"y":0.451},"o":{"x":0.265,"y":0},"t":197,"s":[344.411,400,0],"to":[0.079,0,0],"ti":[40.881,0,0]},{"i":{"x":0.521,"y":1},"o":{"x":0.216,"y":0.216},"t":217,"s":[269.99,400,0],"to":[-63.292,0,0],"ti":[0,0,0]},{"t":246.999609375,"s":[126,400,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[47.101,47.101,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":211,"s":[{"i":[[0,0],[20.403,-18.917],[36.326,0],[0,91.875],[-91.875,0],[-25.788,-27.079]],"o":[[0,0],[-24.747,22.945],[-91.875,0],[0,-91.875],[40.315,0],[9.963,10.462]],"v":[[229.346,0],[97.291,134.954],[0,166.355],[-166.355,0],[0,-166.355],[106.074,-128.156]],"c":true}]},{"t":216.999609375,"s":[{"i":[[0,-51.56],[41.837,-30.214],[36.326,0],[0,91.875],[-91.875,0],[-28.793,-23.859]],"o":[[0,55.55],[-27.359,19.758],[-91.875,0],[0,-91.875],[40.315,0],[36.825,30.514]],"v":[[166.355,0],[97.291,134.954],[0,166.355],[-166.355,0],[0,-166.355],[106.074,-128.156]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.101960784314,0.101960784314,0.101960784314,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":54,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-5,"op":429,"st":262.4,"bm":0}]},{"id":"comp_2","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Star Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[286.5,238.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0,0,0.333],"y":[0,0,0]},"t":326,"s":[0,0,100]},{"t":354,"s":[51.682,51.682,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-1.781,10.213],[0,0],[0,0],[0,0],[-10.213,-1.781],[0,0],[0,0],[0,0],[1.781,-10.213],[0,0],[0,0],[0,0],[10.213,1.781],[0,0],[0,0]],"o":[[10.213,-1.781],[0,0],[0,0],[0,0],[1.781,10.213],[0,0],[0,0],[0,0],[-10.213,1.781],[0,0],[0,0],[0,0],[-1.781,-10.213],[0,0],[0,0],[0,0]],"v":[[-33.465,-13.471],[-13.474,-33.461],[-4.093,-104.374],[4.085,-104.374],[13.466,-33.461],[33.458,-13.471],[104.374,-4.089],[104.374,4.089],[33.458,13.469],[13.466,33.462],[4.085,104.374],[-4.093,104.374],[-13.474,33.462],[-33.465,13.469],[-104.374,4.09],[-104.374,-4.089]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.96862745098,0.956862745098,0.941176470588,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[286.603,238.168],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":321,"op":3684,"st":144,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-45,"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[-45.218,-132.218,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.027,0.027,0.667],"y":[1,1,1]},"o":{"x":[0,0,0.333],"y":[0,0,0]},"t":326,"s":[0,0,100]},{"t":354,"s":[120.931,120.931,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[67.565,67.565],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.101960784314,0.101960784314,0.101960784314,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-45.218,-132.218],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":177,"op":429,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"Shape Layer 8 Comp Black","refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-180,"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[400,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":800,"h":800,"ip":177,"op":429,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.354,"y":1},"o":{"x":0.688,"y":0},"t":177,"s":[126,400,0],"to":[0,0,0],"ti":[0.526,0,0]},{"i":{"x":0.332,"y":1},"o":{"x":0.71,"y":0},"t":236,"s":[282.148,400,0],"to":[-3.599,0,0],"ti":[0,0,0]},{"i":{"x":0,"y":1},"o":{"x":1,"y":0},"t":295,"s":[126,400,0],"to":[0,0,0],"ti":[-20.932,0,0]},{"t":353.999609375,"s":[344.411,400,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[47.101,47.101,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":325.281,"s":[{"i":[[0,-51.56],[41.837,-30.214],[36.326,0],[0,91.875],[-91.875,0],[-28.793,-23.859]],"o":[[0,55.55],[-27.359,19.758],[-91.875,0],[0,-91.875],[40.315,0],[36.825,30.514]],"v":[[166.355,0],[97.291,134.954],[0,166.355],[-166.355,0],[0,-166.355],[106.074,-128.156]],"c":true}]},{"t":329.999609375,"s":[{"i":[[0,0],[20.403,-18.917],[36.326,0],[0,91.875],[-91.875,0],[-25.788,-27.079]],"o":[[0,0],[-24.747,22.945],[-91.875,0],[0,-91.875],[40.315,0],[9.963,10.462]],"v":[[229.346,0],[97.291,134.954],[0,166.355],[-166.355,0],[0,-166.355],[106.074,-128.156]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.101960784314,0.101960784314,0.101960784314,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":54,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":177,"op":429,"st":262.4,"bm":0}]},{"id":"comp_3","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.407,"y":1},"o":{"x":0.671,"y":0},"t":177,"s":[126,400,0],"to":[0,0,0],"ti":[0.526,0,0]},{"i":{"x":0.407,"y":1},"o":{"x":0.676,"y":0},"t":236,"s":[282.148,400,0],"to":[-3.599,0,0],"ti":[0,0,0]},{"i":{"x":0,"y":1},"o":{"x":1,"y":0},"t":295,"s":[126,400,0],"to":[0,0,0],"ti":[-20.932,0,0]},{"t":353.999609375,"s":[344.411,400,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[47.101,47.101,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":325.281,"s":[{"i":[[0,-51.56],[41.837,-30.214],[36.326,0],[0,91.875],[-91.875,0],[-28.793,-23.859]],"o":[[0,55.55],[-27.359,19.758],[-91.875,0],[0,-91.875],[40.315,0],[36.825,30.514]],"v":[[166.355,0],[97.291,134.954],[0,166.355],[-166.355,0],[0,-166.355],[106.074,-128.156]],"c":true}]},{"t":329.999609375,"s":[{"i":[[0,0],[20.403,-18.917],[36.326,0],[0,91.875],[-91.875,0],[-25.788,-27.079]],"o":[[0,0],[-24.747,22.945],[-91.875,0],[0,-91.875],[40.315,0],[9.963,10.462]],"v":[[229.346,0],[97.291,134.954],[0,166.355],[-166.355,0],[0,-166.355],[106.074,-128.156]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.101960784314,0.101960784314,0.101960784314,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":54,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":177,"op":429,"st":262.4,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Rotation Black 2","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[400,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":800,"h":800,"ip":199,"op":3562,"st":22,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Rotation Black","refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.334],"y":[1]},"o":{"x":[0.761],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.45],"y":[1]},"o":{"x":[0.612],"y":[0]},"t":59,"s":[180]},{"t":118,"s":[360]}],"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[400,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":800,"h":800,"ip":0,"op":201,"st":-177,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"Rotation Black","refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.334],"y":[1]},"o":{"x":[0.761],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.45],"y":[1]},"o":{"x":[0.612],"y":[0]},"t":59,"s":[180]},{"t":118,"s":[360]}],"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[400,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":800,"h":800,"ip":0,"op":201,"st":-177,"bm":0}],"markers":[]}',
        );
      let tZ = (e) => {
          let { texts: i, updateInterval: t, loop: n, onEndReached: a } = e,
            [r, s] = (0, j.useState)(0);
          return (
            (0, j.useLayoutEffect)(() => {
              let e = setInterval(() => {
                s((e) =>
                  e === i.length - 1
                    ? (setTimeout(() => {
                        null == a || a();
                      }, t),
                      n ? 0 : e)
                    : e + 1,
                );
              }, t);
              return () => clearInterval(e);
            }, [t, i.length]),
            (0, f.jsx)(
              iI.E.span,
              {
                initial: { opacity: 0, translateY: "100%", display: "flex" },
                animate: { opacity: 1, translateY: 0 },
                exit: { opacity: 0, translateY: "100%" },
                transition: { delay: 0.3, duration: 0.5, ease: "easeIn" },
                children: i[r],
              },
              i[r],
            )
          );
        },
        tJ = (e) => {
          let { updateInterval: i, loadingMessages: t } = e;
          return (0, f.jsxs)(et.k, {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            h: "100vh",
            children: [
              (0, f.jsx)(E.xu, {
                margin: "auto",
                children: (0, f.jsx)(il.nI, {
                  autoplay: !0,
                  loop: !0,
                  style: {
                    width: "200px",
                    height: "200px",
                    marginBottom: "150px",
                  },
                  data: tX,
                }),
              }),
              (0, f.jsx)(C.x, {
                textStyle: "heading.h5.bold",
                overflow: "hidden",
                position: "absolute",
                top: "60%",
                textAlign: "center",
                children: (0, f.jsx)(tZ, {
                  texts: t,
                  updateInterval: i,
                  loop: !0,
                }),
              }),
            ],
          });
        },
        t0 = (e, i) =>
          (0, i7.useQuery)({
            ...i,
            queryKey: ["useGetQuiz", e],
            queryFn: () => eG.Z.getQuiz(e),
          }),
        t1 = (e) =>
          (0, eO.useMutation)({
            ...e,
            mutationFn: (e) => {
              let { isEndOfQuiz: i, quizData: t } = e;
              return eG.Z.saveQuiz(i, t);
            },
          }),
        t3 = (e, i) => {
          var t;
          let n =
            null === (t = e.match(/v[0-9]{1,}\.[0-9]/)) || void 0 === t
              ? void 0
              : t[0];
          if (!n) return !1;
          let a = n.replace("v", "").split("."),
            r = { major: parseInt(a[0]), minor: parseInt(a[1]) },
            s = r.major < i.major,
            o = r.major === i.major,
            l = r.minor < i.minor;
          return !!s || (!!o && !!l);
        },
        t2 = (e, i) => {
          var t, n, a, r;
          let {
              currentSectionIndex: s,
              currentSectionQuestionIndex: o,
              currentSectionSubQuestionIndex: l,
            } = i,
            [c, d] = (0, j.useState)(void 0),
            h =
              null !==
                (a =
                  null == e
                    ? void 0
                    : null === (t = e.sections) || void 0 === t
                      ? void 0
                      : t.map((e, i) => ({
                          index: i,
                          isActive: i === s,
                          numberTagLabel: "".concat(i + 1),
                          textTagLabel: e.name,
                          clickable: s >= i || e.completed,
                        }))) && void 0 !== a
                ? a
                : [],
            x = null == e ? void 0 : e.sections[s],
            m = null == x ? void 0 : x.questions[o],
            g = (0, j.useMemo)(
              () =>
                null == e
                  ? void 0
                  : e.sections.reduce((e, i) => e + i.questions.length, 0),
              [null == e ? void 0 : e.sections],
            ),
            p =
              !!m &&
              ((e) => {
                let i = e.options.find((i) => i.value === e.user_value);
                if (Array.isArray(e.user_value)) {
                  let t = e.options.reduce((i, t) => {
                    var n;
                    return (
                      e.user_value.includes(t.value) &&
                        (null === (n = t.sub_questions) || void 0 === n
                          ? void 0
                          : n.length) &&
                        i.push(...t.sub_questions),
                      i
                    );
                  }, []);
                  return { ...i, sub_questions: t };
                }
                return i;
              })(m),
            y =
              !(1 === s && 0 === o && -1 === l) &&
              !!p &&
              !!(null === (n = p.sub_questions) || void 0 === n
                ? void 0
                : n.length),
            b = !!p && y && l === p.sub_questions.length - 1,
            k =
              p && y && -1 !== l && l < p.sub_questions.length
                ? p.sub_questions[l]
                : void 0,
            f = null != k ? k : m,
            v = [];
          if (
            (null == f ? void 0 : f.profile_field) === "secondary_concern" ||
            (null == f ? void 0 : f.profile_field) === "tertiary_concern"
          ) {
            let i =
                null == e
                  ? void 0
                  : e.sections[1].questions.find(
                      (e) => "primary_concern" === e.profile_field,
                    ),
              t = null == i ? void 0 : i.user_value;
            t && "none" !== t && v.push(t);
          }
          if ((null == f ? void 0 : f.profile_field) === "tertiary_concern") {
            let i =
                null == e
                  ? void 0
                  : e.sections[1].questions.find(
                      (e) => "secondary_concern" === e.profile_field,
                    ),
              t = null == i ? void 0 : i.user_value;
            t && "none" !== t && v.push(t);
          }
          return (
            (null == f ? void 0 : f.type) === u.RANKED_MULTI_CHOICE &&
              (f.user_value = Array.isArray((r = f.user_value))
                ? r.filter((e) => "none" !== e)
                : r),
            {
              currentUserSelection: c,
              setCurrentUserSelection: d,
              sectionsIndicators: h,
              currentSection: x,
              currentQuestion: m,
              hasSubQuestions: y,
              isEndOfSubQuestions: b,
              displayedQuestion: f,
              excludedOptions: v,
              totalLength: g,
            }
          );
        },
        t6 = () => {
          let { subCategory: e } = ev().navigationState,
            [i, t] = (0, j.useState)(0),
            [n, a] = (0, j.useState)(0),
            [r, s] = (0, j.useState)(-1),
            o = (0, v.useRouter)(),
            l = (0, v.useSearchParams)(),
            c = (0, j.useMemo)(() => new URLSearchParams(l.toString()), [l]),
            d = (0, j.useMemo)(
              () => ({
                section: l.get("section"),
                question: l.get("question"),
                subQuestion: l.get("sub-question"),
              }),
              [l],
            ),
            u = (0, j.useCallback)(
              (e) => {
                Object.entries(e).forEach((e) => {
                  let [i, t] = e;
                  c.set(i, t.toString());
                }),
                  o.push("?".concat(c.toString()));
              },
              [o, c],
            );
          (0, j.useEffect)(() => {
            let e = {};
            l.get("section") || (e.section = i),
              l.get("question") || (e.question = n),
              l.get("sub-question") || (e["sub-question"] = r),
              u(e);
          }, []),
            (0, j.useEffect)(() => {
              let e = d.section;
              null !== e && e !== i.toString() && t(parseInt(e, 10));
            }, [t, d.section, i]),
            (0, j.useEffect)(() => {
              let e = d.question;
              null !== e && e !== n.toString() && a(parseInt(e, 10));
            }, [a, d.question, n]),
            (0, j.useEffect)(() => {
              let e = d.subQuestion;
              null !== e && e !== r.toString() && s(parseInt(e, 10));
            }, [s, d.subQuestion, r]);
          let h = (0, j.useCallback)((e) => u({ "sub-question": e }), [u]);
          return {
            handleSubQuestionUpdate: h,
            handleQuestionUpdate: (0, j.useCallback)(
              (e) => u({ question: e }),
              [u],
            ),
            handleSectionUpdate: (0, j.useCallback)(
              (e, i, t) => {
                let n = { section: e };
                i && ((n["sub-question"] = -1), (n.question = 0)),
                  void 0 !== t && (n.question = t),
                  u(n);
              },
              [u],
            ),
            navigationState: (0, j.useMemo)(
              () => ({
                currentSectionIndex: i,
                currentSectionQuestionIndex: n,
                currentSectionSubQuestionIndex: r,
                subCategory: e,
              }),
              [i, n, r, e],
            ),
          };
        },
        t4 = (e) => {
          let { onQuizRestart: i, productCategory: t, accountPage: n } = e;
          return (0, f.jsx)(eS, {
            children: (0, f.jsx)(t7, {
              accountPage: n,
              productCategory: t,
              onQuizRestart: i,
            }),
          });
        },
        t7 = (e) => {
          var i;
          let { onQuizRestart: t, productCategory: n, accountPage: a } = e,
            r =
              null === (i = (0, v.useSearchParams)()) || void 0 === i
                ? void 0
                : i.get("origin"),
            s = ej(),
            {
              user: o,
              updateSegmentId: l,
              setSkincareDecoded: c,
              setHaircareDecoded: d,
              userIsReady: h,
              isAnonymous: x,
            } = (0, eF.Z)(),
            { data: m, isPending: g } = (0, tW.D)(),
            [p, k] = (0, j.useState)(),
            [w, C] = (0, j.useState)(!1),
            [I, _] = (0, j.useState)(!1);
          (0, j.useEffect)(() => {
            p || !h || (null != o && o.id && g) || k(!(h && m));
          }, [m, h, p, null == o ? void 0 : o.id, g]);
          let { isOpen: A, onOpen: D, onClose: N } = (0, tH.q)(),
            {
              handleSubQuestionUpdate: B,
              handleQuestionUpdate: T,
              handleSectionUpdate: P,
              navigationState: R,
            } = t6(),
            { data: L, isLoading: F, error: H } = t0(n, { enabled: !A }),
            { mutate: O, isPending: G } = t1(),
            [V, z] = (0, j.useState)(!1),
            q = (0, v.useRouter)(),
            U = (0, eL.CR)();
          (0, j.useEffect)(() => {
            s({ type: y.updateNavigationState, payload: R });
          }, [R]),
            (0, j.useEffect)(() => {
              s({ type: b.updateQuiz, payload: L });
            }, [L]);
          let {
            currentSectionIndex: W,
            currentSectionQuestionIndex: M,
            currentSectionSubQuestionIndex: Q,
          } = R;
          -1 === W && (t(), q.replace("/bdna-quiz"));
          let {
              setCurrentUserSelection: K,
              sectionsIndicators: Y,
              currentSection: $,
              hasSubQuestions: X,
              isEndOfSubQuestions: Z,
              displayedQuestion: J,
              excludedOptions: ee,
              totalLength: ei,
            } = t2(L, R),
            {
              handleBdnaStarted: et,
              handleBdnaUpdated: en,
              handleIdentifyUserFromBdnaProfile: ea,
              handleBdnaCompleted: er,
              handleBdnaStepViewed: es,
              handleBdnaChoiceSelected: eo,
              handleExitQuiz: el,
            } = e2(),
            [ec, ed] = (0, j.useState)(),
            eh = (0, id.l)(),
            ex = async function (e) {
              let i =
                !(arguments.length > 1) ||
                void 0 === arguments[1] ||
                arguments[1];
              P(e, i);
            };
          (0, j.useEffect)(() => {
            et();
          }, [et]),
            (0, j.useEffect)(() => {
              if (!F && L) {
                let e = L.sections.findIndex(
                  (e) => !e.optional && !e.completed,
                );
                -1 !== e && ex(e, !1);
              }
            }, [L, F]),
            (0, j.useEffect)(() => {
              !F && L && es(L);
            }, [F]);
          let em = (0, j.useMemo)(() => {
            var e;
            return (
              (null !==
                (e =
                  null == L
                    ? void 0
                    : L.sections.reduce(
                        (e, i, t) =>
                          t > W
                            ? e
                            : e +
                              (W === t ? Math.max(M, 0) : i.questions.length),
                        0,
                      )) && void 0 !== e
                ? e
                : 0) + 1
            );
          }, [W, M, null == L ? void 0 : L.sections]);
          if (V)
            return (0, f.jsx)(tJ, {
              updateInterval: 1600,
              loadingMessages: {
                skincare: ["Thank you! We'll start decoding your answers"],
                haircare: [
                  "Generating your haircare routine based on your answers",
                ],
              }[n],
            });
          if (H || w) return (0, f.jsx)(t$._, {});
          if (F || !L) return (0, f.jsx)(tO, {});
          let eg = () => {
              q.push("/");
            },
            ep = async (e) => (
              (L.sections[W].completed = !0),
              new Promise((i, t) =>
                O(
                  { isEndOfQuiz: e, quizData: L },
                  {
                    onSuccess: async (e) => (
                      U({
                        type: eL.nz.Add,
                        alertKey: "quiz-submit-success",
                        message: "Your answers have been updated.",
                        variant: eL.hq.Success,
                      }),
                      (null == e ? void 0 : e.bdna_segment) &&
                        (en(!!p), l(e.bdna_segment), ea(e)),
                      e && ed(e),
                      i()
                    ),
                    onError: () => (
                      C(!0),
                      U({
                        type: eL.nz.Add,
                        alertKey: "quiz-submit-error",
                        message:
                          "Error on submitting answers, something has gone wrong. Please try again !",
                        variant: eL.hq.Error,
                      }),
                      t()
                    ),
                  },
                ),
              )
            ),
            ey = async () => {
              (n === S.kv.SKINCARE || (null == m ? void 0 : m.skincare)) &&
                (await c(!0)),
                (n === S.kv.HAIRCARE || (null == m ? void 0 : m.haircare)) &&
                  (await d(!0)),
                n === S.kv.HAIRCARE
                  ? q.push("/my-routine/".concat(n))
                  : q.push(
                      "/bdna-playback/".concat(n) +
                        (r ? "?origin=".concat(r) : ""),
                    );
            },
            eb = async () => {
              z(!0), er();
              try {
                await ey();
              } catch (e) {
                z(!1), C(!0);
              }
            },
            ek = (e) => {
              try {
                e.forEach((e) => {
                  let i,
                    { field: t, value: n } = e;
                  if (
                    (L.sections.find(
                      (e) =>
                        !!(i = e.questions.find((e) => e.profile_field === t)),
                    ),
                    !i)
                  )
                    return (
                      console.warn(
                        "[Update Quiz] Question not found for field ".concat(
                          t,
                          ".",
                        ),
                      ),
                      !1
                    );
                  i.user_value = n;
                });
              } catch (e) {
                return !1;
              }
              return !0;
            },
            ef = async (e) => {
              let {
                nextSection: i,
                nextQuestion: t,
                nextSubQuestion: n,
                quizUpdates: a,
                questionValue: r,
                analyticsData: s,
                fireAnalytics: o = !0,
              } = e;
              (null == a ? void 0 : a.length) && ek(a);
              let l = !!$ && M === $.questions.length - 1,
                c = W === L.sections.length - 1 && l;
              if (
                ($ &&
                  o &&
                  eo(
                    "".concat(
                      null != r ? r : null == J ? void 0 : J.user_value,
                    ),
                    s,
                  ),
                (X && !Z) || null != n)
              )
                B(null != n ? n : Q + 1);
              else if (c && L)
                await ep(!0),
                  x
                    ? (0, eH.x)(eR.T.ENABLE_BDNA_ANON_FLOW)
                      ? _(!0)
                      : D()
                    : await eb();
              else if (l || null != i) {
                await ep(!1);
                let e = null != i ? i : W + 1;
                ex(e, !0), es(L, e);
              } else T(null != t ? t : M + 1), B(-1);
              K(void 0);
            };
          if (!$) return;
          let ev = () =>
            t3(L.name, { major: 2, minor: 8 }) && $.cover
              ? $.cover.image
              : $.sectionImage
                ? $.sectionImage
                : "";
          return (0, f.jsxs)(E.xu, {
            children: [
              (0, f.jsx)(tY, {
                quizEndPage: a,
                productCategory: n,
                openAuthenticationModal: D,
                closeAuthenticationModal: N,
                authenticationModalOpened: A,
                onEndOfQuiz: eb,
                showEndOfQuiz: I,
              }),
              !I &&
                (0, f.jsx)(E.xu, {
                  backgroundColor: "primary.white",
                  height: "100vh",
                  children: (0, f.jsx)(eu, {
                    indicatorTags: Y,
                    minimal: eh,
                    image: ev(),
                    isFullScreenOnOpen:
                      (null == J ? void 0 : J.type) === u.FACE_SCAN,
                    setModuleIndex: ex,
                    children:
                      !!J &&
                      (0, f.jsx)(tL, {
                        question: J,
                        overallIndex: em,
                        sectionIndex: W,
                        questionIndex: M,
                        subQuestionIndex: Q,
                        excludedOptions: ee,
                        loading: G,
                        onChange: (e) => {
                          K(e), (J.user_value = e);
                        },
                        onPagePreviousNavigation: () => {
                          if (X && Q >= 0) {
                            B(Q - 1);
                            return;
                          }
                          if (0 === M) {
                            let e = W - 1,
                              i = L.sections[e].questions.length - 1;
                            P(e, !1, i);
                            return;
                          }
                          T(M - 1);
                        },
                        onPageNextNavigation: ef,
                        onRestartModule: () => {
                          B(-1);
                        },
                        bdnaProfile: ec,
                        indicatorTags: Y,
                        coverImage: ev(),
                        variant: eh ? "fullScreen" : "card",
                        onExitQuiz: () => {
                          $ && el(), eg();
                        },
                        quizProgress: (ei ? em / ei : 1) * 100,
                      }),
                  }),
                }),
            ],
          });
        };
      var t5 = (e) => {
        var i, t, n;
        let { introPage: a, accountPage: r } = e,
          s = !!(null === (i = (0, v.useSearchParams)()) || void 0 === i
            ? void 0
            : i.get("skipIntro")),
          o = !!(null === (t = (0, v.useSearchParams)()) || void 0 === t
            ? void 0
            : t.get("skipInit")),
          [l, c] = (0, j.useState)(!1),
          [d, u] = (0, j.useState)(!1),
          h = Object.values(S.kv),
          x = a.quizType;
        return h.includes(x)
          ? s || d || l
            ? !o &&
              !l &&
              (null === (n = a.questions) || void 0 === n ? void 0 : n.length)
              ? (0, f.jsx)(tF, {
                  questions: a.questions,
                  decorativeImage: a.imageUrl,
                  onBackNavigation: () => u(!1),
                  onCompleted: () => c(!0),
                  pageViewedAnalytics: { page_name: "bdna alternative intro" },
                })
              : (0, f.jsx)(t4, {
                  productCategory: x,
                  onQuizRestart: () => {
                    c(!1);
                  },
                  accountPage: r,
                })
            : (0, f.jsx)(ei, {
                onStartClick: () => {
                  var e;
                  return (
                    null === (e = a.questions) || void 0 === e
                      ? void 0
                      : e.length
                  )
                    ? u(!0)
                    : c(!0);
                },
                introPage: a,
              })
          : (0, v.notFound)();
      };
    },
    58342: function (e, i, t) {
      "use strict";
      t.d(i, {
        o: function () {
          return o;
        },
      });
      var n = t(24004),
        a = t(92832);
      let r = {
          acneblemishproneskin: (e) =>
            (0, n.jsx)(a.SkinBlemishIcon, { width: e, height: e }),
          drynessdehydration: (e) =>
            (0, n.jsx)(a.SkinDrynessIcon, { width: e, height: e }),
          finelineswrinkles: (e) =>
            (0, n.jsx)(a.SkinWrinklesIcon, { width: e, height: e }),
          poresblackheads: (e) =>
            (0, n.jsx)(a.SkinPoresIcon, { width: e, height: e }),
          unevenskintonetexture: (e) =>
            (0, n.jsx)(a.SkinUnevenSkinToneIcon, { width: e, height: e }),
          darkcirclespuffiness: (e) =>
            (0, n.jsx)(a.SkinDarkCirclesIcon, { width: e, height: e }),
          dullness: (e) =>
            (0, n.jsx)(a.SkinDullnessIcon, { width: e, height: e }),
          hyperpigmentation: (e) =>
            (0, n.jsx)(a.SkinHyperpigmentationIcon, { width: e, height: e }),
          oiliness: (e) =>
            (0, n.jsx)(a.SkinOilinessIcon, { width: e, height: e }),
          redness: (e) =>
            (0, n.jsx)(a.SkinRednessIcon, { width: e, height: e }),
          lackoffirmness: (e) =>
            (0, n.jsx)(a.SkinLackOfFirmnessIcon, { width: e, height: e }),
          hypersensitivity: (e) =>
            (0, n.jsx)(a.SkinSensitivityIcon, { width: e, height: e }),
          BlemishIcon: (e) =>
            (0, n.jsx)(a.SkinBlemishIcon, { width: e, height: e }),
          BalancedIcon: (e) =>
            (0, n.jsx)(a.SkinBalancedIcon, { width: e, height: e }),
          CombinationIcon: (e) =>
            (0, n.jsx)(a.SkinCombinationIcon, { width: e, height: e }),
          DarkCirclesIcon: (e) =>
            (0, n.jsx)(a.SkinDarkCirclesIcon, { width: e, height: e }),
          DrynessIcon: (e) =>
            (0, n.jsx)(a.SkinDrynessIcon, { width: e, height: e }),
          DullnessIcon: (e) =>
            (0, n.jsx)(a.SkinDullnessIcon, { width: e, height: e }),
          LackOfFirmnessIcon: (e) =>
            (0, n.jsx)(a.SkinLackOfFirmnessIcon, { width: e, height: e }),
          OilinessIcon: (e) =>
            (0, n.jsx)(a.SkinOilinessIcon, { width: e, height: e }),
          SensitivityIcon: (e) =>
            (0, n.jsx)(a.SkinSensitivityIcon, { width: e, height: e }),
          PigmentationIcon: (e) =>
            (0, n.jsx)(a.SkinHyperpigmentationIcon, { width: e, height: e }),
          PoresIcon: (e) =>
            (0, n.jsx)(a.SkinPoresIcon, { width: e, height: e }),
          RednessIcon: (e) =>
            (0, n.jsx)(a.SkinRednessIcon, { width: e, height: e }),
          UnevenSkinToneIcon: (e) =>
            (0, n.jsx)(a.SkinUnevenSkinToneIcon, { width: e, height: e }),
          WrinklesIcon: (e) =>
            (0, n.jsx)(a.SkinWrinklesIcon, { width: e, height: e }),
          HairStraightIcon: (e) =>
            (0, n.jsx)(a.HairStraightIcon, { width: e, height: e }),
          HairWavyIcon: (e) =>
            (0, n.jsx)(a.HairWavyIcon, { width: e, height: e }),
          HairCurlyIcon: (e) =>
            (0, n.jsx)(a.HairCurlyIcon, { width: e, height: e }),
          HairCoilyIcon: (e) =>
            (0, n.jsx)(a.HairCoilyIcon, { width: e, height: e }),
          HairBrassinessIcon: (e) =>
            (0, n.jsx)(a.HairBrassinessIcon, { width: e, height: e }),
          HairColourFadingIcon: (e) =>
            (0, n.jsx)(a.HairColourFadingIcon, { width: e, height: e }),
          HairCurlDefinitionIcon: (e) =>
            (0, n.jsx)(a.HairCurlDefinitionIcon, { width: e, height: e }),
          HairDamageIcon: (e) =>
            (0, n.jsx)(a.HairDamageIcon, { width: e, height: e }),
          HairDandruffIcon: (e) =>
            (0, n.jsx)(a.HairDandruffIcon, { width: e, height: e }),
          HairDrynessIcon: (e) =>
            (0, n.jsx)(a.HairDrynessIcon, { width: e, height: e }),
          HairDullnessIcon: (e) =>
            (0, n.jsx)(a.HairDullnessIcon, { width: e, height: e }),
          HairFrizzinessIcon: (e) =>
            (0, n.jsx)(a.HairFrizzinessIcon, { width: e, height: e }),
          HairLossIcon: (e) =>
            (0, n.jsx)(a.HairLossIcon, { width: e, height: e }),
          HairOilinessIcon: (e) =>
            (0, n.jsx)(a.HairOilinessIcon, { width: e, height: e }),
          HairShrinkageIcon: (e) =>
            (0, n.jsx)(a.HairShrinkageIcon, { width: e, height: e }),
          HairTanglingIcon: (e) =>
            (0, n.jsx)(a.HairTanglingIcon, { width: e, height: e }),
          HairVolumeIcon: (e) =>
            (0, n.jsx)(a.HairVolumeIcon, { width: e, height: e }),
        },
        s = (e, i) => {
          var t, n;
          return null !==
            (n = null === (t = r[e]) || void 0 === t ? void 0 : t.call(r, i)) &&
            void 0 !== n
            ? n
            : null;
        },
        o = (e) => {
          let { concern: i, size: t } = e;
          return s(i, t);
        };
    },
    98204: function (e, i, t) {
      "use strict";
      t.d(i, {
        F: function () {
          return n;
        },
      });
      let n = (0, t(63299).fj)({
        baseStyle: {
          bgColor: "primary.white",
          border: "transparent",
          minHeight: 18,
          padding: 8,
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "stretch",
          borderRadius: "full",
          textStyle: "body.semibold",
        },
      });
    },
    20995: function (e, i, t) {
      "use strict";
      t.d(i, {
        H: function () {
          return d;
        },
        c: function () {
          return c;
        },
      });
      var n = t(24004),
        a = t(1900),
        r = t(44982),
        s = t(30480),
        o = t(35138),
        l = (e) => {
          let { color: i, width: t = "2px" } = e;
          return (0, n.jsx)(o.k, {
            borderRadius: "1px",
            backgroundColor: i,
            alignSelf: "stretch",
            my: "2px",
            width: t,
          });
        };
      let c = (e) => {
          let { title: i, iconName: t } = e,
            o = t && (0, s.ky)(t);
          return (0, n.jsxs)(a.U, {
            gap: 2,
            width: "100%",
            children: [
              (0, n.jsx)(l, { color: "bdna.bdna.90" }),
              (0, n.jsxs)(a.U, {
                gap: 2,
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                children: [
                  (0, n.jsx)(r.x, {
                    textStyle: "heading.h7.bold",
                    children: i,
                  }),
                  o ? (0, n.jsx)(o, { width: 6, height: 6 }) : null,
                ],
              }),
            ],
          });
        },
        d = (e) => {
          let { content: i } = e;
          return (0, n.jsxs)(a.U, {
            ml: 2,
            gap: 2,
            width: "100%",
            children: [
              (0, n.jsx)(l, { color: "bdna.bdna.10--new" }),
              (0, n.jsx)(r.x, {
                textColor: "primary.black.40",
                textStyle: "function.text.medium",
                children: i,
              }),
            ],
          });
        };
    },
    74574: function (e, i, t) {
      "use strict";
      t.d(i, {
        Z: function () {
          return d;
        },
      });
      var n = t(24004),
        a = t(96834),
        r = t(1900),
        s = t(585),
        o = t(44982),
        l = t(92832),
        c = t(20995),
        d = (e) => {
          let { label: i, imgSrc: t, width: d = "max", content: u } = e,
            [h, x] = (0, a.k)(!1);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(r.U, {
                as: "button",
                sx: {
                  _hover: { bgColor: "bdna.bdna.10--new" },
                  _expanded: {
                    bgColor: "bdna.bdna.100",
                    ".label, .chevron": { color: "primary.white" },
                  },
                },
                justifyContent: "space-between",
                "aria-expanded": h,
                bgColor: "rgba(232, 228, 240, 0.5)",
                width: d,
                padding: 3,
                borderRadius: "full",
                onClick: () => {
                  x.toggle();
                },
                children: [
                  (0, n.jsxs)(r.U, {
                    children: [
                      (0, n.jsx)(s.xu, {
                        borderRadius: "full",
                        width: 8,
                        height: 8,
                        backgroundImage: t,
                        backgroundSize: "contain",
                      }),
                      (0, n.jsx)(o.x, {
                        className: "label",
                        textStyle: "function.text.large",
                        children: i,
                      }),
                    ],
                  }),
                  (0, n.jsx)(s.xu, {
                    transform: h ? "rotate(90deg)" : "rotate(0deg)",
                    className: "chevron",
                    children: (0, n.jsx)(l.ChevronRightIcon, {
                      width: 6,
                      height: 6,
                    }),
                  }),
                ],
              }),
              h && (0, n.jsx)(c.H, { content: u }),
            ],
          });
        };
    },
    61834: function (e, i, t) {
      "use strict";
      t.d(i, {
        _: function () {
          return r;
        },
      });
      var n = t(24004),
        a = t(11933);
      let r = () =>
        (0, n.jsx)(a._, {
          title: "Oops! Something went wrong",
          "data-testid": "Error Something went wrong",
          description: "An error has occurred, please try again.",
          retry: !0,
        });
    },
    25508: function (e, i, t) {
      "use strict";
      t.d(i, {
        r: function () {
          return c;
        },
      });
      var n = t(24004),
        a = t(26324),
        r = t(1900),
        s = t(72835),
        o = t(44982),
        l = t(92832);
      let c = (e) => {
        let { title: i, description: t, icon: c, variant: d = "grey" } = e,
          u = (0, a.useMultiStyleConfig)("InfoCard", { variant: d });
        return (0, n.jsxs)(r.U, {
          sx: u.container,
          children: [
            c,
            (0, n.jsxs)(s.g, {
              sx: u.textContainer,
              children: [
                (0, n.jsxs)(r.U, {
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  children: [
                    "grey" === d &&
                      (0, n.jsx)(l.TickCircledBDNAIcon, {
                        width: 6,
                        height: 6,
                        color: "primary.white",
                      }),
                    (0, n.jsx)(o.x, { sx: u.heading, children: i }),
                  ],
                }),
                t && (0, n.jsx)(o.x, { sx: u.description, children: t }),
              ],
            }),
          ],
        });
      };
    },
    11933: function (e, i, t) {
      "use strict";
      t.d(i, {
        _: function () {
          return d;
        },
      });
      var n = t(24004),
        a = t(585),
        r = t(44982),
        s = t(38912),
        o = t(92832),
        l = t(95714),
        c = t(59274);
      let d = (e) => {
        let {
            title: i,
            description: t,
            retry: d = !1,
            buttonText: u = "Back to home",
            buttonTarget: h = "/",
            buttonCallback: x,
            height: m = "calc(100vh - 80px)",
            children: g,
          } = e,
          p = (0, s.useRouter)();
        return (0, n.jsxs)(a.xu, {
          display: "flex",
          flexDirection: "column",
          gap: 4,
          p: 4,
          alignItems: "center",
          textAlign: "center",
          height: m,
          maxWidth: 122,
          justifyContent: "center",
          margin: "auto",
          children: [
            (0, n.jsx)(o.BDNAIcon, { width: 14, height: 14, color: "black" }),
            (0, n.jsx)(r.x, {
              textStyle: "display.h4",
              color: "primary.black.10",
              children: i,
            }),
            (0, n.jsx)(r.x, {
              textStyle: "body.semibold",
              color: "primary.black.40",
              children: t,
            }),
            (0, n.jsx)(l.z, {
              mt: { base: 8, lg: 10 },
              onClick: () =>
                x ? x() : d ? window.location.reload() : p.push(h),
              size: "lg",
              variant: "bdnaFill",
              fullWidth: !0,
              ariaLabel: "".concat(u, " button"),
              "data-testid": "".concat(u, " button"),
              children: d ? "Retry" : u,
            }),
            d &&
              (0, n.jsx)(c.ButtonLink, {
                href: h,
                variant: "secondary",
                size: "lg",
                fullWidth: !0,
                children: u,
              }),
            g,
          ],
        });
      };
    },
    86895: function (e, i, t) {
      "use strict";
      t.d(i, {
        O: function () {
          return n;
        },
      });
      let n = JSON.parse(
        '{"oily":{"introText":"you need lightweight formulas that won’t clog your pores","label":"oily skin","ingredients":[{"label":"Lightweight textures","description":"hydrate without adding excess oil, helping to maintain balance. Examples include gel creams or lightweight lotions","textureImageSrc":"Lightweight-textures.png"},{"label":"Non comedogenic formulas","description":"contain ingredients that nourish without clogging pores. Examples include hyaluronic acid and niacinamide","textureImageSrc":"Non-comedogenic-formulas.png"}],"characteristics":["Shiny","Enlarged pores","Excess sebum","Prone to clogging"],"focusAreaDescription":""},"dry":{"introText":"you need hydrating formulas to add moisure and lock it in","label":"dry skin","ingredients":[{"label":"Humectants","description":"hydrate the skin\'s surface by drawing water from the environment. Examples include hyaluronic acid and glycerin","textureImageSrc":"Humectants.png"},{"label":"Emoilients","description":"lock in moisture by repairing the skin\'s natural barrier. Examples include ceramides and squalane","textureImageSrc":"Emoilients.png"}],"characteristics":["Tightness","Flakiness","Itching","Sensitivity"],"focusAreaDescription":""},"normal":{"introText":"you need formulas that nourish and keep your natural oil balance","label":"normal skin","ingredients":[{"label":"Lightweight textures","description":"hydrate without adding excess oil, helping to maintain balance. Examples include gel creams or lightweight lotions","textureImageSrc":"Lightweight-textures.png"},{"label":"Balanced formulas","description":"maintain natural balance of oil and hydration in your skin. Examples include squalane, hyaluronic acid and glycerin","textureImageSrc":"Balanced-formulas.png"}],"characteristics":["Balanced","Smooth","Even"],"focusAreaDescription":""},"combination":{"introText":"you need formulas that regulate oil production and hydrate dry areas","label":"combination skin","ingredients":[{"label":"Hydrating ingredients","description":"deliver hydration to dry areas without overwhelming oily zones. Examples include hyaluronic acid and aloe vera","textureImageSrc":"Hydrating-ingredients.png"},{"label":"Oil regulating ingredients","description":"control oil production and prevent excess shine. Examples include niacinamide and salicylic acid","textureImageSrc":"Oil-regulating-ingredients.png"}],"characteristics":["Oily areas","Dry areas","Shiny"],"focusAreaDescription":""},"high":{"introText":"you need soothing ingredients and to avoid harsh chemicals","label":"high sensitivity skin","ingredients":[{"label":"Soothing ingredients","description":"protect the skin barrier and reduce inflammation. Examples include aloe vera or Vitamin B5","textureImageSrc":"Soothing-ingredients.png"},{"label":"Unscented formulas","description":"fragrances can include harsh ingredients and chemicals that cause irritation and rashes - so it’s better to go unscented","textureImageSrc":"Unscented-formulas.png"}],"characteristics":["Easily irritated","Prone to redness","Reacts to harsh products"],"focusAreaDescription":""},"acneblemishproneskin":{"introText":"you need exfoliating and anti-inflammatory active ingredients","label":"blemish prone skin","ingredients":[{"label":"Salicylic acid","description":"perfect for exfoliating and unclogging pores, and reducing the chance of breakouts","textureImageSrc":"Salicylic-acid.png"},{"label":"Niacinamide","description":"provides anti inflammatory benefits that reduce redness and irritation","textureImageSrc":"Niacinamide.png"}],"characteristics":["Excess oil","Bacteria","Hormones","Diet","Stress"],"focusAreaDescription":"It may be a common skin problem, but there are a lot of breakout myths out there. Blemishes are what happens when oil and dead skin cells block up hair follicles, causing inflammation and pimples."},"finelineswrinkles":{"introText":"you need ingredients that boost collagen and increase cell turnover","label":"fine lines & wrinkles","ingredients":[{"label":"Retinol","description":"promotes cell turnover and encourages new, healthy skin - reducing the appearance of fine lines.","textureImageSrc":"Retinol.png"},{"label":"Peptides","description":"stimulate collagen production which helps maintain skin elasticity and firmness","textureImageSrc":"Peptides.png"}],"characteristics":["Ageing","Sun damage","Dehydration","Pollution","Diet"],"focusAreaDescription":"Lines on the face are completely natural as we age, so embrace your ‘story’ lines as signs of a life well lived. Wrinkles can be dynamic (appearing with facial expressions) or static (visible all the time)."},"drynessdehydration":{"introText":"you need ingredients that boost and retain moisture","label":"dryness & dehydration","ingredients":[{"label":"Hyaluronic acid","description":"holds up to 1000 times its weight in water. It maintains hydration levels and plumps the skin","textureImageSrc":"Hyaluronic-acid.png"},{"label":"Ceramides","description":"restore and repair the skin\'s natural barrier, preventing moisture loss and protecting against environmental stressors","textureImageSrc":"Ceramides.png"}],"characteristics":["Sun damage","Pollution","Heating","Dehydration"],"focusAreaDescription":"Dry skin can cause discomfort and inconvenience by adding to your skincare needs. It may feel tight, especially after cleansing and flaky or rough on the forehead, cheeks and nose. Since dry skin lacks plumpness, lines and wrinkles show up more and increased sensitivity can add redness to the mix."},"hyperpigmentation":{"introText":"you need ingredients that brighten skin and encourage cell turnover","label":"hyperpigmentation","ingredients":[{"label":"Vitamin C","description":"brightens skin by reducing the melanin production that causes the formation of dark spots","textureImageSrc":"Vitamin-C.png"},{"label":"Glycolic acid","description":"exfoliates dead cells from the skin\'s surface, encouraging cell turnover. This helps fade existing pigmentation","textureImageSrc":"Glycolic-acid.png"}],"characteristics":["Sun damage","Hormones","Pollution"],"focusAreaDescription":"Flawlessness is a beauty clich\xe9 with a lot to answer for – it\'s actually more common to have an uneven skin tone than not. Dark areas appear wherever we’re exposed to the sun or develop scars, no matter your skin colour. It’s caused by the melanin that also makes some skins tan."},"darkcirclespuffiness":{"introText":"you need soothing and brightening ingredients","label":"dark circles & puffiness","ingredients":[{"label":"Caffeine","description":"helps constrict blood vessels around the eye, reducing puffiness and soothing swelling","textureImageSrc":"Caffeine.png"},{"label":"Vitamin C","description":"brightens skin around the eye by inhibiting melanin production, and lessens dark circles","textureImageSrc":"Vitamin-C.png"}],"characteristics":["Fatigue","Dehydration","Aging","Allergies"],"focusAreaDescription":"Dark circles around the eyes can be caused by genetics, skin pigmentation and ageing. Although we think of them as fatigue-related, it’s not that simple."},"oiliness":{"introText":"you need oil-controlling and exfoliating ingredients","label":"oiliness","ingredients":[{"label":"Salicylic acid","description":"exfoliates and unclogs pores, preventing the build up of dead skin cells that can contribute to oiliness","textureImageSrc":"Salicylic-acid.png"},{"label":"Niacinamide","description":"regulates oil production and minimizes pores, helping to reduce shine and lower the risk of breakouts","textureImageSrc":"Niacinamide.png"}],"characteristics":["Hormones","Genetics","Diet","Stress","Humidity"],"focusAreaDescription":"People who produce an abundance of skin\'s natural oil sebum are said to have oily skin. Like any skin type, oily skin has advantages as well as needs. Shine, visible pores and pimples are all oily skin challenges."},"redness":{"introText":"you need anti-inflammatory and soothing ingredients","label":"redness","ingredients":[{"label":"Panthenol","description":"hydrates the skin whilst providing soothing properties to calm redness and irritation. It\'s also known as vitamin B5","textureImageSrc":"Panthenol.png"},{"label":"Niacinamide","description":"provides anti inflammatory benefits and strengthens the skin barrier - protecting against further irritation","textureImageSrc":"Niacinamide.png"}],"characteristics":["Inflammation","Irritation","Sun damage","Allergies"],"focusAreaDescription":"Redness can be a source of anxiety and concern for lots of us. Short-term redness is caused by damage (sun, heat or chemicals) or emotions (blushing). Redness that sticks around is called ‘persistent’ and can be caused by something irritating the skin, a damaged moisture barrier or broken blood vessels."},"poresblackheads":{"introText":"you need exfoliating and pore tightening ingredients","label":"pores & blackheads","ingredients":[{"label":"Salicylic acid","description":"penetrates oily pores, exfoliates and dissolves sebum. Result? Smoother skin texture and fewer blackheads","textureImageSrc":"Salicylic-acid.png"},{"label":"Niacinamide","description":"regulates oil production and tightens pores by improving skin elasticity - making them less prone to trapping dirt or oil","textureImageSrc":"Niacinamide.png"}],"characteristics":["Excess oil","Genetics","Sun damage","Ageing"],"focusAreaDescription":"Your pores are amazing. They keep you cool, flush out dirt and deliver oils with the help of sebaceous glands. So it’s unfair that they get a bad rap. When we talk about pores, we usually mean they’re blocked or ‘too’ visible – this is normal, but it can be managed."},"dullness":{"introText":"you need brightening and exfoliating ingredients","label":"dullness","ingredients":[{"label":"Vitamin C","description":"brightens skin by controlling melanin production - helping to avoiding dark spots","textureImageSrc":"Vitamin-C.png"},{"label":"Glycolic acid","description":"exfoliates dead skin cells in the top layer of the skin to reveal a brighter, fresher face","textureImageSrc":"Glycolic-acid.png"}],"characteristics":["Dead cells","Pollution","Dehydration","Fatigue"],"focusAreaDescription":"When skin is healthy, it seems to glow – you might even be told you look ‘radiant’ or ‘luminous’. Dullness is what happens when that light fades, often due to a build-up of dead skin cells. Pollution and smoking are triggers, as are sleeplessness, bad circulation and hormones."},"unevenskintonetexture":{"introText":"you need exfoliating and rejuvinating ingredients","label":"uneven skin tone & texture","ingredients":[{"label":"Vitamin C","description":"evens skin by controlling melanin production - helping to fade dark spots","textureImageSrc":"Vitamin-C.png"},{"label":"Retinol","description":"boosts cell renewal and allows fresh, healthy skin to appear","textureImageSrc":"Retinol.png"}],"characteristics":["Sun damage","Dehydration","Ageing","Inflammation"],"focusAreaDescription":"Just like life, skin has its bumpy bits and rough patches. Although some uneven texture is found in teens thanks to clogged pores, adults get it thanks to sun, age and smoking."},"lackoffirmness":{"introText":"you need firming and collagen-boosting ingredients","label":"lack of firmness","ingredients":[{"label":"Retinol","description":"stimulates collagen production and cell turnover - which improves skin texture and firmness","textureImageSrc":"Retinol.png"},{"label":"Hyaluronic acid","description":"boosts hydration and skin elasticity by acting as a moisture magnet. Better hydrated skin appears firmer and plumper","textureImageSrc":"Hyaluronic-acid.png"}],"characteristics":["Ageing","Sun damage","Collagen loss","Stress"],"focusAreaDescription":"One of the natural results of getting older is a loss of firmness. As skin becomes less elastic, we can start to notice drooping features, jowls and lines. As always, you have options - a little bit of skin savviness goes a long way."}}',
      );
    },
  },
  function (e) {
    e.O(
      0,
      [
        9030, 2650, 4751, 4147, 2965, 8808, 1632, 4533, 4663, 7208, 2344, 7562,
        8207, 7900, 8125, 8407, 6550, 7421, 8082, 4216, 5814, 3866, 8527, 3230,
        8178, 5323, 3804, 6255, 3498, 8470, 146, 1744,
      ],
      function () {
        return e((e.s = 72483));
      },
    ),
      (_N_E = e.O());
  },
]);
