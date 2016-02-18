var chai = require('chai');
var bue = require('../lib/index');

var expect = chai.expect;

describe ('Language', function() {

  describe('#clone(value)', function() {

    var users = [
      { 'user': 'barney' },
      { 'user': 'fred' }
    ];

    it('should a shallow clone of `value`', function() {
      expect(bue.clone(users)).to.deep.equal(users);
    });
  });

  describe('#isArray(value)', function() {
    it('should return if `value` is classified as an `Array` object', function() {
      expect(bue.isArray('abc')).to.equal(false);
      expect(bue.isArray([1, 2, 3])).to.equal(true);
      expect(bue.isArray(bue.noop)).to.equal(false);
    });
  });

  describe('#isBoolean(value)', function() {
    it('should return if `value` is classified as a boolean primitive or object', function() {
      expect(bue.isBoolean(false)).to.equal(true);
      expect(bue.isBoolean(null)).to.equal(false);
    });
  });

  describe('#isDate(value)', function() {
    it('should return if `value` is classified as a `Date` object', function() {
      expect(bue.isDate(new Date())).to.equal(true);
      expect(bue.isDate('Mon April 23 2012')).to.equal(false);
    });
  });

  describe('#isEmpty(value)', function() {
    it('should not be emtpy, when value is a number', function() {
      expect(bue.isEmpty(1)).to.equal(false);
      expect(bue.isEmpty(-1)).to.equal(false);
      expect(bue.isEmpty(1.5)).to.equal(false);
    });

    it('should not be emtpy, when obj is 0', function() {
      expect(bue.isEmpty(0)).to.equal(true);
    });

    it('should be emtpy, when obj is a empty regexp/object/string/array or false value', function() {
      expect(bue.isEmpty(new RegExp())).to.equal(true);
      expect(bue.isEmpty('')).to.equal(true);
      expect(bue.isEmpty({})).to.equal(true);
      expect(bue.isEmpty([])).to.equal(true);
      expect(bue.isEmpty(false)).to.equal(true);
    });
  });

  describe('#isFunction(value)', function() {
    it('should return if `value` is classified as a `Function`', function() {
      expect(bue.isFunction(bue.isFunction)).to.equal(true);
      expect(bue.isFunction(/abc/)).to.equal(false);
    });
  });

  describe('#isFunction(value)', function() {
    it('should return if `value` is a valid array-like length', function() {
      expect(bue.isLength(3)).to.equal(true);
      expect(bue.isLength(Number.MIN_VALUE)).to.equal(false);
      expect(bue.isLength(Infinity)).to.equal(false);
      expect(bue.isLength('3')).to.equal(false);
    });
  });

  describe('#isNil(value)', function() {
    it('should return if `value` is `null` or `undefined`', function() {
      expect(bue.isNil(null)).to.equal(true);
      expect(bue.isNil(void 0)).to.equal(true);
      expect(bue.isNil(NaN)).to.equal(false);
    });
  });

  describe('#isNull(value)', function() {
    it('should return if `value` is `null`', function() {
      expect(bue.isNull(null)).to.equal(true);
      expect(bue.isNull(undefined)).to.equal(false);
    });
  });

  describe('#isNullOrUndefined(value)', function() {
    it('should return if `value` is `null` or `undefined`', function() {
      expect(bue.isNullOrUndefined(null)).to.equal(true);
      expect(bue.isNullOrUndefined(undefined)).to.equal(true);
      expect(bue.isNullOrUndefined(NaN)).to.equal(false);
    });
  });

  describe('#isNumber(value)', function() {
    it('should return if `value` is classified as a `Number` primitive or object', function() {
      expect(bue.isNumber(3)).to.equal(true);
      expect(bue.isNil(void 0)).to.equal(true);
    });
  });

  describe('#isInteger(value)', function() {
    it('should return true for integer values', function() {
      expect(bue.isInteger(3)).to.equal(true);
      expect(bue.isInteger('3')).to.equal(false);
      expect(bue.isInteger(NaN)).to.equal(false);
      expect(bue.isInteger(null)).to.equal(false);
      expect(bue.isInteger(3.1)).to.equal(false);
    });
  });

  describe('#isObject(value)', function() {
    it('should return  if `value` is the language type of `Object`.(arrays, functions, objects, regexes, `new Number(0)`, and `new String()', function() {
      expect(bue.isObject({})).to.equal(true);
      expect(bue.isObject([1, 2, 3])).to.equal(true);
      expect(bue.isObject(null)).to.equal(false);
    });
  });

  describe('#isPlainObject(value)', function() {

    function Foo() {
      this.a = 1;
    }

    it('should return if `value` is a plain object, that is, an object created by the `Object` constructor or one with a `[[Prototype]]` of `null`', function() {
      expect(bue.isPlainObject(new Foo())).to.equal(false);
      expect(bue.isPlainObject([1, 2, 3])).to.equal(false);
      expect(bue.isPlainObject({ 'x': 0, 'y': 0 })).to.equal(true);
      expect(bue.isPlainObject(Object.create(null))).to.equal(true);
    });
  });

  describe('#isPresent(value)', function() {
    it('should be present, when value is a number', function() {
      expect(bue.isPresent(1)).to.equal(true);
      expect(bue.isPresent(-1)).to.equal(true);
      expect(bue.isPresent(1.5)).to.equal(true);
    });

    it('should be present, when obj is 0', function() {
      expect(bue.isPresent(0)).to.equal(false);
    });

    it('should not be present, when obj is a empty regexp/object/string/array or false value', function() {
      expect(bue.isPresent(new RegExp())).to.equal(false);
      expect(bue.isPresent('')).to.equal(false);
      expect(bue.isPresent({})).to.equal(false);
      expect(bue.isPresent([])).to.equal(false);
      expect(bue.isPresent(false)).to.equal(false);
    });
  });

  describe('#isRegExp(value)', function() {
    it('should return if `value` is classified as a `RegExp` object', function() {
      expect(bue.isRegExp(/abc/)).to.equal(true);
      expect(bue.isRegExp('/abc/')).to.equal(false);
    });
  });

  describe('#isRegExp(value)', function() {
    it('should return if `value` is classified as a `String` primitive or object', function() {
      expect(bue.isString('abc')).to.equal(true);
      expect(bue.isString(1)).to.equal(false);
    });
  });

  describe('#isRegExp(value)', function() {
    it('should return if `value` is `undefined`', function() {
      expect(bue.isUndefined(void 0)).to.equal(true);
      expect(bue.isUndefined(null)).to.equal(false);
    });
  });
});
