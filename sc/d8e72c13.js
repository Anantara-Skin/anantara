$(".local-time").each(function () {
  var $el = $(this);
  var UTC = $el.attr("data-UTC");
  var $span = $el.find("span");
  var userDate = new Date();
  var userUTC = new Date(userDate.toUTCString().slice(0, -4));
  var localUTC;
  if (UTC.slice(0, 1) == "+") {
    localUTC = userUTC.setSeconds(
      userUTC.getSeconds() + parseInt(UTC.substr(1)),
    );
  } else {
    localUTC = userUTC.setSeconds(
      userUTC.getSeconds() - parseInt(UTC.substr(1)),
    );
  }
  var localDate = new Date(localUTC);
  var output = localDate.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  $span.html(output);
});
(function ($) {
  var focused = true;
  $.flexslider = function (el, options) {
    var slider = $(el);
    if (typeof options.rtl == "undefined" && $("html").attr("dir") == "rtl") {
      options.rtl = true;
    }
    slider.vars = $.extend({}, $.flexslider.defaults, options);
    var namespace = slider.vars.namespace,
      msGesture =
        window.navigator &&
        window.navigator.msPointerEnabled &&
        window.MSGesture,
      touch =
        ("ontouchstart" in window ||
          msGesture ||
          (window.DocumentTouch && document instanceof DocumentTouch)) &&
        slider.vars.touch,
      eventType = "click touchend MSPointerUp keyup",
      watchedEvent = "",
      watchedEventClearTimer,
      vertical = slider.vars.direction === "vertical",
      reverse = slider.vars.reverse,
      carousel = slider.vars.itemWidth > 0,
      fade = slider.vars.animation === "fade",
      asNav = slider.vars.asNavFor !== "",
      methods = {};
    $.data(el, "flexslider", slider);
    methods = {
      init: function () {
        slider.animating = false;
        slider.currentSlide = parseInt(
          slider.vars.startAt ? slider.vars.startAt : 0,
          10,
        );
        if (isNaN(slider.currentSlide)) {
          slider.currentSlide = 0;
        }
        slider.animatingTo = slider.currentSlide;
        slider.atEnd =
          slider.currentSlide === 0 || slider.currentSlide === slider.last;
        slider.containerSelector = slider.vars.selector.substr(
          0,
          slider.vars.selector.search(" "),
        );
        slider.slides = $(slider.vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        slider.syncExists = $(slider.vars.sync).length > 0;
        if (slider.vars.animation === "slide") {
          slider.vars.animation = "swing";
        }
        slider.prop = vertical
          ? "top"
          : slider.vars.rtl
            ? "marginRight"
            : "marginLeft";
        slider.args = {};
        slider.manualPause = false;
        slider.stopped = false;
        slider.started = false;
        slider.startTimeout = null;
        slider.transitions =
          !slider.vars.video &&
          !fade &&
          slider.vars.useCSS &&
          (function () {
            var obj = document.createElement("div"),
              props = [
                "perspectiveProperty",
                "WebkitPerspective",
                "MozPerspective",
                "OPerspective",
                "msPerspective",
              ];
            for (var i in props) {
              if (obj.style[props[i]] !== undefined) {
                slider.pfx = props[i].replace("Perspective", "").toLowerCase();
                slider.prop = "-" + slider.pfx + "-transform";
                return true;
              }
            }
            return false;
          })();
        slider.isFirefox =
          navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
        slider.ensureAnimationEnd = "";
        if (slider.vars.controlsContainer !== "")
          slider.controlsContainer =
            $(slider.vars.controlsContainer).length > 0 &&
            $(slider.vars.controlsContainer);
        if (slider.vars.manualControls !== "")
          slider.manualControls =
            $(slider.vars.manualControls).length > 0 &&
            $(slider.vars.manualControls);
        if (slider.vars.customDirectionNav !== "")
          slider.customDirectionNav =
            $(slider.vars.customDirectionNav).length === 2 &&
            $(slider.vars.customDirectionNav);
        if (slider.vars.randomize) {
          slider.slides.sort(function () {
            return Math.round(Math.random()) - 0.5;
          });
          slider.container.empty().append(slider.slides);
        }
        slider.doMath();
        slider.setup("init");
        if (slider.vars.controlNav) {
          methods.controlNav.setup();
        }
        if (slider.vars.directionNav) {
          methods.directionNav.setup();
        }
        if (
          slider.vars.keyboard &&
          ($(slider.containerSelector).length === 1 ||
            slider.vars.multipleKeyboard)
        ) {
          $(document).bind("keyup", function (event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = slider.vars.rtl
                ? keycode === 37
                  ? slider.getTarget("next")
                  : keycode === 39
                    ? slider.getTarget("prev")
                    : false
                : keycode === 39
                  ? slider.getTarget("next")
                  : keycode === 37
                    ? slider.getTarget("prev")
                    : false;
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          });
        }
        if (slider.vars.mousewheel) {
          slider.bind("mousewheel", function (event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target =
              delta < 0 ? slider.getTarget("next") : slider.getTarget("prev");
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          });
        }
        if (slider.vars.pausePlay) {
          methods.pausePlay.setup();
        }
        if (slider.vars.slideshow && slider.vars.pauseInvisible) {
          methods.pauseInvisible.init();
        }
        if (slider.vars.slideshow) {
          if (slider.vars.pauseOnHover) {
            slider.hover(
              function () {
                if (!slider.manualPlay && !slider.manualPause) {
                  slider.pause();
                }
              },
              function () {
                if (
                  !slider.manualPause &&
                  !slider.manualPlay &&
                  !slider.stopped
                ) {
                  slider.play();
                }
              },
            );
          }
          if (
            !slider.vars.pauseInvisible ||
            !methods.pauseInvisible.isHidden()
          ) {
            slider.vars.initDelay > 0
              ? (slider.startTimeout = setTimeout(
                  slider.play,
                  slider.vars.initDelay,
                ))
              : slider.play();
          }
        }
        if (asNav) {
          methods.asNav.setup();
        }
        if (touch && slider.vars.touch) {
          methods.touch();
        }
        if (!fade || (fade && slider.vars.smoothHeight)) {
          $(window).bind("resize orientationchange focus", methods.resize);
        }
        slider.find("img").attr("draggable", "false");
        setTimeout(function () {
          slider.vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function () {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides
            .removeClass(namespace + "active-slide")
            .eq(slider.currentItem)
            .addClass(namespace + "active-slide");
          if (!msGesture) {
            slider.slides.on(eventType, function (e) {
              e.preventDefault();
              var $slide = $(this),
                target = $slide.index();
              var posFromX;
              if (slider.vars.rtl) {
                posFromX =
                  -1 * ($slide.offset().right - $(slider).scrollLeft());
              } else {
                posFromX = $slide.offset().left - $(slider).scrollLeft();
              }
              if (
                posFromX <= 0 &&
                $slide.hasClass(namespace + "active-slide")
              ) {
                slider.flexAnimate(slider.getTarget("prev"), true);
              } else if (
                !$(slider.vars.asNavFor).data("flexslider").animating &&
                !$slide.hasClass(namespace + "active-slide")
              ) {
                slider.direction =
                  slider.currentItem < target ? "next" : "prev";
                slider.flexAnimate(
                  target,
                  slider.vars.pauseOnAction,
                  false,
                  true,
                  true,
                );
              }
            });
          } else {
            el._slider = slider;
            slider.slides.each(function () {
              var that = this;
              that._gesture = new MSGesture();
              that._gesture.target = that;
              that.addEventListener(
                "MSPointerDown",
                function (e) {
                  e.preventDefault();
                  if (e.currentTarget._gesture) {
                    e.currentTarget._gesture.addPointer(e.pointerId);
                  }
                },
                false,
              );
              that.addEventListener("MSGestureTap", function (e) {
                e.preventDefault();
                var $slide = $(this),
                  target = $slide.index();
                if (
                  !$(slider.vars.asNavFor).data("flexslider").animating &&
                  !$slide.hasClass("active")
                ) {
                  slider.direction =
                    slider.currentItem < target ? "next" : "prev";
                  slider.flexAnimate(
                    target,
                    slider.vars.pauseOnAction,
                    false,
                    true,
                    true,
                  );
                }
              });
            });
          }
        },
      },
      controlNav: {
        setup: function () {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else {
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function () {
          var type =
              slider.vars.controlNav === "thumbnails"
                ? "control-thumbs"
                : "control-paging",
            j = 1,
            item,
            slide;
          slider.controlNavScaffold = $(
            '<ol class="' +
              namespace +
              "control-nav " +
              namespace +
              type +
              '"></ol>',
          );
          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              slide = slider.slides.eq(i);
              if (undefined === slide.attr("data-thumb-alt")) {
                slide.attr("data-thumb-alt", "");
              }
              var altText =
                "" !== slide.attr("data-thumb-alt")
                  ? (altText = ' alt="' + slide.attr("data-thumb-alt") + '"')
                  : "";
              item =
                slider.vars.controlNav === "thumbnails"
                  ? '<img src="' +
                    slide.attr("data-thumb") +
                    '"' +
                    altText +
                    "/>"
                  : '<a href="#">Carousel slide ' + j + "</a>";
              if (
                "thumbnails" === slider.vars.controlNav &&
                true === slider.vars.thumbCaptions
              ) {
                var captn = slide.attr("data-thumbcaption");
                if ("" !== captn && undefined !== captn) {
                  item +=
                    '<span class="' +
                    namespace +
                    'caption">' +
                    captn +
                    "</span>";
                }
              }
              slider.controlNavScaffold.append("<li>" + item + "</li>");
              j++;
            }
          }
          slider.controlsContainer
            ? $(slider.controlsContainer).append(slider.controlNavScaffold)
            : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();
          methods.controlNav.active();
          slider.controlNavScaffold.delegate(
            "a, img",
            eventType,
            function (event) {
              event.preventDefault();
              if (watchedEvent === "" || watchedEvent === event.type) {
                var $this = $(this),
                  target = slider.controlNav.index($this);
                if (!$this.hasClass(namespace + "active")) {
                  slider.direction =
                    target > slider.currentSlide ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction);
                }
              }
              if (watchedEvent === "") {
                watchedEvent = event.type;
              }
              methods.setToClearWatchedEvent();
            },
          );
        },
        setupManual: function () {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();
          slider.controlNav.bind(eventType, function (event) {
            event.preventDefault();
            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                target = slider.controlNav.index($this);
              if (!$this.hasClass(namespace + "active")) {
                target > slider.currentSlide
                  ? (slider.direction = "next")
                  : (slider.direction = "prev");
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        set: function () {
          var selector = slider.vars.controlNav === "thumbnails" ? "img" : "a";
          slider.controlNav = $(
            "." + namespace + "control-nav li " + selector,
            slider.controlsContainer ? slider.controlsContainer : slider,
          );
        },
        active: function () {
          slider.controlNav
            .removeClass(namespace + "active")
            .eq(slider.animatingTo)
            .addClass(namespace + "active");
        },
        update: function (action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append(
              $('<li><a href="#">' + slider.count + "</a></li>"),
            );
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find("li").remove();
          } else {
            slider.controlNav.eq(pos).closest("li").remove();
          }
          methods.controlNav.set();
          slider.pagingCount > 1 &&
          slider.pagingCount !== slider.controlNav.length
            ? slider.update(pos, action)
            : methods.controlNav.active();
        },
      },
      directionNav: {
        setup: function () {
          var directionNavScaffold = $(
            '<ul class="' +
              namespace +
              'direction-nav"><li class="' +
              namespace +
              'nav-prev"><a class="' +
              namespace +
              'prev" href="#">' +
              slider.vars.prevText +
              ' image</a></li><li class="' +
              namespace +
              'nav-next"><a class="' +
              namespace +
              'next" href="#">' +
              slider.vars.nextText +
              " image</a></li></ul>",
          );
          if (slider.customDirectionNav) {
            slider.directionNav = slider.customDirectionNav;
          } else if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $(
              "." + namespace + "direction-nav li a",
              slider.controlsContainer,
            );
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $(
              "." + namespace + "direction-nav li a",
              slider,
            );
          }
          methods.directionNav.update();
          slider.directionNav.bind(eventType, function (event) {
            event.preventDefault();
            var target;
            if (watchedEvent === "" || watchedEvent === event.type) {
              target = $(this).hasClass(namespace + "next")
                ? slider.getTarget("next")
                : slider.getTarget("prev");
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function () {
          var disabledClass = namespace + "disabled";
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass).attr("tabindex", "-1");
          } else if (!slider.vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav
                .removeClass(disabledClass)
                .filter("." + namespace + "prev")
                .addClass(disabledClass)
                .attr("tabindex", "-1");
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav
                .removeClass(disabledClass)
                .filter("." + namespace + "next")
                .addClass(disabledClass)
                .attr("tabindex", "-1");
            } else {
              slider.directionNav
                .removeClass(disabledClass)
                .removeAttr("tabindex");
            }
          } else {
            slider.directionNav
              .removeClass(disabledClass)
              .removeAttr("tabindex");
          }
        },
      },
      pausePlay: {
        setup: function () {
          var pausePlayScaffold = $(
            '<div class="' + namespace + 'pauseplay"><a href="#"></a></div>',
          );
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $(
              "." + namespace + "pauseplay a",
              slider.controlsContainer,
            );
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $("." + namespace + "pauseplay a", slider);
          }
          methods.pausePlay.update(
            slider.vars.slideshow ? namespace + "pause" : namespace + "play",
          );
          slider.pausePlay.bind(eventType, function (event) {
            event.preventDefault();
            if (watchedEvent === "" || watchedEvent === event.type) {
              if ($(this).hasClass(namespace + "pause")) {
                slider.manualPause = true;
                slider.manualPlay = false;
                slider.pause();
              } else {
                slider.manualPause = false;
                slider.manualPlay = true;
                slider.play();
              }
            }
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function (state) {
          state === "play"
            ? slider.pausePlay
                .removeClass(namespace + "pause")
                .addClass(namespace + "play")
                .html(slider.vars.playText)
            : slider.pausePlay
                .removeClass(namespace + "play")
                .addClass(namespace + "pause")
                .html(slider.vars.pauseText);
        },
      },
      touch: function () {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          onTouchStart,
          onTouchMove,
          onTouchEnd,
          scrolling = false,
          localX = 0,
          localY = 0,
          accDx = 0;
        if (!msGesture) {
          onTouchStart = function (e) {
            if (slider.animating) {
              e.preventDefault();
            } else if (
              window.navigator.msPointerEnabled ||
              e.touches.length === 1
            ) {
              slider.pause();
              cwidth = vertical ? slider.h : slider.w;
              startT = Number(new Date());
              localX = e.touches[0].pageX;
              localY = e.touches[0].pageY;
              offset =
                carousel && reverse && slider.animatingTo === slider.last
                  ? 0
                  : carousel && reverse
                    ? slider.limit -
                      (slider.itemW + slider.vars.itemMargin) *
                        slider.move *
                        slider.animatingTo
                    : carousel && slider.currentSlide === slider.last
                      ? slider.limit
                      : carousel
                        ? (slider.itemW + slider.vars.itemMargin) *
                          slider.move *
                          slider.currentSlide
                        : reverse
                          ? (slider.last -
                              slider.currentSlide +
                              slider.cloneOffset) *
                            cwidth
                          : (slider.currentSlide + slider.cloneOffset) * cwidth;
              startX = vertical ? localY : localX;
              startY = vertical ? localX : localY;
              el.addEventListener("touchmove", onTouchMove, false);
              el.addEventListener("touchend", onTouchEnd, false);
            }
          };
          onTouchMove = function (e) {
            localX = e.touches[0].pageX;
            localY = e.touches[0].pageY;
            dx = vertical
              ? startX - localY
              : (slider.vars.rtl ? -1 : 1) * (startX - localX);
            scrolling = vertical
              ? Math.abs(dx) < Math.abs(localX - startY)
              : Math.abs(dx) < Math.abs(localY - startY);
            var fxms = 500;
            if (!scrolling || Number(new Date()) - startT > fxms) {
              e.preventDefault();
              if (!fade && slider.transitions) {
                if (!slider.vars.animationLoop) {
                  dx =
                    dx /
                    ((slider.currentSlide === 0 && dx < 0) ||
                    (slider.currentSlide === slider.last && dx > 0)
                      ? Math.abs(dx) / cwidth + 2
                      : 1);
                }
                slider.setProps(offset + dx, "setTouch");
              }
            }
          };
          onTouchEnd = function (e) {
            el.removeEventListener("touchmove", onTouchMove, false);
            if (
              slider.animatingTo === slider.currentSlide &&
              !scrolling &&
              !(dx === null)
            ) {
              var updateDx = reverse ? -dx : dx,
                target =
                  updateDx > 0
                    ? slider.getTarget("next")
                    : slider.getTarget("prev");
              if (
                slider.canAdvance(target) &&
                ((Number(new Date()) - startT < 550 &&
                  Math.abs(updateDx) > 50) ||
                  Math.abs(updateDx) > cwidth / 2)
              ) {
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              } else {
                if (!fade) {
                  slider.flexAnimate(
                    slider.currentSlide,
                    slider.vars.pauseOnAction,
                    true,
                  );
                }
              }
            }
            el.removeEventListener("touchend", onTouchEnd, false);
            startX = null;
            startY = null;
            dx = null;
            offset = null;
          };
          el.addEventListener("touchstart", onTouchStart, false);
        } else {
          el.style.msTouchAction = "none";
          el._gesture = new MSGesture();
          el._gesture.target = el;
          el.addEventListener("MSPointerDown", onMSPointerDown, false);
          el._slider = slider;
          el.addEventListener("MSGestureChange", onMSGestureChange, false);
          el.addEventListener("MSGestureEnd", onMSGestureEnd, false);
          function onMSPointerDown(e) {
            e.stopPropagation();
            if (slider.animating) {
              e.preventDefault();
            } else {
              slider.pause();
              el._gesture.addPointer(e.pointerId);
              accDx = 0;
              cwidth = vertical ? slider.h : slider.w;
              startT = Number(new Date());
              offset =
                carousel && reverse && slider.animatingTo === slider.last
                  ? 0
                  : carousel && reverse
                    ? slider.limit -
                      (slider.itemW + slider.vars.itemMargin) *
                        slider.move *
                        slider.animatingTo
                    : carousel && slider.currentSlide === slider.last
                      ? slider.limit
                      : carousel
                        ? (slider.itemW + slider.vars.itemMargin) *
                          slider.move *
                          slider.currentSlide
                        : reverse
                          ? (slider.last -
                              slider.currentSlide +
                              slider.cloneOffset) *
                            cwidth
                          : (slider.currentSlide + slider.cloneOffset) * cwidth;
            }
          }
          function onMSGestureChange(e) {
            e.stopPropagation();
            var slider = e.target._slider;
            if (!slider) {
              return;
            }
            var transX = -e.translationX,
              transY = -e.translationY;
            accDx = accDx + (vertical ? transY : transX);
            dx = (slider.vars.rtl ? -1 : 1) * accDx;
            scrolling = vertical
              ? Math.abs(accDx) < Math.abs(-transX)
              : Math.abs(accDx) < Math.abs(-transY);
            if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
              setImmediate(function () {
                el._gesture.stop();
              });
              return;
            }
            if (!scrolling || Number(new Date()) - startT > 500) {
              e.preventDefault();
              if (!fade && slider.transitions) {
                if (!slider.vars.animationLoop) {
                  dx =
                    accDx /
                    ((slider.currentSlide === 0 && accDx < 0) ||
                    (slider.currentSlide === slider.last && accDx > 0)
                      ? Math.abs(accDx) / cwidth + 2
                      : 1);
                }
                slider.setProps(offset + dx, "setTouch");
              }
            }
          }
          function onMSGestureEnd(e) {
            e.stopPropagation();
            var slider = e.target._slider;
            if (!slider) {
              return;
            }
            if (
              slider.animatingTo === slider.currentSlide &&
              !scrolling &&
              !(dx === null)
            ) {
              var updateDx = reverse ? -dx : dx,
                target =
                  updateDx > 0
                    ? slider.getTarget("next")
                    : slider.getTarget("prev");
              if (
                slider.canAdvance(target) &&
                ((Number(new Date()) - startT < 550 &&
                  Math.abs(updateDx) > 50) ||
                  Math.abs(updateDx) > cwidth / 2)
              ) {
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              } else {
                if (!fade) {
                  slider.flexAnimate(
                    slider.currentSlide,
                    slider.vars.pauseOnAction,
                    true,
                  );
                }
              }
            }
            startX = null;
            startY = null;
            dx = null;
            offset = null;
            accDx = 0;
          }
        }
      },
      resize: function () {
        if (!slider.animating && slider.is(":visible")) {
          if (!carousel) {
            slider.doMath();
          }
          if (fade) {
            methods.smoothHeight();
          } else if (carousel) {
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          } else if (vertical) {
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            if (slider.vars.smoothHeight) {
              methods.smoothHeight();
            }
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function (dur) {
        if (!vertical || fade) {
          var $obj = fade ? slider : slider.viewport;
          dur
            ? $obj.animate(
                { height: slider.slides.eq(slider.animatingTo).innerHeight() },
                dur,
              )
            : $obj.innerHeight(
                slider.slides.eq(slider.animatingTo).innerHeight(),
              );
        }
      },
      sync: function (action) {
        var $obj = $(slider.vars.sync).data("flexslider"),
          target = slider.animatingTo;
        switch (action) {
          case "animate":
            $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true);
            break;
          case "play":
            if (!$obj.playing && !$obj.asNav) {
              $obj.play();
            }
            break;
          case "pause":
            $obj.pause();
            break;
        }
      },
      uniqueID: function ($clone) {
        $clone
          .filter("[id]")
          .add($clone.find("[id]"))
          .each(function () {
            var $this = $(this);
            $this.attr("id", $this.attr("id") + "_clone");
          });
        return $clone;
      },
      pauseInvisible: {
        visProp: null,
        init: function () {
          var visProp = methods.pauseInvisible.getHiddenProp();
          if (visProp) {
            var evtname =
              visProp.replace(/[H|h]idden/, "") + "visibilitychange";
            document.addEventListener(evtname, function () {
              if (methods.pauseInvisible.isHidden()) {
                if (slider.startTimeout) {
                  clearTimeout(slider.startTimeout);
                } else {
                  slider.pause();
                }
              } else {
                if (slider.started) {
                  slider.play();
                } else {
                  if (slider.vars.initDelay > 0) {
                    setTimeout(slider.play, slider.vars.initDelay);
                  } else {
                    slider.play();
                  }
                }
              }
            });
          }
        },
        isHidden: function () {
          var prop = methods.pauseInvisible.getHiddenProp();
          if (!prop) {
            return false;
          }
          return document[prop];
        },
        getHiddenProp: function () {
          var prefixes = ["webkit", "moz", "ms", "o"];
          if ("hidden" in document) {
            return "hidden";
          }
          for (var i = 0; i < prefixes.length; i++) {
            if (prefixes[i] + "Hidden" in document) {
              return prefixes[i] + "Hidden";
            }
          }
          return null;
        },
      },
      setToClearWatchedEvent: function () {
        clearTimeout(watchedEventClearTimer);
        watchedEventClearTimer = setTimeout(function () {
          watchedEvent = "";
        }, 3000);
      },
    };
    slider.flexAnimate = function (target, pause, override, withSync, fromNav) {
      if (!slider.vars.animationLoop && target !== slider.currentSlide) {
        slider.direction = target > slider.currentSlide ? "next" : "prev";
      }
      if (asNav && slider.pagingCount === 1)
        slider.direction = slider.currentItem < target ? "next" : "prev";
      if (
        !slider.animating &&
        (slider.canAdvance(target, fromNav) || override) &&
        slider.is(":visible")
      ) {
        if (asNav && withSync) {
          var master = $(slider.vars.asNavFor).data("flexslider");
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = slider.currentItem < target ? "next" : "prev";
          master.direction = slider.direction;
          if (
            Math.ceil((target + 1) / slider.visible) - 1 !==
              slider.currentSlide &&
            target !== 0
          ) {
            slider.currentItem = target;
            slider.slides
              .removeClass(namespace + "active-slide")
              .eq(target)
              .addClass(namespace + "active-slide");
            target = Math.floor(target / slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides
              .removeClass(namespace + "active-slide")
              .eq(target)
              .addClass(namespace + "active-slide");
            return false;
          }
        }
        slider.animating = true;
        slider.animatingTo = target;
        if (pause) {
          slider.pause();
        }
        slider.vars.before(slider);
        if (slider.syncExists && !fromNav) {
          methods.sync("animate");
        }
        if (slider.vars.controlNav) {
          methods.controlNav.active();
        }
        if (!carousel) {
          slider.slides
            .removeClass(namespace + "active-slide")
            .eq(target)
            .addClass(namespace + "active-slide");
        }
        slider.atEnd = target === 0 || target === slider.last;
        if (slider.vars.directionNav) {
          methods.directionNav.update();
        }
        if (target === slider.last) {
          slider.vars.end(slider);
          if (!slider.vars.animationLoop) {
            slider.pause();
          }
        }
        if (!fade) {
          var dimension = vertical
              ? slider.slides.filter(":first").height()
              : slider.computedW,
            margin,
            slideString,
            calcNext;
          if (carousel) {
            margin = slider.vars.itemMargin;
            calcNext =
              (slider.itemW + margin) * slider.move * slider.animatingTo;
            slideString =
              calcNext > slider.limit && slider.visible !== 1
                ? slider.limit
                : calcNext;
          } else if (
            slider.currentSlide === 0 &&
            target === slider.count - 1 &&
            slider.vars.animationLoop &&
            slider.direction !== "next"
          ) {
            slideString = reverse
              ? (slider.count + slider.cloneOffset) * dimension
              : 0;
          } else if (
            slider.currentSlide === slider.last &&
            target === 0 &&
            slider.vars.animationLoop &&
            slider.direction !== "prev"
          ) {
            slideString = reverse ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = reverse
              ? (slider.count - 1 - target + slider.cloneOffset) * dimension
              : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", slider.vars.animationSpeed);
          if (slider.transitions) {
            if (!slider.vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind(
              "webkitTransitionEnd transitionend",
              function () {
                clearTimeout(slider.ensureAnimationEnd);
                slider.wrapup(dimension);
              },
            );
            clearTimeout(slider.ensureAnimationEnd);
            slider.ensureAnimationEnd = setTimeout(function () {
              slider.wrapup(dimension);
            }, slider.vars.animationSpeed + 100);
          } else {
            slider.container.animate(
              slider.args,
              slider.vars.animationSpeed,
              slider.vars.easing,
              function () {
                slider.wrapup(dimension);
              },
            );
          }
        } else {
          if (!touch) {
            slider.slides
              .eq(slider.currentSlide)
              .css({ zIndex: 1 })
              .animate(
                { opacity: 0 },
                slider.vars.animationSpeed,
                slider.vars.easing,
              );
            slider.slides
              .eq(target)
              .css({ zIndex: 2 })
              .animate(
                { opacity: 1 },
                slider.vars.animationSpeed,
                slider.vars.easing,
                slider.wrapup,
              );
          } else {
            slider.slides
              .eq(slider.currentSlide)
              .css({ opacity: 0, zIndex: 1 });
            slider.slides.eq(target).css({ opacity: 1, zIndex: 2 });
            slider.wrapup(dimension);
          }
        }
        if (slider.vars.smoothHeight) {
          methods.smoothHeight(slider.vars.animationSpeed);
        }
      }
    };
    slider.wrapup = function (dimension) {
      if (!fade && !carousel) {
        if (
          slider.currentSlide === 0 &&
          slider.animatingTo === slider.last &&
          slider.vars.animationLoop
        ) {
          slider.setProps(dimension, "jumpEnd");
        } else if (
          slider.currentSlide === slider.last &&
          slider.animatingTo === 0 &&
          slider.vars.animationLoop
        ) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      slider.vars.after(slider);
    };
    slider.animateSlides = function () {
      if (!slider.animating && focused) {
        slider.flexAnimate(slider.getTarget("next"));
      }
    };
    slider.pause = function () {
      clearInterval(slider.animatedSlides);
      slider.animatedSlides = null;
      slider.playing = false;
      if (slider.vars.pausePlay) {
        methods.pausePlay.update("play");
      }
      if (slider.syncExists) {
        methods.sync("pause");
      }
    };
    slider.play = function () {
      if (slider.playing) {
        clearInterval(slider.animatedSlides);
      }
      slider.animatedSlides =
        slider.animatedSlides ||
        setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      slider.started = slider.playing = true;
      if (slider.vars.pausePlay) {
        methods.pausePlay.update("pause");
      }
      if (slider.syncExists) {
        methods.sync("play");
      }
    };
    slider.stop = function () {
      slider.pause();
      slider.stopped = true;
    };
    slider.canAdvance = function (target, fromNav) {
      var last = asNav ? slider.pagingCount - 1 : slider.last;
      return fromNav
        ? true
        : asNav &&
            slider.currentItem === slider.count - 1 &&
            target === 0 &&
            slider.direction === "prev"
          ? true
          : asNav &&
              slider.currentItem === 0 &&
              target === slider.pagingCount - 1 &&
              slider.direction !== "next"
            ? false
            : target === slider.currentSlide && !asNav
              ? false
              : slider.vars.animationLoop
                ? true
                : slider.atEnd &&
                    slider.currentSlide === 0 &&
                    target === last &&
                    slider.direction !== "next"
                  ? false
                  : slider.atEnd &&
                      slider.currentSlide === last &&
                      target === 0 &&
                      slider.direction === "next"
                    ? false
                    : true;
    };
    slider.getTarget = function (dir) {
      slider.direction = dir;
      if (dir === "next") {
        return slider.currentSlide === slider.last
          ? 0
          : slider.currentSlide + 1;
      } else {
        return slider.currentSlide === 0
          ? slider.last
          : slider.currentSlide - 1;
      }
    };
    slider.setProps = function (pos, special, dur) {
      var target = (function () {
        var posCheck = pos
            ? pos
            : (slider.itemW + slider.vars.itemMargin) *
              slider.move *
              slider.animatingTo,
          posCalc = (function () {
            if (carousel) {
              return special === "setTouch"
                ? pos
                : reverse && slider.animatingTo === slider.last
                  ? 0
                  : reverse
                    ? slider.limit -
                      (slider.itemW + slider.vars.itemMargin) *
                        slider.move *
                        slider.animatingTo
                    : slider.animatingTo === slider.last
                      ? slider.limit
                      : posCheck;
            } else {
              switch (special) {
                case "setTotal":
                  return reverse
                    ? (slider.count -
                        1 -
                        slider.currentSlide +
                        slider.cloneOffset) *
                        pos
                    : (slider.currentSlide + slider.cloneOffset) * pos;
                case "setTouch":
                  return reverse ? pos : pos;
                case "jumpEnd":
                  return reverse ? pos : slider.count * pos;
                case "jumpStart":
                  return reverse ? slider.count * pos : pos;
                default:
                  return pos;
              }
            }
          })();
        return posCalc * (slider.vars.rtl ? 1 : -1) + "px";
      })();
      if (slider.transitions) {
        if (slider.isFirefox) {
          target = vertical
            ? "translate3d(0," + target + ",0)"
            : "translate3d(" + (parseInt(target) + "px") + ",0,0)";
        } else {
          target = vertical
            ? "translate3d(0," + target + ",0)"
            : "translate3d(" +
              ((slider.vars.rtl ? -1 : 1) * parseInt(target) + "px") +
              ",0,0)";
        }
        dur = dur !== undefined ? dur / 1000 + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
        slider.container.css("transition-duration", dur);
      }
      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) {
        slider.container.css(slider.args);
      }
      slider.container.css("transform", target);
    };
    slider.setup = function (type) {
      if (!fade) {
        var sliderOffset, arr;
        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>')
            .css({ overflow: "hidden", position: "relative" })
            .appendTo(slider)
            .append(slider.container);
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        if (slider.vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          if (type !== "init") {
            slider.container.find(".clone").remove();
          }
          slider.container
            .append(
              methods
                .uniqueID(slider.slides.first().clone().addClass("clone"))
                .attr("aria-hidden", "true"),
            )
            .prepend(
              methods
                .uniqueID(slider.slides.last().clone().addClass("clone"))
                .attr("aria-hidden", "true"),
            );
        }
        slider.newSlides = $(slider.vars.selector, slider);
        sliderOffset = reverse
          ? slider.count - 1 - slider.currentSlide + slider.cloneOffset
          : slider.currentSlide + slider.cloneOffset;
        if (vertical && !carousel) {
          slider.container
            .height((slider.count + slider.cloneCount) * 200 + "%")
            .css("position", "absolute")
            .width("100%");
          setTimeout(
            function () {
              slider.newSlides.css({ display: "block" });
              slider.doMath();
              slider.viewport.height(slider.h);
              slider.setProps(sliderOffset * slider.h, "init");
            },
            type === "init" ? 100 : 0,
          );
        } else {
          slider.container.width(
            (slider.count + slider.cloneCount) * 200 + "%",
          );
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(
            function () {
              slider.doMath();
              if (slider.vars.rtl) {
                if (slider.isFirefox) {
                  slider.newSlides.css({
                    width: slider.computedW,
                    marginRight: slider.computedM,
                    float: "right",
                    display: "block",
                  });
                } else {
                  slider.newSlides.css({
                    width: slider.computedW,
                    marginRight: slider.computedM,
                    float: "left",
                    display: "block",
                  });
                }
              } else {
                slider.newSlides.css({
                  width: slider.computedW,
                  marginRight: slider.computedM,
                  float: "left",
                  display: "block",
                });
              }
              if (slider.vars.smoothHeight) {
                methods.smoothHeight();
              }
            },
            type === "init" ? 100 : 0,
          );
        }
      } else {
        if (slider.vars.rtl) {
          slider.slides.css({
            width: "100%",
            float: "right",
            marginLeft: "-100%",
            position: "relative",
          });
        } else {
          slider.slides.css({
            width: "100%",
            float: "left",
            marginRight: "-100%",
            position: "relative",
          });
        }
        if (type === "init") {
          if (!touch) {
            if (slider.vars.fadeFirstSlide == false) {
              slider.slides
                .css({ opacity: 0, display: "block", zIndex: 1 })
                .eq(slider.currentSlide)
                .css({ zIndex: 2 })
                .css({ opacity: 1 });
            } else {
              slider.slides
                .css({ opacity: 0, display: "block", zIndex: 1 })
                .eq(slider.currentSlide)
                .css({ zIndex: 2 })
                .animate(
                  { opacity: 1 },
                  slider.vars.animationSpeed,
                  slider.vars.easing,
                );
            }
          } else {
            slider.slides
              .css({
                opacity: 0,
                display: "block",
                webkitTransition:
                  "opacity " + slider.vars.animationSpeed / 1000 + "s ease",
                zIndex: 1,
              })
              .eq(slider.currentSlide)
              .css({ opacity: 1, zIndex: 2 });
          }
        }
        if (slider.vars.smoothHeight) {
          methods.smoothHeight();
        }
      }
      if (!carousel) {
        slider.slides
          .removeClass(namespace + "active-slide")
          .eq(slider.currentSlide)
          .addClass(namespace + "active-slide");
      }
      slider.vars.init(slider);
    };
    slider.doMath = function () {
      var slide = slider.slides.first(),
        slideMargin = slider.vars.itemMargin,
        minItems = slider.vars.minItems,
        maxItems = slider.vars.maxItems;
      slider.w =
        slider.viewport === undefined
          ? slider.width()
          : slider.viewport.width();
      if (slider.isFirefox) {
        slider.w = slider.width();
      }
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();
      if (carousel) {
        slider.itemT = slider.vars.itemWidth + slideMargin;
        slider.itemM = slideMargin;
        slider.minW = minItems ? minItems * slider.itemT : slider.w;
        slider.maxW = maxItems
          ? maxItems * slider.itemT - slideMargin
          : slider.w;
        slider.itemW =
          slider.minW > slider.w
            ? (slider.w - slideMargin * (minItems - 1)) / minItems
            : slider.maxW < slider.w
              ? (slider.w - slideMargin * (maxItems - 1)) / maxItems
              : slider.vars.itemWidth > slider.w
                ? slider.w
                : slider.vars.itemWidth;
        slider.visible = Math.floor(slider.w / slider.itemW);
        slider.move =
          slider.vars.move > 0 && slider.vars.move < slider.visible
            ? slider.vars.move
            : slider.visible;
        slider.pagingCount = Math.ceil(
          (slider.count - slider.visible) / slider.move + 1,
        );
        slider.last = slider.pagingCount - 1;
        slider.limit =
          slider.pagingCount === 1
            ? 0
            : slider.vars.itemWidth > slider.w
              ? slider.itemW * (slider.count - 1) +
                slideMargin * (slider.count - 1)
              : (slider.itemW + slideMargin) * slider.count -
                slider.w -
                slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.itemM = slideMargin;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
      slider.computedM = slider.itemM;
    };
    slider.update = function (pos, action) {
      slider.doMath();
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }
      if (slider.vars.controlNav && !slider.manualControls) {
        if (
          (action === "add" && !carousel) ||
          slider.pagingCount > slider.controlNav.length
        ) {
          methods.controlNav.update("add");
        } else if (
          (action === "remove" && !carousel) ||
          slider.pagingCount < slider.controlNav.length
        ) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      if (slider.vars.directionNav) {
        methods.directionNav.update();
      }
    };
    slider.addSlide = function (obj, pos) {
      var $obj = $(obj);
      slider.count += 1;
      slider.last = slider.count - 1;
      if (vertical && reverse) {
        pos !== undefined
          ? slider.slides.eq(slider.count - pos).after($obj)
          : slider.container.prepend($obj);
      } else {
        pos !== undefined
          ? slider.slides.eq(pos).before($obj)
          : slider.container.append($obj);
      }
      slider.update(pos, "add");
      slider.slides = $(slider.vars.selector + ":not(.clone)", slider);
      slider.setup();
      slider.vars.added(slider);
    };
    slider.removeSlide = function (obj) {
      var pos = isNaN(obj) ? slider.slides.index($(obj)) : obj;
      slider.count -= 1;
      slider.last = slider.count - 1;
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        vertical && reverse
          ? slider.slides.eq(slider.last).remove()
          : slider.slides.eq(obj).remove();
      }
      slider.doMath();
      slider.update(pos, "remove");
      slider.slides = $(slider.vars.selector + ":not(.clone)", slider);
      slider.setup();
      slider.vars.removed(slider);
    };
    methods.init();
  };
  $(window)
    .blur(function (e) {
      focused = false;
    })
    .focus(function (e) {
      focused = true;
    });
  $.flexslider.defaults = {
    namespace: "flex-",
    selector: ".slides > li",
    animation: "fade",
    easing: "swing",
    direction: "horizontal",
    reverse: false,
    animationLoop: true,
    smoothHeight: false,
    startAt: 0,
    slideshow: true,
    slideshowSpeed: 7000,
    animationSpeed: 600,
    initDelay: 0,
    randomize: false,
    fadeFirstSlide: true,
    thumbCaptions: false,
    pauseOnAction: true,
    pauseOnHover: false,
    pauseInvisible: true,
    useCSS: true,
    touch: true,
    video: false,
    controlNav: true,
    directionNav: true,
    prevText: "Previous",
    nextText: "Next",
    keyboard: true,
    multipleKeyboard: false,
    mousewheel: false,
    pausePlay: false,
    pauseText: "Pause",
    playText: "Play",
    controlsContainer: "",
    manualControls: "",
    customDirectionNav: "",
    sync: "",
    asNavFor: "",
    itemWidth: 0,
    itemMargin: 0,
    minItems: 1,
    maxItems: 0,
    move: 0,
    allowOneSlide: true,
    isFirefox: false,
    start: function () {},
    before: function () {},
    after: function () {},
    end: function () {},
    added: function () {},
    removed: function () {},
    init: function () {},
    rtl: false,
  };
  $.fn.flexslider = function (options) {
    if (options === undefined) {
      options = {};
    }
    if (typeof options === "object") {
      return this.each(function () {
        var $this = $(this),
          selector = options.selector ? options.selector : ".slides > li",
          $slides = $this.find(selector);
        if (
          ($slides.length === 1 && options.allowOneSlide === false) ||
          $slides.length === 0
        ) {
          $slides.fadeIn(400);
          if (options.start) {
            options.start($this);
          }
        } else if ($this.data("flexslider") === undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      var $slider = $(this).data("flexslider");
      switch (options) {
        case "play":
          $slider.play();
          break;
        case "pause":
          $slider.pause();
          break;
        case "stop":
          $slider.stop();
          break;
        case "next":
          $slider.flexAnimate($slider.getTarget("next"), true);
          break;
        case "prev":
        case "previous":
          $slider.flexAnimate($slider.getTarget("prev"), true);
          break;
        default:
          if (typeof options === "number") {
            $slider.flexAnimate(options, true);
          }
      }
    }
  };
})(jQuery);
var carouselCustom = {
  init: function (settings) {
    carouselCustom.config = {
      container: ".carousel",
      mobile: [768, 1],
      tablet: [1024, 2],
      items: 3,
    };
    $.extend(carouselCustom.config, settings);
    carouselCustom.setup();
  },
  setup: function () {
    $(carouselCustom.config.container)
      .find(".flexslider")
      .each(function () {
        var $this = $(this);
        var size = $this.find("ul.slides > li").size();
        var m0 = carouselCustom.config.mobile[0];
        var m1 = carouselCustom.config.mobile[1];
        var t0 = carouselCustom.config.tablet[0];
        var t1 = carouselCustom.config.tablet[1];
        var items = carouselCustom.config.items;
        $this.flexslider({
          animation: "slide",
          itemWidth: 1,
          slideshow: false,
          minItems: carouselCustom.getGridSize(m0, m1, t0, t1, items),
          maxItems: carouselCustom.getGridSize(m0, m1, t0, t1, items),
          controlNav: true,
          touch: size > 1,
          reverse: false,
          start: function (slider) {
            $this.find("ul.flex-direction-nav").show();
            if (size <= carouselCustom.getGridSize(m0, m1, t0, t1, items)) {
              $this.find("ul.flex-direction-nav").hide();
            }
          },
        });
        carouselCustom.onResize($this, m0, m1, t0, t1, items);
      });
  },
  getGridSize: function (m0, m1, t0, t1, items) {
    return window.innerWidth < m0 ? m1 : window.innerWidth < t0 ? t1 : items;
  },
  onResize: function (el, m0, m1, t0, t1, items) {
    $(window).bind("resize", function () {
      var $this = $(el);
      if ($this.length != 0) {
        $this.data("flexslider").vars.minItems = carouselCustom.getGridSize(
          m0,
          m1,
          t0,
          t1,
          items,
        );
        $this.data("flexslider").vars.maxItems = carouselCustom.getGridSize(
          m0,
          m1,
          t0,
          t1,
          items,
        );
      }
    });
  },
};
carouselCustom.init({
  container: ".box8 .carousel",
  mobile: [768, 1],
  tablet: [1024, 1],
  items: 1,
  controlNav: true,
  directionNav: true,
});
carouselCustom.init({
  container: ".box24 .carousel.retreats",
  mobile: [768, 1],
  tablet: [1024, 2],
  items: 3,
  slideshow: true,
  controlNav: true,
  directionNav: true,
});
carouselCustom.init({
  container: ".box24 .carousel",
  mobile: [768, 1],
  tablet: [1024, 1],
  items: 1,
  controlNav: true,
  directionNav: true,
});
carouselCustom.init({
  container: ".box25 .carousel",
  mobile: [768, 1],
  tablet: [1024, 2],
  items: 1,
  controlNav: true,
  directionNav: true,
});
carouselCustom.init({
  container: ".box42 .carousel",
  mobile: [768, 1],
  tablet: [1024, 2],
  items: 3,
  slideshow: false,
  controlNav: true,
  directionNav: true,
});
carouselCustom.init({
  container: ".box27 .carousel",
  mobile: [768, 1],
  tablet: [1024, 1],
  items: 1,
  controlNav: true,
  directionNav: true,
});
carouselCustom.init({
  container: ".box34 .carousel",
  mobile: [768, 1],
  tablet: [1024, 1],
  items: 1,
  controlNav: true,
  directionNav: true,
});
carouselCustom.init({
  container: ".box33 .carousel",
  mobile: [768, 1],
  tablet: [1024, 2],
  items: 3,
  controlNav: true,
  directionNav: true,
});
var slideshowCustom = {
  init: function (settings) {
    slideshowCustom.config = {
      container: ".slideshow",
      slideshowSpeed: 3000,
      slideshow: true,
      startAt: true,
      directionNav: true,
      slidesNumber: true,
      animation: core.isTouch ? "slide" : "fade",
      externalEl: "",
      animationLoop: true,
    };
    $.extend(slideshowCustom.config, settings);
    slideshowCustom.setup();
  },
  setup: function () {
    $(slideshowCustom.config.container).each(function () {
      var $this = $(this).find(".flexslider");
      var slideshowSpeed = slideshowCustom.config.slideshowSpeed;
      var sld = slideshowCustom.config.slideshow;
      var startAt = slideshowCustom.config.startAt;
      var directionNav = slideshowCustom.config.directionNav;
      var slidesNumber = slideshowCustom.config.slidesNumber;
      var animation = slideshowCustom.config.animation;
      var externalEl = slideshowCustom.config.externalEl;
      var animationLoop = slideshowCustom.config.animationLoop;
      if ($this.parents("#overlay").length > 0) {
        $this.find("ul.slides > li").each(function () {
          var $picture = $(this).find("picture");
          $picture.find("img").removeAttr("src");
          $picture.find("source").removeAttr("srcset");
          if (
            $(this).index() != startAt &&
            $(this).index() != 0 &&
            $(this).index() != $this.find("ul.slides > li").size() - 1
          ) {
            $picture.attr("data-id", $picture.attr("id")).removeAttr("id");
            $picture.hide();
          }
        });
      }
      $this.find("picture").imagesLoaded({ background: true }, function () {
        $this.find("ul.slides > li:eq(" + startAt + ")").fadeIn(600);
        slideshowCustom.build(
          $this,
          slideshowSpeed,
          sld,
          startAt,
          directionNav,
          slidesNumber,
          animation,
          externalEl,
          animationLoop,
        );
      });
    });
  },
  build: function (
    $this,
    slideshowSpeed,
    sld,
    startAt,
    directionNav,
    slidesNumber,
    animation,
    externalEl,
    animationLoop,
  ) {
    var size = $this.find("ul.slides > li").size();
    $this.flexslider({
      slideshowSpeed: slideshowSpeed,
      slideshow: sld,
      startAt: startAt,
      controlNav: true,
      fadeFirstSlide: true,
      touch: size > 1,
      animation: animation,
      easing: "linear",
      animationLoop: animationLoop,
      start: function (slider) {
        $this.find("ul.slides > li.clone").css("opacity", 1);
        slideshowCustom.showSlidesNav($this, slidesNumber);
        $(slideshowCustom.config.container)
          .find(".flexslider")
          .find(".slides > li")
          .show();
        slideshowCustom.pauseOnClick($this);
        slideshowCustom.showFlexNav($this, size, directionNav);
        slider.removeClass("loading");
        slideshowCustom.share($this);
        slideshowCustom.externalElement(
          externalEl,
          slider.slides.eq(slider.currentSlide),
          "start",
        );
        if ($this.parents("#overlay").length > 0) {
          slideshowCustom.loadPrevAndNextSlideOnDemand(slider);
        }
      },
      before: function (slider) {
        $this.find(".flex-slide-active").html(slider.animatingTo + 1);
        slideshowCustom.externalElement(
          externalEl,
          slider.slides.eq(slider.animatingTo),
          "before",
        );
        if ($this.parents("#overlay").length > 0) {
          var $slide = slider.slides.eq(slider.animatingTo);
          var $picture = $slide.find("picture");
          if ($picture.attr("data-id") != undefined) {
            slider.addClass("loading");
            $picture.imagesLoaded({ background: true }, function () {
              slider.removeClass("loading");
            });
          }
        }
      },
      after: function (slider) {
        if ($this.parents("#overlay").length > 0) {
          slideshowCustom.loadPrevAndNextSlideOnDemand(slider);
        }
      },
    });
  },
  loadPrevAndNextSlideOnDemand: function (slider) {
    var $nextSlide = slider.slides.eq(slider.currentSlide + 1);
    var $nextPicture = $nextSlide.find("picture");
    var nextId = $nextPicture.attr("data-id");
    var $prevSlide = slider.slides.eq(slider.currentSlide - 1);
    var $prevPicture = $prevSlide.find("picture");
    var prevId = $prevPicture.attr("data-id");
    if (nextId != undefined) {
      $nextPicture.attr("id", nextId);
      $nextPicture.imagesLoaded({ background: true }, function () {
        $nextPicture.removeAttr("data-id");
        $nextPicture.fadeIn(600);
      });
    }
    if (prevId != undefined) {
      $prevPicture.attr("id", prevId);
      $prevPicture.imagesLoaded({ background: true }, function () {
        $prevPicture.removeAttr("data-id");
        $prevPicture.fadeIn(600);
      });
    }
  },
  share: function ($this) {
    $this.find(".flex-share a").each(function () {
      var $a = $(this);
      var $share = $a.closest(".flex-share");
      var href = $a.attr("href");
      var domain = window.location.protocol + "//" + window.location.hostname;
      var url = $share.attr("data-page-url");
      var media = $share.attr("data-media");
      var description = $share.attr("data-description");
      $a.click(function () {
        var domainAndUrl = href
          .replace("{DOMAIN+URL}", domain + url)
          .replace("{MEDIA}", media)
          .replace("{DESCRIPTION}", description);
        window.open(
          domainAndUrl,
          "",
          "toolbar=0,status=0,width=626,height=436",
        );
        if (history.pushState) {
          history.pushState(null, null, url);
        }
        return false;
      });
    });
  },
  externalElement: function (ext, act, cls) {
    if (ext != "") {
      $(ext).attr("data-event", cls);
      $(ext).attr(
        "data-class",
        $(act).attr("data-class") != undefined ? $(act).attr("data-class") : "",
      );
      var i = core.isTouch ? $(act).index() - 1 : $(act).index();
      $(ext).attr("data-index", i);
    }
  },
  showSlidesNav: function ($this, slidesNumber) {
    var totalSlides = slideshowCustom.getTotalSlides($this);
    if (slidesNumber && totalSlides > 1) {
      var $slides = $('<div class="flex-slides-nav" />').appendTo($this);
      var $prev = $('<div class="flex-slide-prev" data-dir="prev" />').appendTo(
        $slides,
      );
      var $count = $(
        '<div class="flex-slide-count">' +
          '<span class="flex-slide-active">1</span>' +
          "<span> / " +
          totalSlides +
          "</span></div>",
      ).appendTo($slides);
      var $next = $('<div class="flex-slide-next" data-dir="next" />').appendTo(
        $slides,
      );
      slideshowCustom.slidesNavClick($prev, $next, $this);
    }
  },
  slidesNavClick: function ($prev, $next, $this) {
    $prev.add($next).click(function () {
      $this.flexslider($(this).data("dir"));
    });
  },
  getTotalSlides: function ($this) {
    if (core.isTouch) {
      return $this.find("ul.slides > li").size() - 2;
    } else {
      return $this.find("ul.slides > li").size();
    }
  },
  showFlexNav: function ($this, size, directionNav) {
    if (size < 2) {
      $this.find("ul.flex-direction-nav").remove();
    }
    if (size > 1 && directionNav) {
      $this.find("ul.flex-direction-nav").show();
    }
  },
  pauseOnClick: function ($this) {
    var $slider = $this;
    $slider
      .find(".flex-next, .flex-prev, .flex-control-nav li a")
      .click(function () {
        $slider.flexslider("pause");
      });
  },
};
slideshowCustom.init({
  container: "#main-slideshow-hero .slideshow",
  slideshowSpeed: 6000,
  slideshow: true,
  controlNav: true,
  directionNav: true,
  externalEl: "#main-slideshow-hero .hero-caption",
});
if ($("#main-slideshow-hero .slides > li:not(.clone)").length < 2) {
  $("#main-slideshow-hero .hero-caption").css("pointer-events", "auto");
}
slideshowCustom.init({
  container: ".box7 .slideshow",
  slideshowSpeed: 6000,
  slideshow: true,
  controlNav: true,
  directionNav: true,
});
slideshowCustom.init({
  container: ".box20 .slideshow",
  slideshowSpeed: 6000,
  slideshow: true,
  controlNav: true,
  directionNav: false,
});
slideshowCustom.init({
  container: ".slideshow-inline .slideshow",
  slideshowSpeed: 6000,
  slideshow: false,
  controlNav: false,
  directionNav: true,
});
slideshowCustom.init({
  container: ".box29 .carousel",
  slideshowSpeed: 6000,
  slideshow: false,
  controlNav: true,
  directionNav: true,
  slidesNumber: false,
  animation: "slide",
});
slideshowCustom.init({
  container: ".box30 .carousel",
  slideshowSpeed: 6000,
  slideshow: false,
  controlNav: true,
  directionNav: true,
  slidesNumber: false,
  animation: "slide",
});
slideshowCustom.init({
  container: ".carousel.center",
  slideshow: false,
  slidesNumber: false,
  animation: "slide",
  animationLoop: false,
});
var booking = {
  maxAdults: 10,
  maxChildren: 9,
  maxChildrenAge: 11,
  minAdults: 1,
  minChildren: 0,
  minChildrenAge: 0,
  maxRooms: 1,
  yearToCheck: 2,
  keys: [[]],
  type1: [[]],
  type2: [[]],
  type3: [[]],
  type4: [[]],
  type5: [[]],
  currencyCode: "",
  convertionRate: "",
  init: function () {
    setTimeout(
      () =>
        $(".quick-booking").each(function () {
          const qb = $(this);
          booking.default(qb);
          booking.availability(qb);
        }),
      200,
    );
  },
  availability: function (qb) {
    var destination = $(qb).attr("data-destination");
    var category = $(qb).attr("data-category");
    var room = $(qb).attr("data-room");
    var promo = $(qb).attr("data-promo");
    var exactMatchOnly = $(qb).attr("data-exact-match-only");
    var connectorCode = $(qb).attr("data-connector-code");
    var connectorEnvironment = $(qb).attr("data-connector-environment");
    var datesRestrictions = $(qb).attr("data-closed-on-arrival-dates");
    var key = destination + "-" + room + "-" + promo;
    if (category == "1" && destination != "") {
      $(qb).find(".datepicker").addClass("not-ready");
      if (booking.keys[key] != undefined) {
        if (booking.keys[key][0] == 1) {
          booking.initCalendar(qb);
          $(qb).find(".legend:not(:visible)").show();
          return false;
        } else {
          var checker;
          checker = setInterval(function () {
            if (booking.keys[key][0] == 1) {
              clearInterval(checker);
              booking.initCalendar(qb);
              $(qb).find(".legend:not(:visible)").show();
              return false;
            }
          }, 250);
        }
      } else {
        booking.keys[key] = [];
        booking.keys[key][0] = 0;
        var _from = booking.yymmdd(new Date(), true);
        var _to = booking.yymmdd(
          new Date(
            new Date().setFullYear(
              new Date().getFullYear() + booking.yearToCheck,
            ),
          ),
          true,
        );
        try {
          var jsonRequest;
          if (connectorCode === "IHG_GRS") {
            jsonRequest = {
              Request: {
                ConnectorCode: connectorCode,
                HotelRefId: destination,
                FromDate: _from,
                ToDate: _to,
                Duration: 1,
                PreferredCurrency: null,
                PreferredLanguage: null,
                Rooms: [{ Paxes: [{ Age: null, Type: "ADULT" }] }],
              },
            };
            if (connectorEnvironment) {
              jsonRequest.ConnectorsEnvironment = [
                { ConnectorCode: "IHG_GRS", Environment: connectorEnvironment },
              ];
            }
          } else {
            jsonRequest = {
              Request: {
                ConnectorCode: connectorCode,
                HotelRefId: destination,
                FromDate: _from,
                ToDate: _to,
                Duration: 1,
                PreferredCurrency: null,
                PreferredLanguage: null,
                ConnectorCustomData: {
                  CustomDataConnectorCode: "SABRE_SYNXIS",
                  PromotionCodes: promo != "" ? promo.split(",") : null,
                  ExactMatchOnly: exactMatchOnly == "true" ? true : null,
                },
                Rooms: [
                  {
                    ConnectorCustomData: {
                      CustomDataConnectorCode: "SABRE_SYNXIS",
                      RoomTypeCode: room,
                    },
                    Paxes: [{ Age: null, Type: "ADULT" }],
                  },
                ],
              },
            };
          }
          $.ajax({
            type: "POST",
            url: $(qb).attr("data-api-url"),
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(jsonRequest),
            beforeSend: function (xhr) {
              xhr.setRequestHeader(
                "Authorization",
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyY2I3YmU2MC05ZmNiLTRjYmYtOWExNS1hMzhkMWQzZmIxMjYiLCJ1bmlxdWVfbmFtZSI6IjMiLCJnaXZlbl9uYW1lIjoiQXBpTGltaXRBY2Nlc3NVc2VyIiwiZW1haWwiOiJhcGlsaW1pdGFjY2Vzc3VzZXJAbGlua3N3aXNzLmNvbSIsInJvbGUiOiJBUElfTElNSVRfQUNDRVNTX1VTRVIiLCJuYmYiOjE1NTI2NTcyODQsImV4cCI6MTU1MjY2MDg4NCwiaWF0IjoxNTUyNjU3Mjg0LCJpc3MiOiJMaW5rU3dpc3MgSUNUIFNvbHV0aW9ucyBTYWdsIiwiYXVkIjoiUG9zaXRpb25lckp1cGl0ZXJBcGkifQ.HP6AD37-D8w-yI_W65KKc-IrLEoeuThSpTQfMgqBRp8",
              );
            },
            settings: [{ async: "false" }],
            success: function (data) {
              booking.keys[key][0] = 1;
              booking.type1[key] = [];
              booking.type2[key] = [];
              booking.type3[key] = [];
              booking.type4[key] = [];
              booking.type5[key] = [];
              if (datesRestrictions !== "") {
                var dates = JSON.parse(datesRestrictions);
                $.each(data.Days, function (i, v) {
                  var _d = v.Day;
                  var rDate = dates.find((x) => booking.yymmdd(x.Date) === _d);
                  var isAvailable = 1;
                  if (v.Close == true) {
                    booking.type2[key][_d] = _d;
                    isAvailable = 0;
                  }
                  if (rDate !== undefined) {
                    if (rDate.ClosedOnArrival == true) {
                      booking.type3[key][_d] = _d;
                      booking.type2[key][_d] = undefined;
                      isAvailable = 0;
                    }
                    if (rDate.MinStay > 1) {
                      booking.type4[key].push({
                        date: _d,
                        n: rDate.MinStay,
                        p: v.Price,
                      });
                      booking.type2[key][_d] = undefined;
                      isAvailable = 0;
                    }
                    if (rDate.MaxStay > 1) {
                      booking.type5[key].push({
                        date: _d,
                        n: rDate.MaxStay,
                        p: v.Price,
                      });
                      booking.type2[key][_d] = undefined;
                      isAvailable = 0;
                    }
                    if (isAvailable == 1) {
                      booking.type1[key].push({ date: _d, p: v.Price });
                    }
                  } else {
                    if (isAvailable == 1) {
                      booking.type1[key].push({ date: _d, p: v.Price });
                    }
                  }
                });
              } else {
                $.each(data.Days, function (i, v) {
                  var _d = booking.yymmdd(v.Day);
                  var isAvailable = 1;
                  if (v.Close == true) {
                    booking.type2[key][_d] = _d;
                    isAvailable = 0;
                  }
                  if (v.CloseOnArrival == true) {
                    booking.type3[key][_d] = _d;
                    isAvailable = 0;
                  }
                  if (v.MinStay > 1) {
                    booking.type4[key].push({
                      date: _d,
                      n: v.MinStay,
                      p: v.Price,
                    });
                    isAvailable = 0;
                  }
                  if (v.MaxStay > 1) {
                    booking.type5[key].push({
                      date: _d,
                      n: v.MaxStay,
                      p: v.Price,
                    });
                    isAvailable = 0;
                  }
                  if (isAvailable == 1) {
                    booking.type1[key].push({ date: _d, p: v.Price });
                  }
                });
              }
              booking.initCalendar(qb);
              $(qb).find(".legend:not(:visible)").show();
            },
            error: function (xhr, status, error) {
              booking.initCalendar(qb);
            },
          });
        } catch (error) {
          booking.initCalendar(qb);
        }
      }
    } else {
      booking.initCalendar(qb);
    }
  },
  initCalendar: function (qb) {
    $(qb).find(".datepicker").removeClass("not-ready");
    booking.calendars(qb);
    booking.resize(qb);
    booking.range(qb);
  },
  calendars: function (qb) {
    var $date1 = $(qb).find(".from");
    var $date2 = $(qb).find(".to");
    var $date1Alt = $(qb).find(".from-alt");
    var $date2Alt = $(qb).find(".to-alt");
    var placeholder1 = $date1.attr("data-placeholder");
    var placeholder2 = $date2.attr("data-placeholder");
    var from = $(qb).attr("data-arrival");
    var defaultDate = new Date();
    if (from != "") {
      defaultDate = $.datepicker.formatDate(
        $.datepicker._defaults.dateFormat,
        $.datepicker.parseDate("dd/mm/yy", from),
      );
    }
    var minDate =
      $(qb).attr("data-start") != ""
        ? $.datepicker.parseDate("dd/mm/yy", $(qb).attr("data-start"))
        : new Date();
    var maxDate =
      $(qb).attr("data-end") != ""
        ? $.datepicker.parseDate("dd/mm/yy", $(qb).attr("data-end"))
        : new Date(
            new Date().setFullYear(
              new Date().getFullYear() + booking.yearToCheck,
            ),
          );
    if ($(qb).attr("data-start") != "") {
      var _md = minDate;
      minDate = _md.getTime() > new Date().getTime() ? minDate : new Date();
    }
    minDate = $.datepicker.formatDate(
      $.datepicker._defaults.dateFormat,
      minDate,
    );
    maxDate = $.datepicker.formatDate(
      $.datepicker._defaults.dateFormat,
      maxDate,
    );
    $(qb)
      .find(".datepicker")
      .datepicker({
        defaultDate: defaultDate,
        showOtherMonths: true,
        minDate: minDate,
        maxDate: maxDate,
        firstDay: 1,
        beforeShowDay: function (date) {
          var _date1 = $date1.html() != placeholder1 ? $date1.html() : "";
          var _date2 = $date2.html() != placeholder2 ? $date2.html() : "";
          var date1 = $.datepicker.parseDate(
            $.datepicker._defaults.dateFormat,
            _date1,
          );
          var date2 = $.datepicker.parseDate(
            $.datepicker._defaults.dateFormat,
            _date2,
          );
          var destination = $(qb).attr("data-destination");
          var category = $(qb).attr("data-category");
          var room = $(qb).attr("data-room");
          var promo = $(qb).attr("data-promo");
          var key = destination + "-" + room + "-" + promo;
          var bolMain =
            (date1 && date.getTime() == date1.getTime()) ||
            (date2 && date.getTime() == date2.getTime());
          var bolRange =
            date1 &&
            date2 &&
            date.getTime() > date1.getTime() &&
            date.getTime() < date2.getTime();
          if (category == "" || category != "1") {
            if (bolMain) {
              return [true, "main", ""];
            }
            if (bolRange) {
              return [true, "range", ""];
            }
          }
          if (category == "1" && destination != "") {
            if (booking.type3[key][booking.yymmdd(date)]) {
              if (booking.type2[key][booking.yymmdd(date)]) {
                return [true, "closed", ""];
              } else {
                return [true, "restriction", ""];
              }
            }
            var day4 = booking.type4[key].filter(function (obj) {
              return obj.date == booking.yymmdd(date);
            })[0];
            var day5 = booking.type5[key].filter(function (obj) {
              return obj.date == booking.yymmdd(date);
            })[0];
            if (day4 != null || day5 != null) {
              var tooltip = "";
              if (day4 != null) {
                tooltip +=
                  $(qb).attr("data-type4").replace("{N}", day4["n"]) + "<br>";
                if (booking.currency(day4["p"]) > 0) {
                  tooltip +=
                    $(qb)
                      .attr("data-price")
                      .replace("{N}", booking.currency(day4["p"]))
                      .replace("{C}", booking.currencyCode) + "<br>";
                }
              }
              if (day5 != null) {
                tooltip +=
                  $(qb).attr("data-type5").replace("{N}", day5["n"]) + "<br>";
                if (booking.currency(day5["p"]) > 0) {
                  tooltip +=
                    $(qb)
                      .attr("data-price")
                      .replace("{N}", booking.currency(day5["p"]))
                      .replace("{C}", booking.currencyCode) + "<br>";
                }
              }
              var tooltip = tooltip.slice(0, -4);
              if (bolMain) {
                if (day4 != null) {
                  return [true, "main restriction minstay tt", tooltip];
                } else {
                  return [true, "main restriction tt", tooltip];
                }
              }
              if (bolRange) {
                if (day4 != null) {
                  return [true, "range restriction minstay tt", tooltip];
                } else {
                  return [true, "range restriction tt", tooltip];
                }
              }
              if (day4 != null) {
                return [true, "restriction minstay tt", tooltip];
              } else {
                return [true, "restriction tt", tooltip];
              }
            } else if (booking.type2[key][booking.yymmdd(date)]) {
              return [true, "closed", ""];
            } else {
              var day1 = booking.type1[key].filter(function (obj) {
                return obj.date == booking.yymmdd(date);
              })[0];
              var tooltip = "";
              if (day1 != null) {
                tooltip = $(qb)
                  .attr("data-price")
                  .replace("{N}", booking.currency(day1["p"]))
                  .replace("{C}", booking.currencyCode);
              }
              if (tooltip == "") {
                if (bolMain) {
                  return [true, "main", ""];
                }
                if (bolRange) {
                  return [true, "range", ""];
                }
              } else {
                if (bolMain) {
                  return [true, "main tt", tooltip];
                }
                if (bolRange) {
                  return [true, "range tt", tooltip];
                }
              }
            }
            var day1 = booking.type1[key].filter(function (obj) {
              return obj.date == booking.yymmdd(date);
            })[0];
            var tooltip = "";
            if (day1 != null) {
              tooltip = $(qb)
                .attr("data-price")
                .replace("{N}", booking.currency(day1["p"]))
                .replace("{C}", booking.currencyCode);
              return [true, "available tt", tooltip];
            } else {
              return [true, "available", ""];
            }
          }
          return [true, "", ""];
        },
        afterShow: function () {
          $(qb)
            .find(".ui-datepicker-calendar td.tt")
            .each(function () {
              var t = $(this).attr("title");
              if (t != "") {
                if (!$("html").hasClass("grid-table-down")) {
                  $(this).tooltip({
                    content: function () {
                      return $(this).attr("title");
                    },
                    position: { my: "center bottom", at: "center top" },
                    show: { effect: "fadeIn", duration: 250 },
                    hide: { duration: 0 },
                  });
                }
              }
            });
        },
        onSelect: function (dateText, inst) {
          var _date1 = $date1.html() != placeholder1 ? $date1.html() : "";
          var _date2 = $date2.html() != placeholder2 ? $date2.html() : "";
          var date1 = $.datepicker.parseDate(
            $.datepicker._defaults.dateFormat,
            _date1,
          );
          var date2 = $.datepicker.parseDate(
            $.datepicker._defaults.dateFormat,
            _date2,
          );
          var isoDate = booking.yymmdd(
            $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText),
          );
          var destination = $(qb).attr("data-destination");
          var category = $(qb).attr("data-category");
          var room = $(qb).attr("data-room");
          var promo = $(qb).attr("data-promo");
          var key = destination + "-" + room + "-" + promo;
          if (!date1 || date2) {
            if (category == "1" && destination != "") {
              if (booking.type2[key][isoDate] || booking.type3[key][isoDate])
                return;
            }
            $date1.html(dateText);
            booking.altFormat($date1Alt, dateText);
            $date2.html(placeholder2);
            $date2Alt.html(placeholder2);
          } else {
            if (
              $.datepicker
                .parseDate($.datepicker._defaults.dateFormat, dateText)
                .getTime() <= date1.getTime()
            ) {
              if (category == "1" && destination != "") {
                if (booking.type2[key][isoDate] || booking.type3[key][isoDate])
                  return;
              }
              $date1.html(dateText);
              booking.altFormat($date1Alt, dateText);
              $date2.html(placeholder2);
              $date2Alt.html(placeholder2);
            } else {
              if (category == "1" && destination != "") {
                if (
                  !booking.checkAvailabilityInRage(
                    key,
                    booking.yymmdd(date1),
                    isoDate,
                  )
                ) {
                  $date1.html(placeholder1);
                  $date1Alt.html(placeholder1);
                  $date2.html(placeholder2);
                  $date2Alt.html(placeholder2);
                  return;
                }
              }
              $date2.html(dateText);
              booking.altFormat($date2Alt, dateText);
              setTimeout(function () {
                booking.closeAll();
              }, 250);
            }
          }
          $(qb).find(".clear:not(:visible)").show();
        },
      });
  },
  currency: function (price) {
    var t1 = parseFloat(price) * booking.convertionRate;
    return parseInt(t1);
  },
  altFormat: function (el, value) {
    if ($("html").attr("lang") == "zh") {
      $(el).html(
        $.datepicker.formatDate(
          "yyå¹´mæœˆdæ—¥D",
          $.datepicker.parseDate($.datepicker._defaults.dateFormat, value),
        ),
      );
    } else {
      $(el).html(
        $.datepicker.formatDate(
          "D d M yy",
          $.datepicker.parseDate($.datepicker._defaults.dateFormat, value),
        ),
      );
    }
  },
  checkAvailabilityInRage: function (key, start, end) {
    var start = new Date(start);
    var end = new Date(end);
    start = new Date(start.setDate(start.getDate() + 1));
    while (start < end) {
      if (
        booking.type2[key][booking.yymmdd(start)] &&
        !booking.type3[key][booking.yymmdd(start)]
      ) {
        return false;
      }
      var newDate = start.setDate(start.getDate() + 1);
      start = new Date(newDate);
    }
    return true;
  },
  yymmdd: function (d, useUtc) {
    var _d = new Date(d);
    if (useUtc == true) {
      _d =
        _d.getUTCFullYear() +
        "-" +
        ("0" + parseInt(_d.getUTCMonth() + 1)).slice(-2) +
        "-" +
        ("0" + _d.getUTCDate()).slice(-2);
    } else {
      _d =
        _d.getFullYear() +
        "-" +
        ("0" + parseInt(_d.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + _d.getDate()).slice(-2);
    }
    return _d;
  },
  resize: function (qb) {
    function numberOfMonths() {
      $(qb)
        .find(".datepicker")
        .datepicker(
          "option",
          "numberOfMonths",
          $("html").hasClass("grid-table-down") ? 1 : 2,
        );
    }
    numberOfMonths();
    $(window).resize(function () {
      numberOfMonths();
    });
  },
  range: function (qb) {
    var $cal = $(qb).find(".dates .pnl");
    $cal.delegate(".ui-datepicker-calendar td", "mouseover", function () {
      if ($(this).attr("data-year") == undefined) return;
      var _arrival = $(qb).find(".from").html();
      var arrival =
        _arrival != $(qb).find(".from").attr("data-placeholder")
          ? $.datepicker
              .parseDate($.datepicker._defaults.dateFormat, _arrival)
              .getTime()
          : "";
      if (arrival == "") return;
      var _departure = $(qb).find(".to").html();
      var departure =
        _departure != $(qb).find(".to").attr("data-placeholder")
          ? $.datepicker
              .parseDate($.datepicker._defaults.dateFormat, _departure)
              .getTime()
          : "";
      if (departure != "") return;
      var currentOver =
        $("a", this).html() +
        "/" +
        (parseInt($(this).attr("data-month")) + 1) +
        "/" +
        $(this).attr("data-year");
      currentOver = $.datepicker.parseDate("dd/mm/yy", currentOver).getTime();
      if (currentOver <= arrival) return;
      $cal.find(".ui-datepicker-calendar td").each(function (index, el) {
        if ($(this).attr("data-year") == undefined) return;
        var currentEach =
          $("a", this).html() +
          "/" +
          (parseInt($(this).attr("data-month")) + 1) +
          "/" +
          $(this).attr("data-year");
        currentEach = $.datepicker.parseDate("dd/mm/yy", currentEach).getTime();
        if (currentEach <= currentOver && currentEach > arrival) {
          $(this).addClass("range");
        } else {
          $(this).removeClass("range");
        }
      });
    });
  },
  clearCalendars: function (el) {
    var $qb = $(el).closest(".quick-booking");
    var $date1 = $qb.find(".from");
    var $date2 = $qb.find(".to");
    var $date1Alt = $qb.find(".from-alt");
    var $date2Alt = $qb.find(".to-alt");
    $date1.html($date1.attr("data-placeholder"));
    $date2.html($date2.attr("data-placeholder"));
    $date1Alt.html($date1.html());
    $date2Alt.html($date2.html());
    $qb.find(".datepicker").datepicker("setDate", null);
    $qb.find(".clear").hide();
  },
  default: function (qb) {
    booking.openPnls(qb);
    booking.destinations(qb);
    var dd = $(qb).attr("data-destination");
    if (dd != "") {
      $(qb)
        .find(".destinations > a")
        .html(
          $(qb)
            .find(".destinations .pnl li > a[data-destination=" + dd + "]")
            .html(),
        );
      $(qb).find(".destinations > select").val(dd);
    }
    var dg = $(qb).attr("data-group");
    if (dg != "") {
      $(qb).find(".options input.group").val(dg);
    }
    var dp = $(qb).attr("data-promo");
    if (dp != "") {
      $(qb).find(".options input.promo").val(dp);
    }
    var di = $(qb).attr("data-iata");
    if (di != "") {
      $(qb).find(".options input.iata").val(di);
    }
    var from = $(qb).attr("data-arrival");
    var to = $(qb).attr("data-departure");
    if (from != "") {
      var _from = $.datepicker.formatDate(
        $.datepicker._defaults.dateFormat,
        $.datepicker.parseDate("dd/mm/yy", from),
      );
      $(qb).find(".from").html(_from);
      booking.altFormat($(qb).find(".from-alt"), _from);
      $(qb).find(".clear:not(:visible)").show();
    }
    if (to != "") {
      var _to = $.datepicker.formatDate(
        $.datepicker._defaults.dateFormat,
        $.datepicker.parseDate("dd/mm/yy", to),
      );
      $(qb).find(".to").html(_to);
      booking.altFormat($(qb).find(".to-alt"), _to);
    }
    var rooms = $(qb).attr("data-guests");
    if (rooms != "") {
      rooms += "";
      rooms = rooms.split("_");
      $.each(rooms, function (a, val) {
        booking.addRoom($(qb).find(".add-room"), true);
        var guests = rooms[a].split("-");
        var index = a + 1;
        var $room = $(qb).find(".room:eq(" + index + ")");
        var adults = guests[0];
        $room.find(".guest.adults").find(".number").html("0");
        for (b = 0; b < adults; b++) {
          $room.find(".guest.adults a.add").click();
        }
        $.each(guests, function (c, val) {
          if (c == 0) return true;
          $room.find(".guest.children a.add").click();
          for (d = 0; d < guests[c]; d++) {
            $room.find(".children-ages .guest.age:eq(" + c + ") a.add").click();
          }
        });
      });
    } else {
      booking.addRoom($(qb).find(".add-room"), false);
    }
  },
  addRoom: function (el, auto) {
    var $bRooms = $(el).closest(".rooms");
    var rooms = $bRooms.find(".room").length - 1;
    var $room0 = $bRooms.find(".room:first-child");
    var $roomX = $room0.clone(true, true);
    if (rooms < booking.maxRooms) {
      $roomX.find(".index").html(rooms + 1);
      $bRooms.find(".add-room").before($roomX.show().addClass("open"));
      $bRooms.find(".room:visible").find(".remove-room").show();
      if (auto == false) {
        var $totalAn = $(el).closest(".quick-booking").find(".adults-number");
        $totalAn.html(parseInt($totalAn.html()) + 2);
      }
    }
    if (rooms >= booking.maxRooms - 1) {
      $bRooms.find(".add-room").hide();
    }
    if (rooms == 0) {
      $roomX.find(".remove-room").hide();
    } else {
      $bRooms.find(".room:eq(1)").find(".remove-room").show();
    }
  },
  removeRoom: function (el) {
    var $bRooms = $(el).closest(".rooms");
    var roomAn = $(el).closest(".room").find(".guest.adults .number");
    var $totalAn = $(el).closest(".quick-booking").find(".adults-number");
    $totalAn.html(parseInt($totalAn.html()) - parseInt(roomAn.html()));
    var roomCn = $(el).closest(".room").find(".guest.children .number");
    var $totalCn = $(el).closest(".quick-booking").find(".children-number");
    $totalCn.html(parseInt($totalCn.html()) - parseInt(roomCn.html()));
    $(el).closest(".room").remove();
    $bRooms.find(".room:visible").each(function () {
      var $room = $(this);
      $room.find(".index").html($room.index());
    });
    var rooms = $bRooms.find(".room").length - 1;
    if (rooms < booking.maxRooms) {
      $bRooms.find(".add-room").show();
    }
    if (rooms == 1) {
      $bRooms.find(".room:visible").find(".remove-room").hide();
    }
  },
  addGuest: function (el) {
    var $el = $(el);
    var $input = $el.closest(".guest").find(".number");
    var val = parseInt($input.html()) + 1;
    if ($el.closest(".guest").hasClass("adults")) {
      if (val > booking.maxAdults) {
        val = booking.maxAdults;
      } else {
        var $an = $el.closest(".quick-booking").find(".adults-number");
        $an.html(parseInt($an.html()) + 1);
      }
    }
    if ($el.closest(".guest").hasClass("children")) {
      if (val > booking.maxChildren) {
        val = booking.maxChildren;
      } else {
        var $cn = $el.closest(".quick-booking").find(".children-number");
        $cn.html(parseInt($cn.html()) + 1);
      }
      var chidrenAges =
        $el.closest(".children").next(".children-ages").find(".age").length - 1;
      if (chidrenAges < booking.maxChildren) {
        var $chidrenAgesContainer = $el
          .closest(".children")
          .next(".children-ages");
        var $chidrenAge0 = $chidrenAgesContainer.find(".age:first-child");
        var el = $chidrenAge0.clone(true, true).show().addClass("open");
        $chidrenAgesContainer.append(el);
        $(el).find(".index").html($(el).index());
      }
    }
    if ($el.closest(".guest").hasClass("age")) {
      val = val > booking.maxChildrenAge ? booking.maxChildrenAge : val;
    }
    $input.html(val);
  },
  removeGuest: function (el) {
    var $el = $(el);
    var $input = $el.closest(".guest").find(".number");
    var val = parseInt($input.html()) - 1;
    if ($el.closest(".guest").hasClass("adults")) {
      if (val < booking.minAdults) {
        val = booking.minAdults;
      } else {
        var $an = $el.closest(".quick-booking").find(".adults-number");
        $an.html(parseInt($an.html()) - 1);
      }
    }
    if ($el.closest(".guest").hasClass("children")) {
      if (val < booking.minChildren) {
        val = booking.minChildren;
      } else {
        var $cn = $el.closest(".quick-booking").find(".children-number");
        $cn.html(parseInt($cn.html()) - 1);
      }
      var chidrenAges =
        $el.closest(".children").next(".children-ages").find(".age").length - 1;
      if (chidrenAges == 0) return;
      $el
        .closest(".children")
        .next(".children-ages")
        .find(".age:eq(" + chidrenAges + ")")
        .remove();
    }
    if ($el.closest(".guest").hasClass("age")) {
      val = val < booking.minChildrenAge ? booking.minChildrenAge : val;
    }
    $input.html(val);
  },
  toggle: function (el1, el2, effect) {
    $(el1).toggleClass("active");
    if (effect == "fade") {
      $(el2).fadeToggle(250);
    }
    if (effect == "slide") {
      $(el2).slideToggle(250);
    }
  },
  submitSearch: function (el) {
    var $qb = $(el).closest(".quick-booking");
    var attrLink = $(el).attr("href").split("#");
    var link = attrLink[0];
    var linkTracking = "";
    if (attrLink.length > 1) {
      linkTracking = "#" + attrLink[1];
    }
    var _arrival = $qb.find(".from").html();
    var _departure = $qb.find(".to").html();
    var arrival =
      _arrival != $qb.find(".from").data("placeholder")
        ? "&Arrive=" +
          $.datepicker.formatDate(
            "mm/dd/yy",
            $.datepicker.parseDate($.datepicker._defaults.dateFormat, _arrival),
          )
        : "";
    var departure =
      _departure != $qb.find(".to").data("placeholder")
        ? "&Depart=" +
          $.datepicker.formatDate(
            "mm/dd/yy",
            $.datepicker.parseDate(
              $.datepicker._defaults.dateFormat,
              _departure,
            ),
          )
        : "";
    var rooms = 0;
    var adults = "";
    var children = "";
    var ages = "";
    $qb.find(".room.open").each(function () {
      rooms += 1;
      var $room = $(this);
      adults += $room.find(".guest.adults").find(".number").html() + ",";
      children += $room.find(".guest.children").find(".number").html() + ",";
      var age = "";
      $room.find(".guest.age.open").each(function () {
        age += $(this).find(".number").html() + "|";
      });
      ages += age.slice(0, -1) + ",";
    });
    ages = ages.slice(0, -1);
    if (ages != "") {
      ages = "&Childages=" + ages;
    }
    var _group = $qb.find(".group").val();
    var group = _group != "" ? "&Group=" + _group : "";
    var _promo = $qb.find(".promo").val();
    var promo = _promo != "" ? "&Promo=" + _promo : "";
    var _offers = $qb.find(".offers").val();
    var offers = _offers != "" ? "&Offers=" + _offers : "";
    var _corporate = $qb.find(".corporate").val();
    var corporate = _corporate != "" ? "&Corporate=" + _corporate : "";
    var _iata = $qb.find(".iata").val();
    var iata = _iata != "" ? "&_PMID=" + _iata : "";
    var url =
      "" +
      link +
      arrival +
      departure +
      "&Rooms=" +
      rooms +
      "&Adult=" +
      adults.slice(0, -1) +
      "&Child=" +
      children.slice(0, -1) +
      ages +
      group +
      promo +
      offers +
      corporate +
      iata +
      linkTracking;
    window.open(url, "_self");
  },
  openPnls: function (qb) {
    $(qb)
      .find(".field > a")
      .click(function (e) {
        e.stopPropagation();
        let $field = $(this).closest("div");
        let $pnlField = $(this).next(".pnl");
        window.CurrencyConverter.getConversionRate()
          .then((result) => {
            booking.currencyCode = result.currency;
            booking.convertionRate = result.rate;
            $field.toggleClass("selected");
            $pnlField.fadeToggle("fast");
            booking.closeAll($field);
            booking.availability(qb);
            if ($field.hasClass("selected")) {
              const rect = $field
                .closest("fieldset.quick-booking")[0]
                .getBoundingClientRect();
              const viewportMidpoint = window.innerHeight / 2;
              if (rect.bottom <= viewportMidpoint) {
                $pnlField.addClass("show-below");
              }
              $("#bg-blur").fadeIn(500);
              $(this).closest("#quick-booking-hero").css("z-index", 200);
            } else {
              setTimeout(function () {
                $(".pnl").removeClass("show-below");
              }, 1000);
            }
          })
          .catch((error) => {
            console.error(
              `[booking.js][openPnls]: Error fetching conversion rate for currency ${currency}:`,
              error,
            );
          });
      });
    $(".pnl .close").click(function () {
      let $field = $(this).closest(".field");
      $field.removeClass("selected");
      $(this).closest(".pnl").fadeOut("fast");
      setTimeout(function () {
        $(".pnl").removeClass("show-below");
      }, 1000);
    });
  },
  destinations: function (qb) {
    $(qb)
      .find(".destinations .pnl li > a")
      .click(function () {
        const value = $(this).attr("data-destination");
        const href = $(this).attr("href");
        const category = $(this).attr("data-category");
        const connectorCode = $(this).attr("data-connector-code");
        const currency = $(this).attr("data-currency");
        const closedOnArrivalDates = $(this).attr(
          "data-closed-on-arrival-dates",
        );
        const name = $(this).html();
        window.CurrencyConverter.getConversionRate(currency)
          .then((result) => {
            booking.currencyCode = result.currency;
            booking.convertionRate = result.rate;
            booking.availability(qb);
            $(qb).find(".destinations > a").html(name);
            $(qb).find("> a.button").attr("href", href);
            booking.closeAll();
            $(qb).attr("data-destination", value);
            $(qb).attr("data-connector-code", connectorCode);
            if (value && category === "1") {
              $(qb).attr("data-category", "1");
              $(qb).attr("data-closed-on-arrival-dates", closedOnArrivalDates);
              booking.availability(qb);
            } else {
              $(qb).attr("data-category", "");
              $(qb).attr("data-closed-on-arrival-dates", "");
              booking.initCalendar(qb);
            }
          })
          .catch((error) => {
            console.error(
              `[booking.js][destinations]: Error fetching conversion rate for currency ${currency}:`,
              error,
            );
          });
        return false;
      });
    $(qb)
      .find(".destinations > select")
      .change(function () {
        $(qb).find(".datepicker").datepicker("destroy");
        const value = $(this).val();
        const href = $("option:selected", this).attr("data-url");
        const category = "1";
        $(qb).find(".destinations > a").attr("data-category", category);
        $(qb).find("> a.button").attr("href", href);
        booking.closeAll();
        return false;
      });
  },
  closeAll: function (field) {
    $(".quick-booking .field")
      .not($(field))
      .removeClass("selected")
      .find(".pnl")
      .fadeOut("fast");
  },
};
$(function () {
  $.datepicker._updateDatepicker_original = $.datepicker._updateDatepicker;
  $.datepicker._updateDatepicker = function (inst) {
    $.datepicker._updateDatepicker_original(inst);
    var afterShow = this._get(inst, "afterShow");
    if (afterShow) afterShow.apply(inst.input ? inst.input[0] : null);
  };
});
booking.init();
class PskLanguageSelector {
  constructor() {
    let langSelectors = document.getElementsByClassName(
      "psk-language-selector",
    );
    for (let i = 0; i < langSelectors.length; i++) {
      langSelectors[i].addEventListener("change", function (evt) {
        window.location.href = evt.target.value;
      });
    }
  }
}
new PskLanguageSelector();
(function (e) {
  "function" == typeof define && define.amd
    ? define(["../datepicker"], e)
    : e(jQuery.datepicker);
})(function (e) {
  return (
    (e.regional["en-GB"] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      monthNamesShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      dayNames: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "dd/mm/yy",
      firstDay: 1,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: "",
    }),
    e.setDefaults(e.regional["en-GB"]),
    e.regional["en-GB"]
  );
});
