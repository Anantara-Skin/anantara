import Component from "core/Component";
import { Event } from "services/EventEmitter";
import { on } from "toolbox/event";
import { animate } from "toolbox/animate";
import { deepMerge } from "toolbox/deepMerge";
/**
 * This is a description of the Overlay constructor function.
 * @class
 * @classdesc This is a description of the Overlay class.
 * @extends Component
 */
export default class Overlay extends Component {
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
          preventClick: false,
          classNames: {
            active: "m-active",
            animationEnter: "h-fade-in",
            animationLeave: "h-fade-out",
          },
        },
        options,
      ),
    );
    this.closeTimeout = null;
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.isClosed = true;
    this.state.isClosing = false;
    this.state.keepOpened = false;
    this.state.preventClick = this.options.preventClick;
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    on("click", this.element, this.onClick.bind(this));
    Event.on("overlay.open", this.open, this);
    Event.on("overlay.close", this.close, this);
  }
  /**
   * Click on the overlay would close it.
   */
  onClick() {
    if (
      this.state.isClosing ||
      this.state.isClosed ||
      this.state.preventClick
    ) {
      return;
    }
    this.close();
  }
  /**
   * Open overlay
   *
   * @param {Object} options - Options that can be passed when opening
   */
  open(options = {}) {
    // It happens that open and close methods are called at the same time.
    // In this case, we wait the close to happen and open back the overlay.
    if (this.state.isClosing) {
      Event.once("overlay.close.after", this.open.bind(this, options), this);
    }
    // When one component with overlay is calling another component with overlay we don't need to close the overlay
    // after the second component is closed to avoid the animation glitch.
    // We still need to trigger the overlay.close.before event on close so that the overlay owner component
    // can perform onClose actions if the close sequence is initiated by the click on the overlay.
    this.state.keepOpened = !!options.keepOpened;
    if (!this.state.isClosed) {
      return;
    }
    this.state.preventClick = !!options.preventClick;
    if (typeof options.onClose === "function") {
      this.closeCallback = options.onClose;
    }
    const { active, animationEnter } = this.options.classNames;
    this.state.isClosed = false;
    this.element.classList.add(active);
    animate(animationEnter, this.element);
  }
  /**
   * Close the modal
   *
   * @param {Object} options That belongs to the component
   */
  close(options) {
    if (this.state.isClosed || this.state.isClosing) {
      return;
    }
    if (this.state.keepOpened) {
      Event.emit("overlay.close.before");
      this.state.keepOpened = false;
      return;
    }
    this.state.isClosing = true;
    // reset initial prevenClick value coming from options
    this.state.preventClick = this.options.preventClick;
    // in case if open and close methods are called at the same time
    // we need remove animationEnter class from overlay
    if (
      this.element.classList.contains(this.options.classNames.animationEnter)
    ) {
      this.element.classList.remove(this.options.classNames.animationEnter);
    }
    Event.emit("overlay.close.before");
    animate(this.options.classNames.animationLeave, this.element).then(
      this.onClose.bind(this, options),
    );
  }
  /**
   * onClose handler
   *
   * @param {Object} options That belongs to the component
   */
  onClose(options) {
    this.element.classList.remove(this.options.classNames.active);
    if (options && typeof options.onClose === "function") {
      options.onClose();
    }
    if (typeof this.closeCallback === "function") {
      this.closeCallback();
      this.closeCallback = null;
    }
    this.state.isClosing = false;
    this.state.isClosed = true;
    Event.emit("overlay.close.after");
  }
}
