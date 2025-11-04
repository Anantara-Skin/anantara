import Component from "core/Component";
import { deepMerge } from "toolbox/deepMerge";
import { cookie } from "toolbox/cookie";
import { Event } from "services/EventEmitter";
/**
 * This is a description of the GeoRedirect constructor function.
 * @class
 * @classdesc This is a description of the GeoRedirect class
 * @extends Component
 */
export default class ModalAutoTrigger extends Component {
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
          modalOptions: {
            cssPath: null,
            classNames: {
              container: [],
            },
          },
          disableModal: false,
          cookieID: null,
          cookieExpireInDays: 365,
          disableParamsList: null,
          displayDelay: 0, // display delay by {displayDelay} ms
          displayDelayBeforeScrollTreshold: 0, // scroll treshold to display the modal
          setCookieOnModalOpen: false, // the need to set cookie on opening the modal
          disableModalIfCookieExists: false, // the need to disable modal if cookie exists
          _scrollable: true,
          reloadEvents: [],
        },
        options,
      ),
    );
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.lastScrollTop = 0;
    this.state.isShown = false;
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonymous function
   */
  bindEvents() {
    (this.options.reloadEvents || []).forEach((event) => {
      Event.on(event, this.onReloadModal, this);
    });
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    const disableModal = this.getModalDisabled();
    this.state.lastScrollTop =
      window.scrollY || document.documentElement.scrollTop;
    if (!disableModal) {
      const { displayDelay, displayDelayBeforeScrollTreshold } = this.options;
      if (displayDelay) {
        setTimeout(() => this.showModal(), displayDelay);
      } else if (!displayDelayBeforeScrollTreshold) {
        this.showModal();
      }
    }
  }
  /**
   * Handlers to onscroll event
   */
  onScroll() {
    const { displayDelay, displayDelayBeforeScrollTreshold } = this.options;
    if (
      !this.state.isShown &&
      !displayDelay &&
      displayDelayBeforeScrollTreshold &&
      !this.getModalDisabled()
    ) {
      this.handleDisplay();
    }
  }
  /**
   * Get modal disabled
   * @returns {Boolean} the modal disabled
   */
  getModalDisabled() {
    if (
      this.options.disableModal ||
      (this.options.disableModalIfCookieExists &&
        this.options.cookieID &&
        cookie.getCookie(this.options.cookieID))
    ) {
      return true;
    }
    let disableModal = false;
    if (this.options.disableParamsList) {
      const url = new URL(document.location);
      disableModal = this.options.disableParamsList.some(
        (param) => url.search.indexOf(param) > -1,
      );
    }
    return disableModal;
  }
  /**
   * Show/Hide toaster based on scroll direction
   */
  handleDisplay() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = scrollTop - this.state.lastScrollTop;
    const isScrollDown = scrollTop > this.state.lastScrollTop;
    if (isScrollDown) {
      if (scrollHeight >= this.options.displayDelayBeforeScrollTreshold) {
        this.showModal();
      }
    } else {
      this.state.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }
  }
  /**
   * Show modal, if customer's locale is different from current one
   */
  showModal() {
    if (
      this.options.modalOptions &&
      (this.options.modalOptions.contentUrl ||
        this.options.modalOptions.content)
    ) {
      const options = this.options.modalOptions;
      options.afterClose = this.afterClose.bind(this);
      this.state.isShown = true;
      if (
        this.options.setCookieOnModalOpen &&
        this.options.cookieID &&
        !cookie.getCookie(this.options.cookieID)
      ) {
        options.beforeOpen = () => {
          cookie.setCookie(
            this.options.cookieID,
            true,
            this.options.cookieExpireInDays,
          );
        };
      }
      Event.emit("modal.open", { options });
    }
  }
  /**
   * Reload component
   */
  onReloadModal() {
    this.reload();
  }
  /**
   * Modal afterClose() function
   */
  afterClose() {
    if (this.options.cookieID && !cookie.getCookie(this.options.cookieID)) {
      cookie.setCookie(
        this.options.cookieID,
        true,
        this.options.cookieExpireInDays,
      );
    }
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    (this.options.reloadEvents || []).forEach((event) => {
      Event.removeListener(event, this.onReloadModal, this);
    });
  }
}
