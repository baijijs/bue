var chai = require('chai');
var bue = require('../lib/index');

var expect = chai.expect;

describe ('Array', function() {
  describe('#compact(array)', function() {
    it('should remove all falsy ( `false`, `null`, `0`, `""`, `undefined` and `NaN` ) values', function() {
      expect(bue.compact([ 11, 0, 3, NaN, 5, null, false, 19, undefined, '', 12, "" ])).to.eql([ 11, 3, 5, 19, 12 ]);
    });
  });

  describe('#flatten(array)', function() {
    it('should flattens `array` a single level', function() {
      expect(bue.flatten([ 1, 4, [ 2, 3], [4] ])).to.eql([ 1, 4, 2, 3, 4]);
    });
  });

  describe('#first(array)', function() {
    it('should return the first element of an array', function() {
      expect(bue.first([ 3, 4 ,9 ])).to.equal(3);
    });

    it('should return undefined if the array is empty', function() {
      expect(bue.first([])).to.equal(undefined);
    });
  });

  describe('#last(array)', function() {
    it('should return the last element of an array', function() {
      expect(bue.last([ 3, 4 ,9 ])).to.equal(9);
    });

    it('should return undefined if the array is empty', function() {
      expect(bue.last([])).to.equal(undefined);
    });
  });
});
