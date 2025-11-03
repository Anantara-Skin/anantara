(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "toolbox/deepMerge",
      "toolbox/scroll",
      "toolbox/mediaQuery",
      "services/EventEmitter",
      "toolbox/event",
      "core/shims/support",
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
              (d = a.scrollTo), (e = a.waitForScrollEnd);
            },
            function (a) {
              f = a.mediaQuery;
            },
            function (a) {
              g = a.Event;
            },
            function (a) {
              h = a.once;
            },
            function (a) {
              i = a.isChrome;
            },
          ],
          execute: function () {
            a(
              "default",
              (j = class extends b {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    c(
                      { topThreshold: 0, bottomThreshold: 0, _scrollable: !0 },
                      b,
                    ),
                  );
                }
                initCache() {
                  (this.selectors.sectionsMobile = document.querySelectorAll(
                    '[data-js-scroll-snap-section="mobile"], [data-js-scroll-snap-section="all"]',
                  )),
                    (this.selectors.sectionsAll = document.querySelectorAll(
                      '[data-js-scroll-snap-section="all"]',
                    )),
                    this.sectionsUpdate();
                }
                initState() {
                  0 < this.selectors.sections.length &&
                    ((this.state.currentSectionIndex = -1),
                    (this.state.scrollTopOffset = 0),
                    (this.state.headerHeight = 0),
                    (this.state.stickyPanelHeight = 0),
                    (this.state.lastScrollTop =
                      document.documentElement.scrollTop),
                    (this.state.isScrollSnapping = !1),
                    (this.state.isScrollEnded = !0),
                    (this.state.isChrome = i()));
                }
                afterInit() {
                  0 < this.selectors.sections.length &&
                    (this.updateStickyPanelHeight(), this.setStartSection());
                }
                onMediaQueryChange() {
                  this.destroy(),
                    this.sectionsUpdate(),
                    this.updateStickyPanelHeight(),
                    this.setStartSection(),
                    this.bindEvents();
                }
                sectionsUpdate() {
                  (this.selectors.sections =
                    this.selectors.sectionsMobile.length && f.is("medium down")
                      ? this.selectors.sectionsMobile
                      : this.selectors.sectionsAll),
                    0 < this.selectors.sections.length &&
                      ((this.selectors.sectionsArr = Array.from(
                        this.selectors.sections,
                      )),
                      (this.selectors.productStickyBar = document.querySelector(
                        "[data-js-product-sticky-bar-bar]",
                      )));
                }
                bindEvents() {
                  0 < this.selectors.sections.length &&
                    g.on("header.updateHeight", this.onHeaderUpdate, this);
                }
                onHeaderUpdate(a) {
                  this.updateHeaderHeight(a);
                }
                updateHeaderHeight(a) {
                  (this.state.headerHeight =
                    void 0 === a.height ? this.state.headerHeight : a.height),
                    (this.state.scrollTopOffset =
                      this.state.headerHeight + this.state.stickyPanelHeight);
                }
                updateStickyPanelHeight() {
                  this.selectors.productStickyBar
                    ? this.selectors.productStickyBar.classList.contains(
                        "m-sticked",
                      )
                      ? (this.state.stickyPanelHeight =
                          this.selectors.productStickyBar.offsetHeight)
                      : f.is("large") &&
                        (this.selectors.productStickyBar.classList.add(
                          "m-sticked",
                        ),
                        (this.state.stickyPanelHeight =
                          this.selectors.productStickyBar.offsetHeight),
                        this.selectors.productStickyBar.classList.remove(
                          "m-sticked",
                        ))
                    : (this.state.stickyPanelHeight = 0),
                    (this.state.scrollTopOffset =
                      this.state.headerHeight + this.state.stickyPanelHeight);
                }
                getVisiblePixels(a, b) {
                  const c = a.getBoundingClientRect(),
                    d =
                      window.innerHeight ||
                      document.documentElement.clientHeight;
                  if ("down" === b) {
                    const a = c.top;
                    if (0 <= a && a < d) return d - a;
                  } else {
                    const a = c.bottom;
                    if (a >= this.state.scrollTopOffset && a < d)
                      return a - this.state.scrollTopOffset;
                  }
                  return 0;
                }
                setStartSection() {
                  const a = this.selectors.sectionsArr.findIndex(
                    (a) =>
                      this.getVisiblePixels(a, "down") >
                      this.options.topThreshold,
                  );
                  -1 !== a &&
                    (this.snapToSection(this.selectors.sectionsArr[a]),
                    (this.state.currentSectionIndex = a));
                }
                scrollToNextSection() {
                  const a = this.selectors.sectionsArr.findIndex(
                    (a, b) =>
                      b > this.state.currentSectionIndex &&
                      this.getVisiblePixels(a, "down") >
                        this.options.topThreshold,
                  );
                  -1 !== a &&
                    (this.snapToSection(this.selectors.sectionsArr[a]),
                    (this.state.currentSectionIndex = a));
                }
                scrollToPrevSection() {
                  if (0 >= this.state.currentSectionIndex)
                    return void (this.state.currentSectionIndex = -1);
                  const a = this.selectors.sectionsArr.findLastIndex(
                    (a, b) =>
                      b < this.state.currentSectionIndex &&
                      this.getVisiblePixels(a, "up") >
                        this.options.bottomThreshold,
                  );
                  -1 !== a &&
                    (this.snapToSection(this.selectors.sectionsArr[a]),
                    (this.state.currentSectionIndex = a));
                }
                snapToSection(a) {
                  this.state.isScrollSnapping ||
                    ((this.state.isScrollSnapping = !0),
                    d(a, this.state.scrollTopOffset),
                    "onscrollend" in document
                      ? h("scrollend", window, () => {
                          this.state.isScrollSnapping = !1;
                        })
                      : e().then(() => {
                          this.state.isScrollSnapping = !1;
                        }));
                }
                onScroll() {
                  return 0 < !this.selectors.sections.length ||
                    !this.state.isScrollEnded
                    ? void 0
                    : this.state.isScrollSnapping
                      ? void (this.state.lastScrollTop =
                          document.documentElement.scrollTop)
                      : void (this.state.isChrome
                          ? ("onscrollend" in document
                              ? h(
                                  "scrollend",
                                  window,
                                  this.handleScroll.bind(this),
                                )
                              : e().then(() => {
                                  this.handleScroll();
                                }),
                            (this.state.isScrollEnded = !1),
                            (this.state.lastScrollTop =
                              document.documentElement.scrollTop))
                          : this.handleScroll());
                }
                handleScroll() {
                  this.state.isScrollEnded = !0;
                  const a =
                    document.documentElement.scrollTop >
                    this.state.lastScrollTop;
                  a ? this.scrollToNextSection() : this.scrollToPrevSection(),
                    (this.state.lastScrollTop =
                      document.documentElement.scrollTop);
                }
                destroy() {
                  0 < this.selectors.sections.length &&
                    g.removeListener("header.updateHeight", this.onEvent, this);
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=ScrollSnapping.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/global/ScrollSnapping.js
