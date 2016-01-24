/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf meld
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * meld.isNil(null);
 * // => true
 *
 * meld.isNil(void 0);
 * // => true
 *
 * meld.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;
