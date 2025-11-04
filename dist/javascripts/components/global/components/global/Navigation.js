import Component from "core/Component";
import { Event } from "services/EventEmitter";
import { on, off } from "toolbox/event";
import { deepMerge } from "toolbox/deepMerge";
import { mix } from "core/mixwith";
import Accessibility from "mixins/Accessibility";
import { mediaQuery } from "toolbox/mediaQuery";
/**
 * This is a description of the Navigation constructor function.
 * @class
 * @classdesc This is a description of the Navigation class.
 * @extends Component
 */
export default class Navigation extends mix(Component).with(Accessibility) {
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
          templateName: "header/navigationmenu",
          displayTimeout: 200,
          _resizable: true,
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
      navigationInit: "m-init",
      navigationOpened: "m-opened",
    };
    this.selectors = {
      rootItem: "[data-js-root-item]",
      rootButton: "[data-js-root-button]",
      menuItem: "[data-js-menu-item]",
      navigation: "[data-js-navigation-meganav]",
      menuItemTitle: "[data-js-menu-item-title]",
    };
    this.selectors.rootItems = this.element.querySelectorAll(
      this.selectors.rootItem,
    );
    this.selectors.rootButtons = this.element.querySelectorAll(
      this.selectors.rootButton,
    );
    this.selectors.menuItems = this.element.querySelectorAll(
      this.selectors.menuItem,
    );
    this.selectors.menuItemsTitle = this.element.querySelectorAll(
      this.selectors.menuItemTitle,
    );
    this.currentOpenedElement = null;
    this.openTimeout = null;
    this.activeTimeout = null;
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.isActive = false; // At least one navigation item is opened;
    this.state.areDocumentEventsBound = false;
  }
  /**
   * After init hook
   */
  afterInit() {
    if (mediaQuery.is("xlarge")) {
      this.setNavigationItemTitleStyle();
    }
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    on(
      "mouseenter",
      this.selectors.rootItems,
      this.onNavigationHover.bind(this),
      false,
    );
    on(
      "mouseleave",
      this.selectors.rootItems,
      this.onNavigationLeave.bind(this),
      false,
    );
    // Accessibility events
    on(
      "keydown",
      this.selectors.rootItems,
      this.onNavigationItemKeyDown.bind(this),
    );
    on(
      "click",
      this.selectors.rootButtons,
      this.onNavigationButtonClick.bind(this),
    );
  }
  /**
   * Handlers to onresize event
   */
  onResize() {
    if (mediaQuery.is("xlarge")) {
      this.selectors.menuItemsTitle.forEach((element) => {
        element.style.minHeight = 0;
      });
      this.setNavigationItemTitleStyle();
    }
  }
  /**
   * Set style attribute to navigation item title
   */
  setNavigationItemTitleStyle() {
    this.element.classList.add(this.classNames.navigationInit);
    this.selectors.menuItems.forEach((element) => {
      const menuItemTitle = element.querySelectorAll(
        this.selectors.menuItemTitle,
      );
      const itemMaxHeight = Math.max(
        ...[...menuItemTitle].map((item) => item.offsetHeight),
        0,
      );
      menuItemTitle.forEach((item) => {
        item.style.minHeight = `${itemMaxHeight}px`;
      });
    });
    this.element.classList.remove(this.classNames.navigationInit);
  }
  /**
   * Open the subnavigation of the selected item
   *
   * @param {HTMLElement} item Data
   */
  showNavigationItem(item) {
    this.closeCurrentNavigationItem();
    if (this.openTimeout) {
      this.openTimeout = null;
    }
    if (this.activeTimeout) {
      clearTimeout(this.activeTimeout);
      this.activeTimeout = null;
    }
    this.state.isActive = true;
    item.classList.add(this.classNames.navigationOpened);
    this.currentOpenedElement = item;
    item
      .querySelector(this.selectors.rootButton)
      .setAttribute("aria-expanded", true);
    item.querySelectorAll(this.selectors.menuItem).forEach((element) => {
      element.setAttribute("aria-hidden", false);
    });
    this.bindDocumentNavigationEvents();
    this.setFocusedOrder(item);
    Event.emit("simplesearch.close");
  }
  /**
   * Close the subnavigation of the selected item
   */
  closeCurrentNavigationItem() {
    if (!this.currentOpenedElement) {
      return;
    }
    this.resetFocusedOrder(this.currentOpenedElement);
    this.currentOpenedElement.classList.remove(
      this.classNames.navigationOpened,
    );
    this.currentOpenedElement = null;
    this.selectors.rootButtons.forEach((element) => {
      element.setAttribute("aria-expanded", false);
    });
    this.selectors.menuItems.forEach((element) => {
      element.setAttribute("aria-hidden", true);
    });
    this.activeTimeout = setTimeout(() => {
      this.state.isActive = false;
    }, this.options.displayTimeout);
  }
  /**
   * Navigation mouseenter handler
   * @param {Event} e Event object
   */
  onNavigationHover(e) {
    const element = e.target;
    if (!element.querySelector(this.selectors.navigation)) {
      return;
    }
    // If navigation is already active we can show the next quickly
    if (this.state.isActive) {
      this.showNavigationItem(element);
    } else {
      // To prevent the navigation showing up too fast if not opened yet
      this.openTimeout = setTimeout(
        this.showNavigationItem.bind(this, element),
        this.options.displayTimeout,
      );
    }
  }
  /**
   * Navigation leave handler
   */
  onNavigationLeave() {
    if (this.openTimeout) {
      clearTimeout(this.openTimeout);
      this.openTimeout = null;
    } else {
      this.closeCurrentNavigationItem();
    }
  }
  /**
   * Navigation item on key down
   * @param { Object } event Event object
   */
  onNavigationItemKeyDown(event) {
    switch (event.key) {
      case "Tab": // 'Tab' key
        this.onTabKeyDown(event);
        break;
      case "Enter": // 'Enter' key
      case " ": // 'Whitespace' key
        // Navigation works only in case it is not a link
        if (event.target.nodeName !== "A") {
          event.preventDefault();
          this.toggleNavigationItem(event);
        }
        break;
      case "Escape": // 'Escape' key
        if (this.state.isActive) {
          event.preventDefault();
          const rootItem = event.currentTarget.closest(this.selectors.rootItem);
          rootItem.querySelector(this.selectors.rootButton).focus();
        }
        break;
      default:
        break;
    }
  }
  /**
   * 'Tab' Keydown event handler
   * @param {Object} event Event object
   */
  onTabKeyDown(event) {
    if (!this.state.isActive) {
      return;
    }
    super.focusTrap(this.element, event);
  }
  /**
   * Bind events for navigation on document
   */
  bindDocumentNavigationEvents() {
    if (this.state.areDocumentEventsBound) {
      return;
    }
    on(`keydown.${this.id}`, document, this.onDocumentKeyDown.bind(this));
    this.state.areDocumentEventsBound = true;
  }
  /**
   * Unbind events for navigation on document
   */
  unbindDocumentNavigationEvents() {
    if (!this.state.areDocumentEventsBound) {
      return;
    }
    off(`keydown.${this.id}`, document);
    this.state.areDocumentEventsBound = false;
  }
  /**
   * Document keydown handler
   * @param { Object } event Event object
   */
  onDocumentKeyDown(event) {
    if (this.state.isActive && event && ["Escape"].indexOf(event.key) !== -1) {
      event.preventDefault();
      this.closeCurrentNavigationItem();
    }
  }
  /**
   * Handles a click event of navigation element for NVDA screen reader
   *
   * @param {EventObject} event - event object
   */
  onNavigationButtonClick(event) {
    this.toggleNavigationItem(event);
  }
  /**
   * Toggle Navigation item submenu state
   * @param {EventObject} event - event object
   */
  toggleNavigationItem(event) {
    const element = event.currentTarget.closest(this.selectors.rootItem);
    if (this.state.isActive) {
      this.closeCurrentNavigationItem();
    } else {
      this.showNavigationItem(element);
    }
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    off(this.selectors.rootItems);
    off(this.selectors.rootButtons);
    this.unbindDocumentNavigationEvents();
  }
}
