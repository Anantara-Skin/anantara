import Component from "core/Component";
import { Event } from "services/EventEmitter";
import { deepMerge } from "toolbox/deepMerge";
/**
 * This is a description of the MiniCartIcon constructor function.
 * @class
 * @classdesc This is a description of the MiniCartIcon class.
 * @extends ToolTip
 */
export default class MiniCartIcon extends Component {
  /**
   * Constructor of the class that mainly merge the options of the components
   *
   * @param {HTMLElement} element HTMLElement of the component
   * @param {Object} options That belongs to the component
   */
  constructor(element, options = {}) {
    super(
      element,
      deepMerge(
        {
          reloadData: {
            section: "header",
            id: "minicarticon",
            skipLazyload: true,
          },
          enableAnimation: false,
          animationDuration: 1000,
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
    this.classNames = {
      animation: "m-animated",
    };
    this.animationTimeout = null;
    this.selectors.button = this.element.querySelector(
      "[data-js-minicart-button]",
    );
    this.selectors.minicart = this.element.closest(
      '[data-component="cart/MiniCart"]',
    );
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonymous function
   */
  bindEvents() {
    Event.on("cart.product.added", this.updateIcon, this);
    Event.on("cart.updated", this.updateIcon, this);
    Event.on("carticon.update", this.updateIcon, this);
    Event.on("lineitem.updated", this.updateIcon, this);
    Event.on(
      "addtobag.confirmation.closed",
      this.onAddToBagConfirmationClosed,
      this,
    );
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    this.updateButtonParams();
  }
  /**
   * Cart icon update event handler
   */
  updateIcon() {
    this.reload();
  }
  /**
   * Add to Cart confirmation closed event handler
   */
  onAddToBagConfirmationClosed() {
    if (this.options.enableAnimation) {
      this.animate();
    }
  }
  /**
   * Remove animation class
   *
   * @param {HTMLElement} element - HTML element
   * @param {Object} classNames - classNames object
   */
  removeAnimationClass(element, classNames) {
    element.classList.remove(classNames.animation);
  }
  /**
   * Animates icon
   */
  animate() {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }
    this.element.classList.add(this.classNames.animation);
    // eslint-disable-next-line max-len
    this.animationTimeout = setTimeout(
      this.removeAnimationClass.bind(this, this.element, this.classNames),
      this.options.animationDuration,
    );
  }
  /**
   * Update button attributes based on the click action (redirect to cart or minicart open)
   */
  updateButtonParams() {
    if (
      this.selectors.minicart &&
      this.selectors.minicart.dataset.jsButtonRole === "link"
    ) {
      this.selectors.button.setAttribute("role", "link");
    } else {
      this.selectors.button.removeAttribute("role");
    }
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    super.destroy();
    Event.removeListener("cart.product.added", this.updateIcon, this);
    Event.removeListener("cart.updated", this.updateIcon, this);
    Event.removeListener("lineitem.updated", this.updateIcon, this);
    Event.removeListener("carticon.update", this.updateIcon, this);
    Event.removeListener(
      "addtobag.confirmation.closed",
      this.onAddToBagConfirmationClosed,
      this,
    );
  }
}
