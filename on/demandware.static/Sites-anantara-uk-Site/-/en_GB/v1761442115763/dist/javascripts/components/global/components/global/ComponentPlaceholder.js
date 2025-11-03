import Component from "core/Component";
import { deepMerge } from "toolbox/deepMerge";
import { Event } from "services/EventEmitter";
/**
 * This is a description of the ComponentPlaceholder constructor function.
 * @class
 * @classdesc This is a description of the ComponentPlaceholder class. (must be edited)
 * @extends Component
 */
export default class ComponentPlaceholder extends Component {
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
          dataModelId: null,
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
    if (this.analytics && this.analytics.init) {
      Event.emit("analytics.event", this.analytics.init);
    }
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    super.destroy();
  }
}
