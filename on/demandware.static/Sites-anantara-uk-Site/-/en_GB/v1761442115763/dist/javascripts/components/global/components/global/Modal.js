/* eslint max-lines: off */
import Component from "core/Component";
import { mix } from "core/mixwith";
import { Event } from "services/EventEmitter";
import { ajax } from "toolbox/ajax";
import { on, off, trigger } from "toolbox/event";
import { animate, transition } from "toolbox/animate";
import { deepMerge } from "toolbox/deepMerge";
import { throttle } from "toolbox/throttle";
import Accessibility from "mixins/Accessibility";
import LoaderMixin from "mixins/Loader";
import DataLayer from "services/DataLayer";
// [ROLLUP]import loadjs from 'loadjs';
/**
 * This is a description of the Modal constructor function.
 * @class
 * @classdesc This is a description of the Modal class.
 * @extends Component
 */
export default class Modal extends mix(Component).with(
  Accessibility,
  LoaderMixin,
) {
  /**
   * Constructor of the class that mainly merge the options of the components
   * @param {HTMLElement} element HTMLElement of the component
   * @param {Object} options options that belongs to the component
   */
  constructor(element, options = {}) {
    element = element || document.createElement("div");
    super(
      element,
      deepMerge(
        {
          header: null, // HTML content for header
          footer: null, // HTML content for footer
          contentUrl: null,
          cssPath: null, // CSS path that needs to be loaded with the modal
          content: null, // If contentURL is used, this property will not be used
          closeLabel: DataLayer.get("text.close") || "Close", // Close button label
          showCloseButton: true,
          title: null,
          ariaLabel: "", // If defined, this copy will be used as the aria-label of a Modal to pronounce the modal title by screen reader. If empty, the text with the id="modal-title" will be pronounced
          closeTimeout: 0, // Time to wait (ms) before afterClose() is called
          escapeClose: true, // Set this to 'false' to disable closing when escape key pressed
          clickOutsideClose: true, // Click on the overlay will close the modal
          showOverlay: true, // Display the overlay behind the modal or not
          // If set, do not remove overlay after the modal is closed (e.g. if modal called from element with another overlay)
          keepOverlayOpened: false,
          afterCloseReload: false, // If set, reload current page after modal is closed
          afterCloseRedirectUrl: null, // If set, redirects to this URL after modal is closed
          enableStacking: false, // Activates the the stacking mode for previous modal that is already opened (old modal).
          isStackable: true, // Allow or deny stacking of current modal if the stacking mode is activated by the next modal
          openInPageDesignerEditor: true, // Specifies if modal can be opened in Page Designer Editor
          motion: {
            delay: null, // values from a list: 50, 200, 500, 1000 (can be changed in sass\01-utilities\aos\_core.scss)
            duration: null, // values from a list: 50, 200, 400, 1000 (can be changed in sass\01-utilities\aos\_core.scss)
            type: "fade-up", // types of motion (fade-down, fade-right, fade-left, etc.): https://github.com/michalsnik/aos#predefined-options
          },
          text: {
            accessibility: {
              processingStatusMessage: "",
              finishedStatusMessage: "",
            },
          },
          focusReturnElement: null,
          preventAfterModalOpenSecondaryAnalytics: false, // If set, modal will not send the analytics data a second time
          // Callbacks
          /**
           * It will execute right before the dialog is shown
           */
          beforeOpen() {
            // Callback method
          },
          /**
           * It will execute just after the dialog is shown
           */
          afterOpen() {
            // Callback method
          },
          /**
           * It will execute just after the dialog is shown
           */
          beforeClose() {
            // Callback method
          },
          /**
           * It will execute just after the dialog is closed
           */
          afterClose() {
            // Callback method
          },
          // ClassNames
          classNames: {
            container: [], // Added to the modal element
            title: "", // Added to the modal title element
            body: [], // Added to the modal body element
            wrapper: [], // Added to the modal wrapper element
            dialogOpen: "h-fade-in", // Added to dialog element classes after it is opened
            dialogClose: "h-fade-out", // Added to dialog element classes before it is closed
          },
        },
        options,
      ),
    );
    if (!this.element.classList.contains("c-modal")) {
      this._createLayout();
    }
    this.enableStacking = false;
    this.openPromise = null;
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.isOpened = false;
    this.state.isOpening = false;
    this.state.isClosing = false;
    this.state.initContent = false;
    this.state.isOverlayOpened = false;
    this.state.hasCustomCSS = !!this.options.cssPath;
    this.state.isCustomCSSLoaded = false;
    this.state.isCustomCSSLoading = false;
    this.state.isPreventRedirectAfterClose = false;
    this.state.isActive = true;
    this.state.isScrollEventAttached = false;
    this.state.isAnalyticsSent = false;
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    this.classes = {
      openedState: "m-opened",
      motion: "m-motion",
    };
    this.wrapper = null;
    this.header = null;
    this.content = null;
    this.innerContent = null;
    this.footer = null;
  }
  /**
   * modalClickHandler event handler
   *
   * @param {Object} event Event object
   */
  modalClickHandler(event) {
    const { target } = event;
    if (target.hasAttribute("data-js-prevent-redirect")) {
      this.state.isPreventRedirectAfterClose = true;
    }
    if (target.hasAttribute("data-js-close-modal")) {
      this.close(undefined, { closeActionTargetType: target.type });
    }
  }
  /**
   * Create Layout for the modal
   */
  _createLayout() {
    this.element.classList.add("c-modal");
    this.options.classNames.container.forEach((className) => {
      className.split(" ").map((item) => this.element.classList.add(item));
    });
    const closeButton =
      (this.options.showCloseButton &&
        `<button type="button" class="c-modal__close" data-js-close-modal>${this.options.closeLabel}</button>`) ||
      "";
    const template = `
            <div class="c-modal__wrapper ${this.options.classNames.wrapper.join(" ")}">
                <header class="c-modal__header"><h2 class="c-modal__title" id="modal-title"></h2></header>
                <div class="c-modal__body"></div>
                <footer class="c-modal__footer"></footer>
                ${closeButton}
            </div>
        `;
    this.element.innerHTML = template;
    this.wrapper = this.element.querySelector(".c-modal__wrapper");
    this.header = this.element.querySelector(".c-modal__header");
    this.title = this.element.querySelector(".c-modal__title");
    this.content = this.element.querySelector(".c-modal__body");
    this.footer = this.element.querySelector(".c-modal__footer");
    if (this.options.motion && DataLayer.get("uiconfig.motion.modalsEnabled")) {
      this.element.classList.add(this.classes.motion);
      this.setMotion(this.header);
    }
    this.options.classNames.body.forEach((className) => {
      this.content.classList.add(className);
    });
  }
  /**
   * Set Motion attributes
   *
   * @param {HTMLElement} element motion element
   */
  setMotion(element) {
    element.setAttribute("data-aos", this.options.motion.type);
    if (this.options.motion.duration) {
      element.setAttribute("data-aos-duration", this.options.motion.duration);
    }
    if (this.options.motion.delay) {
      element.setAttribute("data-aos-delay", this.options.motion.delay);
    }
  }
  /**
   * Insert In Document element
   */
  _insertInDocument() {
    document.body.appendChild(this.element);
  }
  /**
   * Add Content to the modal
   *
   * @returns {Promise} object
   */
  _addContent() {
    if (this.options.header) {
      this.setHeader(this.options.header);
    } else if (this.options.title) {
      this.setTitle(this.options.title);
    } else {
      this.header.innerHTML = "";
    }
    if (this.options.footer) {
      this.setFooter(this.options.footer);
    }
    const { content, configId } = this.options;
    const url = this.options.contentUrl;
    if (url) {
      return ajax(url, { configId })
        .then((response) => {
          // It might be possible that modal is closed before the ajax request is complete
          if (!this.element) {
            return Promise.reject(new Error("Modal removed"));
          }
          this.state.initContent = true;
          return response;
        })
        .then(this.setContent.bind(this))
        .then(() => {
          this.removeLoader();
          this.updateStatusMessage(
            this.options.text.accessibility.finishedStatusMessage || false,
          );
        })
        .catch(() => {
          if (this.element) {
            this.removeLoader();
            this.updateStatusMessage(
              this.options.text.accessibility.finishedStatusMessage || false,
            );
          }
        });
    }
    if (content) {
      this.state.initContent = true;
      this.removeLoader();
      this.updateStatusMessage(
        this.options.text.accessibility.finishedStatusMessage || false,
      );
      return this.setContent(content);
    }
    return Promise.resolve();
  }
  /*
   * API
   */
  /**
   * Open the modal
   *
   * @returns {Promise} object
   */
  open() {
    if (
      this.options.afterCloseRedirectUrl &&
      !this.state.isPreventRedirectAfterClose
    ) {
      this.options.keepOverlayOpened = true;
      Event.emit("overlay.open", {
        keepOpened: this.options.keepOverlayOpened,
      });
      this.state.isOverlayOpened = true;
    }
    if (
      this.state.isOpened ||
      this.state.isOpening ||
      (!this.options.openInPageDesignerEditor &&
        DataLayer.get("page.isPageDesignerEditMode", false))
    ) {
      return Promise.reject();
    }
    this.state.isOpened = true;
    this.state.isOpening = true;
    this.openPromise = this.beforeOpen()
      .then(this._appendLayout.bind(this))
      .then(this._importCSS.bind(this))
      .then(() => {
        if (this.enableStacking) {
          return Promise.resolve();
        }
        return this._addContent();
      })
      .then(() => {
        if (this.element) {
          this.afterOpen();
        }
      });
    return this.openPromise;
  }
  /**
   * Triggered before the modal is opened
   *
   * @returns {Promise} object
   */
  beforeOpen() {
    if (typeof this.options.beforeOpen === "function") {
      this.options.beforeOpen(this.element);
    }
    this.sendEvent("modal.open.before");
    if (!this.state.initContent) {
      this.addLoader();
      this.updateStatusMessage(
        this.options.text.accessibility.processingStatusMessage || true,
      );
    }
    return Promise.resolve();
  }
  /**
   * ContentUpdated event handler
   */
  onContentUpdated() {
    Event.emit("registry.registerChildren", this.element);
    window.setTimeout(() => {
      this.updateComponents();
    }, 200);
  }
  /**
   * Trigger Focus Highlighter position updating
   */
  onModalScroll() {
    Event.emit("highlighter.update");
  }
  /**
   * Used to set state to avoid removing a non-existent event listener in cases
   * when the user closes the modal before it has fully loaded.
   *
   * @returns {Function} - trottled function
   */
  scrollThrottle() {
    const func = throttle(this.onModalScroll.bind(this), 20);
    this.state.isScrollEventAttached = true;
    return func;
  }
  /**
   * Triggered after the modal is opened
   */
  afterOpen() {
    on("scroll", this.wrapper, this.scrollThrottle(), {
      passive: true,
    });
    if (this.options.escapeClose) {
      window.setTimeout(() => {
        on(`keydown.${this.id}`, document, this.onKeyboardControl.bind(this));
      }, 200);
    }
    if (typeof this.options.afterOpen === "function") {
      this.options.afterOpen(this.element);
    }
    // Put the focus into the Modal window after content is loaded and mask the main page from screen reader
    this.initModalPattern(this.wrapper, this.options.focusReturnElement);
    this.triggerAfterOpenAnalyticsEvents();
    this.sendEvent("modal.open.after");
    this.state.isOpening = false;
    this.openPromise = null;
  }
  /**
   * Close the modal
   *
   * @param {Boolean} closeAll used to close all stacked modals after closing the current one
   * @param {Object} options - object with params
   * @returns {Promise} object
   */
  close(closeAll = false, options = {}) {
    // It happens that modal close is called while it's not even opened. So we wait the modal to be opened before closing it
    // if (this.openPromise) {
    //     return this.openPromise.then(() => {
    //         this.close();
    //     });
    // }
    if (!this.state.isOpened || this.state.isClosing) {
      return Promise.resolve();
    }
    this.state.isClosing = true;
    this.beforeClose(options);
    this.element.classList.remove(this.options.classNames.dialogOpen);
    animate(this.options.classNames.dialogClose, this.element).then(() => {
      this.element.classList.remove(this.classes.openedState);
    });
    this.destroyModalPattern();
    return new Promise((resolve) => {
      // always close modal with timeout to allow all modal event handlers to be executed
      // before content destroyed
      setTimeout(() => {
        this._doClose(closeAll);
        resolve();
      }, this.options.closeTimeout);
    });
  }
  /**
   * Close the modal
   *
   * @param {Boolean} closeAll used to close all stacked modals after closing the current one
   */
  _doClose(closeAll) {
    if (!this.enableStacking) {
      this.element.remove();
      if (this.state.isOverlayOpened) {
        Event.emit("overlay.close");
        this.state.isOverlayOpened = false;
      }
    }
    Event.emit("page.scroll.enabled", {
      isUnblockScrollForAll: true,
      isInstantScroll: true,
    });
    this.afterClose(closeAll);
  }
  /**
   * Triggered before the modal is closed
   *
   * @param {Object} options - object with params
   */
  beforeClose(options) {
    if (this.state.isScrollEventAttached) {
      off("scroll", this.wrapper);
    }
    this.options.beforeClose(this.element, options);
    this.sendEvent("modal.close.before");
  }
  /**
   * Triggered after the modal is closed
   *
   * @param {Boolean} closeAll used to close all stacked modals after closing the current one
   */
  afterClose(closeAll) {
    this.closeAll = closeAll;
    this.state.isOpened = false;
    this.state.isClosing = false;
    this.options.afterClose(this.element);
    this.sendEvent("modal.close.after");
    if (this.options.afterCloseReload) {
      window.location.reload();
    }
    if (
      this.options.afterCloseRedirectUrl &&
      !this.state.isPreventRedirectAfterClose
    ) {
      window.location.assign(this.options.afterCloseRedirectUrl);
    }
    this.state.isPreventRedirectAfterClose = false;
  }
  /**
   * Set Content
   *
   * @param {HTML} content Data
   * @returns {Promise} object
   */
  setContent(content) {
    this.content.innerHTML = content;
    if (this.options.motion && DataLayer.get("uiconfig.motion.modalsEnabled")) {
      this.innerContent = Array.from(this.content.children);
      if (this.innerContent.length) {
        this.innerContent.forEach((item) => {
          this.setMotion(item);
          transition(item, () => {
            item.removeAttribute("data-aos");
            this.updateComponents();
          });
        });
      }
      this.element.classList.remove(this.classes.motion);
    }
    // evals response content inline javascripts
    this.appendedScripts = [];
    this.content.querySelectorAll("script").forEach((script) => {
      const srcScript = document.createElement("script");
      srcScript.text = script.innerHTML;
      srcScript.async = script.async;
      srcScript.defer = script.defer;
      srcScript.type = script.type;
      document.head.appendChild(srcScript);
      this.appendedScripts.push(srcScript);
    });
    return Promise.resolve(content).then(this.onContentUpdated.bind(this));
  }
  /**
   * Set Header
   *
   * @param {HTML} header Data
   * @returns {Promise} object
   */
  setHeader(header) {
    this.header.innerHTML = header;
    return Promise.resolve(header);
  }
  /**
   * Set Title
   *
   * @param {HTML} title Data
   * @returns {Promise} object
   */
  setTitle(title) {
    if (this.options.classNames.title) {
      this.title.classList.add(...this.options.classNames.title.split(" "));
    }
    this.title.innerHTML = title;
    return Promise.resolve(title);
  }
  /**
   * Set footer content
   *
   * @param {HTML} footer Content
   * @returns {Promise} object
   */
  setFooter(footer) {
    this.footer.innerHTML = footer;
    return Promise.resolve(footer);
  }
  /**
   * Append the modal layout
   * @returns {Promise} object
   */
  _appendLayout() {
    if (!this.enableStacking) {
      // if already existing, no need to inject the content again
      this._insertInDocument();
    }
    // bind events are lost for the first modal after closing the second one
    this._bindModalEvents();
    this.element.classList.add(this.classes.openedState);
    this.element.classList.add(this.options.classNames.dialogOpen);
    this.setAccessibility();
    Event.emit("page.scroll.disabled", true);
    if (this.options.showOverlay) {
      this.sendEvent("slidingPanel.check.active");
      Event.emit("overlay.open", {
        preventClick: !this.options.clickOutsideClose,
        keepOpened: this.options.keepOverlayOpened,
      });
      this.options.keepOverlayOpened = false;
      this.state.isOverlayOpened = true;
    }
    return Promise.resolve();
  }
  /**
   * Async loading of the CSS
   * @param {String} path - CSS relative path
   * @returns {Promise} - Promise
   */
  _importCSS() {
    if (
      this.state.hasCustomCSS &&
      !this.state.isCustomCSSLoaded &&
      !this.state.isCustomCSSLoading
    ) {
      this.state.isCustomCSSLoading = true;
      // [ROLLUP]return loadjs([`${window.lora.baseURL}css/${this.options.cssPath}`], { returnPromise: true })
      // [SYSTEMJS]
      return (
        SystemJS.import(`cssComponent/${this.options.cssPath}!`)
          // [/SYSTEMJS]
          .then(() => {
            this.state.isCustomCSSLoading = false;
          })
          .catch(() => {
            this.state.isCustomCSSLoading = false;
            console.error("CSS file cannot be found");
          })
      );
    }
    return Promise.resolve();
  }
  /**
   * Bind Modal Events
   */
  _bindModalEvents() {
    Event.on("overlay.close.before", this.onOverlayCloseBefore, this);
    Event.on("modal.close", this.close, this);
    Event.on("modal.keep.overlay.open", this.keepOpen, this);
    Event.on("slidingPanel.open.after", this.onSlidingPanelOpen, this);
    Event.on("slidingPanel.close.after", this.onSlidingPanelClose, this);
    on("click", this.element, this.modalClickHandler.bind(this));
  }
  /**
   * Remove Modal Events
   */
  _removeModalEvents() {
    if (this.options.escapeClose) {
      off(`keydown.${this.id}`, document);
    }
    off("click", this.element);
    Event.removeListener("overlay.close.before", this.onOverlayCloseBefore);
    Event.removeListener("modal.close", this.close);
    Event.removeListener("slidingPanel.open.after", this.onSlidingPanelOpen);
    Event.removeListener("slidingPanel.close.after", this.onSlidingPanelClose);
    Event.removeListener("modal.keep.overlay.open", this.keepOpen);
  }
  /**
   * Set keepOverlayOpened option to true if sliding panel is active
   */
  keepOpen() {
    this.options.keepOverlayOpened = true;
  }
  /**
   * Sliding panel open handler
   */
  onSlidingPanelOpen() {
    this.state.isActive = false;
  }
  /**
   * Sliding panel close handler
   */
  onSlidingPanelClose() {
    this.state.isActive = true;
  }
  /**
   * Keydown event handler
   *
   * @param {Object} event Event object
   */
  onKeyboardControl(event) {
    if (!this.state.isActive) {
      return;
    }
    switch (event.key) {
      case "Tab": // 'Tab' key
        this.onTabKey(event);
        break;
      case "Escape": // 'Escape' key
        this.close();
        break;
      default:
        break;
    }
  }
  /**
   * Send Event
   *
   * @param {String} eventType custom
   */
  sendEvent(eventType) {
    Event.emit(eventType, this);
  }
  /* eslint-disable complexity */
  /**
   * Trigger Analytics Events after the modal is opened
   */
  triggerAfterOpenAnalyticsEvents() {
    if (!this.analytics) {
      return;
    }
    if (this.analytics.virtualPageURL && this.analytics.virtualPageTitle) {
      Event.emit("analytics.virtualPage", {
        virtualPageURL: this.analytics && this.analytics.virtualPageURL,
        virtualPageTitle: this.analytics && this.analytics.virtualPageTitle,
      });
    }
    // eslint-disable-next-line max-len
    if (
      this.analytics.afterModalOpen &&
      !(
        this.options.preventAfterModalOpenSecondaryAnalytics &&
        this.state.isAnalyticsSent
      )
    ) {
      Event.emit("analytics.event", this.analytics.afterModalOpen);
      this.state.isAnalyticsSent = true;
    }
  }
  /* eslint-enable complexity */
  /**
   * Accessibility handling
   */
  setAccessibility() {
    // inform screen reader users that a custom dialog is being inserted
    this.element.setAttribute("role", "dialog");
    this.element.setAttribute("aria-modal", "true");
    if (this.options.ariaLabel) {
      this.element.setAttribute("aria-label", this.options.ariaLabel);
    } else {
      this.element.setAttribute("aria-labelledby", "modal-title");
    }
  }
  /**
   * Update components if scrollbar appears
   */
  updateComponents() {
    if (this.content.offsetHeight > this.element.scrollHeight) {
      const componentsToUpdate = this.content.querySelectorAll(
        '[data-component="global/Carousel"]',
      );
      if (componentsToUpdate.length) {
        componentsToUpdate.forEach((component) => {
          trigger("carousel.update", component);
        });
      }
    }
  }
  /**
   * Tab key event
   *
   * @param {Object} event Event object
   */
  onTabKey(event) {
    super.focusTrap(this.element, event);
  }
  /** overlay.close.before event handler
   * Prevent overlay.close event fired if the overlay is already the closing initiator
   */
  onOverlayCloseBefore() {
    this.state.isOverlayOpened = false;
    this.close();
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    this._removeModalEvents();
    (this.appendedScripts || []).forEach((srcScript) => {
      document.head.removeChild(srcScript);
    });
  }
}
