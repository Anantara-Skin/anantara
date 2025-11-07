import e from "../../core/Component.js";
import {deepMerge as t} from "../../toolbox/deepMerge.js";
import {mix as s} from "../../core/mixwith.js";
import i from "../../mixins/Accessibility.js";
import {on as r, off as o} from "../../toolbox/event.js";
import {animate as n} from "../../toolbox/animate.js";
import {Event as a} from "../../services/EventEmitter.js";
class l extends (s(e).with(i)) {
    constructor(e, s={}) {
        super(e, t({
            menuSelector: null,
            triggerSelector: null,
            classNames: {
                openAnimation: "h-right-slide-in",
                closeAnimation: "h-right-slide-out"
            },
            a11y: {
                submenuAriaLiveOpened: "",
                submenuAriaLiveClosed: ""
            }
        }, s))
    }
    initCache() {
        this.classes = {
            opened: "m-opened",
            opening: "m-opening"
        },
        this.selectors.hamburgerContent = this.element.closest("[data-js-hamburger-content]"),
        this.selectors.arialive = this.element.closest("[data-js-hamburger]") && this.element.closest("[data-js-hamburger]").querySelector("[data-js-hamburger-aria-live]"),
        this.selectors.backButton = this.element.querySelector("[data-js-menu-back]"),
        this.selectors.menu = this.element.querySelector(this.options.menuSelector),
        this.selectors.trigger = this.options.triggerSelector && this.element.querySelector(this.options.triggerSelector)
    }
    initState() {
        this.state.opened = !1
    }
    bindEvents() {
        this.selectors.trigger && r("click", this.selectors.trigger, this.toggleMenu.bind(this)),
        this.selectors.backButton && r("click", this.selectors.backButton, this.toggleMenu.bind(this)),
        a.on("hamburgermenu.close", this.hamburgerMenuClose, this)
    }
    toggleMenu() {
        this.state.opened ? this.close() : this.open()
    }
    hamburgerMenuClose() {
        this.state.opened && this.close()
    }
    open() {
        return this.resetFocusedOrder(this.element),
        this.emitHamburgerEvents(!0),
        this.updateAriaAttributes(!0),
        this.selectors.menu.classList.add(this.classes.opening),
        n(this.options.classNames.openAnimation, this.selectors.menu).then( () => {
            this.state.opened = !0,
            this.selectors.menu.classList.add(this.classes.opened),
            this.selectors.menu.classList.remove(this.classes.opening),
            this.setFocusedOrder(this.element),
            this.selectors.hamburgerContent.querySelector('[data-js-focus-order="first"]').focus(),
            this.triggerAnalytics()
        }
        )
    }
    close() {
        return this.resetFocusedOrder(this.element),
        this.emitHamburgerEvents(!1),
        this.updateAriaAttributes(!1),
        n(this.options.classNames.closeAnimation, this.selectors.menu).then( () => {
            this.state.opened = !1,
            this.selectors.menu.classList.remove(this.classes.opened),
            this.selectors.hamburgerContent && this.setFocusedOrder(this.selectors.hamburgerContent),
            this.selectors.trigger.focus()
        }
        )
    }
    emitHamburgerEvents(e) {
        a.emit("hamburger.submenu.toggle", e),
        e || a.emit("hamburger.submenu.close", this.id)
    }
    updateAriaAttributes(e) {
        this.selectors.trigger && this.selectors.trigger.setAttribute("aria-expanded", e),
        this.selectors.backButton.setAttribute("aria-expanded", e),
        this.selectors.arialive && (this.selectors.arialive.innerText = e ? this.options.a11y.submenuAriaLiveOpened : this.options.a11y.submenuAriaLiveClosed)
    }
    triggerAnalytics() {
        this.analytics && Object.keys(this.analytics).length && a.emit("analytics.event", this.analytics)
    }
    destroy() {
        this.selectors.trigger && o("click", this.selectors.trigger),
        this.selectors.backButton && o("click", this.selectors.backButton),
        a.removeListener("hamburgermenu.close", this.hamburgerMenuClose, this)
    }
}
export {l as default};

