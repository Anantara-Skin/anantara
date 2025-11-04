/* eslint complexity: ["error", 12] */
/* eslint max-lines: ["error", {"max": 500, "skipBlankLines": true, "skipComments": true }] */
import Component from "core/Component";
import { mix } from "core/mixwith";
import { Event } from "services/EventEmitter";
import { mediaQuery } from "toolbox/mediaQuery";
import { on, off, trigger } from "toolbox/event";
import { animate } from "toolbox/animate";
import { deepMerge } from "toolbox/deepMerge";
import Accessibility from "mixins/Accessibility";
import { tryParseJSON } from "toolbox/object";
import { isKeyboardLikeClick } from "toolbox/device";
/**
 * This is a description of the Header constructor function.
 * @class
 * @classdesc This is a description of the Header class.
 * @extends Component
 */
export default class Header extends mix(Component).with(Accessibility) {
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
          enableSticky: true,
          _resizable: true,
          _scrollable: true,
          hideOnScroll: true,
          hideElementOnScroll: [],
          enableAnimatedLogo: false,
          animatedLogoThreshold: 0,
          animatedLogoDelay: 2000,
          breakpoints: {
            large: {
              anchor: "[data-js-anchor-large]", // has to be a selector inside header element
            },
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
    this.sentinelObserver = null;
    this.headerObserver = null;
    this.animationTimeout = null;
    this.classNames = {
      active: "m-active",
      focused: "m-focused",
      sticked: "m-sticked",
      disabled: "m-disabled",
      hamburgerOpened: "m-hamburger-active",
      quickSearchOpened: "m-search-active",
      searchSuggestionsOpened: "m-search-suggestions-active",
      animationEnter: "h-fade-in",
      animationLeave: "h-fade-out",
      hidden: "h-hidden",
    };
    if (this.options.enableSticky) {
      if (mediaQuery.is("xlarge")) {
        this.selectors.anchorElement = document.querySelector(
          "[data-js-anchor-large]",
        );
      } else {
        this.selectors.anchorElement =
          document.querySelector("[data-js-anchor]");
      }
      this.selectors.headerInner = this.element.querySelector(
        "[data-js-header-inner]",
      );
    }
    this.selectors.searchContainer = this.element.querySelector(
      "[data-js-header-search-container]",
    );
    if (mediaQuery.is("xlarge")) {
      this.selectors.simpleSearchCta = this.element.querySelector(
        "[data-js-header-search-cta-large]",
      );
    } else {
      this.selectors.simpleSearchCta = this.element.querySelector(
        "[data-js-header-search-cta]",
      );
    }
    if (!this.options.hideOnScroll || this.options.hideElementOnScroll) {
      this.headerStickyHidden = this.element.querySelectorAll(
        "[data-js-header-sticky-hidden]",
      );
    }
    if (this.element.classList.contains("m-compact")) {
      this.classNames.sticked = "m-sticked-compact";
    }
    if (this.options.enableAnimatedLogo && !mediaQuery.is("xlarge")) {
      this.selectors.headerLogo = this.element.querySelector(
        "[data-js-header-logo]",
      );
    }
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.isSticky = false;
    this.state.isDisabled = false;
    this.state.wasDisabled = false;
    this.state.searchOpened = false;
    this.state.hamburgerOpened = false;
    this.state.hasSentinel = false;
    this.state.lastScrollTop = undefined;
    this.state.isHeaderTransparent = false;
    this.state.isLogoAnimating = false;
    this.state.isKeyboardControl = false;
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    if (this.options.enableSticky) {
      Event.on("contentPanel.transition.ended", this.updateHeight, this);
    }
    if (this.selectors.simpleSearchCta) {
      on(
        "click",
        this.selectors.simpleSearchCta,
        this.toggleSearchBar.bind(this),
      );
    }
    on(
      "keydown",
      this.selectors.searchContainer,
      this.onKeyboardControl.bind(this),
    );
    on(
      "simplesearch.results.show",
      this.element,
      this.onOpenSearchSuggestions.bind(this),
    );
    on(
      "simplesearch.results.hide",
      this.element,
      this.onCloseSearchSuggestion.bind(this),
    );
    on(
      "simplesearch.overlay.closed",
      this.element,
      this.onSearchOverlayClosed.bind(this),
    );
    Event.on("simplesearch.toggle", this.toggleSearchBar, this);
    Event.on("simplesearch.close", this.onSearchClose, this);
    Event.on("hamburger.toggle", this.toggleHamburger, this);
    Event.on("sticky.stick", this.checkHeaderHeight, this);
    Event.on("contentPanel.hide", this.checkHeaderHeight, this);
    Event.on("global.close", this.onGlobalClose, this);
    if (this.state.isHeaderTransparent) {
      Event.on("header.focused", this.headerFocused, this);
      Event.on("header.unfocused", this.headerUnfocused, this);
    }
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    this.state.isHeaderTransparent =
      document.body.classList.contains("header-transparent");
    if (this.options.enableSticky) {
      super.saveOriginalTabIndex();
      this.addHeaderObserver();
      this.addSentinel();
    }
    if (this.options.enableAnimatedLogo && !mediaQuery.is("xlarge")) {
      this.animateLogo();
    }
  }
  /**
   * Header focused
   * Add class m-focused to header
   */
  headerFocused() {
    if (!this.element.classList.contains(this.classNames.focused)) {
      this.element.classList.add(this.classNames.focused);
    }
  }
  /**
   * Header unfocused
   * Remove class m-focused from header
   */
  headerUnfocused() {
    if (this.element.classList.contains(this.classNames.focused)) {
      this.element.classList.remove(this.classNames.focused);
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
        if (
          !event.shiftKey &&
          event.target.getAttribute("data-js-focus-order") === "last"
        ) {
          if (this.isElementFocusable(this.triggerElement)) {
            event.preventDefault();
            this.trapFocusElement(
              this.triggerElement,
              this.onTriggerElementKeydown.bind(this),
            );
          } else {
            this.closeSearchBar();
          }
        }
        if (
          event.shiftKey &&
          event.target.getAttribute("data-js-focus-order") === "first"
        ) {
          // 'TAB' + shift key
          if (this.isElementFocusable(this.triggerElement)) {
            event.preventDefault();
            this.trapFocusElement(
              this.triggerElement,
              this.onTriggerElementKeydown.bind(this),
            );
          } else {
            this.closeSearchBar();
          }
        }
        break;
      case "Escape": // 'Escape' key
        this.closeSearchBar();
        this.triggerElement.focus();
        break;
      default:
        break;
    }
  }
  /**
   * On keydown event handler for trigger element (trap focus)
   * @param {Object} event Event object
   */
  onTriggerElementKeydown(event) {
    switch (event.key) {
      case "Tab": {
        event.preventDefault();
        const focusableElements = this.getFocusableElements(
          this.selectors.searchContainer,
        );
        if (!event.shiftKey) {
          const firstFocusable =
            focusableElements.find(
              (el) => el.getAttribute("data-js-focus-order") === "first",
            ) || focusableElements[0];
          if (firstFocusable) {
            firstFocusable.focus();
          }
        } else {
          const lastFocusable =
            focusableElements.find(
              (el) => el.getAttribute("data-js-focus-order") === "last",
            ) || focusableElements[focusableElements.length - 1];
          if (lastFocusable) {
            lastFocusable.focus();
          }
        }
        this.untrapFocusElement(this.triggerElement);
        break;
      }
      case "Escape":
        this.closeSearchBar();
        this.untrapFocusElement(this.triggerElement);
        break;
      default:
        event.shouldStopImmediatePropagation = false;
        break;
    }
  }
  /**
   * Add intersection observer for header
   */
  addHeaderObserver() {
    this.headerObserver = new IntersectionObserver(
      (records) => {
        const record = records[0];
        // Started sticking.
        if (record.intersectionRatio < 1) {
          this.enableSticky();
        }
      },
      { threshold: [0, 1] },
    );
    if (this.selectors.anchorElement) {
      // Attach observer to the anchor where you want the sticky to start
      this.headerObserver.observe(this.selectors.anchorElement);
    }
  }
  /**
   * Broadcast height of the header
   */
  checkHeaderHeight() {
    const currentHeight = this.state.isDisabled
      ? 0
      : this.selectors.headerInner.getBoundingClientRect().height;
    if (
      (!this.options.hideOnScroll && this.options.hideElementOnScroll) ||
      this.state.wasDisabled !== this.state.isDisabled
    ) {
      Event.emit("header.updateHeight", {
        height: currentHeight,
        isSticky: !this.state.isDisabled,
      });
    }
    this.state.wasDisabled = this.state.isDisabled;
  }
  /**
   * Update height of the header
   *
   * @param {Number} height of header
   */
  updateHeight(height) {
    let headerHeight = "auto";
    // We should set the header height only when during sticky mode
    if (this.state.isSticky) {
      headerHeight = height || this.element.getBoundingClientRect().height;
    }
    this.element.style.height =
      headerHeight === "auto" ? headerHeight : `${headerHeight}px`;
    this.checkHeaderHeight();
  }
  /**
   * ToggleHamburger event handler
   *
   * @param {Boolean} isOpened Flag
   */
  toggleHamburger(isOpened) {
    this.state.hamburgerOpened = isOpened;
    if (this.state.hamburgerOpened) {
      this.element.classList.add(this.classNames.hamburgerOpened);
    } else {
      setTimeout(() => {
        this.element.classList.remove(this.classNames.hamburgerOpened);
      }, 200);
    }
  }
  /**
   * ToggleSearchBar event handler
   * @param {Object} data Data
   *  @property {HTMLElement} data.triggerElement trigger element
   */
  toggleSearchBar(data = {}) {
    this._triggerElement = data.triggerElement;
    if (mediaQuery.is("medium down") && data.isKeyboardControl) {
      this.state.isKeyboardControl = data.isKeyboardControl;
    } else {
      this.state.isKeyboardControl = isKeyboardLikeClick(data);
    }
    if (this.state.searchOpened) {
      this.closeSearchBar();
    } else {
      this.openSearchBar();
    }
  }
  /**
   * Get trigger element
   * @returns {HTMLElement} - Trigger element
   */
  get triggerElement() {
    return this._triggerElement || this.selectors.simpleSearchCta;
  }
  /**
   * Open Search Bar
   * @returns {Promise} - Promise
   */
  openSearchBar() {
    Event.emit("global.close");
    const { quickSearchOpened, animationEnter } = this.classNames;
    this.element.classList.add(quickSearchOpened);
    this.state.searchOpened = true;
    if (this.selectors.simpleSearchCta) {
      this.selectors.simpleSearchCta.setAttribute("aria-expanded", "true");
    }
    if (mediaQuery.is("xlarge")) {
      Event.emit("overlay.open", {
        /**
         * on overlay close
         */
        onClose: () => {
          trigger("simplesearch.overlay.closed", this.element, {
            bubbles: true,
          });
          trigger("simplesearch.results.hide", this.element, { bubbles: true });
        },
      });
    }
    Event.emit("hamburger.menu.close");
    Event.emit("header.search.open");
    Event.emitStateUpdate("simplesearch.state.updated", {
      searchOpened: this.state.searchOpened,
    });
    if (
      this.isElementFocusable(this.triggerElement) &&
      this.state.isKeyboardControl
    ) {
      this.trapFocusElement(
        this.triggerElement,
        this.onTriggerElementKeydown.bind(this),
      );
    }
    return animate(animationEnter, this.selectors.searchContainer).then(() => {
      if (this.selectors.simpleSearchCta) {
        const analytics = tryParseJSON(
          this.selectors.simpleSearchCta.getAttribute("data-analytics"),
        );
        if (analytics) {
          Event.emit("analytics.event", analytics);
        }
      }
    });
  }
  /**
   * Close Search Bar
   * @param {Boolean} closeImmediately - If true, close search bar immediately without animation
   * @returns {Promise} - Promise
   */
  closeSearchBar(closeImmediately = false) {
    if (!this.state.searchOpened) {
      return Promise.resolve();
    }
    const { quickSearchOpened, animationLeave } = this.classNames;
    Event.emit("overlay.close");
    const closeCallback = () => {
      Event.emit("header.search.close");
      this.state.searchOpened = false;
      Event.emitStateUpdate("simplesearch.state.updated", {
        searchOpened: this.state.searchOpened,
      });
      this.element.classList.remove(quickSearchOpened);
      if (this.selectors.simpleSearchCta) {
        this.selectors.simpleSearchCta.setAttribute("aria-expanded", "false");
      }
    };
    if (closeImmediately) {
      closeCallback();
      return Promise.resolve();
    }
    return animate(animationLeave, this.selectors.searchContainer).then(
      closeCallback,
    );
  }
  /* eslint-disable complexity */
  /**
   * Handlers to onscroll event
   */
  onScroll() {
    if (this.options.enableAnimatedLogo && !mediaQuery.is("xlarge")) {
      this.animateLogo();
    }
    if (!this.state.isSticky || this.state.hamburgerOpened) {
      return;
    }
    if (!this.options.hideOnScroll && this.options.hideElementOnScroll) {
      this.toggleHeaderWrapperOnScroll();
      return;
    }
    const currentScrollTop = window.scrollY;
    if (currentScrollTop < this.state.lastScrollTop && this.state.isDisabled) {
      this.element.classList.remove(this.classNames.disabled);
      this.element.classList.add(this.classNames.sticked);
      this.state.isDisabled = false;
    } else if (
      currentScrollTop > this.state.lastScrollTop &&
      !this.state.isDisabled
    ) {
      this.element.classList.add(this.classNames.disabled);
      this.state.isDisabled = true;
    }
    this.checkHeaderHeight();
    this.state.lastScrollTop = currentScrollTop;
  }
  /* eslint-enable complexity */
  /**
   * SearchOverlayClosed event handler
   */
  onSearchOverlayClosed() {
    this.closeSearchBar();
  }
  /**
   * on search field close handler
   * @param {Object} params Event object
   */
  onSearchClose(params) {
    this.closeSearchBar();
    if (params && params.restoreFocus) {
      this.triggerElement.focus();
    }
  }
  /**
   * Close search bar when global close event is triggered
   */
  onGlobalClose() {
    this.closeSearchBar(true);
  }
  /**
   * Open Search Suggestions
   */
  onOpenSearchSuggestions() {
    this.element.classList.add(this.classNames.searchSuggestionsOpened);
    this.state.searchSuggestionsOpened = true;
  }
  /**
   * SearchSuggestionsOverlayClosed event handler
   */
  onCloseSearchSuggestion() {
    if (this.state.searchSuggestionsOpened) {
      this.element.classList.remove(this.classNames.searchSuggestionsOpened);
      this.state.searchSuggestionsOpened = false;
    }
  }
  /**
   * Handlers to onresize event
   */
  onResize() {
    this.updateHeight();
  }
  /**
   * Enable sticked state
   */
  enableSticky() {
    if (this.state.isSticky) {
      return;
    }
    this.state.isSticky = true;
    this.updateHeight();
    if (!this.options.hideOnScroll || this.state.searchOpened) {
      this.element.classList.add(this.classNames.sticked);
    }
    this.checkHeaderHeight();
    Event.emit("header.sticky.enabled");
    Event.emit("hamburger.menu.close");
    if (mediaQuery.is("xlarge")) {
      this.setAccessibility();
    }
    if (!this.options.hideOnScroll && this.options.hideElementOnScroll) {
      this.toggleHeaderWrapperOnScroll();
    }
  }
  /**
   * Disabled sticked state
   */
  disableSticky() {
    this.state.isSticky = false;
    this.state.isDisabled = false;
    this.updateHeight("auto");
    this.element.classList.remove(this.classNames.sticked);
    this.element.classList.remove(this.classNames.disabled);
    this.checkHeaderHeight();
    Event.emit("header.sticky.disabled");
    if (mediaQuery.is("xlarge")) {
      super.resetOriginalTabIndex(true);
    }
    if (!this.options.hideOnScroll && this.options.hideElementOnScroll) {
      this.toggleHeaderWrapperOnScroll();
    }
  }
  /**
   * Toggles the header wrapper's visibility on scroll
   */
  toggleHeaderWrapperOnScroll() {
    if (this.options.hideOnScroll || !this.options.hideElementOnScroll) {
      return;
    }
    const currentScrollTop = window.scrollY || 0;
    if (currentScrollTop > this.state.lastScrollTop) {
      // Scroll down
      this.headerStickyHidden.forEach((el) => {
        el.classList.add(this.classNames.hidden);
      });
    } else if (currentScrollTop < this.state.lastScrollTop) {
      // Scroll up
      this.headerStickyHidden.forEach((el) => {
        el.classList.remove(this.classNames.hidden);
      });
    }
    this.checkHeaderHeight();
    // Update lastScrollTop after processing
    this.state.lastScrollTop = currentScrollTop;
  }
  /**
   * Animate logo on scroll
   * Adds or removes animation classes based on the scroll position.
   * Uses a state flag to prevent redundant DOM operations and manages timeouts safely.
   */
  animateLogo() {
    if (!this.selectors.headerLogo) {
      return;
    }
    const { active, hidden, animationEnter, animationLeave } = this.classNames;
    const { animatedLogoThreshold, animatedLogoDelay } = this.options;
    const { headerLogo } = this.selectors;
    const currentScrollTop = window.scrollY || 0;
    if (
      currentScrollTop > animatedLogoThreshold &&
      !this.state.isLogoAnimating
    ) {
      this.state.isLogoAnimating = true;
      headerLogo.classList.add(active);
      headerLogo.classList.remove(animationEnter);
      if (this.animationTimeout) {
        clearTimeout(this.animationTimeout);
        this.animationTimeout = null;
      }
      this.animationTimeout = setTimeout(() => {
        animate(animationLeave, headerLogo).then(() => {
          headerLogo.classList.add(hidden);
        });
      }, animatedLogoDelay || 0);
    } else if (
      currentScrollTop <= animatedLogoThreshold &&
      this.state.isLogoAnimating
    ) {
      this.state.isLogoAnimating = false;
      headerLogo.classList.remove(hidden, animationLeave);
      if (this.animationTimeout) {
        clearTimeout(this.animationTimeout);
        this.animationTimeout = null;
      }
      animate(animationEnter, headerLogo).then(() => {
        headerLogo.classList.remove(active);
      });
    }
  }
  /**
   * Adding a sentinel within the header. A sentinel is an HTMLElement placed at the initial position of the anchor
   * without that we cannot know when we disable the sticky state. That sentinel should take the same
   * height and position as the anchor
   */
  addSentinel() {
    if (this.state.hasSentinel) {
      return;
    }
    this.state.hasSentinel = true;
    this.sentinel = document.createElement("div");
    this.sentinel.classList.add("l-header__sentinel");
    if (this.selectors.anchorElement) {
      this.sentinel.style.height = `${this.selectors.anchorElement.getBoundingClientRect().height}px`;
    }
    this.element.appendChild(this.sentinel);
    this.addSentinelObserver();
  }
  /**
   * Add an observer to the sentinel
   *
   * @param {HTMLElement} sentinel Data
   */
  addSentinelObserver() {
    this.sentinelObserver = new IntersectionObserver(
      (records) => {
        const record = records[0];
        // stop sticking.
        if (record.intersectionRatio >= 1) {
          this.disableSticky();
        }
      },
      { threshold: [1] },
    );
    this.sentinelObserver.observe(this.sentinel);
  }
  /**
   * Modify tabindex in sticky header for consistent TAB navigation.
   * If user didn't use TAB navigation, move focus to sticky header
   */
  setAccessibility() {
    super.setAltTabIndex();
    if (document.activeElement === document.body) {
      this.element.focus();
    }
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    if (this.options.enableSticky) {
      if (this.sentinelObserver) {
        this.sentinelObserver.disconnect();
      }
      if (this.headerObserver) {
        this.headerObserver.disconnect();
      }
      this.updateHeight("auto");
      Event.removeListener(
        "contentPanel.transition.ended",
        this.updateHeight,
        this,
      );
    }
    off("click", this.selectors.simpleSearchCta);
    off("keydown", this.selectors.searchContainer);
    off("simplesearch.results.show", this.element);
    off("simplesearch.results.hide", this.element);
    off("simplesearch.overlay.closed", this.element);
    Event.removeListener("simplesearch.toggle", this.toggleSearchBar, this);
    Event.removeListener("simplesearch.close", this.onSearchClose, this);
    Event.removeListener("hamburger.toggle", this.toggleHamburger, this);
    Event.removeListener("sticky.stick", this.checkHeaderHeight, this);
    Event.removeListener("contentPanel.hide", this.checkHeaderHeight, this);
    Event.removeListener("global.close", this.onGlobalClose, this);
    if (this.state.isHeaderTransparent) {
      Event.removeListener("header.focused", this.headerFocused, this);
      Event.removeListener("header.unfocused", this.headerUnfocused, this);
    }
  }
}
