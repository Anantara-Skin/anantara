(function (System, SystemJS) {
  "use strict";
  System.register(["core/Component", "services/EventEmitter"], function (a) {
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
            c = a.Event;
          },
        ],
        execute: function () {
          a(
            "default",
            (d = class extends b {
              bindEvents() {
                c.on("orientationmessage.show", this.onShow, this),
                  c.on("orientationmessage.hide", this.onHide, this);
              }
              onShow() {
                this.element.classList.remove("h-hidden");
              }
              onHide() {
                this.element.classList.add("h-hidden");
              }
              destroy() {
                c.removeListener("orientationmessage.show", this.onShow, this),
                  c.removeListener(
                    "orientationmessage.hide",
                    this.onHide,
                    this,
                  );
              }
            }),
          );
        },
      }
    );
  });
  //# sourceMappingURL=OrientationMessage.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/global/OrientationMessage.js
