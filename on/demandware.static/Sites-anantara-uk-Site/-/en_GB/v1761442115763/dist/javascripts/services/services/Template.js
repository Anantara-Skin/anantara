import "core/templateHelpers";
import { Event } from "services/EventEmitter";
/**
 * Callback when template is loaded
 * @param {object} options - options passed to the template
 * @param {string} template - HTML structure
 * @returns {HTMLElement} - HTML Element
 */
function onTemplateLoad(options, template) {
  const content = template.default(options.data);
  if (options.isPlainHTML) {
    return content;
  }
  const frag = document.createRange().createContextualFragment(content);
  const component = frag.querySelector("[data-component]");
  if (component) {
    Event.emit("registry.registerChildren", frag);
  }
  return frag;
}
/**
 * Error callback on template load
 * @param {object} error - Error thrown
 * @returns {object} error
 */
function onTemplateLoadError(error) {
  return error;
}
/**
 * Load the template with its data
 * @param {Object} options - Data to be processed by the template
 * @returns {Promise} promise - Promise
 */
export function loadTemplate(options) {
  const { templateName, template } = options;
  if (templateName) {
    // In case of templateName (templatePath) we need to fetch the template
    return SystemJS.import(`templates/${templateName}`)
      .then(onTemplateLoad.bind(this, options))
      .catch(onTemplateLoadError.bind(this));
  }
  if (template) {
    // In case the template is provided directly in HTML format
    return Promise.resolve().then(onTemplateLoad.bind(this, options));
  }
  throw new Error("loadTemplate is missing a template or templateName param");
}
