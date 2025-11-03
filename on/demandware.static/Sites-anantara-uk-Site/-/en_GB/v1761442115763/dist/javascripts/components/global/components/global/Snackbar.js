import Component from "core/Component";
import { deepMerge } from "toolbox/deepMerge";
import { Event } from "services/EventEmitter";
import { on, off } from "toolbox/event";
/**
 * This is a description of the Snackbar constructor function.
 * @class
 * @classdesc This is a description of the Snackbar class. (must be edited)
 * @extends Component
 */
export default class Snackbar extends Component {
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
          sustain: 700, // delay between two notifications
          timeoutMs: 5000, // default duration of notifications
          preventStacking: false, // by default snackbars can be stacked
          interactive: false, // by default snackbars are not interactive
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
    this.state.currentNotification = null;
    this.state.stack = [];
    this.state.timeoutId = null;
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    Event.on("snackbar.notify", this._onNotify.bind(this), this);
    Event.on("snackbar.close", this._onClose.bind(this), this);
    // Get notifications on global update
    Event.on("global.update", this.onGlobalUpdate.bind(this));
  }
  /**
   * Handler when closing a notification
   */
  _onClose() {
    if (this.state.timeoutId !== null) {
      window.clearTimeout(this.state.timeoutId);
      window.requestAnimationFrame(this.removeNotification.bind(this, false));
    }
  }
  /**
   * Handler of a new notification
   * @param {Object} data notification data retrieved from emit
   * @param {boolean} preventStacking clears notification stack and show current notification
   */
  _onNotify(data, preventStacking = false) {
    this.addNotification(data, preventStacking);
  }
  /**
   * Remove notification events
   */
  _removeNotificationEvents() {
    if (this.state.currentNotification !== null) {
      off(
        "click",
        this.state.currentNotification.querySelector("[data-js-close]"),
      );
    }
  }
  /**
   * Store notification to the stack
   * @param {Object} data notification data retrieved from emit
   * @param {boolean} preventStacking clears notification stack and show current notification
   */
  addNotification(data, preventStacking) {
    if (preventStacking) {
      this.clearAllNotifications();
    }
    // store current notification data to the state
    this.state.stack.push(data);
    // if there is no other notification currently displayed then display the current one
    if (this.state.stack.length === 1) {
      this.createNotification(this.state.stack[0]);
    }
  }
  /**
   * Display a notification
   * @param {Object} data notification data retrieved from emit
   */
  createNotification(data) {
    const timeoutMs = data.timeoutMs || this.options.timeoutMs;
    const content = `
            <span class="c-snackbar__label"><span class="c-snackbar__content" data-js-content>${data.content}</span></span>
            <i class="c-snackbar__close" data-js-close></i>
        `;
    const notification = document.createElement("div");
    notification.classList.add("c-snackbar__surface");
    notification.innerHTML = content;
    switch (data.type) {
      case "success":
        notification.classList.add("m-success");
        break;
      case "warning":
        notification.classList.add("m-warning");
        break;
      case "error":
        notification.classList.add("m-error");
        break;
      default:
        break;
    }
    this.element.appendChild(notification);
    this.state.currentNotification = notification;
    this.state.timeoutId = window.setTimeout(() => {
      window.requestAnimationFrame(this.removeNotification.bind(this, false));
    }, timeoutMs);
    // Initialize components, if snackbar's content is interactive
    if (this.options.interactive || data.interactive) {
      Event.emit("registry.registerChildren", notification);
    }
    on(
      "click",
      this.state.currentNotification.querySelector("[data-js-close]"),
      this._onClose.bind(this),
    );
  }
  /**
   * Remove current notification
   * @param {boolean} preventStacking - Ensure that no new notification get stacked
   */
  removeNotification(preventStacking = false) {
    this._removeNotificationEvents();
    if (this.state.currentNotification) {
      this.element.removeChild(this.state.currentNotification);
    }
    this.state.currentNotification = null;
    this.state.stack.shift();
    this.state.timeoutId = null;
    if (this.state.stack.length && !preventStacking) {
      window.setTimeout(() => {
        window.requestAnimationFrame(
          this.createNotification.bind(this, this.state.stack[0]),
        );
      }, this.options.sustain);
    }
  }
  /**
   * Handler for global update
   * @param {Object} content - Analytics data of the virtual page
   */
  onGlobalUpdate(content) {
    if (content.snackbarNotifications) {
      content.snackbarNotifications.forEach((notification) => {
        this.addNotification(notification);
      });
    }
  }
  /**
   * remove all notifications
   */
  clearAllNotifications() {
    // clear timed out call if any
    if (this.state.timeoutId !== null) {
      window.clearTimeout(this.state.timeoutId);
    }
    // run with simple cycle to make sure that removeNotification will be called
    // exact numbe of times as state.stack length, as removeNotification modifies (reduce length) of stack
    const l = this.state.stack.length;
    for (let i = 0; i < l; i++) {
      this.removeNotification(true);
    }
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    Event.removeListener("snackbar.notify", this._onNotify.bind(this), this);
    Event.removeListener("snackbar.close", this._onClose.bind(this), this);
    this._removeNotificationEvents();
  }
}
