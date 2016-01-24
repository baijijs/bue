var baseHasIn = require('../internal/baseHasIn'),
    hasPath = require('../internal/hasPath');

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf meld
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': { 'c': 3 } } };
 *
 * meld.hasIn(object, 'a');
 * // => true
 *
 * meld.hasIn(object, 'a.b.c');
 * // => true
 *
 * meld.hasIn(object, ['a', 'b', 'c']);
 * // => true
 *
 * meld.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return hasPath(object, path, baseHasIn);
}

module.exports = hasIn;
