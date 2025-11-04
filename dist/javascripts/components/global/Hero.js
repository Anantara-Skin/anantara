(function (System, SystemJS) {
  "use strict";
  System.register(
    ["components/global/PromotionTile", "toolbox/deepMerge"],
    function (a) {
      "use strict";
      var b, c, d;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              c = a.deepMerge;
            },
          ],
          execute: function () {
            a(
              "default",
              (d = class extends b {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(a, c({ overlapOnScroll: !1, _resizable: !0 }, b));
                }
                initCache() {
                  super.initCache(),
                    (this.classes = { stick: "m-sticky-image" }),
                    this.options.overlapOnScroll &&
                      ((this.selectors.heroOverlay = this.element.querySelector(
                        "[data-js-hero-placeholder]",
                      )),
                      (this.selectors.heroMedia = this.element.querySelector(
                        "[data-js-hero-media]",
                      )),
                      (this.selectors.videoControl = this.element.querySelector(
                        "[data-js-video-control]",
                      )),
                      (this.selectors.heroCaption = this.element.querySelector(
                        "[data-js-hero-caption]",
                      )));
                }
                afterInit() {
                  super.afterInit(),
                    this.options.overlapOnScroll &&
                      (this.updateObserverThreshold(),
                      this.selectors.videoControl &&
                        this.selectors.heroCaption &&
                        this.moveVideoControl());
                }
                onResize() {
                  this.options.overlapOnScroll &&
                    this.updateObserverThreshold();
                }
                updateObserverThreshold() {
                  this.observer &&
                    (this.observer.unobserve(this.element),
                    this.observer.disconnect());
                  const a = this.element.getBoundingClientRect().height;
                  let b = 1;
                  if (0.7 < a / window.innerHeight) {
                    const c = window.innerHeight / a,
                      d = 1 < c ? 1 : Math.floor(100 * c) / 100;
                    b = [d - 0.1, d - 0.05, d - 0.01, d];
                  }
                  (this.observer = new window.IntersectionObserver(
                    this.onIntersection.bind(this),
                    { threshold: b },
                  )),
                    this.observer.observe(this.element);
                }
                onIntersection(a) {
                  a.forEach((a) => {
                    0 <= a.boundingClientRect.top
                      ? this.unstick()
                      : this.stick();
                  });
                }
                stick() {
                  if (this.state.isSticky) return;
                  const a = this.selectors.heroMedia.offsetWidth,
                    b = this.selectors.heroMedia.offsetHeight;
                  (this.selectors.heroMedia.style.width = "".concat(a, "px")),
                    this.element.classList.add(this.classes.stick),
                    (this.selectors.heroOverlay.style.width = "".concat(
                      a,
                      "px",
                    )),
                    (this.selectors.heroOverlay.style.height = "".concat(
                      b,
                      "px",
                    )),
                    (this.state.isSticky = !0);
                }
                unstick() {
                  this.state.isSticky &&
                    ((this.selectors.heroOverlay.style.width = null),
                    (this.selectors.heroOverlay.style.height = null),
                    this.element.classList.remove(this.classes.stick),
                    (this.selectors.heroMedia.style.width = null),
                    (this.state.isSticky = !1));
                }
                moveVideoControl() {
                  this.element.insertBefore(
                    this.selectors.videoControl,
                    this.selectors.heroCaption,
                  );
                }
                destroy() {
                  super.destroy(),
                    this.options.overlapOnScroll &&
                      (this.unstick(),
                      this.observer.unobserve(this.element),
                      this.observer.disconnect());
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=Hero.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/global/Hero.js
