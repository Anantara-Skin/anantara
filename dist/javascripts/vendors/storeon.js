import { getDefaultExportFromCjs as n } from "./aos.js";
const t = n(function (n) {
  var t = {},
    c = {},
    i = function (n, o) {
      if (("@dispatch" !== n && i("@dispatch", [n, o, t[n]]), t[n])) {
        var r,
          e = {};
        t[n].forEach(function (n) {
          var t = n(c, o);
          t &&
            "function" != typeof t.then &&
            ((r = c = Object.assign({}, c, t)), Object.assign(e, t));
        }),
          r && i("@changed", e);
      }
    },
    o = {
      dispatch: i,
      get: function () {
        return c;
      },
      on: function (n, c) {
        return (
          (t[n] || (t[n] = [])).push(c),
          function () {
            t[n] = t[n].filter(function (n) {
              return n !== c;
            });
          }
        );
      },
    };
  return (
    n.forEach(function (n) {
      n && n(o);
    }),
    i("@init"),
    o
  );
});
export { t as createStore };
