Bue
====
[![Build Status](https://travis-ci.org/baijijs/bue.svg?branch=master)](https://travis-ci.org/baijijs/bue)

Lead Maintainer: [Oliver Wang](https://github.com/ole3021)

Node utilities shared amongst the extended baiji universe

# Usage

## Installation

```bash
npm install bue
```

## Usage

```javascript
var biu = require('bue');

bue.isArray([1,2,3]);
// => true
```

## Method

All the functions used in Bue is based on lodash(v4.0.0-pre), some of them have been customized(italic) in the following list.

#### Language Functions
- clone  
  Creates a shallow clone [structured clone algorithm](https://mdn.io/Structured_clone_algorithm) of `value`.
  ```
    bue.clone(value)
  ```
- isArray  
  Checks if `value` is classified as an `Array` object.
  ```
    bue.isArrayLike(value)
  ```
- isBoolean  
  Checks if `value` is classified as a boolean primitive or object.
  ```
    bue.isBoolean(value)
  ```
- isDate  
  Checks if `value` is classified as a `Date` object.
  ```
    bue.isDate(value)
  ```
- _isEmpty_  
  Checks if `value` is empty. A value is considered empty unless it's an `arguments` object, array, string, or jQuery-like collection with a length greater than `0`, an object with own enumerable properties or a number.
  ```
    bue.isEmpty(value)
  ```
- isFunction  
  Checks if `value` is classified as a `Function` object.
  ```
    bue.isFunction(value)
  ```
- isLength  
  Checks if `value` is a valid array-like length.
  ```
    bue.isLength(value)
  ```
- isNil  
  Checks if `value` is `null` or `undefined`.
  ```
    bue.isNil(value)
  ```
- isNull  
  Checks if `value` is `null`.
  ```
    bue.isNull(value)
  ```
- isNullOrUndefined
  Checks if `value` is `null` or `undefined`.
  ```
    bue.isNullOrUndefined(value)
  ```
- isNumber  
  Checks if `value` is classified as a `Number` primitive or object.
  ```
    bue.isNumber(value)
  ```
- isInteger
  Checks if `value` is an integer.
  ```
    bue.isInteger(value)
  ```
- isObject  
  Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
  ```
    bue.isObject(value)
  ```
- isPlainObject  
  Checks if `value` is a plain object, that is, an object created by the `Object` constructor or one with a `[[Prototype]]` of `null`.
  ```
    bue.isPlainObject(value)
  ```
- _isPresent_  
  Check if `value` is not `Empty`
  ```
    bue.isPresent(value)
  ```
- isRegExp  
  Checks if `value` is classified as a `RegExp` object.
  ```
    bue.isRegExp(value)
  ```
- isString  
  Checks if `value` is classified as a `String` primitive or object.
  ```
    bue.isString(value)
  ```
- isUndefined  
  Checks if `value` is `undefined`.
  ```
    bue.isUndefined(value)
  ```

#### Array Functions
- compact  
  Creates an array with all falsey values removed. The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.
  ```
    bue.compact(array)
  ```
- flatten  
  Flattens `array` a single level.
  ```
    bue.flatten(array)
  ```
- first  
  Gets the first element of `array`.
  ```
    bue.first(array)
  ```
- last  
  Gets the last element of `array`.
  ```
    bue.last(array)
  ```

#### Object Functions
- extend  
  Assigns own enumerable properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources but it iterates over own and inherited source properties.
  ```
    bue.entend(object, [sources])
  ```
- get  
  Gets the value at `path` of `object`. If the resolved value is `undefined` the `defaultValue` is used in its place.
  ```
    bue.get(object, path, [defaultValue])
  ```
- hasIn  
  Checks if `path` is a direct or inherited property of `object`.
  ```
    bue.hasIn(object, path)
  ```
- keys  
  Creates an array of the own enumerable property names of `object`.
  ```
    bue.keys(object)
  ```
- keysIn  
  Creates an array of the own and inherited enumerable property names of `object`.
  ```
    bue.keysIn(object)
  ```
- values  
  Creates an array of the own enumerable property values of `object`.
  ```
    bue.values(object)
  ```

#### String Functions
- pad  
  Pads `string` on the left and right sides if it's shorter than `length`. Padding characters are truncated if they can't be evenly divided by `length`.
  ```
    bue.pad([string=''], [length=0], [chars=' '])
  ```
- padLeft  
  Pads `string` on the left side if it's shorter than `length`. Padding characters are truncated if they exceed `length`.
  ```
    bue.padLeft([string=''], [length=0], [chars=' '])
  ```
- padRight  
  Pads `string` on the right side if it's shorter than `length`. Padding characters are truncated if they exceed `length`.
  ```
    bue.padRight([string=''], [length=0], [chars=' '])
  ```
- escapeRegExp
  Escape RegExp special characters.
  ```
    bue.escapeRegExp([string=''])
  ```

### Collection Functions
  > `bue.iteratee`: a function that a invokes `func` with the arguments of the created function.

- each  
  Iterates over elements of `collection` invoking `iteratee` for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning `false`.
  ```
    bue.each(collection, [iteratee = bue.identity])
  ```
- eachRight  
  This method is like `bue.each` except that it iterates over elements of `collection` from right to left.
  ```
    bue.eachRight(collection, [iteratee = bue.identity])
  ```
- map  
  Creates an array of values by running each element in `collection` through `iteratee`. The iteratee is invoked with three arguments: (value, index|key, collection).
  ```
    bue.map(collection, [iteratee = bue.identity])
  ```

### Math Functions
- max  
  Computes the maximum value of `array`. If `array` is empty or falsey `undefined` is returned.
  ```
    bue.max(array)
  ```
- min  
  Computes the minimum value of `array`. If `array` is empty or falsey `undefined` is returned.
  ```
    bue.min(array)
  ```

### Assertion Testing

- assert
  The `assert` module provides a simple set of assertion tests that can be used to test invariants, based on nodejs core module `assert`

# License

MIT
