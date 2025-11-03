(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "services/EventEmitter",
      "toolbox/event",
      "toolbox/deepMerge",
      "services/DataLayer",
      "core/mixwith",
      "mixins/Analytics",
      "mixins/Loader",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i, j, k;
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
            function (a) {
              g = a.getData;
            },
            function (a) {
              h = a.mix;
            },
            function (a) {
              i = a.default;
            },
            function (a) {
              j = a.default;
            },
          ],
          execute: function () {
            a(
              "default",
              (k = class extends h(b).with(i, j) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    f(
                      {
                        contentUrl: null,
                        cssPath: "quickview.css",
                        ariaLabel: null,
                        classNames: { container: null },
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  this.selectors.focusReturnElement = this.element
                    .closest("[data-js-tile]")
                    .querySelector("[data-js-product-name]");
                }
                initState() {
                  this.state.isActive = !1;
                }
                bindEvents() {
                  d("click", this.element, this.onClick.bind(this)),
                    d("keydown", this.element, this.onKeyDown.bind(this));
                }
                onClick(a) {
                  a.preventDefault(),
                    this.state.isActive ||
                      (this.sendProductClickToAnalytics(a),
                      this.openModal(this.selectors.focusReturnElement));
                }
                onKeyDown(a) {
                  -1 !== ["Enter", " "].indexOf(a.key) &&
                    (this.sendProductClickToAnalytics(a),
                    this.openModal(this.element));
                }
                openModal(a) {
                  const b = g().page.id;
                  let d = this.options.contentUrl;
                  (this.state.isActive = !0),
                    "cart" === b &&
                      (d = "".concat(
                        this.options.contentUrl,
                        "&cartPage=true",
                      )),
                    c.emit("modal.open", {
                      options: {
                        cssPath: this.options.cssPath,
                        contentUrl: d,
                        classNames: {
                          container: this.options.classNames.container,
                        },
                        ariaLabel: this.options.ariaLabel,
                        afterClose: this.afterClose.bind(this),
                        afterOpen: this.afterOpen.bind(this),
                        isStackable: !0,
                        analytics: {
                          virtualPageURL: this.analytics.virtualPageURL,
                          virtualPageTitle: this.analytics.virtualPageTitle,
                        },
                        focusReturnElement: a,
                      },
                    });
                }
                afterClose() {
                  this.element && (this.state.isActive = !1);
                }
                afterOpen() {
                  this.removeLoader();
                }
                destroy() {
                  e("click", this.element), e("keydown", this.element);
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=QuickViewButton.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/product/QuickViewButton.js
