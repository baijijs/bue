var baseExtremum = require('../internal/baseExtremum'),
    identity = require('../utility/identity'),
    lt = require('../lang/lt');

/**
 * Computes the minimum value of `array`. If `array` is empty or falsey
 * `undefined` is returned.
 *
 * @static
 * @memberOf bue
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * bue.min([4, 2, 8, 6]);
 * // => 2
 *
 * bue.min([]);
 * // => undefined
 */
function min(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, lt)
    : undefined;
}

module.exports = min;
