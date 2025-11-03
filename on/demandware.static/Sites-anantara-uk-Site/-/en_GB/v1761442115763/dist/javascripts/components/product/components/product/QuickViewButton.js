import Component from "core/Component";
import { Event } from "services/EventEmitter";
import { on, off } from "toolbox/event";
import { deepMerge } from "toolbox/deepMerge";
import { getData } from "services/DataLayer";
import { mix } from "core/mixwith";
import AnalyticsMixin from "mixins/Analytics";
import LoaderMixin from "mixins/Loader";
/**
 * This is a description of the QuickViewButton constructor function.
 * @class
 * @classdesc This is a description of the QuickViewButton class.
 * @extends Component
 */
export default class QuickViewButton extends mix(Component).with(
  AnalyticsMixin,
  LoaderMixin,
) {
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
          contentUrl: null,
          cssPath: "quickview.css",
          ariaLabel: null, // If defined, this copy will be used as the aria-label of a Modal
          classNames: {
            container: null,
          },
        },
        options,
      ),
    );
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    this.selectors.focusReturnElement = this.element
      .closest("[data-js-tile]")
      .querySelector("[data-js-product-name]");
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.isActive = false;
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonymous function
   */
  bindEvents() {
    on("click", this.element, this.onClick.bind(this));
    on("keydown", this.element, this.onKeyDown.bind(this));
  }
  /**
   * Click event handler
   *
   * @param {Object} e - Event object
   */
  onClick(e) {
    e.preventDefault();
    if (this.state.isActive) {
      return;
    }
    this.sendProductClickToAnalytics(e);
    this.openModal(this.selectors.focusReturnElement);
  }
  /**
   * Function which is 'keydown' handler for Tab keydown
   * @param {EventObject} e - event object
   */
  onKeyDown(e) {
    if (["Enter", " "].indexOf(e.key) !== -1) {
      this.sendProductClickToAnalytics(e);
      this.openModal(this.element);
    }
  }
  /**
   * Open modal pop-up with the content
   * @param {String} focusReturnElement - HTML
   */
  openModal(focusReturnElement) {
    const pageID = getData().page.id;
    let url = this.options.contentUrl;
    this.state.isActive = true;
    if (pageID === "cart") {
      url = `${this.options.contentUrl}&cartPage=true`;
    }
    Event.emit("modal.open", {
      options: {
        cssPath: this.options.cssPath,
        contentUrl: url,
        classNames: {
          container: this.options.classNames.container,
        },
        ariaLabel: this.options.ariaLabel,
        afterClose: this.afterClose.bind(this),
        afterOpen: this.afterOpen.bind(this),
        isStackable: true,
        analytics: {
          virtualPageURL: this.analytics.virtualPageURL,
          virtualPageTitle: this.analytics.virtualPageTitle,
        },
        focusReturnElement,
      },
    });
  }
  /**
   * On Quick View modal 'closed' event handler
   */
  afterClose() {
    // need to check is element exist, because it can be removed in quickview modal,
    // after "Add to cart" button click is same modal
    if (this.element) {
      this.state.isActive = false;
    }
  }
  /**
   * On Quick View modal 'afterOpen' event handler
   */
  afterOpen() {
    this.removeLoader();
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    off("click", this.element);
    off("keydown", this.element);
  }
}
