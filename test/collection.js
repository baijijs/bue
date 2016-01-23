var chai = require('chai');
var meld = require('../lib/index');

var expect = chai.expect;

describe ('Collection', function() {
  var iterator;
  var testArray = ['a','b','cd'];

  beforeEach(function() {
    iterator = 0;
  })

  describe('#each(collection)', function() {
    it('should return each element key & value', function() {
      meld.each(testArray, function(value, key, collection) {
        expect(value).to.equal(testArray[iterator]);
        expect(key).to.equal(testArray.indexOf(testArray[iterator]));
        iterator += 1;
        expect(collection).to.equal(testArray);
      });
    });
  });
});
