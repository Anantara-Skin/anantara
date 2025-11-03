(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "toolbox/deepMerge",
      "services/EventEmitter",
      "toolbox/event",
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
              d = a.Event;
            },
            function (a) {
              (e = a.on), (f = a.off);
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
                        sustain: 700,
                        timeoutMs: 5e3,
                        preventStacking: !1,
                        interactive: !1,
                      },
                      b,
                    ),
                  );
                }
                initState() {
                  (this.state.currentNotification = null),
                    (this.state.stack = []),
                    (this.state.timeoutId = null);
                }
                bindEvents() {
                  d.on("snackbar.notify", this._onNotify.bind(this), this),
                    d.on("snackbar.close", this._onClose.bind(this), this),
                    d.on("global.update", this.onGlobalUpdate.bind(this));
                }
                _onClose() {
                  null !== this.state.timeoutId &&
                    (window.clearTimeout(this.state.timeoutId),
                    window.requestAnimationFrame(
                      this.removeNotification.bind(this, !1),
                    ));
                }
                _onNotify(a) {
                  let b =
                    !!(1 < arguments.length && void 0 !== arguments[1]) &&
                    arguments[1];
                  this.addNotification(a, b);
                }
                _removeNotificationEvents() {
                  null !== this.state.currentNotification &&
                    f(
                      "click",
                      this.state.currentNotification.querySelector(
                        "[data-js-close]",
                      ),
                    );
                }
                addNotification(a, b) {
                  b && this.clearAllNotifications(),
                    this.state.stack.push(a),
                    1 === this.state.stack.length &&
                      this.createNotification(this.state.stack[0]);
                }
                createNotification(a) {
                  const b = a.timeoutMs || this.options.timeoutMs,
                    c =
                      '\n            <span class="c-snackbar__label"><span class="c-snackbar__content" data-js-content>'.concat(
                        a.content,
                        '</span></span>\n            <i class="c-snackbar__close" data-js-close></i>\n        ',
                      ),
                    f = document.createElement("div");
                  switch (
                    (f.classList.add("c-snackbar__surface"),
                    (f.innerHTML = c),
                    a.type)
                  ) {
                    case "success":
                      f.classList.add("m-success");
                      break;
                    case "warning":
                      f.classList.add("m-warning");
                      break;
                    case "error":
                      f.classList.add("m-error");
                      break;
                    default:
                  }
                  this.element.appendChild(f),
                    (this.state.currentNotification = f),
                    (this.state.timeoutId = window.setTimeout(() => {
                      window.requestAnimationFrame(
                        this.removeNotification.bind(this, !1),
                      );
                    }, b)),
                    (this.options.interactive || a.interactive) &&
                      d.emit("registry.registerChildren", f),
                    e(
                      "click",
                      this.state.currentNotification.querySelector(
                        "[data-js-close]",
                      ),
                      this._onClose.bind(this),
                    );
                }
                removeNotification() {
                  let a =
                    !!(0 < arguments.length && void 0 !== arguments[0]) &&
                    arguments[0];
                  this._removeNotificationEvents(),
                    this.state.currentNotification &&
                      this.element.removeChild(this.state.currentNotification),
                    (this.state.currentNotification = null),
                    this.state.stack.shift(),
                    (this.state.timeoutId = null),
                    this.state.stack.length &&
                      !a &&
                      window.setTimeout(() => {
                        window.requestAnimationFrame(
                          this.createNotification.bind(
                            this,
                            this.state.stack[0],
                          ),
                        );
                      }, this.options.sustain);
                }
                onGlobalUpdate(a) {
                  a.snackbarNotifications &&
                    a.snackbarNotifications.forEach((a) => {
                      this.addNotification(a);
                    });
                }
                clearAllNotifications() {
                  null !== this.state.timeoutId &&
                    window.clearTimeout(this.state.timeoutId);
                  const a = this.state.stack.length;
                  for (let b = 0; b < a; b++) this.removeNotification(!0);
                }
                destroy() {
                  d.removeListener(
                    "snackbar.notify",
                    this._onNotify.bind(this),
                    this,
                  ),
                    d.removeListener(
                      "snackbar.close",
                      this._onClose.bind(this),
                      this,
                    ),
                    this._removeNotificationEvents();
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=Snackbar.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/global/Snackbar.js
