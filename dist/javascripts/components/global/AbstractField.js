import e from "../../core/Component.js";
import {on as t, trigger as s, off as i} from "../../toolbox/event.js";
import {animate as r} from "../../toolbox/animate.js";
import {ajax as a} from "../../toolbox/ajax.js";
import {debounce as l} from "../../toolbox/debounce.js";
import {tryParseJSON as o} from "../../toolbox/object.js";
import {deepMerge as n} from "../../toolbox/deepMerge.js";
import {Event as h} from "../../services/EventEmitter.js";
import d from "../../toolbox/validators.js";
import c from "../../core/ComponentRegistry.js";
import {stringify as u} from "../../toolbox/queryString.js";
import {getCSRF as m} from "../../toolbox/csrf.js";
class f extends e {
    constructor(e, t={}, s) {
        super(e, n({
            classNames: {
                error: null,
                shake: "h-shake",
                requirements: "c-alert",
                requirementsInner: "c-alert__message",
                requirementsTitle: "",
                requirementsList: ""
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
            requirementsSuccessMessage: "Requirements met successfully.",
            jumpTo: "",
            pattern: null,
            prerequisite: null
        }, t), s)
    }
    initCache() {
        if (this.classes = {
            focus: "m-focus",
            active: "m-active",
            error: "m-error",
            valid: "m-valid",
            success: "m-success",
            onValidate: "m-on-validate",
            errorMessage: "c-field__error-message"
        },
        this.field = this.element.hasAttribute("data-js-field") ? this.element : this.element.querySelector("[data-js-field]"),
        this.form = this.element.closest("form"),
        this.jumpTo = this.options.jumpTo ? this.form.querySelector(this.options.jumpTo) : null,
        !this.field)
            throw new Error("Please add data-js-field attribute on your field (input, textarea, select)");
        if (this.field.id && (this.label = document.querySelectorAll(`[for="${this.field.id}"], [data-label-for="${this.field.id}"]`)),
        "radio" === this.field.type) {
            const e = this.element.closest("form");
            this.selectors.stateTargets = e && e.querySelectorAll(`[name="${this.field.name}"]`)
        }
        this.hasErrorKey = !1,
        this.customValidators = o(this.field.dataset.customvalidation),
        this.remoteValidator = o(this.field.dataset.remotevalidation),
        this.statesTriggersMap = {
            checked: "change click keyup paste input",
            unchecked: "change click keyup paste input",
            selected: "change",
            empty: "change click keyup paste input",
            filled: "change click keyup paste input"
        },
        this.options.stateDependencies && (this.stateTriggers = this.getStateTriggers())
    }
    get validators() {
        return this._validators
    }
    afterInit() {
        d.getValidators(this.customValidators).then(e => {
            this._validators = e
        }
        ),
        this.options.stateDependencies && this.form && c.afterRegistered(this.form).then( () => {
            this.triggerStateEvents()
        }
        )
    }
    focusField(e) {
        e && e.focus()
    }
    initState() {
        this.state.initialValue = this.field.value,
        this.state.triggerStateEventsOnInitDone = !1,
        this.state.fieldState = null,
        this.state.customFieldState = null,
        this.hasErrorKey = this.element.classList.contains(this.classes.error),
        this.hasErrorKey && (this.errorElement = this.element.querySelector(`.${this.classes.errorMessage}`))
    }
    bindEvents() {
        if (t("focus", this.field, this.onFocus.bind(this)),
        t("blur", this.field, this.onLeave.bind(this)),
        t("field.reset", this.field, this.onReset.bind(this)),
        t("error.reset", this.field, this.removeError.bind(this)),
        t("field.invalidate", this.field, this.onCustomError.bind(this)),
        t("field.dependency.action", this.field, this.handleDependencyAction.bind(this)),
        t("field.initInitialValue", this.element, this.onInitInitialValue.bind(this)),
        this.options.disableValidation || (t("invalid", this.field, this.onNativeError.bind(this)),
        t(this.options.validationEvent, this.field, l(this.onValidation.bind(this))),
        t("field.customvalidation", this.field, this.customValidation.bind(this))),
        this.options.disableCopyPaste && t("copy paste drag drop", this.field, this.disableCopyPaste.bind(this)),
        this.options.triggerName && t(this.options.triggerName, this.field, this.triggerBubblingEvent.bind(this)),
        (this.stateTriggers || []).forEach(e => {
            t(e, this.selectors.stateTargets || this.field, this.triggerStateEvents.bind(this))
        }
        ),
        this.options.fieldRequirements && (t("keyup.fieldrequirements", this.field, this.onChangeForFieldRequirements.bind(this)),
        t("paste.fieldrequirements", this.field, this.onChangeForFieldRequirements.bind(this))),
        this.options.prerequisite) {
            const e = this.options.prerequisite.event || "click";
            t(`${e}.prerequisite`, this.field, this.onPrerequisiteCheck.bind(this), !0)
        }
    }
    getStateTriggers() {
        const e = "radio" === this.field.type ? this.field.id : "";
        return Object.keys(this.options.stateDependencies || {}).reduce( (e, t) => {
            [t] = t.split("#");
            const s = this.statesTriggersMap[t];
            return s ? e.concat([s]) : e
        }
        , []).map(t => t.split(" ").map(t => `${t}.stateTriggers${e}`).join(" ")).filter( (e, t, s) => s.indexOf(e) === t)
    }
    triggerStateEvents() {
        let e;
        switch (this.field.type) {
        case "tel":
        case "text":
        case "textarea":
        case "file":
            e = "witherror"in this.options.stateDependencies || "withouterror"in this.options.stateDependencies ? this.errorElement ? "witherror" : "withouterror" : "" === this.field.value ? "empty" : "filled";
            break;
        case "radio":
        case "checkbox":
            e = this.field.checked ? "checked" : "unchecked"
        }
        if (this.state.fieldState !== e && e in this.options.stateDependencies) {
            this.state.fieldState = e;
            const t = this.processSelfActions(this.options.stateDependencies[e]);
            s("field.dependency.state.changed", this.field, {
                bubbles: !0,
                dependentActions: t,
                masterField: this.field
            }),
            this.state.triggerStateEventsOnInitDone = !0
        }
    }
    triggerCustomStateEvents(e, t) {
        if (this.state.customFieldState !== e && e in this.options.stateDependencies) {
            this.state.customFieldState = e;
            const i = this.processSelfActions(this.options.stateDependencies[e]);
            s("field.dependency.state.changed", this.field, {
                bubbles: !0,
                dependentActions: i,
                masterField: this.field,
                data: t
            })
        }
    }
    processSelfActions(e) {
        return e.filter(e => {
            const [t,s,i] = e.split(":");
            if ("self" === t) {
                if (this.checkDependencyCondition(i)) {
                    const [e,...t] = s.split("-");
                    this.handleDependencyAction({
                        detail: {
                            action: e,
                            actionParams: t,
                            masterField: this.field
                        }
                    })
                }
                return !1
            }
            return !0
        }
        )
    }
    sendAnalyticsBlock(e) {
        const t = e && e.detail && e.detail.actionParams[0];
        t && this.analytics && this.analytics[t] && h.emit("analytics.event", this.analytics[t])
    }
    checkDependencyCondition(e) {
        return "ifNotOnInit" !== e || this.state.triggerStateEventsOnInitDone
    }
    handleDependencyAction(e) {
        e.detail.action && "function" == typeof this[e.detail.action] && this[e.detail.action](e)
    }
    updateValue() {}
    updateMaxLength(e) {
        const t = e.detail && e.detail.masterField && e.detail.masterField.dataset.dependencyNewMaxLength;
        t && this.field.setAttribute("maxlength", t)
    }
    updatePattern(e) {
        let t = !1
          , i = null
          , r = !1;
        if (e instanceof CustomEvent) {
            t = !!this.options.pattern;
            const s = e.detail && e.detail.masterField && e.detail.masterField.value;
            i = this.options.pattern && this.options.pattern[s]
        } else {
            const s = e || {};
            t = !0,
            r = s.clearOnError,
            i = s.pattern && {
                pattern: s.pattern.value,
                "data-error-pattern": s.pattern.error
            }
        }
        t && (i ? (this.field.setAttribute("pattern", i.pattern),
        this.field.setAttribute("data-error-pattern", i["data-error-pattern"])) : (this.field.removeAttribute("pattern"),
        this.field.removeAttribute("data-error-pattern")),
        this.field.value && (this.field.checkValidity() ? this.removeError() : r && (this.field.value = "",
        s("change", this.field, {
            bubbles: !0
        }))))
    }
    show() {
        this.element.classList.remove("h-hidden"),
        this.label && this.label.forEach(e => {
            e.classList.remove("h-hidden")
        }
        )
    }
    hide() {
        this.element.classList.add("h-hidden"),
        this.label && this.label.forEach(e => {
            e.classList.add("h-hidden")
        }
        )
    }
    enable() {
        this.field.enabled = !0,
        this.field.disabled = !1
    }
    disable() {
        this.field.enabled = !1,
        this.field.disabled = !0
    }
    check() {
        this.field.checked = !0,
        s("click", this.field)
    }
    uncheck() {
        this.field.checked = !1,
        s("click", this.field)
    }
    require() {
        this.field.setAttribute("required", "required"),
        this.field.setAttribute("aria-required", "true")
    }
    unrequire() {
        this.field.removeAttribute("required"),
        this.field.setAttribute("aria-required", "false"),
        this.field.checkValidity() && this.removeError()
    }
    setFieldState(e, t) {
        const s = t || this.element
          , i = this.classes.active;
        e ? s.classList.add(i) : s.classList.remove(i)
    }
    triggerBubblingEvent() {
        s(this.options.triggerAction, this.field, {
            bubbles: !0
        })
    }
    onFocus() {
        this.element.classList.add(this.classes.focus),
        "" !== this.field.value && this.setFieldState(!0),
        this.options.fieldRequirements && !this.selectors.requirements && this.createFieldRequirements()
    }
    onLeave() {
        this.element.classList.remove(this.classes.focus),
        "" === this.field.value ? this.setFieldState(!1) : this.setFieldState(!0),
        !this.state.isValidated && "" !== this.field.value && this.selectors.requirementsList && (this.state.isValidated = !0,
        this.selectors.requirementsList.classList.remove(this.classes.onValidate))
    }
    onReset() {
        this.reset(),
        this.removeError(),
        this.removeValidationClass()
    }
    reset() {
        "checkbox" === this.field.type ? this.field.checked = !1 : this.field.value = ""
    }
    trim() {
        this.field.value = this.field.value.trim()
    }
    setValue(e) {
        this.field.value = e
    }
    disableCopyPaste(e) {
        return e.preventDefault(),
        !1
    }
    removeValidationClass() {
        this.element.classList.remove(this.classes.valid)
    }
    removeError() {
        this.element.classList.remove(this.classes.error),
        this.field.removeAttribute("aria-invalid"),
        this.options.showErrorMessage && this.field.removeAttribute("aria-describedby"),
        this.hasErrorKey && (this.element.removeChild(this.errorElement),
        this.errorElement = null,
        this.hasErrorKey = !1),
        this.options.stateDependencies && this.form && setTimeout( () => {
            this.options && this.options.stateDependencies && this.form && this.triggerStateEvents()
        }
        , 0)
    }
    addError(e, t) {
        if (this.element.classList.remove(this.classes.valid),
        this.element.classList.add(this.classes.error),
        !this.options.fieldRequirements || this.options.showErrorMessage) {
            const s = this.element.querySelector("[data-js-counter]");
            if (this.errorElement)
                this.errorElement.innerHTML = e;
            else {
                const t = `error-${this.field.getAttribute("id")}`;
                this.errorElement = document.createElement("div"),
                this.errorElement.classList.add(this.classes.errorMessage),
                this.errorElement.setAttribute("id", t),
                this.errorElement.setAttribute("role", "alert"),
                this.errorElement.setAttribute("data-js-error", !0),
                this.errorElement.innerHTML = e,
                s ? this.element.insertBefore(this.errorElement, s) : this.element.appendChild(this.errorElement),
                this.field.setAttribute("aria-invalid", !0),
                this.field.setAttribute("aria-describedby", t)
            }
            this.hasErrorKey = t
        }
        this.options.stateDependencies && this.form && this.triggerStateEvents()
    }
    onValidation() {
        this.validate(),
        this.remoteValidator && this.remoteValidation()
    }
    validate() {
        this.field.setCustomValidity("");
        let e = this.field.checkValidity();
        return e = this.customValidation() && e,
        e && (this.removeError(),
        this.jumpTo && this.focusField(this.jumpTo),
        this.options.showValidState && "" !== this.field.value.trim() ? this.element.classList.add(this.classes.valid) : this.element.classList.remove(this.classes.valid)),
        e
    }
    customValidation() {
        return !this.customValidators || Object.keys(this.customValidators).every(e => !(e in this.validators) || this.validators[e].call(this, this.field, this.customValidators[e]))
    }
    async remoteValidation() {
        if (!this.remoteValidator)
            return;
        const e = new FormData;
        ("checkbox" !== this.field.type || this.field.checked) && e.append(this.field.name, this.field.value);
        const t = await this.getCSRFToken();
        e.append("csrf_token", t),
        a(this.remoteValidator.url, {
            method: "POST",
            body: e
        }).then(this.remoteValidationSuccess.bind(this))
    }
    remoteValidationSuccess(e) {
        e.dependencyState ? this.triggerCustomStateEvents(e.dependencyState, e) : s("field.remote.validation.success", this.field, {
            bubbles: !0,
            data: e
        })
    }
    onNativeError(e) {
        let t;
        e.preventDefault();
        const s = {
            badInput: "format",
            patternMismatch: "pattern",
            rangeOverflow: "maximum",
            rangeUnderflow: "minimum",
            stepMismatch: "",
            tooLong: "maxlength",
            tooShort: "minlength",
            typeMismatch: "format",
            valueMissing: "required",
            customError: "customError"
        };
        if (Object.keys(s).forEach(e => {
            this.field.validity[e] && (t = s[e])
        }
        ),
        "customError" === t && (t = this.field.validationMessage),
        this.options.shakeFieldOnError && this.shakeField(),
        this.hasErrorKey && this.hasErrorKey === t)
            return !1;
        const i = `error${t.charAt(0).toUpperCase()}${t.slice(1)}`
          , r = this.field.dataset[i] || `[Native] ${this.field.validationMessage}`;
        return this.removeError(),
        this.addError(r, t),
        !0
    }
    shakeField() {
        return r(this.options.classNames.shake, this.element)
    }
    async getCSRFToken() {
        const e = await m();
        return e && e.token || ""
    }
    onCustomError(e) {
        const t = e.detail;
        this.addError(t.errorMessage, t.errorKey),
        this.options.updateInvalidValue && (t.newValue || "" === t.newValue) && this.setValue(t.newValue)
    }
    onInitInitialValue() {
        this.field.value = this.state.initialValue,
        s(this.options.validationEvent, this.field)
    }
    createFieldRequirements() {
        this.selectors.requirements = document.createElement("div"),
        this.options.showErrorMessage || (this.field.setAttribute("aria-describedby", `${this.field.id}-requirements`),
        this.selectors.requirements.setAttribute("id", `${this.field.id}-requirements`)),
        this.selectors.requirements.setAttribute("class", `${this.options.classNames.requirements}`);
        const e = document.createElement("div");
        e.setAttribute("class", `${this.options.classNames.requirementsInner}`);
        const t = document.createElement("p");
        t.setAttribute("class", `c-text-field__requirements-title ${this.options.classNames.requirementsTitle}`),
        t.innerHTML = this.options.fieldRequirements.title,
        e.appendChild(t),
        this.selectors.requirementsList = document.createElement("ul"),
        this.selectors.requirementsList.setAttribute("class", `c-text-field__requirements-list ${this.options.classNames.requirementsList} ${this.classes.onValidate}`),
        this.selectors.requirementsRules = {},
        Object.keys(this.options.fieldRequirements.rules).forEach(e => {
            const t = this.options.fieldRequirements.rules[e]
              , s = document.createElement("li")
              , i = document.createElement("div")
              , r = document.createElement("span");
            s.setAttribute("class", "c-text-field__requirements-item"),
            i.setAttribute("class", "c-text-field__requirements-content"),
            r.setAttribute("class", "h-show-for-sr"),
            r.setAttribute("data-js-valid-rule-message", ""),
            r.innerHTML = this.options.fieldRequirements.a11y.ruleNotMet || "",
            i.innerHTML = t.title,
            s.appendChild(r),
            s.appendChild(i),
            this.selectors.requirementsList.appendChild(s),
            this.selectors.requirementsRules[e] = s
        }
        ),
        e.appendChild(this.selectors.requirementsList),
        this.selectors.requirements.appendChild(e),
        this.element.appendChild(this.selectors.requirements)
    }
    onChangeForFieldRequirements(e) {
        const {target: t} = e;
        this.state.isAllValid = !0,
        t.value ? this.customValidators && Object.keys(this.customValidators).forEach(e => {
            if (e in this.validators) {
                const t = this.validators[e].call(this, this.field, this.customValidators[e])
                  , s = this.selectors.requirementsRules[e].querySelector("[data-js-valid-rule-message]");
                this.selectors.requirementsRules[e].classList.remove(this.classes.error),
                this.selectors.requirementsRules[e].classList.remove(this.classes.success),
                s.innerHTML = this.options.fieldRequirements.a11y.ruleNotMet || "",
                t ? (s.innerHTML = this.options.fieldRequirements.a11y.ruleMet || "",
                this.selectors.requirementsRules[e].classList.add(this.classes.success)) : (this.selectors.requirementsRules[e].classList.add(this.classes.error),
                this.selectors.requirements.removeAttribute("aria-label"),
                this.state.isAllValid = !1)
            }
        }
        ) : (this.state.isValidated = !1,
        this.state.isAllValid = !1,
        this.selectors.requirements.removeAttribute("aria-label"),
        this.selectors.requirementsList.classList.add(this.classes.onValidate),
        Object.keys(this.customValidators).forEach(e => {
            e in this.validators && (this.selectors.requirementsRules[e].classList.remove(this.classes.error),
            this.selectors.requirementsRules[e].classList.remove(this.classes.success),
            this.selectors.requirementsRules[e].querySelector("[data-js-valid-rule-message]").innerHTML = this.options.fieldRequirements.a11y.ruleNotMet || "")
        }
        )),
        this.state.isAllValid && this.selectors.requirements.setAttribute("aria-label", this.options.requirementsSuccessMessage)
    }
    onPrerequisiteCheck(e) {
        if (this.state.prerequisiteValid)
            return;
        e.preventDefault(),
        e.stopImmediatePropagation();
        const {url: t, data: s} = this.options.prerequisite;
        a(t, {
            method: "POST",
            body: u(s || {})
        }).then(this.onPrerequisiteUpdated.bind(this))
    }
    onPrerequisiteUpdated(e) {
        const {valid: t, modal: i} = e;
        if (this.state.prerequisiteValid = t,
        t) {
            const e = this.options.prerequisite.event || "click";
            return void ("function" == typeof this.field[e] ? this.field[e]() : s(e, this.field))
        }
        i && this.openModal(i)
    }
    openModal(e) {
        h.emit("modal.open", {
            options: e
        })
    }
    destroy() {
        i(this.field),
        i(this.element)
    }
}
export {f as default};
