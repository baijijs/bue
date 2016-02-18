var arrayMap = require('../internal/arrayMap'),
    baseIteratee = require('../internal/baseIteratee'),
    baseMap = require('../internal/baseMap'),
    isArray = require('../lang/isArray');

/**
 * Creates an array of values by running each element in `collection` through
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * @static
 * @memberOf bue
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function|Object|string} [iteratee=bue.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * bue.map([1, 2], square);
 * // => [3, 6]
 *
 * bue.map({ 'a': 1, 'b': 2 }, square);
 * // => [3, 6] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // using the `bue.property` callback shorthand
 * bue.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;
