/**
 * Library is used for work with location url
 */
/**
 * Get url #hash by key-value object
 * @param {string} [key] optional parameter - key id
 * @returns {object} key-value object or object[key] (if the parameter 'key' is passed to the function)
 */
export function getHash(key) {
  if (!document.location.hash) {
    return false;
  }
  const hash = document.location.hash
    .slice(1)
    .split("&")
    .reduce((obj, el) => {
      const [_key, _val] = el.split("=");
      obj[_key] = _val;
      return obj;
    }, {});
  return key ? hash[key] : hash;
}
/**
 * Set url #hash as key-value string
 * @param {string} key - query param key
 * @param {string} value - query param value
 * example: setHash('tab', 'best-sellers') -> #tab=best-sellers
 */
export function setHash(key, value) {
  const hesh = getHash() || {};
  hesh[key] = value;
  document.location.hash = Object.keys(hesh)
    .map(
      (_key) => `${encodeURIComponent(_key)}=${encodeURIComponent(hesh[_key])}`,
    )
    .join("&");
}
