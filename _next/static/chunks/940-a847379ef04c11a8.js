"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [940],
  {
    7566: (e, t, i) => {
      i.d(t, { C: () => d });
      var l = i(94799),
        r = i(4306),
        a = i(87798),
        n = i(89136),
        s = i(49606);
      let o = {
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
        },
        d = (e) => {
          let {
              imageSrc: t,
              title: i,
              description: d,
              onClick: c,
              width: u = 216,
              paddingX: x = 2,
              paddingY: h = 2,
              imageMaxHeight: g,
              noHover: p = !1,
            } = e,
            m = g ? (g.lg ? { lg: o } : o) : {};
          return (0, l.jsxs)(r.Box, {
            color: "primary.black.10",
            minWidth: u,
            maxWidth: u,
            paddingX: x,
            paddingY: h,
            borderRadius: "2xl",
            position: "relative",
            cursor: "pointer",
            _hover: p ? {} : { bgColor: "primary.warmGrey.80" },
            onClick: c,
            children: [
              (0, l.jsx)(r.Box, {
                marginBottom: 3,
                height: g,
                overflow: "hidden",
                position: "relative",
                borderRadius: "lg",
                backgroundColor: "primary.white",
                children: (0, l.jsx)(a.Image, {
                  src: t,
                  alt: "Story Image",
                  width: "calc("
                    .concat(u, " - var(--chakra-sizes-")
                    .concat(x, "))"),
                  ...m,
                }),
              }),
              (0, l.jsxs)(r.Box, {
                children: [
                  (0, l.jsx)(n.Text, {
                    as: "h4",
                    textStyle: "body.semibold",
                    children: i,
                  }),
                  d &&
                    (0, l.jsx)(n.Text, {
                      textStyle: "function.caption.small",
                      marginTop: 1,
                      children: (0, l.jsx)(s.CmsRichText, { richData: d }),
                    }),
                ],
              }),
            ],
          });
        };
    },
    8316: (e, t, i) => {
      i.d(t, { f: () => s });
      var l = i(94799),
        r = i(31634),
        a = i(34023),
        n = i(2791);
      let s = () => {
        let e = a.useRef(null);
        return (
          (0, a.useEffect)(() => {
            window.Trustpilot &&
              window.Trustpilot.loadFromElement(e.current, !0);
          }, []),
          (0, l.jsx)(r.Flex, {
            "data-testid": "trustpilot-widget",
            width: "max-content",
            ref: e,
            minHeight: "20px",
            "data-locale": n.In,
            "data-template-id": n.oe.MICRO_TRUST_STAR,
            "data-businessunit-id": n.MS,
            "data-style-height": "20px",
            marginLeft: "-14px",
            "data-stars": "1,2,3,4,5",
            "data-text-color": "dark",
            "data-scroll-to-list": "false",
            "data-align-items": "start",
            "data-allow-robots": "true",
            children: (0, l.jsx)("a", {
              href: n.$w,
              target: "_blank",
              rel: "noopener",
            }),
          })
        );
      };
    },
    8557: (e, t, i) => {
      i.r(t), i.d(t, { SpotlightList: () => p });
      var l = i(94799),
        r = i(20381),
        a = i(31634),
        n = i(89136),
        s = i(4306),
        o = i(27357),
        d = i(34023),
        c = i(50969),
        u = i(88655),
        x = i(15231),
        h = i(62495),
        g = i(99313);
      let p = (e) => {
        var t;
        let {
            cmsProps: { title: i, cards: p, ctaLabel: m, ctaLink: y },
          } = e,
          f = (0, o.usePathname)(),
          v = (0, d.useRef)(null),
          {
            scroll: j,
            canScrollLeft: b,
            canScrollRight: S,
          } = (0, u.k)(v, {
            scrollTargetOffset:
              null !== (t = (0, r.useBreakpointValue)([-25, null, -40])) &&
              void 0 !== t
                ? t
                : 0,
          });
        return (0, l.jsxs)(a.Flex, {
          flexDirection: "column",
          gap: 4,
          width: "100%",
          children: [
            i && (0, l.jsx)(n.Text, { textStyle: "title.t2", children: i }),
            (0, l.jsx)(a.Flex, {
              columnGap: { base: 2, md: 4 },
              overflowX: "auto",
              ref: v,
              justifyContent: "space-evenly",
              children: p.map((e, t) =>
                (0, l.jsx)(
                  s.Box,
                  {
                    w: { base: 80, md: 100, lg: 116 },
                    flex: { base: "0 0 auto", "2xl": "1" },
                    children: (0, l.jsx)(
                      h.H,
                      {
                        cmsProps: e,
                        contextProps: {
                          analytics: { page_category: (0, c.E)(f) },
                        },
                        isCarousel: !0,
                      },
                      t,
                    ),
                  },
                  t,
                ),
              ),
            }),
            (0, l.jsxs)(a.Flex, {
              justifyContent: "space-between",
              alignItems: "center",
              children: [
                (b || S) &&
                  (0, l.jsx)(g._, {
                    onClick: j,
                    disableLeft: !b,
                    disableRight: !S,
                    isAnimated: !1,
                  }),
                m &&
                  y &&
                  (0, l.jsx)(x.ButtonLink, {
                    href: y,
                    variant: "primary",
                    size: "sm",
                    marginLeft: "auto",
                    children: m,
                  }),
              ],
            }),
          ],
        });
      };
    },
    13513: (e, t, i) => {
      i.r(t), i.d(t, { CmsCuratedList: () => d });
      var l = i(94799),
        r = i(24689),
        a = i(92718),
        n = i(68052),
        s = i(96543),
        o = i(84145);
      let d = (e) => {
        var t;
        let { cmsProps: i, analytics: d } = e,
          {
            title: c,
            productSKUs: u,
            description: x,
            slug: h,
            story: g,
            pageCreation: p = !0,
          } = i,
          {
            data: m,
            isLoading: y,
            isPending: f,
          } = (0, s.ZU)(
            {
              filters: { sku: u },
              productTypes: [r.ch.SKINCARE, r.ch.HAIRCARE],
              sortBy: [{ field: a.x.BDNA, order: n.K.DESCENDING }],
              availabilityGT: 0,
            },
            { select: (e) => e.results },
          ),
          v =
            null !==
              (t =
                null == m
                  ? void 0
                  : m.filter((e) => {
                      var t;
                      return (
                        (null === (t = e.matchScores) || void 0 === t
                          ? void 0
                          : t.overallScore) === 10
                      );
                    }).length) && void 0 !== t
              ? t
              : 0;
        return (0, l.jsx)(o.E, {
          description: x,
          isLoading: y || f,
          numberOfSuperMatches: v,
          products: null != m ? m : [],
          linkRef: p && h ? "/noli-edits/".concat(h) : void 0,
          stories: g ? [g] : [],
          title: c,
          analytics: d,
        });
      };
    },
    14339: (e, t, i) => {
      i.d(t, { M: () => l });
      var l = (function (e) {
        return (
          (e.IMAGE_CARD = "Image Card"),
          (e.VIDEO_CARD = "Video Card"),
          (e.SMALL_STORY = "Small Story"),
          e
        );
      })({});
    },
    17007: (e, t, i) => {
      i.r(t), i.d(t, { CmsTabbedLists: () => g });
      var l = i(94799),
        r = i(22387),
        a = i(89136),
        n = i(77909),
        s = i(93339),
        o = i(4306),
        d = i(34023),
        c = i(92616),
        u = i(17422),
        x = i(57184),
        h = i(72848);
      let g = (e) => {
        let { cmsProps: t, contextProps: i } = e,
          { lists: g, title: p } = t,
          [m, y] = (0, d.useState)(0),
          { sendAnalyticsEvent: f } = (0, x.s)(),
          v = (0, d.useMemo)(() => g[m], [g, m]);
        if (!(null == g ? void 0 : g.length)) return;
        let j = (e) => {
          f(c.m3.cardsClicked.bind(c.m3), u.s.CARDS_CLICKED, {
            click_location: "list",
            click_name: e,
            click_action_category: p,
            click_subcategory_1: e,
          });
        };
        return (0, l.jsxs)(r.VStack, {
          gap: 6,
          alignItems: "stretch",
          children: [
            (0, l.jsxs)(r.VStack, {
              gap: 4,
              alignItems: "start",
              overflow: "auto",
              children: [
                p
                  ? (0, l.jsx)(a.Text, { textStyle: "title.t2", children: p })
                  : null,
                (0, l.jsx)(n.HStack, {
                  gap: 4,
                  role: "tablist",
                  children: g.map((e, t) =>
                    (0, l.jsx)(
                      s.Button,
                      {
                        id: "tab-".concat(e.id),
                        "aria-selected": t === m,
                        "aria-controls": "panel-".concat(e.id),
                        role: "tab",
                        variant: "tertiary",
                        onClick: () => {
                          j(null == e ? void 0 : e.title), y(t);
                        },
                        children: (0, l.jsx)(a.Text, {
                          as: "span",
                          color:
                            t === m
                              ? "primary.black.10"
                              : "primary.warmGrey.50",
                          textStyle:
                            t === m
                              ? "function.large.underline"
                              : "function.large",
                          children: e.title,
                        }),
                      },
                      "noli-edits-tab-".concat(e.id),
                    ),
                  ),
                }),
              ],
            }),
            v
              ? (0, l.jsx)(o.Box, {
                  id: "panel-".concat(v.id),
                  role: "tabpanel",
                  "aria-labelledby": "tab-".concat(v.id),
                  hidden: null === m,
                  children: (0, l.jsx)(h.K, {
                    cmsProps: {
                      id: v.id,
                      productSKUs: v.productSKUs,
                      slug: v.slug,
                      story: v.story,
                      pageCreation: v.pageCreation,
                    },
                    analytics: {
                      click_action_category: p,
                      click_subcategory_1: v.title,
                    },
                    contextProps: i,
                  }),
                })
              : null,
          ],
        });
      };
    },
    22253: (e, t, i) => {
      i.r(t), i.d(t, { CmsFaqGroup: () => h });
      var l = i(94799),
        r = i(38196),
        a = i(89136),
        n = i(92616),
        s = i(17422),
        o = i(57184),
        d = i(82518),
        c = i(90609),
        u = i(91130),
        x = i(49606);
      let h = (e) => {
        var t, i;
        let { group: h, focusArea: g, cmsProps: p, analytics: m } = e,
          y =
            null !== (t = null == p ? void 0 : p.name) && void 0 !== t
              ? t
              : null == h
                ? void 0
                : h.name,
          f =
            null !== (i = null == p ? void 0 : p.entries) && void 0 !== i
              ? i
              : null == h
                ? void 0
                : h.entries,
          { sendAnalyticsEvent: v } = (0, o.s)(),
          j = (e) => {
            let t = {
              click_name: e,
              page_category: "routine",
              page_subcategory_1: g,
              ...m,
            };
            v(n.m3.faqClicked.bind(n.m3), s.s.FAQ_CLICKED, t);
          },
          b = (e) => {
            if ("question" in e) {
              let { question: t, answer: i } = e,
                r = t && (0, d.fX)(t.toLowerCase().replace("?", ""));
              return (0, l.jsx)(
                c.n.Item,
                {
                  title: t,
                  variant: u.T.MediumOutline,
                  analyticsCallback: () => j(t),
                  children: i && (0, l.jsx)(x.CmsRichText, { richData: i }),
                },
                r,
              );
            }
            let { name: t } = e;
            return (0, l.jsx)(
              c.n,
              { variant: u.T.MediumOutline, children: b(e) },
              t && (0, d.fX)(t),
            );
          };
        return (
          f &&
          (0, l.jsxs)(r.Stack, {
            gap: 8,
            children: [
              (0, l.jsx)(a.Text, { textStyle: "heading.h6.bold", children: y }),
              (0, l.jsx)(c.n, {
                variant: u.T.Outline,
                allowToggle: !0,
                children: null == f ? void 0 : f.map((e) => b(e)),
              }),
            ],
          })
        );
      };
    },
    27502: (e, t, i) => {
      i.d(t, { F: () => x });
      let l = (e) => {
          let { products: t, focus_area_step: i } = e;
          return {
            id: e.id,
            isIncluded: e.is_included,
            key: i.step_name,
            essentialStep: i.is_primary,
            ...t.reduce(
              (e, t, i) => (
                t.is_selected &&
                  ((e.selectedProductIndex = t.step_index),
                  0 === i && (e.selectedProductIsTopRecommendation = !0)),
                e.productIds.push(t.product_id),
                e
              ),
              {
                productIds: [],
                selectedProductIndex: 0,
                selectedProductIsTopRecommendation: !0,
              },
            ),
          };
        },
        r = (e) => ({
          steps: e.steps.map(l),
          focusArea: { key: e.focus_area.name },
          id: e.id,
          isActive: !!e.is_active,
          lastModified: e.last_modified ? new Date(e.last_modified) : void 0,
          lastRefreshed: new Date(e.last_refreshed),
        });
      var a = i(56138),
        n = i(63598),
        s = i(69538);
      let o = a.v,
        d = (e) => {
          let t = "/recommendations/api/plan/".concat(e.join("/"));
          return c || t.endsWith("/") || (t += "/"), t;
        },
        c = "true" === s.env.NEXT_PUBLIC_USE_LOCAL_RECS;
      c && (o = n.L);
      class u extends o {
        static getInstance() {
          return u.instance || (u.instance = new u()), u.instance;
        }
        async getRoutineForFocusArea(e) {
          let {
              preferences: t,
              normalizeFactors: i,
              returnRawScore: l,
              productType: a,
              focusArea: n,
              budget: s,
            } = e,
            o = d(["get-routine"]);
          return r(
            await this.post(o, {
              product_type_key: a,
              search_score_options: {
                preferences: t,
                normalizeFactors: i,
                returnRawScore: l,
              },
              focus_area_name: n,
              budget: s,
            }),
          );
        }
        async activateRoutine(e) {
          let { routineId: t } = e,
            i = d([t.toString(), "activate"]);
          return r(await this.post(i));
        }
        async refreshRoutine(e) {
          let { routineId: t, ...i } = e,
            l = d(["".concat(t), "refresh"]);
          return r(await this.post(l, { search_score_options: i }));
        }
        async updateSelectedProduct(e) {
          let { selectedProductId: t, stepId: i } = e,
            l = d(["step", "".concat(i), "update-selected-product"]);
          return r(await this.post(l, { product_id: t }));
        }
        async updateStepIncluded(e) {
          let { stepId: t, isIncluded: i } = e,
            l = d(["step", "".concat(t), "update-is-included"]);
          return r(await this.post(l, { is_included: i }));
        }
      }
      let x = u.getInstance();
    },
    33635: (e, t, i) => {
      i.d(t, { CarouselItemWide: () => h });
      var l = i(94799),
        r = i(31634),
        a = i(22387),
        n = i(89136),
        s = i(77909),
        o = i(4306);
      i(34023);
      var d = i(93631),
        c = i(15231),
        u = i(57546),
        x = i(8316);
      let h = (e) => {
        let {
          cmsProps: {
            titleText: t,
            subtitle: i,
            imageUrl: h,
            lgBreakpointImageUrl: g,
            imagePosition: p,
            tagText: m,
            ctaList: y,
            showTrustpilot: f,
          },
          index: v,
        } = e;
        return (0, l.jsxs)(r.Flex, {
          flexDirection:
            "Right" === p
              ? { base: "column-reverse", lg: "row" }
              : { base: "column", lg: "row-reverse" },
          width: "100%",
          height: "100%",
          justifyContent: "center",
          backgroundColor: "primary.warmGrey.90",
          children: [
            (0, l.jsxs)(a.VStack, {
              paddingY: { base: 8, md: 14, lg: 40 },
              paddingX: { base: 3, md: 4, lg: 8, "2xl": 10 },
              gap: { base: 6, lg: 10 },
              alignItems: "start",
              justifyContent: "center",
              maxWidth: { base: "100%", lg: "50%" },
              flex: 1,
              children: [
                (0, l.jsxs)(a.VStack, {
                  gap: 4,
                  alignItems: "start",
                  flexGrow: { base: 1, lg: 0 },
                  marginTop: -2,
                  children: [
                    m &&
                      (0, l.jsx)(n.Text, {
                        textStyle: "label.semibold",
                        children: m,
                      }),
                    (0, l.jsx)(n.Text, {
                      textStyle: "display.d1",
                      children: t,
                    }),
                    i &&
                      (0, l.jsx)(n.Text, {
                        textStyle: "body.semibold",
                        children: i,
                      }),
                  ],
                }),
                (null == y ? void 0 : y.length)
                  ? (0, l.jsx)(s.HStack, {
                      width: "100%",
                      zIndex: 3,
                      children: y.map((e) => {
                        var t;
                        return (0, l.jsx)(
                          c.ButtonLink,
                          {
                            href: null !== (t = e.url) && void 0 !== t ? t : "",
                            variant: e.type ? (0, d.Y)(e.type) : "secondary",
                            size: "md",
                            flex: { base: 1, lg: "unset" },
                            children: e.text,
                          },
                          e.text,
                        );
                      }),
                    })
                  : null,
                f && (0, l.jsx)(x.f, {}),
              ],
            }),
            (0, l.jsxs)(o.Box, {
              position: "relative",
              minHeight: { base: 75, md: 100, lg: "unset" },
              flex: 1,
              children: [
                (0, l.jsx)(u.G, {
                  image: {
                    src: h,
                    fill: !0,
                    alt: "",
                    sizes: { base: "100vw", lg: "50vw" },
                    priority: !v,
                  },
                  display: { base: "block", lg: g ? "none" : "block" },
                  objectFit: "cover",
                }),
                g &&
                  (0, l.jsx)(u.G, {
                    image: { src: g, fill: !0, alt: "" },
                    display: { base: "none", lg: "block" },
                    objectFit: "cover",
                  }),
              ],
            }),
          ],
        });
      };
    },
    34991: (e, t, i) => {
      i.d(t, { A: () => s });
      var l = i(50692),
        r = i(27502),
        a = i(48973),
        n = i(80807);
      let s = (e, t, i) => {
        let {
            data: { preferences: s },
          } = (0, n.W)(e),
          { data: o, isLoading: d } = (0, a.B)(),
          c = null == s ? void 0 : s.budget;
        return (0, l.useQuery)({
          ...i,
          queryKey: ["useGetRoutineFromRecommendationService", t, s],
          enabled: !!t && (null == i ? void 0 : i.enabled) !== !1 && !d && !!s,
          queryFn: () =>
            r.F.getRoutineForFocusArea({
              focusArea: t,
              budget: c,
              preferences: s,
              normalizeFactors: o,
              productType: e,
            }),
        });
      };
    },
    35510: (e, t, i) => {
      i.d(t, { c: () => h });
      var l = i(94799),
        r = i(20381),
        a = i(4306),
        n = i(38196),
        s = i(34023),
        o = i(88655),
        d = i(98814),
        c = i(89136);
      let u = (e) => {
        let {
            children: t,
            size: i,
            isFullWidth: r = !0,
            heading: n,
            description: s,
            onClick: o,
          } = e,
          u = (0, d.useStyleConfig)("StoryContentCard", { size: i });
        return (0, l.jsxs)(a.Box, {
          width: r ? "100%" : 72,
          flexShrink: r ? void 0 : 0,
          onClick: o,
          as: "button",
          "aria-label": n,
          "data-testid": n,
          textAlign: "left",
          padding: 2,
          _hover: { bgColor: "primary.warmGrey.80" },
          borderRadius: 8,
          children: [
            (0, l.jsx)(a.Box, {
              __css: u,
              marginBottom: 3 * !!n,
              position: "relative",
              children: t,
            }),
            (0, l.jsxs)(a.Box, {
              children: [
                (0, l.jsx)(c.Text, {
                  textStyle: "body.semibold",
                  marginBottom: +!!s,
                  children: n,
                }),
                (0, l.jsx)(a.Box, {
                  textStyle: "function.caption.medium",
                  children: s,
                }),
              ],
            }),
          ],
        });
      };
      var x = i(99313);
      let h = (e) => {
        let { title: t, contentData: i } = e,
          d = (0, s.useRef)(null),
          {
            scroll: c,
            canScrollLeft: h,
            canScrollRight: g,
          } = (0, o.k)(d, {
            scrollTargetOffset: (0, r.useBreakpointValue)([-25, null, -40]),
          });
        return (0, l.jsxs)(a.Box, {
          display: "flex",
          flexDir: "column",
          children: [
            (0, l.jsx)(a.Box, {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              children: (0, l.jsx)(n.Stack, {
                gap: 2,
                paddingBottom: 6,
                children: t,
              }),
            }),
            (0, l.jsx)(a.Box, {
              ref: d,
              display: "flex",
              columnGap: [2, null, 4],
              overflowX: "auto",
              overflowY: "hidden",
              marginBottom: -4,
              paddingBottom: 4,
              children: i.map((e, t) =>
                (0, l.jsx)(
                  a.Box,
                  {
                    scrollSnapAlign: "start",
                    children: (0, l.jsx)(u, {
                      heading: e.heading,
                      description: e.description,
                      size: e.size,
                      isFullWidth: !1,
                      onClick: e.onClick,
                      children: e.children,
                    }),
                  },
                  t,
                ),
              ),
            }),
            (0, l.jsx)(a.Box, {
              marginTop: 6,
              children: (0, l.jsx)(x._, {
                onClick: c,
                disableLeft: !h,
                disableRight: !g,
                isAnimated: !1,
              }),
            }),
          ],
        });
      };
    },
    37501: (e, t, i) => {
      i.r(t), i.d(t, { CmsQuickLinks: () => p });
      var l = i(94799),
        r = i(29392),
        a = i(4306),
        n = i(89136),
        s = i(46893),
        o = i(31634),
        d = i(92718),
        c = i(92616),
        u = i(17422),
        x = i(57184),
        h = i(57546),
        g = i(49071);
      let p = (e) => {
        let {
            cmsProps: { title: t, links: i },
            contextProps: { analytics: p },
          } = e,
          { sendAnalyticsEvent: m } = (0, x.s)(),
          y = (e, i) => {
            let l = {
              click_location: t,
              page_category: p.page_category,
              click_name: e,
              click_subcategory_1: i,
            };
            m(c.m3.cardsClicked.bind(c.m3), u.s.CARDS_CLICKED, l);
          },
          f = (e) => e.contentType === d.ry.QUICK_LINKS_CARD,
          v = i.map((e) => {
            if (!f(e))
              return (0, l.jsx)(
                a.Box,
                { flex: 1, children: (0, l.jsx)(g.n, { entry: e.card }) },
                e.card.id,
              );
            {
              let t = e.card;
              return (0, l.jsxs)(
                r.LinkBox,
                {
                  flex: "1 1 1",
                  onClick: () => {
                    var e;
                    y(
                      null !== (e = t.title) && void 0 !== e ? e : "",
                      t.targetUrl,
                    );
                  },
                  children: [
                    (0, l.jsx)(a.Box, {
                      position: "relative",
                      height: 24,
                      borderRadius: "lg",
                      overflow: "hidden",
                      marginBottom: 2,
                      children: (0, l.jsx)(h.G, {
                        image: {
                          src: t.imageUrl,
                          alt: "",
                          fill: !0,
                          sizes: "25vw",
                        },
                        objectFit: "cover",
                      }),
                    }),
                    (0, l.jsx)(r.LinkOverlay, {
                      href: t.targetUrl,
                      "aria-label": t.title,
                      "data-testid": t.title,
                      children: (0, l.jsx)(n.Text, {
                        textStyle: "function.text.large",
                        children: t.title,
                      }),
                    }),
                  ],
                },
                t.title,
              );
            }
          });
        return (0, l.jsxs)(a.Box, {
          maxWidth: "1408px",
          children: [
            t &&
              (0, l.jsx)(n.Text, {
                as: "h4",
                textStyle: "title.t2",
                paddingBottom: 6,
                children: t,
              }),
            i.some(f)
              ? (0, l.jsx)(s.SimpleGrid, {
                  rowGap: 6,
                  columnGap: 2,
                  width: "100%",
                  columns: [2, null, 3, 4],
                  children: v,
                })
              : (0, l.jsx)(o.Flex, {
                  justifyContent: "space-evenly",
                  rowGap: 6,
                  columnGap: 2,
                  flexWrap: "wrap",
                  flexDirection: { base: "column", md: "row" },
                  children: v,
                }),
          ],
        });
      };
    },
    39340: (e, t, i) => {
      i.d(t, { CmsNavigationImageCard: () => a });
      var l = i(94799),
        r = i(44193);
      let a = (e) => {
        let { cmsProps: t } = e;
        return (0, l.jsx)(r.y, { ...t });
      };
    },
    46837: (e, t, i) => {
      i.d(t, { CmsCarousel: () => K });
      var l = i(94799),
        r = i(4306),
        a = i(89136),
        n = i(34023),
        s = i(31634),
        o = i(66572),
        d = i(24854),
        c = i(39693),
        u = i(59573);
      let x = (e) => {
        let {
          cards: t,
          handleScrollButtonClick: i,
          setCurrentIndex: r,
          currentIndex: a,
        } = e;
        return (0, l.jsxs)(s.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          children: [
            (0, l.jsx)(u.L, {
              direction: "left",
              variant: "blackChevron",
              size: 12,
              ariaLabel: "Scroll left",
              "data-testid": "Scroll left",
              isAnimated: !1,
              onClick: () => i("left"),
            }),
            (0, l.jsx)(o.List, {
              display: "flex",
              gap: 4,
              children: t.map((e, t) =>
                (0, l.jsx)(
                  o.ListItem,
                  {
                    children: (0, l.jsx)(
                      d.IconButton,
                      {
                        display: "flex",
                        "data-testid": "indicator-".concat(t),
                        onClick: () => r(t),
                        variant: "unstyled",
                        minW: "inherit",
                        height: "inherit",
                        color:
                          t === a ? "primary.black.10" : "primary.warmGrey.70",
                        "aria-label": "Go to slide ".concat(t + 1),
                        "aria-pressed": t === a,
                        icon: (0, l.jsx)(c.DotIcon, { height: 2, width: 2 }),
                      },
                      "indicator-".concat(t),
                    ),
                  },
                  t,
                ),
              ),
            }),
            (0, l.jsx)(u.L, {
              direction: "right",
              variant: "blackChevron",
              size: 12,
              ariaLabel: "Scroll right",
              "data-testid": "Scroll right",
              isAnimated: !1,
              onClick: () => i("right"),
            }),
          ],
        });
      };
      var h = i(26408),
        g = i(92718),
        p = i(33635),
        m = i(27357),
        y = i(92616),
        f = i(17422),
        v = i(57184),
        j = i(82536),
        b = i(41657),
        S = i(24689),
        C = i(96543),
        I = i(34991);
      let k = (e) => {
        var t, i;
        let l = (null == e ? void 0 : e.enabled) !== !1,
          { data: r } = (0, b.E)({ enabled: l }),
          a = null == r ? void 0 : r[0],
          { data: n } = (0, I.A)(S.ch.SKINCARE, a, { enabled: l && !!a }),
          s = null == n ? void 0 : n.steps,
          o = null == s ? void 0 : s.map((e) => e.productIds[0]),
          d = (0, C.ZU)(
            { productIds: o },
            { enabled: l && s && (null == s ? void 0 : s.length) > 0 },
          );
        if (
          l &&
          a &&
          (null == s ? void 0 : s.length) &&
          (null === (t = d.data) || void 0 === t ? void 0 : t.results)
        )
          return null === (i = d.data) || void 0 === i ? void 0 : i.results;
      };
      g.ry.CTA_CAROUSEL_ITEM,
        g.ry.CTA_CAROUSEL_ITEM,
        g.ry.CTA_CAROUSEL_ITEM,
        g.ry.CTA_CAROUSEL_ITEM;
      let _ = {
        offer: c.TagIcon,
        spotlight: c.HeartIcon,
        new: c.PasswordShowIcon,
      };
      var w = i(65795);
      let T = {
          acneblemishproneskin: w.f.BLEMISH_PRONE_SKIN,
          "Blemish-prone Skin": w.f.BLEMISH_PRONE_SKIN,
          darkcirclespuffiness: w.f.DARK_CIRCLES_PUFFINESS,
          "Dark Circles & Puffiness": w.f.DARK_CIRCLES_PUFFINESS,
          drynessdehydration: w.f.DRYNESS_DEHYDRATION,
          "Dryness & Dehydration": w.f.DRYNESS_DEHYDRATION,
          dullness: w.f.DULLNESS,
          Dullness: w.f.DULLNESS,
          finelineswrinkles: w.f.FINE_LINES_WRINKLES,
          "Fine Lines & Wrinkles": w.f.FINE_LINES_WRINKLES,
          hyperpigmentation: w.f.HYPERPIGMENTATION,
          Hyperpigmentation: w.f.HYPERPIGMENTATION,
          lackoffirmness: w.f.LACK_OF_FIRMNESS,
          "Lack of Firmness": w.f.LACK_OF_FIRMNESS,
          oiliness: w.f.OILINESS,
          Oiliness: w.f.OILINESS,
          poresblackheads: w.f.PORES_AND_BLACKHEADS,
          "Pores & Blackheads": w.f.PORES_AND_BLACKHEADS,
          redness: w.f.REDNESS,
          Redness: w.f.REDNESS,
          unevenskintonetexture: w.f.UNEVEN_SKIN_TONE_AND_TEXTURE,
          "Uneven Skin Tone & Texture": w.f.UNEVEN_SKIN_TONE_AND_TEXTURE,
        },
        E = (e) => {
          let t = T[e];
          return w.O.find((e) => e.id === t);
        };
      var L = i(93869),
        R = i(57546),
        B = i(39061);
      let A = (e) => {
          let { imageSrc: t, matchScore: i } = e;
          return (0, l.jsxs)(s.Flex, {
            direction: "column",
            alignItems: "center",
            height: "fit-content",
            children: [
              (0, l.jsx)(B.G, {
                iconName: "sparkle",
                size: "xs",
                matchScore: i,
                noAnimation: !0,
                variant: "matchScore",
              }),
              (0, l.jsx)(R.G, {
                image: { src: t, width: 200, height: 200, alt: "" },
                marginTop: -3,
                minWidth: "130px",
                width: "130px",
                height: "200px",
                objectFit: "cover",
              }),
            ],
          });
        },
        N = {
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { duration: 1 } },
          exit: { opacity: 0 },
        },
        D = (e) => {
          var t;
          let {
              imgSrc: i,
              ctaText: n,
              ctaHref: o,
              titleText: d,
              tagText: u,
              tagType: x,
              thisCardIndex: g,
              focusedCardIndex: p,
              invertedColor: S,
              analytics: C,
              cardType: I,
            } = e,
            w = (0, m.useRouter)(),
            { user: T } = (0, j.A)(),
            { sendAnalyticsEvent: B } = (0, v.s)(),
            D = k({ enabled: "Routine" === I }),
            { data: F } = (0, b.E)(),
            P = null == T ? void 0 : T.segmentId,
            G = E(
              null !== (t = null == F ? void 0 : F[0]) && void 0 !== t ? t : "",
            ),
            O = () => {
              let e = { ...C, click_name: d, click_location: "carousel" };
              T && (e.bdna_segment_id = P),
                B(y.m3.navigationClicked.bind(y.m3), f.s.NAVIGATION_CLICKED, e);
            },
            M = () => {
              if ((C && O(), o)) {
                w.push(o);
                return;
              }
              if (G) {
                w.push("focus-area/learn/".concat(G.slug));
                return;
              }
            },
            K = x ? _[x] : void 0;
          return (0, l.jsxs)(h.e, {
            position: "relative",
            maxHeight: "400px",
            onTap: M,
            children: [
              (0, l.jsx)(r.Box, {
                height: "400px",
                width: "100%",
                children: (0, l.jsx)(R.G, {
                  image: {
                    alt: "",
                    fetchPriority: 0 === g || 1 === g ? "high" : "auto",
                    priority: 0 === g || 1 === g,
                    src: i,
                    fill: !0,
                    quality: 90,
                    sizes: "84vw",
                  },
                  borderRadius: "md",
                  objectFit: "cover",
                }),
              }),
              g === p &&
                (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(h.e, {
                      position: "absolute",
                      top: [6, 6, 6, 10],
                      left: [6, 6, 6, 10],
                      zIndex: 1,
                      ...N,
                      children: (0, l.jsx)(a.Text, {
                        color: S ? "primary.black.10" : "primary.white",
                        textStyle: "legacy.body.b2.bold",
                        children: (0, l.jsxs)(s.Flex, {
                          flexDirection: "row",
                          gap: 2,
                          alignItems: "center",
                          as: "span",
                          children: [
                            K &&
                              (0, l.jsx)(K, { height: 6, width: 6, color: "" }),
                            (0, l.jsx)("span", { children: u }),
                          ],
                        }),
                      }),
                    }),
                    (0, l.jsx)(h.e, {
                      position: "absolute",
                      top: 14,
                      left: [6, 6, 6, 10],
                      marginTop: 4,
                      marginRight: 10,
                      zIndex: 1,
                      ...N,
                      children: (0, l.jsx)(a.Text, {
                        color: S ? "primary.black.10" : "primary.white",
                        textStyle: "display.h3",
                        children:
                          "Learn about your top focus area:" === d && G
                            ? "Learn about your top focus area: ".concat(
                                G.label,
                              )
                            : d,
                      }),
                    }),
                    n &&
                      (0, l.jsx)(h.e, {
                        position: "absolute",
                        display: "flex",
                        bottom: [6, 6, 6, 10],
                        left: [6, 6, 6, 10],
                        zIndex: 3,
                        ...N,
                        children: (0, l.jsx)(L.$, {
                          "aria-label": "ctaButton",
                          "data-testid": "ctaButton",
                          alignItems: "center",
                          variant: S ? "primary" : "primaryLight",
                          onClick: M,
                          rightIcon: (0, l.jsx)(c.ArrowRightIcon, {
                            height: 6,
                            width: 6,
                          }),
                          children: n,
                        }),
                      }),
                    "Routine" === I &&
                      !!(null == D ? void 0 : D.length) &&
                      (0, l.jsx)(h.e, {
                        position: "absolute",
                        bottom: 0,
                        right: { base: 0, lg: 9 },
                        zIndex: 1,
                        ...N,
                        display: "flex",
                        width: "100%",
                        gap: { base: -4, md: 0 },
                        justifyContent: { base: "center", lg: "flex-end" },
                        overflow: "hidden",
                        children: D.map((e) => {
                          var t, i, r;
                          let a =
                              null === (i = e.masterVariant.images) ||
                              void 0 === i
                                ? void 0
                                : null === (t = i[0]) || void 0 === t
                                  ? void 0
                                  : t.url,
                            n =
                              null === (r = e.matchScores) || void 0 === r
                                ? void 0
                                : r.overallScore;
                          return a && n
                            ? (0, l.jsx)(
                                A,
                                { imageSrc: a, matchScore: n },
                                e.id,
                              )
                            : null;
                        }),
                      }),
                  ],
                }),
            ],
          });
        },
        F = (e) => {
          let {
            card: t,
            focusedCardIndex: i,
            thisCardIndex: r,
            handlePrev: a,
            handleNext: n,
            analytics: s,
          } = e;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              t.contentType === g.ry.CTA_CAROUSEL_ITEM &&
                (0, l.jsx)(D, {
                  analytics: { ...s, click_location: "carousel" },
                  thisCardIndex: r,
                  focusedCardIndex: i,
                  imgSrc: t.image,
                  ctaText: t.ctaText,
                  ctaHref: t.ctaHref,
                  titleText: t.titleText,
                  tagText: t.tagText,
                  tagType: t.tagType,
                  invertedColor: t.invertedColor,
                  handleNext: n,
                  handlePrev: a,
                  cardType: t.type,
                }),
              t.contentType === g.ry.WIDE_CAROUSEL_ITEM &&
                (0, l.jsx)(p.CarouselItemWide, { cmsProps: t, index: r }),
            ],
          });
        },
        P = (e) => {
          let {
              cards: t,
              focusedCardIndex: i,
              handlePrev: r,
              handleNext: a,
              analytics: o,
            } = e,
            d = () => {},
            [c, u] = (0, n.useState)(!0);
          return (
            (0, n.useEffect)(() => {
              u(!1);
            }, []),
            (0, l.jsxs)(s.Flex, {
              flexDirection: "row",
              "data-testid": "Carousel container",
              width: "100%",
              position: "relative",
              overflowX: "hidden",
              height: "auto",
              children: [
                t.length > 0 &&
                  t.map((e, t) => {
                    let n = t === i;
                    return (0, l.jsx)(
                      h.e,
                      {
                        initial: { opacity: c && n ? 1 : 0 },
                        animate: { opacity: +!!n },
                        transition: { duration: "1" },
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        children: (0, l.jsx)(F, {
                          card: e,
                          focusedCardIndex: i,
                          thisCardIndex: t,
                          handleNext: a,
                          handlePrev: r,
                          analytics: o,
                        }),
                      },
                      t,
                    );
                  }),
                t.length > 0 &&
                  t.map((e, t) =>
                    (0, l.jsx)(
                      h.e,
                      {
                        pointerEvents: "none",
                        visibility: "hidden",
                        minWidth: "100%",
                        height: "100%",
                        children: (0, l.jsx)(F, {
                          card: e,
                          analytics: o,
                          handleNext: d,
                          handlePrev: d,
                          focusedCardIndex: 0,
                          thisCardIndex: 0,
                        }),
                      },
                      t,
                    ),
                  ),
              ],
            })
          );
        };
      var G = i(23845),
        O = i(99034);
      let M = (e) => {
          let {
              cards: t,
              focusedCardIndex: i,
              handlePrev: a,
              handleNext: n,
              analytics: o,
            } = e,
            d = t.length,
            c = 100 * ((0, O.l)(!1) ? 5 / 6 : 4 / 6),
            u = (i / (d + 1)) * 100,
            x = (0, G.d)(0);
          return (0, l.jsx)(s.Flex, {
            flexDirection: "row",
            width: "".concat((d + 1) * c, "%"),
            transform: "translateX(-".concat(u, "%)"),
            transition: "transform 1s ease",
            "data-testid": "Carousel container",
            children:
              t.length > 0 &&
              t.concat([t[0]]).map((e, t) =>
                (0, l.jsxs)(
                  h.e,
                  {
                    width: "".concat(c, "%"),
                    paddingRight: [4, null, 6, null, 8],
                    drag: "x",
                    dragConstraints: { left: 0, right: 0 },
                    dragMomentum: !1,
                    onDragEnd: () => {
                      x.get() < -(0.01 * window.innerWidth) &&
                        (null == n || n()),
                        x.get() > 0.01 * window.innerWidth &&
                          0 !== i &&
                          (null == a || a());
                    },
                    style: { x },
                    children: [
                      (0, l.jsx)(r.Box, {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 2,
                        cursor: "grab",
                      }),
                      (0, l.jsx)(F, {
                        card: e,
                        focusedCardIndex: i,
                        thisCardIndex: t,
                        handleNext: n,
                        handlePrev: a,
                        analytics: o,
                      }),
                    ],
                  },
                  t,
                ),
              ),
          });
        },
        K = (e) => {
          var t, i;
          let {
              cmsProps: s,
              contextProps: o,
              autoChangeTimeMs: d,
              shuffleCallback: c,
            } = e,
            { items: u } = s,
            [h, g] = (0, n.useState)(0),
            p = null !== (t = s.type) && void 0 !== t ? t : "Sliding",
            m = (0, n.useMemo)(() => {
              var e;
              return null !== (e = null == c ? void 0 : c(u)) && void 0 !== e
                ? e
                : u;
            }, [u, c]),
            y = m.length,
            f = (0, n.useCallback)(() => g((e) => (e + 1) % y), [y]),
            v = (0, n.useCallback)(() => g((e) => (e - 1 + y) % y), [y]);
          (0, n.useEffect)(() => {
            let e = setTimeout(
              () => {
                f();
              },
              null != d ? d : 1e4,
            );
            return () => clearTimeout(e);
          }, [h]);
          let j = (0, n.useCallback)(
            (e) => {
              "left" === e ? v() : f();
            },
            [v, f],
          );
          return (0, l.jsxs)(r.Box, {
            width: "100%",
            position: "relative",
            role: "region",
            overflowX: "hidden",
            paddingX:
              "Fading" === s.type
                ? 0
                : null !== (i = o.marginX) && void 0 !== i
                  ? i
                  : 0,
            children: [
              s.title &&
                (0, l.jsx)(a.Text, {
                  textStyle: "heading.h7.bold",
                  paddingBottom: 6,
                  children: s.title,
                }),
              "Sliding" === p &&
                (0, l.jsx)(M, {
                  cards: m,
                  focusedCardIndex: h,
                  handleNext: f,
                  handlePrev: v,
                  analytics: o.analytics,
                }),
              "Fading" === p &&
                (0, l.jsx)(P, {
                  cards: m,
                  focusedCardIndex: h,
                  handleNext: f,
                  handlePrev: v,
                  analytics: o.analytics,
                }),
              m.length > 1 &&
                (0, l.jsx)(x, {
                  cards: m,
                  handleScrollButtonClick: j,
                  setCurrentIndex: g,
                  currentIndex: h,
                }),
            ],
          });
        };
    },
    49071: (e, t, i) => {
      i.d(t, { n: () => s });
      var l = i(94799),
        r = i(24689),
        a = i(82536),
        n = i(95785);
      let s = (e) => {
        var t, i;
        let { entry: s, onClick: o } = e,
          { isHaircareDecoded: d, isSkincareDecoded: c } = (0, a.A)(),
          u = s.careType === r.ch.SKINCARE,
          x = s.careType === r.ch.HAIRCARE,
          h = (u && !!c) || (x && !!d);
        return (0, l.jsx)(n.m, {
          imageSrc:
            null !==
              (t = (() => {
                var e, t;
                return h
                  ? null === (e = s.decodedImage) || void 0 === e
                    ? void 0
                    : e.url
                  : null === (t = s.defaultImage) || void 0 === t
                    ? void 0
                    : t.url;
              })()) && void 0 !== t
              ? t
              : "",
          ctaLabel:
            null !==
              (i = (() => {
                var e;
                return h
                  ? s.decodedLabel
                  : null !== (e = s.pluralLabel) && void 0 !== e
                    ? e
                    : s.label;
              })()) && void 0 !== i
              ? i
              : "",
          href: h ? s.decodedLink : s.defaultLink,
          onClick: o,
        });
      };
    },
    52547: (e, t, i) => {
      i.r(t), i.d(t, { CmsStandaloneCta: () => s });
      var l = i(94799),
        r = i(20381),
        a = i(93631),
        n = i(15231);
      let s = (e) => {
        let {
            cmsProps: { text: t, type: i, url: s },
          } = e,
          o = i ? (0, a.Y)(i) : void 0,
          d = (0, r.useBreakpointValue)({ base: !0, lg: !1 });
        return (0, l.jsx)(n.ButtonLink, {
          variant: o,
          href: null != s ? s : "",
          fullWidth: d,
          paddingX: 16,
          children: t,
        });
      };
    },
    55096: (e, t, i) => {
      i.d(t, { CmsContentListing: () => R });
      var l = i(94799),
        r = i(4306),
        a = i(89136),
        n = i(29392),
        s = i(20992),
        o = i(36008),
        d = i.n(o),
        c = i(92718),
        u = i(68052),
        x = i(96543),
        h = i(14339),
        g = i(82518),
        p = i(97001),
        m = i(38196),
        y = i(49606);
      let f = (e) => {
        let { title: t, subtitle: i, dataTestId: n } = e;
        return (0, l.jsxs)(m.Stack, {
          maxWidth: 120,
          gap: 2,
          children: [
            (0, l.jsx)(a.Text, {
              textStyle: "heading.h6.bold",
              "data-testid": "".concat(n, " title"),
              children: t,
            }),
            i &&
              (0, l.jsx)(r.Box, {
                textStyle: "body",
                "data-testid": "".concat(n, " subtitle"),
                children: (0, l.jsx)(y.CmsRichText, { richData: i }),
              }),
          ],
        });
      };
      var v = i(98814),
        j = i(39693),
        b = i(93869);
      let S = (e) => {
        let {
            backgroundImageSrc: t,
            linkRef: i,
            ariaLabel: a,
            dataTestId: s,
          } = e,
          o = (0, v.useStyleConfig)("DirectionalImageCard");
        return (0, l.jsx)(r.Box, {
          __css: o,
          backgroundImage: t,
          backgroundSize: "cover",
          backgroundPosition: "center",
          children: (0, l.jsx)(n.LinkBox, {
            "aria-label": a,
            as: d(),
            href: null != i ? i : "#",
            "data-testid": s,
            children: (0, l.jsx)(b.$, {
              size: ["sm", "sm", "sm", "lg"],
              variant: "primary",
              rightIcon: (0, l.jsx)(j.ArrowRightIcon, { width: 6, height: 6 }),
              "data-testid": "Shop all",
              children: "Shop all",
            }),
          }),
        });
      };
      var C = i(76074),
        I = i(67862),
        k = i(7566),
        _ = i(35510);
      let w = {
          Preferences: c.x.INGREDIENT_LIMITS,
          Brands: c.x.BRAND,
          Ingredients: c.x.ACTIVE_INGREDIENTS,
        },
        T = (e) => {
          let { content: t, analytics: i } = e,
            { title: n, description: s, items: o } = t,
            d = (0, x.mP)(
              o.map((e) => ({
                size: 8,
                filters: { [w[e.type]]: [e.filterId] },
                sortBy: [{ field: c.x.BDNA, order: u.K.DESCENDING }],
                bdnaScoreGT: 6,
                availabilityGT: 0,
              })),
            ),
            h = d.some((e) => e.isLoading || e.isPending),
            m = d.map((e) => {
              var t;
              return null === (t = e.data) || void 0 === t ? void 0 : t.results;
            }),
            y = m.some((e) => (null == e ? void 0 : e.length) && e.length > 0);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(f, {
                title: n,
                subtitle: s,
                "data-testid": (0, g.fX)(n),
              }),
              (0, l.jsx)(p.q, {
                contentHeight: 200,
                contentWidth: "100%",
                loading: h,
                children: y
                  ? o.map((e, t) => {
                      var s, o;
                      let d = m[t];
                      return (
                        d &&
                        d.length > 0 &&
                        (0, l.jsxs)(r.Box, {
                          display: "flex",
                          flexDirection: "column",
                          children: [
                            (0, l.jsx)(a.Text, {
                              textStyle: "heading.h6.bold",
                              children: e.title,
                            }),
                            (0, l.jsx)(I.E, {
                              productCards: d,
                              linkRef: e.linkRef,
                              linkAriaLabel: "View all ".concat(
                                e.title.toLowerCase(),
                                " products",
                              ),
                              analytics: {
                                ...i,
                                click_location: "list",
                                click_action_category: n,
                              },
                              children: (0, l.jsx)(S, {
                                backgroundImageSrc:
                                  null === (o = e.image) || void 0 === o
                                    ? void 0
                                    : null === (s = o.fields.file) ||
                                        void 0 === s
                                      ? void 0
                                      : s.url,
                                ariaLabel: "Shop all ".concat(
                                  e.title.toLowerCase(),
                                  " products",
                                ),
                                "data-testid": "Shop all ".concat(
                                  e.title.toLowerCase(),
                                  " products",
                                ),
                                linkRef: e.linkRef,
                              }),
                            }),
                          ],
                        })
                      );
                    })
                  : (0, l.jsx)(r.Box, {
                      paddingY: 11,
                      paddingX: { base: 10, md: 20 },
                      background: "primary.white",
                      borderRadius: "2xl",
                      textAlign: "center",
                      children:
                        "Sorry, we can’t match any products at the moment.",
                    }),
              }),
            ],
          });
        },
        E = (e) => {
          let { content: t } = e,
            { items: i, title: o, description: c } = t;
          return (0, l.jsx)(_.c, {
            title: (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(a.Text, {
                  title: "".concat(o.toLowerCase(), "-title"),
                  textStyle: "heading.h6.bold",
                  color: "primary.warmGrey.50",
                  children: o,
                }),
                c &&
                  (0, l.jsx)(r.Box, {
                    title: "".concat(o.toLowerCase(), "-description"),
                    textStyle: "body",
                    children: (0, l.jsx)(y.CmsRichText, { richData: c }),
                  }),
              ],
            }),
            contentData: i.map((e, t) => {
              var i;
              return {
                heading: e.coverTitle,
                description: (0, l.jsx)(y.CmsRichText, {
                  richData:
                    null !== (i = e.description) && void 0 !== i ? i : "",
                }),
                size: "wide",
                onClick: () => {},
                children: (0, l.jsx)(
                  n.LinkBox,
                  {
                    as: d(),
                    href: "/learn/".concat(e.slug),
                    children: (0, l.jsx)(s.default, {
                      src: "https://".concat(e.coverImgSrc),
                      alt: "View story",
                      width: 288,
                      height: 408,
                    }),
                  },
                  t,
                ),
              };
            }),
          });
        },
        L = (e) => {
          let { content: t } = e,
            { items: i, title: s } = t;
          return (0, l.jsxs)(r.Box, {
            display: "flex",
            flexDir: "column",
            gap: 6,
            children: [
              (0, l.jsx)(a.Text, {
                textStyle: "heading.h6.bold",
                color: "primary.warmGrey.50",
                children: s,
              }),
              (0, l.jsx)(C.P, {
                children:
                  null == i
                    ? void 0
                    : i.map((e, t) => {
                        var i;
                        return (0, l.jsx)(
                          n.LinkBox,
                          {
                            as: d(),
                            href: "/learn/".concat(e.slug),
                            children: (0, l.jsx)(
                              r.Box,
                              {
                                scrollSnapAlign: "start",
                                children: (0, l.jsx)(k.C, {
                                  title: null == e ? void 0 : e.coverTitle,
                                  description:
                                    null !==
                                      (i =
                                        null == e ? void 0 : e.description) &&
                                    void 0 !== i
                                      ? i
                                      : "",
                                  imageSrc: null == e ? void 0 : e.coverImgSrc,
                                  onClick: () => {},
                                }),
                              },
                              t,
                            ),
                          },
                          t,
                        );
                      }),
              }),
            ],
          });
        },
        R = (e) => {
          let { cmsProps: t, contextProps: i } = e;
          return ((e) => {
            switch (e) {
              case h.M.IMAGE_CARD:
                return (0, l.jsx)(T, { content: t, analytics: i.analytics });
              case h.M.VIDEO_CARD:
                return (0, l.jsx)(E, { content: t });
              case h.M.SMALL_STORY:
                return (0, l.jsx)(L, { content: t });
            }
          })(t.type);
        };
    },
    62495: (e, t, i) => {
      i.d(t, { H: () => l.SpotlightCard });
      var l = i(72429);
    },
    72429: (e, t, i) => {
      i.r(t), i.d(t, { SpotlightCard: () => c });
      var l = i(94799),
        r = i(31634),
        a = i(4306),
        n = i(87798),
        s = i(89136),
        o = i(15231);
      let d = {
          White: {
            bgColor: "primary.warmGrey.90",
            textColor: "primary.black.10",
          },
          Black: { bgColor: "primary.black.20", textColor: "primary.white" },
          Beige: {
            bgColor: "primary.warmGrey.80",
            textColor: "primary.black.10",
          },
        },
        c = (e) => {
          let {
              cmsProps: {
                color: t,
                tagText: i,
                description: c,
                ctaHref: u,
                ctaText: x,
                title: h,
                imageUrl: g,
              },
              inline: p,
              isCarousel: m = !1,
            } = e,
            { bgColor: y, textColor: f } = d[t];
          return (0, l.jsxs)(r.Flex, {
            borderRadius: "2xl",
            backgroundColor: y,
            overflow: "hidden",
            flexDirection: p || m ? "column" : { base: "column", lg: "row" },
            justifyContent: p || m ? { lg: "space-evenly" } : void 0,
            color: f,
            height: "100%",
            children: [
              (0, l.jsx)(a.Box, {
                width: "100%",
                position: "relative",
                flexShrink: 1,
                flexGrow: 1,
                height:
                  p && !m
                    ? void 0
                    : m
                      ? { base: 69, md: 64, lg: 60 }
                      : { base: 50, md: 64, lg: "unset" },
                children: (0, l.jsx)(n.Image, {
                  alt: "",
                  position: "absolute",
                  src: g,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  overflow: "hidden",
                }),
              }),
              (0, l.jsxs)(r.Flex, {
                padding: 6,
                flexDirection: "column",
                gap: 4,
                width: "100%",
                maxHeight: "fit-content",
                height: "fit-content",
                children: [
                  i && (0, l.jsx)(s.Text, { textStyle: "label", children: i }),
                  h &&
                    (0, l.jsx)(s.Text, {
                      as: "h5",
                      textStyle: "display.d2",
                      children: h,
                    }),
                  c && (0, l.jsx)(s.Text, { textStyle: "label", children: c }),
                  u &&
                    (0, l.jsx)(o.ButtonLink, {
                      href: u,
                      variant: "secondary",
                      width: "fit-content",
                      marginTop: 2,
                      color: f,
                      children: x,
                    }),
                ],
              }),
            ],
          });
        };
    },
    72848: (e, t, i) => {
      i.d(t, { K: () => l.CmsCuratedList });
      var l = i(13513);
    },
    93631: (e, t, i) => {
      i.d(t, { Y: () => r });
      let l = {
          "Primary Button": "primary",
          "Primary Button (Light)": "primaryLight",
          "Secondary Button": "secondary",
          "Secondary Button (Light)": "secondaryLight",
          Link: "tertiary",
          "Link (Light)": "tertiaryLight",
          "BDNA Fill": "bdnaFill",
          "BDNA Outline": "bdnaOutline",
          "BDNA Link": "bdnaTertiary",
        },
        r = (e) => (e ? l[e] : void 0);
    },
    94502: (e, t, i) => {
      i.r(t), i.d(t, { CtaBanner: () => f });
      var l = i(94799),
        r = i(4306),
        a = i(31634),
        n = i(89136),
        s = i(42538),
        o = i(65218),
        d = i(65329),
        c = i(53738),
        u = i(34023),
        x = i(57948),
        h = i(82518);
      let g = (e) =>
        e
          .split(/\\u2028|\\n/)
          .map((e) =>
            (0, l.jsxs)(
              "span",
              { children: [e, (0, l.jsx)("br", {})] },
              (0, h.fw)(e),
            ),
          );
      var p = i(15231),
        m = i(43137),
        y = i(8316);
      let f = (e) => {
        let {
            cmsProps: {
              image: t,
              lgPlusImage: i,
              title: h,
              cta: f,
              stickyCta: v,
              trustPilotWidget: j,
            },
            noBorderRadius: b,
          } = e,
          S = (0, x.l)(!1),
          C = (0, u.useRef)(null),
          { scrollYProgress: I } = (0, s.L)({
            target: C,
            offset: ["start start", "end start"],
          }),
          [k, _] = (0, u.useState)(!1);
        (0, o.L)(I, "change", (e) => {
          e >= 1 ? _(!0) : _(!1);
        });
        let w = () => {
          var e;
          return (0, l.jsx)(r.Box, {
            width: { base: "100%", lg: 80 },
            children: (0, l.jsx)(p.ButtonLink, {
              height: 16,
              variant: "primary",
              fullWidth: !0,
              href:
                null !== (e = null == f ? void 0 : f.url) && void 0 !== e
                  ? e
                  : "",
              children: null == f ? void 0 : f.text,
            }),
          });
        };
        return (0, l.jsxs)(a.Flex, {
          ref: C,
          flexDir: "column",
          justifyContent: "space-between",
          width: "100%",
          height: { base: 100 },
          paddingX: { base: 4, md: 8, lg: 10, "2xl": 16 },
          paddingY: { base: 6, lg: 10, "2xl": 16 },
          bgImage: {
            base: null == t ? void 0 : t.url,
            lg: null == i ? void 0 : i.url,
          },
          bgPosition: "center",
          bgRepeat: "no-repeat",
          bgSize: "cover",
          borderRadius: b ? 0 : "2xl",
          children: [
            (0, l.jsxs)(a.Flex, {
              justifyContent: "flex-start",
              direction: "column",
              gap: { base: 4, lg: 6 },
              children: [
                j && (0, l.jsx)(y.f, {}),
                (0, l.jsx)(n.Text, {
                  color: "primary.black.10",
                  textStyle: "heading.h4",
                  children: g(h),
                }),
              ],
            }),
            (0, l.jsx)(w, {}),
            v &&
              (0, l.jsx)(c.N, {
                children:
                  S &&
                  k &&
                  (0, l.jsx)(
                    () =>
                      (0, l.jsx)(m.k, {
                        children: (0, l.jsx)(r.Box, {
                          as: d.P.div,
                          width: { base: "100%", lg: 80 },
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          children: (0, l.jsx)(w, {}),
                        }),
                      }),
                    {},
                  ),
              }),
          ],
        });
      };
    },
    95785: (e, t, i) => {
      i.d(t, { m: () => d });
      var l = i(94799),
        r = i(31634),
        a = i(36008),
        n = i.n(a),
        s = i(39693),
        o = i(93869);
      let d = (e) => {
        let {
          imageSrc: t,
          ctaLabel: i,
          href: a,
          onMouseEnter: d,
          onClick: c,
        } = e;
        return (0, l.jsx)(r.Flex, {
          as: a ? n() : "button",
          backgroundImage: t,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",
          minHeight: 30,
          borderRadius: "2xl",
          padding: 4,
          alignItems: "flex-end",
          onMouseEnter: d,
          onClick: c,
          ...(a ? { href: a } : {}),
          children: (0, l.jsxs)(o.$, {
            as: "span",
            variant: "primaryLight",
            size: "sm",
            children: [
              i,
              (0, l.jsx)(s.ArrowRightIcon, { width: 6, height: 6 }),
            ],
          }),
        });
      };
    },
  },
]);
