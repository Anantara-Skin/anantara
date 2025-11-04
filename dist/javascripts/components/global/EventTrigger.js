(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "core/mixwith",
      "services/EventEmitter",
      "toolbox/event",
      "toolbox/deepMerge",
      "mixins/Analytics",
      "mixins/Accessibility",
      "mixins/StickyOnScroll",
      "mixins/EventCatcher",
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
              c = a.mix;
            },
            function (a) {
              d = a.Event;
            },
            function (a) {
              (e = a.on), (f = a.off), (g = a.trigger);
            },
            function (a) {
              h = a.deepMerge;
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
              l = a.default;
            },
          ],
          execute: function () {
            a(
              "default",
              (m = class extends c(b).with(i, j, l, k) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    h(
                      {
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
                        updateEvent: null,
                      },
                      b,
                      { arrayMerge: (a, b) => b },
                    ),
                  );
                }
                bindEvents() {
                  super.bindEvents(),
                    e(
                      this.options.trigger,
                      this.element,
                      this.onTriggerEvent.bind(this),
                    ),
                    0 < this.options.keyTriggerCode.length &&
                      e("keydown", this.element, this.onKeyDown.bind(this)),
                    this.options.isCustomReloadEvent
                      ? d.on(
                          this.options.reloadEvent,
                          this.onCustomReloadEvent,
                          this,
                        )
                      : this.options.reloadEvent &&
                        this.options.reloadData &&
                        e(
                          this.options.reloadEvent,
                          this.element,
                          this.onReloadEvent.bind(this),
                        ),
                    this.options.updateEvent &&
                      e(
                        this.options.updateEvent,
                        this.element,
                        this.onUpdateEvent.bind(this),
                      );
                }
                onTrigger(a) {
                  const b = this.getTargetElement(a.target);
                  if (b) {
                    this.options.trackFocusedElements &&
                      this.saveLastFocusState(),
                      this.options.event &&
                        (this.options.afterOpenEventName &&
                          this.options.data &&
                          this.options.data.options &&
                          (this.options.data.options.afterOpen = () => {
                            d.emit(this.options.afterOpenEventName);
                          }),
                        this.options.isLocalEvent
                          ? g(
                              this.options.event,
                              this.element,
                              this.options.data,
                            )
                          : d.emit(this.options.event, this.options.data)),
                      this.options.skipPreventDefault || a.preventDefault(),
                      this.options.stopPropagation && a.stopPropagation();
                    const { isDelegate: c } = this.options,
                      { analytics: e } = this;
                    setTimeout(() => {
                      let a;
                      c
                        ? (a = h(
                            e || {},
                            this.getAnalyticsAttributeData(b) || {},
                          ))
                        : e && (a = e),
                        this.sendAnalytics(a);
                    }, 0);
                  }
                }
                onTriggerEvent(a) {
                  const { confirmationModal: b } = this.options;
                  b
                    ? ((b.afterConfirm = this.onTrigger.bind(this, a)),
                      d.emit("modal.open", { type: "Confirm", options: b }))
                    : this.onTrigger(a);
                }
                afterInit() {
                  this.options.trackFocusedElements &&
                    this.restoreLastFocusState(),
                    this.options.skipEnablingAfterInit || this.enableElement(),
                    this.options.displayAnalytics &&
                      !this.options._lazyload &&
                      this.sendAnalytics(this.options.displayAnalytics),
                    this.analytics &&
                      this.analytics.dynamic &&
                      g("analytics.dynamic.update", this.element, {
                        bubbles: !0,
                        analytics: this.analytics.dynamic,
                      }),
                    this.options.triggerAfterInit &&
                      g(this.options.trigger, this.element, { cancelable: !0 });
                }
                enableElement() {
                  this.element.classList.remove("m-loading"),
                    this.element.removeAttribute("disabled");
                }
                onKeyDown(a) {
                  this.options.keyTriggerCode.includes(a.key) &&
                    this.onTrigger(a);
                }
                onReloadEvent(a) {
                  if (this.options.reloadDataValueKey) {
                    const b = a.detail[this.options.reloadDataValueKey];
                    void 0 !== b && this.reload({ data: b });
                  }
                }
                onCustomReloadEvent() {
                  this.reload();
                }
                getTargetElement(a) {
                  return this.options.isDelegate
                    ? a.closest("[data-js-trigger]")
                    : this.element;
                }
                onUpdateEvent(a) {
                  const b =
                    a.detail.data && a.detail.data[this.options.dataModelId];
                  b && this.render(b);
                }
                destroy() {
                  f(this.options.trigger, this.element),
                    0 < this.options.keyTriggerCode.length &&
                      f("keydown", this.element),
                    this.options.isCustomReloadEvent &&
                      d.off(
                        this.options.reloadEvent,
                        this.onCustomReloadEvent,
                        this,
                      ),
                    this.options.reloadEvent &&
                      this.options.reloadData &&
                      f(this.options.reloadEvent, this.element),
                    this.options.updateEvent &&
                      f(this.options.updateEvent, this.element),
                    super.destroy();
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=EventTrigger.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/global/EventTrigger.js
