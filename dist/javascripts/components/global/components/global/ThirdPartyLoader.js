import Component from "core/Component";
import { deepMerge } from "toolbox/deepMerge";
import { stringify } from "toolbox/queryString";
import loadjs from "loadjs";
import { Event } from "services/EventEmitter";
/**
 * @class
 * @classdesc This component is intented to be used as third party component wrapper
 * @extends Component
 */
export default class ThirdPartyLoader extends Component {
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
          url: null, // url of the third-party service to call
          bundleId: null, // id used to avoid duplicate scripts. If null, no duplicate check will be done.
          params: null, // params object to be transformed into a query string
          dataAttributes: null, // Extra data attributes to be passed to the thirdParty script
          loadScriptTimeout: 0, // timeout for the loadScript function call
          consentId: null, // consent group to check
        },
        options,
      ),
    );
  }
  /**
   * Get path
   */
  get path() {
    const { url, params } = this.options;
    let path = url;
    // If params is set and has to be an object
    if (params && typeof params === "object") {
      // we stringify the params and concat with the url
      path += `?${stringify(params)}`;
    }
    return path;
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.loaded = false;
    this.state.loading = false;
    this.state.data = null;
  }
  /**
   * Load the third-party script
   * @returns {Promise} - promise object
   */
  loadScript() {
    if (!this.path) {
      return Promise.reject(new Error("URL is missing"));
    }
    // add listener to load the script when the consent will be given, if not already added
    if (!this.state.hasConsentListener && !this.isComponentConsentGiven()) {
      // add listener to load the script when the consent will be given
      Event.on(
        "Onetrust.activegroups.updated",
        () => {
          if (
            !this.state.isConsentCallbackCalled &&
            this.isComponentConsentGiven() &&
            !this.state.loaded
          ) {
            this.loadScript();
            this.state.isConsentCallbackCalled = true;
          }
        },
        this,
      );
      this.state.hasConsentListener = true;
      return Promise.resolve(this.state.data);
    }
    if (this.state.loading) {
      return Promise.reject(new Error("Script already loading"));
    }
    if (this.state.loaded) {
      return Promise.resolve(this.state.data);
    }
    if (this.options.bundleId && loadjs.isDefined(this.options.bundleId)) {
      loadjs.ready(this.options.bundleId, this.onScriptLoaded.bind(this));
      return Promise.resolve(this.state.data);
    }
    this.state.loading = true;
    return new Promise((resolve, reject) => {
      const callbacks = {
        success: (data) => {
          this.onScriptLoaded(data);
          resolve(data);
        },
        error: (error) => {
          this.onScriptLoadFailed(error);
          reject(error);
        },
        before: (path, scriptEl) => this.onBeforeScriptLoad(path, scriptEl),
      };
      if (this.options.bundleId) {
        loadjs(this.path, this.options.bundleId, callbacks);
      } else {
        loadjs(this.path, callbacks);
      }
    });
  }
  /**
   * On script load handler, called when the third-party is loaded
   * @param {Object} data - Response of the provider
   */
  onScriptLoaded(data) {
    this.state.loaded = true;
    this.state.loading = false;
    this.state.data = data;
  }
  /**
   * On script loading failed handler
   * @param { Object } error - error object
   */
  onScriptLoadFailed(error) {
    this.state.loading = false;
    if (error) {
      console.error(error.message);
    }
  }
  /**
   * Before load script
   * @param {String} path script path
   * @param {Object} scriptEl script dom element
   * @returns {Boolean} callback result
   */
  onBeforeScriptLoad(path, scriptEl) {
    if (this.options.dataAttributes) {
      Object.keys(this.options.dataAttributes).forEach((key) => {
        scriptEl.setAttribute(key, this.options.dataAttributes[key]);
      });
    }
    return true;
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    if (this.options.loadScriptTimeout) {
      setTimeout(() => {
        this.loadScript();
      }, this.options.loadScriptTimeout);
    } else {
      this.loadScript();
    }
  }
}
