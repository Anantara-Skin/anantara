(function (System, SystemJS) {
  "use strict";
  System.register([], function (a) {
    "use strict";
    var b;
    return {
      setters: [],
      execute: function () {
        (b = {
          YOUKU: "youku",
          YOUTUBE: "youtube",
          VIMEO: "vimeo",
          FLOWPLAYER: "flowplayer",
          TIKTOK: "tiktok",
          SELFHOSTED: "selfhosted",
        }),
          a("default", b);
      },
    };
  });
  //# sourceMappingURL=videoType.js.map
})(System, System);
//# sourceURL=/dist/javascripts/constants/videoType.js
