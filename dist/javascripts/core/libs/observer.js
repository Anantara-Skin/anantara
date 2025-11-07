function e(e, t, n) {
  n.forEach((n) => {
    (n.target.nodeType !== Node.DOCUMENT_NODE &&
      n.target.closest("[data-js-skip-observer]")) ||
      (n.removedNodes.length &&
        (function (e, t, n) {
          const r = document.createDocumentFragment();
          for (let e = 0; e < n.length; e += 1) {
            const t = n[e];
            1 !== t.nodeType || t.parentNode || r.appendChild(t);
          }
          const o = r.querySelectorAll(`[${e}-id]`);
          for (let n = 0; n < o.length; n++) {
            const r = o[n];
            t.unregister(r.getAttribute(`${e}-id`));
          }
        })(e, t, n.removedNodes),
      n.addedNodes.length &&
        (function (e, t, n) {
          const r = (e) => {
              return (
                1 === e.nodeType &&
                !!e.parentElement &&
                (t = e.parentElement).hasAttribute("id") &&
                t.id.startsWith("cq_recomm_slot-")
              );
              var t;
            },
            o = (n) => {
              n.hasAttribute(e) ? t.registerElement(n) : t.registerChildren(n);
            };
          for (let e = 0; e < n.length; e += 1) {
            const t = n[e];
            r(t) && o(t);
          }
        })(e, t, n.addedNodes));
  });
}
function t(t, n) {
  new MutationObserver((r) => e(t, n, r)).observe(document, {
    childList: !0,
    subtree: !0,
  });
}
export { t as watchComponentChanges };
