(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8039],
  {
    4130: (e, t, i) => {
      "use strict";
      i.d(t, { C: () => r, R: () => n });
      var n = (function (e) {
          return (
            (e.SetIsDockVisible = "SET_IS_DOCK_VISIBLE"),
            (e.SetLogoColor = "SET_LOGO_COLOR"),
            e
          );
        })({}),
        r = (function (e) {
          return (
            (e.ROUTINE_STEPS = "routineSteps"),
            (e.SKIN_CONCERNS = "skinConcerns"),
            (e.BRANDS = "brands"),
            e
          );
        })({});
    },
    11128: (e, t, i) => {
      "use strict";
      i.d(t, { Y: () => n.Header });
      var n = i(49988);
    },
    11139: (e, t, i) => {
      Promise.resolve().then(i.bind(i, 58261));
    },
    49071: (e, t, i) => {
      "use strict";
      i.d(t, { n: () => o });
      var n = i(94799),
        r = i(24689),
        s = i(82536),
        l = i(95785);
      let o = (e) => {
        var t, i;
        let { entry: o, onClick: a } = e,
          { isHaircareDecoded: c, isSkincareDecoded: d } = (0, s.A)(),
          u = o.careType === r.ch.SKINCARE,
          h = o.careType === r.ch.HAIRCARE,
          f = (u && !!d) || (h && !!c);
        return (0, n.jsx)(l.m, {
          imageSrc:
            null !==
              (t = (() => {
                var e, t;
                return f
                  ? null === (e = o.decodedImage) || void 0 === e
                    ? void 0
                    : e.url
                  : null === (t = o.defaultImage) || void 0 === t
                    ? void 0
                    : t.url;
              })()) && void 0 !== t
              ? t
              : "",
          ctaLabel:
            null !==
              (i = (() => {
                var e;
                return f
                  ? o.decodedLabel
                  : null !== (e = o.pluralLabel) && void 0 !== e
                    ? e
                    : o.label;
              })()) && void 0 !== i
              ? i
              : "",
          href: f ? o.decodedLink : o.defaultLink,
          onClick: a,
        });
      };
    },
    51120: (e, t, i) => {
      "use strict";
      i.d(t, { m: () => n.m });
      var n = i(56965);
    },
    56965: (e, t, i) => {
      "use strict";
      i.d(t, { m: () => f });
      var n = i(94799),
        r = i(98814),
        s = i(4306),
        l = i(87798),
        o = i(31634),
        a = i(38236),
        c = i(89136),
        d = i(66572),
        u = i(97001);
      let h = (e) => {
          let { as: t, entry: i, variant: d, minW: u } = e,
            h = (0, r.useMultiStyleConfig)("InfoPromoCardList", { variant: d });
          return (0, n.jsxs)(s.Box, {
            as: t,
            display: "flex",
            flex: "1 0 0",
            gap: 4,
            alignItems: "center",
            minW: u,
            children: [
              i.icon &&
                (0, n.jsx)(l.Image, {
                  width: 6,
                  height: 6,
                  src: i.icon.url,
                  alt: "",
                }),
              (0, n.jsxs)(o.Flex, {
                __css: h.listItemTextContainer,
                children: [
                  i.link
                    ? (0, n.jsx)(a.Link, {
                        href: i.link,
                        textStyle: "function.text.medium",
                        textDecoration: "underline",
                        children: i.title,
                      })
                    : (0, n.jsx)(c.Text, {
                        textStyle: "function.text.medium",
                        children: i.title,
                      }),
                  i.description &&
                    (0, n.jsx)(c.Text, {
                      textStyle: "function.caption.small",
                      children: i.description,
                    }),
                ],
              }),
            ],
          });
        },
        f = (e) => {
          let {
              temporaryEntries: t,
              permanentEntries: i,
              temporaryStyle: s,
              permanentStyle: l,
              isLoading: a,
              minItemWidth: c = 80,
            } = e,
            f = (0, r.useMultiStyleConfig)("InfoPromoCardList", { variant: s }),
            g = (0, r.useMultiStyleConfig)("InfoPromoCardList", { variant: l });
          return (0, n.jsx)(u.q, {
            loading: a,
            contentHeight: 40,
            contentWidth: "100%",
            children: (0, n.jsxs)(o.Flex, {
              direction: "column",
              gap: 4,
              w: "100%",
              children: [
                !!(null == t ? void 0 : t.length) &&
                  (0, n.jsx)(d.List, {
                    __css: f.list,
                    children: t.map((e, t) =>
                      (0, n.jsx)(
                        h,
                        { as: "li", entry: e, variant: s, minW: c },
                        t,
                      ),
                    ),
                  }),
                !!(null == i ? void 0 : i.length) &&
                  (0, n.jsx)(d.List, {
                    __css: g.list,
                    children: i.map((e, t) =>
                      (0, n.jsx)(
                        h,
                        { as: "li", entry: e, variant: l, minW: c },
                        t,
                      ),
                    ),
                  }),
              ],
            }),
          });
        };
    },
    58261: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => d });
      var n = i(94799),
        r = i(4306),
        s = i(34023),
        l = i(38799),
        o = i(11128),
        a = i(74578),
        c = i(55582);
      function d(e) {
        let { error: t } = e;
        return (
          (0, s.useEffect)(() => {
            console.error(t);
          }, [t]),
          (0, n.jsxs)("html", {
            lang: "en",
            style: { scrollBehavior: "smooth" },
            children: [
              (0, n.jsxs)("head", {
                children: [
                  (0, n.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    href: "/images/icons/favicon-48x48.png",
                    sizes: "48x48",
                  }),
                  (0, n.jsx)("link", {
                    rel: "icon",
                    type: "image/svg+xml",
                    href: "/favicon.svg",
                  }),
                  (0, n.jsx)("link", {
                    rel: "shortcut icon",
                    href: "/favicon.ico",
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/images/icons/apple-touch-icon.png",
                  }),
                  (0, n.jsx)("meta", {
                    name: "apple-mobile-web-app-title",
                    content: "Noli",
                  }),
                  (0, n.jsx)("link", {
                    rel: "manifest",
                    href: "/manifest.json",
                  }),
                ],
              }),
              (0, n.jsx)("body", {
                children: (0, n.jsxs)(c.AppContextProvider, {
                  children: [
                    (0, n.jsx)(l.Alerts, {}),
                    (0, n.jsx)(r.Box, {
                      pos: "relative",
                      zIndex: "sticky",
                      children: (0, n.jsx)(o.Y, {}),
                    }),
                    (0, n.jsx)(a.R, {
                      title: "Oops! Something went wrong",
                      description:
                        "A technical error has occurred, please try again.",
                      retry: !0,
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    74578: (e, t, i) => {
      "use strict";
      i.d(t, { R: () => d });
      var n = i(94799),
        r = i(4306),
        s = i(89136),
        l = i(27357),
        o = i(39693),
        a = i(93869),
        c = i(15231);
      let d = (e) => {
        let {
            title: t,
            description: i,
            retry: d = !1,
            buttonText: u = "Back to home",
            buttonTarget: h = "/",
            buttonCallback: f,
            height: g = "calc(100vh - 80px)",
            children: m,
          } = e,
          y = (0, l.useRouter)();
        return (0, n.jsxs)(r.Box, {
          display: "flex",
          flexDirection: "column",
          gap: 4,
          p: 4,
          alignItems: "center",
          textAlign: "center",
          height: g,
          maxWidth: 122,
          justifyContent: "center",
          margin: "auto",
          children: [
            (0, n.jsx)(o.BDNAIcon, { width: 14, height: 14, color: "black" }),
            (0, n.jsx)(s.Text, {
              textStyle: "display.h4",
              color: "primary.black.10",
              children: t,
            }),
            (0, n.jsx)(s.Text, {
              textStyle: "body.semibold",
              color: "primary.black.40",
              children: i,
            }),
            (0, n.jsx)(a.$, {
              mt: { base: 8, lg: 10 },
              onClick: () =>
                f ? f() : d ? window.location.reload() : y.push(h),
              size: "lg",
              variant: "bdnaFill",
              fullWidth: !0,
              ariaLabel: "".concat(u, " button"),
              "data-testid": "".concat(u, " button"),
              children: d ? "Retry" : u,
            }),
            d &&
              (0, n.jsx)(c.ButtonLink, {
                href: h,
                variant: "secondary",
                size: "lg",
                fullWidth: !0,
                children: u,
              }),
            m,
          ],
        });
      };
    },
    81875: (e, t, i) => {
      "use strict";
      i.d(t, { W: () => s });
      var n = i(50692),
        r = i(98084);
      let s = (e, t, i) =>
        (0, n.useQuery)({
          queryKey: ["getPromotionContent", e, t],
          queryFn: () => r.Z.getPromotionContent(e, t),
          ...i,
        });
    },
    95785: (e, t, i) => {
      "use strict";
      i.d(t, { m: () => c });
      var n = i(94799),
        r = i(31634),
        s = i(36008),
        l = i.n(s),
        o = i(39693),
        a = i(93869);
      let c = (e) => {
        let {
          imageSrc: t,
          ctaLabel: i,
          href: s,
          onMouseEnter: c,
          onClick: d,
        } = e;
        return (0, n.jsx)(r.Flex, {
          as: s ? l() : "button",
          backgroundImage: t,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",
          minHeight: 30,
          borderRadius: "2xl",
          padding: 4,
          alignItems: "flex-end",
          onMouseEnter: c,
          onClick: d,
          ...(s ? { href: s } : {}),
          children: (0, n.jsxs)(a.$, {
            as: "span",
            variant: "primaryLight",
            size: "sm",
            children: [
              i,
              (0, n.jsx)(o.ArrowRightIcon, { width: 6, height: 6 }),
            ],
          }),
        });
      };
    },
    98084: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => f });
      var n = i(92718),
        r = i(69211),
        s = i(82518);
      let l = (e) => {
          if (e.fields.faqs) return o(e);
          let t = e.fields;
          return { question: t.question, answer: t.answer };
        },
        o = (e) => ({
          id: (0, s.fX)(e.fields.name),
          name: e.fields.name,
          entries: e.fields.faqs.reduce((e, t) => (t && e.push(l(t)), e), []),
        }),
        a = (e) => {
          var t, i, r;
          let s = Array.isArray(e) ? e[0] : e,
            l = Array.isArray(s.fields.header)
              ? s.fields.header[0]
              : s.fields.header;
          return {
            header: l && (0, n.NX)(l),
            sections:
              null !==
                (r =
                  null == s
                    ? void 0
                    : null === (i = s.fields) || void 0 === i
                      ? void 0
                      : null === (t = i.components) || void 0 === t
                        ? void 0
                        : t.reduce((e, t) => (t && e.push(o(t)), e), [])) &&
              void 0 !== r
                ? r
                : [],
          };
        },
        c = (e) => {
          var t;
          if (void 0 === e) return;
          let i = Array.isArray(e) ? e[0] : e,
            n = null === (t = i.fields.file) || void 0 === t ? void 0 : t.url,
            r = "object" == typeof n ? n.url : n;
          return {
            url: r,
            title: i.fields.title,
            description: i.fields.description,
          };
        },
        d = (e) => {
          var t;
          let { fields: i } = e;
          return {
            coverTitle: i.title,
            coverImgSrc:
              null === (t = c(i.coverImage)) || void 0 === t ? void 0 : t.url,
            publishedDate: i.publishedDate,
            slug: i.slug,
            description: i.description,
            storyColor: i.colorNames,
          };
        },
        u = (e) => ({
          stories: (null == e ? void 0 : e.map((e) => d(e))) || [],
        });
      class h {
        static getInstance() {
          return h.instance || (h.instance = new h()), h.instance;
        }
        async getContent(e, t) {
          let i = new URLSearchParams({
            content_type: e,
            options: JSON.stringify(t),
          });
          return (
            await fetch(
              ""
                .concat(r.Z8, "/cms/get-content")
                .concat(i ? "?" + i.toString() : ""),
            )
          ).json();
        }
        async getFaqContent() {
          return a(
            (
              await this.getContent(n.ry.LANDING_PAGE, {
                "fields.slug": n.sd.FAQ,
                select: "fields, fields.components",
                include: 10,
              })
            ).items,
          );
        }
        async getFaqGroup(e) {
          let t = await this.getContent(n.ry.FAQ_GROUP, {
              "fields.internalName": e,
              select: "fields",
              include: 1,
            }),
            i = Array.isArray(t.items) ? t.items[0] : t.items;
          return (0, n.uH)(i);
        }
        async getCuratedListContent(e) {
          let t = await this.getContent(n.ry.CURATED_LIST, {
              "fields.slug": e,
              "fields.pageCreation": !0,
              select: "fields",
              include: 1,
            }),
            i = Array.isArray(t.items) ? t.items[0] : t.items;
          if (!i) throw Error("Failed to fetch curated list content");
          return (0, n.T9)(i);
        }
        async getLearnContent(e, t) {
          return e === n.IV.FOCUS_AREA
            ? await this.getFocusAreaLearnContent(t)
            : e === n.IV.ROUTINE_STEP
              ? await this.getRoutineStepLearnContent(t)
              : void 0;
        }
        async getFocusAreaLearnContent(e, t) {
          return u(
            (
              await this.getContent(n.ry.STORY, {
                "fields.focusAreas": e,
                select:
                  "fields.title, fields.description, fields.coverImage, fields.publishedDate, fields.slug, fields.colorNames",
                ...t,
              })
            ).items,
          );
        }
        async getRoutineStepLearnContent(e) {
          return u(
            (
              await this.getContent(n.ry.STORY, {
                "fields.routineStep": e,
                select:
                  "fields.title, fields.description, fields.coverImage, fields.publishedDate, fields.slug, fields.colorNames",
              })
            ).items,
          );
        }
        async getStoriesFromProductFilters(e) {
          let { filters: t, colors: i, pageSize: r } = e,
            s = Object.entries({ ...t, "colorNames[in]": i }).reduce((e, t) => {
              let [i, n] = t;
              return (e["fields.".concat(i)] = n), e;
            }, {}),
            l = await this.getContent(n.ry.STORY, {
              ...s,
              select: "fields, fields.components",
              limit: r,
            });
          return {
            stories: l.items
              .map((e) => (0, n.Z7)(e))
              .sort(
                (e, t) => i.indexOf(e.storyColor) - i.indexOf(t.storyColor),
              ),
            total: l.total,
          };
        }
        async searchStoriesPaginated(e, t, i) {
          let r = await this.getContent(n.ry.STORY, {
            query: e,
            select: "fields, fields.components",
            include: 10,
            order: "sys.updatedAt",
            limit: t,
            skip: i,
          });
          return { stories: r.items.map(n.Z7), total: r.total };
        }
        async searchStoriesByTitlePaginated(e, t, i) {
          let r = await this.getContent(n.ry.STORY, {
            "fields.title[match]": e,
            select: "fields, fields.components",
            include: 10,
            order: "sys.updatedAt",
            limit: t,
            skip: i,
          });
          return { stories: r.items.map(n.Z7), total: r.total };
        }
        async getPolicies(e) {
          return this.getContent(n.ry.ARTICLES, { "fields.slug": e });
        }
        async getBdnaIntro(e) {
          return this.getContent(n.ry.SCREEN_EXPLAINER, { "fields.slug": e });
        }
        async getRoutineByConcernAndProductType(e, t) {
          let i = (
            await this.getContent(n.ry.PLAN_PAGE, {
              "fields.concernCovered": e,
              "fields.productType": t,
              include: 3,
            })
          ).items[0];
          if (i) return (0, n.SD)(i);
        }
        async getPdpContent() {
          let e = await this.getContent(n.ry.PDP_PAGE, { include: 2 });
          return (0, n.Ij)(e.items[0]);
        }
        async getPromotionContent(e, t) {
          let i = await this.getContent(n.ry.PROMOTION_CONTENT, {
            "fields.slot": e,
            "fields.careType": null != t ? t : "any",
          });
          return (0, n.bQ)(i.items[0]);
        }
        async getPromotionContentEntryByInternalName(e) {
          let t = await this.getContent(n.ry.PROMOTION_CONTENT_ENTRY, {
            "fields.internalName": e,
          });
          return (0, n.g6)(t.items[0]);
        }
        async getMarketingPopup() {
          let e = await this.getContent(n.ry.MARKETING_POPUP, {});
          return (0, n.pp)(e.items[0]);
        }
      }
      let f = h.getInstance();
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [
        787, 486, 8202, 6292, 3146, 6008, 1268, 992, 6618, 6710, 692, 9976, 248,
        8847, 2801, 1407, 9038, 3067, 7100, 7379, 2485, 4743, 8098, 8173, 5790,
        5738, 5398, 7325, 9988, 2912, 4732, 7408, 8572, 7358,
      ],
      () => t(11139),
    ),
      (_N_E = e.O());
  },
]);
