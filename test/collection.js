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
      });
    });

    it('should return collection each loop', function() {
      meld.each(testArray, function(value, key, collection) {
        iterator += 1;
        expect(collection).to.equal(testArray);
      });
      expect(iterator).to.equal(testArray.length);
    });
  });

  describe('#eachRight(collection)', function() {
    it('should return each element key & value from right side', function() {
      meld.eachRight(testArray, function(value, key, collection) {
        expect(value).to.equal(testArray[(testArray.length - (iterator + 1))]);
        expect(key).to.equal(testArray.indexOf(testArray[testArray.length - (iterator + 1)]));
        iterator += 1;
      });
    });

    it('should return collection each loop', function() {
      meld.eachRight(testArray, function(value, key, collection) {
        iterator += 1;
        expect(collection).to.equal(testArray);
      });
      expect(iterator).to.equal(testArray.length);
    });
  });

  describe('#map(collection)', function() {
    it('should return each element key & value', function() {
      meld.map(testArray, function(value, key, collection) {
        expect(value).to.equal(testArray[iterator]);
        expect(key).to.equal(testArray.indexOf(testArray[iterator]));
        iterator += 1;
      });
    });

    it('should return collection each loop', function() {
      meld.map(testArray, function(value, key, collection) {
        iterator += 1;
        expect(collection).to.equal(testArray);
      });
      expect(iterator).to.equal(testArray.length);
    });
  });
});
