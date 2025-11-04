(function (System, SystemJS) {
  "use strict";
  System.register([], function (a) {
    "use strict";
    return (
      a({
        mobileScrollDisable: function () {
          document.documentElement.classList.add("m-prevent-mobile-scroll");
        },
        mobileScrollEnable: function () {
          document.documentElement.classList.remove("m-prevent-mobile-scroll");
        },
        scrollTo: function (a, b, c) {
          if (a) {
            const d = a.getBoundingClientRect(),
              e = window.scrollY + d.top - (b || 0),
              f = "horizontal" === c ? window.scrollY : e;
            if (!c) {
              const a = 0 <= d.left && d.right <= window.innerWidth;
              c = a ? "vertical" : "";
            }
            const g = "vertical" === c ? window.scrollX : d.left;
            window.scroll(g, f);
          }
        },
        waitForScrollEnd: function () {
          let a = 0,
            b = window.scrollX,
            c = window.scrollY;
          return new Promise((d) => {
            function tick(e) {
              500 <= e || 20 < e - a
                ? d()
                : ((window.scrollX !== b || window.scrollY !== c) &&
                    ((a = e), (b = window.scrollX), (c = window.scrollY)),
                  requestAnimationFrame(tick.bind(null, e + 1)));
            }
            tick(0);
          });
        },
      }),
      { setters: [], execute: function () {} }
    );
  });
  //# sourceMappingURL=scroll.js.map
})(System, System);
//# sourceURL=/dist/javascripts/toolbox/scroll.js
