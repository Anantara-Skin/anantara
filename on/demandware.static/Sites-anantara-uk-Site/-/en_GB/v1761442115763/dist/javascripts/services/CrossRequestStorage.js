(function (System, SystemJS) {
  "use strict";
  System.register(["services/DataLayer"], function (a) {
    "use strict";
    var b, c;
    return {
      setters: [
        function (a) {
          b = a.default;
        },
      ],
      execute: function () {
        (c = class a {
          constructor() {
            return a.instance ? a.instance : void (a.instance = this);
          }
          setDelayedAction(a) {
            this.removeDelayedActionForSocialLogin(),
              sessionStorage.setItem("crossRequestDelayedAction", a);
          }
          removeDelayedAction() {
            sessionStorage.removeItem("crossRequestDelayedAction");
          }
          setDelayedActionForSocialLogin(a) {
            sessionStorage.setItem("crossRequestDelayedActionSocialLogin", a);
          }
          removeDelayedActionForSocialLogin() {
            sessionStorage.removeItem("crossRequestDelayedActionSocialLogin");
          }
          processDelayedActionForSocialLogin() {
            const a = b.getCustomer();
            if (a && a.socialLoginStatus) {
              const a = sessionStorage.getItem(
                "crossRequestDelayedActionSocialLogin",
              );
              a && this.setDelayedAction(a);
            }
          }
          getDelayedAction() {
            this.processDelayedActionForSocialLogin();
            const a = sessionStorage.getItem("crossRequestDelayedAction");
            if (a) {
              const [b, c] = a.split("::");
              return { type: b, value: c };
            }
            return null;
          }
        }),
          a("default", new c());
      },
    };
  });
  //# sourceMappingURL=CrossRequestStorage.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/services/CrossRequestStorage.js
