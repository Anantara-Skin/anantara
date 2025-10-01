"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9038],
  {
    53052: (e, t, n) => {
      n.d(t, { Td: () => L });
      var r = n(94799),
        E = n(64502),
        u = n(39738),
        l = n(13331);
      let L = (0, u.forwardRef)((e, t) => {
        let { isNumeric: n, ...u } = e,
          L = (0, E.useTableStyles)();
        return (0, r.jsx)(l.chakra.td, {
          ...u,
          ref: t,
          __css: L.td,
          "data-is-numeric": n,
        });
      });
    },
    64502: (e, t, n) => {
      n.d(t, { Table: () => O, useTableStyles: () => _ });
      var r = n(94799),
        E = n(26943),
        u = n(79872),
        l = n(49708),
        L = n(39738),
        a = n(98814),
        o = n(13331);
      let [S, _] = (0, u.createContext)({
          name: "TableStylesContext",
          errorMessage:
            "useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" ",
        }),
        O = (0, L.forwardRef)((e, t) => {
          let n = (0, a.useMultiStyleConfig)("Table", e),
            { className: u, layout: L, ..._ } = (0, E.M)(e);
          return (0, r.jsx)(S, {
            value: n,
            children: (0, r.jsx)(o.chakra.table, {
              ref: t,
              __css: { tableLayout: L, ...n.table },
              className: (0, l.cx)("chakra-table", u),
              ..._,
            }),
          });
        });
      O.displayName = "Table";
    },
    89067: (e, t, n) => {
      var r,
        E,
        u = n(34023),
        l = (function (e) {
          return e && "object" == typeof e && "default" in e ? e.default : e;
        })(u),
        L = function () {
          return (L =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var E in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, E) && (e[E] = t[E]);
              return e;
            }).apply(this, arguments);
        };
      "function" == typeof SuppressedError && SuppressedError;
      var a =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
            ? window
            : void 0 !== n.g
              ? n.g
              : "undefined" != typeof self
                ? self
                : {};
      function o(e) {
        return e &&
          e.__esModule &&
          Object.prototype.hasOwnProperty.call(e, "default")
          ? e.default
          : e;
      }
      function S(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
      }
      var _ = S(function (e, t) {
        var n, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BLOCKS = void 0),
          ((r = n || (t.BLOCKS = n = {})).DOCUMENT = "document"),
          (r.PARAGRAPH = "paragraph"),
          (r.HEADING_1 = "heading-1"),
          (r.HEADING_2 = "heading-2"),
          (r.HEADING_3 = "heading-3"),
          (r.HEADING_4 = "heading-4"),
          (r.HEADING_5 = "heading-5"),
          (r.HEADING_6 = "heading-6"),
          (r.OL_LIST = "ordered-list"),
          (r.UL_LIST = "unordered-list"),
          (r.LIST_ITEM = "list-item"),
          (r.HR = "hr"),
          (r.QUOTE = "blockquote"),
          (r.EMBEDDED_ENTRY = "embedded-entry-block"),
          (r.EMBEDDED_ASSET = "embedded-asset-block"),
          (r.EMBEDDED_RESOURCE = "embedded-resource-block"),
          (r.TABLE = "table"),
          (r.TABLE_ROW = "table-row"),
          (r.TABLE_CELL = "table-cell"),
          (r.TABLE_HEADER_CELL = "table-header-cell");
      });
      o(_), _.BLOCKS;
      var O = S(function (e, t) {
        var n, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.INLINES = void 0),
          ((r = n || (t.INLINES = n = {})).HYPERLINK = "hyperlink"),
          (r.ENTRY_HYPERLINK = "entry-hyperlink"),
          (r.ASSET_HYPERLINK = "asset-hyperlink"),
          (r.RESOURCE_HYPERLINK = "resource-hyperlink"),
          (r.EMBEDDED_ENTRY = "embedded-entry-inline"),
          (r.EMBEDDED_RESOURCE = "embedded-resource-inline");
      });
      o(O), O.INLINES;
      var i = S(function (e, t) {
        var n, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MARKS = void 0),
          ((r = n || (t.MARKS = n = {})).BOLD = "bold"),
          (r.ITALIC = "italic"),
          (r.UNDERLINE = "underline"),
          (r.CODE = "code"),
          (r.SUPERSCRIPT = "superscript"),
          (r.SUBSCRIPT = "subscript");
      });
      o(i), i.MARKS;
      var c = S(function (e, t) {
        var n,
          r =
            (a && a.__spreadArray) ||
            function (e, t, n) {
              if (n || 2 == arguments.length)
                for (var r, E = 0, u = t.length; E < u; E++)
                  (!r && E in t) ||
                    (r || (r = Array.prototype.slice.call(t, 0, E)),
                    (r[E] = t[E]));
              return e.concat(r || Array.prototype.slice.call(t));
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.V1_MARKS =
            t.V1_NODE_TYPES =
            t.TEXT_CONTAINERS =
            t.HEADINGS =
            t.CONTAINERS =
            t.VOID_BLOCKS =
            t.TABLE_BLOCKS =
            t.LIST_ITEM_BLOCKS =
            t.TOP_LEVEL_BLOCKS =
              void 0),
          (t.TOP_LEVEL_BLOCKS = [
            _.BLOCKS.PARAGRAPH,
            _.BLOCKS.HEADING_1,
            _.BLOCKS.HEADING_2,
            _.BLOCKS.HEADING_3,
            _.BLOCKS.HEADING_4,
            _.BLOCKS.HEADING_5,
            _.BLOCKS.HEADING_6,
            _.BLOCKS.OL_LIST,
            _.BLOCKS.UL_LIST,
            _.BLOCKS.HR,
            _.BLOCKS.QUOTE,
            _.BLOCKS.EMBEDDED_ENTRY,
            _.BLOCKS.EMBEDDED_ASSET,
            _.BLOCKS.EMBEDDED_RESOURCE,
            _.BLOCKS.TABLE,
          ]),
          (t.LIST_ITEM_BLOCKS = [
            _.BLOCKS.PARAGRAPH,
            _.BLOCKS.HEADING_1,
            _.BLOCKS.HEADING_2,
            _.BLOCKS.HEADING_3,
            _.BLOCKS.HEADING_4,
            _.BLOCKS.HEADING_5,
            _.BLOCKS.HEADING_6,
            _.BLOCKS.OL_LIST,
            _.BLOCKS.UL_LIST,
            _.BLOCKS.HR,
            _.BLOCKS.QUOTE,
            _.BLOCKS.EMBEDDED_ENTRY,
            _.BLOCKS.EMBEDDED_ASSET,
            _.BLOCKS.EMBEDDED_RESOURCE,
          ]),
          (t.TABLE_BLOCKS = [
            _.BLOCKS.TABLE,
            _.BLOCKS.TABLE_ROW,
            _.BLOCKS.TABLE_CELL,
            _.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (t.VOID_BLOCKS = [
            _.BLOCKS.HR,
            _.BLOCKS.EMBEDDED_ENTRY,
            _.BLOCKS.EMBEDDED_ASSET,
            _.BLOCKS.EMBEDDED_RESOURCE,
          ]),
          ((n = {})[_.BLOCKS.OL_LIST] = [_.BLOCKS.LIST_ITEM]),
          (n[_.BLOCKS.UL_LIST] = [_.BLOCKS.LIST_ITEM]),
          (n[_.BLOCKS.LIST_ITEM] = t.LIST_ITEM_BLOCKS),
          (n[_.BLOCKS.QUOTE] = [_.BLOCKS.PARAGRAPH]),
          (n[_.BLOCKS.TABLE] = [_.BLOCKS.TABLE_ROW]),
          (n[_.BLOCKS.TABLE_ROW] = [
            _.BLOCKS.TABLE_CELL,
            _.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (n[_.BLOCKS.TABLE_CELL] = [_.BLOCKS.PARAGRAPH]),
          (n[_.BLOCKS.TABLE_HEADER_CELL] = [_.BLOCKS.PARAGRAPH]),
          (t.CONTAINERS = n),
          (t.HEADINGS = [
            _.BLOCKS.HEADING_1,
            _.BLOCKS.HEADING_2,
            _.BLOCKS.HEADING_3,
            _.BLOCKS.HEADING_4,
            _.BLOCKS.HEADING_5,
            _.BLOCKS.HEADING_6,
          ]),
          (t.TEXT_CONTAINERS = r([_.BLOCKS.PARAGRAPH], t.HEADINGS, !0)),
          (t.V1_NODE_TYPES = [
            _.BLOCKS.DOCUMENT,
            _.BLOCKS.PARAGRAPH,
            _.BLOCKS.HEADING_1,
            _.BLOCKS.HEADING_2,
            _.BLOCKS.HEADING_3,
            _.BLOCKS.HEADING_4,
            _.BLOCKS.HEADING_5,
            _.BLOCKS.HEADING_6,
            _.BLOCKS.OL_LIST,
            _.BLOCKS.UL_LIST,
            _.BLOCKS.LIST_ITEM,
            _.BLOCKS.HR,
            _.BLOCKS.QUOTE,
            _.BLOCKS.EMBEDDED_ENTRY,
            _.BLOCKS.EMBEDDED_ASSET,
            O.INLINES.HYPERLINK,
            O.INLINES.ENTRY_HYPERLINK,
            O.INLINES.ASSET_HYPERLINK,
            O.INLINES.EMBEDDED_ENTRY,
            "text",
          ]),
          (t.V1_MARKS = [
            i.MARKS.BOLD,
            i.MARKS.CODE,
            i.MARKS.ITALIC,
            i.MARKS.UNDERLINE,
          ]);
      });
      o(c),
        c.V1_MARKS,
        c.V1_NODE_TYPES,
        c.TEXT_CONTAINERS,
        c.HEADINGS,
        c.CONTAINERS,
        c.VOID_BLOCKS,
        c.TABLE_BLOCKS,
        c.LIST_ITEM_BLOCKS,
        c.TOP_LEVEL_BLOCKS;
      var T = S(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
      });
      o(T);
      var B = S(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
      });
      o(B);
      var C = S(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EMPTY_DOCUMENT = void 0),
          (t.EMPTY_DOCUMENT = {
            nodeType: _.BLOCKS.DOCUMENT,
            data: {},
            content: [
              {
                nodeType: _.BLOCKS.PARAGRAPH,
                data: {},
                content: [{ nodeType: "text", value: "", marks: [], data: {} }],
              },
            ],
          });
      });
      o(C), C.EMPTY_DOCUMENT;
      var d = S(function (e, t) {
        function n(e, t) {
          for (var n = 0, r = Object.keys(e); n < r.length; n++)
            if (t === e[r[n]]) return !0;
          return !1;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isText = t.isBlock = t.isInline = void 0),
          (t.isInline = function (e) {
            return n(O.INLINES, e.nodeType);
          }),
          (t.isBlock = function (e) {
            return n(_.BLOCKS, e.nodeType);
          }),
          (t.isText = function (e) {
            return "text" === e.nodeType;
          });
      });
      o(d), d.isText, d.isBlock, d.isInline;
      var D = S(function (e, t) {
        var n =
            (a && a.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n);
                  var E = Object.getOwnPropertyDescriptor(t, n);
                  (!E ||
                    ("get" in E
                      ? !t.__esModule
                      : E.writable || E.configurable)) &&
                    (E = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, r, E);
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          r =
            (a && a.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          E =
            (a && a.__exportStar) ||
            function (e, t) {
              for (var r in e)
                "default" === r ||
                  Object.prototype.hasOwnProperty.call(t, r) ||
                  n(t, e, r);
            },
          u =
            (a && a.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var E in e)
                  "default" !== E &&
                    Object.prototype.hasOwnProperty.call(e, E) &&
                    n(t, e, E);
              return r(t, e), t;
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.helpers =
            t.EMPTY_DOCUMENT =
            t.MARKS =
            t.INLINES =
            t.BLOCKS =
              void 0),
          Object.defineProperty(t, "BLOCKS", {
            enumerable: !0,
            get: function () {
              return _.BLOCKS;
            },
          }),
          Object.defineProperty(t, "INLINES", {
            enumerable: !0,
            get: function () {
              return O.INLINES;
            },
          }),
          Object.defineProperty(t, "MARKS", {
            enumerable: !0,
            get: function () {
              return i.MARKS;
            },
          }),
          E(c, t),
          E(T, t),
          E(B, t),
          Object.defineProperty(t, "EMPTY_DOCUMENT", {
            enumerable: !0,
            get: function () {
              return C.EMPTY_DOCUMENT;
            },
          }),
          (t.helpers = u(d));
      });
      o(D);
      var I = D.helpers;
      D.EMPTY_DOCUMENT;
      var A = D.MARKS,
        N = D.INLINES,
        f = D.BLOCKS,
        K =
          (((r = {})[f.DOCUMENT] = function (e, t) {
            return t;
          }),
          (r[f.PARAGRAPH] = function (e, t) {
            return l.createElement("p", null, t);
          }),
          (r[f.HEADING_1] = function (e, t) {
            return l.createElement("h1", null, t);
          }),
          (r[f.HEADING_2] = function (e, t) {
            return l.createElement("h2", null, t);
          }),
          (r[f.HEADING_3] = function (e, t) {
            return l.createElement("h3", null, t);
          }),
          (r[f.HEADING_4] = function (e, t) {
            return l.createElement("h4", null, t);
          }),
          (r[f.HEADING_5] = function (e, t) {
            return l.createElement("h5", null, t);
          }),
          (r[f.HEADING_6] = function (e, t) {
            return l.createElement("h6", null, t);
          }),
          (r[f.EMBEDDED_ENTRY] = function (e, t) {
            return l.createElement("div", null, t);
          }),
          (r[f.EMBEDDED_RESOURCE] = function (e, t) {
            return l.createElement("div", null, t);
          }),
          (r[f.UL_LIST] = function (e, t) {
            return l.createElement("ul", null, t);
          }),
          (r[f.OL_LIST] = function (e, t) {
            return l.createElement("ol", null, t);
          }),
          (r[f.LIST_ITEM] = function (e, t) {
            return l.createElement("li", null, t);
          }),
          (r[f.QUOTE] = function (e, t) {
            return l.createElement("blockquote", null, t);
          }),
          (r[f.HR] = function () {
            return l.createElement("hr", null);
          }),
          (r[f.TABLE] = function (e, t) {
            return l.createElement(
              "table",
              null,
              l.createElement("tbody", null, t),
            );
          }),
          (r[f.TABLE_ROW] = function (e, t) {
            return l.createElement("tr", null, t);
          }),
          (r[f.TABLE_HEADER_CELL] = function (e, t) {
            return l.createElement("th", null, t);
          }),
          (r[f.TABLE_CELL] = function (e, t) {
            return l.createElement("td", null, t);
          }),
          (r[N.ASSET_HYPERLINK] = function (e) {
            return s(N.ASSET_HYPERLINK, e);
          }),
          (r[N.ENTRY_HYPERLINK] = function (e) {
            return s(N.ENTRY_HYPERLINK, e);
          }),
          (r[N.RESOURCE_HYPERLINK] = function (e) {
            return p(N.RESOURCE_HYPERLINK, e);
          }),
          (r[N.EMBEDDED_ENTRY] = function (e) {
            return s(N.EMBEDDED_ENTRY, e);
          }),
          (r[N.EMBEDDED_RESOURCE] = function (e, t) {
            return p(N.EMBEDDED_RESOURCE, e);
          }),
          (r[N.HYPERLINK] = function (e, t) {
            return l.createElement("a", { href: e.data.uri }, t);
          }),
          r),
        R =
          (((E = {})[A.BOLD] = function (e) {
            return l.createElement("b", null, e);
          }),
          (E[A.ITALIC] = function (e) {
            return l.createElement("i", null, e);
          }),
          (E[A.UNDERLINE] = function (e) {
            return l.createElement("u", null, e);
          }),
          (E[A.CODE] = function (e) {
            return l.createElement("code", null, e);
          }),
          (E[A.SUPERSCRIPT] = function (e) {
            return l.createElement("sup", null, e);
          }),
          (E[A.SUBSCRIPT] = function (e) {
            return l.createElement("sub", null, e);
          }),
          E);
      function s(e, t) {
        return l.createElement(
          "span",
          { key: t.data.target.sys.id },
          "type: ",
          t.nodeType,
          " id: ",
          t.data.target.sys.id,
        );
      }
      function p(e, t) {
        return l.createElement(
          "span",
          { key: t.data.target.sys.urn },
          "type: ",
          t.nodeType,
          " urn: ",
          t.data.target.sys.urn,
        );
      }
      t.i = function (e, t) {
        return (void 0 === t && (t = {}), e)
          ? (function e(t, n) {
              var r = n.renderNode,
                E = n.renderMark,
                L = n.renderText,
                a = n.preserveWhitespace;
              if (I.isText(t)) {
                var o = L ? L(t.value) : t.value;
                if (a) {
                  var S = (o = o.replace(/ {2,}/g, function (e) {
                      return "\xa0".repeat(e.length);
                    })).split("\n"),
                    _ = [];
                  S.forEach(function (e, t) {
                    _.push(e),
                      t !== S.length - 1 && _.push(l.createElement("br", null));
                  }),
                    (o = _);
                }
                return t.marks.reduce(function (e, t) {
                  return E[t.type] ? E[t.type](e) : e;
                }, o);
              }
              var O = t.content.map(function (t, r) {
                var E;
                return (
                  (E = e(t, n)),
                  u.isValidElement(E) && null === E.key
                    ? u.cloneElement(E, { key: r })
                    : E
                );
              });
              return t.nodeType && r[t.nodeType]
                ? r[t.nodeType](t, O)
                : l.createElement(l.Fragment, null, O);
            })(e, {
              renderNode: L(L({}, K), t.renderNode),
              renderMark: L(L({}, R), t.renderMark),
              renderText: t.renderText,
              preserveWhitespace: t.preserveWhitespace,
            })
          : null;
      };
    },
  },
]);
