(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "aos",
      "core/mixwith",
      "toolbox/event",
      "toolbox/debounce",
      "toolbox/deepMerge",
      "mixins/Accessibility",
      "services/Accessibility",
      "mixins/Loader",
      "toolbox/device",
      "toolbox/html",
      "services/EventEmitter",
      "services/DataLayer",
    ],
    function (a) {
      "use strict";
      function ownKeys(a, b) {
        var c = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(a);
          b &&
            (d = d.filter(function (b) {
              return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })),
            c.push.apply(c, d);
        }
        return c;
      }
      function _objectSpread(a) {
        for (var b, c = 1; c < arguments.length; c++)
          (b = null == arguments[c] ? {} : arguments[c]),
            c % 2
              ? ownKeys(Object(b), !0).forEach(function (c) {
                  _defineProperty(a, c, b[c]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    a,
                    Object.getOwnPropertyDescriptors(b),
                  )
                : ownKeys(Object(b)).forEach(function (c) {
                    Object.defineProperty(
                      a,
                      c,
                      Object.getOwnPropertyDescriptor(b, c),
                    );
                  });
        return a;
      }
      function _defineProperty(a, b, c) {
        return (
          (b = _toPropertyKey(b)) in a
            ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[b] = c),
          a
        );
      }
      function _toPropertyKey(a) {
        var b = _toPrimitive(a, "string");
        return "symbol" == typeof b ? b : b + "";
      }
      function _toPrimitive(a, b) {
        if ("object" != typeof a || !a) return a;
        var c = a[Symbol.toPrimitive];
        if (void 0 !== c) {
          var d = c.call(a, b || "default");
          if ("object" != typeof d) return d;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === b ? String : Number)(a);
      }
      var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              c = a.default;
            },
            function (a) {
              d = a.mix;
            },
            function (a) {
              (e = a.on), (f = a.off);
            },
            function (a) {
              g = a.debounce;
            },
            function (a) {
              h = a.deepMerge;
            },
            function (a) {
              i = a.default;
            },
            function (a) {
              j = a.default;
            },
            function (a) {
              k = a.default;
            },
            function (a) {
              (l = a.isTouchDevice), (m = a.isFiresTouchEvents);
            },
            function (a) {
              n = a.isChildOf;
            },
            function (a) {
              o = a.Event;
            },
            function (a) {
              p = a.default;
            },
          ],
          execute: function () {
            a(
              "default",
              (q = class extends d(b).with(i, k) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    h(
                      {
                        _resizable: !0,
                        classNames: { modifier: null },
                        position: "bottom",
                        text: null,
                        preventOverflow: !0,
                        preventOverflowOffset: 10,
                        flip: !0,
                        scroll: !1,
                        resize: !0,
                        destroyOnHide: !0,
                        strategy: "absolute",
                        removeOnDestroy: !0,
                        triggerSelector: null,
                        showOnClick: !1,
                        trackFocusedElements: !0,
                        width: 0,
                        closeLabel: p.get("text.close") || "Close",
                        hideTooltipOnMouseLeave: !0,
                        tooltipArrowOffset: 5,
                        tooltipOffset: [],
                        isInStickyHeader: !1,
                        afterClose() {},
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  (this.classes = {
                    tooltip: "c-tooltip",
                    tooltipArrow: "c-tooltip__arrow",
                    tooltipAriaLink: "c-tooltip__arialink",
                    tooltipClose: "c-tooltip__close",
                    tooltipContent: "c-tooltip__content",
                    tooltipTitle: "c-tooltip__title",
                    tooltipBody: "c-tooltip__body",
                    activeModifier: "m-active",
                  }),
                    (this.selectors.target =
                      (this.options.triggerSelector &&
                        this.element.querySelector(
                          this.options.triggerSelector,
                        )) ||
                      this.element),
                    (this.tooltip = this.createTooltipLayout()),
                    (this.selectors.tooltipArrow = this.tooltip.querySelector(
                      ".".concat(this.classes.tooltipArrow),
                    )),
                    (this.selectors.tooltipAriaLink =
                      this.tooltip.querySelector(
                        ".".concat(this.classes.tooltipAriaLink),
                      )),
                    (this.selectors.tooltipClose = this.tooltip.querySelector(
                      ".".concat(this.classes.tooltipClose),
                    )),
                    (this.selectors.tooltipBody = this.tooltip.querySelector(
                      ".".concat(this.classes.tooltipBody),
                    )),
                    (this.selectors.tooltipContent = this.tooltip.querySelector(
                      ".".concat(this.classes.tooltipContent),
                    )),
                    (this.popperInstance = null);
                }
                createTooltipLayout() {
                  const a =
                      null === this.options.classNames.modifier
                        ? this.classes.tooltip
                        : ""
                            .concat(this.classes.tooltip, " ")
                            .concat(this.options.classNames.modifier),
                    b = this.selectors.target.hasAttribute("aria-label")
                      ? 'aria-label="'.concat(
                          this.selectors.target.getAttribute("aria-label"),
                          '"',
                        )
                      : "";
                  let c = this.classes.tooltipTitle;
                  this.options.titleClassNames &&
                    this.options.titleClassNames.forEach((a) => {
                      c += " ".concat(a);
                    });
                  const d = '<div class="'
                      .concat(
                        this.options.title ? c : "h-hidden",
                        '" id="tooltip-title-',
                      )
                      .concat(this.id, '">')
                      .concat(
                        this.options.title ||
                          this.selectors.target.getAttribute("aria-label") ||
                          this.selectors.target.innerHTML,
                        "</div>",
                      ),
                    e = this.selectors.target.hasAttribute(
                      "data-js-aria-close-label",
                    )
                      ? this.selectors.target.getAttribute(
                          "data-js-aria-close-label",
                        )
                      : this.options.closeLabel,
                    f = '<button class="'
                      .concat(
                        this.classes.tooltipClose,
                        ' h-hidden"><span aria-hidden="true">X</span><span class="h-show-for-sr">',
                      )
                      .concat(e, "</span></button>"),
                    g = this.selectors.target.getAttribute("data-href")
                      ? '<a class="'
                          .concat(this.classes.tooltipAriaLink, ' h-hidden" ')
                          .concat(b, ' href="')
                          .concat(
                            this.selectors.target.getAttribute("data-href"),
                            '">',
                          )
                          .concat(this.selectors.target.innerHTML, "</a>")
                      : "",
                    h = '<div class="'
                      .concat(a, '" id="')
                      .concat(this.id, '"><div class="')
                      .concat(this.classes.tooltipArrow, '"></div><div class="')
                      .concat(this.classes.tooltipContent, '">')
                      .concat(g)
                      .concat(d, '<div class="')
                      .concat(this.classes.tooltipBody, '"></div>')
                      .concat(f, "</div></div>"),
                    i = document.createElement("div");
                  return (
                    (i.innerHTML = h),
                    i.querySelector(".".concat(this.classes.tooltip))
                  );
                }
                initState() {
                  (this.state.isActive = !1),
                    (this.state.hasContent = !1),
                    (this.state.areCustomEventsBound = !1),
                    (this.state.isForceContentLoad = !1),
                    (this.state.isFocusDisabled = !1);
                }
                bindEvents() {
                  l() || this.options.showOnClick
                    ? e(
                        "click.".concat(this.id),
                        document,
                        this.onDocumentClick.bind(this),
                      )
                    : (e(
                        "mouseenter",
                        this.selectors.target,
                        this.onMouseEnter.bind(this),
                      ),
                      e(
                        "mouseleave",
                        this.selectors.target,
                        g(this.onMouseLeave.bind(this)),
                      )),
                    e(
                      "keydown",
                      this.selectors.target,
                      this.onKeyboardControl.bind(this),
                    ),
                    e(
                      "click.tooltip",
                      this.selectors.target,
                      this.onClick.bind(this),
                    ),
                    e(
                      "keydown.".concat(this.id),
                      document,
                      this.onDocumentKeyDown.bind(this),
                    ),
                    e(
                      "tooltip.checkcomponent",
                      this.element,
                      this.checkComponent.bind(this),
                    ),
                    o.on(
                      "tooltip.touch.opened",
                      this.onTooltipTouchOpened,
                      this,
                    ),
                    this.options.isInStickyHeader &&
                      (o.on("header.updateHeight", this.onHeaderUpdate, this),
                      o.on(
                        "header.sticky.enabled",
                        this.onHeaderStickyEnabled,
                        this,
                      ),
                      o.on(
                        "header.sticky.disabled",
                        this.onHeaderStickyDisabled,
                        this,
                      )),
                    super.bindEvents();
                }
                afterInit() {
                  this.state.isFocusDisabled = !0;
                }
                bindCustomTooltipEvents() {
                  this.state.areCustomEventsBound ||
                    (!this.options.showOnClick &&
                      this.options.hideTooltipOnMouseLeave &&
                      e(
                        "mouseleave",
                        this.tooltip,
                        g(this.onContentMouseLeave.bind(this)),
                      ),
                    e(
                      "keydown",
                      this.tooltip,
                      this.onTooltipKeyboardControl.bind(this),
                    ),
                    e(
                      "click",
                      this.selectors.tooltipClose,
                      this.onTooltipCloseClick.bind(this),
                    ),
                    (this.state.areCustomEventsBound = !0));
                }
                unbindCustomTooltipEvents() {
                  this.state.areCustomEventsBound &&
                    (f("mouseleave keydown", this.tooltip),
                    f("click", this.selectors.tooltipClose),
                    (this.state.areCustomEventsBound = !1));
                }
                onKeyboardControl(a) {
                  this.keyBoardActions(a, {
                    Enter: () => {
                      this.toggleContentFromKeyboard(a);
                    },
                    " ": () => {
                      this.toggleContentFromKeyboard(a);
                    },
                  });
                }
                onTooltipKeyboardControl(a) {
                  this.state.isFocusDisabled = !1;
                  this.keyBoardActions(a, {
                    Tab: () => {
                      this.onTabKey(a);
                    },
                    Escape: () => {
                      this.selectors.target.focus(),
                        this.hideContent(),
                        this.unbindCustomTooltipEvents();
                    },
                  });
                }
                onTabKey(a) {
                  super.focusTrap(this.tooltip, a);
                }
                onTooltipCloseClick() {
                  this.state.isFocusDisabled || this.selectors.target.focus(),
                    this.hideContent(),
                    this.unbindCustomTooltipEvents();
                }
                toggleContentFromKeyboard(a) {
                  (this.state.isFocusDisabled = !1), this.toggleContent(a);
                }
                toggleContent(a) {
                  a && (a.preventDefault(), a.stopImmediatePropagation()),
                    this.state.isActive
                      ? this.hideContent()
                      : this.showContent();
                }
                onDocumentClick(a) {
                  const { target: b, relatedTarget: c } = a;
                  this.tooltip.contains(b) ||
                    this.tooltip.contains(c) ||
                    c === this.tooltip ||
                    ((this.state.isFocusDisabled = !0),
                    this.state.isActive &&
                      (this.options.showOnClick
                        ? !n(a.target, this.tooltip) &&
                          !n(a.target, this.selectors.target) &&
                          (this.hideContent(), this.unbindCustomTooltipEvents())
                        : (a.preventDefault(),
                          this.hideContent(),
                          this.unbindCustomTooltipEvents())));
                }
                addDialogMarkup() {
                  (!this.state.isFocusDisabled || this.options.showOnClick) &&
                    (this.showAriaLink(), this.showCloseButton()),
                    this.tooltip.setAttribute("role", "dialog"),
                    this.tooltip.setAttribute("aria-modal", "true"),
                    this.tooltip.setAttribute(
                      "aria-labelledby",
                      this.setDialogTitle(),
                    );
                }
                setDialogTitle() {
                  const a = "tooltip-title-".concat(this.id),
                    b = this.tooltip.querySelector("#tooltip-title");
                  return (
                    b && b.setAttribute("id", "tooltip-title-".concat(this.id)),
                    a
                  );
                }
                removeDialogMarkup() {
                  (!this.state.isFocusDisabled || this.options.showOnClick) &&
                    (this.hideAriaLink(), this.hideCloseButton()),
                    this.tooltip.removeAttribute("role"),
                    this.tooltip.removeAttribute("aria-modal"),
                    this.tooltip.removeAttribute("aria-labelledby");
                }
                showAriaLink() {
                  this.selectors.tooltipAriaLink &&
                    this.selectors.tooltipAriaLink.classList.remove("h-hidden");
                }
                hideAriaLink() {
                  this.selectors.tooltipAriaLink &&
                    this.selectors.tooltipAriaLink.classList.add("h-hidden");
                }
                showCloseButton() {
                  this.selectors.tooltipClose.classList.remove("h-hidden");
                }
                hideCloseButton() {
                  this.selectors.tooltipClose.classList.add("h-hidden");
                }
                hideContentFromMouse() {
                  this.hideContent();
                }
                onMouseEnter() {
                  (this.state.isFocusDisabled = !0),
                    this.state.isForceContentLoad
                      ? this.showContent(!0)
                      : this.showContent();
                }
                onMouseLeave(a) {
                  if (a) {
                    const { target: b, relatedTarget: c } = a;
                    if (
                      this.tooltip.contains(b) ||
                      this.tooltip.contains(c) ||
                      c === this.tooltip
                    )
                      return;
                  }
                  this.hideContentFromMouse();
                }
                onClick(a) {
                  a.preventDefault(),
                    ((a && m(a)) || this.options.showOnClick) &&
                      (!this.state.isActive &&
                        o.emit("tooltip.touch.opened", this.id),
                      (this.state.isFocusDisabled = !1),
                      this.toggleContent(a));
                }
                onTooltipTouchOpened(a) {
                  a !== this.id &&
                    this.state.isActive &&
                    ((this.state.isFocusDisabled = !0), this.hideContent());
                }
                onContentMouseLeave() {
                  this.hideContent(), this.unbindCustomTooltipEvents();
                }
                keyBoardActions(a, b) {
                  b[a.key] && b[a.key]();
                }
                showContent() {
                  (this.contentReadyToShow = !0),
                    this.state.isActive ||
                      !this.isContentValid() ||
                      (!this.state.isFocusDisabled && this.saveLastFocusState(),
                      (this.state.isActive = !0),
                      this.selectors.target.setAttribute(
                        "aria-expanded",
                        "true",
                      ),
                      this.tooltip.classList.add(this.classes.activeModifier),
                      this.selectors.target.closest("[data-js-header]") &&
                        o.emit("header.focused"),
                      this.popperInstance
                        ? this.initAccessibility()
                        : (document.body.appendChild(this.tooltip),
                          this.createPopper()),
                      !this.state.isFocusDisabled && j.addNewState(),
                      !this.state.hasContent &&
                        this.setContent(this.options.text),
                      this.updatePopper());
                }
                checkComponent() {
                  this.state.isForceContentLoad =
                    !!this.tooltip.querySelector("[data-component]");
                }
                onDocumentKeyDown(a) {
                  this.state.isActive &&
                    a &&
                    -1 !== ["Escape"].indexOf(a.key) &&
                    (a.preventDefault(),
                    a.stopImmediatePropagation(),
                    this.hideContent());
                }
                onResize() {
                  this.updatePopper();
                }
                isContentValid() {
                  return this.options.text && "" !== this.options.text;
                }
                setContent(a) {
                  a &&
                    (this.popperInstance && this.popperInstance.update(),
                    (this.state.hasContent = !0),
                    (this.selectors.tooltipBody.innerHTML = a));
                }
                get popperOptions() {
                  return {
                    placement: this.options.position,
                    eventsEnabled: this.options.eventsEnabled,
                    removeOnDestroy: this.options.removeOnDestroy,
                    strategy: this.options.strategy,
                    modifiers: [
                      {
                        name: "arrow",
                        options: {
                          element: this.selectors.tooltipArrow,
                          padding: this.options.tooltipArrowOffset,
                        },
                      },
                      {
                        name: "offset",
                        options: { offset: this.options.tooltipOffset },
                      },
                      {
                        name: "preventOverflow",
                        options: {
                          tether: this.options.preventOverflow,
                          rootBoundary: document.body,
                          padding: this.options.preventOverflowOffset,
                        },
                      },
                      {
                        name: "flip",
                        options: {
                          flipVariations: this.options.flip,
                          padding: 0,
                        },
                      },
                      {
                        name: "computeStyles",
                        options: { gpuAcceleration: !1 },
                      },
                      {
                        name: "eventListeners",
                        options: {
                          scroll: this.options.scroll,
                          resize: this.options.resize,
                        },
                      },
                    ],
                    onFirstUpdate: this.onPopperCreate.bind(this),
                  };
                }
                createPopper() {
                  return (
                    (this.popper = SystemJS.import("@popperjs/core").then(
                      (a) => {
                        let { createPopper: b } = a;
                        this.state.isActive &&
                          (this.popperInstance = b(
                            this.selectors.target,
                            this.tooltip,
                            this.popperOptions,
                          ));
                      },
                    )),
                    this.popper
                  );
                }
                updatePopper() {
                  this.popperInstance && this.popperInstance.forceUpdate();
                }
                onPopperCreate() {
                  this.options.width && this.setWidth(this.options.width),
                    c.refresh(),
                    this.initAccessibility();
                }
                initAccessibility() {
                  this.state.isActive &&
                    (this.addDialogMarkup(),
                    !this.state.isFocusDisabled &&
                      (this.initModalPattern(this.tooltip),
                      this.setFocusedOrder(this.tooltip)),
                    this.bindCustomTooltipEvents());
                }
                setWidth(a) {
                  this.popperInstance &&
                    this.tooltip &&
                    ((this.tooltip.style.width = "".concat(a, "px")),
                    this.popperInstance.forceUpdate());
                }
                destroyPopper() {
                  this.popperInstance &&
                    (this.popperInstance.destroy(),
                    (this.popperInstance = null));
                }
                hideContent(a) {
                  this.state.isActive &&
                    (!this.state.isFocusDisabled &&
                      (this.destroyModalPattern(),
                      this.resetFocusedOrder(this.tooltip)),
                    o.emit("tooltip.hide.content", this.id),
                    this.tooltip.classList.remove(this.classes.activeModifier),
                    this.selectors.target.setAttribute(
                      "aria-expanded",
                      "false",
                    ),
                    (this.state.isActive = !1),
                    this.removeDialogMarkup(),
                    this.options.destroyOnHide && this.destroyPopper(),
                    this.state.isFocusDisabled &&
                      this.selectors.target.closest("[data-js-header]") &&
                      o.emit("header.unfocused"),
                    this.options.afterClose(this.element),
                    !this.state.isFocusDisabled && j.restorePrevState()),
                    (this.contentReadyToShow = !!a);
                }
                onHeaderUpdate(a) {
                  this.contentReadyToShow &&
                    (0 < a.height
                      ? setTimeout(() => {
                          this.showContent();
                        }, 300)
                      : this.hideContent(!0));
                }
                onHeaderStickyEnabled() {
                  this.setPopperStrategy("fixed");
                }
                onHeaderStickyDisabled() {
                  this.setPopperStrategy("absolute");
                }
                setPopperStrategy(a) {
                  this.options &&
                    ((this.options.strategy = a),
                    this.popperInstance &&
                      this.popperInstance.setOptions((a) =>
                        _objectSpread(
                          _objectSpread({}, a),
                          {},
                          { strategy: this.options.strategy },
                        ),
                      ));
                }
                destroy() {
                  f(this.element),
                    f(this.selectors.target),
                    this.destroyPopper(),
                    this.unbindCustomTooltipEvents(),
                    f("keydown.".concat(this.id), document),
                    o.removeListener(
                      "tooltip.touch.opened",
                      this.onTooltipTouchOpened,
                      this,
                    ),
                    (l() || this.options.showOnClick) &&
                      f("click.".concat(this.id), document),
                    this.options.isInStickyHeader &&
                      (o.removeListener(
                        "header.updateHeight",
                        this.onHeaderUpdate,
                        this,
                      ),
                      o.removeListener(
                        "header.sticky.enabled",
                        this.onHeaderStickyEnabled,
                        this,
                      ),
                      o.removeListener(
                        "header.sticky.disabled",
                        this.onHeaderStickyDisabled,
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
  //# sourceMappingURL=ToolTip.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/global/ToolTip.js
