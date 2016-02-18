/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf bue
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * bue.isNil(null);
 * // => true
 *
 * bue.isNil(void 0);
 * // => true
 *
 * bue.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;
