(function (System, SystemJS) {
  "use strict";
  System.register([], function (a) {
    "use strict";
    return (
      a({
        getFormValues: function (a) {
          const b = {};
          return (
            [...a.elements]
              .filter((a) => !!a.name || a.disabled)
              .forEach((a) => {
                b[a.name] = a.value;
              }),
            b
          );
        },
        getRelativeSelector: function (a) {
          let b =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : document.body;
          const c = [];
          if (!b.contains(a)) return null;
          for (; a !== b; ) {
            let b = a.tagName;
            if (a.id && !/.+-[0-9]+$/.test(a.id)) {
              (b += "#".concat(a.id)), c.unshift(b);
              break;
            }
            Array.from(a.classList)
              .filter((a) => 0 === a.indexOf("c-"))
              .forEach((a) => {
                b += ".".concat(a);
              }),
              ["name", "data-component", "data-focus-id"].forEach((c) => {
                a.hasAttribute(c) &&
                  (b += "[".concat(c, '="').concat(a.getAttribute(c), '"]'));
              });
            const d = Array.from(a.parentNode.children).indexOf(a) + 1;
            (b += ":nth-child(".concat(d, ")")),
              c.unshift(b),
              (a = a.parentNode);
          }
          return c.join(">");
        },
        encodeHTMLEntity: function (a) {
          return a
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#x27;");
        },
        isChildOf: function (a, b) {
          for (; a; ) {
            if (a === b) return !0;
            a = a.parentElement;
          }
          return !1;
        },
      }),
      { setters: [], execute: function () {} }
    );
  });
  //# sourceMappingURL=html.js.map
})(System, System);
//# sourceURL=/dist/javascripts/toolbox/html.js
