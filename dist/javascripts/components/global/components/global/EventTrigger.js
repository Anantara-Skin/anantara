/* eslint complexity: off */
import Component from "core/Component";
import { mix } from "core/mixwith";
import { Event } from "services/EventEmitter";
import { on, off, trigger } from "toolbox/event";
import { deepMerge } from "toolbox/deepMerge";
import AnalyticsMixin from "mixins/Analytics";
import Accessibility from "mixins/Accessibility";
import StickyMixin from "mixins/StickyOnScroll";
import EventCatcherMixin from "mixins/EventCatcher";
/**
 * This is a description of the EventTrigger constructor function.
 * @class
 * @classdesc This is a description of the EventTrigger class.
 * @extends Component
 */
export default class EventTrigger extends mix(Component).with(
  AnalyticsMixin,
  Accessibility,
  EventCatcherMixin,
  StickyMixin,
) {
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
          trigger: "click",
          reloadEvent: null,
          reloadData: null,
          keyTriggerCode: ["Enter", " "],
          event: null,
          data: {},
          isDelegate: false,
          isLocalEvent: false,
          skipEnablingAfterInit: false,
          trackFocusedElements: false, // if true, tracks focused elements
          triggerAfterInit: false, // if true, triggers the event after the component is initialized
          afterOpenEventName: null, // the name of the event to be triggered after the triggered element is open
          reloadDataValueKey: null, // key for reload event data attribute which will be sent as "data" during reload
          confirmationModal: null, // confirmation modal
          displayAnalytics: null, // display analytics
          updateEvent: null, // the event name during which the component will be updated
        },
        options,
        {
          arrayMerge: (target, source) => source,
        },
      ),
    );
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    super.bindEvents();
    on(this.options.trigger, this.element, this.onTriggerEvent.bind(this));
    if (this.options.keyTriggerCode.length > 0) {
      on("keydown", this.element, this.onKeyDown.bind(this));
    }
    if (this.options.isCustomReloadEvent) {
      Event.on(this.options.reloadEvent, this.onCustomReloadEvent, this);
    } else if (this.options.reloadEvent && this.options.reloadData) {
      on(this.options.reloadEvent, this.element, this.onReloadEvent.bind(this));
    }
    if (this.options.updateEvent) {
      on(this.options.updateEvent, this.element, this.onUpdateEvent.bind(this));
    }
  }
  /**
   * @description Function handler called after the designated trigger event is fired.
   * @param {Object} event - handler event
   */
  onTrigger(event) {
    const target = this.getTargetElement(event.target);
    if (target) {
      if (this.options.trackFocusedElements) {
        this.saveLastFocusState();
      }
      if (this.options.event) {
        if (
          this.options.afterOpenEventName &&
          this.options.data &&
          this.options.data.options
        ) {
          this.options.data.options.afterOpen = () => {
            Event.emit(this.options.afterOpenEventName);
          };
        }
        if (this.options.isLocalEvent) {
          trigger(this.options.event, this.element, this.options.data);
        } else {
          Event.emit(this.options.event, this.options.data);
        }
      }
      if (!this.options.skipPreventDefault) {
        event.preventDefault();
      }
      if (this.options.stopPropagation) {
        event.stopPropagation();
      }
      const { isDelegate } = this.options;
      const { analytics } = this;
      setTimeout(() => {
        // Get data-analytics object from the target element
        let analyticsData;
        if (isDelegate) {
          // In case of delegation, we merge the root component analytics with the target analytics to
          // prevent duplicating the same object many times
          analyticsData = deepMerge(
            analytics || {},
            this.getAnalyticsAttributeData(target) || {},
          );
        } else if (analytics) {
          analyticsData = analytics;
        }
        this.sendAnalytics(analyticsData);
      }, 0);
    }
  }
  /**
   * @description Function handler calls the trigger event directly or via a confirmation modal.
   * @param {Object} event - handler event
   */
  onTriggerEvent(event) {
    const { confirmationModal } = this.options;
    if (!confirmationModal) {
      this.onTrigger(event);
    } else {
      confirmationModal.afterConfirm = this.onTrigger.bind(this, event);
      Event.emit("modal.open", { type: "Confirm", options: confirmationModal });
    }
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    if (this.options.trackFocusedElements) {
      this.restoreLastFocusState();
    }
    if (!this.options.skipEnablingAfterInit) {
      this.enableElement();
    }
    if (this.options.displayAnalytics && !this.options._lazyload) {
      this.sendAnalytics(this.options.displayAnalytics);
    }
    if (this.analytics && this.analytics.dynamic) {
      trigger("analytics.dynamic.update", this.element, {
        bubbles: true,
        analytics: this.analytics.dynamic,
      });
    }
    if (this.options.triggerAfterInit) {
      trigger(this.options.trigger, this.element, { cancelable: true });
    }
  }
  /**
   * Enable Element
   * Remove loading class and disabled attribute once EventTrigger is fully initialized
   */
  enableElement() {
    this.element.classList.remove("m-loading");
    this.element.removeAttribute("disabled");
  }
  /**
   * KeyDown event handler
   *
   * @param {Object} event Event object
   */
  onKeyDown(event) {
    if (this.options.keyTriggerCode.includes(event.key)) {
      this.onTrigger(event);
    }
  }
  /**
   * Update event handler
   * @param {Object} event event object
   */
  onReloadEvent(event) {
    if (!this.options.reloadDataValueKey) {
      return;
    }
    const data = event.detail[this.options.reloadDataValueKey];
    if (data !== undefined) {
      this.reload({ data });
    }
  }
  /**
   * Update event handler for custom reload of component
   */
  onCustomReloadEvent() {
    this.reload();
  }
  /**
   * @description Method to get event target comparing to required selector
   * @param {HTMLElement} target Event target element
   * @returns {Object} correct target element
   */
  getTargetElement(target) {
    return this.options.isDelegate
      ? target.closest("[data-js-trigger]")
      : this.element;
  }
  /**
   * Update component when update event triggered
   * @param {Object} e - event data
   */
  onUpdateEvent(e) {
    const model = e.detail.data && e.detail.data[this.options.dataModelId];
    if (model) {
      this.render(model);
    }
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    off(this.options.trigger, this.element);
    if (this.options.keyTriggerCode.length > 0) {
      off("keydown", this.element);
    }
    if (this.options.isCustomReloadEvent) {
      Event.off(this.options.reloadEvent, this.onCustomReloadEvent, this);
    }
    if (this.options.reloadEvent && this.options.reloadData) {
      off(this.options.reloadEvent, this.element);
    }
    if (this.options.updateEvent) {
      off(this.options.updateEvent, this.element);
    }
    super.destroy();
  }
}
