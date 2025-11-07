import t from "../../core/Component.js";
import {mix as s} from "../../core/mixwith.js";
import {on as e, off as i} from "../../toolbox/event.js";
import {deepMerge as o} from "../../toolbox/deepMerge.js";
import n from "../../mixins/Analytics.js";
class c extends (s(t).with(n)) {
    constructor(t, s={}) {
        super(t, o({
            classNames: {
                active: "m-active"
            },
            scrollTo: 0,
            offset: "auto",
            _resizable: !0,
            _scrollable: !0
        }, s))
    }
    initState() {
        this.state.isActive = !1,
        this.setOffsetSize()
    }
    setOffsetSize() {
        this.state.offset = "auto" === this.options.offset ? .5 * window.innerHeight : this.options.offset
    }
    bindEvents() {
        e("click", this.element, this.onClick.bind(this)),
        e("keypress", this.element, this.onKeyPress.bind(this))
    }
    onScroll() {
        this.state.offset <= 0 || (window.scrollY >= this.state.offset ? this.state.isActive || this.show() : this.state.isActive && this.hide())
    }
    onClick() {
        this.sendAnalytics(this.analytics),
        window.scroll({
            top: this.options.scrollTo
        })
    }
    onKeyPress(t) {
        const s = document.querySelector("[data-js-skip-to-content]");
        -1 !== ["Enter", " "].indexOf(t.key) && (window.scroll({
            top: this.options.scrollTo
        }),
        s && s.focus())
    }
    show() {
        this.element.classList.add(this.options.classNames.active),
        this.state.isActive = !0
    }
    hide() {
        this.element.classList.remove(this.options.classNames.active),
        this.state.isActive = !1
    }
    destroy() {
        i("click", this.element),
        i("keypress", this.element)
    }
    onResize() {
        "auto" === this.options.offset && this.setOffsetSize()
    }
}
export {c as default};
