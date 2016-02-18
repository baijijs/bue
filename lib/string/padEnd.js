var createPadding = require('../internal/createPadding'),
    toString = require('../lang/toString');

/**
 * Pads `string` on the right side if it's shorter than `length`. Padding
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
 * bue.padEnd('abc', 6);
 * // => 'abc   '
 *
 * bue.padEnd('abc', 6, '_-');
 * // => 'abc_-_'
 *
 * bue.padEnd('abc', 3);
 * // => 'abc'
 */
function padEnd(string, length, chars) {
  string = toString(string);
  return string + createPadding(string, length, chars);
}

module.exports = padEnd;
