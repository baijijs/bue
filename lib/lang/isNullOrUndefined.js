var isNull = require('./isNull');
var isUndefined = require('./isUndefined');

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf meld
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null` or `undefined`, else `false`.
 * @example
 *
 * meld.isNullOrUndefined(null);
 * // => true
 *
 * meld.isNullOrUndefined(void 0);
 * // => true
 */
function isNullOrUndefined(value) {
  return isNull(value) || isUndefined(value);
}

module.exports = isNullOrUndefined;
