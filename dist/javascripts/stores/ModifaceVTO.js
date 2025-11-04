(function (System, SystemJS) {
  "use strict";
  System.register(["stores/BaseStore"], function (a) {
    "use strict";
    var b, c, d;
    return {
      setters: [
        function (a) {
          b = a.default;
        },
      ],
      execute: function () {
        (c = {
          vtoActivationHistory: {},
          isVTOActivated: !1,
          currentPid: null,
          category: null,
          currentLook: null,
          previewProductsMap: [],
          currentEditPid: null,
          isMultipleSelection: !1,
          mode: null,
        }),
          (d = new b(c, {
            enableVTO: (a, b) => {
              const c = Object.assign({}, a.vtoActivationHistory);
              b.pid && (c[b.pid] = !0);
              const d = b.look || a.currentLook;
              return (
                d &&
                  d.forEach((a) => {
                    c[a.upc] = !0;
                  }),
                Object.assign({}, a, {
                  vtoActivationHistory: c,
                  isVTOActivated: !0,
                  currentPid: b.pid,
                  currentLook: b.look || a.currentLook,
                })
              );
            },
            disableVTO: (a) => Object.assign({}, a, { isVTOActivated: !1 }),
            selectLook: (a, b) =>
              Object.assign({}, a, {
                currentPid: b.pid,
                currentLook: b.look || a.currentLook,
                previewProductsMap: b.lookProductsMap || [],
                currentEditPid: null,
              }),
            unSelectLook: (a) =>
              Object.assign({}, a, {
                currentPid: null,
                currentLook: null,
                previewProductsMap: [],
                currentEditPid: null,
              }),
            removeProduct: (a, b) => {
              const c = a.previewProductsMap.filter((a) => b.pid !== a.pid);
              return Object.assign({}, a, { previewProductsMap: c });
            },
            editProduct: (a, b) =>
              Object.assign({}, a, { currentEditPid: b.pid }),
            updateProductQuantity: (a, b) => {
              const c = a.previewProductsMap.map((a) => {
                const c = Object.assign({}, a);
                return b.pid === c.pid && (c.qty = b.qty || 1), c;
              });
              return Object.assign({}, a, { previewProductsMap: c });
            },
            reset: (a) =>
              Object.assign({}, a, {
                isVTOActivated: !1,
                currentPid: null,
                category: null,
                currentLook: null,
                vtoActivationHistory: {},
                previewProductsMap: [],
                currentEditPid: null,
                accessBy: null,
                mode: null,
              }),
            resetLook: (a) =>
              Object.assign({}, a, {
                currentLook: null,
                previewProductsMap: [],
                currentEditPid: null,
              }),
            selectMode: (a, b) => Object.assign({}, a, { mode: b }),
            unselectMode: (a) => Object.assign({}, a, { mode: null }),
          })),
          a("default", d);
      },
    };
  });
  //# sourceMappingURL=ModifaceVTO.js.map
})(System, System);
//# sourceURL=/dist/javascripts/stores/ModifaceVTO.js
