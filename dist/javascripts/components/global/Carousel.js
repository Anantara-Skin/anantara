import s from "../../core/ComponentRegistry.js";
import t from "../../core/Component.js";
import {Swiper as e, Navigation as i, Pagination as a, Scrollbar as l, Autoplay as o, Lazy as r} from "../../vendors/swiper.js";
import {mix as n} from "../../core/mixwith.js";
import {deepMerge as d} from "../../toolbox/deepMerge.js";
import {Event as h} from "../../services/EventEmitter.js";
import {on as c, trigger as u, off as p} from "../../toolbox/event.js";
import {throttle as m} from "../../toolbox/throttle.js";
import {debounce as g} from "../../toolbox/debounce.js";
import {mediaQuery as b} from "../../toolbox/mediaQuery.js";
import v from "../../mixins/Accessibility.js";
import {checkContrast as y} from "../../toolbox/color.js";
class A extends (n(t).with(v)) {
    constructor(s, t={}) {
        super(s, d({
            slidesPerView: 1,
            spaceBetween: 0,
            containerOffset: 0,
            centerSlides: !1,
            centerActiveSlide: !1,
            zoomInActiveSlide: !1,
            loop: !1,
            loopAdditionalSlides: 0,
            showPagination: !1,
            showArrows: !1,
            arrowsOutsideContainer: !1,
            showScrollbar: !1,
            mouseWheel: !0,
            direction: "horizontal",
            containerClass: null,
            breakpoints: null,
            initialSlide: 0,
            autoplay: !1,
            autoplayDelay: 1e4,
            freeMode: !1,
            bulletMessage: "",
            sliderWithBackground: !1,
            carouselTheme: null,
            lazy: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            forceLoadFirstImage: !1,
            a11y: {
                carouselItemAriaLabel: "Slide {0} of {1}",
                autoplayAriaLabelStop: "",
                autoplayAriaLabelPlay: ""
            },
            selectedIndex: null,
            isDynamicContent: !1,
            touchStartPreventDefault: !0,
            disableDefaultAriaMessage: !1,
            classNames: {
                carouselItem: "c-carousel__item",
                wrapper: "c-carousel__content",
                nextArrow: "js-carousel__arrow-next",
                prevArrow: "js-carousel__arrow-prev",
                bullet: "c-carousel__pagination-bullet",
                bulletCustom: "c-carousel__pagination-bullet-custom",
                pagination: "js-carousel__pagination",
                paginationList: "js-carousel__pagination-list",
                scrollbar: "js-carousel__scrollbar",
                lazy: "js-carousel__lazy",
                lazyLoading: "m-loading",
                lazyLoaded: "m-loaded",
                lazyPreloader: "js-carousel__lazy-preloader"
            },
            trackSwipe: !1
        }, t))
    }
    initCache() {
        this.slider = null,
        this.selectors.carousel = this.element.querySelector("[data-js-carousel]"),
        this.selectors.container = this.element.querySelector("[data-js-container]"),
        this.selectors.carouselAria = this.element.querySelector("[data-js-carousel-aria]"),
        this.selectors.carouselAutoplay = this.element.querySelector("[data-js-carousel-autoplay]"),
        this.selectors.carouselArrows = this.element.querySelectorAll("[data-js-carousel-arrows]"),
        this.selectors.carouselPagination = this.element.querySelector("[data-js-carousel-pagination]"),
        this.selectors.firstSlide = this.element.querySelector("[data-js-carousel-item]"),
        this.selectors.slides = Array.from(this.selectors.firstSlide.parentElement.children),
        this.selectors.parentSlide = this.element.closest("[data-js-carousel-item]"),
        this.options.loop = this.selectors.slides.length > this.options.slidesPerView && this.options.loop,
        this.classes = {
            ready: "m-ready",
            unready: "m-unready",
            disabled: "m-disabled",
            hidden: "h-hidden",
            vertical: "m-vertical",
            horizontal: "m-horizontal",
            visible: "m-visible",
            expanded: "m-expanded",
            active: "m-active",
            animated: "m-animated",
            lightMode: "m-color-light",
            darkMode: "m-color-dark",
            light: "m-light",
            dark: "m-dark"
        }
    }
    initState() {
        this.state.isAutoplayEnabled = this.options.autoplay,
        this.state.hasVideos = !!this.element.querySelectorAll("[data-js-video-container]").length,
        this.state.currentVideo = null,
        this.state.expanded = !!this.state.expanded,
        this.state.isSlideChangeTransitionEnd = null,
        this.state.mutationObserver = null,
        this.state.touches = null
    }
    afterInit() {
        this.setDirection(),
        this.setContainerClass(),
        this.createSlider(),
        this.setBreakpointScrollbarClass(),
        this.options.isExpanded && !this.state.expanded ? this.expandSlides() : !this.options.isExpanded && this.state.expanded && this.unexpandSlides(),
        this.options.autoplay && this.showAutoplayButton(),
        this.options.isDynamicContent && this.initMutationObserver(),
        this.setSlidesIndex(),
        this.handleBackgroundUpdates(),
        this.options.carouselTheme && this.setCarouselTheme(this.options.carouselTheme),
        this.updateNavigationState()
    }
    initMutationObserver() {
        const s = new MutationObserver(m(this.onMutation.bind(this), 1e3));
        s.observe(this.element, {
            subtree: !0,
            childList: !0
        }),
        this.state.mutationObserver = s
    }
    onMutation() {
        this.slider && this.updateAccessibility()
    }
    bindEvents() {
        c("carousel.scrollto", this.element, this.onScrollTo.bind(this)),
        b.is("large") && (c("mouseenter", this.selectors.carousel, this.onMouseEnter.bind(this)),
        c("mouseleave", this.selectors.carousel, g(this.onMouseLeave.bind(this)))),
        c("focusin", this.selectors.carousel, this.onFocusIn.bind(this)),
        c("focusout", this.selectors.carousel, this.onFocusOut.bind(this)),
        c("carousel.update", this.element, this.updateSlider.bind(this)),
        this.options.touchStartPreventDefault && c("click", this.selectors.carousel, this.onCarouselClick.bind(this))
    }
    bindSliderEvents() {
        this.slider.params.showArrows && (this.slider.navigation.nextEl && (c("click", this.slider.navigation.nextEl, this.onNextArrowClick.bind(this)),
        c("mousemove pointermove touchmove", this.slider.navigation.nextEl, this.onControlMove.bind(this), {
            passive: !0
        })),
        this.slider.navigation.prevEl && (c("click", this.slider.navigation.prevEl, this.onPrevArrowClick.bind(this)),
        c("mousemove pointermove touchmove", this.slider.navigation.prevEl, this.onControlMove.bind(this), {
            passive: !0
        }))),
        this.slider.params.showPagination && this.slider.pagination.el && (c("click", this.slider.pagination.el, this.onPaginationClick.bind(this)),
        c("mousemove pointermove touchmove", this.slider.pagination.el, this.onControlMove.bind(this), {
            passive: !0
        })),
        this.options.autoplay && this.selectors.carouselAutoplay && c("click", this.selectors.carouselAutoplay, this.onCarouselAutoplayToggle.bind(this))
    }
    onNextArrowClick() {
        this.state.navigationNextDisabled || (this.state.isAutoplayEnabled = !1,
        this.stopAutoplay(),
        this.nextSlide()),
        this.updateNavigationState()
    }
    onPrevArrowClick() {
        this.state.navigationPrevDisabled || (this.state.isAutoplayEnabled = !1,
        this.stopAutoplay(),
        this.prevSlide()),
        this.updateNavigationState()
    }
    updateNavigationState() {
        const s = this.getCarouselOptions()
          , {disabledClass: t} = s.navigation;
        this.state.navigationPrevDisabled = this.slider.navigation.prevEl && this.slider.navigation.prevEl.classList.contains(t),
        this.state.navigationNextDisabled = this.slider.navigation.nextEl && this.slider.navigation.nextEl.classList.contains(t)
    }
    onControlMove(s) {
        s.stopPropagation()
    }
    onPaginationClick(s) {
        const t = this.options.customPagination ? this.options.classNames.bulletCustom : this.options.classNames.bullet
          , e = s.target.classList.contains(t)
          , i = s.target.dataset.slideto;
        this.state.isAutoplayEnabled = !1,
        this.state.paginationClicked = !0,
        this.stopAutoplay(),
        Number.isNaN(i) || (e && this.bulletChange(i),
        this.options.loop ? this.slider.slideToLoop(i) : this.slider.slideTo(i))
    }
    onPaginationRender() {
        this.slider && this.state.paginationClicked && (this.slider.pagination.el.querySelector(`[data-slideto="${this.slider.realIndex}"]`).focus(),
        this.state.paginationClicked = !1)
    }
    onSlideResetTransitionEnd() {
        this.updateSlidesOnTransition()
    }
    setSearchAria() {
        if (this.options.disableDefaultAriaMessage)
            return;
        const s = this.slider.slides[this.slider.activeIndex]
          , t = s && s.getAttribute("aria-label");
        t && this.selectors.carouselAria && (this.selectors.carouselAria.innerHTML = t)
    }
    onCarouselAutoplayToggle() {
        this.state.isAutoplayEnabled ? (this.state.isAutoplayEnabled = !1,
        this.stopAutoplay()) : (this.state.isAutoplayEnabled = !0,
        this.startAutoplay());
        const s = this.slider.slides[this.slider.activeIndex];
        setTimeout( () => {
            const t = this.getAnalyticsData(s);
            if (t) {
                const {extraData: s} = t;
                s && "" === s.click_action && (s.click_action = this.state.isAutoplayEnabled ? "pause" : "display"),
                h.emit("analytics.event", {
                    category: "slider",
                    action: this.state.isAutoplayEnabled ? "pause" : "display",
                    label: t.label,
                    extraData: s
                })
            }
        }
        , 0)
    }
    onMouseEnter() {
        this.state.isAutoplayEnabled && this.stopAutoplay()
    }
    onMouseLeave() {
        this.state.isAutoplayEnabled && this.startAutoplay()
    }
    onFocusIn() {
        this.state.isAutoplayEnabled && this.stopAutoplay()
    }
    onFocusOut() {
        this.state.isAutoplayEnabled && this.startAutoplay()
    }
    onCarouselClick(s) {
        if ("SELECT" === s.target.nodeName) {
            const t = new MouseEvent("click");
            s.target.dispatchEvent(t)
        }
    }
    bulletChange(s) {
        const t = this.slider.slides[s] || this.slider.slides[this.slider.activeIndex];
        setTimeout( () => {
            const s = this.getAnalyticsData(t);
            if (s) {
                const {extraData: t} = s;
                t && "" === t.click_action && (t.click_action = "select"),
                h.emit("analytics.event", {
                    category: "slider",
                    action: "select",
                    label: s.label,
                    extraData: t
                })
            }
        }
        , 0)
    }
    swipeSlide() {
        if (!this.slider.swipeDirection || this.state.touches === JSON.stringify(this.slider.touches))
            return;
        this.state.touches = JSON.stringify(this.slider.touches);
        const s = this.slider.slides[this.slider.activeIndex];
        setTimeout( () => {
            let t = this.getAnalyticsData(s);
            if (t) {
                t.swipeData && (t = Object.assign(t, t.swipeData));
                const s = "prev" === this.slider.swipeDirection ? "previous" : this.slider.swipeDirection
                  , e = t.action ? `${t.action}${s}` : s
                  , {extraData: i} = t;
                i.click_action = s,
                h.emit("analytics.event", {
                    category: t.category || "slider",
                    action: e,
                    label: t.label,
                    extraData: i
                })
            }
        }
        , 0)
    }
    nextSlide() {
        const s = this.slider.visibleSlides[this.slider.visibleSlides.length - 1];
        setTimeout( () => {
            const t = this.getAnalyticsData(s);
            if (t) {
                const s = t.action ? `${t.action}next` : "next"
                  , {extraData: e} = t;
                e && "" === e.click_action && (e.click_action = "next"),
                h.emit("analytics.event", {
                    category: t.category || "slider",
                    action: s,
                    label: t.label,
                    extraData: e
                })
            }
        }
        , 0)
    }
    prevSlide() {
        const s = this.slider.visibleSlides[0];
        setTimeout( () => {
            const t = this.getAnalyticsData(s);
            if (t) {
                const s = t.action ? `${t.action}previous` : "previous"
                  , {extraData: e} = t;
                e && "" === e.click_action && (e.click_action = "previous"),
                h.emit("analytics.event", {
                    category: t.category || "slider",
                    action: s,
                    label: t.label,
                    extraData: e
                })
            }
        }
        , 0)
    }
    expandSlides() {
        this.toggleCarouselExpand(!0)
    }
    unexpandSlides() {
        this.toggleCarouselExpand(!1)
    }
    toggleCarouselExpand(s) {
        const t = "boolean" == typeof s ? s : !this.state.expanded
          , e = t ? this.getExpandedCarouselOptions() : this.getCarouselOptions();
        this.state.expanded = t,
        this.unbindSliderEvents(),
        this.slider.destroy(!1, !0),
        this.createSlider(e),
        t ? (this.element.removeAttribute("role"),
        this.element.removeAttribute("aria-roledescription"),
        this.selectors.container.classList.add(this.classes.expanded),
        this.selectors.slides.forEach(s => {
            s.removeAttribute("role"),
            s.removeAttribute("aria-roledescription")
        }
        )) : (this.element.setAttribute("role", "region"),
        this.element.setAttribute("aria-roledescription", "carousel"),
        this.selectors.container.classList.remove(this.classes.expanded),
        this.selectors.slides.forEach(s => {
            s.setAttribute("role", "group"),
            s.setAttribute("aria-roledescription", "slide")
        }
        ))
    }
    getExpandedCarouselOptions() {
        const s = this.getCarouselOptions();
        return s.slidesPerColumn = Math.ceil(this.slider.slides.length / this.slider.slidesPerViewDynamic()),
        s.slidesPerColumnFill = "row",
        s.initialSlide = 0,
        s.showArrows = !1,
        s.showPagination = !1,
        s.showScrollbar = !1,
        s.autoplay = !1,
        s
    }
    showAutoplayButton() {
        this.selectors.carouselAutoplay && this.selectors.carouselAutoplay.classList.remove("h-hidden")
    }
    createSlider(s) {
        return this.slider && !this.slider.destroyed || (this.slider = new e(this.selectors.carousel,s || this.getCarouselOptions()),
        this.selectors.container.removeAttribute("aria-live"),
        this.slider.enabled = !0,
        this.state.hasVideos && this.slider.slides.length && (this.state.currentVideo = this.getCurrentSlide().slide.querySelector("[data-js-video-container]")),
        this.options.lazy && this.updateLazyLoad(),
        this.updateSlider(),
        this.bindSliderEvents()),
        this.slider
    }
    setDirection() {
        "vertical" === this.options.direction ? (this.element.classList.add(this.classes.vertical),
        this.element.classList.remove(this.classes.horizontal)) : (this.element.classList.add(this.classes.horizontal),
        this.element.classList.remove(this.classes.vertical))
    }
    setContainerClass() {
        this.options.wrapperClass && this.selectors.container.classList.add(this.options.wrapperClass)
    }
    setBreakpointScrollbarClass() {
        this.options.showScrollbar && this.options.breakpoints && Object.keys(this.options.breakpoints).forEach(s => {
            b.is(s) && this.options.breakpoints[s].classNames && this.options.breakpoints[s].classNames.scrollbarClass && this.options.breakpoints[s].classNames.scrollbarClass.split(" ").forEach(s => {
                this.slider.scrollbar.el.classList.add(s)
            }
            )
        }
        )
    }
    updateSlider() {
        this.slider.update(),
        this.options.selectedIndex && this.options.selectedIndex >= this.options.slidesPerView && (this.options.loop ? this.slider.slideToLoop(Number(this.options.selectedIndex)) : this.slider.slideTo(Number(this.options.selectedIndex))),
        this.options.isExpanded || ("vertical" === this.options.direction ? this.updateVerticalSlider() : this.updateHorizontalSlider()),
        this.setOffsetSlider(),
        this.updateArrowsVisibility(),
        this.updateAccessibility(),
        u("carousel.updated", this.element, {
            bubbles: !0
        }),
        this.options.showScrollbar && this.updateScrollbar()
    }
    updateCarouselBackground() {
        const s = this.slider.slides[this.slider.activeIndex]
          , t = s && s.querySelector("[data-js-tile]")
          , e = t && t.getAttribute("data-background-color")
          , i = t && t.getAttribute("data-transparent-tile-color")
          , a = this.element.closest("[data-js-section]");
        this.isBackgroundImageSet(t) ? a.style.backgroundColor = "" : (i && this.setColorForTransparentTile(t),
        e && (a.style.backgroundColor = e,
        i || this.setOppositeColor(t, e)))
    }
    isBackgroundImageSet(s) {
        return b.is("small only") && s.getAttribute("data-background-image-mobile") || b.is("medium only") && s.getAttribute("data-background-image-tablet") || b.is("large") && s.getAttribute("data-background-image")
    }
    setColorForTransparentTile(s) {
        const t = s && s.getAttribute("data-transparent-tile-color");
        t && (this.setSectionColor(t),
        this.setCarouselTileColor(s, t))
    }
    setSectionColor(s) {
        const t = this.element.closest("[data-js-section]");
        t && ("light" === s ? (t.classList.remove("h-color-dark"),
        t.classList.add("h-color-light"),
        this.addNavigationClass(this.classes.lightMode)) : (t.classList.remove("h-color-light"),
        t.classList.add("h-color-dark"),
        this.removeNavigationClass(this.classes.lightMode)))
    }
    updateCarouselBackgroundImage() {
        const s = this.slider.slides[this.slider.activeIndex]
          , t = s && s.querySelector("[data-background-image]");
        let e = null;
        t && (e = b.is("small only") ? t.getAttribute("data-background-image-mobile") : b.is("medium only") ? t.getAttribute("data-background-image-tablet") : t.getAttribute("data-background-image"));
        const i = this.element.closest("[data-js-section]");
        i.style.backgroundImage = s && e && i ? `url('${e}')` : null,
        this.setColorForTransparentTile(t)
    }
    setCarouselTheme(s) {
        "dark" === s ? (this.selectors.slides.forEach(s => {
            this.setCarouselTileColor(s, "dark")
        }
        ),
        this.removeNavigationClass(this.classes.lightMode)) : "light" === s && (this.selectors.slides.forEach(s => {
            this.setCarouselTileColor(s, "light")
        }
        ),
        this.addNavigationClass(this.classes.lightMode))
    }
    updateScrollbar() {
        if (this.slider.params.centeredSlides) {
            const s = this.slider.slides.length
              , t = "vertical" === this.options.direction ? this.slider.scrollbar.el.offsetHeight : this.slider.scrollbar.el.offsetWidth;
            this.slider.params.scrollbar.dragSize = Math.round(t / s),
            this.slider.scrollbar.updateSize()
        }
    }
    setOppositeColor(s, t) {
        y(t, "#ffffff") < 4.5 ? (this.setSectionColor("dark"),
        this.setCarouselTileColor(s, "dark")) : (this.setSectionColor("light"),
        this.setCarouselTileColor(s, "light"))
    }
    setCarouselTileColor(s, t) {
        const e = s.querySelector("[data-js-product-tile]")
          , i = s.querySelector("[data-js-product-variation]")
          , a = s.querySelector("[data-js-product-rating]")
          , l = s.querySelector("[data-js-product-intensity]");
        "dark" === t ? (e && (e.classList.add(this.classes.darkMode),
        e.classList.remove(this.classes.lightMode)),
        i && (i.classList.add(this.classes.dark),
        i.classList.remove(this.classes.light)),
        a && (a.classList.add(this.classes.dark),
        a.classList.remove(this.classes.light)),
        l && (l.classList.add(this.classes.dark),
        l.classList.remove(this.classes.light))) : "light" === t && (e && (e.classList.add(this.classes.lightMode),
        e.classList.remove(this.classes.darkMode)),
        i && (i.classList.add(this.classes.light),
        i.classList.remove(this.classes.dark)),
        a && (a.classList.add(this.classes.light),
        a.classList.remove(this.classes.dark)),
        l && (l.classList.add(this.classes.light),
        l.classList.remove(this.classes.dark)))
    }
    addNavigationClass(s) {
        this.selectors.carouselArrows.length && this.selectors.carouselArrows.forEach(t => {
            t.classList.add(s)
        }
        ),
        this.selectors.carouselPagination && this.selectors.carouselPagination.classList.add(s),
        this.options.showScrollbar && this.slider.scrollbar.el.classList.add(s)
    }
    removeNavigationClass(s) {
        this.selectors.carouselArrows.length && this.selectors.carouselArrows.forEach(t => {
            t.classList.remove(s)
        }
        ),
        this.selectors.carouselPagination && this.selectors.carouselPagination.classList.remove(s),
        this.options.showScrollbar && this.slider.scrollbar.el.classList.remove(s)
    }
    append(s) {
        s && (this.slider.appendSlide(s),
        this.selectors.slides = Array.from(this.selectors.firstSlide.parentElement.children),
        h.emit("registry.registerChildren", this.element),
        this.updateSlider())
    }
    updateArrowsVisibility() {
        this.selectors.parentSlide && !this.selectors.parentSlide.classList.contains(this.classes.visible) && (this.slider.navigation.nextEl.setAttribute("tabindex", "-1"),
        this.slider.navigation.nextEl.setAttribute("data-js-original-tabindex", "0"),
        this.slider.navigation.prevEl.setAttribute("tabindex", "-1"),
        this.slider.navigation.prevEl.setAttribute("data-js-original-tabindex", "0")),
        this.slider && this.slider.navigation && (this.slider.params.showArrows && this.slider.enabled ? (this.showElement(this.slider.navigation.nextEl, !0),
        this.showElement(this.slider.navigation.prevEl, !0)) : (this.hideElement(this.slider.navigation.nextEl, !0),
        this.hideElement(this.slider.navigation.prevEl, !0)))
    }
    updateVerticalSlider() {
        this.slider.enabled && this.getSlidesHeight(this.selectors.slides) <= this.selectors.carousel.offsetHeight ? (this.slider.slideTo(0, 0),
        this.disableCarousel()) : !this.slider.enabled && this.getSlidesHeight(this.selectors.slides) > this.selectors.carousel.offsetHeight && this.enableCarousel(),
        "auto" === this.slider.params.slidesPerView && this.slider.slides.css("height", "")
    }
    updateHorizontalSlider() {
        this.slider.enabled && !this.options.loop && this.getSlidesWidth(this.selectors.slides) <= this.selectors.carousel.offsetWidth ? (this.slider.slideTo(0, 0),
        this.disableCarousel()) : !this.slider.enabled && this.getSlidesWidth(this.selectors.slides) > this.selectors.carousel.offsetWidth && this.enableCarousel(),
        "auto" === this.slider.params.slidesPerView && this.slider.slides.css("width", "")
    }
    getSlidesHeight(s) {
        let t = 0
          , e = 0;
        return s.forEach(s => {
            const i = s.getBoundingClientRect();
            0 !== i.height && (e += 1,
            t += i.height)
        }
        ),
        s[0].style.marginBottom && (t += parseInt(s[0].style.marginBottom, 10) * (e - 1)),
        Math.round(t)
    }
    getSlidesWidth(s) {
        let t = 0
          , e = 0;
        return s.forEach(s => {
            const i = s.getBoundingClientRect();
            0 !== i.width && (e += 1,
            t += i.width)
        }
        ),
        s[0].style.marginRight && (t += parseInt(s[0].style.marginRight, 10) * (e - 1)),
        Math.round(t)
    }
    getCarouselOptions() {
        const s = {
            slidesPerView: this.options.slidesPerView,
            spaceBetween: this.options.spaceBetween,
            containerOffset: this.options.containerOffset,
            centerInsufficientSlides: this.options.centerSlides,
            centeredSlides: this.options.centerActiveSlide,
            loop: this.options.loop,
            showPagination: this.options.showPagination,
            showScrollbar: this.options.showScrollbar,
            showArrows: this.options.showArrows,
            arrowsOutsideContainer: this.options.arrowsOutsideContainer,
            direction: this.options.direction,
            initialSlide: this.options.initialSlide,
            loopAdditionalSlides: this.options.loopAdditionalSlides,
            autoplay: this.options.autoplay,
            preloadImages: !1,
            freeMode: this.options.freeMode,
            freeModeMomentum: !1,
            watchSlidesProgress: !0,
            watchSlidesVisibility: !0,
            isExpanded: this.options.isExpanded,
            touchStartPreventDefault: this.options.touchStartPreventDefault,
            nested: this.options.nested,
            lazy: this.options.lazy,
            containerModifierClass: "m-",
            slideClass: this.options.classNames.carouselItem,
            wrapperClass: this.options.classNames.wrapper,
            slideActiveClass: "m-active",
            slideNextClass: "m-next",
            slidePrevClass: "m-prev",
            slideDuplicateClass: "m-duplicate",
            slideDuplicateNextClass: "m-duplicate-next",
            slideDuplicatePrevClass: "m-duplicate-prev",
            slideDuplicateActiveClass: "m-duplicate-active",
            slideVisibleClass: this.classes.visible,
            threshold: 1,
            on: {
                init: this.onCarouselInit.bind(this),
                resize: this.onSliderResize.bind(this),
                slideChangeTransitionEnd: this.onSlideChangeTransitionEnd.bind(this),
                slideChange: this.onSlideChange.bind(this),
                sliderMove: this.onSliderMove.bind(this),
                paginationRender: this.onPaginationRender.bind(this),
                slideResetTransitionEnd: this.onSlideResetTransitionEnd.bind(this)
            },
            a11y: {
                notificationClass: "c-carousel__notification",
                paginationBulletMessage: `${this.options.bulletMessage} {{index}}`,
                slideLabelMessage: this.options.a11y.slideLabelMessage,
                prevSlideMessage: this.options.a11y.prevSlideMessage,
                nextSlideMessage: this.options.a11y.nextSlideMessage
            }
        };
        return this.options.breakpoints && (s.breakpoints = this.options.breakpoints),
        s.showPagination && (s.pagination = this.getPaginationOptions()),
        s.showScrollbar && (s.scrollbar = {
            el: `.${this.options.classNames.scrollbar}`,
            hide: !1,
            dragSize: "auto",
            draggable: !0,
            lockClass: "m-lock",
            dragClass: "c-carousel__scrollbar-drag"
        }),
        this.options.mouseWheel && (s.mousewheel = {
            forceToAxis: !0,
            invert: !0
        }),
        this.options.autoplay && !this.options.autoplay.delay && (s.autoplay = {
            delay: this.options.autoplayDelay
        }),
        void 0 === this.options.nested && this.selectors.parentSlide && (s.nested = !0),
        s.navigation = {
            nextEl: `.${this.options.classNames.nextArrow}`,
            prevEl: `.${this.options.classNames.prevArrow}`,
            disabledClass: "m-disabled",
            hiddenClass: "h-hidden"
        },
        s.navigation = this.setUniqueArrows(s.navigation),
        s.lazy && (s.lazy = {
            elementClass: this.options.classNames.lazy,
            loadedClass: this.options.classNames.lazyLoaded,
            loadingClass: this.options.classNames.lazyLoading,
            preloaderClass: this.options.classNames.lazyPreloader,
            loadPrevNext: this.options.loadPrevNext,
            loadPrevNextAmount: this.options.loadPrevNextAmount
        }),
        s.modules = [i, a, l, o, r],
        s
    }
    getPaginationOptions() {
        return {
            el: `.${this.options.classNames.paginationList}`,
            type: "custom",
            renderCustom(s, t, e) {
                let i = "";
                for (let s = 0; s < e; s++) {
                    const e = t === s + 1;
                    i += e ? `<li class="c-carousel__pagination-list-item"><button class="${this.bulletClass} ${this.currentClass} ${this.bulletActiveClass} ${this.clickableClass}" aria-current="${e}" aria-disabled="true" aria-label="${this.bulletMessage} ${s + 1}" data-slideto="${s}"></button></li>` : `<li class="c-carousel__pagination-list-item"><button class="${this.bulletClass} ${this.clickableClass}" aria-label="${this.bulletMessage} ${s + 1}" data-slideto="${s}"></button></li>`
                }
                return i
            },
            clickable: !0,
            bulletClass: this.options.customPagination ? this.options.classNames.bulletCustom : this.options.classNames.bullet,
            bulletActiveClass: "m-active",
            bulletMessage: this.options.bulletMessage,
            modifierClass: "m-",
            currentClass: "m-current",
            totalClass: "m-total",
            hiddenClass: "h-hidden",
            clickableClass: "m-clickable"
        }
    }
    setUniqueArrows(s) {
        return this.element.querySelector(s.nextEl).classList.add(`m-${this.id}`),
        this.element.querySelector(s.prevEl).classList.add(`m-${this.id}`),
        s.nextEl += `.m-${this.id}`,
        s.prevEl += `.m-${this.id}`,
        s
    }
    setOffsetSlider() {
        if (this.options.containerOffset) {
            const s = -1 * this.options.containerOffset + "px"
              , t = `${this.options.containerOffset}px`;
            this.selectors.carousel.style.marginLeft = s,
            this.selectors.carousel.style.marginRight = s,
            this.selectors.carousel.style.paddingLeft = t,
            this.selectors.carousel.style.paddingRight = t
        }
    }
    onCarouselInit() {
        this.element.classList.add(this.classes.ready),
        this.element.classList.remove(this.classes.unready),
        this.options.zoomInActiveSlide && this.element.classList.add(this.classes.animated),
        h.emit("carousel.init", this.element)
    }
    onSliderResize() {
        this.slider && this.updateSlider()
    }
    onSlideChangeTransitionEnd() {
        this.updateSlidesOnTransition()
    }
    updateSlidesOnTransition() {
        if (this.slider) {
            if (this.options.loop) {
                const s = this.element.querySelectorAll(".c-carousel__item.m-visible:not(.m-initialized)");
                s && s.forEach(s => {
                    s.classList.add("m-initialized"),
                    this.setDuplicateSlideState(s),
                    h.emit("registry.registerChildren", s)
                }
                ),
                this.state.isSlideChangeTransitionEnd || setTimeout(this.updateSlider.bind(this), 0)
            }
            this.state.isAutoplayEnabled || this.setSearchAria(),
            !this.state.isSlideChangeTransitionEnd && this.options.loop || this.updateAccessibility(),
            this.state.isSlideChangeTransitionEnd = !0
        }
    }
    onSlideChange() {
        this.slider && (this.playSlideVideo(),
        this.handleBackgroundUpdates(),
        this.options.loop || (this.slider.isBeginning ? this.slider.navigation.prevEl.blur() : this.slider.isEnd && this.slider.navigation.nextEl.blur()),
        this.options.trackSwipe && this.slider.swipeDirection && this.swipeSlide(),
        u("carousel.slidechanged", this.element, {
            index: this.slider.realIndex,
            bubbles: !0
        }))
    }
    handleBackgroundUpdates() {
        this.options.sliderWithBackground && (this.updateCarouselBackground(),
        this.updateCarouselBackgroundImage())
    }
    onSliderMove() {
        this.state.isAutoplayEnabled = !1,
        this.stopAutoplay()
    }
    updateAccessibility() {
        if (this.slider.pagination && this.slider.pagination.bullets) {
            const s = this.slider.pagination.bullets[this.slider.previousIndex]
              , t = this.slider.pagination.bullets[this.slider.activeIndex];
            s && (s.removeAttribute("aria-current"),
            s.removeAttribute("aria-disabled")),
            t && (t.setAttribute("aria-current", "true"),
            t.setAttribute("aria-disabled", "true"))
        }
        this.selectors.parentSlide && !this.selectors.parentSlide.classList.contains(this.classes.visible) || Array.from(this.slider.slides).forEach(t => {
            t.classList.contains(this.classes.visible) || this.state.expanded ? this.showElement(t, !1) : this.hideElement(t, !1),
            t.querySelectorAll('[data-component="global/Carousel"]').forEach(t => {
                s.afterRegistered(t).then( () => {
                    u("carousel.update", t)
                }
                )
            }
            )
        }
        )
    }
    updateLazyLoad() {
        Array.from(this.slider.slides).forEach( (s, t) => {
            const e = s.querySelector(`.${this.options.classNames.lazy}`)
              , i = document.createElement("div");
            i.className = `c-loader ${this.options.classNames.lazyPreloader}`,
            this.options.forceLoadFirstImage && 0 === t || !e || e.classList.contains(this.options.classNames.lazyLoaded) || s.appendChild(i)
        }
        )
    }
    setDuplicateSlideState(s) {
        s.firstElementChild && s.firstElementChild.setAttribute("data-is-duplicate", !0)
    }
    setSlidesIndex() {
        Array.from(this.slider.slides).forEach( (s, t, e) => {
            if (s.firstElementChild && s.firstElementChild.setAttribute("data-index", s.getAttribute("data-swiper-slide-index") || t),
            !s.hasAttribute("aria-label")) {
                const i = this.options.a11y.carouselItemAriaLabel.replace("{0}", t + 1).replace("{1}", e.length);
                s.setAttribute("aria-label", i)
            }
            s.hasAttribute("data-index") || s.setAttribute("data-index", t)
        }
        )
    }
    onScrollTo(s) {
        const {index: t} = s.detail;
        this.goTo(t, s.detail.speed)
    }
    onMediaQueryChange() {
        this.slider && (this.unbindSliderEvents(),
        this.slider.destroy(!1, !0),
        this.initState(),
        this.afterInit())
    }
    getCurrentSlide() {
        const s = this.slider.slides[this.slider.activeIndex];
        return {
            index: this.slider.activeIndex,
            slide: s,
            isVideo: !!s && s.hasAttribute("data-video")
        }
    }
    getAnalyticsData(s) {
        let t;
        if (!s)
            return t;
        const e = s.getAttribute("data-analytics");
        if (e)
            try {
                t = JSON.parse(e)
            } catch (t) {
                window.lora.debug && console.error(`Please check that the data-analytics you have passed for "${s}" respect JSON format`)
            }
        return t
    }
    disableCarousel() {
        this.slider.detachEvents(),
        this.slider.enabled = !1,
        this.element.classList.add(this.classes.disabled),
        this.element.removeAttribute("aria-roledescription"),
        this.slider.wrapperEl.classList.add(this.classes.disabled),
        Array.from(this.slider.slides).forEach(s => {
            s.removeAttribute("aria-roledescription"),
            s.removeAttribute("role")
        }
        ),
        this.options.showPagination && this.hideElement(this.slider.pagination.el, !0),
        this.options.showScrollbar && this.hideElement(this.slider.scrollbar.el, !0)
    }
    enableCarousel() {
        this.slider.attachEvents(),
        this.slider.enabled = !0,
        this.element.classList.remove(this.classes.disabled),
        this.element.setAttribute("aria-roledescription", "carousel"),
        this.slider.wrapperEl.classList.remove(this.classes.disabled),
        Array.from(this.slider.slides).forEach(s => {
            s.setAttribute("aria-roledescription", "slide"),
            s.setAttribute("role", "group")
        }
        ),
        this.options.showPagination && this.showElement(this.slider.pagination.el, !0),
        this.options.showScrollbar && this.showElement(this.slider.scrollbar.el, !0)
    }
    startAutoplay() {
        this.selectors.carouselAutoplay && (this.selectors.carouselAutoplay.classList.remove("m-active"),
        this.selectors.carouselAutoplay.setAttribute("aria-label", this.options.a11y.autoplayAriaLabelStop)),
        this.slider.autoplay.start()
    }
    stopAutoplay() {
        this.selectors.carouselAutoplay && (this.selectors.carouselAutoplay.classList.add("m-active"),
        this.selectors.carouselAutoplay.setAttribute("aria-label", this.options.a11y.autoplayAriaLabelPlay)),
        this.slider.autoplay.stop()
    }
    next() {
        this.slider.slideNext()
    }
    previous() {
        this.slider.slidePrev()
    }
    reset() {
        this.options.loop ? this.slider.slideToLoop(0) : this.slider.slideTo(0)
    }
    goTo(s, t) {
        "number" != typeof s || this.state.expanded || (this.options.loop ? this.slider.slideToLoop(s, t) : this.slider.slideTo(s, t))
    }
    playSlideVideo() {
        if (!this.state.hasVideos)
            return;
        this.state.currentVideo && u("video.player.pause", this.state.currentVideo);
        const s = this.getCurrentSlide();
        this.state.currentVideo = s.slide && s.slide.querySelector("[data-js-video-container]"),
        s.isVideo && u("video.player.play", this.state.currentVideo, {
            time: 0
        })
    }
    hideElement(s, t) {
        if (s && s instanceof HTMLElement) {
            t ? s.classList.add(this.classes.hidden) : s.setAttribute("aria-hidden", "true"),
            s.dataset.jsCarouselItemVisible = !1;
            super.getFocusableElements(s, !0, !0).forEach(s => {
                s.hasAttribute("tabindex") && "-1" !== s.getAttribute("tabindex") && s.setAttribute("data-js-original-tabindex", s.getAttribute("tabindex")),
                s.setAttribute("tabindex", "-1")
            }
            )
        }
    }
    showElement(s, t) {
        if (s && s instanceof HTMLElement) {
            t ? s.classList.remove(this.classes.hidden) : s.removeAttribute("aria-hidden"),
            s.dataset.jsCarouselItemVisible = !0;
            super.getFocusableElements(s, !0, !0).forEach(s => {
                const t = s.closest("[data-js-carousel-item]");
                t && !t.classList.contains(this.classes.visible) || "-1" !== s.getAttribute("tabindex") || s.getAttribute("disabled") || (s.hasAttribute("data-js-original-tabindex") ? s.setAttribute("tabindex", s.getAttribute("data-js-original-tabindex")) : s.removeAttribute("tabindex"))
            }
            )
        }
    }
    unbindSliderEvents() {
        this.slider.params.showArrows && (this.slider.navigation.nextEl && (p("click", this.slider.navigation.nextEl, this.onNextArrowClick.bind(this)),
        p("mousemove pointermove touchmove", this.slider.navigation.nextEl)),
        this.slider.navigation.prevEl && (p("click", this.slider.navigation.prevEl, this.onPrevArrowClick.bind(this)),
        p("mousemove pointermove touchmove", this.slider.navigation.prevEl))),
        this.slider.params.showPagination && this.slider.pagination.el && (p("click", this.slider.pagination.el),
        p("mousemove pointermove touchmove", this.slider.pagination.el)),
        this.options.autoplay && this.selectors.carouselAutoplay && p("click", this.selectors.carouselAutoplay)
    }
    destroy() {
        this.slider && (this.unbindSliderEvents(),
        this.slider.destroy(),
        this.slider = null),
        this.options.isDynamicContent && this.state.mutationObserver.disconnect(),
        p(this.element)
    }
}
export {A as default};
