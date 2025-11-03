(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "components/global/PopOver",
      "services/EventEmitter",
      "toolbox/event",
      "services/Resources",
      "toolbox/cookie",
      "toolbox/deepMerge",
    ],
    function (a) {
      "use strict";
      function ownKeys(a, b) {
        var c = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(a);
          b &&
            (d = d.filter(function (b) {
              return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })),
            c.push.apply(c, d);
        }
        return c;
      }
      function _objectSpread(a) {
        for (var b, c = 1; c < arguments.length; c++)
          (b = null == arguments[c] ? {} : arguments[c]),
            c % 2
              ? ownKeys(Object(b), !0).forEach(function (c) {
                  _defineProperty(a, c, b[c]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    a,
                    Object.getOwnPropertyDescriptors(b),
                  )
                : ownKeys(Object(b)).forEach(function (c) {
                    Object.defineProperty(
                      a,
                      c,
                      Object.getOwnPropertyDescriptor(b, c),
                    );
                  });
        return a;
      }
      function _defineProperty(a, b, c) {
        return (
          (b = _toPropertyKey(b)) in a
            ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[b] = c),
          a
        );
      }
      function _toPropertyKey(a) {
        var b = _toPrimitive(a, "string");
        return "symbol" == typeof b ? b : b + "";
      }
      function _toPrimitive(a, b) {
        if ("object" != typeof a || !a) return a;
        var c = a[Symbol.toPrimitive];
        if (void 0 !== c) {
          var d = c.call(a, b || "default");
          if ("object" != typeof d) return d;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === b ? String : Number)(a);
      }
      var b, c, d, e, f, g, h, i, j;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              c = a.Event;
            },
            function (a) {
              (d = a.on), (e = a.off);
            },
            function (a) {
              (f = a.getResources), (g = a.fetchContent);
            },
            function (a) {
              h = a.cookie;
            },
            function (a) {
              i = a.deepMerge;
            },
          ],
          execute: function () {
            a(
              "default",
              (j = class extends b {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    i(
                      {
                        cookieReminder: "cookie-reminder",
                        text: null,
                        headerAttachment: !1,
                        verifyActualityRequestData: null,
                        tooltipDisplayDurationSec: 10,
                        enableRuntimeReminderTooltip: !1,
                        reminderTooltipIntervalMin: 0,
                        reminderAnalytics: null,
                        showContentForSticky: !1,
                        showOnClick: !0,
                        strategy: "absolute",
                        width: 200,
                        alternativeTargetIfInvisible: null,
                        isMediaChange: !0,
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  super.initCache(), this.setToolTipTarget();
                }
                afterInit() {
                  super.afterInit(), this.setTooltipReminder();
                }
                bindEvents() {
                  super.bindEvents(),
                    this.options.headerAttachment &&
                      (c.on("header.updateHeight", this.onHeaderUpdate, this),
                      this.options.showContentForSticky &&
                        c.on(
                          "header.sticky.enabled",
                          this.onHeaderStickyEnabled,
                          this,
                        ),
                      c.on(
                        "header.sticky.disabled",
                        this.onHeaderStickyDisabled,
                        this,
                      )),
                    c.on("modal.open", this.hideTooltip, this),
                    c.on("remindertooltip.hidetooltip", this.hideTooltip, this),
                    c.on(
                      "remindertooltip.update",
                      this.onReminderTooltipUpdate.bind(this),
                    ),
                    d(
                      "click.remindertooltip",
                      this.selectors.tooltipClose,
                      this.onTooltipCloseClick.bind(this),
                    );
                }
                onKeyboardControl(a) {
                  const { target: b } = this.selectors,
                    c = b && b.matches("[data-js-reminder-tooltip-once]");
                  (!this.contentReadyToShow && c) || super.onKeyboardControl(a);
                }
                onMediaQueryChange() {
                  this.setToolTipTarget(),
                    this.contentReadyToShow && this.showTooltip();
                }
                setToolTipTarget() {
                  this.selectors.target = this.element.closest(
                    "[data-js-reminder-tooltip-target]",
                  );
                  const a = this.isElementVisible(this.selectors.target);
                  this.options.alternativeTargetIfInvisible &&
                    !a &&
                    (this.selectors.target = document.querySelector(
                      this.options.alternativeTargetIfInvisible,
                    ));
                }
                setTooltipReminder() {
                  if (
                    ((this.tooltipReminderDateTime = h.getCookie(
                      this.options.cookieReminder,
                    )),
                    this.tooltipReminderDateTime)
                  ) {
                    this.tooltipReminderDateTime = parseInt(
                      this.tooltipReminderDateTime,
                      10,
                    );
                    const a = new Date().getTime(),
                      b = this.tooltipReminderDateTime - a;
                    0 >= b
                      ? this.processTooltipReminder(!0)
                      : this.options.enableRuntimeReminderTooltip &&
                        (this.tooltipReminderTimerId = setTimeout(
                          () => this.processTooltipReminder(),
                          b + 1e3,
                        ));
                  }
                }
                processTooltipReminder(a) {
                  this.tooltipReminderTimerId &&
                    clearTimeout(this.tooltipReminderTimerId);
                  const { reminderTooltipIntervalMin: b } = this.options;
                  if (!b)
                    h.setCookie(
                      this.options.cookieReminder,
                      this.tooltipReminderDateTime,
                      -1,
                    );
                  else {
                    const a = new Date();
                    a.setMinutes(a.getMinutes() + b),
                      h.setCookie(this.options.cookieReminder, a.getTime(), 3),
                      this.options.enableRuntimeReminderTooltip &&
                        (this.tooltipReminderTimerId = setTimeout(
                          () => this.processTooltipReminder(),
                          6e4 * b,
                        ));
                  }
                  if (a) this.showTooltip();
                  else if (this.options.verifyActualityRequestData) {
                    const a = Object.assign(
                      {},
                      this.options.verifyActualityRequestData,
                    );
                    (a.dataType = "json"),
                      f()
                        .then(g.bind(this, a))
                        .then(this.onTooltipReminderSync.bind(this))
                        .then(this.showTooltip.bind(this));
                  }
                }
                onTooltipReminderSync(a) {
                  if (!a || !a.content || !a.content.remindTooltip)
                    throw new Error();
                }
                showTooltip() {
                  c.emit("remindertooltip.hidetooltip"),
                    this.showContent(!0),
                    (this.contentReadyToShow = !0);
                }
                showContent(a) {
                  a ? this.showCloseButton() : this.hideCloseButton();
                  const b = this.isElementVisible(this.selectors.target);
                  b &&
                    (super.showContent(),
                    c.emit(
                      "registry.registerChildren",
                      this.selectors.tooltipBody,
                    ),
                    this.options.reminderAnalytics &&
                      c.emit("analytics.event", this.options.reminderAnalytics),
                    this.options.tooltipDisplayDurationSec &&
                      !this.tooltipDisplayDurationTimerId &&
                      (this.tooltipDisplayDurationTimerId = setTimeout(() => {
                        this.hideTooltip();
                      }, 1e3 * this.options.tooltipDisplayDurationSec)));
                }
                hideContent() {
                  super.hideContent(),
                    this.tooltipDisplayDurationTimerId &&
                      (clearTimeout(this.tooltipDisplayDurationTimerId),
                      (this.tooltipDisplayDurationTimerId = null));
                }
                hideTooltip() {
                  this.hideContent(), (this.contentReadyToShow = !1);
                }
                onHeaderStickyEnabled() {
                  this.setPopperStrategy("fixed");
                }
                onHeaderStickyDisabled() {
                  this.options.showContentForSticky
                    ? this.setPopperStrategy("absolute")
                    : this.contentReadyToShow &&
                      setTimeout(() => {
                        this.showContent(!0);
                      }, 300);
                }
                setPopperStrategy(a) {
                  this.options &&
                    ((this.options.strategy = a),
                    this.popperInstance &&
                      this.popperInstance.setOptions((a) =>
                        _objectSpread(
                          _objectSpread({}, a),
                          {},
                          { strategy: this.options.strategy },
                        ),
                      ));
                }
                isElementVisible(a) {
                  if (!a) return !1;
                  const b = window.getComputedStyle(a);
                  if ("none" === b.display || "hidden" === b.visibility)
                    return !1;
                  for (let b = a.parentElement; b; ) {
                    const a = window.getComputedStyle(b);
                    if ("none" === a.display || "hidden" === a.visibility)
                      return !1;
                    b = b.parentElement;
                  }
                  return !0;
                }
                onHeaderUpdate(a) {
                  this.contentReadyToShow &&
                    ((this.options.showContentForSticky || !a.isSticky) &&
                    0 < a.height
                      ? setTimeout(() => {
                          this.showContent(!0);
                        }, 300)
                      : this.hideContent());
                }
                onTooltipCloseClick() {
                  (this.contentReadyToShow = !1), super.onTooltipCloseClick();
                }
                onClick() {
                  this.state.isFocusDisabled = !0;
                }
                onContentMouseLeave() {
                  (this.contentReadyToShow = !1), super.onContentMouseLeave();
                }
                onReminderTooltipUpdate() {
                  this.updatePopper();
                }
                destroy() {
                  super.destroy(),
                    this.options.headerAttachment &&
                      (c.removeListener(
                        "header.updateHeight",
                        this.onHeaderUpdate,
                        this,
                      ),
                      this.options.showContentForSticky &&
                        c.removeListener(
                          "header.sticky.enabled",
                          this.onHeaderStickyEnabled,
                          this,
                        ),
                      c.removeListener(
                        "header.sticky.disabled",
                        this.onHeaderStickyDisabled,
                        this,
                      )),
                    this.tooltipReminderTimerId &&
                      clearTimeout(this.tooltipReminderTimerId),
                    this.tooltipDisplayDurationTimerId &&
                      clearTimeout(this.tooltipDisplayDurationTimerId),
                    c.off("modal.open", this.hideTooltip, this),
                    c.removeListener(
                      "remindertooltip.hidetooltip",
                      this.hideTooltip,
                      this,
                    ),
                    c.off(
                      "remindertooltip.update",
                      this.onReminderTooltipUpdate,
                      this,
                    ),
                    e("click.remindertooltip", this.selectors.tooltipClose);
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=ReminderToolTip.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/global/ReminderToolTip.js
