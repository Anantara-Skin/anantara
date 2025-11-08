(function (System, SystemJS) {
  "use strict";
  System.register(["core/mixwith", "toolbox/deepMerge"], function (a) {
    "use strict";
    var b, c;
    return {
      setters: [
        function (a) {
          b = a.Mixin;
        },
        function (a) {
          c = a.deepMerge;
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
                  super(
                    a,
                    c(
                      {
                        classNames: {
                          loading: "",
                          overlayLoading: "c-loader",
                        },
                        loadTime: 200,
                        loadingStatusMessageDelay: 1e3,
                      },
                      b,
                    ),
                    d,
                  );
                }
                initState() {
                  super.initState(),
                    (this.state.isLoading = !1),
                    (this.state.overlay = null),
                    (this.state.loaderTimeout = null);
                }
                addLoader(a, b) {
                  if (this.state.isLoading) return;
                  this.state.isLoading = !0;
                  const c = this.options.classNames.loading;
                  (this.state.loaderTimeout = setTimeout(() => {
                    a ? a.classList.add(c) : this.element.classList.add(c);
                  }, this.options.loadTime)),
                    b &&
                      b.overlay &&
                      this.addOverlayLoader(
                        a,
                        null,
                        Object.assign(
                          { spinnerInContainer: !0 },
                          b.overlayOptions || {},
                        ),
                      ),
                    this.options.statusMessage &&
                      (this.state.statusMessageTimeout = setTimeout(() => {
                        this.updateStatusMessage(this.options.statusMessage);
                      }, this.options.loadingStatusMessageDelay));
                }
                removeLoader(a) {
                  if (this.state && this.state.isLoading) {
                    this.state.loaderTimeout &&
                      clearTimeout(this.state.loaderTimeout),
                      this.state.statusMessageTimeout &&
                        clearTimeout(this.state.statusMessageTimeout),
                      (this.state.isLoading = !1);
                    const b = a || this.element;
                    this.state.overlay &&
                      (b.contains(this.state.overlay) &&
                        b.removeChild(this.state.overlay),
                      (b.style.position = null),
                      (this.state.overlay = null)),
                      b.classList.remove(this.options.classNames.loading);
                  }
                }
                addOverlayLoader(a, b) {
                  let c =
                    2 < arguments.length && arguments[2] !== void 0
                      ? arguments[2]
                      : {};
                  a || (a = this.element),
                    this.state.overlay ||
                      ((this.state.overlay = document.createElement("div")),
                      (this.state.overlay.className =
                        b || this.options.classNames.overlayLoading),
                      !c.spinnerInContainer &&
                        this.state.overlay.classList.add("m-icon-fixed")),
                    a.appendChild(this.state.overlay),
                    (a.style.position = "relative");
                }
                updateStatusMessage(a) {
                  if (
                    ((this.selectors.statusMessage = document.querySelector(
                      "[data-js-global-status-message]",
                    )),
                    this.selectors.statusMessage)
                  ) {
                    "boolean" == typeof a &&
                      (a = this.selectors.statusMessage.getAttribute(
                        a ? "data-processing-text" : "data-finished-text",
                      )),
                      this.statusMessageTimer &&
                        clearTimeout(this.statusMessageTimer);
                    const { statusMessage: b } = this.selectors;
                    (b.innerHTML = a),
                      (this.statusMessageTimer = setTimeout(() => {
                        b.innerHTML = "";
                      }, 5e3));
                  }
                }
              },
          ),
        );
      },
    };
  });
  //# sourceMappingURL=Loader.js.map
})(System, System);
//# sourceURL=/dist/javascripts/mixins/Loader.js
