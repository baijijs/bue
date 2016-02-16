Meld
====
[![Build Status](https://travis-ci.org/baijijs/meld.svg?branch=master)](https://travis-ci.org/baijijs/meld)

Lead Maintainer: [Oliver Wang](https://github.com/ole3021)

Node utilities shared amongst the extended baiji universe

# Usage

## Installation

```bash
npm install baiji-meld
```

## Usage

```javascript
var meld = require('baiji-meld');

meld.isArray([1,2,3]);
// => true
```

## Method

All the functions used in Meld is based on lodash(v4.0.0-pre), some of them have been customized(italic) in the following list.

#### Language Functions
- clone  
  Creates a shallow clone [structured clone algorithm](https://mdn.io/Structured_clone_algorithm) of `value`.
  ```
    meld.clone(value)
  ```
- isArray  
  Checks if `value` is classified as an `Array` object.
  ```
    meld.isArrayLike(value)
  ```
- isBoolean  
  Checks if `value` is classified as a boolean primitive or object.
  ```
    meld.isBoolean(value)
  ```
- isDate  
  Checks if `value` is classified as a `Date` object.
  ```
    meld.isDate(value)
  ```
- _isEmpty_  
  Checks if `value` is empty. A value is considered empty unless it's an `arguments` object, array, string, or jQuery-like collection with a length greater than `0`, an object with own enumerable properties or a number.
  ```
    meld.isEmpty(value)
  ```
- isFunction  
  Checks if `value` is classified as a `Function` object.
  ```
    meld.isFunction(value)
  ```
- isLength  
  Checks if `value` is a valid array-like length.
  ```
    meld.isLength(value)
  ```
- isNil  
  Checks if `value` is `null` or `undefined`.
  ```
    meld.isNil(value)
  ```
- isNull  
  Checks if `value` is `null`.
  ```
    meld.isNull(value)
  ```
- isNumber  
  Checks if `value` is classified as a `Number` primitive or object.
  ```
    meld.isNumber(value)
  ```
- isObject  
  Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
  ```
    meld.isObject(value)
  ```
- isPlainObject  
  Checks if `value` is a plain object, that is, an object created by the `Object` constructor or one with a `[[Prototype]]` of `null`.
  ```
    meld.isPlainObject(value)
  ```
- _isPresent_  
  Check if `value` is not `Empty`
  ```
    meld.isPresent(value)
  ```
- isRegExp  
  Checks if `value` is classified as a `RegExp` object.
  ```
    meld.isRegExp(value)
  ```
- isString  
  Checks if `value` is classified as a `String` primitive or object.
  ```
    meld.isString(value)
  ```
- isUndefined  
  Checks if `value` is `undefined`.
  ```
    meld.isUndefined(value)
  ```

#### Array Functions
- compact  
  Creates an array with all falsey values removed. The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.
  ```
    meld.compact(array)
  ```
- flatten  
  Flattens `array` a single level.
  ```
    meld.flatten(array)
  ```
- first  
  Gets the first element of `array`.
  ```
    meld.first(array)
  ```
- last  
  Gets the last element of `array`.
  ```
    meld.last(array)
  ```

#### Object Functions
- extend  
  Assigns own enumerable properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources but it iterates over own and inherited source properties.
  ```
    meld.entend(object, [sources])
  ```
- get  
  Gets the value at `path` of `object`. If the resolved value is `undefined` the `defaultValue` is used in its place.
  ```
    meld.get(object, path, [defaultValue])
  ```
- hasIn  
  Checks if `path` is a direct or inherited property of `object`.
  ```
    meld.hasIn(object, path)
  ```
- keys  
  Creates an array of the own enumerable property names of `object`.
  ```
    meld.keys(object)
  ```
- keysIn  
  Creates an array of the own and inherited enumerable property names of `object`.
  ```
    meld.keysIn(object)
  ```
- values  
  Creates an array of the own enumerable property values of `object`.
  ```
    meld.values(object)
  ```

#### String Functions
- pad  
  Pads `string` on the left and right sides if it's shorter than `length`. Padding characters are truncated if they can't be evenly divided by `length`.
  ```
    meld.pad([string=''], [length=0], [chars=' '])
  ```
- padLeft  
  Pads `string` on the left side if it's shorter than `length`. Padding characters are truncated if they exceed `length`.
  ```
    meld.padLeft([string=''], [length=0], [chars=' '])
  ```
- padRight  
  Pads `string` on the right side if it's shorter than `length`. Padding characters are truncated if they exceed `length`.
  ```
    meld.padRight([string=''], [length=0], [chars=' '])
  ```
- escapeRegExp
  Escape RegExp special characters.
  ```
    meld.escapeRegExp([string=''])
  ```

### Collection Functions
  > `meld.iteratee`: a function that a invokes `func` with the arguments of the created function.

- each  
  Iterates over elements of `collection` invoking `iteratee` for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning `false`.
  ```
    meld.each(collection, [iteratee = meld.identity])
  ```
- eachRight  
  This method is like `meld.each` except that it iterates over elements of `collection` from right to left.
  ```
    meld.eachRight(collection, [iteratee = meld.identity])
  ```
- map  
  Creates an array of values by running each element in `collection` through `iteratee`. The iteratee is invoked with three arguments: (value, index|key, collection).
  ```
    meld.map(collection, [iteratee = meld.identity])
  ```

### Math Functions
- max  
  Computes the maximum value of `array`. If `array` is empty or falsey `undefined` is returned.
  ```
    meld.max(array)
  ```
- min  
  Computes the minimum value of `array`. If `array` is empty or falsey `undefined` is returned.
  ```
    meld.min(array)
  ```

# License

MIT
