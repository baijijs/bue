/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf meld
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * meld.isObjectLike({});
 * // => true
 *
 * meld.isObjectLike([1, 2, 3]);
 * // => true
 *
 * meld.isObjectLike(meld.noop);
 * // => false
 *
 * meld.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isObjectLike;
