"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5738],
  {
    133: (e, t, a) => {
      a.d(t, { RT: () => r.R, zY: () => i.z });
      var r = a(40440),
        i = a(81563);
      a(94799),
        a(34023),
        a(92616),
        a(17422),
        a(57184),
        a(82536),
        a(39693),
        a(8013),
        a(38065),
        a(80880);
    },
    2037: (e, t, a) => {
      a.d(t, { A: () => r.A });
      var r = a(30695);
    },
    2906: (e, t, a) => {
      a.d(t, { M: () => i, P: () => r });
      var r = (function (e) {
          return (e.AddItem = "add item"), (e.RemoveItem = "remove item"), e;
        })({}),
        i = (function (e) {
          return (
            (e.QUICK_VIEW = "quickView"), (e.PRODUCT_DETAIL_PAGE = "pdp"), e
          );
        })({});
    },
    4639: (e, t, a) => {
      a.d(t, { p: () => o });
      var r = a(24689),
        i = a(58716),
        n = a(73261);
      let l = () => ({
          [r.ch.SKINCARE]: {
            personalisationEnabled: !0,
            activeIngredientsEnabled: !0,
            quickFiltersEnabled: !0,
            breadcrumbsEnabled: !0,
          },
          [r.ch.HAIRCARE]: {
            personalisationEnabled: (0, i.w)(n.T.HAIRCARE_PERSONALISATION),
            activeIngredientsEnabled: !1,
            quickFiltersEnabled: !1,
            breadcrumbsEnabled: !1,
          },
          [r.ch.SOFT_BUNDLE]: {
            personalisationEnabled: !1,
            activeIngredientsEnabled: !1,
            quickFiltersEnabled: !1,
            breadcrumbsEnabled: !1,
          },
          [r.ch.ROUTINE]: {
            personalisationEnabled: !1,
            activeIngredientsEnabled: !1,
            quickFiltersEnabled: !1,
            breadcrumbsEnabled: !1,
          },
          default: {
            personalisationEnabled: !1,
            activeIngredientsEnabled: !1,
            quickFiltersEnabled: !1,
            breadcrumbsEnabled: !1,
          },
        }),
        o = (e) => l()[null != e ? e : "default"];
    },
    5131: (e, t, a) => {
      a.d(t, { t: () => A });
      var r = a(50692),
        i = a(34023),
        n = a(37216),
        l = a(24689),
        o = a(39693),
        s = (function (e) {
          return (
            (e.SKIN_SENSITIVITY = "skin_sensitivity"),
            (e.SKIN_TYPE = "skin_type"),
            (e.AGE_BRACKET = "age_bracket"),
            (e.SCENT = "scent"),
            (e.GENDER = "gender"),
            (e.SKIN_FEEL = "skin_feel"),
            (e.HAIR_TEXTURE = "hair_texture"),
            (e.SCALP_TYPE = "scalp_type"),
            (e.SCALP_SENSITIVITY = "scalp_sensitivity"),
            (e.LENGTHS_FEEL = "lengths_feel"),
            e
          );
        })({}),
        d = a(79240);
      let c = (e) => {
          let { explanationAttributeKey: t, explanationAttributeValueKey: a } =
            e;
          switch (t) {
            case l.Np.SKIN_TYPE:
              return (0, d.fc)(a);
            case l.Np.SKIN_SENSITIVITY:
              return o.SkinSensitivityIcon;
            default:
              var r;
              return null !== (r = (0, d.vy)(a)) && void 0 !== r
                ? r
                : o.SkinOilinessIcon;
          }
        },
        u = (e) => {
          let t = 1;
          return e.explanations.reduce(
            (e, a) => {
              let r = () => {
                  let e = "concern".concat(t);
                  return (t += 1), e;
                },
                i = (() => {
                  let e =
                    a.explanation_attribute_value.explanation_attribute.key;
                  switch (!0) {
                    case e === s.SKIN_SENSITIVITY:
                      return l.Np.SKIN_SENSITIVITY;
                    case e === s.SKIN_TYPE:
                      return l.Np.SKIN_TYPE;
                    case "budget" === e:
                      return l.Np.BUDGET;
                    case e.includes("concern"):
                      return r();
                    case e == s.HAIR_TEXTURE:
                      return l.Np.HAIR_TEXTURE;
                    case e == s.SCALP_TYPE:
                      return l.Np.SCALP_TYPE;
                    case e == s.SCALP_SENSITIVITY:
                      return l.Np.SCALP_SENSITIVITY;
                    case e == s.LENGTHS_FEEL:
                      return l.Np.LENGTHS_FEEL;
                    default:
                      return;
                  }
                })();
              if (i) {
                var n;
                let t = {
                  explanationAttributeValue: a.explanation_attribute_value,
                  key: i,
                  title:
                    null !== (n = a.explanation_attribute_value.label) &&
                    void 0 !== n
                      ? n
                      : i,
                  text: a.verbatim,
                  match: a.match,
                  visible: !0,
                  icon: c({
                    explanationAttributeKey: i,
                    explanationAttributeValueKey:
                      a.explanation_attribute_value.key,
                  }),
                };
                e.explanation.attributes[i] = t;
              }
              return e;
            },
            { explanation: { attributes: {} } },
          );
        };
      var h = a(56138),
        m = a(63598),
        p = a(69538);
      let g = h.v;
      "true" === p.env.NEXT_PUBLIC_USE_LOCAL_PERSO && (g = m.L);
      class v extends g {
        static getInstance() {
          return v.instance || (v.instance = new v()), v.instance;
        }
        async getExplanation(e) {
          let { accessToken: t, payload: a } = e;
          return u(
            await this.post(
              "".concat("/personalisation/api/explanations", "/simple"),
              a,
              t,
            ),
          );
        }
      }
      let y = v.getInstance();
      var b = a(80807);
      let x = { recommended: "sensitive" },
        S = (e, t) => ({
          key: e in x ? x[e] : e,
          explanation_attribute: { key: t },
        }),
        I = (e, t) => {
          let a = [];
          for (let [r, i] of Object.entries(t)) {
            let t = e[r];
            Array.isArray(t)
              ? a.push(...t.map((e) => S(e, i)))
              : t && a.push(S(t, i));
          }
          return a;
        },
        C = (e, t) =>
          Object.entries(t).flatMap((t) => {
            let [a, r] = t,
              i = e[a];
            return void 0 === i
              ? []
              : Array.isArray(i)
                ? i.map((e) => S(e, r))
                : "string" == typeof i
                  ? S(i, r)
                  : Object.keys(i).map((e) => S(e, r));
          }),
        f = {
          hairConcern: "hair_concern",
          budget: "budget",
          hairTexture: "hair_texture",
          scalpSensitivity: "scalp_sensitivity",
          scalpType: "scalp_type",
          lengthsFeel: "lengths_feel",
        },
        k = {
          skinConcern: "skin_concern",
          skinSensitivity: "skin_sensitivity",
          skinType: "skin_type",
          budget: "budget",
        },
        E = (e) => I(e, f),
        T = (e) => I(e, k),
        j = (e, t) => {
          if (!t) return [];
          switch (e) {
            case l.ch.SKINCARE:
              return T(t);
            case l.ch.HAIRCARE:
              return E(t);
            default:
              return [...E(t), ...T(t)];
          }
        },
        w = (e, t) => {
          if (!(null == t ? void 0 : t.masterVariant)) return [];
          let a = t.masterVariant;
          return [
            ...(e !== l.ch.SKINCARE && e
              ? []
              : C(a, {
                  concernkeys: "skin_concern",
                  skinsensitivitykeys: "skin_sensitivity",
                  skintypekeys: "skin_type",
                })),
            ...(e !== l.ch.HAIRCARE && e
              ? []
              : C(a, {
                  concernkeys: "hair_concern",
                  hairtexture: "hair_texture",
                  scalptype: "scalp_type",
                  scalpsensitivity: "scalp_sensitivity",
                  lengthsfeel: "lengths_feel",
                })),
          ];
        },
        A = (e, t) => {
          let { productId: a } = e,
            { data: l } = (0, n.L)(a, { includeAllVariants: !0 }),
            o = null == l ? void 0 : l.productType,
            {
              data: { preferences: s },
            } = (0, b.W)(o),
            d = (0, i.useMemo)(() => j(o, s), [o, s]),
            c = (0, i.useMemo)(() => {
              var e, t, a;
              if (!l) return [];
              let { masterVariant: r } = l,
                i =
                  null !==
                    (t =
                      null === (e = r.activeingredientswithbenefits) ||
                      void 0 === e
                        ? void 0
                        : e.map(
                            (e) =>
                              e.activeingredientswithbenefits_activeingredients_key,
                          )) && void 0 !== t
                    ? t
                    : [];
              return [
                ...i,
                ...(null !== (a = r.allactiveingredientkeys) && void 0 !== a
                  ? a
                  : []
                ).filter((e) => !i.includes(e)),
              ].map((e) => ({
                key: e,
                product_attribute: { key: "active_ingredient" },
              }));
            }, [l]),
            u = (0, i.useMemo)(() => w(o, l), [o, l]),
            h = (0, i.useMemo)(
              () =>
                !!(
                  (null == t ? void 0 : t.enabled) !== !1 &&
                  d.length &&
                  c.length
                ),
              [t, d, c],
            );
          return (0, r.useQuery)({
            ...t,
            queryKey: ["useGetExplanation", u, d, c, s],
            queryFn: () =>
              y.getExplanation({
                payload: {
                  known_explanation_attribute_values: u,
                  explanation_attribute_values: d,
                  product_attribute_values: c,
                },
              }),
            enabled: h,
          });
        };
    },
    6744: (e, t, a) => {
      a.d(t, { a: () => r.a });
      var r = a(76581);
    },
    8013: (e, t, a) => {
      a.d(t, { v: () => E });
      var r = a(94799),
        i = a(16774),
        n = a(11425),
        l = a(75093),
        o = a(52360),
        s = a(16581),
        d = a(31634),
        c = a(89136),
        u = a(4306),
        h = a(27357),
        m = a(34023),
        p = a(92616),
        g = a(17422),
        v = a(57184),
        y = a(93277),
        b = a(82536),
        x = a(5131),
        S = a(39693),
        I = a(93869),
        C = a(21815),
        f = a(28912);
      let k = (e) => {
          let {
              productId: t,
              productUrl: a,
              brandName: k,
              productDescription: E,
              score: T,
              addToCartPayload: j,
              opened: w = !1,
              onClose: A = () => {},
              setMatchScoreLoading: _,
              addToCartAnalytics: R,
              price: L,
              strikePrice: N,
              isOnStock: D,
            } = e,
            P = (0, h.useRouter)(),
            F = (0, y.iA)(),
            { user: B } = (0, b.A)(),
            { sendAnalyticsEvent: O } = (0, v.s)(),
            M = null == B ? void 0 : B.segmentId,
            {
              data: U,
              error: V,
              isLoading: G,
              isPending: H,
            } = (0, x.t)({ productId: t });
          if (
            ((0, m.useEffect)(() => {
              G ||
                H ||
                (!V && U) ||
                (null == A || A(),
                F({
                  type: y.P7.Add,
                  alertKey: "explanation-not-loaded-error",
                  message:
                    "Error Loading explanation details, something has gone wrong.",
                  variant: y.iC.Error,
                }));
            }, [G, V, U, F, H, A]),
            (0, m.useEffect)(() => {
              null == _ || _(G || H);
            }, [G, H, _]),
            G || H)
          )
            return;
          let z = (null == B ? void 0 : B.firstName)
            ? "Hey ".concat(B.firstName)
            : "Hey";
          return (0, r.jsxs)(i.Modal, {
            onClose: A,
            isOpen: w,
            isCentered: !0,
            scrollBehavior: "inside",
            variant: "matchScore",
            children: [
              (0, r.jsx)(n.ModalOverlay, {}),
              (0, r.jsxs)(l.ModalContent, {
                children: [
                  (0, r.jsx)(o.ModalCloseButton, {
                    zIndex: "popover",
                    _focusVisible: { border: "none" },
                  }),
                  (0, r.jsxs)(s.ModalBody, {
                    children: [
                      (0, r.jsxs)(d.Flex, {
                        color: "primary.white",
                        alignItems: "center",
                        gap: 2,
                        children: [
                          (0, r.jsx)(S.EyeIcon, { height: 6, width: 6 }),
                          (0, r.jsx)(c.Text, {
                            textStyle: "body.semibold",
                            children: "Match explained",
                          }),
                        ],
                      }),
                      (0, r.jsxs)(c.Text, {
                        textStyle: "heading.h7.bold",
                        color: "primary.black.70",
                        marginTop: 8,
                        children: [
                          z,
                          ", here is your match score breakdown on",
                          " ",
                          (0, r.jsxs)(c.Text, {
                            as: "span",
                            color: "primary.white",
                            children: [k, " ", E, "."],
                          }),
                        ],
                      }),
                      (0, r.jsxs)(u.Box, {
                        marginTop: { base: 8, md: 10 },
                        children: [
                          !!(null == U ? void 0 : U.explanation) &&
                            (0, r.jsx)(C.K, {
                              sendMatchScoreBreakdownAnalyticsInfos: (e, t) => {
                                if (R) {
                                  let a = {
                                    click_location: "Match explained",
                                    click_name: e,
                                    click_action_category: t,
                                    ...R,
                                  };
                                  O(
                                    null === p.m3 || void 0 === p.m3
                                      ? void 0
                                      : p.m3.matchBreakdown.bind(p.m3),
                                    g.s.MATCH_BREAKDOWN,
                                    a,
                                  );
                                }
                              },
                              matchScores: {
                                overallScore: T,
                                explanation: U.explanation,
                              },
                              variant: "mobileAnimated",
                            }),
                          (0, r.jsxs)(d.Flex, {
                            gap: 2,
                            width: "100%",
                            flexDirection: { base: "column", md: "row" },
                            marginTop: { base: 5, md: 8 },
                            children: [
                              !!j &&
                                (0, r.jsx)(f._, {
                                  addToCartPayload: { ...j, quantity: 1 },
                                  isOnStock: D,
                                  price: L,
                                  strikePrice: N,
                                  isStickyOnMobile: !1,
                                  onAddToCart: () => {
                                    if (R) {
                                      let e = {
                                        page_category: "Match explained",
                                        ...R,
                                      };
                                      B && (e.bdna_segment_id = M),
                                        O(
                                          null === p.m3 || void 0 === p.m3
                                            ? void 0
                                            : p.m3.productAdded.bind(p.m3),
                                          g.s.PRODUCT_ADDED,
                                          e,
                                        );
                                    }
                                  },
                                }),
                              (0, r.jsx)(I.$, {
                                variant: "secondaryLight",
                                rightIcon: (0, r.jsx)(S.ArrowRightIcon, {
                                  width: 6,
                                  height: 6,
                                }),
                                onClick: () => P.push(a),
                                px: 10,
                                children: "View product details",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        E = (e) => {
          let {
            productId: t,
            productUrl: a,
            brandName: i,
            productDescription: n,
            score: l,
            addToCartPayload: o,
            opened: s = !1,
            onClose: d = () => {},
            setMatchScoreLoading: c,
            addToCartAnalytics: u,
            price: h,
            strikePrice: m,
            isOnStock: p,
          } = e;
          if (t && s)
            return (0, r.jsx)(k, {
              productId: t,
              productUrl: a,
              brandName: i,
              productDescription: n,
              score: l,
              addToCartPayload: o,
              price: h,
              strikePrice: m,
              isOnStock: p,
              opened: s,
              onClose: d,
              setMatchScoreLoading: c,
              addToCartAnalytics: u,
            });
        };
    },
    8754: (e, t, a) => {
      a.d(t, { B: () => n });
      var r = a(69211);
      class i {
        static getInstance() {
          return this._instance || (this._instance = new i()), this._instance;
        }
        async getContent(e) {
          let t = Array.isArray(e) ? e.join("/") : e,
            a = await fetch("".concat(r.Z8, "/cms/get-content/").concat(t));
          if (200 !== a.status) throw Error("Failed to fetch content");
          return a.json();
        }
        async getHeaderTicker() {
          return this.getContent("headerTicker");
        }
        async getMarketingConsentText() {
          return this.getContent("marketing-consent");
        }
        async getBlogContentBySlug(e) {
          return this.getContent("blog?slug=".concat(encodeURIComponent(e)));
        }
        async getLatestBlogPages(e) {
          return this.getContent(
            "blog/latest?exclude=".concat(encodeURIComponent(e)),
          );
        }
      }
      let n = i.getInstance();
    },
    10606: (e, t, a) => {
      a.d(t, { k: () => m });
      var r = a(94799),
        i = a(34023),
        n = a(81352),
        l = a(89041),
        o = a(98814),
        s = a(4306),
        d = a(87704),
        c = a(93869);
      let u = (e) => (e ? (0, d.S)(e) : "--.--"),
        h = (0, i.forwardRef)(function (e, t) {
          let {
              isDisabled: a = !1,
              isLoading: i = !1,
              isOnStock: n = !1,
              isSmall: l = !1,
              variant: d = "primary",
              onAddToCart: h,
              price: m,
              strikePrice: p,
              extraContent: g,
              customLabel: v,
              customAriaLabel: y,
            } = e,
            b = (0, o.useMultiStyleConfig)("ProductAddToCartButton", {});
          return (0, r.jsx)(c.$, {
            isDisabled: a || !n,
            isLoading: i,
            fullWidth: !0,
            onClick: () => {
              h && h();
            },
            variant: d,
            ref: t,
            ariaLabel: null != y ? y : n ? "Add to cart" : "Out of stock",
            "data-testid": null != y ? y : n ? "Add to cart" : "Out of stock",
            gap: 1,
            ...(l && { size: "sm", sx: { height: { base: 10, lg: 12 } } }),
            children: y
              ? v
              : n
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      !!p &&
                        (0, r.jsx)(s.Box, {
                          __css: b.strikePrice,
                          children: u(p),
                        }),
                      u(m),
                      g,
                    ],
                  })
                : "Out of stock",
          });
        }),
        m = (0, i.forwardRef)(function (e, t) {
          let {
              addToCartPayload: a,
              onAddToCartSuccess: i,
              onAddToCart: o,
              isOnStock: s,
              isSmall: d,
              price: c,
              strikePrice: u,
              ...m
            } = e,
            { isCartLoading: p } = (0, n.B_)(),
            { mutate: g, isPending: v } = (0, l.A)({ onSuccess: i }),
            y = !a || v,
            b = !y && !p;
          return (0, r.jsx)(h, {
            ...m,
            isOnStock: s,
            isSmall: d,
            isDisabled: y,
            isLoading: v,
            onAddToCart: () => {
              a && (b && g(Array.isArray(a) ? a : [a]), null == o || o());
            },
            price: c,
            strikePrice: u,
            ref: t,
          });
        });
    },
    11277: (e, t, a) => {
      a.d(t, { d: () => i });
      var r = a(92258);
      let i = () => {
        let { mutate: e } = (0, r.p)();
        return {
          removeDiscount: (t, a, r, i) => {
            e({
              cartId: "".concat(t),
              version: a,
              actions: [
                {
                  action: "removeDiscountCode",
                  discountCode: {
                    typeId: "discount-code",
                    id: r,
                    obj: {
                      code: i,
                      id: r,
                      version: 1,
                      createdAt: "",
                      lastModifiedAt: "",
                      cartDiscounts: [],
                      isActive: !0,
                      references: [],
                      groups: [],
                    },
                  },
                },
                { action: "recalculate", updateProductData: !0 },
              ],
            });
          },
        };
      };
    },
    11564: (e, t, a) => {
      a.d(t, { d: () => i });
      var r = a(34023);
      function i(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 500,
          [a, i] = (0, r.useState)(e);
        return (
          (0, r.useEffect)(() => {
            let a = setTimeout(() => i(e), t);
            return () => {
              clearTimeout(a);
            };
          }, [e, t]),
          a
        );
      }
    },
    11737: (e, t, a) => {
      a.d(t, { u: () => n });
      var r = a(86116),
        i = a(36913);
      class n {
        static fromProduct(e, t) {
          var a, r;
          let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            l = arguments.length > 3 ? arguments[3] : void 0;
          return new n({
            productId: "".concat(e.id),
            variantId: null == t ? void 0 : t.id,
            quantity: i,
            matchScore:
              null === (a = e.matchScores) || void 0 === a
                ? void 0
                : a.overallScore,
            categories: (
              null === (r = e.categories) || void 0 === r ? void 0 : r.length
            )
              ? null == e
                ? void 0
                : e.categories.join(",")
              : void 0,
            ...l,
          });
        }
        static fromLineItem(e) {
          var t, a;
          let r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return new n({
            productId: "".concat(e.product.id),
            variantId: e.product.masterVariant.id,
            quantity: r,
            matchScore:
              null === (t = e.product.matchScores) || void 0 === t
                ? void 0
                : t.overallScore,
            categories:
              null === (a = e.product.categories) || void 0 === a
                ? void 0
                : a.join(","),
            routine: e.routine,
          });
        }
        static fromProductBundle(e) {
          var t, a;
          let l =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return [
            new n({
              productId: "".concat(e.id),
              quantity: l,
              inventoryMode: r.Yml.None,
            }).build(),
            ...(null !==
              (a =
                null === (t = e.masterVariant.products) || void 0 === t
                  ? void 0
                  : t.map((t) =>
                      this.fromProduct(t, t.masterVariant, l, {
                        parentId: e.id,
                        externalPrice: { centAmount: 0, currencyCode: i.Oc },
                      }).build(),
                    )) && void 0 !== a
              ? a
              : []),
          ];
        }
        withCustomField(e, t) {
          return (
            e &&
              void 0 !== t &&
              (this.payload.custom ||
                (this.payload.custom = {
                  type: { typeId: "type", key: "custom-line-item-type" },
                  fields: {},
                }),
              (this.payload.custom.fields[e] = t)),
            this
          );
        }
        build() {
          return this.payload;
        }
        constructor({
          productId: e,
          variantId: t,
          quantity: a = 1,
          matchScore: r,
          categories: i,
          routine: n,
          parentId: l,
          inventoryMode: o,
          externalPrice: s,
        }) {
          return (
            (this.payload = {
              productId: e,
              ...(t && -1 !== t ? { variantId: t } : {}),
              quantity: a,
              inventoryMode: o,
              externalPrice: s,
            }),
            this.withCustomField(
              "match_score",
              null == r ? void 0 : r.toString(),
            )
              .withCustomField("categories", i)
              .withCustomField("plan", null == n ? void 0 : n.focusAreaKey)
              .withCustomField("planId", null == n ? void 0 : n.id)
              .withCustomField("parentId", l)
          );
        }
      }
    },
    12963: (e, t, a) => {
      a.d(t, { u: () => ei, d: () => er });
      var r = a(94799),
        i = a(98814),
        n = a(60968),
        l = a(55272),
        o = a(31634),
        s = a(89136),
        d = a(4099),
        c = a(38196),
        u = a(27357),
        h = a(34023),
        m = a(24689),
        p = a(92616),
        g = a(17422),
        v = a(57184),
        y = a(24631),
        b = a(50969),
        x = a(36913),
        S = a(81352),
        I = a(82536),
        C = a(43517),
        f = a(89041),
        k = a(11564),
        E = a(11277),
        T = a(92258);
      let j = (e) => {
          let { cart: t } = (0, S.B_)(),
            { removeDiscount: a } = (0, E.d)(),
            { mutate: r, ...i } = (0, T.p)({
              ...e,
              onSuccess: (e) => {
                e.discountCodes.forEach((t) => {
                  "DoesNotMatchCart" === t.state &&
                    a(e.id, e.version, t.id, t.code);
                });
              },
            }),
            n = (0, h.useCallback)(
              (e) => {
                let { cartItems: t, cartId: a, version: i } = e;
                return r({
                  cartId: a,
                  version: i,
                  actions: [{ action: "updateItemQuantities", lineItems: t }],
                });
              },
              [r],
            ),
            { id: l, version: o } = null != t ? t : {},
            s = (0, h.useCallback)(
              (e) => n({ cartItems: e, cartId: l, version: o }),
              [l, n, o],
            );
          if (t) return { mutate: s, ...i };
        },
        w = (e) => {
          let { cart: t } = (0, S.B_)(),
            { removeDiscount: a } = (0, E.d)(),
            { mutate: r, ...i } = (0, T.p)({
              ...e,
              onSuccess: (e) => {
                e.discountCodes.forEach((t) => {
                  "DoesNotMatchCart" === t.state &&
                    a(e.id, e.version, t.id, t.code);
                });
              },
            }),
            n = (0, h.useCallback)(
              (e) => {
                let {
                    itemId: t,
                    quantity: a = 0,
                    cartId: i,
                    version: n = 1,
                  } = e,
                  l = [];
                return (
                  l.push({
                    action: "changeLineItemQuantity",
                    lineItemId: t,
                    quantity: a,
                  }),
                  r({ cartId: i, version: n, actions: l })
                );
              },
              [r],
            ),
            { id: l, version: o } = null != t ? t : {},
            s = (0, h.useCallback)(
              (e, t) => n({ itemId: e, quantity: t, cartId: l, version: o }),
              [l, n, o],
            );
          if (t) return { mutate: s, ...i };
        };
      var A = a(80807),
        _ = a(39693),
        R = a(2906),
        L = a(11737),
        N = a(4639),
        D = a(86373),
        P = a(93869),
        F = a(57546),
        B = a(26899),
        O = a(39061),
        M = a(40440),
        U = a(81563),
        V = a(80880),
        G = a(46893),
        H = a(4306);
      let z = (e) => {
        let { items: t, maxDisplay: a = 4 } = e,
          n = (0, i.useMultiStyleConfig)("ProductGroupImage"),
          l = t.length <= a ? t : t.slice(0, a - 1),
          o = t.slice(a);
        return (0, r.jsxs)(G.SimpleGrid, {
          columns: 2,
          gap: 1,
          children: [
            l.map((e, t) => {
              var a, i;
              return (0, r.jsx)(
                F.X,
                {
                  className: "product-image",
                  src:
                    null === (i = e.masterVariant.images) || void 0 === i
                      ? void 0
                      : null === (a = i[0]) || void 0 === a
                        ? void 0
                        : a.url,
                  alt: "",
                  width: 53,
                  height: 53,
                  "data-testid": "imgSrc",
                },
                t,
              );
            }),
            (null == o ? void 0 : o.length) > 0 &&
              (0, r.jsx)(
                H.Box,
                {
                  __css: n.productCountOverFlow,
                  children: (0, r.jsxs)(s.Text, {
                    __css: n.productCountOverFlowText,
                    color: "primary.warmGrey.40",
                    textStyle: "body.semibold",
                    children: ["+", o.length + 1],
                  }),
                },
                "others",
              ),
          ],
        });
      };
      var K = a(49325),
        q = a(93339),
        W = a(77909),
        Y = a(24854);
      let X = {
          lightTheme: {
            color: "primary.black.10",
            border: "primary.warmGrey.80",
            backgroundHover: "primary.warmGrey.80",
          },
          darkTheme: {
            color: "primary.white",
            border: "primary.black.40",
            backgroundHover: "primary.black.40",
          },
          warningTheme: {
            color: "semantic.red.50",
            border: "semantic.red.50",
            backgroundHover: "primary.warmGrey.80",
          },
        },
        Q = (e) => {
          let { dark: t, warning: a } = e;
          return a ? X.warningTheme : t ? X.darkTheme : X.lightTheme;
        },
        Z = (e, t) => e <= t,
        J = (e, t) => void 0 !== t && e >= t,
        $ = (e, t) => void 0 !== t && e > t,
        ee = (e) => {
          let { maxValue: t, value: a } = e;
          return t > a
            ? void 0
            : 0 === t
              ? "Out of stock"
              : t === a
                ? "Maximum quantity"
                : "Only ".concat(t, " in stock");
        },
        et = (e) => {
          let {
              value: t,
              defaultValue: a,
              width: n,
              onValueChange: l,
              dark: d = !1,
              max: c,
              min: u = 0,
              isLoading: h = !1,
              errorPosition: m = "right",
            } = e,
            [p, g] = (0, K.useControllableState)({
              value: t,
              onChange: l,
              defaultValue: a,
            }),
            v = J(p, c),
            y = Z(p, u),
            b = $(p, c),
            x = v || b,
            S = (0, i.useMultiStyleConfig)("QuantitySelector", {
              variant: x ? "disabled" : void 0,
            }),
            I = h ? void 0 : ee({ value: p, maxValue: null != c ? c : 0 }),
            C = Q({ dark: d, warning: b });
          return h
            ? (0, r.jsx)(H.Box, {
                "aria-label": "quantity Selector container",
                "data-testid": "quantity Selector container",
                width: n,
                borderColor: C.border,
                children: (0, r.jsx)(q.Button, {
                  "aria-label": "quantity Selector is loading",
                  "data-testid": "quantity Selector is loading",
                  "aria-description": "Loading = ".concat(h),
                  isLoading: h,
                  width: n,
                  height: 6,
                  color: C.color,
                }),
              })
            : (0, r.jsxs)(o.Flex, {
                ...("bottom" === m
                  ? { flexDir: "column", textAlign: "right", gap: "0.5" }
                  : { flexDir: "row", alignItems: "center", gap: "2" }),
                flexWrap: "wrap",
                children: [
                  (0, r.jsx)(H.Box, {
                    __css: S.quantitySelectorControl,
                    "aria-label": "Quantity Selector container",
                    "data-testid": "Quantity Selector container",
                    width: n,
                    borderColor: C.border,
                    alignItems: "center",
                    children: (0, r.jsxs)(W.HStack, {
                      spacing: 2,
                      justify: "center",
                      children: [
                        (0, r.jsx)(Y.IconButton, {
                          __css: S.quantitySelectorIconButton,
                          onClick: () => {
                            (void 0 === u || p > u) && g(p - 1);
                          },
                          disabled: y,
                          icon:
                            p > 1
                              ? (0, r.jsx)(_.MinusIcon, { height: 4, width: 4 })
                              : (0, r.jsx)(_.BinIcon, { height: 4, width: 4 }),
                          "aria-label": "decrease the quantity",
                          "data-testid": "decrease the quantity",
                          "aria-description": "current color is ".concat(
                            C.color,
                          ),
                          color: C.color,
                          _hover: C.backgroundHover,
                        }),
                        (0, r.jsx)(s.Text, {
                          __css: S.quantitySelectorText,
                          "aria-description": "current color is ".concat(
                            C.color,
                          ),
                          color: C.color,
                          height: 6,
                          width: 6,
                          textAlign: "center",
                          "aria-label": "Current quantity is ".concat(p),
                          "data-testid": "Current quantity is ".concat(p),
                          children: p,
                        }),
                        (0, r.jsx)(Y.IconButton, {
                          __css: S.quantitySelectorIconButton,
                          onClick: () => {
                            (void 0 === c || p < c) && g(p + 1);
                          },
                          isDisabled: x,
                          icon: (0, r.jsx)(_.PlusIcon, { height: 4, width: 4 }),
                          "aria-label": "increase the quantity",
                          "data-testid": "increase the quantity",
                          "aria-description": "current color is "
                            .concat(C.color, " ")
                            .concat(p, " ")
                            .concat(c),
                          color: x ? "primary.warmGrey.80" : C.color,
                          _hover: v ? {} : { backgroundColor: C.border },
                        }),
                      ],
                    }),
                  }),
                  !!I &&
                    (0, r.jsx)(s.Text, {
                      textStyle: "function.text.medium",
                      color: "semantic.red.50",
                      minWidth: 25,
                      wordBreak: "break-word",
                      children: I,
                    }),
                ],
              });
        };
      var ea = a(38065),
        er = (function (e) {
          return (
            (e.V2 = "v2"),
            (e.V2Transparent = "v2Transparent"),
            (e.Group = "group"),
            (e.ChildLineItem = "childLineItem"),
            e
          );
        })({});
      let ei = (e) => {
        var t,
          a,
          E,
          T,
          G,
          H,
          K,
          q,
          W,
          Y,
          X,
          Q,
          Z,
          J,
          $,
          ee,
          er,
          ei,
          en,
          el,
          eo,
          es,
          ed,
          ec,
          eu,
          eh,
          em,
          ep,
          eg,
          ev;
        let {
            item: ey,
            index: eb,
            analytics: ex,
            config: eS,
            override: eI,
          } = e,
          { sendAnalyticsEvent: eC } = (0, v.s)(),
          { user: ef } = (0, I.A)(),
          ek = ey.productType === m.ch.SOFT_BUNDLE,
          eE = ey.productType === m.ch.ROUTINE,
          eT = ek || eE,
          ej = ek
            ? (
                null === (t = ey.masterVariant.products) || void 0 === t
                  ? void 0
                  : t.length
              )
              ? [ey, ...ey.masterVariant.products]
              : []
            : eE && null !== (el = ey.masterVariant.products) && void 0 !== el
              ? el
              : [],
          ew = (null == eS ? void 0 : eS.variant) === "childLineItem",
          [eA, e_] = (0, h.useState)(!1),
          eR = (0, u.usePathname)(),
          eL = (0, S.B_)(),
          { mutate: eN } = (0, f.A)(),
          eD =
            null === (a = eL.cart) || void 0 === a
              ? void 0
              : a.items.find(
                  (e) => e.product.id === (null == ey ? void 0 : ey.id),
                ),
          eP = ej.map((e) => {
            var t;
            return null === (t = eL.cart) || void 0 === t
              ? void 0
              : t.items.find((t) => t.product.id === e.id);
          }),
          { targetQuantities: eF, setTargetQuantities: eB } = (function (e) {
            let t = j(),
              { isCartUpdating: a, cartError: r } = (0, S.B_)(),
              [i, n] = (0, h.useState)(null),
              [l, o] = (0, h.useState)(!1),
              s = (0, k.d)(i);
            return (
              (0, h.useLayoutEffect)(() => {
                if (null !== i && (!a || !e)) {
                  if (
                    null == e
                      ? void 0
                      : e.every((e, t) => e.quantity === i[t] || (r && l))
                  ) {
                    n(null), o(!1);
                    return;
                  }
                  null !== s &&
                    e &&
                    (l && o(!0),
                    null == t ||
                      t.mutate(
                        e.map((e, t) => ({ id: e.id, quantity: s[t] })),
                      ));
                }
              }, [r, i, s]),
              { setTargetQuantities: n, targetQuantities: i }
            );
          })(eP.filter((e) => void 0 !== e)),
          eO = (
            null !== (eo = null == eI ? void 0 : eI.quantity) && void 0 !== eo
              ? eo
              : eT
          )
            ? null == eP
              ? void 0
              : null === (E = eP[0]) || void 0 === E
                ? void 0
                : E.quantity
            : null !== (es = null == eD ? void 0 : eD.quantity) && void 0 !== es
              ? es
              : 0,
          { setTargetQuantity: eM, targetQuantity: eU } = (function (e) {
            let t = w(),
              { isCartUpdating: a, cartError: r } = (0, S.B_)(),
              [i, n] = (0, h.useState)(null),
              [l, o] = (0, h.useState)(!1),
              s = (0, k.d)(i);
            return (
              (0, h.useLayoutEffect)(() => {
                if (null !== i && !a && e) {
                  if (e.quantity === i || (r && l)) {
                    n(null), o(!1);
                    return;
                  }
                  null !== s && (o(!0), null == t || t.mutate(e.id, s));
                }
              }, [
                r,
                null == e ? void 0 : e.id,
                a,
                null == e ? void 0 : e.quantity,
                i,
                s,
              ]),
              { setTargetQuantity: n, targetQuantity: i }
            );
          })(eT ? void 0 : eD),
          eV = (0, S.Ku)(),
          eG = (0, i.useMultiStyleConfig)("ProductCardLandscape", {
            variant:
              null !== (ed = null == eS ? void 0 : eS.variant) && void 0 !== ed
                ? ed
                : "v2",
          });
        (0, h.useEffect)(() => {
          eL.isCartUpdating || e_(!1);
        }, [eL.isCartUpdating]);
        let eH = ek
            ? ey.masterVariant.brand
            : null == ey
              ? void 0
              : null === (T = ey.masterVariant) || void 0 === T
                ? void 0
                : T.brands,
          ez = ey.name,
          eK =
            null !== (ec = null == eI ? void 0 : eI.price) && void 0 !== ec
              ? ec
              : ey.masterVariant.price,
          eq =
            null !== (eu = null == eI ? void 0 : eI.strikePrice) &&
            void 0 !== eu
              ? eu
              : ey.masterVariant.strikePrice,
          eW =
            null == ey
              ? void 0
              : null === (G = ey.matchScores) || void 0 === G
                ? void 0
                : G.overallScore,
          eY = eT
            ? ej.every((e) => {
                var t, a;
                return null === (a = e.masterVariant) || void 0 === a
                  ? void 0
                  : null === (t = a.availability) || void 0 === t
                    ? void 0
                    : t.isOnStock;
              })
            : null == ey
              ? void 0
              : null === (K = ey.masterVariant) || void 0 === K
                ? void 0
                : null === (H = K.availability) || void 0 === H
                  ? void 0
                  : H.isOnStock,
          eX = eT
            ? null == ej
              ? void 0
              : null === (q = ej[0]) || void 0 === q
                ? void 0
                : q.productType
            : null == ey
              ? void 0
              : ey.productType,
          eQ =
            null !== (eh = null == eS ? void 0 : eS.linkTarget) && void 0 !== eh
              ? eh
              : R.M.PRODUCT_DETAIL_PAGE,
          eZ = eT
            ? "/my-routine/".concat(eX)
            : (0, D.g)(null == ey ? void 0 : ey.id, ey.slug),
          eJ = eQ === R.M.QUICK_VIEW ? void 0 : eZ,
          e$ = (0, N.p)(eX),
          e0 = eT
            ? null == ej
              ? void 0
              : ej.map((e) => (0, y.n)(e), { index: eb, cart: eL.cart })
            : [(0, y.n)(ey, { index: eb, cart: eL.cart })],
          e1 = {
            cart_id: "".concat(
              null === (W = eL.cart) || void 0 === W ? void 0 : W.id,
            ),
            products: [...e0],
            page_category: (0, b.E)(eR),
            cart_size:
              (null !==
                (em =
                  null === (Y = eL.cart) || void 0 === Y
                    ? void 0
                    : Y.items.reduce((e, t) => e + t.quantity, 0)) &&
              void 0 !== em
                ? em
                : 0) + 1,
            ...(ef
              ? { bdna_segment_id: null == ef ? void 0 : ef.segmentId }
              : {}),
            ...ex,
          },
          e3 = L.u.fromProduct(ey).build(),
          e9 = ej.map((e) => L.u.fromProduct(e).build()),
          e6 = () => {
            let e = { ...e1, products: [...e0] };
            if ((eC(p.m3.productAdded.bind(p.m3), g.s.PRODUCT_ADDED, e), e3)) {
              let e = eT ? e9 : [e3];
              return null == eN ? void 0 : eN(e);
            }
          },
          e8 =
            null === ($ = eL.cart) || void 0 === $
              ? void 0
              : null === (J = $.items) || void 0 === J
                ? void 0
                : null === (Z = J[0]) || void 0 === Z
                  ? void 0
                  : null === (Q = Z.pricing) || void 0 === Q
                    ? void 0
                    : null === (X = Q.appliedDiscounts) || void 0 === X
                      ? void 0
                      : X.join(" "),
          {
            data: { partialDiagnose: e2 },
          } = (0, A.W)(eX),
          e4 = (0, C.B)(eX);
        return (0, r.jsxs)(n.Card, {
          sx: eG.container,
          width: (null == eS ? void 0 : eS.fullWidth) ? "100%" : "auto",
          maxW: (null == eS ? void 0 : eS.fullWidth) ? void 0 : 94,
          children: [
            (0, r.jsxs)(l.CardHeader, {
              __css: eG.header,
              children: [
                (0, r.jsx)(o.Flex, {
                  position: "absolute",
                  top: 1.5,
                  left: 1.5,
                  children: eY
                    ? (0, r.jsxs)(o.Flex, {
                        gap: 1,
                        children: [
                          e$.personalisationEnabled &&
                            !eT &&
                            eW &&
                            e4 &&
                            (0, r.jsx)(O.y, {
                              variant: e2
                                ? "matchScorePaleHorizontalCard"
                                : "matchScoreHorizontalCard",
                              matchScore: eW,
                              "data-testid": ey.id,
                              productId: ey.id,
                              brandName: eH,
                              productDescription: ez,
                              addToCartPayload: e3,
                              addToCartAnalytics: e1,
                              price: eK,
                              strikePrice: eq,
                              isOnStock: eY,
                              productUrl: eZ,
                              isLight: !0,
                              partialDiagnose: e2,
                              productType: eX,
                            }),
                          ey.isDermatologistRecommended &&
                            (0, r.jsx)(B.u, {
                              variant: "productCardHorizontal",
                            }),
                        ],
                      })
                    : (0, r.jsxs)(o.Flex, {
                        gap: 1,
                        borderRadius: "base",
                        backgroundColor: "primary.white",
                        p: 1.5,
                        height: 6,
                        color: "primary.black.40",
                        alignItems: "center",
                        children: [
                          (0, r.jsx)(_.OutOfStockIcon, { height: 3, width: 3 }),
                          (0, r.jsx)(s.Text, {
                            textStyle: {
                              base: "function.text.small",
                              lg: "function.text.medium",
                            },
                            children: "Out of stock",
                          }),
                        ],
                      }),
                }),
                eT
                  ? (0, r.jsx)(z, {
                      items: ej.filter(
                        (e) => e.productType !== m.ch.SOFT_BUNDLE,
                      ),
                    })
                  : (0, r.jsx)(F.X, {
                      className: "product-image",
                      src:
                        null === (er = ey.masterVariant.images) || void 0 === er
                          ? void 0
                          : null === (ee = er[0]) || void 0 === ee
                            ? void 0
                            : ee.url,
                      alt: "",
                      width: 1523,
                      height: 1523,
                      "data-testid": "imgSrc",
                    }),
                (null == eS ? void 0 : eS.isDeleted) &&
                  (0, r.jsx)(o.Flex, {
                    position: "absolute",
                    inset: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "primary.white[@0.8]",
                    pointerEvents: "none",
                    children: (0, r.jsx)(s.Text, {
                      textStyle: "function.text.medium",
                      children: "Removed",
                    }),
                  }),
              ],
            }),
            (0, r.jsx)(d.CardBody, {
              padding: 0,
              py: 0.5,
              alignSelf: "center",
              children: (0, r.jsxs)(c.Stack, {
                justifyContent: "space-between",
                children: [
                  (0, r.jsx)(V.q, {
                    target: eQ,
                    to: eJ,
                    productId: ek ? "" : ey.id,
                    productUrl: eZ,
                    withLink: !0,
                    testId: eE
                      ? "visit routine for ".concat(eX)
                      : "Visit ".concat(ez, " page"),
                    onCardClicked: () => {
                      if (eT) return;
                      let e = { ...ex, products: [...e0] };
                      eC(p.m3.cardsClicked.bind(p.m3), g.s.CARDS_CLICKED, e);
                    },
                    isOverlay: !0,
                    children: (0, r.jsxs)(c.Stack, {
                      gap: 1,
                      alignItems: "flex-start",
                      opacity: (null == eS ? void 0 : eS.isDeleted) ? 0.4 : 1,
                      children: [
                        (0, r.jsx)(s.Text, {
                          as: "span",
                          textStyle: {
                            base: "function.text.medium",
                            lg: "function.text.large",
                          },
                          textAlign: "left",
                          "data-testid": "Brand name",
                          children: eE ? ez : eH,
                        }),
                        (0, r.jsx)(s.Text, {
                          as: "span",
                          color: "primary.black.40",
                          textStyle: {
                            base: "function.text.medium",
                            lg: "function.text.large",
                          },
                          textAlign: "left",
                          noOfLines: 2,
                          "data-testid": eE ? "Product count" : "Product name",
                          children: eE ? "".concat(ej.length, " products") : ez,
                        }),
                        eE &&
                          !!e8 &&
                          (0, r.jsx)(s.Text, {
                            as: "span",
                            color: "primary.black.40",
                            textStyle: {
                              base: "function.text.medium",
                              lg: "function.text.large",
                            },
                            textAlign: "left",
                            noOfLines: 2,
                            "data-testid": "Routine discount",
                            children: e8,
                          }),
                      ],
                    }),
                  }),
                  (0, r.jsxs)(c.Stack, {
                    gap: 2,
                    opacity: (null == eS ? void 0 : eS.isDeleted) ? 0.4 : 1,
                    children: [
                      (0, r.jsxs)(o.Flex, {
                        gap: 2,
                        children: [
                          !eT &&
                            (0, r.jsx)(U.z, {
                              productVolume: ey.masterVariant.size,
                            }),
                          (null == eS ? void 0 : eS.showQuantity) !== !1 &&
                            !(null == eS ? void 0 : eS.canEditQuantity) &&
                            !ew &&
                            (0, r.jsxs)(o.Flex, {
                              gap: 2,
                              children: [
                                (0, r.jsx)(s.Text, {
                                  textStyle: "function.text.large",
                                  color: "primary.black.40",
                                  children: "Qty:",
                                }),
                                (0, r.jsx)(s.Text, {
                                  textStyle: "function.text.large",
                                  color: "primary.black.40",
                                  "aria-label": "".concat(eO),
                                  "data-testid": "Quantity",
                                  children:
                                    eT && eF
                                      ? null !== (ep = eF[0]) && void 0 !== ep
                                        ? ep
                                        : eO
                                      : null != eU
                                        ? eU
                                        : eO,
                                }),
                              ],
                            }),
                        ],
                      }),
                      (null == eS ? void 0 : eS.showPrice) !== !1 &&
                        (0, r.jsx)(M.R, { price: eK, strikePrice: eq }),
                    ],
                  }),
                  (null == eS ? void 0 : eS.canEditQuantity) &&
                  !(null == eS ? void 0 : eS.isDeleted)
                    ? eL.isCartUpdating && eA && 0 === eO
                      ? (0, r.jsx)(o.Flex, {
                          mt: { lg: 2 },
                          children: (0, r.jsx)(ea.y, {
                            color: "bdna.bdna.100",
                            size: "sm",
                          }),
                        })
                      : eD || (null == eP ? void 0 : eP.length) > 0
                        ? (0, r.jsx)(o.Flex, {
                            mt: { lg: 2 },
                            children: (0, r.jsx)(et, {
                              width: 25,
                              value:
                                eT && eF
                                  ? null !== (eg = eF[0]) && void 0 !== eg
                                    ? eg
                                    : eO
                                  : null != eU
                                    ? eU
                                    : eO,
                              onValueChange: (e) => {
                                eT
                                  ? (0 === e &&
                                      eP.length &&
                                      eP.forEach((e) => {
                                        e &&
                                          eV({
                                            type: S.d1.AddItemToDeletedItems,
                                            payload: e,
                                          });
                                      }),
                                    eB(eP.map(() => e)))
                                  : (0 === e &&
                                      eD &&
                                      eV({
                                        type: S.d1.AddItemToDeletedItems,
                                        payload: eD,
                                      }),
                                    eM(e));
                              },
                              max: Math.min(
                                eT
                                  ? Math.min(
                                      ...ej.map((e) => {
                                        var t, a, r;
                                        return null !==
                                          (r =
                                            null == e
                                              ? void 0
                                              : null ===
                                                    (a = e.masterVariant) ||
                                                  void 0 === a
                                                ? void 0
                                                : null ===
                                                      (t = a.availability) ||
                                                    void 0 === t
                                                  ? void 0
                                                  : t.availableQuantity) &&
                                          void 0 !== r
                                          ? r
                                          : 99;
                                      }),
                                    )
                                  : null !==
                                        (ev =
                                          null === (en = ey.masterVariant) ||
                                          void 0 === en
                                            ? void 0
                                            : null === (ei = en.availability) ||
                                                void 0 === ei
                                              ? void 0
                                              : ei.availableQuantity) &&
                                      void 0 !== ev
                                    ? ev
                                    : 99,
                                x.IJ,
                              ),
                            }),
                          })
                        : (0, r.jsx)(o.Flex, {
                            mt: { lg: 2 },
                            children: (0, r.jsx)(P.$, {
                              variant: "primary",
                              size: "sm",
                              maxW: 10,
                              maxH: 10,
                              minW: "auto",
                              onClick: () => {
                                eM(1), e_(!0), e6();
                              },
                              isDisabled: eL.isCartUpdating || !eY,
                              color: eL.isCartUpdating
                                ? "primary.coldGrey.80"
                                : "primary.white",
                              "data-testid": "Add to bag button",
                              children: (0, r.jsx)(_.AddToBagIcon, {
                                height: 6,
                                width: 6,
                              }),
                            }),
                          })
                    : (null == eS ? void 0 : eS.isDeleted)
                      ? (0, r.jsx)(o.Flex, {
                          mt: { lg: 2 },
                          children: (0, r.jsx)(P.$, {
                            onClick: () => {
                              var e;
                              let t =
                                null === (e = eL.deletedItems) || void 0 === e
                                  ? void 0
                                  : e.find((e) => e.product.id === ey.id);
                              t &&
                                (null == eN ||
                                  eN([L.u.fromLineItem(t).build()]),
                                eV({
                                  type: S.d1.RemoveItemFromDeletedItems,
                                  payload: t,
                                }));
                            },
                            "aria-label": "Restore ".concat(eH),
                            "data-testid": "Restore ".concat(eH),
                            rightIcon: (0, r.jsx)(_.RestoreIcon, {
                              height: 6,
                              width: 6,
                            }),
                            variant: "tertiary",
                            color: "semantic.red.40",
                            textStyle: "function.text.medium",
                            zIndex: 1,
                            children: "Restore",
                          }),
                        })
                      : null,
                ],
              }),
            }),
          ],
        });
      };
    },
    14207: (e, t, a) => {
      a.d(t, { r: () => o });
      var r = a(50692),
        i = a(36918),
        n = a(42619),
        l = a(33802);
      let o = (e, t) => {
        var a, o;
        let {
            enabled: s,
            getQueryKey: d,
            getSearchArgs: c,
          } = (0, l.t)({
            enabled: !!(
              (null == t ? void 0 : t.enabled) !== !1 &&
              (null === (a = e.productIds) || void 0 === a ? void 0 : a.length)
            ),
            productType:
              (null === (o = e.productTypes) || void 0 === o
                ? void 0
                : o.length) === 1
                ? e.productTypes[0]
                : void 0,
          }),
          u = c(e),
          h = (0, r.useQuery)({
            ...t,
            enabled: s,
            queryKey: d("useGetSimilarProducts", u),
            queryFn: () => i.k.getSimilarByProductIds(u),
          });
        return (
          (0, n.w)({
            error: h.error,
            settings: {
              key: "similar-products-not-loaded-error",
              message:
                "Error loading similar products, something has gone wrong.",
            },
          }),
          h
        );
      };
    },
    18968: (e, t, a) => {
      a.d(t, { m: () => r });
      var r = (function (e) {
        return (e.fullSize = "fullSize"), (e.mini = "mini"), e;
      })({});
    },
    21815: (e, t, a) => {
      a.d(t, { K: () => f });
      var r = a(94799),
        i = a(59626),
        n = a(98814),
        l = a(4306),
        o = a(89136),
        s = a(22387),
        d = a(31634),
        c = a(77909),
        u = a(34023),
        h = a(24689),
        m = a(99034),
        p = a(39693),
        g = a(20781),
        v = a(8822),
        y = a(39061);
      let b = (e) => {
          let {
              children: t,
              isSelected: a,
              ariaLabel: i,
              dataTestId: l,
              onClick: o,
            } = e,
            s = (0, n.useMultiStyleConfig)("MatchScoreCard", {
              variant: a ? "selected" : void 0,
            });
          return (0, r.jsx)(v.GridItem, {
            colSpan: { xl: 4 },
            sx: s.cardItem,
            role: "group",
            "aria-label": i,
            "data-testid": l,
            onClick: o,
            _hover: {
              background: "primary.warmGrey.80",
              cursor: "pointer",
              color: "primary.black.10",
            },
            children: t,
          });
        },
        x = { height: 6, width: 6 },
        S = (e) => {
          let { score: t, items: a, selected: i, onClick: c, variant: u } = e,
            h = (0, n.useMultiStyleConfig)("MatchScoreCard", {
              variant: { base: u, lg: i ? "selected" : u },
            });
          return (0, r.jsxs)(v.GridItem, {
            sx: h.cardWrapper,
            "aria-label": "Card",
            "data-testid": "Card",
            flexDirection: "column",
            gap: { base: 2, md: 4 },
            children: [
              (0, r.jsx)(y.G, {
                iconName: "sparkle",
                variant: "matchScore",
                matchScore: t,
                text: "match score",
                noAnimation: !0,
                fullWidth: !0,
                "data-testid": "Match score tag",
              }),
              (0, r.jsx)(s.VStack, {
                sx: h.cardItems,
                children:
                  !!(null == a ? void 0 : a.length) &&
                  a.map((e) => {
                    let { key: t, match: a, title: n } = e,
                      s = i === t;
                    return (0, r.jsx)(
                      b,
                      {
                        isSelected: s,
                        onClick: () => c(t, n, a),
                        ariaLabel: "".concat(n, " explainability card"),
                        dataTestId: "".concat(n, " explainability card"),
                        children: (0, r.jsxs)(d.Flex, {
                          justifyContent: "space-between",
                          w: "full",
                          "aria-label": ""
                            .concat(n, " ")
                            .concat(a ? "match" : "do not match"),
                          "data-testid": ""
                            .concat(n, " ")
                            .concat(a ? "match" : "do not match"),
                          children: [
                            (0, r.jsx)(o.Text, { children: n }),
                            (0, r.jsxs)(l.Box, {
                              color: {
                                base: "primary.warmGrey.70",
                                md: s ? "primary.white" : void 0,
                              },
                              _groupHover: {
                                color: {
                                  base: "primary.warmGrey.70",
                                  md: "primary.black.10",
                                },
                              },
                              children: [
                                a
                                  ? (0, r.jsx)(p.TickCircledIcon, {
                                      ...x,
                                      color: "bdna.bdna.100",
                                    })
                                  : (0, r.jsx)(p.CrossOutlineIcon, {
                                      ...x,
                                      color: "primary.black.70",
                                    }),
                                (0, r.jsx)(p.ArrowRightIcon, {
                                  width: 6,
                                  height: 6,
                                  color: i
                                    ? "primary.white"
                                    : "primary.warmGrey.70",
                                  _groupHover: {
                                    color: {
                                      base: "primary.warmGrey.70",
                                      md: "primary.black.10",
                                    },
                                  },
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      t,
                    );
                  }),
              }),
            ],
          });
        },
        I = { height: 6, width: 6 },
        C = { texture: "TEXTURE", scent: "SCENT", skinFeel: "SKIN FEEL" },
        f = (e) => {
          var t, a;
          let {
              matchScores: v,
              variant: y,
              sendMatchScoreBreakdownAnalyticsInfos: b,
            } = e,
            x = (0, m.l)(),
            [f, k] = (0, u.useState)(h.Np.SKIN_SENSITIVITY),
            [E, { toggle: T }] = (0, i.useBoolean)(),
            j = (0, n.useMultiStyleConfig)("MatchScoreCard", { variant: y }),
            w = (0, u.useMemo)(
              () => [
                ...[
                  h.T9.CONCERN_1,
                  h.T9.CONCERN_2,
                  h.T9.CONCERN_3,
                  h.Np.SKIN_SENSITIVITY,
                  h.Np.SKIN_TYPE,
                  h.Np.SCALP_SENSITIVITY,
                  h.Np.SCALP_TYPE,
                  h.Np.HAIR_TEXTURE,
                  h.Np.LENGTHS_FEEL,
                ]
                  .reduce((e, t) => {
                    let a = v.explanation.attributes[t];
                    return a && e.push(a), e;
                  }, [])
                  .filter((e) => (null == e ? void 0 : e.visible)),
                ...(() => {
                  let e = [h.Np.SCENT, h.Np.SKIN_FEEL]
                      .reduce((e, t) => {
                        let a = v.explanation.attributes[t];
                        return a && e.push(a), e;
                      }, [])
                      .filter((e) => (null == e ? void 0 : e.visible)),
                    t = e.some((e) => (null == e ? void 0 : e.visible));
                  return t
                    ? [
                        {
                          key: h.Np.PRODUCT_PREFERENCES,
                          title: "Product preferences",
                          match: e.some((e) => e.match && e.visible),
                          entries: e,
                          text: "",
                          visible: t,
                        },
                      ]
                    : [];
                })(),
              ],
              [v.explanation.attributes],
            ),
            A = w.find((e) => {
              let { key: t } = e;
              return f === t;
            }),
            _ =
              null !==
                (a =
                  A && "icon" in A ? (null == A ? void 0 : A.icon) : void 0) &&
              void 0 !== a
                ? a
                : p.SkinOilinessIcon;
          return (
            (0, u.useEffect)(() => {
              let e = w[0];
              e && k(e.key);
            }, [w]),
            (0, r.jsx)(l.Box, {
              __css: j.matchScoreContainer,
              "aria-label": "Card container",
              "data-testid": "Card container",
              children: (0, r.jsxs)(l.Box, {
                __css: j.matchScore,
                transform: E ? "rotateY(-180deg)" : "rotateY(0deg)",
                children: [
                  (0, r.jsx)(S, {
                    score: v.overallScore,
                    items: w,
                    selected: f,
                    onClick: (e, t, a) => {
                      k(e),
                        b(
                          t,
                          a ? "active ingredients" : "no active ingredients",
                        ),
                        x && T();
                    },
                    variant: y,
                  }),
                  (0, r.jsxs)(l.Box, {
                    __css: j.detailsWrapper,
                    "aria-label": "".concat(
                      null == A ? void 0 : A.title,
                      " Card item details",
                    ),
                    "data-testid": "".concat(
                      null == A ? void 0 : A.title,
                      " Card item details",
                    ),
                    children: [
                      (0, r.jsx)(l.Box, {
                        __css: j.detailsScoreBar,
                        children: (0, r.jsx)(l.Box, {
                          onClick: T,
                          cursor: "pointer",
                          "aria-label": "Close",
                          "data-testid": "Close",
                          children: (0, r.jsx)(p.CrossIcon, {
                            width: 6,
                            height: 6,
                          }),
                        }),
                      }),
                      (0, r.jsxs)(l.Box, {
                        sx: j.detailsInnerWrapper,
                        children: [
                          (0, r.jsx)(o.Text, {
                            textStyle: "body.semibold",
                            children: null == A ? void 0 : A.title,
                          }),
                          (0, r.jsx)(_, { width: 12, height: 12 }),
                          f === h.Np.PRODUCT_PREFERENCES
                            ? (0, r.jsx)(s.VStack, {
                                gap: 4,
                                w: "full",
                                children:
                                  null == A
                                    ? void 0
                                    : null === (t = A.entries) || void 0 === t
                                      ? void 0
                                      : t.map((e) => {
                                          let {
                                            key: t,
                                            title: a,
                                            match: i,
                                            visible: n,
                                          } = e;
                                          return (0, r.jsxs)(
                                            d.Flex,
                                            {
                                              justifyContent: "space-between",
                                              alignItems: "center",
                                              w: "full",
                                              "aria-label": ""
                                                .concat(a, " ")
                                                .concat(
                                                  i ? "match" : "do not match",
                                                ),
                                              "data-testid": ""
                                                .concat(a, " ")
                                                .concat(
                                                  i ? "match" : "do not match",
                                                ),
                                              children: [
                                                (0, r.jsx)(o.Text, {
                                                  textStyle:
                                                    "function.text.medium",
                                                  color: "primary.black.60",
                                                  children: C[t],
                                                }),
                                                (0, r.jsx)(c.HStack, {
                                                  bgGradient:
                                                    i && n ? "bdna" : void 0,
                                                  bg:
                                                    i && n
                                                      ? void 0
                                                      : "primary.black.20",
                                                  borderRadius: "100px",
                                                  color:
                                                    i && n
                                                      ? "primary.white"
                                                      : "primary.black.50",
                                                  p: 2,
                                                  pr: 3,
                                                  children:
                                                    i && n
                                                      ? (0, r.jsxs)(
                                                          r.Fragment,
                                                          {
                                                            children: [
                                                              (0, r.jsx)(
                                                                p.TickCircledIcon,
                                                                {
                                                                  color:
                                                                    "primary.white",
                                                                  ...I,
                                                                },
                                                              ),
                                                              (0, r.jsx)(
                                                                o.Text,
                                                                {
                                                                  color:
                                                                    "primary.white",
                                                                  textStyle:
                                                                    "body.semibold",
                                                                  children: a,
                                                                },
                                                              ),
                                                            ],
                                                          },
                                                        )
                                                      : (0, r.jsxs)(
                                                          r.Fragment,
                                                          {
                                                            children: [
                                                              (0, r.jsx)(g.A, {
                                                                ...I,
                                                                color:
                                                                  "primary.black.50",
                                                              }),
                                                              (0, r.jsx)(
                                                                o.Text,
                                                                {
                                                                  color:
                                                                    "primary.black.50",
                                                                  textStyle:
                                                                    "body.semibold",
                                                                  "data-testid":
                                                                    "No Match",
                                                                  children:
                                                                    "No match",
                                                                },
                                                              ),
                                                            ],
                                                          },
                                                        ),
                                                }),
                                              ],
                                            },
                                            t,
                                          );
                                        }),
                              })
                            : (0, r.jsx)(o.Text, {
                                textStyle: "body",
                                textAlign: "center",
                                children:
                                  (null == A ? void 0 : A.text) &&
                                  (null == A ? void 0 : A.text) !== ""
                                    ? null == A
                                      ? void 0
                                      : A.text
                                    : "Heads up, this product doesn't have the right ingredients to address your ".concat(
                                        null == A ? void 0 : A.title,
                                        " concerns",
                                      ),
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
    },
    22291: (e, t, a) => {
      a.d(t, { M: () => r });
      let r = () => {
        let e = (e) => localStorage.getItem(e);
        return {
          setStorage: (e, t) => {
            localStorage.setItem(e, JSON.stringify(t));
          },
          getItem: e,
          getCurrentModuleIndex: () => {
            let t = e("currentModuleIndex");
            return t ? Number(t) : 0;
          },
          readStorage: (e) => {
            let t = localStorage.getItem(e);
            return t && JSON.parse(t);
          },
          removeItem: (e) => localStorage.removeItem(e),
        };
      };
    },
    23448: (e, t, a) => {
      a.d(t, { e: () => s });
      var r = a(94799),
        i = a(49325),
        n = a(31634),
        l = a(1076),
        o = a(70831);
      let s = (e) => {
        let {
            allowDeselection: t,
            allowMulti: a,
            buttons: s,
            defaultSelection: d,
            fullWidth: c,
            layout: u = "qGrid",
            onChange: h,
            selection: m,
            labelPrefix: p,
            variant: g,
            unselectable: v = !1,
            maxAnswers: y,
            labelTemplate: b,
            gridGap: x,
          } = e,
          [S, I] = (0, i.useControllableState)({
            value: m,
            defaultValue: null != d ? d : [],
            onChange: h,
          }),
          C = (e) => {
            if (S.includes(e)) t && I(S.filter((t) => t !== e));
            else {
              if (y && S.length >= y) return;
              a ? I(S.concat([e])) : I([e]);
            }
          },
          f = s.map((e) =>
            (0, r.jsx)(
              o.x,
              {
                fullWidth: c,
                icon: e.icon,
                label: e.label,
                ariaLabel: "".concat(null != p ? p : "").concat(e.label),
                "data-testid": "".concat(null != p ? p : "").concat(e.label),
                onChange: () => C(e.value),
                selected: S.includes(e.value),
                superscript: e.superscript,
                variant: null != g ? g : e.variant,
                unselectable: v,
                labelTemplate: b,
              },
              "string" == typeof e.value ? e.value : Math.random(),
            ),
          );
        return "row" === u
          ? f
          : "flexRow" === u
            ? (0, r.jsx)(n.Flex, {
                flexDir: "row",
                wrap: "wrap",
                gap: 2,
                children: f,
              })
            : (0, r.jsx)(l.Grid, {
                ...("row" === u
                  ? {
                      gridAutoFlow: "column",
                      autoColumns: "minmax(327px, auto)",
                      gap: null != x ? x : 4,
                    }
                  : "column" === u
                    ? {
                        templateColumns: ["repeat(1, 1fr)"],
                        autoColumns: "minmax(327px, auto)",
                        gap: null != x ? x : 4,
                      }
                    : {
                        templateColumns: [
                          "repeat(1, 1fr)",
                          null,
                          "repeat(2, 1fr)",
                        ],
                        autoColumns: "minmax(327px, auto)",
                        gap: null != x ? x : 4,
                      }),
                children: f,
              });
      };
    },
    24319: (e, t, a) => {
      a.d(t, { a: () => l });
      var r = a(50692),
        i = a(82536),
        n = a(75137);
      let l = (e) => {
        var t, a, l;
        let { enabled: o = !0 } = null != e ? e : {},
          {
            user: s,
            setHaircareDecoded: d,
            setSkincareDecoded: c,
            isSkincareDecoded: u,
            isHaircareDecoded: h,
          } = (0, i.A)(),
          m = (0, r.useQuery)({
            queryKey: [
              "useGetUserProfile",
              null !== (l = null == s ? void 0 : s.id) && void 0 !== l ? l : "",
            ],
            queryFn: () => n.c.getUserProfile(),
            enabled: o,
            retryOnMount: !1,
          }),
          { data: p } = m;
        return (
          !u &&
            (null == p
              ? void 0
              : null === (t = p.skincare) || void 0 === t
                ? void 0
                : t.is_complete) &&
            c(!0),
          !h &&
            (null == p
              ? void 0
              : null === (a = p.haircare) || void 0 === a
                ? void 0
                : a.is_complete) &&
            d(!0),
          m
        );
      };
    },
    24631: (e, t, a) => {
      a.d(t, { n: () => r });
      let r = function (e) {
        var t, a, r, i, n, l, o, s, d, c;
        let {
            variant: u,
            index: h,
            partOfRoutine: m,
            cart: p,
            isProductAdded: g,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {},
          v = null != u ? u : e.masterVariant,
          y =
            null == p
              ? void 0
              : null === (t = p.items) || void 0 === t
                ? void 0
                : t.find((t) => t.product.id === e.id),
          b = y ? y.quantity : 0,
          x = g ? b + 1 : 1;
        return {
          availability: "".concat(
            (
              null === (a = v.availability) || void 0 === a
                ? void 0
                : a.isOnStock
            )
              ? "in stock"
              : "out of stock",
          ),
          brand: v.brands,
          product_id: e.id,
          main_category: e.productType,
          name: e.name,
          position: h ? h + 1 : 1,
          discount:
            v.price && (null == v ? void 0 : v.strikePrice)
              ? (null == v ? void 0 : v.strikePrice) - v.price
              : 0,
          price: null !== (s = v.price) && void 0 !== s ? s : 0,
          quantity: x,
          score:
            null === (r = e.matchScores) || void 0 === r
              ? void 0
              : r.overallScore,
          sku: "".concat(v.sku),
          category:
            null ===
              (i = null !== (d = e.categories) && void 0 !== d ? d : []) ||
            void 0 === i
              ? void 0
              : i.join(", "),
          variant: "".concat(v.size),
          value: "".concat(v.price && v.price * (null != x ? x : 1)),
          product_routine: !!m,
          type:
            null ===
              (n = null !== (c = v.producttypes) && void 0 !== c ? c : []) ||
            void 0 === n
              ? void 0
              : n.join(", "),
          routine_step:
            v.routinesteps &&
            "Step "
              .concat(
                null === (l = v.routinesteps) || void 0 === l ? void 0 : l.step,
                " - ",
              )
              .concat(
                null === (o = v.routinesteps) || void 0 === o ? void 0 : o.key,
              ),
        };
      };
    },
    26408: (e, t, a) => {
      a.d(t, { e: () => o });
      var r = a(13331),
        i = a(5620),
        n = a(65329),
        l = a(34916);
      let o = (0, r.chakra)(n.P.div, {
        shouldForwardProp: (e) => (0, l.S)(e) || (0, i.shouldForwardProp)(e),
      });
    },
    26899: (e, t, a) => {
      a.d(t, { u: () => d });
      var r = a(94799),
        i = a(98814),
        n = a(4306),
        l = a(89136),
        o = a(57948),
        s = a(18576);
      let d = (e) => {
        let { variant: t } = e,
          a = (0, i.useMultiStyleConfig)("DermatologistRecommended", {
            variant: t,
          }),
          d = !(0, o.l)(),
          c =
            "productCardVertical" === t || "productCardHorizontal" === t
              ? 3
              : d
                ? 6
                : 5;
        return (0, r.jsxs)(n.Box, {
          __css: a.container,
          "data-testid": "dermatologist-recommended",
          children: [
            (0, r.jsxs)(n.Box, {
              __css: a.textAndIconContainer,
              children: [
                (0, r.jsx)(s.b, { height: c, width: c }),
                ("portraitProductCard" === t || "productCardVertical" === t) &&
                  (0, r.jsxs)(l.Text, {
                    textStyle: {
                      base: "function.text.small",
                      xl: "function.text.medium",
                    },
                    children: [d ? "Dermatologist" : "Derm", " recommended"],
                  }),
              ],
            }),
            "PDP" === t &&
              (0, r.jsx)(l.Text, {
                color: "brand.mint.100",
                textStyle: "function.text.large",
                "data-testid": "Dermatologist recommended",
                children: "Dermatologist recommended",
              }),
          ],
        });
      };
    },
    26929: (e, t, a) => {
      a.d(t, { v4: () => n, wf: () => l });
      var r = a(2906),
        i = a(66736);
      let n = (e, t) =>
          [e.masterVariant, ...e.variants].find((e) => (0, i.d)(e) === t),
        l = (e, t) =>
          ["addLineItem", "addLineItems"].includes(e) || t
            ? r.P.AddItem
            : "changeLineItemQuantity" === e && 0 === t
              ? r.P.RemoveItem
              : null;
    },
    28798: (e, t, a) => {
      a.d(t, { M: () => r });
      let r = {
        pattern:
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
        required: !0,
      };
    },
    28912: (e, t, a) => {
      a.d(t, { _: () => b });
      var r = a(94799),
        i = a(22387),
        n = a(4306),
        l = a(34023),
        o = a(81352),
        s = a(57948),
        d = a(39693),
        c = a(66778),
        u = a(15231),
        h = a(62090),
        m = a(89136);
      let p = (e) => {
        let {
            text: t,
            icon: a,
            iconColor: i,
            marginTop: l,
            marginBottom: o,
            supTxt: s,
          } = e,
          { IconComp: d, size: c } = a;
        return (0, r.jsx)(n.Box, {
          display: "flex",
          alignItems: "center",
          width: "100%",
          color: i,
          alignSelf: "center",
          justifyContent: "center",
          marginTop: l,
          marginBottom: o,
          children: (0, r.jsxs)(h.Center, {
            alignItems: "center",
            justifyContent: "center",
            children: [
              (0, r.jsx)(d, { width: c, height: c }),
              (0, r.jsxs)(m.Text, {
                "aria-labelledby": "promotion discount text",
                "data-testid": "promotion discount text",
                textStyle: "body",
                textAlign: "center",
                verticalAlign: "center",
                color: "primary.black.10",
                marginLeft: 1,
                children: [t, s && (0, r.jsx)("sup", { children: s })],
              }),
            ],
          }),
        });
      };
      var g = a(43137),
        v = a(10606),
        y = a(68099);
      let b = (e) => {
        let {
            addToCartPayload: t,
            price: a,
            strikePrice: h,
            isOnStock: m,
            isStickyOnMobile: b = !0,
            onAddToCart: x,
            promotion: S,
            customLabel: I,
            variant: C,
            isDockOnlyOnMobile: f = !0,
          } = e,
          k = (0, s.l)(),
          E = (0, o.Ku)(),
          { showMiniCart: T } = (0, o.B_)(),
          j = l.useRef(null),
          w = "number" == typeof h && (0, c._)(a, h),
          A = T
            ? (0, r.jsx)(u.ButtonLink, {
                href: "/basket",
                variant: "primary",
                fullWidth: !0,
                "aria-label": "View bag",
                "data-testid": "View bag",
                children: "View bag",
              })
            : (0, r.jsxs)(i.VStack, {
                spacing: 2,
                children: [
                  (0, r.jsx)(v.k, {
                    variant: C,
                    customLabel: (0, r.jsxs)(r.Fragment, {
                      children: [
                        I,
                        (0, r.jsx)(n.Box, {
                          marginLeft: 1,
                          children: (0, r.jsx)(d.AddToBagIcon, {
                            height: 6,
                            width: 6,
                          }),
                        }),
                      ],
                    }),
                    customAriaLabel: I,
                    addToCartPayload: t,
                    isOnStock: m,
                    price: a,
                    strikePrice: h,
                    ref: j,
                    extraContent: (0, r.jsxs)(r.Fragment, {
                      children: [
                        w &&
                          (0, r.jsx)(y.e, {
                            colorScheme: "discount",
                            children: "-".concat(w, "%"),
                          }),
                        (0, r.jsx)(n.Box, {
                          marginLeft: 1,
                          children: (0, r.jsx)(d.AddToBagIcon, {
                            height: 6,
                            width: 6,
                          }),
                        }),
                      ],
                    }),
                    onAddToCartSuccess: () => {
                      E({ type: o.d1.ShowMiniCart, payload: !0 });
                    },
                    onAddToCart: x,
                  }),
                  void 0 !== S &&
                    (0, r.jsx)(p, {
                      text: S,
                      icon: { IconComp: d.ShippingIcon, size: 6 },
                      iconColor: "primary.black.10",
                    }),
                ],
              });
        return k && b
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                !f && (0, r.jsx)(n.Box, { width: "100%", children: A }),
                (0, r.jsx)(g.k, {
                  children:
                    f && (0, r.jsx)(n.Box, { width: "100%", children: A }),
                }),
              ],
            })
          : (0, r.jsx)(n.Box, { width: "100%", children: A });
      };
    },
    30695: (e, t, a) => {
      a.d(t, { A: () => d });
      var r = a(94799),
        i = a(29392),
        n = a(36008),
        l = a.n(n),
        o = a(92616),
        s = a(82536);
      let d = (e) => {
        let {
            withLink: t,
            target: a,
            children: n,
            ariaLabel: d,
            dataTestId: c,
            analytics: u,
            onClick: h,
            isOverlay: m = !1,
          } = e,
          { user: p } = (0, s.A)(),
          g = () => {
            if (u) {
              let e = null == p ? void 0 : p.segmentId,
                t = { ...u };
              p && (t.bdna_segment_id = e),
                null === o.m3 || void 0 === o.m3 || o.m3.navigationClicked(t);
            }
          },
          v = () => {
            g(), null == h || h();
          };
        return t && a
          ? m
            ? (0, r.jsx)(i.LinkOverlay, {
                "aria-label": d,
                "data-testid": c,
                as: l(),
                href: a,
                onClick: v,
                children: n,
              })
            : (0, r.jsx)(l(), {
                "aria-label": d,
                "data-testid": c,
                href: a,
                onClick: v,
                children: n,
              })
          : n;
      };
    },
    31770: (e, t, a) => {
      a.d(t, { wz: () => i });
      let r = "searchRandomSeed",
        i = () => n(window.sessionStorage),
        n = (e) => {
          var t;
          let a =
              null !== (t = null == e ? void 0 : e.getItem(r)) && void 0 !== t
                ? t
                : null,
            i = Number(a);
          if (null !== a && Number.isInteger(i)) return i;
          {
            let t = Math.floor(1e4 * Math.random());
            return null == e || e.setItem(r, t.toString()), t;
          }
        };
    },
    32212: (e, t, a) => {
      a.d(t, { G: () => l });
      var r = a(94799),
        i = a(12736),
        n = a(26613);
      let l = (e) => {
        let { isInvalid: t, errorMessage: a, children: l, errorVariant: o } = e;
        return (0, r.jsxs)(i.FormControl, {
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          isInvalid: t,
          children: [
            l,
            (0, r.jsx)(n.FormErrorMessage, {
              "aria-description": null == a ? void 0 : a.toString(),
              variant: o,
              children: a,
            }),
          ],
        });
      };
    },
    33802: (e, t, a) => {
      a.d(t, { t: () => d });
      var r = a(34023),
        i = a(31770),
        n = a(96437),
        l = a(48973),
        o = a(80807);
      let s = (e, t) => [e, t],
        d = (e, t) => {
          let {
              addRandomSeed: a = !1,
              enabled: d = !0,
              requiresSegmentId: c = !1,
              productType: u,
            } = e,
            h = (0, r.useMemo)(() => {
              if (a) return t || (0, i.wz)();
            }, [a]),
            {
              data: { preferences: m, partialDiagnose: p },
              isLoading: g,
              user: v,
              userIsReady: y,
            } = (0, o.W)(u),
            b = null == v ? void 0 : v.segmentId,
            [x] = (0, n.i)(),
            S = x(),
            { data: I, isLoading: C } = (0, l.B)();
          return {
            getQueryKey: s,
            getSearchArgs: (0, r.useCallback)(
              (e) => ({
                ...(null != S ? S : {}),
                ...e,
                segmentId: b,
                partialDiagnose: p,
                normalizeFactors: I,
                preferences: m,
                randomSeed: h,
                userId: null == v ? void 0 : v.id,
              }),
              [b, p, I, S, m, h, null == v ? void 0 : v.id],
            ),
            isLoading: g || C || !y,
            enabled: !!d && y && !g && !C && (!c || !!b),
          };
        };
    },
    34780: (e, t, a) => {
      a.d(t, { I: () => r });
      var r = (function (e) {
        return (
          (e.LOW = "low"),
          (e.MEDIUM = "medium"),
          (e.HIGH = "high"),
          (e.UNKNOWN = "null"),
          e
        );
      })({});
    },
    36913: (e, t, a) => {
      a.d(t, { IJ: () => n, Oc: () => i, Xn: () => r, iG: () => l });
      let r = a(24689).lN["en-GB"],
        i = "GBP",
        n = parseInt("5"),
        l = "".concat("3a9116c5-3758-4e9d-828c-ce89a5d3d9ab");
    },
    36918: (e, t, a) => {
      a.d(t, { k: () => u });
      var r = a(78233);
      let i = (e, t) => {
          let { text: a } = e,
            r = t[a];
          return {
            type: r ? "page" : "query",
            text: a,
            path:
              null != r ? r : "/search?query=".concat(encodeURIComponent(a)),
          };
        },
        n = (e) => {
          let { text: t, source: a } = e;
          return { text: t, product: a && (0, r.C)(a) };
        };
      var l = a(56138),
        o = a(63598),
        s = a(69538);
      let d = l.v;
      "true" === s.env.NEXT_PUBLIC_USE_LOCAL_SEARCH && (d = o.L);
      class c extends d {
        static getInstance() {
          return c.instance || (c.instance = new c()), c.instance;
        }
        constructor(...e) {
          super(...e),
            (this.getProductByIdForUser = async (e) => {
              let {
                  segmentId: t,
                  productId: a,
                  accessToken: i,
                  userId: n,
                  preferences: l,
                  returnRawScore: o,
                  partialDiagnose: s,
                  normalizeFactors: d,
                  includePreferenceMatches: c,
                } = e,
                u = await this.post(
                  "search/product/".concat(a),
                  {
                    userId: n,
                    segmentId: t,
                    searchScoreOptions: {
                      preferences: l,
                      partialDiagnose: s,
                      includePreferenceMatches: c,
                      normalizeFactors: d,
                      returnRawScore: o,
                    },
                  },
                  { headers: { Authorization: "Bearer ".concat(i) } },
                );
              return (0, r.C)(u);
            }),
            (this.getProductsBySearch = async (e, t) => {
              let {
                  preferences: a,
                  includePreferenceMatches: i,
                  normalizeFactors: n,
                  partialDiagnose: l,
                  returnRawScore: o,
                  ...s
                } = e,
                d = await this.post(
                  "search/products",
                  {
                    ...s,
                    searchScoreOptions: {
                      preferences: a,
                      includePreferenceMatches: i,
                      partialDiagnose: l,
                      returnRawScore: o,
                      normalizeFactors: n,
                    },
                  },
                  t,
                );
              return {
                total: d.total,
                results: d.results.map(r.C),
                aggregations: null == d ? void 0 : d.aggregations,
              };
            }),
            (this.getScoreNormalizeFactors = async (e) =>
              await this.post("search/score/normalize-factors", e)),
            (this.getAutocompleteSuggestions = async (e, t) => {
              let a = await this.post("search/autocomplete", e);
              return {
                keywordSuggestions: a.keywordSuggestions.map((e) => i(e, t)),
                productSuggestions: a.productSuggestions.map(n),
              };
            }),
            (this.getSimilarByProductIds = async (e, t) => {
              let {
                preferences: a,
                returnRawScore: i,
                partialDiagnose: n,
                normalizeFactors: l,
                ...o
              } = e;
              return (
                await this.post(
                  "search/similar-products",
                  {
                    ...o,
                    searchScoreOptions: {
                      preferences: a,
                      normalizeFactors: l,
                      returnRawScore: i,
                      partialDiagnose: n,
                    },
                  },
                  t,
                )
              ).results
                .map(r.C)
                .sort((e, t) => {
                  var a, r, i, n;
                  return (null === (a = e.matchScores) || void 0 === a
                    ? void 0
                    : a.overallScore) &&
                    (null === (r = t.matchScores) || void 0 === r
                      ? void 0
                      : r.overallScore) &&
                    (null === (i = e.matchScores) || void 0 === i
                      ? void 0
                      : i.overallScore) <
                      (null === (n = t.matchScores) || void 0 === n
                        ? void 0
                        : n.overallScore)
                    ? 1
                    : -1;
                });
            });
        }
      }
      let u = c.getInstance();
    },
    37216: (e, t, a) => {
      a.d(t, { L: () => v });
      var r = a(50692),
        i = a(24689),
        n = a(66349),
        l = a(36913),
        o = a(97331);
      let s = function (e) {
          let { name: t } = e,
            a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : l.Xn;
          return t[a];
        },
        d = function (e) {
          var t, a, r;
          let { includeAllVariants: i } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { includeAllVariants: !0 },
            d = e.masterData.current,
            { masterVariant: c } = d,
            u = [
              ...(null !== (a = i ? d.variants : void 0) && void 0 !== a
                ? a
                : []),
            ].map((t) => (0, n.XJ)(t, e.id, { supplyChannelId: l.iG })),
            h = (0, n.XJ)(c, e.id, { supplyChannelId: l.iG }),
            m = [h, ...u],
            { key: p } = e,
            g = {
              isPublished: e.masterData.published,
              id: e.id,
              productType:
                null === (t = e.productType.obj) || void 0 === t
                  ? void 0
                  : t.key,
              name: d.name[l.Xn],
              masterVariant: h,
              variants: u,
              productKey: p,
              categories: e.masterData.current.categories.reduce(
                (e, t) => (t.obj ? [...e, s(t.obj)] : e),
                [],
              ),
              atLeastOneInStock: m.some((e) => {
                var t;
                return !!(null === (t = e.availability) || void 0 === t
                  ? void 0
                  : t.isOnStock);
              }),
              slug: d.slug[l.Xn],
            };
          return {
            ...g,
            isDermatologistRecommended:
              ((r = [g.brandName, ...g.variants.map((e) => e.brands)]),
              o.w.some((e) => r.includes(e))),
          };
        },
        c = (e) => {
          var t, a;
          let r = e.masterData.current,
            { masterVariant: i } = r;
          return {
            isPublished: e.masterData.published,
            productType:
              null === (t = e.productType.obj) || void 0 === t ? void 0 : t.key,
            name: r.name[l.Xn],
            description:
              null === (a = r.description) || void 0 === a ? void 0 : a[l.Xn],
            slug: r.slug[l.Xn],
            masterVariant: (0, n.XJ)(i, e.id, { supplyChannelId: l.iG }, d),
            id: e.id,
          };
        };
      var u = a(13619);
      let h = "expand="
        .concat(
          encodeURIComponent(
            "masterData.current.variants[*].attributes[*].value[*]",
          ),
          "&expand=",
        )
        .concat(
          encodeURIComponent(
            "masterData.current.masterVariant.attributes[*].value[*]",
          ),
          "&expand=",
        )
        .concat(
          encodeURIComponent("masterData.current.categories[*]"),
          "&expand=productType",
        );
      class m extends u.s {
        static getInstance() {
          return m.instance || (m.instance = new m()), m.instance;
        }
        _mapProduct(e, t) {
          var a, r;
          return (null === (r = e.productType) || void 0 === r
            ? void 0
            : null === (a = r.obj) || void 0 === a
              ? void 0
              : a.key) === i.ch.SOFT_BUNDLE
            ? c(e)
            : d(e, t);
        }
        async getProductById(e, t, a) {
          let r = await this.get(
            "products/".concat(e, "?").concat(h),
            a ? { headers: { Authorization: "Bearer ".concat(a) } } : void 0,
          );
          return this._mapProduct(r, t);
        }
        async getProductBySlug(e, t, a) {
          var r;
          let i =
            null ===
              (r = (
                await this.get(
                  "/products?where=masterData(current(slug(en-GB%3D%22"
                    .concat(e, "%22)))&")
                    .concat(h),
                  a
                    ? { headers: { Authorization: "Bearer ".concat(a) } }
                    : void 0,
                )
              ).results) || void 0 === r
              ? void 0
              : r[0];
          if (!i) throw Error("Product not found");
          return this._mapProduct(i, t);
        }
        async getProductBySlugOrId(e, t, a) {
          try {
            return await this.getProductBySlug(e, t, a);
          } catch (i) {
            let r = await this.getProductById(e, t, a);
            return r.slug && (r.redirectUrl = "/products/".concat(r.slug)), r;
          }
        }
      }
      let p = m.getInstance(),
        g = (e, t) => ["useGetProductById", "".concat(e), t],
        v = (e, t, a) =>
          (0, r.useQuery)({
            ...a,
            enabled: !!(e && (null == a ? void 0 : a.enabled) !== !1),
            queryKey: g(e, t),
            queryFn: () => p.getProductById(e, t),
          });
    },
    38065: (e, t, a) => {
      a.d(t, { y: () => n });
      var r = a(94799),
        i = a(37034);
      let n = (e) =>
        (0, r.jsx)(i.Spinner, {
          role: "status",
          "aria-busy": "true",
          "aria-label": "Loading spinner",
          ...e,
        });
    },
    39061: (e, t, a) => {
      a.d(t, { G: () => k, y: () => R });
      var r = a(94799),
        i = a(98814),
        n = a(59626),
        l = a(4306),
        o = a(62090),
        s = a(31634),
        d = a(89136),
        c = a(65329),
        u = a(34023),
        h = a(92616),
        m = a(17422),
        p = a(57184),
        g = a(41429),
        v = a(82536),
        y = a(57948),
        b = a(39693),
        x = a(41838),
        S = a(15231),
        I = a(8013),
        C = a(38065);
      let f = {
          bdna: (e) => (0, r.jsx)(b.BDNAIcon, { ...e, color: "white" }),
          sparkle: b.BDNASparkleIcon,
        },
        k = (e) => {
          let {
            text: t,
            matchScore: a,
            productId: b,
            productUrl: k,
            brandName: E,
            productDescription: T,
            addToCartPayload: j,
            variant: w,
            fullWidth: A = !1,
            size: _ = "md",
            iconName: R = "sparkle",
            noAnimation: L = !1,
            addToCartAnalytics: N,
            onTagClick: D,
            price: P,
            strikePrice: F,
            isOnStock: B,
            showScoreTips: O = !1,
            showScoreOutOfTen: M = !1,
          } = e;
          (("scoreLight" !== w || a) && ("scoreBuilder" !== w || a)) ||
            (w = "noScore");
          let { user: U } = (0, v.A)(),
            V = (0, i.useMultiStyleConfig)("MatchScoreTag", {
              variant: w,
              size: _,
            }),
            [G, { on: H, off: z }] = (0, n.useBoolean)(!1),
            [K, q] = (0, u.useState)(!1),
            W = "text" === w ? 6 : 4,
            Y = "".concat(void 0 !== a && 0 !== a ? a : "?"),
            { sendAnalyticsEvent: X } = (0, p.s)(),
            Q = f[R],
            Z = (0, y.l)(),
            J = {
              offscreen: { rotate: 0 },
              animate: {
                rotate: -90,
                transition: { type: "ease", duration: 0.3 },
              },
            },
            $ = {
              offscreen: { opacity: 0.65 * !!M, width: M ? "auto" : "0px" },
              animate: {
                opacity: 0.65,
                width: "auto",
                transition: { type: "ease", duration: 0.3 },
              },
            },
            ee = () => {
              let e = null == U ? void 0 : U.segmentId,
                t = {
                  click_name: Y,
                  products: null == N ? void 0 : N.products,
                  click_location: null == N ? void 0 : N.click_location,
                };
              U && (t.bdna_segment_id = e),
                X(
                  null === h.m3 || void 0 === h.m3
                    ? void 0
                    : h.m3.matchExplained.bind(h.m3),
                  m.s.MATCH_EXPLAINED,
                  t,
                );
            },
            et = (e) => {
              if ((ee(), D)) return D(e);
              e.preventDefault(), e.stopPropagation(), a && H();
            };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(c.P.div, {
                initial: "offscreen",
                whileInView: !L && Z ? "animate" : "",
                whileHover: L || Z ? "" : "animate",
                viewport: { amount: 0.5, margin: "-80px 0px -200px 0px" },
                "data-testid": "Match score tag animation",
                style: A ? { width: "100%" } : void 0,
                children: (0, r.jsx)(() => {
                  let e = (e) => {
                    let { onClick: a } = e;
                    return (0, r.jsx)(l.Box, {
                      __css: V.container,
                      "aria-label": "Match score result",
                      "data-testid": "Match score result",
                      as: "button",
                      onClick: (e) => {
                        et(e), null == a || a();
                      },
                      background: K ? "primary.black.20" : void 0,
                      children: K
                        ? (0, r.jsx)(l.Box, {
                            minWidth: 10,
                            "aria-label": "Loading match score",
                            children: (0, r.jsx)(C.y, {
                              color: "primary.white",
                              size: "xs",
                            }),
                          })
                        : (0, r.jsxs)(o.Center, {
                            __css: V.text,
                            display: "inline-flex",
                            children: [
                              (0, r.jsx)(s.Flex, {
                                as: c.P.span,
                                variants: M ? void 0 : J,
                                children: (0, r.jsx)(Q, {
                                  width: W,
                                  height: W,
                                  "aria-label": "".concat(R, " icon"),
                                  "data-testid": "Icon",
                                }),
                              }),
                              (0, r.jsxs)(d.Text, {
                                as: c.P.div,
                                whiteSpace: "nowrap",
                                "aria-label": "Match score",
                                "data-testid": "Match score",
                                textStyle: "body.semibold",
                                children: [
                                  Y,
                                  (0, r.jsx)(d.Text, {
                                    as: c.P.span,
                                    display: "inline-flex",
                                    textStyle: "body",
                                    opacity: 0.65 * !!M,
                                    width: M ? "auto" : "0px",
                                    variants: $,
                                    "aria-label": "Match score out of 10",
                                    "data-testid": "Match score out of 10",
                                    children: "/10",
                                  }),
                                ],
                              }),
                              (0, r.jsx)(d.Text, {
                                as: "span",
                                textStyle: "body",
                                "aria-label": "Match score text",
                                "data-testid": "match score text",
                                children: "".concat(null != t ? t : ""),
                              }),
                            ],
                          }),
                    });
                  };
                  return !a && O
                    ? (0, r.jsx)(x.h, {
                        CtaComponent: e,
                        explainerSections: g.P,
                        title: "Learn the magic behind your match scores",
                        children: (0, r.jsx)(s.Flex, {
                          justifyContent: "center",
                          position: { base: "sticky", md: "relative" },
                          bottom: { base: "0", md: "auto" },
                          children: (0, r.jsx)(S.ButtonLink, {
                            "aria-label": "Start Quiz",
                            dataTestId: "Start quiz",
                            variant: "primary",
                            href: "/bdna-quiz",
                            px: 10,
                            children: "Start quiz",
                          }),
                        }),
                      })
                    : (0, r.jsx)(e, {});
                }, {}),
              }),
              !!b &&
                !!k &&
                !!a &&
                !!E &&
                !!T &&
                (0, r.jsx)(I.v, {
                  productId: b,
                  productUrl: k,
                  brandName: E,
                  productDescription: T,
                  score: a,
                  opened: G,
                  addToCartPayload: j,
                  price: P,
                  strikePrice: F,
                  isOnStock: !!B,
                  onClose: z,
                  setMatchScoreLoading: q,
                  addToCartAnalytics: N,
                  "aria-label": "Match score modal",
                  "data-testid": "Match score modal",
                }),
            ],
          });
        };
      var E = a(24689),
        T = a(73261),
        j = a(58716),
        w = a(43517);
      let A = {
          bdna: (e) => (0, r.jsx)(b.BDNAIcon, { ...e, color: "white" }),
          sparkle: b.BDNASparkleIcon,
          lock: (e) => (0, r.jsx)(b.LockIcon, { ...e, color: "white" }),
        },
        _ = (e, t, a) => {
          if (void 0 !== e && 0 !== e && a) return "".concat(e, "/10");
          let r = (0, j.c)(
            T.T.PRODUCT_CARD_UNPERSONALISED_MATCH_SCORE_TAG_VARIANT,
          );
          return "generic" === r
            ? "Is this a match for you?"
            : "product-type-specific" === r &&
                (t === E.ch.HAIRCARE || t === E.ch.SKINCARE)
              ? "Is this right for your ".concat(
                  t === E.ch.HAIRCARE ? "hair" : "skin",
                  "?",
                )
              : null;
        },
        R = (e) => {
          let {
              matchScore: t,
              productId: a,
              productType: o,
              productUrl: d,
              brandName: c,
              productDescription: b,
              addToCartPayload: f,
              variant: k,
              iconName: E = "sparkle",
              addToCartAnalytics: T,
              onTagClick: j,
              price: R,
              strikePrice: L,
              isOnStock: N,
              isLight: D = !1,
              partialDiagnose: P,
            } = e,
            { user: F } = (0, v.A)(),
            B = (0, i.useMultiStyleConfig)("MatchScoreTag", { variant: k }),
            [O, { on: M, off: U }] = (0, n.useBoolean)(!1),
            { sendAnalyticsEvent: V } = (0, p.s)(),
            [G, H] = (0, u.useState)(!1),
            z = (0, w.B)(o),
            K = (0, y.l)() ? 4 : 6,
            q = _(t, o, z);
          if (!q) return null;
          let W = P ? "quick match" : "match",
            Y = !!a && !!d && !!t && !!c && !!b,
            X = A[E],
            Q = () => {
              let e = null == F ? void 0 : F.segmentId,
                t = {
                  click_name: q,
                  products: null == T ? void 0 : T.products,
                };
              F && (t.bdna_segment_id = e),
                V(
                  null === h.m3 || void 0 === h.m3
                    ? void 0
                    : h.m3.matchExplained.bind(h.m3),
                  m.s.MATCH_EXPLAINED,
                  t,
                );
            },
            Z = (e) => {
              if ((Q(), j)) return j(e);
              e.preventDefault(), e.stopPropagation(), M();
            };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(
                () =>
                  (0, r.jsx)(
                    () =>
                      (0, r.jsx)(l.Box, {
                        __css: B.container,
                        "aria-label": "Match score result",
                        "data-testid": "Match score result",
                        as: Y || j ? "button" : "div",
                        onClick: (e) => {
                          Z(e);
                        },
                        background: G ? "primary.black.20" : void 0,
                        children: G
                          ? (0, r.jsx)(l.Box, {
                              w: "100%",
                              "aria-label": "Loading match score",
                              children: (0, r.jsx)(C.y, {
                                color: "primary.white",
                                size: "xs",
                              }),
                            })
                          : (0, r.jsxs)(s.Flex, {
                              justifyContent: "space-between",
                              alignItems: "center",
                              w: "100%",
                              children: [
                                (0, r.jsxs)(l.Box, {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1,
                                  "aria-label": "Match score",
                                  "data-testid": "Match score",
                                  textStyle: D
                                    ? "function.text.small"
                                    : {
                                        base: "function.text.medium",
                                        lg: "function.text.large",
                                      },
                                  children: [
                                    (0, r.jsx)(l.Box, {
                                      as: "span",
                                      children: q,
                                    }),
                                    !D &&
                                      (0, r.jsx)(l.Box, {
                                        as: "span",
                                        children: t && W,
                                      }),
                                  ],
                                }),
                                !D &&
                                  (0, r.jsx)(X, {
                                    width: K,
                                    height: K,
                                    "aria-label": "".concat(E, " icon"),
                                    "data-testid": "Icon",
                                  }),
                              ],
                            }),
                      }),
                    {},
                  ),
                {},
              ),
              Y
                ? (0, r.jsx)(I.v, {
                    productId: a,
                    productUrl: d,
                    brandName: c,
                    productDescription: b,
                    score: t,
                    opened: O,
                    addToCartPayload: f,
                    price: R,
                    strikePrice: L,
                    isOnStock: !!N,
                    onClose: U,
                    setMatchScoreLoading: H,
                    addToCartAnalytics: T,
                    "aria-label": "Match score modal",
                    "data-testid": "Match score modal",
                  })
                : (0, r.jsx)(x.h, {
                    explainerSections: g.P,
                    title: "Learn the magic behind your match scores",
                    isOpen: O,
                    onClose: () => {
                      U();
                    },
                    children: (0, r.jsx)(s.Flex, {
                      justifyContent: "center",
                      position: { base: "sticky", md: "relative" },
                      bottom: { base: "0", md: "auto" },
                      children: (0, r.jsx)(S.ButtonLink, {
                        "aria-label": "Start Quiz",
                        dataTestId: "Start quiz",
                        variant: "primary",
                        href: "/bdna-quiz",
                        px: 10,
                        children: "Start now",
                      }),
                    }),
                  }),
            ],
          });
        };
    },
    39311: (e, t, a) => {
      a.d(t, { p: () => o });
      var r = a(94799),
        i = a(98814),
        n = a(76026),
        l = a(11506);
      let o = (e) => {
        let {
            paddingLeft: t,
            paddingRight: a,
            placeholder: o,
            variant: s,
            ariaLabel: d,
            dataTestId: c,
            height: u,
            type: h,
            enterKeyHint: m,
            name: p,
            id: g,
            register: v,
            rules: y,
            readOnly: b,
            value: x,
            showRequiredAsterisk: S,
            onKeyDown: I,
            onChange: C,
            autoComplete: f,
            label: k,
            excludedKeys: E,
          } = e,
          T = (0, i.useMultiStyleConfig)("Input", { variant: s }),
          j = (0, r.jsx)(n.Input, {
            paddingLeft: t,
            paddingRight: a,
            placeholder:
              S && (null == y ? void 0 : y.required) ? "".concat(o, "*") : o,
            variant: s,
            enterKeyHint: m,
            "aria-label": d,
            "data-testid": c,
            type: h,
            height: u,
            onKeyDown: (e) => {
              let t = e.code;
              (null == E ? void 0 : E.includes(t))
                ? e.preventDefault()
                : I && I(e);
            },
            value: x,
            id: g,
            readOnly: b,
            autoComplete: f,
            ...(v && p ? v(p, y) : { onChange: C, value: x, onKeyDown: I }),
          });
        return k
          ? (0, r.jsxs)(l.FormLabel, {
              htmlFor: g,
              sx: T.label,
              children: [k, j],
            })
          : j;
      };
    },
    40440: (e, t, a) => {
      a.d(t, { R: () => d });
      var r = a(94799),
        i = a(31634),
        n = a(89136),
        l = a(66778),
        o = a(87704),
        s = a(68099);
      let d = (e) => {
        let { price: t, strikePrice: a, size: d } = e,
          c = "number" == typeof a && (0, l._)(t, a);
        return (0, r.jsxs)(i.Flex, {
          textStyle: {
            base: "function.text.medium",
            lg: "function.text.large",
          },
          textAlign: "left",
          flexWrap: "wrap",
          alignItems: "center",
          children: [
            (0, r.jsx)(i.Flex, {
              gap: 1,
              textAlign: "left",
              alignItems: "center",
              children:
                void 0 !== t &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    !!a &&
                      t !== a &&
                      (0, r.jsx)(n.Text, {
                        order: 2,
                        textDecoration: "line-through",
                        color: "primary.black.60",
                        children: (0, o.S)(a),
                      }),
                    (0, r.jsx)(n.Text, {
                      order: 1,
                      color:
                        a && t !== a
                          ? "semantic.orange.20"
                          : "primary.black.20",
                      children: (0, o.S)(t),
                    }),
                    c && c > 0
                      ? (0, r.jsx)(i.Flex, {
                          order: 3,
                          children: (0, r.jsx)(s.e, {
                            colorScheme: "discount",
                            children: "-".concat(c, "%"),
                          }),
                        })
                      : null,
                  ],
                }),
            }),
            !!d &&
              (0, r.jsxs)(n.Text, {
                color: "primary.black.80",
                whiteSpace: "nowrap",
                order: 4,
                children: [
                  " • ",
                  (0, r.jsx)(n.Text, {
                    as: "span",
                    color: "primary.black.40",
                    children: d,
                  }),
                ],
              }),
          ],
        });
      };
    },
    41429: (e, t, a) => {
      a.d(t, { P: () => r });
      let r = [
        {
          imageSrc: "/images/behindTheMatch/take-quiz.webp",
          title: "1. Take our quiz",
          description:
            "We identify your BeautyDNA profile out of 100 million possible combinations to determine your product compatibility.",
        },
        {
          imageSrc: "/images/behindTheMatch/view-match.webp",
          title: "2. View your match scores",
          description:
            "Our algorithm uses 84 different criteria to asses the formulation efficacy of every product to your BeautyDNA.",
        },
        {
          imageSrc: "/images/behindTheMatch/tap-learn.webp",
          title: "3. Tap to learn more",
          description:
            "All scores are brand agnostic and totally transparent so you can investigate what makes it high or low for you.",
        },
      ];
    },
    41838: (e, t, a) => {
      a.d(t, { h: () => x });
      var r = a(94799),
        i = a(49325),
        n = a(16774),
        l = a(11425),
        o = a(75093),
        s = a(52360),
        d = a(27566),
        c = a(89136),
        u = a(16581),
        h = a(66572),
        m = a(87798),
        p = a(31634),
        g = a(92616),
        v = a(17422),
        y = a(57184),
        b = a(82536);
      let x = (e) => {
          let {
              explainerSections: t,
              CtaComponent: a,
              analyticsProperties: m,
              isOpen: p,
              onClose: x,
              title: I,
              children: C,
            } = e,
            [f, k] = (0, i.useControllableState)({
              value: p,
              defaultValue: !1,
              onChange: (e) => !e && (null == x ? void 0 : x()),
            }),
            { user: E } = (0, b.A)(),
            { sendAnalyticsEvent: T } = (0, y.s)(),
            j = () => {
              if (!m) return;
              let e = null == E ? void 0 : E.segmentId;
              E && (m.bdna_segment_id = e),
                T(
                  null === g.m3 || void 0 === g.m3
                    ? void 0
                    : g.m3.behindTheMatch.bind(g.m3),
                  v.s.BEHIND_THE_MATCH,
                  m,
                );
            };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              a &&
                (0, r.jsx)(a, {
                  onClick: () => {
                    j(), k(!0);
                  },
                }),
              (0, r.jsxs)(n.Modal, {
                variant: "behindMatch",
                isCentered: !0,
                isOpen: f,
                onClose: () => k(!1),
                scrollBehavior: "inside",
                children: [
                  (0, r.jsx)(l.ModalOverlay, {}),
                  (0, r.jsxs)(o.ModalContent, {
                    gap: { base: "10", md: "6" },
                    paddingX: { base: "4", md: "6" },
                    paddingY: 8,
                    children: [
                      (0, r.jsx)(s.ModalCloseButton, {
                        onClick: () => k(!1),
                        size: "md",
                        "aria-label": "close",
                        "data-testid": "Close",
                        backgroundColor: "white",
                      }),
                      (0, r.jsx)(d.ModalHeader, {
                        padding: 0,
                        children: (0, r.jsx)(c.Text, {
                          textStyle: "heading.h6.bold",
                          children: I,
                        }),
                      }),
                      (0, r.jsxs)(u.ModalBody, {
                        sx: { scrollbarWidth: "none" },
                        css: { "&::-webkit-scrollbar": { display: "none" } },
                        padding: 0,
                        children: [
                          (0, r.jsx)(h.List, {
                            display: "flex",
                            flexDirection: { base: "column", md: "row" },
                            gap: { base: "10", md: "8" },
                            children: t.map((e, t) =>
                              (0, r.jsx)(S, { ...e }, t),
                            ),
                          }),
                          C,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        S = (e) => {
          let { title: t, description: a, imageSrc: i } = e;
          return (0, r.jsxs)(h.ListItem, {
            display: "flex",
            flexDirection: "column",
            gap: "8",
            paddingTop: { base: 0, lg: 4 },
            paddingBottom: { base: 2, lg: 4 },
            width: "100%",
            children: [
              (0, r.jsx)(m.Image, {
                borderRadius: "2xl",
                "aria-label": "Match explainer image",
                "data-testid": "Match explainer image",
                src: i,
                alt: t,
                objectFit: "cover",
                height: "auto",
                width: "100%",
              }),
              (0, r.jsxs)(p.Flex, {
                direction: "column",
                paddingBottom: "8",
                gap: 2,
                children: [
                  (0, r.jsx)(c.Text, {
                    textStyle: "body.semibold",
                    children: t,
                  }),
                  (0, r.jsx)(c.Text, { textStyle: "body", children: a }),
                ],
              }),
            ],
          });
        };
    },
    41960: (e, t, a) => {
      a.d(t, { Z: () => o });
      var r = a(50692),
        i = a(36918),
        n = a(33802);
      let l = { addRandomSeed: !0 },
        o = (e, t, a) => {
          var o;
          let {
              getQueryKey: s,
              enabled: d,
              getSearchArgs: c,
            } = (0, n.t)(
              {
                ...l,
                enabled: null == t ? void 0 : t.enabled,
                productType:
                  (null === (o = e.productTypes) || void 0 === o
                    ? void 0
                    : o.length) === 1
                    ? e.productTypes[0]
                    : void 0,
              },
              a,
            ),
            u = c(e),
            h = s("useGetProductsBySearch", u);
          return (0, r.useQuery)({
            queryKey: h,
            ...t,
            enabled: d,
            queryFn: () => i.k.getProductsBySearch(u),
          });
        };
    },
    42619: (e, t, a) => {
      a.d(t, { w: () => n });
      var r = a(34023),
        i = a(93277);
      let n = (e) => {
        let { error: t, settings: a } = e,
          n = (0, i.iA)(),
          l = (0, r.useCallback)(
            (e) => {
              var t, r;
              return n({
                type: i.P7.Add,
                alertKey:
                  null !== (t = null == a ? void 0 : a.key) && void 0 !== t
                    ? t
                    : "defaultAlertKey",
                message:
                  null !== (r = null == a ? void 0 : a.message) && void 0 !== r
                    ? r
                    : e.message,
                variant: i.iC.Error,
              });
            },
            [n, a],
          );
        (0, r.useEffect)(() => {
          t && l(t);
        }, [t]);
      };
    },
    43137: (e, t, a) => {
      a.d(t, { k: () => n });
      var r = a(34023),
        i = a(56742);
      let n = (e) => {
        let { children: t } = e,
          [a, n] = (0, r.useState)(null);
        return (
          (0, r.useEffect)(() => {
            n(document.getElementById("dockSiblingContainer"));
          }, [n]),
          a && (0, i.createPortal)(t, a)
        );
      };
    },
    43485: (e, t, a) => {
      a.d(t, { v: () => r.Tag });
      var r = a(81277);
    },
    43517: (e, t, a) => {
      a.d(t, { B: () => l });
      var r = a(24689),
        i = a(82536),
        n = a(80807);
      let l = (e) => {
        let { isSkincareDecoded: t, isHaircareDecoded: a } = (0, i.A)(),
          {
            data: { partialDiagnose: l },
          } = (0, n.W)(e);
        switch (e) {
          case r.ch.SKINCARE:
            return !!t || l;
          case r.ch.HAIRCARE:
            return !!a;
          default:
            return !1;
        }
      };
    },
    48973: (e, t, a) => {
      a.d(t, { B: () => l });
      var r = a(50692),
        i = a(36918),
        n = a(80807);
      let l = (e) => {
        var t;
        let a =
            null === (t = null == e ? void 0 : e.enabled) || void 0 === t || t,
          {
            data: { preferences: l, partialDiagnose: o },
            userIsReady: s,
            isLoading: d,
          } = (0, n.W)();
        return (0, r.useQuery)({
          queryKey: [l],
          ...e,
          enabled: a && !!l && s && !d,
          queryFn: () =>
            i.k.getScoreNormalizeFactors({
              partialDiagnose: o,
              preferences: l,
            }),
        });
      };
    },
    50804: (e, t, a) => {
      a.d(t, {
        oX: () => n,
        __: () => i,
        TE: () => v,
        YT: () => r,
        Mn: () => y,
        tS: () => I,
        bY: () => u,
        R3: () => x,
        s1: () => f,
        Dz: () => p,
        J: () => m,
        G3: () => C,
        Qn: () => h,
        Vs: () => b,
        ZE: () => T,
        Zi: () => k,
        y5: () => E,
        PF: () => d,
        yK: () => s,
        Ub: () => c,
        lX: () => l,
        SE: () => o,
        X3: () => S,
        on: () => g,
        ph: () => w,
        og: () => j,
      });
      let r = {
          MALE: { key: "male", label: "Male" },
          FEMALE: { key: "female", label: "Female" },
          NON_BINARY: { key: "non_binary", label: "Non-binary" },
          INTERSEX: { key: "intersex", label: "Intersex" },
          GENDER_FLUID: { key: "gender_fluid", label: "Gender fluid" },
          ANOTHER_WAY: { key: "another_way", label: "Another way" },
          NONE: { key: "none", label: "Not disclosed" },
        },
        i = {
          LOW: { key: "low", label: "Affordable" },
          MEDIUMLOW: { key: "mediumlow", label: "Moderate price" },
          MEDIUMHIGH: { key: "mediumhigh", label: "Higher quality" },
          HIGH: { key: "high", label: "Invest in the best" },
        },
        n = {
          "18_29": { key: "18_29", label: "18-29" },
          "30_39": { key: "30_39", label: "30-39" },
          "40_54": { key: "40_54", label: "40-54" },
          "55_70": { key: "55_70", label: "55-70" },
          70: { key: "70", label: "70+" },
        },
        l = {
          LOW: { key: "low", label: "Low " },
          HIGH: { key: "high", label: "High" },
          NO: { key: "no", label: "Not sensitive" },
        },
        o = {
          DRY: { key: "dry", label: "Dry", icon: "SkinDrynessIcon" },
          COMBINATION: {
            key: "combination",
            label: "Combination",
            icon: "SkinCombinationIcon",
          },
          OILY: { key: "oily", label: "Oily", icon: "SkinOilinessIcon" },
          NORMAL: {
            key: "normal",
            label: "Balanced",
            icon: "SkinBalancedIcon",
          },
        },
        s = {
          ACNEBLEMISHPRONESKIN: {
            key: "acneblemishproneskin",
            label: "Blemish-prone Skin",
            icon: "SkinBlemishIcon",
          },
          DARKCIRCLESPUFFINESS: {
            key: "darkcirclespuffiness",
            label: "Dark Circles & Puffiness",
            icon: "SkinDarkCirclesIcon",
          },
          DRYNESSDEHYDRATION: {
            key: "drynessdehydration",
            label: "Dryness & Dehydration",
            icon: "SkinDrynessIcon",
          },
          DULLNESS: {
            key: "dullness",
            label: "Dullness",
            icon: "SkinDullnessIcon",
          },
          FINELINESWRINKLES: {
            key: "finelineswrinkles",
            label: "Fine Lines & Wrinkles",
            icon: "SkinWrinklesIcon",
          },
          HYPERPIGMENTATION: {
            key: "hyperpigmentation",
            label: "Hyperpigmentation",
            icon: "SkinHyperpigmentationIcon",
          },
          LACKOFFIRMNESS: {
            key: "lackoffirmness",
            label: "Lack of Firmness",
            icon: "SkinLackOfFirmnessIcon",
          },
          OILINESS: {
            key: "oiliness",
            label: "Oiliness",
            icon: "SkinOilinessIcon",
          },
          PORESBLACKHEADS: {
            key: "poresblackheads",
            label: "Pores & Blackheads",
            icon: "SkinPoresIcon",
          },
          REDNESS: {
            key: "redness",
            label: "Redness",
            icon: "SkinRednessIcon",
          },
          UNEVENSKINTONETEXTURE: {
            key: "unevenskintonetexture",
            label: "Uneven Skin Tone & Texture",
            icon: "SkinUnevenSkinToneIcon",
          },
          NONE: { key: "none", label: "None" },
        },
        d = {
          1: { key: "1", label: "Scented" },
          0: { key: "0", label: "Unscented" },
          NULL: { key: "null", label: "No preference" },
        },
        c = {
          REFRESHING: { key: "refreshing", label: "Refreshing" },
          FASTABSORBING: { key: "fastabsorbing", label: "Fast-absorbing" },
          SOOTHING: { key: "soothing", label: "Soothing" },
          HYDRATING: { key: "hydrating", label: "Hydrating" },
          TIGHTENING: { key: "tightening", label: "Tightening" },
          NULL: { key: "null", label: "No preference" },
        },
        u = {
          FLATHAIR: { key: "flathair", label: "Flat Hair" },
          OILINESS: { key: "oiliness", label: "Oiliness" },
          DRYNESS: { key: "dryness", label: "Dryness" },
          DANDRUFF: { key: "dandruff", label: "Dandruff" },
          HAIRLOSS: { key: "hairloss", label: "Hair Loss" },
          DULLNESS: { key: "dullness", label: "Dullness" },
          CURLDEFINITION: { key: "curldefinition", label: "Curl Definition" },
          SHRINKAGE: { key: "shrinkage", label: "Shrinkage" },
          FRIZZ: { key: "frizz", label: "Frizz" },
          DAMAGE: { key: "damage", label: "Damage" },
          BRASSINESS: { key: "brassiness", label: "Brassiness" },
          COLOURFADING: { key: "colourfading", label: "Colour Fading" },
          TANGLING: { key: "tangling", label: "Tangling" },
        },
        h = {
          STRAIGHT: { key: "straight", label: "Straight" },
          WAVY: { key: "wavy", label: "Wavy" },
          CURLY: { key: "curly", label: "Curly" },
          COILY: { key: "coily", label: "Coily" },
        },
        m = {
          SHORT: { key: "short", label: "Short" },
          CHINLENGTH: { key: "chinlength", label: "Chin-length" },
          SHOULDERLENGTH: { key: "shoulderlength", label: "Shoulder-length" },
          LONG: { key: "long", label: "Long" },
          VERYLONG: { key: "verylong", label: "Very long" },
        },
        p = {
          NOTSURE: { key: "notsure", label: "Not sure" },
          ONCEAMONTH: { key: "onceamonth", label: "Once a month" },
          ONCEAWEEK: { key: "onceaweek", label: "Once a week" },
          EVERYDAY: { key: "everyday", label: "Every day" },
        },
        g = {
          EVERYDAY: { key: "everyday", label: "Every day" },
          EVERYTWODAYS: { key: "everytwodays", label: "Every two days" },
          EVERYWEEK: { key: "everyweek", label: "Every week" },
          EVERYTWOWEEKS: { key: "everytwoweeks", label: "Every two weeks" },
        },
        v = {
          NATURAL: { key: "natural", label: "Natural" },
          WIGEXTENSIONSWEAVES: {
            key: "wigextensionsweaves",
            label: "Wig, extensions or weaves",
          },
          LOCKS: { key: "locks", label: "Locks" },
          BRAIDSTWISTSKNOTS: {
            key: "braidstwistsknots",
            label: "Braids, twists or knots",
          },
          RELAXED: { key: "relaxed", label: "Relaxed" },
        },
        y = {
          BLACK: { key: "black", label: "Black" },
          BROWN: { key: "brown", label: "Brown" },
          BLONDE: { key: "blonde", label: "Blonde" },
          RED: { key: "red", label: "Red" },
          WHITEGREY: { key: "whitegrey", label: "White or Grey" },
          OTHER: { key: "other", label: "Other" },
        },
        b = {
          FINE: { key: "fine", label: "Fine" },
          MEDIUM: { key: "medium", label: "Medium" },
          THICK: { key: "thick", label: "Thick" },
        },
        x = {
          HIGH: { key: "high", label: "High" },
          MEDIUM: { key: "medium", label: "Medium" },
          LOW: { key: "low", label: "Low" },
        },
        S = {
          MANY: { key: "many", label: "Many" },
          SOME: { key: "some", label: "Some" },
          VERYFEW: { key: "veryfew", label: "Very few" },
          NONE: { key: "none", label: "None" },
        },
        I = {
          NATURAL: { key: "natural", label: "Natural" },
          ALL: { key: "all", label: "All" },
          PART: { key: "part", label: "Part" },
          HIGHLIGHTED: { key: "highlighted", label: "Highlighted" },
        },
        C = {
          NORMAL: { key: "normal", label: "Normal" },
          MODERATE: { key: "moderate", label: "Moderate" },
          SEVERE: { key: "severe", label: "Severe" },
          NOTSURE: { key: "notsure", label: "Not sure" },
        },
        f = {
          POLLUTION: { key: "pollution", label: "Pollution" },
          HARDWATER: { key: "hardwater", label: "Hard Water" },
          HUMIDITY: { key: "humidity", label: "Humidity" },
          SUN: { key: "sun", label: "Sun" },
          CHLORINE: { key: "chlorine", label: "Chlorine" },
          NONE: { key: "none", label: "None" },
        },
        k = {
          SENSITIVE: { key: "sensitive", label: "Sensitive" },
          HEALTHY: { key: "healthy", label: "Healthy" },
          DRY: { key: "dry", label: "Dry" },
          FLAKY: { key: "flaky", label: "Flaky" },
        },
        E = {
          OILY: { key: "oily", label: "Oily" },
          BALANCED: { key: "balanced", label: "Balanced" },
          DRY: { key: "dry", label: "Dry" },
        },
        T = {
          OILY: { key: "oily", label: "Oily" },
          DRY: { key: "dry", label: "Dry" },
          NORMAL: { key: "normal", label: "Normal" },
        },
        j = (e, t) => {
          if (!t) return;
          let a = (t) => {
            var a;
            return null === (a = e[t.toUpperCase()]) || void 0 === a
              ? void 0
              : a.label;
          };
          return Array.isArray(t) ? t.map(a).join(", ") : a(t);
        },
        w = (e, t) => {
          var a, r;
          return t &&
            null !==
              (r =
                null === (a = e[t.toUpperCase()]) || void 0 === a
                  ? void 0
                  : a.icon) &&
            void 0 !== r
            ? r
            : "QuestionMarkIcon";
        };
    },
    51133: (e, t, a) => {
      a.d(t, { S: () => n });
      var r = a(22291);
      let i = "partial-diagnose-preferences",
        n = () => {
          let { setStorage: e, readStorage: t, removeItem: a } = (0, r.M)();
          return {
            readPreferences: () => t(i),
            setPreferences: (t) => {
              e(i, t);
            },
            clearPreferences: () => {
              a(i);
            },
          };
        };
    },
    51522: (e, t, a) => {
      a.d(t, { A: () => p });
      var r = a(94799),
        i = a(98814),
        n = a(15192),
        l = a(96101),
        o = a(4306),
        s = a(89136),
        d = a(55499),
        c = a(34023),
        u = a(39693),
        h = a(91130);
      let m = (e) => {
          switch (e) {
            case h.T.Outline:
            case h.T.MediumOutline:
            case h.T.SmallOutline:
              return "primary.warmGrey.70";
            case h.T.SmallOutlineWhite:
              return "primary.black.30";
            default:
              return "inherit";
          }
        },
        p = (e) => {
          let {
              title: t,
              expandedTitle: a,
              icon: h,
              superscript: p,
              analyticsCallback: g,
              variant: v,
              children: y,
              buttonIcon: b,
              isDisabled: x,
              noControls: S,
              borderTopRadius: I,
              style: C,
              buttonStyle: f,
            } = e,
            k = (0, i.useMultiStyleConfig)("Accordion", { variant: v }),
            E = m(v),
            T = (0, c.useId)(),
            j = () => {
              null == g || g();
            };
          return (0, r.jsx)(n.AccordionItem, {
            borderColor: E,
            isDisabled: x,
            borderTopRadius: I,
            style: C,
            "data-testid": "".concat(t, " Accordion item"),
            children: (e) => {
              let { isExpanded: i } = e;
              return (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("h2", {
                    onClick: j,
                    children: (0, r.jsxs)(l.AccordionButton, {
                      "aria-label": i && a ? "".concat(a) : "".concat(t),
                      "data-testid": i && a ? "".concat(a) : "".concat(t),
                      justifyContent: "space-between",
                      id: T,
                      pointerEvents: S ? "none" : void 0,
                      style: f,
                      children: [
                        (0, r.jsxs)(o.Box, {
                          __css: k.title,
                          children: [
                            h,
                            (0, r.jsxs)(s.Text, {
                              flex: 1,
                              children: [
                                i && a ? a : t,
                                p &&
                                  (0, r.jsx)(o.Box, {
                                    as: "sup",
                                    textStyle: "superscript.s1",
                                    ml: 1,
                                    children: p,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        !S &&
                          (b
                            ? b(i)
                            : (0, r.jsx)(o.Box, {
                                color: "primary.warmGrey.60",
                                children: (0, r.jsx)(u.AddIcon, {
                                  width: 6,
                                  height: 6,
                                  transform: i
                                    ? "rotate(-45deg)"
                                    : "rotate(0deg)",
                                  transition: "transform 0.2s",
                                  transformOrigin: "center",
                                }),
                              })),
                      ],
                    }),
                  }),
                  (0, r.jsx)(d.AccordionPanel, { children: y }),
                ],
              });
            },
          });
        };
    },
    53517: (e, t, a) => {
      a.d(t, { z: () => l });
      var r = a(50692),
        i = a(8754);
      let n = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return (t, a) => {
            var r, i;
            return null !==
              (i =
                null == e
                  ? void 0
                  : null === (r = e.find((e) => e.textId === t)) || void 0 === r
                    ? void 0
                    : r.value) && void 0 !== i
              ? i
              : a;
          };
        },
        l = () => {
          let { data: e } = (0, r.useQuery)({
              queryKey: ["marketingConsentText"],
              queryFn: () => i.B.getMarketingConsentText(),
            }),
            t = n(e),
            a = {
              footerTitle: t(
                "footer.marketingConsentTitle",
                "Sign up to Noli emails for exclusive offers and our latest updates",
              ),
              legalFootnote: t(
                "marketingConsentFootnote",
                "You must be 18+ to receive marketing from us. Unsubscribe at any time. For more details see our",
              ),
              checkboxText: t(
                "marketingConsentCheckbox",
                "Receive discounts and Noli emails",
              ),
            };
          return {
            ...a,
            legalFootnoteFull: "".concat(a.legalFootnote, " Privacy Policy."),
          };
        };
    },
    55768: (e, t, a) => {
      a.d(t, { F: () => g });
      var r = a(94799),
        i = a(98814),
        n = a(4306),
        l = a(34023),
        o = a(38065),
        s = a(18968),
        d = a(59573);
      let c = (e) => {
          let { handlePrev: t, handleNext: a, variant: l = s.m.fullSize } = e,
            o = (0, i.useMultiStyleConfig)("Carousel"),
            c = l === s.m.mini ? 4 : [4, "10%"],
            u = l === s.m.mini ? "blackChevron" : "chevron";
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(n.Box, {
                __css: o.buttonContainer,
                left: c,
                children: (0, r.jsx)(d.L, {
                  size: 8,
                  iconSize: 8,
                  variant: u,
                  direction: "left",
                  ariaLabel: "Carousel previous slide",
                  "data-testid": "Carousel previous slide",
                  onClick: t,
                }),
              }),
              (0, r.jsx)(n.Box, {
                __css: o.buttonContainer,
                right: c,
                children: (0, r.jsx)(d.L, {
                  size: 8,
                  iconSize: 8,
                  variant: u,
                  direction: "right",
                  ariaLabel: "Carousel next slide",
                  "data-testid": "Carousel next slide",
                  onClick: a,
                }),
              }),
            ],
          });
        },
        u = (e) => {
          let { totalSlides: t, currentIndex: a } = e,
            o = (0, l.useRef)(null),
            [s, d] = (0, l.useState)(0),
            c = (0, i.useMultiStyleConfig)("Carousel"),
            u = () => {
              var e;
              (null === (e = o.current) || void 0 === e
                ? void 0
                : e.clientWidth) && d(o.current.clientWidth);
            };
          return (
            (0, l.useLayoutEffect)(
              () => (
                window.addEventListener("resize", u),
                u(),
                () => {
                  window.removeEventListener("resize", u);
                }
              ),
              [],
            ),
            (0, r.jsx)(n.Box, {
              __css: c.scrollBarContainer,
              "data-testid": "Scrollbar",
              children: (0, r.jsx)(n.Box, {
                ref: o,
                __css: c.scrollBarDrag,
                "data-testid": "ScrollbarDrag",
                width: "".concat(100 / t, "%"),
                transform: "translate3d(".concat(a * s, "px, 0px, 0px)"),
                transitionDuration: "300ms",
              }),
            })
          );
        };
      var h = a(93339);
      let m = (e) => {
          let {
              index: t,
              onSelect: a,
              selectedIndex: l,
              children: o,
              variant: s,
              backgroundStyle: d,
              backgroundColor: c,
            } = e,
            u = (0, i.useMultiStyleConfig)("Thumbnail", { variant: s });
          return (0, r.jsx)(n.Box, {
            role: "group",
            "aria-roledescription": "thumbnail",
            "aria-label": "thumbnail item ".concat(t),
            "data-testid": "thumbnail item ".concat(t),
            children: (0, r.jsx)(h.Button, {
              __css: u.container,
              "aria-roledescription": "Thumbnail",
              "aria-label": "thumbnail ".concat(t),
              "data-testid": "thumbnail ".concat(t),
              "aria-pressed": l === t,
              onClick: a && (() => a(t)),
              bgGradient: d,
              bgColor: c,
              children: o,
            }),
          });
        },
        p = (e) => {
          let { children: t, onSelect: a, selectedIndex: o } = e,
            s = (0, i.useMultiStyleConfig)("Carousel");
          return (0, r.jsx)(n.Box, {
            __css: s.carouselThumbnails,
            role: "group",
            "aria-label": "Carousel thumbnails",
            "data-testid": "Carousel thumbnails",
            children: l.Children.map(t, (e) =>
              (0, r.jsx)(m, {
                variant: "carouselThumbnail",
                ...(null == e ? void 0 : e.props),
                selectedIndex: o,
                onSelect: a,
              }),
            ),
          });
        },
        g = (e) => {
          let {
              children: t,
              maxHeight: a,
              infinite: d,
              alternativeThumbnails: h,
              onSlideChange: m,
              loading: v = !1,
              variant: y = s.m.fullSize,
              hasThumbnails: b = !0,
              hasNavigation: x = !1,
              hasScrollbar: S = !1,
              isSquare: I = !1,
            } = e,
            C = l.Children.count(t),
            [f, k] = (0, l.useState)(0),
            [E, T] = (0, l.useState)(0),
            j = (0, l.useRef)(null),
            w = (0, i.useMultiStyleConfig)("Carousel"),
            A = (e) => {
              k(e), null == m || m("function" == typeof e ? e(f) : e);
            };
          return ((0, l.useEffect)(() => {
            var e, t;
            let a =
              null == j
                ? void 0
                : null === (t = j.current) || void 0 === t
                  ? void 0
                  : null === (e = t.children) || void 0 === e
                    ? void 0
                    : e[f];
            a && T(a.offsetLeft);
          }, [f]),
          v)
            ? (0, r.jsxs)(n.Box, {
                __css: I ? w.carouselLoaderSquare : w.carouselLoader,
                children: [
                  (0, r.jsx)(o.y, { color: "primary.white" }),
                  b &&
                    (0, r.jsx)(p, {
                      selectedIndex: 0,
                      onSelect: A,
                      "aria-label":
                        "Placeholder slide while the page is loading",
                      "data-testid":
                        "Placeholder slide while the page is loading",
                      children: Array.from([, , , ,]).map((e, t) =>
                        (0, r.jsx)(
                          g.Slide,
                          {
                            index: t,
                            children: (0, r.jsx)(n.Box, {
                              backgroundColor: "primary.warmGrey.80",
                              width: "100%",
                              height: "100%",
                            }),
                          },
                          t,
                        ),
                      ),
                    }),
                ],
              })
            : C
              ? (0, r.jsxs)(n.Box, {
                  __css: I ? w.carouselSquare : w.carousel,
                  maxHeight: a,
                  role: "region",
                  "aria-roledescription": "Carousel",
                  "aria-busy": !1,
                  "data-testid": "Carousel",
                  children: [
                    (0, r.jsxs)(n.Box, {
                      ref: j,
                      __css: w.carouselWrapper,
                      transform: "translate(-".concat(E, "px)"),
                      children: [t, !!d && t],
                    }),
                    x &&
                      (0, r.jsx)(c, {
                        variant: y,
                        handleNext: () => {
                          A((e) => (e === C - 1 ? 0 : e + 1));
                        },
                        handlePrev: () => {
                          A((e) => (0 === e ? C - 1 : e - 1));
                        },
                      }),
                    S && (0, r.jsx)(u, { currentIndex: f, totalSlides: C }),
                    b &&
                      (0, r.jsx)(p, {
                        selectedIndex: f,
                        onSelect: A,
                        children: null != h ? h : t,
                      }),
                  ],
                })
              : null;
        };
      g.Slide = (e) => {
        let {
            index: t,
            children: a,
            backgroundStyle: l,
            variant: o = s.m.fullSize,
          } = e,
          d = (0, i.useMultiStyleConfig)("Carousel");
        return (0, r.jsx)(n.Box, {
          __css: o === s.m.mini ? d.miniCarouselItem : d.carouselItem,
          bgGradient: l,
          role: "group",
          "aria-roledescription": "Slide",
          "aria-label": "carousel-item-".concat(t),
          "data-testid": "carousel-item-".concat(t),
          children: a,
        });
      };
    },
    57403: (e, t, a) => {
      a.d(t, { A: () => q, y: () => K });
      var r = a(94799),
        i = a(34023),
        n = a(24631),
        l = a(12963),
        o = a(60968),
        s = a(55272),
        d = a(4306),
        c = a(31634),
        u = a(89136),
        h = a(4099),
        m = a(27357),
        p = a(92616),
        g = a(17422),
        v = a(57184),
        y = a(81352),
        b = a(80807),
        x = a(39693),
        S = a(2906),
        I = a(11737),
        C = a(4639),
        f = a(86373),
        k = a(57546),
        E = a(26899),
        T = a(39061),
        j = a(10606),
        w = a(133),
        A = a(40440),
        _ = a(80880),
        R = a(66572),
        L = a(53738),
        N = a(65329),
        D = a(57948),
        P = a(26408),
        F = (function (e) {
          return (e[(e.LEFT = -1)] = "LEFT"), (e[(e.RIGHT = 1)] = "RIGHT"), e;
        })(F || {});
      let B = (e) => {
        var t;
        let { images: a, onClick: n } = e,
          [l, o] = (0, i.useState)(0),
          [s, u] = (0, i.useState)(1),
          h = (0, D.l)(),
          m = (0, i.useRef)(null),
          [p, g] = (0, i.useState)(0),
          v = () => {
            u(1), o((e) => (e + 1) % a.length);
          },
          y = () => {
            u(-1), o((e) => (0 === e ? a.length - 1 : e - 1));
          };
        return (
          (0, i.useEffect)(
            () => () => {
              m.current && (clearInterval(m.current), (m.current = null));
            },
            [],
          ),
          (0, r.jsxs)(d.Box, {
            position: "relative",
            height: "100%",
            aspectRatio: "0.81 / 1",
            overflow: "hidden",
            cursor: "pointer",
            onTouchStart: (e) => {
              g(e.touches[0].clientX);
            },
            onTouchEnd: (e) => {
              let t = p - e.changedTouches[0].clientX;
              t > 50 ? v() : t < -50 && y();
            },
            onMouseEnter: () => {
              !h && (m.current || (m.current = setInterval(v, 1500)));
            },
            onMouseLeave: () => {
              m.current && (clearInterval(m.current), (m.current = null)), o(0);
            },
            onClick: n,
            "data-testid": "productCardSlider",
            children: [
              (0, r.jsx)(L.N, {
                custom: s,
                initial: !1,
                children: (0, r.jsx)(
                  P.e,
                  {
                    custom: s,
                    variants: {
                      enter: (e) => ({
                        x: 100 * e + "%",
                        transition: { duration: 0.3, ease: "easeInOut" },
                      }),
                      center: {
                        x: "0%",
                        transition: { duration: 0.3, ease: "easeInOut" },
                      },
                      exit: (e) => ({
                        x: -100 * e + "%",
                        transition: { duration: 0.3, ease: "easeInOut" },
                      }),
                    },
                    initial: "enter",
                    animate: "center",
                    exit: "exit",
                    w: "100%",
                    h: "100%",
                    position: "absolute",
                    inset: 0,
                    children: (0, r.jsx)(k.G, {
                      image: {
                        src:
                          null === (t = a[l]) || void 0 === t ? void 0 : t.url,
                        fill: !0,
                        sizes: { base: "11.25rem", lg: "18rem" },
                        quality: 90,
                        alt: "",
                        placeholder: "blur",
                        blurDataURL:
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIGNsYXNzPSJsYXllciI+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxyZWN0IGZpbGw9IiNFOEU0REUiIGhlaWdodD0iNTAwIiBpZD0ic3ZnXzEiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwIiB3aWR0aD0iNTAwIiB4PSIwIiB5PSIwIj4KICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbCIgYmVnaW49IjAiIGR1cj0iMiIgZW5kPSIyIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIjRThFNERFOyM4MDgwODAiLz4KICA8L3JlY3Q+CiA8L2c+Cjwvc3ZnPg==",
                      },
                      objectFit: "cover",
                      testId: "product-image",
                    }),
                  },
                  "current-".concat(l),
                ),
              }),
              a.length > 1 &&
                (0, r.jsxs)(c.Flex, {
                  position: "absolute",
                  bottom: 2,
                  h: 1,
                  w: "calc(100% - 1rem)",
                  margin: "0 0.5rem",
                  bgColor: "primary.warmGrey.80",
                  borderRadius: "lg",
                  children: [
                    (0, r.jsx)(N.P.span, {
                      style: {
                        position: "absolute",
                        left: "calc(".concat((100 / a.length) * l, "%)"),
                        width: "calc(100% / ".concat(a.length, ")"),
                        height: "var(--chakra-space-1)",
                        borderRadius: "var(--chakra-radii-lg)",
                        backgroundColor:
                          "var(--chakra-colors-primary-black-10)",
                        transition: "left 0.3s ease-in-out",
                      },
                    }),
                    (0, r.jsx)(R.List, {
                      display: "flex",
                      w: "100%",
                      children: a.map((e, t) =>
                        (0, r.jsx)(
                          R.ListItem,
                          {
                            width: "calc(100% / ".concat(a.length, ")"),
                            children: (0, r.jsx)(c.Flex, {
                              width: "100%",
                              height: "100%",
                              as: "button",
                              "aria-label": "See product image ".concat(t + 1),
                              onClick: (e) => {
                                e.stopPropagation(), o(t);
                              },
                            }),
                          },
                          "indicatorsList-".concat(t),
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          })
        );
      };
      var O = a(29794),
        M = a(88197),
        U = a(3409),
        V = a(36305),
        G = a(23448);
      let H = (e) => {
          let {
              selectedVariant: t,
              variantOptions: a,
              onChange: i,
              testId: n,
            } = e,
            l =
              null == a
                ? void 0
                : a.map((e) => ({ label: e.label, value: e.value }));
          return (0, r.jsx)(O.Popover, {
            variant: "variantSelector",
            offset: [40, 8],
            children: (e) => {
              let { isOpen: o, onClose: s } = e;
              return (0, r.jsxs)(d.Box, {
                "data-testid": n,
                zIndex: 1,
                children: [
                  (0, r.jsx)(M.PopoverTrigger, {
                    children: (0, r.jsxs)(c.Flex, {
                      as: "button",
                      alignItems: "center",
                      gap: 1,
                      children: [
                        (0, r.jsx)(u.Text, {
                          textStyle: "function.text.large",
                          textColor: "primary.black.10",
                          children: t.label,
                        }),
                        o
                          ? (0, r.jsx)(x.ChevronLeftIcon, {
                              width: 6,
                              height: 6,
                            })
                          : (0, r.jsx)(x.ChevronDownIcon, {
                              width: 6,
                              height: 6,
                            }),
                      ],
                    }),
                  }),
                  (0, r.jsx)(U.PopoverContent, {
                    children: (0, r.jsx)(V.PopoverBody, {
                      children:
                        !!(null == a ? void 0 : a.length) &&
                        (0, r.jsx)(G.e, {
                          variant: "buttonGroup",
                          buttons: l,
                          defaultSelection: [t.value],
                          layout: "column",
                          onChange: (e) => {
                            i(e[0]), s();
                          },
                          gridGap: 2,
                        }),
                    }),
                  }),
                ],
              });
            },
          });
        },
        z = (e) => {
          var t, a, l, R, L, N, D;
          let { item: P, index: F, analytics: O, config: M } = e,
            { sendAnalyticsEvent: U } = (0, v.s)(),
            { cart: V } = (0, y.B_)(),
            G = (0, y.Ku)(),
            [z, K] = (0, i.useState)(P.masterVariant),
            [q, W] = (0, i.useState)(),
            Y = (0, m.useRouter)();
          (0, i.useEffect)(() => {
            W(I.u.fromProduct(P, z).build());
          }, [z]);
          let {
              data: { partialDiagnose: X },
            } = (0, b.W)(P.productType),
            Q =
              null === (t = P.matchScores) || void 0 === t
                ? void 0
                : t.overallScore,
            Z = z.brands,
            J =
              null === (a = z.availability) || void 0 === a
                ? void 0
                : a.isOnStock,
            $ = z.images || [],
            ee = (0, f.g)(P.id, P.slug),
            et =
              null !== (L = null == M ? void 0 : M.linkTarget) && void 0 !== L
                ? L
                : S.M.PRODUCT_DETAIL_PAGE,
            ea = et === S.M.QUICK_VIEW ? void 0 : ee,
            er = () => {
              let e = { ...O, products: [(0, n.n)(P, { index: F, cart: V })] };
              U(p.m3.cardsClicked.bind(p.m3), g.s.CARDS_CLICKED, e);
            },
            ei = P.name,
            en = z.price,
            el = z.strikePrice,
            eo = P
              ? {
                  ...O,
                  click_name: "product",
                  products: [(0, n.n)(P, { index: F, cart: V })],
                  cart_id: "".concat(null == V ? void 0 : V.id),
                  cart_size: (null !== (N = null == V ? void 0 : V.items) &&
                  void 0 !== N
                    ? N
                    : []
                  ).reduce((e, t) => e + (t.quantity || 0), 0),
                }
              : void 0,
            es = (0, C.p)(P.productType),
            ed = {
              label: null !== (D = z.size) && void 0 !== D ? D : "",
              value: z,
            },
            ec = P.variants.filter((e) => {
              var t;
              return !!(null === (t = e.availability) || void 0 === t
                ? void 0
                : t.isOnStock);
            }),
            eu = ec.length
              ? [P.masterVariant, ...ec].map((e) => {
                  var t;
                  return {
                    label: null !== (t = e.size) && void 0 !== t ? t : "",
                    value: e,
                  };
                })
              : [],
            eh = !!(null == eu ? void 0 : eu.length),
            em = () => {
              if (P) {
                var e;
                let t = {
                  ...O,
                  cart_id: "".concat(null == V ? void 0 : V.id),
                  products: [
                    (0, n.n)(P, { index: F, cart: V, isProductAdded: !0 }),
                  ],
                  cart_size:
                    (null !== (e = null == V ? void 0 : V.items) && void 0 !== e
                      ? e
                      : []
                    ).reduce((e, t) => e + (t.quantity || 0), 0) + 1,
                };
                U(p.m3.productAdded.bind(p.m3), g.s.PRODUCT_ADDED, t);
              }
            };
          return (0, r.jsxs)(o.Card, {
            direction: "column",
            height: "100%",
            boxShadow: "none",
            children: [
              (0, r.jsxs)(s.CardHeader, {
                position: "relative",
                padding: 0,
                backgroundColor: "primary.warmGrey.90",
                borderRadius: "lg",
                overflow: "hidden",
                children: [
                  (null == M ? void 0 : M.isSlider)
                    ? (0, r.jsx)(B, {
                        images: $,
                        onClick: () => {
                          er(), Y.push(ee);
                        },
                      })
                    : (0, r.jsx)(k.X, {
                        className: "product-image",
                        alt: "",
                        src:
                          null === (R = z.images) || void 0 === R
                            ? void 0
                            : null === (l = R[0]) || void 0 === l
                              ? void 0
                              : l.url,
                        width: 500,
                        height: 405,
                        style: {
                          margin: "0 auto",
                          objectFit: "cover",
                          aspectRatio: "0.81 / 1",
                        },
                      }),
                  (0, r.jsx)(d.Box, {
                    position: "absolute",
                    top: 2,
                    left: 2,
                    children: J
                      ? P.isDermatologistRecommended &&
                        (0, r.jsx)(E.u, { variant: "productCardVertical" })
                      : (0, r.jsxs)(c.Flex, {
                          gap: 1,
                          borderRadius: "base",
                          backgroundColor: "primary.white",
                          p: 1.5,
                          height: 6,
                          color: "primary.black.40",
                          alignItems: "center",
                          children: [
                            (0, r.jsx)(x.OutOfStockIcon, {
                              height: 3,
                              width: 3,
                            }),
                            (0, r.jsx)(u.Text, {
                              textStyle: {
                                base: "function.text.small",
                                lg: "function.text.medium",
                              },
                              children: "Out of stock",
                            }),
                          ],
                        }),
                  }),
                ],
              }),
              (0, r.jsxs)(h.CardBody, {
                position: (null == M ? void 0 : M.isSlider)
                  ? "relative"
                  : void 0,
                display: "flex",
                flexDirection: "column",
                gap: 1,
                px: 0,
                py: 0,
                children: [
                  (0, r.jsx)(c.Flex, {
                    pt: 1,
                    children:
                      es.personalisationEnabled &&
                      (0, r.jsx)(T.y, {
                        variant: Q
                          ? X
                            ? "matchScorePaleVerticalCard"
                            : "matchScoreVerticalCard"
                          : "bdnaFlat",
                        matchScore: Q,
                        "data-testid": P.id,
                        productId: P.id,
                        productUrl: ee,
                        brandName: Z,
                        iconName: Q ? "sparkle" : "lock",
                        productDescription: ei,
                        price: en,
                        productType: P.productType,
                        isOnStock: !!J,
                        addToCartPayload: q,
                        addToCartAnalytics: eo,
                        partialDiagnose: X,
                      }),
                  }),
                  (0, r.jsxs)(c.Flex, {
                    flexDirection: "column",
                    px: 2,
                    pt: 1,
                    pb: 2,
                    gap: 4,
                    h: "100%",
                    justifyContent: "space-between",
                    flex: 1,
                    children: [
                      (0, r.jsx)(_.q, {
                        target: et,
                        withLink: !0,
                        to: ea,
                        productId: P.id,
                        productUrl: ee,
                        testId: "Visit ".concat(ei, " page"),
                        onCardClicked: er,
                        isOverlay: !0,
                        children: (0, r.jsxs)(c.Flex, {
                          flexDirection: "column",
                          gap: 1,
                          children: [
                            (0, r.jsx)(u.Text, {
                              as: "span",
                              textStyle: {
                                base: "function.text.medium",
                                lg: "function.text.large",
                              },
                              color: "primary.black.10",
                              textAlign: "left",
                              children: Z,
                            }),
                            (0, r.jsx)(u.Text, {
                              as: "span",
                              textStyle: {
                                base: "function.text.medium",
                                lg: "function.text.large",
                              },
                              color: "primary.black.40",
                              textAlign: "left",
                              noOfLines: 3,
                              children: ei,
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsxs)(c.Flex, {
                        flexDirection: "column",
                        gap: 2,
                        children: [
                          eh
                            ? (0, r.jsx)(H, {
                                selectedVariant: ed,
                                variantOptions: eu,
                                onChange: (e) => K(e),
                                testId: "size-selector",
                              })
                            : (0, r.jsx)(w.zY, {
                                availableProductSizes: eu.length,
                                productVolume: z.size,
                              }),
                          (0, r.jsx)(A.R, { price: en, strikePrice: el }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(j.k, {
                    customAriaLabel: "Add to cart",
                    customLabel: (0, r.jsxs)(c.Flex, {
                      gap: 2,
                      alignItems: "center",
                      children: [
                        (0, r.jsx)(x.AddToBagIcon, { height: 6, width: 6 }),
                        (0, r.jsx)(u.Text, {
                          as: "span",
                          textStyle: {
                            base: "function.text.small",
                            lg: "function.text.medium",
                          },
                          children: "Add",
                        }),
                      ],
                    }),
                    addToCartPayload: q,
                    isOnStock: !!J,
                    isSmall: !0,
                    onAddToCart: () => em(),
                    onAddToCartSuccess: () => {
                      G({ type: y.d1.ShowMiniCart, payload: !0 });
                    },
                  }),
                ],
              }),
            ],
          });
        };
      var K = (function (e) {
        return (e.VERTICAL = "vertical"), (e.HORIZONTAL = "horizontal"), e;
      })({});
      let q = (e) => {
        let {
            orientation: t,
            item: a,
            index: i,
            analytics: o,
            context: s,
            config: d,
            override: c,
          } = e,
          u = {
            ...o,
            products: [(0, n.n)(a, { index: null == s ? void 0 : s.index })],
          };
        return "horizontal" === t
          ? (0, r.jsx)(l.u, {
              item: a,
              index: i,
              analytics: u,
              config: d,
              override: c,
            })
          : (0, r.jsx)(z, { item: a, index: i, analytics: u, config: d });
      };
    },
    59573: (e, t, a) => {
      a.d(t, { L: () => u });
      var r = a(94799),
        i = a(98814),
        n = a(49325),
        l = a(4306),
        o = a(65329),
        s = a(57948),
        d = a(39693),
        c = (function (e) {
          return (
            (e.left = "left"),
            (e.right = "right"),
            (e.top = "top"),
            (e.bottom = "bottom"),
            e
          );
        })(c || {});
      let u = (e) => {
        let {
            variant: t,
            direction: a,
            ariaLabel: c,
            dataTestId: u,
            size: h = 12,
            iconSize: m = 6,
            isAnimated: p = !0,
            isDisabled: g,
            onClick: v,
            id: y,
            isHovered: b,
          } = e,
          x = (0, i.useStyleConfig)("DirectionalButton", { variant: t }),
          S = (0, s.l)(),
          [I, C] = (0, n.useControllableState)({ value: b, defaultValue: !1 }),
          f = {
            animate: I
              ? (() => {
                  switch (a) {
                    case "left":
                      return { x: -10 };
                    case "right":
                      return { x: 10 };
                    case "top":
                      return { y: -10 };
                    case "bottom":
                      return { y: 10 };
                    default:
                      return {};
                  }
                })()
              : {},
          },
          k = "chevron" === t || "blackChevron" === t,
          E = () => {
            switch (a) {
              case "left":
                return "180deg";
              case "top":
                return "-90deg";
              case "bottom":
                return "90deg";
              default:
                return;
            }
          };
        return (0, r.jsx)(l.Box, {
          onMouseEnter: () => !S && C(!0),
          onMouseLeave: () => !S && C(!1),
          "aria-label": c,
          "data-testid": u,
          onClick: v,
          as: "button",
          __css: x,
          disabled: g,
          width: h,
          height: h,
          flexShrink: 0,
          id: y,
          children: (0, r.jsx)(l.Box, {
            "aria-label": "Directional button hovered: ".concat(I),
            as: o.P.div,
            ...(!k && p && f),
            margin: "auto",
            width: "min",
            children: k
              ? (0, r.jsx)(d.ChevronRightIcon, {
                  width: m,
                  height: m,
                  rotation: E(),
                })
              : (0, r.jsx)(d.ArrowRightIcon, {
                  width: m,
                  height: m,
                  rotation: E(),
                }),
          }),
        });
      };
    },
    61471: (e, t, a) => {
      a.d(t, { C: () => u });
      var r = a(66349),
        i = a(56138),
        n = a(87567),
        l = a(69538);
      let o = () => {
        if ("true" === l.env.NEXT_PUBLIC_USE_LOCAL_CART) {
          let e = l.env.NEXT_PUBLIC_CART_SERVICE_BACKEND_URL;
          if (!e)
            throw Error("NEXT_PUBLIC_CART_SERVICE_BACKEND_URL is not set");
          return e;
        }
        return "".concat("https://api.noli.com", "/cart");
      };
      class s {
        static getInstance() {
          return s.instance || (s.instance = (0, n.V)(o())), s.instance;
        }
        constructor() {}
      }
      class d extends i.v {
        constructor() {
          super(), (this.apiClient = s.getInstance());
        }
      }
      class c extends d {
        static getInstance() {
          return c.instance || (c.instance = new c()), c.instance;
        }
        constructor(...e) {
          super(...e),
            (this.getActiveCartForLoggedInUser = async (e) =>
              await this.get(
                "/",
                e
                  ? { headers: { Authorization: "Bearer ".concat(e) } }
                  : void 0,
              )),
            (this.addToCartForLoggedInUser = async (e, t) => {
              let a = {
                version: t.version,
                lineItems: [
                  {
                    productId: t.productId,
                    variantId: t.variantId,
                    quantity: t.quantity,
                    custom: t.custom,
                  },
                ],
              };
              return await this.put("/".concat(e, "/items"), a, {
                headers: { "Accept-Version": "2.0.0" },
              });
            }),
            (this.addMultipleToCartForLoggedInUser = async (e, t) => {
              let a = { version: t.version, lineItems: t.products };
              return await this.put("/".concat(e, "/items"), a, {
                headers: { "Accept-Version": "2.0.0" },
              });
            }),
            (this.updateItemQuantityForLoggedInUser = async (e, t, a) =>
              await this.put("/".concat(e, "/items/").concat(a), t)),
            (this.updateItemQuantities = async (e, t) =>
              await this.put("/".concat(e, "/items/quantities"), t)),
            (this.addDiscountCodeForLoggedInUser = async (e, t) =>
              await this.put("/".concat(e, "/discounts"), t)),
            (this.removeDiscountCodeForLoggedInUser = async (e, t, a) =>
              await this.remove("/".concat(e, "/discounts/").concat(a), {
                data: t,
              })),
            (this.createCartForLoggedInUser = async (e) =>
              await this.post("/", e)),
            (this.createTemporaryCart = async (e) => {
              let t = await this.post("/", {
                ...e,
                deleteDaysAfterLastModification: 1,
                shippingAddress: { country: "GB" },
              });
              return await this.deleteCart(t.id, t.version), t;
            }),
            (this.deleteCart = async (e, t) => {
              await this.delete("/".concat(e, "?version=").concat(t));
            }),
            (this.getShippingMethodsForCart = async (e) =>
              (await this.get("/".concat(e, "/shipping-methods"))).results.map(
                (e) => (0, r.k8)(e),
              )),
            (this.recalculate = async (e, t) =>
              await this.put("/".concat(e, "/recalculate"), t)),
            (this.handlePaymentError = async (e) =>
              await this.post("/".concat(e, "/payment-error"), {})),
            (this.validate = async (e) =>
              await this.post("/".concat(e, "/validate"), {})),
            (this.setShippingMethod = async (e, t) =>
              await this.post("/".concat(e, "/set-shipping-methods"), t)),
            (this.setCustomerEmail = async (e, t) =>
              await this.put("/".concat(e, "/set-customer-email"), t)),
            (this.setBillingAddress = async (e, t) =>
              await this.post("/".concat(e, "/set-billing-address"), t)),
            (this.setShippingAddress = async (e, t) =>
              await this.post("/".concat(e, "/set-shipping-address"), t));
        }
      }
      let u = c.getInstance();
    },
    63598: (e, t, a) => {
      a.d(t, { L: () => l });
      var r = a(84497),
        i = a(87567);
      class n {
        static getInstance() {
          return n.instance || (n.instance = (0, i.V)("/api")), n.instance;
        }
        constructor() {}
      }
      class l extends r.N {
        constructor() {
          super(), (this.apiClient = n.getInstance());
        }
      }
    },
    66736: (e, t, a) => {
      a.d(t, { d: () => r });
      let r = (e) =>
        e.refill ? "".concat(e.size, " - refill") : "".concat(e.size);
    },
    66778: (e, t, a) => {
      a.d(t, { _: () => r });
      function r(e, t) {
        return null == e || 0 === t ? 0 : Math.round(((t - e) / t) * 100);
      }
    },
    68099: (e, t, a) => {
      a.d(t, { e: () => l });
      var r = a(94799),
        i = a(98814),
        n = a(4306);
      let l = (e) => {
        let { children: t, colorScheme: a } = e,
          l = (0, i.useStyleConfig)("PromoTag", { colorScheme: a });
        return (0, r.jsx)(n.Box, { __css: l, children: t });
      };
    },
    70831: (e, t, a) => {
      a.d(t, { x: () => d });
      var r = a(94799),
        i = a(98814),
        n = a(49325),
        l = a(4306),
        o = a(89136),
        s = a(26796);
      let d = (e) => {
        let {
            variant: t = "default",
            isDisabled: a,
            icon: d,
            label: c,
            superscript: u,
            fullWidth: h,
            selected: m,
            defaultSelected: p,
            ariaLabel: g,
            dataTestId: v,
            onChange: y,
            unselectable: b = !1,
            labelTemplate: x,
          } = e,
          S = (0, i.useStyleConfig)("MultiSelectPill", { variant: t }),
          [I, C] = (0, n.useControllableState)({
            defaultValue: p,
            value: m,
            onChange: y,
          }),
          f = () => {
            switch (t) {
              case "bdna":
              case "buttonGroup":
                return "function.text.medium";
              case "singleSelectPill":
                return "body.semibold";
              default:
                return "body";
            }
          },
          k =
            null != x
              ? x
              : (e, t) =>
                  (0, r.jsx)(l.Box, {
                    children: (0, r.jsxs)(o.Text, {
                      textStyle: f(),
                      children: [
                        e,
                        "\xa0",
                        !!t &&
                          (0, r.jsx)(o.Text, {
                            as: "sup",
                            textStyle: "superscript.s1",
                            children: t,
                          }),
                      ],
                    }),
                  });
        return (0, r.jsxs)(l.Box, {
          as: "button",
          __css: S,
          onClick: () => C((e) => (b && e ? e : !e)),
          disabled: a,
          sx: {
            width:
              (null != h
                ? h
                : "singleSelectPill" === t || "smallSingleSelectPill" === t) &&
              "100%",
          },
          alignItems: "center",
          "aria-pressed": I,
          "aria-label": null != g ? g : null == c ? void 0 : c.toString(),
          "data-testid": null != v ? v : null == c ? void 0 : c.toString(),
          children: [
            d,
            "singleSelectPill" === t && (0, r.jsx)(s.Spacer, {}),
            "smallSingleSelectPill" === t && (0, r.jsx)(s.Spacer, {}),
            "singleSelectPillMobile" === t && (0, r.jsx)(s.Spacer, {}),
            k(c, u),
          ],
        });
      };
    },
    73676: (e, t, a) => {
      a.d(t, { A: () => l });
      var r = a(24689),
        i = a(73261),
        n = a(58716);
      let l = (e) => (0, n.w)(i.T.PARTIAL_DIAGNOSE) && e === r.ch.SKINCARE;
    },
    75137: (e, t, a) => {
      a.d(t, { c: () => s });
      var r = a(56138),
        i = a(63598),
        n = a(69538);
      let l = r.v;
      "true" === n.env.NEXT_PUBLIC_USE_LOCAL_BDNA && (l = i.L);
      class o extends l {
        static getInstance() {
          return o.instance || (o.instance = new o()), o.instance;
        }
        async getConcernsForProductCategory(e) {
          return this.get(
            "/bdna/profile/concerns?productCategory=".concat(e.productCategory),
          );
        }
        async getQuiz(e) {
          return this.get("bdna/bdna-quiz?productCategory=".concat(e));
        }
        async saveQuiz(e, t) {
          return this.post("/bdna/bdna-quiz?quizCompleted=".concat(e), t);
        }
        async getUserProfile(e) {
          return this.get(
            "/bdna/profile",
            e ? { headers: { Authorization: "Bearer ".concat(e) } } : void 0,
          );
        }
        async updateUserProfile(e) {
          return this.put("/bdna/profile", e);
        }
        async uploadImage(e) {
          return this.post("/bdna/face-scan", e);
        }
        async migrateAnonymousProfile(e, t) {
          return this.put(
            "/bdna/profile/migrate",
            { oldUserId: e },
            t ? { headers: { Authorization: "Bearer ".concat(t) } } : void 0,
          );
        }
      }
      let s = o.getInstance();
    },
    76199: (e, t, a) => {
      a.d(t, { S: () => S });
      var r = a(94799),
        i = a(50804),
        n = a(24689),
        l = a(82518);
      let o = Object.values(n.R7),
        s = {
          acneblemishproneskin: "Blemishes",
          finelineswrinkles: "Wrinkles",
          drynessdehydration: "Dryness",
          hyperpigmentation: "Hyperpigmentation",
          darkcirclespuffiness: "Dark circles",
          oiliness: "Oiliness",
          redness: "Redness",
          poresblackheads: "Blackheads",
          dullness: "Dullness",
          unevenskintonetexture: "Uneven skin",
          lackoffirmness: "Lack of firmness",
          none: "None",
        },
        d = { 1: "Scented", 0: "Unscented", null: "" },
        c = Object.fromEntries(
          Object.values(i.Ub).map((e) => {
            let { key: t, label: a } = e;
            return [t, a];
          }),
        ),
        u = (e, t, a) =>
          e.reduce(
            (e, r, i) => (
              (a || t[i]) &&
                "none" !== r &&
                e.push({ text: s[r], type: n.R7.SKIN_CONCERN, match: t[i] }),
              e
            ),
            [],
          ),
        h = (e, t) =>
          e
            ? Object.entries(e)
                .filter((e) => {
                  let [t] = e;
                  return o.includes(t);
                })
                .reduce((e, a) => {
                  let [r, i] = a;
                  if (!i) return e;
                  let { preference: o, match: s } = i;
                  if ("null" === o || "no" === o || (!t && !s)) return e;
                  switch (r) {
                    case n.R7.SKIN_CONCERN:
                      return e.concat(...u(o, s, t));
                    case n.R7.SCENT:
                      return e.concat({
                        text: d[o],
                        type: n.R7.SCENT,
                        match: s,
                      });
                    case n.R7.SKIN_FEEL:
                      return e.concat({
                        text: c[o],
                        type: n.R7.SKIN_FEEL,
                        match: s,
                      });
                    case n.R7.SKIN_SENSITIVITY:
                      return e.concat({
                        text: "Sensitive skin",
                        type: n.R7.SKIN_SENSITIVITY,
                        match: s,
                      });
                    case n.R7.SKIN_TYPE:
                      return e.concat({
                        text: "".concat((0, l.zX)(o), " skin"),
                        type: n.R7.SKIN_TYPE,
                        match: s,
                      });
                    default:
                      return e;
                  }
                }, [])
            : [];
      var m = a(98814),
        p = a(4306),
        g = a(89136),
        v = a(39693),
        y = a(96145),
        b = a(43485);
      let x = (e) => {
          let t,
            { highlights: a, withBgColor: i, iconTag: n } = e,
            o = (0, m.useMultiStyleConfig)("Highlights", {});
          return (null == a ? void 0 : a.length)
            ? ((t =
                a && n
                  ? a
                      .filter((e) => {
                        let { type: t } = e,
                          a = new Set([
                            "skinConcern",
                            "skinType",
                            "skinSensitivity",
                          ]);
                        if (t) return a.has(t);
                      })
                      .sort((e) => {
                        let { match: t } = e;
                        return !1 === t ? 1 : -1;
                      })
                      .map((e, t) => {
                        let { text: a, match: i } = e;
                        return !1 === i
                          ? (0, r.jsx)(
                              b.v,
                              {
                                icon: (0, r.jsx)(v.CrossCircledFilledIcon, {
                                  height: 6,
                                  width: 6,
                                  color: "primary.black.60",
                                }),
                                size: "tall",
                                tagLabel: (0, l.zX)(a),
                                variant: "filledWhite",
                              },
                              t,
                            )
                          : (0, r.jsx)(
                              b.v,
                              {
                                icon: (0, r.jsx)(v.TickCircledFilledIcon, {
                                  height: 6,
                                  width: 6,
                                  color: "bdna.bdna.90",
                                }),
                                size: "tall",
                                tagLabel: (0, l.zX)(a),
                                variant: "filledWhite",
                              },
                              t,
                            );
                      })
                  : a.map((e, t) => {
                      let { text: a, type: n } = e;
                      return (0, r.jsx)(
                        b.v,
                        {
                          tagLabel: (0, l.zX)(a),
                          variant: "filledBeige",
                          height: "6",
                          width: "min",
                          noWrapText: "true",
                          labelHeight: 4,
                          bg: i && n ? (0, y.yf)(n) : void 0,
                          ariaLabel: "highlights-tag-".concat(t),
                          "data-testid": "highlights tag ".concat(t),
                        },
                        t,
                      );
                    })),
              (0, r.jsxs)(p.Box, {
                __css: o.container,
                children: [
                  !n &&
                    (0, r.jsx)(g.Text, {
                      textStyle: "body.semibold",
                      "data-testid": "highlights title",
                      children: "Highlights for you:",
                    }),
                  (0, r.jsx)(p.Box, { __css: o.tagContainer, children: t }),
                ],
              }))
            : null;
        },
        S = (e) => {
          let { matches: t, iconTag: a, includeNoMatch: i } = e,
            n = h(t, i);
          return (0, r.jsx)(x, { iconTag: a, withBgColor: !0, highlights: n });
        };
    },
    76581: (e, t, a) => {
      a.d(t, { CmsContextProvider: () => c, a: () => d });
      var r = a(94799),
        i = a(34023),
        n = a(24689),
        l = (function (e) {
          return (
            (e.UpdateSkincareFilters = "UPDATE_SKINCARE_FILTERS"),
            (e.UpdateHaircareFilters = "UPDATE_HAIRCARE_FILTERS"),
            (e.UpdateNav = "UPDATE_NAV"),
            e
          );
        })({});
      let o = (0, i.createContext)({}),
        s = (0, i.createContext)(() => {}),
        d = () => (0, i.useContext)(o),
        c = (e) => {
          let { children: t, initialState: a } = e,
            [l, d] = (0, i.useReducer)(u, a);
          return (0, r.jsx)(o.Provider, {
            value: {
              ...l,
              getFilters: (e) => {
                switch (e) {
                  case n.ch.HAIRCARE:
                    return l.haircareFilters;
                  default:
                  case n.ch.SKINCARE:
                    return l.skincareFilters;
                }
              },
            },
            children: (0, r.jsx)(s.Provider, { value: d, children: t }),
          });
        },
        u = (e, t) => {
          switch (t.type) {
            case l.UpdateNav:
              return { ...e, navigation: t.payload };
            case l.UpdateSkincareFilters:
              return { ...e, skincareFilters: t.payload };
            case l.UpdateHaircareFilters:
              return { ...e, haircareFilters: t.payload };
            default:
              return e;
          }
        };
    },
    78233: (e, t, a) => {
      a.d(t, { C: () => c });
      var r = a(66349),
        i = a(36913),
        n = a(97331);
      let l = (e) => {
          let { centAmount: t, fractionDigits: a, currencyCode: r } = e;
          return {
            centAmount: t,
            fractionDigits: a,
            currencyCode: r,
            dollarAmount: o({ centAmount: t, fractionDigits: a }),
          };
        },
        o = (e) => {
          let { centAmount: t, fractionDigits: a } = e;
          return t / Math.pow(10, a);
        },
        s = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : i.Xn,
            a = Object.entries(e).reduce((e, t) => {
              let [a, r] = t;
              return e.push({ name: a, value: r }), e;
            }, []);
          return (0, r.YH)(a, t);
        },
        d = (e, t, a) => {
          var r, i, n;
          let o, d;
          return (
            e.price &&
              (o =
                null === (i = l(e.price)) || void 0 === i
                  ? void 0
                  : i.dollarAmount),
            (null === (r = e.strikePrice) || void 0 === r
              ? void 0
              : r.centAmount) &&
              e.strikePrice.centAmount > e.price.centAmount &&
              (d =
                null === (n = l(e.strikePrice)) || void 0 === n
                  ? void 0
                  : n.dollarAmount),
            {
              productId: t,
              id: null != a ? a : e.id,
              images: e.images.map((e) => ({ url: e })),
              price: o,
              strikePrice: d,
              availability: {
                isOnStock: e.isAvailable,
                availableQuantity: e.availability,
              },
              sku: e.sku,
              ...(e.attributes && s(e.attributes)),
            }
          );
        },
        c = (e) => {
          let { product: t, roundedScore: a, matches: r } = e,
            i = d(t, t.id, 0);
          return {
            id: t.id,
            slug: t.slug,
            matchScores: { overallScore: a },
            matches: r,
            name: t.name,
            masterVariant: i,
            variants: t.variants.map((e) => d(e, t.id)),
            atLeastOneInStock: [i].some((e) => {
              var t;
              return !!(null === (t = e.availability) || void 0 === t
                ? void 0
                : t.isOnStock);
            }),
            categories: t.categories.map((e) => {
              let { name: t } = e;
              return t;
            }),
            isDermatologistRecommended: ((e) => !!e && n.w.includes(e))(
              i.brands,
            ),
            productType: t.productType.key,
          };
        };
    },
    79240: (e, t, a) => {
      a.d(t, {
        Rg: () => l,
        ht: () => u,
        vy: () => c,
        fc: () => s,
        G4: () => o,
      });
      var r = a(50804),
        i = a(24689),
        n = a(39693);
      let l = (e) => n[e],
        o = (e) => (0, r.ph)(r.SE, e),
        s = (e) => l(o(e)),
        d = (e) => (0, r.ph)(r.yK, e),
        c = (e) => l(d(e)),
        u = (e) => (e === i.vw.Trending ? n.HeartIcon : null);
    },
    79784: (e, t, a) => {
      a.d(t, { i: () => s, u: () => o });
      var r = a(24689),
        i = a(92718),
        n = a(6744);
      let l = (e, t) =>
          e.productCategoryTypes
            .filter((e) => !t || e.key === t)
            .map((e) => {
              var t;
              return {
                productType: e.key,
                brands:
                  null ===
                    (t = e.categoryGroups.find((e) => e.key === i.x.BRAND)) ||
                  void 0 === t
                    ? void 0
                    : t.categories,
              };
            })
            .flatMap((e) => {
              let { productType: t, brands: a } = e;
              return (null != a ? a : []).map((e) => ({
                ...e,
                productType: t,
                href:
                  t === r.ch.SKINCARE
                    ? "/brand/shop/".concat(e.slug)
                    : "/".concat(t, "/brand/shop/").concat(e.slug),
              }));
            }),
        o = (e) => {
          let { navigation: t } = (0, n.a)();
          try {
            return l(t, e);
          } catch (e) {
            return console.error(e), [];
          }
        },
        s = (e, t) => {
          let a = o(t);
          return null == a
            ? void 0
            : a.find((t) => {
                let { label: a } = t;
                return a === e;
              });
        };
    },
    79835: (e, t, a) => {
      a.d(t, { K: () => s });
      var r = a(2873),
        i = a(9656),
        n = a(36918),
        l = a(33802);
      let o = { addRandomSeed: !0 },
        s = (e, t) => {
          var a, s;
          let {
              getQueryKey: d,
              enabled: c,
              getSearchArgs: u,
            } = (0, l.t)({
              ...o,
              productType:
                (null === (a = e.productTypes) || void 0 === a
                  ? void 0
                  : a.length) === 1
                  ? e.productTypes[0]
                  : void 0,
              enabled: null == t ? void 0 : t.enabled,
            }),
            h = (0, r.useQueryClient)(),
            m = u(e),
            p = d("useGetPaginatedProductsBySearch", m);
          return {
            ...(0, i.useInfiniteQuery)({
              ...t,
              initialPageParam:
                null !== (s = null == t ? void 0 : t.initialPageParam) &&
                void 0 !== s
                  ? s
                  : 0,
              queryFn: (t) => {
                let { pageParam: a } = t;
                return n.k.getProductsBySearch({ ...m, from: a, size: e.size });
              },
              enabled: c,
              queryKey: p,
              getNextPageParam: (t, a, r) => {
                if (r < t.total - e.size) return r + e.size;
              },
            }),
            resetPages: () => {
              h.setQueryData(p, (e) => ({
                pages: e.pages.slice(0, 1),
                pageParams: e.pageParams.slice(0, 1),
              }));
            },
          };
        };
    },
    80807: (e, t, a) => {
      a.d(t, { W: () => x });
      var r = a(24689),
        i = a(82536),
        n = a(24319),
        l = a(51133),
        o = a(99821);
      let s = ["18_29", "30_39", "40_54", "55_70", "70"],
        d = (e) => {
          var t;
          let a = e.split("_");
          return [
            parseInt(a[0]),
            parseInt(null !== (t = a[1]) && void 0 !== t ? t : 150),
          ];
        },
        c = (e) => {
          if (!e) return "";
          let t = new Date().getFullYear() - e;
          if (!t) return "18_29";
          let a = 0,
            r = d(s[0]);
          for (; t > r[1] && a < s.length - 1; ) r = d(s[++a]);
          return s[a];
        },
        u = (e) => {
          if ("null" !== e && void 0 !== e) return e;
        },
        h = (e) => ({ age: e.age, gender: e.gender }),
        m = (e) => ({
          colouredHair: e.colouredHair,
          hairColour: e.hairColour,
          coilyHairStyle: e.coilyHairStyle,
          hairLength: e.hairLength,
          hairConcern: e.hairConcern,
          hairDensity: e.hairDensity,
          hairEnvironmentEffects: e.hairEnvironmentEffects,
          hairStylingTool: e.hairStylingTool,
          hairFlakiness: e.hairFlakiness,
          washingFrequency: e.washingFrequency,
          hairLoss: e.hairLoss,
          lengthsFeel: e.lengthsFeel,
          hairTexture: e.hairTexture,
          hairThickness: e.hairThickness,
          splitEnds: e.splitEnds,
          scalpSensitivity: e.scalpSensitivity,
          scalpType: e.scalpType,
          budget: e.budget,
          ...h(e),
        }),
        p = (e) => ({
          skinConcern: e.skinConcern,
          skinFeel: e.skinFeel,
          skinSensitivity: e.skinSensitivity,
          skinType: e.skinType,
          brandValues: e.brandValues,
          budget: e.budget,
          scent: e.scent,
          ...h(e),
        }),
        g = (e) => {
          if (!(null == e ? void 0 : e.skincare)) return;
          let { gender: t, year_of_birth: a } = e,
            { skincare: r } = e,
            {
              skin_sensitivity: i,
              primary_concern: n,
              secondary_concern: l,
              tertiary_concern: o,
              skin_morning: s,
              scented: d,
              skin_feel: h,
              brand_values: m,
              budget: p,
            } = null != r ? r : {};
          return {
            age: c(a),
            brandValues: m,
            budget: p,
            gender: t,
            scent: u(d),
            skinFeel: h,
            skinSensitivity: i,
            skinType: s,
            skinConcern: [n, l, o].reduce((e, t) => (t && e.push(t), e), []),
          };
        },
        v = (e) => {
          if (!(null == e ? void 0 : e.haircare)) return;
          let { gender: t, year_of_birth: a, haircare: r } = e,
            {
              budget: i,
              coily_hair_style: n,
              environment: l,
              flakiness: o,
              hair_color: s,
              hair_coloration: d,
              hair_concern: u,
              hair_density: h,
              hair_length: m,
              hair_loss: p,
              hair_styling_tool: g,
              hair_texture: v,
              hair_thickness: y,
              lengths_feel: b,
              scalp_sensitivity: x,
              scalp_type: S,
              split_ends: I,
              washing_frequency: C,
            } = null != r ? r : {};
          return {
            age: c(a),
            budget: i,
            gender: t,
            coilyHairStyle: n,
            hairDensity: h,
            hairEnvironmentEffects: l,
            hairStylingTool: g,
            hairFlakiness: o,
            washingFrequency: C,
            hairLoss: p,
            colouredHair: d,
            hairColour: s,
            hairLength: m,
            hairConcern: u,
            lengthsFeel: b,
            hairTexture: v,
            hairThickness: y,
            splitEnds: I,
            scalpSensitivity: x,
            scalpType: S,
          };
        },
        y = (e) => {
          switch (e) {
            case r.ch.HAIRCARE:
              return m;
            case r.ch.SKINCARE:
              return p;
            default:
              return (e) => ({ ...p(e), ...m(e) });
          }
        },
        b = (e) => {
          switch (e) {
            case r.ch.HAIRCARE:
              return v;
            case r.ch.SKINCARE:
              return g;
            default:
              return (e) => ({ ...g(e), ...v(e) });
          }
        },
        x = (e) => {
          var t;
          let {
              user: a,
              userIsReady: s,
              isHaircareDecoded: d,
              isSkincareDecoded: c,
            } = (0, i.A)(),
            { data: u, isLoading: h } = (0, n.a)(),
            { readPreferences: m } = (0, o.r)(),
            { enabled: p, ...g } =
              null !== (t = m()) && void 0 !== t ? t : { enabled: !1 },
            { readPreferences: v } = (0, l.S)(),
            x = v(),
            S = y(e),
            I = b(e);
          return {
            data: (() => {
              if (p) return { preferences: S(g), partialDiagnose: !1 };
              if (h);
              else if (
                (e === r.ch.SKINCARE && c) ||
                (e === r.ch.HAIRCARE && d) ||
                (void 0 === e && (d || c))
              )
                return { preferences: I(u), partialDiagnose: !1 };
              else if (x && e !== r.ch.HAIRCARE)
                return { preferences: S(x), partialDiagnose: !0 };
              return { preferences: void 0, partialDiagnose: !1 };
            })(),
            user: a,
            userIsReady: s,
            isLoading: h,
          };
        };
    },
    80880: (e, t, a) => {
      a.d(t, { q: () => D });
      var r = a(94799),
        i = a(59626),
        n = a(4306),
        l = a(2906),
        o = a(2037),
        s = a(98814),
        d = a(16774),
        c = a(11425),
        u = a(75093),
        h = a(52360),
        m = a(16581),
        p = a(31634),
        g = a(27357),
        v = a(34023),
        y = a(92616),
        b = a(17422),
        x = a(57184),
        S = a(24631),
        I = a(50969),
        C = a(93277),
        f = a(81352),
        k = a(82536),
        E = a(37216),
        T = a(39693),
        j = a(11737),
        w = a(15231),
        A = a(28912),
        _ = a(89226),
        R = a(89811);
      let L = (e) => {
          var t;
          let {
              productId: a,
              productUrl: i,
              opened: l = !1,
              onClose: o = () => {},
            } = e,
            { cart: L } = (0, f.B_)(),
            N = (0, C.iA)(),
            D = (0, s.useMultiStyleConfig)("ProductQuickView"),
            P = (0, g.usePathname)(),
            { user: F } = (0, k.A)(),
            B = null == F ? void 0 : F.segmentId,
            {
              data: O,
              error: M,
              isLoading: U,
            } = (0, E.L)(a, { includeAllVariants: !0 }),
            { sendAnalyticsEvent: V } = (0, x.s)(),
            [G, H] = (0, v.useState)();
          if (
            ((0, v.useEffect)(() => {
              H(null == O ? void 0 : O.masterVariant);
            }, [O]),
            (0, v.useEffect)(() => {
              U ||
                (!M && O) ||
                N({
                  type: C.P7.Add,
                  alertKey: "product-not-loaded-error",
                  message:
                    "Error Loading product details, something has gone wrong.",
                  variant: C.iC.Error,
                });
            }, [U, M, O, N]),
            !O || !G)
          )
            return;
          let z = j.u.fromProduct(O, G).build();
          return (0, r.jsxs)(d.Modal, {
            onClose: o,
            isOpen: l,
            isCentered: !0,
            scrollBehavior: "inside",
            variant: "product",
            children: [
              (0, r.jsx)(c.ModalOverlay, {}),
              (0, r.jsxs)(u.ModalContent, {
                children: [
                  (0, r.jsx)(h.ModalCloseButton, {
                    zIndex: "popover",
                    _focusVisible: { border: "none" },
                  }),
                  (0, r.jsx)(m.ModalBody, {
                    children: (0, r.jsxs)(p.Flex, {
                      flexDirection: { base: "column", lg: "row" },
                      width: "100%",
                      children: [
                        (0, r.jsx)(n.Box, {
                          __css: D.productImages,
                          children: (0, r.jsx)(_.M, { productVariant: G }),
                        }),
                        (0, r.jsxs)(n.Box, {
                          __css: D.productContent,
                          children: [
                            (0, r.jsx)(R.s, {
                              onChangeVariant: (e) => H(e),
                              product: O,
                              variant: G,
                              loading: U,
                              withAddToCart: !1,
                              withMatchScoreAndRatings: !1,
                            }),
                            (0, r.jsx)(n.Box, {
                              marginTop: 8,
                              paddingBottom: 14,
                              paddingX: { lg: 8 },
                              children: (0, r.jsx)(w.ButtonLink, {
                                href: i,
                                variant: "secondary",
                                rightIcon: (0, r.jsx)(T.ArrowRightIcon, {
                                  width: 6,
                                  height: 6,
                                }),
                                fullWidth: !0,
                                children: "View product details",
                              }),
                            }),
                            (0, r.jsx)(n.Box, {
                              paddingX: { lg: 8 },
                              position: "sticky",
                              bottom: 8,
                              left: 0,
                              right: 0,
                              children: (0, r.jsx)(A._, {
                                addToCartPayload: z,
                                price: G.price,
                                strikePrice: G.strikePrice,
                                isOnStock: !!(null == G
                                  ? void 0
                                  : null === (t = G.availability) ||
                                      void 0 === t
                                    ? void 0
                                    : t.isOnStock),
                                onAddToCart: () => {
                                  if (O && G) {
                                    var e;
                                    let t = {
                                      cart_id: "".concat(
                                        null == L ? void 0 : L.id,
                                      ),
                                      products: [
                                        (0, S.n)(O, {
                                          variant: G,
                                          cart: L,
                                          isProductAdded: !0,
                                        }),
                                      ],
                                      page_category: (0, I.E)(P),
                                      cart_size:
                                        (null !==
                                          (e =
                                            null == L
                                              ? void 0
                                              : L.items.reduce(
                                                  (e, t) => e + t.quantity,
                                                  0,
                                                )) && void 0 !== e
                                          ? e
                                          : 0) + 1,
                                    };
                                    return (
                                      F && (t.bdna_segment_id = B),
                                      V(
                                        y.m3.productAdded.bind(y.m3),
                                        b.s.PRODUCT_ADDED,
                                        t,
                                      )
                                    );
                                  }
                                },
                                isStickyOnMobile: !1,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        N = (e) => {
          let {
            productId: t,
            productUrl: a,
            opened: i = !1,
            onClose: n = () => {},
          } = e;
          if (t && i)
            return (0, r.jsx)(L, {
              productId: t,
              productUrl: a,
              opened: i,
              onClose: n,
            });
        },
        D = (e) => {
          let {
              children: t,
              withLink: a = !1,
              target: s = l.M.QUICK_VIEW,
              to: d,
              productId: c,
              productUrl: u,
              testId: h,
              isOverlay: m = !1,
              onCardClicked: p,
            } = e,
            [g, { toggle: v, off: y }] = (0, i.useBoolean)(!1);
          if (a) {
            if (d)
              return (0, r.jsx)(o.A, {
                target: d,
                withLink: !0,
                onClick: p,
                isOverlay: m,
                children: t,
              });
            if (s === l.M.QUICK_VIEW && c && u)
              return (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(n.Box, {
                    as: "button",
                    onClick: () => {
                      v(), null == p || p();
                    },
                    "aria-label": "Open quick view",
                    "data-testid": "Open quick view",
                    _before: {
                      content: m ? '""' : void 0,
                      position: "absolute",
                      inset: 0,
                      zIndex: 1,
                    },
                    children: t,
                  }),
                  (0, r.jsx)(N, {
                    productId: c,
                    productUrl: u,
                    opened: g,
                    onClose: y,
                  }),
                ],
              });
            if (s === l.M.PRODUCT_DETAIL_PAGE && u)
              return (0, r.jsx)(o.A, {
                isOverlay: m,
                target: u,
                withLink: a,
                onClick: p,
                "data-testid": h,
                children: t,
              });
          }
          return t;
        };
    },
    81277: (e, t, a) => {
      a.r(t), a.d(t, { Tag: () => n });
      var r = a(94799),
        i = a(9990);
      a(34023);
      let n = (e) => {
        let {
          ariaLabel: t,
          dataTestId: a,
          bg: n,
          children: l,
          color: o,
          height: s,
          icon: d,
          noWrapText: c,
          size: u,
          tagLabel: h,
          textStyle: m,
          variant: p,
          width: g,
          labelHeight: v,
          cursor: y,
          padding: b,
          paddingX: x,
          paddingY: S,
        } = e;
        return (0, r.jsxs)(i.Tag, {
          "aria-label": t,
          "data-testid": a,
          bg: n,
          color: o,
          gap: +!!d,
          height: s,
          justifyContent: "center",
          size: u,
          variant: p,
          whiteSpace: c ? "nowrap" : "normal",
          width: g,
          as: "div",
          cursor: y,
          padding: b,
          paddingX: x,
          paddingY: S,
          children: [
            d,
            (0, r.jsx)(i.TagLabel, {
              lineHeight: v,
              textStyle: m,
              fontFamily: m ? void 0 : "'Plus Jakarta Sans', sans-serif",
              overflow: "visible",
              "aria-label": h,
              "data-testid": h,
              whiteSpace: "nowrap",
              children: h,
            }),
            l,
          ],
        });
      };
    },
    81352: (e, t, a) => {
      a.d(t, { d1: () => n, $g: () => u, B_: () => d, Ku: () => c });
      var r = a(94799),
        i = a(34023),
        n = (function (e) {
          return (
            (e.SetCart = "SET_CART"),
            (e.SetMiniCartProductIds = "SET_MINI_CART_PRODUCT_IDS"),
            (e.ShowMiniCart = "SHOW_MINI_CART"),
            (e.SetLoading = "SET_LOADING"),
            (e.SetUpdating = "SET_UPDATING"),
            (e.SetError = "SET_ERROR"),
            (e.SetLastActions = "SET_LAST_ACTIONS"),
            (e.Reset = "RESET"),
            (e.AddItemToDeletedItems = "ADD_ITEM_TO_DELETED_ITEMS"),
            (e.RemoveItemFromDeletedItems = "REMOVE_ITEM_FROM_DELETED_ITEMS"),
            (e.ClearDeletedItems = "CLEAR_DELETED_ITEMS"),
            e
          );
        })({});
      let l = {
          cart: null,
          miniCart: null,
          showMiniCart: !1,
          isCartLoading: !0,
          isCartUpdating: !1,
          cartError: null,
          lastActions: [],
          deletedItems: [],
        },
        o = (0, i.createContext)(l),
        s = (0, i.createContext)(() => {}),
        d = () => (0, i.useContext)(o),
        c = () => (0, i.useContext)(s),
        u = (e) => {
          let { children: t, initialState: a = l } = e,
            [n, d] = (0, i.useReducer)(h, a),
            c = (0, i.useMemo)(() => n, [n]);
          return (0, r.jsx)(o.Provider, {
            value: c,
            children: (0, r.jsx)(s.Provider, { value: d, children: t }),
          });
        },
        h = (e, t) => {
          switch (t.type) {
            case n.SetCart:
              return {
                ...e,
                cart: t.payload,
                isCartLoading: !1,
                cartError: null,
              };
            case n.ShowMiniCart:
              return { ...e, showMiniCart: t.payload };
            case n.SetLoading:
              return { ...e, isCartLoading: t.payload };
            case n.SetUpdating:
              return { ...e, isCartUpdating: t.payload };
            case n.SetError:
              return {
                ...e,
                cartError: t.error,
                isCartLoading: !1,
                isCartUpdating: !1,
              };
            case n.SetLastActions:
              return { ...e, lastActions: t.payload };
            case n.SetMiniCartProductIds:
              return { ...e, miniCart: t.payload };
            case n.AddItemToDeletedItems:
              return { ...e, deletedItems: [...e.deletedItems, t.payload] };
            case n.RemoveItemFromDeletedItems:
              return {
                ...e,
                deletedItems: e.deletedItems.filter(
                  (e) => e.id !== t.payload.id,
                ),
              };
            case n.ClearDeletedItems:
              return { ...e, deletedItems: [] };
            case n.Reset:
              return { ...l };
            default:
              return e;
          }
        };
    },
    81563: (e, t, a) => {
      a.d(t, { z: () => o });
      var r = a(94799),
        i = a(31634),
        n = a(4306),
        l = a(89136);
      let o = (e) => {
        let {
          availableProductSizes: t,
          productVolume: a,
          startWithDivider: o = !1,
        } = e;
        if (!t && !a) return (0, r.jsx)(r.Fragment, {});
        let s = [];
        return (
          a && s.push(a),
          (0, r.jsx)(i.Flex, {
            flexWrap: "wrap",
            textStyle: {
              base: "function.text.medium",
              lg: "function.text.large",
            },
            color: "primary.black.40",
            children: s.map((e, t) =>
              (0, r.jsxs)(
                n.Box,
                {
                  "data-testid": "Product size",
                  children: [
                    (t > 0 || o) &&
                      (0, r.jsx)(l.Text, {
                        as: "span",
                        color: "primary.black.80",
                        children: " • ",
                      }),
                    e,
                  ],
                },
                "".concat(e, "-key"),
              ),
            ),
          })
        );
      };
    },
    82713: (e, t, a) => {
      a.d(t, { k: () => R });
      var r = a(94799),
        i = a(22387),
        n = a(31634),
        l = a(38236),
        o = a(89136),
        s = a(4306),
        d = a(36008),
        c = a.n(d),
        u = a(80807),
        h = a(87704),
        m = a(4639),
        p = a(66736),
        g = a(97001),
        v = a(93339),
        y = a(34023),
        b = a(99034),
        x = a(39693);
      let S = (e) => {
        let { breadcrumbs: t } = e,
          [a, i] = (0, y.useState)(!0),
          o = (0, b.l)(),
          [s, ...d] = t;
        return (
          (0, y.useEffect)(() => {
            o && i(!1);
          }, [o]),
          (0, r.jsxs)(n.Flex, {
            color: "primary.warmGrey.50",
            alignItems: "center",
            alignSelf: "stretch",
            alignContent: "flex-start",
            gap: 2,
            wrap: "wrap",
            textStyle: "function.text.medium",
            children: [
              !a &&
                !!t.length &&
                (0, r.jsx)(n.Flex, {
                  alignItems: "center",
                  alignSelf: "stretch",
                  children: (0, r.jsx)(v.Button, {
                    variant: "tertiary",
                    onClick: () => {
                      i(!a);
                    },
                    children: "...",
                  }),
                }),
              a &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(l.Link, {
                      as: c(),
                      href: s.href,
                      "data-testid": "".concat(s.label, "-breadcrumb-link"),
                      color: "primary.warmGrey.50",
                      children: s.label,
                    }),
                    (0, r.jsx)(x.DotIcon, { height: 1, width: 1 }),
                  ],
                }),
              d.map((e, t) =>
                (0, r.jsxs)(
                  n.Flex,
                  {
                    gap: 2,
                    alignItems: "center",
                    children: [
                      (0, r.jsx)(l.Link, {
                        as: c(),
                        href: e.href,
                        "data-testid": "".concat(e.label, "-breadcrumb-link"),
                        color: "primary.warmGrey.50",
                        children: e.label,
                      }),
                      t < d.length - 1 &&
                        (0, r.jsx)(x.DotIcon, { height: 1, width: 1 }),
                    ],
                  },
                  t,
                ),
              ),
            ],
          })
        );
      };
      var I = a(26899),
        C = a(76199);
      let f = (e) => {
        let { productId: t, redirectUrl: a } = e;
        return (0, r.jsx)(s.Box, {
          children: (0, r.jsx)("div", {
            "data-bv-show": "inline_rating",
            "data-bv-seo": "false",
            "data-bv-product-id": t,
            "data-bv-redirect-url": a,
          }),
        });
      };
      var k = a(39061),
        E = a(28912),
        T = a(98814),
        j = a(89478),
        w = a(96456);
      let A = (e) => {
          let t = (0, T.useStyleConfig)("RadioCard", {}),
            { getInputProps: a, getRadioProps: i } = (0, w.useRadio)(e),
            { label: l } = e,
            s = (0, y.useId)(),
            d = a(),
            c = i();
          return (0, r.jsxs)(n.Flex, {
            as: "label",
            height: 9,
            htmlFor: s,
            children: [
              (0, r.jsx)("input", { ...d, width: 0, id: s, "aria-label": l }),
              (0, r.jsx)(n.Flex, {
                ...c,
                __css: t,
                cursor: "pointer",
                px: 4,
                py: 2,
                children: (0, r.jsx)(o.Text, {
                  textStyle: "function.text.large",
                  children: l,
                }),
              }),
            ],
          });
        },
        _ = (e) => {
          let {
              groupName: t,
              handleChange: a,
              label: i,
              options: l,
              disableVariantSelection: s,
              defaultValue: d,
            } = e,
            c = (0, T.useMultiStyleConfig)("RadioCardGroup"),
            { getRootProps: u, getRadioProps: h } = (0, j.useRadioGroup)({
              name: t,
              defaultValue: null != d ? d : l[0],
              onChange: (e) => a(e),
            }),
            m = u();
          return (0, r.jsxs)(n.Flex, {
            __css: c.groupContainer,
            ...m,
            children: [
              (0, r.jsx)(o.Text, {
                textStyle: "body.semibold",
                marginRight: 4,
                children: i,
              }),
              (0, r.jsx)(n.Flex, {
                __css: c.tagContainer,
                pointerEvents: s ? "none" : "all",
                children: l.map((e, t) => {
                  let a = h({ value: e });
                  return (0, r.jsx)(
                    A,
                    { value: e, ...a, label: e },
                    "option-".concat(t, "-").concat(e),
                  );
                }),
              }),
            ],
          });
        },
        R = (e) => {
          let {
              productType: t,
              productId: a,
              productBrand: d,
              productName: v,
              productDescription: y,
              productMatches: b,
              productPrice: x,
              productStrikePrice: T,
              productSize: j,
              productIsOnStock: w,
              breadcrumbsItems: A = [],
              withMatchScoreAndRatings: R = !0,
              withAddToCart: L = !0,
              loading: N = !1,
              matchScoreLoading: D = !1,
              reviewId: P,
              matchScores: F,
              handleMatchScoreClick: B,
              isDermatologistRecommended: O,
              allVariants: M,
              disableVariantSelection: U = !1,
              onVariantChange: V,
              addToCartPayload: G,
              onAddToCart: H,
              actionButton: z,
            } = e,
            { breadcrumbsEnabled: K, personalisationEnabled: q } = (0, m.p)(t),
            {
              data: { partialDiagnose: W },
            } = (0, u.W)(t),
            Y = W ? "matchScorePaleText" : "matchScoreText";
          return (0, r.jsxs)(i.VStack, {
            padding: [0, 0, 0, 8],
            gap: 4,
            children: [
              (0, r.jsxs)(i.VStack, {
                gap: 4,
                width: "100%",
                children: [
                  K && (0, r.jsx)(S, { breadcrumbs: A }),
                  R &&
                    (0, r.jsxs)(n.Flex, {
                      justifyContent: "space-between",
                      alignItems: "center",
                      alignSelf: "stretch",
                      children: [
                        (0, r.jsx)(g.q, {
                          loading: N,
                          children:
                            !!P &&
                            (0, r.jsx)(l.Link, {
                              as: c(),
                              href: "#reviews",
                              "aria-label": "Scroll to reviews",
                              "data-testid": "Scroll to reviews",
                              children: (0, r.jsx)(f, { productId: P }),
                            }),
                        }),
                        q &&
                          (0, r.jsx)(g.q, {
                            loading: D,
                            contentWidth: 16,
                            children: (null == F ? void 0 : F.overallScore)
                              ? (0, r.jsx)(k.y, {
                                  matchScore: F.overallScore,
                                  variant: Y,
                                  "data-testid": a,
                                  partialDiagnose: W,
                                  onTagClick: B,
                                  productType: t,
                                })
                              : (0, r.jsx)(k.y, {
                                  variant: Y,
                                  partialDiagnose: W,
                                  onTagClick: B,
                                  productType: t,
                                }),
                          }),
                      ],
                    }),
                  (0, r.jsxs)(i.VStack, {
                    alignSelf: "stretch",
                    alignItems: "start",
                    gap: 4,
                    children: [
                      (0, r.jsx)(g.q, {
                        loading: N,
                        contentWidth: "50%",
                        children: d,
                      }),
                      (0, r.jsx)(g.q, {
                        loading: N,
                        contentWidth: "100%",
                        noOfLines: 2,
                        children: (0, r.jsx)(o.Text, {
                          as: "h1",
                          textStyle: "heading.h4",
                          size: "md",
                          alignSelf: "stretch",
                          textAlign: "left",
                          "data-testid": "product information product name",
                          children: v,
                        }),
                      }),
                      (0, r.jsx)(g.q, {
                        loading: N,
                        contentWidth: "100%",
                        noOfLines: 1,
                        children: O && (0, r.jsx)(I.u, { variant: "PDP" }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(s.Box, {
                    width: "100%",
                    children: (0, r.jsx)(g.q, {
                      loading: N,
                      contentHeight: 4,
                      contentWidth: "100%",
                      noOfLines: 3,
                      children:
                        !!y &&
                        (0, r.jsx)(s.Box, {
                          children: (0, r.jsx)(o.Text, {
                            textStyle: "body",
                            "data-testid":
                              "product information short description",
                            noOfLines: 3,
                            children: y,
                          }),
                        }),
                    }),
                  }),
                ],
              }),
              q &&
                b &&
                (0, r.jsx)(s.Box, {
                  width: "100%",
                  paddingBottom: 1,
                  children: (0, r.jsx)(g.q, {
                    loading: N,
                    contentWidth: "100%",
                    noOfLines: 2,
                    children: (0, r.jsx)(C.S, { matches: b }),
                  }),
                }),
              !L &&
                (0, r.jsx)(s.Box, {
                  width: "full",
                  mb: 6,
                  children: (0, r.jsx)(o.Text, {
                    textStyle: "heading.h7.bold",
                    children: (0, h.S)(null != x ? x : 0),
                  }),
                }),
              !N &&
                !!(null == M ? void 0 : M.length) &&
                (0, r.jsx)(n.Flex, {
                  alignSelf: "stretch",
                  paddingTop: 5,
                  paddingBottom: 5,
                  marginBottom: 5,
                  marginTop: 5,
                  borderY: "1px solid",
                  borderColor: "primary.warmGrey.80",
                  children: (0, r.jsx)(_, {
                    groupName: "selectSize",
                    disableVariantSelection: U,
                    label: U || 1 == M.length ? "Size" : "Select size",
                    options: M.map((e) => (0, p.d)(e)),
                    handleChange: null != V ? V : () => {},
                    defaultValue: j,
                  }),
                }),
              !!L &&
                (0, r.jsx)(E._, {
                  onAddToCart: H,
                  addToCartPayload: G,
                  isOnStock: !!w,
                  price: x,
                  strikePrice: T,
                }),
              z,
            ],
          });
        };
    },
    85063: (e, t, a) => {
      a.d(t, { o: () => i });
      var r = a(93367);
      let i = (e) => {
        var t;
        let a =
          (null == e ? void 0 : e.pdpbackgroundcolors) &&
          (null == e ? void 0 : e.pdpbackgroundcolors.toLowerCase());
        return null !== (t = a && r.K[a]) && void 0 !== t ? t : void 0;
      };
    },
    86373: (e, t, a) => {
      a.d(t, { g: () => r });
      let r = (e, t, a) => {
        let r = "/products/".concat(e);
        if ((t && (r = "/products/".concat(t)), a)) {
          let e =
            a instanceof URLSearchParams
              ? a.toString()
              : new URLSearchParams(a);
          r += "?".concat(e);
        }
        return r;
      };
    },
    87704: (e, t, a) => {
      a.d(t, { S: () => r });
      let r = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        if (0 === e) return "Free";
        let r = e.toFixed(a);
        return t && (r = r.replace(/\.00$/, "")), "\xa3".concat(r);
      };
    },
    88509: (e, t, a) => {
      a.d(t, { N: () => r, P: () => i });
      let r = (e, t, a) => {
          var r;
          return null !==
            (r = e.items.find(
              (e) =>
                e.product.id === t && (!a || e.product.masterVariant.id == a),
            )) && void 0 !== r
            ? r
            : null;
        },
        i = (e, t) => {
          var a;
          return null !== (a = e.items.find((e) => e.id === t)) && void 0 !== a
            ? a
            : null;
        };
    },
    89041: (e, t, a) => {
      a.d(t, { A: () => y });
      var r = a(34023),
        i = a(36913),
        n = a(93277),
        l = a(81352),
        o = a(42619),
        s = a(93695),
        d = a(82536),
        c = a(61471),
        u = a(2906),
        h = a(88509);
      let m = (e) => {
        let t = (0, l.Ku)(),
          { user: a } = (0, d.A)();
        return (0, s.useMutation)({
          ...e,
          mutationFn: (e) => {
            let {
                currency: t,
                lineItems: r,
                shippingAddress: i,
                shippingMethod: n,
              } = e,
              l = {
                currency: t,
                inventoryMode: "ReserveOnOrder",
                lineItems: r,
                shippingAddress: i,
                shippingMethod: n,
                ...((null == a ? void 0 : a.email)
                  ? { customerEmail: a.email }
                  : {}),
              };
            return c.C.createCartForLoggedInUser(l);
          },
          onSuccess: function () {
            for (var a, r = arguments.length, i = Array(r), n = 0; n < r; n++)
              i[n] = arguments[n];
            let [o, s] = i;
            t({ type: l.d1.SetCart, payload: o }),
              t({
                type: l.d1.SetMiniCartProductIds,
                payload: s.lineItems.flatMap((e) =>
                  (null == e ? void 0 : e.productId) ? e.productId : [],
                ),
              });
            let d = s.lineItems.flatMap((e) =>
              e.productId
                ? {
                    action: u.P.AddItem,
                    item: (0, h.N)(
                      o,
                      e.productId,
                      null == e ? void 0 : e.variantId,
                    ),
                  }
                : [],
            );
            d.length && t({ type: l.d1.SetLastActions, payload: d }),
              null == e ||
                null === (a = e.onSuccess) ||
                void 0 === a ||
                a.call(e, ...i);
          },
        });
      };
      var p = a(92258);
      let g = i.Oc,
        v = {
          key: "add-to-cart-error",
          message:
            "There was an error adding the item to the cart, please try again later.",
        },
        y = (e) => {
          var t;
          let a;
          let { cart: s } = (0, l.B_)(),
            d = (0, n.iA)(),
            { mutate: c, ...u } = (0, p.p)(e),
            { mutate: h, ...y } = m(e),
            b = (0, r.useCallback)(
              (e) => {
                let { items: t, cartId: a, version: r } = e,
                  l = t.filter((e) => {
                    if (null == s ? void 0 : s.items.length) {
                      let t = s.items.find(
                        (t) =>
                          t.product.id === e.productId &&
                          t.product.masterVariant.id === e.variantId,
                      );
                      if (t && t.quantity >= i.IJ)
                        return (
                          d({
                            type: n.P7.Add,
                            alertKey: "product-add-error",
                            message: "".concat(
                              t.product.name,
                              ": Maximum quantity exceeded",
                            ),
                            variant: n.iC.Warning,
                          }),
                          !1
                        );
                    }
                    return !0;
                  });
                return l.length
                  ? 1 === l.length
                    ? c({
                        cartId: a,
                        version: r,
                        actions: l.map((e) => {
                          let {
                            quantity: t,
                            productId: a,
                            variantId: r,
                            custom: n,
                            inventoryMode: l,
                            externalPrice: o,
                          } = e;
                          return {
                            action: "addLineItem",
                            productId: a,
                            ...(-1 !== r ? { variantId: r } : {}),
                            quantity: t,
                            inventoryMode: l,
                            externalPrice: o,
                            custom: n,
                            supplyChannel: { typeId: "channel", id: i.iG },
                          };
                        }),
                      })
                    : c({
                        cartId: a,
                        version: r,
                        actions: [
                          {
                            action: "addLineItems",
                            lineItems: l.map((e) => {
                              let {
                                quantity: t,
                                productId: a,
                                variantId: r,
                                custom: n,
                                inventoryMode: l,
                                externalPrice: o,
                              } = e;
                              return {
                                productId: a,
                                ...(-1 !== r ? { variantId: r } : {}),
                                quantity: t,
                                inventoryMode: l,
                                externalPrice: o,
                                custom: n,
                                supplyChannel: { typeId: "channel", id: i.iG },
                              };
                            }),
                          },
                        ],
                      })
                  : null;
              },
              [c, s, d],
            ),
            x = (0, r.useCallback)(
              (e) => {
                let { currency: t, items: a } = e;
                return h({
                  currency: t,
                  lineItems: a.map((e) => ({
                    supplyChannel: { typeId: "channel", id: i.iG },
                    ...e,
                  })),
                  shippingAddress: { country: "GB" },
                  shippingMethod: {
                    key: "Standard",
                    typeId: "shipping-method",
                  },
                });
              },
              [h],
            ),
            S = !!s;
          if (
            ((0, o.w)({
              error: null !== (t = u.error) && void 0 !== t ? t : y.error,
              settings: v,
            }),
            S)
          ) {
            let { id: e, version: t } = s;
            return {
              mutate: (a) => b({ items: a, cartId: e, version: t }),
              ...u,
            };
          }
          return { mutate: (e) => x({ items: e, currency: g }), ...y };
        };
    },
    89226: (e, t, a) => {
      a.d(t, { M: () => d });
      var r = a(94799),
        i = a(4306),
        n = a(85063),
        l = a(55768),
        o = a(18968),
        s = a(57546);
      let d = (e) => {
        var t;
        let { productVariant: a } = e,
          d = (0, n.o)(a);
        return (
          null == a
            ? void 0
            : null === (t = a.images) || void 0 === t
              ? void 0
              : t.length
        )
          ? (0, r.jsx)(l.F, {
              maxHeight: ["100%"],
              hasNavigation: !0,
              hasThumbnails: !1,
              hasScrollbar: !1,
              variant: o.m.mini,
              children: a.images.map((e, t) =>
                (0, r.jsx)(
                  l.F.Slide,
                  {
                    index: t + 1,
                    backgroundStyle: d,
                    variant: o.m.mini,
                    children: (0, r.jsx)(s.X, {
                      src: e.url,
                      alt: "Product image ".concat(t),
                      height: "500",
                      width: "500",
                      style: {
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                      },
                    }),
                  },
                  "".concat(a.id, "_").concat(t + 1),
                ),
              ),
            })
          : (0, r.jsx)(i.Box, {
              position: "relative",
              width: "100%",
              height: "100%",
              children: (0, r.jsx)(s.X, {
                alt: "Product image",
                fill: !0,
                style: { objectFit: "contain" },
              }),
            });
      };
    },
    89811: (e, t, a) => {
      a.d(t, { s: () => w });
      var r = a(94799),
        i = a(38236),
        n = a(36008),
        l = a.n(n),
        o = a(34023),
        s = a(92616),
        d = a(15118),
        c = a(17422),
        u = a(57184),
        h = a(24631),
        m = a(81352),
        p = a(82536),
        g = a(73676),
        v = a(6744);
      let y = (e, t, a) => {
          var r, i;
          let n =
              null ===
                (r = a.find((t) => t.internalName.toLowerCase() === e)) ||
              void 0 === r
                ? void 0
                : r.entries,
            l =
              null == n
                ? void 0
                : null ===
                      (i = n.find(
                        (e) => "routinesteps" === e.internalName.toLowerCase(),
                      )) || void 0 === i
                  ? void 0
                  : i.entries;
          return null == l
            ? void 0
            : l.find(
                (e) =>
                  e.internalName.toLowerCase() ===
                  (null == t ? void 0 : t.toLowerCase()),
              );
        },
        b = (e) => {
          var t, a, r, i, n, l, o;
          let { navigation: s } = (0, v.a)(),
            d = y(
              null == e ? void 0 : e.productType,
              null == e
                ? void 0
                : null === (t = e.masterVariant.routinesteps) || void 0 === t
                  ? void 0
                  : t.key,
              null !== (r = s.entries) && void 0 !== r ? r : [],
            ),
            c =
              null == d
                ? void 0
                : null === (a = d.entries) || void 0 === a
                  ? void 0
                  : a.find((t) => {
                      var a;
                      return (
                        t.label.toLowerCase() ===
                        (null == e
                          ? void 0
                          : null === (a = e.masterVariant.producttypes) ||
                              void 0 === a
                            ? void 0
                            : a[0].toLowerCase())
                      );
                    });
          return [
            { label: "Home", href: "/" },
            { label: "All Products", href: "/products" },
            {
              label:
                null !== (i = null == d ? void 0 : d.label) && void 0 !== i
                  ? i
                  : "",
              href:
                null !== (n = null == d ? void 0 : d.href) && void 0 !== n
                  ? n
                  : "",
            },
            {
              label:
                null !== (l = null == c ? void 0 : c.label) && void 0 !== l
                  ? l
                  : "",
              href:
                null !== (o = null == c ? void 0 : c.href) && void 0 !== o
                  ? o
                  : "",
            },
          ];
        };
      var x = a(79784),
        S = a(57948),
        I = a(11737),
        C = a(24689);
      let f = "/brand/shop",
        k = (e, t) =>
          e && t
            ? t === C.ch.HAIRCARE
              ? "/".concat(C.ch.HAIRCARE).concat(f, "/").concat(e)
              : "".concat(f, "/").concat(e)
            : "";
      var E = a(66736),
        T = a(26929),
        j = a(82713);
      let w = (e) => {
        var t, a, n;
        let {
            onChangeVariant: v,
            product: y,
            variant: C,
            loading: f = !1,
            withAddToCart: w = !0,
            matchScoreLoading: A = !1,
            withMatchScoreAndRatings: _ = !0,
            disableVariantSelection: R = !1,
            scrollToMatchScoreExplanations: L,
            user: N,
            actionButton: D,
          } = e,
          P = b(y),
          { user: F, isSkincareDecoded: B } = (0, p.A)(),
          O = null != N ? N : F,
          M = (0, S.l)(),
          U = (0, o.useRef)(null),
          { cart: V } = (0, m.B_)(),
          G = (0, x.i)(
            null !== (a = null == C ? void 0 : C.brands) && void 0 !== a
              ? a
              : "",
            null == y ? void 0 : y.productType,
          ),
          { sendAnalyticsEvent: H } = (0, u.s)(),
          z = y && C ? I.u.fromProduct(y, C).build() : void 0,
          K =
            M && !B && (0, g.A)(null == y ? void 0 : y.productType) && U.current
              ? () => {
                  M && U.current
                    ? U.current.scrollIntoView({ behavior: "smooth" })
                    : L && L();
                }
              : L,
          q = [
            ...((null == y ? void 0 : y.masterVariant)
              ? [null == y ? void 0 : y.masterVariant]
              : []),
            ...(null !== (n = null == y ? void 0 : y.variants) && void 0 !== n
              ? n
              : []),
          ];
        return (
          y &&
          C &&
          (0, r.jsx)(j.k, {
            productType: y.productType,
            productId: y.id,
            productBrand:
              !!(null == C ? void 0 : C.brands) &&
              (0, r.jsx)(i.Link, {
                as: l(),
                href: k(
                  null == G ? void 0 : G.slug,
                  null == y ? void 0 : y.productType,
                ),
                textStyle: "heading.h5",
                alignSelf: "stretch",
                textAlign: "left",
                "data-testid": "product information brand link",
                children: C.brands,
              }),
            productName: y.name,
            productDescription: C.shortproductdescription,
            productMatches: y.matches,
            productPrice: C.price,
            productStrikePrice: C.strikePrice,
            productSize: C ? (0, E.d)(C) : void 0,
            productIsOnStock:
              null === (t = C.availability) || void 0 === t
                ? void 0
                : t.isOnStock,
            breadcrumbsItems: P,
            withMatchScoreAndRatings: _,
            withAddToCart: w,
            loading: f,
            matchScoreLoading: A,
            reviewId: y.productKey,
            matchScores: y.matchScores,
            handleMatchScoreClick: K,
            isDermatologistRecommended: y.isDermatologistRecommended,
            allVariants: q,
            disableVariantSelection: R,
            onVariantChange: (e) => {
              v((0, T.v4)(y, e));
            },
            addToCartPayload: z,
            onAddToCart: () => {
              if (y && C) {
                var e;
                let t = {
                  cart_id: "".concat(null == V ? void 0 : V.id),
                  products: [
                    (0, h.n)(y, { variant: C, cart: V, isProductAdded: !0 }),
                  ],
                  page_category: d.a.PDP,
                  cart_size:
                    (null !==
                      (e =
                        null == V
                          ? void 0
                          : V.items.reduce((e, t) => e + t.quantity, 0)) &&
                    void 0 !== e
                      ? e
                      : 0) + 1,
                };
                return (
                  O && (t.bdna_segment_id = "placeholder"),
                  H(s.m3.productAdded.bind(s.m3), c.s.PRODUCT_ADDED, t)
                );
              }
            },
            actionButton: D,
          })
        );
      };
    },
    90609: (e, t, a) => {
      a.d(t, { n: () => l });
      var r = a(94799),
        i = a(49882),
        n = a(51522);
      let l = (e) => {
        let {
          children: t,
          variant: a,
          allowMultiple: n,
          allowToggle: l,
          ...o
        } = e;
        return (0, r.jsx)(i.Accordion, {
          allowToggle: !n && l,
          allowMultiple: n,
          variant: a,
          ...o,
          children: t,
        });
      };
      l.Item = n.A;
    },
    91130: (e, t, a) => {
      a.d(t, { T: () => r });
      var r = (function (e) {
        return (
          (e.Base = "base"),
          (e.Outline = "outline"),
          (e.MediumOutline = "mediumOutline"),
          (e.SmallOutline = "smallOutline"),
          (e.SmallOutlineWhite = "smallOutlineWhite"),
          (e.Secondary = "secondary"),
          e
        );
      })({});
    },
    92258: (e, t, a) => {
      a.d(t, { p: () => m });
      var r = a(93695),
        i = a(93277),
        n = a(81352),
        l = a(2906),
        o = a(88509),
        s = a(26929);
      let d = (e, t) => {
        let a = t.filter((e) => "recalculate" !== e.action);
        return a.length
          ? a.flatMap((t) => {
              let a, r;
              let i = (0, s.wf)(t.action, t.quantity);
              return i
                ? ((null == t ? void 0 : t.productId)
                    ? (a = (0, o.N)(e, t.productId, t.variantId))
                    : (null == t ? void 0 : t.lineItemId)
                      ? (a = (0, o.P)(e, t.lineItemId))
                      : (null == t ? void 0 : t.lineItems) &&
                        (r =
                          null == t
                            ? void 0
                            : t.lineItems
                                .map((t) =>
                                  (0, o.N)(e, t.productId, t.variantId),
                                )
                                .filter((e) => !!e)),
                  {
                    items: [...(null != r ? r : []), a].filter((e) => !!e),
                    action: i,
                  })
                : [];
            })
          : null;
      };
      var c = a(61471),
        u = a(98798);
      let h = (e, t, a) => {
          var r, i, n, l;
          switch (a.action) {
            case "addLineItem": {
              let r = {
                productId: a.productId,
                quantity: a.quantity,
                version: t,
                ...(a.variantId ? { variantId: a.variantId } : {}),
                ...(a.custom ? { custom: a.custom } : {}),
              };
              return c.C.addToCartForLoggedInUser(e, r);
            }
            case "addLineItems": {
              let r = { products: a.lineItems, version: t };
              return c.C.addMultipleToCartForLoggedInUser(e, r);
            }
            case "changeLineItemQuantity": {
              let r = { quantity: a.quantity, version: t };
              return c.C.updateItemQuantityForLoggedInUser(e, r, a.lineItemId);
            }
            case "updateItemQuantities": {
              let r = { version: t, lineItems: a.lineItems };
              return c.C.updateItemQuantities(e, r);
            }
            case "addDiscountCode": {
              let r = { code: a.code, version: t };
              return c.C.addDiscountCodeForLoggedInUser(e, r);
            }
            case "removeDiscountCode": {
              let i = {
                  version: t,
                  discountCode:
                    null === (r = a.discountCode.obj) || void 0 === r
                      ? void 0
                      : r.code,
                },
                n = a.discountCode.id;
              return c.C.removeDiscountCodeForLoggedInUser(e, i, n);
            }
            case "setShippingMethod": {
              let r = {
                shippingMethodId:
                  null !==
                    (n =
                      null === (i = a.shippingMethod) || void 0 === i
                        ? void 0
                        : i.id) && void 0 !== n
                    ? n
                    : "",
                version: t,
              };
              return c.C.setShippingMethod(e, r);
            }
            case "setCustomerEmail": {
              let r = {
                email: null !== (l = a.email) && void 0 !== l ? l : "",
                version: t,
              };
              return c.C.setCustomerEmail(e, r);
            }
            case "recalculate":
              return c.C.recalculate(e, { version: t });
            case "setBillingAddress": {
              let r = { address: a.address, version: t };
              return c.C.setBillingAddress(e, r);
            }
            case "setShippingAddress": {
              let r = { address: a.address, version: t };
              return c.C.setShippingAddress(e, r);
            }
            default:
              return (
                (0, u.A)(u.$.ERROR, "Invalid update action", a),
                Promise.resolve()
              );
          }
        },
        m = (e) => {
          let t = (0, n.Ku)(),
            a = (0, i.iA)(),
            { miniCart: o } = (0, n.B_)();
          return (0, r.useMutation)({
            ...e,
            mutationFn: async (e) => {
              let r,
                { cartId: l, version: o = 1, actions: s } = e;
              for (let e of (t({ type: n.d1.SetUpdating, payload: !0 }), s)) {
                var d;
                let t =
                  null !== (d = null == r ? void 0 : r.version) && void 0 !== d
                    ? d
                    : o;
                try {
                  r = await h(l, t, e);
                } catch (e) {
                  a({
                    type: i.P7.Add,
                    alertKey: "error-updating-cart",
                    message: "Failed to update cart, please try again",
                    variant: i.iC.Warning,
                  });
                }
              }
              return r;
            },
            onSuccess: (a, r, i) => {
              var s;
              t({ type: n.d1.SetCart, payload: a });
              let c = d(a, r.actions);
              (null == c ? void 0 : c.length) &&
                (t({
                  type: n.d1.SetMiniCartProductIds,
                  payload: [
                    ...new Set([
                      ...((null == o ? void 0 : o.length) ? o : []),
                      ...c.flatMap((e) => {
                        var t;
                        return (null == e ? void 0 : e.action) ===
                          l.P.AddItem &&
                          (null == e
                            ? void 0
                            : null === (t = e.items) || void 0 === t
                              ? void 0
                              : t.length)
                          ? null == e
                            ? void 0
                            : e.items
                                .filter((e) => !!e)
                                .map((e) => e.product.id)
                          : [];
                      }),
                    ]),
                  ],
                }),
                t({ type: n.d1.SetLastActions, payload: c })),
                null == e ||
                  null === (s = e.onSuccess) ||
                  void 0 === s ||
                  s.call(e, a, r, i);
            },
            onError: (r, l, o) => {
              if (null == e ? void 0 : e.onError) {
                e.onError(r, l, o);
                return;
              }
              a({
                type: i.P7.Add,
                alertKey: "error-updating-cart",
                message: "Something went wrong, please try again",
                variant: i.iC.Warning,
              }),
                t({ type: n.d1.SetError, error: r });
            },
            onSettled: () => {
              t({ type: n.d1.SetUpdating, payload: !1 });
            },
          });
        };
    },
    93367: (e, t, a) => {
      a.d(t, { K: () => i, T: () => r });
      let r = {
          primary: {
            black: {
              10: "#1A1A1A",
              "10[@0.7]": "#1A1A1AB2",
              20: "#333333",
              30: "#4D4D4D",
              40: "#666666",
              50: "#808080",
              60: "#999999",
              70: "#B3B3B3",
              80: "#CCCCCC",
              90: "#E6E6E6",
            },
            white: "#FFFFFF",
            "white[@0.8]": "rgba(255, 255, 255, 0.80)",
            "white[@0.9]": "rgba(255, 255, 255, 0.90)",
            warmGrey: {
              30: "#544E45",
              "30[@.04]": "rgba(84, 78, 69, 0.40)",
              40: "#70685C",
              50: "#8C8273",
              60: "#A39B8F",
              70: "#BAB4AB",
              80: "#E8E4DE",
              90: "#F7F4F0",
            },
            coldGrey: {
              30: "#455154",
              40: "#5C6C70",
              50: "#72878D",
              60: "#8F9FA3",
              70: "#ABB7BA",
              80: "#C7CFD1",
              90: "#E4E8E9",
            },
          },
          bdna: {
            bdna: {
              10: "#A85FE6",
              "10--new": "#E8E4F0",
              20: "#A15FE6",
              30: "#9A5FE7",
              40: "#945FE7",
              50: "#8D5EE7",
              60: "#875FE8",
              70: "#7E5EE8",
              80: "#7A5EE9",
              90: "#725EE9",
              100: "#6558EE",
            },
          },
          brand: {
            sage: { 10: "#DDDDD6", 100: "#585841" },
            clay: { 10: "#D4C7BF", 100: "#775C4F" },
            mint: { 10: "#D7DDDD", 100: "#567070" },
            prune: { 10: "#CFCCD4", 100: "#4D485C" },
            beeswax: { 10: "#EADFCE", 100: "#6E604A" },
            rosehip: { 10: "#E5D6D9", 100: "#7F4C4F" },
          },
          semantic: {
            red: {
              40: "#CC0000",
              "40[@.005]": "rgba(204, 0, 0, 0.05)",
              50: "#FF0000",
            },
            green: { 30: "#0D8C45", "30[@.002]": "#0D8C4533", 50: "#15EA73" },
            orange: {
              10: "#FF6B00",
              "10[@.002]": "#FF6B0033",
              20: "#FF4000",
              30: "#DB3A00",
            },
            yellow: {
              30: "#997100",
              "30[@.002]": "#FFBC0033",
              50: "#FFBC00",
              "50[@.002]": "#FFBC0033",
            },
          },
        },
        i = {
          bdna: "linear(to-br, bdna.bdna.100, bdna.bdna.70)",
          livingBdna: "linear(to-bl, bdna.bdna.20, bdna.bdna.100)",
          bdnaMatch: "linear(to-bl, bdna.bdna.100, bdna.bdna.70)",
          sage: "linear(to-br, brand.sage.100, brand.sage.10)",
          clay: "linear(to-br, brand.clay.100, brand.clay.10)",
          mint: "linear(to-br, brand.mint.100, brand.mint.10)",
          prune: "linear(to-br, brand.prune.100, brand.prune.10)",
          beeswax: "linear(to-br, brand.beeswax.100, brand.beeswax.10)",
          rosehip: "linear(to-br, brand.rosehip.100, brand.rosehip.10)",
        };
    },
    93453: (e, t, a) => {
      a.d(t, { Y: () => o });
      var r = a(50692),
        i = a(34023);
      class n {
        static getInstance() {
          return this._instance || (this._instance = new n()), this._instance;
        }
        async postMarketingConsentForm(e, t) {
          let a = await fetch("/api/customers/email-consent", {
            method: "POST",
            body: JSON.stringify(e),
            signal: t,
          });
          if (!a.ok)
            throw Error(
              "Marketing consent request failed with status ".concat(a.status),
            );
          return a.json();
        }
      }
      let l = n.getInstance(),
        o = () => {
          let e = (0, i.useRef)({
              email: "",
              consent: "",
              firstName: void 0,
              lastName: void 0,
              ctCustomerId: void 0,
            }),
            {
              isFetching: t,
              isSuccess: a,
              refetch: n,
            } = (0, r.useQuery)({
              enabled: !1,
              retry: !1,
              queryKey: ["postMarketingConsentForm"],
              queryFn: async (t) => {
                let { signal: a } = t;
                return l.postMarketingConsentForm(e.current, a);
              },
            });
          return {
            isFetching: t,
            isSuccess: a,
            postMarketingConsent: (t) => {
              (e.current = t), n();
            },
          };
        };
    },
    96145: (e, t, a) => {
      a.d(t, { yf: () => n, XY: () => o });
      var r = a(24689);
      let i = {
          [r.R7.SKIN_CONCERN]: "brand.mint.10",
          [r.R7.SKIN_TYPE]: "brand.beeswax.10",
          [r.R7.SKIN_SENSITIVITY]: "brand.rosehip.10",
          [r.R7.SKIN_FEEL]: "brand.prune.10",
          [r.R7.SCENT]: "brand.sage.10",
        },
        n = (e) => i[e];
      var l = a(34780);
      let o = (e) => {
        switch (e) {
          case l.I.LOW:
            return "semantic.green.30";
          case l.I.MEDIUM:
            return "semantic.yellow.50";
          case l.I.HIGH:
            return "semantic.orange.10";
          default:
            return "primary.warmGrey.50";
        }
      };
    },
    96437: (e, t, a) => {
      a.d(t, { i: () => n });
      var r = a(22291);
      let i = "local-options",
        n = () => {
          let { setStorage: e, readStorage: t } = (0, r.M)();
          return [
            () => t(i),
            (t) => {
              e(i, t);
            },
          ];
        };
    },
    96543: (e, t, a) => {
      a.d(t, {
        X3: () => v,
        Kt: () => c.K,
        dr: () => s,
        mP: () => m,
        ZU: () => d.Z,
        rh: () => y.r,
      });
      var r = a(50692),
        i = a(73261),
        n = a(58716),
        l = a(36918),
        o = a(33802);
      let s = (e, t) => {
        let { refreshKey: a, productType: s, ...d } = e,
          {
            getSearchArgs: c,
            getQueryKey: u,
            enabled: h,
          } = (0, o.t)({
            requiresSegmentId: !(0, n.w)(i.T.PARTIAL_DIAGNOSE),
            productType: s,
          }),
          m = c(d),
          p = u("useGetProductByIdFromSearch", { ...m, refreshKey: a }),
          g = !!(e.productId && h);
        return (0, r.useQuery)({
          ...t,
          enabled: g,
          queryKey: p,
          queryFn: () => l.k.getProductByIdForUser(m),
        });
      };
      var d = a(41960),
        c = a(79835),
        u = a(17912);
      let h = { addRandomSeed: !0 },
        m = (e, t) => {
          let {
            getQueryKey: a,
            enabled: r,
            getSearchArgs: i,
          } = (0, o.t)({ ...h, enabled: null == t ? void 0 : t.enabled });
          return (0, u.useQueries)({
            queries: e.map((e) => {
              let n = i(e),
                o = a("useGetProductsByMultiSearch", n);
              return {
                ...t,
                enabled: r,
                queryKey: o,
                queryFn: () => l.k.getProductsBySearch(n),
              };
            }),
          });
        };
      var p = a(6744),
        g = a(42619);
      let v = (e, t) => {
        var a;
        let {
            enabled: i,
            getQueryKey: n,
            getSearchArgs: s,
          } = (0, o.t)({
            enabled: !!(
              (null == t ? void 0 : t.enabled) !== !1 &&
              (null == e ? void 0 : e.searchTerm)
            ),
            productType:
              (null === (a = e.productTypes) || void 0 === a
                ? void 0
                : a.length) === 1
                ? e.productTypes[0]
                : void 0,
          }),
          d = s(e),
          { navigation: c } = (0, p.a)(),
          u = (0, r.useQuery)({
            ...t,
            enabled: i,
            queryKey: n("useGetAutocompleteSuggestions", d),
            queryFn: () =>
              l.k.getAutocompleteSuggestions(d, c.autocompleteHrefs),
          });
        return (0, g.w)({ error: u.error }), u;
      };
      var y = a(14207);
    },
    97001: (e, t, a) => {
      a.d(t, { q: () => l });
      var r = a(94799),
        i = a(66656),
        n = a(31416);
      let l = (e) => {
        let {
          children: t,
          contentWidth: a = 24,
          contentHeight: l = 8,
          loading: o = !1,
          noOfLines: s,
          spacing: d = 2,
          marginY: c,
          marginX: u,
          borderRadius: h,
          __css: m,
        } = e;
        return o
          ? s && s > 1
            ? (0, r.jsx)(i.SkeletonText, {
                isLoaded: !o,
                maxWidth: a,
                skeletonHeight: l,
                noOfLines: s,
                marginY: c,
                marginX: u,
                spacing: d,
                __css: m,
              })
            : (0, r.jsx)(n.Skeleton, {
                isLoaded: !o,
                maxWidth: a,
                width: a,
                height: l,
                marginY: c,
                marginX: u,
                borderRadius: h,
                __css: m,
              })
          : t;
      };
    },
    97331: (e, t, a) => {
      a.d(t, { K: () => i, w: () => n });
      var r = (function (e) {
        return (
          (e.CeraVe = "CeraVe"),
          (e.Garnier = "Garnier"),
          (e.GeorgioArmani = "Giorgio Armani"),
          (e.Kiehls = "Kiehl's"),
          (e.Lancome = "Lanc\xf4me"),
          (e.LaRochePosay = "La Roche-Posay"),
          (e.LorealParis = "L'Or\xe9al Paris"),
          (e.SkinCeuticals = "SkinCeuticals"),
          (e.Vichy = "Vichy"),
          (e.YouthToThePeople = "Youth to the People"),
          (e.YvesStLaurent = "Yves Saint Laurent"),
          e
        );
      })(r || {});
      let i = [
          {
            label: "CeraVe",
            slug: "cerave",
            subNavImageSrc: "/images/brands/subnav/CeraVe.webp",
            navCardImageSrc: "/images/brands/navCard/CeraVe.webp",
            filterImageSrc: "/images/brands/filter/CeraVe.png",
            id: "CeraVe",
            isDermatologistRecommended: !0,
          },
          {
            label: "Garnier",
            slug: "garnier",
            subNavImageSrc: "/images/brands/subnav/Garnier.webp",
            navCardImageSrc: "/images/brands/navCard/Garnier.webp",
            filterImageSrc: "/images/brands/filter/Garnier.png",
            id: "Garnier",
            isDermatologistRecommended: !1,
          },
          {
            label: "Giorgio Armani",
            slug: "giorgio-armani",
            subNavImageSrc: "/images/brands/subnav/GiorgioArmani.webp",
            navCardImageSrc: "/images/brands/navCard/GiorgioArmani.webp",
            filterImageSrc: "/images/brands/filter/GiorgioArmani.png",
            id: "Giorgio Armani",
            isDermatologistRecommended: !1,
          },
          {
            label: "Kiehl's",
            slug: "kiehls",
            subNavImageSrc: "/images/brands/subnav/Kiehls.webp",
            navCardImageSrc: "/images/brands/navCard/Kiehls.webp",
            filterImageSrc: "/images/brands/filter/Kiehls.png",
            id: "Kiehl's",
            isDermatologistRecommended: !1,
          },
          {
            label: "Lanc\xf4me",
            slug: "lancome",
            subNavImageSrc: "/images/brands/subnav/Lancome.webp",
            navCardImageSrc: "/images/brands/navCard/Lancome.webp",
            filterImageSrc: "/images/brands/filter/Lancome.png",
            id: "Lanc\xf4me",
            isDermatologistRecommended: !1,
          },
          {
            label: "La Roche-Posay",
            slug: "la-roche-posay",
            subNavImageSrc: "/images/brands/subnav/LaRochePosay.webp",
            navCardImageSrc: "/images/brands/navCard/LaRochePosay.webp",
            filterImageSrc: "/images/brands/filter/LaRochePosay.png",
            id: "La Roche-Posay",
            isDermatologistRecommended: !0,
          },
          {
            label: "L'Or\xe9al Paris",
            slug: "loreal-paris",
            subNavImageSrc: "/images/brands/subnav/LOrealParis.webp",
            navCardImageSrc: "/images/brands/navCard/LOrealParis.webp",
            filterImageSrc: "/images/brands/filter/LOrealParis.png",
            id: "L'Or\xe9al Paris",
            isDermatologistRecommended: !1,
          },
          {
            label: "SkinCeuticals",
            slug: "skinceuticals",
            subNavImageSrc: "/images/brands/subnav/SkinCeuticals.webp",
            navCardImageSrc: "/images/brands/navCard/SkinCeuticals.webp",
            filterImageSrc: "/images/brands/filter/SkinCeuticals.png",
            id: "SkinCeuticals",
            isDermatologistRecommended: !0,
          },
          {
            label: "Vichy",
            slug: "vichy",
            subNavImageSrc: "/images/brands/subnav/Vichy.webp",
            navCardImageSrc: "/images/brands/navCard/Vichy.webp",
            filterImageSrc: "/images/brands/filter/Vichy.png",
            id: "Vichy",
            isDermatologistRecommended: !0,
          },
          {
            label: "Youth To The People",
            slug: "youth-to-the-people",
            subNavImageSrc: "/images/brands/subnav/YouthToThePeople.webp",
            navCardImageSrc: "/images/brands/navCard/YouthToThePeople.webp",
            filterImageSrc: "/images/brands/filter/YouthToThePeople.png",
            id: "Youth to the People",
            isDermatologistRecommended: !1,
          },
          {
            label: "Yves Saint Laurent",
            slug: "yves-saint-laurent",
            subNavImageSrc: "/images/brands/subnav/YvesSaintLaurent.webp",
            navCardImageSrc: "/images/brands/navCard/YvesSaintLaurent.webp",
            filterImageSrc: "/images/brands/filter/YvesSaintLaurent.png",
            id: "Yves Saint Laurent",
            isDermatologistRecommended: !1,
          },
        ],
        n = i
          .filter((e) => e.isDermatologistRecommended)
          .map((e) => {
            if (e.isDermatologistRecommended) return e.label;
          });
    },
    98798: (e, t, a) => {
      a.d(t, { $: () => r, A: () => i });
      var r = (function (e) {
        return (
          (e.DEBUG = "DEBUG"),
          (e.INFO = "INFO"),
          (e.WARN = "WARN"),
          (e.ERROR = "ERROR"),
          e
        );
      })({});
      let i = (e, t, a) => {
        let r = { time: new Date().getTime(), message: t, ...a };
        "DEBUG" === e && console.debug("DEBUG", { ...r }),
          "INFO" === e && console.info("INFO", { ...r }),
          "WARN" === e && console.warn("WARN", { ...r }),
          "ERROR" === e && console.error("ERROR", { ...r });
      };
    },
    99436: (e, t, a) => {
      a.d(t, { P_: () => i, ku: () => r, yR: () => n });
      let r = (e, t) => {
          var a, r, i;
          if (!t) return !1;
          let n =
            null !==
              (i = null === (a = t[e]) || void 0 === a ? void 0 : a.types) &&
            void 0 !== i
              ? i
              : null === (r = t[e]) || void 0 === r
                ? void 0
                : r.type;
          return !!n && Object.keys(n).length > 0;
        },
        i = (e, t) => {
          var a, r;
          if (!t) return;
          let i = t[e];
          return null !==
            (r =
              null == i
                ? void 0
                : null === (a = i.message) || void 0 === a
                  ? void 0
                  : a.toString()) && void 0 !== r
            ? r
            : void 0;
        },
        n = (e, t, a) => {
          var r;
          if (!t) return !1;
          let i = null === (r = t[e]) || void 0 === r ? void 0 : r.types;
          return !!i && Object.keys(i).some((e) => a.includes(e));
        };
    },
    99821: (e, t, a) => {
      a.d(t, { r: () => n });
      var r = a(22291);
      let i = "local-preferences",
        n = () => {
          let { setStorage: e, readStorage: t } = (0, r.M)();
          return {
            readPreferences: () => t(i),
            setPreferences: (t) => {
              e(i, t);
            },
          };
        };
    },
  },
]);
