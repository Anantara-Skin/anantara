(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "toolbox/deepMerge",
      "services/EventEmitter",
      "toolbox/event",
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
              c = a.deepMerge;
            },
            function (a) {
              d = a.Event;
            },
            function (a) {
              (e = a.on), (f = a.off);
            },
          ],
          execute: function () {
            (h = "Tab"),
              a(
                "default",
                (g = class extends b {
                  constructor(a) {
                    let b =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    super(a, c({ _resizable: !0, _scrollable: !0 }, b));
                  }
                  initCache() {
                    this.classNames = {
                      enabled: "m-visible",
                      hurry: "m-hurry",
                    };
                  }
                  initState() {
                    (this.state.isHighlighterVisible = !1),
                      (this.state.lastFocusedElement = void 0),
                      (this.state.isHeaderFocused = !1),
                      (this.state.lastFocusedElementCoords = "");
                  }
                  bindEvents() {
                    e("keyup", document, this.handleKeyup.bind(this)),
                      e("mousedown", document, this.handleMousedown.bind(this)),
                      d.on("highlighter.update", this.updateHighlighter, this);
                  }
                  handleKeyup(a) {
                    a.key === h && this.enableHighlighter();
                  }
                  handleMousedown(a) {
                    if (
                      !(
                        a.target instanceof HTMLElement ||
                        a.target instanceof HTMLDocument
                      )
                    )
                      return;
                    const b = a.target instanceof HTMLSelectElement,
                      c =
                        a.target instanceof HTMLButtonElement ||
                        "button" === a.target.getAttribute("role"),
                      d =
                        a.target instanceof HTMLInputElement &&
                        "radio" === a.target.getAttribute("type");
                    b ||
                      c ||
                      d ||
                      (this.state.isHighlighterVisible &&
                        this.disableHighlighter());
                  }
                  onResize() {
                    this.updateHighlighter();
                  }
                  onScroll() {
                    this.updateHighlighter();
                  }
                  updateHighlighter() {
                    this.state.isHighlighterVisible &&
                      this.state.lastFocusedElement &&
                      this.moveTo(this.state.lastFocusedElement);
                  }
                  handleFocus() {
                    if (document.activeElement instanceof HTMLElement) {
                      const a = document.activeElement;
                      this.isValidTarget(a) &&
                        (!this.isTextInput(a) ||
                          this.state.isHighlighterVisible) &&
                        (!this.state.isHeaderFocused &&
                          a.closest("[data-js-header]") &&
                          ((this.state.isHeaderFocused = !0),
                          d.emit("header.focused")),
                        this.detectHurryNavigation(),
                        this.moveTo(a));
                    }
                  }
                  enableHighlighter() {
                    this.state.isHighlighterVisible ||
                      ((this.state.isHighlighterVisible = !0),
                      this.element.classList.add(this.classNames.enabled),
                      this.handleFocus(),
                      e("focusin", document, this.handleFocus.bind(this)),
                      e("blur", window, this.onWindowBlur.bind(this)),
                      (this.highlighterInterval = window.setInterval(() => {
                        this.updateHighlighter();
                      }, 300)));
                  }
                  disableHighlighter() {
                    this.state.isHighlighterVisible &&
                      (f("focusin", document),
                      f("blur", window),
                      this.state.isHeaderFocused &&
                        ((this.state.isHeaderFocused = !1),
                        d.emit("header.unfocused")),
                      (this.state.isHighlighterVisible = !1),
                      (this.state.lastFocusedElement = void 0),
                      this.element.classList.remove(this.classNames.enabled),
                      (this.hideTimeOut = window.setTimeout(
                        () => this.hide(),
                        200,
                      )),
                      this.highlighterInterval &&
                        (window.clearInterval(this.highlighterInterval),
                        (this.highlighterInterval = null)));
                  }
                  onWindowBlur() {
                    "iframe" === document.activeElement.tagName.toLowerCase() &&
                      this.disableHighlighter();
                  }
                  moveTo(a) {
                    if (!(a instanceof HTMLElement)) return;
                    let b, c;
                    const d = a.getBoundingClientRect(),
                      e = d.left + window.scrollX,
                      f = d.top + window.scrollY - 6,
                      g = d.height + 6;
                    if (
                      (d.width >= document.body.clientWidth
                        ? ((b = d.width - 12), (c = 3))
                        : 6 > e
                          ? ((b = d.width - 6), (c = 3))
                          : e + d.width + 6 >= document.body.clientWidth
                            ? ((b = d.width - 6),
                              (c = document.body.clientWidth - d.width - 3))
                            : ((b = d.width + 6), (c = e - 6)),
                      a !== this.state.lastFocusedElement ||
                        this.state.lastFocusedElementCoords !==
                          "".concat(f).concat(c).concat(b).concat(g))
                    ) {
                      const d = this.element.style;
                      (d.top = "".concat(f, "px")),
                        (d.left = "".concat(c, "px")),
                        (d.width = "".concat(0 <= b ? b : 0, "px")),
                        (d.height = "".concat(g, "px")),
                        (this.state.lastFocusedElementCoords = ""
                          .concat(f)
                          .concat(c)
                          .concat(b)
                          .concat(g)),
                        (this.state.lastFocusedElement = a);
                    }
                  }
                  hide() {
                    const a = this.element.style;
                    (a.width = "0"),
                      (a.height = "0"),
                      this.hideTimeOut && window.clearTimeout(this.hideTimeOut);
                  }
                  detectHurryNavigation() {
                    const a = Date.now(),
                      b = 150 > a - (this.lastKeyTime || 0);
                    b && !this.isHurryNavigation
                      ? (this.element.classList.add(this.classNames.hurry),
                        (this.isHurryNavigation = !0))
                      : this.isHurryNavigation &&
                        (this.element.classList.remove(this.classNames.hurry),
                        (this.isHurryNavigation = !1)),
                      (this.lastKeyTime = a);
                  }
                  isValidTarget(a) {
                    return (
                      a !== this.state.lastFocusedElement &&
                      "HTML" !== a.nodeName &&
                      "BODY" !== a.nodeName
                    );
                  }
                  isTextInput(a) {
                    return (
                      (a instanceof HTMLTextAreaElement && !a.readOnly) ||
                      (a instanceof HTMLInputElement && !a.readOnly) ||
                      !!a.getAttribute("contenteditable")
                    );
                  }
                  destroy() {
                    this.state.isHighlighterVisible &&
                      this.disableHighlighter(),
                      f("keyup mousedown", document),
                      d.removeListener("highlighter.update");
                  }
                }),
              );
          },
        }
      );
    },
  );
  //# sourceMappingURL=FocusHighlighter.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/global/FocusHighlighter.js
