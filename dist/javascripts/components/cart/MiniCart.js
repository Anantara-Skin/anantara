(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "services/EventEmitter",
      "components//dist/javascripts/components/global/SlidingPanel.js",
      "toolbox/deepMerge",
      "toolbox/event",
      "toolbox/mediaQuery",
      "services/DataLayer",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.Event;
            },
            function (a) {
              c = a.default;
            },
            function (a) {
              d = a.deepMerge;
            },
            function (a) {
              (e = a.on), (f = a.off);
            },
            function (a) {
              g = a.mediaQuery;
            },
            function (a) {
              h = a.getData;
            },
          ],
          execute: function () {
            a(
              "default",
              (i = class extends c {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    d(
                      {
                        showOnProductAdded: !0,
                        showBreakpoint: "xlarge",
                        skipMiniCartOnClick: !1,
                        confirmationModal: { keepOverlayOpened: !0 },
                        url: {},
                        pagesExcluded: ["cart"],
                        classNames: { overlaid: "m-overlaid" },
                        isMediaChange: !0,
                      },
                      b,
                    ),
                  );
                }
                initState() {
                  super.initState(),
                    (this.state.isOverlaid = !1),
                    (this.state.isLink =
                      !g.is(this.options.showBreakpoint) ||
                      this.options.skipMiniCartOnClick);
                }
                bindEvents() {
                  super.bindEvents(),
                    e(
                      "minicart.submit.success",
                      this.selectors.content,
                      this.onMiniCartSubmitSuccess.bind(this),
                    ),
                    b.on("cart.product.added", this.onProductAdded, this),
                    b.on("minicart.show", this.onMiniCartShow, this),
                    b.on("minicart.update", this.onMiniCartUpdate, this),
                    b.on("modal.open.before", this.onModalOpen, this),
                    b.on("modal.close.after", this.onModalClose, this);
                }
                afterInit() {
                  super.afterInit(), this.updateButtonRole();
                }
                onMediaQueryChange() {
                  (this.state.isLink =
                    !g.is(this.options.showBreakpoint) ||
                    this.options.skipMiniCartOnClick),
                    this.updateButtonRole(),
                    b.emit("carticon.update");
                }
                onMiniCartSubmitSuccess(a) {
                  const c = a.detail && a.detail.content;
                  c &&
                    ("string" != typeof c ||
                      (this.setContent(c),
                      this.hide(),
                      b.emit("overlay.close")));
                }
                onProductAdded(a) {
                  a.showMiniCart &&
                  this.options.showOnProductAdded &&
                  g.is(this.options.showBreakpoint)
                    ? this.show()
                    : this.state.isActive && this.loadContent();
                }
                onMiniCartUpdate() {
                  this.state.isActive && this.loadContent();
                }
                onMiniCartShow() {
                  this.state.isActive ||
                    !g.is(this.options.showBreakpoint) ||
                    this.show();
                }
                onTriggerClick(a) {
                  return -1 === this.options.pagesExcluded.indexOf(h().page.id)
                    ? void (this.state.isLink
                        ? (window.location.href = this.options.url.cart)
                        : (b.emit("simplesearch.close"), this.togglePanel()),
                      setTimeout(() => {
                        b.emit("analytics.event", {
                          category: "header",
                          action: "select",
                          label: "cart",
                          extraData: {
                            event_name: "header_click",
                            cta_name: "cart",
                          },
                        });
                      }, 0))
                    : void a.preventDefault();
                }
                onModalOpen() {
                  this.state.isActive &&
                    ((this.state.isOverlaid = !0),
                    this.selectors.target.classList.add(
                      this.options.classNames.overlaid,
                    ));
                }
                onModalClose() {
                  this.state.isActive &&
                    (this.state.isOverlaid &&
                      b.emit("page.scroll.disabled", !0),
                    (this.state.isOverlaid = !1),
                    this.selectors.target.classList.remove(
                      this.options.classNames.overlaid,
                    ));
                }
                onBeforeOverlayClose() {
                  this.state.isOverlaid || super.onBeforeOverlayClose();
                }
                updateButtonRole() {
                  this.element.dataset.jsButtonRole = this.state.isLink
                    ? "link"
                    : "button";
                }
                show(a) {
                  b.emit("remindertooltip.hidetooltip"), super.show(a);
                }
                destroy() {
                  super.destroy(),
                    f("minicart.submit.success", this.selectors.content),
                    b.removeListener(
                      "cart.product.added",
                      this.onProductAdded,
                      this,
                    ),
                    b.removeListener(
                      "minicart.show",
                      this.onMiniCartShow,
                      this,
                    ),
                    b.removeListener(
                      "modal.open.before",
                      this.onModalOpen,
                      this,
                    ),
                    b.removeListener(
                      "modal.close.after",
                      this.onModalClose,
                      this,
                    );
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=MiniCart.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/cart/MiniCart.js
