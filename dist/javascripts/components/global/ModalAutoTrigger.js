(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "toolbox/deepMerge",
      "toolbox/cookie",
      "services/EventEmitter",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              c = a.deepMerge;
            },
            function (a) {
              d = a.cookie;
            },
            function (a) {
              e = a.Event;
            },
          ],
          execute: function () {
            a(
              "default",
              (f = class extends b {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    c(
                      {
                        modalOptions: {
                          cssPath: null,
                          classNames: { container: [] },
                        },
                        disableModal: !1,
                        cookieID: null,
                        cookieExpireInDays: 365,
                        disableParamsList: null,
                        displayDelay: 0,
                        displayDelayBeforeScrollTreshold: 0,
                        setCookieOnModalOpen: !1,
                        disableModalIfCookieExists: !1,
                        _scrollable: !0,
                        reloadEvents: [],
                      },
                      b,
                    ),
                  );
                }
                initState() {
                  (this.state.lastScrollTop = 0), (this.state.isShown = !1);
                }
                bindEvents() {
                  (this.options.reloadEvents || []).forEach((a) => {
                    e.on(a, this.onReloadModal, this);
                  });
                }
                afterInit() {
                  const a = this.getModalDisabled();
                  if (
                    ((this.state.lastScrollTop =
                      window.scrollY || document.documentElement.scrollTop),
                    !a)
                  ) {
                    const {
                      displayDelay: a,
                      displayDelayBeforeScrollTreshold: b,
                    } = this.options;
                    a
                      ? setTimeout(() => this.showModal(), a)
                      : !b && this.showModal();
                  }
                }
                onScroll() {
                  const {
                    displayDelay: a,
                    displayDelayBeforeScrollTreshold: b,
                  } = this.options;
                  this.state.isShown ||
                    a ||
                    !b ||
                    this.getModalDisabled() ||
                    this.handleDisplay();
                }
                getModalDisabled() {
                  if (
                    this.options.disableModal ||
                    (this.options.disableModalIfCookieExists &&
                      this.options.cookieID &&
                      d.getCookie(this.options.cookieID))
                  )
                    return !0;
                  let a = !1;
                  if (this.options.disableParamsList) {
                    const b = new URL(document.location);
                    a = this.options.disableParamsList.some(
                      (a) => -1 < b.search.indexOf(a),
                    );
                  }
                  return a;
                }
                handleDisplay() {
                  const a =
                      window.scrollY || document.documentElement.scrollTop,
                    b = a - this.state.lastScrollTop,
                    c = a > this.state.lastScrollTop;
                  c
                    ? b >= this.options.displayDelayBeforeScrollTreshold &&
                      this.showModal()
                    : (this.state.lastScrollTop = 0 >= a ? 0 : a);
                }
                showModal() {
                  if (
                    this.options.modalOptions &&
                    (this.options.modalOptions.contentUrl ||
                      this.options.modalOptions.content)
                  ) {
                    const a = this.options.modalOptions;
                    (a.afterClose = this.afterClose.bind(this)),
                      (this.state.isShown = !0),
                      this.options.setCookieOnModalOpen &&
                        this.options.cookieID &&
                        !d.getCookie(this.options.cookieID) &&
                        (a.beforeOpen = () => {
                          d.setCookie(
                            this.options.cookieID,
                            !0,
                            this.options.cookieExpireInDays,
                          );
                        }),
                      e.emit("modal.open", { options: a });
                  }
                }
                onReloadModal() {
                  this.reload();
                }
                afterClose() {
                  this.options.cookieID &&
                    !d.getCookie(this.options.cookieID) &&
                    d.setCookie(
                      this.options.cookieID,
                      !0,
                      this.options.cookieExpireInDays,
                    );
                }
                destroy() {
                  (this.options.reloadEvents || []).forEach((a) => {
                    e.removeListener(a, this.onReloadModal, this);
                  });
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=ModalAutoTrigger.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components//dist/javascripts/components/global/ModalAutoTrigger.js.js
