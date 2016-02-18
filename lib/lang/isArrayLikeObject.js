var isArrayLike = require('./isArrayLike'),
    isObjectLike = require('./isObjectLike');

/**
 * This method is like `bue.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf bue
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
 * @example
 *
 * bue.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * bue.isArrayLikeObject(document.body.children);
 * // => true
 *
 * bue.isArrayLikeObject('abc');
 * // => false
 *
 * bue.isArrayLikeObject(bue.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;
