/* eslint max-lines: off */
/* eslint complexity: off */
/**
 * Created by xiu on 02/11/2017.
 */
import { ajax } from "toolbox/ajax";
import { mediaQuery } from "toolbox/mediaQuery";
import AbstractField from "components/global/AbstractField";
import { on, off, trigger } from "toolbox/event";
import { Event } from "services/EventEmitter";
import { deepMerge } from "toolbox/deepMerge";
import { appendUrl } from "toolbox/queryString";
import { mix } from "core/mixwith";
import LoaderMixin from "mixins/Loader";
import Accessibility from "mixins/Accessibility";
import { tryParseJSON } from "toolbox/object";
/**
 * This is a description of the Select constructor function.
 * @see styleguide {@link https://ecom-frontend-styleguide.e-loreal.com/mf-lora/category/forms/select}
 * @see confluence {@link https://confluence.e-loreal.com/display/EP/NG+LORA+-+Select}
 * @class
 * @classdesc This is a description of the Select class.
 * @extends Component
 */
export default class Select extends mix(AbstractField).with(
  Accessibility,
  LoaderMixin,
) {
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
          native: true, // Display of the native dropdown
          container: false, // Append custom dropdown to a specific element. You need to define this option as css selector.
          closeOnSelect: true, // work only if native is false. When a value is selected, it closes the panel
          redirectUrl: false, // In case the change of the select trigger a redirection - value of option should be a link value
          redirectNewTab: false, // Determines if redirection should open a new tab or use the current one
          trigger: "click", // can be either click or hover
          position: "bottom-start", // https://popper.js.org/docs/v2/
          autoPositionPanel: true, // works only if native is false.Allow to update the position of the panel if out of viewport
          useIcon: false, // Works only if native is false. Allows having icon in the select
          filter: false, // Works only if native is false. Allows having filter input in the select
          closeTimeout: 200, // Works only if trigger is hover and native is false. Set a delay before the panel is closed
          scrollIntoView: {
            // Works only for accessibility when keys UP/DOWN are used.
            block: "nearest",
          },
          a11y: {
            filterLabel: "", // Works only if native is false. Allows having filter label in the select
            filterButtonLabel: "", // Works only if native is false. Allows having filter label in the select
            filterResult: "", // Works only if native is false. Allows having filter text if there is only 1 result in the selection
            filterResults: "", // Works only if native is false. Allows having filter text if there are more than 1 results in the selection
            filterNoResults: "", // Works only if native is false. Allows having filter text if no result in the select
          },
          classNames: {
            container: null,
            opened: "m-opened",
            disabled: "m-disabled",
            inactive: "m-inactive",
            active: "m-active",
            hidden: "h-hidden",
            focus: "m-focus",
            hover: "m-hover",
            selected: "m-selected",
            srOnly: "h-show-for-sr",
            panel: "c-select__panel",
            list: "c-select__panel-list",
            listItem: "c-select__panel-item",
            placeholder: "c-select__placeholder",
            label: "c-select__label",
            hasDescription: "m-rows-2",
            text: "c-select__text",
            description: "c-select__description",
            badge: "c-select__badge",
            badgeImage: "c-select__badge-image",
            textWithDescription: "c-select__description-wrapper",
            iconState: "m-icon",
            icon: ["c-select__icon"],
          },
          optionsMap: {}, // select options map, used to dynamically replace select options
          optionsMapUrl: null, // options map url, used to asyncronously load the options map
          selectFirstOptionOnReset: true, // select the first option on reset event
          _resizable: true,
          trackFocusedElements: true, // enable tracking of focused elements
          triggerDependencyOnInit: false, // Determines if to trigger state dependencies on init
          preventDisabledSelection: false, // If true, disabled items cannot be selected
        },
        options,
      ),
    );
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    this.wrapField();
    super.initCache();
    this.classes.filterPanel = "c-select__filter";
    this.classes.filterInput = "c-select__filter-field";
    this.classes.filterButton = "c-select__filter-button";
    this.classes.filterNoResults = "c-select__filter-result";
    this.selectors.container = this.options.container
      ? document.querySelector(this.options.container)
      : this.element;
    this.checkNative();
    // if not native, we create a custom panel based on the select options
    if (!this.state.native) {
      this.initCustomSelectCache();
    }
  }
  /**
   * Cache custom select elements
   */
  initCustomSelectCache() {
    this.selectors.currentLabel = this.element.querySelector(
      `.${this.options.classNames.label}`,
    );
    this.selectors.currentPanelItem = null;
    this.selectors.selectOptions = this.field.querySelectorAll("option");
    this.state.filter =
      this.selectors.selectOptions.length > 1 ? this.options.filter : false;
    // Create a panel with list of select options
    this.selectors.panel = this.createCustomPanel();
    // Create a placeholder button for having custom select
    this.selectors.placeholder = this.createPlaceholder();
    if (this.selectors.panel) {
      this.selectors.list = this.selectors.panel.querySelector(
        `.${this.options.classNames.list}`,
      );
      this.selectors.listItem = this.selectors.panel.querySelectorAll(
        `.${this.options.classNames.listItem}`,
      );
      this.state.filteredItems = this.selectors.listItem || [];
    }
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.defaultOption = {
      index: this.field.selectedIndex,
      value: this.field.value,
    };
    this.state.selectedOption = this.state.defaultOption;
    this.state.autoPosition = null;
    this.state.isOpened = false;
    this.state.isPreventChange = false;
    this.state.hasInit = true;
    if (!this.state.native) {
      this.state.filteredItems = this.selectors.listItem || [];
    }
    this.state.optionsMap = this.options.optionsMap;
    this.state.fieldState = null;
  }
  /**
   * Load localized options data
   * @param {String} masterValue - optional master value (used to limit large data set)
   * @returns {Promise} ajax call
   */
  loadOptionsMap(masterValue) {
    this.disable();
    this.addLoader(this.element);
    let url = this.options.optionsMapUrl;
    if (masterValue) {
      url = appendUrl(url, { master: masterValue });
    }
    return ajax(url)
      .then(this.onOptionsMapLoaded.bind(this, masterValue))
      .catch(this.onOptionsMapFailed.bind(this, masterValue));
  }
  /**
   * Callback on ajax request for getting options map
   * @param {Object} masterValue - additional callback params
   * @param {Object} data - response data
   */
  onOptionsMapLoaded(masterValue, data) {
    if (masterValue) {
      this.state.optionsMap[masterValue] = data[masterValue];
    } else {
      this.state.optionsMap = data;
    }
    const newOptions = this.state.optionsMap[masterValue];
    if (newOptions) {
      this.updateOptions(newOptions);
    }
    this.enable();
    this.removeLoader(this.element);
    this.setValueAfterLoad();
  }
  /**
   * Set value after lazy loading options
   */
  setValueAfterLoad() {
    const value = this.element.getAttribute("data-lazyfield-value");
    if (value) {
      this.setValue(value);
      this.field.focus();
    }
  }
  /**
   * Callback on ajax request for getting options map
   * @param {Object} data - response data
   */
  onOptionsMapFailed(data) {
    console.log(`Error during loading select options: ${data}`);
  }
  /**
   * Wrap each field into container
   */
  wrapField() {
    const wrapper = document.createElement("div");
    const selectElement = this.element.querySelector("select");
    const hadCurrentFocus = document.activeElement === selectElement;
    wrapper.classList.add("c-select__container");
    if (selectElement) {
      selectElement.parentElement.insertBefore(wrapper, selectElement);
      wrapper.appendChild(selectElement);
      this.selectors.fieldWrapper = wrapper;
      if (hadCurrentFocus) {
        selectElement.focus();
      }
    }
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    super.bindEvents();
    on(`change.${this.id}`, this.field, this.onChange.bind(this));
    if (!this.state.native) {
      this.bindCustomSelectEvents();
    } else {
      // Accessibility for native events
      on(
        "keydown",
        this.field,
        this.onNativeSelectItemKeyDown.bind(this),
        false,
      );
    }
  }
  /**
   * Update options in custom panel. Reset options if no options were passed
   * @param {Array} options new options
   */
  customOptionsUpdate(options) {
    const panelButton = this.selectors.placeholder;
    if (!options) {
      this.selectors.listItem.forEach((item) => {
        item.classList.remove(this.options.classNames.hidden);
      });
      this.selectItem(panelButton, this.selectors.listItem[0]);
      this.setSelectedIndex(
        this.selectors.listItem[0].getAttribute("data-index"),
      );
      return;
    }
    this.selectors.listItem.forEach((item) => {
      if (!options.includes(item.dataset.value)) {
        item.classList.add(this.options.classNames.hidden);
      } else {
        item.classList.remove(this.options.classNames.hidden);
      }
      if (item.dataset.value === options[0]) {
        this.selectItem(panelButton, item);
        this.setSelectedIndex(item.getAttribute("data-index"));
      }
    });
  }
  /**
   * Handle custom state events triggering
   * @param {Event} event optional, available for dependency action handling
   */
  triggerStateEvents(event) {
    // for select field state should be defined by selected value
    // otherwise it would always be "selected"
    const newState = this.field.value;
    let triggerDependencyOnFieldInit = false;
    if (this.state.fieldState === null) {
      this.state.fieldState = newState;
      triggerDependencyOnFieldInit = this.options.triggerDependencyOnInit;
    }
    const action = event && event.detail && event.detail.action;
    if (
      newState !== this.state.fieldState ||
      action === "triggerStateEvents" ||
      triggerDependencyOnFieldInit
    ) {
      this.state.fieldState = newState;
      ["selected", `selected#${newState}`].forEach((dependency) => {
        if (dependency in this.options.stateDependencies) {
          trigger("field.dependency.state.changed", this.field, {
            bubbles: true,
            dependentActions: this.options.stateDependencies[dependency],
            masterField: this.field,
            data: { isOnInit: triggerDependencyOnFieldInit },
          });
        }
      });
    }
  }
  /**
   * Handler for URL redirection
   *
   * @param {string} redirectUrl - Target URL
   * @param {bool} openNewTab - If true, the URL will be opened in a new tab. Same tab will be used otherwise.
   */
  redirect(redirectUrl, openNewTab) {
    if (redirectUrl) {
      const redirectType = openNewTab ? "_blank" : "_self";
      window.open(redirectUrl, redirectType);
    }
  }
  /**
   * Handler for select change event
   *
   * @param {Event} e - event data
   */
  onChange(e) {
    if (this.state.isPreventChange) {
      e.stopPropagation();
      return;
    }
    const { selectedIndex, value } = e.currentTarget;
    this.state.selectedOption = {
      index: selectedIndex,
      value,
    };
    this.saveLastFocusState();
    if (!this.state.native) {
      const selectedItem = this.selectors.panel.querySelector(
        `[data-value="${value}"]`,
      );
      const panelButton = this.selectors.placeholder;
      // update the panel item when a change occur from the select
      if (this.state.filter) {
        this.clearFilter();
      }
      if (selectedItem) {
        this.selectItem(panelButton, selectedItem);
        panelButton.setAttribute("aria-expanded", "false");
      }
      this.initFieldState();
      this.selectors.selectedPanelItem = selectedItem;
      this.currentItemIndex = selectedItem
        ? Number(selectedItem.getAttribute("data-index"))
        : 0;
      if (this.options.useIcon) {
        // update the panel button availability status when a change occur from the select
        if (this.isDisabledItem(selectedItem)) {
          this.disableItem(panelButton);
        } else {
          this.enableItem(panelButton);
        }
      }
    }
    // Redirect the user when a new value is selected
    if (
      value &&
      value.length > 0 &&
      this.options.redirectUrl &&
      !this.state.isPreventChange
    ) {
      this.redirect(value, this.options.redirectNewTab);
    }
    if (this.analytics && this.analytics.placement) {
      const innerTextToLowerCase =
        e.currentTarget.selectedOptions[0].innerText.toLowerCase();
      const eventData = {
        category: this.analytics.placement,
        action:
          (this.analytics.action &&
            this.analytics.action.replace(
              "{selectedValue}",
              innerTextToLowerCase,
            )) ||
          "select",
        label:
          this.analytics.label ||
          (this.analytics.labelHeading
            ? `${this.analytics.labelHeading}::${innerTextToLowerCase}`
            : innerTextToLowerCase),
      };
      if (this.analytics.ecommerce) {
        eventData.ecommerce = this.analytics.ecommerce;
      }
      if (this.analytics.eventType) {
        eventData.eventType = this.analytics.eventType;
      }
      if (this.analytics.event) {
        eventData.event = this.analytics.event;
      }
      if (this.analytics.extraData) {
        eventData.extraData = {};
        Object.keys(this.analytics.extraData).forEach((key) => {
          eventData.extraData[key] = this.analytics.extraData[key].replace(
            "{selectedValue}",
            innerTextToLowerCase,
          );
        });
      }
      Event.emit("analytics.event", eventData);
    }
  }
  /**
   * Select item on custom select panel
   * @param {HTMLElement} panelButton panel buttom
   * @param {HTMLElement} selectedItem selected item
   */
  selectItem(panelButton, selectedItem) {
    this.selectPanelItem(selectedItem);
    selectedItem.setAttribute("aria-selected", true);
    this.selectors.selectedPanelItem.setAttribute("aria-selected", false);
    panelButton.innerHTML = selectedItem.innerHTML;
    this.setPlaceholderText(selectedItem, panelButton);
  }
  /**
   * Set text to placeholder button
   *
   * @param {HTMLElement} element - panel selected element
   * @param {HTMLElement} placeholder - placeholder button element
   */
  setPlaceholderText(element, placeholder) {
    const buttonText = placeholder.querySelector(
      `.${this.options.classNames.text}`,
    );
    if (element.getAttribute("aria-label") && buttonText) {
      if (buttonText.innerHTML === "") {
        buttonText.classList.add(this.options.classNames.srOnly);
        buttonText.innerHTML = element.getAttribute("aria-label");
      } else {
        const span = document.createElement("span");
        buttonText.setAttribute("aria-hidden", true);
        span.classList.add(this.options.classNames.srOnly);
        span.innerHTML = element.getAttribute("aria-label");
        placeholder.appendChild(span);
      }
    }
  }
  /**
   * Update options based on master field selected value.
   *
   * @param {Event} e - event data
   */
  updateValue(e) {
    const masterValue =
      e.detail && e.detail.masterField && e.detail.masterField.value;
    if (
      this.options.optionsMapUrl &&
      masterValue &&
      !this.state.optionsMap[masterValue]
    ) {
      this.loadOptionsMap(masterValue);
    } else {
      const newOptions = this.state.optionsMap[masterValue];
      if (newOptions) {
        this.updateOptions(newOptions);
        // set field on init to the pre selected value
        if (
          e.detail &&
          e.detail.data &&
          e.detail.data.isOnInit &&
          this.state.defaultOption.index !== 0
        ) {
          this.setSelectedIndex(this.state.defaultOption.index, true);
        }
      }
    }
  }
  /**
   * Update select options.
   *
   * @param {Array} options New options array. Each option value can be either object or string directly.
   */
  updateOptions(options = []) {
    this.field.innerHTML = "";
    if (!Array.isArray(options)) {
      options = Object.keys(options).map((key) => ({
        val: key,
        label: options[key],
      }));
    }
    options.forEach((opt) => {
      const option = document.createElement("option");
      option.text = opt.label;
      option.value = opt.val;
      if (opt.tagAttributes) {
        Object.keys(opt.tagAttributes).forEach((key) => {
          option.setAttribute(key, opt.tagAttributes[key]);
        });
      }
      this.field.add(option);
      if (opt.selected) {
        this.field.value = opt.val;
      }
    });
    this.selectors.selectOptions = this.field.querySelectorAll("option");
    if (!this.state.native) {
      this.destroyCustomSelect();
      this.initCustomSelectCache();
      this.bindCustomSelectEvents();
    }
  }
  /**
   * Bind events for custom select
   */
  bindCustomSelectEvents() {
    on("click", this.selectors.panel, this.onPanelClick.bind(this));
    // Accessibility events
    on("keydown", this.element, this.onSelectItemKeyDown.bind(this), false);
    if (this.options.container && this.selectors.panel) {
      on(
        "keydown",
        this.selectors.panel,
        this.onSelectItemKeyDown.bind(this),
        false,
      );
    }
    on("click", this.selectors.placeholder, this.onKeyTogglePanel.bind(this));
    if (this.state.filter) {
      on("input", this.selectors.filterInput, this.onFilterChange.bind(this));
      on("click", this.selectors.filterButton, this.onClearFilter.bind(this));
    }
    on(`mousedown.${this.id}`, this.field, (e) => {
      // prevent the dropdown to be displayed when custom dropdown is required
      e.preventDefault();
      if (this.options.trigger === "click") {
        this.element.focus();
        this.togglePanel();
      }
    });
    if (this.options.trigger === "click") {
      on(`click.${this.id}`, document, (e) => {
        if (this.state.isOpened && !this.element.contains(e.target)) {
          this.closePanel();
          this.selectors.placeholder.setAttribute("aria-expanded", "false");
        }
      });
      on(`mouseenter.${this.id}`, this.field, this.onMouseEnter.bind(this));
      on(`mouseleave.${this.id}`, this.field, this.onMouseLeave.bind(this));
    } else if (this.options.trigger === "hover") {
      on(`mouseenter.${this.id}`, this.element, this.onSelectHover.bind(this));
      on(`mouseleave.${this.id}`, this.element, this.onSelectLeave.bind(this));
    } else {
      console.error(
        "Select component trigger should be either click or hover but got --> ",
        this.options.trigger,
      );
    }
  }
  /**
   * Unbind custom select event
   */
  unbindCustomSelectEvents() {
    off("click keydown", this.selectors.panel);
    // Accessibility events
    off("keydown", this.element);
    off(`mousedown.${this.id}`, this.field);
    if (this.selectors.filterInput) {
      off("input", this.selectors.filterInput);
    }
    if (this.selectors.filterButton) {
      off("click", this.selectors.filterButton);
    }
    if (this.options.trigger === "click") {
      off(`click.${this.id}`, document);
      off(`mouseenter.${this.id}`, this.field);
      off(`mouseleave.${this.id}`, this.field);
    } else if (this.options.trigger === "hover") {
      off(this.element);
    }
    if (this.state.autoPosition) {
      this.state.autoPosition.destroy();
    }
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    super.afterInit();
    this.restoreLastFocusState();
    if (this.options.useIcon) {
      this.element.classList.add(this.options.classNames.iconState);
    }
    if (!this.state.native) {
      this.selectors.fieldWrapper.classList.add(this.options.classNames.hidden);
    }
    const isOptionsWithDescription =
      this.selectors.selectOptions &&
      [...this.selectors.selectOptions].some(
        (option) => option.dataset && option.dataset.jsDescription,
      );
    if (isOptionsWithDescription) {
      this.element.classList.add(this.options.classNames.hasDescription);
    }
    this.initFieldState();
  }
  /**
   * The component can be native depending on the viewport. The state should be defined once and can refresh during resize
   *
   * @returns {Boolean} true or false
   */
  checkNative() {
    const { native } = this.options;
    const isNative =
      (typeof native === "boolean" && native) ||
      (typeof native === "string" && mediaQuery.is(native)) ||
      false;
    // If native state changed, we need to bind or unbind the events accordingly
    if (this.state.hasInit && this.state.native !== isNative) {
      if (isNative) {
        // state come from custom to native, destroy the events
        this.destroyCustomSelect();
      } else {
        this.initCustomSelectCache();
        // state come from custom to native, destroy the events
        this.bindCustomSelectEvents();
      }
    }
    this.state.native = isNative;
    return isNative;
  }
  /**
   * Create a panel based on the options
   *
   * @returns {HTMLElement} - create custom panel
   */
  createCustomPanel() {
    const panel = document.createElement("div");
    const ul = document.createElement("ul");
    const fragment = document.createDocumentFragment();
    const { list } = this.options.classNames;
    [...this.selectors.selectOptions].forEach((option, index) => {
      const customOption = this.createCustomOption(option, index);
      if (option.selected) {
        this.selectors.selectedPanelItem = customOption;
        this.selectPanelItem(customOption);
        customOption.setAttribute("aria-selected", "true");
        this.currentItemIndex = index;
      }
      if (option.dataset.jsDisabled === "true") {
        this.disableItem(customOption);
      }
      fragment.appendChild(customOption);
    });
    ul.setAttribute("tabindex", "-1");
    ul.setAttribute("role", "listbox");
    ul.classList.add(list);
    ul.appendChild(fragment);
    ul.setAttribute("id", `${this.id}-listbox`);
    ul.setAttribute("aria-labelledby", `${this.id}-label`);
    panel.classList.add(this.options.classNames.panel);
    if (this.state.filter) {
      const filterForm = this.createFilterForm();
      const filterResult = this.createFilterNoResult();
      panel.appendChild(filterForm);
      panel.appendChild(filterResult);
    }
    // inject collected <li> into the panel
    panel.appendChild(ul);
    // inject panel into the container (component by default)
    this.selectors.container.appendChild(panel);
    return panel;
  }
  /**
   * Create filter form based on the options
   *
   * @returns {HTMLElement} - create filter form
   */
  createFilterForm() {
    this.selectors.filterPanel = document.createElement("div");
    this.selectors.filterInput = document.createElement("input");
    this.selectors.filterButton = document.createElement("button");
    this.selectors.filterInput.setAttribute("type", "search");
    this.selectors.filterInput.setAttribute("autocomplete", "off");
    this.selectors.filterInput.setAttribute(
      "aria-label",
      this.options.a11y.filterLabel,
    );
    this.selectors.filterInput.setAttribute(
      "placeholder",
      this.options.a11y.filterLabel,
    );
    this.selectors.filterInput.classList.add(this.classes.filterInput);
    this.selectors.filterButton.classList.add(this.classes.filterButton);
    this.selectors.filterButton.setAttribute("aria-hidden", "true");
    this.selectors.filterButton.setAttribute("tabindex", "-1");
    this.selectors.filterButton.setAttribute(
      "aria-label",
      this.options.a11y.filterButtonLabel,
    );
    this.selectors.filterPanel.classList.add(this.classes.filterPanel);
    // inject filter panel
    this.selectors.filterPanel.appendChild(this.selectors.filterInput);
    this.selectors.filterPanel.appendChild(this.selectors.filterButton);
    return this.selectors.filterPanel;
  }
  /**
   * Create filter result block
   *
   * @returns {HTMLElement} - filter result
   */
  createFilterNoResult() {
    this.selectors.filterNoResults = document.createElement("div");
    this.selectors.filterNoResults.classList.add(this.classes.filterNoResults);
    this.selectors.filterNoResults.classList.add(
      this.options.classNames.srOnly,
    );
    this.selectors.filterNoResults.setAttribute("aria-live", "polite");
    this.selectors.filterNoResults.setAttribute("aria-atomic", "true");
    return this.selectors.filterNoResults;
  }
  /**
   * Create custom option element
   *
   * @param {Object} option - Option object
   * @param {Number} index - index of element
   * @returns {HTMLElement} - create li element for select list
   */
  createCustomOption(option, index) {
    const { useIcon, classNames } = this.options;
    const { listItem } = classNames;
    const li = document.createElement("li");
    li.setAttribute("data-value", option.value);
    li.setAttribute("data-index", index);
    li.setAttribute("role", "option");
    li.setAttribute("data-js-disabled", false);
    li.setAttribute("aria-selected", "false");
    li.setAttribute("id", `${this.id}-item_${index}`);
    li.classList.add(listItem);
    if (option.dataset && option.dataset.jsBucket) {
      li.setAttribute("data-js-bucket", option.dataset.jsBucket);
    }
    if (option.hasAttribute("aria-label")) {
      li.setAttribute("aria-label", option.getAttribute("aria-label"));
    }
    if (useIcon) {
      li.appendChild(this.createIcon(option.getAttribute("data-icon")));
    }
    const badge =
      option.dataset && option.dataset.jsBadge ? option.dataset.jsBadge : null;
    const description =
      option.dataset && option.dataset.jsDescription
        ? option.dataset.jsDescription
        : null;
    li.appendChild(this.createText(option.text, description));
    if (badge) {
      const badgeSpan = this.createBadge(badge);
      li.appendChild(badgeSpan);
    }
    return li;
  }
  /**
   * Create the icon element with the background value
   *
   * @param {String} image - It needs to be a valid CSS background value (just HEXA or image url)
   * @returns {HTMLElement} - create the span element for icon
   */
  createIcon(image) {
    const icon = document.createElement("span");
    if (image) {
      icon.classList.add(...this.options.classNames.icon);
      icon.setAttribute("style", `background: ${image}`);
    }
    return icon;
  }
  /**
   * Create the icon text wrapper
   *
   * @param {String} text - icon text
   * @param {String} description - icon text description
   * @returns {HTMLElement} - span element
   */
  createText(text, description) {
    const textSpan = document.createElement("span");
    textSpan.classList.add(this.options.classNames.text);
    textSpan.innerHTML = text;
    if (!description) {
      return textSpan;
    }
    const div = document.createElement("div");
    div.classList.add(this.options.classNames.textWithDescription);
    div.appendChild(textSpan);
    if (description) {
      const descriptionSpan = this.createDescription(description);
      div.appendChild(descriptionSpan);
    }
    return div;
  }
  /**
   * Create the icon text description
   *
   * @param {String} description - icon text description
   * @returns {HTMLElement} - span element
   */
  createDescription(description) {
    const span = document.createElement("span");
    span.classList.add(this.options.classNames.description);
    span.innerHTML = description;
    return span;
  }
  /**
   * Create the icon text badge
   *
   * @param {String} badge - badge
   * @returns {HTMLElement} - span element
   */
  createBadge(badge) {
    badge = tryParseJSON(badge);
    const span = document.createElement("span");
    span.classList.add(
      badge.image
        ? this.options.classNames.badgeImage
        : this.options.classNames.badge,
    );
    span.innerHTML = badge.image ? badge.image : badge.title;
    if (!badge.image) {
      span.style.backgroundColor = badge.backgroundColor;
      span.style.color = badge.textColor;
    }
    return span;
  }
  /**
   * Create a placeholder button
   *
   * @returns {HTMLElement} - button element
   */
  createPlaceholder() {
    const button = document.createElement("button");
    const buttonClasses = this.options.classNames.placeholder
      .split(" ")
      .filter((item) => item);
    button.classList.add(...buttonClasses);
    button.setAttribute("id", `${this.id}-button`);
    button.setAttribute("type", "button");
    button.setAttribute("role", "combobox");
    button.setAttribute("aria-controls", `${this.id}-listbox`);
    button.setAttribute("aria-haspopup", "listbox");
    button.setAttribute("aria-expanded", "false");
    if (this.selectors.currentPanelItem) {
      button.innerHTML = this.selectors.currentPanelItem.innerHTML;
      this.setPlaceholderText(this.selectors.currentPanelItem, button);
    }
    if (this.isDisabledItem(this.selectors.currentPanelItem)) {
      this.disableItem(button);
    }
    this.element.prepend(button);
    if (this.field.getAttribute("aria-label") || this.selectors.currentLabel) {
      const labelElement = document.createElement("div");
      const labelText = this.field.getAttribute("aria-label")
        ? this.field.getAttribute("aria-label")
        : this.selectors.currentLabel.innerHTML;
      labelElement.classList.add(this.options.classNames.srOnly);
      labelElement.innerHTML = `<span id="${this.id}-label">${labelText}</span>`;
      button.setAttribute("aria-labelledby", `${this.id}-label`);
      this.element.prepend(labelElement);
    }
    return button;
  }
  /**
   * Toggle the panel - if closed, it will open and vice-versa
   */
  togglePanel() {
    if (this.state.isOpened) {
      this.closePanel();
    } else {
      this.openPanel();
    }
  }
  /**
   * Open the panel and method only used for custom panel
   */
  openPanel() {
    if (this.state.isOpened) {
      return;
    }
    this.autoPositionPanel();
    this.state.isOpened = true;
    this.element.classList.add(this.options.classNames.opened);
    if (
      !this.state.native &&
      this.selectors.panel.style.width !== `${this.element.clientWidth}px`
    ) {
      this.selectors.panel.style.width = `${this.element.clientWidth}px`;
    }
    if (!this.state.native && this.selectors.panel) {
      this.selectors.panel.style.display = "block";
      if (this.selectors.list) {
        this.selectors.list.setAttribute(
          "aria-activedescendant",
          this.selectors.selectedPanelItem.getAttribute("id"),
        );
      }
    }
    // for TP event 98
    if (this.analytics && this.analytics.openPanelEvent) {
      const eventData = {
        category: this.analytics.openPanelEvent.placement,
        action: this.analytics.openPanelEvent.action || "select",
        label: this.analytics.openPanelEvent.label,
      };
      if (this.analytics.openPanelEvent.extraData) {
        eventData.extraData = this.analytics.openPanelEvent.extraData;
      }
      Event.emit("analytics.event", eventData);
    }
  }
  /**
   * Close the panel and method only used for custom panel
   */
  closePanel() {
    if (!this.state.isOpened) {
      return;
    }
    this.state.isOpened = false;
    this.element.classList.remove(this.options.classNames.opened);
    if (this.state.autoPosition) {
      // if panel is closed, we need to destroy the autoPosition listeners
      this.state.autoPosition.destroy();
    }
    if (this.state.filter) {
      this.clearFilter();
    }
    if (!this.state.native && this.selectors.panel) {
      this.selectors.panel.style.display = "";
      if (this.selectors.list) {
        this.selectors.list.setAttribute("aria-activedescendant", "");
      }
    }
  }
  /**
   * Auto position the panel if we use the custom panel
   */
  autoPositionPanel() {
    if (this.state.native || !this.options.autoPositionPanel) {
      return;
    }
    SystemJS.import("@popperjs/core").then(({ createPopper }) => {
      this.state.autoPosition = createPopper(
        this.selectors.placeholder,
        this.selectors.panel,
        {
          placement: this.options.position,
          modifiers: [
            {
              name: "preventOverflow",
              options: {
                padding: 0,
              },
            },
          ],
          onFirstUpdate: () => {
            this.selectors.panel.style.display = "block";
            this.selectors.list.focus();
          },
        },
      );
    });
  }
  /**
   * Panel click handler
   * Highlight the selected value in the panel item list
   *
   * @param { customEvent } e - custom event
   */
  onPanelClick(e) {
    const { target } = e;
    let selectedElement;
    if (target.getAttribute("role") === "option") {
      selectedElement = target;
    } else if (target.parentElement.getAttribute("role") === "option") {
      selectedElement = target.parentElement;
    } else {
      return;
    }
    this.setSelectedIndex(selectedElement.getAttribute("data-index"));
    if (this.options.closeOnSelect) {
      // after choosing a value, we close the panel
      this.closePanel();
    }
  }
  /**
   * Hover select event handler. Only if trigger is hover
   * Opens the panel
   */
  onSelectHover() {
    if (this.leaveTimeout) {
      clearTimeout(this.leaveTimeout);
    }
    this.openPanel();
  }
  /**
   * Leave select event handler. Only if trigger is hover
   * closes the panel
   */
  onSelectLeave() {
    this.leaveTimeout = setTimeout(
      this.closePanel.bind(this),
      this.options.closeTimeout,
    );
  }
  /**
   * Select the item in the panel. No change event will happen
   *
   * @param {HTMLElement} element - HTML element
   */
  selectPanelItem(element) {
    if (this.selectors.currentPanelItem) {
      this.unSelectPanelItem(this.selectors.currentPanelItem);
    }
    element.classList.add(this.options.classNames.selected);
    this.selectors.currentPanelItem = element;
    if (this.selectors.list) {
      this.selectors.list.setAttribute(
        "aria-activedescendant",
        element.getAttribute("id"),
      );
    }
  }
  /**
   * Unselect the selected item state. No change event will happen
   *
   * @param {HTMLElement} element - HTML element
   */
  unSelectPanelItem(element) {
    element.classList.remove(this.options.classNames.selected);
    this.selectors.currentPanelItem = null;
  }
  /**
   * Returns product enabled status
   *
   * @param {HTMLElement} element - HTML element
   * @returns {Boolean} True or False
   */
  isDisabledItem(element) {
    return (
      element &&
      element instanceof HTMLElement &&
      element.getAttribute("data-js-disabled") === "true"
    );
  }
  /**
   * Disable the item in the panel. No change event will happen
   *
   * @param {HTMLElement} element - HTML element
   */
  disableItem(element) {
    if (element && element instanceof HTMLElement) {
      element.setAttribute("data-js-disabled", true);
      element.classList.add(this.options.classNames.disabled);
      if (this.options.preventDisabledSelection) {
        element.classList.add(this.options.classNames.inactive);
        element.setAttribute("aria-disabled", true);
        element.setAttribute("aria-hidden", true);
      }
    }
  }
  /**
   * Enable the item in the panel. No change event will happen
   *
   * @param {HTMLElement} element - HTML element
   */
  enableItem(element) {
    if (element && element instanceof HTMLElement) {
      element.setAttribute("data-js-disabled", false);
      element.classList.remove(this.options.classNames.disabled);
      element.classList.remove(this.options.classNames.selected);
      if (this.options.preventDisabledSelection) {
        element.classList.remove(this.options.classNames.inactive);
        element.removeAttribute("aria-disabled");
        element.removeAttribute("aria-hidden");
      }
    }
  }
  /**
   * Select the option by the given value. The value should be present in the option list or it will take the index 0 by default
   * if there is no match
   *
   * @param {String} value - option value
   */
  setValue(value) {
    // if value is empty then we assume that placeholder is at position 0
    if (value === "") {
      this.setSelectedIndex(0);
    } else {
      const selectedOption = this.field.querySelector(
        `option[value="${value}"]`,
      );
      if (selectedOption) {
        this.setSelectedIndex(selectedOption.index);
      }
    }
  }
  /**
   * Select the option by the given attribute value
   * @param {String} attribute - attribute name
   * @param {String} attributeValue - option value
   */
  setValueByAttribute(attribute, attributeValue) {
    const option = this.field.querySelector(
      `option[${attribute}="${attributeValue}"]`,
    );
    const value = (option && option.getAttribute("value")) || "";
    this.setValue(value);
  }
  /**
   * Select the option by its index.
   * @param {String|Number} index - selected index
   * @param {Boolean} skipValidation - Enable validation event triggering or not
   */
  setSelectedIndex(index, skipValidation = false) {
    if (Number(this.field.selectedIndex) === Number(index)) {
      return;
    }
    this.field.selectedIndex = index || 0;
    // When manually changed the value of the select. We need to trigger manually the change event
    if (!skipValidation) {
      trigger("change", this.field, { bubbles: true });
    }
  }
  /**
   * Filter keyDown handler
   *
   * @param { customEvent } event - custom event
   */
  onFilterChange(event) {
    const { target } = event;
    this.filter(target.value);
  }
  /**
   * Filter options by value
   *
   * @param { String } value - entered value
   */
  filter(value) {
    this.state.filteredItems = [];
    this.selectors.listItem.forEach((item) => {
      if (!value) {
        // if no value is passed, we show all the results
        this.state.filteredItems.push(item);
        this.highLightSearchText(item, "");
        item.classList.remove(this.options.classNames.hidden);
      } else {
        const isTextMatching = this.isTextMatching(item.textContent, value);
        let isBucketMatching = false;
        if (item.dataset && item.dataset.jsBucket) {
          isBucketMatching = this.isTextMatching(item.dataset.jsBucket, value);
        }
        if (isTextMatching || isBucketMatching) {
          this.state.filteredItems.push(item);
          this.highLightSearchText(item, value);
          item.classList.remove(this.options.classNames.hidden);
        } else {
          item.classList.add(this.options.classNames.hidden);
        }
      }
    });
    if (value && value.length) {
      this.selectors.filterPanel.classList.add(this.options.classNames.active);
      this.selectors.filterButton.removeAttribute("aria-hidden");
      this.selectors.filterButton.removeAttribute("tabindex");
    } else {
      this.selectors.filterPanel.classList.remove(
        this.options.classNames.active,
      );
      this.selectors.filterButton.setAttribute("aria-hidden", "true");
      this.selectors.filterButton.setAttribute("tabindex", "-1");
    }
    if (value && this.state.filteredItems.length) {
      this.setCurrentPanelItem(0);
      this.currentItemIndex = 0;
    }
    this.toggleNoResult();
  }
  /**
   * Check if there is any term matching the text
   * @param { string } text text
   * @param { string } term term to be matched
   * @returns { boolean } return true if it is matching
   */
  isTextMatching(text, term) {
    return text ? text.toLowerCase().indexOf(term.toLowerCase()) > -1 : false;
  }
  /**
   * Set highlight text to element
   * @param { HTMLElement } element - HTML element
   * @param { String } filterValue - any value
   */
  highLightSearchText(element, filterValue) {
    if (this.options.useIcon) {
      element = element.querySelector(`.${this.options.classNames.text}`);
    }
    element.innerHTML = this.getHighlightTerm(element.textContent, filterValue);
  }
  /**
   * Show/hide No Result section
   */
  toggleNoResult() {
    if (this.state.filteredItems.length) {
      this.selectors.filterNoResults.classList.add(
        this.options.classNames.srOnly,
      );
      this.selectors.filterNoResults.innerText =
        this.state.filteredItems.length > 1
          ? this.options.a11y.filterResults.replace(
              "{0}",
              this.state.filteredItems.length,
            )
          : this.options.a11y.filterResult;
    } else {
      this.selectors.filterNoResults.classList.remove(
        this.options.classNames.srOnly,
      );
      this.selectors.filterNoResults.innerText =
        this.options.a11y.filterNoResults;
    }
  }
  /**
   * Create a panel based on the options
   */
  onClearFilter() {
    if (!this.selectors.filterInput.value.length) {
      return;
    }
    this.selectors.filterInput.focus();
    this.clearFilter();
  }
  /**
   * Create a panel based on the options
   */
  clearFilter() {
    this.selectors.filterInput.value = "";
    this.filter(this.selectors.filterInput.value);
  }
  /**
   * Highlight filter term inside suggested phrase/text
   *
   * @param {string} fullText - suggested phrase/text
   * @param {string} term - term to highlight
   * @returns {string} - fullText with highlighted filter term if found inside
   */
  getHighlightTerm(fullText, term) {
    const index = fullText.toLowerCase().indexOf(term.toLowerCase());
    let result = "";
    if (index !== -1 && term !== "") {
      result = `${fullText.slice(0, index)}<b>`;
      result += `${fullText.slice(index, index + term.length)}</b>${fullText.slice(index + term.length)}`;
      return result;
    }
    return fullText;
  }
  /**
   * On onMediaQueryChange, It closes the panel and reset the native state depending on the configuration
   */
  onMediaQueryChange() {
    super.onMediaQueryChange();
    if (!this.state.native && this.state.isOpened) {
      this.closePanel();
    }
    this.checkNative();
  }
  /**
   * Handler that is called when the user resizes its window. Width of custom select have to be recalculated.
   */
  onResize() {
    if (!this.state.native && this.selectors.panel) {
      this.selectors.panel.style.width = `${this.element.clientWidth}px`;
    }
  }
  /**
   * Select the first option of the list
   */
  reset() {
    if (this.options.selectFirstOptionOnReset) {
      this.setSelectedIndex(0, true);
      if (!this.state.native) {
        const selectedItem = this.selectors.panel.querySelector("[data-value]");
        const panelButton = this.selectors.placeholder;
        if (this.state.filter) {
          this.clearFilter();
        }
        if (selectedItem) {
          this.selectItem(panelButton, selectedItem);
          panelButton.setAttribute("aria-expanded", "false");
        }
        this.selectors.selectedPanelItem = selectedItem;
        this.currentItemIndex = selectedItem
          ? Number(selectedItem.getAttribute("data-index"))
          : 0;
      }
    }
    super.removeValidationClass();
  }
  /**
   * Remove the nodes used for custom select
   */
  removeCustomSelect() {
    this.selectors.currentPanelItem = null;
    if (this.selectors.container) {
      // remove panel from the container
      this.selectors.container.removeChild(this.selectors.panel);
    } else {
      this.element.removeChild(this.selectors.panel);
    }
    this.element.removeChild(this.selectors.placeholder);
  }
  /**
   * Remove everything related to custom select, removal of the nodes and events
   */
  destroyCustomSelect() {
    this.unbindCustomSelectEvents();
    this.removeCustomSelect();
  }
  /**
   * Accessibility
   * Toggle the panel - if closed, it will open and vice-versa
   *
   * @param { Object } event - Object event
   */
  onSelectItemKeyDown(event) {
    switch (event.key) {
      case "Tab": // 'Tab' key
        if (event.target === this.selectors.list) {
          if (this.state.filter && !event.shiftKey) {
            event.preventDefault();
            this.selectors.filterInput.focus();
          } else {
            this.onKeyClosePanel();
          }
        }
        break;
      case "Enter": // 'Enter' key
        if (event.target === this.selectors.filterButton) {
          return;
        }
        event.preventDefault();
        if (this.selectors.currentPanelItem) {
          this.setSelectedIndex(
            this.selectors.currentPanelItem.getAttribute("data-index"),
          );
        }
        this.onKeyTogglePanel();
        break;
      case "Escape": // 'Escape' key
        event.preventDefault();
        if (this.state.isOpened) {
          event.stopImmediatePropagation();
          this.onKeyClosePanel();
        }
        break;
      case " ": // 'Whitespace' key
        if (
          event.target === this.selectors.filterInput ||
          event.target === this.selectors.filterButton
        ) {
          return;
        }
        event.preventDefault();
        if (this.selectors.currentPanelItem) {
          this.setSelectedIndex(
            this.selectors.currentPanelItem.getAttribute("data-index"),
          );
        }
        this.onKeyTogglePanel();
        break;
      case "End": // 'End' key
        if (
          this.selectors.currentPanelItem &&
          event.target !== this.selectors.filterInput
        ) {
          event.preventDefault();
          this.focusPanelItem(this.state.filteredItems.length - 1, -1);
        }
        break;
      case "Home": // 'Home' key
        if (
          this.selectors.currentPanelItem &&
          event.target !== this.selectors.filterInput
        ) {
          event.preventDefault();
          this.focusPanelItem(0, 1);
        }
        break;
      case "ArrowUp": // 'ArrowUp' key
        event.preventDefault();
        event.stopPropagation();
        if (this.selectors.currentPanelItem) {
          this.focusPanelItem(this.currentItemIndex - 1, -1);
        }
        if (!this.state.isOpened) {
          this.onKeyOpenPanel();
        }
        break;
      case "ArrowDown": // 'ArrowDown' key
        event.preventDefault();
        event.stopPropagation();
        if (this.selectors.currentPanelItem) {
          this.focusPanelItem(this.currentItemIndex + 1, 1);
        }
        if (!this.state.isOpened) {
          this.onKeyOpenPanel();
        }
        break;
      default:
        break;
    }
  }
  /**
   * Focused to panel list items with selection current item
   *
   * @param { Number } index - index of element
   * @param { Number } step - step to move up or down
   *
   */
  focusPanelItem(index, step) {
    const { length } = this.state.filteredItems;
    for (let i = index; i >= 0 && i < length; i += step) {
      const item = this.state.filteredItems[i];
      if (
        !this.options.preventDisabledSelection ||
        (item && !this.isDisabledItem(item))
      ) {
        this.selectors.list.focus();
        this.setCurrentPanelItem(i);
        this.selectors.currentPanelItem.scrollIntoView(
          this.options.scrollIntoView,
        );
        break;
      }
    }
  }
  /**
   * Open the panel, only used for key controls
   */
  onKeyOpenPanel() {
    this.openPanel();
    this.selectors.placeholder.setAttribute("aria-expanded", "true");
  }
  /**
   * Close the panel, only used for key controls
   */
  onKeyClosePanel() {
    this.closePanel();
    this.selectors.placeholder.setAttribute("aria-expanded", "false");
    this.selectors.placeholder.focus();
  }
  /**
   * Toggle the panel - if closed, it will open and vice-versa
   */
  onKeyTogglePanel() {
    if (!this.state.isOpened) {
      this.onKeyOpenPanel();
    } else {
      this.onKeyClosePanel();
    }
  }
  /**
   * Accessibility for native select
   * Block 'onChange' handler for select event if user press arrrows
   *
   * @param { Object } event - Object event
   */
  onNativeSelectItemKeyDown(event) {
    const keyBoardActions = ["Tab", "Enter"]; // Tab, Enter keys
    const isActionKey = keyBoardActions.indexOf(event.key) !== -1;
    if (!isActionKey && !event.altKey) {
      this.state.isPreventChange = true;
    } else if (isActionKey && this.state.isPreventChange) {
      // 'Enter', 'Tab' key
      this.state.isPreventChange = false;
      if (event.key !== "Tab") {
        event.preventDefault();
      }
      // manually trigger change event on Enter or Tab click
      trigger("change", this.field, { bubbles: true });
    } else {
      this.state.isPreventChange = false;
    }
  }
  /**
   * Set initial field state depending on content
   */
  initFieldState() {
    this.setFieldState(
      Array.from(this.field.querySelectorAll("option")).some(
        (item) => item.value === this.field.value,
      ),
    );
  }
  /**
   * On hover event handler
   */
  onMouseEnter() {
    this.element.classList.add(this.options.classNames.hover);
  }
  /**
   * Onleave hover event handler
   */
  onMouseLeave() {
    this.element.classList.remove(this.options.classNames.hover);
  }
  /**
   * Set active item in the dropdown panel, not selected yet
   * @param { number } index index of the element to be highlighted
   */
  setCurrentPanelItem(index) {
    const filteredItemsCount = this.state.filteredItems.length;
    if (filteredItemsCount <= 0 || filteredItemsCount < index) {
      return;
    }
    if (this.state.filteredItems[index]) {
      this.selectPanelItem(this.state.filteredItems[index]);
      this.currentItemIndex = index;
    }
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    if (this.state.isOpened) {
      this.closePanel();
    }
    if (!this.state.native) {
      this.unbindCustomSelectEvents();
    } else {
      off("keydown", this.field);
    }
    super.destroy();
  }
}
