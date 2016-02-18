var baseExtremum = require('../internal/baseExtremum'),
    gt = require('../lang/gt'),
    identity = require('../utility/identity');

/**
 * Computes the maximum value of `array`. If `array` is empty or falsey
 * `undefined` is returned.
 *
 * @static
 * @memberOf bue
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * bue.max([4, 2, 8, 6]);
 * // => 8
 *
 * bue.max([]);
 * // => undefined
 */
function max(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, gt)
    : undefined;
}

module.exports = max;
