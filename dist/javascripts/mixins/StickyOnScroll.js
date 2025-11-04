(function (System, SystemJS) {
  "use strict";
  System.register(["core/mixwith", "toolbox/deepMerge"], function (a) {
    "use strict";
    var b, c;
    return {
      setters: [
        function (a) {
          b = a.Mixin;
        },
        function (a) {
          c = a.deepMerge;
        },
      ],
      execute: function () {
        a(
          "default",
          b(
            (a) =>
              class extends a {
                constructor(a) {
                  let b =
                    1 < arguments.length && arguments[1] !== void 0
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    c(
                      {
                        _scrollable: !0,
                        stickyContainerClass: null,
                        isStickyOnScroll: !1,
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  super.initCache(),
                    this.options.stickyContainerClass &&
                      this.options.isStickyOnScroll &&
                      (this.selectors.stickyContainer = this.element.closest(
                        this.options.stickyContainerClass,
                      ));
                }
                onScroll() {
                  if (
                    this.selectors.stickyContainer &&
                    this.options.isStickyOnScroll
                  ) {
                    const a =
                      this.selectors.stickyContainer.getBoundingClientRect();
                    0 >= a.bottom
                      ? this.selectors.stickyContainer.classList.add("m-sticky")
                      : this.selectors.stickyContainer.classList.remove(
                          "m-sticky",
                        );
                  }
                }
              },
          ),
        );
      },
    };
  });
  //# sourceMappingURL=StickyOnScroll.js.map
})(System, System);
//# sourceURL=/dist/javascripts/mixins/StickyOnScroll.js
