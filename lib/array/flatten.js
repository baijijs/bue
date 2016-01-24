var baseFlatten = require('../internal/baseFlatten');

/**
 * Flattens `array` a single level.
 *
 * @static
 * @memberOf meld
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * meld.flatten([1, [2, 3, [4]]]);
 * // => [1, 2, 3, [4]]
 */
function flatten(array) {
  var length = array ? array.length : 0;
  return length ? baseFlatten(array) : [];
}

module.exports = flatten;
