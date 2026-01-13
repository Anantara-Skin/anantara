import e from "../../core/Component.js";
import { Event as t } from "../../services/EventEmitter.js";
import { on as s, trigger as o, off as i } from "../../toolbox/event.js";
import { animate as n } from "../../toolbox/animate.js";
import { deepMerge as a } from "../../toolbox/deepMerge.js";
import { mix as r } from "../../core/mixwith.js";
import c from "../../core/ComponentRegistry.js";
import l from "../../mixins/Accessibility.js";
import { isKeyboardLikeClick as h } from "../../toolbox/device.js";
class m extends r(e).with(l) {
  constructor(e, t = {}) {
    super(
      e,
      a(
        {
          contentPosition: "",
          expandActiveAccordionItem: !1,
          reloadData: { section: "common", id: "hamburger" },
        },
        t
      )
    );
  }
  initCache() {
    (this.classes = {
      active: "m-active",
      opened: "m-opened",
      openAnimationRight: "h-right-slide-in",
      closeAnimationRight: "h-right-slide-out",
      openAnimationLeft: "h-left-slide-in",
      closeAnimationLeft: "h-left-slide-out",
      menuSubmenuActive: "m-menu-submenu-active",
      hamburgerOpened: "m-over-modal",
    }),
      "left" === this.options.contentPosition
        ? ((this.animationOpen = this.classes.openAnimationLeft),
          (this.animationClose = this.classes.closeAnimationLeft))
        : ((this.animationOpen = this.classes.openAnimationRight),
          (this.animationClose = this.classes.closeAnimationRight)),
      (this.selectors.button = this.element.querySelector(
        "[data-js-hamburger-button]"
      )),
      (this.selectors.content = this.element.querySelector(
        "[data-js-hamburger-content]"
      )),
      (this.selectors.navigationAccordion = this.element.querySelectorAll(
        "[data-js-navigation-accordion]"
      )),
      (this.selectors.headerAreaWrapper = this.element.closest(
        "[data-js-header-area-wrapper]"
      )),
      (this.selectors.headerMobileNavigation = this.element.closest(
        "[data-js-header-mobile-navigation]"
      ));
  }
  initState() {
    (this.state.active = !1),
      (this.state.contentScrollPosition = 0),
      (this.state.isKeyboardControl = !1),
      (this.state.headerOffsetPosition = 0),
      (this.state.isAccordionExpanded = !1);
  }
  bindEvents() {
    s("click", this.selectors.button, this.onClick.bind(this)),
      s("keydown", this.element, this.onKeyboardControl.bind(this)),
      s("mousedown", this.element, this.handleMousedown.bind(this)),
      t.on("hamburger.menu.close", this.onHamburgerClose, this),
      t.on("hamburger.submenu.toggle", this.toggleSubMenu, this),
      t.on("login.success", this.loginRegistrationSuccess, this),
      t.on("registration.success", this.loginRegistrationSuccess, this),
      t.on("global.close", this.onGlobalClose, this),
      this.options.expandActiveAccordionItem &&
        s(
          "accordion.initialised",
          this.element,
          this.onAccordionInitialised.bind(this)
        );
  }
  onAccordionInitialised(e) {
    const t = e.target;
    this.state.isAccordionExpanded || this.expandActiveAccordionItem(t);
  }
  expandActiveAccordionItem(e) {
    if (!this.options.expandActiveAccordionItem) return;
    const t = (e = e || this.element).querySelectorAll(
        "[data-js-accordion-item] a.c-navigation__link"
      ),
      s = window.location.href;
    Array.from(t).some((e) => {
      if (e.href === s) {
        let t = [],
          s = e.parentElement;
        for (; s; )
          s.hasAttribute("data-js-accordion-item") && t.push(s),
            (s = s.parentElement);
        (t = t.reverse()),
          t.forEach((e) => {
            this.openAccordionItem(e);
          }),
          (this.state.isAccordionExpanded = !0),
          (this.state.accordionItemsToExpand = t);
      }
      return this.state.isAccordionExpanded;
    });
  }
  openAccordionItem(e) {
    const t = e.closest('[data-component="/dist/javascripts/components/global/Accordion.js"]');
    t &&
      c.afterRegistered(t).then(() => {
        const s = c.getComponent(t);
        s && s.open([e]);
      });
  }
  onClick(e) {
    e && h(e) && (this.state.isKeyboardControl = !0),
      this.toggleHamburger.call(this);
  }
  handleMousedown() {
    this.state.isKeyboardControl && (this.state.isKeyboardControl = !1);
  }
  onKeyboardControl(e) {
    switch (e.key) {
      case "Tab":
        this.onTabKeyDown(e);
        break;
      case "Enter":
      case " ":
        this.state.isKeyboardControl = !0;
        break;
      case "Escape":
        this.element.classList.contains(this.classes.menuSubmenuActive)
          ? t.emit("hamburgermenu.close")
          : this.close(),
          this.selectors.button.focus();
    }
  }
  onTabKeyDown(e) {
    this.state.active &&
      (e.shiftKey ||
        "last" !== e.target.getAttribute("data-js-focus-order") ||
        (e.preventDefault(), this.selectors.button.focus()),
      e.shiftKey &&
        e.target === this.selectors.button &&
        (e.preventDefault(),
        this.element.querySelector('[data-js-focus-order="last"]').focus()));
  }
  onHamburgerClose() {
    this.close();
  }
  onGlobalClose() {
    this.close(!0);
  }
  toggleHamburger() {
    this.state.active ? this.close() : this.open();
  }
  open() {
    if (
      (t.emit("global.close"),
      this.state.accordionItemsToExpand &&
        this.state.accordionItemsToExpand.forEach((e) => {
          this.openAccordionItem(e);
        }),
      (document.documentElement.style.overflow = "hidden"),
      t.emit("hamburger.toggle", !0),
      t.emit("overlay.open"),
      t.emit("analytics.event", {
        category: "burger menu",
        action: "display::menu",
        label: "picto",
        extraData: { event_name: "burger_menu_click", click_action: "open" },
      }),
      (this.state.active = !0),
      t.once("overlay.close.before", this.close, this),
      this.selectors.button.setAttribute("aria-expanded", !0),
      this.element.setAttribute("role", "dialog"),
      this.element.setAttribute("aria-modal", "true"),
      this.element.classList.add(this.classes.active),
      this.element.classList.add(this.classes.opened),
      this.selectors.headerMobileNavigation &&
        this.selectors.headerMobileNavigation.classList.add(
          this.classes.hamburgerOpened
        ),
      this.selectors.headerAreaWrapper)
    ) {
      const e = this.selectors.headerAreaWrapper.getBoundingClientRect(),
        t = "bottom" === this.options.headerPosition ? e.height : e.bottom;
      this.state.headerOffsetPosition !== t &&
        ((this.state.headerOffsetPosition = t),
        (this.selectors.content.style[
          "bottom" === this.options.headerPosition ? "bottom" : "top"
        ] = `${this.state.headerOffsetPosition}px`));
    }
    n(this.animationOpen, this.selectors.content).then(() => {
      this.setFocusedOrder(this.element),
        this.state.isKeyboardControl &&
          (this.selectors.button.blur(),
          setTimeout(() => {
            this.element.querySelector('[data-js-focus-order="first"]').focus();
          }, 0));
    });
  }
  close(e = !1) {
    if (!this.state.active) return;
    (this.state.active = !1),
      t.emit("hamburger.toggle", !1),
      t.emit("overlay.close"),
      t.emit("hamburgermenu.close"),
      t.emit("analytics.event", {
        category: "burger menu",
        action: "display::menu",
        label: "picto",
        extraData: { event_name: "burger_menu_click", click_action: "close" },
      }),
      this.selectors.navigationAccordion &&
        this.selectors.navigationAccordion.forEach((e) => {
          o("accordion.close", e);
        }),
      this.selectors.headerMobileNavigation &&
        this.selectors.headerMobileNavigation.classList.remove(
          this.classes.hamburgerOpened
        ),
      this.selectors.button.setAttribute("aria-expanded", !1),
      this.element.removeAttribute("aria-modal"),
      this.element.removeAttribute("role", "dialog"),
      this.element.classList.remove(this.classes.active);
    const s = () => {
      this.element.classList.remove(this.classes.opened);
    };
    (document.documentElement.style.overflow = ""),
      this.resetFocusedOrder(this.element),
      e ? s() : n(this.animationClose, this.selectors.content).then(s);
  }
  toggleSubMenu(e) {
    e
      ? (this.resetFocusedOrder(this.element),
        (this.state.contentScrollPosition = this.selectors.content.scrollTop),
        (this.selectors.content.scrollTop = 0),
        this.element.classList.add(this.classes.menuSubmenuActive))
      : ((this.selectors.content.scrollTop = this.state.contentScrollPosition),
        this.element.classList.remove(this.classes.menuSubmenuActive),
        this.setFocusedOrder(this.element));
  }
  loginRegistrationSuccess() {
    this.reload();
  }
  destroy() {
    i(this.selectors.button),
      i(this.element),
      t.removeListener("hamburger.menu.close", this.onHamburgerClose, this),
      t.removeListener("hamburger.submenu.toggle", this.toggleSubMenu, this),
      t.removeListener("login.success", this.loginRegistrationSuccess, this),
      t.removeListener(
        "registration.success",
        this.loginRegistrationSuccess,
        this
      ),
      t.removeListener("global.close", this.onGlobalClose, this);
  }
}
export { m as default };
