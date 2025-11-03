import Component from "core/Component";
import { on, off } from "toolbox/event";
import { deepMerge } from "toolbox/deepMerge";
import DataLayer from "services/DataLayer";
import { mix } from "core/mixwith";
import AnalyticsMixin from "mixins/Analytics";
/**
 * This is a description of the ProductBadge constructor function.
 * @class
 * @classdesc This is a description of the ProductBadge class. (must be edited)
 * @extends Component
 */
export default class ProductBadge extends mix(Component).with(AnalyticsMixin) {
  /**
   * Constructor of the class that mainly merge the options of the components
   * @param {HTMLElement} element HTMLElement of the component
   * @param {Object} options options that belongs to the component
   */
  constructor(element, options = {}) {
    super(
      element,
      deepMerge(
        {
          templateName: "product/productbadge",
          dataModelId: "productbadge",
          isClientEnabled: false, // if true, the component will be updated on variation change
          productID: "", // product ID
          recommendedBadge: null, // recommended badge
          linksAnalytics: null, // links analytics
        },
        options,
      ),
    );
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonymous function
   */
  bindEvents() {
    if (this.options.isClientEnabled) {
      on("product.updated", this.element, this.onProductUpdated.bind(this));
    }
    on("click", this.element, this.onClick.bind(this));
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    const dataLayer = DataLayer.getData();
    const { productID, recommendedBadge } = this.options;
    if (
      productID &&
      recommendedBadge &&
      dataLayer &&
      dataLayer.customer &&
      dataLayer.customer.recommendedProducts
    ) {
      const { recommendedProducts } = dataLayer.customer;
      Object.keys(recommendedProducts).some((application) => {
        const products = recommendedProducts[application].products || [];
        if (products.indexOf(productID) !== -1) {
          this.element.appendChild(
            this.createRecommendedBadge(recommendedBadge),
          );
          return true;
        }
        return false;
      });
    }
  }
  /**
   * Update component when product updated
   * @param {Object} e - event data
   */
  onProductUpdated(e) {
    const model = e.detail.data && e.detail.data[this.options.dataModelId];
    if (model) {
      this.render(model);
    }
  }
  /**
   * Click event handler,
   * send analytics if linksAnalytics is provided and the target is an anchor tag
   * @param {Object} e - event data
   */
  onClick(e) {
    const { linksAnalytics } = this.options;
    if (linksAnalytics && e.target.tagName === "A") {
      const { target } = e;
      const title = target.getAttribute("data-js-title");
      linksAnalytics.label = (title || "").toLowerCase();
      if (linksAnalytics.extraData) {
        linksAnalytics.extraData.cta_name = (title || "").toLowerCase();
      }
      this.sendAnalytics(linksAnalytics);
    }
  }
  /**
   * Create recommended badge
   * @param {Object} badge - badge object
   * @param {string} badge.image - badge image
   * @param {string} badge.url - badge url
   * @param {string} badge.title - badge title
   * @returns {HTMLElement} recommended badge
   */
  createRecommendedBadge(badge) {
    const { image, url, title, backgroundColor, textColor, cssClass } = badge;
    const span = document.createElement("span");
    span.className = image
      ? "c-product-badge__image"
      : "c-product-badge__title";
    if (backgroundColor) {
      span.style.backgroundColor = backgroundColor;
    }
    if (textColor) {
      span.style.color = textColor;
    }
    if (cssClass) {
      cssClass.split(" ").forEach((element) => {
        span.classList.add(element);
      });
    }
    const content = image || title;
    span.innerHTML = url
      ? `<a href="${url}" data-js-title="${title}">${content}</a>`
      : content;
    return span;
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    if (this.options.isClientEnabled) {
      off("product.updated", this.element);
    }
    off("click", this.element);
  }
}
