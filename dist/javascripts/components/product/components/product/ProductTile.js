import Registry from "core/ComponentRegistry";
import Component from "core/Component";
import { mix } from "core/mixwith";
import { Event } from "services/EventEmitter";
import { on, off, trigger } from "toolbox/event";
import { deepMerge } from "toolbox/deepMerge";
import { getAttributesOfOriginalImage, changeImage } from "toolbox/image";
import Accessibility from "mixins/Accessibility";
import AnalyticsMixin from "mixins/Analytics";
/**
 * This is a description of the ProductTile constructor function.
 * @class
 * @classdesc This is a description of the ProductTile class.
 * @extends Component
 */
export default class ProductTile extends mix(Component).with(
  Accessibility,
  AnalyticsMixin,
) {
  /**
   * Constructor of the class that mainly merge the options of the components
   *
   * @param {HTMLElement} element HTMLElement of the component
   * @param {Object} options That belongs to the component
   * @param {Object} store Store
   */
  constructor(element, options = {}, store) {
    super(
      element,
      deepMerge(
        {
          tileTemplateName: "producttile",
          pid: null,
          events: {
            variationUpdate: "product.variation.update",
          },
          reloadData: {
            section: "search",
            expand: "helpers",
          },
          classNames: {
            buttonClass: "c-button",
            loadingClass: "m-loading",
            selected: "m-active",
          },
          isEditable: false, // allow to remove tile from tiles list or edit it
          allowMultipleImpression: false,
          uniqueImpressionPerMaster: false,
          isPreventQtyUpdatedEvent: false,
          showBadgeOnlyOnFirstProductImage: false,
          // Self-contained component that stops event propagation to prevent interaction with parent elements
          selfContained: false,
        },
        options,
      ),
      store,
    );
  }
  /**
   * Called after component initialization and setup service urls
   */
  afterInit() {
    this.getProductAnalytics().then(() => {
      this.sendProductImpressionToAnalytics();
    });
    if (this.classNames.alternativeImageActive.length) {
      this.element.classList.add(this.classNames.cssClass);
    }
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    this.selectors.productImageLink = this.element.querySelector(
      "[data-js-product-image-link]",
    );
    this.selectors.image = this.element.querySelector(
      "[data-js-product-image] img",
    );
    this.selectors.price = this.element.querySelector(
      '[data-component="product/ProductPrice"]',
    );
    this.selectors.producttileactions = this.element.querySelector(
      "[data-js-producttile-actions]",
    );
    this.selectors.anchors = this.element.querySelectorAll(
      "a:not([data-js-swatch]):not([data-js-writereview-product]):not([data-js-variation-link])",
    );
    this.selectors.productThumbnail = this.element.querySelector(
      "[data-js-product-thumbnail]",
    );
    this.classNames = {
      cssClass: "c-product-tile__config",
      alternativeImageActive: [],
    };
    if (this.options.showBadgeOnlyOnFirstProductImage) {
      this.classNames.alternativeImageActive.push("m-hide-badge");
    }
    if (this.options.isEditable) {
      this.selectors.remove = this.element.querySelector("[data-js-remove]");
      this.selectors.edit = this.element.querySelector("[data-js-edit]");
    }
    this.selectors.detailsButtons = this.element.querySelectorAll(
      "[data-js-details-link]",
    );
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.originalImageData = getAttributesOfOriginalImage(
      this.selectors.image,
    );
    this.state.productId = this.element.getAttribute("data-pid");
    // find the first link and use it as the global one. For SEO reasons, we can only have one link in
    // the product tile pointing to the product page
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonymous function
   */
  bindEvents() {
    on("stepperInput.updated", this.element, this.onQuantityChanged.bind(this));
    on(
      this.options.events.variationUpdate,
      this.element,
      this.onProductTileUpdate.bind(this),
    );
    on(
      "product.image.update",
      this.element,
      this.onProductImageUpdate.bind(this),
    );
    on(
      "comparisonButton.cta.update",
      this.element,
      this.onComparisonCTAUpdate.bind(this),
    );
    on("lazyloaded", this.element, this.onLazyLoaded.bind(this));
    on("click", this.selectors.anchors, this.onClick.bind(this));
    on(
      "analytics.dynamic.update",
      this.element,
      this.onDynamicAnalyticsUpdate.bind(this),
    );
    on(
      "comparisonButton.selected",
      this.element,
      this.onComparisonButtonSelected.bind(this),
    );
    if (this.selectors.productImageLink) {
      on(
        "click.productimagelink",
        this.selectors.productImageLink,
        this.onProductImageLinkClick.bind(this),
      );
      on(
        "keydown.productimagelink",
        this.selectors.productImageLink,
        this.onKeyboardControl.bind(this),
      );
    }
    if (
      this.options.showBadgeOnlyOnFirstProductImage &&
      this.selectors.productThumbnail
    ) {
      on(
        "carousel.slidechanged",
        this.selectors.productThumbnail,
        this.onMainImageChanged.bind(this),
      );
    }
    if (this.options.isEditable) {
      on("click", this.selectors.remove, this.onRemoveClick.bind(this));
      on("click", this.selectors.edit, this.onEditClick.bind(this));
    }
    if (this.selectors.detailsButtons.length) {
      on(
        "click.selectableproducttile",
        this.selectors.detailsButtons,
        this.onDetailsButtonClick.bind(this),
      );
    }
  }
  /**
   * Dynamic analytics update event listener
   * @param {Object} event event object
   */
  onDynamicAnalyticsUpdate(event) {
    if (this.dynamicAnalyticsCallback) {
      this.dynamicAnalyticsCallback(event);
    }
    if (this.options.selfContained) {
      event.stopPropagation();
    }
  }
  /**
   * Click event handler
   *
   * @param {Object} e - Event object
   */
  onClick(e) {
    if (
      !e.target.classList.contains("js-productimage__arrow-next") &&
      !e.target.classList.contains("js-productimage__arrow-prev")
    ) {
      this.sendProductClickToAnalytics(e);
    }
  }
  /**
   * Edit button click event handler
   */
  onEditClick() {
    trigger("producttile.edit", this.element, {
      bubbles: true,
      pid: this.options.pid,
    });
  }
  /**
   * Show/hide action button
   * @param {Object} e event
   */
  onComparisonCTAUpdate(e) {
    if (!this.selectors.producttileactions) {
      return;
    }
    if (e.detail.show) {
      this.selectors.producttileactions.classList.add("m-comparison");
    } else {
      this.selectors.producttileactions.classList.remove("m-comparison");
    }
    if (this.options.selfContained) {
      e.stopPropagation();
    }
  }
  /**
   * Remove button click event handler
   */
  onRemoveClick() {
    trigger("producttile.remove", this.element, {
      bubbles: true,
      pid: this.options.pid,
    });
  }
  /**
   * Image lazy loaded event handler
   */
  onLazyLoaded() {
    this.state.originalImageData = getAttributesOfOriginalImage(
      this.selectors.image,
    );
  }
  /**
   * Product tile update event handler
   *
   * @param {Object} e - HTML Event object
   */
  onProductTileUpdate(e) {
    const { pid } = e.detail;
    const reloadData = {
      pid,
      id: this.options.tileTemplateName,
    };
    this.disableActionButton(this.state.productId);
    if (this.options.classNames.addToCartClass) {
      reloadData.addToCartClass = this.options.classNames.addToCartClass;
    }
    this.reload(reloadData);
    if (this.options.selfContained) {
      e.stopPropagation();
    }
  }
  /**
   * Disabled Add To Bag button if product has not been updated yet
   *
   * @param {String} pid Product ID
   */
  disableActionButton(pid) {
    const actionButton =
      this.element.querySelector(`button[data-pid="${pid}"]`) ||
      this.element.querySelector("button[data-js-productmainaction]");
    if (!actionButton) {
      return;
    }
    actionButton.classList.add(
      this.options.classNames.buttonClass,
      this.options.classNames.loadingClass,
    );
    actionButton.setAttribute("disabled", "disabled");
  }
  /**
   * Quantity Changed event handler
   *
   * @param {Object} e Event object
   */
  onQuantityChanged(e) {
    e.stopPropagation();
    this.updateQuantity(e.detail.value);
  }
  /**
   * Update quantity of products to be ordered
   * @param {Integer} value quantity to be updated
   */
  updateQuantity(value) {
    // Prevent any action if quantity is same
    if (value && value === this.state.quantity) {
      return;
    }
    const quantityPrev = this.state.quantity;
    this.state.quantity = value;
    const priceComponent = Registry.getComponent(this.selectors.price);
    if (priceComponent) {
      priceComponent.update(value);
    }
    trigger("productTile.updated", this.element, {
      bubbles: true,
      pid: this.options.pid,
      quantity: this.state.quantity,
      quantityPrev,
    });
    if (!this.options.isPreventQtyUpdatedEvent) {
      // TODO remove global event
      Event.emit("product.quantity.updated", {
        pid: this.options.pid,
        quantity: this.state.quantity,
      });
    }
  }
  /**
   * Product tile image update event handler
   *
   * @param {Object} e HTML Event object
   */
  onProductImageUpdate(e) {
    changeImage(
      this.selectors.image,
      this.state.originalImageData,
      e.detail.imageUrl,
    );
    if (this.options.selfContained) {
      e.stopPropagation();
    }
  }
  /**
   * Reload success handler
   * @param { Object } data Reload response data
   * @return { Object } response data
   */
  onReload(data) {
    if (data.dataType === "html") {
      const newElement = this._replaceElement(data.content);
      trigger("productTile.updated", newElement, {
        bubbles: true,
      });
    }
    return data.content;
  }
  /**
   * Trigger event on image changed
   * @param {Object} e event data
   */
  onMainImageChanged(e) {
    if (e.detail.index && this.classNames.alternativeImageActive.length) {
      this.element.classList.add(...this.classNames.alternativeImageActive);
    } else {
      this.element.classList.remove(...this.classNames.alternativeImageActive);
    }
  }
  /**
   * Product image link click event handler
   * @param {Object} event event object
   */
  onProductImageLinkClick(event) {
    const interactiveSelector = "button, a";
    const { href, target } = event.currentTarget.dataset;
    if (href && !event.target.closest(interactiveSelector)) {
      event.preventDefault();
      this.sendProductClickToAnalytics(event);
      if (target === "_blank") {
        window.open(href, target);
      } else {
        window.location.href = href;
      }
    }
  }
  /**
   * Keyboard control event handler
   * @param {Event} event - Event object
   */
  onKeyboardControl(event) {
    if (["Enter", " "].indexOf(event.key) !== -1) {
      this.onProductImageLinkClick(event);
    }
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    off(this.element);
    off("click", this.selectors.anchors);
    if (this.selectors.productImageLink) {
      off("click.productimagelink", this.selectors.productImageLink);
      off("keydown.productimagelink", this.selectors.productImageLink);
    }
    if (
      this.options.showBadgeOnlyOnFirstProductImage &&
      this.selectors.productThumbnail
    ) {
      off("carousel.slidechanged", this.selectors.productThumbnail);
    }
    if (this.options.isEditable) {
      off("click", this.selectors.remove);
      off("click", this.selectors.edit);
    }
    if (this.selectors.detailsButtons.length) {
      off("click", this.selectors.detailsButtons);
    }
  }
  /**
   * Product tile selection event handler
   *
   * @param {Object} e event data
   */
  toggleSelect(e) {
    this.element.classList.toggle(
      this.options.classNames.selected,
      e.detail.isInComparison,
    );
  }
  /**
   * Product tile compare select event handler
   *
   * @param {Object} e event data
   */
  onComparisonButtonSelected(e) {
    this.toggleSelect(e);
  }
  /**
   * Details button click event handler
   * @param {Object} event event object
   */
  onDetailsButtonClick(event) {
    if (!event.target.closest("[data-js-carousel-arrows]")) {
      event.preventDefault();
      trigger("producttile.details", this.element, {
        bubbles: true,
        pid: this.state.productId,
        analytics: this.getAnalyticsAttributeData(event.target),
      });
    }
  }
}
