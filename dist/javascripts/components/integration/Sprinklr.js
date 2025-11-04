(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "components/global/ThirdPartyLoader",
      "toolbox/deepMerge",
      "services/EventEmitter",
      "toolbox/ajax",
      "toolbox/event",
      "toolbox/debounce",
      "services/DataLayer",
      "toolbox/cookie",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i, j, k;
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
              d = a.Event;
            },
            function (a) {
              e = a.ajax;
            },
            function (a) {
              (f = a.on), (g = a.off);
            },
            function (a) {
              h = a.debounce;
            },
            function (a) {
              i = a.default;
            },
            function (a) {
              j = a.cookie;
            },
          ],
          execute: function () {
            a(
              "default",
              (k = class extends b {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    c(
                      {
                        analytics: {},
                        productsUrl: null,
                        pageInitUrl: null,
                        conversationInfoUrl: null,
                        clientContextKey: "_c_65fb06be9cc87c61e1ffcd3a",
                        userContextKey: "_c_65fb07e29cc87c61e101964d",
                        defaultLocation: "location-onsite",
                        bubbleLocation: "location-bubble",
                        conversationCookieLifetime: 7,
                        consentId: "sprinklr",
                      },
                      b,
                    ),
                  );
                }
                initState() {
                  this.state.hasConsentListener = !1;
                }
                initCache() {
                  this.selectors.chatBtn = document.querySelectorAll(
                    ".sprinklr-open-chat",
                  );
                }
                bindEvents() {
                  (this.onCartUpdatedDebounced = h(
                    this.onCartUpdated.bind(this),
                    200,
                  )),
                    (this.onFormSubmitDebounced = h(
                      this.onFormSubmit.bind(this),
                      200,
                    )),
                    (this.onVideoPlayerPlayDebounced = h(
                      this.onVideoPlayerPlay.bind(this),
                      200,
                    )),
                    d.on("cart.updated", this.onCartUpdatedDebounced, this),
                    d.on(
                      "cart.product.added",
                      this.onCartUpdatedDebounced,
                      this,
                    ),
                    d.on("carticon.update", this.onCartUpdatedDebounced, this),
                    d.on("lineitem.updated", this.onCartUpdatedDebounced, this),
                    d.on(
                      "bonus.product.added",
                      this.onCartUpdatedDebounced,
                      this,
                    ),
                    d.on(
                      "registration.success",
                      this.onCartUpdatedDebounced,
                      this,
                    ),
                    d.on("login.success", this.onCartUpdatedDebounced, this),
                    d.on(
                      "form.execute.submit",
                      this.onFormSubmitDebounced,
                      this,
                    ),
                    d.on(
                      "videoplayer.play",
                      this.onVideoPlayerPlayDebounced,
                      this,
                    ),
                    this.selectors.chatBtn &&
                      f(
                        "click.sprinklr",
                        this.selectors.chatBtn,
                        this.onOpenChat.bind(this),
                      ),
                    this.state.hasConsentListener ||
                      this.isComponentConsentGiven() ||
                      (d.on(
                        "Onetrust.activegroups.updated",
                        this.onOnetrustActiveGroupsUpdated,
                        this,
                      ),
                      (this.state.hasConsentListener = !0));
                }
                onOnetrustActiveGroupsUpdated() {
                  window.OnetrustActiveGroups.includes(
                    this.options.consentGroup,
                  ) &&
                    (this.updateConversationCookies(this.lastConversationData),
                    delete this.lastConversationData);
                }
                onCartUpdated() {
                  e(this.options.productsUrl)
                    .then(this.onChatUpdate.bind(this))
                    .catch(() => {});
                }
                onFormSubmit(a) {
                  const b = a.form.querySelector('[name="form_id"]');
                  if (b) {
                    const a = b.getAttribute("value");
                    if (a) {
                      const b = {};
                      (b[this.options.userContextKey] = [a]),
                        window.sprChat("updateUserContext", b);
                    }
                  }
                }
                onVideoPlayerPlay(a) {
                  const { videoId: b } = a;
                  if (b) {
                    const a = {};
                    (a[this.options.userContextKey] = [b]),
                      window.sprChat("updateUserContext", a);
                  }
                }
                onChatUpdate(a) {
                  (this.state.lastModifiedTime === a.modifiedTime &&
                    (this.state.lastModifiedTime || a.modifiedTime)) ||
                    ((this.state.lastModifiedTime = a.modifiedTime),
                    window.sprChat("updateCart", {
                      productItems: a.products,
                      purchased: a.purchased,
                      modifiedTime: a.modifiedTime,
                    }));
                }
                onOpenChat(a) {
                  const b = {},
                    { target: c } = a,
                    d = c.getAttribute("data-location");
                  (b[this.options.clientContextKey] = [
                    d || this.options.defaultLocation,
                  ]),
                    window.sprChat("open"),
                    window.sprChat("updateClientContext", b);
                }
                onBeforeScriptLoad(a, b) {
                  return (
                    (window.sprChatSettings = i.get(
                      "sprinklrChatSettings",
                      {},
                    )),
                    super.onBeforeScriptLoad(a, b)
                  );
                }
                onScriptLoaded() {
                  super.onScriptLoaded(),
                    window.sprChat("onEvent", this.eventHandler.bind(this)),
                    this.options.pageInitUrl &&
                      e(this.options.pageInitUrl)
                        .then(this.onChatUpdate.bind(this))
                        .catch(() => {});
                }
                eventHandler(a) {
                  const b = {};
                  switch (
                    ((b[this.options.clientContextKey] = [
                      this.options.bubbleLocation,
                    ]),
                    a && a.eventType)
                  ) {
                    case "NEW_CONVERSATION_CREATED":
                    case "EXISTING_CONVERSATION_OPENED": {
                      this.updateConversationCookies(a.additional);
                      break;
                    }
                    case "CONVERSATION_WINDOW_OPENED":
                      this.options.analytics &&
                        d.emit("analytics.event", this.options.analytics);
                      break;
                    case "CHAT_TRIGGER_CLICKED":
                      window.sprChat("updateClientContext", b);
                      break;
                    default:
                  }
                }
                updateConversationCookies() {
                  let a =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  if (!this.isComponentConsentGiven())
                    return void (this.lastConversationData = a);
                  const { conversationId: b } = a;
                  let c = a.caseNumber || "";
                  b &&
                    (j.setCookie(
                      "sprinklrConversationId",
                      b,
                      this.options.conversationCookieLifetime,
                    ),
                    !c &&
                      b === j.getCookie("sprinklrConversationId") &&
                      (c = j.getCookie("sprinklrCaseNumber")),
                    j.setCookie(
                      "sprinklrCaseNumber",
                      c,
                      this.options.conversationCookieLifetime,
                    ));
                }
                destroy() {
                  d.removeListener(
                    "cart.updated",
                    this.onCartUpdatedDebounced,
                    this,
                  ),
                    d.removeListener(
                      "cart.product.added",
                      this.onCartUpdatedDebounced,
                      this,
                    ),
                    d.removeListener(
                      "carticon.update",
                      this.onCartUpdatedDebounced,
                      this,
                    ),
                    d.removeListener(
                      "lineitem.updated",
                      this.onCartUpdatedDebounced,
                      this,
                    ),
                    d.removeListener(
                      "bonus.product.added",
                      this.onCartUpdatedDebounced,
                      this,
                    ),
                    d.removeListener(
                      "registration.success",
                      this.onCartUpdatedDebounced,
                      this,
                    ),
                    d.removeListener(
                      "login.success",
                      this.onCartUpdatedDebounced,
                      this,
                    ),
                    d.removeListener(
                      "form.execute.submit",
                      this.onFormSubmitDebounced,
                      this,
                    ),
                    d.removeListener(
                      "videoplayer.play",
                      this.onVideoPlayerPlayDebounced,
                      this,
                    ),
                    this.selectors.chatBtn &&
                      g("click.sprinklr", this.selectors.chatBtn),
                    this.state.hasConsentListener &&
                      d.removeListener(
                        "Onetrust.activegroups.updated",
                        this.onOnetrustActiveGroupsUpdated,
                        this,
                      );
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=Sprinklr.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/integration/Sprinklr.js
