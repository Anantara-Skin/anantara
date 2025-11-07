import t from "../../core/Component.js";
import {deepMerge as e} from "../../toolbox/deepMerge.js";
import {Event as i} from "../../services/EventEmitter.js";
import {on as s, off as h} from "../../toolbox/event.js";
class n extends t {
    constructor(t, i={}) {
        super(t, e({
            _resizable: !0,
            _scrollable: !0
        }, i))
    }
    initCache() {
        this.classNames = {
            enabled: "m-visible",
            hurry: "m-hurry"
        }
    }
    initState() {
        this.state.isHighlighterVisible = !1,
        this.state.lastFocusedElement = void 0,
        this.state.isHeaderFocused = !1,
        this.state.lastFocusedElementCoords = ""
    }
    bindEvents() {
        s("keyup", document, this.handleKeyup.bind(this)),
        s("mousedown", document, this.handleMousedown.bind(this)),
        i.on("highlighter.update", this.updateHighlighter, this)
    }
    handleKeyup(t) {
        "Tab" === t.key && this.enableHighlighter()
    }
    handleMousedown(t) {
        if (!(t.target instanceof HTMLElement || t.target instanceof HTMLDocument))
            return;
        const e = t.target instanceof HTMLSelectElement
          , i = t.target instanceof HTMLButtonElement || "button" === t.target.getAttribute("role")
          , s = t.target instanceof HTMLInputElement && "radio" === t.target.getAttribute("type");
        e || i || s || this.state.isHighlighterVisible && this.disableHighlighter()
    }
    onResize() {
        this.updateHighlighter()
    }
    onScroll() {
        this.updateHighlighter()
    }
    updateHighlighter() {
        this.state.isHighlighterVisible && this.state.lastFocusedElement && this.moveTo(this.state.lastFocusedElement)
    }
    handleFocus() {
        if (!(document.activeElement instanceof HTMLElement))
            return;
        const t = document.activeElement;
        !this.isValidTarget(t) || this.isTextInput(t) && !this.state.isHighlighterVisible || (!this.state.isHeaderFocused && t.closest("[data-js-header]") && (this.state.isHeaderFocused = !0,
        i.emit("header.focused")),
        this.detectHurryNavigation(),
        this.moveTo(t))
    }
    enableHighlighter() {
        this.state.isHighlighterVisible || (this.state.isHighlighterVisible = !0,
        this.element.classList.add(this.classNames.enabled),
        this.handleFocus(),
        s("focusin", document, this.handleFocus.bind(this)),
        s("blur", window, this.onWindowBlur.bind(this)),
        this.highlighterInterval = window.setInterval( () => {
            this.updateHighlighter()
        }
        , 300))
    }
    disableHighlighter() {
        this.state.isHighlighterVisible && (h("focusin", document),
        h("blur", window),
        this.state.isHeaderFocused && (this.state.isHeaderFocused = !1,
        i.emit("header.unfocused")),
        this.state.isHighlighterVisible = !1,
        this.state.lastFocusedElement = void 0,
        this.element.classList.remove(this.classNames.enabled),
        this.hideTimeOut = window.setTimeout( () => this.hide(), 200),
        this.highlighterInterval && (window.clearInterval(this.highlighterInterval),
        this.highlighterInterval = null))
    }
    onWindowBlur() {
        "iframe" === document.activeElement.tagName.toLowerCase() && this.disableHighlighter()
    }
    moveTo(t) {
        if (!(t instanceof HTMLElement))
            return;
        let e, i;
        const s = t.getBoundingClientRect()
          , h = s.left + window.scrollX
          , n = s.top + window.scrollY - 6
          , a = s.height + 6;
        if (s.width >= document.body.clientWidth ? (e = s.width - 12,
        i = 3) : h < 6 ? (e = s.width - 6,
        i = 3) : h + s.width + 6 >= document.body.clientWidth ? (e = s.width - 6,
        i = document.body.clientWidth - s.width - 3) : (e = s.width + 6,
        i = h - 6),
        t === this.state.lastFocusedElement && this.state.lastFocusedElementCoords === `${n}${i}${e}${a}`)
            return;
        const l = this.element.style;
        l.top = `${n}px`,
        l.left = `${i}px`,
        l.width = `${e >= 0 ? e : 0}px`,
        l.height = `${a}px`,
        this.state.lastFocusedElementCoords = `${n}${i}${e}${a}`,
        this.state.lastFocusedElement = t
    }
    hide() {
        const t = this.element.style;
        t.width = "0",
        t.height = "0",
        this.hideTimeOut && window.clearTimeout(this.hideTimeOut)
    }
    detectHurryNavigation() {
        const t = Date.now();
        t - (this.lastKeyTime || 0) < 150 && !this.isHurryNavigation ? (this.element.classList.add(this.classNames.hurry),
        this.isHurryNavigation = !0) : this.isHurryNavigation && (this.element.classList.remove(this.classNames.hurry),
        this.isHurryNavigation = !1),
        this.lastKeyTime = t
    }
    isValidTarget(t) {
        return t !== this.state.lastFocusedElement && "HTML" !== t.nodeName && "BODY" !== t.nodeName
    }
    isTextInput(t) {
        return t instanceof HTMLTextAreaElement && !t.readOnly || t instanceof HTMLInputElement && !t.readOnly || !!t.getAttribute("contenteditable")
    }
    destroy() {
        this.state.isHighlighterVisible && this.disableHighlighter(),
        h("keyup mousedown", document),
        i.removeListener("highlighter.update")
    }
}
export {n as default};

