"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5790],
  {
    7352: (e, t, i) => {
      i.d(t, { X: () => n });
      var r = i(94799),
        l = i(20992),
        o = i(55133);
      let n = (e) => {
        var t, i;
        let {
          src: n,
          contentfulParams: a = { fm: "webp" },
          quality: d = 75,
          alt: s = "",
          ...u
        } = e;
        return (0, r.jsx)(l.default, {
          src:
            null !== (t = null != n ? n : "/images/no-image.png") &&
            void 0 !== t
              ? t
              : "",
          loader: (e) => (0, o.contentfulLoader)({ ...e, quality: d }, a),
          alt: s,
          sizes:
            null !== (i = u.sizes) && void 0 !== i
              ? i
              : "".concat(u.width, "px"),
          ...u,
        });
      };
    },
    15231: (e, t, i) => {
      i.d(t, { ButtonLink: () => d });
      var r = i(94799),
        l = i(36008),
        o = i.n(l),
        n = i(27357),
        a = i(93869);
      let d = (e) => {
        var t, i;
        let { withCurrentActive: l, ...d } = e,
          s = (0, n.usePathname)(),
          u = d.href === s,
          c =
            l && u
              ? null !== (t = d.activeVariant) && void 0 !== t
                ? t
                : "primary"
              : null !== (i = d.variant) && void 0 !== i
                ? i
                : "primaryLight";
        return (0, r.jsx)(a.$, {
          ...d,
          href: d.href,
          target: d.target,
          as: o(),
          variant: c,
          children: d.children,
        });
      };
    },
    57546: (e, t, i) => {
      i.d(t, { G: () => T, X: () => r.X });
      var r = i(7352),
        l = i(94799),
        o = i(13331),
        n = i(20992),
        a = i(83445);
      let d = (e) => "object" == typeof e && !Array.isArray(e),
        s = (e) => Array.isArray(e),
        u = (e) => {
          let t = Object.keys(a.f);
          if ("string" == typeof e) return e;
          let i = {};
          if (d(e)) {
            let r;
            for (let l of t)
              if (e[l]) (i[l] = e[l]), (r = e[l]);
              else if (r) i[l] = r;
              else throw Error("Object requires a 'base' breakpoint");
          }
          if (s(e)) {
            let r;
            for (let [l, o] of t.entries())
              if (e[l]) (i[o] = e[l]), (r = e[l]);
              else if (r) i[o] = r;
              else throw Error("Array cannot be empty");
          }
          let r = "";
          for (let [e, l] of t.entries()) {
            let o = a.f[t[e + 1]],
              n = i[l];
            i[t[e + 1]] !== n &&
              (e === t.length - 1
                ? (r += "".concat(n))
                : (r += "(max-width: ".concat(o, ") ").concat(n, ", ")));
          }
          return r;
        };
      var c = i(55133);
      let T = (0, o.chakra)((e) => {
        var t, i;
        let { image: r, className: o, testId: a } = e;
        return (0, l.jsx)(n.default, {
          ...r,
          sizes: r.sizes ? u(r.sizes) : void 0,
          src:
            null !==
              (i =
                null !== (t = r.src) && void 0 !== t
                  ? t
                  : "/images/no-image.png") && void 0 !== i
              ? i
              : "",
          loader: (e) => (0, c.contentfulLoader)({ ...e }),
          className: o,
          alt: r.alt,
          "data-testid": a,
        });
      });
      T.displayName = "ContentfulImage";
    },
    57948: (e, t, i) => {
      i.d(t, { l: () => l });
      var r = i(72484);
      let l = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = "noSSR" !== e,
          [i] = (0, r.useMediaQuery)("(max-width: 1023px)", {
            ssr: t,
            fallback: t ? e : void 0,
          });
        return i;
      };
    },
    82518: (e, t, i) => {
      i.d(t, {
        ZH: () => n,
        cq: () => a,
        fX: () => r,
        fw: () => l,
        zX: () => o,
      });
      let r = (e) => e.toLowerCase().replace(/[\s_&]/g, "-"),
        l = (e) => r(e.replace(/[^a-zA-Z0-9\s\-_&]/g, "")),
        o = (e) => {
          let t = e.toLowerCase().replace(/[-_]/g, " ");
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        n = (e) => e.charAt(0).toUpperCase() + e.slice(1),
        a = (e) => ("." != e.charAt(e.length - 1) ? "".concat(e, ".") : e);
    },
    83445: (e, t, i) => {
      i.d(t, { f: () => r });
      let r = {
        base: "0em",
        sm: "30em",
        md: "48em",
        lg: "64em",
        xl: "80em",
        "2xl": "96em",
      };
    },
    92718: (e, t, i) => {
      i.d(t, {
        sd: () => s,
        ry: () => d,
        IV: () => u,
        Sg: () => o,
        qG: () => r,
        hH: () => l,
        x: () => c,
        BR: () => n,
        SD: () => Y,
        Yf: () => R,
        jP: () => C,
        T9: () => N,
        uH: () => B,
        NX: () => U,
        pp: () => q,
        Ki: () => Q,
        Ij: () => W,
        bQ: () => j,
        g6: () => X,
        rB: () => h,
        bT: () => b,
        Vl: () => V,
        Z7: () => L,
        f8: () => g,
      });
      var r = (function (e) {
          return (
            (e.PLAIN = "storyPlain"),
            (e.QUOTE = "storyQuoteCard"),
            (e.ROUTINE = "storyRoutineCard"),
            (e.TAG = "storyTagCard"),
            (e.VIDEO = "storyVideo"),
            (e.LOTTIE = "storyLottie"),
            (e.LIST = "storyList"),
            (e.STACKED = "storyStacked"),
            (e.SKIP_OPTION = "storySkipOption"),
            e
          );
        })({}),
        l = (function (e) {
          return (
            (e.LINKS_WITH_ICON = "LINKS_WITH_ICON"),
            (e.LINKS_WITH_IMAGE = "LINKS_WITH_IMAGE"),
            (e.LINKS_WITH_PROMOTIONAL_BANNER = "LINKS_WITH_PROMOTIONAL_BANNER"),
            (e.LINKS = "LINKS"),
            e
          );
        })({}),
        o = (function (e) {
          return (
            (e.FOOTER = "Footer"),
            (e.ALL = "All"),
            (e.ROUTINE = "Routine"),
            (e.BAG = "Bag"),
            e
          );
        })({});
      let n = (e) => {
          try {
            return (() => {
              if (Array.isArray(e)) {
                var t;
                let i = e[0];
                if (
                  null == i
                    ? void 0
                    : null === (t = i.fields.file) || void 0 === t
                      ? void 0
                      : t.url
                )
                  try {
                    return a(i);
                  } catch (e) {
                    console.error(e);
                  }
                console.warn("Could not map asset", e);
                return;
              }
              return a(e);
            })();
          } catch (e) {
            throw (console.error(e), e);
          }
        },
        a = (e) => {
          var t, i, r;
          let {
            fields: { file: l, title: o, description: n },
            sys: { id: a },
          } = e;
          return {
            contentType:
              null !== (t = null == l ? void 0 : l.contentType) && void 0 !== t
                ? t
                : "image/png",
            filename:
              null !== (i = null == l ? void 0 : l.fileName) && void 0 !== i
                ? i
                : "",
            title: null != o ? o : "",
            description: n,
            url:
              null !== (r = null == l ? void 0 : l.url) && void 0 !== r
                ? r
                : "",
            id: a,
          };
        };
      var d = (function (e) {
          return (
            (e.LANDING_PAGE = "landingPage"),
            (e.HERO_BANNER = "heroBanner"),
            (e.STORIES = "stories"),
            (e.STORY = "story"),
            (e.BLOG_PAGE = "pageBlog"),
            (e.CLP = "clp"),
            (e.ARTICLES = "articles"),
            (e.SAVE_WITH_SETS = "saveWithSets"),
            (e.HEADER_TICKER = "headerTicker"),
            (e.CURATED_LIST = "curatedList"),
            (e.CONTENT_LISTING = "contentListing"),
            (e.CTA_CAROUSEL = "ctaCarousel"),
            (e.CTA_CAROUSEL_ITEM = "ctaCarouselItem"),
            (e.WIDE_CAROUSEL_ITEM = "wideCarouselItem"),
            (e.NON_CONFIGURABLE_COMPONENT = "nonConfigurableComponent"),
            (e.TABBED_LIST = "componentTabbedLists"),
            (e.CATEGORY_PAGE_PROMO_CARD = "categoryPagePromoCard"),
            (e.BANNER = "banner"),
            (e.RECOMMENDED_CARDS = "recommendedCards"),
            (e.CTA = "cta"),
            (e.LINK = "link"),
            (e.FAQ_GROUP = "faqGroup"),
            (e.FAQ = "faqs"),
            (e.SCREEN_EXPLAINER = "screenExplainer"),
            (e.PARALLAX_BANNER = "parallaxBanner"),
            (e.NAVIGATION_IMAGE_CARD = "componentCardCta"),
            (e.CONFIGURABLE_NAVIGATION = "configurableNavigation"),
            (e.CONFIGURABLE_FILTERS = "configurableFilters"),
            (e.CONTEXTUALISED_LINK = "contextualisedLink"),
            (e.PRODUCT_CATEGORY = "productCategory"),
            (e.PRODUCT_CATEGORY_TYPE = "productCategoryType"),
            (e.PRODUCT_CATEGORY_GROUP = "productCategoryGroup"),
            (e.PRODUCT_CATEGORY_PAGE = "pageProductCategory"),
            (e.PLAN_STEP = "planStep"),
            (e.PLAN_PAGE = "planPage"),
            (e.QUICK_LINKS = "quickLinks"),
            (e.QUICK_LINKS_CARD = "quickLinkCard"),
            (e.SPOTLIGHT_CARD = "spotlightCard"),
            (e.SPOTLIGHT_LIST = "spotlightList"),
            (e.COLLECTION_PAGE = "pageCollection"),
            (e.PDP_PAGE = "pdpPage"),
            (e.PROMOTION_CONTENT = "promotionContent"),
            (e.PROMOTION_CONTENT_ENTRY = "promotionContentEntry"),
            (e.MARKETING_POPUP = "marketingPopup"),
            (e.STANDALONE_TEXT = "standaloneText"),
            (e.QUIZ_INTRO_PAGE = "pageQuizIntro"),
            (e.QUIZ_END_PAGE = "pageQuizEnd"),
            e
          );
        })({}),
        s = (function (e) {
          return (
            (e.PERSONALISED_HOMEPAGE = "personalised-home"),
            (e.UNPERSONALISED_HOMEPAGE = "unpersonalised-home"),
            (e.HOMEPAGE = "configurable-home-page"),
            (e.NEW_HOMEPAGE_UNPERSONALISED = "unpersonalised-home-feb-2025"),
            (e.SKINCARE_UNPERSONALISED =
              "skincare-home-unpersonalised-feb-2025"),
            (e.HAIRCARE_UNPERSONALISED =
              "haircare-home-unpersonalised-feb-2025"),
            (e.NEW_HOMEPAGE_PERSONALISED = "personalised-home-feb-2025"),
            (e.SKINCARE_PERSONALISED = "skincare-home-personalised-feb-2025"),
            (e.HAIRCARE_PERSONALISED = "haircare-home-personalised-feb-2025"),
            (e.FAQ = "faq"),
            (e.CERAVE = "cerave"),
            (e.POLICY = "privacy-policy"),
            (e.TERMS_USE = "terms-of-use"),
            (e.TERMS_SALE = "terms-of-sale"),
            (e.BDNA_INTRO = "bdna-intro"),
            (e.LEARN = "learn"),
            (e.ROUTINE_LANDING = "routines"),
            (e.HAIRCARE_ROUTINE_LANDING = "haircare-routines-lp"),
            (e.OFFERS = "offers-page"),
            e
          );
        })({}),
        u = (function (e) {
          return (
            (e.FOCUS_AREA = "focusArea"), (e.ROUTINE_STEP = "routineStep"), e
          );
        })({}),
        c = (function (e) {
          return (
            (e.ACTIVE_INGREDIENTS = "activeIngredients"),
            (e.APPLICATION_TIME = "applicationTime"),
            (e.AROMA = "aroma"),
            (e.AVAILABILITY = "availability"),
            (e.IS_AVAILABLE = "isAvailable"),
            (e.BDNA = "bdna"),
            (e.BODY_AREA = "bodyArea"),
            (e.BRAND = "brand"),
            (e.PRODUCT_FORMATS = "productFormats"),
            (e.INGREDIENT_LIMITS = "ingredientLimits"),
            (e.HAS_DISCOUNT = "hasDiscount"),
            (e.PRICE = "price"),
            (e.PRODUCT_TYPE = "productType"),
            (e.RELEVANCE = "relevance"),
            (e.ROUTINE_STEP = "routineStep"),
            (e.SCENT = "scent"),
            (e.SKIN_CONCERN = "skinConcern"),
            (e.SKIN_FEEL = "skinFeel"),
            (e.SKIN_SENSITIVITY = "skinSensitivity"),
            (e.SKIN_TYPE = "skinType"),
            (e.FOCUS_AREAS = "focusAreas"),
            (e.GROUPED_PRODUCT_TYPE = "groupedProductType"),
            (e.HAIR_TEXTURE = "hairTexture"),
            (e.TEXTURE = "texture"),
            (e.SKU = "sku"),
            e
          );
        })({});
      let T = (e) => {
          if (e) return e.startsWith("/") ? e : "/".concat(e);
        },
        E = {
          Rose: "brand.rosehip",
          Prune: "brand.prune",
          Mint: "brand.mint",
          Clay: "brand.clay",
          Sage: "brand.sage",
          Beeswax: "brand.beeswax",
        },
        I = (e) => {
          var t;
          let {
            fields: {
              title: i,
              subTitle: l,
              media: o,
              description: a,
              imagePosition: d,
            },
          } = e;
          return {
            contentType: r.PLAIN,
            title: i,
            subTitle: l,
            imgSrc: o && (null === (t = n(o)) || void 0 === t ? void 0 : t.url),
            description: a,
            imagePosition: d,
          };
        },
        A = (e) => {
          let {
            fields: { quote: t, tag: i, subTitle: l, description: o },
          } = e;
          return {
            contentType: r.QUOTE,
            quote: t,
            tag: i,
            subTitle: l,
            description: o,
          };
        },
        f = (e) => {
          let {
            fields: { title: t, tags: i, description: l },
          } = e;
          return { contentType: r.TAG, title: t, tags: i, description: l };
        },
        p = (e) => {
          let {
            fields: { title: t, media: i, description: l },
          } = e;
          return {
            contentType: r.VIDEO,
            title: t,
            video: n(i),
            slug: "video",
            description: l,
          };
        },
        v = (e, t) => {
          var i;
          let { sys: l } = e,
            o = l.contentType.sys.id,
            n =
              null !== (i = E[null != t ? t : ""]) && void 0 !== i
                ? i
                : "brand.beeswax",
            a = "".concat(n, ".100"),
            d = "".concat(n, ".10");
          switch (o) {
            case r.PLAIN:
              return { ...I(e), color: a, backgroundColor: d };
            case r.QUOTE:
              return { ...A(e), color: d, backgroundColor: a };
            case r.TAG:
              return { ...f(e), color: d, backgroundColor: a };
            case r.VIDEO:
              return { ...p(e), color: a, backgroundColor: d };
          }
        },
        L = (e) => {
          var t, i, r;
          let l = Array.isArray(e) ? e[0] : e,
            o = l.fields.colorNames,
            a =
              null !== (i = E[null != o ? o : ""]) && void 0 !== i
                ? i
                : "brand.beeswax",
            s = l.fields.coverImage ? n(l.fields.coverImage) : void 0;
          return {
            coverTitle: l.fields.title,
            storyTitle: l.fields.storyTitle,
            description: l.fields.description,
            cards:
              null === (t = l.fields.components) || void 0 === t
                ? void 0
                : t.reduce((e, t) => {
                    if (t) {
                      let i = v(t, o);
                      i && e.push(i);
                    }
                    return e;
                  }, []),
            coverImgSrc: null == s ? void 0 : s.url,
            storyColor: o,
            backgroundColor: "".concat(a, ".100"),
            color: "".concat(a, ".10"),
            publishedDate:
              null !== (r = l.fields.publishedDate) && void 0 !== r
                ? r
                : l.sys.createdAt,
            updatedDate: l.sys.updatedAt,
            slug: l.fields.slug,
            shopLink: T(l.fields.shopLink),
            pageMetadata: {
              title: l.fields.metadataTitle,
              description: l.fields.metadataDescription,
            },
            id: l.sys.id,
            contentType: d.STORY,
          };
        },
        N = (e) => {
          var t, i, r;
          let l =
              null === (i = e.fields.headerImage) || void 0 === i
                ? void 0
                : null === (t = i.fields.file) || void 0 === t
                  ? void 0
                  : t.url,
            o = "object" == typeof l ? l.url : l;
          return {
            id: e.sys.id,
            title: e.fields.title,
            description: e.fields.description,
            headerImageSrc: o,
            productSKUs:
              null !== (r = e.fields.commerceToolsProducts) && void 0 !== r
                ? r
                : [],
            slug: e.fields.slug,
            story: e.fields.story && L(e.fields.story),
            pageCreation: e.fields.pageCreation,
          };
        },
        C = (e) => {
          let {
            fields: { ctaText: t, ctaUrl: i, ctaType: r },
          } = e;
          return { text: t, url: i, type: r };
        },
        O = (e, t) => ({
          title: e,
          footerLinks:
            null == t ? void 0 : t.reduce((e, t) => (t && e.push(C(t)), e), []),
        }),
        S = (e) => (e ? e.replace(/^\/\//, "https://") : e),
        _ = (e) => {
          var t, i, r, l;
          let o =
              null === (r = e.fields) || void 0 === r
                ? void 0
                : null === (i = r.image) || void 0 === i
                  ? void 0
                  : null === (t = i.fields.file) || void 0 === t
                    ? void 0
                    : t.url,
            n = "object" == typeof o ? o.url : o,
            a = n && S(n);
          return {
            id: e.sys.id,
            contentType: d.CTA_CAROUSEL_ITEM,
            titleText: e.fields.titleText,
            tagText: e.fields.tagText,
            tagType: e.fields.tagType,
            ctaText: e.fields.ctaText,
            ctaHref: e.fields.ctaHref,
            image: a,
            invertedColor: e.fields.invertedColour,
            type: null !== (l = e.fields.type) && void 0 !== l ? l : "Normal",
          };
        },
        g = (e) => {
          var t, i, r, l, o, n, a, s;
          let u = S(
              null === (r = e.fields) || void 0 === r
                ? void 0
                : null === (i = r.image) || void 0 === i
                  ? void 0
                  : null === (t = i.fields.file) || void 0 === t
                    ? void 0
                    : t.url,
            ),
            c = S(
              null === (n = e.fields) || void 0 === n
                ? void 0
                : null === (o = n.image) || void 0 === o
                  ? void 0
                  : null === (l = o.fields.file) || void 0 === l
                    ? void 0
                    : l.url,
            );
          return {
            contentType: d.WIDE_CAROUSEL_ITEM,
            titleText: e.fields.titleText,
            subtitle: e.fields.subtitle,
            imageUrl: null != u ? u : "",
            lgBreakpointImageUrl: c,
            imagePosition: e.fields.imagePosition,
            tagText: e.fields.tagText,
            ctaList:
              null === (a = e.fields.ctaList) || void 0 === a
                ? void 0
                : a.flatMap((e) => (e ? [C(e)] : [])),
            showTrustpilot:
              null !== (s = e.fields.showTrustpilot) && void 0 !== s && s,
          };
        },
        R = (e) => {
          var t;
          let { fields: i } = e;
          return {
            items: i.items.reduce(
              (e, t) => (
                t &&
                  ((null == t ? void 0 : t.sys.contentType.sys.id) ===
                    d.CTA_CAROUSEL_ITEM && e.push(_(t)),
                  (null == t ? void 0 : t.sys.contentType.sys.id) ===
                    d.WIDE_CAROUSEL_ITEM && e.push(g(t))),
                e
              ),
              [],
            ),
            title: i.title,
            name: i.name,
            type: null !== (t = i.type) && void 0 !== t ? t : "Sliding",
          };
        },
        m = (e) => ({
          id: e.sys.id,
          label: e.fields.label,
          internalName: e.fields.internalName,
          defaultLink: e.fields.defaultLink,
          defaultImage: e.fields.defaultImage
            ? n(e.fields.defaultImage)
            : void 0,
          decodedLabel: e.fields.decodedLabel,
          decodedLink: e.fields.decodedLink,
          decodedImage: e.fields.decodedImage
            ? n(e.fields.decodedImage)
            : void 0,
          careType: e.fields.careType,
        }),
        y = (e) => {
          var t, i;
          let { fields: r } = e;
          return {
            title: r.title,
            targetUrl: r.targetUrl,
            imageUrl:
              null === (i = r.image) || void 0 === i
                ? void 0
                : null === (t = i.fields.file) || void 0 === t
                  ? void 0
                  : t.url,
          };
        },
        P = (e) => e.sys.contentType.sys.id === d.QUICK_LINKS_CARD;
      function h(e) {
        let { fields: t } = e;
        return {
          title: t.title,
          links: t.links
            .filter((e) => !!e)
            .map((e) =>
              P(e)
                ? { contentType: d.QUICK_LINKS_CARD, card: y(e) }
                : { contentType: d.CONTEXTUALISED_LINK, card: m(e) },
            ),
        };
      }
      let U = (e) => {
          let {
              fields: {
                title: t,
                subTitle: i,
                media: r,
                lgBreakpointMedia: l,
                ctaCarousel: o,
                cta: a,
                stickyCta: d,
                quickLinks: s,
                trustPilotWidget: u,
              },
            } = e,
            c = null == i ? void 0 : i.content[0].content[0];
          return {
            title: t,
            subtitle: c && "value" in c ? (null == c ? void 0 : c.value) : c,
            carousel: o ? R(o) : void 0,
            image: r ? n(r) : void 0,
            lgPlusImage: l ? n(l) : void 0,
            quickLinks: s ? h(s) : void 0,
            cta: a ? C(a) : void 0,
            stickyCta: d,
            trustPilotWidget: u,
          };
        },
        D = (e) => {
          try {
            return (() => {
              if (Array.isArray(e)) {
                let t = e[0];
                return t ? U(t) : void 0;
              }
              return U(e);
            })();
          } catch (e) {
            throw (console.error(e), e);
          }
        };
      function b(e) {
        var t, i, r;
        let { fields: l } = e;
        return {
          title: l.title,
          tagText: l.tagText,
          description: l.description,
          ctaText: l.ctaText,
          ctaHref: l.ctaHref,
          color: l.color,
          imageUrl:
            null !==
              (r =
                null === (i = l.image) || void 0 === i
                  ? void 0
                  : null === (t = i.fields.file) || void 0 === t
                    ? void 0
                    : t.url) && void 0 !== r
              ? r
              : "",
        };
      }
      let G = (e) => {
          let t;
          let { fields: i, sys: r } = e,
            { header: l, footerLinks: o, footerTitle: n } = i,
            a = "curatedList" in i && i.curatedList ? N(i.curatedList) : void 0,
            d = [];
          if ("productGridSpotlightCards" in i || "spotlightCardFooter" in i) {
            var s;
            let {
              fields: { productGridSpotlightCards: i, spotlightCardFooter: r },
            } = e;
            (d =
              null !== (s = null == i ? void 0 : i.filter((e) => !!e).map(b)) &&
              void 0 !== s
                ? s
                : []),
              (t = r && b(r));
          }
          let u = e.fields.slug;
          return {
            id: r.id,
            slug: u,
            header: l ? D(l) : void 0,
            curatedList: a,
            footer: o && n ? O(n, o) : void 0,
            productGridSpotlightCards: d,
            spotlightCardFooter: t,
          };
        },
        k = (e) => {
          let {
            fields: {
              label: t,
              page: i,
              subNavImage: r,
              iconName: l,
              key: o,
              slug: a,
              filterImage: d,
              navCardImage: s,
              aboutUsImage: u,
              productHeroImage: c,
              isPromoTag: T,
            },
            sys: E,
          } = e;
          return {
            id: E.id,
            slug: a,
            label: t,
            subNavImage: r ? n(r) : void 0,
            navCardImage: s ? n(s) : void 0,
            filterImage: d ? n(d) : void 0,
            aboutUsImage: u ? n(u) : void 0,
            productHeroImage: c ? n(c) : void 0,
            iconName: l,
            page: i ? G(i) : void 0,
            key: o,
            navigationHierarchyType: "ProductCategory",
            isPromoTag: T,
          };
        };
      u.FOCUS_AREA, u.ROUTINE_STEP;
      let K = {
          "Links with Icon": l.LINKS_WITH_ICON,
          "Links with Image": l.LINKS_WITH_IMAGE,
          "Links with Promotional Banner": l.LINKS_WITH_PROMOTIONAL_BANNER,
          Links: l.LINKS,
        },
        x = (e) => {
          let {
            fields: { question: t, answer: i },
          } = e;
          return { question: t, answer: i };
        },
        M = (e) => ("question" in e.fields ? x(e) : B(e)),
        B = (e) => {
          let { name: t, faqs: i } = e.fields;
          return {
            name: t,
            entries:
              null == i
                ? void 0
                : i.reduce((e, t) => (t && e.push(M(t)), e), []),
          };
        },
        H = (e) =>
          e.startsWith("Step") ? e.split(":").slice(1).join(":").trim() : e,
        w = (e) => {
          let t = L(e);
          return {
            ...t,
            coverTitle: t.coverTitle ? H(t.coverTitle) : void 0,
            storyTitle: H(t.storyTitle),
          };
        },
        F = (e) => {
          var t, i;
          let {
            fields: {
              title: r,
              key: l,
              routineStepLearnContent: o,
              productCardDescription: a,
              pdpDescription: d,
              applicationTime: s,
              checkbox1Title: u,
              checkbox1Description: c,
              checkbox2Title: T,
              checkbox2Description: E,
              checkbox3Title: I,
              checkbox3Description: A,
              productLabel: f,
              planCardImage: p,
              pdpImage: v,
            },
            sys: { id: L },
          } = e;
          return {
            id: L,
            title: r,
            productCardDescription: a,
            pdpDescription: d,
            checkboxes: [
              { title: u, description: c },
              { title: T, description: E },
              { title: I, description: A },
            ].filter((e) => {
              let { title: t, description: i } = e;
              return !!t || !!i;
            }),
            productLabel: f,
            applicationTime: s,
            key: l,
            story: o ? w(o) : void 0,
            routineCardImageSrc: p
              ? null === (t = n(p)) || void 0 === t
                ? void 0
                : t.url
              : void 0,
            pdpImageSrc: v
              ? null === (i = n(v)) || void 0 === i
                ? void 0
                : i.url
              : void 0,
          };
        },
        Y = (e) => {
          let {
            fields: { focusArea: t, steps: i },
            sys: r,
          } = e;
          return {
            id: r.id,
            focusArea: k(t),
            steps: (null != i ? i : []).reduce((e, t) => {
              if (t)
                try {
                  let i = F(t);
                  e.push(i);
                } catch (e) {
                  console.error(e);
                }
              return e;
            }, []),
          };
        };
      function V(e) {
        let { fields: t } = e;
        return {
          title: t.title,
          cards: t.spotlightCards.filter((e) => !!e).map(b),
          ctaLabel: t.ctaLabel,
          ctaLink: t.ctaLink,
        };
      }
      let Q = (e) => {
          var t, i;
          let { fields: r } = e,
            {
              title: l,
              description: o,
              parallaxImage: n,
              staticImage: a,
              cta: d,
              isLandscapeOnLg: s,
            } = r;
          return {
            title: null != l ? l : "",
            description: o,
            parallaxImageUrl: "".concat(
              null == n
                ? void 0
                : null === (t = n.fields.file) || void 0 === t
                  ? void 0
                  : t.url,
            ),
            staticImageUrl: "".concat(
              null == a
                ? void 0
                : null === (i = a.fields.file) || void 0 === i
                  ? void 0
                  : i.url,
            ),
            cta: d && C(d),
            isLandscapeOnLg: s,
          };
        },
        W = (e) => {
          let {
            fields: { matchExplainerBanner: t },
          } = e;
          return { matchExplainerBanner: t && Q(t) };
        },
        X = (e) => {
          let {
            fields: {
              title: t,
              description: i,
              icon: r,
              link: l,
              iconName: o,
              internalName: a,
            },
          } = e;
          return {
            title: t,
            description: i,
            icon: r ? n(r) : void 0,
            link: l,
            iconName: o,
            internalName: a,
          };
        },
        j = (e) => {
          let {
            fields: { temporaryContent: t, permanentContent: i },
          } = e;
          return {
            temporaryEntries: (null == t ? void 0 : t.length)
              ? t.map((e) => X(e))
              : [],
            permanentEntries: (null == i ? void 0 : i.length)
              ? i.map((e) => X(e))
              : [],
          };
        },
        q = (e) => {
          let {
            fields: {
              title: t,
              subTitle: i,
              description: r,
              image: l,
              cta: o,
              useCase: a,
              delayTimeInSeconds: d,
              promotionExpirationDate: s,
              consentForm: u,
            },
          } = e;
          return {
            title: t,
            subTitle: i,
            description: r,
            image: l ? n(l) : void 0,
            cta: (null == o ? void 0 : o.length) ? o.map((e) => C(e)) : void 0,
            useCase: a,
            delayTimeInSeconds: d,
            promotionExpirationDate: s,
            consentForm: u,
          };
        };
      var z = i(6488);
      r.PLAIN,
        z.BLOCKS.PARAGRAPH,
        z.BLOCKS.DOCUMENT,
        r.LOTTIE,
        r.LIST,
        r.STACKED,
        r.LOTTIE,
        r.LIST,
        r.STACKED,
        r.LOTTIE,
        r.LIST,
        r.STACKED,
        r.LOTTIE,
        r.LIST,
        r.STACKED,
        r.LOTTIE,
        r.LOTTIE,
        d.STORY,
        r.PLAIN,
        z.BLOCKS.PARAGRAPH,
        z.BLOCKS.DOCUMENT,
        d.STORY,
        z.BLOCKS.PARAGRAPH,
        z.BLOCKS.DOCUMENT,
        r.VIDEO,
        d.STORY,
        z.BLOCKS.DOCUMENT,
        z.BLOCKS.PARAGRAPH,
        r.VIDEO,
        d.STORY,
        r.VIDEO,
        d.CURATED_LIST,
        d.CURATED_LIST,
        d.CURATED_LIST;
    },
    99034: (e, t, i) => {
      i.d(t, { l: () => l });
      var r = i(72484);
      let l = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          [t] = (0, r.useMediaQuery)("(max-width: 767px)", {
            ssr: !0,
            fallback: e,
          });
        return t;
      };
    },
  },
]);
