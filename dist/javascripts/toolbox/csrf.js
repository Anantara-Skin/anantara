(function (System, SystemJS) {
  "use strict";
  System.register(["services/Resources"], function (a) {
    "use strict";
    function getCSRF() {
      return d
        ? Promise.resolve(d)
        : e
          ? e
          : ((e = b()
              .then(c)
              .then((a) => ((d = a), d))
              .finally(() => {
                e = null;
              })),
            e);
    }
    var b, c, d, e;
    return (
      a("getCSRF", getCSRF),
      {
        setters: [
          function (a) {
            (b = a.getResources), (c = a.fetchCSRF);
          },
        ],
        execute: function execute() {
          (d = null), (e = null);
        },
      }
    );
  });
  //# sourceMappingURL=csrf.js.map
})(System, System);
//# sourceURL=/dist/javascripts/toolbox/csrf.js
