(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "components/global/AbstractField",
      "toolbox/ajax",
      "toolbox/deepMerge",
      "toolbox/validators",
      "toolbox/event",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              c = a.ajax;
            },
            function (a) {
              d = a.deepMerge;
            },
            function (a) {
              e = a.default;
            },
            function (a) {
              (f = a.on), (g = a.off), (h = a.trigger);
            },
          ],
          execute: function () {
            a(
              "default",
              (i = class extends b {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    d(
                      {
                        limitItems: 0,
                        limitSeparator: ",",
                        charCounter: !1,
                        restoreValueOnError: !1,
                        isConvertToUpper: !1,
                        autofocus: !1,
                        serverValidationOnChange: !1,
                        serverValidationErrorMessage: null,
                        serverValidationURL: null,
                        forcedPattern: null,
                        classNames: { counter: "c-text-field__counter" },
                      },
                      b,
                    ),
                  );
                }
                bindEvents() {
                  super.bindEvents(),
                    (this.options.charCounter ||
                      this.options.isConvertToUpper ||
                      this.options.forcedPattern) &&
                      f("input", this.field, this.onChangeText.bind(this)),
                    "date" === this.field.type &&
                      this.field.getAttribute("readonly") &&
                      f(
                        "mousedown",
                        this.field,
                        this.onMousedownReadonlyDate.bind(this),
                      );
                }
                initState() {
                  super.initState(),
                    (this.state.message = ""),
                    (this.state.prevValue = this.field.value),
                    (this.state.ariaDescribedBy = this.field.hasAttribute(
                      "aria-describedby",
                    )
                      ? this.field.getAttribute("aria-describedby")
                      : ""),
                    this.options.charCounter &&
                      ((this.state.ariaDescribedBy = ""
                        .concat(this.state.ariaDescribedBy, " ")
                        .concat(this.field.id, "-counter")
                        .trim()),
                      (this.state.maxLength = parseInt(
                        this.field.getAttribute("maxlength"),
                        10,
                      )));
                }
                afterInit() {
                  super.afterInit(), this.initFieldState();
                  const a = {
                    limitItems: this.options.limitItems,
                    limitSeparator: this.options.limitSeparator,
                  };
                  (this._validators = d(this._validators, {
                    maxitems: (b) => e.maxitems(b, a),
                  })),
                    this.options.charCounter &&
                      (this.field.setAttribute(
                        "aria-describedby",
                        this.state.ariaDescribedBy,
                      ),
                      this.showCounter(),
                      (this.selectors.countElement =
                        this.element.querySelector("[data-js-count]")),
                      this.onChangeText()),
                    this.options.autofocus && this.field.focus();
                }
                onNativeError(a) {
                  return this.options.restoreValueOnError
                    ? (a.preventDefault(),
                      (this.field.value = this.state.message),
                      !0)
                    : super.onNativeError(a);
                }
                onChangeText() {
                  return this.options.forcedPattern &&
                    !new RegExp(this.options.forcedPattern).test(
                      this.field.value,
                    )
                    ? void (this.field.value = this.state.prevValue)
                    : void (this.options.isConvertToUpper &&
                        this.field.value &&
                        (this.field.value = this.field.value.toUpperCase()),
                      this.options.charCounter &&
                        this.state.maxLength &&
                        (this.field.value = this.field.value.substring(
                          0,
                          this.state.maxLength,
                        )),
                      this.options.restoreValueOnError
                        ? this.field.checkValidity() &&
                          (this.state.message = this.field.value)
                        : (this.state.message = this.field.value),
                      this.options.charCounter &&
                        (this.selectors.countElement.innerText =
                          this.field.value.length),
                      (this.state.prevValue = this.field.value));
                }
                onValidation() {
                  super.onValidation(),
                    !this.errorElement &&
                      this.options.serverValidationOnChange &&
                      this.serverValidation().catch(() => {});
                }
                onReset() {
                  super.onReset(),
                    (this.element.value = ""),
                    this.setFieldState(!1),
                    this.element.classList.remove(this.classes.focus);
                }
                showCounter() {
                  const a = document.createElement("span");
                  a.classList.add(this.options.classNames.counter),
                    a.setAttribute("data-js-counter", ""),
                    a.setAttribute("id", "".concat(this.field.id, "-counter")),
                    (a.innerHTML = this.field.dataset.customMessageCharcounter),
                    this.element.appendChild(a),
                    (this.selectors.maxLengthElement =
                      this.element.querySelector("[data-js-max]"));
                }
                removeError() {
                  super.removeError(),
                    this.state.ariaDescribedBy &&
                      this.field.setAttribute(
                        "aria-describedby",
                        this.state.ariaDescribedBy,
                      );
                }
                serverValidation(a) {
                  const b =
                    this.field.dataset.serverValidationUrl ||
                    this.options.serverValidationURL;
                  if (!b)
                    return Promise.reject(
                      new Error(
                        "URL for server-side validation is not configured",
                      ),
                    );
                  const d = -1 === b.indexOf("?") ? "?" : "&";
                  let e = ""
                    .concat(b)
                    .concat(d)
                    .concat(a || "message", "=")
                    .concat(encodeURIComponent(this.field.value));
                  return (
                    this.field.dataset.serverValidationCustomAssetId &&
                      (e += "&customassetid=".concat(
                        this.field.dataset.serverValidationCustomAssetId,
                      )),
                    c(e).catch((a) => {
                      const b =
                        this.options.serverValidationErrorMessage ||
                        a.data.errorMessage;
                      return (
                        h("field.invalidate", this.field, {
                          errorMessage: b,
                          errorKey: "customError",
                        }),
                        Promise.reject(a)
                      );
                    })
                  );
                }
                initFieldState() {
                  "" !== this.field.value && this.setFieldState(!0);
                }
                onLeave() {
                  this.trim(), super.onLeave();
                }
                updateMessageLength(a) {
                  0 >= a && (a = 0),
                    this.state.message &&
                      this.state.message.length > a &&
                      ((this.state.message = this.state.message.substring(
                        0,
                        a,
                      )),
                      (this.field.value = this.state.message),
                      this.selectors.countElement &&
                        (this.selectors.countElement.innerText = this.state
                          .message
                          ? this.state.message.length
                          : 0),
                      h("change", this.field, { bubbles: !0 })),
                    this.selectors.maxLengthElement &&
                      ((this.selectors.maxLengthElement.innerText = a),
                      this.field.setAttribute("maxlength", a),
                      (this.state.maxLength = a));
                }
                onMousedownReadonlyDate(a) {
                  return a.preventDefault(), !1;
                }
                destroy() {
                  super.destroy(),
                    this.options.charCounter && g("input", this.field);
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=TextField.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/global/TextField.js
