(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "core/mixwith",
      "toolbox/event",
      "services/EventEmitter",
      "toolbox/deepMerge",
      "mixins/Accessibility",
      "mixins/Analytics",
      "toolbox/animate",
      "toolbox/location",
      "services/History",
      "toolbox/scroll",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i, j, k, l, m, n, o;
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
              (d = a.on), (e = a.off), (f = a.trigger);
            },
            function (a) {
              g = a.Event;
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
              k = a.transition;
            },
            function (a) {
              l = a.getHash;
            },
            function (a) {
              m = a.replaceState;
            },
            function (a) {
              n = a.scrollTo;
            },
          ],
          execute: function () {
            a(
              "default",
              (o = class extends c(b).with(i, j) {
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
                          expanded: "m-expanded",
                          expandedOnLoad: "m-expanded-on-load",
                          active: "m-active",
                          initialized: "m-initialized",
                          disabled: "m-disabled",
                        },
                        scrollTopOffset: 200,
                        isDynamicContent: !1,
                        multiExpand: !1,
                        mutationObserverOptions: {
                          subtree: !0,
                          childList: !0,
                          characterData: !0,
                          characterDataOldValue: !0,
                        },
                        accordionHashID: null,
                        focusOnFirstChild: !1,
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  (this.dataSelector = {
                    control: "[data-js-accordion-control]",
                    item: "[data-js-accordion-item]",
                    container: "[data-js-accordion-container]",
                  }),
                    (this.selectors.items = this.element.querySelectorAll(
                      this.dataSelector.item,
                    )),
                    (this.selectors.containers = this.element.querySelectorAll(
                      this.dataSelector.container,
                    ));
                }
                bindEvents() {
                  d("click", this.element, this.onControlClick.bind(this)),
                    d(
                      "keydown",
                      this.element,
                      this.onControlKeypress.bind(this),
                    ),
                    d(
                      "component.ready lazyloaded",
                      this.selectors.containers,
                      this.onComponentReady.bind(this),
                    ),
                    d(
                      "accordion.open",
                      this.element,
                      this.onAccordionOpen.bind(this),
                    ),
                    d(
                      "accordion.close",
                      this.element,
                      this.onAccordionClose.bind(this),
                    ),
                    d(
                      "accordion.update",
                      this.element,
                      this.onAccordionUpdate.bind(this),
                    ),
                    this.options.accordionHashID &&
                      d(
                        "hashchange.accordion-".concat(this.id),
                        window,
                        this.onHashChange.bind(this),
                      );
                }
                initState() {
                  if (
                    ((this.state.activeItems = Array.from(
                      this.element.parentElement.querySelectorAll(
                        ""
                          .concat(this.dataSelector.item, ".")
                          .concat(this.options.classNames.expanded),
                      ),
                    )),
                    (this.state.destroy = !1),
                    (this.state.isItemSwitching = !1),
                    (this.mutationObservers = []),
                    this.options.accordionHashID)
                  ) {
                    const a = this.getAccordionToReopen(),
                      b = a && a.closest(this.dataSelector.item);
                    b && this.open([b]);
                  }
                }
                afterInit() {
                  this.selectors.containers.forEach((a) => {
                    if (
                      (a.classList.add(this.options.classNames.initialized),
                      !a.hasAttribute("aria-hidden"))
                    ) {
                      const b = a.closest(this.dataSelector.item);
                      this.updateAccordionItem(b, !1);
                    }
                    this.setAccessibility(a),
                      this.options.isDynamicContent &&
                        this.initMutationObserver(a);
                  }),
                    this.open(this.state.activeItems, !0, !0),
                    f("accordion.initialised", this.element, { bubbles: !0 });
                }
                onControlClick(a) {
                  const b = a.target.closest(this.dataSelector.control);
                  if (!this.state.destroy && b) {
                    const c = b.closest(this.dataSelector.item);
                    if (
                      !(
                        c &&
                        c.classList.contains(this.options.classNames.disabled)
                      ) &&
                      "A" !== b.nodeName
                    ) {
                      const c = b.closest(this.dataSelector.item);
                      c.classList.contains(
                        this.options.classNames.expandedOnLoad,
                      ) &&
                        c.classList.remove(
                          this.options.classNames.expandedOnLoad,
                        ),
                        c.classList.contains(this.options.classNames.expanded)
                          ? this.close(c)
                          : (this.options.accordionHashID &&
                              m(
                                {},
                                "",
                                "#"
                                  .concat(this.options.accordionHashID, "=")
                                  .concat(
                                    b.getAttribute("data-titlehash") || b.id,
                                  ),
                              ),
                            this.open([c])),
                        a.stopPropagation();
                    }
                  }
                }
                onHashChange() {
                  const a = this.getAccordionToReopen(),
                    b = a && a.closest(this.dataSelector.item);
                  if (b) {
                    if (b.classList.contains(this.options.classNames.expanded))
                      return;
                    this.options.accordionHashID &&
                      m(
                        {},
                        "",
                        "#"
                          .concat(this.options.accordionHashID, "=")
                          .concat(a.getAttribute("data-titlehash") || a.id),
                      ),
                      this.open([b]);
                  }
                }
                getAccordionToReopen() {
                  const a = decodeURIComponent(
                    l("".concat(this.options.accordionHashID)),
                  );
                  return (
                    !!a &&
                    this.element.querySelector(
                      '[data-titlehash="'.concat(a, '"]'),
                    )
                  );
                }
                onControlKeypress(a) {
                  if (!this.state.destroy) {
                    const b = a.target;
                    b.matches(this.dataSelector.control) &&
                      -1 !== ["Enter", " "].indexOf(a.key) &&
                      (a.preventDefault(),
                      this.onControlClick(a),
                      this.options.focusOnFirstChild &&
                        this.focusOnFirstChild(b));
                  }
                }
                focusOnFirstChild(a) {
                  const b = a.closest(this.dataSelector.item);
                  this.state.activeItems.includes(b) &&
                    k(b, () => {
                      this.focusOnDefaultChildElement(
                        b.querySelector(this.dataSelector.container),
                      );
                    });
                }
                setAccessibility(a) {
                  if (a) {
                    const b = this.getFocusableElements(a, !0);
                    "false" === a.getAttribute("aria-hidden")
                      ? b.forEach((a) => {
                          a.setAttribute("tabindex", "0");
                        })
                      : b.forEach((a) => {
                          a.setAttribute("tabindex", "-1");
                        });
                  }
                }
                open(a, b, c) {
                  a.forEach((a) => {
                    const d = a.dataset.jsAccordionItem,
                      e = a.querySelector(this.dataSelector.container);
                    this.state.activeItems.length &&
                      !this.options.multiExpand &&
                      this.state.activeItems.forEach((a) => {
                        d === a.dataset.jsAccordionItem &&
                          (!c && (this.state.isItemSwitching = !0),
                          this.close(a));
                      }),
                      this.updateAccordionItem(a, !0),
                      this.state.activeItems.push(a),
                      this.setAccessibility(e),
                      setTimeout(() => {
                        this._initEventAnalytics(a, !0),
                          this.analytics &&
                            !b &&
                            this.sendAnalytics(this.analytics);
                      }, 0),
                      f("accordion.opened", a, { bubbles: !0, item: a });
                  });
                }
                updateAccordionItem(a, b) {
                  const c = a.querySelector(this.dataSelector.container),
                    d = a.closest(this.dataSelector.container);
                  c &&
                    (this.updateTitle(a),
                    this.updateControl(a, b),
                    c.setAttribute("aria-hidden", !b),
                    b
                      ? (this.setActiveClass(c),
                        a.classList.add(this.options.classNames.expanded))
                      : a.classList.remove(this.options.classNames.expanded),
                    this.updateContainersHeight(c, d, b));
                }
                setActiveClass(a) {
                  a.classList.add(this.options.classNames.active),
                    k(a, () => {
                      if (
                        (a.classList.remove(this.options.classNames.active),
                        !this.options.multiExpand &&
                          !0 === this.state.isItemSwitching)
                      ) {
                        const b = a.getBoundingClientRect();
                        0 > b.top &&
                          n(a, this.options.scrollTopOffset, "vertical"),
                          (this.state.isItemSwitching = !1);
                      }
                      a
                        .closest(this.dataSelector.item)
                        .querySelector(this.dataSelector.control) ===
                        document.activeElement && g.emit("highlighter.update");
                    });
                }
                updateTitle(a) {
                  const b = a.querySelector(this.dataSelector.control);
                  if (b) {
                    const a = b.querySelector("[data-js-title]");
                    if (a) {
                      const b = a.getAttribute("data-js-title");
                      a.setAttribute("data-js-title", a.innerText),
                        (a.innerText = b);
                    }
                  }
                }
                updateControl(a, b) {
                  const c = a.querySelector(this.dataSelector.control);
                  c.setAttribute("aria-expanded", b), this.setStateClass(b, c);
                }
                setStateClass(a, b) {
                  const c =
                      b && b.getAttribute("data-js-title-cssclass-expanded"),
                    d = b && b.getAttribute("data-js-title-cssclass-collapsed");
                  c &&
                    c.split(" ").forEach((c) => {
                      b.classList.toggle(c, a);
                    }),
                    d &&
                      d.split(" ").forEach((c) => {
                        b.classList.toggle(c, !a);
                      });
                }
                updateContainersHeight(a, b, c) {
                  a.style.maxHeight = null;
                  const d = a.scrollHeight + 1;
                  (a.style.maxHeight =
                    "true" === a.getAttribute("aria-hidden")
                      ? "0"
                      : "".concat(d, "px")),
                    a.setAttribute("data-js-scroll-height", d),
                    b &&
                      k(a, () => {
                        let e = +b.getAttribute("data-js-scroll-height");
                        e || (e = b.scrollHeight);
                        const f = c ? e + d : e - d;
                        b.setAttribute("data-js-scroll-height", f),
                          "true" !== a.getAttribute("aria-hidden") &&
                            (b.style.maxHeight = "".concat(f, "px"));
                      });
                }
                onAccordionUpdate() {
                  this.selectors.containers.forEach((a) => {
                    const b = a.closest(this.dataSelector.item);
                    "false" === a.getAttribute("aria-hidden") &&
                      this.updateContainersHeight(a, b, !0);
                  });
                }
                onComponentReady(a) {
                  const { target: b } = a,
                    c = b.closest(this.dataSelector.container),
                    d = c.closest(this.dataSelector.item);
                  if (d.classList.contains(this.options.classNames.expanded)) {
                    const a = c.parentNode.closest(this.dataSelector.container);
                    c.removeAttribute("data-js-scroll-height"),
                      a && a.removeAttribute("data-js-scroll-height"),
                      this.updateContainersHeight(c, a, !0);
                  }
                }
                onAccordionOpen(a) {
                  if (!this.state.destroy) {
                    const { expandedItems: b } = a.detail;
                    this.open(b);
                  }
                }
                onAccordionClose() {
                  this.state.activeItems.forEach((a) => {
                    this.close(a);
                  });
                }
                close(a) {
                  const b = a.querySelector(this.dataSelector.container);
                  this.updateAccordionItem(a, !1),
                    (this.state.activeItems = this.state.activeItems.filter(
                      (b) => b !== a,
                    )),
                    this.setAccessibility(b),
                    f("accordion.closed", a, { bubbles: !0, item: a });
                }
                initMutationObserver(a) {
                  const b = new MutationObserver(this.onMutation.bind(a));
                  b.observe(a, this.options.mutationObserverOptions),
                    this.mutationObservers.push(b);
                }
                onMutation() {
                  (this.style.maxHeight = null),
                    (this.style.maxHeight =
                      "true" === this.getAttribute("aria-hidden")
                        ? "0"
                        : "".concat(this.scrollHeight, "px")),
                    this.setAttribute(
                      "data-js-scroll-height",
                      this.scrollHeight,
                    );
                }
                destroy() {
                  this.options.isDynamicContent &&
                    this.mutationObservers.forEach((a) => {
                      a.disconnect();
                    }),
                    e("component.ready lazyloaded", this.selectors.containers),
                    e("accordion.open", this.element),
                    e("accordion.close", this.element),
                    e("accordion.update", this.element),
                    this.options.accordionHashID &&
                      e("hashchange.accordion-".concat(this.id), window),
                    e(this.selectors.containers),
                    e(this.element);
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=Accordion.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/global/Accordion.js
