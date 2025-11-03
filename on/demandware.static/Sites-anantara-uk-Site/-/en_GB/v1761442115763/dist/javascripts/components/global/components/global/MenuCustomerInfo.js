import Component from "core/Component";
import { deepMerge } from "toolbox/deepMerge";
import { Event } from "services/EventEmitter";
/**
 * This is a description of the MenuCustomerInfo constructor function.
 * @class
 * @classdesc This is a description of the MenuCustomerInfo class.
 * @extends HamburgerMenu
 */
export default class MenuCustomerInfo extends Component {
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
          menuSelector: "[data-js-usercustomermenu-menu]",
          reloadData: {
            section: "header",
            id: "menucustomerinfo",
          },
        },
        options,
      ),
    );
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    super.bindEvents();
    Event.on("registration.success", this.reload.bind(this));
    Event.on("login.success", this.reload.bind(this));
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    super.destroy();
    Event.removeListener("registration.success", this.reload.bind(this));
    Event.removeListener("login.success", this.reload.bind(this));
  }
}
