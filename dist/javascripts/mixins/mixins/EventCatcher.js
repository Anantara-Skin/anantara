import { Mixin } from "core/mixwith";
import { deepMerge } from "toolbox/deepMerge";
import { ajax } from "toolbox/ajax";
import { Event } from "services/EventEmitter";
import { getCSRF } from "toolbox/csrf";
/**
 * A mixin that catch the events, make an Ajax POST request and emit the events from the response.
 */
export default Mixin(
  (superclass) =>
    class extends superclass {
      /**
       * @constructor
       * @param {HTMLElement} element HTMLElement of the component
       * @param {Object} options That belongs to the component
       * @param {Object} store Store
       */
      constructor(element, options = {}, store) {
        super(
          element,
          deepMerge(
            {
              eventMap: {},
            },
            options,
          ),
          store,
        );
      }
      /**
       * Should contain only event listeners and nothing else
       * All the event handlers should be into a separated function. No usage of anonyous function
       */
      bindEvents() {
        super.bindEvents();
        Object.keys(this.options.eventMap || {}).forEach((eventName) => {
          this.element.addEventListener(eventName, this.onAjaxCall.bind(this));
        });
      }
      /**
       * Ajax call
       * @param {Object} eventData - event data
       */
      async onAjaxCall(eventData) {
        const config = this.options.eventMap[eventData.type];
        let params;
        let url;
        if (typeof config === "string") {
          url = config;
        } else {
          ({ params, url } = config);
        }
        const data = Object.assign(
          {
            eventName: eventData.type,
          },
          eventData.detail,
          params,
        );
        const requestBody = {
          data: JSON.stringify(data),
        };
        const csrf = await getCSRF();
        if (csrf) {
          requestBody[csrf.name] = csrf.token;
        }
        ajax(url, {
          method: "POST",
          body: requestBody,
        })
          .then((response) => {
            (response.fireEvents || []).forEach((eventName) => {
              Event.emit(eventName);
            });
          })
          .catch(() => {});
      }
      /**
       * Destroy is called automatically after the component is being removed from the DOM
       * You must always destroy the listeners attached to an element to avoid any memory leaks
       */
      destroy() {
        Object.keys(this.options.eventMap || {}).forEach((eventName) => {
          this.element.removeEventListener(
            eventName,
            this.onAjaxCall.bind(this),
          );
        });
      }
    },
);
