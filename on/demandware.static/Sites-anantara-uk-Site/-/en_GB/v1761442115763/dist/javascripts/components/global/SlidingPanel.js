(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "toolbox/deepMerge",
      "services/EventEmitter",
      "toolbox/event",
      "toolbox/animate",
      "core/mixwith",
      "mixins/Accessibility",
      "mixins/Analytics",
      "mixins/Loader",
      "toolbox/ajax",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i, j, k, l, m;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              c = a.deepMerge;
            },
            function (a) {
              d = a.Event;
            },
            function (a) {
              (e = a.on), (f = a.off);
            },
            function (a) {
              g = a.animate;
            },
            function (a) {
              h = a.mix;
            },
            function (a) {
              i = a.default;
            },
            function (a) {
              j = a.default;
            },
            function (a) {
              k = a.default;
            },
            function (a) {
              l = a.ajax;
            },
          ],
          execute: function () {
            a(
              "default",
              (m = class extends h(b).with(i, k, j) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    c(
                      {
                        classNames: {
                          open: "h-slide-up-in",
                          close: "h-slide-up-out",
                        },
                        url: {},
                        overlay: {},
                        a11y: {
                          ariaLabelHide: "",
                          ariaLabelShow: "",
                          ariaLiveOpened: "",
                          ariaLiveClosed: "",
                        },
                        showOverlay: !0,
                        externalTriggerSelector: null,
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  (this.classNames = {
                    active: "m-active",
                    opened: "m-opened",
                  }),
                    (this.selectors.trigger = this.options
                      .externalTriggerSelector
                      ? document.querySelectorAll(
                          this.options.externalTriggerSelector,
                        )
                      : this.element.querySelector(
                          "[data-js-sliding-trigger]",
                        )),
                    (this.selectors.target = this.element.querySelector(
                      "[data-js-sliding-container]",
                    )),
                    (this.selectors.content = this.element.querySelector(
                      "[data-js-sliding-content]",
                    )),
                    (this.selectors.slidingAriaLive = document.querySelector(
                      "[data-js-sliding-aria-live]",
                    ));
                }
                initState() {
                  (this.state.isActive = !1), (this.state.analyticsSent = !1);
                }
                afterInit() {
                  this.selectors.target = document.body.appendChild(
                    this.selectors.target,
                  );
                }
                bindEvents() {
                  this.selectors.trigger &&
                    e(
                      "click",
                      this.selectors.trigger,
                      this.onTriggerClick.bind(this),
                    ),
                    e(
                      "keydown",
                      this.selectors.target,
                      this.onKeyboardControl.bind(this),
                    ),
                    e(
                      "click",
                      this.selectors.target,
                      this.onTargetClick.bind(this),
                    ),
                    d.on(
                      "overlay.close.before",
                      this.onBeforeOverlayClose,
                      this,
                    ),
                    d.on("slidingPanel.check.active", this.checkActive, this),
                    d.on("slidingPanel.close", this.onClose, this),
                    d.on("global.close", this.onClose, this);
                }
                checkActive() {
                  this.state.isActive && d.emit("modal.keep.overlay.open");
                }
                onKeyboardControl(a) {
                  switch (a.key) {
                    case "Tab":
                      this.onTabKey(a);
                      break;
                    case "Escape":
                      this.closePanel();
                      break;
                    default:
                  }
                }
                onTabKey(a) {
                  super.focusTrap(this.selectors.target, a);
                }
                onTriggerClick() {
                  this.togglePanel(),
                    this.analytics.onClick &&
                      !this.state.analyticsSent &&
                      (this.sendAnalytics(this.analytics.onClick),
                      (this.state.analyticsSent = !0));
                }
                onTargetClick(a) {
                  const { target: b } = a;
                  b.hasAttribute("data-js-sliding-close") && this.closePanel(),
                    setTimeout(() => {
                      if (
                        b.hasAttribute("data-analytics") &&
                        b.hasAttribute("data-send-analytics")
                      ) {
                        let a;
                        const c = b.getAttribute("data-analytics");
                        c && (a = JSON.parse(c)), this.sendAnalytics(a);
                      }
                    }, 0);
                }
                onClose() {
                  this.closePanel(!0);
                }
                closePanel() {
                  let a =
                    !!(0 < arguments.length && void 0 !== arguments[0]) &&
                    arguments[0];
                  this.state.isActive &&
                    (this.hide(a),
                    this.options.showOverlay && d.emit("overlay.close"));
                }
                sendAnalytics(a) {
                  a && d.emit("analytics.event", a);
                }
                togglePanel() {
                  this.state.isActive
                    ? (this.hide(),
                      this.options.showOverlay && d.emit("overlay.close"))
                    : this.show();
                }
                show(a) {
                  const { active: b } = this.state;
                  (this.state.isActive = !0),
                    b ||
                      (this.selectors.target.classList.add(
                        this.classNames.active,
                      ),
                      this.selectors.trigger &&
                        (this.options.externalTriggerSelector
                          ? this.selectors.trigger.forEach((a) => {
                              a.classList.add(this.classNames.active),
                                a.setAttribute("aria-expanded", "true"),
                                this.options.a11y.ariaLabelHide &&
                                  a.setAttribute(
                                    "aria-label",
                                    this.options.a11y.ariaLabelHide,
                                  );
                            })
                          : (this.selectors.trigger.classList.add(
                              this.classNames.active,
                            ),
                            this.selectors.trigger.setAttribute(
                              "aria-expanded",
                              "true",
                            ),
                            this.options.a11y.ariaLabelHide &&
                              this.selectors.trigger.setAttribute(
                                "aria-label",
                                this.options.a11y.ariaLabelHide,
                              ))),
                      a && a.suppressAnimation
                        ? this.selectors.target.classList.add(
                            this.classNames.opened,
                          )
                        : g(
                            this.options.classNames.open,
                            this.selectors.target,
                          ).then(() => {
                            this.selectors.target.classList.add(
                              this.classNames.opened,
                            );
                          })),
                    this.loadContent(a && a.url).then(() => {
                      this.selectors.slidingAriaLive &&
                        this.options.a11y.ariaLiveOpened &&
                        this.updateAria(
                          this.selectors.slidingAriaLive,
                          this.options.a11y.ariaLiveOpened,
                        ),
                        this.initModalPattern(this.selectors.target);
                    }),
                    setTimeout(() => {
                      this.handleOnShowAnalyticsAndEvents();
                    }, 0);
                }
                handleOnShowAnalyticsAndEvents() {
                  this.analytics &&
                    (this.analytics.virtualPage &&
                      this.updateVirtualPage(this.analytics.virtualPage),
                    this.sendAnalytics(this.analytics.panelOpen)),
                    this.options.showOverlay &&
                      d.emit("overlay.open", this.options.overlay),
                    d.emit("page.scroll.disabled", !0),
                    d.emit("slidingPanel.open.after", this);
                }
                hide() {
                  let a =
                    !!(0 < arguments.length && void 0 !== arguments[0]) &&
                    arguments[0];
                  d.emit("page.scroll.enabled", { isUnblockScrollForAll: !0 }),
                    (this.state.isActive = !1),
                    this.destroyModalPattern(),
                    this.selectors.slidingAriaLive &&
                      this.options.a11y.ariaLiveClosed &&
                      this.updateAria(
                        this.selectors.slidingAriaLive,
                        this.options.a11y.ariaLiveClosed,
                      );
                  const b = () => {
                    this.selectors.target.classList.remove(
                      this.classNames.opened,
                    ),
                      this.selectors.target.classList.remove(
                        this.classNames.active,
                      ),
                      this.selectors.trigger &&
                        (this.options.externalTriggerSelector
                          ? this.selectors.trigger.forEach((a) => {
                              a.classList.remove(this.classNames.active),
                                a.setAttribute("aria-expanded", "false"),
                                this.options.a11y.ariaLabelShow &&
                                  a.setAttribute(
                                    "aria-label",
                                    this.options.a11y.ariaLabelShow,
                                  );
                            })
                          : (this.selectors.trigger.classList.remove(
                              this.classNames.active,
                            ),
                            this.selectors.trigger.setAttribute(
                              "aria-expanded",
                              "false",
                            ),
                            this.options.a11y.ariaLabelShow &&
                              this.selectors.trigger.setAttribute(
                                "aria-label",
                                this.options.a11y.ariaLabelShow,
                              ))),
                      d.emit("slidingPanel.close.after", this);
                  };
                  return a
                    ? void b()
                    : void g(
                        this.options.classNames.close,
                        this.selectors.target,
                      ).then(b);
                }
                onBeforeOverlayClose() {
                  this.state.isActive && this.hide();
                }
                loadContent(a) {
                  return (a || this.options.url.content) &&
                    this.selectors.content
                    ? (this.addOverlayLoader(this.selectors.content, null, {
                        spinnerInContainer: !0,
                      }),
                      l(a || this.options.url.content)
                        .then(this.onContentLoaded.bind(this))
                        .catch((a) => {
                          this.setContent(a.message);
                        }))
                    : Promise.resolve();
                }
                onContentLoaded(a) {
                  this.selectors.content && this.setContent(a);
                }
                setContent(a) {
                  a &&
                    ((this.selectors.content.innerHTML = a),
                    (this.appendedScripts = []),
                    this.selectors.content
                      .querySelectorAll("script")
                      .forEach((a) => {
                        const b = document.createElement("script");
                        (b.text = a.innerHTML),
                          (b.async = a.async),
                          (b.defer = a.defer),
                          (b.type = a.type),
                          document.head.appendChild(b),
                          this.appendedScripts.push(b);
                      }),
                    d.emit(
                      "registry.registerChildren",
                      this.selectors.content,
                    ));
                }
                destroy() {
                  this.selectors.trigger && f("click", this.selectors.trigger),
                    f("click", this.selectors.target),
                    f("keydown", this.selectors.target),
                    d.removeListener(
                      "overlay.close.before",
                      this.onBeforeOverlayClose,
                      this,
                    ),
                    d.removeListener(
                      "slidingPanel.check.active",
                      this.checkActive,
                      this,
                    ),
                    d.removeListener("slidingPanel.close", this.onClose, this),
                    d.removeListener("global.close", this.onClose, this),
                    (this.appendedScripts || []).forEach((a) => {
                      document.head.removeChild(a);
                    }),
                    this.selectors.target.remove();
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=SlidingPanel.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/global/SlidingPanel.js
