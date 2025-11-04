import Component from "core/Component";
import { on, off } from "toolbox/event";
import { deepMerge } from "toolbox/deepMerge";
import { mix } from "core/mixwith";
import AccessibilityMixin from "mixins/Accessibility";
/**
 * This is a description of the Scrollable constructor function.
 * @class
 * @classdesc This is a description of the Scrollable class.
 * @extends Component
 */
export default class Scrollable extends mix(Component).with(
  AccessibilityMixin,
) {
  /**
   * Constructor of the class that mainly merge the options of the components
   * @param {HTMLElement} element HTMLElement of the component
   * @param {Object} options options that belongs to the component
   */
  constructor(element, options = {}) {
    super(
      element,
      deepMerge(
        {
          // used in arrow context only, move distance on arrow in pixels. 'auto' by default take the container offsetWidth
          scrollStep: "auto",
          showArrows: true, // Simple gesture controls are required for accessibility
          initialScrollPosition: "start",
          _resizable: true,
          enableMouseDrag: true,
          arrowsTop: null, // Arrows top position relative to container (in px). If not set, arrows are centered vertically
          classNames: {
            arrows: [],
          },
          text: {
            arrowPrev: "Show previous items",
            arrowNext: "Show next items",
          },
          initScrollElement: null, // element selector to which should be scrolled
        },
        options,
      ),
    );
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    this.appendArrows();
    this.classNames = {
      scrollStart: "m-scrollable-prev",
      scrollEnd: "m-scrollable-next",
      disabled: "m-disabled",
      hidden: "h-hidden",
      dragActive: "m-drag-active",
    };
    this.selectors.itemsContainer = this.element.querySelector(
      "[data-js-scrollable-items]",
    );
    this.selectors.arrowContainer = this.element.querySelector(
      "[data-js-scrollable-arrows]",
    );
    this.selectors.arrowPrev = this.element.querySelector(
      "[data-js-scrollable-prev]",
    );
    this.selectors.arrowNext = this.element.querySelector(
      "[data-js-scrollable-next]",
    );
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.scrollStart = false;
    this.state.scrollEnd = false;
    this.initScrollPosition();
    this.setArrowsPosition();
    if (this.options.enableMouseDrag) {
      this.state.isMouseDragActive = false;
    }
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    on(
      "scroll",
      this.selectors.itemsContainer,
      this.updateScrollState.bind(this),
      {
        passive: true,
      },
    );
    if (this.options.showArrows) {
      on("click", this.selectors.arrowPrev, this.onClickPrev.bind(this));
      on("click", this.selectors.arrowNext, this.onClickNext.bind(this));
    }
    on(
      "scrollable.scrollToElement",
      this.element,
      this.onScrollToElement.bind(this),
    );
    on("scrollable.update", this.element, this.setScrollState.bind(this));
    if (this.options.enableMouseDrag) {
      on(
        "mousedown",
        this.selectors.itemsContainer,
        this.startMouseDrag.bind(this),
      );
      on(
        "mouseup mouseleave",
        this.selectors.itemsContainer,
        this.stopMouseDrag.bind(this),
      );
      on(
        "mousemove",
        this.selectors.itemsContainer,
        this.onMouseMove.bind(this),
      );
    }
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    this.setScrollState();
  }
  /**
   * Click Prev arrow
   */
  onClickPrev() {
    const scrollStep =
      this.options.scrollStep === "auto"
        ? this.itemsContainerWidth
        : this.options.scrollStep;
    this.scrollTo(this.selectors.itemsContainer.scrollLeft - scrollStep);
  }
  /**
   * Click Next arrow
   */
  onClickNext() {
    const scrollStep =
      this.options.scrollStep === "auto"
        ? this.itemsContainerWidth
        : this.options.scrollStep;
    this.scrollTo(this.selectors.itemsContainer.scrollLeft + scrollStep);
  }
  /**
   * Scroll to the scroll element with an optional offset
   * @param {object} data - data object
   * @param {HTMLElement} data.element - HTML element
   * @param {number} data.offset - Offset from the left in px
   */
  onScrollToElement(data) {
    const { element, offset = 0 } = data.detail;
    this.scrollTo(element.offsetLeft - offset);
  }
  /**
   * update the scroll state and the arrows visibility
   */
  setScrollState() {
    this.itemsContainerWidth = this.selectors.itemsContainer.offsetWidth;
    this.itemsContainerScrollWidth = this.selectors.itemsContainer.scrollWidth;
    this.updateArrowsVisibility();
    this.updateScrollState();
  }
  /**
   * Set scroll state method defines component's state
   */
  updateScrollState() {
    if (this.isStart()) {
      this.selectors.itemsContainer.classList.remove(
        this.classNames.scrollStart,
      );
      if (this.selectors.arrowPrev) {
        this.selectors.arrowPrev.classList.add(this.classNames.disabled);
        this.selectors.arrowPrev.disabled = true;
      }
      this.state.scrollStart = false;
    } else {
      this.selectors.itemsContainer.classList.add(this.classNames.scrollStart);
      if (this.selectors.arrowPrev) {
        this.selectors.arrowPrev.classList.remove(this.classNames.disabled);
        this.selectors.arrowPrev.disabled = false;
      }
      this.state.scrollStart = true;
    }
    if (this.isEnd()) {
      this.selectors.itemsContainer.classList.remove(this.classNames.scrollEnd);
      if (this.selectors.arrowNext) {
        this.selectors.arrowNext.classList.add(this.classNames.disabled);
        this.selectors.arrowNext.disabled = true;
      }
      this.state.scrollEnd = false;
    } else {
      this.selectors.itemsContainer.classList.add(this.classNames.scrollEnd);
      if (this.selectors.arrowNext) {
        this.selectors.arrowNext.classList.remove(this.classNames.disabled);
        this.selectors.arrowNext.disabled = false;
      }
      this.state.scrollEnd = true;
    }
  }
  /**
   * Is scroll at start position
   * @returns {boolean} is start?
   */
  isStart() {
    return this.selectors.itemsContainer.scrollLeft === 0;
  }
  /**
   * Is scroll at the end
   * @returns {boolean} is end?
   */
  isEnd() {
    return (
      Math.ceil(this.selectors.itemsContainer.scrollLeft) +
        this.itemsContainerWidth >=
      this.itemsContainerScrollWidth
    );
  }
  /**
   * Checks Scrollable options and defines initial scroll position: start (by default) or end
   */
  initScrollPosition() {
    const lastScrollPosition = this.getLastScrollPosition();
    const initScrollElement =
      this.options.initScrollElement &&
      this.element.querySelector(this.options.initScrollElement);
    let position = null;
    if (initScrollElement) {
      position = initScrollElement.offsetLeft;
    } else {
      position = lastScrollPosition || this.options.initScrollPosition;
    }
    this.scrollTo(position, lastScrollPosition);
  }
  /**
   * Checks Scrollable options and defines initial scroll position: start (by default) or end
   */
  saveScrollPosition() {
    this.saveLastScrollPosition(this.selectors.itemsContainer.scrollLeft);
  }
  /**
   * Scroll to the scroll position
   * @param {String|Integer} position start | end | position
   * @param {Boolean} isInstant if true, scroll will be istant
   */
  scrollTo(position, isInstant) {
    let scrollTo;
    // In case of start, scroll to 0
    if (position === "start") {
      scrollTo = 0;
    } else if (position === "end") {
      // In case of end, scroll to the end of the container
      scrollTo = this.selectors.itemsContainer.scrollWidth;
    } else if (typeof position === "number") {
      scrollTo = this.getScrollPosition(position);
    }
    if (scrollTo || scrollTo === 0) {
      this.selectors.itemsContainer.scroll({
        top: 0,
        left: scrollTo,
        behavior: isInstant ? "auto" : "smooth",
      });
    }
  }
  /**
   * Get the scroll position
   * @param {number} position - position of the scroll
   * @returns {number} position
   */
  getScrollPosition(position) {
    let scrollTo;
    if (position < 0) {
      scrollTo = 0;
    } else if (position > this.selectors.itemsContainer.scrollWidth) {
      scrollTo = this.selectors.itemsContainer.scrollWidth;
    } else {
      scrollTo = position;
    }
    return scrollTo;
  }
  /**
   * Include Arrow Navigation elements and update selectors
   */
  appendArrows() {
    if (this.options.showArrows && !this.selectors.arrowContainer) {
      this.element.appendChild(this.getArrowsTemplate());
    }
  }
  /**
   * Hide/show arrows based on the container and content
   */
  updateArrowsVisibility() {
    if (!this.selectors.arrowContainer) {
      return;
    }
    if (
      this.options.showArrows &&
      this.itemsContainerScrollWidth > this.itemsContainerWidth
    ) {
      this.selectors.arrowContainer.classList.remove(this.classNames.hidden);
    } else {
      this.selectors.arrowContainer.classList.add(this.classNames.hidden);
    }
  }
  /**
   * create Arrows HTMLElement
   *
   * @returns { HTMLElement } - Arrows element
   */
  getArrowsTemplate() {
    const { arrowPrev, arrowNext } = this.options.text;
    const arrowsElement = document.createElement("div");
    arrowsElement.classList.add("c-scrollable__arrows");
    [...this.options.classNames.arrows].forEach((className) => {
      arrowsElement.classList.add(className);
    });
    arrowsElement.setAttribute("data-js-scrollable-arrows", true);
    arrowsElement.innerHTML = `<button type="button" aria-label="${arrowPrev}" class="c-scrollable__arrow-prev" data-js-scrollable-prev></button>
        <button type="button" class="c-scrollable__arrow-next" aria-label="${arrowNext}" data-js-scrollable-next></button>`;
    return arrowsElement;
  }
  /**
   * set Arrows position
   *
   */
  setArrowsPosition() {
    if (!this.options.showArrows) {
      return;
    }
    if (this.options.arrowsTop) {
      this.selectors.arrowNext.style.top = `${this.options.arrowsTop}px`;
      this.selectors.arrowPrev.style.top = `${this.options.arrowsTop}px`;
    } else if (this.selectors.arrowNext.style.top) {
      this.selectors.arrowNext.style.removeProperty("top");
      this.selectors.arrowPrev.style.removeProperty("top");
    }
  }
  /**
   * If breakpoint is changed (i.e. Tablet rotation or browser resize) Re-init scrollable with new options
   */
  onMediaQueryChange() {
    this.setScrollState();
    this.setArrowsPosition();
    this.updateArrowsVisibility();
  }
  /**
   * Handlers to onResize event
   */
  onResize() {
    this.setScrollState();
  }
  /**
   * Start Click & Drag mode for mouse
   * @param {Object} e event object
   */
  startMouseDrag(e) {
    this.state.isMouseDragActive = true;
    this.selectors.itemsContainer.classList.add(this.classNames.dragActive);
    this.state.mouseDragStartX =
      e.pageX - this.selectors.itemsContainer.offsetLeft;
    this.state.containerScrollLeft = this.selectors.itemsContainer.scrollLeft;
  }
  /**
   * Stop Click & Drag mode
   */
  stopMouseDrag() {
    this.state.isMouseDragActive = false;
    this.selectors.itemsContainer.classList.remove(this.classNames.dragActive);
  }
  /**
   * Mouse Move event handler for Click & Drag mode
   * @param {Object} e event object
   */
  onMouseMove(e) {
    if (!this.state.isMouseDragActive) {
      return;
    }
    e.preventDefault();
    const x = e.pageX - this.selectors.itemsContainer.offsetLeft;
    const scroll = x - this.state.mouseDragStartX;
    this.selectors.itemsContainer.scrollLeft =
      this.state.containerScrollLeft - scroll;
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    off(this.selectors.itemsContainer);
    off("scrollable.scrollToElement", this.element);
    off("scrollable.update", this.element);
    if (this.selectors.arrowPrev && this.selectors.arrowNext) {
      off("click", this.selectors.arrowPrev);
      off("click", this.selectors.arrowNext);
    }
  }
}
