import ToolTip from "components/global/ToolTip";
import { on, off, trigger } from "toolbox/event";
import { Event } from "services/EventEmitter";
import { ajax } from "toolbox/ajax";
import { debounce } from "toolbox/debounce";
import { deepMerge } from "toolbox/deepMerge";
import { isTouchDevice } from "toolbox/device";
/**
 * This is a description of the PopOver constructor function.
 * @class
 * @classdesc This is a description of the PopOver class.
 * @extends ToolTip
 */
export default class PopOver extends ToolTip {
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
          contentUrl: null,
          targetContent: null, // should be a unique selector
          autoCloseTimeout: null,
          showOnInit: false,
          showOnClick: false, // show content on click (disable mouse enter/leave events)
          enableAnalyticsOnShow: false,
        },
        options,
      ),
    );
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    super.afterInit();
    if (this.options.showOnInit) {
      this.showContent();
    }
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    super.initState();
    this.state.isContentHovered = false;
    this.state.isContentLoaded = false;
    this.state.wasContentShownOnce = false;
    this.state.closeTimer = null;
    this.state.isElementHovered = true;
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    super.bindEvents();
    on("popover.show", this.selectors.target, this.showContent.bind(this));
    if (!isTouchDevice() && !this.options.showOnClick) {
      on(
        `mouseenter.popover${this.id}`,
        this.tooltip,
        this.onContentMouseEnter.bind(this),
      );
      on(
        `mouseleave.popover${this.id}`,
        this.tooltip,
        debounce(this.onContentMouseLeave.bind(this), 100),
      );
    }
    Event.on("modal.open", this.close, this);
    Event.on("popover.hide.content", this.onPopoverHide, this);
  }
  /**
   * Hide popover content event handler
   * @param {String} id popover ID
   */
  onPopoverHide(id) {
    if (
      !this.element ||
      this.element.getAttribute("data-component-id") !== id
    ) {
      return;
    }
    this.hideContent();
  }
  /**
   * Click event handler
   * @param {Event} event - Event object
   */
  onClick(event) {
    const currentTarget = this.selectors.target || event.target;
    if (currentTarget.getAttribute("data-href") && this.state.isActive) {
      this.triggerAnalyticsOnClick();
      window.location.href = currentTarget.getAttribute("data-href");
    }
    super.onClick(event);
  }
  /**
   * MouseEnter event handler
   */
  onMouseEnter() {
    this.state.isElementHovered = true;
    if (this.state.closeTimer) {
      clearTimeout(this.state.closeTimer);
      this.state.closeTimer = null;
    }
    super.onMouseEnter();
  }
  /**
   * MouseLeave event handler
   */
  onMouseLeave() {
    this.state.isElementHovered = false;
    super.onMouseLeave();
  }
  /**
   * ContentMouseEnter event handler
   */
  onContentMouseEnter() {
    this.state.isContentHovered = true;
  }
  /**
   * ContentMouseLeave event handler
   */
  onContentMouseLeave() {
    this.close();
  }
  /**
   * Shows/hides on keypress
   * @param {Event} event - Event object
   * @param {Object} obj - Code key object
   */
  keyBoardActions(event, obj) {
    super.keyBoardActions(event, obj);
  }
  /**
   * Trigger Analytics On ShowContent
   */
  triggerAnalytics() {
    if (
      !this.analytics ||
      !this.options.enableAnalyticsOnShow ||
      this.state.wasContentShownOnce
    ) {
      return;
    }
    Event.emit("analytics.event", this.analytics);
  }
  /**
   * Trigger Analytics On Click
   */
  triggerAnalyticsOnClick() {
    if (this.analytics && Object.keys(this.analytics).length) {
      Event.emit("analytics.event", this.analytics);
    }
  }
  /**
   * Shows a PopOver
   *
   * @param {Boolean} isForceContentLoad Indicates that content needs to force load from server despite the cached value
   */
  showContent(isForceContentLoad) {
    if (this.state.isActive) {
      return;
    }
    if (isForceContentLoad) {
      this.state.isContentLoaded = false;
    }
    super.showContent();
    this.triggerAnalytics();
    this.state.wasContentShownOnce = true;
    if (this.state.isContentLoaded || this.state.isLoading) {
      return;
    }
    if (this.options.contentUrl) {
      this.loadContent(this.options.contentUrl);
    } else if (this.options.targetContent) {
      this.loadTargetContent();
    }
  }
  /**
   * Content has to have at least text or text coming from a URL
   *
   * @returns {Boolean} True or False
   */
  isContentValid() {
    const { text, contentUrl, targetContent } = this.options;
    return text || contentUrl || targetContent;
  }
  /**
   * Ajax request for the content
   *
   * @param {String} url - url to fetch content for a PopOver
   * @returns {Promise} object
   */
  loadContent(url) {
    if (!url) {
      return Promise.reject(
        new Error("Popover has to have a URL set in order to load content"),
      );
    }
    this.addLoader(this.tooltip);
    return ajax(url)
      .then(this.onLoadContent.bind(this))
      .catch((error) => {
        if (this.autoPosition) {
          this.autoPosition.update();
        }
        this.removeLoader(this.tooltip);
        this.setContent(error.message);
        this.autoClose();
      });
  }
  /**
   * Load content from a targetted element
   */
  loadTargetContent() {
    if (this.state.isContentLoaded) {
      return;
    }
    const targetElement = document.querySelector(this.options.targetContent);
    if (!targetElement) {
      return;
    }
    this.state.isContentLoaded = true;
    this.setContent(targetElement.innerHTML);
    this.onContentUpdated();
    this.autoClose();
    // remove original element
    targetElement.parentNode.removeChild(targetElement);
  }
  /**
   * Put a content to PopOver after request is resolved
   * @param {string} response - HTML which inserts to PopOver
   */
  onLoadContent(response) {
    this.state.isContentLoaded = true;
    this.removeLoader(this.tooltip);
    this.setContent(response);
    this.onContentUpdated();
    this.autoClose();
    this.initAccessibility();
    trigger("tooltip.checkcomponent", this.element);
  }
  /**
   * Register children elements when content is updated
   */
  onContentUpdated() {
    Event.emit("registry.registerChildren", this.selectors.tooltipContent);
  }
  /**
   * Hides the PopOver if it is not in use.
   * takes also account of the loading state and autoclose timer
   */
  hidePopOver() {
    if (
      this.state.isElementHovered ||
      this.state.isContentHovered ||
      (this.state.isLoading && this.state.closeTimer)
    ) {
      return;
    }
    this.hideContent();
  }
  /**
   * Hides a PopOver
   */
  close() {
    this.state.isContentHovered = false;
    if (this.options.autoCloseTimeout) {
      this.autoClose();
    } else {
      this.hidePopOver();
    }
  }
  /**
   * Hides a PopOver after the specified delay
   */
  autoClose() {
    if (this.options.autoCloseTimeout) {
      this.state.closeTimer = setTimeout(() => {
        this.state.closeTimer = null;
        this.hidePopOver();
      }, this.options.autoCloseTimeout);
    }
  }
  /**
   * Hide content on mouse iteraction
   */
  hideContentFromMouse() {
    this.hidePopOver();
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    super.destroy();
    if (!isTouchDevice() && !this.options.showOnClick) {
      off(this.tooltip);
    }
    Event.off("modal.open", this.close);
    Event.off("popover.hide.content", this.onPopoverHide);
  }
}
