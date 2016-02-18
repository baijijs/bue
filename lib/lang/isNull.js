/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf bue
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * bue.isNull(null);
 * // => true
 *
 * bue.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;
