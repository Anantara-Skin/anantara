(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "services/EventEmitter",
      "toolbox/ajax",
      "toolbox/event",
      "toolbox/deepMerge",
      "toolbox/queryString",
      "core/mixwith",
      "mixins/Loader",
      "mixins/Analytics",
      "mixins/Accessibility",
      "mixins/StickyOnScroll",
      "stores/ModifaceVTO",
      "stores/ProductServiceStore",
      "toolbox/html",
      "services/DataLayer",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
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
              (e = a.on), (f = a.off), (g = a.trigger);
            },
            function (a) {
              h = a.deepMerge;
            },
            function (a) {
              (i = a.stringify), (j = a.appendUrl), (k = a.parse);
            },
            function (a) {
              l = a.mix;
            },
            function (a) {
              m = a.default;
            },
            function (a) {
              n = a.default;
            },
            function (a) {
              o = a.default;
            },
            function (a) {
              p = a.default;
            },
            function (a) {
              q = a.default;
            },
            function (a) {
              r = a.default;
            },
            function (a) {
              s = a.getFormValues;
            },
            function (a) {
              t = a.default;
            },
          ],
          execute: function () {
            a(
              "default",
              (u = class extends l(b).with(m, n, o, p) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    h(
                      {
                        templateName: "product/productmainaction",
                        cartContentUrl: null,
                        headerText: null,
                        pid: null,
                        confirmationModal: {},
                        bonusPromoModal: {},
                        productsMap: null,
                        showMiniCart: !1,
                        showModalError: !1,
                        errorModalTitle: null,
                        errorModalContentUrl: null,
                        closeModalButtonLabel: null,
                        skipUpdateWithCartData: !1,
                        bonusPromoURL: "",
                        showConfirmModal: !0,
                        redirectUrl: null,
                        reloadData: {
                          section: "product",
                          id: "productmainaction",
                        },
                        text: {
                          accessibility: { processingStatusMessage: "" },
                        },
                        dataModelId: null,
                        key: null,
                        showSuccessMessage: !1,
                        sendCustomAnalytics: !1,
                        addOneMoreButton: null,
                      },
                      b,
                    ),
                  );
                }
                initState() {
                  (this.state.quantity = 1),
                    (this.state.productsMap = this.options.productsMap),
                    (this.state.uuid = null),
                    (this.state.pliData = {});
                }
                initCache() {
                  super.initCache(),
                    (this.selectors.submitButton = this.element.querySelector(
                      "[data-js-addtobag-submit]",
                    )),
                    (this.selectors.buttonTextLabel =
                      this.element.querySelector("[data-js-addtobag-text]"));
                }
                bindEvents() {
                  e("submit", this.element, this.onFormSubmit.bind(this)),
                    e(
                      "product.updated",
                      this.element,
                      this.onProductUpdated.bind(this),
                    ),
                    c.on(
                      "product.quantity.updated",
                      this.onQuantityChanged,
                      this,
                    ),
                    e(
                      "addtobag.update",
                      this.element,
                      this.onAddToBagUpdate.bind(this),
                    ),
                    c.on("cart.updated", this.onCartUpdated, this);
                }
                afterInit() {
                  this.options.skipUpdateWithCartData ||
                    this.updateWithCartData(),
                    this.analytics &&
                      this.analytics.dynamic &&
                      g("analytics.dynamic.update", this.element, {
                        bubbles: !0,
                        analytics: this.analytics.dynamic,
                      });
                }
                onAddToBagUpdate(a) {
                  a.detail &&
                    a.detail.productmainaction &&
                    this.render(a.detail.productmainaction);
                }
                onCartUpdated(a) {
                  const { pid: b } = this.options,
                    { pliData: c } = this.state;
                  a &&
                    ("string" == typeof a
                      ? ((this.state.pliData = {}), this.resetButtonState())
                      : a.removed_uuid
                        ? (-1 !== (c[b] || []).indexOf(a.removed_uuid) &&
                            c[b].splice(c[b].indexOf(a.removed_uuid), 1),
                          (!c[b] || 0 === c[b].length) &&
                            this.resetButtonState())
                        : a.replaced_uuid &&
                          a.pid !== b &&
                          this.resetButtonState());
                }
                resetButtonState() {
                  this.options.addOneMoreButton &&
                    (this.selectors.buttonTextLabel.innerText =
                      this.options.addOneMoreButton.defaultText),
                    this.state.submitButtonClass &&
                      (this.selectors.submitButton.classList.remove(
                        this.state.submitButtonClass,
                      ),
                      (this.state.submitButtonClass = null));
                }
                onQuantityChanged(a) {
                  a.pid === this.options.pid &&
                    ((this.state.quantity = a.quantity),
                    this.state.productsMap &&
                      a.productsMap &&
                      ((this.state.productsMap = a.replaceMode
                        ? {}
                        : this.state.productsMap),
                      Object.keys(a.productsMap).forEach((b) => {
                        (!a.replaceMode || b in this.state.productsMap) &&
                          (this.state.productsMap[b] = {
                            quantity: a.productsMap[b],
                          });
                      })));
                }
                getParamsMap() {
                  return Object.keys(this.state.productsMap).reduce(
                    (a, b, c) => (
                      (a["pid_".concat(c)] = b),
                      (a["qty".concat(c)] =
                        this.state.productsMap[b].quantity || 1),
                      this.isVTOActivated(b) && (a["vto_".concat(c)] = !0),
                      a
                    ),
                    {},
                  );
                }
                onFormSubmit(a) {
                  a.preventDefault(), this.submit();
                }
                submit() {
                  this.addLoader(this.selectors.submitButton, {
                    statusMessage:
                      this.options.text.accessibility.processingStatusMessage,
                  });
                  let a = s(this.element);
                  this.state.productsMap
                    ? (a = Object.assign(a, this.getParamsMap()))
                    : ((a.quantity = a.quantity || this.state.quantity),
                      this.isVTOActivated(this.options.pid) &&
                        ((a.vto = !0),
                        (a.location = this.getLocationParam(a.location))));
                  const b = q.get();
                  !a.location &&
                    b &&
                    "consultation" === b.mode &&
                    (a.location = "teleconsultation");
                  const c = r.get();
                  c &&
                    c.pid === this.options.pid &&
                    c.services &&
                    (a.services = Object.keys(c.services)
                      .sort((a, b) => a.localeCompare(b))
                      .map((a) => "".concat(a, "||").concat(c.services[a]))
                      .join("::")),
                    d(this.element.action, {
                      method: "POST",
                      body: i(a),
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                    })
                      .then(this.onSubmitSuccess.bind(this))
                      .catch(this.onSubmitFail.bind(this));
                }
                onSubmitSuccess(a) {
                  if (
                    ((this.state.uuid = a.uuid || null),
                    this.removeLoader(this.selectors.submitButton),
                    this.clearStatusMessage(),
                    !a.alternativeSubmit)
                  ) {
                    this.updateAddedProductsData(a.addedProductsData);
                    const b =
                        this.getEcommerceEventLabel(a.addedProductsData) ||
                        "Add to Cart",
                      d = this.analytics.eventData || {
                        eventType: "addProduct",
                        event: "addToCart",
                        eventCategory: "Ecommerce",
                        eventAction: "Add to Cart",
                        eventLabel: b,
                        event_name: "add_to_cart",
                        ecommerce: { add: { products: a.addedProductsData } },
                      };
                    if (
                      a &&
                      a.addedProductsData &&
                      0 < a.addedProductsData.length
                    ) {
                      const b = [];
                      a.addedProductsData.forEach((a) => {
                        a.cart &&
                          ((a.cart.quantity = a.quantity), b.push(a.cart));
                      }),
                        b && 0 < b.length && (d.cart = b);
                    }
                    this.isVTOActivated(this.options.pid) &&
                      Object.assign(d, {
                        product_info: b,
                        service_category: "guide",
                        service_name: "virtualtryon",
                        service_version: "1.0",
                      }),
                      c.emit("cart.product.added", {
                        showMiniCart: this.options.showMiniCart,
                      }),
                      c.emit("analytics.event", d),
                      this.options.sendCustomAnalytics &&
                        this.sendCustomAnalytics(this.element),
                      a.cartPageAjaxModel
                        ? c.emit("cart.update", {
                            detail: { content: a.cartPageAjaxModel },
                          })
                        : c.emit("cart.update"),
                      (this.state.pliData[this.options.pid] =
                        this.state.pliData[this.options.pid] || []),
                      -1 ===
                        this.state.pliData[this.options.pid].indexOf(
                          this.state.uuid,
                        ) &&
                        this.state.pliData[this.options.pid].push(
                          this.state.uuid,
                        ),
                      t.getData().pliData ||
                        t.update({ pliData: this.state.pliData }),
                      g("addtobag.success", this.element, {
                        bubbles: !0,
                        showConfirmModal: this.options.showConfirmModal,
                      });
                  }
                  if (
                    (a.analytics && c.emit("analytics.event", a.analytics),
                    a.text && a.text.buttonText)
                  ) {
                    const b = document.querySelector(
                      "[data-pid='".concat(
                        this.options.pid,
                        "'] [data-js-addtobag-text]",
                      ),
                    );
                    this.selectors.buttonTextLabel
                      ? (this.selectors.buttonTextLabel.innerText =
                          a.text.buttonText)
                      : b && (b.innerText = a.text.buttonText);
                  }
                  if (
                    (this.selectors.submitButton &&
                      a.cssClasses &&
                      a.cssClasses.button &&
                      (this.selectors.submitButton.classList.add(
                        a.cssClasses.button,
                      ),
                      (this.state.submitButtonClass = a.cssClasses.button)),
                    this.options.redirectUrl)
                  )
                    this.onSuccessRedirectCallback(a);
                  else if (this.options.showMiniCart)
                    this.onSuccessMiniCartCallback(a);
                  else if (this.options.showConfirmModal)
                    return void this.onSuccessConfirmationCallback(a);
                  this.showSuccessMessage(a.text && a.text.successMessage);
                }
                showSuccessMessage(a) {
                  const b =
                    (!this.options.redirectUrl &&
                      !this.options.showConfirmModal &&
                      !this.options.showMiniCart) ||
                    this.state.productsMap ||
                    this.options.showSuccessMessage;
                  a &&
                    b &&
                    c.emit("snackbar.notify", { content: a, type: "success" });
                }
                onSuccessConfirmationCallback(a) {
                  const b = this.getBonusPromoOptions(
                    a.newBonusDiscountLineItemUUIDs,
                  );
                  this.showConfirmationModal(b);
                }
                onSuccessRedirectCallback(a) {
                  const b = this.getBonusPromoOptions(
                    a.newBonusDiscountLineItemUUIDs,
                  );
                  b
                    ? this.showBonusProductPromo(b)
                    : "self" === this.options.redirectUrl
                      ? window.location.reload()
                      : window.location.assign(this.options.redirectUrl);
                }
                onSuccessMiniCartCallback(a) {
                  const b = this.getBonusPromoOptions(
                    a.newBonusDiscountLineItemUUIDs,
                  );
                  b || c.emit("modal.close"), this.showBonusProductPromo(b);
                }
                getBonusPromoOptions(a) {
                  return a && a.length
                    ? h(this.options.bonusPromoModal, {
                        contentUrl: j(this.options.bonusPromoURL, {
                          uuids: a.join(","),
                        }),
                        classNames: {
                          container: 1 < a.length ? ["m-fullscreen"] : [],
                        },
                      })
                    : null;
                }
                updateAddedProductsData(a) {
                  if (!a || !a.length) return;
                  const { quantity: b, productsMap: c } = this.state,
                    d = q.get();
                  a.forEach(
                    (a) => (
                      (a.quantity = c && c[a.pid] ? c[a.pid].quantity : b),
                      d &&
                        "consultation" === d.mode &&
                        (a.location = "teleconsultation"),
                      a
                    ),
                  );
                }
                showConfirmationModal(a) {
                  let b = Object.assign({}, this.options.confirmationModal);
                  const { contentUrl: d } = b;
                  (b = h(b, {
                    contentUrl:
                      this.state.uuid && !b.ignoreUUID
                        ? j(d, { uuid: this.state.uuid })
                        : d,
                    cssPath: "add-cart.css",
                    classNames: b.classNames || {
                      container: ["m-modal-add-cart"],
                    },
                    afterClose: this.afterClose.bind(this, a),
                    isStackable: !a,
                  })),
                    c.emit("modal.open", { options: b });
                }
                showBonusProductPromo(a) {
                  a && c.emit("modal.open", { options: a });
                }
                onSubmitFail(a) {
                  if (
                    (this.removeLoader(this.selectors.submitButton),
                    this.clearStatusMessage(),
                    !a.data)
                  )
                    return;
                  let b = {};
                  const d = a.data.type || "error",
                    e = a.data.pid || this.options.pid;
                  if (
                    (a.data.productSetStatus
                      ? (b = {
                          pid: this.options.pid,
                          errorList: a.data.productSetStatus
                            .filter((a) => !a.valid)
                            .map((a) => ({
                              errorMessage: a.errorMessage,
                              pid: a.pid,
                              step: a.step,
                              type: d,
                            })),
                        })
                      : e &&
                        (b = {
                          pid: e,
                          errorList: [
                            { errorMessage: a.errorMessage, type: d },
                          ],
                        }),
                    this.options.showModalError)
                  ) {
                    let d = {};
                    (d = this.options.errorModalContentUrl
                      ? {
                          data: b,
                          title: this.options.errorModalTitle,
                          closeButtonLabel: this.options.closeModalButtonLabel,
                          contentUrl: this.options.errorModalContentUrl,
                        }
                      : {
                          data: b,
                          title: this.options.errorModalTitle,
                          cssPath: "error.css",
                          closeButtonLabel: this.options.closeModalButtonLabel,
                        }),
                      a.data.analytics && (d.analytics = a.data.analytics),
                      c.emit("modal.open", { type: "Error", options: d });
                  } else
                    b.errorList.forEach((a) => {
                      c.emit("snackbar.notify", {
                        content: a.errorMessage,
                        type: a.type,
                      });
                    });
                  (b.key = this.options.key || null),
                    c.emit("cart.product.add.failed", { data: b });
                }
                onProductUpdated(a) {
                  const b =
                    "DEFAULT" === a.detail.productType
                      ? a.detail.previousPid
                      : a.detail.pid;
                  if (b === this.options.pid) {
                    const b =
                      a.detail.data &&
                      (a.detail.data[this.options.dataModelId] ||
                        a.detail.data.productmainaction);
                    b && this.render(b);
                  }
                }
                afterClose(a, b) {
                  if (a) return void this.showBonusProductPromo(a);
                  const d = Array.from(
                    b.querySelectorAll("[data-js-bonus-line-item]"),
                  )
                    .map((a) => a && a.value)
                    .filter((a) => !!a);
                  return this.element && d.length
                    ? void this.showBonusProductPromo(
                        h(this.options.bonusPromoModal, {
                          contentUrl: j(this.options.bonusPromoURL, {
                            uuids: d.join(","),
                          }),
                          classNames: {
                            container: 1 < d.length ? ["m-fullscreen"] : [],
                          },
                        }),
                      )
                    : void c.emit("addtobag.confirmation.closed");
                }
                updateQuantity(a) {
                  a && (this.state.quantity = a);
                }
                getLocationParam(a) {
                  if (a) return a;
                  const b = k(window.location.search);
                  return b.prescripted ? b.prescripted : "";
                }
                updateWithCartData() {
                  const a = t.getData() || {};
                  (this.state.pliData = (a && a.pliData) || {}),
                    this.options.addOneMoreButton &&
                      this.state.pliData &&
                      this.state.pliData[this.options.pid] &&
                      this.state.pliData[this.options.pid].length &&
                      ((this.state.submitButtonClass =
                        this.options.addOneMoreButton.cssClass),
                      (this.selectors.buttonTextLabel.innerText =
                        this.options.addOneMoreButton.text),
                      this.selectors.submitButton.classList.add(
                        this.state.submitButtonClass,
                      ));
                }
                destroy() {
                  ["submit", "product.updated", "addtobag.update"].forEach(
                    (a) => f(a, this.element),
                  ),
                    c.removeListener(
                      "product.quantity.updated",
                      this.onQuantityChanged,
                      this,
                    ),
                    c.removeListener("cart.updated", this.onCartUpdated, this);
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=AddToBag.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/product/AddToBag.js
