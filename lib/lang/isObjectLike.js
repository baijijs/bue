/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf bue
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * bue.isObjectLike({});
 * // => true
 *
 * bue.isObjectLike([1, 2, 3]);
 * // => true
 *
 * bue.isObjectLike(bue.noop);
 * // => false
 *
 * bue.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isObjectLike;
