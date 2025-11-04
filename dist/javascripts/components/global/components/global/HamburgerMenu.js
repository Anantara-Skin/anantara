import Component from "core/Component";
import { deepMerge } from "toolbox/deepMerge";
import { mix } from "core/mixwith";
import Accessibility from "mixins/Accessibility";
import { on, off } from "toolbox/event";
import { animate } from "toolbox/animate";
import { Event } from "services/EventEmitter";
/**
 * This is a description of the HamburgerMenu constructor function.
 * @class
 * @classdesc This component allow to open hamburger sub-menu.
 * @extends Component
 */
export default class HamburgerMenu extends mix(Component).with(Accessibility) {
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
          menuSelector: null,
          triggerSelector: null,
          classNames: {
            openAnimation: "h-right-slide-in",
            closeAnimation: "h-right-slide-out",
          },
          a11y: {
            submenuAriaLiveOpened: "", // Text used for the voice message when the hamburger sub menu is opening
            submenuAriaLiveClosed: "", // Text used for the voice message when the hamburger sub menu is closing
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
      opened: "m-opened",
      opening: "m-opening",
    };
    this.selectors.hamburgerContent = this.element.closest(
      "[data-js-hamburger-content]",
    );
    this.selectors.arialive =
      this.element.closest("[data-js-hamburger]") &&
      this.element
        .closest("[data-js-hamburger]")
        .querySelector("[data-js-hamburger-aria-live]");
    this.selectors.backButton = this.element.querySelector(
      "[data-js-menu-back]",
    );
    this.selectors.menu = this.element.querySelector(this.options.menuSelector);
    this.selectors.trigger =
      this.options.triggerSelector &&
      this.element.querySelector(this.options.triggerSelector);
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.opened = false;
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    if (this.selectors.trigger) {
      on("click", this.selectors.trigger, this.toggleMenu.bind(this));
    }
    if (this.selectors.backButton) {
      on("click", this.selectors.backButton, this.toggleMenu.bind(this));
    }
    Event.on("hamburgermenu.close", this.hamburgerMenuClose, this);
  }
  /**
   * Toggles menu
   */
  toggleMenu() {
    if (this.state.opened) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Close Hamburger menu event handler
   */
  hamburgerMenuClose() {
    if (this.state.opened) {
      this.close();
    }
  }
  /**
   * Open the hamburger menu.
   * @returns {Promise} - Resolves when the open animation is done.
   */
  open() {
    this.resetFocusedOrder(this.element);
    this.emitHamburgerEvents(true);
    this.updateAriaAttributes(true);
    this.selectors.menu.classList.add(this.classes.opening);
    return animate(
      this.options.classNames.openAnimation,
      this.selectors.menu,
    ).then(() => {
      this.state.opened = true;
      this.selectors.menu.classList.add(this.classes.opened);
      this.selectors.menu.classList.remove(this.classes.opening);
      this.setFocusedOrder(this.element);
      this.selectors.hamburgerContent
        .querySelector('[data-js-focus-order="first"]')
        .focus();
      this.triggerAnalytics();
    });
  }
  /**
   * Close the hamburger menu.
   * @returns {Promise} - Resolves when the close animation is done.
   */
  close() {
    this.resetFocusedOrder(this.element);
    this.emitHamburgerEvents(false);
    this.updateAriaAttributes(false);
    return animate(
      this.options.classNames.closeAnimation,
      this.selectors.menu,
    ).then(() => {
      this.state.opened = false;
      this.selectors.menu.classList.remove(this.classes.opened);
      if (this.selectors.hamburgerContent) {
        this.setFocusedOrder(this.selectors.hamburgerContent);
      }
      this.selectors.trigger.focus();
    });
  }
  /**
   * Emit hamburger menu events.
   * @param {boolean} isOpen - Whether the menu is being opened or closed.
   */
  emitHamburgerEvents(isOpen) {
    Event.emit("hamburger.submenu.toggle", isOpen);
    if (!isOpen) {
      Event.emit("hamburger.submenu.close", this.id);
    }
  }
  /**
   * Update ARIA attributes based on the menu state.
   * @param {boolean} isOpen - Whether the menu is being opened or closed.
   */
  updateAriaAttributes(isOpen) {
    if (this.selectors.trigger) {
      this.selectors.trigger.setAttribute("aria-expanded", isOpen);
    }
    this.selectors.backButton.setAttribute("aria-expanded", isOpen);
    if (this.selectors.arialive) {
      this.selectors.arialive.innerText = isOpen
        ? this.options.a11y.submenuAriaLiveOpened
        : this.options.a11y.submenuAriaLiveClosed;
    }
  }
  /**
   * Triggers google analytics
   */
  triggerAnalytics() {
    if (this.analytics && Object.keys(this.analytics).length) {
      Event.emit("analytics.event", this.analytics);
    }
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    if (this.selectors.trigger) {
      off("click", this.selectors.trigger);
    }
    if (this.selectors.backButton) {
      off("click", this.selectors.backButton);
    }
    Event.removeListener("hamburgermenu.close", this.hamburgerMenuClose, this);
  }
}
