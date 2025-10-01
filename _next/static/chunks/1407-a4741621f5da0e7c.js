"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1407],
  {
    6488: function (t, e, s) {
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, s, r) {
                void 0 === r && (r = s);
                var i = Object.getOwnPropertyDescriptor(e, s);
                (!i ||
                  ("get" in i
                    ? !e.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return e[s];
                    },
                  }),
                  Object.defineProperty(t, r, i);
              }
            : function (t, e, s, r) {
                void 0 === r && (r = s), (t[r] = e[s]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, e) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: e,
                });
              }
            : function (t, e) {
                t.default = e;
              }),
        n =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var s in t)
              "default" === s ||
                Object.prototype.hasOwnProperty.call(e, s) ||
                r(e, t, s);
          },
        a =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var s in t)
                "default" !== s &&
                  Object.prototype.hasOwnProperty.call(t, s) &&
                  r(e, t, s);
            return i(e, t), e;
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.helpers =
          e.EMPTY_DOCUMENT =
          e.MARKS =
          e.INLINES =
          e.BLOCKS =
            void 0);
      var o = s(42042);
      Object.defineProperty(e, "BLOCKS", {
        enumerable: !0,
        get: function () {
          return o.BLOCKS;
        },
      });
      var u = s(96978);
      Object.defineProperty(e, "INLINES", {
        enumerable: !0,
        get: function () {
          return u.INLINES;
        },
      });
      var h = s(82190);
      Object.defineProperty(e, "MARKS", {
        enumerable: !0,
        get: function () {
          return h.MARKS;
        },
      }),
        n(s(70241), e),
        n(s(70337), e),
        n(s(25197), e);
      var c = s(16796);
      Object.defineProperty(e, "EMPTY_DOCUMENT", {
        enumerable: !0,
        get: function () {
          return c.EMPTY_DOCUMENT;
        },
      }),
        (e.helpers = a(s(81093)));
    },
    9656: (t, e, s) => {
      s.d(e, { useInfiniteQuery: () => n });
      var r = s(19549),
        i = s(98603);
      function n(t, e) {
        return (0, i.t)(t, r.z, e);
      }
    },
    16796: (t, e, s) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EMPTY_DOCUMENT = void 0);
      var r = s(42042);
      e.EMPTY_DOCUMENT = {
        nodeType: r.BLOCKS.DOCUMENT,
        data: {},
        content: [
          {
            nodeType: r.BLOCKS.PARAGRAPH,
            data: {},
            content: [{ nodeType: "text", value: "", marks: [], data: {} }],
          },
        ],
      };
    },
    17912: (t, e, s) => {
      s.d(e, { useQueries: () => p });
      var r = s(34023),
        i = s(75791),
        n = s(97065),
        a = s(56728),
        o = s(54642);
      function u(t, e) {
        return t.filter((t) => !e.includes(t));
      }
      var h = class extends a.Q {
          #t;
          #e;
          #s;
          #r;
          #i;
          #n;
          #a;
          constructor(t, e, s) {
            super(),
              (this.#t = t),
              (this.#s = []),
              (this.#r = []),
              (this.#e = []),
              this.setQueries(e);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#r.forEach((t) => {
                t.subscribe((e) => {
                  this.#o(t, e);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#r.forEach((t) => {
                t.destroy();
              });
          }
          setQueries(t, e, s) {
            (this.#s = t),
              i.j.batch(() => {
                let t = this.#r,
                  e = this.#u(this.#s);
                e.forEach((t) =>
                  t.observer.setOptions(t.defaultedQueryOptions, s),
                );
                let r = e.map((t) => t.observer),
                  i = r.map((t) => t.getCurrentResult()),
                  n = r.some((e, s) => e !== t[s]);
                if (t.length !== r.length || n)
                  (this.#r = r),
                    (this.#e = i),
                    this.hasListeners() &&
                      (u(t, r).forEach((t) => {
                        t.destroy();
                      }),
                      u(r, t).forEach((t) => {
                        t.subscribe((e) => {
                          this.#o(t, e);
                        });
                      }),
                      this.#h());
              });
          }
          getCurrentResult() {
            return this.#e;
          }
          getQueries() {
            return this.#r.map((t) => t.getCurrentQuery());
          }
          getObservers() {
            return this.#r;
          }
          getOptimisticResult(t, e) {
            let s = this.#u(t),
              r = s.map((t) =>
                t.observer.getOptimisticResult(t.defaultedQueryOptions),
              );
            return [
              r,
              (t) => this.#c(t ?? r, e),
              () =>
                s.map((t, e) => {
                  let i = r[e];
                  return t.defaultedQueryOptions.notifyOnChangeProps
                    ? i
                    : t.observer.trackResult(i, (t) => {
                        s.forEach((e) => {
                          e.observer.trackProp(t);
                        });
                      });
                }),
            ];
          }
          #c(t, e) {
            return e
              ? ((this.#i && this.#e === this.#a && e === this.#n) ||
                  ((this.#n = e),
                  (this.#a = this.#e),
                  (this.#i = (0, o.BH)(this.#i, e(t)))),
                this.#i)
              : t;
          }
          #u(t) {
            let e = new Map(this.#r.map((t) => [t.options.queryHash, t])),
              s = t.map((t) => this.#t.defaultQueryOptions(t)),
              r = s.flatMap((t) => {
                let s = e.get(t.queryHash);
                return null != s
                  ? [{ defaultedQueryOptions: t, observer: s }]
                  : [];
              }),
              i = new Set(r.map((t) => t.defaultedQueryOptions.queryHash)),
              a = s.filter((t) => !i.has(t.queryHash)),
              o = (t) => {
                let e = this.#t.defaultQueryOptions(t);
                return (
                  this.#r.find((t) => t.options.queryHash === e.queryHash) ??
                  new n.$(this.#t, e)
                );
              },
              u = a.map((t) => ({ defaultedQueryOptions: t, observer: o(t) }));
            return r
              .concat(u)
              .sort(
                (t, e) =>
                  s.indexOf(t.defaultedQueryOptions) -
                  s.indexOf(e.defaultedQueryOptions),
              );
          }
          #o(t, e) {
            let s = this.#r.indexOf(t);
            -1 !== s &&
              ((this.#e = (function (t, e, s) {
                let r = t.slice(0);
                return (r[e] = s), r;
              })(this.#e, s, e)),
              this.#h());
          }
          #h() {
            i.j.batch(() => {
              this.listeners.forEach((t) => {
                t(this.#e);
              });
            });
          }
        },
        c = s(2873),
        l = s(306),
        d = s(62636),
        E = s(31924),
        O = s(65173);
      function p(t, e) {
        let { queries: s, ...a } = t,
          o = (0, c.useQueryClient)(e),
          u = (0, l.useIsRestoring)(),
          p = (0, d.useQueryErrorResetBoundary)(),
          L = r.useMemo(
            () =>
              s.map((t) => {
                let e = o.defaultQueryOptions(t);
                return (
                  (e._optimisticResults = u ? "isRestoring" : "optimistic"), e
                );
              }),
            [s, o, u],
          );
        L.forEach((t) => {
          (0, O.tu)(t), (0, E.LJ)(t, p);
        }),
          (0, E.wZ)(p);
        let [S] = r.useState(() => new h(o, L, a)),
          [f, C, b] = S.getOptimisticResult(L, a.combine);
        r.useSyncExternalStore(
          r.useCallback(
            (t) => (u ? () => void 0 : S.subscribe(i.j.batchCalls(t))),
            [S, u],
          ),
          () => S.getCurrentResult(),
          () => S.getCurrentResult(),
        ),
          r.useEffect(() => {
            S.setQueries(L, a, { listeners: !1 });
          }, [L, a, S]);
        let _ = f.some((t, e) => (0, O.EU)(L[e], t))
          ? f.flatMap((t, e) => {
              let s = L[e];
              if (s) {
                let e = new n.$(o, s);
                if ((0, O.EU)(s, t)) return (0, O.iL)(s, e, p);
                (0, O.nE)(t, u) && (0, O.iL)(s, e, p);
              }
              return [];
            })
          : [];
        if (_.length > 0) throw Promise.all(_);
        let B = f.find((t, e) => {
          let s = L[e];
          return (
            s &&
            (0, E.$1)({
              result: t,
              errorResetBoundary: p,
              throwOnError: s.throwOnError,
              query: o.getQueryCache().get(s.queryHash),
            })
          );
        });
        if (null == B ? void 0 : B.error) throw B.error;
        return C(b());
      }
    },
    17918: (t, e, s) => {
      s.d(e, { $: () => o, s: () => a });
      var r = s(75791),
        i = s(16166),
        n = s(96134),
        a = class extends i.k {
          #r;
          #l;
          #d;
          constructor(t) {
            super(),
              (this.mutationId = t.mutationId),
              (this.#l = t.mutationCache),
              (this.#r = []),
              (this.state = t.state || o()),
              this.setOptions(t.options),
              this.scheduleGc();
          }
          setOptions(t) {
            (this.options = t), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(t) {
            this.#r.includes(t) ||
              (this.#r.push(t),
              this.clearGcTimeout(),
              this.#l.notify({
                type: "observerAdded",
                mutation: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            (this.#r = this.#r.filter((e) => e !== t)),
              this.scheduleGc(),
              this.#l.notify({
                type: "observerRemoved",
                mutation: this,
                observer: t,
              });
          }
          optionalRemove() {
            this.#r.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#l.remove(this));
          }
          continue() {
            return this.#d?.continue() ?? this.execute(this.state.variables);
          }
          async execute(t) {
            this.#d = (0, n.II)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (t, e) => {
                this.#E({ type: "failed", failureCount: t, error: e });
              },
              onPause: () => {
                this.#E({ type: "pause" });
              },
              onContinue: () => {
                this.#E({ type: "continue" });
              },
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#l.canRun(this),
            });
            let e = "pending" === this.state.status,
              s = !this.#d.canStart();
            try {
              if (!e) {
                this.#E({ type: "pending", variables: t, isPaused: s }),
                  await this.#l.config.onMutate?.(t, this);
                let e = await this.options.onMutate?.(t);
                e !== this.state.context &&
                  this.#E({
                    type: "pending",
                    context: e,
                    variables: t,
                    isPaused: s,
                  });
              }
              let r = await this.#d.start();
              return (
                await this.#l.config.onSuccess?.(
                  r,
                  t,
                  this.state.context,
                  this,
                ),
                await this.options.onSuccess?.(r, t, this.state.context),
                await this.#l.config.onSettled?.(
                  r,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                ),
                await this.options.onSettled?.(r, null, t, this.state.context),
                this.#E({ type: "success", data: r }),
                r
              );
            } catch (e) {
              try {
                throw (
                  (await this.#l.config.onError?.(
                    e,
                    t,
                    this.state.context,
                    this,
                  ),
                  await this.options.onError?.(e, t, this.state.context),
                  await this.#l.config.onSettled?.(
                    void 0,
                    e,
                    this.state.variables,
                    this.state.context,
                    this,
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    e,
                    t,
                    this.state.context,
                  ),
                  e)
                );
              } finally {
                this.#E({ type: "error", error: e });
              }
            } finally {
              this.#l.runNext(this);
            }
          }
          #E(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case "failed":
                  return {
                    ...e,
                    failureCount: t.failureCount,
                    failureReason: t.error,
                  };
                case "pause":
                  return { ...e, isPaused: !0 };
                case "continue":
                  return { ...e, isPaused: !1 };
                case "pending":
                  return {
                    ...e,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: t.isPaused,
                    status: "pending",
                    variables: t.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...e,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...e,
                    data: void 0,
                    error: t.error,
                    failureCount: e.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              r.j.batch(() => {
                this.#r.forEach((e) => {
                  e.onMutationUpdate(t);
                }),
                  this.#l.notify({
                    mutation: this,
                    type: "updated",
                    action: t,
                  });
              });
          }
        };
      function o() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    19549: (t, e, s) => {
      s.d(e, { z: () => n });
      var r = s(97065),
        i = s(43277),
        n = class extends r.$ {
          constructor(t, e) {
            super(t, e);
          }
          bindMethods() {
            super.bindMethods(),
              (this.fetchNextPage = this.fetchNextPage.bind(this)),
              (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
          }
          setOptions(t, e) {
            super.setOptions({ ...t, behavior: (0, i.PL)() }, e);
          }
          getOptimisticResult(t) {
            return (t.behavior = (0, i.PL)()), super.getOptimisticResult(t);
          }
          fetchNextPage(t) {
            return this.fetch({
              ...t,
              meta: { fetchMore: { direction: "forward" } },
            });
          }
          fetchPreviousPage(t) {
            return this.fetch({
              ...t,
              meta: { fetchMore: { direction: "backward" } },
            });
          }
          createResult(t, e) {
            let { state: s } = t,
              r = super.createResult(t, e),
              {
                isFetching: n,
                isRefetching: a,
                isError: o,
                isRefetchError: u,
              } = r,
              h = s.fetchMeta?.fetchMore?.direction,
              c = o && "forward" === h,
              l = n && "forward" === h,
              d = o && "backward" === h,
              E = n && "backward" === h;
            return {
              ...r,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, i.rB)(e, s.data),
              hasPreviousPage: (0, i.RQ)(e, s.data),
              isFetchNextPageError: c,
              isFetchingNextPage: l,
              isFetchPreviousPageError: d,
              isFetchingPreviousPage: E,
              isRefetchError: u && !c && !d,
              isRefetching: a && !l && !E,
            };
          }
        };
    },
    25197: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    42042: (t, e) => {
      var s;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BLOCKS = void 0),
        (function (t) {
          (t.DOCUMENT = "document"),
            (t.PARAGRAPH = "paragraph"),
            (t.HEADING_1 = "heading-1"),
            (t.HEADING_2 = "heading-2"),
            (t.HEADING_3 = "heading-3"),
            (t.HEADING_4 = "heading-4"),
            (t.HEADING_5 = "heading-5"),
            (t.HEADING_6 = "heading-6"),
            (t.OL_LIST = "ordered-list"),
            (t.UL_LIST = "unordered-list"),
            (t.LIST_ITEM = "list-item"),
            (t.HR = "hr"),
            (t.QUOTE = "blockquote"),
            (t.EMBEDDED_ENTRY = "embedded-entry-block"),
            (t.EMBEDDED_ASSET = "embedded-asset-block"),
            (t.EMBEDDED_RESOURCE = "embedded-resource-block"),
            (t.TABLE = "table"),
            (t.TABLE_ROW = "table-row"),
            (t.TABLE_CELL = "table-cell"),
            (t.TABLE_HEADER_CELL = "table-header-cell");
        })(s || (e.BLOCKS = s = {}));
    },
    43277: (t, e, s) => {
      s.d(e, { PL: () => i, RQ: () => u, rB: () => o });
      var r = s(54642);
      function i(t) {
        return {
          onFetch: (e, s) => {
            let i = async () => {
              let s;
              let i = e.options,
                o = e.fetchOptions?.meta?.fetchMore?.direction,
                u = e.state.data?.pages || [],
                h = e.state.data?.pageParams || [],
                c = !1,
                l = (t) => {
                  Object.defineProperty(t, "signal", {
                    enumerable: !0,
                    get: () => (
                      e.signal.aborted
                        ? (c = !0)
                        : e.signal.addEventListener("abort", () => {
                            c = !0;
                          }),
                      e.signal
                    ),
                  });
                },
                d =
                  e.options.queryFn && e.options.queryFn !== r.hT
                    ? e.options.queryFn
                    : () =>
                        Promise.reject(
                          Error(`Missing queryFn: '${e.options.queryHash}'`),
                        ),
                E = async (t, s, i) => {
                  if (c) return Promise.reject();
                  if (null == s && t.pages.length) return Promise.resolve(t);
                  let n = {
                    queryKey: e.queryKey,
                    pageParam: s,
                    direction: i ? "backward" : "forward",
                    meta: e.options.meta,
                  };
                  l(n);
                  let a = await d(n),
                    { maxPages: o } = e.options,
                    u = i ? r.ZZ : r.y9;
                  return {
                    pages: u(t.pages, a, o),
                    pageParams: u(t.pageParams, s, o),
                  };
                };
              if (o && u.length) {
                let t = "backward" === o,
                  e = { pages: u, pageParams: h },
                  r = (t ? a : n)(i, e);
                s = await E(e, r, t);
              } else {
                s = await E(
                  { pages: [], pageParams: [] },
                  h[0] ?? i.initialPageParam,
                );
                let e = t ?? u.length;
                for (let t = 1; t < e; t++) {
                  let t = n(i, s);
                  s = await E(s, t);
                }
              }
              return s;
            };
            e.options.persister
              ? (e.fetchFn = () =>
                  e.options.persister?.(
                    i,
                    {
                      queryKey: e.queryKey,
                      meta: e.options.meta,
                      signal: e.signal,
                    },
                    s,
                  ))
              : (e.fetchFn = i);
          },
        };
      }
      function n(t, { pages: e, pageParams: s }) {
        let r = e.length - 1;
        return t.getNextPageParam(e[r], e, s[r], s);
      }
      function a(t, { pages: e, pageParams: s }) {
        return t.getPreviousPageParam?.(e[0], e, s[0], s);
      }
      function o(t, e) {
        return !!e && null != n(t, e);
      }
      function u(t, e) {
        return !!e && !!t.getPreviousPageParam && null != a(t, e);
      }
    },
    70241: function (t, e, s) {
      var r,
        i =
          (this && this.__spreadArray) ||
          function (t, e, s) {
            if (s || 2 == arguments.length)
              for (var r, i = 0, n = e.length; i < n; i++)
                (!r && i in e) ||
                  (r || (r = Array.prototype.slice.call(e, 0, i)),
                  (r[i] = e[i]));
            return t.concat(r || Array.prototype.slice.call(e));
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.V1_MARKS =
          e.V1_NODE_TYPES =
          e.TEXT_CONTAINERS =
          e.HEADINGS =
          e.CONTAINERS =
          e.VOID_BLOCKS =
          e.TABLE_BLOCKS =
          e.LIST_ITEM_BLOCKS =
          e.TOP_LEVEL_BLOCKS =
            void 0);
      var n = s(42042),
        a = s(96978),
        o = s(82190);
      (e.TOP_LEVEL_BLOCKS = [
        n.BLOCKS.PARAGRAPH,
        n.BLOCKS.HEADING_1,
        n.BLOCKS.HEADING_2,
        n.BLOCKS.HEADING_3,
        n.BLOCKS.HEADING_4,
        n.BLOCKS.HEADING_5,
        n.BLOCKS.HEADING_6,
        n.BLOCKS.OL_LIST,
        n.BLOCKS.UL_LIST,
        n.BLOCKS.HR,
        n.BLOCKS.QUOTE,
        n.BLOCKS.EMBEDDED_ENTRY,
        n.BLOCKS.EMBEDDED_ASSET,
        n.BLOCKS.EMBEDDED_RESOURCE,
        n.BLOCKS.TABLE,
      ]),
        (e.LIST_ITEM_BLOCKS = [
          n.BLOCKS.PARAGRAPH,
          n.BLOCKS.HEADING_1,
          n.BLOCKS.HEADING_2,
          n.BLOCKS.HEADING_3,
          n.BLOCKS.HEADING_4,
          n.BLOCKS.HEADING_5,
          n.BLOCKS.HEADING_6,
          n.BLOCKS.OL_LIST,
          n.BLOCKS.UL_LIST,
          n.BLOCKS.HR,
          n.BLOCKS.QUOTE,
          n.BLOCKS.EMBEDDED_ENTRY,
          n.BLOCKS.EMBEDDED_ASSET,
          n.BLOCKS.EMBEDDED_RESOURCE,
        ]),
        (e.TABLE_BLOCKS = [
          n.BLOCKS.TABLE,
          n.BLOCKS.TABLE_ROW,
          n.BLOCKS.TABLE_CELL,
          n.BLOCKS.TABLE_HEADER_CELL,
        ]),
        (e.VOID_BLOCKS = [
          n.BLOCKS.HR,
          n.BLOCKS.EMBEDDED_ENTRY,
          n.BLOCKS.EMBEDDED_ASSET,
          n.BLOCKS.EMBEDDED_RESOURCE,
        ]),
        ((r = {})[n.BLOCKS.OL_LIST] = [n.BLOCKS.LIST_ITEM]),
        (r[n.BLOCKS.UL_LIST] = [n.BLOCKS.LIST_ITEM]),
        (r[n.BLOCKS.LIST_ITEM] = e.LIST_ITEM_BLOCKS),
        (r[n.BLOCKS.QUOTE] = [n.BLOCKS.PARAGRAPH]),
        (r[n.BLOCKS.TABLE] = [n.BLOCKS.TABLE_ROW]),
        (r[n.BLOCKS.TABLE_ROW] = [
          n.BLOCKS.TABLE_CELL,
          n.BLOCKS.TABLE_HEADER_CELL,
        ]),
        (r[n.BLOCKS.TABLE_CELL] = [n.BLOCKS.PARAGRAPH]),
        (r[n.BLOCKS.TABLE_HEADER_CELL] = [n.BLOCKS.PARAGRAPH]),
        (e.CONTAINERS = r),
        (e.HEADINGS = [
          n.BLOCKS.HEADING_1,
          n.BLOCKS.HEADING_2,
          n.BLOCKS.HEADING_3,
          n.BLOCKS.HEADING_4,
          n.BLOCKS.HEADING_5,
          n.BLOCKS.HEADING_6,
        ]),
        (e.TEXT_CONTAINERS = i([n.BLOCKS.PARAGRAPH], e.HEADINGS, !0)),
        (e.V1_NODE_TYPES = [
          n.BLOCKS.DOCUMENT,
          n.BLOCKS.PARAGRAPH,
          n.BLOCKS.HEADING_1,
          n.BLOCKS.HEADING_2,
          n.BLOCKS.HEADING_3,
          n.BLOCKS.HEADING_4,
          n.BLOCKS.HEADING_5,
          n.BLOCKS.HEADING_6,
          n.BLOCKS.OL_LIST,
          n.BLOCKS.UL_LIST,
          n.BLOCKS.LIST_ITEM,
          n.BLOCKS.HR,
          n.BLOCKS.QUOTE,
          n.BLOCKS.EMBEDDED_ENTRY,
          n.BLOCKS.EMBEDDED_ASSET,
          a.INLINES.HYPERLINK,
          a.INLINES.ENTRY_HYPERLINK,
          a.INLINES.ASSET_HYPERLINK,
          a.INLINES.EMBEDDED_ENTRY,
          "text",
        ]),
        (e.V1_MARKS = [
          o.MARKS.BOLD,
          o.MARKS.CODE,
          o.MARKS.ITALIC,
          o.MARKS.UNDERLINE,
        ]);
    },
    70337: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    81093: (t, e, s) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isText = e.isBlock = e.isInline = void 0);
      var r = s(42042),
        i = s(96978);
      function n(t, e) {
        for (var s = 0, r = Object.keys(t); s < r.length; s++)
          if (e === t[r[s]]) return !0;
        return !1;
      }
      (e.isInline = function (t) {
        return n(i.INLINES, t.nodeType);
      }),
        (e.isBlock = function (t) {
          return n(r.BLOCKS, t.nodeType);
        }),
        (e.isText = function (t) {
          return "text" === t.nodeType;
        });
    },
    82190: (t, e) => {
      var s;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.MARKS = void 0),
        (function (t) {
          (t.BOLD = "bold"),
            (t.ITALIC = "italic"),
            (t.UNDERLINE = "underline"),
            (t.CODE = "code"),
            (t.SUPERSCRIPT = "superscript"),
            (t.SUBSCRIPT = "subscript");
        })(s || (e.MARKS = s = {}));
    },
    93695: (t, e, s) => {
      s.d(e, { useMutation: () => l });
      var r = s(34023),
        i = s(17918),
        n = s(75791),
        a = s(56728),
        o = s(54642),
        u = class extends a.Q {
          #t;
          #O = void 0;
          #p;
          #L;
          constructor(t, e) {
            super(),
              (this.#t = t),
              this.setOptions(e),
              this.bindMethods(),
              this.#S();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(t) {
            let e = this.options;
            (this.options = this.#t.defaultMutationOptions(t)),
              (0, o.f8)(this.options, e) ||
                this.#t
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#p,
                    observer: this,
                  }),
              e?.mutationKey &&
              this.options.mutationKey &&
              (0, o.EN)(e.mutationKey) !== (0, o.EN)(this.options.mutationKey)
                ? this.reset()
                : this.#p?.state.status === "pending" &&
                  this.#p.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#p?.removeObserver(this);
          }
          onMutationUpdate(t) {
            this.#S(), this.#h(t);
          }
          getCurrentResult() {
            return this.#O;
          }
          reset() {
            this.#p?.removeObserver(this),
              (this.#p = void 0),
              this.#S(),
              this.#h();
          }
          mutate(t, e) {
            return (
              (this.#L = e),
              this.#p?.removeObserver(this),
              (this.#p = this.#t
                .getMutationCache()
                .build(this.#t, this.options)),
              this.#p.addObserver(this),
              this.#p.execute(t)
            );
          }
          #S() {
            let t = this.#p?.state ?? (0, i.$)();
            this.#O = {
              ...t,
              isPending: "pending" === t.status,
              isSuccess: "success" === t.status,
              isError: "error" === t.status,
              isIdle: "idle" === t.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #h(t) {
            n.j.batch(() => {
              if (this.#L && this.hasListeners()) {
                let e = this.#O.variables,
                  s = this.#O.context;
                t?.type === "success"
                  ? (this.#L.onSuccess?.(t.data, e, s),
                    this.#L.onSettled?.(t.data, null, e, s))
                  : t?.type === "error" &&
                    (this.#L.onError?.(t.error, e, s),
                    this.#L.onSettled?.(void 0, t.error, e, s));
              }
              this.listeners.forEach((t) => {
                t(this.#O);
              });
            });
          }
        },
        h = s(2873),
        c = s(29838);
      function l(t, e) {
        let s = (0, h.useQueryClient)(e),
          [i] = r.useState(() => new u(s, t));
        r.useEffect(() => {
          i.setOptions(t);
        }, [i, t]);
        let a = r.useSyncExternalStore(
            r.useCallback((t) => i.subscribe(n.j.batchCalls(t)), [i]),
            () => i.getCurrentResult(),
            () => i.getCurrentResult(),
          ),
          o = r.useCallback(
            (t, e) => {
              i.mutate(t, e).catch(c.l);
            },
            [i],
          );
        if (a.error && (0, c.G)(i.options.throwOnError, [a.error]))
          throw a.error;
        return { ...a, mutate: o, mutateAsync: a.mutate };
      }
    },
    96978: (t, e) => {
      var s;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.INLINES = void 0),
        (function (t) {
          (t.HYPERLINK = "hyperlink"),
            (t.ENTRY_HYPERLINK = "entry-hyperlink"),
            (t.ASSET_HYPERLINK = "asset-hyperlink"),
            (t.RESOURCE_HYPERLINK = "resource-hyperlink"),
            (t.EMBEDDED_ENTRY = "embedded-entry-inline"),
            (t.EMBEDDED_RESOURCE = "embedded-resource-inline");
        })(s || (e.INLINES = s = {}));
    },
  },
]);
