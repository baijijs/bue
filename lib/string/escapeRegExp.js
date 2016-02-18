var toString = require('../lang/toString');

var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

/**
 * Escape RegExp special characters.
 *
 * @static
 * @memberOf bue
 * @category String
 * @param {string} [string=''] The string to repeat.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * bue.escapeRegExp('how much $ for a unicorn?');
 * // => 'how much \$ for a unicorn\?'
 **/
function escapeRegExp(string) {
  string = toString(string);
  return string.replace(matchOperatorsRe, '\\$&');
}

module.exports = escapeRegExp;
