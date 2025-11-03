import Component from "core/Component";
import { deepMerge } from "toolbox/deepMerge";
import { Event } from "services/EventEmitter";
import { on, off } from "toolbox/event";
const KEY_TAB = "Tab";
/**
 * This is a description of the FocusHighlighter constructor function.
 * @class
 * @classdesc This component intended to address Accessibility issue with focus highlighting on focusable elements.
 * @extends Component
 */
export default class FocusHighlighter extends Component {
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
          _resizable: true,
          _scrollable: true,
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
      enabled: "m-visible",
      hurry: "m-hurry",
    };
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.isHighlighterVisible = false;
    this.state.lastFocusedElement = undefined;
    this.state.isHeaderFocused = false;
    this.state.lastFocusedElementCoords = "";
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    on("keyup", document, this.handleKeyup.bind(this));
    on("mousedown", document, this.handleMousedown.bind(this));
    Event.on("highlighter.update", this.updateHighlighter, this);
  }
  /**
   * Keyup event handler
   * @param {KeyboardEvent} event - key up event
   * @listens dom#keyup
   */
  handleKeyup(event) {
    if (event.key === KEY_TAB) {
      this.enableHighlighter();
    }
  }
  /* eslint-disable complexity */
  /**
   * Mousedown event handler
   * @param {MouseEvent} event - mouse down event
   * @listens dom#keyup
   */
  handleMousedown(event) {
    if (
      !(
        event.target instanceof HTMLElement ||
        event.target instanceof HTMLDocument
      )
    ) {
      return;
    }
    // When select HTMLElement popup open via keyboard mousedown event is
    // synthetically clicked
    const isSelect = event.target instanceof HTMLSelectElement;
    // Space key up on button HTML element generates synthetic mousedown.
    // We do not find cross browser solution to detect this synthetical mousedown
    // We prevent to hide focus frame when mousedown on buttons
    const isButton =
      event.target instanceof HTMLButtonElement ||
      event.target.getAttribute("role") === "button";
    const isRadio =
      event.target instanceof HTMLInputElement &&
      event.target.getAttribute("type") === "radio";
    if (isSelect || isButton || isRadio) {
      return;
    }
    if (this.state.isHighlighterVisible) {
      this.disableHighlighter();
    }
  }
  /* eslint-enable complexity */
  /**
   * Handlers to onresize event
   */
  onResize() {
    this.updateHighlighter();
  }
  /**
   * Handlers to onscroll event
   */
  onScroll() {
    this.updateHighlighter();
  }
  /**
   * @description Update highlighter position. Needed when we need to update position from outside
   * @listens "highlighter.update"
   */
  updateHighlighter() {
    if (this.state.isHighlighterVisible && this.state.lastFocusedElement) {
      this.moveTo(this.state.lastFocusedElement);
    }
  }
  /**
   * Handles focus change on page
   * @listens dom#focusin
   */
  handleFocus() {
    if (!(document.activeElement instanceof HTMLElement)) {
      return;
    }
    const focusedElement = document.activeElement;
    if (
      !this.isValidTarget(focusedElement) ||
      (this.isTextInput(focusedElement) && !this.state.isHighlighterVisible)
    ) {
      return;
    }
    if (
      !this.state.isHeaderFocused &&
      focusedElement.closest("[data-js-header]")
    ) {
      this.state.isHeaderFocused = true;
      Event.emit("header.focused");
    }
    this.detectHurryNavigation();
    this.moveTo(focusedElement);
  }
  /**
   * @description Enables a `highlighter` - a bordered box with sizes of currently focused element.
   */
  enableHighlighter() {
    if (this.state.isHighlighterVisible) {
      return;
    }
    this.state.isHighlighterVisible = true;
    this.element.classList.add(this.classNames.enabled);
    this.handleFocus();
    // all other events are handled by `focus in` event
    on("focusin", document, this.handleFocus.bind(this));
    // detect when the focus is moved within an iFrame
    on("blur", window, this.onWindowBlur.bind(this));
    this.highlighterInterval = window.setInterval(() => {
      this.updateHighlighter();
    }, 300);
  }
  /**
   * @description Disables a `highlighter` - a bordered box with sizes of currently focused element.
   */
  disableHighlighter() {
    if (!this.state.isHighlighterVisible) {
      return;
    }
    off("focusin", document);
    off("blur", window);
    if (this.state.isHeaderFocused) {
      this.state.isHeaderFocused = false;
      Event.emit("header.unfocused");
    }
    this.state.isHighlighterVisible = false;
    this.state.lastFocusedElement = undefined;
    this.element.classList.remove(this.classNames.enabled);
    this.hideTimeOut = window.setTimeout(() => this.hide(), 200);
    if (this.highlighterInterval) {
      window.clearInterval(this.highlighterInterval);
      this.highlighterInterval = null;
    }
  }
  /**
   * Window Blur event handler
   * Detects if the focus moved inside the iframe and disables highlighter to avoid a conflict
   * with iFrame focus styles
   */
  onWindowBlur() {
    if (document.activeElement.tagName.toLowerCase() === "iframe") {
      this.disableHighlighter();
    }
  }
  /* eslint-disable complexity */
  /**
   * @description Moves `highlighter` (a border box) in place of focused element
   * @param {HTMLElement} focusedElement - element, which gets focus
   */
  moveTo(focusedElement) {
    if (!(focusedElement instanceof HTMLElement)) {
      return;
    }
    let targetWidth;
    let targetLeft;
    const borderWidth = 3;
    const targetRectangle = focusedElement.getBoundingClientRect();
    const targetRectangleLeft = targetRectangle.left + window.scrollX;
    const targetTop = targetRectangle.top + window.scrollY - borderWidth * 2;
    const targetHeight = targetRectangle.height + borderWidth * 2;
    // Check if target element full width
    if (targetRectangle.width >= document.body.clientWidth) {
      targetWidth = targetRectangle.width - borderWidth * 4;
      targetLeft = borderWidth;
      // Check if target element too close to left side
    } else if (targetRectangleLeft < borderWidth * 2) {
      targetWidth = targetRectangle.width - borderWidth * 2;
      targetLeft = borderWidth;
      // Check if target element too close to right side
    } else if (
      targetRectangleLeft + targetRectangle.width + borderWidth * 2 >=
      document.body.clientWidth
    ) {
      targetWidth = targetRectangle.width - borderWidth * 2;
      targetLeft =
        document.body.clientWidth - targetRectangle.width - borderWidth;
    } else {
      targetWidth = targetRectangle.width + borderWidth * 2;
      targetLeft = targetRectangleLeft - borderWidth * 2;
    }
    if (
      focusedElement === this.state.lastFocusedElement &&
      this.state.lastFocusedElementCoords ===
        `${targetTop}${targetLeft}${targetWidth}${targetHeight}`
    ) {
      // If we come from coords recheck do not reapply changes
      return;
    }
    const highlighterStyle = this.element.style;
    highlighterStyle.top = `${targetTop}px`;
    highlighterStyle.left = `${targetLeft}px`;
    highlighterStyle.width = `${targetWidth >= 0 ? targetWidth : 0}px`;
    highlighterStyle.height = `${targetHeight}px`;
    this.state.lastFocusedElementCoords = `${targetTop}${targetLeft}${targetWidth}${targetHeight}`;
    this.state.lastFocusedElement = focusedElement;
  }
  /* eslint-enable complexity */
  /**
   * @description Hide `highlighter`
   */
  hide() {
    const highlighterStyle = this.element.style;
    highlighterStyle.width = "0";
    highlighterStyle.height = "0";
    if (this.hideTimeOut) {
      window.clearTimeout(this.hideTimeOut);
    }
  }
  /**
   * @description Detects too fast customer navigation, and displays `highlighter`,
   * moving from previously focused element to currently focused without animation.
   */
  detectHurryNavigation() {
    const currentTime = Date.now();
    const isHurryNavigation = currentTime - (this.lastKeyTime || 0) < 150;
    if (isHurryNavigation && !this.isHurryNavigation) {
      this.element.classList.add(this.classNames.hurry);
      this.isHurryNavigation = true;
    } else if (this.isHurryNavigation) {
      this.element.classList.remove(this.classNames.hurry);
      this.isHurryNavigation = false;
    }
    this.lastKeyTime = currentTime;
  }
  /**
   * @param {HTMLElement} domNode - focused element
   * @returns {Boolean} true if focused element is valid DOM element
   */
  isValidTarget(domNode) {
    return (
      domNode !== this.state.lastFocusedElement &&
      domNode.nodeName !== "HTML" &&
      domNode.nodeName !== "BODY"
    );
  }
  /**
   * @param {DomNode} domNode - focused element
   * @returns {Boolean} true if focused element is form input element
   */
  isTextInput(domNode) {
    return (
      (domNode instanceof HTMLTextAreaElement && !domNode.readOnly) ||
      (domNode instanceof HTMLInputElement && !domNode.readOnly) ||
      !!domNode.getAttribute("contenteditable")
    );
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    if (this.state.isHighlighterVisible) {
      this.disableHighlighter();
    }
    off("keyup mousedown", document);
    Event.removeListener("highlighter.update");
  }
}
