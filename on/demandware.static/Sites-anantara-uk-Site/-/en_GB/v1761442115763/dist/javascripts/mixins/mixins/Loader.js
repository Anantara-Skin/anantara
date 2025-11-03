import { Mixin } from "core/mixwith";
import { deepMerge } from "toolbox/deepMerge";
/**
 * A mixin that add loading feature to any component.
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
              classNames: {
                loading: "m-loading",
                overlayLoading: "c-loader",
              },
              loadTime: 200, // Show loader after 'loadTime' value
              // if the loader is present for more than N ms the loading status will be announced to screen reader
              loadingStatusMessageDelay: 1000,
            },
            options,
          ),
          store,
        );
      }
      /**
       * Init the different state of the component
       * It helps to avoid heavy DOM manipulation
       */
      initState() {
        super.initState();
        this.state.isLoading = false;
        this.state.overlay = null;
        this.state.loaderTimeout = null;
      }
      /**
       * Add the loader
       * @param {Object} element - HTML Node
       * @param {Object} options -loader options
       */
      addLoader(element, options) {
        if (this.state.isLoading) {
          return;
        }
        this.state.isLoading = true;
        const loadingClass = this.options.classNames.loading;
        this.state.loaderTimeout = setTimeout(() => {
          if (element) {
            element.classList.add(loadingClass);
          } else {
            this.element.classList.add(loadingClass);
          }
        }, this.options.loadTime);
        if (options && options.overlay) {
          this.addOverlayLoader(
            element,
            null,
            Object.assign(
              { spinnerInContainer: true },
              options.overlayOptions || {},
            ),
          );
        }
        if (this.options.statusMessage) {
          this.state.statusMessageTimeout = setTimeout(() => {
            this.updateStatusMessage(this.options.statusMessage);
          }, this.options.loadingStatusMessageDelay);
        }
      }
      /**
       * Remove the loader
       * @param {Object} element - HTML Node
       */
      removeLoader(element) {
        if (!this.state) {
          return;
        }
        if (!this.state.isLoading) {
          return;
        }
        if (this.state.loaderTimeout) {
          clearTimeout(this.state.loaderTimeout);
        }
        if (this.state.statusMessageTimeout) {
          clearTimeout(this.state.statusMessageTimeout);
        }
        this.state.isLoading = false;
        const container = element || this.element;
        if (this.state.overlay) {
          if (container.contains(this.state.overlay)) {
            container.removeChild(this.state.overlay);
          }
          container.style.position = null;
          this.state.overlay = null;
        }
        container.classList.remove(this.options.classNames.loading);
      }
      /**
       * Add overlay with loader
       * @param {HTMLElement} target HTMLElement of the target, which should be covered with overlay,
       *                             if not provided, caller element is used
       * @param {String} className for overlay loader, if not provided default class names are used
       * @param {Object} options loader options  spinnerInContainer to center it in the container not the in the full page
       */
      addOverlayLoader(target, className, options = {}) {
        if (!target) {
          target = this.element;
        }
        if (!this.state.overlay) {
          this.state.overlay = document.createElement("div");
          this.state.overlay.className =
            className || this.options.classNames.overlayLoading;
          if (!options.spinnerInContainer) {
            this.state.overlay.classList.add("m-icon-fixed");
          }
        }
        target.appendChild(this.state.overlay);
        target.style.position = "relative";
      }
      /**
       * Update status message
       * @param {String|Boolean} status - new status, if a value is boolean then default processing or finished message uses
       */
      updateStatusMessage(status) {
        this.selectors.statusMessage = document.querySelector(
          "[data-js-global-status-message]",
        );
        if (this.selectors.statusMessage) {
          if (typeof status === "boolean") {
            status = this.selectors.statusMessage.getAttribute(
              status ? "data-processing-text" : "data-finished-text",
            );
          }
          if (this.statusMessageTimer) {
            clearTimeout(this.statusMessageTimer);
          }
          const { statusMessage } = this.selectors;
          statusMessage.innerHTML = status;
          this.statusMessageTimer = setTimeout(() => {
            statusMessage.innerHTML = "";
          }, 5000);
        }
      }
    },
);
