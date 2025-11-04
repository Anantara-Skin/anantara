(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "services/EventEmitter",
      "toolbox/ajax",
      "toolbox/event",
      "core/mixwith",
      "mixins/Accessibility",
      "constants/httpStatusCode",
      "services/DataLayer",
      "toolbox/deepMerge",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i, j, k, l;
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
              d = a.ajax;
            },
            function (a) {
              (e = a.on), (f = a.off);
            },
            function (a) {
              g = a.mix;
            },
            function (a) {
              h = a.default;
            },
            function (a) {
              i = a.default;
            },
            function (a) {
              j = a.default;
            },
            function (a) {
              k = a.deepMerge;
            },
          ],
          execute: function () {
            a(
              "default",
              (l = class extends g(b).with(h) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    k(
                      {
                        templateName: "product/addtowishlist",
                        url: { add: null, remove: null },
                        text: {
                          title: { add: null, remove: null },
                          accessibility: {
                            processingStatusMessage: "",
                            finishedStatusMessage: "",
                            addAriaLabel: "",
                            removeAriaLabel: "",
                          },
                        },
                        isLabel: !1,
                        pid: null,
                        classNames: { selected: "m-active" },
                        component: "addtowishlist",
                      },
                      b,
                    ),
                  );
                }
                bindEvents() {
                  e("click", this.element, this.onClick.bind(this)),
                    c.on(
                      "wishlist.updated.".concat(this.options.pid),
                      this.updateState,
                      this,
                    ),
                    c.on("wishlist.waitlogin", this.onWaitLogin, this),
                    e(
                      "product.updated",
                      this.element,
                      this.onProductUpdated.bind(this),
                    );
                }
                initState() {
                  this.updateState(), (this.state.isLoading = !1);
                }
                initCache() {
                  this.selectors.label = this.element.querySelector(
                    "[data-js-wishlist-text]",
                  );
                }
                updateState() {
                  const a = j.getCustomer(),
                    b = a && a.loggedIn,
                    d = a && a.wishlist;
                  b && d.find((a) => a.id === this.options.pid)
                    ? this.activeState()
                    : this.unactiveState(),
                    d &&
                      [0, 1].includes(d.length) &&
                      c.emit("wishlistlink.reload");
                }
                activeState() {
                  this.element.classList.add(this.options.classNames.selected),
                    this.element.setAttribute("aria-pressed", !0),
                    this.element.setAttribute(
                      "aria-label",
                      this.options.text.accessibility.removeAriaLabel,
                    ),
                    this.options.isLabel && this.options.text.title.remove
                      ? (this.selectors.label.textContent =
                          this.options.text.title.remove)
                      : this.options.text.title.remove &&
                        (this.selectors.label.title =
                          this.options.text.title.remove),
                    (this.state.isActive = !0);
                }
                unactiveState() {
                  this.element.classList.remove(
                    this.options.classNames.selected,
                  ),
                    this.element.setAttribute("aria-pressed", !1),
                    this.element.setAttribute(
                      "aria-label",
                      this.options.text.accessibility.addAriaLabel,
                    ),
                    this.options.isLabel && this.options.text.title.add
                      ? (this.selectors.label.textContent =
                          this.options.text.title.add)
                      : this.options.text.title.add &&
                        (this.selectors.label.title =
                          this.options.text.title.add),
                    (this.state.isActive = !1);
                }
                onProductUpdated(a) {
                  if (a.detail.previousPid === this.options.pid) {
                    const b =
                      a.detail.data && a.detail.data[this.options.component];
                    b && this.render(b);
                  }
                }
                onClick(a) {
                  a.preventDefault(), this.toggle();
                }
                add() {
                  return (
                    !(this.state.isActive || this.state.isLoading) &&
                    this.send(
                      ""
                        .concat(this.options.url.add, "?pid=")
                        .concat(this.options.pid),
                    ).then(this.onAddSuccess.bind(this))
                  );
                }
                onAddSuccess(a) {
                  return (
                    !!a &&
                    (j.update(a.datalayer),
                    c.emit("wishlist.added", { pid: this.options.pid }),
                    c.emit("wishlist.updated.".concat(this.options.pid)),
                    this.activeState(),
                    c.emit("analytics.event", {
                      eventType: "addToWishlist",
                      category: "ecommerce",
                      preventCategoryOverwrite: !0,
                      action: "add to favorites",
                      label: this.analytics.label,
                      extraData: { event_name: "add_to_wishlist" },
                      ecommerce: { products: this.analytics.products },
                    }),
                    !0)
                  );
                }
                onSendFailure(a) {
                  this.updateStatusMessage(
                    this.options.text.accessibility.finishedStatusMessage || !1,
                  ),
                    a.status !== i.AUTHENTIFICATION_ERROR ||
                      this.state.isWaitingLogin ||
                      c.emit("wishlist.waitlogin", { pid: this.options.pid });
                }
                onWaitLogin(a) {
                  this.state.isWaitingLogin && a.pid !== this.options.pid
                    ? ((this.state.isWaitingLogin = !1),
                      c.removeListener(
                        "login.success",
                        this.onLoginSuccess,
                        this,
                      ),
                      c.removeListener(
                        "registration.success",
                        this.onLoginSuccess,
                        this,
                      ))
                    : a.pid === this.options.pid &&
                      ((this.state.isWaitingLogin = !0),
                      c.once("login.success", this.onLoginSuccess, this),
                      c.once("registration.success", this.onLoginSuccess, this),
                      c.once("login.modal.close", this.onLoginAbort, this),
                      c.once("modal.open", this.onModalOpen, this));
                }
                toggle() {
                  return this.state.isActive ? this.remove() : this.add();
                }
                remove() {
                  return (
                    this.state.isActive &&
                    !this.state.isLoading &&
                    this.send(
                      ""
                        .concat(this.options.url.remove, "?pid=")
                        .concat(this.options.pid),
                    ).then(this.onRemoveSuccess.bind(this))
                  );
                }
                onRemoveSuccess(a) {
                  return (
                    !!a &&
                    ((j.getCustomer().wishlist = a.datalayer.customer.wishlist),
                    c.emit("wishlist.removed", { pid: this.options.pid }),
                    c.emit("wishlist.updated.".concat(this.options.pid)),
                    this.unactiveState(),
                    c.emit("analytics.event", {
                      eventType: "removeFromWishlist",
                      category: this.analytics.category,
                      action: "remove from favorites",
                      label: this.analytics.label,
                      extraData: { event_name: "remove_from_favorites" },
                      ecommerce: { products: this.analytics.products },
                      preventCategoryOverwrite: !0,
                    }),
                    !0)
                  );
                }
                send(a) {
                  return this.state.isLoading
                    ? Promise.reject()
                    : ((this.state.isLoading = !0),
                      this.updateStatusMessage(
                        this.options.text.accessibility
                          .processingStatusMessage || !0,
                      ),
                      d(a, { configId: this.options.socialloginConfigId })
                        .catch(this.onSendFailure.bind(this))
                        .then(
                          (a) => (
                            this.updateStatusMessage(
                              this.options.text.accessibility
                                .finishedStatusMessage || !1,
                            ),
                            (this.state.isLoading = !1),
                            a
                          ),
                        ));
                }
                onLoginSuccess() {
                  this.state.isWaitingLogin &&
                    ((this.state.isWaitingLogin = !1),
                    this.toggle().then(() => window.location.reload()));
                }
                onLoginAbort() {
                  (this.state.isWaitingLogin = !1),
                    this.state.isReplacedModal ||
                      this.modalAnalytics("login exit", "login_exit");
                }
                onModalOpen(a) {
                  a.options.isRegistration && (this.state.isReplacedModal = !0);
                }
                modalAnalytics(a, b) {
                  c.emit("analytics.event", {
                    category: "ecommerce",
                    action: "add to favorites::".concat(a),
                    label: this.analytics.label,
                    extraData: {
                      event_name: "wishlist_".concat(b),
                      product_info: this.analytics.label,
                    },
                  });
                }
                destroy() {
                  f("click", this.element),
                    c.removeListener(
                      "wishlist.updated.".concat(this.options.pid),
                      this.updateState,
                      this,
                    ),
                    c.removeListener(
                      "wishlist.waitlogin",
                      this.onWaitLogin,
                      this,
                    ),
                    f("product.updated", this.element),
                    this.state.isWaitingLogin &&
                      (c.removeListener(
                        "login.success",
                        this.onLoginSuccess,
                        this,
                      ),
                      c.removeListener(
                        "registration.success",
                        this.onLoginSuccess,
                        this,
                      ),
                      c.removeListener(
                        "login.modal.close",
                        this.onLoginAbort,
                        this,
                      ),
                      c.removeListener("modal.open", this.onModalOpen, this));
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=AddToWishlist.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/product/AddToWishlist.js
