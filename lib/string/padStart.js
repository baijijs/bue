var createPadding = require('../internal/createPadding'),
    toString = require('../lang/toString');

/**
 * Pads `string` on the left side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @static
 * @memberOf bue
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * bue.padStart('abc', 6);
 * // => '   abc'
 *
 * bue.padStart('abc', 6, '_-');
 * // => '_-_abc'
 *
 * bue.padStart('abc', 3);
 * // => 'abc'
 */
function padStart(string, length, chars) {
  string = toString(string);
  return createPadding(string, length, chars) + string;
}

module.exports = padStart;
