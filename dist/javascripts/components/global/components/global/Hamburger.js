import Component from "core/Component";
import { Event } from "services/EventEmitter";
import { on, off, trigger } from "toolbox/event";
import { animate } from "toolbox/animate";
import { deepMerge } from "toolbox/deepMerge";
import { mix } from "core/mixwith";
import Registry from "core/ComponentRegistry";
import Accessibility from "mixins/Accessibility";
import { isKeyboardLikeClick } from "toolbox/device";
/**
 * This is a description of the Hamburger constructor function.
 * @class
 * @classdesc This is a description of the Hamburger class.
 * @extends Component
 */
export default class Hamburger extends mix(Component).with(Accessibility) {
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
          contentPosition: "",
          expandActiveAccordionItem: false, // Expand current category in accordion
          reloadData: {
            section: "common",
            id: "hamburger",
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
      active: "m-active",
      opened: "m-opened",
      openAnimationRight: "h-right-slide-in",
      closeAnimationRight: "h-right-slide-out",
      openAnimationLeft: "h-left-slide-in",
      closeAnimationLeft: "h-left-slide-out",
      menuSubmenuActive: "m-menu-submenu-active",
      hamburgerOpened: "m-over-modal",
    };
    if (this.options.contentPosition === "left") {
      this.animationOpen = this.classes.openAnimationLeft;
      this.animationClose = this.classes.closeAnimationLeft;
    } else {
      this.animationOpen = this.classes.openAnimationRight;
      this.animationClose = this.classes.closeAnimationRight;
    }
    this.selectors.button = this.element.querySelector(
      "[data-js-hamburger-button]",
    );
    this.selectors.content = this.element.querySelector(
      "[data-js-hamburger-content]",
    );
    this.selectors.navigationAccordion = this.element.querySelectorAll(
      "[data-js-navigation-accordion]",
    );
    this.selectors.headerAreaWrapper = this.element.closest(
      "[data-js-header-area-wrapper]",
    );
    this.selectors.headerMobileNavigation = this.element.closest(
      "[data-js-header-mobile-navigation]",
    );
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.active = false;
    this.state.contentScrollPosition = 0;
    this.state.isKeyboardControl = false;
    this.state.headerOffsetPosition = 0;
    this.state.isAccordionExpanded = false;
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    on("click", this.selectors.button, this.onClick.bind(this));
    on("keydown", this.element, this.onKeyboardControl.bind(this));
    on("mousedown", this.element, this.handleMousedown.bind(this));
    Event.on("hamburger.menu.close", this.onHamburgerClose, this);
    Event.on("hamburger.submenu.toggle", this.toggleSubMenu, this);
    Event.on("login.success", this.loginRegistrationSuccess, this);
    Event.on("registration.success", this.loginRegistrationSuccess, this);
    Event.on("global.close", this.onGlobalClose, this);
    if (this.options.expandActiveAccordionItem) {
      on(
        "accordion.initialised",
        this.element,
        this.onAccordionInitialised.bind(this),
      );
    }
  }
  /**
   * Callback function for the accordion.initialised event.
   * Expands the active accordion item if all conditions are met.
   * @param {Event} event - The accordion.initialised event.
   */
  onAccordionInitialised(event) {
    const accordion = event.target;
    if (!this.state.isAccordionExpanded) {
      this.expandActiveAccordionItem(accordion);
    }
  }
  /**
   * Expands the current item in the navigation accordion based on page URL.
   *
   * If the `expandActiveAccordionItem` option is not enabled, the function returns immediately.
   *
   * The function iterates over all navigation links with submenu items and compares the URL of the link with the
   * current page URL. If the URLs match, the function expands the accordion items that contain the link.
   * @param {HTMLElement} accordion - The accordion element.
   */
  expandActiveAccordionItem(accordion) {
    if (!this.options.expandActiveAccordionItem) {
      return;
    }
    accordion = accordion || this.element;
    // Expand current page link in accordion
    // Get all navigation links with submenu items
    const navigationLinks = accordion.querySelectorAll(
      "[data-js-accordion-item] a.c-navigation__link",
    );
    const currentPageUrl = window.location.href;
    Array.from(navigationLinks).some((link) => {
      if (link.href === currentPageUrl) {
        let accordionItems = [];
        let parent = link.parentElement;
        while (parent) {
          if (parent.hasAttribute("data-js-accordion-item")) {
            accordionItems.push(parent);
          }
          parent = parent.parentElement;
        }
        accordionItems = accordionItems.reverse();
        accordionItems.forEach((accordionItem) => {
          this.openAccordionItem(accordionItem);
        });
        this.state.isAccordionExpanded = true;
        this.state.accordionItemsToExpand = accordionItems;
      }
      return this.state.isAccordionExpanded;
    });
  }
  /**
   * Opens an accordion item within the specified element.
   *
   * @param {HTMLElement} element - The element containing the accordion item to be opened.
   * @returns {void}
   */
  openAccordionItem(element) {
    const accordion = element.closest('[data-component="global/Accordion"]');
    if (!accordion) {
      return;
    }
    Registry.afterRegistered(accordion).then(() => {
      const component = Registry.getComponent(accordion);
      if (component) {
        component.open([element]);
      }
    });
  }
  /**
   * Click event handler
   *
   * @param {Object} event HTML Event object
   */
  onClick(event) {
    if (event && isKeyboardLikeClick(event)) {
      this.state.isKeyboardControl = true;
    }
    this.toggleHamburger.call(this);
  }
  /**
   * Mousedown event handler
   */
  handleMousedown() {
    if (this.state.isKeyboardControl) {
      this.state.isKeyboardControl = false;
    }
  }
  /**
   * Keydown event handler
   * @param {Object} event Event object
   */
  onKeyboardControl(event) {
    switch (event.key) {
      case "Tab": // 'Tab' key
        this.onTabKeyDown(event);
        break;
      case "Enter": // 'Enter' key
      case " ": // 'Whitespace' key
        this.state.isKeyboardControl = true;
        break;
      case "Escape": // 'Escape' key
        if (this.element.classList.contains(this.classes.menuSubmenuActive)) {
          Event.emit("hamburgermenu.close");
        } else {
          this.close();
        }
        this.selectors.button.focus();
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
    if (!this.state.active) {
      return;
    }
    if (
      !event.shiftKey &&
      event.target.getAttribute("data-js-focus-order") === "last"
    ) {
      event.preventDefault();
      this.selectors.button.focus();
    }
    if (event.shiftKey && event.target === this.selectors.button) {
      // 'TAB' + shift key
      event.preventDefault();
      this.element.querySelector('[data-js-focus-order="last"]').focus();
    }
  }
  /**
   * Close the hamburger menu
   */
  onHamburgerClose() {
    this.close();
  }
  /**
   * Close the hamburger menu when global close event is triggered
   */
  onGlobalClose() {
    this.close(true);
  }
  /**
   * toggle hamburger
   */
  toggleHamburger() {
    if (this.state.active) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Open hamburger
   */
  open() {
    Event.emit("global.close");
    if (this.state.accordionItemsToExpand) {
      this.state.accordionItemsToExpand.forEach((accordionItem) => {
        this.openAccordionItem(accordionItem);
      });
    }
    document.documentElement.style.overflow = "hidden";
    Event.emit("hamburger.toggle", true);
    Event.emit("overlay.open");
    Event.emit("analytics.event", {
      category: "burger menu",
      action: "display::menu",
      label: "picto",
      extraData: {
        event_name: "burger_menu_click",
        click_action: "open",
      },
    });
    this.state.active = true;
    Event.once("overlay.close.before", this.close, this);
    this.selectors.button.setAttribute("aria-expanded", true);
    this.element.setAttribute("role", "dialog");
    this.element.setAttribute("aria-modal", "true");
    this.element.classList.add(this.classes.active);
    this.element.classList.add(this.classes.opened);
    if (this.selectors.headerMobileNavigation) {
      this.selectors.headerMobileNavigation.classList.add(
        this.classes.hamburgerOpened,
      );
    }
    if (this.selectors.headerAreaWrapper) {
      const headerBoundingClientRect =
        this.selectors.headerAreaWrapper.getBoundingClientRect();
      const headerOffsetPosition =
        this.options.headerPosition === "bottom"
          ? headerBoundingClientRect.height
          : headerBoundingClientRect.bottom;
      if (this.state.headerOffsetPosition !== headerOffsetPosition) {
        this.state.headerOffsetPosition = headerOffsetPosition;
        this.selectors.content.style[
          this.options.headerPosition === "bottom" ? "bottom" : "top"
        ] = `${this.state.headerOffsetPosition}px`;
      }
    }
    animate(this.animationOpen, this.selectors.content).then(() => {
      this.setFocusedOrder(this.element);
      if (this.state.isKeyboardControl) {
        // Re-trigger the focus to force NVDA switching from the browse mode
        // (entered automatically due to the dialog attributes added) to the focus mode
        this.selectors.button.blur();
        setTimeout(() => {
          this.element.querySelector('[data-js-focus-order="first"]').focus();
        }, 0);
      }
    });
  }
  /**
   * Close the hamburger
   * @param {Boolean} closeImmediately If true, the hamburger will be closed immediately without animation
   */
  close(closeImmediately = false) {
    if (!this.state.active) {
      return;
    }
    this.state.active = false;
    Event.emit("hamburger.toggle", false);
    Event.emit("overlay.close");
    Event.emit("hamburgermenu.close");
    Event.emit("analytics.event", {
      category: "burger menu",
      action: "display::menu",
      label: "picto",
      extraData: {
        event_name: "burger_menu_click",
        click_action: "close",
      },
    });
    if (this.selectors.navigationAccordion) {
      this.selectors.navigationAccordion.forEach((item) => {
        trigger("accordion.close", item);
      });
    }
    if (this.selectors.headerMobileNavigation) {
      this.selectors.headerMobileNavigation.classList.remove(
        this.classes.hamburgerOpened,
      );
    }
    this.selectors.button.setAttribute("aria-expanded", false);
    this.element.removeAttribute("aria-modal");
    this.element.removeAttribute("role", "dialog");
    this.element.classList.remove(this.classes.active);
    const closeCallback = () => {
      this.element.classList.remove(this.classes.opened);
    };
    document.documentElement.style.overflow = "";
    this.resetFocusedOrder(this.element);
    if (closeImmediately) {
      closeCallback();
      return;
    }
    animate(this.animationClose, this.selectors.content).then(closeCallback);
  }
  /**
   * On MenuCustomerInfo toggle
   *
   * @param {Boolean} isOpened Flag
   */
  toggleSubMenu(isOpened) {
    if (isOpened) {
      this.resetFocusedOrder(this.element);
      this.state.contentScrollPosition = this.selectors.content.scrollTop;
      this.selectors.content.scrollTop = 0;
      this.element.classList.add(this.classes.menuSubmenuActive);
    } else {
      this.selectors.content.scrollTop = this.state.contentScrollPosition;
      this.element.classList.remove(this.classes.menuSubmenuActive);
      this.setFocusedOrder(this.element);
    }
  }
  /**
   * Login registration success event handler
   */
  loginRegistrationSuccess() {
    this.reload();
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    off(this.selectors.button);
    off(this.element);
    Event.removeListener("hamburger.menu.close", this.onHamburgerClose, this);
    Event.removeListener("hamburger.submenu.toggle", this.toggleSubMenu, this);
    Event.removeListener("login.success", this.loginRegistrationSuccess, this);
    Event.removeListener(
      "registration.success",
      this.loginRegistrationSuccess,
      this,
    );
    Event.removeListener("global.close", this.onGlobalClose, this);
  }
}
