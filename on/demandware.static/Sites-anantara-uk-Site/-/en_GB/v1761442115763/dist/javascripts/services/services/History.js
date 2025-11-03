import { Event } from "services/EventEmitter";
import { encodeHTMLEntity } from "toolbox/html";
let GLOBAL_PREVIOUS_STATE = null;
/**
 * Push state
 * @param {Object} data - Data to be pushed
 * @param  {...*} args - list of arguments
 */
export function pushState(data, ...args) {
  if (data && data.pageTitle) {
    document.title = encodeHTMLEntity(data.pageTitle);
  }
  window.history.pushState(data, ...args);
}
/**
 * Replace state
 * @param {Object} data - Data to be updated
 * @param  {...*} args - list of arguments
 */
export function replaceState(data, ...args) {
  if (data && data.pageTitle) {
    document.title = encodeHTMLEntity(data.pageTitle);
  }
  window.history.replaceState(data, ...args);
}
window.onpushstate = function onpushstate(e) {
  GLOBAL_PREVIOUS_STATE = e.state;
};
window.onpopstate = function onpopstate(e) {
  if (e.state) {
    // @TODO: do we need to update other meta tags like description, keywords, etc. ?
    if (e.state.pageTitle) {
      document.title = encodeHTMLEntity(e.state.pageTitle);
    }
    const globalPrevState = GLOBAL_PREVIOUS_STATE;
    if (!globalPrevState || globalPrevState.isHistoryState) {
      Event.emit("state.changed", e.state);
    }
  }
};
