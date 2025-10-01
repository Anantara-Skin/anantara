"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9988],
  {
    352: (e, t, i) => {
      i.d(t, { E: () => r });
      var a = i(24689),
        l = i(65795),
        n = i(67582);
      class r {
        addProduct(e) {
          return (
            this.masterVariant.products.push(e),
            this._calculateRoutinePrice(),
            this
          );
        }
        _calculateRoutinePrice() {
          let { totalItemsPrice: e, totalItemsStrikePrice: t } =
            this.masterVariant.products.reduce(
              (e, t) => {
                var i, a;
                return (
                  (e.totalItemsPrice +=
                    null !== (i = t.masterVariant.price) && void 0 !== i
                      ? i
                      : 0),
                  (e.totalItemsStrikePrice +=
                    null !== (a = t.masterVariant.strikePrice) && void 0 !== a
                      ? a
                      : 0),
                  e
                );
              },
              { totalItemsPrice: 0, totalItemsStrikePrice: 0 },
            );
          (this.masterVariant.price = e),
            (this.masterVariant.strikePrice = t > 0 ? t : void 0);
        }
        _getRoutineName(e) {
          let t = [...l.O, ...n.O].find((t) => t.id === e);
          return "Essential routine".concat(
            (null == t ? void 0 : t.label) ? " (".concat(t.label, ")") : "",
          );
        }
        constructor({ id: e, focusArea: t, products: i = [] }) {
          return (
            (this.id = null != e ? e : "routine"),
            (this.name = this._getRoutineName(t)),
            (this.productType = a.ch.ROUTINE),
            (this.masterVariant = {
              productId: this.id,
              id: -1,
              brands: "",
              price: -1,
              images: [],
              products: i,
            }),
            this._calculateRoutinePrice(),
            this
          );
        }
      }
    },
    20562: (e, t, i) => {
      i.d(t, { c: () => j });
      var a = i(94799),
        l = i(4306),
        n = i(53738),
        r = i(34023),
        o = i(87704);
      let s = (e, t) => {
          let i = e.findLast((e) => e.triggerCartValue <= t);
          return null != i ? i : null;
        },
        d = (e, t) => {
          let i = e.find((e) => e.triggerCartValue > t);
          return null != i ? i : null;
        },
        c = (e, t) => {
          let { requiredFurtherSpend: i } = t;
          return "free-shipping" === e.type
            ? "Add ".concat((0, o.S)(i / 100), " to get free delivery")
            : "percentage" === e.type
              ? "Add "
                  .concat((0, o.S)(i / 100), " to get ")
                  .concat(e.percentageOffCartTotal, "% off")
              : void 0;
        },
        u = (e) =>
          "free-shipping" === e.type
            ? "You've unlocked free delivery"
            : "percentage" === e.type
              ? "You've unlocked ".concat(e.percentageOffCartTotal, "% off")
              : void 0,
        h = (e, t) => {
          var i, a;
          if (!(null == e ? void 0 : e.length) || void 0 === t)
            return {
              lastDiscount: null,
              lastDiscountCompletionText: null,
              nextDiscount: null,
              nextDiscountIncentiveText: null,
              requiredFurtherSpend: null,
              progressToNextDiscount: null,
            };
          let l = [...e].sort(
              (e, t) => e.triggerCartValue - t.triggerCartValue,
            ),
            n = s(l, t),
            r = d(l, t),
            o = r ? r.triggerCartValue - t : null,
            h = r
              ? (t -
                  (null !== (i = null == n ? void 0 : n.triggerCartValue) &&
                  void 0 !== i
                    ? i
                    : 0)) /
                (r.triggerCartValue -
                  (null !== (a = null == n ? void 0 : n.triggerCartValue) &&
                  void 0 !== a
                    ? a
                    : 0))
              : 1;
          return {
            lastDiscount: n,
            lastDiscountCompletionText: n ? u(n) : null,
            nextDiscount: r,
            nextDiscountIncentiveText:
              r && o ? c(r, { requiredFurtherSpend: o }) : null,
            requiredFurtherSpend: o,
            progressToNextDiscount: h,
          };
        };
      var x = i(57865),
        m = i(22387),
        g = i(96546);
      let p = (e) => {
        let { ariaLabel: t, dataTestId: i, children: l, variant: n } = e,
          r = (0, g.o5)("progressBarWrapper", { variant: n });
        return (0, a.jsx)(m.VStack, {
          sx: r,
          "aria-label": t,
          "data-testid": i,
          children: l,
        });
      };
      var v = i(89136),
        b = i(65329),
        k = i(39693);
      let f = (e) => {
          let { children: t, ...i } = e;
          return (0, a.jsx)(b.P.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { delay: 1.5 },
            children: (0, a.jsx)(v.Text, {
              display: "flex",
              alignItems: "center",
              gap: 2,
              textStyle: "function.text.large",
              ...i,
              children: t,
            }),
          });
        },
        y = (e) => {
          let {
            hasItemsShortOfStock: t,
            showAchievedDiscount: i,
            lastDiscount: l,
            lastDiscountCompletionText: n,
            nextDiscountIncentiveText: r,
          } = e;
          return t
            ? (0, a.jsxs)(
                f,
                {
                  "data-testid": "Out of stock item",
                  children: [
                    (0, a.jsx)(k.AlertCircleIcon, {
                      stroke: "semantic.orange.20",
                      width: 6,
                      height: 6,
                    }),
                    "You have out of stock item(s) in your bag",
                  ],
                },
                "short-stock",
              )
            : i && l
              ? (0, a.jsxs)(
                  f,
                  {
                    "data-testid": "Discount Achieved",
                    children: [
                      (0, a.jsx)(k.CheckCircleIcon, {
                        stroke: "semantic.green.30",
                        width: 6,
                        height: 6,
                      }),
                      n,
                    ],
                  },
                  "discount-achieved",
                )
              : (0, a.jsxs)(
                  f,
                  {
                    "data-testid": "Spend More In Bag",
                    children: [
                      (0, a.jsx)(k.AlertCircleIcon, {
                        stroke: "semantic.orange.20",
                        width: 6,
                        height: 6,
                      }),
                      r,
                    ],
                  },
                  "next-discount",
                );
        },
        j = (e) => {
          var t;
          let {
              children: i,
              discounts: o,
              cartPricing: s,
              cartAppliedDiscounts: d,
              variant: c = "primary",
              backgroundColor: u,
              hasItemsShortOfStock: m = !1,
            } = e,
            [g, v] = (0, r.useState)(null),
            [b, k] = (0, r.useState)(!0),
            [f, j] = (0, r.useState)(!1),
            C =
              null !==
                (t = s && (s.bagValue - s.productDiscounts.totalValue) * 100) &&
              void 0 !== t
                ? t
                : 0,
            {
              lastDiscountCompletionText: w,
              nextDiscountIncentiveText: S,
              progressToNextDiscount: I,
              lastDiscount: B,
              nextDiscount: L,
            } = h(o, C),
            _ = (!!B || !!L) && s && !f;
          return (
            (0, r.useEffect)(() => {
              var e;
              let t;
              return (
                B &&
                  C >=
                    (null !== (e = B.triggerCartValue) && void 0 !== e
                      ? e
                      : 0) &&
                  ("percentage" !== B.type ||
                    (null == d ? void 0 : d.some((e) => e.key === B.key)) ||
                    j(!0),
                  B.key !== (null == g ? void 0 : g.discountKey) && k(!0),
                  v({ discountKey: B.key, discountValue: B.triggerCartValue }),
                  L &&
                    (t = setTimeout(() => {
                      k(!1);
                    }, 3e3))),
                B || (k(!1), v(null)),
                () => {
                  t && clearTimeout(t);
                }
              );
            }, [B, L, null == g ? void 0 : g.discountKey, C]),
            (0, a.jsxs)(l.Box, {
              position: "relative",
              backgroundColor: null != u ? u : "rgba(255, 255, 255, 0.9)",
              borderTopWidth: "1px",
              borderTopColor: "primary.warmGrey.80",
              width: "100%",
              px: [3, 4, 8, 10 * ("checkout" !== c)],
              py: [4, 4, 8, 8 * ("checkout" !== c)],
              pt: [4, 4, 8, "checkout" === c ? 4 : null],
              gap: 4,
              display: "flex",
              flexDirection: "column",
              "data-testid": "Promo Tracker",
              children: [
                _ &&
                  (0, a.jsxs)(p, {
                    children: [
                      (0, a.jsx)(n.N, {
                        mode: "wait",
                        children: (0, a.jsx)(y, {
                          hasItemsShortOfStock: m,
                          showAchievedDiscount: b,
                          lastDiscount: B,
                          lastDiscountCompletionText: null != w ? w : void 0,
                          nextDiscountIncentiveText: null != S ? S : void 0,
                        }),
                      }),
                      (0, a.jsx)(x.z, {
                        value: b ? 100 : (null != I ? I : 0) * 100,
                        colorScheme: m ? "warning" : b ? "success" : "discount",
                        width: "full",
                      }),
                    ],
                  }),
                i,
              ],
            })
          );
        };
    },
    25306: (e, t, i) => {
      i.d(t, { e: () => v });
      var a = i(94799),
        l = i(29392),
        n = i(77909),
        r = i(4306),
        o = i(20992),
        s = i(36008),
        d = i.n(s),
        c = i(92616),
        u = i(17422),
        h = i(57184),
        x = i(73261),
        m = i(82536),
        g = i(58716),
        p = i(39693);
      let v = (e) => {
        let { onClick: t, color: i } = e,
          { user: s, isSkincareDecoded: v } = (0, m.A)(),
          { sendAnalyticsEvent: b } = (0, h.s)(),
          k = () => {
            let e = null == s ? void 0 : s.segmentId,
              t = { click_location: "header", click_name: "My Shop" };
            s && (t.bdna_segment_id = e),
              b(c.m3.navigationClicked.bind(c.m3), u.s.NAVIGATION_CLICKED, t);
          };
        return (0, a.jsx)(l.LinkBox, {
          "aria-label": "Go to home",
          "data-testid": "Go to home",
          as: d(),
          href: v ? "/my-shop" : "/",
          onClick: () => {
            null == t || t(), k();
          },
          children: (0, a.jsxs)(n.HStack, {
            position: "relative",
            children: [
              (0, a.jsx)(r.Box, {
                paddingTop: 1.5,
                marginRight: -1,
                children: (0, a.jsx)(p.BDNAIcon, {
                  width: 8,
                  height: 8,
                  color: i,
                }),
              }),
              (0, a.jsx)(o.default, {
                priority: !0,
                alt: "",
                src:
                  "white" === i
                    ? "/images/logo/Logotype_White.svg"
                    : "/images/logo/Logotype_Black.svg",
                height: 24,
                width: 55,
                style: { cursor: "pointer" },
              }),
              (0, g.w)(x.T.XMAS_THEME) &&
                (0, a.jsx)(o.default, {
                  src: "/images/xmas/fairy_lights.svg",
                  height: 24,
                  width: 55,
                  alt: "",
                  priority: !0,
                  style: {
                    position: "absolute",
                    bottom: "2px",
                    transform: "translateY(98%)",
                    left: "36px",
                    right: 0,
                  },
                }),
            ],
          }),
        });
      };
    },
    29072: (e, t, i) => {
      i.d(t, { a: () => u });
      var a = i(94799),
        l = i(98814),
        n = i(31634),
        r = i(89136),
        o = i(14207),
        s = i(69444),
        d = i(57403),
        c = i(12963);
      let u = (e) => {
          var t, i;
          let l,
            n,
            { sectionTitle: r, productId: d, ...c } = e,
            u = !!d,
            { data: x, isLoading: m } = (0, o.r)(
              {
                productIds: [d],
                maxItemsPerBrand: 3,
                matchProductType: !0,
                size: 5,
              },
              { enabled: u },
            ),
            { data: g, isLoading: p } = (0, s.V)(
              {
                ignoreCriteria: ["producttypes"],
                maxItemsPerBrand: 3,
                size: 20,
              },
              {
                enabled: !(null === (t = c.items) || void 0 === t
                  ? void 0
                  : t.length),
              },
            );
          if (
            (u
              ? ((l = null == x ? void 0 : x.slice(0, 5)), (n = m))
              : ((l = g), (n = p)),
            !c.items && !(null == l ? void 0 : l.length) && !n)
          )
            return;
          let v = null !== (i = c.items) && void 0 !== i ? i : l;
          return (0, a.jsxs)(a.Fragment, {
            children: [r, (0, a.jsx)(h, { ...c, items: v })],
          });
        },
        h = (e) => {
          let {
              variant: t,
              items: i,
              linkTarget: o,
              isFullWidth: s,
              cardTitle: u,
              onCardClickAnalytics: h,
              addToCartAnalytics: x,
              isProductCardHorizontal: m = !0,
              productCardVariant: g = c.d.V2,
            } = e,
            p = (0, l.useStyleConfig)("Upsell", { variant: t });
          return (0, a.jsxs)(n.Flex, {
            sx: p,
            children: [
              u &&
                (0, a.jsx)(r.Text, {
                  textStyle: "body.semibold",
                  children: "Recommended pairing",
                }),
              (0, a.jsx)(n.Flex, {
                overflowX: "auto",
                gap: 4,
                overflowY: "hidden",
                children:
                  null == i
                    ? void 0
                    : i.map((e, t) =>
                        (0, a.jsx)(
                          n.Flex,
                          {
                            children: m
                              ? (0, a.jsx)(d.A, {
                                  orientation: d.y.HORIZONTAL,
                                  item: e,
                                  index: t,
                                  analytics: { ...h, ...x },
                                  config: {
                                    fullWidth: s,
                                    variant: g,
                                    linkTarget: o,
                                    canEditQuantity: !0,
                                  },
                                })
                              : (0, a.jsx)(n.Flex, {
                                  w: { base: 56, lg: 57 },
                                  children: (0, a.jsx)(d.A, {
                                    item: e,
                                    index: t,
                                    orientation: d.y.VERTICAL,
                                    analytics: { ...h, ...x },
                                    config: { linkTarget: o },
                                  }),
                                }),
                          },
                          "recommended-grid-item-".concat(e.id),
                        ),
                      ),
              }),
            ],
          });
        };
    },
    33549: (e, t, i) => {
      i.d(t, { d: () => k });
      var a = i(94799),
        l = i(65795),
        n = i(4306),
        r = i(89136),
        o = i(98814);
      let s = (e) => {
          let {
              children: t,
              ariaLabel: i,
              dataTestId: l,
              variant: r,
              onMouseEnter: s,
              onClick: d,
              sx: c,
            } = e,
            u = (0, o.useStyleConfig)("SubNavButton", { variant: r });
          return (0, a.jsx)(n.Box, {
            as: "button",
            __css: u,
            "aria-label": i,
            "data-testid": l,
            tabIndex: 0,
            onMouseEnter: s,
            onClick: d,
            sx: c,
            children: t,
          });
        },
        d = (e) => {
          let { icon: t, children: i } = e;
          return (0, a.jsx)(n.Box, {
            minWidth: 68,
            className: "focusAreaButton",
            children: (0, a.jsxs)(s, {
              variant: "brandFocusArea",
              children: [
                (0, a.jsx)(n.Box, {
                  padding: 3,
                  margin: 2,
                  marginRight: 4,
                  height: 14,
                  borderRadius: "full",
                  sx: {
                    ".focusAreaButton:hover &": {
                      backgroundColor: "primary.warmGrey.80",
                    },
                  },
                  children: t,
                }),
                (0, a.jsx)(r.Text, { textAlign: "left", children: i }),
              ],
            }),
          });
        };
      var c = i(21404),
        u = i(29392),
        h = i(36008),
        x = i.n(h),
        m = i(92616),
        g = i(17422),
        p = i(57184),
        v = i(82536);
      let b = (e) => {
          let {
              marginLeft: t,
              href: i,
              ariaLabel: l,
              dataTestId: n,
              children: r,
              analytics: o,
              onClick: s,
            } = e,
            { user: d } = (0, v.A)(),
            { sendAnalyticsEvent: c } = (0, p.s)(),
            h = () => {
              if (o) {
                let e = null == d ? void 0 : d.segmentId,
                  t = { ...o };
                d && (t.bdna_segment_id = e),
                  c(
                    m.m3.navigationClicked.bind(m.m3),
                    g.s.NAVIGATION_CLICKED,
                    t,
                  );
              }
            };
          return (0, a.jsx)(u.LinkBox, {
            as: x(),
            borderRadius: "full",
            marginLeft: t,
            width: "min",
            "aria-label": l,
            "data-testid": n,
            href: i,
            onClick: () => {
              h(), null == s || s();
            },
            children: r,
          });
        },
        k = (e) => {
          var t;
          return (0, a.jsx)(c.r, {
            title:
              null !== (t = e.title) && void 0 !== t
                ? t
                : "Shop by skincare focus area",
            ...e,
            children: l.O.map((e) => {
              let { slug: t, label: i, icon: l } = e;
              return (0, a.jsx)(
                b,
                {
                  href: "/focus-area/shop/".concat(t),
                  ariaLabel: "Visit ".concat(i, " page"),
                  "data-testid": "Visit ".concat(i, " page"),
                  children: (0, a.jsx)(d, { icon: l(8), children: i }),
                },
                t,
              );
            }),
          });
        };
    },
    41496: (e, t, i) => {
      i.d(t, { v: () => x });
      var a = i(94799),
        l = i(89136),
        n = i(27374),
        r = i(92616),
        o = i(17422),
        s = i(57184),
        d = i(81352);
      let c = () => {
        let e = (0, d.Ku)(),
          { sendAnalyticsEvent: t } = (0, s.s)();
        return {
          logout: async () => {
            await (0, n.signOut)({ callbackUrl: "/" }),
              e({ type: d.d1.Reset }),
              t(r.m3.signedOut.bind(r.m3), o.s.SIGNED_OUT, {});
          },
        };
      };
      var u = i(39693),
        h = i(93869);
      let x = (e) => {
        let { isIconVisible: t = !0, textStyle: i } = e,
          { logout: n } = c();
        return (0, a.jsxs)(h.$, {
          variant: "tertiary",
          onClick: n,
          "data-testid": "Log out",
          children: [
            t && (0, a.jsx)(u.LogoutIcon, { width: 6, height: 6 }),
            (0, a.jsx)(l.Text, { textStyle: i, children: "Log out" }),
          ],
        });
      };
    },
    43548: (e, t, i) => {
      i.d(t, { P: () => c });
      var a = i(94799),
        l = i(4306),
        n = i(77909),
        r = i(89136),
        o = i(36008),
        s = i.n(o);
      let d = (e, t) => {
          let i = e.toLowerCase(),
            a = t.toLowerCase();
          return i.startsWith(a)
            ? [e.substring(0, t.length), e.substring(t.length)]
            : ["", e];
        },
        c = (e) => {
          let {
              suggestionText: t,
              onClick: i,
              searchTerm: o,
              href: c,
              icon: u,
              ariaLabel: h,
              dataTestId: x,
            } = e,
            [m, g] = d(t, o);
          return (0, a.jsx)(l.Box, {
            as: c ? s() : "button",
            ...(c && { href: c }),
            "aria-label": h,
            "data-testid": x,
            borderRadius: "lg",
            onClick: i,
            width: "100%",
            children: (0, a.jsxs)(n.HStack, {
              padding: 2,
              borderRadius: "lg",
              sx: { _hover: { bgColor: "primary.warmGrey.80" } },
              children: [
                u,
                (0, a.jsxs)(r.Text, {
                  textStyle: "body",
                  children: [
                    (0, a.jsx)("b", {
                      "data-testid": "bold suggestion text",
                      children: m,
                    }),
                    g,
                  ],
                }),
              ],
            }),
          });
        };
    },
    47838: (e, t, i) => {
      i.d(t, { L: () => n });
      var a = i(69211);
      class l {
        static getInstance() {
          return this.instance || (this.instance = new l()), this.instance;
        }
        async getProgressiveDiscounts() {
          let e = await fetch("".concat(a.Z8, "/discounts/progressive"));
          if (200 === e.status) return await e.json();
          throw Error(
            "Received ".concat(
              e.status,
              " code fetching progressive discounts",
            ),
          );
        }
        async getRoutineDiscounts() {
          let e = await fetch("".concat(a.Z8, "/discounts/routine-discounts"));
          if (200 === e.status) return await e.json();
          throw Error(
            "Received ".concat(e.status, " code fetching routine discounts"),
          );
        }
      }
      let n = l.getInstance();
    },
    49988: (e, t, i) => {
      i.r(t), i.d(t, { Header: () => tn });
      var a = i(94799),
        l = i(20381),
        n = i(13465),
        r = i(4306),
        o = i(65329),
        s = i(34023),
        d = i(81352),
        c = i(27357),
        u = i(15118),
        h = i(50969),
        x = i(57948);
      let m = () => {
        let [e, t] = (0, s.useState)(!1),
          i = (0, c.usePathname)(),
          a = (0, h.E)(i) === u.a.PDP,
          l = !(0, x.l)(),
          n = (0, s.useCallback)(
            (e) => {
              if (a || l) {
                let { deltaY: i } = e;
                i > 0 ? t(!0) : i < 0 && t(!1);
              } else t(!1);
            },
            [t, l, a],
          ),
          r = (0, s.useCallback)(
            (e) => {
              "ArrowDown" === e.key ? t(!0) : "ArrowUp" === e.key && t(!1);
            },
            [t],
          );
        return (
          (0, s.useEffect)(
            () => (
              window.addEventListener("wheel", n),
              window.addEventListener("keydown", r),
              () => {
                window.removeEventListener("wheel", n),
                  window.removeEventListener("keydown", r);
              }
            ),
          ),
          e
        );
      };
      var g = i(79761),
        p = i(24689),
        v = i(92616),
        b = i(17422),
        k = i(57184),
        f = i(98814),
        y = i(75619);
      let j = (e) => {
        let { bundle: t } = e,
          i = (0, f.useMultiStyleConfig)("BundleMiniCartBody");
        return (0, a.jsx)(r.Box, {
          width: "100%",
          alignItems: "center",
          "aria-label": "routine container",
          children: (0, a.jsx)(r.Box, {
            __css: i.basketItemContainer,
            children: (0, a.jsx)(y.j, { bundle: t }),
          }),
        });
      };
      var C = i(98577),
        w = i(99034),
        S = i(352),
        I = i(56742);
      let B = (e) => {
        let { children: t, onClick: i, zIndex: l } = e,
          n = (0, f.useMultiStyleConfig)("Layer");
        return (0, I.createPortal)(
          (0, a.jsxs)(r.Box, {
            __css: n.container,
            zIndex: l,
            children: [(0, a.jsx)(r.Box, { __css: n.layer, onClick: i }), t],
          }),
          document.body,
        );
      };
      var L = i(60968),
        _ = i(55272),
        T = i(31634),
        E = i(89136),
        A = i(93339),
        N = i(4099),
        V = i(22387),
        D = i(55554),
        P = i(38196),
        R = i(37216),
        O = i(39693),
        F = i(2906),
        G = i(15231),
        H = i(43137),
        M = i(57403),
        z = i(75076),
        W = i(54637),
        K = i(29072);
      let U = (e) => {
          var t, i, l, n;
          let { cart: o, items: d, lastAction: m, onClose: g, cardBody: p } = e,
            v = (0, w.l)(),
            b = (0, x.l)(),
            k = (0, f.useMultiStyleConfig)("ProductMiniCart", {}),
            { data: y } = (0, C.A)(),
            { data: j } = (0, R.L)(
              null == d
                ? void 0
                : null === (i = d[0]) || void 0 === i
                  ? void 0
                  : null === (t = i.product) || void 0 === t
                    ? void 0
                    : t.id,
              { includeAllVariants: !1 },
            ),
            { data: S } = (0, R.L)(
              null == j
                ? void 0
                : null === (n = j.masterVariant) || void 0 === n
                  ? void 0
                  : null === (l = n.pairwith) || void 0 === l
                    ? void 0
                    : l.id,
              { includeAllVariants: !1 },
            ),
            I = !!(null == o ? void 0 : o.items.length),
            B = (0, s.useMemo)(
              () =>
                m === F.P.AddItem || (null == d ? void 0 : d.length)
                  ? "You've just added"
                  : m !== F.P.RemoveItem || (null == d ? void 0 : d.length)
                    ? I
                      ? void 0
                      : "Your bag is empty"
                    : "Item removed",
              [m, null == d ? void 0 : d.length, I],
            ),
            U =
              null == o
                ? void 0
                : o.items.some((e) => !e.product.atLeastOneInStock),
            Y = !!(null == S ? void 0 : S.atLeastOneInStock),
            q = (0, c.usePathname)(),
            X = (0, h.E)(q),
            Q = X === u.a.PDP,
            Z = X === u.a.ROUTINE;
          return (0, a.jsxs)(L.Card, {
            __css: {
              height: "full",
              overflowY: "scroll",
              display: "flex",
              flexDirection: "column",
              padding: 0,
            },
            children: [
              (0, a.jsxs)(r.Box, {
                __css: {
                  ...k.container,
                  maxHeight: { base: "75vh", sm: "90vh", md: "100vh" },
                },
                children: [
                  (0, a.jsx)(_.CardHeader, {
                    children: (0, a.jsxs)(T.Flex, {
                      justifyContent: "space-between",
                      children: [
                        (0, a.jsxs)(T.Flex, {
                          alignItems: "center",
                          gap: 1.5,
                          children: [
                            (0, a.jsx)(O.AddedToBagIcon, {
                              width: 6,
                              height: 6,
                            }),
                            (0, a.jsx)(E.Text, {
                              textStyle: "body.semibold",
                              children: B,
                            }),
                          ],
                        }),
                        (0, a.jsx)(A.Button, {
                          __css: k.closeButton,
                          onClick: g,
                          "aria-label": "Close mini cart",
                          "data-testid": "Close mini cart",
                          children: (0, a.jsx)(O.CrossIcon, {
                            width: 4,
                            height: 4,
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(N.CardBody, {
                    mt: { base: 2, lg: 4 },
                    children:
                      null != p
                        ? p
                        : (0, a.jsxs)(a.Fragment, {
                            children: [
                              !!(null == d ? void 0 : d.length) &&
                                (0, a.jsx)(V.VStack, {
                                  gap: 2,
                                  children:
                                    null == d
                                      ? void 0
                                      : d.map((e, t) =>
                                          (0, a.jsx)(
                                            M.A,
                                            {
                                              orientation: M.y.HORIZONTAL,
                                              item: e.product,
                                              index: t,
                                              config: {
                                                fullWidth: !0,
                                                canEditQuantity: !0,
                                              },
                                              override: {
                                                price: e.pricing.lineItemPrice,
                                                strikePrice:
                                                  e.pricing
                                                    .lineItemPriceBeforeDiscount,
                                              },
                                            },
                                            e.product.id,
                                          ),
                                        ),
                                }),
                              (null == d ? void 0 : d.length)
                                ? 1 === d.length &&
                                  (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)(D.Divider, { my: 4 }),
                                      (0, a.jsx)(P.Stack, {
                                        gap: { base: 2, lg: 4 },
                                        children: (0, a.jsx)(K.a, {
                                          cardTitle: Y && "Recommended pairing",
                                          sectionTitle: Y
                                            ? void 0
                                            : (0, a.jsx)(E.Text, {
                                                textStyle: "body.semibold",
                                                "aria-label":
                                                  "Other picks for you",
                                                "data-testid":
                                                  "Other picks for you",
                                                children: "Other picks for you",
                                              }),
                                          items: Y ? [S] : void 0,
                                          variant: "noBackground",
                                          linkTarget: F.M.PRODUCT_DETAIL_PAGE,
                                          isFullWidth: Y,
                                          addToCartAnalytics: {
                                            click_location:
                                              "Other picks for you",
                                          },
                                        }),
                                      }),
                                    ],
                                  })
                                : (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)(D.Divider, { my: 4 }),
                                      (0, a.jsx)(K.a, {
                                        variant: "noBackground",
                                        linkTarget: F.M.PRODUCT_DETAIL_PAGE,
                                        isFullWidth: Y,
                                      }),
                                    ],
                                  }),
                            ],
                          }),
                  }),
                ],
              }),
              !v &&
                !b &&
                (0, a.jsx)(z.c, {
                  cartPricing: null == o ? void 0 : o.pricing,
                  cartAppliedDiscounts:
                    null == o ? void 0 : o.pricing.cartDiscounts.discounts,
                  discounts: y,
                  hasItemsShortOfStock: U,
                  backgroundColor: "primary.white[@0.9]",
                  children: (0, a.jsx)(G.ButtonLink, {
                    href: "/basket",
                    variant: "primary",
                    fullWidth: !0,
                    children: "View bag",
                  }),
                }),
              (v || b) && (0, a.jsx)(W.O, {}),
              (v || b) &&
                !(Q || Z) &&
                (0, a.jsx)(H.k, {
                  children: (0, a.jsx)(G.ButtonLink, {
                    href: "/basket",
                    variant: "primary",
                    fullWidth: !0,
                    children: "View bag",
                  }),
                }),
            ],
          });
        },
        Y = (e) => {
          if (e.length) {
            let t = null;
            return (
              e.find((e) => {
                var i, a, l;
                return (
                  (null === (i = e.items) || void 0 === i
                    ? void 0
                    : i.length) &&
                    (t =
                      null !==
                        (l =
                          null ===
                            (a = e.items.find(
                              (e) =>
                                (null == e ? void 0 : e.product.productType) ===
                                p.ch.SOFT_BUNDLE,
                            )) || void 0 === a
                            ? void 0
                            : a.product) && void 0 !== l
                        ? l
                        : null),
                  !!t
                );
              }),
              t
            );
          }
          return null;
        },
        q = (e) => {
          var t, i, n, r;
          let { cart: o, visible: d, items: c, onClose: u, lastActions: h } = e,
            m = (0, w.l)(),
            p = (0, x.l)(),
            { data: f } = (0, C.A)(),
            { sendAnalyticsEvent: y } = (0, k.s)(),
            I = !m && !p,
            L = (0, l.useBreakpointValue)(
              (null == f ? void 0 : f.length)
                ? [150, null, 190]
                : [80, null, 110],
            ),
            _ = !!(null == h
              ? void 0
              : h.some((e) => {
                  var t;
                  return !!(null === (t = e.items) || void 0 === t
                    ? void 0
                    : t.some((e) => !!(null == e ? void 0 : e.routine)));
                })),
            T = !!(null == h
              ? void 0
              : h.some((e) => {
                  var t;
                  return !!(null === (t = e.items) || void 0 === t
                    ? void 0
                    : t.some((e) => !!(null == e ? void 0 : e.parentId)));
                })),
            E =
              null == c
                ? void 0
                : c.filter(
                    (e, t, i) =>
                      t === i.findIndex((t) => t.product.id === e.product.id),
                  ),
            A = _
              ? null === (r = h[0]) || void 0 === r
                ? void 0
                : null === (n = r.items) || void 0 === n
                  ? void 0
                  : null === (i = n[0]) || void 0 === i
                    ? void 0
                    : null === (t = i.routine) || void 0 === t
                      ? void 0
                      : t.focusAreaKey
              : void 0,
            N = Y(h),
            V = (0, s.useCallback)(() => {
              _ &&
                y(v.m3.ctaClicked.bind(v.m3), b.s.CTA_CLICKED, {
                  click_name: "cross",
                  click_location: "bag banner",
                  page_category: "routine",
                  page_subcategory_1: A,
                }),
                null == u || u();
            }, [_, u, A]),
            D = (e) => {
              var t;
              return (0, a.jsx)(g.SlideFade, {
                in: d,
                offsetY: I ? "5rem" : void 0,
                offsetX: I ? void 0 : "5rem",
                style: { width: "100%", ...e },
                unmountOnExit: !0,
                children: (0, a.jsx)(U, {
                  cart: o,
                  items: null != c ? c : void 0,
                  onClose: V,
                  lastAction:
                    null === (t = h.at(-1)) || void 0 === t ? void 0 : t.action,
                  cardBody:
                    _ && E
                      ? (0, a.jsx)(j, {
                          bundle: new S.E({
                            products:
                              null == E
                                ? void 0
                                : E.map((e) => ({
                                    ...e.product,
                                    masterVariant: {
                                      ...e.product.masterVariant,
                                      price: e.pricing.lineItemPrice,
                                      strikePrice:
                                        e.pricing.lineItemPriceBeforeDiscount,
                                    },
                                  })),
                          }),
                        })
                      : T && N
                        ? (0, a.jsx)(j, { bundle: N })
                        : void 0,
                }),
              });
            };
          return d
            ? I
              ? (0, a.jsx)(B, {
                  onClick: u,
                  zIndex: 1200,
                  children: D({
                    position: "fixed",
                    bottom: 0,
                    right: 0,
                    top: 0,
                    backgroundColor: "primary.black.10",
                    maxWidth: "35%",
                  }),
                })
              : (0, a.jsx)(B, {
                  onClick: u,
                  zIndex: "dropdown",
                  children: D({
                    position: "absolute",
                    bottom: L,
                    left: 0,
                    right: 0,
                    marginBottom: 15,
                    zIndex: "modal",
                  }),
                })
            : null;
        },
        X = (e) => {
          let { onClose: t, visible: i } = e,
            { lastActions: l, cart: n, miniCart: r } = (0, d.B_)(),
            o = (0, s.useMemo)(() => {
              if (null == n ? void 0 : n.items.length)
                return null == n
                  ? void 0
                  : n.items.filter((e) =>
                      null == r ? void 0 : r.includes(e.product.id),
                    );
            }, [r, null == n ? void 0 : n.items]);
          return (0, a.jsx)("div", {
            children: (0, a.jsx)(q, {
              cart: n,
              items: o,
              lastActions: l,
              onClose: t,
              visible: i,
            }),
          });
        },
        Q = () => {
          let e = (0, c.usePathname)(),
            t = (0, d.Ku)();
          (0, s.useEffect)(() => {
            t({ type: d.d1.ShowMiniCart, payload: !1 });
          }, [e]);
          let { showMiniCart: i, lastActions: l } = (0, d.B_)(),
            n = (0, x.l)(),
            o = (0, s.useRef)(null),
            u = !!(null == l
              ? void 0
              : l.some((e) => {
                  var t;
                  return !!(null === (t = e.items) || void 0 === t
                    ? void 0
                    : t.some((e) => !!(null == e ? void 0 : e.routine)));
                })),
            h = (0, s.useCallback)(() => {
              o.current && (clearTimeout(o.current), (o.current = null));
            }, []),
            m = (0, s.useCallback)(() => {
              h(),
                (o.current = setTimeout(() => {
                  !u && n && t({ type: d.d1.ShowMiniCart, payload: !1 }),
                    (o.current = null);
                }, 4e3));
            }, [h, t, u, n]);
          return (
            (0, s.useEffect)(() => {
              i && n ? m() : h();
            }, [i, n]),
            (0, s.useEffect)(
              () => (
                i ||
                  (h(), t({ type: d.d1.SetMiniCartProductIds, payload: [] })),
                () => h()
              ),
              [t, i, h],
            ),
            i &&
              (0, a.jsx)(r.Box, {
                onClick: m,
                onPointerMove: m,
                children: (0, a.jsx)(X, {
                  visible: i,
                  onClose: () => {
                    t({ type: d.d1.ShowMiniCart, payload: !1 });
                  },
                }),
              })
          );
        },
        Z = "navigationPortalContainer";
      var $ = i(47759),
        J = i(77909),
        ee = i(36008),
        et = i.n(ee),
        ei = i(82536);
      let ea = (e) => {
        let { enabled: t } = e;
        (0, s.useEffect)(
          () => (
            (document.body.style.overflow = t ? "hidden" : "unset"),
            () => {
              document.body.style.overflow = "unset";
            }
          ),
          [t],
        );
      };
      var el = i(54885),
        en = i(89125),
        er = i(80950);
      let eo = JSON.parse(
          '{"v":"5.9.0","fr":60,"ip":0,"op":30,"w":24,"h":24,"nm":"IconHamburger24Updated","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"burger bottom","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[12.031,12,0],"ix":2,"l":2},"a":{"a":0,"k":[-0.375,-1.25,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-6.375,4.688],[5.562,4.688]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.101960784314,0.101960784314,0.101960784314,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":15,"s":[100]}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":30,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"burger middle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[12,12,0],"ix":2,"l":2},"a":{"a":0,"k":[-0.406,4.688,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-6.375,4.688],[5.562,4.688]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.101960784314,0.101960784314,0.101960784314,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[100]},{"t":15,"s":[0]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":30,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"burger top","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":90,"ix":10},"p":{"a":0,"k":[12,12,0],"ix":2,"l":2},"a":{"a":0,"k":[-0.375,-1.25,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-6.312,-7.188],[-6.375,4.688]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.101960784314,0.101960784314,0.101960784314,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[100]},{"t":15,"s":[0]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":30,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"cross","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[12,12,0],"ix":2,"l":2},"a":{"a":0,"k":[-0.375,-1.25,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-6.312,-7.188],[5.562,4.688]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.101960784314,0.101960784314,0.101960784314,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":14,"s":[100]},{"t":29,"s":[0]}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":14,"op":44,"st":14,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"cross 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":90,"ix":10},"p":{"a":0,"k":[12,12,0],"ix":2,"l":2},"a":{"a":0,"k":[-0.375,-1.25,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-6.312,-7.188],[5.562,4.688]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.101960784314,0.101960784314,0.101960784314,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":14,"s":[0]},{"t":29,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":14,"op":44,"st":14,"bm":0}],"markers":[]}',
        ),
        es = (e) => {
          let { isActive: t, onClick: i } = e,
            [l, n] = (0, s.useState)();
          return (
            (0, s.useEffect)(() => {
              null == l || l.setMode(t ? "forward" : "reverse"),
                null == l || l.play();
            }, [t, l]),
            (0, a.jsx)(er.i, {
              variant: "mobileNavBarWhite",
              onClick: i,
              ariaLabel: "Burger",
              "data-testid": "Burger",
              isActive: t,
              children: (0, a.jsx)(en.GL, {
                autoplay: !1,
                loop: !1,
                dotLottieRefCallback: (e) => {
                  n(e);
                },
                style: { width: 24, height: 24, margin: "auto" },
                data: eo,
              }),
            })
          );
        };
      var ed = i(73261),
        ec = i(6744),
        eu = i(58716),
        eh = i(29371),
        ex = (function (e) {
          return (e.LEVEL_1 = "1"), (e.LEVEL_2 = "2"), (e.LEVEL_3 = "3"), e;
        })({});
      let em = (e) => {
          let { children: t } = e,
            [i, a] = (0, s.useState)(null);
          return (
            (0, s.useEffect)(() => {
              a(document.getElementById(Z));
            }, [a]),
            i && (0, I.createPortal)(t, i)
          );
        },
        eg = (e) => {
          let { zIndex: t, onClick: i } = e;
          return (0, a.jsx)(r.Box, {
            top: 0,
            left: 0,
            position: "fixed",
            width: "100dvw",
            height: "100dvh",
            onClick: i,
            zIndex: t,
            bgColor: "primary.warmGrey.40",
            opacity: 0.4,
          });
        };
      var ep = i(26796),
        ev = i(33014),
        eb = i(11425),
        ek = i(12846),
        ef = i(27566),
        ey = i(16581),
        ej = i(33440);
      let eC = (e) => {
        (0, s.useEffect)(() => {
          let t = (t) => {
            t.composedPath().some((e) => e instanceof HTMLAnchorElement) &&
              e.fn();
          };
          return (
            e.enabled && document.addEventListener("click", t),
            () => document.removeEventListener("click", t)
          );
        }, [e]);
      };
      var ew = i(11564),
        eS = i(56903),
        eI = i(93869),
        eB = i(33549),
        eL = i(9292),
        e_ = i(96543),
        eT = i(83883),
        eE = i(43548);
      let eA = (e) => {
          let { suggestions: t, searchTerm: i } = e;
          return (0, a.jsx)(r.Box, {
            width: "100%",
            children: t.map((e) => {
              let t = "query" === e.type;
              return (0, a.jsx)(
                eE.P,
                {
                  ariaLabel: t
                    ? "Search for ".concat(e.text)
                    : "Visit ".concat(e.text, " page"),
                  suggestionText: e.text,
                  searchTerm: i,
                  href: e.path,
                  icon: t
                    ? (0, a.jsx)(O.SearchIcon, { width: 6, height: 6 })
                    : (0, a.jsx)(O.PageIcon, { width: 6, height: 6 }),
                },
                "".concat(e.text, "-").concat(e.type, "-suggestion}"),
              );
            }),
          });
        },
        eN = (e) => {
          let { searchTerm: t } = e,
            { data: i } = (0, e_.X3)(
              { searchTerm: t },
              { placeholderData: (e) => (t.length > 1 ? e : void 0) },
            ),
            { keywordSuggestions: l, productSuggestions: n } =
              null != i ? i : {};
          return (0, a.jsxs)(P.Stack, {
            gap: 4,
            children: [
              l &&
                (0, a.jsx)(V.VStack, {
                  children: (0, a.jsx)(eA, { suggestions: l, searchTerm: t }),
                }),
              n && (0, a.jsx)(eT.I, { products: n.map((e) => e.product) }),
            ],
          });
        };
      var eV = i(89245);
      let eD = (e) => {
          let { isVisible: t, onOverlayClose: i } = e,
            l = (0, c.useRouter)(),
            { isOpen: n, onOpen: o, onClose: d } = (0, $.useDisclosure)(),
            [u, h] = (0, s.useState)(""),
            x = (0, ew.d)(u, 100);
          (0, s.useEffect)(() => {
            t && o();
          }, [t, o]);
          let m = () => {
              d(), null == i || i(), h("");
            },
            g = () => {
              l.push("/search?query=".concat(u)), m();
            };
          return (
            eC({ fn: m, enabled: n }),
            (0, a.jsxs)(ev.Drawer, {
              isOpen: n,
              size: "xs",
              isFullHeight: !0,
              onClose: m,
              placement: "bottom",
              autoFocus: !0,
              children: [
                (0, a.jsx)(eb.ModalOverlay, {}),
                (0, a.jsxs)(ek.DrawerContent, {
                  backgroundColor: "primary.white",
                  borderTopRadius: 0,
                  maxH: "100%",
                  children: [
                    (0, a.jsx)(ef.ModalHeader, {
                      pt: 4,
                      px: { base: 3, md: 8 },
                      children: (0, a.jsx)(r.Box, {
                        top: 0,
                        right: 0,
                        left: 0,
                        height: 16,
                        children: (0, a.jsx)(eV.I, {
                          onSearch: g,
                          onSearchTermChange: (e) => {
                            h(e);
                          },
                          withClearButton: !0,
                          placeholder: "What are you looking for",
                          marginX: 0,
                          variant: "lighter",
                        }),
                      }),
                    }),
                    (0, a.jsx)(ey.ModalBody, {
                      overflowY: "scroll",
                      overflowX: "hidden",
                      px: { base: 3, md: 8 },
                      children: x
                        ? (0, a.jsx)(eN, { searchTerm: u })
                        : (0, a.jsxs)(P.Stack, {
                            gap: 10,
                            children: [
                              (0, a.jsx)(P.Stack, {
                                gap: 6,
                                children: (0, a.jsx)(eL.fl, {}),
                              }),
                              (0, a.jsx)(eS.T, {
                                variant: "dropdown",
                                title: "Shop by skincare brand",
                              }),
                              (0, a.jsx)(eB.d, { variant: "dropdown" }),
                            ],
                          }),
                    }),
                    (0, a.jsxs)(ej.ModalFooter, {
                      gap: 2,
                      px: { base: 3, md: 8 },
                      children: [
                        (0, a.jsx)(eI.$, {
                          ariaLabel: "View Results",
                          "data-testid": "View Results",
                          variant: "primary",
                          fullWidth: !0,
                          onClick: g,
                          isDisabled: !u,
                          children: "See results",
                        }),
                        (0, a.jsx)(eI.$, {
                          width: 18,
                          height: 18,
                          variant: "primaryLight",
                          onClick: m,
                          ariaLabel: "Close",
                          "data-testid": "Close",
                          boxShadow:
                            "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                          children: (0, a.jsx)(O.CrossIcon, {
                            height: 6,
                            width: 6,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        eP = (e) => {
          let {
              title: t,
              onBackClick: i,
              backAriaLabel: l,
              isFlatten: n = !1,
            } = e,
            [o, d] = (0, s.useState)(!1);
          return (0, a.jsxs)(P.Stack, {
            width: "100%",
            backgroundColor: "primary.white",
            gap: 0,
            paddingBottom: { base: 0 },
            paddingTop: { base: 4 * !n },
            mt: { base: 4 * !!n },
            children: [
              t &&
                (0, a.jsxs)(T.Flex, {
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignContent: "flex-start",
                  children: [
                    !n &&
                      (0, a.jsx)(r.Box, {
                        onClick: i,
                        as: "button",
                        "aria-label": l,
                        children: (0, a.jsx)(O.ArrowLeftIcon, {
                          width: 6,
                          height: 6,
                        }),
                      }),
                    (0, a.jsx)(E.Text, {
                      textStyle: "body.semibold",
                      color: "primary.warmGrey.50",
                      children: t,
                    }),
                    (0, a.jsx)(ep.Spacer, { maxWidth: 6, minWidth: 6 }),
                  ],
                }),
              (0, a.jsx)(eD, {
                isVisible: o,
                onOverlayClose: () => d((e) => !e),
              }),
            ],
          });
        },
        eR = (e) => {
          let {
            showHeader: t,
            headerTitle: i,
            children: l,
            parentName: n,
            onBackClick: o,
            isFlatten: s = !1,
          } = e;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              t &&
                (0, a.jsx)(eP, {
                  title: i,
                  onBackClick: o,
                  backAriaLabel: "Go back to ".concat(
                    null != n ? n : "burger",
                    " menu",
                  ),
                  "data-testid": "Go back to ".concat(
                    null != n ? n : "burger",
                    " menu",
                  ),
                  isFlatten: s,
                }),
              (0, a.jsx)(r.Box, {
                bgColor: "primary.white",
                width: "100%",
                height: { base: s ? "" : "100vh", lg: "unset" },
                overflow: "auto",
                zIndex: "sticky",
                paddingBottom: { base: 40 * !s, lg: 0 },
                children: l,
              }),
            ],
          });
        },
        eO = {
          "/routines": {
            decoded: { label: "My routines", href: "/my-routine" },
            tag: "NEW",
            icon: "bottles",
          },
          Routines: {
            decoded: { label: "My routines" },
            tag: "NEW",
            icon: "bottles",
          },
          "/offers": { icon: "offers" },
        },
        eF = (e) => {
          let { user: t } = (0, ei.A)(),
            i = null == t ? void 0 : t.segmentId,
            a = eO[e.href ? e.href : e.internalName],
            l = {};
          return (
            a &&
              (a.decoded &&
                i &&
                (a.decoded.label &&
                  ((l.label = a.decoded.label),
                  (l.pluralLabel = a.decoded.label)),
                a.decoded.href && (l.href = a.decoded.href)),
              a.icon && (l.iconName = a.icon),
              a.tag && (l.tag = a.tag)),
            { ...e, ...l }
          );
        };
      var eG = i(24721),
        eH = i(49071),
        eM = i(95785),
        ez = i(43485),
        eW = i(92718),
        eK = i(73929);
      let eU = (e) => {
        var t, i;
        let { entry: l, onClick: n, analytics: r } = e;
        return (0, a.jsxs)(T.Flex, {
          gap: 2,
          width: "100%",
          flexDirection: "column",
          children: [
            (0, a.jsx)(eK.NavPillLink, {
              label: l.label,
              ariaLabel: "Visit ".concat(l.label, " page"),
              "data-testid": "Visit ".concat(l.label, " page"),
              variant: "baseGrey",
              href: null !== (i = l.href) && void 0 !== i ? i : "#",
              analytics: { click_subcategory_1: l.label, ...r },
              onClick: n,
            }),
            null === (t = l.entries) || void 0 === t
              ? void 0
              : t.map((e) => {
                  var t;
                  return (0, a.jsx)(
                    eK.NavPillLink,
                    {
                      label: e.label,
                      ariaLabel: "Visit ".concat(e.label, " page"),
                      "data-testid": "Visit ".concat(e.label, " page"),
                      href: null !== (t = e.href) && void 0 !== t ? t : "#",
                      analytics: {
                        click_location: "header",
                        click_name: "Shop",
                        click_action_category: "Product",
                        click_subcategory_1: l.label,
                        click_subcategory_2: e.label,
                        ...r,
                      },
                      onClick: n,
                    },
                    e.id,
                  );
                }),
          ],
        });
      };
      var eY = i(1076),
        eq = i(8822),
        eX = i(79240),
        eQ = i(96871),
        eZ = i(38236),
        e$ = i(74607);
      let eJ = {
          [eW.hH.LINKS_WITH_PROMOTIONAL_BANNER]: (e) => {
            var t;
            let { entry: i, onClose: l, analytics: n, isFlatten: o = !1 } = e,
              s = !(0, x.l)();
            return (0, a.jsxs)(T.Flex, {
              flexDir: { base: "column", lg: "row" },
              paddingY: { lg: 8, xl: 10, "2xl": 16 },
              gap: { base: 4, md: 8 },
              justifyContent: "space-between",
              children: [
                null === (t = i.entries) || void 0 === t
                  ? void 0
                  : t.map((e) => {
                      var t, i;
                      return (0, a.jsxs)(
                        P.Stack,
                        {
                          width: "100%",
                          flex: 1,
                          children: [
                            (0, a.jsx)(eZ.Link, {
                              textStyle:
                                o && !s
                                  ? "heading.h5.bold"
                                  : "function.text.large",
                              href:
                                null !== (i = e.href) && void 0 !== i ? i : "#",
                              onClick: l,
                              py: { base: 2, lg: 0 },
                              children: e.label,
                            }),
                            null === (t = e.entries) || void 0 === t
                              ? void 0
                              : t.map((e) => {
                                  var t;
                                  return (0, a.jsx)(
                                    eK.NavPillLink,
                                    {
                                      label: e.label,
                                      href:
                                        null !== (t = e.href) && void 0 !== t
                                          ? t
                                          : "#",
                                      onClick: () => l(),
                                      analytics: n,
                                    },
                                    e.id,
                                  );
                                }),
                          ],
                        },
                        e.id,
                      );
                    }),
                i.promoCard &&
                  (0, a.jsx)(r.Box, {
                    flex: 2,
                    children: (0, a.jsx)(e$.m, {
                      variant: "promoCardSubNav",
                      promoCmsData: i.promoCard,
                      sizes: "25vw",
                    }),
                  }),
              ],
            });
          },
          [eW.hH.LINKS_WITH_IMAGE]: (e) => {
            var t;
            let { entry: i, onClose: l, analytics: n } = e;
            return (0, a.jsx)(eY.Grid, {
              columnGap: { lg: 4, xl: 8 },
              gap: { base: 4, lg: 2 },
              paddingY: { lg: 8, xl: 10, "2xl": 16 },
              gridTemplateRows: {
                base: "repeat(1, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gridAutoFlow: { base: "row", lg: "column" },
              children:
                null === (t = i.entries) || void 0 === t
                  ? void 0
                  : t.map((e) => {
                      let { href: t, label: i, subNavImage: r } = e;
                      return (0, a.jsx)(
                        eq.GridItem,
                        {
                          width: "100%",
                          children: (0, a.jsx)(eQ.NavImageLink, {
                            ariaLabel: "Visit ".concat(i, " page"),
                            "data-testid": "Visit ".concat(i, " page"),
                            imgSrc: null == r ? void 0 : r.url,
                            label: i,
                            href: null != t ? t : "#",
                            analytics: { click_subcategory_1: i, ...n },
                            onClick: () => l(),
                          }),
                        },
                        i,
                      );
                    }),
            });
          },
          [eW.hH.LINKS_WITH_ICON]: (e) => {
            var t;
            let { entry: i, onClose: l, analytics: n } = e;
            return (0, a.jsx)(eY.Grid, {
              columnGap: { lg: 4, xl: 8 },
              gap: { base: 4, lg: 2 },
              paddingY: { lg: 8, xl: 10, "2xl": 16 },
              gridTemplateRows: {
                base: "repeat(1, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gridAutoFlow: { base: "row", lg: "column" },
              flexWrap: "wrap",
              children:
                null === (t = i.entries) || void 0 === t
                  ? void 0
                  : t.map((e) => {
                      let { href: t, label: i, iconName: r } = e,
                        o = r && (0, eX.Rg)(r);
                      return (0, a.jsx)(
                        eq.GridItem,
                        {
                          width: "100%",
                          children: (0, a.jsx)(eQ.NavImageLink, {
                            ariaLabel: "Visit ".concat(i, " page"),
                            "data-testid": "Visit ".concat(i, " page"),
                            icon: o
                              ? (0, a.jsx)(o, { width: 8, height: 8 })
                              : void 0,
                            label: i,
                            href: null != t ? t : "#",
                            analytics: { click_subcategory_1: i, ...n },
                            onClick: () => l(),
                          }),
                        },
                        i,
                      );
                    }),
            });
          },
          [eW.hH.LINKS]: (e) => {
            var t;
            let { entry: i, onClose: l, analytics: n } = e;
            return (0, a.jsx)(T.Flex, {
              width: "100%",
              flexDir: { base: "column", lg: "row" },
              gap: { base: 8, lg: 2 },
              paddingY: { lg: 8, xl: 10, "2xl": 16 },
              children:
                null === (t = i.entries) || void 0 === t
                  ? void 0
                  : t.map((e) =>
                      (0, a.jsx)(
                        r.Box,
                        {
                          w: "100%",
                          children: (0, a.jsx)(eU, {
                            entry: e,
                            onClick: () => l(),
                            analytics: n,
                          }),
                        },
                        e.id,
                      ),
                    ),
            });
          },
        },
        e0 = (e) => {
          var t, i, l, n;
          let {
              entry: r,
              parentName: o,
              onClose: s,
              onBackClick: d,
              isFlatten: c,
            } = e,
            u = !(0, x.l)("noSSR"),
            h = eJ[null !== (t = r.layout) && void 0 !== t ? t : eW.hH.LINKS];
          return r.href
            ? (0, a.jsx)(
                er.i,
                {
                  "data-testid": r.internalName,
                  as: et(),
                  href: r.href,
                  variant: "text",
                  onClick: () => s(),
                  children:
                    null !== (i = r.pluralLabel) && void 0 !== i ? i : r.label,
                },
                r.internalName,
              )
            : (0, a.jsx)(eR, {
                showHeader: !u,
                headerTitle:
                  null !== (l = r.pluralLabel) && void 0 !== l ? l : r.label,
                parentName: o,
                onBackClick: d,
                isFlatten: c,
                children: (0, a.jsx)(h, {
                  entry: r,
                  onClose: () => s(),
                  analytics: {
                    click_location: "header",
                    click_name: o,
                    click_action_category:
                      null !== (n = r.pluralLabel) && void 0 !== n
                        ? n
                        : r.label,
                  },
                  isFlatten: c,
                }),
              });
        },
        e1 = (e) => {
          let {
              entry: t,
              selectedNavLevel1: i,
              selectedNavLevel2: l,
              setSelectedNavEntry: n,
              level: o = ex.LEVEL_1,
              parent: d,
              onClose: c,
              noSsr: u,
            } = e,
            h = !(0, x.l)(!!u && "noSSR"),
            { isSkincareDecoded: m, isHaircareDecoded: g } = (0, ei.A)(),
            p = (0, eG.G)(),
            f = eF(t),
            y = o === ex.LEVEL_2 ? l : i,
            j = o === ex.LEVEL_2 ? ex.LEVEL_3 : ex.LEVEL_2,
            C = () => {
              c(!0);
            };
          if (f.href) {
            var w;
            let { href: e } = f;
            return (
              "/skincare" === e && m
                ? (e = "/skincare/my-shop")
                : "/haircare" === e && g && (e = "/haircare/my-shop"),
              (0, a.jsx)(r.Box, {
                marginTop: o === ex.LEVEL_1 ? { base: 4, lg: 0 } : void 0,
                children: (0, a.jsx)(
                  er.i,
                  {
                    "data-testid": f.internalName,
                    as: et(),
                    href: e,
                    variant: h ? "text" : "mobileNavBar",
                    onClick: () => C(),
                    withIcon: h ? void 0 : !!f.iconName,
                    icon: h ? void 0 : f.iconName,
                    children: (0, a.jsxs)(T.Flex, {
                      gap: 2,
                      alignItems: "center",
                      children: [
                        null !== (w = f.pluralLabel) && void 0 !== w
                          ? w
                          : f.label,
                        f.tag &&
                          (0, a.jsx)(ez.v, {
                            variant: "bdnaSquare",
                            size: "xxs",
                            children: f.tag,
                          }),
                      ],
                    }),
                  },
                  f.internalName,
                ),
              })
            );
          }
          let S = () =>
              "Skincare" === t.internalName
                ? (0, a.jsx)(r.Box, {
                    position: { base: "fixed", lg: "unset" },
                    bottom: { base: 6, lg: "unset" },
                    left: { base: 4, lg: "unset" },
                    right: { base: 4, lg: "unset" },
                    zIndex: "sticky",
                    children: m
                      ? (0, a.jsxs)(G.ButtonLink, {
                          variant: "primary",
                          size: { base: "lg", lg: "sm" },
                          fullWidth: !h,
                          href: "/my-routine/skincare",
                          onClick: C,
                          children: [
                            (0, a.jsx)(O.BottlesIcon, { height: 6, width: 6 }),
                            " My skincare routine",
                          ],
                        })
                      : (0, a.jsxs)(G.ButtonLink, {
                          variant: "primary",
                          size: { base: "lg", lg: "sm" },
                          fullWidth: !h,
                          href: "/bdna-quiz/skincare",
                          onClick: C,
                          children: [
                            (0, a.jsx)(O.BottlesIcon, { height: 6, width: 6 }),
                            " Build your skincare routine",
                          ],
                        }),
                  })
                : "Haircare" === t.internalName
                  ? (0, a.jsx)(r.Box, {
                      position: { base: "fixed", lg: "unset" },
                      bottom: { base: 6, lg: "unset" },
                      left: { base: 4, lg: "unset" },
                      right: { base: 4, lg: "unset" },
                      children: (0, eu.w)(ed.T.HAIRCARE_PERSONALISATION)
                        ? g
                          ? (0, a.jsxs)(G.ButtonLink, {
                              variant: "primary",
                              size: { base: "lg", lg: "sm" },
                              fullWidth: !h,
                              href: "/my-routine/haircare",
                              onClick: C,
                              children: [
                                (0, a.jsx)(O.BottlesIcon, {
                                  height: 6,
                                  width: 6,
                                }),
                                " My haircare routine",
                              ],
                            })
                          : (0, a.jsxs)(G.ButtonLink, {
                              variant: "primary",
                              size: { base: "lg", lg: "sm" },
                              fullWidth: !h,
                              href: "/bdna-quiz/haircare",
                              onClick: C,
                              children: [
                                (0, a.jsx)(O.BottlesIcon, {
                                  height: 6,
                                  width: 6,
                                }),
                                " Build your haircare routine",
                              ],
                            })
                        : (0, a.jsxs)(G.ButtonLink, {
                            variant: "primary",
                            size: { base: "lg", lg: "sm" },
                            fullWidth: !h,
                            href: "#",
                            isDisabled: !0,
                            children: [
                              "Build your haircare routine",
                              " ",
                              (0, a.jsx)(ez.v, {
                                variant: "filledBlackSquare",
                                size: "xxxs",
                                children: (0, a.jsx)("b", {
                                  children: "COMING\xa0SOON",
                                }),
                              }),
                            ],
                          }),
                    })
                  : void 0,
            I = (e) => {
              var r, s, u, x;
              let { isFlatten: m = !1 } = e,
                g = ["Skincare", "Haircare"].includes(t.internalName);
              return o === ex.LEVEL_2
                ? (0, a.jsx)(e0, {
                    entry: t,
                    onClose: () => C(),
                    parentName:
                      null !== (s = null == d ? void 0 : d.pluralLabel) &&
                      void 0 !== s
                        ? s
                        : null == d
                          ? void 0
                          : d.label,
                    onBackClick: () => n(o, null),
                    isFlatten: m,
                  })
                : (0, a.jsxs)(eR, {
                    showHeader: !h,
                    headerTitle:
                      null !== (u = t.pluralLabel) && void 0 !== u
                        ? u
                        : t.label,
                    parentName:
                      null !== (x = null == d ? void 0 : d.pluralLabel) &&
                      void 0 !== x
                        ? x
                        : null == d
                          ? void 0
                          : d.label,
                    onBackClick: () => n(o, null),
                    children: [
                      (0, a.jsxs)(T.Flex, {
                        flexShrink: 0,
                        gap: { base: 4, md: 8, lg: 4 },
                        paddingY:
                          "Routines" === t.internalName
                            ? { base: 4, lg: 8, xl: 10, "2xl": 16 }
                            : { base: 4, lg: 2 },
                        flexDirection: { base: "column", lg: "row" },
                        alignItems: { base: "flex-start", lg: "center" },
                        children: [
                          o === ex.LEVEL_1 &&
                            !h &&
                            g &&
                            (0, a.jsx)(E.Text, {
                              textStyle: "body.semibold",
                              color: "primary.warmGrey.50",
                              children: "Shop by",
                            }),
                          null === (r = t.entries) || void 0 === r
                            ? void 0
                            : r.map((e) =>
                                (0, a.jsx)(
                                  e1,
                                  {
                                    entry: e,
                                    level: j,
                                    selectedNavLevel1: i,
                                    selectedNavLevel2: l,
                                    setSelectedNavEntry: n,
                                    onClose: c,
                                    parent: t,
                                    noSsr: !0,
                                  },
                                  e.id,
                                ),
                              ),
                        ],
                      }),
                      !h && (0, a.jsx)(S, {}),
                    ],
                  });
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              t.isFlatten && !h
                ? (0, a.jsx)(I, { isFlatten: !0 })
                : (0, a.jsx)(() => {
                    var e, i, l, r;
                    let { sendAnalyticsEvent: d } = (0, k.s)();
                    return (null === (e = t.decodedImage) || void 0 === e
                      ? void 0
                      : e.url) &&
                      (null === (i = t.defaultImage) || void 0 === i
                        ? void 0
                        : i.url) &&
                      t.decodedLabel
                      ? (0, a.jsx)(eH.n, {
                          entry: t,
                          onClick: () => {
                            d(v.m3.ctaClicked.bind(v.m3), b.s.CTA_CLICKED, {
                              click_location: "navigation",
                              click_name: t.label,
                            }),
                              C();
                          },
                        })
                      : t.defaultImage && !h
                        ? (0, s.createElement)(eM.m, {
                            imageSrc: t.defaultImage.url,
                            ctaLabel:
                              null !== (l = t.pluralLabel) && void 0 !== l
                                ? l
                                : t.label,
                            "data-testid": t.internalName,
                            onClick: C,
                            ...(p && h
                              ? {
                                  onMouseEnter: () => {
                                    n(o, t.id);
                                  },
                                }
                              : {
                                  onClick: () => {
                                    n(o, t.id);
                                  },
                                }),
                            key: t.internalName,
                          })
                        : (0, s.createElement)(
                            er.i,
                            {
                              "data-testid": t.internalName,
                              ...(p && h
                                ? {
                                    onMouseEnter: () => {
                                      n(o, t.id);
                                    },
                                  }
                                : {
                                    onClick: () => {
                                      n(o, t.id);
                                    },
                                  }),
                              key: t.internalName,
                              isActive: y === t.id,
                              variant: h ? "text" : "mobileNavBar",
                              withIcon: !h,
                              icon: h ? void 0 : f.iconName,
                              forceArrowIcon: !h,
                            },
                            (0, a.jsxs)(T.Flex, {
                              gap: 2,
                              alignItems: "center",
                              children: [
                                null !== (r = f.pluralLabel) && void 0 !== r
                                  ? r
                                  : f.label,
                                f.tag &&
                                  (0, a.jsx)(ez.v, {
                                    variant: "bdnaSquare",
                                    size: "xxs",
                                    children: f.tag,
                                  }),
                              ],
                            }),
                          );
                  }, {}),
              (0, a.jsx)(em, {
                children:
                  y === t.id &&
                  (0, a.jsx)(T.Flex, {
                    bg: "primary.white",
                    justifyContent: "space-between",
                    alignItems: { base: "flex-start", lg: "center" },
                    paddingX: { base: 4, lg: 10 },
                    borderBottom: "1px",
                    borderColor: "primary.black.90",
                    gap: 4,
                    position: { base: "absolute", lg: "unset" },
                    top: { base: 0, lg: "unset" },
                    right: { base: 0, lg: "unset" },
                    left: { base: 0, lg: "unset" },
                    flexDirection: { base: "column", lg: "row" },
                    height: { base: "calc(100dvh - 3.5rem)", lg: "unset" },
                    children: (0, a.jsx)(I, {}),
                  }),
              }),
            ],
          });
        };
      var e6 = i(41496);
      let e4 = (e) => {
          let { onClick: t } = e,
            { isOpen: i, onOpen: l, onClose: n } = (0, $.useDisclosure)(),
            [o, d] = (0, s.useState)(!0),
            { user: c, status: u } = (0, ei.A)(),
            { sendAnalyticsEvent: h } = (0, k.s)(),
            x = null == c ? void 0 : c.segmentId,
            m = !!c && "authenticated" === u,
            g = (e) => {
              null == t || t(), p(e);
            },
            p = (e) => {
              c && (e.bdna_segment_id = x),
                h(v.m3.navigationClicked.bind(v.m3), b.s.NAVIGATION_CLICKED, e);
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(T.Flex, {
                children: [
                  (0, a.jsxs)(T.Flex, {
                    flex: 1,
                    flexDirection: "column",
                    gap: 3,
                    children: [
                      (0, a.jsx)(G.ButtonLink, {
                        href: "/faq",
                        variant: "tertiary",
                        onClick: () =>
                          g({
                            click_location: "navigation",
                            click_name: "FAQs",
                          }),
                        children: "FAQs",
                      }),
                      (0, a.jsx)(G.ButtonLink, {
                        href: "/about-us",
                        variant: "tertiary",
                        onClick: () =>
                          g({
                            click_location: "navigation",
                            click_name: "About Us",
                          }),
                        children: "About Us",
                      }),
                      (0, a.jsx)(G.ButtonLink, {
                        href: "/faq#contact-us",
                        variant: "tertiary",
                        onClick: () =>
                          g({
                            click_location: "navigation",
                            click_name: "Contact us",
                          }),
                        children: "Contact us",
                      }),
                    ],
                  }),
                  (0, a.jsxs)(T.Flex, {
                    flex: 1,
                    flexDirection: "column",
                    gap: 3,
                    children: [
                      !m &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(eI.$, {
                              variant: "tertiary",
                              onClick: () => {
                                d(!0),
                                  l(),
                                  p({
                                    click_location: "navigation",
                                    click_name: "Log in",
                                  });
                              },
                              children: "Log in",
                            }),
                            (0, a.jsx)(eI.$, {
                              variant: "tertiary",
                              onClick: () => {
                                d(!1),
                                  l(),
                                  p({
                                    click_location: "navigation",
                                    click_name: "Sign up",
                                  });
                              },
                              children: "Sign up",
                            }),
                            (0, a.jsx)(el.O, {
                              isOpen: i,
                              onAuthenticated: n,
                              onClose: n,
                              showLogin: o,
                            }),
                          ],
                        }),
                      m &&
                        (0, a.jsx)(G.ButtonLink, {
                          href: "/me/account",
                          variant: "tertiary",
                          onClick: () =>
                            g({
                              click_location: "navigation",
                              click_name: "Account",
                            }),
                          children: "Account",
                        }),
                      m &&
                        (0, a.jsx)(G.ButtonLink, {
                          href: "/me/orders",
                          variant: "tertiary",
                          onClick: () =>
                            g({
                              click_location: "navigation",
                              click_name: "Order history",
                            }),
                          children: "Order history",
                        }),
                    ],
                  }),
                ],
              }),
              m &&
                (0, a.jsx)(r.Box, {
                  marginTop: 8,
                  children: (0, a.jsx)(e6.v, {}),
                }),
            ],
          });
        },
        e2 = (e) => {
          var t;
          let { children: i, opened: l } = e,
            n = !(0, x.l)(!1),
            { user: r } = (0, ei.A)(),
            { navigation: o } = (0, ec.a)();
          return n
            ? i
            : (0, a.jsx)(em, {
                children:
                  l &&
                  (0, a.jsxs)(eR, {
                    showHeader: !n,
                    headerTitle: "",
                    children: [
                      (0, a.jsx)(P.Stack, {
                        gap: 8,
                        paddingX: { base: 4, lg: 10 },
                        marginTop: { base: 4, lg: 0 },
                        children: (0, a.jsxs)(E.Text, {
                          textStyle: "heading.h7.bold",
                          children: [
                            "Hey ",
                            null !== (t = null == r ? void 0 : r.firstName) &&
                            void 0 !== t
                              ? t
                              : "there",
                            ".\xa0",
                            (0, a.jsx)(E.Text, {
                              as: "span",
                              color: "primary.warmGrey.60",
                              children: null == o ? void 0 : o.mainTitle,
                            }),
                          ],
                        }),
                      }),
                      i,
                    ],
                  }),
              });
        },
        e3 = (e) => {
          let {
              opened: t,
              selectedNavLevel1: i,
              selectedNavLevel2: l,
              setSelectedNavLevel1: n,
              setSelectedNavLevel2: o,
              onClose: d,
            } = e,
            c = !(0, x.l)(),
            { navigation: u } = (0, ec.a)(),
            {
              userIsReady: h,
              isSkincareDecoded: m,
              isHaircareDecoded: g,
            } = (0, ei.A)(),
            v = (0, s.useRef)(null),
            b = (0, s.useRef)(null);
          (0, s.useEffect)(() => {
            var e;
            b.current =
              null !== (e = document.getElementById(Z)) && void 0 !== e
                ? e
                : null;
          }, []);
          let k = (e) => {
            v.current &&
              !v.current.contains(e.target) &&
              b.current &&
              !b.current.contains(e.target) &&
              d();
          };
          (0, s.useEffect)(
            () => (
              i && document.addEventListener("mousedown", k),
              () => {
                document.removeEventListener("mousedown", k);
              }
            ),
            [i],
          );
          let f = (e, t) => {
              e === ex.LEVEL_1 ? n(t) : e === ex.LEVEL_2 && o(t);
            },
            { entries: y } = u,
            { label: j, href: C } = (() => {
              let e = "skin",
                t = "hair",
                i = "/bdna-quiz";
              if (!(0, eu.w)(ed.T.HAIRCARE_PERSONALISATION))
                return {
                  label: e,
                  href: "".concat(i, "/").concat(p.ch.SKINCARE),
                };
              if (!m && !g)
                return { label: "".concat(e, " and ").concat(t), href: i };
              let a = m ? p.ch.HAIRCARE : p.ch.SKINCARE;
              return { label: m ? t : e, href: "".concat(i, "/").concat(a) };
            })();
          return (0, a.jsxs)(e2, {
            opened: t,
            children: [
              (0, a.jsxs)(r.Box, {
                marginRight: "auto",
                paddingBottom: { base: 68, lg: 0 },
                children: [
                  (0, a.jsx)(T.Flex, {
                    ref: v,
                    flexShrink: 0,
                    gap: 4,
                    flexDirection: { base: "column", lg: "row" },
                    alignItems: { base: "flex-start", lg: "center" },
                    paddingX: { base: 4, lg: 0 },
                    paddingY: { base: 8, lg: 0 },
                    display: { base: t ? "flex" : "none", lg: "flex" },
                    children: y.map((e) =>
                      (0, a.jsx)(
                        e1,
                        {
                          entry: e,
                          selectedNavLevel1: i,
                          selectedNavLevel2: l,
                          setSelectedNavEntry: f,
                          onClose: d,
                        },
                        e.id,
                      ),
                    ),
                  }),
                  !c &&
                    (0, a.jsx)(r.Box, {
                      borderTop: "1px solid",
                      borderColor: "primary.warmGrey.80",
                      marginX: { base: 4, lg: 0 },
                      paddingTop: 6,
                      children: (0, a.jsx)(e4, { onClick: () => d(!0) }),
                    }),
                ],
              }),
              (0, a.jsx)(r.Box, {
                position: { base: "fixed", lg: "unset" },
                bottom: { base: 6, lg: "unset" },
                left: { base: 4, lg: "unset" },
                right: { base: 4, lg: "unset" },
                children:
                  h &&
                  !(m && g) &&
                  (0, a.jsxs)(G.ButtonLink, {
                    variant: "bdnaFill",
                    size: { base: "lg", lg: "sm" },
                    fullWidth: !c,
                    href: C,
                    onClick: () => d(!0),
                    children: [
                      (0, a.jsx)(eh.U, {
                        height: 6,
                        width: 6,
                        sparkleColor: "white",
                      }),
                      "Free ".concat(j, " analysis"),
                    ],
                  }),
              }),
              i && c && (0, a.jsx)(eg, { zIndex: "-1" }),
            ],
          });
        };
      var e9 = i(26408);
      let e8 = (e) => {
        let { isExpandedByDefault: t = !1, onNavBarClose: i } = e,
          [l, n] = (0, s.useState)(t),
          [r, o] = (0, s.useState)(t),
          [d, u] = (0, s.useState)(""),
          h = (0, ew.d)(d, 100),
          x = () => {
            n(!1), o(!1), i && i();
          };
        ea({ enabled: l }), eC({ fn: x, enabled: r });
        let m = (0, c.useRouter)(),
          g = (e) => m.push("/search?query=".concat(e));
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(e9.e, {
              zIndex: "sticky",
              height: 14,
              right: { base: 3, md: 4, lg: 8, "2xl": 10 },
              left: { base: 3, md: 4, lg: 8, "2xl": 10 },
              layout: !0,
              pos: l ? "absolute" : "static",
              onLayoutAnimationComplete: () => {
                o(l);
              },
              transition: { layout: { ease: "linear" } },
              children: (0, a.jsx)(eV.I, {
                size: "sm",
                variant: "lighter",
                onFocus: () => n(!0),
                isDropdownVisible: r,
                onSearchTermChange: (e) => {
                  u(e);
                },
                placeholder: r
                  ? "What are you looking for today?"
                  : "Search...",
                onSearch: (e) => {
                  g(e), x();
                },
                withClearButton: l,
                children: h
                  ? (0, a.jsx)(eN, { searchTerm: h })
                  : (0, a.jsxs)(P.Stack, {
                      gap: 6,
                      children: [
                        (0, a.jsx)(eL.fl, {}),
                        (0, a.jsx)(eS.T, {
                          variant: "dropdown",
                          title: "Shop by skincare brand",
                        }),
                        (0, a.jsx)(eB.d, { variant: "dropdown" }),
                      ],
                    }),
              }),
            }),
            r && (0, a.jsx)(eg, { zIndex: "docked", onClick: x }),
          ],
        });
      };
      var e5 = i(25306);
      let e7 = (e) => {
        let { children: t, variant: i } = e;
        return (0, a.jsx)(r.Box, {
          __css: (0, f.useStyleConfig)("NotificationBadge", { variant: i }),
          children: t,
        });
      };
      i(59602);
      let te = (e) => {
          let {
              children: t,
              badgeText: i,
              badgePosition: l,
              margin: n,
              variant: o,
            } = e,
            s = (0, f.useStyleConfig)("NotificationBadgeOverlay", {
              variant: l,
            });
          return (0, a.jsxs)(T.Flex, {
            position: "relative",
            width: "fit-content",
            height: "100%",
            children: [
              void 0 !== i &&
                (0, a.jsx)(r.Box, {
                  sx: s,
                  margin: n,
                  children: (0, a.jsx)(e7, { variant: o, children: i }),
                }),
              t,
            ],
          });
        },
        tt = (e) => {
          var t;
          let { numCartItems: i = 0 } = e,
            l = (0, c.useRouter)(),
            [n, r] = (0, s.useState)(!1),
            [o, d] = (0, s.useState)(!1),
            [u, h] = (0, s.useState)(!1),
            { user: g, status: p, userIsReady: v } = (0, ei.A)(),
            [b, k] = (0, s.useState)(null),
            [y, j] = (0, s.useState)(null),
            C = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              e && h(!1), k(null), j(null);
            },
            w = m();
          (0, s.useEffect)(() => {
            w && C();
          }, [w]),
            ea({ enabled: u });
          let S = !(0, x.l)(!0),
            { isOpen: I, onOpen: B, onClose: L } = (0, $.useDisclosure)(),
            _ = (0, f.useStyleConfig)("TopNavBar");
          return (0, a.jsxs)(V.VStack, {
            spacing: 0,
            children: [
              (0, a.jsxs)(T.Flex, {
                __css: _,
                children: [
                  (0, a.jsx)(J.HStack, {
                    flexShrink: 0,
                    gap: 4,
                    children: (0, a.jsx)(e5.e, {
                      onClick: () => {
                        C(!0);
                      },
                      color: "black",
                    }),
                  }),
                  n &&
                    (0, a.jsx)(e8, {
                      isExpandedByDefault: !0,
                      onNavBarClose: () => r(!1),
                    }),
                  (0, a.jsx)(e3, {
                    opened: u && !S,
                    selectedNavLevel1: b,
                    selectedNavLevel2: y,
                    setSelectedNavLevel1: k,
                    setSelectedNavLevel2: j,
                    onClose: (e) => {
                      C(e);
                    },
                  }),
                  v &&
                    (0, a.jsxs)(J.HStack, {
                      gap: 4,
                      children: [
                        (0, a.jsx)(er.i, {
                          icon: "search",
                          variant: S ? "icon" : "mobileNavBar",
                          ariaLabel: "Search",
                          "data-testid": "Search",
                          onClick: () => {
                            C(!0), S ? r(!0) : d(!0);
                          },
                          analytics: {
                            click_location: "header",
                            click_name: "Search",
                          },
                        }),
                        "authenticated" === p
                          ? (0, a.jsx)(te, {
                              badgeText:
                                null == g
                                  ? void 0
                                  : null === (t = g.firstName) || void 0 === t
                                    ? void 0
                                    : t.substring(0, 1).toLocaleUpperCase(),
                              badgePosition: "center-right",
                              variant: "bdna",
                              children: (0, a.jsx)(er.i, {
                                as: et(),
                                href: "/me/account",
                                icon: "profile",
                                variant: S ? "icon" : "mobileNavBar",
                                "data-testid": "Profile",
                                ariaLabel: "Profile",
                              }),
                            })
                          : (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)(er.i, {
                                  icon: "profile",
                                  variant: S ? "icon" : "mobileNavBar",
                                  ariaLabel: "Account logo log in",
                                  dataTestId: "Account logo log in",
                                  isActive: I,
                                  onClick: () => {
                                    C(!0), B();
                                  },
                                }),
                                (0, a.jsx)(el.O, {
                                  isOpen: I,
                                  onAuthenticated: L,
                                  onClose: L,
                                  showLogin: !0,
                                }),
                              ],
                            }),
                        (0, a.jsx)(te, {
                          badgeText: i && i > 0 ? i : void 0,
                          badgePosition: "center-right",
                          children: (0, a.jsx)(er.i, {
                            icon: "cart",
                            variant: S ? "icon" : "mobileNavBar",
                            ariaLabel: "Cart",
                            "data-testid": "Cart",
                            onClick: () => {
                              l.push("/basket"), C(!0);
                            },
                            analytics: {
                              click_location: "header",
                              click_name: "Cart",
                            },
                          }),
                        }),
                        !S &&
                          (0, a.jsx)(es, {
                            onClick: () => {
                              u ? h(!1) : h(!0), k(null), j(null);
                            },
                            isActive: u,
                          }),
                      ],
                    }),
                ],
              }),
              (0, a.jsx)(eD, { isVisible: o, onOverlayClose: () => d(!1) }),
            ],
          });
        },
        ti = (e) => (0, a.jsx)(tt, { ...e, numCartItems: e.numCartItems }),
        ta = (e) => {
          let { children: t } = e,
            { showMiniCart: i } = (0, d.B_)(),
            s = (0, l.useBreakpointValue)([3, 4, 8]),
            c = (0, n.useToken)("sizes", s);
          return (0, a.jsx)(r.Box, {
            as: o.P.div,
            display: "flex",
            bottom: s,
            width: "calc(100% - (".concat(c, "*2))"),
            left: s,
            filter: "drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.24))",
            justifyContent: "center",
            gap: 2,
            alignItems: "center",
            zIndex: i ? "banner" : "dropdown",
            position: "fixed",
            children: t,
          });
        },
        tl = (e) => {
          let { children: t, isRetracted: i } = e,
            { showMiniCart: l } = (0, d.B_)();
          return (0, a.jsx)(r.Box, {
            as: o.P.div,
            layout: !0,
            layoutRoot: !0,
            initial: { top: 0 },
            animate: { top: i ? "-140px" : 0 },
            zIndex: l ? "dropdown" : "banner",
            position: "sticky",
            children: t,
          });
        },
        tn = () => {
          let e = (0, s.useRef)(null),
            t = (0, s.useRef)(null),
            { cart: i } = (0, d.B_)(),
            l = m();
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(tl, {
                isRetracted: l,
                children: [
                  (0, a.jsx)(ti, {
                    numCartItems: null == i ? void 0 : i.totalQuantity,
                  }),
                  (0, a.jsx)(r.Box, {
                    ref: t,
                    id: Z,
                    display: "block",
                    position: "absolute",
                    width: "100%",
                  }),
                ],
              }),
              (0, a.jsxs)(ta, {
                children: [
                  (0, a.jsx)(r.Box, {
                    ref: e,
                    id: "dockSiblingContainer",
                    "data-testid": "dockSiblingContainer",
                    display: "contents",
                  }),
                  (0, a.jsx)(Q, {}),
                ],
              }),
            ],
          });
        };
    },
    54637: (e, t, i) => {
      i.d(t, { O: () => d });
      var a = i(94799),
        l = i(4306),
        n = i(81352),
        r = i(98577),
        o = i(57948),
        s = i(20562);
      let d = () => {
        let e = (0, o.l)(!0),
          { data: t } = (0, r.A)(),
          { cart: i } = (0, n.B_)(),
          d =
            null == i
              ? void 0
              : i.items.some((e) => !e.product.atLeastOneInStock);
        return e && (null == t ? void 0 : t.length) && i
          ? (0, a.jsx)(l.Box, {
              position: "fixed",
              bottom: 0,
              zIndex: 95,
              width: "100%",
              children: (0, a.jsx)(s.c, {
                cartPricing: null == i ? void 0 : i.pricing,
                cartAppliedDiscounts:
                  null == i ? void 0 : i.pricing.cartDiscounts.discounts,
                discounts: t,
                hasItemsShortOfStock: d,
                children: (0, a.jsx)(l.Box, { minHeight: 16 }),
              }),
            })
          : null;
      };
    },
    59602: (e, t, i) => {
      i.d(t, { O: () => a });
      let a = (0, i(2568).Dt)({
        baseStyle: {
          borderRadius: "50%",
          background: "primary.black.10",
          width: 4,
          height: 4,
          color: "primary.white",
          textStyle: "function.text.medium",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        variants: {
          bdna: { bgGradient: "bdna" },
          white: { background: "primary.white", color: "primary.black.10" },
        },
      });
    },
    69444: (e, t, i) => {
      i.d(t, { V: () => r });
      var a = i(24689),
        l = i(81352),
        n = i(96543);
      let r = (e, t) => {
        var i, r;
        let {
            ignoreCriteria: o = [],
            maxItemsPerBrand: s,
            size: d,
            priceVariance: c,
            matchProductType: u,
            getProductsBySearchRandomSeed: h,
          } = e,
          { cart: x, isCartLoading: m } = (0, l.B_)(),
          g =
            null !==
              (i =
                null == x
                  ? void 0
                  : x.items.map((e) => {
                      let { product: t } = e;
                      return t.id;
                    })) && void 0 !== i
              ? i
              : [],
          p = [];
        (null == o ? void 0 : o.find((e) => "producttypes" == e)) &&
          (p = [
            ...new Set(
              null !==
                (r =
                  null == x
                    ? void 0
                    : x.items
                        .flatMap((e) => {
                          var t;
                          let { product: i } = e;
                          return null !==
                            (t = i.masterVariant.productTypeKeys) &&
                            void 0 !== t
                            ? t
                            : [];
                        })
                        .filter((e) => e && "masks" !== e)) && void 0 !== r
                ? r
                : [],
            ),
          ]);
        let v = !!g.length,
          b = !!((null == t ? void 0 : t.enabled) !== !1 && !m),
          k = (0, n.ZU)(
            { size: 8 },
            { enabled: b && !v, select: (e) => e.results },
            h,
          ),
          f = (0, n.rh)(
            {
              productIds: g,
              productTypesToIgnore: p,
              maxItemsPerBrand: s,
              size: d,
              matchProductType: u,
              productTypes: [a.ch.HAIRCARE, a.ch.SKINCARE],
              priceVariance: c,
            },
            { enabled: b && v },
          );
        return v ? f : k;
      };
    },
    73929: (e, t, i) => {
      i.d(t, { NavPillLink: () => p });
      var a = i(94799),
        l = i(38236),
        n = i(31634),
        r = i(89136),
        o = i(4306),
        s = i(36008),
        d = i.n(s),
        c = i(92616),
        u = i(17422),
        h = i(57184),
        x = i(82536),
        m = i(39693),
        g = i(43485);
      let p = (e) => {
        let {
            label: t,
            href: i,
            ariaLabel: s,
            dataTestId: p,
            onClick: v,
            analytics: b,
            withArrow: k = !0,
            withArrowHover: f = !0,
            tagLabel: y,
            variant: j = "base",
          } = e,
          { user: C } = (0, x.A)(),
          { sendAnalyticsEvent: w } = (0, h.s)(),
          S = () => {
            if (b) {
              let e = null == C ? void 0 : C.segmentId,
                t = { ...b };
              C && (t.bdna_segment_id = e),
                w(c.m3.navigationClicked.bind(c.m3), u.s.NAVIGATION_CLICKED, t);
            }
          };
        return (0, a.jsx)(l.Link, {
          as: d(),
          href: i,
          onClick: () => {
            null == v || v(), S();
          },
          "aria-label": s,
          "data-testid": p,
          _hover: {
            lg: {
              ".pillBox": { bgColor: "primary.warmGrey.90" },
              ".pillIcon": { visibility: "visible" },
            },
          },
          children: (0, a.jsxs)(n.Flex, {
            className: "pillBox",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "full",
            paddingX: 4,
            paddingY: 1,
            gap: 2,
            width: k ? "100%" : "min",
            children: [
              (0, a.jsxs)(n.Flex, {
                children: [
                  (0, a.jsx)(r.Text, {
                    color:
                      "baseGrey" === j
                        ? "primary.warmGrey.70"
                        : "primary.black.10",
                    textStyle:
                      "heading" === j || "headingBlack" === j
                        ? "heading.h5.bold"
                        : "function.text.large",
                    marginRight: 4,
                    children: t,
                  }),
                  y && (0, a.jsx)(g.v, { variant: "bdnaSquare", tagLabel: y }),
                ],
              }),
              k &&
                (0, a.jsx)(o.Box, {
                  className: "pillIcon",
                  visibility: f ? "hidden" : "visible",
                  children: (0, a.jsx)(m.ArrowRightIcon, {
                    width: 6,
                    height: 6,
                  }),
                }),
            ],
          }),
        });
      };
    },
    74607: (e, t, i) => {
      i.d(t, { m: () => v });
      var a = i(94799),
        l = i(98814),
        n = i(38236),
        r = i(60968),
        o = i(55272),
        s = i(31634),
        d = i(4306),
        c = i(89136),
        u = i(4099),
        h = i(36008),
        x = i.n(h),
        m = i(93869),
        g = i(57546),
        p = i(43485);
      let v = (e) => {
        var t, i, h, v;
        let { promoCmsData: b, variant: k = "default", sizes: f } = e,
          y = (0, l.useMultiStyleConfig)("CategoryPromoCard", { variant: k });
        return (
          b &&
          (0, a.jsx)(n.Link, {
            href: b.ctaHref,
            "aria-label": "Go to promotions page for ".concat(b.title, " "),
            "data-testid": "Go to promotions page for ".concat(b.title, " "),
            style: { textDecoration: "none", display: "flex" },
            as: x(),
            width: "100%",
            children: (0, a.jsxs)(r.Card, {
              __css: y.container,
              children: [
                (0, a.jsx)(o.CardHeader, {
                  flex: 1,
                  children: (0, a.jsxs)(s.Flex, {
                    flexDirection: "column",
                    justifyContent: "space-between",
                    h: "100%",
                    padding: "promoCardSubNav" === k ? 4 : 3,
                    children: [
                      (0, a.jsxs)(d.Box, {
                        children: [
                          !!b.tag &&
                            (0, a.jsx)(d.Box, {
                              marginBottom: 4,
                              children: (0, a.jsx)(p.v, {
                                variant: "bdnaSquare",
                                bg: "semantic.orange.20",
                                children: b.tag,
                              }),
                            }),
                          (null === (t = b.title) || void 0 === t
                            ? void 0
                            : t.trim()) &&
                            (0, a.jsx)(c.Text, {
                              textStyle:
                                "promoCardSubNav" === k
                                  ? "body.semibold"
                                  : {
                                      base: "function.text.medium",
                                      lg: "function.text.large",
                                    },
                              color: "primary.black.10",
                              fontWeight: 600,
                              children: b.title,
                            }),
                          (null === (i = b.description) || void 0 === i
                            ? void 0
                            : i.trim()) &&
                            (0, a.jsx)(c.Text, {
                              marginTop: 2,
                              textStyle:
                                "promoCardSubNav" === k
                                  ? "function.caption.small"
                                  : {
                                      base: "function.caption.small",
                                      lg: "function.caption.medium",
                                    },
                              color: "primary.black.10",
                              children: b.description,
                            }),
                        ],
                      }),
                      !!b.ctaText &&
                        (0, a.jsx)(m.$, {
                          as: "span",
                          variant: "tertiary",
                          marginTop: 6,
                          children: b.ctaText,
                        }),
                    ],
                  }),
                }),
                (0, a.jsx)(u.CardBody, {
                  flex: 1,
                  position: "relative",
                  children: (0, a.jsx)(g.G, {
                    image: {
                      src:
                        "default" === k
                          ? null !== (h = b.portraitImage) && void 0 !== h
                            ? h
                            : ""
                          : null !== (v = b.landscapeImage) && void 0 !== v
                            ? v
                            : "",
                      alt: "",
                      fill: !0,
                      sizes: f,
                    },
                    objectFit: "cover",
                    objectPosition: "center",
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    75076: (e, t, i) => {
      i.d(t, { c: () => a.c });
      var a = i(20562);
    },
    75619: (e, t, i) => {
      i.d(t, { j: () => x });
      var a = i(94799),
        l = i(4306),
        n = i(22387),
        r = i(34150);
      i(34023);
      var o = i(24631),
        s = i(2906),
        d = i(90609),
        c = i(91130),
        u = i(57403),
        h = i(12963);
      let x = (e) => {
        var t, i;
        let {
            bundle: x,
            showProductsListAccordion: m,
            analytics: g,
            context: p,
          } = e,
          v = {
            ...g,
            products: [
              null === (t = x.masterVariant.products) || void 0 === t
                ? void 0
                : t.map((e) =>
                    (0, o.n)(e, { index: null == p ? void 0 : p.index }),
                  ),
            ],
          };
        return (0, a.jsxs)(l.Box, {
          backgroundColor: "primary.white",
          children: [
            (0, a.jsx)(h.u, {
              item: x,
              analytics: v,
              config: { canEditQuantity: !0, variant: h.d.Group },
            }),
            m &&
              (0, a.jsx)(d.n, {
                py: 3,
                allowToggle: !0,
                variant: c.T.Secondary,
                children: (0, a.jsx)(d.n.Item, {
                  expandedTitle: "Hide products",
                  title: "Show products",
                  variant: c.T.Secondary,
                  children: (0, a.jsx)(l.Box, {
                    pl: 6,
                    children: (0, a.jsx)(n.VStack, {
                      gap: 2,
                      divider: (0, a.jsx)(r.StackDivider, {
                        borderColor: "primary.warmGrey.80",
                      }),
                      children:
                        null === (i = x.masterVariant.products) || void 0 === i
                          ? void 0
                          : i.map((e, t) =>
                              (0, a.jsx)(
                                u.A,
                                {
                                  orientation: u.y.HORIZONTAL,
                                  item: e,
                                  index: t,
                                  config: {
                                    fullWidth: !0,
                                    canEditQuantity: !1,
                                    linkTarget: s.M.QUICK_VIEW,
                                    variant: h.d.ChildLineItem,
                                  },
                                },
                                t,
                              ),
                            ),
                    }),
                  }),
                }),
              }),
          ],
        });
      };
    },
    80950: (e, t, i) => {
      i.d(t, { i: () => x });
      var a = i(94799),
        l = i(98814),
        n = i(4306),
        r = i(31634),
        o = i(92616),
        s = i(82536),
        d = i(57948),
        c = i(39693),
        u = i(46792);
      let h = {
          favorites: (0, a.jsx)(c.HeartIcon, { width: 6, height: 6 }),
          bdnaProfile: (0, a.jsx)(c.ProfileStarIcon, { width: 6, height: 6 }),
          profile: (0, a.jsx)(c.ProfileIcon, { width: 6, height: 6 }),
          search: (0, a.jsx)(c.SearchIcon, { width: 6, height: 6 }),
          cart: (0, a.jsx)(c.BagIcon, { width: 6, height: 6 }),
          home: (0, a.jsx)(c.HomeIcon, { width: 6, height: 6 }),
          cross: (0, a.jsx)(c.CrossIcon, { width: 6, height: 6 }),
          bottles: (0, a.jsx)(u.d, { height: 6, width: 6 }),
          offers: (0, a.jsx)(c.TagIcon, { height: 6, width: 6 }),
        },
        x = (e) => {
          let {
              onMouseEnter: t,
              onClick: i,
              variant: u = "icon",
              children: x,
              ariaLabel: m,
              dataTestId: g,
              isActive: p,
              icon: v,
              analytics: b,
              buttonRef: k,
              as: f = "button",
              href: y,
              withIcon: j,
              forceArrowIcon: C = !1,
            } = e,
            w = (0, l.useStyleConfig)("NavButton", { variant: u }),
            { user: S } = (0, s.A)(),
            I = (0, d.l)(),
            B = () => {
              if (b) {
                let e = null == S ? void 0 : S.segmentId,
                  t = { ...b };
                S && (t.bdna_segment_id = e),
                  null === o.m3 || void 0 === o.m3 || o.m3.navigationClicked(t);
              }
            };
          return (0, a.jsxs)(n.Box, {
            as: f,
            href: y,
            __css: w,
            "aria-label": m,
            "data-testid": g,
            "aria-pressed": p,
            whiteSpace: "nowrap",
            onClick: (e) => {
              B(), i && i(e);
            },
            onMouseEnter: I ? void 0 : t,
            ref: k,
            py: { base: 2, lg: 0 },
            children: [
              v
                ? j
                  ? (0, a.jsxs)(r.Flex, { gap: 2, children: [h[v], " ", x] })
                  : h[v]
                : x,
              (null != C ? C : j && !v) &&
                (0, a.jsx)(c.ArrowRightIcon, { width: 6, height: 6 }),
            ],
          });
        };
    },
    89245: (e, t, i) => {
      i.d(t, { I: () => p });
      var a = i(94799),
        l = i(98814),
        n = i(4306),
        r = i(59164),
        o = i(25685),
        s = i(24854),
        d = i(34023),
        c = i(39693),
        u = i(39311),
        h = i(26408);
      let x = { light: "searchLight", lighter: "searchLighter" },
        m = { initial: { height: 0 }, animate: { height: "min-content" } },
        g = {
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { delay: 0.4 } },
          exit: { opacity: 0 },
        },
        p = (e) => {
          var t;
          let {
              width: i,
              marginX: p,
              onSearchTermChange: v,
              zIndex: b,
              hidden: k,
              placeholder: f,
              isDropdownVisible: y = !1,
              onFocus: j,
              withClearButton: C,
              onSearch: w,
              form: S,
              initialValue: I = "",
              inputName: B,
              variant: L = "lighter",
              size: _ = "lg",
              autocompleteEnabled: T,
              children: E,
            } = e,
            [A, N] = (0, d.useState)(
              null !==
                (t = B && S && (null == S ? void 0 : S.getValues()[B])) &&
                void 0 !== t
                ? t
                : I,
            ),
            V = (0, l.useMultiStyleConfig)("SearchBar", { variant: L }),
            D = (e) => {
              null == v || v(e),
                N(e),
                S && B ? S.setValue(B, e) : T && (null == w || w(e));
            },
            P = (e) => (D(e.target.value), new Promise(() => !0)),
            R = x[L],
            O = C && A;
          return (0, a.jsxs)(n.Box, {
            __css: V.searchContainer,
            children: [
              (0, a.jsxs)(r.InputGroup, {
                marginX: p,
                hidden: k,
                width: i,
                color: "primary.black.10",
                role: "search",
                zIndex: b,
                onFocus: j,
                id: "search-bar",
                children: [
                  (0, a.jsx)(o.InputLeftElement, {
                    pointerEvents: "none",
                    height: "sm" === _ ? 14 : 16,
                    width: "sm" === _ ? 14 : 16,
                    transform: "none",
                    children: (0, a.jsx)(c.SearchIcon, { width: 6, height: 6 }),
                  }),
                  (0, a.jsx)(u.p, {
                    type: "text",
                    enterKeyHint: "search",
                    paddingLeft: 12,
                    variant: R,
                    ariaLabel: "Search field",
                    "data-testid": "Search field",
                    placeholder: f,
                    name: B,
                    height: "sm" === _ ? 14 : 16,
                    ...(S
                      ? { register: S.register, rules: { onChange: P } }
                      : {
                          value: A,
                          onChange: P,
                          onKeyDown: (e) => {
                            "Enter" === e.key &&
                              A.replace(/\s/g, "").length &&
                              (e.currentTarget.blur(), null == w || w(A));
                          },
                        }),
                  }),
                  O &&
                    (0, a.jsx)(o.InputRightElement, {
                      height: "sm" === _ ? 14 : 16,
                      width: "sm" === _ ? 14 : 16,
                      transform: "none",
                      children: (0, a.jsx)(s.IconButton, {
                        "aria-label": "clear input",
                        "data-testid": "clear input",
                        background: "unset",
                        _hover: { bgColor: "primary.warmGrey.70" },
                        icon: (0, a.jsx)(c.CrossIcon, { height: 6, width: 6 }),
                        onClick: () => D(""),
                        h: 10,
                      }),
                    }),
                ],
              }),
              y &&
                (0, a.jsx)(h.e, {
                  __css: V.resultsContainer,
                  mt: "sm" === _ ? -14 : -16,
                  ...m,
                  children: (0, a.jsx)(h.e, { ...g, children: E }),
                }),
            ],
          });
        };
    },
    96871: (e, t, i) => {
      i.d(t, { NavImageLink: () => g });
      var a = i(94799),
        l = i(38236),
        n = i(4306),
        r = i(77909),
        o = i(89136),
        s = i(36008),
        d = i.n(s),
        c = i(92616),
        u = i(17422),
        h = i(57184),
        x = i(82536),
        m = i(55133);
      let g = (e) => {
        let {
            label: t,
            href: i,
            ariaLabel: s,
            dataTestId: g,
            onClick: p,
            analytics: v,
            icon: b,
            imgSrc: k,
          } = e,
          { user: f } = (0, x.A)(),
          { sendAnalyticsEvent: y } = (0, h.s)(),
          j = () => {
            if (v) {
              let e = null == f ? void 0 : f.segmentId,
                t = { ...v };
              f && (t.bdna_segment_id = e),
                y(c.m3.navigationClicked.bind(c.m3), u.s.NAVIGATION_CLICKED, t);
            }
          };
        return (0, a.jsx)(l.Link, {
          as: d(),
          href: i,
          onClick: () => {
            null == p || p(), j();
          },
          "aria-label": s,
          "data-testid": g,
          _hover: {
            lg: {
              ".pillImage": { bgColor: "primary.warmGrey.80" },
              ".pillBox": { bgColor: "primary.warmGrey.90" },
            },
          },
          children: (0, a.jsx)(n.Box, {
            bgColor: "primary.white",
            padding: 2,
            borderRadius: "full",
            width: "100%",
            className: "pillBox",
            children: (0, a.jsxs)(r.HStack, {
              gap: 4,
              height: 14,
              children: [
                (0, a.jsx)(n.Box, {
                  className: "pillImage",
                  borderRadius: "full",
                  padding: 3,
                  width: 14,
                  height: 14,
                  backgroundImage:
                    k && (0, m.toContentfulImageUrl)(k, { w: 100, fm: "webp" }),
                  backgroundRepeat: "none",
                  backgroundSize: "cover",
                  children: b,
                }),
                (0, a.jsx)(o.Text, {
                  userSelect: "none",
                  textStyle: "function.text.large",
                  minWidth: 45,
                  children: t,
                }),
              ],
            }),
          }),
        });
      };
    },
    98577: (e, t, i) => {
      i.d(t, { A: () => n });
      var a = i(50692),
        l = i(47838);
      let n = () =>
        (0, a.useQuery)({
          queryKey: ["progressiveDiscounts"],
          queryFn: () => l.L.getProgressiveDiscounts(),
        });
    },
  },
]);
