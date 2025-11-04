import Component from "core/Component";
import { Event } from "services/EventEmitter";
import { ajax } from "toolbox/ajax";
import { on, off } from "toolbox/event";
import { mix } from "core/mixwith";
import AccessibilityMixin from "mixins/Accessibility";
import httpStatusCode from "constants/httpStatusCode";
import DataLayer from "services/DataLayer";
import { deepMerge } from "toolbox/deepMerge";
/**
 * This is a description of the AddToWishlist constructor function.
 * @class
 * @classdesc This is a description of the AddToWishlist class.
 * @extends Component
 */
export default class AddToWishlist extends mix(Component).with(
  AccessibilityMixin,
) {
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
          templateName: "product/addtowishlist",
          url: {
            add: null,
            remove: null,
          },
          text: {
            title: {
              add: null,
              remove: null,
            },
            accessibility: {
              processingStatusMessage: "",
              finishedStatusMessage: "",
              addAriaLabel: "",
              removeAriaLabel: "",
            },
          },
          isLabel: false,
          pid: null,
          classNames: {
            selected: "m-active",
          },
          component: "addtowishlist",
        },
        options,
      ),
    );
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonymous function
   */
  bindEvents() {
    on("click", this.element, this.onClick.bind(this));
    Event.on(`wishlist.updated.${this.options.pid}`, this.updateState, this);
    // Make sure all instances are aware they have to wait for login, so the content is updated properly.
    Event.on("wishlist.waitlogin", this.onWaitLogin, this);
    on("product.updated", this.element, this.onProductUpdated.bind(this));
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.updateState();
    this.state.isLoading = false;
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    this.selectors.label = this.element.querySelector(
      "[data-js-wishlist-text]",
    );
  }
  /**
   * Update State event handler
   */
  updateState() {
    const customer = DataLayer.getCustomer();
    const isLoggedIn = customer && customer.loggedIn;
    const wishlist = customer && customer.wishlist;
    if (isLoggedIn && wishlist.find((item) => item.id === this.options.pid)) {
      this.activeState();
    } else {
      this.unactiveState();
    }
    if (wishlist && [0, 1].includes(wishlist.length)) {
      Event.emit("wishlistlink.reload");
    }
  }
  /**
   * Active state for WishList
   */
  activeState() {
    this.element.classList.add(this.options.classNames.selected);
    this.element.setAttribute("aria-pressed", true);
    this.element.setAttribute(
      "aria-label",
      this.options.text.accessibility.removeAriaLabel,
    );
    if (this.options.isLabel && this.options.text.title.remove) {
      this.selectors.label.textContent = this.options.text.title.remove;
    } else if (this.options.text.title.remove) {
      this.selectors.label.title = this.options.text.title.remove;
    }
    this.state.isActive = true;
  }
  /**
   * Unactive state for WishList
   */
  unactiveState() {
    this.element.classList.remove(this.options.classNames.selected);
    this.element.setAttribute("aria-pressed", false);
    this.element.setAttribute(
      "aria-label",
      this.options.text.accessibility.addAriaLabel,
    );
    if (this.options.isLabel && this.options.text.title.add) {
      this.selectors.label.textContent = this.options.text.title.add;
    } else if (this.options.text.title.add) {
      this.selectors.label.title = this.options.text.title.add;
    }
    this.state.isActive = false;
  }
  /**
   * Update product wish list component when product updated
   *
   * @param {Object} e - event data
   */
  onProductUpdated(e) {
    if (e.detail.previousPid === this.options.pid) {
      const model = e.detail.data && e.detail.data[this.options.component];
      if (model) {
        this.render(model);
      }
    }
  }
  /**
   * Click event handler
   *
   * @param {Object} e Event object
   */
  onClick(e) {
    e.preventDefault();
    this.toggle();
  }
  /**
   * Add product to wishlist
   *
   * @returns {Promise} object
   */
  add() {
    // If already active or request is in progress, no need to continue
    if (this.state.isActive || this.state.isLoading) {
      return false;
    }
    return this.send(`${this.options.url.add}?pid=${this.options.pid}`).then(
      this.onAddSuccess.bind(this),
    );
  }
  /**
   * Add Success handler
   *
   * @param {Object} response Data
   * @returns {Boolean} true
   */
  onAddSuccess(response) {
    if (!response) {
      return false;
    }
    DataLayer.update(response.datalayer);
    Event.emit("wishlist.added", {
      pid: this.options.pid,
    });
    Event.emit(`wishlist.updated.${this.options.pid}`);
    this.activeState();
    Event.emit("analytics.event", {
      eventType: "addToWishlist",
      category: "ecommerce",
      preventCategoryOverwrite: true,
      action: "add to favorites",
      label: this.analytics.label,
      extraData: { event_name: "add_to_wishlist" },
      ecommerce: {
        products: this.analytics.products,
      },
    });
    return true;
  }
  /**
   * Add/Remove Failure handler
   *
   * @param {Object} response Data
   */
  onSendFailure(response) {
    this.updateStatusMessage(
      this.options.text.accessibility.finishedStatusMessage || false,
    );
    if (response.status === httpStatusCode.AUTHENTIFICATION_ERROR) {
      // This condition is here to avoid emitting the event multiple times for the same product.
      if (!this.state.isWaitingLogin) {
        // Emit an event for all instances of this component using the same pid
        Event.emit("wishlist.waitlogin", { pid: this.options.pid });
      }
    }
  }
  /**
   * When trying to add product to wishlist but authentication is required
   * set current component as waiting for login if trigger for this product id
   * or stop waiting if another instance trigger it
   *
   * @param {Object} data data - event data containing pid
   */
  onWaitLogin(data) {
    if (this.state.isWaitingLogin && data.pid !== this.options.pid) {
      // If another component is waiting for login, we unbind everything on the current one
      this.state.isWaitingLogin = false;
      Event.removeListener("login.success", this.onLoginSuccess, this);
      Event.removeListener("registration.success", this.onLoginSuccess, this);
    } else if (data.pid === this.options.pid) {
      // We are setting the component as waiting for login, to avoid having multiple events emitted.
      this.state.isWaitingLogin = true;
      Event.once("login.success", this.onLoginSuccess, this);
      Event.once("registration.success", this.onLoginSuccess, this);
      Event.once("login.modal.close", this.onLoginAbort, this);
      Event.once("modal.open", this.onModalOpen, this);
    }
  }
  /**
   * Toggle the product to the wishlist
   *
   * @returns {Promise} object
   */
  toggle() {
    if (this.state.isActive) {
      return this.remove();
    }
    return this.add();
  }
  /**
   * Remove the product from the wishlist
   *
   * @returns {Promise} object
   */
  remove() {
    // If already unactive or request is in progress, no need to continue
    if (!this.state.isActive || this.state.isLoading) {
      return false;
    }
    return this.send(`${this.options.url.remove}?pid=${this.options.pid}`).then(
      this.onRemoveSuccess.bind(this),
    );
  }
  /**
   * Callback after remove the product from the wishlist
   *
   * @param {Object} response Data
   * @returns {Boolean} true
   */
  onRemoveSuccess(response) {
    if (!response) {
      return false;
    }
    DataLayer.getCustomer().wishlist = response.datalayer.customer.wishlist;
    Event.emit("wishlist.removed", {
      pid: this.options.pid,
    });
    Event.emit(`wishlist.updated.${this.options.pid}`);
    this.unactiveState();
    Event.emit("analytics.event", {
      eventType: "removeFromWishlist",
      category: this.analytics.category,
      action: "remove from favorites",
      label: this.analytics.label,
      extraData: {
        event_name: "remove_from_favorites",
      },
      ecommerce: {
        products: this.analytics.products,
      },
      preventCategoryOverwrite: true,
    });
    return true;
  }
  /**
   * Generic function for making HTTP request to add or remove wishlist
   *
   * @param {String} url Address
   * @returns {Promise} object
   */
  send(url) {
    if (this.state.isLoading) {
      return Promise.reject();
    }
    this.state.isLoading = true;
    this.updateStatusMessage(
      this.options.text.accessibility.processingStatusMessage || true,
    );
    return ajax(url, { configId: this.options.socialloginConfigId })
      .catch(this.onSendFailure.bind(this))
      .then((response) => {
        this.updateStatusMessage(
          this.options.text.accessibility.finishedStatusMessage || false,
        );
        this.state.isLoading = false;
        return response;
      });
  }
  /**
   * When login is successfull, update the content of the component then reload the page.
   */
  onLoginSuccess() {
    if (this.state.isWaitingLogin) {
      this.state.isWaitingLogin = false;
      this.toggle().then(() => window.location.reload());
    }
  }
  /**
   * Send analytics if login proccess is canceled
   */
  onLoginAbort() {
    this.state.isWaitingLogin = false;
    if (!this.state.isReplacedModal) {
      this.modalAnalytics("login exit", "login_exit");
    }
  }
  /**
   * Handles the registration modal open analytics
   * @param {Object} data - data object
   * @param {boolean} data.options.isRegistration - whether the modal is for registration
   */
  onModalOpen(data) {
    if (data.options.isRegistration) {
      this.state.isReplacedModal = true;
    }
  }
  /**
   * Emits an analytics event when a modal action is taken
   * @param {string} action - the action taken
   * @param {string} name - the name of the event
   */
  modalAnalytics(action, name) {
    Event.emit("analytics.event", {
      category: "ecommerce",
      action: `add to favorites::${action}`,
      label: this.analytics.label,
      extraData: {
        event_name: `wishlist_${name}`,
        product_info: this.analytics.label,
      },
    });
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    off("click", this.element);
    Event.removeListener(
      `wishlist.updated.${this.options.pid}`,
      this.updateState,
      this,
    );
    Event.removeListener("wishlist.waitlogin", this.onWaitLogin, this);
    off("product.updated", this.element);
    // Authentication listeners should be removed only if they were actually created
    if (this.state.isWaitingLogin) {
      Event.removeListener("login.success", this.onLoginSuccess, this);
      Event.removeListener("registration.success", this.onLoginSuccess, this);
      Event.removeListener("login.modal.close", this.onLoginAbort, this);
      Event.removeListener("modal.open", this.onModalOpen, this);
    }
  }
}
