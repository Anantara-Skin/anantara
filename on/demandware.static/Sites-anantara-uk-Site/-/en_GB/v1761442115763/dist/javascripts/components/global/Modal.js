(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "core/mixwith",
      "services/EventEmitter",
      "toolbox/ajax",
      "toolbox/event",
      "toolbox/animate",
      "toolbox/deepMerge",
      "toolbox/throttle",
      "mixins/Accessibility",
      "mixins/Loader",
      "services/DataLayer",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              c = a.mix;
            },
            function (a) {
              d = a.Event;
            },
            function (a) {
              e = a.ajax;
            },
            function (a) {
              (f = a.on), (g = a.off), (h = a.trigger);
            },
            function (a) {
              (i = a.animate), (j = a.transition);
            },
            function (a) {
              k = a.deepMerge;
            },
            function (a) {
              l = a.throttle;
            },
            function (a) {
              m = a.default;
            },
            function (a) {
              n = a.default;
            },
            function (a) {
              o = a.default;
            },
          ],
          execute: function () {
            a(
              "default",
              (p = class extends c(b).with(m, n) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (a = a || document.createElement("div")),
                    super(
                      a,
                      k(
                        {
                          header: null,
                          footer: null,
                          contentUrl: null,
                          cssPath: null,
                          content: null,
                          closeLabel: o.get("text.close") || "Close",
                          showCloseButton: !0,
                          title: null,
                          ariaLabel: "",
                          closeTimeout: 0,
                          escapeClose: !0,
                          clickOutsideClose: !0,
                          showOverlay: !0,
                          keepOverlayOpened: !1,
                          afterCloseReload: !1,
                          afterCloseRedirectUrl: null,
                          enableStacking: !1,
                          isStackable: !0,
                          openInPageDesignerEditor: !0,
                          motion: {
                            delay: null,
                            duration: null,
                            type: "fade-up",
                          },
                          text: {
                            accessibility: {
                              processingStatusMessage: "",
                              finishedStatusMessage: "",
                            },
                          },
                          focusReturnElement: null,
                          preventAfterModalOpenSecondaryAnalytics: !1,
                          beforeOpen() {},
                          afterOpen() {},
                          beforeClose() {},
                          afterClose() {},
                          classNames: {
                            container: [],
                            title: "",
                            body: [],
                            wrapper: [],
                            dialogOpen: "h-fade-in",
                            dialogClose: "h-fade-out",
                          },
                        },
                        b,
                      ),
                    ),
                    this.element.classList.contains("c-modal") ||
                      this._createLayout(),
                    (this.enableStacking = !1),
                    (this.openPromise = null);
                }
                initState() {
                  (this.state.isOpened = !1),
                    (this.state.isOpening = !1),
                    (this.state.isClosing = !1),
                    (this.state.initContent = !1),
                    (this.state.isOverlayOpened = !1),
                    (this.state.hasCustomCSS = !!this.options.cssPath),
                    (this.state.isCustomCSSLoaded = !1),
                    (this.state.isCustomCSSLoading = !1),
                    (this.state.isPreventRedirectAfterClose = !1),
                    (this.state.isActive = !0),
                    (this.state.isScrollEventAttached = !1),
                    (this.state.isAnalyticsSent = !1);
                }
                initCache() {
                  (this.classes = {
                    openedState: "m-opened",
                    motion: "m-motion",
                  }),
                    (this.wrapper = null),
                    (this.header = null),
                    (this.content = null),
                    (this.innerContent = null),
                    (this.footer = null);
                }
                modalClickHandler(a) {
                  const { target: b } = a;
                  b.hasAttribute("data-js-prevent-redirect") &&
                    (this.state.isPreventRedirectAfterClose = !0),
                    b.hasAttribute("data-js-close-modal") &&
                      this.close(void 0, { closeActionTargetType: b.type });
                }
                _createLayout() {
                  this.element.classList.add("c-modal"),
                    this.options.classNames.container.forEach((a) => {
                      a.split(" ").map((a) => this.element.classList.add(a));
                    });
                  const a =
                      (this.options.showCloseButton &&
                        '<button type="button" class="c-modal__close" data-js-close-modal>'.concat(
                          this.options.closeLabel,
                          "</button>",
                        )) ||
                      "",
                    b = '\n            <div class="c-modal__wrapper '
                      .concat(
                        this.options.classNames.wrapper.join(" "),
                        '">\n                <header class="c-modal__header"><h2 class="c-modal__title" id="modal-title"></h2></header>\n                <div class="c-modal__body"></div>\n                <footer class="c-modal__footer"></footer>\n                ',
                      )
                      .concat(a, "\n            </div>\n        ");
                  (this.element.innerHTML = b),
                    (this.wrapper =
                      this.element.querySelector(".c-modal__wrapper")),
                    (this.header =
                      this.element.querySelector(".c-modal__header")),
                    (this.title =
                      this.element.querySelector(".c-modal__title")),
                    (this.content =
                      this.element.querySelector(".c-modal__body")),
                    (this.footer =
                      this.element.querySelector(".c-modal__footer")),
                    this.options.motion &&
                      o.get("uiconfig.motion.modalsEnabled") &&
                      (this.element.classList.add(this.classes.motion),
                      this.setMotion(this.header)),
                    this.options.classNames.body.forEach((a) => {
                      this.content.classList.add(a);
                    });
                }
                setMotion(a) {
                  a.setAttribute("data-aos", this.options.motion.type),
                    this.options.motion.duration &&
                      a.setAttribute(
                        "data-aos-duration",
                        this.options.motion.duration,
                      ),
                    this.options.motion.delay &&
                      a.setAttribute(
                        "data-aos-delay",
                        this.options.motion.delay,
                      );
                }
                _insertInDocument() {
                  document.body.appendChild(this.element);
                }
                _addContent() {
                  this.options.header
                    ? this.setHeader(this.options.header)
                    : this.options.title
                      ? this.setTitle(this.options.title)
                      : (this.header.innerHTML = ""),
                    this.options.footer && this.setFooter(this.options.footer);
                  const { content: a, configId: b } = this.options,
                    c = this.options.contentUrl;
                  return c
                    ? e(c, { configId: b })
                        .then((a) =>
                          this.element
                            ? ((this.state.initContent = !0), a)
                            : Promise.reject(new Error("Modal removed")),
                        )
                        .then(this.setContent.bind(this))
                        .then(() => {
                          this.removeLoader(),
                            this.updateStatusMessage(
                              this.options.text.accessibility
                                .finishedStatusMessage || !1,
                            );
                        })
                        .catch(() => {
                          this.element &&
                            (this.removeLoader(),
                            this.updateStatusMessage(
                              this.options.text.accessibility
                                .finishedStatusMessage || !1,
                            ));
                        })
                    : a
                      ? ((this.state.initContent = !0),
                        this.removeLoader(),
                        this.updateStatusMessage(
                          this.options.text.accessibility
                            .finishedStatusMessage || !1,
                        ),
                        this.setContent(a))
                      : Promise.resolve();
                }
                open() {
                  return (this.options.afterCloseRedirectUrl &&
                    !this.state.isPreventRedirectAfterClose &&
                    ((this.options.keepOverlayOpened = !0),
                    d.emit("overlay.open", {
                      keepOpened: this.options.keepOverlayOpened,
                    }),
                    (this.state.isOverlayOpened = !0)),
                  this.state.isOpened ||
                    this.state.isOpening ||
                    (!this.options.openInPageDesignerEditor &&
                      o.get("page.isPageDesignerEditMode", !1)))
                    ? Promise.reject()
                    : ((this.state.isOpened = !0),
                      (this.state.isOpening = !0),
                      (this.openPromise = this.beforeOpen()
                        .then(this._appendLayout.bind(this))
                        .then(this._importCSS.bind(this))
                        .then(() =>
                          this.enableStacking
                            ? Promise.resolve()
                            : this._addContent(),
                        )
                        .then(() => {
                          this.element && this.afterOpen();
                        })),
                      this.openPromise);
                }
                beforeOpen() {
                  return (
                    "function" == typeof this.options.beforeOpen &&
                      this.options.beforeOpen(this.element),
                    this.sendEvent("modal.open.before"),
                    this.state.initContent ||
                      (this.addLoader(),
                      this.updateStatusMessage(
                        this.options.text.accessibility
                          .processingStatusMessage || !0,
                      )),
                    Promise.resolve()
                  );
                }
                onContentUpdated() {
                  d.emit("registry.registerChildren", this.element),
                    window.setTimeout(() => {
                      this.updateComponents();
                    }, 200);
                }
                onModalScroll() {
                  d.emit("highlighter.update");
                }
                scrollThrottle() {
                  const a = l(this.onModalScroll.bind(this), 20);
                  return (this.state.isScrollEventAttached = !0), a;
                }
                afterOpen() {
                  f("scroll", this.wrapper, this.scrollThrottle(), {
                    passive: !0,
                  }),
                    this.options.escapeClose &&
                      window.setTimeout(() => {
                        f(
                          "keydown.".concat(this.id),
                          document,
                          this.onKeyboardControl.bind(this),
                        );
                      }, 200),
                    "function" == typeof this.options.afterOpen &&
                      this.options.afterOpen(this.element),
                    this.initModalPattern(
                      this.wrapper,
                      this.options.focusReturnElement,
                    ),
                    this.triggerAfterOpenAnalyticsEvents(),
                    this.sendEvent("modal.open.after"),
                    (this.state.isOpening = !1),
                    (this.openPromise = null);
                }
                close() {
                  let a =
                      !!(0 < arguments.length && void 0 !== arguments[0]) &&
                      arguments[0],
                    b =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return !this.state.isOpened || this.state.isClosing
                    ? Promise.resolve()
                    : ((this.state.isClosing = !0),
                      this.beforeClose(b),
                      this.element.classList.remove(
                        this.options.classNames.dialogOpen,
                      ),
                      i(this.options.classNames.dialogClose, this.element).then(
                        () => {
                          this.element.classList.remove(
                            this.classes.openedState,
                          );
                        },
                      ),
                      this.destroyModalPattern(),
                      new Promise((b) => {
                        setTimeout(() => {
                          this._doClose(a), b();
                        }, this.options.closeTimeout);
                      }));
                }
                _doClose(a) {
                  this.enableStacking ||
                    (this.element.remove(),
                    this.state.isOverlayOpened &&
                      (d.emit("overlay.close"),
                      (this.state.isOverlayOpened = !1))),
                    d.emit("page.scroll.enabled", {
                      isUnblockScrollForAll: !0,
                      isInstantScroll: !0,
                    }),
                    this.afterClose(a);
                }
                beforeClose(a) {
                  this.state.isScrollEventAttached && g("scroll", this.wrapper),
                    this.options.beforeClose(this.element, a),
                    this.sendEvent("modal.close.before");
                }
                afterClose(a) {
                  (this.closeAll = a),
                    (this.state.isOpened = !1),
                    (this.state.isClosing = !1),
                    this.options.afterClose(this.element),
                    this.sendEvent("modal.close.after"),
                    this.options.afterCloseReload && window.location.reload(),
                    this.options.afterCloseRedirectUrl &&
                      !this.state.isPreventRedirectAfterClose &&
                      window.location.assign(
                        this.options.afterCloseRedirectUrl,
                      ),
                    (this.state.isPreventRedirectAfterClose = !1);
                }
                setContent(a) {
                  return (
                    (this.content.innerHTML = a),
                    this.options.motion &&
                      o.get("uiconfig.motion.modalsEnabled") &&
                      ((this.innerContent = Array.from(this.content.children)),
                      this.innerContent.length &&
                        this.innerContent.forEach((a) => {
                          this.setMotion(a),
                            j(a, () => {
                              a.removeAttribute("data-aos"),
                                this.updateComponents();
                            });
                        }),
                      this.element.classList.remove(this.classes.motion)),
                    (this.appendedScripts = []),
                    this.content.querySelectorAll("script").forEach((a) => {
                      const b = document.createElement("script");
                      (b.text = a.innerHTML),
                        (b.async = a.async),
                        (b.defer = a.defer),
                        (b.type = a.type),
                        document.head.appendChild(b),
                        this.appendedScripts.push(b);
                    }),
                    Promise.resolve(a).then(this.onContentUpdated.bind(this))
                  );
                }
                setHeader(a) {
                  return (this.header.innerHTML = a), Promise.resolve(a);
                }
                setTitle(a) {
                  return (
                    this.options.classNames.title &&
                      this.title.classList.add(
                        ...this.options.classNames.title.split(" "),
                      ),
                    (this.title.innerHTML = a),
                    Promise.resolve(a)
                  );
                }
                setFooter(a) {
                  return (this.footer.innerHTML = a), Promise.resolve(a);
                }
                _appendLayout() {
                  return (
                    this.enableStacking || this._insertInDocument(),
                    this._bindModalEvents(),
                    this.element.classList.add(this.classes.openedState),
                    this.element.classList.add(
                      this.options.classNames.dialogOpen,
                    ),
                    this.setAccessibility(),
                    d.emit("page.scroll.disabled", !0),
                    this.options.showOverlay &&
                      (this.sendEvent("slidingPanel.check.active"),
                      d.emit("overlay.open", {
                        preventClick: !this.options.clickOutsideClose,
                        keepOpened: this.options.keepOverlayOpened,
                      }),
                      (this.options.keepOverlayOpened = !1),
                      (this.state.isOverlayOpened = !0)),
                    Promise.resolve()
                  );
                }
                _importCSS() {
                  return !this.state.hasCustomCSS ||
                    this.state.isCustomCSSLoaded ||
                    this.state.isCustomCSSLoading
                    ? Promise.resolve()
                    : ((this.state.isCustomCSSLoading = !0),
                      SystemJS.import(
                        "cssComponent/".concat(this.options.cssPath, "!"),
                      )
                        .then(() => {
                          this.state.isCustomCSSLoading = !1;
                        })
                        .catch(() => {
                          (this.state.isCustomCSSLoading = !1),
                            console.error("CSS file cannot be found");
                        }));
                }
                _bindModalEvents() {
                  d.on("overlay.close.before", this.onOverlayCloseBefore, this),
                    d.on("modal.close", this.close, this),
                    d.on("modal.keep.overlay.open", this.keepOpen, this),
                    d.on(
                      "slidingPanel.open.after",
                      this.onSlidingPanelOpen,
                      this,
                    ),
                    d.on(
                      "slidingPanel.close.after",
                      this.onSlidingPanelClose,
                      this,
                    ),
                    f("click", this.element, this.modalClickHandler.bind(this));
                }
                _removeModalEvents() {
                  this.options.escapeClose &&
                    g("keydown.".concat(this.id), document),
                    g("click", this.element),
                    d.removeListener(
                      "overlay.close.before",
                      this.onOverlayCloseBefore,
                    ),
                    d.removeListener("modal.close", this.close),
                    d.removeListener(
                      "slidingPanel.open.after",
                      this.onSlidingPanelOpen,
                    ),
                    d.removeListener(
                      "slidingPanel.close.after",
                      this.onSlidingPanelClose,
                    ),
                    d.removeListener("modal.keep.overlay.open", this.keepOpen);
                }
                keepOpen() {
                  this.options.keepOverlayOpened = !0;
                }
                onSlidingPanelOpen() {
                  this.state.isActive = !1;
                }
                onSlidingPanelClose() {
                  this.state.isActive = !0;
                }
                onKeyboardControl(a) {
                  if (this.state.isActive)
                    switch (a.key) {
                      case "Tab":
                        this.onTabKey(a);
                        break;
                      case "Escape":
                        this.close();
                        break;
                      default:
                    }
                }
                sendEvent(a) {
                  d.emit(a, this);
                }
                triggerAfterOpenAnalyticsEvents() {
                  this.analytics &&
                    (this.analytics.virtualPageURL &&
                      this.analytics.virtualPageTitle &&
                      d.emit("analytics.virtualPage", {
                        virtualPageURL:
                          this.analytics && this.analytics.virtualPageURL,
                        virtualPageTitle:
                          this.analytics && this.analytics.virtualPageTitle,
                      }),
                    this.analytics.afterModalOpen &&
                      !(
                        this.options.preventAfterModalOpenSecondaryAnalytics &&
                        this.state.isAnalyticsSent
                      ) &&
                      (d.emit("analytics.event", this.analytics.afterModalOpen),
                      (this.state.isAnalyticsSent = !0)));
                }
                setAccessibility() {
                  this.element.setAttribute("role", "dialog"),
                    this.element.setAttribute("aria-modal", "true"),
                    this.options.ariaLabel
                      ? this.element.setAttribute(
                          "aria-label",
                          this.options.ariaLabel,
                        )
                      : this.element.setAttribute(
                          "aria-labelledby",
                          "modal-title",
                        );
                }
                updateComponents() {
                  if (this.content.offsetHeight > this.element.scrollHeight) {
                    const a = this.content.querySelectorAll(
                      '[data-component="global/Carousel"]',
                    );
                    a.length &&
                      a.forEach((a) => {
                        h("carousel.update", a);
                      });
                  }
                }
                onTabKey(a) {
                  super.focusTrap(this.element, a);
                }
                onOverlayCloseBefore() {
                  (this.state.isOverlayOpened = !1), this.close();
                }
                destroy() {
                  this._removeModalEvents(),
                    (this.appendedScripts || []).forEach((a) => {
                      document.head.removeChild(a);
                    });
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=Modal.js.map
})(System, System);
//# sourceURL=/on/demandware.static/Sites-anantara-uk-Site/-/en_GB/v1761442115763/dist/javascripts/components/global/Modal.js
