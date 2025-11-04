(function (System, SystemJS) {
  "use strict";
  System.register(["services/EventEmitter", "toolbox/html"], function (a) {
    "use strict";
    function pushState(a) {
      a && a.pageTitle && (document.title = c(a.pageTitle));
      for (
        var b = arguments.length, d = Array(1 < b ? b - 1 : 0), e = 1;
        e < b;
        e++
      )
        d[e - 1] = arguments[e];
      window.history.pushState(a, ...d);
    }
    function replaceState(a) {
      a && a.pageTitle && (document.title = c(a.pageTitle));
      for (
        var b = arguments.length, d = Array(1 < b ? b - 1 : 0), e = 1;
        e < b;
        e++
      )
        d[e - 1] = arguments[e];
      window.history.replaceState(a, ...d);
    }
    var b, c, d;
    return (
      a({ pushState: pushState, replaceState: replaceState }),
      {
        setters: [
          function (a) {
            b = a.Event;
          },
          function (a) {
            c = a.encodeHTMLEntity;
          },
        ],
        execute: function execute() {
          (d = null),
            (window.onpushstate = function onpushstate(a) {
              d = a.state;
            }),
            (window.onpopstate = function onpopstate(a) {
              if (a.state) {
                a.state.pageTitle && (document.title = c(a.state.pageTitle));
                const e = d;
                (!e || e.isHistoryState) && b.emit("state.changed", a.state);
              }
            });
        },
      }
    );
  });
  //# sourceMappingURL=History.js.map
})(System, System);
//# sourceURL=/dist/javascripts/services/History.js
