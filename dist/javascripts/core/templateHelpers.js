import { Handlebars as t } from "../vendors/handlebars.js";
function e(...e) {
  const n = e.pop(),
    [r, s, o, i] = e;
  let c = o && "object" == typeof o ? o : null;
  if (!c) {
    const t = `${r}/${s}${i && "string" == typeof i ? `#${i}` : ""}`,
      e = n.data && n.data.root;
    "object" == typeof e && null !== e && (c = e[t]);
  }
  if (c && c.suppressRender) return "";
  const a = `templates/${r}/${s}`,
    h = t.templates[a];
  return h ? new t.SafeString(h(c)) : "";
}
function n(t, e, n) {
  const r = void 0 === e.closing || e.closing;
  return (
    delete e.closing,
    (function (t, e, n) {
      const r = [`<${t}`];
      return (
        Object.keys(n).forEach((e) => {
          (n[e] || "option" === t) && r.push(`${e}='${n[e]}'`);
        }),
        r.join(" ") + (e ? "" : " /") + ">"
      );
    })(t, r, e) +
      (r
        ? (n || "") +
          (function (t) {
            return `</${t}>`;
          })(t)
        : "")
  );
}
function r(t, e) {
  return (
    Object.keys(e).forEach((n) => {
      t[n] = e[n];
    }),
    t
  );
}
t.registerHelper("include_component", e),
  t.registerHelper("render_component", e),
  t.registerHelper("carousel", function (t, ...n) {
    if (!t) return "";
    const r = (n && n.length > 1 && n[0]) || {},
      s = n[n.length - 1],
      o = r.componentOptions || r.options || {},
      i = Object.assign({}, o, r);
    return (
      (i.items = t.map((t) => ({ content: s.fn(t) }))),
      e("common", "carousel", i, null)
    );
  }),
  t.registerHelper("tagName", function (t, e) {
    return (
      e &&
        e.hash &&
        "object" == typeof e.hash.tagAttributes &&
        (Object.keys(e.hash.tagAttributes).forEach((t) => {
          const n = e.hash.tagAttributes[t];
          e.hash[t] = n && "object" == typeof n ? JSON.stringify(n) : n;
        }),
        delete e.hash.tagAttributes),
      n(t, r({}, e.hash), e.fn(this))
    );
  }),
  t.registerHelper("tagNameSelfClosing", function (t, e) {
    return (
      e &&
        e.hash &&
        "object" == typeof e.hash.tagAttributes &&
        (Object.keys(e.hash.tagAttributes).forEach((t) => {
          const n = e.hash.tagAttributes[t];
          e.hash[t] = n && "object" == typeof n ? JSON.stringify(n) : n;
        }),
        delete e.hash.tagAttributes),
      n(t, r({ closing: !0 }, e.hash))
    );
  }),
  t.registerHelper("context", function (t, e, n) {
    return n.fn(this);
  }),
  t.registerHelper("include_json", (t) => JSON.stringify(t));
