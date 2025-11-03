import Form from "components/global/Form";
import { deepMerge } from "toolbox/deepMerge";
/**
 * This is a description of the GeoRedirectForm constructor function.
 * @class
 * @classdesc This component allows the selected country to be changed in the select element, without disabling caching.
 * @extends Component
 */
export default class GeoRedirectForm extends Form {
  /**
   * Constructor of the class that mainly merge the options of the components
   * @param {HTMLElement} element HTMLElement of the component
   * @param {object} options options that belongs to the component
   */
  constructor(element, options = {}) {
    super(
      element,
      deepMerge(
        {
          country: "",
        },
        options,
      ),
    );
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    super.initCache();
    if (this.options.country) {
      this.selectors.selectedOption = this.element.querySelector(
        '[selected="selected"]',
      );
      this.selectors.currentCountryOption = this.element.querySelector(
        `[data-js-country="${this.options.country}"]`,
      );
    }
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    super.afterInit();
    if (this.selectors.selectedOption) {
      this.selectors.selectedOption.removeAttribute("selected");
    }
    if (this.selectors.currentCountryOption) {
      this.selectors.currentCountryOption.setAttribute("selected", "selected");
    }
  }
}
