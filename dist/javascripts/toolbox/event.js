const e = {};
let t = !1;
const n = [
  "change",
  "click",
  "keydown",
  "keypress",
  "keyup",
  "mouseenter",
  "mouseleave",
  "mousemove",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "touchmove",
  "touchstart",
  "touchend",
  "dragstart",
  "wheel",
  "focus",
  "focusout",
  "focusin",
  "blur",
  "copy",
  "paste",
  "drag",
  "drop",
  "input",
  "invalid",
  "submit",
  "reset",
  "scroll",
  "play",
  "ended",
  "pause",
  "loadeddata",
  "seeked",
  "beforeunload",
  "hashchange",
];
function o(e) {
  return -1 !== n.indexOf(e.split(".")[0]);
}
function s(t, n, s, i) {
  const { eventId: r } = n,
    c = e[r],
    a = c[t];
  "function" == typeof s && (a.fn = s),
    r &&
      c &&
      a &&
      (delete e[r][t],
      o(t) && ([t] = t.split(".")),
      a.target.removeEventListener(t, a.fn, i));
}
function i(t, n, o, i = !1) {
  const { eventId: r } = n,
    c = e[r];
  if (!c) throw new Error("Do not remove event that has not been attached", n);
  "all" === t
    ? Object.keys(c).forEach((e) => {
        const t = c[e];
        t && ((t.options = i), s(e, t.target, t.fn, t.options));
      })
    : s(t, n, o, i);
}
function r(t, n, s, i = {}, r) {
  if ("string" != typeof t) throw new Error("eventName has to be a string", n);
  if (!n)
    throw new Error(
      "Element is required. It can be an HTMLElement or a NodeList",
    );
  if ("function" != typeof s)
    throw new Error("Handler function is mandatory", n);
  const c = t.split(" ");
  let a = [];
  n instanceof HTMLElement ||
  n instanceof window.Window ||
  n instanceof window.Document
    ? (a = [n])
    : n instanceof NodeList && (a = [...n]),
    c.forEach((t) => {
      a.forEach((n) => {
        if (
          !(function (t, n) {
            const { eventId: o } = t;
            return (
              !!(o && e[o] && e[o][n]) &&
              (console.warn(
                new Error(
                  `The same event (${n}) has been already attached to the element: ${t}`,
                ),
              ),
              !0)
            );
          })(n, t)
        ) {
          const c =
            n.eventId || `event_${Math.random().toString(36).substring(2, 16)}`;
          (n.eventId = c),
            (function (t, n, s, i, r) {
              const { eventId: c } = n;
              if (r) {
                const e = s;
                s = (...o) => (n.removeEventListener(t, s, i), e(...o));
              } else
                e[c] || (e[c] = {}),
                  (e[c][t] = { fn: s, target: n, options: i });
              o(t) && ([t] = t.split(".")), n.addEventListener(t, s, i);
            })(t, n, s, i, r);
        }
      });
    });
}
function c(e, t, n, o = {}) {
  r(e, t, n, (o = Object.assign(o, { once: !0 })), !0);
}
function a(e, t, n, o = !1) {
  e && "string" != typeof e && 1 === arguments.length && ((t = e), (e = "all"));
  e.split(" ").forEach((e) => {
    if (
      t instanceof HTMLElement ||
      t instanceof window.Window ||
      t instanceof window.Document
    )
      i(e, t, n, o);
    else {
      if (!(t instanceof NodeList))
        throw new Error("HTMLElement or Nodelist is required");
      [...t].forEach((t) => {
        i(e, t, o);
      });
    }
  });
}
function u(e, n, o = {}) {
  t ||
    (function () {
      function e(e, t) {
        t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
        const n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
      }
      "function" != typeof window.CustomEvent
        ? ((e.prototype = window.Event.prototype),
          (window.CustomEvent = e),
          (t = !0))
        : (t = !0);
    })();
  const s = new CustomEvent(e, {
    bubbles: o.bubbles || !1,
    cancelable: o.cancelable || !1,
    detail: o,
  });
  n.dispatchEvent(s);
}
export { a as off, r as on, c as once, u as trigger };
