/* eslint max-lines: ["error", {"max": 450, "skipBlankLines": true, "skipComments": true }] */
/* eslint-disable complexity */
import Component from "core/Component";
import { Event } from "services/EventEmitter";
import { ajax } from "toolbox/ajax";
import { on, off, trigger } from "toolbox/event";
import { deepMerge } from "toolbox/deepMerge";
import { stringify, appendUrl, parse } from "toolbox/queryString";
import { mix } from "core/mixwith";
import LoaderMixin from "mixins/Loader";
import AnalyticsMixin from "mixins/Analytics";
import AccessibilityMixin from "mixins/Accessibility";
import StickyOnScrollMixin from "mixins/StickyOnScroll";
import modifaceStore from "stores/ModifaceVTO";
import productServiceStore from "stores/ProductServiceStore";
import { getFormValues } from "toolbox/html";
import DataLayer from "services/DataLayer";
/**
 * This is a description of the AddToBag constructor function.
 * @class
 * @classdesc This is a description of the AddToBag class.
 * @extends Component
 */
export default class AddToBag extends mix(Component).with(
  LoaderMixin,
  AnalyticsMixin,
  AccessibilityMixin,
  StickyOnScrollMixin,
) {
  /**
   * Constructor of the class that mainly merge the options of the components
   *
   * @param {HTMLElement} element HTMLElement of the component
   * @param {Object} options That belongs to the component
   */
  constructor(element, options = {}) {
    super(
      element,
      deepMerge(
        {
          templateName: "product/productmainaction",
          cartContentUrl: null,
          headerText: null,
          pid: null,
          confirmationModal: {},
          bonusPromoModal: {}, // bonus promo modal options
          productsMap: null,
          showMiniCart: false,
          showModalError: false, // if true add to bag error should be shown in modal popup
          errorModalTitle: null, // modal error title
          errorModalContentUrl: null, // if set, will be used to get custom error modal content
          closeModalButtonLabel: null, // button label in error modal popup
          skipUpdateWithCartData: false, // if true, skip updating the button based on cart data
          bonusPromoURL: "",
          showConfirmModal: true,
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
          showSuccessMessage: false, // show success message
          sendCustomAnalytics: false, // send custom analytics if true,
          addOneMoreButton: null,
        },
        options,
      ),
    );
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.quantity = 1;
    this.state.productsMap = this.options.productsMap;
    this.state.uuid = null;
    this.state.pliData = {};
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    super.initCache();
    this.selectors.submitButton = this.element.querySelector(
      "[data-js-addtobag-submit]",
    );
    this.selectors.buttonTextLabel = this.element.querySelector(
      "[data-js-addtobag-text]",
    );
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonymous function
   */
  bindEvents() {
    on("submit", this.element, this.onFormSubmit.bind(this));
    on("product.updated", this.element, this.onProductUpdated.bind(this));
    Event.on("product.quantity.updated", this.onQuantityChanged, this);
    on("addtobag.update", this.element, this.onAddToBagUpdate.bind(this));
    Event.on("cart.updated", this.onCartUpdated, this);
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    if (!this.options.skipUpdateWithCartData) {
      this.updateWithCartData();
    }
    if (this.analytics && this.analytics.dynamic) {
      trigger("analytics.dynamic.update", this.element, {
        bubbles: true,
        analytics: this.analytics.dynamic,
      });
    }
  }
  /**
   * 'addtobag.update' event handler
   * @param {Object} event event data
   */
  onAddToBagUpdate(event) {
    if (!event.detail || !event.detail.productmainaction) {
      return;
    }
    this.render(event.detail.productmainaction);
  }
  /**
   * Update the button text and view on cart.updated events
   *
   * @param {Object} e - event object containing information about the cart update or a rendered template for the empty cart
   * @param {string} [e.removed_uuid] - The UUID of the product line item that was removed from the cart
   * @param {string} [e.replaced_uuid] - The UUID of the product line item that was replaced in the cart
   * @param {string} [e.pid] - The product ID associated with the replaced product line item
   */
  onCartUpdated(e) {
    const { pid } = this.options;
    const { pliData } = this.state;
    if (!e) {
      return;
    }
    if (typeof e === "string") {
      // empty minicart case
      this.state.pliData = {};
      this.resetButtonState();
    } else if (e.removed_uuid) {
      // remove UUID from the data layer pliData object
      if ((pliData[pid] || []).indexOf(e.removed_uuid) !== -1) {
        pliData[pid].splice(pliData[pid].indexOf(e.removed_uuid), 1);
      }
      if (!pliData[pid] || pliData[pid].length === 0) {
        this.resetButtonState();
      }
    } else if (e.replaced_uuid && e.pid !== pid) {
      // line item product was replaced
      this.resetButtonState();
    }
  }
  /**
   * Resets the state of the submit button to its default configuration.
   * @returns {void}
   */
  resetButtonState() {
    if (this.options.addOneMoreButton) {
      this.selectors.buttonTextLabel.innerText =
        this.options.addOneMoreButton.defaultText;
    }
    if (!this.state.submitButtonClass) {
      return;
    }
    this.selectors.submitButton.classList.remove(this.state.submitButtonClass);
    this.state.submitButtonClass = null;
  }
  /**
   * Quantity Changed event handler
   *
   * @param {Object} e Event object
   */
  onQuantityChanged(e) {
    if (e.pid === this.options.pid) {
      this.state.quantity = e.quantity;
      if (this.state.productsMap && e.productsMap) {
        // clear current products map if replace mode
        this.state.productsMap = e.replaceMode ? {} : this.state.productsMap;
        Object.keys(e.productsMap).forEach((pid) => {
          if (!e.replaceMode || pid in this.state.productsMap) {
            this.state.productsMap[pid] = { quantity: e.productsMap[pid] };
          }
        });
      }
    }
  }
  /**
   * Transform productsMap object to key-value map usable for query string
   *
   * Example:
   * productsMap = {
   *                 "3605531812213": { "quantity": 1 },
   *                 "3605532987453": { "quantity": 1 }
   *               };
   *
   * output = {
   *            "pid_0": "3605531812213",
   *            "qty0": 1,
   *            "pid_1": "3605532987453",
   *            "qty1": 1
   *          };
   * @returns {Object} - Params object
   */
  getParamsMap() {
    return Object.keys(this.state.productsMap).reduce((obj, el, i) => {
      obj[`pid_${i}`] = el;
      obj[`qty${i}`] = this.state.productsMap[el].quantity || 1;
      if (this.isVTOActivated(el)) {
        obj[`vto_${i}`] = true;
      }
      return obj;
    }, {});
  }
  /**
   * Form submit event handler
   *
   * @param {Object} e Event object
   */
  onFormSubmit(e) {
    e.preventDefault();
    this.submit();
  }
  /**
   * Submit form
   */
  submit() {
    this.addLoader(this.selectors.submitButton, {
      statusMessage: this.options.text.accessibility.processingStatusMessage,
    });
    let params = getFormValues(this.element);
    if (this.state.productsMap) {
      params = Object.assign(params, this.getParamsMap());
    } else {
      params.quantity = params.quantity || this.state.quantity;
      if (this.isVTOActivated(this.options.pid)) {
        params.vto = true;
        params.location = this.getLocationParam(params.location);
      }
    }
    const store = modifaceStore.get();
    if (!params.location && store && store.mode === "consultation") {
      params.location = "teleconsultation";
    }
    const serviceStore = productServiceStore.get();
    if (
      serviceStore &&
      serviceStore.pid === this.options.pid &&
      serviceStore.services
    ) {
      params.services = Object.keys(serviceStore.services)
        .sort((key1, key2) => key1.localeCompare(key2))
        .map((key) => `${key}||${serviceStore.services[key]}`)
        .join("::");
    }
    ajax(this.element.action, {
      method: "POST",
      body: stringify(params),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then(this.onSubmitSuccess.bind(this))
      .catch(this.onSubmitFail.bind(this));
  }
  /**
   * Form submit success event handler
   *
   * @param {Object} response Response object
   */
  onSubmitSuccess(response) {
    this.state.uuid = response.uuid || null;
    this.removeLoader(this.selectors.submitButton);
    this.clearStatusMessage();
    if (!response.alternativeSubmit) {
      this.updateAddedProductsData(response.addedProductsData);
      const eventLabel =
        this.getEcommerceEventLabel(response.addedProductsData) ||
        "Add to Cart";
      const analyticsEventData = this.analytics.eventData || {
        eventType: "addProduct",
        event: "addToCart",
        eventCategory: "Ecommerce",
        eventAction: "Add to Cart",
        eventLabel,
        event_name: "add_to_cart",
        ecommerce: { add: { products: response.addedProductsData } },
      };
      if (
        response &&
        response.addedProductsData &&
        response.addedProductsData.length > 0
      ) {
        const analyticsCartData = [];
        response.addedProductsData.forEach((productData) => {
          if (productData.cart) {
            productData.cart.quantity = productData.quantity;
            analyticsCartData.push(productData.cart);
          }
        });
        if (analyticsCartData && analyticsCartData.length > 0) {
          analyticsEventData.cart = analyticsCartData;
        }
      }
      if (this.isVTOActivated(this.options.pid)) {
        Object.assign(analyticsEventData, {
          product_info: eventLabel,
          service_category: "guide",
          service_name: "virtualtryon",
          service_version: "1.0",
        });
      }
      Event.emit("cart.product.added", {
        showMiniCart: this.options.showMiniCart,
      });
      Event.emit("analytics.event", analyticsEventData);
      if (this.options.sendCustomAnalytics) {
        this.sendCustomAnalytics(this.element);
      }
      if (response.cartPageAjaxModel) {
        Event.emit("cart.update", {
          detail: { content: response.cartPageAjaxModel },
        });
      } else {
        Event.emit("cart.update");
      }
      // udpate DataLayer container with the current cart data
      this.state.pliData[this.options.pid] =
        this.state.pliData[this.options.pid] || [];
      if (
        this.state.pliData[this.options.pid].indexOf(this.state.uuid) === -1
      ) {
        this.state.pliData[this.options.pid].push(this.state.uuid);
      }
      if (!DataLayer.getData().pliData) {
        DataLayer.update({
          pliData: this.state.pliData,
        });
      }
      trigger("addtobag.success", this.element, {
        bubbles: true,
        showConfirmModal: this.options.showConfirmModal,
      });
    }
    if (response.analytics) {
      Event.emit("analytics.event", response.analytics);
    }
    if (response.text && response.text.buttonText) {
      const addToBagButtonTextLabel = document.querySelector(
        `[data-pid='${this.options.pid}'] [data-js-addtobag-text]`,
      );
      if (this.selectors.buttonTextLabel) {
        this.selectors.buttonTextLabel.innerText = response.text.buttonText;
      } else if (addToBagButtonTextLabel) {
        addToBagButtonTextLabel.innerText = response.text.buttonText;
      }
    }
    if (
      this.selectors.submitButton &&
      response.cssClasses &&
      response.cssClasses.button
    ) {
      this.selectors.submitButton.classList.add(response.cssClasses.button);
      this.state.submitButtonClass = response.cssClasses.button;
    }
    if (this.options.redirectUrl) {
      this.onSuccessRedirectCallback(response);
    } else if (this.options.showMiniCart) {
      this.onSuccessMiniCartCallback(response);
    } else if (this.options.showConfirmModal) {
      this.onSuccessConfirmationCallback(response);
      return;
    }
    this.showSuccessMessage(response.text && response.text.successMessage);
  }
  /**
   * Show success snackbar
   * @param {String} message success message
   */
  showSuccessMessage(message) {
    const showSnackbar =
      (!this.options.redirectUrl &&
        !this.options.showConfirmModal &&
        !this.options.showMiniCart) ||
      this.state.productsMap ||
      this.options.showSuccessMessage;
    if (!message || !showSnackbar) {
      return;
    }
    Event.emit("snackbar.notify", { content: message, type: "success" });
  }
  /**
   * On success "show confirmation modal" flaw callback
   * @param {Object} response API response object
   */
  onSuccessConfirmationCallback(response) {
    const promoModalOptions = this.getBonusPromoOptions(
      response.newBonusDiscountLineItemUUIDs,
    );
    this.showConfirmationModal(promoModalOptions);
  }
  /**
   * On success "redirect" flaw callback
   * @param {Object} response API response object
   */
  onSuccessRedirectCallback(response) {
    const promoModalOptions = this.getBonusPromoOptions(
      response.newBonusDiscountLineItemUUIDs,
    );
    if (!promoModalOptions) {
      if (this.options.redirectUrl === "self") {
        // reload page
        window.location.reload();
      } else {
        // redirect to provided url
        window.location.assign(this.options.redirectUrl);
      }
    } else {
      this.showBonusProductPromo(promoModalOptions);
    }
  }
  /**
   * On success "show mini cart" flaw callback
   * @param {Object} response API response object
   */
  onSuccessMiniCartCallback(response) {
    const promoModalOptions = this.getBonusPromoOptions(
      response.newBonusDiscountLineItemUUIDs,
    );
    if (!promoModalOptions) {
      // close the current modal if it is open
      // we need to trigger modal.close event only if promo modal will not be triggered
      Event.emit("modal.close");
    }
    this.showBonusProductPromo(promoModalOptions);
  }
  /**
   * Return object with promotion modal options
   * @param {Array} bonusLineItemUUIDs list of bonus line item UUIDs
   * @returns {Object} options object
   */
  getBonusPromoOptions(bonusLineItemUUIDs) {
    if (!bonusLineItemUUIDs || !bonusLineItemUUIDs.length) {
      return null;
    }
    return deepMerge(this.options.bonusPromoModal, {
      contentUrl: appendUrl(this.options.bonusPromoURL, {
        uuids: bonusLineItemUUIDs.join(","),
      }),
      classNames: {
        container: bonusLineItemUUIDs.length > 1 ? ["m-fullscreen"] : [],
      },
    });
  }
  /**
   * Modifies products analytics
   * @param {Array} addedProducts response products analytics data
   */
  updateAddedProductsData(addedProducts) {
    if (!addedProducts || !addedProducts.length) {
      return;
    }
    const { quantity, productsMap } = this.state;
    const store = modifaceStore.get();
    // this is used for productset AND for reorderAll
    addedProducts.forEach((product) => {
      product.quantity =
        productsMap && productsMap[product.pid]
          ? productsMap[product.pid].quantity
          : quantity;
      if (store && store.mode === "consultation") {
        product.location = "teleconsultation";
      }
      return product;
    });
  }
  /**
   * Shows confirmation modal
   * @param {Object} promoModalOptions bonus discount promo modal
   */
  showConfirmationModal(promoModalOptions) {
    let modalOptions = Object.assign({}, this.options.confirmationModal);
    const { contentUrl } = modalOptions;
    modalOptions = deepMerge(modalOptions, {
      // eslint-disable-next-line max-len
      contentUrl:
        this.state.uuid && !modalOptions.ignoreUUID
          ? appendUrl(contentUrl, { uuid: this.state.uuid })
          : contentUrl,
      cssPath: "add-cart.css",
      classNames: modalOptions.classNames || {
        container: ["m-modal-add-cart"],
      },
      afterClose: this.afterClose.bind(this, promoModalOptions),
      isStackable: !promoModalOptions,
    });
    Event.emit("modal.open", { options: modalOptions });
  }
  /**
   * Shows choice of bonus product promo modal
   * @param {Object} modalOptions bonus discount promo modal
   */
  showBonusProductPromo(modalOptions) {
    if (!modalOptions) {
      return;
    }
    Event.emit("modal.open", { options: modalOptions });
  }
  /**
   * Form submit fail event handler
   *
   * @param {Object} response Data
   */
  onSubmitFail(response) {
    this.removeLoader(this.selectors.submitButton);
    this.clearStatusMessage();
    if (!response.data) {
      return;
    }
    let data = {};
    const type = response.data.type || "error";
    const pid = response.data.pid || this.options.pid;
    if (response.data.productSetStatus) {
      data = {
        pid: this.options.pid,
        errorList: response.data.productSetStatus
          .filter((status) => !status.valid)
          .map((status) => ({
            errorMessage: status.errorMessage,
            pid: status.pid,
            step: status.step,
            type,
          })),
      };
    } else if (pid) {
      data = {
        pid,
        errorList: [{ errorMessage: response.errorMessage, type }],
      };
    }
    if (this.options.showModalError) {
      let options = {};
      if (this.options.errorModalContentUrl) {
        options = {
          data,
          title: this.options.errorModalTitle,
          closeButtonLabel: this.options.closeModalButtonLabel,
          contentUrl: this.options.errorModalContentUrl,
        };
      } else {
        options = {
          data,
          title: this.options.errorModalTitle,
          cssPath: "error.css",
          closeButtonLabel: this.options.closeModalButtonLabel,
        };
      }
      if (response.data.analytics) {
        options.analytics = response.data.analytics;
      }
      Event.emit("modal.open", {
        type: "Error",
        options,
      });
    } else {
      data.errorList.forEach((error) => {
        Event.emit("snackbar.notify", {
          content: error.errorMessage,
          type: error.type,
        });
      });
    }
    data.key = this.options.key || null;
    Event.emit("cart.product.add.failed", { data });
  }
  /**
   * Reload component when product updated
   *
   * @param {Object} e - event data
   */
  onProductUpdated(e) {
    const pid =
      e.detail.productType === "DEFAULT" ? e.detail.previousPid : e.detail.pid;
    if (pid === this.options.pid) {
      const model =
        e.detail.data &&
        (e.detail.data[this.options.dataModelId] ||
          e.detail.data.productmainaction);
      if (model) {
        this.render(model);
      }
    }
  }
  /**
   * Executed after confirmation popup is closed
   * @param {Object} modalOptions bonus modal options
   * @param {Object} modal modal HTML element
   */
  afterClose(modalOptions, modal) {
    if (modalOptions) {
      // Can be overloaded in nested classes (e.g. Reorder.js)
      this.showBonusProductPromo(modalOptions);
      return;
    }
    const bonusLineItemUUIDs = Array.from(
      modal.querySelectorAll("[data-js-bonus-line-item]"),
    )
      .map((item) => item && item.value)
      .filter((value) => !!value);
    if (this.element && bonusLineItemUUIDs.length) {
      this.showBonusProductPromo(
        deepMerge(this.options.bonusPromoModal, {
          contentUrl: appendUrl(this.options.bonusPromoURL, {
            uuids: bonusLineItemUUIDs.join(","),
          }),
          classNames: {
            container: bonusLineItemUUIDs.length > 1 ? ["m-fullscreen"] : [],
          },
        }),
      );
      return;
    }
    Event.emit("addtobag.confirmation.closed");
  }
  /**
   * Update current quantity
   * @param {Number} quantity quantity
   */
  updateQuantity(quantity) {
    if (quantity) {
      this.state.quantity = quantity;
    }
  }
  /**
   * Get location parameter value
   * @param {String} location param
   * @return {String} event label value
   */
  getLocationParam(location) {
    if (location) {
      return location;
    }
    const urlParams = parse(window.location.search);
    if (urlParams.prescripted) {
      return urlParams.prescripted;
    }
    return "";
  }
  /**
   * Updates the component's state and UI based on the current cart data
   */
  updateWithCartData() {
    const dataLayerData = DataLayer.getData() || {};
    this.state.pliData = (dataLayerData && dataLayerData.pliData) || {};
    if (
      this.options.addOneMoreButton &&
      this.state.pliData &&
      this.state.pliData[this.options.pid] &&
      this.state.pliData[this.options.pid].length
    ) {
      // update cta state for the case if the product is already in the basket
      this.state.submitButtonClass = this.options.addOneMoreButton.cssClass;
      this.selectors.buttonTextLabel.innerText =
        this.options.addOneMoreButton.text;
      this.selectors.submitButton.classList.add(this.state.submitButtonClass);
    }
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    ["submit", "product.updated", "addtobag.update"].forEach((event) =>
      off(event, this.element),
    );
    Event.removeListener(
      "product.quantity.updated",
      this.onQuantityChanged,
      this,
    );
    Event.removeListener("cart.updated", this.onCartUpdated, this);
  }
}
