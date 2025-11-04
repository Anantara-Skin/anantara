/**
 * Get RGB
 * @param { String } color hex color
 * @return { Number } return part of RGB code
 */
function getRGB(color) {
  try {
    color = parseInt(color, 16);
  } catch (err) {
    color = false;
  }
  return color;
}
/**
 * Gets RGB
 * @param { String } color hex color
 * @return { Number } return RGB code
 */
function getsRGB(color) {
  color = getRGB(color) / 255;
  color = color <= 0.03928 ? color / 12.92 : ((color + 0.055) / 1.055) ** 2.4;
  return color;
}
/**
 * Get Luminance
 * @param { String } color hex color
 * @return { Number } return luminance
 */
function getLuminance(color) {
  if (color.indexOf("#") === 0) {
    color = color.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (color.length === 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }
  if (color.length !== 6) {
    throw new Error("Invalid HEX color.");
  }
  return (
    0.2126 * getsRGB(color.substring(0, 2)) +
    0.7152 * getsRGB(color.substring(2, 4)) +
    0.0722 * getsRGB(color.substring(4, 6))
  );
}
/**
 * Check color contrast
 * @param { String } background hex color
 * @param { String } foreground hex color
 * @return { Number } return contrast ratio
 */
export function checkContrast(background, foreground) {
  const L1 = getLuminance(foreground);
  const L2 = getLuminance(background);
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}
