(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/ComponentRegistry",
      "core/Component",
      "swiper",
      "core/mixwith",
      "toolbox/deepMerge",
      "services/EventEmitter",
      "toolbox/event",
      "toolbox/throttle",
      "toolbox/debounce",
      "toolbox/mediaQuery",
      "mixins/Accessibility",
      "toolbox/color",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
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
              (d = a.default),
                (e = a.Navigation),
                (f = a.Pagination),
                (g = a.Scrollbar),
                (h = a.Autoplay),
                (i = a.Lazy);
            },
            function (a) {
              j = a.mix;
            },
            function (a) {
              k = a.deepMerge;
            },
            function (a) {
              l = a.Event;
            },
            function (a) {
              (m = a.on), (n = a.off), (o = a.trigger);
            },
            function (a) {
              p = a.throttle;
            },
            function (a) {
              q = a.debounce;
            },
            function (a) {
              r = a.mediaQuery;
            },
            function (a) {
              s = a.default;
            },
            function (a) {
              t = a.checkContrast;
            },
          ],
          execute: function () {
            a(
              "default",
              (u = class extends j(c).with(s) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  const c = k(
                    {
                      slidesPerView: 1,
                      spaceBetween: 0,
                      containerOffset: 0,
                      centerSlides: !1,
                      centerActiveSlide: !1,
                      zoomInActiveSlide: !1,
                      loop: !1,
                      loopAdditionalSlides: 0,
                      showPagination: !1,
                      showArrows: !1,
                      arrowsOutsideContainer: !1,
                      showScrollbar: !1,
                      mouseWheel: !0,
                      direction: "horizontal",
                      containerClass: null,
                      breakpoints: null,
                      initialSlide: 0,
                      autoplay: !1,
                      autoplayDelay: 1e4,
                      freeMode: !1,
                      bulletMessage: "",
                      sliderWithBackground: !1,
                      carouselTheme: null,
                      lazy: !1,
                      loadPrevNext: !1,
                      loadPrevNextAmount: 1,
                      forceLoadFirstImage: !1,
                      a11y: {
                        carouselItemAriaLabel: "Slide {0} of {1}",
                        autoplayAriaLabelStop: "",
                        autoplayAriaLabelPlay: "",
                      },
                      selectedIndex: null,
                      isDynamicContent: !1,
                      touchStartPreventDefault: !0,
                      disableDefaultAriaMessage: !1,
                      classNames: {
                        carouselItem: "c-carousel__item",
                        wrapper: "c-carousel__content",
                        nextArrow: "js-carousel__arrow-next",
                        prevArrow: "js-carousel__arrow-prev",
                        bullet: "c-carousel__pagination-bullet",
                        bulletCustom: "c-carousel__pagination-bullet-custom",
                        pagination: "js-carousel__pagination",
                        paginationList: "js-carousel__pagination-list",
                        scrollbar: "js-carousel__scrollbar",
                        lazy: "js-carousel__lazy",
                        lazyLoading: "m-loading",
                        lazyLoaded: "m-loaded",
                        lazyPreloader: "js-carousel__lazy-preloader",
                      },
                      trackSwipe: !1,
                    },
                    b,
                  );
                  super(a, c);
                }
                initCache() {
                  (this.slider = null),
                    (this.selectors.carousel =
                      this.element.querySelector("[data-js-carousel]")),
                    (this.selectors.container = this.element.querySelector(
                      "[data-js-container]",
                    )),
                    (this.selectors.carouselAria = this.element.querySelector(
                      "[data-js-carousel-aria]",
                    )),
                    (this.selectors.carouselAutoplay =
                      this.element.querySelector(
                        "[data-js-carousel-autoplay]",
                      )),
                    (this.selectors.carouselArrows =
                      this.element.querySelectorAll(
                        "[data-js-carousel-arrows]",
                      )),
                    (this.selectors.carouselPagination =
                      this.element.querySelector(
                        "[data-js-carousel-pagination]",
                      )),
                    (this.selectors.firstSlide = this.element.querySelector(
                      "[data-js-carousel-item]",
                    )),
                    (this.selectors.slides = Array.from(
                      this.selectors.firstSlide.parentElement.children,
                    )),
                    (this.selectors.parentSlide = this.element.closest(
                      "[data-js-carousel-item]",
                    )),
                    (this.options.loop =
                      !!(
                        this.selectors.slides.length >
                        this.options.slidesPerView
                      ) && this.options.loop),
                    (this.classes = {
                      ready: "m-ready",
                      unready: "m-unready",
                      disabled: "m-disabled",
                      hidden: "h-hidden",
                      vertical: "m-vertical",
                      horizontal: "m-horizontal",
                      visible: "m-visible",
                      expanded: "m-expanded",
                      active: "m-active",
                      animated: "m-animated",
                      lightMode: "m-color-light",
                      darkMode: "m-color-dark",
                      light: "m-light",
                      dark: "m-dark",
                    });
                }
                initState() {
                  (this.state.isAutoplayEnabled = this.options.autoplay),
                    (this.state.hasVideos = !!this.element.querySelectorAll(
                      "[data-js-video-container]",
                    ).length),
                    (this.state.currentVideo = null),
                    (this.state.expanded = !!this.state.expanded),
                    (this.state.isSlideChangeTransitionEnd = null),
                    (this.state.mutationObserver = null),
                    (this.state.touches = null);
                }
                afterInit() {
                  this.setDirection(),
                    this.setContainerClass(),
                    this.createSlider(),
                    this.setBreakpointScrollbarClass(),
                    this.options.isExpanded && !this.state.expanded
                      ? this.expandSlides()
                      : !this.options.isExpanded &&
                        this.state.expanded &&
                        this.unexpandSlides(),
                    this.options.autoplay && this.showAutoplayButton(),
                    this.options.isDynamicContent &&
                      this.initMutationObserver(),
                    this.setSlidesIndex(),
                    this.handleBackgroundUpdates(),
                    this.options.carouselTheme &&
                      this.setCarouselTheme(this.options.carouselTheme),
                    this.updateNavigationState();
                }
                initMutationObserver() {
                  const a = new MutationObserver(
                    p(this.onMutation.bind(this), 1e3),
                  );
                  a.observe(this.element, { subtree: !0, childList: !0 }),
                    (this.state.mutationObserver = a);
                }
                onMutation() {
                  this.slider && this.updateAccessibility();
                }
                bindEvents() {
                  m(
                    "carousel.scrollto",
                    this.element,
                    this.onScrollTo.bind(this),
                  ),
                    r.is("large") &&
                      (m(
                        "mouseenter",
                        this.selectors.carousel,
                        this.onMouseEnter.bind(this),
                      ),
                      m(
                        "mouseleave",
                        this.selectors.carousel,
                        q(this.onMouseLeave.bind(this)),
                      )),
                    m(
                      "focusin",
                      this.selectors.carousel,
                      this.onFocusIn.bind(this),
                    ),
                    m(
                      "focusout",
                      this.selectors.carousel,
                      this.onFocusOut.bind(this),
                    ),
                    m(
                      "carousel.update",
                      this.element,
                      this.updateSlider.bind(this),
                    ),
                    this.options.touchStartPreventDefault &&
                      m(
                        "click",
                        this.selectors.carousel,
                        this.onCarouselClick.bind(this),
                      );
                }
                bindSliderEvents() {
                  this.slider.params.showArrows &&
                    (this.slider.navigation.nextEl &&
                      (m(
                        "click",
                        this.slider.navigation.nextEl,
                        this.onNextArrowClick.bind(this),
                      ),
                      m(
                        "mousemove pointermove touchmove",
                        this.slider.navigation.nextEl,
                        this.onControlMove.bind(this),
                        { passive: !0 },
                      )),
                    this.slider.navigation.prevEl &&
                      (m(
                        "click",
                        this.slider.navigation.prevEl,
                        this.onPrevArrowClick.bind(this),
                      ),
                      m(
                        "mousemove pointermove touchmove",
                        this.slider.navigation.prevEl,
                        this.onControlMove.bind(this),
                        { passive: !0 },
                      ))),
                    this.slider.params.showPagination &&
                      this.slider.pagination.el &&
                      (m(
                        "click",
                        this.slider.pagination.el,
                        this.onPaginationClick.bind(this),
                      ),
                      m(
                        "mousemove pointermove touchmove",
                        this.slider.pagination.el,
                        this.onControlMove.bind(this),
                        { passive: !0 },
                      )),
                    this.options.autoplay &&
                      this.selectors.carouselAutoplay &&
                      m(
                        "click",
                        this.selectors.carouselAutoplay,
                        this.onCarouselAutoplayToggle.bind(this),
                      );
                }
                onNextArrowClick() {
                  this.state.navigationNextDisabled ||
                    ((this.state.isAutoplayEnabled = !1),
                    this.stopAutoplay(),
                    this.nextSlide()),
                    this.updateNavigationState();
                }
                onPrevArrowClick() {
                  this.state.navigationPrevDisabled ||
                    ((this.state.isAutoplayEnabled = !1),
                    this.stopAutoplay(),
                    this.prevSlide()),
                    this.updateNavigationState();
                }
                updateNavigationState() {
                  const a = this.getCarouselOptions(),
                    { disabledClass: b } = a.navigation;
                  (this.state.navigationPrevDisabled =
                    this.slider.navigation.prevEl &&
                    this.slider.navigation.prevEl.classList.contains(b)),
                    (this.state.navigationNextDisabled =
                      this.slider.navigation.nextEl &&
                      this.slider.navigation.nextEl.classList.contains(b));
                }
                onControlMove(a) {
                  a.stopPropagation();
                }
                onPaginationClick(a) {
                  const b = this.options.customPagination
                      ? this.options.classNames.bulletCustom
                      : this.options.classNames.bullet,
                    c = a.target.classList.contains(b),
                    d = a.target.dataset.slideto;
                  (this.state.isAutoplayEnabled = !1),
                    (this.state.paginationClicked = !0),
                    this.stopAutoplay(),
                    Number.isNaN(d) ||
                      (c && this.bulletChange(d),
                      this.options.loop
                        ? this.slider.slideToLoop(d)
                        : this.slider.slideTo(d));
                }
                onPaginationRender() {
                  this.slider &&
                    this.state.paginationClicked &&
                    (this.slider.pagination.el
                      .querySelector(
                        '[data-slideto="'.concat(this.slider.realIndex, '"]'),
                      )
                      .focus(),
                    (this.state.paginationClicked = !1));
                }
                onSlideResetTransitionEnd() {
                  this.updateSlidesOnTransition();
                }
                setSearchAria() {
                  if (this.options.disableDefaultAriaMessage) return;
                  const a = this.slider.slides[this.slider.activeIndex],
                    b = a && a.getAttribute("aria-label");
                  b &&
                    this.selectors.carouselAria &&
                    (this.selectors.carouselAria.innerHTML = b);
                }
                onCarouselAutoplayToggle() {
                  this.state.isAutoplayEnabled
                    ? ((this.state.isAutoplayEnabled = !1), this.stopAutoplay())
                    : ((this.state.isAutoplayEnabled = !0),
                      this.startAutoplay());
                  const a = this.slider.slides[this.slider.activeIndex];
                  setTimeout(() => {
                    const b = this.getAnalyticsData(a);
                    if (b) {
                      const { extraData: a } = b;
                      a &&
                        "" === a.click_action &&
                        (a.click_action = this.state.isAutoplayEnabled
                          ? "pause"
                          : "display"),
                        l.emit("analytics.event", {
                          category: "slider",
                          action: this.state.isAutoplayEnabled
                            ? "pause"
                            : "display",
                          label: b.label,
                          extraData: a,
                        });
                    }
                  }, 0);
                }
                onMouseEnter() {
                  this.state.isAutoplayEnabled && this.stopAutoplay();
                }
                onMouseLeave() {
                  this.state.isAutoplayEnabled && this.startAutoplay();
                }
                onFocusIn() {
                  this.state.isAutoplayEnabled && this.stopAutoplay();
                }
                onFocusOut() {
                  this.state.isAutoplayEnabled && this.startAutoplay();
                }
                onCarouselClick(a) {
                  if ("SELECT" === a.target.nodeName) {
                    const b = new MouseEvent("click");
                    a.target.dispatchEvent(b);
                  }
                }
                bulletChange(a) {
                  const b =
                    this.slider.slides[a] ||
                    this.slider.slides[this.slider.activeIndex];
                  setTimeout(() => {
                    const a = this.getAnalyticsData(b);
                    if (a) {
                      const { extraData: b } = a;
                      b && "" === b.click_action && (b.click_action = "select"),
                        l.emit("analytics.event", {
                          category: "slider",
                          action: "select",
                          label: a.label,
                          extraData: b,
                        });
                    }
                  }, 0);
                }
                swipeSlide() {
                  if (
                    !this.slider.swipeDirection ||
                    this.state.touches === JSON.stringify(this.slider.touches)
                  )
                    return;
                  this.state.touches = JSON.stringify(this.slider.touches);
                  const a = this.slider.slides[this.slider.activeIndex];
                  setTimeout(() => {
                    let b = this.getAnalyticsData(a);
                    if (b) {
                      b.swipeData && (b = Object.assign(b, b.swipeData));
                      const a =
                          "prev" === this.slider.swipeDirection
                            ? "previous"
                            : this.slider.swipeDirection,
                        c = b.action ? "".concat(b.action).concat(a) : a,
                        { extraData: d } = b;
                      (d.click_action = a),
                        l.emit("analytics.event", {
                          category: b.category || "slider",
                          action: c,
                          label: b.label,
                          extraData: d,
                        });
                    }
                  }, 0);
                }
                nextSlide() {
                  const a =
                    this.slider.visibleSlides[
                      this.slider.visibleSlides.length - 1
                    ];
                  setTimeout(() => {
                    const b = this.getAnalyticsData(a);
                    if (b) {
                      const a = b.action ? "".concat(b.action, "next") : "next",
                        { extraData: c } = b;
                      c && "" === c.click_action && (c.click_action = "next"),
                        l.emit("analytics.event", {
                          category: b.category || "slider",
                          action: a,
                          label: b.label,
                          extraData: c,
                        });
                    }
                  }, 0);
                }
                prevSlide() {
                  const a = this.slider.visibleSlides[0];
                  setTimeout(() => {
                    const b = this.getAnalyticsData(a);
                    if (b) {
                      const a = b.action
                          ? "".concat(b.action, "previous")
                          : "previous",
                        { extraData: c } = b;
                      c &&
                        "" === c.click_action &&
                        (c.click_action = "previous"),
                        l.emit("analytics.event", {
                          category: b.category || "slider",
                          action: a,
                          label: b.label,
                          extraData: c,
                        });
                    }
                  }, 0);
                }
                expandSlides() {
                  this.toggleCarouselExpand(!0);
                }
                unexpandSlides() {
                  this.toggleCarouselExpand(!1);
                }
                toggleCarouselExpand(a) {
                  const b = "boolean" == typeof a ? a : !this.state.expanded,
                    c = b
                      ? this.getExpandedCarouselOptions()
                      : this.getCarouselOptions();
                  (this.state.expanded = b),
                    this.unbindSliderEvents(),
                    this.slider.destroy(!1, !0),
                    this.createSlider(c),
                    b
                      ? (this.element.removeAttribute("role"),
                        this.element.removeAttribute("aria-roledescription"),
                        this.selectors.container.classList.add(
                          this.classes.expanded,
                        ),
                        this.selectors.slides.forEach((a) => {
                          a.removeAttribute("role"),
                            a.removeAttribute("aria-roledescription");
                        }))
                      : (this.element.setAttribute("role", "region"),
                        this.element.setAttribute(
                          "aria-roledescription",
                          "carousel",
                        ),
                        this.selectors.container.classList.remove(
                          this.classes.expanded,
                        ),
                        this.selectors.slides.forEach((a) => {
                          a.setAttribute("role", "group"),
                            a.setAttribute("aria-roledescription", "slide");
                        }));
                }
                getExpandedCarouselOptions() {
                  const a = this.getCarouselOptions();
                  return (
                    (a.slidesPerColumn = Math.ceil(
                      this.slider.slides.length /
                        this.slider.slidesPerViewDynamic(),
                    )),
                    (a.slidesPerColumnFill = "row"),
                    (a.initialSlide = 0),
                    (a.showArrows = !1),
                    (a.showPagination = !1),
                    (a.showScrollbar = !1),
                    (a.autoplay = !1),
                    a
                  );
                }
                showAutoplayButton() {
                  this.selectors.carouselAutoplay &&
                    this.selectors.carouselAutoplay.classList.remove(
                      "h-hidden",
                    );
                }
                createSlider(a) {
                  return this.slider && !this.slider.destroyed
                    ? this.slider
                    : ((this.slider = new d(
                        this.selectors.carousel,
                        a || this.getCarouselOptions(),
                      )),
                      this.selectors.container.removeAttribute("aria-live"),
                      (this.slider.enabled = !0),
                      this.state.hasVideos &&
                        this.slider.slides.length &&
                        (this.state.currentVideo =
                          this.getCurrentSlide().slide.querySelector(
                            "[data-js-video-container]",
                          )),
                      this.options.lazy && this.updateLazyLoad(),
                      this.updateSlider(),
                      this.bindSliderEvents(),
                      this.slider);
                }
                setDirection() {
                  "vertical" === this.options.direction
                    ? (this.element.classList.add(this.classes.vertical),
                      this.element.classList.remove(this.classes.horizontal))
                    : (this.element.classList.add(this.classes.horizontal),
                      this.element.classList.remove(this.classes.vertical));
                }
                setContainerClass() {
                  this.options.wrapperClass &&
                    this.selectors.container.classList.add(
                      this.options.wrapperClass,
                    );
                }
                setBreakpointScrollbarClass() {
                  this.options.showScrollbar &&
                    this.options.breakpoints &&
                    Object.keys(this.options.breakpoints).forEach((a) => {
                      r.is(a) &&
                        this.options.breakpoints[a].classNames &&
                        this.options.breakpoints[a].classNames.scrollbarClass &&
                        this.options.breakpoints[a].classNames.scrollbarClass
                          .split(" ")
                          .forEach((a) => {
                            this.slider.scrollbar.el.classList.add(a);
                          });
                    });
                }
                updateSlider() {
                  this.slider.update(),
                    this.options.selectedIndex &&
                      this.options.selectedIndex >=
                        this.options.slidesPerView &&
                      (this.options.loop
                        ? this.slider.slideToLoop(+this.options.selectedIndex)
                        : this.slider.slideTo(+this.options.selectedIndex)),
                    this.options.isExpanded ||
                      ("vertical" === this.options.direction
                        ? this.updateVerticalSlider()
                        : this.updateHorizontalSlider()),
                    this.setOffsetSlider(),
                    this.updateArrowsVisibility(),
                    this.updateAccessibility(),
                    o("carousel.updated", this.element, { bubbles: !0 }),
                    this.options.showScrollbar && this.updateScrollbar();
                }
                updateCarouselBackground() {
                  const a = this.slider.slides[this.slider.activeIndex],
                    b = a && a.querySelector("[data-js-tile]"),
                    c = b && b.getAttribute("data-background-color"),
                    d = b && b.getAttribute("data-transparent-tile-color"),
                    e = this.element.closest("[data-js-section]");
                  return this.isBackgroundImageSet(b)
                    ? void (e.style.backgroundColor = "")
                    : void (d && this.setColorForTransparentTile(b),
                      c &&
                        ((e.style.backgroundColor = c),
                        !d && this.setOppositeColor(b, c)));
                }
                isBackgroundImageSet(a) {
                  return (
                    (r.is("small only") &&
                      a.getAttribute("data-background-image-mobile")) ||
                    (r.is("medium only") &&
                      a.getAttribute("data-background-image-tablet")) ||
                    (r.is("large") && a.getAttribute("data-background-image"))
                  );
                }
                setColorForTransparentTile(a) {
                  const b = a && a.getAttribute("data-transparent-tile-color");
                  b &&
                    (this.setSectionColor(b), this.setCarouselTileColor(a, b));
                }
                setSectionColor(a) {
                  const b = this.element.closest("[data-js-section]");
                  b &&
                    ("light" === a
                      ? (b.classList.remove("h-color-dark"),
                        b.classList.add("h-color-light"),
                        this.addNavigationClass(this.classes.lightMode))
                      : (b.classList.remove("h-color-light"),
                        b.classList.add("h-color-dark"),
                        this.removeNavigationClass(this.classes.lightMode)));
                }
                updateCarouselBackgroundImage() {
                  const a = this.slider.slides[this.slider.activeIndex],
                    b = a && a.querySelector("[data-background-image]");
                  let c = null;
                  b &&
                    (r.is("small only")
                      ? (c = b.getAttribute("data-background-image-mobile"))
                      : r.is("medium only")
                        ? (c = b.getAttribute("data-background-image-tablet"))
                        : (c = b.getAttribute("data-background-image")));
                  const d = this.element.closest("[data-js-section]");
                  (d.style.backgroundImage =
                    a && c && d ? "url('".concat(c, "')") : null),
                    this.setColorForTransparentTile(b);
                }
                setCarouselTheme(a) {
                  "dark" === a
                    ? (this.selectors.slides.forEach((a) => {
                        this.setCarouselTileColor(a, "dark");
                      }),
                      this.removeNavigationClass(this.classes.lightMode))
                    : "light" == a &&
                      (this.selectors.slides.forEach((a) => {
                        this.setCarouselTileColor(a, "light");
                      }),
                      this.addNavigationClass(this.classes.lightMode));
                }
                updateScrollbar() {
                  if (this.slider.params.centeredSlides) {
                    const a = this.slider.slides.length,
                      b =
                        "vertical" === this.options.direction
                          ? this.slider.scrollbar.el.offsetHeight
                          : this.slider.scrollbar.el.offsetWidth;
                    (this.slider.params.scrollbar.dragSize = Math.round(b / a)),
                      this.slider.scrollbar.updateSize();
                  }
                }
                setOppositeColor(a, b) {
                  4.5 > t(b, "#ffffff")
                    ? (this.setSectionColor("dark"),
                      this.setCarouselTileColor(a, "dark"))
                    : (this.setSectionColor("light"),
                      this.setCarouselTileColor(a, "light"));
                }
                setCarouselTileColor(a, b) {
                  const c = a.querySelector("[data-js-product-tile]"),
                    d = a.querySelector("[data-js-product-variation]"),
                    e = a.querySelector("[data-js-product-rating]"),
                    f = a.querySelector("[data-js-product-intensity]");
                  "dark" === b
                    ? (c &&
                        (c.classList.add(this.classes.darkMode),
                        c.classList.remove(this.classes.lightMode)),
                      d &&
                        (d.classList.add(this.classes.dark),
                        d.classList.remove(this.classes.light)),
                      e &&
                        (e.classList.add(this.classes.dark),
                        e.classList.remove(this.classes.light)),
                      f &&
                        (f.classList.add(this.classes.dark),
                        f.classList.remove(this.classes.light)))
                    : "light" == b &&
                      (c &&
                        (c.classList.add(this.classes.lightMode),
                        c.classList.remove(this.classes.darkMode)),
                      d &&
                        (d.classList.add(this.classes.light),
                        d.classList.remove(this.classes.dark)),
                      e &&
                        (e.classList.add(this.classes.light),
                        e.classList.remove(this.classes.dark)),
                      f &&
                        (f.classList.add(this.classes.light),
                        f.classList.remove(this.classes.dark)));
                }
                addNavigationClass(a) {
                  this.selectors.carouselArrows.length &&
                    this.selectors.carouselArrows.forEach((b) => {
                      b.classList.add(a);
                    }),
                    this.selectors.carouselPagination &&
                      this.selectors.carouselPagination.classList.add(a),
                    this.options.showScrollbar &&
                      this.slider.scrollbar.el.classList.add(a);
                }
                removeNavigationClass(a) {
                  this.selectors.carouselArrows.length &&
                    this.selectors.carouselArrows.forEach((b) => {
                      b.classList.remove(a);
                    }),
                    this.selectors.carouselPagination &&
                      this.selectors.carouselPagination.classList.remove(a),
                    this.options.showScrollbar &&
                      this.slider.scrollbar.el.classList.remove(a);
                }
                append(a) {
                  a &&
                    (this.slider.appendSlide(a),
                    (this.selectors.slides = Array.from(
                      this.selectors.firstSlide.parentElement.children,
                    )),
                    l.emit("registry.registerChildren", this.element),
                    this.updateSlider());
                }
                updateArrowsVisibility() {
                  this.selectors.parentSlide &&
                    !this.selectors.parentSlide.classList.contains(
                      this.classes.visible,
                    ) &&
                    (this.slider.navigation.nextEl.setAttribute(
                      "tabindex",
                      "-1",
                    ),
                    this.slider.navigation.nextEl.setAttribute(
                      "data-js-original-tabindex",
                      "0",
                    ),
                    this.slider.navigation.prevEl.setAttribute(
                      "tabindex",
                      "-1",
                    ),
                    this.slider.navigation.prevEl.setAttribute(
                      "data-js-original-tabindex",
                      "0",
                    )),
                    this.slider &&
                      this.slider.navigation &&
                      (this.slider.params.showArrows && this.slider.enabled
                        ? (this.showElement(this.slider.navigation.nextEl, !0),
                          this.showElement(this.slider.navigation.prevEl, !0))
                        : (this.hideElement(this.slider.navigation.nextEl, !0),
                          this.hideElement(this.slider.navigation.prevEl, !0)));
                }
                updateVerticalSlider() {
                  this.slider.enabled &&
                  this.getSlidesHeight(this.selectors.slides) <=
                    this.selectors.carousel.offsetHeight
                    ? (this.slider.slideTo(0, 0), this.disableCarousel())
                    : !this.slider.enabled &&
                      this.getSlidesHeight(this.selectors.slides) >
                        this.selectors.carousel.offsetHeight &&
                      this.enableCarousel(),
                    "auto" === this.slider.params.slidesPerView &&
                      this.slider.slides.css("height", "");
                }
                updateHorizontalSlider() {
                  this.slider.enabled &&
                  !this.options.loop &&
                  this.getSlidesWidth(this.selectors.slides) <=
                    this.selectors.carousel.offsetWidth
                    ? (this.slider.slideTo(0, 0), this.disableCarousel())
                    : !this.slider.enabled &&
                      this.getSlidesWidth(this.selectors.slides) >
                        this.selectors.carousel.offsetWidth &&
                      this.enableCarousel(),
                    "auto" === this.slider.params.slidesPerView &&
                      this.slider.slides.css("width", "");
                }
                getSlidesHeight(a) {
                  let b = 0,
                    c = 0;
                  return (
                    a.forEach((a) => {
                      const d = a.getBoundingClientRect();
                      0 !== d.height && ((c += 1), (b += d.height));
                    }),
                    a[0].style.marginBottom &&
                      (b += parseInt(a[0].style.marginBottom, 10) * (c - 1)),
                    Math.round(b)
                  );
                }
                getSlidesWidth(a) {
                  let b = 0,
                    c = 0;
                  return (
                    a.forEach((a) => {
                      const d = a.getBoundingClientRect();
                      0 !== d.width && ((c += 1), (b += d.width));
                    }),
                    a[0].style.marginRight &&
                      (b += parseInt(a[0].style.marginRight, 10) * (c - 1)),
                    Math.round(b)
                  );
                }
                getCarouselOptions() {
                  const a = {
                    slidesPerView: this.options.slidesPerView,
                    spaceBetween: this.options.spaceBetween,
                    containerOffset: this.options.containerOffset,
                    centerInsufficientSlides: this.options.centerSlides,
                    centeredSlides: this.options.centerActiveSlide,
                    loop: this.options.loop,
                    showPagination: this.options.showPagination,
                    showScrollbar: this.options.showScrollbar,
                    showArrows: this.options.showArrows,
                    arrowsOutsideContainer: this.options.arrowsOutsideContainer,
                    direction: this.options.direction,
                    initialSlide: this.options.initialSlide,
                    loopAdditionalSlides: this.options.loopAdditionalSlides,
                    autoplay: this.options.autoplay,
                    preloadImages: !1,
                    freeMode: this.options.freeMode,
                    freeModeMomentum: !1,
                    watchSlidesProgress: !0,
                    watchSlidesVisibility: !0,
                    isExpanded: this.options.isExpanded,
                    touchStartPreventDefault:
                      this.options.touchStartPreventDefault,
                    nested: this.options.nested,
                    lazy: this.options.lazy,
                    containerModifierClass: "m-",
                    slideClass: this.options.classNames.carouselItem,
                    wrapperClass: this.options.classNames.wrapper,
                    slideActiveClass: "m-active",
                    slideNextClass: "m-next",
                    slidePrevClass: "m-prev",
                    slideDuplicateClass: "m-duplicate",
                    slideDuplicateNextClass: "m-duplicate-next",
                    slideDuplicatePrevClass: "m-duplicate-prev",
                    slideDuplicateActiveClass: "m-duplicate-active",
                    slideVisibleClass: this.classes.visible,
                    threshold: 1,
                    on: {
                      init: this.onCarouselInit.bind(this),
                      resize: this.onSliderResize.bind(this),
                      slideChangeTransitionEnd:
                        this.onSlideChangeTransitionEnd.bind(this),
                      slideChange: this.onSlideChange.bind(this),
                      sliderMove: this.onSliderMove.bind(this),
                      paginationRender: this.onPaginationRender.bind(this),
                      slideResetTransitionEnd:
                        this.onSlideResetTransitionEnd.bind(this),
                    },
                    a11y: {
                      notificationClass: "c-carousel__notification",
                      paginationBulletMessage: "".concat(
                        this.options.bulletMessage,
                        " {{index}}",
                      ),
                      slideLabelMessage: this.options.a11y.slideLabelMessage,
                      prevSlideMessage: this.options.a11y.prevSlideMessage,
                      nextSlideMessage: this.options.a11y.nextSlideMessage,
                    },
                  };
                  return (
                    this.options.breakpoints &&
                      (a.breakpoints = this.options.breakpoints),
                    a.showPagination &&
                      (a.pagination = this.getPaginationOptions()),
                    a.showScrollbar &&
                      (a.scrollbar = {
                        el: ".".concat(this.options.classNames.scrollbar),
                        hide: !1,
                        dragSize: "auto",
                        draggable: !0,
                        lockClass: "m-lock",
                        dragClass: "c-carousel__scrollbar-drag",
                      }),
                    this.options.mouseWheel &&
                      (a.mousewheel = { forceToAxis: !0, invert: !0 }),
                    this.options.autoplay &&
                      !this.options.autoplay.delay &&
                      (a.autoplay = { delay: this.options.autoplayDelay }),
                    void 0 === this.options.nested &&
                      this.selectors.parentSlide &&
                      (a.nested = !0),
                    (a.navigation = {
                      nextEl: ".".concat(this.options.classNames.nextArrow),
                      prevEl: ".".concat(this.options.classNames.prevArrow),
                      disabledClass: "m-disabled",
                      hiddenClass: "h-hidden",
                    }),
                    (a.navigation = this.setUniqueArrows(a.navigation)),
                    a.lazy &&
                      (a.lazy = {
                        elementClass: this.options.classNames.lazy,
                        loadedClass: this.options.classNames.lazyLoaded,
                        loadingClass: this.options.classNames.lazyLoading,
                        preloaderClass: this.options.classNames.lazyPreloader,
                        loadPrevNext: this.options.loadPrevNext,
                        loadPrevNextAmount: this.options.loadPrevNextAmount,
                      }),
                    a
                  );
                }
                getPaginationOptions() {
                  return {
                    el: ".".concat(this.options.classNames.paginationList),
                    type: "custom",
                    renderCustom(a, b, c) {
                      let d = "";
                      for (let e = 0; e < c; e++) {
                        const a = b === e + 1;
                        d += a
                          ? '<li class="c-carousel__pagination-list-item"><button class="'
                              .concat(this.bulletClass, " ")
                              .concat(this.currentClass, " ")
                              .concat(this.bulletActiveClass, " ")
                              .concat(this.clickableClass, '" aria-current="')
                              .concat(a, '" aria-disabled="true" aria-label="')
                              .concat(this.bulletMessage, " ")
                              .concat(e + 1, '" data-slideto="')
                              .concat(e, '"></button></li>')
                          : '<li class="c-carousel__pagination-list-item"><button class="'
                              .concat(this.bulletClass, " ")
                              .concat(this.clickableClass, '" aria-label="')
                              .concat(this.bulletMessage, " ")
                              .concat(e + 1, '" data-slideto="')
                              .concat(e, '"></button></li>');
                      }
                      return d;
                    },
                    clickable: !0,
                    bulletClass: this.options.customPagination
                      ? this.options.classNames.bulletCustom
                      : this.options.classNames.bullet,
                    bulletActiveClass: "m-active",
                    bulletMessage: this.options.bulletMessage,
                    modifierClass: "m-",
                    currentClass: "m-current",
                    totalClass: "m-total",
                    hiddenClass: "h-hidden",
                    clickableClass: "m-clickable",
                  };
                }
                setUniqueArrows(a) {
                  return (
                    this.element
                      .querySelector(a.nextEl)
                      .classList.add("m-".concat(this.id)),
                    this.element
                      .querySelector(a.prevEl)
                      .classList.add("m-".concat(this.id)),
                    (a.nextEl += ".m-".concat(this.id)),
                    (a.prevEl += ".m-".concat(this.id)),
                    a
                  );
                }
                setOffsetSlider() {
                  if (this.options.containerOffset) {
                    const a = "".concat(
                        -1 * this.options.containerOffset,
                        "px",
                      ),
                      b = "".concat(this.options.containerOffset, "px");
                    (this.selectors.carousel.style.marginLeft = a),
                      (this.selectors.carousel.style.marginRight = a),
                      (this.selectors.carousel.style.paddingLeft = b),
                      (this.selectors.carousel.style.paddingRight = b);
                  }
                }
                onCarouselInit() {
                  this.element.classList.add(this.classes.ready),
                    this.element.classList.remove(this.classes.unready),
                    this.options.zoomInActiveSlide &&
                      this.element.classList.add(this.classes.animated),
                    l.emit("carousel.init", this.element);
                }
                onSliderResize() {
                  this.slider && this.updateSlider();
                }
                onSlideChangeTransitionEnd() {
                  this.updateSlidesOnTransition();
                }
                updateSlidesOnTransition() {
                  if (this.slider) {
                    if (this.options.loop) {
                      const a = this.element.querySelectorAll(
                        ".c-carousel__item.m-visible:not(.m-initialized)",
                      );
                      a &&
                        a.forEach((a) => {
                          a.classList.add("m-initialized"),
                            this.setDuplicateSlideState(a),
                            l.emit("registry.registerChildren", a);
                        }),
                        this.state.isSlideChangeTransitionEnd ||
                          setTimeout(this.updateSlider.bind(this), 0);
                    }
                    this.state.isAutoplayEnabled || this.setSearchAria(),
                      (this.state.isSlideChangeTransitionEnd ||
                        !this.options.loop) &&
                        this.updateAccessibility(),
                      (this.state.isSlideChangeTransitionEnd = !0);
                  }
                }
                onSlideChange() {
                  this.slider &&
                    (this.playSlideVideo(),
                    this.handleBackgroundUpdates(),
                    !this.options.loop &&
                      (this.slider.isBeginning
                        ? this.slider.navigation.prevEl.blur()
                        : this.slider.isEnd &&
                          this.slider.navigation.nextEl.blur()),
                    this.options.trackSwipe &&
                      this.slider.swipeDirection &&
                      this.swipeSlide(),
                    o("carousel.slidechanged", this.element, {
                      index: this.slider.realIndex,
                      bubbles: !0,
                    }));
                }
                handleBackgroundUpdates() {
                  this.options.sliderWithBackground &&
                    (this.updateCarouselBackground(),
                    this.updateCarouselBackgroundImage());
                }
                onSliderMove() {
                  (this.state.isAutoplayEnabled = !1), this.stopAutoplay();
                }
                updateAccessibility() {
                  if (
                    this.slider.pagination &&
                    this.slider.pagination.bullets
                  ) {
                    const a =
                        this.slider.pagination.bullets[
                          this.slider.previousIndex
                        ],
                      b =
                        this.slider.pagination.bullets[this.slider.activeIndex];
                    a &&
                      (a.removeAttribute("aria-current"),
                      a.removeAttribute("aria-disabled")),
                      b &&
                        (b.setAttribute("aria-current", "true"),
                        b.setAttribute("aria-disabled", "true"));
                  }
                  (this.selectors.parentSlide &&
                    !this.selectors.parentSlide.classList.contains(
                      this.classes.visible,
                    )) ||
                    Array.from(this.slider.slides).forEach((a) => {
                      a.classList.contains(this.classes.visible) ||
                      this.state.expanded
                        ? this.showElement(a, !1)
                        : this.hideElement(a, !1),
                        a
                          .querySelectorAll(
                            '[data-component="global/Carousel"]',
                          )
                          .forEach((a) => {
                            b.afterRegistered(a).then(() => {
                              o("carousel.update", a);
                            });
                          });
                    });
                }
                updateLazyLoad() {
                  Array.from(this.slider.slides).forEach((a, b) => {
                    const c = a.querySelector(
                        ".".concat(this.options.classNames.lazy),
                      ),
                      d = document.createElement("div");
                    (d.className = "c-loader ".concat(
                      this.options.classNames.lazyPreloader,
                    )),
                      (this.options.forceLoadFirstImage && 0 === b) ||
                        !c ||
                        c.classList.contains(
                          this.options.classNames.lazyLoaded,
                        ) ||
                        a.appendChild(d);
                  });
                }
                setDuplicateSlideState(a) {
                  a.firstElementChild &&
                    a.firstElementChild.setAttribute("data-is-duplicate", !0);
                }
                setSlidesIndex() {
                  Array.from(this.slider.slides).forEach((a, b, c) => {
                    if (
                      (a.firstElementChild &&
                        a.firstElementChild.setAttribute(
                          "data-index",
                          a.getAttribute("data-swiper-slide-index") || b,
                        ),
                      !a.hasAttribute("aria-label"))
                    ) {
                      const d = this.options.a11y.carouselItemAriaLabel
                        .replace("{0}", b + 1)
                        .replace("{1}", c.length);
                      a.setAttribute("aria-label", d);
                    }
                    a.hasAttribute("data-index") ||
                      a.setAttribute("data-index", b);
                  });
                }
                onScrollTo(a) {
                  const { index: b } = a.detail;
                  this.goTo(b, a.detail.speed);
                }
                onMediaQueryChange() {
                  this.slider &&
                    (this.unbindSliderEvents(),
                    this.slider.destroy(!1, !0),
                    this.initState(),
                    this.afterInit());
                }
                getCurrentSlide() {
                  const a = this.slider.slides[this.slider.activeIndex];
                  return {
                    index: this.slider.activeIndex,
                    slide: a,
                    isVideo: !!a && a.hasAttribute("data-video"),
                  };
                }
                getAnalyticsData(a) {
                  let b;
                  if (!a) return b;
                  const c = a.getAttribute("data-analytics");
                  if (c)
                    try {
                      b = JSON.parse(c);
                    } catch (b) {
                      window.lora.debug &&
                        console.error(
                          'Please check that the data-analytics you have passed for "'.concat(
                            a,
                            '" respect JSON format',
                          ),
                        );
                    }
                  return b;
                }
                disableCarousel() {
                  this.slider.detachEvents(),
                    (this.slider.enabled = !1),
                    this.element.classList.add(this.classes.disabled),
                    this.element.removeAttribute("aria-roledescription"),
                    this.slider.wrapperEl.classList.add(this.classes.disabled),
                    Array.from(this.slider.slides).forEach((a) => {
                      a.removeAttribute("aria-roledescription"),
                        a.removeAttribute("role");
                    }),
                    this.options.showPagination &&
                      this.hideElement(this.slider.pagination.el, !0),
                    this.options.showScrollbar &&
                      this.hideElement(this.slider.scrollbar.el, !0);
                }
                enableCarousel() {
                  this.slider.attachEvents(),
                    (this.slider.enabled = !0),
                    this.element.classList.remove(this.classes.disabled),
                    this.element.setAttribute(
                      "aria-roledescription",
                      "carousel",
                    ),
                    this.slider.wrapperEl.classList.remove(
                      this.classes.disabled,
                    ),
                    Array.from(this.slider.slides).forEach((a) => {
                      a.setAttribute("aria-roledescription", "slide"),
                        a.setAttribute("role", "group");
                    }),
                    this.options.showPagination &&
                      this.showElement(this.slider.pagination.el, !0),
                    this.options.showScrollbar &&
                      this.showElement(this.slider.scrollbar.el, !0);
                }
                startAutoplay() {
                  this.selectors.carouselAutoplay &&
                    (this.selectors.carouselAutoplay.classList.remove(
                      "m-active",
                    ),
                    this.selectors.carouselAutoplay.setAttribute(
                      "aria-label",
                      this.options.a11y.autoplayAriaLabelStop,
                    )),
                    this.slider.autoplay.start();
                }
                stopAutoplay() {
                  this.selectors.carouselAutoplay &&
                    (this.selectors.carouselAutoplay.classList.add("m-active"),
                    this.selectors.carouselAutoplay.setAttribute(
                      "aria-label",
                      this.options.a11y.autoplayAriaLabelPlay,
                    )),
                    this.slider.autoplay.stop();
                }
                next() {
                  this.slider.slideNext();
                }
                previous() {
                  this.slider.slidePrev();
                }
                reset() {
                  this.options.loop
                    ? this.slider.slideToLoop(0)
                    : this.slider.slideTo(0);
                }
                goTo(a, b) {
                  "number" != typeof a ||
                    this.state.expanded ||
                    (this.options.loop
                      ? this.slider.slideToLoop(a, b)
                      : this.slider.slideTo(a, b));
                }
                playSlideVideo() {
                  if (this.state.hasVideos) {
                    this.state.currentVideo &&
                      o("video.player.pause", this.state.currentVideo);
                    const a = this.getCurrentSlide();
                    (this.state.currentVideo =
                      a.slide &&
                      a.slide.querySelector("[data-js-video-container]")),
                      a.isVideo &&
                        o("video.player.play", this.state.currentVideo, {
                          time: 0,
                        });
                  }
                }
                hideElement(a, b) {
                  if (a && a instanceof HTMLElement) {
                    b
                      ? a.classList.add(this.classes.hidden)
                      : a.setAttribute("aria-hidden", "true"),
                      (a.dataset.jsCarouselItemVisible = !1);
                    const c = super.getFocusableElements(a, !0, !0);
                    c.forEach((a) => {
                      a.hasAttribute("tabindex") &&
                        "-1" !== a.getAttribute("tabindex") &&
                        a.setAttribute(
                          "data-js-original-tabindex",
                          a.getAttribute("tabindex"),
                        ),
                        a.setAttribute("tabindex", "-1");
                    });
                  }
                }
                showElement(a, b) {
                  if (a && a instanceof HTMLElement) {
                    b
                      ? a.classList.remove(this.classes.hidden)
                      : a.removeAttribute("aria-hidden"),
                      (a.dataset.jsCarouselItemVisible = !0);
                    const c = super.getFocusableElements(a, !0, !0);
                    c.forEach((a) => {
                      const b = a.closest("[data-js-carousel-item]");
                      (!b || b.classList.contains(this.classes.visible)) &&
                        ("-1" !== a.getAttribute("tabindex") ||
                          a.getAttribute("disabled") ||
                          (a.hasAttribute("data-js-original-tabindex")
                            ? a.setAttribute(
                                "tabindex",
                                a.getAttribute("data-js-original-tabindex"),
                              )
                            : a.removeAttribute("tabindex")));
                    });
                  }
                }
                unbindSliderEvents() {
                  this.slider.params.showArrows &&
                    (this.slider.navigation.nextEl &&
                      (n(
                        "click",
                        this.slider.navigation.nextEl,
                        this.onNextArrowClick.bind(this),
                      ),
                      n(
                        "mousemove pointermove touchmove",
                        this.slider.navigation.nextEl,
                      )),
                    this.slider.navigation.prevEl &&
                      (n(
                        "click",
                        this.slider.navigation.prevEl,
                        this.onPrevArrowClick.bind(this),
                      ),
                      n(
                        "mousemove pointermove touchmove",
                        this.slider.navigation.prevEl,
                      ))),
                    this.slider.params.showPagination &&
                      this.slider.pagination.el &&
                      (n("click", this.slider.pagination.el),
                      n(
                        "mousemove pointermove touchmove",
                        this.slider.pagination.el,
                      )),
                    this.options.autoplay &&
                      this.selectors.carouselAutoplay &&
                      n("click", this.selectors.carouselAutoplay);
                }
                destroy() {
                  this.slider &&
                    (this.unbindSliderEvents(),
                    this.slider.destroy(),
                    (this.slider = null)),
                    this.options.isDynamicContent &&
                      this.state.mutationObserver.disconnect(),
                    n(this.element);
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=Carousel.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/global/Carousel.js
