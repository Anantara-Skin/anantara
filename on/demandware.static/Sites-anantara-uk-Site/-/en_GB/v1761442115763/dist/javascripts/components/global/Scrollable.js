(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "toolbox/event",
      "toolbox/deepMerge",
      "core/mixwith",
      "mixins/Accessibility",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              (c = a.on), (d = a.off);
            },
            function (a) {
              e = a.deepMerge;
            },
            function (a) {
              f = a.mix;
            },
            function (a) {
              g = a.default;
            },
          ],
          execute: function () {
            a(
              "default",
              (h = class extends f(b).with(g) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    e(
                      {
                        scrollStep: "auto",
                        showArrows: !0,
                        initialScrollPosition: "start",
                        _resizable: !0,
                        enableMouseDrag: !0,
                        arrowsTop: null,
                        classNames: { arrows: [] },
                        text: {
                          arrowPrev: "Show previous items",
                          arrowNext: "Show next items",
                        },
                        initScrollElement: null,
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  this.appendArrows(),
                    (this.classNames = {
                      scrollStart: "m-scrollable-prev",
                      scrollEnd: "m-scrollable-next",
                      disabled: "m-disabled",
                      hidden: "h-hidden",
                      dragActive: "m-drag-active",
                    }),
                    (this.selectors.itemsContainer = this.element.querySelector(
                      "[data-js-scrollable-items]",
                    )),
                    (this.selectors.arrowContainer = this.element.querySelector(
                      "[data-js-scrollable-arrows]",
                    )),
                    (this.selectors.arrowPrev = this.element.querySelector(
                      "[data-js-scrollable-prev]",
                    )),
                    (this.selectors.arrowNext = this.element.querySelector(
                      "[data-js-scrollable-next]",
                    ));
                }
                initState() {
                  (this.state.scrollStart = !1),
                    (this.state.scrollEnd = !1),
                    this.initScrollPosition(),
                    this.setArrowsPosition(),
                    this.options.enableMouseDrag &&
                      (this.state.isMouseDragActive = !1);
                }
                bindEvents() {
                  c(
                    "scroll",
                    this.selectors.itemsContainer,
                    this.updateScrollState.bind(this),
                    { passive: !0 },
                  ),
                    this.options.showArrows &&
                      (c(
                        "click",
                        this.selectors.arrowPrev,
                        this.onClickPrev.bind(this),
                      ),
                      c(
                        "click",
                        this.selectors.arrowNext,
                        this.onClickNext.bind(this),
                      )),
                    c(
                      "scrollable.scrollToElement",
                      this.element,
                      this.onScrollToElement.bind(this),
                    ),
                    c(
                      "scrollable.update",
                      this.element,
                      this.setScrollState.bind(this),
                    ),
                    this.options.enableMouseDrag &&
                      (c(
                        "mousedown",
                        this.selectors.itemsContainer,
                        this.startMouseDrag.bind(this),
                      ),
                      c(
                        "mouseup mouseleave",
                        this.selectors.itemsContainer,
                        this.stopMouseDrag.bind(this),
                      ),
                      c(
                        "mousemove",
                        this.selectors.itemsContainer,
                        this.onMouseMove.bind(this),
                      ));
                }
                afterInit() {
                  this.setScrollState();
                }
                onClickPrev() {
                  const a =
                    "auto" === this.options.scrollStep
                      ? this.itemsContainerWidth
                      : this.options.scrollStep;
                  this.scrollTo(this.selectors.itemsContainer.scrollLeft - a);
                }
                onClickNext() {
                  const a =
                    "auto" === this.options.scrollStep
                      ? this.itemsContainerWidth
                      : this.options.scrollStep;
                  this.scrollTo(this.selectors.itemsContainer.scrollLeft + a);
                }
                onScrollToElement(a) {
                  const { element: b, offset: c = 0 } = a.detail;
                  this.scrollTo(b.offsetLeft - c);
                }
                setScrollState() {
                  (this.itemsContainerWidth =
                    this.selectors.itemsContainer.offsetWidth),
                    (this.itemsContainerScrollWidth =
                      this.selectors.itemsContainer.scrollWidth),
                    this.updateArrowsVisibility(),
                    this.updateScrollState();
                }
                updateScrollState() {
                  this.isStart()
                    ? (this.selectors.itemsContainer.classList.remove(
                        this.classNames.scrollStart,
                      ),
                      this.selectors.arrowPrev &&
                        (this.selectors.arrowPrev.classList.add(
                          this.classNames.disabled,
                        ),
                        (this.selectors.arrowPrev.disabled = !0)),
                      (this.state.scrollStart = !1))
                    : (this.selectors.itemsContainer.classList.add(
                        this.classNames.scrollStart,
                      ),
                      this.selectors.arrowPrev &&
                        (this.selectors.arrowPrev.classList.remove(
                          this.classNames.disabled,
                        ),
                        (this.selectors.arrowPrev.disabled = !1)),
                      (this.state.scrollStart = !0)),
                    this.isEnd()
                      ? (this.selectors.itemsContainer.classList.remove(
                          this.classNames.scrollEnd,
                        ),
                        this.selectors.arrowNext &&
                          (this.selectors.arrowNext.classList.add(
                            this.classNames.disabled,
                          ),
                          (this.selectors.arrowNext.disabled = !0)),
                        (this.state.scrollEnd = !1))
                      : (this.selectors.itemsContainer.classList.add(
                          this.classNames.scrollEnd,
                        ),
                        this.selectors.arrowNext &&
                          (this.selectors.arrowNext.classList.remove(
                            this.classNames.disabled,
                          ),
                          (this.selectors.arrowNext.disabled = !1)),
                        (this.state.scrollEnd = !0));
                }
                isStart() {
                  return 0 === this.selectors.itemsContainer.scrollLeft;
                }
                isEnd() {
                  return (
                    Math.ceil(this.selectors.itemsContainer.scrollLeft) +
                      this.itemsContainerWidth >=
                    this.itemsContainerScrollWidth
                  );
                }
                initScrollPosition() {
                  const a = this.getLastScrollPosition(),
                    b =
                      this.options.initScrollElement &&
                      this.element.querySelector(
                        this.options.initScrollElement,
                      );
                  let c = null;
                  (c = b ? b.offsetLeft : a || this.options.initScrollPosition),
                    this.scrollTo(c, a);
                }
                saveScrollPosition() {
                  this.saveLastScrollPosition(
                    this.selectors.itemsContainer.scrollLeft,
                  );
                }
                scrollTo(a, b) {
                  let c;
                  "start" === a
                    ? (c = 0)
                    : "end" === a
                      ? (c = this.selectors.itemsContainer.scrollWidth)
                      : "number" == typeof a && (c = this.getScrollPosition(a)),
                    (c || 0 === c) &&
                      this.selectors.itemsContainer.scroll({
                        top: 0,
                        left: c,
                        behavior: b ? "auto" : "smooth",
                      });
                }
                getScrollPosition(a) {
                  let b;
                  return (
                    (b =
                      0 > a
                        ? 0
                        : a > this.selectors.itemsContainer.scrollWidth
                          ? this.selectors.itemsContainer.scrollWidth
                          : a),
                    b
                  );
                }
                appendArrows() {
                  this.options.showArrows &&
                    !this.selectors.arrowContainer &&
                    this.element.appendChild(this.getArrowsTemplate());
                }
                updateArrowsVisibility() {
                  this.selectors.arrowContainer &&
                    (this.options.showArrows &&
                    this.itemsContainerScrollWidth > this.itemsContainerWidth
                      ? this.selectors.arrowContainer.classList.remove(
                          this.classNames.hidden,
                        )
                      : this.selectors.arrowContainer.classList.add(
                          this.classNames.hidden,
                        ));
                }
                getArrowsTemplate() {
                  const { arrowPrev: a, arrowNext: b } = this.options.text,
                    c = document.createElement("div");
                  return (
                    c.classList.add("c-scrollable__arrows"),
                    [...this.options.classNames.arrows].forEach((a) => {
                      c.classList.add(a);
                    }),
                    c.setAttribute("data-js-scrollable-arrows", !0),
                    (c.innerHTML = '<button type="button" aria-label="'
                      .concat(
                        a,
                        '" class="c-scrollable__arrow-prev" data-js-scrollable-prev></button>\n        <button type="button" class="c-scrollable__arrow-next" aria-label="',
                      )
                      .concat(b, '" data-js-scrollable-next></button>')),
                    c
                  );
                }
                setArrowsPosition() {
                  this.options.showArrows &&
                    (this.options.arrowsTop
                      ? ((this.selectors.arrowNext.style.top = "".concat(
                          this.options.arrowsTop,
                          "px",
                        )),
                        (this.selectors.arrowPrev.style.top = "".concat(
                          this.options.arrowsTop,
                          "px",
                        )))
                      : this.selectors.arrowNext.style.top &&
                        (this.selectors.arrowNext.style.removeProperty("top"),
                        this.selectors.arrowPrev.style.removeProperty("top")));
                }
                onMediaQueryChange() {
                  this.setScrollState(),
                    this.setArrowsPosition(),
                    this.updateArrowsVisibility();
                }
                onResize() {
                  this.setScrollState();
                }
                startMouseDrag(a) {
                  (this.state.isMouseDragActive = !0),
                    this.selectors.itemsContainer.classList.add(
                      this.classNames.dragActive,
                    ),
                    (this.state.mouseDragStartX =
                      a.pageX - this.selectors.itemsContainer.offsetLeft),
                    (this.state.containerScrollLeft =
                      this.selectors.itemsContainer.scrollLeft);
                }
                stopMouseDrag() {
                  (this.state.isMouseDragActive = !1),
                    this.selectors.itemsContainer.classList.remove(
                      this.classNames.dragActive,
                    );
                }
                onMouseMove(a) {
                  if (!this.state.isMouseDragActive) return;
                  a.preventDefault();
                  const b = a.pageX - this.selectors.itemsContainer.offsetLeft,
                    c = b - this.state.mouseDragStartX;
                  this.selectors.itemsContainer.scrollLeft =
                    this.state.containerScrollLeft - c;
                }
                destroy() {
                  d(this.selectors.itemsContainer),
                    d("scrollable.scrollToElement", this.element),
                    d("scrollable.update", this.element),
                    this.selectors.arrowPrev &&
                      this.selectors.arrowNext &&
                      (d("click", this.selectors.arrowPrev),
                      d("click", this.selectors.arrowNext));
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=Scrollable.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/global/Scrollable.js
