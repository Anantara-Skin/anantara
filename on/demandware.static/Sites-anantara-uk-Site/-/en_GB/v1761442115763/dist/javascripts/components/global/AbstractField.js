(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "toolbox/event",
      "toolbox/animate",
      "toolbox/ajax",
      "toolbox/debounce",
      "toolbox/object",
      "toolbox/deepMerge",
      "services/EventEmitter",
      "toolbox/validators",
      "core/ComponentRegistry",
      "toolbox/queryString",
      "toolbox/csrf",
    ],
    function (a) {
      "use strict";
      var b, c, d, f, g, h, i, j, k, l, m, n, o, p, q;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              (c = a.on), (d = a.off), (f = a.trigger);
            },
            function (a) {
              g = a.animate;
            },
            function (a) {
              h = a.ajax;
            },
            function (a) {
              i = a.debounce;
            },
            function (a) {
              j = a.tryParseJSON;
            },
            function (a) {
              k = a.deepMerge;
            },
            function (a) {
              l = a.Event;
            },
            function (a) {
              m = a.default;
            },
            function (a) {
              n = a.default;
            },
            function (a) {
              o = a.stringify;
            },
            function (a) {
              p = a.getCSRF;
            },
          ],
          execute: function () {
            a(
              "default",
              (q = class extends b {
                constructor(a) {
                  let b =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    c = 2 < arguments.length ? arguments[2] : void 0;
                  super(
                    a,
                    k(
                      {
                        classNames: {
                          error: null,
                          shake: "h-shake",
                          requirements: "c-alert",
                          requirementsInner: "c-alert__message",
                          requirementsTitle: "",
                          requirementsList: "",
                        },
                        validationEvent: "change",
                        triggerName: null,
                        triggerAction: null,
                        disableCopyPaste: !1,
                        stateDependencies: null,
                        showValidState: !1,
                        shakeFieldOnError: !1,
                        disableValidation: !1,
                        updateInvalidValue: !1,
                        showErrorMessage: !0,
                        fieldRequirements: null,
                        requirementsSuccessMessage:
                          "Requirements met successfully.",
                        jumpTo: "",
                        pattern: null,
                        prerequisite: null,
                      },
                      b,
                    ),
                    c,
                  );
                }
                initCache() {
                  if (
                    ((this.classes = {
                      focus: "m-focus",
                      active: "m-active",
                      error: "m-error",
                      valid: "m-valid",
                      success: "m-success",
                      onValidate: "m-on-validate",
                      errorMessage: "c-field__error-message",
                    }),
                    (this.field = this.element.hasAttribute("data-js-field")
                      ? this.element
                      : this.element.querySelector("[data-js-field]")),
                    (this.form = this.element.closest("form")),
                    (this.jumpTo = this.options.jumpTo
                      ? this.form.querySelector(this.options.jumpTo)
                      : null),
                    !this.field)
                  )
                    throw new Error(
                      "Please add data-js-field attribute on your field (input, textarea, select)",
                    );
                  if (
                    (this.field.id &&
                      (this.label = document.querySelectorAll(
                        '[for="'
                          .concat(this.field.id, '"], [data-label-for="')
                          .concat(this.field.id, '"]'),
                      )),
                    "radio" === this.field.type)
                  ) {
                    const a = this.element.closest("form");
                    this.selectors.stateTargets =
                      a &&
                      a.querySelectorAll(
                        '[name="'.concat(this.field.name, '"]'),
                      );
                  }
                  (this.hasErrorKey = !1),
                    (this.customValidators = j(
                      this.field.dataset.customvalidation,
                    )),
                    (this.remoteValidator = j(
                      this.field.dataset.remotevalidation,
                    )),
                    (this.statesTriggersMap = {
                      checked: "change click keyup paste input",
                      unchecked: "change click keyup paste input",
                      selected: "change",
                      empty: "change click keyup paste input",
                      filled: "change click keyup paste input",
                    }),
                    this.options.stateDependencies &&
                      (this.stateTriggers = this.getStateTriggers());
                }
                get validators() {
                  return this._validators;
                }
                afterInit() {
                  m.getValidators(this.customValidators).then((a) => {
                    this._validators = a;
                  }),
                    this.options.stateDependencies &&
                      this.form &&
                      n.afterRegistered(this.form).then(() => {
                        this.triggerStateEvents();
                      });
                }
                focusField(a) {
                  a && a.focus();
                }
                initState() {
                  (this.state.initialValue = this.field.value),
                    (this.state.triggerStateEventsOnInitDone = !1),
                    (this.state.fieldState = null),
                    (this.state.customFieldState = null),
                    (this.hasErrorKey = this.element.classList.contains(
                      this.classes.error,
                    )),
                    this.hasErrorKey &&
                      (this.errorElement = this.element.querySelector(
                        ".".concat(this.classes.errorMessage),
                      ));
                }
                bindEvents() {
                  if (
                    (c("focus", this.field, this.onFocus.bind(this)),
                    c("blur", this.field, this.onLeave.bind(this)),
                    c("field.reset", this.field, this.onReset.bind(this)),
                    c("error.reset", this.field, this.removeError.bind(this)),
                    c(
                      "field.invalidate",
                      this.field,
                      this.onCustomError.bind(this),
                    ),
                    c(
                      "field.dependency.action",
                      this.field,
                      this.handleDependencyAction.bind(this),
                    ),
                    c(
                      "field.initInitialValue",
                      this.element,
                      this.onInitInitialValue.bind(this),
                    ),
                    this.options.disableValidation ||
                      (c("invalid", this.field, this.onNativeError.bind(this)),
                      c(
                        this.options.validationEvent,
                        this.field,
                        i(this.onValidation.bind(this)),
                      ),
                      c(
                        "field.customvalidation",
                        this.field,
                        this.customValidation.bind(this),
                      )),
                    this.options.disableCopyPaste &&
                      c(
                        "copy paste drag drop",
                        this.field,
                        this.disableCopyPaste.bind(this),
                      ),
                    this.options.triggerName &&
                      c(
                        this.options.triggerName,
                        this.field,
                        this.triggerBubblingEvent.bind(this),
                      ),
                    (this.stateTriggers || []).forEach((a) => {
                      c(
                        a,
                        this.selectors.stateTargets || this.field,
                        this.triggerStateEvents.bind(this),
                      );
                    }),
                    this.options.fieldRequirements &&
                      (c(
                        "keyup.fieldrequirements",
                        this.field,
                        this.onChangeForFieldRequirements.bind(this),
                      ),
                      c(
                        "paste.fieldrequirements",
                        this.field,
                        this.onChangeForFieldRequirements.bind(this),
                      )),
                    this.options.prerequisite)
                  ) {
                    const a = this.options.prerequisite.event || "click";
                    c(
                      "".concat(a, ".prerequisite"),
                      this.field,
                      this.onPrerequisiteCheck.bind(this),
                      !0,
                    );
                  }
                }
                getStateTriggers() {
                  const a = "radio" === this.field.type ? this.field.id : "";
                  return Object.keys(this.options.stateDependencies || {})
                    .reduce((a, b) => {
                      [b] = b.split("#");
                      const c = this.statesTriggersMap[b];
                      return c ? a.concat([c]) : a;
                    }, [])
                    .map((b) =>
                      b
                        .split(" ")
                        .map((b) => "".concat(b, ".stateTriggers").concat(a))
                        .join(" "),
                    )
                    .filter((a, b, c) => c.indexOf(a) === b);
                }
                triggerStateEvents() {
                  let a;
                  switch (this.field.type) {
                    case "tel":
                    case "text":
                    case "textarea":
                    case "file":
                      a =
                        "witherror" in this.options.stateDependencies ||
                        "withouterror" in this.options.stateDependencies
                          ? this.errorElement
                            ? "witherror"
                            : "withouterror"
                          : "" === this.field.value
                            ? "empty"
                            : "filled";
                      break;
                    case "radio":
                    case "checkbox":
                      a = this.field.checked ? "checked" : "unchecked";
                      break;
                    default:
                  }
                  if (
                    this.state.fieldState !== a &&
                    a in this.options.stateDependencies
                  ) {
                    this.state.fieldState = a;
                    const b = this.processSelfActions(
                      this.options.stateDependencies[a],
                    );
                    f("field.dependency.state.changed", this.field, {
                      bubbles: !0,
                      dependentActions: b,
                      masterField: this.field,
                    }),
                      (this.state.triggerStateEventsOnInitDone = !0);
                  }
                }
                triggerCustomStateEvents(a, b) {
                  if (
                    this.state.customFieldState !== a &&
                    a in this.options.stateDependencies
                  ) {
                    this.state.customFieldState = a;
                    const c = this.processSelfActions(
                      this.options.stateDependencies[a],
                    );
                    f("field.dependency.state.changed", this.field, {
                      bubbles: !0,
                      dependentActions: c,
                      masterField: this.field,
                      data: b,
                    });
                  }
                }
                processSelfActions(a) {
                  return a.filter((a) => {
                    const [b, c, d] = a.split(":");
                    if ("self" === b) {
                      if (this.checkDependencyCondition(d)) {
                        const [a, ...b] = c.split("-");
                        this.handleDependencyAction({
                          detail: {
                            action: a,
                            actionParams: b,
                            masterField: this.field,
                          },
                        });
                      }
                      return !1;
                    }
                    return !0;
                  });
                }
                sendAnalyticsBlock(a) {
                  const b = a && a.detail && a.detail.actionParams[0];
                  b &&
                    this.analytics &&
                    this.analytics[b] &&
                    l.emit("analytics.event", this.analytics[b]);
                }
                checkDependencyCondition(a) {
                  return (
                    "ifNotOnInit" !== a ||
                    this.state.triggerStateEventsOnInitDone
                  );
                }
                handleDependencyAction(a) {
                  a.detail.action &&
                    "function" == typeof this[a.detail.action] &&
                    this[a.detail.action](a);
                }
                updateValue() {}
                updateMaxLength(a) {
                  const b =
                    a.detail &&
                    a.detail.masterField &&
                    a.detail.masterField.dataset.dependencyNewMaxLength;
                  b && this.field.setAttribute("maxlength", b);
                }
                updatePattern(a) {
                  let b = !1,
                    c = null,
                    d = !1;
                  if (a instanceof CustomEvent) {
                    b = !!this.options.pattern;
                    const d =
                      a.detail &&
                      a.detail.masterField &&
                      a.detail.masterField.value;
                    c = this.options.pattern && this.options.pattern[d];
                  } else {
                    const e = a || {};
                    (b = !0),
                      (d = e.clearOnError),
                      (c = e.pattern && {
                        pattern: e.pattern.value,
                        "data-error-pattern": e.pattern.error,
                      });
                  }
                  b &&
                    (c
                      ? (this.field.setAttribute("pattern", c.pattern),
                        this.field.setAttribute(
                          "data-error-pattern",
                          c["data-error-pattern"],
                        ))
                      : (this.field.removeAttribute("pattern"),
                        this.field.removeAttribute("data-error-pattern")),
                    this.field.value &&
                      (this.field.checkValidity()
                        ? this.removeError()
                        : d &&
                          ((this.field.value = ""),
                          f("change", this.field, { bubbles: !0 }))));
                }
                show() {
                  this.element.classList.remove("h-hidden"),
                    this.label &&
                      this.label.forEach((a) => {
                        a.classList.remove("h-hidden");
                      });
                }
                hide() {
                  this.element.classList.add("h-hidden"),
                    this.label &&
                      this.label.forEach((a) => {
                        a.classList.add("h-hidden");
                      });
                }
                enable() {
                  (this.field.enabled = !0), (this.field.disabled = !1);
                }
                disable() {
                  (this.field.enabled = !1), (this.field.disabled = !0);
                }
                check() {
                  (this.field.checked = !0), f("click", this.field);
                }
                uncheck() {
                  (this.field.checked = !1), f("click", this.field);
                }
                require() {
                  this.field.setAttribute("required", "required"),
                    this.field.setAttribute("aria-required", "true");
                }
                unrequire() {
                  this.field.removeAttribute("required"),
                    this.field.setAttribute("aria-required", "false"),
                    this.field.checkValidity() && this.removeError();
                }
                setFieldState(a, b) {
                  const c = b || this.element,
                    d = this.classes.active;
                  a ? c.classList.add(d) : c.classList.remove(d);
                }
                triggerBubblingEvent() {
                  f(this.options.triggerAction, this.field, { bubbles: !0 });
                }
                onFocus() {
                  this.element.classList.add(this.classes.focus),
                    "" !== this.field.value && this.setFieldState(!0),
                    this.options.fieldRequirements &&
                      !this.selectors.requirements &&
                      this.createFieldRequirements();
                }
                onLeave() {
                  this.element.classList.remove(this.classes.focus),
                    "" === this.field.value
                      ? this.setFieldState(!1)
                      : this.setFieldState(!0),
                    !this.state.isValidated &&
                      "" !== this.field.value &&
                      this.selectors.requirementsList &&
                      ((this.state.isValidated = !0),
                      this.selectors.requirementsList.classList.remove(
                        this.classes.onValidate,
                      ));
                }
                onReset() {
                  this.reset(),
                    this.removeError(),
                    this.removeValidationClass();
                }
                reset() {
                  "checkbox" === this.field.type
                    ? (this.field.checked = !1)
                    : (this.field.value = "");
                }
                trim() {
                  this.field.value = this.field.value.trim();
                }
                setValue(a) {
                  this.field.value = a;
                }
                disableCopyPaste(a) {
                  return a.preventDefault(), !1;
                }
                removeValidationClass() {
                  this.element.classList.remove(this.classes.valid);
                }
                removeError() {
                  this.element.classList.remove(this.classes.error),
                    this.field.removeAttribute("aria-invalid"),
                    this.options.showErrorMessage &&
                      this.field.removeAttribute("aria-describedby"),
                    this.hasErrorKey &&
                      (this.element.removeChild(this.errorElement),
                      (this.errorElement = null),
                      (this.hasErrorKey = !1)),
                    this.options.stateDependencies &&
                      this.form &&
                      setTimeout(() => {
                        this.options.stateDependencies &&
                          this.form &&
                          this.triggerStateEvents();
                      }, 0);
                }
                addError(a, b) {
                  if (
                    (this.element.classList.remove(this.classes.valid),
                    this.element.classList.add(this.classes.error),
                    !this.options.fieldRequirements ||
                      this.options.showErrorMessage)
                  ) {
                    const c = this.element.querySelector("[data-js-counter]");
                    if (!this.errorElement) {
                      const b = "error-".concat(this.field.getAttribute("id"));
                      (this.errorElement = document.createElement("div")),
                        this.errorElement.classList.add(
                          this.classes.errorMessage,
                        ),
                        this.errorElement.setAttribute("id", b),
                        this.errorElement.setAttribute("role", "alert"),
                        this.errorElement.setAttribute("data-js-error", !0),
                        (this.errorElement.innerHTML = a),
                        c
                          ? this.element.insertBefore(this.errorElement, c)
                          : this.element.appendChild(this.errorElement),
                        this.field.setAttribute("aria-invalid", !0),
                        this.field.setAttribute("aria-describedby", b);
                    } else this.errorElement.innerHTML = a;
                    this.hasErrorKey = b;
                  }
                  this.options.stateDependencies &&
                    this.form &&
                    this.triggerStateEvents();
                }
                onValidation() {
                  this.validate(),
                    this.remoteValidator && this.remoteValidation();
                }
                validate() {
                  this.field.setCustomValidity("");
                  let a = this.field.checkValidity();
                  return (
                    (a = this.customValidation() && a),
                    a &&
                      (this.removeError(),
                      this.jumpTo && this.focusField(this.jumpTo),
                      this.options.showValidState &&
                      "" !== this.field.value.trim()
                        ? this.element.classList.add(this.classes.valid)
                        : this.element.classList.remove(this.classes.valid)),
                    a
                  );
                }
                customValidation() {
                  return (
                    !this.customValidators ||
                    Object.keys(this.customValidators).every(
                      (a) =>
                        !(a in this.validators) ||
                        this.validators[a].call(
                          this,
                          this.field,
                          this.customValidators[a],
                        ),
                    )
                  );
                }
                async remoteValidation() {
                  if (this.remoteValidator) {
                    const a = new FormData();
                    ("checkbox" !== this.field.type || this.field.checked) &&
                      a.append(this.field.name, this.field.value);
                    const b = await this.getCSRFToken();
                    a.append("csrf_token", b),
                      h(this.remoteValidator.url, {
                        method: "POST",
                        body: a,
                      }).then(this.remoteValidationSuccess.bind(this));
                  }
                }
                remoteValidationSuccess(a) {
                  a.dependencyState
                    ? this.triggerCustomStateEvents(a.dependencyState, a)
                    : f("field.remote.validation.success", this.field, {
                        bubbles: !0,
                        data: a,
                      });
                }
                onNativeError(a) {
                  a.preventDefault();
                  let b;
                  const c = {
                    badInput: "format",
                    patternMismatch: "pattern",
                    rangeOverflow: "maximum",
                    rangeUnderflow: "minimum",
                    stepMismatch: "",
                    tooLong: "maxlength",
                    tooShort: "minlength",
                    typeMismatch: "format",
                    valueMissing: "required",
                    customError: "customError",
                  };
                  if (
                    (Object.keys(c).forEach((a) => {
                      this.field.validity[a] && (b = c[a]);
                    }),
                    "customError" === b && (b = this.field.validationMessage),
                    this.options.shakeFieldOnError && this.shakeField(),
                    this.hasErrorKey && this.hasErrorKey === b)
                  )
                    return !1;
                  const d = "error"
                      .concat(b.charAt(0).toUpperCase())
                      .concat(b.slice(1)),
                    e =
                      this.field.dataset[d] ||
                      "[Native] ".concat(this.field.validationMessage);
                  return this.removeError(), this.addError(e, b), !0;
                }
                shakeField() {
                  return g(this.options.classNames.shake, this.element);
                }
                async getCSRFToken() {
                  const a = await p();
                  return (a && a.token) || "";
                }
                onCustomError(a) {
                  const b = a.detail;
                  this.addError(b.errorMessage, b.errorKey),
                    this.options.updateInvalidValue &&
                      (b.newValue || "" === b.newValue) &&
                      this.setValue(b.newValue);
                }
                onInitInitialValue() {
                  (this.field.value = this.state.initialValue),
                    f(this.options.validationEvent, this.field);
                }
                createFieldRequirements() {
                  (this.selectors.requirements = document.createElement("div")),
                    this.options.showErrorMessage ||
                      (this.field.setAttribute(
                        "aria-describedby",
                        "".concat(this.field.id, "-requirements"),
                      ),
                      this.selectors.requirements.setAttribute(
                        "id",
                        "".concat(this.field.id, "-requirements"),
                      )),
                    this.selectors.requirements.setAttribute(
                      "class",
                      "".concat(this.options.classNames.requirements),
                    );
                  const a = document.createElement("div");
                  a.setAttribute(
                    "class",
                    "".concat(this.options.classNames.requirementsInner),
                  );
                  const b = document.createElement("p");
                  b.setAttribute(
                    "class",
                    "c-text-field__requirements-title ".concat(
                      this.options.classNames.requirementsTitle,
                    ),
                  ),
                    (b.innerHTML = this.options.fieldRequirements.title),
                    a.appendChild(b),
                    (this.selectors.requirementsList =
                      document.createElement("ul")),
                    this.selectors.requirementsList.setAttribute(
                      "class",
                      "c-text-field__requirements-list "
                        .concat(this.options.classNames.requirementsList, " ")
                        .concat(this.classes.onValidate),
                    ),
                    (this.selectors.requirementsRules = {}),
                    Object.keys(this.options.fieldRequirements.rules).forEach(
                      (a) => {
                        const b = this.options.fieldRequirements.rules[a],
                          c = document.createElement("li"),
                          d = document.createElement("div"),
                          e = document.createElement("span");
                        c.setAttribute(
                          "class",
                          "c-text-field__requirements-item",
                        ),
                          d.setAttribute(
                            "class",
                            "c-text-field__requirements-content",
                          ),
                          e.setAttribute("class", "h-show-for-sr"),
                          e.setAttribute("data-js-valid-rule-message", ""),
                          (e.innerHTML =
                            this.options.fieldRequirements.a11y.ruleNotMet ||
                            ""),
                          (d.innerHTML = b.title),
                          c.appendChild(e),
                          c.appendChild(d),
                          this.selectors.requirementsList.appendChild(c),
                          (this.selectors.requirementsRules[a] = c);
                      },
                    ),
                    a.appendChild(this.selectors.requirementsList),
                    this.selectors.requirements.appendChild(a),
                    this.element.appendChild(this.selectors.requirements);
                }
                onChangeForFieldRequirements(a) {
                  const { target: b } = a;
                  (this.state.isAllValid = !0),
                    b.value
                      ? this.customValidators &&
                        Object.keys(this.customValidators).forEach((a) => {
                          if (a in this.validators) {
                            const b = this.validators[a].call(
                                this,
                                this.field,
                                this.customValidators[a],
                              ),
                              c = this.selectors.requirementsRules[
                                a
                              ].querySelector("[data-js-valid-rule-message]");
                            this.selectors.requirementsRules[
                              a
                            ].classList.remove(this.classes.error),
                              this.selectors.requirementsRules[
                                a
                              ].classList.remove(this.classes.success),
                              (c.innerHTML =
                                this.options.fieldRequirements.a11y
                                  .ruleNotMet || ""),
                              b
                                ? ((c.innerHTML =
                                    this.options.fieldRequirements.a11y
                                      .ruleMet || ""),
                                  this.selectors.requirementsRules[
                                    a
                                  ].classList.add(this.classes.success))
                                : (this.selectors.requirementsRules[
                                    a
                                  ].classList.add(this.classes.error),
                                  this.selectors.requirements.removeAttribute(
                                    "aria-label",
                                  ),
                                  (this.state.isAllValid = !1));
                          }
                        })
                      : ((this.state.isValidated = !1),
                        (this.state.isAllValid = !1),
                        this.selectors.requirements.removeAttribute(
                          "aria-label",
                        ),
                        this.selectors.requirementsList.classList.add(
                          this.classes.onValidate,
                        ),
                        Object.keys(this.customValidators).forEach((a) => {
                          a in this.validators &&
                            (this.selectors.requirementsRules[
                              a
                            ].classList.remove(this.classes.error),
                            this.selectors.requirementsRules[
                              a
                            ].classList.remove(this.classes.success),
                            (this.selectors.requirementsRules[a].querySelector(
                              "[data-js-valid-rule-message]",
                            ).innerHTML =
                              this.options.fieldRequirements.a11y.ruleNotMet ||
                              ""));
                        })),
                    this.state.isAllValid &&
                      this.selectors.requirements.setAttribute(
                        "aria-label",
                        this.options.requirementsSuccessMessage,
                      );
                }
                onPrerequisiteCheck(a) {
                  if (!this.state.prerequisiteValid) {
                    a.preventDefault(), a.stopImmediatePropagation();
                    const { url: b, data: c } = this.options.prerequisite;
                    h(b, { method: "POST", body: o(c || {}) }).then(
                      this.onPrerequisiteUpdated.bind(this),
                    );
                  }
                }
                onPrerequisiteUpdated(a) {
                  const { valid: b, modal: c } = a;
                  if (((this.state.prerequisiteValid = b), b)) {
                    const a = this.options.prerequisite.event || "click";
                    return void ("function" == typeof this.field[a]
                      ? this.field[a]()
                      : f(a, this.field));
                  }
                  c && this.openModal(c);
                }
                openModal(a) {
                  l.emit("modal.open", { options: a });
                }
                destroy() {
                  d(this.field), d(this.element);
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=AbstractField.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/global/AbstractField.js
