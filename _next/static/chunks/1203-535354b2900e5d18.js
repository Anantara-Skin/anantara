"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1203],
  {
    2791: (e, t, r) => {
      r.d(t, { $w: () => n, In: () => i, MS: () => a, oe: () => s });
      let a = "66cda2be99801c33b2f244c6",
        i = "en-GB",
        n = "https://uk.trustpilot.com/review/noli.com";
      var s = (function (e) {
        return (
          (e.SLIDER = "54ad5defc6454f065c28af8b"),
          (e.MICRO_TRUST_STAR = "5419b732fbfb950b10de65e5"),
          e
        );
      })({});
    },
    16012: (e, t, r) => {
      r.d(t, { H: () => n });
      var a = r(65795);
      let i = {
          [a.f.FINE_LINES_WRINKLES]: {
            coverImageSrc:
              "/images/landing/1-FocusAreaCarouselFinelines&Wrinkles.webp",
            title: "Renew at any age",
          },
          [a.f.DRYNESS_DEHYDRATION]: {
            coverImageSrc:
              "/images/landing/2-FocusAreaCarouselDryness&Dehydration.webp",
            title: "Hydrate thirsty skin",
          },
          [a.f.BLEMISH_PRONE_SKIN]: {
            coverImageSrc:
              "/images/landing/3-FocusAreaCarouselBlemish-proneSkin.webp",
            title: "Say bye to breakouts",
          },
          [a.f.DARK_CIRCLES_PUFFINESS]: {
            coverImageSrc:
              "/images/landing/4-FocusAreaCarouselDarkCircles&Puffiness.webp",
            title: "Hide those late nights",
          },
          [a.f.PORES_AND_BLACKHEADS]: {
            coverImageSrc:
              "/images/landing/5-FocusAreaCarouselPores&Blackheads.webp",
            title: "Blur those pores",
          },
          [a.f.UNEVEN_SKIN_TONE_AND_TEXTURE]: {
            coverImageSrc:
              "/images/landing/6-FocusAreaCarouselUnevenSkinTone&Texture.webp",
            title: "Get through a rough patch",
          },
          [a.f.DULLNESS]: {
            coverImageSrc: "/images/landing/7-FocusAreaCarouselDullness.webp",
            title: "Get your glow",
          },
          [a.f.HYPERPIGMENTATION]: {
            coverImageSrc:
              "/images/landing/8-FocusAreaCarouselHyperpigmentation.webp",
            title: "Leave unwanted marks behind",
          },
          [a.f.REDNESS]: {
            coverImageSrc: "/images/landing/9-FocusAreaCarouselRedness.webp",
            title: "Reduce your rosy hues",
          },
          [a.f.OILINESS]: {
            coverImageSrc: "/images/landing/10-FocusAreaCarouselOiliness.webp",
            title: "Ease end-of-day oiliness",
          },
          [a.f.LACK_OF_FIRMNESS]: {
            coverImageSrc:
              "/images/landing/11-FocusAreaCarouselLackOfFirmness.webp",
            title: "Bring back the bounce",
          },
        },
        n = {
          type: "NavigationImageCard",
          items: a.O.map((e) => {
            let { label: t, slug: r, id: a } = e;
            return {
              coverImgSrc: i[a].coverImageSrc,
              tag: t,
              title: i[a].title,
              ctaText: "Shop now",
              ctaHref: "/focus-area/shop/".concat(r),
              ctaAriaLabel: "Shop products for ".concat(t),
            };
          }),
        };
    },
    17628: (e, t, r) => {
      r.d(t, { G: () => l });
      var a = r(94799),
        i = r(35108),
        n = r(13965),
        s = r(21404);
      let l = (e) => {
        var t;
        return (0, a.jsx)(s.r, {
          title: null !== (t = e.title) && void 0 !== t ? t : "Shop by routine",
          ...e,
          children: i.T.map((t) => {
            var r;
            let { label: i, slug: s, number: l, imageSrc: o } = t;
            return (
              !(null === (r = e.keysToExclude) || void 0 === r
                ? void 0
                : r.includes(s)) &&
              (0, a.jsx)(
                n.B,
                {
                  variant: "routine",
                  title: i,
                  stepNumber: l,
                  linkDestination: "/step/shop/".concat(s),
                  imageSrc: o,
                  analytics: {
                    click_location: "steps",
                    click_name: i,
                    click_subcategory_1: "Step ".concat(l),
                  },
                  expandToFill: e.expandToFill,
                },
                i,
              )
            );
          }),
        });
      };
    },
    23213: (e, t, r) => {
      r.d(t, { K: () => s });
      var a = r(15430),
        i = r.n(a);
      let n = (e) => e.map((e) => (null === e ? null : -e)),
        s = (e) => {
          let t = {};
          if (e) {
            let r = i()(e) ? n(e) : -e;
            t = {
              marginLeft: r,
              paddingLeft: e,
              marginRight: r,
              paddingRight: e,
            };
          }
          return t;
        };
    },
    32422: (e, t, r) => {
      r.d(t, { i: () => i, s: () => a });
      var a = (function (e) {
        return (
          (e.BANNER_MATCH_SCORE = "BannerMatchScore"),
          (e.BANNER_SUPER_SET = "BannerSuperSet"),
          (e.NAVIGATION_CARDS_FOCUS_AREA = "FocusAreaNavigationCards"),
          (e.NAVIGATION_CARDS_PRODUCT_TYPE = "ProductTypeNavigationCards"),
          (e.NAVIGATION_CARDS_ROUTINE_STEP = "RoutineStepNavigationCards"),
          (e.PERSONALISED_LISTS = "PersonalisedList"),
          (e.PERSONALISED_LISTS_POOL_1 = "PersonalisedListPool1"),
          (e.PERSONALISED_LISTS_POOL_2 = "PersonalisedListPool2"),
          (e.RECENTLY_VIEWED = "RecentlyViewed"),
          (e.HOW_IT_WORKS = "HowItWorks"),
          (e.KEYLINE = "Keyline"),
          (e.SENTENCE_SEARCH = "SentenceSearch"),
          (e.LANDING_HOW_IT_WORKS = "LandingHowItWorks"),
          (e.ROUTINE_TESTIMONIAL = "RoutineTestimonial"),
          (e.LANDING_WHY_NOLI = "LandingWhyNoli"),
          (e.PROMOTIONAL_CONTENT = "PromotionalContent"),
          (e.OUR_BRANDS = "OurBrands"),
          (e.SKINCARE_BRANDS = "SkincareBrands"),
          (e.HAIRCARE_BRANDS = "HaircareBrands"),
          (e.MATCH_SCORE_TESTIMONIAL = "MatchScoreTestimonial"),
          (e.MATCH_SCORE_HOW_IT_WORKS = "MatchScoreHowItWorks"),
          (e.SLIDER_TRUST_PILOT = "SliderTrustPilot"),
          (e.MARKETING_CONSENT_FORM = "MarketingConsentForm"),
          (e.PERSONALISED_GREETING = "PersonalisedGreeting"),
          (e.TABBED_BRANDS = "TabbedBrands"),
          e
        );
      })({});
      let i = (e) => ({
        name: e.fields.name,
        componentId: e.fields.componentId,
      });
    },
    34371: (e, t, r) => {
      r.d(t, { G: () => h });
      var a = r(94799),
        i = r(98814),
        n = r(31634),
        s = r(87798),
        l = r(4306),
        o = r(89136),
        c = r(60968),
        d = r(55272),
        u = r(4099);
      let h = (e) => {
        let { imgSrc: t, title: r, text: h, variant: g } = e,
          p = (0, i.useMultiStyleConfig)("StaticContentCard", { variant: g });
        return "vertical" === g
          ? (0, a.jsxs)(
              n.Flex,
              {
                flexDirection: "row",
                maxWidth: "100%",
                borderRadius: "8px",
                padding: 4,
                backgroundColor: "#fff",
                alignItems: "center",
                width: { base: "100%" },
                children: [
                  (0, a.jsx)(s.Image, {
                    src: t,
                    alt: "",
                    width: "62px",
                    objectFit: "cover",
                    marginRight: 4,
                  }),
                  (0, a.jsxs)(l.Box, {
                    children: [
                      (0, a.jsx)(o.Text, {
                        marginBottom: 2,
                        textAlign: "left",
                        fontSize: "14px",
                        fontWeight: "600",
                        children: r,
                      }),
                      (0, a.jsx)(o.Text, {
                        fontSize: "12px",
                        textAlign: "left",
                        children: h,
                      }),
                    ],
                  }),
                ],
              },
              r,
            )
          : (0, a.jsxs)(c.Card, {
              __css: p.container,
              "data-testid": r,
              "aria-label": r,
              children: [
                (0, a.jsx)(d.CardHeader, {
                  __css: p.cardHeader,
                  children: (0, a.jsx)(s.Image, {
                    src: t,
                    alt: r,
                    objectFit: "cover",
                  }),
                }),
                (0, a.jsxs)(u.CardBody, {
                  __css: p.cardBody,
                  children: [
                    (0, a.jsx)(l.Box, {
                      __css: p.title,
                      children: (0, a.jsx)(o.Text, { children: r }),
                    }),
                    (0, a.jsx)(l.Box, {
                      __css: p.text,
                      children: (0, a.jsx)(o.Text, {
                        "aria-label": h,
                        children: h,
                      }),
                    }),
                  ],
                }),
              ],
            });
      };
    },
    35108: (e, t, r) => {
      r.d(t, { T: () => i });
      var a = (function (e) {
        return (
          (e.Cleanse = "cleanse"),
          (e.Prepare = "prepare"),
          (e.Treat = "treat"),
          (e.Moisturise = "moisturise"),
          (e.Protect = "protect"),
          e
        );
      })(a || {});
      let i = [
        {
          number: 1,
          label: "Cleanse",
          id: "cleanse",
          slug: "cleanse",
          color: "green",
          imageSrc: "/images/routineSteps/cleanse.png",
          productTypes: [
            { label: "Cleansers", id: "cleansers", slug: "cleansers" },
            {
              label: "Exfoliators & Scrubs",
              id: "exfoliatorsandscrubs",
              slug: "exfoliators---scrubs",
            },
            {
              label: "Makeup Removers",
              id: "makeupremovers",
              slug: "makeup-removers",
            },
            {
              label: "Micellar Waters",
              id: "micellarwaters",
              slug: "micellar-waters",
            },
          ],
        },
        {
          number: 2,
          label: "Prepare",
          id: "prepare",
          color: "yellow",
          slug: "prepare",
          imageSrc: "/images/routineSteps/prepare.png",
          productTypes: [
            {
              label: "Toners & Mists",
              id: "tonersandmists",
              slug: "toners---mists",
            },
          ],
        },
        {
          number: 3,
          label: "Treat",
          id: "treat",
          color: "blue",
          slug: "treat",
          imageSrc: "/images/routineSteps/treat.png",
          productTypes: [
            { label: "Serums", id: "serums", slug: "serums" },
            { label: "Masks", id: "masks", slug: "masks" },
            { label: "Eye Care", id: "eyecare", slug: "eye-care" },
            { label: "Lip Care", id: "lipcare", slug: "lip-care" },
            { label: "Oils", id: "oils", slug: "oils" },
          ],
        },
        {
          number: 4,
          label: "Moisturise",
          id: "moisturise",
          color: "pink",
          slug: "moisturise",
          imageSrc: "/images/routineSteps/moisturise.png",
          productTypes: [
            {
              label: "Creams & Lotions",
              id: "creamsandlotions",
              slug: "creams---lotions",
            },
            { label: "Balms", id: "balms", slug: "balms" },
          ],
        },
        {
          number: 5,
          label: "Protect",
          color: "brown",
          id: "protect",
          slug: "protect",
          imageSrc: "/images/routineSteps/protect.png",
          productTypes: [
            {
              label: "Sun Protection",
              id: "sunprotection",
              slug: "sun-protection",
            },
          ],
        },
      ];
    },
    44193: (e, t, r) => {
      r.d(t, { y: () => x });
      var a = r(94799),
        i = r(98814),
        n = r(4306),
        s = r(38196),
        l = r(31634),
        o = r(89136),
        c = r(53738),
        d = r(34023),
        u = r(39693),
        h = r(15231),
        g = r(26408),
        p = r(68099);
      let m = (e) =>
          "linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 0.01%, rgba(102, 102, 102, 0.00) 100%), url(".concat(
            e,
            ")",
          ),
        x = (e) => {
          let {
              size: t = "sm",
              title: r,
              tag: x,
              variant: S = "base",
              imgSrc: b,
              CTA: y,
              routineTag: T,
              animateHover: v = !1,
            } = e,
            f = (0, i.useMultiStyleConfig)("NavigationImageCard", { size: t }),
            I = !!y,
            [_, j] = (0, d.useState)(!1);
          (0, d.useEffect)(() => {
            j(I && !v);
          }, [v, I]);
          let R = "active" === S;
          return (0, a.jsx)(n.Box, {
            __css: f.card,
            backgroundImage: b && m(b),
            ...(v && { onMouseEnter: () => j(!0), onMouseLeave: () => j(!1) }),
            children: (0, a.jsxs)(s.Stack, {
              pos: "relative",
              height: "100%",
              width: "100%",
              justifyContent: "flex-end",
              children: [
                T &&
                  (0, a.jsx)(n.Box, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    children: (0, a.jsx)(p.e, {
                      colorScheme: T.colorScheme,
                      children: T.label,
                    }),
                  }),
                (0, a.jsxs)(g.e, {
                  __css: f.textContainer,
                  layout: !0,
                  transition: { layout: { ease: "linear", duration: 0.2 } },
                  children: [
                    (0, a.jsxs)(l.Flex, {
                      gap: 2,
                      children: [
                        T &&
                          (0, a.jsx)(u.LotionBottleIcon, {
                            width: 6,
                            height: 6,
                          }),
                        (0, a.jsx)(o.Text, {
                          userSelect: "none",
                          opacity: 0.8,
                          textStyle: "body.semibold",
                          children: x,
                        }),
                      ],
                    }),
                    (0, a.jsx)(o.Text, {
                      userSelect: "none",
                      textStyle:
                        "carousel" === S ? "heading.h5.bold" : "display.h4",
                      children: r,
                    }),
                  ],
                }),
                (0, a.jsx)(c.N, {
                  mode: "popLayout",
                  children:
                    _ &&
                    (0, a.jsx)(g.e, {
                      __css: f.ctaContainer,
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: {
                        opacity: { ease: "linear", duration: 0.2 },
                      },
                      children:
                        y &&
                        (0, a.jsx)(h.ButtonLink, {
                          href: y.href,
                          variant: R ? "secondaryLight" : "primaryLight",
                          "aria-label": y.ariaLabel,
                          target: y.target,
                          rightIcon: R
                            ? (0, a.jsx)(u.NotesIcon, { width: 6, height: 6 })
                            : void 0,
                          children: y.label,
                        }),
                    }),
                }),
              ],
            }),
          });
        };
    },
    46252: (e, t, r) => {
      r.d(t, { u: () => d });
      var a = r(94799),
        i = r(4306),
        n = r(89136),
        s = r(87798),
        l = r(24721),
        o = r(44193),
        c = r(76074);
      let d = (e) => {
        let { content: t, variant: r, expandXScrollWidth: d } = e,
          { items: u, type: h, heading: g } = t;
        return (0, a.jsxs)(i.Box, {
          display: "flex",
          flexDir: "column",
          gap: 6,
          children: [
            g &&
              (0, a.jsx)(n.Text, { textStyle: "heading.h6.bold", children: g }),
            (0, a.jsx)(c.P, {
              columnGap: "spaced" === r ? 8 : void 0,
              expandXScrollWidth: d,
              children: u.map((e, t) =>
                (0, a.jsx)(
                  i.Box,
                  {
                    scrollSnapAlign: "start",
                    children: (0, a.jsx)(i.Box, {
                      width: "cta" === r ? 80 : 72,
                      height: "cta" === r ? 100 : "auto",
                      flexShrink: 0,
                      textAlign: "left",
                      borderRadius: 8,
                      children: (0, a.jsxs)(i.Box, {
                        marginBottom: 0,
                        position: "relative",
                        height: "100%",
                        borderRadius: 8,
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        children: [
                          "NavigationImageCard" === h &&
                            (0, a.jsx)(o.y, {
                              size: "lg",
                              title: e.title,
                              tag: e.tag,
                              imgSrc: e.coverImgSrc,
                              CTA:
                                e.ctaHref && e.ctaText
                                  ? {
                                      label: e.ctaText,
                                      href: e.ctaHref,
                                      ariaLabel: e.ctaHref,
                                    }
                                  : void 0,
                              variant: "cta" === r ? "carousel" : "base",
                              animateHover: (0, l.G)(),
                            }),
                          "Image" === h &&
                            (0, a.jsx)(s.Image, {
                              src: e.coverImgSrc,
                              alt: "Story Image",
                              borderRadius: "lg",
                              marginBottom: 3,
                            }),
                        ],
                      }),
                    }),
                  },
                  t,
                ),
              ),
            }),
          ],
        });
      };
    },
    68052: (e, t, r) => {
      r.d(t, { K: () => s, l: () => l });
      var a = r(94799),
        i = r(92718),
        n = r(39693),
        s = (function (e) {
          return (e.ASCENDING = "asc"), (e.DESCENDING = "desc"), e;
        })({});
      let l = {
        relevance: {
          label: "Relevance",
          sortBy: { field: i.x.RELEVANCE, order: "desc" },
          variant: "buttonGroup",
        },
        bdna: {
          label: "Match Score",
          sortBy: { field: i.x.BDNA, order: "desc" },
          variant: "bdna",
          icon: (0, a.jsx)(n.BDNASparkleIcon, {
            width: 6,
            height: 6,
            color: "white",
          }),
        },
        priceLowToHigh: {
          label: "Price (low-high)",
          sortBy: { field: i.x.PRICE, order: "asc" },
          variant: "buttonGroup",
        },
        priceHighToLow: {
          label: "Price (high-low)",
          sortBy: { field: i.x.PRICE, order: "desc" },
          variant: "buttonGroup",
        },
      };
    },
    71203: (e, t, r) => {
      r.d(t, { NonConfigurableCmsComponent: () => e$ });
      var a = r(94799),
        i = r(4306),
        n = r(38196),
        s = r(89136),
        l = r(27357),
        o = r(34023),
        c = r(24689),
        d = r(92718),
        u = r(15118),
        h = r(50969),
        g = r(16012),
        p = r(67582);
      let m = {
          [p.f.CLEAR_SCALP]: {
            coverImageSrc: "/images/landing/haircare/FocusArea_ClearScalp.webp",
            title: "Soothe discomfort",
          },
          [p.f.COLOUR_RADIANCE]: {
            coverImageSrc: "/images/landing/haircare/FocusArea_Color.webp",
            title: "Preserve vibrant hues",
          },
          [p.f.CURL_CARE]: {
            coverImageSrc: "/images/landing/haircare/FocusArea_CurlCare.webp",
            title: "Enhance natural curls",
          },
          [p.f.TANGLING]: {
            coverImageSrc: "/images/landing/haircare/FocusArea_Detangle.webp",
            title: "Ease tangles & knots",
          },
          [p.f.FRIZZ_CONTROL]: {
            coverImageSrc: "/images/landing/haircare/FocusArea_Frizz.webp",
            title: "Smooth out frizz",
          },
          [p.f.OIL_CONTROL]: {
            coverImageSrc: "/images/landing/haircare/FocusArea_OilControl.webp",
            title: "Reduce greasy roots",
          },
          [p.f.REPAIR_PROTECT]: {
            coverImageSrc:
              "/images/landing/haircare/FocusArea_RepairProtect.webp",
            title: "Restore hydration",
          },
          [p.f.SHINE]: {
            coverImageSrc: "/images/landing/haircare/FocusArea_Shine.webp",
            title: "Get your hair glowing",
          },
          [p.f.THINNING_LOSS]: {
            coverImageSrc:
              "/images/landing/haircare/FocusArea_ThinningLoss.webp",
            title: "Restore hair growth",
          },
          [p.f.VOLUME]: {
            coverImageSrc: "/images/landing/haircare/FocusArea_Volume.webp",
            title: "Boost volume & bounce",
          },
        },
        x = {
          type: "NavigationImageCard",
          items: p.O.map((e) => {
            let { label: t, slug: r, id: a } = e;
            return {
              coverImgSrc: m[a].coverImageSrc,
              tag: t,
              title: m[a].title,
              ctaText: "Shop now",
              ctaHref: "/haircare/focus-area/shop/".concat(r),
              ctaAriaLabel: "Shop products for ".concat(t),
            };
          }),
        };
      var S = r(65795),
        b = r(35108),
        y = r(68052),
        T = r(95128);
      class v {
        setKey(e) {
          return (this.PersonalisedList.key = e), this;
        }
        setType(e) {
          return (this.PersonalisedList.type = e), this;
        }
        setTitle(e, t) {
          return (
            (this.PersonalisedList.title = (0, a.jsx)(T.a, {
              firstTitleText: e,
              secondTitleText: t.toLocaleLowerCase(),
              colorScheme: "light",
            })),
            this
          );
        }
        setSeeAllPath(e) {
          return (this.PersonalisedList.seeAllPath = e), this;
        }
        setQuery(e) {
          return (this.PersonalisedList.query = e), this;
        }
        setContentQuery(e) {
          return (this.PersonalisedList.contentQuery = e), this;
        }
        setAnalytics(e, t) {
          return (
            (this.PersonalisedList.analytics = {
              click_action_category: e,
              click_subcategory_1: t,
            }),
            this
          );
        }
        build() {
          return this.PersonalisedList;
        }
        constructor() {
          this.PersonalisedList = {};
        }
      }
      var f = (function (e) {
        return (
          (e.PRODUCT_TYPE = "productType"),
          (e.SKIN_CONCERN = "skinConcern"),
          (e.BRAND = "brand"),
          (e.OFFER = "offer"),
          e
        );
      })({});
      let I = (e, t) => ({
          size: t,
          sortBy: [{ field: d.x.BDNA, order: y.K.DESCENDING }],
          bdnaScoreGT: e ? 0 : void 0,
          availabilityGT: 0,
        }),
        _ = (e, t) => {
          let r = new URLSearchParams();
          return (
            r.append("productType", t),
            "/step/shop/".concat(e, "?").concat(r.toString())
          );
        },
        j = (e) => "/focus-area/shop/".concat(e.toString()),
        R = (e) => {
          let { listLength: t, hasBdna: r } = e;
          return b.T.map((e) =>
            e.productTypes.map((t) => {
              let { id: r, label: a } = t;
              return { id: r, label: a, stepSlug: e.slug };
            }),
          )
            .flat()
            .map((e) => {
              let { id: a, label: i, stepSlug: n } = e,
                s = { [d.x.PRODUCT_TYPE]: [a] };
              return new v()
                .setKey("".concat(a, "-", "productType"))
                .setType("productType")
                .setTitle("Top ".concat(r ? "matches for " : ""), i)
                .setSeeAllPath(_(n, a))
                .setContentQuery({
                  filters: { productType: [i] },
                  colors: ["Beeswax", "Rose"],
                  pageSize: 10,
                })
                .setQuery({ ...I(r, t), filters: s })
                .setAnalytics("product type", a)
                .build();
            });
        },
        E = (e) => {
          let { listLength: t, hasBdna: r, skinConcerns: a = [] } = e;
          return S.O.map((e) => ({ slug: e.slug, label: e.label, key: e.id }))
            .filter((e) => a.includes(e.key))
            .map((e) => {
              let { label: a, slug: i, key: n } = e,
                s = { [d.x.SKIN_CONCERN]: [n] };
              return new v()
                .setKey("".concat(n, "-", "skinConcern"))
                .setType("skinConcern")
                .setTitle("Top ".concat(r ? "matches for " : ""), a)
                .setSeeAllPath(j(i))
                .setQuery({ ...I(r, t), filters: s })
                .setAnalytics("skin concern", n)
                .build();
            });
        },
        C = (e) => {
          let { brands: t, listLength: r, hasBdna: a } = e;
          return t.map((e) => {
            let { label: t, slug: i } = e,
              n = { [d.x.BRAND]: [i] };
            return new v()
              .setKey("".concat(i, "-", "brand"))
              .setType("brand")
              .setTitle("Top ".concat(a ? "matches for " : ""), t)
              .setSeeAllPath("/brand/shop/".concat(i))
              .setQuery({ ...I(a, r), filters: n })
              .setAnalytics("brand", i)
              .build();
          });
        },
        A = (e) => {
          let { listLength: t, hasBdna: r } = e;
          return [
            new v()
              .setKey("offer")
              .setType("offer")
              .setTitle("Top ".concat(r ? "matches for " : ""), "offers")
              .setSeeAllPath("/offers")
              .setQuery({ ...I(r, t), hasDiscount: !0 })
              .setAnalytics("offer", "offer")
              .build(),
          ];
        },
        N = (e) => [...E(e), ...R(e), ...C(e), ...A(e)];
      var w = r(22387),
        k = r(31634),
        L = r(34371);
      let O = (e) => [
          {
            title:
              e === c.ch.HAIRCARE
                ? "1. Diagnose your hair"
                : "1. Diagnose your skin",
            description:
              e === c.ch.HAIRCARE
                ? "Complete our haircare quiz, designed with experts to learn what your hair needs"
                : "Analyse your skin with our patented face scan, trained on over 10,000 images",
            coverImgSrc:
              e === c.ch.HAIRCARE
                ? "/images/landing/1-Haircare-Diagnose.png"
                : "/images/landing/1-Diagnose.png",
          },
          {
            title: "2. Personalise your routine",
            description:
              e === c.ch.HAIRCARE
                ? "Discover the most compatible products for your hair and goals"
                : "Discover the most compatible products for your skin and goals",
            coverImgSrc: "/images/landing/2-Personalise.png",
          },
          {
            title: "3. Shop and save",
            description:
              "Unlock discounts when you buy 2+ items from your personal routine",
            coverImgSrc: "/images/landing/3-Save.png",
          },
        ],
        P = (e) => {
          let { productType: t } = e,
            r = O(t);
          return (0, a.jsxs)(w.VStack, {
            gap: 6,
            alignItems: "flex-start",
            children: [
              (0, a.jsx)(s.Text, {
                textStyle: "heading.h6.bold",
                children: "How it works",
              }),
              (0, a.jsx)(k.Flex, {
                gap: 3,
                flexWrap: { base: "wrap", lg: "nowrap" },
                width: "100%",
                children: r.map((e) =>
                  (0, a.jsx)(
                    L.G,
                    {
                      title: e.title,
                      text: e.description,
                      imgSrc: e.coverImgSrc,
                      variant: "vertical",
                    },
                    e.title,
                  ),
                ),
              }),
            ],
          });
        };
      var B = r(98814);
      let D = (e) => {
        let { icon: t, title: r, body: n, variant: l = "default" } = e,
          o = (0, B.useMultiStyleConfig)("IconCard", { variant: l });
        return (0, a.jsxs)(i.Box, {
          __css: o.card,
          children: [
            (0, a.jsx)(i.Box, { __css: o.iconContainer, children: t }),
            (0, a.jsxs)(i.Box, {
              __css: o.textContainer,
              children: [
                (0, a.jsx)(s.Text, {
                  textStyle: "heading.h7.bold",
                  children: r,
                }),
                (0, a.jsx)(s.Text, { textStyle: "body", children: n }),
              ],
            }),
          ],
        });
      };
      var F = r(39693),
        H = r(97610),
        G = r(23213);
      let M = (e) => [
          {
            icon: (0, a.jsx)(F.ScienceIcon, { width: 16, height: 16 }),
            title: "We believe in science over sponsorship",
            body:
              e === c.ch.HAIRCARE
                ? "We use the latest haircare technology and research to impartially recommend the right product for you"
                : "We use the latest skincare technology and research to impartially recommend the right product for you",
          },
          {
            icon: (0, a.jsx)(F.RoutineIcon, { width: 16, height: 16 }),
            title: "We only recommend beauty brands you already trust",
            body: "Our routines are carefully curated with the best science-backed brands that are loved by millions of customers",
          },
          {
            icon: (0, a.jsx)(H.b, { width: 16, height: 16 }),
            title: "We put our money where our mouth is",
            body: "Don’t love a product we’ve recommended? We’ll give you a full refund – even after you’ve opened it",
          },
        ],
        W = (e) => {
          let { expandXScrollWidth: t, productType: r } = e,
            n = M(r);
          return (0, a.jsxs)(k.Flex, {
            flexDir: "column",
            gap: 6,
            width: "100%",
            children: [
              (0, a.jsx)(s.Text, {
                textStyle: "heading.h6.bold",
                children: "Why Noli?",
              }),
              (0, a.jsx)(k.Flex, {
                gap: 4,
                overflowX: "auto",
                paddingBottom: 4,
                ...(0, G.K)(t),
                children: n.map((e) =>
                  (0, a.jsx)(
                    i.Box,
                    {
                      minWidth: 72,
                      children: (0, a.jsx)(D, {
                        icon: e.icon,
                        title: e.title,
                        body: e.body,
                        variant: "purple",
                      }),
                    },
                    e.title,
                  ),
                ),
              }),
            ],
          });
        },
        K = [
          {
            title: "1. Diagnose your skin",
            description:
              "Analyse your skin with our patented face scan, trained on over 10,000 images",
            coverImgSrc: "/images/landing/1-Diagnose.png",
          },
          {
            title: "2. Explore your match scores",
            description:
              "All 400+ products are given a match score out of 10, unique to you",
            coverImgSrc: "/images/landing/2-MatchScores.png",
          },
          {
            title: "3. Shop with confidence",
            description:
              "Understand why products are scored high and low as you shop",
            coverImgSrc: "/images/landing/3-Explainability.png",
          },
        ],
        U = () =>
          (0, a.jsxs)(w.VStack, {
            gap: 6,
            alignItems: "flex-start",
            children: [
              (0, a.jsx)(s.Text, {
                textStyle: "heading.h6.bold",
                children: "How it works",
              }),
              (0, a.jsx)(k.Flex, {
                gap: 3,
                flexWrap: { base: "wrap", lg: "nowrap" },
                width: "100%",
                children: K.map((e) =>
                  (0, a.jsx)(
                    L.G,
                    {
                      title: e.title,
                      text: e.description,
                      imgSrc: e.coverImgSrc,
                      variant: "vertical",
                    },
                    e.title,
                  ),
                ),
              }),
            ],
          });
      var Y = r(41657),
        X = r(81875),
        V = r(32422),
        z = r(98798),
        q = r(56903),
        Q = r(11136),
        $ = r(46252);
      let Z = () =>
        (0, a.jsx)(i.Box, {
          height: 0,
          borderTop: "1px solid",
          borderTopColor: "primary.black",
          marginY: [-12, -14],
        });
      var J = r(87798),
        ee = r(82536),
        et = r(99034),
        er = r(33442),
        ea = r(15231);
      let ei = [
          {
            imageSrc: "/images/home/how-it-works/diagnose.svg",
            title: "1. Diagnose",
            description:
              "Analyse your skin with our patented face scan, trained on over 10,000 images",
          },
          {
            imageSrc: "/images/home/how-it-works/routine.svg",
            title: "2. Choose routine",
            description:
              "Discover which products are best for your skin and goals, and understand why",
          },
          {
            imageSrc: "/images/home/how-it-works/shop.svg",
            title: "3. Shop",
            description:
              "Access the best prices, exclusive deals, free delivery on orders over \xa320 and money back guarantee",
          },
        ],
        en = [
          "Save 30% off on routines",
          "Money back guarantee",
          "Free delivery on orders over \xa320",
        ],
        es = () => {
          let { isSkincareDecoded: e } = (0, ee.A)(),
            t = (0, et.l)();
          return e
            ? null
            : (0, a.jsxs)(k.Flex, {
                flexDirection: "column",
                gap: 10,
                children: [
                  (0, a.jsx)(i.Box, {
                    children: (0, a.jsx)(T.a, {
                      textStyle: "heading.h6.bold",
                      firstTitleText: "Target your focus areas with ",
                      secondTitleText: "personalised routines.",
                      colorScheme: "purple",
                    }),
                  }),
                  (0, a.jsx)(k.Flex, {
                    gap: 4,
                    overflowX: "auto",
                    width: "100%",
                    paddingBottom: 6,
                    marginBottom: -6,
                    justifyContent: {
                      base: "flex-start",
                      "2xl": "space-evenly",
                    },
                    children: ei.map((e) =>
                      (0, a.jsxs)(
                        k.Flex,
                        {
                          flexDirection: "column",
                          minWidth: { base: 80, lg: 0 },
                          maxWidth: 120,
                          borderRadius: "2xl",
                          padding: 6,
                          backgroundColor: "bdna.bdna.10--new",
                          alignItems: "center",
                          children: [
                            (0, a.jsx)(J.Image, {
                              src: e.imageSrc,
                              width: "72px",
                              height: "72px",
                              alt: "",
                            }),
                            (0, a.jsx)(s.Text, {
                              marginTop: 6,
                              textStyle: "heading.h7.bold",
                              textAlign: "center",
                              children: e.title,
                            }),
                            (0, a.jsx)(s.Text, {
                              marginTop: 4,
                              textStyle: "function.caption.medium",
                              textAlign: "center",
                              children: e.description,
                            }),
                          ],
                        },
                        e.title,
                      ),
                    ),
                  }),
                  (0, a.jsxs)(k.Flex, {
                    gap: 10,
                    flexDirection: ["column", null, null, null, "row-reverse"],
                    justifyContent: "space-between",
                    children: [
                      (0, a.jsx)(k.Flex, {
                        flexDirection: ["column", null, "row"],
                        gap: 4,
                        children: en.map((e) =>
                          (0, a.jsxs)(
                            k.Flex,
                            {
                              alignItems: "center",
                              gap: 2,
                              children: [
                                (0, a.jsx)(J.Image, {
                                  src: "/images/home/how-it-works/listItem.svg",
                                  alt: "",
                                }),
                                (0, a.jsx)(s.Text, {
                                  textStyle: "body.semibold",
                                  children: e,
                                }),
                              ],
                            },
                            e,
                          ),
                        ),
                      }),
                      (0, a.jsxs)(i.Box, {
                        display: "flex",
                        flexDir: ["column", null, "row"],
                        alignItems: "center",
                        gap: [4, null, null, 8],
                        children: [
                          (0, a.jsx)(ea.ButtonLink, {
                            "aria-label": "Get started",
                            "data-testid": "Get started",
                            variant: "primary",
                            rightIcon: (0, a.jsx)(F.ArrowRightIcon, {
                              height: 6,
                              width: 6,
                            }),
                            href: er.q,
                            fullWidth: t,
                            children: "Get started",
                          }),
                          (0, a.jsx)(ea.ButtonLink, {
                            "aria-label": "Learn more",
                            variant: "tertiary",
                            href: "/bdna-quiz",
                            children: "Learn more",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
        };
      var el = r(51120),
        eo = r(98247),
        ec = r(76074);
      let ed = [
          "/images/landing/testimonials/matchscore/anastasia.webp",
          "/images/landing/testimonials/matchscore/paloma.webp",
          "/images/landing/testimonials/matchscore/sheidine.webp",
          "/images/landing/testimonials/matchscore/jaydee.webp",
          "/images/landing/testimonials/matchscore/tara.webp",
          "/images/landing/testimonials/matchscore/chloe.webp",
        ],
        eu = (e) => {
          let { expandXScrollWidth: t } = e;
          return (0, a.jsxs)(k.Flex, {
            gap: 6,
            direction: "column",
            children: [
              (0, a.jsx)(s.Text, {
                textStyle: "heading.h6.bold",
                children: "Real people, real results",
              }),
              (0, a.jsx)(ec.P, {
                expandXScrollWidth: t,
                children: ed.map((e, t) =>
                  (0, a.jsx)(
                    J.Image,
                    {
                      width: 288,
                      src: e,
                      alt:
                        0 === t
                          ? "Collection of positive testimonials from happy customers"
                          : "",
                      borderRadius: "lg",
                      marginBottom: 3,
                    },
                    "testimonial-image-".concat(t),
                  ),
                ),
              }),
            ],
          });
        },
        eh = () => {
          let e;
          let { user: t, userIsReady: r } = (0, ee.A)();
          return (
            (e = (null == t ? void 0 : t.firstName)
              ? "Welcome back, ".concat(t.firstName)
              : "Welcome back"),
            (0, a.jsx)(i.Box, {
              children: (0, a.jsx)(s.Text, {
                as: "h2",
                textStyle: "display.d1",
                visibility: r ? "visible" : "hidden",
                children: e,
              }),
            })
          );
        };
      var eg = r(17912),
        ep = r(98084),
        em = r(31770),
        ex = r(96543),
        eS = r(79784);
      let eb = (e) => {
        let {
            skinConcerns: t,
            skinType: r,
            hasBdna: a,
            isLoading: i,
            queryNumProducts: n,
          } = e,
          s = (0, eS.u)(c.ch.SKINCARE),
          l = (0, o.useMemo)(() => {
            var e;
            if (i) return [];
            let l = N({
              skinConcerns: t,
              skinType: r,
              hasBdna: a,
              listLength: n,
              brands: null != s ? s : [],
            });
            return a
              ? l
              : (function (e, t) {
                  let r, a;
                  let i = [...e],
                    n = i.length;
                  for (; n; )
                    (a = Math.floor(
                      (function (e) {
                        let t = 1e4 * Math.sin(e++);
                        return t - Math.floor(t);
                      })(t) * n--,
                    )),
                      (r = i[n]),
                      (i[n] = i[a]),
                      (i[a] = r),
                      ++t;
                  return i;
                })(
                  l,
                  null !== (e = (0, em.wz)()) && void 0 !== e
                    ? e
                    : Math.random(),
                );
          }, [i, t, r, n]),
          d = (0, ex.mP)(
            l.map((e) => e.query),
            { enabled: !i, placeholderData: (e) => e },
          );
        d.forEach((e, t) => {
          var r, a;
          l[t].products =
            null !==
              (a =
                null === (r = e.data) || void 0 === r ? void 0 : r.results) &&
            void 0 !== a
              ? a
              : [];
        });
        let u = l.filter((e) => {
            var t;
            return null === (t = e.products) || void 0 === t
              ? void 0
              : t.length;
          }),
          h = (0, eg.useQueries)({
            queries: u.map((e) => {
              let t = e.contentQuery;
              return t
                ? {
                    queryFn: () => ep.Z.getStoriesFromProductFilters(t),
                    queryKey: ["basedOnYourBdnaStories", t],
                  }
                : { queryFn: () => ({ stories: [], total: 0 }), queryKey: [] };
            }),
          });
        h.forEach((e, t) => {
          var r, a;
          u[t].stories =
            null !==
              (a =
                null === (r = e.data) || void 0 === r ? void 0 : r.stories) &&
            void 0 !== a
              ? a
              : [];
        });
        let g = h.some((e) => e.isLoading || e.isPending),
          p = d.some((e) => e.isLoading || e.isPending);
        return { isLoading: g || p, personalisedProductContentLists: u };
      };
      var ey = r(97001),
        eT = r(84145);
      let ev = (e) => {
          var t;
          let { analytics: r, isLoading: i, listItem: n, onSwapClick: s } = e,
            { products: l } = n,
            o =
              null !==
                (t =
                  null == l
                    ? void 0
                    : l.filter((e) => {
                        var t;
                        return (
                          (null === (t = e.matchScores) || void 0 === t
                            ? void 0
                            : t.overallScore) === 10
                        );
                      }).length) && void 0 !== t
                ? t
                : 0;
          if (l)
            return (0, a.jsx)(
              eT.E,
              {
                analytics: { ...r, ...n.analytics },
                isLoading: i,
                numberOfSuperMatches: o,
                onSwapClick: s,
                products: l,
                linkRef: null == n ? void 0 : n.seeAllPath,
                stories: null == n ? void 0 : n.stories,
                title: null == n ? void 0 : n.title,
              },
              "product-list-".concat(n.key),
            );
        },
        ef = (e) => {
          let {
              skinConcerns: t,
              skinType: r,
              isLoading: n,
              analytics: s,
              lists: l,
            } = e,
            [c, d] = (0, o.useState)(0),
            { isSkincareDecoded: u } = (0, ee.A)(),
            { personalisedProductContentLists: h, isLoading: g } = eb({
              skinConcerns: t,
              skinType: r,
              isLoading: n,
              queryNumProducts: 8,
              hasBdna: !!u,
            }),
            p = h.filter((e) => l.includes(e.type)),
            m = n || g,
            x = null == p ? void 0 : p[c],
            S =
              (null == p ? void 0 : p.length) < 2
                ? void 0
                : () => d((e) => (e + 1) % p.length);
          return m || (null == p ? void 0 : p.length)
            ? (0, a.jsx)(ey.q, {
                contentHeight: 200,
                contentWidth: "100%",
                loading: m,
                children: x
                  ? (0, a.jsx)(
                      ev,
                      {
                        analytics: s,
                        isLoading: m,
                        listItem: x,
                        onSwapClick: S,
                      },
                      "personalised-list-".concat(null == x ? void 0 : x.key),
                    )
                  : null,
              })
            : (0, a.jsx)(i.Box, {
                paddingY: 11,
                paddingX: { base: 10, md: 20 },
                background: "primary.white",
                borderRadius: "2xl",
                textAlign: "center",
                children: "Sorry, we can’t match any products at the moment.",
              });
        };
      var eI = r(9292),
        e_ = r(17628);
      let ej = [
          "/images/landing/testimonials/anastasia.webp",
          "/images/landing/testimonials/paloma.webp",
          "/images/landing/testimonials/sheidine.webp",
          "/images/landing/testimonials/jaydee.webp",
          "/images/landing/testimonials/tara.webp",
          "/images/landing/testimonials/chloe.webp",
        ],
        eR = (e) => {
          let { expandXScrollWidth: t } = e;
          return (0, a.jsxs)(k.Flex, {
            gap: 6,
            direction: "column",
            children: [
              (0, a.jsx)(s.Text, {
                textStyle: "heading.h6.bold",
                children: "Real people, real results",
              }),
              (0, a.jsx)(ec.P, {
                expandXScrollWidth: t,
                children: ej.map((e, t) =>
                  (0, a.jsx)(
                    J.Image,
                    {
                      width: 288,
                      src: e,
                      alt: "Testimonial image ".concat(t),
                      borderRadius: "lg",
                      marginBottom: 3,
                    },
                    "testimonial-image-".concat(t),
                  ),
                ),
              }),
            ],
          });
        };
      var eE = r(29392),
        eC = r(36008),
        eA = r.n(eC),
        eN = r(69211),
        ew = r(84605),
        ek = r(82480);
      let eL = (e) => {
        let { productType: t = c.ch.SKINCARE } = e,
          [r, i] = (0, o.useState)("/products"),
          n = (0, eS.u)(t);
        return (0, a.jsx)(k.Flex, {
          paddingX: { base: 0, md: 8, lg: 10, "2xl": 16 },
          children: (0, a.jsxs)(k.Flex, {
            paddingX: { base: 8, md: 10 },
            paddingY: 20,
            direction: "column",
            backgroundColor: "primary.warmGrey.90",
            borderRadius: 32,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            children: [
              (0, a.jsx)(s.Text, {
                textStyle: "heading.h4",
                textAlign: "center",
                children: "Your skincare shop is open",
              }),
              (0, a.jsx)(k.Flex, {
                justifyContent: "center",
                children: (0, a.jsx)(ek.m, {
                  onSelect: (e) => {
                    let t = new URLSearchParams();
                    t.set("filters", JSON.stringify(e)),
                      i("/products?".concat(t.toString()));
                  },
                  variant: "centerAligned",
                  productType: t,
                }),
              }),
              (0, a.jsx)(ea.ButtonLink, {
                alignSelf: "center",
                href: r,
                size: "md",
                variant: "primary",
                fullWidth: !1,
                marginBottom: 10,
                children: (0, a.jsx)(s.Text, {
                  textStyle: "function.text.large",
                  children: "Browse now",
                }),
              }),
              (0, a.jsx)(k.Flex, {
                paddingX: { base: -10, md: -8 },
                children: (0, a.jsx)(ew.V, {
                  isReverse: !0,
                  numberToFormLoop: 3,
                  animationTime: 30,
                  translateXCorrection: -0.5,
                  paddingTop: 10,
                  paddingBottom: 4,
                  children:
                    null == n
                      ? void 0
                      : n.map((e) => {
                          let {
                            id: t,
                            label: r,
                            productHeroImage: i,
                            slug: n,
                          } = e;
                          return i
                            ? (0, a.jsx)(
                                eE.LinkBox,
                                {
                                  width: 40,
                                  height: 40,
                                  as: eA(),
                                  href: ""
                                    .concat(eN.Kr, "/brand/shop/")
                                    .concat(n),
                                  children: (0, a.jsx)(J.Image, {
                                    aspectRatio: 1,
                                    borderRadius: ["2xl", "3xl"],
                                    src: null == i ? void 0 : i.url,
                                    alt: "".concat(r, " logo"),
                                    backgroundColor: "white",
                                  }),
                                },
                                t,
                              )
                            : null;
                        }),
                }),
              }),
            ],
          }),
        });
      };
      var eO = r(2791);
      let eP = () => {
        let e = o.useRef(null);
        return (
          (0, o.useEffect)(() => {
            window.Trustpilot &&
              window.Trustpilot.loadFromElement(e.current, !0);
          }, []),
          (0, a.jsx)(i.Box, {
            "data-testid": "trustpilot-widget",
            ref: e,
            minHeight: "220px",
            "data-locale": eO.In,
            "data-template-id": eO.oe.SLIDER,
            "data-businessunit-id": eO.MS,
            "data-style-height": "220px",
            "data-style-width": "100%",
            "data-stars": "3,4,5",
            "data-text-color": "dark",
            "data-scroll-to-list": "false",
            "data-allow-robots": "true",
            children: (0, a.jsx)("a", {
              href: eO.$w,
              target: "_blank",
              rel: "noopener",
            }),
          })
        );
      };
      var eB = r(77932),
        eD = r(70738),
        eF = r(87479),
        eH = r(72987),
        eG = r(36747),
        eM = r(51570);
      let eW = () =>
        (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(s.Text, {
              textStyle: "title.t2",
              color: "primary.black.10",
              marginBottom: 4,
              children: "Shop the brands you love",
            }),
            (0, a.jsxs)(eB.Tabs, {
              position: "relative",
              variant: "unstyled",
              children: [
                (0, a.jsxs)(eD.TabList, {
                  children: [
                    (0, a.jsx)(eF.Tab, {
                      marginRight: 4,
                      padding: 0,
                      _selected: { color: "primary.black.10" },
                      color: "primary.warmGrey.50",
                      children: (0, a.jsx)(s.Text, {
                        textStyle: "function.large",
                        children: "Skincare",
                      }),
                    }),
                    (0, a.jsx)(eF.Tab, {
                      padding: 0,
                      _selected: { color: "primary.black.10" },
                      color: "primary.warmGrey.50",
                      children: (0, a.jsx)(s.Text, {
                        textStyle: "function.large",
                        children: "Haircare",
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(eH.TabIndicator, {
                  height: "1px",
                  bg: "primary.black.10",
                  borderRadius: "1px",
                }),
                (0, a.jsxs)(eG.TabPanels, {
                  children: [
                    (0, a.jsx)(eM.TabPanel, {
                      paddingX: 0,
                      children: (0, a.jsx)(q.T, {
                        productType: c.ch.SKINCARE,
                        title: "",
                      }),
                    }),
                    (0, a.jsx)(eM.TabPanel, {
                      paddingX: 0,
                      children: (0, a.jsx)(q.T, {
                        productType: c.ch.HAIRCARE,
                        title: "",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      var eK = r(41429),
        eU = r(77356),
        eY = r(41838),
        eX = r(93869);
      let eV = (e) => {
          let { onClick: t } = e;
          return (0, a.jsxs)(eX.$, {
            "aria-label": "learn more",
            "data-testid": "learn more",
            size: "sm",
            variant: "primaryLight",
            onClick: t,
            children: [
              "Learn more ",
              (0, a.jsx)(F.PlusIcon, { height: 6, width: 6 }),
            ],
          });
        },
        ez = () =>
          (0, a.jsx)(eU.G, {
            content: (0, a.jsxs)(s.Text, {
              textStyle: "heading.h7.bold",
              children: [
                "Your match scores are ready,",
                (0, a.jsx)("br", {}),
                "go meet them...",
              ],
            }),
            image: "/images/banners/matchScore.webp",
            imageParallax: "/images/banners/matchScoreParallax.webp",
            ctaComponent: (0, a.jsx)(eY.h, {
              analyticsProperties: {
                click_location: "Homepage",
                click_name: "Learn more",
              },
              explainerSections: eK.P,
              CtaComponent: eV,
              title: "Learn the magic behind your match scores",
            }),
          }),
        eq = () =>
          (0, a.jsx)(eU.G, {
            image: "/images/banners/superSet.webp",
            imageParallax: "/images/banners/superSetParallax.webp",
            content: (0, a.jsx)(s.Text, {
              textStyle: "heading.h7.bold",
              children:
                "Discover your top matches in your personalised Super Set",
            }),
            ctaComponent: (0, a.jsx)(ea.ButtonLink, {
              href: "/bdna-results",
              size: "sm",
              variant: "primaryLight",
              rightIcon: (0, a.jsx)(F.ArrowRightIcon, { width: 6, height: 6 }),
              children: "View your set",
            }),
          });
      var eQ = r(45489);
      let e$ = (e) => {
        let { cmsProps: t, contextProps: r, productType: o } = e,
          { componentId: p } = t,
          { data: m, isLoading: S } = (0, Y.E)({
            enabled: p === V.s.PERSONALISED_LISTS,
          }),
          b = (0, l.usePathname)(),
          y = (0, h.E)(b),
          { data: T, isLoading: v } = (0, X.W)(
            y === u.a.ROUTINES ? d.Sg.ROUTINE : d.Sg.ALL,
            null != o ? o : null,
            { enabled: p === V.s.PROMOTIONAL_CONTENT },
          ),
          I = null;
        switch (p) {
          case V.s.NAVIGATION_CARDS_PRODUCT_TYPE:
            I = (0, a.jsx)(eQ.n, {});
            break;
          case V.s.BANNER_MATCH_SCORE:
            I = (0, a.jsx)(ez, {});
            break;
          case V.s.PERSONALISED_LISTS:
            I = (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(ef, {
                  skinConcerns: m,
                  isLoading: S,
                  analytics: r.analytics,
                  lists: [f.SKIN_CONCERN, f.PRODUCT_TYPE],
                }),
                (0, a.jsx)(ef, {
                  skinConcerns: m,
                  isLoading: S,
                  analytics: r.analytics,
                  lists: [f.BRAND, f.OFFER],
                }),
              ],
            });
            break;
          case V.s.PERSONALISED_LISTS_POOL_1:
            I = (0, a.jsx)(ef, {
              skinConcerns: m,
              isLoading: S,
              analytics: r.analytics,
              lists: [f.SKIN_CONCERN, f.PRODUCT_TYPE],
            });
            break;
          case V.s.PERSONALISED_LISTS_POOL_2:
            I = (0, a.jsx)(ef, {
              skinConcerns: m,
              isLoading: S,
              analytics: r.analytics,
              lists: [f.BRAND, f.OFFER],
            });
            break;
          case V.s.BANNER_SUPER_SET:
            I = (0, a.jsx)(eq, {});
            break;
          case V.s.SKINCARE_BRANDS:
            I = (0, a.jsx)(q.T, { productType: c.ch.SKINCARE });
            break;
          case V.s.HAIRCARE_BRANDS:
            I = (0, a.jsx)(q.T, {
              title: "Shop our haircare brands",
              productType: c.ch.HAIRCARE,
            });
            break;
          case V.s.NAVIGATION_CARDS_FOCUS_AREA:
            I = (0, a.jsx)(i.Box, {
              children:
                o === c.ch.HAIRCARE
                  ? (0, a.jsx)($.u, {
                      content: { heading: "What Noli can help with", ...x },
                      variant: "cta",
                    })
                  : (0, a.jsx)($.u, {
                      content: { heading: "What Noli can help with", ...g.H },
                      variant: "cta",
                    }),
            });
            break;
          case V.s.NAVIGATION_CARDS_ROUTINE_STEP:
            I = (0, a.jsx)(e_.G, { title: "Browse by routine step" });
            break;
          case V.s.RECENTLY_VIEWED:
            I = (0, a.jsx)(eI.TN, {});
            break;
          case V.s.HOW_IT_WORKS:
            I = (0, a.jsx)(es, {});
            break;
          case V.s.KEYLINE:
            I = (0, a.jsx)(Z, {});
            break;
          case V.s.SENTENCE_SEARCH:
            I = (0, a.jsx)(eL, {});
            break;
          case V.s.ROUTINE_TESTIMONIAL:
            I = (0, a.jsx)(eR, {});
            break;
          case V.s.LANDING_HOW_IT_WORKS:
            I = (0, a.jsx)(P, { productType: o });
            break;
          case V.s.LANDING_WHY_NOLI:
            I = (0, a.jsx)(W, { productType: o });
            break;
          case V.s.PROMOTIONAL_CONTENT:
            I = (0, a.jsx)(el.m, {
              temporaryStyle: "light",
              permanentStyle: "transparentDark",
              temporaryEntries: null == T ? void 0 : T.temporaryEntries,
              permanentEntries: null == T ? void 0 : T.permanentEntries,
              isLoading: v,
            });
            break;
          case V.s.OUR_BRANDS:
            I = (0, a.jsxs)(n.Stack, {
              gap: 6,
              children: [
                (0, a.jsx)(s.Text, {
                  color: "primary.black.10",
                  textStyle: "heading.h6.bold",
                  children: "Our brands",
                }),
                (0, a.jsx)(Q.S, { productType: o, isLight: r.isPageBgGrey }),
              ],
            });
            break;
          case V.s.MATCH_SCORE_TESTIMONIAL:
            I = (0, a.jsx)(eu, {});
            break;
          case V.s.MATCH_SCORE_HOW_IT_WORKS:
            I = (0, a.jsx)(U, {});
            break;
          case V.s.PERSONALISED_GREETING:
            I = (0, a.jsx)(eh, {});
            break;
          case V.s.SLIDER_TRUST_PILOT:
            I = (0, a.jsx)(eP, {});
            break;
          case V.s.MARKETING_CONSENT_FORM:
            I = (0, a.jsx)(eo.L, {
              isLightBackground: !0,
              displayFooterTitle: !1,
            });
            break;
          case V.s.TABBED_BRANDS:
            I = (0, a.jsx)(eW, {});
            break;
          default:
            (0, z.A)(
              z.$.WARN,
              "Unknown non-configurable component type encountered",
              t,
            );
        }
        return I
          ? (0, a.jsx)(i.Box, {
              paddingX: r.marginX,
              width: "100%",
              children: I,
            })
          : I;
      };
    },
    76074: (e, t, r) => {
      r.d(t, { P: () => c });
      var a = r(94799),
        i = r(4306),
        n = r(34023),
        s = r(88655),
        l = r(23213),
        o = r(99313);
      let c = (e) => {
        let { children: t, columnGap: r, expandXScrollWidth: c } = e,
          d = (0, n.useRef)(null),
          { scroll: u, canScrollLeft: h, canScrollRight: g } = (0, s.k)(d, {});
        return (0, a.jsxs)(i.Box, {
          display: "flex",
          flexDir: "column",
          children: [
            (0, a.jsx)(i.Box, {
              ref: d,
              display: "flex",
              columnGap: null != r ? r : [2, null, 4],
              overflowX: "auto",
              overflowY: "hidden",
              marginBottom: -4,
              paddingBottom: 4,
              ...(0, l.K)(c),
              children: t,
            }),
            (0, a.jsx)(i.Box, {
              marginTop: 6,
              children: (0, a.jsx)(o._, {
                onClick: u,
                disableLeft: !h,
                disableRight: !g,
                isAnimated: !1,
              }),
            }),
          ],
        });
      };
    },
    82480: (e, t, r) => {
      r.d(t, { m: () => v });
      var a = r(94799),
        i = r(98814),
        n = r(4306),
        s = r(34023),
        l = r(24689),
        o = r(92718),
        c = r(97001),
        d = r(29794),
        u = r(88197),
        h = r(31634),
        g = r(89136),
        p = r(3409),
        m = r(36305),
        x = r(6744),
        S = r(39693),
        b = r(23448);
      let y = (e) => {
          let {
              selection: t,
              defaultText: r,
              labelSuffix: i,
              filterKey: l,
              onSelect: c,
              productType: y,
            } = e,
            { getFilters: T } = (0, x.a)(),
            v = T(y),
            f =
              null == v
                ? void 0
                : v.filters.find((e) => {
                    let { key: t } = e;
                    return t === l;
                  }),
            I =
              l === o.x.PRODUCT_TYPE || l === o.x.GROUPED_PRODUCT_TYPE
                ? null == f
                  ? void 0
                  : f.categoryGroups.flatMap((e) => e.categories)
                : null == f
                  ? void 0
                  : f.categories,
            _ =
              null == I
                ? void 0
                : I.map((e) => ({ label: e.label, value: e.key })),
            j = (0, s.useCallback)((e, t) => {
              var r, a;
              return null !==
                (a =
                  null == t
                    ? void 0
                    : null === (r = t.find((t) => t.value === e)) ||
                        void 0 === r
                      ? void 0
                      : r.label) && void 0 !== a
                ? a
                : "";
            }, []),
            [R, E] = (0, s.useState)(j(null == t ? void 0 : t[0], _));
          return (0, a.jsx)(d.Popover, {
            children: (e) => {
              let { isOpen: s, onClose: o } = e;
              return (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(u.PopoverTrigger, {
                    children: (0, a.jsxs)(h.Flex, {
                      as: "button",
                      role: "button",
                      "aria-label": ""
                        .concat(l, "-")
                        .concat(s ? "active" : "inactive"),
                      "data-testid": ""
                        .concat(l, "-")
                        .concat(s ? "active" : "inactive"),
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                      gap: 1,
                      children: [
                        (0, a.jsx)(g.Text, {
                          textStyle: "heading.h6.bold",
                          textColor: "primary.black.10",
                          children: R
                            ? "".concat(R, " ").concat(null != i ? i : "")
                            : r,
                        }),
                        s
                          ? (0, a.jsx)(S.ChevronLeftIcon, {
                              width: 6,
                              height: 6,
                            })
                          : (0, a.jsx)(S.ChevronDownIcon, {
                              width: 6,
                              height: 6,
                            }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(p.PopoverContent, {
                    children: (0, a.jsx)(m.PopoverBody, {
                      children:
                        (null == _ ? void 0 : _.length) &&
                        (0, a.jsx)(n.Box, {
                          padding: 4,
                          children: (0, a.jsx)(b.e, {
                            buttons: [{ label: r, value: "" }, ..._],
                            defaultSelection: [""],
                            selection: "" === R ? [""] : t,
                            layout: "column",
                            onChange: (e) => {
                              var t, r;
                              let a = e[0];
                              E(
                                null !==
                                  (r =
                                    null == _
                                      ? void 0
                                      : null ===
                                            (t = _.find(
                                              (e) => e.value === a,
                                            )) || void 0 === t
                                        ? void 0
                                        : t.label) && void 0 !== r
                                  ? r
                                  : a,
                              ),
                                c(l, "" === a ? void 0 : a),
                                o();
                            },
                          }),
                        }),
                    }),
                  }),
                ],
              });
            },
          });
        },
        T = (e) => {
          let { text: t } = e;
          return (0, a.jsx)(g.Text, {
            textStyle: "heading.h6.bold",
            textColor: "primary.warmGrey.50",
            children: t,
          });
        },
        v = (e) => {
          let {
              onSelect: t,
              userFilterOptions: r,
              variant: d,
              isLoading: u,
              sendAnalyticsInfos: h,
              productType: g,
            } = e,
            p = (0, i.useMultiStyleConfig)("SentenceSearch", { variant: d }),
            m = null == r ? void 0 : r.productType,
            x = null == r ? void 0 : r.groupedProductType,
            S = null == r ? void 0 : r.skinConcern,
            b = null == r ? void 0 : r.focusAreas,
            v = null == r ? void 0 : r.hairTexture,
            f = null == r ? void 0 : r.skinType,
            I = g === l.ch.HAIRCARE,
            [_, j] = (0, s.useState)({
              productType: m,
              skinConcern: S,
              skinType: f,
              hairTexture: v,
              focusAreas: b,
              groupedProductType: x,
            });
          (0, s.useEffect)(() => {
            let e = Object.keys(_).find(
              (e) =>
                e === o.x.PRODUCT_TYPE ||
                e === o.x.SKIN_CONCERN ||
                e === o.x.SKIN_TYPE ||
                e === o.x.FOCUS_AREAS ||
                e === o.x.HAIR_TEXTURE ||
                e === o.x.GROUPED_PRODUCT_TYPE,
            );
            t && e && t(_);
          }, [_]);
          let R = (e, t) => {
            let r = { ..._ };
            (r[e] = t ? [t] : void 0), h && h(r), j(r);
          };
          return (0, a.jsx)(n.Box, {
            __css: p.container,
            children: (0, a.jsxs)(c.q, {
              loading: u,
              contentHeight: { base: 18, lg: 6 },
              contentWidth: "100%",
              children: [
                (0, a.jsx)(n.Box, {
                  __css: p.section,
                  children: (0, a.jsx)(T, { text: "I am looking for" }),
                }),
                (0, a.jsx)(n.Box, {
                  __css: p.section,
                  children: (0, a.jsx)(y, {
                    selection: I ? x : m,
                    defaultText: "any product",
                    filterKey: I ? o.x.GROUPED_PRODUCT_TYPE : o.x.PRODUCT_TYPE,
                    onSelect: (e, t) => R(e, t),
                    productType: g,
                  }),
                }),
                (0, a.jsx)(n.Box, {
                  __css: p.section,
                  children: (0, a.jsx)(T, { text: "suitable for" }),
                }),
                (0, a.jsx)(n.Box, {
                  __css: p.section,
                  children: (0, a.jsx)(y, {
                    defaultText: "any ".concat(I ? "hair" : "skin", " type"),
                    selection: I ? v : f,
                    labelSuffix: I ? "hair" : "skin",
                    filterKey: I ? o.x.HAIR_TEXTURE : o.x.SKIN_TYPE,
                    onSelect: (e, t) => R(e, t),
                    productType: g,
                  }),
                }),
                (0, a.jsx)(n.Box, {
                  __css: p.section,
                  children: (0, a.jsx)(T, { text: "to help with" }),
                }),
                (0, a.jsx)(n.Box, {
                  __css: p.section,
                  children: (0, a.jsx)(y, {
                    defaultText: "any focus area",
                    selection: I ? b : S,
                    filterKey: I ? o.x.FOCUS_AREAS : o.x.SKIN_CONCERN,
                    onSelect: (e, t) => R(e, t),
                    productType: g,
                  }),
                }),
              ],
            }),
          });
        };
    },
    83193: (e, t, r) => {
      r.d(t, { a: () => n });
      var a = r(94799),
        i = r(89136);
      r(34023);
      let n = (e) => {
        let {
          firstTitleText: t,
          secondTitleText: r,
          colorScheme: n,
          isLoading: s,
          textStyle: l = "heading.h6.bold",
        } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(i.Text, {
              as: "span",
              visibility: s ? "hidden" : "visible",
              textStyle: l,
              color:
                "dark" === n || "purple" === n
                  ? "primary.black.10"
                  : "primary.warmGrey.60",
              children: t,
            }),
            (0, a.jsx)(i.Text, {
              as: "span",
              textStyle: l,
              visibility: s ? "hidden" : "visible",
              color:
                "dark" === n
                  ? "primary.warmGrey.60"
                  : "purple" === n
                    ? "bdna.bdna.90"
                    : "primary.black.10",
              children: r,
            }),
          ],
        });
      };
    },
    95128: (e, t, r) => {
      r.d(t, { a: () => a.a });
      var a = r(83193);
    },
  },
]);
