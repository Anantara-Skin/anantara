import Component from "core/Component";
import { deepMerge } from "toolbox/deepMerge";
import { cookie } from "toolbox/cookie";
import { ajax } from "toolbox/ajax";
import { on, trigger } from "toolbox/event";
/**
 * This is a description of the Optanon constructor function.
 * @class
 * @classdesc This is a description of the Optanon class. (must be edited)
 * @extends Component
 */
export default class Optanon extends Component {
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
          optanonCookieGroupsToDisableSFCCTracking: "2",
          changeSessionTrackingUrl: "",
          cookies: {
            optanon: "OptanonConsent",
            dw: "dw_dnt",
          },
          buttons: {
            confirmMyChoices: "Confirm My Choices",
            allowAll: "Allow All",
          },
          classes: {
            saveContainer:
              "save-preference-btn-handler onetrust-close-btn-handler button-theme",
            buttonTheme: "button-theme",
            savePreference: "save-preference-btn-container",
            hideElement: "ot-hide",
          },
          id: {
            saveContainer: "Save Container",
            acceptContainer: "Accept Container",
            acceptRecommended: "accept-recommended-btn-handler",
            acceptRecommendedContainer: "accept-recommended-container",
            preferenceCenter: "onetrust-pc-sdk",
          },
          eventName: "consentManagementComponentLoaded",
        },
        options,
      ),
    );
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    window.OptanonWrapper = this.optanonWrapperEvent.bind(this);
    window.addEventListener(
      "load",
      this.optanonControlPrefCenterDisplay.bind(this),
      this.optanonDisplayPopup.bind(this),
    );
    on(this.options.eventName, window, this.afterLoad, { customEvent: true });
  }
  /**
   * Handle action after event addition to global
   */
  afterLoad() {}
  /**
   * Optanon Wrapper window Event.
   * It will retrieve the Optanon Consent Informations and update the session tracking if needed :
   * Cookies are grouped in optanon and some of them need to disable as well the SFCC Session tracking
   * if the customer choose to disable thoses.
   */
  optanonWrapperEvent() {
    if (!this.options.optanonCookieGroupsToDisableSFCCTracking) {
      return;
    }
    const cookieOptanonConsent = cookie.getCookie(this.options.cookies.optanon);
    if (cookieOptanonConsent) {
      const cookieOptanonConsentInfos = this.parseCookieOptanonConsentValue(
        cookieOptanonConsent,
        "&",
        "=",
      );
      if (cookieOptanonConsentInfos.groups) {
        const cookieOptanonConsentGroupsObject =
          this.parseCookieOptanonConsentValue(
            decodeURIComponent(cookieOptanonConsentInfos.groups),
            ",",
            ":",
          );
        const groupsToDisableSFCCTrackingArray =
          this.options.optanonCookieGroupsToDisableSFCCTracking.split(",");
        const groupsToDisableForSession =
          groupsToDisableSFCCTrackingArray.filter(
            (groupToDisable) =>
              cookieOptanonConsentGroupsObject[groupToDisable] === "0",
          );
        const shouldSessionTrackingBeAllowed = !(
          groupsToDisableForSession && groupsToDisableForSession.length
        );
        const currentSessionTrackingAllowed =
          cookie.getCookie(this.options.cookies.dw) === "0";
        if (
          currentSessionTrackingAllowed !== shouldSessionTrackingBeAllowed &&
          this.options.changeSessionTrackingUrl
        ) {
          this.changeSessionTracking(shouldSessionTrackingBeAllowed);
        }
      }
    }
    trigger(this.options.eventName, window);
  }
  /**
   * Make the call to Handle the SFCC Session tracking in function of the cookie Optanon Consent groups
   * @param {Boolean} sessionTrackingAllowed boolean value of the permission of the session tracking
   * @return {*} ajax response
   */
  changeSessionTracking(sessionTrackingAllowed) {
    const url = `${this.options.changeSessionTrackingUrl}?sessionTrackingAllowed=${sessionTrackingAllowed}`;
    return ajax(url).catch(() => {});
  }
  /**
   * Parse the Optanon Consent cookie value
   * @param {String} value string to parse
   * @param {String} separator1 first separator
   * @param {String} separator2 second separator
   * @returns {Object} an object of the parsed Optanon Consent
   */
  parseCookieOptanonConsentValue(value, separator1, separator2) {
    const object = {};
    if (!value || !separator1 || !separator2) {
      return object;
    }
    value += "";
    const el = value.split(separator1);
    for (let i = 0; i < el.length; i++) {
      const [element1, element2] = el[i].split(separator2);
      object[element1] = element2;
    }
    return object;
  }
  /**
   * Optanon cookie policy popup - onetrust v2
   */
  optanonDisplayPopup() {
    if (
      typeof window.Optanon === "undefined" ||
      !this.options.optanonDomainScriptID
    ) {
      return;
    }
    if (
      this.options.optanonCookieToggleInfoDisplayEnable &&
      "IsAlertBoxClosed" in window.Optanon &&
      window.Optanon.IsAlertBoxClosed() === false
    ) {
      window.Optanon.ToggleInfoDisplay();
    }
    const { confirmMyChoices, allowAll } = this.options.buttons;
    const saveButton = `<button id="${this.options.id.saveContainer}" class="${this.options.classes.saveContainer}" style="${this.options.styles.confirmMyChoices}" aria-label="${confirmMyChoices}" role="button" tabindex="0">${confirmMyChoices}</button>`;
    const acceptButton = `<button id="${this.options.id.acceptRecommended}" class="${this.options.classes.buttonTheme}" style="${this.options.styles.allowAll}" aria-label="${allowAll}" role="button" tabindex="0">${allowAll}</button>`;
    if (document.getElementById(this.options.id.saveContainer) === null) {
      const top = document.getElementById(
        this.options.id.acceptRecommendedContainer,
      );
      const footer = document.getElementsByClassName(
        this.options.classes.savePreference,
      )[0];
      const divSave = document.createElement("div");
      divSave.id = this.options.id.saveContainer;
      const divAccept = document.createElement("div");
      divAccept.id = this.options.id.acceptContainer;
      divSave.innerHTML = saveButton;
      divAccept.innerHTML = acceptButton;
      top.appendChild(divSave);
      footer.appendChild(divAccept);
      document.getElementsByClassName(
        this.options.classes.buttonTheme,
      )[2].style.marginRight = "10px";
    }
  }
  /**
   * Target the preference center and hide it by default.
   */
  optanonControlPrefCenterDisplay() {
    const prefCenter = document.getElementById(
      this.options.id.preferenceCenter,
    );
    if (!prefCenter.classList.contains(this.options.classes.hideElement)) {
      prefCenter.classList.add(this.options.classes.hideElement);
    }
  }
}
