(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "toolbox/ajax",
      "core/mixwith",
      "services/EventEmitter",
      "toolbox/event",
      "toolbox/deepMerge",
      "mixins/Analytics",
      "mixins/Accessibility",
      "core/ComponentRegistry",
      "toolbox/html",
      "toolbox/scroll",
      "services/CrossRequestStorage",
      "toolbox/csrf",
    ],
    function (a) {
      "use strict";
      var b, c, d, f, g, e, h, i, j, k, l, m, n, o, p, q, r;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              c = a.ajax;
            },
            function (a) {
              d = a.mix;
            },
            function (a) {
              f = a.Event;
            },
            function (a) {
              (g = a.on), (e = a.off), (h = a.trigger);
            },
            function (a) {
              i = a.deepMerge;
            },
            function (a) {
              j = a.default;
            },
            function (a) {
              k = a.default;
            },
            function (a) {
              l = a.default;
            },
            function (a) {
              m = a.getRelativeSelector;
            },
            function (a) {
              (n = a.scrollTo), (o = a.waitForScrollEnd);
            },
            function (a) {
              p = a.default;
            },
            function (a) {
              q = a.getCSRF;
            },
          ],
          execute: function () {
            a(
              "default",
              (r = class extends d(b).with(j, k) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    i(
                      {
                        headers: {},
                        errorMessages: { captchaRequired: "" },
                        text: {
                          accessibility: {
                            processingStatusMessage: "",
                            finishedStatusMessage: "",
                          },
                          genericErrorMessage: "",
                        },
                        classNames: { formErrorMessage: "c-alert m-error" },
                        onSubmitSuccessReload: !1,
                        showErrorAsSnackbar: !1,
                        showSuccessAsSnackbar: !1,
                        clearFormOnSuccess: !0,
                        onSubmitErrorReload: !1,
                        successModal: null,
                        submitOnChange: !1,
                        closeModalOnSuccess: !1,
                        clearCustomMessageOnError: !1,
                        captcha: null,
                        prependError: !1,
                        redirectUrl: null,
                        events: {
                          customSuccess: null,
                          customError: null,
                          success: "form.submit.success",
                          error: "form.submit.error",
                          validateError: "form.validate.error",
                          submit: "form.submit",
                          executeSubmit: "form.execute.submit",
                          global: !1,
                        },
                        reloadData: { section: "common", id: "form" },
                        scrollToFormOnSubmit: !1,
                        stickyHeaderHeight: 153,
                        isRelativeLoader: !1,
                        disableValidation: !1,
                        keepDisabledSubmitAfterInit: !1,
                        trackFocusedElements: !0,
                        autoSubmit: !1,
                        crossRequestDelayedAction: null,
                        crossRequestDelayedActionOnError: null,
                        formUniqueKey: null,
                        customValidation: !1,
                        customValidationSelector: null,
                        keepLoaderUntilRedirected: !1,
                        disableLoader: !1,
                        promiseResponse: !1,
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  (this.classes = {
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
                  }),
                    (this.element.noValidate = !1),
                    (this.selectors.buttons = this.element.querySelectorAll(
                      "button[name][type=submit]",
                    )),
                    (this.url = this.element.getAttribute("action")),
                    (this.method =
                      this.element.getAttribute("method") || "POST");
                }
                async getCSRF() {
                  const a = this.element.getAttribute("data-has-active-csrf");
                  if ("true" !== a) return null;
                  const b = await q();
                  if (!b) {
                    const a = this.element.querySelector('[name="form_id"]');
                    return a
                      ? (console.error(
                          '[Form.js] Failed to get the csrf token for form "'.concat(
                            a.getAttribute("value"),
                            '"',
                          ),
                        ),
                        null)
                      : null;
                  }
                  return b;
                }
                getComponentKey() {
                  return (
                    this._componentKey ||
                      ((this._componentKey = m(this.element)),
                      this.element.parentElement &&
                        (this._componentKey = m(
                          this.element,
                          this.element.parentElement.parentElement,
                        ))),
                    this._componentKey
                  );
                }
                getSelectorForSubElement(a) {
                  return m(a, a.parentElement) || !0;
                }
                createCSRFField(a) {
                  if (
                    a &&
                    a.name &&
                    a.token &&
                    !this.element.querySelector('[name="'.concat(a.name, '"]'))
                  ) {
                    const b = document.createElement("input");
                    b.setAttribute("type", "hidden"),
                      b.setAttribute("name", a.name),
                      b.setAttribute("value", a.token),
                      this.element.appendChild(b);
                  }
                }
                initState() {
                  (this.state = {
                    isSubmitting: !1,
                    hasError: !1,
                    hasCaptcha: !!this.options.captcha,
                  }),
                    this.state.hasCaptcha &&
                      ((this.state.isCaptchaValid = !1),
                      (this.state.isCaptchaInvisible =
                        !!this.options.captcha.invisible)),
                    this.options.customValidation &&
                      (this.state.customValidationComplete = !1),
                    this.options.isRelativeLoader &&
                      this.element.classList.add(this.classes.relativeLoader);
                }
                afterInit() {
                  !this.options.keepDisabledSubmitAfterInit &&
                    this.selectors.buttons &&
                    this.selectors.buttons.length &&
                    this.selectors.buttons.forEach((a) => {
                      a.removeAttribute("disabled"),
                        a.classList.remove(this.classes.loadingClass);
                    }),
                    this.options.trackFocusedElements &&
                      this.restoreLastFocusState(),
                    this.isAutosubmitRequired() &&
                      Promise.all(
                        Array.from(
                          this.element.querySelectorAll(
                            "[data-js-field-component]",
                          ),
                        ).map((a) => l.afterRegistered(a, !0)),
                      ).then(() => {
                        this.submit();
                      }),
                    q();
                }
                bindEvents() {
                  super.bindEvents(),
                    g("submit", this.element, this.submit.bind(this)),
                    g(
                      "click",
                      this.selectors.buttons,
                      this.onAction.bind(this),
                    ),
                    g("reset", this.element, this.onReset.bind(this)),
                    g("form.action", this.element, this.onAction.bind(this)),
                    g(
                      "form.reload",
                      this.element,
                      this.onFormReload.bind(this),
                    ),
                    g(
                      "form.validate",
                      this.element,
                      this.onValidate.bind(this),
                    ),
                    this.state.hasCaptcha &&
                      (g(
                        "form.captcha.success",
                        this.element,
                        this.onCaptchaSuccess.bind(this),
                      ),
                      g(
                        "form.captcha.expired",
                        this.element,
                        this.onCaptchaExpired.bind(this),
                      )),
                    this.options.submitOnChange &&
                      g(
                        "change.submit",
                        this.element,
                        this.onSubmitOnChange.bind(this),
                      ),
                    g(
                      "field.dependency.state.changed",
                      this.element,
                      this.handleFieldStateDependencies.bind(this),
                    );
                }
                handleFieldStateDependencies(a) {
                  a.detail.dependentActions.forEach((b) => {
                    const [c, d, e] = b.split(":"),
                      f = this.element.querySelector(
                        "[name="
                          .concat(c, "],[data-dependency-listener=")
                          .concat(c, "]"),
                      );
                    if (
                      f &&
                      ("ifmastervisible" !== e ||
                        null !== a.target.offsetParent)
                    )
                      if (f.hasAttribute("data-dependency-listener"))
                        l.afterRegistered(f).then(() => {
                          h("field.dependency.action", f, {
                            action: d,
                            masterField: a.detail.masterField,
                            data: a.detail.data,
                          });
                        });
                      else if (
                        "type" in f &&
                        ("button" === f.type || "submit" === f.type)
                      )
                        this.handleButtonDependentAction(f, d);
                      else {
                        const b = f.closest("[data-js-field-component]");
                        if (b) {
                          if (l.isRegistered(b))
                            return void h("field.dependency.action", f, {
                              action: d,
                              masterField: a.detail.masterField,
                              data: a.detail.data,
                            });
                          l.afterRegistered(b).then(() => {
                            h("field.dependency.action", f, {
                              action: d,
                              masterField: a.detail.masterField,
                              data: a.detail.data,
                            });
                          });
                        }
                      }
                  });
                }
                handleButtonDependentAction(a, b) {
                  switch (b) {
                    case "enable":
                      a.disabled = !1;
                      break;
                    case "disable":
                      a.disabled = !0;
                      break;
                    case "show":
                      a.parentNode.classList.remove("h-hidden");
                      break;
                    case "hide":
                      a.parentNode.classList.add("h-hidden");
                      break;
                    default:
                  }
                }
                onAction(a) {
                  a.preventDefault();
                  const b = (a.detail && a.detail.name) || a.target.name,
                    c = (a.detail && a.detail.value) || a.target.value,
                    d = (a.detail && a.detail.target) || a.target;
                  (a.detail && a.detail.skipAnalytics) ||
                    this._initEventAnalytics(d);
                  let e = null;
                  if (b && ("checkbox" !== a.target.type || a.target.checked)) {
                    const a = this.getSerializedForm(this.getBody());
                    (b in a && a[b] === c) ||
                      ((e = document.createElement("input")),
                      (e.type = "hidden"),
                      (e.name = b),
                      (e.value = c),
                      this.element.appendChild(e));
                  }
                  this.submit()
                    .catch(() => {})
                    .finally(() => {
                      e && e.remove();
                    });
                }
                onReset() {
                  this.resetFields();
                }
                onFormReload() {
                  this.reload({ data: this.element.name });
                }
                onSubmitOnChange(a) {
                  h("form.action", a.target, { bubbles: !0 });
                }
                onCaptchaSuccess(a) {
                  a.stopPropagation(),
                    (this.state.isCaptchaValid = !0),
                    this.clearFormErrors();
                }
                onCaptchaExpired(a) {
                  a.stopPropagation(), (this.state.isCaptchaValid = !1);
                }
                beforeSubmit() {}
                clientValidate() {
                  return (
                    !!this.options.disableValidation ||
                    (this.validate(),
                    !!this.element.checkValidity() ||
                      (h(this.options.events.validateError, this.element, {
                        bubbles: !0,
                      }),
                      this.options.scrollToFormOnSubmit &&
                        this.element.scrollIntoView({ block: "center" }),
                      this.scrollToFirstError(),
                      !1))
                  );
                }
                async submit(a) {
                  if (
                    (a && a.preventDefault(),
                    this.clearFormErrors(),
                    this.beforeSubmit(),
                    this.state.isSubmitting &&
                      !this.state.customValidationComplete)
                  )
                    return Promise.reject();
                  if (!this.clientValidate()) return Promise.reject();
                  const b = await this.getCSRF();
                  return (this.createCSRFField(b),
                  this.state.hasCaptcha && !this.state.isCaptchaValid)
                    ? this.state.isCaptchaInvisible
                      ? new Promise((a, b) => {
                          h(
                            "captcha.execute",
                            this.element.querySelector(
                              ".".concat(this.classes.reCaptcha),
                            ),
                            {
                              form: this.element,
                              onExecuteSuccess: () => {
                                this.submit()
                                  .then(a)
                                  .catch((a) => {
                                    a.errorMessage ||
                                      a.fieldsErrors ||
                                      this.setFormError(
                                        this.options.errorMessages
                                          .captchaRequired,
                                      ),
                                      b();
                                  });
                              },
                              onExecuteFail: b,
                            },
                          );
                        })
                      : (this.setFormError(
                          this.options.errorMessages.captchaRequired,
                        ),
                        Promise.reject())
                    : (this.state.isSubmitting || this.setSubmitState(!0),
                        this.options.customValidation &&
                          !this.state.customValidationComplete)
                      ? new Promise((a, b) => {
                          h(
                            "client.validate",
                            this.element.querySelector(
                              this.options.customValidationSelector,
                            ),
                            {
                              onValidationSuccess: () => {
                                (this.state.customValidationComplete = !0),
                                  this.submit().then(a);
                              },
                              onValidationFail: (c) => {
                                (this.state.customValidationComplete = !0),
                                  this.setFormError(c.message),
                                  c.submit
                                    ? this.submit().then(a)
                                    : this.setSubmitState(!1),
                                  b();
                              },
                            },
                          );
                        })
                      : (this.hasError && this.resetFields(),
                        this.options.trackFocusedElements &&
                          this.saveLastFocusState(),
                        f.emit(this.options.events.executeSubmit, {
                          form: this.element,
                        }),
                        this.url
                          ? c(this.url, {
                              method: this.method,
                              body: this.getBody(),
                              headers: this.getHeaders(),
                            })
                              .then(this.onSubmitSuccess.bind(this))
                              .catch(this.onSubmitError.bind(this))
                          : this.customSubmit());
                }
                getFieldValues() {
                  const a = {};
                  return (
                    this.getBody().forEach((b, c) => {
                      a[c] = b;
                    }),
                    a
                  );
                }
                customSubmit() {
                  return new Promise((a, b) => {
                    if (this.options.events.submit)
                      f.emit(this.options.events.submit, {
                        form: this.getFieldValues(),
                        onSuccess: (b) => {
                          this.onSubmitSuccess(b), a();
                        },
                        onError: (a) => {
                          this.onSubmitError(a), b();
                        },
                      });
                    else {
                      const a = new Error("customSubmit event must be defined");
                      b(a);
                    }
                  });
                }
                validate() {
                  this.element.checkValidity(),
                    Array.from(
                      this.element.querySelectorAll(
                        "[data-js-field-component]",
                      ),
                    ).forEach((a) => {
                      if (l.isRegistered(a)) {
                        const b = l.getComponent(a);
                        "function" == typeof b.validate && b.validate();
                      }
                    });
                }
                resetFields() {
                  this.element
                    .querySelectorAll("[data-js-field]")
                    .forEach((a) => h("field.reset", a));
                }
                resetFieldsErrors() {
                  this.element
                    .querySelectorAll("[data-js-field]")
                    .forEach((a) => h("error.reset", a));
                }
                cleanGroupsErrors() {
                  this.element
                    .querySelectorAll(".c-field__error-message.m-group")
                    .forEach((a) => a.remove());
                }
                refreshForm(a) {
                  this.options.onSubmitSuccessReload
                    ? this._replaceElement(a)
                    : this.options.clearFormOnSuccess && this.element.reset();
                }
                getBody() {
                  return new FormData(this.element);
                }
                getHeaders() {
                  return this.options.headers;
                }
                onSubmitSuccess(a) {
                  a = a || {};
                  const b = a.custom || {};
                  this.sendFormAnalytics(a);
                  const c = b.redirectUrl,
                    d =
                      a.redirectUrl ||
                      a.continueUrl ||
                      c ||
                      this.options.redirectUrl;
                  if (
                    (d && "object" == typeof a
                      ? (a.redirectUrl = d)
                      : !d &&
                        !this.options.keepLoaderUntilRedirected &&
                        this.setSubmitState(!1),
                    h(this.options.events.success, this.element, {
                      bubbles: !0,
                      content: a,
                    }),
                    (this.options.successModal &&
                      "object" == typeof this.options.successModal) ||
                      b.successModal)
                  ) {
                    let c = this.options.successModal || {};
                    a.successUrl && (c.contentUrl = a.successUrl),
                      b.successModal && (c = i(c, b.successModal)),
                      this.openModal(c);
                  } else
                    this.options.showSuccessAsSnackbar &&
                      a.successMessage &&
                      f.emit("snackbar.notify", {
                        content: a.successMessage,
                        type: "success",
                      });
                  return (this.resetCaptcha(),
                  this.emitEventsOnSuccess(a),
                  this.options.crossRequestDelayedAction &&
                    p.setDelayedAction(this.options.crossRequestDelayedAction),
                  !a.stopRedirect &&
                    !a.redirectInProgress &&
                    this.redirectPage(d))
                    ? this.options.promiseResponse
                      ? a
                      : this.getSerializedForm(this.getBody())
                    : (this.refreshForm(a),
                      this.options.scrollToFormOnSubmit &&
                        a.success &&
                        a.message &&
                        this.element.scrollIntoView({ block: "center" }),
                      this.options.promiseResponse
                        ? a
                        : this.getSerializedForm(this.getBody()));
                }
                sendFormAnalytics(a) {
                  a &&
                    ("object" == typeof a &&
                      a.submissionAnalytics &&
                      (this.sendAnalytics(a.submissionAnalytics),
                      delete a.submissionAnalytics),
                    this.sendAnalytics(this.getAnalytics(a)));
                }
                getSerializedForm(a) {
                  const b = {};
                  for (const [c, d] of a.entries()) b[c] = d;
                  return b;
                }
                emitEventsOnSuccess(a) {
                  let b = [];
                  a.custom &&
                    a.custom.events &&
                    (b = b.concat(a.custom.events)),
                    this.options.events.customSuccess &&
                      (b = b.concat(this.options.events.customSuccess)),
                    b.forEach((b) => {
                      f.emit(b, a);
                    }),
                    this.options.closeModalOnSuccess && f.emit("modal.close");
                }
                emitEventsOnError(a) {
                  let b = [];
                  this.options.events.customError &&
                    (b = b.concat(this.options.events.customError)),
                    b.forEach((b) => {
                      f.emit(b, a);
                    });
                }
                openModal(a) {
                  f.emit("modal.open", { options: a });
                }
                onSubmitError(a) {
                  this.setSubmitState(!1),
                    h(this.options.events.error, this.element, {
                      bubbles: !0,
                      content: a,
                    }),
                    a.data &&
                      a.data.redirectUrl &&
                      this.redirectPage(a.data.redirectUrl),
                    this.options.onSubmitErrorReload
                      ? this._replaceElement(a)
                      : this.options.clearCustomMessageOnError &&
                        this.clearFormCustomMessage(),
                    this.options.crossRequestDelayedActionOnError &&
                      p.setDelayedAction(
                        this.options.crossRequestDelayedActionOnError,
                      );
                  const b =
                    a.data &&
                    ((a.data.fieldsErrors &&
                      0 !== a.data.fieldsErrors.length) ||
                      (a.data.groupsErrors &&
                        0 !== a.data.groupsErrors.length));
                  if (this.options.showErrorAsSnackbar && a && a.errorMessage)
                    f.emit("snackbar.notify", {
                      content: a.errorMessage,
                      type: "error",
                    });
                  else if (a.errorMessage) this.setFormError(a.errorMessage);
                  else if (!b) {
                    const a = navigator.onLine
                      ? this.options.text.genericErrorMessage ||
                        "ERROR_UNDEFINED"
                      : this.options.text.offlineErrorMessage;
                    this.setFormError(a);
                  }
                  const c = (a.data && a.data.groupsErrors) || [];
                  c.length &&
                    (this.cleanGroupsErrors(),
                    c.forEach((a) => {
                      const b = this.element.querySelector(
                        '[data-js-group="'.concat(a.group, '"]'),
                      );
                      if (b) {
                        let c = null;
                        (c = document.createElement("div")),
                          c.classList.add("c-field__error-message", "m-group"),
                          c.setAttribute("id", a.group),
                          c.setAttribute("role", "alert"),
                          (c.innerHTML = a.errorMessage),
                          b.parentNode.insertBefore(c, b.nextSibling);
                      }
                    }));
                  const d = (a.data && a.data.fieldsErrors) || [],
                    e = (a.data && a.data.fieldsValues) || {};
                  return (
                    d.length &&
                      (this.resetFieldsErrors(),
                      d.forEach((a) => {
                        const b = this.element.querySelector(
                          '[name="'.concat(a.field, '"]'),
                        );
                        b &&
                          h("field.invalidate", b, {
                            errorMessage: a.errorMessage,
                            errorKey: a.errorKey,
                            newValue: e[a.field],
                          });
                      }),
                      this.scrollToFirstError()),
                    this.emitEventsOnError(a.data || a),
                    a.data &&
                      a.data.custom &&
                      a.data.custom.errorAnalytics &&
                      this.sendAnalytics(a.data.custom.errorAnalytics),
                    this.resetCaptcha(),
                    a.data && a.data.needReload && this.redirectPage("self"),
                    Promise.reject(a.data || a)
                  );
                }
                resetCaptcha() {
                  this.state.isCaptchaValid &&
                    ((this.state.isCaptchaValid = !1),
                    h(
                      "captcha.reset",
                      this.element.querySelector(
                        ".".concat(this.classes.reCaptcha),
                      ),
                    ));
                }
                clearFormErrors() {
                  this.element.classList.remove(this.classes.error),
                    [].forEach.call(
                      this.element.querySelectorAll(
                        ".".concat(this.classes.formErrorMessage),
                      ),
                      (a) => {
                        a.remove();
                      },
                    ),
                    this.cleanGroupsErrors();
                }
                clearFormCustomMessage() {
                  [].forEach.call(
                    this.element.querySelectorAll(
                      ".".concat(this.classes.formCustomMessage),
                    ),
                    (a) => {
                      a.classList.add("h-hidden");
                    },
                  );
                }
                setFormError(a) {
                  this.clearFormErrors(),
                    this.element.classList.add(this.classes.error);
                  const b = document.createElement("p");
                  b.classList.add(this.classes.formErrorMessage),
                    this.options.classNames &&
                      this.options.classNames.formErrorMessage &&
                      b.classList.add(
                        ...this.options.classNames.formErrorMessage.split(" "),
                      ),
                    b.setAttribute("role", "alert"),
                    (b.innerHTML = a),
                    this.options.prependError
                      ? this.element.prepend(b)
                      : this.element.appendChild(b);
                }
                setSubmitState(a) {
                  a
                    ? (!this.loader &&
                        !this.options.disableLoader &&
                        ((this.loader = document.createElement("div")),
                        this.loader.classList.add(...this.classes.submitting)),
                      this.loader && this.element.appendChild(this.loader),
                      (this.state.isSubmitting = !0),
                      this.updateStatusMessage(
                        this.options.text.accessibility.processingStatusMessage,
                      ))
                    : (this.loader && this.loader.remove(),
                      (this.state.isSubmitting = !1),
                      this.updateStatusMessage(
                        this.options.text.accessibility.finishedStatusMessage,
                      ));
                }
                redirectPage(a) {
                  const b = a || this.options.redirectUrl;
                  return (
                    !!b &&
                    (this.setSubmitState(!0),
                    "self" === b
                      ? window.location.reload()
                      : (window.location.href = b),
                    !0)
                  );
                }
                isAutosubmitRequired() {
                  if (this.options.autoSubmit) return !0;
                  if (this.options.formUniqueKey) {
                    const a = p.getDelayedAction();
                    if (
                      a &&
                      "submit" === a.type &&
                      this.options.formUniqueKey === a.value
                    )
                      return p.removeDelayedAction(), !0;
                  }
                  return !1;
                }
                scrollToFirstError() {
                  const a =
                    this.element.querySelector(
                      ".".concat(this.classes.errorMessage),
                    ) ||
                    this.element.querySelector(
                      ".".concat(this.classes.formErrorMessage),
                    );
                  if (a) {
                    const b = a.parentNode;
                    n(b, this.options.stickyHeaderHeight),
                      o().then(() => {
                        this.element
                          .querySelector('[data-js-field][aria-invalid="true"]')
                          .focus();
                      });
                  }
                }
                onComponentValidate(a) {
                  const { onValidated: b } = a.detail;
                  "function" == typeof b &&
                    this.submit()
                      .then((a) => {
                        b({ isValid: !0, data: a });
                      })
                      .catch(() => {
                        b({ isValid: !1 });
                      });
                }
                onValidate() {
                  this.validate();
                }
                destroy() {
                  super.destroy(),
                    e(this.element),
                    e("click", this.selectors.buttons);
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=Form.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/global/Form.js
