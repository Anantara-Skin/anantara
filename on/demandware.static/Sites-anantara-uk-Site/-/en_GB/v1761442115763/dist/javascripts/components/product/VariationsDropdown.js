(function (System, SystemJS) {
  "use strict";
  System.register(
    ["core/Component", "toolbox/event", "toolbox/deepMerge"],
    function (a) {
      "use strict";
      var b, c, d, f, g, h;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              (c = a.on), (d = a.off), (f = a.trigger);
            },
            function (a) {
              g = a.deepMerge;
            },
          ],
          execute: function () {
            a(
              "default",
              (h = class extends b {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    g(
                      {
                        templateName: "product/variationsdropdown",
                        dataModelId: "variationsdropdown",
                        events: { variationUpdate: "product.variation.update" },
                        reloadOnChange: !1,
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  this.selectors.selectedOption =
                    this.element.querySelector("option[selected]");
                }
                initState() {
                  (this.state.loading = !1),
                    (this.state.pid = this.getSelectedVariationId());
                }
                bindEvents() {
                  c("change", this.element, (a) => this.onVariationSelected(a)),
                    c(
                      "product.updated",
                      this.element,
                      this.onProductUpdated.bind(this),
                    );
                }
                getSelectedVariationId() {
                  return this.selectors.selectedOption
                    ? this.selectors.selectedOption.getAttribute("data-js-pid")
                    : "";
                }
                onVariationSelected(a) {
                  a.preventDefault();
                  const b = a.target.value;
                  if (
                    b &&
                    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g.test(
                      b,
                    )
                  ) {
                    const c = a.target,
                      d = this.state.pid,
                      e = c.options
                        ? c.options[c.selectedIndex].getAttribute("data-js-pid")
                        : "";
                    return (
                      (this.state.loading = !0),
                      (this.state.pid = e),
                      c.blur(),
                      f(this.options.events.variationUpdate, this.element, {
                        url: b,
                        pid: e,
                        source: this.id,
                        bubbles: !0,
                        previousPid: d,
                        variationAttributeId: this.options.variationAttributeId,
                        displayValue: c.options
                          ? c.options[c.selectedIndex].text.trim()
                          : "",
                      }),
                      !0
                    );
                  }
                  return !1;
                }
                onProductUpdated(a) {
                  if (
                    a &&
                    a.detail &&
                    (a.detail.source !== this.id || this.options.reloadOnChange)
                  ) {
                    const { data: b } = a.detail;
                    if (b) {
                      const a = this.getModel(b);
                      a && this.render(a);
                    }
                  }
                }
                getModel(a) {
                  const { containerDataModelId: b } = this.options;
                  return a[b] && a[b][this.options.dataModelId]
                    ? a[b][this.options.dataModelId]
                    : a[this.options.dataModelId]
                      ? a[this.options.dataModelId]
                      : null;
                }
                destroy() {
                  d(this.element), d("product.updated", this.element);
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=VariationsDropdown.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/product/VariationsDropdown.js
