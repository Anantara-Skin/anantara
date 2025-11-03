(function (System, SystemJS) {
  "use strict";
  System.register([], function (a) {
    "use strict";
    var b;
    return (
      a("default", void 0),
      {
        setters: [],
        execute: function () {
          a(
            "default",
            (b = class a {
              static async getValidators(b) {
                const c = {};
                for (const d in b)
                  if ("object" == typeof b[d] && b[d].module)
                    try {
                      const a = await SystemJS.import(
                        "toolbox/".concat(b[d].module),
                      );
                      "function" == typeof a[d]
                        ? (c[d] = a[d])
                        : console.error(
                            "Validator '"
                              .concat(b[d].module, ".")
                              .concat(d, "' doesn't exist!"),
                          );
                    } catch (a) {
                      console.error(a);
                    }
                  else "function" == typeof a[d] && (c[d] = a[d]);
                return c;
              }
              static emoji(a) {
                const b = !/[\u25A0-\u27FF\uD800-\uDFFF]/.test(a.value);
                return (
                  b
                    ? (a.setCustomValidity(""),
                      a.dispatchEvent(new Event("error.reset")))
                    : (a.setCustomValidity("emoji"), a.checkValidity()),
                  b
                );
              }
              static equalto(a, b) {
                let c = !0;
                const d = a.form[b];
                return (
                  d.getAttribute("data-js-dependency-is-set") ||
                    (d.addEventListener(
                      "change",
                      a.dispatchEvent.bind(a, new Event("change")),
                    ),
                    d.setAttribute("data-js-dependency-is-set", !0)),
                  a.required && 0 === a.value.length
                    ? ((c = !1),
                      a.setCustomValidity("required"),
                      a.checkValidity())
                    : a.value === d.value
                      ? (a.setCustomValidity(""),
                        a.dispatchEvent(new Event("error.reset")))
                      : ((c = !1),
                        a.setCustomValidity("equalto"),
                        a.checkValidity()),
                  c
                );
              }
              static equaltoignorecase(a, b) {
                let c = !0;
                const d = a.form[b];
                return (
                  d.getAttribute("data-js-dependency-is-set") ||
                    (d.addEventListener(
                      "change",
                      a.dispatchEvent.bind(a, new Event("change")),
                    ),
                    d.setAttribute("data-js-dependency-is-set", !0)),
                  a.required && 0 === a.value.length
                    ? ((c = !1),
                      a.setCustomValidity("required"),
                      a.checkValidity())
                    : a.value.toLowerCase() === d.value.toLowerCase()
                      ? (a.setCustomValidity(""),
                        a.dispatchEvent(new Event("error.reset")))
                      : ((c = !1),
                        a.setCustomValidity("equaltoignorecase"),
                        a.checkValidity()),
                  c
                );
              }
              static maxitems(a, b) {
                let c = !0;
                const d = a.value.split(b.limitSeparator).length;
                return (
                  a.setCustomValidity(""),
                  a.checkValidity() &&
                    (a.setCustomValidity(""),
                    a.dispatchEvent(new Event("error.reset"))),
                  d > b.limitItems &&
                    (a.setCustomValidity("maxitems"),
                    a.checkValidity(),
                    (c = !1)),
                  c
                );
              }
              static emails(a) {
                const b =
                    /^[a-zA-Z0-9_\-\.\+]{1,}@([\da-zA-Z-]{1,}\.){1,}[\da-zA-Z-]{2,20}$/,
                  c = a.value.split(/\s*,\s*/),
                  d = c.every((a) => b.test(a.trim()));
                return (
                  d
                    ? (a.setCustomValidity(""),
                      a.dispatchEvent(new Event("error.reset")))
                    : (a.setCustomValidity("emails"), a.checkValidity()),
                  d
                );
              }
              static expirationyear(a) {
                let b = !0;
                const c = a.value,
                  d = new Date().getFullYear();
                let e;
                return (
                  a.maxLength === c.length &&
                    (2 === c.length
                      ? (e = +(d.toString().slice(0, 2) + c))
                      : 4 === c.length && (e = +c)),
                  c.length &&
                    (e && e < d
                      ? ((b = !1),
                        a.setCustomValidity("expirationyear"),
                        a.checkValidity())
                      : (a.setCustomValidity(""),
                        a.dispatchEvent(new Event("error.reset")))),
                  b
                );
              }
              static expirationmonthyear(a) {
                let b = !0;
                const [c, d] = a.value.split("/"),
                  e = new Date(),
                  f = new Date(d, c - 1);
                return (
                  f && (f < e || 12 < +c)
                    ? ((b = !1),
                      a.setCustomValidity("expirationmonthyear"),
                      a.checkValidity())
                    : (a.setCustomValidity(""),
                      a.dispatchEvent(new Event("error.reset"))),
                  b
                );
              }
              static tags(a) {
                const b = !/<\/?[^>]+>/g.test(a.value);
                return (
                  b
                    ? (a.setCustomValidity(""),
                      a.dispatchEvent(new Event("error.reset")))
                    : (a.setCustomValidity("tags"), a.checkValidity()),
                  b
                );
              }
              static minimumuppercaseletters(a, b) {
                const c = a.value.match(/[A-Z]/g),
                  d = null !== c && c.length >= b;
                return (
                  d
                    ? (a.setCustomValidity(""),
                      a.dispatchEvent(new Event("error.reset")))
                    : (a.setCustomValidity("minimumuppercaseletters"),
                      a.checkValidity()),
                  d
                );
              }
              static minimumlowercaseletters(a, b) {
                const c = a.value.match(/[a-z]/g),
                  d = null !== c && c.length >= b;
                return (
                  d
                    ? (a.setCustomValidity(""),
                      a.dispatchEvent(new Event("error.reset")))
                    : (a.setCustomValidity("minimumlowercaseletters"),
                      a.checkValidity()),
                  d
                );
              }
              static minimumnumbers(a, b) {
                const c = a.value.match(/\d/g),
                  d = null !== c && c.length >= b;
                return (
                  d
                    ? (a.setCustomValidity(""),
                      a.dispatchEvent(new Event("error.reset")))
                    : (a.setCustomValidity("minimumnumbers"),
                      a.checkValidity()),
                  d
                );
              }
              static minimumspecialcharacters(a, b) {
                const c = b[0];
                let d = b[1];
                d = d.split("");
                const e = a.value,
                  f = e
                    .split("")
                    .reduce((a, b) => (d.includes(b) && (a += 1), a), 0),
                  g = f >= c;
                return (
                  g
                    ? (a.setCustomValidity(""),
                      a.dispatchEvent(new Event("error.reset")))
                    : (a.setCustomValidity("minimumspecialcharacters"),
                      a.checkValidity()),
                  g
                );
              }
              static stringlengthrange(a, b) {
                const { length: c } = a.value,
                  [d, e] = b,
                  f = c >= d && c <= e;
                return (
                  f
                    ? (a.setCustomValidity(""),
                      a.dispatchEvent(new Event("error.reset")))
                    : (a.setCustomValidity("stringlengthrange"),
                      a.checkValidity()),
                  f
                );
              }
            }),
          );
        },
      }
    );
  });
  //# sourceMappingURL=validators.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/toolbox/validators.js
