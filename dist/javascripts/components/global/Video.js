(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "core/Component",
      "constants/videoType",
      "toolbox/event",
      "toolbox/deepMerge",
      "core/mixwith",
      "mixins/Analytics",
      "mixins/Loader",
      "mixins/EventCatcher",
      "services/EventEmitter",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i, j, k, l, m;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.default;
            },
            function (a) {
              c = a.default;
            },
            function (a) {
              (d = a.on), (e = a.off), (f = a.trigger);
            },
            function (a) {
              g = a.deepMerge;
            },
            function (a) {
              h = a.mix;
            },
            function (a) {
              i = a.default;
            },
            function (a) {
              j = a.default;
            },
            function (a) {
              k = a.default;
            },
            function (a) {
              l = a.Event;
            },
          ],
          execute: function () {
            a(
              "default",
              (m = class extends h(b).with(i, j, k) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    g(
                      {
                        templateName: "common/videoplayer",
                        type: c.SELFHOSTED,
                        width: "100%",
                        height: "100%",
                        classNames: {
                          loading: "m-loading",
                          playerActive: "m-player-active",
                        },
                        mute: !0,
                        muteButton: !1,
                        controls: !0,
                        autoplay: !1,
                        loop: !1,
                        videoId: null,
                        startAt: null,
                        metadata: null,
                        trigger: "click",
                        intersectionThreshold: 0,
                        updateProgressInteval: 1e3,
                        analyticsPercentageBreakpoints: [0.25, 0.5, 0.75, 0.9],
                        a11y: {
                          controlAriaLabelStop: "",
                          controlAriaLabelPlay: "",
                          controlAriaLabelMute: "",
                          controlAriaLabelUnmute: "",
                        },
                        loyaltyAction: "",
                        analytics: {},
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  (this.selectors.videoCover =
                    this.element.querySelector("img")),
                    (this.selectors.videoLink = this.element.querySelector(
                      "[data-js-video-link]",
                    )),
                    (this.selectors.indexElement = this.element.closest(
                      "[data-js-video-asset]",
                    )),
                    (this.selectors.videoControlButton =
                      this.selectors.indexElement.querySelector(
                        "[data-js-video-control-button]",
                      )),
                    (this.selectors.videoControlButtonMute =
                      this.selectors.indexElement.querySelector(
                        "[data-js-video-control-button-mute]",
                      ));
                }
                initState() {
                  (this.state.paused = !0),
                    (this.state.muted = !0),
                    (this.state.isAutoPaused = !1),
                    (this.state.progressPercentage = null),
                    (this.state.playedTime = 0),
                    (this.state.loopedVideoCompleted = !1),
                    (this.state.isPlayerEvents = !1),
                    (this.state.isActionFromVideoControlButton = !1);
                }
                bindEvents() {
                  super.bindEvents(),
                    this.options.trigger &&
                      d(
                        this.options.trigger,
                        this.element,
                        this.startVideo.bind(this),
                      ),
                    this.selectors.videoControlButton &&
                      d(
                        "click",
                        this.selectors.videoControlButton,
                        this.onVideoControlToggle.bind(this),
                      ),
                    this.selectors.videoControlButtonMute &&
                      d(
                        "click",
                        this.selectors.videoControlButtonMute,
                        this.onVideoControlMuteToggle.bind(this),
                      );
                }
                afterInit() {
                  (this.options.analyticsPercentageBreakpoints =
                    this.options.analyticsPercentageBreakpoints.sort(
                      (c, a) => a - c,
                    )),
                    this.sendPromoImpressionsToAnalytics(),
                    this.options.autoplay &&
                      (setTimeout(this.createVideo.bind(this), 0),
                      this.showControlButton(),
                      this.showControlButtonMute());
                }
                startVideo(a) {
                  this.createVideo(a).then(this.playVideo.bind(this));
                }
                createVideo(a) {
                  a && a.preventDefault(),
                    this.addLoader(),
                    e(this.options.trigger, this.element);
                  const b = Object.assign(
                    { poster: this.selectors.videoCover.currentSrc },
                    this.options,
                  );
                  return this.render(b, { replaceChildren: !0 }).then(
                    this.onRenderVideo.bind(this),
                  );
                }
                onRenderVideo() {
                  this.removeLoader(),
                    this.element.classList.add(
                      this.options.classNames.playerActive,
                    ),
                    f("video.player.ready", this.element, {
                      bubbles: !0,
                      type: this.options.type,
                      videoId: this.options.videoId,
                      autoplay: this.options.autoplay,
                      loop: this.options.loop,
                      mute: this.options.mute,
                    }),
                    this.state.isPlayerEvents || this.bindPlayerEvents(),
                    this.onPlayerReady();
                }
                onPlayerReady() {
                  (this.selectors.videoPlayer =
                    this.element.querySelector("video")),
                    (this.selectors.videoPlayer.loop = !!this.options.loop),
                    d(
                      "play",
                      this.selectors.videoPlayer,
                      this.onPlayVideo.bind(this),
                    ),
                    d(
                      "ended",
                      this.selectors.videoPlayer,
                      this.onStopVideo.bind(this),
                    ),
                    d(
                      "pause",
                      this.selectors.videoPlayer,
                      this.onPauseVideo.bind(this),
                    ),
                    d(
                      "mute",
                      this.selectors.videoPlayer,
                      this.onMuteVideo.bind(this),
                    ),
                    d(
                      "unmute",
                      this.selectors.videoPlayer,
                      this.onUnMuteVideo.bind(this),
                    ),
                    this.handlePlayerReadyOptions(),
                    this.addObserver(this.selectors.videoPlayer);
                }
                handlePlayerReadyOptions() {
                  (this.options.autoplay || this.options.mute) && this.mute(),
                    this.options.startAt && this.seekTo(this.options.startAt),
                    0 === this.options.controls && this.showControlButton(),
                    0 === this.options.controls &&
                      this.options.muteButton &&
                      this.showControlButtonMute();
                }
                onPlayerPlay(a) {
                  const { time: b } = a.detail;
                  this.playVideo(b);
                }
                onPlayerPause() {
                  this.pauseVideo();
                }
                onMutePlayer() {
                  this.muteVideo();
                }
                onUnMutePlayer() {
                  this.unMuteVideo();
                }
                onMouseMove(a) {
                  a.stopPropagation();
                }
                bindPlayerEvents() {
                  (this.state.isPlayerEvents = !0),
                    d(
                      "video.player.pause",
                      this.element,
                      this.onPlayerPause.bind(this),
                    ),
                    d(
                      "video.player.play",
                      this.element,
                      this.onPlayerPlay.bind(this),
                    ),
                    d(
                      "mousemove pointermove touchmove",
                      this.element,
                      this.onMouseMove.bind(this),
                      { passive: !0 },
                    ),
                    d(
                      "video.player.mute",
                      this.element,
                      this.onMutePlayer.bind(this),
                    ),
                    d(
                      "video.player.unmute",
                      this.element,
                      this.onUnMutePlayer.bind(this),
                    );
                }
                unbindPlayerEvents() {
                  (this.state.isPlayerEvents = !1),
                    e("video.player.pause", this.element),
                    e("video.player.play", this.element),
                    e("mousemove pointermove touchmove", this.element),
                    e("video.player.mute", this.element),
                    e("video.player.unmute", this.element);
                }
                pauseVideo() {
                  this.state.paused ||
                    (this.pauseVideoPlayer(),
                    (this.state.paused = !0),
                    this.selectors.videoControlButton &&
                      (this.selectors.videoControlButton.classList.remove(
                        "m-pause",
                      ),
                      this.selectors.videoControlButton.classList.add("m-play"),
                      this.selectors.videoControlButton.setAttribute(
                        "aria-label",
                        this.options.a11y.controlAriaLabelPlay,
                      )));
                }
                pauseVideoPlayer() {
                  this.selectors.videoPlayer &&
                    this.selectors.videoPlayer.pause();
                }
                playVideo(a) {
                  if (this.state.paused) {
                    if (
                      !this.isComponentConsentGiven() &&
                      this.state.showConsentNotification
                    )
                      return void this.showConsentNotification();
                    this.seekTo(a),
                      this.playVideoPlayer(),
                      (this.state.paused = !1),
                      (this.state.isAutoPaused = !1),
                      this.selectors.videoControlButton &&
                        (this.selectors.videoControlButton.classList.remove(
                          "m-play",
                        ),
                        this.selectors.videoControlButton.classList.add(
                          "m-pause",
                        ),
                        this.selectors.videoControlButton.setAttribute(
                          "aria-label",
                          this.options.a11y.controlAriaLabelStop,
                        ));
                  }
                }
                playVideoPlayer() {
                  this.selectors.videoPlayer &&
                    this.selectors.videoPlayer.play();
                }
                muteVideo() {
                  this.state.muted ||
                    (this.muteVideoPlayer(),
                    (this.state.muted = !0),
                    this.selectors.videoControlButtonMute &&
                      (this.selectors.videoControlButtonMute.classList.remove(
                        "m-unmute",
                      ),
                      this.selectors.videoControlButtonMute.classList.add(
                        "m-mute",
                      ),
                      this.selectors.videoControlButtonMute.setAttribute(
                        "aria-label",
                        this.options.a11y.controlAriaLabelUnmute,
                      )));
                }
                muteVideoPlayer() {
                  this.selectors.videoPlayer &&
                    (this.selectors.videoPlayer.muted = !0);
                }
                unMuteVideo() {
                  this.state.muted &&
                    (this.unMuteVideoPlayer(),
                    (this.state.muted = !1),
                    this.selectors.videoControlButtonMute &&
                      (this.selectors.videoControlButtonMute.classList.remove(
                        "m-mute",
                      ),
                      this.selectors.videoControlButtonMute.classList.add(
                        "m-unmute",
                      ),
                      this.selectors.videoControlButtonMute.setAttribute(
                        "aria-label",
                        this.options.a11y.controlAriaLabelMute,
                      )));
                }
                unMuteVideoPlayer() {
                  this.selectors.videoPlayer &&
                    (this.selectors.videoPlayer.muted = !1);
                }
                sendEventAnalytics(a) {
                  this.options.type === c.SELFHOSTED &&
                    this.sendAnalytics({
                      event: "uaevent",
                      category: "video",
                      action: a,
                      label:
                        this.options.analytics.eventLabel ||
                        this.options.videoId ||
                        this.selectors.videoPlayer.currentSrc,
                      extraData: {
                        event_name: "video_interaction",
                        video_title:
                          this.options.videoId ||
                          this.selectors.videoPlayer.currentSrc,
                        video_action: a,
                      },
                    });
                }
                sendProgressToAnalytics() {
                  if (this.options.type === c.SELFHOSTED) {
                    const a =
                        this.selectors.videoPlayer.currentTime /
                        this.selectors.videoPlayer.duration,
                      b = this.getProgressBreakpoint(
                        this.state.progressPercentage,
                      ),
                      c = this.getProgressBreakpoint(a);
                    if (
                      ((this.state.progressPercentage = a),
                      !this.state.loopedVideoCompleted)
                    ) {
                      if (b < c) {
                        const a = (100 * c).toFixed();
                        this.sendEventAnalytics("".concat(a, "% Viewed"));
                      }
                      this.options.loop &&
                        this.state.playedTime >
                          this.selectors.videoPlayer.currentTime &&
                        (this.clearPercentageInteval(),
                        this.sendEventAnalytics("video completed"),
                        (this.state.loopedVideoCompleted = !0));
                    }
                    this.state.playedTime =
                      this.selectors.videoPlayer.currentTime;
                  }
                }
                getProgressBreakpoint(a) {
                  return (
                    this.options.analyticsPercentageBreakpoints.find(
                      (b) => a >= b,
                    ) || -1
                  );
                }
                clearPercentageInteval() {
                  this.progressInterval && clearInterval(this.progressInterval);
                }
                mute() {
                  (this.selectors.videoPlayer.muted = !0),
                    (this.selectors.videoPlayer.defaultMuted = !0);
                }
                seekTo(a) {
                  "number" == typeof a &&
                    (this.selectors.videoPlayer.currentTime = a);
                }
                onPlayVideo() {
                  f("video.player.play", this.element, {
                    bubbles: !0,
                    type: this.options.type,
                    videoId: this.options.videoId,
                    autoplay: this.options.autoplay,
                    loop: this.options.loop,
                    mute: this.options.mute,
                    muteButton: this.options.muteButton,
                    metadata: this.options.metadata,
                  }),
                    this.clearPercentageInteval(),
                    (this.progressInterval = setInterval(
                      this.sendProgressToAnalytics.bind(this),
                      this.options.updateProgressInteval,
                    )),
                    (!this.state.loopedVideoCompleted ||
                      this.state.isActionFromVideoControlButton) &&
                      ((this.state.isActionFromVideoControlButton = !1),
                      this.sendEventAnalytics("play"),
                      l.emit("videoplayer.play", {
                        element: this.element,
                        videoId: this.options.videoId,
                      }));
                }
                onStopVideo() {
                  f("video.player.ended", this.element, this.options),
                    this.clearPercentageInteval(),
                    this.sendEventAnalytics("video completed");
                }
                onMuteVideo() {
                  f("video.player.mute", this.element, this.options);
                }
                onUnMuteVideo() {
                  f("video.player.unmute", this.element, this.options);
                }
                onPauseVideo() {
                  f("video.player.pause", this.element, this.options),
                    this.clearPercentageInteval(),
                    this.selectors.videoPlayer &&
                      (!this.state.loopedVideoCompleted ||
                        this.state.isActionFromVideoControlButton) &&
                      this.selectors.videoPlayer.currentTime !==
                        this.selectors.videoPlayer.duration &&
                      ((this.state.isActionFromVideoControlButton = !1),
                      this.sendEventAnalytics("pause"));
                }
                addObserver(a) {
                  (this.observer =
                    this.observer ||
                    new window.IntersectionObserver(
                      this.onIntersection.bind(this),
                      { threshold: this.options.intersectionThreshold },
                    )),
                    this.observer.observe(a || this.element);
                }
                removeObserver() {
                  this.observer &&
                    (this.observer.unobserve(this.element),
                    this.observer.disconnect());
                }
                onIntersection(a) {
                  a.forEach((a) => {
                    a.isIntersecting
                      ? this.state.paused &&
                        this.state.isAutoPaused &&
                        this.options.autoplay &&
                        this.playVideo()
                      : !this.state.paused &&
                        ((this.state.isAutoPaused = !0), this.pauseVideo());
                  });
                }
                showControlButton() {
                  this.selectors.videoControlButton &&
                    (this.selectors.videoControlButton.classList.remove(
                      "h-hidden",
                    ),
                    this.selectors.videoControlButton.classList.add(
                      this.state.paused ? "m-play" : "m-pause",
                    ));
                }
                showControlButtonMute() {
                  this.selectors.videoControlButtonMute &&
                    (this.selectors.videoControlButtonMute.classList.remove(
                      "h-hidden",
                    ),
                    this.selectors.videoControlButtonMute.classList.add(
                      this.state.muted ? "m-mute" : "m-unmute",
                    ));
                }
                onVideoControlToggle() {
                  (this.state.isActionFromVideoControlButton = !0),
                    this.state.paused
                      ? ((this.state.isAutoPaused = !0), this.playVideo())
                      : ((this.state.isAutoPaused = !1), this.pauseVideo());
                }
                onVideoControlMuteToggle() {
                  this.state.muted ? this.unMuteVideo() : this.muteVideo();
                }
                getPlayer() {
                  return this.selectors.videoPlayer;
                }
                loadPlayer() {
                  const a = "player_".concat(this.id),
                    b = this.getPlayer(),
                    c = document.createElement("div");
                  return b
                    ? (this.playVideo(), b)
                    : (this.selectors.videoLink.remove(),
                      (c.id = a),
                      this.element.appendChild(c),
                      this.state.isPlayerEvents || this.bindPlayerEvents(),
                      (this.player = this.createPlayer(a)),
                      this.playVideo(),
                      this.player);
                }
                destroy() {
                  this.removeObserver(),
                    this.unbindPlayerEvents(),
                    e(this.element),
                    this.selectors.videoPlayer &&
                      (this.clearPercentageInteval(),
                      e(this.selectors.videoPlayer)),
                    this.selectors.videoControlButton &&
                      e("click", this.selectors.videoControlButton),
                    this.state.hasConsentListener &&
                      l.removeListener("Onetrust.activegroups.updated");
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=Video.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components/global/Video.js
