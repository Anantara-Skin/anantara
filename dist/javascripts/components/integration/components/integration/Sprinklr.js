import ThirdPartyLoader from "components//dist/javascripts/components/global/ThirdPartyLoader.js";
import { deepMerge } from "toolbox/deepMerge";
import { Event } from "services/EventEmitter";
import { ajax } from "toolbox/ajax";
import { on, off } from "toolbox/event";
import { debounce } from "toolbox/debounce";
import DataLayer from "services/DataLayer";
import { cookie } from "toolbox/cookie";
/**
 * Sprinklr Live Chat
 * @class
 * @classdesc Component for Sprinklr Live Chat integration
 * @extends ThirdPartyLoader
 */
export default class Sprinklr extends ThirdPartyLoader {
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
          analytics: {}, // analytics data
          productsUrl: null, // url to get products data after cart update
          pageInitUrl: null, // url to get products data on page initialization
          conversationInfoUrl: null, // url to post conversation info
          clientContextKey: "_c_65fb06be9cc87c61e1ffcd3a", // client context key
          userContextKey: "_c_65fb07e29cc87c61e101964d", // user context key
          defaultLocation: "location-onsite", // default location
          bubbleLocation: "location-bubble", // bubble location
          conversationCookieLifetime: 7, // lifetime of the conversation cookies in days
          consentId: "sprinklr", // consent group to check
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
    this.state.hasConsentListener = false;
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    this.selectors.chatBtn = document.querySelectorAll(".sprinklr-open-chat");
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    this.onCartUpdatedDebounced = debounce(this.onCartUpdated.bind(this), 200);
    this.onFormSubmitDebounced = debounce(this.onFormSubmit.bind(this), 200);
    this.onVideoPlayerPlayDebounced = debounce(
      this.onVideoPlayerPlay.bind(this),
      200,
    );
    Event.on("cart.updated", this.onCartUpdatedDebounced, this);
    Event.on("cart.product.added", this.onCartUpdatedDebounced, this);
    Event.on("carticon.update", this.onCartUpdatedDebounced, this);
    Event.on("lineitem.updated", this.onCartUpdatedDebounced, this);
    Event.on("bonus.product.added", this.onCartUpdatedDebounced, this);
    Event.on("registration.success", this.onCartUpdatedDebounced, this);
    Event.on("login.success", this.onCartUpdatedDebounced, this);
    Event.on("form.execute.submit", this.onFormSubmitDebounced, this);
    Event.on("videoplayer.play", this.onVideoPlayerPlayDebounced, this);
    if (this.selectors.chatBtn) {
      on("click.sprinklr", this.selectors.chatBtn, this.onOpenChat.bind(this));
    }
    if (!this.state.hasConsentListener && !this.isComponentConsentGiven()) {
      // add listener to load the script when the consent will be given
      Event.on(
        "Onetrust.activegroups.updated",
        this.onOnetrustActiveGroupsUpdated,
        this,
      );
      this.state.hasConsentListener = true;
    }
  }
  /**
   * On Onetrust active groups updated handler
   * Update conversation cookies if consent is given
   */
  onOnetrustActiveGroupsUpdated() {
    if (window.OnetrustActiveGroups.includes(this.options.consentGroup)) {
      this.updateConversationCookies(this.lastConversationData);
      delete this.lastConversationData;
    }
  }
  /**
   * On cart.updated handler
   */
  onCartUpdated() {
    ajax(this.options.productsUrl)
      .then(this.onChatUpdate.bind(this))
      .catch(() => {});
  }
  /**
   * On form submit handler
   * @param {Object} e - event data
   */
  onFormSubmit(e) {
    const formIdField = e.form.querySelector('[name="form_id"]');
    if (formIdField) {
      const formId = formIdField.getAttribute("value");
      if (formId) {
        const obj = {};
        obj[this.options.userContextKey] = [formId];
        window.sprChat("updateUserContext", obj);
      }
    }
  }
  /**
   * On video player play handler
   * @param {Object} e - event data
   */
  onVideoPlayerPlay(e) {
    const { videoId } = e;
    if (videoId) {
      const obj = {};
      obj[this.options.userContextKey] = [videoId];
      window.sprChat("updateUserContext", obj);
    }
  }
  /**
   * Update product chat data
   * @param {Object} data - products data
   */
  onChatUpdate(data) {
    if (
      this.state.lastModifiedTime !== data.modifiedTime ||
      (!this.state.lastModifiedTime && !data.modifiedTime)
    ) {
      this.state.lastModifiedTime = data.modifiedTime;
      window.sprChat("updateCart", {
        productItems: data.products,
        purchased: data.purchased,
        modifiedTime: data.modifiedTime,
      });
    }
  }
  /**
   * Open Sprinklr Window Live Chat
   * @param {Object} event - event data
   */
  onOpenChat(event) {
    const obj = {};
    const { target } = event;
    const location = target.getAttribute("data-location");
    obj[this.options.clientContextKey] = [
      location || this.options.defaultLocation,
    ];
    window.sprChat("open");
    window.sprChat("updateClientContext", obj);
  }
  /**
   * Before load script, set the chat settings, obtained from the DataLayer, into the window object
   * @param {String} path script path
   * @param {Object} scriptEl script dom element
   * @returns {Boolean} callback result
   */
  onBeforeScriptLoad(path, scriptEl) {
    window.sprChatSettings = DataLayer.get("sprinklrChatSettings", {});
    return super.onBeforeScriptLoad(path, scriptEl);
  }
  /**
   * On script load handler, called when the third-party is loaded
   */
  onScriptLoaded() {
    super.onScriptLoaded();
    window.sprChat("onEvent", this.eventHandler.bind(this));
    if (this.options.pageInitUrl) {
      ajax(this.options.pageInitUrl)
        .then(this.onChatUpdate.bind(this))
        .catch(() => {});
    }
  }
  /**
   * Sprinklr onEvent handler
   * @param {Object} data - data from Sprinklr SDK
   */
  eventHandler(data) {
    const triggerIconObj = {};
    triggerIconObj[this.options.clientContextKey] = [
      this.options.bubbleLocation,
    ];
    switch (data && data.eventType) {
      case "NEW_CONVERSATION_CREATED":
      case "EXISTING_CONVERSATION_OPENED": {
        this.updateConversationCookies(data.additional);
        break;
      }
      case "CONVERSATION_WINDOW_OPENED":
        if (this.options.analytics) {
          Event.emit("analytics.event", this.options.analytics);
        }
        break;
      case "CHAT_TRIGGER_CLICKED":
        window.sprChat("updateClientContext", triggerIconObj);
        break;
      default:
        break;
    }
  }
  /**
   * Update conversation cookies
   * @param {Object} data - data from Sprinklr SDK
   */
  updateConversationCookies(data = {}) {
    if (!this.isComponentConsentGiven()) {
      this.lastConversationData = data;
      return;
    }
    const { conversationId } = data;
    let caseNumber = data.caseNumber || "";
    if (!conversationId) {
      return;
    }
    cookie.setCookie(
      "sprinklrConversationId",
      conversationId,
      this.options.conversationCookieLifetime,
    );
    // "EXISTING_CONVERSATION_OPENED" may not have caseNumber
    if (
      !caseNumber &&
      conversationId === cookie.getCookie("sprinklrConversationId")
    ) {
      caseNumber = cookie.getCookie("sprinklrCaseNumber");
    }
    cookie.setCookie(
      "sprinklrCaseNumber",
      caseNumber,
      this.options.conversationCookieLifetime,
    );
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    Event.removeListener("cart.updated", this.onCartUpdatedDebounced, this);
    Event.removeListener(
      "cart.product.added",
      this.onCartUpdatedDebounced,
      this,
    );
    Event.removeListener("carticon.update", this.onCartUpdatedDebounced, this);
    Event.removeListener("lineitem.updated", this.onCartUpdatedDebounced, this);
    Event.removeListener(
      "bonus.product.added",
      this.onCartUpdatedDebounced,
      this,
    );
    Event.removeListener(
      "registration.success",
      this.onCartUpdatedDebounced,
      this,
    );
    Event.removeListener("login.success", this.onCartUpdatedDebounced, this);
    Event.removeListener(
      "form.execute.submit",
      this.onFormSubmitDebounced,
      this,
    );
    Event.removeListener(
      "videoplayer.play",
      this.onVideoPlayerPlayDebounced,
      this,
    );
    if (this.selectors.chatBtn) {
      off("click.sprinklr", this.selectors.chatBtn);
    }
    if (this.state.hasConsentListener) {
      // remove listener to load the script when the consent will be given
      Event.removeListener(
        "Onetrust.activegroups.updated",
        this.onOnetrustActiveGroupsUpdated,
        this,
      );
    }
  }
}
