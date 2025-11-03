/* eslint max-lines: off */
import Registry from "core/ComponentRegistry";
import Component from "core/Component";
import Swiper, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Lazy,
} from "swiper"; // eslint-disable-line no-unused-vars
import { mix } from "core/mixwith";
import { deepMerge } from "toolbox/deepMerge";
import { Event } from "services/EventEmitter";
import { on, off, trigger } from "toolbox/event";
import { throttle } from "toolbox/throttle";
import { debounce } from "toolbox/debounce";
import { mediaQuery } from "toolbox/mediaQuery";
import Accessibility from "mixins/Accessibility";
import { checkContrast } from "toolbox/color";
/**
 * See documentation for API: http://idangero.us/swiper/api/
 * This is a description of the Carousel constructor function.
 * @class
 * @classdesc This is a description of the Carousel class.
 * @extends Component
 */
export default class Carousel extends mix(Component).with(Accessibility) {
  /**
   * @typedef {Object} optionsObject
   * @property {number or 'auto'} slidesPerView - Number of slides per view
   *                                              (slides visible at the same time on slider's container).
   * @property {number} spaceBetween - Distance between slides in px.
   * @property {number} containerOffset - Offset for the container (before and after all slides) in px.
   * @property {boolean} centerSlides - Centered carousel slides if the amount of slides less than `slidesPerView`
   * @property {boolean} centerActiveSlide - If true, then active slide will be centered, not always on the left side.
   * @property {boolean} zoomInActiveSlide - If true, then active slide will be animated and other slides will be hidden
   *                                         only Images will be shown
   * @property {boolean} sliderWithBackground - update carousel wrapper [data-js-section]
   *                                            with new background based on active slide
   * @property {'light' or 'dark'} carouselTheme - set carousel colors according to the theme
   * @property {boolean} lazy - Set to true to enable lazy loading of images
   * @property {boolean} loadPrevNext - Set to true to enable loading of previous and next slides
   * @property {number} loadPrevNextAmount - Number of slides to be loaded before and after the active one
   * @property {boolean} loop - Set to true to enable continuous loop mode
   * @property {number} loopAdditionalSlides - Addition number of slides that will be cloned after creating of loop
   * @property {boolean} showPagination - Set to true to show pagination bullets
   * @property {boolean} showArrows - Set to true to show navigation arrows
   * @property {boolean} arrowsOutsideContainer - Set to true to render navigation arrows outside of carousel container
   * @property {boolean} showScrollbar - Set to true to show scrollbar
   * @property {boolean} mouseWheel - Set to true to enable mouseWheel control
   * @property {'horizontal' or 'vertical'} direction - Carousel direction
   * @property {Object} breakpoints - Allows to set different parameter for different responsive breakpoints (screen sizes).
   *                                  Not all parameters can be changed in breakpoints, only those which are not required
   *                                  different layout and logic, like slidesPerView, slidesPerGroup, spaceBetween.
   *                                  Such parameters like slidesPerColumn, loop, direction, effect won't work.
   * @property {number} initialSlide - Index number of initial slide.
   * @property {boolean} autoplay - Set to true to enable autoplay
   * @property {number} autoplayDelay - default delay of autoplay in ms
   * @property {boolean} freeMode - If true then slides will not have fixed positions
   * @property {Object} classNames - Carousel namespace (see API)
   * @property {text} autoplayAriaLabelStop - Autoplay aria label bullet text for accessibility (Pause slider)
   * @property {text} autoplayAriaLabelPlay - Autoplay aria label bullet text for accessibility (Play slider)
   * @property {boolean} isDynamicContent - set to true if carousel has dynamic content
   *                                        (e.g. product tiles with lazy loaded components or HTML content loaded from 3PI)
   * @property {boolean} touchStartPreventDefault - If disabled, pointerdown event won't be prevented
   * @property {boolean} trackSwipe - If true, then swipe event will be tracked and fired analytics event
   * @property {boolean} nested - Set to true on Swiper for correct touch events interception.
   *                              Use only on swipers that use same direction as the parent one
   * @property {boolean} disableDefaultAriaMessage - Set to true to disable default aria message for carousel.
   *                                           Use only if custom aria message is provided.
   */
  /**
   * @constructor
   * @param {object} element - DOM node of component
   * @param {optionsObject} options - Component Options
   */
  constructor(element, options = {}) {
    const config = deepMerge(
      {
        slidesPerView: 1,
        spaceBetween: 0,
        containerOffset: 0,
        centerSlides: false,
        centerActiveSlide: false,
        zoomInActiveSlide: false,
        loop: false,
        loopAdditionalSlides: 0,
        showPagination: false,
        showArrows: false,
        arrowsOutsideContainer: false,
        showScrollbar: false,
        mouseWheel: true,
        direction: "horizontal",
        containerClass: null,
        breakpoints: null,
        initialSlide: 0,
        autoplay: false,
        autoplayDelay: 10000,
        freeMode: false,
        bulletMessage: "",
        sliderWithBackground: false,
        carouselTheme: null,
        lazy: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        forceLoadFirstImage: false,
        a11y: {
          carouselItemAriaLabel: "Slide {0} of {1}",
          autoplayAriaLabelStop: "",
          autoplayAriaLabelPlay: "",
        },
        selectedIndex: null,
        isDynamicContent: false,
        touchStartPreventDefault: true,
        disableDefaultAriaMessage: false,
        // Classnames options
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
        trackSwipe: false,
      },
      options,
    );
    super(element, config);
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    this.slider = null;
    this.selectors.carousel = this.element.querySelector("[data-js-carousel]");
    this.selectors.container = this.element.querySelector(
      "[data-js-container]",
    );
    this.selectors.carouselAria = this.element.querySelector(
      "[data-js-carousel-aria]",
    );
    this.selectors.carouselAutoplay = this.element.querySelector(
      "[data-js-carousel-autoplay]",
    );
    this.selectors.carouselArrows = this.element.querySelectorAll(
      "[data-js-carousel-arrows]",
    );
    this.selectors.carouselPagination = this.element.querySelector(
      "[data-js-carousel-pagination]",
    );
    // Get only closest slides to exclude nested carousel slides
    this.selectors.firstSlide = this.element.querySelector(
      "[data-js-carousel-item]",
    );
    this.selectors.slides = Array.from(
      this.selectors.firstSlide.parentElement.children,
    );
    // Check if there is a parent carousel slide (e.g. one carousel is nested within another)
    this.selectors.parentSlide = this.element.closest(
      "[data-js-carousel-item]",
    );
    // force to turn off infinite loop if all slides are fit into view to prevent duplicate slide creation
    this.options.loop =
      this.selectors.slides.length > this.options.slidesPerView
        ? this.options.loop
        : false;
    this.classes = {
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
    };
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.isAutoplayEnabled = this.options.autoplay;
    this.state.hasVideos = !!this.element.querySelectorAll(
      "[data-js-video-container]",
    ).length;
    this.state.currentVideo = null;
    this.state.expanded = !!this.state.expanded;
    this.state.isSlideChangeTransitionEnd = null;
    this.state.mutationObserver = null;
    this.state.touches = null;
  }
  /* eslint-disable complexity */
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    this.setDirection();
    this.setContainerClass();
    this.createSlider();
    this.setBreakpointScrollbarClass();
    // create carousel in expanded state
    if (this.options.isExpanded && !this.state.expanded) {
      this.expandSlides();
    } else if (!this.options.isExpanded && this.state.expanded) {
      this.unexpandSlides();
    }
    if (this.options.autoplay) {
      this.showAutoplayButton();
    }
    if (this.options.isDynamicContent) {
      this.initMutationObserver();
    }
    this.setSlidesIndex();
    this.handleBackgroundUpdates();
    if (this.options.carouselTheme) {
      this.setCarouselTheme(this.options.carouselTheme);
    }
    this.updateNavigationState();
  }
  /* eslint-enable complexity */
  /**
   * Initialize a mutation observer for the carousel to watch dynamic changes
   */
  initMutationObserver() {
    const mutationObserver = new MutationObserver(
      throttle(this.onMutation.bind(this), 1000),
    );
    mutationObserver.observe(this.element, { subtree: true, childList: true });
    this.state.mutationObserver = mutationObserver;
  }
  /**
   * Mutation observer handler
   * If new content is added, update accessibility,
   * in particular prevent new content from receiving focus in invisible carousel slides
   */
  onMutation() {
    if (this.slider) {
      this.updateAccessibility();
    }
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    on("carousel.scrollto", this.element, this.onScrollTo.bind(this));
    if (mediaQuery.is("large")) {
      on("mouseenter", this.selectors.carousel, this.onMouseEnter.bind(this));
      on(
        "mouseleave",
        this.selectors.carousel,
        debounce(this.onMouseLeave.bind(this)),
      );
    }
    on("focusin", this.selectors.carousel, this.onFocusIn.bind(this));
    on("focusout", this.selectors.carousel, this.onFocusOut.bind(this));
    on("carousel.update", this.element, this.updateSlider.bind(this));
    if (this.options.touchStartPreventDefault) {
      on("click", this.selectors.carousel, this.onCarouselClick.bind(this));
    }
  }
  /**
   * Bind events for created Slider
   */
  bindSliderEvents() {
    if (this.slider.params.showArrows) {
      if (this.slider.navigation.nextEl) {
        on(
          "click",
          this.slider.navigation.nextEl,
          this.onNextArrowClick.bind(this),
        );
        on(
          "mousemove pointermove touchmove",
          this.slider.navigation.nextEl,
          this.onControlMove.bind(this),
          {
            passive: true,
          },
        );
      }
      if (this.slider.navigation.prevEl) {
        on(
          "click",
          this.slider.navigation.prevEl,
          this.onPrevArrowClick.bind(this),
        );
        on(
          "mousemove pointermove touchmove",
          this.slider.navigation.prevEl,
          this.onControlMove.bind(this),
          {
            passive: true,
          },
        );
      }
    }
    if (this.slider.params.showPagination && this.slider.pagination.el) {
      on("click", this.slider.pagination.el, this.onPaginationClick.bind(this));
      on(
        "mousemove pointermove touchmove",
        this.slider.pagination.el,
        this.onControlMove.bind(this),
        {
          passive: true,
        },
      );
    }
    if (this.options.autoplay && this.selectors.carouselAutoplay) {
      on(
        "click",
        this.selectors.carouselAutoplay,
        this.onCarouselAutoplayToggle.bind(this),
      );
    }
  }
  /**
   * NextArrow Click event handler
   */
  onNextArrowClick() {
    if (!this.state.navigationNextDisabled) {
      this.state.isAutoplayEnabled = false;
      this.stopAutoplay();
      this.nextSlide();
    }
    this.updateNavigationState();
  }
  /**
   * PrevArrow Click event handler
   */
  onPrevArrowClick() {
    if (!this.state.navigationPrevDisabled) {
      this.state.isAutoplayEnabled = false;
      this.stopAutoplay();
      this.prevSlide();
    }
    this.updateNavigationState();
  }
  /**
   * Updates the disabling state for the navigation arrows
   */
  updateNavigationState() {
    const carouselOptions = this.getCarouselOptions();
    const { disabledClass } = carouselOptions.navigation;
    this.state.navigationPrevDisabled =
      this.slider.navigation.prevEl &&
      this.slider.navigation.prevEl.classList.contains(disabledClass);
    this.state.navigationNextDisabled =
      this.slider.navigation.nextEl &&
      this.slider.navigation.nextEl.classList.contains(disabledClass);
  }
  /**
   * Carousel Control Move event handler
   * pagination, navigation (arrows)
   *
   * @param {Object} event Event object
   */
  onControlMove(event) {
    event.stopPropagation();
  }
  /**
   * Pagination Click event handler
   *
   * @param {Object} event Event object
   */
  onPaginationClick(event) {
    const bulletClass = this.options.customPagination
      ? this.options.classNames.bulletCustom
      : this.options.classNames.bullet;
    const isBullet = event.target.classList.contains(bulletClass);
    const index = event.target.dataset.slideto;
    this.state.isAutoplayEnabled = false;
    this.state.paginationClicked = true;
    this.stopAutoplay();
    if (!Number.isNaN(index)) {
      if (isBullet) {
        this.bulletChange(index);
      }
      if (this.options.loop) {
        this.slider.slideToLoop(index);
      } else {
        this.slider.slideTo(index);
      }
    }
  }
  /**
   * Carousel pagination render event handler
   * Restore the focus on the clicked pagination element after pagination is re-rendered
   */
  onPaginationRender() {
    if (this.slider && this.state.paginationClicked) {
      this.slider.pagination.el
        .querySelector(`[data-slideto="${this.slider.realIndex}"]`)
        .focus();
      this.state.paginationClicked = false;
    }
  }
  /**
   * Slide Reset Transition End event handler
   * Event will be fired in the end of animation of resetting slide to current one
   */
  onSlideResetTransitionEnd() {
    this.updateSlidesOnTransition();
  }
  /**
   * Set Carousel field aria
   */
  setSearchAria() {
    if (this.options.disableDefaultAriaMessage) {
      return;
    }
    const activeSlide = this.slider.slides[this.slider.activeIndex];
    const activeSlideAriaLabel =
      activeSlide && activeSlide.getAttribute("aria-label");
    if (activeSlideAriaLabel && this.selectors.carouselAria) {
      this.selectors.carouselAria.innerHTML = activeSlideAriaLabel;
    }
  }
  /**
   * Mouse Enter event handler
   */
  onCarouselAutoplayToggle() {
    if (!this.state.isAutoplayEnabled) {
      this.state.isAutoplayEnabled = true;
      this.startAutoplay();
    } else {
      this.state.isAutoplayEnabled = false;
      this.stopAutoplay();
    }
    const activeSlide = this.slider.slides[this.slider.activeIndex];
    setTimeout(() => {
      const analyticsData = this.getAnalyticsData(activeSlide);
      if (analyticsData) {
        const { extraData } = analyticsData;
        if (extraData && extraData.click_action === "") {
          extraData.click_action = !this.state.isAutoplayEnabled
            ? "display"
            : "pause";
        }
        Event.emit("analytics.event", {
          category: "slider",
          action: !this.state.isAutoplayEnabled ? "display" : "pause",
          label: analyticsData.label,
          extraData,
        });
      }
    }, 0);
  }
  /**
   * Mouse Enter event handler
   */
  onMouseEnter() {
    if (this.state.isAutoplayEnabled) {
      this.stopAutoplay();
    }
  }
  /**
   * Mouse Leave event handler
   */
  onMouseLeave() {
    if (this.state.isAutoplayEnabled) {
      this.startAutoplay();
    }
  }
  /**
   * Focus in event handler
   */
  onFocusIn() {
    if (this.state.isAutoplayEnabled) {
      this.stopAutoplay();
    }
  }
  /**
   * Focus out event handler
   */
  onFocusOut() {
    if (this.state.isAutoplayEnabled) {
      this.startAutoplay();
    }
  }
  /**
   * Click event handler
   * @param {Object} event Event object
   */
  onCarouselClick(event) {
    if (event.target.nodeName === "SELECT") {
      const mouseEvent = new MouseEvent("click");
      event.target.dispatchEvent(mouseEvent);
    }
  }
  /**
   * Bullet Change according to current slide
   * @param {Integer} index slide
   */
  bulletChange(index) {
    const activeSlide =
      this.slider.slides[index] || this.slider.slides[this.slider.activeIndex];
    setTimeout(() => {
      const analyticsData = this.getAnalyticsData(activeSlide);
      if (analyticsData) {
        const { extraData } = analyticsData;
        if (extraData && extraData.click_action === "") {
          extraData.click_action = "select";
        }
        Event.emit("analytics.event", {
          category: "slider",
          action: "select",
          label: analyticsData.label,
          extraData,
        });
      }
    }, 0);
  }
  /**
   * Fires slide analytics during slide swiping
   */
  swipeSlide() {
    // prevent action if slider was not swiped or swiped programmatically (not by user)
    if (
      !this.slider.swipeDirection ||
      this.state.touches === JSON.stringify(this.slider.touches)
    ) {
      return;
    }
    this.state.touches = JSON.stringify(this.slider.touches);
    const slide = this.slider.slides[this.slider.activeIndex];
    setTimeout(() => {
      let analyticsData = this.getAnalyticsData(slide);
      if (analyticsData) {
        if (analyticsData.swipeData) {
          analyticsData = Object.assign(analyticsData, analyticsData.swipeData);
        }
        const swipeDirection =
          this.slider.swipeDirection === "prev"
            ? "previous"
            : this.slider.swipeDirection;
        const action = analyticsData.action
          ? `${analyticsData.action}${swipeDirection}`
          : swipeDirection;
        const { extraData } = analyticsData;
        extraData.click_action = swipeDirection;
        Event.emit("analytics.event", {
          category: analyticsData.category || "slider",
          action,
          label: analyticsData.label,
          extraData,
        });
      }
    }, 0);
  }
  /**
   * Next Slide prepare to show
   */
  nextSlide() {
    const nextVisibleSlide =
      this.slider.visibleSlides[this.slider.visibleSlides.length - 1];
    setTimeout(() => {
      const analyticsData = this.getAnalyticsData(nextVisibleSlide);
      if (analyticsData) {
        const action = analyticsData.action
          ? `${analyticsData.action}next`
          : "next";
        const { extraData } = analyticsData;
        if (extraData && extraData.click_action === "") {
          extraData.click_action = "next";
        }
        Event.emit("analytics.event", {
          category: analyticsData.category || "slider",
          action,
          label: analyticsData.label,
          extraData,
        });
      }
    }, 0);
  }
  /**
   * Previous Slide prepare to show
   */
  prevSlide() {
    const prevVisibleSlide = this.slider.visibleSlides[0];
    setTimeout(() => {
      const analyticsData = this.getAnalyticsData(prevVisibleSlide);
      if (analyticsData) {
        const action = analyticsData.action
          ? `${analyticsData.action}previous`
          : "previous";
        const { extraData } = analyticsData;
        if (extraData && extraData.click_action === "") {
          extraData.click_action = "previous";
        }
        Event.emit("analytics.event", {
          category: analyticsData.category || "slider",
          action,
          label: analyticsData.label,
          extraData,
        });
      }
    }, 0);
  }
  /**
   * Expand the Slides
   */
  expandSlides() {
    this.toggleCarouselExpand(true);
  }
  /**
   * Unexpand the Slides
   */
  unexpandSlides() {
    this.toggleCarouselExpand(false);
  }
  /**
   * Carousel Expand Toggle Handler
   * @Param {Boolean} stateToActivate (optional) toggle state to activate
   */
  toggleCarouselExpand(stateToActivate) {
    const state =
      typeof stateToActivate === "boolean"
        ? stateToActivate
        : !this.state.expanded;
    const carouselOptions = state
      ? this.getExpandedCarouselOptions()
      : this.getCarouselOptions();
    this.state.expanded = state;
    // The next line does not delete the Swiper instance.
    // It just clean all custom styles from slides, wrapper and container to permit a re-initialization.
    this.unbindSliderEvents();
    this.slider.destroy(false, true);
    this.createSlider(carouselOptions);
    if (state) {
      this.element.removeAttribute("role");
      this.element.removeAttribute("aria-roledescription");
      this.selectors.container.classList.add(this.classes.expanded);
      this.selectors.slides.forEach((slide) => {
        slide.removeAttribute("role");
        slide.removeAttribute("aria-roledescription");
      });
    } else {
      this.element.setAttribute("role", "region");
      this.element.setAttribute("aria-roledescription", "carousel");
      this.selectors.container.classList.remove(this.classes.expanded);
      this.selectors.slides.forEach((slide) => {
        slide.setAttribute("role", "group");
        slide.setAttribute("aria-roledescription", "slide");
      });
    }
  }
  /**
   * Build Swiper options object with expanded carousel options
   * @returns {Object} options
   */
  getExpandedCarouselOptions() {
    const carouselOptions = this.getCarouselOptions();
    carouselOptions.slidesPerColumn = Math.ceil(
      this.slider.slides.length / this.slider.slidesPerViewDynamic(),
    );
    carouselOptions.slidesPerColumnFill = "row";
    carouselOptions.initialSlide = 0;
    carouselOptions.showArrows = false;
    carouselOptions.showPagination = false;
    carouselOptions.showScrollbar = false;
    carouselOptions.autoplay = false;
    return carouselOptions;
  }
  /**
   * Show Autoplay button
   */
  showAutoplayButton() {
    if (this.selectors.carouselAutoplay) {
      this.selectors.carouselAutoplay.classList.remove("h-hidden");
    }
  }
  /**
   * Create slider
   * @param {Object} carouselOptions carousel options
   * @returns {Object} slider instance
   */
  createSlider(carouselOptions) {
    if (this.slider && !this.slider.destroyed) {
      return this.slider;
    }
    this.slider = new Swiper(
      this.selectors.carousel,
      carouselOptions || this.getCarouselOptions(),
    );
    this.selectors.container.removeAttribute("aria-live");
    this.slider.enabled = true;
    // set current video slide
    if (this.state.hasVideos && this.slider.slides.length) {
      this.state.currentVideo = this.getCurrentSlide().slide.querySelector(
        "[data-js-video-container]",
      );
    }
    if (this.options.lazy) {
      this.updateLazyLoad();
    }
    this.updateSlider();
    this.bindSliderEvents();
    return this.slider;
  }
  /**
   * Set Carousel direction (horizontal or vertical).
   * Since Swiper is initialized on component's child node we need to bubble modifier class to the element
   */
  setDirection() {
    if (this.options.direction === "vertical") {
      this.element.classList.add(this.classes.vertical);
      this.element.classList.remove(this.classes.horizontal);
    } else {
      this.element.classList.add(this.classes.horizontal);
      this.element.classList.remove(this.classes.vertical);
    }
  }
  /**
   * Set Carousel Container Class
   */
  setContainerClass() {
    if (this.options.wrapperClass) {
      this.selectors.container.classList.add(this.options.wrapperClass);
    }
  }
  /**
   * Set Breakpoints Scrollbar Class
   */
  setBreakpointScrollbarClass() {
    if (this.options.showScrollbar && this.options.breakpoints) {
      Object.keys(this.options.breakpoints).forEach((key) => {
        if (
          mediaQuery.is(key) &&
          this.options.breakpoints[key].classNames &&
          this.options.breakpoints[key].classNames.scrollbarClass
        ) {
          this.options.breakpoints[key].classNames.scrollbarClass
            .split(" ")
            .forEach((className) => {
              this.slider.scrollbar.el.classList.add(className);
            });
        }
      });
    }
  }
  /**
   * Refresh slider state.
   *
   * Function should be called first time right after Swiper's initialization,
   * as Swiper may set inline width/height to carousel slides
   * based on slidesPerView property (unless it set to 'auto').
   */
  updateSlider() {
    this.slider.update();
    if (
      this.options.selectedIndex &&
      this.options.selectedIndex >= this.options.slidesPerView
    ) {
      if (this.options.loop) {
        this.slider.slideToLoop(Number(this.options.selectedIndex));
      } else {
        this.slider.slideTo(Number(this.options.selectedIndex));
      }
    }
    if (!this.options.isExpanded) {
      if (this.options.direction === "vertical") {
        this.updateVerticalSlider();
      } else {
        this.updateHorizontalSlider();
      }
    }
    this.setOffsetSlider();
    this.updateArrowsVisibility();
    this.updateAccessibility();
    trigger("carousel.updated", this.element, {
      bubbles: true,
    });
    if (this.options.showScrollbar) {
      this.updateScrollbar();
    }
  }
  /**
   * Update carousel background
   */
  updateCarouselBackground() {
    const activeSlide = this.slider.slides[this.slider.activeIndex];
    const tile = activeSlide && activeSlide.querySelector("[data-js-tile]");
    const tileBackground = tile && tile.getAttribute("data-background-color");
    const transparentTileColor =
      tile && tile.getAttribute("data-transparent-tile-color");
    const section = this.element.closest("[data-js-section]");
    if (this.isBackgroundImageSet(tile)) {
      section.style.backgroundColor = "";
      return;
    }
    if (transparentTileColor) {
      this.setColorForTransparentTile(tile);
    }
    if (tileBackground) {
      section.style.backgroundColor = tileBackground;
      if (!transparentTileColor) {
        this.setOppositeColor(tile, tileBackground);
      }
    }
  }
  /**
   * Check if background image is set for current display mediaQuery
   * @param {String} item product tile
   * @returns {Boolean} Returns true, if background image is set for current display mediaQuery
   */
  isBackgroundImageSet(item) {
    return (
      (mediaQuery.is("small only") &&
        item.getAttribute("data-background-image-mobile")) ||
      (mediaQuery.is("medium only") &&
        item.getAttribute("data-background-image-tablet")) ||
      (mediaQuery.is("large") && item.getAttribute("data-background-image"))
    );
  }
  /**
   * Set colors to section and product tile
   * @param {String} item product tile
   */
  setColorForTransparentTile(item) {
    const transparentTileColor =
      item && item.getAttribute("data-transparent-tile-color");
    if (transparentTileColor) {
      this.setSectionColor(transparentTileColor);
      this.setCarouselTileColor(item, transparentTileColor);
    }
  }
  /**
   * Set section color
   * @param {String} color hex string
   */
  setSectionColor(color) {
    const section = this.element.closest("[data-js-section]");
    if (section) {
      if (color === "light") {
        section.classList.remove("h-color-dark");
        section.classList.add("h-color-light");
        this.addNavigationClass(this.classes.lightMode);
      } else {
        section.classList.remove("h-color-light");
        section.classList.add("h-color-dark");
        this.removeNavigationClass(this.classes.lightMode);
      }
    }
  }
  /**
   * Update carousel background image
   */
  updateCarouselBackgroundImage() {
    const activeSlide = this.slider.slides[this.slider.activeIndex];
    const tile =
      activeSlide && activeSlide.querySelector("[data-background-image]");
    let tileBackgroundImage = null;
    if (tile) {
      if (mediaQuery.is("small only")) {
        tileBackgroundImage = tile.getAttribute("data-background-image-mobile");
      } else if (mediaQuery.is("medium only")) {
        tileBackgroundImage = tile.getAttribute("data-background-image-tablet");
      } else {
        tileBackgroundImage = tile.getAttribute("data-background-image");
      }
    }
    const section = this.element.closest("[data-js-section]");
    section.style.backgroundImage =
      activeSlide && tileBackgroundImage && section
        ? `url('${tileBackgroundImage}')`
        : null;
    this.setColorForTransparentTile(tile);
  }
  /**
   * Set carousel background
   * @param {String} theme - carousel theme
   */
  setCarouselTheme(theme) {
    if (theme === "dark") {
      this.selectors.slides.forEach((slide) => {
        this.setCarouselTileColor(slide, "dark");
      });
      this.removeNavigationClass(this.classes.lightMode);
    } else if (theme === "light") {
      this.selectors.slides.forEach((slide) => {
        this.setCarouselTileColor(slide, "light");
      });
      this.addNavigationClass(this.classes.lightMode);
    }
  }
  /**
   * Update carousel scrollbar
   */
  updateScrollbar() {
    if (this.slider.params.centeredSlides) {
      const totalSlides = this.slider.slides.length;
      const scrollContainerSize =
        this.options.direction === "vertical"
          ? this.slider.scrollbar.el.offsetHeight
          : this.slider.scrollbar.el.offsetWidth;
      this.slider.params.scrollbar.dragSize = Math.round(
        scrollContainerSize / totalSlides,
      );
      this.slider.scrollbar.updateSize();
    }
  }
  /**
   * Update carousel colors opposite carousel background
   * @param {String} item product tile
   * @param {String} color hex string
   */
  setOppositeColor(item, color) {
    // Check background contrast with light foreground color
    if (checkContrast(color, "#ffffff") < 4.5) {
      this.setSectionColor("dark");
      this.setCarouselTileColor(item, "dark");
    } else {
      this.setSectionColor("light");
      this.setCarouselTileColor(item, "light");
    }
  }
  /* eslint-disable complexity */
  /**
   * Set carousel tile with light colors
   * @param {String} item product tile
   * @param {String} color hex string
   */
  setCarouselTileColor(item, color) {
    const tile = item.querySelector("[data-js-product-tile]");
    const variation = item.querySelector("[data-js-product-variation]");
    const rating = item.querySelector("[data-js-product-rating]");
    const intensity = item.querySelector("[data-js-product-intensity]");
    if (color === "dark") {
      if (tile) {
        tile.classList.add(this.classes.darkMode);
        tile.classList.remove(this.classes.lightMode);
      }
      if (variation) {
        variation.classList.add(this.classes.dark);
        variation.classList.remove(this.classes.light);
      }
      if (rating) {
        rating.classList.add(this.classes.dark);
        rating.classList.remove(this.classes.light);
      }
      if (intensity) {
        intensity.classList.add(this.classes.dark);
        intensity.classList.remove(this.classes.light);
      }
    } else if (color === "light") {
      if (tile) {
        tile.classList.add(this.classes.lightMode);
        tile.classList.remove(this.classes.darkMode);
      }
      if (variation) {
        variation.classList.add(this.classes.light);
        variation.classList.remove(this.classes.dark);
      }
      if (rating) {
        rating.classList.add(this.classes.light);
        rating.classList.remove(this.classes.dark);
      }
      if (intensity) {
        intensity.classList.add(this.classes.light);
        intensity.classList.remove(this.classes.dark);
      }
    }
  }
  /* eslint-enable complexity */
  /**
   * Add class to carousel navigations like arrows, pagination, scroll bar
   * @param {Text} cssClass css class
   */
  addNavigationClass(cssClass) {
    if (this.selectors.carouselArrows.length) {
      this.selectors.carouselArrows.forEach((arrows) => {
        arrows.classList.add(cssClass);
      });
    }
    if (this.selectors.carouselPagination) {
      this.selectors.carouselPagination.classList.add(cssClass);
    }
    if (this.options.showScrollbar) {
      this.slider.scrollbar.el.classList.add(cssClass);
    }
  }
  /**
   * Remove class to carousel navigations like arrows, pagination, scroll bar
   * @param {Text} cssClass css class
   */
  removeNavigationClass(cssClass) {
    if (this.selectors.carouselArrows.length) {
      this.selectors.carouselArrows.forEach((arrows) => {
        arrows.classList.remove(cssClass);
      });
    }
    if (this.selectors.carouselPagination) {
      this.selectors.carouselPagination.classList.remove(cssClass);
    }
    if (this.options.showScrollbar) {
      this.slider.scrollbar.el.classList.remove(cssClass);
    }
  }
  /**
   * Appends slides to the slider.
   * @param {Array} slides array of slides html
   */
  append(slides) {
    if (slides) {
      this.slider.appendSlide(slides);
      this.selectors.slides = Array.from(
        this.selectors.firstSlide.parentElement.children,
      );
      Event.emit("registry.registerChildren", this.element);
      this.updateSlider();
    }
  }
  /**
   * Refresh slider arrows.
   *
   * Hide/show slider arrows based on breakpoint options
   */
  updateArrowsVisibility() {
    // Disable arrows focus if there is a parent carousel's hidden slide
    if (
      this.selectors.parentSlide &&
      !this.selectors.parentSlide.classList.contains(this.classes.visible)
    ) {
      this.slider.navigation.nextEl.setAttribute("tabindex", "-1");
      this.slider.navigation.nextEl.setAttribute(
        "data-js-original-tabindex",
        "0",
      );
      this.slider.navigation.prevEl.setAttribute("tabindex", "-1");
      this.slider.navigation.prevEl.setAttribute(
        "data-js-original-tabindex",
        "0",
      );
    }
    if (this.slider && this.slider.navigation) {
      if (this.slider.params.showArrows && this.slider.enabled) {
        this.showElement(this.slider.navigation.nextEl, true);
        this.showElement(this.slider.navigation.prevEl, true);
      } else {
        this.hideElement(this.slider.navigation.nextEl, true);
        this.hideElement(this.slider.navigation.prevEl, true);
      }
    }
  }
  /**
   * Refresh Vertical slider state.
   * If all slides are fit into visible area, detach all events, slide to first slide instantly and add class,
   * which disables arrows, pagination and duplicated slides of loop mode.
   * If overall slides height becomes greater than container size (i.e. due to screen resize or layout change),
   * enable the carousel again.
   */
  updateVerticalSlider() {
    if (
      this.slider.enabled &&
      this.getSlidesHeight(this.selectors.slides) <=
        this.selectors.carousel.offsetHeight
    ) {
      this.slider.slideTo(0, 0);
      this.disableCarousel();
    } else if (
      !this.slider.enabled &&
      this.getSlidesHeight(this.selectors.slides) >
        this.selectors.carousel.offsetHeight
    ) {
      this.enableCarousel();
    }
    if (this.slider.params.slidesPerView === "auto") {
      // Fix Swiper issue: slidesPerView: 'auto' with breakpoints does not work
      // https://github.com/nolimits4web/Swiper/issues/2346
      this.slider.slides.css("height", "");
    }
  }
  /**
   * Refresh Horizontal slider state.
   * If all slides are fit into visible area, detach all events, slide to first slide instantly and add class,
   * which disables arrows, pagination and duplicated slides of loop mode.
   * If overall slides width becomes greater than container size (i.e. due to screen resize or layout change),
   * enable the carousel again.
   */
  updateHorizontalSlider() {
    if (
      this.slider.enabled &&
      !this.options.loop &&
      this.getSlidesWidth(this.selectors.slides) <=
        this.selectors.carousel.offsetWidth
    ) {
      this.slider.slideTo(0, 0);
      this.disableCarousel();
    } else if (
      !this.slider.enabled &&
      this.getSlidesWidth(this.selectors.slides) >
        this.selectors.carousel.offsetWidth
    ) {
      this.enableCarousel();
    }
    if (this.slider.params.slidesPerView === "auto") {
      // Fix Swiper issue: slidesPerView: 'auto' with breakpoints does not work
      // https://github.com/nolimits4web/Swiper/issues/2346
      this.slider.slides.css("width", "");
    }
  }
  /**
   * Calculate total slides height, including margin between slides.
   * Swiper's logic is taken into account since it adds bottom margin equal to spaceBetween property
   *
   * @param {NodeList} slides List
   * @returns {Number} slidesWidth
   */
  getSlidesHeight(slides) {
    let slidesHeight = 0;
    let visibleSlide = 0;
    slides.forEach((slide) => {
      const positionInfo = slide.getBoundingClientRect();
      if (positionInfo.height !== 0) {
        visibleSlide += 1;
        slidesHeight += positionInfo.height;
      }
    });
    // Add margin if "spaceBetween" defined
    if (slides[0].style.marginBottom) {
      slidesHeight +=
        parseInt(slides[0].style.marginBottom, 10) * (visibleSlide - 1);
    }
    return Math.round(slidesHeight);
  }
  /**
   * Calculate total slides width, including margin between slides.
   * Swiper's logic is taken into account since it adds right margin equal to spaceBetween property
   *
   * @param {NodeList} slides List
   * @returns {Number} slidesWidth
   */
  getSlidesWidth(slides) {
    let slidesWidth = 0;
    let visibleSlide = 0;
    slides.forEach((slide) => {
      const positionInfo = slide.getBoundingClientRect();
      if (positionInfo.width !== 0) {
        visibleSlide += 1;
        slidesWidth += positionInfo.width;
      }
    });
    // Add margin if "spaceBetween" defined
    if (slides[0].style.marginRight) {
      slidesWidth +=
        parseInt(slides[0].style.marginRight, 10) * (visibleSlide - 1);
    }
    return Math.round(slidesWidth);
  }
  /* eslint-disable complexity */
  /**
   * Build Swiper options object based on component configuration (see API)
   * @returns {Object} options
   */
  getCarouselOptions() {
    const options = {
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
      preloadImages: false,
      freeMode: this.options.freeMode,
      freeModeMomentum: false,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      isExpanded: this.options.isExpanded,
      touchStartPreventDefault: this.options.touchStartPreventDefault,
      nested: this.options.nested,
      lazy: this.options.lazy,
      // Classnames
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
        slideChangeTransitionEnd: this.onSlideChangeTransitionEnd.bind(this),
        slideChange: this.onSlideChange.bind(this),
        sliderMove: this.onSliderMove.bind(this),
        paginationRender: this.onPaginationRender.bind(this),
        slideResetTransitionEnd: this.onSlideResetTransitionEnd.bind(this),
      },
      // Accessibility Parameters
      a11y: {
        notificationClass: "c-carousel__notification",
        paginationBulletMessage: `${this.options.bulletMessage} {{index}}`,
        slideLabelMessage: this.options.a11y.slideLabelMessage,
        prevSlideMessage: this.options.a11y.prevSlideMessage,
        nextSlideMessage: this.options.a11y.nextSlideMessage,
      },
    };
    if (this.options.breakpoints) {
      options.breakpoints = this.options.breakpoints;
    }
    if (options.showPagination) {
      // Pagination options
      options.pagination = this.getPaginationOptions();
    }
    if (options.showScrollbar) {
      // Scrollbar options
      options.scrollbar = {
        el: `.${this.options.classNames.scrollbar}`,
        hide: false,
        dragSize: "auto",
        draggable: true,
        lockClass: "m-lock",
        dragClass: "c-carousel__scrollbar-drag",
      };
    }
    if (this.options.mouseWheel) {
      options.mousewheel = {
        forceToAxis: true,
        invert: true,
      };
    }
    if (this.options.autoplay && !this.options.autoplay.delay) {
      // Autoplay options
      options.autoplay = {
        delay: this.options.autoplayDelay,
      };
    }
    // Make sure that nested option is enabled if parentSlide is defined
    if (this.options.nested === undefined && this.selectors.parentSlide) {
      options.nested = true;
    }
    // Navigation options
    options.navigation = {
      nextEl: `.${this.options.classNames.nextArrow}`,
      prevEl: `.${this.options.classNames.prevArrow}`,
      disabledClass: "m-disabled",
      hiddenClass: "h-hidden",
    };
    options.navigation = this.setUniqueArrows(options.navigation);
    // Lazy options
    if (options.lazy) {
      options.lazy = {
        elementClass: this.options.classNames.lazy,
        loadedClass: this.options.classNames.lazyLoaded,
        loadingClass: this.options.classNames.lazyLoading,
        preloaderClass: this.options.classNames.lazyPreloader,
        loadPrevNext: this.options.loadPrevNext,
        loadPrevNextAmount: this.options.loadPrevNextAmount,
      };
    }
    // [ROLLUP]options.modules = [Navigation, Pagination, Scrollbar, Autoplay, Lazy];
    return options;
  }
  /* eslint-enable complexity */
  /**
   * Build Swiper options object based on component configuration (see API)
   * @returns {Object} pagination options
   */
  getPaginationOptions() {
    return {
      el: `.${this.options.classNames.paginationList}`,
      type: "custom",
      // eslint-disable-next-line require-jsdoc
      renderCustom(swiper, current, total) {
        let html = "";
        for (let i = 0; i < total; i++) {
          const isCurrent = current === i + 1;
          if (isCurrent) {
            html += `<li class="c-carousel__pagination-list-item"><button class="${this.bulletClass} ${this.currentClass} ${this.bulletActiveClass} ${this.clickableClass}" aria-current="${isCurrent}" aria-disabled="true" aria-label="${this.bulletMessage} ${i + 1}" data-slideto="${i}"></button></li>`;
          } else {
            html += `<li class="c-carousel__pagination-list-item"><button class="${this.bulletClass} ${this.clickableClass}" aria-label="${this.bulletMessage} ${i + 1}" data-slideto="${i}"></button></li>`;
          }
        }
        return html;
      },
      clickable: true,
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
  /**
   * Add unique index to arrows if they are placed outside of carousel container
   * @param {Object} navigation - Swiper navigation properties
   * @returns {Object} navigation - modified properties block
   */
  setUniqueArrows(navigation) {
    this.element.querySelector(navigation.nextEl).classList.add(`m-${this.id}`);
    this.element.querySelector(navigation.prevEl).classList.add(`m-${this.id}`);
    navigation.nextEl += `.m-${this.id}`;
    navigation.prevEl += `.m-${this.id}`;
    return navigation;
  }
  /**
   * Add (in px) additional slide offset for the carousel container,
   * used to avoid cropping for slides with shadow
   */
  setOffsetSlider() {
    if (this.options.containerOffset) {
      const slidesMargin = `${this.options.containerOffset * -1}px`;
      const slidesPadding = `${this.options.containerOffset}px`;
      this.selectors.carousel.style.marginLeft = slidesMargin;
      this.selectors.carousel.style.marginRight = slidesMargin;
      this.selectors.carousel.style.paddingLeft = slidesPadding;
      this.selectors.carousel.style.paddingRight = slidesPadding;
    }
  }
  /**
   * Carousel initializing event handler
   */
  onCarouselInit() {
    this.element.classList.add(this.classes.ready);
    this.element.classList.remove(this.classes.unready);
    if (this.options.zoomInActiveSlide) {
      this.element.classList.add(this.classes.animated);
    }
    Event.emit("carousel.init", this.element);
  }
  /**
   * Slider Resize event handler
   */
  onSliderResize() {
    if (this.slider) {
      this.updateSlider();
    }
  }
  /**
   * Slide Change Transition End event handler
   */
  onSlideChangeTransitionEnd() {
    this.updateSlidesOnTransition();
  }
  /**
   * Update Slides on Transition
   */
  updateSlidesOnTransition() {
    if (this.slider) {
      // Because of nature of how the loop mode works, the carousel will add duplicated slides.
      // We have to emit registry.registerChildren event to initialize components on duplicated slides.
      if (this.options.loop) {
        const slidesToInit = this.element.querySelectorAll(
          ".c-carousel__item.m-visible:not(.m-initialized)",
        );
        if (slidesToInit) {
          slidesToInit.forEach((slide) => {
            slide.classList.add("m-initialized");
            this.setDuplicateSlideState(slide);
            Event.emit("registry.registerChildren", slide);
          });
        }
        // Update slider in first transition changes to set correct attributes for duplicated slides.
        if (!this.state.isSlideChangeTransitionEnd) {
          setTimeout(this.updateSlider.bind(this), 0);
        }
      }
      if (!this.state.isAutoplayEnabled) {
        this.setSearchAria();
      }
      if (this.state.isSlideChangeTransitionEnd || !this.options.loop) {
        this.updateAccessibility();
      }
      this.state.isSlideChangeTransitionEnd = true;
    }
  }
  /**
   * Trigger slide change event
   */
  onSlideChange() {
    if (!this.slider) {
      return;
    }
    this.playSlideVideo();
    this.handleBackgroundUpdates();
    if (!this.options.loop) {
      // Unfocus navigation arrows in case if disabled. NVDA fix for disabled buttons
      if (this.slider.isBeginning) {
        this.slider.navigation.prevEl.blur();
      } else if (this.slider.isEnd) {
        this.slider.navigation.nextEl.blur();
      }
    }
    // check if slide was changed by swiping
    if (this.options.trackSwipe && this.slider.swipeDirection) {
      this.swipeSlide();
    }
    trigger("carousel.slidechanged", this.element, {
      index: this.slider.realIndex,
      bubbles: true,
    });
  }
  /**
   * Handle background updates for the carousel
   */
  handleBackgroundUpdates() {
    if (this.options.sliderWithBackground) {
      this.updateCarouselBackground();
      this.updateCarouselBackgroundImage();
    }
  }
  /**
   * Carousel Slider Move event handler
   */
  onSliderMove() {
    this.state.isAutoplayEnabled = false;
    this.stopAutoplay();
  }
  /**
   * Update accessibility attributes
   * Add aria-hidden attribute for slides outside of the viewport to hide them from screen readers,
   * add tabindex='-1' on all focusable elements inside invisible slides to block gaining focus (i.e. with Tab key).
   * Remove this attributes if the slide becomes visible.
   * Add aria-current attribute to the active pagination bullet, remove it otherwise
   * Visibility class is handled by Swiper,
   * see 'watchSlidesProgress', 'watchSlidesVisibility' and 'slideVisibleClass' properties in APi documentation
   */
  updateAccessibility() {
    if (this.slider.pagination && this.slider.pagination.bullets) {
      const previousBullet =
        this.slider.pagination.bullets[this.slider.previousIndex];
      const currentBullet =
        this.slider.pagination.bullets[this.slider.activeIndex];
      if (previousBullet) {
        previousBullet.removeAttribute("aria-current");
        previousBullet.removeAttribute("aria-disabled");
      }
      if (currentBullet) {
        currentBullet.setAttribute("aria-current", "true");
        currentBullet.setAttribute("aria-disabled", "true");
      }
    }
    // Do not update slide visibility if there is a parent carousel's hidden slide
    if (
      this.selectors.parentSlide &&
      !this.selectors.parentSlide.classList.contains(this.classes.visible)
    ) {
      return;
    }
    Array.from(this.slider.slides).forEach((slide) => {
      if (
        slide.classList.contains(this.classes.visible) ||
        this.state.expanded
      ) {
        this.showElement(slide, false);
      } else {
        this.hideElement(slide, false);
      }
      slide
        .querySelectorAll('[data-component="global/Carousel"]')
        .forEach((nestedCarousel) => {
          Registry.afterRegistered(nestedCarousel).then(() => {
            trigger("carousel.update", nestedCarousel);
          });
        });
    });
  }
  /**
   * Update slides with lazy loading
   * Add preloader to the slide if it has lazy image
   */
  updateLazyLoad() {
    Array.from(this.slider.slides).forEach((slide, index) => {
      const lazyImage = slide.querySelector(`.${this.options.classNames.lazy}`);
      const loader = document.createElement("div");
      loader.className = `c-loader ${this.options.classNames.lazyPreloader}`;
      // Return if the slide have no lazy image
      // or if the image is already loaded
      if (
        (this.options.forceLoadFirstImage && index === 0) ||
        !lazyImage ||
        lazyImage.classList.contains(this.options.classNames.lazyLoaded)
      ) {
        return;
      }
      slide.appendChild(loader);
    });
  }
  /**
   * Sets duplicate slide data to first child
   * It is used in analytics
   * @param {HTMLElement} slide element
   */
  setDuplicateSlideState(slide) {
    if (slide.firstElementChild) {
      slide.firstElementChild.setAttribute("data-is-duplicate", true);
    }
  }
  /**
   * Sets data-index attribute to first childs of carousel slides
   * It is used in analytics
   */
  setSlidesIndex() {
    Array.from(this.slider.slides).forEach((slide, index, array) => {
      if (slide.firstElementChild) {
        slide.firstElementChild.setAttribute(
          "data-index",
          slide.getAttribute("data-swiper-slide-index") || index,
        );
      }
      if (!slide.hasAttribute("aria-label")) {
        const ariaLabel = this.options.a11y.carouselItemAriaLabel
          .replace("{0}", index + 1)
          .replace("{1}", array.length);
        slide.setAttribute("aria-label", ariaLabel);
      }
      if (!slide.hasAttribute("data-index")) {
        slide.setAttribute("data-index", index);
      }
    });
  }
  /**
   * ScrollTo event handler
   *
   * @param {Object} event Event object
   */
  onScrollTo(event) {
    const { index } = event.detail;
    this.goTo(index, event.detail.speed);
  }
  /**
   * If breakpoint is changed (i.e. Tablet rotation or browser resize) Re-init Swiper carousel with new options
   */
  onMediaQueryChange() {
    if (this.slider) {
      this.unbindSliderEvents();
      this.slider.destroy(false, true);
      this.initState();
      this.afterInit();
    }
  }
  /**
   * Get current slide
   *
   * @returns {Number} Active index of the current slide
   */
  getCurrentSlide() {
    const currentSlide = this.slider.slides[this.slider.activeIndex];
    return {
      index: this.slider.activeIndex,
      slide: currentSlide,
      isVideo: currentSlide ? currentSlide.hasAttribute("data-video") : false,
    };
  }
  /**
   * Gets analytics data of carousel item
   *
   * @param {HTMLElement} carouselItem element
   * @returns {Object} analytics data
   */
  getAnalyticsData(carouselItem) {
    let data;
    if (!carouselItem) {
      return data;
    }
    const analytics = carouselItem.getAttribute("data-analytics");
    if (analytics) {
      try {
        data = JSON.parse(analytics);
      } catch (e) {
        if (window.lora.debug) {
          console.error(
            `Please check that the data-analytics you have passed for "${carouselItem}" respect JSON format`,
          );
        }
      }
    }
    return data;
  }
  /**
   * Disable Carousel - detach all events and hidden navigation elements
   */
  disableCarousel() {
    this.slider.detachEvents();
    this.slider.enabled = false;
    // Update classes
    this.element.classList.add(this.classes.disabled);
    this.element.removeAttribute("aria-roledescription");
    this.slider.wrapperEl.classList.add(this.classes.disabled);
    Array.from(this.slider.slides).forEach((slide) => {
      slide.removeAttribute("aria-roledescription");
      slide.removeAttribute("role");
    });
    if (this.options.showPagination) {
      this.hideElement(this.slider.pagination.el, true);
    }
    if (this.options.showScrollbar) {
      this.hideElement(this.slider.scrollbar.el, true);
    }
  }
  /**
   * Enable Carousel - attach all events and show navigation elements
   */
  enableCarousel() {
    this.slider.attachEvents();
    this.slider.enabled = true;
    // Update classes
    this.element.classList.remove(this.classes.disabled);
    this.element.setAttribute("aria-roledescription", "carousel");
    this.slider.wrapperEl.classList.remove(this.classes.disabled);
    Array.from(this.slider.slides).forEach((slide) => {
      slide.setAttribute("aria-roledescription", "slide");
      slide.setAttribute("role", "group");
    });
    if (this.options.showPagination) {
      this.showElement(this.slider.pagination.el, true);
    }
    if (this.options.showScrollbar) {
      this.showElement(this.slider.scrollbar.el, true);
    }
  }
  /** Actions * */
  /**
   * Start Autoplay
   */
  startAutoplay() {
    if (this.selectors.carouselAutoplay) {
      this.selectors.carouselAutoplay.classList.remove("m-active");
      this.selectors.carouselAutoplay.setAttribute(
        "aria-label",
        this.options.a11y.autoplayAriaLabelStop,
      );
    }
    this.slider.autoplay.start();
  }
  /**
   * Stop Autoplay
   */
  stopAutoplay() {
    if (this.selectors.carouselAutoplay) {
      this.selectors.carouselAutoplay.classList.add("m-active");
      this.selectors.carouselAutoplay.setAttribute(
        "aria-label",
        this.options.a11y.autoplayAriaLabelPlay,
      );
    }
    this.slider.autoplay.stop();
  }
  /**
   * Next Slide
   */
  next() {
    this.slider.slideNext();
  }
  /**
   * Previous Slide
   */
  previous() {
    this.slider.slidePrev();
  }
  /**
   * Reset to first slide
   */
  reset() {
    if (this.options.loop) {
      this.slider.slideToLoop(0);
    } else {
      this.slider.slideTo(0);
    }
  }
  /**
   * Go to needed slide
   *
   * @param {Number} index of needed slide
   * @param {Number} speed of slide animation
   */
  goTo(index, speed) {
    if (typeof index === "number" && !this.state.expanded) {
      if (this.options.loop) {
        this.slider.slideToLoop(index, speed);
      } else {
        this.slider.slideTo(index, speed);
      }
    }
  }
  /**
   * Pause not active slide or start playing active one
   */
  playSlideVideo() {
    if (!this.state.hasVideos) {
      return;
    }
    // stop previous video slide, if any
    if (this.state.currentVideo) {
      trigger("video.player.pause", this.state.currentVideo);
    }
    // play current video slide
    const currentSlide = this.getCurrentSlide();
    this.state.currentVideo =
      currentSlide.slide &&
      currentSlide.slide.querySelector("[data-js-video-container]");
    if (currentSlide.isVideo) {
      trigger("video.player.play", this.state.currentVideo, { time: 0 });
    }
  }
  /**
   * Hide element.
   * @param {HTMLElement} element - HTML element
   * @param {boolean} useHiddenClass - use a hidden class to hide the element visually,
   *                       if false, only aria attribute will be used (e.g. to hide the carousel slide outside of the viewport)
   */
  hideElement(element, useHiddenClass) {
    if (element && element instanceof HTMLElement) {
      if (useHiddenClass) {
        element.classList.add(this.classes.hidden);
      } else {
        element.setAttribute("aria-hidden", "true");
      }
      element.dataset.jsCarouselItemVisible = false;
      const focusableElements = super.getFocusableElements(element, true, true);
      focusableElements.forEach((item) => {
        if (
          item.hasAttribute("tabindex") &&
          item.getAttribute("tabindex") !== "-1"
        ) {
          item.setAttribute(
            "data-js-original-tabindex",
            item.getAttribute("tabindex"),
          );
        }
        item.setAttribute("tabindex", "-1");
      });
    }
  }
  /**
   * Show element.
   * @param {HTMLElement} element - HTML element
   * @param {boolean} useHiddenClass - use a hidden class to show the element hidden visually via class,
   *                       if false, only aria attribute will be used (e.g. to show the carousel slide coming into the viewport)
   */
  showElement(element, useHiddenClass) {
    if (element && element instanceof HTMLElement) {
      if (useHiddenClass) {
        element.classList.remove(this.classes.hidden);
      } else {
        element.removeAttribute("aria-hidden");
      }
      element.dataset.jsCarouselItemVisible = true;
      const focusableElements = super.getFocusableElements(element, true, true);
      focusableElements.forEach((item) => {
        // Do not show element if it's located within a hidden slide
        const slide = item.closest("[data-js-carousel-item]");
        if (slide && !slide.classList.contains(this.classes.visible)) {
          return;
        }
        if (
          item.getAttribute("tabindex") === "-1" &&
          !item.getAttribute("disabled")
        ) {
          if (item.hasAttribute("data-js-original-tabindex")) {
            item.setAttribute(
              "tabindex",
              item.getAttribute("data-js-original-tabindex"),
            );
          } else {
            item.removeAttribute("tabindex");
          }
        }
      });
    }
  }
  /**
   * Unbind custom select event
   */
  unbindSliderEvents() {
    if (this.slider.params.showArrows) {
      if (this.slider.navigation.nextEl) {
        off(
          "click",
          this.slider.navigation.nextEl,
          this.onNextArrowClick.bind(this),
        );
        off("mousemove pointermove touchmove", this.slider.navigation.nextEl);
      }
      if (this.slider.navigation.prevEl) {
        off(
          "click",
          this.slider.navigation.prevEl,
          this.onPrevArrowClick.bind(this),
        );
        off("mousemove pointermove touchmove", this.slider.navigation.prevEl);
      }
    }
    if (this.slider.params.showPagination && this.slider.pagination.el) {
      off("click", this.slider.pagination.el);
      off("mousemove pointermove touchmove", this.slider.pagination.el);
    }
    if (this.options.autoplay && this.selectors.carouselAutoplay) {
      off("click", this.selectors.carouselAutoplay);
    }
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    if (this.slider) {
      this.unbindSliderEvents();
      this.slider.destroy();
      this.slider = null;
    }
    if (this.options.isDynamicContent) {
      this.state.mutationObserver.disconnect();
    }
    off(this.element);
  }
}
