/**
 * Perform necessary DOM modifications in order to prevent main content scrolling when a full-screen overlay is opened.
 *
 * It's recommended to use this functionality for iOS platform related issues caused by fixed full-screen overlay
 *
 */
export function mobileScrollDisable() {
  document.documentElement.classList.add("m-prevent-mobile-scroll");
}
/**
 * Perform necessary DOM modifications in order to enable main content scrolling when a full-screen overlay is closed.
 *
 * It's recommended to use this functionality for iOS platform related issues caused by fixed full-screen overlay
 *
 */
export function mobileScrollEnable() {
  document.documentElement.classList.remove("m-prevent-mobile-scroll");
}
/**
 * Function for scroll
 * @param {String|HTMLElement} element element you want to scroll to
 * @param {String|HTMLElement} scrollTopOffset fixed header navigation height
 * @param {String} snapDirection - set to 'vertical' or 'horizontal' to scroll only on one axis
 */
export function scrollTo(element, scrollTopOffset, snapDirection) {
  if (element) {
    const getElementCoords = element.getBoundingClientRect();
    const topCoordCalc =
      window.scrollY + getElementCoords.top - (scrollTopOffset || 0);
    const topCoord =
      snapDirection === "horizontal" ? window.scrollY : topCoordCalc;
    if (!snapDirection) {
      const inViewportHorizontally =
        getElementCoords.left >= 0 &&
        getElementCoords.right <= window.innerWidth;
      snapDirection = inViewportHorizontally ? "vertical" : "";
    }
    const leftCoord =
      snapDirection === "vertical" ? window.scrollX : getElementCoords.left;
    window.scroll(leftCoord, topCoord);
  }
}
/**
 * Waiting for scroll end polyfill for browser not supporting scrollend event (e.g. Safari)
 * Usage: this.waitForScrollEnd().then(() => this.handleScroll());
 * @returns {Promise} - promise object
 */
export function waitForScrollEnd() {
  let lastChangedFrame = 0;
  let lastX = window.scrollX;
  let lastY = window.scrollY;
  return new Promise((resolve) => {
    /**
     * We requestAnimationFrame either for 500 frames or until 20 frames with no change have been observed.
     * @param {number} frames - number of frames
     */
    function tick(frames) {
      if (frames >= 500 || frames - lastChangedFrame > 20) {
        resolve();
      } else {
        if (window.scrollX !== lastX || window.scrollY !== lastY) {
          lastChangedFrame = frames;
          lastX = window.scrollX;
          lastY = window.scrollY;
        }
        requestAnimationFrame(tick.bind(null, frames + 1));
      }
    }
    tick(0);
  });
}
