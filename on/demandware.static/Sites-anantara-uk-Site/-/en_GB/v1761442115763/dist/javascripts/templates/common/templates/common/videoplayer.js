import Handlebars from "handlebars/handlebars.runtime";
export default Handlebars.template({
  1: function (container, depth0, helpers, partials, data) {
    return " controls ";
  },
  3: function (container, depth0, helpers, partials, data) {
    var helper,
      lookupProperty =
        container.lookupProperty ||
        function (parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined;
        };
    return (
      ' width="' +
      container.escapeExpression(
        ((helper =
          (helper =
            lookupProperty(helpers, "width") ||
            (depth0 != null ? lookupProperty(depth0, "width") : depth0)) != null
            ? helper
            : container.hooks.helperMissing),
        typeof helper === "function"
          ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
              name: "width",
              hash: {},
              data: data,
              loc: {
                start: { line: 1, column: 94 },
                end: { line: 1, column: 103 },
              },
            })
          : helper),
      ) +
      '" '
    );
  },
  5: function (container, depth0, helpers, partials, data) {
    var helper,
      lookupProperty =
        container.lookupProperty ||
        function (parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined;
        };
    return (
      ' height="' +
      container.escapeExpression(
        ((helper =
          (helper =
            lookupProperty(helpers, "height") ||
            (depth0 != null ? lookupProperty(depth0, "height") : depth0)) !=
          null
            ? helper
            : container.hooks.helperMissing),
        typeof helper === "function"
          ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
              name: "height",
              hash: {},
              data: data,
              loc: {
                start: { line: 1, column: 136 },
                end: { line: 1, column: 146 },
              },
            })
          : helper),
      ) +
      '" '
    );
  },
  7: function (container, depth0, helpers, partials, data) {
    return ' aria-hidden="true" ';
  },
  9: function (container, depth0, helpers, partials, data) {
    return " autoplay ";
  },
  11: function (container, depth0, helpers, partials, data) {
    return " muted ";
  },
  13: function (container, depth0, helpers, partials, data) {
    return " loop ";
  },
  15: function (container, depth0, helpers, partials, data) {
    var helper,
      lookupProperty =
        container.lookupProperty ||
        function (parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined;
        };
    return (
      ' aria-label="' +
      container.escapeExpression(
        ((helper =
          (helper =
            lookupProperty(helpers, "ariaLabel") ||
            (depth0 != null ? lookupProperty(depth0, "ariaLabel") : depth0)) !=
          null
            ? helper
            : container.hooks.helperMissing),
        typeof helper === "function"
          ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
              name: "ariaLabel",
              hash: {},
              data: data,
              loc: {
                start: { line: 1, column: 320 },
                end: { line: 1, column: 333 },
              },
            })
          : helper),
      ) +
      '" '
    );
  },
  17: function (container, depth0, helpers, partials, data) {
    var helper,
      alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression,
      lookupProperty =
        container.lookupProperty ||
        function (parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined;
        };
    return (
      ' <source src="' +
      alias4(
        ((helper =
          (helper =
            lookupProperty(helpers, "src") ||
            (depth0 != null ? lookupProperty(depth0, "src") : depth0)) != null
            ? helper
            : alias2),
        typeof helper === alias3
          ? helper.call(alias1, {
              name: "src",
              hash: {},
              data: data,
              loc: {
                start: { line: 1, column: 381 },
                end: { line: 1, column: 388 },
              },
            })
          : helper),
      ) +
      '" type="' +
      alias4(
        ((helper =
          (helper =
            lookupProperty(helpers, "type") ||
            (depth0 != null ? lookupProperty(depth0, "type") : depth0)) != null
            ? helper
            : alias2),
        typeof helper === alias3
          ? helper.call(alias1, {
              name: "type",
              hash: {},
              data: data,
              loc: {
                start: { line: 1, column: 396 },
                end: { line: 1, column: 404 },
              },
            })
          : helper),
      ) +
      '"> '
    );
  },
  compiler: [8, ">= 4.3.0"],
  main: function (container, depth0, helpers, partials, data) {
    var stack1,
      helper,
      alias1 = depth0 != null ? depth0 : container.nullContext || {},
      lookupProperty =
        container.lookupProperty ||
        function (parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined;
        };
    return (
      "<video " +
      ((stack1 = lookupProperty(helpers, "if").call(
        alias1,
        depth0 != null ? lookupProperty(depth0, "controls") : depth0,
        {
          name: "if",
          hash: {},
          fn: container.program(1, data, 0),
          inverse: container.noop,
          data: data,
          loc: { start: { line: 1, column: 7 }, end: { line: 1, column: 40 } },
        },
      )) != null
        ? stack1
        : "") +
      ' playsinline poster="' +
      container.escapeExpression(
        ((helper =
          (helper =
            lookupProperty(helpers, "poster") ||
            (depth0 != null ? lookupProperty(depth0, "poster") : depth0)) !=
          null
            ? helper
            : container.hooks.helperMissing),
        typeof helper === "function"
          ? helper.call(alias1, {
              name: "poster",
              hash: {},
              data: data,
              loc: {
                start: { line: 1, column: 61 },
                end: { line: 1, column: 71 },
              },
            })
          : helper),
      ) +
      '" ' +
      ((stack1 = lookupProperty(helpers, "if").call(
        alias1,
        depth0 != null ? lookupProperty(depth0, "width") : depth0,
        {
          name: "if",
          hash: {},
          fn: container.program(3, data, 0),
          inverse: container.noop,
          data: data,
          loc: {
            start: { line: 1, column: 73 },
            end: { line: 1, column: 112 },
          },
        },
      )) != null
        ? stack1
        : "") +
      " " +
      ((stack1 = lookupProperty(helpers, "if").call(
        alias1,
        depth0 != null ? lookupProperty(depth0, "height") : depth0,
        {
          name: "if",
          hash: {},
          fn: container.program(5, data, 0),
          inverse: container.noop,
          data: data,
          loc: {
            start: { line: 1, column: 113 },
            end: { line: 1, column: 155 },
          },
        },
      )) != null
        ? stack1
        : "") +
      " " +
      ((stack1 = lookupProperty(helpers, "if").call(
        alias1,
        depth0 != null ? lookupProperty(depth0, "decorative") : depth0,
        {
          name: "if",
          hash: {},
          fn: container.program(7, data, 0),
          inverse: container.noop,
          data: data,
          loc: {
            start: { line: 1, column: 156 },
            end: { line: 1, column: 201 },
          },
        },
      )) != null
        ? stack1
        : "") +
      " " +
      ((stack1 = lookupProperty(helpers, "if").call(
        alias1,
        depth0 != null ? lookupProperty(depth0, "autoplay") : depth0,
        {
          name: "if",
          hash: {},
          fn: container.program(9, data, 0),
          inverse: container.noop,
          data: data,
          loc: {
            start: { line: 1, column: 202 },
            end: { line: 1, column: 235 },
          },
        },
      )) != null
        ? stack1
        : "") +
      " " +
      ((stack1 = lookupProperty(helpers, "if").call(
        alias1,
        depth0 != null ? lookupProperty(depth0, "muted") : depth0,
        {
          name: "if",
          hash: {},
          fn: container.program(11, data, 0),
          inverse: container.noop,
          data: data,
          loc: {
            start: { line: 1, column: 236 },
            end: { line: 1, column: 263 },
          },
        },
      )) != null
        ? stack1
        : "") +
      " " +
      ((stack1 = lookupProperty(helpers, "if").call(
        alias1,
        depth0 != null ? lookupProperty(depth0, "loop") : depth0,
        {
          name: "if",
          hash: {},
          fn: container.program(13, data, 0),
          inverse: container.noop,
          data: data,
          loc: {
            start: { line: 1, column: 264 },
            end: { line: 1, column: 289 },
          },
        },
      )) != null
        ? stack1
        : "") +
      " " +
      ((stack1 = lookupProperty(helpers, "if").call(
        alias1,
        depth0 != null ? lookupProperty(depth0, "ariaLabel") : depth0,
        {
          name: "if",
          hash: {},
          fn: container.program(15, data, 0),
          inverse: container.noop,
          data: data,
          loc: {
            start: { line: 1, column: 290 },
            end: { line: 1, column: 342 },
          },
        },
      )) != null
        ? stack1
        : "") +
      " > " +
      ((stack1 = lookupProperty(helpers, "each").call(
        alias1,
        depth0 != null ? lookupProperty(depth0, "videoSources") : depth0,
        {
          name: "each",
          hash: {},
          fn: container.program(17, data, 0),
          inverse: container.noop,
          data: data,
          loc: {
            start: { line: 1, column: 345 },
            end: { line: 1, column: 416 },
          },
        },
      )) != null
        ? stack1
        : "") +
      " </video> "
    );
  },
  useData: true,
});
