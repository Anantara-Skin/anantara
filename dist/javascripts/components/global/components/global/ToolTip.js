/* eslint max-lines: off */
import Component from "core/Component";
import AOS from "aos";
import { mix } from "core/mixwith";
import { on, off } from "toolbox/event";
import { debounce } from "toolbox/debounce";
import { deepMerge } from "toolbox/deepMerge";
import Accessibility from "mixins/Accessibility";
import AccessibilityService from "services/Accessibility";
import LoaderMixin from "mixins/Loader";
import { isTouchDevice, isFiresTouchEvents } from "toolbox/device";
import { isChildOf } from "toolbox/html";
import { Event } from "services/EventEmitter";
import DataLayer from "services/DataLayer";
/**
 * This is a description of the ToolTip constructor function.
 * See documentation for API: https://popper.js.org/docs/v2/
 * @class
 * @classdesc This is a description of the ToolTip class.
 * @extends Component
 */
export default class ToolTip extends mix(Component).with(
  Accessibility,
  LoaderMixin,
) {
  /**
     * Constructor of the class that mainly merge the options of the components
     *
     * @param {HTMLElement} element HTMLElement of the component
     * @param {Object} options options that belongs to the component
     * @typedef {Object} optionsObject
     * @property {String} classNames.modifier - Additional class modifier inserted on Tooltip
     * @property {enum} position - Popper placement (see API).
     *                             List of accepted placements: `auto`, `top`, `right`, `bottom`, `left`
     *                             Each placement can have a variation suffix: '-start`, `-end'
     *                             Some valid examples: `top-end`, `right-start`, `bottom`, `auto-end`
     * @property {String} text - text to show in a tooltip.
     * @property {Boolean} preventOverflow - Set to true to prevent the popper from being positioned outside the boundary
     * @property {Boolean} preventOverflowOffset - Padding on all four sides of view port.
     *                                             Different padding on certain sides – unspecified sides are 0
     *                                             padding: { top: 8, right: 16 },
     * @property {String} tooltipArrowOffset - You can pass a number, which will set an equal padding for all four sides,
     *                                         or an object containing side properties each with their own padding value.
     * @property {Array} tooltipOffset - [0, 0], The first number, skidding, displaces the popper along the reference element.
*                                        The second number, distance, displaces the popper away from, or toward,
*                                        the reference element in the direction of its placement. A positive number displaces it
                                         further away, while a negative number lets it overlap the reference.
     * @property {Boolean} flip - Set to true to flip the popper’s placement when it starts to overlap its reference element
     *                            Requires the preventOverflow modifier before it in order to work
     * @property {Boolean} scroll - Determines if scroll listeners are added.
     * @property {Boolean} resize - Determines if resize listeners are added.
     * @property {Boolean} strategy - Set position of popper. By default, it is absolute
     *                                Accepted placements: `fixed`, `sticky`, `relative`
     * @property {Boolean} removeOnDestroy - Set to true if you want to automatically remove the popper when you call
     *                                       the destroy method
     * @property {Number} width - width of a tooltip content in px. Set to 0 if the width is defined by the content inside
     * @property {Function} afterClose - Function which will be executed right after Tooltip is closed
     */
  constructor(element, options = {}) {
    super(
      element,
      deepMerge(
        {
          _resizable: true,
          classNames: { modifier: null },
          position: "bottom",
          text: null,
          preventOverflow: true,
          preventOverflowOffset: 10,
          flip: true,
          scroll: false,
          resize: true,
          destroyOnHide: true,
          strategy: "absolute",
          removeOnDestroy: true,
          triggerSelector: null, // dom selector for the custom target
          showOnClick: false, // show content on click (disable mouse enter/leave events)
          trackFocusedElements: true,
          width: 0,
          closeLabel: DataLayer.get("text.close") || "Close",
          hideTooltipOnMouseLeave: true, // hide tooltip on mouse tooltip leave
          tooltipArrowOffset: 5, // 5px from the edges of the popper
          tooltipOffset: [], // 0px from the edges of the reference element
          isInStickyHeader: false, // true if the tooltip is in a sticky header
          /**
           * It will execute right after Tooltip is closed
           */
          afterClose() {
            // Callback methods
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
    this.classes = {
      tooltip: "c-tooltip",
      tooltipArrow: "c-tooltip__arrow",
      tooltipAriaLink: "c-tooltip__arialink",
      tooltipClose: "c-tooltip__close",
      tooltipContent: "c-tooltip__content",
      tooltipTitle: "c-tooltip__title",
      tooltipBody: "c-tooltip__body",
      activeModifier: "m-active",
    };
    this.selectors.target =
      (this.options.triggerSelector &&
        this.element.querySelector(this.options.triggerSelector)) ||
      this.element;
    this.tooltip = this.createTooltipLayout();
    this.selectors.tooltipArrow = this.tooltip.querySelector(
      `.${this.classes.tooltipArrow}`,
    );
    this.selectors.tooltipAriaLink = this.tooltip.querySelector(
      `.${this.classes.tooltipAriaLink}`,
    );
    this.selectors.tooltipClose = this.tooltip.querySelector(
      `.${this.classes.tooltipClose}`,
    );
    this.selectors.tooltipBody = this.tooltip.querySelector(
      `.${this.classes.tooltipBody}`,
    );
    this.selectors.tooltipContent = this.tooltip.querySelector(
      `.${this.classes.tooltipContent}`,
    );
    this.popperInstance = null;
  }
  /* eslint-disable complexity */
  /**
   * Create the tooltip HTML structure
   *
   * @returns { HTMLElement } tooltip container
   */
  createTooltipLayout() {
    const cssClass =
      this.options.classNames.modifier !== null
        ? `${this.classes.tooltip} ${this.options.classNames.modifier}`
        : this.classes.tooltip;
    const ariaLabel = this.selectors.target.hasAttribute("aria-label")
      ? `aria-label="${this.selectors.target.getAttribute("aria-label")}"`
      : "";
    let titleCssClass = this.classes.tooltipTitle;
    if (this.options.titleClassNames) {
      this.options.titleClassNames.forEach((className) => {
        titleCssClass += ` ${className}`;
      });
    }
    const titleTemplate = `<div class="${this.options.title ? titleCssClass : "h-hidden"}" id="tooltip-title-${this.id}">${this.options.title || this.selectors.target.getAttribute("aria-label") || this.selectors.target.innerHTML}</div>`;
    const closeLabel = this.selectors.target.hasAttribute(
      "data-js-aria-close-label",
    )
      ? this.selectors.target.getAttribute("data-js-aria-close-label")
      : this.options.closeLabel;
    const closeTemplate = `<button class="${this.classes.tooltipClose} h-hidden"><span aria-hidden="true">X</span><span class="h-show-for-sr">${closeLabel}</span></button>`;
    const ariaLinkTemplate = this.selectors.target.getAttribute("data-href")
      ? `<a class="${this.classes.tooltipAriaLink} h-hidden" ${ariaLabel} href="${this.selectors.target.getAttribute("data-href")}">${this.selectors.target.innerHTML}</a>`
      : "";
    const template = `<div class="${cssClass}" id="${this.id}"><div class="${this.classes.tooltipArrow}"></div><div class="${this.classes.tooltipContent}">${ariaLinkTemplate}${titleTemplate}<div class="${this.classes.tooltipBody}"></div>${closeTemplate}</div></div>`;
    const tooltip = document.createElement("div");
    tooltip.innerHTML = template;
    return tooltip.querySelector(`.${this.classes.tooltip}`);
  }
  /* eslint-enable complexity */
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.isActive = false;
    this.state.hasContent = false;
    this.state.areCustomEventsBound = false;
    this.state.isForceContentLoad = false;
    this.state.isFocusDisabled = false;
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    if (!isTouchDevice() && !this.options.showOnClick) {
      on("mouseenter", this.selectors.target, this.onMouseEnter.bind(this));
      on(
        "mouseleave",
        this.selectors.target,
        debounce(this.onMouseLeave.bind(this)),
      );
    } else {
      on(`click.${this.id}`, document, this.onDocumentClick.bind(this));
    }
    on("keydown", this.selectors.target, this.onKeyboardControl.bind(this));
    on("click.tooltip", this.selectors.target, this.onClick.bind(this));
    on(`keydown.${this.id}`, document, this.onDocumentKeyDown.bind(this));
    on("tooltip.checkcomponent", this.element, this.checkComponent.bind(this));
    Event.on("tooltip.touch.opened", this.onTooltipTouchOpened, this);
    if (this.options.isInStickyHeader) {
      Event.on("header.updateHeight", this.onHeaderUpdate, this);
      Event.on("header.sticky.enabled", this.onHeaderStickyEnabled, this);
      Event.on("header.sticky.disabled", this.onHeaderStickyDisabled, this);
    }
    super.bindEvents();
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    this.state.isFocusDisabled = true;
  }
  /**
   * Bind events for custom select
   */
  bindCustomTooltipEvents() {
    if (!this.state.areCustomEventsBound) {
      if (!this.options.showOnClick && this.options.hideTooltipOnMouseLeave) {
        on(
          "mouseleave",
          this.tooltip,
          debounce(this.onContentMouseLeave.bind(this)),
        );
      }
      // Accessibility events
      on("keydown", this.tooltip, this.onTooltipKeyboardControl.bind(this));
      on(
        "click",
        this.selectors.tooltipClose,
        this.onTooltipCloseClick.bind(this),
      );
      this.state.areCustomEventsBound = true;
    }
  }
  /**
   * Unbind custom select event
   */
  unbindCustomTooltipEvents() {
    if (this.state.areCustomEventsBound) {
      off("mouseleave keydown", this.tooltip);
      off("click", this.selectors.tooltipClose);
      this.state.areCustomEventsBound = false;
    }
  }
  /**
   * Shows/hides on keypress
   * @param {Event} event - Event object
   */
  onKeyboardControl(event) {
    const keyBoardKeys = {
      Enter: () => {
        // 'Enter' key
        this.toggleContentFromKeyboard(event);
      },
      " ": () => {
        // 'Space' key
        this.toggleContentFromKeyboard(event);
      },
    };
    this.keyBoardActions(event, keyBoardKeys);
  }
  /**
   * Hide and focus on keypress
   * @param {Event} event - Event object
   */
  onTooltipKeyboardControl(event) {
    this.state.isFocusDisabled = false;
    const keyBoardKeys = {
      Tab: () => {
        // 'TAB' key
        this.onTabKey(event);
      },
      Escape: () => {
        // 'Escape' key
        this.selectors.target.focus();
        this.hideContent();
        this.unbindCustomTooltipEvents();
      },
    };
    this.keyBoardActions(event, keyBoardKeys);
  }
  /**
   * Tab key event
   *
   * @param {Object} event Event object
   */
  onTabKey(event) {
    super.focusTrap(this.tooltip, event);
  }
  /**
   * Tooltip Close click event handler
   */
  onTooltipCloseClick() {
    if (!this.state.isFocusDisabled) {
      this.selectors.target.focus();
    }
    this.hideContent();
    this.unbindCustomTooltipEvents();
  }
  /**
   * Toggle content on key event
   * @param {Event} event - Event object
   */
  toggleContentFromKeyboard(event) {
    this.state.isFocusDisabled = false;
    this.toggleContent(event);
  }
  /**
   * Toggle content
   * @param {Event} event - Event object
   */
  toggleContent(event) {
    if (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    if (this.state.isActive) {
      this.hideContent();
    } else {
      this.showContent();
    }
  }
  /**
   * MouseDown/TouchStart event handler
   * @param { Object } event Event object
   */
  onDocumentClick(event) {
    const { target, relatedTarget } = event;
    if (
      this.tooltip.contains(target) ||
      this.tooltip.contains(relatedTarget) ||
      relatedTarget === this.tooltip
    ) {
      return;
    }
    this.state.isFocusDisabled = true;
    if (this.state.isActive) {
      if (this.options.showOnClick) {
        if (
          !isChildOf(event.target, this.tooltip) &&
          !isChildOf(event.target, this.selectors.target)
        ) {
          this.hideContent();
          this.unbindCustomTooltipEvents();
        }
      } else {
        event.preventDefault();
        this.hideContent();
        this.unbindCustomTooltipEvents();
      }
    }
  }
  /**
   * Add modal dialog window markup for a tooltip
   */
  addDialogMarkup() {
    if (!this.state.isFocusDisabled || this.options.showOnClick) {
      this.showAriaLink();
      this.showCloseButton();
    }
    this.tooltip.setAttribute("role", "dialog");
    this.tooltip.setAttribute("aria-modal", "true");
    this.tooltip.setAttribute("aria-labelledby", this.setDialogTitle());
  }
  /**
   * Check if explicit tooltip title is defined. Otherwise the target element is used as a title
   * @returns {string} - title ID
   */
  setDialogTitle() {
    const tooltipTitle = `tooltip-title-${this.id}`;
    // Check if tooltip title was defined by merchandiser and if yes, make the ID unique
    const tooltipTitleElement = this.tooltip.querySelector("#tooltip-title");
    if (tooltipTitleElement) {
      tooltipTitleElement.setAttribute("id", `tooltip-title-${this.id}`);
    }
    return tooltipTitle;
  }
  /**
   * Remove modal dialog window markup for a tooltip
   */
  removeDialogMarkup() {
    if (!this.state.isFocusDisabled || this.options.showOnClick) {
      this.hideAriaLink();
      this.hideCloseButton();
    }
    this.tooltip.removeAttribute("role");
    this.tooltip.removeAttribute("aria-modal");
    this.tooltip.removeAttribute("aria-labelledby");
  }
  /**
   * Show aria link on keyboard navigation
   */
  showAriaLink() {
    if (this.selectors.tooltipAriaLink) {
      this.selectors.tooltipAriaLink.classList.remove("h-hidden");
    }
  }
  /**
   * Hide aria link on keyboard navigation
   */
  hideAriaLink() {
    if (this.selectors.tooltipAriaLink) {
      this.selectors.tooltipAriaLink.classList.add("h-hidden");
    }
  }
  /**
   * Show close button on keyboard navigation
   */
  showCloseButton() {
    this.selectors.tooltipClose.classList.remove("h-hidden");
  }
  /**
   * Hide close button on keyboard navigation
   */
  hideCloseButton() {
    this.selectors.tooltipClose.classList.add("h-hidden");
  }
  /**
   * Hide content on mouse iteraction
   */
  hideContentFromMouse() {
    this.hideContent();
  }
  /**
   * Show content on mouse enter
   */
  onMouseEnter() {
    this.state.isFocusDisabled = true;
    if (this.state.isForceContentLoad) {
      this.showContent(true);
    } else {
      this.showContent();
    }
  }
  /**
   * Hide content on mouse leave
   *  @param {Event} event - Event object
   */
  onMouseLeave(event) {
    if (event) {
      const { target, relatedTarget } = event;
      if (
        this.tooltip.contains(target) ||
        this.tooltip.contains(relatedTarget) ||
        relatedTarget === this.tooltip
      ) {
        return;
      }
    }
    this.hideContentFromMouse();
  }
  /**
   * Click event handler
   * @param {Event} event - Event object
   */
  onClick(event) {
    event.preventDefault();
    if ((event && isFiresTouchEvents(event)) || this.options.showOnClick) {
      if (!this.state.isActive) {
        Event.emit("tooltip.touch.opened", this.id);
      }
      this.state.isFocusDisabled = false;
      this.toggleContent(event);
    }
  }
  /**
   * Hide tooltip when another is open
   * @param {String} id parent component ID
   */
  onTooltipTouchOpened(id) {
    if (id !== this.id && this.state.isActive) {
      this.state.isFocusDisabled = true;
      this.hideContent();
    }
  }
  /**
   * Hide content on tooltip mouse leave
   */
  onContentMouseLeave() {
    this.hideContent();
    this.unbindCustomTooltipEvents();
  }
  /**
   * Shows/hides on keypress
   * @param {Event} event - Event object
   * @param {Object} obj - Code key object
   */
  keyBoardActions(event, obj) {
    if (obj[event.key]) {
      obj[event.key]();
    }
  }
  /**
   * Shows a tooltip
   */
  showContent() {
    this.contentReadyToShow = true;
    if (this.state.isActive || !this.isContentValid()) {
      return;
    }
    if (!this.state.isFocusDisabled) {
      this.saveLastFocusState();
    }
    this.state.isActive = true;
    this.selectors.target.setAttribute("aria-expanded", "true");
    this.tooltip.classList.add(this.classes.activeModifier);
    if (this.selectors.target.closest("[data-js-header]")) {
      Event.emit("header.focused");
    }
    if (!this.popperInstance) {
      document.body.appendChild(this.tooltip);
      this.createPopper();
    } else {
      this.initAccessibility();
    }
    if (!this.state.isFocusDisabled) {
      AccessibilityService.addNewState();
    }
    if (!this.state.hasContent) {
      this.setContent(this.options.text);
    }
    this.updatePopper();
  }
  /**
   * Check if tooltip contains component
   */
  checkComponent() {
    if (this.tooltip.querySelector("[data-component]")) {
      this.state.isForceContentLoad = true;
    } else {
      this.state.isForceContentLoad = false;
    }
  }
  /**
   * Document keydown handler
   * @param { Object } event Event object
   */
  onDocumentKeyDown(event) {
    if (this.state.isActive && event && ["Escape"].indexOf(event.key) !== -1) {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.hideContent();
    }
  }
  /**
   * Update popper position when window is resized
   */
  onResize() {
    this.updatePopper();
  }
  /**
   * Content is valid only if at least a content is passed somewhere
   *
   * @returns {Boolean} - true or false
   */
  isContentValid() {
    return this.options.text && this.options.text !== "";
  }
  /**
   * Update the text of the tooltip
   *
   * @param {String} content - tooltip text
   */
  setContent(content) {
    if (content) {
      if (this.popperInstance) {
        this.popperInstance.update();
      }
      this.state.hasContent = true;
      this.selectors.tooltipBody.innerHTML = content;
    }
  }
  /**
   * Getter which defines options object for popper.js module
   *
   * @return {Object} - Options for popper.js module
   */
  get popperOptions() {
    return {
      placement: this.options.position,
      eventsEnabled: this.options.eventsEnabled,
      removeOnDestroy: this.options.removeOnDestroy,
      strategy: this.options.strategy,
      modifiers: [
        {
          name: "arrow",
          options: {
            element: this.selectors.tooltipArrow,
            padding: this.options.tooltipArrowOffset,
          },
        },
        {
          name: "offset",
          options: {
            offset: this.options.tooltipOffset,
          },
        },
        {
          name: "preventOverflow",
          options: {
            tether: this.options.preventOverflow,
            rootBoundary: document.body,
            padding: this.options.preventOverflowOffset,
          },
        },
        {
          name: "flip",
          options: {
            flipVariations: this.options.flip,
            padding: 0,
          },
        },
        {
          name: "computeStyles",
          options: {
            gpuAcceleration: false,
          },
        },
        {
          name: "eventListeners",
          options: {
            scroll: this.options.scroll,
            resize: this.options.resize,
          },
        },
      ],
      onFirstUpdate: this.onPopperCreate.bind(this),
    };
  }
  /**
   * Creates a popper.js instance, which sets initial position or updates position of the tooltip
   *
   * @returns {Object} popper
   */
  createPopper() {
    this.popper = SystemJS.import("@popperjs/core").then(({ createPopper }) => {
      if (this.state.isActive) {
        this.popperInstance = createPopper(
          this.selectors.target,
          this.tooltip,
          this.popperOptions,
        );
      }
    });
    return this.popper;
  }
  /**
   * Re-calculate popper position
   */
  updatePopper() {
    if (this.popperInstance) {
      this.popperInstance.forceUpdate();
    }
  }
  /**
   * onCreate Popper callback
   */
  onPopperCreate() {
    if (this.options.width) {
      this.setWidth(this.options.width);
    }
    AOS.refresh();
    this.initAccessibility();
  }
  /**
   * Init accessibility actions for the opened tooltip
   * - mask page from a screen reader (only tooltip content must be visible)
   * - set up a keyboard trap
   */
  initAccessibility() {
    if (this.state.isActive) {
      this.addDialogMarkup();
      if (!this.state.isFocusDisabled) {
        this.initModalPattern(this.tooltip);
        this.setFocusedOrder(this.tooltip);
      }
      this.bindCustomTooltipEvents(); // bind events on keydown actions inside Tooltip
    }
  }
  /**
   * Set the popper width if defined in options
   * @param {number} width - tooltip width
   */
  setWidth(width) {
    if (this.popperInstance && this.tooltip) {
      this.tooltip.style.width = `${width}px`;
      this.popperInstance.forceUpdate();
    }
  }
  /**
   * Destroy the popper.js instance
   */
  destroyPopper() {
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }
  /**
   * Hides a tooltip
   * @param {Boolean} temporary Indicates that content should be hidden temporarily
   */
  hideContent(temporary) {
    if (this.state.isActive) {
      if (!this.state.isFocusDisabled) {
        this.destroyModalPattern();
        this.resetFocusedOrder(this.tooltip);
      }
      Event.emit("tooltip.hide.content", this.id);
      this.tooltip.classList.remove(this.classes.activeModifier);
      this.selectors.target.setAttribute("aria-expanded", "false");
      this.state.isActive = false;
      this.removeDialogMarkup();
      if (this.options.destroyOnHide) {
        this.destroyPopper();
      }
      if (
        this.state.isFocusDisabled &&
        this.selectors.target.closest("[data-js-header]")
      ) {
        Event.emit("header.unfocused");
      }
      this.options.afterClose(this.element);
      if (!this.state.isFocusDisabled) {
        AccessibilityService.restorePrevState();
      }
    }
    this.contentReadyToShow = !!temporary;
  }
  /**
   * Toggle a tooltip
   * @param { Object } headerData Header state data
   */
  onHeaderUpdate(headerData) {
    if (this.contentReadyToShow) {
      if (headerData.height > 0) {
        setTimeout(() => {
          this.showContent();
        }, 300);
      } else {
        this.hideContent(true);
      }
    }
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
    this.setPopperStrategy("absolute");
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
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    off(this.element);
    off(this.selectors.target);
    this.destroyPopper();
    this.unbindCustomTooltipEvents();
    off(`keydown.${this.id}`, document);
    Event.removeListener(
      "tooltip.touch.opened",
      this.onTooltipTouchOpened,
      this,
    );
    if (isTouchDevice() || this.options.showOnClick) {
      off(`click.${this.id}`, document);
    }
    if (this.options.isInStickyHeader) {
      Event.removeListener("header.updateHeight", this.onHeaderUpdate, this);
      Event.removeListener(
        "header.sticky.enabled",
        this.onHeaderStickyEnabled,
        this,
      );
      Event.removeListener(
        "header.sticky.disabled",
        this.onHeaderStickyDisabled,
        this,
      );
    }
  }
}
