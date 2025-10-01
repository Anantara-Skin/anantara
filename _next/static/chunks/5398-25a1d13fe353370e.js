"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5398],
  {
    9292: (e, t, i) => {
      i.d(t, { vX: () => x, fl: () => h, TN: () => u });
      var l = i(94799),
        n = i(20381),
        r = i(27357),
        a = i(34023);
      let o = () => {
        let e = (0, r.usePathname)(),
          [t, i] = (0, a.useState)(void 0);
        return (
          (0, a.useEffect)(() => {
            let t = e.match(/(products\/)[a-z0-9-]+/);
            i(null == t ? void 0 : t[0].split("/")[1]);
          }, [e]),
          t
        );
      };
      var s = i(86757),
        d = i(84145),
        c = i(83883);
      let u = () => {
          let {
            data: e = [],
            isLoading: t,
            enoughProductIds: i,
          } = (0, s.w)({ limit: 12 });
          return (0, l.jsx)(x, {
            products: e,
            isLoading: t,
            enoughProductIds: i,
            variant: "list",
          });
        },
        h = () => {
          let e = [2, 2, 4],
            t = (0, n.useBreakpointValue)(e, { ssr: !0, fallback: "xl" }),
            i = o(),
            r = Math.max(...e),
            {
              data: a = [],
              isLoading: d,
              enoughProductIds: c,
            } = (0, s.w)({ limit: r, currentProductId: i });
          return (0, l.jsx)(x, {
            products: a.slice(0, t),
            isLoading: d,
            enoughProductIds: c,
            variant: "grid",
          });
        },
        x = (e) => {
          let {
            enoughProductIds: t,
            variant: i = "list",
            title: n = "Take another look",
            ...r
          } = e;
          if (t)
            return "list" === i
              ? (0, l.jsx)(d.E, { ...r, title: n })
              : (0, l.jsx)(c.I, { ...r, title: n });
        };
    },
    13965: (e, t, i) => {
      i.d(t, { B: () => g });
      var l = i(94799),
        n = i(59626),
        r = i(4306),
        a = i(29392),
        o = i(89136),
        s = i(36008),
        d = i.n(s),
        c = i(92616),
        u = i(17422),
        h = i(57184),
        x = i(39693),
        p = i(59573);
      let g = (e) => {
        let {
            variant: t,
            stepNumber: i,
            title: s,
            linkDestination: g,
            imageSrc: f,
            isPromoTag: v,
            analytics: b,
            onClick: m,
            expandToFill: k = !1,
          } = e,
          [y, S] = (0, n.useBoolean)(!1),
          { sendAnalyticsEvent: j } = (0, h.s)(),
          C = () => {
            if (b) {
              let e = { ...b };
              j(c.m3.cardsClicked.bind(c.m3), u.s.CARDS_CLICKED, e);
            }
          },
          w = "brand" === t;
        return (0, l.jsx)(r.Box, {
          flexShrink: 0,
          width: w ? 32 : 58,
          flexGrow: +!!k,
          children: (0, l.jsxs)(a.LinkBox, {
            as: d(),
            href: g,
            display: "flex",
            flexDirection: "column",
            onMouseEnter: S.on,
            onMouseLeave: S.off,
            "aria-label": "Visit ".concat(s, " page"),
            "data-testid": "Visit ".concat(s, " page"),
            onClick: () => {
              C(), null == m || m();
            },
            children: [
              (0, l.jsx)(r.Box, {
                height: w ? 40 : { base: 58, lg: 57 },
                backgroundImage: f,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "lg",
                overflow: "hidden",
                flexGrow: 1,
                children:
                  v &&
                  (0, l.jsx)(r.Box, {
                    position: "absolute",
                    top: 6,
                    right: 6,
                    color: "semantic.orange.20",
                    "data-testid": "promoTag",
                    children: (0, l.jsx)(x.DiscountTagIcon, {
                      height: 6,
                      width: 6,
                    }),
                  }),
              }),
              w
                ? (0, l.jsx)(o.Text, {
                    mt: 2,
                    color: "primary.black.10",
                    textStyle: "function.large",
                    children: s,
                  })
                : (0, l.jsxs)(r.Box, {
                    backgroundColor: "primary.white",
                    padding: 4,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [
                      (0, l.jsxs)(r.Box, {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        gap: 2,
                        children: [
                          (0, l.jsxs)(o.Text, {
                            textStyle: "body.semibold",
                            color: "primary.warmGrey.50",
                            children: ["Step ", i],
                          }),
                          (0, l.jsx)(o.Text, {
                            textStyle: "heading.h6.bold",
                            children: s,
                          }),
                        ],
                      }),
                      (0, l.jsx)(p.L, {
                        isHovered: y,
                        size: 14,
                        direction: "right",
                        variant: "blackOutlineArrow",
                        ariaLabel: "Go to ".concat(s, " page"),
                        "data-testid": "Go to ".concat(s, " page"),
                      }),
                    ],
                  }),
            ],
          }),
        });
      };
    },
    21404: (e, t, i) => {
      i.d(t, { r: () => a });
      var l = i(94799),
        n = i(98814),
        r = i(4306);
      let a = (e) => {
        let { children: t, title: i, variant: a = "base" } = e,
          o = (0, n.useMultiStyleConfig)("NavigationLinkScrollContainer", {
            variant: a,
          });
        return (0, l.jsxs)(r.Box, {
          display: "flex",
          flexDir: "column",
          gap: 8,
          children: [
            i && (0, l.jsx)(r.Box, { __css: o.title, children: i }),
            (0, l.jsx)(r.Box, { __css: o.container, children: t }),
          ],
        });
      };
    },
    24721: (e, t, i) => {
      i.d(t, { G: () => l });
      let l = () => !window.matchMedia("(hover: none)").matches;
    },
    33442: (e, t, i) => {
      i.d(t, { q: () => l });
      let l = "/bdna-quiz";
    },
    49606: (e, t, i) => {
      i.d(t, { CmsRichText: () => d });
      var l = i(94799),
        n = i(66572),
        r = i(64502),
        a = i(53052),
        o = i(89067),
        s = i(6488);
      let d = (e) => {
        let { richData: t } = e;
        if ("object" == typeof t) {
          let e = {
            renderNode: {
              [s.BLOCKS.UL_LIST]: (e, t) =>
                (0, l.jsx)(n.UnorderedList, { children: t }),
              [s.BLOCKS.OL_LIST]: (e, t) =>
                (0, l.jsx)(n.OrderedList, { children: t }),
              [s.BLOCKS.TABLE]: (e, t) =>
                (0, l.jsx)(r.Table, {
                  display: "block",
                  overflow: "auto",
                  maxW: "100%",
                  children: t,
                }),
              [s.BLOCKS.TABLE_CELL]: (e, t) =>
                (0, l.jsx)(a.Td, {
                  minW: { base: "70vw", md: "30vw", lg: "inherit" },
                  children: t,
                }),
            },
          };
          return (0, o.i)(t, e);
        }
        return t;
      };
    },
    52451: (e, t, i) => {
      i.d(t, { K: () => a });
      var l = i(94799),
        n = i(70369),
        r = i(77909);
      let a = (e) => {
        let { pageCount: t, currentPageIndex: i, variant: a = "dark" } = e,
          o = "light" === a ? "primary.black.10" : "primary.white",
          s = "light" === a ? "primary.warmGrey.80" : "primary.black.40";
        return (0, l.jsx)(r.HStack, {
          "data-testid": "StoryTracker",
          children: (() => {
            let e = [];
            for (let r = 0; r < t; r++)
              e.push(
                (0, l.jsx)(
                  n.Circle,
                  { bgColor: r === i ? o : s, size: "6px" },
                  r,
                ),
              );
            return e;
          })(),
        });
      };
    },
    53881: (e, t, i) => {
      i.d(t, { D: () => d });
      var l = i(94799),
        n = i(60968),
        r = i(55272),
        a = i(31416),
        o = i(4099),
        s = i(66656);
      let d = () =>
        (0, l.jsxs)(n.Card, {
          tabIndex: 0,
          direction: "column",
          height: "100%",
          boxShadow: "none",
          children: [
            (0, l.jsx)(r.CardHeader, {
              position: "relative",
              padding: 0,
              backgroundColor: "primary.white",
              borderRadius: "lg",
              overflow: "hidden",
              children: (0, l.jsx)(a.Skeleton, {
                minW: 56,
                aspectRatio: "0.81 / 1",
                borderRadius: "none",
              }),
            }),
            (0, l.jsx)(o.CardBody, {
              py: 4,
              px: 2,
              height: "100%",
              children: (0, l.jsx)(s.SkeletonText, {
                margin: 0,
                isLoaded: !1,
                maxWidth: "100%",
                skeletonHeight: "1.5rem",
                noOfLines: 3,
                startColor: "white",
                endColor: "primary.warmGrey.80",
              }),
            }),
          ],
        });
    },
    56903: (e, t, i) => {
      i.d(t, { T: () => s });
      var l = i(94799),
        n = i(24689),
        r = i(79784),
        a = i(13965),
        o = i(21404);
      let s = (e) => {
        var t;
        let i = (0, r.u)(e.productType);
        if (!i) return;
        let s =
          e.productType === n.ch.HAIRCARE
            ? "/haircare/brand/shop/"
            : "/brand/shop/";
        return (0, l.jsx)(o.r, {
          title:
            null !== (t = e.title) && void 0 !== t
              ? t
              : "Shop our skincare brands",
          ...e,
          children: i.map((t) => {
            var i;
            let {
              label: n,
              slug: r,
              key: o,
              navCardImage: d,
              isPromoTag: c,
            } = t;
            return !d ||
              (null === (i = e.keysToExclude) || void 0 === i
                ? void 0
                : i.includes(o))
              ? null
              : (0, l.jsx)(
                  a.B,
                  {
                    variant: "brand",
                    title: n,
                    linkDestination: "".concat(s).concat(r),
                    imageSrc: d.url,
                    isPromoTag: c,
                    analytics: {
                      click_location: "highlighted brands",
                      click_name: n,
                      care_type: e.productType,
                    },
                  },
                  n,
                );
          }),
        });
      };
    },
    59646: (e, t, i) => {
      i.d(t, { Z: () => a });
      var l = i(34023),
        n = i(22291);
      let r = "localHistory",
        a = () => {
          let { readStorage: e, setStorage: t } = (0, n.M)(),
            i = (0, l.useCallback)(() => {
              var t;
              return null !== (t = e(r)) && void 0 !== t ? t : [];
            }, []),
            a = (0, l.useCallback)(
              (e) => {
                let l = i();
                Array.isArray(l) || (l = []), l.push(e), t(r, l), o();
              },
              [i, t],
            ),
            o = (0, l.useCallback)(function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 50,
                l = i();
              if (l.length >= e) {
                try {
                  t(r, l.slice(-e));
                } catch (e) {
                  return !1;
                }
                return !0;
              }
              return !1;
            }, []);
          return { pushToHistory: a, getHistory: i };
        };
    },
    63184: (e, t, i) => {
      i.d(t, { b: () => l });
      let l = (e, t) => {
        var i, l, n;
        let r = e.masterVariant;
        return {
          product_id: r.productId,
          sku: r.sku,
          name: e.name,
          availability: (
            null === (i = r.availability) || void 0 === i ? void 0 : i.isOnStock
          )
            ? "in stock"
            : "not in stock",
          brand: r.brands,
          score:
            null === (l = e.matchScores) || void 0 === l
              ? void 0
              : l.overallScore,
          price: r.price,
          discount: r.strikePrice,
          main_category: e.productType,
          position: 1,
          category: (null !== (n = r.producttypes) && void 0 !== n
            ? n
            : []
          ).join(", "),
          quantity: 1,
          variant: r.size,
          value: r.price,
          routine: !1,
          ...t,
        };
      };
    },
    65795: (e, t, i) => {
      i.d(t, { O: () => a, f: () => r });
      var l = i(94799),
        n = i(39693),
        r = (function (e) {
          return (
            (e.BLEMISH_PRONE_SKIN = "acneblemishproneskin"),
            (e.DARK_CIRCLES_PUFFINESS = "darkcirclespuffiness"),
            (e.DRYNESS_DEHYDRATION = "drynessdehydration"),
            (e.DULLNESS = "dullness"),
            (e.FINE_LINES_WRINKLES = "finelineswrinkles"),
            (e.HYPERPIGMENTATION = "hyperpigmentation"),
            (e.LACK_OF_FIRMNESS = "lackoffirmness"),
            (e.OILINESS = "oiliness"),
            (e.PORES_AND_BLACKHEADS = "poresblackheads"),
            (e.REDNESS = "redness"),
            (e.UNEVEN_SKIN_TONE_AND_TEXTURE = "unevenskintonetexture"),
            e
          );
        })({});
      let a = [
        {
          label: "Blemish-prone Skin",
          slug: "blemish-prone-skin",
          id: "acneblemishproneskin",
          icon: (e) => (0, l.jsx)(n.SkinBlemishIcon, { width: e, height: e }),
          filterValue: "Blemish-prone Skin",
        },
        {
          label: "Dark Circles & Puffiness",
          slug: "dark-circles-and-puffiness",
          id: "darkcirclespuffiness",
          icon: (e) =>
            (0, l.jsx)(n.SkinDarkCirclesIcon, { width: e, height: e }),
          filterValue: "Dark Circles & Puffiness",
        },
        {
          label: "Dryness & Dehydration",
          slug: "dryness-and-dehydration",
          id: "drynessdehydration",
          icon: (e) => (0, l.jsx)(n.SkinDrynessIcon, { width: e, height: e }),
          filterValue: "Dryness & Dehydration",
        },
        {
          label: "Dullness",
          slug: "dullness",
          id: "dullness",
          icon: (e) => (0, l.jsx)(n.SkinDullnessIcon, { width: e, height: e }),
          filterValue: "Dullness",
        },
        {
          label: "Fine Lines & Wrinkles",
          slug: "fine-lines-and-wrinkles",
          id: "finelineswrinkles",
          icon: (e) => (0, l.jsx)(n.SkinWrinklesIcon, { width: e, height: e }),
          filterValue: "Fine Lines & Wrinkles",
        },
        {
          label: "Hyperpigmentation",
          slug: "hyperpigmentation",
          id: "hyperpigmentation",
          icon: (e) =>
            (0, l.jsx)(n.SkinHyperpigmentationIcon, { width: e, height: e }),
          filterValue: "Hyperpigmentation",
        },
        {
          label: "Lack of Firmness",
          slug: "lack-of-firmness",
          id: "lackoffirmness",
          icon: (e) =>
            (0, l.jsx)(n.SkinLackOfFirmnessIcon, { width: e, height: e }),
          filterValue: "Lack of Firmness",
        },
        {
          label: "Oiliness",
          slug: "oiliness",
          id: "oiliness",
          icon: (e) => (0, l.jsx)(n.SkinOilinessIcon, { width: e, height: e }),
          filterValue: "Oiliness",
        },
        {
          label: "Pores & Blackheads",
          slug: "pores-and-blackheads",
          id: "poresblackheads",
          icon: (e) => (0, l.jsx)(n.SkinPoresIcon, { width: e, height: e }),
          filterValue: "Pores & Blackheads",
        },
        {
          label: "Redness",
          slug: "redness",
          id: "redness",
          icon: (e) => (0, l.jsx)(n.SkinRednessIcon, { width: e, height: e }),
          filterValue: "Redness",
        },
        {
          label: "Uneven Skin Tone & Texture",
          slug: "uneven-skin-tone-and-texture",
          id: "unevenskintonetexture",
          icon: (e) =>
            (0, l.jsx)(n.SkinUnevenSkinToneIcon, { width: e, height: e }),
          filterValue: "Uneven Skin Tone & Texture",
        },
      ];
    },
    67582: (e, t, i) => {
      i.d(t, { O: () => n, f: () => l });
      var l = (function (e) {
        return (
          (e.REPAIR_PROTECT = "repairprotect"),
          (e.THINNING_LOSS = "thinningloss"),
          (e.SHINE = "shine"),
          (e.CURL_CARE = "curlcare"),
          (e.FRIZZ_CONTROL = "frizzcontrol"),
          (e.COLOUR_RADIANCE = "colourradiance"),
          (e.CLEAR_SCALP = "clearscalp"),
          (e.OIL_CONTROL = "oilcontrol"),
          (e.VOLUME = "volume"),
          (e.TANGLING = "tangling"),
          e
        );
      })({});
      let n = [
        {
          label: "Clear Scalp",
          slug: "clear-scalp",
          id: "clearscalp",
          filterValue: "Clear Scalp",
        },
        {
          label: "Colour Radiance",
          slug: "colour-radiance",
          id: "colourradiance",
          filterValue: "Colour Radiance",
        },
        {
          label: "Curl Care",
          slug: "curl-care",
          id: "curlcare",
          filterValue: "Curl Care",
        },
        {
          label: "Detangle",
          slug: "detangle",
          id: "tangling",
          filterValue: "Detangling",
        },
        {
          label: "Frizz Control",
          slug: "frizz-control",
          id: "frizzcontrol",
          filterValue: "Frizz Control",
        },
        {
          label: "Oil Control",
          slug: "oil-control",
          id: "oilcontrol",
          filterValue: "Oil Control",
        },
        {
          label: "Repair & Protect",
          slug: "repair-and-protect",
          id: "repairprotect",
          filterValue: "Repair & Protect",
        },
        { label: "Shine", slug: "shine", id: "shine", filterValue: "Shine" },
        {
          label: "Thinning & Loss",
          slug: "thinning-and-loss",
          id: "thinningloss",
          filterValue: "Thinning & Loss",
        },
        {
          label: "Volume",
          slug: "haircare-hair-concern-volume",
          id: "volume",
          filterValue: "Volume",
        },
      ];
    },
    67862: (e, t, i) => {
      i.d(t, { E: () => G });
      var l = i(94799),
        n = i(4306),
        r = i(20381),
        a = i(29392),
        o = i(36008),
        s = i.n(o),
        d = i(27357),
        c = i(34023),
        u = i(92616),
        h = i(17422),
        x = i(57184),
        p = i(24631),
        g = i(88655),
        f = i(57948),
        v = i(15231),
        b = i(57403),
        m = i(53881),
        k = i(98814),
        y = i(13331),
        S = i(66572),
        j = i(65329),
        C = i(34916),
        w = i(39693);
      let L = (0, y.chakra)(j.P.li, { shouldForwardProp: C.S }),
        I = (e) => {
          let { storyArray: t, hasPlayIcon: i } = e;
          return (0, l.jsxs)(S.List, {
            "aria-label": "Story card stack",
            "data-testid": "Story card stack",
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "base",
            children: [
              t.map((e, i) =>
                (0, l.jsx)(
                  L,
                  {
                    "aria-label": "".concat(e.coverTitle, " Story"),
                    "data-testid": "Story",
                    bgImage: "https:".concat(e.coverImgSrc),
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "primary.white",
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    borderRadius: "base",
                    transformOrigin: "center right",
                    animate: {
                      right: -(4 * i),
                      scale: 1 - 0.1 * i,
                      zIndex: t.length - i,
                    },
                    transition: { duration: 0.35 },
                  },
                  e.coverTitle,
                ),
              ),
              i &&
                (0, l.jsx)(n.Box, {
                  position: "absolute",
                  bottom: 2,
                  left: 2,
                  zIndex: 2,
                  "data-testid": "play-button",
                  children: (0, l.jsx)(w.PlayIcon, { width: 8, height: 8 }),
                }),
            ],
          });
        },
        T = (e) => {
          let { stories: t, title: i, onClick: r } = e,
            a = (0, k.useStyleConfig)("StaticContainerContent");
          return (0, l.jsxs)(n.Box, {
            __css: a,
            "aria-label": r ? "View stories" : void 0,
            as: r ? "button" : void 0,
            aspectRatio: 0.594,
            height: [83, null, 116],
            display: "flex",
            flexDirection: "column",
            paddingTop: 4,
            paddingLeft: 4,
            paddingRight: 4,
            backgroundColor: "primary.black.10",
            borderRadius: "lg",
            position: "relative",
            onClick: r,
            children: [
              (0, l.jsx)(I, { storyArray: t, hasPlayIcon: !0 }),
              (0, l.jsx)(n.Box, {
                textOverflow: "ellipsis",
                color: "primary.white",
                textStyle: "function.caption.medium",
                paddingTop: 4,
                paddingBottom: 4,
                textAlign: "left",
                children: i,
              }),
            ],
          });
        };
      var _ = i(77909),
        R = i(89136),
        E = i(38196),
        B = i(64525);
      let O = (e, t) => ((e % t) + t) % t;
      var A = i(49606),
        D = i(59573),
        N = i(52451);
      let V = (e) => {
        let { storyArray: t, onClick: i } = e,
          r = (0, k.useStyleConfig)("StoryPaginationContainer"),
          [a, o] = (0, c.useState)(t),
          [s, d] = (0, c.useState)(0),
          u = () => {
            o((0, B.p)(a, 0, a.length - 1)), d((e) => O(e + 1, a.length));
          },
          h = () => {
            o((0, B.p)(a, a.length - 1, 0)), d((e) => O(e - 1, a.length));
          };
        return (
          (0, c.useEffect)(() => {
            o(t);
          }, [t]),
          (0, l.jsxs)(n.Box, {
            __css: r,
            onClick: () => i && i(s),
            as: i ? "button" : void 0,
            textAlign: "left",
            height: [83, null, 116],
            aspectRatio: 0.594,
            flexShrink: 0,
            children: [
              (0, l.jsxs)(_.HStack, {
                height: 6,
                children: [
                  (0, l.jsx)(w.LearningIcon, { width: 6, height: 6 }),
                  (0, l.jsx)(R.Text, {
                    textStyle: "heading.h5.bold",
                    children: "Learn",
                  }),
                ],
              }),
              (0, l.jsx)(n.Box, {
                width: "100%",
                flexGrow: 1,
                children: (0, l.jsx)(I, { storyArray: a }),
              }),
              (0, l.jsxs)(E.Stack, {
                overflow: "hidden",
                height: 32,
                gap: 4,
                children: [
                  (0, l.jsx)(R.Text, {
                    textStyle: "body.semibold",
                    children: a[0].coverTitle,
                  }),
                  a[0].description &&
                    (0, l.jsx)(R.Text, {
                      textStyle: "function.caption.small",
                      children: (0, l.jsx)(A.CmsRichText, {
                        richData: a[0].description,
                      }),
                    }),
                ],
              }),
              (0, l.jsxs)(n.Box, {
                display: "flex",
                justifyContent: "space-between",
                height: 14,
                width: "100%",
                children: [
                  (0, l.jsx)(D.L, {
                    ariaLabel: "Previous story",
                    "data-testid": "Previous story",
                    direction: "left",
                    variant: "whiteOutlineArrow",
                    size: 14,
                    onClick: (e) => {
                      e.stopPropagation(), h();
                    },
                  }),
                  (0, l.jsx)(N.K, {
                    variant: "dark",
                    pageCount: a.length,
                    currentPageIndex: s,
                  }),
                  (0, l.jsx)(D.L, {
                    ariaLabel: "Next story",
                    "data-testid": "Next story",
                    direction: "right",
                    variant: "whiteOutlineArrow",
                    size: 14,
                    onClick: (e) => {
                      e.stopPropagation(), u();
                    },
                  }),
                ],
              }),
            ],
          })
        );
      };
      var P = i(99313);
      let z = (e) => {
          let { product: t, analytics: i, cardIndex: r } = e;
          return (0, l.jsx)(
            n.Box,
            {
              h: "auto",
              aspectRatio: "auto",
              w: { base: 56, lg: 57 },
              flex: "0 0 auto",
              children: (0, l.jsx)(b.A, {
                item: t,
                index: r,
                orientation: b.y.VERTICAL,
                analytics: i,
              }),
            },
            "product-".concat(t.id, "-index-").concat(r),
          );
        },
        G = (e) => {
          var t;
          let {
              productCards: i,
              expandXScrollWidth: o,
              linkRef: b,
              children: k,
              linkAriaLabel: y,
              stories: S,
              analytics: j,
              showNavButtons: C = !0,
              ProductCard: w = z,
              isLoading: L,
              onProductCardClick: I,
            } = e,
            _ = (0, c.useRef)(null),
            R = (0, d.useRouter)(),
            { sendAnalyticsEvent: E } = (0, x.s)(),
            B = (0, f.l)(),
            {
              scroll: O,
              canScrollLeft: A,
              canScrollRight: D,
            } = (0, g.k)(_, {
              scrollTargetOffset:
                (null !== (t = (0, r.useBreakpointValue)([-25, null, -40])) &&
                void 0 !== t
                  ? t
                  : 0) +
                (null != o ? o : 0) * 2,
            }),
            N = () => {
              let e = { ...j, click_location: "list", click_name: "see all" };
              E(u.m3.navigationClicked.bind(u.m3), h.s.NAVIGATION_CLICKED, e);
            };
          return (0, l.jsxs)(n.Box, {
            display: "flex",
            flexDir: "column",
            children: [
              (0, l.jsxs)(n.Box, {
                display: "flex",
                columnGap: { base: 2, md: 4 },
                overflowX: "auto",
                paddingBottom: 4,
                marginBottom: 2,
                ref: _,
                ...(void 0 !== o && {
                  marginLeft: -o,
                  paddingLeft: o,
                  marginRight: -o,
                  paddingRight: o,
                }),
                children: [
                  (() => {
                    if (null == S ? void 0 : S.length) {
                      if (B || 1 === S.length) {
                        var e;
                        let t = (0, l.jsx)(T, {
                          stories: S.slice(0, 1),
                          title: S[0].coverTitle,
                          onClick: () => {},
                        });
                        return (0, l.jsx)(a.LinkBox, {
                          as: s(),
                          href: "/learn/".concat(
                            null == S
                              ? void 0
                              : null === (e = S[0]) || void 0 === e
                                ? void 0
                                : e.slug,
                          ),
                          children: t,
                        });
                      }
                      return (0, l.jsx)(V, {
                        storyArray: S,
                        onClick: (e) => R.push("/learn/".concat(S[e].slug)),
                      });
                    }
                  })(),
                  L &&
                    [...Array(6)].map((e, t) =>
                      (0, l.jsx)(
                        n.Box,
                        { width: 275, children: (0, l.jsx)(m.D, {}) },
                        t,
                      ),
                    ),
                  !L &&
                    i.map((e, t) => {
                      let i = {
                        ...j,
                        products: [(0, p.n)(e, { index: t })],
                        care_type: e.productType,
                      };
                      return (0, l.jsx)(
                        w,
                        {
                          product: e,
                          analytics: i,
                          onClick: () => (null == I ? void 0 : I(e.id)),
                          cardIndex: t,
                        },
                        "scroll-container-product-card-" + e.id + "-" + t,
                      );
                    }),
                  k &&
                    (0, l.jsx)(n.Box, {
                      height: [83, null, 116],
                      aspectRatio: 0.594,
                      children: k,
                    }),
                ],
              }),
              C &&
                (0, l.jsxs)(n.Box, {
                  display: "flex",
                  justifyContent: "space-between",
                  children: [
                    (0, l.jsx)(P._, {
                      onClick: O,
                      disableLeft: !A,
                      disableRight: !D,
                      isAnimated: !1,
                    }),
                    b
                      ? (0, l.jsx)(v.ButtonLink, {
                          href: b,
                          "aria-label": y,
                          onClick: () => N(),
                          variant: "secondary",
                          size: "sm",
                          children: "See all",
                        })
                      : null,
                  ],
                }),
            ],
          });
        };
    },
    83883: (e, t, i) => {
      i.d(t, { I: () => d });
      var l = i(94799),
        n = i(89136),
        r = i(1076),
        a = i(8822),
        o = i(97001),
        s = i(57403);
      let d = (e) => {
        let { products: t, title: i, isLoading: d } = e;
        return (0, l.jsxs)(o.q, {
          loading: d,
          contentWidth: "100%",
          contentHeight: 60,
          children: [
            (0, l.jsx)(n.Text, { textStyle: "body.semibold", children: i }),
            (0, l.jsx)(r.Grid, {
              columnGap: 4,
              width: "100%",
              templateColumns: { base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" },
              children: t.map((e, t) =>
                (0, l.jsx)(
                  a.GridItem,
                  {
                    borderTopWidth: {
                      base: t > 0 ? "1px" : "0",
                      md: t >= 2 ? "1px" : "0",
                    },
                    borderColor: "primary.warmGrey.80",
                    w: "100%",
                    pt: { base: 4 * (t > 0), md: 4 * (t >= 2) },
                    pb: 4,
                    children: (0, l.jsx)(
                      s.A,
                      {
                        orientation: s.y.HORIZONTAL,
                        item: e,
                        index: t,
                        config: { fullWidth: !0, canEditQuantity: !0 },
                        analytics: { click_location: "Product thumbnail" },
                      },
                      e.id,
                    ),
                  },
                  "".concat(e.name, "-item"),
                ),
              ),
            }),
          ],
        });
      };
    },
    84145: (e, t, i) => {
      i.d(t, { E: () => m });
      var l = i(94799),
        n = i(4306),
        r = i(31634),
        a = i(89136),
        o = i(27357),
        s = i(34023),
        d = i(92616),
        c = i(17422),
        u = i(57184),
        h = i(85313),
        x = i(39693),
        p = i(63184),
        g = i(93869),
        f = i(67862),
        v = i(93367);
      let b = (e) => {
          let {
            numberOfSuperMatches: t,
            matchText: i = "Super Matches found in this list",
          } = e;
          return (0, l.jsxs)(n.Box, {
            borderRadius: "base",
            bgGradient: v.K.bdnaMatch,
            alignItems: "center",
            gap: 0.5,
            padding: "4px 8px 4px 4px",
            display: "inline-flex",
            children: [
              (0, l.jsx)(n.Box, {
                color: "primary.white",
                display: "flex",
                children: (0, l.jsx)(x.BDNASparkleIcon, {
                  width: 3,
                  height: 3,
                }),
              }),
              (0, l.jsx)(a.Text, {
                textStyle: "function.text.medium",
                textColor: "primary.white",
                children: "".concat(t, " ").concat(i),
              }),
            ],
          });
        },
        m = (e) => {
          var t, i;
          let {
              analytics: v,
              description: m,
              isLoading: k,
              linkRef: y,
              numberOfSuperMatches: S,
              onSwapClick: j,
              products: C,
              stories: w,
              title: L,
            } = e,
            I = (0, s.useRef)(null),
            T = (0, h.C)(I),
            { sendAnalyticsEvent: _ } = (0, u.s)(),
            R = (0, o.usePathname)().split("/"),
            E = R[R.length - 1],
            B = (e) => {
              if (s.isValidElement(e)) {
                var t;
                let i =
                  null !== (t = null == e ? void 0 : e.props) && void 0 !== t
                    ? t
                    : {};
                return i.firstTitleText + i.secondTitleText;
              }
              return "string" == typeof e ? e : "Noli Edits";
            };
          if (
            ((0, s.useEffect)(() => {
              if ("home" === E && T && (null == C ? void 0 : C.length) > 0) {
                let e = {
                  page_category: "home page",
                  page_subcategory_1: B(L),
                  products: C.map((e, t) => (0, p.b)(e, { position: t + 1 })),
                };
                _(
                  d.m3.productListViewed.bind(d.m3),
                  c.s.PRODUCT_LIST_VIEWED,
                  e,
                );
              }
            }, [C, T]),
            k || (null == C ? void 0 : C.length))
          )
            return (0, l.jsxs)(n.Box, {
              display: "flex",
              flexDirection: "column",
              gap: 6,
              ref: I,
              children: [
                (null !== (t = null != L ? L : m) && void 0 !== t ? t : j)
                  ? (0, l.jsxs)(r.Flex, {
                      justifyContent: "space-between",
                      alignItems: "center",
                      children: [
                        (0, l.jsxs)(n.Box, {
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          children: [
                            L
                              ? (0, l.jsx)(a.Text, {
                                  as: "h4",
                                  textStyle: "heading.h6.bold",
                                  children: L,
                                })
                              : null,
                            m
                              ? (0, l.jsx)(a.Text, {
                                  as: "h5",
                                  textStyle: "body",
                                  children: m,
                                })
                              : m,
                          ],
                        }),
                        j &&
                          (0, l.jsx)(g.$, {
                            ariaLabel: "Swap for another list",
                            "data-testid": "Swap for another list",
                            onClick: () => {
                              if (v) {
                                var e;
                                let t = {
                                  ...v,
                                  click_location: "list",
                                  click_name: "swap list",
                                  click_subcategory_1:
                                    null !==
                                      (e =
                                        null == v
                                          ? void 0
                                          : v.click_subcategory_1) &&
                                    void 0 !== e
                                      ? e
                                      : L,
                                };
                                _(
                                  d.m3.cardsClicked.bind(d.m3),
                                  c.s.CARDS_CLICKED,
                                  t,
                                );
                              }
                              j();
                            },
                            pointerEvents: "auto",
                            size: "lg",
                            marginLeft: 4,
                            variant: "tertiary",
                            leftIcon: (0, l.jsx)(x.SwapIcon, {
                              height: 6,
                              width: 6,
                            }),
                            children: "Swap list",
                          }),
                      ],
                    })
                  : null,
                S && S > 2
                  ? (0, l.jsx)(n.Box, {
                      paddingBottom: 6,
                      children: (0, l.jsx)(b, { numberOfSuperMatches: S }),
                    })
                  : null,
                (0, l.jsx)(f.E, {
                  analytics: {
                    ...v,
                    click_location: "list",
                    click_subcategory_1:
                      null !==
                        (i = null == v ? void 0 : v.click_subcategory_1) &&
                      void 0 !== i
                        ? i
                        : L,
                  },
                  isLoading: k,
                  productCards: null != C ? C : [],
                  linkAriaLabel: "See all",
                  "data-testid": "See all",
                  linkRef: y,
                  stories: w,
                }),
              ],
            });
        };
    },
    85313: (e, t, i) => {
      i.d(t, { C: () => n });
      var l = i(34023);
      let n = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { threshold: 0.75 },
          [i, n] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            let i = new IntersectionObserver((e) => {
              let [t] = e;
              n(t.isIntersecting);
            }, t);
            return (
              e.current && i.observe(e.current),
              () => {
                e.current && i.unobserve(e.current);
              }
            );
          }, [e, t]),
          i
        );
      };
    },
    86757: (e, t, i) => {
      i.d(t, { w: () => u });
      var l = i(34023),
        n = i(24689),
        r = i(81352),
        a = i(96543),
        o = i(42619),
        s = i(59646);
      let d = (e, t) => e.sort((e, i) => t.indexOf(e.id) - t.indexOf(i.id)),
        c = function (e, t) {
          let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            l = [];
          for (; e.length && (!t || l.length < t); ) {
            let t = e.pop();
            if (!t) continue;
            let n = t.split("/"),
              r = n[2],
              a = i.includes(r);
            "products" === n[1].toLowerCase() &&
              r &&
              -1 === l.indexOf(r) &&
              !a &&
              l.push(r);
          }
          return l;
        },
        u = (e, t) => {
          let { limit: i, currentProductId: u } = e,
            { getHistory: h } = (0, s.Z)(),
            { cart: x } = (0, r.B_)(),
            p = (0, l.useMemo)(() => {
              var e;
              return [
                ...(u ? [u] : []),
                ...(null !==
                  (e = null == x ? void 0 : x.items.map((e) => e.product.id)) &&
                void 0 !== e
                  ? e
                  : []),
              ];
            }, [u, null == x ? void 0 : x.items]),
            g = (0, l.useMemo)(() => c(h(), i, p), [h, i, p]),
            f = g.length >= 2,
            v = (0, a.ZU)(
              {
                productIds: g,
                size: i,
                productTypes: [n.ch.SKINCARE, n.ch.HAIRCARE],
              },
              { enabled: f && t, select: (e) => d(e.results, g) },
            );
          return (
            (0, o.w)({ error: v.error }),
            { ...v, productIds: g, enoughProductIds: f }
          );
        };
    },
    88655: (e, t, i) => {
      i.d(t, { k: () => n });
      var l = i(34023);
      let n = (e, t) => {
        let [i, n] = (0, l.useState)(!1),
          [r, a] = (0, l.useState)(!0);
        (0, l.useLayoutEffect)(() => {
          var t;
          function i() {
            if (e.current) {
              var t, i;
              let l = e.current.scrollLeft,
                r =
                  null === (t = e.current) || void 0 === t
                    ? void 0
                    : t.clientWidth,
                o =
                  null === (i = e.current) || void 0 === i
                    ? void 0
                    : i.scrollWidth;
              n(l > 0), a(l + r < o);
            }
          }
          i();
          let l = new ResizeObserver(i);
          e.current && l.observe(e.current),
            null === (t = e.current) ||
              void 0 === t ||
              t.addEventListener("scroll", i);
          let r = e.current;
          return () => {
            null == r || r.removeEventListener("scroll", i), l.disconnect();
          };
        }, [e]);
        let o = () => {
          var t, i, l, n, r, a, o, s;
          let d =
            null === (t = e.current) || void 0 === t
              ? void 0
              : t.children[0].clientWidth;
          if (
            !(null === (i = e.current) || void 0 === i
              ? void 0
              : i.children[1].clientWidth) ||
            !d
          )
            return [];
          let c = [],
            u =
              null !==
                (r =
                  null === (l = e.current) || void 0 === l
                    ? void 0
                    : l.children[0].getBoundingClientRect().x) && void 0 !== r
                ? r
                : 0;
          for (
            let t = 0;
            t <
            (null !==
              (a =
                null === (n = e.current) || void 0 === n
                  ? void 0
                  : n.children.length) && void 0 !== a
              ? a
              : 0);
            t++
          )
            c.push(
              (null !==
                (s =
                  null === (o = e.current) || void 0 === o
                    ? void 0
                    : o.children[t].getBoundingClientRect().x) && void 0 !== s
                ? s
                : 0) - u,
            );
          return c;
        };
        return {
          scroll: (i) => {
            var l, n;
            let r;
            let a = e.current;
            if (!a) return;
            let s = o(),
              d = a.scrollLeft,
              c = a.clientWidth,
              u = a.scrollWidth,
              h = null == s ? void 0 : s.findIndex((e) => e + 1 >= d),
              x = Math.max(
                (null == s
                  ? void 0
                  : s.findLastIndex(
                      (e, t) => d + c + 1 >= e + a.children[t].clientWidth,
                    )) -
                  h +
                  1,
                1,
              ),
              p = "left" === i ? h - x : h + x;
            if (p <= 0) r = 0;
            else if (p >= s.length) r = u;
            else {
              let e =
                0 !== p && null !== (n = t.scrollTargetOffset) && void 0 !== n
                  ? n
                  : 0;
              r = s[p] + e;
            }
            null === (l = e.current) ||
              void 0 === l ||
              l.scrollTo({ left: r, behavior: "smooth" });
          },
          canScrollLeft: i,
          canScrollRight: r,
        };
      };
    },
    99313: (e, t, i) => {
      i.d(t, { _: () => a });
      var l = i(94799),
        n = i(4306),
        r = i(59573);
      let a = (e) => {
        let { isAnimated: t, onClick: i, disableLeft: a, disableRight: o } = e;
        return (0, l.jsxs)(n.Box, {
          display: "flex",
          width: 28,
          justifyContent: "space-between",
          children: [
            (0, l.jsx)(r.L, {
              direction: "left",
              variant: "blackOutlineArrow",
              size: 12,
              ariaLabel: "Scroll left",
              "data-testid": "Scroll left",
              isAnimated: t,
              isDisabled: a,
              onClick: () => i("left"),
            }),
            (0, l.jsx)(r.L, {
              direction: "right",
              variant: "blackOutlineArrow",
              size: 12,
              ariaLabel: "Scroll right",
              "data-testid": "Scroll right",
              isAnimated: t,
              isDisabled: o,
              onClick: () => i("right"),
            }),
          ],
        });
      };
    },
  },
]);
