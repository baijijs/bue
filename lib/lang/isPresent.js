/**
* Checks if `value` is present. A value is considered present if it's an
* `arguments` object, array, string, or jQuery-like collection with a length
* greater than `0`, an object with own enumerable properties or a number.
 *
 * @static
 * @memberOf meld
 * @category Lang
 * @param {Array|Object|string} value The value to inspect.
 * @returns {boolean} Returns `true` if `value` is present, else `false`.
 * @example
 *
 * meld.isPresent(null);
 * // => false
 *
 * meld.isPresent(true);
 * // => false
 *
 * meld.isPresent(1);
 * // => true
 *
 * meld.isPresent([1, 2, 3]);
 * // => true
 *
 * meld.isPresent({ 'a': 1 });
 * // => true
 *
 * #BAIJI CUSTOMIZED#
 */
var isEmpty = require('./isEmpty');

function isPresent(value) {
  return !isEmpty(value);
}

module.exports = isPresent;
