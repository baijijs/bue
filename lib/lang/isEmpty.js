var isFunction = require('./isFunction'),
    isNumber = require('./isNumber'),
    isObjectLike = require('./isObjectLike'),
    keys = require('../object/keys'),
    size = require('../collection/size');

/**
 * Checks if `value` is empty. A value is considered empty unless it's an
 * `arguments` object, array, string, or jQuery-like collection with a length
 * greater than `0`, an object with own enumerable properties or a number.
 *
 * @static
 * @memberOf bue
 * @category Lang
 * @param {Array|Object|string} value The value to inspect.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * bue.isEmpty(null);
 * // => true
 *
 * bue.isEmpty(true);
 * // => true
 *
 * bue.isEmpty(1);
 * // => false
 *
 * bue.isEmpty([1, 2, 3]);
 * // => false
 *
 * bue.isEmpty({ 'a': 1 });
 * // => false
 *
 * #BAIJI CUSTOMIZED#
 */
function isEmpty(value) {
  if (value === 0) return true;
  if (Number.isNaN(value)) return true;
  return !isNumber(value) && (
    ( !isObjectLike(value) || isFunction(value.splice) )
    ? !size(value)
    : !keys(value).length);
}

module.exports = isEmpty;
