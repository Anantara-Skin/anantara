(function (System, SystemJS) {
  "use strict";
  System.register(
    [
      "toolbox/ajax",
      "toolbox/mediaQuery",
      "components//dist/javascripts/components/global/AbstractField.js",
      "toolbox/event",
      "services/EventEmitter",
      "toolbox/deepMerge",
      "toolbox/queryString",
      "core/mixwith",
      "mixins/Loader",
      "mixins/Accessibility",
      "toolbox/object",
    ],
    function (a) {
      "use strict";
      var b, c, d, e, f, g, h, i, j, k, l, m, n, o;
      return (
        a("default", void 0),
        {
          setters: [
            function (a) {
              b = a.ajax;
            },
            function (a) {
              c = a.mediaQuery;
            },
            function (a) {
              d = a.default;
            },
            function (a) {
              (e = a.on), (f = a.off), (g = a.trigger);
            },
            function (a) {
              h = a.Event;
            },
            function (a) {
              i = a.deepMerge;
            },
            function (a) {
              j = a.appendUrl;
            },
            function (a) {
              k = a.mix;
            },
            function (a) {
              l = a.default;
            },
            function (a) {
              m = a.default;
            },
            function (a) {
              n = a.tryParseJSON;
            },
          ],
          execute: function () {
            a(
              "default",
              (o = class extends k(d).with(m, l) {
                constructor(a) {
                  let b =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  super(
                    a,
                    i(
                      {
                        native: !0,
                        container: !1,
                        closeOnSelect: !0,
                        redirectUrl: !1,
                        redirectNewTab: !1,
                        trigger: "click",
                        position: "bottom-start",
                        autoPositionPanel: !0,
                        useIcon: !1,
                        filter: !1,
                        closeTimeout: 200,
                        scrollIntoView: { block: "nearest" },
                        a11y: {
                          filterLabel: "",
                          filterButtonLabel: "",
                          filterResult: "",
                          filterResults: "",
                          filterNoResults: "",
                        },
                        classNames: {
                          container: null,
                          opened: "m-opened",
                          disabled: "m-disabled",
                          inactive: "m-inactive",
                          active: "m-active",
                          hidden: "h-hidden",
                          focus: "m-focus",
                          hover: "m-hover",
                          selected: "m-selected",
                          srOnly: "h-show-for-sr",
                          panel: "c-select__panel",
                          list: "c-select__panel-list",
                          listItem: "c-select__panel-item",
                          placeholder: "c-select__placeholder",
                          label: "c-select__label",
                          hasDescription: "m-rows-2",
                          text: "c-select__text",
                          description: "c-select__description",
                          badge: "c-select__badge",
                          badgeImage: "c-select__badge-image",
                          textWithDescription: "c-select__description-wrapper",
                          iconState: "m-icon",
                          icon: ["c-select__icon"],
                        },
                        optionsMap: {},
                        optionsMapUrl: null,
                        selectFirstOptionOnReset: !0,
                        _resizable: !0,
                        trackFocusedElements: !0,
                        triggerDependencyOnInit: !1,
                        preventDisabledSelection: !1,
                      },
                      b,
                    ),
                  );
                }
                initCache() {
                  this.wrapField(),
                    super.initCache(),
                    (this.classes.filterPanel = "c-select__filter"),
                    (this.classes.filterInput = "c-select__filter-field"),
                    (this.classes.filterButton = "c-select__filter-button"),
                    (this.classes.filterNoResults = "c-select__filter-result"),
                    (this.selectors.container = this.options.container
                      ? document.querySelector(this.options.container)
                      : this.element),
                    this.checkNative(),
                    this.state.native || this.initCustomSelectCache();
                }
                initCustomSelectCache() {
                  (this.selectors.currentLabel = this.element.querySelector(
                    ".".concat(this.options.classNames.label),
                  )),
                    (this.selectors.currentPanelItem = null),
                    (this.selectors.selectOptions =
                      this.field.querySelectorAll("option")),
                    (this.state.filter =
                      !!(1 < this.selectors.selectOptions.length) &&
                      this.options.filter),
                    (this.selectors.panel = this.createCustomPanel()),
                    (this.selectors.placeholder = this.createPlaceholder()),
                    this.selectors.panel &&
                      ((this.selectors.list =
                        this.selectors.panel.querySelector(
                          ".".concat(this.options.classNames.list),
                        )),
                      (this.selectors.listItem =
                        this.selectors.panel.querySelectorAll(
                          ".".concat(this.options.classNames.listItem),
                        )),
                      (this.state.filteredItems =
                        this.selectors.listItem || []));
                }
                initState() {
                  (this.state.defaultOption = {
                    index: this.field.selectedIndex,
                    value: this.field.value,
                  }),
                    (this.state.selectedOption = this.state.defaultOption),
                    (this.state.autoPosition = null),
                    (this.state.isOpened = !1),
                    (this.state.isPreventChange = !1),
                    (this.state.hasInit = !0),
                    this.state.native ||
                      (this.state.filteredItems =
                        this.selectors.listItem || []),
                    (this.state.optionsMap = this.options.optionsMap),
                    (this.state.fieldState = null);
                }
                loadOptionsMap(a) {
                  this.disable(), this.addLoader(this.element);
                  let c = this.options.optionsMapUrl;
                  return (
                    a && (c = j(c, { master: a })),
                    b(c)
                      .then(this.onOptionsMapLoaded.bind(this, a))
                      .catch(this.onOptionsMapFailed.bind(this, a))
                  );
                }
                onOptionsMapLoaded(a, b) {
                  a
                    ? (this.state.optionsMap[a] = b[a])
                    : (this.state.optionsMap = b);
                  const c = this.state.optionsMap[a];
                  c && this.updateOptions(c),
                    this.enable(),
                    this.removeLoader(this.element),
                    this.setValueAfterLoad();
                }
                setValueAfterLoad() {
                  const a = this.element.getAttribute("data-lazyfield-value");
                  a && (this.setValue(a), this.field.focus());
                }
                onOptionsMapFailed(a) {
                  console.log(
                    "Error during loading select options: ".concat(a),
                  );
                }
                wrapField() {
                  const a = document.createElement("div"),
                    b = this.element.querySelector("select"),
                    c = document.activeElement === b;
                  a.classList.add("c-select__container"),
                    b &&
                      (b.parentElement.insertBefore(a, b),
                      a.appendChild(b),
                      (this.selectors.fieldWrapper = a),
                      c && b.focus());
                }
                bindEvents() {
                  super.bindEvents(),
                    e(
                      "change.".concat(this.id),
                      this.field,
                      this.onChange.bind(this),
                    ),
                    this.state.native
                      ? e(
                          "keydown",
                          this.field,
                          this.onNativeSelectItemKeyDown.bind(this),
                          !1,
                        )
                      : this.bindCustomSelectEvents();
                }
                customOptionsUpdate(a) {
                  const b = this.selectors.placeholder;
                  return a
                    ? void this.selectors.listItem.forEach((c) => {
                        a.includes(c.dataset.value)
                          ? c.classList.remove(this.options.classNames.hidden)
                          : c.classList.add(this.options.classNames.hidden),
                          c.dataset.value === a[0] &&
                            (this.selectItem(b, c),
                            this.setSelectedIndex(
                              c.getAttribute("data-index"),
                            ));
                      })
                    : (this.selectors.listItem.forEach((a) => {
                        a.classList.remove(this.options.classNames.hidden);
                      }),
                      this.selectItem(b, this.selectors.listItem[0]),
                      void this.setSelectedIndex(
                        this.selectors.listItem[0].getAttribute("data-index"),
                      ));
                }
                triggerStateEvents(a) {
                  const b = this.field.value;
                  let c = !1;
                  null === this.state.fieldState &&
                    ((this.state.fieldState = b),
                    (c = this.options.triggerDependencyOnInit));
                  const d = a && a.detail && a.detail.action;
                  (b !== this.state.fieldState ||
                    "triggerStateEvents" === d ||
                    c) &&
                    ((this.state.fieldState = b),
                    ["selected", "selected#".concat(b)].forEach((a) => {
                      a in this.options.stateDependencies &&
                        g("field.dependency.state.changed", this.field, {
                          bubbles: !0,
                          dependentActions: this.options.stateDependencies[a],
                          masterField: this.field,
                          data: { isOnInit: c },
                        });
                    }));
                }
                redirect(a, b) {
                  if (a) {
                    const c = b ? "_blank" : "_self";
                    window.open(a, c);
                  }
                }
                onChange(a) {
                  if (this.state.isPreventChange)
                    return void a.stopPropagation();
                  const { selectedIndex: b, value: c } = a.currentTarget;
                  if (
                    ((this.state.selectedOption = { index: b, value: c }),
                    this.saveLastFocusState(),
                    !this.state.native)
                  ) {
                    const a = this.selectors.panel.querySelector(
                        '[data-value="'.concat(c, '"]'),
                      ),
                      b = this.selectors.placeholder;
                    this.state.filter && this.clearFilter(),
                      a &&
                        (this.selectItem(b, a),
                        b.setAttribute("aria-expanded", "false")),
                      this.initFieldState(),
                      (this.selectors.selectedPanelItem = a),
                      (this.currentItemIndex = a
                        ? +a.getAttribute("data-index")
                        : 0),
                      this.options.useIcon &&
                        (this.isDisabledItem(a)
                          ? this.disableItem(b)
                          : this.enableItem(b));
                  }
                  if (
                    (c &&
                      0 < c.length &&
                      this.options.redirectUrl &&
                      !this.state.isPreventChange &&
                      this.redirect(c, this.options.redirectNewTab),
                    this.analytics && this.analytics.placement)
                  ) {
                    const b =
                        a.currentTarget.selectedOptions[0].innerText.toLowerCase(),
                      c = {
                        category: this.analytics.placement,
                        action:
                          (this.analytics.action &&
                            this.analytics.action.replace(
                              "{selectedValue}",
                              b,
                            )) ||
                          "select",
                        label:
                          this.analytics.label ||
                          (this.analytics.labelHeading
                            ? ""
                                .concat(this.analytics.labelHeading, "::")
                                .concat(b)
                            : b),
                      };
                    this.analytics.ecommerce &&
                      (c.ecommerce = this.analytics.ecommerce),
                      this.analytics.eventType &&
                        (c.eventType = this.analytics.eventType),
                      this.analytics.event && (c.event = this.analytics.event),
                      this.analytics.extraData &&
                        ((c.extraData = {}),
                        Object.keys(this.analytics.extraData).forEach((a) => {
                          c.extraData[a] = this.analytics.extraData[a].replace(
                            "{selectedValue}",
                            b,
                          );
                        })),
                      h.emit("analytics.event", c);
                  }
                }
                selectItem(a, b) {
                  this.selectPanelItem(b),
                    b.setAttribute("aria-selected", !0),
                    this.selectors.selectedPanelItem.setAttribute(
                      "aria-selected",
                      !1,
                    ),
                    (a.innerHTML = b.innerHTML),
                    this.setPlaceholderText(b, a);
                }
                setPlaceholderText(a, b) {
                  const c = b.querySelector(
                    ".".concat(this.options.classNames.text),
                  );
                  if (a.getAttribute("aria-label") && c)
                    if ("" === c.innerHTML)
                      c.classList.add(this.options.classNames.srOnly),
                        (c.innerHTML = a.getAttribute("aria-label"));
                    else {
                      const d = document.createElement("span");
                      c.setAttribute("aria-hidden", !0),
                        d.classList.add(this.options.classNames.srOnly),
                        (d.innerHTML = a.getAttribute("aria-label")),
                        b.appendChild(d);
                    }
                }
                updateValue(a) {
                  const b =
                    a.detail &&
                    a.detail.masterField &&
                    a.detail.masterField.value;
                  if (
                    this.options.optionsMapUrl &&
                    b &&
                    !this.state.optionsMap[b]
                  )
                    this.loadOptionsMap(b);
                  else {
                    const c = this.state.optionsMap[b];
                    c &&
                      (this.updateOptions(c),
                      a.detail &&
                        a.detail.data &&
                        a.detail.data.isOnInit &&
                        0 !== this.state.defaultOption.index &&
                        this.setSelectedIndex(
                          this.state.defaultOption.index,
                          !0,
                        ));
                  }
                }
                updateOptions() {
                  let a =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  (this.field.innerHTML = ""),
                    Array.isArray(a) ||
                      (a = Object.keys(a).map((b) => ({
                        val: b,
                        label: a[b],
                      }))),
                    a.forEach((a) => {
                      const b = document.createElement("option");
                      (b.text = a.label),
                        (b.value = a.val),
                        a.tagAttributes &&
                          Object.keys(a.tagAttributes).forEach((c) => {
                            b.setAttribute(c, a.tagAttributes[c]);
                          }),
                        this.field.add(b),
                        a.selected && (this.field.value = a.val);
                    }),
                    (this.selectors.selectOptions =
                      this.field.querySelectorAll("option")),
                    this.state.native ||
                      (this.destroyCustomSelect(),
                      this.initCustomSelectCache(),
                      this.bindCustomSelectEvents());
                }
                bindCustomSelectEvents() {
                  e(
                    "click",
                    this.selectors.panel,
                    this.onPanelClick.bind(this),
                  ),
                    e(
                      "keydown",
                      this.element,
                      this.onSelectItemKeyDown.bind(this),
                      !1,
                    ),
                    this.options.container &&
                      this.selectors.panel &&
                      e(
                        "keydown",
                        this.selectors.panel,
                        this.onSelectItemKeyDown.bind(this),
                        !1,
                      ),
                    e(
                      "click",
                      this.selectors.placeholder,
                      this.onKeyTogglePanel.bind(this),
                    ),
                    this.state.filter &&
                      (e(
                        "input",
                        this.selectors.filterInput,
                        this.onFilterChange.bind(this),
                      ),
                      e(
                        "click",
                        this.selectors.filterButton,
                        this.onClearFilter.bind(this),
                      )),
                    e("mousedown.".concat(this.id), this.field, (a) => {
                      a.preventDefault(),
                        "click" === this.options.trigger &&
                          (this.element.focus(), this.togglePanel());
                    }),
                    "click" === this.options.trigger
                      ? (e("click.".concat(this.id), document, (a) => {
                          this.state.isOpened &&
                            !this.element.contains(a.target) &&
                            (this.closePanel(),
                            this.selectors.placeholder.setAttribute(
                              "aria-expanded",
                              "false",
                            ));
                        }),
                        e(
                          "mouseenter.".concat(this.id),
                          this.field,
                          this.onMouseEnter.bind(this),
                        ),
                        e(
                          "mouseleave.".concat(this.id),
                          this.field,
                          this.onMouseLeave.bind(this),
                        ))
                      : "hover" === this.options.trigger
                        ? (e(
                            "mouseenter.".concat(this.id),
                            this.element,
                            this.onSelectHover.bind(this),
                          ),
                          e(
                            "mouseleave.".concat(this.id),
                            this.element,
                            this.onSelectLeave.bind(this),
                          ))
                        : console.error(
                            "Select component trigger should be either click or hover but got --> ",
                            this.options.trigger,
                          );
                }
                unbindCustomSelectEvents() {
                  f("click keydown", this.selectors.panel),
                    f("keydown", this.element),
                    f("mousedown.".concat(this.id), this.field),
                    this.selectors.filterInput &&
                      f("input", this.selectors.filterInput),
                    this.selectors.filterButton &&
                      f("click", this.selectors.filterButton),
                    "click" === this.options.trigger
                      ? (f("click.".concat(this.id), document),
                        f("mouseenter.".concat(this.id), this.field),
                        f("mouseleave.".concat(this.id), this.field))
                      : "hover" === this.options.trigger && f(this.element),
                    this.state.autoPosition &&
                      this.state.autoPosition.destroy();
                }
                afterInit() {
                  super.afterInit(),
                    this.restoreLastFocusState(),
                    this.options.useIcon &&
                      this.element.classList.add(
                        this.options.classNames.iconState,
                      ),
                    this.state.native ||
                      this.selectors.fieldWrapper.classList.add(
                        this.options.classNames.hidden,
                      );
                  const a =
                    this.selectors.selectOptions &&
                    [...this.selectors.selectOptions].some(
                      (a) => a.dataset && a.dataset.jsDescription,
                    );
                  a &&
                    this.element.classList.add(
                      this.options.classNames.hasDescription,
                    ),
                    this.initFieldState();
                }
                checkNative() {
                  const { native: a } = this.options,
                    b =
                      ("boolean" == typeof a && a) ||
                      ("string" == typeof a && c.is(a)) ||
                      !1;
                  return (
                    this.state.hasInit &&
                      this.state.native !== b &&
                      (b
                        ? this.destroyCustomSelect()
                        : (this.initCustomSelectCache(),
                          this.bindCustomSelectEvents())),
                    (this.state.native = b),
                    b
                  );
                }
                createCustomPanel() {
                  const a = document.createElement("div"),
                    b = document.createElement("ul"),
                    c = document.createDocumentFragment(),
                    { list: d } = this.options.classNames;
                  if (
                    ([...this.selectors.selectOptions].forEach((a, b) => {
                      const d = this.createCustomOption(a, b);
                      a.selected &&
                        ((this.selectors.selectedPanelItem = d),
                        this.selectPanelItem(d),
                        d.setAttribute("aria-selected", "true"),
                        (this.currentItemIndex = b)),
                        "true" === a.dataset.jsDisabled && this.disableItem(d),
                        c.appendChild(d);
                    }),
                    b.setAttribute("tabindex", "-1"),
                    b.setAttribute("role", "listbox"),
                    b.classList.add(d),
                    b.appendChild(c),
                    b.setAttribute("id", "".concat(this.id, "-listbox")),
                    b.setAttribute(
                      "aria-labelledby",
                      "".concat(this.id, "-label"),
                    ),
                    a.classList.add(this.options.classNames.panel),
                    this.state.filter)
                  ) {
                    const b = this.createFilterForm(),
                      c = this.createFilterNoResult();
                    a.appendChild(b), a.appendChild(c);
                  }
                  return (
                    a.appendChild(b), this.selectors.container.appendChild(a), a
                  );
                }
                createFilterForm() {
                  return (
                    (this.selectors.filterPanel =
                      document.createElement("div")),
                    (this.selectors.filterInput =
                      document.createElement("input")),
                    (this.selectors.filterButton =
                      document.createElement("button")),
                    this.selectors.filterInput.setAttribute("type", "search"),
                    this.selectors.filterInput.setAttribute(
                      "autocomplete",
                      "off",
                    ),
                    this.selectors.filterInput.setAttribute(
                      "aria-label",
                      this.options.a11y.filterLabel,
                    ),
                    this.selectors.filterInput.setAttribute(
                      "placeholder",
                      this.options.a11y.filterLabel,
                    ),
                    this.selectors.filterInput.classList.add(
                      this.classes.filterInput,
                    ),
                    this.selectors.filterButton.classList.add(
                      this.classes.filterButton,
                    ),
                    this.selectors.filterButton.setAttribute(
                      "aria-hidden",
                      "true",
                    ),
                    this.selectors.filterButton.setAttribute("tabindex", "-1"),
                    this.selectors.filterButton.setAttribute(
                      "aria-label",
                      this.options.a11y.filterButtonLabel,
                    ),
                    this.selectors.filterPanel.classList.add(
                      this.classes.filterPanel,
                    ),
                    this.selectors.filterPanel.appendChild(
                      this.selectors.filterInput,
                    ),
                    this.selectors.filterPanel.appendChild(
                      this.selectors.filterButton,
                    ),
                    this.selectors.filterPanel
                  );
                }
                createFilterNoResult() {
                  return (
                    (this.selectors.filterNoResults =
                      document.createElement("div")),
                    this.selectors.filterNoResults.classList.add(
                      this.classes.filterNoResults,
                    ),
                    this.selectors.filterNoResults.classList.add(
                      this.options.classNames.srOnly,
                    ),
                    this.selectors.filterNoResults.setAttribute(
                      "aria-live",
                      "polite",
                    ),
                    this.selectors.filterNoResults.setAttribute(
                      "aria-atomic",
                      "true",
                    ),
                    this.selectors.filterNoResults
                  );
                }
                createCustomOption(a, b) {
                  const { useIcon: c, classNames: d } = this.options,
                    { listItem: e } = d,
                    f = document.createElement("li");
                  f.setAttribute("data-value", a.value),
                    f.setAttribute("data-index", b),
                    f.setAttribute("role", "option"),
                    f.setAttribute("data-js-disabled", !1),
                    f.setAttribute("aria-selected", "false"),
                    f.setAttribute(
                      "id",
                      "".concat(this.id, "-item_").concat(b),
                    ),
                    f.classList.add(e),
                    a.dataset &&
                      a.dataset.jsBucket &&
                      f.setAttribute("data-js-bucket", a.dataset.jsBucket),
                    a.hasAttribute("aria-label") &&
                      f.setAttribute(
                        "aria-label",
                        a.getAttribute("aria-label"),
                      ),
                    c &&
                      f.appendChild(
                        this.createIcon(a.getAttribute("data-icon")),
                      );
                  const g =
                      a.dataset && a.dataset.jsBadge ? a.dataset.jsBadge : null,
                    h =
                      a.dataset && a.dataset.jsDescription
                        ? a.dataset.jsDescription
                        : null;
                  if ((f.appendChild(this.createText(a.text, h)), g)) {
                    const a = this.createBadge(g);
                    f.appendChild(a);
                  }
                  return f;
                }
                createIcon(a) {
                  const b = document.createElement("span");
                  return (
                    a &&
                      (b.classList.add(...this.options.classNames.icon),
                      b.setAttribute("style", "background: ".concat(a))),
                    b
                  );
                }
                createText(a, b) {
                  const c = document.createElement("span");
                  if (
                    (c.classList.add(this.options.classNames.text),
                    (c.innerHTML = a),
                    !b)
                  )
                    return c;
                  const d = document.createElement("div");
                  if (
                    (d.classList.add(
                      this.options.classNames.textWithDescription,
                    ),
                    d.appendChild(c),
                    b)
                  ) {
                    const a = this.createDescription(b);
                    d.appendChild(a);
                  }
                  return d;
                }
                createDescription(a) {
                  const b = document.createElement("span");
                  return (
                    b.classList.add(this.options.classNames.description),
                    (b.innerHTML = a),
                    b
                  );
                }
                createBadge(a) {
                  a = n(a);
                  const b = document.createElement("span");
                  return (
                    b.classList.add(
                      a.image
                        ? this.options.classNames.badgeImage
                        : this.options.classNames.badge,
                    ),
                    (b.innerHTML = a.image ? a.image : a.title),
                    a.image ||
                      ((b.style.backgroundColor = a.backgroundColor),
                      (b.style.color = a.textColor)),
                    b
                  );
                }
                createPlaceholder() {
                  const a = document.createElement("button"),
                    b = this.options.classNames.placeholder
                      .split(" ")
                      .filter((a) => a);
                  if (
                    (a.classList.add(...b),
                    a.setAttribute("id", "".concat(this.id, "-button")),
                    a.setAttribute("type", "button"),
                    a.setAttribute("role", "combobox"),
                    a.setAttribute(
                      "aria-controls",
                      "".concat(this.id, "-listbox"),
                    ),
                    a.setAttribute("aria-haspopup", "listbox"),
                    a.setAttribute("aria-expanded", "false"),
                    this.selectors.currentPanelItem &&
                      ((a.innerHTML =
                        this.selectors.currentPanelItem.innerHTML),
                      this.setPlaceholderText(
                        this.selectors.currentPanelItem,
                        a,
                      )),
                    this.isDisabledItem(this.selectors.currentPanelItem) &&
                      this.disableItem(a),
                    this.element.prepend(a),
                    this.field.getAttribute("aria-label") ||
                      this.selectors.currentLabel)
                  ) {
                    const b = document.createElement("div"),
                      c = this.field.getAttribute("aria-label")
                        ? this.field.getAttribute("aria-label")
                        : this.selectors.currentLabel.innerHTML;
                    b.classList.add(this.options.classNames.srOnly),
                      (b.innerHTML = '<span id="'
                        .concat(this.id, '-label">')
                        .concat(c, "</span>")),
                      a.setAttribute(
                        "aria-labelledby",
                        "".concat(this.id, "-label"),
                      ),
                      this.element.prepend(b);
                  }
                  return a;
                }
                togglePanel() {
                  this.state.isOpened ? this.closePanel() : this.openPanel();
                }
                openPanel() {
                  if (
                    !this.state.isOpened &&
                    (this.autoPositionPanel(),
                    (this.state.isOpened = !0),
                    this.element.classList.add(this.options.classNames.opened),
                    this.state.native ||
                      this.selectors.panel.style.width ===
                        "".concat(this.element.clientWidth, "px") ||
                      (this.selectors.panel.style.width = "".concat(
                        this.element.clientWidth,
                        "px",
                      )),
                    !this.state.native &&
                      this.selectors.panel &&
                      ((this.selectors.panel.style.display = "block"),
                      this.selectors.list &&
                        this.selectors.list.setAttribute(
                          "aria-activedescendant",
                          this.selectors.selectedPanelItem.getAttribute("id"),
                        )),
                    this.analytics && this.analytics.openPanelEvent)
                  ) {
                    const a = {
                      category: this.analytics.openPanelEvent.placement,
                      action: this.analytics.openPanelEvent.action || "select",
                      label: this.analytics.openPanelEvent.label,
                    };
                    this.analytics.openPanelEvent.extraData &&
                      (a.extraData = this.analytics.openPanelEvent.extraData),
                      h.emit("analytics.event", a);
                  }
                }
                closePanel() {
                  this.state.isOpened &&
                    ((this.state.isOpened = !1),
                    this.element.classList.remove(
                      this.options.classNames.opened,
                    ),
                    this.state.autoPosition &&
                      this.state.autoPosition.destroy(),
                    this.state.filter && this.clearFilter(),
                    !this.state.native &&
                      this.selectors.panel &&
                      ((this.selectors.panel.style.display = ""),
                      this.selectors.list &&
                        this.selectors.list.setAttribute(
                          "aria-activedescendant",
                          "",
                        )));
                }
                autoPositionPanel() {
                  this.state.native ||
                    !this.options.autoPositionPanel ||
                    SystemJS.import("@popperjs/core").then((a) => {
                      let { createPopper: b } = a;
                      this.state.autoPosition = b(
                        this.selectors.placeholder,
                        this.selectors.panel,
                        {
                          placement: this.options.position,
                          modifiers: [
                            {
                              name: "preventOverflow",
                              options: { padding: 0 },
                            },
                          ],
                          onFirstUpdate: () => {
                            (this.selectors.panel.style.display = "block"),
                              this.selectors.list.focus();
                          },
                        },
                      );
                    });
                }
                onPanelClick(a) {
                  const { target: b } = a;
                  let c;
                  if ("option" === b.getAttribute("role")) c = b;
                  else if ("option" === b.parentElement.getAttribute("role"))
                    c = b.parentElement;
                  else return;
                  this.setSelectedIndex(c.getAttribute("data-index")),
                    this.options.closeOnSelect && this.closePanel();
                }
                onSelectHover() {
                  this.leaveTimeout && clearTimeout(this.leaveTimeout),
                    this.openPanel();
                }
                onSelectLeave() {
                  this.leaveTimeout = setTimeout(
                    this.closePanel.bind(this),
                    this.options.closeTimeout,
                  );
                }
                selectPanelItem(a) {
                  this.selectors.currentPanelItem &&
                    this.unSelectPanelItem(this.selectors.currentPanelItem),
                    a.classList.add(this.options.classNames.selected),
                    (this.selectors.currentPanelItem = a),
                    this.selectors.list &&
                      this.selectors.list.setAttribute(
                        "aria-activedescendant",
                        a.getAttribute("id"),
                      );
                }
                unSelectPanelItem(a) {
                  a.classList.remove(this.options.classNames.selected),
                    (this.selectors.currentPanelItem = null);
                }
                isDisabledItem(a) {
                  return (
                    a &&
                    a instanceof HTMLElement &&
                    "true" === a.getAttribute("data-js-disabled")
                  );
                }
                disableItem(a) {
                  a &&
                    a instanceof HTMLElement &&
                    (a.setAttribute("data-js-disabled", !0),
                    a.classList.add(this.options.classNames.disabled),
                    this.options.preventDisabledSelection &&
                      (a.classList.add(this.options.classNames.inactive),
                      a.setAttribute("aria-disabled", !0),
                      a.setAttribute("aria-hidden", !0)));
                }
                enableItem(a) {
                  a &&
                    a instanceof HTMLElement &&
                    (a.setAttribute("data-js-disabled", !1),
                    a.classList.remove(this.options.classNames.disabled),
                    a.classList.remove(this.options.classNames.selected),
                    this.options.preventDisabledSelection &&
                      (a.classList.remove(this.options.classNames.inactive),
                      a.removeAttribute("aria-disabled"),
                      a.removeAttribute("aria-hidden")));
                }
                setValue(a) {
                  if ("" === a) this.setSelectedIndex(0);
                  else {
                    const b = this.field.querySelector(
                      'option[value="'.concat(a, '"]'),
                    );
                    b && this.setSelectedIndex(b.index);
                  }
                }
                setValueByAttribute(a, b) {
                  const c = this.field.querySelector(
                      "option[".concat(a, '="').concat(b, '"]'),
                    ),
                    d = (c && c.getAttribute("value")) || "";
                  this.setValue(d);
                }
                setSelectedIndex(a) {
                  let b =
                    !!(1 < arguments.length && void 0 !== arguments[1]) &&
                    arguments[1];
                  +this.field.selectedIndex === +a ||
                    ((this.field.selectedIndex = a || 0),
                    !b && g("change", this.field, { bubbles: !0 }));
                }
                onFilterChange(a) {
                  const { target: b } = a;
                  this.filter(b.value);
                }
                filter(a) {
                  (this.state.filteredItems = []),
                    this.selectors.listItem.forEach((b) => {
                      if (!a)
                        this.state.filteredItems.push(b),
                          this.highLightSearchText(b, ""),
                          b.classList.remove(this.options.classNames.hidden);
                      else {
                        const c = this.isTextMatching(b.textContent, a);
                        let d = !1;
                        b.dataset &&
                          b.dataset.jsBucket &&
                          (d = this.isTextMatching(b.dataset.jsBucket, a)),
                          c || d
                            ? (this.state.filteredItems.push(b),
                              this.highLightSearchText(b, a),
                              b.classList.remove(
                                this.options.classNames.hidden,
                              ))
                            : b.classList.add(this.options.classNames.hidden);
                      }
                    }),
                    a && a.length
                      ? (this.selectors.filterPanel.classList.add(
                          this.options.classNames.active,
                        ),
                        this.selectors.filterButton.removeAttribute(
                          "aria-hidden",
                        ),
                        this.selectors.filterButton.removeAttribute("tabindex"))
                      : (this.selectors.filterPanel.classList.remove(
                          this.options.classNames.active,
                        ),
                        this.selectors.filterButton.setAttribute(
                          "aria-hidden",
                          "true",
                        ),
                        this.selectors.filterButton.setAttribute(
                          "tabindex",
                          "-1",
                        )),
                    a &&
                      this.state.filteredItems.length &&
                      (this.setCurrentPanelItem(0),
                      (this.currentItemIndex = 0)),
                    this.toggleNoResult();
                }
                isTextMatching(a, b) {
                  return !!a && -1 < a.toLowerCase().indexOf(b.toLowerCase());
                }
                highLightSearchText(a, b) {
                  this.options.useIcon &&
                    (a = a.querySelector(
                      ".".concat(this.options.classNames.text),
                    )),
                    (a.innerHTML = this.getHighlightTerm(a.textContent, b));
                }
                toggleNoResult() {
                  this.state.filteredItems.length
                    ? (this.selectors.filterNoResults.classList.add(
                        this.options.classNames.srOnly,
                      ),
                      (this.selectors.filterNoResults.innerText =
                        1 < this.state.filteredItems.length
                          ? this.options.a11y.filterResults.replace(
                              "{0}",
                              this.state.filteredItems.length,
                            )
                          : this.options.a11y.filterResult))
                    : (this.selectors.filterNoResults.classList.remove(
                        this.options.classNames.srOnly,
                      ),
                      (this.selectors.filterNoResults.innerText =
                        this.options.a11y.filterNoResults));
                }
                onClearFilter() {
                  this.selectors.filterInput.value.length &&
                    (this.selectors.filterInput.focus(), this.clearFilter());
                }
                clearFilter() {
                  (this.selectors.filterInput.value = ""),
                    this.filter(this.selectors.filterInput.value);
                }
                getHighlightTerm(a, b) {
                  const c = a.toLowerCase().indexOf(b.toLowerCase());
                  let d = "";
                  return -1 !== c && "" !== b
                    ? ((d = "".concat(a.slice(0, c), "<b>")),
                      (d += ""
                        .concat(a.slice(c, c + b.length), "</b>")
                        .concat(a.slice(c + b.length))),
                      d)
                    : a;
                }
                onMediaQueryChange() {
                  super.onMediaQueryChange(),
                    !this.state.native &&
                      this.state.isOpened &&
                      this.closePanel(),
                    this.checkNative();
                }
                onResize() {
                  !this.state.native &&
                    this.selectors.panel &&
                    (this.selectors.panel.style.width = "".concat(
                      this.element.clientWidth,
                      "px",
                    ));
                }
                reset() {
                  if (
                    this.options.selectFirstOptionOnReset &&
                    (this.setSelectedIndex(0, !0), !this.state.native)
                  ) {
                    const a =
                        this.selectors.panel.querySelector("[data-value]"),
                      b = this.selectors.placeholder;
                    this.state.filter && this.clearFilter(),
                      a &&
                        (this.selectItem(b, a),
                        b.setAttribute("aria-expanded", "false")),
                      (this.selectors.selectedPanelItem = a),
                      (this.currentItemIndex = a
                        ? +a.getAttribute("data-index")
                        : 0);
                  }
                  super.removeValidationClass();
                }
                removeCustomSelect() {
                  (this.selectors.currentPanelItem = null),
                    this.selectors.container
                      ? this.selectors.container.removeChild(
                          this.selectors.panel,
                        )
                      : this.element.removeChild(this.selectors.panel),
                    this.element.removeChild(this.selectors.placeholder);
                }
                destroyCustomSelect() {
                  this.unbindCustomSelectEvents(), this.removeCustomSelect();
                }
                onSelectItemKeyDown(a) {
                  switch (a.key) {
                    case "Tab":
                      a.target === this.selectors.list &&
                        (this.state.filter && !a.shiftKey
                          ? (a.preventDefault(),
                            this.selectors.filterInput.focus())
                          : this.onKeyClosePanel());
                      break;
                    case "Enter":
                      if (a.target === this.selectors.filterButton) return;
                      a.preventDefault(),
                        this.selectors.currentPanelItem &&
                          this.setSelectedIndex(
                            this.selectors.currentPanelItem.getAttribute(
                              "data-index",
                            ),
                          ),
                        this.onKeyTogglePanel();
                      break;
                    case "Escape":
                      a.preventDefault(),
                        this.state.isOpened &&
                          (a.stopImmediatePropagation(),
                          this.onKeyClosePanel());
                      break;
                    case " ":
                      if (
                        a.target === this.selectors.filterInput ||
                        a.target === this.selectors.filterButton
                      )
                        return;
                      a.preventDefault(),
                        this.selectors.currentPanelItem &&
                          this.setSelectedIndex(
                            this.selectors.currentPanelItem.getAttribute(
                              "data-index",
                            ),
                          ),
                        this.onKeyTogglePanel();
                      break;
                    case "End":
                      this.selectors.currentPanelItem &&
                        a.target !== this.selectors.filterInput &&
                        (a.preventDefault(),
                        this.focusPanelItem(
                          this.state.filteredItems.length - 1,
                          -1,
                        ));
                      break;
                    case "Home":
                      this.selectors.currentPanelItem &&
                        a.target !== this.selectors.filterInput &&
                        (a.preventDefault(), this.focusPanelItem(0, 1));
                      break;
                    case "ArrowUp":
                      a.preventDefault(),
                        a.stopPropagation(),
                        this.selectors.currentPanelItem &&
                          this.focusPanelItem(this.currentItemIndex - 1, -1),
                        this.state.isOpened || this.onKeyOpenPanel();
                      break;
                    case "ArrowDown":
                      a.preventDefault(),
                        a.stopPropagation(),
                        this.selectors.currentPanelItem &&
                          this.focusPanelItem(this.currentItemIndex + 1, 1),
                        this.state.isOpened || this.onKeyOpenPanel();
                      break;
                    default:
                  }
                }
                focusPanelItem(a, b) {
                  const { length: c } = this.state.filteredItems;
                  for (let d = a; 0 <= d && d < c; d += b) {
                    const a = this.state.filteredItems[d];
                    if (
                      !this.options.preventDisabledSelection ||
                      (a && !this.isDisabledItem(a))
                    ) {
                      this.selectors.list.focus(),
                        this.setCurrentPanelItem(d),
                        this.selectors.currentPanelItem.scrollIntoView(
                          this.options.scrollIntoView,
                        );
                      break;
                    }
                  }
                }
                onKeyOpenPanel() {
                  this.openPanel(),
                    this.selectors.placeholder.setAttribute(
                      "aria-expanded",
                      "true",
                    );
                }
                onKeyClosePanel() {
                  this.closePanel(),
                    this.selectors.placeholder.setAttribute(
                      "aria-expanded",
                      "false",
                    ),
                    this.selectors.placeholder.focus();
                }
                onKeyTogglePanel() {
                  this.state.isOpened
                    ? this.onKeyClosePanel()
                    : this.onKeyOpenPanel();
                }
                onNativeSelectItemKeyDown(a) {
                  const b = -1 !== ["Tab", "Enter"].indexOf(a.key);
                  b || a.altKey
                    ? b && this.state.isPreventChange
                      ? ((this.state.isPreventChange = !1),
                        "Tab" !== a.key && a.preventDefault(),
                        g("change", this.field, { bubbles: !0 }))
                      : (this.state.isPreventChange = !1)
                    : (this.state.isPreventChange = !0);
                }
                initFieldState() {
                  this.setFieldState(
                    Array.from(this.field.querySelectorAll("option")).some(
                      (a) => a.value === this.field.value,
                    ),
                  );
                }
                onMouseEnter() {
                  this.element.classList.add(this.options.classNames.hover);
                }
                onMouseLeave() {
                  this.element.classList.remove(this.options.classNames.hover);
                }
                setCurrentPanelItem(a) {
                  const b = this.state.filteredItems.length;
                  0 >= b ||
                    b < a ||
                    (this.state.filteredItems[a] &&
                      (this.selectPanelItem(this.state.filteredItems[a]),
                      (this.currentItemIndex = a)));
                }
                destroy() {
                  this.state.isOpened && this.closePanel(),
                    this.state.native
                      ? f("keydown", this.field)
                      : this.unbindCustomSelectEvents(),
                    super.destroy();
                }
              }),
            );
          },
        }
      );
    },
  );
  //# sourceMappingURL=Select.js.map
})(System, System);
//# sourceURL=/dist/javascripts/components//dist/javascripts/components/global/Select.js.js
