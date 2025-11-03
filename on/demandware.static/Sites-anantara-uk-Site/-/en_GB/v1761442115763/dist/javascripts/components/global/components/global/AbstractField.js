/* eslint-disable max-lines */
import Component from "core/Component";
import { on, off, trigger } from "toolbox/event";
import { animate } from "toolbox/animate";
import { ajax } from "toolbox/ajax";
import { debounce } from "toolbox/debounce";
import { tryParseJSON } from "toolbox/object";
import { deepMerge } from "toolbox/deepMerge";
import { Event } from "services/EventEmitter";
import Validators from "toolbox/validators";
import Registry from "core/ComponentRegistry";
import { stringify } from "toolbox/queryString";
import { getCSRF } from "toolbox/csrf";
/**
 * This is a description of the AbstractField constructor function.
 * @class
 * @classdesc This is a description of the AbstractField class.
 * @extends Component
 */
export default class AbstractField extends Component {
  /**
   * Constructor of the class that mainly merge the options of the components
   * @param {HTMLElement} element HTMLElement of the component
   * @param {Object} options options that belongs to the component
   * @param {Object} store Store
   */
  constructor(element, options = {}, store) {
    super(
      element,
      deepMerge(
        {
          classNames: {
            error: null, // Array
            shake: "h-shake",
            requirements: "c-alert",
            requirementsInner: "c-alert__message",
            requirementsTitle: "",
            requirementsList: "",
          },
          validationEvent: "change",
          triggerName: null, // if set, on this event additional bubbling event will be fired (defined in 'triggerAction')
          triggerAction: null, // additional event that will be fired on event defined in 'triggerName'
          disableCopyPaste: false, // disable copy\paste for this field
          stateDependencies: null, // field state dependencies, other fields can be dependent on current field state
          showValidState: false, // highlight valid state for field
          shakeFieldOnError: false, // shake animation for invalid field
          disableValidation: false, // disable client-side validation for the field
          updateInvalidValue: false, // update the field with a new value if invalid
          showErrorMessage: true, // Show default error message under a field
          // The parameters for displaying a table with requirements of all validations for this field;
          // if null, the table is not displayed
          fieldRequirements: null,
          requirementsSuccessMessage: "Requirements met successfully.",
          jumpTo: "",
          pattern: null, // patterns map
          prerequisite: null, // object with prerequisite params, set it if you need check some condition before use
        },
        options,
      ),
      store,
    );
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    this.classes = {
      focus: "m-focus",
      active: "m-active",
      error: "m-error",
      valid: "m-valid",
      success: "m-success",
      onValidate: "m-on-validate",
      errorMessage: "c-field__error-message",
    };
    this.field = this.element.hasAttribute("data-js-field")
      ? this.element
      : this.element.querySelector("[data-js-field]");
    this.form = this.element.closest("form");
    this.jumpTo = this.options.jumpTo
      ? this.form.querySelector(this.options.jumpTo)
      : null;
    if (!this.field) {
      throw new Error(
        "Please add data-js-field attribute on your field (input, textarea, select)",
      );
    }
    if (this.field.id) {
      this.label = document.querySelectorAll(
        `[for="${this.field.id}"], [data-label-for="${this.field.id}"]`,
      );
    }
    if (this.field.type === "radio") {
      const form = this.element.closest("form");
      this.selectors.stateTargets =
        form && form.querySelectorAll(`[name="${this.field.name}"]`);
    }
    this.hasErrorKey = false;
    this.customValidators = tryParseJSON(this.field.dataset.customvalidation);
    this.remoteValidator = tryParseJSON(this.field.dataset.remotevalidation);
    // Defines which field events could cause each state change
    this.statesTriggersMap = {
      checked: "change click keyup paste input", // for checkbox fields
      unchecked: "change click keyup paste input", // for checkbox fields
      selected: "change", // only for select fields
      empty: "change click keyup paste input", // for text or textarea fields
      filled: "change click keyup paste input", // for text or textarea fields
    };
    if (this.options.stateDependencies) {
      this.stateTriggers = this.getStateTriggers();
    }
  }
  /**
   * Custom validator getter
   * @returns {Object} custom validator functions
   */
  get validators() {
    return this._validators;
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    Validators.getValidators(this.customValidators).then((validators) => {
      this._validators = validators;
    });
    // if other fileds dependent on this field state - fire state change initially
    // to synchronize initial states (usually this synch is done on server already)
    if (this.options.stateDependencies && this.form) {
      Registry.afterRegistered(this.form).then(() => {
        this.triggerStateEvents();
      });
    }
  }
  /**
   * Focus field
   * @param {Object} field field DOM element
   *
   */
  focusField(field) {
    if (field) {
      field.focus();
    }
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.initialValue = this.field.value;
    this.state.triggerStateEventsOnInitDone = false;
    this.state.fieldState = null;
    this.state.customFieldState = null;
    // initialize error state
    this.hasErrorKey = this.element.classList.contains(this.classes.error);
    if (this.hasErrorKey) {
      this.errorElement = this.element.querySelector(
        `.${this.classes.errorMessage}`,
      );
    }
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    on("focus", this.field, this.onFocus.bind(this));
    on("blur", this.field, this.onLeave.bind(this));
    on("field.reset", this.field, this.onReset.bind(this));
    on("error.reset", this.field, this.removeError.bind(this));
    on("field.invalidate", this.field, this.onCustomError.bind(this));
    on(
      "field.dependency.action",
      this.field,
      this.handleDependencyAction.bind(this),
    );
    on(
      "field.initInitialValue",
      this.element,
      this.onInitInitialValue.bind(this),
    );
    // Added condition to skip client validation
    if (!this.options.disableValidation) {
      on("invalid", this.field, this.onNativeError.bind(this));
      on(
        this.options.validationEvent,
        this.field,
        debounce(this.onValidation.bind(this)),
      );
      on(
        "field.customvalidation",
        this.field,
        this.customValidation.bind(this),
      );
    }
    if (this.options.disableCopyPaste) {
      on("copy paste drag drop", this.field, this.disableCopyPaste.bind(this));
    }
    if (this.options.triggerName) {
      on(
        this.options.triggerName,
        this.field,
        this.triggerBubblingEvent.bind(this),
      );
    }
    (this.stateTriggers || []).forEach((state) => {
      on(
        state,
        this.selectors.stateTargets || this.field,
        this.triggerStateEvents.bind(this),
      );
    });
    if (this.options.fieldRequirements) {
      on(
        "keyup.fieldrequirements",
        this.field,
        this.onChangeForFieldRequirements.bind(this),
      );
      on(
        "paste.fieldrequirements",
        this.field,
        this.onChangeForFieldRequirements.bind(this),
      );
    }
    if (this.options.prerequisite) {
      const prerequisiteEvent = this.options.prerequisite.event || "click";
      on(
        `${prerequisiteEvent}.prerequisite`,
        this.field,
        this.onPrerequisiteCheck.bind(this),
        true,
      );
    }
  }
  /**
   * Get event names which could be the triggers for state change events.
   * Triggers for each state defined in stateDependencies collected by statesTriggersMap.
   * @returns {Array} array of strings with event names
   */
  getStateTriggers() {
    const eventSuffix = this.field.type === "radio" ? this.field.id : "";
    return (
      Object.keys(this.options.stateDependencies || {})
        .reduce((prev, state) => {
          [state] = state.split("#");
          const events = this.statesTriggersMap[state];
          return events ? prev.concat([events]) : prev;
        }, [])
        // modify event names to make them unique and stateTriggers dependent
        .map((events) =>
          events
            .split(" ")
            .map((event) => `${event}.stateTriggers${eventSuffix}`)
            .join(" "),
        )
        // remove duplicates
        .filter((elem, pos, arr) => arr.indexOf(elem) === pos)
    );
  }
  /* eslint-disable complexity, max-lines */
  /**
   * Handle state events triggering
   */
  triggerStateEvents() {
    let newState;
    switch (this.field.type) {
      case "tel":
      case "text":
      case "textarea":
      case "file":
        if (
          "witherror" in this.options.stateDependencies ||
          "withouterror" in this.options.stateDependencies
        ) {
          newState = this.errorElement ? "witherror" : "withouterror";
        } else {
          newState = this.field.value === "" ? "empty" : "filled";
        }
        break;
      case "radio":
      case "checkbox":
        newState = this.field.checked ? "checked" : "unchecked";
        break;
      default:
    }
    if (
      this.state.fieldState !== newState &&
      newState in this.options.stateDependencies
    ) {
      this.state.fieldState = newState;
      const dependentActions = this.processSelfActions(
        this.options.stateDependencies[newState],
      );
      trigger("field.dependency.state.changed", this.field, {
        bubbles: true,
        dependentActions,
        masterField: this.field,
      });
      this.state.triggerStateEventsOnInitDone = true;
    }
  }
  /**
   * Handle custom state events triggering
   * @param {String} newState custom state
   * @param {Object} data data object
   */
  triggerCustomStateEvents(newState, data) {
    if (
      this.state.customFieldState !== newState &&
      newState in this.options.stateDependencies
    ) {
      this.state.customFieldState = newState;
      const dependentActions = this.processSelfActions(
        this.options.stateDependencies[newState],
      );
      trigger("field.dependency.state.changed", this.field, {
        bubbles: true,
        dependentActions,
        masterField: this.field,
        data,
      });
    }
  }
  /**
   * Process actions related to current field (self)
   * and filter out such actions from the passed array
   * @param {Array} dependentActions dependent actions
   * @returns {Array} filtered dependent actions
   */
  processSelfActions(dependentActions) {
    return dependentActions.filter((entry) => {
      const [fieldName, fieldAction, fieldActionCondition] = entry.split(":");
      if (fieldName === "self") {
        if (this.checkDependencyCondition(fieldActionCondition)) {
          const [action, ...actionParams] = fieldAction.split("-");
          this.handleDependencyAction({
            detail: {
              action,
              actionParams,
              masterField: this.field,
            },
          });
        }
        return false;
      }
      return true;
    });
  }
  /**
   * Send state-dependent analytics.
   * @param {Object} e event object
   */
  sendAnalyticsBlock(e) {
    const analyticsBlock = e && e.detail && e.detail.actionParams[0];
    if (analyticsBlock && this.analytics && this.analytics[analyticsBlock]) {
      Event.emit("analytics.event", this.analytics[analyticsBlock]);
    }
  }
  /**
   * Check field dependency condition. Returns true if condition is eligible.
   * @param {String} dependencyCondition dependent analytics key
   * @returns {Boolean} true, if condition is eligible
   */
  checkDependencyCondition(dependencyCondition) {
    return dependencyCondition === "ifNotOnInit"
      ? this.state.triggerStateEventsOnInitDone
      : true;
  }
  /**
   * Handle action communicated by the event from the master field.
   * This means that current field state/action was specified as dependent form another field state change in json schema.
   * @param {Object} e event data
   *
   */
  handleDependencyAction(e) {
    if (e.detail.action && typeof this[e.detail.action] === "function") {
      this[e.detail.action](e);
    }
  }
  /**
   * Update field values based on master values
   * Could have different implementations based on field type, so usually overloaded.
   * @param {Event} e - event data
   */
  updateValue() {
    // should be extended in the child class
  }
  /**
   * Update field maxLength based on master values
   * @param {Event} e - event data
   */
  updateMaxLength(e) {
    const newMaxLength =
      e.detail &&
      e.detail.masterField &&
      e.detail.masterField.dataset.dependencyNewMaxLength;
    if (newMaxLength) {
      this.field.setAttribute("maxlength", newMaxLength);
    }
  }
  /**
   * Update dependent fields pattern attribute based on master values
   * Could have different implementations based on field type, so usually overloaded.
   * @param {Event|Object} e - event data
   */
  updatePattern(e) {
    let isUpdatePattern = false;
    let pattern = null;
    let clearInvalidContent = false;
    if (e instanceof CustomEvent) {
      isUpdatePattern = !!this.options.pattern;
      const masterValue =
        e.detail && e.detail.masterField && e.detail.masterField.value;
      pattern = this.options.pattern && this.options.pattern[masterValue];
    } else {
      const data = e || {};
      isUpdatePattern = true;
      clearInvalidContent = data.clearOnError;
      pattern = data.pattern && {
        pattern: data.pattern.value,
        "data-error-pattern": data.pattern.error,
      };
    }
    if (isUpdatePattern) {
      if (pattern) {
        this.field.setAttribute("pattern", pattern.pattern);
        this.field.setAttribute(
          "data-error-pattern",
          pattern["data-error-pattern"],
        );
      } else {
        this.field.removeAttribute("pattern");
        this.field.removeAttribute("data-error-pattern");
      }
      if (this.field.value) {
        if (this.field.checkValidity()) {
          this.removeError();
        } else if (clearInvalidContent) {
          this.field.value = "";
          trigger("change", this.field, { bubbles: true });
        }
      }
    }
  }
  /**
   * Show field
   */
  show() {
    this.element.classList.remove("h-hidden");
    if (this.label) {
      this.label.forEach((element) => {
        element.classList.remove("h-hidden");
      });
    }
  }
  /**
   * Hide field
   */
  hide() {
    this.element.classList.add("h-hidden");
    if (this.label) {
      this.label.forEach((element) => {
        element.classList.add("h-hidden");
      });
    }
  }
  /**
   * Enable field
   */
  enable() {
    this.field.enabled = true;
    this.field.disabled = false;
  }
  /**
   * Disable field
   */
  disable() {
    this.field.enabled = false;
    this.field.disabled = true;
  }
  /**
   * Check field
   */
  check() {
    this.field.checked = true;
    trigger("click", this.field);
  }
  /**
   * Uncheck field
   */
  uncheck() {
    this.field.checked = false;
    trigger("click", this.field);
  }
  /**
   * Make field required
   */
  require() {
    this.field.setAttribute("required", "required");
    this.field.setAttribute("aria-required", "true");
  }
  /**
   * Make field unrequired
   */
  unrequire() {
    this.field.removeAttribute("required");
    this.field.setAttribute("aria-required", "false");
    if (this.field.checkValidity()) {
      this.removeError();
    }
  }
  /**
   * Set or remove active field state
   * @param {Boolean} activate whether to activate field or deactivate
   * @param {HTMLNode} elmt HTMLNode
   */
  setFieldState(activate, elmt) {
    const target = elmt || this.element;
    const activeClass = this.classes.active;
    if (activate) {
      target.classList.add(activeClass);
    } else {
      target.classList.remove(activeClass);
    }
  }
  /**
   * Triggers an event that bubbles up through the parent DOM nodes
   */
  triggerBubblingEvent() {
    trigger(this.options.triggerAction, this.field, { bubbles: true });
  }
  /**
   * On focus event handler
   */
  onFocus() {
    this.element.classList.add(this.classes.focus);
    if (this.field.value !== "") {
      this.setFieldState(true);
    }
    if (this.options.fieldRequirements && !this.selectors.requirements) {
      this.createFieldRequirements();
    }
  }
  /**
   * On leave event handler
   */
  onLeave() {
    this.element.classList.remove(this.classes.focus);
    if (this.field.value === "") {
      this.setFieldState(false);
    } else {
      this.setFieldState(true);
    }
    if (
      !this.state.isValidated &&
      this.field.value !== "" &&
      this.selectors.requirementsList
    ) {
      this.state.isValidated = true;
      this.selectors.requirementsList.classList.remove(this.classes.onValidate);
    }
  }
  /**
   * on reset event handler
   */
  onReset() {
    this.reset();
    this.removeError();
    this.removeValidationClass();
  }
  /**
   * Reset the field to empty
   */
  reset() {
    if (this.field.type === "checkbox") {
      this.field.checked = false;
    } else {
      this.field.value = "";
    }
  }
  /**
   * Trim spaces for field
   */
  trim() {
    this.field.value = this.field.value.trim();
  }
  /**
   * Set value
   * @param {String} value value
   */
  setValue(value) {
    this.field.value = value;
  }
  /**
   * Prevents default events handler to disable copypaste
   * @param {Event} e event data
   * @returns {Boolean} always returns false
   */
  disableCopyPaste(e) {
    e.preventDefault();
    return false;
  }
  /**
   * Removes class used for validation
   */
  removeValidationClass() {
    this.element.classList.remove(this.classes.valid);
  }
  /**
   * Handler for native field validation
   */
  removeError() {
    this.element.classList.remove(this.classes.error);
    this.field.removeAttribute("aria-invalid");
    if (this.options.showErrorMessage) {
      this.field.removeAttribute("aria-describedby");
    }
    if (this.hasErrorKey) {
      this.element.removeChild(this.errorElement);
      this.errorElement = null;
      this.hasErrorKey = false;
    }
    if (this.options.stateDependencies && this.form) {
      // using timeout to trigger state dependencies after form reset
      setTimeout(() => {
        if (this.options.stateDependencies && this.form) {
          this.triggerStateEvents();
        }
      }, 0);
    }
  }
  /**
   * Add error to the field
   * @param {string} errorMessage - error message to show near to field
   * @param {string} errorKey - type of error (minlength, maxlength, required etc...)
   */
  addError(errorMessage, errorKey) {
    this.element.classList.remove(this.classes.valid);
    this.element.classList.add(this.classes.error);
    if (!this.options.fieldRequirements || this.options.showErrorMessage) {
      const counterNode = this.element.querySelector("[data-js-counter]");
      if (!this.errorElement) {
        const errorID = `error-${this.field.getAttribute("id")}`;
        this.errorElement = document.createElement("div");
        this.errorElement.classList.add(this.classes.errorMessage);
        this.errorElement.setAttribute("id", errorID);
        this.errorElement.setAttribute("role", "alert");
        this.errorElement.setAttribute("data-js-error", true);
        this.errorElement.innerHTML = errorMessage;
        if (counterNode) {
          this.element.insertBefore(this.errorElement, counterNode);
        } else {
          this.element.appendChild(this.errorElement);
        }
        this.field.setAttribute("aria-invalid", true);
        this.field.setAttribute("aria-describedby", errorID);
      } else {
        this.errorElement.innerHTML = errorMessage;
      }
      this.hasErrorKey = errorKey;
    }
    if (this.options.stateDependencies && this.form) {
      this.triggerStateEvents();
    }
  }
  /**
   * Handler for native field validation
   */
  onValidation() {
    this.validate();
    // remote validation
    // TODO: Currently this is not real validation, just async call on validation event
    if (this.remoteValidator) {
      this.remoteValidation();
    }
  }
  /**
   * Process field validation
   * @returns {Boolean} validation status
   */
  validate() {
    this.field.setCustomValidity(""); // makes field natively valid
    // native validation
    let valid = this.field.checkValidity();
    // custom validation
    valid = this.customValidation() && valid;
    if (valid) {
      this.removeError();
      if (this.jumpTo) {
        this.focusField(this.jumpTo);
      }
      if (this.options.showValidState && this.field.value.trim() !== "") {
        this.element.classList.add(this.classes.valid);
      } else {
        this.element.classList.remove(this.classes.valid);
      }
    }
    return valid;
  }
  /**
   * Handler for custom field validation. If 'customValidators' defined
   * @returns {Boolean} custom validation status
   */
  customValidation() {
    if (this.customValidators) {
      return Object.keys(this.customValidators).every(
        (validatorId) =>
          !(validatorId in this.validators) ||
          this.validators[validatorId].call(
            this,
            this.field,
            this.customValidators[validatorId],
          ),
      );
    }
    return true;
  }
  /**
   * Handler for remote field validation (via API call). If 'remoteValidator' defined
   */
  async remoteValidation() {
    if (!this.remoteValidator) {
      return;
    }
    const formData = new FormData();
    if (this.field.type !== "checkbox" || this.field.checked) {
      formData.append(this.field.name, this.field.value);
    }
    const csrf = await this.getCSRFToken();
    formData.append("csrf_token", csrf);
    ajax(this.remoteValidator.url, {
      method: "POST",
      body: formData,
    }).then(this.remoteValidationSuccess.bind(this));
  }
  /**
   * Handler for successful remote validation call
   * @param {Object} data result of remote validation
   */
  remoteValidationSuccess(data) {
    if (data.dependencyState) {
      this.triggerCustomStateEvents(data.dependencyState, data);
    } else {
      trigger("field.remote.validation.success", this.field, {
        bubbles: true,
        data,
      });
    }
  }
  /**
   * Handler of 'invalid' field event
   * @param {Event} e event data
   * @returns {Boolean} false if field is alredy showing the same error, true otherwise
   */
  onNativeError(e) {
    e.preventDefault();
    let errorKey;
    //  HTML5 ValidityState <-> jsonschema
    const map = {
      badInput: "format",
      patternMismatch: "pattern",
      rangeOverflow: "maximum", // and exclusiveMaximum
      rangeUnderflow: "minimum", // and exclusiveMinimum
      stepMismatch: "",
      tooLong: "maxlength",
      tooShort: "minlength",
      typeMismatch: "format", // when type is "email" or "url"
      valueMissing: "required",
      customError: "customError",
    };
    Object.keys(map).forEach((key) => {
      if (this.field.validity[key]) {
        errorKey = map[key];
      }
    });
    // in case if field invalidated with custom error programmatically
    if (errorKey === "customError") {
      errorKey = this.field.validationMessage;
    }
    if (this.options.shakeFieldOnError) {
      this.shakeField();
    }
    // Field already showing same error
    if (this.hasErrorKey && this.hasErrorKey === errorKey) {
      return false;
    }
    const errKey = `error${errorKey.charAt(0).toUpperCase()}${errorKey.slice(1)}`;
    const errorMessage =
      this.field.dataset[errKey] || `[Native] ${this.field.validationMessage}`;
    this.removeError();
    this.addError(errorMessage, errorKey);
    return true;
  }
  /**
   * Shake animation for invalid field
   * @returns {promise} animation promise
   */
  shakeField() {
    return animate(this.options.classNames.shake, this.element);
  }
  /**
   * Get the CSRF token value generated in the <meta> tag.
   *
   * @returns {Promise} promise with CSRF token value
   */
  async getCSRFToken() {
    const csrf = await getCSRF();
    return (csrf && csrf.token) || "";
  }
  /**
   * Handler of custom event 'field.invalidate'
   * @param {CustomEvent} event event.data structure: {errorMessage: 'string', errorKey: 'string'}
   */
  onCustomError(event) {
    const data = event.detail;
    this.addError(data.errorMessage, data.errorKey);
    if (
      this.options.updateInvalidValue &&
      (data.newValue || data.newValue === "")
    ) {
      this.setValue(data.newValue);
    }
  }
  /**
   * Init initial value event handler
   */
  onInitInitialValue() {
    this.field.value = this.state.initialValue;
    trigger(this.options.validationEvent, this.field);
  }
  /**
   * Create requirements block
   */
  createFieldRequirements() {
    this.selectors.requirements = document.createElement("div");
    if (!this.options.showErrorMessage) {
      this.field.setAttribute(
        "aria-describedby",
        `${this.field.id}-requirements`,
      );
      this.selectors.requirements.setAttribute(
        "id",
        `${this.field.id}-requirements`,
      );
    }
    this.selectors.requirements.setAttribute(
      "class",
      `${this.options.classNames.requirements}`,
    );
    const requirementsInner = document.createElement("div");
    requirementsInner.setAttribute(
      "class",
      `${this.options.classNames.requirementsInner}`,
    );
    const requirementsTitle = document.createElement("p");
    requirementsTitle.setAttribute(
      "class",
      `c-text-field__requirements-title ${this.options.classNames.requirementsTitle}`,
    );
    requirementsTitle.innerHTML = this.options.fieldRequirements.title;
    requirementsInner.appendChild(requirementsTitle);
    this.selectors.requirementsList = document.createElement("ul");
    this.selectors.requirementsList.setAttribute(
      "class",
      `c-text-field__requirements-list ${this.options.classNames.requirementsList} ${this.classes.onValidate}`,
    );
    this.selectors.requirementsRules = {};
    Object.keys(this.options.fieldRequirements.rules).forEach((ruleId) => {
      const rule = this.options.fieldRequirements.rules[ruleId];
      const ruleItem = document.createElement("li");
      const ruleContent = document.createElement("div");
      const ruleValidMessage = document.createElement("span");
      ruleItem.setAttribute("class", "c-text-field__requirements-item");
      ruleContent.setAttribute("class", "c-text-field__requirements-content");
      ruleValidMessage.setAttribute("class", "h-show-for-sr");
      ruleValidMessage.setAttribute("data-js-valid-rule-message", "");
      ruleValidMessage.innerHTML =
        this.options.fieldRequirements.a11y.ruleNotMet || "";
      ruleContent.innerHTML = rule.title;
      ruleItem.appendChild(ruleValidMessage);
      ruleItem.appendChild(ruleContent);
      this.selectors.requirementsList.appendChild(ruleItem);
      this.selectors.requirementsRules[ruleId] = ruleItem;
    });
    requirementsInner.appendChild(this.selectors.requirementsList);
    this.selectors.requirements.appendChild(requirementsInner);
    this.element.appendChild(this.selectors.requirements);
  }
  /**
   * Change event handler
   * @param {Object} event data
   */
  onChangeForFieldRequirements(event) {
    const { target } = event;
    this.state.isAllValid = true; // Assume all validations are initially valid
    if (!target.value) {
      this.state.isValidated = false;
      this.state.isAllValid = false;
      this.selectors.requirements.removeAttribute("aria-label");
      this.selectors.requirementsList.classList.add(this.classes.onValidate);
      Object.keys(this.customValidators).forEach((validatorId) => {
        if (validatorId in this.validators) {
          this.selectors.requirementsRules[validatorId].classList.remove(
            this.classes.error,
          );
          this.selectors.requirementsRules[validatorId].classList.remove(
            this.classes.success,
          );
          this.selectors.requirementsRules[validatorId].querySelector(
            "[data-js-valid-rule-message]",
          ).innerHTML = this.options.fieldRequirements.a11y.ruleNotMet || "";
        }
      });
    } else if (this.customValidators) {
      Object.keys(this.customValidators).forEach((validatorId) => {
        if (validatorId in this.validators) {
          const valid = this.validators[validatorId].call(
            this,
            this.field,
            this.customValidators[validatorId],
          );
          const ruleValidMessage = this.selectors.requirementsRules[
            validatorId
          ].querySelector("[data-js-valid-rule-message]");
          this.selectors.requirementsRules[validatorId].classList.remove(
            this.classes.error,
          );
          this.selectors.requirementsRules[validatorId].classList.remove(
            this.classes.success,
          );
          ruleValidMessage.innerHTML =
            this.options.fieldRequirements.a11y.ruleNotMet || "";
          if (!valid) {
            this.selectors.requirementsRules[validatorId].classList.add(
              this.classes.error,
            );
            this.selectors.requirements.removeAttribute("aria-label");
            this.state.isAllValid = false;
          } else {
            ruleValidMessage.innerHTML =
              this.options.fieldRequirements.a11y.ruleMet || "";
            this.selectors.requirementsRules[validatorId].classList.add(
              this.classes.success,
            );
          }
        }
      });
    }
    if (this.state.isAllValid) {
      this.selectors.requirements.setAttribute(
        "aria-label",
        this.options.requirementsSuccessMessage,
      );
    }
  }
  /**
   * Process prerequisite check
   * Can be used to do external pre validation on some action
   * @param {Object} e event data
   */
  onPrerequisiteCheck(e) {
    if (this.state.prerequisiteValid) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
    const { url, data } = this.options.prerequisite;
    ajax(url, {
      method: "POST",
      body: stringify(data || {}),
    }).then(this.onPrerequisiteUpdated.bind(this));
  }
  /**
   * Callback for ajax data request
   * Do prerequisite actions or continue flow
   * @param {Object} data json models data
   */
  onPrerequisiteUpdated(data) {
    const { valid, modal } = data;
    this.state.prerequisiteValid = valid;
    if (valid) {
      const event = this.options.prerequisite.event || "click";
      if (typeof this.field[event] === "function") {
        this.field[event]();
      } else {
        trigger(event, this.field);
      }
      return;
    }
    if (modal) {
      this.openModal(modal);
    }
  }
  /**
   * Open modal
   *
   * @param {Object} options Modal settings
   */
  openModal(options) {
    Event.emit("modal.open", {
      options,
    });
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    off(this.field);
    off(this.element);
  }
}
