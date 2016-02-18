/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf bue
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * bue.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;
