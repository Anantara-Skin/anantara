(function (System, SystemJS) {
  "use strict";
  System.register(["handlebars/handlebars.runtime"], function (a) {
    "use strict";
    var b;
    return {
      setters: [
        function (a) {
          b = a.default;
        },
      ],
      execute: function () {
        a(
          "default",
          b.template({
            1: function () {
              return " controls ";
            },
            3: function (a, b, c, d, e) {
              var f,
                g =
                  a.lookupProperty ||
                  function (a, b) {
                    return Object.prototype.hasOwnProperty.call(a, b)
                      ? a[b]
                      : void 0;
                  };
              return (
                ' width="' +
                a.escapeExpression(
                  ((f =
                    null ==
                    (f = g(c, "width") || (null == b ? b : g(b, "width")))
                      ? a.hooks.helperMissing
                      : f),
                  "function" == typeof f
                    ? f.call(null == b ? a.nullContext || {} : b, {
                        name: "width",
                        hash: {},
                        data: e,
                        loc: {
                          start: { line: 1, column: 94 },
                          end: { line: 1, column: 103 },
                        },
                      })
                    : f),
                ) +
                '" '
              );
            },
            5: function (a, b, c, d, e) {
              var f,
                g =
                  a.lookupProperty ||
                  function (a, b) {
                    return Object.prototype.hasOwnProperty.call(a, b)
                      ? a[b]
                      : void 0;
                  };
              return (
                ' height="' +
                a.escapeExpression(
                  ((f =
                    null ==
                    (f = g(c, "height") || (null == b ? b : g(b, "height")))
                      ? a.hooks.helperMissing
                      : f),
                  "function" == typeof f
                    ? f.call(null == b ? a.nullContext || {} : b, {
                        name: "height",
                        hash: {},
                        data: e,
                        loc: {
                          start: { line: 1, column: 136 },
                          end: { line: 1, column: 146 },
                        },
                      })
                    : f),
                ) +
                '" '
              );
            },
            7: function () {
              return ' aria-hidden="true" ';
            },
            9: function () {
              return " autoplay ";
            },
            11: function () {
              return " muted ";
            },
            13: function () {
              return " loop ";
            },
            15: function (a, b, c, d, e) {
              var f,
                g =
                  a.lookupProperty ||
                  function (a, b) {
                    return Object.prototype.hasOwnProperty.call(a, b)
                      ? a[b]
                      : void 0;
                  };
              return (
                ' aria-label="' +
                a.escapeExpression(
                  ((f =
                    null ==
                    (f =
                      g(c, "ariaLabel") || (null == b ? b : g(b, "ariaLabel")))
                      ? a.hooks.helperMissing
                      : f),
                  "function" == typeof f
                    ? f.call(null == b ? a.nullContext || {} : b, {
                        name: "ariaLabel",
                        hash: {},
                        data: e,
                        loc: {
                          start: { line: 1, column: 320 },
                          end: { line: 1, column: 333 },
                        },
                      })
                    : f),
                ) +
                '" '
              );
            },
            17: function (a, b, c, d, e) {
              var f,
                g = null == b ? a.nullContext || {} : b,
                h = a.hooks.helperMissing,
                i = a.escapeExpression,
                j =
                  a.lookupProperty ||
                  function (a, b) {
                    return Object.prototype.hasOwnProperty.call(a, b)
                      ? a[b]
                      : void 0;
                  };
              return (
                ' <source src="' +
                i(
                  ((f =
                    null == (f = j(c, "src") || (null == b ? b : j(b, "src")))
                      ? h
                      : f),
                  "function" == typeof f
                    ? f.call(g, {
                        name: "src",
                        hash: {},
                        data: e,
                        loc: {
                          start: { line: 1, column: 381 },
                          end: { line: 1, column: 388 },
                        },
                      })
                    : f),
                ) +
                '" type="' +
                i(
                  ((f =
                    null == (f = j(c, "type") || (null == b ? b : j(b, "type")))
                      ? h
                      : f),
                  "function" == typeof f
                    ? f.call(g, {
                        name: "type",
                        hash: {},
                        data: e,
                        loc: {
                          start: { line: 1, column: 396 },
                          end: { line: 1, column: 404 },
                        },
                      })
                    : f),
                ) +
                '"> '
              );
            },
            compiler: [8, ">= 4.3.0"],
            main: function (a, b, c, d, e) {
              var f,
                g,
                h = null == b ? a.nullContext || {} : b,
                i =
                  a.lookupProperty ||
                  function (a, b) {
                    return Object.prototype.hasOwnProperty.call(a, b)
                      ? a[b]
                      : void 0;
                  };
              return (
                "<video " +
                (null ==
                (f = i(c, "if").call(h, null == b ? b : i(b, "controls"), {
                  name: "if",
                  hash: {},
                  fn: a.program(1, e, 0),
                  inverse: a.noop,
                  data: e,
                  loc: {
                    start: { line: 1, column: 7 },
                    end: { line: 1, column: 40 },
                  },
                }))
                  ? ""
                  : f) +
                ' playsinline poster="' +
                a.escapeExpression(
                  ((g =
                    null ==
                    (g = i(c, "poster") || (null == b ? b : i(b, "poster")))
                      ? a.hooks.helperMissing
                      : g),
                  "function" == typeof g
                    ? g.call(h, {
                        name: "poster",
                        hash: {},
                        data: e,
                        loc: {
                          start: { line: 1, column: 61 },
                          end: { line: 1, column: 71 },
                        },
                      })
                    : g),
                ) +
                '" ' +
                (null ==
                (f = i(c, "if").call(h, null == b ? b : i(b, "width"), {
                  name: "if",
                  hash: {},
                  fn: a.program(3, e, 0),
                  inverse: a.noop,
                  data: e,
                  loc: {
                    start: { line: 1, column: 73 },
                    end: { line: 1, column: 112 },
                  },
                }))
                  ? ""
                  : f) +
                " " +
                (null ==
                (f = i(c, "if").call(h, null == b ? b : i(b, "height"), {
                  name: "if",
                  hash: {},
                  fn: a.program(5, e, 0),
                  inverse: a.noop,
                  data: e,
                  loc: {
                    start: { line: 1, column: 113 },
                    end: { line: 1, column: 155 },
                  },
                }))
                  ? ""
                  : f) +
                " " +
                (null ==
                (f = i(c, "if").call(h, null == b ? b : i(b, "decorative"), {
                  name: "if",
                  hash: {},
                  fn: a.program(7, e, 0),
                  inverse: a.noop,
                  data: e,
                  loc: {
                    start: { line: 1, column: 156 },
                    end: { line: 1, column: 201 },
                  },
                }))
                  ? ""
                  : f) +
                " " +
                (null ==
                (f = i(c, "if").call(h, null == b ? b : i(b, "autoplay"), {
                  name: "if",
                  hash: {},
                  fn: a.program(9, e, 0),
                  inverse: a.noop,
                  data: e,
                  loc: {
                    start: { line: 1, column: 202 },
                    end: { line: 1, column: 235 },
                  },
                }))
                  ? ""
                  : f) +
                " " +
                (null ==
                (f = i(c, "if").call(h, null == b ? b : i(b, "muted"), {
                  name: "if",
                  hash: {},
                  fn: a.program(11, e, 0),
                  inverse: a.noop,
                  data: e,
                  loc: {
                    start: { line: 1, column: 236 },
                    end: { line: 1, column: 263 },
                  },
                }))
                  ? ""
                  : f) +
                " " +
                (null ==
                (f = i(c, "if").call(h, null == b ? b : i(b, "loop"), {
                  name: "if",
                  hash: {},
                  fn: a.program(13, e, 0),
                  inverse: a.noop,
                  data: e,
                  loc: {
                    start: { line: 1, column: 264 },
                    end: { line: 1, column: 289 },
                  },
                }))
                  ? ""
                  : f) +
                " " +
                (null ==
                (f = i(c, "if").call(h, null == b ? b : i(b, "ariaLabel"), {
                  name: "if",
                  hash: {},
                  fn: a.program(15, e, 0),
                  inverse: a.noop,
                  data: e,
                  loc: {
                    start: { line: 1, column: 290 },
                    end: { line: 1, column: 342 },
                  },
                }))
                  ? ""
                  : f) +
                " > " +
                (null ==
                (f = i(c, "each").call(
                  h,
                  null == b ? b : i(b, "videoSources"),
                  {
                    name: "each",
                    hash: {},
                    fn: a.program(17, e, 0),
                    inverse: a.noop,
                    data: e,
                    loc: {
                      start: { line: 1, column: 345 },
                      end: { line: 1, column: 416 },
                    },
                  },
                ))
                  ? ""
                  : f) +
                " </video> "
              );
            },
            useData: !0,
          }),
        );
      },
    };
  });
  //# sourceMappingURL=videoplayer.js.map
})(System, System);
//# sourceURL=/dist/javascripts/templates/common/videoplayer.js
