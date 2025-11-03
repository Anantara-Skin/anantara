// Handle CommonJS <-> ESM interop for plugins that export a default
const purgecssModule = require("@fullhuman/postcss-purgecss");
const purgecss = purgecssModule && (purgecssModule.default || purgecssModule);
module.exports = {
  plugins: [
    // Removes unused CSS selectors based on your content files
    // Call the plugin factory (some builds export as `{ default: fn }`)
    purgecss({
      content: [
        "./travel.html", // check travel.html in the project root
      ],
      safelist: ["active", "open", /^modal-/], // keep specific selectors
    }),
    // Adds vendor prefixes (e.g., -webkit-, -moz-) automatically
    require("autoprefixer"),
    // Minifies your final CSS output
    require("cssnano")({
      preset: "default",
    }),
  ],
};
