import e from "../../core/Component.js";
import {ajax as t} from "../../toolbox/ajax.js";
import {mix as s} from "../../core/mixwith.js";
import {Event as i} from "../../services/EventEmitter.js";
import {on as r, trigger as o, off as a} from "../../toolbox/event.js";
import {deepMerge as n} from "../../toolbox/deepMerge.js";
import l from "../../mixins/Analytics.js";
import c from "../../mixins/Accessibility.js";
import h from "../../core/ComponentRegistry.js";
import {getRelativeSelector as d} from "../../toolbox/html.js";
import {scrollTo as m, waitForScrollEnd as u} from "../../toolbox/scroll.js";
import p from "../../services/CrossRequestStorage.js";
import {getCSRF as b} from "../../toolbox/csrf.js";
class f extends (s(e).with(l, c)) {
    constructor(e, t={}) {
        super(e, n({
            headers: {},
            errorMessages: {
                captchaRequired: ""
            },
            text: {
                accessibility: {
                    processingStatusMessage: "",
                    finishedStatusMessage: ""
                },
                genericErrorMessage: ""
            },
            classNames: {
                formErrorMessage: "c-alert m-error"
            },
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
                global: !1
            },
            reloadData: {
                section: "common",
                id: "form"
            },
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
            promiseResponse: !1
        }, t))
    }
    initCache() {
        this.classes = {
            submitting: this.options.isRelativeLoader ? ["c-loader"] : ["c-loader", "m-fixed", "m-icon-fixed"],
            relativeLoader: "m-relative-loader",
            error: "m-error",
            errorMessage: "c-field__error-message",
            formErrorMessage: "c-form__error-message",
            reCaptcha: "g-recaptcha",
            formCustomMessage: "c-form__custom-message",
            loadingClass: "m-loading"
        },
        this.element.noValidate = !1,
        this.selectors.buttons = this.element.querySelectorAll("button[name][type=submit]"),
        this.url = this.element.getAttribute("action"),
        this.method = this.element.getAttribute("method") || "POST"
    }
    async getCSRF() {
        if ("true" !== this.element.getAttribute("data-has-active-csrf"))
            return null;
        const e = await b();
        if (!e) {
            const e = this.element.querySelector('[name="form_id"]');
            return e ? (console.error(`[Form.js] Failed to get the csrf token for form "${e.getAttribute("value")}"`),
            null) : null
        }
        return e
    }
    getComponentKey() {
        return this._componentKey || (this._componentKey = d(this.element),
        this.element.parentElement && (this._componentKey = d(this.element, this.element.parentElement.parentElement))),
        this._componentKey
    }
    getSelectorForSubElement(e) {
        return d(e, e.parentElement) || !0
    }
    createCSRFField(e) {
        if (!e || !e.name || !e.token)
            return;
        if (this.element.querySelector(`[name="${e.name}"]`))
            return;
        const t = document.createElement("input");
        t.setAttribute("type", "hidden"),
        t.setAttribute("name", e.name),
        t.setAttribute("value", e.token),
        this.element.appendChild(t)
    }
    initState() {
        this.state = {
            isSubmitting: !1,
            hasError: !1,
            hasCaptcha: !!this.options.captcha
        },
        this.state.hasCaptcha && (this.state.isCaptchaValid = !1,
        this.state.isCaptchaInvisible = !!this.options.captcha.invisible),
        this.options.customValidation && (this.state.customValidationComplete = !1),
        this.options.isRelativeLoader && this.element.classList.add(this.classes.relativeLoader)
    }
    afterInit() {
        !this.options.keepDisabledSubmitAfterInit && this.selectors.buttons && this.selectors.buttons.length && this.selectors.buttons.forEach(e => {
            e.removeAttribute("disabled"),
            e.classList.remove(this.classes.loadingClass)
        }
        ),
        this.options.trackFocusedElements && this.restoreLastFocusState(),
        this.isAutosubmitRequired() && Promise.all(Array.from(this.element.querySelectorAll("[data-js-field-component]")).map(e => h.afterRegistered(e, !0))).then( () => {
            this.submit()
        }
        ),
        b()
    }
    bindEvents() {
        super.bindEvents(),
        r("submit", this.element, this.submit.bind(this)),
        r("click", this.selectors.buttons, this.onAction.bind(this)),
        r("reset", this.element, this.onReset.bind(this)),
        r("form.action", this.element, this.onAction.bind(this)),
        r("form.reload", this.element, this.onFormReload.bind(this)),
        r("form.validate", this.element, this.onValidate.bind(this)),
        this.state.hasCaptcha && (r("form.captcha.success", this.element, this.onCaptchaSuccess.bind(this)),
        r("form.captcha.expired", this.element, this.onCaptchaExpired.bind(this))),
        this.options.submitOnChange && r("change.submit", this.element, this.onSubmitOnChange.bind(this)),
        r("field.dependency.state.changed", this.element, this.handleFieldStateDependencies.bind(this))
    }
    handleFieldStateDependencies(e) {
        e.detail.dependentActions.forEach(t => {
            const [s,i,r] = t.split(":")
              , a = this.element.querySelector(`[name=${s}],[data-dependency-listener=${s}]`);
            if (a && ("ifmastervisible" !== r || null !== e.target.offsetParent))
                if (a.hasAttribute("data-dependency-listener"))
                    h.afterRegistered(a).then( () => {
                        o("field.dependency.action", a, {
                            action: i,
                            masterField: e.detail.masterField,
                            data: e.detail.data
                        })
                    }
                    );
                else if (!("type"in a) || "button" !== a.type && "submit" !== a.type) {
                    const t = a.closest("[data-js-field-component]");
                    if (t) {
                        if (h.isRegistered(t))
                            return void o("field.dependency.action", a, {
                                action: i,
                                masterField: e.detail.masterField,
                                data: e.detail.data
                            });
                        h.afterRegistered(t).then( () => {
                            o("field.dependency.action", a, {
                                action: i,
                                masterField: e.detail.masterField,
                                data: e.detail.data
                            })
                        }
                        )
                    }
                } else
                    this.handleButtonDependentAction(a, i)
        }
        )
    }
    handleButtonDependentAction(e, t) {
        switch (t) {
        case "enable":
            e.disabled = !1;
            break;
        case "disable":
            e.disabled = !0;
            break;
        case "show":
            e.parentNode.classList.remove("h-hidden");
            break;
        case "hide":
            e.parentNode.classList.add("h-hidden")
        }
    }
    onAction(e) {
        e.preventDefault();
        const t = e.detail && e.detail.name || e.target.name
          , s = e.detail && e.detail.value || e.target.value
          , i = e.detail && e.detail.target || e.target;
        e.detail && e.detail.skipAnalytics || this._initEventAnalytics(i);
        let r = null;
        if (t && ("checkbox" !== e.target.type || e.target.checked)) {
            const e = this.getSerializedForm(this.getBody());
            t in e && e[t] === s || (r = document.createElement("input"),
            r.type = "hidden",
            r.name = t,
            r.value = s,
            this.element.appendChild(r))
        }
        this.submit().catch( () => {}
        ).finally( () => {
            r && r.remove()
        }
        )
    }
    onReset() {
        this.resetFields()
    }
    onFormReload() {
        this.reload({
            data: this.element.name
        })
    }
    onSubmitOnChange(e) {
        o("form.action", e.target, {
            bubbles: !0
        })
    }
    onCaptchaSuccess(e) {
        e.stopPropagation(),
        this.state.isCaptchaValid = !0,
        this.clearFormErrors()
    }
    onCaptchaExpired(e) {
        e.stopPropagation(),
        this.state.isCaptchaValid = !1
    }
    beforeSubmit() {}
    clientValidate() {
        return !!this.options.disableValidation || (this.validate(),
        !!this.element.checkValidity() || (o(this.options.events.validateError, this.element, {
            bubbles: !0
        }),
        this.options.scrollToFormOnSubmit && this.element.scrollIntoView({
            block: "center"
        }),
        this.scrollToFirstError(),
        !1))
    }
    async submit(e) {
        if (e && e.preventDefault(),
        this.clearFormErrors(),
        this.beforeSubmit(),
        this.state.isSubmitting && !this.state.customValidationComplete)
            return Promise.reject();
        if (!this.clientValidate())
            return Promise.reject();
        const s = await this.getCSRF();
        return this.createCSRFField(s),
        this.state.hasCaptcha && !this.state.isCaptchaValid ? this.state.isCaptchaInvisible ? new Promise( (e, t) => {
            o("captcha.execute", this.element.querySelector(`.${this.classes.reCaptcha}`), {
                form: this.element,
                onExecuteSuccess: () => {
                    this.submit().then(e).catch(e => {
                        e.errorMessage || e.fieldsErrors || this.setFormError(this.options.errorMessages.captchaRequired),
                        t()
                    }
                    )
                }
                ,
                onExecuteFail: t
            })
        }
        ) : (this.setFormError(this.options.errorMessages.captchaRequired),
        Promise.reject()) : (this.state.isSubmitting || this.setSubmitState(!0),
        this.options.customValidation && !this.state.customValidationComplete ? new Promise( (e, t) => {
            o("client.validate", this.element.querySelector(this.options.customValidationSelector), {
                onValidationSuccess: () => {
                    this.state.customValidationComplete = !0,
                    this.submit().then(e)
                }
                ,
                onValidationFail: s => {
                    this.state.customValidationComplete = !0,
                    this.setFormError(s.message),
                    s.submit ? this.submit().then(e) : this.setSubmitState(!1),
                    t()
                }
            })
        }
        ) : (this.hasError && this.resetFields(),
        this.options.trackFocusedElements && this.saveLastFocusState(),
        i.emit(this.options.events.executeSubmit, {
            form: this.element
        }),
        this.url ? t(this.url, {
            method: this.method,
            body: this.getBody(),
            headers: this.getHeaders()
        }).then(this.onSubmitSuccess.bind(this)).catch(this.onSubmitError.bind(this)) : this.customSubmit()))
    }
    getFieldValues() {
        const e = {};
        return this.getBody().forEach( (t, s) => {
            e[s] = t
        }
        ),
        e
    }
    customSubmit() {
        return new Promise( (e, t) => {
            if (this.options.events.submit)
                i.emit(this.options.events.submit, {
                    form: this.getFieldValues(),
                    onSuccess: t => {
                        this.onSubmitSuccess(t),
                        e()
                    }
                    ,
                    onError: e => {
                        this.onSubmitError(e),
                        t()
                    }
                });
            else {
                const e = new Error("customSubmit event must be defined");
                t(e)
            }
        }
        )
    }
    validate() {
        this.element.checkValidity(),
        Array.from(this.element.querySelectorAll("[data-js-field-component]")).forEach(e => {
            if (h.isRegistered(e)) {
                const t = h.getComponent(e);
                "function" == typeof t.validate && t.validate()
            }
        }
        )
    }
    resetFields() {
        this.element.querySelectorAll("[data-js-field]").forEach(e => o("field.reset", e))
    }
    resetFieldsErrors() {
        this.element.querySelectorAll("[data-js-field]").forEach(e => o("error.reset", e))
    }
    cleanGroupsErrors() {
        this.element.querySelectorAll(".c-field__error-message.m-group").forEach(e => e.remove())
    }
    refreshForm(e) {
        this.options.onSubmitSuccessReload ? this._replaceElement(e) : this.options.clearFormOnSuccess && this.element.reset()
    }
    getBody() {
        return new FormData(this.element)
    }
    getHeaders() {
        return this.options.headers
    }
    onSubmitSuccess(e) {
        const t = (e = e || {}).custom || {};
        this.sendFormAnalytics(e);
        const s = t.redirectUrl
          , r = e.redirectUrl || e.continueUrl || s || this.options.redirectUrl;
        if (r && "object" == typeof e ? e.redirectUrl = r : r || this.options.keepLoaderUntilRedirected || this.setSubmitState(!1),
        o(this.options.events.success, this.element, {
            bubbles: !0,
            content: e
        }),
        this.options.successModal && "object" == typeof this.options.successModal || t.successModal) {
            let s = this.options.successModal || {};
            e.successUrl && (s.contentUrl = e.successUrl),
            t.successModal && (s = n(s, t.successModal)),
            this.openModal(s)
        } else
            this.options.showSuccessAsSnackbar && e.successMessage && i.emit("snackbar.notify", {
                content: e.successMessage,
                type: "success"
            });
        return this.resetCaptcha(),
        this.emitEventsOnSuccess(e),
        this.options.crossRequestDelayedAction && p.setDelayedAction(this.options.crossRequestDelayedAction),
        e.stopRedirect || e.redirectInProgress || !this.redirectPage(r) ? (this.refreshForm(e),
        this.options.scrollToFormOnSubmit && e.success && e.message && this.element.scrollIntoView({
            block: "center"
        }),
        this.options.promiseResponse ? e : this.getSerializedForm(this.getBody())) : this.options.promiseResponse ? e : this.getSerializedForm(this.getBody())
    }
    sendFormAnalytics(e) {
        e && ("object" == typeof e && e.submissionAnalytics && (this.sendAnalytics(e.submissionAnalytics),
        delete e.submissionAnalytics),
        this.sendAnalytics(this.getAnalytics(e)))
    }
    getSerializedForm(e) {
        const t = {};
        for (const [s,i] of e.entries())
            t[s] = i;
        return t
    }
    emitEventsOnSuccess(e) {
        let t = [];
        e.custom && e.custom.events && (t = t.concat(e.custom.events)),
        this.options.events.customSuccess && (t = t.concat(this.options.events.customSuccess)),
        t.forEach(t => {
            i.emit(t, e)
        }
        ),
        this.options.closeModalOnSuccess && i.emit("modal.close")
    }
    emitEventsOnError(e) {
        let t = [];
        this.options.events.customError && (t = t.concat(this.options.events.customError)),
        t.forEach(t => {
            i.emit(t, e)
        }
        )
    }
    openModal(e) {
        i.emit("modal.open", {
            options: e
        })
    }
    onSubmitError(e) {
        this.setSubmitState(!1),
        o(this.options.events.error, this.element, {
            bubbles: !0,
            content: e
        }),
        e.data && e.data.redirectUrl && this.redirectPage(e.data.redirectUrl),
        this.options.onSubmitErrorReload ? this._replaceElement(e) : this.options.clearCustomMessageOnError && this.clearFormCustomMessage(),
        this.options.crossRequestDelayedActionOnError && p.setDelayedAction(this.options.crossRequestDelayedActionOnError);
        const t = e.data && (e.data.fieldsErrors && 0 !== e.data.fieldsErrors.length || e.data.groupsErrors && 0 !== e.data.groupsErrors.length);
        if (this.options.showErrorAsSnackbar && e && e.errorMessage)
            i.emit("snackbar.notify", {
                content: e.errorMessage,
                type: "error"
            });
        else if (e.errorMessage)
            this.setFormError(e.errorMessage);
        else if (!t) {
            const e = navigator.onLine ? this.options.text.genericErrorMessage || "ERROR_UNDEFINED" : this.options.text.offlineErrorMessage;
            this.setFormError(e)
        }
        const s = e.data && e.data.groupsErrors || [];
        s.length && (this.cleanGroupsErrors(),
        s.forEach(e => {
            const t = this.element.querySelector(`[data-js-group="${e.group}"]`);
            if (t) {
                let s = null;
                s = document.createElement("div"),
                s.classList.add("c-field__error-message", "m-group"),
                s.setAttribute("id", e.group),
                s.setAttribute("role", "alert"),
                s.innerHTML = e.errorMessage,
                t.parentNode.insertBefore(s, t.nextSibling)
            }
        }
        ));
        const r = e.data && e.data.fieldsErrors || []
          , a = e.data && e.data.fieldsValues || {};
        return r.length && (this.resetFieldsErrors(),
        r.forEach(e => {
            const t = this.element.querySelector(`[name="${e.field}"]`);
            t && o("field.invalidate", t, {
                errorMessage: e.errorMessage,
                errorKey: e.errorKey,
                newValue: a[e.field]
            })
        }
        ),
        this.scrollToFirstError()),
        this.emitEventsOnError(e.data || e),
        e.data && e.data.custom && e.data.custom.errorAnalytics && this.sendAnalytics(e.data.custom.errorAnalytics),
        this.resetCaptcha(),
        e.data && e.data.needReload && this.redirectPage("self"),
        Promise.reject(e.data || e)
    }
    resetCaptcha() {
        this.state.isCaptchaValid && (this.state.isCaptchaValid = !1,
        o("captcha.reset", this.element.querySelector(`.${this.classes.reCaptcha}`)))
    }
    clearFormErrors() {
        this.element.classList.remove(this.classes.error),
        [].forEach.call(this.element.querySelectorAll(`.${this.classes.formErrorMessage}`), e => {
            e.remove()
        }
        ),
        this.cleanGroupsErrors()
    }
    clearFormCustomMessage() {
        [].forEach.call(this.element.querySelectorAll(`.${this.classes.formCustomMessage}`), e => {
            e.classList.add("h-hidden")
        }
        )
    }
    setFormError(e) {
        this.clearFormErrors(),
        this.element.classList.add(this.classes.error);
        const t = document.createElement("p");
        t.classList.add(this.classes.formErrorMessage),
        this.options.classNames && this.options.classNames.formErrorMessage && t.classList.add(...this.options.classNames.formErrorMessage.split(" ")),
        t.setAttribute("role", "alert"),
        t.innerHTML = e,
        this.options.prependError ? this.element.prepend(t) : this.element.appendChild(t)
    }
    setSubmitState(e) {
        e ? (this.loader || this.options.disableLoader || (this.loader = document.createElement("div"),
        this.loader.classList.add(...this.classes.submitting)),
        this.loader && this.element.appendChild(this.loader),
        this.state.isSubmitting = !0,
        this.updateStatusMessage(this.options.text.accessibility.processingStatusMessage)) : (this.loader && this.loader.remove(),
        this.state.isSubmitting = !1,
        this.updateStatusMessage(this.options.text.accessibility.finishedStatusMessage))
    }
    redirectPage(e) {
        const t = e || this.options.redirectUrl;
        return !!t && (this.setSubmitState(!0),
        "self" === t ? window.location.reload() : window.location.href = t,
        !0)
    }
    isAutosubmitRequired() {
        if (this.options.autoSubmit)
            return !0;
        if (this.options.formUniqueKey) {
            const e = p.getDelayedAction();
            if (e && "submit" === e.type && this.options.formUniqueKey === e.value)
                return p.removeDelayedAction(),
                !0
        }
        return !1
    }
    scrollToFirstError() {
        const e = this.element.querySelector(`.${this.classes.errorMessage}`) || this.element.querySelector(`.${this.classes.formErrorMessage}`);
        if (!e)
            return;
        const t = e.parentNode;
        m(t, this.options.stickyHeaderHeight),
        u().then( () => {
            this.element.querySelector('[data-js-field][aria-invalid="true"]').focus()
        }
        )
    }
    onComponentValidate(e) {
        const {onValidated: t} = e.detail;
        "function" == typeof t && this.submit().then(e => {
            t({
                isValid: !0,
                data: e
            })
        }
        ).catch( () => {
            t({
                isValid: !1
            })
        }
        )
    }
    onValidate() {
        this.validate()
    }
    destroy() {
        super.destroy(),
        a(this.element),
        a("click", this.selectors.buttons)
    }
}
export {f as default};

