(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "toolbox/deepMerge",
      "core/mixwith",
      "mixins/Accessibility",
      "toolbox/event",
      "toolbox/animate",
      "services/EventEmitter",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i, j;
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
              d = a.mix;
            },
            function (a) {
              e = a.default;
            },
            function (a) {
              (f = a.on), (g = a.off);
            },
            function (a) {
              h = a.animate;
            },
            function (a) {
              i = a.Event;
            },
          ],
          execute: function () {
            a(
              "default",
              (j = class extends d(b).with(e) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    c(
                      {
                        menuSelector: null,
                        triggerSelector: null,
                        classNames: {
                          openAnimation: "h-right-slide-in",
                          closeAnimation: "h-right-slide-out",
                        },
                        a11y: {
                          submenuAriaLiveOpened: "",
                          submenuAriaLiveClosed: "",
                        },
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  (this.classes = { opened: "m-opened", opening: "m-opening" }),
                    (this.selectors.hamburgerContent = this.element.closest(
                      "[data-js-hamburger-content]",
                    )),
                    (this.selectors.arialive =
                      this.element.closest("[data-js-hamburger]") &&
                      this.element
                        .closest("[data-js-hamburger]")
                        .querySelector("[data-js-hamburger-aria-live]")),
                    (this.selectors.backButton = this.element.querySelector(
                      "[data-js-menu-back]",
                    )),
                    (this.selectors.menu = this.element.querySelector(
                      this.options.menuSelector,
                    )),
                    (this.selectors.trigger =
                      this.options.triggerSelector &&
                      this.element.querySelector(this.options.triggerSelector));
                }
                initState() {
                  this.state.opened = !1;
                }
                bindEvents() {
                  this.selectors.trigger &&
                    f(
                      "click",
                      this.selectors.trigger,
                      this.toggleMenu.bind(this),
                    ),
                    this.selectors.backButton &&
                      f(
                        "click",
                        this.selectors.backButton,
                        this.toggleMenu.bind(this),
                      ),
                    i.on("hamburgermenu.close", this.hamburgerMenuClose, this);
                }
                toggleMenu() {
                  this.state.opened ? this.close() : this.open();
                }
                hamburgerMenuClose() {
                  this.state.opened && this.close();
                }
                open() {
                  return (
                    this.resetFocusedOrder(this.element),
                    this.emitHamburgerEvents(!0),
                    this.updateAriaAttributes(!0),
                    this.selectors.menu.classList.add(this.classes.opening),
                    h(
                      this.options.classNames.openAnimation,
                      this.selectors.menu,
                    ).then(() => {
                      (this.state.opened = !0),
                        this.selectors.menu.classList.add(this.classes.opened),
                        this.selectors.menu.classList.remove(
                          this.classes.opening,
                        ),
                        this.setFocusedOrder(this.element),
                        this.selectors.hamburgerContent
                          .querySelector('[data-js-focus-order="first"]')
                          .focus(),
                        this.triggerAnalytics();
                    })
                  );
                }
                close() {
                  return (
                    this.resetFocusedOrder(this.element),
                    this.emitHamburgerEvents(!1),
                    this.updateAriaAttributes(!1),
                    h(
                      this.options.classNames.closeAnimation,
                      this.selectors.menu,
                    ).then(() => {
                      (this.state.opened = !1),
                        this.selectors.menu.classList.remove(
                          this.classes.opened,
                        ),
                        this.selectors.hamburgerContent &&
                          this.setFocusedOrder(this.selectors.hamburgerContent),
                        this.selectors.trigger.focus();
                    })
                  );
                }
                emitHamburgerEvents(a) {
                  i.emit("hamburger.submenu.toggle", a),
                    a || i.emit("hamburger.submenu.close", this.id);
                }
                updateAriaAttributes(a) {
                  this.selectors.trigger &&
                    this.selectors.trigger.setAttribute("aria-expanded", a),
                    this.selectors.backButton.setAttribute("aria-expanded", a),
                    this.selectors.arialive &&
                      (this.selectors.arialive.innerText = a
                        ? this.options.a11y.submenuAriaLiveOpened
                        : this.options.a11y.submenuAriaLiveClosed);
                }
                triggerAnalytics() {
                  this.analytics &&
                    Object.keys(this.analytics).length &&
                    i.emit("analytics.event", this.analytics);
                }
                destroy() {
                  this.selectors.trigger && g("click", this.selectors.trigger),
                    this.selectors.backButton &&
                      g("click", this.selectors.backButton),
                    i.removeListener(
                      "hamburgermenu.close",
                      this.hamburgerMenuClose,
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
  //# sourceMappingURL=HamburgerMenu.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/global/HamburgerMenu.js
