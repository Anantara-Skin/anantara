import t from "../../core/Component.js";
import {mix as e} from "../../core/mixwith.js";
import {on as s, trigger as i, off as o} from "../../toolbox/event.js";
import {Event as a} from "../../services/EventEmitter.js";
import {deepMerge as n} from "../../toolbox/deepMerge.js";
import c from "../../mixins/Accessibility.js";
import r from "../../mixins/Analytics.js";
import {transition as l} from "../../toolbox/animate.js";
import {getHash as h} from "../../toolbox/location.js";
import {replaceState as d} from "../../services/History.js";
import {scrollTo as m} from "../../toolbox/scroll.js";
class p extends (e(t).with(c, r)) {
    constructor(t, e={}) {
        super(t, n({
            classNames: {
                expanded: "m-expanded",
                expandedOnLoad: "m-expanded-on-load",
                active: "m-active",
                initialized: "m-initialized",
                disabled: "m-disabled"
            },
            scrollTopOffset: 200,
            isDynamicContent: !1,
            multiExpand: !1,
            mutationObserverOptions: {
                subtree: !0,
                childList: !0,
                characterData: !0,
                characterDataOldValue: !0
            },
            accordionHashID: null,
            focusOnFirstChild: !1
        }, e))
    }
    initCache() {
        this.dataSelector = {
            control: "[data-js-accordion-control]",
            item: "[data-js-accordion-item]",
            container: "[data-js-accordion-container]"
        },
        this.selectors.items = this.element.querySelectorAll(this.dataSelector.item),
        this.selectors.containers = this.element.querySelectorAll(this.dataSelector.container)
    }
    bindEvents() {
        s("click", this.element, this.onControlClick.bind(this)),
        s("keydown", this.element, this.onControlKeypress.bind(this)),
        s("component.ready lazyloaded", this.selectors.containers, this.onComponentReady.bind(this)),
        s("accordion.open", this.element, this.onAccordionOpen.bind(this)),
        s("accordion.close", this.element, this.onAccordionClose.bind(this)),
        s("accordion.update", this.element, this.onAccordionUpdate.bind(this)),
        this.options.accordionHashID && s(`hashchange.accordion-${this.id}`, window, this.onHashChange.bind(this))
    }
    initState() {
        if (this.state.activeItems = Array.from(this.element.parentElement.querySelectorAll(`${this.dataSelector.item}.${this.options.classNames.expanded}`)),
        this.state.destroy = !1,
        this.state.isItemSwitching = !1,
        this.mutationObservers = [],
        this.options.accordionHashID) {
            const t = this.getAccordionToReopen()
              , e = t && t.closest(this.dataSelector.item);
            e && this.open([e])
        }
    }
    afterInit() {
        this.selectors.containers.forEach(t => {
            if (t.classList.add(this.options.classNames.initialized),
            !t.hasAttribute("aria-hidden")) {
                const e = t.closest(this.dataSelector.item);
                this.updateAccordionItem(e, !1)
            }
            this.setAccessibility(t),
            this.options.isDynamicContent && this.initMutationObserver(t)
        }
        ),
        this.open(this.state.activeItems, !0, !0),
        i("accordion.initialised", this.element, {
            bubbles: !0
        })
    }
    onControlClick(t) {
        const e = t.target.closest(this.dataSelector.control);
        if (this.state.destroy || !e)
            return;
        const s = e.closest(this.dataSelector.item);
        if (!(s && s.classList.contains(this.options.classNames.disabled) || "A" === e.nodeName)) {
            const s = e.closest(this.dataSelector.item);
            s.classList.contains(this.options.classNames.expandedOnLoad) && s.classList.remove(this.options.classNames.expandedOnLoad),
            s.classList.contains(this.options.classNames.expanded) ? this.close(s) : (this.options.accordionHashID && d({}, "", `#${this.options.accordionHashID}=${e.getAttribute("data-titlehash") || e.id}`),
            this.open([s])),
            t.stopPropagation()
        }
    }
    onHashChange() {
        const t = this.getAccordionToReopen()
          , e = t && t.closest(this.dataSelector.item);
        if (e) {
            if (e.classList.contains(this.options.classNames.expanded))
                return;
            this.options.accordionHashID && d({}, "", `#${this.options.accordionHashID}=${t.getAttribute("data-titlehash") || t.id}`),
            this.open([e])
        }
    }
    getAccordionToReopen() {
        const t = decodeURIComponent(h(`${this.options.accordionHashID}`));
        return !!t && this.element.querySelector(`[data-titlehash="${t}"]`)
    }
    onControlKeypress(t) {
        if (this.state.destroy)
            return;
        const e = t.target;
        e.matches(this.dataSelector.control) && -1 !== ["Enter", " "].indexOf(t.key) && (t.preventDefault(),
        this.onControlClick(t),
        this.options.focusOnFirstChild && this.focusOnFirstChild(e))
    }
    focusOnFirstChild(t) {
        const e = t.closest(this.dataSelector.item);
        this.state.activeItems.includes(e) && l(e, () => {
            this.focusOnDefaultChildElement(e.querySelector(this.dataSelector.container))
        }
        )
    }
    setAccessibility(t) {
        if (!t)
            return;
        const e = this.getFocusableElements(t, !0);
        "false" === t.getAttribute("aria-hidden") ? e.forEach(t => {
            t.setAttribute("tabindex", "0")
        }
        ) : e.forEach(t => {
            t.setAttribute("tabindex", "-1")
        }
        )
    }
    open(t, e, s) {
        t.forEach(t => {
            const o = t.dataset.jsAccordionItem
              , a = t.querySelector(this.dataSelector.container);
            this.state.activeItems.length && !this.options.multiExpand && this.state.activeItems.forEach(t => {
                o === t.dataset.jsAccordionItem && (s || (this.state.isItemSwitching = !0),
                this.close(t))
            }
            ),
            this.updateAccordionItem(t, !0),
            this.state.activeItems.push(t),
            this.setAccessibility(a),
            setTimeout( () => {
                this._initEventAnalytics(t, !0),
                this.analytics && !e && this.sendAnalytics(this.analytics)
            }
            , 0),
            i("accordion.opened", t, {
                bubbles: !0,
                item: t
            })
        }
        )
    }
    updateAccordionItem(t, e) {
        const s = t.querySelector(this.dataSelector.container)
          , i = t.closest(this.dataSelector.container);
        s && (this.updateTitle(t),
        this.updateControl(t, e),
        s.setAttribute("aria-hidden", !e),
        e ? (this.setActiveClass(s),
        t.classList.add(this.options.classNames.expanded)) : t.classList.remove(this.options.classNames.expanded),
        this.updateContainersHeight(s, i, e))
    }
    setActiveClass(t) {
        t.classList.add(this.options.classNames.active),
        l(t, () => {
            if (t.classList.remove(this.options.classNames.active),
            !this.options.multiExpand && !0 === this.state.isItemSwitching) {
                t.getBoundingClientRect().top < 0 && m(t, this.options.scrollTopOffset, "vertical"),
                this.state.isItemSwitching = !1
            }
            t.closest(this.dataSelector.item).querySelector(this.dataSelector.control) === document.activeElement && a.emit("highlighter.update")
        }
        )
    }
    updateTitle(t) {
        const e = t.querySelector(this.dataSelector.control);
        if (e) {
            const t = e.querySelector("[data-js-title]");
            if (t) {
                const e = t.getAttribute("data-js-title");
                t.setAttribute("data-js-title", t.innerText),
                t.innerText = e
            }
        }
    }
    updateControl(t, e) {
        const s = t.querySelector(this.dataSelector.control);
        s.setAttribute("aria-expanded", e),
        this.setStateClass(e, s)
    }
    setStateClass(t, e) {
        const s = e && e.getAttribute("data-js-title-cssclass-expanded")
          , i = e && e.getAttribute("data-js-title-cssclass-collapsed");
        s && s.split(" ").forEach(s => {
            e.classList.toggle(s, t)
        }
        ),
        i && i.split(" ").forEach(s => {
            e.classList.toggle(s, !t)
        }
        )
    }
    updateContainersHeight(t, e, s) {
        t.style.maxHeight = null;
        const i = t.scrollHeight + 1;
        t.style.maxHeight = "true" !== t.getAttribute("aria-hidden") ? `${i}px` : "0",
        t.setAttribute("data-js-scroll-height", i),
        e && l(t, () => {
            let o = Number(e.getAttribute("data-js-scroll-height"));
            o || (o = e.scrollHeight);
            const a = s ? o + i : o - i;
            e.setAttribute("data-js-scroll-height", a),
            "true" !== t.getAttribute("aria-hidden") && (e.style.maxHeight = `${a}px`)
        }
        )
    }
    onAccordionUpdate() {
        this.selectors.containers.forEach(t => {
            const e = t.closest(this.dataSelector.item);
            "false" === t.getAttribute("aria-hidden") && this.updateContainersHeight(t, e, !0)
        }
        )
    }
    onComponentReady(t) {
        const {target: e} = t
          , s = e.closest(this.dataSelector.container);
        if (!s.closest(this.dataSelector.item).classList.contains(this.options.classNames.expanded))
            return;
        const i = s.parentNode.closest(this.dataSelector.container);
        s.removeAttribute("data-js-scroll-height"),
        i && i.removeAttribute("data-js-scroll-height"),
        this.updateContainersHeight(s, i, !0)
    }
    onAccordionOpen(t) {
        if (this.state.destroy)
            return;
        const {expandedItems: e} = t.detail;
        this.open(e)
    }
    onAccordionClose() {
        this.state.activeItems.forEach(t => {
            this.close(t)
        }
        )
    }
    close(t) {
        const e = t.querySelector(this.dataSelector.container);
        this.updateAccordionItem(t, !1),
        this.state.activeItems = this.state.activeItems.filter(e => e !== t),
        this.setAccessibility(e),
        i("accordion.closed", t, {
            bubbles: !0,
            item: t
        })
    }
    initMutationObserver(t) {
        const e = new MutationObserver(this.onMutation.bind(t));
        e.observe(t, this.options.mutationObserverOptions),
        this.mutationObservers.push(e)
    }
    onMutation() {
        this.style.maxHeight = null,
        this.style.maxHeight = "true" !== this.getAttribute("aria-hidden") ? `${this.scrollHeight}px` : "0",
        this.setAttribute("data-js-scroll-height", this.scrollHeight)
    }
    destroy() {
        this.options.isDynamicContent && this.mutationObservers.forEach(t => {
            t.disconnect()
        }
        ),
        o("component.ready lazyloaded", this.selectors.containers),
        o("accordion.open", this.element),
        o("accordion.close", this.element),
        o("accordion.update", this.element),
        this.options.accordionHashID && o(`hashchange.accordion-${this.id}`, window),
        o(this.selectors.containers),
        o(this.element)
    }
}
export {p as default};
