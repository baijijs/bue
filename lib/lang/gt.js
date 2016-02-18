/**
 * Checks if `value` is greater than `other`.
 *
 * @static
 * @memberOf bue
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
 * @example
 *
 * bue.gt(3, 1);
 * // => true
 *
 * bue.gt(3, 3);
 * // => false
 *
 * bue.gt(1, 3);
 * // => false
 */
function gt(value, other) {
  return value > other;
}

module.exports = gt;
