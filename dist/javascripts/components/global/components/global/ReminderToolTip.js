import PopOver from "components/global/PopOver";
import { Event } from "services/EventEmitter";
import { on, off } from "toolbox/event";
import { getResources, fetchContent } from "services/Resources";
import { cookie } from "toolbox/cookie";
import { deepMerge } from "toolbox/deepMerge";
/**
 * This is a description of the ReminderToolTip constructor function.
 * @class
 * @classdesc This is a description of the ReminderToolTip class. (must be edited)
 * @extends Component
 */
export default class ReminderToolTip extends PopOver {
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
          cookieReminder: "cookie-reminder", // The cookie used to determine the necessity of displaying the reminder tooltip
          text: null, // text to show in a reminder tooltip
          // Should be set to true when tooltip is located within the header to handle the logic of changing the header state
          // (sticky and non-sticky)
          headerAttachment: false,
          verifyActualityRequestData: null, // Data for checking the relevance of displaying the reminder tooltip
          tooltipDisplayDurationSec: 10, // The duration for which the tooltip remains visible after being triggered
          // Display the reminder tooltip not only during component initialization,
          // but at any time after it is already initialised, when the time comes
          enableRuntimeReminderTooltip: false,
          reminderTooltipIntervalMin: 0, // The interval in minutes at which the reminder display should be restored
          reminderAnalytics: null, // analytics data
          showContentForSticky: false, // Display the tooltip when the header is in a sticky state
          showOnClick: true, // Disable events related to hovering over this component
          strategy: "absolute", // Set position of popper for reminder tooltip
          width: 200, // reminder tooltip width
          alternativeTargetIfInvisible: null, // alternative target if the current target is invisible
          isMediaChange: true,
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
    this.setToolTipTarget();
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    super.afterInit();
    this.setTooltipReminder();
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonymous function
   */
  bindEvents() {
    super.bindEvents();
    if (this.options.headerAttachment) {
      Event.on("header.updateHeight", this.onHeaderUpdate, this);
      if (this.options.showContentForSticky) {
        Event.on("header.sticky.enabled", this.onHeaderStickyEnabled, this);
      }
      Event.on("header.sticky.disabled", this.onHeaderStickyDisabled, this);
    }
    Event.on("modal.open", this.hideTooltip, this);
    Event.on("remindertooltip.hidetooltip", this.hideTooltip, this);
    Event.on("remindertooltip.update", this.onReminderTooltipUpdate.bind(this));
    on(
      "click.remindertooltip",
      this.selectors.tooltipClose,
      this.onTooltipCloseClick.bind(this),
    );
  }
  /**
   * Shows/hides on keypress
   * @param {Event} event - Event object
   */
  onKeyboardControl(event) {
    const { target } = this.selectors;
    // Opened once automatically, but can't be reopened from keyboard by user
    const isOnce = target && target.matches("[data-js-reminder-tooltip-once]");
    if (!this.contentReadyToShow && isOnce) {
      return;
    }
    super.onKeyboardControl(event);
  }
  /**
   * onMediaQueryChange event handler
   */
  onMediaQueryChange() {
    this.setToolTipTarget();
    if (this.contentReadyToShow) {
      this.showTooltip();
    }
  }
  /**
   * Set the target element for the tooltip
   */
  setToolTipTarget() {
    this.selectors.target = this.element.closest(
      "[data-js-reminder-tooltip-target]",
    );
    const isElementVisible = this.isElementVisible(this.selectors.target);
    if (this.options.alternativeTargetIfInvisible && !isElementVisible) {
      this.selectors.target = document.querySelector(
        this.options.alternativeTargetIfInvisible,
      );
    }
  }
  /**
   * Set the reminder tooltip
   */
  setTooltipReminder() {
    this.tooltipReminderDateTime = cookie.getCookie(
      this.options.cookieReminder,
    );
    if (this.tooltipReminderDateTime) {
      this.tooltipReminderDateTime = parseInt(this.tooltipReminderDateTime, 10);
      const currentDateTime = new Date().getTime();
      const delta = this.tooltipReminderDateTime - currentDateTime;
      if (delta <= 0) {
        this.processTooltipReminder(true);
      } else if (this.options.enableRuntimeReminderTooltip) {
        this.tooltipReminderTimerId = setTimeout(
          () => this.processTooltipReminder(),
          delta + 1000,
        );
      }
    }
  }
  /**
   * Handle processing a reminder tooltip
   * @param { Boolean } skipVerification  The necessity to skip the verification of displaying the tooltip
   */
  processTooltipReminder(skipVerification) {
    if (this.tooltipReminderTimerId) {
      clearTimeout(this.tooltipReminderTimerId);
    }
    const { reminderTooltipIntervalMin } = this.options;
    if (!reminderTooltipIntervalMin) {
      // remove cookie
      cookie.setCookie(
        this.options.cookieReminder,
        this.tooltipReminderDateTime,
        -1,
      );
    } else {
      const date = new Date();
      date.setMinutes(date.getMinutes() + reminderTooltipIntervalMin);
      // set new cookie value
      cookie.setCookie(this.options.cookieReminder, date.getTime(), 3);
      if (this.options.enableRuntimeReminderTooltip) {
        this.tooltipReminderTimerId = setTimeout(
          () => this.processTooltipReminder(),
          reminderTooltipIntervalMin * 60000,
        );
      }
    }
    if (skipVerification) {
      this.showTooltip();
    } else if (this.options.verifyActualityRequestData) {
      const data = Object.assign({}, this.options.verifyActualityRequestData);
      data.dataType = "json";
      getResources()
        .then(fetchContent.bind(this, data))
        .then(this.onTooltipReminderSync.bind(this))
        .then(this.showTooltip.bind(this));
    }
  }
  /**
   * Check the relevance of displaying the tooltip
   * @param { Object } data Response data
   */
  onTooltipReminderSync(data) {
    if (!data || !data.content || !data.content.remindTooltip) {
      throw new Error();
    }
  }
  /**
   * Display reminedr tooltip indicating completion by removing the corresponding cookie
   */
  showTooltip() {
    Event.emit("remindertooltip.hidetooltip");
    this.showContent(true);
    this.contentReadyToShow = true;
  }
  /**
   * Shows a tooltip
   * @param { Boolean } showCloseButton The necessity of showing the close button
   */
  showContent(showCloseButton) {
    if (showCloseButton) {
      // Show tooltip close button
      this.showCloseButton();
    } else {
      this.hideCloseButton();
    }
    const isElementVisible = this.isElementVisible(this.selectors.target);
    if (isElementVisible) {
      super.showContent();
      Event.emit("registry.registerChildren", this.selectors.tooltipBody);
      if (this.options.reminderAnalytics) {
        Event.emit("analytics.event", this.options.reminderAnalytics);
      }
      if (
        this.options.tooltipDisplayDurationSec &&
        !this.tooltipDisplayDurationTimerId
      ) {
        this.tooltipDisplayDurationTimerId = setTimeout(() => {
          this.hideTooltip();
        }, this.options.tooltipDisplayDurationSec * 1000);
      }
    }
  }
  /**
   * Hide a tooltip
   */
  hideContent() {
    super.hideContent();
    if (this.tooltipDisplayDurationTimerId) {
      clearTimeout(this.tooltipDisplayDurationTimerId);
      this.tooltipDisplayDurationTimerId = null;
    }
  }
  /**
   * Hide a tooltip
   */
  hideTooltip() {
    this.hideContent();
    this.contentReadyToShow = false;
  }
  /**
   * On header sticky enabled
   */
  onHeaderStickyEnabled() {
    this.setPopperStrategy("fixed");
  }
  /**
   * On header sticky disabled
   */
  onHeaderStickyDisabled() {
    if (this.options.showContentForSticky) {
      this.setPopperStrategy("absolute");
    } else if (this.contentReadyToShow) {
      setTimeout(() => {
        this.showContent(true);
      }, 300);
    }
  }
  /**
   * Set a Popper strategy
   * @param { String } strategy Popper strategy
   */
  setPopperStrategy(strategy) {
    if (this.options) {
      this.options.strategy = strategy;
      if (this.popperInstance) {
        this.popperInstance.setOptions((options) => ({
          ...options,
          strategy: this.options.strategy,
        }));
      }
    }
  }
  /**
   * Checks if an element is visible in the DOM.
   * An element is considered visible if it and all its ancestors are not hidden via CSS.
   *
   * @param {HTMLElement} element - The element to check for visibility.
   * @returns {boolean} `true` if the element is visible, `false` otherwise.
   *
   * @example
   * // Assuming there is an element with id 'myElement' in the DOM
   * const myElement = document.getElementById('myElement');
   * if (isElementVisible(myElement)) {
   *   console.log('The element is visible.');
   * } else {
   *   console.log('The element is not visible.');
   * }
   */
  isElementVisible(element) {
    // Check if the element exists
    if (!element) {
      return false;
    }
    // Check if the element itself is hidden
    const style = window.getComputedStyle(element);
    if (style.display === "none" || style.visibility === "hidden") {
      return false;
    }
    // Traverse up the DOM hierarchy and check visibility of each ancestor
    let parent = element.parentElement;
    while (parent) {
      const parentStyle = window.getComputedStyle(parent);
      if (
        parentStyle.display === "none" ||
        parentStyle.visibility === "hidden"
      ) {
        return false;
      }
      parent = parent.parentElement;
    }
    // If no ancestor is hidden, the element is visible
    return true;
  }
  /**
   * Toggle a tooltip
   * @param { Object } headerData Header state data
   */
  onHeaderUpdate(headerData) {
    if (this.contentReadyToShow) {
      if (
        (this.options.showContentForSticky || !headerData.isSticky) &&
        headerData.height > 0
      ) {
        setTimeout(() => {
          this.showContent(true);
        }, 300);
      } else {
        this.hideContent();
      }
    }
  }
  /**
   * Tooltip Close click event handler
   */
  onTooltipCloseClick() {
    this.contentReadyToShow = false;
    super.onTooltipCloseClick();
  }
  /**
   * Click event handler
   * Restore the basic click logic
   */
  onClick() {
    this.state.isFocusDisabled = true;
  }
  /**
   * ContentMouseLeave event handler
   */
  onContentMouseLeave() {
    this.contentReadyToShow = false;
    super.onContentMouseLeave();
  }
  /**
   * Re-calculate popper position
   */
  onReminderTooltipUpdate() {
    this.updatePopper();
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    super.destroy();
    if (this.options.headerAttachment) {
      Event.removeListener("header.updateHeight", this.onHeaderUpdate, this);
      if (this.options.showContentForSticky) {
        Event.removeListener(
          "header.sticky.enabled",
          this.onHeaderStickyEnabled,
          this,
        );
      }
      Event.removeListener(
        "header.sticky.disabled",
        this.onHeaderStickyDisabled,
        this,
      );
    }
    if (this.tooltipReminderTimerId) {
      clearTimeout(this.tooltipReminderTimerId);
    }
    if (this.tooltipDisplayDurationTimerId) {
      clearTimeout(this.tooltipDisplayDurationTimerId);
    }
    Event.off("modal.open", this.hideTooltip, this);
    Event.removeListener("remindertooltip.hidetooltip", this.hideTooltip, this);
    Event.off("remindertooltip.update", this.onReminderTooltipUpdate, this);
    off("click.remindertooltip", this.selectors.tooltipClose);
  }
}
