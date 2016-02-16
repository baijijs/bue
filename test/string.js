var chai = require('chai');
var meld = require('../lib/index');

var expect = chai.expect;

describe ('String', function() {
  describe('#pad(string, length, chars)', function() {
    it('should pad string on left and right with space to the length if no chars parameter', function() {
      expect(meld.pad('abc', 8)).to.equal('  abc   ');
      expect(meld.pad('abc', 9)).to.equal('   abc   ');
    });

    it('should pad string on left and right with space to the length with specify chars repeate', function() {
      expect(meld.pad('abc', 8, '_-')).to.equal('_-abc_-_');
      expect(meld.pad('abc', 8, 'xyz')).to.equal('xyabcxyz');
      expect(meld.pad('abc', 10, 'xyz')).to.equal('xyzabcxyzx');
    });

    it('should not pad string on left or right if string length is not less than length parameter', function() {
      expect(meld.pad('abc', 3, '_-')).to.equal('abc');
      expect(meld.pad('abc', 2, '_-')).to.equal('abc');
    });
  });

  describe('#padLeft(string, length, chars)', function() {
    it('should pad string on left only with chars to the length if no chars parameter', function() {
      expect(meld.padLeft('abc', 8)).to.equal('     abc');
      expect(meld.padLeft('abc', 9)).to.equal('      abc');
    });

    it('should pad string on left only with space to the length with specify chars repeate', function() {
      expect(meld.padLeft('abc', 8, '_-')).to.equal('_-_-_abc');
      expect(meld.padLeft('abc', 8, 'xyz')).to.equal('xyzxyabc');
      expect(meld.padLeft('abc', 10, 'xyz')).to.equal('xyzxyzxabc');
    });

    it('should not pad string on left only if string length is not less than length parameter', function() {
      expect(meld.padLeft('abc', 3, '_-')).to.equal('abc');
      expect(meld.padLeft('abc', 2, '_-')).to.equal('abc');
    });
  });

  describe('#padRight(string, length, chars)', function() {
    it('should pad string on right only with chars to the length if no chars parameter', function() {
      expect(meld.padRight('abc', 8)).to.equal('abc     ');
      expect(meld.padRight('abc', 9)).to.equal('abc      ');
    });

    it('should pad string on right only with space to the length with specify chars repeate', function() {
      expect(meld.padRight('abc', 8, '_-')).to.equal('abc_-_-_');
      expect(meld.padRight('abc', 8, 'xyz')).to.equal('abcxyzxy');
      expect(meld.padRight('abc', 10, 'xyz')).to.equal('abcxyzxyzx');
    });

    it('should not pad string on right only if string length is not less than length parameter', function() {
      expect(meld.padRight('abc', 3, '_-')).to.equal('abc');
      expect(meld.padRight('abc', 2, '_-')).to.equal('abc');
    });
  });

  describe('#escapeRegExp(string)', function() {
    it('should escape regexp special characters from string', function() {
      expect(meld.escapeRegExp('\\ ^ $ * + ? . ( ) | { } [ ]')).to.equal('\\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\]');
    });
  });

});
