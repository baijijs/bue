var chai = require('chai');
var meld = require('../lib/index');

var expect = chai.expect;

describe ('Language', function() {

  describe('#clone(value)', function() {

    var users = [
      { 'user': 'barney' },
      { 'user': 'fred' }
    ];

    it('should a shallow clone of `value`', function() {
      expect(meld.clone(users)).to.deep.equal(users);
    });
  });

  describe('#isArray(value)', function() {
    it('should return if `value` is classified as an `Array` object', function() {
      expect(meld.isArray('abc')).to.equal(false);
      expect(meld.isArray([1, 2, 3])).to.equal(true);
      expect(meld.isArray(meld.noop)).to.equal(false);
    });
  });

  describe('#isBoolean(value)', function() {
    it('should return if `value` is classified as a boolean primitive or object', function() {
      expect(meld.isBoolean(false)).to.equal(true);
      expect(meld.isBoolean(null)).to.equal(false);
    });
  });

  describe('#isDate(value)', function() {
    it('should return if `value` is classified as a `Date` object', function() {
      expect(meld.isDate(new Date())).to.equal(true);
      expect(meld.isDate('Mon April 23 2012')).to.equal(false);
    });
  });

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

  describe('#isFunction(value)', function() {
    it('should return if `value` is classified as a `Function`', function() {
      expect(meld.isFunction(meld.isFunction)).to.equal(true);
      expect(meld.isFunction(/abc/)).to.equal(false);
    });
  });

  describe('#isFunction(value)', function() {
    it('should return if `value` is a valid array-like length', function() {
      expect(meld.isLength(3)).to.equal(true);
      expect(meld.isLength(Number.MIN_VALUE)).to.equal(false);
      expect(meld.isLength(Infinity)).to.equal(false);
      expect(meld.isLength('3')).to.equal(false);
    });
  });

  describe('#isNil(value)', function() {
    it('should return if `value` is `null` or `undefined`', function() {
      expect(meld.isNil(null)).to.equal(true);
      expect(meld.isNil(void 0)).to.equal(true);
      expect(meld.isNil(NaN)).to.equal(false);
    });
  });

  describe('#isNull(value)', function() {
    it('should return if `value` is `null`', function() {
      expect(meld.isNull(null)).to.equal(true);
      expect(meld.isNull(undefined)).to.equal(false);
    });
  });

  describe('#isNullOrUndefined(value)', function() {
    it('should return if `value` is `null` or `undefined`', function() {
      expect(meld.isNullOrUndefined(null)).to.equal(true);
      expect(meld.isNullOrUndefined(undefined)).to.equal(true);
      expect(meld.isNullOrUndefined(NaN)).to.equal(false);
    });
  });

  describe('#isNumber(value)', function() {
    it('should return if `value` is classified as a `Number` primitive or object', function() {
      expect(meld.isNumber(3)).to.equal(true);
      expect(meld.isNil(void 0)).to.equal(true);
    });
  });

  describe('#isInteger(value)', function() {
    it('should return true for integer values', function() {
      expect(meld.isInteger(3)).to.equal(true);
      expect(meld.isInteger('3')).to.equal(false);
      expect(meld.isInteger(NaN)).to.equal(false);
      expect(meld.isInteger(null)).to.equal(false);
      expect(meld.isInteger(3.1)).to.equal(false);
    });
  });

  describe('#isObject(value)', function() {
    it('should return  if `value` is the language type of `Object`.(arrays, functions, objects, regexes, `new Number(0)`, and `new String()', function() {
      expect(meld.isObject({})).to.equal(true);
      expect(meld.isObject([1, 2, 3])).to.equal(true);
      expect(meld.isObject(null)).to.equal(false);
    });
  });

  describe('#isPlainObject(value)', function() {

    function Foo() {
      this.a = 1;
    }

    it('should return if `value` is a plain object, that is, an object created by the `Object` constructor or one with a `[[Prototype]]` of `null`', function() {
      expect(meld.isPlainObject(new Foo())).to.equal(false);
      expect(meld.isPlainObject([1, 2, 3])).to.equal(false);
      expect(meld.isPlainObject({ 'x': 0, 'y': 0 })).to.equal(true);
      expect(meld.isPlainObject(Object.create(null))).to.equal(true);
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

  describe('#isRegExp(value)', function() {
    it('should return if `value` is classified as a `RegExp` object', function() {
      expect(meld.isRegExp(/abc/)).to.equal(true);
      expect(meld.isRegExp('/abc/')).to.equal(false);
    });
  });

  describe('#isRegExp(value)', function() {
    it('should return if `value` is classified as a `String` primitive or object', function() {
      expect(meld.isString('abc')).to.equal(true);
      expect(meld.isString(1)).to.equal(false);
    });
  });

  describe('#isRegExp(value)', function() {
    it('should return if `value` is `undefined`', function() {
      expect(meld.isUndefined(void 0)).to.equal(true);
      expect(meld.isUndefined(null)).to.equal(false);
    });
  });
});
