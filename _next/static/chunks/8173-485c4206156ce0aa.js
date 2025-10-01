(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8173],
  {
    935: () => {},
    13619: (e, t, n) => {
      "use strict";
      n.d(t, { s: () => r });
      var i = n(56138);
      class r extends i.v {
        addExpansions(e, t) {
          let {
            includeCart: n,
            includePayment: i,
            includeDiscounts: r,
            includeProductType: o,
          } = t;
          n && e.push("expand=cart"),
            i &&
              e.push(
                "expand=".concat(encodeURIComponent("paymentInfo.payments[*]")),
              ),
            r &&
              (e.push(
                "expand=".concat(
                  encodeURIComponent("discountCodes[*].discountCode"),
                ),
              ),
              e.push(
                "expand=".concat(
                  encodeURIComponent(
                    "lineItems[*].discountedPrice.includedDiscounts[*].discount",
                  ),
                ),
              ),
              e.push(
                "expand=".concat(
                  encodeURIComponent(
                    "lineItems[*].discountedPricePerQuantity.includedDiscounts[*].discount",
                  ),
                ),
              ),
              e.push(
                "expand=".concat(
                  encodeURIComponent(
                    "discountOnTotalPrice.includedDiscounts[*].discount",
                  ),
                ),
              )),
            o && e.push("expand=lineItems[*].productType");
        }
        buildUrl(e, t) {
          let n = e;
          return t.length && (n += "?".concat(t.join("&"))), n;
        }
        async get(e, t, n) {
          let i = async () => (await this.apiClient.get(e, t)).data;
          try {
            return await i();
          } catch (e) {
            n ? n(e) : await this.handleError(e, i);
          }
        }
      }
    },
    17342: () => {},
    19573: () => {},
    20205: () => {},
    22980: () => {},
    24689: (e, t, n) => {
      "use strict";
      n.d(t, {
        JB: () => i,
        yj: () => d,
        T9: () => o,
        X1: () => y,
        dV: () => r,
        kx: () => f,
        L3: () => u,
        R7: () => m,
        om: () => v,
        lN: () => c,
        Np: () => a,
        ch: () => p,
        SE: () => s,
        vw: () => l,
      });
      var i = (function (e) {
          return (e.INVALID_LINK = "INVALID_LINK"), e;
        })({}),
        r = (function (e) {
          return (
            (e.LineItem = "lineItem"),
            (e.Shipping = "shipping"),
            (e.Cart = "cart"),
            e
          );
        })({}),
        o = (function (e) {
          return (
            (e.CONCERN_1 = "concern1"),
            (e.CONCERN_2 = "concern2"),
            (e.CONCERN_3 = "concern3"),
            e
          );
        })({}),
        a = (function (e) {
          return (
            (e.SKIN_SENSITIVITY = "skinSensitivity"),
            (e.BUDGET = "budget"),
            (e.SKIN_TYPE = "skinType"),
            (e.AGE_BRACKET = "ageBracket"),
            (e.SCENT = "scent"),
            (e.GENDER = "gender"),
            (e.SKIN_FEEL = "skinFeel"),
            (e.PRODUCT_PREFERENCES = "productPreferences"),
            (e.HAIR_TEXTURE = "hairTexture"),
            (e.SCALP_TYPE = "scalpType"),
            (e.SCALP_SENSITIVITY = "scalpSensitivity"),
            (e.LENGTHS_FEEL = "lengthsFeel"),
            e
          );
        })({}),
        s = (function (e) {
          return (
            (e.NORMAL = "Normal"),
            (e.COMBINATION = "Combination"),
            (e.OILY = "Oily"),
            (e.DRY = "Dry"),
            e
          );
        })({}),
        c = (function (e) {
          return (e["en-GB"] = "en-GB"), (e.fr = "fr"), e;
        })({}),
        d = (function (e) {
          return (
            (e.AM = "AM"),
            (e.PM = "PM"),
            (e.AM_PM = "AM_PM"),
            (e.NONE = "NONE"),
            e
          );
        })({}),
        u = (function (e) {
          return (
            (e.LEAVE_IN = "LEAVE_IN"),
            (e.RINSE_OUT = "RINSE_OUT"),
            (e.NONE = "NONE"),
            e
          );
        })({}),
        l = (function (e) {
          return (e.Trending = "Trending"), e;
        })({}),
        p = (function (e) {
          return (
            (e.SKINCARE = "skincare"),
            (e.HAIRCARE = "haircare"),
            (e.SOFT_BUNDLE = "soft-bundle"),
            (e.ROUTINE = "routine"),
            e
          );
        })({}),
        m = (function (e) {
          return (
            (e.SKIN_TYPE = "skinType"),
            (e.SKIN_SENSITIVITY = "skinSensitivity"),
            (e.SKIN_FEEL = "skinFeel"),
            (e.SCENT = "scent"),
            (e.SKIN_CONCERN = "skinConcern"),
            e
          );
        })({}),
        v = (function (e) {
          return (
            (e.EFFECTS = "effect"),
            (e.COUPON_CODE = "couponCode"),
            (e.APPLIED_DISCOUNTS = "appliedDiscounts"),
            e
          );
        })({}),
        y = (function (e) {
          return (e.EFFECTS = "effect"), (e.COUPON_CODE = "couponCode"), e;
        })({}),
        f = (function (e) {
          return (
            (e.setDiscount = "setDiscount"),
            (e.setDiscountPerItem = "setDiscountPerItem"),
            (e.acceptCoupon = "acceptCoupon"),
            (e.showNotification = "showNotification"),
            (e.rejectCoupon = "rejectCoupon"),
            (e.addFreeItem = "addFreeItem"),
            (e.setDiscountPerAdditionalCost = "setDiscountPerAdditionalCost"),
            e
          );
        })({});
    },
    25623: () => {},
    28513: () => {},
    28724: (e, t, n) => {
      "use strict";
      n.d(t, { P: () => i, i: () => r });
      var i = (function (e) {
          return (
            (e.Add = "ADD_ALERT"),
            (e.Delete = "DELETE_ALERT"),
            (e.DeleteAll = "DELETE_ALL_ALERTS"),
            e
          );
        })({}),
        r = (function (e) {
          return (
            (e.Success = "Success"),
            (e.Warning = "Warning"),
            (e.Error = "Error"),
            (e.Info = "Info"),
            e
          );
        })({});
    },
    33198: (e, t, n) => {
      "use strict";
      n.d(t, { y: () => i });
      var i = (function (e) {
        return (e.PDP_MAIN = "PDP_MAIN"), (e.PRODUCT_CARD = "PRODUCT_CARD"), e;
      })({});
    },
    43101: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => i });
      let i = () => {
        let e = new Uint32Array(1);
        return crypto.getRandomValues(e), e[0] / 0x100000000;
      };
    },
    55133: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          contentfulLoader: () => a,
          default: () => c,
          getSizedImage: () => r,
          toContentfulImageUrl: () => s,
        });
      var i = n(33198);
      let r = (e, t) => {
          try {
            let n = o[t],
              i = new URL(e);
            if (n)
              return (
                n.width && i.searchParams.append("w", "".concat(n.width)),
                n.height && i.searchParams.append("h", "".concat(n.height)),
                i.href
              );
          } catch (e) {}
          return e;
        },
        o = {
          [i.y.PDP_MAIN]: { width: 800, height: 800 },
          [i.y.PRODUCT_CARD]: { width: 500, height: 500 },
        },
        a = (e, t) => {
          let n = { fm: "webp", q: 75, ...t };
          e.width && (n.w = e.width), e.quality && (n.q = e.quality);
          let i = new URLSearchParams(n).toString();
          return "".concat(e.src, "?").concat(i);
        },
        s = (e, t) => {
          let n = new URLSearchParams(t).toString();
          return "".concat(e, "?").concat(n);
        },
        c = a;
    },
    56138: (e, t, n) => {
      "use strict";
      n.d(t, { v: () => a });
      var i = n(84497),
        r = n(87567);
      class o {
        static getInstance() {
          return (
            o.instance ||
              (o.instance = (0, r.V)("".concat("https://api.noli.com"))),
            o.instance
          );
        }
        constructor() {}
      }
      class a extends i.N {
        constructor() {
          super(), (this.apiClient = o.getInstance());
        }
      }
    },
    57085: () => {},
    66349: (e, t, n) => {
      "use strict";
      n.d(t, {
        v0: () => S,
        pK: () => N,
        nQ: () => I,
        XJ: () => er,
        YH: () => et,
        k8: () => ed,
      });
      var i,
        r,
        o = n(24689),
        a = n(69538);
      let s = o.lN["en-GB"],
        c = { centAmount: 399 };
      a.env.NO_IMAGE_SRC;
      let d =
        null !== (r = a.env.CTP_SUPPLY_CHANNEL_ID) && void 0 !== r
          ? r
          : "4c3ecac7-87be-4708-b09b-f80dafce8aa3";
      class u extends Error {}
      var l = (function (e) {
        return (e.ADD = "add"), (e.SUBTRACT = "subtract"), e;
      })(l || {});
      let p = (e, t, n) => {
          let i;
          if (e.currencyCode !== t.currencyCode)
            throw new u("Cannot add two objects from different currencies");
          if (e.fractionDigits !== t.fractionDigits)
            throw new u("Fraction digits for two money objects do not match");
          i =
            "add" === n
              ? e.centAmount + t.centAmount
              : e.centAmount - t.centAmount;
          let { fractionDigits: r, currencyCode: o } = e;
          return {
            currencyCode: o,
            fractionDigits: r,
            centAmount: i,
            dollarAmount: es({ centAmount: i, fractionDigits: r }),
          };
        },
        m = (e, t) => p(e, t, "subtract"),
        v = (e, t) => ({
          ...e,
          centAmount: e.centAmount * t,
          dollarAmount: e.dollarAmount * t,
        }),
        y = (e, t) => {
          var n, i;
          return null === (i = e.discountCodes) || void 0 === i
            ? void 0
            : null ===
                  (n = i.find((e) => {
                    var n, i;
                    return null === (i = e.discountCode) || void 0 === i
                      ? void 0
                      : null === (n = i.obj) || void 0 === n
                        ? void 0
                        : n.cartDiscounts.find((e) => e.id === t);
                  })) || void 0 === n
              ? void 0
              : n.discountCode;
        },
        f = (e) =>
          e.lineItems.reduce(
            (e, t) =>
              t.price.discounted
                ? e +
                  ((t.price.value.centAmount -
                    t.price.discounted.value.centAmount) /
                    100) *
                    t.quantity
                : "ExternalTotal" === t.priceMode
                  ? e +
                    (t.price.value.centAmount * t.quantity -
                      t.totalPrice.centAmount) /
                      100
                  : e,
            0,
          ),
        h = (e) => {
          var t, n;
          return null !==
            (n =
              null === (t = e.discountOnTotalPrice) || void 0 === t
                ? void 0
                : t.includedDiscounts.map((t) => {
                    var n;
                    let i = y(e, t.discount.id);
                    return i &&
                      (null === (n = i.obj) || void 0 === n ? void 0 : n.code)
                      ? {
                          id: i.id,
                          key: i.obj.code,
                          name: i.obj.code,
                          value: t.discountedAmount.centAmount
                            ? t.discountedAmount.centAmount / 100
                            : 0,
                          removable: !0,
                        }
                      : B(t.discount, t.discountedAmount.centAmount / 100);
                  })) && void 0 !== n
            ? n
            : [];
        },
        g = (e) => {
          let t = {};
          return (
            e.lineItems.forEach((e) => {
              var n;
              (null === (n = e.discountedPrice) || void 0 === n
                ? void 0
                : n.includedDiscounts) &&
                e.discountedPrice.includedDiscounts.forEach((n) => {
                  let i = 0;
                  e.discountedPricePerQuantity.forEach((e) => {
                    e.discountedPrice.includedDiscounts.forEach((t) => {
                      t.discount.id === n.discount.id &&
                        (i +=
                          (n.discountedAmount.centAmount / 100) * e.quantity);
                    });
                  });
                  let r = B(n.discount, i);
                  t[r.id] ? (t[r.id].value += i) : (t[r.id] = r);
                });
            }),
            Object.values(t)
          );
        },
        A = (e) => {
          let t = e
              .filter((e) => {
                var t;
                return [
                  o.kx.setDiscount,
                  o.kx.setDiscountPerAdditionalCost,
                ].includes(
                  null === (t = e.custom) || void 0 === t
                    ? void 0
                    : t.fields[o.X1.EFFECTS],
                );
              })
              .map((e) => {
                var t, n, i;
                let r = e.id,
                  a = e.name["en-GB"] || "",
                  s =
                    -(
                      (null === (t = e.money) || void 0 === t
                        ? void 0
                        : t.centAmount) * 0.01
                    ) || 0,
                  c =
                    null === (n = e.custom) || void 0 === n
                      ? void 0
                      : n.fields[o.X1.COUPON_CODE];
                return {
                  id: r,
                  key: null != c ? c : r,
                  name: a,
                  value: s,
                  removable: !!c,
                  target:
                    (null === (i = e.custom) || void 0 === i
                      ? void 0
                      : i.fields[o.X1.EFFECTS]) === o.kx.setDiscount
                      ? o.dV.Cart
                      : o.dV.Shipping,
                };
              }),
            n = e
              .filter((e) => {
                var n;
                return (
                  (null === (n = e.custom) || void 0 === n
                    ? void 0
                    : n.fields[o.X1.EFFECTS]) === o.kx.acceptCoupon &&
                  !t.some((t) => {
                    var n;
                    return (
                      t.key ===
                      (null === (n = e.custom) || void 0 === n
                        ? void 0
                        : n.fields[o.X1.COUPON_CODE])
                    );
                  })
                );
              })
              .map((e) => {
                var t;
                return {
                  id: e.id,
                  key:
                    null === (t = e.custom) || void 0 === t
                      ? void 0
                      : t.fields[o.X1.COUPON_CODE],
                  name: e.name["en-GB"] || "",
                  value: 0,
                  removable: !0,
                };
              });
          return [
            ...t,
            ...n,
            ...e
              .filter((e) => {
                var t;
                return (
                  (null === (t = e.custom) || void 0 === t
                    ? void 0
                    : t.fields[o.X1.EFFECTS]) === o.kx.setDiscountPerItem
                );
              })
              .map((e) => {
                var t, n;
                return {
                  id: e.id,
                  key:
                    null === (t = e.custom) || void 0 === t
                      ? void 0
                      : t.fields[o.X1.COUPON_CODE],
                  name: e.name["en-GB"] || "",
                  value:
                    -(
                      (null === (n = e.money) || void 0 === n
                        ? void 0
                        : n.centAmount) * 0.01
                    ) || 0,
                  removable: !1,
                  target: o.dV.LineItem,
                };
              }),
          ];
        },
        E = (e) =>
          e.customLineItems && e.customLineItems.length > 0
            ? A(e.customLineItems)
            : [...h(e), ...g(e)],
        C = (e) => ({
          appliedDiscounts: E(e),
          productLevelDiscountsTotal: f(e),
        }),
        b = (e) => {
          var t, n, i, r;
          let a =
              void 0 !== e.price.discounted &&
              e.price.discounted.value.centAmount !== e.price.value.centAmount,
            s = a ? ea(e.price.discounted.value) : ea(e.price.value),
            c = ea(e.price.value),
            d = m(c, s).dollarAmount,
            u = a
              ? {
                  unitValue: d,
                  totalValue: d * e.quantity,
                  percentageRounded: (function (e, t) {
                    return null == e || 0 === t
                      ? 0
                      : Math.round(((t - e) / t) * 100);
                  })(s.centAmount, c.centAmount),
                }
              : null,
            l = void 0 !== e.discountedPrice,
            p =
              null !==
                (r =
                  null === (t = e.discountedPrice) || void 0 === t
                    ? void 0
                    : t.includedDiscounts.map((e) =>
                        B(e.discount, e.discountedAmount.centAmount / 100),
                      )) && void 0 !== r
                ? r
                : [],
            y = ea(e.totalPrice),
            f = v(c, e.quantity);
          return {
            unitPrice: s.dollarAmount,
            unitPriceBeforeDiscount: c.dollarAmount,
            lineItemPrice: y.dollarAmount,
            lineItemPriceBeforeDiscount: f.dollarAmount,
            isDiscounted: a || l,
            productLevelDiscount: u,
            lineItemDiscounts: p,
            ...(e.taxRate && {
              taxRate: {
                amount: e.taxRate.amount,
                includedInPrice: e.taxRate.includedInPrice,
              },
            }),
            effect:
              null === (n = e.custom) || void 0 === n
                ? void 0
                : n.fields[o.om.EFFECTS],
            appliedDiscounts:
              null === (i = e.custom) || void 0 === i
                ? void 0
                : i.fields[o.om.APPLIED_DISCOUNTS],
            priceMode: e.priceMode,
          };
        },
        D = (e) => {
          var t, n, i, r, a;
          let s =
              null === (t = e.shippingInfo) || void 0 === t ? void 0 : t.price,
            c = s ? ea(s) : void 0,
            d = ea(e.totalPrice),
            u = c ? m(d, c) : d,
            l = e.lineItems
              .map((e) => b(e))
              .reduce((e, t) => e + t.lineItemPriceBeforeDiscount, 0),
            { appliedDiscounts: p, productLevelDiscountsTotal: v } = C(e),
            y = p
              .filter((e) => e.target === o.dV.Shipping)
              .reduce((e, t) => e + t.value, 0),
            f =
              (null !== (r = null == c ? void 0 : c.dollarAmount) &&
              void 0 !== r
                ? r
                : 0) - y;
          return {
            currencyCode: d.currencyCode,
            subtotal: u.dollarAmount,
            subtotalCentAmount: u.centAmount,
            finalPrice: d.dollarAmount,
            finalPriceCentAmount: d.centAmount,
            shippingCost: null == c ? void 0 : c.dollarAmount,
            shipping: {
              amount: f,
              cost:
                null !== (a = null == c ? void 0 : c.dollarAmount) &&
                void 0 !== a
                  ? a
                  : 0,
              discount: y,
            },
            bagValue: l,
            cartDiscounts: { discounts: p },
            productDiscounts: { totalValue: v },
            totalDiscountValue: (100 * l - u.centAmount) / 100,
            taxCategory:
              null === (i = e.shippingInfo) || void 0 === i
                ? void 0
                : null === (n = i.taxCategory) || void 0 === n
                  ? void 0
                  : n.id,
          };
        },
        P = (e) => ({
          id: e.id,
          quantity: e.quantity,
          slug: e.slug,
          name: e.name["en-GB"],
          type: "discount",
        }),
        I = (e, t) => {
          var n, i, r, a;
          let c;
          let { locale: u, supplyChannelId: l } = {
              locale: s,
              supplyChannelId: d,
              ...t,
            },
            {
              id: p,
              version: m,
              lineItems: v,
              shippingInfo: y,
              shippingAddress: f,
              billingAddress: h,
              customerEmail: g,
              customerId: A,
              custom: E,
              customLineItems: C,
              anonymousId: b,
            } = e,
            I =
              null == y
                ? void 0
                : null === (n = y.shippingMethod) || void 0 === n
                  ? void 0
                  : n.id,
            N = v.reduce((e, t) => e + t.quantity, 0);
          try {
            let e =
                null == E
                  ? void 0
                  : null === (r = E.fields) || void 0 === r
                    ? void 0
                    : r.OrderCreationErrors,
              t = e ? JSON.parse(e) : [];
            c = t ? (Array.isArray(t) ? t : [t]) : [];
          } catch (e) {
            c = [];
          }
          let k = {
            id: p,
            version: m,
            customerEmail: g,
            customerId: A,
            anonymousId: b,
            items: v.map((e) => eo(e, { locale: u, supplyChannelId: l })),
            customItems: C.map((e) => P(e)),
            totalQuantity: N,
            shippingId: I,
            shippingAddress: f && S(f),
            billingAddress: h && S(h),
            orderCreationErrors: [],
            pricing: D(e),
            discountCodes: U(e.discountCodes),
          };
          return (
            (null == E
              ? void 0
              : null === (i = E.fields) || void 0 === i
                ? void 0
                : i.notifications) &&
              (k.notifications = JSON.parse(
                null == E
                  ? void 0
                  : null === (a = E.fields) || void 0 === a
                    ? void 0
                    : a.notifications,
              )),
            e.customLineItems &&
              C.forEach((e) => {
                var t, n, i;
                (null === (t = e.custom) || void 0 === t
                  ? void 0
                  : t.fields[o.X1.COUPON_CODE]) &&
                  (null === (n = e.custom) || void 0 === n
                    ? void 0
                    : n.fields[o.X1.EFFECTS]) === o.kx.acceptCoupon &&
                  k.discountCodes.push({
                    id: e.id,
                    code:
                      null === (i = e.custom) || void 0 === i
                        ? void 0
                        : i.fields[o.X1.COUPON_CODE],
                    state: "MatchesCart",
                  });
              }),
            { ...k, orderCreationErrors: c.map((e) => x(e, k)) }
          );
        },
        S = (e) => {
          let {
            id: t,
            country: n,
            firstName: i,
            lastName: r,
            city: o,
            region: a,
            postalCode: s,
            mobile: c,
            streetName: d,
            streetNumber: u,
            building: l,
            apartment: p,
            additionalAddressInfo: m,
          } = e;
          return {
            id: t,
            country: n,
            fullName: ""
              .concat(null != i ? i : "", " ")
              .concat(null != r ? r : ""),
            firstName: i,
            lastName: r,
            city: o,
            region: a,
            postalCode: s,
            phoneNumber: c,
            streetAddress: ""
              .concat(null != u ? u : "", " ")
              .concat(null != d ? d : "")
              .trim(),
            streetName: d,
            firstLineAddress: ""
              .concat(null != u ? u : "", " ")
              .concat(null != d ? d : "")
              .trim(),
            secondLineAddress: l,
            flatNumber: p,
            instructions: m,
          };
        },
        N = (e) => {
          let {
            id: t,
            firstName: n,
            lastName: i,
            fullName: r,
            country: o,
            firstLineAddress: a,
            secondLineAddress: s,
            streetAddress: c,
            flatNumber: d,
            city: u,
            postalCode: l,
            phoneNumber: p,
            region: m,
            instructions: v,
          } = e;
          return {
            id: t,
            country: o,
            firstName: null != r ? r : n,
            lastName: i,
            city: u,
            region: m,
            postalCode: l,
            mobile: p,
            building: s,
            streetName: null != a ? a : c,
            apartment: d,
            additionalAddressInfo: v,
          };
        },
        k = (e) => {
          let { code: t, message: n } = e;
          return {
            genericErrorMessage: !0,
            code: t,
            originalText: n,
            text: "There was an unknown issue in creating your order. Please try again, and contact customer services if the issues continue.",
          };
        },
        T = (e, t) =>
          e.reduce((e, n) => {
            let i = t.find((e) => e.id === n);
            if (i) {
              let t = ""
                .concat(i.product.masterVariant.brands, " ")
                .concat(i.product.name, " (")
                .concat(i.product.masterVariant.size, ")");
              e.push(t);
            }
            return e;
          }, []),
        w = (e, t) => {
          let { code: n, message: i, lineItems: r } = e,
            o = T(r, t.items).join(", ");
          return {
            code: n,
            originalText: i,
            text: "Some items are out of stock at the time of placing the order: ".concat(
              o,
              ".",
            ),
            genericErrorMessage: !1,
          };
        },
        _ = (e, t) => {
          let { code: n, message: i, lineItems: r, shipping: o } = e;
          if (o)
            return {
              code: n,
              originalText: i,
              text: "The price has changed for shipping. Refreshing the bag page should resolve this issue. If you are still having issues creating your order, please contact customer services.",
              genericErrorMessage: !1,
            };
          let a = T(r, t.items).join(", ");
          return {
            code: n,
            originalText: i,
            text: "The price or tax of some items changed at the time of placing the order: ".concat(
              a,
              ". Refreshing the bag page should resolve this issue. If you are still having issues creating your order, please contact customer services.",
            ),
            genericErrorMessage: !1,
          };
        },
        O = (e) => {
          let { code: t, message: n, discountCode: i } = e;
          return {
            code: t,
            originalText: n,
            text: "The promo code ".concat(
              i,
              " cannot be applied to the cart. Please remove it in the bag page and try again.",
            ),
            genericErrorMessage: !1,
          };
        },
        R = (e) => {
          let { code: t, message: n } = e;
          return {
            genericErrorMessage: !1,
            code: t,
            originalText: n,
            text: "This shipping method is not allowed! Please try choosing another one, and if the problem persists, contact customer services.",
          };
        },
        x = (e, t) => {
          switch (e.code) {
            case "OutOfStock":
              return w(e, t);
            case "PriceChanged":
              return _(e, t);
            case "DiscountCodeNonApplicable":
              return O(e);
            case "ShippingMethodDoesNotMatchCart":
              return R(e);
            default:
              return k(e);
          }
        },
        L = (e, t) => e[t] || "",
        M = (e) => {
          let t = "";
          return (
            e.description && (t = L(e.description, s)),
            "" === t && e.name && (t = L(e.name, s)),
            t
          );
        },
        B = (e, t) => {
          var n, i;
          return {
            id: e.id,
            key:
              null !==
                (i = null === (n = e.obj) || void 0 === n ? void 0 : n.key) &&
              void 0 !== i
                ? i
                : "",
            name: e.obj ? M(e.obj) : "",
            value: t,
            removable: !1,
          };
        },
        U = (e) => {
          var t;
          return null !==
            (t =
              null == e
                ? void 0
                : e
                    .map((e) => {
                      var t;
                      let { discountCode: n, state: i } = e;
                      return {
                        id: n.id,
                        code:
                          null == n
                            ? void 0
                            : null === (t = n.obj) || void 0 === t
                              ? void 0
                              : t.code,
                        state: i,
                      };
                    })
                    .filter((e) => !!e.code)) && void 0 !== t
            ? t
            : [];
        },
        j = function (e) {
          var t;
          let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
          return null == e
            ? void 0
            : null === (t = e.channels) || void 0 === t
              ? void 0
              : t[n];
        },
        V = (e, t) => {
          if (!e.length) return null;
          if (t) {
            var n;
            return null !== (n = e.find((e) => e.country === t)) && void 0 !== n
              ? n
              : e[0];
          }
          return e[0];
        },
        G = (e) =>
          (null == e ? void 0 : e.centAmount) &&
          (null == e ? void 0 : e.fractionDigits)
            ? es(e)
            : 0,
        K = (e) => {
          let { url: t, dimensions: n, label: i } = e;
          return { url: t, label: i, height: n.h, width: n.w };
        },
        F = (e) =>
          e
            .toLowerCase()
            .replace(/([-_][a-z])/g, (e) =>
              e.toUpperCase().replace("-", "").replace("_", ""),
            ),
        H = { cleanse: 1, prepare: 2, treat: 3, moisturise: 4, protect: 5 },
        q = { day: o.yj.AM, dayandnight: o.yj.AM_PM, night: o.yj.PM },
        z = { leavein: o.L3.LEAVE_IN, rinseoff: o.L3.RINSE_OUT },
        X = {
          routinesteps: (e) => {
            let t = e;
            "object" == typeof t && t.key && (t = t.key);
            let { key: n } = e;
            return { step: H["".concat(t)] || -1, key: n };
          },
          skincaremoments: (e) => {
            let t = e;
            return (
              Array.isArray(t) &&
                (t = "object" == typeof t[0] ? t[0].key : t[0]),
              q["".concat(t)] || o.yj.NONE
            );
          },
          haircaremoments: (e) => {
            let t = e;
            return (
              Array.isArray(t) &&
                (t = "object" == typeof t[0] ? t[0].key : t[0]),
              z["".concat(t)] || o.L3.NONE
            );
          },
          activeingredientswithbenefits: (e, t) =>
            Array.isArray(e)
              ? e.map((e) =>
                  Array.isArray(e)
                    ? e.reduce((e, n) => {
                        let i = n.name;
                        return (
                          (e[i] = J(n.value, t)),
                          n.value.key &&
                            (e["".concat(i, "_key")] = n.value.key),
                          e
                        );
                      }, {})
                    : e,
                )
              : [],
          pairWith: (e) => ({
            id: null == e ? void 0 : e.id,
            typeId: null == e ? void 0 : e.typeId,
          }),
          Products: (e, t, n) =>
            e.map((e) => !!e.obj && n(e.obj)).filter((e) => !!e),
        },
        J = (e, t) => {
          if (e.label) {
            let n = e.label;
            return "object" == typeof n ? L(n, t) : n;
          }
          return L(e, t);
        },
        W = (e, t) =>
          Object.values(e).reduce((e, n) => {
            let { key: i, label: r } = n,
              o = "string" == typeof r ? r : L(r, t);
            return (e[i] = o), e;
          }, {}),
        Q = (e, t) => {
          let { key: n, label: i } = e;
          return { [n]: "string" == typeof i ? i : L(i, t) };
        },
        Y = ["scalptype", "hairtexture", "lengthsfeel"],
        Z = ["scalpsensitivity"],
        $ = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : s,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : () => {};
          return X[e]
            ? X[e](t, n, i)
            : Y.includes(e)
              ? W(t, n)
              : Z.includes(e)
                ? Q(t, n)
                : Array.isArray(t)
                  ? t.map((t) => $(e, t, n))
                  : t && "object" == typeof t
                    ? J(t, n)
                    : t;
        },
        ee = (e) =>
          ["productsizevolume", "productsizeweight", "productsizepcs"].includes(
            e,
          )
            ? "size"
            : F(e),
        et = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : s,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : () => {};
          return e.reduce((e, i) => {
            var r;
            let { name: o, value: a } = i,
              s = ee(o),
              c = null === a ? null : $(o, a, t, n);
            if (
              ((null !== (r = e[s]) && void 0 !== r) || (e[s] = c),
              "allactiveingredients" === s && Array.isArray(a))
            )
              try {
                e.allactiveingredientkeys = a.map((e) => e.key);
              } catch (e) {
                console.warn("could not map active ingredient keys", e);
              }
            if (["concerns", "hairconcerns"].includes(s) && Array.isArray(a))
              try {
                e.concernkeys = a.map((e) => e.key);
              } catch (e) {
                console.warn("could not map concern keys", e);
              }
            if ("skinsensitivities" === s)
              try {
                a.key && (e.skinsensitivitykeys = a.key);
              } catch (e) {
                console.warn("could not map skinSensitivity keys", e);
              }
            if ("skintypes" === s && Array.isArray(a))
              try {
                e.skintypekeys = a.map((e) => e.key);
              } catch (e) {
                console.warn("could not map skinType keys", e);
              }
            return e;
          }, {});
        },
        en = (e) => {
          var t;
          return e
            ? {
                isOnStock: !!e.isOnStock,
                availableQuantity:
                  null !== (t = e.availableQuantity) && void 0 !== t ? t : 0,
              }
            : { isOnStock: !1, availableQuantity: 0 };
        },
        ei = (e) => {
          var t;
          return {
            id: e.id,
            name: e.masterData.current.name[s],
            masterVariant: er(e.masterData.current.masterVariant),
            variants: [],
            productType:
              null === (t = e.productType.obj) || void 0 === t ? void 0 : t.key,
          };
        },
        er = function (e) {
          var t, n, i, r, o;
          let a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "N/A",
            c = arguments.length > 2 ? arguments[2] : void 0,
            u =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : ei,
            { locale: l, supplyChannelId: p } = {
              locale: s,
              supplyChannelId: d,
              ...c,
            },
            m = V(null !== (i = e.prices) && void 0 !== i ? i : []),
            v = m ? G(m.value) : void 0,
            y =
              null !==
                (r =
                  null === (t = e.attributes) || void 0 === t
                    ? void 0
                    : t
                        .filter((e) => "producttypes" === e.name)
                        .flatMap((e) =>
                          (null == e ? void 0 : e.value).map((e) => e.key),
                        )) && void 0 !== r
                ? r
                : [];
          return {
            productId: a,
            id: e.id,
            sku: e.sku,
            price: (null == m ? void 0 : m.discounted)
              ? G(m.discounted.value)
              : v,
            strikePrice: (null == m ? void 0 : m.discounted) ? v : void 0,
            images:
              null !==
                (o =
                  null == e
                    ? void 0
                    : null === (n = e.images) || void 0 === n
                      ? void 0
                      : n.map((e) => K(e))) && void 0 !== o
                ? o
                : [],
            ...(e.attributes && et(e.attributes, l, u)),
            availability: en(j(e.availability, p)),
            productTypeKeys: y,
          };
        },
        eo = (e, t) => {
          var n, i, r, o, a, c, u, l, p;
          let { locale: m, supplyChannelId: v } = {
              locale: s,
              supplyChannelId: d,
              ...t,
            },
            {
              id: y,
              productId: f,
              variant: h,
              name: g,
              quantity: A,
              custom: E,
              productType: C,
              productSlug: D,
            } = e,
            P = er(h, f, { locale: m, supplyChannelId: v });
          return {
            id: y,
            product: {
              id: f,
              name: g[m],
              productType:
                null === (n = C.obj) || void 0 === n ? void 0 : n.key,
              masterVariant: P,
              categories:
                null !==
                  (p =
                    null == E
                      ? void 0
                      : null === (i = E.fields.categories) || void 0 === i
                        ? void 0
                        : i.split(",")) && void 0 !== p
                  ? p
                  : [],
              variants: [],
              matchScores: {
                overallScore: (
                  null == E
                    ? void 0
                    : null === (r = E.fields) || void 0 === r
                      ? void 0
                      : r.match_score
                )
                  ? parseInt(E.fields.match_score, 10)
                  : void 0,
              },
              slug: null == D ? void 0 : D[m],
              atLeastOneInStock: [P].some((e) => {
                var t;
                return !!(null === (t = e.availability) || void 0 === t
                  ? void 0
                  : t.isOnStock);
              }),
            },
            quantity: A,
            pricing: b(e),
            ...((
              null === (o = e.custom) || void 0 === o ? void 0 : o.fields.plan
            )
              ? {
                  routine: {
                    focusAreaKey:
                      null === (a = e.custom) || void 0 === a
                        ? void 0
                        : a.fields.plan,
                    id:
                      null === (c = e.custom) || void 0 === c
                        ? void 0
                        : c.fields.planId,
                  },
                }
              : {}),
            ...((
              null === (u = e.custom) || void 0 === u
                ? void 0
                : u.fields.parentId
            )
              ? {
                  parentId:
                    null === (l = e.custom) || void 0 === l
                      ? void 0
                      : l.fields.parentId,
                }
              : {}),
          };
        },
        ea = (e) => {
          let { centAmount: t, fractionDigits: n, currencyCode: i } = e;
          return {
            centAmount: t,
            fractionDigits: n,
            currencyCode: i,
            dollarAmount: es({ centAmount: t, fractionDigits: n }),
          };
        },
        es = (e) => {
          let { centAmount: t, fractionDigits: n } = e;
          return t / Math.pow(10, n);
        },
        ec = (e) => {
          for (let t of e) {
            let e = t.shippingRates.find((e) => e.isMatching);
            if (e) return e;
          }
          return null;
        },
        ed = (e) => {
          var t;
          let n = ec(e.zoneRates),
            i =
              null == n
                ? void 0
                : null === (t = n.freeAbove) || void 0 === t
                  ? void 0
                  : t.centAmount;
          return {
            id: e.id,
            name: e.localizedName ? L(e.localizedName, s) : e.name,
            description: e.localizedDescription
              ? L(e.localizedDescription, s)
              : void 0,
            price:
              (null == n ? void 0 : n.price) &&
              ea(null == n ? void 0 : n.price),
            isDefault: e.isDefault,
            isFree: (e) => "number" == typeof i && i <= e,
          };
        },
        eu = {
          typeId: "cart-discount",
          id: "bad48b19-625d-4f27-83b6-9119bc7d6283",
          obj: {
            id: "bad48b19-625d-4f27-83b6-9119bc7d6283",
            version: 10,
            createdAt: "2024-01-07T07:01:31.997Z",
            lastModifiedAt: "2024-01-17T13:10:00.697Z",
            value: {
              type: "absolute",
              money: [
                {
                  type: "centPrecision",
                  currencyCode: "EUR",
                  centAmount: 1500,
                  fractionDigits: 2,
                },
                {
                  type: "centPrecision",
                  currencyCode: "USD",
                  centAmount: 1500,
                  fractionDigits: 2,
                },
                {
                  type: "centPrecision",
                  currencyCode: "AUD",
                  centAmount: 1500,
                  fractionDigits: 2,
                },
                {
                  type: "centPrecision",
                  currencyCode: "GBP",
                  centAmount: 1500,
                  fractionDigits: 2,
                },
              ],
            },
            cartPredicate: "1 = 1",
            target: { type: "totalPrice" },
            name: {
              "en-US": "",
              "de-DE": "Refer Friend",
              es: "",
              "en-GB": "Refer Friend",
            },
            description: { "en-US": "", "de-DE": "", es: "", "en-GB": "" },
            stackingMode: "Stacking",
            isActive: !0,
            requiresDiscountCode: !0,
            sortOrder: "0.9384",
            references: [],
            stores: [],
          },
        },
        el = {
          id: "7297c742-d8b0-484b-aadc-1d0ba1869dc9",
          productId: "c5c75935-595a-4cc3-a80e-24e9a9c55094",
          name: { [o.lN["en-GB"]]: "MyProduct", [o.lN.fr]: "LeProduct" },
          productType: {
            typeId: "product-type",
            id: "a5c7e173-9754-4f02-9b18-a600896ae0e1",
            obj: { key: "skincare" },
          },
          productSlug: {
            de: "neues-produkt-slug-1234678",
            en: "new-product-slug-12345678",
          },
          custom: {
            type: {
              typeId: "type",
              id: "d2f20b42-3951-4001-a53f-32f5908e9b79",
            },
            fields: { match_score: "10", plan: "drynessdehydration" },
          },
          variant: {
            availability: {
              isOnStock: !0,
              channels: {
                "4c3ecac7-87be-4708-b09b-f80dafce8aa3": {
                  isOnStock: !0,
                  availableQuantity: 5,
                  version: 1,
                  id: "01f1cc60-fea6-4fd0-8a13-92961bd8ca37",
                },
              },
            },
            id: 1,
            sku: "some-sku-123",
            prices: [
              {
                value: {
                  type: "centPrecision",
                  fractionDigits: 2,
                  currencyCode: "GBP",
                  centAmount: 1e3,
                },
                id: "6d36dc85-6131-495d-9f20-d00f411d4124",
              },
            ],
            images: [
              {
                url: "https://www.cnet.com/a/img/resize/995d4d237a8244ec255b27a6a35476c6c6622fcd/hub/2019/09/25/8be7b304-eba7-4094-a9c9-243422e2ddc3/doge-meme.jpg?auto=webp&fit=crop&height=675&width=1200",
                dimensions: { w: 1200, h: 800 },
                label: "wow",
              },
            ],
            attributes: [
              { name: "brands", value: { key: "garnier", label: "Garnier" } },
              {
                name: "producttypes",
                value: [{ key: "daycream", label: "Day Cream" }],
              },
              {
                name: "skincaremoments",
                value: [{ key: "dayandnight", label: "Day&Night" }],
              },
              { name: "dimcode", value: "PB630405" },
              { name: "size", value: "50ml" },
            ],
            assets: [],
          },
          price: {
            id: "6d36dc85-6131-495d-9f20-d00f411d4124",
            value: {
              type: "centPrecision",
              fractionDigits: 2,
              currencyCode: "GBP",
              centAmount: 1e3,
            },
          },
          quantity: 1,
          discountedPricePerQuantity: [],
          taxRate: {
            name: "Bla",
            amount: 0.1,
            includedInPrice: !1,
            country: "DE",
            subRates: [],
          },
          state: [
            {
              quantity: 1,
              state: {
                typeId: "state",
                id: "7c2e2694-aefe-43d7-888e-6a99514caaca",
              },
            },
          ],
          priceMode: "Platform",
          lineItemMode: "Standard",
          totalPrice: {
            type: "centPrecision",
            fractionDigits: 2,
            currencyCode: "GBP",
            centAmount: 1e3,
          },
          taxedPrice: {
            totalNet: {
              type: "centPrecision",
              fractionDigits: 2,
              currencyCode: "GBP",
              centAmount: 1e3,
            },
            totalGross: {
              type: "centPrecision",
              fractionDigits: 2,
              currencyCode: "GBP",
              centAmount: 1100,
            },
            taxPortions: [],
          },
          perMethodTaxRate: [],
          taxedPricePortions: [],
        },
        ep = {
          id: "27b39077-aa57-48a5-b504-914f68fa44dc",
          version: 1,
          createdAt: "2023-01-23T13:06:28.569Z",
          lastModifiedAt: "2023-01-23T13:06:28.569Z",
          lastModifiedBy: {},
          createdBy: {},
          lineItems: [el],
          cartState: "Active",
          customerId: "012345",
          totalPrice: {
            type: "centPrecision",
            currencyCode: "GBP",
            centAmount: 1e3,
            fractionDigits: 2,
          },
          shippingMode: "Single",
          shipping: [
            {
              shippingKey: "",
              shippingInfo: {
                shippingMethodName: "Standard",
                price: {
                  type: "centPrecision",
                  currencyCode: "GBP",
                  centAmount: c.centAmount,
                  fractionDigits: 2,
                },
                shippingRate: {
                  price: {
                    type: "centPrecision",
                    currencyCode: "GBP",
                    centAmount: c.centAmount,
                    fractionDigits: 2,
                  },
                  tiers: [],
                },
                shippingMethodState: "MatchesCart",
              },
              shippingAddress: { country: "UK" },
            },
          ],
          customLineItems: [],
          discountCodes: [],
          directDiscounts: [],
          inventoryMode: "None",
          taxMode: "Platform",
          taxRoundingMode: "HalfEven",
          taxCalculationMode: "LineItemLevel",
          refusedGifts: [],
          origin: "Customer",
          itemShippingAddresses: [],
          shippingAddress: {
            id: "bVAgSiKM",
            streetName: "Letsbe Avenue",
            streetNumber: "123",
            postalCode: "LET B33",
            city: "London",
            country: "GB",
            pOBox: "",
            mobile: "0123 456 7890",
            firstName: "Test",
            lastName: "Human",
            apartment: "456",
          },
        };
      JSON.stringify([
        {
          code: "OutOfStock",
          message:
            "Some line items are out of stock at the time of placing the order: some-sku-123.",
          lineItems: ["7297c742-d8b0-484b-aadc-1d0ba1869dc9"],
          skus: ["some-sku-123"],
        },
        {
          code: "DiscountCodeNonApplicable",
          message:
            "The discountCode 08b5c46f-73d6-4cd6-8c15-6014e4fccb17 cannot be applied to the cart.",
          discountCode: "WELCOME10",
          discountCodeId: "08b5c46f-73d6-4cd6-8c15-6014e4fccb17",
        },
      ]),
        JSON.stringify(null),
        JSON.stringify({ code: "400", message: "Bad Request" });
      let em = {
        id: "27b39077-aa57-48a5-b504-914f68fa44dc",
        customerEmail: void 0,
        customerId: "012345",
        version: 1,
        items: [
          {
            id: "7297c742-d8b0-484b-aadc-1d0ba1869dc9",
            pricing: {
              isDiscounted: !1,
              lineItemDiscounts: [],
              lineItemPrice: 10,
              lineItemPriceBeforeDiscount: 10,
              productLevelDiscount: null,
              taxRate: { amount: 0.1, includedInPrice: !1 },
              unitPrice: 10,
              unitPriceBeforeDiscount: 10,
              priceMode: "Platform",
            },
            product: {
              atLeastOneInStock: !0,
              categories: [],
              id: "c5c75935-595a-4cc3-a80e-24e9a9c55094",
              masterVariant: {
                availability: { availableQuantity: 5, isOnStock: !0 },
                brands: "Garnier",
                dimcode: "PB630405",
                id: 1,
                images: [
                  {
                    height: 800,
                    label: "wow",
                    url: "https://www.cnet.com/a/img/resize/995d4d237a8244ec255b27a6a35476c6c6622fcd/hub/2019/09/25/8be7b304-eba7-4094-a9c9-243422e2ddc3/doge-meme.jpg?auto=webp&fit=crop&height=675&width=1200",
                    width: 1200,
                  },
                ],
                price: 10,
                productId: "c5c75935-595a-4cc3-a80e-24e9a9c55094",
                productTypeKeys: ["daycream"],
                producttypes: ["Day Cream"],
                size: "50ml",
                skincaremoments: "AM_PM",
                sku: "some-sku-123",
                strikePrice: void 0,
              },
              matchScores: { overallScore: 10 },
              name: "MyProduct",
              productType: "skincare",
              slug: void 0,
              variants: [],
            },
            quantity: 1,
            routine: { focusAreaKey: "drynessdehydration", id: void 0 },
          },
        ],
        customItems: [],
        totalQuantity: 1,
        shippingAddress: {
          country: "GB",
          firstName: "Test",
          fullName: "Test Human",
          id: "bVAgSiKM",
          lastName: "Human",
          phoneNumber: "0123 456 7890",
          postalCode: "LET B33",
          region: void 0,
          instructions: void 0,
          firstLineAddress: "123 Letsbe Avenue",
          secondLineAddress: void 0,
          city: "London",
          flatNumber: "456",
          streetAddress: "123 Letsbe Avenue",
          streetName: "Letsbe Avenue",
        },
        discountCodes: [],
        shippingId: void 0,
        billingAddress: void 0,
        orderCreationErrors: [],
        pricing: {
          bagValue: 10,
          subtotal: 10,
          subtotalCentAmount: 1e3,
          shippingCost: void 0,
          finalPrice: 10,
          finalPriceCentAmount: 1e3,
          cartDiscounts: { discounts: [] },
          shipping: { cost: 0, amount: 0, discount: 0 },
          productDiscounts: { totalValue: 0 },
          totalDiscountValue: 0,
          currencyCode: "GBP",
        },
      };
      em.pricing,
        em.items[0],
        em.items[0].pricing,
        em.pricing,
        em.pricing,
        em.pricing,
        o.dV.Cart,
        o.dV.Cart,
        o.dV.Cart;
    },
    67242: (e, t, n) => {
      "use strict";
      n.d(t, { D_: () => i, m_: () => r, t9: () => o });
      class i extends Error {}
      class r extends Error {}
      class o extends Error {
        constructor(e, t) {
          super(t), (this.retryAfterSeconds = e);
        }
      }
    },
    70675: () => {},
    70769: (e, t, n) => {
      "use strict";
      n.d(t, { KJ: () => r, lR: () => i });
      var i = (function (e) {
          return (
            (e.BAD_CREDENTIALS = "invalid_customer_account_credentials"),
            (e.NOT_VERIFIED_ERROR = "Account not verified"),
            (e.BLOCKED = "Blocked"),
            e
          );
        })({}),
        r = (function (e) {
          return (
            (e.UPDATE_SEGMENT_ID = "updateSegmentId"),
            (e.UPDATE_ADDRESSES = "updateAddresses"),
            (e.SET_SKINCARE_DECODED = "setSkincareDecoded"),
            (e.SET_HAIRCARE_DECODED = "setHaircareDecoded"),
            e
          );
        })({});
    },
    75454: () => {},
    77443: () => {},
    83156: () => {},
    84497: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => h });
      var i = n(67242),
        r = n(40420),
        o = n(27374),
        a = n(70769),
        s = n(35543),
        c = n(67650);
      let d = {
        maxAge: 172800,
        async encode(e) {
          let { secret: t, token: n } = e;
          return u({ ...n }, "".concat(t));
        },
        async decode(e) {
          let { secret: t, token: n } = e;
          return l("".concat(n), "".concat(t));
        },
      };
      async function u(e, t) {
        let n = Math.floor(Date.now() / 1e3);
        return new s.P({ ...e })
          .setProtectedHeader({ alg: "HS256", typ: "JWT" })
          .setExpirationTime(n + 172800)
          .setIssuedAt(n)
          .setNotBefore(n)
          .sign(new TextEncoder().encode(t));
      }
      async function l(e, t) {
        let { payload: n } = await (0, c.V)(e, new TextEncoder().encode(t));
        return n;
      }
      var p = n(69538);
      let m = {
          providers: [],
          session: { maxAge: d.maxAge, strategy: "jwt" },
          secret: p.env.NEXTAUTH_SECRET,
          jwt: d,
          callbacks: {
            jwt: async (e) => {
              let { token: t, trigger: n, session: i, user: r } = e;
              if ("update" === n) {
                if (i.event === a.KJ.UPDATE_SEGMENT_ID)
                  return { ...t, segmentId: i.segmentId };
                if (i.event === a.KJ.SET_SKINCARE_DECODED)
                  return { ...t, isSkincareDecoded: i.isDecoded };
                if (i.event === a.KJ.SET_HAIRCARE_DECODED)
                  return { ...t, isHaircareDecoded: i.isDecoded };
                if (i.event === a.KJ.UPDATE_ADDRESSES && !t.isAnonymous)
                  return {
                    ...t,
                    addresses: i.addresses,
                    shippingAddress: i.shippingAddress,
                    billingAddress: i.billingAddress,
                    version: i.version,
                  };
              }
              return r ? { ...t, ...r } : t;
            },
            session: async (e) => {
              let { session: t, token: n } = e,
                {
                  id: i,
                  segmentId: r,
                  firstName: o,
                  lastName: a,
                  addresses: s,
                  shippingAddress: c,
                  billingAddress: d,
                  accessToken: u,
                  refreshToken: l,
                  email: p,
                  version: m,
                  isAnonymous: v,
                  isSkincareDecoded: y,
                  isHaircareDecoded: f,
                  anonymousId: h,
                } = n;
              return (
                (t.user = {
                  id: i,
                  segmentId: r,
                  firstName: o,
                  lastName: a,
                  addresses: s,
                  shippingAddress: c,
                  billingAddress: d,
                  accessToken: u,
                  refreshToken: l,
                  email: p,
                  version: m,
                  isAnonymous: v,
                  isSkincareDecoded: y,
                  isHaircareDecoded: f,
                  anonymousId: h,
                }),
                t
              );
            },
          },
          pages: {
            signIn: "/welcome",
            signOut: "/welcome",
            error: "/welcome",
            verifyRequest: "/welcome",
            newUser: "/create-account",
          },
        },
        v = async () => {
          let e = await fetch(
            "".concat("https://api.noli.com", "/anonymous/token"),
            {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams({ grant_type: "client_credentials" }),
            },
          );
          return await e.json();
        };
      class y {
        static getInstance() {
          return y.instance || (y.instance = new y()), y.instance;
        }
        isSSR() {
          return !1;
        }
        async getSession() {
          return this.isSSR() ? (0, r.Mt)(m) : (0, o.getSession)();
        }
        async getToken() {
          let e = await this.getSession();
          if (!e || e.user.isAnonymous) {
            if (!this.isSSR()) {
              await (0, o.signIn)("anonymous", { redirect: !1 });
              let e = await this.getSession();
              return null == e ? void 0 : e.user.accessToken;
            }
            return v().then((e) => e.access_token);
          }
          return e.user.accessToken;
        }
        async signOut() {
          if (!this.isSSR()) return (0, o.signOut)({ callbackUrl: "/welcome" });
        }
      }
      let f = y.getInstance();
      class h {
        async refreshAuthAndRerun(e) {
          try {
            return await f.getToken(), await e();
          } catch (t) {
            let e = await f.getSession();
            if ((null == e ? void 0 : e.user.isAnonymous) === !1)
              return await f.signOut();
          }
        }
        async handleError(e, t) {
          var n, r, o;
          if (
            t &&
            this.retryErrorCodes.includes(
              null !==
                (o =
                  null == e
                    ? void 0
                    : null === (n = e.response) || void 0 === n
                      ? void 0
                      : n.status) && void 0 !== o
                ? o
                : 500,
            )
          )
            return this.refreshAuthAndRerun(t);
          if (
            (null == e
              ? void 0
              : null === (r = e.response) || void 0 === r
                ? void 0
                : r.status) === 404
          )
            throw new i.m_(e.message);
          throw e;
        }
        async executeWithHandleError(e) {
          try {
            return await e();
          } catch (t) {
            return this.handleError(t, e);
          }
        }
        async get(e, t) {
          return this.executeWithHandleError(
            async () => (await this.apiClient.get(e, t)).data,
          );
        }
        async post(e, t, n) {
          return this.executeWithHandleError(async () => {
            let i = n
                ? { headers: { Authorization: "Bearer ".concat(n) } }
                : void 0,
              r = [e, t];
            return i && r.push(i), (await this.apiClient.post(...r)).data;
          });
        }
        async put(e, t, n) {
          return this.executeWithHandleError(
            async () => (await this.apiClient.put(e, t, n)).data,
          );
        }
        async patch(e, t) {
          return this.executeWithHandleError(
            async () => (await this.apiClient.patch(e, t)).data,
          );
        }
        async delete(e) {
          return this.executeWithHandleError(async () =>
            this.apiClient.delete(e),
          );
        }
        async remove(e, t) {
          return this.executeWithHandleError(
            async () => (await this.apiClient.delete(e, t)).data,
          );
        }
        constructor() {
          this.retryErrorCodes = [401, 403];
        }
      }
    },
    87567: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => a });
      var i = n(78418),
        r = n(27374);
      let o = () => ({
          Accept: "application/json",
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        }),
        a = (e) => {
          let t = i.A.create({
            baseURL: e,
            timeout: 9e3,
            headers: o(),
            withCredentials: !0,
          });
          return (
            t.interceptors.request.use(async (e) => {
              let t = await (0, r.getSession)();
              if (t) {
                var n;
                e.headers.Authorization = "Bearer ".concat(
                  null == t
                    ? void 0
                    : null === (n = t.user) || void 0 === n
                      ? void 0
                      : n.accessToken,
                );
              }
              return e;
            }),
            t
          );
        };
    },
    89927: () => {},
    93277: (e, t, n) => {
      "use strict";
      n.d(t, {
        P7: () => d.P,
        iC: () => d.i,
        bb: () => y,
        MW: () => m,
        iA: () => v,
      });
      var i = n(94799),
        r = n(34023),
        o = n(92616),
        a = n(17422),
        s = n(57184),
        c = n(43101),
        d = n(28724);
      let u = [],
        l = (0, r.createContext)(u),
        p = (0, r.createContext)(() => {}),
        m = () => (0, r.useContext)(l),
        v = () => (0, r.useContext)(p),
        y = (e) => {
          let { children: t } = e,
            [n, c] = (0, r.useReducer)(f, u),
            { sendAnalyticsEvent: m } = (0, s.s)();
          return (0, i.jsx)(l.Provider, {
            value: n,
            children: (0, i.jsx)(p.Provider, {
              value: (e) => {
                if (e.type === d.P.Add && e.variant === d.i.Error) {
                  let t = { error_code: e.alertKey, error_name: e.message };
                  m(o.m3.errorEcountered.bind(o.m3), a.s.ERROR_ENCOUNTERED, t);
                }
                c(e);
              },
              children: t,
            }),
          });
        },
        f = (e, t) => {
          switch (t.type) {
            case d.P.Add:
              var n;
              if (t.alertKey && h(e, t.alertKey)) return e;
              return [
                {
                  id: null !== (n = t.id) && void 0 !== n ? n : (0, c.S)(),
                  alertKey: t.alertKey,
                  message: t.message,
                  variant: t.variant,
                  buttonLabel: t.buttonLabel,
                  onButtonClick: t.onButtonClick,
                  keepOpen: t.keepOpen,
                },
                ...e,
              ];
            case d.P.Delete:
              return e.filter((e) => e.id !== t.id);
            case d.P.DeleteAll:
              return [];
            default:
              return e;
          }
        },
        h = (e, t) => e.findIndex((e) => e.alertKey === t) > -1;
    },
    94280: () => {},
    99846: () => {},
  },
]);
