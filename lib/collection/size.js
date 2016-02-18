var isArrayLike = require('../lang/isArrayLike'),
    isString = require('../lang/isString'),
    keys = require('../object/keys'),
    stringSize = require('../internal/stringSize');

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable properties for objects.
 *
 * @static
 * @memberOf bue
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * bue.size([1, 2, 3]);
 * // => 3
 *
 * bue.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * bue.size('pebbles');
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    var result = collection.length;
    return (result && isString(collection)) ? stringSize(collection) : result;
  }
  return keys(collection).length;
}

module.exports = size;
