/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @memberOf meld
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * meld.isUndefined(void 0);
 * // => true
 *
 * meld.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;
