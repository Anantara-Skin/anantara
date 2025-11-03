(function (System, SystemJS) {
  "use strict";
  System.register(
    ["core/templateHelpers", "services/EventEmitter"],
    function (a) {
      "use strict";
      function onTemplateLoad(a, c) {
        const d = c.default(a.data);
        if (a.isPlainHTML) return d;
        const e = document.createRange().createContextualFragment(d),
          f = e.querySelector("[data-component]");
        return f && b.emit("registry.registerChildren", e), e;
      }
      function onTemplateLoadError(a) {
        return a;
      }
      function loadTemplate(a) {
        const { templateName: b, template: c } = a;
        if (b)
          return SystemJS.import("templates/".concat(b))
            .then(onTemplateLoad.bind(this, a))
            .catch(onTemplateLoadError.bind(this));
        if (c) return Promise.resolve().then(onTemplateLoad.bind(this, a));
        throw new Error(
          "loadTemplate is missing a template or templateName param",
        );
      }
      var b;
      return (
        a("loadTemplate", loadTemplate),
        {
          setters: [
            function () {},
            function (a) {
              b = a.Event;
            },
          ],
          execute: function () {},
        }
      );
    },
  );
  //# sourceMappingURL=Template.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/services/Template.js
