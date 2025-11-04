/**
 * Library is used for work with images
 */
/**
 * Split URL into basepath and params parts. Returns info as object
 * @param {object} imageUrl - source of image
 * @return {object} - basepath and params
 */
function _parseURL(imageUrl) {
  const splittedURL = imageUrl.split("?") || [];
  const urlPart = splittedURL[0] || "";
  const paramsPart = splittedURL[1] || "";
  return { urlPart, paramsPart };
}
/**
 * Returns HTML tag name of HTML element
 * @param {HTMLElement} img - Image element
 * @returns {string} - get tag type
 */
function _getTag(img) {
  return img ? img.tagName.toLowerCase() : "";
}
/**
 * Prepare object with attributes of new image which should be shown.
 * @param {string} imageUrl - source of new image
 * @return {object} - config object that could be used to replace img attr string
 */
export function getAttributesOfNewImage(imageUrl) {
  const { urlPart, paramsPart } = _parseURL(imageUrl);
  let origFormat = paramsPart ? paramsPart.match(/sfrm=\w+/g) : "";
  origFormat = origFormat ? origFormat[0].slice(5) : "";
  let imageFormat = urlPart && urlPart.match(/(\.\w+)$/);
  imageFormat = imageFormat ? imageFormat[0].slice(1) : "";
  return {
    imageFormat,
    imageUrl: urlPart.replace(/(\.\w+)$/, ""),
    imageOriginalFormat: origFormat,
  };
}
/**
 * Prepare object with initial image attributes. It would be used as template for replace.
 * @param {HTMLElement} image - link to DOM-node of the image
 * @return {object} - object with image attributes strings and baseUrl
 */
export function getAttributesOfOriginalImage(image) {
  const imageSrc = image.getAttribute("src");
  const { urlPart } = _parseURL(imageSrc);
  return {
    srcset: image.getAttribute("srcset"),
    src: imageSrc,
    baseUrl: urlPart.replace(/(\.\w+)$/, ""),
  };
}
/**
 * Update attributes of imageUrl with new attributes passed as parameters.
 * @param {string} imgSrc - initial string parts of what would be replaced
 * @param {object} originalImg - originalImg data
 * @param {string} newUrl - url of the image in full path without image extension
 * @param {string} imageOriginalFormat - original format of the image
 * @return {string} - attribute string with changed image URL
 */
export function replaceImageAttributes(imgSrc, originalImg, newUrl) {
  const initialUrl = new RegExp(originalImg.url, "g");
  imgSrc = imgSrc.replace(initialUrl, newUrl);
  if (originalImg.format !== "") {
    imgSrc = imgSrc.replace(/&sfrm=\w+/g, `&sfrm=${originalImg.format}`);
  }
  return imgSrc;
}
/**
 * Returns HTML tag name of HTML element
 * @param {HTMLElement} imageToUpdate - Element to be updated
 * @param {Object} originalImageData - Data of the image URL
 * @param {string} newImageSrc - Source of the new image
 */
export function changeImage(imageToUpdate, originalImageData, newImageSrc) {
  const tag = _getTag(imageToUpdate);
  if (tag === "img" && newImageSrc) {
    const updatedData = getAttributesOfNewImage(newImageSrc);
    const originalImgUrl = originalImageData.baseUrl;
    /**
     * Update image attributes
     * @param {string} attr -
     * @returns {string} - URL of the replaced image
     */
    const updateAttr = function updateAttr(attr) {
      return replaceImageAttributes(
        attr,
        {
          url: originalImgUrl,
          format: updatedData.imageFormat,
        },
        updatedData.imageUrl,
      );
    };
    // In case of images without source sets (ex: placeholder), do not perform setting of 'srcset' attribute
    if (originalImageData.srcset) {
      imageToUpdate.setAttribute(
        "srcset",
        updateAttr(originalImageData.srcset),
      );
    }
    imageToUpdate.setAttribute("src", updateAttr(originalImageData.src));
  }
}
/**
 * Replace image source
 * Replace all mathers of pattern with replacement for image.
 * This support img and picture tag.
 * For picture tag updates srcset attribute of source nodes.
 * For img tag updates srcset and src attributes.
 * @param {HTMLElement} element - img element
 * @param {String} pattern - search pattern
 * @param {String} replacement - replacement string
 */
export function replaceImageSource(element, pattern, replacement) {
  const picture = element.parentElement;
  // check if we have a picture over img element
  if (picture.nodeName === "PICTURE") {
    // replace srcset for all source tags
    picture.querySelectorAll("source").forEach((source) => {
      source.setAttribute(
        "srcset",
        source
          .getAttribute("srcset")
          .replace(new RegExp(pattern, "g"), replacement),
      );
    });
  }
  // update img tag
  changeImage(
    element,
    {
      baseUrl: pattern,
      src: element.getAttribute("src"),
      srcset: element.getAttribute("srcset"),
    },
    replacement,
  );
}
/**
 * Returns video thumbnail URL on resolve
 * @param {String} videoURL video source URL
 * @returns {Promise} returns video thumbnail URL on resolve
 */
export function getVideoThumbnail(videoURL) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const video = document.createElement("video");
    video.muted = true;
    video.autoplay = true;
    video.src = videoURL;
    video.onloadeddata = () => {
      const ctx = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      video.pause();
      return resolve(canvas.toDataURL("image/png"));
    };
  });
}
