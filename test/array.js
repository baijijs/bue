var chai = require('chai');
var meld = require('../lib/index');

var expect = chai.expect;

describe ('Math', function() {
  describe('#max(array)', function() {
    it('should get the max values of an array', function() {
      expect(meld.max([ 11, 3, 5, 19, 12 ])).to.equal(19);
      expect(meld.max([ -10000000000000000, -1, 0, 000099 ])).to.equal(99);
      expect(meld.max([ 1, 3, 4, 5, 5, 3, 2, 1 ])).to.equal(5);
      expect(meld.max([ 5, 5, 5, 5, 5, 5 ])).to.equal(5);
      expect(meld.max([ 7 ])).to.equal(7)
    });

    it('should be undefined, when array is regexp/object/string/array or false value', function() {
      expect(meld.max(new RegExp())).to.equal(undefined);
      expect(meld.max('')).to.equal(undefined);
      expect(meld.max({})).to.equal(undefined);
      expect(meld.max([])).to.equal(undefined);
      expect(meld.max(false)).to.equal(undefined);
    });
  });

  describe('#min(array)', function() {
    it('should get the min values of an array', function() {
      expect(meld.min([ 11, 3, 5, 19, 12 ])).to.equal(3);
      expect(meld.min([ -10000000000000000, -1, 0, 000099 ])).to.equal(-10000000000000000);
      expect(meld.min([ 1, 3, 4, 5, 5, 3, 2, 1 ])).to.equal(1);
      expect(meld.min([ 5, 5, 5, 5, 5, 5 ])).to.equal(5);
      expect(meld.min([ 7 ])).to.equal(7)
    });

    it('should be undefined, when array is regexp/object/string/array or false value', function() {
      expect(meld.min(new RegExp())).to.equal(undefined);
      expect(meld.min('')).to.equal(undefined);
      expect(meld.min({})).to.equal(undefined);
      expect(meld.min([])).to.equal(undefined);
      expect(meld.min(false)).to.equal(undefined);
    });
  });

});
