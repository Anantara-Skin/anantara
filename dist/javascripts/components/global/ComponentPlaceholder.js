(function (System, SystemJS) {
  "use strict";
  System.register(
    ["core/Component", "toolbox/deepMerge", "services/EventEmitter"],
    function (a) {
      "use strict";
      var b, c, d, e;
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
            function (a) {
              d = a.Event;
            },
          ],
          execute: function () {
            a(
              "default",
              (e = class extends b {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(a, c({ dataModelId: null }, b));
                }
                afterInit() {
                  this.analytics &&
                    this.analytics.init &&
                    d.emit("analytics.event", this.analytics.init);
                }
                destroy() {
                  super.destroy();
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=ComponentPlaceholder.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/global/ComponentPlaceholder.js
