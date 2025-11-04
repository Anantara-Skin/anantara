import PromotionTile from "components/global/PromotionTile";
import { deepMerge } from "toolbox/deepMerge";
/**
 * This is a description of the Hero constructor function.
 * @class
 * @classdesc Represents Hero component with different media (images, video) and content text
 * @extends Component
 */
export default class Hero extends PromotionTile {
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
          overlapOnScroll: false,
          _resizable: true,
        },
        options,
      ),
    );
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    super.initCache();
    this.classes = {
      stick: "m-sticky-image",
    };
    if (this.options.overlapOnScroll) {
      this.selectors.heroOverlay = this.element.querySelector(
        "[data-js-hero-placeholder]",
      );
      this.selectors.heroMedia = this.element.querySelector(
        "[data-js-hero-media]",
      );
      this.selectors.videoControl = this.element.querySelector(
        "[data-js-video-control]",
      );
      this.selectors.heroCaption = this.element.querySelector(
        "[data-js-hero-caption]",
      );
    }
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    super.afterInit();
    if (this.options.overlapOnScroll) {
      this.updateObserverThreshold();
      if (this.selectors.videoControl && this.selectors.heroCaption) {
        this.moveVideoControl();
      }
    }
  }
  /**
   * Update popper position when window is resized
   */
  onResize() {
    if (this.options.overlapOnScroll) {
      this.updateObserverThreshold();
    }
  }
  /**
   * Update Observer Threshold value
   */
  updateObserverThreshold() {
    if (this.observer) {
      this.observer.unobserve(this.element);
      this.observer.disconnect();
    }
    const heroHeight = this.element.getBoundingClientRect().height;
    let th = 1;
    // When the component height is close to or bigger than the screen height,
    // observer, due to its async nature, requires more points to catch the intersection
    // during the fast scrolling and work smooth during the slow scrolling
    if (heroHeight / window.innerHeight > 0.7) {
      const heightRatio = window.innerHeight / heroHeight;
      const threshold =
        heightRatio > 1 ? 1 : Math.floor(heightRatio * 100) / 100;
      th = [threshold - 0.1, threshold - 0.05, threshold - 0.01, threshold];
    }
    this.observer = new window.IntersectionObserver(
      this.onIntersection.bind(this),
      {
        threshold: th,
      },
    );
    this.observer.observe(this.element);
  }
  /**
   * Intersection event handler
   * @param {Object} entries - Entries object
   */
  onIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.boundingClientRect.top >= 0) {
        this.unstick();
      } else {
        this.stick();
      }
    });
  }
  /**
   * Move the tile media to the sticky state
   */
  stick() {
    if (this.state.isSticky) {
      return;
    }
    const elementWidth = this.selectors.heroMedia.offsetWidth;
    const elementHeight = this.selectors.heroMedia.offsetHeight;
    this.selectors.heroMedia.style.width = `${elementWidth}px`;
    this.element.classList.add(this.classes.stick);
    this.selectors.heroOverlay.style.width = `${elementWidth}px`;
    this.selectors.heroOverlay.style.height = `${elementHeight}px`;
    this.state.isSticky = true;
  }
  /**
   * Move the tile media to the static state
   */
  unstick() {
    if (!this.state.isSticky) {
      return;
    }
    this.selectors.heroOverlay.style.width = null;
    this.selectors.heroOverlay.style.height = null;
    this.element.classList.remove(this.classes.stick);
    this.selectors.heroMedia.style.width = null;
    this.state.isSticky = false;
  }
  /**
   * Change the video control placement if overlapOnScroll enabled since it should be always visible for a user
   */
  moveVideoControl() {
    this.element.insertBefore(
      this.selectors.videoControl,
      this.selectors.heroCaption,
    );
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    super.destroy();
    if (this.options.overlapOnScroll) {
      this.unstick();
      this.observer.unobserve(this.element);
      this.observer.disconnect();
    }
  }
}
