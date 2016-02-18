var arrayEach = require('../internal/arrayEach'),
    baseEach = require('../internal/baseEach'),
    isArray = require('../lang/isArray'),
    toFunction = require('../internal/toFunction');

/**
 * Iterates over elements of `collection` invoking `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf bue
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=bue.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @example
 *
 * bue.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => logs `1` then `2`
 *
 * bue.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => logs 'a' then 'b' (iteration order is not guaranteed)
 */
function forEach(collection, iteratee) {
  return (typeof iteratee == 'function' && isArray(collection))
    ? arrayEach(collection, iteratee)
    : baseEach(collection, toFunction(iteratee));
}

module.exports = forEach;
