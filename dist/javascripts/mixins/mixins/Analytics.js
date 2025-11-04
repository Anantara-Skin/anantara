/* eslint max-lines: ["error", {"max": 400, "skipBlankLines": true, "skipComments": true }] */
/* eslint complexity: ["error", {"max": 10}] */
import { Mixin } from "core/mixwith";
import { Event } from "services/EventEmitter";
import { deepMerge } from "toolbox/deepMerge";
import { mediaQuery } from "toolbox/mediaQuery";
import modifaceStore from "stores/ModifaceVTO";
import Registry from "core/ComponentRegistry";
/**
 * A mixin that add analytics feature to any component.
 */
export default Mixin(
  (superclass) =>
    class extends superclass {
      /**
       * @constructor
       * @param {HTMLElement} element HTMLElement of the component
       * @param {Object} options That belongs to the component
       */
      constructor(element, options = {}) {
        super(
          element,
          deepMerge(
            {
              onViewportAnalytics: null,
              analyticsObserverOptions: {},
            },
            options,
          ),
        );
      }
      /**
       * After init
       * Run any script after the component is fully initialized
       */
      afterInit() {
        super.afterInit();
        if (this.options.onViewportAnalytics) {
          this.initAnalyticsObserver();
        }
      }
      /**
       * Initialize IntersectionObserver for the element
       */
      initAnalyticsObserver() {
        const options = this.options.analyticsObserverOptions;
        this.analyticsObserver = new window.IntersectionObserver(
          this.onAnalyticsObserve.bind(this),
          options,
        );
        this.analyticsObserver.observe(this.element);
      }
      /**
       * triggered when section appears in view port.
       * @param {Object[]} entries IntersectionObserverEntry objects
       */
      onAnalyticsObserve(entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Event.emit("analytics.event", this.options.onViewportAnalytics);
          }
        });
      }
      /**
       * Changes analytics data dynamically, depending on the element which caused component action.
       * used in onAction handler in Form.js and onTrigger handler in EventTrigger.js
       *
       * @param {HTMLElement} target HTML element to use as a source to set analytics data
       * @param {Boolean} onlyTarget get analytics data only from target
       */
      _initEventAnalytics(target = null, onlyTarget = false) {
        let dataTarget = target || this.element;
        if (target && !onlyTarget && !target.getAttribute("data-analytics")) {
          dataTarget = this.element;
        }
        this.analytics = this.getAnalyticsAttributeData(dataTarget);
      }
      /**
       * Returns analytics data, depending on the target element
       *
       * @param {HTMLElement} target HTML element to use as a source of analytics data
       * @return {Object|null} analytics data
       */
      getAnalyticsAttributeData(target) {
        const analytics = target && target.getAttribute("data-analytics");
        let data;
        if (analytics) {
          try {
            data = JSON.parse(analytics);
          } catch (e) {
            if (window.lora.debug) {
              console.error(
                `Please check that the data-analytics you have passed for "${target}" respect JSON format`,
              );
            }
          }
        }
        if (data) {
          // set analytics considering the current viewport
          data = this._setAnalytics(data);
        }
        return data || null;
      }
      /**
       * Set the analytics, depending on the viewport
       * @param {Object} analytics of the component
       * @returns {Object} - set the analytics considering the current viewport
       */
      _setAnalytics(analytics) {
        let data;
        if (!analytics) {
          return null;
        }
        if (analytics.breakpoints) {
          // check if we have any breakpoint configuration available for the current viewport
          data = this.getCurrentViewportAnalytics(analytics.breakpoints);
        } else {
          data = analytics;
        }
        return data;
      }
      /**
       * Get contextual analytics specific to a viewport
       * @param {Object} breakpoints - All Breakpoint analytics list
       * @returns {Object} - Get the analytics belonging to the current viewport
       */
      getCurrentViewportAnalytics(breakpoints) {
        let responsiveAnalytics;
        Object.entries(breakpoints).some(([mq, mqAnalytics]) => {
          const isCurrentMQ = mediaQuery.is(mq);
          if (isCurrentMQ) {
            responsiveAnalytics = mqAnalytics;
          }
          return isCurrentMQ;
        });
        return responsiveAnalytics;
      }
      /**
       * Extends current analytics data by analytics from response and return result object
       *
       * @param {Object} content response object
       * @returns {Object} data analytics
       */
      getAnalytics(content) {
        let data = this.analytics;
        if (data && Object.keys(data).length) {
          if (content && content.analytics) {
            if (
              Array.isArray(data.events) ||
              Array.isArray(content.analytics.events)
            ) {
              // eslint-disable-next-line max-depth
              if (!Array.isArray(data.events)) {
                data.events = [data];
              }
              // eslint-disable-next-line max-depth
              if (!Array.isArray(content.analytics.events)) {
                content.analytics.events = [content.analytics];
              }
              data = deepMerge(data, content.analytics, {
                arrayMerge: (target, source) => target.concat(source),
              });
            } else {
              data = deepMerge(data, content.analytics);
            }
          }
          delete data.afterInit;
        } else {
          data = content ? content.analytics : null;
        }
        return data;
      }
      /**
       * Update virtual page data
       * @param { Object } data - Analytics data of the virtual page
       * @param { Object } customData - Analytics custom data of the virtual page
       */
      updateVirtualPage(data, customData) {
        if (data && Object.keys(data).length) {
          Event.emit("analytics.virtualPage", data, customData);
        }
      }
      /**
       * Send Analytics data
       *
       * @param {Object} data analytics data
       */
      sendAnalytics(data) {
        if (!data || !Object.keys(data).length) {
          return;
        }
        const eventsData = data.events || [data];
        eventsData.forEach((eventData) => {
          switch (eventData.eventType) {
            // TO DO, move promoImpression, and potentially productClick promotionClick here
            case "productImpression":
              this.sendProductImpressionToAnalytics();
              break;
            case "productClick":
              this.sendProductClickToAnalytics();
              break;
            default:
              Event.emit("analytics.event", eventData);
          }
        });
      }
      /**
       * Send Custom Analytics data
       *
       * @param {HTMLElement} target HTML element to use as a source of custom analytics data
       */
      sendCustomAnalytics(target) {
        const { customAnalytics } = target.dataset;
        if (customAnalytics) {
          Event.emit("analytics.event", JSON.parse(customAnalytics));
        }
      }
      /**
       * Merge static and dynamic analytics and return
       * @returns {Object} promice, full analytics on resolve
       */
      getProductAnalytics() {
        const waitingPoint = this.element.querySelector(
          "[data-analytics-wait]",
        );
        if (waitingPoint) {
          this.dynamicAnalyticsCallback = null;
          Registry.registerElement(waitingPoint);
          return new Promise((resolve) => {
            this.dynamicAnalyticsCallback = (e) => {
              const dynamicAnalytics = e.detail.analytics;
              if (
                this.analytics &&
                this.analytics.products &&
                dynamicAnalytics &&
                dynamicAnalytics.product
              ) {
                this.analytics.products.forEach((product) => {
                  if (dynamicAnalytics.product.pid === product.pid) {
                    Object.assign(product, dynamicAnalytics.product);
                  }
                });
              }
              e.stopPropagation();
              resolve(this.analytics);
            };
          });
        }
        return Promise.resolve(this.analytics);
      }
      /**
       * Gets index data
       * @return {string} index data
       */
      getIndex() {
        const indexElement =
          this.selectors.indexElement ||
          (this.element.hasAttribute("data-index") && this.element) ||
          (this.element.parentElement.hasAttribute("data-index") &&
            this.element.parentElement) ||
          null;
        return indexElement && indexElement.getAttribute("data-index");
      }
      // --- functions below concerns promotions ----
      /**
       * Gets impression creative
       * @return {String} creative value
       */
      getPromotionCreative() {
        const sourceElt =
          this.element.closest("[data-js-layout]") ||
          this.element.closest("[data-js-container]") ||
          this.element;
        const containerEltAnalytics = this.getAnalyticsAttributeData(sourceElt);
        return (
          (containerEltAnalytics &&
            containerEltAnalytics.promoObject &&
            containerEltAnalytics.promoObject.creative) ||
          "banner"
        );
      }
      /**
       * Gets impression position
       * @return {String} position value
       */
      getPromotionPosition() {
        const index = this.getIndex();
        return `slot${this.analytics.promoObject.position || (index && index + 1) || 1}`;
      }
      /**
       * Sends Promo Impressions to analytics
       */
      sendPromoImpressionsToAnalytics() {
        if (
          this.analytics &&
          this.analytics.promoObject &&
          !this.element.hasAttribute("data-is-duplicate")
        ) {
          const position = this.getPromotionPosition();
          const creative = this.getPromotionCreative();
          const name = this.analytics.promoObject.name || "";
          Event.emit("analytics.event", {
            eventType: "promoImpression",
            event: "nievent",
            action: "Promotion Impressions",
            label: "Promotion Impressions",
            extraData: {
              event_name: "view_promotion",
            },
            promoObject: {
              id: this.analytics.promoObject.id,
              name:
                this.analytics.promoObject.id === "video"
                  ? name
                  : name.toLowerCase(),
              creative: creative ? creative.toLowerCase() : "",
              position,
            },
            ecommerce: {},
          });
          this.element.dataset.tracked = true;
        }
      }
      /**
       * Sets index data to the child elements
       * @param {Object} container container element
       */
      setIndexesForContainer(container) {
        if (!container) {
          return;
        }
        let childrenToIndex = container.querySelectorAll(
          "[data-js-product-item]",
        );
        if (childrenToIndex.length === 0) {
          childrenToIndex = container.children;
        }
        Array.from(childrenToIndex).forEach((element, index) => {
          if (!element.hasAttribute("data-index")) {
            element.setAttribute("data-index", index);
          }
        });
      }
      /**
       * Sends Promo Click data to analytics
       * @param {Object} data analytics data
       */
      sendPromoClickToAnalytics(data = this.analytics) {
        if (data.promoObject) {
          const position = this.getPromotionPosition();
          const creative = this.getPromotionCreative();
          const name = data.promoObject.name || "";
          const eventLabel = `${data.promoObject.id === "video" ? name : name.toLowerCase()}::${data.promoObject.id}`;
          Event.emit("analytics.event", {
            event: "promotionClick",
            action: "Promotion Click",
            label: eventLabel,
            extraData: {
              event_name: "select_promotion",
            },
            ecommerce: {
              promoClick: {
                promotions: [
                  {
                    id: data.promoObject.id,
                    name:
                      data.promoObject.id === "video"
                        ? name
                        : name.toLowerCase(),
                    creative: creative ? creative.toLowerCase() : "",
                    position,
                  },
                ],
              },
            },
          });
        }
      }
      // --- functions below concerns products ----
      /**
       * check if component has product analytics
       * @returns {boolean} - result
       */
      hasProductAnalytics() {
        return (
          this.analytics &&
          this.analytics.products &&
          this.analytics.products.length > 0 &&
          !this.element.hasAttribute("data-is-duplicated")
        );
      }
      /**
       * Send product impression
       */
      sendProductImpressionToAnalytics() {
        if (!this.hasProductAnalytics()) {
          return;
        }
        Event.emit("analytics.event", {
          eventType: "productImpression",
          action: "Product Impressions",
          extraData: { event_name: "view_item_list" },
          ecommerce: {},
          uniqueImpression: this.analytics.uniqueImpression,
          sfb2ccAnalyticsData: this.getSfb2cAnalyticsData(),
          allowMultipleImpression:
            this.options && this.options.allowMultipleImpression,
          uniqueImpressionPerMaster:
            this.options && this.options.uniqueImpressionPerMaster,
          product: this.getEnrichedProductsData(),
        });
        this.element.dataset.tracked = true;
      }
      /**
       * Send product click event
       * @param {event} e event data
       */
      sendProductClickToAnalytics(e) {
        if (
          (!e || !e.target.matches("[data-js-swatch]")) &&
          this.analytics &&
          this.analytics.products &&
          this.analytics.products.length
        ) {
          const tilesContainer = this.element.closest("[data-js-container]");
          const tilesContainerAnalytics =
            this.getAnalyticsAttributeData(tilesContainer);
          const eventLabel =
            this.getEcommerceEventLabel(this.analytics.products) ||
            "Product Click";
          this.analytics.products.forEach((product) => {
            delete product.placement;
          });
          Event.emit("analytics.event", {
            eventType: "productClick",
            event: "productClick",
            category: "Ecommerce",
            action: "Product Click",
            label: eventLabel,
            extraData: {
              event_name: "select_item",
            },
            ecommerce: {
              click: {
                actionField: {
                  list: tilesContainerAnalytics
                    ? tilesContainerAnalytics.placement
                    : "",
                },
                products: this.analytics.products,
              },
            },
          });
          this.sendCustomAnalytics(e.currentTarget);
        }
      }
      /**
       * Gets the Enhanced Ecommerce event label, used in events like Product Click, Product Detail, Add/Remove from Cart
       * @param {Array} products array
       * @return {String} event label value
       */
      getEcommerceEventLabel(products) {
        if (!products || !products.length) {
          return "";
        }
        const productsType = this.getProductsType(products);
        const labelValues = [];
        if (productsType === "standardProductType") {
          labelValues.push(products[0].name && products[0].name.toLowerCase());
          labelValues.push(products[0].id);
        } else if (productsType === "bundleProductType") {
          labelValues.push(products[0].id);
        } else if (
          productsType === "setProductType" ||
          productsType === "nonSetProductType"
        ) {
          products.forEach((product) => {
            labelValues.push(product.id);
          });
        }
        return labelValues.join("::");
      }
      /**
       * Gets the type of products, as in standard type or bundle type or product set type
       * or possibly a different type if conditions are not met
       * @param {Array} products array
       * @return {String} type of the products
       */
      getProductsType(products) {
        const productsCount = products.length;
        if (productsCount === 1 && !products[0].isBundle) {
          return "standardProductType";
        }
        if (productsCount === 1 && products[0].isBundle) {
          return "bundleProductType";
        }
        if (productsCount > 1) {
          const isSubProductNotPartOfSet = products.some(
            (product) => !product.isProductSet && !product.productSetId,
          );
          return (
            (!isSubProductNotPartOfSet && "setProductType") ||
            "nonSetProductType"
          );
        }
        return "";
      }
      /**
       * Gets impression key
       * @return {String} position value
       */
      getProductImpressionKey() {
        const impressionKeyContainer = this.element.closest(
          "[data-js-impression-key]",
        );
        return (
          impressionKeyContainer &&
          impressionKeyContainer.getAttribute("data-js-impression-key")
        );
      }
      /**
       * Check is VTO activated for product
       * @param {String} pid product id
       * @returns {Boolean} is VTO activated
       */
      isVTOActivated(pid) {
        const store = modifaceStore.get();
        return !!(
          store &&
          store.mode !== "consultation" &&
          (store.isVTOActivated ||
            (store.vtoActivationHistory && store.vtoActivationHistory[pid]))
        );
      }
      /**
       * get sfb2ccAnalyticsData
       * @returns {Object} sfb2ccAnalyticsData
       */
      getSfb2cAnalyticsData() {
        const tilesContainer = this.element.closest("[data-js-container]");
        const tilesContainerAnalytics =
          this.getAnalyticsAttributeData(tilesContainer);
        const placement =
          tilesContainerAnalytics && tilesContainerAnalytics.placement;
        const sfb2cc =
          tilesContainerAnalytics && tilesContainerAnalytics.sfb2cc;
        let sfb2ccAnalyticsData = {
          pid: "",
          sku: "",
          impressionType: "none",
          recommenderName: "",
          placement: placement ? placement.toLowerCase() : "",
          sfb2cc,
        };
        if (this.analytics.sfb2cc) {
          sfb2ccAnalyticsData = deepMerge(
            sfb2ccAnalyticsData,
            this.analytics.sfb2cc,
          );
        }
        return sfb2ccAnalyticsData;
      }
      /**
       * get product placement
       * @param {object} product - productAnalytics
       * @param {Object} tilesContainerAnalytics - analytics object recovered container element
       * @returns {string} - placement
       */
      getProductPlacement(product, tilesContainerAnalytics) {
        return (
          product.placement ||
          (tilesContainerAnalytics &&
            tilesContainerAnalytics.placement &&
            tilesContainerAnalytics.placement.toLowerCase()) ||
          ""
        );
      }
      /**
       * get position of product in its container
       * @param {HTMLElement} tilesContainer - container element
       * @returns {Number} - position
       */
      getProductPosition(tilesContainer) {
        let index = this.getIndex();
        if (!index) {
          this.setIndexesForContainer(tilesContainer);
          index = this.getIndex();
        }
        return +index + 1;
      }
      /**
       * get recommnendationProvider from container element
       * @param {Object} tilesContainerAnalytics - analytics objectr recovered container element
       * @returns {string} recommendation provider
       */
      getProductRecommendationProvider(tilesContainerAnalytics) {
        return (
          (tilesContainerAnalytics &&
            tilesContainerAnalytics.recommendationsProvider &&
            tilesContainerAnalytics.recommendationsProvider.toLowerCase()) ||
          ""
        );
      }
      /**
       * get products data enriched with conatiner analtyics
       * @returns {Object} -
       */
      getEnrichedProductsData() {
        const tilesContainer = this.element.closest("[data-js-container]");
        const tilesContainerAnalytics =
          this.getAnalyticsAttributeData(tilesContainer);
        return this.analytics.products.map((product) => {
          product.placement = this.getProductPlacement(
            product,
            tilesContainerAnalytics,
          );
          product.position = this.getProductPosition(tilesContainer);
          product.recommendationsProvider =
            this.getProductRecommendationProvider(tilesContainerAnalytics);
          if (this.isVTOActivated(this.options && this.options.pid)) {
            product.vtoState = "activated";
          }
          if (this.getProductImpressionKey()) {
            product.impressionKey = this.getProductImpressionKey();
          }
          return product;
        });
      }
      /**
       * Destroy is called automatically after the component is being removed from the DOM
       * You must always destroy the listeners attached to an element to avoid any memory leaks
       */
      destroy() {
        if (this.analyticsObserver) {
          this.analyticsObserver.unobserve(this.element);
          this.analyticsObserver.disconnect();
        }
        super.destroy();
      }
    },
);
