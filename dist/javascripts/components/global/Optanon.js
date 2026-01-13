(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "toolbox/deepMerge",
      "toolbox/cookie",
      "toolbox/ajax",
      "toolbox/event",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h;
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
              e = a.ajax;
            },
            function (a) {
              (f = a.on), (g = a.trigger);
            },
          ],
          execute: function () {
            a(
              "default",
              (h = class extends b {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    c(
                      {
                        optanonCookieGroupsToDisableSFCCTracking: "2",
                        changeSessionTrackingUrl: "",
                        cookies: { optanon: "OptanonConsent", dw: "dw_dnt" },
                        buttons: {
                          confirmMyChoices: "Confirm My Choices",
                          allowAll: "Allow All",
                        },
                        classes: {
                          saveContainer:
                            "save-preference-btn-handler onetrust-close-btn-handler button-theme",
                          buttonTheme: "button-theme",
                          savePreference: "save-preference-btn-container",
                          hideElement: "ot-hide",
                        },
                        id: {
                          saveContainer: "Save Container",
                          acceptContainer: "Accept Container",
                          acceptRecommended: "accept-recommended-btn-handler",
                          acceptRecommendedContainer:
                            "accept-recommended-container",
                          preferenceCenter: "onetrust-pc-sdk",
                        },
                        eventName: "consentManagementComponentLoaded",
                      },
                      b,
                    ),
                  );
                }
                bindEvents() {
                  (window.OptanonWrapper = this.optanonWrapperEvent.bind(this)),
                    window.addEventListener(
                      "load",
                      this.optanonControlPrefCenterDisplay.bind(this),
                      this.optanonDisplayPopup.bind(this),
                    ),
                    f(this.options.eventName, window, this.afterLoad, {
                      customEvent: !0,
                    });
                }
                afterLoad() {}
                optanonWrapperEvent() {
                  if (this.options.optanonCookieGroupsToDisableSFCCTracking) {
                    const a = d.getCookie(this.options.cookies.optanon);
                    if (a) {
                      const b = this.parseCookieOptanonConsentValue(
                        a,
                        "&",
                        "=",
                      );
                      if (b.groups) {
                        const a = this.parseCookieOptanonConsentValue(
                            decodeURIComponent(b.groups),
                            ",",
                            ":",
                          ),
                          c =
                            this.options.optanonCookieGroupsToDisableSFCCTracking.split(
                              ",",
                            ),
                          e = c.filter((b) => "0" === a[b]),
                          f = !(e && e.length),
                          g = "0" === d.getCookie(this.options.cookies.dw);
                        g !== f &&
                          this.options.changeSessionTrackingUrl &&
                          this.changeSessionTracking(f);
                      }
                    }
                    g(this.options.eventName, window);
                  }
                }
                changeSessionTracking(a) {
                  const b = `${this.options.changeSessionTrackingUrl}?sessionTrackingAllowed=${a}`;
                  return e(b).catch(() => {});
                }
                parseCookieOptanonConsentValue(a, b, c) {
                  const d = {};
                  if (!a || !b || !c) return d;
                  a += "";
                  const e = a.split(b);
                  for (let f = 0; f < e.length; f++) {
                    const [a, b] = e[f].split(c);
                    d[a] = b;
                  }
                  return d;
                }
                optanonDisplayPopup() {
                  if (
                    "undefined" == typeof window.Optanon ||
                    !this.options.optanonDomainScriptID
                  )
                    return;
                  this.options.optanonCookieToggleInfoDisplayEnable &&
                    "IsAlertBoxClosed" in window.Optanon &&
                    !1 === window.Optanon.IsAlertBoxClosed() &&
                    window.Optanon.ToggleInfoDisplay();
                  const { confirmMyChoices: a, allowAll: b } =
                      this.options.buttons,
                    c = `<button id="${this.options.id.saveContainer}" class="${this.options.classes.saveContainer}" style="${this.options.styles.confirmMyChoices}" aria-label="${a}" role="button" tabindex="0">${a}</button>`,
                    d = `<button id="${this.options.id.acceptRecommended}" class="${this.options.classes.buttonTheme}" style="${this.options.styles.allowAll}" aria-label="${b}" role="button" tabindex="0">${b}</button>`;
                  if (
                    null ===
                    document.getElementById(this.options.id.saveContainer)
                  ) {
                    const a = document.getElementById(
                        this.options.id.acceptRecommendedContainer,
                      ),
                      b = document.getElementsByClassName(
                        this.options.classes.savePreference,
                      )[0],
                      e = document.createElement("div");
                    e.id = this.options.id.saveContainer;
                    const f = document.createElement("div");
                    (f.id = this.options.id.acceptContainer),
                      (e.innerHTML = c),
                      (f.innerHTML = d),
                      a.appendChild(e),
                      b.appendChild(f),
                      (document.getElementsByClassName(
                        this.options.classes.buttonTheme,
                      )[2].style.marginRight = "10px");
                  }
                }
                optanonControlPrefCenterDisplay() {
                  const a = document.getElementById(
                    this.options.id.preferenceCenter,
                  );
                  a.classList.contains(this.options.classes.hideElement) ||
                    a.classList.add(this.options.classes.hideElement);
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=Optanon.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components//dist/javascripts/components/global/Optanon.js.js
