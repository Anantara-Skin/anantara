(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "services/EventEmitter",
      "toolbox/event",
      "toolbox/deepMerge",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              c = a.Event;
            },
            function (a) {
              (d = a.on), (e = a.off);
            },
            function (a) {
              f = a.deepMerge;
            },
          ],
          execute: function () {
            a(
              "default",
              (g = class extends b {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    f(
                      {
                        templateName: "product/productprice",
                        pricesMap: {},
                        pid: null,
                        productQuantities: {},
                        hideStandardPrice: !1,
                        reloadData: {
                          configid: null,
                          section: "product",
                          id: "productprice",
                        },
                        classNames: { hidden: "h-hidden" },
                        dataModelId: "productprice",
                      },
                      b,
                    ),
                  );
                }
                initState() {
                  this.state.productQuantities = this.options.productQuantities;
                }
                initCache() {
                  (this.selectors.salePrice = this.element.querySelector(
                    "[data-js-saleprice]",
                  )),
                    (this.selectors.standardPrice = this.element.querySelector(
                      "[data-js-standardprice]",
                    )),
                    (this.selectors.priceLabels = this.element.querySelectorAll(
                      "[data-js-pricelabel]",
                    ));
                }
                bindEvents() {
                  c.on(
                    "product.quantity.updated",
                    this.onQuantityChanged,
                    this,
                  ),
                    d(
                      "product.updated",
                      this.element,
                      this.onProductUpdated.bind(this),
                    ),
                    d(
                      "productprice.updated",
                      this.element,
                      this.onProductPriceUpdated.bind(this),
                    );
                }
                getParamsMap() {
                  const a = Object.keys(this.state.productQuantities).reduce(
                    (a, b, c) => (
                      (a["pid_".concat(c)] = b),
                      (a["qty".concat(c)] =
                        this.state.productQuantities[b] || 1),
                      a
                    ),
                    {},
                  );
                  return (a.pid = this.options.pid), a;
                }
                onQuantityChanged(a) {
                  this.updateData(a);
                }
                onProductPriceUpdated(a) {
                  a && a.detail && this.updateData(a.detail);
                }
                updateData(a) {
                  a.pid === this.options.pid &&
                    ("ROUTINE" === a.productType
                      ? a.productsMap &&
                        ((this.state.productQuantities = a.productsMap),
                        this.updatePrice())
                      : this.update(a.quantity));
                }
                updatePrice() {
                  const a = this.getParamsMap();
                  this.reload(
                    Object.assign(
                      { pid: this.options.pid, dataType: "json" },
                      a,
                    ),
                  )
                    .then(this.onPriceUpdated.bind(this))
                    .catch(this.onPriceFailed.bind(this));
                }
                onPriceUpdated(a) {
                  if (a && a.price) {
                    const { price: b, strikethroughPrice: c } = a;
                    this.updateHTML(b, c),
                      (this.options.reloadData = Object.assign(
                        {
                          configid: null,
                          section: "product",
                          id: "productprice",
                        },
                        a.componentOptions.reloadData,
                      ));
                  }
                }
                onPriceFailed() {}
                update(a) {
                  if (a && this.options.pricesMap[a]) {
                    const {
                      salePrice: b,
                      standardPrice: c,
                      renderHidden: d,
                    } = this.options.pricesMap[a];
                    d ? this.updateHTML("", "") : this.updateHTML(b, c);
                  }
                }
                updateHTML(a, b) {
                  (this.selectors.salePrice.innerHTML = a),
                    this.selectors.standardPrice &&
                      ((this.selectors.standardPrice.innerHTML = b || ""),
                      this.selectors.standardPrice.classList.toggle(
                        this.options.classNames.hidden,
                        !b || this.options.hideStandardPrice,
                      ),
                      this.selectors.priceLabels &&
                        this.selectors.priceLabels.length &&
                        this.selectors.priceLabels.forEach((a) => {
                          b
                            ? a.classList.remove(this.options.classNames.hidden)
                            : a.classList.add(this.options.classNames.hidden);
                        })),
                    a || b
                      ? this.element.classList.remove(
                          this.options.classNames.hidden,
                        )
                      : this.element.classList.add(
                          this.options.classNames.hidden,
                        );
                }
                onProductUpdated(a) {
                  if (a && a.detail) {
                    const b =
                      "DEFAULT" === a.detail.productType
                        ? a.detail.previousPid
                        : a.detail.pid;
                    b === this.options.pid &&
                      this.renderComponent(a.detail.data);
                  }
                }
                renderComponent(a) {
                  const b = a && a[this.options.dataModelId];
                  b && this.render(b);
                }
                destroy() {
                  c.removeListener(
                    "product.quantity.updated",
                    this.onQuantityChanged,
                    this,
                  ),
                    e("product.updated", this.element),
                    e("productprice.updated", this.element);
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=ProductPrice.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/product/ProductPrice.js
