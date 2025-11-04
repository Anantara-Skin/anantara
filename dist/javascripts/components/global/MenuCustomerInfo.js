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
                  super(
                    a,
                    c(
                      {
                        menuSelector: "[data-js-usercustomermenu-menu]",
                        reloadData: {
                          section: "header",
                          id: "menucustomerinfo",
                        },
                      },
                      b,
                    ),
                  );
                }
                bindEvents() {
                  super.bindEvents(),
                    d.on("registration.success", this.reload.bind(this)),
                    d.on("login.success", this.reload.bind(this));
                }
                destroy() {
                  super.destroy(),
                    d.removeListener(
                      "registration.success",
                      this.reload.bind(this),
                    ),
                    d.removeListener("login.success", this.reload.bind(this));
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=MenuCustomerInfo.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/global/MenuCustomerInfo.js
