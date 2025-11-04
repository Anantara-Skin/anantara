(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "components/global/ToolTip",
      "toolbox/event",
      "services/EventEmitter",
      "toolbox/ajax",
      "toolbox/debounce",
      "toolbox/deepMerge",
      "toolbox/device",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i, j, k;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              (c = a.on), (d = a.off), (e = a.trigger);
            },
            function (a) {
              f = a.Event;
            },
            function (a) {
              g = a.ajax;
            },
            function (a) {
              h = a.debounce;
            },
            function (a) {
              i = a.deepMerge;
            },
            function (a) {
              j = a.isTouchDevice;
            },
          ],
          execute: function () {
            a(
              "default",
              (k = class extends b {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    i(
                      {
                        contentUrl: null,
                        targetContent: null,
                        autoCloseTimeout: null,
                        showOnInit: !1,
                        showOnClick: !1,
                        enableAnalyticsOnShow: !1,
                      },
                      b,
                    ),
                  );
                }
                afterInit() {
                  super.afterInit(),
                    this.options.showOnInit && this.showContent();
                }
                initState() {
                  super.initState(),
                    (this.state.isContentHovered = !1),
                    (this.state.isContentLoaded = !1),
                    (this.state.wasContentShownOnce = !1),
                    (this.state.closeTimer = null),
                    (this.state.isElementHovered = !0);
                }
                bindEvents() {
                  super.bindEvents(),
                    c(
                      "popover.show",
                      this.selectors.target,
                      this.showContent.bind(this),
                    ),
                    j() ||
                      this.options.showOnClick ||
                      (c(
                        "mouseenter.popover".concat(this.id),
                        this.tooltip,
                        this.onContentMouseEnter.bind(this),
                      ),
                      c(
                        "mouseleave.popover".concat(this.id),
                        this.tooltip,
                        h(this.onContentMouseLeave.bind(this), 100),
                      )),
                    f.on("modal.open", this.close, this),
                    f.on("popover.hide.content", this.onPopoverHide, this);
                }
                onPopoverHide(a) {
                  this.element &&
                    this.element.getAttribute("data-component-id") === a &&
                    this.hideContent();
                }
                onClick(a) {
                  const b = this.selectors.target || a.target;
                  b.getAttribute("data-href") &&
                    this.state.isActive &&
                    (this.triggerAnalyticsOnClick(),
                    (window.location.href = b.getAttribute("data-href"))),
                    super.onClick(a);
                }
                onMouseEnter() {
                  (this.state.isElementHovered = !0),
                    this.state.closeTimer &&
                      (clearTimeout(this.state.closeTimer),
                      (this.state.closeTimer = null)),
                    super.onMouseEnter();
                }
                onMouseLeave() {
                  (this.state.isElementHovered = !1), super.onMouseLeave();
                }
                onContentMouseEnter() {
                  this.state.isContentHovered = !0;
                }
                onContentMouseLeave() {
                  this.close();
                }
                keyBoardActions(a, b) {
                  super.keyBoardActions(a, b);
                }
                triggerAnalytics() {
                  this.analytics &&
                    this.options.enableAnalyticsOnShow &&
                    !this.state.wasContentShownOnce &&
                    f.emit("analytics.event", this.analytics);
                }
                triggerAnalyticsOnClick() {
                  this.analytics &&
                    Object.keys(this.analytics).length &&
                    f.emit("analytics.event", this.analytics);
                }
                showContent(a) {
                  this.state.isActive ||
                    (a && (this.state.isContentLoaded = !1),
                    super.showContent(),
                    this.triggerAnalytics(),
                    (this.state.wasContentShownOnce = !0),
                    this.state.isContentLoaded ||
                      this.state.isLoading ||
                      (this.options.contentUrl
                        ? this.loadContent(this.options.contentUrl)
                        : this.options.targetContent &&
                          this.loadTargetContent()));
                }
                isContentValid() {
                  const {
                    text: a,
                    contentUrl: b,
                    targetContent: c,
                  } = this.options;
                  return a || b || c;
                }
                loadContent(a) {
                  return a
                    ? (this.addLoader(this.tooltip),
                      g(a)
                        .then(this.onLoadContent.bind(this))
                        .catch((a) => {
                          this.autoPosition && this.autoPosition.update(),
                            this.removeLoader(this.tooltip),
                            this.setContent(a.message),
                            this.autoClose();
                        }))
                    : Promise.reject(
                        new Error(
                          "Popover has to have a URL set in order to load content",
                        ),
                      );
                }
                loadTargetContent() {
                  if (!this.state.isContentLoaded) {
                    const a = document.querySelector(
                      this.options.targetContent,
                    );
                    a &&
                      ((this.state.isContentLoaded = !0),
                      this.setContent(a.innerHTML),
                      this.onContentUpdated(),
                      this.autoClose(),
                      a.parentNode.removeChild(a));
                  }
                }
                onLoadContent(a) {
                  (this.state.isContentLoaded = !0),
                    this.removeLoader(this.tooltip),
                    this.setContent(a),
                    this.onContentUpdated(),
                    this.autoClose(),
                    this.initAccessibility(),
                    e("tooltip.checkcomponent", this.element);
                }
                onContentUpdated() {
                  f.emit(
                    "registry.registerChildren",
                    this.selectors.tooltipContent,
                  );
                }
                hidePopOver() {
                  this.state.isElementHovered ||
                    this.state.isContentHovered ||
                    (this.state.isLoading && this.state.closeTimer) ||
                    this.hideContent();
                }
                close() {
                  (this.state.isContentHovered = !1),
                    this.options.autoCloseTimeout
                      ? this.autoClose()
                      : this.hidePopOver();
                }
                autoClose() {
                  this.options.autoCloseTimeout &&
                    (this.state.closeTimer = setTimeout(() => {
                      (this.state.closeTimer = null), this.hidePopOver();
                    }, this.options.autoCloseTimeout));
                }
                hideContentFromMouse() {
                  this.hidePopOver();
                }
                destroy() {
                  super.destroy(),
                    j() || this.options.showOnClick || d(this.tooltip),
                    f.off("modal.open", this.close),
                    f.off("popover.hide.content", this.onPopoverHide);
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=PopOver.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/global/PopOver.js
