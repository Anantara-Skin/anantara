(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "services/EventEmitter",
      "toolbox/event",
      "toolbox/animate",
      "toolbox/deepMerge",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g;
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
              d = a.on;
            },
            function (a) {
              e = a.animate;
            },
            function (a) {
              f = a.deepMerge;
            },
          ],
          execute: function () {
            a(
              "default",
              (g = class extends b {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    f(
                      {
                        preventClick: !1,
                        classNames: {
                          active: "m-active",
                          animationEnter: "h-fade-in",
                          animationLeave: "h-fade-out",
                        },
                      },
                      b,
                    ),
                  ),
                    (this.closeTimeout = null);
                }
                initState() {
                  (this.state.isClosed = !0),
                    (this.state.isClosing = !1),
                    (this.state.keepOpened = !1),
                    (this.state.preventClick = this.options.preventClick);
                }
                bindEvents() {
                  d("click", this.element, this.onClick.bind(this)),
                    c.on("overlay.open", this.open, this),
                    c.on("overlay.close", this.close, this);
                }
                onClick() {
                  this.state.isClosing ||
                    this.state.isClosed ||
                    this.state.preventClick ||
                    this.close();
                }
                open() {
                  let a =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  if (
                    (this.state.isClosing &&
                      c.once(
                        "overlay.close.after",
                        this.open.bind(this, a),
                        this,
                      ),
                    (this.state.keepOpened = !!a.keepOpened),
                    !!this.state.isClosed)
                  ) {
                    (this.state.preventClick = !!a.preventClick),
                      "function" == typeof a.onClose &&
                        (this.closeCallback = a.onClose);
                    const { active: b, animationEnter: c } =
                      this.options.classNames;
                    (this.state.isClosed = !1),
                      this.element.classList.add(b),
                      e(c, this.element);
                  }
                }
                close(a) {
                  return this.state.isClosed || this.state.isClosing
                    ? void 0
                    : this.state.keepOpened
                      ? (c.emit("overlay.close.before"),
                        void (this.state.keepOpened = !1))
                      : void ((this.state.isClosing = !0),
                        (this.state.preventClick = this.options.preventClick),
                        this.element.classList.contains(
                          this.options.classNames.animationEnter,
                        ) &&
                          this.element.classList.remove(
                            this.options.classNames.animationEnter,
                          ),
                        c.emit("overlay.close.before"),
                        e(
                          this.options.classNames.animationLeave,
                          this.element,
                        ).then(this.onClose.bind(this, a)));
                }
                onClose(a) {
                  this.element.classList.remove(this.options.classNames.active),
                    a && "function" == typeof a.onClose && a.onClose(),
                    "function" == typeof this.closeCallback &&
                      (this.closeCallback(), (this.closeCallback = null)),
                    (this.state.isClosing = !1),
                    (this.state.isClosed = !0),
                    c.emit("overlay.close.after");
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=Overlay.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/global/Overlay.js
