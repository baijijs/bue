var toInteger = require('./toInteger');

/**
 * Checks if `value` is an integer.
 *
 * **Note:** This method is based on [`Number.isInteger`](https://mdn.io/Number/isInteger).
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 * @example
 *
 * bue.isInteger(3);
 * // => true
 *
 * bue.isInteger(Number.MIN_VALUE);
 * // => false
 *
 * bue.isInteger(Infinity);
 * // => false
 *
 * bue.isInteger('3');
 * // => false
 */
function isInteger(value) {
  return typeof value == 'number' && value == toInteger(value);
}

module.exports = isInteger;
