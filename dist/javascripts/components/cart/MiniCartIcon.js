(function (System, SystemJS) {
  "use strict";
  System.register(
    ["core/Component", "services/EventEmitter", "toolbox/deepMerge"],
    function (a) {
      "use strict";
      var b, c, d, e;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              c = a.Event;
            },
            function (a) {
              d = a.deepMerge;
            },
          ],
          execute: function () {
            a(
              "default",
              (e = class extends b {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    d(
                      {
                        reloadData: {
                          section: "header",
                          id: "minicarticon",
                          skipLazyload: !0,
                        },
                        enableAnimation: !1,
                        animationDuration: 1e3,
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  super.initCache(),
                    (this.classNames = { animation: "m-animated" }),
                    (this.animationTimeout = null),
                    (this.selectors.button = this.element.querySelector(
                      "[data-js-minicart-button]",
                    )),
                    (this.selectors.minicart = this.element.closest(
                      '[data-component="cart/MiniCart"]',
                    ));
                }
                bindEvents() {
                  c.on("cart.product.added", this.updateIcon, this),
                    c.on("cart.updated", this.updateIcon, this),
                    c.on("carticon.update", this.updateIcon, this),
                    c.on("lineitem.updated", this.updateIcon, this),
                    c.on(
                      "addtobag.confirmation.closed",
                      this.onAddToBagConfirmationClosed,
                      this,
                    );
                }
                afterInit() {
                  this.updateButtonParams();
                }
                updateIcon() {
                  this.reload();
                }
                onAddToBagConfirmationClosed() {
                  this.options.enableAnimation && this.animate();
                }
                removeAnimationClass(a, b) {
                  a.classList.remove(b.animation);
                }
                animate() {
                  this.animationTimeout && clearTimeout(this.animationTimeout),
                    this.element.classList.add(this.classNames.animation),
                    (this.animationTimeout = setTimeout(
                      this.removeAnimationClass.bind(
                        this,
                        this.element,
                        this.classNames,
                      ),
                      this.options.animationDuration,
                    ));
                }
                updateButtonParams() {
                  this.selectors.minicart &&
                  "link" === this.selectors.minicart.dataset.jsButtonRole
                    ? this.selectors.button.setAttribute("role", "link")
                    : this.selectors.button.removeAttribute("role");
                }
                destroy() {
                  super.destroy(),
                    c.removeListener(
                      "cart.product.added",
                      this.updateIcon,
                      this,
                    ),
                    c.removeListener("cart.updated", this.updateIcon, this),
                    c.removeListener("lineitem.updated", this.updateIcon, this),
                    c.removeListener("carticon.update", this.updateIcon, this),
                    c.removeListener(
                      "addtobag.confirmation.closed",
                      this.onAddToBagConfirmationClosed,
                      this,
                    );
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=MiniCartIcon.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/cart/MiniCartIcon.js
