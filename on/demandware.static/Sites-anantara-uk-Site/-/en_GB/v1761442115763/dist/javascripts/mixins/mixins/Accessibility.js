/* eslint max-lines: ["error", {"max": 350, "skipBlankLines": true, "skipComments": true }] */
import { Mixin } from "core/mixwith";
import { deepMerge } from "toolbox/deepMerge";
import { on, off } from "toolbox/event";
import { getRelativeSelector } from "toolbox/html";
import AccessibilityService from "services/Accessibility";
const FOCUSABLE_SELECTOR_NO_TABINDEX =
  "a[href], area[href], input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex], [contentEditable=true]";
const FOCUSABLE_SELECTOR =
  'a[href]:not([tabindex^="-"]), area[href]:not([tabindex^="-"]), input:not([disabled]):not([type=hidden]):not([tabindex^="-"]), select:not([disabled]):not([tabindex^="-"]), textarea:not([disabled]):not([tabindex^="-"]), button:not([disabled]):not([tabindex^="-"]), [tabindex]:not([tabindex^="-"]), [contentEditable=true]:not([tabindex^="-"])';
/**
 * Holds Accessibility functions which are reused across components
 */
export default Mixin(
  (superclass) =>
    class extends superclass {
      /**
       * @constructor
       * @param {HTMLElement} element HTMLElement of the component
       * @param {Object} options That belongs to the component
       * @param {Object} store Store
       */
      constructor(element, options = {}, store) {
        super(
          element,
          deepMerge(
            {
              altTabindexAttribute: "data-js-alt-tabindex",
              ariaCloseTimeout: 5000,
              trackFocusedElements: false, // if true, tracks focused elements
            },
            options,
          ),
          store,
        );
      }
      /**
       * Should contain only event listeners and nothing else
       * All the event handlers should be into a separated function. No usage of anonymous function
       */
      bindEvents() {
        super.bindEvents();
        if (this.options.trackFocusedElements) {
          AccessibilityService.listen(
            "state.restore",
            this.onStateRestore,
            this,
          );
          on("focusin.lastState", this.element, this.onFocusIn.bind(this));
          on("focusout.lastState", this.element, this.onFocusOut.bind(this));
        }
      }
      /**
       * Cache current focus element
       * @listens focusin.lastState
       * @param {Event} event DOM event
       */
      onFocusIn(event) {
        this._focusedChild = event.target;
      }
      /**
       * Resets current focus element
       * @listens focusout.lastState
       */
      onFocusOut() {
        this._focusedChild = null;
      }
      /**
       * Restores current compotent state (focused element)
       * @listens state.restore
       */
      onStateRestore() {
        this.restoreLastFocusState();
      }
      /**
       * Returns component key
       * @returns {String} component key
       */
      getComponentKey() {
        if (!this._componentKey) {
          this._componentKey = getRelativeSelector(this.element);
        }
        return this._componentKey;
      }
      /**
       * Save last focus state
       * @param {HTMLElement} focusedChild optional, custom focused state
       */
      saveLastFocusState(focusedChild = this._focusedChild) {
        if (focusedChild) {
          AccessibilityService.setActiveFocus(
            this.getComponentKey(),
            this.retrieveSelectorForSubElement(focusedChild),
          );
        }
      }
      /**
       * Return selector for child element
       * @param {HTMLElement} element optional, custom focused state
       * @returns {String} selector for child element
       */
      retrieveSelectorForSubElement(element) {
        return getRelativeSelector(element, this.element) || true;
      }
      /**
       * Save last scroll position
       * @param {Any} scrollPosition last scroll position for this component
       */
      saveLastScrollPosition(scrollPosition) {
        AccessibilityService.setLastScroll(
          this.getComponentKey(),
          scrollPosition,
        );
      }
      /**
       * Return last crollable position for this component
       * @returns {Any} last scroll position
       */
      getLastScrollPosition() {
        return AccessibilityService.getLastScrollByKey(this.getComponentKey());
      }
      /**
       * Save element
       * @param {HTMLElement} element component
       */
      saveElement(element) {
        AccessibilityService.saveElement(element);
      }
      /**
       * Set index of removed element
       * @param {HTMLElement} elementToRemove element that will be removed
       * @param {Array} siblings array of sibling elements including elementToRemove
       */
      setRemovedIndex(elementToRemove, siblings) {
        AccessibilityService.setRemovedIndex(
          this.getComponentKey(),
          siblings.indexOf(elementToRemove),
        );
      }
      /**
       * Restore focus after element remove (needs set index of removed before)
       * @param {Array} siblings array of sibling elements including elementToRemove
       */
      restoreFocusAfterRemove(siblings) {
        let removedIndex = AccessibilityService.getRemovedIndex(
          this.getComponentKey(),
        );
        if (Number.isInteger(removedIndex) && siblings.length) {
          removedIndex = Math.max(
            Math.min(removedIndex, siblings.length) - 1,
            0,
          );
          if (siblings[removedIndex]) {
            siblings[removedIndex].focus();
          }
          AccessibilityService.resetRemovedIndex();
        }
      }
      /**
       * Update aria
       * @param {HTMLElement} element component
       * @param {String} message text
       */
      updateAria(element, message) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        if (element) {
          element.innerHTML = message;
        }
        this.timer = setTimeout(() => {
          this.clearAria(element);
        }, this.options.ariaCloseTimeout);
      }
      /**
       * Clear aria
       * @param {HTMLElement} element component
       */
      clearAria(element) {
        if (element) {
          element.innerHTML = "";
        }
      }
      /**
       * Restore last focus state
       */
      restoreLastFocusState() {
        const selector = AccessibilityService.getActiveFocusByKey(
          this.getComponentKey(),
        );
        if (!selector) {
          return;
        }
        this._focusedChild =
          selector === true
            ? this.element
            : this.element && this.element.querySelector(selector);
        if (this._focusedChild) {
          this._focusedChild.focus();
        } else {
          this.focusOnDefaultChildElement(this.element);
        }
        AccessibilityService.resetActiveFocus();
      }
      /**
       * Focus on default child element
       * @param {HTMLElement} element DOM element
       */
      focusOnDefaultChildElement(element) {
        const focusableSelector = this.getFocusableElements(
          element,
          true,
          true,
        );
        const visibleElements = [...focusableSelector].filter(
          this.isElementVisible,
        );
        if (visibleElements.length) {
          visibleElements[0].focus();
        }
      }
      /**
       * Focus element and set a callback to be executed when the focus is trapped
       * @param {HTMLElement} element - HTML element to trap focus
       * @param {Function} callback - Callback function to execute when focus is trapped
       */
      trapFocusElement(element, callback) {
        element.focus();
        on(
          "keydown.focustrap",
          element,
          (event) => {
            event.shouldStopImmediatePropagation = true;
            callback(event);
            if (event.shouldStopImmediatePropagation) {
              event.stopImmediatePropagation();
            }
          },
          false,
        );
        on(
          "focusout.focustrap",
          element,
          () => {
            this.untrapFocusElement(element);
          },
          true,
        );
      }
      /**
       * Remove focus trap for the element
       * @param {HTMLElement} element - HTML element to trap focus
       */
      untrapFocusElement(element) {
        off("keydown.focustrap focusout.focustrap", element);
      }
      /**
       * Get list of focusable elements within a given container
       * @param {HTMLElement} container - HTML Container of the focusable elements
       * @param {Boolean} ignoreTabIndex - ignore tabindex="-1" definition used in JS logic
       * @param {Boolean} includeSelf - include container to the list of elements tested against the focusable selector
       * @returns {NodeList} - Get all the focusable elements
       */
      getFocusableElements(container, ignoreTabIndex, includeSelf) {
        if (!container) {
          return [];
        }
        const focusableSelector = ignoreTabIndex
          ? FOCUSABLE_SELECTOR_NO_TABINDEX
          : FOCUSABLE_SELECTOR;
        let elements;
        if (includeSelf) {
          elements = [
            container,
            ...container.querySelectorAll(focusableSelector),
          ].filter((el) => el.matches(focusableSelector));
        } else {
          elements = container.querySelectorAll(focusableSelector);
        }
        return [...elements].filter(this.isElementVisible);
      }
      /**
       * Check if an element is visible
       * @param {HTMLElement} element - HTML element to check
       * @returns {Boolean} - true if the element is visible, false otherwise
       */
      isElementVisible(element) {
        return (
          element.offsetParent !== null &&
          window.getComputedStyle(element).visibility !== "hidden"
        );
      }
      /**
       * Checks if an element is visibly covered by another element with higher z-index
       *
       * @param {HTMLElement} element - The element to check
       * @returns {boolean} - True if the element is visible (not covered by higher z-index elements)
       */
      isElementNotCovered(element) {
        if (!element) {
          return false;
        }
        // Get element's position and dimensions
        const rect = element.getBoundingClientRect();
        // Check the center point of the element
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        // Get the topmost element at this point
        const elementAtPoint = document.elementFromPoint(centerX, centerY);
        // If the element or one of its children is at that point, it's not covered
        return element === elementAtPoint || element.contains(elementAtPoint);
      }
      /**
       * Check if an element is focusable
       * @param {HTMLElement} element - HTML element to check
       * @returns {Boolean} - true if the element is focusable, false otherwise
       */
      isElementFocusable(element) {
        return (
          element &&
          element.matches(FOCUSABLE_SELECTOR) &&
          this.isElementVisible(element) &&
          this.isElementNotCovered(element)
        );
      }
      /**
       * Store original tabindex in data-js-original-tabindex attribute for all elements with altTabindexAttribute
       */
      saveOriginalTabIndex() {
        this.selectors.focusableContainers = this.element.querySelectorAll(
          `[${this.options.altTabindexAttribute}]`,
        );
        this.selectors.focusableContainers.forEach((container) => {
          this.getFocusableElements(container).forEach((element) => {
            if (element.hasAttribute("tabindex")) {
              element.setAttribute(
                "data-js-original-tabindex",
                element.getAttribute("tabindex"),
              );
            }
          });
        });
      }
      /**
       * Modify tabindex property for consistent TAB navigation in alternative layout (i.e. sticky state).
       * altTabindexAttribute value on container element defines the tabindex for all child focusable elements.
       */
      setAltTabIndex() {
        this.selectors.focusableContainers.forEach((container) => {
          const tabindex = container.getAttribute(
            this.options.altTabindexAttribute,
          );
          this.getFocusableElements(container).forEach((element) => {
            if (!element.hasAttribute("data-skip-focus")) {
              element.setAttribute("tabindex", tabindex);
            }
          });
        });
      }
      /**
       * Restore original tabindex property
       *
       * @param {Boolean} ignoreTabIndex - ignore tabindex="-1" definition used in JS logic
       */
      resetOriginalTabIndex(ignoreTabIndex) {
        this.selectors.focusableContainers.forEach((container) => {
          this.getFocusableElements(container, ignoreTabIndex).forEach(
            (element) => {
              if (element.hasAttribute("data-js-original-tabindex")) {
                element.setAttribute(
                  "tabindex",
                  element.getAttribute("data-js-original-tabindex"),
                );
              } else {
                element.removeAttribute("tabindex");
              }
            },
          );
        });
      }
      /**
       * Set data-js-focus-order to the first and last focusable element
       * Useful for tabs keyboard trap
       *
       * @param {HTMLElement} element - list of elements
       * @param {Boolean} ignoreTabIndex - ignore tabindex="-1" definition used in JS logic
       */
      setFocusedOrder(element, ignoreTabIndex) {
        this.getFocusableElements(element, ignoreTabIndex).forEach(
          (item, i, arr) => {
            if (i === 0) {
              item.setAttribute("data-js-focus-order", "first");
            } else if (i === arr.length - 1) {
              item.setAttribute("data-js-focus-order", "last");
            }
          },
        );
      }
      /**
       * Remove data-js-focus-order attribute
       *
       * @param {HTMLElement} element - list of elements
       */
      resetFocusedOrder(element) {
        this.getFocusableElements(element).forEach((item) => {
          if (item.hasAttribute("data-js-focus-order")) {
            item.removeAttribute("data-js-focus-order");
          }
        });
      }
      /**
       * Keyboard trap for Tabs event handler
       * Allows to navigate between tab elements with arrow keys and move the focus out of tabs with a TAB key.
       *
       * @param {Object} event Event object
       * @param {Object} data - contain active index element, selected element and nodes list
       * @returns {Number} - index of focused element
       */
      setTabKeyboardTrap(event, data) {
        if (event.key === "Tab") {
          data.index = Number(data.element.getAttribute("data-js-index"));
        } else if (["ArrowRight", "ArrowDown"].indexOf(event.key) !== -1) {
          event.preventDefault();
          data.index = this.getNextIndex(data.index + 1, data.nodes);
        } else if (["ArrowLeft", "ArrowUp"].indexOf(event.key) !== -1) {
          event.preventDefault();
          data.index = this.getNextIndex(data.index - 1, data.nodes);
        }
        return data.index;
      }
      /**
       * Get index of next element
       *
       * @param {Number} index - index, which should be focused
       * @param {NodeList} nodes - list with focused elements
       * @returns {Number} - index of focused element
       */
      getNextIndex(index, nodes) {
        const focusedElement = this.getNextFocusedElement(index, nodes);
        focusedElement.focus();
        return Number(focusedElement.getAttribute("data-js-index"));
      }
      /**
       * Get next focused element
       * Check list of focusable elements boundaries and return first or last element if we try to go beyond
       * Useful when implementing circular navigation with keyboard
       *
       * @param {Number} currentIndex - index of focused element
       * @param {NodeList} nodes list of focusable elements
       * @returns {HTMLElement} - next focused element
       */
      getNextFocusedElement(currentIndex, nodes) {
        if (currentIndex >= nodes.length) {
          currentIndex = 0;
        } else if (currentIndex < 0) {
          currentIndex = nodes.length - 1;
        }
        return nodes[currentIndex];
      }
      /**
       * Mask the main page from screen readers.
       * Useful for elements with a modal window behaviour.
       */
      maskPageFromSR() {
        this.selectors.page = document.querySelector("[data-js-app]");
        if (this.selectors.page) {
          this.selectors.page.setAttribute("aria-hidden", "true");
        }
      }
      /**
       * Remove main page masking and restore the focus
       */
      unmaskPageFromSR() {
        if (this.selectors.page) {
          this.selectors.page.removeAttribute("aria-hidden");
        }
      }
      /**
       * Init modal window pattern
       * Mask the main page from screen readers and move focus to the modal window
       * @param {HTMLElement} element - active element, staying in user's focus
       * @param {HTMLElement} focusReturnElement - the element that should gain the focus on modal close.
       *                                         If empty, the focus will be returned to the element, which triggered the modal
       * @param {Boolean} skipMaskPageFromSR - skip masking from SR
       */
      // eslint-disable-next-line max-params, require-jsdoc
      initModalPattern(element, focusReturnElement, skipMaskPageFromSR) {
        const anchorElement = element.querySelector("[data-js-anchor]");
        if (!skipMaskPageFromSR) {
          this.maskPageFromSR();
        }
        // store active element caller
        if (!this.selectors.caller) {
          if (focusReturnElement) {
            this.selectors.caller = focusReturnElement;
          } else {
            this.selectors.caller = document.activeElement;
          }
        }
        if (
          anchorElement &&
          !anchorElement.disabled &&
          anchorElement.offsetParent !== null
        ) {
          anchorElement.focus();
        } else {
          // set tabindex=-1 on the active element so it can get :focus.
          element.setAttribute("tabindex", "-1");
          // since the element is non-focusable, we don't need a visible outline around it
          element.style.outline = "none";
          element.setAttribute("data-js-anchor", "");
          element.focus();
        }
      }
      /**
       * Destroy modal window pattern
       * Remove main page masking and restore the focus
       * @param {Boolean} skipMaskPageFromSR - skip masking from SR
       */
      destroyModalPattern(skipMaskPageFromSR) {
        if (!skipMaskPageFromSR) {
          this.unmaskPageFromSR();
        }
        // restore focus on caller element
        if (this.selectors.caller) {
          this.selectors.caller.focus();
          this.selectors.caller = null;
        }
      }
      /**
       * Update status message
       * @param {String|Boolean} status - new status, if a value is boolean then default processing or finished message uses
       */
      updateStatusMessage(status) {
        this.selectors.statusMessage = document.querySelector(
          "[data-js-global-status-message]",
        );
        if (this.selectors.statusMessage) {
          if (typeof status === "boolean") {
            status = this.selectors.statusMessage.getAttribute(
              status ? "data-processing-text" : "data-finished-text",
            );
          }
          if (this.statusMessageTimer) {
            clearTimeout(this.statusMessageTimer);
          }
          const { statusMessage } = this.selectors;
          statusMessage.innerHTML = status;
          this.statusMessageTimer = setTimeout(() => {
            this.clearAria(statusMessage);
          }, this.options.ariaCloseTimeout);
        }
      }
      /**
       * Clear status message
       */
      clearStatusMessage() {
        this.selectors.statusMessage = document.querySelector(
          "[data-js-global-status-message]",
        );
        this.clearAria(this.selectors.statusMessage);
      }
      /**
       * Focus trap
       * Return focus to the first/last element if it goes outside
       *
       * @param {HTMLElement} element - active element, staying in user's focus
       * @param {Event} event - DOM event
       */
      focusTrap(element, event) {
        // Find first and last focusable elements in modal window to trap focus
        const focusableElements = this.getFocusableElements(element);
        const firstElement = focusableElements[0];
        if (
          focusableElements &&
          focusableElements.length === 1 &&
          (event.target === firstElement || event.shiftKey)
        ) {
          event.preventDefault();
          return;
        }
        this.selectors.firstFocusable =
          element.querySelector('[data-js-focus-order="first"]') ||
          firstElement;
        this.selectors.lastFocusable =
          element.querySelector('[data-js-focus-order="last"]') ||
          focusableElements[focusableElements.length - 1];
        this.tabNavigate(event);
      }
      /* eslint-disable complexity */
      /**
       * TAB navigation
       * When navigating forward (TAB) return focus to the first focusable element if last focusable element is selected
       * OR one of radio button elements is selected (and radio group is the last focusable element in a modal)
       * When navigating backwards (SHIFT + TAB) return focus to the last focusable element if first focusable element is selected
       * OR one of radio button elements is selected (and radio group is the first focusable element in a modal)
       * @param {Object} event Event object
       */
      tabNavigate(event) {
        const isForward = !event.shiftKey;
        const isFirstElement =
          event.target.getAttribute("data-js-focus-order") === "first" ||
          event.target === this.selectors.firstFocusable;
        const focusableTrapElement = isForward
          ? this.selectors.lastFocusable
          : this.selectors.firstFocusable;
        let focusableNextElement = isForward
          ? this.selectors.firstFocusable
          : this.selectors.lastFocusable;
        if (
          !isForward &&
          (isFirstElement || event.target.hasAttribute("data-js-anchor"))
        ) {
          focusableNextElement = this.selectors.lastFocusable;
        } else if (focusableTrapElement.getAttribute("type") === "radio") {
          if (
            event.target.getAttribute("name") !==
            focusableTrapElement.getAttribute("name")
          ) {
            return; // Do nothing
          }
        } else if (event.target !== focusableTrapElement) {
          return; // Do nothing
        }
        // Apply keyboard trap
        event.preventDefault();
        focusableNextElement.focus();
      }
      /* eslint-enable complexity */
      /**
       * Destroy is called automatically after the component is being removed from the DOM
       * You must always destroy the listeners attached to an element to avoid any memory leaks
       */
      destroy() {
        off(this.element);
        if (this.options.trackFocusedElements) {
          AccessibilityService.unlisten("state.restore", this);
        }
      }
    },
);
