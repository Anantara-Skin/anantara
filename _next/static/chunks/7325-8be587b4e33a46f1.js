"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7325],
  {
    3584: (e, t, a) => {
      a.d(t, { Q: () => S });
      var r = a(94799),
        i = a(31634),
        n = a(34023),
        s = a(99371),
        l = a(92616),
        o = a(17422),
        d = a(57184),
        c = a(93869),
        u = a(32212),
        m = a(10337),
        h = a(39311),
        p = a(17585),
        g = a(70769),
        x = a(81352),
        y = a(86149),
        v = a(17394),
        w = a(67242),
        C = a(48309),
        E = a(28798);
      let f = "Whoops, please check your details and try again",
        S = (e) => {
          let {
              title: t,
              contentAfterForm: a,
              buttonLayout: S,
              loginRedirect: b,
              onLoggedIn: N,
            } = e,
            j = (0, C.V)(S),
            { authenticate: A, loading: I } = (0, y.S)(b),
            { cart: _, isCartLoading: R } = (0, x.B_)(),
            {
              register: L,
              handleSubmit: T,
              formState: { errors: P },
            } = (0, s.mN)({ criteriaMode: "all" }),
            [k, O] = (0, n.useState)(!1),
            [D, M] = (0, n.useState)(f),
            { sendAnalyticsEvent: B } = (0, d.s)();
          (0, n.useEffect)(() => {
            if (!R) {
              let e =
                (null == _ ? void 0 : _.items) && _.items.length > 0
                  ? null == _
                    ? void 0
                    : _.id
                  : void 0;
              B(l.m3.pageViewedEnhanced.bind(l.m3), o.s.PAGE_VIEW_ENHANCED, {
                page_category: "Sign In Page Viewed",
                cart_id: e,
              });
            }
          }, [R]);
          let U = Object.keys(P).length > 0 || k,
            F = async (e) => {
              let { email: t, password: a } = e;
              await A(t, a, null == _ ? void 0 : _.id)
                .then(() => {
                  null == N || N();
                })
                .catch((e) => {
                  e instanceof w.t9
                    ? M(e.message)
                    : (e.message === g.lR.BAD_CREDENTIALS && O(!0), M(f));
                });
            };
          return (0, r.jsxs)(m.S, {
            title: t,
            button: (0, r.jsx)(j, {
              children: (0, r.jsx)(c.$, {
                isLoading: I,
                fullWidth: !0,
                variant: "primary",
                ariaLabel: "Log in",
                "data-testid": "Log in",
                type: "submit",
                onClick: T(F),
                children: "Log in",
              }),
            }),
            children: [
              (0, r.jsxs)(i.Flex, {
                direction: "column",
                gap: 4,
                children: [
                  (0, r.jsx)(
                    u.G,
                    {
                      isInvalid: U,
                      children: (0, r.jsx)(h.p, {
                        label: "Email",
                        name: "email",
                        variant: "pill",
                        height: 7,
                        type: "email",
                        placeholder: "e.g sasha.smith@email.com",
                        ariaLabel: "Email Address Input",
                        "data-testid": "Email Address Input",
                        register: L,
                        rules: E.M,
                        excludedKeys: [v.f.Space],
                        autoComplete: "email",
                      }),
                    },
                    "emailInput",
                  ),
                  (0, r.jsx)(
                    u.G,
                    {
                      isInvalid: U,
                      errorMessage: U ? D : void 0,
                      children: (0, r.jsx)(p.y, {
                        label: "Password",
                        name: "password",
                        register: L,
                        rules: { required: !0 },
                        placeholder: "Password",
                        ariaLabel: "Password Input",
                        "data-testid": "Password Input",
                        autoComplete: "current-password",
                        variant: "pill",
                      }),
                    },
                    "passwordInput",
                  ),
                ],
              }),
              a,
            ],
          });
        };
    },
    10337: (e, t, a) => {
      a.d(t, { S: () => s });
      var r = a(94799),
        i = a(31634),
        n = a(4306);
      let s = (e) => {
        let { title: t, children: a, button: s } = e;
        return (0, r.jsxs)(i.Flex, {
          as: "form",
          direction: "column",
          flex: 1,
          paddingTop: 8,
          gap: 6,
          children: [
            t,
            a,
            (0, r.jsx)(n.Box, { marginTop: "auto", children: s }),
          ],
        });
      };
    },
    17394: (e, t, a) => {
      a.d(t, { f: () => r });
      var r = (function (e) {
        return (e.Space = "Space"), e;
      })({});
    },
    17585: (e, t, a) => {
      a.d(t, { y: () => m });
      var r = a(94799),
        i = a(98814),
        n = a(59164),
        s = a(25685),
        l = a(24854),
        o = a(34023),
        d = a(39693),
        c = a(15220),
        u = a(39311);
      let m = (e) => {
        let {
            name: t,
            placeholder: a = "Password",
            ariaLabel: m = "Password",
            dataTestId: h = "Password",
            register: p,
            rules: g,
            autoComplete: x,
            variant: y = "form",
            label: v,
          } = e,
          w = (0, i.useMultiStyleConfig)("Input", { variant: y }),
          [C, E] = (0, o.useState)(!1);
        return (0, r.jsxs)(n.InputGroup, {
          children: [
            (0, r.jsx)(u.p, {
              variant: y,
              label: v,
              height: 7,
              type: C ? "text" : "password",
              register: p,
              rules: g,
              name: t,
              placeholder: a,
              ariaLabel: m,
              dataTestId: h,
              autoComplete: x,
            }),
            (0, r.jsx)(s.InputRightElement, {
              width: 18,
              justifyContent: "flex-end",
              sx: w.element,
              children: (0, r.jsx)(l.IconButton, {
                "aria-label": "Password Visibility Icon",
                "data-testid": "Password Visibility Icon",
                icon: C
                  ? (0, r.jsx)(d.PasswordShowIcon, {
                      width: 6,
                      height: 6,
                      color: "primary.black.10",
                    })
                  : (0, r.jsx)(c.Z, { width: 6, height: 6 }),
                size: "md",
                onClick: () => E(!C),
                variant: "tertiary",
              }),
            }),
          ],
        });
      };
    },
    17987: (e, t, a) => {
      a.d(t, { m: () => o });
      var r = a(66349);
      let i = (e) => {
          let {
              shippingAddressIds: t,
              billingAddressIds: a,
              addresses: i,
              defaultBillingAddressId: n,
              defaultShippingAddressId: s,
            } = e,
            l = null != n ? n : null == a ? void 0 : a[0],
            o = null != s ? s : null == t ? void 0 : t[0];
          return i.reduce(
            (e, t) => {
              let { addresses: a, billingAddress: i, shippingAddress: n } = e,
                s = (0, r.v0)(t);
              return {
                addresses: [...a, s],
                billingAddress: null != i ? i : s.id === l ? s : void 0,
                shippingAddress: null != n ? n : s.id === o ? s : void 0,
              };
            },
            { addresses: [], billingAddress: void 0, shippingAddress: void 0 },
          );
        },
        n = (e) => {
          let {
            firstName: t,
            lastName: a,
            email: r,
            isEmailVerified: n,
            createdAt: s,
            version: l,
            id: o,
            custom: d,
          } = e;
          return {
            firstName: "".concat(t),
            lastName: "".concat(a),
            email: r,
            isEmailVerified: n,
            createdAt: new Date(s),
            version: l,
            id: o,
            segmentId: null == d ? void 0 : d.fields.segmentId,
            ...i(e),
          };
        };
      var s = a(13619);
      class l extends s.s {
        static getInstance() {
          return l.instance || (l.instance = new l()), l.instance;
        }
        async handleConflictError(e, t) {
          var a;
          if (
            (null === (a = e.response) || void 0 === a ? void 0 : a.status) ===
            409
          ) {
            let e = await this.getMappedCustomer();
            if (e && t) return t(e.version);
          }
          throw e;
        }
        async createAccount(e) {
          let {
            firstName: t,
            lastName: a,
            email: r,
            password: i,
            marketingConsent: n,
            marketingConsentStatement: s,
          } = e;
          return await super.post("/account", {
            firstName: t,
            lastName: a,
            email: r,
            password: i,
            marketingConsent: n,
            marketingConsentStatement: s,
          });
        }
        async sendVerificationEmail(e) {
          let { email: t, redirect: a } = e;
          return (
            await super.post("/account/verify", { email: t, redirect: a })
          ).data;
        }
        async createPasswordToken(e) {
          return await super.post("/account/password/reset-token", {
            email: e,
          });
        }
        async resetPassword(e) {
          let { tokenValue: t, newPassword: a } = e;
          return await super.post("/account/password/reset", {
            tokenValue: t,
            newPassword: a,
          });
        }
        async getMappedCustomer() {
          return n(await super.get("me"));
        }
        async updateLoggedInUser(e) {
          return n(
            await super.post("/me", e).catch(
              (t) =>
                new Promise((a) => {
                  this.handleConflictError(t, (t) =>
                    a(this.updateLoggedInUser({ ...e, version: t })),
                  );
                }),
            ),
          );
        }
        async verifyAccount(e) {
          return await super.post("/account/confirm", { tokenValue: e });
        }
      }
      let o = l.getInstance();
    },
    19682: (e, t, a) => {
      a.d(t, { k: () => l });
      var r = a(27357),
        i = a(92616),
        n = a(17422),
        s = a(57184);
      let l = () => {
        var e;
        let t =
            null === (e = (0, r.useSearchParams)()) || void 0 === e
              ? void 0
              : e.get("utm_campaign"),
          { sendAnalyticsEvent: a } = (0, s.s)();
        return {
          trackCreateAccount: async (e) => {
            let r = { utm_campaign: null != t ? t : "" },
              s = async () => {
                await i.m3.accountCreated().promise, await i.m3.flush().promise;
              };
            a(
              async () => {
                await i.m3.identify(e, r).promise;
              },
              n.s.IDENTIFY,
              r,
            ),
              a(s, n.s.ACCOUNT_CREATED, {});
          },
        };
      };
    },
    20353: (e, t, a) => {
      a.d(t, { B0: () => r, Zj: () => o });
      var r = (function (e) {
        return (
          (e.NO_LOWER_CHAR = "NO_LOWER_CHAR"),
          (e.NO_UPPER_CHAR = "NO_UPPER_CHAR"),
          (e.NO_NUMBER_CHAR = "NO_NUMBER_CHAR"),
          (e.NO_SPECIAL_CHAR = "NO_SPECIAL_CHAR"),
          e
        );
      })({});
      let i = /[a-z]/,
        n = /[A-Z]/,
        s = /[0-9]/,
        l = /[\!\@\#\$\%\^\&\*\(\)\-\_\=\+\,\.\?\;\:\'\"\<\>\{\}\[\]\/]/,
        o = {
          minLength: 8,
          maxLength: 200,
          required: !0,
          validate: (e) => {
            let t = [];
            return (
              i.test(e) || t.push("NO_LOWER_CHAR"),
              n.test(e) || t.push("NO_UPPER_CHAR"),
              s.test(e) || t.push("NO_NUMBER_CHAR"),
              l.test(e) || t.push("NO_SPECIAL_CHAR"),
              !t.length || JSON.stringify(t)
            );
          },
        };
    },
    23163: (e, t, a) => {
      a.d(t, { I: () => m });
      var r = a(94799),
        i = a(89136),
        n = a(98798),
        s = a(99436),
        l = a(20353),
        o = a(31634),
        d = a(39693);
      let c = (e) => {
          let { validationText: t, colorVariant: a, ariaLabel: n } = e;
          return (0, r.jsxs)(o.Flex, {
            direction: "row",
            "aria-label": n,
            children: [
              (0, r.jsx)(d.CheckIcon, { stroke: a, width: 5, height: 5 }),
              (0, r.jsx)(i.Text, {
                textStyle: "function.text.medium",
                textColor: a,
                children: t,
              }),
            ],
          });
        },
        u = {
          MIN_LENGTH: "Must include at least 8 characters",
          MAX_LENGTH: "Sorry, that password's too long",
          CONTAINS_NUM_AND_SPECIAL_CHAR:
            "Must include a number and a special character",
          CONTAINS_LOWER_AND_UPPER_CHAR:
            "Must include upper and lower case letters",
          NOT_MATCH: "Whoops, your passwords don't match",
        },
        m = (e) => {
          var t, a;
          let { errors: o } = e,
            d = null;
          (0, s.yR)("password", o, ["maxLength"])
            ? (d = u.MAX_LENGTH)
            : (0, s.yR)("passwordConfirm", o, ["validate"]) &&
              (d = u.NOT_MATCH);
          let m = [];
          try {
            (null == o
              ? void 0
              : null === (t = o.password) || void 0 === t
                ? void 0
                : t.message) && (m = JSON.parse("".concat(o.password.message)));
          } catch (e) {
            (0, n.A)(n.$.WARN, "Not able to decode password errors", {
              message:
                null === (a = o.password) || void 0 === a ? void 0 : a.message,
              error: e,
            });
          }
          let h = (0, s.yR)("password", o, ["minLength", "required"]),
            p =
              (0, s.yR)("password", o, ["required", "validate"]) &&
              ((null == m ? void 0 : m.includes(l.B0.NO_SPECIAL_CHAR)) ||
                (null == m ? void 0 : m.includes(l.B0.NO_NUMBER_CHAR))),
            g =
              (0, s.yR)("password", o, ["required", "validate"]) &&
              ((null == m ? void 0 : m.includes(l.B0.NO_LOWER_CHAR)) ||
                (null == m ? void 0 : m.includes(l.B0.NO_UPPER_CHAR)));
          return (0, r.jsxs)(r.Fragment, {
            children: [
              !!d &&
                (0, r.jsx)(i.Text, {
                  color: "semantic.red.40",
                  paddingBottom: 4,
                  "aria-label": d,
                  "data-testid": d,
                  children: d,
                }),
              (0, r.jsx)(c, {
                validationText: u.MIN_LENGTH,
                colorVariant: h ? "semantic.red.40" : "primary.black.40",
                ariaLabel: "Password Required Length Constraint",
                "data-testid": "Password Required Length Constraint",
              }),
              (0, r.jsx)(c, {
                validationText: u.CONTAINS_NUM_AND_SPECIAL_CHAR,
                colorVariant: p ? "semantic.red.40" : "primary.black.40",
                ariaLabel: "Password required number and special character",
                "data-testid": "Password required number and special character",
              }),
              (0, r.jsx)(c, {
                validationText: u.CONTAINS_LOWER_AND_UPPER_CHAR,
                colorVariant: g ? "semantic.red.40" : "primary.black.40",
                ariaLabel: "Password required lower and upper case character",
                "data-testid":
                  "Password required lower and upper case character",
              }),
            ],
          });
        };
    },
    43968: (e, t, a) => {
      a.d(t, { G: () => G });
      var r = a(94799),
        i = a(34023),
        n = a(92616),
        s = a(17422),
        l = a(57184),
        o = a(81352),
        d = a(53517),
        c = a(93453),
        u = a(93695),
        m = a(17987);
      let h = (e) =>
        (0, u.useMutation)({
          ...e,
          mutationKey: ["createAccount"],
          mutationFn: function () {
            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
              t[a] = arguments[a];
            return m.m.createAccount(...t);
          },
        });
      var p = a(89136),
        g = a(38236),
        x = a(31634),
        y = a(12736),
        v = a(99371),
        w = a(93869),
        C = a(53436),
        E = a(32212),
        f = a(10337),
        S = a(39311),
        b = a(17394),
        N = a(48309),
        j = a(28798),
        A = a(99436);
      let I = (e) => {
        let {
            formData: t = {},
            emailForbidden: a,
            emailExists: i,
            buttonLayout: n,
            onSubmit: s,
          } = e,
          { email: l, marketingConsent: o } = t,
          c = (0, N.V)(n),
          {
            register: u,
            handleSubmit: m,
            formState: { errors: h },
          } = (0, v.mN)({
            mode: "onBlur",
            criteriaMode: "all",
            values: { email: l, marketingConsent: o },
          }),
          I = (0, d.z)(),
          _ = (0, r.jsxs)(p.Text, {
            "aria-label":
              "We already have an account using this email address, so please",
            "data-testid":
              "We already have an account using this email address, so please",
            textStyle: "body",
            children: [
              "We already have an account using this email address, so please\xa0",
              (0, r.jsx)(g.Link, {
                "aria-label": "Sign In",
                "data-testid": "Sign In",
                textStyle: "body.semibold",
                color: "semantic.red.50",
                href: "/welcome",
                textDecoration: "underline",
                children: "sign in",
              }),
              ".",
            ],
          });
        return (0, r.jsx)(f.S, {
          title: (0, r.jsx)(p.Text, {
            textStyle: "heading.h5.bold",
            children: "Enter your email",
          }),
          button: (0, r.jsx)(c, {
            children: (0, r.jsx)(w.$, {
              isDisabled: !!Object.keys(h).length,
              variant: "primary",
              fullWidth: !0,
              type: "submit",
              onClick: m(s),
              "aria-label": "Next",
              "data-testid": "Next",
              children: "Next",
            }),
          }),
          children: (0, r.jsxs)(x.Flex, {
            direction: "column",
            gap: 4,
            children: [
              (0, r.jsx)(E.G, {
                isInvalid: (0, A.ku)("email", h) || a || i,
                errorMessage: a
                  ? "Sorry, you can't sign in just yet. Check your inbox for an invite"
                  : i
                    ? _
                    : "Whoops, looks like an incorrect email",
                errorVariant: "pill",
                children: (0, r.jsx)(S.p, {
                  label: "Email",
                  name: "email",
                  variant: "pill",
                  height: 7,
                  type: "text",
                  ariaLabel: "Email Address",
                  dataTestId: "Email Address Input",
                  placeholder: "e.g sasha.smith@email.com",
                  register: u,
                  rules: j.M,
                  excludedKeys: [b.f.Space],
                  autoComplete: "email",
                }),
              }),
              (0, r.jsx)(y.FormControl, {
                display: "flex",
                children: (0, r.jsx)(C.S, {
                  ariaLabel: "Marketing Consent Checkbox",
                  dataTestId: "Marketing Consent Checkbox",
                  name: "marketingConsent",
                  register: u,
                  variant: "tick",
                  children: I.checkboxText,
                }),
              }),
              (0, r.jsx)(p.Text, {
                textStyle: "function.caption.small",
                color: "primary.black.40",
                paddingLeft: 8,
                children: I.legalFootnoteFull,
              }),
            ],
          }),
        });
      };
      var _ = a(22387);
      let R = "Please enter a valid first name",
        L = "Please enter a valid last name",
        T = (e) => {
          let {
              formData: t,
              buttonLayout: a,
              onSubmit: i,
              title: n = (0, r.jsx)(p.Text, {
                textStyle: "heading.h5.bold",
                children: "Enter your name",
              }),
              statisticsIncentive: s,
            } = e,
            { firstName: l, lastName: o } = t,
            d = (0, N.V)(a),
            {
              register: c,
              handleSubmit: u,
              formState: { errors: m },
            } = (0, v.mN)({
              mode: "onBlur",
              criteriaMode: "all",
              values: { firstName: l, lastName: o },
            });
          return (0, r.jsx)(f.S, {
            title: n,
            button: (0, r.jsx)(d, {
              children: (0, r.jsx)(w.$, {
                isDisabled: !!Object.keys(m).length,
                variant: "primary",
                fullWidth: !0,
                type: "submit",
                onClick: u(i),
                "aria-label": "Next",
                "data-testid": "Next",
                children: "Next",
              }),
            }),
            children: (0, r.jsxs)(_.VStack, {
              gap: 6,
              children: [
                (0, r.jsxs)(x.Flex, {
                  direction: "column",
                  gap: 4,
                  children: [
                    (0, r.jsx)(E.G, {
                      "data-testid": "first name - ".concat(R),
                      isInvalid: (0, A.ku)("firstName", m),
                      errorMessage: R,
                      errorVariant: "pill",
                      children: (0, r.jsx)(S.p, {
                        label: "First name",
                        name: "firstName",
                        variant: "pill",
                        height: 7,
                        type: "text",
                        placeholder: "eg. Sasha",
                        ariaLabel: "First name",
                        dataTestId: "First name",
                        register: c,
                        rules: { required: !0 },
                        autoComplete: "given-name",
                      }),
                    }),
                    (0, r.jsx)(E.G, {
                      "data-testid": "last name - ".concat(L),
                      isInvalid: (0, A.ku)("lastName", m),
                      errorMessage: L,
                      errorVariant: "pill",
                      children: (0, r.jsx)(S.p, {
                        label: "Last name",
                        name: "lastName",
                        variant: "pill",
                        height: 7,
                        type: "text",
                        placeholder: "e.g Smith",
                        ariaLabel: "Last name",
                        dataTestId: "Last name",
                        register: c,
                        rules: { required: !0 },
                        autoComplete: "family-name",
                      }),
                    }),
                  ],
                }),
                s,
              ],
            }),
          });
        };
      var P = a(4306),
        k = a(23163),
        O = a(17585),
        D = a(20353);
      let M = (e) => {
        let { formData: t, loading: a, buttonLayout: i, onSubmit: n } = e,
          { password: s, passwordConfirm: l } = t,
          o = (0, N.V)(i),
          {
            register: d,
            handleSubmit: c,
            formState: { errors: u },
            watch: m,
          } = (0, v.mN)({
            mode: "onBlur",
            criteriaMode: "all",
            values: { password: s, passwordConfirm: l },
          });
        return (0, r.jsx)(f.S, {
          title: (0, r.jsx)(p.Text, {
            textStyle: "heading.h5.bold",
            children: "Create your password",
          }),
          button: (0, r.jsxs)(P.Box, {
            children: [
              (0, r.jsxs)(p.Text, {
                "aria-label":
                  "By creating an account you agree to Noli's terms of policy",
                "data-testid":
                  "By creating an account you agree to Noli's terms of policy",
                textStyle: "function.caption.small",
                color: "primary.warmGrey.40",
                align: "center",
                children: [
                  "By creating your account you agree to Noli's\xa0",
                  (0, r.jsx)(g.Link, {
                    href: "/terms-of-use",
                    isExternal: !0,
                    "aria-label": "Terms of Use hyperlink",
                    "data-testid": "Terms of Use hyperlink",
                    variant: "tertiary",
                    verticalAlign: "baseline",
                    textStyle: "function.caption.small",
                    textDecoration: "underline",
                    color: "primary.warmGrey.40",
                    children: "Terms of Use",
                  }),
                  ". For more information on how Noli uses your personal data, please see our\xa0",
                  (0, r.jsx)(g.Link, {
                    href: "/privacy-policy",
                    isExternal: !0,
                    "aria-label": "Privacy Policy hyperlink",
                    "data-testid": "Privacy Policy hyperlink",
                    variant: "tertiary",
                    verticalAlign: "baseline",
                    textStyle: "function.caption.small",
                    textDecoration: "underline",
                    color: "primary.warmGrey.40",
                    children: "Privacy Policy",
                  }),
                ],
              }),
              (0, r.jsx)(o, {
                children: (0, r.jsx)(w.$, {
                  marginTop: 4,
                  isDisabled: !!Object.keys(u).length || a,
                  variant: "primary",
                  fullWidth: !0,
                  type: "submit",
                  onClick: c(n),
                  "data-testid": "Summit",
                  children: "Create account",
                }),
              }),
            ],
          }),
          children: (0, r.jsxs)(x.Flex, {
            direction: "column",
            gap: 4,
            children: [
              (0, r.jsx)(E.G, {
                errorVariant: "pill",
                children: (0, r.jsx)(O.y, {
                  label: "Type password",
                  name: "password",
                  placeholder: "Password",
                  register: d,
                  rules: { ...D.Zj, deps: ["passwordConfirm"] },
                  variant: "pill",
                  autoComplete: "new-password",
                  dataTestId: "Password Input",
                }),
              }),
              (0, r.jsx)(E.G, {
                errorVariant: "pill",
                children: (0, r.jsx)(O.y, {
                  label: "Confirm password",
                  name: "passwordConfirm",
                  placeholder: "Password",
                  ariaLabel: "Confirm Password",
                  dataTestId: "Confirm Password",
                  register: d,
                  rules: {
                    ...D.Zj,
                    deps: ["password"],
                    validate: (e) => m("password") === e,
                  },
                  variant: "pill",
                  autoComplete: "new-password",
                }),
              }),
              (0, r.jsx)(x.Flex, {
                direction: "column",
                children: (0, r.jsx)(k.I, { errors: u }),
              }),
            ],
          }),
        });
      };
      var B = (function (e) {
          return (
            (e.IDENTITY = "IDENTITY"),
            (e.EMAIL = "EMAIL"),
            (e.PASSWORD = "PASSWORD"),
            e
          );
        })(B || {}),
        U = (function (e) {
          return (
            (e.IDENTITY = "Sign Up Name Viewed"),
            (e.EMAIL = "Sign Up Email Viewed"),
            (e.PASSWORD = "Sign Up Password Viewed"),
            (e.UNKNOWN = "unknown"),
            e
          );
        })(U || {});
      let F = (e) => {
          switch (e) {
            case "EMAIL":
              return "Sign Up Email Viewed";
            case "PASSWORD":
              return "Sign Up Password Viewed";
            case "IDENTITY":
              return "Sign Up Name Viewed";
            default:
              return "unknown";
          }
        },
        G = (e) => {
          let {
              loading: t,
              buttonLayout: a,
              onAccountCreated: u,
              onError: m,
              identityTitle: p,
              statisticsIncentive: g,
            } = e,
            { cart: x, isCartLoading: y } = (0, o.B_)(),
            [v, w] = (0, i.useState)("IDENTITY"),
            [C, E] = (0, i.useState)({}),
            [f, S] = (0, i.useState)(!1),
            [b, N] = (0, i.useState)(!1),
            { mutate: j, isPending: A } = h(),
            { postMarketingConsent: _ } = (0, c.Y)(),
            R = (0, d.z)(),
            { sendAnalyticsEvent: L } = (0, l.s)();
          (0, i.useEffect)(() => {
            if (!y) {
              let e =
                (null == x ? void 0 : x.items) && x.items.length > 0
                  ? null == x
                    ? void 0
                    : x.id
                  : void 0;
              L(n.m3.pageViewedEnhanced.bind(n.m3), s.s.PAGE_VIEW_ENHANCED, {
                page_category: F(v),
                cart_id: e,
              });
            }
          }, [v, y]);
          let P = async (e) => {
              let {
                firstName: t,
                lastName: a,
                email: r,
                password: i,
                marketingConsent: l,
              } = e;
              j(
                {
                  firstName: t,
                  lastName: a,
                  email: r,
                  password: i,
                  marketingConsent: l,
                  marketingConsentStatement: ""
                    .concat(R.checkboxText, " ")
                    .concat(R.legalFootnoteFull),
                },
                {
                  onError: (e) => {
                    var t, a, r, i;
                    (null === (a = e.response) || void 0 === a
                      ? void 0
                      : null === (t = a.data) || void 0 === t
                        ? void 0
                        : t.error.message) ===
                    "There is already an existing customer with the provided email."
                      ? (N(!0), w("EMAIL"))
                      : (null === (i = e.response) || void 0 === i
                            ? void 0
                            : null === (r = i.data) || void 0 === r
                              ? void 0
                              : r.error.statusCode) === 403
                        ? S(!0)
                        : null == m || m(e);
                  },
                  onSuccess: (e) => {
                    let { customer: t } = e;
                    if (!t)
                      return null == m
                        ? void 0
                        : m(Error("Customer not found"));
                    l &&
                      (_({
                        email: t.email,
                        consent: ""
                          .concat(R.checkboxText, " ")
                          .concat(R.legalFootnoteFull),
                        firstName: t.firstName,
                        lastName: t.lastName,
                        ctCustomerId: t.id,
                      }),
                      L(
                        n.m3.marketingConsent.bind(n.m3),
                        s.s.MARKETING_CONSENT,
                        {
                          consent_value: "OptIn",
                          click_location: "account creation",
                        },
                      )),
                      u(t, i);
                  },
                },
              );
            },
            k = (e) => {
              switch (v) {
                case "EMAIL":
                  return w("PASSWORD");
                case "PASSWORD":
                  return P(e);
                default:
                  return w("EMAIL");
              }
            },
            O = (e) => {
              let t = { ...C, ...e };
              E(t), k(t);
            };
          return (() => {
            switch (v) {
              case "EMAIL":
                return (0, r.jsx)(I, {
                  formData: C,
                  emailForbidden: f,
                  emailExists: b,
                  buttonLayout: a,
                  onSubmit: O,
                });
              case "PASSWORD":
                return (0, r.jsx)(M, {
                  formData: C,
                  loading: A || !!t,
                  buttonLayout: a,
                  onSubmit: O,
                });
              default:
                return (0, r.jsx)(T, {
                  formData: C,
                  buttonLayout: a,
                  onSubmit: O,
                  title: p,
                  statisticsIncentive: g,
                });
            }
          })();
        };
    },
    48309: (e, t, a) => {
      a.d(t, { V: () => i });
      let r = (e) => {
          let { children: t } = e;
          return t;
        },
        i = (e) => (null != e ? e : r);
    },
    53436: (e, t, a) => {
      a.d(t, { S: () => s });
      var r = a(94799),
        i = a(56406),
        n = a(39693);
      let s = (e) => {
        let {
            name: t,
            ariaLabel: a,
            dataTestId: s,
            register: l,
            rules: o,
            children: d,
            isDisabled: c = !1,
            onChange: u,
            variant: m,
            isChecked: h,
          } = e,
          p = null == l ? void 0 : l(t, o);
        return (0, r.jsx)(i.Checkbox, {
          name: t,
          icon: (0, r.jsx)(n.CheckIcon, { width: 6, height: 6 }),
          "aria-label": a,
          "data-testid": s,
          ...p,
          isDisabled: c,
          onChange: (e) => {
            null == p || p.onChange(e), null == u || u(e);
          },
          variant: m,
          isChecked: h,
          children: d,
        });
      };
    },
    54885: (e, t, a) => {
      a.d(t, { O: () => N });
      var r = a(94799),
        i = a(89136),
        n = a(31634),
        s = a(4306),
        l = a(16774),
        o = a(11425),
        d = a(75093),
        c = a(27566),
        u = a(16581),
        m = a(38236),
        h = a(93339),
        p = a(36008),
        g = a.n(p),
        x = a(34023),
        y = a(19682),
        v = a(81352),
        w = a(43968),
        C = a(3584),
        E = a(86149),
        f = a(39693),
        S = a(87959),
        b = (function (e) {
          return (e.CREATE_ACCOUNT = "Sign up"), (e.LOGIN = "Log in"), e;
        })(b || {});
      let N = (e) => {
        let {
            isOpen: t,
            onClose: a,
            onAuthenticated: p,
            showLogin: b = !1,
            identityTitle: N = (0, r.jsx)(i.Text, {
              textStyle: "heading.h5.bold",
              children: "Enter your name",
            }),
            statisticsIncentive: j,
          } = e,
          { authenticate: A, loading: I } = (0, E.S)(E.E.CURRENT_PAGE),
          { cart: _ } = (0, v.B_)(),
          [R, L] = (0, x.useState)(b ? "Log in" : "Sign up"),
          { trackCreateAccount: T } = (0, y.k)();
        (0, x.useEffect)(() => {
          L(b ? "Log in" : "Sign up");
        }, [b]);
        let P = async (e, t) => {
            let { id: a, email: r } = e;
            a && T(a),
              await A(r, t, null == _ ? void 0 : _.id).then(() => {
                p();
              });
          },
          k = (e) => {
            let { children: t } = e;
            return (0, r.jsxs)(n.Flex, {
              gap: 2,
              alignItems: "flex-end",
              children: [
                t,
                (0, r.jsx)(s.Box, {
                  children: (0, r.jsx)(f.CloseCircleIconButton, {
                    crossSize: 6,
                    onClose: () => (null == a ? void 0 : a()),
                    size: 16,
                  }),
                }),
              ],
            });
          };
        return (0, r.jsxs)(l.Modal, {
          variant: "authentication",
          isOpen: t,
          isCentered: !0,
          onClose: () => (null == a ? void 0 : a()),
          children: [
            (0, r.jsx)(o.ModalOverlay, {}),
            (0, r.jsxs)(d.ModalContent, {
              overflow: "auto",
              children: [
                (0, r.jsx)(c.ModalHeader, {
                  children: (0, r.jsx)(S.f, {
                    ariaLabel: "Toggle to ".concat(
                      "Log in" === R ? "Create Account" : "Login",
                    ),
                    "data-testid": "Toggle to ".concat(
                      "Log in" === R ? "Create Account" : "Login",
                    ),
                    variant: "darkGrey",
                    label1: "Log in",
                    label2: "Sign up",
                    selected: R,
                    onToggle: (e) => L(null != e ? e : "Sign up"),
                  }),
                }),
                (0, r.jsx)(u.ModalBody, {
                  children:
                    "Log in" === R
                      ? (0, r.jsx)(C.Q, {
                          title: (0, r.jsx)(i.Text, {
                            textStyle: "heading.h5.bold",
                            children: "Welcome to Noli",
                          }),
                          contentAfterForm: (0, r.jsxs)(n.Flex, {
                            flexDirection: "column",
                            gap: 4,
                            children: [
                              (0, r.jsx)(m.Link, {
                                "aria-label": "Forgotten Password Link",
                                "data-testid": "Forgotten Password Link",
                                as: g(),
                                href: "/forgotten-password",
                                textStyle: "body",
                                textDecorationLine: "underline",
                                target: "_blank",
                                children: "Forgotten password?",
                              }),
                              (0, r.jsxs)(n.Flex, {
                                direction: "row",
                                children: [
                                  (0, r.jsx)(i.Text, {
                                    textStyle: "body",
                                    textAlign: "left",
                                    alignSelf: "stretch",
                                    children: "Don't have an account?",
                                  }),
                                  (0, r.jsx)(h.Button, {
                                    "aria-label": "Sign Up",
                                    "data-testid": "Sign Up",
                                    variant: "link",
                                    color: "inherit",
                                    fontWeight: "inherit",
                                    textStyle: "body",
                                    marginLeft: 1,
                                    onClick: () => L("Sign up"),
                                    children: "Sign up",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          buttonLayout: k,
                          loginRedirect: E.E.CURRENT_PAGE,
                          onLoggedIn: p,
                        })
                      : (0, r.jsx)(w.G, {
                          onAccountCreated: P,
                          buttonLayout: k,
                          loading: I,
                          identityTitle: N,
                          statisticsIncentive: j,
                        }),
                }),
              ],
            }),
          ],
        });
      };
    },
    57865: (e, t, a) => {
      a.d(t, { z: () => n });
      var r = a(94799),
        i = a(39906);
      let n = (e) => {
        let { ...t } = e,
          a =
            "flatEdges" === t.variant && 100 === t.value
              ? "flatEdgesComplete"
              : t.variant;
        return (0, r.jsx)(i.Progress, {
          ...t,
          "aria-label": "Progress bar",
          "aria-description": "current value is ".concat(t.value, "%"),
          variant: a,
        });
      };
    },
    86149: (e, t, a) => {
      a.d(t, { E: () => x, S: () => y });
      var r = a(27374),
        i = a(27357),
        n = a(34023),
        s = a(92616),
        l = a(17422),
        o = a(57184),
        d = a(70769),
        c = a(93277),
        u = a(81352),
        m = a(67242),
        h = a(98798),
        p = a(33442),
        g = a(24319),
        x = (function (e) {
          return (
            (e.CURRENT_PAGE = "CURRENT_PAGE"),
            (e.NO_REDIRECT = "NO_REDIRECT"),
            e
          );
        })({});
      let y = (e) => {
        var t;
        let a = (0, i.useRouter)(),
          x = (0, c.iA)(),
          y = (0, u.Ku)(),
          [v, w] = (0, n.useState)(!1),
          C =
            null === (t = (0, i.useSearchParams)()) || void 0 === t
              ? void 0
              : t.get("redirect"),
          E = (0, i.usePathname)(),
          { sendAnalyticsEvent: f } = (0, o.s)(),
          { data: S } = (0, g.a)(),
          b = async () => {
            var t, i, n, s;
            let l = await (0, r.getSession)();
            "NO_REDIRECT" !== e &&
              (C
                ? a.push(C)
                : ((null == l
                      ? void 0
                      : null === (t = l.user) || void 0 === t
                        ? void 0
                        : t.isSkincareDecoded) ||
                      (null == l
                        ? void 0
                        : null === (i = l.user) || void 0 === i
                          ? void 0
                          : i.isHaircareDecoded)) &&
                    "/" === E
                  ? a.push("/my-shop")
                  : "CURRENT_PAGE" === e
                    ? a.refresh()
                    : (null == l
                          ? void 0
                          : null === (n = l.user) || void 0 === n
                            ? void 0
                            : n.isSkincareDecoded) ||
                        (null == l
                          ? void 0
                          : null === (s = l.user) || void 0 === s
                            ? void 0
                            : s.isHaircareDecoded)
                      ? a.push("/")
                      : a.push(p.q));
          };
        return {
          authenticate: async (e, t, a) => (
            w(!0),
            await (0, r.signIn)("signin", {
              email: e,
              password: t,
              ...(a ? { cartId: a } : {}),
              ...((null == S ? void 0 : S.user_id)
                ? { anonymousUserId: null == S ? void 0 : S.user_id }
                : {}),
              redirect: !1,
            })
              .then(async (e) => {
                if (
                  (f(s.m3.signedIn.bind(s.m3), l.s.SIGNED_IN, {}),
                  null == e ? void 0 : e.ok)
                )
                  return y({ type: u.d1.Reset }), b();
                {
                  let t = null == e ? void 0 : e.error;
                  if (null == t ? void 0 : t.startsWith("json")) {
                    let e;
                    try {
                      e = JSON.parse(t.substring(4));
                    } catch (e) {
                      (0, h.A)(h.$.WARN, "Error parsing error", { error: e });
                    }
                    if (e.errorCode && e.errorCode === d.lR.BLOCKED)
                      throw new m.t9(e.retryAfter, e.message);
                  }
                  if (t === d.lR.BAD_CREDENTIALS)
                    throw Error(d.lR.BAD_CREDENTIALS);
                  if (t === d.lR.NOT_VERIFIED_ERROR)
                    throw Error(d.lR.NOT_VERIFIED_ERROR);
                  x({
                    type: c.P7.Add,
                    alertKey: "authentication-error",
                    message:
                      "Error on log in, something has gone wrong. Please try again !",
                    variant: c.iC.Error,
                  });
                }
              })
              .finally(() => {
                w(!1);
              })
          ),
          loading: v,
        };
      };
    },
    87959: (e, t, a) => {
      a.d(t, { f: () => g });
      var r = a(94799),
        i = a(13331),
        n = a(98814),
        s = a(4306),
        l = a(1076),
        o = a(8822),
        d = a(31634),
        c = a(89136),
        u = a(65329),
        m = a(34916),
        h = a(34023);
      let p = (0, i.chakra)(u.P.div, { shouldForwardProp: m.S }),
        g = (e) => {
          let {
              selected: t,
              ariaLabel: a,
              dataTestId: i,
              size: m = "lg",
              width: g,
              withNudgeAnimation: x,
              label1: y,
              label2: v,
              onToggle: w,
              variant: C = "basic",
            } = e,
            E = (0, n.useMultiStyleConfig)("ToggleButton", {
              variant: C,
              size: m,
            }),
            [f, S] = (0, h.useState)(null != t ? t : y);
          (0, h.useEffect)(() => {
            S(t);
          }, [t]);
          let b = () => {
              let e = f === y ? v : y;
              S(e), null == w || w(e);
            },
            N = (e, t) => (f === y ? e : t);
          return (0, r.jsx)(s.Box, {
            __css: E.switch,
            onClick: b,
            onKeyDown: (e) => " " === e.key && b(),
            "aria-label": a,
            "data-testid": i,
            tabIndex: 0,
            width: g,
            children: (0, r.jsxs)(l.Grid, {
              templateColumns: "1fr",
              children: [
                (0, r.jsx)(o.GridItem, {
                  zIndex: 0,
                  gridColumnStart: 1,
                  gridRowStart: 1,
                  children: (0, r.jsx)(d.Flex, {
                    as: u.P.div,
                    layout: !0,
                    layoutRoot: !0,
                    justifyContent: N("flex-start", "flex-end"),
                    children: (0, r.jsx)(p, {
                      __css: E.motionBox,
                      ...(x &&
                        (() => {
                          let e = f === y ? 7.5 : -7.5;
                          return {
                            animate: {
                              x: [0, e, 0, e, 0],
                              transition: { delay: 3, duration: 1.2 },
                            },
                          };
                        })()),
                      layout: !0,
                      backgroundColor:
                        "basic" === C ? "primary.black.10" : "primary.white",
                      "aria-label": "".concat(a, " switch"),
                      "data-testid": "".concat(i, " switch"),
                    }),
                  }),
                }),
                (0, r.jsx)(o.GridItem, {
                  zIndex: 1,
                  gridColumnStart: 1,
                  gridRowStart: 1,
                  children: (0, r.jsxs)(s.Box, {
                    __css: E.switchLabels,
                    children: [
                      (0, r.jsx)(c.Text, {
                        color:
                          "basic" === C
                            ? N("primary.white", "primary.black.10")
                            : "primary.black.10",
                        flex: 1,
                        textAlign: "center",
                        children: y,
                      }),
                      (0, r.jsx)(c.Text, {
                        color:
                          "basic" === C
                            ? N("primary.black.10", "primary.white")
                            : "primary.black.10",
                        flex: 1,
                        textAlign: "center",
                        children: v,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        };
    },
  },
]);
