(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/mixwith",
      "toolbox/deepMerge",
      "toolbox/ajax",
      "services/EventEmitter",
      "toolbox/csrf",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f;
      return {
        setters: [
          function (a) {
            b = a.Mixin;
          },
          function (a) {
            c = a.deepMerge;
          },
          function (a) {
            d = a.ajax;
          },
          function (a) {
            e = a.Event;
          },
          function (a) {
            f = a.getCSRF;
          },
        ],
        execute: function () {
          a(
            "default",
            b(
              (a) =>
                class extends a {
                  constructor(a) {
                    let b =
                        1 < arguments.length && arguments[1] !== void 0
                          ? arguments[1]
                          : {},
                      d = 2 < arguments.length ? arguments[2] : void 0;
                    super(a, c({ eventMap: {} }, b), d);
                  }
                  bindEvents() {
                    super.bindEvents(),
                      Object.keys(this.options.eventMap || {}).forEach((a) => {
                        this.element.addEventListener(
                          a,
                          this.onAjaxCall.bind(this),
                        );
                      });
                  }
                  async onAjaxCall(a) {
                    const b = this.options.eventMap[a.type];
                    let c, g;
                    "string" == typeof b
                      ? (g = b)
                      : ({ params: c, url: g } = b);
                    const h = Object.assign({ eventName: a.type }, a.detail, c),
                      i = { data: JSON.stringify(h) },
                      j = await f();
                    j && (i[j.name] = j.token),
                      d(g, { method: "POST", body: i })
                        .then((a) => {
                          (a.fireEvents || []).forEach((a) => {
                            e.emit(a);
                          });
                        })
                        .catch(() => {});
                  }
                  destroy() {
                    Object.keys(this.options.eventMap || {}).forEach((a) => {
                      this.element.removeEventListener(
                        a,
                        this.onAjaxCall.bind(this),
                      );
                    });
                  }
                },
            ),
          );
        },
      };
    },
  );
  //# sourceMappingURL=EventCatcher.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/mixins/EventCatcher.js
