(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/mixwith",
      "services/EventEmitter",
      "toolbox/deepMerge",
      "toolbox/mediaQuery",
      "stores/ModifaceVTO",
      "core/ComponentRegistry",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g;
      return {
        setters: [
          function (a) {
            b = a.Mixin;
          },
          function (a) {
            c = a.Event;
          },
          function (a) {
            d = a.deepMerge;
          },
          function (a) {
            e = a.mediaQuery;
          },
          function (a) {
            f = a.default;
          },
          function (a) {
            g = a.default;
          },
        ],
        execute: function () {
          a(
            "default",
            b(
              (a) =>
                class extends a {
                  constructor(a) {
                    let b =
                      1 < arguments.length && arguments[1] !== void 0
                        ? arguments[1]
                        : {};
                    super(
                      a,
                      d(
                        {
                          onViewportAnalytics: null,
                          analyticsObserverOptions: {},
                        },
                        b,
                      ),
                    );
                  }
                  afterInit() {
                    super.afterInit(),
                      this.options.onViewportAnalytics &&
                        this.initAnalyticsObserver();
                  }
                  initAnalyticsObserver() {
                    const a = this.options.analyticsObserverOptions;
                    (this.analyticsObserver = new window.IntersectionObserver(
                      this.onAnalyticsObserve.bind(this),
                      a,
                    )),
                      this.analyticsObserver.observe(this.element);
                  }
                  onAnalyticsObserve(a) {
                    a.forEach((a) => {
                      a.isIntersecting &&
                        c.emit(
                          "analytics.event",
                          this.options.onViewportAnalytics,
                        );
                    });
                  }
                  _initEventAnalytics() {
                    let a =
                        0 < arguments.length && arguments[0] !== void 0
                          ? arguments[0]
                          : null,
                      b =
                        !!(1 < arguments.length && arguments[1] !== void 0) &&
                        arguments[1],
                      c = a || this.element;
                    !a ||
                      b ||
                      a.getAttribute("data-analytics") ||
                      (c = this.element),
                      (this.analytics = this.getAnalyticsAttributeData(c));
                  }
                  getAnalyticsAttributeData(a) {
                    const b = a && a.getAttribute("data-analytics");
                    let c;
                    if (b)
                      try {
                        c = JSON.parse(b);
                      } catch (b) {
                        window.lora.debug &&
                          console.error(
                            'Please check that the data-analytics you have passed for "'.concat(
                              a,
                              '" respect JSON format',
                            ),
                          );
                      }
                    return c && (c = this._setAnalytics(c)), c || null;
                  }
                  _setAnalytics(a) {
                    let b;
                    return a
                      ? ((b = a.breakpoints
                          ? this.getCurrentViewportAnalytics(a.breakpoints)
                          : a),
                        b)
                      : null;
                  }
                  getCurrentViewportAnalytics(a) {
                    let b;
                    return (
                      Object.entries(a).some((a) => {
                        let [c, d] = a;
                        const f = e.is(c);
                        return f && (b = d), f;
                      }),
                      b
                    );
                  }
                  getAnalytics(a) {
                    let b = this.analytics;
                    return (
                      b && Object.keys(b).length
                        ? (a &&
                            a.analytics &&
                            (Array.isArray(b.events) ||
                            Array.isArray(a.analytics.events)
                              ? (!Array.isArray(b.events) && (b.events = [b]),
                                !Array.isArray(a.analytics.events) &&
                                  (a.analytics.events = [a.analytics]),
                                (b = d(b, a.analytics, {
                                  arrayMerge: (a, b) => a.concat(b),
                                })))
                              : (b = d(b, a.analytics))),
                          delete b.afterInit)
                        : (b = a ? a.analytics : null),
                      b
                    );
                  }
                  updateVirtualPage(a, b) {
                    a &&
                      Object.keys(a).length &&
                      c.emit("analytics.virtualPage", a, b);
                  }
                  sendAnalytics(a) {
                    if (a && Object.keys(a).length) {
                      const b = a.events || [a];
                      b.forEach((a) => {
                        switch (a.eventType) {
                          case "productImpression":
                            this.sendProductImpressionToAnalytics();
                            break;
                          case "productClick":
                            this.sendProductClickToAnalytics();
                            break;
                          default:
                            c.emit("analytics.event", a);
                        }
                      });
                    }
                  }
                  sendCustomAnalytics(a) {
                    const { customAnalytics: b } = a.dataset;
                    b && c.emit("analytics.event", JSON.parse(b));
                  }
                  getProductAnalytics() {
                    const a = this.element.querySelector(
                      "[data-analytics-wait]",
                    );
                    return a
                      ? ((this.dynamicAnalyticsCallback = null),
                        g.registerElement(a),
                        new Promise((a) => {
                          this.dynamicAnalyticsCallback = (b) => {
                            const c = b.detail.analytics;
                            this.analytics &&
                              this.analytics.products &&
                              c &&
                              c.product &&
                              this.analytics.products.forEach((a) => {
                                c.product.pid === a.pid &&
                                  Object.assign(a, c.product);
                              }),
                              b.stopPropagation(),
                              a(this.analytics);
                          };
                        }))
                      : Promise.resolve(this.analytics);
                  }
                  getIndex() {
                    const a =
                      this.selectors.indexElement ||
                      (this.element.hasAttribute("data-index") &&
                        this.element) ||
                      (this.element.parentElement.hasAttribute("data-index") &&
                        this.element.parentElement) ||
                      null;
                    return a && a.getAttribute("data-index");
                  }
                  getPromotionCreative() {
                    const a =
                        this.element.closest("[data-js-layout]") ||
                        this.element.closest("[data-js-container]") ||
                        this.element,
                      b = this.getAnalyticsAttributeData(a);
                    return (
                      (b && b.promoObject && b.promoObject.creative) || "banner"
                    );
                  }
                  getPromotionPosition() {
                    const a = this.getIndex();
                    return "slot".concat(
                      this.analytics.promoObject.position || (a && a + 1) || 1,
                    );
                  }
                  sendPromoImpressionsToAnalytics() {
                    if (
                      this.analytics &&
                      this.analytics.promoObject &&
                      !this.element.hasAttribute("data-is-duplicate")
                    ) {
                      const a = this.getPromotionPosition(),
                        b = this.getPromotionCreative(),
                        d = this.analytics.promoObject.name || "";
                      c.emit("analytics.event", {
                        eventType: "promoImpression",
                        event: "nievent",
                        action: "Promotion Impressions",
                        label: "Promotion Impressions",
                        extraData: { event_name: "view_promotion" },
                        promoObject: {
                          id: this.analytics.promoObject.id,
                          name:
                            "video" === this.analytics.promoObject.id
                              ? d
                              : d.toLowerCase(),
                          creative: b ? b.toLowerCase() : "",
                          position: a,
                        },
                        ecommerce: {},
                      }),
                        (this.element.dataset.tracked = !0);
                    }
                  }
                  setIndexesForContainer(a) {
                    if (!a) return;
                    let b = a.querySelectorAll("[data-js-product-item]");
                    0 === b.length && (b = a.children),
                      Array.from(b).forEach((a, b) => {
                        a.hasAttribute("data-index") ||
                          a.setAttribute("data-index", b);
                      });
                  }
                  sendPromoClickToAnalytics() {
                    let a =
                      0 < arguments.length && arguments[0] !== void 0
                        ? arguments[0]
                        : this.analytics;
                    if (a.promoObject) {
                      const b = this.getPromotionPosition(),
                        d = this.getPromotionCreative(),
                        e = a.promoObject.name || "",
                        f = ""
                          .concat(
                            "video" === a.promoObject.id ? e : e.toLowerCase(),
                            "::",
                          )
                          .concat(a.promoObject.id);
                      c.emit("analytics.event", {
                        event: "promotionClick",
                        action: "Promotion Click",
                        label: f,
                        extraData: { event_name: "select_promotion" },
                        ecommerce: {
                          promoClick: {
                            promotions: [
                              {
                                id: a.promoObject.id,
                                name:
                                  "video" === a.promoObject.id
                                    ? e
                                    : e.toLowerCase(),
                                creative: d ? d.toLowerCase() : "",
                                position: b,
                              },
                            ],
                          },
                        },
                      });
                    }
                  }
                  hasProductAnalytics() {
                    return (
                      this.analytics &&
                      this.analytics.products &&
                      0 < this.analytics.products.length &&
                      !this.element.hasAttribute("data-is-duplicated")
                    );
                  }
                  sendProductImpressionToAnalytics() {
                    this.hasProductAnalytics() &&
                      (c.emit("analytics.event", {
                        eventType: "productImpression",
                        action: "Product Impressions",
                        extraData: { event_name: "view_item_list" },
                        ecommerce: {},
                        uniqueImpression: this.analytics.uniqueImpression,
                        sfb2ccAnalyticsData: this.getSfb2cAnalyticsData(),
                        allowMultipleImpression:
                          this.options && this.options.allowMultipleImpression,
                        uniqueImpressionPerMaster:
                          this.options &&
                          this.options.uniqueImpressionPerMaster,
                        product: this.getEnrichedProductsData(),
                      }),
                      (this.element.dataset.tracked = !0));
                  }
                  sendProductClickToAnalytics(a) {
                    if (
                      (!a || !a.target.matches("[data-js-swatch]")) &&
                      this.analytics &&
                      this.analytics.products &&
                      this.analytics.products.length
                    ) {
                      const b = this.element.closest("[data-js-container]"),
                        d = this.getAnalyticsAttributeData(b),
                        e =
                          this.getEcommerceEventLabel(
                            this.analytics.products,
                          ) || "Product Click";
                      this.analytics.products.forEach((a) => {
                        delete a.placement;
                      }),
                        c.emit("analytics.event", {
                          eventType: "productClick",
                          event: "productClick",
                          category: "Ecommerce",
                          action: "Product Click",
                          label: e,
                          extraData: { event_name: "select_item" },
                          ecommerce: {
                            click: {
                              actionField: { list: d ? d.placement : "" },
                              products: this.analytics.products,
                            },
                          },
                        }),
                        this.sendCustomAnalytics(a.currentTarget);
                    }
                  }
                  getEcommerceEventLabel(a) {
                    if (!a || !a.length) return "";
                    const b = this.getProductsType(a),
                      c = [];
                    return (
                      "standardProductType" === b
                        ? (c.push(a[0].name && a[0].name.toLowerCase()),
                          c.push(a[0].id))
                        : "bundleProductType" === b
                          ? c.push(a[0].id)
                          : ("setProductType" === b ||
                              "nonSetProductType" === b) &&
                            a.forEach((a) => {
                              c.push(a.id);
                            }),
                      c.join("::")
                    );
                  }
                  getProductsType(a) {
                    const b = a.length;
                    if (1 === b && !a[0].isBundle) return "standardProductType";
                    if (1 === b && a[0].isBundle) return "bundleProductType";
                    if (1 < b) {
                      const b = a.some(
                        (a) => !a.isProductSet && !a.productSetId,
                      );
                      return (!b && "setProductType") || "nonSetProductType";
                    }
                    return "";
                  }
                  getProductImpressionKey() {
                    const a = this.element.closest("[data-js-impression-key]");
                    return a && a.getAttribute("data-js-impression-key");
                  }
                  isVTOActivated(a) {
                    const b = f.get();
                    return !!(
                      b &&
                      "consultation" !== b.mode &&
                      (b.isVTOActivated ||
                        (b.vtoActivationHistory && b.vtoActivationHistory[a]))
                    );
                  }
                  getSfb2cAnalyticsData() {
                    const a = this.element.closest("[data-js-container]"),
                      b = this.getAnalyticsAttributeData(a),
                      c = b && b.placement,
                      e = b && b.sfb2cc;
                    let f = {
                      pid: "",
                      sku: "",
                      impressionType: "none",
                      recommenderName: "",
                      placement: c ? c.toLowerCase() : "",
                      sfb2cc: e,
                    };
                    return (
                      this.analytics.sfb2cc &&
                        (f = d(f, this.analytics.sfb2cc)),
                      f
                    );
                  }
                  getProductPlacement(a, b) {
                    return (
                      a.placement ||
                      (b && b.placement && b.placement.toLowerCase()) ||
                      ""
                    );
                  }
                  getProductPosition(a) {
                    let b = this.getIndex();
                    return (
                      b ||
                        (this.setIndexesForContainer(a), (b = this.getIndex())),
                      +b + 1
                    );
                  }
                  getProductRecommendationProvider(a) {
                    return (
                      (a &&
                        a.recommendationsProvider &&
                        a.recommendationsProvider.toLowerCase()) ||
                      ""
                    );
                  }
                  getEnrichedProductsData() {
                    const a = this.element.closest("[data-js-container]"),
                      b = this.getAnalyticsAttributeData(a);
                    return this.analytics.products.map(
                      (c) => (
                        (c.placement = this.getProductPlacement(c, b)),
                        (c.position = this.getProductPosition(a)),
                        (c.recommendationsProvider =
                          this.getProductRecommendationProvider(b)),
                        this.isVTOActivated(this.options && this.options.pid) &&
                          (c.vtoState = "activated"),
                        this.getProductImpressionKey() &&
                          (c.impressionKey = this.getProductImpressionKey()),
                        c
                      ),
                    );
                  }
                  destroy() {
                    this.analyticsObserver &&
                      (this.analyticsObserver.unobserve(this.element),
                      this.analyticsObserver.disconnect()),
                      super.destroy();
                  }
                },
            ),
          );
        },
      };
    },
  );
  //# sourceMappingURL=Analytics.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/mixins/Analytics.js
