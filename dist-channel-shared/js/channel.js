(function () {
  "use strict";

  /* eslint-disable indent */
  /*global window, document*/

  var OPERATING_SYSTEMS = {
    WINDOWS: "Windows",
    MACOSX: "Mac OS X",
    WINDOWS_PHONE: "Windows Phone",
    WINDOWS_RT: "Windows RT",
    IOS: "iOS",
    ANDROID: "Android",
    LINUX: "Linux",
    UNKNOWN: "Unknown",
  };

  function waitForElement(selector, target, timeout) {
    function action(resolve, _reject) {
      var element = document.querySelector(selector);
      var timeoutId;
      var stopChecking = false;
      var mutationObserver;
      var observerOptions;

      if (element) {
        resolve(element);
        return;
      }

      function onTimeout() {
        var HtmlElement = document.querySelector(selector);
        resolve(HtmlElement);
      }

      if (typeof MutationObserver === "undefined") {
        window.setTimeout(onTimeout, timeout);
        return;
      }

      function stopCheckingForElement() {
        stopChecking = true;
        window.clearTimeout(timeoutId);
      }

      timeoutId = window.setTimeout(stopCheckingForElement, timeout);

      function processMutations(_mutations, observer) {
        var HtmlElement;

        if (stopChecking) {
          observer.disconnect();
          resolve(null);
          return;
        }

        HtmlElement = document.querySelector(selector);

        if (HtmlElement === null) {
          return;
        }

        stopCheckingForElement();
        observer.disconnect();
        resolve(HtmlElement);
      }

      mutationObserver = new window.MutationObserver(processMutations);

      observerOptions = {
        childList: true,
        subtree: true,
      };

      mutationObserver.observe(target, observerOptions);
    }

    return new window.Promise(action);
  }

  function addNavigationToTabs() {
    var tabs = document.getElementById("tabs");
    var tabSections = Array.prototype.slice.call(
      document.querySelectorAll('[role="tabpanel"]'),
      0,
    );
    var tabsList = Array.prototype.slice.call(
      document.querySelectorAll('[role="tablist"] a'),
      0,
    );
    var firstSectionFromTop = document.querySelector(
      "#eaBody > main > section:nth-child(1)",
    );
    var tabSectionTarget;
    var initialUrlHash;

    function hideTabSection(tabElement) {
      if (tabElement.classList.contains("hide")) {
        return;
      }

      tabElement.classList.add("hide");
    }

    function setInactiveTab(tab) {
      tab.removeAttribute("aria-selected");
    }

    function handleTabVisibility(event) {
      var target = event.target || event.srcElement;
      var headerHeight = parseInt(
        document.defaultView.getComputedStyle(firstSectionFromTop, null).height,
        10,
      );

      var scrollIntoViewOptions = {
        behavior: "smooth",
        top: headerHeight,
      };

      function makeContentVisibleInView() {
        window.scroll(scrollIntoViewOptions);
      }

      if (target.getAttribute("role") === "tab") {
        tabSections.forEach(hideTabSection);
        tabsList.forEach(setInactiveTab);

        tabSectionTarget = document.getElementById(
          target.hash.replace("#", ""),
        );

        tabSectionTarget.classList.remove("hide");
        target.setAttribute("aria-selected", true);

        if (typeof window.scroll === "function" && window.pageYOffset > 204) {
          window.setTimeout(makeContentVisibleInView, 50);
        }

        event.preventDefault();
      }
    }

    function handleInitialState(activeTabFromUrl) {
      var target = document.querySelector(
        'a[href="#' + activeTabFromUrl + '"]',
      );

      tabSections.forEach(hideTabSection);
      tabsList.forEach(setInactiveTab);

      tabSectionTarget = document.getElementById(activeTabFromUrl);

      tabSectionTarget.classList.remove("hide");
      target.setAttribute("aria-selected", true);
    }

    if (typeof window.location.hash === "string") {
      initialUrlHash = window.location.hash.replace("#", "");

      switch (initialUrlHash) {
        case "what_is_it":
          handleInitialState("what_is_it");
          break;

        case "who_is_it_for":
          handleInitialState("who_is_it_for");
          break;

        case "how_can_you_download_it":
          handleInitialState("how_can_you_download_it");
          break;

        case "what_if_you_have_questions":
          handleInitialState("what_if_you_have_questions");
          break;
      }
    }

    tabs.addEventListener("click", handleTabVisibility);
  }

  function onErrorImageLoad() {
    var images = Array.prototype.slice.call(document.images, 0);

    function handleImageLoadError(event) {
      var target = event.currentTarget;
      var currentUrl;
      var imageUrl;

      if ("srcset" in target) {
        return;
      }

      if (typeof document.location.origin === "string") {
        currentUrl = document.location.origin;
      } else {
        currentUrl = document.location.protocol + "//" + document.location.host;
      }

      if (typeof target.dataset.srcOnerror === "string") {
        imageUrl = currentUrl;

        if (target.dataset.srcOnerror.match(/^\//) === null) {
          imageUrl += "/";
        }

        imageUrl += target.dataset.srcOnerror;

        delete target.dataset.srcOnerror;
        target.src = imageUrl;
      }
    }

    function addErrorHandler(img) {
      img.addEventListener("error", handleImageLoadError);
    }

    images.forEach(addErrorHandler);
  }

  function getOsName() {
    var win = /(windows|win32)/i;
    var winrt = / arm;/i;
    var winphone = /windows\sphone\s\d+\.\d+/i;
    var osx = /(macintosh|mac os x)/i;
    var ios = /(iPad|iPhone|iPod)(?=.*like Mac OS X)/i;
    var linux =
      /(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i;
    var android = /android/i;

    if (window.navigator.userAgent.match(winphone)) {
      return OPERATING_SYSTEMS.WINDOWS_PHONE;
    }
    if (window.navigator.userAgent.match(winrt)) {
      return OPERATING_SYSTEMS.WINDOWS_RT;
    }
    if (window.navigator.userAgent.match(ios)) {
      return OPERATING_SYSTEMS.IOS;
    }
    if (window.navigator.userAgent.match(android)) {
      return OPERATING_SYSTEMS.ANDROID;
    }
    if (window.navigator.userAgent.match(linux)) {
      return OPERATING_SYSTEMS.LINUX;
    }
    if (window.navigator.userAgent.match(osx)) {
      return OPERATING_SYSTEMS.MACOSX;
    }
    if (window.navigator.userAgent.match(win)) {
      return OPERATING_SYSTEMS.WINDOWS;
    }

    return OPERATING_SYSTEMS.UNKNOWN;
  }

  function isIOSDevice() {
    return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  }
  if (isIOSDevice()) {
    var headerDownloadButtonDiv = document.getElementsByClassName(
      "header-install-free-at",
    )[0];
    var footerDownloadButtonDiv = document.getElementsByClassName(
      "footer-install-free-at",
    )[0];

    headerDownloadButtonDiv.style.display = "none";
    footerDownloadButtonDiv.style.display = "none";
  }

  function getScript(url) {
    function action(resolve, reject) {
      var script = document.createElement("script");
      var head = document.head;

      if (typeof url === "undefined") {
        reject("[getScript] missing url parameter");
        return;
      }

      script.src = url;
      script.type = "text/javascript";
      script.defer = true;

      script.onload = resolve;
      script.onerror = reject;

      head.insertBefore(script, head.firstChild);
    }

    return new window.Promise(action);
  }

  function loadCss(url) {
    var link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = url;

    document.head.appendChild(link);
  }

  function loadFonts() {
    // Note:
    //      Here we are injecting an external stylesheets after the first paint operation is done on the screen.
    //      Since those are 3rd party stylesheets then we don't want to block loading app because of them. They can be loaded at any time later.

    var fontFiraSans =
      "https://fonts.googleapis.com/css?family=Fira+Sans&display=swap";
    var fontAwesome =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";

    if (typeof window.requestAnimationFrame === "function") {
      window.requestAnimationFrame(loadCss.bind(this, fontFiraSans));
      window.requestAnimationFrame(loadCss.bind(this, fontAwesome));
    } else {
      loadCss(fontFiraSans);
      loadCss(fontAwesome);
    }
  }

  function loadGoogleTagManager(w, d, s, l, i) {
    var f;
    var j;
    var dl;

    w[l] = w[l] || [];
    w[l].push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
    });

    f = d.getElementsByTagName(s)[0];
    j = d.createElement(s);
    // eslint-disable-next-line no-negated-condition
    dl = l !== "dataLayer" ? "&l=" + l : "";

    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  }

  function adjustAblePlayer() {
    function onAblePlayerAvailable(playButton) {
      var span = document.createElement("span");
      span.className = "visuallyhidden";

      span.appendChild(document.createTextNode("Play"));
      playButton.appendChild(span);
    }

    function onAblePlayerUnavailable(err) {
      console.error(
        "[adjustAblePlayer.onAblePlayerUnavailable] Ableplayer not available",
        err,
      );
    }

    waitForElement(".able-big-play-button", document.documentElement, 20000)
      .then(onAblePlayerAvailable)
      .catch(onAblePlayerUnavailable);
  }

  function handleErrorLoadingScript(error) {
    console.error(error);
  }

  function loadScripts() {
    function action(resolve, reject) {
      var timeoutId;

      loadFonts();

      function loadAllDependecies() {
        window.clearTimeout(timeoutId);

        document.removeEventListener("scroll", loadAllDependecies);
        document.removeEventListener("mousemove", loadAllDependecies);
        document.removeEventListener("touchstart", loadAllDependecies);

        getScript(
          "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
        )
          .then(
            getScript.bind(
              this,
              "../dist-channel-shared/player/js/ableplayer.js",
            ),
          )
          .then(
            loadGoogleTagManager.bind(
              this,
              window,
              document,
              "script",
              "dataLayer",
              "GTM-WW9JX3D",
            ),
          )
          .then(resolve)
          .catch(reject);
      }

      // eslint-disable-next-line no-negated-condition
      if (document.readyState !== "loading") {
        timeoutId = window.setTimeout(loadAllDependecies, 3500);
      } else {
        document.addEventListener("DOMContentLoaded", function () {
          timeoutId = window.setTimeout(loadAllDependecies, 3500);
        });
      }

      document.addEventListener("scroll", loadAllDependecies);
      document.addEventListener("mousemove", loadAllDependecies);
      document.addEventListener("touchstart", loadAllDependecies);
    }

    return new window.Promise(action);
  }

  function handleTermsOfUse() {
    var downloadButtons = Array.prototype.slice.call(
      document.querySelectorAll("[data-download-tool-button]"),
      0,
    );
    var eulaCheckboxes = Array.prototype.slice.call(
      document.querySelectorAll("[data-eula-checkbox"),
      0,
    );

    function enableButtons() {
      function enable(element) {
        element.classList.remove("disable-download-button");
      }

      downloadButtons.forEach(enable);
    }

    function disableButtons() {
      function enable(element) {
        element.checked = false;
      }

      eulaCheckboxes.forEach(enable);
    }

    function enableCheckboxes() {
      function enable(element) {
        element.checked = true;
      }

      eulaCheckboxes.forEach(enable);
    }

    function disabledCheckboxes() {
      function enable(element) {
        element.classList.add("disable-download-button");
      }

      downloadButtons.forEach(enable);
    }

    function handleState(event) {
      var element = event.target;

      while (element !== null) {
        if (
          element.dataset &&
          typeof element.dataset.eulaCheckbox === "string"
        ) {
          break;
        }
        element = element.parentNode;
      }

      if (element === null) {
        return;
      }

      if (element.checked) {
        enableButtons();
        enableCheckboxes();
      } else {
        disableButtons();
        disabledCheckboxes();
      }
    }

    document.addEventListener("click", handleState);
  }

  function setFormActionDownloadUrl() {
    var installATform = Array.prototype.slice.call(
      document.querySelectorAll("[data-download-button-form]"),
      0,
    );

    function addAction(formElement) {
      switch (getOsName()) {
        case OPERATING_SYSTEMS.WINDOWS:
          formElement.action = formElement.dataset.downloadUrlWindows;
          break;

        case OPERATING_SYSTEMS.MACOSX:
          formElement.action = formElement.dataset.downloadUrlMacos;
          break;

        case OPERATING_SYSTEMS.ANDROID:
          formElement.action = formElement.dataset.downloadUrlAndroid;
          break;
      }
    }

    installATform.forEach(addAction);
  }

  addNavigationToTabs();
  onErrorImageLoad();
  handleTermsOfUse();
  setFormActionDownloadUrl();

  loadScripts().then(adjustAblePlayer).catch(handleErrorLoadingScript);
})();
