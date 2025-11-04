(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "toolbox/event",
      "toolbox/deepMerge",
      "services/DataLayer",
      "core/mixwith",
      "mixins/Analytics",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              (c = a.on), (d = a.off);
            },
            function (a) {
              e = a.deepMerge;
            },
            function (a) {
              f = a.default;
            },
            function (a) {
              g = a.mix;
            },
            function (a) {
              h = a.default;
            },
          ],
          execute: function () {
            a(
              "default",
              (i = class extends g(b).with(h) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    e(
                      {
                        templateName: "product/productbadge",
                        dataModelId: "productbadge",
                        isClientEnabled: !1,
                        productID: "",
                        recommendedBadge: null,
                        linksAnalytics: null,
                      },
                      b,
                    ),
                  );
                }
                bindEvents() {
                  this.options.isClientEnabled &&
                    c(
                      "product.updated",
                      this.element,
                      this.onProductUpdated.bind(this),
                    ),
                    c("click", this.element, this.onClick.bind(this));
                }
                afterInit() {
                  const a = f.getData(),
                    { productID: b, recommendedBadge: c } = this.options;
                  if (
                    b &&
                    c &&
                    a &&
                    a.customer &&
                    a.customer.recommendedProducts
                  ) {
                    const { recommendedProducts: d } = a.customer;
                    Object.keys(d).some((a) => {
                      const e = d[a].products || [];
                      return (
                        -1 !== e.indexOf(b) &&
                        (this.element.appendChild(
                          this.createRecommendedBadge(c),
                        ),
                        !0)
                      );
                    });
                  }
                }
                onProductUpdated(a) {
                  const b =
                    a.detail.data && a.detail.data[this.options.dataModelId];
                  b && this.render(b);
                }
                onClick(a) {
                  const { linksAnalytics: b } = this.options;
                  if (b && "A" === a.target.tagName) {
                    const { target: c } = a,
                      d = c.getAttribute("data-js-title");
                    (b.label = (d || "").toLowerCase()),
                      b.extraData &&
                        (b.extraData.cta_name = (d || "").toLowerCase()),
                      this.sendAnalytics(b);
                  }
                }
                createRecommendedBadge(a) {
                  const {
                      image: b,
                      url: c,
                      title: d,
                      backgroundColor: e,
                      textColor: f,
                      cssClass: g,
                    } = a,
                    h = document.createElement("span");
                  (h.className = b
                    ? "c-product-badge__image"
                    : "c-product-badge__title"),
                    e && (h.style.backgroundColor = e),
                    f && (h.style.color = f),
                    g &&
                      g.split(" ").forEach((a) => {
                        h.classList.add(a);
                      });
                  const i = b || d;
                  return (
                    (h.innerHTML = c
                      ? '<a href="'
                          .concat(c, '" data-js-title="')
                          .concat(d, '">')
                          .concat(i, "</a>")
                      : i),
                    h
                  );
                }
                destroy() {
                  this.options.isClientEnabled &&
                    d("product.updated", this.element),
                    d("click", this.element);
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=ProductBadge.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/product/ProductBadge.js
