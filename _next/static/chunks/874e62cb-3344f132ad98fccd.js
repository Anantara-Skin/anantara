"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [486],
  {
    86116: (e, s, r) => {
      function t(e, s, r) {
        var t;
        return (
          (s =
            "symbol" ==
            typeof (t = (function (e, s) {
              if ("object" != typeof e || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var t = r.call(e, s || "default");
                if ("object" != typeof t) return t;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === s ? String : Number)(e);
            })(s, "string"))
              ? t
              : t + "") in e
            ? Object.defineProperty(e, s, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = r),
          e
        );
      }
      function a(e) {
        return null != e;
      }
      r.d(s, { Yml: () => tE });
      class i {
        constructor(e, s) {
          (this.requestExecutor = s),
            t(this, "request", void 0),
            (this.request = {
              ...e,
              uri: (function (e) {
                let s = e.pathVariables;
                var r = e.uriTemplate;
                for (let e in s) {
                  let t = encodeURIComponent(`${s[e]}`);
                  r = r.replace(`{${e}}`, `${t}`);
                }
                let t = (function (e) {
                  let s = (function (e) {
                    let s = new URLSearchParams(e);
                    for (let [r, t] of Object.entries(e))
                      Array.isArray(t) &&
                        (s.delete(r),
                        t.filter(Boolean).forEach((e) => s.append(r, e)));
                    return s.toString();
                  })(
                    Object.keys(e).reduce((s, r) => {
                      let t = e[r];
                      if (Array.isArray(t)) {
                        let e = t.filter(a);
                        return e.length ? { ...s, [r]: e } : s;
                      }
                      return a(t) ? { ...s, [r]: t } : s;
                    }, {}),
                  );
                  return "" === s ? "" : `?${s}`;
                })(e.queryParams || {});
                return `${r}${t}`;
              })(e),
            });
        }
        clientRequest() {
          return this.request;
        }
        execute() {
          return this.requestExecutor(this.request);
        }
      }
      class h {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/active-cart",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/active-cart",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class u {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/active-cart",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/active-cart",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class g {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/api-clients/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/api-clients/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/api-clients/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class p {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new g({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/api-clients",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/api-clients",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/api-clients",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class o {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/business-units/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/business-units/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/business-units/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class n {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/business-units/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/business-units/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/business-units/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class c {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new n({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new o({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/business-units",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/business-units",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/business-units",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class d {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-flows/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-flows/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class y {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new d({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-flows",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class b {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class q {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class m {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new b({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new q({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/approval-rules",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class l {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/replicate",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class U {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class A {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class T {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new A({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new U({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        replicate() {
          return new l({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/carts",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class x {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/quotes",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class R {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class w {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/order-number={orderNumber}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/order-number={orderNumber}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/order-number={orderNumber}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class K {
        constructor(e) {
          this.args = e;
        }
        orderQuote() {
          return new x({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withOrderNumber(e) {
          return new w({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new R({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class j {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class P {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class V {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new P({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new j({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class E {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class k {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class D {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new k({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new E({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quotes",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class I {
        constructor(e) {
          this.args = e;
        }
        approvalRules() {
          return new m({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        approvalFlows() {
          return new y({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        carts() {
          return new T({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        orders() {
          return new K({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        quotes() {
          return new D({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        quoteRequests() {
          return new V({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class C {
        constructor(e) {
          this.args = e;
        }
        businessUnits() {
          return new c({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        inBusinessUnitKeyWithBusinessUnitKeyValue(e) {
          return new I({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class O {
        constructor(e) {
          this.args = e;
        }
        withAssociateIdValue(e) {
          return new C({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class S {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/associate-roles/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/associate-roles/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/associate-roles/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/associate-roles/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class G {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/associate-roles/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/associate-roles/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/associate-roles/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/associate-roles/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class H {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new G({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new S({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/associate-roles",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/associate-roles",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/associate-roles",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class L {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/attribute-groups/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/attribute-groups/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/attribute-groups/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/attribute-groups/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class v {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/attribute-groups/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/attribute-groups/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/attribute-groups/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/attribute-groups/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class f {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new v({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new L({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/attribute-groups",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/attribute-groups",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/attribute-groups",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class N {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/business-units/{businessUnitId}/associates/{associateId}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class z {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/business-units/key={key}/associates/{associateId}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class W {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/business-units/search/indexing-status",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class B {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/business-units/search",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/business-units/search",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class Q {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/business-units/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/business-units/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/business-units/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/business-units/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class $ {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/business-units/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/business-units/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/business-units/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/business-units/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class _ {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new $({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new Q({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        keyWithKeyValueAssociatesWithAssociateIdValue(e) {
          return new z({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withBusinessUnitIdValueAssociatesWithAssociateIdValue(e) {
          return new N({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        search() {
          return new B({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        searchIndexingStatus() {
          return new W({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/business-units",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/business-units",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/business-units",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class M {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/cart-discounts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/cart-discounts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/cart-discounts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/cart-discounts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class F {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/cart-discounts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/cart-discounts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/cart-discounts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/cart-discounts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Y {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new F({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new M({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/cart-discounts",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/cart-discounts",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/cart-discounts",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class J {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/carts/replicate",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class X {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class Z {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/carts/customer-id={customerId}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/carts/customer-id={customerId}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class ee {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/carts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/carts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/carts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/carts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class es {
        constructor(e) {
          this.args = e;
        }
        replicate() {
          return new J({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withCustomerId(e) {
          return new Z({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new ee({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new X({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/carts",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/carts",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/carts",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class er {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/categories/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/categories/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/categories/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/categories/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class et {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/categories/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/categories/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/categories/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/categories/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ea {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new et({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new er({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/categories",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/categories",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/categories",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ei {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/channels/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/channels/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/channels/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/channels/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class eh {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/channels/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/channels/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/channels/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/channels/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class eu {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new ei({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new eh({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/channels",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/channels",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/channels",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class eg {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/custom-objects/{container}/{key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/custom-objects/{container}/{key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ep {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/custom-objects/{container}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class eo {
        constructor(e) {
          this.args = e;
        }
        withContainerAndKey(e) {
          return new eg({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withContainer(e) {
          return new ep({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/custom-objects",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/custom-objects",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/custom-objects",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class en {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/customer-groups/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/customer-groups/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/customer-groups/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/customer-groups/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ec {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/customer-groups/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/customer-groups/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/customer-groups/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/customer-groups/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ed {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new ec({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new en({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/customer-groups",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/customer-groups",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/customer-groups",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ey {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/customers/email/confirm",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class eb {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/customers/email-token",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class eq {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/customers/search/indexing-status",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class em {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/customers/password-token",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class el {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/customers/password",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class eU {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/customers/password/reset",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class eA {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/customers/search",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/customers/search",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class eT {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/customers/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/customers/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/customers/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/customers/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ex {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/customers/email-token={emailToken}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class eR {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/customers/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/customers/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/customers/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/customers/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ew {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/customers/password-token={passwordToken}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class eK {
        constructor(e) {
          this.args = e;
        }
        withPasswordToken(e) {
          return new ew({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withEmailToken(e) {
          return new ex({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        emailToken() {
          return new eb({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        emailConfirm() {
          return new ey({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        password() {
          return new el({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        passwordReset() {
          return new eU({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        passwordToken() {
          return new em({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new eR({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new eT({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        search() {
          return new eA({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        searchIndexingStatus() {
          return new eq({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/customers",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/customers",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/customers",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ej {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/discount-codes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/discount-codes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/discount-codes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/discount-codes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class eP {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/discount-codes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/discount-codes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/discount-codes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/discount-codes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class eV {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new ej({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new eP({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/discount-codes",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/discount-codes",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/discount-codes",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class eE {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/extensions/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/extensions/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/extensions/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/extensions/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ek {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/extensions/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/extensions/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/extensions/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/extensions/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class eD {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new ek({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new eE({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/extensions",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/extensions",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/extensions",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class eI {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/graphql",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class eC {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-business-unit/key={businessUnitKey}/me/customers",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class eO {
        constructor(e) {
          this.args = e;
        }
        customers() {
          return new eC({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class eS {
        constructor(e) {
          this.args = e;
        }
        me() {
          return new eO({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class eG {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/business-units/{businessUnitId}/associates/{associateId}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class eH {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/business-units/key={key}/associates/{associateId}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class eL {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/business-units/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/business-units/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/business-units/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/business-units/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ev {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/business-units/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/business-units/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/business-units/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/business-units/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ef {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new ev({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new eL({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        keyWithKeyValueAssociatesWithAssociateIdValue(e) {
          return new eH({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withBusinessUnitIdValueAssociatesWithAssociateIdValue(e) {
          return new eG({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/business-units",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/business-units",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/business-units",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class eN {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/cart-discounts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/cart-discounts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/cart-discounts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/cart-discounts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ez {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/cart-discounts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/cart-discounts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/cart-discounts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/cart-discounts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class eW {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new ez({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new eN({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/cart-discounts",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/cart-discounts",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/cart-discounts",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class eB {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/carts/replicate",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class eQ {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class e$ {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/carts/customer-id={customerId}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/carts/customer-id={customerId}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class e_ {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/carts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/carts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/carts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/carts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class eM {
        constructor(e) {
          this.args = e;
        }
        withCustomerId(e) {
          return new e$({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new e_({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        replicate() {
          return new eB({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new eQ({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/carts",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/carts",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/carts",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class eF {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/customers/email/confirm",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class eY {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/customers/email-token",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class eJ {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/customers/password-token",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class eX {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/customers/password",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class eZ {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/customers/password/reset",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class e0 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/customers/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/customers/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/customers/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/customers/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class e6 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/customers/email-token={emailToken}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class e1 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/customers/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/customers/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/customers/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/customers/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class e8 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/customers/password-token={passwordToken}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class e4 {
        constructor(e) {
          this.args = e;
        }
        withPasswordToken(e) {
          return new e8({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withEmailToken(e) {
          return new e6({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        emailToken() {
          return new eY({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        emailConfirm() {
          return new eF({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        password() {
          return new eX({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        passwordReset() {
          return new eZ({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        passwordToken() {
          return new eJ({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new e1({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new e0({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/customers",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/customers",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/customers",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class e2 {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/login",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class e3 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class e5 {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new e3({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/me/carts",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/me/carts",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/me/carts",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class e7 {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/email/confirm",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class e9 {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/me/login",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class se {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/orders/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/orders/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class ss {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new se({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/me/orders",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/me/orders",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/me/orders",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sr {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/password/reset",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class st {
        constructor(e) {
          this.args = e;
        }
        reset() {
          return new sr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/me/password",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sa {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/shopping-lists/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/shopping-lists/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/shopping-lists/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/shopping-lists/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class si {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/shopping-lists/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/shopping-lists/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/shopping-lists/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/shopping-lists/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sh {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new si({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new sa({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/shopping-lists",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/shopping-lists",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/me/shopping-lists",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class su {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/me/signup",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sg {
        constructor(e) {
          this.args = e;
        }
        carts() {
          return new e5({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        orders() {
          return new ss({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        activeCart() {
          return new h({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        shoppingLists() {
          return new sh({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        emailConfirm() {
          return new e7({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        password() {
          return new st({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        signup() {
          return new su({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        login() {
          return new e9({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/me",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/me",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/me",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sp {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/orders/quotes",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class so {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/orders/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/orders/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/orders/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/orders/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sn {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/orders/order-number={orderNumber}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/orders/order-number={orderNumber}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/orders/order-number={orderNumber}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/orders/order-number={orderNumber}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sc {
        constructor(e) {
          this.args = e;
        }
        orderQuote() {
          return new sp({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withOrderNumber(e) {
          return new sn({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new so({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/orders",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/orders",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/orders",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sd {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/product-projections/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/product-projections/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class sy {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/product-projections/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/product-projections/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class sb {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new sy({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new sd({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class sq {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/product-selection-assignments",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sm {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/product-tailoring",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/product-tailoring",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sl {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring/images",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sU {
        constructor(e) {
          this.args = e;
        }
        images() {
          return new sl({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/products/{productID}/product-tailoring",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sA {
        constructor(e) {
          this.args = e;
        }
        productTailoring() {
          return new sU({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class sT {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring/images",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sx {
        constructor(e) {
          this.args = e;
        }
        images() {
          return new sT({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/products/key={productKey}/product-tailoring",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sR {
        constructor(e) {
          this.args = e;
        }
        productTailoring() {
          return new sx({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class sw {
        constructor(e) {
          this.args = e;
        }
        withProductId(e) {
          return new sA({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withProductKey(e) {
          return new sR({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class sK {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/quote-requests/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sj {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/quote-requests/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sP {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new sj({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new sK({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/quote-requests",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/quote-requests",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/quote-requests",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sV {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sE {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sk {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new sE({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new sV({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/quotes",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/quotes",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/in-store/key={storeKey}/quotes",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sD {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/shipping-methods/matching-cart",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/shipping-methods/matching-cart",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sI {
        constructor(e) {
          this.args = e;
        }
        matchingCart() {
          return new sD({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class sC {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/shopping-lists/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/shopping-lists/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/shopping-lists/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/shopping-lists/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sO {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/shopping-lists/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/shopping-lists/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/shopping-lists/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/shopping-lists/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sS {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new sO({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new sC({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/shopping-lists",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/shopping-lists",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/shopping-lists",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sG {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/staged-quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sH {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/staged-quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sL {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new sH({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new sG({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/staged-quotes",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/staged-quotes",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate:
                "/{projectKey}/in-store/key={storeKey}/staged-quotes",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sv {
        constructor(e) {
          this.args = e;
        }
        carts() {
          return new eM({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        orders() {
          return new sc({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        me() {
          return new sg({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        customers() {
          return new e4({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        login() {
          return new e2({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        shippingMethods() {
          return new sI({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        shoppingLists() {
          return new sS({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productProjections() {
          return new sb({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productSelectionAssignments() {
          return new sq({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        cartDiscounts() {
          return new eW({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productTailoring() {
          return new sm({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        products() {
          return new sw({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        quoteRequests() {
          return new sP({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        stagedQuotes() {
          return new sL({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        quotes() {
          return new sk({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        businessUnits() {
          return new ef({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
      }
      class sf {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/inventory/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/inventory/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/inventory/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/inventory/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sN {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/inventory/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/inventory/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/inventory/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/inventory/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sz {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new sf({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new sN({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/inventory",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/inventory",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/inventory",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sW {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/login",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sB {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/business-units/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/business-units/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/business-units/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sQ {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/business-units/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/business-units/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/business-units/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class s$ {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new sB({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new sQ({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/business-units",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/business-units",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/business-units",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class s_ {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/carts/replicate",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sM {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/me/carts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class sF {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new sM({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        replicate() {
          return new s_({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/carts",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/carts",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/carts",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sY {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/email/confirm",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sJ {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/login",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sX {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/orders/quotes",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class sZ {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/orders/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/orders/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class s0 {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new sZ({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        orderQuote() {
          return new sX({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/orders",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/orders",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/orders",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class s6 {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/password/reset",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class s1 {
        constructor(e) {
          this.args = e;
        }
        reset() {
          return new s6({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/password",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class s8 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/payments/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/payments/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/payments/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/me/payments/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class s4 {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new s8({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/payments",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/payments",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/payments",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class s2 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/quote-requests/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/quote-requests/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/quote-requests/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class s3 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/quote-requests/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/quote-requests/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/quote-requests/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class s5 {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new s2({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new s3({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/quote-requests",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/quote-requests",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/quote-requests",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class s7 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class s9 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class re {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new s7({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new s9({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/quotes",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/quotes",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rs {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/shopping-lists/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/shopping-lists/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/shopping-lists/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/me/shopping-lists/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rr {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/shopping-lists/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/shopping-lists/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/shopping-lists/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/me/shopping-lists/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rt {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new rs({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new rr({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me/shopping-lists",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/me/shopping-lists",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/shopping-lists",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ra {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me/signup",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ri {
        constructor(e) {
          this.args = e;
        }
        emailConfirm() {
          return new sY({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        password() {
          return new s1({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        signup() {
          return new ra({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        login() {
          return new sJ({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        activeCart() {
          return new u({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        businessUnits() {
          return new s$({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        carts() {
          return new sF({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        orders() {
          return new s0({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        payments() {
          return new s4({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        quoteRequests() {
          return new s5({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        quotes() {
          return new re({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        shoppingLists() {
          return new rt({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/me",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/me",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/me",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rh {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/messages/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/messages/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class ru {
        constructor(e) {
          this.args = e;
        }
        withId(e) {
          return new rh({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/messages",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/messages",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rg {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/orders/edits/{ID}/apply",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class rp {
        constructor(e) {
          this.args = e;
        }
        apply() {
          return new rg({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/orders/edits/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/orders/edits/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/orders/edits/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/orders/edits/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ro {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/orders/edits/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/orders/edits/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/orders/edits/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/orders/edits/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rn {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new ro({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new rp({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/orders/edits",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/orders/edits",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/orders/edits",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class rc {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/orders/import",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class rd {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/orders/quotes",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class ry {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/orders/search",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/orders/search",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class rb {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/orders/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/orders/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/orders/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/orders/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rq {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/orders/order-number={orderNumber}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/orders/order-number={orderNumber}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/orders/order-number={orderNumber}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/orders/order-number={orderNumber}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rm {
        constructor(e) {
          this.args = e;
        }
        importOrder() {
          return new rc({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        orderQuote() {
          return new rd({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withOrderNumber(e) {
          return new rq({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        edits() {
          return new rn({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new rb({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        search() {
          return new ry({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/orders",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/orders",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/orders",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class rl {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/payments/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/payments/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/payments/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/payments/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rU {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/payments/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/payments/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/payments/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/payments/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rA {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new rU({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new rl({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/payments",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/payments",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/payments",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class rT {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/product-discounts/matching",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class rx {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-discounts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/product-discounts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/product-discounts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/product-discounts/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rR {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-discounts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/product-discounts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/product-discounts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/product-discounts/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rw {
        constructor(e) {
          this.args = e;
        }
        matching() {
          return new rT({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new rR({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new rx({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-discounts",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/product-discounts",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/product-discounts",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class rK {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/product-projections/search",
              pathVariables: this.args.pathArgs,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                ...e?.headers,
              },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-projections/search",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rj {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-projections/suggest",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rP {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-projections/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/product-projections/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class rV {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-projections/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/product-projections/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class rE {
        constructor(e) {
          this.args = e;
        }
        search() {
          return new rK({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        suggest() {
          return new rj({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withKey(e) {
          return new rV({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new rP({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-projections",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/product-projections",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rk {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-selections/{ID}/products",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rD {
        constructor(e) {
          this.args = e;
        }
        products() {
          return new rk({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-selections/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/product-selections/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/product-selections/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/product-selections/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rI {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/product-selections/key={key}/products",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rC {
        constructor(e) {
          this.args = e;
        }
        products() {
          return new rI({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-selections/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/product-selections/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/product-selections/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/product-selections/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rO {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new rC({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new rD({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-selections",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/product-selections",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/product-selections",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class rS {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-tailoring/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/product-tailoring/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/product-tailoring/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rG {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-tailoring/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/product-tailoring/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/product-tailoring/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rH {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new rG({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new rS({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-tailoring",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/product-tailoring",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/product-tailoring",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class rL {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-types/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/product-types/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/product-types/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/product-types/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rv {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-types/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/product-types/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/product-types/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/product-types/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rf {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new rv({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new rL({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/product-types",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/product-types",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/product-types",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class rN {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/products/search",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class rz {
        constructor(e) {
          this.args = e;
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/products/{ID}/images",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class rW {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/products/{ID}/product-selections",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rB {
        constructor(e) {
          this.args = e;
        }
        images() {
          return new rz({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productSelections() {
          return new rW({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/products/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/products/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/products/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/products/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rQ {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/products/key={key}/product-selections",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class r$ {
        constructor(e) {
          this.args = e;
        }
        productSelections() {
          return new rQ({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/products/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/products/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/products/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/products/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class r_ {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new r$({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new rB({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        search() {
          return new rN({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/products",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/products",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/products",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class rM {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/quote-requests/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/quote-requests/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/quote-requests/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/quote-requests/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rF {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/quote-requests/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/quote-requests/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/quote-requests/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/quote-requests/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rY {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new rF({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new rM({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/quote-requests",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/quote-requests",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/quote-requests",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class rJ {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rX {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class rZ {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new rX({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new rJ({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/quotes",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/quotes",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/quotes",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class r0 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/reviews/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/reviews/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/reviews/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/reviews/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class r6 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/reviews/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/reviews/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/reviews/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/reviews/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class r1 {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new r6({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new r0({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/reviews",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/reviews",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/reviews",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class r8 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate:
                "/{projectKey}/shipping-methods/matching-cart-location",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate:
                "/{projectKey}/shipping-methods/matching-cart-location",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class r4 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/shipping-methods/matching-cart",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/shipping-methods/matching-cart",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class r2 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/shipping-methods/matching-location",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/shipping-methods/matching-location",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class r3 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/shipping-methods/matching-orderedit",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/shipping-methods/matching-orderedit",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class r5 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/shipping-methods/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/shipping-methods/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/shipping-methods/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/shipping-methods/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class r7 {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/shipping-methods/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/shipping-methods/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/shipping-methods/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/shipping-methods/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class r9 {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new r7({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        matchingCart() {
          return new r4({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        matchingCartLocation() {
          return new r8({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        matchingOrderedit() {
          return new r3({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        matchingLocation() {
          return new r2({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new r5({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/shipping-methods",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/shipping-methods",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/shipping-methods",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class te {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/shopping-lists/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/shopping-lists/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/shopping-lists/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/shopping-lists/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ts {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/shopping-lists/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/shopping-lists/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/shopping-lists/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/shopping-lists/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class tr {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new ts({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new te({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/shopping-lists",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/shopping-lists",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/shopping-lists",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class tt {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/staged-quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/staged-quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/staged-quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/staged-quotes/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ta {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/staged-quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/staged-quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/staged-quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/staged-quotes/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ti {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new ta({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new tt({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/staged-quotes",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/staged-quotes",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/staged-quotes",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class th {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/standalone-prices/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/standalone-prices/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/standalone-prices/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/standalone-prices/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class tu {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/standalone-prices/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/standalone-prices/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/standalone-prices/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/standalone-prices/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class tg {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new tu({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new th({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/standalone-prices",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/standalone-prices",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/standalone-prices",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class tp {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/states/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/states/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/states/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/states/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class to {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/states/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/states/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/states/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/states/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class tn {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new to({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new tp({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/states",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/states",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/states",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class tc {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/stores/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/stores/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/stores/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/stores/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class td {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/stores/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/stores/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/stores/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/stores/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class ty {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new td({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new tc({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/stores",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/stores",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/stores",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class tb {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/subscriptions/{ID}/health",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
      }
      class tq {
        constructor(e) {
          this.args = e;
        }
        withIdHealth() {
          return new tb({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/subscriptions/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/subscriptions/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/subscriptions/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/subscriptions/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class tm {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/subscriptions/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/subscriptions/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/subscriptions/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/subscriptions/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class tl {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new tm({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new tq({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/subscriptions",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/subscriptions",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/subscriptions",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class tU {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/tax-categories/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/tax-categories/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/tax-categories/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/tax-categories/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class tA {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/tax-categories/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/tax-categories/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/tax-categories/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/tax-categories/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class tT {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new tA({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new tU({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/tax-categories",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/tax-categories",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/tax-categories",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class tx {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/types/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/types/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/types/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/types/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class tR {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/types/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/types/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/types/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/types/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class tw {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new tR({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new tx({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/types",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/types",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/types",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class tK {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/zones/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/zones/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/zones/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/zones/{ID}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class tj {
        constructor(e) {
          this.args = e;
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/zones/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/zones/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/zones/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
        delete(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "DELETE",
              uriTemplate: "/{projectKey}/zones/key={key}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
      }
      class tP {
        constructor(e) {
          this.args = e;
        }
        withKey(e) {
          return new tj({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        withId(e) {
          return new tK({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}/zones",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}/zones",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
              queryParams: e?.queryArgs,
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}/zones",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              queryParams: e?.queryArgs,
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      class tV {
        constructor(e) {
          this.args = e;
        }
        asAssociate() {
          return new O({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        associateRoles() {
          return new H({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        businessUnits() {
          return new _({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        categories() {
          return new ea({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        carts() {
          return new es({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        cartDiscounts() {
          return new Y({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        channels() {
          return new eu({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        customers() {
          return new eK({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        customerGroups() {
          return new ed({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        customObjects() {
          return new eo({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        discountCodes() {
          return new eV({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        graphql() {
          return new eI({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        inventory() {
          return new sz({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        login() {
          return new sW({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        messages() {
          return new ru({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        orders() {
          return new rm({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        payments() {
          return new rA({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        products() {
          return new r_({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productDiscounts() {
          return new rw({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productProjections() {
          return new rE({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productSelections() {
          return new rO({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productTailoring() {
          return new rH({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        productTypes() {
          return new rf({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        quotes() {
          return new rZ({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        quoteRequests() {
          return new rY({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        stagedQuotes() {
          return new ti({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        reviews() {
          return new r1({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        shippingMethods() {
          return new r9({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        shoppingLists() {
          return new tr({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        states() {
          return new tn({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        subscriptions() {
          return new tl({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        taxCategories() {
          return new tT({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        types() {
          return new tw({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        zones() {
          return new tP({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        me() {
          return new ri({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        extensions() {
          return new eD({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        apiClients() {
          return new p({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        stores() {
          return new ty({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        inStoreKeyWithStoreKeyValue(e) {
          return new sv({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        standalonePrices() {
          return new tg({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        inBusinessUnitKeyWithBusinessUnitKeyValue(e) {
          return new eS({
            pathArgs: { ...this.args.pathArgs, ...e },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        attributeGroups() {
          return new f({
            pathArgs: { ...this.args.pathArgs },
            executeRequest: this.args.executeRequest,
            baseUri: this.args.baseUri,
          });
        }
        get(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "GET",
              uriTemplate: "/{projectKey}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        head(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "HEAD",
              uriTemplate: "/{projectKey}",
              pathVariables: this.args.pathArgs,
              headers: { ...e?.headers },
            },
            this.args.executeRequest,
          );
        }
        post(e) {
          return new i(
            {
              baseUri: this.args.baseUri,
              method: "POST",
              uriTemplate: "/{projectKey}",
              pathVariables: this.args.pathArgs,
              headers: { "Content-Type": "application/json", ...e?.headers },
              body: e?.body,
            },
            this.args.executeRequest,
          );
        }
      }
      let tE = (function (e) {
        return (
          (e.None = "None"),
          (e.ReserveOnOrder = "ReserveOnOrder"),
          (e.TrackOnly = "TrackOnly"),
          e
        );
      })({});
    },
  },
]);
