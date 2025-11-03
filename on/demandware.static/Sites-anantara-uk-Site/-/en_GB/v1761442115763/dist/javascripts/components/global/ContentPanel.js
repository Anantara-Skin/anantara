(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "services/EventEmitter",
      "toolbox/event",
      "toolbox/animate",
      "toolbox/cookie",
      "toolbox/deepMerge",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              c = a.Event;
            },
            function (a) {
              (d = a.on), (e = a.off);
            },
            function (a) {
              f = a.transition;
            },
            function (a) {
              g = a.cookie;
            },
            function (a) {
              h = a.deepMerge;
            },
          ],
          execute: function () {
            a(
              "default",
              (i = class extends b {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    h(
                      {
                        classNames: {
                          closedState: "m-closed",
                          hidden: "h-hidden",
                          hasCloseIcon: "m-has-close-icon",
                        },
                        type: null,
                        onCloseCookieId: null,
                        closeTimeout: 0,
                        hideAnimationDelay: 500,
                        eventName: "contentPanel",
                        defaultMessage: null,
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  (this.selectors.closeButton =
                    this.element.querySelector("[data-js-close]")),
                    (this.selectors.content =
                      this.element.querySelector("[data-js-content]"));
                }
                initState() {
                  (this.state.type = null),
                    (this.state.isVisible = !this.element.classList.contains(
                      this.options.classNames.closedState,
                    ));
                }
                afterInit() {
                  (this.timeout = null),
                    this.setDisplayDelay(),
                    this.element.querySelector(".c-content-panel__close") &&
                      this.element.classList.add(
                        this.options.classNames.hasCloseIcon,
                      ),
                    c.emit("remindertooltip.update");
                }
                bindEvents() {
                  this.selectors.closeButton &&
                    d(
                      "click",
                      this.selectors.closeButton,
                      this.onCloseClick.bind(this),
                    ),
                    c.on(
                      "".concat(this.options.eventName, ".show"),
                      this.show,
                      this,
                    ),
                    c.on(
                      "".concat(this.options.eventName, ".hide"),
                      this.hide,
                      this,
                    ),
                    f(this.element, this.onPanelTransitionEnd.bind(this));
                }
                onCloseClick(a) {
                  a.preventDefault(),
                    this.options.onCloseCookieId &&
                      g.setCookie(this.options.onCloseCookieId, !0),
                    this.hide();
                }
                show() {
                  let a =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  const { type: b, closeTimeout: d } = a,
                    e = a.content || this.options.defaultMessage;
                  this.setDisplayDelay(d),
                    e && this.addContent(e),
                    this.setContentType(b),
                    this.state.isVisible ||
                      (this.element.classList.remove(
                        this.options.classNames.closedState,
                      ),
                      this.element.classList.remove(
                        this.options.classNames.hidden,
                      ),
                      this.element.setAttribute("aria-hidden", "false"),
                      (this.state.isVisible = !0)),
                    c.emit("remindertooltip.update");
                }
                setDisplayDelay() {
                  let a =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.options.closeTimeout;
                  0 < a &&
                    (this.timeout && clearTimeout(this.timeout),
                    (this.timeout = setTimeout(this.hide.bind(this), a)));
                }
                setContentType() {
                  let a =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.options.type;
                  this.state.type === a ||
                    (a
                      ? (this.element.setAttribute("data-type", a),
                        (this.state.type = a))
                      : this.state.type &&
                        (this.element.setAttribute("data-type", ""),
                        (this.state.type = null)));
                }
                addContent(a) {
                  a && (this.selectors.content.innerHTML = a);
                }
                hide() {
                  this.element.classList.add(
                    this.options.classNames.closedState,
                  ),
                    setTimeout(() => {
                      this.element.classList.add(
                        this.options.classNames.hidden,
                      ),
                        this.element.setAttribute("aria-hidden", "true"),
                        c.emit("remindertooltip.update");
                    }, this.options.hideAnimationDelay),
                    this.options.dataAnalytics &&
                      this.options.dataAnalytics.onClose &&
                      c.emit(
                        "analytics.event",
                        this.options.dataAnalytics.onClose,
                      ),
                    (this.state.isVisible = !1);
                }
                onPanelTransitionEnd() {
                  c.emit(
                    "".concat(this.options.eventName, ".transition.ended"),
                  );
                }
                destroy() {
                  e("click", this.selectors.closeButton),
                    c.removeListener(
                      "".concat(this.options.eventName, ".show"),
                      this.show,
                      this,
                    ),
                    c.removeListener(
                      "".concat(this.options.eventName, ".hide"),
                      this.hide,
                      this,
                    );
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=ContentPanel.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/global/ContentPanel.js
