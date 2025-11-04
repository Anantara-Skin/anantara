import Component from "core/Component";
import { mix } from "core/mixwith";
import { Event } from "services/EventEmitter";
import { mediaQuery } from "toolbox/mediaQuery";
import Accessibility from "mixins/Accessibility";
/**
 * This is a description of the SkipLink constructor function.
 * @class
 * @classdesc A "Skip to content" component should be placed on each page to help keyboard users navigate the page.
 * This should be the first interactive element on the page.
 * This internal link will take the user directly to the main content.
 * @extends Component
 */
export default class SkipLink extends mix(Component).with(Accessibility) {
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    Event.on("header.sticky.enabled", this.onHeaderStickyEnabled, this);
    Event.on("header.sticky.disabled", this.onHeaderStickyDisabled, this);
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    super.saveOriginalTabIndex();
  }
  /**
   * Modify tabindex for consistent TAB navigation when the header becomes sticky
   */
  onHeaderStickyEnabled() {
    if (mediaQuery.is("xlarge")) {
      super.setAltTabIndex();
    }
  }
  /**
   * Restore tabindex for consistent TAB navigation when the header becomes unsticky
   */
  onHeaderStickyDisabled() {
    if (mediaQuery.is("xlarge")) {
      super.resetOriginalTabIndex(true);
    }
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    Event.removeListener("header.sticky.enabled", this.onShow, this);
    Event.removeListener("header.sticky.disabled", this.onHide, this);
  }
}
