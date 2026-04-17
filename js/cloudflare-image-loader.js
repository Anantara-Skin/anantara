
const CF_IMAGES_BASE = "https://images.anantara.africa"; 

function toCloudflareSrc(salesforceUrl) {
  if (!salesforceUrl || salesforceUrl.startsWith("data:")) return salesforceUrl;

  // Strip query string, extract filename without extension
  const clean = salesforceUrl.split("?")[0];
  const filename = clean.replace(/^\/images\//, "").replace(/\.[^.]+$/, "");

  // Parse width from original query string (sw=NNN)
  const widthMatch = salesforceUrl.match(/sw=(\d+)/);
  const width = widthMatch ? widthMatch[1] : "auto";

  return `${CF_IMAGES_BASE}/${encodeURIComponent(filename)}/w=${width}`;
}

function rewriteAllImages() {
  document.querySelectorAll("img[data-src], img[src]").forEach((img) => {
    const src = img.getAttribute("data-src") || img.getAttribute("src");
    if (!src) return;

    // Only rewrite local /images/ paths or DW CDN paths
    if (src.startsWith("/images/") || src.includes("demandware.static")) {
      const newSrc = toCloudflareSrc(src);
      if (img.hasAttribute("data-src")) {
        img.setAttribute("data-src", newSrc);
      } else {
        img.setAttribute("src", newSrc);
      }
    }

    // Also rewrite srcset
    const srcset =
      img.getAttribute("data-srcset") || img.getAttribute("srcset");
    if (srcset) {
      const newSrcset = srcset
        .split(",")
        .map((entry) => {
          const [url, descriptor] = entry.trim().split(/\s+/);
          if (url.startsWith("/images/") || url.includes("demandware.static")) {
            return `${toCloudflareSrc(url)} ${descriptor || ""}`.trim();
          }
          return entry;
        })
        .join(", ");

      if (img.hasAttribute("data-srcset")) {
        img.setAttribute("data-srcset", newSrcset);
      } else {
        img.setAttribute("srcset", newSrcset);
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", rewriteAllImages);

// Export for use in other modules
window.AnantaraCF = window.AnantaraCF || {};
window.AnantaraCF.toCloudflareSrc = toCloudflareSrc;
