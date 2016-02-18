/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf bue
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * bue.head([1, 2, 3]);
 * // => 1
 *
 * bue.head([]);
 * // => undefined
 */
function head(array) {
  return array ? array[0] : undefined;
}

module.exports = head;
