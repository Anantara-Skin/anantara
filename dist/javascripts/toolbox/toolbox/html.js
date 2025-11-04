/* eslint-disable no-loop-func */
/**
 * Html tools
 */
/**
 * Returns list of non disabled inputs with not empty values
 *
 * @param {Object} form form DOM element
 * @returns {Object} list of form values
 */
export function getFormValues(form) {
  const params = {};
  // filter nameless & disabled elements
  [...form.elements]
    .filter((el) => !!el.name || el.disabled)
    .forEach((el) => {
      params[el.name] = el.value;
    });
  return params;
}
/**
 * Returns relative css selector
 * Script tries to find full CSS path between root and target node.
 * Runs from target node to root and prepends selector for each level or till id will be found
 * @param {HTMLElement} node target element
 * @param {HTMLElement} root root element
 * @returns {String} relative selector
 */
export function getRelativeSelector(node, root = document.body) {
  const selectorArray = [];
  if (!root.contains(node)) {
    return null;
  }
  while (node !== root) {
    let localSelector = node.tagName;
    // use id if it is not random generated
    if (node.id && !/.+-[0-9]+$/.test(node.id)) {
      localSelector += `#${node.id}`;
      selectorArray.unshift(localSelector);
      break;
    }
    Array.from(node.classList)
      .filter((item) => item.indexOf("c-") === 0)
      .forEach((item) => {
        localSelector += `.${item}`;
      });
    // write imporant attributes
    ["name", "data-component", "data-focus-id"].forEach((attr) => {
      if (node.hasAttribute(attr)) {
        localSelector += `[${attr}="${node.getAttribute(attr)}"]`;
      }
    });
    const siblingsIndex =
      Array.from(node.parentNode.children).indexOf(node) + 1;
    localSelector += `:nth-child(${siblingsIndex})`;
    selectorArray.unshift(localSelector);
    node = node.parentNode;
  }
  return selectorArray.join(">");
}
/**
 * Encode untrusted data before inserting it into HTML element content.
 * The purpose of output encoding (as it relates to Cross Site Scripting)
 * is to convert untrusted input into a safe form where the input is displayed as data
 * to the user without executing as code in the browser.
 *
 * @param {String} entity unsafe html entity
 * @returns {String} safe html entity
 */
export function encodeHTMLEntity(entity) {
  return entity
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
/**
 * Check if element is child of root element
 * @param {Element} element child element
 * @param {Element} rootElement root element
 * @returns {Boolean} true if element is child of root element
 */
export function isChildOf(element, rootElement) {
  while (element) {
    if (element === rootElement) {
      return true;
    }
    element = element.parentElement;
  }
  return false;
}
