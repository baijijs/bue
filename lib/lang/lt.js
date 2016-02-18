/**
 * Checks if `value` is less than `other`.
 *
 * @static
 * @memberOf bue
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
 * @example
 *
 * bue.lt(1, 3);
 * // => true
 *
 * bue.lt(3, 3);
 * // => false
 *
 * bue.lt(3, 1);
 * // => false
 */
function lt(value, other) {
  return value < other;
}

module.exports = lt;
