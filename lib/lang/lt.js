/**
 * Checks if `value` is less than `other`.
 *
 * @static
 * @memberOf meld
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
 * @example
 *
 * meld.lt(1, 3);
 * // => true
 *
 * meld.lt(3, 3);
 * // => false
 *
 * meld.lt(3, 1);
 * // => false
 */
function lt(value, other) {
  return value < other;
}

module.exports = lt;
