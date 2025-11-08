(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/ComponentRegistry",
      "core/Component",
      "core/mixwith",
      "services/EventEmitter",
      "toolbox/event",
      "toolbox/deepMerge",
      "toolbox/image",
      "mixins/Accessibility",
      "mixins/Analytics",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i, j, k, l, m, n;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              c = a.default;
            },
            function (a) {
              d = a.mix;
            },
            function (a) {
              e = a.Event;
            },
            function (a) {
              (f = a.on), (g = a.off), (h = a.trigger);
            },
            function (a) {
              i = a.deepMerge;
            },
            function (a) {
              (j = a.getAttributesOfOriginalImage), (k = a.changeImage);
            },
            function (a) {
              l = a.default;
            },
            function (a) {
              m = a.default;
            },
          ],
          execute: function () {
            a(
              "default",
              (n = class extends d(c).with(l, m) {
                constructor(a) {
                  let b =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    c = 2 < arguments.length ? arguments[2] : void 0;
                  super(
                    a,
                    i(
                      {
                        tileTemplateName: "producttile",
                        pid: null,
                        events: { variationUpdate: "product.variation.update" },
                        reloadData: { section: "search", expand: "helpers" },
                        classNames: {
                          buttonClass: "c-button",
                          loadingClass: "",
                          selected: "m-active",
                        },
                        isEditable: !1,
                        allowMultipleImpression: !1,
                        uniqueImpressionPerMaster: !1,
                        isPreventQtyUpdatedEvent: !1,
                        showBadgeOnlyOnFirstProductImage: !1,
                        selfContained: !1,
                      },
                      b,
                    ),
                    c,
                  );
                }
                afterInit() {
                  this.getProductAnalytics().then(() => {
                    this.sendProductImpressionToAnalytics();
                  }),
                    this.classNames.alternativeImageActive.length &&
                      this.element.classList.add(this.classNames.cssClass);
                }
                initCache() {
                  (this.selectors.productImageLink = this.element.querySelector(
                    "[data-js-product-image-link]",
                  )),
                    (this.selectors.image = this.element.querySelector(
                      "[data-js-product-image] img",
                    )),
                    (this.selectors.price = this.element.querySelector(
                      '[data-component="product/ProductPrice"]',
                    )),
                    (this.selectors.producttileactions =
                      this.element.querySelector(
                        "[data-js-producttile-actions]",
                      )),
                    (this.selectors.anchors = this.element.querySelectorAll(
                      "a:not([data-js-swatch]):not([data-js-writereview-product]):not([data-js-variation-link])",
                    )),
                    (this.selectors.productThumbnail =
                      this.element.querySelector(
                        "[data-js-product-thumbnail]",
                      )),
                    (this.classNames = {
                      cssClass: "c-product-tile__config",
                      alternativeImageActive: [],
                    }),
                    this.options.showBadgeOnlyOnFirstProductImage &&
                      this.classNames.alternativeImageActive.push(
                        "m-hide-badge",
                      ),
                    this.options.isEditable &&
                      ((this.selectors.remove =
                        this.element.querySelector("[data-js-remove]")),
                      (this.selectors.edit =
                        this.element.querySelector("[data-js-edit]"))),
                    (this.selectors.detailsButtons =
                      this.element.querySelectorAll("[data-js-details-link]"));
                }
                initState() {
                  (this.state.originalImageData = j(this.selectors.image)),
                    (this.state.productId =
                      this.element.getAttribute("data-pid"));
                }
                bindEvents() {
                  f(
                    "stepperInput.updated",
                    this.element,
                    this.onQuantityChanged.bind(this),
                  ),
                    f(
                      this.options.events.variationUpdate,
                      this.element,
                      this.onProductTileUpdate.bind(this),
                    ),
                    f(
                      "product.image.update",
                      this.element,
                      this.onProductImageUpdate.bind(this),
                    ),
                    f(
                      "comparisonButton.cta.update",
                      this.element,
                      this.onComparisonCTAUpdate.bind(this),
                    ),
                    f("lazyloaded", this.element, this.onLazyLoaded.bind(this)),
                    f("click", this.selectors.anchors, this.onClick.bind(this)),
                    f(
                      "analytics.dynamic.update",
                      this.element,
                      this.onDynamicAnalyticsUpdate.bind(this),
                    ),
                    f(
                      "comparisonButton.selected",
                      this.element,
                      this.onComparisonButtonSelected.bind(this),
                    ),
                    this.selectors.productImageLink &&
                      (f(
                        "click.productimagelink",
                        this.selectors.productImageLink,
                        this.onProductImageLinkClick.bind(this),
                      ),
                      f(
                        "keydown.productimagelink",
                        this.selectors.productImageLink,
                        this.onKeyboardControl.bind(this),
                      )),
                    this.options.showBadgeOnlyOnFirstProductImage &&
                      this.selectors.productThumbnail &&
                      f(
                        "carousel.slidechanged",
                        this.selectors.productThumbnail,
                        this.onMainImageChanged.bind(this),
                      ),
                    this.options.isEditable &&
                      (f(
                        "click",
                        this.selectors.remove,
                        this.onRemoveClick.bind(this),
                      ),
                      f(
                        "click",
                        this.selectors.edit,
                        this.onEditClick.bind(this),
                      )),
                    this.selectors.detailsButtons.length &&
                      f(
                        "click.selectableproducttile",
                        this.selectors.detailsButtons,
                        this.onDetailsButtonClick.bind(this),
                      );
                }
                onDynamicAnalyticsUpdate(a) {
                  this.dynamicAnalyticsCallback &&
                    this.dynamicAnalyticsCallback(a),
                    this.options.selfContained && a.stopPropagation();
                }
                onClick(a) {
                  a.target.classList.contains("js-productimage__arrow-next") ||
                    a.target.classList.contains(
                      "js-productimage__arrow-prev",
                    ) ||
                    this.sendProductClickToAnalytics(a);
                }
                onEditClick() {
                  h("producttile.edit", this.element, {
                    bubbles: !0,
                    pid: this.options.pid,
                  });
                }
                onComparisonCTAUpdate(a) {
                  this.selectors.producttileactions &&
                    (a.detail.show
                      ? this.selectors.producttileactions.classList.add(
                          "m-comparison",
                        )
                      : this.selectors.producttileactions.classList.remove(
                          "m-comparison",
                        ),
                    this.options.selfContained && a.stopPropagation());
                }
                onRemoveClick() {
                  h("producttile.remove", this.element, {
                    bubbles: !0,
                    pid: this.options.pid,
                  });
                }
                onLazyLoaded() {
                  this.state.originalImageData = j(this.selectors.image);
                }
                onProductTileUpdate(a) {
                  const { pid: b } = a.detail,
                    c = { pid: b, id: this.options.tileTemplateName };
                  this.disableActionButton(this.state.productId),
                    this.options.classNames.addToCartClass &&
                      (c.addToCartClass =
                        this.options.classNames.addToCartClass),
                    this.reload(c),
                    this.options.selfContained && a.stopPropagation();
                }
                disableActionButton(a) {
                  const b =
                    this.element.querySelector(
                      'button[data-pid="'.concat(a, '"]'),
                    ) ||
                    this.element.querySelector(
                      "button[data-js-productmainaction]",
                    );
                  b &&
                    (b.classList.add(
                      this.options.classNames.buttonClass,
                      this.options.classNames.loadingClass,
                    ),
                    b.setAttribute("disabled", "disabled"));
                }
                onQuantityChanged(a) {
                  a.stopPropagation(), this.updateQuantity(a.detail.value);
                }
                updateQuantity(a) {
                  if (!(a && a === this.state.quantity)) {
                    const c = this.state.quantity;
                    this.state.quantity = a;
                    const d = b.getComponent(this.selectors.price);
                    d && d.update(a),
                      h("productTile.updated", this.element, {
                        bubbles: !0,
                        pid: this.options.pid,
                        quantity: this.state.quantity,
                        quantityPrev: c,
                      }),
                      this.options.isPreventQtyUpdatedEvent ||
                        e.emit("product.quantity.updated", {
                          pid: this.options.pid,
                          quantity: this.state.quantity,
                        });
                  }
                }
                onProductImageUpdate(a) {
                  k(
                    this.selectors.image,
                    this.state.originalImageData,
                    a.detail.imageUrl,
                  ),
                    this.options.selfContained && a.stopPropagation();
                }
                onReload(a) {
                  if ("html" === a.dataType) {
                    const b = this._replaceElement(a.content);
                    h("productTile.updated", b, { bubbles: !0 });
                  }
                  return a.content;
                }
                onMainImageChanged(a) {
                  a.detail.index &&
                  this.classNames.alternativeImageActive.length
                    ? this.element.classList.add(
                        ...this.classNames.alternativeImageActive,
                      )
                    : this.element.classList.remove(
                        ...this.classNames.alternativeImageActive,
                      );
                }
                onProductImageLinkClick(a) {
                  const { href: b, target: c } = a.currentTarget.dataset;
                  b &&
                    !a.target.closest("button, a") &&
                    (a.preventDefault(),
                    this.sendProductClickToAnalytics(a),
                    "_blank" === c
                      ? window.open(b, c)
                      : (window.location.href = b));
                }
                onKeyboardControl(a) {
                  -1 !== ["Enter", " "].indexOf(a.key) &&
                    this.onProductImageLinkClick(a);
                }
                destroy() {
                  g(this.element),
                    g("click", this.selectors.anchors),
                    this.selectors.productImageLink &&
                      (g(
                        "click.productimagelink",
                        this.selectors.productImageLink,
                      ),
                      g(
                        "keydown.productimagelink",
                        this.selectors.productImageLink,
                      )),
                    this.options.showBadgeOnlyOnFirstProductImage &&
                      this.selectors.productThumbnail &&
                      g(
                        "carousel.slidechanged",
                        this.selectors.productThumbnail,
                      ),
                    this.options.isEditable &&
                      (g("click", this.selectors.remove),
                      g("click", this.selectors.edit)),
                    this.selectors.detailsButtons.length &&
                      g("click", this.selectors.detailsButtons);
                }
                toggleSelect(a) {
                  this.element.classList.toggle(
                    this.options.classNames.selected,
                    a.detail.isInComparison,
                  );
                }
                onComparisonButtonSelected(a) {
                  this.toggleSelect(a);
                }
                onDetailsButtonClick(a) {
                  a.target.closest("[data-js-carousel-arrows]") ||
                    (a.preventDefault(),
                    h("producttile.details", this.element, {
                      bubbles: !0,
                      pid: this.state.productId,
                      analytics: this.getAnalyticsAttributeData(a.target),
                    }));
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=ProductTile.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/product/ProductTile.js
