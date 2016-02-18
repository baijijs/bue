module.exports = {
  // Language Functions
  'clone': require('./lang/clone'),
  'isArray': require('./lang/isArray'),
  'isBoolean': require('./lang/isBoolean'),
  'isDate': require('./lang/isDate'),
  'isEmpty': require('./lang/isEmpty'), // Baiji Modified
  'isFunction': require('./lang/isFunction'),
  'isLength': require('./lang/isLength'),
  'isNil': require('./lang/isNil'),
  'isNull': require('./lang/isNull'),
  'isNullOrUndefined': require('./lang/isNullOrUndefined'),
  'isNumber': require('./lang/isNumber'),
  'isInteger': require('./lang/isInteger'),
  'isObject': require('./lang/isObject'),
  'isPlainObject': require('./lang/isPlainObject'),
  'isPresent': require('./lang/isPresent'), // Baiji Added
  'isRegExp': require('./lang/isRegExp'),
  'isString': require('./lang/isString'),
  'isUndefined': require('./lang/isUndefined'),

  // Array Functions
  'compact': require('./array/compact'),
  'flatten': require('./array/flatten'),
  'first': require('./array/head'),
  'last': require('./array/last'),

  // Object Functions
  'extend': require('./object/assignIn'),
  'get': require('./object/get'),
  'hasIn': require('./object/hasIn'),
  'keysIn': require('./object/keysIn'),
  'keys': require('./object/keys'),
  'values': require('./object/values'),

  // String Functions
  'pad': require('./string/pad'),
  'padLeft': require('./string/padStart'),
  'padRight': require('./string/padEnd'),
  'escapeRegExp': require('./string/escapeRegExp'),

  // Collection Functions
  'each': require('./collection/forEach'),
  'eachRight': require('./collection/forEachRight'),
  'map': require('./collection/map'),

  // Math Functions
  'max': require('./math/max'),
  'min': require('./math/min'),

  // Assert Testing
  'assert': require('assert')
};
