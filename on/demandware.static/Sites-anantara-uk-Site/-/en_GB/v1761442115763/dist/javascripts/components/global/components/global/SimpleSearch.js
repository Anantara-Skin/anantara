/* eslint max-lines: ["error", {"max": 350, "skipBlankLines": true, "skipComments": true }] */
import Component from "core/Component";
import { Event } from "services/EventEmitter";
import { debounce } from "toolbox/debounce";
import { ajax } from "toolbox/ajax";
import { on, off, trigger } from "toolbox/event";
import { deepMerge } from "toolbox/deepMerge";
import { mediaQuery } from "toolbox/mediaQuery";
import { mix } from "core/mixwith";
import AnalyticsMixin from "mixins/Analytics";
import Accessibility from "mixins/Accessibility";
import LoaderMixin from "mixins/Loader";
/**
 * This is a description of the SimpleSearch constructor function.
 * @class
 * @classdesc This is a description of the SimpleSearch class.
 * @extends Component
 */
export default class SimpleSearch extends mix(Component).with(
  AnalyticsMixin,
  Accessibility,
  LoaderMixin,
) {
  /**
   * @typedef {Object} optionsObject
   * @property {object} classNames - CSS classes applied to the component
   * @property {string} classNames.resultsActive - CSS class applied to search form when search suggestions panel is active
   * @property {string} classNames.active - CSS class applied to search form when it is active
   * @property {string} classNames.suggestionActive - CSS class applied to selected search term
   * @property {string} classNames.hidden - CSS class applied to hidden elements
   * @property {string} apiUrl - Search API URL
   * @property {number} suggestionsMinChars - minimal amount of chars entered to show suggestions
   * @property {string} selectedSuggestionId - ID applied to selected search term
   * @property {boolean} useOverlay - use fade overlay when search suggestions are opened
   * @property {boolean} showClearButton - enable clear button, which will be shown instead of search icon if field is not empty
   * @property {boolean} disableFullScreen - disable full screen behavior on mobile
   */
  /**
   * @constructor
   * @param {object} element - DOM node of component
   * @param {optionsObject} options - Component Options
   */
  constructor(element, options = {}) {
    super(
      element,
      deepMerge(
        {
          apiUrl: "",
          suggestionsMinChars: 3,
          selectedSuggestionId: "searchSelectedSuggestion",
          useOverlay: false,
          showClearButton: false,
          disableFullScreen: false,
          autofocus: true,
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
      resultsActive: "m-results-active",
      active: "m-active",
      suggestionActive: "m-active",
      hidden: "h-hidden",
    };
    this.selectors.searchField = this.element.querySelector(
      "[data-js-search-input]",
    );
    this.selectors.resultsContainer = this.element.querySelector(
      "[data-js-search-results]",
    );
    this.selectors.contentContainer = this.element.querySelector(
      "[data-js-search-content]",
    );
    this.selectors.resultsGroup = this.element.querySelector(
      "[data-js-search-results-group]",
    );
    this.selectors.closeButton = this.element.querySelector(
      "[data-js-search-close]",
    );
    this.selectors.clearButton = this.element.querySelector(
      "[data-js-search-clear]",
    );
    this.selectors.submitButton = this.element.querySelector(
      "[data-js-search-submit]",
    );
    this.selectors.searchAria = this.element.querySelector(
      "[data-js-header-search-aria]",
    );
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.isResultOpen = false;
    this.state.isActive = false;
    this.state.contentLoaded = false;
    this.state.isFirstTab = false;
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    if (this.options.autofocus) {
      this.selectors.searchField.focus();
    }
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    const { searchField, closeButton, clearButton } = this.selectors;
    if (this.options.apiUrl) {
      on(
        "keyup",
        searchField,
        debounce((e) => this.onSearchKeyUp(e), 300),
      );
      on(
        "focus",
        searchField,
        debounce((e) => this.onSearchFocus(e), 300),
      );
      on("keydown", searchField, this.onSearchKeydown.bind(this));
    }
    if (closeButton) {
      on("click", closeButton, this.onClose.bind(this));
    }
    if (this.options.showClearButton) {
      on("click", clearButton, this.onClear.bind(this));
    }
    on("click", this.selectors.submitButton, this.onSubmit.bind(this));
    Event.on("header.search.open", this.onOpen, this);
    Event.on("header.search.close", this.onReset, this);
  }
  /**
   * Submit button click event handler
   * @param {Object} e DOM event object
   */
  onSubmit(e) {
    if (!this.selectors.searchField.value.trim().length) {
      e.preventDefault();
      this.onClose();
    }
  }
  /**
   * Set search panel active
   */
  onOpen() {
    this.state.isActive = true;
    this.element.classList.add(this.classes.active);
    this.focus();
    if (
      !this.options.disableFullScreen &&
      !mediaQuery.is("large") &&
      !mediaQuery.is("xlarge")
    ) {
      // Prevent the page to scroll when full screen search is opened
      this.state.documentScrollY = `${window.scrollY}px`;
      Event.emit("full.screen.absolute.enabled", {
        onEnable: () => {
          this.element.scrollIntoView(true);
        },
      });
    }
    if (!this.state.contentLoaded) {
      ajax(this.options.contentUrl)
        .then(this.onContentSuccess.bind(this))
        .then(() => {
          this.setFocusedOrder(this.element);
        })
        .catch(() => {});
    } else {
      this.setFocusedOrder(this.element);
    }
  }
  /**
   * Default content success load callback
   * @param {String} response html content
   */
  onContentSuccess(response) {
    this.selectors.contentContainer.innerHTML = response || "";
    this.state.contentLoaded = true;
    this.selectors.contentContainer
      .querySelectorAll("script")
      .forEach((script) => {
        const srcScript = document.createElement("script");
        srcScript.text = script.innerHTML;
        srcScript.async = script.async;
        srcScript.defer = script.defer;
        srcScript.type = script.type;
        // remove initial script object
        script.remove();
        this.selectors.contentContainer.appendChild(srcScript);
      });
  }
  /**
   * Reset search panel state
   */
  onReset() {
    this.state.isActive = false;
    this.setFieldValue("");
    this.selectors.searchField.removeAttribute("aria-activedescendant");
    this.selectors.resultsContainer.innerHTML = "";
    this.element.classList.remove(this.classes.active);
    this.hideResults();
    if (this.options.showClearButton) {
      this.hideClearButton();
    }
    if (!this.options.disableFullScreen && !mediaQuery.is("xlarge")) {
      Event.emit("full.screen.absolute.disabled", true);
      // restore the scroll top to avoid page jump to the top of the screen
      if (this.state.documentScrollY) {
        window.scrollTo(0, parseInt(this.state.documentScrollY || "0", 10));
      }
    }
  }
  /**
   * Handler for click on close CTA
   */
  onClose() {
    this.onReset();
    Event.emit("simplesearch.close", { restoreFocus: true });
  }
  /**
   * Handler for click on clear CTA
   */
  onClear() {
    this.clearSearch();
    this.focus();
  }
  /**
   * Handler for keyup event on search field
   * Calls getSuggestions with a search term entered, unless service key pressed
   * @param {Event} event - Event object
   */
  onSearchKeyUp(event) {
    if (["Tab", "ArrowDown", "ArrowUp"].indexOf(event.key) !== -1) {
      // Do nothing if navigating between suggestions with up, down and TAB keys
      return;
    }
    if (this.options.showClearButton) {
      if (event.target.value.trim().length) {
        this.showClearButton();
      } else {
        this.hideClearButton();
      }
    }
    this.addLoader(this.selectors.resultsGroup, { overlay: true });
    this.getSuggestions(event.target.value)
      .then(() => this.showResults())
      .catch((error) => {
        if (window.lora.debug) {
          console.error(error.message);
        }
      })
      .finally(() => this.removeLoader(this.selectors.resultsGroup));
  }
  /**
   * Focus in the search field
   */
  focus() {
    this.selectors.searchField.focus();
  }
  /**
   * Handler for keydown event on search field
   * Trigger functions if service key pressed
   * @param {Event} event - Event object
   */
  onSearchKeydown(event) {
    switch (event.key) {
      case "ArrowUp": // 'ArrowUp' key
      case "ArrowDown": // 'ArrowDown' key
        this.onArrowKey(event);
        break;
      case "Tab": // 'Tab' key
        this.onTabKey();
        break;
      case "Enter": // 'Enter' key
        this.onSubmit(event);
        break;
      default:
        break;
    }
  }
  /**
   * Handler for "up" and "down" keys
   * Navigate between suggested search terms
   * If nothing is selected down key will select first suggestion and up key will select last
   * Original input value will be restored when pressing "down" key on the last suggestion or "up" on the first
   * @param {Event} event - Event object
   */
  onArrowKey(event) {
    if (!this.state.isResultOpen) {
      // Do nothing if search results closed
      return;
    }
    this.selectors.suggestions =
      this.selectors.suggestionsContainer.querySelectorAll("[aria-selected]");
    this.selectors.selectedSuggestion =
      this.selectors.suggestionsContainer.querySelector(
        `#${this.options.selectedSuggestionId}`,
      );
    if (["ArrowUp"].indexOf(event.key) !== -1) {
      this.selectors.nextSuggestion = this.selectPreviousSuggestion();
    }
    if (["ArrowDown"].indexOf(event.key) !== -1) {
      this.selectors.nextSuggestion = this.selectNextSuggestion();
    }
    this.selectSuggestion(this.selectors.nextSuggestion);
  }
  /**
   * Select previous suggestion or last suggestion if nothing is selected
   * @return {HTMLElement} selectPreviousSuggestion
   */
  selectPreviousSuggestion() {
    if (this.selectors.selectedSuggestion) {
      return this.selectors.selectedSuggestion.previousElementSibling;
    }
    return this.selectors.suggestions[this.selectors.suggestions.length - 1];
  }
  /**
   * Select next suggestion or first suggestion if nothing is selected
   * @return {HTMLElement} selectNextSuggestion
   */
  selectNextSuggestion() {
    if (this.selectors.selectedSuggestion) {
      return this.selectors.selectedSuggestion.nextElementSibling;
    }
    return this.selectors.suggestions[0];
  }
  /**
   * Highlight selected suggestion and paste suggestion text into the input field
   * If param is null original input state will be restored
   * Set aria-activedescendant and aria-selected accessibility attributes
   * @param {HTMLElement} suggestion - HTML element
   */
  selectSuggestion(suggestion) {
    // Clear previous selected state
    this.selectors.searchField.removeAttribute("aria-activedescendant");
    if (this.selectors.selectedSuggestion) {
      this.selectors.selectedSuggestion.setAttribute("aria-selected", "false");
      this.selectors.selectedSuggestion.setAttribute("id", "");
      this.selectors.selectedSuggestion.classList.remove(
        this.classes.suggestionActive,
      );
    }
    // don't mark anything on the results list and restore original search term if we're back at the input field
    if (!suggestion) {
      this.setFieldValue(this.originalSearchTerm);
      return;
    }
    suggestion.setAttribute("aria-selected", "true");
    suggestion.setAttribute("id", this.options.selectedSuggestionId);
    suggestion.classList.add(this.classes.suggestionActive);
    this.selectors.searchField.setAttribute(
      "aria-activedescendant",
      this.options.selectedSuggestionId,
    );
    this.setFieldValue(suggestion.textContent.trim());
  }
  /**
   * Set tabNavigation flag on TAB key press, which blocks search suggestions from closing upon loosing focus on input field
   */
  onTabKey() {
    this.tabNavigation = true;
    if (!this.state.isFirstTab) {
      this.resetFocusedOrder(this.element);
      this.setFocusedOrder(this.element);
      this.state.isFirstTab = true;
    }
  }
  /**
   * Show search suggestions on input field focus
   * @param {Event} e - Event object
   */
  onSearchFocus(e) {
    const input = e.target;
    if (input.value.trim().length >= this.options.suggestionsMinChars) {
      this.showResults();
      this.tabNavigation = false;
    }
  }
  /**
   * Retrieve suggestions via AJAX
   *
   * @param {String} searchValue - Search value
   * @returns {Promise} object
   */
  getSuggestions(searchValue) {
    if (searchValue.trim().length >= this.options.suggestionsMinChars) {
      // start spinner
      return ajax(
        this.options.apiUrl +
          encodeURIComponent(this.selectors.searchField.value),
      )
        .then((response) => this.onGetSuggestionsSuccess(response))
        .catch(() => this.onGetSuggestionsFail());
    }
    if (this.state.isResultOpen) {
      this.hideResults();
    }
    return Promise.reject(
      new Error(
        `${this.options.suggestionsMinChars} chars minimum is required`,
      ),
    );
  }
  /**
   * Handler for successful search suggestions call
   * @param {HTMLElement} args - HTML element
   */
  onGetSuggestionsSuccess(...args) {
    this.updateSuggestions(args);
  }
  /**
   * Handler for failed search suggestions call
   */
  onGetSuggestionsFail() {
    this.updateSuggestions("An error occured"); // need localization
  }
  /**
   * Update search suggestions
   * @param {HTMLElement} html - HTML element
   */
  updateSuggestions(html) {
    this.selectors.resultsContainer.innerHTML = html;
    // Update selector for suggestions container after AJAX change
    this.selectors.suggestionsContainer =
      this.selectors.resultsContainer.querySelector("[data-js-search-terms]");
    this.originalSearchTerm = this.selectors.searchField.value;
    // update component registry
    Event.emit("registry.registerChildren", this.selectors.resultsContainer);
  }
  /**
   * Display the result layer
   */
  showResults() {
    this.resetFocusedOrder(this.element);
    this.state.isResultOpen = true;
    this.element.classList.add(this.classes.resultsActive);
    this.selectors.searchField.setAttribute("aria-expanded", "true");
    this.setSearchAria();
    if (this.options.useOverlay) {
      trigger("simplesearch.results.show", this.element, { bubbles: true });
      Event.emit("overlay.open", {
        /**
         * on overlay close
         */
        onClose: () => {
          trigger("simplesearch.results.hide", this.element, { bubbles: true });
          trigger("simplesearch.overlay.closed", this.element, {
            bubbles: true,
          });
        },
      });
    }
    this.setFocusedOrder(this.element);
  }
  /**
   * Hide the result layer
   */
  hideResults() {
    // execute only if result overlay is open
    if (!this.state.isResultOpen) {
      return;
    }
    this.resetFocusedOrder(this.element);
    this.state.isResultOpen = false;
    this.element.classList.remove(this.classes.resultsActive);
    this.selectors.searchField.setAttribute("aria-expanded", "false");
    this.clearSearchAria();
    if (this.options.useOverlay) {
      Event.emit("overlay.close");
    }
    this.setFocusedOrder(this.element);
  }
  /**
   * Show clear button
   */
  showClearButton() {
    this.selectors.clearButton.classList.add(this.classes.active);
    this.selectors.submitButton.classList.add(this.classes.hidden);
  }
  /**
   * Hide clear button
   */
  hideClearButton() {
    this.selectors.clearButton.classList.remove(this.classes.active);
    this.selectors.submitButton.classList.remove(this.classes.hidden);
  }
  /**
   * Set value of the value
   * @param {String} val search field value;
   */
  setFieldValue(val = "") {
    this.selectors.searchField.value = val;
  }
  /**
   * Clear search field
   */
  clearSearch() {
    this.setFieldValue("");
    this.hideClearButton();
  }
  /**
   * Set Search field aria
   */
  setSearchAria() {
    const searchSuggestionTitle = this.element.querySelector(
      "[data-js-search-suggestions-aria]",
    );
    this.selectors.searchAria.innerHTML =
      searchSuggestionTitle && searchSuggestionTitle.innerHTML;
  }
  /**
   * Clear Search field aria
   */
  clearSearchAria() {
    this.selectors.searchAria.innerHTML = "";
  }
  /**
   * Unbind event handlers
   */
  unbindEvents() {
    const { searchField, closeButton, clearButton } = this.selectors;
    if (this.options.apiUrl) {
      ["keyup", "blur", "focus", "keydown"].forEach((event) => {
        off(event, searchField);
      });
    }
    if (closeButton) {
      off("click", closeButton);
    }
    if (this.options.showClearButton) {
      off("click", clearButton);
    }
    off("click", this.selectors.submitButton);
    Event.removeListener("header.search.open", this.onOpen, this);
    Event.removeListener("header.search.close", this.onReset, this);
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    this.unbindEvents();
  }
}
