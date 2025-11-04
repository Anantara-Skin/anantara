(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "core/mixwith",
      "toolbox/event",
      "toolbox/deepMerge",
      "mixins/Analytics",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              c = a.mix;
            },
            function (a) {
              (d = a.on), (e = a.off);
            },
            function (a) {
              f = a.deepMerge;
            },
            function (a) {
              g = a.default;
            },
          ],
          execute: function () {
            a(
              "default",
              (h = class extends c(b).with(g) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    f(
                      {
                        classNames: { active: "m-active" },
                        scrollTo: 0,
                        offset: "auto",
                        _resizable: !0,
                        _scrollable: !0,
                      },
                      b,
                    ),
                  );
                }
                initState() {
                  (this.state.isActive = !1), this.setOffsetSize();
                }
                setOffsetSize() {
                  this.state.offset =
                    "auto" === this.options.offset
                      ? 0.5 * window.innerHeight
                      : this.options.offset;
                }
                bindEvents() {
                  d("click", this.element, this.onClick.bind(this)),
                    d("keypress", this.element, this.onKeyPress.bind(this));
                }
                onScroll() {
                  0 >= this.state.offset ||
                    (window.scrollY >= this.state.offset
                      ? !this.state.isActive && this.show()
                      : this.state.isActive && this.hide());
                }
                onClick() {
                  this.sendAnalytics(this.analytics),
                    window.scroll({ top: this.options.scrollTo });
                }
                onKeyPress(a) {
                  const b = document.querySelector("[data-js-skip-to-content]");
                  -1 !== ["Enter", " "].indexOf(a.key) &&
                    (window.scroll({ top: this.options.scrollTo }),
                    b && b.focus());
                }
                show() {
                  this.element.classList.add(this.options.classNames.active),
                    (this.state.isActive = !0);
                }
                hide() {
                  this.element.classList.remove(this.options.classNames.active),
                    (this.state.isActive = !1);
                }
                destroy() {
                  e("click", this.element), e("keypress", this.element);
                }
                onResize() {
                  "auto" === this.options.offset && this.setOffsetSize();
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=BackTop.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/global/BackTop.js
