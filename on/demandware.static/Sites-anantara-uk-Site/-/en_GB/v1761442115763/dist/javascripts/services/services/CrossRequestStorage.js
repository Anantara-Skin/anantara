import DataLayer from "services/DataLayer";
/**
 * Cross request storage service.
 * @class CrossRequestStorage
 */
class CrossRequestStorage {
  /**
   * Cross request storage service constructor. Singleton
   */
  constructor() {
    if (CrossRequestStorage.instance) {
      return CrossRequestStorage.instance;
    }
    CrossRequestStorage.instance = this;
  }
  /**
   * Saves delayed action with value
   * @param {String} action delayed action, format: type::value
   */
  setDelayedAction(action) {
    this.removeDelayedActionForSocialLogin();
    sessionStorage.setItem("crossRequestDelayedAction", action);
  }
  /**
   * Remove delayed action with value
   */
  removeDelayedAction() {
    sessionStorage.removeItem("crossRequestDelayedAction");
  }
  /**
   * Saves delayed action with value for social login
   * Will be reassigned to general delayed action after social login
   * @param {String} action delayed action, format: type::value
   */
  setDelayedActionForSocialLogin(action) {
    sessionStorage.setItem("crossRequestDelayedActionSocialLogin", action);
  }
  /**
   * Remove delayed action with value for social login
   */
  removeDelayedActionForSocialLogin() {
    sessionStorage.removeItem("crossRequestDelayedActionSocialLogin");
  }
  /**
   *  Set social login delayed action as general if social login has been done
   */
  processDelayedActionForSocialLogin() {
    const customer = DataLayer.getCustomer();
    if (!customer || !customer.socialLoginStatus) {
      return;
    }
    const socialLoginDelayedAction = sessionStorage.getItem(
      "crossRequestDelayedActionSocialLogin",
    );
    if (socialLoginDelayedAction) {
      this.setDelayedAction(socialLoginDelayedAction);
    }
  }
  /**
   * Return delayed action and value
   * @returns {Object} object with delayed action and value
   *  @property {String} type delayed action type
   *  @property {String} value delayed action value
   */
  getDelayedAction() {
    this.processDelayedActionForSocialLogin();
    const delayedAction = sessionStorage.getItem("crossRequestDelayedAction");
    if (delayedAction) {
      const [type, value] = delayedAction.split("::");
      return {
        type,
        value,
      };
    }
    return null;
  }
}
export default new CrossRequestStorage();
