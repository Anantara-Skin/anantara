import Component from "core/Component";
import { Event } from "services/EventEmitter";
/**
 * This is a description of the OrientationMessage constructor function.
 * @class
 * @classdesc OrientationMessage component handles show/hide events to show/hide orientation message on demand
 * @extends Component
 */
export default class OrientationMessage extends Component {
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    Event.on("orientationmessage.show", this.onShow, this);
    Event.on("orientationmessage.hide", this.onHide, this);
  }
  /**
   * Show orientation message when related event fired
   */
  onShow() {
    this.element.classList.remove("h-hidden");
  }
  /**
   * Show orientation message when related event fired
   */
  onHide() {
    this.element.classList.add("h-hidden");
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    Event.removeListener("orientationmessage.show", this.onShow, this);
    Event.removeListener("orientationmessage.hide", this.onHide, this);
  }
}
