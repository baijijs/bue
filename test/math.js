var chai = require('chai');
var bue = require('../lib/index');

var expect = chai.expect;

describe ('Math', function() {
  describe('#max(array)', function() {
    it('should get the max values of an array', function() {
      expect(bue.max([ 11, 3, 5, 19, 12 ])).to.equal(19);
      expect(bue.max([ -10000000000000000, -1, 0, 000099 ])).to.equal(99);
      expect(bue.max([ 1, 3, 4, 5, 5, 3, 2, 1 ])).to.equal(5);
      expect(bue.max([ 5, 5, 5, 5, 5, 5 ])).to.equal(5);
      expect(bue.max([ 7 ])).to.equal(7)
    });

    it('should be undefined, when array is regexp/object/string/array or false value', function() {
      expect(bue.max(new RegExp())).to.equal(undefined);
      expect(bue.max('')).to.equal(undefined);
      expect(bue.max({})).to.equal(undefined);
      expect(bue.max([])).to.equal(undefined);
      expect(bue.max(false)).to.equal(undefined);
    });
  });

  describe('#min(array)', function() {
    it('should get the min values of an array', function() {
      expect(bue.min([ 11, 3, 5, 19, 12 ])).to.equal(3);
      expect(bue.min([ -10000000000000000, -1, 0, 000099 ])).to.equal(-10000000000000000);
      expect(bue.min([ 1, 3, 4, 5, 5, 3, 2, 1 ])).to.equal(1);
      expect(bue.min([ 5, 5, 5, 5, 5, 5 ])).to.equal(5);
      expect(bue.min([ 7 ])).to.equal(7)
    });

    it('should be undefined, when array is regexp/object/string/array or false value', function() {
      expect(bue.min(new RegExp())).to.equal(undefined);
      expect(bue.min('')).to.equal(undefined);
      expect(bue.min({})).to.equal(undefined);
      expect(bue.min([])).to.equal(undefined);
      expect(bue.min(false)).to.equal(undefined);
    });
  });

});
