import Component from "core/Component";
import { Event } from "services/EventEmitter";
import { on, off } from "toolbox/event";
import { transition } from "toolbox/animate";
import { cookie } from "toolbox/cookie";
import { deepMerge } from "toolbox/deepMerge";
/**
 * This is a description of the ContentPanel constructor function.
 * @class
 * @classdesc This is a description of the ContentPanel class.
 * @extends Component
 */
export default class ContentPanel extends Component {
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
            closedState: "m-closed",
            hidden: "h-hidden",
            hasCloseIcon: "m-has-close-icon",
          },
          type: null,
          onCloseCookieId: null,
          closeTimeout: 0, // Delay before the panel automatically close (in milliseconds)
          hideAnimationDelay: 500, // Time needed for close animation
          eventName: "contentPanel", // Potentially, we could have many instances of contentPanel but they do not respond
          defaultMessage: null, // string - default message in case no content is passed
          // to the same event depending on the context (cookie, error message, promo)
        },
        options,
      ),
    );
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    this.selectors.closeButton = this.element.querySelector("[data-js-close]");
    this.selectors.content = this.element.querySelector("[data-js-content]");
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.type = null;
    this.state.isVisible = !this.element.classList.contains(
      this.options.classNames.closedState,
    );
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    this.timeout = null;
    this.setDisplayDelay();
    if (this.element.querySelector(".c-content-panel__close")) {
      this.element.classList.add(this.options.classNames.hasCloseIcon);
    }
    Event.emit("remindertooltip.update");
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    if (this.selectors.closeButton) {
      on("click", this.selectors.closeButton, this.onCloseClick.bind(this));
    }
    Event.on(`${this.options.eventName}.show`, this.show, this);
    Event.on(`${this.options.eventName}.hide`, this.hide, this);
    transition(this.element, this.onPanelTransitionEnd.bind(this));
  }
  /**
   * CloseClick event handler
   *
   * @param {Object} e Event object
   */
  onCloseClick(e) {
    e.preventDefault();
    if (this.options.onCloseCookieId) {
      cookie.setCookie(this.options.onCloseCookieId, true);
    }
    this.hide();
  }
  /**
   * We can display the content panel with dynamic content or just display content already present from server
   *
   * @param {Object} data Data
   */
  show(data = {}) {
    const { type, closeTimeout } = data;
    const content = data.content || this.options.defaultMessage;
    this.setDisplayDelay(closeTimeout);
    if (content) {
      this.addContent(content);
    }
    this.setContentType(type);
    if (!this.state.isVisible) {
      this.element.classList.remove(this.options.classNames.closedState);
      this.element.classList.remove(this.options.classNames.hidden);
      this.element.setAttribute("aria-hidden", "false");
      this.state.isVisible = true;
    }
    Event.emit("remindertooltip.update");
  }
  /**
   * Set display delay
   *
   * @param {Integer} closeTimeout - expressed in milliseconds
   */
  setDisplayDelay(closeTimeout = this.options.closeTimeout) {
    // If closeTimeout is defined then the panel will close automatically after the defined timeout
    if (closeTimeout > 0) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(this.hide.bind(this), closeTimeout);
    }
  }
  /**
   * Set the type of the content. It can be "success", "warning", "info", "error"
   *
   * @param {String} type of content
   */
  setContentType(type = this.options.type) {
    // do not need to update if current type is already the same
    if (this.state.type === type) {
      return;
    }
    if (type) {
      this.element.setAttribute("data-type", type);
      this.state.type = type;
    } else if (this.state.type) {
      // If previous data-type was defined, we need to remove it to avoid keeping previous state.
      this.element.setAttribute("data-type", "");
      this.state.type = null;
    }
  }
  /**
   * Add content HTML content in the content panel
   *
   * @param {String} content for content panel
   */
  addContent(content) {
    if (content) {
      this.selectors.content.innerHTML = content;
    }
  }
  /**
   * Hide the content panel
   */
  hide() {
    this.element.classList.add(this.options.classNames.closedState);
    setTimeout(() => {
      this.element.classList.add(this.options.classNames.hidden);
      this.element.setAttribute("aria-hidden", "true");
      Event.emit("remindertooltip.update");
    }, this.options.hideAnimationDelay);
    if (this.options.dataAnalytics && this.options.dataAnalytics.onClose) {
      Event.emit("analytics.event", this.options.dataAnalytics.onClose);
    }
    this.state.isVisible = false;
  }
  /**
   * PanelTransitionEnd event handler
   */
  onPanelTransitionEnd() {
    Event.emit(`${this.options.eventName}.transition.ended`);
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    off("click", this.selectors.closeButton);
    Event.removeListener(`${this.options.eventName}.show`, this.show, this);
    Event.removeListener(`${this.options.eventName}.hide`, this.hide, this);
  }
}
