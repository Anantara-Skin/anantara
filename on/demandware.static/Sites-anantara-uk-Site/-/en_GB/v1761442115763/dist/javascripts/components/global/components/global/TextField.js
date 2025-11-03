import AbstractField from "components/global/AbstractField";
import { ajax } from "toolbox/ajax";
import { deepMerge } from "toolbox/deepMerge";
import Validators from "toolbox/validators";
import { on, off, trigger } from "toolbox/event";
/**
 * This is a description of the TextField constructor function.
 * @class
 * @classdesc This is a description of the TextField class.
 * @extends AbstractField
 */
export default class TextField extends AbstractField {
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
          limitItems: 0, // maximum items that can be introduced in the same field
          limitSeparator: ",", // default separator for items that can be introduced in the same field
          charCounter: false,
          restoreValueOnError: false,
          isConvertToUpper: false, // Convert input value to uppercase
          autofocus: false, // Focus on field after initialization
          serverValidationOnChange: false, // necessity of server-side validation on change
          serverValidationErrorMessage: null, // Error message of server-side validation
          serverValidationURL: null, // URL for server-side validation
          forcedPattern: null, // force pattern on input field, using to limit input value
          classNames: {
            counter: "c-text-field__counter",
          },
        },
        options,
      ),
    );
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    super.bindEvents();
    if (
      this.options.charCounter ||
      this.options.isConvertToUpper ||
      this.options.forcedPattern
    ) {
      on("input", this.field, this.onChangeText.bind(this));
    }
    // workaround to disable date picker on readonly date input on iOS devices
    if (this.field.type === "date" && this.field.getAttribute("readonly")) {
      on("mousedown", this.field, this.onMousedownReadonlyDate.bind(this));
    }
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    super.initState();
    this.state.message = "";
    this.state.prevValue = this.field.value;
    this.state.ariaDescribedBy = this.field.hasAttribute("aria-describedby")
      ? this.field.getAttribute("aria-describedby")
      : "";
    if (this.options.charCounter) {
      this.state.ariaDescribedBy =
        `${this.state.ariaDescribedBy} ${this.field.id}-counter`.trim();
      this.state.maxLength = parseInt(this.field.getAttribute("maxlength"), 10);
    }
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    super.afterInit();
    this.initFieldState();
    const rules = {
      limitItems: this.options.limitItems,
      limitSeparator: this.options.limitSeparator,
    };
    this._validators = deepMerge(this._validators, {
      maxitems: (field) => Validators.maxitems(field, rules),
    });
    if (this.options.charCounter) {
      this.field.setAttribute("aria-describedby", this.state.ariaDescribedBy);
      this.showCounter();
      this.selectors.countElement =
        this.element.querySelector("[data-js-count]");
      this.onChangeText();
    }
    if (this.options.autofocus) {
      this.field.focus();
    }
  }
  /**
   * Handler of 'invalid' field event
   * @param {Event} e event data
   * @returns {Boolean} false if field is alredy showing the same error, true otherwise
   */
  onNativeError(e) {
    if (this.options.restoreValueOnError) {
      e.preventDefault();
      this.field.value = this.state.message;
      return true;
    }
    return super.onNativeError(e);
  }
  /* eslint-disable complexity */
  /**
   * Handler message input
   */
  onChangeText() {
    if (
      this.options.forcedPattern &&
      !new RegExp(this.options.forcedPattern).test(this.field.value)
    ) {
      this.field.value = this.state.prevValue;
      return;
    }
    if (this.options.isConvertToUpper && this.field.value) {
      this.field.value = this.field.value.toUpperCase();
    }
    if (this.options.charCounter && this.state.maxLength) {
      // Custom maxlength control to cover half-width symbols case
      this.field.value = this.field.value.substring(0, this.state.maxLength);
    }
    if (this.options.restoreValueOnError) {
      // native validation
      if (this.field.checkValidity()) {
        this.state.message = this.field.value;
      }
    } else {
      this.state.message = this.field.value;
    }
    if (this.options.charCounter) {
      this.selectors.countElement.innerText = this.field.value.length;
    }
    this.state.prevValue = this.field.value;
  }
  /**
   * Handler for native field validation
   */
  onValidation() {
    super.onValidation();
    if (!this.errorElement && this.options.serverValidationOnChange) {
      this.serverValidation().catch(() => {});
    }
  }
  /**
   * Reset the field to empty & remove custom focus class
   */
  onReset() {
    super.onReset();
    this.element.value = "";
    this.setFieldState(false);
    this.element.classList.remove(this.classes.focus);
  }
  /**
   * Set chars counter message
   */
  showCounter() {
    const counterNode = document.createElement("span");
    counterNode.classList.add(this.options.classNames.counter);
    counterNode.setAttribute("data-js-counter", "");
    counterNode.setAttribute("id", `${this.field.id}-counter`);
    counterNode.innerHTML = this.field.dataset.customMessageCharcounter;
    this.element.appendChild(counterNode);
    this.selectors.maxLengthElement =
      this.element.querySelector("[data-js-max]");
  }
  /**
   * remove error to the field
   * put back the initial aria-describedby value if necessary
   */
  removeError() {
    super.removeError();
    if (this.state.ariaDescribedBy) {
      this.field.setAttribute("aria-describedby", this.state.ariaDescribedBy);
    }
  }
  /**
   * Handler for server-side validation via ajax
   * @param {String} param param
   * @returns {Promise} Result
   */
  serverValidation(param) {
    const urlParam = param || "message";
    const serverValidationURL =
      this.field.dataset.serverValidationUrl ||
      this.options.serverValidationURL;
    if (!serverValidationURL) {
      return Promise.reject(
        new Error("URL for server-side validation is not configured"),
      );
    }
    const separator = serverValidationURL.indexOf("?") === -1 ? "?" : "&";
    let url = `${serverValidationURL}${separator}${urlParam}=${encodeURIComponent(this.field.value)}`;
    if (this.field.dataset.serverValidationCustomAssetId) {
      url += `&customassetid=${this.field.dataset.serverValidationCustomAssetId}`;
    }
    return ajax(url).catch((e) => {
      const message =
        this.options.serverValidationErrorMessage || e.data.errorMessage;
      trigger("field.invalidate", this.field, {
        errorMessage: message,
        errorKey: "customError",
      });
      return Promise.reject(e);
    });
  }
  /**
   * Set initial field state depending on content
   */
  initFieldState() {
    if (this.field.value !== "") {
      this.setFieldState(true);
    }
  }
  /**
   * Onleave event handler
   */
  onLeave() {
    this.trim();
    super.onLeave();
  }
  /**
   * Change max message length
   * @param {Number} maxMessageLength new maxLength value
   */
  updateMessageLength(maxMessageLength) {
    if (maxMessageLength <= 0) {
      maxMessageLength = 0;
    }
    if (this.state.message && this.state.message.length > maxMessageLength) {
      this.state.message = this.state.message.substring(0, maxMessageLength);
      this.field.value = this.state.message;
      if (this.selectors.countElement) {
        this.selectors.countElement.innerText = this.state.message
          ? this.state.message.length
          : 0;
      }
      trigger("change", this.field, { bubbles: true });
    }
    if (this.selectors.maxLengthElement) {
      this.selectors.maxLengthElement.innerText = maxMessageLength;
      this.field.setAttribute("maxlength", maxMessageLength);
      this.state.maxLength = maxMessageLength;
    }
  }
  /**
   * Handles the mousedown action for a readonly input date field
   * to prevent the device's system datepicker from opening
   * @param {Event} e - the mousedown event object
   * @returns {boolean} - always returns false to prevent default action
   */
  onMousedownReadonlyDate(e) {
    e.preventDefault();
    return false;
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    super.destroy();
    if (this.options.charCounter) {
      off("input", this.field);
    }
  }
}
