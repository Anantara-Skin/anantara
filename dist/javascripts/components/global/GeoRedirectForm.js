(function (System, SystemJS) {
  "use strict";
  System.register(
    ["components/global/Form", "toolbox/deepMerge"],
    function (a) {
      "use strict";
      var b, c, d;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              c = a.deepMerge;
            },
          ],
          execute: function () {
            a(
              "default",
              (d = class extends b {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(a, c({ country: "" }, b));
                }
                initCache() {
                  super.initCache(),
                    this.options.country &&
                      ((this.selectors.selectedOption =
                        this.element.querySelector('[selected="selected"]')),
                      (this.selectors.currentCountryOption =
                        this.element.querySelector(
                          '[data-js-country="'.concat(
                            this.options.country,
                            '"]',
                          ),
                        )));
                }
                afterInit() {
                  super.afterInit(),
                    this.selectors.selectedOption &&
                      this.selectors.selectedOption.removeAttribute("selected"),
                    this.selectors.currentCountryOption &&
                      this.selectors.currentCountryOption.setAttribute(
                        "selected",
                        "selected",
                      );
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=GeoRedirectForm.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/global/GeoRedirectForm.js
