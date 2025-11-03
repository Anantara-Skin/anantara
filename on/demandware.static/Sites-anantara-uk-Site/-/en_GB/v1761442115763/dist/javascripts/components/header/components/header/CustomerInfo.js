import Component from "core/Component";
import { Event } from "services/EventEmitter";
import { on, off } from "toolbox/event";
import { deepMerge } from "toolbox/deepMerge";
import CrossRequestStorage from "services/CrossRequestStorage";
/**
 * This is a description of the CustomerInfo constructor function.
 * @class
 * @classdesc This is a description of the CustomerInfo class.
 * @extends Component
 */
export default class CustomerInfo extends Component {
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
          section: "header",
          id: "headercustomerinfo",
          reloadData: {
            section: "header",
            id: "headercustomerinfo",
          },
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
    CrossRequestStorage.processDelayedActionForSocialLogin();
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonymous function
   */
  bindEvents() {
    Event.on("registration.success", this.reload.bind(this));
    Event.on("login.success", this.reload.bind(this));
    on("click", this.element, this.onClick.bind(this));
  }
  /**
   * Click event handler
   */
  onClick() {
    Event.emit("analytics.event", {
      category: "header",
      action: "select",
      label: "account",
      extraData: {
        event_name: "header_click",
        cta_name: "account",
      },
    });
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    Event.removeListener("registration.success", this.reload.bind(this));
    Event.removeListener("login.success", this.reload.bind(this));
    off("click", this.element);
  }
}
