(function (System, SystemJS) {
  "use strict";
  System.register(["handlebars/handlebars.runtime"], function () {
    "use strict";
    function includeComponent() {
      for (var b = arguments.length, c = Array(b), d = 0; d < b; d++)
        c[d] = arguments[d];
      const e = c.pop(),
        [f, g, h, i] = c;
      let j = h && "object" == typeof h ? h : null;
      if (!j) {
        const a = ""
            .concat(f, "/")
            .concat(g)
            .concat(i && "string" == typeof i ? "#".concat(i) : ""),
          b = e.data && e.data.root;
        "object" == typeof b && null !== b && (j = b[a]);
      }
      if (j && j.suppressRender) return "";
      const k = "templates/".concat(f, "/").concat(g),
        l = a.templates[k];
      return l ? new a.SafeString(l(j)) : "";
    }
    function carousel(a) {
      if (!a) return "";
      for (
        var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      const e = (c && 1 < c.length && c[0]) || {},
        f = c[c.length - 1],
        g = e.componentOptions || e.options || {},
        h = Object.assign({}, g, e);
      return (
        (h.items = a.map((a) => {
          const b = f.fn(a);
          return { content: b };
        })),
        includeComponent("common", "carousel", h, null)
      );
    }
    function openTag(a, b, c) {
      const d = ["<".concat(a)];
      return (
        Object.keys(c).forEach((b) => {
          (c[b] || "option" === a) &&
            d.push("".concat(b, "='").concat(c[b], "'"));
        }),
        "".concat(d.join(" ") + (b ? "" : " /"), ">")
      );
    }
    function closeTag(a) {
      return "</".concat(a, ">");
    }
    function createElement(a, b, c) {
      const d = "undefined" == typeof b.closing || b.closing;
      return (
        delete b.closing, openTag(a, d, b) + (d ? (c || "") + closeTag(a) : "")
      );
    }
    function extend(a, b) {
      return (
        Object.keys(b).forEach((c) => {
          a[c] = b[c];
        }),
        a
      );
    }
    function helperTag(a, b) {
      return (
        b &&
          b.hash &&
          "object" == typeof b.hash.tagAttributes &&
          (Object.keys(b.hash.tagAttributes).forEach((a) => {
            const c = b.hash.tagAttributes[a];
            b.hash[a] = c && "object" == typeof c ? JSON.stringify(c) : c;
          }),
          delete b.hash.tagAttributes),
        createElement(a, extend({}, b.hash), b.fn(this))
      );
    }
    function helperTagClosing(a, b) {
      return (
        b &&
          b.hash &&
          "object" == typeof b.hash.tagAttributes &&
          (Object.keys(b.hash.tagAttributes).forEach((a) => {
            const c = b.hash.tagAttributes[a];
            b.hash[a] = c && "object" == typeof c ? JSON.stringify(c) : c;
          }),
          delete b.hash.tagAttributes),
        createElement(a, extend({ closing: !0 }, b.hash))
      );
    }
    function contextHelper(a, b, c) {
      return c.fn(this);
    }
    var a;
    return {
      setters: [
        function (b) {
          a = b.default;
        },
      ],
      execute: function () {
        a.registerHelper("include_component", includeComponent),
          a.registerHelper("render_component", includeComponent),
          a.registerHelper("carousel", carousel),
          a.registerHelper("tagName", helperTag),
          a.registerHelper("tagNameSelfClosing", helperTagClosing),
          a.registerHelper("context", contextHelper),
          a.registerHelper("include_json", (a) => JSON.stringify(a));
      },
    };
  });
  //# sourceMappingURL=templateHelpers.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/core/templateHelpers.js
