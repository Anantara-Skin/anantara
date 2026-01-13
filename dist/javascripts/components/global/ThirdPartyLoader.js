(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "toolbox/deepMerge",
      "toolbox/queryString",
      "loadjs",
      "services/EventEmitter",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              c = a.deepMerge;
            },
            function (a) {
              d = a.stringify;
            },
            function (a) {
              e = a.default;
            },
            function (a) {
              f = a.Event;
            },
          ],
          execute: function () {
            a(
              "default",
              (g = class extends b {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    c(
                      {
                        url: null,
                        bundleId: null,
                        params: null,
                        dataAttributes: null,
                        loadScriptTimeout: 0,
                        consentId: null,
                      },
                      b,
                    ),
                  );
                }
                get path() {
                  const { url: a, params: b } = this.options;
                  let c = a;
                  return (
                    b && "object" == typeof b && (c += "?".concat(d(b))), c
                  );
                }
                initState() {
                  (this.state.loaded = !1),
                    (this.state.loading = !1),
                    (this.state.data = null);
                }
                loadScript() {
                  return this.path
                    ? this.state.hasConsentListener ||
                      this.isComponentConsentGiven()
                      ? this.state.loading
                        ? Promise.reject(new Error("Script already loading"))
                        : this.state.loaded
                          ? Promise.resolve(this.state.data)
                          : this.options.bundleId &&
                              e.isDefined(this.options.bundleId)
                            ? (e.ready(
                                this.options.bundleId,
                                this.onScriptLoaded.bind(this),
                              ),
                              Promise.resolve(this.state.data))
                            : ((this.state.loading = !0),
                              new Promise((a, b) => {
                                const c = {
                                  success: (b) => {
                                    this.onScriptLoaded(b), a(b);
                                  },
                                  error: (a) => {
                                    this.onScriptLoadFailed(a), b(a);
                                  },
                                  before: (a, b) =>
                                    this.onBeforeScriptLoad(a, b),
                                };
                                this.options.bundleId
                                  ? e(this.path, this.options.bundleId, c)
                                  : e(this.path, c);
                              }))
                      : (f.on(
                          "Onetrust.activegroups.updated",
                          () => {
                            this.state.isConsentCallbackCalled ||
                              !this.isComponentConsentGiven() ||
                              this.state.loaded ||
                              (this.loadScript(),
                              (this.state.isConsentCallbackCalled = !0));
                          },
                          this,
                        ),
                        (this.state.hasConsentListener = !0),
                        Promise.resolve(this.state.data))
                    : Promise.reject(new Error("URL is missing"));
                }
                onScriptLoaded(a) {
                  (this.state.loaded = !0),
                    (this.state.loading = !1),
                    (this.state.data = a);
                }
                onScriptLoadFailed(a) {
                  (this.state.loading = !1), a && console.error(a.message);
                }
                onBeforeScriptLoad(a, b) {
                  return (
                    this.options.dataAttributes &&
                      Object.keys(this.options.dataAttributes).forEach((a) => {
                        b.setAttribute(a, this.options.dataAttributes[a]);
                      }),
                    !0
                  );
                }
                afterInit() {
                  this.options.loadScriptTimeout
                    ? setTimeout(() => {
                        this.loadScript();
                      }, this.options.loadScriptTimeout)
                    : this.loadScript();
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=ThirdPartyLoader.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components//dist/javascripts/components/global/ThirdPartyLoader.js.js
