import Component from "core/Component";
import { Event } from "services/EventEmitter";
import { on, off } from "toolbox/event";
import { deepMerge } from "toolbox/deepMerge";
/**
 * This is a description of the ProductPrice constructor function.
 * @class
 * @classdesc This is a description of the ProductPrice class.
 * @extends Component
 */
export default class ProductPrice extends Component {
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
          templateName: "product/productprice",
          pricesMap: {},
          pid: null,
          productQuantities: {},
          hideStandardPrice: false,
          reloadData: {
            configid: null, // component config ID
            section: "product",
            id: "productprice",
          },
          classNames: {
            hidden: "h-hidden",
          },
          dataModelId: "productprice",
        },
        options,
      ),
    );
  }
  /**
   * Init the different state of the component
   */
  initState() {
    this.state.productQuantities = this.options.productQuantities;
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    this.selectors.salePrice = this.element.querySelector(
      "[data-js-saleprice]",
    );
    this.selectors.standardPrice = this.element.querySelector(
      "[data-js-standardprice]",
    );
    this.selectors.priceLabels = this.element.querySelectorAll(
      "[data-js-pricelabel]",
    );
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonymous function
   */
  bindEvents() {
    Event.on("product.quantity.updated", this.onQuantityChanged, this);
    on("product.updated", this.element, this.onProductUpdated.bind(this));
    on(
      "productprice.updated",
      this.element,
      this.onProductPriceUpdated.bind(this),
    );
  }
  /**
   * Transform productsMap object to key-value map usable for query string
   *
   * Example:
   * productQuantities = {
   *                 "3605531812213": 1,
   *                 "3605532987453": 1
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
    const params = Object.keys(this.state.productQuantities).reduce(
      (obj, el, i) => {
        obj[`pid_${i}`] = el;
        obj[`qty${i}`] = this.state.productQuantities[el] || 1;
        return obj;
      },
      {},
    );
    params.pid = this.options.pid;
    return params;
  }
  /**
   * 'product.quantity.updated' event handler
   *
   * @param {Object} e Event object
   */
  onQuantityChanged(e) {
    this.updateData(e);
  }
  /**
   * productprice.updated event handler
   * @param {Object} e Event object
   */
  onProductPriceUpdated(e) {
    if (!e || !e.detail) {
      return;
    }
    this.updateData(e.detail);
  }
  /**
   * Update product price component when product updated
   *
   * @param {Object} data Data
   */
  updateData(data) {
    if (data.pid === this.options.pid) {
      if (data.productType === "ROUTINE") {
        if (data.productsMap) {
          this.state.productQuantities = data.productsMap;
          this.updatePrice();
        }
      } else {
        this.update(data.quantity);
      }
    }
  }
  /**
   * Update the price for routine.
   *
   * Because of each products of the routine can have it own quantity we need to send the price calculation
   * request to the server. To improve performance the method should be called with the debounce functionality.
   * We can not use the reload method because there can be case when a new request will be invoked while the previous
   * is not completed and one of the requests will be complited in context of  destroyed component object.
   *
   */
  updatePrice() {
    const params = this.getParamsMap();
    this.reload(
      Object.assign(
        {
          pid: this.options.pid,
          dataType: "json",
        },
        params,
      ),
    )
      .then(this.onPriceUpdated.bind(this))
      .catch(this.onPriceFailed.bind(this));
  }
  /**
   * Trigger an update of a routine price
   * @param {Object} data Data
   */
  onPriceUpdated(data) {
    if (data && data.price) {
      const { price, strikethroughPrice } = data;
      this.updateHTML(price, strikethroughPrice);
      this.options.reloadData = Object.assign(
        {
          configid: null,
          section: "product",
          id: "productprice",
        },
        data.componentOptions.reloadData,
      );
    }
  }
  /**
   * Callback when a routine price update failed
   */
  onPriceFailed() {
    // Error handler
  }
  /**
   * Update the price
   *
   * @param {Number} quantity New value of the price
   */
  update(quantity) {
    if (quantity && this.options.pricesMap[quantity]) {
      const { salePrice, standardPrice, renderHidden } =
        this.options.pricesMap[quantity];
      if (!renderHidden) {
        this.updateHTML(salePrice, standardPrice);
      } else {
        this.updateHTML("", "");
      }
    }
  }
  /**
   * Render prices
   *
   * @param {String} salePrice Sale price
   * @param {String} standardPrice Standard price
   */
  updateHTML(salePrice, standardPrice) {
    this.selectors.salePrice.innerHTML = salePrice;
    if (this.selectors.standardPrice) {
      this.selectors.standardPrice.innerHTML = standardPrice || "";
      // eslint-disable-next-line max-len
      this.selectors.standardPrice.classList.toggle(
        this.options.classNames.hidden,
        !standardPrice || this.options.hideStandardPrice,
      );
      if (this.selectors.priceLabels && this.selectors.priceLabels.length) {
        this.selectors.priceLabels.forEach((el) => {
          if (standardPrice) {
            el.classList.remove(this.options.classNames.hidden);
          } else {
            el.classList.add(this.options.classNames.hidden);
          }
        });
      }
    }
    if (!salePrice && !standardPrice) {
      this.element.classList.add(this.options.classNames.hidden);
    } else {
      this.element.classList.remove(this.options.classNames.hidden);
    }
  }
  /**
   * Update product price component when product updated
   *
   * @param {Object} e - event data
   */
  onProductUpdated(e) {
    if (!e || !e.detail) {
      return;
    }
    const pid =
      e.detail.productType === "DEFAULT" ? e.detail.previousPid : e.detail.pid;
    if (pid === this.options.pid) {
      this.renderComponent(e.detail.data);
    }
  }
  /**
   * Update product
   * @param {Object} data event data
   */
  renderComponent(data) {
    const model = data && data[this.options.dataModelId];
    if (model) {
      this.render(model);
    }
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    Event.removeListener(
      "product.quantity.updated",
      this.onQuantityChanged,
      this,
    );
    off("product.updated", this.element);
    off("productprice.updated", this.element);
  }
}
