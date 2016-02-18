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
 * meld.isInteger(3);
 * // => true
 *
 * meld.isInteger(Number.MIN_VALUE);
 * // => false
 *
 * meld.isInteger(Infinity);
 * // => false
 *
 * meld.isInteger('3');
 * // => false
 */
function isInteger(value) {
  return typeof value == 'number' && value == toInteger(value);
}

module.exports = isInteger;
