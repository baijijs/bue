var baseMatches = require('./baseMatches'),
    baseMatchesProperty = require('./baseMatchesProperty'),
    identity = require('../utility/identity'),
    isArray = require('../lang/isArray'),
    property = require('../utility/property');

/**
 * The base implementation of `bue.iteratee`.
 *
 * @private
 * @param {*} [value=bue.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  var type = typeof value;
  if (type == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (type == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;
