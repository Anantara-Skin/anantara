/**
 * CSRF tools
 */
import { getResources, fetchCSRF } from "services/Resources";
let CSRF = null;
let csrfPromise = null;
/**
 * Get the CSRF token name and value generated in the <meta> tag.
 * @returns {Promise} promise with CSRF data
 */
export function getCSRF() {
  if (CSRF) {
    return Promise.resolve(CSRF);
  }
  // Return the ongoing promise if a request is already in progress
  if (csrfPromise) {
    return csrfPromise;
  }
  // Fetch the CSRF token
  csrfPromise = getResources()
    .then(fetchCSRF)
    .then((token) => {
      CSRF = token;
      return CSRF;
    })
    .finally(() => {
      // Reset the promise once the request is complete
      csrfPromise = null;
    });
  return csrfPromise;
}
