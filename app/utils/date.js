/**
 * Gets the current year
 * @returns {number} Current year
 */
export function getCurrentYear() {
  return new Date().getFullYear();
}

/**
 * Formats the copyright text by replacing the {{year}} placeholder with the current year
 * @param {string} text - Text containing the {{year}} placeholder
 * @returns {string} Formatted text with the current year
 */
export function formatCopyright(text) {
  return text.replace('{{year}}', getCurrentYear());
} 