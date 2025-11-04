(function (System, SystemJS) {
  "use strict";
  System.register([], function (a) {
    "use strict";
    function _parseURL(a) {
      const b = a.split("?") || [],
        c = b[0] || "",
        d = b[1] || "";
      return { urlPart: c, paramsPart: d };
    }
    function _getTag(a) {
      return a ? a.tagName.toLowerCase() : "";
    }
    function getAttributesOfNewImage(a) {
      const { urlPart: b, paramsPart: c } = _parseURL(a);
      let d = c ? c.match(/sfrm=\w+/g) : "";
      d = d ? d[0].slice(5) : "";
      let e = b && b.match(/(\.\w+)$/);
      return (
        (e = e ? e[0].slice(1) : ""),
        {
          imageFormat: e,
          imageUrl: b.replace(/(\.\w+)$/, ""),
          imageOriginalFormat: d,
        }
      );
    }
    function replaceImageAttributes(a, b, c) {
      const d = new RegExp(b.url, "g");
      return (
        (a = a.replace(d, c)),
        "" !== b.format &&
          (a = a.replace(/&sfrm=\w+/g, "&sfrm=".concat(b.format))),
        a
      );
    }
    function changeImage(a, b, c) {
      const d = _getTag(a);
      if ("img" === d && c) {
        const d = getAttributesOfNewImage(c),
          e = b.baseUrl,
          f = function (a) {
            return replaceImageAttributes(
              a,
              { url: e, format: d.imageFormat },
              d.imageUrl,
            );
          };
        b.srcset && a.setAttribute("srcset", f(b.srcset)),
          a.setAttribute("src", f(b.src));
      }
    }
    return (
      a({
        getAttributesOfNewImage: getAttributesOfNewImage,
        getAttributesOfOriginalImage: function (a) {
          const b = a.getAttribute("src"),
            { urlPart: c } = _parseURL(b);
          return {
            srcset: a.getAttribute("srcset"),
            src: b,
            baseUrl: c.replace(/(\.\w+)$/, ""),
          };
        },
        replaceImageAttributes: replaceImageAttributes,
        changeImage: changeImage,
        replaceImageSource: function (a, b, c) {
          const d = a.parentElement;
          "PICTURE" === d.nodeName &&
            d.querySelectorAll("source").forEach((a) => {
              a.setAttribute(
                "srcset",
                a.getAttribute("srcset").replace(new RegExp(b, "g"), c),
              );
            }),
            changeImage(
              a,
              {
                baseUrl: b,
                src: a.getAttribute("src"),
                srcset: a.getAttribute("srcset"),
              },
              c,
            );
        },
        getVideoThumbnail: function (a) {
          return new Promise((b) => {
            const c = document.createElement("canvas"),
              d = document.createElement("video");
            (d.muted = !0),
              (d.autoplay = !0),
              (d.src = a),
              (d.onloadeddata = () => {
                const a = c.getContext("2d");
                return (
                  (c.width = d.videoWidth),
                  (c.height = d.videoHeight),
                  a.drawImage(d, 0, 0, d.videoWidth, d.videoHeight),
                  d.pause(),
                  b(c.toDataURL("image/png"))
                );
              });
          });
        },
      }),
      { setters: [], execute: function () {} }
    );
  });
  //# sourceMappingURL=image.js.map
})(System, System);
//# sourceURL=/dist/javascripts/toolbox/image.js
