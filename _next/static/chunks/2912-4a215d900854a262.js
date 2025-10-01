"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2912],
  {
    30089: (e, t, i) => {
      i.d(t, { j: () => h });
      var n = i(34023),
        o = i(92616),
        a = i(17422),
        r = i(57184),
        s = i(81352),
        d = i(11277),
        l = i(92258);
      let c = "This code is invalid, try again",
        u = "Whoops, looks like you have already used this code",
        p = (e) => {
          switch (e) {
            case "MaxApplicationReached":
              return u;
            case "DoesNotMatchCart":
              return "Please check criteria and try again";
            case "ApplicationStoppedByPreviousDiscount":
              return "Code cannot be used with other promotions";
            default:
              return c;
          }
        },
        h = (e) => {
          let { analytics: t } = e,
            { cart: i } = (0, s.B_)(),
            { removeDiscount: h } = (0, d.d)(),
            [x, m] = (0, n.useState)(""),
            [g, y] = (0, n.useState)(""),
            [v, b] = (0, n.useState)(""),
            { sendAnalyticsEvent: C } = (0, r.s)(),
            {
              mutate: j,
              isPending: f,
              isSuccess: S,
            } = (0, l.p)({
              onSuccess: (e) => {
                let i = e.discountCodes.find((e) => e.code === x);
                if (i && "MatchesCart" === i.state) {
                  let e = {
                    click_action_category: "valid",
                    click_name: x,
                    page_category: t.page_category,
                  };
                  C(o.m3.promoCode.bind(o.m3), a.s.PROMO_CODE, e),
                    y("".concat(x, " applied to order"));
                } else {
                  let n = {
                    click_action_category: "error",
                    click_name: x,
                    page_category: t.page_category,
                  };
                  C(o.m3.promoCode.bind(o.m3), a.s.PROMO_CODE, n),
                    i
                      ? (h(e.id, e.version, i.id, i.code), b(p(i.state)))
                      : b("Error while adding discount code");
                }
              },
              onError: () => {
                let e = {
                  click_action_category: "error",
                  click_name: x,
                  page_category: t.page_category,
                };
                C(o.m3.promoCode.bind(o.m3), a.s.PROMO_CODE, e), b(c);
              },
            });
          return {
            isSuccess: S,
            isPending: f,
            message: g,
            errorMessage: v,
            applyDiscount: (e) => {
              var t;
              m(e),
                y(""),
                b(""),
                (
                  null == i
                    ? void 0
                    : null === (t = i.discountCodes) || void 0 === t
                      ? void 0
                      : t.find((t) => t.code === e)
                )
                  ? b(u)
                  : j({
                      cartId: "".concat(null == i ? void 0 : i.id),
                      version: null == i ? void 0 : i.version,
                      actions: [
                        { action: "addDiscountCode", code: e },
                        { action: "recalculate", updateProductData: !0 },
                      ],
                    });
            },
            code: x,
          };
        };
    },
    40462: (e, t, i) => {
      i.d(t, { r: () => x });
      var n = i(94799),
        o = i(98814),
        a = i(12736),
        r = i(77909),
        s = i(93339),
        d = i(4306),
        l = i(89136),
        c = i(54391),
        u = i(39693),
        p = i(87704),
        h = i(39311);
      let x = (e) => {
        let {
            placeholder: t,
            inputCode: i,
            isLoading: x = !1,
            error: m,
            appliedDiscount: g,
            onChange: y,
            applyPromoCode: v,
            onRemove: b,
          } = e,
          C = (0, o.useMultiStyleConfig)("DiscountCode", {}),
          j = !!m && m,
          f = !!(null == g ? void 0 : g.id),
          S = j || f,
          { isReady: k } = (0, c.g)();
        return (0, n.jsxs)(a.FormControl, {
          __css: C.formControl,
          "data-testid": "discount-code-input",
          children: [
            (0, n.jsxs)(r.HStack, {
              __css: C.formContainer,
              children: [
                (0, n.jsx)(h.p, {
                  ariaLabel: "Discount Code",
                  "data-testid": "Discount Code",
                  placeholder: t,
                  variant: "discount",
                  onChange: (e) => {
                    y(e.target.value);
                  },
                }),
                (0, n.jsx)(s.Button, {
                  "aria-label": "Apply",
                  "data-testid": "Apply",
                  "aria-disabled": !i,
                  variant: "primary",
                  size: "sm",
                  isDisabled: !i || !k,
                  onClick: () => v(i),
                  isLoading: x && !f,
                  children: "Apply",
                }),
              ],
            }),
            S &&
              (0, n.jsx)(a.FormHelperText, {
                "aria-label": "Promo Code Message",
                "data-testid": "Promo Code Message",
                children: (0, n.jsxs)(d.Box, {
                  __css: C.formTextContainer,
                  children: [
                    j
                      ? (0, n.jsx)(u.WarningIcon, {
                          width: 5,
                          height: 5,
                          color: "semantic.red.40",
                        })
                      : (0, n.jsx)(u.TickCircledFilledIcon, {
                          width: 6,
                          height: 6,
                        }),
                    j &&
                      (0, n.jsx)(l.Text, {
                        textStyle: "function.caption.small",
                        textColor: "semantic.red.40",
                        children: m,
                      }),
                    !j &&
                      f &&
                      (0, n.jsxs)(d.Box, {
                        __css: C.successTextContainer,
                        children: [
                          (0, n.jsxs)(l.Text, {
                            textStyle: "function.caption.small",
                            children: [
                              "Your ",
                              (0, p.S)(g.value, !0),
                              " discount has been applied",
                            ],
                          }),
                          k &&
                            (0, n.jsx)(l.Text, {
                              as: "button",
                              textStyle: "function.caption.small",
                              textColor: "primary.black.60",
                              textDecor: "underline",
                              onClick: b,
                              "data-testid": "Remove",
                              children: "Remove",
                            }),
                        ],
                      }),
                  ],
                }),
              }),
          ],
        });
      };
    },
    47397: (e, t, i) => {
      i.d(t, { r: () => v });
      var n = i(94799),
        o = i(98814),
        a = i(47759),
        r = i(4306),
        s = i(89136),
        d = i(31634),
        l = i(55554),
        c = i(11582),
        u = i(24689),
        p = i(39693),
        h = i(87704),
        x = i(93869);
      let m = (e) => {
        let { children: t, variant: i, displayIcon: a = !0, onClick: s } = e,
          d = (0, o.useStyleConfig)("DiscountTag", { variant: i });
        return (0, n.jsxs)(r.Box, {
          __css: d,
          onClick: () => (null == s ? void 0 : s()),
          "data-testid": "discount tag",
          ...(s ? { role: "button" } : {}),
          children: [a && (0, n.jsx)(p.TagIcon, { width: 3, height: 3 }), t],
        });
      };
      var g = i(11277);
      let y = (e) => {
          let {
              discount: t,
              key: i,
              cartId: o,
              cartVersion: a,
              showRemoveText: l,
            } = e,
            { removeDiscount: c } = (0, g.d)();
          return (0, n.jsxs)(
            d.Flex,
            {
              justifyContent: "space-between",
              alignItems: "center",
              minH: 6,
              children: [
                (0, n.jsxs)(r.Box, {
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                  children: [
                    (0, n.jsx)(r.Box, {
                      color: "semantic.orange.20",
                      borderRadius: "base",
                      children: (0, n.jsx)(p.DiscountTagIcon, {
                        height: 6,
                        width: 6,
                      }),
                    }),
                    (0, n.jsx)(s.Text, {
                      textStyle: "function.text.medium",
                      children: t.name,
                    }),
                    l &&
                      t.removable &&
                      (0, n.jsx)(s.Text, {
                        as: "button",
                        textStyle: "function.text.medium",
                        textColor: "primary.black.10",
                        textDecor: "underline",
                        "data-testid": "Remove",
                        onClick: () => {
                          t.id && c(o, a, t.id, t.key);
                        },
                        children: "Remove",
                      }),
                  ],
                }),
                !!t.value &&
                  (0, n.jsxs)(s.Text, {
                    textStyle: "body.semibold",
                    color: "semantic.orange.30",
                    "data-testid": "formatted discount price",
                    "aria-label": "Discount value is: ".concat(
                      (0, h.S)(t.value),
                    ),
                    children: ["-", (0, h.S)(t.value)],
                  }),
              ],
            },
            "".concat(t.key, "-").concat(i),
          );
        },
        v = (e) => {
          let {
              showRemoveText: t = !0,
              shippingIsEstimate: i,
              cartId: g,
              cartPricing: v,
              cartVersion: b,
              cartQuantity: C,
            } = e,
            j = (0, o.useMultiStyleConfig)("CostBreakdown", {}),
            { isOpen: f, onToggle: S } = (0, a.useDisclosure)(),
            k = v.shipping.amount <= 0 ? "FREE" : (0, h.S)(v.shipping.amount),
            _ = (0, h.S)(v.finalPrice),
            T = v.cartDiscounts.discounts.filter(
              (e) => e.target !== u.dV.Shipping,
            ),
            I = [
              ...(v.productDiscounts.totalValue
                ? [
                    {
                      value: v.productDiscounts.totalValue,
                      name: "Product discounts",
                      removable: !1,
                      key: "product-discounts",
                    },
                  ]
                : []),
              ...T,
            ],
            D = I.length,
            w = v.totalDiscountValue - v.shipping.discount;
          return (0, n.jsxs)(r.Box, {
            __css: j.container,
            children: [
              (0, n.jsx)(s.Text, {
                textStyle: "body.semibold",
                children: "Order Summary",
              }),
              (0, n.jsxs)(d.Flex, {
                textStyle: "body.semibold",
                justifyContent: "space-between",
                children: [
                  (0, n.jsxs)(d.Flex, {
                    gap: 2,
                    children: [
                      (0, n.jsxs)(s.Text, {
                        children: [C, " ", 1 === C ? "Item" : "Items"],
                      }),
                      D > 0 &&
                        (0, n.jsxs)(m, {
                          variant: "filled",
                          displayIcon: !1,
                          children: [D, " Promos"],
                        }),
                    ],
                  }),
                  (0, n.jsxs)(x.$, {
                    "data-testid": "show more discounts",
                    variant: "tertiary",
                    onClick: S,
                    ariaLabel: "show more discounts",
                    justifyContent: "flex-start",
                    textDecoration: "underline",
                    mt: 1,
                    children: [
                      f ? "Close breakdown" : "See breakdown",
                      (0, n.jsx)(r.Box, {
                        transform: f ? "rotate(0deg)" : "rotate(-180deg)",
                        transition: "transform 0.1s",
                        transformOrigin: "center",
                        children: (0, n.jsx)(p.ChevronUpIcon, {
                          width: 4,
                          height: 4,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)(l.Divider, { borderColor: "primary.warmGrey.80" }),
              (0, n.jsx)(c.Collapse, {
                in: f,
                animateOpacity: !0,
                children: (0, n.jsx)(d.Flex, {
                  direction: "column",
                  gap: 2,
                  marginY: 2,
                  children: I.map((e, i) =>
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        i > 0 &&
                          (0, n.jsx)(l.Divider, {
                            borderColor: "primary.warmGrey.80",
                          }),
                        (0, n.jsx)(
                          y,
                          {
                            discount: e,
                            cartId: g,
                            cartVersion: b,
                            showRemoveText: t,
                          },
                          "".concat(e.key, "-").concat(i),
                        ),
                      ],
                    }),
                  ),
                }),
              }),
              (0, n.jsxs)(r.Box, {
                __css: j.subTotalAndEstimatedShipContainer,
                "data-testid": "Subtotal without discount",
                textStyle: "body.semibold",
                "aria-label": "Subtotal value is ".concat((0, h.S)(v.bagValue)),
                children: [
                  (0, n.jsx)(s.Text, { children: "Subtotal" }),
                  (0, n.jsx)(s.Text, { children: (0, h.S)(v.bagValue) }),
                ],
              }),
              w > 0 &&
                (0, n.jsxs)(r.Box, {
                  __css: j.subTotalAndEstimatedShipContainer,
                  "data-testid": "Discount Value",
                  children: [
                    (0, n.jsx)(s.Text, {
                      textStyle: "body.semibold",
                      children: "Total savings",
                    }),
                    (0, n.jsxs)(s.Text, {
                      textStyle: "body.semibold",
                      color: "semantic.orange.30",
                      "data-testid": "formatted total discount price",
                      "aria-label":
                        "Total value of applied discounts is: ".concat(
                          (0, h.S)(w),
                        ),
                      children: ["-", (0, h.S)(w)],
                    }),
                  ],
                }),
              (0, n.jsx)(r.Box, {
                display: "flex",
                flexDirection: "column",
                children: (0, n.jsxs)(r.Box, {
                  __css: j.subTotalAndEstimatedShipContainer,
                  textStyle: "body.semibold",
                  children: [
                    (0, n.jsx)(s.Text, {
                      "data-testid": "estimated shipping label",
                      children: i ? "Estimated Shipping" : "Shipping",
                    }),
                    (0, n.jsx)(s.Text, {
                      "aria-label": "Shipping cost is: ".concat(k),
                      "data-testid": "Shipping cost",
                      children: k,
                    }),
                  ],
                }),
              }),
              (0, n.jsx)(l.Divider, { borderColor: "primary.warmGrey.80" }),
              (0, n.jsxs)(r.Box, {
                __css: j.totalContainer,
                children: [
                  (0, n.jsx)(s.Text, {
                    textStyle: "title.t3",
                    "data-testid": "total label",
                    children: "Total",
                  }),
                  (0, n.jsx)(s.Text, {
                    textStyle: "heading.h6.bold",
                    "aria-label": "Product price is: ".concat(_),
                    "data-testid": "Total bag Price",
                    children: _,
                  }),
                ],
              }),
            ],
          });
        };
    },
    54391: (e, t, i) => {
      i.d(t, { P: () => s, g: () => d });
      var n = i(94799),
        o = i(34023);
      let a = { isReady: !1, setPaymentSessionReady: () => null },
        r = (0, o.createContext)(a),
        s = (e) => {
          let { children: t, initialState: i = a } = e,
            [s, d] = (0, o.useState)(i.isReady);
          return (0, n.jsx)(r.Provider, {
            value: {
              isReady: s,
              setPaymentSessionReady: function (e) {
                d(e);
              },
            },
            children: t,
          });
        },
        d = () => (0, o.useContext)(r);
    },
    72912: (e, t, i) => {
      i.d(t, { k: () => es, J: () => ec });
      var n = i(94799),
        o = i(98814),
        a = i(8822),
        r = i(4306),
        s = i(89136),
        d = i(31634),
        l = i(22387),
        c = i(1076),
        u = i(34023),
        p = i(24689),
        h = i(92718),
        x = i(90609),
        m = i(91130),
        g = i(16774),
        y = i(11425),
        v = i(75093),
        b = i(46893),
        C = i(27357),
        j = i(92616),
        f = i(17422),
        S = i(57184),
        k = i(97533),
        _ = i(81352),
        T = i(50692),
        I = i(47752),
        D = i.n(I),
        w = i(69211),
        B = i(78233);
      class A {
        static getInstance() {
          return A.instance || (A.instance = new A()), A.instance;
        }
        async getAddons(e) {
          let t = "".concat(w.Z8, "/search/addons");
          return (
            await (
              await fetch(t, { body: JSON.stringify(e), method: "POST" })
            ).json()
          ).map(B.C);
        }
      }
      let P = A.getInstance();
      var E = i(82536),
        O = i(48973),
        R = i(80807);
      let V = (e) => {
        var t, i, n, o;
        let {
            data: { preferences: a },
          } = (0, R.W)(),
          { data: r } = (0, O.B)(),
          { cart: s } = (0, _.B_)(),
          { user: d, accessToken: l } = (0, E.A)(),
          c = {
            searchScoreOptions: { preferences: a, normalizeFactors: r },
            productTypes: [p.ch.SKINCARE, p.ch.HAIRCARE],
            productIdsInCart:
              null !==
                (n =
                  null == s
                    ? void 0
                    : null === (t = s.items) || void 0 === t
                      ? void 0
                      : t.map((e) => e.product.id)) && void 0 !== n
                ? n
                : [],
            productTypeCategoriesInCart: D()(
              null !==
                (o =
                  null == s
                    ? void 0
                    : null === (i = s.items) || void 0 === i
                      ? void 0
                      : i.flatMap((e) => {
                          var t;
                          return null !==
                            (t = e.product.masterVariant.productTypeKeys) &&
                            void 0 !== t
                            ? t
                            : [];
                        })) && void 0 !== o
                ? o
                : [],
            ),
            segmentId: null == d ? void 0 : d.segmentId,
            userId: null == d ? void 0 : d.id,
          },
          u = { ...e, enabled: (null == e ? void 0 : e.enabled) !== !1 && !!l };
        return (0, T.useQuery)({
          queryKey: ["useGetAddons", c],
          ...u,
          queryFn: () => P.getAddons({ query: c, accessToken: l }),
        });
      };
      var L = i(98577),
        F = i(57948),
        G = i(39693),
        M = i(93869),
        W = i(57403),
        H = i(75076),
        U = i(38065);
      let N = (e) => {
        let { isOpen: t, onClose: i } = e,
          o = (0, C.useRouter)(),
          { cart: a } = (0, _.B_)(),
          { sendAnalyticsEvent: l } = (0, S.s)(),
          [c, p] = u.useState([]),
          { data: h, isError: x, isSuccess: m, isStale: T } = V(),
          { data: I } = (0, L.A)();
        (0, u.useEffect)(() => {
          (t && (null == c ? void 0 : c.length)) || p(h);
        }, [h, p, t, T]);
        let D = () => {
            var e;
            let t = {
              cart_id: "".concat(null == a ? void 0 : a.id),
              products: null == a ? void 0 : a.items.map(k.T),
              cart_size:
                null !== (e = null == a ? void 0 : a.totalQuantity) &&
                void 0 !== e
                  ? e
                  : 0,
              promotion_code: (null == a ? void 0 : a.discountCodes.length)
                ? null == a
                  ? void 0
                  : a.discountCodes.map((e) => {
                      let { code: t } = e;
                      return "".concat(t);
                    })
                : [],
              subtotal: a.pricing.subtotal,
            };
            return (
              l(j.m3.checkoutStarted.bind(j.m3), f.s.CHECKOUT_STARTED, t),
              o.push("/checkout")
            );
          },
          w = x || (m && !(null == h ? void 0 : h.length)),
          B = (0, F.l)();
        return (
          (0, u.useLayoutEffect)(() => {
            t && w && D();
          }),
          (0, n.jsxs)(g.Modal, {
            scrollBehavior: "inside",
            isOpen: t && !w,
            onClose: i,
            isCentered: !0,
            children: [
              (0, n.jsx)(y.ModalOverlay, {}),
              (0, n.jsxs)(v.ModalContent, {
                backgroundColor: "primary.white",
                shadow: "none",
                borderRadius: { base: 0, md: "2xl" },
                maxHeight: "100%",
                minHeight: ["100%", null, "auto"],
                height: "fit-content",
                marginTop: 0,
                minWidth: ["100%", null, "fit-content"],
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                  (0, n.jsxs)(d.Flex, {
                    gap: 4,
                    padding: { base: 3, md: 4 },
                    paddingBottom: 0,
                    flexDirection: "column",
                    height: "100%",
                    maxHeight: "100%",
                    width: "100%",
                    minHeight: 0,
                    children: [
                      (0, n.jsxs)(d.Flex, {
                        justifyContent: "flex-start",
                        gap: 4,
                        width: "100%",
                        children: [
                          (0, n.jsx)(r.Box, {
                            as: "button",
                            "aria-label": "Back to Bag",
                            onClick: i,
                            children: (0, n.jsx)(G.ArrowLeftIcon, {
                              width: 6,
                              height: 6,
                            }),
                          }),
                          (0, n.jsx)(s.Text, {
                            textStyle: "body.semibold",
                            children: "Any final add-ons?",
                          }),
                        ],
                      }),
                      !!(null == c ? void 0 : c.length) &&
                        (0, n.jsx)(b.SimpleGrid, {
                          columns: [1, null, 2],
                          gap: 4,
                          width: "100%",
                          overflowY: "auto",
                          paddingBottom: 4,
                          children: c.map((e, t) =>
                            (0, n.jsx)(
                              r.Box,
                              {
                                borderTopWidth: {
                                  base: t > 0 ? "1px" : "0",
                                  md: t >= 2 ? "1px" : "0",
                                },
                                borderColor: "primary.warmGrey.80",
                                pt: { base: 4 * (t > 0), md: 4 * (t >= 2) },
                                children: (0, n.jsx)(W.A, {
                                  orientation: W.y.HORIZONTAL,
                                  item: e,
                                  index: t,
                                  config: { fullWidth: B, canEditQuantity: !0 },
                                  analytics: {
                                    click_location: "Addons before checkout",
                                  },
                                }),
                              },
                              e.id,
                            ),
                          ),
                        }),
                    ],
                  }),
                  !(null == c ? void 0 : c.length) &&
                    (0, n.jsx)(r.Box, {
                      paddingY: 15,
                      children: (0, n.jsx)(U.y, {}),
                    }),
                  (0, n.jsx)(r.Box, {
                    width: "100%",
                    children: (0, n.jsx)(H.c, {
                      discounts: I,
                      cartPricing: null == a ? void 0 : a.pricing,
                      cartAppliedDiscounts:
                        null == a ? void 0 : a.pricing.cartDiscounts.discounts,
                      backgroundColor: "none",
                      children: (0, n.jsx)(M.$, {
                        fullWidth: !0,
                        variant: "primary",
                        onClick: () => D(),
                        height: 18,
                        rightIcon: (0, n.jsx)(G.CreditCardIcon, {
                          width: 6,
                          height: 6,
                        }),
                        "data-testid": "Checkout button addon modal",
                        children: "Continue to checkout",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var z = i(91398),
        K = i(15231),
        Q = i(47397),
        Y = i(75619),
        q = i(30089),
        Z = i(11277),
        $ = i(40462);
      let J = (e) => {
        let { analytics: t } = e,
          [i, a] = (0, u.useState)(""),
          [s, d] = (0, u.useState)(),
          { isCartLoading: l, cart: c } = (0, _.B_)(),
          {
            isSuccess: p,
            isPending: h,
            errorMessage: x,
            applyDiscount: m,
          } = (0, q.j)({ analytics: t }),
          { removeDiscount: g } = (0, Z.d)(),
          y = (0, o.useStyleConfig)("DiscountCodeCard");
        return (
          (0, u.useEffect)(() => {
            p &&
              !l &&
              (null == c ? void 0 : c.pricing.cartDiscounts.discounts) &&
              d(
                null == c
                  ? void 0
                  : c.pricing.cartDiscounts.discounts.find((e) => e.name === i),
              );
          }, [p, null == c ? void 0 : c.pricing.cartDiscounts.discounts, i, l]),
          (0, n.jsx)(r.Box, {
            __css: y,
            children: (0, n.jsx)($.r, {
              placeholder: "Add your gift or promo code",
              inputCode: i,
              isLoading: null != l ? l : h,
              error: x,
              onChange: (e) => {
                a(e);
              },
              applyPromoCode: m,
              appliedDiscount: s,
              onRemove: () => {
                if (c && (null == s ? void 0 : s.id)) {
                  let { id: e, version: t } = c;
                  g(
                    e,
                    t,
                    null == s ? void 0 : s.id,
                    null == s ? void 0 : s.key,
                  ),
                    d(void 0);
                }
              },
            }),
          })
        );
      };
      var X = i(43137),
        ee = i(51120),
        et = i(87704);
      let ei = (e) => {
        let { totalSavingsValue: t } = e,
          i = (0, o.useStyleConfig)("TotalSaving");
        return (0, n.jsxs)(r.Box, {
          __css: i,
          children: [
            (0, n.jsx)(r.Box, {
              color: "semantic.orange.20",
              children: (0, n.jsx)(G.DiscountTagIcon, { height: 6, width: 6 }),
            }),
            (0, n.jsxs)(s.Text, {
              textStyle: "body",
              children: [
                (0, n.jsx)(s.Text, {
                  textStyle: "body.semibold",
                  as: "span",
                  children: t > 0 ? (0, et.S)(t) : "\xa30",
                }),
                " ",
                "total savings",
              ],
            }),
          ],
        });
      };
      var en = i(73261),
        eo = i(58716),
        ea = i(81875),
        er = i(352);
      let es = (e) => {
          let { mappedCart: t, isLoading: i = !1, analytics: g } = e,
            y = (0, o.useMultiStyleConfig)("ViewBasket"),
            v = (0, F.l)(),
            b = (0, _.B_)(),
            [C, j] = u.useState(!1),
            { data: f } = (0, ea.W)(h.Sg.BAG, null),
            { data: S } = (0, L.A)(),
            k = null == t ? void 0 : t.pricing.shipping.discount;
          return (0, n.jsx)(r.Box, {
            __css: y.root,
            children: (0, n.jsx)(c.Grid, {
              templateColumns: "repeat(12, 1fr)",
              gap: 8,
              "aria-label": "Basket items list",
              "data-testid": "Basket items list",
              children: (() => {
                var e, o, c;
                let u = (null == t ? void 0 : t.items.length) === 0,
                  h =
                    (null === (e = b.deletedItems) || void 0 === e
                      ? void 0
                      : e.length) === 0,
                  _ = u && h;
                if (i || (b.isCartUpdating && _))
                  return (0, n.jsx)(a.GridItem, {
                    colSpan: { base: 12 },
                    textAlign: "center",
                    children: (0, n.jsx)(U.y, {
                      color: "bdna.bdna.100",
                      size: "lg",
                      "aria-label": "Loading Spinner",
                      "data-testid": "Loading Spinner",
                    }),
                  });
                if (!t || _)
                  return (0, n.jsx)(a.GridItem, {
                    colSpan: { base: 12 },
                    children: (0, n.jsxs)(r.Box, {
                      __css: y.emptyContainer,
                      "aria-label": "Empty bag",
                      "data-testid": "Empty Bag",
                      children: [
                        (0, n.jsx)(s.Text, {
                          textStyle: "heading.h5.bold",
                          children: "Your bag is empty",
                        }),
                        (0, n.jsx)(s.Text, {
                          textStyle: "body",
                          children: "Good decisions take time",
                        }),
                        (0, n.jsx)(K.ButtonLink, {
                          size: "lg",
                          variant: "primary",
                          rightIcon: (0, n.jsx)(G.PasswordShowIcon, {
                            height: 6,
                            width: 6,
                          }),
                          "aria-label": "Find me something",
                          "data-testid": "Find me something",
                          href: "/products",
                          children: "Find me something",
                        }),
                      ],
                    }),
                  });
                let T =
                    null == t
                      ? void 0
                      : t.items.some((e) => !e.product.atLeastOneInStock),
                  I = [],
                  D =
                    null == t
                      ? void 0
                      : t.items.reduce((e, t) => {
                          if (t.parentId && !t.routine);
                          else if (t.routine) {
                            var i, n, o;
                            let a =
                                null !==
                                  (n =
                                    null === (i = t.routine) || void 0 === i
                                      ? void 0
                                      : i.id) && void 0 !== n
                                  ? n
                                  : -1,
                              r =
                                null !== (o = t.parentId) && void 0 !== o
                                  ? o
                                  : -1;
                            e[r] ||
                              (e[r] = new er.E({
                                id: "".concat(a),
                                focusArea: t.routine.focusAreaKey,
                              })),
                              e[r].addProduct({
                                ...t.product,
                                masterVariant: {
                                  ...t.product.masterVariant,
                                  price: t.pricing.lineItemPrice,
                                  strikePrice:
                                    t.pricing.lineItemPriceBeforeDiscount,
                                },
                              });
                          } else
                            t.product.productType === p.ch.SOFT_BUNDLE
                              ? (e[t.product.id] = t.product)
                              : I.push(t);
                          return e;
                        }, {});
                return (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(a.GridItem, {
                      colSpan: { base: 12, lg: 6, xl: 7 },
                      children: (0, n.jsxs)(d.Flex, {
                        __css: y.savingsBasketListContainer,
                        children: [
                          (null == t ? void 0 : t.pricing.totalDiscountValue) >
                            0 &&
                            (0, n.jsx)(r.Box, {
                              "aria-label": "Total savings section",
                              "data-testid": "Total savings section",
                              children: (0, n.jsx)(ei, {
                                totalSavingsValue:
                                  (null == t
                                    ? void 0
                                    : t.pricing.totalDiscountValue) -
                                  (null != k ? k : 0),
                              }),
                            }),
                          (0, n.jsx)(d.Flex, {
                            __css: y.headerAndCardContainer,
                            children: (0, eo.w)(
                              en.T.WITH_GROUPED_PRODUCT_LAYOUT,
                            )
                              ? (0, n.jsxs)(r.Box, {
                                  __css: y.basketListContainer,
                                  children: [
                                    Object.entries(D).map((e, t) => {
                                      let [i, o] = e;
                                      return "no-routine" !== i
                                        ? (0, n.jsx)(
                                            Y.j,
                                            {
                                              bundle: o,
                                              analytics: g,
                                              context: { index: t },
                                              showProductsListAccordion: !0,
                                            },
                                            i,
                                          )
                                        : null;
                                    }),
                                    !!I.length &&
                                      (0, n.jsx)(z.f, { basketItems: I }),
                                  ],
                                })
                              : (0, n.jsx)(r.Box, {
                                  __css: y.basketListContainer,
                                  children: (0, n.jsx)(z.f, {
                                    basketItems: t.items,
                                  }),
                                }),
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(a.GridItem, {
                      colSpan: { base: 12, lg: 6, xl: 4 },
                      colStart: { xl: 9 },
                      children: (0, n.jsxs)(l.VStack, {
                        padding: { base: 4 },
                        gap: 8,
                        alignItems: "stretch",
                        children: [
                          !!f &&
                            (0, n.jsx)(r.Box, {
                              order: { base: 2, lg: "inherit" },
                              children: (0, n.jsx)(ee.m, {
                                temporaryStyle: "light",
                                permanentStyle: "transparentDark",
                                temporaryEntries: f.temporaryEntries,
                                permanentEntries: [],
                              }),
                            }),
                          (0, n.jsx)(x.n, {
                            variant: m.T.Secondary,
                            allowToggle: !0,
                            children: (0, n.jsx)(x.n.Item, {
                              title: "Promo code",
                              variant: m.T.Secondary,
                              children: (0, n.jsx)(J, { analytics: g }),
                            }),
                          }),
                          (0, n.jsx)(d.Flex, {
                            __css: y.headerAndCardContainer,
                            order: { base: 3, lg: "inherit" },
                            children: (0, n.jsxs)(d.Flex, {
                              __css: y.costAndConfirmContainer,
                              gap: 4,
                              children: [
                                (0, n.jsx)(Q.r, {
                                  cartQuantity: t.items.length,
                                  cartPricing: t.pricing,
                                  cartId: t.id,
                                  cartVersion: t.version,
                                  shippingIsEstimate: !0,
                                  "aria-label": "Cost breakdown",
                                  "data-testid": "Cost breakdown",
                                }),
                                !v &&
                                  (0, n.jsx)(H.c, {
                                    discounts: S,
                                    cartPricing:
                                      null === (o = b.cart) || void 0 === o
                                        ? void 0
                                        : o.pricing,
                                    cartAppliedDiscounts:
                                      null === (c = b.cart) || void 0 === c
                                        ? void 0
                                        : c.pricing.cartDiscounts.discounts,
                                    variant: "checkout",
                                    hasItemsShortOfStock: T,
                                    children: (0, n.jsx)(M.$, {
                                      isDisabled: T,
                                      fullWidth: !0,
                                      variant: "primary",
                                      onClick: () => j(!0),
                                      height: 18,
                                      rightIcon: (0, n.jsx)(G.CreditCardIcon, {
                                        width: 6,
                                        height: 6,
                                      }),
                                      "data-testid": "check out button",
                                      children: "Checkout",
                                    }),
                                  }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(N, { isOpen: C, onClose: () => j(!1) }),
                    v &&
                      (0, n.jsx)(X.k, {
                        children: (0, n.jsx)(d.Flex, {
                          flexDirection: "column",
                          w: "100%",
                          gap: 4,
                          children: (0, n.jsx)(M.$, {
                            isDisabled: T,
                            fullWidth: !0,
                            variant: "primary",
                            onClick: () => j(!0),
                            rightIcon: (0, n.jsx)(G.CreditCardIcon, {
                              width: 6,
                              height: 6,
                            }),
                            "data-testid": "check out button",
                            children: "Checkout",
                          }),
                        }),
                      }),
                  ],
                });
              })(),
            }),
          });
        },
        { definePartsStyle: ed, defineMultiStyleConfig: el } = (0, i(2568).YU)([
          "root",
          "container",
          "cardColumn",
          "emptyContainer",
          "basketListContainer",
          "headerAndCardContainer",
          "costAndConfirmContainer",
          "savingsBasketListContainer",
        ]),
        ec = el({
          baseStyle: ed({
            root: {
              height: "100%",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              zIndex: "docked",
              borderTopRadius: "2xl",
              bg: "primary.warmGrey.90",
              py: { md: 4, lg: 8, xl: 10 },
              px: { md: "8", lg: "10" },
            },
            emptyContainer: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: { base: 5, md: 8, lg: 10 },
            },
            cardColumn: { gap: 8, alignItems: "stretch" },
            savingsBasketListContainer: {
              padding: { base: 3 },
              backgroundColor: {
                base: "primary.white",
                md: "primary.warmGrey.90",
              },
            },
            headerAndCardContainer: {
              display: "flex",
              flexDirection: "column",
              gap: 4,
              marginTop: 8,
            },
            costAndConfirmContainer: {
              display: "flex",
              flexDirection: "column",
              backgroundColor: "primary.white",
              borderRadius: "1rem",
              padding: 4,
            },
            basketListContainer: {
              gap: 8,
              flexDirection: "column",
              backgroundColor: "primary.white",
              borderRadius: "1rem",
              paddingTop: { md: 6 },
              paddingBottom: 6,
              paddingRight: 6,
              paddingLeft: 2,
            },
          }),
        });
    },
    91398: (e, t, i) => {
      i.d(t, { f: () => l });
      var n = i(94799),
        o = i(22387),
        a = i(34150),
        r = i(81352),
        s = i(2906),
        d = i(57403);
      let l = (e) => {
        let {
            productCardVariant: t,
            basketItems: i,
            allowQuantityChange: l = !0,
          } = e,
          { deletedItems: c } = (0, r.B_)();
        return (0, n.jsxs)(o.VStack, {
          gap: 2,
          divider: (0, n.jsx)(a.StackDivider, {
            borderColor: "primary.warmGrey.80",
          }),
          children: [
            i.map((e, i) =>
              (0, n.jsx)(
                d.A,
                {
                  orientation: d.y.HORIZONTAL,
                  item: e.product,
                  index: i,
                  config: {
                    fullWidth: !0,
                    canEditQuantity: l,
                    linkTarget: s.M.QUICK_VIEW,
                    variant: t,
                  },
                  override: {
                    price: e.pricing.lineItemPrice,
                    strikePrice: e.pricing.lineItemPriceBeforeDiscount,
                  },
                },
                e.product.id,
              ),
            ),
            (null == c ? void 0 : c.length) > 0 &&
              c
                .filter((e) => !i.find((t) => t.id === e.id))
                .map((e, t) =>
                  (0, n.jsx)(
                    d.A,
                    {
                      orientation: d.y.HORIZONTAL,
                      item: e.product,
                      index: t,
                      config: {
                        fullWidth: !0,
                        linkTarget: s.M.QUICK_VIEW,
                        isDeleted: !0,
                      },
                      override: {
                        price: e.pricing.lineItemPrice,
                        strikePrice: e.pricing.lineItemPriceBeforeDiscount,
                      },
                    },
                    e.product.id,
                  ),
                ),
          ],
        });
      };
    },
    97533: (e, t, i) => {
      i.d(t, { T: () => n });
      let n = (e, t) => {
        var i, n, o, a, r, s;
        let d = (e) =>
          (null == e ? void 0 : e.length) ? e.join(", ") : void 0;
        return {
          availability: (
            null === (i = e.product.masterVariant.availability) || void 0 === i
              ? void 0
              : i.isOnStock
          )
            ? "in stock"
            : "out of stock",
          brand: e.product.masterVariant.brands,
          main_category: e.product.productType,
          product_id: e.product.id,
          name: e.product.name,
          position: t + 1,
          price:
            null === (n = e.pricing) || void 0 === n
              ? void 0
              : n.unitPriceBeforeDiscount,
          quantity: e.quantity,
          score:
            null === (o = e.product.matchScores) || void 0 === o
              ? void 0
              : o.overallScore,
          sku: "".concat(e.product.masterVariant.sku),
          category: d(e.product.categories),
          variant: "".concat(e.product.masterVariant.size),
          value: "".concat(e.pricing.lineItemPrice * e.quantity),
          product_routine: !!e.routine,
          discount:
            null === (a = e.pricing.productLevelDiscount) || void 0 === a
              ? void 0
              : a.unitValue,
          type: d(e.product.masterVariant.producttypes),
          routine_step:
            e.product.masterVariant.routinesteps &&
            "Step "
              .concat(
                null === (r = e.product.masterVariant.routinesteps) ||
                  void 0 === r
                  ? void 0
                  : r.step,
                " - ",
              )
              .concat(
                null === (s = e.product.masterVariant.routinesteps) ||
                  void 0 === s
                  ? void 0
                  : s.key,
              ),
        };
      };
    },
  },
]);
