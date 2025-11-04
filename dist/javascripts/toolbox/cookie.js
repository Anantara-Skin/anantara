(function (System, SystemJS) {
  "use strict";
  System.register([], function (a) {
    "use strict";
    var b;
    return {
      setters: [],
      execute: function () {
        a(
          "cookie",
          (b = {
            setCookie(a, b) {
              let c =
                2 < arguments.length && arguments[2] !== void 0
                  ? arguments[2]
                  : 365;
              const e = new Date();
              e.setTime(e.getTime() + 1e3 * (60 * (60 * (24 * c))));
              const d = 0 === c ? "" : "expires=".concat(e.toUTCString());
              document.cookie = ""
                .concat(a, "=")
                .concat(b, ";")
                .concat(d, ";path=/");
            },
            getCookie(a) {
              const b = "".concat(a, "="),
                d = document.cookie.split(";");
              for (let e, c = 0; c < d.length; c++) {
                for (e = d[c]; " " === e.charAt(0); ) e = e.substring(1);
                if (0 === e.indexOf(b)) return e.substring(b.length, e.length);
              }
              return "";
            },
          }),
        );
      },
    };
  });
  //# sourceMappingURL=cookie.js.map
})(System, System);
//# sourceURL=/dist/javascripts/toolbox/cookie.js
