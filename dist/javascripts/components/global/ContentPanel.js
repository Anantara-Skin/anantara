import t from "../../core/Component.js";
import {Event as e} from "../../services/EventEmitter.js";
import {on as s, off as i} from "../../toolbox/event.js";
import {transition as o} from "../../toolbox/animate.js";
import {cookie as n} from "../../toolbox/cookie.js";
import {deepMerge as l} from "../../toolbox/deepMerge.js";
class a extends t {
    constructor(t, e={}) {
        super(t, l({
            classNames: {
                closedState: "m-closed",
                hidden: "h-hidden",
                hasCloseIcon: "m-has-close-icon"
            },
            type: null,
            onCloseCookieId: null,
            closeTimeout: 0,
            hideAnimationDelay: 500,
            eventName: "contentPanel",
            defaultMessage: null
        }, e))
    }
    initCache() {
        this.selectors.closeButton = this.element.querySelector("[data-js-close]"),
        this.selectors.content = this.element.querySelector("[data-js-content]")
    }
    initState() {
        this.state.type = null,
        this.state.isVisible = !this.element.classList.contains(this.options.classNames.closedState)
    }
    afterInit() {
        this.timeout = null,
        this.setDisplayDelay(),
        this.element.querySelector(".c-content-panel__close") && this.element.classList.add(this.options.classNames.hasCloseIcon),
        e.emit("remindertooltip.update")
    }
    bindEvents() {
        this.selectors.closeButton && s("click", this.selectors.closeButton, this.onCloseClick.bind(this)),
        e.on(`${this.options.eventName}.show`, this.show, this),
        e.on(`${this.options.eventName}.hide`, this.hide, this),
        o(this.element, this.onPanelTransitionEnd.bind(this))
    }
    onCloseClick(t) {
        t.preventDefault(),
        this.options.onCloseCookieId && n.setCookie(this.options.onCloseCookieId, !0),
        this.hide()
    }
    show(t={}) {
        const {type: s, closeTimeout: i} = t
          , o = t.content || this.options.defaultMessage;
        this.setDisplayDelay(i),
        o && this.addContent(o),
        this.setContentType(s),
        this.state.isVisible || (this.element.classList.remove(this.options.classNames.closedState),
        this.element.classList.remove(this.options.classNames.hidden),
        this.element.setAttribute("aria-hidden", "false"),
        this.state.isVisible = !0),
        e.emit("remindertooltip.update")
    }
    setDisplayDelay(t=this.options.closeTimeout) {
        t > 0 && (this.timeout && clearTimeout(this.timeout),
        this.timeout = setTimeout(this.hide.bind(this), t))
    }
    setContentType(t=this.options.type) {
        this.state.type !== t && (t ? (this.element.setAttribute("data-type", t),
        this.state.type = t) : this.state.type && (this.element.setAttribute("data-type", ""),
        this.state.type = null))
    }
    addContent(t) {
        t && (this.selectors.content.innerHTML = t)
    }
    hide() {
        this.element.classList.add(this.options.classNames.closedState),
        setTimeout( () => {
            this.element.classList.add(this.options.classNames.hidden),
            this.element.setAttribute("aria-hidden", "true"),
            e.emit("remindertooltip.update")
        }
        , this.options.hideAnimationDelay),
        this.options.dataAnalytics && this.options.dataAnalytics.onClose && e.emit("analytics.event", this.options.dataAnalytics.onClose),
        this.state.isVisible = !1
    }
    onPanelTransitionEnd() {
        e.emit(`${this.options.eventName}.transition.ended`)
    }
    destroy() {
        i("click", this.selectors.closeButton),
        e.removeListener(`${this.options.eventName}.show`, this.show, this),
        e.removeListener(`${this.options.eventName}.hide`, this.hide, this)
    }
}
export {a as default};
