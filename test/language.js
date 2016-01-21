var chai = require('chai');
var meld = require('../lib/index');

var expect = chai.expect;

describe ('Language', function() {
  describe('#isEmpty(value)', function() {
    it('should not be emtpy, when value is a number', function() {
      expect(meld.isEmpty(1)).to.equal(false);
      expect(meld.isEmpty(-1)).to.equal(false);
      expect(meld.isEmpty(1.5)).to.equal(false);
    });

    it('should not be emtpy, when obj is 0', function() {
      expect(meld.isEmpty(0)).to.equal(true);
    });

    it('should be emtpy, when obj is a empty regexp/object/string/array or false value', function() {
      expect(meld.isEmpty(new RegExp())).to.equal(true);
      expect(meld.isEmpty('')).to.equal(true);
      expect(meld.isEmpty({})).to.equal(true);
      expect(meld.isEmpty([])).to.equal(true);
      expect(meld.isEmpty(false)).to.equal(true);
    });
  });

  describe('#isPresent(value)', function() {
    it('should be present, when value is a number', function() {
      expect(meld.isPresent(1)).to.equal(true);
      expect(meld.isPresent(-1)).to.equal(true);
      expect(meld.isPresent(1.5)).to.equal(true);
    });

    it('should be present, when obj is 0', function() {
      expect(meld.isPresent(0)).to.equal(false);
    });

    it('should not be present, when obj is a empty regexp/object/string/array or false value', function() {
      expect(meld.isPresent(new RegExp())).to.equal(false);
      expect(meld.isPresent('')).to.equal(false);
      expect(meld.isPresent({})).to.equal(false);
      expect(meld.isPresent([])).to.equal(false);
      expect(meld.isPresent(false)).to.equal(false);
    });
  });
});
