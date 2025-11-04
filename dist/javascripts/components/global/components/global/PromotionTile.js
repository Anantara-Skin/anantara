import Component from "core/Component";
import { on, off } from "toolbox/event";
import { Event } from "services/EventEmitter";
import DataLayer from "services/DataLayer";
import { mix } from "core/mixwith";
import AnalyticsMixin from "mixins/Analytics";
import { deepMerge } from "toolbox/deepMerge";
/**
 * This is a description of the PromotionTile constructor function.
 * @class
 * @classdesc This is a description of the PromotionTile class.
 * @extends Component
 */
export default class PromotionTile extends mix(Component).with(AnalyticsMixin) {
  /**
   * Called after component initialization and setup service urls
   */
  afterInit() {
    this.sendPromoImpressionsToAnalytics();
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    this.selectors.links = this.element.hasAttribute("data-is-link")
      ? [this.element]
      : Array.from(this.element.querySelectorAll("[data-is-link]"));
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    this.selectors.links.forEach((element) =>
      on("click.promotiontile", element, this.onLinkClick.bind(this)),
    );
  }
  /**
   * Link Click event handler
   * @param {Object} e event object
   */
  onLinkClick(e) {
    const { target } = e;
    if (this.analytics) {
      if (this.analytics.event) {
        const index = this.options.setPosition && this.getIndex();
        if (index) {
          const position = +index + 1;
          this.analytics.label = `${position}::${this.analytics.label}`;
          this.analytics.extraData.position = position;
        }
        const dataLayer = DataLayer.getData();
        this.analytics.category = this.analytics.category.replace(
          /{{pageType}}/i,
          dataLayer.page && dataLayer.page.id,
        );
        Event.emit("analytics.event", this.analytics);
      } else if (this.analytics.promoObject) {
        const data = deepMerge.all([
          {},
          this.analytics,
          this.getAnalyticsAttributeData(target) || {},
        ]);
        this.sendPromoClickToAnalytics(data);
      }
    }
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    this.selectors.links.forEach((element) => off("click", element));
  }
}
