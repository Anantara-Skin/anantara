/* eslint complexity: ["error", {"max": 11 }] */
/* eslint max-lines: ["error", {"max": 350, "skipBlankLines": true, "skipComments": true }] */
import Component from "core/Component";
import { mix } from "core/mixwith";
import { on, off, trigger } from "toolbox/event";
import { Event } from "services/EventEmitter";
import { deepMerge } from "toolbox/deepMerge";
import Accessibility from "mixins/Accessibility";
import AnalyticsMixin from "mixins/Analytics";
import { transition } from "toolbox/animate";
import { getHash } from "toolbox/location";
import { replaceState } from "services/History";
import { scrollTo } from "toolbox/scroll";
/**
 * This is a description of the Accordion constructor function.
 * @class
 * @classdesc This is a description of the Accordion class.
 * @extends Component
 */
export default class Accordion extends mix(Component).with(
  Accessibility,
  AnalyticsMixin,
) {
  /**
   * Constructor of the class that mainly merge the options of the components
   *
   * @param {HTMLElement} element HTMLElement of the component
   * @param {Object} options That belongs to the component
   */
  constructor(element, options = {}) {
    super(
      element,
      deepMerge(
        {
          classNames: {
            expanded: "m-expanded",
            expandedOnLoad: "m-expanded-on-load",
            active: "m-active",
            initialized: "m-initialized",
            disabled: "m-disabled",
          },
          scrollTopOffset: 200, // Offset for header height
          isDynamicContent: false,
          multiExpand: false, // Allow the accordion to have multiple open panes.
          mutationObserverOptions: {
            subtree: true,
            childList: true,
            characterData: true,
            characterDataOldValue: true,
          },
          accordionHashID: null, // Uses document.location.hash id in order to detect and activate last opened item
          focusOnFirstChild: false, // Move focus on first child element (input, [data-js-anchor])
        },
        options,
      ),
    );
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    this.dataSelector = {
      control: "[data-js-accordion-control]",
      item: "[data-js-accordion-item]",
      container: "[data-js-accordion-container]",
    };
    this.selectors.items = this.element.querySelectorAll(
      this.dataSelector.item,
    );
    this.selectors.containers = this.element.querySelectorAll(
      this.dataSelector.container,
    );
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    on("click", this.element, this.onControlClick.bind(this));
    on("keydown", this.element, this.onControlKeypress.bind(this));
    on(
      "component.ready lazyloaded",
      this.selectors.containers,
      this.onComponentReady.bind(this),
    );
    on("accordion.open", this.element, this.onAccordionOpen.bind(this));
    on("accordion.close", this.element, this.onAccordionClose.bind(this));
    on("accordion.update", this.element, this.onAccordionUpdate.bind(this));
    if (this.options.accordionHashID) {
      on(
        `hashchange.accordion-${this.id}`,
        window,
        this.onHashChange.bind(this),
      );
    }
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.activeItems = Array.from(
      this.element.parentElement.querySelectorAll(
        `${this.dataSelector.item}.${this.options.classNames.expanded}`,
      ),
    );
    this.state.destroy = false;
    this.state.isItemSwitching = false;
    this.mutationObservers = [];
    if (this.options.accordionHashID) {
      const accordionToReopen = this.getAccordionToReopen();
      const accordionItem =
        accordionToReopen && accordionToReopen.closest(this.dataSelector.item);
      if (accordionItem) {
        this.open([accordionItem]);
      }
    }
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    this.selectors.containers.forEach((item) => {
      item.classList.add(this.options.classNames.initialized);
      if (!item.hasAttribute("aria-hidden")) {
        const accordionItem = item.closest(this.dataSelector.item);
        this.updateAccordionItem(accordionItem, false);
      }
      this.setAccessibility(item);
      if (this.options.isDynamicContent) {
        this.initMutationObserver(item);
      }
    });
    this.open(this.state.activeItems, true, true);
    trigger("accordion.initialised", this.element, { bubbles: true });
  }
  /**
   * Control Click event handler
   *
   * @param {Object} e Event object
   */
  onControlClick(e) {
    const target = e.target.closest(this.dataSelector.control);
    if (this.state.destroy || !target) {
      return;
    }
    const targetItem = target.closest(this.dataSelector.item);
    if (
      targetItem &&
      targetItem.classList.contains(this.options.classNames.disabled)
    ) {
      return;
    }
    // Accordion works only in case the case is not a link
    if (target.nodeName !== "A") {
      // The accordion control has to be the direct child of the accordion item
      const accordionItem = target.closest(this.dataSelector.item);
      if (
        accordionItem.classList.contains(this.options.classNames.expandedOnLoad)
      ) {
        accordionItem.classList.remove(this.options.classNames.expandedOnLoad);
      }
      if (accordionItem.classList.contains(this.options.classNames.expanded)) {
        this.close(accordionItem);
      } else {
        if (this.options.accordionHashID) {
          replaceState(
            {},
            "",
            `#${this.options.accordionHashID}=${target.getAttribute("data-titlehash") || target.id}`,
          );
        }
        this.open([accordionItem]);
      }
      // added to prevent control parent accordion
      e.stopPropagation();
    }
  }
  /**
   * Function which is 'hashchange' handler
   * @param {EventObject} e - event object
   */
  onHashChange() {
    const accordionToReopen = this.getAccordionToReopen();
    const accordionItem =
      accordionToReopen && accordionToReopen.closest(this.dataSelector.item);
    if (accordionItem) {
      if (accordionItem.classList.contains(this.options.classNames.expanded)) {
        return;
      }
      if (this.options.accordionHashID) {
        replaceState(
          {},
          "",
          `#${this.options.accordionHashID}=${accordionToReopen.getAttribute("data-titlehash") || accordionToReopen.id}`,
        );
      }
      this.open([accordionItem]);
    }
  }
  /**
   * Uses document.location.hash in order to detect and activate last opened item
   *
   * @returns {Boolean|HTMLElement} - return false or HTML element
   */
  getAccordionToReopen() {
    const accordionItem = decodeURIComponent(
      getHash(`${this.options.accordionHashID}`),
    );
    if (accordionItem) {
      return this.element.querySelector(`[data-titlehash="${accordionItem}"]`);
    }
    return false;
  }
  /**
   * Control Keypress event handler
   *
   * @param {Object} e Event object
   */
  onControlKeypress(e) {
    if (this.state.destroy) {
      return;
    }
    const clickedElement = e.target;
    if (clickedElement.matches(this.dataSelector.control)) {
      if (["Enter", " "].indexOf(e.key) !== -1) {
        e.preventDefault();
        this.onControlClick(e);
        // move focus on default child element
        if (this.options.focusOnFirstChild) {
          this.focusOnFirstChild(clickedElement);
        }
      }
    }
  }
  /**
   * Focus on the first child element of the accordion item
   * @param {HTMLElement} element Accordion item element
   */
  focusOnFirstChild(element) {
    const accordionItem = element.closest(this.dataSelector.item);
    if (this.state.activeItems.includes(accordionItem)) {
      transition(accordionItem, () => {
        this.focusOnDefaultChildElement(
          accordionItem.querySelector(this.dataSelector.container),
        );
      });
    }
  }
  /**
   * Set accessibility attributes
   * Add tabindex='-1' on all focusable elements inside invisible containers to block gaining focus (i.e. with Tab key).
   * Remove this attributes if the container becomes visible.
   * Visibility class is handled by Swiper,
   *
   * @param {HTMLElement} container Container element
   */
  setAccessibility(container) {
    if (!container) {
      return;
    }
    const focusableElements = this.getFocusableElements(container, true);
    if (container.getAttribute("aria-hidden") === "false") {
      focusableElements.forEach((element) => {
        element.setAttribute("tabindex", "0");
      });
    } else {
      focusableElements.forEach((element) => {
        element.setAttribute("tabindex", "-1");
      });
    }
  }
  /**
   * Open an accordion item
   * @param {Array} accordionItems array of accordion item elements to be opened
   * @param {Boolean} skipAnalytics if send analytics should be skipped or not
   * @param {Boolean} skipAnchoring - set to true if anchoring/scrolling should be omitted
   */
  open(accordionItems, skipAnalytics, skipAnchoring) {
    accordionItems.forEach((accordionItem) => {
      const level = accordionItem.dataset.jsAccordionItem;
      const container = accordionItem.querySelector(
        this.dataSelector.container,
      );
      if (this.state.activeItems.length && !this.options.multiExpand) {
        this.state.activeItems.forEach((item) => {
          if (level === item.dataset.jsAccordionItem) {
            if (!skipAnchoring) {
              this.state.isItemSwitching = true;
            }
            this.close(item);
          }
        });
      }
      this.updateAccordionItem(accordionItem, true);
      this.state.activeItems.push(accordionItem);
      this.setAccessibility(container);
      setTimeout(() => {
        this._initEventAnalytics(accordionItem, true);
        if (this.analytics && !skipAnalytics) {
          this.sendAnalytics(this.analytics);
        }
      }, 0);
      trigger("accordion.opened", accordionItem, {
        bubbles: true,
        item: accordionItem,
      });
    });
  }
  /**
   * Update Accordion item element
   * @param {HTMLElement} accordionItem Accordion item element
   * @param {Boolean} expanded Flag showing that accordion item element have to be expanded or collapsed
   */
  updateAccordionItem(accordionItem, expanded) {
    const container = accordionItem.querySelector(this.dataSelector.container);
    const parentContainer = accordionItem.closest(this.dataSelector.container);
    if (!container) {
      return;
    }
    this.updateTitle(accordionItem);
    this.updateControl(accordionItem, expanded);
    container.setAttribute("aria-hidden", !expanded);
    if (expanded) {
      this.setActiveClass(container);
      accordionItem.classList.add(this.options.classNames.expanded);
    } else {
      accordionItem.classList.remove(this.options.classNames.expanded);
    }
    this.updateContainersHeight(container, parentContainer, expanded);
  }
  /**
   * Set active class when accordion is opening/closing
   * @param {HTMLElement} element container element
   */
  setActiveClass(element) {
    element.classList.add(this.options.classNames.active);
    transition(element, () => {
      element.classList.remove(this.options.classNames.active);
      if (!this.options.multiExpand && this.state.isItemSwitching === true) {
        const elementPosition = element.getBoundingClientRect();
        if (elementPosition.top < 0) {
          scrollTo(element, this.options.scrollTopOffset, "vertical");
        }
        this.state.isItemSwitching = false;
      }
      // Update focus highlighter at the end of accordion animation
      if (
        element
          .closest(this.dataSelector.item)
          .querySelector(this.dataSelector.control) === document.activeElement
      ) {
        Event.emit("highlighter.update");
      }
    });
  }
  /**
   * Update the title based on the data-js-title attribute
   * @param {HTMLElement} element Accordion control element
   */
  updateTitle(element) {
    const control = element.querySelector(this.dataSelector.control);
    if (control) {
      const title = control.querySelector("[data-js-title]");
      if (title) {
        const newTitle = title.getAttribute("data-js-title");
        title.setAttribute("data-js-title", title.innerText);
        title.innerText = newTitle;
      }
    }
  }
  /**
   * Update control attributes
   * @param {HTMLElement} element Accordion item element
   * @param {Boolean} expanded Flag showing that accordion item element have to be expanded or collapsed
   */
  updateControl(element, expanded) {
    const control = element.querySelector(this.dataSelector.control);
    control.setAttribute("aria-expanded", expanded);
    this.setStateClass(expanded, control);
  }
  /**
   * Uodate accordion class
   * @param {Boolean} isExpanded Flag showing that accordion item element have to be expanded or collapsed
   * @param {HTMLElement} control Accordion control item element
   */
  setStateClass(isExpanded, control) {
    const expandedButtonClass =
      control && control.getAttribute("data-js-title-cssclass-expanded");
    const collapsedButtonClass =
      control && control.getAttribute("data-js-title-cssclass-collapsed");
    if (expandedButtonClass) {
      expandedButtonClass.split(" ").forEach((className) => {
        control.classList.toggle(className, isExpanded);
      });
    }
    if (collapsedButtonClass) {
      collapsedButtonClass.split(" ").forEach((className) => {
        control.classList.toggle(className, !isExpanded);
      });
    }
  }
  /**
   * Update container
   * @param {HTMLElement} container Container element
   * @param {HTMLElement} parentContainer Parent container element
   * @param {Boolean} expanded Flag showing that accordion item element have to be expanded or collapsed
   */
  updateContainersHeight(container, parentContainer, expanded) {
    container.style.maxHeight = null;
    const containerScrollHeight = container.scrollHeight + 1; // add 1 px to avoid issues with rounding to integer
    container.style.maxHeight =
      container.getAttribute("aria-hidden") !== "true"
        ? `${containerScrollHeight}px`
        : "0";
    container.setAttribute("data-js-scroll-height", containerScrollHeight);
    if (parentContainer) {
      transition(container, () => {
        let parentContainerScrollHeight = Number(
          parentContainer.getAttribute("data-js-scroll-height"),
        );
        if (!parentContainerScrollHeight) {
          parentContainerScrollHeight = parentContainer.scrollHeight;
        }
        const parentContainerMaxHeight = expanded
          ? parentContainerScrollHeight + containerScrollHeight
          : parentContainerScrollHeight - containerScrollHeight;
        parentContainer.setAttribute(
          "data-js-scroll-height",
          parentContainerMaxHeight,
        );
        if (container.getAttribute("aria-hidden") !== "true") {
          parentContainer.style.maxHeight = `${parentContainerMaxHeight}px`;
        }
      });
    }
  }
  /**
   * Trigger height update
   */
  onAccordionUpdate() {
    this.selectors.containers.forEach((container) => {
      const accordionItem = container.closest(this.dataSelector.item);
      if (container.getAttribute("aria-hidden") === "false") {
        this.updateContainersHeight(container, accordionItem, true);
      }
    });
  }
  /**
   * Internal components initialisation event handler
   *
   * @param {Object} e Event object
   */
  onComponentReady(e) {
    const { target } = e;
    const container = target.closest(this.dataSelector.container);
    const accordionItem = container.closest(this.dataSelector.item);
    if (!accordionItem.classList.contains(this.options.classNames.expanded)) {
      return;
    }
    const parentContainer = container.parentNode.closest(
      this.dataSelector.container,
    );
    container.removeAttribute("data-js-scroll-height");
    if (parentContainer) {
      parentContainer.removeAttribute("data-js-scroll-height");
    }
    this.updateContainersHeight(container, parentContainer, true);
  }
  /**
   * Accordion open event handler
   *
   * @param {Object} e Event object
   */
  onAccordionOpen(e) {
    if (this.state.destroy) {
      return;
    }
    const { expandedItems } = e.detail;
    this.open(expandedItems);
  }
  /**
   * Accordion close event handler
   */
  onAccordionClose() {
    this.state.activeItems.forEach((item) => {
      this.close(item);
    });
  }
  /**
   * Close an accordion item
   * @param {HTMLElement} accordionItem accordion item element to be closed
   */
  close(accordionItem) {
    const container = accordionItem.querySelector(this.dataSelector.container);
    this.updateAccordionItem(accordionItem, false);
    this.state.activeItems = this.state.activeItems.filter(
      (item) => item !== accordionItem,
    );
    this.setAccessibility(container);
    trigger("accordion.closed", accordionItem, {
      bubbles: true,
      item: accordionItem,
    });
  }
  /**
   * Initialize a mutation observer for the accordion item
   * @param {HTMLElement} item accordion item
   */
  initMutationObserver(item) {
    const mutationObserver = new MutationObserver(this.onMutation.bind(item));
    mutationObserver.observe(item, this.options.mutationObserverOptions);
    this.mutationObservers.push(mutationObserver);
  }
  /**
   * mutation observer handler
   */
  onMutation() {
    this.style.maxHeight = null;
    this.style.maxHeight =
      this.getAttribute("aria-hidden") !== "true"
        ? `${this.scrollHeight}px`
        : "0";
    this.setAttribute("data-js-scroll-height", this.scrollHeight);
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    if (this.options.isDynamicContent) {
      this.mutationObservers.forEach((mutationObserver) => {
        mutationObserver.disconnect();
      });
    }
    off("component.ready lazyloaded", this.selectors.containers);
    off("accordion.open", this.element);
    off("accordion.close", this.element);
    off("accordion.update", this.element);
    if (this.options.accordionHashID) {
      off(`hashchange.accordion-${this.id}`, window);
    }
    off(this.selectors.containers);
    off(this.element);
  }
}
