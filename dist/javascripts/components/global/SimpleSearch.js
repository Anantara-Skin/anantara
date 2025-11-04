(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "services/EventEmitter",
      "toolbox/debounce",
      "toolbox/ajax",
      "toolbox/event",
      "toolbox/deepMerge",
      "toolbox/mediaQuery",
      "core/mixwith",
      "mixins/Analytics",
      "mixins/Accessibility",
      "mixins/Loader",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i, j, k, l, m, n, o;
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
              d = a.debounce;
            },
            function (a) {
              e = a.ajax;
            },
            function (a) {
              (f = a.on), (g = a.off), (h = a.trigger);
            },
            function (a) {
              i = a.deepMerge;
            },
            function (a) {
              j = a.mediaQuery;
            },
            function (a) {
              k = a.mix;
            },
            function (a) {
              l = a.default;
            },
            function (a) {
              m = a.default;
            },
            function (a) {
              n = a.default;
            },
          ],
          execute: function () {
            a(
              "default",
              (o = class extends k(b).with(l, m, n) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    i(
                      {
                        apiUrl: "",
                        suggestionsMinChars: 3,
                        selectedSuggestionId: "searchSelectedSuggestion",
                        useOverlay: !1,
                        showClearButton: !1,
                        disableFullScreen: !1,
                        autofocus: !0,
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  (this.classes = {
                    resultsActive: "m-results-active",
                    active: "m-active",
                    suggestionActive: "m-active",
                    hidden: "h-hidden",
                  }),
                    (this.selectors.searchField = this.element.querySelector(
                      "[data-js-search-input]",
                    )),
                    (this.selectors.resultsContainer =
                      this.element.querySelector("[data-js-search-results]")),
                    (this.selectors.contentContainer =
                      this.element.querySelector("[data-js-search-content]")),
                    (this.selectors.resultsGroup = this.element.querySelector(
                      "[data-js-search-results-group]",
                    )),
                    (this.selectors.closeButton = this.element.querySelector(
                      "[data-js-search-close]",
                    )),
                    (this.selectors.clearButton = this.element.querySelector(
                      "[data-js-search-clear]",
                    )),
                    (this.selectors.submitButton = this.element.querySelector(
                      "[data-js-search-submit]",
                    )),
                    (this.selectors.searchAria = this.element.querySelector(
                      "[data-js-header-search-aria]",
                    ));
                }
                initState() {
                  (this.state.isResultOpen = !1),
                    (this.state.isActive = !1),
                    (this.state.contentLoaded = !1),
                    (this.state.isFirstTab = !1);
                }
                afterInit() {
                  this.options.autofocus && this.selectors.searchField.focus();
                }
                bindEvents() {
                  const {
                    searchField: a,
                    closeButton: b,
                    clearButton: e,
                  } = this.selectors;
                  this.options.apiUrl &&
                    (f(
                      "keyup",
                      a,
                      d((a) => this.onSearchKeyUp(a), 300),
                    ),
                    f(
                      "focus",
                      a,
                      d((a) => this.onSearchFocus(a), 300),
                    ),
                    f("keydown", a, this.onSearchKeydown.bind(this))),
                    b && f("click", b, this.onClose.bind(this)),
                    this.options.showClearButton &&
                      f("click", e, this.onClear.bind(this)),
                    f(
                      "click",
                      this.selectors.submitButton,
                      this.onSubmit.bind(this),
                    ),
                    c.on("header.search.open", this.onOpen, this),
                    c.on("header.search.close", this.onReset, this);
                }
                onSubmit(a) {
                  this.selectors.searchField.value.trim().length ||
                    (a.preventDefault(), this.onClose());
                }
                onOpen() {
                  (this.state.isActive = !0),
                    this.element.classList.add(this.classes.active),
                    this.focus(),
                    this.options.disableFullScreen ||
                      j.is("large") ||
                      j.is("xlarge") ||
                      ((this.state.documentScrollY = "".concat(
                        window.scrollY,
                        "px",
                      )),
                      c.emit("full.screen.absolute.enabled", {
                        onEnable: () => {
                          this.element.scrollIntoView(!0);
                        },
                      })),
                    this.state.contentLoaded
                      ? this.setFocusedOrder(this.element)
                      : e(this.options.contentUrl)
                          .then(this.onContentSuccess.bind(this))
                          .then(() => {
                            this.setFocusedOrder(this.element);
                          })
                          .catch(() => {});
                }
                onContentSuccess(a) {
                  (this.selectors.contentContainer.innerHTML = a || ""),
                    (this.state.contentLoaded = !0),
                    this.selectors.contentContainer
                      .querySelectorAll("script")
                      .forEach((a) => {
                        const b = document.createElement("script");
                        (b.text = a.innerHTML),
                          (b.async = a.async),
                          (b.defer = a.defer),
                          (b.type = a.type),
                          a.remove(),
                          this.selectors.contentContainer.appendChild(b);
                      });
                }
                onReset() {
                  (this.state.isActive = !1),
                    this.setFieldValue(""),
                    this.selectors.searchField.removeAttribute(
                      "aria-activedescendant",
                    ),
                    (this.selectors.resultsContainer.innerHTML = ""),
                    this.element.classList.remove(this.classes.active),
                    this.hideResults(),
                    this.options.showClearButton && this.hideClearButton(),
                    this.options.disableFullScreen ||
                      j.is("xlarge") ||
                      (c.emit("full.screen.absolute.disabled", !0),
                      this.state.documentScrollY &&
                        window.scrollTo(
                          0,
                          parseInt(this.state.documentScrollY || "0", 10),
                        ));
                }
                onClose() {
                  this.onReset(),
                    c.emit("simplesearch.close", { restoreFocus: !0 });
                }
                onClear() {
                  this.clearSearch(), this.focus();
                }
                onSearchKeyUp(a) {
                  -1 !== ["Tab", "ArrowDown", "ArrowUp"].indexOf(a.key) ||
                    (this.options.showClearButton &&
                      (a.target.value.trim().length
                        ? this.showClearButton()
                        : this.hideClearButton()),
                    this.addLoader(this.selectors.resultsGroup, {
                      overlay: !0,
                    }),
                    this.getSuggestions(a.target.value)
                      .then(() => this.showResults())
                      .catch((a) => {
                        window.lora.debug && console.error(a.message);
                      })
                      .finally(() =>
                        this.removeLoader(this.selectors.resultsGroup),
                      ));
                }
                focus() {
                  this.selectors.searchField.focus();
                }
                onSearchKeydown(a) {
                  switch (a.key) {
                    case "ArrowUp":
                    case "ArrowDown":
                      this.onArrowKey(a);
                      break;
                    case "Tab":
                      this.onTabKey();
                      break;
                    case "Enter":
                      this.onSubmit(a);
                      break;
                    default:
                  }
                }
                onArrowKey(a) {
                  this.state.isResultOpen &&
                    ((this.selectors.suggestions =
                      this.selectors.suggestionsContainer.querySelectorAll(
                        "[aria-selected]",
                      )),
                    (this.selectors.selectedSuggestion =
                      this.selectors.suggestionsContainer.querySelector(
                        "#".concat(this.options.selectedSuggestionId),
                      )),
                    -1 !== ["ArrowUp"].indexOf(a.key) &&
                      (this.selectors.nextSuggestion =
                        this.selectPreviousSuggestion()),
                    -1 !== ["ArrowDown"].indexOf(a.key) &&
                      (this.selectors.nextSuggestion =
                        this.selectNextSuggestion()),
                    this.selectSuggestion(this.selectors.nextSuggestion));
                }
                selectPreviousSuggestion() {
                  return this.selectors.selectedSuggestion
                    ? this.selectors.selectedSuggestion.previousElementSibling
                    : this.selectors.suggestions[
                        this.selectors.suggestions.length - 1
                      ];
                }
                selectNextSuggestion() {
                  return this.selectors.selectedSuggestion
                    ? this.selectors.selectedSuggestion.nextElementSibling
                    : this.selectors.suggestions[0];
                }
                selectSuggestion(a) {
                  return (
                    this.selectors.searchField.removeAttribute(
                      "aria-activedescendant",
                    ),
                    this.selectors.selectedSuggestion &&
                      (this.selectors.selectedSuggestion.setAttribute(
                        "aria-selected",
                        "false",
                      ),
                      this.selectors.selectedSuggestion.setAttribute("id", ""),
                      this.selectors.selectedSuggestion.classList.remove(
                        this.classes.suggestionActive,
                      )),
                    a
                      ? void (a.setAttribute("aria-selected", "true"),
                        a.setAttribute("id", this.options.selectedSuggestionId),
                        a.classList.add(this.classes.suggestionActive),
                        this.selectors.searchField.setAttribute(
                          "aria-activedescendant",
                          this.options.selectedSuggestionId,
                        ),
                        this.setFieldValue(a.textContent.trim()))
                      : void this.setFieldValue(this.originalSearchTerm)
                  );
                }
                onTabKey() {
                  (this.tabNavigation = !0),
                    this.state.isFirstTab ||
                      (this.resetFocusedOrder(this.element),
                      this.setFocusedOrder(this.element),
                      (this.state.isFirstTab = !0));
                }
                onSearchFocus(a) {
                  const b = a.target;
                  b.value.trim().length >= this.options.suggestionsMinChars &&
                    (this.showResults(), (this.tabNavigation = !1));
                }
                getSuggestions(a) {
                  return a.trim().length >= this.options.suggestionsMinChars
                    ? e(
                        this.options.apiUrl +
                          encodeURIComponent(this.selectors.searchField.value),
                      )
                        .then((a) => this.onGetSuggestionsSuccess(a))
                        .catch(() => this.onGetSuggestionsFail())
                    : (this.state.isResultOpen && this.hideResults(),
                      Promise.reject(
                        new Error(
                          "".concat(
                            this.options.suggestionsMinChars,
                            " chars minimum is required",
                          ),
                        ),
                      ));
                }
                onGetSuggestionsSuccess() {
                  for (
                    var a = arguments.length, b = Array(a), c = 0;
                    c < a;
                    c++
                  )
                    b[c] = arguments[c];
                  this.updateSuggestions(b);
                }
                onGetSuggestionsFail() {
                  this.updateSuggestions("An error occured");
                }
                updateSuggestions(a) {
                  (this.selectors.resultsContainer.innerHTML = a),
                    (this.selectors.suggestionsContainer =
                      this.selectors.resultsContainer.querySelector(
                        "[data-js-search-terms]",
                      )),
                    (this.originalSearchTerm =
                      this.selectors.searchField.value),
                    c.emit(
                      "registry.registerChildren",
                      this.selectors.resultsContainer,
                    );
                }
                showResults() {
                  this.resetFocusedOrder(this.element),
                    (this.state.isResultOpen = !0),
                    this.element.classList.add(this.classes.resultsActive),
                    this.selectors.searchField.setAttribute(
                      "aria-expanded",
                      "true",
                    ),
                    this.setSearchAria(),
                    this.options.useOverlay &&
                      (h("simplesearch.results.show", this.element, {
                        bubbles: !0,
                      }),
                      c.emit("overlay.open", {
                        onClose: () => {
                          h("simplesearch.results.hide", this.element, {
                            bubbles: !0,
                          }),
                            h("simplesearch.overlay.closed", this.element, {
                              bubbles: !0,
                            });
                        },
                      })),
                    this.setFocusedOrder(this.element);
                }
                hideResults() {
                  this.state.isResultOpen &&
                    (this.resetFocusedOrder(this.element),
                    (this.state.isResultOpen = !1),
                    this.element.classList.remove(this.classes.resultsActive),
                    this.selectors.searchField.setAttribute(
                      "aria-expanded",
                      "false",
                    ),
                    this.clearSearchAria(),
                    this.options.useOverlay && c.emit("overlay.close"),
                    this.setFocusedOrder(this.element));
                }
                showClearButton() {
                  this.selectors.clearButton.classList.add(this.classes.active),
                    this.selectors.submitButton.classList.add(
                      this.classes.hidden,
                    );
                }
                hideClearButton() {
                  this.selectors.clearButton.classList.remove(
                    this.classes.active,
                  ),
                    this.selectors.submitButton.classList.remove(
                      this.classes.hidden,
                    );
                }
                setFieldValue() {
                  let a =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : "";
                  this.selectors.searchField.value = a;
                }
                clearSearch() {
                  this.setFieldValue(""), this.hideClearButton();
                }
                setSearchAria() {
                  const a = this.element.querySelector(
                    "[data-js-search-suggestions-aria]",
                  );
                  this.selectors.searchAria.innerHTML = a && a.innerHTML;
                }
                clearSearchAria() {
                  this.selectors.searchAria.innerHTML = "";
                }
                unbindEvents() {
                  const {
                    searchField: a,
                    closeButton: b,
                    clearButton: d,
                  } = this.selectors;
                  this.options.apiUrl &&
                    ["keyup", "blur", "focus", "keydown"].forEach((b) => {
                      g(b, a);
                    }),
                    b && g("click", b),
                    this.options.showClearButton && g("click", d),
                    g("click", this.selectors.submitButton),
                    c.removeListener("header.search.open", this.onOpen, this),
                    c.removeListener("header.search.close", this.onReset, this);
                }
                destroy() {
                  this.unbindEvents();
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=SimpleSearch.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/global/SimpleSearch.js
