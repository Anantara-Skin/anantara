import Component from "core/Component";
import { deepMerge } from "toolbox/deepMerge";
import { Event } from "services/EventEmitter";
import { on, off } from "toolbox/event";
import { animate } from "toolbox/animate";
import { mix } from "core/mixwith";
import Accessibility from "mixins/Accessibility";
import AnalyticsMixin from "mixins/Analytics";
import LoaderMixin from "mixins/Loader";
import { ajax } from "toolbox/ajax";
/**
 * This is a description of the SlidingPanel constructor function.
 * @class
 * @classdesc This is a description of the SlidingPanel class. (must be edited)
 * @extends Component
 */
export default class SlidingPanel extends mix(Component).with(
  Accessibility,
  LoaderMixin,
  AnalyticsMixin,
) {
  /**
   * Constructor of the class that mainly merge the options of the components
   *
   * @param {HTMLElement} element HTMLElement of the component
   * @param {Object} options options that belongs to the component
   *
   */
  constructor(element, options = {}) {
    super(
      element,
      deepMerge(
        {
          // ClassNames
          classNames: {
            open: "h-slide-up-in", // Added to sliding panel classes after it is opened
            close: "h-slide-up-out", // Added to sliding panel classes before it is closed
          },
          url: {}, // urls list
          overlay: {}, // overlay options
          a11y: {
            ariaLabelHide: "", // Text used for the button label when sliding panel is opened
            ariaLabelShow: "", // Text used for the button label when sliding panel is closed
            ariaLiveOpened: "", // Text used for the voice message when sliding panel is opening
            ariaLiveClosed: "", // Text used for the voice message when sliding panel is closing
          },
          showOverlay: true, // flag indicates if overlay should be shown
          externalTriggerSelector: null, // selector to a trigger if located outside the component
        },
        options,
      ),
    );
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    this.classNames = {
      active: "m-active",
      opened: "m-opened",
    };
    if (this.options.externalTriggerSelector) {
      this.selectors.trigger = document.querySelectorAll(
        this.options.externalTriggerSelector,
      );
    } else {
      this.selectors.trigger = this.element.querySelector(
        "[data-js-sliding-trigger]",
      );
    }
    this.selectors.target = this.element.querySelector(
      "[data-js-sliding-container]",
    );
    this.selectors.content = this.element.querySelector(
      "[data-js-sliding-content]",
    );
    this.selectors.slidingAriaLive = document.querySelector(
      "[data-js-sliding-aria-live]",
    );
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.isActive = false;
    this.state.analyticsSent = false;
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    this.selectors.target = document.body.appendChild(this.selectors.target);
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    if (this.selectors.trigger) {
      on("click", this.selectors.trigger, this.onTriggerClick.bind(this));
    }
    on("keydown", this.selectors.target, this.onKeyboardControl.bind(this));
    on("click", this.selectors.target, this.onTargetClick.bind(this));
    Event.on("overlay.close.before", this.onBeforeOverlayClose, this);
    Event.on("slidingPanel.check.active", this.checkActive, this);
    Event.on("slidingPanel.close", this.onClose, this);
    Event.on("global.close", this.onClose, this);
  }
  /**
   * Check if sliding panel is active when opening a modal
   */
  checkActive() {
    if (this.state.isActive) {
      Event.emit("modal.keep.overlay.open");
    }
  }
  /**
   * Keydown event handler
   *
   * @param {Object} event Event object
   */
  onKeyboardControl(event) {
    switch (event.key) {
      case "Tab": // 'Tab' key
        this.onTabKey(event);
        break;
      case "Escape": // 'Escape' key
        this.closePanel();
        break;
      default:
        break;
    }
  }
  /**
   * Tab key event
   *
   * @param {Object} event Event object
   */
  onTabKey(event) {
    super.focusTrap(this.selectors.target, event);
  }
  /**
   * Trigger click event handler
   */
  onTriggerClick() {
    this.togglePanel();
    if (this.analytics.onClick && !this.state.analyticsSent) {
      this.sendAnalytics(this.analytics.onClick);
      this.state.analyticsSent = true;
    }
  }
  /**
   * Target container click event handler
   * @param {Object} event Event object
   */
  onTargetClick(event) {
    const { target } = event;
    if (target.hasAttribute("data-js-sliding-close")) {
      this.closePanel();
    }
    setTimeout(() => {
      if (
        target.hasAttribute("data-analytics") &&
        target.hasAttribute("data-send-analytics")
      ) {
        let data;
        const analytics = target.getAttribute("data-analytics");
        if (analytics) {
          data = JSON.parse(analytics);
        }
        this.sendAnalytics(data);
      }
    }, 0);
  }
  /**
   * Close button click event handler
   * @param {Object} event Event object
   */
  onClose() {
    this.closePanel(true);
  }
  /**
   * Close panel
   * @param {Boolean} closeImmediately - if true, the panel will be closed immediately without animation
   */
  closePanel(closeImmediately = false) {
    if (!this.state.isActive) {
      return;
    }
    this.hide(closeImmediately);
    if (this.options.showOverlay) {
      Event.emit("overlay.close");
    }
  }
  /**
   * Send analytics
   * @param {data} data analytics object
   */
  sendAnalytics(data) {
    if (data) {
      Event.emit("analytics.event", data);
    }
  }
  /**
   * Show/hide panel based on current state
   */
  togglePanel() {
    if (this.state.isActive) {
      this.hide();
      if (this.options.showOverlay) {
        Event.emit("overlay.close");
      }
    } else {
      this.show();
    }
  }
  /**
   * Show panel
   * @param {Object} options options
   */
  show(options) {
    const { active } = this.state;
    this.state.isActive = true;
    if (!active) {
      this.selectors.target.classList.add(this.classNames.active);
      if (this.selectors.trigger) {
        if (this.options.externalTriggerSelector) {
          this.selectors.trigger.forEach((trigger) => {
            trigger.classList.add(this.classNames.active);
            trigger.setAttribute("aria-expanded", "true");
            if (this.options.a11y.ariaLabelHide) {
              trigger.setAttribute(
                "aria-label",
                this.options.a11y.ariaLabelHide,
              );
            }
          });
        } else {
          this.selectors.trigger.classList.add(this.classNames.active);
          this.selectors.trigger.setAttribute("aria-expanded", "true");
          // eslint-disable-next-line max-depth
          if (this.options.a11y.ariaLabelHide) {
            this.selectors.trigger.setAttribute(
              "aria-label",
              this.options.a11y.ariaLabelHide,
            );
          }
        }
      }
      if (options && options.suppressAnimation) {
        this.selectors.target.classList.add(this.classNames.opened);
      } else {
        animate(this.options.classNames.open, this.selectors.target).then(
          () => {
            this.selectors.target.classList.add(this.classNames.opened);
          },
        );
      }
    }
    this.loadContent(options && options.url).then(() => {
      if (this.selectors.slidingAriaLive && this.options.a11y.ariaLiveOpened) {
        this.updateAria(
          this.selectors.slidingAriaLive,
          this.options.a11y.ariaLiveOpened,
        );
      }
      // Put the focus into the Modal window after content is loaded and mask the main page from screen reader
      this.initModalPattern(this.selectors.target);
    });
    setTimeout(() => {
      this.handleOnShowAnalyticsAndEvents();
    }, 0);
  }
  /**
   * Handle on show analytics and events
   */
  handleOnShowAnalyticsAndEvents() {
    if (this.analytics) {
      if (this.analytics.virtualPage) {
        this.updateVirtualPage(this.analytics.virtualPage);
      }
      this.sendAnalytics(this.analytics.panelOpen);
    }
    if (this.options.showOverlay) {
      Event.emit("overlay.open", this.options.overlay);
    }
    Event.emit("page.scroll.disabled", true);
    Event.emit("slidingPanel.open.after", this);
  }
  /**
   * Hide panel
   * @param {Boolean} closeImmediately - if true, the panel will be closed immediately without animation
   */
  hide(closeImmediately = false) {
    Event.emit("page.scroll.enabled", { isUnblockScrollForAll: true });
    this.state.isActive = false;
    this.destroyModalPattern();
    if (this.selectors.slidingAriaLive && this.options.a11y.ariaLiveClosed) {
      this.updateAria(
        this.selectors.slidingAriaLive,
        this.options.a11y.ariaLiveClosed,
      );
    }
    const closeCallback = () => {
      this.selectors.target.classList.remove(this.classNames.opened);
      this.selectors.target.classList.remove(this.classNames.active);
      if (this.selectors.trigger) {
        if (this.options.externalTriggerSelector) {
          this.selectors.trigger.forEach((trigger) => {
            trigger.classList.remove(this.classNames.active);
            trigger.setAttribute("aria-expanded", "false");
            if (this.options.a11y.ariaLabelShow) {
              trigger.setAttribute(
                "aria-label",
                this.options.a11y.ariaLabelShow,
              );
            }
          });
        } else {
          this.selectors.trigger.classList.remove(this.classNames.active);
          this.selectors.trigger.setAttribute("aria-expanded", "false");
          if (this.options.a11y.ariaLabelShow) {
            this.selectors.trigger.setAttribute(
              "aria-label",
              this.options.a11y.ariaLabelShow,
            );
          }
        }
      }
      Event.emit("slidingPanel.close.after", this);
    };
    if (closeImmediately) {
      closeCallback();
      return;
    }
    animate(this.options.classNames.close, this.selectors.target).then(
      closeCallback,
    );
  }
  /**
   * Before overlay close event handler
   */
  onBeforeOverlayClose() {
    if (!this.state.isActive) {
      return;
    }
    this.hide();
  }
  /**
   * Dynamically load content
   * @param {String} url content custom url
   * @returns {Promise} object
   */
  loadContent(url) {
    if ((!url && !this.options.url.content) || !this.selectors.content) {
      return Promise.resolve();
    }
    this.addOverlayLoader(this.selectors.content, null, {
      spinnerInContainer: true,
    });
    return ajax(url || this.options.url.content)
      .then(this.onContentLoaded.bind(this))
      .catch((error) => {
        this.setContent(error.message);
      });
  }
  /**
   * Put a content to content container
   * @param {String} response - HTML which inserts to container
   */
  onContentLoaded(response) {
    if (!this.selectors.content) {
      return;
    }
    this.setContent(response);
  }
  /**
   * Put a content to content container
   * @param {String} content - content which inserts to container
   */
  setContent(content) {
    if (!content) {
      return;
    }
    this.selectors.content.innerHTML = content;
    // evaluates inline javascripts in response content
    this.appendedScripts = [];
    this.selectors.content.querySelectorAll("script").forEach((script) => {
      const srcScript = document.createElement("script");
      srcScript.text = script.innerHTML;
      srcScript.async = script.async;
      srcScript.defer = script.defer;
      srcScript.type = script.type;
      document.head.appendChild(srcScript);
      this.appendedScripts.push(srcScript);
    });
    Event.emit("registry.registerChildren", this.selectors.content);
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    if (this.selectors.trigger) {
      off("click", this.selectors.trigger);
    }
    off("click", this.selectors.target);
    off("keydown", this.selectors.target);
    Event.removeListener(
      "overlay.close.before",
      this.onBeforeOverlayClose,
      this,
    );
    Event.removeListener("slidingPanel.check.active", this.checkActive, this);
    Event.removeListener("slidingPanel.close", this.onClose, this);
    Event.removeListener("global.close", this.onClose, this);
    (this.appendedScripts || []).forEach((srcScript) => {
      document.head.removeChild(srcScript);
    });
    this.selectors.target.remove();
  }
}
