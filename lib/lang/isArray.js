/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf meld
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * meld.isArray([1, 2, 3]);
 * // => true
 *
 * meld.isArray('abc');
 * // => false
 *
 * meld.isArray(meld.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;
