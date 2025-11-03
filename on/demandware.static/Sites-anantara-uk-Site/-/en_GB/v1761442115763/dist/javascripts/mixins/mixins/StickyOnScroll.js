import { Mixin } from "core/mixwith";
import { deepMerge } from "toolbox/deepMerge";
/**
 * A mixin that adds sticky behavior to a component when scrolling.
 * It makes the component sticky when the bottom of the component's container is at or above the top of the viewport.
 * This is useful for components that need to remain visible while the user scrolls through content.
 */
export default Mixin(
  (superclass) =>
    class extends superclass {
      /**
       * @constructor
       * @param {HTMLElement} element HTMLElement of the component
       * @param {Object} options That belongs to the component
       */
      constructor(element, options = {}) {
        super(
          element,
          deepMerge(
            {
              _scrollable: true,
              stickyContainerClass: null, // class of the container that will be sticky
              isStickyOnScroll: false, // if true, the component will be sticky on scroll
            },
            options,
          ),
        );
      }
      /**
       * Initializes the component. It sets up the event listeners for scroll events and initializes the cache.
       */
      initCache() {
        super.initCache();
        if (
          this.options.stickyContainerClass &&
          this.options.isStickyOnScroll
        ) {
          this.selectors.stickyContainer = this.element.closest(
            this.options.stickyContainerClass,
          );
        }
      }
      /**
       * The listener for scroll events. It checks if the sticky container is in view and adds/removes the sticky class accordingly
       * This method is called when the user scrolls the page.
       */
      onScroll() {
        if (this.selectors.stickyContainer && this.options.isStickyOnScroll) {
          const refinementsCtaRect =
            this.selectors.stickyContainer.getBoundingClientRect();
          if (refinementsCtaRect.bottom <= 0) {
            this.selectors.stickyContainer.classList.add("m-sticky");
          } else {
            this.selectors.stickyContainer.classList.remove("m-sticky");
          }
        }
      }
    },
);
