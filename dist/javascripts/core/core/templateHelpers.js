/* eslint-disable complexity */
import Handlebars from "handlebars/handlebars.runtime"; // this can be removed (linting fails)
/**
 * Returns component HTML with already defined model
 *
 * @param {string} section component section
 * @param {string} id component ID
 * @param {object|string} data could be component model explicitly passed as a param
 * @param {object} configId component configuration ID
 * @returns {string} Component HTML
 */
function includeComponent(...args) {
  const parent = args.pop();
  const [section, id, data, configId] = args;
  let model = data && typeof data === "object" ? data : null;
  if (!model) {
    /**
     * Logic to allow client-side rendering for sub-components
     * included through render_component or include-component helpers.
     *
     * In complex cases, such components could have dynamic configId parameter passed.
     * Sub-component must be defined in server file with all possible #configId in such case.
     * like exports.subComponents=['sub/component#config1', 'sub/component#config2']
     *
     * Ajax model for rendering must be created using proper configuration
     * (done automatically with createSubComponentsModel in abstractpagecomponent)
     * and passed under respective key in parrent model like {"section/component#config1":{<model here>}}
     */
    const subModelPath = `${section}/${id}${configId && typeof configId === "string" ? `#${configId}` : ""}`;
    const parentModel = parent.data && parent.data.root;
    if (typeof parentModel === "object" && parentModel !== null) {
      model = parentModel[subModelPath];
    }
  }
  if (model && model.suppressRender) {
    return "";
  }
  const helperId = `templates/${section}/${id}`;
  // Hadlebars.templates filled in appropriate pre-compiled hbs template, check tasks/handlebars.js#addHelpers
  const template = Handlebars.templates[helperId];
  if (template) {
    return new Handlebars.SafeString(template(model));
  }
  return "";
}
/**
 * Block helper iterator.
 * Wraps each element into a carousel using common/carousel component.
 * To render this carousel inside the component it is needed to add 'common/carousel' as a helper on BE side
 * Example: exports.helpers = [
 *              'common/carousel',
 *          ];
 * check tasks/handlebars.js#addHelpers
 *
 * @param {object[]} context -s
 * @param {...object} options carousel config (optional) and hanlebar options.
 * @return {string} get template HTML
 */
function carousel(context, ...options) {
  if (!context) {
    return "";
  }
  const carouselConfig = (options && options.length > 1 && options[0]) || {};
  const handlebarOptions = options[options.length - 1];
  const componentOptions =
    carouselConfig.componentOptions || carouselConfig.options || {};
  const model = Object.assign({}, componentOptions, carouselConfig);
  model.items = context.map((itemContext) => {
    const content = handlebarOptions.fn(itemContext);
    return { content };
  });
  return includeComponent("common", "carousel", model, null);
}
/**
 * Markup helper which renders open tag
 * @param {string} type - name of HTML tag which will be rendered
 * @param {boolean} closing - define if tag should be closed
 * @param {object} attr - hash with tag attributes
 * @return {HTMLElement} opened tag
 */
function openTag(type, closing, attr) {
  const html = [`<${type}`];
  Object.keys(attr).forEach((key) => {
    if (attr[key] || type === "option") {
      html.push(`${key}='${attr[key]}'`);
    }
  });
  return `${html.join(" ") + (!closing ? " /" : "")}>`;
}
/**
 * Markup helper which renders open tag
 * @param {string} type - name of HTML tag which will be rendered
 * @return {HTMLElement} closed tag
 */
function closeTag(type) {
  return `</${type}>`;
}
/**
 * Markup helper which renders open tag
 * @param {string} type - name of HTML tag which will be rendered
 * @param {object} attr - hash with tag attributes
 * @param {object} contents - content of tag
 * @return {HTMLElement} created element
 */
function createElement(type, attr, contents) {
  const closing = typeof attr.closing !== "undefined" ? attr.closing : true;
  delete attr.closing;
  return (
    openTag(type, closing, attr) +
    (closing ? (contents || "") + closeTag(type) : "")
  );
}
/**
 * Extends objects
 * @param {Object} obj1 - extended object
 * @param {Object} obj2 - object to extend
 * @return {Object} obj1 - extended object
 */
function extend(obj1, obj2) {
  Object.keys(obj2).forEach((key) => {
    obj1[key] = obj2[key];
  });
  return obj1;
}
/**
 * Creates tag element
 * @param {String} TagName - tag name
 * @param {Object} options - options
 * @return {HTMLElement} created element
 */
function helperTag(TagName, options) {
  if (
    options &&
    options.hash &&
    typeof options.hash.tagAttributes === "object"
  ) {
    // translate tagAttributes to hash options and remove it from hash
    Object.keys(options.hash.tagAttributes).forEach((key) => {
      const value = options.hash.tagAttributes[key];
      options.hash[key] =
        value && typeof value === "object" ? JSON.stringify(value) : value;
    });
    delete options.hash.tagAttributes;
  }
  return createElement(TagName, extend({}, options.hash), options.fn(this));
}
/**
 * Creates closing tag element
 * @param {String} TagName - tag name
 * @param {Object} options - options
 * @return {HTMLElement} created element
 */
function helperTagClosing(TagName, options) {
  if (
    options &&
    options.hash &&
    typeof options.hash.tagAttributes === "object"
  ) {
    // translate tagAttributes to hash options and remove it from hash
    Object.keys(options.hash.tagAttributes).forEach((key) => {
      const value = options.hash.tagAttributes[key];
      options.hash[key] =
        value && typeof value === "object" ? JSON.stringify(value) : value;
    });
    delete options.hash.tagAttributes;
  }
  return createElement(
    TagName,
    extend(
      {
        closing: true,
      },
      options.hash,
    ),
  );
}
/**
 * Returns component HTML. Used in pair with BE
 * helper which preserves context for wrapped component
 * @param {String} contextName name of context
 * @param {Object} contextOptions object containing context options
 * @param {Object} options Handlebars options helper object
 * @returns {String} html of component
 */
function contextHelper(contextName, contextOptions, options) {
  return options.fn(this);
}
Handlebars.registerHelper("include_component", includeComponent);
Handlebars.registerHelper("render_component", includeComponent);
Handlebars.registerHelper("carousel", carousel);
Handlebars.registerHelper("tagName", helperTag);
Handlebars.registerHelper("tagNameSelfClosing", helperTagClosing);
Handlebars.registerHelper("context", contextHelper);
/**
 * Returns stringified JSON data.
 * @param {object} data data which need to be stringified
 */
Handlebars.registerHelper("include_json", (data) => JSON.stringify(data));
