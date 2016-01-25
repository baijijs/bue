/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf meld
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * meld.isNull(null);
 * // => true
 *
 * meld.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;
