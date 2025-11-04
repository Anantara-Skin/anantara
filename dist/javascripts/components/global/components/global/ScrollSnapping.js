import Component from "core/Component";
import { deepMerge } from "toolbox/deepMerge";
import { scrollTo, waitForScrollEnd } from "toolbox/scroll";
import { mediaQuery } from "toolbox/mediaQuery";
import { Event } from "services/EventEmitter";
import { once } from "toolbox/event";
import { isChrome } from "core/shims/support";
/**
 * This is a description of the ScrollSnapping constructor function.
 *
 * @class
 * @classdesc Implements the scroll snapping logic - "locks" the viewport to certain elements
 * after a user has finished scrolling (scrolls the page to align the top of a section with the viewport).
 * Can be enabled per section only for mobile or for all breakpoints.
 * Takes into account sticky header and sticky PDP bar to calculate the offset and align the section properly.
 * @extends Component
 */
export default class ScrollSnapping extends Component {
  /**
   * @property {number} topThreshold - visible height in px of the item to trigger the scroll snap
   * @property {number} bottomThreshold - visible height in px of the previous item to trigger the scroll snap
   */
  /**
   * Constructor of the class that mainly merge the options of the components
   * @param {HTMLElement} element HTMLElement of the component
   * @param {object} options options that belongs to the component
   */
  constructor(element, options = {}) {
    super(
      element,
      deepMerge(
        {
          topThreshold: 0,
          bottomThreshold: 0,
          _scrollable: true,
        },
        options,
      ),
    );
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    this.selectors.sectionsMobile = document.querySelectorAll(
      '[data-js-scroll-snap-section="mobile"], [data-js-scroll-snap-section="all"]',
    );
    this.selectors.sectionsAll = document.querySelectorAll(
      '[data-js-scroll-snap-section="all"]',
    );
    this.sectionsUpdate();
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    if (this.selectors.sections.length > 0) {
      this.state.currentSectionIndex = -1;
      this.state.scrollTopOffset = 0;
      this.state.headerHeight = 0;
      this.state.stickyPanelHeight = 0;
      this.state.lastScrollTop = document.documentElement.scrollTop;
      this.state.isScrollSnapping = false;
      this.state.isScrollEnded = true;
      this.state.isChrome = isChrome();
    }
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    if (this.selectors.sections.length > 0) {
      this.updateStickyPanelHeight();
      this.setStartSection();
    }
  }
  /**
   * onMediaQueryChange event handler
   */
  onMediaQueryChange() {
    this.destroy();
    this.sectionsUpdate();
    this.updateStickyPanelHeight();
    this.setStartSection();
    this.bindEvents();
  }
  /**
   * Update sections based on the media query
   */
  sectionsUpdate() {
    if (this.selectors.sectionsMobile.length && mediaQuery.is("medium down")) {
      this.selectors.sections = this.selectors.sectionsMobile;
    } else {
      this.selectors.sections = this.selectors.sectionsAll;
    }
    if (this.selectors.sections.length > 0) {
      this.selectors.sectionsArr = Array.from(this.selectors.sections);
      this.selectors.productStickyBar = document.querySelector(
        "[data-js-product-sticky-bar-bar]",
      );
    }
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    if (this.selectors.sections.length > 0) {
      Event.on("header.updateHeight", this.onHeaderUpdate, this);
    }
  }
  /**
   * On header update callback
   *
   * @param {Object} event of the header
   */
  onHeaderUpdate(event) {
    this.updateHeaderHeight(event);
  }
  /**
   * Update top offset based on the sticky header state
   *
   * @param {Object} event of the header
   */
  updateHeaderHeight(event) {
    this.state.headerHeight =
      event.height !== undefined ? event.height : this.state.headerHeight;
    this.state.scrollTopOffset =
      this.state.headerHeight + this.state.stickyPanelHeight;
  }
  /**
   * Update top offset based on the PDP sticky panel state
   */
  updateStickyPanelHeight() {
    if (this.selectors.productStickyBar) {
      if (this.selectors.productStickyBar.classList.contains("m-sticked")) {
        this.state.stickyPanelHeight =
          this.selectors.productStickyBar.offsetHeight;
      } else if (mediaQuery.is("large")) {
        this.selectors.productStickyBar.classList.add("m-sticked");
        this.state.stickyPanelHeight =
          this.selectors.productStickyBar.offsetHeight;
        this.selectors.productStickyBar.classList.remove("m-sticked");
      }
    } else {
      this.state.stickyPanelHeight = 0;
    }
    this.state.scrollTopOffset =
      this.state.headerHeight + this.state.stickyPanelHeight;
  }
  /**
   * get visible pixels of the element
   * @param {HTMLElement} element - HTMLElement of the component
   * @param {String} scrollDirection - scroll direction
   * @returns {Number} visible number of pixels in a viewport
   */
  getVisiblePixels(element, scrollDirection) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    if (scrollDirection === "down") {
      const rectTop = rect.top;
      if (rectTop >= 0 && rectTop < windowHeight) {
        // Top part of the element is visible, return number of pixels visible to a user
        return windowHeight - rectTop;
      }
    } else {
      const rectBottom = rect.bottom;
      if (
        rectBottom >= this.state.scrollTopOffset &&
        rectBottom < windowHeight
      ) {
        // Bottom part of the element is visible, return number of pixels visible to a user
        return rectBottom - this.state.scrollTopOffset;
      }
    }
    // Element is not visible
    return 0;
  }
  /**
   * Set start section if the user opened the page in the middle of a scroll
   * or scrolled the page before it is fully loaded
   */
  setStartSection() {
    const nextSectionIndex = this.selectors.sectionsArr.findIndex(
      (section) =>
        this.getVisiblePixels(section, "down") > this.options.topThreshold,
    );
    if (nextSectionIndex !== -1) {
      this.snapToSection(this.selectors.sectionsArr[nextSectionIndex]);
      this.state.currentSectionIndex = nextSectionIndex;
    }
  }
  /**
   * Scroll to the next section
   */
  scrollToNextSection() {
    // Find the next section index
    // check if index is greater to currentSectionIndex to avoid useless calculations
    // if yes check if visible pixels exceed the threshold
    const nextSectionIndex = this.selectors.sectionsArr.findIndex(
      (section, index) =>
        index > this.state.currentSectionIndex &&
        this.getVisiblePixels(section, "down") > this.options.topThreshold,
    );
    if (nextSectionIndex !== -1) {
      // If nextSectionIndex is found snap to section and update currentSectionIndex
      this.snapToSection(this.selectors.sectionsArr[nextSectionIndex]);
      this.state.currentSectionIndex = nextSectionIndex;
    }
  }
  /**
   * Scroll to the previous section
   */
  scrollToPrevSection() {
    if (this.state.currentSectionIndex <= 0) {
      // If user scrolls up above the first snappable section set the current index to -1
      // to trigger the scroll snap to the first section later when he scrolls down
      this.state.currentSectionIndex = -1;
      return;
    }
    // Find the previous section index
    // check if index is less than currentSectionIndex to avoid useless calculations
    // if yes check if visible pixels exceed the threshold
    const prevSectionIndex = this.selectors.sectionsArr.findLastIndex(
      (section, index) =>
        index < this.state.currentSectionIndex &&
        this.getVisiblePixels(section, "up") > this.options.bottomThreshold,
    );
    if (prevSectionIndex !== -1) {
      // If prevSectionIndex is found snap to section and update currentSectionIndex
      this.snapToSection(this.selectors.sectionsArr[prevSectionIndex]);
      this.state.currentSectionIndex = prevSectionIndex;
    }
  }
  /**
   * Snap to section action
   * @param {HTMLElement} section element you want to scroll to
   */
  snapToSection(section) {
    if (this.state.isScrollSnapping) {
      // Do nothing if the previous scroll snapping action is not finished
      return;
    }
    this.state.isScrollSnapping = true;
    scrollTo(section, this.state.scrollTopOffset);
    // Freeze scroll snapping actions for the moment of animation to avoid trigering snapping of the next section
    // as a result of scroll snapping itself. The scroll snapping should be triggered by user's scroll only
    if ("onscrollend" in document) {
      once("scrollend", window, () => {
        this.state.isScrollSnapping = false;
      });
    } else {
      // Fallback function for browsers not supporting 'scrollend' event natively (e.g. Safari)
      waitForScrollEnd().then(() => {
        this.state.isScrollSnapping = false;
      });
    }
  }
  /**
   * Window Scroll event callback
   */
  onScroll() {
    if (!this.selectors.sections.length > 0 || !this.state.isScrollEnded) {
      return;
    }
    if (this.state.isScrollSnapping) {
      this.state.lastScrollTop = document.documentElement.scrollTop;
      return;
    }
    if (this.state.isChrome) {
      // Delay the scroll snap calculation until the scroll ends
      // due to the buggy behavior of the built-in Chrome smooth scroll
      if ("onscrollend" in document) {
        once("scrollend", window, this.handleScroll.bind(this));
      } else {
        // Fallback function for browsers/OS not supporting 'scrollend' event natively (e.g. Chrome in iOS)
        waitForScrollEnd().then(() => {
          this.handleScroll();
        });
      }
      this.state.isScrollEnded = false;
      this.state.lastScrollTop = document.documentElement.scrollTop;
    } else {
      this.handleScroll();
    }
  }
  /**
   * Scroll event callback
   *
   */
  handleScroll() {
    this.state.isScrollEnded = true;
    // Determine scroll direction
    const scrollDown =
      document.documentElement.scrollTop > this.state.lastScrollTop;
    if (scrollDown) {
      this.scrollToNextSection();
    } else {
      this.scrollToPrevSection();
    }
    this.state.lastScrollTop = document.documentElement.scrollTop;
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    if (this.selectors.sections.length > 0) {
      Event.removeListener("header.updateHeight", this.onEvent, this);
    }
  }
}
