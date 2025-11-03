(function (System, SystemJS) {
  "use strict";
  System.register([], function (a) {
    "use strict";
    function getHash(a) {
      if (!document.location.hash) return !1;
      const b = document.location.hash
        .slice(1)
        .split("&")
        .reduce((a, b) => {
          const [c, d] = b.split("=");
          return (a[c] = d), a;
        }, {});
      return a ? b[a] : b;
    }
    return (
      a({
        getHash: getHash,
        setHash: function (a, b) {
          const c = getHash() || {};
          (c[a] = b),
            (document.location.hash = Object.keys(c)
              .map((a) =>
                ""
                  .concat(encodeURIComponent(a), "=")
                  .concat(encodeURIComponent(c[a])),
              )
              .join("&"));
        },
      }),
      { setters: [], execute: function () {} }
    );
  });
  //# sourceMappingURL=location.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/toolbox/location.js
