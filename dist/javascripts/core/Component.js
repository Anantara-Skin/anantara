import { Event as t } from "../services/EventEmitter.js";
import { getResources as e, fetchContent as i } from "../services/Resources.js";
import { deepMerge as n } from "../toolbox/deepMerge.js";
import { mediaQuery as s } from "../toolbox/mediaQuery.js";
import o from "./libs/actions.js";
import {
  on as r,
  off as a,
  trigger as h,
  once as l,
} from "../toolbox/event.js";
import d from "../services/DataLayer.js";
class c {
  constructor(e, i = {}, n) {
    if (!e)
      throw new Error("Your Class has to be instantiated with an HTMLElement");
    (this.element = e),
      (this.name = this._getConstructorName()),
      (this.selectors = {}),
      (this.state = { isReloading: !1 }),
      (this.analytics = {}),
      this._initAnalytics(),
      (this.id = this._createId()),
      (this._defaultOptions = {
        templateName: null,
        template: null,
        _resizable: !1,
        _scrollable: !1,
        _lazyload: !1,
        breakpoints: null,
        isMediaChange: !1,
        reloadData: null,
      }),
      (this._context = this.element.getAttribute("data-component-context")),
      (this._frozen = !1),
      (this._store = null),
      (this._initialOptions = Object.assign({}, this._defaultOptions, i)),
      this.setOptions(this._initialOptions),
      this.options._resizable && t.on("page.resized", this.onResize, this),
      this.options._scrollable && t.on("page.scrolled", this.onScroll, this),
      this._initStore(n),
      (this._context || i.breakpoints || i.isMediaChange) &&
        t.on("mediaQuery.changed", this._onMediaQueryChange, this),
      this._initActions(),
      this.initCache(),
      this.initState(),
      this._bindEvents(),
      this.afterInit(),
      this.options._lazyload && this.reload();
  }
  _getConstructorName() {
    return (
      this.constructor.name ||
      this.constructor
        .toString()
        .split("(")[0]
        .replace(/function\s*/, "")
    );
  }
  _initStore(t) {
    t &&
      ((this.storeUpdated = this.storeUpdated || function () {}),
      (this._store = t.on("@changed", this.storeUpdated.bind(this))),
      setTimeout(() => {
        if ("function" == typeof this.data) {
          const e = this.data();
          e && t.dispatch("update", e);
        }
      }, 200));
  }
  _initAnalytics() {
    const e = this.element.getAttribute("data-analytics");
    let i;
    if (e)
      try {
        i = JSON.parse(e);
      } catch (t) {
        window.lora.debug &&
          console.error(
            `Please check that the data-analytics you have passed for "${this.element}" respect JSON format`,
          );
      }
    i &&
      (Object.keys(i).length && (this.analytics = i),
      i.afterInit &&
        i.afterInit.length &&
        (i.afterInit.forEach((e) => {
          this.sendAnalytics
            ? this.sendAnalytics(e)
            : t.emit("analytics.event", e);
        }),
        delete i.afterInit));
  }
  _initActions() {
    Array.from(this.element.querySelectorAll("[data-action]")).forEach(
      o.register.bind(this),
    );
  }
  _createId() {
    return `${this.name}_${Math.random().toString(36).substring(2, 16)}`;
  }
  _replaceElement(e) {
    let i = null;
    if (
      this.options._lazyload &&
      "" === e.replace(/<!--[\s\S]*?-->/g, "").trim()
    )
      this.element.remove();
    else {
      const n = document.createElement("div");
      (n.innerHTML = e),
        (i = n.querySelector("[data-component]")),
        i &&
          (t.emit("registry.registerElement", i), this.element.replaceWith(i));
    }
    return i;
  }
  setOptions(t, e) {
    if (t)
      if ((e && (this.options = {}), t.breakpoints)) {
        const e = this.getCurrentViewportOptions(t.breakpoints);
        (this.options = Object.assign({}, this.options, t)),
          e && (this.options = n(this.options, e));
      } else this.options = Object.assign({}, this.options, t);
  }
  getCurrentViewportOptions(t) {
    let e;
    return (
      Object.entries(t).some(([t, i]) => {
        const n = s.is(t);
        return n && (e = i), n;
      }),
      e
    );
  }
  afterInit() {}
  initCache() {}
  initState() {}
  bindEvents() {}
  initLoad() {}
  onGlobalUpdate(t) {
    this.updateComponent(t);
  }
  updateComponent(e) {
    if (
      this.options &&
      e &&
      "object" == typeof e &&
      this.options.dataModelId in e
    )
      if ("object" == typeof e[this.options.dataModelId])
        this.render(e[this.options.dataModelId]);
      else {
        const i = document
          .createRange()
          .createContextualFragment(e[this.options.dataModelId]);
        i.querySelector("[data-component]") &&
          t.emit("registry.registerChildren", i),
          this.element.replaceWith(i);
      }
  }
  _bindEvents() {
    r("component.validate", this.element, this.onComponentValidate.bind(this)),
      this.options.dataModelId &&
        t.on("global.update", this.onGlobalUpdate.bind(this)),
      this.options.transferredEvents &&
        Object.keys(this.options.transferredEvents).forEach((t) => {
          r(t, this.element, this.onTransferredEventHandler.bind(this));
        }, this),
      this.bindEvents();
  }
  _reInit() {
    this._initActions(),
      this.initCache(),
      this.initState(),
      this._bindEvents(),
      this.afterInit(),
      window.lora.debug &&
        console.info(
          "%c Reinit frozen component: ",
          "color: Orange",
          this.element,
        );
  }
  render(e, i = {}) {
    const n = i.element || this.element;
    return e && "object" == typeof e
      ? import("../services/Template.js")
          .then((t) =>
            t.loadTemplate({
              templateName: i.templateName || this.options.templateName,
              template: e.template || this.options.template,
              data: e,
              isPlainHTML: i.isPlainHTML,
            }),
          )
          .then((e) => {
            if (i.replaceChildren)
              if (i.isPlainHTML)
                i.isAppend || (n.innerHTML = ""),
                  (n.innerHTML += e),
                  t.emit("registry.registerChildren", n);
              else {
                const t = document.createDocumentFragment();
                t.appendChild(e),
                  i.isAppend || (n.innerHTML = ""),
                  n.appendChild(t);
              }
            else n.replaceWith(e);
            return e;
          })
      : Promise.reject(new Error("Render needs to be called with an object"));
  }
  reload(t = {}) {
    if (this.state.isReloading) return Promise.resolve();
    if (((this.state.isReloading = !0), !this.options.reloadData))
      throw new Error(
        "Reload a component works only if you set the reloadData options for the component",
      );
    if (
      ((t = Object.assign(this.options.reloadData, t)),
      !this.options.reloadData.id || !this.options.reloadData.section)
    )
      throw new Error(
        "ReloadData is missing section and id property that are mandatory",
      );
    return e()
      .then(i.bind(this, t))
      .then(this.onReload.bind(this))
      .then((t) => ((this.state.isReloading = !1), t))
      .catch(this.onReloadFailed.bind(this));
  }
  onReload(t) {
    return "html" === t.dataType && this._replaceElement(t.content), t.content;
  }
  onReloadFailed(t) {
    return t;
  }
  _onMediaQueryChange() {
    if (
      (this._initialOptions &&
        this._initialOptions.breakpoints &&
        this.setOptions(this._initialOptions, !0),
      this._context)
    ) {
      const t = s.is(this._context);
      this._frozen && t
        ? ((this._frozen = !1), this._destroy(), this._reInit())
        : t ||
          (window.lora.debug &&
            console.info(
              "%c Component frozen: ",
              "color: #5a65ab; font-weight:bold",
              this.element,
            ),
          (this._frozen = !0),
          this.destroy());
    }
    this.onMediaQueryChange();
  }
  onMediaQueryChange() {}
  onResize() {
    throw new Error("Override this function to have resizable components");
  }
  onScroll() {
    throw new Error("Override this function to have scrollable components");
  }
  _destroy() {
    a("component.validate", this.element),
      this.options._resizable &&
        t.removeListener("page.resized", this.onResize, this),
      this.options._scrollable &&
        t.removeListener("page.scrolled", this.onScroll, this),
      (this.options.breakpoints || this.options.isMediaChange) &&
        t.removeListener("mediaQuery.changed", this._onMediaQueryChange, this),
      this.options.dataModelId &&
        t.removeListener("global.update", this.onGlobalUpdate, this),
      "function" == typeof this._store && this._store(),
      this.options.transferredEvents &&
        Object.keys(this.options.transferredEvents).forEach((t) => {
          a(t, this.element);
        }),
      this.destroy();
  }
  onComponentValidate(t) {
    "function" == typeof t && t({ isValid: !0 });
  }
  destroy() {}
  onTransferredEventHandler(e) {
    const { type: i } = e,
      { transferredEvents: n } = this.options,
      s = n && i && n[i];
    s &&
      s.length &&
      s.forEach((n) => {
        this.element.querySelectorAll(n).forEach((n) => {
          const s = e.detail || {};
          (s.bubbles = !1),
            n.hasAttribute("data-component") &&
              (n.hasAttribute("data-component-id")
                ? h(i, n, s)
                : (t.emit("registry.registerElement", n),
                  l("component.ready", n, () => {
                    h(i, n, s);
                  })));
        });
      });
  }
  getComponentConsentGroups() {
    if (!this.options.consentId || !window.OnetrustActiveGroups) return [];
    return (d.get("consentGroups") || {})[this.options.consentId] || [];
  }
  isComponentConsentGiven() {
    if (!window.OnetrustActiveGroups) return !0;
    const t = this.getComponentConsentGroups();
    return (
      0 === t.length || t.every((t) => window.OnetrustActiveGroups.includes(t))
    );
  }
  showConsentNotification() {
    e().then((e) => {
      if (this.options.isOverlayConsent && e.content.INLINE_CONSENT) {
        const i = document.createElement("div");
        i.setAttribute("data-js-inline-consent", ""),
          i.classList.add(
            "h-bgcolor-element-background",
            "h-position-absolute",
            "h-padding-3",
          ),
          (i.innerHTML = e.content.INLINE_CONSENT),
          this.element.appendChild(i);
        const n = this.element.getBoundingClientRect().height,
          s = this.element.querySelector("[data-js-inline-consent]"),
          o = s.getBoundingClientRect().height;
        (s.style.cssText = "z-index: 1; width: 100%; height: 100%;"),
          (this.element.style.cssText = "position: relative;"),
          n < o && (this.element.style.minHeight = `${o}px`),
          t.emit("registry.registerChildren", i);
      } else
        e.content.CONSENT &&
          t.emit("snackbar.notify", {
            content: e.content.CONSENT,
            interactive: !0,
          });
    });
  }
}
export { c as default };
