/* eslint max-lines: ["error", {"max": 450, "skipBlankLines": true, "skipComments": true }] */
import Component from "core/Component";
import videoType from "constants/videoType";
import { on, off, trigger } from "toolbox/event";
import { deepMerge } from "toolbox/deepMerge";
import { mix } from "core/mixwith";
import AnalyticsMixin from "mixins/Analytics";
import LoaderMixin from "mixins/Loader";
import EventCatcherMixin from "mixins/EventCatcher";
import { Event } from "services/EventEmitter";
/**
 * This is a description of the Video constructor function.
 * @class
 * @classdesc This is a description of the Video class.
 * @extends Component
 */
export default class Video extends mix(Component).with(
  AnalyticsMixin,
  LoaderMixin,
  EventCatcherMixin,
) {
  /**
   * Constructor of the class that mainly merge the options of the components
   * @param {HTMLElement} element HTMLElement of the component
   * @param {Object} options options that belongs to the component
   */
  constructor(element, options = {}) {
    super(
      element,
      deepMerge(
        {
          templateName: "common/videoplayer",
          type: videoType.SELFHOSTED,
          width: "100%",
          height: "100%",
          classNames: {
            loading: "m-loading",
            playerActive: "m-player-active",
          },
          mute: true,
          muteButton: false,
          controls: true,
          autoplay: false,
          loop: false,
          videoId: null,
          startAt: null,
          metadata: null,
          trigger: "click",
          intersectionThreshold: 0, // intersection observer threshold
          updateProgressInteval: 1000,
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
        options,
      ),
    );
  }
  /**
   * All selectors must be cached. Never cache elements that are out of the component scope
   */
  initCache() {
    this.selectors.videoCover = this.element.querySelector("img");
    this.selectors.videoLink = this.element.querySelector(
      "[data-js-video-link]",
    );
    this.selectors.indexElement = this.element.closest("[data-js-video-asset]");
    this.selectors.videoControlButton =
      this.selectors.indexElement.querySelector(
        "[data-js-video-control-button]",
      );
    this.selectors.videoControlButtonMute =
      this.selectors.indexElement.querySelector(
        "[data-js-video-control-button-mute]",
      );
  }
  /**
   * Init the different state of the component
   * It helps to avoid heavy DOM manipulation
   */
  initState() {
    this.state.paused = true;
    this.state.muted = true;
    this.state.isAutoPaused = false;
    this.state.progressPercentage = null;
    this.state.playedTime = 0;
    this.state.loopedVideoCompleted = false;
    this.state.isPlayerEvents = false;
    this.state.isActionFromVideoControlButton = false;
  }
  /**
   * Should contain only event listeners and nothing else
   * All the event handlers should be into a separated function. No usage of anonyous function
   */
  bindEvents() {
    super.bindEvents();
    if (this.options.trigger) {
      on(this.options.trigger, this.element, this.startVideo.bind(this));
    }
    if (this.selectors.videoControlButton) {
      on(
        "click",
        this.selectors.videoControlButton,
        this.onVideoControlToggle.bind(this),
      );
    }
    if (this.selectors.videoControlButtonMute) {
      on(
        "click",
        this.selectors.videoControlButtonMute,
        this.onVideoControlMuteToggle.bind(this),
      );
    }
  }
  /**
   * After init
   * Run any script after the component is fully initialized
   */
  afterInit() {
    this.options.analyticsPercentageBreakpoints =
      this.options.analyticsPercentageBreakpoints.sort((a, b) => b - a);
    this.sendPromoImpressionsToAnalytics();
    if (this.options.autoplay) {
      setTimeout(this.createVideo.bind(this), 0);
      this.showControlButton();
      this.showControlButtonMute();
    }
  }
  /**
   * Renders the HTML5 video player and then plays the video
   *
   * @param {Object} event - Event object
   */
  startVideo(event) {
    this.createVideo(event).then(this.playVideo.bind(this));
  }
  /**
   * Retrieves "videoplayer" component template to render HTML5 videoplayer
   *
   * @param {Object} event - Event object
   * @returns {Promise} promise object
   */
  createVideo(event) {
    if (event) {
      event.preventDefault();
    }
    this.addLoader();
    off(this.options.trigger, this.element);
    const videoPlayerData = Object.assign(
      {
        poster: this.selectors.videoCover.currentSrc,
      },
      this.options,
    );
    return this.render(videoPlayerData, {
      replaceChildren: true,
    }).then(this.onRenderVideo.bind(this));
  }
  /**
   * Render video handler
   */
  onRenderVideo() {
    this.removeLoader();
    this.element.classList.add(this.options.classNames.playerActive);
    trigger("video.player.ready", this.element, {
      bubbles: true,
      type: this.options.type,
      videoId: this.options.videoId,
      autoplay: this.options.autoplay,
      loop: this.options.loop,
      mute: this.options.mute,
    });
    if (!this.state.isPlayerEvents) {
      this.bindPlayerEvents();
    }
    this.onPlayerReady();
  }
  /**
   * Configure video player and bind player events.
   */
  onPlayerReady() {
    this.selectors.videoPlayer = this.element.querySelector("video");
    this.selectors.videoPlayer.loop = !!this.options.loop;
    on("play", this.selectors.videoPlayer, this.onPlayVideo.bind(this));
    on("ended", this.selectors.videoPlayer, this.onStopVideo.bind(this));
    on("pause", this.selectors.videoPlayer, this.onPauseVideo.bind(this));
    on("mute", this.selectors.videoPlayer, this.onMuteVideo.bind(this));
    on("unmute", this.selectors.videoPlayer, this.onUnMuteVideo.bind(this));
    this.handlePlayerReadyOptions();
    this.addObserver(this.selectors.videoPlayer);
  }
  /**
   * Handle options on player ready
   */
  handlePlayerReadyOptions() {
    // need to mute player, if autoplay or mute is enabled
    if (this.options.autoplay || this.options.mute) {
      this.mute();
    }
    if (this.options.startAt) {
      this.seekTo(this.options.startAt);
    }
    if (this.options.controls === 0) {
      this.showControlButton();
    }
    if (this.options.controls === 0 && this.options.muteButton) {
      this.showControlButtonMute();
    }
  }
  /**
   * Play video
   * @param {Object} e - event object
   */
  onPlayerPlay(e) {
    const { time } = e.detail;
    this.playVideo(time);
  }
  /**
   * Pause video
   */
  onPlayerPause() {
    this.pauseVideo();
  }
  /**
   * Mute video
   */
  onMutePlayer() {
    this.muteVideo();
  }
  /**
   * Unmute video
   */
  onUnMutePlayer() {
    this.unMuteVideo();
  }
  /**
   * Control Move event handler
   * In case if Video player placed inside carousel, need to prevent mouse move event
   *
   * @param {Object} event Event object
   */
  onMouseMove(event) {
    event.stopPropagation();
  }
  /**
   * Bind player event handlers
   */
  bindPlayerEvents() {
    this.state.isPlayerEvents = true;
    on("video.player.pause", this.element, this.onPlayerPause.bind(this));
    on("video.player.play", this.element, this.onPlayerPlay.bind(this));
    on(
      "mousemove pointermove touchmove",
      this.element,
      this.onMouseMove.bind(this),
      {
        passive: true,
      },
    );
    on("video.player.mute", this.element, this.onMutePlayer.bind(this));
    on("video.player.unmute", this.element, this.onUnMutePlayer.bind(this));
  }
  /**
   * Unbind player event handlers
   */
  unbindPlayerEvents() {
    this.state.isPlayerEvents = false;
    off("video.player.pause", this.element);
    off("video.player.play", this.element);
    off("mousemove pointermove touchmove", this.element);
    off("video.player.mute", this.element);
    off("video.player.unmute", this.element);
  }
  /**
   * Pause video
   */
  pauseVideo() {
    if (!this.state.paused) {
      this.pauseVideoPlayer();
      this.state.paused = true;
      if (this.selectors.videoControlButton) {
        this.selectors.videoControlButton.classList.remove("m-pause");
        this.selectors.videoControlButton.classList.add("m-play");
        this.selectors.videoControlButton.setAttribute(
          "aria-label",
          this.options.a11y.controlAriaLabelPlay,
        );
      }
    }
  }
  /**
   * Pause video player
   */
  pauseVideoPlayer() {
    if (this.selectors.videoPlayer) {
      this.selectors.videoPlayer.pause();
    }
  }
  /**
   * Play video
   * @param {Number} time - start time
   */
  playVideo(time) {
    if (this.state.paused) {
      if (
        !this.isComponentConsentGiven() &&
        this.state.showConsentNotification
      ) {
        this.showConsentNotification();
        return;
      }
      this.seekTo(time);
      this.playVideoPlayer();
      this.state.paused = false;
      this.state.isAutoPaused = false;
      if (this.selectors.videoControlButton) {
        this.selectors.videoControlButton.classList.remove("m-play");
        this.selectors.videoControlButton.classList.add("m-pause");
        this.selectors.videoControlButton.setAttribute(
          "aria-label",
          this.options.a11y.controlAriaLabelStop,
        );
      }
    }
  }
  /**
   * Play video player
   */
  playVideoPlayer() {
    if (this.selectors.videoPlayer) {
      this.selectors.videoPlayer.play();
    }
  }
  /**
   * Mute video
   */
  muteVideo() {
    if (!this.state.muted) {
      this.muteVideoPlayer();
      this.state.muted = true;
      if (this.selectors.videoControlButtonMute) {
        this.selectors.videoControlButtonMute.classList.remove("m-unmute");
        this.selectors.videoControlButtonMute.classList.add("m-mute");
        this.selectors.videoControlButtonMute.setAttribute(
          "aria-label",
          this.options.a11y.controlAriaLabelUnmute,
        );
      }
    }
  }
  /**
   * Mute video player
   */
  muteVideoPlayer() {
    if (this.selectors.videoPlayer) {
      this.selectors.videoPlayer.muted = true;
    }
  }
  /**
   * Unmute video
   * @param {Number} time - start time
   */
  unMuteVideo() {
    if (this.state.muted) {
      this.unMuteVideoPlayer();
      this.state.muted = false;
      if (this.selectors.videoControlButtonMute) {
        this.selectors.videoControlButtonMute.classList.remove("m-mute");
        this.selectors.videoControlButtonMute.classList.add("m-unmute");
        this.selectors.videoControlButtonMute.setAttribute(
          "aria-label",
          this.options.a11y.controlAriaLabelMute,
        );
      }
    }
  }
  /**
   * Unmute video player
   */
  unMuteVideoPlayer() {
    if (this.selectors.videoPlayer) {
      this.selectors.videoPlayer.muted = false;
    }
  }
  /**
   * Send event analytics
   * @param {String} action - action value
   */
  sendEventAnalytics(action) {
    if (this.options.type === videoType.SELFHOSTED) {
      this.sendAnalytics({
        event: "uaevent",
        category: "video",
        action,
        label:
          this.options.analytics.eventLabel ||
          this.options.videoId ||
          this.selectors.videoPlayer.currentSrc,
        extraData: {
          event_name: "video_interaction",
          video_title:
            this.options.videoId || this.selectors.videoPlayer.currentSrc,
          video_action: action,
        },
      });
    }
  }
  /**
   * Update player progress in percents, report the % played if it matches some of the breakpoints
   */
  sendProgressToAnalytics() {
    if (this.options.type === videoType.SELFHOSTED) {
      const percent =
        this.selectors.videoPlayer.currentTime /
        this.selectors.videoPlayer.duration;
      const prevBreakpoint = this.getProgressBreakpoint(
        this.state.progressPercentage,
      );
      const currentBreakpoint = this.getProgressBreakpoint(percent);
      this.state.progressPercentage = percent;
      if (!this.state.loopedVideoCompleted) {
        if (prevBreakpoint < currentBreakpoint) {
          const percentLabel = (currentBreakpoint * 100).toFixed();
          this.sendEventAnalytics(`${percentLabel}% Viewed`);
        }
        if (
          this.options.loop &&
          this.state.playedTime > this.selectors.videoPlayer.currentTime
        ) {
          this.clearPercentageInteval();
          this.sendEventAnalytics("video completed");
          this.state.loopedVideoCompleted = true;
        }
      }
      this.state.playedTime = this.selectors.videoPlayer.currentTime;
    }
  }
  /**
   * Returns last breakpoint from input percent
   * @param {Number} percent progress percentage (0 - 1)
   * @returns {Number} last passed breakpoint
   */
  getProgressBreakpoint(percent) {
    return (
      this.options.analyticsPercentageBreakpoints.find(
        (point) => percent >= point,
      ) || -1
    );
  }
  /**
   * Clears percentage inteval
   */
  clearPercentageInteval() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }
  /**
   * Mute the video
   */
  mute() {
    this.selectors.videoPlayer.muted = true;
    this.selectors.videoPlayer.defaultMuted = true;
  }
  /**
   * Scroll video to proper time
   * @param {Number} time - video time postion
   */
  seekTo(time) {
    if (typeof time === "number") {
      this.selectors.videoPlayer.currentTime = time;
    }
  }
  /**
   * Play video event handler
   */
  onPlayVideo() {
    trigger("video.player.play", this.element, {
      bubbles: true,
      type: this.options.type,
      videoId: this.options.videoId,
      autoplay: this.options.autoplay,
      loop: this.options.loop,
      mute: this.options.mute,
      muteButton: this.options.muteButton,
      metadata: this.options.metadata,
    });
    this.clearPercentageInteval();
    this.progressInterval = setInterval(
      this.sendProgressToAnalytics.bind(this),
      this.options.updateProgressInteval,
    );
    if (
      !this.state.loopedVideoCompleted ||
      this.state.isActionFromVideoControlButton
    ) {
      this.state.isActionFromVideoControlButton = false;
      this.sendEventAnalytics("play");
      Event.emit("videoplayer.play", {
        element: this.element,
        videoId: this.options.videoId,
      });
    }
  }
  /**
   * Stop video event handler
   */
  onStopVideo() {
    trigger("video.player.ended", this.element, this.options);
    this.clearPercentageInteval();
    this.sendEventAnalytics("video completed");
  }
  /**
   * Mute video event handler
   */
  onMuteVideo() {
    trigger("video.player.mute", this.element, this.options);
  }
  /**
   * Mute video event handler
   */
  onUnMuteVideo() {
    trigger("video.player.unmute", this.element, this.options);
  }
  /**
   * Pause video event handler
   */
  onPauseVideo() {
    trigger("video.player.pause", this.element, this.options);
    this.clearPercentageInteval();
    if (
      this.selectors.videoPlayer &&
      (!this.state.loopedVideoCompleted ||
        this.state.isActionFromVideoControlButton) &&
      this.selectors.videoPlayer.currentTime !==
        this.selectors.videoPlayer.duration
    ) {
      this.state.isActionFromVideoControlButton = false;
      this.sendEventAnalytics("pause");
    }
  }
  /**
   * Create intersection observer instance and attach it to video
   * @param {HTMLElement} element element to observe
   */
  addObserver(element) {
    this.observer =
      this.observer ||
      new window.IntersectionObserver(this.onIntersection.bind(this), {
        threshold: this.options.intersectionThreshold,
      });
    this.observer.observe(element || this.element);
  }
  /**
   * Disconnect intersection observer
   */
  removeObserver() {
    if (this.observer) {
      this.observer.unobserve(this.element);
      this.observer.disconnect();
    }
  }
  /**
   * Inter section event handler
   * @param {Object} entries - Entries object
   */
  onIntersection(entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        if (!this.state.paused) {
          this.state.isAutoPaused = true;
          this.pauseVideo();
        }
      } else if (
        this.state.paused &&
        this.state.isAutoPaused &&
        this.options.autoplay
      ) {
        this.playVideo();
      }
    });
  }
  /**
   * Show Autoplay button
   */
  showControlButton() {
    if (this.selectors.videoControlButton) {
      this.selectors.videoControlButton.classList.remove("h-hidden");
      this.selectors.videoControlButton.classList.add(
        this.state.paused ? "m-play" : "m-pause",
      );
    }
  }
  /**
   * Show Mute button
   */
  showControlButtonMute() {
    if (this.selectors.videoControlButtonMute) {
      this.selectors.videoControlButtonMute.classList.remove("h-hidden");
      this.selectors.videoControlButtonMute.classList.add(
        this.state.muted ? "m-mute" : "m-unmute",
      );
    }
  }
  /**
   * Mouse Enter event handler
   */
  onVideoControlToggle() {
    this.state.isActionFromVideoControlButton = true;
    if (this.state.paused) {
      this.state.isAutoPaused = true;
      this.playVideo();
    } else {
      this.state.isAutoPaused = false;
      this.pauseVideo();
    }
  }
  /**
   * Mouse Enter event handler
   */
  onVideoControlMuteToggle() {
    if (this.state.muted) {
      this.unMuteVideo();
    } else {
      this.muteVideo();
    }
  }
  /**
   * return component video player
   * @returns {Object} player
   */
  getPlayer() {
    return this.selectors.videoPlayer;
  }
  /**
   * Load video player into component element.
   * Used in Video component based on API (Youtube, Vimeo)
   *
   * @returns {Object} this.player
   */
  loadPlayer() {
    const playerId = `player_${this.id}`;
    const player = this.getPlayer();
    const playerElement = document.createElement("div");
    if (player) {
      this.playVideo();
      return player;
    }
    this.selectors.videoLink.remove();
    playerElement.id = playerId;
    this.element.appendChild(playerElement);
    if (!this.state.isPlayerEvents) {
      this.bindPlayerEvents();
    }
    this.player = this.createPlayer(playerId);
    this.playVideo();
    return this.player;
  }
  /**
   * Destroy is called automatically after the component is being removed from the DOM
   * You must always destroy the listeners attached to an element to avoid any memory leaks
   */
  destroy() {
    this.removeObserver();
    this.unbindPlayerEvents();
    off(this.element);
    if (this.selectors.videoPlayer) {
      this.clearPercentageInteval();
      off(this.selectors.videoPlayer);
    }
    if (this.selectors.videoControlButton) {
      off("click", this.selectors.videoControlButton);
    }
    if (this.state.hasConsentListener) {
      Event.removeListener("Onetrust.activegroups.updated");
    }
  }
}
