(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "core/mixwith",
      "services/EventEmitter",
      "toolbox/mediaQuery",
      "mixins/Accessibility",
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
              c = a.mix;
            },
            function (a) {
              d = a.Event;
            },
            function (a) {
              e = a.mediaQuery;
            },
            function (a) {
              f = a.default;
            },
          ],
          execute: function () {
            a(
              "default",
              (g = class extends c(b).with(f) {
                bindEvents() {
                  d.on(
                    "header.sticky.enabled",
                    this.onHeaderStickyEnabled,
                    this,
                  ),
                    d.on(
                      "header.sticky.disabled",
                      this.onHeaderStickyDisabled,
                      this,
                    );
                }
                afterInit() {
                  super.saveOriginalTabIndex();
                }
                onHeaderStickyEnabled() {
                  e.is("xlarge") && super.setAltTabIndex();
                }
                onHeaderStickyDisabled() {
                  e.is("xlarge") && super.resetOriginalTabIndex(!0);
                }
                destroy() {
                  d.removeListener("header.sticky.enabled", this.onShow, this),
                    d.removeListener(
                      "header.sticky.disabled",
                      this.onHide,
                      this,
                    );
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=SkipLink.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/global/SkipLink.js
