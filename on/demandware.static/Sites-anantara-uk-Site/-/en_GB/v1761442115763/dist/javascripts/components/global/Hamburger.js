(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "services/EventEmitter",
      "toolbox/event",
      "toolbox/animate",
      "toolbox/deepMerge",
      "core/mixwith",
      "core/ComponentRegistry",
      "mixins/Accessibility",
      "toolbox/device",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i, j, k, l, m;
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
              (d = a.on), (e = a.off), (f = a.trigger);
            },
            function (a) {
              g = a.animate;
            },
            function (a) {
              h = a.deepMerge;
            },
            function (a) {
              i = a.mix;
            },
            function (a) {
              j = a.default;
            },
            function (a) {
              k = a.default;
            },
            function (a) {
              l = a.isKeyboardLikeClick;
            },
          ],
          execute: function () {
            a(
              "default",
              (m = class extends i(b).with(k) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    h(
                      {
                        contentPosition: "",
                        expandActiveAccordionItem: !1,
                        reloadData: { section: "common", id: "hamburger" },
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  (this.classes = {
                    active: "m-active",
                    opened: "m-opened",
                    openAnimationRight: "h-right-slide-in",
                    closeAnimationRight: "h-right-slide-out",
                    openAnimationLeft: "h-left-slide-in",
                    closeAnimationLeft: "h-left-slide-out",
                    menuSubmenuActive: "m-menu-submenu-active",
                    hamburgerOpened: "m-over-modal",
                  }),
                    "left" === this.options.contentPosition
                      ? ((this.animationOpen = this.classes.openAnimationLeft),
                        (this.animationClose = this.classes.closeAnimationLeft))
                      : ((this.animationOpen = this.classes.openAnimationRight),
                        (this.animationClose =
                          this.classes.closeAnimationRight)),
                    (this.selectors.button = this.element.querySelector(
                      "[data-js-hamburger-button]",
                    )),
                    (this.selectors.content = this.element.querySelector(
                      "[data-js-hamburger-content]",
                    )),
                    (this.selectors.navigationAccordion =
                      this.element.querySelectorAll(
                        "[data-js-navigation-accordion]",
                      )),
                    (this.selectors.headerAreaWrapper = this.element.closest(
                      "[data-js-header-area-wrapper]",
                    )),
                    (this.selectors.headerMobileNavigation =
                      this.element.closest(
                        "[data-js-header-mobile-navigation]",
                      ));
                }
                initState() {
                  (this.state.active = !1),
                    (this.state.contentScrollPosition = 0),
                    (this.state.isKeyboardControl = !1),
                    (this.state.headerOffsetPosition = 0),
                    (this.state.isAccordionExpanded = !1);
                }
                bindEvents() {
                  d("click", this.selectors.button, this.onClick.bind(this)),
                    d(
                      "keydown",
                      this.element,
                      this.onKeyboardControl.bind(this),
                    ),
                    d(
                      "mousedown",
                      this.element,
                      this.handleMousedown.bind(this),
                    ),
                    c.on("hamburger.menu.close", this.onHamburgerClose, this),
                    c.on("hamburger.submenu.toggle", this.toggleSubMenu, this),
                    c.on("login.success", this.loginRegistrationSuccess, this),
                    c.on(
                      "registration.success",
                      this.loginRegistrationSuccess,
                      this,
                    ),
                    c.on("global.close", this.onGlobalClose, this),
                    this.options.expandActiveAccordionItem &&
                      d(
                        "accordion.initialised",
                        this.element,
                        this.onAccordionInitialised.bind(this),
                      );
                }
                onAccordionInitialised(a) {
                  const b = a.target;
                  this.state.isAccordionExpanded ||
                    this.expandActiveAccordionItem(b);
                }
                expandActiveAccordionItem(a) {
                  if (!this.options.expandActiveAccordionItem) return;
                  a = a || this.element;
                  const b = a.querySelectorAll(
                      "[data-js-accordion-item] a.c-navigation__link",
                    ),
                    c = window.location.href;
                  Array.from(b).some((a) => {
                    if (a.href === c) {
                      let b = [],
                        c = a.parentElement;
                      for (; c; )
                        c.hasAttribute("data-js-accordion-item") && b.push(c),
                          (c = c.parentElement);
                      (b = b.reverse()),
                        b.forEach((a) => {
                          this.openAccordionItem(a);
                        }),
                        (this.state.isAccordionExpanded = !0),
                        (this.state.accordionItemsToExpand = b);
                    }
                    return this.state.isAccordionExpanded;
                  });
                }
                openAccordionItem(a) {
                  const b = a.closest('[data-component="global/Accordion"]');
                  b &&
                    j.afterRegistered(b).then(() => {
                      const c = j.getComponent(b);
                      c && c.open([a]);
                    });
                }
                onClick(a) {
                  a && l(a) && (this.state.isKeyboardControl = !0),
                    this.toggleHamburger.call(this);
                }
                handleMousedown() {
                  this.state.isKeyboardControl &&
                    (this.state.isKeyboardControl = !1);
                }
                onKeyboardControl(a) {
                  switch (a.key) {
                    case "Tab":
                      this.onTabKeyDown(a);
                      break;
                    case "Enter":
                    case " ":
                      this.state.isKeyboardControl = !0;
                      break;
                    case "Escape":
                      this.element.classList.contains(
                        this.classes.menuSubmenuActive,
                      )
                        ? c.emit("hamburgermenu.close")
                        : this.close(),
                        this.selectors.button.focus();
                      break;
                    default:
                  }
                }
                onTabKeyDown(a) {
                  this.state.active &&
                    (!a.shiftKey &&
                      "last" === a.target.getAttribute("data-js-focus-order") &&
                      (a.preventDefault(), this.selectors.button.focus()),
                    a.shiftKey &&
                      a.target === this.selectors.button &&
                      (a.preventDefault(),
                      this.element
                        .querySelector('[data-js-focus-order="last"]')
                        .focus()));
                }
                onHamburgerClose() {
                  this.close();
                }
                onGlobalClose() {
                  this.close(!0);
                }
                toggleHamburger() {
                  this.state.active ? this.close() : this.open();
                }
                open() {
                  if (
                    (c.emit("global.close"),
                    this.state.accordionItemsToExpand &&
                      this.state.accordionItemsToExpand.forEach((a) => {
                        this.openAccordionItem(a);
                      }),
                    (document.documentElement.style.overflow = "hidden"),
                    c.emit("hamburger.toggle", !0),
                    c.emit("overlay.open"),
                    c.emit("analytics.event", {
                      category: "burger menu",
                      action: "display::menu",
                      label: "picto",
                      extraData: {
                        event_name: "burger_menu_click",
                        click_action: "open",
                      },
                    }),
                    (this.state.active = !0),
                    c.once("overlay.close.before", this.close, this),
                    this.selectors.button.setAttribute("aria-expanded", !0),
                    this.element.setAttribute("role", "dialog"),
                    this.element.setAttribute("aria-modal", "true"),
                    this.element.classList.add(this.classes.active),
                    this.element.classList.add(this.classes.opened),
                    this.selectors.headerMobileNavigation &&
                      this.selectors.headerMobileNavigation.classList.add(
                        this.classes.hamburgerOpened,
                      ),
                    this.selectors.headerAreaWrapper)
                  ) {
                    const a =
                        this.selectors.headerAreaWrapper.getBoundingClientRect(),
                      b =
                        "bottom" === this.options.headerPosition
                          ? a.height
                          : a.bottom;
                    this.state.headerOffsetPosition !== b &&
                      ((this.state.headerOffsetPosition = b),
                      (this.selectors.content.style[
                        "bottom" === this.options.headerPosition
                          ? "bottom"
                          : "top"
                      ] = "".concat(this.state.headerOffsetPosition, "px")));
                  }
                  g(this.animationOpen, this.selectors.content).then(() => {
                    this.setFocusedOrder(this.element),
                      this.state.isKeyboardControl &&
                        (this.selectors.button.blur(),
                        setTimeout(() => {
                          this.element
                            .querySelector('[data-js-focus-order="first"]')
                            .focus();
                        }, 0));
                  });
                }
                close() {
                  let a =
                    !!(0 < arguments.length && void 0 !== arguments[0]) &&
                    arguments[0];
                  if (this.state.active) {
                    (this.state.active = !1),
                      c.emit("hamburger.toggle", !1),
                      c.emit("overlay.close"),
                      c.emit("hamburgermenu.close"),
                      c.emit("analytics.event", {
                        category: "burger menu",
                        action: "display::menu",
                        label: "picto",
                        extraData: {
                          event_name: "burger_menu_click",
                          click_action: "close",
                        },
                      }),
                      this.selectors.navigationAccordion &&
                        this.selectors.navigationAccordion.forEach((a) => {
                          f("accordion.close", a);
                        }),
                      this.selectors.headerMobileNavigation &&
                        this.selectors.headerMobileNavigation.classList.remove(
                          this.classes.hamburgerOpened,
                        ),
                      this.selectors.button.setAttribute("aria-expanded", !1),
                      this.element.removeAttribute("aria-modal"),
                      this.element.removeAttribute("role", "dialog"),
                      this.element.classList.remove(this.classes.active);
                    const b = () => {
                      this.element.classList.remove(this.classes.opened);
                    };
                    return (
                      (document.documentElement.style.overflow = ""),
                      this.resetFocusedOrder(this.element),
                      a
                        ? void b()
                        : void g(
                            this.animationClose,
                            this.selectors.content,
                          ).then(b)
                    );
                  }
                }
                toggleSubMenu(a) {
                  a
                    ? (this.resetFocusedOrder(this.element),
                      (this.state.contentScrollPosition =
                        this.selectors.content.scrollTop),
                      (this.selectors.content.scrollTop = 0),
                      this.element.classList.add(
                        this.classes.menuSubmenuActive,
                      ))
                    : ((this.selectors.content.scrollTop =
                        this.state.contentScrollPosition),
                      this.element.classList.remove(
                        this.classes.menuSubmenuActive,
                      ),
                      this.setFocusedOrder(this.element));
                }
                loginRegistrationSuccess() {
                  this.reload();
                }
                destroy() {
                  e(this.selectors.button),
                    e(this.element),
                    c.removeListener(
                      "hamburger.menu.close",
                      this.onHamburgerClose,
                      this,
                    ),
                    c.removeListener(
                      "hamburger.submenu.toggle",
                      this.toggleSubMenu,
                      this,
                    ),
                    c.removeListener(
                      "login.success",
                      this.loginRegistrationSuccess,
                      this,
                    ),
                    c.removeListener(
                      "registration.success",
                      this.loginRegistrationSuccess,
                      this,
                    ),
                    c.removeListener("global.close", this.onGlobalClose, this);
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=Hamburger.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/global/Hamburger.js
