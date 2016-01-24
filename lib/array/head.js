/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf meld
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * meld.head([1, 2, 3]);
 * // => 1
 *
 * meld.head([]);
 * // => undefined
 */
function head(array) {
  return array ? array[0] : undefined;
}

module.exports = head;
