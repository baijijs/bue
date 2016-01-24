var isArrayLike = require('./isArrayLike'),
    isObjectLike = require('./isObjectLike');

/**
 * This method is like `meld.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf meld
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
 * @example
 *
 * meld.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * meld.isArrayLikeObject(document.body.children);
 * // => true
 *
 * meld.isArrayLikeObject('abc');
 * // => false
 *
 * meld.isArrayLikeObject(meld.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;
