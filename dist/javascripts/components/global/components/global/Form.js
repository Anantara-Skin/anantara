/* eslint complexity: off */
/* eslint max-lines: off */
import Component from "core/Component";
import { ajax } from "toolbox/ajax";
import { mix } from "core/mixwith";
import { Event } from "services/EventEmitter";
import { on, off, trigger } from "toolbox/event";
import { deepMerge } from "toolbox/deepMerge";
import AnalyticsMixin from "mixins/Analytics";
import AccessibilityMixin from "mixins/Accessibility";
import Registry from "core/ComponentRegistry";
import { getRelativeSelector } from "toolbox/html";
import { scrollTo, waitForScrollEnd } from "toolbox/scroll";
import CrossRequestStorage from "services/CrossRequestStorage";
import { getCSRF } from "toolbox/csrf";
/**
 * This is a description of the Form constructor function.
 * @class
 * @classdesc This is a description of the Form class.
 * @extends Component
 */
export default class Form extends mix(Component).with(
  AnalyticsMixin,
  AccessibilityMixin,
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
          headers: {},
          errorMessages: {
            captchaRequired: "",
          },
          text: {
            accessibility: {
              processingStatusMessage: "",
              finishedStatusMessage: "",
            },
            genericErrorMessage: "",
          },
          classNames: {
            formErrorMessage: "c-alert m-error",
          },
          onSubmitSuccessReload: false, // replace form content with content that came from server on success
          showErrorAsSnackbar: false, // show error as a snackbar element
          showSuccessAsSnackbar: false, // show success message as a snackbar element
          clearFormOnSuccess: true, // clear form on success
          onSubmitErrorReload: false, // replaces form content with content that came from server on error
          successModal: null, // pass the same options as the ones in Modal.js
          submitOnChange: false, // submit form on change
          closeModalOnSuccess: false, // close Modal on form submit success (for case when form is rendered inside modal)
          clearCustomMessageOnError: false, // remove custom message, if it was added during previous submit or rendered
          captcha: null,
          prependError: false, // change error message position (at the top or at the bottom of a form)
          redirectUrl: null, // Redirect user if form submission is successful (self | string)
          events: {
            customSuccess: null,
            customError: null,
            success: "form.submit.success",
            error: "form.submit.error",
            validateError: "form.validate.error",
            submit: "form.submit",
            executeSubmit: "form.execute.submit",
            global: false, // emit global event with ajax response data
          },
          reloadData: {
            section: "common",
            id: "form",
          },
          scrollToFormOnSubmit: false, // Scrolls the parent container such that the component is visible to the user
          stickyHeaderHeight: 153, // Change it If you have a fixed header height
          isRelativeLoader: false, // makes the form loader relative to the form (by default the loader is full screen)
          disableValidation: false, // disable form validation on submit,
          keepDisabledSubmitAfterInit: false, // disable the button's disabled attribute removal at afterInit
          trackFocusedElements: true, // enable focused elements tracking
          autoSubmit: false, // submit form after initialization
          crossRequestDelayedAction: null, // this delayed action will be applied on form success submit
          crossRequestDelayedActionOnError: null, // this delayed action will be applied on form submit error
          formUniqueKey: null, // unique form key, use to identify form as target between different requests
          customValidation: false,
          customValidationSelector: null,
          keepLoaderUntilRedirected: false, // keep Loader on form submit success until page redirected
          disableLoader: false, // disable Loader for form submit
          promiseResponse: false, // return promise response on submit success
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
      submitting: this.options.isRelativeLoader
        ? ["c-loader"]
        : ["c-loader", "m-fixed", "m-icon-fixed"],
      relativeLoader: "m-relative-loader",
      error: "m-error",
      errorMessage: "c-field__error-message",
      formErrorMessage: "c-form__error-message",
      reCaptcha: "g-recaptcha",
      formCustomMessage: "c-form__custom-message",
      loadingClass: "m-loading",
    };
    this.element.noValidate = false;
    this.selectors.buttons = this.element.querySelectorAll(
      "button[name][type=submit]",
    );
    this.url = this.element.getAttribute("action");
    this.method = this.element.getAttribute("method") || "POST";
  }
  /**
   * Get the CSRF token value generated in the <meta> tag.
   * The same token can be used by any form.
   *
   * @returns {Promise} promise containing both the CSRF token name and value
   */
  async getCSRF() {
    const hasActiveCsrfProtection = this.element.getAttribute(
      "data-has-active-csrf",
    );
    // CSRF is not needed for this form, abort, no alerting needed
    if (hasActiveCsrfProtection !== "true") {
      return null;
    }
    const csrf = await getCSRF();
    if (!csrf) {
      const formIdField = this.element.querySelector('[name="form_id"]');
      if (!formIdField) {
        return null;
      }
      console.error(
        `[Form.js] Failed to get the csrf token for form "${formIdField.getAttribute("value")}"`,
      );
      return null;
    }
    return csrf;
  }
  /**
   * Returns component key
   * @override Accessibility mixin method
   * @returns {String} component key
   */
  getComponentKey() {
    if (!this._componentKey) {
      this._componentKey = getRelativeSelector(this.element);
      if (this.element.parentElement) {
        this._componentKey = getRelativeSelector(
          this.element,
          this.element.parentElement.parentElement,
        );
      }
    }
    return this._componentKey;
  }
  /**
   * Return selector for child element
   * @param {HTMLElement} element optional, custom focused state
   * @returns {String} selector for child element
   */
  getSelectorForSubElement(element) {
    return getRelativeSelector(element, element.parentElement) || true;
  }
  /**
   * Create CSRF field
   * @param { Object } data - CSRF object
   */
  createCSRFField(data) {
    if (!data || !data.name || !data.token) {
      return;
    }
    if (this.element.querySelector(`[name="${data.name}"]`)) {
      return;
    }
    // create hidden input field for CSRF token
    const input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", data.name);
    input.setAttribute("value", data.token);
    this.element.appendChild(input);
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state = {
      isSubmitting: false,
      hasError: false,
      hasCaptcha: !!this.options.captcha,
    };
    if (this.state.hasCaptcha) {
      this.state.isCaptchaValid = false;
      this.state.isCaptchaInvisible = !!this.options.captcha.invisible;
    }
    if (this.options.customValidation) {
      this.state.customValidationComplete = false;
    }
    if (this.options.isRelativeLoader) {
      this.element.classList.add(this.classes.relativeLoader);
    }
  }
  /**
   * Called after component initialization
   */
  afterInit() {
    // remove disabled attribute and loading class for each submit button
    if (
      !this.options.keepDisabledSubmitAfterInit &&
      this.selectors.buttons &&
      this.selectors.buttons.length
    ) {
      this.selectors.buttons.forEach((element) => {
        element.removeAttribute("disabled");
        element.classList.remove(this.classes.loadingClass);
      });
    }
    if (this.options.trackFocusedElements) {
      this.restoreLastFocusState();
    }
    if (this.isAutosubmitRequired()) {
      Promise.all(
        Array.from(
          this.element.querySelectorAll("[data-js-field-component]"),
        ).map((element) => Registry.afterRegistered(element, true)),
      ).then(() => {
        this.submit();
      });
    }
    // load CSRF token
    getCSRF();
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    super.bindEvents();
    on("submit", this.element, this.submit.bind(this));
    on("click", this.selectors.buttons, this.onAction.bind(this));
    on("reset", this.element, this.onReset.bind(this));
    on("form.action", this.element, this.onAction.bind(this));
    on("form.reload", this.element, this.onFormReload.bind(this));
    on("form.validate", this.element, this.onValidate.bind(this));
    if (this.state.hasCaptcha) {
      on(
        "form.captcha.success",
        this.element,
        this.onCaptchaSuccess.bind(this),
      );
      on(
        "form.captcha.expired",
        this.element,
        this.onCaptchaExpired.bind(this),
      );
    }
    if (this.options.submitOnChange) {
      on("change.submit", this.element, this.onSubmitOnChange.bind(this));
    }
    on(
      "field.dependency.state.changed",
      this.element,
      this.handleFieldStateDependencies.bind(this),
    );
  }
  /**
   * Handle fields state dependencies when master field (having dependent fields) state changes.
   * We handle bubbled event at Form level to limit the scope of field dependencies to one form.
   *
   * @param {Event} e Event data
   */
  handleFieldStateDependencies(e) {
    e.detail.dependentActions.forEach((entry) => {
      const [fieldName, fieldAction, fieldActionCondition] = entry.split(":");
      const field = this.element.querySelector(
        `[name=${fieldName}],[data-dependency-listener=${fieldName}]`,
      );
      if (!field) {
        return;
      }
      // additional condition could require that master field should be visible
      // in order to perform the dependent action
      if (
        fieldActionCondition === "ifmastervisible" &&
        e.target.offsetParent === null
      ) {
        return;
      }
      if (field.hasAttribute("data-dependency-listener")) {
        Registry.afterRegistered(field).then(() => {
          trigger("field.dependency.action", field, {
            action: fieldAction,
            masterField: e.detail.masterField,
            data: e.detail.data,
          });
        });
      } else if (
        "type" in field &&
        (field.type === "button" || field.type === "submit")
      ) {
        // buttons do not have own data-component so can not react to events
        this.handleButtonDependentAction(field, fieldAction);
      } else {
        const fieldComponent = field.closest("[data-js-field-component]");
        if (fieldComponent) {
          if (Registry.isRegistered(fieldComponent)) {
            trigger("field.dependency.action", field, {
              action: fieldAction,
              masterField: e.detail.masterField,
              data: e.detail.data,
            });
            return;
          }
          Registry.afterRegistered(fieldComponent).then(() => {
            trigger("field.dependency.action", field, {
              action: fieldAction,
              masterField: e.detail.masterField,
              data: e.detail.data,
            });
          });
        }
      }
    });
  }
  /**
   * Handle dependent action for button elements since they don't have own component
   * so can not react on events.
   *
   * @param {HTMLElement} field button HTML element
   * @param {String} fieldAction action to be performed
   */
  handleButtonDependentAction(field, fieldAction) {
    switch (fieldAction) {
      case "enable":
        field.disabled = false;
        break;
      case "disable":
        field.disabled = true;
        break;
      case "show":
        field.parentNode.classList.remove("h-hidden");
        break;
      case "hide":
        field.parentNode.classList.add("h-hidden");
        break;
      default:
        break;
    }
  }
  /**
   * Handler for custom 'form.action' event which could be triggered by non-submit form elements
   * or elements outside of the form.
   *
   * @param {Event} e Event data
   */
  onAction(e) {
    e.preventDefault();
    const name = (e.detail && e.detail.name) || e.target.name;
    const value = (e.detail && e.detail.value) || e.target.value;
    const target = (e.detail && e.detail.target) || e.target;
    if (!e.detail || !e.detail.skipAnalytics) {
      this._initEventAnalytics(target);
    }
    let action = null;
    if (name && !(e.target.type === "checkbox" && !e.target.checked)) {
      const serializedForm = this.getSerializedForm(this.getBody());
      // do not create duplicated filed with the same value
      // TODO: review all the cases where duplicated fields were created and refactor
      if (!(name in serializedForm) || serializedForm[name] !== value) {
        action = document.createElement("input");
        action.type = "hidden";
        action.name = name;
        action.value = value;
        this.element.appendChild(action);
      }
    }
    this.submit()
      .catch(() => {})
      .finally(() => {
        if (action) {
          action.remove();
        }
      });
  }
  /**
   * Form reset handler
   */
  onReset() {
    this.resetFields();
  }
  /**
   * Form reload handler
   */
  onFormReload() {
    this.reload({
      data: this.element.name,
    });
  }
  /**
   * Submit form on change
   * @param {Object} e event
   */
  onSubmitOnChange(e) {
    trigger("form.action", e.target, { bubbles: true });
  }
  /**
   * Captcha validation callback
   *
   * @param {Event} e Event data
   */
  onCaptchaSuccess(e) {
    e.stopPropagation();
    this.state.isCaptchaValid = true;
    this.clearFormErrors();
  }
  /**
   * Captcha expired callback
   *
   * @param {Event} e Event data
   */
  onCaptchaExpired(e) {
    e.stopPropagation();
    this.state.isCaptchaValid = false;
  }
  /**
   * Called before the submit happens
   */
  beforeSubmit() {
    // Can be extended
  }
  /**
   * Runs form client validation
   * @returns {Boolean} true, if valid
   */
  clientValidate() {
    // Do not validate the form if disableValidation option flag is set to true
    if (this.options.disableValidation) {
      return true;
    }
    this.validate();
    if (!this.element.checkValidity()) {
      trigger(this.options.events.validateError, this.element, {
        bubbles: true,
      });
      if (this.options.scrollToFormOnSubmit) {
        this.element.scrollIntoView({ block: "center" });
      }
      this.scrollToFirstError();
      return false;
    }
    return true;
  }
  /**
   * Submit callback
   *
   * @param {Event} e event data
   * @returns {Boolean} submit result
   */
  async submit(e) {
    if (e) {
      e.preventDefault();
    }
    this.clearFormErrors();
    this.beforeSubmit();
    // Submission already under process
    if (this.state.isSubmitting && !this.state.customValidationComplete) {
      return Promise.reject();
    }
    if (!this.clientValidate()) {
      return Promise.reject();
    }
    const csrf = await this.getCSRF();
    this.createCSRFField(csrf);
    if (this.state.hasCaptcha && !this.state.isCaptchaValid) {
      // if captcha is invisible we need to execute captcha validation
      // after validation is successful state.isCaptchaValid will be seted to true and form will be submited again
      if (this.state.isCaptchaInvisible) {
        return new Promise((resolve, reject) => {
          trigger(
            "captcha.execute",
            this.element.querySelector(`.${this.classes.reCaptcha}`),
            {
              form: this.element,
              onExecuteSuccess: () => {
                // If recaptcha send a success then we resubmit the form
                this.submit()
                  .then(resolve)
                  .catch((event) => {
                    if (!event.errorMessage && !event.fieldsErrors) {
                      this.setFormError(
                        this.options.errorMessages.captchaRequired,
                      );
                    }
                    reject();
                  });
              },
              onExecuteFail: reject,
            },
          );
        });
      }
      this.setFormError(this.options.errorMessages.captchaRequired);
      return Promise.reject();
    }
    if (!this.state.isSubmitting) {
      this.setSubmitState(true);
    }
    if (this.options.customValidation && !this.state.customValidationComplete) {
      return new Promise((resolve, reject) => {
        trigger(
          "client.validate",
          this.element.querySelector(this.options.customValidationSelector),
          {
            onValidationSuccess: () => {
              this.state.customValidationComplete = true;
              this.submit().then(resolve);
            },
            onValidationFail: (error) => {
              this.state.customValidationComplete = true;
              this.setFormError(error.message);
              if (error.submit) {
                this.submit().then(resolve);
              } else {
                this.setSubmitState(false);
              }
              reject();
            },
          },
        );
      });
    }
    if (this.hasError) {
      this.resetFields();
    }
    if (this.options.trackFocusedElements) {
      this.saveLastFocusState();
    }
    Event.emit(this.options.events.executeSubmit, { form: this.element });
    if (this.url) {
      return ajax(this.url, {
        method: this.method,
        body: this.getBody(),
        headers: this.getHeaders(),
      })
        .then(this.onSubmitSuccess.bind(this))
        .catch(this.onSubmitError.bind(this));
    }
    return this.customSubmit();
  }
  /**
   * Returns an object with the form's values
   *
   * @returns {Object} form field values
   */
  getFieldValues() {
    const fieldValues = {};
    this.getBody().forEach((value, key) => {
      fieldValues[key] = value;
    });
    return fieldValues;
  }
  /**
   * Triggers custom form submit event using the form values as a prameter
   * @returns {Promise} custom submit event promise
   */
  customSubmit() {
    return new Promise((resolve, reject) => {
      if (this.options.events.submit) {
        Event.emit(this.options.events.submit, {
          form: this.getFieldValues(),
          onSuccess: (response) => {
            this.onSubmitSuccess(response);
            resolve();
          },
          onError: (response) => {
            this.onSubmitError(response);
            reject();
          },
        });
      } else {
        const e = new Error("customSubmit event must be defined");
        reject(e);
      }
    });
  }
  /**
   * Performs native and custom form validations
   */
  validate() {
    // native fields validation
    this.element.checkValidity();
    // field component validation
    Array.from(
      this.element.querySelectorAll("[data-js-field-component]"),
    ).forEach((field) => {
      if (Registry.isRegistered(field)) {
        const fieldComponent = Registry.getComponent(field);
        if (typeof fieldComponent.validate === "function") {
          fieldComponent.validate();
        }
      }
    });
  }
  /**
   * Trigger reset event to each field in error of the form
   */
  resetFields() {
    this.element
      .querySelectorAll("[data-js-field]")
      .forEach((field) => trigger("field.reset", field));
  }
  /**
   * Trigger error reset event to each field in error of the form
   */
  resetFieldsErrors() {
    this.element
      .querySelectorAll("[data-js-field]")
      .forEach((field) => trigger("error.reset", field));
  }
  /**
   * Trigger error reset event to each field in error of the form
   */
  cleanGroupsErrors() {
    this.element
      .querySelectorAll(".c-field__error-message.m-group")
      .forEach((groupError) => groupError.remove());
  }
  /**
   * Replace form content with content that came from server or clear
   * based on provided options
   * @param {string} content - html content to be replaced
   */
  refreshForm(content) {
    if (this.options.onSubmitSuccessReload) {
      // replace from with provided content
      this._replaceElement(content);
    } else if (this.options.clearFormOnSuccess) {
      // reset form inputs
      this.element.reset();
    }
  }
  /**
   * Returns FormData interface to be used for ajax request
   *
   * @returns {FormData} form data
   */
  getBody() {
    return new FormData(this.element);
  }
  /**
   * By default, the options.headers is returned for simple form. This can be overloaded through options or in case of more
   * complex use case, the method should be overloaded
   * @returns {Object} headers object
   */
  getHeaders() {
    return this.options.headers;
  }
  /**
   * Submit success callback
   *
   * @param {Object} content successful submit response object
   * @returns {Object} serialized form
   */
  onSubmitSuccess(content) {
    // if there is a redirection to happen, then do not remove the loader
    content = content || {};
    const custom = content.custom || {};
    this.sendFormAnalytics(content);
    const customRedirect = custom.redirectUrl;
    const redirectUrl =
      content.redirectUrl ||
      content.continueUrl ||
      customRedirect ||
      this.options.redirectUrl;
    if (redirectUrl && typeof content === "object") {
      content.redirectUrl = redirectUrl;
    } else if (!redirectUrl && !this.options.keepLoaderUntilRedirected) {
      this.setSubmitState(false);
    }
    trigger(this.options.events.success, this.element, {
      bubbles: true,
      content,
    });
    if (
      (this.options.successModal &&
        typeof this.options.successModal === "object") ||
      custom.successModal
    ) {
      let successModal = this.options.successModal || {};
      if (content.successUrl) {
        successModal.contentUrl = content.successUrl;
      }
      // extra configuration for successModal (e.g. 'clickOutsideClose', ...)
      if (custom.successModal) {
        successModal = deepMerge(successModal, custom.successModal);
      }
      this.openModal(successModal);
    } else if (this.options.showSuccessAsSnackbar && content.successMessage) {
      Event.emit("snackbar.notify", {
        content: content.successMessage,
        type: "success",
      });
    }
    this.resetCaptcha();
    this.emitEventsOnSuccess(content);
    if (this.options.crossRequestDelayedAction) {
      CrossRequestStorage.setDelayedAction(
        this.options.crossRequestDelayedAction,
      );
    }
    if (
      !content.stopRedirect &&
      !content.redirectInProgress &&
      this.redirectPage(redirectUrl)
    ) {
      return this.options.promiseResponse
        ? content
        : this.getSerializedForm(this.getBody());
    }
    this.refreshForm(content);
    if (
      this.options.scrollToFormOnSubmit &&
      content.success &&
      content.message
    ) {
      this.element.scrollIntoView({ block: "center" });
    }
    return this.options.promiseResponse
      ? content
      : this.getSerializedForm(this.getBody());
  }
  /**
   * Send Analytics data
   *
   * @param {Object} data analytics data
   */
  sendFormAnalytics(data) {
    if (!data) {
      return;
    }
    if (typeof data === "object" && data.submissionAnalytics) {
      this.sendAnalytics(data.submissionAnalytics);
      delete data.submissionAnalytics;
    }
    this.sendAnalytics(this.getAnalytics(data));
  }
  /**
   * Transform FormData object into plain object
   * @param {FormData} form FormData object
   * @returns {Object}  test
   */
  getSerializedForm(form) {
    const formObj = {};
    // eslint-disable-next-line
    for (const [key, value] of form.entries()) {
      formObj[key] = value;
    }
    return formObj;
  }
  /**
   * Emits events on success submit
   * @param {string} content - ajax response
   */
  emitEventsOnSuccess(content) {
    let events = [];
    if (content.custom && content.custom.events) {
      events = events.concat(content.custom.events);
    }
    if (this.options.events.customSuccess) {
      events = events.concat(this.options.events.customSuccess);
    }
    events.forEach((event) => {
      Event.emit(event, content);
    });
    if (this.options.closeModalOnSuccess) {
      Event.emit("modal.close");
    }
  }
  /**
   * Emits events on failed submit
   * @param {string} content - ajax response
   */
  emitEventsOnError(content) {
    let events = [];
    if (this.options.events.customError) {
      events = events.concat(this.options.events.customError);
    }
    events.forEach((event) => {
      Event.emit(event, content);
    });
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
   * Submit error callback
   *
   * @param {Object} error unsuccessful submit response object
   * @returns {Object} error
   */
  onSubmitError(error) {
    this.setSubmitState(false);
    trigger(this.options.events.error, this.element, {
      bubbles: true,
      content: error,
    });
    /**
     * In case if server responds with redirect url
     */
    if (error.data && error.data.redirectUrl) {
      this.redirectPage(error.data.redirectUrl);
    }
    /**
     * In case if server responds with form HTML
     */
    if (this.options.onSubmitErrorReload) {
      this._replaceElement(error);
    } else if (this.options.clearCustomMessageOnError) {
      // remove custom message on error, if it was added during previous submit (e.g checking balance of gift certificate)
      this.clearFormCustomMessage();
    }
    if (this.options.crossRequestDelayedActionOnError) {
      CrossRequestStorage.setDelayedAction(
        this.options.crossRequestDelayedActionOnError,
      );
    }
    // check if response has any error (field / group)
    const hasFieldOrGroupError =
      error.data &&
      ((error.data.fieldsErrors && error.data.fieldsErrors.length !== 0) ||
        (error.data.groupsErrors && error.data.groupsErrors.length !== 0));
    /**
     * In case if server responds with errors JSON
     */
    // show error as snackbar element if option is configured OR set form error
    if (this.options.showErrorAsSnackbar && error && error.errorMessage) {
      Event.emit("snackbar.notify", {
        content: error.errorMessage,
        type: "error",
      });
    } else if (error.errorMessage) {
      this.setFormError(error.errorMessage);
    } else if (!hasFieldOrGroupError) {
      const errorMessage = !navigator.onLine
        ? this.options.text.offlineErrorMessage
        : this.options.text.genericErrorMessage || "ERROR_UNDEFINED";
      this.setFormError(errorMessage);
    }
    // set form group errors
    const groupsErrors = (error.data && error.data.groupsErrors) || [];
    if (groupsErrors.length) {
      this.cleanGroupsErrors();
      groupsErrors.forEach((groupError) => {
        const fieldGroup = this.element.querySelector(
          `[data-js-group="${groupError.group}"]`,
        );
        if (fieldGroup) {
          let groupErrorElement = null;
          groupErrorElement = document.createElement("div");
          groupErrorElement.classList.add("c-field__error-message", "m-group");
          groupErrorElement.setAttribute("id", groupError.group);
          groupErrorElement.setAttribute("role", "alert");
          groupErrorElement.innerHTML = groupError.errorMessage;
          fieldGroup.parentNode.insertBefore(
            groupErrorElement,
            fieldGroup.nextSibling,
          );
        }
      });
    }
    // set form field errors
    const fieldsErrors = (error.data && error.data.fieldsErrors) || [];
    const fieldsValues = (error.data && error.data.fieldsValues) || {};
    if (fieldsErrors.length) {
      this.resetFieldsErrors();
      fieldsErrors.forEach((fieldError) => {
        const errorField = this.element.querySelector(
          `[name="${fieldError.field}"]`,
        );
        if (errorField) {
          trigger("field.invalidate", errorField, {
            errorMessage: fieldError.errorMessage,
            errorKey: fieldError.errorKey,
            newValue: fieldsValues[fieldError.field],
          });
        }
      });
      this.scrollToFirstError();
    }
    // fire error events
    this.emitEventsOnError(error.data || error);
    // fire error analytics
    if (error.data && error.data.custom && error.data.custom.errorAnalytics) {
      this.sendAnalytics(error.data.custom.errorAnalytics);
    }
    // reset captcha if it was checked
    this.resetCaptcha();
    if (error.data && error.data.needReload) {
      this.redirectPage("self");
    }
    return Promise.reject(error.data || error);
  }
  /**
   * Emit captcha.reset
   */
  resetCaptcha() {
    if (this.state.isCaptchaValid) {
      this.state.isCaptchaValid = false;
      trigger(
        "captcha.reset",
        this.element.querySelector(`.${this.classes.reCaptcha}`),
      );
    }
  }
  /**
   * Clear form validation errors.
   */
  clearFormErrors() {
    this.element.classList.remove(this.classes.error);
    [].forEach.call(
      this.element.querySelectorAll(`.${this.classes.formErrorMessage}`),
      (errorMsg) => {
        errorMsg.remove();
      },
    );
    this.cleanGroupsErrors();
  }
  /**
   * Clear form custom message.
   */
  clearFormCustomMessage() {
    [].forEach.call(
      this.element.querySelectorAll(`.${this.classes.formCustomMessage}`),
      (msg) => {
        msg.classList.add("h-hidden");
      },
    );
  }
  /**
   * Set form state and add error message.
   *
   * @param {String} errorMessage message to set
   */
  setFormError(errorMessage) {
    this.clearFormErrors();
    this.element.classList.add(this.classes.error);
    const errNode = document.createElement("p");
    errNode.classList.add(this.classes.formErrorMessage);
    if (this.options.classNames && this.options.classNames.formErrorMessage) {
      errNode.classList.add(
        ...this.options.classNames.formErrorMessage.split(" "),
      );
    }
    errNode.setAttribute("role", "alert");
    errNode.innerHTML = errorMessage;
    if (this.options.prependError) {
      this.element.prepend(errNode);
    } else {
      this.element.appendChild(errNode);
    }
  }
  /**
   * Set flag isSubmitting to avoid duplicate call in case of multiple submit within short time.
   *
   * @param {Boolean} isSubmitting if true then set submiting state, clear state otherwise
   */
  setSubmitState(isSubmitting) {
    if (isSubmitting) {
      if (!this.loader && !this.options.disableLoader) {
        this.loader = document.createElement("div");
        this.loader.classList.add(...this.classes.submitting);
      }
      if (this.loader) {
        this.element.appendChild(this.loader);
      }
      this.state.isSubmitting = true;
      this.updateStatusMessage(
        this.options.text.accessibility.processingStatusMessage,
      );
    } else {
      if (this.loader) {
        this.loader.remove();
      }
      this.state.isSubmitting = false;
      this.updateStatusMessage(
        this.options.text.accessibility.finishedStatusMessage,
      );
    }
  }
  /**
   * Reload page or redirect to requested location
   *
   * @param {String} url URL to redirect to, default is this.options.redirectUrl
   * @return {Boolean} true, if reload or redirect was initiated
   */
  redirectPage(url) {
    const redirectUrl = url || this.options.redirectUrl;
    if (redirectUrl) {
      this.setSubmitState(true);
      if (redirectUrl === "self") {
        window.location.reload();
      } else {
        window.location.href = redirectUrl;
      }
      return true;
    }
    return false;
  }
  /**
   * Check if autosubmit is required
   * @returns {Boolean} true, if required
   */
  isAutosubmitRequired() {
    if (this.options.autoSubmit) {
      return true;
    }
    if (this.options.formUniqueKey) {
      const delayedAction = CrossRequestStorage.getDelayedAction();
      if (
        delayedAction &&
        delayedAction.type === "submit" &&
        this.options.formUniqueKey === delayedAction.value
      ) {
        CrossRequestStorage.removeDelayedAction();
        return true;
      }
    }
    return false;
  }
  /**
   * Scroll to first error
   */
  scrollToFirstError() {
    const firstError =
      this.element.querySelector(`.${this.classes.errorMessage}`) ||
      this.element.querySelector(`.${this.classes.formErrorMessage}`);
    if (!firstError) {
      return;
    }
    const parent = firstError.parentNode;
    scrollTo(parent, this.options.stickyHeaderHeight);
    waitForScrollEnd().then(() => {
      this.element
        .querySelector('[data-js-field][aria-invalid="true"]')
        .focus();
    });
  }
  /**
   * This function hook is called whenever a validation of the component is requested
   * @param {Event} event Event object
   */
  onComponentValidate(event) {
    const { onValidated } = event.detail;
    if (typeof onValidated === "function") {
      this.submit()
        .then((data) => {
          onValidated({
            isValid: true,
            data,
          });
        })
        .catch(() => {
          onValidated({
            isValid: false,
          });
        });
    }
  }
  /**
   * Validate event handler
   */
  onValidate() {
    this.validate();
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    super.destroy();
    off(this.element);
    off("click", this.selectors.buttons);
  }
}
