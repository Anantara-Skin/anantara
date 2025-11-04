(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "services/EventEmitter",
      "toolbox/event",
      "toolbox/deepMerge",
      "services/CrossRequestStorage",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h;
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
              g = a.default;
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
                    f(
                      {
                        section: "header",
                        id: "headercustomerinfo",
                        reloadData: {
                          section: "header",
                          id: "headercustomerinfo",
                        },
                      },
                      b,
                    ),
                  );
                }
                afterInit() {
                  g.processDelayedActionForSocialLogin();
                }
                bindEvents() {
                  c.on("registration.success", this.reload.bind(this)),
                    c.on("login.success", this.reload.bind(this)),
                    d("click", this.element, this.onClick.bind(this));
                }
                onClick() {
                  c.emit("analytics.event", {
                    category: "header",
                    action: "select",
                    label: "account",
                    extraData: {
                      event_name: "header_click",
                      cta_name: "account",
                    },
                  });
                }
                destroy() {
                  c.removeListener(
                    "registration.success",
                    this.reload.bind(this),
                  ),
                    c.removeListener("login.success", this.reload.bind(this)),
                    e("click", this.element);
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=CustomerInfo.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/header/CustomerInfo.js
