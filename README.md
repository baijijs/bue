Baiji Meld
============


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
  Creates a shallow clone of `value`.
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
- _isEntity_  
  Check if `value` is calssified as `Entity` object.
  ```
    meld.isEntity(value)
  ```
- _isEmpty_  
  Checks if `value` is empty. A value is considered empty unless it's an
  `arguments` object, array, string, or jQuery-like collection with a length
  greater than `0` or an object with own enumerable properties.
  ```
    meld.isEmpty(value)
  ```
- isFunction
- isLength
- isNil
- isNull
- isNumber
- isObject
- isPlainObject
- _isPresent_
- isRegExp
- isString
- isUndefined

#### Array Functions
- copact
- flatten
- first
- last

#### Object Functions
- extend
- get
- hasIn
- keysIn
- keys
- values

#### String Functions
- pad
- padLeft
- padRight

### Collection Functions
- each
- eachRight
- map

### Math Functions
- max
- min

# License

MIT
