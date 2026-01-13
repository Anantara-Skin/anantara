(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "toolbox/event",
      "services/EventEmitter",
      "services/DataLayer",
      "core/mixwith",
      "mixins/Analytics",
      "toolbox/deepMerge",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i, j;
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
              e = a.Event;
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
            function (a) {
              i = a.deepMerge;
            },
          ],
          execute: function () {
            a(
              "default",
              (j = class extends g(b).with(h) {
                afterInit() {
                  this.sendPromoImpressionsToAnalytics();
                }
                initCache() {
                  this.selectors.links = this.element.hasAttribute(
                    "data-is-link",
                  )
                    ? [this.element]
                    : Array.from(
                        this.element.querySelectorAll("[data-is-link]"),
                      );
                }
                bindEvents() {
                  this.selectors.links.forEach((a) =>
                    c("click.promotiontile", a, this.onLinkClick.bind(this)),
                  );
                }
                onLinkClick(a) {
                  const { target: b } = a;
                  if (this.analytics)
                    if (this.analytics.event) {
                      const a = this.options.setPosition && this.getIndex();
                      if (a) {
                        const b = +a + 1;
                        (this.analytics.label = ""
                          .concat(b, "::")
                          .concat(this.analytics.label)),
                          (this.analytics.extraData.position = b);
                      }
                      const b = f.getData();
                      (this.analytics.category =
                        this.analytics.category.replace(
                          /{{pageType}}/i,
                          b.page && b.page.id,
                        )),
                        e.emit("analytics.event", this.analytics);
                    } else if (this.analytics.promoObject) {
                      const a = i.all([
                        {},
                        this.analytics,
                        this.getAnalyticsAttributeData(b) || {},
                      ]);
                      this.sendPromoClickToAnalytics(a);
                    }
                }
                destroy() {
                  this.selectors.links.forEach((a) => d("click", a));
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=PromotionTile.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components//dist/javascripts/components/global/PromotionTile.js.js
