var isEmpty = require('./isEmpty');

function isPresent(value) {
  return !isEmpty(value);
}

module.exports = isPresent;
