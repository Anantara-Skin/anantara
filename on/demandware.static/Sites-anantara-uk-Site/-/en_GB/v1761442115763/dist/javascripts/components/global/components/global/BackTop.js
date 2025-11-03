import Component from "core/Component";
import { mix } from "core/mixwith";
import { on, off } from "toolbox/event";
import { deepMerge } from "toolbox/deepMerge";
import AnalyticsMixin from "mixins/Analytics";
/**
 * This is a description of the BackTop constructor function.
 * @class
 * @classdesc This is a description of the BackTop class.
 * @extends Component
 */
export default class BackTop extends mix(Component).with(AnalyticsMixin) {
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
          classNames: {
            active: "m-active",
          },
          scrollTo: 0, // Y position of the scroll target
          offset: "auto", // page scroll top position to show the element (in pixels), set 'auto' to take 50% of screen height
          _resizable: true,
          _scrollable: true,
        },
        options,
      ),
    );
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.isActive = false;
    this.setOffsetSize();
  }
  /**
   * Update the offset value.
   */
  setOffsetSize() {
    // if auto, offset is set to half of the page
    // if manual, offset is taken from the default offset options
    this.state.offset =
      this.options.offset === "auto"
        ? window.innerHeight * 0.5
        : this.options.offset;
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    on("click", this.element, this.onClick.bind(this));
    on("keypress", this.element, this.onKeyPress.bind(this));
  }
  /**
   * Handlers to onscroll event
   */
  onScroll() {
    if (this.state.offset <= 0) {
      return;
    }
    if (window.scrollY >= this.state.offset) {
      if (!this.state.isActive) {
        this.show();
      }
    } else if (this.state.isActive) {
      this.hide();
    }
  }
  /**
   * Click event handler
   */
  onClick() {
    this.sendAnalytics(this.analytics);
    window.scroll({
      top: this.options.scrollTo,
    });
  }
  /**
   * KeyPress event handler
   *
   * @param {Object} event Event object
   */
  onKeyPress(event) {
    const focusableElement = document.querySelector(
      "[data-js-skip-to-content]",
    );
    if (["Enter", " "].indexOf(event.key) !== -1) {
      window.scroll({
        top: this.options.scrollTo,
      });
      if (focusableElement) {
        focusableElement.focus();
      }
    }
  }
  /**
   * Show back to top element
   */
  show() {
    this.element.classList.add(this.options.classNames.active);
    this.state.isActive = true;
  }
  /**
   * Hide back to top element
   */
  hide() {
    this.element.classList.remove(this.options.classNames.active);
    this.state.isActive = false;
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    off("click", this.element);
    off("keypress", this.element);
  }
  /**
   * Handlers to onresize event
   */
  onResize() {
    if (this.options.offset === "auto") {
      this.setOffsetSize();
    }
  }
}
