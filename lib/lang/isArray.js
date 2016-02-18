/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf bue
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * bue.isArray([1, 2, 3]);
 * // => true
 *
 * bue.isArray('abc');
 * // => false
 *
 * bue.isArray(bue.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;
