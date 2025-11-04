(function (System, SystemJS) {
  "use strict";
  System.register([], function (a) {
    "use strict";
    function getRGB(a) {
      try {
        a = parseInt(a, 16);
      } catch (b) {
        a = !1;
      }
      return a;
    }
    function getsRGB(a) {
      return (
        (a = getRGB(a) / 255),
        (a = 0.03928 >= a ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4),
        a
      );
    }
    function getLuminance(a) {
      if (
        (0 === a.indexOf("#") && (a = a.slice(1)),
        3 === a.length && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]),
        6 !== a.length)
      )
        throw new Error("Invalid HEX color.");
      return (
        0.2126 * getsRGB(a.substring(0, 2)) +
        0.7152 * getsRGB(a.substring(2, 4)) +
        0.0722 * getsRGB(a.substring(4, 6))
      );
    }
    return (
      a("checkContrast", function (a, b) {
        const c = getLuminance(b),
          d = getLuminance(a);
        return (Math.max(c, d) + 0.05) / (Math.min(c, d) + 0.05);
      }),
      { setters: [], execute: function () {} }
    );
  });
  //# sourceMappingURL=color.js.map
})(System, System);
//# sourceURL=/dist/javascripts/toolbox/color.js
