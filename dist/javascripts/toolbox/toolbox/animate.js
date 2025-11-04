import { once } from "toolbox/event";
/**
 * Get name of the animation event depending on the browser
 * @param {string} eventName - Name of the event
 * @returns {boolean|string} - Get the animation name based on browser engine
 */
function getEventName(eventName) {
  const el = document.createElement("div");
  const eventname = eventName.toLowerCase();
  const animations = {
    animation: eventname,
    WebkitAnimation: `webkit${eventName}`,
    MozAnimation: eventname,
    OAnimation: `on${eventname}`,
    msAnimation: `MS${eventName}`,
  };
  let activeAnimation = false;
  Object.keys(animations).forEach((key) => {
    if (!activeAnimation && el.style[key] !== undefined) {
      activeAnimation = animations[key];
    }
  });
  return activeAnimation;
}
const animationName = getEventName("AnimationEnd");
const transitionName = getEventName("TransitionEnd");
/**
 * Setup an animation and animationEnd callback
 * @param {String} animationClassName - Classname
 * @param {HTMLElement} element - Element to be animated
 * @returns {Promise} - Promise
 */
export function animate(animationClassName, element) {
  return new Promise((resolve, reject) => {
    if (typeof animationClassName !== "string") {
      reject(new Error("animation name has to be a string"));
    } else if (animationClassName === "") {
      reject(new Error("animation name cannot be an empty string"));
    }
    if (!element || (element && !(element instanceof HTMLElement))) {
      reject(new Error("element should be an HTML Element"));
    }
    element.classList.add(animationClassName);
    if (!animationName) {
      resolve(element);
      return;
    }
    once(animationName, element, () => {
      element.classList.remove(animationClassName);
      resolve(element);
    });
  });
}
/**
 * Transition callback to handle transition end
 * @param {HTMLElement} element - Element to be animated
 * @param {Function} callback - Callback when animation has ended
 */
export function transition(element, callback) {
  if (!element || !(element instanceof HTMLElement)) {
    throw new Error("element should be an HTML Element");
  }
  if (!transitionName && typeof callback === "function") {
    callback();
    return;
  }
  once(transitionName, element, () => {
    if (typeof callback === "function") {
      callback();
    }
  });
}
