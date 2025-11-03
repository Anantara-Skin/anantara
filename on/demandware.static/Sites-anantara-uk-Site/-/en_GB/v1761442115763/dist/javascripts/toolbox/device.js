(function (System, SystemJS) {
  "use strict";
  System.register([], function (a) {
    "use strict";
    function isTouchDevice() {
      return (
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof DocumentTouch)
      );
    }
    return (
      a({
        isTouchDevice: isTouchDevice,
        isFiresTouchEvents: function (a) {
          return !a.sourceCapabilities || a.sourceCapabilities.firesTouchEvents;
        },
        isKeyboardLikeClick: function (a) {
          const b = a.sourceCapabilities;
          return void 0 === b ? 0 === a.detail : null === b;
        },
      }),
      { setters: [], execute: function () {} }
    );
  });
  //# sourceMappingURL=device.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/toolbox/device.js
