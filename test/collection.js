var chai = require('chai');
var bue = require('../lib/index');

var expect = chai.expect;

describe ('Collection', function() {
  var iterator;
  var testArray = ['a','b','cd'];

  beforeEach(function() {
    iterator = 0;
  });

  describe('#contains(collection, value)', function() {
    it('Returns true if the equivalent values found', function() {
      expect(bue.contains([1, 2, 3], 1)).to.equal(true);
      expect(bue.contains([1, 2, 3], 1, 2)).to.equal(false);
      expect(bue.contains({ 'user': 'fred', 'age': 40 }, 'fred')).to.equal(true);
      expect(bue.contains('pebbles', 'eb')).to.equal(true);
    });
  });

  describe('#each(collection)', function() {
    it('should return each element key & value', function() {
      bue.each(testArray, function(value, key, collection) {
        expect(value).to.equal(testArray[iterator]);
        expect(key).to.equal(testArray.indexOf(testArray[iterator]));
        iterator += 1;
      });
    });

    it('should return collection each loop', function() {
      bue.each(testArray, function(value, key, collection) {
        iterator += 1;
        expect(collection).to.equal(testArray);
      });
      expect(iterator).to.equal(testArray.length);
    });
  });

  describe('#eachRight(collection)', function() {
    it('should return each element key & value from right side', function() {
      bue.eachRight(testArray, function(value, key, collection) {
        expect(value).to.equal(testArray[(testArray.length - (iterator + 1))]);
        expect(key).to.equal(testArray.indexOf(testArray[testArray.length - (iterator + 1)]));
        iterator += 1;
      });
    });

    it('should return collection each loop', function() {
      bue.eachRight(testArray, function(value, key, collection) {
        iterator += 1;
        expect(collection).to.equal(testArray);
      });
      expect(iterator).to.equal(testArray.length);
    });
  });

  describe('#map(collection)', function() {
    it('should return each element key & value', function() {
      bue.map(testArray, function(value, key, collection) {
        expect(value).to.equal(testArray[iterator]);
        expect(key).to.equal(testArray.indexOf(testArray[iterator]));
        iterator += 1;
      });
    });

    it('should return collection each loop', function() {
      bue.map(testArray, function(value, key, collection) {
        iterator += 1;
        expect(collection).to.equal(testArray);
      });
      expect(iterator).to.equal(testArray.length);
    });
  });
});
