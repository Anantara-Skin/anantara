(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "services/EventEmitter",
      "toolbox/event",
      "toolbox/deepMerge",
      "core/mixwith",
      "mixins/Accessibility",
      "toolbox/mediaQuery",
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
              c = a.Event;
            },
            function (a) {
              (d = a.on), (e = a.off);
            },
            function (a) {
              f = a.deepMerge;
            },
            function (a) {
              g = a.mix;
            },
            function (a) {
              h = a.default;
            },
            function (a) {
              i = a.mediaQuery;
            },
          ],
          execute: function () {
            a(
              "default",
              (j = class extends g(b).with(h) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    f(
                      {
                        templateName: "header/navigationmenu",
                        displayTimeout: 200,
                        _resizable: !0,
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  (this.classNames = {
                    navigationInit: "m-init",
                    navigationOpened: "m-opened",
                  }),
                    (this.selectors = {
                      rootItem: "[data-js-root-item]",
                      rootButton: "[data-js-root-button]",
                      menuItem: "[data-js-menu-item]",
                      navigation: "[data-js-navigation-meganav]",
                      menuItemTitle: "[data-js-menu-item-title]",
                    }),
                    (this.selectors.rootItems = this.element.querySelectorAll(
                      this.selectors.rootItem,
                    )),
                    (this.selectors.rootButtons = this.element.querySelectorAll(
                      this.selectors.rootButton,
                    )),
                    (this.selectors.menuItems = this.element.querySelectorAll(
                      this.selectors.menuItem,
                    )),
                    (this.selectors.menuItemsTitle =
                      this.element.querySelectorAll(
                        this.selectors.menuItemTitle,
                      )),
                    (this.currentOpenedElement = null),
                    (this.openTimeout = null),
                    (this.activeTimeout = null);
                }
                initState() {
                  (this.state.isActive = !1),
                    (this.state.areDocumentEventsBound = !1);
                }
                afterInit() {
                  i.is("xlarge") && this.setNavigationItemTitleStyle();
                }
                bindEvents() {
                  d(
                    "mouseenter",
                    this.selectors.rootItems,
                    this.onNavigationHover.bind(this),
                    !1,
                  ),
                    d(
                      "mouseleave",
                      this.selectors.rootItems,
                      this.onNavigationLeave.bind(this),
                      !1,
                    ),
                    d(
                      "keydown",
                      this.selectors.rootItems,
                      this.onNavigationItemKeyDown.bind(this),
                    ),
                    d(
                      "click",
                      this.selectors.rootButtons,
                      this.onNavigationButtonClick.bind(this),
                    );
                }
                onResize() {
                  i.is("xlarge") &&
                    (this.selectors.menuItemsTitle.forEach((a) => {
                      a.style.minHeight = 0;
                    }),
                    this.setNavigationItemTitleStyle());
                }
                setNavigationItemTitleStyle() {
                  this.element.classList.add(this.classNames.navigationInit),
                    this.selectors.menuItems.forEach((a) => {
                      const b = a.querySelectorAll(
                          this.selectors.menuItemTitle,
                        ),
                        c = Math.max(...[...b].map((a) => a.offsetHeight), 0);
                      b.forEach((a) => {
                        a.style.minHeight = "".concat(c, "px");
                      });
                    }),
                    this.element.classList.remove(
                      this.classNames.navigationInit,
                    );
                }
                showNavigationItem(a) {
                  this.closeCurrentNavigationItem(),
                    this.openTimeout && (this.openTimeout = null),
                    this.activeTimeout &&
                      (clearTimeout(this.activeTimeout),
                      (this.activeTimeout = null)),
                    (this.state.isActive = !0),
                    a.classList.add(this.classNames.navigationOpened),
                    (this.currentOpenedElement = a),
                    a
                      .querySelector(this.selectors.rootButton)
                      .setAttribute("aria-expanded", !0),
                    a.querySelectorAll(this.selectors.menuItem).forEach((a) => {
                      a.setAttribute("aria-hidden", !1);
                    }),
                    this.bindDocumentNavigationEvents(),
                    this.setFocusedOrder(a),
                    c.emit("simplesearch.close");
                }
                closeCurrentNavigationItem() {
                  this.currentOpenedElement &&
                    (this.resetFocusedOrder(this.currentOpenedElement),
                    this.currentOpenedElement.classList.remove(
                      this.classNames.navigationOpened,
                    ),
                    (this.currentOpenedElement = null),
                    this.selectors.rootButtons.forEach((a) => {
                      a.setAttribute("aria-expanded", !1);
                    }),
                    this.selectors.menuItems.forEach((a) => {
                      a.setAttribute("aria-hidden", !0);
                    }),
                    (this.activeTimeout = setTimeout(() => {
                      this.state.isActive = !1;
                    }, this.options.displayTimeout)));
                }
                onNavigationHover(a) {
                  const b = a.target;
                  b.querySelector(this.selectors.navigation) &&
                    (this.state.isActive
                      ? this.showNavigationItem(b)
                      : (this.openTimeout = setTimeout(
                          this.showNavigationItem.bind(this, b),
                          this.options.displayTimeout,
                        )));
                }
                onNavigationLeave() {
                  this.openTimeout
                    ? (clearTimeout(this.openTimeout),
                      (this.openTimeout = null))
                    : this.closeCurrentNavigationItem();
                }
                onNavigationItemKeyDown(a) {
                  switch (a.key) {
                    case "Tab":
                      this.onTabKeyDown(a);
                      break;
                    case "Enter":
                    case " ":
                      "A" !== a.target.nodeName &&
                        (a.preventDefault(), this.toggleNavigationItem(a));
                      break;
                    case "Escape":
                      if (this.state.isActive) {
                        a.preventDefault();
                        const b = a.currentTarget.closest(
                          this.selectors.rootItem,
                        );
                        b.querySelector(this.selectors.rootButton).focus();
                      }
                      break;
                    default:
                  }
                }
                onTabKeyDown(a) {
                  this.state.isActive && super.focusTrap(this.element, a);
                }
                bindDocumentNavigationEvents() {
                  this.state.areDocumentEventsBound ||
                    (d(
                      "keydown.".concat(this.id),
                      document,
                      this.onDocumentKeyDown.bind(this),
                    ),
                    (this.state.areDocumentEventsBound = !0));
                }
                unbindDocumentNavigationEvents() {
                  this.state.areDocumentEventsBound &&
                    (e("keydown.".concat(this.id), document),
                    (this.state.areDocumentEventsBound = !1));
                }
                onDocumentKeyDown(a) {
                  this.state.isActive &&
                    a &&
                    -1 !== ["Escape"].indexOf(a.key) &&
                    (a.preventDefault(), this.closeCurrentNavigationItem());
                }
                onNavigationButtonClick(a) {
                  this.toggleNavigationItem(a);
                }
                toggleNavigationItem(a) {
                  const b = a.currentTarget.closest(this.selectors.rootItem);
                  this.state.isActive
                    ? this.closeCurrentNavigationItem()
                    : this.showNavigationItem(b);
                }
                destroy() {
                  e(this.selectors.rootItems),
                    e(this.selectors.rootButtons),
                    this.unbindDocumentNavigationEvents();
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=Navigation.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/global/Navigation.js
