"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [125],
  {
    13270: function (t, e, i) {
      i.d(e, {
        D: function () {
          return n;
        },
      });
      let n = (t, e) => {
        var i, n, a, o, r, s;
        let d = (t) =>
          (null == t ? void 0 : t.length) ? t.join(", ") : void 0;
        return {
          availability: (
            null === (i = t.product.masterVariant.availability) || void 0 === i
              ? void 0
              : i.isOnStock
          )
            ? "in stock"
            : "out of stock",
          brand: t.product.masterVariant.brands,
          main_category: t.product.productType,
          product_id: t.product.id,
          name: t.product.name,
          position: e + 1,
          price:
            null === (n = t.pricing) || void 0 === n
              ? void 0
              : n.unitPriceBeforeDiscount,
          quantity: t.quantity,
          score:
            null === (a = t.product.matchScores) || void 0 === a
              ? void 0
              : a.overallScore,
          sku: "".concat(t.product.masterVariant.sku),
          category: d(t.product.categories),
          variant: "".concat(t.product.masterVariant.size),
          value: "".concat(t.pricing.lineItemPrice * t.quantity),
          product_routine: !!t.routine,
          discount:
            null === (o = t.pricing.productLevelDiscount) || void 0 === o
              ? void 0
              : o.unitValue,
          type: d(t.product.masterVariant.producttypes),
          routine_step:
            t.product.masterVariant.routinesteps &&
            "Step "
              .concat(
                null === (r = t.product.masterVariant.routinesteps) ||
                  void 0 === r
                  ? void 0
                  : r.step,
                " - ",
              )
              .concat(
                null === (s = t.product.masterVariant.routinesteps) ||
                  void 0 === s
                  ? void 0
                  : s.key,
              ),
        };
      };
    },
    83219: function (t, e, i) {
      i.d(e, {
        t: function () {
          return l;
        },
      });
      var n = i(24004),
        a = i(72835),
        o = i(93966),
        r = i(55029),
        s = i(56871),
        d = i(82667);
      let l = (t) => {
        let { basketItems: e, allowQuantityChange: i = !0 } = t,
          { deletedItems: l } = (0, r.iQ)();
        return (0, n.jsxs)(a.g, {
          gap: 2,
          divider: (0, n.jsx)(o.c, { borderColor: "primary.warmGrey.80" }),
          children: [
            e.map((t, e) =>
              (0, n.jsx)(
                d.I,
                {
                  orientation: d.V.HORIZONTAL,
                  item: t.product,
                  index: e,
                  config: {
                    fullWidth: !0,
                    canEditQuantity: i,
                    linkTarget: s.e.QUICK_VIEW,
                  },
                  override: {
                    price: t.pricing.lineItemPrice,
                    strikePrice: t.pricing.lineItemPriceBeforeDiscount,
                  },
                },
                t.product.id,
              ),
            ),
            (null == l ? void 0 : l.length) > 0 &&
              l
                .filter((t) => !e.find((e) => e.id === t.id))
                .map((t, e) =>
                  (0, n.jsx)(
                    d.I,
                    {
                      orientation: d.V.HORIZONTAL,
                      item: t.product,
                      index: e,
                      config: {
                        fullWidth: !0,
                        linkTarget: s.e.QUICK_VIEW,
                        isDeleted: !0,
                      },
                      override: {
                        price: t.pricing.lineItemPrice,
                        strikePrice: t.pricing.lineItemPriceBeforeDiscount,
                      },
                    },
                    t.product.id,
                  ),
                ),
          ],
        });
      };
    },
    69476: function (t, e, i) {
      i.d(e, {
        b: function () {
          return v;
        },
      });
      var n = i(24004),
        a = i(26324),
        o = i(36278),
        r = i(585),
        s = i(44982),
        d = i(35138),
        l = i(89797),
        c = i(38846),
        u = i(13327),
        p = i(92832),
        h = i(40420),
        x = i(95714);
      let m = (t) => {
        let { children: e, variant: i, displayIcon: o = !0, onClick: s } = t,
          d = (0, a.useStyleConfig)("DiscountTag", { variant: i });
        return (0, n.jsxs)(r.xu, {
          __css: d,
          onClick: () => (null == s ? void 0 : s()),
          "data-testid": "discount tag",
          ...(s ? { role: "button" } : {}),
          children: [o && (0, n.jsx)(p.TagIcon, { width: 3, height: 3 }), e],
        });
      };
      var g = i(20619);
      let y = (t) => {
          let {
              discount: e,
              key: i,
              cartId: a,
              cartVersion: o,
              showRemoveText: l,
            } = t,
            { removeDiscount: c } = (0, g.k)();
          return (0, n.jsxs)(
            d.k,
            {
              justifyContent: "space-between",
              alignItems: "center",
              minH: 6,
              children: [
                (0, n.jsxs)(r.xu, {
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  alignItems: "center",
                  children: [
                    (0, n.jsx)(r.xu, {
                      color: "semantic.orange.20",
                      borderRadius: "base",
                      children: (0, n.jsx)(p.DiscountTagIcon, {
                        height: 6,
                        width: 6,
                      }),
                    }),
                    (0, n.jsx)(s.x, {
                      textStyle: "function.text.medium",
                      children: e.name,
                    }),
                    l &&
                      e.removable &&
                      (0, n.jsx)(s.x, {
                        as: "button",
                        textStyle: "function.text.medium",
                        textColor: "primary.black.10",
                        textDecor: "underline",
                        "data-testid": "Remove",
                        onClick: () => {
                          e.id && c(a, o, e.id, e.key);
                        },
                        children: "Remove",
                      }),
                  ],
                }),
                !!e.value &&
                  (0, n.jsxs)(s.x, {
                    textStyle: "body.semibold",
                    color: "semantic.orange.30",
                    "data-testid": "formatted discount price",
                    "aria-label": "Discount value is: ".concat(
                      (0, h._)(e.value),
                    ),
                    children: ["-", (0, h._)(e.value)],
                  }),
              ],
            },
            "".concat(e.key, "-").concat(i),
          );
        },
        v = (t) => {
          let {
              showRemoveText: e = !0,
              shippingIsEstimate: i,
              cartId: g,
              cartPricing: v,
              cartVersion: b,
              cartQuantity: C,
            } = t,
            j = (0, a.useMultiStyleConfig)("CostBreakdown", {}),
            { isOpen: f, onToggle: k } = (0, o.q)(),
            _ = v.shipping.amount <= 0 ? "FREE" : (0, h._)(v.shipping.amount),
            S = (0, h._)(v.finalPrice),
            I = v.cartDiscounts.discounts.filter(
              (t) => t.target !== u.fR.Shipping,
            ),
            D = [
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
              ...I,
            ],
            w = D.length,
            T = v.totalDiscountValue - v.shipping.discount;
          return (0, n.jsxs)(r.xu, {
            __css: j.container,
            children: [
              (0, n.jsx)(s.x, {
                textStyle: "body.semibold",
                children: "Order Summary",
              }),
              (0, n.jsxs)(d.k, {
                textStyle: "body.semibold",
                justifyContent: "space-between",
                children: [
                  (0, n.jsxs)(d.k, {
                    gap: 2,
                    children: [
                      (0, n.jsxs)(s.x, {
                        children: [C, " ", 1 === C ? "Item" : "Items"],
                      }),
                      w > 0 &&
                        (0, n.jsxs)(m, {
                          variant: "filled",
                          displayIcon: !1,
                          children: [w, " Promos"],
                        }),
                    ],
                  }),
                  (0, n.jsxs)(x.z, {
                    "data-testid": "show more discounts",
                    variant: "tertiary",
                    onClick: k,
                    ariaLabel: "show more discounts",
                    justifyContent: "flex-start",
                    textDecoration: "underline",
                    mt: 1,
                    children: [
                      f ? "Close breakdown" : "See breakdown",
                      (0, n.jsx)(r.xu, {
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
              (0, n.jsx)(l.i, { borderColor: "primary.warmGrey.80" }),
              (0, n.jsx)(c.U, {
                in: f,
                animateOpacity: !0,
                children: (0, n.jsx)(d.k, {
                  direction: "column",
                  gap: 2,
                  marginY: 2,
                  children: D.map((t, i) =>
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        i > 0 &&
                          (0, n.jsx)(l.i, {
                            borderColor: "primary.warmGrey.80",
                          }),
                        (0, n.jsx)(
                          y,
                          {
                            discount: t,
                            cartId: g,
                            cartVersion: b,
                            showRemoveText: e,
                          },
                          "".concat(t.key, "-").concat(i),
                        ),
                      ],
                    }),
                  ),
                }),
              }),
              (0, n.jsxs)(r.xu, {
                __css: j.subTotalAndEstimatedShipContainer,
                "data-testid": "Subtotal without discount",
                textStyle: "body.semibold",
                "aria-label": "Subtotal value is ".concat((0, h._)(v.bagValue)),
                children: [
                  (0, n.jsx)(s.x, { children: "Subtotal" }),
                  (0, n.jsx)(s.x, { children: (0, h._)(v.bagValue) }),
                ],
              }),
              T > 0 &&
                (0, n.jsxs)(r.xu, {
                  __css: j.subTotalAndEstimatedShipContainer,
                  "data-testid": "Discount Value",
                  children: [
                    (0, n.jsx)(s.x, {
                      textStyle: "body.semibold",
                      children: "Total savings",
                    }),
                    (0, n.jsxs)(s.x, {
                      textStyle: "body.semibold",
                      color: "semantic.orange.30",
                      "data-testid": "formatted total discount price",
                      "aria-label":
                        "Total value of applied discounts is: ".concat(
                          (0, h._)(T),
                        ),
                      children: ["-", (0, h._)(T)],
                    }),
                  ],
                }),
              (0, n.jsx)(r.xu, {
                display: "flex",
                flexDirection: "column",
                children: (0, n.jsxs)(r.xu, {
                  __css: j.subTotalAndEstimatedShipContainer,
                  textStyle: "body.semibold",
                  children: [
                    (0, n.jsx)(s.x, {
                      "data-testid": "estimated shipping label",
                      children: i ? "Estimated Shipping" : "Shipping",
                    }),
                    (0, n.jsx)(s.x, {
                      "aria-label": "Shipping cost is: ".concat(_),
                      "data-testid": "Shipping cost",
                      children: _,
                    }),
                  ],
                }),
              }),
              (0, n.jsx)(l.i, { borderColor: "primary.warmGrey.80" }),
              (0, n.jsxs)(r.xu, {
                __css: j.totalContainer,
                children: [
                  (0, n.jsx)(s.x, {
                    textStyle: "title.t3",
                    "data-testid": "total label",
                    children: "Total",
                  }),
                  (0, n.jsx)(s.x, {
                    textStyle: "heading.h6.bold",
                    "aria-label": "Product price is: ".concat(S),
                    "data-testid": "Total bag Price",
                    children: S,
                  }),
                ],
              }),
            ],
          });
        };
    },
    60714: function (t, e, i) {
      i.d(e, {
        I: function () {
          return x;
        },
      });
      var n = i(24004),
        a = i(26324),
        o = i(68533),
        r = i(1900),
        s = i(90058),
        d = i(585),
        l = i(44982),
        c = i(87167),
        u = i(92832),
        p = i(40420),
        h = i(85187);
      let x = (t) => {
        let {
            placeholder: e,
            inputCode: i,
            isLoading: x = !1,
            error: m,
            appliedDiscount: g,
            onChange: y,
            applyPromoCode: v,
            onRemove: b,
          } = t,
          C = (0, a.useMultiStyleConfig)("DiscountCode", {}),
          j = !!m && m,
          f = !!(null == g ? void 0 : g.id),
          k = j || f,
          { isReady: _ } = (0, c.J)();
        return (0, n.jsxs)(o.NI, {
          __css: C.formControl,
          "data-testid": "discount-code-input",
          children: [
            (0, n.jsxs)(r.U, {
              __css: C.formContainer,
              children: [
                (0, n.jsx)(h.I, {
                  ariaLabel: "Discount Code",
                  "data-testid": "Discount Code",
                  placeholder: e,
                  variant: "discount",
                  onChange: (t) => {
                    y(t.target.value);
                  },
                }),
                (0, n.jsx)(s.z, {
                  "aria-label": "Apply",
                  "data-testid": "Apply",
                  "aria-disabled": !i,
                  variant: "primary",
                  size: "sm",
                  isDisabled: !i || !_,
                  onClick: () => v(i),
                  isLoading: x && !f,
                  children: "Apply",
                }),
              ],
            }),
            k &&
              (0, n.jsx)(o.Q6, {
                "aria-label": "Promo Code Message",
                "data-testid": "Promo Code Message",
                children: (0, n.jsxs)(d.xu, {
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
                      (0, n.jsx)(l.x, {
                        textStyle: "function.caption.small",
                        textColor: "semantic.red.40",
                        children: m,
                      }),
                    !j &&
                      f &&
                      (0, n.jsxs)(d.xu, {
                        __css: C.successTextContainer,
                        children: [
                          (0, n.jsxs)(l.x, {
                            textStyle: "function.caption.small",
                            children: [
                              "Your ",
                              (0, p._)(g.value, !0),
                              " discount has been applied",
                            ],
                          }),
                          _ &&
                            (0, n.jsx)(l.x, {
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
    87167: function (t, e, i) {
      i.d(e, {
        J: function () {
          return d;
        },
        j: function () {
          return s;
        },
      });
      var n = i(24004),
        a = i(14978);
      let o = { isReady: !1, setPaymentSessionReady: () => null },
        r = (0, a.createContext)(o),
        s = (t) => {
          let { children: e, initialState: i = o } = t,
            [s, d] = (0, a.useState)(i.isReady);
          return (0, n.jsx)(r.Provider, {
            value: {
              isReady: s,
              setPaymentSessionReady: function (t) {
                d(t);
              },
            },
            children: e,
          });
        },
        d = () => (0, a.useContext)(r);
    },
    10125: function (t, e, i) {
      i.d(e, {
        m: function () {
          return tn;
        },
        p: function () {
          return tr;
        },
      });
      var n = i(24004),
        a = i(26324),
        o = i(39468),
        r = i(585),
        s = i(44982),
        d = i(35138),
        l = i(72835),
        c = i(22659),
        u = i(14978),
        p = i(6391),
        h = i(60063),
        x = i(72564),
        m = i(12246),
        g = i(78904),
        y = i(96999),
        v = i(10034),
        b = i(38912),
        C = i(3466),
        j = i(47056),
        f = i(91351),
        k = i(13270),
        _ = i(55029),
        S = i(87208),
        I = i(17514),
        D = i.n(I),
        w = i(13327),
        T = i(49037),
        P = i(16829);
      class A {
        static getInstance() {
          return A.instance || (A.instance = new A()), A.instance;
        }
        async getAddons(t) {
          let e = "".concat(T.fe, "/search/addons");
          return (
            await (
              await fetch(e, { body: JSON.stringify(t), method: "POST" })
            ).json()
          ).map(P.p);
        }
      }
      let E = A.getInstance();
      var R = i(11125),
        O = i(57819),
        V = i(66147);
      let L = (t) => {
        var e, i, n, a;
        let {
            data: { preferences: o },
          } = (0, V.d)(),
          { data: r } = (0, O.q)(),
          { cart: s } = (0, _.iQ)(),
          { user: d, accessToken: l } = (0, R.Z)(),
          c = {
            searchScoreOptions: { preferences: o, normalizeFactors: r },
            productTypes: [w.kv.SKINCARE, w.kv.HAIRCARE],
            productIdsInCart:
              null !==
                (n =
                  null == s
                    ? void 0
                    : null === (e = s.items) || void 0 === e
                      ? void 0
                      : e.map((t) => t.product.id)) && void 0 !== n
                ? n
                : [],
            productTypeCategoriesInCart: D()(
              null !==
                (a =
                  null == s
                    ? void 0
                    : null === (i = s.items) || void 0 === i
                      ? void 0
                      : i.flatMap((t) => {
                          var e;
                          return null !==
                            (e = t.product.masterVariant.productTypeKeys) &&
                            void 0 !== e
                            ? e
                            : [];
                        })) && void 0 !== a
                ? a
                : [],
            ),
            segmentId: null == d ? void 0 : d.segmentId,
            userId: null == d ? void 0 : d.id,
          },
          u = { ...t, enabled: (null == t ? void 0 : t.enabled) !== !1 && !!l };
        return (0, S.useQuery)({
          queryKey: ["useGetAddons", c],
          ...u,
          queryFn: () => E.getAddons({ query: c, accessToken: l }),
        });
      };
      var B = i(92966),
        N = i(57773),
        z = i(92832),
        Q = i(95714),
        M = i(82667),
        W = i(84245),
        G = i(81391);
      let H = (t) => {
        let { isOpen: e, onClose: i } = t,
          a = (0, b.useRouter)(),
          { cart: o } = (0, _.iQ)(),
          { sendAnalyticsEvent: l } = (0, f.z)(),
          [c, p] = u.useState([]),
          { data: h, isError: x, isSuccess: S, isStale: I } = L(),
          { data: D } = (0, B.Z)();
        (0, u.useEffect)(() => {
          (e && (null == c ? void 0 : c.length)) || p(h);
        }, [h, p, e, I]);
        let w = () => {
            var t;
            let e = {
              cart_id: "".concat(null == o ? void 0 : o.id),
              products: null == o ? void 0 : o.items.map(k.D),
              cart_size:
                null !== (t = null == o ? void 0 : o.totalQuantity) &&
                void 0 !== t
                  ? t
                  : 0,
              promotion_code: (null == o ? void 0 : o.discountCodes.length)
                ? null == o
                  ? void 0
                  : o.discountCodes.map((t) => {
                      let { code: e } = t;
                      return "".concat(e);
                    })
                : [],
              subtotal: o.pricing.subtotal,
            };
            return (
              l(C.iN.checkoutStarted.bind(C.iN), j.$.CHECKOUT_STARTED, e),
              a.push("/checkout")
            );
          },
          T = x || (S && !(null == h ? void 0 : h.length)),
          P = (0, N.l)();
        return (
          (0, u.useLayoutEffect)(() => {
            e && T && w();
          }),
          (0, n.jsxs)(m.u_, {
            scrollBehavior: "inside",
            isOpen: e && !T,
            onClose: i,
            isCentered: !0,
            children: [
              (0, n.jsx)(g.Z, {}),
              (0, n.jsxs)(y.h, {
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
                  (0, n.jsxs)(d.k, {
                    gap: 4,
                    padding: { base: 3, md: 4 },
                    paddingBottom: 0,
                    flexDirection: "column",
                    height: "100%",
                    maxHeight: "100%",
                    width: "100%",
                    minHeight: 0,
                    children: [
                      (0, n.jsxs)(d.k, {
                        justifyContent: "flex-start",
                        gap: 4,
                        width: "100%",
                        children: [
                          (0, n.jsx)(r.xu, {
                            as: "button",
                            "aria-label": "Back to Bag",
                            onClick: i,
                            children: (0, n.jsx)(z.ArrowLeftIcon, {
                              width: 6,
                              height: 6,
                            }),
                          }),
                          (0, n.jsx)(s.x, {
                            textStyle: "body.semibold",
                            children: "Any final add-ons?",
                          }),
                        ],
                      }),
                      !!(null == c ? void 0 : c.length) &&
                        (0, n.jsx)(v.M, {
                          columns: [1, null, 2],
                          gap: 4,
                          width: "100%",
                          overflowY: "auto",
                          paddingBottom: 4,
                          children: c.map((t, e) =>
                            (0, n.jsx)(
                              r.xu,
                              {
                                borderTopWidth: {
                                  base: e > 0 ? "1px" : "0",
                                  md: e >= 2 ? "1px" : "0",
                                },
                                borderColor: "primary.warmGrey.80",
                                pt: { base: e > 0 ? 4 : 0, md: e >= 2 ? 4 : 0 },
                                children: (0, n.jsx)(M.I, {
                                  orientation: M.V.HORIZONTAL,
                                  item: t,
                                  index: e,
                                  config: { fullWidth: P, canEditQuantity: !0 },
                                  analytics: {
                                    click_location: "Addons before checkout",
                                  },
                                }),
                              },
                              t.id,
                            ),
                          ),
                        }),
                    ],
                  }),
                  !(null == c ? void 0 : c.length) &&
                    (0, n.jsx)(r.xu, {
                      paddingY: 15,
                      children: (0, n.jsx)(G.$, {}),
                    }),
                  (0, n.jsx)(r.xu, {
                    width: "100%",
                    children: (0, n.jsx)(W.p, {
                      discounts: D,
                      cartPricing: null == o ? void 0 : o.pricing,
                      cartAppliedDiscounts:
                        null == o ? void 0 : o.pricing.cartDiscounts.discounts,
                      backgroundColor: "none",
                      children: (0, n.jsx)(Q.z, {
                        fullWidth: !0,
                        variant: "primary",
                        onClick: () => w(),
                        height: 18,
                        rightIcon: (0, n.jsx)(z.CreditCardIcon, {
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
      var U = i(83219),
        F = i(59274),
        q = i(69476),
        Z = i(7896),
        K = i(20619),
        $ = i(60714);
      let Y = (t) => {
        let { analytics: e } = t,
          [i, o] = (0, u.useState)(""),
          [s, d] = (0, u.useState)(),
          { isCartLoading: l, cart: c } = (0, _.iQ)(),
          {
            isSuccess: p,
            isPending: h,
            errorMessage: x,
            applyDiscount: m,
          } = (0, Z.I)({ analytics: e }),
          { removeDiscount: g } = (0, K.k)(),
          y = (0, a.useStyleConfig)("DiscountCodeCard");
        return (
          (0, u.useEffect)(() => {
            p &&
              !l &&
              (null == c ? void 0 : c.pricing.cartDiscounts.discounts) &&
              d(
                null == c
                  ? void 0
                  : c.pricing.cartDiscounts.discounts.find((t) => t.name === i),
              );
          }, [p, null == c ? void 0 : c.pricing.cartDiscounts.discounts, i, l]),
          (0, n.jsx)(r.xu, {
            __css: y,
            children: (0, n.jsx)($.I, {
              placeholder: "Add your gift or promo code",
              inputCode: i,
              isLoading: null != l ? l : h,
              error: x,
              onChange: (t) => {
                o(t);
              },
              applyPromoCode: m,
              appliedDiscount: s,
              onRemove: () => {
                if (c && (null == s ? void 0 : s.id)) {
                  let { id: t, version: e } = c;
                  g(
                    t,
                    e,
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
      var J = i(98330),
        X = i(262),
        tt = i(40420);
      let te = (t) => {
        let { totalSavingsValue: e } = t,
          i = (0, a.useStyleConfig)("TotalSaving");
        return (0, n.jsxs)(r.xu, {
          __css: i,
          children: [
            (0, n.jsx)(r.xu, {
              color: "semantic.orange.20",
              children: (0, n.jsx)(z.DiscountTagIcon, { height: 6, width: 6 }),
            }),
            (0, n.jsxs)(s.x, {
              textStyle: "body",
              children: [
                (0, n.jsx)(s.x, {
                  textStyle: "body.semibold",
                  as: "span",
                  children: e > 0 ? (0, tt._)(e) : "\xa30",
                }),
                " ",
                "total savings",
              ],
            }),
          ],
        });
      };
      var ti = i(33918);
      let tn = (t) => {
          let { mappedCart: e, isLoading: i = !1, analytics: m } = t,
            g = (0, a.useMultiStyleConfig)("ViewBasket"),
            y = (0, N.l)(),
            v = (0, _.iQ)(),
            [b, C] = u.useState(!1),
            { data: j } = (0, ti.S)(p.R_.BAG, null),
            { data: f } = (0, B.Z)(),
            k = null == e ? void 0 : e.pricing.shipping.discount;
          return (0, n.jsx)(r.xu, {
            __css: g.root,
            children: (0, n.jsx)(c.r, {
              templateColumns: "repeat(12, 1fr)",
              gap: 8,
              "aria-label": "Basket items list",
              "data-testid": "Basket items list",
              children: (() => {
                var t, a, c;
                let u = (null == e ? void 0 : e.items.length) === 0,
                  p =
                    (null === (t = v.deletedItems) || void 0 === t
                      ? void 0
                      : t.length) === 0,
                  _ = u && p;
                if (i || (v.isCartUpdating && _))
                  return (0, n.jsx)(o.P, {
                    colSpan: { base: 12 },
                    textAlign: "center",
                    children: (0, n.jsx)(G.$, {
                      color: "bdna.bdna.100",
                      size: "lg",
                      "aria-label": "Loading Spinner",
                      "data-testid": "Loading Spinner",
                    }),
                  });
                if (!e || _)
                  return (0, n.jsx)(o.P, {
                    colSpan: { base: 12 },
                    children: (0, n.jsxs)(r.xu, {
                      __css: g.emptyContainer,
                      "aria-label": "Empty bag",
                      "data-testid": "Empty Bag",
                      children: [
                        (0, n.jsx)(s.x, {
                          textStyle: "heading.h5.bold",
                          children: "Your bag is empty",
                        }),
                        (0, n.jsx)(s.x, {
                          textStyle: "body",
                          children: "Good decisions take time",
                        }),
                        (0, n.jsx)(F.ButtonLink, {
                          size: "lg",
                          variant: "primary",
                          rightIcon: (0, n.jsx)(z.PasswordShowIcon, {
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
                let S =
                  null == e
                    ? void 0
                    : e.items.some((t) => !t.product.atLeastOneInStock);
                return (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(o.P, {
                      colSpan: { base: 12, lg: 6, xl: 7 },
                      children: (0, n.jsxs)(d.k, {
                        __css: g.savingsBasketListContainer,
                        children: [
                          (null == e ? void 0 : e.pricing.totalDiscountValue) >
                            0 &&
                            (0, n.jsx)(r.xu, {
                              "aria-label": "Total savings section",
                              "data-testid": "Total savings section",
                              children: (0, n.jsx)(te, {
                                totalSavingsValue:
                                  (null == e
                                    ? void 0
                                    : e.pricing.totalDiscountValue) -
                                  (null != k ? k : 0),
                              }),
                            }),
                          (0, n.jsx)(d.k, {
                            __css: g.headerAndCardContainer,
                            children: (0, n.jsx)(r.xu, {
                              __css: g.basketListContainer,
                              children: (0, n.jsx)(U.t, {
                                basketItems: e.items,
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(o.P, {
                      colSpan: { base: 12, lg: 6, xl: 4 },
                      colStart: { xl: 9 },
                      children: (0, n.jsxs)(l.g, {
                        padding: { base: 4 },
                        gap: 8,
                        alignItems: "stretch",
                        children: [
                          !!j &&
                            (0, n.jsx)(r.xu, {
                              order: { base: 2, lg: "inherit" },
                              children: (0, n.jsx)(X.s, {
                                temporaryStyle: "light",
                                permanentStyle: "transparentDark",
                                temporaryEntries: j.temporaryEntries,
                                permanentEntries: [],
                              }),
                            }),
                          (0, n.jsx)(h.U, {
                            variant: x.u.Secondary,
                            allowToggle: !0,
                            children: (0, n.jsx)(h.U.Item, {
                              title: "Promo code",
                              variant: x.u.Secondary,
                              children: (0, n.jsx)(Y, { analytics: m }),
                            }),
                          }),
                          (0, n.jsx)(d.k, {
                            __css: g.headerAndCardContainer,
                            order: { base: 3, lg: "inherit" },
                            children: (0, n.jsxs)(d.k, {
                              __css: g.costAndConfirmContainer,
                              gap: 4,
                              children: [
                                (0, n.jsx)(q.b, {
                                  cartQuantity: e.items.length,
                                  cartPricing: e.pricing,
                                  cartId: e.id,
                                  cartVersion: e.version,
                                  shippingIsEstimate: !0,
                                  "aria-label": "Cost breakdown",
                                  "data-testid": "Cost breakdown",
                                }),
                                !y &&
                                  (0, n.jsx)(W.p, {
                                    discounts: f,
                                    cartPricing:
                                      null === (a = v.cart) || void 0 === a
                                        ? void 0
                                        : a.pricing,
                                    cartAppliedDiscounts:
                                      null === (c = v.cart) || void 0 === c
                                        ? void 0
                                        : c.pricing.cartDiscounts.discounts,
                                    variant: "checkout",
                                    hasItemsShortOfStock: S,
                                    children: (0, n.jsx)(Q.z, {
                                      isDisabled: S,
                                      fullWidth: !0,
                                      variant: "primary",
                                      onClick: () => C(!0),
                                      height: 18,
                                      rightIcon: (0, n.jsx)(z.CreditCardIcon, {
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
                    (0, n.jsx)(H, { isOpen: b, onClose: () => C(!1) }),
                    y &&
                      (0, n.jsx)(J.e, {
                        children: (0, n.jsx)(d.k, {
                          flexDirection: "column",
                          w: "100%",
                          gap: 4,
                          children: (0, n.jsx)(Q.z, {
                            isDisabled: S,
                            fullWidth: !0,
                            variant: "primary",
                            onClick: () => C(!0),
                            rightIcon: (0, n.jsx)(z.CreditCardIcon, {
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
        { definePartsStyle: ta, defineMultiStyleConfig: to } = (0, i(63299).D)([
          "root",
          "container",
          "cardColumn",
          "emptyContainer",
          "basketListContainer",
          "headerAndCardContainer",
          "costAndConfirmContainer",
          "savingsBasketListContainer",
        ]),
        tr = to({
          baseStyle: ta({
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
    7896: function (t, e, i) {
      i.d(e, {
        I: function () {
          return h;
        },
      });
      var n = i(14978),
        a = i(3466),
        o = i(47056),
        r = i(91351),
        s = i(55029),
        d = i(20619),
        l = i(26455);
      let c = "This code is invalid, try again",
        u = "Whoops, looks like you have already used this code",
        p = (t) => {
          switch (t) {
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
        h = (t) => {
          let { analytics: e } = t,
            { cart: i } = (0, s.iQ)(),
            { removeDiscount: h } = (0, d.k)(),
            [x, m] = (0, n.useState)(""),
            [g, y] = (0, n.useState)(""),
            [v, b] = (0, n.useState)(""),
            { sendAnalyticsEvent: C } = (0, r.z)(),
            {
              mutate: j,
              isPending: f,
              isSuccess: k,
            } = (0, l.r)({
              onSuccess: (t) => {
                let i = t.discountCodes.find((t) => t.code === x);
                if (i && "MatchesCart" === i.state) {
                  let t = {
                    click_action_category: "valid",
                    click_name: x,
                    page_category: e.page_category,
                  };
                  C(a.iN.promoCode.bind(a.iN), o.$.PROMO_CODE, t),
                    y("".concat(x, " applied to order"));
                } else {
                  let n = {
                    click_action_category: "error",
                    click_name: x,
                    page_category: e.page_category,
                  };
                  C(a.iN.promoCode.bind(a.iN), o.$.PROMO_CODE, n),
                    i
                      ? (h(t.id, t.version, i.id, i.code), b(p(i.state)))
                      : b("Error while adding discount code");
                }
              },
              onError: () => {
                let t = {
                  click_action_category: "error",
                  click_name: x,
                  page_category: e.page_category,
                };
                C(a.iN.promoCode.bind(a.iN), o.$.PROMO_CODE, t), b(c);
              },
            });
          return {
            isSuccess: k,
            isPending: f,
            message: g,
            errorMessage: v,
            applyDiscount: (t) => {
              var e;
              m(t),
                y(""),
                b(""),
                (
                  null == i
                    ? void 0
                    : null === (e = i.discountCodes) || void 0 === e
                      ? void 0
                      : e.find((e) => e.code === t)
                )
                  ? b(u)
                  : j({
                      cartId: "".concat(null == i ? void 0 : i.id),
                      version: null == i ? void 0 : i.version,
                      actions: [
                        { action: "addDiscountCode", code: t },
                        { action: "recalculate", updateProductData: !0 },
                      ],
                    });
            },
            code: x,
          };
        };
    },
  },
]);
