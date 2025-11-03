import Component from "core/Component";
import { on, off, trigger } from "toolbox/event";
import { deepMerge } from "toolbox/deepMerge";
/**
 * This is a description of the VariationsDropdown constructor function.
 * @class
 * @classdesc This is a description of the VariationsDropdown class.
 * @extends Component
 */
export default class VariationsDropdown extends Component {
  /**
   * @typedef {Object} optionsObject
   * @property {String} dataModelId - the data model name needed to render the component on client side.
   */
  /**
   * @constructor
   * @param {HTMLElement} element Component DOM node
   * @param {optionsObject} options - Component Options
   */
  constructor(element, options = {}) {
    super(
      element,
      deepMerge(
        {
          templateName: "product/variationsdropdown",
          dataModelId: "variationsdropdown",
          events: {
            variationUpdate: "product.variation.update",
          },
          reloadOnChange: false,
        },
        options,
      ),
    );
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    this.selectors.selectedOption =
      this.element.querySelector("option[selected]");
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.loading = false;
    this.state.pid = this.getSelectedVariationId();
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonymous function
   */
  bindEvents() {
    on("change", this.element, (e) => this.onVariationSelected(e));
    on("product.updated", this.element, this.onProductUpdated.bind(this));
  }
  /**
   * Get ID of selected variation
   *
   * @returns {Promise} object
   */
  getSelectedVariationId() {
    return this.selectors.selectedOption
      ? this.selectors.selectedOption.getAttribute("data-js-pid")
      : "";
  }
  /**
   * Event handler for variation selection dropdown
   *
   * @param {Object} e - Event object
   * @returns {Boolean} true or false
   */
  onVariationSelected(e) {
    e.preventDefault();
    const url = e.target.value;
    const hostRegExp =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g; // Url checker with or without http:// or https://
    if (url && hostRegExp.test(url)) {
      const select = e.target;
      const previousPid = this.state.pid;
      const pid = select.options
        ? select.options[select.selectedIndex].getAttribute("data-js-pid")
        : "";
      this.state.loading = true;
      this.state.pid = pid;
      select.blur();
      trigger(this.options.events.variationUpdate, this.element, {
        url,
        pid,
        source: this.id,
        bubbles: true,
        previousPid,
        variationAttributeId: this.options.variationAttributeId,
        displayValue: select.options
          ? select.options[select.selectedIndex].text.trim()
          : "",
      });
      return true;
    }
    return false;
  }
  /**
   * Update variation attributes list when product updated
   *
   * @param {Object} e - event data
   */
  onProductUpdated(e) {
    if (!e || !e.detail) {
      return;
    }
    // do not update dropdown if this component is an initiator of product update.
    if (e.detail.source === this.id && !this.options.reloadOnChange) {
      return;
    }
    const { data } = e.detail;
    if (!data) {
      return;
    }
    const model = this.getModel(data);
    if (model) {
      this.render(model);
    }
  }
  /**
   * Find model for swatch by dataModelId
   * @param {Object} data array of components models
   * @returns {Object|null} model object
   */
  getModel(data) {
    const { containerDataModelId } = this.options;
    if (
      data[containerDataModelId] &&
      data[containerDataModelId][this.options.dataModelId]
    ) {
      return data[containerDataModelId][this.options.dataModelId];
    }
    if (data[this.options.dataModelId]) {
      return data[this.options.dataModelId];
    }
    return null;
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    off(this.element);
    off("product.updated", this.element);
  }
}
