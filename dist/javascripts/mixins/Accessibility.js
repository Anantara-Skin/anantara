(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/mixwith",
      "toolbox/deepMerge",
      "toolbox/event",
      "toolbox/html",
      "services/Accessibility",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i;
      return {
        setters: [
          function (a) {
            b = a.Mixin;
          },
          function (a) {
            c = a.deepMerge;
          },
          function (a) {
            (d = a.on), (e = a.off);
          },
          function (a) {
            f = a.getRelativeSelector;
          },
          function (a) {
            g = a.default;
          },
        ],
        execute: function () {
          (h =
            "a[href], area[href], input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex], [contentEditable=true]"),
            (i =
              'a[href]:not([tabindex^="-"]), area[href]:not([tabindex^="-"]), input:not([disabled]):not([type=hidden]):not([tabindex^="-"]), select:not([disabled]):not([tabindex^="-"]), textarea:not([disabled]):not([tabindex^="-"]), button:not([disabled]):not([tabindex^="-"]), [tabindex]:not([tabindex^="-"]), [contentEditable=true]:not([tabindex^="-"])'),
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
                            altTabindexAttribute: "data-js-alt-tabindex",
                            ariaCloseTimeout: 5e3,
                            trackFocusedElements: !1,
                          },
                          b,
                        ),
                        d,
                      );
                    }
                    bindEvents() {
                      super.bindEvents(),
                        this.options.trackFocusedElements &&
                          (g.listen("state.restore", this.onStateRestore, this),
                          d(
                            "focusin.lastState",
                            this.element,
                            this.onFocusIn.bind(this),
                          ),
                          d(
                            "focusout.lastState",
                            this.element,
                            this.onFocusOut.bind(this),
                          ));
                    }
                    onFocusIn(a) {
                      this._focusedChild = a.target;
                    }
                    onFocusOut() {
                      this._focusedChild = null;
                    }
                    onStateRestore() {
                      this.restoreLastFocusState();
                    }
                    getComponentKey() {
                      return (
                        this._componentKey ||
                          (this._componentKey = f(this.element)),
                        this._componentKey
                      );
                    }
                    saveLastFocusState() {
                      let a =
                        0 < arguments.length && arguments[0] !== void 0
                          ? arguments[0]
                          : this._focusedChild;
                      a &&
                        g.setActiveFocus(
                          this.getComponentKey(),
                          this.retrieveSelectorForSubElement(a),
                        );
                    }
                    retrieveSelectorForSubElement(a) {
                      return f(a, this.element) || !0;
                    }
                    saveLastScrollPosition(a) {
                      g.setLastScroll(this.getComponentKey(), a);
                    }
                    getLastScrollPosition() {
                      return g.getLastScrollByKey(this.getComponentKey());
                    }
                    saveElement(a) {
                      g.saveElement(a);
                    }
                    setRemovedIndex(a, b) {
                      g.setRemovedIndex(this.getComponentKey(), b.indexOf(a));
                    }
                    restoreFocusAfterRemove(a) {
                      let b = g.getRemovedIndex(this.getComponentKey());
                      Number.isInteger(b) &&
                        a.length &&
                        ((b = Math.max(Math.min(b, a.length) - 1, 0)),
                        a[b] && a[b].focus(),
                        g.resetRemovedIndex());
                    }
                    updateAria(a, b) {
                      this.timer && clearTimeout(this.timer),
                        a && (a.innerHTML = b),
                        (this.timer = setTimeout(() => {
                          this.clearAria(a);
                        }, this.options.ariaCloseTimeout));
                    }
                    clearAria(a) {
                      a && (a.innerHTML = "");
                    }
                    restoreLastFocusState() {
                      const a = g.getActiveFocusByKey(this.getComponentKey());
                      a &&
                        ((this._focusedChild =
                          !0 === a
                            ? this.element
                            : this.element && this.element.querySelector(a)),
                        this._focusedChild
                          ? this._focusedChild.focus()
                          : this.focusOnDefaultChildElement(this.element),
                        g.resetActiveFocus());
                    }
                    focusOnDefaultChildElement(a) {
                      const b = this.getFocusableElements(a, !0, !0),
                        c = [...b].filter(this.isElementVisible);
                      c.length && c[0].focus();
                    }
                    trapFocusElement(a, b) {
                      a.focus(),
                        d(
                          "keydown.focustrap",
                          a,
                          (a) => {
                            (a.shouldStopImmediatePropagation = !0),
                              b(a),
                              a.shouldStopImmediatePropagation &&
                                a.stopImmediatePropagation();
                          },
                          !1,
                        ),
                        d(
                          "focusout.focustrap",
                          a,
                          () => {
                            this.untrapFocusElement(a);
                          },
                          !0,
                        );
                    }
                    untrapFocusElement(a) {
                      e("keydown.focustrap focusout.focustrap", a);
                    }
                    getFocusableElements(a, b, c) {
                      if (!a) return [];
                      const d = b ? h : i;
                      let e;
                      return (
                        (e = c
                          ? [a, ...a.querySelectorAll(d)].filter((a) =>
                              a.matches(d),
                            )
                          : a.querySelectorAll(d)),
                        [...e].filter(this.isElementVisible)
                      );
                    }
                    isElementVisible(a) {
                      return (
                        null !== a.offsetParent &&
                        "hidden" !== window.getComputedStyle(a).visibility
                      );
                    }
                    isElementNotCovered(a) {
                      if (!a) return !1;
                      const b = a.getBoundingClientRect(),
                        c = b.left + b.width / 2,
                        d = b.top + b.height / 2,
                        e = document.elementFromPoint(c, d);
                      return a === e || a.contains(e);
                    }
                    isElementFocusable(a) {
                      return (
                        a &&
                        a.matches(i) &&
                        this.isElementVisible(a) &&
                        this.isElementNotCovered(a)
                      );
                    }
                    saveOriginalTabIndex() {
                      (this.selectors.focusableContainers =
                        this.element.querySelectorAll(
                          "[".concat(this.options.altTabindexAttribute, "]"),
                        )),
                        this.selectors.focusableContainers.forEach((a) => {
                          this.getFocusableElements(a).forEach((a) => {
                            a.hasAttribute("tabindex") &&
                              a.setAttribute(
                                "data-js-original-tabindex",
                                a.getAttribute("tabindex"),
                              );
                          });
                        });
                    }
                    setAltTabIndex() {
                      this.selectors.focusableContainers.forEach((a) => {
                        const b = a.getAttribute(
                          this.options.altTabindexAttribute,
                        );
                        this.getFocusableElements(a).forEach((a) => {
                          a.hasAttribute("data-skip-focus") ||
                            a.setAttribute("tabindex", b);
                        });
                      });
                    }
                    resetOriginalTabIndex(a) {
                      this.selectors.focusableContainers.forEach((b) => {
                        this.getFocusableElements(b, a).forEach((a) => {
                          a.hasAttribute("data-js-original-tabindex")
                            ? a.setAttribute(
                                "tabindex",
                                a.getAttribute("data-js-original-tabindex"),
                              )
                            : a.removeAttribute("tabindex");
                        });
                      });
                    }
                    setFocusedOrder(a, b) {
                      this.getFocusableElements(a, b).forEach((a, b, c) => {
                        0 === b
                          ? a.setAttribute("data-js-focus-order", "first")
                          : b == c.length - 1 &&
                            a.setAttribute("data-js-focus-order", "last");
                      });
                    }
                    resetFocusedOrder(a) {
                      this.getFocusableElements(a).forEach((a) => {
                        a.hasAttribute("data-js-focus-order") &&
                          a.removeAttribute("data-js-focus-order");
                      });
                    }
                    setTabKeyboardTrap(a, b) {
                      return (
                        "Tab" === a.key
                          ? (b.index = +b.element.getAttribute("data-js-index"))
                          : -1 === ["ArrowRight", "ArrowDown"].indexOf(a.key)
                            ? -1 !== ["ArrowLeft", "ArrowUp"].indexOf(a.key) &&
                              (a.preventDefault(),
                              (b.index = this.getNextIndex(
                                b.index - 1,
                                b.nodes,
                              )))
                            : (a.preventDefault(),
                              (b.index = this.getNextIndex(
                                b.index + 1,
                                b.nodes,
                              ))),
                        b.index
                      );
                    }
                    getNextIndex(a, b) {
                      const c = this.getNextFocusedElement(a, b);
                      return c.focus(), +c.getAttribute("data-js-index");
                    }
                    getNextFocusedElement(a, b) {
                      return (
                        a >= b.length ? (a = 0) : 0 > a && (a = b.length - 1),
                        b[a]
                      );
                    }
                    maskPageFromSR() {
                      (this.selectors.page =
                        document.querySelector("[data-js-app]")),
                        this.selectors.page &&
                          this.selectors.page.setAttribute(
                            "aria-hidden",
                            "true",
                          );
                    }
                    unmaskPageFromSR() {
                      this.selectors.page &&
                        this.selectors.page.removeAttribute("aria-hidden");
                    }
                    initModalPattern(a, b, c) {
                      const d = a.querySelector("[data-js-anchor]");
                      c || this.maskPageFromSR(),
                        this.selectors.caller ||
                          (b
                            ? (this.selectors.caller = b)
                            : (this.selectors.caller = document.activeElement)),
                        d && !d.disabled && null !== d.offsetParent
                          ? d.focus()
                          : (a.setAttribute("tabindex", "-1"),
                            (a.style.outline = "none"),
                            a.setAttribute("data-js-anchor", ""),
                            a.focus());
                    }
                    destroyModalPattern(a) {
                      a || this.unmaskPageFromSR(),
                        this.selectors.caller &&
                          (this.selectors.caller.focus(),
                          (this.selectors.caller = null));
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
                            this.clearAria(b);
                          }, this.options.ariaCloseTimeout));
                      }
                    }
                    clearStatusMessage() {
                      (this.selectors.statusMessage = document.querySelector(
                        "[data-js-global-status-message]",
                      )),
                        this.clearAria(this.selectors.statusMessage);
                    }
                    focusTrap(a, b) {
                      const c = this.getFocusableElements(a),
                        d = c[0];
                      return c &&
                        1 === c.length &&
                        (b.target === d || b.shiftKey)
                        ? void b.preventDefault()
                        : void ((this.selectors.firstFocusable =
                            a.querySelector('[data-js-focus-order="first"]') ||
                            d),
                          (this.selectors.lastFocusable =
                            a.querySelector('[data-js-focus-order="last"]') ||
                            c[c.length - 1]),
                          this.tabNavigate(b));
                    }
                    tabNavigate(a) {
                      const b = !a.shiftKey,
                        c =
                          "first" ===
                            a.target.getAttribute("data-js-focus-order") ||
                          a.target === this.selectors.firstFocusable,
                        d = b
                          ? this.selectors.lastFocusable
                          : this.selectors.firstFocusable;
                      let e = b
                        ? this.selectors.firstFocusable
                        : this.selectors.lastFocusable;
                      if (!b && (c || a.target.hasAttribute("data-js-anchor")))
                        e = this.selectors.lastFocusable;
                      else if ("radio" === d.getAttribute("type")) {
                        if (
                          a.target.getAttribute("name") !==
                          d.getAttribute("name")
                        )
                          return;
                      } else if (a.target !== d) return;
                      a.preventDefault(), e.focus();
                    }
                    destroy() {
                      e(this.element),
                        this.options.trackFocusedElements &&
                          g.unlisten("state.restore", this);
                    }
                  },
              ),
            );
        },
      };
    },
  );
  //# sourceMappingURL=Accessibility.js.map
})(System, System);
//# sourceURL=/dist/javascripts/mixins/Accessibility.js
