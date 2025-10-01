"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3146],
  {
    13186: (e, t, n) => {
      n.d(t, { Q: () => rs, A: () => ru });
      var r,
        i,
        o,
        s,
        u,
        a,
        c = n(90535),
        l = n(40165),
        d = function (e) {
          return function () {
            var t = (0, c.Cl)({}, e.config);
            return { logger: t.loggerProvider, logLevel: t.logLevel };
          };
        },
        f = function (e, t) {
          var n, r;
          t = (t = t.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "");
          try {
            for (
              var i = (0, c.Ju)(t.split(".")), o = i.next();
              !o.done;
              o = i.next()
            ) {
              var s = o.value;
              if (!(s in e)) return;
              e = e[s];
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              o && !o.done && (r = i.return) && r.call(i);
            } finally {
              if (n) throw n.error;
            }
          }
          return e;
        },
        v = function (e, t) {
          return function () {
            var n,
              r,
              i = {};
            try {
              for (var o = (0, c.Ju)(t), s = o.next(); !s.done; s = o.next()) {
                var u = s.value;
                i[u] = f(e, u);
              }
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                s && !s.done && (r = o.return) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
            return i;
          };
        },
        h = function (e, t, n, r, i) {
          return (
            void 0 === i && (i = null),
            function () {
              for (var o = [], s = 0; s < arguments.length; s++)
                o[s] = arguments[s];
              var u = n(),
                a = u.logger,
                c = u.logLevel;
              if ((c && c < l.$.Debug) || !c || !a) return e.apply(i, o);
              var d = {
                type: "invoke public method",
                name: t,
                args: o,
                stacktrace: (Error().stack || "")
                  .split("\n")
                  .slice(3)
                  .map(function (e) {
                    return e.trim();
                  }),
                time: { start: new Date().toISOString() },
                states: {},
              };
              r && d.states && (d.states.before = r());
              var f = e.apply(i, o);
              return (
                f && f.promise
                  ? f.promise.then(function () {
                      r && d.states && (d.states.after = r()),
                        d.time && (d.time.end = new Date().toISOString()),
                        a.debug(JSON.stringify(d, null, 2));
                    })
                  : (r && d.states && (d.states.after = r()),
                    d.time && (d.time.end = new Date().toISOString()),
                    a.debug(JSON.stringify(d, null, 2))),
                f
              );
            }
          );
        },
        p = function (e) {
          return { promise: e || Promise.resolve() };
        },
        g = n(87291),
        m = n(48658),
        y = function (e, t) {
          var n = Math.max(t, 1);
          return e.reduce(function (e, t, r) {
            var i = Math.floor(r / n);
            return e[i] || (e[i] = []), e[i].push(t), e;
          }, []);
        },
        b = function (e, t, n) {
          return (
            void 0 === t && (t = 0),
            void 0 === n && (n = g.n.Unknown),
            { event: e, code: t, message: n }
          );
        },
        w = "Amplitude Logger ",
        _ = (function () {
          function e() {
            this.logLevel = l.$.None;
          }
          return (
            (e.prototype.disable = function () {
              this.logLevel = l.$.None;
            }),
            (e.prototype.enable = function (e) {
              void 0 === e && (e = l.$.Warn), (this.logLevel = e);
            }),
            (e.prototype.log = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              !(this.logLevel < l.$.Verbose) &&
                console.log("".concat(w, "[Log]: ").concat(e.join(" ")));
            }),
            (e.prototype.warn = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              !(this.logLevel < l.$.Warn) &&
                console.warn("".concat(w, "[Warn]: ").concat(e.join(" ")));
            }),
            (e.prototype.error = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              !(this.logLevel < l.$.Error) &&
                console.error("".concat(w, "[Error]: ").concat(e.join(" ")));
            }),
            (e.prototype.debug = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              !(this.logLevel < l.$.Debug) &&
                console.log("".concat(w, "[Debug]: ").concat(e.join(" ")));
            }),
            e
          );
        })(),
        E = function () {
          return {
            flushMaxRetries: 12,
            flushQueueSize: 200,
            flushIntervalMillis: 1e4,
            instanceName: "$default_instance",
            logLevel: l.$.Warn,
            loggerProvider: new _(),
            offline: !1,
            optOut: !1,
            serverUrl: m.mJ,
            serverZone: "US",
            useBatch: !1,
          };
        },
        S = (function () {
          function e(e) {
            this._optOut = !1;
            var t,
              n,
              r,
              i,
              o = E();
            (this.apiKey = e.apiKey),
              (this.flushIntervalMillis =
                null !== (t = e.flushIntervalMillis) && void 0 !== t
                  ? t
                  : o.flushIntervalMillis),
              (this.flushMaxRetries = e.flushMaxRetries || o.flushMaxRetries),
              (this.flushQueueSize = e.flushQueueSize || o.flushQueueSize),
              (this.instanceName = e.instanceName || o.instanceName),
              (this.loggerProvider = e.loggerProvider || o.loggerProvider),
              (this.logLevel =
                null !== (n = e.logLevel) && void 0 !== n ? n : o.logLevel),
              (this.minIdLength = e.minIdLength),
              (this.plan = e.plan),
              (this.ingestionMetadata = e.ingestionMetadata),
              (this.offline = void 0 !== e.offline ? e.offline : o.offline),
              (this.optOut =
                null !== (r = e.optOut) && void 0 !== r ? r : o.optOut),
              (this.serverUrl = e.serverUrl),
              (this.serverZone = e.serverZone || o.serverZone),
              (this.storageProvider = e.storageProvider),
              (this.transportProvider = e.transportProvider),
              (this.useBatch =
                null !== (i = e.useBatch) && void 0 !== i ? i : o.useBatch),
              this.loggerProvider.enable(this.logLevel);
            var s = I(e.serverUrl, e.serverZone, e.useBatch);
            (this.serverZone = s.serverZone), (this.serverUrl = s.serverUrl);
          }
          return (
            Object.defineProperty(e.prototype, "optOut", {
              get: function () {
                return this._optOut;
              },
              set: function (e) {
                this._optOut = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(),
        I = function (e, t, n) {
          if (
            (void 0 === e && (e = ""),
            void 0 === t && (t = E().serverZone),
            void 0 === n && (n = E().useBatch),
            e)
          )
            return { serverUrl: e, serverZone: void 0 };
          var r,
            i = ["US", "EU"].includes(t) ? t : E().serverZone;
          return {
            serverZone: i,
            serverUrl:
              ((r = n), "EU" === i ? (r ? m.OP : m.bu) : r ? m.pL : m.mJ),
          };
        },
        T = (function () {
          function e() {
            this.sdk = { metrics: { histogram: {} } };
          }
          return (
            (e.prototype.recordHistogram = function (e, t) {
              this.sdk.metrics.histogram[e] = t;
            }),
            e
          );
        })(),
        k = function (e) {
          return e
            ? (e ^ ((16 * Math.random()) >> (e / 4))).toString(16)
            : (
                String(1e7) +
                String(-1e3) +
                String(-4e3) +
                String(-8e3) +
                String(-1e11)
              ).replace(/[018]/g, k);
        };
      function C(e) {
        var t = "";
        try {
          "body" in e && (t = JSON.stringify(e.body, null, 2));
        } catch (e) {}
        return t;
      }
      var P = (function () {
          function e() {
            (this.name = "amplitude"),
              (this.type = "destination"),
              (this.retryTimeout = 1e3),
              (this.throttleTimeout = 3e4),
              (this.storageKey = ""),
              (this.scheduled = null),
              (this.queue = []);
          }
          return (
            (e.prototype.setup = function (e) {
              var t;
              return (0, c.sH)(this, void 0, void 0, function () {
                var n,
                  r = this;
                return (0, c.YH)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (this.config = e),
                        (this.storageKey = ""
                          .concat(m.fS, "_")
                          .concat(this.config.apiKey.substring(0, 10))),
                        [
                          4,
                          null === (t = this.config.storageProvider) ||
                          void 0 === t
                            ? void 0
                            : t.get(this.storageKey),
                        ]
                      );
                    case 1:
                      return (
                        (n = i.sent()) &&
                          n.length > 0 &&
                          Promise.all(
                            n.map(function (e) {
                              return r.execute(e);
                            }),
                          ).catch(),
                        [2, Promise.resolve(void 0)]
                      );
                  }
                });
              });
            }),
            (e.prototype.execute = function (e) {
              var t = this;
              return (
                e.insert_id || (e.insert_id = k()),
                new Promise(function (n) {
                  t.addToQueue({
                    event: e,
                    attempts: 0,
                    callback: function (e) {
                      return n(e);
                    },
                    timeout: 0,
                  });
                })
              );
            }),
            (e.prototype.getTryableList = function (e) {
              var t = this;
              return e.filter(function (e) {
                return e.attempts < t.config.flushMaxRetries
                  ? ((e.attempts += 1), !0)
                  : (t.fulfillRequest(
                      [e],
                      500,
                      "Event rejected due to exceeded retry count",
                    ),
                    !1);
              });
            }),
            (e.prototype.scheduleTryable = function (e, t) {
              var n = this;
              void 0 === t && (t = !1),
                e.forEach(function (e) {
                  if ((t && (n.queue = n.queue.concat(e)), 0 === e.timeout)) {
                    n.schedule(n.config.flushIntervalMillis);
                    return;
                  }
                  setTimeout(function () {
                    (e.timeout = 0), n.schedule(0);
                  }, e.timeout);
                });
            }),
            (e.prototype.addToQueue = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var n = this.getTryableList(e);
              this.scheduleTryable(n, !0), this.saveEvents();
            }),
            (e.prototype.schedule = function (e) {
              var t = this;
              !this.scheduled &&
                !this.config.offline &&
                (this.scheduled = setTimeout(function () {
                  t.flush(!0).then(function () {
                    t.queue.length > 0 && t.schedule(e);
                  });
                }, e));
            }),
            (e.prototype.flush = function (e) {
              return (
                void 0 === e && (e = !1),
                (0, c.sH)(this, void 0, void 0, function () {
                  var t,
                    n,
                    r = this;
                  return (0, c.YH)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        if (this.config.offline)
                          return (
                            this.config.loggerProvider.debug(
                              "Skipping flush while offline.",
                            ),
                            [2]
                          );
                        return (
                          (t = []),
                          (n = []),
                          this.queue.forEach(function (e) {
                            return 0 === e.timeout ? t.push(e) : n.push(e);
                          }),
                          this.scheduled &&
                            (clearTimeout(this.scheduled),
                            (this.scheduled = null)),
                          [
                            4,
                            Promise.all(
                              y(t, this.config.flushQueueSize).map(
                                function (t) {
                                  return r.send(t, e);
                                },
                              ),
                            ),
                          ]
                        );
                      case 1:
                        return i.sent(), this.scheduleTryable(n), [2];
                    }
                  });
                })
              );
            }),
            (e.prototype.send = function (e, t) {
              return (
                void 0 === t && (t = !0),
                (0, c.sH)(this, void 0, void 0, function () {
                  var n, r, i, o;
                  return (0, c.YH)(this, function (s) {
                    switch (s.label) {
                      case 0:
                        if (!this.config.apiKey)
                          return [
                            2,
                            this.fulfillRequest(
                              e,
                              400,
                              "Event rejected due to missing API key",
                            ),
                          ];
                        (n = {
                          api_key: this.config.apiKey,
                          events: e.map(function (e) {
                            var t = e.event;
                            return t.extra, (0, c.Tt)(t, ["extra"]);
                          }),
                          options: { min_id_length: this.config.minIdLength },
                          client_upload_time: new Date().toISOString(),
                          request_metadata: this.config.requestMetadata,
                        }),
                          (this.config.requestMetadata = new T()),
                          (s.label = 1);
                      case 1:
                        return (
                          s.trys.push([1, 3, , 4]),
                          (r = I(
                            this.config.serverUrl,
                            this.config.serverZone,
                            this.config.useBatch,
                          ).serverUrl),
                          [4, this.config.transportProvider.send(r, n)]
                        );
                      case 2:
                        if (null === (i = s.sent()))
                          return (
                            this.fulfillRequest(
                              e,
                              0,
                              "Unexpected error occurred",
                            ),
                            [2]
                          );
                        if (!t)
                          return (
                            "body" in i
                              ? this.fulfillRequest(
                                  e,
                                  i.statusCode,
                                  "".concat(i.status, ": ").concat(C(i)),
                                )
                              : this.fulfillRequest(e, i.statusCode, i.status),
                            [2]
                          );
                        return this.handleResponse(i, e), [3, 4];
                      case 3:
                        var u;
                        return (
                          (o =
                            (u = s.sent()) instanceof Error
                              ? u.message
                              : String(u)),
                          this.config.loggerProvider.error(o),
                          this.handleResponse(
                            { status: g.n.Failed, statusCode: 0 },
                            e,
                          ),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                  });
                })
              );
            }),
            (e.prototype.handleResponse = function (e, t) {
              var n = e.status;
              switch (n) {
                case g.n.Success:
                  this.handleSuccessResponse(e, t);
                  break;
                case g.n.Invalid:
                  this.handleInvalidResponse(e, t);
                  break;
                case g.n.PayloadTooLarge:
                  this.handlePayloadTooLargeResponse(e, t);
                  break;
                case g.n.RateLimit:
                  this.handleRateLimitResponse(e, t);
                  break;
                default:
                  this.config.loggerProvider.warn(
                    "{code: 0, error: \"Status '"
                      .concat(n, "' provided for ")
                      .concat(t.length, ' events"}'),
                  ),
                    this.handleOtherResponse(t);
              }
            }),
            (e.prototype.handleSuccessResponse = function (e, t) {
              this.fulfillRequest(
                t,
                e.statusCode,
                "Event tracked successfully",
              );
            }),
            (e.prototype.handleInvalidResponse = function (e, t) {
              var n = this;
              if (
                e.body.missingField ||
                e.body.error.startsWith("Invalid API key")
              ) {
                this.fulfillRequest(t, e.statusCode, e.body.error);
                return;
              }
              var r = new Set(
                  (0, c.fX)(
                    (0, c.fX)(
                      (0, c.fX)(
                        (0, c.fX)(
                          [],
                          (0, c.zs)(
                            Object.values(e.body.eventsWithInvalidFields),
                          ),
                          !1,
                        ),
                        (0, c.zs)(
                          Object.values(e.body.eventsWithMissingFields),
                        ),
                        !1,
                      ),
                      (0, c.zs)(
                        Object.values(e.body.eventsWithInvalidIdLengths),
                      ),
                      !1,
                    ),
                    (0, c.zs)(e.body.silencedEvents),
                    !1,
                  ).flat(),
                ),
                i = t.filter(function (t, i) {
                  if (r.has(i)) {
                    n.fulfillRequest([t], e.statusCode, e.body.error);
                    return;
                  }
                  return !0;
                });
              i.length > 0 && this.config.loggerProvider.warn(C(e));
              var o = this.getTryableList(i);
              this.scheduleTryable(o);
            }),
            (e.prototype.handlePayloadTooLargeResponse = function (e, t) {
              if (1 === t.length) {
                this.fulfillRequest(t, e.statusCode, e.body.error);
                return;
              }
              this.config.loggerProvider.warn(C(e)),
                (this.config.flushQueueSize /= 2);
              var n = this.getTryableList(t);
              this.scheduleTryable(n);
            }),
            (e.prototype.handleRateLimitResponse = function (e, t) {
              var n = this,
                r = Object.keys(e.body.exceededDailyQuotaUsers),
                i = Object.keys(e.body.exceededDailyQuotaDevices),
                o = e.body.throttledEvents,
                s = new Set(r),
                u = new Set(i),
                a = new Set(o),
                c = t.filter(function (t, r) {
                  if (
                    (t.event.user_id && s.has(t.event.user_id)) ||
                    (t.event.device_id && u.has(t.event.device_id))
                  ) {
                    n.fulfillRequest([t], e.statusCode, e.body.error);
                    return;
                  }
                  return a.has(r) && (t.timeout = n.throttleTimeout), !0;
                });
              c.length > 0 && this.config.loggerProvider.warn(C(e));
              var l = this.getTryableList(c);
              this.scheduleTryable(l);
            }),
            (e.prototype.handleOtherResponse = function (e) {
              var t = this,
                n = e.map(function (e) {
                  return (e.timeout = e.attempts * t.retryTimeout), e;
                }),
                r = this.getTryableList(n);
              this.scheduleTryable(r);
            }),
            (e.prototype.fulfillRequest = function (e, t, n) {
              this.removeEvents(e),
                e.forEach(function (e) {
                  return e.callback(b(e.event, t, n));
                });
            }),
            (e.prototype.saveEvents = function () {
              if (this.config.storageProvider) {
                var e = this.queue.map(function (e) {
                  return e.event;
                });
                this.config.storageProvider.set(this.storageKey, e);
              }
            }),
            (e.prototype.removeEvents = function (e) {
              (this.queue = this.queue.filter(function (t) {
                return !e.some(function (e) {
                  return e.event.insert_id === t.event.insert_id;
                });
              })),
                this.saveEvents();
            }),
            e
          );
        })(),
        O = n(16609),
        A = n(97275),
        x = (function () {
          function e(e) {
            (this.client = e),
              (this.queue = []),
              (this.applying = !1),
              (this.plugins = []);
          }
          return (
            (e.prototype.register = function (e, t) {
              var n, r;
              return (0, c.sH)(this, void 0, void 0, function () {
                return (0, c.YH)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (
                        this.plugins.some(function (t) {
                          return t.name === e.name;
                        })
                      )
                        return (
                          t.loggerProvider.warn(
                            "Plugin with name ".concat(
                              e.name,
                              " already exists, skipping registration",
                            ),
                          ),
                          [2]
                        );
                      return (
                        void 0 === e.name &&
                          ((e.name = k()),
                          t.loggerProvider.warn(
                            "Plugin name is undefined. \n      Generating a random UUID for plugin name: ".concat(
                              e.name,
                              ". \n      Set a name for the plugin to prevent it from being added multiple times.",
                            ),
                          )),
                        (e.type =
                          null !== (n = e.type) && void 0 !== n
                            ? n
                            : "enrichment"),
                        [
                          4,
                          null === (r = e.setup) || void 0 === r
                            ? void 0
                            : r.call(e, t, this.client),
                        ]
                      );
                    case 1:
                      return i.sent(), this.plugins.push(e), [2];
                  }
                });
              });
            }),
            (e.prototype.deregister = function (e) {
              var t;
              return (0, c.sH)(this, void 0, void 0, function () {
                var n, r;
                return (0, c.YH)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (n = this.plugins.findIndex(function (t) {
                          return t.name === e;
                        })),
                        (r = this.plugins[n]),
                        this.plugins.splice(n, 1),
                        [
                          4,
                          null === (t = r.teardown) || void 0 === t
                            ? void 0
                            : t.call(r),
                        ]
                      );
                    case 1:
                      return i.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.reset = function (e) {
              (this.applying = !1),
                this.plugins.map(function (e) {
                  var t;
                  return null === (t = e.teardown) || void 0 === t
                    ? void 0
                    : t.call(e);
                }),
                (this.plugins = []),
                (this.client = e);
            }),
            (e.prototype.push = function (e) {
              var t = this;
              return new Promise(function (n) {
                t.queue.push([e, n]), t.scheduleApply(0);
              });
            }),
            (e.prototype.scheduleApply = function (e) {
              var t = this;
              this.applying ||
                ((this.applying = !0),
                setTimeout(function () {
                  t.apply(t.queue.shift()).then(function () {
                    (t.applying = !1), t.queue.length > 0 && t.scheduleApply(0);
                  });
                }, e));
            }),
            (e.prototype.apply = function (e) {
              return (0, c.sH)(this, void 0, void 0, function () {
                var t, n, r, i, o, s, u, a, l, d, f, v, h, p;
                return (0, c.YH)(this, function (g) {
                  switch (g.label) {
                    case 0:
                      if (!e) return [2];
                      (t = (0, c.zs)(e, 1)[0]),
                        (n = (0, c.zs)(e, 2)[1]),
                        (r = this.plugins.filter(function (e) {
                          return "before" === e.type;
                        })),
                        (g.label = 1);
                    case 1:
                      g.trys.push([1, 6, 7, 8]),
                        (o = (i = (0, c.Ju)(r)).next()),
                        (g.label = 2);
                    case 2:
                      if (o.done) return [3, 5];
                      if (!(s = o.value).execute) return [3, 4];
                      return [4, s.execute((0, c.Cl)({}, t))];
                    case 3:
                      if (null === (u = g.sent()))
                        return n({ event: t, code: 0, message: "" }), [2];
                      (t = u), (g.label = 4);
                    case 4:
                      return (o = i.next()), [3, 2];
                    case 5:
                      return [3, 8];
                    case 6:
                      return (f = { error: g.sent() }), [3, 8];
                    case 7:
                      try {
                        o && !o.done && (v = i.return) && v.call(i);
                      } finally {
                        if (f) throw f.error;
                      }
                      return [7];
                    case 8:
                      (a = this.plugins.filter(function (e) {
                        return "enrichment" === e.type || void 0 === e.type;
                      })),
                        (g.label = 9);
                    case 9:
                      g.trys.push([9, 14, 15, 16]),
                        (d = (l = (0, c.Ju)(a)).next()),
                        (g.label = 10);
                    case 10:
                      if (d.done) return [3, 13];
                      if (!(s = d.value).execute) return [3, 12];
                      return [4, s.execute((0, c.Cl)({}, t))];
                    case 11:
                      if (null === (u = g.sent()))
                        return n({ event: t, code: 0, message: "" }), [2];
                      (t = u), (g.label = 12);
                    case 12:
                      return (d = l.next()), [3, 10];
                    case 13:
                      return [3, 16];
                    case 14:
                      return (h = { error: g.sent() }), [3, 16];
                    case 15:
                      try {
                        d && !d.done && (p = l.return) && p.call(l);
                      } finally {
                        if (h) throw h.error;
                      }
                      return [7];
                    case 16:
                      return (
                        Promise.all(
                          this.plugins
                            .filter(function (e) {
                              return "destination" === e.type;
                            })
                            .map(function (e) {
                              var n = (0, c.Cl)({}, t);
                              return e.execute(n).catch(function (e) {
                                return b(n, 0, String(e));
                              });
                            }),
                        ).then(function (e) {
                          var r =
                            (0, c.zs)(e, 1)[0] ||
                            b(
                              t,
                              100,
                              "Event not tracked, no destination plugins on the instance",
                            );
                          n(r);
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.flush = function () {
              return (0, c.sH)(this, void 0, void 0, function () {
                var e,
                  t = this;
                return (0, c.YH)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (e = this.queue),
                        (this.queue = []),
                        [
                          4,
                          Promise.all(
                            e.map(function (e) {
                              return t.apply(e);
                            }),
                          ),
                        ]
                      );
                    case 1:
                      return (
                        n.sent(),
                        [
                          4,
                          Promise.all(
                            this.plugins
                              .filter(function (e) {
                                return "destination" === e.type;
                              })
                              .map(function (e) {
                                return e.flush && e.flush();
                              }),
                          ),
                        ]
                      );
                    case 2:
                      return n.sent(), [2];
                  }
                });
              });
            }),
            e
          );
        })(),
        N = n(43639),
        R = function (e, t) {
          return (0, c.Cl)((0, c.Cl)({}, t), {
            event_type: N.SE.IDENTIFY,
            user_properties: e.getUserProperties(),
          });
        },
        H = function (e, t, n, r) {
          var i;
          return (0, c.Cl)((0, c.Cl)({}, r), {
            event_type: N.SE.GROUP_IDENTIFY,
            group_properties: n.getUserProperties(),
            groups: (((i = {})[e] = t), i),
          });
        },
        L = function (e, t, n) {
          var r,
            i = new O.T();
          return (
            i.set(e, t),
            (0, c.Cl)((0, c.Cl)({}, n), {
              event_type: N.SE.IDENTIFY,
              user_properties: i.getUserProperties(),
              groups: (((r = {})[e] = t), r),
            })
          );
        },
        U = (function () {
          function e(e) {
            void 0 === e && (e = "$default"),
              (this.initializing = !1),
              (this.isReady = !1),
              (this.q = []),
              (this.dispatchQ = []),
              (this.logEvent = this.track.bind(this)),
              (this.timeline = new x(this)),
              (this.name = e);
          }
          return (
            (e.prototype._init = function (e) {
              return (0, c.sH)(this, void 0, void 0, function () {
                return (0, c.YH)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (this.config = e),
                        this.timeline.reset(this),
                        [4, this.runQueuedFunctions("q")]
                      );
                    case 1:
                      return t.sent(), (this.isReady = !0), [2];
                  }
                });
              });
            }),
            (e.prototype.runQueuedFunctions = function (e) {
              return (0, c.sH)(this, void 0, void 0, function () {
                var t, n, r, i, o, s;
                return (0, c.YH)(this, function (u) {
                  switch (u.label) {
                    case 0:
                      (t = this[e]), (this[e] = []), (u.label = 1);
                    case 1:
                      u.trys.push([1, 8, 9, 10]),
                        (r = (n = (0, c.Ju)(t)).next()),
                        (u.label = 2);
                    case 2:
                      if (r.done) return [3, 7];
                      if (!((i = (0, r.value)()) && "promise" in i))
                        return [3, 4];
                      return [4, i.promise];
                    case 3:
                      return u.sent(), [3, 6];
                    case 4:
                      return [4, i];
                    case 5:
                      u.sent(), (u.label = 6);
                    case 6:
                      return (r = n.next()), [3, 2];
                    case 7:
                      return [3, 10];
                    case 8:
                      return (o = { error: u.sent() }), [3, 10];
                    case 9:
                      try {
                        r && !r.done && (s = n.return) && s.call(n);
                      } finally {
                        if (o) throw o.error;
                      }
                      return [7];
                    case 10:
                      if (!this[e].length) return [3, 12];
                      return [4, this.runQueuedFunctions(e)];
                    case 11:
                      u.sent(), (u.label = 12);
                    case 12:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.track = function (e, t, n) {
              var r = (0, c.Cl)(
                (0, c.Cl)(
                  (0, c.Cl)({}, "string" == typeof e ? { event_type: e } : e),
                  n,
                ),
                t && { event_properties: t },
              );
              return p(this.dispatch(r));
            }),
            (e.prototype.identify = function (e, t) {
              var n = R(e, t);
              return p(this.dispatch(n));
            }),
            (e.prototype.groupIdentify = function (e, t, n, r) {
              var i = H(e, t, n, r);
              return p(this.dispatch(i));
            }),
            (e.prototype.setGroup = function (e, t, n) {
              var r = L(e, t, n);
              return p(this.dispatch(r));
            }),
            (e.prototype.revenue = function (e, t) {
              var n = (0, c.Cl)((0, c.Cl)({}, t), {
                event_type: N.SE.REVENUE,
                event_properties: e.getEventProperties(),
              });
              return p(this.dispatch(n));
            }),
            (e.prototype.add = function (e) {
              return this.isReady
                ? this._addPlugin(e)
                : (this.q.push(this._addPlugin.bind(this, e)), p());
            }),
            (e.prototype._addPlugin = function (e) {
              return p(this.timeline.register(e, this.config));
            }),
            (e.prototype.remove = function (e) {
              return this.isReady
                ? this._removePlugin(e)
                : (this.q.push(this._removePlugin.bind(this, e)), p());
            }),
            (e.prototype._removePlugin = function (e) {
              return p(this.timeline.deregister(e));
            }),
            (e.prototype.dispatchWithCallback = function (e, t) {
              if (!this.isReady) return t(b(e, 0, "Client not initialized"));
              this.process(e).then(t);
            }),
            (e.prototype.dispatch = function (e) {
              return (0, c.sH)(this, void 0, void 0, function () {
                var t = this;
                return (0, c.YH)(this, function (n) {
                  return this.isReady
                    ? [2, this.process(e)]
                    : [
                        2,
                        new Promise(function (n) {
                          t.dispatchQ.push(
                            t.dispatchWithCallback.bind(t, e, n),
                          );
                        }),
                      ];
                });
              });
            }),
            (e.prototype.process = function (e) {
              return (0, c.sH)(this, void 0, void 0, function () {
                var t, n;
                return (0, c.YH)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if ((r.trys.push([0, 2, , 3]), this.config.optOut))
                        return [
                          2,
                          b(e, 0, "Event skipped due to optOut config"),
                        ];
                      return [4, this.timeline.push(e)];
                    case 1:
                      return (
                        200 === (t = r.sent()).code
                          ? this.config.loggerProvider.log(t.message)
                          : 100 === t.code
                            ? this.config.loggerProvider.warn(t.message)
                            : this.config.loggerProvider.error(t.message),
                        [2, t]
                      );
                    case 2:
                      return (
                        (n = String(r.sent())),
                        this.config.loggerProvider.error(n),
                        [2, (t = b(e, 0, n))]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.setOptOut = function (e) {
              if (!this.isReady) {
                this.q.push(this._setOptOut.bind(this, !!e));
                return;
              }
              this._setOptOut(e);
            }),
            (e.prototype._setOptOut = function (e) {
              this.config.optOut = !!e;
            }),
            (e.prototype.flush = function () {
              return p(this.timeline.flush());
            }),
            e
          );
        })(),
        D = function (e, t) {
          return "boolean" == typeof e ? e : (null == e ? void 0 : e[t]) !== !1;
        },
        q = function (e) {
          return D(e, "attribution");
        },
        Y = function (e) {
          return D(e, "pageViews");
        },
        j = function (e) {
          return D(e, "sessions");
        },
        M = function (e) {
          return "boolean" == typeof e
            ? e
            : "object" == typeof e &&
                (!0 === e.elementInteractions ||
                  "object" == typeof e.elementInteractions);
        },
        F = function (e) {
          if (
            M(e.autocapture) &&
            "object" == typeof e.autocapture &&
            "object" == typeof e.autocapture.elementInteractions
          )
            return e.autocapture.elementInteractions;
        },
        z = function (e) {
          var t,
            n = function () {
              return !1;
            },
            r = void 0,
            i = e.pageCounter;
          return (
            Y(e.defaultTracking) &&
              ((n = void 0),
              (t = void 0),
              e.defaultTracking &&
                "object" == typeof e.defaultTracking &&
                e.defaultTracking.pageViews &&
                "object" == typeof e.defaultTracking.pageViews &&
                ("trackOn" in e.defaultTracking.pageViews &&
                  (n = e.defaultTracking.pageViews.trackOn),
                "trackHistoryChanges" in e.defaultTracking.pageViews &&
                  (r = e.defaultTracking.pageViews.trackHistoryChanges),
                "eventType" in e.defaultTracking.pageViews &&
                  e.defaultTracking.pageViews.eventType &&
                  (t = e.defaultTracking.pageViews.eventType))),
            { trackOn: n, trackHistoryChanges: r, eventType: t, pageCounter: i }
          );
        },
        $ = "dclid",
        V = "fbclid",
        J = "gbraid",
        K = "gclid",
        X = "ko_click_id",
        Q = "li_fat_id",
        W = "msclkid",
        B = "rtd_cid",
        G = "ttclid",
        Z = "twclid",
        ee = "wbraid",
        et = {
          utm_campaign: void 0,
          utm_content: void 0,
          utm_id: void 0,
          utm_medium: void 0,
          utm_source: void 0,
          utm_term: void 0,
          referrer: void 0,
          referring_domain: void 0,
          dclid: void 0,
          gbraid: void 0,
          gclid: void 0,
          fbclid: void 0,
          ko_click_id: void 0,
          li_fat_id: void 0,
          msclkid: void 0,
          rtd_cid: void 0,
          ttclid: void 0,
          twclid: void 0,
          wbraid: void 0,
        },
        en = function (e) {
          var t = e.split(".");
          return t.length <= 2 ? e : t.slice(t.length - 2, t.length).join(".");
        },
        er = function (e, t, n, r) {
          void 0 === r && (r = !0), e.referrer;
          var i = e.referring_domain,
            o = (0, c.Tt)(e, ["referrer", "referring_domain"]),
            s = t || {},
            u = (s.referrer, s.referring_domain),
            a = (0, c.Tt)(s, ["referrer", "referring_domain"]);
          if (
            ei(n.excludeReferrers, e.referring_domain) ||
            (!r &&
              Object.values(e).every(function (e) {
                return !e;
              }) &&
              t)
          )
            return !1;
          var l = JSON.stringify(o) !== JSON.stringify(a),
            d = en(i || "") !== en(u || "");
          return !t || l || d;
        },
        ei = function (e, t) {
          return (
            void 0 === e && (e = []),
            void 0 === t && (t = ""),
            e.some(function (e) {
              return e instanceof RegExp ? e.test(t) : e === t;
            })
          );
        },
        eo = function (e) {
          var t = e;
          return t
            ? (t.startsWith(".") && (t = t.substring(1)),
              [new RegExp("".concat(t.replace(".", "\\."), "$"))])
            : [];
        },
        es = function () {
          var e = "ampIntegrationContext";
          return "undefined" != typeof globalThis && void 0 !== globalThis[e]
            ? globalThis[e]
            : "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
                ? window
                : "undefined" != typeof self
                  ? self
                  : void 0 !== n.g
                    ? n.g
                    : void 0;
        },
        eu = function () {
          var e,
            t = es();
          return (
            null === (e = null == t ? void 0 : t.location) || void 0 === e
              ? void 0
              : e.search
          )
            ? t.location.search
                .substring(1)
                .split("&")
                .filter(Boolean)
                .reduce(function (e, t) {
                  var n = t.split("=", 2),
                    r = ea(n[0]),
                    i = ea(n[1]);
                  return i && (e[r] = i), e;
                }, {})
            : {};
        },
        ea = function (e) {
          void 0 === e && (e = "");
          try {
            return decodeURIComponent(e);
          } catch (e) {
            return "";
          }
        },
        ec = (function () {
          function e() {}
          return (
            (e.prototype.parse = function () {
              return (0, c.sH)(this, void 0, void 0, function () {
                return (0, c.YH)(this, function (e) {
                  return [
                    2,
                    (0, c.Cl)(
                      (0, c.Cl)(
                        (0, c.Cl)((0, c.Cl)({}, et), this.getUtmParam()),
                        this.getReferrer(),
                      ),
                      this.getClickIds(),
                    ),
                  ];
                });
              });
            }),
            (e.prototype.getUtmParam = function () {
              var e = eu();
              return {
                utm_campaign: e.utm_campaign,
                utm_content: e.utm_content,
                utm_id: e.utm_id,
                utm_medium: e.utm_medium,
                utm_source: e.utm_source,
                utm_term: e.utm_term,
              };
            }),
            (e.prototype.getReferrer = function () {
              var e,
                t,
                n = { referrer: void 0, referring_domain: void 0 };
              try {
                (n.referrer = document.referrer || void 0),
                  (n.referring_domain =
                    null !==
                      (t =
                        null === (e = n.referrer) || void 0 === e
                          ? void 0
                          : e.split("/")[2]) && void 0 !== t
                      ? t
                      : void 0);
              } catch (e) {}
              return n;
            }),
            (e.prototype.getClickIds = function () {
              var e,
                t = eu();
              return (
                ((e = {})[$] = t[$]),
                (e[V] = t[V]),
                (e[J] = t[J]),
                (e[K] = t[K]),
                (e[X] = t[X]),
                (e[Q] = t[Q]),
                (e[W] = t[W]),
                (e[B] = t[B]),
                (e[G] = t[G]),
                (e[Z] = t[Z]),
                (e[ee] = t[ee]),
                e
              );
            }),
            e
          );
        })(),
        el = function (e, t) {
          return void 0 === t && (t = Date.now()), Date.now() - t > e;
        },
        ed = (function () {
          function e(e, t) {
            var n, r, i;
            (this.shouldTrackNewCampaign = !1),
              (this.options = (0, c.Cl)(
                {
                  initialEmptyValue: "EMPTY",
                  resetSessionOnNewCampaign: !1,
                  excludeReferrers: eo(
                    null === (n = t.cookieOptions) || void 0 === n
                      ? void 0
                      : n.domain,
                  ),
                },
                e,
              )),
              (this.storage = t.cookieStorage),
              (this.storageKey =
                ((r = t.apiKey),
                void 0 === i && (i = 10),
                [m.r, "MKTG", r.substring(0, i)].filter(Boolean).join("_"))),
              (this.currentCampaign = et),
              (this.sessionTimeout = t.sessionTimeout),
              (this.lastEventTime = t.lastEventTime),
              t.loggerProvider.log("Installing web attribution tracking.");
          }
          return (
            (e.prototype.init = function () {
              return (0, c.sH)(this, void 0, void 0, function () {
                var e, t;
                return (0, c.YH)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.fetchCampaign()];
                    case 1:
                      if (
                        ((t = c.zs.apply(void 0, [n.sent(), 2])),
                        (this.currentCampaign = t[0]),
                        (this.previousCampaign = t[1]),
                        (e =
                          !this.lastEventTime ||
                          el(this.sessionTimeout, this.lastEventTime)),
                        !er(
                          this.currentCampaign,
                          this.previousCampaign,
                          this.options,
                          e,
                        ))
                      )
                        return [3, 3];
                      return (
                        (this.shouldTrackNewCampaign = !0),
                        [
                          4,
                          this.storage.set(
                            this.storageKey,
                            this.currentCampaign,
                          ),
                        ]
                      );
                    case 2:
                      n.sent(), (n.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.fetchCampaign = function () {
              return (0, c.sH)(this, void 0, void 0, function () {
                return (0, c.YH)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        Promise.all([
                          new ec().parse(),
                          this.storage.get(this.storageKey),
                        ]),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (e.prototype.generateCampaignEvent = function (e) {
              this.shouldTrackNewCampaign = !1;
              var t,
                n,
                r =
                  ((t = this.currentCampaign),
                  (n = this.options),
                  R(
                    Object.entries((0, c.Cl)((0, c.Cl)({}, et), t)).reduce(
                      function (e, t) {
                        var r,
                          i = (0, c.zs)(t, 2),
                          o = i[0],
                          s = i[1];
                        return (e.setOnce(
                          "initial_".concat(o),
                          null !== (r = null != s ? s : n.initialEmptyValue) &&
                            void 0 !== r
                            ? r
                            : "EMPTY",
                        ),
                        s)
                          ? e.set(o, s)
                          : e.unset(o);
                      },
                      new O.T(),
                    ),
                  ));
              return e && (r.event_id = e), r;
            }),
            (e.prototype.shouldSetSessionIdOnNewCampaign = function () {
              return (
                this.shouldTrackNewCampaign &&
                !!this.options.resetSessionOnNewCampaign
              );
            }),
            e
          );
        })(),
        ef = n(82602),
        ev = function (e) {
          return void 0 === e && (e = "$default_instance"), ef.i.getInstance(e);
        },
        eh = function (e, t) {
          ev(t).identityStore.editIdentity().setUserId(e).commit();
        },
        ep = function (e, t) {
          ev(t).identityStore.editIdentity().setDeviceId(e).commit();
        },
        eg = (function () {
          function e() {
            (this.name = "identity"),
              (this.type = "before"),
              (this.identityStore = ev().identityStore);
          }
          return (
            (e.prototype.execute = function (e) {
              return (0, c.sH)(this, void 0, void 0, function () {
                var t;
                return (0, c.YH)(this, function (n) {
                  return (
                    (t = e.user_properties) &&
                      this.identityStore
                        .editIdentity()
                        .updateUserProperties(t)
                        .commit(),
                    [2, e]
                  );
                });
              });
            }),
            (e.prototype.setup = function (e) {
              return (0, c.sH)(this, void 0, void 0, function () {
                return (0, c.YH)(this, function (t) {
                  return (
                    e.instanceName &&
                      (this.identityStore = ev(e.instanceName).identityStore),
                    [2]
                  );
                });
              });
            }),
            e
          );
        })(),
        em = n(82944),
        ey = n(48217),
        eb = function () {
          if ("undefined" == typeof navigator) return "";
          var e,
            t,
            n,
            r,
            i = navigator.userLanguage;
          return null !==
            (r =
              null !==
                (n =
                  null !==
                    (t =
                      null === (e = navigator.languages) || void 0 === e
                        ? void 0
                        : e[0]) && void 0 !== t
                    ? t
                    : navigator.language) && void 0 !== n
                ? n
                : i) && void 0 !== r
            ? r
            : "";
        },
        ew = (function () {
          function e() {
            (this.name = "@amplitude/plugin-context-browser"),
              (this.type = "before"),
              (this.library = "amplitude-ts/".concat("2.11.9")),
              "undefined" != typeof navigator &&
                (this.userAgent = navigator.userAgent);
          }
          return (
            (e.prototype.setup = function (e) {
              return (this.config = e), Promise.resolve(void 0);
            }),
            (e.prototype.execute = function (e) {
              var t, n;
              return (0, c.sH)(this, void 0, void 0, function () {
                var r, i, o;
                return (0, c.YH)(this, function (s) {
                  return (
                    (r = new Date().getTime()),
                    (i =
                      null !== (t = this.config.lastEventId) && void 0 !== t
                        ? t
                        : -1),
                    (o = null !== (n = e.event_id) && void 0 !== n ? n : i + 1),
                    (this.config.lastEventId = o),
                    e.time || (this.config.lastEventTime = r),
                    [
                      2,
                      (0, c.Cl)(
                        (0, c.Cl)(
                          (0, c.Cl)(
                            (0, c.Cl)(
                              (0, c.Cl)(
                                (0, c.Cl)(
                                  (0, c.Cl)(
                                    (0, c.Cl)(
                                      {
                                        user_id: this.config.userId,
                                        device_id: this.config.deviceId,
                                        session_id: this.config.sessionId,
                                        time: r,
                                      },
                                      this.config.appVersion && {
                                        app_version: this.config.appVersion,
                                      },
                                    ),
                                    this.config.trackingOptions.platform && {
                                      platform: "Web",
                                    },
                                  ),
                                  this.config.trackingOptions.language && {
                                    language: eb(),
                                  },
                                ),
                                this.config.trackingOptions.ipAddress && {
                                  ip: "$remote",
                                },
                              ),
                              {
                                insert_id: k(),
                                partner_id: this.config.partnerId,
                                plan: this.config.plan,
                              },
                            ),
                            this.config.ingestionMetadata && {
                              ingestion_metadata: {
                                source_name:
                                  this.config.ingestionMetadata.sourceName,
                                source_version:
                                  this.config.ingestionMetadata.sourceVersion,
                              },
                            },
                          ),
                          e,
                        ),
                        {
                          event_id: o,
                          library: this.library,
                          user_agent: this.userAgent,
                        },
                      ),
                    ]
                  );
                });
              });
            }),
            e
          );
        })(),
        e_ = (function () {
          function e() {
            this.memoryStorage = new Map();
          }
          return (
            (e.prototype.isEnabled = function () {
              return (0, c.sH)(this, void 0, void 0, function () {
                return (0, c.YH)(this, function (e) {
                  return [2, !0];
                });
              });
            }),
            (e.prototype.get = function (e) {
              return (0, c.sH)(this, void 0, void 0, function () {
                return (0, c.YH)(this, function (t) {
                  return [2, this.memoryStorage.get(e)];
                });
              });
            }),
            (e.prototype.getRaw = function (e) {
              return (0, c.sH)(this, void 0, void 0, function () {
                var t;
                return (0, c.YH)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.get(e)];
                    case 1:
                      return [2, (t = n.sent()) ? JSON.stringify(t) : void 0];
                  }
                });
              });
            }),
            (e.prototype.set = function (e, t) {
              return (0, c.sH)(this, void 0, void 0, function () {
                return (0, c.YH)(this, function (n) {
                  return this.memoryStorage.set(e, t), [2];
                });
              });
            }),
            (e.prototype.remove = function (e) {
              return (0, c.sH)(this, void 0, void 0, function () {
                return (0, c.YH)(this, function (t) {
                  return this.memoryStorage.delete(e), [2];
                });
              });
            }),
            (e.prototype.reset = function () {
              return (0, c.sH)(this, void 0, void 0, function () {
                return (0, c.YH)(this, function (e) {
                  return this.memoryStorage.clear(), [2];
                });
              });
            }),
            e
          );
        })(),
        eE = function (e, t, n) {
          return (
            void 0 === t && (t = ""),
            void 0 === n && (n = 10),
            [m.r, t, e.substring(0, n)].filter(Boolean).join("_")
          );
        },
        eS = (function () {
          function e(e) {
            this.options = (0, c.Cl)({}, e);
          }
          return (
            (e.prototype.isEnabled = function () {
              return (0, c.sH)(this, void 0, void 0, function () {
                var t, n;
                return (0, c.YH)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (!es()) return [2, !1];
                      (e.testValue = String(Date.now())),
                        (t = new e(this.options)),
                        (n = "AMP_TEST"),
                        (r.label = 1);
                    case 1:
                      return (
                        r.trys.push([1, 4, 5, 7]), [4, t.set(n, e.testValue)]
                      );
                    case 2:
                      return r.sent(), [4, t.get(n)];
                    case 3:
                      return [2, r.sent() === e.testValue];
                    case 4:
                      return r.sent(), [2, !1];
                    case 5:
                      return [4, t.remove(n)];
                    case 6:
                      return r.sent(), [7];
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.get = function (e) {
              var t;
              return (0, c.sH)(this, void 0, void 0, function () {
                var n, r;
                return (0, c.YH)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return [4, this.getRaw(e)];
                    case 1:
                      if (!(n = i.sent())) return [2, void 0];
                      try {
                        if (
                          ((r =
                            null !== (t = eI(n)) && void 0 !== t ? t : eT(n)),
                          void 0 === r)
                        )
                          return (
                            console.error(
                              "Amplitude Logger [Error]: Failed to decode cookie value for key: "
                                .concat(e, ", value: ")
                                .concat(n),
                            ),
                            [2, void 0]
                          );
                        return [2, JSON.parse(r)];
                      } catch (t) {
                        return (
                          console.error(
                            "Amplitude Logger [Error]: Failed to parse cookie value for key: "
                              .concat(e, ", value: ")
                              .concat(n),
                          ),
                          [2, void 0]
                        );
                      }
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.getRaw = function (e) {
              var t, n;
              return (0, c.sH)(this, void 0, void 0, function () {
                var r, i;
                return (0, c.YH)(this, function (o) {
                  return (i = (
                    null !==
                      (n =
                        null ===
                          (t = null == (r = es()) ? void 0 : r.document) ||
                        void 0 === t
                          ? void 0
                          : t.cookie.split("; ")) && void 0 !== n
                      ? n
                      : []
                  ).find(function (t) {
                    return 0 === t.indexOf(e + "=");
                  }))
                    ? [2, i.substring(e.length + 1)]
                    : [2, void 0];
                });
              });
            }),
            (e.prototype.set = function (e, t) {
              var n;
              return (0, c.sH)(this, void 0, void 0, function () {
                var r, i, o, s, u, a, l;
                return (0, c.YH)(this, function (c) {
                  try {
                    (r =
                      null !== (n = this.options.expirationDays) && void 0 !== n
                        ? n
                        : 0),
                      (i = null !== t ? r : -1),
                      (o = void 0),
                      i &&
                        ((s = new Date()).setTime(s.getTime() + 864e5 * i),
                        (o = s)),
                      (u = ""
                        .concat(e, "=")
                        .concat(btoa(encodeURIComponent(JSON.stringify(t))))),
                      o && (u += "; expires=".concat(o.toUTCString())),
                      (u += "; path=/"),
                      this.options.domain &&
                        (u += "; domain=".concat(this.options.domain)),
                      this.options.secure && (u += "; Secure"),
                      this.options.sameSite &&
                        (u += "; SameSite=".concat(this.options.sameSite)),
                      (a = es()) && (a.document.cookie = u);
                  } catch (t) {
                    (l = t instanceof Error ? t.message : String(t)),
                      console.error(
                        "Amplitude Logger [Error]: Failed to set cookie for key: "
                          .concat(e, ". Error: ")
                          .concat(l),
                      );
                  }
                  return [2];
                });
              });
            }),
            (e.prototype.remove = function (e) {
              return (0, c.sH)(this, void 0, void 0, function () {
                return (0, c.YH)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.set(e, null)];
                    case 1:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.reset = function () {
              return (0, c.sH)(this, void 0, void 0, function () {
                return (0, c.YH)(this, function (e) {
                  return [2];
                });
              });
            }),
            e
          );
        })(),
        eI = function (e) {
          try {
            return decodeURIComponent(atob(e));
          } catch (e) {
            return;
          }
        },
        eT = function (e) {
          try {
            return decodeURIComponent(atob(decodeURIComponent(e)));
          } catch (e) {
            return;
          }
        },
        ek = (function () {
          function e() {}
          return (
            (e.prototype.send = function (e, t) {
              return Promise.resolve(null);
            }),
            (e.prototype.buildResponse = function (e) {
              if ("object" != typeof e) return null;
              var t,
                n,
                r,
                i,
                o,
                s,
                u,
                a,
                c,
                l,
                d,
                f,
                v,
                h,
                p,
                m,
                y,
                b,
                w,
                _,
                E,
                S,
                I = e.code || 0,
                T = this.buildStatus(I);
              switch (T) {
                case g.n.Success:
                  return {
                    status: T,
                    statusCode: I,
                    body: {
                      eventsIngested:
                        null !== (t = e.events_ingested) && void 0 !== t
                          ? t
                          : 0,
                      payloadSizeBytes:
                        null !== (n = e.payload_size_bytes) && void 0 !== n
                          ? n
                          : 0,
                      serverUploadTime:
                        null !== (r = e.server_upload_time) && void 0 !== r
                          ? r
                          : 0,
                    },
                  };
                case g.n.Invalid:
                  return {
                    status: T,
                    statusCode: I,
                    body: {
                      error: null !== (i = e.error) && void 0 !== i ? i : "",
                      missingField:
                        null !== (o = e.missing_field) && void 0 !== o ? o : "",
                      eventsWithInvalidFields:
                        null !== (s = e.events_with_invalid_fields) &&
                        void 0 !== s
                          ? s
                          : {},
                      eventsWithMissingFields:
                        null !== (u = e.events_with_missing_fields) &&
                        void 0 !== u
                          ? u
                          : {},
                      eventsWithInvalidIdLengths:
                        null !== (a = e.events_with_invalid_id_lengths) &&
                        void 0 !== a
                          ? a
                          : {},
                      epsThreshold:
                        null !== (c = e.eps_threshold) && void 0 !== c ? c : 0,
                      exceededDailyQuotaDevices:
                        null !== (l = e.exceeded_daily_quota_devices) &&
                        void 0 !== l
                          ? l
                          : {},
                      silencedDevices:
                        null !== (d = e.silenced_devices) && void 0 !== d
                          ? d
                          : [],
                      silencedEvents:
                        null !== (f = e.silenced_events) && void 0 !== f
                          ? f
                          : [],
                      throttledDevices:
                        null !== (v = e.throttled_devices) && void 0 !== v
                          ? v
                          : {},
                      throttledEvents:
                        null !== (h = e.throttled_events) && void 0 !== h
                          ? h
                          : [],
                    },
                  };
                case g.n.PayloadTooLarge:
                  return {
                    status: T,
                    statusCode: I,
                    body: {
                      error: null !== (p = e.error) && void 0 !== p ? p : "",
                    },
                  };
                case g.n.RateLimit:
                  return {
                    status: T,
                    statusCode: I,
                    body: {
                      error: null !== (m = e.error) && void 0 !== m ? m : "",
                      epsThreshold:
                        null !== (y = e.eps_threshold) && void 0 !== y ? y : 0,
                      throttledDevices:
                        null !== (b = e.throttled_devices) && void 0 !== b
                          ? b
                          : {},
                      throttledUsers:
                        null !== (w = e.throttled_users) && void 0 !== w
                          ? w
                          : {},
                      exceededDailyQuotaDevices:
                        null !== (_ = e.exceeded_daily_quota_devices) &&
                        void 0 !== _
                          ? _
                          : {},
                      exceededDailyQuotaUsers:
                        null !== (E = e.exceeded_daily_quota_users) &&
                        void 0 !== E
                          ? E
                          : {},
                      throttledEvents:
                        null !== (S = e.throttled_events) && void 0 !== S
                          ? S
                          : [],
                    },
                  };
                case g.n.Timeout:
                default:
                  return { status: T, statusCode: I };
              }
            }),
            (e.prototype.buildStatus = function (e) {
              return e >= 200 && e < 300
                ? g.n.Success
                : 429 === e
                  ? g.n.RateLimit
                  : 413 === e
                    ? g.n.PayloadTooLarge
                    : 408 === e
                      ? g.n.Timeout
                      : e >= 400 && e < 500
                        ? g.n.Invalid
                        : e >= 500
                          ? g.n.Failed
                          : g.n.Unknown;
            }),
            e
          );
        })(),
        eC = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            (0, c.C6)(t, e),
            (t.prototype.send = function (e, t) {
              return (0, c.sH)(this, void 0, void 0, function () {
                var n, r;
                return (0, c.YH)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if ("undefined" == typeof fetch)
                        throw Error("FetchTransport is not supported");
                      return [
                        4,
                        fetch(e, {
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "*/*",
                          },
                          body: JSON.stringify(t),
                          method: "POST",
                        }),
                      ];
                    case 1:
                      return [4, (n = i.sent()).text()];
                    case 2:
                      r = i.sent();
                      try {
                        return [2, this.buildResponse(JSON.parse(r))];
                      } catch (e) {
                        return [2, this.buildResponse({ code: n.status })];
                      }
                      return [2];
                  }
                });
              });
            }),
            t
          );
        })(ek),
        eP = (function () {
          function e(e) {
            this.storage = e;
          }
          return (
            (e.prototype.isEnabled = function () {
              return (0, c.sH)(this, void 0, void 0, function () {
                var t, n, r;
                return (0, c.YH)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (!this.storage) return [2, !1];
                      (t = String(Date.now())),
                        (n = new e(this.storage)),
                        (r = "AMP_TEST"),
                        (i.label = 1);
                    case 1:
                      return i.trys.push([1, 4, 5, 7]), [4, n.set(r, t)];
                    case 2:
                      return i.sent(), [4, n.get(r)];
                    case 3:
                      return [2, i.sent() === t];
                    case 4:
                      return i.sent(), [2, !1];
                    case 5:
                      return [4, n.remove(r)];
                    case 6:
                      return i.sent(), [7];
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.get = function (e) {
              return (0, c.sH)(this, void 0, void 0, function () {
                var t;
                return (0, c.YH)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return n.trys.push([0, 2, , 3]), [4, this.getRaw(e)];
                    case 1:
                      if (!(t = n.sent())) return [2, void 0];
                      return [2, JSON.parse(t)];
                    case 2:
                      return (
                        n.sent(),
                        console.error(
                          "[Amplitude] Error: Could not get value from storage",
                        ),
                        [2, void 0]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.getRaw = function (e) {
              var t;
              return (0, c.sH)(this, void 0, void 0, function () {
                return (0, c.YH)(this, function (n) {
                  return [
                    2,
                    (null === (t = this.storage) || void 0 === t
                      ? void 0
                      : t.getItem(e)) || void 0,
                  ];
                });
              });
            }),
            (e.prototype.set = function (e, t) {
              var n;
              return (0, c.sH)(this, void 0, void 0, function () {
                return (0, c.YH)(this, function (r) {
                  try {
                    null === (n = this.storage) ||
                      void 0 === n ||
                      n.setItem(e, JSON.stringify(t));
                  } catch (e) {}
                  return [2];
                });
              });
            }),
            (e.prototype.remove = function (e) {
              var t;
              return (0, c.sH)(this, void 0, void 0, function () {
                return (0, c.YH)(this, function (n) {
                  try {
                    null === (t = this.storage) ||
                      void 0 === t ||
                      t.removeItem(e);
                  } catch (e) {}
                  return [2];
                });
              });
            }),
            (e.prototype.reset = function () {
              var e;
              return (0, c.sH)(this, void 0, void 0, function () {
                return (0, c.YH)(this, function (t) {
                  try {
                    null === (e = this.storage) || void 0 === e || e.clear();
                  } catch (e) {}
                  return [2];
                });
              });
            }),
            e
          );
        })(),
        eO = (function (e) {
          function t(t) {
            var n,
              r = this;
            return (
              ((r =
                e.call(
                  this,
                  null === (n = es()) || void 0 === n ? void 0 : n.localStorage,
                ) || this).loggerProvider =
                null == t ? void 0 : t.loggerProvider),
              r
            );
          }
          return (
            (0, c.C6)(t, e),
            (t.prototype.set = function (t, n) {
              var r;
              return (0, c.sH)(this, void 0, void 0, function () {
                var i;
                return (0, c.YH)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (!(Array.isArray(n) && n.length > 1e3)) return [3, 2];
                      return (
                        (i = n.length - 1e3),
                        [4, e.prototype.set.call(this, t, n.slice(0, 1e3))]
                      );
                    case 1:
                      return (
                        o.sent(),
                        null === (r = this.loggerProvider) ||
                          void 0 === r ||
                          r.error(
                            "Failed to save "
                              .concat(
                                i,
                                " events because the queue length exceeded ",
                              )
                              .concat(1e3, "."),
                          ),
                        [3, 4]
                      );
                    case 2:
                      return [4, e.prototype.set.call(this, t, n)];
                    case 3:
                      o.sent(), (o.label = 4);
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            t
          );
        })(eP),
        eA = (function (e) {
          function t() {
            var t;
            return (
              e.call(
                this,
                null === (t = es()) || void 0 === t ? void 0 : t.sessionStorage,
              ) || this
            );
          }
          return (0, c.C6)(t, e), t;
        })(eP),
        ex = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { done: 4 }), t;
          }
          return (
            (0, c.C6)(t, e),
            (t.prototype.send = function (e, t) {
              return (0, c.sH)(this, void 0, void 0, function () {
                var n = this;
                return (0, c.YH)(this, function (r) {
                  return [
                    2,
                    new Promise(function (r, i) {
                      "undefined" == typeof XMLHttpRequest &&
                        i(Error("XHRTransport is not supported."));
                      var o = new XMLHttpRequest();
                      o.open("POST", e, !0),
                        (o.onreadystatechange = function () {
                          if (o.readyState === n.state.done) {
                            var e = o.responseText;
                            try {
                              r(n.buildResponse(JSON.parse(e)));
                            } catch (e) {
                              r(n.buildResponse({ code: o.status }));
                            }
                          }
                        }),
                        o.setRequestHeader("Content-Type", "application/json"),
                        o.setRequestHeader("Accept", "*/*"),
                        o.send(JSON.stringify(t));
                    }),
                  ];
                });
              });
            }),
            t
          );
        })(ek),
        eN = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            (0, c.C6)(t, e),
            (t.prototype.send = function (e, t) {
              return (0, c.sH)(this, void 0, void 0, function () {
                var n = this;
                return (0, c.YH)(this, function (r) {
                  return [
                    2,
                    new Promise(function (r, i) {
                      var o = es();
                      if (!(null == o ? void 0 : o.navigator.sendBeacon))
                        throw Error("SendBeaconTransport is not supported");
                      try {
                        var s = JSON.stringify(t);
                        if (o.navigator.sendBeacon(e, JSON.stringify(t)))
                          return r(
                            n.buildResponse({
                              code: 200,
                              events_ingested: t.events.length,
                              payload_size_bytes: s.length,
                              server_upload_time: Date.now(),
                            }),
                          );
                        return r(n.buildResponse({ code: 500 }));
                      } catch (e) {
                        i(e);
                      }
                    }),
                  ];
                });
              });
            }),
            t
          );
        })(ek),
        eR = function (e) {
          var t = parseInt(e, 32);
          if (!isNaN(t)) return t;
        },
        eH = function (e) {
          if (atob && escape && e)
            try {
              return decodeURIComponent(escape(atob(e)));
            } catch (e) {
              return;
            }
        },
        eL = "[Amplitude]",
        eU = "".concat(eL, " Form Started"),
        eD = "".concat(eL, " Form Submitted"),
        eq = "".concat(eL, " File Downloaded"),
        eY = "session_start",
        ej = "session_end",
        eM = "".concat(eL, " File Extension"),
        eF = "".concat(eL, " File Name"),
        ez = "".concat(eL, " Link ID"),
        e$ = "".concat(eL, " Link Text"),
        eV = "".concat(eL, " Link URL"),
        eJ = "".concat(eL, " Form ID"),
        eK = "".concat(eL, " Form Name"),
        eX = "".concat(eL, " Form Destination"),
        eQ = "cookie",
        eW = (function (e) {
          function t(
            t,
            n,
            r,
            i,
            o,
            s,
            u,
            a,
            c,
            d,
            f,
            v,
            h,
            p,
            g,
            m,
            y,
            b,
            w,
            E,
            S,
            I,
            T,
            k,
            C,
            P,
            O,
            A,
            x,
            N,
            R,
            H,
            L,
            U,
          ) {
            void 0 === r && (r = new e_()),
              void 0 === i &&
                (i = {
                  domain: "",
                  expiration: 365,
                  sameSite: "Lax",
                  secure: !1,
                  upgrade: !0,
                }),
              void 0 === a && (a = 1e3),
              void 0 === c && (c = 5),
              void 0 === d && (d = 30),
              void 0 === f && (f = eQ),
              void 0 === m && (m = new _()),
              void 0 === y && (y = l.$.Warn),
              void 0 === w && (w = !1),
              void 0 === E && (E = !1),
              void 0 === T && (T = ""),
              void 0 === k && (k = "US"),
              void 0 === P && (P = 18e5),
              void 0 === O && (O = new eO({ loggerProvider: m })),
              void 0 === A &&
                (A = { ipAddress: !0, language: !0, platform: !0 }),
              void 0 === x && (x = "fetch"),
              void 0 === N && (N = !1),
              void 0 === R && (R = !1);
            var D =
              e.call(this, {
                apiKey: t,
                storageProvider: O,
                transportProvider: eG(x),
              }) || this;
            return (
              (D.apiKey = t),
              (D.appVersion = n),
              (D.cookieOptions = i),
              (D.defaultTracking = o),
              (D.autocapture = s),
              (D.flushIntervalMillis = a),
              (D.flushMaxRetries = c),
              (D.flushQueueSize = d),
              (D.identityStorage = f),
              (D.ingestionMetadata = v),
              (D.instanceName = h),
              (D.loggerProvider = m),
              (D.logLevel = y),
              (D.minIdLength = b),
              (D.offline = w),
              (D.partnerId = S),
              (D.plan = I),
              (D.serverUrl = T),
              (D.serverZone = k),
              (D.sessionTimeout = P),
              (D.storageProvider = O),
              (D.trackingOptions = A),
              (D.transport = x),
              (D.useBatch = N),
              (D.fetchRemoteConfig = R),
              (D._optOut = !1),
              (D._cookieStorage = r),
              (D.deviceId = u),
              (D.lastEventId = p),
              (D.lastEventTime = g),
              (D.optOut = E),
              (D.sessionId = C),
              (D.pageCounter = L),
              (D.userId = H),
              (D.debugLogsEnabled = U),
              D.loggerProvider.enable(U ? l.$.Debug : D.logLevel),
              D
            );
          }
          return (
            (0, c.C6)(t, e),
            Object.defineProperty(t.prototype, "cookieStorage", {
              get: function () {
                return this._cookieStorage;
              },
              set: function (e) {
                this._cookieStorage !== e &&
                  ((this._cookieStorage = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "deviceId", {
              get: function () {
                return this._deviceId;
              },
              set: function (e) {
                this._deviceId !== e &&
                  ((this._deviceId = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "userId", {
              get: function () {
                return this._userId;
              },
              set: function (e) {
                this._userId !== e &&
                  ((this._userId = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "sessionId", {
              get: function () {
                return this._sessionId;
              },
              set: function (e) {
                this._sessionId !== e &&
                  ((this._sessionId = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "optOut", {
              get: function () {
                return this._optOut;
              },
              set: function (e) {
                this._optOut !== e &&
                  ((this._optOut = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "lastEventTime", {
              get: function () {
                return this._lastEventTime;
              },
              set: function (e) {
                this._lastEventTime !== e &&
                  ((this._lastEventTime = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "lastEventId", {
              get: function () {
                return this._lastEventId;
              },
              set: function (e) {
                this._lastEventId !== e &&
                  ((this._lastEventId = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "pageCounter", {
              get: function () {
                return this._pageCounter;
              },
              set: function (e) {
                this._pageCounter !== e &&
                  ((this._pageCounter = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "debugLogsEnabled", {
              set: function (e) {
                this._debugLogsEnabled !== e &&
                  ((this._debugLogsEnabled = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.updateStorage = function () {
              var e = {
                deviceId: this._deviceId,
                userId: this._userId,
                sessionId: this._sessionId,
                optOut: this._optOut,
                lastEventTime: this._lastEventTime,
                lastEventId: this._lastEventId,
                pageCounter: this._pageCounter,
                debugLogsEnabled: this._debugLogsEnabled,
              };
              this.cookieStorage.set(eE(this.apiKey), e);
            }),
            t
          );
        })(S),
        eB = function (e, t) {
          switch ((void 0 === e && (e = eQ), void 0 === t && (t = {}), e)) {
            case "localStorage":
              return new eO();
            case "sessionStorage":
              return new eA();
            case "none":
              return new e_();
            default:
              return new eS(
                (0, c.Cl)((0, c.Cl)({}, t), { expirationDays: t.expiration }),
              );
          }
        },
        eG = function (e) {
          return "xhr" === e ? new ex() : "beacon" === e ? new eN() : new eC();
        },
        eZ = function () {
          var e = "ampIntegrationContext";
          return "undefined" != typeof globalThis && void 0 !== globalThis[e]
            ? globalThis[e]
            : "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
                ? window
                : "undefined" != typeof self
                  ? self
                  : void 0 !== n.g
                    ? n.g
                    : void 0;
        },
        e0 = function () {
          var e,
            t = eZ();
          return (
            null === (e = null == t ? void 0 : t.location) || void 0 === e
              ? void 0
              : e.search
          )
            ? t.location.search
                .substring(1)
                .split("&")
                .filter(Boolean)
                .reduce(function (e, t) {
                  var n = t.split("=", 2),
                    r = e1(n[0]),
                    i = e1(n[1]);
                  return i && (e[r] = i), e;
                }, {})
            : {};
        },
        e1 = function (e) {
          void 0 === e && (e = "");
          try {
            return decodeURIComponent(e);
          } catch (e) {
            return "";
          }
        },
        e2 = "dclid",
        e4 = "fbclid",
        e3 = "gbraid",
        e5 = "gclid",
        e6 = "ko_click_id",
        e9 = "li_fat_id",
        e8 = "msclkid",
        e7 = "rtd_cid",
        te = "ttclid",
        tt = "twclid",
        tn = "wbraid",
        tr = {
          utm_campaign: void 0,
          utm_content: void 0,
          utm_id: void 0,
          utm_medium: void 0,
          utm_source: void 0,
          utm_term: void 0,
          referrer: void 0,
          referring_domain: void 0,
          dclid: void 0,
          gbraid: void 0,
          gclid: void 0,
          fbclid: void 0,
          ko_click_id: void 0,
          li_fat_id: void 0,
          msclkid: void 0,
          rtd_cid: void 0,
          ttclid: void 0,
          twclid: void 0,
          wbraid: void 0,
        },
        ti = (function () {
          function e() {}
          return (
            (e.prototype.parse = function () {
              return (0, c.sH)(this, void 0, void 0, function () {
                return (0, c.YH)(this, function (e) {
                  return [
                    2,
                    (0, c.Cl)(
                      (0, c.Cl)(
                        (0, c.Cl)((0, c.Cl)({}, tr), this.getUtmParam()),
                        this.getReferrer(),
                      ),
                      this.getClickIds(),
                    ),
                  ];
                });
              });
            }),
            (e.prototype.getUtmParam = function () {
              var e = e0();
              return {
                utm_campaign: e.utm_campaign,
                utm_content: e.utm_content,
                utm_id: e.utm_id,
                utm_medium: e.utm_medium,
                utm_source: e.utm_source,
                utm_term: e.utm_term,
              };
            }),
            (e.prototype.getReferrer = function () {
              var e,
                t,
                n = { referrer: void 0, referring_domain: void 0 };
              try {
                (n.referrer = document.referrer || void 0),
                  (n.referring_domain =
                    null !==
                      (t =
                        null === (e = n.referrer) || void 0 === e
                          ? void 0
                          : e.split("/")[2]) && void 0 !== t
                      ? t
                      : void 0);
              } catch (e) {}
              return n;
            }),
            (e.prototype.getClickIds = function () {
              var e,
                t = e0();
              return (
                ((e = {})[e2] = t[e2]),
                (e[e4] = t[e4]),
                (e[e3] = t[e3]),
                (e[e5] = t[e5]),
                (e[e6] = t[e6]),
                (e[e9] = t[e9]),
                (e[e8] = t[e8]),
                (e[e7] = t[e7]),
                (e[te] = t[te]),
                (e[tt] = t[tt]),
                (e[tn] = t[tn]),
                e
              );
            }),
            e
          );
        })();
      !(function (e) {
        (e.SET = "$set"),
          (e.SET_ONCE = "$setOnce"),
          (e.ADD = "$add"),
          (e.APPEND = "$append"),
          (e.PREPEND = "$prepend"),
          (e.REMOVE = "$remove"),
          (e.PREINSERT = "$preInsert"),
          (e.POSTINSERT = "$postInsert"),
          (e.UNSET = "$unset"),
          (e.CLEAR_ALL = "$clearAll");
      })(r || (r = {})),
        (function (e) {
          (e.REVENUE_PRODUCT_ID = "$productId"),
            (e.REVENUE_QUANTITY = "$quantity"),
            (e.REVENUE_PRICE = "$price"),
            (e.REVENUE_TYPE = "$revenueType"),
            (e.REVENUE = "$revenue");
        })(i || (i = {})),
        (function (e) {
          (e.IDENTIFY = "$identify"),
            (e.GROUP_IDENTIFY = "$groupidentify"),
            (e.REVENUE = "revenue_amount");
        })(o || (o = {}));
      var to = function (e) {
          var t = {};
          for (var n in e) {
            var r = e[n];
            r && (t[n] = r);
          }
          return t;
        },
        ts = function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            i = eZ(),
            o = void 0,
            s = e.trackOn,
            u = e.trackHistoryChanges,
            a = e.eventType,
            l = void 0 === a ? "[Amplitude] Page Viewed" : a,
            d = function (e) {
              var t = e;
              try {
                t = decodeURI(e);
              } catch (e) {
                null == o || o.error("Malformed URI sequence: ", e);
              }
              return t;
            },
            f = function () {
              return (0, c.sH)(void 0, void 0, void 0, function () {
                var e, t, n;
                return (0, c.YH)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (e = d(
                          ("undefined" != typeof location && location.href) ||
                            "",
                        )),
                        (n = { event_type: l }),
                        (t = [{}]),
                        [4, tu()]
                      );
                    case 1:
                      return [
                        2,
                        ((n.event_properties = c.Cl.apply(void 0, [
                          c.Cl.apply(void 0, t.concat([r.sent()])),
                          {
                            "[Amplitude] Page Domain":
                              ("undefined" != typeof location &&
                                location.hostname) ||
                              "",
                            "[Amplitude] Page Location": e,
                            "[Amplitude] Page Path":
                              ("undefined" != typeof location &&
                                d(location.pathname)) ||
                              "",
                            "[Amplitude] Page Title":
                              ("undefined" != typeof document &&
                                document.title) ||
                              "",
                            "[Amplitude] Page URL": e.split("?")[0],
                          },
                        ])),
                        n),
                      ];
                  }
                });
              });
            },
            v = function () {
              return void 0 === s || ("function" == typeof s && s());
            },
            h = "undefined" != typeof location ? location.href : null,
            p = function () {
              return (0, c.sH)(void 0, void 0, void 0, function () {
                var e, n, r, i;
                return (0, c.YH)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (
                        ((n = tc(u, (e = location.href), h || "") && v()),
                        (h = e),
                        !n)
                      )
                        return [3, 4];
                      if (
                        (null == o || o.log("Tracking page view event"),
                        null != t)
                      )
                        return [3, 1];
                      return [3, 3];
                    case 1:
                      return (i = (r = t).track), [4, f()];
                    case 2:
                      i.apply(r, [s.sent()]), (s.label = 3);
                    case 3:
                      s.label = 4;
                    case 4:
                      return [2];
                  }
                });
              });
            },
            g = function () {
              p();
            };
          return {
            name: "@amplitude/plugin-page-view-tracking-browser",
            type: "enrichment",
            setup: function (e, s) {
              return (0, c.sH)(void 0, void 0, void 0, function () {
                var u, a;
                return (0, c.YH)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      if (
                        ((t = s),
                        (r = e),
                        (o = e.loggerProvider).log(
                          "Installing @amplitude/plugin-page-view-tracking-browser",
                        ),
                        i &&
                          (i.addEventListener("popstate", g),
                          (n = i.history.pushState),
                          (i.history.pushState = new Proxy(
                            i.history.pushState,
                            {
                              apply: function (e, t, n) {
                                var r = (0, c.zs)(n, 3),
                                  i = r[0],
                                  o = r[1],
                                  s = r[2];
                                e.apply(t, [i, o, s]), p();
                              },
                            },
                          ))),
                        !v())
                      )
                        return [3, 2];
                      return (
                        o.log("Tracking page view event"),
                        (a = (u = t).track),
                        [4, f()]
                      );
                    case 1:
                      a.apply(u, [l.sent()]), (l.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            },
            execute: function (e) {
              return (0, c.sH)(void 0, void 0, void 0, function () {
                var t;
                return (0, c.YH)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (!("attribution" === s && ta(e))) return [3, 2];
                      return (
                        null == o ||
                          o.log(
                            "Enriching campaign event to page view event with campaign parameters",
                          ),
                        [4, f()]
                      );
                    case 1:
                      (e.event_type = (t = n.sent()).event_type),
                        (e.event_properties = (0, c.Cl)(
                          (0, c.Cl)({}, e.event_properties),
                          t.event_properties,
                        )),
                        (n.label = 2);
                    case 2:
                      return (
                        r &&
                          e.event_type === l &&
                          ((r.pageCounter = r.pageCounter
                            ? r.pageCounter + 1
                            : 1),
                          (e.event_properties = (0, c.Cl)(
                            (0, c.Cl)({}, e.event_properties),
                            { "[Amplitude] Page Counter": r.pageCounter },
                          ))),
                        [2, e]
                      );
                  }
                });
              });
            },
            teardown: function () {
              return (0, c.sH)(void 0, void 0, void 0, function () {
                return (0, c.YH)(this, function (e) {
                  return (
                    i &&
                      (i.removeEventListener("popstate", g),
                      n && (i.history.pushState = n)),
                    [2]
                  );
                });
              });
            },
          };
        },
        tu = function () {
          return (0, c.sH)(void 0, void 0, void 0, function () {
            var e;
            return (0, c.YH)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (e = to), [4, new ti().parse()];
                case 1:
                  return [2, e.apply(void 0, [t.sent()])];
              }
            });
          });
        },
        ta = function (e) {
          if ("$identify" === e.event_type && e.user_properties) {
            var t = e.user_properties,
              n = t[r.SET] || {},
              i = t[r.UNSET] || {},
              o = (0, c.fX)(
                (0, c.fX)([], (0, c.zs)(Object.keys(n)), !1),
                (0, c.zs)(Object.keys(i)),
                !1,
              );
            return Object.keys(tr).every(function (e) {
              return o.includes(e);
            });
          }
          return !1;
        },
        tc = function (e, t, n) {
          if ("pathOnly" === e) {
            if ("" == n) return !0;
            var r = new URL(t),
              i = new URL(n);
            return r.origin + r.pathname !== i.origin + i.pathname;
          }
          return t !== n;
        },
        tl = function () {
          var e,
            t = [],
            n = function (e, n, r) {
              e.addEventListener(n, r),
                t.push({ element: e, type: n, handler: r });
            },
            r = function () {
              t.forEach(function (e) {
                var t = e.element,
                  n = e.type,
                  r = e.handler;
                null == t || t.removeEventListener(n, r);
              }),
                (t = []);
            };
          return {
            name: "@amplitude/plugin-form-interaction-tracking-browser",
            type: "enrichment",
            setup: function (t, r) {
              return (0, c.sH)(void 0, void 0, void 0, function () {
                var i;
                return (0, c.YH)(this, function (o) {
                  return (
                    null === (i = es()) ||
                      void 0 === i ||
                      i.addEventListener("load", function () {
                        if (!r) {
                          t.loggerProvider.warn(
                            "Form interaction tracking requires a later version of @amplitude/analytics-browser. Form interaction events are not tracked.",
                          );
                          return;
                        }
                        if ("undefined" != typeof document) {
                          var i = function (e) {
                            var t = !1;
                            n(e, "change", function () {
                              var n;
                              t ||
                                r.track(
                                  eU,
                                  (((n = {})[eJ] = td(e.id)),
                                  (n[eK] = td(e.name)),
                                  (n[eX] = e.action),
                                  n),
                                ),
                                (t = !0);
                            }),
                              n(e, "submit", function () {
                                var n, i;
                                t ||
                                  r.track(
                                    eU,
                                    (((n = {})[eJ] = td(e.id)),
                                    (n[eK] = td(e.name)),
                                    (n[eX] = e.action),
                                    n),
                                  ),
                                  r.track(
                                    eD,
                                    (((i = {})[eJ] = td(e.id)),
                                    (i[eK] = td(e.name)),
                                    (i[eX] = e.action),
                                    i),
                                  ),
                                  (t = !1);
                              });
                          };
                          Array.from(
                            document.getElementsByTagName("form"),
                          ).forEach(i),
                            "undefined" != typeof MutationObserver &&
                              (e = new MutationObserver(function (e) {
                                e.forEach(function (e) {
                                  e.addedNodes.forEach(function (e) {
                                    "FORM" === e.nodeName && i(e),
                                      "querySelectorAll" in e &&
                                        "function" ==
                                          typeof e.querySelectorAll &&
                                        Array.from(
                                          e.querySelectorAll("form"),
                                        ).map(i);
                                  });
                                });
                              })).observe(document.body, {
                                subtree: !0,
                                childList: !0,
                              });
                        }
                      }),
                    [2]
                  );
                });
              });
            },
            execute: function (e) {
              return (0, c.sH)(void 0, void 0, void 0, function () {
                return (0, c.YH)(this, function (t) {
                  return [2, e];
                });
              });
            },
            teardown: function () {
              return (0, c.sH)(void 0, void 0, void 0, function () {
                return (0, c.YH)(this, function (t) {
                  return null == e || e.disconnect(), r(), [2];
                });
              });
            },
          };
        },
        td = function (e) {
          if ("string" == typeof e) return e;
        },
        tf = function () {
          var e,
            t = [],
            n = function (e, n, r) {
              e.addEventListener(n, r),
                t.push({ element: e, type: n, handler: r });
            },
            r = function () {
              t.forEach(function (e) {
                var t = e.element,
                  n = e.type,
                  r = e.handler;
                null == t || t.removeEventListener(n, r);
              }),
                (t = []);
            };
          return {
            name: "@amplitude/plugin-file-download-tracking-browser",
            type: "enrichment",
            setup: function (t, r) {
              return (0, c.sH)(void 0, void 0, void 0, function () {
                var i;
                return (0, c.YH)(this, function (o) {
                  return (
                    null === (i = es()) ||
                      void 0 === i ||
                      i.addEventListener("load", function () {
                        if (!r) {
                          t.loggerProvider.warn(
                            "File download tracking requires a later version of @amplitude/analytics-browser. File download events are not tracked.",
                          );
                          return;
                        }
                        if ("undefined" != typeof document) {
                          var i = function (e) {
                              try {
                                t = new URL(e.href, window.location.href);
                              } catch (e) {
                                return;
                              }
                              var t,
                                i = o.exec(t.href),
                                s = null == i ? void 0 : i[1];
                              s &&
                                n(e, "click", function () {
                                  var n;
                                  s &&
                                    r.track(
                                      eq,
                                      (((n = {})[eM] = s),
                                      (n[eF] = t.pathname),
                                      (n[ez] = e.id),
                                      (n[e$] = e.text),
                                      (n[eV] = e.href),
                                      n),
                                    );
                                });
                            },
                            o =
                              /\.(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)(\?.+)?$/;
                          Array.from(
                            document.getElementsByTagName("a"),
                          ).forEach(i),
                            "undefined" != typeof MutationObserver &&
                              (e = new MutationObserver(function (e) {
                                e.forEach(function (e) {
                                  e.addedNodes.forEach(function (e) {
                                    "A" === e.nodeName && i(e),
                                      "querySelectorAll" in e &&
                                        "function" ==
                                          typeof e.querySelectorAll &&
                                        Array.from(e.querySelectorAll("a")).map(
                                          i,
                                        );
                                  });
                                });
                              })).observe(document.body, {
                                subtree: !0,
                                childList: !0,
                              });
                        }
                      }),
                    [2]
                  );
                });
              });
            },
            execute: function (e) {
              return (0, c.sH)(void 0, void 0, void 0, function () {
                return (0, c.YH)(this, function (t) {
                  return [2, e];
                });
              });
            },
            teardown: function () {
              return (0, c.sH)(void 0, void 0, void 0, function () {
                return (0, c.YH)(this, function (t) {
                  return null == e || e.disconnect(), r(), [2];
                });
              });
            },
          };
        },
        tv = !1,
        th = function (e) {
          !tv &&
            void 0 === e.defaultTracking &&
            (e.loggerProvider.warn(
              "`options.defaultTracking` is set to undefined. This implicitly configures your Amplitude instance to track Page Views, Sessions, File Downloads, and Form Interactions. You can suppress this warning by explicitly setting a value to `options.defaultTracking`. The value must either be a boolean, to enable and disable all default events, or an object, for advanced configuration. For example:\n\namplitude.init(<YOUR_API_KEY>, {\n  defaultTracking: true,\n});\n\nVisit https://www.docs.developers.amplitude.com/data/sdks/browser-2/#tracking-default-events for more details.",
            ),
            (tv = !0));
        },
        tp = function () {
          var e = es(),
            t = [],
            n = function (n, r) {
              e && (e.addEventListener(n, r), t.push({ type: n, handler: r }));
            },
            r = function () {
              t.forEach(function (t) {
                var n = t.type,
                  r = t.handler;
                e && e.removeEventListener(n, r);
              }),
                (t = []);
            };
          return {
            name: "@amplitude/plugin-network-checker-browser",
            type: "before",
            setup: function (e, t) {
              return (0, c.sH)(void 0, void 0, void 0, function () {
                return (0, c.YH)(this, function (r) {
                  return (
                    "undefined" == typeof navigator
                      ? (e.loggerProvider.debug(
                          "Network connectivity checker plugin is disabled because navigator is not available.",
                        ),
                        (e.offline = !1))
                      : ((e.offline = !navigator.onLine),
                        n("online", function () {
                          e.loggerProvider.debug(
                            "Network connectivity changed to online.",
                          ),
                            (e.offline = !1),
                            setTimeout(function () {
                              t.flush();
                            }, e.flushIntervalMillis);
                        }),
                        n("offline", function () {
                          e.loggerProvider.debug(
                            "Network connectivity changed to offline.",
                          ),
                            (e.offline = !0);
                        })),
                    [2]
                  );
                });
              });
            },
            teardown: function () {
              return (0, c.sH)(void 0, void 0, void 0, function () {
                return (0, c.YH)(this, function (e) {
                  return r(), [2];
                });
              });
            },
          };
        },
        tg = n(67024),
        tm = n(27486),
        ty = n(64540),
        tb = "Remote config fetch rejected due to timeout after 5 seconds",
        tw = "Unexpected error occurred",
        t_ = (function () {
          function e(e) {
            var t = e.localConfig,
              n = e.configKeys,
              r = this;
            (this.retryTimeout = 1e3),
              (this.attempts = 0),
              (this.sessionTargetingMatch = !1),
              (this.metrics = {}),
              (this.getRemoteConfig = function (e, t, n) {
                return (0, c.sH)(r, void 0, void 0, function () {
                  var r, i, o;
                  return (0, c.YH)(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return (r = Date.now()), [4, this.fetchWithTimeout(n)];
                      case 1:
                        if ((i = s.sent()) && (o = i.configs && i.configs[e]))
                          return (
                            (this.metrics.fetchTimeAPISuccess = Date.now() - r),
                            [2, o[t]]
                          );
                        return (
                          (this.metrics.fetchTimeAPIFail = Date.now() - r),
                          [2, void 0]
                        );
                    }
                  });
                });
              }),
              (this.fetchWithTimeout = function (e) {
                return (0, c.sH)(r, void 0, void 0, function () {
                  var t, n, r;
                  return (0, c.YH)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          (t = new AbortController()),
                          (n = setTimeout(function () {
                            return t.abort();
                          }, 5e3)),
                          [4, this.fetchRemoteConfig(t.signal, e)]
                        );
                      case 1:
                        return (r = i.sent()), clearTimeout(n), [2, r];
                    }
                  });
                });
              }),
              (this.fetchRemoteConfig = function (e, t) {
                return (0, c.sH)(r, void 0, void 0, function () {
                  var n, r, i, o, s, u, a, l, d, f, v;
                  return (0, c.YH)(this, function (h) {
                    switch (h.label) {
                      case 0:
                        if (
                          t === this.lastFetchedSessionId &&
                          this.attempts >= this.localConfig.flushMaxRetries
                        )
                          return [
                            2,
                            this.completeRequest({
                              err: "Remote config fetch rejected due to exceeded retry count",
                            }),
                          ];
                        if (e.aborted)
                          return [2, this.completeRequest({ err: tb })];
                        t !== this.lastFetchedSessionId &&
                          ((this.lastFetchedSessionId = t),
                          (this.attempts = 0));
                        h.label = 1;
                      case 1:
                        h.trys.push([1, 3, , 4]),
                          (n = new URLSearchParams({
                            api_key: this.localConfig.apiKey,
                          }));
                        try {
                          for (
                            i = (r = (0, c.Ju)(this.configKeys)).next();
                            !i.done;
                            i = r.next()
                          )
                            (o = i.value), n.append("config_keys", o);
                        } catch (e) {
                          d = { error: e };
                        } finally {
                          try {
                            i && !i.done && (f = r.return) && f.call(r);
                          } finally {
                            if (d) throw d.error;
                          }
                        }
                        return (
                          t && n.set("session_id", String(t)),
                          (s = { headers: { Accept: "*/*" }, method: "GET" }),
                          (u = ""
                            .concat(this.getServerUrl(), "?")
                            .concat(n.toString())),
                          (this.attempts += 1),
                          [
                            4,
                            fetch(
                              u,
                              (0, c.Cl)((0, c.Cl)({}, s), { signal: e }),
                            ),
                          ]
                        );
                      case 2:
                        if (null === (a = h.sent()))
                          return [2, this.completeRequest({ err: tw })];
                        switch (new tg.j().buildStatus(a.status)) {
                          case tm.n.Success:
                            return (
                              (this.attempts = 0),
                              [2, this.parseAndStoreConfig(a)]
                            );
                          case tm.n.Failed:
                            return [2, this.retryFetch(e, t)];
                          default:
                            return [
                              2,
                              this.completeRequest({
                                err: "Network error occurred, remote config fetch failed",
                              }),
                            ];
                        }
                        return [3, 4];
                      case 3:
                        if (((l = h.sent()), e.aborted))
                          return [2, this.completeRequest({ err: tb })];
                        return [
                          2,
                          this.completeRequest({
                            err:
                              null !== (v = l.message) && void 0 !== v ? v : tw,
                          }),
                        ];
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (this.retryFetch = function (e, t) {
                return (0, c.sH)(r, void 0, void 0, function () {
                  var n = this;
                  return (0, c.YH)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [
                          4,
                          new Promise(function (e) {
                            return setTimeout(e, n.attempts * n.retryTimeout);
                          }),
                        ];
                      case 1:
                        return r.sent(), [2, this.fetchRemoteConfig(e, t)];
                    }
                  });
                });
              }),
              (this.parseAndStoreConfig = function (e) {
                return (0, c.sH)(r, void 0, void 0, function () {
                  var t;
                  return (0, c.YH)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, e.json()];
                      case 1:
                        return (
                          (t = n.sent()),
                          this.completeRequest({
                            success: "Remote config successfully fetched",
                          }),
                          [2, t]
                        );
                    }
                  });
                });
              }),
              (this.localConfig = t),
              (this.configKeys = n);
          }
          return (
            (e.prototype.getServerUrl = function () {
              return this.localConfig.serverZone === ty.e.STAGING
                ? "https://sr-client-cfg.stag2.amplitude.com/config"
                : this.localConfig.serverZone === ty.e.EU
                  ? "https://sr-client-cfg.eu.amplitude.com/config"
                  : "https://sr-client-cfg.amplitude.com/config";
            }),
            (e.prototype.completeRequest = function (e) {
              var t = e.err,
                n = e.success;
              if (t) throw Error(t);
              n && this.localConfig.loggerProvider.log(n);
            }),
            e
          );
        })(),
        tE = function (e) {
          var t = e.localConfig,
            n = e.configKeys;
          return (0, c.sH)(void 0, void 0, void 0, function () {
            return (0, c.YH)(this, function (e) {
              return [2, new t_({ localConfig: t, configKeys: n })];
            });
          });
        },
        tS = (function () {
          function e(e) {
            (this.config = e),
              this.config.loggerProvider.debug(
                "Local configuration before merging with remote config",
                JSON.stringify(this.config, null, 2),
              );
          }
          return (
            (e.prototype.initialize = function () {
              return (0, c.sH)(this, void 0, void 0, function () {
                var e;
                return (0, c.YH)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (e = this),
                        [
                          4,
                          tE({
                            localConfig: this.config,
                            configKeys: ["analyticsSDK"],
                          }),
                        ]
                      );
                    case 1:
                      return (e.remoteConfigFetch = t.sent()), [2];
                  }
                });
              });
            }),
            (e.prototype.generateJoinedConfig = function () {
              var e, t, n, r;
              return (0, c.sH)(this, void 0, void 0, function () {
                var i, o, s;
                return (0, c.YH)(this, function (u) {
                  switch (u.label) {
                    case 0:
                      if (
                        (u.trys.push([0, 3, , 4]),
                        !(o = this.remoteConfigFetch))
                      )
                        return [3, 2];
                      return [
                        4,
                        this.remoteConfigFetch.getRemoteConfig(
                          "analyticsSDK",
                          "browserSDK",
                          this.config.sessionId,
                        ),
                      ];
                    case 1:
                      (o = u.sent()), (u.label = 2);
                    case 2:
                      return (
                        (i = o),
                        this.config.loggerProvider.debug(
                          "Remote configuration:",
                          JSON.stringify(i, null, 2),
                        ),
                        i &&
                          "autocapture" in i &&
                          ("boolean" == typeof i.autocapture &&
                            (this.config.autocapture = i.autocapture),
                          "object" == typeof i.autocapture &&
                            (void 0 === this.config.autocapture &&
                              (this.config.autocapture = i.autocapture),
                            "boolean" == typeof this.config.autocapture &&
                              (this.config.autocapture = (0, c.Cl)(
                                {
                                  attribution: this.config.autocapture,
                                  fileDownloads: this.config.autocapture,
                                  formInteractions: this.config.autocapture,
                                  pageViews: this.config.autocapture,
                                  sessions: this.config.autocapture,
                                  elementInteractions: this.config.autocapture,
                                },
                                i.autocapture,
                              )),
                            "object" == typeof this.config.autocapture &&
                              (this.config.autocapture = (0, c.Cl)(
                                (0, c.Cl)({}, this.config.autocapture),
                                i.autocapture,
                              ))),
                          (this.config.defaultTracking =
                            this.config.autocapture)),
                        this.config.loggerProvider.debug(
                          "Joined configuration: ",
                          JSON.stringify(this.config, null, 2),
                        ),
                        (null !== (e = (r = this.config).requestMetadata) &&
                          void 0 !== e) ||
                          (r.requestMetadata = new T()),
                        (null === (t = this.remoteConfigFetch) || void 0 === t
                          ? void 0
                          : t.metrics.fetchTimeAPISuccess) &&
                          this.config.requestMetadata.recordHistogram(
                            "remote_config_fetch_time_API_success",
                            this.remoteConfigFetch.metrics.fetchTimeAPISuccess,
                          ),
                        (null === (n = this.remoteConfigFetch) || void 0 === n
                          ? void 0
                          : n.metrics.fetchTimeAPIFail) &&
                          this.config.requestMetadata.recordHistogram(
                            "remote_config_fetch_time_API_fail",
                            this.remoteConfigFetch.metrics.fetchTimeAPIFail,
                          ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (s = u.sent()),
                        this.config.loggerProvider.error(
                          "Failed to fetch remote configuration because of error: ",
                          s,
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, this.config];
                  }
                });
              });
            }),
            e
          );
        })(),
        tI = [
          "a",
          "button",
          "input",
          "select",
          "textarea",
          "label",
          "video",
          "audio",
          '[contenteditable="true" i]',
          "[data-amp-default-track]",
          ".amp-default-track",
        ],
        tT = ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6"],
        tk = "[Amplitude] Element Clicked",
        tC = "[Amplitude] Element Tag",
        tP = "[Amplitude] Element Text",
        tO = "[Amplitude] Element Selector",
        tA = "[Amplitude] Page URL",
        tx = "https://app.amplitude.com",
        tN = {
          US: tx,
          EU: "https://app.eu.amplitude.com",
          STAGING: "https://apps.stag2.amplitude.com",
        },
        tR = "amp-visual-tagging-selector-highlight",
        tH = function (e) {
          return e && "number" == typeof e.length && "function" != typeof e;
        };
      function tL(e) {
        return "function" == typeof e;
      }
      function tU(e) {
        return tL(null == e ? void 0 : e.then);
      }
      function tD(e) {
        var t = e(function (e) {
          Error.call(e), (e.stack = Error().stack);
        });
        return (
          (t.prototype = Object.create(Error.prototype)),
          (t.prototype.constructor = t),
          t
        );
      }
      var tq = tD(function (e) {
        return function (t) {
          e(this),
            (this.message = t
              ? t.length +
                " errors occurred during unsubscription:\n" +
                t
                  .map(function (e, t) {
                    return t + 1 + ") " + e.toString();
                  })
                  .join("\n  ")
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = t);
        };
      });
      function tY(e, t) {
        if (e) {
          var n = e.indexOf(t);
          0 <= n && e.splice(n, 1);
        }
      }
      var tj = (function () {
        var e;
        function t(e) {
          (this.initialTeardown = e),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        return (
          (t.prototype.unsubscribe = function () {
            if (!this.closed) {
              this.closed = !0;
              var e,
                t,
                n,
                r,
                i,
                o = this._parentage;
              if (o) {
                if (((this._parentage = null), Array.isArray(o)))
                  try {
                    for (
                      var s = (0, c.Ju)(o), u = s.next();
                      !u.done;
                      u = s.next()
                    )
                      u.value.remove(this);
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      u && !u.done && (t = s.return) && t.call(s);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                else o.remove(this);
              }
              var a = this.initialTeardown;
              if (tL(a))
                try {
                  a();
                } catch (e) {
                  i = e instanceof tq ? e.errors : [e];
                }
              var l = this._finalizers;
              if (l) {
                this._finalizers = null;
                try {
                  for (
                    var d = (0, c.Ju)(l), f = d.next();
                    !f.done;
                    f = d.next()
                  ) {
                    var v = f.value;
                    try {
                      tF(v);
                    } catch (e) {
                      (i = null != i ? i : []),
                        e instanceof tq
                          ? (i = (0, c.fX)(
                              (0, c.fX)([], (0, c.zs)(i)),
                              (0, c.zs)(e.errors),
                            ))
                          : i.push(e);
                    }
                  }
                } catch (e) {
                  n = { error: e };
                } finally {
                  try {
                    f && !f.done && (r = d.return) && r.call(d);
                  } finally {
                    if (n) throw n.error;
                  }
                }
              }
              if (i) throw new tq(i);
            }
          }),
          (t.prototype.add = function (e) {
            var n;
            if (e && e !== this) {
              if (this.closed) tF(e);
              else {
                if (e instanceof t) {
                  if (e.closed || e._hasParent(this)) return;
                  e._addParent(this);
                }
                (this._finalizers =
                  null !== (n = this._finalizers) && void 0 !== n
                    ? n
                    : []).push(e);
              }
            }
          }),
          (t.prototype._hasParent = function (e) {
            var t = this._parentage;
            return t === e || (Array.isArray(t) && t.includes(e));
          }),
          (t.prototype._addParent = function (e) {
            var t = this._parentage;
            this._parentage = Array.isArray(t)
              ? (t.push(e), t)
              : t
                ? [t, e]
                : e;
          }),
          (t.prototype._removeParent = function (e) {
            var t = this._parentage;
            t === e ? (this._parentage = null) : Array.isArray(t) && tY(t, e);
          }),
          (t.prototype.remove = function (e) {
            var n = this._finalizers;
            n && tY(n, e), e instanceof t && e._removeParent(this);
          }),
          ((e = new t()).closed = !0),
          (t.EMPTY = e),
          t
        );
      })();
      function tM(e) {
        return (
          e instanceof tj ||
          (e && "closed" in e && tL(e.remove) && tL(e.add) && tL(e.unsubscribe))
        );
      }
      function tF(e) {
        tL(e) ? e() : e.unsubscribe();
      }
      tj.EMPTY;
      var tz = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1,
        },
        t$ = {
          setTimeout: function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            var i = t$.delegate;
            return (null == i ? void 0 : i.setTimeout)
              ? i.setTimeout.apply(i, (0, c.fX)([e, t], (0, c.zs)(n)))
              : setTimeout.apply(void 0, (0, c.fX)([e, t], (0, c.zs)(n)));
          },
          clearTimeout: function (e) {
            var t = t$.delegate;
            return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
          },
          delegate: void 0,
        };
      function tV(e) {
        t$.setTimeout(function () {
          var t = tz.onUnhandledError;
          if (t) t(e);
          else throw e;
        });
      }
      function tJ() {}
      var tK = tX("C", void 0, void 0);
      function tX(e, t, n) {
        return { kind: e, value: t, error: n };
      }
      var tQ = null,
        tW = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.isStopped = !1),
              t
                ? ((n.destination = t), tM(t) && t.add(n))
                : (n.destination = t4),
              n
            );
          }
          return (
            (0, c.C6)(t, e),
            (t.create = function (e, t, n) {
              return new t0(e, t, n);
            }),
            (t.prototype.next = function (e) {
              this.isStopped ? t2(tX("N", e, void 0), this) : this._next(e);
            }),
            (t.prototype.error = function (e) {
              this.isStopped
                ? t2(tX("E", void 0, e), this)
                : ((this.isStopped = !0), this._error(e));
            }),
            (t.prototype.complete = function () {
              this.isStopped
                ? t2(tK, this)
                : ((this.isStopped = !0), this._complete());
            }),
            (t.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0),
                e.prototype.unsubscribe.call(this),
                (this.destination = null));
            }),
            (t.prototype._next = function (e) {
              this.destination.next(e);
            }),
            (t.prototype._error = function (e) {
              try {
                this.destination.error(e);
              } finally {
                this.unsubscribe();
              }
            }),
            (t.prototype._complete = function () {
              try {
                this.destination.complete();
              } finally {
                this.unsubscribe();
              }
            }),
            t
          );
        })(tj),
        tB = Function.prototype.bind;
      function tG(e, t) {
        return tB.call(e, t);
      }
      var tZ = (function () {
          function e(e) {
            this.partialObserver = e;
          }
          return (
            (e.prototype.next = function (e) {
              var t = this.partialObserver;
              if (t.next)
                try {
                  t.next(e);
                } catch (e) {
                  t1(e);
                }
            }),
            (e.prototype.error = function (e) {
              var t = this.partialObserver;
              if (t.error)
                try {
                  t.error(e);
                } catch (e) {
                  t1(e);
                }
              else t1(e);
            }),
            (e.prototype.complete = function () {
              var e = this.partialObserver;
              if (e.complete)
                try {
                  e.complete();
                } catch (e) {
                  t1(e);
                }
            }),
            e
          );
        })(),
        t0 = (function (e) {
          function t(t, n, r) {
            var i,
              o,
              s = e.call(this) || this;
            return (
              tL(t) || !t
                ? (i = {
                    next: null != t ? t : void 0,
                    error: null != n ? n : void 0,
                    complete: null != r ? r : void 0,
                  })
                : s && tz.useDeprecatedNextContext
                  ? (((o = Object.create(t)).unsubscribe = function () {
                      return s.unsubscribe();
                    }),
                    (i = {
                      next: t.next && tG(t.next, o),
                      error: t.error && tG(t.error, o),
                      complete: t.complete && tG(t.complete, o),
                    }))
                  : (i = t),
              (s.destination = new tZ(i)),
              s
            );
          }
          return (0, c.C6)(t, e), t;
        })(tW);
      function t1(e) {
        if (tz.useDeprecatedSynchronousErrorHandling)
          tz.useDeprecatedSynchronousErrorHandling &&
            tQ &&
            ((tQ.errorThrown = !0), (tQ.error = e));
        else tV(e);
      }
      function t2(e, t) {
        var n = tz.onStoppedNotification;
        n &&
          t$.setTimeout(function () {
            return n(e, t);
          });
      }
      var t4 = {
          closed: !0,
          next: tJ,
          error: function (e) {
            throw e;
          },
          complete: tJ,
        },
        t3 =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable";
      function t5(e) {
        return e;
      }
      var t6 = (function () {
        function e(e) {
          e && (this._subscribe = e);
        }
        return (
          (e.prototype.lift = function (t) {
            var n = new e();
            return (n.source = this), (n.operator = t), n;
          }),
          (e.prototype.subscribe = function (e, t, n) {
            var r = this,
              i = !(function (e) {
                return (
                  (e && e instanceof tW) ||
                  (e && tL(e.next) && tL(e.error) && tL(e.complete) && tM(e))
                );
              })(e)
                ? new t0(e, t, n)
                : e;
            return (
              (function (e) {
                if (tz.useDeprecatedSynchronousErrorHandling) {
                  var t = !tQ;
                  if ((t && (tQ = { errorThrown: !1, error: null }), e(), t)) {
                    var n = tQ,
                      r = n.errorThrown,
                      i = n.error;
                    if (((tQ = null), r)) throw i;
                  }
                } else e();
              })(function () {
                var e = r.operator,
                  t = r.source;
                i.add(
                  e ? e.call(i, t) : t ? r._subscribe(i) : r._trySubscribe(i),
                );
              }),
              i
            );
          }),
          (e.prototype._trySubscribe = function (e) {
            try {
              return this._subscribe(e);
            } catch (t) {
              e.error(t);
            }
          }),
          (e.prototype.forEach = function (e, t) {
            var n = this;
            return new (t = t9(t))(function (t, r) {
              var i = new t0({
                next: function (t) {
                  try {
                    e(t);
                  } catch (e) {
                    r(e), i.unsubscribe();
                  }
                },
                error: r,
                complete: t,
              });
              n.subscribe(i);
            });
          }),
          (e.prototype._subscribe = function (e) {
            var t;
            return null === (t = this.source) || void 0 === t
              ? void 0
              : t.subscribe(e);
          }),
          (e.prototype[t3] = function () {
            return this;
          }),
          (e.prototype.pipe = function () {
            for (var e, t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            return (
              0 === (e = t).length
                ? t5
                : 1 === e.length
                  ? e[0]
                  : function (t) {
                      return e.reduce(function (e, t) {
                        return t(e);
                      }, t);
                    }
            )(this);
          }),
          (e.prototype.toPromise = function (e) {
            var t = this;
            return new (e = t9(e))(function (e, n) {
              var r;
              t.subscribe(
                function (e) {
                  return (r = e);
                },
                function (e) {
                  return n(e);
                },
                function () {
                  return e(r);
                },
              );
            });
          }),
          (e.create = function (t) {
            return new e(t);
          }),
          e
        );
      })();
      function t9(e) {
        var t;
        return null !== (t = null != e ? e : tz.Promise) && void 0 !== t
          ? t
          : Promise;
      }
      function t8(e) {
        return (
          Symbol.asyncIterator &&
          tL(null == e ? void 0 : e[Symbol.asyncIterator])
        );
      }
      function t7(e) {
        return TypeError(
          "You provided " +
            (null !== e && "object" == typeof e
              ? "an invalid object"
              : "'" + e + "'") +
            " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.",
        );
      }
      var ne =
        "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      function nt(e) {
        return tL(null == e ? void 0 : e[ne]);
      }
      function nn(e) {
        return (0, c.AQ)(this, arguments, function () {
          var t, n, r;
          return (0, c.YH)(this, function (i) {
            switch (i.label) {
              case 0:
                (t = e.getReader()), (i.label = 1);
              case 1:
                i.trys.push([1, , 9, 10]), (i.label = 2);
              case 2:
                return [4, (0, c.N3)(t.read())];
              case 3:
                if (((r = (n = i.sent()).value), !n.done)) return [3, 5];
                return [4, (0, c.N3)(void 0)];
              case 4:
                return [2, i.sent()];
              case 5:
                return [4, (0, c.N3)(r)];
              case 6:
                return [4, i.sent()];
              case 7:
                return i.sent(), [3, 2];
              case 8:
                return [3, 10];
              case 9:
                return t.releaseLock(), [7];
              case 10:
                return [2];
            }
          });
        });
      }
      function nr(e) {
        return tL(null == e ? void 0 : e.getReader);
      }
      function ni(e) {
        if (e instanceof t6) return e;
        if (null != e) {
          var t, n, r, i;
          if (tL(e[t3])) {
            return (
              (t = e),
              new t6(function (e) {
                var n = t[t3]();
                if (tL(n.subscribe)) return n.subscribe(e);
                throw TypeError(
                  "Provided object does not correctly implement Symbol.observable",
                );
              })
            );
          }
          if (tH(e)) {
            return (
              (n = e),
              new t6(function (e) {
                for (var t = 0; t < n.length && !e.closed; t++) e.next(n[t]);
                e.complete();
              })
            );
          }
          if (tU(e)) {
            return (
              (r = e),
              new t6(function (e) {
                r.then(
                  function (t) {
                    e.closed || (e.next(t), e.complete());
                  },
                  function (t) {
                    return e.error(t);
                  },
                ).then(null, tV);
              })
            );
          }
          if (t8(e)) return no(e);
          if (nt(e)) {
            return (
              (i = e),
              new t6(function (e) {
                var t, n;
                try {
                  for (
                    var r = (0, c.Ju)(i), o = r.next();
                    !o.done;
                    o = r.next()
                  ) {
                    var s = o.value;
                    if ((e.next(s), e.closed)) return;
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    o && !o.done && (n = r.return) && n.call(r);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                e.complete();
              })
            );
          }
          if (nr(e)) return no(nn(e));
        }
        throw t7(e);
      }
      function no(e) {
        return new t6(function (t) {
          (function (e, t) {
            var n, r, i, o;
            return (0, c.sH)(this, void 0, void 0, function () {
              var s;
              return (0, c.YH)(this, function (u) {
                switch (u.label) {
                  case 0:
                    u.trys.push([0, 5, 6, 11]),
                      (n = (0, c.xN)(e)),
                      (u.label = 1);
                  case 1:
                    return [4, n.next()];
                  case 2:
                    if ((r = u.sent()).done) return [3, 4];
                    if (((s = r.value), t.next(s), t.closed)) return [2];
                    u.label = 3;
                  case 3:
                    return [3, 1];
                  case 4:
                    return [3, 11];
                  case 5:
                    return (i = { error: u.sent() }), [3, 11];
                  case 6:
                    if (
                      (u.trys.push([6, , 9, 10]),
                      !(r && !r.done && (o = n.return)))
                    )
                      return [3, 8];
                    return [4, o.call(n)];
                  case 7:
                    u.sent(), (u.label = 8);
                  case 8:
                    return [3, 10];
                  case 9:
                    if (i) throw i.error;
                    return [7];
                  case 10:
                    return [7];
                  case 11:
                    return t.complete(), [2];
                }
              });
            });
          })(e, t).catch(function (e) {
            return t.error(e);
          });
        });
      }
      function ns(e) {
        return function (t) {
          if (tL(null == t ? void 0 : t.lift))
            return t.lift(function (t) {
              try {
                return e(t, this);
              } catch (e) {
                this.error(e);
              }
            });
          throw TypeError("Unable to lift unknown Observable type");
        };
      }
      function nu(e, t, n, r, i) {
        return new na(e, t, n, r, i);
      }
      var na = (function (e) {
        function t(t, n, r, i, o, s) {
          var u = e.call(this, t) || this;
          return (
            (u.onFinalize = o),
            (u.shouldUnsubscribe = s),
            (u._next = n
              ? function (e) {
                  try {
                    n(e);
                  } catch (e) {
                    t.error(e);
                  }
                }
              : e.prototype._next),
            (u._error = i
              ? function (e) {
                  try {
                    i(e);
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._error),
            (u._complete = r
              ? function () {
                  try {
                    r();
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._complete),
            u
          );
        }
        return (
          (0, c.C6)(t, e),
          (t.prototype.unsubscribe = function () {
            var t;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
              var n = this.closed;
              e.prototype.unsubscribe.call(this),
                n ||
                  null === (t = this.onFinalize) ||
                  void 0 === t ||
                  t.call(this);
            }
          }),
          t
        );
      })(tW);
      function nc(e, t) {
        return ns(function (n, r) {
          var i = 0;
          n.subscribe(
            nu(r, function (n) {
              r.next(e.call(t, n, i++));
            }),
          );
        });
      }
      function nl(e, t, n, r, i) {
        void 0 === r && (r = 0), void 0 === i && (i = !1);
        var o = t.schedule(function () {
          n(), i ? e.add(this.schedule(null, r)) : this.unsubscribe();
        }, r);
        if ((e.add(o), !i)) return o;
      }
      function nd(e, t, n) {
        return (void 0 === n && (n = 1 / 0), tL(t))
          ? nd(function (n, r) {
              return nc(function (e, i) {
                return t(n, e, r, i);
              })(ni(e(n, r)));
            }, n)
          : ("number" == typeof t && (n = t),
            ns(function (t, r) {
              var i, o, s, u, a, c, l, d, f;
              return (
                (i = n),
                (s = []),
                (u = 0),
                (a = 0),
                (c = !1),
                (l = function () {
                  !c || s.length || u || r.complete();
                }),
                (d = function (e) {
                  return u < i ? f(e) : s.push(e);
                }),
                (f = function (t) {
                  u++;
                  var n = !1;
                  ni(e(t, a++)).subscribe(
                    nu(
                      r,
                      function (e) {
                        o ? d(e) : r.next(e);
                      },
                      function () {
                        n = !0;
                      },
                      void 0,
                      function () {
                        if (n)
                          try {
                            for (u--; s.length && u < i; )
                              !(function () {
                                var e = s.shift();
                                f(e);
                              })();
                            l();
                          } catch (e) {
                            r.error(e);
                          }
                      },
                    ),
                  );
                }),
                t.subscribe(
                  nu(r, d, function () {
                    (c = !0), l();
                  }),
                ),
                function () {}
              );
            }));
      }
      var nf = Array.isArray,
        nv = ["addListener", "removeListener"],
        nh = ["addEventListener", "removeEventListener"],
        np = ["on", "off"];
      function ng(e, t, n, r) {
        if ((tL(n) && ((r = n), (n = void 0)), r)) {
          return ng(e, t, n).pipe(
            ((i = r),
            nc(function (e) {
              return nf(e)
                ? i.apply(void 0, (0, c.fX)([], (0, c.zs)(e)))
                : i(e);
            })),
          );
        }
        var i,
          o,
          s,
          u,
          a = (0, c.zs)(
            tL((o = e).addEventListener) && tL(o.removeEventListener)
              ? nh.map(function (r) {
                  return function (i) {
                    return e[r](t, i, n);
                  };
                })
              : tL((s = e).addListener) && tL(s.removeListener)
                ? nv.map(nm(e, t))
                : tL((u = e).on) && tL(u.off)
                  ? np.map(nm(e, t))
                  : [],
            2,
          ),
          l = a[0],
          d = a[1];
        if (!l && tH(e))
          return nd(function (e) {
            return ng(e, t, n);
          })(ni(e));
        if (!l) throw TypeError("Invalid event target");
        return new t6(function (e) {
          var t = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            return e.next(1 < t.length ? t : t[0]);
          };
          return (
            l(t),
            function () {
              return d(t);
            }
          );
        });
      }
      function nm(e, t) {
        return function (n) {
          return function (r) {
            return e[n](t, r);
          };
        };
      }
      function ny(e, t, n) {
        for (
          var r = null, i = [], o = e, u = 0;
          o &&
          "break" !==
            (function () {
              var e,
                a,
                l,
                d,
                f = nk(
                  (e = o.getAttribute("id")) && s.idName(e)
                    ? { name: "#" + CSS.escape(e), penalty: 0 }
                    : null,
                ) ||
                  nk.apply(
                    void 0,
                    (0, c.fX)(
                      [],
                      (0, c.zs)(
                        Array.from(o.attributes)
                          .filter(function (e) {
                            return s.attr(e.name, e.value);
                          })
                          .map(function (e) {
                            return {
                              name: "["
                                .concat(CSS.escape(e.name), '="')
                                .concat(CSS.escape(e.value), '"]'),
                              penalty: 0.5,
                            };
                          }),
                      ),
                      !1,
                    ),
                  ) ||
                  nk.apply(
                    void 0,
                    (0, c.fX)(
                      [],
                      (0, c.zs)(
                        Array.from(o.classList)
                          .filter(s.className)
                          .map(function (e) {
                            return { name: "." + CSS.escape(e), penalty: 1 };
                          }),
                      ),
                      !1,
                    ),
                  ) ||
                  nk(
                    ((a = o.tagName.toLowerCase()),
                    s.tagName(a) ? { name: a, penalty: 2 } : null),
                  ) || [nS()],
                v = (function (e) {
                  var t = e.parentNode;
                  if (!t) return null;
                  var n = t.firstChild;
                  if (!n) return null;
                  for (
                    var r = 0;
                    n && (n.nodeType === Node.ELEMENT_NODE && r++, n !== e);

                  )
                    n = n.nextSibling;
                  return r;
                })(o);
              if ("all" == t)
                v &&
                  (f = f.concat(
                    f.filter(nT).map(function (e) {
                      return nI(e, v);
                    }),
                  ));
              else if ("two" == t)
                (f = f.slice(0, 1)),
                  v &&
                    (f = f.concat(
                      f.filter(nT).map(function (e) {
                        return nI(e, v);
                      }),
                    ));
              else if ("one" == t) {
                var h = (0, c.zs)((f = f.slice(0, 1)), 1)[0];
                v && nT(h) && (f = [nI(h, v)]);
              } else "none" == t && ((f = [nS()]), v && (f = [nI(f[0], v)]));
              try {
                for (
                  var p = ((l = void 0), (0, c.Ju)(f)), g = p.next();
                  !g.done;
                  g = p.next()
                ) {
                  var h = g.value;
                  h.level = u;
                }
              } catch (e) {
                l = { error: e };
              } finally {
                try {
                  g && !g.done && (d = p.return) && d.call(p);
                } finally {
                  if (l) throw l.error;
                }
              }
              if ((i.push(f), i.length >= s.seedMinLength && (r = nb(i, n))))
                return "break";
              (o = o.parentElement), u++;
            })();

        );
        return (r || (r = nb(i, n)), !r && n) ? n() : r;
      }
      function nb(e, t) {
        if (
          e.reduce(function (e, t) {
            return e * t.length;
          }, 1) > s.threshold
        )
          return t ? t() : null;
        var n,
          r,
          i = nP(
            (function e(t, n) {
              var r, i, o, s, u;
              return (
                void 0 === n && (n = []),
                (0, c.YH)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (!(t.length > 0)) return [3, 9];
                      a.label = 1;
                    case 1:
                      a.trys.push([1, 6, 7, 8]),
                        (i = (r = (0, c.Ju)(t[0])).next()),
                        (a.label = 2);
                    case 2:
                      if (i.done) return [3, 5];
                      return (
                        (o = i.value),
                        [5, (0, c.Ju)(e(t.slice(1, t.length), n.concat(o)))]
                      );
                    case 3:
                      a.sent(), (a.label = 4);
                    case 4:
                      return (i = r.next()), [3, 2];
                    case 5:
                      return [3, 8];
                    case 6:
                      return (s = { error: a.sent() }), [3, 8];
                    case 7:
                      try {
                        i && !i.done && (u = r.return) && u.call(r);
                      } finally {
                        if (s) throw s.error;
                      }
                      return [7];
                    case 8:
                      return [3, 11];
                    case 9:
                      return [4, n];
                    case 10:
                      a.sent(), (a.label = 11);
                    case 11:
                      return [2];
                  }
                })
              );
            })(e),
          );
        try {
          for (var o = (0, c.Ju)(i), u = o.next(); !u.done; u = o.next()) {
            var a = u.value;
            if (nE(a)) return a;
          }
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            u && !u.done && (r = o.return) && r.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
        return null;
      }
      function nw(e) {
        for (var t = e[0], n = t.name, r = 1; r < e.length; r++) {
          var i = e[r].level || 0;
          (n =
            t.level === i - 1
              ? "".concat(e[r].name, " > ").concat(n)
              : "".concat(e[r].name, " ").concat(n)),
            (t = e[r]);
        }
        return n;
      }
      function n_(e) {
        return e
          .map(function (e) {
            return e.penalty;
          })
          .reduce(function (e, t) {
            return e + t;
          }, 0);
      }
      function nE(e) {
        var t = nw(e);
        switch (u.querySelectorAll(t).length) {
          case 0:
            throw Error("Can't select any node with this selector: ".concat(t));
          case 1:
            return !0;
          default:
            return !1;
        }
      }
      function nS() {
        return { name: "*", penalty: 3 };
      }
      function nI(e, t) {
        return {
          name: e.name + ":nth-child(".concat(t, ")"),
          penalty: e.penalty + 1,
        };
      }
      function nT(e) {
        return "html" !== e.name && !e.name.startsWith("#");
      }
      function nk() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = e.filter(nC);
        return n.length > 0 ? n : null;
      }
      function nC(e) {
        return null != e;
      }
      function nP(e) {
        return (0, c.fX)([], (0, c.zs)(e), !1).sort(function (e, t) {
          return n_(e) - n_(t);
        });
      }
      var nO = ["input", "select", "textarea"],
        nA = function (e, t) {
          return function (n, r) {
            var i,
              o,
              s,
              u = e.pageUrlAllowlist,
              a = e.shouldTrackEventResolver,
              c =
                null ===
                  (o =
                    null === (i = null == r ? void 0 : r.tagName) ||
                    void 0 === i
                      ? void 0
                      : i.toLowerCase) || void 0 === o
                  ? void 0
                  : o.call(i);
            if (!c) return !1;
            if (a) return a(n, r);
            if (!nL(window.location.href, u)) return !1;
            var l = String(null == r ? void 0 : r.getAttribute("type")) || "";
            if ("string" == typeof l)
              switch (l.toLowerCase()) {
                case "hidden":
                case "password":
                  return !1;
              }
            if (
              t &&
              !t.some(function (e) {
                var t;
                return !!(null === (t = null == r ? void 0 : r.matches) ||
                void 0 === t
                  ? void 0
                  : t.call(r, e));
              })
            )
              return !1;
            switch (c) {
              case "input":
              case "select":
              case "textarea":
                return "change" === n || "click" === n;
              default:
                var d =
                  null ===
                    (s = null == window ? void 0 : window.getComputedStyle) ||
                  void 0 === s
                    ? void 0
                    : s.call(window, r);
                if (
                  d &&
                  "pointer" === d.getPropertyValue("cursor") &&
                  "click" === n
                )
                  return !0;
                return "click" === n;
            }
          };
        },
        nx = function (e) {
          return !(
            null == e ||
            ("string" == typeof e &&
              (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(
                (e || "").replace(/[- ]/g, ""),
              ) ||
                /(^\d{3}-?\d{2}-?\d{4}$)/.test(e)))
          );
        },
        nN = function (e) {
          var t,
            n,
            r,
            i =
              null ===
                (n =
                  null === (t = null == e ? void 0 : e.tagName) || void 0 === t
                    ? void 0
                    : t.toLowerCase) || void 0 === n
                ? void 0
                : n.call(t),
            o =
              e instanceof HTMLElement &&
              (null === (r = e.getAttribute("contenteditable")) || void 0 === r
                ? void 0
                : r.toLowerCase()) === "true";
          return !nO.includes(i) && !o;
        },
        nR = function (e) {
          var t = "";
          return (
            nN(e) &&
              e.childNodes &&
              e.childNodes.length &&
              e.childNodes.forEach(function (e) {
                var n = "";
                e && 3 === e.nodeType
                  ? e.textContent && (n = e.textContent)
                  : (n = nR(e)),
                  (t += n
                    .split(/(\s+)/)
                    .filter(nx)
                    .join("")
                    .replace(/[\r\n]/g, " ")
                    .replace(/[ ]+/g, " ")
                    .substring(0, 255));
              }),
            t
          );
        },
        nH = function (e, t) {
          var n,
            r,
            i = "";
          try {
            return (i = (function (e, t) {
              if (e.nodeType !== Node.ELEMENT_NODE)
                throw Error(
                  "Can't generate CSS selector for non-element node type.",
                );
              if ("html" === e.tagName.toLowerCase()) return "html";
              var n,
                r,
                i = {
                  root: document.body,
                  idName: function (e) {
                    return !0;
                  },
                  className: function (e) {
                    return !0;
                  },
                  tagName: function (e) {
                    return !0;
                  },
                  attr: function (e, t) {
                    return !1;
                  },
                  seedMinLength: 1,
                  optimizedMinLength: 2,
                  threshold: 1e3,
                  maxNumberOfTries: 1e4,
                };
              (n = (s = (0, c.Cl)((0, c.Cl)({}, i), t)).root),
                (r = i),
                (u =
                  n.nodeType === Node.DOCUMENT_NODE
                    ? n
                    : n === r.root
                      ? n.ownerDocument
                      : n);
              var o = ny(e, "all", function () {
                return ny(e, "two", function () {
                  return ny(e, "one", function () {
                    return ny(e, "none");
                  });
                });
              });
              if (o) {
                var a = nP(
                  (function e(t, n, r) {
                    var i, o, a;
                    return (
                      void 0 === r && (r = { counter: 0, visited: new Map() }),
                      (0, c.YH)(this, function (l) {
                        switch (l.label) {
                          case 0:
                            if (
                              !(t.length > 2 && t.length > s.optimizedMinLength)
                            )
                              return [3, 5];
                            (i = 1), (l.label = 1);
                          case 1:
                            var d, f;
                            if (!(i < t.length - 1)) return [3, 5];
                            if (
                              r.counter > s.maxNumberOfTries ||
                              ((r.counter += 1),
                              (o = (0, c.fX)([], (0, c.zs)(t), !1)).splice(
                                i,
                                1,
                              ),
                              (a = nw(o)),
                              r.visited.has(a))
                            )
                              return [2];
                            if (
                              !(
                                nE(o) &&
                                ((d = o), (f = n), u.querySelector(nw(d)) === f)
                              )
                            )
                              return [3, 4];
                            return [4, o];
                          case 2:
                            return (
                              l.sent(),
                              r.visited.set(a, !0),
                              [5, (0, c.Ju)(e(o, n, r))]
                            );
                          case 3:
                            l.sent(), (l.label = 4);
                          case 4:
                            return i++, [3, 1];
                          case 5:
                            return [2];
                        }
                      })
                    );
                  })(o, e),
                );
                return a.length > 0 && (o = a[0]), nw(o);
              }
              throw Error("Selector was not found.");
            })(e, {
              className: function (e) {
                return e !== tR;
              },
              maxNumberOfTries: 1e3,
            }));
          } catch (e) {
            t &&
              t.warn(
                "Failed to get selector with finder, use fallback strategy instead: ".concat(
                  e.toString(),
                ),
              );
          }
          var o =
            null ===
              (r =
                null === (n = null == e ? void 0 : e.tagName) || void 0 === n
                  ? void 0
                  : n.toLowerCase) || void 0 === r
              ? void 0
              : r.call(n);
          o && (i = o);
          var a = e.getAttribute("id"),
            l = e.getAttribute("class");
          if (a) i = "#".concat(a);
          else if (l) {
            var d = l
              .split(" ")
              .filter(function (e) {
                return e !== tR;
              })
              .join(".");
            d && (i = "".concat(i, ".").concat(d));
          }
          return i;
        },
        nL = function (e, t) {
          return (
            !t ||
            !t.length ||
            t.some(function (t) {
              return "string" == typeof t ? e === t : e.match(t);
            })
          );
        },
        nU = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r = e[n];
            return (
              null != r &&
                ("object" != typeof r || 0 !== Object.keys(r).length) &&
                ("string" != typeof r || 0 !== r.trim().length) &&
                (t[n] = r),
              t
            );
          }, {});
        },
        nD = function (e) {
          var t,
            n = e.parentElement;
          if (!n) return "";
          try {
            t = n.querySelector(":scope>span,h1,h2,h3,h4,h5,h6");
          } catch (e) {
            t = null;
          }
          if (t) {
            var r = t.textContent || "";
            return nx(r) ? r : "";
          }
          return nD(n);
        },
        nq = function (e, t) {
          return e
            ? t.some(function (t) {
                var n;
                return null === (n = null == e ? void 0 : e.matches) ||
                  void 0 === n
                  ? void 0
                  : n.call(e, t);
              })
              ? e
              : nq(null == e ? void 0 : e.parentElement, t)
            : null;
        },
        nY = function (e, t) {
          if (!e) return {};
          var n,
            r,
            i,
            o =
              null ===
                (i =
                  null === (r = null == e ? void 0 : e.tagName) || void 0 === r
                    ? void 0
                    : r.toLowerCase) || void 0 === i
                ? void 0
                : i.call(r),
            s = nH(e, t);
          return nU(
            (((n = {})[tC] = o),
            (n[tP] = nR(e)),
            (n[tO] = s),
            (n[tA] = window.location.href.split("?")[0]),
            n),
          );
        },
        nj = function (e) {
          return null !== e.event.target && !!e.closestTrackedAncestor;
        },
        nM = (function () {
          function e(e) {
            var t = (void 0 === e ? {} : e).origin,
              n = this;
            (this.endpoint = tx),
              (this.requestCallbacks = {}),
              (this.onSelect = function (e) {
                n.notify({ action: "element-selected", data: e });
              }),
              (this.onTrack = function (e, t) {
                "selector-mode-changed" === e
                  ? n.notify({ action: "track-selector-mode-changed", data: t })
                  : "selector-moved" === e &&
                    n.notify({ action: "track-selector-moved", data: t });
              }),
              (this.endpoint = void 0 === t ? tx : t);
          }
          return (
            (e.prototype.notify = function (e) {
              var t, n, r, i;
              null ===
                (n =
                  null === (t = this.logger) || void 0 === t
                    ? void 0
                    : t.debug) ||
                void 0 === n ||
                n.call(t, "Message sent: ", JSON.stringify(e)),
                null ===
                  (i =
                    null === (r = window.opener) || void 0 === r
                      ? void 0
                      : r.postMessage) ||
                  void 0 === i ||
                  i.call(r, e, this.endpoint);
            }),
            (e.prototype.sendRequest = function (e, t, n) {
              var r = this;
              void 0 === n && (n = { timeout: 15e3 });
              var i = ""
                  .concat(Date.now(), "-")
                  .concat(Math.random().toString(36).substr(2, 9)),
                o = { id: i, action: e, args: t };
              return new Promise(function (t, s) {
                (r.requestCallbacks[i] = { resolve: t, reject: s }),
                  r.notify(o),
                  (null == n ? void 0 : n.timeout) > 0 &&
                    setTimeout(function () {
                      s(Error("".concat(e, " timed out (id: ").concat(i, ")"))),
                        delete r.requestCallbacks[i];
                    }, n.timeout);
              });
            }),
            (e.prototype.handleResponse = function (e) {
              var t;
              if (!this.requestCallbacks[e.id]) {
                null === (t = this.logger) ||
                  void 0 === t ||
                  t.warn("No callback found for request id: ".concat(e.id));
                return;
              }
              this.requestCallbacks[e.id].resolve(e.responseData),
                delete this.requestCallbacks[e.id];
            }),
            (e.prototype.setup = function (e) {
              var t = this,
                n = void 0 === e ? {} : e,
                r = n.logger,
                i = n.endpoint,
                o = n.isElementSelectable,
                s = n.cssSelectorAllowlist,
                u = n.actionClickAllowlist;
              (this.logger = r),
                i && this.endpoint === tx && (this.endpoint = i);
              var a = null;
              window.addEventListener("message", function (e) {
                if (
                  (null ===
                    (r =
                      null === (n = t.logger) || void 0 === n
                        ? void 0
                        : n.debug) ||
                    void 0 === r ||
                    r.call(n, "Message received: ", JSON.stringify(e)),
                  t.endpoint === e.origin)
                ) {
                  var n,
                    r,
                    i,
                    c,
                    l,
                    d = null == e ? void 0 : e.data,
                    f = null == d ? void 0 : d.action;
                  if (f) {
                    if ("id" in d)
                      null ===
                        (c =
                          null === (i = t.logger) || void 0 === i
                            ? void 0
                            : i.debug) ||
                        void 0 === c ||
                        c.call(
                          i,
                          "Received Response to previous request: ",
                          JSON.stringify(e),
                        ),
                        t.handleResponse(d);
                    else if ("ping" === f) t.notify({ action: "pong" });
                    else if ("initialize-visual-tagging-selector" === f) {
                      var v,
                        h = null == d ? void 0 : d.data;
                      ((v =
                        "https://cdn.amplitude.com/libs/visual-tagging-selector-1.0.0-alpha.js.gz"),
                      new Promise(function (e, t) {
                        var n;
                        try {
                          var r = document.createElement("script");
                          (r.type = "text/javascript"),
                            (r.async = !0),
                            (r.src = v),
                            r.addEventListener(
                              "load",
                              function () {
                                e({ status: !0 });
                              },
                              { once: !0 },
                            ),
                            r.addEventListener("error", function () {
                              t({
                                status: !1,
                                message: "Failed to load the script ".concat(v),
                              });
                            }),
                            null === (n = document.head) ||
                              void 0 === n ||
                              n.appendChild(r);
                        } catch (e) {
                          t(e);
                        }
                      }))
                        .then(function () {
                          var e;
                          (a =
                            null ===
                              (e =
                                null == window
                                  ? void 0
                                  : window.amplitudeVisualTaggingSelector) ||
                            void 0 === e
                              ? void 0
                              : e.call(window, {
                                  getEventTagProps: nY,
                                  isElementSelectable: function (e) {
                                    return (
                                      !o ||
                                      o(
                                        (null == h ? void 0 : h.actionType) ||
                                          "click",
                                        e,
                                      )
                                    );
                                  },
                                  onTrack: t.onTrack,
                                  onSelect: t.onSelect,
                                  visualHighlightClass: tR,
                                  messenger: t,
                                  cssSelectorAllowlist: s,
                                  actionClickAllowlist: u,
                                })),
                            t.notify({ action: "selector-loaded" });
                        })
                        .catch(function () {
                          var e;
                          null === (e = t.logger) ||
                            void 0 === e ||
                            e.warn(
                              "Failed to initialize visual tagging selector",
                            );
                        });
                    } else
                      "close-visual-tagging-selector" === f &&
                        (null === (l = null == a ? void 0 : a.close) ||
                          void 0 === l ||
                          l.call(a));
                  }
                }
              }),
                this.notify({ action: "page-loaded" });
            }),
            e
          );
        })(),
        nF = [
          "id",
          "class",
          "style",
          "value",
          "onclick",
          "onchange",
          "oninput",
          "onblur",
          "onsubmit",
          "onfocus",
          "onkeydown",
          "onkeyup",
          "onkeypress",
          "data-reactid",
          "data-react-checksum",
          "data-reactroot",
        ],
        nz = ["type"],
        n$ = ["svg", "path", "g"],
        nV = ["password", "hidden"],
        nJ = function (e) {
          var t = [];
          return e
            ? (function (e, t) {
                for (var n = 0, r = 0; r < e.length; r++) {
                  var i = e[r];
                  if (null === i) n += 4;
                  else {
                    var o = (function e(t, n) {
                      void 0 === n && (n = !1);
                      try {
                        if (null == t) {
                          if (n) return "None";
                          return null;
                        }
                        if ("string" == typeof t) {
                          if (n) {
                            if (
                              (t = t
                                .replace(/\\/g, "\\\\")
                                .replace(/\n/g, "\\n")
                                .replace(/\t/g, "\\t")
                                .replace(/\r/g, "\\r")).includes('"')
                            )
                              return "'".concat(t, "'");
                            if (t.includes("'"))
                              return '"'.concat(t.replace(/'/g, "\\'"), '"');
                            return "'".concat(t, "'");
                          }
                          return t;
                        }
                        if ("boolean" == typeof t) return t ? "True" : "False";
                        else if (Array.isArray(t)) {
                          var r = t.map(function (t) {
                            return e(t, !0);
                          });
                          return "[".concat(r.join(", "), "]");
                        } else if ("object" == typeof t) {
                          var i = Object.entries(t)
                              .filter(function (e) {
                                var t = (0, c.zs)(e, 1)[0];
                                return null != t;
                              })
                              .map(function (t) {
                                var n = (0, c.zs)(t, 2),
                                  r = n[0],
                                  i = n[1];
                                return ""
                                  .concat(String(e(r, !0)), ": ")
                                  .concat(String(e(i, !0)));
                              }),
                            o = "{".concat(i.join(", "), "}");
                          return (
                            o.includes("\\'") &&
                              (o = o.replace(/'/g, "'").replace(/'/g, "\\'")),
                            o
                          );
                        }
                        return t.toString();
                      } catch (e) {
                        return null;
                      }
                    })(i);
                    n += o ? Array.from(o).length : 4;
                  }
                  if (n > 1024) return e.slice(0, r);
                }
                return e;
              })(
                (function (e) {
                  var t = [];
                  if (!e) return t;
                  t.push(e);
                  for (var n = e.parentElement; n && "HTML" !== n.tagName; )
                    t.push(n), (n = n.parentElement);
                  return t;
                })(e).map(function (e) {
                  return (function (e) {
                    if (null === e) return null;
                    var t,
                      n,
                      r,
                      i,
                      o,
                      s,
                      u = String(e.tagName).toLowerCase(),
                      a = { tag: u },
                      l = Array.from(
                        null !==
                          (i =
                            null === (r = e.parentElement) || void 0 === r
                              ? void 0
                              : r.children) && void 0 !== i
                          ? i
                          : [],
                      );
                    l.length &&
                      ((a.index = l.indexOf(e)),
                      (a.indexOfType = l
                        .filter(function (t) {
                          return t.tagName === e.tagName;
                        })
                        .indexOf(e)));
                    var d =
                      null ===
                        (s =
                          null === (o = e.previousElementSibling) ||
                          void 0 === o
                            ? void 0
                            : o.tagName) || void 0 === s
                        ? void 0
                        : s.toLowerCase();
                    d && (a.prevSib = String(d));
                    var f = e.getAttribute("id");
                    f && (a.id = String(f));
                    var v = Array.from(e.classList);
                    v.length && (a.classes = v);
                    var h = {},
                      p = Array.from(e.attributes).filter(function (e) {
                        return !nF.includes(e.name);
                      }),
                      g = !nN(e);
                    if (
                      !nV.includes(String(e.getAttribute("type"))) &&
                      !n$.includes(u)
                    )
                      try {
                        for (
                          var m = (0, c.Ju)(p), y = m.next();
                          !y.done;
                          y = m.next()
                        ) {
                          var b = y.value;
                          (!g || nz.includes(b.name)) &&
                            (h[b.name] = String(b.value).substring(0, 128));
                        }
                      } catch (e) {
                        t = { error: e };
                      } finally {
                        try {
                          y && !y.done && (n = m.return) && n.call(m);
                        } finally {
                          if (t) throw t.error;
                        }
                      }
                    return Object.keys(h).length && (a.attrs = h), a;
                  })(e);
                }),
                1024,
              )
            : [];
        };
      function nK(e, t) {
        return ns(function (n, r) {
          var i = 0;
          n.subscribe(
            nu(r, function (n) {
              return e.call(t, n, i++) && r.next(n);
            }),
          );
        });
      }
      var nX = (function (e) {
          function t(t, n) {
            return e.call(this) || this;
          }
          return (
            (0, c.C6)(t, e),
            (t.prototype.schedule = function (e, t) {
              return void 0 === t && (t = 0), this;
            }),
            t
          );
        })(tj),
        nQ = {
          setInterval: function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            var i = nQ.delegate;
            return (null == i ? void 0 : i.setInterval)
              ? i.setInterval.apply(i, (0, c.fX)([e, t], (0, c.zs)(n)))
              : setInterval.apply(void 0, (0, c.fX)([e, t], (0, c.zs)(n)));
          },
          clearInterval: function (e) {
            var t = nQ.delegate;
            return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e);
          },
          delegate: void 0,
        },
        nW = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this;
            return (r.scheduler = t), (r.work = n), (r.pending = !1), r;
          }
          return (
            (0, c.C6)(t, e),
            (t.prototype.schedule = function (e, t) {
              if ((void 0 === t && (t = 0), this.closed)) return this;
              this.state = e;
              var n,
                r = this.id,
                i = this.scheduler;
              return (
                null != r && (this.id = this.recycleAsyncId(i, r, t)),
                (this.pending = !0),
                (this.delay = t),
                (this.id =
                  null !== (n = this.id) && void 0 !== n
                    ? n
                    : this.requestAsyncId(i, this.id, t)),
                this
              );
            }),
            (t.prototype.requestAsyncId = function (e, t, n) {
              return (
                void 0 === n && (n = 0),
                nQ.setInterval(e.flush.bind(e, this), n)
              );
            }),
            (t.prototype.recycleAsyncId = function (e, t, n) {
              if (
                (void 0 === n && (n = 0),
                null != n && this.delay === n && !1 === this.pending)
              )
                return t;
              null != t && nQ.clearInterval(t);
            }),
            (t.prototype.execute = function (e, t) {
              if (this.closed) return Error("executing a cancelled action");
              this.pending = !1;
              var n = this._execute(e, t);
              if (n) return n;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }),
            (t.prototype._execute = function (e, t) {
              var n,
                r = !1;
              try {
                this.work(e);
              } catch (e) {
                (r = !0),
                  (n = e || Error("Scheduled action threw falsy error"));
              }
              if (r) return this.unsubscribe(), n;
            }),
            (t.prototype.unsubscribe = function () {
              if (!this.closed) {
                var t = this.id,
                  n = this.scheduler,
                  r = n.actions;
                (this.work = this.state = this.scheduler = null),
                  (this.pending = !1),
                  tY(r, this),
                  null != t && (this.id = this.recycleAsyncId(n, t, null)),
                  (this.delay = null),
                  e.prototype.unsubscribe.call(this);
              }
            }),
            t
          );
        })(nX),
        nB = {
          now: function () {
            return (nB.delegate || Date).now();
          },
          delegate: void 0,
        },
        nG = (function () {
          function e(t, n) {
            void 0 === n && (n = e.now),
              (this.schedulerActionCtor = t),
              (this.now = n);
          }
          return (
            (e.prototype.schedule = function (e, t, n) {
              return (
                void 0 === t && (t = 0),
                new this.schedulerActionCtor(this, e).schedule(n, t)
              );
            }),
            (e.now = nB.now),
            e
          );
        })(),
        nZ = new ((function (e) {
          function t(t, n) {
            void 0 === n && (n = nG.now);
            var r = e.call(this, t, n) || this;
            return (r.actions = []), (r._active = !1), r;
          }
          return (
            (0, c.C6)(t, e),
            (t.prototype.flush = function (e) {
              var t,
                n = this.actions;
              if (this._active) {
                n.push(e);
                return;
              }
              this._active = !0;
              do if ((t = e.execute(e.state, e.delay))) break;
              while ((e = n.shift()));
              if (((this._active = !1), t)) {
                for (; (e = n.shift()); ) e.unsubscribe();
                throw t;
              }
            }),
            t
          );
        })(nG))(nW);
      function n0(e) {
        return void 0 === e && (e = 1 / 0), nd(t5, e);
      }
      var n1 = new t6(function (e) {
        return e.complete();
      });
      function n2(e) {
        return e && tL(e.schedule);
      }
      function n4(e) {
        return e[e.length - 1];
      }
      function n3(e) {
        return n2(n4(e)) ? e.pop() : void 0;
      }
      function n5(e, t) {
        return (
          void 0 === t && (t = 0),
          ns(function (n, r) {
            n.subscribe(
              nu(
                r,
                function (n) {
                  return nl(
                    r,
                    e,
                    function () {
                      return r.next(n);
                    },
                    t,
                  );
                },
                function () {
                  return nl(
                    r,
                    e,
                    function () {
                      return r.complete();
                    },
                    t,
                  );
                },
                function (n) {
                  return nl(
                    r,
                    e,
                    function () {
                      return r.error(n);
                    },
                    t,
                  );
                },
              ),
            );
          })
        );
      }
      function n6(e, t) {
        return (
          void 0 === t && (t = 0),
          ns(function (n, r) {
            r.add(
              e.schedule(function () {
                return n.subscribe(r);
              }, t),
            );
          })
        );
      }
      function n9(e, t) {
        if (!e) throw Error("Iterable cannot be null");
        return new t6(function (n) {
          nl(n, t, function () {
            var r = e[Symbol.asyncIterator]();
            nl(
              n,
              t,
              function () {
                r.next().then(function (e) {
                  e.done ? n.complete() : n.next(e.value);
                });
              },
              0,
              !0,
            );
          });
        });
      }
      function n8(e, t) {
        return t
          ? (function (e, t) {
              if (null != e) {
                if (tL(e[t3])) return ni(e).pipe(n6(t), n5(t));
                if (tH(e))
                  return new t6(function (n) {
                    var r = 0;
                    return t.schedule(function () {
                      r === e.length
                        ? n.complete()
                        : (n.next(e[r++]), n.closed || this.schedule());
                    });
                  });
                if (tU(e)) return ni(e).pipe(n6(t), n5(t));
                if (t8(e)) return n9(e, t);
                if (nt(e))
                  return new t6(function (n) {
                    var r;
                    return (
                      nl(n, t, function () {
                        (r = e[ne]()),
                          nl(
                            n,
                            t,
                            function () {
                              var e, t, i;
                              try {
                                (t = (e = r.next()).value), (i = e.done);
                              } catch (e) {
                                n.error(e);
                                return;
                              }
                              i ? n.complete() : n.next(t);
                            },
                            0,
                            !0,
                          );
                      }),
                      function () {
                        return tL(null == r ? void 0 : r.return) && r.return();
                      }
                    );
                  });
                if (nr(e)) return n9(nn(e), t);
              }
              throw t7(e);
            })(e, t)
          : ni(e);
      }
      function n7() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = n3(e),
          r = "number" == typeof n4(e) ? e.pop() : 1 / 0;
        return e.length ? (1 === e.length ? ni(e[0]) : n0(r)(n8(e, n))) : n1;
      }
      function re(e) {
        return e <= 0
          ? function () {
              return n1;
            }
          : ns(function (t, n) {
              var r = 0;
              t.subscribe(
                nu(n, function (t) {
                  ++r <= e && (n.next(t), e <= r && n.complete());
                }),
              );
            });
      }
      function rt(e) {
        return e instanceof Date && !isNaN(e);
      }
      var rn = tD(function (e) {
        return function (t) {
          void 0 === t && (t = null),
            e(this),
            (this.message = "Timeout has occurred"),
            (this.name = "TimeoutError"),
            (this.info = t);
        };
      });
      function rr(e) {
        throw new rn(e);
      }
      !(function (e) {
        (e.ClickObservable = "clickObservable"),
          (e.ChangeObservable = "changeObservable"),
          (e.NavigateObservable = "navigateObservable"),
          (e.MutationObservable = "mutationObservable");
      })(a || (a = {}));
      var ri = function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            i = e.dataAttributePrefix,
            o = void 0 === i ? "data-amp-track-" : i,
            s = e.visualTaggingOptions,
            u = void 0 === s ? { enabled: !0, messenger: new nM() } : s;
          (e.cssSelectorAllowlist =
            null !== (t = e.cssSelectorAllowlist) && void 0 !== t ? t : tI),
            (e.actionClickAllowlist =
              null !== (n = e.actionClickAllowlist) && void 0 !== n ? n : tT),
            (e.debounceTime =
              null !== (r = e.debounceTime) && void 0 !== r ? r : 0);
          var l = "@amplitude/plugin-autocapture-browser",
            d = [],
            f = void 0,
            v = function () {
              var e,
                t,
                n = ng(document, "click", { capture: !0 }).pipe(
                  nc(function (e) {
                    return p(e, "click");
                  }),
                ),
                r = ng(document, "change", { capture: !0 }).pipe(
                  nc(function (e) {
                    return p(e, "change");
                  }),
                );
              window.navigation &&
                (t = ng(window.navigation, "navigate").pipe(
                  nc(function (e) {
                    return p(e, "navigate");
                  }),
                ));
              var i = new t6(function (e) {
                var t = new MutationObserver(function (t) {
                  e.next(t);
                });
                return (
                  t.observe(document.body, {
                    childList: !0,
                    attributes: !0,
                    characterData: !0,
                    subtree: !0,
                  }),
                  function () {
                    return t.disconnect();
                  }
                );
              }).pipe(
                nc(function (e) {
                  return p(e, "mutation");
                }),
              );
              return (
                ((e = {})[a.ClickObservable] = n),
                (e[a.ChangeObservable] = r),
                (e[a.NavigateObservable] = t),
                (e[a.MutationObservable] = i),
                e
              );
            },
            h = function (e, t) {
              var n,
                r,
                i,
                s =
                  null ===
                    (i =
                      null === (r = null == t ? void 0 : t.tagName) ||
                      void 0 === r
                        ? void 0
                        : r.toLowerCase) || void 0 === i
                    ? void 0
                    : i.call(r),
                u =
                  "function" == typeof t.getBoundingClientRect
                    ? t.getBoundingClientRect()
                    : { left: null, top: null },
                a = t.getAttribute("aria-label"),
                c = t.getAttributeNames().reduce(function (e, n) {
                  if (n.startsWith(o)) {
                    var r = n.replace(o, ""),
                      i = t.getAttribute(n);
                    r && (e[r] = i || "");
                  }
                  return e;
                }, {}),
                l = nD(t),
                d = nH(t, f),
                v =
                  (((n = {})["[Amplitude] Element ID"] =
                    t.getAttribute("id") || ""),
                  (n["[Amplitude] Element Class"] = t.getAttribute("class")),
                  (n["[Amplitude] Element Hierarchy"] = nJ(t)),
                  (n[tC] = s),
                  (n[tP] = nR(t)),
                  (n["[Amplitude] Element Position Left"] =
                    null == u.left ? null : Math.round(u.left)),
                  (n["[Amplitude] Element Position Top"] =
                    null == u.top ? null : Math.round(u.top)),
                  (n["[Amplitude] Element Aria Label"] = a),
                  (n["[Amplitude] Element Attributes"] = c),
                  (n[tO] = d),
                  (n["[Amplitude] Element Parent Label"] = l),
                  (n[tA] = window.location.href.split("?")[0]),
                  (n["[Amplitude] Page Title"] =
                    ("undefined" != typeof document && document.title) || ""),
                  (n["[Amplitude] Viewport Height"] = window.innerHeight),
                  (n["[Amplitude] Viewport Width"] = window.innerWidth),
                  n);
              return (
                "a" === s &&
                  "click" === e &&
                  t instanceof HTMLAnchorElement &&
                  (v["[Amplitude] Element Href"] = t.href),
                nU(v)
              );
            },
            p = function (t, n) {
              var r = { event: t, timestamp: Date.now(), type: n };
              if (
                ("click" === r.type || "change" === r.type) &&
                null !== r.event.target
              ) {
                var i = nq(r.event.target, e.cssSelectorAllowlist);
                i &&
                  ((r.closestTrackedAncestor = i),
                  (r.targetElementProperties = h(r.type, i)));
              }
              return r;
            };
          return {
            name: l,
            type: "enrichment",
            setup: function (t, n) {
              return (0, c.sH)(void 0, void 0, void 0, function () {
                var r, i, o, s, a, p, g, m, y, b;
                return (0, c.YH)(this, function (w) {
                  var _,
                    E,
                    S,
                    I,
                    T,
                    k,
                    C,
                    P,
                    O,
                    A,
                    x,
                    N,
                    R,
                    H,
                    L,
                    U,
                    D,
                    q,
                    Y,
                    j,
                    M,
                    F,
                    z,
                    $,
                    V,
                    J,
                    K,
                    X,
                    Q,
                    W,
                    B,
                    G,
                    Z;
                  return ((f = t.loggerProvider),
                  "undefined" == typeof document)
                    ? [2]
                    : ((r = nA(e, e.cssSelectorAllowlist)),
                      (i = nA(e, e.actionClickAllowlist)),
                      (E = (_ = {
                        allObservables: (o = v()),
                        options: e,
                        amplitude: n,
                        shouldTrackEvent: r,
                      }).amplitude),
                      (S = _.allObservables),
                      (I = _.options),
                      (T = _.shouldTrackEvent),
                      (O = n7(
                        (k = S.clickObservable).pipe(
                          ns(function (e, t) {
                            var n,
                              r = !1;
                            e.subscribe(
                              nu(t, function (e) {
                                var i = n;
                                (n = e), r && t.next([i, e]), (r = !0);
                              }),
                            );
                          }),
                          nK(function (e) {
                            var t = (0, c.zs)(e, 2),
                              n = t[0],
                              r = t[1],
                              i = n.event.target !== r.event.target,
                              o =
                                20 >=
                                  Math.abs(r.event.screenX - n.event.screenX) &&
                                20 >=
                                  Math.abs(r.event.screenY - n.event.screenY);
                            return i && !o;
                          }),
                        ),
                        k.pipe(
                          ((C = I.debounceTime),
                          void 0 === P && (P = nZ),
                          ns(function (e, t) {
                            var n = null,
                              r = null,
                              i = null,
                              o = function () {
                                if (n) {
                                  n.unsubscribe(), (n = null);
                                  var e = r;
                                  (r = null), t.next(e);
                                }
                              };
                            function s() {
                              var e = i + C,
                                r = P.now();
                              if (r < e) {
                                (n = this.schedule(void 0, e - r)), t.add(n);
                                return;
                              }
                              o();
                            }
                            e.subscribe(
                              nu(
                                t,
                                function (e) {
                                  (r = e),
                                    (i = P.now()),
                                    n || ((n = P.schedule(s, C)), t.add(n));
                                },
                                function () {
                                  o(), t.complete();
                                },
                                void 0,
                                function () {
                                  r = n = null;
                                },
                              ),
                            );
                          })),
                          nc(function () {
                            return "timeout";
                          }),
                        ),
                      )),
                      (s = k
                        .pipe(
                          (void 0 === A && (A = nZ),
                          (x = 0),
                          (N = A),
                          void 0 === x && (x = 0),
                          void 0 === R && (R = nZ),
                          (H = -1),
                          null != N && (n2(N) ? (R = N) : (H = N)),
                          (L = new t6(function (e) {
                            var t = rt(x) ? +x - R.now() : x;
                            t < 0 && (t = 0);
                            var n = 0;
                            return R.schedule(function () {
                              e.closed ||
                                (e.next(n++),
                                0 <= H
                                  ? this.schedule(void 0, H)
                                  : e.complete());
                            }, t);
                          })),
                          (function e(t, n) {
                            return n
                              ? function (r) {
                                  return (function () {
                                    for (
                                      var e = [], t = 0;
                                      t < arguments.length;
                                      t++
                                    )
                                      e[t] = arguments[t];
                                    return n0(1)(n8(e, n3(e)));
                                  })(
                                    n.pipe(
                                      re(1),
                                      ns(function (e, t) {
                                        e.subscribe(nu(t, tJ));
                                      }),
                                    ),
                                    r.pipe(e(t)),
                                  );
                                }
                              : nd(function (e, n) {
                                  return ni(t(e, n)).pipe(
                                    re(1),
                                    nc(function () {
                                      return e;
                                    }),
                                  );
                                });
                          })(function () {
                            return L;
                          })),
                          nK(nj),
                          nK(function (e) {
                            return T("click", e.closestTrackedAncestor);
                          }),
                          ns(function (e, t) {
                            var n = [];
                            return (
                              e.subscribe(
                                nu(
                                  t,
                                  function (e) {
                                    return n.push(e);
                                  },
                                  function () {
                                    t.next(n), t.complete();
                                  },
                                ),
                              ),
                              ni(O).subscribe(
                                nu(
                                  t,
                                  function () {
                                    var e = n;
                                    (n = []), t.next(e);
                                  },
                                  tJ,
                                ),
                              ),
                              function () {
                                n = null;
                              }
                            );
                          }),
                        )
                        .subscribe(function (e) {
                          var t,
                            n,
                            r = (e.length, tk);
                          try {
                            for (
                              var i = (0, c.Ju)(e), o = i.next();
                              !o.done;
                              o = i.next()
                            ) {
                              var s = o.value;
                              null == E ||
                                E.track(r, s.targetElementProperties, {
                                  time: s.timestamp,
                                });
                            }
                          } catch (e) {
                            t = { error: e };
                          } finally {
                            try {
                              o && !o.done && (n = i.return) && n.call(i);
                            } finally {
                              if (t) throw t.error;
                            }
                          }
                        })),
                      d.push(s),
                      (D = (U = {
                        allObservables: o,
                        getEventProperties: h,
                        amplitude: n,
                        shouldTrackEvent: r,
                      }).amplitude),
                      (q = U.allObservables),
                      (Y = U.getEventProperties),
                      (j = U.shouldTrackEvent),
                      (a = q.changeObservable
                        .pipe(
                          nK(nj),
                          nK(function (e) {
                            return j("change", e.closestTrackedAncestor);
                          }),
                        )
                        .subscribe(function (e) {
                          null == D ||
                            D.track(
                              "[Amplitude] Element Changed",
                              Y("change", e.closestTrackedAncestor),
                            );
                        })),
                      d.push(a),
                      (F = (M = {
                        allObservables: o,
                        options: e,
                        getEventProperties: h,
                        amplitude: n,
                        shouldTrackEvent: r,
                        shouldTrackActionClick: i,
                      }).amplitude),
                      (z = M.allObservables),
                      ($ = M.options),
                      (V = M.getEventProperties),
                      (J = M.shouldTrackEvent),
                      (K = M.shouldTrackActionClick),
                      (X = z.clickObservable),
                      (Q = z.mutationObservable),
                      (W = z.navigateObservable),
                      (B = X.pipe(
                        nK(function (e) {
                          return !J("click", e.closestTrackedAncestor);
                        }),
                        nc(function (e) {
                          var t = nq(e.event.target, $.actionClickAllowlist);
                          return (
                            (e.closestTrackedAncestor = t),
                            null !== e.closestTrackedAncestor &&
                              (e.targetElementProperties = V(
                                e.type,
                                e.closestTrackedAncestor,
                              )),
                            e
                          );
                        }),
                        nK(nj),
                        nK(function (e) {
                          return K("click", e.closestTrackedAncestor);
                        }),
                      )),
                      (G = [Q]),
                      W && G.push(W),
                      (Z = n7.apply(void 0, (0, c.fX)([], (0, c.zs)(G), !1))),
                      (p = B.pipe(
                        ns(function (e, t) {
                          var n = null,
                            r = 0,
                            i = !1,
                            o = function () {
                              return i && !n && t.complete();
                            };
                          e.subscribe(
                            nu(
                              t,
                              function (e) {
                                null == n || n.unsubscribe();
                                var i,
                                  s = r++;
                                ni(
                                  ((i = e),
                                  Z.pipe(
                                    re(1),
                                    (function (e, t) {
                                      var n = rt(e)
                                          ? { first: e }
                                          : "number" == typeof e
                                            ? { each: e }
                                            : e,
                                        r = n.first,
                                        i = n.each,
                                        o = n.with,
                                        s = void 0 === o ? rr : o,
                                        u = n.scheduler,
                                        a = void 0 === u ? nZ : u,
                                        c = n.meta,
                                        l = void 0 === c ? null : c;
                                      if (null == r && null == i)
                                        throw TypeError("No timeout provided.");
                                      return ns(function (e, t) {
                                        var n,
                                          o,
                                          u = null,
                                          c = 0,
                                          d = function (e) {
                                            o = nl(
                                              t,
                                              a,
                                              function () {
                                                try {
                                                  n.unsubscribe(),
                                                    ni(
                                                      s({
                                                        meta: l,
                                                        lastValue: u,
                                                        seen: c,
                                                      }),
                                                    ).subscribe(t);
                                                } catch (e) {
                                                  t.error(e);
                                                }
                                              },
                                              e,
                                            );
                                          };
                                        (n = e.subscribe(
                                          nu(
                                            t,
                                            function (e) {
                                              null == o || o.unsubscribe(),
                                                c++,
                                                t.next((u = e)),
                                                i > 0 && d(i);
                                            },
                                            void 0,
                                            void 0,
                                            function () {
                                              (null == o ? void 0 : o.closed) ||
                                                null == o ||
                                                o.unsubscribe(),
                                                (u = null);
                                            },
                                          ),
                                        )),
                                          c ||
                                            d(
                                              null != r
                                                ? "number" == typeof r
                                                  ? r
                                                  : +r - a.now()
                                                : i,
                                            );
                                      });
                                    })({
                                      first: 500,
                                      with: function () {
                                        return n1;
                                      },
                                    }),
                                    nc(function () {
                                      return i;
                                    }),
                                  )),
                                ).subscribe(
                                  (n = nu(
                                    t,
                                    function (e) {
                                      return t.next(e);
                                    },
                                    function () {
                                      (n = null), o();
                                    },
                                  )),
                                );
                              },
                              function () {
                                (i = !0), o();
                              },
                            ),
                          );
                        }),
                      ).subscribe(function (e) {
                        null == F ||
                          F.track(tk, V("click", e.closestTrackedAncestor), {
                            time: e.timestamp,
                          });
                      })),
                      d.push(p),
                      null === (y = null == t ? void 0 : t.loggerProvider) ||
                        void 0 === y ||
                        y.log("".concat(l, " has been successfully added.")),
                      window.opener &&
                        u.enabled &&
                        ((g = e.cssSelectorAllowlist),
                        (m = e.actionClickAllowlist),
                        null === (b = u.messenger) ||
                          void 0 === b ||
                          b.setup(
                            (0, c.Cl)(
                              (0, c.Cl)(
                                {
                                  logger: null == t ? void 0 : t.loggerProvider,
                                },
                                (null == t ? void 0 : t.serverZone) && {
                                  endpoint: tN[t.serverZone],
                                },
                              ),
                              {
                                isElementSelectable: nA(
                                  e,
                                  (0, c.fX)(
                                    (0, c.fX)([], (0, c.zs)(g), !1),
                                    (0, c.zs)(m),
                                    !1,
                                  ),
                                ),
                                cssSelectorAllowlist: g,
                                actionClickAllowlist: m,
                              },
                            ),
                          )),
                      [2]);
                });
              });
            },
            execute: function (e) {
              return (0, c.sH)(void 0, void 0, void 0, function () {
                return (0, c.YH)(this, function (t) {
                  return [2, e];
                });
              });
            },
            teardown: function () {
              return (0, c.sH)(void 0, void 0, void 0, function () {
                var e, t, n, r;
                return (0, c.YH)(this, function (i) {
                  try {
                    for (t = (e = (0, c.Ju)(d)).next(); !t.done; t = e.next())
                      t.value.unsubscribe();
                  } catch (e) {
                    n = { error: e };
                  } finally {
                    try {
                      t && !t.done && (r = e.return) && r.call(e);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                  return [2];
                });
              });
            },
          };
        },
        ro = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            (0, c.C6)(t, e),
            (t.prototype.init = function (e, t, n) {
              var r, i;
              return (
                void 0 === e && (e = ""),
                arguments.length > 2
                  ? ((r = t), (i = n))
                  : "string" == typeof t
                    ? ((r = t), (i = void 0))
                    : ((r = null == t ? void 0 : t.userId), (i = t)),
                p(
                  this._init(
                    (0, c.Cl)((0, c.Cl)({}, i), { userId: r, apiKey: e }),
                  ),
                )
              );
            }),
            (t.prototype._init = function (t) {
              var n, r, i;
              return (0, c.sH)(this, void 0, void 0, function () {
                var o,
                  s,
                  u,
                  a,
                  l,
                  d = this;
                return (0, c.YH)(this, function (f) {
                  var v, h, p, g, y;
                  switch (f.label) {
                    case 0:
                      if (this.initializing) return [2];
                      return (
                        (this.initializing = !0),
                        [
                          4,
                          ((v = t.apiKey),
                          (h = t),
                          (p = this),
                          void 0 === h && (h = {}),
                          (0, c.sH)(void 0, void 0, void 0, function () {
                            var e,
                              t,
                              n,
                              r,
                              i,
                              o,
                              s,
                              u,
                              a,
                              l,
                              d,
                              f,
                              g,
                              y,
                              b,
                              w,
                              _,
                              E,
                              S,
                              I,
                              T,
                              C,
                              P,
                              O,
                              A,
                              x,
                              N,
                              R,
                              H,
                              L,
                              U,
                              D,
                              q,
                              Y,
                              j,
                              M,
                              F,
                              z,
                              $,
                              V,
                              J,
                              K,
                              X;
                            return (0, c.YH)(this, function (Q) {
                              var W, B, G;
                              switch (Q.label) {
                                case 0:
                                  if (
                                    ((e = h.identityStorage || eQ),
                                    (S = {}),
                                    e === eQ)
                                  )
                                    return [3, 1];
                                  return (n = ""), [3, 5];
                                case 1:
                                  if (
                                    null ===
                                      (T =
                                        null === (I = h.cookieOptions) ||
                                        void 0 === I
                                          ? void 0
                                          : I.domain) ||
                                    void 0 === T
                                  )
                                    return [3, 2];
                                  return (r = T), [3, 4];
                                case 2:
                                  return [
                                    4,
                                    (0, c.sH)(
                                      void 0,
                                      void 0,
                                      void 0,
                                      function () {
                                        var e, t, n, r, i, o;
                                        return (0, c.YH)(this, function (s) {
                                          switch (s.label) {
                                            case 0:
                                              return [4, new eS().isEnabled()];
                                            case 1:
                                              if (
                                                !s.sent() ||
                                                "undefined" ==
                                                  typeof location ||
                                                !location.hostname
                                              )
                                                return [2, ""];
                                              for (
                                                e = (
                                                  null != W
                                                    ? W
                                                    : location.hostname
                                                ).split("."),
                                                  t = [],
                                                  n = "AMP_TLDTEST",
                                                  r = e.length - 2;
                                                r >= 0;
                                                --r
                                              )
                                                t.push(e.slice(r).join("."));
                                              (r = 0), (s.label = 2);
                                            case 2:
                                              if (!(r < t.length))
                                                return [3, 7];
                                              return [
                                                4,
                                                (o = new eS({
                                                  domain: "." + (i = t[r]),
                                                })).set(n, 1),
                                              ];
                                            case 3:
                                              return s.sent(), [4, o.get(n)];
                                            case 4:
                                              if (!s.sent()) return [3, 6];
                                              return [4, o.remove(n)];
                                            case 5:
                                              return s.sent(), [2, "." + i];
                                            case 6:
                                              return r++, [3, 2];
                                            case 7:
                                              return [2, ""];
                                          }
                                        });
                                      },
                                    ),
                                  ];
                                case 3:
                                  (r = Q.sent()), (Q.label = 4);
                                case 4:
                                  (n = r), (Q.label = 5);
                                case 5:
                                  return (
                                    (t = c.Cl.apply(void 0, [
                                      ((S.domain = n),
                                      (S.expiration = 365),
                                      (S.sameSite = "Lax"),
                                      (S.secure = !1),
                                      (S.upgrade = !0),
                                      S),
                                      h.cookieOptions,
                                    ])),
                                    [
                                      4,
                                      ((B = i = eB(h.identityStorage, t)),
                                      void 0 ===
                                        (G =
                                          null ===
                                            (P =
                                              null === (C = h.cookieOptions) ||
                                              void 0 === C
                                                ? void 0
                                                : C.upgrade) ||
                                          void 0 === P ||
                                          P) && (G = !0),
                                      (0, c.sH)(
                                        void 0,
                                        void 0,
                                        void 0,
                                        function () {
                                          var e, t, n, r, i, o, s, u, a;
                                          return (0, c.YH)(this, function (l) {
                                            switch (l.label) {
                                              case 0:
                                                return (
                                                  (e = ""
                                                    .concat(
                                                      m.r.toLowerCase(),
                                                      "_",
                                                    )
                                                    .concat(v.substring(0, 6))),
                                                  [4, B.getRaw(e)]
                                                );
                                              case 1:
                                                if (!(t = l.sent()))
                                                  return [2, { optOut: !1 }];
                                                if (!G) return [3, 3];
                                                return [4, B.remove(e)];
                                              case 2:
                                                l.sent(), (l.label = 3);
                                              case 3:
                                                return (
                                                  (r = (n = (0, c.zs)(
                                                    t.split("."),
                                                    6,
                                                  ))[0]),
                                                  (i = n[1]),
                                                  (o = n[2]),
                                                  (s = n[3]),
                                                  (u = n[4]),
                                                  (a = n[5]),
                                                  [
                                                    2,
                                                    {
                                                      deviceId: r,
                                                      userId: eH(i),
                                                      sessionId: eR(s),
                                                      lastEventId: eR(a),
                                                      lastEventTime: eR(u),
                                                      optOut: !!o,
                                                    },
                                                  ]
                                                );
                                            }
                                          });
                                        },
                                      )),
                                    ]
                                  );
                                case 6:
                                  return (o = Q.sent()), [4, i.get(eE(v))];
                                case 7:
                                  return (
                                    (s = Q.sent()),
                                    (u = eu()),
                                    (a =
                                      null !==
                                        (R =
                                          null !==
                                            (N =
                                              null !==
                                                (x =
                                                  null !==
                                                    (A =
                                                      null !==
                                                        (O = h.deviceId) &&
                                                      void 0 !== O
                                                        ? O
                                                        : u.ampDeviceId) &&
                                                  void 0 !== A
                                                    ? A
                                                    : u.deviceId) &&
                                              void 0 !== x
                                                ? x
                                                : null == s
                                                  ? void 0
                                                  : s.deviceId) && void 0 !== N
                                            ? N
                                            : o.deviceId) && void 0 !== R
                                        ? R
                                        : k()),
                                    (l =
                                      null !==
                                        (H =
                                          null == s ? void 0 : s.lastEventId) &&
                                      void 0 !== H
                                        ? H
                                        : o.lastEventId),
                                    (d =
                                      null !==
                                        (L =
                                          null == s
                                            ? void 0
                                            : s.lastEventTime) && void 0 !== L
                                        ? L
                                        : o.lastEventTime),
                                    (f =
                                      null !==
                                        (D =
                                          null !== (U = h.optOut) &&
                                          void 0 !== U
                                            ? U
                                            : null == s
                                              ? void 0
                                              : s.optOut) && void 0 !== D
                                        ? D
                                        : o.optOut),
                                    (g =
                                      null !==
                                        (q =
                                          null == s ? void 0 : s.sessionId) &&
                                      void 0 !== q
                                        ? q
                                        : o.sessionId),
                                    (y =
                                      null !==
                                        (j =
                                          null !== (Y = h.userId) &&
                                          void 0 !== Y
                                            ? Y
                                            : null == s
                                              ? void 0
                                              : s.userId) && void 0 !== j
                                        ? j
                                        : o.userId),
                                    (p.previousSessionDeviceId =
                                      null !==
                                        (M = null == s ? void 0 : s.deviceId) &&
                                      void 0 !== M
                                        ? M
                                        : o.deviceId),
                                    (p.previousSessionUserId =
                                      null !==
                                        (F = null == s ? void 0 : s.userId) &&
                                      void 0 !== F
                                        ? F
                                        : o.userId),
                                    (b = {
                                      ipAddress:
                                        null ===
                                          ($ =
                                            null === (z = h.trackingOptions) ||
                                            void 0 === z
                                              ? void 0
                                              : z.ipAddress) ||
                                        void 0 === $ ||
                                        $,
                                      language:
                                        null ===
                                          (J =
                                            null === (V = h.trackingOptions) ||
                                            void 0 === V
                                              ? void 0
                                              : V.language) ||
                                        void 0 === J ||
                                        J,
                                      platform:
                                        null ===
                                          (X =
                                            null === (K = h.trackingOptions) ||
                                            void 0 === K
                                              ? void 0
                                              : K.platform) ||
                                        void 0 === X ||
                                        X,
                                    }),
                                    (w = null == s ? void 0 : s.pageCounter),
                                    (_ =
                                      null == s ? void 0 : s.debugLogsEnabled),
                                    void 0 !== h.autocapture &&
                                      (h.defaultTracking = h.autocapture),
                                    [
                                      4,
                                      (E = new eW(
                                        v,
                                        h.appVersion,
                                        i,
                                        t,
                                        h.defaultTracking,
                                        h.autocapture,
                                        a,
                                        h.flushIntervalMillis,
                                        h.flushMaxRetries,
                                        h.flushQueueSize,
                                        e,
                                        h.ingestionMetadata,
                                        h.instanceName,
                                        l,
                                        d,
                                        h.loggerProvider,
                                        h.logLevel,
                                        h.minIdLength,
                                        h.offline,
                                        f,
                                        h.partnerId,
                                        h.plan,
                                        h.serverUrl,
                                        h.serverZone,
                                        g,
                                        h.sessionTimeout,
                                        h.storageProvider,
                                        b,
                                        h.transport,
                                        h.useBatch,
                                        h.fetchRemoteConfig,
                                        y,
                                        w,
                                        _,
                                      )).storageProvider.isEnabled(),
                                    ]
                                  );
                                case 8:
                                  return (
                                    Q.sent() ||
                                      (E.loggerProvider.warn(
                                        "Storage provider ".concat(
                                          E.storageProvider.constructor.name,
                                          " is not enabled. Falling back to MemoryStorage.",
                                        ),
                                      ),
                                      (E.storageProvider = new e_())),
                                    [2, E]
                                  );
                              }
                            });
                          })),
                        ]
                      );
                    case 1:
                      if (((o = f.sent()), !t.fetchRemoteConfig)) return [3, 4];
                      return [
                        4,
                        ((g = o),
                        (0, c.sH)(void 0, void 0, void 0, function () {
                          var e;
                          return (0, c.YH)(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return [4, (e = new tS(g)).initialize()];
                              case 1:
                                return t.sent(), [2, e];
                            }
                          });
                        })),
                      ];
                    case 2:
                      return [4, f.sent().generateJoinedConfig()];
                    case 3:
                      (o = f.sent()), (f.label = 4);
                    case 4:
                      return [4, e.prototype._init.call(this, o)];
                    case 5:
                      if (
                        (f.sent(),
                        this.logBrowserOptions(o),
                        !q(this.config.defaultTracking))
                      )
                        return [3, 7];
                      return (
                        (s =
                          q((y = this.config).defaultTracking) &&
                          y.defaultTracking &&
                          "object" == typeof y.defaultTracking &&
                          y.defaultTracking.attribution &&
                          "object" == typeof y.defaultTracking.attribution
                            ? (0, c.Cl)({}, y.defaultTracking.attribution)
                            : {}),
                        (this.webAttribution = new ed(s, this.config)),
                        [4, this.webAttribution.init()]
                      );
                    case 6:
                      f.sent(), (f.label = 7);
                    case 7:
                      if (
                        ((a = Number.isNaN(Number((u = eu()).ampSessionId))
                          ? void 0
                          : Number(u.ampSessionId)),
                        this.setSessionId(
                          null !==
                            (i =
                              null !==
                                (r =
                                  null !== (n = t.sessionId) && void 0 !== n
                                    ? n
                                    : a) && void 0 !== r
                                ? r
                                : this.config.sessionId) && void 0 !== i
                            ? i
                            : Date.now(),
                        ),
                        (l = ev(t.instanceName)).identityStore.setIdentity({
                          userId: this.config.userId,
                          deviceId: this.config.deviceId,
                        }),
                        this.config.offline === em.I)
                      )
                        return [3, 9];
                      return [4, this.add(tp()).promise];
                    case 8:
                      f.sent(), (f.label = 9);
                    case 9:
                      return [4, this.add(new P()).promise];
                    case 10:
                      return f.sent(), [4, this.add(new ew()).promise];
                    case 11:
                      return f.sent(), [4, this.add(new eg()).promise];
                    case 12:
                      if (
                        (f.sent(),
                        th(this.config),
                        !D(this.config.defaultTracking, "fileDownloads"))
                      )
                        return [3, 14];
                      return (
                        this.config.loggerProvider.debug(
                          "Adding file download tracking plugin",
                        ),
                        [4, this.add(tf()).promise]
                      );
                    case 13:
                      f.sent(), (f.label = 14);
                    case 14:
                      if (!D(this.config.defaultTracking, "formInteractions"))
                        return [3, 16];
                      return (
                        this.config.loggerProvider.debug(
                          "Adding form interaction plugin",
                        ),
                        [4, this.add(tl()).promise]
                      );
                    case 15:
                      f.sent(), (f.label = 16);
                    case 16:
                      if (!Y(this.config.defaultTracking)) return [3, 18];
                      return (
                        this.config.loggerProvider.debug(
                          "Adding page view tracking plugin",
                        ),
                        [4, this.add(ts(z(this.config))).promise]
                      );
                    case 17:
                      f.sent(), (f.label = 18);
                    case 18:
                      if (!M(this.config.autocapture)) return [3, 20];
                      return (
                        this.config.loggerProvider.debug(
                          "Adding user interactions plugin (autocapture plugin)",
                        ),
                        [4, this.add(ri(F(this.config))).promise]
                      );
                    case 19:
                      f.sent(), (f.label = 20);
                    case 20:
                      return (
                        (this.initializing = !1),
                        [4, this.runQueuedFunctions("dispatchQ")]
                      );
                    case 21:
                      return (
                        f.sent(),
                        l.eventBridge.setEventReceiver(function (e) {
                          d.track(e.eventType, e.eventProperties);
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.getUserId = function () {
              var e;
              return null === (e = this.config) || void 0 === e
                ? void 0
                : e.userId;
            }),
            (t.prototype.setUserId = function (e) {
              if (!this.config) {
                this.q.push(this.setUserId.bind(this, e));
                return;
              }
              this.config.loggerProvider.debug("function setUserId: ", e),
                (e !== this.config.userId || void 0 === e) &&
                  ((this.config.userId = e), eh(e, this.config.instanceName));
            }),
            (t.prototype.getDeviceId = function () {
              var e;
              return null === (e = this.config) || void 0 === e
                ? void 0
                : e.deviceId;
            }),
            (t.prototype.setDeviceId = function (e) {
              if (!this.config) {
                this.q.push(this.setDeviceId.bind(this, e));
                return;
              }
              this.config.loggerProvider.debug("function setDeviceId: ", e),
                (this.config.deviceId = e),
                ep(e, this.config.instanceName);
            }),
            (t.prototype.reset = function () {
              this.setDeviceId(k()), this.setUserId(void 0);
            }),
            (t.prototype.getSessionId = function () {
              var e;
              return null === (e = this.config) || void 0 === e
                ? void 0
                : e.sessionId;
            }),
            (t.prototype.setSessionId = function (e) {
              var t,
                n = [];
              if (!this.config)
                return (
                  this.q.push(this.setSessionId.bind(this, e)),
                  p(Promise.resolve())
                );
              if (e === this.config.sessionId) return p(Promise.resolve());
              this.config.loggerProvider.debug("function setSessionId: ", e);
              var r = this.getSessionId(),
                i = this.config.lastEventTime,
                o =
                  null !== (t = this.config.lastEventId) && void 0 !== t
                    ? t
                    : -1;
              (this.config.sessionId = e),
                (this.config.lastEventTime = void 0),
                (this.config.pageCounter = 0),
                j(this.config.defaultTracking) &&
                  (r &&
                    i &&
                    n.push(
                      this.track(ej, void 0, {
                        device_id: this.previousSessionDeviceId,
                        event_id: ++o,
                        session_id: r,
                        time: i + 1,
                        user_id: this.previousSessionUserId,
                      }).promise,
                    ),
                  (this.config.lastEventTime = this.config.sessionId));
              var s = this.trackCampaignEventIfNeeded(++o, n);
              return (
                j(this.config.defaultTracking) &&
                  n.push(
                    this.track(eY, void 0, {
                      event_id: s ? ++o : o,
                      session_id: this.config.sessionId,
                      time: this.config.lastEventTime,
                    }).promise,
                  ),
                (this.previousSessionDeviceId = this.config.deviceId),
                (this.previousSessionUserId = this.config.userId),
                p(Promise.all(n))
              );
            }),
            (t.prototype.extendSession = function () {
              if (!this.config) {
                this.q.push(this.extendSession.bind(this));
                return;
              }
              this.config.lastEventTime = Date.now();
            }),
            (t.prototype.setTransport = function (e) {
              if (!this.config) {
                this.q.push(this.setTransport.bind(this, e));
                return;
              }
              this.config.transportProvider = eG(e);
            }),
            (t.prototype.identify = function (t, n) {
              if ((0, ey.GF)(t)) {
                var r = t._q;
                (t._q = []), (t = (0, ey.Db)(new O.T(), r));
              }
              return (
                (null == n ? void 0 : n.user_id) && this.setUserId(n.user_id),
                (null == n ? void 0 : n.device_id) &&
                  this.setDeviceId(n.device_id),
                e.prototype.identify.call(this, t, n)
              );
            }),
            (t.prototype.groupIdentify = function (t, n, r, i) {
              if ((0, ey.GF)(r)) {
                var o = r._q;
                (r._q = []), (r = (0, ey.Db)(new O.T(), o));
              }
              return e.prototype.groupIdentify.call(this, t, n, r, i);
            }),
            (t.prototype.revenue = function (t, n) {
              if ((0, ey.GF)(t)) {
                var r = t._q;
                (t._q = []), (t = (0, ey.Db)(new A.n(), r));
              }
              return e.prototype.revenue.call(this, t, n);
            }),
            (t.prototype.trackCampaignEventIfNeeded = function (e, t) {
              if (
                !this.webAttribution ||
                !this.webAttribution.shouldTrackNewCampaign
              )
                return !1;
              var n = this.webAttribution.generateCampaignEvent(e);
              return (
                t ? t.push(this.track(n).promise) : this.track(n),
                this.config.loggerProvider.log("Tracking attribution."),
                !0
              );
            }),
            (t.prototype.process = function (t) {
              return (0, c.sH)(this, void 0, void 0, function () {
                var n, r, i;
                return (0, c.YH)(this, function (o) {
                  return (
                    (n = Date.now()),
                    (r = el(
                      this.config.sessionTimeout,
                      this.config.lastEventTime,
                    )),
                    (i =
                      this.webAttribution &&
                      this.webAttribution.shouldSetSessionIdOnNewCampaign()),
                    t.event_type === eY ||
                      t.event_type === ej ||
                      (t.session_id && t.session_id !== this.getSessionId()) ||
                      (r || i
                        ? (this.setSessionId(n),
                          i &&
                            this.config.loggerProvider.log(
                              "Created a new session for new campaign.",
                            ))
                        : r || this.trackCampaignEventIfNeeded()),
                    [2, e.prototype.process.call(this, t)]
                  );
                });
              });
            }),
            (t.prototype.logBrowserOptions = function (e) {
              try {
                var t = (0, c.Cl)((0, c.Cl)({}, e), {
                  apiKey: e.apiKey.substring(0, 10) + "********",
                });
                this.config.loggerProvider.debug(
                  "Initialized Amplitude with BrowserConfig:",
                  JSON.stringify(t),
                );
              } catch (e) {
                this.config.loggerProvider.error(
                  "Error logging browser config",
                  e,
                );
              }
            }),
            t
          );
        })(U),
        rs = function () {
          var e = new ro();
          return {
            init: h(e.init.bind(e), "init", d(e), v(e, ["config"])),
            add: h(
              e.add.bind(e),
              "add",
              d(e),
              v(e, ["config.apiKey", "timeline.plugins"]),
            ),
            remove: h(
              e.remove.bind(e),
              "remove",
              d(e),
              v(e, ["config.apiKey", "timeline.plugins"]),
            ),
            track: h(
              e.track.bind(e),
              "track",
              d(e),
              v(e, ["config.apiKey", "timeline.queue.length"]),
            ),
            logEvent: h(
              e.logEvent.bind(e),
              "logEvent",
              d(e),
              v(e, ["config.apiKey", "timeline.queue.length"]),
            ),
            identify: h(
              e.identify.bind(e),
              "identify",
              d(e),
              v(e, ["config.apiKey", "timeline.queue.length"]),
            ),
            groupIdentify: h(
              e.groupIdentify.bind(e),
              "groupIdentify",
              d(e),
              v(e, ["config.apiKey", "timeline.queue.length"]),
            ),
            setGroup: h(
              e.setGroup.bind(e),
              "setGroup",
              d(e),
              v(e, ["config.apiKey", "timeline.queue.length"]),
            ),
            revenue: h(
              e.revenue.bind(e),
              "revenue",
              d(e),
              v(e, ["config.apiKey", "timeline.queue.length"]),
            ),
            flush: h(
              e.flush.bind(e),
              "flush",
              d(e),
              v(e, ["config.apiKey", "timeline.queue.length"]),
            ),
            getUserId: h(
              e.getUserId.bind(e),
              "getUserId",
              d(e),
              v(e, ["config", "config.userId"]),
            ),
            setUserId: h(
              e.setUserId.bind(e),
              "setUserId",
              d(e),
              v(e, ["config", "config.userId"]),
            ),
            getDeviceId: h(
              e.getDeviceId.bind(e),
              "getDeviceId",
              d(e),
              v(e, ["config", "config.deviceId"]),
            ),
            setDeviceId: h(
              e.setDeviceId.bind(e),
              "setDeviceId",
              d(e),
              v(e, ["config", "config.deviceId"]),
            ),
            reset: h(
              e.reset.bind(e),
              "reset",
              d(e),
              v(e, ["config", "config.userId", "config.deviceId"]),
            ),
            getSessionId: h(
              e.getSessionId.bind(e),
              "getSessionId",
              d(e),
              v(e, ["config"]),
            ),
            setSessionId: h(
              e.setSessionId.bind(e),
              "setSessionId",
              d(e),
              v(e, ["config"]),
            ),
            extendSession: h(
              e.extendSession.bind(e),
              "extendSession",
              d(e),
              v(e, ["config"]),
            ),
            setOptOut: h(
              e.setOptOut.bind(e),
              "setOptOut",
              d(e),
              v(e, ["config"]),
            ),
            setTransport: h(
              e.setTransport.bind(e),
              "setTransport",
              d(e),
              v(e, ["config"]),
            ),
          };
        };
      let ru = rs();
    },
    16609: (e, t, n) => {
      n.d(t, { T: () => u });
      var r = n(90535),
        i = n(43639),
        o = n(48658),
        s = n(53119),
        u = (function () {
          function e() {
            (this._propertySet = new Set()), (this._properties = {});
          }
          return (
            (e.prototype.getUserProperties = function () {
              return (0, r.Cl)({}, this._properties);
            }),
            (e.prototype.set = function (e, t) {
              return this._safeSet(i.eX.SET, e, t), this;
            }),
            (e.prototype.setOnce = function (e, t) {
              return this._safeSet(i.eX.SET_ONCE, e, t), this;
            }),
            (e.prototype.append = function (e, t) {
              return this._safeSet(i.eX.APPEND, e, t), this;
            }),
            (e.prototype.prepend = function (e, t) {
              return this._safeSet(i.eX.PREPEND, e, t), this;
            }),
            (e.prototype.postInsert = function (e, t) {
              return this._safeSet(i.eX.POSTINSERT, e, t), this;
            }),
            (e.prototype.preInsert = function (e, t) {
              return this._safeSet(i.eX.PREINSERT, e, t), this;
            }),
            (e.prototype.remove = function (e, t) {
              return this._safeSet(i.eX.REMOVE, e, t), this;
            }),
            (e.prototype.add = function (e, t) {
              return this._safeSet(i.eX.ADD, e, t), this;
            }),
            (e.prototype.unset = function (e) {
              return this._safeSet(i.eX.UNSET, e, o.mG), this;
            }),
            (e.prototype.clearAll = function () {
              return (
                (this._properties = {}),
                (this._properties[i.eX.CLEAR_ALL] = o.mG),
                this
              );
            }),
            (e.prototype._safeSet = function (e, t, n) {
              if (this._validate(e, t, n)) {
                var r = this._properties[e];
                return (
                  void 0 === r && ((r = {}), (this._properties[e] = r)),
                  (r[t] = n),
                  this._propertySet.add(t),
                  !0
                );
              }
              return !1;
            }),
            (e.prototype._validate = function (e, t, n) {
              return (
                !(
                  void 0 !== this._properties[i.eX.CLEAR_ALL] ||
                  this._propertySet.has(t)
                ) &&
                (e === i.eX.ADD
                  ? "number" == typeof n
                  : e === i.eX.UNSET || e === i.eX.REMOVE || (0, s.E)(t, n))
              );
            }),
            e
          );
        })();
    },
    27486: (e, t, n) => {
      var r;
      n.d(t, { n: () => r }),
        (function (e) {
          (e.Unknown = "unknown"),
            (e.Skipped = "skipped"),
            (e.Success = "success"),
            (e.RateLimit = "rate_limit"),
            (e.PayloadTooLarge = "payload_too_large"),
            (e.Invalid = "invalid"),
            (e.Failed = "failed"),
            (e.Timeout = "Timeout"),
            (e.SystemError = "SystemError");
        })(r || (r = {}));
    },
    40165: (e, t, n) => {
      var r;
      n.d(t, { $: () => r }),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Error = 1)] = "Error"),
            (e[(e.Warn = 2)] = "Warn"),
            (e[(e.Verbose = 3)] = "Verbose"),
            (e[(e.Debug = 4)] = "Debug");
        })(r || (r = {}));
    },
    43639: (e, t, n) => {
      var r, i, o;
      n.d(t, { Kl: () => i, SE: () => o, eX: () => r }),
        (function (e) {
          (e.SET = "$set"),
            (e.SET_ONCE = "$setOnce"),
            (e.ADD = "$add"),
            (e.APPEND = "$append"),
            (e.PREPEND = "$prepend"),
            (e.REMOVE = "$remove"),
            (e.PREINSERT = "$preInsert"),
            (e.POSTINSERT = "$postInsert"),
            (e.UNSET = "$unset"),
            (e.CLEAR_ALL = "$clearAll");
        })(r || (r = {})),
        (function (e) {
          (e.REVENUE_PRODUCT_ID = "$productId"),
            (e.REVENUE_QUANTITY = "$quantity"),
            (e.REVENUE_PRICE = "$price"),
            (e.REVENUE_TYPE = "$revenueType"),
            (e.REVENUE = "$revenue");
        })(i || (i = {})),
        (function (e) {
          (e.IDENTIFY = "$identify"),
            (e.GROUP_IDENTIFY = "$groupidentify"),
            (e.REVENUE = "revenue_amount");
        })(o || (o = {}));
    },
    48217: (e, t, n) => {
      n.d(t, { Db: () => i, GF: () => o, UV: () => r });
      var r = function (e, t) {
          i(e, t);
        },
        i = function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n],
              i = r.name,
              o = r.args,
              s = r.resolve,
              u = e && e[i];
            if ("function" == typeof u) {
              var a = u.apply(e, o);
              "function" == typeof s && s(null == a ? void 0 : a.promise);
            }
          }
          return e;
        },
        o = function (e) {
          return e && void 0 !== e._q;
        };
    },
    48658: (e, t, n) => {
      n.d(t, {
        OP: () => c,
        bu: () => u,
        fS: () => o,
        mG: () => r,
        mJ: () => s,
        pL: () => a,
        r: () => i,
      });
      var r = "-",
        i = "AMP",
        o = "".concat(i, "_unsent"),
        s = "https://api2.amplitude.com/2/httpapi",
        u = "https://api.eu.amplitude.com/2/httpapi",
        a = "https://api2.amplitude.com/batch",
        c = "https://api.eu.amplitude.com/batch";
    },
    53119: (e, t, n) => {
      n.d(t, { E: () => o, a: () => i });
      var r = n(90535),
        i = function (e) {
          if (Object.keys(e).length > 1e3) return !1;
          for (var t in e) {
            var n = e[t];
            if (!o(t, n)) return !1;
          }
          return !0;
        },
        o = function (e, t) {
          var n, o;
          if ("string" != typeof e) return !1;
          if (Array.isArray(t)) {
            var s = !0;
            try {
              for (var u = (0, r.Ju)(t), a = u.next(); !a.done; a = u.next()) {
                var c = a.value;
                if (Array.isArray(c)) return !1;
                if ("object" == typeof c) s = s && i(c);
                else if (!["number", "string"].includes(typeof c)) return !1;
                if (!s) return !1;
              }
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                a && !a.done && (o = u.return) && o.call(u);
              } finally {
                if (n) throw n.error;
              }
            }
          } else if (null == t) return !1;
          else if ("object" == typeof t) return i(t);
          else if (!["number", "string", "boolean"].includes(typeof t))
            return !1;
          return !0;
        };
    },
    64540: (e, t, n) => {
      var r;
      n.d(t, { e: () => r }),
        (function (e) {
          (e.US = "US"), (e.EU = "EU");
        })(r || (r = {}));
    },
    67024: (e, t, n) => {
      n.d(t, { j: () => i });
      var r = n(27486),
        i = (function () {
          function e() {}
          return (
            (e.prototype.send = function (e, t) {
              return Promise.resolve(null);
            }),
            (e.prototype.buildResponse = function (e) {
              if ("object" != typeof e) return null;
              var t,
                n,
                i,
                o,
                s,
                u,
                a,
                c,
                l,
                d,
                f,
                v,
                h,
                p,
                g,
                m,
                y,
                b,
                w,
                _,
                E,
                S,
                I = e.code || 0,
                T = this.buildStatus(I);
              switch (T) {
                case r.n.Success:
                  return {
                    status: T,
                    statusCode: I,
                    body: {
                      eventsIngested:
                        null !== (t = e.events_ingested) && void 0 !== t
                          ? t
                          : 0,
                      payloadSizeBytes:
                        null !== (n = e.payload_size_bytes) && void 0 !== n
                          ? n
                          : 0,
                      serverUploadTime:
                        null !== (i = e.server_upload_time) && void 0 !== i
                          ? i
                          : 0,
                    },
                  };
                case r.n.Invalid:
                  return {
                    status: T,
                    statusCode: I,
                    body: {
                      error: null !== (o = e.error) && void 0 !== o ? o : "",
                      missingField:
                        null !== (s = e.missing_field) && void 0 !== s ? s : "",
                      eventsWithInvalidFields:
                        null !== (u = e.events_with_invalid_fields) &&
                        void 0 !== u
                          ? u
                          : {},
                      eventsWithMissingFields:
                        null !== (a = e.events_with_missing_fields) &&
                        void 0 !== a
                          ? a
                          : {},
                      eventsWithInvalidIdLengths:
                        null !== (c = e.events_with_invalid_id_lengths) &&
                        void 0 !== c
                          ? c
                          : {},
                      epsThreshold:
                        null !== (l = e.eps_threshold) && void 0 !== l ? l : 0,
                      exceededDailyQuotaDevices:
                        null !== (d = e.exceeded_daily_quota_devices) &&
                        void 0 !== d
                          ? d
                          : {},
                      silencedDevices:
                        null !== (f = e.silenced_devices) && void 0 !== f
                          ? f
                          : [],
                      silencedEvents:
                        null !== (v = e.silenced_events) && void 0 !== v
                          ? v
                          : [],
                      throttledDevices:
                        null !== (h = e.throttled_devices) && void 0 !== h
                          ? h
                          : {},
                      throttledEvents:
                        null !== (p = e.throttled_events) && void 0 !== p
                          ? p
                          : [],
                    },
                  };
                case r.n.PayloadTooLarge:
                  return {
                    status: T,
                    statusCode: I,
                    body: {
                      error: null !== (g = e.error) && void 0 !== g ? g : "",
                    },
                  };
                case r.n.RateLimit:
                  return {
                    status: T,
                    statusCode: I,
                    body: {
                      error: null !== (m = e.error) && void 0 !== m ? m : "",
                      epsThreshold:
                        null !== (y = e.eps_threshold) && void 0 !== y ? y : 0,
                      throttledDevices:
                        null !== (b = e.throttled_devices) && void 0 !== b
                          ? b
                          : {},
                      throttledUsers:
                        null !== (w = e.throttled_users) && void 0 !== w
                          ? w
                          : {},
                      exceededDailyQuotaDevices:
                        null !== (_ = e.exceeded_daily_quota_devices) &&
                        void 0 !== _
                          ? _
                          : {},
                      exceededDailyQuotaUsers:
                        null !== (E = e.exceeded_daily_quota_users) &&
                        void 0 !== E
                          ? E
                          : {},
                      throttledEvents:
                        null !== (S = e.throttled_events) && void 0 !== S
                          ? S
                          : [],
                    },
                  };
                case r.n.Timeout:
                default:
                  return { status: T, statusCode: I };
              }
            }),
            (e.prototype.buildStatus = function (e) {
              return e >= 200 && e < 300
                ? r.n.Success
                : 429 === e
                  ? r.n.RateLimit
                  : 413 === e
                    ? r.n.PayloadTooLarge
                    : 408 === e
                      ? r.n.Timeout
                      : e >= 400 && e < 500
                        ? r.n.Invalid
                        : e >= 500
                          ? r.n.Failed
                          : r.n.Unknown;
            }),
            e
          );
        })();
    },
    82602: (e, t, n) => {
      n.d(t, { i: () => l });
      var r = (function () {
          function e() {}
          return (
            (e.prototype.getApplicationContext = function () {
              return {
                versionName: this.versionName,
                language: i(),
                platform: "Web",
                os: void 0,
                deviceModel: void 0,
              };
            }),
            e
          );
        })(),
        i = function () {
          return (
            ("undefined" != typeof navigator &&
              ((navigator.languages && navigator.languages[0]) ||
                navigator.language)) ||
            ""
          );
        },
        o = (function () {
          function e() {
            this.queue = [];
          }
          return (
            (e.prototype.logEvent = function (e) {
              this.receiver
                ? this.receiver(e)
                : this.queue.length < 512 && this.queue.push(e);
            }),
            (e.prototype.setEventReceiver = function (e) {
              (this.receiver = e),
                this.queue.length > 0 &&
                  (this.queue.forEach(function (t) {
                    e(t);
                  }),
                  (this.queue = []));
            }),
            e
          );
        })(),
        s = function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        u = function (e, t) {
          var n = typeof e;
          if (n !== typeof t) return !1;
          for (
            var r = 0, i = ["string", "number", "boolean", "undefined"];
            r < i.length;
            r++
          )
            if (i[r] === n) return e === t;
          if (null == e && null == t) return !0;
          if (null == e || null == t || e.length !== t.length) return !1;
          var o = Array.isArray(e),
            s = Array.isArray(t);
          if (o !== s) return !1;
          if (o && s) {
            for (var a = 0; a < e.length; a++) if (!u(e[a], t[a])) return !1;
          } else {
            if (!u(Object.keys(e).sort(), Object.keys(t).sort())) return !1;
            var c = !0;
            return (
              Object.keys(e).forEach(function (n) {
                u(e[n], t[n]) || (c = !1);
              }),
              c
            );
          }
          return !0;
        };
      Object.entries ||
        (Object.entries = function (e) {
          for (var t = Object.keys(e), n = t.length, r = Array(n); n--; )
            r[n] = [t[n], e[t[n]]];
          return r;
        });
      var a = (function () {
          function e() {
            (this.identity = { userProperties: {} }),
              (this.listeners = new Set());
          }
          return (
            (e.prototype.editIdentity = function () {
              var e = this,
                t = s({}, this.identity.userProperties),
                n = s(s({}, this.identity), { userProperties: t });
              return {
                setUserId: function (e) {
                  return (n.userId = e), this;
                },
                setDeviceId: function (e) {
                  return (n.deviceId = e), this;
                },
                setUserProperties: function (e) {
                  return (n.userProperties = e), this;
                },
                setOptOut: function (e) {
                  return (n.optOut = e), this;
                },
                updateUserProperties: function (e) {
                  for (
                    var t = n.userProperties || {},
                      r = 0,
                      i = Object.entries(e);
                    r < i.length;
                    r++
                  ) {
                    var o = i[r],
                      s = o[0],
                      u = o[1];
                    switch (s) {
                      case "$set":
                        for (
                          var a = 0, c = Object.entries(u);
                          a < c.length;
                          a++
                        ) {
                          var l = c[a],
                            d = l[0],
                            f = l[1];
                          t[d] = f;
                        }
                        break;
                      case "$unset":
                        for (var v = 0, h = Object.keys(u); v < h.length; v++) {
                          var d = h[v];
                          delete t[d];
                        }
                        break;
                      case "$clearAll":
                        t = {};
                    }
                  }
                  return (n.userProperties = t), this;
                },
                commit: function () {
                  return e.setIdentity(n), this;
                },
              };
            }),
            (e.prototype.getIdentity = function () {
              return s({}, this.identity);
            }),
            (e.prototype.setIdentity = function (e) {
              var t = s({}, this.identity);
              (this.identity = s({}, e)),
                u(t, this.identity) ||
                  this.listeners.forEach(function (t) {
                    t(e);
                  });
            }),
            (e.prototype.addIdentityListener = function (e) {
              this.listeners.add(e);
            }),
            (e.prototype.removeIdentityListener = function (e) {
              this.listeners.delete(e);
            }),
            e
          );
        })(),
        c =
          "undefined" != typeof globalThis
            ? globalThis
            : void 0 !== n.g
              ? n.g
              : self,
        l = (function () {
          function e() {
            (this.identityStore = new a()),
              (this.eventBridge = new o()),
              (this.applicationContextProvider = new r());
          }
          return (
            (e.getInstance = function (t) {
              return (
                c.analyticsConnectorInstances ||
                  (c.analyticsConnectorInstances = {}),
                c.analyticsConnectorInstances[t] ||
                  (c.analyticsConnectorInstances[t] = new e()),
                c.analyticsConnectorInstances[t]
              );
            }),
            e
          );
        })();
    },
    82944: (e, t, n) => {
      n.d(t, { I: () => r });
      var r = null;
    },
    83571: (e, t, n) => {
      var r;
      n.d(t, { e: () => r }),
        (function (e) {
          (e.US = "US"), (e.EU = "EU");
        })(r || (r = {}));
    },
    87291: (e, t, n) => {
      var r;
      n.d(t, { n: () => r }),
        (function (e) {
          (e.Unknown = "unknown"),
            (e.Skipped = "skipped"),
            (e.Success = "success"),
            (e.RateLimit = "rate_limit"),
            (e.PayloadTooLarge = "payload_too_large"),
            (e.Invalid = "invalid"),
            (e.Failed = "failed"),
            (e.Timeout = "Timeout"),
            (e.SystemError = "SystemError");
        })(r || (r = {}));
    },
    97275: (e, t, n) => {
      n.d(t, { n: () => s });
      var r = n(90535),
        i = n(43639),
        o = n(53119),
        s = (function () {
          function e() {
            (this.productId = ""), (this.quantity = 1), (this.price = 0);
          }
          return (
            (e.prototype.setProductId = function (e) {
              return (this.productId = e), this;
            }),
            (e.prototype.setQuantity = function (e) {
              return e > 0 && (this.quantity = e), this;
            }),
            (e.prototype.setPrice = function (e) {
              return (this.price = e), this;
            }),
            (e.prototype.setRevenueType = function (e) {
              return (this.revenueType = e), this;
            }),
            (e.prototype.setRevenue = function (e) {
              return (this.revenue = e), this;
            }),
            (e.prototype.setEventProperties = function (e) {
              return (0, o.a)(e) && (this.properties = e), this;
            }),
            (e.prototype.getEventProperties = function () {
              var e = this.properties ? (0, r.Cl)({}, this.properties) : {};
              return (
                (e[i.Kl.REVENUE_PRODUCT_ID] = this.productId),
                (e[i.Kl.REVENUE_QUANTITY] = this.quantity),
                (e[i.Kl.REVENUE_PRICE] = this.price),
                (e[i.Kl.REVENUE_TYPE] = this.revenueType),
                (e[i.Kl.REVENUE] = this.revenue),
                e
              );
            }),
            e
          );
        })();
    },
  },
]);
