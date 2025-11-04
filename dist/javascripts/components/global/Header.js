(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "core/mixwith",
      "services/EventEmitter",
      "toolbox/mediaQuery",
      "toolbox/event",
      "toolbox/animate",
      "toolbox/deepMerge",
      "mixins/Accessibility",
      "toolbox/object",
      "toolbox/device",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i, j, k, l, m, n;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              c = a.mix;
            },
            function (a) {
              d = a.Event;
            },
            function (a) {
              e = a.mediaQuery;
            },
            function (a) {
              (f = a.on), (g = a.off), (h = a.trigger);
            },
            function (a) {
              i = a.animate;
            },
            function (a) {
              j = a.deepMerge;
            },
            function (a) {
              k = a.default;
            },
            function (a) {
              l = a.tryParseJSON;
            },
            function (a) {
              m = a.isKeyboardLikeClick;
            },
          ],
          execute: function () {
            a(
              "default",
              (n = class extends c(b).with(k) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    j(
                      {
                        enableSticky: !0,
                        _resizable: !0,
                        _scrollable: !0,
                        hideOnScroll: !0,
                        hideElementOnScroll: [],
                        enableAnimatedLogo: !1,
                        animatedLogoThreshold: 0,
                        animatedLogoDelay: 2e3,
                        breakpoints: {
                          large: { anchor: "[data-js-anchor-large]" },
                        },
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  (this.sentinelObserver = null),
                    (this.headerObserver = null),
                    (this.animationTimeout = null),
                    (this.classNames = {
                      active: "m-active",
                      focused: "m-focused",
                      sticked: "m-sticked",
                      disabled: "m-disabled",
                      hamburgerOpened: "m-hamburger-active",
                      quickSearchOpened: "m-search-active",
                      searchSuggestionsOpened: "m-search-suggestions-active",
                      animationEnter: "h-fade-in",
                      animationLeave: "h-fade-out",
                      hidden: "h-hidden",
                    }),
                    this.options.enableSticky &&
                      ((this.selectors.anchorElement = e.is("xlarge")
                        ? document.querySelector("[data-js-anchor-large]")
                        : document.querySelector("[data-js-anchor]")),
                      (this.selectors.headerInner = this.element.querySelector(
                        "[data-js-header-inner]",
                      ))),
                    (this.selectors.searchContainer =
                      this.element.querySelector(
                        "[data-js-header-search-container]",
                      )),
                    (this.selectors.simpleSearchCta = e.is("xlarge")
                      ? this.element.querySelector(
                          "[data-js-header-search-cta-large]",
                        )
                      : this.element.querySelector(
                          "[data-js-header-search-cta]",
                        )),
                    (!this.options.hideOnScroll ||
                      this.options.hideElementOnScroll) &&
                      (this.headerStickyHidden = this.element.querySelectorAll(
                        "[data-js-header-sticky-hidden]",
                      )),
                    this.element.classList.contains("m-compact") &&
                      (this.classNames.sticked = "m-sticked-compact"),
                    this.options.enableAnimatedLogo &&
                      !e.is("xlarge") &&
                      (this.selectors.headerLogo = this.element.querySelector(
                        "[data-js-header-logo]",
                      ));
                }
                initState() {
                  (this.state.isSticky = !1),
                    (this.state.isDisabled = !1),
                    (this.state.wasDisabled = !1),
                    (this.state.searchOpened = !1),
                    (this.state.hamburgerOpened = !1),
                    (this.state.hasSentinel = !1),
                    (this.state.lastScrollTop = void 0),
                    (this.state.isHeaderTransparent = !1),
                    (this.state.isLogoAnimating = !1),
                    (this.state.isKeyboardControl = !1);
                }
                bindEvents() {
                  this.options.enableSticky &&
                    d.on(
                      "contentPanel.transition.ended",
                      this.updateHeight,
                      this,
                    ),
                    this.selectors.simpleSearchCta &&
                      f(
                        "click",
                        this.selectors.simpleSearchCta,
                        this.toggleSearchBar.bind(this),
                      ),
                    f(
                      "keydown",
                      this.selectors.searchContainer,
                      this.onKeyboardControl.bind(this),
                    ),
                    f(
                      "simplesearch.results.show",
                      this.element,
                      this.onOpenSearchSuggestions.bind(this),
                    ),
                    f(
                      "simplesearch.results.hide",
                      this.element,
                      this.onCloseSearchSuggestion.bind(this),
                    ),
                    f(
                      "simplesearch.overlay.closed",
                      this.element,
                      this.onSearchOverlayClosed.bind(this),
                    ),
                    d.on("simplesearch.toggle", this.toggleSearchBar, this),
                    d.on("simplesearch.close", this.onSearchClose, this),
                    d.on("hamburger.toggle", this.toggleHamburger, this),
                    d.on("sticky.stick", this.checkHeaderHeight, this),
                    d.on("contentPanel.hide", this.checkHeaderHeight, this),
                    d.on("global.close", this.onGlobalClose, this),
                    this.state.isHeaderTransparent &&
                      (d.on("header.focused", this.headerFocused, this),
                      d.on("header.unfocused", this.headerUnfocused, this));
                }
                afterInit() {
                  (this.state.isHeaderTransparent =
                    document.body.classList.contains("header-transparent")),
                    this.options.enableSticky &&
                      (super.saveOriginalTabIndex(),
                      this.addHeaderObserver(),
                      this.addSentinel()),
                    this.options.enableAnimatedLogo &&
                      !e.is("xlarge") &&
                      this.animateLogo();
                }
                headerFocused() {
                  this.element.classList.contains(this.classNames.focused) ||
                    this.element.classList.add(this.classNames.focused);
                }
                headerUnfocused() {
                  this.element.classList.contains(this.classNames.focused) &&
                    this.element.classList.remove(this.classNames.focused);
                }
                onKeyboardControl(a) {
                  switch (a.key) {
                    case "Tab":
                      a.shiftKey ||
                        "last" !==
                          a.target.getAttribute("data-js-focus-order") ||
                        (this.isElementFocusable(this.triggerElement)
                          ? (a.preventDefault(),
                            this.trapFocusElement(
                              this.triggerElement,
                              this.onTriggerElementKeydown.bind(this),
                            ))
                          : this.closeSearchBar()),
                        a.shiftKey &&
                          "first" ===
                            a.target.getAttribute("data-js-focus-order") &&
                          (this.isElementFocusable(this.triggerElement)
                            ? (a.preventDefault(),
                              this.trapFocusElement(
                                this.triggerElement,
                                this.onTriggerElementKeydown.bind(this),
                              ))
                            : this.closeSearchBar());
                      break;
                    case "Escape":
                      this.closeSearchBar(), this.triggerElement.focus();
                      break;
                    default:
                  }
                }
                onTriggerElementKeydown(a) {
                  switch (a.key) {
                    case "Tab": {
                      a.preventDefault();
                      const b = this.getFocusableElements(
                        this.selectors.searchContainer,
                      );
                      if (!a.shiftKey) {
                        const a =
                          b.find(
                            (a) =>
                              "first" === a.getAttribute("data-js-focus-order"),
                          ) || b[0];
                        a && a.focus();
                      } else {
                        const a =
                          b.find(
                            (a) =>
                              "last" === a.getAttribute("data-js-focus-order"),
                          ) || b[b.length - 1];
                        a && a.focus();
                      }
                      this.untrapFocusElement(this.triggerElement);
                      break;
                    }
                    case "Escape":
                      this.closeSearchBar(),
                        this.untrapFocusElement(this.triggerElement);
                      break;
                    default:
                      a.shouldStopImmediatePropagation = !1;
                  }
                }
                addHeaderObserver() {
                  (this.headerObserver = new IntersectionObserver(
                    (a) => {
                      const b = a[0];
                      1 > b.intersectionRatio && this.enableSticky();
                    },
                    { threshold: [0, 1] },
                  )),
                    this.selectors.anchorElement &&
                      this.headerObserver.observe(this.selectors.anchorElement);
                }
                checkHeaderHeight() {
                  const a = this.state.isDisabled
                    ? 0
                    : this.selectors.headerInner.getBoundingClientRect().height;
                  ((!this.options.hideOnScroll &&
                    this.options.hideElementOnScroll) ||
                    this.state.wasDisabled !== this.state.isDisabled) &&
                    d.emit("header.updateHeight", {
                      height: a,
                      isSticky: !this.state.isDisabled,
                    }),
                    (this.state.wasDisabled = this.state.isDisabled);
                }
                updateHeight(a) {
                  let b = "auto";
                  this.state.isSticky &&
                    (b = a || this.element.getBoundingClientRect().height),
                    (this.element.style.height =
                      "auto" === b ? b : "".concat(b, "px")),
                    this.checkHeaderHeight();
                }
                toggleHamburger(a) {
                  (this.state.hamburgerOpened = a),
                    this.state.hamburgerOpened
                      ? this.element.classList.add(
                          this.classNames.hamburgerOpened,
                        )
                      : setTimeout(() => {
                          this.element.classList.remove(
                            this.classNames.hamburgerOpened,
                          );
                        }, 200);
                }
                toggleSearchBar() {
                  let a =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this._triggerElement = a.triggerElement),
                    (this.state.isKeyboardControl =
                      e.is("medium down") && a.isKeyboardControl
                        ? a.isKeyboardControl
                        : m(a)),
                    this.state.searchOpened
                      ? this.closeSearchBar()
                      : this.openSearchBar();
                }
                get triggerElement() {
                  return this._triggerElement || this.selectors.simpleSearchCta;
                }
                openSearchBar() {
                  d.emit("global.close");
                  const { quickSearchOpened: a, animationEnter: b } =
                    this.classNames;
                  return (
                    this.element.classList.add(a),
                    (this.state.searchOpened = !0),
                    this.selectors.simpleSearchCta &&
                      this.selectors.simpleSearchCta.setAttribute(
                        "aria-expanded",
                        "true",
                      ),
                    e.is("xlarge") &&
                      d.emit("overlay.open", {
                        onClose: () => {
                          h("simplesearch.overlay.closed", this.element, {
                            bubbles: !0,
                          }),
                            h("simplesearch.results.hide", this.element, {
                              bubbles: !0,
                            });
                        },
                      }),
                    d.emit("hamburger.menu.close"),
                    d.emit("header.search.open"),
                    d.emitStateUpdate("simplesearch.state.updated", {
                      searchOpened: this.state.searchOpened,
                    }),
                    this.isElementFocusable(this.triggerElement) &&
                      this.state.isKeyboardControl &&
                      this.trapFocusElement(
                        this.triggerElement,
                        this.onTriggerElementKeydown.bind(this),
                      ),
                    i(b, this.selectors.searchContainer).then(() => {
                      if (this.selectors.simpleSearchCta) {
                        const a = l(
                          this.selectors.simpleSearchCta.getAttribute(
                            "data-analytics",
                          ),
                        );
                        a && d.emit("analytics.event", a);
                      }
                    })
                  );
                }
                closeSearchBar() {
                  let a =
                    !!(0 < arguments.length && void 0 !== arguments[0]) &&
                    arguments[0];
                  if (!this.state.searchOpened) return Promise.resolve();
                  const { quickSearchOpened: b, animationLeave: c } =
                    this.classNames;
                  d.emit("overlay.close");
                  const e = () => {
                    d.emit("header.search.close"),
                      (this.state.searchOpened = !1),
                      d.emitStateUpdate("simplesearch.state.updated", {
                        searchOpened: this.state.searchOpened,
                      }),
                      this.element.classList.remove(b),
                      this.selectors.simpleSearchCta &&
                        this.selectors.simpleSearchCta.setAttribute(
                          "aria-expanded",
                          "false",
                        );
                  };
                  return a
                    ? (e(), Promise.resolve())
                    : i(c, this.selectors.searchContainer).then(e);
                }
                onScroll() {
                  if (
                    (this.options.enableAnimatedLogo &&
                      !e.is("xlarge") &&
                      this.animateLogo(),
                    this.state.isSticky && !this.state.hamburgerOpened)
                  ) {
                    if (
                      !this.options.hideOnScroll &&
                      this.options.hideElementOnScroll
                    )
                      return void this.toggleHeaderWrapperOnScroll();
                    const a = window.scrollY;
                    a < this.state.lastScrollTop && this.state.isDisabled
                      ? (this.element.classList.remove(
                          this.classNames.disabled,
                        ),
                        this.element.classList.add(this.classNames.sticked),
                        (this.state.isDisabled = !1))
                      : a > this.state.lastScrollTop &&
                        !this.state.isDisabled &&
                        (this.element.classList.add(this.classNames.disabled),
                        (this.state.isDisabled = !0)),
                      this.checkHeaderHeight(),
                      (this.state.lastScrollTop = a);
                  }
                }
                onSearchOverlayClosed() {
                  this.closeSearchBar();
                }
                onSearchClose(a) {
                  this.closeSearchBar(),
                    a && a.restoreFocus && this.triggerElement.focus();
                }
                onGlobalClose() {
                  this.closeSearchBar(!0);
                }
                onOpenSearchSuggestions() {
                  this.element.classList.add(
                    this.classNames.searchSuggestionsOpened,
                  ),
                    (this.state.searchSuggestionsOpened = !0);
                }
                onCloseSearchSuggestion() {
                  this.state.searchSuggestionsOpened &&
                    (this.element.classList.remove(
                      this.classNames.searchSuggestionsOpened,
                    ),
                    (this.state.searchSuggestionsOpened = !1));
                }
                onResize() {
                  this.updateHeight();
                }
                enableSticky() {
                  this.state.isSticky ||
                    ((this.state.isSticky = !0),
                    this.updateHeight(),
                    (!this.options.hideOnScroll || this.state.searchOpened) &&
                      this.element.classList.add(this.classNames.sticked),
                    this.checkHeaderHeight(),
                    d.emit("header.sticky.enabled"),
                    d.emit("hamburger.menu.close"),
                    e.is("xlarge") && this.setAccessibility(),
                    !this.options.hideOnScroll &&
                      this.options.hideElementOnScroll &&
                      this.toggleHeaderWrapperOnScroll());
                }
                disableSticky() {
                  (this.state.isSticky = !1),
                    (this.state.isDisabled = !1),
                    this.updateHeight("auto"),
                    this.element.classList.remove(this.classNames.sticked),
                    this.element.classList.remove(this.classNames.disabled),
                    this.checkHeaderHeight(),
                    d.emit("header.sticky.disabled"),
                    e.is("xlarge") && super.resetOriginalTabIndex(!0),
                    !this.options.hideOnScroll &&
                      this.options.hideElementOnScroll &&
                      this.toggleHeaderWrapperOnScroll();
                }
                toggleHeaderWrapperOnScroll() {
                  if (
                    !this.options.hideOnScroll &&
                    this.options.hideElementOnScroll
                  ) {
                    const a = window.scrollY || 0;
                    a > this.state.lastScrollTop
                      ? this.headerStickyHidden.forEach((a) => {
                          a.classList.add(this.classNames.hidden);
                        })
                      : a < this.state.lastScrollTop &&
                        this.headerStickyHidden.forEach((a) => {
                          a.classList.remove(this.classNames.hidden);
                        }),
                      this.checkHeaderHeight(),
                      (this.state.lastScrollTop = a);
                  }
                }
                animateLogo() {
                  if (!this.selectors.headerLogo) return;
                  const {
                      active: a,
                      hidden: b,
                      animationEnter: c,
                      animationLeave: d,
                    } = this.classNames,
                    { animatedLogoThreshold: e, animatedLogoDelay: f } =
                      this.options,
                    { headerLogo: g } = this.selectors,
                    h = window.scrollY || 0;
                  h > e && !this.state.isLogoAnimating
                    ? ((this.state.isLogoAnimating = !0),
                      g.classList.add(a),
                      g.classList.remove(c),
                      this.animationTimeout &&
                        (clearTimeout(this.animationTimeout),
                        (this.animationTimeout = null)),
                      (this.animationTimeout = setTimeout(() => {
                        i(d, g).then(() => {
                          g.classList.add(b);
                        });
                      }, f || 0)))
                    : h <= e &&
                      this.state.isLogoAnimating &&
                      ((this.state.isLogoAnimating = !1),
                      g.classList.remove(b, d),
                      this.animationTimeout &&
                        (clearTimeout(this.animationTimeout),
                        (this.animationTimeout = null)),
                      i(c, g).then(() => {
                        g.classList.remove(a);
                      }));
                }
                addSentinel() {
                  this.state.hasSentinel ||
                    ((this.state.hasSentinel = !0),
                    (this.sentinel = document.createElement("div")),
                    this.sentinel.classList.add("l-header__sentinel"),
                    this.selectors.anchorElement &&
                      (this.sentinel.style.height = "".concat(
                        this.selectors.anchorElement.getBoundingClientRect()
                          .height,
                        "px",
                      )),
                    this.element.appendChild(this.sentinel),
                    this.addSentinelObserver());
                }
                addSentinelObserver() {
                  (this.sentinelObserver = new IntersectionObserver(
                    (a) => {
                      const b = a[0];
                      1 <= b.intersectionRatio && this.disableSticky();
                    },
                    { threshold: [1] },
                  )),
                    this.sentinelObserver.observe(this.sentinel);
                }
                setAccessibility() {
                  super.setAltTabIndex(),
                    document.activeElement === document.body &&
                      this.element.focus();
                }
                destroy() {
                  this.options.enableSticky &&
                    (this.sentinelObserver &&
                      this.sentinelObserver.disconnect(),
                    this.headerObserver && this.headerObserver.disconnect(),
                    this.updateHeight("auto"),
                    d.removeListener(
                      "contentPanel.transition.ended",
                      this.updateHeight,
                      this,
                    )),
                    g("click", this.selectors.simpleSearchCta),
                    g("keydown", this.selectors.searchContainer),
                    g("simplesearch.results.show", this.element),
                    g("simplesearch.results.hide", this.element),
                    g("simplesearch.overlay.closed", this.element),
                    d.removeListener(
                      "simplesearch.toggle",
                      this.toggleSearchBar,
                      this,
                    ),
                    d.removeListener(
                      "simplesearch.close",
                      this.onSearchClose,
                      this,
                    ),
                    d.removeListener(
                      "hamburger.toggle",
                      this.toggleHamburger,
                      this,
                    ),
                    d.removeListener(
                      "sticky.stick",
                      this.checkHeaderHeight,
                      this,
                    ),
                    d.removeListener(
                      "contentPanel.hide",
                      this.checkHeaderHeight,
                      this,
                    ),
                    d.removeListener("global.close", this.onGlobalClose, this),
                    this.state.isHeaderTransparent &&
                      (d.removeListener(
                        "header.focused",
                        this.headerFocused,
                        this,
                      ),
                      d.removeListener(
                        "header.unfocused",
                        this.headerUnfocused,
                        this,
                      ));
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=Header.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/global/Header.js
