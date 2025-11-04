import { Event } from 'services/EventEmitter';
import SlidingPanel from 'components/global/SlidingPanel';
import { deepMerge } from 'toolbox/deepMerge';
import { on, off } from 'toolbox/event';
import { mediaQuery } from 'toolbox/mediaQuery';
import { getData } from 'services/DataLayer';

/**
 * This is a description of the MiniCart constructor function.
 * @class
 * @classdesc This is a description of the MiniCart class.
 * @extends SlidingPanel
 */
export default class MiniCart extends SlidingPanel {
    /**
     * Constructor of the class that mainly merge the options of the components
     *
     * @param {HTMLElement} element HTMLElement of the component
     * @param {Object} options That belongs to the component
     */
    constructor(element, options = {}) {
        super(element, deepMerge({
            showOnProductAdded: true,
            showBreakpoint: 'xlarge',
            skipMiniCartOnClick: false,
            confirmationModal: {
                keepOverlayOpened: true,
            },
            url: {},
            pagesExcluded: ['cart'],
            classNames: {
                overlaid: 'm-overlaid',
            },
            isMediaChange: true,
        }, options));
    }

    /**
     * Init the different state of the component
     * It helps to avoid heavy DOM manipulation
     */
    initState() {
        super.initState();
        this.state.isOverlaid = false;
        // Check if the minicart works as a link to Cart page
        // true - the click/tap redirects a user to cart page
        // false - the click/tap opens the minicart
        this.state.isLink = !mediaQuery.is(this.options.showBreakpoint) || this.options.skipMiniCartOnClick;
    }

    /**
     * Should contain only event listeners and nothing else
     * All the event handlers should be into a separated function. No usage of anonymous function
     */
    bindEvents() {
        super.bindEvents();
        on('minicart.submit.success', this.selectors.content, this.onMiniCartSubmitSuccess.bind(this));
        Event.on('cart.product.added', this.onProductAdded, this);
        Event.on('minicart.show', this.onMiniCartShow, this);
        Event.on('minicart.update', this.onMiniCartUpdate, this);
        Event.on('modal.open.before', this.onModalOpen, this);
        Event.on('modal.close.after', this.onModalClose, this);
    }

    /**
     * After init
     * Run any script after the component is fully initialized
     */
    afterInit() {
        super.afterInit();

        this.updateButtonRole();
    }

    /**
     * Update state if breakpoint is changed
     */
    onMediaQueryChange() {
        this.state.isLink = !mediaQuery.is(this.options.showBreakpoint) || this.options.skipMiniCartOnClick;
        this.updateButtonRole();
        Event.emit('carticon.update');
    }

    /**
     * Minicart submit success callback
     * @param {Object} event Event object
     */
    onMiniCartSubmitSuccess(event) {
        const content = event.detail && event.detail.content;

        if (!content) {
            return;
        }

        if (typeof content === 'string') {
            this.setContent(content);
            this.hide();
            Event.emit('overlay.close');
        }
    }

    /**
     * Products added event handler
     *
     * @param {Object} e Event object
     */
    onProductAdded(e) {
        if (e.showMiniCart && this.options.showOnProductAdded && mediaQuery.is(this.options.showBreakpoint)) {
            // show mini cart if required after product is added to basket
            this.show();
        } else if (this.state.isActive) {
            // update mini cart if it is opened
            this.loadContent();
        }
    }

    /**
     * Mini Cart Update event handler
     */
    onMiniCartUpdate() {
        if (this.state.isActive) {
            // update mini cart if it is opened
            this.loadContent();
        }
    }

    /**
     * Mini Cart Open event handler
     */
    onMiniCartShow() {
        if (this.state.isActive || !mediaQuery.is(this.options.showBreakpoint)) {
            return;
        }

        this.show();
    }

    /**
     * Trigger click event handler
     * @param {Object} event Event object
     */
    onTriggerClick(event) {
        if (this.options.pagesExcluded.indexOf(getData().page.id) !== -1) {
            event.preventDefault();
            return;
        }

        if (this.state.isLink) {
            window.location.href = this.options.url.cart;
        } else {
            Event.emit('simplesearch.close');
            this.togglePanel();
        }

        setTimeout(() => {
            Event.emit('analytics.event', {
                category: 'header',
                action: 'select',
                label: 'cart',
                extraData: {
                    event_name: 'header_click',
                    cta_name: 'cart',
                },
            });
        }, 0);
    }

    /**
     * Modal open event handler
     */
    onModalOpen() {
        if (!this.state.isActive) {
            return;
        }

        this.state.isOverlaid = true;
        this.selectors.target.classList.add(this.options.classNames.overlaid);
    }

    /**
     * Modal close event handler
     */
    onModalClose() {
        if (!this.state.isActive) {
            return;
        }

        if (this.state.isOverlaid) {
            Event.emit('page.scroll.disabled', true);
        }
        this.state.isOverlaid = false;
        this.selectors.target.classList.remove(this.options.classNames.overlaid);
    }

    /**
     * Before overlay close event handler
     */
    onBeforeOverlayClose() {
        if (this.state.isOverlaid) {
            return;
        }

        super.onBeforeOverlayClose();
    }

    /**
     * Update button attributes based on the click action (redirect to cart or minicart open)
     */
    updateButtonRole() {
        if (this.state.isLink) {
            this.element.dataset.jsButtonRole = 'link';
        } else {
            this.element.dataset.jsButtonRole = 'button';
        }
    }

    /**
     * Show panel
     * @param {Object} options options
     */
    show(options) {
        Event.emit('remindertooltip.hidetooltip');
        super.show(options);
    }

    /**
     * Destroy is called automatically after the component is being removed from the DOM
     * You must always destroy the listeners attached to an element to avoid any memory leaks
     */
    destroy() {
        super.destroy();
        off('minicart.submit.success', this.selectors.content);
        Event.removeListener('cart.product.added', this.onProductAdded, this);
        Event.removeListener('minicart.show', this.onMiniCartShow, this);
        Event.removeListener('modal.open.before', this.onModalOpen, this);
        Event.removeListener('modal.close.after', this.onModalClose, this);
    }
}
