(function (System, SystemJS) {
  "use strict";
  System.register(["toolbox/event"], function (a) {
    "use strict";
    function getEventName(a) {
      const b = document.createElement("div"),
        c = a.toLowerCase(),
        d = {
          animation: c,
          WebkitAnimation: "webkit".concat(a),
          MozAnimation: c,
          OAnimation: "on".concat(c),
          msAnimation: "MS".concat(a),
        };
      let e = !1;
      return (
        Object.keys(d).forEach((a) => {
          e || void 0 === b.style[a] || (e = d[a]);
        }),
        e
      );
    }
    function transition(a, c) {
      if (!a || !(a instanceof HTMLElement))
        throw new Error("element should be an HTML Element");
      return d || "function" != typeof c
        ? void b(d, a, () => {
            "function" == typeof c && c();
          })
        : void c();
    }
    var b, c, d;
    return (
      a({
        animate: function animate(a, d) {
          return new Promise(
            (e, f) => (
              "string" == typeof a
                ? "" == a &&
                  f(new Error("animation name cannot be an empty string"))
                : f(new Error("animation name has to be a string")),
              (d && (!d || d instanceof HTMLElement)) ||
                f(new Error("element should be an HTML Element")),
              d.classList.add(a),
              c
                ? void b(c, d, () => {
                    d.classList.remove(a), e(d);
                  })
                : void e(d)
            ),
          );
        },
        transition: transition,
      }),
      {
        setters: [
          function (a) {
            b = a.once;
          },
        ],
        execute: function execute() {
          (c = getEventName("AnimationEnd")),
            (d = getEventName("TransitionEnd"));
        },
      }
    );
  });
  //# sourceMappingURL=animate.js.map
})(System, System);
//# sourceURL=/dist/javascripts/toolbox/animate.js
