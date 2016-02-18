/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @memberOf bue
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * bue.isUndefined(void 0);
 * // => true
 *
 * bue.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;
