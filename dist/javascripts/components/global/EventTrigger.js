import t from "../../core/Component.js";
import {mix as e} from "../../core/mixwith.js";
import {Event as i} from "../../services/EventEmitter.js";
import {on as s, trigger as o, off as n} from "../../toolbox/event.js";
import {deepMerge as a} from "../../toolbox/deepMerge.js";
import r from "../../mixins/Analytics.js";
import l from "../../mixins/Accessibility.js";
import h from "../../mixins/StickyOnScroll.js";
import p from "../../mixins/EventCatcher.js";
class d extends (e(t).with(r, l, p, h)) {
    constructor(t, e={}) {
        super(t, a({
            trigger: "click",
            reloadEvent: null,
            reloadData: null,
            keyTriggerCode: ["Enter", " "],
            event: null,
            data: {},
            isDelegate: !1,
            isLocalEvent: !1,
            skipEnablingAfterInit: !1,
            trackFocusedElements: !1,
            triggerAfterInit: !1,
            afterOpenEventName: null,
            reloadDataValueKey: null,
            confirmationModal: null,
            displayAnalytics: null,
            updateEvent: null
        }, e, {
            arrayMerge: (t, e) => e
        }))
    }
    bindEvents() {
        super.bindEvents(),
        s(this.options.trigger, this.element, this.onTriggerEvent.bind(this)),
        this.options.keyTriggerCode.length > 0 && s("keydown", this.element, this.onKeyDown.bind(this)),
        this.options.isCustomReloadEvent ? i.on(this.options.reloadEvent, this.onCustomReloadEvent, this) : this.options.reloadEvent && this.options.reloadData && s(this.options.reloadEvent, this.element, this.onReloadEvent.bind(this)),
        this.options.updateEvent && s(this.options.updateEvent, this.element, this.onUpdateEvent.bind(this))
    }
    onTrigger(t) {
        const e = this.getTargetElement(t.target);
        if (e) {
            this.options.trackFocusedElements && this.saveLastFocusState(),
            this.options.event && (this.options.afterOpenEventName && this.options.data && this.options.data.options && (this.options.data.options.afterOpen = () => {
                i.emit(this.options.afterOpenEventName)
            }
            ),
            this.options.isLocalEvent ? o(this.options.event, this.element, this.options.data) : i.emit(this.options.event, this.options.data)),
            this.options.skipPreventDefault || t.preventDefault(),
            this.options.stopPropagation && t.stopPropagation();
            const {isDelegate: s} = this.options
              , {analytics: n} = this;
            setTimeout( () => {
                let t;
                s ? t = a(n || {}, this.getAnalyticsAttributeData(e) || {}) : n && (t = n),
                this.sendAnalytics(t)
            }
            , 0)
        }
    }
    onTriggerEvent(t) {
        const {confirmationModal: e} = this.options;
        e ? (e.afterConfirm = this.onTrigger.bind(this, t),
        i.emit("modal.open", {
            type: "Confirm",
            options: e
        })) : this.onTrigger(t)
    }
    afterInit() {
        this.options.trackFocusedElements && this.restoreLastFocusState(),
        this.options.skipEnablingAfterInit || this.enableElement(),
        this.options.displayAnalytics && !this.options._lazyload && this.sendAnalytics(this.options.displayAnalytics),
        this.analytics && this.analytics.dynamic && o("analytics.dynamic.update", this.element, {
            bubbles: !0,
            analytics: this.analytics.dynamic
        }),
        this.options.triggerAfterInit && o(this.options.trigger, this.element, {
            cancelable: !0
        })
    }
    enableElement() {
        this.element.classList.remove(""),
        this.element.removeAttribute("disabled")
    }
    onKeyDown(t) {
        this.options.keyTriggerCode.includes(t.key) && this.onTrigger(t)
    }
    onReloadEvent(t) {
        if (!this.options.reloadDataValueKey)
            return;
        const e = t.detail[this.options.reloadDataValueKey];
        void 0 !== e && this.reload({
            data: e
        })
    }
    onCustomReloadEvent() {
        this.reload()
    }
    getTargetElement(t) {
        return this.options.isDelegate ? t.closest("[data-js-trigger]") : this.element
    }
    onUpdateEvent(t) {
        const e = t.detail.data && t.detail.data[this.options.dataModelId];
        e && this.render(e)
    }
    destroy() {
        n(this.options.trigger, this.element),
        this.options.keyTriggerCode.length > 0 && n("keydown", this.element),
        this.options.isCustomReloadEvent && i.off(this.options.reloadEvent, this.onCustomReloadEvent, this),
        this.options.reloadEvent && this.options.reloadData && n(this.options.reloadEvent, this.element),
        this.options.updateEvent && n(this.options.updateEvent, this.element),
        super.destroy()
    }
}
export {d as default};
