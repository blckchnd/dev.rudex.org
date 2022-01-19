(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[39],{

/***/ 3093:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var isCallable = __webpack_require__(3084);
var tryToString = __webpack_require__(3094);

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 3147:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var isConstructor = __webpack_require__(3148);
var tryToString = __webpack_require__(3094);

var TypeError = global.TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ 3132:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var isCallable = __webpack_require__(3084);

var String = global.String;
var TypeError = global.TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ 3187:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(3096);
var create = __webpack_require__(3172);
var definePropertyModule = __webpack_require__(3107);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 3177:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var charAt = (__webpack_require__(3178).charAt);

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ 3135:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var isPrototypeOf = __webpack_require__(3087);

var TypeError = global.TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw TypeError('Incorrect invocation');
};


/***/ }),

/***/ 3109:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var isObject = __webpack_require__(3083);

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ 3121:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(3076);
var toAbsoluteIndex = __webpack_require__(3122);
var lengthOfArrayLike = __webpack_require__(3124);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 3199:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(3071);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ 3198:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var aCallable = __webpack_require__(3093);
var toObject = __webpack_require__(3102);
var IndexedObject = __webpack_require__(3077);
var lengthOfArrayLike = __webpack_require__(3124);

var TypeError = global.TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ 3202:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var toAbsoluteIndex = __webpack_require__(3122);
var lengthOfArrayLike = __webpack_require__(3124);
var createProperty = __webpack_require__(3203);

var Array = global.Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ 3152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3078);

module.exports = uncurryThis([].slice);


/***/ }),

/***/ 3145:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(3096);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ 3079:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3078);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 3142:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var TO_STRING_TAG_SUPPORT = __webpack_require__(3143);
var isCallable = __webpack_require__(3084);
var classofRaw = __webpack_require__(3079);
var wellKnownSymbol = __webpack_require__(3096);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 3117:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasOwn = __webpack_require__(3101);
var ownKeys = __webpack_require__(3118);
var getOwnPropertyDescriptorModule = __webpack_require__(3069);
var definePropertyModule = __webpack_require__(3107);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 3185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(3096);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ 3192:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(3071);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 3189:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IteratorPrototype = (__webpack_require__(3190).IteratorPrototype);
var create = __webpack_require__(3172);
var createPropertyDescriptor = __webpack_require__(3075);
var setToStringTag = __webpack_require__(3133);
var Iterators = __webpack_require__(3139);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ 3106:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(3070);
var definePropertyModule = __webpack_require__(3107);
var createPropertyDescriptor = __webpack_require__(3075);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 3075:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 3203:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPropertyKey = __webpack_require__(3081);
var definePropertyModule = __webpack_require__(3107);
var createPropertyDescriptor = __webpack_require__(3075);

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ 3188:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3067);
var call = __webpack_require__(3072);
var IS_PURE = __webpack_require__(3098);
var FunctionName = __webpack_require__(3116);
var isCallable = __webpack_require__(3084);
var createIteratorConstructor = __webpack_require__(3189);
var getPrototypeOf = __webpack_require__(3191);
var setPrototypeOf = __webpack_require__(3131);
var setToStringTag = __webpack_require__(3133);
var createNonEnumerableProperty = __webpack_require__(3106);
var redefine = __webpack_require__(3110);
var wellKnownSymbol = __webpack_require__(3096);
var Iterators = __webpack_require__(3139);
var IteratorsCore = __webpack_require__(3190);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ 3070:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(3071);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 3105:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var isObject = __webpack_require__(3083);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 3194:
/***/ ((module) => {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ 3195:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(3105);

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ 3163:
/***/ ((module) => {

module.exports = typeof window == 'object';


/***/ }),

/***/ 3156:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var userAgent = __webpack_require__(3091);
var global = __webpack_require__(3068);

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;


/***/ }),

/***/ 3153:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var userAgent = __webpack_require__(3091);

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ 3154:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(3079);
var global = __webpack_require__(3068);

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ 3157:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var userAgent = __webpack_require__(3091);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ 3091:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(3086);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 3090:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var userAgent = __webpack_require__(3091);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 3126:
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 3067:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var getOwnPropertyDescriptor = (__webpack_require__(3069).f);
var createNonEnumerableProperty = __webpack_require__(3106);
var redefine = __webpack_require__(3110);
var setGlobal = __webpack_require__(3100);
var copyConstructorProperties = __webpack_require__(3117);
var isForced = __webpack_require__(3128);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 3071:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 3166:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(3167);
var uncurryThis = __webpack_require__(3078);
var redefine = __webpack_require__(3110);
var regexpExec = __webpack_require__(3168);
var fails = __webpack_require__(3071);
var wellKnownSymbol = __webpack_require__(3096);
var createNonEnumerableProperty = __webpack_require__(3106);

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ 3150:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(3073);

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ 3137:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3078);
var aCallable = __webpack_require__(3093);
var NATIVE_BIND = __webpack_require__(3073);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 3073:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(3071);

module.exports = !fails(function () {
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 3072:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(3073);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 3116:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(3070);
var hasOwn = __webpack_require__(3101);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 3078:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(3073);

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 3086:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var isCallable = __webpack_require__(3084);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 3141:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(3142);
var getMethod = __webpack_require__(3092);
var Iterators = __webpack_require__(3139);
var wellKnownSymbol = __webpack_require__(3096);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ 3140:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var call = __webpack_require__(3072);
var aCallable = __webpack_require__(3093);
var anObject = __webpack_require__(3109);
var tryToString = __webpack_require__(3094);
var getIteratorMethod = __webpack_require__(3141);

var TypeError = global.TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ 3092:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aCallable = __webpack_require__(3093);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ 3181:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3078);
var toObject = __webpack_require__(3102);

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ 3068:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 3101:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3078);
var toObject = __webpack_require__(3102);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 3115:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 3160:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ 3151:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(3086);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 3104:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(3070);
var fails = __webpack_require__(3071);
var createElement = __webpack_require__(3105);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 3077:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var uncurryThis = __webpack_require__(3078);
var fails = __webpack_require__(3071);
var classof = __webpack_require__(3079);

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ 3111:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3078);
var isCallable = __webpack_require__(3084);
var store = __webpack_require__(3099);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 3112:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(3113);
var global = __webpack_require__(3068);
var uncurryThis = __webpack_require__(3078);
var isObject = __webpack_require__(3083);
var createNonEnumerableProperty = __webpack_require__(3106);
var hasOwn = __webpack_require__(3101);
var shared = __webpack_require__(3099);
var sharedKey = __webpack_require__(3114);
var hiddenKeys = __webpack_require__(3115);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 3138:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(3096);
var Iterators = __webpack_require__(3139);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 3212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(3079);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ 3084:
/***/ ((module) => {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 3148:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3078);
var fails = __webpack_require__(3071);
var isCallable = __webpack_require__(3084);
var classof = __webpack_require__(3142);
var getBuiltIn = __webpack_require__(3086);
var inspectSource = __webpack_require__(3111);

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ 3128:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(3071);
var isCallable = __webpack_require__(3084);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 3083:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(3084);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 3098:
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ 3184:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(3083);
var classof = __webpack_require__(3079);
var wellKnownSymbol = __webpack_require__(3096);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ 3085:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var getBuiltIn = __webpack_require__(3086);
var isCallable = __webpack_require__(3084);
var isPrototypeOf = __webpack_require__(3087);
var USE_SYMBOL_AS_UID = __webpack_require__(3088);

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ 3136:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var bind = __webpack_require__(3137);
var call = __webpack_require__(3072);
var anObject = __webpack_require__(3109);
var tryToString = __webpack_require__(3094);
var isArrayIteratorMethod = __webpack_require__(3138);
var lengthOfArrayLike = __webpack_require__(3124);
var isPrototypeOf = __webpack_require__(3087);
var getIterator = __webpack_require__(3140);
var getIteratorMethod = __webpack_require__(3141);
var iteratorClose = __webpack_require__(3144);

var TypeError = global.TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ 3144:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(3072);
var anObject = __webpack_require__(3109);
var getMethod = __webpack_require__(3092);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ 3190:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(3071);
var isCallable = __webpack_require__(3084);
var create = __webpack_require__(3172);
var getPrototypeOf = __webpack_require__(3191);
var redefine = __webpack_require__(3110);
var wellKnownSymbol = __webpack_require__(3096);
var IS_PURE = __webpack_require__(3098);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 3139:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 3124:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toLength = __webpack_require__(3125);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 3155:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var bind = __webpack_require__(3137);
var getOwnPropertyDescriptor = (__webpack_require__(3069).f);
var macrotask = (__webpack_require__(3149).set);
var IS_IOS = __webpack_require__(3153);
var IS_IOS_PEBBLE = __webpack_require__(3156);
var IS_WEBOS_WEBKIT = __webpack_require__(3157);
var IS_NODE = __webpack_require__(3154);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ 3129:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);

module.exports = global.Promise;


/***/ }),

/***/ 3089:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(3090);
var fails = __webpack_require__(3071);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 3113:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var isCallable = __webpack_require__(3084);
var inspectSource = __webpack_require__(3111);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 3159:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aCallable = __webpack_require__(3093);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ 3183:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var isRegExp = __webpack_require__(3184);

var TypeError = global.TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ 3172:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(3109);
var definePropertiesModule = __webpack_require__(3173);
var enumBugKeys = __webpack_require__(3126);
var hiddenKeys = __webpack_require__(3115);
var html = __webpack_require__(3151);
var documentCreateElement = __webpack_require__(3105);
var sharedKey = __webpack_require__(3114);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 3173:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(3070);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3108);
var definePropertyModule = __webpack_require__(3107);
var anObject = __webpack_require__(3109);
var toIndexedObject = __webpack_require__(3076);
var objectKeys = __webpack_require__(3174);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 3107:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var DESCRIPTORS = __webpack_require__(3070);
var IE8_DOM_DEFINE = __webpack_require__(3104);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3108);
var anObject = __webpack_require__(3109);
var toPropertyKey = __webpack_require__(3081);

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 3069:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(3070);
var call = __webpack_require__(3072);
var propertyIsEnumerableModule = __webpack_require__(3074);
var createPropertyDescriptor = __webpack_require__(3075);
var toIndexedObject = __webpack_require__(3076);
var toPropertyKey = __webpack_require__(3081);
var hasOwn = __webpack_require__(3101);
var IE8_DOM_DEFINE = __webpack_require__(3104);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 3119:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(3120);
var enumBugKeys = __webpack_require__(3126);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 3127:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 3191:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var hasOwn = __webpack_require__(3101);
var isCallable = __webpack_require__(3084);
var toObject = __webpack_require__(3102);
var sharedKey = __webpack_require__(3114);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(3192);

var IE_PROTO = sharedKey('IE_PROTO');
var Object = global.Object;
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 3087:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3078);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 3120:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3078);
var hasOwn = __webpack_require__(3101);
var toIndexedObject = __webpack_require__(3076);
var indexOf = (__webpack_require__(3121).indexOf);
var hiddenKeys = __webpack_require__(3115);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 3174:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(3120);
var enumBugKeys = __webpack_require__(3126);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 3074:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 3131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(3078);
var anObject = __webpack_require__(3109);
var aPossiblePrototype = __webpack_require__(3132);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 3095:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var call = __webpack_require__(3072);
var isCallable = __webpack_require__(3084);
var isObject = __webpack_require__(3083);

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 3118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(3086);
var uncurryThis = __webpack_require__(3078);
var getOwnPropertyNamesModule = __webpack_require__(3119);
var getOwnPropertySymbolsModule = __webpack_require__(3127);
var anObject = __webpack_require__(3109);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 3161:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ 3158:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(3109);
var isObject = __webpack_require__(3083);
var newPromiseCapability = __webpack_require__(3159);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ 3162:
/***/ ((module) => {

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


/***/ }),

/***/ 3130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var redefine = __webpack_require__(3110);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ 3110:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var isCallable = __webpack_require__(3084);
var hasOwn = __webpack_require__(3101);
var createNonEnumerableProperty = __webpack_require__(3106);
var setGlobal = __webpack_require__(3100);
var inspectSource = __webpack_require__(3111);
var InternalStateModule = __webpack_require__(3112);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(3116).CONFIGURABLE);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ 3179:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var call = __webpack_require__(3072);
var anObject = __webpack_require__(3109);
var isCallable = __webpack_require__(3084);
var classof = __webpack_require__(3079);
var regexpExec = __webpack_require__(3168);

var TypeError = global.TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ 3168:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(3072);
var uncurryThis = __webpack_require__(3078);
var toString = __webpack_require__(3169);
var regexpFlags = __webpack_require__(3170);
var stickyHelpers = __webpack_require__(3171);
var shared = __webpack_require__(3097);
var create = __webpack_require__(3172);
var getInternalState = (__webpack_require__(3112).get);
var UNSUPPORTED_DOT_ALL = __webpack_require__(3175);
var UNSUPPORTED_NCG = __webpack_require__(3176);

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ 3170:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(3109);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 3171:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(3071);
var global = __webpack_require__(3068);

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ 3175:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(3071);
var global = __webpack_require__(3068);

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ 3176:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(3071);
var global = __webpack_require__(3068);

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ 3080:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 3100:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 3134:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(3086);
var definePropertyModule = __webpack_require__(3107);
var wellKnownSymbol = __webpack_require__(3096);
var DESCRIPTORS = __webpack_require__(3070);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ 3133:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = (__webpack_require__(3107).f);
var hasOwn = __webpack_require__(3101);
var wellKnownSymbol = __webpack_require__(3096);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ 3114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(3097);
var uid = __webpack_require__(3103);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 3099:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var setGlobal = __webpack_require__(3100);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ 3097:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(3098);
var store = __webpack_require__(3099);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.20.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 3146:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(3109);
var aConstructor = __webpack_require__(3147);
var wellKnownSymbol = __webpack_require__(3096);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ 3178:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3078);
var toIntegerOrInfinity = __webpack_require__(3123);
var toString = __webpack_require__(3169);
var requireObjectCoercible = __webpack_require__(3080);

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ 3207:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var PROPER_FUNCTION_NAME = (__webpack_require__(3116).PROPER);
var fails = __webpack_require__(3071);
var whitespaces = __webpack_require__(3206);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ 3205:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3078);
var requireObjectCoercible = __webpack_require__(3080);
var toString = __webpack_require__(3169);
var whitespaces = __webpack_require__(3206);

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ 3149:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var apply = __webpack_require__(3150);
var bind = __webpack_require__(3137);
var isCallable = __webpack_require__(3084);
var hasOwn = __webpack_require__(3101);
var fails = __webpack_require__(3071);
var html = __webpack_require__(3151);
var arraySlice = __webpack_require__(3152);
var createElement = __webpack_require__(3105);
var IS_IOS = __webpack_require__(3153);
var IS_NODE = __webpack_require__(3154);

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(isCallable(fn) ? fn : Function(fn), undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ 3122:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(3123);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 3076:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(3077);
var requireObjectCoercible = __webpack_require__(3080);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 3123:
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ 3125:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(3123);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 3102:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var requireObjectCoercible = __webpack_require__(3080);

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 3082:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var call = __webpack_require__(3072);
var isObject = __webpack_require__(3083);
var isSymbol = __webpack_require__(3085);
var getMethod = __webpack_require__(3092);
var ordinaryToPrimitive = __webpack_require__(3095);
var wellKnownSymbol = __webpack_require__(3096);

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 3081:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPrimitive = __webpack_require__(3082);
var isSymbol = __webpack_require__(3085);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 3143:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(3096);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 3169:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var classof = __webpack_require__(3142);

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ 3094:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 3103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(3078);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 3088:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(3089);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 3108:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(3070);
var fails = __webpack_require__(3071);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 3096:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var shared = __webpack_require__(3097);
var hasOwn = __webpack_require__(3101);
var uid = __webpack_require__(3103);
var NATIVE_SYMBOL = __webpack_require__(3089);
var USE_SYMBOL_AS_UID = __webpack_require__(3088);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 3206:
/***/ ((module) => {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ 3210:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(3067);
var uncurryThis = __webpack_require__(3078);
var $IndexOf = (__webpack_require__(3121).indexOf);
var arrayMethodIsStrict = __webpack_require__(3199);

var un$IndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? un$IndexOf(this, searchElement, fromIndex) || 0
      : $IndexOf(this, searchElement, fromIndex);
  }
});


/***/ }),

/***/ 3186:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(3076);
var addToUnscopables = __webpack_require__(3187);
var Iterators = __webpack_require__(3139);
var InternalStateModule = __webpack_require__(3112);
var defineProperty = (__webpack_require__(3107).f);
var defineIterator = __webpack_require__(3188);
var IS_PURE = __webpack_require__(3098);
var DESCRIPTORS = __webpack_require__(3070);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ 3197:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3067);
var $reduce = (__webpack_require__(3198).left);
var arrayMethodIsStrict = __webpack_require__(3199);
var CHROME_VERSION = __webpack_require__(3090);
var IS_NODE = __webpack_require__(3154);

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 3211:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3067);
var uncurryThis = __webpack_require__(3078);
var isArray = __webpack_require__(3212);

var un$Reverse = uncurryThis([].reverse);
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray(this)) this.length = this.length;
    return un$Reverse(this);
  }
});


/***/ }),

/***/ 3066:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3067);
var IS_PURE = __webpack_require__(3098);
var global = __webpack_require__(3068);
var getBuiltIn = __webpack_require__(3086);
var call = __webpack_require__(3072);
var NativePromise = __webpack_require__(3129);
var redefine = __webpack_require__(3110);
var redefineAll = __webpack_require__(3130);
var setPrototypeOf = __webpack_require__(3131);
var setToStringTag = __webpack_require__(3133);
var setSpecies = __webpack_require__(3134);
var aCallable = __webpack_require__(3093);
var isCallable = __webpack_require__(3084);
var isObject = __webpack_require__(3083);
var anInstance = __webpack_require__(3135);
var inspectSource = __webpack_require__(3111);
var iterate = __webpack_require__(3136);
var checkCorrectnessOfIteration = __webpack_require__(3145);
var speciesConstructor = __webpack_require__(3146);
var task = (__webpack_require__(3149).set);
var microtask = __webpack_require__(3155);
var promiseResolve = __webpack_require__(3158);
var hostReportErrors = __webpack_require__(3160);
var newPromiseCapabilityModule = __webpack_require__(3159);
var perform = __webpack_require__(3161);
var Queue = __webpack_require__(3162);
var InternalStateModule = __webpack_require__(3112);
var isForced = __webpack_require__(3128);
var wellKnownSymbol = __webpack_require__(3096);
var IS_BROWSER = __webpack_require__(3163);
var IS_NODE = __webpack_require__(3154);
var V8_VERSION = __webpack_require__(3090);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';

var getInternalState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var NativePromisePrototype = NativePromise && NativePromise.prototype;
var PromiseConstructor = NativePromise;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromisePrototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromisePrototype = PromiseConstructor.prototype;
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromisePrototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    // eslint-disable-next-line unicorn/no-thenable -- safe
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      if (state.state == PENDING) state.reactions.add(reaction);
      else microtask(function () {
        callReaction(reaction, state);
      });
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromise) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });

      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
      redefine(NativePromisePrototype, 'catch', PromisePrototype['catch'], { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ 3167:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3067);
var exec = __webpack_require__(3168);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ 3214:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(3078);
var PROPER_FUNCTION_NAME = (__webpack_require__(3116).PROPER);
var redefine = __webpack_require__(3110);
var anObject = __webpack_require__(3109);
var isPrototypeOf = __webpack_require__(3087);
var $toString = __webpack_require__(3169);
var fails = __webpack_require__(3071);
var regExpFlags = __webpack_require__(3170);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var n$ToString = RegExpPrototype[TO_STRING];
var getFlags = uncurryThis(regExpFlags);

var NOT_GENERIC = fails(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && isPrototypeOf(RegExpPrototype, R) && !('flags' in RegExpPrototype) ? getFlags(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ 3200:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3067);
var uncurryThis = __webpack_require__(3078);
var getOwnPropertyDescriptor = (__webpack_require__(3069).f);
var toLength = __webpack_require__(3125);
var toString = __webpack_require__(3169);
var notARegExp = __webpack_require__(3183);
var requireObjectCoercible = __webpack_require__(3080);
var correctIsRegExpLogic = __webpack_require__(3185);
var IS_PURE = __webpack_require__(3098);

// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var un$EndsWith = uncurryThis(''.endsWith);
var slice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = that.length;
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = toString(searchString);
    return un$EndsWith
      ? un$EndsWith(that, search, end)
      : slice(that, end - search.length, end) === search;
  }
});


/***/ }),

/***/ 3209:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3067);
var uncurryThis = __webpack_require__(3078);
var notARegExp = __webpack_require__(3183);
var requireObjectCoercible = __webpack_require__(3080);
var toString = __webpack_require__(3169);
var correctIsRegExpLogic = __webpack_require__(3185);

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ 3165:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(3072);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(3166);
var anObject = __webpack_require__(3109);
var toLength = __webpack_require__(3125);
var toString = __webpack_require__(3169);
var requireObjectCoercible = __webpack_require__(3080);
var getMethod = __webpack_require__(3092);
var advanceStringIndex = __webpack_require__(3177);
var regExpExec = __webpack_require__(3179);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ 3180:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var apply = __webpack_require__(3150);
var call = __webpack_require__(3072);
var uncurryThis = __webpack_require__(3078);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(3166);
var fails = __webpack_require__(3071);
var anObject = __webpack_require__(3109);
var isCallable = __webpack_require__(3084);
var toIntegerOrInfinity = __webpack_require__(3123);
var toLength = __webpack_require__(3125);
var toString = __webpack_require__(3169);
var requireObjectCoercible = __webpack_require__(3080);
var advanceStringIndex = __webpack_require__(3177);
var getMethod = __webpack_require__(3092);
var getSubstitution = __webpack_require__(3181);
var regExpExec = __webpack_require__(3179);
var wellKnownSymbol = __webpack_require__(3096);

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ 3201:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var apply = __webpack_require__(3150);
var call = __webpack_require__(3072);
var uncurryThis = __webpack_require__(3078);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(3166);
var isRegExp = __webpack_require__(3184);
var anObject = __webpack_require__(3109);
var requireObjectCoercible = __webpack_require__(3080);
var speciesConstructor = __webpack_require__(3146);
var advanceStringIndex = __webpack_require__(3177);
var toLength = __webpack_require__(3125);
var toString = __webpack_require__(3169);
var getMethod = __webpack_require__(3092);
var arraySlice = __webpack_require__(3202);
var callRegExpExec = __webpack_require__(3179);
var regexpExec = __webpack_require__(3168);
var stickyHelpers = __webpack_require__(3171);
var fails = __webpack_require__(3071);

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ 3182:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3067);
var uncurryThis = __webpack_require__(3078);
var getOwnPropertyDescriptor = (__webpack_require__(3069).f);
var toLength = __webpack_require__(3125);
var toString = __webpack_require__(3169);
var notARegExp = __webpack_require__(3183);
var requireObjectCoercible = __webpack_require__(3080);
var correctIsRegExpLogic = __webpack_require__(3185);
var IS_PURE = __webpack_require__(3098);

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var un$StartsWith = uncurryThis(''.startsWith);
var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return un$StartsWith
      ? un$StartsWith(that, search, index)
      : stringSlice(that, index, index + search.length) === search;
  }
});


/***/ }),

/***/ 3204:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(3067);
var $trim = (__webpack_require__(3205).trim);
var forcedStringTrimMethod = __webpack_require__(3207);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ 3193:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3068);
var DOMIterables = __webpack_require__(3194);
var DOMTokenListPrototype = __webpack_require__(3195);
var ArrayIteratorMethods = __webpack_require__(3186);
var createNonEnumerableProperty = __webpack_require__(3106);
var wellKnownSymbol = __webpack_require__(3096);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ 3208:
/***/ ((module) => {

/*
	Based on rgbcolor.js by Stoyan Stefanov <sstoo@gmail.com>
	http://www.phpied.com/rgb-color-parser-in-javascript/
*/

module.exports = function(color_string) {
    this.ok = false;
    this.alpha = 1.0;

    // strip any leading #
    if (color_string.charAt(0) == '#') { // remove # if any
        color_string = color_string.substr(1,6);
    }

    color_string = color_string.replace(/ /g,'');
    color_string = color_string.toLowerCase();

    // before getting into regexps, try simple matches
    // and overwrite the input
    var simple_colors = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dodgerblue: '1e90ff',
        feldspar: 'd19275',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred : 'cd5c5c',
        indigo : '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslateblue: '8470ff',
        lightslategray: '778899',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '00ff00',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'ff00ff',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        rebeccapurple: '663399',
        red: 'ff0000',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        violetred: 'd02090',
        wheat: 'f5deb3',
        white: 'ffffff',
        whitesmoke: 'f5f5f5',
        yellow: 'ffff00',
        yellowgreen: '9acd32'
    };
    color_string = simple_colors[color_string] || color_string;
    // emd of simple type-in colors

    // array of color definition objects
    var color_defs = [
        {
            re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
            example: ['rgba(123, 234, 45, 0.8)', 'rgba(255,234,245,1.0)'],
            process: function (bits){
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3]),
                    parseFloat(bits[4])
                ];
            }
        },
        {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
            process: function (bits){
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3])
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            example: ['#00ff00', '336699'],
            process: function (bits){
                return [
                    parseInt(bits[1], 16),
                    parseInt(bits[2], 16),
                    parseInt(bits[3], 16)
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            example: ['#fb0', 'f0f'],
            process: function (bits){
                return [
                    parseInt(bits[1] + bits[1], 16),
                    parseInt(bits[2] + bits[2], 16),
                    parseInt(bits[3] + bits[3], 16)
                ];
            }
        }
    ];

    // search through the definitions to find a match
    for (var i = 0; i < color_defs.length; i++) {
        var re = color_defs[i].re;
        var processor = color_defs[i].process;
        var bits = re.exec(color_string);
        if (bits) {
            var channels = processor(bits);
            this.r = channels[0];
            this.g = channels[1];
            this.b = channels[2];
            if (channels.length > 3) {
                this.alpha = channels[3];
            }
            this.ok = true;
        }

    }

    // validate/cleanup values
    this.r = (this.r < 0 || isNaN(this.r)) ? 0 : ((this.r > 255) ? 255 : this.r);
    this.g = (this.g < 0 || isNaN(this.g)) ? 0 : ((this.g > 255) ? 255 : this.g);
    this.b = (this.b < 0 || isNaN(this.b)) ? 0 : ((this.b > 255) ? 255 : this.b);
    this.alpha = (this.alpha < 0) ? 0 : ((this.alpha > 1.0 || isNaN(this.alpha)) ? 1.0 : this.alpha);

    // some getters
    this.toRGB = function () {
        return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
    }
    this.toRGBA = function () {
        return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.alpha + ')';
    }
    this.toHex = function () {
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);
        if (r.length == 1) r = '0' + r;
        if (g.length == 1) g = '0' + g;
        if (b.length == 1) b = '0' + b;
        return '#' + r + g + b;
    }

    // help
    this.getHelpXML = function () {

        var examples = new Array();
        // add regexps
        for (var i = 0; i < color_defs.length; i++) {
            var example = color_defs[i].example;
            for (var j = 0; j < example.length; j++) {
                examples[examples.length] = example[j];
            }
        }
        // add type-in colors
        for (var sc in simple_colors) {
            examples[examples.length] = sc;
        }

        var xml = document.createElement('ul');
        xml.setAttribute('id', 'rgbcolor-examples');
        for (var i = 0; i < examples.length; i++) {
            try {
                var list_item = document.createElement('li');
                var list_color = new RGBColor(examples[i]);
                var example_div = document.createElement('div');
                example_div.style.cssText =
                        'margin: 3px; '
                        + 'border: 1px solid black; '
                        + 'background:' + list_color.toHex() + '; '
                        + 'color:' + list_color.toHex()
                ;
                example_div.appendChild(document.createTextNode('test'));
                var list_item_value = document.createTextNode(
                    ' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex()
                );
                list_item.appendChild(example_div);
                list_item.appendChild(list_item_value);
                xml.appendChild(list_item);

            } catch(e){}
        }
        return xml;

    }

}


/***/ }),

/***/ 3215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlurStack": () => (/* binding */ BlurStack),
/* harmony export */   "canvasRGB": () => (/* binding */ processCanvasRGB),
/* harmony export */   "canvasRGBA": () => (/* binding */ processCanvasRGBA),
/* harmony export */   "image": () => (/* binding */ processImage),
/* harmony export */   "imageDataRGB": () => (/* binding */ processImageDataRGB),
/* harmony export */   "imageDataRGBA": () => (/* binding */ processImageDataRGBA)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/* eslint-disable no-bitwise -- used for calculations */

/* eslint-disable unicorn/prefer-query-selector -- aiming at
  backward-compatibility */

/**
* StackBlur - a fast almost Gaussian Blur For Canvas
*
* In case you find this class useful - especially in commercial projects -
* I am not totally unhappy for a small donation to my PayPal account
* mario@quasimondo.de
*
* Or support me on flattr:
* {@link https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript}.
*
* @module StackBlur
* @author Mario Klingemann
* Contact: mario@quasimondo.com
* Website: {@link http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html}
* Twitter: @quasimondo
*
* @copyright (c) 2010 Mario Klingemann
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/
var mulTable = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];
var shgTable = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
/**
 * @param {string|HTMLImageElement} img
 * @param {string|HTMLCanvasElement} canvas
 * @param {Float} radius
 * @param {boolean} blurAlphaChannel
 * @param {boolean} useOffset
 * @param {boolean} skipStyles
 * @returns {undefined}
 */

function processImage(img, canvas, radius, blurAlphaChannel, useOffset, skipStyles) {
  if (typeof img === 'string') {
    img = document.getElementById(img);
  }

  if (!img || !('naturalWidth' in img)) {
    return;
  }

  var dimensionType = useOffset ? 'offset' : 'natural';
  var w = img[dimensionType + 'Width'];
  var h = img[dimensionType + 'Height'];

  if (typeof canvas === 'string') {
    canvas = document.getElementById(canvas);
  }

  if (!canvas || !('getContext' in canvas)) {
    return;
  }

  if (!skipStyles) {
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
  }

  canvas.width = w;
  canvas.height = h;
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, w, h);
  context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, w, h);

  if (isNaN(radius) || radius < 1) {
    return;
  }

  if (blurAlphaChannel) {
    processCanvasRGBA(canvas, 0, 0, w, h, radius);
  } else {
    processCanvasRGB(canvas, 0, 0, w, h, radius);
  }
}
/**
 * @param {string|HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @throws {Error|TypeError}
 * @returns {ImageData} See {@link https://html.spec.whatwg.org/multipage/canvas.html#imagedata}
 */


function getImageDataFromCanvas(canvas, topX, topY, width, height) {
  if (typeof canvas === 'string') {
    canvas = document.getElementById(canvas);
  }

  if (!canvas || _typeof(canvas) !== 'object' || !('getContext' in canvas)) {
    throw new TypeError('Expecting canvas with `getContext` method ' + 'in processCanvasRGB(A) calls!');
  }

  var context = canvas.getContext('2d');

  try {
    return context.getImageData(topX, topY, width, height);
  } catch (e) {
    throw new Error('unable to access image data: ' + e);
  }
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */


function processCanvasRGBA(canvas, topX, topY, width, height, radius) {
  if (isNaN(radius) || radius < 1) {
    return;
  }

  radius |= 0;
  var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
  imageData = processImageDataRGBA(imageData, topX, topY, width, height, radius);
  canvas.getContext('2d').putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */


function processImageDataRGBA(imageData, topX, topY, width, height, radius) {
  var pixels = imageData.data;
  var div = 2 * radius + 1; // const w4 = width << 2;

  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack();
  var stack = stackStart;
  var stackEnd;

  for (var i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();

    if (i === radiusPlus1) {
      stackEnd = stack;
    }
  }

  stack.next = stackStart;
  var stackIn = null,
      stackOut = null,
      yw = 0,
      yi = 0;
  var mulSum = mulTable[radius];
  var shgSum = shgTable[radius];

  for (var y = 0; y < height; y++) {
    stack = stackStart;
    var pr = pixels[yi],
        pg = pixels[yi + 1],
        pb = pixels[yi + 2],
        pa = pixels[yi + 3];

    for (var _i = 0; _i < radiusPlus1; _i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }

    var rInSum = 0,
        gInSum = 0,
        bInSum = 0,
        aInSum = 0,
        rOutSum = radiusPlus1 * pr,
        gOutSum = radiusPlus1 * pg,
        bOutSum = radiusPlus1 * pb,
        aOutSum = radiusPlus1 * pa,
        rSum = sumFactor * pr,
        gSum = sumFactor * pg,
        bSum = sumFactor * pb,
        aSum = sumFactor * pa;

    for (var _i2 = 1; _i2 < radiusPlus1; _i2++) {
      var p = yi + ((widthMinus1 < _i2 ? widthMinus1 : _i2) << 2);
      var r = pixels[p],
          g = pixels[p + 1],
          b = pixels[p + 2],
          a = pixels[p + 3];
      var rbs = radiusPlus1 - _i2;
      rSum += (stack.r = r) * rbs;
      gSum += (stack.g = g) * rbs;
      bSum += (stack.b = b) * rbs;
      aSum += (stack.a = a) * rbs;
      rInSum += r;
      gInSum += g;
      bInSum += b;
      aInSum += a;
      stack = stack.next;
    }

    stackIn = stackStart;
    stackOut = stackEnd;

    for (var x = 0; x < width; x++) {
      var paInitial = aSum * mulSum >> shgSum;
      pixels[yi + 3] = paInitial;

      if (paInitial !== 0) {
        var _a2 = 255 / paInitial;

        pixels[yi] = (rSum * mulSum >> shgSum) * _a2;
        pixels[yi + 1] = (gSum * mulSum >> shgSum) * _a2;
        pixels[yi + 2] = (bSum * mulSum >> shgSum) * _a2;
      } else {
        pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
      }

      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      aSum -= aOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      aOutSum -= stackIn.a;

      var _p = x + radius + 1;

      _p = yw + (_p < widthMinus1 ? _p : widthMinus1) << 2;
      rInSum += stackIn.r = pixels[_p];
      gInSum += stackIn.g = pixels[_p + 1];
      bInSum += stackIn.b = pixels[_p + 2];
      aInSum += stackIn.a = pixels[_p + 3];
      rSum += rInSum;
      gSum += gInSum;
      bSum += bInSum;
      aSum += aInSum;
      stackIn = stackIn.next;
      var _stackOut = stackOut,
          _r = _stackOut.r,
          _g = _stackOut.g,
          _b = _stackOut.b,
          _a = _stackOut.a;
      rOutSum += _r;
      gOutSum += _g;
      bOutSum += _b;
      aOutSum += _a;
      rInSum -= _r;
      gInSum -= _g;
      bInSum -= _b;
      aInSum -= _a;
      stackOut = stackOut.next;
      yi += 4;
    }

    yw += width;
  }

  for (var _x = 0; _x < width; _x++) {
    yi = _x << 2;

    var _pr = pixels[yi],
        _pg = pixels[yi + 1],
        _pb = pixels[yi + 2],
        _pa = pixels[yi + 3],
        _rOutSum = radiusPlus1 * _pr,
        _gOutSum = radiusPlus1 * _pg,
        _bOutSum = radiusPlus1 * _pb,
        _aOutSum = radiusPlus1 * _pa,
        _rSum = sumFactor * _pr,
        _gSum = sumFactor * _pg,
        _bSum = sumFactor * _pb,
        _aSum = sumFactor * _pa;

    stack = stackStart;

    for (var _i3 = 0; _i3 < radiusPlus1; _i3++) {
      stack.r = _pr;
      stack.g = _pg;
      stack.b = _pb;
      stack.a = _pa;
      stack = stack.next;
    }

    var yp = width;
    var _gInSum = 0,
        _bInSum = 0,
        _aInSum = 0,
        _rInSum = 0;

    for (var _i4 = 1; _i4 <= radius; _i4++) {
      yi = yp + _x << 2;

      var _rbs = radiusPlus1 - _i4;

      _rSum += (stack.r = _pr = pixels[yi]) * _rbs;
      _gSum += (stack.g = _pg = pixels[yi + 1]) * _rbs;
      _bSum += (stack.b = _pb = pixels[yi + 2]) * _rbs;
      _aSum += (stack.a = _pa = pixels[yi + 3]) * _rbs;
      _rInSum += _pr;
      _gInSum += _pg;
      _bInSum += _pb;
      _aInSum += _pa;
      stack = stack.next;

      if (_i4 < heightMinus1) {
        yp += width;
      }
    }

    yi = _x;
    stackIn = stackStart;
    stackOut = stackEnd;

    for (var _y = 0; _y < height; _y++) {
      var _p2 = yi << 2;

      pixels[_p2 + 3] = _pa = _aSum * mulSum >> shgSum;

      if (_pa > 0) {
        _pa = 255 / _pa;
        pixels[_p2] = (_rSum * mulSum >> shgSum) * _pa;
        pixels[_p2 + 1] = (_gSum * mulSum >> shgSum) * _pa;
        pixels[_p2 + 2] = (_bSum * mulSum >> shgSum) * _pa;
      } else {
        pixels[_p2] = pixels[_p2 + 1] = pixels[_p2 + 2] = 0;
      }

      _rSum -= _rOutSum;
      _gSum -= _gOutSum;
      _bSum -= _bOutSum;
      _aSum -= _aOutSum;
      _rOutSum -= stackIn.r;
      _gOutSum -= stackIn.g;
      _bOutSum -= stackIn.b;
      _aOutSum -= stackIn.a;
      _p2 = _x + ((_p2 = _y + radiusPlus1) < heightMinus1 ? _p2 : heightMinus1) * width << 2;
      _rSum += _rInSum += stackIn.r = pixels[_p2];
      _gSum += _gInSum += stackIn.g = pixels[_p2 + 1];
      _bSum += _bInSum += stackIn.b = pixels[_p2 + 2];
      _aSum += _aInSum += stackIn.a = pixels[_p2 + 3];
      stackIn = stackIn.next;
      _rOutSum += _pr = stackOut.r;
      _gOutSum += _pg = stackOut.g;
      _bOutSum += _pb = stackOut.b;
      _aOutSum += _pa = stackOut.a;
      _rInSum -= _pr;
      _gInSum -= _pg;
      _bInSum -= _pb;
      _aInSum -= _pa;
      stackOut = stackOut.next;
      yi += width;
    }
  }

  return imageData;
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */


function processCanvasRGB(canvas, topX, topY, width, height, radius) {
  if (isNaN(radius) || radius < 1) {
    return;
  }

  radius |= 0;
  var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
  imageData = processImageDataRGB(imageData, topX, topY, width, height, radius);
  canvas.getContext('2d').putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */


function processImageDataRGB(imageData, topX, topY, width, height, radius) {
  var pixels = imageData.data;
  var div = 2 * radius + 1; // const w4 = width << 2;

  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack();
  var stack = stackStart;
  var stackEnd;

  for (var i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();

    if (i === radiusPlus1) {
      stackEnd = stack;
    }
  }

  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;
  var mulSum = mulTable[radius];
  var shgSum = shgTable[radius];
  var p, rbs;
  var yw = 0,
      yi = 0;

  for (var y = 0; y < height; y++) {
    var pr = pixels[yi],
        pg = pixels[yi + 1],
        pb = pixels[yi + 2],
        rOutSum = radiusPlus1 * pr,
        gOutSum = radiusPlus1 * pg,
        bOutSum = radiusPlus1 * pb,
        rSum = sumFactor * pr,
        gSum = sumFactor * pg,
        bSum = sumFactor * pb;
    stack = stackStart;

    for (var _i5 = 0; _i5 < radiusPlus1; _i5++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }

    var rInSum = 0,
        gInSum = 0,
        bInSum = 0;

    for (var _i6 = 1; _i6 < radiusPlus1; _i6++) {
      p = yi + ((widthMinus1 < _i6 ? widthMinus1 : _i6) << 2);
      rSum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - _i6);
      gSum += (stack.g = pg = pixels[p + 1]) * rbs;
      bSum += (stack.b = pb = pixels[p + 2]) * rbs;
      rInSum += pr;
      gInSum += pg;
      bInSum += pb;
      stack = stack.next;
    }

    stackIn = stackStart;
    stackOut = stackEnd;

    for (var x = 0; x < width; x++) {
      pixels[yi] = rSum * mulSum >> shgSum;
      pixels[yi + 1] = gSum * mulSum >> shgSum;
      pixels[yi + 2] = bSum * mulSum >> shgSum;
      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
      rInSum += stackIn.r = pixels[p];
      gInSum += stackIn.g = pixels[p + 1];
      bInSum += stackIn.b = pixels[p + 2];
      rSum += rInSum;
      gSum += gInSum;
      bSum += bInSum;
      stackIn = stackIn.next;
      rOutSum += pr = stackOut.r;
      gOutSum += pg = stackOut.g;
      bOutSum += pb = stackOut.b;
      rInSum -= pr;
      gInSum -= pg;
      bInSum -= pb;
      stackOut = stackOut.next;
      yi += 4;
    }

    yw += width;
  }

  for (var _x2 = 0; _x2 < width; _x2++) {
    yi = _x2 << 2;

    var _pr2 = pixels[yi],
        _pg2 = pixels[yi + 1],
        _pb2 = pixels[yi + 2],
        _rOutSum2 = radiusPlus1 * _pr2,
        _gOutSum2 = radiusPlus1 * _pg2,
        _bOutSum2 = radiusPlus1 * _pb2,
        _rSum2 = sumFactor * _pr2,
        _gSum2 = sumFactor * _pg2,
        _bSum2 = sumFactor * _pb2;

    stack = stackStart;

    for (var _i7 = 0; _i7 < radiusPlus1; _i7++) {
      stack.r = _pr2;
      stack.g = _pg2;
      stack.b = _pb2;
      stack = stack.next;
    }

    var _rInSum2 = 0,
        _gInSum2 = 0,
        _bInSum2 = 0;

    for (var _i8 = 1, yp = width; _i8 <= radius; _i8++) {
      yi = yp + _x2 << 2;
      _rSum2 += (stack.r = _pr2 = pixels[yi]) * (rbs = radiusPlus1 - _i8);
      _gSum2 += (stack.g = _pg2 = pixels[yi + 1]) * rbs;
      _bSum2 += (stack.b = _pb2 = pixels[yi + 2]) * rbs;
      _rInSum2 += _pr2;
      _gInSum2 += _pg2;
      _bInSum2 += _pb2;
      stack = stack.next;

      if (_i8 < heightMinus1) {
        yp += width;
      }
    }

    yi = _x2;
    stackIn = stackStart;
    stackOut = stackEnd;

    for (var _y2 = 0; _y2 < height; _y2++) {
      p = yi << 2;
      pixels[p] = _rSum2 * mulSum >> shgSum;
      pixels[p + 1] = _gSum2 * mulSum >> shgSum;
      pixels[p + 2] = _bSum2 * mulSum >> shgSum;
      _rSum2 -= _rOutSum2;
      _gSum2 -= _gOutSum2;
      _bSum2 -= _bOutSum2;
      _rOutSum2 -= stackIn.r;
      _gOutSum2 -= stackIn.g;
      _bOutSum2 -= stackIn.b;
      p = _x2 + ((p = _y2 + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
      _rSum2 += _rInSum2 += stackIn.r = pixels[p];
      _gSum2 += _gInSum2 += stackIn.g = pixels[p + 1];
      _bSum2 += _bInSum2 += stackIn.b = pixels[p + 2];
      stackIn = stackIn.next;
      _rOutSum2 += _pr2 = stackOut.r;
      _gOutSum2 += _pg2 = stackOut.g;
      _bOutSum2 += _pb2 = stackOut.b;
      _rInSum2 -= _pr2;
      _gInSum2 -= _pg2;
      _bInSum2 -= _pb2;
      stackOut = stackOut.next;
      yi += width;
    }
  }

  return imageData;
}
/**
 *
 */


var BlurStack =
/**
 * Set properties.
 */
function BlurStack() {
  _classCallCheck(this, BlurStack);

  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;
};




/***/ }),

/***/ 3164:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ 3196:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ 3065:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "AElement": () => (/* binding */ AElement),
/* harmony export */   "AnimateColorElement": () => (/* binding */ AnimateColorElement),
/* harmony export */   "AnimateElement": () => (/* binding */ AnimateElement),
/* harmony export */   "AnimateTransformElement": () => (/* binding */ AnimateTransformElement),
/* harmony export */   "BoundingBox": () => (/* binding */ BoundingBox),
/* harmony export */   "CB1": () => (/* binding */ CB1),
/* harmony export */   "CB2": () => (/* binding */ CB2),
/* harmony export */   "CB3": () => (/* binding */ CB3),
/* harmony export */   "CB4": () => (/* binding */ CB4),
/* harmony export */   "Canvg": () => (/* binding */ Canvg),
/* harmony export */   "CircleElement": () => (/* binding */ CircleElement),
/* harmony export */   "ClipPathElement": () => (/* binding */ ClipPathElement),
/* harmony export */   "DefsElement": () => (/* binding */ DefsElement),
/* harmony export */   "DescElement": () => (/* binding */ DescElement),
/* harmony export */   "Document": () => (/* binding */ Document),
/* harmony export */   "Element": () => (/* binding */ Element),
/* harmony export */   "EllipseElement": () => (/* binding */ EllipseElement),
/* harmony export */   "FeColorMatrixElement": () => (/* binding */ FeColorMatrixElement),
/* harmony export */   "FeCompositeElement": () => (/* binding */ FeCompositeElement),
/* harmony export */   "FeDropShadowElement": () => (/* binding */ FeDropShadowElement),
/* harmony export */   "FeGaussianBlurElement": () => (/* binding */ FeGaussianBlurElement),
/* harmony export */   "FeMorphologyElement": () => (/* binding */ FeMorphologyElement),
/* harmony export */   "FilterElement": () => (/* binding */ FilterElement),
/* harmony export */   "Font": () => (/* binding */ Font),
/* harmony export */   "FontElement": () => (/* binding */ FontElement),
/* harmony export */   "FontFaceElement": () => (/* binding */ FontFaceElement),
/* harmony export */   "GElement": () => (/* binding */ GElement),
/* harmony export */   "GlyphElement": () => (/* binding */ GlyphElement),
/* harmony export */   "GradientElement": () => (/* binding */ GradientElement),
/* harmony export */   "ImageElement": () => (/* binding */ ImageElement),
/* harmony export */   "LineElement": () => (/* binding */ LineElement),
/* harmony export */   "LinearGradientElement": () => (/* binding */ LinearGradientElement),
/* harmony export */   "MarkerElement": () => (/* binding */ MarkerElement),
/* harmony export */   "MaskElement": () => (/* binding */ MaskElement),
/* harmony export */   "Matrix": () => (/* binding */ Matrix),
/* harmony export */   "MissingGlyphElement": () => (/* binding */ MissingGlyphElement),
/* harmony export */   "Mouse": () => (/* binding */ Mouse),
/* harmony export */   "PSEUDO_ZERO": () => (/* binding */ PSEUDO_ZERO),
/* harmony export */   "Parser": () => (/* binding */ Parser),
/* harmony export */   "PathElement": () => (/* binding */ PathElement),
/* harmony export */   "PathParser": () => (/* binding */ PathParser),
/* harmony export */   "PatternElement": () => (/* binding */ PatternElement),
/* harmony export */   "Point": () => (/* binding */ Point),
/* harmony export */   "PolygonElement": () => (/* binding */ PolygonElement),
/* harmony export */   "PolylineElement": () => (/* binding */ PolylineElement),
/* harmony export */   "Property": () => (/* binding */ Property),
/* harmony export */   "QB1": () => (/* binding */ QB1),
/* harmony export */   "QB2": () => (/* binding */ QB2),
/* harmony export */   "QB3": () => (/* binding */ QB3),
/* harmony export */   "RadialGradientElement": () => (/* binding */ RadialGradientElement),
/* harmony export */   "RectElement": () => (/* binding */ RectElement),
/* harmony export */   "RenderedElement": () => (/* binding */ RenderedElement),
/* harmony export */   "Rotate": () => (/* binding */ Rotate),
/* harmony export */   "SVGElement": () => (/* binding */ SVGElement),
/* harmony export */   "SVGFontLoader": () => (/* binding */ SVGFontLoader),
/* harmony export */   "Scale": () => (/* binding */ Scale),
/* harmony export */   "Screen": () => (/* binding */ Screen),
/* harmony export */   "Skew": () => (/* binding */ Skew),
/* harmony export */   "SkewX": () => (/* binding */ SkewX),
/* harmony export */   "SkewY": () => (/* binding */ SkewY),
/* harmony export */   "StopElement": () => (/* binding */ StopElement),
/* harmony export */   "StyleElement": () => (/* binding */ StyleElement),
/* harmony export */   "SymbolElement": () => (/* binding */ SymbolElement),
/* harmony export */   "TRefElement": () => (/* binding */ TRefElement),
/* harmony export */   "TSpanElement": () => (/* binding */ TSpanElement),
/* harmony export */   "TextElement": () => (/* binding */ TextElement),
/* harmony export */   "TextPathElement": () => (/* binding */ TextPathElement),
/* harmony export */   "TitleElement": () => (/* binding */ TitleElement),
/* harmony export */   "Transform": () => (/* binding */ Transform),
/* harmony export */   "Translate": () => (/* binding */ Translate),
/* harmony export */   "UnknownElement": () => (/* binding */ UnknownElement),
/* harmony export */   "UseElement": () => (/* binding */ UseElement),
/* harmony export */   "ViewPort": () => (/* binding */ ViewPort),
/* harmony export */   "compressSpaces": () => (/* binding */ compressSpaces),
/* harmony export */   "getSelectorSpecificity": () => (/* binding */ getSelectorSpecificity),
/* harmony export */   "normalizeAttributeName": () => (/* binding */ normalizeAttributeName),
/* harmony export */   "normalizeColor": () => (/* binding */ normalizeColor),
/* harmony export */   "parseExternalUrl": () => (/* binding */ parseExternalUrl),
/* harmony export */   "presets": () => (/* binding */ index),
/* harmony export */   "toNumbers": () => (/* binding */ toNumbers),
/* harmony export */   "trimLeft": () => (/* binding */ trimLeft),
/* harmony export */   "trimRight": () => (/* binding */ trimRight),
/* harmony export */   "vectorMagnitude": () => (/* binding */ vectorMagnitude),
/* harmony export */   "vectorsAngle": () => (/* binding */ vectorsAngle),
/* harmony export */   "vectorsRatio": () => (/* binding */ vectorsRatio)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3066);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3164);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3165);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3180);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3182);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3186);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3193);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3196);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3197);
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3200);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3201);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(737);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3204);
/* harmony import */ var rgbcolor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3208);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3209);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3210);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3211);
/* harmony import */ var svg_pathdata__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3213);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3214);
/* harmony import */ var stackblur_canvas__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3215);
/* provided dependency */ var process = __webpack_require__(443)["process"];





















/**
 * Options preset for `OffscreenCanvas`.
 * @param config - Preset requirements.
 * @param config.DOMParser - XML/HTML parser from string into DOM Document.
 * @returns Preset object.
 */
function offscreen() {
  var {
    DOMParser: DOMParserFallback
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var preset = {
    window: null,
    ignoreAnimation: true,
    ignoreMouse: true,
    DOMParser: DOMParserFallback,

    createCanvas(width, height) {
      return new OffscreenCanvas(width, height);
    },

    createImage(url) {
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
        var response = yield fetch(url);
        var blob = yield response.blob();
        var img = yield createImageBitmap(blob);
        return img;
      })();
    }

  };

  if (typeof DOMParser !== 'undefined' || typeof DOMParserFallback === 'undefined') {
    Reflect.deleteProperty(preset, 'DOMParser');
  }

  return preset;
}

/**
 * Options preset for `node-canvas`.
 * @param config - Preset requirements.
 * @param config.DOMParser - XML/HTML parser from string into DOM Document.
 * @param config.canvas - `node-canvas` exports.
 * @param config.fetch - WHATWG-compatible `fetch` function.
 * @returns Preset object.
 */
function node(_ref) {
  var {
    DOMParser,
    canvas,
    fetch
  } = _ref;
  return {
    window: null,
    ignoreAnimation: true,
    ignoreMouse: true,
    DOMParser,
    fetch,
    createCanvas: canvas.createCanvas,
    createImage: canvas.loadImage
  };
}

var index = /*#__PURE__*/Object.freeze({
	__proto__: null,
	offscreen: offscreen,
	node: node
});

/**
 * HTML-safe compress white-spaces.
 * @param str - String to compress.
 * @returns String.
 */
function compressSpaces(str) {
  return str.replace(/(?!\u3000)\s+/gm, ' ');
}
/**
 * HTML-safe left trim.
 * @param str - String to trim.
 * @returns String.
 */

function trimLeft(str) {
  return str.replace(/^[\n \t]+/, '');
}
/**
 * HTML-safe right trim.
 * @param str - String to trim.
 * @returns String.
 */

function trimRight(str) {
  return str.replace(/[\n \t]+$/, '');
}
/**
 * String to numbers array.
 * @param str - Numbers string.
 * @returns Numbers array.
 */

function toNumbers(str) {
  var matches = (str || '').match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
  return matches.map(parseFloat);
} // Microsoft Edge fix

var allUppercase = /^[A-Z-]+$/;
/**
 * Normalize attribute name.
 * @param name - Attribute name.
 * @returns Normalized attribute name.
 */

function normalizeAttributeName(name) {
  if (allUppercase.test(name)) {
    return name.toLowerCase();
  }

  return name;
}
/**
 * Parse external URL.
 * @param url - CSS url string.
 * @returns Parsed URL.
 */

function parseExternalUrl(url) {
  //                      single quotes [2]
  //                      v         double quotes [3]
  //                      v         v         no quotes [4]
  //                      v         v         v
  var urlMatch = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(url) || [];
  return urlMatch[2] || urlMatch[3] || urlMatch[4];
}
/**
 * Transform floats to integers in rgb colors.
 * @param color - Color to normalize.
 * @returns Normalized color.
 */

function normalizeColor(color) {
  if (!color.startsWith('rgb')) {
    return color;
  }

  var rgbParts = 3;
  var normalizedColor = color.replace(/\d+(\.\d+)?/g, (num, isFloat) => rgbParts-- && isFloat ? String(Math.round(parseFloat(num))) : num);
  return normalizedColor;
}

// slightly modified version of https://github.com/keeganstreet/specificity/blob/master/specificity.js
var attributeRegex = /(\[[^\]]+\])/g;
var idRegex = /(#[^\s+>~.[:]+)/g;
var classRegex = /(\.[^\s+>~.[:]+)/g;
var pseudoElementRegex = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi;
var pseudoClassWithBracketsRegex = /(:[\w-]+\([^)]*\))/gi;
var pseudoClassRegex = /(:[^\s+>~.[:]+)/g;
var elementRegex = /([^\s+>~.[:]+)/g;

function findSelectorMatch(selector, regex) {
  var matches = regex.exec(selector);

  if (!matches) {
    return [selector, 0];
  }

  return [selector.replace(regex, ' '), matches.length];
}
/**
 * Measure selector specificity.
 * @param selector - Selector to measure.
 * @returns Specificity.
 */


function getSelectorSpecificity(selector) {
  var specificity = [0, 0, 0];
  var currentSelector = selector.replace(/:not\(([^)]*)\)/g, '     $1 ').replace(/{[\s\S]*/gm, ' ');
  var delta = 0;
  [currentSelector, delta] = findSelectorMatch(currentSelector, attributeRegex);
  specificity[1] += delta;
  [currentSelector, delta] = findSelectorMatch(currentSelector, idRegex);
  specificity[0] += delta;
  [currentSelector, delta] = findSelectorMatch(currentSelector, classRegex);
  specificity[1] += delta;
  [currentSelector, delta] = findSelectorMatch(currentSelector, pseudoElementRegex);
  specificity[2] += delta;
  [currentSelector, delta] = findSelectorMatch(currentSelector, pseudoClassWithBracketsRegex);
  specificity[1] += delta;
  [currentSelector, delta] = findSelectorMatch(currentSelector, pseudoClassRegex);
  specificity[1] += delta;
  currentSelector = currentSelector.replace(/[*\s+>~]/g, ' ').replace(/[#.]/g, ' ');
  [currentSelector, delta] = findSelectorMatch(currentSelector, elementRegex); // lgtm [js/useless-assignment-to-local]

  specificity[2] += delta;
  return specificity.join('');
}

var PSEUDO_ZERO = .00000001;
/**
 * Vector magnitude.
 * @param v
 * @returns Number result.
 */

function vectorMagnitude(v) {
  return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
}
/**
 * Ratio between two vectors.
 * @param u
 * @param v
 * @returns Number result.
 */

function vectorsRatio(u, v) {
  return (u[0] * v[0] + u[1] * v[1]) / (vectorMagnitude(u) * vectorMagnitude(v));
}
/**
 * Angle between two vectors.
 * @param u
 * @param v
 * @returns Number result.
 */

function vectorsAngle(u, v) {
  return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vectorsRatio(u, v));
}
function CB1(t) {
  return t * t * t;
}
function CB2(t) {
  return 3 * t * t * (1 - t);
}
function CB3(t) {
  return 3 * t * (1 - t) * (1 - t);
}
function CB4(t) {
  return (1 - t) * (1 - t) * (1 - t);
}
function QB1(t) {
  return t * t;
}
function QB2(t) {
  return 2 * t * (1 - t);
}
function QB3(t) {
  return (1 - t) * (1 - t);
}

class Property {
  constructor(document, name, value) {
    this.document = document;
    this.name = name;
    this.value = value;
    this.isNormalizedColor = false;
  }

  static empty(document) {
    return new Property(document, 'EMPTY', '');
  }

  split() {
    var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
    var {
      document,
      name
    } = this;
    return compressSpaces(this.getString()).trim().split(separator).map(value => new Property(document, name, value));
  }

  hasValue(zeroIsValue) {
    var {
      value
    } = this;
    return value !== null && value !== '' && (zeroIsValue || value !== 0) && typeof value !== 'undefined';
  }

  isString(regexp) {
    var {
      value
    } = this;
    var result = typeof value === 'string';

    if (!result || !regexp) {
      return result;
    }

    return regexp.test(value);
  }

  isUrlDefinition() {
    return this.isString(/^url\(/);
  }

  isPixels() {
    if (!this.hasValue()) {
      return false;
    }

    var asString = this.getString();

    switch (true) {
      case asString.endsWith('px'):
      case /^[0-9]+$/.test(asString):
        return true;

      default:
        return false;
    }
  }

  setValue(value) {
    this.value = value;
    return this;
  }

  getValue(def) {
    if (typeof def === 'undefined' || this.hasValue()) {
      return this.value;
    }

    return def;
  }

  getNumber(def) {
    if (!this.hasValue()) {
      if (typeof def === 'undefined') {
        return 0;
      }

      return parseFloat(def);
    }

    var {
      value
    } = this;
    var n = parseFloat(value);

    if (this.isString(/%$/)) {
      n /= 100.0;
    }

    return n;
  }

  getString(def) {
    if (typeof def === 'undefined' || this.hasValue()) {
      return typeof this.value === 'undefined' ? '' : String(this.value);
    }

    return String(def);
  }

  getColor(def) {
    var color = this.getString(def);

    if (this.isNormalizedColor) {
      return color;
    }

    this.isNormalizedColor = true;
    color = normalizeColor(color);
    this.value = color;
    return color;
  }

  getDpi() {
    return 96.0; // TODO: compute?
  }

  getRem() {
    return this.document.rootEmSize;
  }

  getEm() {
    return this.document.emSize;
  }

  getUnits() {
    return this.getString().replace(/[0-9.-]/g, '');
  }

  getPixels(axisOrIsFontSize) {
    var processPercent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!this.hasValue()) {
      return 0;
    }

    var [axis, isFontSize] = typeof axisOrIsFontSize === 'boolean' ? [undefined, axisOrIsFontSize] : [axisOrIsFontSize];
    var {
      viewPort
    } = this.document.screen;

    switch (true) {
      case this.isString(/vmin$/):
        return this.getNumber() / 100.0 * Math.min(viewPort.computeSize('x'), viewPort.computeSize('y'));

      case this.isString(/vmax$/):
        return this.getNumber() / 100.0 * Math.max(viewPort.computeSize('x'), viewPort.computeSize('y'));

      case this.isString(/vw$/):
        return this.getNumber() / 100.0 * viewPort.computeSize('x');

      case this.isString(/vh$/):
        return this.getNumber() / 100.0 * viewPort.computeSize('y');

      case this.isString(/rem$/):
        return this.getNumber() * this.getRem();

      case this.isString(/em$/):
        return this.getNumber() * this.getEm();

      case this.isString(/ex$/):
        return this.getNumber() * this.getEm() / 2.0;

      case this.isString(/px$/):
        return this.getNumber();

      case this.isString(/pt$/):
        return this.getNumber() * this.getDpi() * (1.0 / 72.0);

      case this.isString(/pc$/):
        return this.getNumber() * 15;

      case this.isString(/cm$/):
        return this.getNumber() * this.getDpi() / 2.54;

      case this.isString(/mm$/):
        return this.getNumber() * this.getDpi() / 25.4;

      case this.isString(/in$/):
        return this.getNumber() * this.getDpi();

      case this.isString(/%$/) && isFontSize:
        return this.getNumber() * this.getEm();

      case this.isString(/%$/):
        return this.getNumber() * viewPort.computeSize(axis);

      default:
        {
          var n = this.getNumber();

          if (processPercent && n < 1.0) {
            return n * viewPort.computeSize(axis);
          }

          return n;
        }
    }
  }

  getMilliseconds() {
    if (!this.hasValue()) {
      return 0;
    }

    if (this.isString(/ms$/)) {
      return this.getNumber();
    }

    return this.getNumber() * 1000;
  }

  getRadians() {
    if (!this.hasValue()) {
      return 0;
    }

    switch (true) {
      case this.isString(/deg$/):
        return this.getNumber() * (Math.PI / 180.0);

      case this.isString(/grad$/):
        return this.getNumber() * (Math.PI / 200.0);

      case this.isString(/rad$/):
        return this.getNumber();

      default:
        return this.getNumber() * (Math.PI / 180.0);
    }
  }

  getDefinition() {
    var asString = this.getString();
    var name = /#([^)'"]+)/.exec(asString);

    if (name) {
      name = name[1];
    }

    if (!name) {
      name = asString;
    }

    return this.document.definitions[name];
  }

  getFillStyleDefinition(element, opacity) {
    var def = this.getDefinition();

    if (!def) {
      return null;
    } // gradient


    if (typeof def.createGradient === 'function') {
      return def.createGradient(this.document.ctx, element, opacity);
    } // pattern


    if (typeof def.createPattern === 'function') {
      if (def.getHrefAttribute().hasValue()) {
        var patternTransform = def.getAttribute('patternTransform');
        def = def.getHrefAttribute().getDefinition();

        if (patternTransform.hasValue()) {
          def.getAttribute('patternTransform', true).setValue(patternTransform.value);
        }
      }

      return def.createPattern(this.document.ctx, element, opacity);
    }

    return null;
  }

  getTextBaseline() {
    if (!this.hasValue()) {
      return null;
    }

    return Property.textBaselineMapping[this.getString()];
  }

  addOpacity(opacity) {
    var value = this.getColor();
    var len = value.length;
    var commas = 0; // Simulate old RGBColor version, which can't parse rgba.

    for (var i = 0; i < len; i++) {
      if (value[i] === ',') {
        commas++;
      }

      if (commas === 3) {
        break;
      }
    }

    if (opacity.hasValue() && this.isString() && commas !== 3) {
      var color = new rgbcolor__WEBPACK_IMPORTED_MODULE_13__(value);

      if (color.ok) {
        color.alpha = opacity.getNumber();
        value = color.toRGBA();
      }
    }

    return new Property(this.document, this.name, value);
  }

}
Property.textBaselineMapping = {
  'baseline': 'alphabetic',
  'before-edge': 'top',
  'text-before-edge': 'top',
  'middle': 'middle',
  'central': 'middle',
  'after-edge': 'bottom',
  'text-after-edge': 'bottom',
  'ideographic': 'ideographic',
  'alphabetic': 'alphabetic',
  'hanging': 'hanging',
  'mathematical': 'alphabetic'
};

class ViewPort {
  constructor() {
    this.viewPorts = [];
  }

  clear() {
    this.viewPorts = [];
  }

  setCurrent(width, height) {
    this.viewPorts.push({
      width,
      height
    });
  }

  removeCurrent() {
    this.viewPorts.pop();
  }

  getCurrent() {
    var {
      viewPorts
    } = this;
    return viewPorts[viewPorts.length - 1];
  }

  get width() {
    return this.getCurrent().width;
  }

  get height() {
    return this.getCurrent().height;
  }

  computeSize(d) {
    if (typeof d === 'number') {
      return d;
    }

    if (d === 'x') {
      return this.width;
    }

    if (d === 'y') {
      return this.height;
    }

    return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
  }

}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static parse(point) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var [x = defaultValue, y = defaultValue] = toNumbers(point);
    return new Point(x, y);
  }

  static parseScale(scale) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var [x = defaultValue, y = x] = toNumbers(scale);
    return new Point(x, y);
  }

  static parsePath(path) {
    var points = toNumbers(path);
    var len = points.length;
    var pathPoints = [];

    for (var i = 0; i < len; i += 2) {
      pathPoints.push(new Point(points[i], points[i + 1]));
    }

    return pathPoints;
  }

  angleTo(point) {
    return Math.atan2(point.y - this.y, point.x - this.x);
  }

  applyTransform(transform) {
    var {
      x,
      y
    } = this;
    var xp = x * transform[0] + y * transform[2] + transform[4];
    var yp = x * transform[1] + y * transform[3] + transform[5];
    this.x = xp;
    this.y = yp;
  }

}

class Mouse {
  constructor(screen) {
    this.screen = screen;
    this.working = false;
    this.events = [];
    this.eventElements = []; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

    this.onClick = this.onClick.bind(this); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

    this.onMouseMove = this.onMouseMove.bind(this);
  }

  isWorking() {
    return this.working;
  }

  start() {
    if (this.working) {
      return;
    }

    var {
      screen,
      onClick,
      onMouseMove
    } = this;
    var canvas = screen.ctx.canvas;
    canvas.onclick = onClick;
    canvas.onmousemove = onMouseMove;
    this.working = true;
  }

  stop() {
    if (!this.working) {
      return;
    }

    var canvas = this.screen.ctx.canvas;
    this.working = false;
    canvas.onclick = null;
    canvas.onmousemove = null;
  }

  hasEvents() {
    return this.working && this.events.length > 0;
  }

  runEvents() {
    if (!this.working) {
      return;
    }

    var {
      screen: document,
      events,
      eventElements
    } = this;
    var {
      style
    } = document.ctx.canvas;

    if (style) {
      style.cursor = '';
    }

    events.forEach((_ref, i) => {
      var {
        run
      } = _ref;
      var element = eventElements[i];

      while (element) {
        run(element);
        element = element.parent;
      }
    }); // done running, clear

    this.events = [];
    this.eventElements = [];
  }

  checkPath(element, ctx) {
    if (!this.working || !ctx) {
      return;
    }

    var {
      events,
      eventElements
    } = this;
    events.forEach((_ref2, i) => {
      var {
        x,
        y
      } = _ref2;

      if (!eventElements[i] && ctx.isPointInPath && ctx.isPointInPath(x, y)) {
        eventElements[i] = element;
      }
    });
  }

  checkBoundingBox(element, boundingBox) {
    if (!this.working || !boundingBox) {
      return;
    }

    var {
      events,
      eventElements
    } = this;
    events.forEach((_ref3, i) => {
      var {
        x,
        y
      } = _ref3;

      if (!eventElements[i] && boundingBox.isPointInBox(x, y)) {
        eventElements[i] = element;
      }
    });
  }

  mapXY(x, y) {
    var {
      window,
      ctx
    } = this.screen;
    var point = new Point(x, y);
    var element = ctx.canvas;

    while (element) {
      point.x -= element.offsetLeft;
      point.y -= element.offsetTop;
      element = element.offsetParent;
    }

    if (window.scrollX) {
      point.x += window.scrollX;
    }

    if (window.scrollY) {
      point.y += window.scrollY;
    }

    return point;
  }

  onClick(event) {
    var {
      x,
      y
    } = this.mapXY(event.clientX, event.clientY);
    this.events.push({
      type: 'onclick',
      x,
      y,

      run(eventTarget) {
        if (eventTarget.onClick) {
          eventTarget.onClick();
        }
      }

    });
  }

  onMouseMove(event) {
    var {
      x,
      y
    } = this.mapXY(event.clientX, event.clientY);
    this.events.push({
      type: 'onmousemove',
      x,
      y,

      run(eventTarget) {
        if (eventTarget.onMouseMove) {
          eventTarget.onMouseMove();
        }
      }

    });
  }

}

var defaultWindow = typeof window !== 'undefined' ? window : null;
var defaultFetch$1 = typeof fetch !== 'undefined' ? fetch.bind(undefined) // `fetch` depends on context: `someObject.fetch(...)` will throw error.
: null;
class Screen {
  constructor(ctx) {
    var {
      fetch = defaultFetch$1,
      window = defaultWindow
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.ctx = ctx;
    this.FRAMERATE = 30;
    this.MAX_VIRTUAL_PIXELS = 30000;
    this.CLIENT_WIDTH = 800;
    this.CLIENT_HEIGHT = 600;
    this.viewPort = new ViewPort();
    this.mouse = new Mouse(this);
    this.animations = [];
    this.waits = [];
    this.frameDuration = 0;
    this.isReadyLock = false;
    this.isFirstRender = true;
    this.intervalId = null;
    this.window = window;
    this.fetch = fetch;
  }

  wait(checker) {
    this.waits.push(checker);
  }

  ready() {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    if (!this.readyPromise) {
      return Promise.resolve();
    }

    return this.readyPromise;
  }

  isReady() {
    if (this.isReadyLock) {
      return true;
    }

    var isReadyLock = this.waits.every(_ => _());

    if (isReadyLock) {
      this.waits = [];

      if (this.resolveReady) {
        this.resolveReady();
      }
    }

    this.isReadyLock = isReadyLock;
    return isReadyLock;
  }

  setDefaults(ctx) {
    // initial values and defaults
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
  }

  setViewBox(_ref) {
    var {
      document,
      ctx,
      aspectRatio,
      width,
      desiredWidth,
      height,
      desiredHeight,
      minX = 0,
      minY = 0,
      refX,
      refY,
      clip = false,
      clipX = 0,
      clipY = 0
    } = _ref;
    // aspect ratio - http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
    var cleanAspectRatio = compressSpaces(aspectRatio).replace(/^defer\s/, ''); // ignore defer

    var [aspectRatioAlign, aspectRatioMeetOrSlice] = cleanAspectRatio.split(' ');
    var align = aspectRatioAlign || 'xMidYMid';
    var meetOrSlice = aspectRatioMeetOrSlice || 'meet'; // calculate scale

    var scaleX = width / desiredWidth;
    var scaleY = height / desiredHeight;
    var scaleMin = Math.min(scaleX, scaleY);
    var scaleMax = Math.max(scaleX, scaleY);
    var finalDesiredWidth = desiredWidth;
    var finalDesiredHeight = desiredHeight;

    if (meetOrSlice === 'meet') {
      finalDesiredWidth *= scaleMin;
      finalDesiredHeight *= scaleMin;
    }

    if (meetOrSlice === 'slice') {
      finalDesiredWidth *= scaleMax;
      finalDesiredHeight *= scaleMax;
    }

    var refXProp = new Property(document, 'refX', refX);
    var refYProp = new Property(document, 'refY', refY);
    var hasRefs = refXProp.hasValue() && refYProp.hasValue();

    if (hasRefs) {
      ctx.translate(-scaleMin * refXProp.getPixels('x'), -scaleMin * refYProp.getPixels('y'));
    }

    if (clip) {
      var scaledClipX = scaleMin * clipX;
      var scaledClipY = scaleMin * clipY;
      ctx.beginPath();
      ctx.moveTo(scaledClipX, scaledClipY);
      ctx.lineTo(width, scaledClipY);
      ctx.lineTo(width, height);
      ctx.lineTo(scaledClipX, height);
      ctx.closePath();
      ctx.clip();
    }

    if (!hasRefs) {
      var isMeetMinY = meetOrSlice === 'meet' && scaleMin === scaleY;
      var isSliceMaxY = meetOrSlice === 'slice' && scaleMax === scaleY;
      var isMeetMinX = meetOrSlice === 'meet' && scaleMin === scaleX;
      var isSliceMaxX = meetOrSlice === 'slice' && scaleMax === scaleX;

      if (align.startsWith('xMid') && (isMeetMinY || isSliceMaxY)) {
        ctx.translate(width / 2.0 - finalDesiredWidth / 2.0, 0);
      }

      if (align.endsWith('YMid') && (isMeetMinX || isSliceMaxX)) {
        ctx.translate(0, height / 2.0 - finalDesiredHeight / 2.0);
      }

      if (align.startsWith('xMax') && (isMeetMinY || isSliceMaxY)) {
        ctx.translate(width - finalDesiredWidth, 0);
      }

      if (align.endsWith('YMax') && (isMeetMinX || isSliceMaxX)) {
        ctx.translate(0, height - finalDesiredHeight);
      }
    } // scale


    switch (true) {
      case align === 'none':
        ctx.scale(scaleX, scaleY);
        break;

      case meetOrSlice === 'meet':
        ctx.scale(scaleMin, scaleMin);
        break;

      case meetOrSlice === 'slice':
        ctx.scale(scaleMax, scaleMax);
        break;
    } // translate


    ctx.translate(-minX, -minY);
  }

  start(element) {
    var {
      enableRedraw = false,
      ignoreMouse = false,
      ignoreAnimation = false,
      ignoreDimensions = false,
      ignoreClear = false,
      forceRedraw,
      scaleWidth,
      scaleHeight,
      offsetX,
      offsetY
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var {
      FRAMERATE,
      mouse
    } = this;
    var frameDuration = 1000 / FRAMERATE;
    this.frameDuration = frameDuration;
    this.readyPromise = new Promise(resolve => {
      this.resolveReady = resolve;
    });

    if (this.isReady()) {
      this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
    }

    if (!enableRedraw) {
      return;
    }

    var now = Date.now();
    var then = now;
    var delta = 0;

    var tick = () => {
      now = Date.now();
      delta = now - then;

      if (delta >= frameDuration) {
        then = now - delta % frameDuration;

        if (this.shouldUpdate(ignoreAnimation, forceRedraw)) {
          this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
          mouse.runEvents();
        }
      }

      this.intervalId = raf__WEBPACK_IMPORTED_MODULE_11__(tick);
    };

    if (!ignoreMouse) {
      mouse.start();
    }

    this.intervalId = raf__WEBPACK_IMPORTED_MODULE_11__(tick);
  }

  stop() {
    if (this.intervalId) {
      raf__WEBPACK_IMPORTED_MODULE_11__.cancel(this.intervalId);
      this.intervalId = null;
    }

    this.mouse.stop();
  }

  shouldUpdate(ignoreAnimation, forceRedraw) {
    // need update from animations?
    if (!ignoreAnimation) {
      var {
        frameDuration
      } = this;
      var shouldUpdate = this.animations.reduce((shouldUpdate, animation) => animation.update(frameDuration) || shouldUpdate, false);

      if (shouldUpdate) {
        return true;
      }
    } // need update from redraw?


    if (typeof forceRedraw === 'function' && forceRedraw()) {
      return true;
    }

    if (!this.isReadyLock && this.isReady()) {
      return true;
    } // need update from mouse events?


    if (this.mouse.hasEvents()) {
      return true;
    }

    return false;
  }

  render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY) {
    var {
      CLIENT_WIDTH,
      CLIENT_HEIGHT,
      viewPort,
      ctx,
      isFirstRender
    } = this;
    var canvas = ctx.canvas;
    viewPort.clear();

    if (canvas.width && canvas.height) {
      viewPort.setCurrent(canvas.width, canvas.height);
    } else {
      viewPort.setCurrent(CLIENT_WIDTH, CLIENT_HEIGHT);
    }

    var widthStyle = element.getStyle('width');
    var heightStyle = element.getStyle('height');

    if (!ignoreDimensions && (isFirstRender || typeof scaleWidth !== 'number' && typeof scaleHeight !== 'number')) {
      // set canvas size
      if (widthStyle.hasValue()) {
        canvas.width = widthStyle.getPixels('x');

        if (canvas.style) {
          canvas.style.width = "".concat(canvas.width, "px");
        }
      }

      if (heightStyle.hasValue()) {
        canvas.height = heightStyle.getPixels('y');

        if (canvas.style) {
          canvas.style.height = "".concat(canvas.height, "px");
        }
      }
    }

    var cWidth = canvas.clientWidth || canvas.width;
    var cHeight = canvas.clientHeight || canvas.height;

    if (ignoreDimensions && widthStyle.hasValue() && heightStyle.hasValue()) {
      cWidth = widthStyle.getPixels('x');
      cHeight = heightStyle.getPixels('y');
    }

    viewPort.setCurrent(cWidth, cHeight);

    if (typeof offsetX === 'number') {
      element.getAttribute('x', true).setValue(offsetX);
    }

    if (typeof offsetY === 'number') {
      element.getAttribute('y', true).setValue(offsetY);
    }

    if (typeof scaleWidth === 'number' || typeof scaleHeight === 'number') {
      var viewBox = toNumbers(element.getAttribute('viewBox').getString());
      var xRatio = 0;
      var yRatio = 0;

      if (typeof scaleWidth === 'number') {
        var _widthStyle = element.getStyle('width');

        if (_widthStyle.hasValue()) {
          xRatio = _widthStyle.getPixels('x') / scaleWidth;
        } else if (!isNaN(viewBox[2])) {
          xRatio = viewBox[2] / scaleWidth;
        }
      }

      if (typeof scaleHeight === 'number') {
        var _heightStyle = element.getStyle('height');

        if (_heightStyle.hasValue()) {
          yRatio = _heightStyle.getPixels('y') / scaleHeight;
        } else if (!isNaN(viewBox[3])) {
          yRatio = viewBox[3] / scaleHeight;
        }
      }

      if (!xRatio) {
        xRatio = yRatio;
      }

      if (!yRatio) {
        yRatio = xRatio;
      }

      element.getAttribute('width', true).setValue(scaleWidth);
      element.getAttribute('height', true).setValue(scaleHeight);
      var transformStyle = element.getStyle('transform', true, true);
      transformStyle.setValue("".concat(transformStyle.getString(), " scale(").concat(1.0 / xRatio, ", ").concat(1.0 / yRatio, ")"));
    } // clear and render


    if (!ignoreClear) {
      ctx.clearRect(0, 0, cWidth, cHeight);
    }

    element.render(ctx);

    if (isFirstRender) {
      this.isFirstRender = false;
    }
  }

}
Screen.defaultWindow = defaultWindow;
Screen.defaultFetch = defaultFetch$1;

var {
  defaultFetch
} = Screen;
var DefaultDOMParser = typeof DOMParser !== 'undefined' ? DOMParser : null;
class Parser {
  constructor() {
    var {
      fetch = defaultFetch,
      DOMParser = DefaultDOMParser
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.fetch = fetch;
    this.DOMParser = DOMParser;
  }

  parse(resource) {
    var _this = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      if (resource.startsWith('<')) {
        return _this.parseFromString(resource);
      }

      return _this.load(resource);
    })();
  }

  parseFromString(xml) {
    var parser = new this.DOMParser();

    try {
      return this.checkDocument(parser.parseFromString(xml, 'image/svg+xml'));
    } catch (err) {
      return this.checkDocument(parser.parseFromString(xml, 'text/xml'));
    }
  }

  checkDocument(document) {
    var parserError = document.getElementsByTagName('parsererror')[0];

    if (parserError) {
      throw new Error(parserError.textContent);
    }

    return document;
  }

  load(url) {
    var _this2 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      var response = yield _this2.fetch(url);
      var xml = yield response.text();
      return _this2.parseFromString(xml);
    })();
  }

}

class Translate {
  constructor(_, point) {
    this.type = 'translate';
    this.point = null;
    this.point = Point.parse(point);
  }

  apply(ctx) {
    var {
      x,
      y
    } = this.point;
    ctx.translate(x || 0.0, y || 0.0);
  }

  unapply(ctx) {
    var {
      x,
      y
    } = this.point;
    ctx.translate(-1.0 * x || 0.0, -1.0 * y || 0.0);
  }

  applyToPoint(point) {
    var {
      x,
      y
    } = this.point;
    point.applyTransform([1, 0, 0, 1, x || 0.0, y || 0.0]);
  }

}

class Rotate {
  constructor(document, rotate, transformOrigin) {
    this.type = 'rotate';
    this.angle = null;
    this.originX = null;
    this.originY = null;
    this.cx = 0;
    this.cy = 0;
    var numbers = toNumbers(rotate);
    this.angle = new Property(document, 'angle', numbers[0]);
    this.originX = transformOrigin[0];
    this.originY = transformOrigin[1];
    this.cx = numbers[1] || 0;
    this.cy = numbers[2] || 0;
  }

  apply(ctx) {
    var {
      cx,
      cy,
      originX,
      originY,
      angle
    } = this;
    var tx = cx + originX.getPixels('x');
    var ty = cy + originY.getPixels('y');
    ctx.translate(tx, ty);
    ctx.rotate(angle.getRadians());
    ctx.translate(-tx, -ty);
  }

  unapply(ctx) {
    var {
      cx,
      cy,
      originX,
      originY,
      angle
    } = this;
    var tx = cx + originX.getPixels('x');
    var ty = cy + originY.getPixels('y');
    ctx.translate(tx, ty);
    ctx.rotate(-1.0 * angle.getRadians());
    ctx.translate(-tx, -ty);
  }

  applyToPoint(point) {
    var {
      cx,
      cy,
      angle
    } = this;
    var rad = angle.getRadians();
    point.applyTransform([1, 0, 0, 1, cx || 0.0, cy || 0.0 // this.p.y
    ]);
    point.applyTransform([Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 0, 0]);
    point.applyTransform([1, 0, 0, 1, -cx || 0.0, -cy || 0.0 // -this.p.y
    ]);
  }

}

class Scale {
  constructor(_, scale, transformOrigin) {
    this.type = 'scale';
    this.scale = null;
    this.originX = null;
    this.originY = null;
    var scaleSize = Point.parseScale(scale); // Workaround for node-canvas

    if (scaleSize.x === 0 || scaleSize.y === 0) {
      scaleSize.x = PSEUDO_ZERO;
      scaleSize.y = PSEUDO_ZERO;
    }

    this.scale = scaleSize;
    this.originX = transformOrigin[0];
    this.originY = transformOrigin[1];
  }

  apply(ctx) {
    var {
      scale: {
        x,
        y
      },
      originX,
      originY
    } = this;
    var tx = originX.getPixels('x');
    var ty = originY.getPixels('y');
    ctx.translate(tx, ty);
    ctx.scale(x, y || x);
    ctx.translate(-tx, -ty);
  }

  unapply(ctx) {
    var {
      scale: {
        x,
        y
      },
      originX,
      originY
    } = this;
    var tx = originX.getPixels('x');
    var ty = originY.getPixels('y');
    ctx.translate(tx, ty);
    ctx.scale(1.0 / x, 1.0 / y || x);
    ctx.translate(-tx, -ty);
  }

  applyToPoint(point) {
    var {
      x,
      y
    } = this.scale;
    point.applyTransform([x || 0.0, 0, 0, y || 0.0, 0, 0]);
  }

}

class Matrix {
  constructor(_, matrix, transformOrigin) {
    this.type = 'matrix';
    this.matrix = [];
    this.originX = null;
    this.originY = null;
    this.matrix = toNumbers(matrix);
    this.originX = transformOrigin[0];
    this.originY = transformOrigin[1];
  }

  apply(ctx) {
    var {
      originX,
      originY,
      matrix
    } = this;
    var tx = originX.getPixels('x');
    var ty = originY.getPixels('y');
    ctx.translate(tx, ty);
    ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
    ctx.translate(-tx, -ty);
  }

  unapply(ctx) {
    var {
      originX,
      originY,
      matrix
    } = this;
    var a = matrix[0];
    var b = matrix[2];
    var c = matrix[4];
    var d = matrix[1];
    var e = matrix[3];
    var f = matrix[5];
    var g = 0.0;
    var h = 0.0;
    var i = 1.0;
    var det = 1 / (a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g));
    var tx = originX.getPixels('x');
    var ty = originY.getPixels('y');
    ctx.translate(tx, ty);
    ctx.transform(det * (e * i - f * h), det * (f * g - d * i), det * (c * h - b * i), det * (a * i - c * g), det * (b * f - c * e), det * (c * d - a * f));
    ctx.translate(-tx, -ty);
  }

  applyToPoint(point) {
    point.applyTransform(this.matrix);
  }

}

class Skew extends Matrix {
  constructor(document, skew, transformOrigin) {
    super(document, skew, transformOrigin);
    this.type = 'skew';
    this.angle = null;
    this.angle = new Property(document, 'angle', skew);
  }

}

class SkewX extends Skew {
  constructor(document, skew, transformOrigin) {
    super(document, skew, transformOrigin);
    this.type = 'skewX';
    this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0];
  }

}

class SkewY extends Skew {
  constructor(document, skew, transformOrigin) {
    super(document, skew, transformOrigin);
    this.type = 'skewY';
    this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0];
  }

}

function parseTransforms(transform) {
  return compressSpaces(transform).trim().replace(/\)([a-zA-Z])/g, ') $1').replace(/\)(\s?,\s?)/g, ') ').split(/\s(?=[a-z])/);
}

function parseTransform(transform) {
  var [type, value] = transform.split('(');
  return [type.trim(), value.trim().replace(')', '')];
}

class Transform {
  constructor(document, transform, transformOrigin) {
    this.document = document;
    this.transforms = [];
    var data = parseTransforms(transform);
    data.forEach(transform => {
      if (transform === 'none') {
        return;
      }

      var [type, value] = parseTransform(transform);
      var TransformType = Transform.transformTypes[type];

      if (typeof TransformType !== 'undefined') {
        this.transforms.push(new TransformType(this.document, value, transformOrigin));
      }
    });
  }

  static fromElement(document, element) {
    var transformStyle = element.getStyle('transform', false, true);
    var [transformOriginXProperty, transformOriginYProperty = transformOriginXProperty] = element.getStyle('transform-origin', false, true).split();
    var transformOrigin = [transformOriginXProperty, transformOriginYProperty];

    if (transformStyle.hasValue()) {
      return new Transform(document, transformStyle.getString(), transformOrigin);
    }

    return null;
  }

  apply(ctx) {
    var {
      transforms
    } = this;
    var len = transforms.length;

    for (var i = 0; i < len; i++) {
      transforms[i].apply(ctx);
    }
  }

  unapply(ctx) {
    var {
      transforms
    } = this;
    var len = transforms.length;

    for (var i = len - 1; i >= 0; i--) {
      transforms[i].unapply(ctx);
    }
  } // TODO: applyToPoint unused ... remove?


  applyToPoint(point) {
    var {
      transforms
    } = this;
    var len = transforms.length;

    for (var i = 0; i < len; i++) {
      transforms[i].applyToPoint(point);
    }
  }

}
Transform.transformTypes = {
  translate: Translate,
  rotate: Rotate,
  scale: Scale,
  matrix: Matrix,
  skewX: SkewX,
  skewY: SkewY
};

class Element {
  constructor(document, node) {
    var captureTextNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    this.document = document;
    this.node = node;
    this.captureTextNodes = captureTextNodes;
    this.attributes = {};
    this.styles = {};
    this.stylesSpecificity = {};
    this.animationFrozen = false;
    this.animationFrozenValue = '';
    this.parent = null;
    this.children = [];

    if (!node || node.nodeType !== 1) {
      // ELEMENT_NODE
      return;
    } // add attributes


    Array.from(node.attributes).forEach(attribute => {
      var nodeName = normalizeAttributeName(attribute.nodeName);
      this.attributes[nodeName] = new Property(document, nodeName, attribute.value);
    });
    this.addStylesFromStyleDefinition(); // add inline styles

    if (this.getAttribute('style').hasValue()) {
      var styles = this.getAttribute('style').getString().split(';').map(_ => _.trim());
      styles.forEach(style => {
        if (!style) {
          return;
        }

        var [name, value] = style.split(':').map(_ => _.trim());
        this.styles[name] = new Property(document, name, value);
      });
    }

    var {
      definitions
    } = document;
    var id = this.getAttribute('id'); // add id

    if (id.hasValue()) {
      if (!definitions[id.getString()]) {
        definitions[id.getString()] = this;
      }
    }

    Array.from(node.childNodes).forEach(childNode => {
      if (childNode.nodeType === 1) {
        this.addChild(childNode); // ELEMENT_NODE
      } else if (captureTextNodes && (childNode.nodeType === 3 || childNode.nodeType === 4)) {
        var textNode = document.createTextNode(childNode);

        if (textNode.getText().length > 0) {
          this.addChild(textNode); // TEXT_NODE
        }
      }
    });
  }

  getAttribute(name) {
    var createIfNotExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var attr = this.attributes[name];

    if (!attr && createIfNotExists) {
      var _attr = new Property(this.document, name, '');

      this.attributes[name] = _attr;
      return _attr;
    }

    return attr || Property.empty(this.document);
  }

  getHrefAttribute() {
    for (var key in this.attributes) {
      if (key === 'href' || key.endsWith(':href')) {
        return this.attributes[key];
      }
    }

    return Property.empty(this.document);
  }

  getStyle(name) {
    var createIfNotExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var skipAncestors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var style = this.styles[name];

    if (style) {
      return style;
    }

    var attr = this.getAttribute(name);

    if (attr !== null && attr !== void 0 && attr.hasValue()) {
      this.styles[name] = attr; // move up to me to cache

      return attr;
    }

    if (!skipAncestors) {
      var {
        parent
      } = this;

      if (parent) {
        var parentStyle = parent.getStyle(name);

        if (parentStyle !== null && parentStyle !== void 0 && parentStyle.hasValue()) {
          return parentStyle;
        }
      }
    }

    if (createIfNotExists) {
      var _style = new Property(this.document, name, '');

      this.styles[name] = _style;
      return _style;
    }

    return style || Property.empty(this.document);
  }

  render(ctx) {
    // don't render display=none
    // don't render visibility=hidden
    if (this.getStyle('display').getString() === 'none' || this.getStyle('visibility').getString() === 'hidden') {
      return;
    }

    ctx.save();

    if (this.getStyle('mask').hasValue()) {
      // mask
      var mask = this.getStyle('mask').getDefinition();

      if (mask) {
        this.applyEffects(ctx);
        mask.apply(ctx, this);
      }
    } else if (this.getStyle('filter').getValue('none') !== 'none') {
      // filter
      var filter = this.getStyle('filter').getDefinition();

      if (filter) {
        this.applyEffects(ctx);
        filter.apply(ctx, this);
      }
    } else {
      this.setContext(ctx);
      this.renderChildren(ctx);
      this.clearContext(ctx);
    }

    ctx.restore();
  }

  setContext(_) {// NO RENDER
  }

  applyEffects(ctx) {
    // transform
    var transform = Transform.fromElement(this.document, this);

    if (transform) {
      transform.apply(ctx);
    } // clip


    var clipPathStyleProp = this.getStyle('clip-path', false, true);

    if (clipPathStyleProp.hasValue()) {
      var clip = clipPathStyleProp.getDefinition();

      if (clip) {
        clip.apply(ctx);
      }
    }
  }

  clearContext(_) {// NO RENDER
  }

  renderChildren(ctx) {
    this.children.forEach(child => {
      child.render(ctx);
    });
  }

  addChild(childNode) {
    var child = childNode instanceof Element ? childNode : this.document.createElement(childNode);
    child.parent = this;

    if (!Element.ignoreChildTypes.includes(child.type)) {
      this.children.push(child);
    }
  }

  matchesSelector(selector) {
    var {
      node
    } = this;

    if (typeof node.matches === 'function') {
      return node.matches(selector);
    }

    var styleClasses = node.getAttribute('class');

    if (!styleClasses || styleClasses === '') {
      return false;
    }

    return styleClasses.split(' ').some(styleClass => ".".concat(styleClass) === selector);
  }

  addStylesFromStyleDefinition() {
    var {
      styles,
      stylesSpecificity
    } = this.document;

    for (var selector in styles) {
      if (!selector.startsWith('@') && this.matchesSelector(selector)) {
        var style = styles[selector];
        var specificity = stylesSpecificity[selector];

        if (style) {
          for (var name in style) {
            var existingSpecificity = this.stylesSpecificity[name];

            if (typeof existingSpecificity === 'undefined') {
              existingSpecificity = '000';
            }

            if (specificity >= existingSpecificity) {
              this.styles[name] = style[name];
              this.stylesSpecificity[name] = specificity;
            }
          }
        }
      }
    }
  }

  removeStyles(element, ignoreStyles) {
    var toRestore = ignoreStyles.reduce((toRestore, name) => {
      var styleProp = element.getStyle(name);

      if (!styleProp.hasValue()) {
        return toRestore;
      }

      var value = styleProp.getString();
      styleProp.setValue('');
      return [...toRestore, [name, value]];
    }, []);
    return toRestore;
  }

  restoreStyles(element, styles) {
    styles.forEach((_ref) => {
      var [name, value] = _ref;
      element.getStyle(name, true).setValue(value);
    });
  }

}
Element.ignoreChildTypes = ['title'];

class UnknownElement extends Element {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
  }

}

function wrapFontFamily(fontFamily) {
  var trimmed = fontFamily.trim();
  return /^('|")/.test(trimmed) ? trimmed : "\"".concat(trimmed, "\"");
}

function prepareFontFamily(fontFamily) {
  return typeof process === 'undefined' ? fontFamily : fontFamily.trim().split(',').map(wrapFontFamily).join(',');
}
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
 * @param fontStyle
 * @returns CSS font style.
 */


function prepareFontStyle(fontStyle) {
  if (!fontStyle) {
    return '';
  }

  var targetFontStyle = fontStyle.trim().toLowerCase();

  switch (targetFontStyle) {
    case 'normal':
    case 'italic':
    case 'oblique':
    case 'inherit':
    case 'initial':
    case 'unset':
      return targetFontStyle;

    default:
      if (/^oblique\s+(-|)\d+deg$/.test(targetFontStyle)) {
        return targetFontStyle;
      }

      return '';
  }
}
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
 * @param fontWeight
 * @returns CSS font weight.
 */


function prepareFontWeight(fontWeight) {
  if (!fontWeight) {
    return '';
  }

  var targetFontWeight = fontWeight.trim().toLowerCase();

  switch (targetFontWeight) {
    case 'normal':
    case 'bold':
    case 'lighter':
    case 'bolder':
    case 'inherit':
    case 'initial':
    case 'unset':
      return targetFontWeight;

    default:
      if (/^[\d.]+$/.test(targetFontWeight)) {
        return targetFontWeight;
      }

      return '';
  }
}

class Font {
  constructor(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) {
    var inheritFont = inherit ? typeof inherit === 'string' ? Font.parse(inherit) : inherit : {};
    this.fontFamily = fontFamily || inheritFont.fontFamily;
    this.fontSize = fontSize || inheritFont.fontSize;
    this.fontStyle = fontStyle || inheritFont.fontStyle;
    this.fontWeight = fontWeight || inheritFont.fontWeight;
    this.fontVariant = fontVariant || inheritFont.fontVariant;
  }

  static parse() {
    var font = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var inherit = arguments.length > 1 ? arguments[1] : undefined;
    var fontStyle = '';
    var fontVariant = '';
    var fontWeight = '';
    var fontSize = '';
    var fontFamily = '';
    var parts = compressSpaces(font).trim().split(' ');
    var set = {
      fontSize: false,
      fontStyle: false,
      fontWeight: false,
      fontVariant: false
    };
    parts.forEach(part => {
      switch (true) {
        case !set.fontStyle && Font.styles.includes(part):
          if (part !== 'inherit') {
            fontStyle = part;
          }

          set.fontStyle = true;
          break;

        case !set.fontVariant && Font.variants.includes(part):
          if (part !== 'inherit') {
            fontVariant = part;
          }

          set.fontStyle = true;
          set.fontVariant = true;
          break;

        case !set.fontWeight && Font.weights.includes(part):
          if (part !== 'inherit') {
            fontWeight = part;
          }

          set.fontStyle = true;
          set.fontVariant = true;
          set.fontWeight = true;
          break;

        case !set.fontSize:
          if (part !== 'inherit') {
            [fontSize] = part.split('/');
          }

          set.fontStyle = true;
          set.fontVariant = true;
          set.fontWeight = true;
          set.fontSize = true;
          break;

        default:
          if (part !== 'inherit') {
            fontFamily += part;
          }

      }
    });
    return new Font(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit);
  }

  toString() {
    return [prepareFontStyle(this.fontStyle), this.fontVariant, prepareFontWeight(this.fontWeight), this.fontSize, // Wrap fontFamily only on nodejs and only for canvas.ctx
    prepareFontFamily(this.fontFamily)].join(' ').trim();
  }

}
Font.styles = 'normal|italic|oblique|inherit';
Font.variants = 'normal|small-caps|inherit';
Font.weights = 'normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit';

class BoundingBox {
  constructor() {
    var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.NaN;
    var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.NaN;
    var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.NaN;
    var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Number.NaN;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.addPoint(x1, y1);
    this.addPoint(x2, y2);
  }

  get x() {
    return this.x1;
  }

  get y() {
    return this.y1;
  }

  get width() {
    return this.x2 - this.x1;
  }

  get height() {
    return this.y2 - this.y1;
  }

  addPoint(x, y) {
    if (typeof x !== 'undefined') {
      if (isNaN(this.x1) || isNaN(this.x2)) {
        this.x1 = x;
        this.x2 = x;
      }

      if (x < this.x1) {
        this.x1 = x;
      }

      if (x > this.x2) {
        this.x2 = x;
      }
    }

    if (typeof y !== 'undefined') {
      if (isNaN(this.y1) || isNaN(this.y2)) {
        this.y1 = y;
        this.y2 = y;
      }

      if (y < this.y1) {
        this.y1 = y;
      }

      if (y > this.y2) {
        this.y2 = y;
      }
    }
  }

  addX(x) {
    this.addPoint(x, null);
  }

  addY(y) {
    this.addPoint(null, y);
  }

  addBoundingBox(boundingBox) {
    if (!boundingBox) {
      return;
    }

    var {
      x1,
      y1,
      x2,
      y2
    } = boundingBox;
    this.addPoint(x1, y1);
    this.addPoint(x2, y2);
  }

  sumCubic(t, p0, p1, p2, p3) {
    return Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3;
  }

  bezierCurveAdd(forX, p0, p1, p2, p3) {
    var b = 6 * p0 - 12 * p1 + 6 * p2;
    var a = -3 * p0 + 9 * p1 - 9 * p2 + 3 * p3;
    var c = 3 * p1 - 3 * p0;

    if (a === 0) {
      if (b === 0) {
        return;
      }

      var t = -c / b;

      if (0 < t && t < 1) {
        if (forX) {
          this.addX(this.sumCubic(t, p0, p1, p2, p3));
        } else {
          this.addY(this.sumCubic(t, p0, p1, p2, p3));
        }
      }

      return;
    }

    var b2ac = Math.pow(b, 2) - 4 * c * a;

    if (b2ac < 0) {
      return;
    }

    var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);

    if (0 < t1 && t1 < 1) {
      if (forX) {
        this.addX(this.sumCubic(t1, p0, p1, p2, p3));
      } else {
        this.addY(this.sumCubic(t1, p0, p1, p2, p3));
      }
    }

    var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);

    if (0 < t2 && t2 < 1) {
      if (forX) {
        this.addX(this.sumCubic(t2, p0, p1, p2, p3));
      } else {
        this.addY(this.sumCubic(t2, p0, p1, p2, p3));
      }
    }
  } // from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html


  addBezierCurve(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
    this.addPoint(p0x, p0y);
    this.addPoint(p3x, p3y);
    this.bezierCurveAdd(true, p0x, p1x, p2x, p3x);
    this.bezierCurveAdd(false, p0y, p1y, p2y, p3y);
  }

  addQuadraticCurve(p0x, p0y, p1x, p1y, p2x, p2y) {
    var cp1x = p0x + 2 / 3 * (p1x - p0x); // CP1 = QP0 + 2/3 *(QP1-QP0)

    var cp1y = p0y + 2 / 3 * (p1y - p0y); // CP1 = QP0 + 2/3 *(QP1-QP0)

    var cp2x = cp1x + 1 / 3 * (p2x - p0x); // CP2 = CP1 + 1/3 *(QP2-QP0)

    var cp2y = cp1y + 1 / 3 * (p2y - p0y); // CP2 = CP1 + 1/3 *(QP2-QP0)

    this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y, cp2y, p2x, p2y);
  }

  isPointInBox(x, y) {
    var {
      x1,
      y1,
      x2,
      y2
    } = this;
    return x1 <= x && x <= x2 && y1 <= y && y <= y2;
  }

}

class PathParser extends svg_pathdata__WEBPACK_IMPORTED_MODULE_17__.SVGPathData {
  constructor(path) {
    super(path // Fix spaces after signs.
    .replace(/([+\-.])\s+/gm, '$1') // Remove invalid part.
    .replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ''));
    this.control = null;
    this.start = null;
    this.current = null;
    this.command = null;
    this.commands = this.commands;
    this.i = -1;
    this.previousCommand = null;
    this.points = [];
    this.angles = [];
  }

  reset() {
    this.i = -1;
    this.command = null;
    this.previousCommand = null;
    this.start = new Point(0, 0);
    this.control = new Point(0, 0);
    this.current = new Point(0, 0);
    this.points = [];
    this.angles = [];
  }

  isEnd() {
    var {
      i,
      commands
    } = this;
    return i >= commands.length - 1;
  }

  next() {
    var command = this.commands[++this.i];
    this.previousCommand = this.command;
    this.command = command;
    return command;
  }

  getPoint() {
    var xProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'x';
    var yProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'y';
    var point = new Point(this.command[xProp], this.command[yProp]);
    return this.makeAbsolute(point);
  }

  getAsControlPoint(xProp, yProp) {
    var point = this.getPoint(xProp, yProp);
    this.control = point;
    return point;
  }

  getAsCurrentPoint(xProp, yProp) {
    var point = this.getPoint(xProp, yProp);
    this.current = point;
    return point;
  }

  getReflectedControlPoint() {
    var previousCommand = this.previousCommand.type;

    if (previousCommand !== svg_pathdata__WEBPACK_IMPORTED_MODULE_17__.SVGPathData.CURVE_TO && previousCommand !== svg_pathdata__WEBPACK_IMPORTED_MODULE_17__.SVGPathData.SMOOTH_CURVE_TO && previousCommand !== svg_pathdata__WEBPACK_IMPORTED_MODULE_17__.SVGPathData.QUAD_TO && previousCommand !== svg_pathdata__WEBPACK_IMPORTED_MODULE_17__.SVGPathData.SMOOTH_QUAD_TO) {
      return this.current;
    } // reflect point


    var {
      current: {
        x: cx,
        y: cy
      },
      control: {
        x: ox,
        y: oy
      }
    } = this;
    var point = new Point(2 * cx - ox, 2 * cy - oy);
    return point;
  }

  makeAbsolute(point) {
    if (this.command.relative) {
      var {
        x,
        y
      } = this.current;
      point.x += x;
      point.y += y;
    }

    return point;
  }

  addMarker(point, from, priorTo) {
    var {
      points,
      angles
    } = this; // if the last angle isn't filled in because we didn't have this point yet ...

    if (priorTo && angles.length > 0 && !angles[angles.length - 1]) {
      angles[angles.length - 1] = points[points.length - 1].angleTo(priorTo);
    }

    this.addMarkerAngle(point, from ? from.angleTo(point) : null);
  }

  addMarkerAngle(point, angle) {
    this.points.push(point);
    this.angles.push(angle);
  }

  getMarkerPoints() {
    return this.points;
  }

  getMarkerAngles() {
    var {
      angles
    } = this;
    var len = angles.length;

    for (var i = 0; i < len; i++) {
      if (!angles[i]) {
        for (var j = i + 1; j < len; j++) {
          if (angles[j]) {
            angles[i] = angles[j];
            break;
          }
        }
      }
    }

    return angles;
  }

}

class RenderedElement extends Element {
  constructor() {
    super(...arguments);
    this.modifiedEmSizeStack = false;
  }

  calculateOpacity() {
    var opacity = 1.0; // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this

    var element = this;

    while (element) {
      var opacityStyle = element.getStyle('opacity', false, true); // no ancestors on style call

      if (opacityStyle.hasValue(true)) {
        opacity *= opacityStyle.getNumber();
      }

      element = element.parent;
    }

    return opacity;
  }

  setContext(ctx) {
    var fromMeasure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!fromMeasure) {
      // causes stack overflow when measuring text with gradients
      // fill
      var fillStyleProp = this.getStyle('fill');
      var fillOpacityStyleProp = this.getStyle('fill-opacity');
      var strokeStyleProp = this.getStyle('stroke');
      var strokeOpacityProp = this.getStyle('stroke-opacity');

      if (fillStyleProp.isUrlDefinition()) {
        var fillStyle = fillStyleProp.getFillStyleDefinition(this, fillOpacityStyleProp);

        if (fillStyle) {
          ctx.fillStyle = fillStyle;
        }
      } else if (fillStyleProp.hasValue()) {
        if (fillStyleProp.getString() === 'currentColor') {
          fillStyleProp.setValue(this.getStyle('color').getColor());
        }

        var _fillStyle = fillStyleProp.getColor();

        if (_fillStyle !== 'inherit') {
          ctx.fillStyle = _fillStyle === 'none' ? 'rgba(0,0,0,0)' : _fillStyle;
        }
      }

      if (fillOpacityStyleProp.hasValue()) {
        var _fillStyle2 = new Property(this.document, 'fill', ctx.fillStyle).addOpacity(fillOpacityStyleProp).getColor();

        ctx.fillStyle = _fillStyle2;
      } // stroke


      if (strokeStyleProp.isUrlDefinition()) {
        var strokeStyle = strokeStyleProp.getFillStyleDefinition(this, strokeOpacityProp);

        if (strokeStyle) {
          ctx.strokeStyle = strokeStyle;
        }
      } else if (strokeStyleProp.hasValue()) {
        if (strokeStyleProp.getString() === 'currentColor') {
          strokeStyleProp.setValue(this.getStyle('color').getColor());
        }

        var _strokeStyle = strokeStyleProp.getString();

        if (_strokeStyle !== 'inherit') {
          ctx.strokeStyle = _strokeStyle === 'none' ? 'rgba(0,0,0,0)' : _strokeStyle;
        }
      }

      if (strokeOpacityProp.hasValue()) {
        var _strokeStyle2 = new Property(this.document, 'stroke', ctx.strokeStyle).addOpacity(strokeOpacityProp).getString();

        ctx.strokeStyle = _strokeStyle2;
      }

      var strokeWidthStyleProp = this.getStyle('stroke-width');

      if (strokeWidthStyleProp.hasValue()) {
        var newLineWidth = strokeWidthStyleProp.getPixels();
        ctx.lineWidth = !newLineWidth ? PSEUDO_ZERO // browsers don't respect 0 (or node-canvas? :-)
        : newLineWidth;
      }

      var strokeLinecapStyleProp = this.getStyle('stroke-linecap');
      var strokeLinejoinStyleProp = this.getStyle('stroke-linejoin');
      var strokeMiterlimitProp = this.getStyle('stroke-miterlimit'); // NEED TEST
      // const pointOrderStyleProp = this.getStyle('paint-order');

      var strokeDasharrayStyleProp = this.getStyle('stroke-dasharray');
      var strokeDashoffsetProp = this.getStyle('stroke-dashoffset');

      if (strokeLinecapStyleProp.hasValue()) {
        ctx.lineCap = strokeLinecapStyleProp.getString();
      }

      if (strokeLinejoinStyleProp.hasValue()) {
        ctx.lineJoin = strokeLinejoinStyleProp.getString();
      }

      if (strokeMiterlimitProp.hasValue()) {
        ctx.miterLimit = strokeMiterlimitProp.getNumber();
      } // NEED TEST
      // if (pointOrderStyleProp.hasValue()) {
      // 	// ?
      // 	ctx.paintOrder = pointOrderStyleProp.getValue();
      // }


      if (strokeDasharrayStyleProp.hasValue() && strokeDasharrayStyleProp.getString() !== 'none') {
        var gaps = toNumbers(strokeDasharrayStyleProp.getString());

        if (typeof ctx.setLineDash !== 'undefined') {
          ctx.setLineDash(gaps);
        } else // @ts-expect-error Handle browser prefix.
          if (typeof ctx.webkitLineDash !== 'undefined') {
            // @ts-expect-error Handle browser prefix.
            ctx.webkitLineDash = gaps;
          } else // @ts-expect-error Handle browser prefix.
            if (typeof ctx.mozDash !== 'undefined' && !(gaps.length === 1 && gaps[0] === 0)) {
              // @ts-expect-error Handle browser prefix.
              ctx.mozDash = gaps;
            }

        var offset = strokeDashoffsetProp.getPixels();

        if (typeof ctx.lineDashOffset !== 'undefined') {
          ctx.lineDashOffset = offset;
        } else // @ts-expect-error Handle browser prefix.
          if (typeof ctx.webkitLineDashOffset !== 'undefined') {
            // @ts-expect-error Handle browser prefix.
            ctx.webkitLineDashOffset = offset;
          } else // @ts-expect-error Handle browser prefix.
            if (typeof ctx.mozDashOffset !== 'undefined') {
              // @ts-expect-error Handle browser prefix.
              ctx.mozDashOffset = offset;
            }
      }
    } // font


    this.modifiedEmSizeStack = false;

    if (typeof ctx.font !== 'undefined') {
      var fontStyleProp = this.getStyle('font');
      var fontStyleStyleProp = this.getStyle('font-style');
      var fontVariantStyleProp = this.getStyle('font-variant');
      var fontWeightStyleProp = this.getStyle('font-weight');
      var fontSizeStyleProp = this.getStyle('font-size');
      var fontFamilyStyleProp = this.getStyle('font-family');
      var font = new Font(fontStyleStyleProp.getString(), fontVariantStyleProp.getString(), fontWeightStyleProp.getString(), fontSizeStyleProp.hasValue() ? "".concat(fontSizeStyleProp.getPixels(true), "px") : '', fontFamilyStyleProp.getString(), Font.parse(fontStyleProp.getString(), ctx.font));
      fontStyleStyleProp.setValue(font.fontStyle);
      fontVariantStyleProp.setValue(font.fontVariant);
      fontWeightStyleProp.setValue(font.fontWeight);
      fontSizeStyleProp.setValue(font.fontSize);
      fontFamilyStyleProp.setValue(font.fontFamily);
      ctx.font = font.toString();

      if (fontSizeStyleProp.isPixels()) {
        this.document.emSize = fontSizeStyleProp.getPixels();
        this.modifiedEmSizeStack = true;
      }
    }

    if (!fromMeasure) {
      // effects
      this.applyEffects(ctx); // opacity

      ctx.globalAlpha = this.calculateOpacity();
    }
  }

  clearContext(ctx) {
    super.clearContext(ctx);

    if (this.modifiedEmSizeStack) {
      this.document.popEmSize();
    }
  }

}

class PathElement extends RenderedElement {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
    this.type = 'path';
    this.pathParser = null;
    this.pathParser = new PathParser(this.getAttribute('d').getString());
  }

  path(ctx) {
    var {
      pathParser
    } = this;
    var boundingBox = new BoundingBox();
    pathParser.reset();

    if (ctx) {
      ctx.beginPath();
    }

    while (!pathParser.isEnd()) {
      switch (pathParser.next().type) {
        case PathParser.MOVE_TO:
          this.pathM(ctx, boundingBox);
          break;

        case PathParser.LINE_TO:
          this.pathL(ctx, boundingBox);
          break;

        case PathParser.HORIZ_LINE_TO:
          this.pathH(ctx, boundingBox);
          break;

        case PathParser.VERT_LINE_TO:
          this.pathV(ctx, boundingBox);
          break;

        case PathParser.CURVE_TO:
          this.pathC(ctx, boundingBox);
          break;

        case PathParser.SMOOTH_CURVE_TO:
          this.pathS(ctx, boundingBox);
          break;

        case PathParser.QUAD_TO:
          this.pathQ(ctx, boundingBox);
          break;

        case PathParser.SMOOTH_QUAD_TO:
          this.pathT(ctx, boundingBox);
          break;

        case PathParser.ARC:
          this.pathA(ctx, boundingBox);
          break;

        case PathParser.CLOSE_PATH:
          this.pathZ(ctx, boundingBox);
          break;
      }
    }

    return boundingBox;
  }

  getBoundingBox(_) {
    return this.path();
  }

  getMarkers() {
    var {
      pathParser
    } = this;
    var points = pathParser.getMarkerPoints();
    var angles = pathParser.getMarkerAngles();
    var markers = points.map((point, i) => [point, angles[i]]);
    return markers;
  }

  renderChildren(ctx) {
    this.path(ctx);
    this.document.screen.mouse.checkPath(this, ctx);
    var fillRuleStyleProp = this.getStyle('fill-rule');

    if (ctx.fillStyle !== '') {
      if (fillRuleStyleProp.getString('inherit') !== 'inherit') {
        ctx.fill(fillRuleStyleProp.getString());
      } else {
        ctx.fill();
      }
    }

    if (ctx.strokeStyle !== '') {
      if (this.getAttribute('vector-effect').getString() === 'non-scaling-stroke') {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.stroke();
        ctx.restore();
      } else {
        ctx.stroke();
      }
    }

    var markers = this.getMarkers();

    if (markers) {
      var markersLastIndex = markers.length - 1;
      var markerStartStyleProp = this.getStyle('marker-start');
      var markerMidStyleProp = this.getStyle('marker-mid');
      var markerEndStyleProp = this.getStyle('marker-end');

      if (markerStartStyleProp.isUrlDefinition()) {
        var marker = markerStartStyleProp.getDefinition();
        var [point, angle] = markers[0];
        marker.render(ctx, point, angle);
      }

      if (markerMidStyleProp.isUrlDefinition()) {
        var _marker = markerMidStyleProp.getDefinition();

        for (var i = 1; i < markersLastIndex; i++) {
          var [_point, _angle] = markers[i];

          _marker.render(ctx, _point, _angle);
        }
      }

      if (markerEndStyleProp.isUrlDefinition()) {
        var _marker2 = markerEndStyleProp.getDefinition();

        var [_point2, _angle2] = markers[markersLastIndex];

        _marker2.render(ctx, _point2, _angle2);
      }
    }
  }

  static pathM(pathParser) {
    var point = pathParser.getAsCurrentPoint();
    pathParser.start = pathParser.current;
    return {
      point
    };
  }

  pathM(ctx, boundingBox) {
    var {
      pathParser
    } = this;
    var {
      point
    } = PathElement.pathM(pathParser);
    var {
      x,
      y
    } = point;
    pathParser.addMarker(point);
    boundingBox.addPoint(x, y);

    if (ctx) {
      ctx.moveTo(x, y);
    }
  }

  static pathL(pathParser) {
    var {
      current
    } = pathParser;
    var point = pathParser.getAsCurrentPoint();
    return {
      current,
      point
    };
  }

  pathL(ctx, boundingBox) {
    var {
      pathParser
    } = this;
    var {
      current,
      point
    } = PathElement.pathL(pathParser);
    var {
      x,
      y
    } = point;
    pathParser.addMarker(point, current);
    boundingBox.addPoint(x, y);

    if (ctx) {
      ctx.lineTo(x, y);
    }
  }

  static pathH(pathParser) {
    var {
      current,
      command
    } = pathParser;
    var point = new Point((command.relative ? current.x : 0) + command.x, current.y);
    pathParser.current = point;
    return {
      current,
      point
    };
  }

  pathH(ctx, boundingBox) {
    var {
      pathParser
    } = this;
    var {
      current,
      point
    } = PathElement.pathH(pathParser);
    var {
      x,
      y
    } = point;
    pathParser.addMarker(point, current);
    boundingBox.addPoint(x, y);

    if (ctx) {
      ctx.lineTo(x, y);
    }
  }

  static pathV(pathParser) {
    var {
      current,
      command
    } = pathParser;
    var point = new Point(current.x, (command.relative ? current.y : 0) + command.y);
    pathParser.current = point;
    return {
      current,
      point
    };
  }

  pathV(ctx, boundingBox) {
    var {
      pathParser
    } = this;
    var {
      current,
      point
    } = PathElement.pathV(pathParser);
    var {
      x,
      y
    } = point;
    pathParser.addMarker(point, current);
    boundingBox.addPoint(x, y);

    if (ctx) {
      ctx.lineTo(x, y);
    }
  }

  static pathC(pathParser) {
    var {
      current
    } = pathParser;
    var point = pathParser.getPoint('x1', 'y1');
    var controlPoint = pathParser.getAsControlPoint('x2', 'y2');
    var currentPoint = pathParser.getAsCurrentPoint();
    return {
      current,
      point,
      controlPoint,
      currentPoint
    };
  }

  pathC(ctx, boundingBox) {
    var {
      pathParser
    } = this;
    var {
      current,
      point,
      controlPoint,
      currentPoint
    } = PathElement.pathC(pathParser);
    pathParser.addMarker(currentPoint, controlPoint, point);
    boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);

    if (ctx) {
      ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
    }
  }

  static pathS(pathParser) {
    var {
      current
    } = pathParser;
    var point = pathParser.getReflectedControlPoint();
    var controlPoint = pathParser.getAsControlPoint('x2', 'y2');
    var currentPoint = pathParser.getAsCurrentPoint();
    return {
      current,
      point,
      controlPoint,
      currentPoint
    };
  }

  pathS(ctx, boundingBox) {
    var {
      pathParser
    } = this;
    var {
      current,
      point,
      controlPoint,
      currentPoint
    } = PathElement.pathS(pathParser);
    pathParser.addMarker(currentPoint, controlPoint, point);
    boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);

    if (ctx) {
      ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
    }
  }

  static pathQ(pathParser) {
    var {
      current
    } = pathParser;
    var controlPoint = pathParser.getAsControlPoint('x1', 'y1');
    var currentPoint = pathParser.getAsCurrentPoint();
    return {
      current,
      controlPoint,
      currentPoint
    };
  }

  pathQ(ctx, boundingBox) {
    var {
      pathParser
    } = this;
    var {
      current,
      controlPoint,
      currentPoint
    } = PathElement.pathQ(pathParser);
    pathParser.addMarker(currentPoint, controlPoint, controlPoint);
    boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);

    if (ctx) {
      ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
    }
  }

  static pathT(pathParser) {
    var {
      current
    } = pathParser;
    var controlPoint = pathParser.getReflectedControlPoint();
    pathParser.control = controlPoint;
    var currentPoint = pathParser.getAsCurrentPoint();
    return {
      current,
      controlPoint,
      currentPoint
    };
  }

  pathT(ctx, boundingBox) {
    var {
      pathParser
    } = this;
    var {
      current,
      controlPoint,
      currentPoint
    } = PathElement.pathT(pathParser);
    pathParser.addMarker(currentPoint, controlPoint, controlPoint);
    boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);

    if (ctx) {
      ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
    }
  }

  static pathA(pathParser) {
    var {
      current,
      command
    } = pathParser;
    var {
      rX,
      rY,
      xRot,
      lArcFlag,
      sweepFlag
    } = command;
    var xAxisRotation = xRot * (Math.PI / 180.0);
    var currentPoint = pathParser.getAsCurrentPoint(); // Conversion from endpoint to center parameterization
    // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
    // x1', y1'

    var currp = new Point(Math.cos(xAxisRotation) * (current.x - currentPoint.x) / 2.0 + Math.sin(xAxisRotation) * (current.y - currentPoint.y) / 2.0, -Math.sin(xAxisRotation) * (current.x - currentPoint.x) / 2.0 + Math.cos(xAxisRotation) * (current.y - currentPoint.y) / 2.0); // adjust radii

    var l = Math.pow(currp.x, 2) / Math.pow(rX, 2) + Math.pow(currp.y, 2) / Math.pow(rY, 2);

    if (l > 1) {
      rX *= Math.sqrt(l);
      rY *= Math.sqrt(l);
    } // cx', cy'


    var s = (lArcFlag === sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rX, 2) * Math.pow(rY, 2) - Math.pow(rX, 2) * Math.pow(currp.y, 2) - Math.pow(rY, 2) * Math.pow(currp.x, 2)) / (Math.pow(rX, 2) * Math.pow(currp.y, 2) + Math.pow(rY, 2) * Math.pow(currp.x, 2)));

    if (isNaN(s)) {
      s = 0;
    }

    var cpp = new Point(s * rX * currp.y / rY, s * -rY * currp.x / rX); // cx, cy

    var centp = new Point((current.x + currentPoint.x) / 2.0 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (current.y + currentPoint.y) / 2.0 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y); // initial angle

    var a1 = vectorsAngle([1, 0], [(currp.x - cpp.x) / rX, (currp.y - cpp.y) / rY]); // θ1
    // angle delta

    var u = [(currp.x - cpp.x) / rX, (currp.y - cpp.y) / rY];
    var v = [(-currp.x - cpp.x) / rX, (-currp.y - cpp.y) / rY];
    var ad = vectorsAngle(u, v); // Δθ

    if (vectorsRatio(u, v) <= -1) {
      ad = Math.PI;
    }

    if (vectorsRatio(u, v) >= 1) {
      ad = 0;
    }

    return {
      currentPoint,
      rX,
      rY,
      sweepFlag,
      xAxisRotation,
      centp,
      a1,
      ad
    };
  }

  pathA(ctx, boundingBox) {
    var {
      pathParser
    } = this;
    var {
      currentPoint,
      rX,
      rY,
      sweepFlag,
      xAxisRotation,
      centp,
      a1,
      ad
    } = PathElement.pathA(pathParser); // for markers

    var dir = 1 - sweepFlag ? 1.0 : -1.0;
    var ah = a1 + dir * (ad / 2.0);
    var halfWay = new Point(centp.x + rX * Math.cos(ah), centp.y + rY * Math.sin(ah));
    pathParser.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
    pathParser.addMarkerAngle(currentPoint, ah - dir * Math.PI);
    boundingBox.addPoint(currentPoint.x, currentPoint.y); // TODO: this is too naive, make it better

    if (ctx && !isNaN(a1) && !isNaN(ad)) {
      var r = rX > rY ? rX : rY;
      var sx = rX > rY ? 1 : rX / rY;
      var sy = rX > rY ? rY / rX : 1;
      ctx.translate(centp.x, centp.y);
      ctx.rotate(xAxisRotation);
      ctx.scale(sx, sy);
      ctx.arc(0, 0, r, a1, a1 + ad, Boolean(1 - sweepFlag));
      ctx.scale(1 / sx, 1 / sy);
      ctx.rotate(-xAxisRotation);
      ctx.translate(-centp.x, -centp.y);
    }
  }

  static pathZ(pathParser) {
    pathParser.current = pathParser.start;
  }

  pathZ(ctx, boundingBox) {
    PathElement.pathZ(this.pathParser);

    if (ctx) {
      // only close path if it is not a straight line
      if (boundingBox.x1 !== boundingBox.x2 && boundingBox.y1 !== boundingBox.y2) {
        ctx.closePath();
      }
    }
  }

}

class GlyphElement extends PathElement {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
    this.type = 'glyph';
    this.horizAdvX = this.getAttribute('horiz-adv-x').getNumber();
    this.unicode = this.getAttribute('unicode').getString();
    this.arabicForm = this.getAttribute('arabic-form').getString();
  }

}

class TextElement extends RenderedElement {
  constructor(document, node, captureTextNodes) {
    super(document, node, new.target === TextElement ? true : captureTextNodes);
    this.type = 'text';
    this.x = 0;
    this.y = 0;
    this.measureCache = -1;
  }

  setContext(ctx) {
    var fromMeasure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    super.setContext(ctx, fromMeasure);
    var textBaseline = this.getStyle('dominant-baseline').getTextBaseline() || this.getStyle('alignment-baseline').getTextBaseline();

    if (textBaseline) {
      ctx.textBaseline = textBaseline;
    }
  }

  initializeCoordinates(ctx) {
    this.x = this.getAttribute('x').getPixels('x');
    this.y = this.getAttribute('y').getPixels('y');
    var dxAttr = this.getAttribute('dx');
    var dyAttr = this.getAttribute('dy');

    if (dxAttr.hasValue()) {
      this.x += dxAttr.getPixels('x');
    }

    if (dyAttr.hasValue()) {
      this.y += dyAttr.getPixels('y');
    }

    this.x += this.getAnchorDelta(ctx, this, 0);
  }

  getBoundingBox(ctx) {
    if (this.type !== 'text') {
      return this.getTElementBoundingBox(ctx);
    }

    this.initializeCoordinates(ctx);
    var boundingBox = null;
    this.children.forEach((_, i) => {
      var childBoundingBox = this.getChildBoundingBox(ctx, this, this, i);

      if (!boundingBox) {
        boundingBox = childBoundingBox;
      } else {
        boundingBox.addBoundingBox(childBoundingBox);
      }
    });
    return boundingBox;
  }

  getFontSize() {
    var {
      document,
      parent
    } = this;
    var inheritFontSize = Font.parse(document.ctx.font).fontSize;
    var fontSize = parent.getStyle('font-size').getNumber(inheritFontSize);
    return fontSize;
  }

  getTElementBoundingBox(ctx) {
    var fontSize = this.getFontSize();
    return new BoundingBox(this.x, this.y - fontSize, this.x + this.measureText(ctx), this.y);
  }

  getGlyph(font, text, i) {
    var char = text[i];
    var glyph = null;

    if (font.isArabic) {
      var len = text.length;
      var prevChar = text[i - 1];
      var nextChar = text[i + 1];
      var arabicForm = 'isolated';

      if ((i === 0 || prevChar === ' ') && i < len - 2 && nextChar !== ' ') {
        arabicForm = 'terminal';
      }

      if (i > 0 && prevChar !== ' ' && i < len - 2 && nextChar !== ' ') {
        arabicForm = 'medial';
      }

      if (i > 0 && prevChar !== ' ' && (i === len - 1 || nextChar === ' ')) {
        arabicForm = 'initial';
      }

      if (typeof font.glyphs[char] !== 'undefined') {
        // NEED TEST
        var maybeGlyph = font.glyphs[char];
        glyph = maybeGlyph instanceof GlyphElement ? maybeGlyph : maybeGlyph[arabicForm];
      }
    } else {
      glyph = font.glyphs[char];
    }

    if (!glyph) {
      glyph = font.missingGlyph;
    }

    return glyph;
  }

  getText() {
    return '';
  }

  getTextFromNode(node) {
    var textNode = node || this.node;
    var childNodes = Array.from(textNode.parentNode.childNodes);
    var index = childNodes.indexOf(textNode);
    var lastIndex = childNodes.length - 1;
    var text = compressSpaces( // textNode.value
    // || textNode.text
    textNode.textContent || '');

    if (index === 0) {
      text = trimLeft(text);
    }

    if (index === lastIndex) {
      text = trimRight(text);
    }

    return text;
  }

  renderChildren(ctx) {
    if (this.type !== 'text') {
      this.renderTElementChildren(ctx);
      return;
    }

    this.initializeCoordinates(ctx);
    this.children.forEach((_, i) => {
      this.renderChild(ctx, this, this, i);
    });
    var {
      mouse
    } = this.document.screen; // Do not calc bounding box if mouse is not working.

    if (mouse.isWorking()) {
      mouse.checkBoundingBox(this, this.getBoundingBox(ctx));
    }
  }

  renderTElementChildren(ctx) {
    var {
      document,
      parent
    } = this;
    var renderText = this.getText();
    var customFont = parent.getStyle('font-family').getDefinition();

    if (customFont) {
      var {
        unitsPerEm
      } = customFont.fontFace;
      var ctxFont = Font.parse(document.ctx.font);
      var fontSize = parent.getStyle('font-size').getNumber(ctxFont.fontSize);
      var fontStyle = parent.getStyle('font-style').getString(ctxFont.fontStyle);
      var scale = fontSize / unitsPerEm;
      var text = customFont.isRTL ? renderText.split('').reverse().join('') : renderText;
      var dx = toNumbers(parent.getAttribute('dx').getString());
      var len = text.length;

      for (var i = 0; i < len; i++) {
        var glyph = this.getGlyph(customFont, text, i);
        ctx.translate(this.x, this.y);
        ctx.scale(scale, -scale);
        var lw = ctx.lineWidth;
        ctx.lineWidth = ctx.lineWidth * unitsPerEm / fontSize;

        if (fontStyle === 'italic') {
          ctx.transform(1, 0, .4, 1, 0, 0);
        }

        glyph.render(ctx);

        if (fontStyle === 'italic') {
          ctx.transform(1, 0, -.4, 1, 0, 0);
        }

        ctx.lineWidth = lw;
        ctx.scale(1 / scale, -1 / scale);
        ctx.translate(-this.x, -this.y);
        this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / unitsPerEm;

        if (typeof dx[i] !== 'undefined' && !isNaN(dx[i])) {
          this.x += dx[i];
        }
      }

      return;
    }

    var {
      x,
      y
    } = this; // NEED TEST
    // if (ctx.paintOrder === 'stroke') {
    // 	if (ctx.strokeStyle) {
    // 		ctx.strokeText(renderText, x, y);
    // 	}
    // 	if (ctx.fillStyle) {
    // 		ctx.fillText(renderText, x, y);
    // 	}
    // } else {

    if (ctx.fillStyle) {
      ctx.fillText(renderText, x, y);
    }

    if (ctx.strokeStyle) {
      ctx.strokeText(renderText, x, y);
    } // }

  }

  getAnchorDelta(ctx, parent, startI) {
    var textAnchor = this.getStyle('text-anchor').getString('start');

    if (textAnchor !== 'start') {
      var {
        children
      } = parent;
      var len = children.length;
      var child = null;
      var width = 0;

      for (var i = startI; i < len; i++) {
        child = children[i];

        if (i > startI && child.getAttribute('x').hasValue() || child.getAttribute('text-anchor').hasValue()) {
          break; // new group
        }

        width += child.measureTextRecursive(ctx);
      }

      return -1 * (textAnchor === 'end' ? width : width / 2.0);
    }

    return 0;
  }

  adjustChildCoordinates(ctx, textParent, parent, i) {
    var child = parent.children[i];

    if (typeof child.measureText !== 'function') {
      return child;
    }

    ctx.save();
    child.setContext(ctx, true);
    var xAttr = child.getAttribute('x');
    var yAttr = child.getAttribute('y');
    var dxAttr = child.getAttribute('dx');
    var dyAttr = child.getAttribute('dy');
    var textAnchor = child.getAttribute('text-anchor').getString('start');

    if (i === 0 && child.type !== 'textNode') {
      if (!xAttr.hasValue()) {
        xAttr.setValue(textParent.getAttribute('x').getValue('0'));
      }

      if (!yAttr.hasValue()) {
        yAttr.setValue(textParent.getAttribute('y').getValue('0'));
      }

      if (!dxAttr.hasValue()) {
        dxAttr.setValue(textParent.getAttribute('dx').getValue('0'));
      }

      if (!dyAttr.hasValue()) {
        dyAttr.setValue(textParent.getAttribute('dy').getValue('0'));
      }
    }

    if (xAttr.hasValue()) {
      child.x = xAttr.getPixels('x') + textParent.getAnchorDelta(ctx, parent, i);

      if (textAnchor !== 'start') {
        var width = child.measureTextRecursive(ctx);
        child.x += -1 * (textAnchor === 'end' ? width : width / 2.0);
      }

      if (dxAttr.hasValue()) {
        child.x += dxAttr.getPixels('x');
      }
    } else {
      if (textAnchor !== 'start') {
        var _width = child.measureTextRecursive(ctx);

        textParent.x += -1 * (textAnchor === 'end' ? _width : _width / 2.0);
      }

      if (dxAttr.hasValue()) {
        textParent.x += dxAttr.getPixels('x');
      }

      child.x = textParent.x;
    }

    textParent.x = child.x + child.measureText(ctx);

    if (yAttr.hasValue()) {
      child.y = yAttr.getPixels('y');

      if (dyAttr.hasValue()) {
        child.y += dyAttr.getPixels('y');
      }
    } else {
      if (dyAttr.hasValue()) {
        textParent.y += dyAttr.getPixels('y');
      }

      child.y = textParent.y;
    }

    textParent.y = child.y;
    child.clearContext(ctx);
    ctx.restore();
    return child;
  }

  getChildBoundingBox(ctx, textParent, parent, i) {
    var child = this.adjustChildCoordinates(ctx, textParent, parent, i); // not a text node?

    if (typeof child.getBoundingBox !== 'function') {
      return null;
    }

    var boundingBox = child.getBoundingBox(ctx);

    if (!boundingBox) {
      return null;
    }

    child.children.forEach((_, i) => {
      var childBoundingBox = textParent.getChildBoundingBox(ctx, textParent, child, i);
      boundingBox.addBoundingBox(childBoundingBox);
    });
    return boundingBox;
  }

  renderChild(ctx, textParent, parent, i) {
    var child = this.adjustChildCoordinates(ctx, textParent, parent, i);
    child.render(ctx);
    child.children.forEach((_, i) => {
      textParent.renderChild(ctx, textParent, child, i);
    });
  }

  measureTextRecursive(ctx) {
    var width = this.children.reduce((width, child) => width + child.measureTextRecursive(ctx), this.measureText(ctx));
    return width;
  }

  measureText(ctx) {
    var {
      measureCache
    } = this;

    if (~measureCache) {
      return measureCache;
    }

    var renderText = this.getText();
    var measure = this.measureTargetText(ctx, renderText);
    this.measureCache = measure;
    return measure;
  }

  measureTargetText(ctx, targetText) {
    if (!targetText.length) {
      return 0;
    }

    var {
      parent
    } = this;
    var customFont = parent.getStyle('font-family').getDefinition();

    if (customFont) {
      var fontSize = this.getFontSize();
      var text = customFont.isRTL ? targetText.split('').reverse().join('') : targetText;
      var dx = toNumbers(parent.getAttribute('dx').getString());
      var len = text.length;
      var _measure = 0;

      for (var i = 0; i < len; i++) {
        var glyph = this.getGlyph(customFont, text, i);
        _measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;

        if (typeof dx[i] !== 'undefined' && !isNaN(dx[i])) {
          _measure += dx[i];
        }
      }

      return _measure;
    }

    if (!ctx.measureText) {
      return targetText.length * 10;
    }

    ctx.save();
    this.setContext(ctx, true);
    var {
      width: measure
    } = ctx.measureText(targetText);
    this.clearContext(ctx);
    ctx.restore();
    return measure;
  }

}

class TSpanElement extends TextElement {
  constructor(document, node, captureTextNodes) {
    super(document, node, new.target === TSpanElement ? true : captureTextNodes);
    this.type = 'tspan'; // if this node has children, then they own the text

    this.text = this.children.length > 0 ? '' : this.getTextFromNode();
  }

  getText() {
    return this.text;
  }

}

class TextNode extends TSpanElement {
  constructor() {
    super(...arguments);
    this.type = 'textNode';
  }

}

class SVGElement extends RenderedElement {
  constructor() {
    super(...arguments);
    this.type = 'svg';
    this.root = false;
  }

  setContext(ctx) {
    var _this$node$parentNode;

    var {
      document
    } = this;
    var {
      screen,
      window
    } = document;
    var canvas = ctx.canvas;
    screen.setDefaults(ctx);

    if (canvas.style && typeof ctx.font !== 'undefined' && window && typeof window.getComputedStyle !== 'undefined') {
      ctx.font = window.getComputedStyle(canvas).getPropertyValue('font');
      var fontSizeProp = new Property(document, 'fontSize', Font.parse(ctx.font).fontSize);

      if (fontSizeProp.hasValue()) {
        document.rootEmSize = fontSizeProp.getPixels('y');
        document.emSize = document.rootEmSize;
      }
    } // create new view port


    if (!this.getAttribute('x').hasValue()) {
      this.getAttribute('x', true).setValue(0);
    }

    if (!this.getAttribute('y').hasValue()) {
      this.getAttribute('y', true).setValue(0);
    }

    var {
      width,
      height
    } = screen.viewPort;

    if (!this.getStyle('width').hasValue()) {
      this.getStyle('width', true).setValue('100%');
    }

    if (!this.getStyle('height').hasValue()) {
      this.getStyle('height', true).setValue('100%');
    }

    if (!this.getStyle('color').hasValue()) {
      this.getStyle('color', true).setValue('black');
    }

    var refXAttr = this.getAttribute('refX');
    var refYAttr = this.getAttribute('refY');
    var viewBoxAttr = this.getAttribute('viewBox');
    var viewBox = viewBoxAttr.hasValue() ? toNumbers(viewBoxAttr.getString()) : null;
    var clip = !this.root && this.getStyle('overflow').getValue('hidden') !== 'visible';
    var minX = 0;
    var minY = 0;
    var clipX = 0;
    var clipY = 0;

    if (viewBox) {
      minX = viewBox[0];
      minY = viewBox[1];
    }

    if (!this.root) {
      width = this.getStyle('width').getPixels('x');
      height = this.getStyle('height').getPixels('y');

      if (this.type === 'marker') {
        clipX = minX;
        clipY = minY;
        minX = 0;
        minY = 0;
      }
    }

    screen.viewPort.setCurrent(width, height); // Default value of transform-origin is center only for root SVG elements
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform-origin

    if (this.node // is not temporary SVGElement
    && (!this.parent || ((_this$node$parentNode = this.node.parentNode) === null || _this$node$parentNode === void 0 ? void 0 : _this$node$parentNode.nodeName) === 'foreignObject') && this.getStyle('transform', false, true).hasValue() && !this.getStyle('transform-origin', false, true).hasValue()) {
      this.getStyle('transform-origin', true, true).setValue('50% 50%');
    }

    super.setContext(ctx);
    ctx.translate(this.getAttribute('x').getPixels('x'), this.getAttribute('y').getPixels('y'));

    if (viewBox) {
      width = viewBox[2];
      height = viewBox[3];
    }

    document.setViewBox({
      ctx,
      aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
      width: screen.viewPort.width,
      desiredWidth: width,
      height: screen.viewPort.height,
      desiredHeight: height,
      minX,
      minY,
      refX: refXAttr.getValue(),
      refY: refYAttr.getValue(),
      clip,
      clipX,
      clipY
    });

    if (viewBox) {
      screen.viewPort.removeCurrent();
      screen.viewPort.setCurrent(width, height);
    }
  }

  clearContext(ctx) {
    super.clearContext(ctx);
    this.document.screen.viewPort.removeCurrent();
  }
  /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */


  resize(width) {
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
    var preserveAspectRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var widthAttr = this.getAttribute('width', true);
    var heightAttr = this.getAttribute('height', true);
    var viewBoxAttr = this.getAttribute('viewBox');
    var styleAttr = this.getAttribute('style');
    var originWidth = widthAttr.getNumber(0);
    var originHeight = heightAttr.getNumber(0);

    if (preserveAspectRatio) {
      if (typeof preserveAspectRatio === 'string') {
        this.getAttribute('preserveAspectRatio', true).setValue(preserveAspectRatio);
      } else {
        var preserveAspectRatioAttr = this.getAttribute('preserveAspectRatio');

        if (preserveAspectRatioAttr.hasValue()) {
          preserveAspectRatioAttr.setValue(preserveAspectRatioAttr.getString().replace(/^\s*(\S.*\S)\s*$/, '$1'));
        }
      }
    }

    widthAttr.setValue(width);
    heightAttr.setValue(height);

    if (!viewBoxAttr.hasValue()) {
      viewBoxAttr.setValue("0 0 ".concat(originWidth || width, " ").concat(originHeight || height));
    }

    if (styleAttr.hasValue()) {
      var widthStyle = this.getStyle('width');
      var heightStyle = this.getStyle('height');

      if (widthStyle.hasValue()) {
        widthStyle.setValue("".concat(width, "px"));
      }

      if (heightStyle.hasValue()) {
        heightStyle.setValue("".concat(height, "px"));
      }
    }
  }

}

class RectElement extends PathElement {
  constructor() {
    super(...arguments);
    this.type = 'rect';
  }

  path(ctx) {
    var x = this.getAttribute('x').getPixels('x');
    var y = this.getAttribute('y').getPixels('y');
    var width = this.getStyle('width', false, true).getPixels('x');
    var height = this.getStyle('height', false, true).getPixels('y');
    var rxAttr = this.getAttribute('rx');
    var ryAttr = this.getAttribute('ry');
    var rx = rxAttr.getPixels('x');
    var ry = ryAttr.getPixels('y');

    if (rxAttr.hasValue() && !ryAttr.hasValue()) {
      ry = rx;
    }

    if (ryAttr.hasValue() && !rxAttr.hasValue()) {
      rx = ry;
    }

    rx = Math.min(rx, width / 2.0);
    ry = Math.min(ry, height / 2.0);

    if (ctx) {
      var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
      ctx.beginPath(); // always start the path so we don't fill prior paths

      if (height > 0 && width > 0) {
        ctx.moveTo(x + rx, y);
        ctx.lineTo(x + width - rx, y);
        ctx.bezierCurveTo(x + width - rx + KAPPA * rx, y, x + width, y + ry - KAPPA * ry, x + width, y + ry);
        ctx.lineTo(x + width, y + height - ry);
        ctx.bezierCurveTo(x + width, y + height - ry + KAPPA * ry, x + width - rx + KAPPA * rx, y + height, x + width - rx, y + height);
        ctx.lineTo(x + rx, y + height);
        ctx.bezierCurveTo(x + rx - KAPPA * rx, y + height, x, y + height - ry + KAPPA * ry, x, y + height - ry);
        ctx.lineTo(x, y + ry);
        ctx.bezierCurveTo(x, y + ry - KAPPA * ry, x + rx - KAPPA * rx, y, x + rx, y);
        ctx.closePath();
      }
    }

    return new BoundingBox(x, y, x + width, y + height);
  }

  getMarkers() {
    return null;
  }

}

class CircleElement extends PathElement {
  constructor() {
    super(...arguments);
    this.type = 'circle';
  }

  path(ctx) {
    var cx = this.getAttribute('cx').getPixels('x');
    var cy = this.getAttribute('cy').getPixels('y');
    var r = this.getAttribute('r').getPixels();

    if (ctx && r > 0) {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2, false);
      ctx.closePath();
    }

    return new BoundingBox(cx - r, cy - r, cx + r, cy + r);
  }

  getMarkers() {
    return null;
  }

}

class EllipseElement extends PathElement {
  constructor() {
    super(...arguments);
    this.type = 'ellipse';
  }

  path(ctx) {
    var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
    var rx = this.getAttribute('rx').getPixels('x');
    var ry = this.getAttribute('ry').getPixels('y');
    var cx = this.getAttribute('cx').getPixels('x');
    var cy = this.getAttribute('cy').getPixels('y');

    if (ctx && rx > 0 && ry > 0) {
      ctx.beginPath();
      ctx.moveTo(cx + rx, cy);
      ctx.bezierCurveTo(cx + rx, cy + KAPPA * ry, cx + KAPPA * rx, cy + ry, cx, cy + ry);
      ctx.bezierCurveTo(cx - KAPPA * rx, cy + ry, cx - rx, cy + KAPPA * ry, cx - rx, cy);
      ctx.bezierCurveTo(cx - rx, cy - KAPPA * ry, cx - KAPPA * rx, cy - ry, cx, cy - ry);
      ctx.bezierCurveTo(cx + KAPPA * rx, cy - ry, cx + rx, cy - KAPPA * ry, cx + rx, cy);
      ctx.closePath();
    }

    return new BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
  }

  getMarkers() {
    return null;
  }

}

class LineElement extends PathElement {
  constructor() {
    super(...arguments);
    this.type = 'line';
  }

  getPoints() {
    return [new Point(this.getAttribute('x1').getPixels('x'), this.getAttribute('y1').getPixels('y')), new Point(this.getAttribute('x2').getPixels('x'), this.getAttribute('y2').getPixels('y'))];
  }

  path(ctx) {
    var [{
      x: x0,
      y: y0
    }, {
      x: x1,
      y: y1
    }] = this.getPoints();

    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
    }

    return new BoundingBox(x0, y0, x1, y1);
  }

  getMarkers() {
    var [p0, p1] = this.getPoints();
    var a = p0.angleTo(p1);
    return [[p0, a], [p1, a]];
  }

}

class PolylineElement extends PathElement {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
    this.type = 'polyline';
    this.points = [];
    this.points = Point.parsePath(this.getAttribute('points').getString());
  }

  path(ctx) {
    var {
      points
    } = this;
    var [{
      x: x0,
      y: y0
    }] = points;
    var boundingBox = new BoundingBox(x0, y0);

    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x0, y0);
    }

    points.forEach((_ref) => {
      var {
        x,
        y
      } = _ref;
      boundingBox.addPoint(x, y);

      if (ctx) {
        ctx.lineTo(x, y);
      }
    });
    return boundingBox;
  }

  getMarkers() {
    var {
      points
    } = this;
    var lastIndex = points.length - 1;
    var markers = [];
    points.forEach((point, i) => {
      if (i === lastIndex) {
        return;
      }

      markers.push([point, point.angleTo(points[i + 1])]);
    });

    if (markers.length > 0) {
      markers.push([points[points.length - 1], markers[markers.length - 1][1]]);
    }

    return markers;
  }

}

class PolygonElement extends PolylineElement {
  constructor() {
    super(...arguments);
    this.type = 'polygon';
  }

  path(ctx) {
    var boundingBox = super.path(ctx);
    var [{
      x,
      y
    }] = this.points;

    if (ctx) {
      ctx.lineTo(x, y);
      ctx.closePath();
    }

    return boundingBox;
  }

}

class PatternElement extends Element {
  constructor() {
    super(...arguments);
    this.type = 'pattern';
  }

  createPattern(ctx, _, parentOpacityProp) {
    var width = this.getStyle('width').getPixels('x', true);
    var height = this.getStyle('height').getPixels('y', true); // render me using a temporary svg element

    var patternSvg = new SVGElement(this.document, null);
    patternSvg.attributes.viewBox = new Property(this.document, 'viewBox', this.getAttribute('viewBox').getValue());
    patternSvg.attributes.width = new Property(this.document, 'width', "".concat(width, "px"));
    patternSvg.attributes.height = new Property(this.document, 'height', "".concat(height, "px"));
    patternSvg.attributes.transform = new Property(this.document, 'transform', this.getAttribute('patternTransform').getValue());
    patternSvg.children = this.children;
    var patternCanvas = this.document.createCanvas(width, height);
    var patternCtx = patternCanvas.getContext('2d');
    var xAttr = this.getAttribute('x');
    var yAttr = this.getAttribute('y');

    if (xAttr.hasValue() && yAttr.hasValue()) {
      patternCtx.translate(xAttr.getPixels('x', true), yAttr.getPixels('y', true));
    }

    if (parentOpacityProp.hasValue()) {
      this.styles['fill-opacity'] = parentOpacityProp;
    } else {
      Reflect.deleteProperty(this.styles, 'fill-opacity');
    } // render 3x3 grid so when we transform there's no white space on edges


    for (var x = -1; x <= 1; x++) {
      for (var y = -1; y <= 1; y++) {
        patternCtx.save();
        patternSvg.attributes.x = new Property(this.document, 'x', x * patternCanvas.width);
        patternSvg.attributes.y = new Property(this.document, 'y', y * patternCanvas.height);
        patternSvg.render(patternCtx);
        patternCtx.restore();
      }
    }

    var pattern = ctx.createPattern(patternCanvas, 'repeat');
    return pattern;
  }

}

class MarkerElement extends Element {
  constructor() {
    super(...arguments);
    this.type = 'marker';
  }

  render(ctx, point, angle) {
    if (!point) {
      return;
    }

    var {
      x,
      y
    } = point;
    var orient = this.getAttribute('orient').getString('auto');
    var markerUnits = this.getAttribute('markerUnits').getString('strokeWidth');
    ctx.translate(x, y);

    if (orient === 'auto') {
      ctx.rotate(angle);
    }

    if (markerUnits === 'strokeWidth') {
      ctx.scale(ctx.lineWidth, ctx.lineWidth);
    }

    ctx.save(); // render me using a temporary svg element

    var markerSvg = new SVGElement(this.document, null);
    markerSvg.type = this.type;
    markerSvg.attributes.viewBox = new Property(this.document, 'viewBox', this.getAttribute('viewBox').getValue());
    markerSvg.attributes.refX = new Property(this.document, 'refX', this.getAttribute('refX').getValue());
    markerSvg.attributes.refY = new Property(this.document, 'refY', this.getAttribute('refY').getValue());
    markerSvg.attributes.width = new Property(this.document, 'width', this.getAttribute('markerWidth').getValue());
    markerSvg.attributes.height = new Property(this.document, 'height', this.getAttribute('markerHeight').getValue());
    markerSvg.attributes.overflow = new Property(this.document, 'overflow', this.getAttribute('overflow').getValue());
    markerSvg.attributes.fill = new Property(this.document, 'fill', this.getAttribute('fill').getColor('black'));
    markerSvg.attributes.stroke = new Property(this.document, 'stroke', this.getAttribute('stroke').getValue('none'));
    markerSvg.children = this.children;
    markerSvg.render(ctx);
    ctx.restore();

    if (markerUnits === 'strokeWidth') {
      ctx.scale(1 / ctx.lineWidth, 1 / ctx.lineWidth);
    }

    if (orient === 'auto') {
      ctx.rotate(-angle);
    }

    ctx.translate(-x, -y);
  }

}

class DefsElement extends Element {
  constructor() {
    super(...arguments);
    this.type = 'defs';
  }

  render() {// NOOP
  }

}

class GElement extends RenderedElement {
  constructor() {
    super(...arguments);
    this.type = 'g';
  }

  getBoundingBox(ctx) {
    var boundingBox = new BoundingBox();
    this.children.forEach(child => {
      boundingBox.addBoundingBox(child.getBoundingBox(ctx));
    });
    return boundingBox;
  }

}

class GradientElement extends Element {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
    this.attributesToInherit = ['gradientUnits'];
    this.stops = [];
    var {
      stops,
      children
    } = this;
    children.forEach(child => {
      if (child.type === 'stop') {
        stops.push(child);
      }
    });
  }

  getGradientUnits() {
    return this.getAttribute('gradientUnits').getString('objectBoundingBox');
  }

  createGradient(ctx, element, parentOpacityProp) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
    var stopsContainer = this;

    if (this.getHrefAttribute().hasValue()) {
      stopsContainer = this.getHrefAttribute().getDefinition();
      this.inheritStopContainer(stopsContainer);
    }

    var {
      stops
    } = stopsContainer;
    var gradient = this.getGradient(ctx, element);

    if (!gradient) {
      return this.addParentOpacity(parentOpacityProp, stops[stops.length - 1].color);
    }

    stops.forEach(stop => {
      gradient.addColorStop(stop.offset, this.addParentOpacity(parentOpacityProp, stop.color));
    });

    if (this.getAttribute('gradientTransform').hasValue()) {
      // render as transformed pattern on temporary canvas
      var {
        document
      } = this;
      var {
        MAX_VIRTUAL_PIXELS,
        viewPort
      } = document.screen;
      var [rootView] = viewPort.viewPorts;
      var rect = new RectElement(document, null);
      rect.attributes.x = new Property(document, 'x', -MAX_VIRTUAL_PIXELS / 3.0);
      rect.attributes.y = new Property(document, 'y', -MAX_VIRTUAL_PIXELS / 3.0);
      rect.attributes.width = new Property(document, 'width', MAX_VIRTUAL_PIXELS);
      rect.attributes.height = new Property(document, 'height', MAX_VIRTUAL_PIXELS);
      var group = new GElement(document, null);
      group.attributes.transform = new Property(document, 'transform', this.getAttribute('gradientTransform').getValue());
      group.children = [rect];
      var patternSvg = new SVGElement(document, null);
      patternSvg.attributes.x = new Property(document, 'x', 0);
      patternSvg.attributes.y = new Property(document, 'y', 0);
      patternSvg.attributes.width = new Property(document, 'width', rootView.width);
      patternSvg.attributes.height = new Property(document, 'height', rootView.height);
      patternSvg.children = [group];
      var patternCanvas = document.createCanvas(rootView.width, rootView.height);
      var patternCtx = patternCanvas.getContext('2d');
      patternCtx.fillStyle = gradient;
      patternSvg.render(patternCtx);
      return patternCtx.createPattern(patternCanvas, 'no-repeat');
    }

    return gradient;
  }

  inheritStopContainer(stopsContainer) {
    this.attributesToInherit.forEach(attributeToInherit => {
      if (!this.getAttribute(attributeToInherit).hasValue() && stopsContainer.getAttribute(attributeToInherit).hasValue()) {
        this.getAttribute(attributeToInherit, true).setValue(stopsContainer.getAttribute(attributeToInherit).getValue());
      }
    });
  }

  addParentOpacity(parentOpacityProp, color) {
    if (parentOpacityProp.hasValue()) {
      var colorProp = new Property(this.document, 'color', color);
      return colorProp.addOpacity(parentOpacityProp).getColor();
    }

    return color;
  }

}

class LinearGradientElement extends GradientElement {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
    this.type = 'linearGradient';
    this.attributesToInherit.push('x1', 'y1', 'x2', 'y2');
  }

  getGradient(ctx, element) {
    var isBoundingBoxUnits = this.getGradientUnits() === 'objectBoundingBox';
    var boundingBox = isBoundingBoxUnits ? element.getBoundingBox(ctx) : null;

    if (isBoundingBoxUnits && !boundingBox) {
      return null;
    }

    if (!this.getAttribute('x1').hasValue() && !this.getAttribute('y1').hasValue() && !this.getAttribute('x2').hasValue() && !this.getAttribute('y2').hasValue()) {
      this.getAttribute('x1', true).setValue(0);
      this.getAttribute('y1', true).setValue(0);
      this.getAttribute('x2', true).setValue(1);
      this.getAttribute('y2', true).setValue(0);
    }

    var x1 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('x1').getNumber() : this.getAttribute('x1').getPixels('x');
    var y1 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('y1').getNumber() : this.getAttribute('y1').getPixels('y');
    var x2 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('x2').getNumber() : this.getAttribute('x2').getPixels('x');
    var y2 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('y2').getNumber() : this.getAttribute('y2').getPixels('y');

    if (x1 === x2 && y1 === y2) {
      return null;
    }

    return ctx.createLinearGradient(x1, y1, x2, y2);
  }

}

class RadialGradientElement extends GradientElement {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
    this.type = 'radialGradient';
    this.attributesToInherit.push('cx', 'cy', 'r', 'fx', 'fy', 'fr');
  }

  getGradient(ctx, element) {
    var isBoundingBoxUnits = this.getGradientUnits() === 'objectBoundingBox';
    var boundingBox = element.getBoundingBox(ctx);

    if (isBoundingBoxUnits && !boundingBox) {
      return null;
    }

    if (!this.getAttribute('cx').hasValue()) {
      this.getAttribute('cx', true).setValue('50%');
    }

    if (!this.getAttribute('cy').hasValue()) {
      this.getAttribute('cy', true).setValue('50%');
    }

    if (!this.getAttribute('r').hasValue()) {
      this.getAttribute('r', true).setValue('50%');
    }

    var cx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('cx').getNumber() : this.getAttribute('cx').getPixels('x');
    var cy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('cy').getNumber() : this.getAttribute('cy').getPixels('y');
    var fx = cx;
    var fy = cy;

    if (this.getAttribute('fx').hasValue()) {
      fx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('fx').getNumber() : this.getAttribute('fx').getPixels('x');
    }

    if (this.getAttribute('fy').hasValue()) {
      fy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('fy').getNumber() : this.getAttribute('fy').getPixels('y');
    }

    var r = isBoundingBoxUnits ? (boundingBox.width + boundingBox.height) / 2.0 * this.getAttribute('r').getNumber() : this.getAttribute('r').getPixels();
    var fr = this.getAttribute('fr').getPixels();
    return ctx.createRadialGradient(fx, fy, fr, cx, cy, r);
  }

}

class StopElement extends Element {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
    this.type = 'stop';
    var offset = Math.max(0, Math.min(1, this.getAttribute('offset').getNumber()));
    var stopOpacity = this.getStyle('stop-opacity');
    var stopColor = this.getStyle('stop-color', true);

    if (stopColor.getString() === '') {
      stopColor.setValue('#000');
    }

    if (stopOpacity.hasValue()) {
      stopColor = stopColor.addOpacity(stopOpacity);
    }

    this.offset = offset;
    this.color = stopColor.getColor();
  }

}

class AnimateElement extends Element {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
    this.type = 'animate';
    this.duration = 0;
    this.initialValue = null;
    this.initialUnits = '';
    this.removed = false;
    this.frozen = false;
    document.screen.animations.push(this);
    this.begin = this.getAttribute('begin').getMilliseconds();
    this.maxDuration = this.begin + this.getAttribute('dur').getMilliseconds();
    this.from = this.getAttribute('from');
    this.to = this.getAttribute('to');
    this.values = new Property(document, 'values', null);
    var valuesAttr = this.getAttribute('values');

    if (valuesAttr.hasValue()) {
      this.values.setValue(valuesAttr.getString().split(';'));
    }
  }

  getProperty() {
    var attributeType = this.getAttribute('attributeType').getString();
    var attributeName = this.getAttribute('attributeName').getString();

    if (attributeType === 'CSS') {
      return this.parent.getStyle(attributeName, true);
    }

    return this.parent.getAttribute(attributeName, true);
  }

  calcValue() {
    var {
      initialUnits
    } = this;
    var {
      progress,
      from,
      to
    } = this.getProgress(); // tween value linearly

    var newValue = from.getNumber() + (to.getNumber() - from.getNumber()) * progress;

    if (initialUnits === '%') {
      newValue *= 100.0; // numValue() returns 0-1 whereas properties are 0-100
    }

    return "".concat(newValue).concat(initialUnits);
  }

  update(delta) {
    var {
      parent
    } = this;
    var prop = this.getProperty(); // set initial value

    if (!this.initialValue) {
      this.initialValue = prop.getString();
      this.initialUnits = prop.getUnits();
    } // if we're past the end time


    if (this.duration > this.maxDuration) {
      var fill = this.getAttribute('fill').getString('remove'); // loop for indefinitely repeating animations

      if (this.getAttribute('repeatCount').getString() === 'indefinite' || this.getAttribute('repeatDur').getString() === 'indefinite') {
        this.duration = 0;
      } else if (fill === 'freeze' && !this.frozen) {
        this.frozen = true;
        parent.animationFrozen = true;
        parent.animationFrozenValue = prop.getString();
      } else if (fill === 'remove' && !this.removed) {
        this.removed = true;
        prop.setValue(parent.animationFrozen ? parent.animationFrozenValue : this.initialValue);
        return true;
      }

      return false;
    }

    this.duration += delta; // if we're past the begin time

    var updated = false;

    if (this.begin < this.duration) {
      var newValue = this.calcValue(); // tween

      var typeAttr = this.getAttribute('type');

      if (typeAttr.hasValue()) {
        // for transform, etc.
        var type = typeAttr.getString();
        newValue = "".concat(type, "(").concat(newValue, ")");
      }

      prop.setValue(newValue);
      updated = true;
    }

    return updated;
  }

  getProgress() {
    var {
      document,
      values
    } = this;
    var result = {
      progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
    };

    if (values.hasValue()) {
      var p = result.progress * (values.getValue().length - 1);
      var lb = Math.floor(p);
      var ub = Math.ceil(p);
      result.from = new Property(document, 'from', parseFloat(values.getValue()[lb]));
      result.to = new Property(document, 'to', parseFloat(values.getValue()[ub]));
      result.progress = (p - lb) / (ub - lb);
    } else {
      result.from = this.from;
      result.to = this.to;
    }

    return result;
  }

}

class AnimateColorElement extends AnimateElement {
  constructor() {
    super(...arguments);
    this.type = 'animateColor';
  }

  calcValue() {
    var {
      progress,
      from,
      to
    } = this.getProgress();
    var colorFrom = new rgbcolor__WEBPACK_IMPORTED_MODULE_13__(from.getColor());
    var colorTo = new rgbcolor__WEBPACK_IMPORTED_MODULE_13__(to.getColor());

    if (colorFrom.ok && colorTo.ok) {
      // tween color linearly
      var r = colorFrom.r + (colorTo.r - colorFrom.r) * progress;
      var g = colorFrom.g + (colorTo.g - colorFrom.g) * progress;
      var b = colorFrom.b + (colorTo.b - colorFrom.b) * progress; // ? alpha

      return "rgb(".concat(Math.floor(r), ", ").concat(Math.floor(g), ", ").concat(Math.floor(b), ")");
    }

    return this.getAttribute('from').getColor();
  }

}

class AnimateTransformElement extends AnimateElement {
  constructor() {
    super(...arguments);
    this.type = 'animateTransform';
  }

  calcValue() {
    var {
      progress,
      from,
      to
    } = this.getProgress(); // tween value linearly

    var transformFrom = toNumbers(from.getString());
    var transformTo = toNumbers(to.getString());
    var newValue = transformFrom.map((from, i) => {
      var to = transformTo[i];
      return from + (to - from) * progress;
    }).join(' ');
    return newValue;
  }

}

class FontElement extends Element {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
    this.type = 'font';
    this.glyphs = {};
    this.horizAdvX = this.getAttribute('horiz-adv-x').getNumber();
    var {
      definitions
    } = document;
    var {
      children
    } = this;

    for (var child of children) {
      switch (child.type) {
        case 'font-face':
          {
            this.fontFace = child;
            var fontFamilyStyle = child.getStyle('font-family');

            if (fontFamilyStyle.hasValue()) {
              definitions[fontFamilyStyle.getString()] = this;
            }

            break;
          }

        case 'missing-glyph':
          this.missingGlyph = child;
          break;

        case 'glyph':
          {
            var glyph = child;

            if (glyph.arabicForm) {
              this.isRTL = true;
              this.isArabic = true;

              if (typeof this.glyphs[glyph.unicode] === 'undefined') {
                this.glyphs[glyph.unicode] = {};
              }

              this.glyphs[glyph.unicode][glyph.arabicForm] = glyph;
            } else {
              this.glyphs[glyph.unicode] = glyph;
            }

            break;
          }
      }
    }
  }

  render() {// NO RENDER
  }

}

class FontFaceElement extends Element {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
    this.type = 'font-face';
    this.ascent = this.getAttribute('ascent').getNumber();
    this.descent = this.getAttribute('descent').getNumber();
    this.unitsPerEm = this.getAttribute('units-per-em').getNumber();
  }

}

class MissingGlyphElement extends PathElement {
  constructor() {
    super(...arguments);
    this.type = 'missing-glyph';
    this.horizAdvX = 0;
  }

}

class TRefElement extends TextElement {
  constructor() {
    super(...arguments);
    this.type = 'tref';
  }

  getText() {
    var element = this.getHrefAttribute().getDefinition();

    if (element) {
      var firstChild = element.children[0];

      if (firstChild) {
        return firstChild.getText();
      }
    }

    return '';
  }

}

class AElement extends TextElement {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
    this.type = 'a';
    var {
      childNodes
    } = node;
    var firstChild = childNodes[0];
    var hasText = childNodes.length > 0 && Array.from(childNodes).every(node => node.nodeType === 3);
    this.hasText = hasText;
    this.text = hasText ? this.getTextFromNode(firstChild) : '';
  }

  getText() {
    return this.text;
  }

  renderChildren(ctx) {
    if (this.hasText) {
      // render as text element
      super.renderChildren(ctx);
      var {
        document,
        x,
        y
      } = this;
      var {
        mouse
      } = document.screen;
      var fontSize = new Property(document, 'fontSize', Font.parse(document.ctx.font).fontSize); // Do not calc bounding box if mouse is not working.

      if (mouse.isWorking()) {
        mouse.checkBoundingBox(this, new BoundingBox(x, y - fontSize.getPixels('y'), x + this.measureText(ctx), y));
      }
    } else if (this.children.length > 0) {
      // render as temporary group
      var g = new GElement(this.document, null);
      g.children = this.children;
      g.parent = this;
      g.render(ctx);
    }
  }

  onClick() {
    var {
      window
    } = this.document;

    if (window) {
      window.open(this.getHrefAttribute().getString());
    }
  }

  onMouseMove() {
    var ctx = this.document.ctx;
    ctx.canvas.style.cursor = 'pointer';
  }

}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
class TextPathElement extends TextElement {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
    this.type = 'textPath';
    this.textWidth = 0;
    this.textHeight = 0;
    this.pathLength = -1;
    this.glyphInfo = null;
    this.letterSpacingCache = [];
    this.measuresCache = new Map([['', 0]]);
    var pathElement = this.getHrefAttribute().getDefinition();
    this.text = this.getTextFromNode();
    this.dataArray = this.parsePathData(pathElement);
  }

  getText() {
    return this.text;
  }

  path(ctx) {
    var {
      dataArray
    } = this;

    if (ctx) {
      ctx.beginPath();
    }

    dataArray.forEach((_ref) => {
      var {
        type,
        points
      } = _ref;

      switch (type) {
        case PathParser.LINE_TO:
          if (ctx) {
            ctx.lineTo(points[0], points[1]);
          }

          break;

        case PathParser.MOVE_TO:
          if (ctx) {
            ctx.moveTo(points[0], points[1]);
          }

          break;

        case PathParser.CURVE_TO:
          if (ctx) {
            ctx.bezierCurveTo(points[0], points[1], points[2], points[3], points[4], points[5]);
          }

          break;

        case PathParser.QUAD_TO:
          if (ctx) {
            ctx.quadraticCurveTo(points[0], points[1], points[2], points[3]);
          }

          break;

        case PathParser.ARC:
          {
            var [cx, cy, rx, ry, theta, dTheta, psi, fs] = points;
            var r = rx > ry ? rx : ry;
            var scaleX = rx > ry ? 1 : rx / ry;
            var scaleY = rx > ry ? ry / rx : 1;

            if (ctx) {
              ctx.translate(cx, cy);
              ctx.rotate(psi);
              ctx.scale(scaleX, scaleY);
              ctx.arc(0, 0, r, theta, theta + dTheta, Boolean(1 - fs));
              ctx.scale(1 / scaleX, 1 / scaleY);
              ctx.rotate(-psi);
              ctx.translate(-cx, -cy);
            }

            break;
          }

        case PathParser.CLOSE_PATH:
          if (ctx) {
            ctx.closePath();
          }

          break;
      }
    });
  }

  renderChildren(ctx) {
    this.setTextData(ctx);
    ctx.save();
    var textDecoration = this.parent.getStyle('text-decoration').getString();
    var fontSize = this.getFontSize();
    var {
      glyphInfo
    } = this;
    var fill = ctx.fillStyle;

    if (textDecoration === 'underline') {
      ctx.beginPath();
    }

    glyphInfo.forEach((glyph, i) => {
      var {
        p0,
        p1,
        rotation,
        text: partialText
      } = glyph;
      ctx.save();
      ctx.translate(p0.x, p0.y);
      ctx.rotate(rotation);

      if (ctx.fillStyle) {
        ctx.fillText(partialText, 0, 0);
      }

      if (ctx.strokeStyle) {
        ctx.strokeText(partialText, 0, 0);
      }

      ctx.restore();

      if (textDecoration === 'underline') {
        if (i === 0) {
          ctx.moveTo(p0.x, p0.y + fontSize / 8);
        }

        ctx.lineTo(p1.x, p1.y + fontSize / 5);
      } // // To assist with debugging visually, uncomment following
      //
      // ctx.beginPath();
      // if (i % 2)
      // 	ctx.strokeStyle = 'red';
      // else
      // 	ctx.strokeStyle = 'green';
      // ctx.moveTo(p0.x, p0.y);
      // ctx.lineTo(p1.x, p1.y);
      // ctx.stroke();
      // ctx.closePath();

    });

    if (textDecoration === 'underline') {
      ctx.lineWidth = fontSize / 20;
      ctx.strokeStyle = fill;
      ctx.stroke();
      ctx.closePath();
    }

    ctx.restore();
  }

  getLetterSpacingAt() {
    var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return this.letterSpacingCache[idx] || 0;
  }

  findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, inputOffset, dy, c, charI) {
    var offset = inputOffset;
    var glyphWidth = this.measureText(ctx, c);

    if (c === ' ' && anchor === 'justify' && textFullWidth < fullPathWidth) {
      glyphWidth += (fullPathWidth - textFullWidth) / spacesNumber;
    }

    if (charI > -1) {
      offset += this.getLetterSpacingAt(charI);
    }

    var splineStep = this.textHeight / 20;
    var p0 = this.getEquidistantPointOnPath(offset, splineStep, 0);
    var p1 = this.getEquidistantPointOnPath(offset + glyphWidth, splineStep, 0);
    var segment = {
      p0,
      p1
    };
    var rotation = p0 && p1 ? Math.atan2(p1.y - p0.y, p1.x - p0.x) : 0;

    if (dy) {
      var dyX = Math.cos(Math.PI / 2 + rotation) * dy;
      var dyY = Math.cos(-rotation) * dy;
      segment.p0 = _objectSpread$2(_objectSpread$2({}, p0), {}, {
        x: p0.x + dyX,
        y: p0.y + dyY
      });
      segment.p1 = _objectSpread$2(_objectSpread$2({}, p1), {}, {
        x: p1.x + dyX,
        y: p1.y + dyY
      });
    }

    offset += glyphWidth;
    return {
      offset,
      segment,
      rotation
    };
  }

  measureText(ctx, text) {
    var {
      measuresCache
    } = this;
    var targetText = text || this.getText();

    if (measuresCache.has(targetText)) {
      return measuresCache.get(targetText);
    }

    var measure = this.measureTargetText(ctx, targetText);
    measuresCache.set(targetText, measure);
    return measure;
  } // This method supposes what all custom fonts already loaded.
  // If some font will be loaded after this method call, <textPath> will not be rendered correctly.
  // You need to call this method manually to update glyphs cache.


  setTextData(ctx) {
    if (this.glyphInfo) {
      return;
    }

    var renderText = this.getText();
    var chars = renderText.split('');
    var spacesNumber = renderText.split(' ').length - 1;
    var dx = this.parent.getAttribute('dx').split().map(_ => _.getPixels('x'));
    var dy = this.parent.getAttribute('dy').getPixels('y');
    var anchor = this.parent.getStyle('text-anchor').getString('start');
    var thisSpacing = this.getStyle('letter-spacing');
    var parentSpacing = this.parent.getStyle('letter-spacing');
    var letterSpacing = 0;

    if (!thisSpacing.hasValue() || thisSpacing.getValue() === 'inherit') {
      letterSpacing = parentSpacing.getPixels();
    } else if (thisSpacing.hasValue()) {
      if (thisSpacing.getValue() !== 'initial' && thisSpacing.getValue() !== 'unset') {
        letterSpacing = thisSpacing.getPixels();
      }
    } // fill letter-spacing cache


    var letterSpacingCache = [];
    var textLen = renderText.length;
    this.letterSpacingCache = letterSpacingCache;

    for (var i = 0; i < textLen; i++) {
      letterSpacingCache.push(typeof dx[i] !== 'undefined' ? dx[i] : letterSpacing);
    }

    var dxSum = letterSpacingCache.reduce((acc, cur, i) => i === 0 ? 0 : acc + cur || 0, 0);
    var textWidth = this.measureText(ctx);
    var textFullWidth = Math.max(textWidth + dxSum, 0);
    this.textWidth = textWidth;
    this.textHeight = this.getFontSize();
    this.glyphInfo = [];
    var fullPathWidth = this.getPathLength();
    var startOffset = this.getStyle('startOffset').getNumber(0) * fullPathWidth;
    var offset = 0;

    if (anchor === 'middle' || anchor === 'center') {
      offset = -textFullWidth / 2;
    }

    if (anchor === 'end' || anchor === 'right') {
      offset = -textFullWidth;
    }

    offset += startOffset;
    chars.forEach((char, i) => {
      // Find such segment what distance between p0 and p1 is approx. width of glyph
      var {
        offset: nextOffset,
        segment,
        rotation
      } = this.findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, offset, dy, char, i);
      offset = nextOffset;

      if (!segment.p0 || !segment.p1) {
        return;
      } // const width = this.getLineLength(
      // 	segment.p0.x,
      // 	segment.p0.y,
      // 	segment.p1.x,
      // 	segment.p1.y
      // );
      // Note: Since glyphs are rendered one at a time, any kerning pair data built into the font will not be used.
      // Can foresee having a rough pair table built in that the developer can override as needed.
      // Or use "dx" attribute of the <text> node as a naive replacement
      // const kern = 0;
      // placeholder for future implementation
      // const midpoint = this.getPointOnLine(
      // 	kern + width / 2.0,
      // 	segment.p0.x, segment.p0.y, segment.p1.x, segment.p1.y
      // );


      this.glyphInfo.push({
        // transposeX: midpoint.x,
        // transposeY: midpoint.y,
        text: chars[i],
        p0: segment.p0,
        p1: segment.p1,
        rotation
      });
    });
  }

  parsePathData(path) {
    this.pathLength = -1; // reset path length

    if (!path) {
      return [];
    }

    var pathCommands = [];
    var {
      pathParser
    } = path;
    pathParser.reset(); // convert l, H, h, V, and v to L

    while (!pathParser.isEnd()) {
      var {
        current
      } = pathParser;
      var startX = current ? current.x : 0;
      var startY = current ? current.y : 0;
      var command = pathParser.next();
      var nextCommandType = command.type;
      var points = [];

      switch (command.type) {
        case PathParser.MOVE_TO:
          this.pathM(pathParser, points);
          break;

        case PathParser.LINE_TO:
          nextCommandType = this.pathL(pathParser, points);
          break;

        case PathParser.HORIZ_LINE_TO:
          nextCommandType = this.pathH(pathParser, points);
          break;

        case PathParser.VERT_LINE_TO:
          nextCommandType = this.pathV(pathParser, points);
          break;

        case PathParser.CURVE_TO:
          this.pathC(pathParser, points);
          break;

        case PathParser.SMOOTH_CURVE_TO:
          nextCommandType = this.pathS(pathParser, points);
          break;

        case PathParser.QUAD_TO:
          this.pathQ(pathParser, points);
          break;

        case PathParser.SMOOTH_QUAD_TO:
          nextCommandType = this.pathT(pathParser, points);
          break;

        case PathParser.ARC:
          points = this.pathA(pathParser);
          break;

        case PathParser.CLOSE_PATH:
          PathElement.pathZ(pathParser);
          break;
      }

      if (command.type !== PathParser.CLOSE_PATH) {
        pathCommands.push({
          type: nextCommandType,
          points,
          start: {
            x: startX,
            y: startY
          },
          pathLength: this.calcLength(startX, startY, nextCommandType, points)
        });
      } else {
        pathCommands.push({
          type: PathParser.CLOSE_PATH,
          points: [],
          pathLength: 0
        });
      }
    }

    return pathCommands;
  }

  pathM(pathParser, points) {
    var {
      x,
      y
    } = PathElement.pathM(pathParser).point;
    points.push(x, y);
  }

  pathL(pathParser, points) {
    var {
      x,
      y
    } = PathElement.pathL(pathParser).point;
    points.push(x, y);
    return PathParser.LINE_TO;
  }

  pathH(pathParser, points) {
    var {
      x,
      y
    } = PathElement.pathH(pathParser).point;
    points.push(x, y);
    return PathParser.LINE_TO;
  }

  pathV(pathParser, points) {
    var {
      x,
      y
    } = PathElement.pathV(pathParser).point;
    points.push(x, y);
    return PathParser.LINE_TO;
  }

  pathC(pathParser, points) {
    var {
      point,
      controlPoint,
      currentPoint
    } = PathElement.pathC(pathParser);
    points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
  }

  pathS(pathParser, points) {
    var {
      point,
      controlPoint,
      currentPoint
    } = PathElement.pathS(pathParser);
    points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
    return PathParser.CURVE_TO;
  }

  pathQ(pathParser, points) {
    var {
      controlPoint,
      currentPoint
    } = PathElement.pathQ(pathParser);
    points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
  }

  pathT(pathParser, points) {
    var {
      controlPoint,
      currentPoint
    } = PathElement.pathT(pathParser);
    points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
    return PathParser.QUAD_TO;
  }

  pathA(pathParser) {
    var {
      rX,
      rY,
      sweepFlag,
      xAxisRotation,
      centp,
      a1,
      ad
    } = PathElement.pathA(pathParser);

    if (sweepFlag === 0 && ad > 0) {
      ad -= 2 * Math.PI;
    }

    if (sweepFlag === 1 && ad < 0) {
      ad += 2 * Math.PI;
    }

    return [centp.x, centp.y, rX, rY, a1, ad, xAxisRotation, sweepFlag];
  }

  calcLength(x, y, commandType, points) {
    var len = 0;
    var p1 = null;
    var p2 = null;
    var t = 0;

    switch (commandType) {
      case PathParser.LINE_TO:
        return this.getLineLength(x, y, points[0], points[1]);

      case PathParser.CURVE_TO:
        // Approximates by breaking curve into 100 line segments
        len = 0.0;
        p1 = this.getPointOnCubicBezier(0, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);

        for (t = 0.01; t <= 1; t += 0.01) {
          p2 = this.getPointOnCubicBezier(t, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
          len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
          p1 = p2;
        }

        return len;

      case PathParser.QUAD_TO:
        // Approximates by breaking curve into 100 line segments
        len = 0.0;
        p1 = this.getPointOnQuadraticBezier(0, x, y, points[0], points[1], points[2], points[3]);

        for (t = 0.01; t <= 1; t += 0.01) {
          p2 = this.getPointOnQuadraticBezier(t, x, y, points[0], points[1], points[2], points[3]);
          len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
          p1 = p2;
        }

        return len;

      case PathParser.ARC:
        {
          // Approximates by breaking curve into line segments
          len = 0.0;
          var start = points[4]; // 4 = theta

          var dTheta = points[5]; // 5 = dTheta

          var end = points[4] + dTheta;
          var inc = Math.PI / 180.0; // 1 degree resolution

          if (Math.abs(start - end) < inc) {
            inc = Math.abs(start - end);
          } // Note: for purpose of calculating arc length, not going to worry about rotating X-axis by angle psi


          p1 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);

          if (dTheta < 0) {
            // clockwise
            for (t = start - inc; t > end; t -= inc) {
              p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
              len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
              p1 = p2;
            }
          } else {
            // counter-clockwise
            for (t = start + inc; t < end; t += inc) {
              p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
              len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
              p1 = p2;
            }
          }

          p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
          len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
          return len;
        }
    }

    return 0;
  }

  getPointOnLine(dist, p1x, p1y, p2x, p2y) {
    var fromX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : p1x;
    var fromY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : p1y;
    var m = (p2y - p1y) / (p2x - p1x + PSEUDO_ZERO);
    var run = Math.sqrt(dist * dist / (1 + m * m));

    if (p2x < p1x) {
      run *= -1;
    }

    var rise = m * run;
    var pt = null;

    if (p2x === p1x) {
      // vertical line
      pt = {
        x: fromX,
        y: fromY + rise
      };
    } else if ((fromY - p1y) / (fromX - p1x + PSEUDO_ZERO) === m) {
      pt = {
        x: fromX + run,
        y: fromY + rise
      };
    } else {
      var ix = 0;
      var iy = 0;
      var len = this.getLineLength(p1x, p1y, p2x, p2y);

      if (len < PSEUDO_ZERO) {
        return null;
      }

      var u = (fromX - p1x) * (p2x - p1x) + (fromY - p1y) * (p2y - p1y);
      u /= len * len;
      ix = p1x + u * (p2x - p1x);
      iy = p1y + u * (p2y - p1y);
      var pRise = this.getLineLength(fromX, fromY, ix, iy);
      var pRun = Math.sqrt(dist * dist - pRise * pRise);
      run = Math.sqrt(pRun * pRun / (1 + m * m));

      if (p2x < p1x) {
        run *= -1;
      }

      rise = m * run;
      pt = {
        x: ix + run,
        y: iy + rise
      };
    }

    return pt;
  }

  getPointOnPath(distance) {
    var fullLen = this.getPathLength();
    var cumulativePathLength = 0;
    var p = null;

    if (distance < -0.00005 || distance - 0.00005 > fullLen) {
      return null;
    }

    var {
      dataArray
    } = this;

    for (var command of dataArray) {
      if (command && (command.pathLength < 0.00005 || cumulativePathLength + command.pathLength + 0.00005 < distance)) {
        cumulativePathLength += command.pathLength;
        continue;
      }

      var delta = distance - cumulativePathLength;
      var currentT = 0;

      switch (command.type) {
        case PathParser.LINE_TO:
          p = this.getPointOnLine(delta, command.start.x, command.start.y, command.points[0], command.points[1], command.start.x, command.start.y);
          break;

        case PathParser.ARC:
          {
            var start = command.points[4]; // 4 = theta

            var dTheta = command.points[5]; // 5 = dTheta

            var end = command.points[4] + dTheta;
            currentT = start + delta / command.pathLength * dTheta;

            if (dTheta < 0 && currentT < end || dTheta >= 0 && currentT > end) {
              break;
            }

            p = this.getPointOnEllipticalArc(command.points[0], command.points[1], command.points[2], command.points[3], currentT, command.points[6]);
            break;
          }

        case PathParser.CURVE_TO:
          currentT = delta / command.pathLength;

          if (currentT > 1) {
            currentT = 1;
          }

          p = this.getPointOnCubicBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3], command.points[4], command.points[5]);
          break;

        case PathParser.QUAD_TO:
          currentT = delta / command.pathLength;

          if (currentT > 1) {
            currentT = 1;
          }

          p = this.getPointOnQuadraticBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3]);
          break;
      }

      if (p) {
        return p;
      }

      break;
    }

    return null;
  }

  getLineLength(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }

  getPathLength() {
    if (this.pathLength === -1) {
      this.pathLength = this.dataArray.reduce((length, command) => command.pathLength > 0 ? length + command.pathLength : length, 0);
    }

    return this.pathLength;
  }

  getPointOnCubicBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
    var x = p4x * CB1(pct) + p3x * CB2(pct) + p2x * CB3(pct) + p1x * CB4(pct);
    var y = p4y * CB1(pct) + p3y * CB2(pct) + p2y * CB3(pct) + p1y * CB4(pct);
    return {
      x,
      y
    };
  }

  getPointOnQuadraticBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y) {
    var x = p3x * QB1(pct) + p2x * QB2(pct) + p1x * QB3(pct);
    var y = p3y * QB1(pct) + p2y * QB2(pct) + p1y * QB3(pct);
    return {
      x,
      y
    };
  }

  getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
    var cosPsi = Math.cos(psi);
    var sinPsi = Math.sin(psi);
    var pt = {
      x: rx * Math.cos(theta),
      y: ry * Math.sin(theta)
    };
    return {
      x: cx + (pt.x * cosPsi - pt.y * sinPsi),
      y: cy + (pt.x * sinPsi + pt.y * cosPsi)
    };
  } // TODO need some optimisations. possibly build cache only for curved segments?


  buildEquidistantCache(inputStep, inputPrecision) {
    var fullLen = this.getPathLength();
    var precision = inputPrecision || 0.25; // accuracy vs performance

    var step = inputStep || fullLen / 100;

    if (!this.equidistantCache || this.equidistantCache.step !== step || this.equidistantCache.precision !== precision) {
      // Prepare cache
      this.equidistantCache = {
        step,
        precision,
        points: []
      }; // Calculate points

      var s = 0;

      for (var l = 0; l <= fullLen; l += precision) {
        var p0 = this.getPointOnPath(l);
        var p1 = this.getPointOnPath(l + precision);

        if (!p0 || !p1) {
          continue;
        }

        s += this.getLineLength(p0.x, p0.y, p1.x, p1.y);

        if (s >= step) {
          this.equidistantCache.points.push({
            x: p0.x,
            y: p0.y,
            distance: l
          });
          s -= step;
        }
      }
    }
  }

  getEquidistantPointOnPath(targetDistance, step, precision) {
    this.buildEquidistantCache(step, precision);

    if (targetDistance < 0 || targetDistance - this.getPathLength() > 0.00005) {
      return null;
    }

    var idx = Math.round(targetDistance / this.getPathLength() * (this.equidistantCache.points.length - 1));
    return this.equidistantCache.points[idx] || null;
  }

}

var dataUriRegex = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
class ImageElement extends RenderedElement {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
    this.type = 'image';
    this.loaded = false;
    var href = this.getHrefAttribute().getString();

    if (!href) {
      return;
    }

    var isSvg = href.endsWith('.svg') || /^\s*data:image\/svg\+xml/i.test(href);
    document.images.push(this);

    if (!isSvg) {
      void this.loadImage(href);
    } else {
      void this.loadSvg(href);
    }

    this.isSvg = isSvg;
  }

  loadImage(href) {
    var _this = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      try {
        var image = yield _this.document.createImage(href);
        _this.image = image;
      } catch (err) {
        console.error("Error while loading image \"".concat(href, "\":"), err);
      }

      _this.loaded = true;
    })();
  }

  loadSvg(href) {
    var _this2 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      var match = dataUriRegex.exec(href);

      if (match) {
        var data = match[5];

        if (match[4] === 'base64') {
          _this2.image = atob(data);
        } else {
          _this2.image = decodeURIComponent(data);
        }
      } else {
        try {
          var response = yield _this2.document.fetch(href);
          var svg = yield response.text();
          _this2.image = svg;
        } catch (err) {
          console.error("Error while loading image \"".concat(href, "\":"), err);
        }
      }

      _this2.loaded = true;
    })();
  }

  renderChildren(ctx) {
    var {
      document,
      image,
      loaded
    } = this;
    var x = this.getAttribute('x').getPixels('x');
    var y = this.getAttribute('y').getPixels('y');
    var width = this.getStyle('width').getPixels('x');
    var height = this.getStyle('height').getPixels('y');

    if (!loaded || !image || !width || !height) {
      return;
    }

    ctx.save();
    ctx.translate(x, y);

    if (this.isSvg) {
      var subDocument = document.canvg.forkString(ctx, this.image, {
        ignoreMouse: true,
        ignoreAnimation: true,
        ignoreDimensions: true,
        ignoreClear: true,
        offsetX: 0,
        offsetY: 0,
        scaleWidth: width,
        scaleHeight: height
      });
      subDocument.document.documentElement.parent = this;
      void subDocument.render();
    } else {
      var _image = this.image;
      document.setViewBox({
        ctx,
        aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
        width,
        desiredWidth: _image.width,
        height,
        desiredHeight: _image.height
      });

      if (this.loaded) {
        if (typeof _image.complete === 'undefined' || _image.complete) {
          ctx.drawImage(_image, 0, 0);
        }
      }
    }

    ctx.restore();
  }

  getBoundingBox() {
    var x = this.getAttribute('x').getPixels('x');
    var y = this.getAttribute('y').getPixels('y');
    var width = this.getStyle('width').getPixels('x');
    var height = this.getStyle('height').getPixels('y');
    return new BoundingBox(x, y, x + width, y + height);
  }

}

class SymbolElement extends RenderedElement {
  constructor() {
    super(...arguments);
    this.type = 'symbol';
  }

  render(_) {// NO RENDER
  }

}

class SVGFontLoader {
  constructor(document) {
    this.document = document;
    this.loaded = false;
    document.fonts.push(this);
  }

  load(fontFamily, url) {
    var _this = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      try {
        var {
          document
        } = _this;
        var svgDocument = yield document.canvg.parser.load(url);
        var fonts = svgDocument.getElementsByTagName('font');
        Array.from(fonts).forEach(fontNode => {
          var font = document.createElement(fontNode);
          document.definitions[fontFamily] = font;
        });
      } catch (err) {
        console.error("Error while loading font \"".concat(url, "\":"), err);
      }

      _this.loaded = true;
    })();
  }

}

class StyleElement extends Element {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
    this.type = 'style';
    var css = compressSpaces(Array.from(node.childNodes) // NEED TEST
    .map(_ => _.textContent).join('').replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, '') // remove comments
    .replace(/@import.*;/g, '') // remove imports
    );
    var cssDefs = css.split('}');
    cssDefs.forEach(_ => {
      var def = _.trim();

      if (!def) {
        return;
      }

      var cssParts = def.split('{');
      var cssClasses = cssParts[0].split(',');
      var cssProps = cssParts[1].split(';');
      cssClasses.forEach(_ => {
        var cssClass = _.trim();

        if (!cssClass) {
          return;
        }

        var props = document.styles[cssClass] || {};
        cssProps.forEach(cssProp => {
          var prop = cssProp.indexOf(':');
          var name = cssProp.substr(0, prop).trim();
          var value = cssProp.substr(prop + 1, cssProp.length - prop).trim();

          if (name && value) {
            props[name] = new Property(document, name, value);
          }
        });
        document.styles[cssClass] = props;
        document.stylesSpecificity[cssClass] = getSelectorSpecificity(cssClass);

        if (cssClass === '@font-face') {
          //  && !nodeEnv
          var fontFamily = props['font-family'].getString().replace(/"|'/g, '');
          var srcs = props.src.getString().split(',');
          srcs.forEach(src => {
            if (src.indexOf('format("svg")') > 0) {
              var url = parseExternalUrl(src);

              if (url) {
                void new SVGFontLoader(document).load(fontFamily, url);
              }
            }
          });
        }
      });
    });
  }

}
StyleElement.parseExternalUrl = parseExternalUrl;

class UseElement extends RenderedElement {
  constructor() {
    super(...arguments);
    this.type = 'use';
  }

  setContext(ctx) {
    super.setContext(ctx);
    var xAttr = this.getAttribute('x');
    var yAttr = this.getAttribute('y');

    if (xAttr.hasValue()) {
      ctx.translate(xAttr.getPixels('x'), 0);
    }

    if (yAttr.hasValue()) {
      ctx.translate(0, yAttr.getPixels('y'));
    }
  }

  path(ctx) {
    var {
      element
    } = this;

    if (element) {
      element.path(ctx);
    }
  }

  renderChildren(ctx) {
    var {
      document,
      element
    } = this;

    if (element) {
      var tempSvg = element;

      if (element.type === 'symbol') {
        // render me using a temporary svg element in symbol cases (http://www.w3.org/TR/SVG/struct.html#UseElement)
        tempSvg = new SVGElement(document, null);
        tempSvg.attributes.viewBox = new Property(document, 'viewBox', element.getAttribute('viewBox').getString());
        tempSvg.attributes.preserveAspectRatio = new Property(document, 'preserveAspectRatio', element.getAttribute('preserveAspectRatio').getString());
        tempSvg.attributes.overflow = new Property(document, 'overflow', element.getAttribute('overflow').getString());
        tempSvg.children = element.children; // element is still the parent of the children

        element.styles.opacity = new Property(document, 'opacity', this.calculateOpacity());
      }

      if (tempSvg.type === 'svg') {
        var widthStyle = this.getStyle('width', false, true);
        var heightStyle = this.getStyle('height', false, true); // if symbol or svg, inherit width/height from me

        if (widthStyle.hasValue()) {
          tempSvg.attributes.width = new Property(document, 'width', widthStyle.getString());
        }

        if (heightStyle.hasValue()) {
          tempSvg.attributes.height = new Property(document, 'height', heightStyle.getString());
        }
      }

      var oldParent = tempSvg.parent;
      tempSvg.parent = this;
      tempSvg.render(ctx);
      tempSvg.parent = oldParent;
    }
  }

  getBoundingBox(ctx) {
    var {
      element
    } = this;

    if (element) {
      return element.getBoundingBox(ctx);
    }

    return null;
  }

  elementTransform() {
    var {
      document,
      element
    } = this;
    return Transform.fromElement(document, element);
  }

  get element() {
    if (!this.cachedElement) {
      this.cachedElement = this.getHrefAttribute().getDefinition();
    }

    return this.cachedElement;
  }

}

function imGet(img, x, y, width, _height, rgba) {
  return img[y * width * 4 + x * 4 + rgba];
}

function imSet(img, x, y, width, _height, rgba, val) {
  img[y * width * 4 + x * 4 + rgba] = val;
}

function m(matrix, i, v) {
  var mi = matrix[i];
  return mi * v;
}

function c(a, m1, m2, m3) {
  return m1 + Math.cos(a) * m2 + Math.sin(a) * m3;
}

class FeColorMatrixElement extends Element {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
    this.type = 'feColorMatrix';
    var matrix = toNumbers(this.getAttribute('values').getString());

    switch (this.getAttribute('type').getString('matrix')) {
      // http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
      case 'saturate':
        {
          var s = matrix[0];
          /* eslint-disable array-element-newline */

          matrix = [0.213 + 0.787 * s, 0.715 - 0.715 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 + 0.285 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 - 0.715 * s, 0.072 + 0.928 * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
          /* eslint-enable array-element-newline */

          break;
        }

      case 'hueRotate':
        {
          var a = matrix[0] * Math.PI / 180.0;
          /* eslint-disable array-element-newline */

          matrix = [c(a, 0.213, 0.787, -0.213), c(a, 0.715, -0.715, -0.715), c(a, 0.072, -0.072, 0.928), 0, 0, c(a, 0.213, -0.213, 0.143), c(a, 0.715, 0.285, 0.140), c(a, 0.072, -0.072, -0.283), 0, 0, c(a, 0.213, -0.213, -0.787), c(a, 0.715, -0.715, 0.715), c(a, 0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
          /* eslint-enable array-element-newline */

          break;
        }

      case 'luminanceToAlpha':
        /* eslint-disable array-element-newline */
        matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1];
        /* eslint-enable array-element-newline */

        break;
    }

    this.matrix = matrix;
    this.includeOpacity = this.getAttribute('includeOpacity').hasValue();
  }

  apply(ctx, _x, _y, width, height) {
    // assuming x==0 && y==0 for now
    var {
      includeOpacity,
      matrix
    } = this;
    var srcData = ctx.getImageData(0, 0, width, height);

    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var r = imGet(srcData.data, x, y, width, height, 0);
        var g = imGet(srcData.data, x, y, width, height, 1);
        var b = imGet(srcData.data, x, y, width, height, 2);
        var a = imGet(srcData.data, x, y, width, height, 3);
        var nr = m(matrix, 0, r) + m(matrix, 1, g) + m(matrix, 2, b) + m(matrix, 3, a) + m(matrix, 4, 1);
        var ng = m(matrix, 5, r) + m(matrix, 6, g) + m(matrix, 7, b) + m(matrix, 8, a) + m(matrix, 9, 1);
        var nb = m(matrix, 10, r) + m(matrix, 11, g) + m(matrix, 12, b) + m(matrix, 13, a) + m(matrix, 14, 1);
        var na = m(matrix, 15, r) + m(matrix, 16, g) + m(matrix, 17, b) + m(matrix, 18, a) + m(matrix, 19, 1);

        if (includeOpacity) {
          nr = 0;
          ng = 0;
          nb = 0;
          na *= a / 255;
        }

        imSet(srcData.data, x, y, width, height, 0, nr);
        imSet(srcData.data, x, y, width, height, 1, ng);
        imSet(srcData.data, x, y, width, height, 2, nb);
        imSet(srcData.data, x, y, width, height, 3, na);
      }
    }

    ctx.clearRect(0, 0, width, height);
    ctx.putImageData(srcData, 0, 0);
  }

}

class MaskElement extends Element {
  constructor() {
    super(...arguments);
    this.type = 'mask';
  }

  apply(ctx, element) {
    var {
      document
    } = this; // render as temp svg

    var x = this.getAttribute('x').getPixels('x');
    var y = this.getAttribute('y').getPixels('y');
    var width = this.getStyle('width').getPixels('x');
    var height = this.getStyle('height').getPixels('y');

    if (!width && !height) {
      var boundingBox = new BoundingBox();
      this.children.forEach(child => {
        boundingBox.addBoundingBox(child.getBoundingBox(ctx));
      });
      x = Math.floor(boundingBox.x1);
      y = Math.floor(boundingBox.y1);
      width = Math.floor(boundingBox.width);
      height = Math.floor(boundingBox.height);
    }

    var ignoredStyles = this.removeStyles(element, MaskElement.ignoreStyles);
    var maskCanvas = document.createCanvas(x + width, y + height);
    var maskCtx = maskCanvas.getContext('2d');
    document.screen.setDefaults(maskCtx);
    this.renderChildren(maskCtx); // convert mask to alpha with a fake node
    // TODO: refactor out apply from feColorMatrix

    new FeColorMatrixElement(document, {
      nodeType: 1,
      childNodes: [],
      attributes: [{
        nodeName: 'type',
        value: 'luminanceToAlpha'
      }, {
        nodeName: 'includeOpacity',
        value: 'true'
      }]
    }).apply(maskCtx, 0, 0, x + width, y + height);
    var tmpCanvas = document.createCanvas(x + width, y + height);
    var tmpCtx = tmpCanvas.getContext('2d');
    document.screen.setDefaults(tmpCtx);
    element.render(tmpCtx);
    tmpCtx.globalCompositeOperation = 'destination-in';
    tmpCtx.fillStyle = maskCtx.createPattern(maskCanvas, 'no-repeat');
    tmpCtx.fillRect(0, 0, x + width, y + height);
    ctx.fillStyle = tmpCtx.createPattern(tmpCanvas, 'no-repeat');
    ctx.fillRect(0, 0, x + width, y + height); // reassign mask

    this.restoreStyles(element, ignoredStyles);
  }

  render(_) {// NO RENDER
  }

}
MaskElement.ignoreStyles = ['mask', 'transform', 'clip-path'];

var noop = () => {// NOOP
};

class ClipPathElement extends Element {
  constructor() {
    super(...arguments);
    this.type = 'clipPath';
  }

  apply(ctx) {
    var {
      document
    } = this;
    var contextProto = Reflect.getPrototypeOf(ctx);
    var {
      beginPath,
      closePath
    } = ctx;

    if (contextProto) {
      contextProto.beginPath = noop;
      contextProto.closePath = noop;
    }

    Reflect.apply(beginPath, ctx, []);
    this.children.forEach(child => {
      if (typeof child.path === 'undefined') {
        return;
      }

      var transform = typeof child.elementTransform !== 'undefined' ? child.elementTransform() : null; // handle <use />

      if (!transform) {
        transform = Transform.fromElement(document, child);
      }

      if (transform) {
        transform.apply(ctx);
      }

      child.path(ctx);

      if (contextProto) {
        contextProto.closePath = closePath;
      }

      if (transform) {
        transform.unapply(ctx);
      }
    });
    Reflect.apply(closePath, ctx, []);
    ctx.clip();

    if (contextProto) {
      contextProto.beginPath = beginPath;
      contextProto.closePath = closePath;
    }
  }

  render(_) {// NO RENDER
  }

}

class FilterElement extends Element {
  constructor() {
    super(...arguments);
    this.type = 'filter';
  }

  apply(ctx, element) {
    // render as temp svg
    var {
      document,
      children
    } = this;
    var boundingBox = element.getBoundingBox(ctx);

    if (!boundingBox) {
      return;
    }

    var px = 0;
    var py = 0;
    children.forEach(child => {
      var efd = child.extraFilterDistance || 0;
      px = Math.max(px, efd);
      py = Math.max(py, efd);
    });
    var width = Math.floor(boundingBox.width);
    var height = Math.floor(boundingBox.height);
    var tmpCanvasWidth = width + 2 * px;
    var tmpCanvasHeight = height + 2 * py;

    if (tmpCanvasWidth < 1 || tmpCanvasHeight < 1) {
      return;
    }

    var x = Math.floor(boundingBox.x);
    var y = Math.floor(boundingBox.y);
    var ignoredStyles = this.removeStyles(element, FilterElement.ignoreStyles);
    var tmpCanvas = document.createCanvas(tmpCanvasWidth, tmpCanvasHeight);
    var tmpCtx = tmpCanvas.getContext('2d');
    document.screen.setDefaults(tmpCtx);
    tmpCtx.translate(-x + px, -y + py);
    element.render(tmpCtx); // apply filters

    children.forEach(child => {
      if (typeof child.apply === 'function') {
        child.apply(tmpCtx, 0, 0, tmpCanvasWidth, tmpCanvasHeight);
      }
    }); // render on me

    ctx.drawImage(tmpCanvas, 0, 0, tmpCanvasWidth, tmpCanvasHeight, x - px, y - py, tmpCanvasWidth, tmpCanvasHeight);
    this.restoreStyles(element, ignoredStyles);
  }

  render(_) {// NO RENDER
  }

}
FilterElement.ignoreStyles = ['filter', 'transform', 'clip-path'];

class FeDropShadowElement extends Element {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
    this.type = 'feDropShadow';
    this.addStylesFromStyleDefinition();
  }

  apply(_, _x, _y, _width, _height) {// TODO: implement
  }

}

class FeMorphologyElement extends Element {
  constructor() {
    super(...arguments);
    this.type = 'feMorphology';
  }

  apply(_, _x, _y, _width, _height) {// TODO: implement
  }

}

class FeCompositeElement extends Element {
  constructor() {
    super(...arguments);
    this.type = 'feComposite';
  }

  apply(_, _x, _y, _width, _height) {// TODO: implement
  }

}

class FeGaussianBlurElement extends Element {
  constructor(document, node, captureTextNodes) {
    super(document, node, captureTextNodes);
    this.type = 'feGaussianBlur';
    this.blurRadius = Math.floor(this.getAttribute('stdDeviation').getNumber());
    this.extraFilterDistance = this.blurRadius;
  }

  apply(ctx, x, y, width, height) {
    var {
      document,
      blurRadius
    } = this;
    var body = document.window ? document.window.document.body : null;
    var canvas = ctx.canvas; // StackBlur requires canvas be on document

    canvas.id = document.getUniqueId();

    if (body) {
      canvas.style.display = 'none';
      body.appendChild(canvas);
    }

    (0,stackblur_canvas__WEBPACK_IMPORTED_MODULE_19__.canvasRGBA)(canvas, x, y, width, height, blurRadius);

    if (body) {
      body.removeChild(canvas);
    }
  }

}

class TitleElement extends Element {
  constructor() {
    super(...arguments);
    this.type = 'title';
  }

}

class DescElement extends Element {
  constructor() {
    super(...arguments);
    this.type = 'desc';
  }

}

var elements = {
  'svg': SVGElement,
  'rect': RectElement,
  'circle': CircleElement,
  'ellipse': EllipseElement,
  'line': LineElement,
  'polyline': PolylineElement,
  'polygon': PolygonElement,
  'path': PathElement,
  'pattern': PatternElement,
  'marker': MarkerElement,
  'defs': DefsElement,
  'linearGradient': LinearGradientElement,
  'radialGradient': RadialGradientElement,
  'stop': StopElement,
  'animate': AnimateElement,
  'animateColor': AnimateColorElement,
  'animateTransform': AnimateTransformElement,
  'font': FontElement,
  'font-face': FontFaceElement,
  'missing-glyph': MissingGlyphElement,
  'glyph': GlyphElement,
  'text': TextElement,
  'tspan': TSpanElement,
  'tref': TRefElement,
  'a': AElement,
  'textPath': TextPathElement,
  'image': ImageElement,
  'g': GElement,
  'symbol': SymbolElement,
  'style': StyleElement,
  'use': UseElement,
  'mask': MaskElement,
  'clipPath': ClipPathElement,
  'filter': FilterElement,
  'feDropShadow': FeDropShadowElement,
  'feMorphology': FeMorphologyElement,
  'feComposite': FeCompositeElement,
  'feColorMatrix': FeColorMatrixElement,
  'feGaussianBlur': FeGaussianBlurElement,
  'title': TitleElement,
  'desc': DescElement
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function createCanvas(width, height) {
  var canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function createImage(_x) {
  return _createImage.apply(this, arguments);
}

function _createImage() {
  _createImage = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (src) {
    var anonymousCrossOrigin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var image = document.createElement('img');

    if (anonymousCrossOrigin) {
      image.crossOrigin = 'Anonymous';
    }

    return new Promise((resolve, reject) => {
      image.onload = () => {
        resolve(image);
      };

      image.onerror = (_event, _source, _lineno, _colno, error) => {
        reject(error);
      };

      image.src = src;
    });
  });
  return _createImage.apply(this, arguments);
}

class Document {
  constructor(canvg) {
    var {
      rootEmSize = 12,
      emSize = 12,
      createCanvas = Document.createCanvas,
      createImage = Document.createImage,
      anonymousCrossOrigin
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.canvg = canvg;
    this.definitions = {};
    this.styles = {};
    this.stylesSpecificity = {};
    this.images = [];
    this.fonts = [];
    this.emSizeStack = [];
    this.uniqueId = 0;
    this.screen = canvg.screen;
    this.rootEmSize = rootEmSize;
    this.emSize = emSize;
    this.createCanvas = createCanvas;
    this.createImage = this.bindCreateImage(createImage, anonymousCrossOrigin);
    this.screen.wait(this.isImagesLoaded.bind(this));
    this.screen.wait(this.isFontsLoaded.bind(this));
  }

  bindCreateImage(createImage, anonymousCrossOrigin) {
    if (typeof anonymousCrossOrigin === 'boolean') {
      return (source, forceAnonymousCrossOrigin) => createImage(source, typeof forceAnonymousCrossOrigin === 'boolean' ? forceAnonymousCrossOrigin : anonymousCrossOrigin);
    }

    return createImage;
  }

  get window() {
    return this.screen.window;
  }

  get fetch() {
    return this.screen.fetch;
  }

  get ctx() {
    return this.screen.ctx;
  }

  get emSize() {
    var {
      emSizeStack
    } = this;
    return emSizeStack[emSizeStack.length - 1];
  }

  set emSize(value) {
    var {
      emSizeStack
    } = this;
    emSizeStack.push(value);
  }

  popEmSize() {
    var {
      emSizeStack
    } = this;
    emSizeStack.pop();
  }

  getUniqueId() {
    return "canvg".concat(++this.uniqueId);
  }

  isImagesLoaded() {
    return this.images.every(_ => _.loaded);
  }

  isFontsLoaded() {
    return this.fonts.every(_ => _.loaded);
  }

  createDocumentElement(document) {
    var documentElement = this.createElement(document.documentElement);
    documentElement.root = true;
    documentElement.addStylesFromStyleDefinition();
    this.documentElement = documentElement;
    return documentElement;
  }

  createElement(node) {
    var elementType = node.nodeName.replace(/^[^:]+:/, '');
    var ElementType = Document.elementTypes[elementType];

    if (typeof ElementType !== 'undefined') {
      return new ElementType(this, node);
    }

    return new UnknownElement(this, node);
  }

  createTextNode(node) {
    return new TextNode(this, node);
  }

  setViewBox(config) {
    this.screen.setViewBox(_objectSpread$1({
      document: this
    }, config));
  }

}
Document.createCanvas = createCanvas;
Document.createImage = createImage;
Document.elementTypes = elements;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * SVG renderer on canvas.
 */

class Canvg {
  /**
   * Main constructor.
   * @param ctx - Rendering context.
   * @param svg - SVG Document.
   * @param options - Rendering options.
   */
  constructor(ctx, svg) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    this.parser = new Parser(options);
    this.screen = new Screen(ctx, options);
    this.options = options;
    var document = new Document(this, options);
    var documentElement = document.createDocumentElement(svg);
    this.document = document;
    this.documentElement = documentElement;
  }
  /**
   * Create Canvg instance from SVG source string or URL.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */


  static from(ctx, svg) {
    var _arguments = arguments;
    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      var options = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : {};
      var parser = new Parser(options);
      var svgDocument = yield parser.parse(svg);
      return new Canvg(ctx, svgDocument, options);
    })();
  }
  /**
   * Create Canvg instance from SVG source string.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */


  static fromString(ctx, svg) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var parser = new Parser(options);
    var svgDocument = parser.parseFromString(svg);
    return new Canvg(ctx, svgDocument, options);
  }
  /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */


  fork(ctx, svg) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return Canvg.from(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
  }
  /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */


  forkString(ctx, svg) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return Canvg.fromString(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
  }
  /**
   * Document is ready promise.
   * @returns Ready promise.
   */


  ready() {
    return this.screen.ready();
  }
  /**
   * Document is ready value.
   * @returns Is ready or not.
   */


  isReady() {
    return this.screen.isReady();
  }
  /**
   * Render only first frame, ignoring animations and mouse.
   * @param options - Rendering options.
   */


  render() {
    var _arguments2 = arguments,
        _this = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      var options = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : {};

      _this.start(_objectSpread({
        enableRedraw: true,
        ignoreAnimation: true,
        ignoreMouse: true
      }, options));

      yield _this.ready();

      _this.stop();
    })();
  }
  /**
   * Start rendering.
   * @param options - Render options.
   */


  start() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var {
      documentElement,
      screen,
      options: baseOptions
    } = this;
    screen.start(documentElement, _objectSpread(_objectSpread({
      enableRedraw: true
    }, baseOptions), options));
  }
  /**
   * Stop rendering.
   */


  stop() {
    this.screen.stop();
  }
  /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */


  resize(width) {
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
    var preserveAspectRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    this.documentElement.resize(width, height, preserveAspectRatio);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvg);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==


/***/ }),

/***/ 3213:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMMAND_ARG_COUNTS": () => (/* binding */ N),
/* harmony export */   "SVGPathData": () => (/* binding */ _),
/* harmony export */   "SVGPathDataParser": () => (/* binding */ f),
/* harmony export */   "SVGPathDataTransformer": () => (/* binding */ u),
/* harmony export */   "encodeSVGPath": () => (/* binding */ e)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t=function(r,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(r,e)};function r(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}function e(t){var r="";Array.isArray(t)||(t=[t]);for(var e=0;e<t.length;e++){var i=t[e];if(i.type===_.CLOSE_PATH)r+="z";else if(i.type===_.HORIZ_LINE_TO)r+=(i.relative?"h":"H")+i.x;else if(i.type===_.VERT_LINE_TO)r+=(i.relative?"v":"V")+i.y;else if(i.type===_.MOVE_TO)r+=(i.relative?"m":"M")+i.x+" "+i.y;else if(i.type===_.LINE_TO)r+=(i.relative?"l":"L")+i.x+" "+i.y;else if(i.type===_.CURVE_TO)r+=(i.relative?"c":"C")+i.x1+" "+i.y1+" "+i.x2+" "+i.y2+" "+i.x+" "+i.y;else if(i.type===_.SMOOTH_CURVE_TO)r+=(i.relative?"s":"S")+i.x2+" "+i.y2+" "+i.x+" "+i.y;else if(i.type===_.QUAD_TO)r+=(i.relative?"q":"Q")+i.x1+" "+i.y1+" "+i.x+" "+i.y;else if(i.type===_.SMOOTH_QUAD_TO)r+=(i.relative?"t":"T")+i.x+" "+i.y;else{if(i.type!==_.ARC)throw new Error('Unexpected command type "'+i.type+'" at index '+e+".");r+=(i.relative?"a":"A")+i.rX+" "+i.rY+" "+i.xRot+" "+ +i.lArcFlag+" "+ +i.sweepFlag+" "+i.x+" "+i.y}}return r}function i(t,r){var e=t[0],i=t[1];return[e*Math.cos(r)-i*Math.sin(r),e*Math.sin(r)+i*Math.cos(r)]}function a(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=0;e<t.length;e++)if("number"!=typeof t[e])throw new Error("assertNumbers arguments["+e+"] is not a number. "+typeof t[e]+" == typeof "+t[e]);return!0}var n=Math.PI;function o(t,r,e){t.lArcFlag=0===t.lArcFlag?0:1,t.sweepFlag=0===t.sweepFlag?0:1;var a=t.rX,o=t.rY,s=t.x,u=t.y;a=Math.abs(t.rX),o=Math.abs(t.rY);var h=i([(r-s)/2,(e-u)/2],-t.xRot/180*n),c=h[0],y=h[1],p=Math.pow(c,2)/Math.pow(a,2)+Math.pow(y,2)/Math.pow(o,2);1<p&&(a*=Math.sqrt(p),o*=Math.sqrt(p)),t.rX=a,t.rY=o;var m=Math.pow(a,2)*Math.pow(y,2)+Math.pow(o,2)*Math.pow(c,2),O=(t.lArcFlag!==t.sweepFlag?1:-1)*Math.sqrt(Math.max(0,(Math.pow(a,2)*Math.pow(o,2)-m)/m)),l=a*y/o*O,T=-o*c/a*O,v=i([l,T],t.xRot/180*n);t.cX=v[0]+(r+s)/2,t.cY=v[1]+(e+u)/2,t.phi1=Math.atan2((y-T)/o,(c-l)/a),t.phi2=Math.atan2((-y-T)/o,(-c-l)/a),0===t.sweepFlag&&t.phi2>t.phi1&&(t.phi2-=2*n),1===t.sweepFlag&&t.phi2<t.phi1&&(t.phi2+=2*n),t.phi1*=180/n,t.phi2*=180/n}function s(t,r,e){a(t,r,e);var i=t*t+r*r-e*e;if(0>i)return[];if(0===i)return[[t*e/(t*t+r*r),r*e/(t*t+r*r)]];var n=Math.sqrt(i);return[[(t*e+r*n)/(t*t+r*r),(r*e-t*n)/(t*t+r*r)],[(t*e-r*n)/(t*t+r*r),(r*e+t*n)/(t*t+r*r)]]}var u,h=Math.PI/180;function c(t,r,e){return(1-e)*t+e*r}function y(t,r,e,i){return t+Math.cos(i/180*n)*r+Math.sin(i/180*n)*e}function p(t,r,e,i){var a=1e-6,n=r-t,o=e-r,s=3*n+3*(i-e)-6*o,u=6*(o-n),h=3*n;return Math.abs(s)<a?[-h/u]:function(t,r,e){void 0===e&&(e=1e-6);var i=t*t/4-r;if(i<-e)return[];if(i<=e)return[-t/2];var a=Math.sqrt(i);return[-t/2-a,-t/2+a]}(u/s,h/s,a)}function m(t,r,e,i,a){var n=1-a;return t*(n*n*n)+r*(3*n*n*a)+e*(3*n*a*a)+i*(a*a*a)}!function(t){function r(){return u((function(t,r,e){return t.relative&&(void 0!==t.x1&&(t.x1+=r),void 0!==t.y1&&(t.y1+=e),void 0!==t.x2&&(t.x2+=r),void 0!==t.y2&&(t.y2+=e),void 0!==t.x&&(t.x+=r),void 0!==t.y&&(t.y+=e),t.relative=!1),t}))}function e(){var t=NaN,r=NaN,e=NaN,i=NaN;return u((function(a,n,o){return a.type&_.SMOOTH_CURVE_TO&&(a.type=_.CURVE_TO,t=isNaN(t)?n:t,r=isNaN(r)?o:r,a.x1=a.relative?n-t:2*n-t,a.y1=a.relative?o-r:2*o-r),a.type&_.CURVE_TO?(t=a.relative?n+a.x2:a.x2,r=a.relative?o+a.y2:a.y2):(t=NaN,r=NaN),a.type&_.SMOOTH_QUAD_TO&&(a.type=_.QUAD_TO,e=isNaN(e)?n:e,i=isNaN(i)?o:i,a.x1=a.relative?n-e:2*n-e,a.y1=a.relative?o-i:2*o-i),a.type&_.QUAD_TO?(e=a.relative?n+a.x1:a.x1,i=a.relative?o+a.y1:a.y1):(e=NaN,i=NaN),a}))}function n(){var t=NaN,r=NaN;return u((function(e,i,a){if(e.type&_.SMOOTH_QUAD_TO&&(e.type=_.QUAD_TO,t=isNaN(t)?i:t,r=isNaN(r)?a:r,e.x1=e.relative?i-t:2*i-t,e.y1=e.relative?a-r:2*a-r),e.type&_.QUAD_TO){t=e.relative?i+e.x1:e.x1,r=e.relative?a+e.y1:e.y1;var n=e.x1,o=e.y1;e.type=_.CURVE_TO,e.x1=((e.relative?0:i)+2*n)/3,e.y1=((e.relative?0:a)+2*o)/3,e.x2=(e.x+2*n)/3,e.y2=(e.y+2*o)/3}else t=NaN,r=NaN;return e}))}function u(t){var r=0,e=0,i=NaN,a=NaN;return function(n){if(isNaN(i)&&!(n.type&_.MOVE_TO))throw new Error("path must start with moveto");var o=t(n,r,e,i,a);return n.type&_.CLOSE_PATH&&(r=i,e=a),void 0!==n.x&&(r=n.relative?r+n.x:n.x),void 0!==n.y&&(e=n.relative?e+n.y:n.y),n.type&_.MOVE_TO&&(i=r,a=e),o}}function O(t,r,e,i,n,o){return a(t,r,e,i,n,o),u((function(a,s,u,h){var c=a.x1,y=a.x2,p=a.relative&&!isNaN(h),m=void 0!==a.x?a.x:p?0:s,O=void 0!==a.y?a.y:p?0:u;function l(t){return t*t}a.type&_.HORIZ_LINE_TO&&0!==r&&(a.type=_.LINE_TO,a.y=a.relative?0:u),a.type&_.VERT_LINE_TO&&0!==e&&(a.type=_.LINE_TO,a.x=a.relative?0:s),void 0!==a.x&&(a.x=a.x*t+O*e+(p?0:n)),void 0!==a.y&&(a.y=m*r+a.y*i+(p?0:o)),void 0!==a.x1&&(a.x1=a.x1*t+a.y1*e+(p?0:n)),void 0!==a.y1&&(a.y1=c*r+a.y1*i+(p?0:o)),void 0!==a.x2&&(a.x2=a.x2*t+a.y2*e+(p?0:n)),void 0!==a.y2&&(a.y2=y*r+a.y2*i+(p?0:o));var T=t*i-r*e;if(void 0!==a.xRot&&(1!==t||0!==r||0!==e||1!==i))if(0===T)delete a.rX,delete a.rY,delete a.xRot,delete a.lArcFlag,delete a.sweepFlag,a.type=_.LINE_TO;else{var v=a.xRot*Math.PI/180,f=Math.sin(v),N=Math.cos(v),x=1/l(a.rX),d=1/l(a.rY),E=l(N)*x+l(f)*d,A=2*f*N*(x-d),C=l(f)*x+l(N)*d,M=E*i*i-A*r*i+C*r*r,R=A*(t*i+r*e)-2*(E*e*i+C*t*r),g=E*e*e-A*t*e+C*t*t,I=(Math.atan2(R,M-g)+Math.PI)%Math.PI/2,S=Math.sin(I),L=Math.cos(I);a.rX=Math.abs(T)/Math.sqrt(M*l(L)+R*S*L+g*l(S)),a.rY=Math.abs(T)/Math.sqrt(M*l(S)-R*S*L+g*l(L)),a.xRot=180*I/Math.PI}return void 0!==a.sweepFlag&&0>T&&(a.sweepFlag=+!a.sweepFlag),a}))}function l(){return function(t){var r={};for(var e in t)r[e]=t[e];return r}}t.ROUND=function(t){function r(r){return Math.round(r*t)/t}return void 0===t&&(t=1e13),a(t),function(t){return void 0!==t.x1&&(t.x1=r(t.x1)),void 0!==t.y1&&(t.y1=r(t.y1)),void 0!==t.x2&&(t.x2=r(t.x2)),void 0!==t.y2&&(t.y2=r(t.y2)),void 0!==t.x&&(t.x=r(t.x)),void 0!==t.y&&(t.y=r(t.y)),void 0!==t.rX&&(t.rX=r(t.rX)),void 0!==t.rY&&(t.rY=r(t.rY)),t}},t.TO_ABS=r,t.TO_REL=function(){return u((function(t,r,e){return t.relative||(void 0!==t.x1&&(t.x1-=r),void 0!==t.y1&&(t.y1-=e),void 0!==t.x2&&(t.x2-=r),void 0!==t.y2&&(t.y2-=e),void 0!==t.x&&(t.x-=r),void 0!==t.y&&(t.y-=e),t.relative=!0),t}))},t.NORMALIZE_HVZ=function(t,r,e){return void 0===t&&(t=!0),void 0===r&&(r=!0),void 0===e&&(e=!0),u((function(i,a,n,o,s){if(isNaN(o)&&!(i.type&_.MOVE_TO))throw new Error("path must start with moveto");return r&&i.type&_.HORIZ_LINE_TO&&(i.type=_.LINE_TO,i.y=i.relative?0:n),e&&i.type&_.VERT_LINE_TO&&(i.type=_.LINE_TO,i.x=i.relative?0:a),t&&i.type&_.CLOSE_PATH&&(i.type=_.LINE_TO,i.x=i.relative?o-a:o,i.y=i.relative?s-n:s),i.type&_.ARC&&(0===i.rX||0===i.rY)&&(i.type=_.LINE_TO,delete i.rX,delete i.rY,delete i.xRot,delete i.lArcFlag,delete i.sweepFlag),i}))},t.NORMALIZE_ST=e,t.QT_TO_C=n,t.INFO=u,t.SANITIZE=function(t){void 0===t&&(t=0),a(t);var r=NaN,e=NaN,i=NaN,n=NaN;return u((function(a,o,s,u,h){var c=Math.abs,y=!1,p=0,m=0;if(a.type&_.SMOOTH_CURVE_TO&&(p=isNaN(r)?0:o-r,m=isNaN(e)?0:s-e),a.type&(_.CURVE_TO|_.SMOOTH_CURVE_TO)?(r=a.relative?o+a.x2:a.x2,e=a.relative?s+a.y2:a.y2):(r=NaN,e=NaN),a.type&_.SMOOTH_QUAD_TO?(i=isNaN(i)?o:2*o-i,n=isNaN(n)?s:2*s-n):a.type&_.QUAD_TO?(i=a.relative?o+a.x1:a.x1,n=a.relative?s+a.y1:a.y2):(i=NaN,n=NaN),a.type&_.LINE_COMMANDS||a.type&_.ARC&&(0===a.rX||0===a.rY||!a.lArcFlag)||a.type&_.CURVE_TO||a.type&_.SMOOTH_CURVE_TO||a.type&_.QUAD_TO||a.type&_.SMOOTH_QUAD_TO){var O=void 0===a.x?0:a.relative?a.x:a.x-o,l=void 0===a.y?0:a.relative?a.y:a.y-s;p=isNaN(i)?void 0===a.x1?p:a.relative?a.x:a.x1-o:i-o,m=isNaN(n)?void 0===a.y1?m:a.relative?a.y:a.y1-s:n-s;var T=void 0===a.x2?0:a.relative?a.x:a.x2-o,v=void 0===a.y2?0:a.relative?a.y:a.y2-s;c(O)<=t&&c(l)<=t&&c(p)<=t&&c(m)<=t&&c(T)<=t&&c(v)<=t&&(y=!0)}return a.type&_.CLOSE_PATH&&c(o-u)<=t&&c(s-h)<=t&&(y=!0),y?[]:a}))},t.MATRIX=O,t.ROTATE=function(t,r,e){void 0===r&&(r=0),void 0===e&&(e=0),a(t,r,e);var i=Math.sin(t),n=Math.cos(t);return O(n,i,-i,n,r-r*n+e*i,e-r*i-e*n)},t.TRANSLATE=function(t,r){return void 0===r&&(r=0),a(t,r),O(1,0,0,1,t,r)},t.SCALE=function(t,r){return void 0===r&&(r=t),a(t,r),O(t,0,0,r,0,0)},t.SKEW_X=function(t){return a(t),O(1,0,Math.atan(t),1,0,0)},t.SKEW_Y=function(t){return a(t),O(1,Math.atan(t),0,1,0,0)},t.X_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),a(t),O(-1,0,0,1,t,0)},t.Y_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),a(t),O(1,0,0,-1,0,t)},t.A_TO_C=function(){return u((function(t,r,e){return _.ARC===t.type?function(t,r,e){var a,n,s,u;t.cX||o(t,r,e);for(var y=Math.min(t.phi1,t.phi2),p=Math.max(t.phi1,t.phi2)-y,m=Math.ceil(p/90),O=new Array(m),l=r,T=e,v=0;v<m;v++){var f=c(t.phi1,t.phi2,v/m),N=c(t.phi1,t.phi2,(v+1)/m),x=N-f,d=4/3*Math.tan(x*h/4),E=[Math.cos(f*h)-d*Math.sin(f*h),Math.sin(f*h)+d*Math.cos(f*h)],A=E[0],C=E[1],M=[Math.cos(N*h),Math.sin(N*h)],R=M[0],g=M[1],I=[R+d*Math.sin(N*h),g-d*Math.cos(N*h)],S=I[0],L=I[1];O[v]={relative:t.relative,type:_.CURVE_TO};var H=function(r,e){var a=i([r*t.rX,e*t.rY],t.xRot),n=a[0],o=a[1];return[t.cX+n,t.cY+o]};a=H(A,C),O[v].x1=a[0],O[v].y1=a[1],n=H(S,L),O[v].x2=n[0],O[v].y2=n[1],s=H(R,g),O[v].x=s[0],O[v].y=s[1],t.relative&&(O[v].x1-=l,O[v].y1-=T,O[v].x2-=l,O[v].y2-=T,O[v].x-=l,O[v].y-=T),l=(u=[O[v].x,O[v].y])[0],T=u[1]}return O}(t,t.relative?0:r,t.relative?0:e):t}))},t.ANNOTATE_ARCS=function(){return u((function(t,r,e){return t.relative&&(r=0,e=0),_.ARC===t.type&&o(t,r,e),t}))},t.CLONE=l,t.CALCULATE_BOUNDS=function(){var t=function(t){var r={};for(var e in t)r[e]=t[e];return r},i=r(),a=n(),h=e(),c=u((function(r,e,n){var u=h(a(i(t(r))));function O(t){t>c.maxX&&(c.maxX=t),t<c.minX&&(c.minX=t)}function l(t){t>c.maxY&&(c.maxY=t),t<c.minY&&(c.minY=t)}if(u.type&_.DRAWING_COMMANDS&&(O(e),l(n)),u.type&_.HORIZ_LINE_TO&&O(u.x),u.type&_.VERT_LINE_TO&&l(u.y),u.type&_.LINE_TO&&(O(u.x),l(u.y)),u.type&_.CURVE_TO){O(u.x),l(u.y);for(var T=0,v=p(e,u.x1,u.x2,u.x);T<v.length;T++){0<(w=v[T])&&1>w&&O(m(e,u.x1,u.x2,u.x,w))}for(var f=0,N=p(n,u.y1,u.y2,u.y);f<N.length;f++){0<(w=N[f])&&1>w&&l(m(n,u.y1,u.y2,u.y,w))}}if(u.type&_.ARC){O(u.x),l(u.y),o(u,e,n);for(var x=u.xRot/180*Math.PI,d=Math.cos(x)*u.rX,E=Math.sin(x)*u.rX,A=-Math.sin(x)*u.rY,C=Math.cos(x)*u.rY,M=u.phi1<u.phi2?[u.phi1,u.phi2]:-180>u.phi2?[u.phi2+360,u.phi1+360]:[u.phi2,u.phi1],R=M[0],g=M[1],I=function(t){var r=t[0],e=t[1],i=180*Math.atan2(e,r)/Math.PI;return i<R?i+360:i},S=0,L=s(A,-d,0).map(I);S<L.length;S++){(w=L[S])>R&&w<g&&O(y(u.cX,d,A,w))}for(var H=0,U=s(C,-E,0).map(I);H<U.length;H++){var w;(w=U[H])>R&&w<g&&l(y(u.cY,E,C,w))}}return r}));return c.minX=1/0,c.maxX=-1/0,c.minY=1/0,c.maxY=-1/0,c}}(u||(u={}));var O,l=function(){function t(){}return t.prototype.round=function(t){return this.transform(u.ROUND(t))},t.prototype.toAbs=function(){return this.transform(u.TO_ABS())},t.prototype.toRel=function(){return this.transform(u.TO_REL())},t.prototype.normalizeHVZ=function(t,r,e){return this.transform(u.NORMALIZE_HVZ(t,r,e))},t.prototype.normalizeST=function(){return this.transform(u.NORMALIZE_ST())},t.prototype.qtToC=function(){return this.transform(u.QT_TO_C())},t.prototype.aToC=function(){return this.transform(u.A_TO_C())},t.prototype.sanitize=function(t){return this.transform(u.SANITIZE(t))},t.prototype.translate=function(t,r){return this.transform(u.TRANSLATE(t,r))},t.prototype.scale=function(t,r){return this.transform(u.SCALE(t,r))},t.prototype.rotate=function(t,r,e){return this.transform(u.ROTATE(t,r,e))},t.prototype.matrix=function(t,r,e,i,a,n){return this.transform(u.MATRIX(t,r,e,i,a,n))},t.prototype.skewX=function(t){return this.transform(u.SKEW_X(t))},t.prototype.skewY=function(t){return this.transform(u.SKEW_Y(t))},t.prototype.xSymmetry=function(t){return this.transform(u.X_AXIS_SYMMETRY(t))},t.prototype.ySymmetry=function(t){return this.transform(u.Y_AXIS_SYMMETRY(t))},t.prototype.annotateArcs=function(){return this.transform(u.ANNOTATE_ARCS())},t}(),T=function(t){return" "===t||"\t"===t||"\r"===t||"\n"===t},v=function(t){return"0".charCodeAt(0)<=t.charCodeAt(0)&&t.charCodeAt(0)<="9".charCodeAt(0)},f=function(t){function e(){var r=t.call(this)||this;return r.curNumber="",r.curCommandType=-1,r.curCommandRelative=!1,r.canParseCommandOrComma=!0,r.curNumberHasExp=!1,r.curNumberHasExpDigits=!1,r.curNumberHasDecimal=!1,r.curArgs=[],r}return r(e,t),e.prototype.finish=function(t){if(void 0===t&&(t=[]),this.parse(" ",t),0!==this.curArgs.length||!this.canParseCommandOrComma)throw new SyntaxError("Unterminated command at the path end.");return t},e.prototype.parse=function(t,r){var e=this;void 0===r&&(r=[]);for(var i=function(t){r.push(t),e.curArgs.length=0,e.canParseCommandOrComma=!0},a=0;a<t.length;a++){var n=t[a],o=!(this.curCommandType!==_.ARC||3!==this.curArgs.length&&4!==this.curArgs.length||1!==this.curNumber.length||"0"!==this.curNumber&&"1"!==this.curNumber),s=v(n)&&("0"===this.curNumber&&"0"===n||o);if(!v(n)||s)if("e"!==n&&"E"!==n)if("-"!==n&&"+"!==n||!this.curNumberHasExp||this.curNumberHasExpDigits)if("."!==n||this.curNumberHasExp||this.curNumberHasDecimal||o){if(this.curNumber&&-1!==this.curCommandType){var u=Number(this.curNumber);if(isNaN(u))throw new SyntaxError("Invalid number ending at "+a);if(this.curCommandType===_.ARC)if(0===this.curArgs.length||1===this.curArgs.length){if(0>u)throw new SyntaxError('Expected positive number, got "'+u+'" at index "'+a+'"')}else if((3===this.curArgs.length||4===this.curArgs.length)&&"0"!==this.curNumber&&"1"!==this.curNumber)throw new SyntaxError('Expected a flag, got "'+this.curNumber+'" at index "'+a+'"');this.curArgs.push(u),this.curArgs.length===N[this.curCommandType]&&(_.HORIZ_LINE_TO===this.curCommandType?i({type:_.HORIZ_LINE_TO,relative:this.curCommandRelative,x:u}):_.VERT_LINE_TO===this.curCommandType?i({type:_.VERT_LINE_TO,relative:this.curCommandRelative,y:u}):this.curCommandType===_.MOVE_TO||this.curCommandType===_.LINE_TO||this.curCommandType===_.SMOOTH_QUAD_TO?(i({type:this.curCommandType,relative:this.curCommandRelative,x:this.curArgs[0],y:this.curArgs[1]}),_.MOVE_TO===this.curCommandType&&(this.curCommandType=_.LINE_TO)):this.curCommandType===_.CURVE_TO?i({type:_.CURVE_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x2:this.curArgs[2],y2:this.curArgs[3],x:this.curArgs[4],y:this.curArgs[5]}):this.curCommandType===_.SMOOTH_CURVE_TO?i({type:_.SMOOTH_CURVE_TO,relative:this.curCommandRelative,x2:this.curArgs[0],y2:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===_.QUAD_TO?i({type:_.QUAD_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===_.ARC&&i({type:_.ARC,relative:this.curCommandRelative,rX:this.curArgs[0],rY:this.curArgs[1],xRot:this.curArgs[2],lArcFlag:this.curArgs[3],sweepFlag:this.curArgs[4],x:this.curArgs[5],y:this.curArgs[6]})),this.curNumber="",this.curNumberHasExpDigits=!1,this.curNumberHasExp=!1,this.curNumberHasDecimal=!1,this.canParseCommandOrComma=!0}if(!T(n))if(","===n&&this.canParseCommandOrComma)this.canParseCommandOrComma=!1;else if("+"!==n&&"-"!==n&&"."!==n)if(s)this.curNumber=n,this.curNumberHasDecimal=!1;else{if(0!==this.curArgs.length)throw new SyntaxError("Unterminated command at index "+a+".");if(!this.canParseCommandOrComma)throw new SyntaxError('Unexpected character "'+n+'" at index '+a+". Command cannot follow comma");if(this.canParseCommandOrComma=!1,"z"!==n&&"Z"!==n)if("h"===n||"H"===n)this.curCommandType=_.HORIZ_LINE_TO,this.curCommandRelative="h"===n;else if("v"===n||"V"===n)this.curCommandType=_.VERT_LINE_TO,this.curCommandRelative="v"===n;else if("m"===n||"M"===n)this.curCommandType=_.MOVE_TO,this.curCommandRelative="m"===n;else if("l"===n||"L"===n)this.curCommandType=_.LINE_TO,this.curCommandRelative="l"===n;else if("c"===n||"C"===n)this.curCommandType=_.CURVE_TO,this.curCommandRelative="c"===n;else if("s"===n||"S"===n)this.curCommandType=_.SMOOTH_CURVE_TO,this.curCommandRelative="s"===n;else if("q"===n||"Q"===n)this.curCommandType=_.QUAD_TO,this.curCommandRelative="q"===n;else if("t"===n||"T"===n)this.curCommandType=_.SMOOTH_QUAD_TO,this.curCommandRelative="t"===n;else{if("a"!==n&&"A"!==n)throw new SyntaxError('Unexpected character "'+n+'" at index '+a+".");this.curCommandType=_.ARC,this.curCommandRelative="a"===n}else r.push({type:_.CLOSE_PATH}),this.canParseCommandOrComma=!0,this.curCommandType=-1}else this.curNumber=n,this.curNumberHasDecimal="."===n}else this.curNumber+=n,this.curNumberHasDecimal=!0;else this.curNumber+=n;else this.curNumber+=n,this.curNumberHasExp=!0;else this.curNumber+=n,this.curNumberHasExpDigits=this.curNumberHasExp}return r},e.prototype.transform=function(t){return Object.create(this,{parse:{value:function(r,e){void 0===e&&(e=[]);for(var i=0,a=Object.getPrototypeOf(this).parse.call(this,r);i<a.length;i++){var n=a[i],o=t(n);Array.isArray(o)?e.push.apply(e,o):e.push(o)}return e}}})},e}(l),_=function(t){function i(r){var e=t.call(this)||this;return e.commands="string"==typeof r?i.parse(r):r,e}return r(i,t),i.prototype.encode=function(){return i.encode(this.commands)},i.prototype.getBounds=function(){var t=u.CALCULATE_BOUNDS();return this.transform(t),t},i.prototype.transform=function(t){for(var r=[],e=0,i=this.commands;e<i.length;e++){var a=t(i[e]);Array.isArray(a)?r.push.apply(r,a):r.push(a)}return this.commands=r,this},i.encode=function(t){return e(t)},i.parse=function(t){var r=new f,e=[];return r.parse(t,e),r.finish(e),e},i.CLOSE_PATH=1,i.MOVE_TO=2,i.HORIZ_LINE_TO=4,i.VERT_LINE_TO=8,i.LINE_TO=16,i.CURVE_TO=32,i.SMOOTH_CURVE_TO=64,i.QUAD_TO=128,i.SMOOTH_QUAD_TO=256,i.ARC=512,i.LINE_COMMANDS=i.LINE_TO|i.HORIZ_LINE_TO|i.VERT_LINE_TO,i.DRAWING_COMMANDS=i.HORIZ_LINE_TO|i.VERT_LINE_TO|i.LINE_TO|i.CURVE_TO|i.SMOOTH_CURVE_TO|i.QUAD_TO|i.SMOOTH_QUAD_TO|i.ARC,i}(l),N=((O={})[_.MOVE_TO]=2,O[_.LINE_TO]=2,O[_.HORIZ_LINE_TO]=1,O[_.VERT_LINE_TO]=1,O[_.CLOSE_PATH]=0,O[_.QUAD_TO]=4,O[_.SMOOTH_QUAD_TO]=2,O[_.CURVE_TO]=6,O[_.SMOOTH_CURVE_TO]=4,O[_.ARC]=7,O);
//# sourceMappingURL=SVGPathData.module.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzkuOGMyZGI2NjU1NTQyNTY2NmZkN2EuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBOzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVEE7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL0NBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVkE7QUFDQTs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDalpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6bkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3MU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtY2FsbGFibGUuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktcmVkdWNlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zbGljZS1zaW1wbGUuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNsaWNlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtaXMtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLWlzLWlvcy1wZWJibGUuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1pb3MuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtaXMtd2Vib3Mtd2Via2l0LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtbWV0aG9kLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtc3Vic3RpdHV0aW9uLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9ob3N0LXJlcG9ydC1lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2h0bWwuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0ZS5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1wcm9taXNlLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtc3ltYm9sLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25vdC1hLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wZXJmb3JtLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3F1ZXVlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1mbGFncy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLXN0aWNreS1oZWxwZXJzLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtdW5zdXBwb3J0ZWQtZG90LWFsbC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLXVuc3VwcG9ydGVkLW5jZy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtZ2xvYmFsLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1zdG9yZS5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctbXVsdGlieXRlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90YXNrLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHkuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleS5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkucmVkdWNlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkucmV2ZXJzZS5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZXhlYy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuZW5kcy13aXRoLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmluY2x1ZGVzLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLm1hdGNoLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnJlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc3BsaXQuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc3RhcnRzLXdpdGguanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL3JnYmNvbG9yL2luZGV4LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9zdGFja2JsdXItY2FudmFzL2Rpc3Qvc3RhY2tibHVyLWVzLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvY2FudmcvbGliL2luZGV4LmVzLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9zdmctcGF0aGRhdGEvbGliL1NWR1BhdGhEYXRhLm1vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAodHlwZW9mIGFyZ3VtZW50ID09ICdvYmplY3QnIHx8IGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArIFN0cmluZyhhcmd1bWVudCkgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG52YXIgVU5TQ09QQUJMRVMgPSB3ZWxsS25vd25TeW1ib2woJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuaWYgKEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHtcbiAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihBcnJheVByb3RvdHlwZSwgVU5TQ09QQUJMRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGNyZWF0ZShudWxsKVxuICB9KTtcbn1cblxuLy8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2hhckF0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUnKS5jaGFyQXQ7XG5cbi8vIGBBZHZhbmNlU3RyaW5nSW5kZXhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFMsIGluZGV4LCB1bmljb2RlKSB7XG4gIHJldHVybiBpbmRleCArICh1bmljb2RlID8gY2hhckF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xuXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFByb3RvdHlwZSkge1xuICBpZiAoaXNQcm90b3R5cGVPZihQcm90b3R5cGUsIGl0KSkgcmV0dXJuIGl0O1xuICB0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCBpbnZvY2F0aW9uJyk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIFN0cmluZyA9IGdsb2JhbC5TdHJpbmc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsInZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyByZWR1Y2UsIHJlZHVjZVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfUklHSFQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBjYWxsYmFja2ZuLCBhcmd1bWVudHNMZW5ndGgsIG1lbW8pIHtcbiAgICBhQ2FsbGFibGUoY2FsbGJhY2tmbik7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGF0KTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBpbmRleCA9IElTX1JJR0hUID8gbGVuZ3RoIC0gMSA6IDA7XG4gICAgdmFyIGkgPSBJU19SSUdIVCA/IC0xIDogMTtcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoIDwgMikgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChpbmRleCBpbiBzZWxmKSB7XG4gICAgICAgIG1lbW8gPSBzZWxmW2luZGV4XTtcbiAgICAgICAgaW5kZXggKz0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpbmRleCArPSBpO1xuICAgICAgaWYgKElTX1JJR0hUID8gaW5kZXggPCAwIDogbGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKDtJU19SSUdIVCA/IGluZGV4ID49IDAgOiBsZW5ndGggPiBpbmRleDsgaW5kZXggKz0gaSkgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgIG1lbW8gPSBjYWxsYmFja2ZuKG1lbW8sIHNlbGZbaW5kZXhdLCBpbmRleCwgTyk7XG4gICAgfVxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4gIGxlZnQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VyaWdodFxuICByaWdodDogY3JlYXRlTWV0aG9kKHRydWUpXG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xuXG52YXIgQXJyYXkgPSBnbG9iYWwuQXJyYXk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICB2YXIgayA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuZ3RoKTtcbiAgdmFyIGZpbiA9IHRvQWJzb2x1dGVJbmRleChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IGVuZCwgbGVuZ3RoKTtcbiAgdmFyIHJlc3VsdCA9IEFycmF5KG1heChmaW4gLSBrLCAwKSk7XG4gIGZvciAodmFyIG4gPSAwOyBrIDwgZmluOyBrKyssIG4rKykgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBuLCBPW2tdKTtcbiAgcmVzdWx0Lmxlbmd0aCA9IG47XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKFtdLnNsaWNlKTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgY2FsbGVkID0gMDtcbiAgdmFyIGl0ZXJhdG9yV2l0aFJldHVybiA9IHtcbiAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBkb25lOiAhIWNhbGxlZCsrIH07XG4gICAgfSxcbiAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkge1xuICAgICAgU0FGRV9DTE9TSU5HID0gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIGl0ZXJhdG9yV2l0aFJldHVybltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1mcm9tLCBuby10aHJvdy1saXRlcmFsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIEFycmF5LmZyb20oaXRlcmF0b3JXaXRoUmV0dXJuLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBTS0lQX0NMT1NJTkcpIHtcbiAgaWYgKCFTS0lQX0NMT1NJTkcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgSVRFUkFUSU9OX1NVUFBPUlQgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgb2JqZWN0ID0ge307XG4gICAgb2JqZWN0W0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4geyBkb25lOiBJVEVSQVRJT05fU1VQUE9SVCA9IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICAgIGV4ZWMob2JqZWN0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gSVRFUkFUSU9OX1NVUFBPUlQ7XG59O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciBPYmplY3QgPSBnbG9iYWwuT2JqZWN0O1xuXG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyBjbGFzc29mUmF3IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCB0YWcsIHJlc3VsdDtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVE9fU1RSSU5HX1RBRykpID09ICdzdHJpbmcnID8gdGFnXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT0gJ09iamVjdCcgJiYgaXNDYWxsYWJsZShPLmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCJ2YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgTUFUQ0ggPSB3ZWxsS25vd25TeW1ib2woJ21hdGNoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHZhciByZWdleHAgPSAvLi87XG4gIHRyeSB7XG4gICAgJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgIHRyeSB7XG4gICAgICByZWdleHBbTUFUQ0hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gICAgfSBjYXRjaCAoZXJyb3IyKSB7IC8qIGVtcHR5ICovIH1cbiAgfSByZXR1cm4gZmFsc2U7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgRigpKSAhPT0gRi5wcm90b3R5cGU7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCwgRU5VTUVSQUJMRV9ORVhUKSB7XG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICBJdGVyYXRvckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoKyFFTlVNRVJBQkxFX05FWFQsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvckNvbnN0cnVjdG9yLCBUT19TVFJJTkdfVEFHLCBmYWxzZSwgdHJ1ZSk7XG4gIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gIHJldHVybiBJdGVyYXRvckNvbnN0cnVjdG9yO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5S2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBGdW5jdGlvbk5hbWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3RvcicpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJdGVyYXRvcnNDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJyk7XG5cbnZhciBQUk9QRVJfRlVOQ1RJT05fTkFNRSA9IEZ1bmN0aW9uTmFtZS5QUk9QRVI7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSBGdW5jdGlvbk5hbWUuQ09ORklHVVJBQkxFO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gSXRlcmF0b3JzQ29yZS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gSXRlcmF0b3JzQ29yZS5CVUdHWV9TQUZBUklfSVRFUkFUT1JTO1xudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG52YXIgRU5UUklFUyA9ICdlbnRyaWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYWJsZSwgTkFNRSwgSXRlcmF0b3JDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvcihJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcblxuICB2YXIgZ2V0SXRlcmF0aW9uTWV0aG9kID0gZnVuY3Rpb24gKEtJTkQpIHtcbiAgICBpZiAoS0lORCA9PT0gREVGQVVMVCAmJiBkZWZhdWx0SXRlcmF0b3IpIHJldHVybiBkZWZhdWx0SXRlcmF0b3I7XG4gICAgaWYgKCFCVUdHWV9TQUZBUklfSVRFUkFUT1JTICYmIEtJTkQgaW4gSXRlcmFibGVQcm90b3R5cGUpIHJldHVybiBJdGVyYWJsZVByb3RvdHlwZVtLSU5EXTtcbiAgICBzd2l0Y2ggKEtJTkQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICBjYXNlIEVOVFJJRVM6IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcyk7IH07XG4gIH07XG5cbiAgdmFyIFRPX1NUUklOR19UQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSBmYWxzZTtcbiAgdmFyIEl0ZXJhYmxlUHJvdG90eXBlID0gSXRlcmFibGUucHJvdG90eXBlO1xuICB2YXIgbmF0aXZlSXRlcmF0b3IgPSBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl1cbiAgICB8fCBJdGVyYWJsZVByb3RvdHlwZVsnQEBpdGVyYXRvciddXG4gICAgfHwgREVGQVVMVCAmJiBJdGVyYWJsZVByb3RvdHlwZVtERUZBVUxUXTtcbiAgdmFyIGRlZmF1bHRJdGVyYXRvciA9ICFCVUdHWV9TQUZBUklfSVRFUkFUT1JTICYmIG5hdGl2ZUl0ZXJhdG9yIHx8IGdldEl0ZXJhdGlvbk1ldGhvZChERUZBVUxUKTtcbiAgdmFyIGFueU5hdGl2ZUl0ZXJhdG9yID0gTkFNRSA9PSAnQXJyYXknID8gSXRlcmFibGVQcm90b3R5cGUuZW50cmllcyB8fCBuYXRpdmVJdGVyYXRvciA6IG5hdGl2ZUl0ZXJhdG9yO1xuICB2YXIgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBtZXRob2RzLCBLRVk7XG5cbiAgLy8gZml4IG5hdGl2ZVxuICBpZiAoYW55TmF0aXZlSXRlcmF0b3IpIHtcbiAgICBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihhbnlOYXRpdmVJdGVyYXRvci5jYWxsKG5ldyBJdGVyYWJsZSgpKSk7XG4gICAgaWYgKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgaWYgKCFJU19QVVJFICYmIGdldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSkgIT09IEl0ZXJhdG9yUHJvdG90eXBlKSB7XG4gICAgICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgIHNldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSXRlcmF0b3JQcm90b3R5cGUpO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc0NhbGxhYmxlKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0pKSB7XG4gICAgICAgICAgcmVkZWZpbmUoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICBpZiAoSVNfUFVSRSkgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcbiAgICB9XG4gIH1cblxuICAvLyBmaXggQXJyYXkucHJvdG90eXBlLnsgdmFsdWVzLCBAQGl0ZXJhdG9yIH0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChQUk9QRVJfRlVOQ1RJT05fTkFNRSAmJiBERUZBVUxUID09IFZBTFVFUyAmJiBuYXRpdmVJdGVyYXRvciAmJiBuYXRpdmVJdGVyYXRvci5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBpZiAoIUlTX1BVUkUgJiYgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYWJsZVByb3RvdHlwZSwgJ25hbWUnLCBWQUxVRVMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSB0cnVlO1xuICAgICAgZGVmYXVsdEl0ZXJhdG9yID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gY2FsbChuYXRpdmVJdGVyYXRvciwgdGhpcyk7IH07XG4gICAgfVxuICB9XG5cbiAgLy8gZXhwb3J0IGFkZGl0aW9uYWwgbWV0aG9kc1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gZGVmYXVsdEl0ZXJhdG9yIDogZ2V0SXRlcmF0aW9uTWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogZ2V0SXRlcmF0aW9uTWV0aG9kKEVOVFJJRVMpXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKEtFWSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfHwgIShLRVkgaW4gSXRlcmFibGVQcm90b3R5cGUpKSB7XG4gICAgICAgIHJlZGVmaW5lKEl0ZXJhYmxlUHJvdG90eXBlLCBLRVksIG1ldGhvZHNbS0VZXSk7XG4gICAgICB9XG4gICAgfSBlbHNlICQoeyB0YXJnZXQ6IE5BTUUsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIH0sIG1ldGhvZHMpO1xuICB9XG5cbiAgLy8gZGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUlTX1BVUkUgfHwgRk9SQ0VEKSAmJiBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl0gIT09IGRlZmF1bHRJdGVyYXRvcikge1xuICAgIHJlZGVmaW5lKEl0ZXJhYmxlUHJvdG90eXBlLCBJVEVSQVRPUiwgZGVmYXVsdEl0ZXJhdG9yLCB7IG5hbWU6IERFRkFVTFQgfSk7XG4gIH1cbiAgSXRlcmF0b3JzW05BTUVdID0gZGVmYXVsdEl0ZXJhdG9yO1xuXG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9IDc7XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG4iLCIvLyBpbiBvbGQgV2ViS2l0IHZlcnNpb25zLCBgZWxlbWVudC5jbGFzc0xpc3RgIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBnbG9iYWwgYERPTVRva2VuTGlzdGBcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxudmFyIGNsYXNzTGlzdCA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnc3BhbicpLmNsYXNzTGlzdDtcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSBjbGFzc0xpc3QgJiYgY2xhc3NMaXN0LmNvbnN0cnVjdG9yICYmIGNsYXNzTGlzdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gRE9NVG9rZW5MaXN0UHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlID8gdW5kZWZpbmVkIDogRE9NVG9rZW5MaXN0UHJvdG90eXBlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnO1xuIiwidmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAvaXBhZHxpcGhvbmV8aXBvZC9pLnRlc3QodXNlckFnZW50KSAmJiBnbG9iYWwuUGViYmxlICE9PSB1bmRlZmluZWQ7XG4iLCJ2YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gLyg/OmlwYWR8aXBob25lfGlwb2QpLiphcHBsZXdlYmtpdC9pLnRlc3QodXNlckFnZW50KTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzb2YoZ2xvYmFsLnByb2Nlc3MpID09ICdwcm9jZXNzJztcbiIsInZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAvd2ViMHMoPyEuKmNocm9tZSkvaS50ZXN0KHVzZXJBZ2VudCk7XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCduYXZpZ2F0b3InLCAndXNlckFnZW50JykgfHwgJyc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWwuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsIi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLm5vVGFyZ2V0R2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IHNldEdsb2JhbChUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSAoZ2xvYmFsW1RBUkdFVF0gfHwge30pLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLm5vVGFyZ2V0R2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICByZWRlZmluZSh0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3MgbW92ZWQgdG8gZW50cnkgcG9pbnRzXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgUmVnRXhwUHJvdG90eXBlID0gUmVnRXhwLnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjLCBGT1JDRUQsIFNIQU0pIHtcbiAgdmFyIFNZTUJPTCA9IHdlbGxLbm93blN5bWJvbChLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuXG4gICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgLy8gV2UgY2FuJ3QgdXNlIHJlYWwgcmVnZXggaGVyZSBzaW5jZSBpdCBjYXVzZXMgZGVvcHRpbWl6YXRpb25cbiAgICAgIC8vIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uIGluIFY4XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzA2XG4gICAgICByZSA9IHt9O1xuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgICAgcmUuZmxhZ3MgPSAnJztcbiAgICAgIHJlW1NZTUJPTF0gPSAvLi9bU1lNQk9MXTtcbiAgICB9XG5cbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyBleGVjQ2FsbGVkID0gdHJ1ZTsgcmV0dXJuIG51bGw7IH07XG5cbiAgICByZVtTWU1CT0xdKCcnKTtcbiAgICByZXR1cm4gIWV4ZWNDYWxsZWQ7XG4gIH0pO1xuXG4gIGlmIChcbiAgICAhREVMRUdBVEVTX1RPX1NZTUJPTCB8fFxuICAgICFERUxFR0FURVNfVE9fRVhFQyB8fFxuICAgIEZPUkNFRFxuICApIHtcbiAgICB2YXIgdW5jdXJyaWVkTmF0aXZlUmVnRXhwTWV0aG9kID0gdW5jdXJyeVRoaXMoLy4vW1NZTUJPTF0pO1xuICAgIHZhciBtZXRob2RzID0gZXhlYyhTWU1CT0wsICcnW0tFWV0sIGZ1bmN0aW9uIChuYXRpdmVNZXRob2QsIHJlZ2V4cCwgc3RyLCBhcmcyLCBmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgdmFyIHVuY3VycmllZE5hdGl2ZU1ldGhvZCA9IHVuY3VycnlUaGlzKG5hdGl2ZU1ldGhvZCk7XG4gICAgICB2YXIgJGV4ZWMgPSByZWdleHAuZXhlYztcbiAgICAgIGlmICgkZXhlYyA9PT0gcmVnZXhwRXhlYyB8fCAkZXhlYyA9PT0gUmVnRXhwUHJvdG90eXBlLmV4ZWMpIHtcbiAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgLy8gcG9seWZpbGxlZCBmdW5jdGlvbiksIGxlYXNpbmcgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuY3VycmllZE5hdGl2ZVJlZ0V4cE1ldGhvZChyZWdleHAsIHN0ciwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5jdXJyaWVkTmF0aXZlTWV0aG9kKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICB9KTtcblxuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgbWV0aG9kc1swXSk7XG4gICAgcmVkZWZpbmUoUmVnRXhwUHJvdG90eXBlLCBTWU1CT0wsIG1ldGhvZHNbMV0pO1xuICB9XG5cbiAgaWYgKFNIQU0pIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShSZWdFeHBQcm90b3R5cGVbU1lNQk9MXSwgJ3NoYW0nLCB0cnVlKTtcbn07XG4iLCJ2YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGFwcGx5ID0gRnVuY3Rpb25Qcm90b3R5cGUuYXBwbHk7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1yZWZsZWN0IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFJlZmxlY3QgPT0gJ29iamVjdCcgJiYgUmVmbGVjdC5hcHBseSB8fCAoTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoYXBwbHkpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShhcHBseSwgYXJndW1lbnRzKTtcbn0pO1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGJpbmQgPSB1bmN1cnJ5VGhpcyh1bmN1cnJ5VGhpcy5iaW5kKTtcblxuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCkge1xuICBhQ2FsbGFibGUoZm4pO1xuICByZXR1cm4gdGhhdCA9PT0gdW5kZWZpbmVkID8gZm4gOiBOQVRJVkVfQklORCA/IGJpbmQoZm4sIHRoYXQpIDogZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgdGVzdCA9IChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pLmJpbmQoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiB0eXBlb2YgdGVzdCAhPSAnZnVuY3Rpb24nIHx8IHRlc3QuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpO1xufSk7XG4iLCJ2YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsInZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgYmluZCA9IEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQ7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXMgPSBOQVRJVkVfQklORCAmJiBiaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZuICYmIHVuY3VycnlUaGlzKGZuKTtcbn0gOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZuICYmIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxbbmFtZXNwYWNlXSkgOiBnbG9iYWxbbmFtZXNwYWNlXSAmJiBnbG9iYWxbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gZ2V0TWV0aG9kKGl0LCBJVEVSQVRPUilcbiAgICB8fCBnZXRNZXRob2QoaXQsICdAQGl0ZXJhdG9yJylcbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQsIHVzaW5nSXRlcmF0b3IpIHtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBnZXRJdGVyYXRvck1ldGhvZChhcmd1bWVudCkgOiB1c2luZ0l0ZXJhdG9yO1xuICBpZiAoYUNhbGxhYmxlKGl0ZXJhdG9yTWV0aG9kKSkgcmV0dXJuIGFuT2JqZWN0KGNhbGwoaXRlcmF0b3JNZXRob2QsIGFyZ3VtZW50KSk7XG4gIHRocm93IFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xufTtcbiIsInZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGZ1bmMgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgY2hhckF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckF0KTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFMgPSAvXFwkKFskJidgXXxcXGR7MSwyfXw8W14+XSo+KS9nO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEID0gL1xcJChbJCYnYF18XFxkezEsMn0pL2c7XG5cbi8vIGBHZXRTdWJzdGl0dXRpb25gIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRzdWJzdGl0dXRpb25cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuICB2YXIgdGFpbFBvcyA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gIHZhciBtID0gY2FwdHVyZXMubGVuZ3RoO1xuICB2YXIgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEO1xuICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbmFtZWRDYXB0dXJlcyA9IHRvT2JqZWN0KG5hbWVkQ2FwdHVyZXMpO1xuICAgIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MUztcbiAgfVxuICByZXR1cm4gcmVwbGFjZShyZXBsYWNlbWVudCwgc3ltYm9scywgZnVuY3Rpb24gKG1hdGNoLCBjaCkge1xuICAgIHZhciBjYXB0dXJlO1xuICAgIHN3aXRjaCAoY2hhckF0KGNoLCAwKSkge1xuICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICBjYXNlICcmJzogcmV0dXJuIG1hdGNoZWQ7XG4gICAgICBjYXNlICdgJzogcmV0dXJuIHN0cmluZ1NsaWNlKHN0ciwgMCwgcG9zaXRpb24pO1xuICAgICAgY2FzZSBcIidcIjogcmV0dXJuIHN0cmluZ1NsaWNlKHN0ciwgdGFpbFBvcyk7XG4gICAgICBjYXNlICc8JzpcbiAgICAgICAgY2FwdHVyZSA9IG5hbWVkQ2FwdHVyZXNbc3RyaW5nU2xpY2UoY2gsIDEsIC0xKV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDogLy8gXFxkXFxkP1xuICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgdmFyIGYgPSBmbG9vcihuIC8gMTApO1xuICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgaWYgKGYgPD0gbSkgcmV0dXJuIGNhcHR1cmVzW2YgLSAxXSA9PT0gdW5kZWZpbmVkID8gY2hhckF0KGNoLCAxKSA6IGNhcHR1cmVzW2YgLSAxXSArIGNoYXJBdChjaCwgMSk7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG4gICAgICAgIGNhcHR1cmUgPSBjYXB0dXJlc1tuIC0gMV07XG4gICAgfVxuICAgIHJldHVybiBjYXB0dXJlID09PSB1bmRlZmluZWQgPyAnJyA6IGNhcHR1cmU7XG4gIH0pO1xufTtcbiIsInZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHZhciBjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGU7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICBhcmd1bWVudHMubGVuZ3RoID09IDEgPyBjb25zb2xlLmVycm9yKGEpIDogY29uc29sZS5lcnJvcihhLCBiKTtcbiAgfVxufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgT2JqZWN0ID0gZ2xvYmFsLk9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gIU9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6IE9iamVjdChpdCk7XG59IDogT2JqZWN0O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCJ2YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICB2YXIgd21nZXQgPSB1bmN1cnJ5VGhpcyhzdG9yZS5nZXQpO1xuICB2YXIgd21oYXMgPSB1bmN1cnJ5VGhpcyhzdG9yZS5oYXMpO1xuICB2YXIgd21zZXQgPSB1bmN1cnJ5VGhpcyhzdG9yZS5zZXQpO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHdtaGFzKHN0b3JlLCBpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHdtc2V0KHN0b3JlLCBpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtZ2V0KHN0b3JlLCBpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWhhcyhzdG9yZSwgaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT0gJ0FycmF5Jztcbn07XG4iLCIvLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG5cbnZhciBub29wID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIGVtcHR5ID0gW107XG52YXIgY29uc3RydWN0ID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdjb25zdHJ1Y3QnKTtcbnZhciBjb25zdHJ1Y3RvclJlZ0V4cCA9IC9eXFxzKig/OmNsYXNzfGZ1bmN0aW9uKVxcYi87XG52YXIgZXhlYyA9IHVuY3VycnlUaGlzKGNvbnN0cnVjdG9yUmVnRXhwLmV4ZWMpO1xudmFyIElOQ09SUkVDVF9UT19TVFJJTkcgPSAhY29uc3RydWN0b3JSZWdFeHAuZXhlYyhub29wKTtcblxudmFyIGlzQ29uc3RydWN0b3JNb2Rlcm4gPSBmdW5jdGlvbiBpc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSB7XG4gIGlmICghaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBmYWxzZTtcbiAgdHJ5IHtcbiAgICBjb25zdHJ1Y3Qobm9vcCwgZW1wdHksIGFyZ3VtZW50KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbnZhciBpc0NvbnN0cnVjdG9yTGVnYWN5ID0gZnVuY3Rpb24gaXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xuICBpZiAoIWlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gZmFsc2U7XG4gIHN3aXRjaCAoY2xhc3NvZihhcmd1bWVudCkpIHtcbiAgICBjYXNlICdBc3luY0Z1bmN0aW9uJzpcbiAgICBjYXNlICdHZW5lcmF0b3JGdW5jdGlvbic6XG4gICAgY2FzZSAnQXN5bmNHZW5lcmF0b3JGdW5jdGlvbic6IHJldHVybiBmYWxzZTtcbiAgfVxuICB0cnkge1xuICAgIC8vIHdlIGNhbid0IGNoZWNrIC5wcm90b3R5cGUgc2luY2UgY29uc3RydWN0b3JzIHByb2R1Y2VkIGJ5IC5iaW5kIGhhdmVuJ3QgaXRcbiAgICAvLyBgRnVuY3Rpb24jdG9TdHJpbmdgIHRocm93cyBvbiBzb21lIGJ1aWx0LWl0IGZ1bmN0aW9uIGluIHNvbWUgbGVnYWN5IGVuZ2luZXNcbiAgICAvLyAoZm9yIGV4YW1wbGUsIGBET01RdWFkYCBhbmQgc2ltaWxhciBpbiBGRjQxLSlcbiAgICByZXR1cm4gSU5DT1JSRUNUX1RPX1NUUklORyB8fCAhIWV4ZWMoY29uc3RydWN0b3JSZWdFeHAsIGluc3BlY3RTb3VyY2UoYXJndW1lbnQpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuaXNDb25zdHJ1Y3RvckxlZ2FjeS5zaGFtID0gdHJ1ZTtcblxuLy8gYElzQ29uc3RydWN0b3JgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NvbnN0cnVjdG9yXG5tb2R1bGUuZXhwb3J0cyA9ICFjb25zdHJ1Y3QgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgY2FsbGVkO1xuICByZXR1cm4gaXNDb25zdHJ1Y3Rvck1vZGVybihpc0NvbnN0cnVjdG9yTW9kZXJuLmNhbGwpXG4gICAgfHwgIWlzQ29uc3RydWN0b3JNb2Rlcm4oT2JqZWN0KVxuICAgIHx8ICFpc0NvbnN0cnVjdG9yTW9kZXJuKGZ1bmN0aW9uICgpIHsgY2FsbGVkID0gdHJ1ZTsgfSlcbiAgICB8fCBjYWxsZWQ7XG59KSA/IGlzQ29uc3RydWN0b3JMZWdhY3kgOiBpc0NvbnN0cnVjdG9yTW9kZXJuO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwidmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBNQVRDSCA9IHdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcblxuLy8gYElzUmVnRXhwYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNyZWdleHBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNsYXNzb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBPYmplY3QgPSBnbG9iYWwuT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsIE9iamVjdChpdCkpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgZ2V0SXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yJyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcblxudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG5cbnZhciBSZXN1bHQgPSBmdW5jdGlvbiAoc3RvcHBlZCwgcmVzdWx0KSB7XG4gIHRoaXMuc3RvcHBlZCA9IHN0b3BwZWQ7XG4gIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xufTtcblxudmFyIFJlc3VsdFByb3RvdHlwZSA9IFJlc3VsdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCB1bmJvdW5kRnVuY3Rpb24sIG9wdGlvbnMpIHtcbiAgdmFyIHRoYXQgPSBvcHRpb25zICYmIG9wdGlvbnMudGhhdDtcbiAgdmFyIEFTX0VOVFJJRVMgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuQVNfRU5UUklFUyk7XG4gIHZhciBJU19JVEVSQVRPUiA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19JVEVSQVRPUik7XG4gIHZhciBJTlRFUlJVUFRFRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JTlRFUlJVUFRFRCk7XG4gIHZhciBmbiA9IGJpbmQodW5ib3VuZEZ1bmN0aW9uLCB0aGF0KTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuICB2YXIgc3RvcCA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICBpZiAoaXRlcmF0b3IpIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnLCBjb25kaXRpb24pO1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIGNvbmRpdGlvbik7XG4gIH07XG5cbiAgdmFyIGNhbGxGbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChBU19FTlRSSUVTKSB7XG4gICAgICBhbk9iamVjdCh2YWx1ZSk7XG4gICAgICByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZVswXSwgdmFsdWVbMV0sIHN0b3ApIDogZm4odmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICB9IHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlLCBzdG9wKSA6IGZuKHZhbHVlKTtcbiAgfTtcblxuICBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhYmxlO1xuICB9IGVsc2Uge1xuICAgIGl0ZXJGbiA9IGdldEl0ZXJhdG9yTWV0aG9kKGl0ZXJhYmxlKTtcbiAgICBpZiAoIWl0ZXJGbikgdGhyb3cgVHlwZUVycm9yKHRyeVRvU3RyaW5nKGl0ZXJhYmxlKSArICcgaXMgbm90IGl0ZXJhYmxlJyk7XG4gICAgLy8gb3B0aW1pc2F0aW9uIGZvciBhcnJheSBpdGVyYXRvcnNcbiAgICBpZiAoaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJGbikpIHtcbiAgICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShpdGVyYWJsZSk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIHJlc3VsdCA9IGNhbGxGbihpdGVyYWJsZVtpbmRleF0pO1xuICAgICAgICBpZiAocmVzdWx0ICYmIGlzUHJvdG90eXBlT2YoUmVzdWx0UHJvdG90eXBlLCByZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgICAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG4gICAgfVxuICAgIGl0ZXJhdG9yID0gZ2V0SXRlcmF0b3IoaXRlcmFibGUsIGl0ZXJGbik7XG4gIH1cblxuICBuZXh0ID0gaXRlcmF0b3IubmV4dDtcbiAgd2hpbGUgKCEoc3RlcCA9IGNhbGwobmV4dCwgaXRlcmF0b3IpKS5kb25lKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGNhbGxGbihzdGVwLnZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ3Rocm93JywgZXJyb3IpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PSAnb2JqZWN0JyAmJiByZXN1bHQgJiYgaXNQcm90b3R5cGVPZihSZXN1bHRQcm90b3R5cGUsIHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xufTtcbiIsInZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwga2luZCwgdmFsdWUpIHtcbiAgdmFyIGlubmVyUmVzdWx0LCBpbm5lckVycm9yO1xuICBhbk9iamVjdChpdGVyYXRvcik7XG4gIHRyeSB7XG4gICAgaW5uZXJSZXN1bHQgPSBnZXRNZXRob2QoaXRlcmF0b3IsICdyZXR1cm4nKTtcbiAgICBpZiAoIWlubmVyUmVzdWx0KSB7XG4gICAgICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlubmVyUmVzdWx0ID0gY2FsbChpbm5lclJlc3VsdCwgaXRlcmF0b3IpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlubmVyRXJyb3IgPSB0cnVlO1xuICAgIGlubmVyUmVzdWx0ID0gZXJyb3I7XG4gIH1cbiAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICBpZiAoaW5uZXJFcnJvcikgdGhyb3cgaW5uZXJSZXN1bHQ7XG4gIGFuT2JqZWN0KGlubmVyUmVzdWx0KTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxudmFyIEl0ZXJhdG9yUHJvdG90eXBlLCBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGFycmF5SXRlcmF0b3I7XG5cbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1rZXlzIC0tIHNhZmUgKi9cbmlmIChbXS5rZXlzKSB7XG4gIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG4gIC8vIFNhZmFyaSA4IGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuICBlbHNlIHtcbiAgICBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihnZXRQcm90b3R5cGVPZihhcnJheUl0ZXJhdG9yKSk7XG4gICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cbn1cblxudmFyIE5FV19JVEVSQVRPUl9QUk9UT1RZUEUgPSBJdGVyYXRvclByb3RvdHlwZSA9PSB1bmRlZmluZWQgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgdGVzdCA9IHt9O1xuICAvLyBGRjQ0LSBsZWdhY3kgaXRlcmF0b3JzIGNhc2VcbiAgcmV0dXJuIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXS5jYWxsKHRlc3QpICE9PSB0ZXN0O1xufSk7XG5cbmlmIChORVdfSVRFUkFUT1JfUFJPVE9UWVBFKSBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuZWxzZSBpZiAoSVNfUFVSRSkgSXRlcmF0b3JQcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1AQGl0ZXJhdG9yXG5pZiAoIWlzQ2FsbGFibGUoSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdKSkge1xuICByZWRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJdGVyYXRvclByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXG4gIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlM6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlNcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xuXG4vLyBgTGVuZ3RoT2ZBcnJheUxpa2VgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1sZW5ndGhvZmFycmF5bGlrZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0b0xlbmd0aChvYmoubGVuZ3RoKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90YXNrJykuc2V0O1xudmFyIElTX0lPUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtaW9zJyk7XG52YXIgSVNfSU9TX1BFQkJMRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtaW9zLXBlYmJsZScpO1xudmFyIElTX1dFQk9TX1dFQktJVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtd2Vib3Mtd2Via2l0Jyk7XG52YXIgSVNfTk9ERSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtbm9kZScpO1xuXG52YXIgTXV0YXRpb25PYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG4vLyBOb2RlLmpzIDExIHNob3dzIEV4cGVyaW1lbnRhbFdhcm5pbmcgb24gZ2V0dGluZyBgcXVldWVNaWNyb3Rhc2tgXG52YXIgcXVldWVNaWNyb3Rhc2tEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGdsb2JhbCwgJ3F1ZXVlTWljcm90YXNrJyk7XG52YXIgcXVldWVNaWNyb3Rhc2sgPSBxdWV1ZU1pY3JvdGFza0Rlc2NyaXB0b3IgJiYgcXVldWVNaWNyb3Rhc2tEZXNjcmlwdG9yLnZhbHVlO1xuXG52YXIgZmx1c2gsIGhlYWQsIGxhc3QsIG5vdGlmeSwgdG9nZ2xlLCBub2RlLCBwcm9taXNlLCB0aGVuO1xuXG4vLyBtb2Rlcm4gZW5naW5lcyBoYXZlIHF1ZXVlTWljcm90YXNrIG1ldGhvZFxuaWYgKCFxdWV1ZU1pY3JvdGFzaykge1xuICBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoSVNfTk9ERSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICAvLyBhbHNvIGV4Y2VwdCBXZWJPUyBXZWJraXQgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg5OFxuICBpZiAoIUlTX0lPUyAmJiAhSVNfTk9ERSAmJiAhSVNfV0VCT1NfV0VCS0lUICYmIE11dGF0aW9uT2JzZXJ2ZXIgJiYgZG9jdW1lbnQpIHtcbiAgICB0b2dnbGUgPSB0cnVlO1xuICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmICghSVNfSU9TX1BFQkJMRSAmJiBQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIC8vIHdvcmthcm91bmQgb2YgV2ViS2l0IH4gaU9TIFNhZmFyaSAxMC4xIGJ1Z1xuICAgIHByb21pc2UuY29uc3RydWN0b3IgPSBQcm9taXNlO1xuICAgIHRoZW4gPSBiaW5kKHByb21pc2UudGhlbiwgcHJvbWlzZSk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gTm9kZS5qcyB3aXRob3V0IHByb21pc2VzXG4gIH0gZWxzZSBpZiAoSVNfTk9ERSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuYmluZChnbG9iYWwpXG4gICAgbWFjcm90YXNrID0gYmluZChtYWNyb3Rhc2ssIGdsb2JhbCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbWFjcm90YXNrKGZsdXNoKTtcbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVldWVNaWNyb3Rhc2sgfHwgZnVuY3Rpb24gKGZuKSB7XG4gIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgaWYgKCFoZWFkKSB7XG4gICAgaGVhZCA9IHRhc2s7XG4gICAgbm90aWZ5KCk7XG4gIH0gbGFzdCA9IHRhc2s7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWwuUHJvbWlzZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIHJldHVybiAhU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KGluc3BlY3RTb3VyY2UoV2Vha01hcCkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG5cbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhQ2FsbGFibGUocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUNhbGxhYmxlKHJlamVjdCk7XG59O1xuXG4vLyBgTmV3UHJvbWlzZUNhcGFiaWxpdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1uZXdwcm9taXNlY2FwYWJpbGl0eVxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1yZWdleHAnKTtcblxudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc1JlZ0V4cChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJUaGUgbWV0aG9kIGRvZXNuJ3QgYWNjZXB0IHJlZ3VsYXIgZXhwcmVzc2lvbnNcIik7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsIi8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSwgV1NIICovXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgYWN0aXZlWERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJ1xuICAgID8gZG9jdW1lbnQuZG9tYWluICYmIGFjdGl2ZVhEb2N1bWVudFxuICAgICAgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgLy8gb2xkIElFXG4gICAgICA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpXG4gICAgOiBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCk7IC8vIFdTSFxuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXNNb2R1bGUuZihyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydGllcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyAmJiAhVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIHByb3BzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlcicpO1xuXG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0ID0gZ2xvYmFsLk9iamVjdDtcbnZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG5tb2R1bGUuZXhwb3J0cyA9IENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gIHZhciBvYmplY3QgPSB0b09iamVjdChPKTtcbiAgaWYgKGhhc093bihvYmplY3QsIElFX1BST1RPKSkgcmV0dXJuIG9iamVjdFtJRV9QUk9UT107XG4gIHZhciBjb25zdHJ1Y3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgaWYgKGlzQ2FsbGFibGUoY29uc3RydWN0b3IpICYmIG9iamVjdCBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG90eXBlIDogbnVsbDtcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWtleXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAtLSBzYWZlICovXG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYVBvc3NpYmxlUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3Quc2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2Zcbi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1zZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyBmdW5jdGlvbiAoKSB7XG4gIHZhciBDT1JSRUNUX1NFVFRFUiA9IGZhbHNlO1xuICB2YXIgdGVzdCA9IHt9O1xuICB2YXIgc2V0dGVyO1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbiAgICBzZXR0ZXIgPSB1bmN1cnJ5VGhpcyhPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQpO1xuICAgIHNldHRlcih0ZXN0LCBbXSk7XG4gICAgQ09SUkVDVF9TRVRURVIgPSB0ZXN0IGluc3RhbmNlb2YgQXJyYXk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgYW5PYmplY3QoTyk7XG4gICAgYVBvc3NpYmxlUHJvdG90eXBlKHByb3RvKTtcbiAgICBpZiAoQ09SUkVDVF9TRVRURVIpIHNldHRlcihPLCBwcm90byk7XG4gICAgZWxzZSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgIHJldHVybiBPO1xuICB9O1xufSgpIDogdW5kZWZpbmVkKTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IGZhbHNlLCB2YWx1ZTogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHRydWUsIHZhbHVlOiBlcnJvciB9O1xuICB9XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcbiIsInZhciBRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5oZWFkID0gbnVsbDtcbiAgdGhpcy50YWlsID0gbnVsbDtcbn07XG5cblF1ZXVlLnByb3RvdHlwZSA9IHtcbiAgYWRkOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBlbnRyeSA9IHsgaXRlbTogaXRlbSwgbmV4dDogbnVsbCB9O1xuICAgIGlmICh0aGlzLmhlYWQpIHRoaXMudGFpbC5uZXh0ID0gZW50cnk7XG4gICAgZWxzZSB0aGlzLmhlYWQgPSBlbnRyeTtcbiAgICB0aGlzLnRhaWwgPSBlbnRyeTtcbiAgfSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5oZWFkO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgdGhpcy5oZWFkID0gZW50cnkubmV4dDtcbiAgICAgIGlmICh0aGlzLnRhaWwgPT09IGVudHJ5KSB0aGlzLnRhaWwgPSBudWxsO1xuICAgICAgcmV0dXJuIGVudHJ5Lml0ZW07XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlO1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgb3B0aW9ucyk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG5cbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciB1bnNhZmUgPSBvcHRpb25zID8gISFvcHRpb25zLnVuc2FmZSA6IGZhbHNlO1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5lbnVtZXJhYmxlIDogZmFsc2U7XG4gIHZhciBub1RhcmdldEdldCA9IG9wdGlvbnMgPyAhIW9wdGlvbnMubm9UYXJnZXRHZXQgOiBmYWxzZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zICYmIG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICB2YXIgc3RhdGU7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkge1xuICAgIGlmIChTdHJpbmcobmFtZSkuc2xpY2UoMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgICAgbmFtZSA9ICdbJyArIFN0cmluZyhuYW1lKS5yZXBsYWNlKC9eU3ltYm9sXFwoKFteKV0qKVxcKS8sICckMScpICsgJ10nO1xuICAgIH1cbiAgICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCBuYW1lKTtcbiAgICB9XG4gICAgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gICAgaWYgKCFzdGF0ZS5zb3VyY2UpIHtcbiAgICAgIHN0YXRlLnNvdXJjZSA9IFRFTVBMQVRFLmpvaW4odHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICAgIH1cbiAgfVxuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBzZXRHbG9iYWwoa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKCF1bnNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICB9IGVsc2UgaWYgKCFub1RhcmdldEdldCAmJiBPW2tleV0pIHtcbiAgICBzaW1wbGUgPSB0cnVlO1xuICB9XG4gIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICBlbHNlIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShPLCBrZXksIHZhbHVlKTtcbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcblxudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG5cbi8vIGBSZWdFeHBFeGVjYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwZXhlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUiwgUykge1xuICB2YXIgZXhlYyA9IFIuZXhlYztcbiAgaWYgKGlzQ2FsbGFibGUoZXhlYykpIHtcbiAgICB2YXIgcmVzdWx0ID0gY2FsbChleGVjLCBSLCBTKTtcbiAgICBpZiAocmVzdWx0ICE9PSBudWxsKSBhbk9iamVjdChyZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKGNsYXNzb2YoUikgPT09ICdSZWdFeHAnKSByZXR1cm4gY2FsbChyZWdleHBFeGVjLCBSLCBTKTtcbiAgdGhyb3cgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgcmVnZXhwL25vLWVtcHR5LWNhcHR1cmluZy1ncm91cCwgcmVnZXhwL25vLWVtcHR5LWdyb3VwLCByZWdleHAvbm8tbGF6eS1lbmRzIC0tIHRlc3RpbmcgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlZ2V4cC9uby11c2VsZXNzLXF1YW50aWZpZXIgLS0gdGVzdGluZyAqL1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1mbGFncycpO1xudmFyIHN0aWNreUhlbHBlcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLXN0aWNreS1oZWxwZXJzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpLmdldDtcbnZhciBVTlNVUFBPUlRFRF9ET1RfQUxMID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC11bnN1cHBvcnRlZC1kb3QtYWxsJyk7XG52YXIgVU5TVVBQT1JURURfTkNHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC11bnN1cHBvcnRlZC1uY2cnKTtcblxudmFyIG5hdGl2ZVJlcGxhY2UgPSBzaGFyZWQoJ25hdGl2ZS1zdHJpbmctcmVwbGFjZScsIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG52YXIgbmF0aXZlRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG52YXIgY2hhckF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckF0KTtcbnZhciBpbmRleE9mID0gdW5jdXJyeVRoaXMoJycuaW5kZXhPZik7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG52YXIgVVBEQVRFU19MQVNUX0lOREVYX1dST05HID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlMSA9IC9hLztcbiAgdmFyIHJlMiA9IC9iKi9nO1xuICBjYWxsKG5hdGl2ZUV4ZWMsIHJlMSwgJ2EnKTtcbiAgY2FsbChuYXRpdmVFeGVjLCByZTIsICdhJyk7XG4gIHJldHVybiByZTEubGFzdEluZGV4ICE9PSAwIHx8IHJlMi5sYXN0SW5kZXggIT09IDA7XG59KSgpO1xuXG52YXIgVU5TVVBQT1JURURfWSA9IHN0aWNreUhlbHBlcnMuQlJPS0VOX0NBUkVUO1xuXG4vLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cCwgY29waWVkIGZyb20gZXM1LXNoaW0ncyBTdHJpbmcjc3BsaXQgcGF0Y2guXG52YXIgTlBDR19JTkNMVURFRCA9IC8oKT8/Ly5leGVjKCcnKVsxXSAhPT0gdW5kZWZpbmVkO1xuXG52YXIgUEFUQ0ggPSBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgfHwgTlBDR19JTkNMVURFRCB8fCBVTlNVUFBPUlRFRF9ZIHx8IFVOU1VQUE9SVEVEX0RPVF9BTEwgfHwgVU5TVVBQT1JURURfTkNHO1xuXG5pZiAoUEFUQ0gpIHtcbiAgcGF0Y2hlZEV4ZWMgPSBmdW5jdGlvbiBleGVjKHN0cmluZykge1xuICAgIHZhciByZSA9IHRoaXM7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZShyZSk7XG4gICAgdmFyIHN0ciA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgdmFyIHJhdyA9IHN0YXRlLnJhdztcbiAgICB2YXIgcmVzdWx0LCByZUNvcHksIGxhc3RJbmRleCwgbWF0Y2gsIGksIG9iamVjdCwgZ3JvdXA7XG5cbiAgICBpZiAocmF3KSB7XG4gICAgICByYXcubGFzdEluZGV4ID0gcmUubGFzdEluZGV4O1xuICAgICAgcmVzdWx0ID0gY2FsbChwYXRjaGVkRXhlYywgcmF3LCBzdHIpO1xuICAgICAgcmUubGFzdEluZGV4ID0gcmF3Lmxhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdmFyIGdyb3VwcyA9IHN0YXRlLmdyb3VwcztcbiAgICB2YXIgc3RpY2t5ID0gVU5TVVBQT1JURURfWSAmJiByZS5zdGlja3k7XG4gICAgdmFyIGZsYWdzID0gY2FsbChyZWdleHBGbGFncywgcmUpO1xuICAgIHZhciBzb3VyY2UgPSByZS5zb3VyY2U7XG4gICAgdmFyIGNoYXJzQWRkZWQgPSAwO1xuICAgIHZhciBzdHJDb3B5ID0gc3RyO1xuXG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgZmxhZ3MgPSByZXBsYWNlKGZsYWdzLCAneScsICcnKTtcbiAgICAgIGlmIChpbmRleE9mKGZsYWdzLCAnZycpID09PSAtMSkge1xuICAgICAgICBmbGFncyArPSAnZyc7XG4gICAgICB9XG5cbiAgICAgIHN0ckNvcHkgPSBzdHJpbmdTbGljZShzdHIsIHJlLmxhc3RJbmRleCk7XG4gICAgICAvLyBTdXBwb3J0IGFuY2hvcmVkIHN0aWNreSBiZWhhdmlvci5cbiAgICAgIGlmIChyZS5sYXN0SW5kZXggPiAwICYmICghcmUubXVsdGlsaW5lIHx8IHJlLm11bHRpbGluZSAmJiBjaGFyQXQoc3RyLCByZS5sYXN0SW5kZXggLSAxKSAhPT0gJ1xcbicpKSB7XG4gICAgICAgIHNvdXJjZSA9ICcoPzogJyArIHNvdXJjZSArICcpJztcbiAgICAgICAgc3RyQ29weSA9ICcgJyArIHN0ckNvcHk7XG4gICAgICAgIGNoYXJzQWRkZWQrKztcbiAgICAgIH1cbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBzdHIgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14oPzonICsgc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgfVxuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlLmxhc3RJbmRleDtcblxuICAgIG1hdGNoID0gY2FsbChuYXRpdmVFeGVjLCBzdGlja3kgPyByZUNvcHkgOiByZSwgc3RyQ29weSk7XG5cbiAgICBpZiAoc3RpY2t5KSB7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbWF0Y2guaW5wdXQgPSBzdHJpbmdTbGljZShtYXRjaC5pbnB1dCwgY2hhcnNBZGRlZCk7XG4gICAgICAgIG1hdGNoWzBdID0gc3RyaW5nU2xpY2UobWF0Y2hbMF0sIGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaC5pbmRleCA9IHJlLmxhc3RJbmRleDtcbiAgICAgICAgcmUubGFzdEluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgIH0gZWxzZSByZS5sYXN0SW5kZXggPSAwO1xuICAgIH0gZWxzZSBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZS5sYXN0SW5kZXggPSByZS5nbG9iYWwgPyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCA6IGxhc3RJbmRleDtcbiAgICB9XG4gICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAgIC8vIGZvciBOUENHLCBsaWtlIElFOC4gTk9URTogVGhpcyBkb2Vzbicgd29yayBmb3IgLyguPyk/L1xuICAgICAgY2FsbChuYXRpdmVSZXBsYWNlLCBtYXRjaFswXSwgcmVDb3B5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoICYmIGdyb3Vwcykge1xuICAgICAgbWF0Y2guZ3JvdXBzID0gb2JqZWN0ID0gY3JlYXRlKG51bGwpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBncm91cCA9IGdyb3Vwc1tpXTtcbiAgICAgICAgb2JqZWN0W2dyb3VwWzBdXSA9IG1hdGNoW2dyb3VwWzFdXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hlZEV4ZWM7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLmZsYWdzYCBnZXR0ZXIgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0LXJlZ2V4cC5wcm90b3R5cGUuZmxhZ3Ncbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICBpZiAodGhhdC5kb3RBbGwpIHJlc3VsdCArPSAncyc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGJhYmVsLW1pbmlmeSBhbmQgQ2xvc3VyZSBDb21waWxlciB0cmFuc3BpbGVzIFJlZ0V4cCgnYScsICd5JykgLT4gL2EveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG52YXIgJFJlZ0V4cCA9IGdsb2JhbC5SZWdFeHA7XG5cbnZhciBVTlNVUFBPUlRFRF9ZID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUgPSAkUmVnRXhwKCdhJywgJ3knKTtcbiAgcmUubGFzdEluZGV4ID0gMjtcbiAgcmV0dXJuIHJlLmV4ZWMoJ2FiY2QnKSAhPSBudWxsO1xufSk7XG5cbi8vIFVDIEJyb3dzZXIgYnVnXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTAwOFxudmFyIE1JU1NFRF9TVElDS1kgPSBVTlNVUFBPUlRFRF9ZIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEkUmVnRXhwKCdhJywgJ3knKS5zdGlja3k7XG59KTtcblxudmFyIEJST0tFTl9DQVJFVCA9IFVOU1VQUE9SVEVEX1kgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03NzM2ODdcbiAgdmFyIHJlID0gJFJlZ0V4cCgnXnInLCAnZ3knKTtcbiAgcmUubGFzdEluZGV4ID0gMjtcbiAgcmV0dXJuIHJlLmV4ZWMoJ3N0cicpICE9IG51bGw7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEJST0tFTl9DQVJFVDogQlJPS0VOX0NBUkVULFxuICBNSVNTRURfU1RJQ0tZOiBNSVNTRURfU1RJQ0tZLFxuICBVTlNVUFBPUlRFRF9ZOiBVTlNVUFBPUlRFRF9ZXG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBiYWJlbC1taW5pZnkgYW5kIENsb3N1cmUgQ29tcGlsZXIgdHJhbnNwaWxlcyBSZWdFeHAoJy4nLCAncycpIC0+IC8uL3MgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxudmFyICRSZWdFeHAgPSBnbG9iYWwuUmVnRXhwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlID0gJFJlZ0V4cCgnLicsICdzJyk7XG4gIHJldHVybiAhKHJlLmRvdEFsbCAmJiByZS5leGVjKCdcXG4nKSAmJiByZS5mbGFncyA9PT0gJ3MnKTtcbn0pO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBiYWJlbC1taW5pZnkgYW5kIENsb3N1cmUgQ29tcGlsZXIgdHJhbnNwaWxlcyBSZWdFeHAoJyg/PGE+YiknLCAnZycpIC0+IC8oPzxhPmIpL2cgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxudmFyICRSZWdFeHAgPSBnbG9iYWwuUmVnRXhwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlID0gJFJlZ0V4cCgnKD88YT5iKScsICdnJyk7XG4gIHJldHVybiByZS5leGVjKCdiJykuZ3JvdXBzLmEgIT09ICdiJyB8fFxuICAgICdiJy5yZXBsYWNlKHJlLCAnJDxhPmMnKSAhPT0gJ2JjJztcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbCwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1JfTkFNRSkge1xuICB2YXIgQ29uc3RydWN0b3IgPSBnZXRCdWlsdEluKENPTlNUUlVDVE9SX05BTUUpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiBDb25zdHJ1Y3RvciAmJiAhQ29uc3RydWN0b3JbU1BFQ0lFU10pIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgU1BFQ0lFUywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gICAgfSk7XG4gIH1cbn07XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgVEFHLCBTVEFUSUMpIHtcbiAgaWYgKHRhcmdldCAmJiAhU1RBVElDKSB0YXJnZXQgPSB0YXJnZXQucHJvdG90eXBlO1xuICBpZiAodGFyZ2V0ICYmICFoYXNPd24odGFyZ2V0LCBUT19TVFJJTkdfVEFHKSkge1xuICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwgVE9fU1RSSU5HX1RBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBUQUcgfSk7XG4gIH1cbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IHNldEdsb2JhbChTSEFSRUQsIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcbiIsInZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjIwLjMnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTQtMjAyMiBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KScsXG4gIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjIwLjMvTElDRU5TRScsXG4gIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xufSk7XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYUNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY29uc3RydWN0b3InKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYFNwZWNpZXNDb25zdHJ1Y3RvcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNwZWNpZXNjb25zdHJ1Y3RvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IGRlZmF1bHRDb25zdHJ1Y3RvciA6IGFDb25zdHJ1Y3RvcihTKTtcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyIGNoYXJBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJBdCk7XG52YXIgY2hhckNvZGVBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJDb2RlQXQpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKENPTlZFUlRfVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIHBvcykge1xuICAgIHZhciBTID0gdG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIHZhciBwb3NpdGlvbiA9IHRvSW50ZWdlck9ySW5maW5pdHkocG9zKTtcbiAgICB2YXIgc2l6ZSA9IFMubGVuZ3RoO1xuICAgIHZhciBmaXJzdCwgc2Vjb25kO1xuICAgIGlmIChwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gc2l6ZSkgcmV0dXJuIENPTlZFUlRfVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgZmlyc3QgPSBjaGFyQ29kZUF0KFMsIHBvc2l0aW9uKTtcbiAgICByZXR1cm4gZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYgfHwgcG9zaXRpb24gKyAxID09PSBzaXplXG4gICAgICB8fCAoc2Vjb25kID0gY2hhckNvZGVBdChTLCBwb3NpdGlvbiArIDEpKSA8IDB4REMwMCB8fCBzZWNvbmQgPiAweERGRkZcbiAgICAgICAgPyBDT05WRVJUX1RPX1NUUklOR1xuICAgICAgICAgID8gY2hhckF0KFMsIHBvc2l0aW9uKVxuICAgICAgICAgIDogZmlyc3RcbiAgICAgICAgOiBDT05WRVJUX1RPX1NUUklOR1xuICAgICAgICAgID8gc3RyaW5nU2xpY2UoUywgcG9zaXRpb24sIHBvc2l0aW9uICsgMilcbiAgICAgICAgICA6IChmaXJzdCAtIDB4RDgwMCA8PCAxMCkgKyAoc2Vjb25kIC0gMHhEQzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuY29kZXBvaW50YXRcbiAgY29kZUF0OiBjcmVhdGVNZXRob2QoZmFsc2UpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS5hdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcbiAgY2hhckF0OiBjcmVhdGVNZXRob2QodHJ1ZSlcbn07XG4iLCJ2YXIgUFJPUEVSX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLlBST1BFUjtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBub24gPSAnXFx1MjAwQlxcdTAwODVcXHUxODBFJztcblxuLy8gY2hlY2sgdGhhdCBhIG1ldGhvZCB3b3JrcyB3aXRoIHRoZSBjb3JyZWN0IGxpc3Rcbi8vIG9mIHdoaXRlc3BhY2VzIGFuZCBoYXMgYSBjb3JyZWN0IG5hbWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdKClcbiAgICAgIHx8IG5vbltNRVRIT0RfTkFNRV0oKSAhPT0gbm9uXG4gICAgICB8fCAoUFJPUEVSX0ZVTkNUSU9OX05BTUUgJiYgd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdLm5hbWUgIT09IE1FVEhPRF9OQU1FKTtcbiAgfSk7XG59O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHJlcGxhY2Uoc3RyaW5nLCBsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gcmVwbGFjZShzdHJpbmcsIHJ0cmltLCAnJyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1MZWZ0LCB0cmltU3RhcnQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICB0cmltOiBjcmVhdGVNZXRob2QoMylcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgSVNfSU9TID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1pb3MnKTtcbnZhciBJU19OT0RFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlJyk7XG5cbnZhciBzZXQgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgbG9jYXRpb24sIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xuXG50cnkge1xuICAvLyBEZW5vIHRocm93cyBhIFJlZmVyZW5jZUVycm9yIG9uIGBsb2NhdGlvbmAgYWNjZXNzIHdpdGhvdXQgYC0tbG9jYXRpb25gIGZsYWdcbiAgbG9jYXRpb24gPSBnbG9iYWwubG9jYXRpb247XG59IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbnZhciBydW4gPSBmdW5jdGlvbiAoaWQpIHtcbiAgaWYgKGhhc093bihxdWV1ZSwgaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcblxudmFyIHJ1bm5lciA9IGZ1bmN0aW9uIChpZCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJ1bihpZCk7XG4gIH07XG59O1xuXG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuKGV2ZW50LmRhdGEpO1xufTtcblxudmFyIHBvc3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgLy8gb2xkIGVuZ2luZXMgaGF2ZSBub3QgbG9jYXRpb24ub3JpZ2luXG4gIGdsb2JhbC5wb3N0TWVzc2FnZShTdHJpbmcoaWQpLCBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0KTtcbn07XG5cbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0IHx8ICFjbGVhcikge1xuICBzZXQgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IGFycmF5U2xpY2UoYXJndW1lbnRzLCAxKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoaXNDYWxsYWJsZShmbikgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgdW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhciA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChJU19OT0RFKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2socnVubmVyKGlkKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhydW5uZXIoaWQpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIC8vIGV4Y2VwdCBpT1MgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjI0XG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwgJiYgIUlTX0lPUykge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gYmluZChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0KTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoXG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiZcbiAgICBpc0NhbGxhYmxlKGdsb2JhbC5wb3N0TWVzc2FnZSkgJiZcbiAgICAhZ2xvYmFsLmltcG9ydFNjcmlwdHMgJiZcbiAgICBsb2NhdGlvbiAmJiBsb2NhdGlvbi5wcm90b2NvbCAhPT0gJ2ZpbGU6JyAmJlxuICAgICFmYWlscyhwb3N0KVxuICApIHtcbiAgICBkZWZlciA9IHBvc3Q7XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bihpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQocnVubmVyKGlkKSwgMCk7XG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGNsZWFyOiBjbGVhclxufTtcbiIsInZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsIi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCJ2YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBzYWZlXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogKG51bWJlciA+IDAgPyBmbG9vciA6IGNlaWwpKG51bWJlcik7XG59O1xuIiwidmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gYXJndW1lbnQgPiAwID8gbWluKHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciBPYmplY3QgPSBnbG9iYWwuT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCJ2YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xuXG52YXIgU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGNsYXNzb2YoYXJndW1lbnQpID09PSAnU3ltYm9sJykgdGhyb3cgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZycpO1xuICByZXR1cm4gU3RyaW5nKGFyZ3VtZW50KTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgJiYgIVN5bWJvbC5zaGFtXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9IDQyO1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIHN5bWJvbEZvciA9IFN5bWJvbCAmJiBTeW1ib2xbJ2ZvciddO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpIHx8ICEoTkFUSVZFX1NZTUJPTCB8fCB0eXBlb2YgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID09ICdzdHJpbmcnKSkge1xuICAgIHZhciBkZXNjcmlwdGlvbiA9ICdTeW1ib2wuJyArIG5hbWU7XG4gICAgaWYgKE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSkpIHtcbiAgICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IFN5bWJvbFtuYW1lXTtcbiAgICB9IGVsc2UgaWYgKFVTRV9TWU1CT0xfQVNfVUlEICYmIHN5bWJvbEZvcikge1xuICAgICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gc3ltYm9sRm9yKGRlc2NyaXB0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gY3JlYXRlV2VsbEtub3duU3ltYm9sKGRlc2NyaXB0aW9uKTtcbiAgICB9XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCIvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDInICtcbiAgJ1xcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1pbmRleG9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciAkSW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciB1biRJbmRleE9mID0gdW5jdXJyeVRoaXMoW10uaW5kZXhPZik7XG5cbnZhciBORUdBVElWRV9aRVJPID0gISF1biRJbmRleE9mICYmIDEgLyB1biRJbmRleE9mKFsxXSwgMSwgLTApIDwgMDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnaW5kZXhPZicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogTkVHQVRJVkVfWkVSTyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICB2YXIgZnJvbUluZGV4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIE5FR0FUSVZFX1pFUk9cbiAgICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICAgID8gdW4kSW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBmcm9tSW5kZXgpIHx8IDBcbiAgICAgIDogJEluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgZnJvbUluZGV4KTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvcicpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG5cbnZhciBBUlJBWV9JVEVSQVRPUiA9ICdBcnJheSBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihBUlJBWV9JVEVSQVRPUik7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZW50cmllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5lbnRyaWVzXG4vLyBgQXJyYXkucHJvdG90eXBlLmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUua2V5c1xuLy8gYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUudmFsdWVzXG4vLyBgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAaXRlcmF0b3Jcbi8vIGBDcmVhdGVBcnJheUl0ZXJhdG9yYCBpbnRlcm5hbCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtY3JlYXRlYXJyYXlpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVJdGVyYXRvcihBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgIHR5cGU6IEFSUkFZX0lURVJBVE9SLFxuICAgIHRhcmdldDogdG9JbmRleGVkT2JqZWN0KGl0ZXJhdGVkKSwgLy8gdGFyZ2V0XG4gICAgaW5kZXg6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gICAga2luZDoga2luZCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gIH0pO1xuLy8gYCVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWFycmF5aXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgdmFyIHRhcmdldCA9IHN0YXRlLnRhcmdldDtcbiAgdmFyIGtpbmQgPSBzdGF0ZS5raW5kO1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleCsrO1xuICBpZiAoIXRhcmdldCB8fCBpbmRleCA+PSB0YXJnZXQubGVuZ3RoKSB7XG4gICAgc3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiB7IHZhbHVlOiBpbmRleCwgZG9uZTogZmFsc2UgfTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiB7IHZhbHVlOiB0YXJnZXRbaW5kZXhdLCBkb25lOiBmYWxzZSB9O1xuICByZXR1cm4geyB2YWx1ZTogW2luZGV4LCB0YXJnZXRbaW5kZXhdXSwgZG9uZTogZmFsc2UgfTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZXVubWFwcGVkYXJndW1lbnRzb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZW1hcHBlZGFyZ3VtZW50c29iamVjdFxudmFyIHZhbHVlcyA9IEl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG4vLyBWOCB+IENocm9tZSA0NS0gYnVnXG5pZiAoIUlTX1BVUkUgJiYgREVTQ1JJUFRPUlMgJiYgdmFsdWVzLm5hbWUgIT09ICd2YWx1ZXMnKSB0cnkge1xuICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZXMsICduYW1lJywgeyB2YWx1ZTogJ3ZhbHVlcycgfSk7XG59IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcmVkdWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXJlZHVjZScpLmxlZnQ7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgQ0hST01FX1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBJU19OT0RFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlJyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgncmVkdWNlJyk7XG4vLyBDaHJvbWUgODAtODIgaGFzIGEgY3JpdGljYWwgYnVnXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMDQ5OTgyXG52YXIgQ0hST01FX0JVRyA9ICFJU19OT0RFICYmIENIUk9NRV9WRVJTSU9OID4gNzkgJiYgQ0hST01FX1ZFUlNJT04gPCA4MztcblxuLy8gYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhU1RSSUNUX01FVEhPRCB8fCBDSFJPTUVfQlVHIH0sIHtcbiAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmbiAvKiAsIGluaXRpYWxWYWx1ZSAqLykge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHJldHVybiAkcmVkdWNlKHRoaXMsIGNhbGxiYWNrZm4sIGxlbmd0aCwgbGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG52YXIgdW4kUmV2ZXJzZSA9IHVuY3VycnlUaGlzKFtdLnJldmVyc2UpO1xudmFyIHRlc3QgPSBbMSwgMl07XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucmV2ZXJzZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZXZlcnNlXG4vLyBmaXggZm9yIFNhZmFyaSAxMi4wIGJ1Z1xuLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE4ODc5NFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU3RyaW5nKHRlc3QpID09PSBTdHJpbmcodGVzdC5yZXZlcnNlKCkpIH0sIHtcbiAgcmV2ZXJzZTogZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1hc3NpZ24gLS0gZGlydHkgaGFja1xuICAgIGlmIChpc0FycmF5KHRoaXMpKSB0aGlzLmxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgIHJldHVybiB1biRSZXZlcnNlKHRoaXMpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIE5hdGl2ZVByb21pc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXByb21pc2UtY29uc3RydWN0b3InKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lLWFsbCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zcGVjaWVzJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUnKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21pY3JvdGFzaycpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIGhvc3RSZXBvcnRFcnJvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaG9zdC1yZXBvcnQtZXJyb3JzJyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGVyZm9ybScpO1xudmFyIFF1ZXVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3F1ZXVlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX0JST1dTRVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWJyb3dzZXInKTtcbnZhciBJU19OT0RFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG5cbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoUFJPTUlTRSk7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsUHJvbWlzZVN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoUFJPTUlTRSk7XG52YXIgTmF0aXZlUHJvbWlzZVByb3RvdHlwZSA9IE5hdGl2ZVByb21pc2UgJiYgTmF0aXZlUHJvbWlzZS5wcm90b3R5cGU7XG52YXIgUHJvbWlzZUNvbnN0cnVjdG9yID0gTmF0aXZlUHJvbWlzZTtcbnZhciBQcm9taXNlUHJvdG90eXBlID0gTmF0aXZlUHJvbWlzZVByb3RvdHlwZTtcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG52YXIgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHk7XG5cbnZhciBESVNQQVRDSF9FVkVOVCA9ICEhKGRvY3VtZW50ICYmIGRvY3VtZW50LmNyZWF0ZUV2ZW50ICYmIGdsb2JhbC5kaXNwYXRjaEV2ZW50KTtcbnZhciBOQVRJVkVfUkVKRUNUSU9OX0VWRU5UID0gaXNDYWxsYWJsZShnbG9iYWwuUHJvbWlzZVJlamVjdGlvbkV2ZW50KTtcbnZhciBVTkhBTkRMRURfUkVKRUNUSU9OID0gJ3VuaGFuZGxlZHJlamVjdGlvbic7XG52YXIgUkVKRUNUSU9OX0hBTkRMRUQgPSAncmVqZWN0aW9uaGFuZGxlZCc7XG52YXIgUEVORElORyA9IDA7XG52YXIgRlVMRklMTEVEID0gMTtcbnZhciBSRUpFQ1RFRCA9IDI7XG52YXIgSEFORExFRCA9IDE7XG52YXIgVU5IQU5ETEVEID0gMjtcbnZhciBTVUJDTEFTU0lORyA9IGZhbHNlO1xuXG52YXIgSW50ZXJuYWwsIE93blByb21pc2VDYXBhYmlsaXR5LCBQcm9taXNlV3JhcHBlciwgbmF0aXZlVGhlbjtcblxudmFyIEZPUkNFRCA9IGlzRm9yY2VkKFBST01JU0UsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIFBST01JU0VfQ09OU1RSVUNUT1JfU09VUkNFID0gaW5zcGVjdFNvdXJjZShQcm9taXNlQ29uc3RydWN0b3IpO1xuICB2YXIgR0xPQkFMX0NPUkVfSlNfUFJPTUlTRSA9IFBST01JU0VfQ09OU1RSVUNUT1JfU09VUkNFICE9PSBTdHJpbmcoUHJvbWlzZUNvbnN0cnVjdG9yKTtcbiAgLy8gVjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD04MzA1NjVcbiAgLy8gV2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgaWYgKCFHTE9CQUxfQ09SRV9KU19QUk9NSVNFICYmIFY4X1ZFUlNJT04gPT09IDY2KSByZXR1cm4gdHJ1ZTtcbiAgLy8gV2UgbmVlZCBQcm9taXNlI2ZpbmFsbHkgaW4gdGhlIHB1cmUgdmVyc2lvbiBmb3IgcHJldmVudGluZyBwcm90b3R5cGUgcG9sbHV0aW9uXG4gIGlmIChJU19QVVJFICYmICFQcm9taXNlUHJvdG90eXBlWydmaW5hbGx5J10pIHJldHVybiB0cnVlO1xuICAvLyBXZSBjYW4ndCB1c2UgQEBzcGVjaWVzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxuICBpZiAoVjhfVkVSU0lPTiA+PSA1MSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoUFJPTUlTRV9DT05TVFJVQ1RPUl9TT1VSQ0UpKSByZXR1cm4gZmFsc2U7XG4gIC8vIERldGVjdCBjb3JyZWN0bmVzcyBvZiBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gIHZhciBwcm9taXNlID0gbmV3IFByb21pc2VDb25zdHJ1Y3RvcihmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKDEpOyB9KTtcbiAgdmFyIEZha2VQcm9taXNlID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICBleGVjKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KTtcbiAgfTtcbiAgdmFyIGNvbnN0cnVjdG9yID0gcHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9O1xuICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IEZha2VQcm9taXNlO1xuICBTVUJDTEFTU0lORyA9IHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIGlmICghU1VCQ0xBU1NJTkcpIHJldHVybiB0cnVlO1xuICAvLyBVbmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gIHJldHVybiAhR0xPQkFMX0NPUkVfSlNfUFJPTUlTRSAmJiBJU19CUk9XU0VSICYmICFOQVRJVkVfUkVKRUNUSU9OX0VWRU5UO1xufSk7XG5cbnZhciBJTkNPUlJFQ1RfSVRFUkFUSU9OID0gRk9SQ0VEIHx8ICFjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gIFByb21pc2VDb25zdHJ1Y3Rvci5hbGwoaXRlcmFibGUpWydjYXRjaCddKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG59KTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgaXNDYWxsYWJsZSh0aGVuID0gaXQudGhlbikgPyB0aGVuIDogZmFsc2U7XG59O1xuXG52YXIgY2FsbFJlYWN0aW9uID0gZnVuY3Rpb24gKHJlYWN0aW9uLCBzdGF0ZSkge1xuICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgdmFyIG9rID0gc3RhdGUuc3RhdGUgPT0gRlVMRklMTEVEO1xuICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgdHJ5IHtcbiAgICBpZiAoaGFuZGxlcikge1xuICAgICAgaWYgKCFvaykge1xuICAgICAgICBpZiAoc3RhdGUucmVqZWN0aW9uID09PSBVTkhBTkRMRUQpIG9uSGFuZGxlVW5oYW5kbGVkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUucmVqZWN0aW9uID0gSEFORExFRDtcbiAgICAgIH1cbiAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIGNhbiB0aHJvd1xuICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgY2FsbCh0aGVuLCByZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICByZWplY3QoZXJyb3IpO1xuICB9XG59O1xuXG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHN0YXRlLCBpc1JlamVjdCkge1xuICBpZiAoc3RhdGUubm90aWZpZWQpIHJldHVybjtcbiAgc3RhdGUubm90aWZpZWQgPSB0cnVlO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciByZWFjdGlvbnMgPSBzdGF0ZS5yZWFjdGlvbnM7XG4gICAgdmFyIHJlYWN0aW9uO1xuICAgIHdoaWxlIChyZWFjdGlvbiA9IHJlYWN0aW9ucy5nZXQoKSkge1xuICAgICAgY2FsbFJlYWN0aW9uKHJlYWN0aW9uLCBzdGF0ZSk7XG4gICAgfVxuICAgIHN0YXRlLm5vdGlmaWVkID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFzdGF0ZS5yZWplY3Rpb24pIG9uVW5oYW5kbGVkKHN0YXRlKTtcbiAgfSk7XG59O1xuXG52YXIgZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChuYW1lLCBwcm9taXNlLCByZWFzb24pIHtcbiAgdmFyIGV2ZW50LCBoYW5kbGVyO1xuICBpZiAoRElTUEFUQ0hfRVZFTlQpIHtcbiAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2ZW50LnByb21pc2UgPSBwcm9taXNlO1xuICAgIGV2ZW50LnJlYXNvbiA9IHJlYXNvbjtcbiAgICBldmVudC5pbml0RXZlbnQobmFtZSwgZmFsc2UsIHRydWUpO1xuICAgIGdsb2JhbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSBlbHNlIGV2ZW50ID0geyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHJlYXNvbiB9O1xuICBpZiAoIU5BVElWRV9SRUpFQ1RJT05fRVZFTlQgJiYgKGhhbmRsZXIgPSBnbG9iYWxbJ29uJyArIG5hbWVdKSkgaGFuZGxlcihldmVudCk7XG4gIGVsc2UgaWYgKG5hbWUgPT09IFVOSEFORExFRF9SRUpFQ1RJT04pIGhvc3RSZXBvcnRFcnJvcnMoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHJlYXNvbik7XG59O1xuXG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgY2FsbCh0YXNrLCBnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHN0YXRlLmZhY2FkZTtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICB2YXIgSVNfVU5IQU5ETEVEID0gaXNVbmhhbmRsZWQoc3RhdGUpO1xuICAgIHZhciByZXN1bHQ7XG4gICAgaWYgKElTX1VOSEFORExFRCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChJU19OT0RFKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBkaXNwYXRjaEV2ZW50KFVOSEFORExFRF9SRUpFQ1RJT04sIHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHN0YXRlLnJlamVjdGlvbiA9IElTX05PREUgfHwgaXNVbmhhbmRsZWQoc3RhdGUpID8gVU5IQU5ETEVEIDogSEFORExFRDtcbiAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHRocm93IHJlc3VsdC52YWx1ZTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS5yZWplY3Rpb24gIT09IEhBTkRMRUQgJiYgIXN0YXRlLnBhcmVudDtcbn07XG5cbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICBjYWxsKHRhc2ssIGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gc3RhdGUuZmFjYWRlO1xuICAgIGlmIChJU19OT0RFKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgZGlzcGF0Y2hFdmVudChSRUpFQ1RJT05fSEFORExFRCwgcHJvbWlzZSwgc3RhdGUudmFsdWUpO1xuICB9KTtcbn07XG5cbnZhciBiaW5kID0gZnVuY3Rpb24gKGZuLCBzdGF0ZSwgdW53cmFwKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBmbihzdGF0ZSwgdmFsdWUsIHVud3JhcCk7XG4gIH07XG59O1xuXG52YXIgaW50ZXJuYWxSZWplY3QgPSBmdW5jdGlvbiAoc3RhdGUsIHZhbHVlLCB1bndyYXApIHtcbiAgaWYgKHN0YXRlLmRvbmUpIHJldHVybjtcbiAgc3RhdGUuZG9uZSA9IHRydWU7XG4gIGlmICh1bndyYXApIHN0YXRlID0gdW53cmFwO1xuICBzdGF0ZS52YWx1ZSA9IHZhbHVlO1xuICBzdGF0ZS5zdGF0ZSA9IFJFSkVDVEVEO1xuICBub3RpZnkoc3RhdGUsIHRydWUpO1xufTtcblxudmFyIGludGVybmFsUmVzb2x2ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgdmFsdWUsIHVud3JhcCkge1xuICBpZiAoc3RhdGUuZG9uZSkgcmV0dXJuO1xuICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgaWYgKHVud3JhcCkgc3RhdGUgPSB1bndyYXA7XG4gIHRyeSB7XG4gICAgaWYgKHN0YXRlLmZhY2FkZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIHZhciB0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSk7XG4gICAgaWYgKHRoZW4pIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBkb25lOiBmYWxzZSB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNhbGwodGhlbiwgdmFsdWUsXG4gICAgICAgICAgICBiaW5kKGludGVybmFsUmVzb2x2ZSwgd3JhcHBlciwgc3RhdGUpLFxuICAgICAgICAgICAgYmluZChpbnRlcm5hbFJlamVjdCwgd3JhcHBlciwgc3RhdGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpbnRlcm5hbFJlamVjdCh3cmFwcGVyLCBlcnJvciwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHN0YXRlLnN0YXRlID0gRlVMRklMTEVEO1xuICAgICAgbm90aWZ5KHN0YXRlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGludGVybmFsUmVqZWN0KHsgZG9uZTogZmFsc2UgfSwgZXJyb3IsIHN0YXRlKTtcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmIChGT1JDRUQpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgUHJvbWlzZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgUHJvbWlzZVByb3RvdHlwZSk7XG4gICAgYUNhbGxhYmxlKGV4ZWN1dG9yKTtcbiAgICBjYWxsKEludGVybmFsLCB0aGlzKTtcbiAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihiaW5kKGludGVybmFsUmVzb2x2ZSwgc3RhdGUpLCBiaW5kKGludGVybmFsUmVqZWN0LCBzdGF0ZSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpbnRlcm5hbFJlamVjdChzdGF0ZSwgZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgUHJvbWlzZVByb3RvdHlwZSA9IFByb21pc2VDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgICAgdHlwZTogUFJPTUlTRSxcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgbm90aWZpZWQ6IGZhbHNlLFxuICAgICAgcGFyZW50OiBmYWxzZSxcbiAgICAgIHJlYWN0aW9uczogbmV3IFF1ZXVlKCksXG4gICAgICByZWplY3Rpb246IGZhbHNlLFxuICAgICAgc3RhdGU6IFBFTkRJTkcsXG4gICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgfSk7XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlZGVmaW5lQWxsKFByb21pc2VQcm90b3R5cGUsIHtcbiAgICAvLyBgUHJvbWlzZS5wcm90b3R5cGUudGhlbmAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnByb3RvdHlwZS50aGVuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdGhlbmFibGUgLS0gc2FmZVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsUHJvbWlzZVN0YXRlKHRoaXMpO1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIFByb21pc2VDb25zdHJ1Y3RvcikpO1xuICAgICAgc3RhdGUucGFyZW50ID0gdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLm9rID0gaXNDYWxsYWJsZShvbkZ1bGZpbGxlZCkgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gaXNDYWxsYWJsZShvblJlamVjdGVkKSAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gSVNfTk9ERSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKHN0YXRlLnN0YXRlID09IFBFTkRJTkcpIHN0YXRlLnJlYWN0aW9ucy5hZGQocmVhY3Rpb24pO1xuICAgICAgZWxzZSBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsUmVhY3Rpb24ocmVhY3Rpb24sIHN0YXRlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyBgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZShwcm9taXNlKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGJpbmQoaW50ZXJuYWxSZXNvbHZlLCBzdGF0ZSk7XG4gICAgdGhpcy5yZWplY3QgPSBiaW5kKGludGVybmFsUmVqZWN0LCBzdGF0ZSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09IFByb21pc2VDb25zdHJ1Y3RvciB8fCBDID09PSBQcm9taXNlV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xuXG4gIGlmICghSVNfUFVSRSAmJiBpc0NhbGxhYmxlKE5hdGl2ZVByb21pc2UpICYmIE5hdGl2ZVByb21pc2VQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICBuYXRpdmVUaGVuID0gTmF0aXZlUHJvbWlzZVByb3RvdHlwZS50aGVuO1xuXG4gICAgaWYgKCFTVUJDTEFTU0lORykge1xuICAgICAgLy8gbWFrZSBgUHJvbWlzZSN0aGVuYCByZXR1cm4gYSBwb2x5ZmlsbGVkIGBQcm9taXNlYCBmb3IgbmF0aXZlIHByb21pc2UtYmFzZWQgQVBJc1xuICAgICAgcmVkZWZpbmUoTmF0aXZlUHJvbWlzZVByb3RvdHlwZSwgJ3RoZW4nLCBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlQ29uc3RydWN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGNhbGwobmF0aXZlVGhlbiwgdGhhdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSkudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjQwXG4gICAgICB9LCB7IHVuc2FmZTogdHJ1ZSB9KTtcblxuICAgICAgLy8gbWFrZXMgc3VyZSB0aGF0IG5hdGl2ZSBwcm9taXNlLWJhc2VkIEFQSXMgYFByb21pc2UjY2F0Y2hgIHByb3Blcmx5IHdvcmtzIHdpdGggcGF0Y2hlZCBgUHJvbWlzZSN0aGVuYFxuICAgICAgcmVkZWZpbmUoTmF0aXZlUHJvbWlzZVByb3RvdHlwZSwgJ2NhdGNoJywgUHJvbWlzZVByb3RvdHlwZVsnY2F0Y2gnXSwgeyB1bnNhZmU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgLy8gbWFrZSBgLmNvbnN0cnVjdG9yID09PSBQcm9taXNlYCB3b3JrIGZvciBuYXRpdmUgcHJvbWlzZS1iYXNlZCBBUElzXG4gICAgdHJ5IHtcbiAgICAgIGRlbGV0ZSBOYXRpdmVQcm9taXNlUHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblxuICAgIC8vIG1ha2UgYGluc3RhbmNlb2YgUHJvbWlzZWAgd29yayBmb3IgbmF0aXZlIHByb21pc2UtYmFzZWQgQVBJc1xuICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgc2V0UHJvdG90eXBlT2YoTmF0aXZlUHJvbWlzZVByb3RvdHlwZSwgUHJvbWlzZVByb3RvdHlwZSk7XG4gICAgfVxuICB9XG59XG5cbiQoeyBnbG9iYWw6IHRydWUsIHdyYXA6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgUHJvbWlzZTogUHJvbWlzZUNvbnN0cnVjdG9yXG59KTtcblxuc2V0VG9TdHJpbmdUYWcoUHJvbWlzZUNvbnN0cnVjdG9yLCBQUk9NSVNFLCBmYWxzZSwgdHJ1ZSk7XG5zZXRTcGVjaWVzKFBST01JU0UpO1xuXG5Qcm9taXNlV3JhcHBlciA9IGdldEJ1aWx0SW4oUFJPTUlTRSk7XG5cbi8vIHN0YXRpY3NcbiQoeyB0YXJnZXQ6IFBST01JU0UsIHN0YXQ6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gYFByb21pc2UucmVqZWN0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlamVjdFxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICBjYWxsKGNhcGFiaWxpdHkucmVqZWN0LCB1bmRlZmluZWQsIHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG4kKHsgdGFyZ2V0OiBQUk9NSVNFLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElTX1BVUkUgfHwgRk9SQ0VEIH0sIHtcbiAgLy8gYFByb21pc2UucmVzb2x2ZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5yZXNvbHZlXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShJU19QVVJFICYmIHRoaXMgPT09IFByb21pc2VXcmFwcGVyID8gUHJvbWlzZUNvbnN0cnVjdG9yIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuXG4kKHsgdGFyZ2V0OiBQUk9NSVNFLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICAvLyBgUHJvbWlzZS5hbGxgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXByb21pc2UuYWxsXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkcHJvbWlzZVJlc29sdmUgPSBhQ2FsbGFibGUoQy5yZXNvbHZlKTtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gY291bnRlcisrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgY2FsbCgkcHJvbWlzZVJlc29sdmUsIEMsIHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gYFByb21pc2UucmFjZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5yYWNlXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRwcm9taXNlUmVzb2x2ZSA9IGFDYWxsYWJsZShDLnJlc29sdmUpO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgY2FsbCgkcHJvbWlzZVJlc29sdmUsIEMsIHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBleGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLmV4ZWNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLmV4ZWNcbiQoeyB0YXJnZXQ6ICdSZWdFeHAnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAvLi8uZXhlYyAhPT0gZXhlYyB9LCB7XG4gIGV4ZWM6IGV4ZWNcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIFBST1BFUl9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5QUk9QRVI7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciAkdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciByZWdFeHBGbGFncyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZmxhZ3MnKTtcblxudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgUmVnRXhwUHJvdG90eXBlID0gUmVnRXhwLnByb3RvdHlwZTtcbnZhciBuJFRvU3RyaW5nID0gUmVnRXhwUHJvdG90eXBlW1RPX1NUUklOR107XG52YXIgZ2V0RmxhZ3MgPSB1bmN1cnJ5VGhpcyhyZWdFeHBGbGFncyk7XG5cbnZhciBOT1RfR0VORVJJQyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG4kVG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxudmFyIElOQ09SUkVDVF9OQU1FID0gUFJPUEVSX0ZVTkNUSU9OX05BTUUgJiYgbiRUb1N0cmluZy5uYW1lICE9IFRPX1NUUklORztcblxuLy8gYFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoTk9UX0dFTkVSSUMgfHwgSU5DT1JSRUNUX05BTUUpIHtcbiAgcmVkZWZpbmUoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHZhciBwID0gJHRvU3RyaW5nKFIuc291cmNlKTtcbiAgICB2YXIgcmYgPSBSLmZsYWdzO1xuICAgIHZhciBmID0gJHRvU3RyaW5nKHJmID09PSB1bmRlZmluZWQgJiYgaXNQcm90b3R5cGVPZihSZWdFeHBQcm90b3R5cGUsIFIpICYmICEoJ2ZsYWdzJyBpbiBSZWdFeHBQcm90b3R5cGUpID8gZ2V0RmxhZ3MoUikgOiByZik7XG4gICAgcmV0dXJuICcvJyArIHAgKyAnLycgKyBmO1xuICB9LCB7IHVuc2FmZTogdHJ1ZSB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBub3RBUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25vdC1hLXJlZ2V4cCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgY29ycmVjdElzUmVnRXhwTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1pcy1yZWdleHAtbG9naWMnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXN0cmluZy1wcm90b3R5cGUtZW5kc3dpdGggLS0gc2FmZVxudmFyIHVuJEVuZHNXaXRoID0gdW5jdXJyeVRoaXMoJycuZW5kc1dpdGgpO1xudmFyIHNsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG52YXIgQ09SUkVDVF9JU19SRUdFWFBfTE9HSUMgPSBjb3JyZWN0SXNSZWdFeHBMb2dpYygnZW5kc1dpdGgnKTtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL3B1bGwvNzAyXG52YXIgTUROX1BPTFlGSUxMX0JVRyA9ICFJU19QVVJFICYmICFDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyAmJiAhIWZ1bmN0aW9uICgpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoU3RyaW5nLnByb3RvdHlwZSwgJ2VuZHNXaXRoJyk7XG4gIHJldHVybiBkZXNjcmlwdG9yICYmICFkZXNjcmlwdG9yLndyaXRhYmxlO1xufSgpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuZW5kc3dpdGhcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhTUROX1BPTFlGSUxMX0JVRyAmJiAhQ09SUkVDVF9JU19SRUdFWFBfTE9HSUMgfSwge1xuICBlbmRzV2l0aDogZnVuY3Rpb24gZW5kc1dpdGgoc2VhcmNoU3RyaW5nIC8qICwgZW5kUG9zaXRpb24gPSBAbGVuZ3RoICovKSB7XG4gICAgdmFyIHRoYXQgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgICBub3RBUmVnRXhwKHNlYXJjaFN0cmluZyk7XG4gICAgdmFyIGVuZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIGxlbiA9IHRoYXQubGVuZ3RoO1xuICAgIHZhciBlbmQgPSBlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gbGVuIDogbWluKHRvTGVuZ3RoKGVuZFBvc2l0aW9uKSwgbGVuKTtcbiAgICB2YXIgc2VhcmNoID0gdG9TdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gdW4kRW5kc1dpdGhcbiAgICAgID8gdW4kRW5kc1dpdGgodGhhdCwgc2VhcmNoLCBlbmQpXG4gICAgICA6IHNsaWNlKHRoYXQsIGVuZCAtIHNlYXJjaC5sZW5ndGgsIGVuZCkgPT09IHNlYXJjaDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBub3RBUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25vdC1hLXJlZ2V4cCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgY29ycmVjdElzUmVnRXhwTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1pcy1yZWdleHAtbG9naWMnKTtcblxudmFyIHN0cmluZ0luZGV4T2YgPSB1bmN1cnJ5VGhpcygnJy5pbmRleE9mKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogIWNvcnJlY3RJc1JlZ0V4cExvZ2ljKCdpbmNsdWRlcycpIH0sIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaFN0cmluZyAvKiAsIHBvc2l0aW9uID0gMCAqLykge1xuICAgIHJldHVybiAhIX5zdHJpbmdJbmRleE9mKFxuICAgICAgdG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSksXG4gICAgICB0b1N0cmluZyhub3RBUmVnRXhwKHNlYXJjaFN0cmluZykpLFxuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICApO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBtYXRjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ21hdGNoJywgZnVuY3Rpb24gKE1BVENILCBuYXRpdmVNYXRjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUubWF0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5tYXRjaFxuICAgIGZ1bmN0aW9uIG1hdGNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIG1hdGNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgTUFUQ0gpO1xuICAgICAgcmV0dXJuIG1hdGNoZXIgPyBjYWxsKG1hdGNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBtYXRjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVNYXRjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIGlmICghcnguZ2xvYmFsKSByZXR1cm4gcmVnRXhwRXhlYyhyeCwgUyk7XG5cbiAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIHZhciBuID0gMDtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICB3aGlsZSAoKHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpKSAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgbWF0Y2hTdHIgPSB0b1N0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBBW25dID0gbWF0Y2hTdHI7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgIG4rKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuID09PSAwID8gbnVsbCA6IEE7XG4gICAgfVxuICBdO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIGdldFN1YnN0aXR1dGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtc3Vic3RpdHV0aW9uJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgUkVQTEFDRSA9IHdlbGxLbm93blN5bWJvbCgncmVwbGFjZScpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xudmFyIHN0cmluZ0luZGV4T2YgPSB1bmN1cnJ5VGhpcygnJy5pbmRleE9mKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxudmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xuXG4vLyBJRSA8PSAxMSByZXBsYWNlcyAkMCB3aXRoIHRoZSB3aG9sZSBtYXRjaCwgYXMgaWYgaXQgd2FzICQmXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MDI0NjY2L2dldHRpbmctaWUtdG8tcmVwbGFjZS1hLXJlZ2V4LXdpdGgtdGhlLWxpdGVyYWwtc3RyaW5nLTBcbnZhciBSRVBMQUNFX0tFRVBTXyQwID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9wcmVmZXItZXNjYXBlLXJlcGxhY2VtZW50LWRvbGxhci1jaGFyIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiAnYScucmVwbGFjZSgvLi8sICckMCcpID09PSAnJDAnO1xufSkoKTtcblxuLy8gU2FmYXJpIDw9IDEzLjAuMyg/KSBzdWJzdGl0dXRlcyBudGggY2FwdHVyZSB3aGVyZSBuPm0gd2l0aCBhbiBlbXB0eSBzdHJpbmdcbnZhciBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA9IChmdW5jdGlvbiAoKSB7XG4gIGlmICgvLi9bUkVQTEFDRV0pIHtcbiAgICByZXR1cm4gLy4vW1JFUExBQ0VdKCdhJywgJyQwJykgPT09ICcnO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn0pKCk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciByZSA9IC8uLztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0Lmdyb3VwcyA9IHsgYTogJzcnIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby11c2VsZXNzLWRvbGxhci1yZXBsYWNlbWVudHMgLS0gZmFsc2UgcG9zaXRpdmVcbiAgcmV0dXJuICcnLnJlcGxhY2UocmUsICckPGE+JykgIT09ICc3Jztcbn0pO1xuXG4vLyBAQHJlcGxhY2UgbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdyZXBsYWNlJywgZnVuY3Rpb24gKF8sIG5hdGl2ZVJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICB2YXIgVU5TQUZFX1NVQlNUSVRVVEUgPSBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA/ICckJyA6ICckMCc7XG5cbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHJlcGxhY2VyID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHNlYXJjaFZhbHVlLCBSRVBMQUNFKTtcbiAgICAgIHJldHVybiByZXBsYWNlclxuICAgICAgICA/IGNhbGwocmVwbGFjZXIsIHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG4gICAgICAgIDogY2FsbChuYXRpdmVSZXBsYWNlLCB0b1N0cmluZyhPKSwgc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEByZXBsYWNlXG4gICAgZnVuY3Rpb24gKHN0cmluZywgcmVwbGFjZVZhbHVlKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgcmVwbGFjZVZhbHVlID09ICdzdHJpbmcnICYmXG4gICAgICAgIHN0cmluZ0luZGV4T2YocmVwbGFjZVZhbHVlLCBVTlNBRkVfU1VCU1RJVFVURSkgPT09IC0xICYmXG4gICAgICAgIHN0cmluZ0luZGV4T2YocmVwbGFjZVZhbHVlLCAnJDwnKSA9PT0gLTFcbiAgICAgICkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVJlcGxhY2UsIHJ4LCBTLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBmdW5jdGlvbmFsUmVwbGFjZSA9IGlzQ2FsbGFibGUocmVwbGFjZVZhbHVlKTtcbiAgICAgIGlmICghZnVuY3Rpb25hbFJlcGxhY2UpIHJlcGxhY2VWYWx1ZSA9IHRvU3RyaW5nKHJlcGxhY2VWYWx1ZSk7XG5cbiAgICAgIHZhciBnbG9iYWwgPSByeC5nbG9iYWw7XG4gICAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBicmVhaztcblxuICAgICAgICBwdXNoKHJlc3VsdHMsIHJlc3VsdCk7XG4gICAgICAgIGlmICghZ2xvYmFsKSBicmVhaztcblxuICAgICAgICB2YXIgbWF0Y2hTdHIgPSB0b1N0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWNjdW11bGF0ZWRSZXN1bHQgPSAnJztcbiAgICAgIHZhciBuZXh0U291cmNlUG9zaXRpb24gPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbaV07XG5cbiAgICAgICAgdmFyIG1hdGNoZWQgPSB0b1N0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBtYXgobWluKHRvSW50ZWdlck9ySW5maW5pdHkocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgdmFyIGNhcHR1cmVzID0gW107XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAvLyBidXQgZm9yIHNvbWUgcmVhc29uIGBuYXRpdmVTbGljZS5jYWxsKHJlc3VsdCwgMSwgcmVzdWx0Lmxlbmd0aClgIChjYWxsZWQgaW5cbiAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykgcHVzaChjYXB0dXJlcywgbWF5YmVUb1N0cmluZyhyZXN1bHRbal0pKTtcbiAgICAgICAgdmFyIG5hbWVkQ2FwdHVyZXMgPSByZXN1bHQuZ3JvdXBzO1xuICAgICAgICBpZiAoZnVuY3Rpb25hbFJlcGxhY2UpIHtcbiAgICAgICAgICB2YXIgcmVwbGFjZXJBcmdzID0gY29uY2F0KFttYXRjaGVkXSwgY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSBwdXNoKHJlcGxhY2VyQXJncywgbmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gdG9TdHJpbmcoYXBwbHkocmVwbGFjZVZhbHVlLCB1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIFMsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPj0gbmV4dFNvdXJjZVBvc2l0aW9uKSB7XG4gICAgICAgICAgYWNjdW11bGF0ZWRSZXN1bHQgKz0gc3RyaW5nU2xpY2UoUywgbmV4dFNvdXJjZVBvc2l0aW9uLCBwb3NpdGlvbikgKyByZXBsYWNlbWVudDtcbiAgICAgICAgICBuZXh0U291cmNlUG9zaXRpb24gPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjdW11bGF0ZWRSZXN1bHQgKyBzdHJpbmdTbGljZShTLCBuZXh0U291cmNlUG9zaXRpb24pO1xuICAgIH1cbiAgXTtcbn0sICFSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyB8fCAhUkVQTEFDRV9LRUVQU18kMCB8fCBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcmVnZXhwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZS1zaW1wbGUnKTtcbnZhciBjYWxsUmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcbnZhciBzdGlja3lIZWxwZXJzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1zdGlja3ktaGVscGVycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBVTlNVUFBPUlRFRF9ZID0gc3RpY2t5SGVscGVycy5VTlNVUFBPUlRFRF9ZO1xudmFyIE1BWF9VSU5UMzIgPSAweEZGRkZGRkZGO1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyICRwdXNoID0gW10ucHVzaDtcbnZhciBleGVjID0gdW5jdXJyeVRoaXMoLy4vLmV4ZWMpO1xudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcygkcHVzaCk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbi8vIENocm9tZSA1MSBoYXMgYSBidWdneSBcInNwbGl0XCIgaW1wbGVtZW50YXRpb24gd2hlbiBSZWdFeHAjZXhlYyAhPT0gbmF0aXZlRXhlY1xuLy8gV2VleCBKUyBoYXMgZnJvemVuIGJ1aWx0LWluIHByb3RvdHlwZXMsIHNvIHVzZSB0cnkgLyBjYXRjaCB3cmFwcGVyXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby1lbXB0eS1ncm91cCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICB2YXIgcmUgPSAvKD86KS87XG4gIHZhciBvcmlnaW5hbEV4ZWMgPSByZS5leGVjO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3JpZ2luYWxFeGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIHZhciByZXN1bHQgPSAnYWInLnNwbGl0KHJlKTtcbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggIT09IDIgfHwgcmVzdWx0WzBdICE9PSAnYScgfHwgcmVzdWx0WzFdICE9PSAnYic7XG59KTtcblxuLy8gQEBzcGxpdCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NwbGl0JywgZnVuY3Rpb24gKFNQTElULCBuYXRpdmVTcGxpdCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHZhciBpbnRlcm5hbFNwbGl0O1xuICBpZiAoXG4gICAgJ2FiYmMnLnNwbGl0KC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby1lbXB0eS1ncm91cCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICAgICd0ZXN0Jy5zcGxpdCgvKD86KS8sIC0xKS5sZW5ndGggIT0gNCB8fFxuICAgICdhYicuc3BsaXQoLyg/OmFiKSovKS5sZW5ndGggIT0gMiB8fFxuICAgICcuJy5zcGxpdCgvKC4/KSguPykvKS5sZW5ndGggIT0gNCB8fFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tZW1wdHktY2FwdHVyaW5nLWdyb3VwLCByZWdleHAvbm8tZW1wdHktZ3JvdXAgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgICAnLicuc3BsaXQoLygpKCkvKS5sZW5ndGggPiAxIHx8XG4gICAgJycuc3BsaXQoLy4/LykubGVuZ3RoXG4gICkge1xuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIHN0cmluZyA9IHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICAgICAgdmFyIGxpbSA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XG4gICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQpIHJldHVybiBbc3RyaW5nXTtcbiAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICBpZiAoIWlzUmVnRXhwKHNlcGFyYXRvcikpIHtcbiAgICAgICAgcmV0dXJuIGNhbGwobmF0aXZlU3BsaXQsIHN0cmluZywgc2VwYXJhdG9yLCBsaW0pO1xuICAgICAgfVxuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGg7XG4gICAgICB3aGlsZSAobWF0Y2ggPSBjYWxsKHJlZ2V4cEV4ZWMsIHNlcGFyYXRvckNvcHksIHN0cmluZykpIHtcbiAgICAgICAgbGFzdEluZGV4ID0gc2VwYXJhdG9yQ29weS5sYXN0SW5kZXg7XG4gICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgcHVzaChvdXRwdXQsIHN0cmluZ1NsaWNlKHN0cmluZywgbGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICBpZiAobWF0Y2gubGVuZ3RoID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZy5sZW5ndGgpIGFwcGx5KCRwdXNoLCBvdXRwdXQsIGFycmF5U2xpY2UobWF0Y2gsIDEpKTtcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dC5sZW5ndGggPj0gbGltKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VwYXJhdG9yQ29weS5sYXN0SW5kZXggPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleCsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nLmxlbmd0aCkge1xuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhZXhlYyhzZXBhcmF0b3JDb3B5LCAnJykpIHB1c2gob3V0cHV0LCAnJyk7XG4gICAgICB9IGVsc2UgcHVzaChvdXRwdXQsIHN0cmluZ1NsaWNlKHN0cmluZywgbGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dC5sZW5ndGggPiBsaW0gPyBhcnJheVNsaWNlKG91dHB1dCwgMCwgbGltKSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZiAoJzAnLnNwbGl0KHVuZGVmaW5lZCwgMCkubGVuZ3RoKSB7XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6IGNhbGwobmF0aXZlU3BsaXQsIHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH07XG4gIH0gZWxzZSBpbnRlcm5hbFNwbGl0ID0gbmF0aXZlU3BsaXQ7XG5cbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zcGxpdGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNwbGl0XG4gICAgZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNwbGl0dGVyID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChzZXBhcmF0b3IsIFNQTElUKTtcbiAgICAgIHJldHVybiBzcGxpdHRlclxuICAgICAgICA/IGNhbGwoc3BsaXR0ZXIsIHNlcGFyYXRvciwgTywgbGltaXQpXG4gICAgICAgIDogY2FsbChpbnRlcm5hbFNwbGl0LCB0b1N0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc3BsaXRcbiAgICAvL1xuICAgIC8vIE5PVEU6IFRoaXMgY2Fubm90IGJlIHByb3Blcmx5IHBvbHlmaWxsZWQgaW4gZW5naW5lcyB0aGF0IGRvbid0IHN1cHBvcnRcbiAgICAvLyB0aGUgJ3knIGZsYWcuXG4gICAgZnVuY3Rpb24gKHN0cmluZywgbGltaXQpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByeCwgUywgbGltaXQsIGludGVybmFsU3BsaXQgIT09IG5hdGl2ZVNwbGl0KTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3RvcihyeCwgUmVnRXhwKTtcblxuICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XG4gICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChVTlNVUFBPUlRFRF9ZID8gJ2cnIDogJ3knKTtcblxuICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIFMgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHZhciBzcGxpdHRlciA9IG5ldyBDKFVOU1VQUE9SVEVEX1kgPyAnXig/OicgKyByeC5zb3VyY2UgKyAnKScgOiByeCwgZmxhZ3MpO1xuICAgICAgdmFyIGxpbSA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XG4gICAgICBpZiAoUy5sZW5ndGggPT09IDApIHJldHVybiBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgIHZhciBwID0gMDtcbiAgICAgIHZhciBxID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XG4gICAgICAgIHNwbGl0dGVyLmxhc3RJbmRleCA9IFVOU1VQUE9SVEVEX1kgPyAwIDogcTtcbiAgICAgICAgdmFyIHogPSBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgVU5TVVBQT1JURURfWSA/IHN0cmluZ1NsaWNlKFMsIHEpIDogUyk7XG4gICAgICAgIHZhciBlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeiA9PT0gbnVsbCB8fFxuICAgICAgICAgIChlID0gbWluKHRvTGVuZ3RoKHNwbGl0dGVyLmxhc3RJbmRleCArIChVTlNVUFBPUlRFRF9ZID8gcSA6IDApKSwgUy5sZW5ndGgpKSA9PT0gcFxuICAgICAgICApIHtcbiAgICAgICAgICBxID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHEsIHVuaWNvZGVNYXRjaGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHVzaChBLCBzdHJpbmdTbGljZShTLCBwLCBxKSk7XG4gICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHoubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBwdXNoKEEsIHpbaV0pO1xuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxID0gcCA9IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHB1c2goQSwgc3RyaW5nU2xpY2UoUywgcCkpO1xuICAgICAgcmV0dXJuIEE7XG4gICAgfVxuICBdO1xufSwgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQywgVU5TVVBQT1JURURfWSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgbm90QVJlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3QtYS1yZWdleHAnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGNvcnJlY3RJc1JlZ0V4cExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1zdHJpbmctcHJvdG90eXBlLXN0YXJ0c3dpdGggLS0gc2FmZVxudmFyIHVuJFN0YXJ0c1dpdGggPSB1bmN1cnJ5VGhpcygnJy5zdGFydHNXaXRoKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxudmFyIENPUlJFQ1RfSVNfUkVHRVhQX0xPR0lDID0gY29ycmVjdElzUmVnRXhwTG9naWMoJ3N0YXJ0c1dpdGgnKTtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL3B1bGwvNzAyXG52YXIgTUROX1BPTFlGSUxMX0JVRyA9ICFJU19QVVJFICYmICFDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyAmJiAhIWZ1bmN0aW9uICgpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoU3RyaW5nLnByb3RvdHlwZSwgJ3N0YXJ0c1dpdGgnKTtcbiAgcmV0dXJuIGRlc2NyaXB0b3IgJiYgIWRlc2NyaXB0b3Iud3JpdGFibGU7XG59KCk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGhgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnN0YXJ0c3dpdGhcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhTUROX1BPTFlGSUxMX0JVRyAmJiAhQ09SUkVDVF9JU19SRUdFWFBfTE9HSUMgfSwge1xuICBzdGFydHNXaXRoOiBmdW5jdGlvbiBzdGFydHNXaXRoKHNlYXJjaFN0cmluZyAvKiAsIHBvc2l0aW9uID0gMCAqLykge1xuICAgIHZhciB0aGF0ID0gdG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XG4gICAgbm90QVJlZ0V4cChzZWFyY2hTdHJpbmcpO1xuICAgIHZhciBpbmRleCA9IHRvTGVuZ3RoKG1pbihhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgdGhhdC5sZW5ndGgpKTtcbiAgICB2YXIgc2VhcmNoID0gdG9TdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gdW4kU3RhcnRzV2l0aFxuICAgICAgPyB1biRTdGFydHNXaXRoKHRoYXQsIHNlYXJjaCwgaW5kZXgpXG4gICAgICA6IHN0cmluZ1NsaWNlKHRoYXQsIGluZGV4LCBpbmRleCArIHNlYXJjaC5sZW5ndGgpID09PSBzZWFyY2g7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIGZvcmNlZFN0cmluZ1RyaW1NZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdUcmltTWV0aG9kKCd0cmltJykgfSwge1xuICB0cmltOiBmdW5jdGlvbiB0cmltKCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzKTtcbiAgfVxufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIEFycmF5SXRlcmF0b3JNZXRob2RzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvcicpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBBcnJheUl0ZXJhdG9yTWV0aG9kcy52YWx1ZXM7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSwgQ09MTEVDVElPTl9OQU1FKSB7XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XG4gICAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gICAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGVbSVRFUkFUT1JdICE9PSBBcnJheVZhbHVlcykgdHJ5IHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBDb2xsZWN0aW9uUHJvdG90eXBlW0lURVJBVE9SXSA9IEFycmF5VmFsdWVzO1xuICAgIH1cbiAgICBpZiAoIUNvbGxlY3Rpb25Qcm90b3R5cGVbVE9fU1RSSU5HX1RBR10pIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCBDT0xMRUNUSU9OX05BTUUpO1xuICAgIH1cbiAgICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIGZvciAodmFyIE1FVEhPRF9OQU1FIGluIEFycmF5SXRlcmF0b3JNZXRob2RzKSB7XG4gICAgICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgICAgIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlW01FVEhPRF9OQU1FXSAhPT0gQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdKSB0cnkge1xuICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgTUVUSE9EX05BTUUsIEFycmF5SXRlcmF0b3JNZXRob2RzW01FVEhPRF9OQU1FXSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBDb2xsZWN0aW9uUHJvdG90eXBlW01FVEhPRF9OQU1FXSA9IEFycmF5SXRlcmF0b3JNZXRob2RzW01FVEhPRF9OQU1FXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSwgQ09MTEVDVElPTl9OQU1FKTtcbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSwgJ0RPTVRva2VuTGlzdCcpO1xuIiwiLypcblx0QmFzZWQgb24gcmdiY29sb3IuanMgYnkgU3RveWFuIFN0ZWZhbm92IDxzc3Rvb0BnbWFpbC5jb20+XG5cdGh0dHA6Ly93d3cucGhwaWVkLmNvbS9yZ2ItY29sb3ItcGFyc2VyLWluLWphdmFzY3JpcHQvXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNvbG9yX3N0cmluZykge1xuICAgIHRoaXMub2sgPSBmYWxzZTtcbiAgICB0aGlzLmFscGhhID0gMS4wO1xuXG4gICAgLy8gc3RyaXAgYW55IGxlYWRpbmcgI1xuICAgIGlmIChjb2xvcl9zdHJpbmcuY2hhckF0KDApID09ICcjJykgeyAvLyByZW1vdmUgIyBpZiBhbnlcbiAgICAgICAgY29sb3Jfc3RyaW5nID0gY29sb3Jfc3RyaW5nLnN1YnN0cigxLDYpO1xuICAgIH1cblxuICAgIGNvbG9yX3N0cmluZyA9IGNvbG9yX3N0cmluZy5yZXBsYWNlKC8gL2csJycpO1xuICAgIGNvbG9yX3N0cmluZyA9IGNvbG9yX3N0cmluZy50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gYmVmb3JlIGdldHRpbmcgaW50byByZWdleHBzLCB0cnkgc2ltcGxlIG1hdGNoZXNcbiAgICAvLyBhbmQgb3ZlcndyaXRlIHRoZSBpbnB1dFxuICAgIHZhciBzaW1wbGVfY29sb3JzID0ge1xuICAgICAgICBhbGljZWJsdWU6ICdmMGY4ZmYnLFxuICAgICAgICBhbnRpcXVld2hpdGU6ICdmYWViZDcnLFxuICAgICAgICBhcXVhOiAnMDBmZmZmJyxcbiAgICAgICAgYXF1YW1hcmluZTogJzdmZmZkNCcsXG4gICAgICAgIGF6dXJlOiAnZjBmZmZmJyxcbiAgICAgICAgYmVpZ2U6ICdmNWY1ZGMnLFxuICAgICAgICBiaXNxdWU6ICdmZmU0YzQnLFxuICAgICAgICBibGFjazogJzAwMDAwMCcsXG4gICAgICAgIGJsYW5jaGVkYWxtb25kOiAnZmZlYmNkJyxcbiAgICAgICAgYmx1ZTogJzAwMDBmZicsXG4gICAgICAgIGJsdWV2aW9sZXQ6ICc4YTJiZTInLFxuICAgICAgICBicm93bjogJ2E1MmEyYScsXG4gICAgICAgIGJ1cmx5d29vZDogJ2RlYjg4NycsXG4gICAgICAgIGNhZGV0Ymx1ZTogJzVmOWVhMCcsXG4gICAgICAgIGNoYXJ0cmV1c2U6ICc3ZmZmMDAnLFxuICAgICAgICBjaG9jb2xhdGU6ICdkMjY5MWUnLFxuICAgICAgICBjb3JhbDogJ2ZmN2Y1MCcsXG4gICAgICAgIGNvcm5mbG93ZXJibHVlOiAnNjQ5NWVkJyxcbiAgICAgICAgY29ybnNpbGs6ICdmZmY4ZGMnLFxuICAgICAgICBjcmltc29uOiAnZGMxNDNjJyxcbiAgICAgICAgY3lhbjogJzAwZmZmZicsXG4gICAgICAgIGRhcmtibHVlOiAnMDAwMDhiJyxcbiAgICAgICAgZGFya2N5YW46ICcwMDhiOGInLFxuICAgICAgICBkYXJrZ29sZGVucm9kOiAnYjg4NjBiJyxcbiAgICAgICAgZGFya2dyYXk6ICdhOWE5YTknLFxuICAgICAgICBkYXJrZ3JlZW46ICcwMDY0MDAnLFxuICAgICAgICBkYXJra2hha2k6ICdiZGI3NmInLFxuICAgICAgICBkYXJrbWFnZW50YTogJzhiMDA4YicsXG4gICAgICAgIGRhcmtvbGl2ZWdyZWVuOiAnNTU2YjJmJyxcbiAgICAgICAgZGFya29yYW5nZTogJ2ZmOGMwMCcsXG4gICAgICAgIGRhcmtvcmNoaWQ6ICc5OTMyY2MnLFxuICAgICAgICBkYXJrcmVkOiAnOGIwMDAwJyxcbiAgICAgICAgZGFya3NhbG1vbjogJ2U5OTY3YScsXG4gICAgICAgIGRhcmtzZWFncmVlbjogJzhmYmM4ZicsXG4gICAgICAgIGRhcmtzbGF0ZWJsdWU6ICc0ODNkOGInLFxuICAgICAgICBkYXJrc2xhdGVncmF5OiAnMmY0ZjRmJyxcbiAgICAgICAgZGFya3R1cnF1b2lzZTogJzAwY2VkMScsXG4gICAgICAgIGRhcmt2aW9sZXQ6ICc5NDAwZDMnLFxuICAgICAgICBkZWVwcGluazogJ2ZmMTQ5MycsXG4gICAgICAgIGRlZXBza3libHVlOiAnMDBiZmZmJyxcbiAgICAgICAgZGltZ3JheTogJzY5Njk2OScsXG4gICAgICAgIGRvZGdlcmJsdWU6ICcxZTkwZmYnLFxuICAgICAgICBmZWxkc3BhcjogJ2QxOTI3NScsXG4gICAgICAgIGZpcmVicmljazogJ2IyMjIyMicsXG4gICAgICAgIGZsb3JhbHdoaXRlOiAnZmZmYWYwJyxcbiAgICAgICAgZm9yZXN0Z3JlZW46ICcyMjhiMjInLFxuICAgICAgICBmdWNoc2lhOiAnZmYwMGZmJyxcbiAgICAgICAgZ2FpbnNib3JvOiAnZGNkY2RjJyxcbiAgICAgICAgZ2hvc3R3aGl0ZTogJ2Y4ZjhmZicsXG4gICAgICAgIGdvbGQ6ICdmZmQ3MDAnLFxuICAgICAgICBnb2xkZW5yb2Q6ICdkYWE1MjAnLFxuICAgICAgICBncmF5OiAnODA4MDgwJyxcbiAgICAgICAgZ3JlZW46ICcwMDgwMDAnLFxuICAgICAgICBncmVlbnllbGxvdzogJ2FkZmYyZicsXG4gICAgICAgIGhvbmV5ZGV3OiAnZjBmZmYwJyxcbiAgICAgICAgaG90cGluazogJ2ZmNjliNCcsXG4gICAgICAgIGluZGlhbnJlZCA6ICdjZDVjNWMnLFxuICAgICAgICBpbmRpZ28gOiAnNGIwMDgyJyxcbiAgICAgICAgaXZvcnk6ICdmZmZmZjAnLFxuICAgICAgICBraGFraTogJ2YwZTY4YycsXG4gICAgICAgIGxhdmVuZGVyOiAnZTZlNmZhJyxcbiAgICAgICAgbGF2ZW5kZXJibHVzaDogJ2ZmZjBmNScsXG4gICAgICAgIGxhd25ncmVlbjogJzdjZmMwMCcsXG4gICAgICAgIGxlbW9uY2hpZmZvbjogJ2ZmZmFjZCcsXG4gICAgICAgIGxpZ2h0Ymx1ZTogJ2FkZDhlNicsXG4gICAgICAgIGxpZ2h0Y29yYWw6ICdmMDgwODAnLFxuICAgICAgICBsaWdodGN5YW46ICdlMGZmZmYnLFxuICAgICAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogJ2ZhZmFkMicsXG4gICAgICAgIGxpZ2h0Z3JleTogJ2QzZDNkMycsXG4gICAgICAgIGxpZ2h0Z3JlZW46ICc5MGVlOTAnLFxuICAgICAgICBsaWdodHBpbms6ICdmZmI2YzEnLFxuICAgICAgICBsaWdodHNhbG1vbjogJ2ZmYTA3YScsXG4gICAgICAgIGxpZ2h0c2VhZ3JlZW46ICcyMGIyYWEnLFxuICAgICAgICBsaWdodHNreWJsdWU6ICc4N2NlZmEnLFxuICAgICAgICBsaWdodHNsYXRlYmx1ZTogJzg0NzBmZicsXG4gICAgICAgIGxpZ2h0c2xhdGVncmF5OiAnNzc4ODk5JyxcbiAgICAgICAgbGlnaHRzdGVlbGJsdWU6ICdiMGM0ZGUnLFxuICAgICAgICBsaWdodHllbGxvdzogJ2ZmZmZlMCcsXG4gICAgICAgIGxpbWU6ICcwMGZmMDAnLFxuICAgICAgICBsaW1lZ3JlZW46ICczMmNkMzInLFxuICAgICAgICBsaW5lbjogJ2ZhZjBlNicsXG4gICAgICAgIG1hZ2VudGE6ICdmZjAwZmYnLFxuICAgICAgICBtYXJvb246ICc4MDAwMDAnLFxuICAgICAgICBtZWRpdW1hcXVhbWFyaW5lOiAnNjZjZGFhJyxcbiAgICAgICAgbWVkaXVtYmx1ZTogJzAwMDBjZCcsXG4gICAgICAgIG1lZGl1bW9yY2hpZDogJ2JhNTVkMycsXG4gICAgICAgIG1lZGl1bXB1cnBsZTogJzkzNzBkOCcsXG4gICAgICAgIG1lZGl1bXNlYWdyZWVuOiAnM2NiMzcxJyxcbiAgICAgICAgbWVkaXVtc2xhdGVibHVlOiAnN2I2OGVlJyxcbiAgICAgICAgbWVkaXVtc3ByaW5nZ3JlZW46ICcwMGZhOWEnLFxuICAgICAgICBtZWRpdW10dXJxdW9pc2U6ICc0OGQxY2MnLFxuICAgICAgICBtZWRpdW12aW9sZXRyZWQ6ICdjNzE1ODUnLFxuICAgICAgICBtaWRuaWdodGJsdWU6ICcxOTE5NzAnLFxuICAgICAgICBtaW50Y3JlYW06ICdmNWZmZmEnLFxuICAgICAgICBtaXN0eXJvc2U6ICdmZmU0ZTEnLFxuICAgICAgICBtb2NjYXNpbjogJ2ZmZTRiNScsXG4gICAgICAgIG5hdmFqb3doaXRlOiAnZmZkZWFkJyxcbiAgICAgICAgbmF2eTogJzAwMDA4MCcsXG4gICAgICAgIG9sZGxhY2U6ICdmZGY1ZTYnLFxuICAgICAgICBvbGl2ZTogJzgwODAwMCcsXG4gICAgICAgIG9saXZlZHJhYjogJzZiOGUyMycsXG4gICAgICAgIG9yYW5nZTogJ2ZmYTUwMCcsXG4gICAgICAgIG9yYW5nZXJlZDogJ2ZmNDUwMCcsXG4gICAgICAgIG9yY2hpZDogJ2RhNzBkNicsXG4gICAgICAgIHBhbGVnb2xkZW5yb2Q6ICdlZWU4YWEnLFxuICAgICAgICBwYWxlZ3JlZW46ICc5OGZiOTgnLFxuICAgICAgICBwYWxldHVycXVvaXNlOiAnYWZlZWVlJyxcbiAgICAgICAgcGFsZXZpb2xldHJlZDogJ2Q4NzA5MycsXG4gICAgICAgIHBhcGF5YXdoaXA6ICdmZmVmZDUnLFxuICAgICAgICBwZWFjaHB1ZmY6ICdmZmRhYjknLFxuICAgICAgICBwZXJ1OiAnY2Q4NTNmJyxcbiAgICAgICAgcGluazogJ2ZmYzBjYicsXG4gICAgICAgIHBsdW06ICdkZGEwZGQnLFxuICAgICAgICBwb3dkZXJibHVlOiAnYjBlMGU2JyxcbiAgICAgICAgcHVycGxlOiAnODAwMDgwJyxcbiAgICAgICAgcmViZWNjYXB1cnBsZTogJzY2MzM5OScsXG4gICAgICAgIHJlZDogJ2ZmMDAwMCcsXG4gICAgICAgIHJvc3licm93bjogJ2JjOGY4ZicsXG4gICAgICAgIHJveWFsYmx1ZTogJzQxNjllMScsXG4gICAgICAgIHNhZGRsZWJyb3duOiAnOGI0NTEzJyxcbiAgICAgICAgc2FsbW9uOiAnZmE4MDcyJyxcbiAgICAgICAgc2FuZHlicm93bjogJ2Y0YTQ2MCcsXG4gICAgICAgIHNlYWdyZWVuOiAnMmU4YjU3JyxcbiAgICAgICAgc2Vhc2hlbGw6ICdmZmY1ZWUnLFxuICAgICAgICBzaWVubmE6ICdhMDUyMmQnLFxuICAgICAgICBzaWx2ZXI6ICdjMGMwYzAnLFxuICAgICAgICBza3libHVlOiAnODdjZWViJyxcbiAgICAgICAgc2xhdGVibHVlOiAnNmE1YWNkJyxcbiAgICAgICAgc2xhdGVncmF5OiAnNzA4MDkwJyxcbiAgICAgICAgc25vdzogJ2ZmZmFmYScsXG4gICAgICAgIHNwcmluZ2dyZWVuOiAnMDBmZjdmJyxcbiAgICAgICAgc3RlZWxibHVlOiAnNDY4MmI0JyxcbiAgICAgICAgdGFuOiAnZDJiNDhjJyxcbiAgICAgICAgdGVhbDogJzAwODA4MCcsXG4gICAgICAgIHRoaXN0bGU6ICdkOGJmZDgnLFxuICAgICAgICB0b21hdG86ICdmZjYzNDcnLFxuICAgICAgICB0dXJxdW9pc2U6ICc0MGUwZDAnLFxuICAgICAgICB2aW9sZXQ6ICdlZTgyZWUnLFxuICAgICAgICB2aW9sZXRyZWQ6ICdkMDIwOTAnLFxuICAgICAgICB3aGVhdDogJ2Y1ZGViMycsXG4gICAgICAgIHdoaXRlOiAnZmZmZmZmJyxcbiAgICAgICAgd2hpdGVzbW9rZTogJ2Y1ZjVmNScsXG4gICAgICAgIHllbGxvdzogJ2ZmZmYwMCcsXG4gICAgICAgIHllbGxvd2dyZWVuOiAnOWFjZDMyJ1xuICAgIH07XG4gICAgY29sb3Jfc3RyaW5nID0gc2ltcGxlX2NvbG9yc1tjb2xvcl9zdHJpbmddIHx8IGNvbG9yX3N0cmluZztcbiAgICAvLyBlbWQgb2Ygc2ltcGxlIHR5cGUtaW4gY29sb3JzXG5cbiAgICAvLyBhcnJheSBvZiBjb2xvciBkZWZpbml0aW9uIG9iamVjdHNcbiAgICB2YXIgY29sb3JfZGVmcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcmU6IC9ecmdiYVxcKChcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKigoPzpcXGQ/XFwuKT9cXGQpXFwpJC8sXG4gICAgICAgICAgICBleGFtcGxlOiBbJ3JnYmEoMTIzLCAyMzQsIDQ1LCAwLjgpJywgJ3JnYmEoMjU1LDIzNCwyNDUsMS4wKSddLFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKGJpdHMpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMV0pLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzJdKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1szXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoYml0c1s0XSlcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICByZTogL15yZ2JcXCgoXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezEsM30pXFwpJC8sXG4gICAgICAgICAgICBleGFtcGxlOiBbJ3JnYigxMjMsIDIzNCwgNDUpJywgJ3JnYigyNTUsMjM0LDI0NSknXSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChiaXRzKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzFdKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1syXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbM10pXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmU6IC9eKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC8sXG4gICAgICAgICAgICBleGFtcGxlOiBbJyMwMGZmMDAnLCAnMzM2Njk5J10sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiAoYml0cyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1sxXSwgMTYpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzJdLCAxNiksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbM10sIDE2KVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlOiAvXihbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KSQvLFxuICAgICAgICAgICAgZXhhbXBsZTogWycjZmIwJywgJ2YwZiddLFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKGJpdHMpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMV0gKyBiaXRzWzFdLCAxNiksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMl0gKyBiaXRzWzJdLCAxNiksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbM10gKyBiaXRzWzNdLCAxNilcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXTtcblxuICAgIC8vIHNlYXJjaCB0aHJvdWdoIHRoZSBkZWZpbml0aW9ucyB0byBmaW5kIGEgbWF0Y2hcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbG9yX2RlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJlID0gY29sb3JfZGVmc1tpXS5yZTtcbiAgICAgICAgdmFyIHByb2Nlc3NvciA9IGNvbG9yX2RlZnNbaV0ucHJvY2VzcztcbiAgICAgICAgdmFyIGJpdHMgPSByZS5leGVjKGNvbG9yX3N0cmluZyk7XG4gICAgICAgIGlmIChiaXRzKSB7XG4gICAgICAgICAgICB2YXIgY2hhbm5lbHMgPSBwcm9jZXNzb3IoYml0cyk7XG4gICAgICAgICAgICB0aGlzLnIgPSBjaGFubmVsc1swXTtcbiAgICAgICAgICAgIHRoaXMuZyA9IGNoYW5uZWxzWzFdO1xuICAgICAgICAgICAgdGhpcy5iID0gY2hhbm5lbHNbMl07XG4gICAgICAgICAgICBpZiAoY2hhbm5lbHMubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxwaGEgPSBjaGFubmVsc1szXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyB2YWxpZGF0ZS9jbGVhbnVwIHZhbHVlc1xuICAgIHRoaXMuciA9ICh0aGlzLnIgPCAwIHx8IGlzTmFOKHRoaXMucikpID8gMCA6ICgodGhpcy5yID4gMjU1KSA/IDI1NSA6IHRoaXMucik7XG4gICAgdGhpcy5nID0gKHRoaXMuZyA8IDAgfHwgaXNOYU4odGhpcy5nKSkgPyAwIDogKCh0aGlzLmcgPiAyNTUpID8gMjU1IDogdGhpcy5nKTtcbiAgICB0aGlzLmIgPSAodGhpcy5iIDwgMCB8fCBpc05hTih0aGlzLmIpKSA/IDAgOiAoKHRoaXMuYiA+IDI1NSkgPyAyNTUgOiB0aGlzLmIpO1xuICAgIHRoaXMuYWxwaGEgPSAodGhpcy5hbHBoYSA8IDApID8gMCA6ICgodGhpcy5hbHBoYSA+IDEuMCB8fCBpc05hTih0aGlzLmFscGhhKSkgPyAxLjAgOiB0aGlzLmFscGhhKTtcblxuICAgIC8vIHNvbWUgZ2V0dGVyc1xuICAgIHRoaXMudG9SR0IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAncmdiKCcgKyB0aGlzLnIgKyAnLCAnICsgdGhpcy5nICsgJywgJyArIHRoaXMuYiArICcpJztcbiAgICB9XG4gICAgdGhpcy50b1JHQkEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAncmdiYSgnICsgdGhpcy5yICsgJywgJyArIHRoaXMuZyArICcsICcgKyB0aGlzLmIgKyAnLCAnICsgdGhpcy5hbHBoYSArICcpJztcbiAgICB9XG4gICAgdGhpcy50b0hleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLnIudG9TdHJpbmcoMTYpO1xuICAgICAgICB2YXIgZyA9IHRoaXMuZy50b1N0cmluZygxNik7XG4gICAgICAgIHZhciBiID0gdGhpcy5iLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgaWYgKHIubGVuZ3RoID09IDEpIHIgPSAnMCcgKyByO1xuICAgICAgICBpZiAoZy5sZW5ndGggPT0gMSkgZyA9ICcwJyArIGc7XG4gICAgICAgIGlmIChiLmxlbmd0aCA9PSAxKSBiID0gJzAnICsgYjtcbiAgICAgICAgcmV0dXJuICcjJyArIHIgKyBnICsgYjtcbiAgICB9XG5cbiAgICAvLyBoZWxwXG4gICAgdGhpcy5nZXRIZWxwWE1MID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBleGFtcGxlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAvLyBhZGQgcmVnZXhwc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbG9yX2RlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBleGFtcGxlID0gY29sb3JfZGVmc1tpXS5leGFtcGxlO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBleGFtcGxlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZXhhbXBsZXNbZXhhbXBsZXMubGVuZ3RoXSA9IGV4YW1wbGVbal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIHR5cGUtaW4gY29sb3JzXG4gICAgICAgIGZvciAodmFyIHNjIGluIHNpbXBsZV9jb2xvcnMpIHtcbiAgICAgICAgICAgIGV4YW1wbGVzW2V4YW1wbGVzLmxlbmd0aF0gPSBzYztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB4bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB4bWwuc2V0QXR0cmlidXRlKCdpZCcsICdyZ2Jjb2xvci1leGFtcGxlcycpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4YW1wbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIHZhciBsaXN0X2NvbG9yID0gbmV3IFJHQkNvbG9yKGV4YW1wbGVzW2ldKTtcbiAgICAgICAgICAgICAgICB2YXIgZXhhbXBsZV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBleGFtcGxlX2Rpdi5zdHlsZS5jc3NUZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICdtYXJnaW46IDNweDsgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ2JhY2tncm91bmQ6JyArIGxpc3RfY29sb3IudG9IZXgoKSArICc7ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ2NvbG9yOicgKyBsaXN0X2NvbG9yLnRvSGV4KClcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgZXhhbXBsZV9kaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ3Rlc3QnKSk7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RfaXRlbV92YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgICAgICAgICAgICAgICAnICcgKyBleGFtcGxlc1tpXSArICcgLT4gJyArIGxpc3RfY29sb3IudG9SR0IoKSArICcgLT4gJyArIGxpc3RfY29sb3IudG9IZXgoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGV4YW1wbGVfZGl2KTtcbiAgICAgICAgICAgICAgICBsaXN0X2l0ZW0uYXBwZW5kQ2hpbGQobGlzdF9pdGVtX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB4bWwuYXBwZW5kQ2hpbGQobGlzdF9pdGVtKTtcblxuICAgICAgICAgICAgfSBjYXRjaChlKXt9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHhtbDtcblxuICAgIH1cblxufVxuIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAtLSB1c2VkIGZvciBjYWxjdWxhdGlvbnMgKi9cblxuLyogZXNsaW50LWRpc2FibGUgdW5pY29ybi9wcmVmZXItcXVlcnktc2VsZWN0b3IgLS0gYWltaW5nIGF0XG4gIGJhY2t3YXJkLWNvbXBhdGliaWxpdHkgKi9cblxuLyoqXG4qIFN0YWNrQmx1ciAtIGEgZmFzdCBhbG1vc3QgR2F1c3NpYW4gQmx1ciBGb3IgQ2FudmFzXG4qXG4qIEluIGNhc2UgeW91IGZpbmQgdGhpcyBjbGFzcyB1c2VmdWwgLSBlc3BlY2lhbGx5IGluIGNvbW1lcmNpYWwgcHJvamVjdHMgLVxuKiBJIGFtIG5vdCB0b3RhbGx5IHVuaGFwcHkgZm9yIGEgc21hbGwgZG9uYXRpb24gdG8gbXkgUGF5UGFsIGFjY291bnRcbiogbWFyaW9AcXVhc2ltb25kby5kZVxuKlxuKiBPciBzdXBwb3J0IG1lIG9uIGZsYXR0cjpcbioge0BsaW5rIGh0dHBzOi8vZmxhdHRyLmNvbS90aGluZy83Mjc5MS9TdGFja0JsdXItYS1mYXN0LWFsbW9zdC1HYXVzc2lhbi1CbHVyLUVmZmVjdC1mb3ItQ2FudmFzSmF2YXNjcmlwdH0uXG4qXG4qIEBtb2R1bGUgU3RhY2tCbHVyXG4qIEBhdXRob3IgTWFyaW8gS2xpbmdlbWFublxuKiBDb250YWN0OiBtYXJpb0BxdWFzaW1vbmRvLmNvbVxuKiBXZWJzaXRlOiB7QGxpbmsgaHR0cDovL3d3dy5xdWFzaW1vbmRvLmNvbS9TdGFja0JsdXJGb3JDYW52YXMvU3RhY2tCbHVyRGVtby5odG1sfVxuKiBUd2l0dGVyOiBAcXVhc2ltb25kb1xuKlxuKiBAY29weXJpZ2h0IChjKSAyMDEwIE1hcmlvIEtsaW5nZW1hbm5cbipcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XG4qIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuKiBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiogY29uZGl0aW9uczpcbipcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiogaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4qXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4qIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFU1xuKiBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuKiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuKiBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcbiogV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4qIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiogT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbnZhciBtdWxUYWJsZSA9IFs1MTIsIDUxMiwgNDU2LCA1MTIsIDMyOCwgNDU2LCAzMzUsIDUxMiwgNDA1LCAzMjgsIDI3MSwgNDU2LCAzODgsIDMzNSwgMjkyLCA1MTIsIDQ1NCwgNDA1LCAzNjQsIDMyOCwgMjk4LCAyNzEsIDQ5NiwgNDU2LCA0MjAsIDM4OCwgMzYwLCAzMzUsIDMxMiwgMjkyLCAyNzMsIDUxMiwgNDgyLCA0NTQsIDQyOCwgNDA1LCAzODMsIDM2NCwgMzQ1LCAzMjgsIDMxMiwgMjk4LCAyODQsIDI3MSwgMjU5LCA0OTYsIDQ3NSwgNDU2LCA0MzcsIDQyMCwgNDA0LCAzODgsIDM3NCwgMzYwLCAzNDcsIDMzNSwgMzIzLCAzMTIsIDMwMiwgMjkyLCAyODIsIDI3MywgMjY1LCA1MTIsIDQ5NywgNDgyLCA0NjgsIDQ1NCwgNDQxLCA0MjgsIDQxNywgNDA1LCAzOTQsIDM4MywgMzczLCAzNjQsIDM1NCwgMzQ1LCAzMzcsIDMyOCwgMzIwLCAzMTIsIDMwNSwgMjk4LCAyOTEsIDI4NCwgMjc4LCAyNzEsIDI2NSwgMjU5LCA1MDcsIDQ5NiwgNDg1LCA0NzUsIDQ2NSwgNDU2LCA0NDYsIDQzNywgNDI4LCA0MjAsIDQxMiwgNDA0LCAzOTYsIDM4OCwgMzgxLCAzNzQsIDM2NywgMzYwLCAzNTQsIDM0NywgMzQxLCAzMzUsIDMyOSwgMzIzLCAzMTgsIDMxMiwgMzA3LCAzMDIsIDI5NywgMjkyLCAyODcsIDI4MiwgMjc4LCAyNzMsIDI2OSwgMjY1LCAyNjEsIDUxMiwgNTA1LCA0OTcsIDQ4OSwgNDgyLCA0NzUsIDQ2OCwgNDYxLCA0NTQsIDQ0NywgNDQxLCA0MzUsIDQyOCwgNDIyLCA0MTcsIDQxMSwgNDA1LCAzOTksIDM5NCwgMzg5LCAzODMsIDM3OCwgMzczLCAzNjgsIDM2NCwgMzU5LCAzNTQsIDM1MCwgMzQ1LCAzNDEsIDMzNywgMzMyLCAzMjgsIDMyNCwgMzIwLCAzMTYsIDMxMiwgMzA5LCAzMDUsIDMwMSwgMjk4LCAyOTQsIDI5MSwgMjg3LCAyODQsIDI4MSwgMjc4LCAyNzQsIDI3MSwgMjY4LCAyNjUsIDI2MiwgMjU5LCAyNTcsIDUwNywgNTAxLCA0OTYsIDQ5MSwgNDg1LCA0ODAsIDQ3NSwgNDcwLCA0NjUsIDQ2MCwgNDU2LCA0NTEsIDQ0NiwgNDQyLCA0MzcsIDQzMywgNDI4LCA0MjQsIDQyMCwgNDE2LCA0MTIsIDQwOCwgNDA0LCA0MDAsIDM5NiwgMzkyLCAzODgsIDM4NSwgMzgxLCAzNzcsIDM3NCwgMzcwLCAzNjcsIDM2MywgMzYwLCAzNTcsIDM1NCwgMzUwLCAzNDcsIDM0NCwgMzQxLCAzMzgsIDMzNSwgMzMyLCAzMjksIDMyNiwgMzIzLCAzMjAsIDMxOCwgMzE1LCAzMTIsIDMxMCwgMzA3LCAzMDQsIDMwMiwgMjk5LCAyOTcsIDI5NCwgMjkyLCAyODksIDI4NywgMjg1LCAyODIsIDI4MCwgMjc4LCAyNzUsIDI3MywgMjcxLCAyNjksIDI2NywgMjY1LCAyNjMsIDI2MSwgMjU5XTtcbnZhciBzaGdUYWJsZSA9IFs5LCAxMSwgMTIsIDEzLCAxMywgMTQsIDE0LCAxNSwgMTUsIDE1LCAxNSwgMTYsIDE2LCAxNiwgMTYsIDE3LCAxNywgMTcsIDE3LCAxNywgMTcsIDE3LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjRdO1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ3xIVE1MSW1hZ2VFbGVtZW50fSBpbWdcbiAqIEBwYXJhbSB7c3RyaW5nfEhUTUxDYW52YXNFbGVtZW50fSBjYW52YXNcbiAqIEBwYXJhbSB7RmxvYXR9IHJhZGl1c1xuICogQHBhcmFtIHtib29sZWFufSBibHVyQWxwaGFDaGFubmVsXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHVzZU9mZnNldFxuICogQHBhcmFtIHtib29sZWFufSBza2lwU3R5bGVzXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIHByb2Nlc3NJbWFnZShpbWcsIGNhbnZhcywgcmFkaXVzLCBibHVyQWxwaGFDaGFubmVsLCB1c2VPZmZzZXQsIHNraXBTdHlsZXMpIHtcbiAgaWYgKHR5cGVvZiBpbWcgPT09ICdzdHJpbmcnKSB7XG4gICAgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW1nKTtcbiAgfVxuXG4gIGlmICghaW1nIHx8ICEoJ25hdHVyYWxXaWR0aCcgaW4gaW1nKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBkaW1lbnNpb25UeXBlID0gdXNlT2Zmc2V0ID8gJ29mZnNldCcgOiAnbmF0dXJhbCc7XG4gIHZhciB3ID0gaW1nW2RpbWVuc2lvblR5cGUgKyAnV2lkdGgnXTtcbiAgdmFyIGggPSBpbWdbZGltZW5zaW9uVHlwZSArICdIZWlnaHQnXTtcblxuICBpZiAodHlwZW9mIGNhbnZhcyA9PT0gJ3N0cmluZycpIHtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXMpO1xuICB9XG5cbiAgaWYgKCFjYW52YXMgfHwgISgnZ2V0Q29udGV4dCcgaW4gY2FudmFzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghc2tpcFN0eWxlcykge1xuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4JztcbiAgfVxuXG4gIGNhbnZhcy53aWR0aCA9IHc7XG4gIGNhbnZhcy5oZWlnaHQgPSBoO1xuICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcbiAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBpbWcubmF0dXJhbFdpZHRoLCBpbWcubmF0dXJhbEhlaWdodCwgMCwgMCwgdywgaCk7XG5cbiAgaWYgKGlzTmFOKHJhZGl1cykgfHwgcmFkaXVzIDwgMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChibHVyQWxwaGFDaGFubmVsKSB7XG4gICAgcHJvY2Vzc0NhbnZhc1JHQkEoY2FudmFzLCAwLCAwLCB3LCBoLCByYWRpdXMpO1xuICB9IGVsc2Uge1xuICAgIHByb2Nlc3NDYW52YXNSR0IoY2FudmFzLCAwLCAwLCB3LCBoLCByYWRpdXMpO1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfEhUTUxDYW52YXNFbGVtZW50fSBjYW52YXNcbiAqIEBwYXJhbSB7SW50ZWdlcn0gdG9wWFxuICogQHBhcmFtIHtJbnRlZ2VyfSB0b3BZXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGhlaWdodFxuICogQHRocm93cyB7RXJyb3J8VHlwZUVycm9yfVxuICogQHJldHVybnMge0ltYWdlRGF0YX0gU2VlIHtAbGluayBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9jYW52YXMuaHRtbCNpbWFnZWRhdGF9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRJbWFnZURhdGFGcm9tQ2FudmFzKGNhbnZhcywgdG9wWCwgdG9wWSwgd2lkdGgsIGhlaWdodCkge1xuICBpZiAodHlwZW9mIGNhbnZhcyA9PT0gJ3N0cmluZycpIHtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXMpO1xuICB9XG5cbiAgaWYgKCFjYW52YXMgfHwgX3R5cGVvZihjYW52YXMpICE9PSAnb2JqZWN0JyB8fCAhKCdnZXRDb250ZXh0JyBpbiBjYW52YXMpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0aW5nIGNhbnZhcyB3aXRoIGBnZXRDb250ZXh0YCBtZXRob2QgJyArICdpbiBwcm9jZXNzQ2FudmFzUkdCKEEpIGNhbGxzIScpO1xuICB9XG5cbiAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICB0cnkge1xuICAgIHJldHVybiBjb250ZXh0LmdldEltYWdlRGF0YSh0b3BYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGFjY2VzcyBpbWFnZSBkYXRhOiAnICsgZSk7XG4gIH1cbn1cbi8qKlxuICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHRvcFhcbiAqIEBwYXJhbSB7SW50ZWdlcn0gdG9wWVxuICogQHBhcmFtIHtJbnRlZ2VyfSB3aWR0aFxuICogQHBhcmFtIHtJbnRlZ2VyfSBoZWlnaHRcbiAqIEBwYXJhbSB7RmxvYXR9IHJhZGl1c1xuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqL1xuXG5cbmZ1bmN0aW9uIHByb2Nlc3NDYW52YXNSR0JBKGNhbnZhcywgdG9wWCwgdG9wWSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKSB7XG4gIGlmIChpc05hTihyYWRpdXMpIHx8IHJhZGl1cyA8IDEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByYWRpdXMgfD0gMDtcbiAgdmFyIGltYWdlRGF0YSA9IGdldEltYWdlRGF0YUZyb21DYW52YXMoY2FudmFzLCB0b3BYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0KTtcbiAgaW1hZ2VEYXRhID0gcHJvY2Vzc0ltYWdlRGF0YVJHQkEoaW1hZ2VEYXRhLCB0b3BYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpO1xuICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCB0b3BYLCB0b3BZKTtcbn1cbi8qKlxuICogQHBhcmFtIHtJbWFnZURhdGF9IGltYWdlRGF0YVxuICogQHBhcmFtIHtJbnRlZ2VyfSB0b3BYXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHRvcFlcbiAqIEBwYXJhbSB7SW50ZWdlcn0gd2lkdGhcbiAqIEBwYXJhbSB7SW50ZWdlcn0gaGVpZ2h0XG4gKiBAcGFyYW0ge0Zsb2F0fSByYWRpdXNcbiAqIEByZXR1cm5zIHtJbWFnZURhdGF9XG4gKi9cblxuXG5mdW5jdGlvbiBwcm9jZXNzSW1hZ2VEYXRhUkdCQShpbWFnZURhdGEsIHRvcFgsIHRvcFksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cykge1xuICB2YXIgcGl4ZWxzID0gaW1hZ2VEYXRhLmRhdGE7XG4gIHZhciBkaXYgPSAyICogcmFkaXVzICsgMTsgLy8gY29uc3QgdzQgPSB3aWR0aCA8PCAyO1xuXG4gIHZhciB3aWR0aE1pbnVzMSA9IHdpZHRoIC0gMTtcbiAgdmFyIGhlaWdodE1pbnVzMSA9IGhlaWdodCAtIDE7XG4gIHZhciByYWRpdXNQbHVzMSA9IHJhZGl1cyArIDE7XG4gIHZhciBzdW1GYWN0b3IgPSByYWRpdXNQbHVzMSAqIChyYWRpdXNQbHVzMSArIDEpIC8gMjtcbiAgdmFyIHN0YWNrU3RhcnQgPSBuZXcgQmx1clN0YWNrKCk7XG4gIHZhciBzdGFjayA9IHN0YWNrU3RhcnQ7XG4gIHZhciBzdGFja0VuZDtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGRpdjsgaSsrKSB7XG4gICAgc3RhY2sgPSBzdGFjay5uZXh0ID0gbmV3IEJsdXJTdGFjaygpO1xuXG4gICAgaWYgKGkgPT09IHJhZGl1c1BsdXMxKSB7XG4gICAgICBzdGFja0VuZCA9IHN0YWNrO1xuICAgIH1cbiAgfVxuXG4gIHN0YWNrLm5leHQgPSBzdGFja1N0YXJ0O1xuICB2YXIgc3RhY2tJbiA9IG51bGwsXG4gICAgICBzdGFja091dCA9IG51bGwsXG4gICAgICB5dyA9IDAsXG4gICAgICB5aSA9IDA7XG4gIHZhciBtdWxTdW0gPSBtdWxUYWJsZVtyYWRpdXNdO1xuICB2YXIgc2hnU3VtID0gc2hnVGFibGVbcmFkaXVzXTtcblxuICBmb3IgKHZhciB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgc3RhY2sgPSBzdGFja1N0YXJ0O1xuICAgIHZhciBwciA9IHBpeGVsc1t5aV0sXG4gICAgICAgIHBnID0gcGl4ZWxzW3lpICsgMV0sXG4gICAgICAgIHBiID0gcGl4ZWxzW3lpICsgMl0sXG4gICAgICAgIHBhID0gcGl4ZWxzW3lpICsgM107XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgcmFkaXVzUGx1czE7IF9pKyspIHtcbiAgICAgIHN0YWNrLnIgPSBwcjtcbiAgICAgIHN0YWNrLmcgPSBwZztcbiAgICAgIHN0YWNrLmIgPSBwYjtcbiAgICAgIHN0YWNrLmEgPSBwYTtcbiAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICB9XG5cbiAgICB2YXIgckluU3VtID0gMCxcbiAgICAgICAgZ0luU3VtID0gMCxcbiAgICAgICAgYkluU3VtID0gMCxcbiAgICAgICAgYUluU3VtID0gMCxcbiAgICAgICAgck91dFN1bSA9IHJhZGl1c1BsdXMxICogcHIsXG4gICAgICAgIGdPdXRTdW0gPSByYWRpdXNQbHVzMSAqIHBnLFxuICAgICAgICBiT3V0U3VtID0gcmFkaXVzUGx1czEgKiBwYixcbiAgICAgICAgYU91dFN1bSA9IHJhZGl1c1BsdXMxICogcGEsXG4gICAgICAgIHJTdW0gPSBzdW1GYWN0b3IgKiBwcixcbiAgICAgICAgZ1N1bSA9IHN1bUZhY3RvciAqIHBnLFxuICAgICAgICBiU3VtID0gc3VtRmFjdG9yICogcGIsXG4gICAgICAgIGFTdW0gPSBzdW1GYWN0b3IgKiBwYTtcblxuICAgIGZvciAodmFyIF9pMiA9IDE7IF9pMiA8IHJhZGl1c1BsdXMxOyBfaTIrKykge1xuICAgICAgdmFyIHAgPSB5aSArICgod2lkdGhNaW51czEgPCBfaTIgPyB3aWR0aE1pbnVzMSA6IF9pMikgPDwgMik7XG4gICAgICB2YXIgciA9IHBpeGVsc1twXSxcbiAgICAgICAgICBnID0gcGl4ZWxzW3AgKyAxXSxcbiAgICAgICAgICBiID0gcGl4ZWxzW3AgKyAyXSxcbiAgICAgICAgICBhID0gcGl4ZWxzW3AgKyAzXTtcbiAgICAgIHZhciByYnMgPSByYWRpdXNQbHVzMSAtIF9pMjtcbiAgICAgIHJTdW0gKz0gKHN0YWNrLnIgPSByKSAqIHJicztcbiAgICAgIGdTdW0gKz0gKHN0YWNrLmcgPSBnKSAqIHJicztcbiAgICAgIGJTdW0gKz0gKHN0YWNrLmIgPSBiKSAqIHJicztcbiAgICAgIGFTdW0gKz0gKHN0YWNrLmEgPSBhKSAqIHJicztcbiAgICAgIHJJblN1bSArPSByO1xuICAgICAgZ0luU3VtICs9IGc7XG4gICAgICBiSW5TdW0gKz0gYjtcbiAgICAgIGFJblN1bSArPSBhO1xuICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgIH1cblxuICAgIHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xuICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG5cbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgIHZhciBwYUluaXRpYWwgPSBhU3VtICogbXVsU3VtID4+IHNoZ1N1bTtcbiAgICAgIHBpeGVsc1t5aSArIDNdID0gcGFJbml0aWFsO1xuXG4gICAgICBpZiAocGFJbml0aWFsICE9PSAwKSB7XG4gICAgICAgIHZhciBfYTIgPSAyNTUgLyBwYUluaXRpYWw7XG5cbiAgICAgICAgcGl4ZWxzW3lpXSA9IChyU3VtICogbXVsU3VtID4+IHNoZ1N1bSkgKiBfYTI7XG4gICAgICAgIHBpeGVsc1t5aSArIDFdID0gKGdTdW0gKiBtdWxTdW0gPj4gc2hnU3VtKSAqIF9hMjtcbiAgICAgICAgcGl4ZWxzW3lpICsgMl0gPSAoYlN1bSAqIG11bFN1bSA+PiBzaGdTdW0pICogX2EyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGl4ZWxzW3lpXSA9IHBpeGVsc1t5aSArIDFdID0gcGl4ZWxzW3lpICsgMl0gPSAwO1xuICAgICAgfVxuXG4gICAgICByU3VtIC09IHJPdXRTdW07XG4gICAgICBnU3VtIC09IGdPdXRTdW07XG4gICAgICBiU3VtIC09IGJPdXRTdW07XG4gICAgICBhU3VtIC09IGFPdXRTdW07XG4gICAgICByT3V0U3VtIC09IHN0YWNrSW4ucjtcbiAgICAgIGdPdXRTdW0gLT0gc3RhY2tJbi5nO1xuICAgICAgYk91dFN1bSAtPSBzdGFja0luLmI7XG4gICAgICBhT3V0U3VtIC09IHN0YWNrSW4uYTtcblxuICAgICAgdmFyIF9wID0geCArIHJhZGl1cyArIDE7XG5cbiAgICAgIF9wID0geXcgKyAoX3AgPCB3aWR0aE1pbnVzMSA/IF9wIDogd2lkdGhNaW51czEpIDw8IDI7XG4gICAgICBySW5TdW0gKz0gc3RhY2tJbi5yID0gcGl4ZWxzW19wXTtcbiAgICAgIGdJblN1bSArPSBzdGFja0luLmcgPSBwaXhlbHNbX3AgKyAxXTtcbiAgICAgIGJJblN1bSArPSBzdGFja0luLmIgPSBwaXhlbHNbX3AgKyAyXTtcbiAgICAgIGFJblN1bSArPSBzdGFja0luLmEgPSBwaXhlbHNbX3AgKyAzXTtcbiAgICAgIHJTdW0gKz0gckluU3VtO1xuICAgICAgZ1N1bSArPSBnSW5TdW07XG4gICAgICBiU3VtICs9IGJJblN1bTtcbiAgICAgIGFTdW0gKz0gYUluU3VtO1xuICAgICAgc3RhY2tJbiA9IHN0YWNrSW4ubmV4dDtcbiAgICAgIHZhciBfc3RhY2tPdXQgPSBzdGFja091dCxcbiAgICAgICAgICBfciA9IF9zdGFja091dC5yLFxuICAgICAgICAgIF9nID0gX3N0YWNrT3V0LmcsXG4gICAgICAgICAgX2IgPSBfc3RhY2tPdXQuYixcbiAgICAgICAgICBfYSA9IF9zdGFja091dC5hO1xuICAgICAgck91dFN1bSArPSBfcjtcbiAgICAgIGdPdXRTdW0gKz0gX2c7XG4gICAgICBiT3V0U3VtICs9IF9iO1xuICAgICAgYU91dFN1bSArPSBfYTtcbiAgICAgIHJJblN1bSAtPSBfcjtcbiAgICAgIGdJblN1bSAtPSBfZztcbiAgICAgIGJJblN1bSAtPSBfYjtcbiAgICAgIGFJblN1bSAtPSBfYTtcbiAgICAgIHN0YWNrT3V0ID0gc3RhY2tPdXQubmV4dDtcbiAgICAgIHlpICs9IDQ7XG4gICAgfVxuXG4gICAgeXcgKz0gd2lkdGg7XG4gIH1cblxuICBmb3IgKHZhciBfeCA9IDA7IF94IDwgd2lkdGg7IF94KyspIHtcbiAgICB5aSA9IF94IDw8IDI7XG5cbiAgICB2YXIgX3ByID0gcGl4ZWxzW3lpXSxcbiAgICAgICAgX3BnID0gcGl4ZWxzW3lpICsgMV0sXG4gICAgICAgIF9wYiA9IHBpeGVsc1t5aSArIDJdLFxuICAgICAgICBfcGEgPSBwaXhlbHNbeWkgKyAzXSxcbiAgICAgICAgX3JPdXRTdW0gPSByYWRpdXNQbHVzMSAqIF9wcixcbiAgICAgICAgX2dPdXRTdW0gPSByYWRpdXNQbHVzMSAqIF9wZyxcbiAgICAgICAgX2JPdXRTdW0gPSByYWRpdXNQbHVzMSAqIF9wYixcbiAgICAgICAgX2FPdXRTdW0gPSByYWRpdXNQbHVzMSAqIF9wYSxcbiAgICAgICAgX3JTdW0gPSBzdW1GYWN0b3IgKiBfcHIsXG4gICAgICAgIF9nU3VtID0gc3VtRmFjdG9yICogX3BnLFxuICAgICAgICBfYlN1bSA9IHN1bUZhY3RvciAqIF9wYixcbiAgICAgICAgX2FTdW0gPSBzdW1GYWN0b3IgKiBfcGE7XG5cbiAgICBzdGFjayA9IHN0YWNrU3RhcnQ7XG5cbiAgICBmb3IgKHZhciBfaTMgPSAwOyBfaTMgPCByYWRpdXNQbHVzMTsgX2kzKyspIHtcbiAgICAgIHN0YWNrLnIgPSBfcHI7XG4gICAgICBzdGFjay5nID0gX3BnO1xuICAgICAgc3RhY2suYiA9IF9wYjtcbiAgICAgIHN0YWNrLmEgPSBfcGE7XG4gICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgfVxuXG4gICAgdmFyIHlwID0gd2lkdGg7XG4gICAgdmFyIF9nSW5TdW0gPSAwLFxuICAgICAgICBfYkluU3VtID0gMCxcbiAgICAgICAgX2FJblN1bSA9IDAsXG4gICAgICAgIF9ySW5TdW0gPSAwO1xuXG4gICAgZm9yICh2YXIgX2k0ID0gMTsgX2k0IDw9IHJhZGl1czsgX2k0KyspIHtcbiAgICAgIHlpID0geXAgKyBfeCA8PCAyO1xuXG4gICAgICB2YXIgX3JicyA9IHJhZGl1c1BsdXMxIC0gX2k0O1xuXG4gICAgICBfclN1bSArPSAoc3RhY2suciA9IF9wciA9IHBpeGVsc1t5aV0pICogX3JicztcbiAgICAgIF9nU3VtICs9IChzdGFjay5nID0gX3BnID0gcGl4ZWxzW3lpICsgMV0pICogX3JicztcbiAgICAgIF9iU3VtICs9IChzdGFjay5iID0gX3BiID0gcGl4ZWxzW3lpICsgMl0pICogX3JicztcbiAgICAgIF9hU3VtICs9IChzdGFjay5hID0gX3BhID0gcGl4ZWxzW3lpICsgM10pICogX3JicztcbiAgICAgIF9ySW5TdW0gKz0gX3ByO1xuICAgICAgX2dJblN1bSArPSBfcGc7XG4gICAgICBfYkluU3VtICs9IF9wYjtcbiAgICAgIF9hSW5TdW0gKz0gX3BhO1xuICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuXG4gICAgICBpZiAoX2k0IDwgaGVpZ2h0TWludXMxKSB7XG4gICAgICAgIHlwICs9IHdpZHRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHlpID0gX3g7XG4gICAgc3RhY2tJbiA9IHN0YWNrU3RhcnQ7XG4gICAgc3RhY2tPdXQgPSBzdGFja0VuZDtcblxuICAgIGZvciAodmFyIF95ID0gMDsgX3kgPCBoZWlnaHQ7IF95KyspIHtcbiAgICAgIHZhciBfcDIgPSB5aSA8PCAyO1xuXG4gICAgICBwaXhlbHNbX3AyICsgM10gPSBfcGEgPSBfYVN1bSAqIG11bFN1bSA+PiBzaGdTdW07XG5cbiAgICAgIGlmIChfcGEgPiAwKSB7XG4gICAgICAgIF9wYSA9IDI1NSAvIF9wYTtcbiAgICAgICAgcGl4ZWxzW19wMl0gPSAoX3JTdW0gKiBtdWxTdW0gPj4gc2hnU3VtKSAqIF9wYTtcbiAgICAgICAgcGl4ZWxzW19wMiArIDFdID0gKF9nU3VtICogbXVsU3VtID4+IHNoZ1N1bSkgKiBfcGE7XG4gICAgICAgIHBpeGVsc1tfcDIgKyAyXSA9IChfYlN1bSAqIG11bFN1bSA+PiBzaGdTdW0pICogX3BhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGl4ZWxzW19wMl0gPSBwaXhlbHNbX3AyICsgMV0gPSBwaXhlbHNbX3AyICsgMl0gPSAwO1xuICAgICAgfVxuXG4gICAgICBfclN1bSAtPSBfck91dFN1bTtcbiAgICAgIF9nU3VtIC09IF9nT3V0U3VtO1xuICAgICAgX2JTdW0gLT0gX2JPdXRTdW07XG4gICAgICBfYVN1bSAtPSBfYU91dFN1bTtcbiAgICAgIF9yT3V0U3VtIC09IHN0YWNrSW4ucjtcbiAgICAgIF9nT3V0U3VtIC09IHN0YWNrSW4uZztcbiAgICAgIF9iT3V0U3VtIC09IHN0YWNrSW4uYjtcbiAgICAgIF9hT3V0U3VtIC09IHN0YWNrSW4uYTtcbiAgICAgIF9wMiA9IF94ICsgKChfcDIgPSBfeSArIHJhZGl1c1BsdXMxKSA8IGhlaWdodE1pbnVzMSA/IF9wMiA6IGhlaWdodE1pbnVzMSkgKiB3aWR0aCA8PCAyO1xuICAgICAgX3JTdW0gKz0gX3JJblN1bSArPSBzdGFja0luLnIgPSBwaXhlbHNbX3AyXTtcbiAgICAgIF9nU3VtICs9IF9nSW5TdW0gKz0gc3RhY2tJbi5nID0gcGl4ZWxzW19wMiArIDFdO1xuICAgICAgX2JTdW0gKz0gX2JJblN1bSArPSBzdGFja0luLmIgPSBwaXhlbHNbX3AyICsgMl07XG4gICAgICBfYVN1bSArPSBfYUluU3VtICs9IHN0YWNrSW4uYSA9IHBpeGVsc1tfcDIgKyAzXTtcbiAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG4gICAgICBfck91dFN1bSArPSBfcHIgPSBzdGFja091dC5yO1xuICAgICAgX2dPdXRTdW0gKz0gX3BnID0gc3RhY2tPdXQuZztcbiAgICAgIF9iT3V0U3VtICs9IF9wYiA9IHN0YWNrT3V0LmI7XG4gICAgICBfYU91dFN1bSArPSBfcGEgPSBzdGFja091dC5hO1xuICAgICAgX3JJblN1bSAtPSBfcHI7XG4gICAgICBfZ0luU3VtIC09IF9wZztcbiAgICAgIF9iSW5TdW0gLT0gX3BiO1xuICAgICAgX2FJblN1bSAtPSBfcGE7XG4gICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG4gICAgICB5aSArPSB3aWR0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW1hZ2VEYXRhO1xufVxuLyoqXG4gKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXNcbiAqIEBwYXJhbSB7SW50ZWdlcn0gdG9wWFxuICogQHBhcmFtIHtJbnRlZ2VyfSB0b3BZXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGhlaWdodFxuICogQHBhcmFtIHtGbG9hdH0gcmFkaXVzXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICovXG5cblxuZnVuY3Rpb24gcHJvY2Vzc0NhbnZhc1JHQihjYW52YXMsIHRvcFgsIHRvcFksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cykge1xuICBpZiAoaXNOYU4ocmFkaXVzKSB8fCByYWRpdXMgPCAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmFkaXVzIHw9IDA7XG4gIHZhciBpbWFnZURhdGEgPSBnZXRJbWFnZURhdGFGcm9tQ2FudmFzKGNhbnZhcywgdG9wWCwgdG9wWSwgd2lkdGgsIGhlaWdodCk7XG4gIGltYWdlRGF0YSA9IHByb2Nlc3NJbWFnZURhdGFSR0IoaW1hZ2VEYXRhLCB0b3BYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpO1xuICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCB0b3BYLCB0b3BZKTtcbn1cbi8qKlxuICogQHBhcmFtIHtJbWFnZURhdGF9IGltYWdlRGF0YVxuICogQHBhcmFtIHtJbnRlZ2VyfSB0b3BYXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHRvcFlcbiAqIEBwYXJhbSB7SW50ZWdlcn0gd2lkdGhcbiAqIEBwYXJhbSB7SW50ZWdlcn0gaGVpZ2h0XG4gKiBAcGFyYW0ge0Zsb2F0fSByYWRpdXNcbiAqIEByZXR1cm5zIHtJbWFnZURhdGF9XG4gKi9cblxuXG5mdW5jdGlvbiBwcm9jZXNzSW1hZ2VEYXRhUkdCKGltYWdlRGF0YSwgdG9wWCwgdG9wWSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKSB7XG4gIHZhciBwaXhlbHMgPSBpbWFnZURhdGEuZGF0YTtcbiAgdmFyIGRpdiA9IDIgKiByYWRpdXMgKyAxOyAvLyBjb25zdCB3NCA9IHdpZHRoIDw8IDI7XG5cbiAgdmFyIHdpZHRoTWludXMxID0gd2lkdGggLSAxO1xuICB2YXIgaGVpZ2h0TWludXMxID0gaGVpZ2h0IC0gMTtcbiAgdmFyIHJhZGl1c1BsdXMxID0gcmFkaXVzICsgMTtcbiAgdmFyIHN1bUZhY3RvciA9IHJhZGl1c1BsdXMxICogKHJhZGl1c1BsdXMxICsgMSkgLyAyO1xuICB2YXIgc3RhY2tTdGFydCA9IG5ldyBCbHVyU3RhY2soKTtcbiAgdmFyIHN0YWNrID0gc3RhY2tTdGFydDtcbiAgdmFyIHN0YWNrRW5kO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgZGl2OyBpKyspIHtcbiAgICBzdGFjayA9IHN0YWNrLm5leHQgPSBuZXcgQmx1clN0YWNrKCk7XG5cbiAgICBpZiAoaSA9PT0gcmFkaXVzUGx1czEpIHtcbiAgICAgIHN0YWNrRW5kID0gc3RhY2s7XG4gICAgfVxuICB9XG5cbiAgc3RhY2submV4dCA9IHN0YWNrU3RhcnQ7XG4gIHZhciBzdGFja0luID0gbnVsbDtcbiAgdmFyIHN0YWNrT3V0ID0gbnVsbDtcbiAgdmFyIG11bFN1bSA9IG11bFRhYmxlW3JhZGl1c107XG4gIHZhciBzaGdTdW0gPSBzaGdUYWJsZVtyYWRpdXNdO1xuICB2YXIgcCwgcmJzO1xuICB2YXIgeXcgPSAwLFxuICAgICAgeWkgPSAwO1xuXG4gIGZvciAodmFyIHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICB2YXIgcHIgPSBwaXhlbHNbeWldLFxuICAgICAgICBwZyA9IHBpeGVsc1t5aSArIDFdLFxuICAgICAgICBwYiA9IHBpeGVsc1t5aSArIDJdLFxuICAgICAgICByT3V0U3VtID0gcmFkaXVzUGx1czEgKiBwcixcbiAgICAgICAgZ091dFN1bSA9IHJhZGl1c1BsdXMxICogcGcsXG4gICAgICAgIGJPdXRTdW0gPSByYWRpdXNQbHVzMSAqIHBiLFxuICAgICAgICByU3VtID0gc3VtRmFjdG9yICogcHIsXG4gICAgICAgIGdTdW0gPSBzdW1GYWN0b3IgKiBwZyxcbiAgICAgICAgYlN1bSA9IHN1bUZhY3RvciAqIHBiO1xuICAgIHN0YWNrID0gc3RhY2tTdGFydDtcblxuICAgIGZvciAodmFyIF9pNSA9IDA7IF9pNSA8IHJhZGl1c1BsdXMxOyBfaTUrKykge1xuICAgICAgc3RhY2suciA9IHByO1xuICAgICAgc3RhY2suZyA9IHBnO1xuICAgICAgc3RhY2suYiA9IHBiO1xuICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgIH1cblxuICAgIHZhciBySW5TdW0gPSAwLFxuICAgICAgICBnSW5TdW0gPSAwLFxuICAgICAgICBiSW5TdW0gPSAwO1xuXG4gICAgZm9yICh2YXIgX2k2ID0gMTsgX2k2IDwgcmFkaXVzUGx1czE7IF9pNisrKSB7XG4gICAgICBwID0geWkgKyAoKHdpZHRoTWludXMxIDwgX2k2ID8gd2lkdGhNaW51czEgOiBfaTYpIDw8IDIpO1xuICAgICAgclN1bSArPSAoc3RhY2suciA9IHByID0gcGl4ZWxzW3BdKSAqIChyYnMgPSByYWRpdXNQbHVzMSAtIF9pNik7XG4gICAgICBnU3VtICs9IChzdGFjay5nID0gcGcgPSBwaXhlbHNbcCArIDFdKSAqIHJicztcbiAgICAgIGJTdW0gKz0gKHN0YWNrLmIgPSBwYiA9IHBpeGVsc1twICsgMl0pICogcmJzO1xuICAgICAgckluU3VtICs9IHByO1xuICAgICAgZ0luU3VtICs9IHBnO1xuICAgICAgYkluU3VtICs9IHBiO1xuICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgIH1cblxuICAgIHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xuICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG5cbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgIHBpeGVsc1t5aV0gPSByU3VtICogbXVsU3VtID4+IHNoZ1N1bTtcbiAgICAgIHBpeGVsc1t5aSArIDFdID0gZ1N1bSAqIG11bFN1bSA+PiBzaGdTdW07XG4gICAgICBwaXhlbHNbeWkgKyAyXSA9IGJTdW0gKiBtdWxTdW0gPj4gc2hnU3VtO1xuICAgICAgclN1bSAtPSByT3V0U3VtO1xuICAgICAgZ1N1bSAtPSBnT3V0U3VtO1xuICAgICAgYlN1bSAtPSBiT3V0U3VtO1xuICAgICAgck91dFN1bSAtPSBzdGFja0luLnI7XG4gICAgICBnT3V0U3VtIC09IHN0YWNrSW4uZztcbiAgICAgIGJPdXRTdW0gLT0gc3RhY2tJbi5iO1xuICAgICAgcCA9IHl3ICsgKChwID0geCArIHJhZGl1cyArIDEpIDwgd2lkdGhNaW51czEgPyBwIDogd2lkdGhNaW51czEpIDw8IDI7XG4gICAgICBySW5TdW0gKz0gc3RhY2tJbi5yID0gcGl4ZWxzW3BdO1xuICAgICAgZ0luU3VtICs9IHN0YWNrSW4uZyA9IHBpeGVsc1twICsgMV07XG4gICAgICBiSW5TdW0gKz0gc3RhY2tJbi5iID0gcGl4ZWxzW3AgKyAyXTtcbiAgICAgIHJTdW0gKz0gckluU3VtO1xuICAgICAgZ1N1bSArPSBnSW5TdW07XG4gICAgICBiU3VtICs9IGJJblN1bTtcbiAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG4gICAgICByT3V0U3VtICs9IHByID0gc3RhY2tPdXQucjtcbiAgICAgIGdPdXRTdW0gKz0gcGcgPSBzdGFja091dC5nO1xuICAgICAgYk91dFN1bSArPSBwYiA9IHN0YWNrT3V0LmI7XG4gICAgICBySW5TdW0gLT0gcHI7XG4gICAgICBnSW5TdW0gLT0gcGc7XG4gICAgICBiSW5TdW0gLT0gcGI7XG4gICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG4gICAgICB5aSArPSA0O1xuICAgIH1cblxuICAgIHl3ICs9IHdpZHRoO1xuICB9XG5cbiAgZm9yICh2YXIgX3gyID0gMDsgX3gyIDwgd2lkdGg7IF94MisrKSB7XG4gICAgeWkgPSBfeDIgPDwgMjtcblxuICAgIHZhciBfcHIyID0gcGl4ZWxzW3lpXSxcbiAgICAgICAgX3BnMiA9IHBpeGVsc1t5aSArIDFdLFxuICAgICAgICBfcGIyID0gcGl4ZWxzW3lpICsgMl0sXG4gICAgICAgIF9yT3V0U3VtMiA9IHJhZGl1c1BsdXMxICogX3ByMixcbiAgICAgICAgX2dPdXRTdW0yID0gcmFkaXVzUGx1czEgKiBfcGcyLFxuICAgICAgICBfYk91dFN1bTIgPSByYWRpdXNQbHVzMSAqIF9wYjIsXG4gICAgICAgIF9yU3VtMiA9IHN1bUZhY3RvciAqIF9wcjIsXG4gICAgICAgIF9nU3VtMiA9IHN1bUZhY3RvciAqIF9wZzIsXG4gICAgICAgIF9iU3VtMiA9IHN1bUZhY3RvciAqIF9wYjI7XG5cbiAgICBzdGFjayA9IHN0YWNrU3RhcnQ7XG5cbiAgICBmb3IgKHZhciBfaTcgPSAwOyBfaTcgPCByYWRpdXNQbHVzMTsgX2k3KyspIHtcbiAgICAgIHN0YWNrLnIgPSBfcHIyO1xuICAgICAgc3RhY2suZyA9IF9wZzI7XG4gICAgICBzdGFjay5iID0gX3BiMjtcbiAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICB9XG5cbiAgICB2YXIgX3JJblN1bTIgPSAwLFxuICAgICAgICBfZ0luU3VtMiA9IDAsXG4gICAgICAgIF9iSW5TdW0yID0gMDtcblxuICAgIGZvciAodmFyIF9pOCA9IDEsIHlwID0gd2lkdGg7IF9pOCA8PSByYWRpdXM7IF9pOCsrKSB7XG4gICAgICB5aSA9IHlwICsgX3gyIDw8IDI7XG4gICAgICBfclN1bTIgKz0gKHN0YWNrLnIgPSBfcHIyID0gcGl4ZWxzW3lpXSkgKiAocmJzID0gcmFkaXVzUGx1czEgLSBfaTgpO1xuICAgICAgX2dTdW0yICs9IChzdGFjay5nID0gX3BnMiA9IHBpeGVsc1t5aSArIDFdKSAqIHJicztcbiAgICAgIF9iU3VtMiArPSAoc3RhY2suYiA9IF9wYjIgPSBwaXhlbHNbeWkgKyAyXSkgKiByYnM7XG4gICAgICBfckluU3VtMiArPSBfcHIyO1xuICAgICAgX2dJblN1bTIgKz0gX3BnMjtcbiAgICAgIF9iSW5TdW0yICs9IF9wYjI7XG4gICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG5cbiAgICAgIGlmIChfaTggPCBoZWlnaHRNaW51czEpIHtcbiAgICAgICAgeXAgKz0gd2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgeWkgPSBfeDI7XG4gICAgc3RhY2tJbiA9IHN0YWNrU3RhcnQ7XG4gICAgc3RhY2tPdXQgPSBzdGFja0VuZDtcblxuICAgIGZvciAodmFyIF95MiA9IDA7IF95MiA8IGhlaWdodDsgX3kyKyspIHtcbiAgICAgIHAgPSB5aSA8PCAyO1xuICAgICAgcGl4ZWxzW3BdID0gX3JTdW0yICogbXVsU3VtID4+IHNoZ1N1bTtcbiAgICAgIHBpeGVsc1twICsgMV0gPSBfZ1N1bTIgKiBtdWxTdW0gPj4gc2hnU3VtO1xuICAgICAgcGl4ZWxzW3AgKyAyXSA9IF9iU3VtMiAqIG11bFN1bSA+PiBzaGdTdW07XG4gICAgICBfclN1bTIgLT0gX3JPdXRTdW0yO1xuICAgICAgX2dTdW0yIC09IF9nT3V0U3VtMjtcbiAgICAgIF9iU3VtMiAtPSBfYk91dFN1bTI7XG4gICAgICBfck91dFN1bTIgLT0gc3RhY2tJbi5yO1xuICAgICAgX2dPdXRTdW0yIC09IHN0YWNrSW4uZztcbiAgICAgIF9iT3V0U3VtMiAtPSBzdGFja0luLmI7XG4gICAgICBwID0gX3gyICsgKChwID0gX3kyICsgcmFkaXVzUGx1czEpIDwgaGVpZ2h0TWludXMxID8gcCA6IGhlaWdodE1pbnVzMSkgKiB3aWR0aCA8PCAyO1xuICAgICAgX3JTdW0yICs9IF9ySW5TdW0yICs9IHN0YWNrSW4uciA9IHBpeGVsc1twXTtcbiAgICAgIF9nU3VtMiArPSBfZ0luU3VtMiArPSBzdGFja0luLmcgPSBwaXhlbHNbcCArIDFdO1xuICAgICAgX2JTdW0yICs9IF9iSW5TdW0yICs9IHN0YWNrSW4uYiA9IHBpeGVsc1twICsgMl07XG4gICAgICBzdGFja0luID0gc3RhY2tJbi5uZXh0O1xuICAgICAgX3JPdXRTdW0yICs9IF9wcjIgPSBzdGFja091dC5yO1xuICAgICAgX2dPdXRTdW0yICs9IF9wZzIgPSBzdGFja091dC5nO1xuICAgICAgX2JPdXRTdW0yICs9IF9wYjIgPSBzdGFja091dC5iO1xuICAgICAgX3JJblN1bTIgLT0gX3ByMjtcbiAgICAgIF9nSW5TdW0yIC09IF9wZzI7XG4gICAgICBfYkluU3VtMiAtPSBfcGIyO1xuICAgICAgc3RhY2tPdXQgPSBzdGFja091dC5uZXh0O1xuICAgICAgeWkgKz0gd2lkdGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGltYWdlRGF0YTtcbn1cbi8qKlxuICpcbiAqL1xuXG5cbnZhciBCbHVyU3RhY2sgPVxuLyoqXG4gKiBTZXQgcHJvcGVydGllcy5cbiAqL1xuZnVuY3Rpb24gQmx1clN0YWNrKCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmx1clN0YWNrKTtcblxuICB0aGlzLnIgPSAwO1xuICB0aGlzLmcgPSAwO1xuICB0aGlzLmIgPSAwO1xuICB0aGlzLmEgPSAwO1xuICB0aGlzLm5leHQgPSBudWxsO1xufTtcblxuZXhwb3J0IHsgQmx1clN0YWNrLCBwcm9jZXNzQ2FudmFzUkdCIGFzIGNhbnZhc1JHQiwgcHJvY2Vzc0NhbnZhc1JHQkEgYXMgY2FudmFzUkdCQSwgcHJvY2Vzc0ltYWdlIGFzIGltYWdlLCBwcm9jZXNzSW1hZ2VEYXRhUkdCIGFzIGltYWdlRGF0YVJHQiwgcHJvY2Vzc0ltYWdlRGF0YVJHQkEgYXMgaW1hZ2VEYXRhUkdCQSB9O1xuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvZXMucHJvbWlzZS5qcyc7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yJztcbmltcG9ydCAnY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyc7XG5pbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcucmVwbGFjZS5qcyc7XG5pbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc3RhcnRzLXdpdGguanMnO1xuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3IuanMnO1xuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkucmVkdWNlLmpzJztcbmltcG9ydCAnY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5lbmRzLXdpdGguanMnO1xuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNwbGl0LmpzJztcbmltcG9ydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSAncmFmJztcbmltcG9ydCAnY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy50cmltLmpzJztcbmltcG9ydCBSR0JDb2xvciBmcm9tICdyZ2Jjb2xvcic7XG5pbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaW5jbHVkZXMuanMnO1xuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5kZXgtb2YuanMnO1xuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkucmV2ZXJzZS5qcyc7XG5pbXBvcnQgeyBTVkdQYXRoRGF0YSB9IGZyb20gJ3N2Zy1wYXRoZGF0YSc7XG5pbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAudG8tc3RyaW5nLmpzJztcbmltcG9ydCB7IGNhbnZhc1JHQkEgfSBmcm9tICdzdGFja2JsdXItY2FudmFzJztcblxuLyoqXHJcbiAqIE9wdGlvbnMgcHJlc2V0IGZvciBgT2Zmc2NyZWVuQ2FudmFzYC5cclxuICogQHBhcmFtIGNvbmZpZyAtIFByZXNldCByZXF1aXJlbWVudHMuXHJcbiAqIEBwYXJhbSBjb25maWcuRE9NUGFyc2VyIC0gWE1ML0hUTUwgcGFyc2VyIGZyb20gc3RyaW5nIGludG8gRE9NIERvY3VtZW50LlxyXG4gKiBAcmV0dXJucyBQcmVzZXQgb2JqZWN0LlxyXG4gKi9cbmZ1bmN0aW9uIG9mZnNjcmVlbigpIHtcbiAgdmFyIHtcbiAgICBET01QYXJzZXI6IERPTVBhcnNlckZhbGxiYWNrXG4gIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgcHJlc2V0ID0ge1xuICAgIHdpbmRvdzogbnVsbCxcbiAgICBpZ25vcmVBbmltYXRpb246IHRydWUsXG4gICAgaWdub3JlTW91c2U6IHRydWUsXG4gICAgRE9NUGFyc2VyOiBET01QYXJzZXJGYWxsYmFjayxcblxuICAgIGNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcbiAgICB9LFxuXG4gICAgY3JlYXRlSW1hZ2UodXJsKSB7XG4gICAgICByZXR1cm4gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0geWllbGQgZmV0Y2godXJsKTtcbiAgICAgICAgdmFyIGJsb2IgPSB5aWVsZCByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgIHZhciBpbWcgPSB5aWVsZCBjcmVhdGVJbWFnZUJpdG1hcChibG9iKTtcbiAgICAgICAgcmV0dXJuIGltZztcbiAgICAgIH0pKCk7XG4gICAgfVxuXG4gIH07XG5cbiAgaWYgKHR5cGVvZiBET01QYXJzZXIgIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBET01QYXJzZXJGYWxsYmFjayA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHByZXNldCwgJ0RPTVBhcnNlcicpO1xuICB9XG5cbiAgcmV0dXJuIHByZXNldDtcbn1cblxuLyoqXHJcbiAqIE9wdGlvbnMgcHJlc2V0IGZvciBgbm9kZS1jYW52YXNgLlxyXG4gKiBAcGFyYW0gY29uZmlnIC0gUHJlc2V0IHJlcXVpcmVtZW50cy5cclxuICogQHBhcmFtIGNvbmZpZy5ET01QYXJzZXIgLSBYTUwvSFRNTCBwYXJzZXIgZnJvbSBzdHJpbmcgaW50byBET00gRG9jdW1lbnQuXHJcbiAqIEBwYXJhbSBjb25maWcuY2FudmFzIC0gYG5vZGUtY2FudmFzYCBleHBvcnRzLlxyXG4gKiBAcGFyYW0gY29uZmlnLmZldGNoIC0gV0hBVFdHLWNvbXBhdGlibGUgYGZldGNoYCBmdW5jdGlvbi5cclxuICogQHJldHVybnMgUHJlc2V0IG9iamVjdC5cclxuICovXG5mdW5jdGlvbiBub2RlKF9yZWYpIHtcbiAgdmFyIHtcbiAgICBET01QYXJzZXIsXG4gICAgY2FudmFzLFxuICAgIGZldGNoXG4gIH0gPSBfcmVmO1xuICByZXR1cm4ge1xuICAgIHdpbmRvdzogbnVsbCxcbiAgICBpZ25vcmVBbmltYXRpb246IHRydWUsXG4gICAgaWdub3JlTW91c2U6IHRydWUsXG4gICAgRE9NUGFyc2VyLFxuICAgIGZldGNoLFxuICAgIGNyZWF0ZUNhbnZhczogY2FudmFzLmNyZWF0ZUNhbnZhcyxcbiAgICBjcmVhdGVJbWFnZTogY2FudmFzLmxvYWRJbWFnZVxuICB9O1xufVxuXG52YXIgaW5kZXggPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG5cdF9fcHJvdG9fXzogbnVsbCxcblx0b2Zmc2NyZWVuOiBvZmZzY3JlZW4sXG5cdG5vZGU6IG5vZGVcbn0pO1xuXG4vKipcclxuICogSFRNTC1zYWZlIGNvbXByZXNzIHdoaXRlLXNwYWNlcy5cclxuICogQHBhcmFtIHN0ciAtIFN0cmluZyB0byBjb21wcmVzcy5cclxuICogQHJldHVybnMgU3RyaW5nLlxyXG4gKi9cbmZ1bmN0aW9uIGNvbXByZXNzU3BhY2VzKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyg/IVxcdTMwMDApXFxzKy9nbSwgJyAnKTtcbn1cbi8qKlxyXG4gKiBIVE1MLXNhZmUgbGVmdCB0cmltLlxyXG4gKiBAcGFyYW0gc3RyIC0gU3RyaW5nIHRvIHRyaW0uXHJcbiAqIEByZXR1cm5zIFN0cmluZy5cclxuICovXG5cbmZ1bmN0aW9uIHRyaW1MZWZ0KHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15bXFxuIFxcdF0rLywgJycpO1xufVxuLyoqXHJcbiAqIEhUTUwtc2FmZSByaWdodCB0cmltLlxyXG4gKiBAcGFyYW0gc3RyIC0gU3RyaW5nIHRvIHRyaW0uXHJcbiAqIEByZXR1cm5zIFN0cmluZy5cclxuICovXG5cbmZ1bmN0aW9uIHRyaW1SaWdodChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXFxuIFxcdF0rJC8sICcnKTtcbn1cbi8qKlxyXG4gKiBTdHJpbmcgdG8gbnVtYmVycyBhcnJheS5cclxuICogQHBhcmFtIHN0ciAtIE51bWJlcnMgc3RyaW5nLlxyXG4gKiBAcmV0dXJucyBOdW1iZXJzIGFycmF5LlxyXG4gKi9cblxuZnVuY3Rpb24gdG9OdW1iZXJzKHN0cikge1xuICB2YXIgbWF0Y2hlcyA9IChzdHIgfHwgJycpLm1hdGNoKC8tPyhcXGQrKD86XFwuXFxkKig/OltlRV1bKy1dP1xcZCspPyk/fFxcLlxcZCspKD89XFxEfCQpL2dtKSB8fCBbXTtcbiAgcmV0dXJuIG1hdGNoZXMubWFwKHBhcnNlRmxvYXQpO1xufSAvLyBNaWNyb3NvZnQgRWRnZSBmaXhcblxudmFyIGFsbFVwcGVyY2FzZSA9IC9eW0EtWi1dKyQvO1xuLyoqXHJcbiAqIE5vcm1hbGl6ZSBhdHRyaWJ1dGUgbmFtZS5cclxuICogQHBhcmFtIG5hbWUgLSBBdHRyaWJ1dGUgbmFtZS5cclxuICogQHJldHVybnMgTm9ybWFsaXplZCBhdHRyaWJ1dGUgbmFtZS5cclxuICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJpYnV0ZU5hbWUobmFtZSkge1xuICBpZiAoYWxsVXBwZXJjYXNlLnRlc3QobmFtZSkpIHtcbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgcmV0dXJuIG5hbWU7XG59XG4vKipcclxuICogUGFyc2UgZXh0ZXJuYWwgVVJMLlxyXG4gKiBAcGFyYW0gdXJsIC0gQ1NTIHVybCBzdHJpbmcuXHJcbiAqIEByZXR1cm5zIFBhcnNlZCBVUkwuXHJcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZUV4dGVybmFsVXJsKHVybCkge1xuICAvLyAgICAgICAgICAgICAgICAgICAgICBzaW5nbGUgcXVvdGVzIFsyXVxuICAvLyAgICAgICAgICAgICAgICAgICAgICB2ICAgICAgICAgZG91YmxlIHF1b3RlcyBbM11cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgdiAgICAgICAgIHYgICAgICAgICBubyBxdW90ZXMgWzRdXG4gIC8vICAgICAgICAgICAgICAgICAgICAgIHYgICAgICAgICB2ICAgICAgICAgdlxuICB2YXIgdXJsTWF0Y2ggPSAvdXJsXFwoKCcoW14nXSspJ3xcIihbXlwiXSspXCJ8KFteJ1wiKV0rKSlcXCkvLmV4ZWModXJsKSB8fCBbXTtcbiAgcmV0dXJuIHVybE1hdGNoWzJdIHx8IHVybE1hdGNoWzNdIHx8IHVybE1hdGNoWzRdO1xufVxuLyoqXHJcbiAqIFRyYW5zZm9ybSBmbG9hdHMgdG8gaW50ZWdlcnMgaW4gcmdiIGNvbG9ycy5cclxuICogQHBhcmFtIGNvbG9yIC0gQ29sb3IgdG8gbm9ybWFsaXplLlxyXG4gKiBAcmV0dXJucyBOb3JtYWxpemVkIGNvbG9yLlxyXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplQ29sb3IoY29sb3IpIHtcbiAgaWYgKCFjb2xvci5zdGFydHNXaXRoKCdyZ2InKSkge1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIHZhciByZ2JQYXJ0cyA9IDM7XG4gIHZhciBub3JtYWxpemVkQ29sb3IgPSBjb2xvci5yZXBsYWNlKC9cXGQrKFxcLlxcZCspPy9nLCAobnVtLCBpc0Zsb2F0KSA9PiByZ2JQYXJ0cy0tICYmIGlzRmxvYXQgPyBTdHJpbmcoTWF0aC5yb3VuZChwYXJzZUZsb2F0KG51bSkpKSA6IG51bSk7XG4gIHJldHVybiBub3JtYWxpemVkQ29sb3I7XG59XG5cbi8vIHNsaWdodGx5IG1vZGlmaWVkIHZlcnNpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tlZWdhbnN0cmVldC9zcGVjaWZpY2l0eS9ibG9iL21hc3Rlci9zcGVjaWZpY2l0eS5qc1xudmFyIGF0dHJpYnV0ZVJlZ2V4ID0gLyhcXFtbXlxcXV0rXFxdKS9nO1xudmFyIGlkUmVnZXggPSAvKCNbXlxccys+fi5bOl0rKS9nO1xudmFyIGNsYXNzUmVnZXggPSAvKFxcLlteXFxzKz5+Lls6XSspL2c7XG52YXIgcHNldWRvRWxlbWVudFJlZ2V4ID0gLyg6OlteXFxzKz5+Lls6XSt8OmZpcnN0LWxpbmV8OmZpcnN0LWxldHRlcnw6YmVmb3JlfDphZnRlcikvZ2k7XG52YXIgcHNldWRvQ2xhc3NXaXRoQnJhY2tldHNSZWdleCA9IC8oOltcXHctXStcXChbXildKlxcKSkvZ2k7XG52YXIgcHNldWRvQ2xhc3NSZWdleCA9IC8oOlteXFxzKz5+Lls6XSspL2c7XG52YXIgZWxlbWVudFJlZ2V4ID0gLyhbXlxccys+fi5bOl0rKS9nO1xuXG5mdW5jdGlvbiBmaW5kU2VsZWN0b3JNYXRjaChzZWxlY3RvciwgcmVnZXgpIHtcbiAgdmFyIG1hdGNoZXMgPSByZWdleC5leGVjKHNlbGVjdG9yKTtcblxuICBpZiAoIW1hdGNoZXMpIHtcbiAgICByZXR1cm4gW3NlbGVjdG9yLCAwXTtcbiAgfVxuXG4gIHJldHVybiBbc2VsZWN0b3IucmVwbGFjZShyZWdleCwgJyAnKSwgbWF0Y2hlcy5sZW5ndGhdO1xufVxuLyoqXHJcbiAqIE1lYXN1cmUgc2VsZWN0b3Igc3BlY2lmaWNpdHkuXHJcbiAqIEBwYXJhbSBzZWxlY3RvciAtIFNlbGVjdG9yIHRvIG1lYXN1cmUuXHJcbiAqIEByZXR1cm5zIFNwZWNpZmljaXR5LlxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRTZWxlY3RvclNwZWNpZmljaXR5KHNlbGVjdG9yKSB7XG4gIHZhciBzcGVjaWZpY2l0eSA9IFswLCAwLCAwXTtcbiAgdmFyIGN1cnJlbnRTZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoLzpub3RcXCgoW14pXSopXFwpL2csICcgICAgICQxICcpLnJlcGxhY2UoL3tbXFxzXFxTXSovZ20sICcgJyk7XG4gIHZhciBkZWx0YSA9IDA7XG4gIFtjdXJyZW50U2VsZWN0b3IsIGRlbHRhXSA9IGZpbmRTZWxlY3Rvck1hdGNoKGN1cnJlbnRTZWxlY3RvciwgYXR0cmlidXRlUmVnZXgpO1xuICBzcGVjaWZpY2l0eVsxXSArPSBkZWx0YTtcbiAgW2N1cnJlbnRTZWxlY3RvciwgZGVsdGFdID0gZmluZFNlbGVjdG9yTWF0Y2goY3VycmVudFNlbGVjdG9yLCBpZFJlZ2V4KTtcbiAgc3BlY2lmaWNpdHlbMF0gKz0gZGVsdGE7XG4gIFtjdXJyZW50U2VsZWN0b3IsIGRlbHRhXSA9IGZpbmRTZWxlY3Rvck1hdGNoKGN1cnJlbnRTZWxlY3RvciwgY2xhc3NSZWdleCk7XG4gIHNwZWNpZmljaXR5WzFdICs9IGRlbHRhO1xuICBbY3VycmVudFNlbGVjdG9yLCBkZWx0YV0gPSBmaW5kU2VsZWN0b3JNYXRjaChjdXJyZW50U2VsZWN0b3IsIHBzZXVkb0VsZW1lbnRSZWdleCk7XG4gIHNwZWNpZmljaXR5WzJdICs9IGRlbHRhO1xuICBbY3VycmVudFNlbGVjdG9yLCBkZWx0YV0gPSBmaW5kU2VsZWN0b3JNYXRjaChjdXJyZW50U2VsZWN0b3IsIHBzZXVkb0NsYXNzV2l0aEJyYWNrZXRzUmVnZXgpO1xuICBzcGVjaWZpY2l0eVsxXSArPSBkZWx0YTtcbiAgW2N1cnJlbnRTZWxlY3RvciwgZGVsdGFdID0gZmluZFNlbGVjdG9yTWF0Y2goY3VycmVudFNlbGVjdG9yLCBwc2V1ZG9DbGFzc1JlZ2V4KTtcbiAgc3BlY2lmaWNpdHlbMV0gKz0gZGVsdGE7XG4gIGN1cnJlbnRTZWxlY3RvciA9IGN1cnJlbnRTZWxlY3Rvci5yZXBsYWNlKC9bKlxccys+fl0vZywgJyAnKS5yZXBsYWNlKC9bIy5dL2csICcgJyk7XG4gIFtjdXJyZW50U2VsZWN0b3IsIGRlbHRhXSA9IGZpbmRTZWxlY3Rvck1hdGNoKGN1cnJlbnRTZWxlY3RvciwgZWxlbWVudFJlZ2V4KTsgLy8gbGd0bSBbanMvdXNlbGVzcy1hc3NpZ25tZW50LXRvLWxvY2FsXVxuXG4gIHNwZWNpZmljaXR5WzJdICs9IGRlbHRhO1xuICByZXR1cm4gc3BlY2lmaWNpdHkuam9pbignJyk7XG59XG5cbnZhciBQU0VVRE9fWkVSTyA9IC4wMDAwMDAwMTtcbi8qKlxyXG4gKiBWZWN0b3IgbWFnbml0dWRlLlxyXG4gKiBAcGFyYW0gdlxyXG4gKiBAcmV0dXJucyBOdW1iZXIgcmVzdWx0LlxyXG4gKi9cblxuZnVuY3Rpb24gdmVjdG9yTWFnbml0dWRlKHYpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh2WzBdLCAyKSArIE1hdGgucG93KHZbMV0sIDIpKTtcbn1cbi8qKlxyXG4gKiBSYXRpbyBiZXR3ZWVuIHR3byB2ZWN0b3JzLlxyXG4gKiBAcGFyYW0gdVxyXG4gKiBAcGFyYW0gdlxyXG4gKiBAcmV0dXJucyBOdW1iZXIgcmVzdWx0LlxyXG4gKi9cblxuZnVuY3Rpb24gdmVjdG9yc1JhdGlvKHUsIHYpIHtcbiAgcmV0dXJuICh1WzBdICogdlswXSArIHVbMV0gKiB2WzFdKSAvICh2ZWN0b3JNYWduaXR1ZGUodSkgKiB2ZWN0b3JNYWduaXR1ZGUodikpO1xufVxuLyoqXHJcbiAqIEFuZ2xlIGJldHdlZW4gdHdvIHZlY3RvcnMuXHJcbiAqIEBwYXJhbSB1XHJcbiAqIEBwYXJhbSB2XHJcbiAqIEByZXR1cm5zIE51bWJlciByZXN1bHQuXHJcbiAqL1xuXG5mdW5jdGlvbiB2ZWN0b3JzQW5nbGUodSwgdikge1xuICByZXR1cm4gKHVbMF0gKiB2WzFdIDwgdVsxXSAqIHZbMF0gPyAtMSA6IDEpICogTWF0aC5hY29zKHZlY3RvcnNSYXRpbyh1LCB2KSk7XG59XG5mdW5jdGlvbiBDQjEodCkge1xuICByZXR1cm4gdCAqIHQgKiB0O1xufVxuZnVuY3Rpb24gQ0IyKHQpIHtcbiAgcmV0dXJuIDMgKiB0ICogdCAqICgxIC0gdCk7XG59XG5mdW5jdGlvbiBDQjModCkge1xuICByZXR1cm4gMyAqIHQgKiAoMSAtIHQpICogKDEgLSB0KTtcbn1cbmZ1bmN0aW9uIENCNCh0KSB7XG4gIHJldHVybiAoMSAtIHQpICogKDEgLSB0KSAqICgxIC0gdCk7XG59XG5mdW5jdGlvbiBRQjEodCkge1xuICByZXR1cm4gdCAqIHQ7XG59XG5mdW5jdGlvbiBRQjIodCkge1xuICByZXR1cm4gMiAqIHQgKiAoMSAtIHQpO1xufVxuZnVuY3Rpb24gUUIzKHQpIHtcbiAgcmV0dXJuICgxIC0gdCkgKiAoMSAtIHQpO1xufVxuXG5jbGFzcyBQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKGRvY3VtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmlzTm9ybWFsaXplZENvbG9yID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZW1wdHkoZG9jdW1lbnQpIHtcbiAgICByZXR1cm4gbmV3IFByb3BlcnR5KGRvY3VtZW50LCAnRU1QVFknLCAnJyk7XG4gIH1cblxuICBzcGxpdCgpIHtcbiAgICB2YXIgc2VwYXJhdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnICc7XG4gICAgdmFyIHtcbiAgICAgIGRvY3VtZW50LFxuICAgICAgbmFtZVxuICAgIH0gPSB0aGlzO1xuICAgIHJldHVybiBjb21wcmVzc1NwYWNlcyh0aGlzLmdldFN0cmluZygpKS50cmltKCkuc3BsaXQoc2VwYXJhdG9yKS5tYXAodmFsdWUgPT4gbmV3IFByb3BlcnR5KGRvY3VtZW50LCBuYW1lLCB2YWx1ZSkpO1xuICB9XG5cbiAgaGFzVmFsdWUoemVyb0lzVmFsdWUpIHtcbiAgICB2YXIge1xuICAgICAgdmFsdWVcbiAgICB9ID0gdGhpcztcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09ICcnICYmICh6ZXJvSXNWYWx1ZSB8fCB2YWx1ZSAhPT0gMCkgJiYgdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIGlzU3RyaW5nKHJlZ2V4cCkge1xuICAgIHZhciB7XG4gICAgICB2YWx1ZVxuICAgIH0gPSB0aGlzO1xuICAgIHZhciByZXN1bHQgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuXG4gICAgaWYgKCFyZXN1bHQgfHwgIXJlZ2V4cCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVnZXhwLnRlc3QodmFsdWUpO1xuICB9XG5cbiAgaXNVcmxEZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmlzU3RyaW5nKC9edXJsXFwoLyk7XG4gIH1cblxuICBpc1BpeGVscygpIHtcbiAgICBpZiAoIXRoaXMuaGFzVmFsdWUoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBhc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgYXNTdHJpbmcuZW5kc1dpdGgoJ3B4Jyk6XG4gICAgICBjYXNlIC9eWzAtOV0rJC8udGVzdChhc1N0cmluZyk6XG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRWYWx1ZShkZWYpIHtcbiAgICBpZiAodHlwZW9mIGRlZiA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5oYXNWYWx1ZSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmO1xuICB9XG5cbiAgZ2V0TnVtYmVyKGRlZikge1xuICAgIGlmICghdGhpcy5oYXNWYWx1ZSgpKSB7XG4gICAgICBpZiAodHlwZW9mIGRlZiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KGRlZik7XG4gICAgfVxuXG4gICAgdmFyIHtcbiAgICAgIHZhbHVlXG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICAgIGlmICh0aGlzLmlzU3RyaW5nKC8lJC8pKSB7XG4gICAgICBuIC89IDEwMC4wO1xuICAgIH1cblxuICAgIHJldHVybiBuO1xuICB9XG5cbiAgZ2V0U3RyaW5nKGRlZikge1xuICAgIGlmICh0eXBlb2YgZGVmID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLmhhc1ZhbHVlKCkpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6IFN0cmluZyh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gU3RyaW5nKGRlZik7XG4gIH1cblxuICBnZXRDb2xvcihkZWYpIHtcbiAgICB2YXIgY29sb3IgPSB0aGlzLmdldFN0cmluZyhkZWYpO1xuXG4gICAgaWYgKHRoaXMuaXNOb3JtYWxpemVkQ29sb3IpIHtcbiAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9XG5cbiAgICB0aGlzLmlzTm9ybWFsaXplZENvbG9yID0gdHJ1ZTtcbiAgICBjb2xvciA9IG5vcm1hbGl6ZUNvbG9yKGNvbG9yKTtcbiAgICB0aGlzLnZhbHVlID0gY29sb3I7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgZ2V0RHBpKCkge1xuICAgIHJldHVybiA5Ni4wOyAvLyBUT0RPOiBjb21wdXRlP1xuICB9XG5cbiAgZ2V0UmVtKCkge1xuICAgIHJldHVybiB0aGlzLmRvY3VtZW50LnJvb3RFbVNpemU7XG4gIH1cblxuICBnZXRFbSgpIHtcbiAgICByZXR1cm4gdGhpcy5kb2N1bWVudC5lbVNpemU7XG4gIH1cblxuICBnZXRVbml0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmcoKS5yZXBsYWNlKC9bMC05Li1dL2csICcnKTtcbiAgfVxuXG4gIGdldFBpeGVscyhheGlzT3JJc0ZvbnRTaXplKSB7XG4gICAgdmFyIHByb2Nlc3NQZXJjZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICAgIGlmICghdGhpcy5oYXNWYWx1ZSgpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YXIgW2F4aXMsIGlzRm9udFNpemVdID0gdHlwZW9mIGF4aXNPcklzRm9udFNpemUgPT09ICdib29sZWFuJyA/IFt1bmRlZmluZWQsIGF4aXNPcklzRm9udFNpemVdIDogW2F4aXNPcklzRm9udFNpemVdO1xuICAgIHZhciB7XG4gICAgICB2aWV3UG9ydFxuICAgIH0gPSB0aGlzLmRvY3VtZW50LnNjcmVlbjtcblxuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSB0aGlzLmlzU3RyaW5nKC92bWluJC8pOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXROdW1iZXIoKSAvIDEwMC4wICogTWF0aC5taW4odmlld1BvcnQuY29tcHV0ZVNpemUoJ3gnKSwgdmlld1BvcnQuY29tcHV0ZVNpemUoJ3knKSk7XG5cbiAgICAgIGNhc2UgdGhpcy5pc1N0cmluZygvdm1heCQvKTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyKCkgLyAxMDAuMCAqIE1hdGgubWF4KHZpZXdQb3J0LmNvbXB1dGVTaXplKCd4JyksIHZpZXdQb3J0LmNvbXB1dGVTaXplKCd5JykpO1xuXG4gICAgICBjYXNlIHRoaXMuaXNTdHJpbmcoL3Z3JC8pOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXROdW1iZXIoKSAvIDEwMC4wICogdmlld1BvcnQuY29tcHV0ZVNpemUoJ3gnKTtcblxuICAgICAgY2FzZSB0aGlzLmlzU3RyaW5nKC92aCQvKTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyKCkgLyAxMDAuMCAqIHZpZXdQb3J0LmNvbXB1dGVTaXplKCd5Jyk7XG5cbiAgICAgIGNhc2UgdGhpcy5pc1N0cmluZygvcmVtJC8pOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXROdW1iZXIoKSAqIHRoaXMuZ2V0UmVtKCk7XG5cbiAgICAgIGNhc2UgdGhpcy5pc1N0cmluZygvZW0kLyk6XG4gICAgICAgIHJldHVybiB0aGlzLmdldE51bWJlcigpICogdGhpcy5nZXRFbSgpO1xuXG4gICAgICBjYXNlIHRoaXMuaXNTdHJpbmcoL2V4JC8pOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXROdW1iZXIoKSAqIHRoaXMuZ2V0RW0oKSAvIDIuMDtcblxuICAgICAgY2FzZSB0aGlzLmlzU3RyaW5nKC9weCQvKTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyKCk7XG5cbiAgICAgIGNhc2UgdGhpcy5pc1N0cmluZygvcHQkLyk6XG4gICAgICAgIHJldHVybiB0aGlzLmdldE51bWJlcigpICogdGhpcy5nZXREcGkoKSAqICgxLjAgLyA3Mi4wKTtcblxuICAgICAgY2FzZSB0aGlzLmlzU3RyaW5nKC9wYyQvKTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyKCkgKiAxNTtcblxuICAgICAgY2FzZSB0aGlzLmlzU3RyaW5nKC9jbSQvKTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyKCkgKiB0aGlzLmdldERwaSgpIC8gMi41NDtcblxuICAgICAgY2FzZSB0aGlzLmlzU3RyaW5nKC9tbSQvKTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyKCkgKiB0aGlzLmdldERwaSgpIC8gMjUuNDtcblxuICAgICAgY2FzZSB0aGlzLmlzU3RyaW5nKC9pbiQvKTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyKCkgKiB0aGlzLmdldERwaSgpO1xuXG4gICAgICBjYXNlIHRoaXMuaXNTdHJpbmcoLyUkLykgJiYgaXNGb250U2l6ZTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyKCkgKiB0aGlzLmdldEVtKCk7XG5cbiAgICAgIGNhc2UgdGhpcy5pc1N0cmluZygvJSQvKTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyKCkgKiB2aWV3UG9ydC5jb21wdXRlU2l6ZShheGlzKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBuID0gdGhpcy5nZXROdW1iZXIoKTtcblxuICAgICAgICAgIGlmIChwcm9jZXNzUGVyY2VudCAmJiBuIDwgMS4wKSB7XG4gICAgICAgICAgICByZXR1cm4gbiAqIHZpZXdQb3J0LmNvbXB1dGVTaXplKGF4aXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0TWlsbGlzZWNvbmRzKCkge1xuICAgIGlmICghdGhpcy5oYXNWYWx1ZSgpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1N0cmluZygvbXMkLykpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldE51bWJlcigpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldE51bWJlcigpICogMTAwMDtcbiAgfVxuXG4gIGdldFJhZGlhbnMoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1ZhbHVlKCkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSB0aGlzLmlzU3RyaW5nKC9kZWckLyk6XG4gICAgICAgIHJldHVybiB0aGlzLmdldE51bWJlcigpICogKE1hdGguUEkgLyAxODAuMCk7XG5cbiAgICAgIGNhc2UgdGhpcy5pc1N0cmluZygvZ3JhZCQvKTpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyKCkgKiAoTWF0aC5QSSAvIDIwMC4wKTtcblxuICAgICAgY2FzZSB0aGlzLmlzU3RyaW5nKC9yYWQkLyk6XG4gICAgICAgIHJldHVybiB0aGlzLmdldE51bWJlcigpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5nZXROdW1iZXIoKSAqIChNYXRoLlBJIC8gMTgwLjApO1xuICAgIH1cbiAgfVxuXG4gIGdldERlZmluaXRpb24oKSB7XG4gICAgdmFyIGFzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICB2YXIgbmFtZSA9IC8jKFteKSdcIl0rKS8uZXhlYyhhc1N0cmluZyk7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgbmFtZSA9IG5hbWVbMV07XG4gICAgfVxuXG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICBuYW1lID0gYXNTdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZG9jdW1lbnQuZGVmaW5pdGlvbnNbbmFtZV07XG4gIH1cblxuICBnZXRGaWxsU3R5bGVEZWZpbml0aW9uKGVsZW1lbnQsIG9wYWNpdHkpIHtcbiAgICB2YXIgZGVmID0gdGhpcy5nZXREZWZpbml0aW9uKCk7XG5cbiAgICBpZiAoIWRlZikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSAvLyBncmFkaWVudFxuXG5cbiAgICBpZiAodHlwZW9mIGRlZi5jcmVhdGVHcmFkaWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGRlZi5jcmVhdGVHcmFkaWVudCh0aGlzLmRvY3VtZW50LmN0eCwgZWxlbWVudCwgb3BhY2l0eSk7XG4gICAgfSAvLyBwYXR0ZXJuXG5cblxuICAgIGlmICh0eXBlb2YgZGVmLmNyZWF0ZVBhdHRlcm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkZWYuZ2V0SHJlZkF0dHJpYnV0ZSgpLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgdmFyIHBhdHRlcm5UcmFuc2Zvcm0gPSBkZWYuZ2V0QXR0cmlidXRlKCdwYXR0ZXJuVHJhbnNmb3JtJyk7XG4gICAgICAgIGRlZiA9IGRlZi5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpO1xuXG4gICAgICAgIGlmIChwYXR0ZXJuVHJhbnNmb3JtLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICBkZWYuZ2V0QXR0cmlidXRlKCdwYXR0ZXJuVHJhbnNmb3JtJywgdHJ1ZSkuc2V0VmFsdWUocGF0dGVyblRyYW5zZm9ybS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlZi5jcmVhdGVQYXR0ZXJuKHRoaXMuZG9jdW1lbnQuY3R4LCBlbGVtZW50LCBvcGFjaXR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFRleHRCYXNlbGluZSgpIHtcbiAgICBpZiAoIXRoaXMuaGFzVmFsdWUoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb3BlcnR5LnRleHRCYXNlbGluZU1hcHBpbmdbdGhpcy5nZXRTdHJpbmcoKV07XG4gIH1cblxuICBhZGRPcGFjaXR5KG9wYWNpdHkpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmdldENvbG9yKCk7XG4gICAgdmFyIGxlbiA9IHZhbHVlLmxlbmd0aDtcbiAgICB2YXIgY29tbWFzID0gMDsgLy8gU2ltdWxhdGUgb2xkIFJHQkNvbG9yIHZlcnNpb24sIHdoaWNoIGNhbid0IHBhcnNlIHJnYmEuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAodmFsdWVbaV0gPT09ICcsJykge1xuICAgICAgICBjb21tYXMrKztcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbW1hcyA9PT0gMykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3BhY2l0eS5oYXNWYWx1ZSgpICYmIHRoaXMuaXNTdHJpbmcoKSAmJiBjb21tYXMgIT09IDMpIHtcbiAgICAgIHZhciBjb2xvciA9IG5ldyBSR0JDb2xvcih2YWx1ZSk7XG5cbiAgICAgIGlmIChjb2xvci5vaykge1xuICAgICAgICBjb2xvci5hbHBoYSA9IG9wYWNpdHkuZ2V0TnVtYmVyKCk7XG4gICAgICAgIHZhbHVlID0gY29sb3IudG9SR0JBKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9wZXJ0eSh0aGlzLmRvY3VtZW50LCB0aGlzLm5hbWUsIHZhbHVlKTtcbiAgfVxuXG59XG5Qcm9wZXJ0eS50ZXh0QmFzZWxpbmVNYXBwaW5nID0ge1xuICAnYmFzZWxpbmUnOiAnYWxwaGFiZXRpYycsXG4gICdiZWZvcmUtZWRnZSc6ICd0b3AnLFxuICAndGV4dC1iZWZvcmUtZWRnZSc6ICd0b3AnLFxuICAnbWlkZGxlJzogJ21pZGRsZScsXG4gICdjZW50cmFsJzogJ21pZGRsZScsXG4gICdhZnRlci1lZGdlJzogJ2JvdHRvbScsXG4gICd0ZXh0LWFmdGVyLWVkZ2UnOiAnYm90dG9tJyxcbiAgJ2lkZW9ncmFwaGljJzogJ2lkZW9ncmFwaGljJyxcbiAgJ2FscGhhYmV0aWMnOiAnYWxwaGFiZXRpYycsXG4gICdoYW5naW5nJzogJ2hhbmdpbmcnLFxuICAnbWF0aGVtYXRpY2FsJzogJ2FscGhhYmV0aWMnXG59O1xuXG5jbGFzcyBWaWV3UG9ydCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmlld1BvcnRzID0gW107XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnZpZXdQb3J0cyA9IFtdO1xuICB9XG5cbiAgc2V0Q3VycmVudCh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy52aWV3UG9ydHMucHVzaCh7XG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQ3VycmVudCgpIHtcbiAgICB0aGlzLnZpZXdQb3J0cy5wb3AoKTtcbiAgfVxuXG4gIGdldEN1cnJlbnQoKSB7XG4gICAgdmFyIHtcbiAgICAgIHZpZXdQb3J0c1xuICAgIH0gPSB0aGlzO1xuICAgIHJldHVybiB2aWV3UG9ydHNbdmlld1BvcnRzLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnQoKS53aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudCgpLmhlaWdodDtcbiAgfVxuXG4gIGNvbXB1dGVTaXplKGQpIHtcbiAgICBpZiAodHlwZW9mIGQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gZDtcbiAgICB9XG5cbiAgICBpZiAoZCA9PT0gJ3gnKSB7XG4gICAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgICB9XG5cbiAgICBpZiAoZCA9PT0gJ3knKSB7XG4gICAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0aGlzLndpZHRoLCAyKSArIE1hdGgucG93KHRoaXMuaGVpZ2h0LCAyKSkgLyBNYXRoLnNxcnQoMik7XG4gIH1cblxufVxuXG5jbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBzdGF0aWMgcGFyc2UocG9pbnQpIHtcbiAgICB2YXIgZGVmYXVsdFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAgIHZhciBbeCA9IGRlZmF1bHRWYWx1ZSwgeSA9IGRlZmF1bHRWYWx1ZV0gPSB0b051bWJlcnMocG9pbnQpO1xuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSk7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VTY2FsZShzY2FsZSkge1xuICAgIHZhciBkZWZhdWx0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG4gICAgdmFyIFt4ID0gZGVmYXVsdFZhbHVlLCB5ID0geF0gPSB0b051bWJlcnMoc2NhbGUpO1xuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSk7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VQYXRoKHBhdGgpIHtcbiAgICB2YXIgcG9pbnRzID0gdG9OdW1iZXJzKHBhdGgpO1xuICAgIHZhciBsZW4gPSBwb2ludHMubGVuZ3RoO1xuICAgIHZhciBwYXRoUG9pbnRzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgICBwYXRoUG9pbnRzLnB1c2gobmV3IFBvaW50KHBvaW50c1tpXSwgcG9pbnRzW2kgKyAxXSkpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoUG9pbnRzO1xuICB9XG5cbiAgYW5nbGVUbyhwb2ludCkge1xuICAgIHJldHVybiBNYXRoLmF0YW4yKHBvaW50LnkgLSB0aGlzLnksIHBvaW50LnggLSB0aGlzLngpO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdmFyIHtcbiAgICAgIHgsXG4gICAgICB5XG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIHhwID0geCAqIHRyYW5zZm9ybVswXSArIHkgKiB0cmFuc2Zvcm1bMl0gKyB0cmFuc2Zvcm1bNF07XG4gICAgdmFyIHlwID0geCAqIHRyYW5zZm9ybVsxXSArIHkgKiB0cmFuc2Zvcm1bM10gKyB0cmFuc2Zvcm1bNV07XG4gICAgdGhpcy54ID0geHA7XG4gICAgdGhpcy55ID0geXA7XG4gIH1cblxufVxuXG5jbGFzcyBNb3VzZSB7XG4gIGNvbnN0cnVjdG9yKHNjcmVlbikge1xuICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuO1xuICAgIHRoaXMud29ya2luZyA9IGZhbHNlO1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgdGhpcy5ldmVudEVsZW1lbnRzID0gW107IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblxuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaXNXb3JraW5nKCkge1xuICAgIHJldHVybiB0aGlzLndvcmtpbmc7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBpZiAodGhpcy53b3JraW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHtcbiAgICAgIHNjcmVlbixcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBvbk1vdXNlTW92ZVxuICAgIH0gPSB0aGlzO1xuICAgIHZhciBjYW52YXMgPSBzY3JlZW4uY3R4LmNhbnZhcztcbiAgICBjYW52YXMub25jbGljayA9IG9uQ2xpY2s7XG4gICAgY2FudmFzLm9ubW91c2Vtb3ZlID0gb25Nb3VzZU1vdmU7XG4gICAgdGhpcy53b3JraW5nID0gdHJ1ZTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgaWYgKCF0aGlzLndvcmtpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5zY3JlZW4uY3R4LmNhbnZhcztcbiAgICB0aGlzLndvcmtpbmcgPSBmYWxzZTtcbiAgICBjYW52YXMub25jbGljayA9IG51bGw7XG4gICAgY2FudmFzLm9ubW91c2Vtb3ZlID0gbnVsbDtcbiAgfVxuXG4gIGhhc0V2ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy53b3JraW5nICYmIHRoaXMuZXZlbnRzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBydW5FdmVudHMoKSB7XG4gICAgaWYgKCF0aGlzLndvcmtpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIge1xuICAgICAgc2NyZWVuOiBkb2N1bWVudCxcbiAgICAgIGV2ZW50cyxcbiAgICAgIGV2ZW50RWxlbWVudHNcbiAgICB9ID0gdGhpcztcbiAgICB2YXIge1xuICAgICAgc3R5bGVcbiAgICB9ID0gZG9jdW1lbnQuY3R4LmNhbnZhcztcblxuICAgIGlmIChzdHlsZSkge1xuICAgICAgc3R5bGUuY3Vyc29yID0gJyc7XG4gICAgfVxuXG4gICAgZXZlbnRzLmZvckVhY2goKF9yZWYsIGkpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIHJ1blxuICAgICAgfSA9IF9yZWY7XG4gICAgICB2YXIgZWxlbWVudCA9IGV2ZW50RWxlbWVudHNbaV07XG5cbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIHJ1bihlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50O1xuICAgICAgfVxuICAgIH0pOyAvLyBkb25lIHJ1bm5pbmcsIGNsZWFyXG5cbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgIHRoaXMuZXZlbnRFbGVtZW50cyA9IFtdO1xuICB9XG5cbiAgY2hlY2tQYXRoKGVsZW1lbnQsIGN0eCkge1xuICAgIGlmICghdGhpcy53b3JraW5nIHx8ICFjdHgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIge1xuICAgICAgZXZlbnRzLFxuICAgICAgZXZlbnRFbGVtZW50c1xuICAgIH0gPSB0aGlzO1xuICAgIGV2ZW50cy5mb3JFYWNoKChfcmVmMiwgaSkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfSA9IF9yZWYyO1xuXG4gICAgICBpZiAoIWV2ZW50RWxlbWVudHNbaV0gJiYgY3R4LmlzUG9pbnRJblBhdGggJiYgY3R4LmlzUG9pbnRJblBhdGgoeCwgeSkpIHtcbiAgICAgICAgZXZlbnRFbGVtZW50c1tpXSA9IGVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjaGVja0JvdW5kaW5nQm94KGVsZW1lbnQsIGJvdW5kaW5nQm94KSB7XG4gICAgaWYgKCF0aGlzLndvcmtpbmcgfHwgIWJvdW5kaW5nQm94KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHtcbiAgICAgIGV2ZW50cyxcbiAgICAgIGV2ZW50RWxlbWVudHNcbiAgICB9ID0gdGhpcztcbiAgICBldmVudHMuZm9yRWFjaCgoX3JlZjMsIGkpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIHgsXG4gICAgICAgIHlcbiAgICAgIH0gPSBfcmVmMztcblxuICAgICAgaWYgKCFldmVudEVsZW1lbnRzW2ldICYmIGJvdW5kaW5nQm94LmlzUG9pbnRJbkJveCh4LCB5KSkge1xuICAgICAgICBldmVudEVsZW1lbnRzW2ldID0gZWxlbWVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG1hcFhZKHgsIHkpIHtcbiAgICB2YXIge1xuICAgICAgd2luZG93LFxuICAgICAgY3R4XG4gICAgfSA9IHRoaXMuc2NyZWVuO1xuICAgIHZhciBwb2ludCA9IG5ldyBQb2ludCh4LCB5KTtcbiAgICB2YXIgZWxlbWVudCA9IGN0eC5jYW52YXM7XG5cbiAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgcG9pbnQueCAtPSBlbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICBwb2ludC55IC09IGVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWCkge1xuICAgICAgcG9pbnQueCArPSB3aW5kb3cuc2Nyb2xsWDtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LnNjcm9sbFkpIHtcbiAgICAgIHBvaW50LnkgKz0gd2luZG93LnNjcm9sbFk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvaW50O1xuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIHZhciB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH0gPSB0aGlzLm1hcFhZKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIHRoaXMuZXZlbnRzLnB1c2goe1xuICAgICAgdHlwZTogJ29uY2xpY2snLFxuICAgICAgeCxcbiAgICAgIHksXG5cbiAgICAgIHJ1bihldmVudFRhcmdldCkge1xuICAgICAgICBpZiAoZXZlbnRUYXJnZXQub25DbGljaykge1xuICAgICAgICAgIGV2ZW50VGFyZ2V0Lm9uQ2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHZhciB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH0gPSB0aGlzLm1hcFhZKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIHRoaXMuZXZlbnRzLnB1c2goe1xuICAgICAgdHlwZTogJ29ubW91c2Vtb3ZlJyxcbiAgICAgIHgsXG4gICAgICB5LFxuXG4gICAgICBydW4oZXZlbnRUYXJnZXQpIHtcbiAgICAgICAgaWYgKGV2ZW50VGFyZ2V0Lm9uTW91c2VNb3ZlKSB7XG4gICAgICAgICAgZXZlbnRUYXJnZXQub25Nb3VzZU1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG4gIH1cblxufVxuXG52YXIgZGVmYXVsdFdpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogbnVsbDtcbnZhciBkZWZhdWx0RmV0Y2gkMSA9IHR5cGVvZiBmZXRjaCAhPT0gJ3VuZGVmaW5lZCcgPyBmZXRjaC5iaW5kKHVuZGVmaW5lZCkgLy8gYGZldGNoYCBkZXBlbmRzIG9uIGNvbnRleHQ6IGBzb21lT2JqZWN0LmZldGNoKC4uLilgIHdpbGwgdGhyb3cgZXJyb3IuXG46IG51bGw7XG5jbGFzcyBTY3JlZW4ge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB2YXIge1xuICAgICAgZmV0Y2ggPSBkZWZhdWx0RmV0Y2gkMSxcbiAgICAgIHdpbmRvdyA9IGRlZmF1bHRXaW5kb3dcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLkZSQU1FUkFURSA9IDMwO1xuICAgIHRoaXMuTUFYX1ZJUlRVQUxfUElYRUxTID0gMzAwMDA7XG4gICAgdGhpcy5DTElFTlRfV0lEVEggPSA4MDA7XG4gICAgdGhpcy5DTElFTlRfSEVJR0hUID0gNjAwO1xuICAgIHRoaXMudmlld1BvcnQgPSBuZXcgVmlld1BvcnQoKTtcbiAgICB0aGlzLm1vdXNlID0gbmV3IE1vdXNlKHRoaXMpO1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdO1xuICAgIHRoaXMud2FpdHMgPSBbXTtcbiAgICB0aGlzLmZyYW1lRHVyYXRpb24gPSAwO1xuICAgIHRoaXMuaXNSZWFkeUxvY2sgPSBmYWxzZTtcbiAgICB0aGlzLmlzRmlyc3RSZW5kZXIgPSB0cnVlO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgdGhpcy53aW5kb3cgPSB3aW5kb3c7XG4gICAgdGhpcy5mZXRjaCA9IGZldGNoO1xuICB9XG5cbiAgd2FpdChjaGVja2VyKSB7XG4gICAgdGhpcy53YWl0cy5wdXNoKGNoZWNrZXIpO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1taXN1c2VkLXByb21pc2VzXG4gICAgaWYgKCF0aGlzLnJlYWR5UHJvbWlzZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlYWR5UHJvbWlzZTtcbiAgfVxuXG4gIGlzUmVhZHkoKSB7XG4gICAgaWYgKHRoaXMuaXNSZWFkeUxvY2spIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBpc1JlYWR5TG9jayA9IHRoaXMud2FpdHMuZXZlcnkoXyA9PiBfKCkpO1xuXG4gICAgaWYgKGlzUmVhZHlMb2NrKSB7XG4gICAgICB0aGlzLndhaXRzID0gW107XG5cbiAgICAgIGlmICh0aGlzLnJlc29sdmVSZWFkeSkge1xuICAgICAgICB0aGlzLnJlc29sdmVSZWFkeSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaXNSZWFkeUxvY2sgPSBpc1JlYWR5TG9jaztcbiAgICByZXR1cm4gaXNSZWFkeUxvY2s7XG4gIH1cblxuICBzZXREZWZhdWx0cyhjdHgpIHtcbiAgICAvLyBpbml0aWFsIHZhbHVlcyBhbmQgZGVmYXVsdHNcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLDAsMCwwKSc7XG4gICAgY3R4LmxpbmVDYXAgPSAnYnV0dCc7XG4gICAgY3R4LmxpbmVKb2luID0gJ21pdGVyJztcbiAgICBjdHgubWl0ZXJMaW1pdCA9IDQ7XG4gIH1cblxuICBzZXRWaWV3Qm94KF9yZWYpIHtcbiAgICB2YXIge1xuICAgICAgZG9jdW1lbnQsXG4gICAgICBjdHgsXG4gICAgICBhc3BlY3RSYXRpbyxcbiAgICAgIHdpZHRoLFxuICAgICAgZGVzaXJlZFdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgZGVzaXJlZEhlaWdodCxcbiAgICAgIG1pblggPSAwLFxuICAgICAgbWluWSA9IDAsXG4gICAgICByZWZYLFxuICAgICAgcmVmWSxcbiAgICAgIGNsaXAgPSBmYWxzZSxcbiAgICAgIGNsaXBYID0gMCxcbiAgICAgIGNsaXBZID0gMFxuICAgIH0gPSBfcmVmO1xuICAgIC8vIGFzcGVjdCByYXRpbyAtIGh0dHA6Ly93d3cudzMub3JnL1RSL1NWRy9jb29yZHMuaHRtbCNQcmVzZXJ2ZUFzcGVjdFJhdGlvQXR0cmlidXRlXG4gICAgdmFyIGNsZWFuQXNwZWN0UmF0aW8gPSBjb21wcmVzc1NwYWNlcyhhc3BlY3RSYXRpbykucmVwbGFjZSgvXmRlZmVyXFxzLywgJycpOyAvLyBpZ25vcmUgZGVmZXJcblxuICAgIHZhciBbYXNwZWN0UmF0aW9BbGlnbiwgYXNwZWN0UmF0aW9NZWV0T3JTbGljZV0gPSBjbGVhbkFzcGVjdFJhdGlvLnNwbGl0KCcgJyk7XG4gICAgdmFyIGFsaWduID0gYXNwZWN0UmF0aW9BbGlnbiB8fCAneE1pZFlNaWQnO1xuICAgIHZhciBtZWV0T3JTbGljZSA9IGFzcGVjdFJhdGlvTWVldE9yU2xpY2UgfHwgJ21lZXQnOyAvLyBjYWxjdWxhdGUgc2NhbGVcblxuICAgIHZhciBzY2FsZVggPSB3aWR0aCAvIGRlc2lyZWRXaWR0aDtcbiAgICB2YXIgc2NhbGVZID0gaGVpZ2h0IC8gZGVzaXJlZEhlaWdodDtcbiAgICB2YXIgc2NhbGVNaW4gPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSk7XG4gICAgdmFyIHNjYWxlTWF4ID0gTWF0aC5tYXgoc2NhbGVYLCBzY2FsZVkpO1xuICAgIHZhciBmaW5hbERlc2lyZWRXaWR0aCA9IGRlc2lyZWRXaWR0aDtcbiAgICB2YXIgZmluYWxEZXNpcmVkSGVpZ2h0ID0gZGVzaXJlZEhlaWdodDtcblxuICAgIGlmIChtZWV0T3JTbGljZSA9PT0gJ21lZXQnKSB7XG4gICAgICBmaW5hbERlc2lyZWRXaWR0aCAqPSBzY2FsZU1pbjtcbiAgICAgIGZpbmFsRGVzaXJlZEhlaWdodCAqPSBzY2FsZU1pbjtcbiAgICB9XG5cbiAgICBpZiAobWVldE9yU2xpY2UgPT09ICdzbGljZScpIHtcbiAgICAgIGZpbmFsRGVzaXJlZFdpZHRoICo9IHNjYWxlTWF4O1xuICAgICAgZmluYWxEZXNpcmVkSGVpZ2h0ICo9IHNjYWxlTWF4O1xuICAgIH1cblxuICAgIHZhciByZWZYUHJvcCA9IG5ldyBQcm9wZXJ0eShkb2N1bWVudCwgJ3JlZlgnLCByZWZYKTtcbiAgICB2YXIgcmVmWVByb3AgPSBuZXcgUHJvcGVydHkoZG9jdW1lbnQsICdyZWZZJywgcmVmWSk7XG4gICAgdmFyIGhhc1JlZnMgPSByZWZYUHJvcC5oYXNWYWx1ZSgpICYmIHJlZllQcm9wLmhhc1ZhbHVlKCk7XG5cbiAgICBpZiAoaGFzUmVmcykge1xuICAgICAgY3R4LnRyYW5zbGF0ZSgtc2NhbGVNaW4gKiByZWZYUHJvcC5nZXRQaXhlbHMoJ3gnKSwgLXNjYWxlTWluICogcmVmWVByb3AuZ2V0UGl4ZWxzKCd5JykpO1xuICAgIH1cblxuICAgIGlmIChjbGlwKSB7XG4gICAgICB2YXIgc2NhbGVkQ2xpcFggPSBzY2FsZU1pbiAqIGNsaXBYO1xuICAgICAgdmFyIHNjYWxlZENsaXBZID0gc2NhbGVNaW4gKiBjbGlwWTtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8oc2NhbGVkQ2xpcFgsIHNjYWxlZENsaXBZKTtcbiAgICAgIGN0eC5saW5lVG8od2lkdGgsIHNjYWxlZENsaXBZKTtcbiAgICAgIGN0eC5saW5lVG8od2lkdGgsIGhlaWdodCk7XG4gICAgICBjdHgubGluZVRvKHNjYWxlZENsaXBYLCBoZWlnaHQpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgY3R4LmNsaXAoKTtcbiAgICB9XG5cbiAgICBpZiAoIWhhc1JlZnMpIHtcbiAgICAgIHZhciBpc01lZXRNaW5ZID0gbWVldE9yU2xpY2UgPT09ICdtZWV0JyAmJiBzY2FsZU1pbiA9PT0gc2NhbGVZO1xuICAgICAgdmFyIGlzU2xpY2VNYXhZID0gbWVldE9yU2xpY2UgPT09ICdzbGljZScgJiYgc2NhbGVNYXggPT09IHNjYWxlWTtcbiAgICAgIHZhciBpc01lZXRNaW5YID0gbWVldE9yU2xpY2UgPT09ICdtZWV0JyAmJiBzY2FsZU1pbiA9PT0gc2NhbGVYO1xuICAgICAgdmFyIGlzU2xpY2VNYXhYID0gbWVldE9yU2xpY2UgPT09ICdzbGljZScgJiYgc2NhbGVNYXggPT09IHNjYWxlWDtcblxuICAgICAgaWYgKGFsaWduLnN0YXJ0c1dpdGgoJ3hNaWQnKSAmJiAoaXNNZWV0TWluWSB8fCBpc1NsaWNlTWF4WSkpIHtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh3aWR0aCAvIDIuMCAtIGZpbmFsRGVzaXJlZFdpZHRoIC8gMi4wLCAwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFsaWduLmVuZHNXaXRoKCdZTWlkJykgJiYgKGlzTWVldE1pblggfHwgaXNTbGljZU1heFgpKSB7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoMCwgaGVpZ2h0IC8gMi4wIC0gZmluYWxEZXNpcmVkSGVpZ2h0IC8gMi4wKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFsaWduLnN0YXJ0c1dpdGgoJ3hNYXgnKSAmJiAoaXNNZWV0TWluWSB8fCBpc1NsaWNlTWF4WSkpIHtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh3aWR0aCAtIGZpbmFsRGVzaXJlZFdpZHRoLCAwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFsaWduLmVuZHNXaXRoKCdZTWF4JykgJiYgKGlzTWVldE1pblggfHwgaXNTbGljZU1heFgpKSB7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoMCwgaGVpZ2h0IC0gZmluYWxEZXNpcmVkSGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9IC8vIHNjYWxlXG5cblxuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBhbGlnbiA9PT0gJ25vbmUnOlxuICAgICAgICBjdHguc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBtZWV0T3JTbGljZSA9PT0gJ21lZXQnOlxuICAgICAgICBjdHguc2NhbGUoc2NhbGVNaW4sIHNjYWxlTWluKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgbWVldE9yU2xpY2UgPT09ICdzbGljZSc6XG4gICAgICAgIGN0eC5zY2FsZShzY2FsZU1heCwgc2NhbGVNYXgpO1xuICAgICAgICBicmVhaztcbiAgICB9IC8vIHRyYW5zbGF0ZVxuXG5cbiAgICBjdHgudHJhbnNsYXRlKC1taW5YLCAtbWluWSk7XG4gIH1cblxuICBzdGFydChlbGVtZW50KSB7XG4gICAgdmFyIHtcbiAgICAgIGVuYWJsZVJlZHJhdyA9IGZhbHNlLFxuICAgICAgaWdub3JlTW91c2UgPSBmYWxzZSxcbiAgICAgIGlnbm9yZUFuaW1hdGlvbiA9IGZhbHNlLFxuICAgICAgaWdub3JlRGltZW5zaW9ucyA9IGZhbHNlLFxuICAgICAgaWdub3JlQ2xlYXIgPSBmYWxzZSxcbiAgICAgIGZvcmNlUmVkcmF3LFxuICAgICAgc2NhbGVXaWR0aCxcbiAgICAgIHNjYWxlSGVpZ2h0LFxuICAgICAgb2Zmc2V0WCxcbiAgICAgIG9mZnNldFlcbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgRlJBTUVSQVRFLFxuICAgICAgbW91c2VcbiAgICB9ID0gdGhpcztcbiAgICB2YXIgZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyBGUkFNRVJBVEU7XG4gICAgdGhpcy5mcmFtZUR1cmF0aW9uID0gZnJhbWVEdXJhdGlvbjtcbiAgICB0aGlzLnJlYWR5UHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlUmVhZHkgPSByZXNvbHZlO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuaXNSZWFkeSgpKSB7XG4gICAgICB0aGlzLnJlbmRlcihlbGVtZW50LCBpZ25vcmVEaW1lbnNpb25zLCBpZ25vcmVDbGVhciwgc2NhbGVXaWR0aCwgc2NhbGVIZWlnaHQsIG9mZnNldFgsIG9mZnNldFkpO1xuICAgIH1cblxuICAgIGlmICghZW5hYmxlUmVkcmF3KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgdmFyIHRoZW4gPSBub3c7XG4gICAgdmFyIGRlbHRhID0gMDtcblxuICAgIHZhciB0aWNrID0gKCkgPT4ge1xuICAgICAgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgIGRlbHRhID0gbm93IC0gdGhlbjtcblxuICAgICAgaWYgKGRlbHRhID49IGZyYW1lRHVyYXRpb24pIHtcbiAgICAgICAgdGhlbiA9IG5vdyAtIGRlbHRhICUgZnJhbWVEdXJhdGlvbjtcblxuICAgICAgICBpZiAodGhpcy5zaG91bGRVcGRhdGUoaWdub3JlQW5pbWF0aW9uLCBmb3JjZVJlZHJhdykpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcihlbGVtZW50LCBpZ25vcmVEaW1lbnNpb25zLCBpZ25vcmVDbGVhciwgc2NhbGVXaWR0aCwgc2NhbGVIZWlnaHQsIG9mZnNldFgsIG9mZnNldFkpO1xuICAgICAgICAgIG1vdXNlLnJ1bkV2ZW50cygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcbiAgICB9O1xuXG4gICAgaWYgKCFpZ25vcmVNb3VzZSkge1xuICAgICAgbW91c2Uuc3RhcnQoKTtcbiAgICB9XG5cbiAgICB0aGlzLmludGVydmFsSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLmludGVydmFsSWQpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZS5jYW5jZWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5tb3VzZS5zdG9wKCk7XG4gIH1cblxuICBzaG91bGRVcGRhdGUoaWdub3JlQW5pbWF0aW9uLCBmb3JjZVJlZHJhdykge1xuICAgIC8vIG5lZWQgdXBkYXRlIGZyb20gYW5pbWF0aW9ucz9cbiAgICBpZiAoIWlnbm9yZUFuaW1hdGlvbikge1xuICAgICAgdmFyIHtcbiAgICAgICAgZnJhbWVEdXJhdGlvblxuICAgICAgfSA9IHRoaXM7XG4gICAgICB2YXIgc2hvdWxkVXBkYXRlID0gdGhpcy5hbmltYXRpb25zLnJlZHVjZSgoc2hvdWxkVXBkYXRlLCBhbmltYXRpb24pID0+IGFuaW1hdGlvbi51cGRhdGUoZnJhbWVEdXJhdGlvbikgfHwgc2hvdWxkVXBkYXRlLCBmYWxzZSk7XG5cbiAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSAvLyBuZWVkIHVwZGF0ZSBmcm9tIHJlZHJhdz9cblxuXG4gICAgaWYgKHR5cGVvZiBmb3JjZVJlZHJhdyA9PT0gJ2Z1bmN0aW9uJyAmJiBmb3JjZVJlZHJhdygpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNSZWFkeUxvY2sgJiYgdGhpcy5pc1JlYWR5KCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gbmVlZCB1cGRhdGUgZnJvbSBtb3VzZSBldmVudHM/XG5cblxuICAgIGlmICh0aGlzLm1vdXNlLmhhc0V2ZW50cygpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZW5kZXIoZWxlbWVudCwgaWdub3JlRGltZW5zaW9ucywgaWdub3JlQ2xlYXIsIHNjYWxlV2lkdGgsIHNjYWxlSGVpZ2h0LCBvZmZzZXRYLCBvZmZzZXRZKSB7XG4gICAgdmFyIHtcbiAgICAgIENMSUVOVF9XSURUSCxcbiAgICAgIENMSUVOVF9IRUlHSFQsXG4gICAgICB2aWV3UG9ydCxcbiAgICAgIGN0eCxcbiAgICAgIGlzRmlyc3RSZW5kZXJcbiAgICB9ID0gdGhpcztcbiAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhcztcbiAgICB2aWV3UG9ydC5jbGVhcigpO1xuXG4gICAgaWYgKGNhbnZhcy53aWR0aCAmJiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICB2aWV3UG9ydC5zZXRDdXJyZW50KGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZXdQb3J0LnNldEN1cnJlbnQoQ0xJRU5UX1dJRFRILCBDTElFTlRfSEVJR0hUKTtcbiAgICB9XG5cbiAgICB2YXIgd2lkdGhTdHlsZSA9IGVsZW1lbnQuZ2V0U3R5bGUoJ3dpZHRoJyk7XG4gICAgdmFyIGhlaWdodFN0eWxlID0gZWxlbWVudC5nZXRTdHlsZSgnaGVpZ2h0Jyk7XG5cbiAgICBpZiAoIWlnbm9yZURpbWVuc2lvbnMgJiYgKGlzRmlyc3RSZW5kZXIgfHwgdHlwZW9mIHNjYWxlV2lkdGggIT09ICdudW1iZXInICYmIHR5cGVvZiBzY2FsZUhlaWdodCAhPT0gJ251bWJlcicpKSB7XG4gICAgICAvLyBzZXQgY2FudmFzIHNpemVcbiAgICAgIGlmICh3aWR0aFN0eWxlLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGhTdHlsZS5nZXRQaXhlbHMoJ3gnKTtcblxuICAgICAgICBpZiAoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gXCJcIi5jb25jYXQoY2FudmFzLndpZHRoLCBcInB4XCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChoZWlnaHRTdHlsZS5oYXNWYWx1ZSgpKSB7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHRTdHlsZS5nZXRQaXhlbHMoJ3knKTtcblxuICAgICAgICBpZiAoY2FudmFzLnN0eWxlKSB7XG4gICAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IFwiXCIuY29uY2F0KGNhbnZhcy5oZWlnaHQsIFwicHhcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY1dpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoIHx8IGNhbnZhcy53aWR0aDtcbiAgICB2YXIgY0hlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQgfHwgY2FudmFzLmhlaWdodDtcblxuICAgIGlmIChpZ25vcmVEaW1lbnNpb25zICYmIHdpZHRoU3R5bGUuaGFzVmFsdWUoKSAmJiBoZWlnaHRTdHlsZS5oYXNWYWx1ZSgpKSB7XG4gICAgICBjV2lkdGggPSB3aWR0aFN0eWxlLmdldFBpeGVscygneCcpO1xuICAgICAgY0hlaWdodCA9IGhlaWdodFN0eWxlLmdldFBpeGVscygneScpO1xuICAgIH1cblxuICAgIHZpZXdQb3J0LnNldEN1cnJlbnQoY1dpZHRoLCBjSGVpZ2h0KTtcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0WCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd4JywgdHJ1ZSkuc2V0VmFsdWUob2Zmc2V0WCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXRZID09PSAnbnVtYmVyJykge1xuICAgICAgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3knLCB0cnVlKS5zZXRWYWx1ZShvZmZzZXRZKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNjYWxlV2lkdGggPT09ICdudW1iZXInIHx8IHR5cGVvZiBzY2FsZUhlaWdodCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhciB2aWV3Qm94ID0gdG9OdW1iZXJzKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JykuZ2V0U3RyaW5nKCkpO1xuICAgICAgdmFyIHhSYXRpbyA9IDA7XG4gICAgICB2YXIgeVJhdGlvID0gMDtcblxuICAgICAgaWYgKHR5cGVvZiBzY2FsZVdpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgICB2YXIgX3dpZHRoU3R5bGUgPSBlbGVtZW50LmdldFN0eWxlKCd3aWR0aCcpO1xuXG4gICAgICAgIGlmIChfd2lkdGhTdHlsZS5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgeFJhdGlvID0gX3dpZHRoU3R5bGUuZ2V0UGl4ZWxzKCd4JykgLyBzY2FsZVdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc05hTih2aWV3Qm94WzJdKSkge1xuICAgICAgICAgIHhSYXRpbyA9IHZpZXdCb3hbMl0gLyBzY2FsZVdpZHRoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygc2NhbGVIZWlnaHQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHZhciBfaGVpZ2h0U3R5bGUgPSBlbGVtZW50LmdldFN0eWxlKCdoZWlnaHQnKTtcblxuICAgICAgICBpZiAoX2hlaWdodFN0eWxlLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICB5UmF0aW8gPSBfaGVpZ2h0U3R5bGUuZ2V0UGl4ZWxzKCd5JykgLyBzY2FsZUhlaWdodDtcbiAgICAgICAgfSBlbHNlIGlmICghaXNOYU4odmlld0JveFszXSkpIHtcbiAgICAgICAgICB5UmF0aW8gPSB2aWV3Qm94WzNdIC8gc2NhbGVIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF4UmF0aW8pIHtcbiAgICAgICAgeFJhdGlvID0geVJhdGlvO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXlSYXRpbykge1xuICAgICAgICB5UmF0aW8gPSB4UmF0aW87XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd3aWR0aCcsIHRydWUpLnNldFZhbHVlKHNjYWxlV2lkdGgpO1xuICAgICAgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHRydWUpLnNldFZhbHVlKHNjYWxlSGVpZ2h0KTtcbiAgICAgIHZhciB0cmFuc2Zvcm1TdHlsZSA9IGVsZW1lbnQuZ2V0U3R5bGUoJ3RyYW5zZm9ybScsIHRydWUsIHRydWUpO1xuICAgICAgdHJhbnNmb3JtU3R5bGUuc2V0VmFsdWUoXCJcIi5jb25jYXQodHJhbnNmb3JtU3R5bGUuZ2V0U3RyaW5nKCksIFwiIHNjYWxlKFwiKS5jb25jYXQoMS4wIC8geFJhdGlvLCBcIiwgXCIpLmNvbmNhdCgxLjAgLyB5UmF0aW8sIFwiKVwiKSk7XG4gICAgfSAvLyBjbGVhciBhbmQgcmVuZGVyXG5cblxuICAgIGlmICghaWdub3JlQ2xlYXIpIHtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY1dpZHRoLCBjSGVpZ2h0KTtcbiAgICB9XG5cbiAgICBlbGVtZW50LnJlbmRlcihjdHgpO1xuXG4gICAgaWYgKGlzRmlyc3RSZW5kZXIpIHtcbiAgICAgIHRoaXMuaXNGaXJzdFJlbmRlciA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG59XG5TY3JlZW4uZGVmYXVsdFdpbmRvdyA9IGRlZmF1bHRXaW5kb3c7XG5TY3JlZW4uZGVmYXVsdEZldGNoID0gZGVmYXVsdEZldGNoJDE7XG5cbnZhciB7XG4gIGRlZmF1bHRGZXRjaFxufSA9IFNjcmVlbjtcbnZhciBEZWZhdWx0RE9NUGFyc2VyID0gdHlwZW9mIERPTVBhcnNlciAhPT0gJ3VuZGVmaW5lZCcgPyBET01QYXJzZXIgOiBudWxsO1xuY2xhc3MgUGFyc2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdmFyIHtcbiAgICAgIGZldGNoID0gZGVmYXVsdEZldGNoLFxuICAgICAgRE9NUGFyc2VyID0gRGVmYXVsdERPTVBhcnNlclxuICAgIH0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHRoaXMuZmV0Y2ggPSBmZXRjaDtcbiAgICB0aGlzLkRPTVBhcnNlciA9IERPTVBhcnNlcjtcbiAgfVxuXG4gIHBhcnNlKHJlc291cmNlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKCkge1xuICAgICAgaWYgKHJlc291cmNlLnN0YXJ0c1dpdGgoJzwnKSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucGFyc2VGcm9tU3RyaW5nKHJlc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmxvYWQocmVzb3VyY2UpO1xuICAgIH0pKCk7XG4gIH1cblxuICBwYXJzZUZyb21TdHJpbmcoeG1sKSB7XG4gICAgdmFyIHBhcnNlciA9IG5ldyB0aGlzLkRPTVBhcnNlcigpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrRG9jdW1lbnQocGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWwsICdpbWFnZS9zdmcreG1sJykpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tEb2N1bWVudChwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbCwgJ3RleHQveG1sJykpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgICB2YXIgcGFyc2VyRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgncGFyc2VyZXJyb3InKVswXTtcblxuICAgIGlmIChwYXJzZXJFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHBhcnNlckVycm9yLnRleHRDb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9jdW1lbnQ7XG4gIH1cblxuICBsb2FkKHVybCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgcmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoKSB7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB5aWVsZCBfdGhpczIuZmV0Y2godXJsKTtcbiAgICAgIHZhciB4bWwgPSB5aWVsZCByZXNwb25zZS50ZXh0KCk7XG4gICAgICByZXR1cm4gX3RoaXMyLnBhcnNlRnJvbVN0cmluZyh4bWwpO1xuICAgIH0pKCk7XG4gIH1cblxufVxuXG5jbGFzcyBUcmFuc2xhdGUge1xuICBjb25zdHJ1Y3RvcihfLCBwb2ludCkge1xuICAgIHRoaXMudHlwZSA9ICd0cmFuc2xhdGUnO1xuICAgIHRoaXMucG9pbnQgPSBudWxsO1xuICAgIHRoaXMucG9pbnQgPSBQb2ludC5wYXJzZShwb2ludCk7XG4gIH1cblxuICBhcHBseShjdHgpIHtcbiAgICB2YXIge1xuICAgICAgeCxcbiAgICAgIHlcbiAgICB9ID0gdGhpcy5wb2ludDtcbiAgICBjdHgudHJhbnNsYXRlKHggfHwgMC4wLCB5IHx8IDAuMCk7XG4gIH1cblxuICB1bmFwcGx5KGN0eCkge1xuICAgIHZhciB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH0gPSB0aGlzLnBvaW50O1xuICAgIGN0eC50cmFuc2xhdGUoLTEuMCAqIHggfHwgMC4wLCAtMS4wICogeSB8fCAwLjApO1xuICB9XG5cbiAgYXBwbHlUb1BvaW50KHBvaW50KSB7XG4gICAgdmFyIHtcbiAgICAgIHgsXG4gICAgICB5XG4gICAgfSA9IHRoaXMucG9pbnQ7XG4gICAgcG9pbnQuYXBwbHlUcmFuc2Zvcm0oWzEsIDAsIDAsIDEsIHggfHwgMC4wLCB5IHx8IDAuMF0pO1xuICB9XG5cbn1cblxuY2xhc3MgUm90YXRlIHtcbiAgY29uc3RydWN0b3IoZG9jdW1lbnQsIHJvdGF0ZSwgdHJhbnNmb3JtT3JpZ2luKSB7XG4gICAgdGhpcy50eXBlID0gJ3JvdGF0ZSc7XG4gICAgdGhpcy5hbmdsZSA9IG51bGw7XG4gICAgdGhpcy5vcmlnaW5YID0gbnVsbDtcbiAgICB0aGlzLm9yaWdpblkgPSBudWxsO1xuICAgIHRoaXMuY3ggPSAwO1xuICAgIHRoaXMuY3kgPSAwO1xuICAgIHZhciBudW1iZXJzID0gdG9OdW1iZXJzKHJvdGF0ZSk7XG4gICAgdGhpcy5hbmdsZSA9IG5ldyBQcm9wZXJ0eShkb2N1bWVudCwgJ2FuZ2xlJywgbnVtYmVyc1swXSk7XG4gICAgdGhpcy5vcmlnaW5YID0gdHJhbnNmb3JtT3JpZ2luWzBdO1xuICAgIHRoaXMub3JpZ2luWSA9IHRyYW5zZm9ybU9yaWdpblsxXTtcbiAgICB0aGlzLmN4ID0gbnVtYmVyc1sxXSB8fCAwO1xuICAgIHRoaXMuY3kgPSBudW1iZXJzWzJdIHx8IDA7XG4gIH1cblxuICBhcHBseShjdHgpIHtcbiAgICB2YXIge1xuICAgICAgY3gsXG4gICAgICBjeSxcbiAgICAgIG9yaWdpblgsXG4gICAgICBvcmlnaW5ZLFxuICAgICAgYW5nbGVcbiAgICB9ID0gdGhpcztcbiAgICB2YXIgdHggPSBjeCArIG9yaWdpblguZ2V0UGl4ZWxzKCd4Jyk7XG4gICAgdmFyIHR5ID0gY3kgKyBvcmlnaW5ZLmdldFBpeGVscygneScpO1xuICAgIGN0eC50cmFuc2xhdGUodHgsIHR5KTtcbiAgICBjdHgucm90YXRlKGFuZ2xlLmdldFJhZGlhbnMoKSk7XG4gICAgY3R4LnRyYW5zbGF0ZSgtdHgsIC10eSk7XG4gIH1cblxuICB1bmFwcGx5KGN0eCkge1xuICAgIHZhciB7XG4gICAgICBjeCxcbiAgICAgIGN5LFxuICAgICAgb3JpZ2luWCxcbiAgICAgIG9yaWdpblksXG4gICAgICBhbmdsZVxuICAgIH0gPSB0aGlzO1xuICAgIHZhciB0eCA9IGN4ICsgb3JpZ2luWC5nZXRQaXhlbHMoJ3gnKTtcbiAgICB2YXIgdHkgPSBjeSArIG9yaWdpblkuZ2V0UGl4ZWxzKCd5Jyk7XG4gICAgY3R4LnRyYW5zbGF0ZSh0eCwgdHkpO1xuICAgIGN0eC5yb3RhdGUoLTEuMCAqIGFuZ2xlLmdldFJhZGlhbnMoKSk7XG4gICAgY3R4LnRyYW5zbGF0ZSgtdHgsIC10eSk7XG4gIH1cblxuICBhcHBseVRvUG9pbnQocG9pbnQpIHtcbiAgICB2YXIge1xuICAgICAgY3gsXG4gICAgICBjeSxcbiAgICAgIGFuZ2xlXG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIHJhZCA9IGFuZ2xlLmdldFJhZGlhbnMoKTtcbiAgICBwb2ludC5hcHBseVRyYW5zZm9ybShbMSwgMCwgMCwgMSwgY3ggfHwgMC4wLCBjeSB8fCAwLjAgLy8gdGhpcy5wLnlcbiAgICBdKTtcbiAgICBwb2ludC5hcHBseVRyYW5zZm9ybShbTWF0aC5jb3MocmFkKSwgTWF0aC5zaW4ocmFkKSwgLU1hdGguc2luKHJhZCksIE1hdGguY29zKHJhZCksIDAsIDBdKTtcbiAgICBwb2ludC5hcHBseVRyYW5zZm9ybShbMSwgMCwgMCwgMSwgLWN4IHx8IDAuMCwgLWN5IHx8IDAuMCAvLyAtdGhpcy5wLnlcbiAgICBdKTtcbiAgfVxuXG59XG5cbmNsYXNzIFNjYWxlIHtcbiAgY29uc3RydWN0b3IoXywgc2NhbGUsIHRyYW5zZm9ybU9yaWdpbikge1xuICAgIHRoaXMudHlwZSA9ICdzY2FsZSc7XG4gICAgdGhpcy5zY2FsZSA9IG51bGw7XG4gICAgdGhpcy5vcmlnaW5YID0gbnVsbDtcbiAgICB0aGlzLm9yaWdpblkgPSBudWxsO1xuICAgIHZhciBzY2FsZVNpemUgPSBQb2ludC5wYXJzZVNjYWxlKHNjYWxlKTsgLy8gV29ya2Fyb3VuZCBmb3Igbm9kZS1jYW52YXNcblxuICAgIGlmIChzY2FsZVNpemUueCA9PT0gMCB8fCBzY2FsZVNpemUueSA9PT0gMCkge1xuICAgICAgc2NhbGVTaXplLnggPSBQU0VVRE9fWkVSTztcbiAgICAgIHNjYWxlU2l6ZS55ID0gUFNFVURPX1pFUk87XG4gICAgfVxuXG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlU2l6ZTtcbiAgICB0aGlzLm9yaWdpblggPSB0cmFuc2Zvcm1PcmlnaW5bMF07XG4gICAgdGhpcy5vcmlnaW5ZID0gdHJhbnNmb3JtT3JpZ2luWzFdO1xuICB9XG5cbiAgYXBwbHkoY3R4KSB7XG4gICAgdmFyIHtcbiAgICAgIHNjYWxlOiB7XG4gICAgICAgIHgsXG4gICAgICAgIHlcbiAgICAgIH0sXG4gICAgICBvcmlnaW5YLFxuICAgICAgb3JpZ2luWVxuICAgIH0gPSB0aGlzO1xuICAgIHZhciB0eCA9IG9yaWdpblguZ2V0UGl4ZWxzKCd4Jyk7XG4gICAgdmFyIHR5ID0gb3JpZ2luWS5nZXRQaXhlbHMoJ3knKTtcbiAgICBjdHgudHJhbnNsYXRlKHR4LCB0eSk7XG4gICAgY3R4LnNjYWxlKHgsIHkgfHwgeCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgtdHgsIC10eSk7XG4gIH1cblxuICB1bmFwcGx5KGN0eCkge1xuICAgIHZhciB7XG4gICAgICBzY2FsZToge1xuICAgICAgICB4LFxuICAgICAgICB5XG4gICAgICB9LFxuICAgICAgb3JpZ2luWCxcbiAgICAgIG9yaWdpbllcbiAgICB9ID0gdGhpcztcbiAgICB2YXIgdHggPSBvcmlnaW5YLmdldFBpeGVscygneCcpO1xuICAgIHZhciB0eSA9IG9yaWdpblkuZ2V0UGl4ZWxzKCd5Jyk7XG4gICAgY3R4LnRyYW5zbGF0ZSh0eCwgdHkpO1xuICAgIGN0eC5zY2FsZSgxLjAgLyB4LCAxLjAgLyB5IHx8IHgpO1xuICAgIGN0eC50cmFuc2xhdGUoLXR4LCAtdHkpO1xuICB9XG5cbiAgYXBwbHlUb1BvaW50KHBvaW50KSB7XG4gICAgdmFyIHtcbiAgICAgIHgsXG4gICAgICB5XG4gICAgfSA9IHRoaXMuc2NhbGU7XG4gICAgcG9pbnQuYXBwbHlUcmFuc2Zvcm0oW3ggfHwgMC4wLCAwLCAwLCB5IHx8IDAuMCwgMCwgMF0pO1xuICB9XG5cbn1cblxuY2xhc3MgTWF0cml4IHtcbiAgY29uc3RydWN0b3IoXywgbWF0cml4LCB0cmFuc2Zvcm1PcmlnaW4pIHtcbiAgICB0aGlzLnR5cGUgPSAnbWF0cml4JztcbiAgICB0aGlzLm1hdHJpeCA9IFtdO1xuICAgIHRoaXMub3JpZ2luWCA9IG51bGw7XG4gICAgdGhpcy5vcmlnaW5ZID0gbnVsbDtcbiAgICB0aGlzLm1hdHJpeCA9IHRvTnVtYmVycyhtYXRyaXgpO1xuICAgIHRoaXMub3JpZ2luWCA9IHRyYW5zZm9ybU9yaWdpblswXTtcbiAgICB0aGlzLm9yaWdpblkgPSB0cmFuc2Zvcm1PcmlnaW5bMV07XG4gIH1cblxuICBhcHBseShjdHgpIHtcbiAgICB2YXIge1xuICAgICAgb3JpZ2luWCxcbiAgICAgIG9yaWdpblksXG4gICAgICBtYXRyaXhcbiAgICB9ID0gdGhpcztcbiAgICB2YXIgdHggPSBvcmlnaW5YLmdldFBpeGVscygneCcpO1xuICAgIHZhciB0eSA9IG9yaWdpblkuZ2V0UGl4ZWxzKCd5Jyk7XG4gICAgY3R4LnRyYW5zbGF0ZSh0eCwgdHkpO1xuICAgIGN0eC50cmFuc2Zvcm0obWF0cml4WzBdLCBtYXRyaXhbMV0sIG1hdHJpeFsyXSwgbWF0cml4WzNdLCBtYXRyaXhbNF0sIG1hdHJpeFs1XSk7XG4gICAgY3R4LnRyYW5zbGF0ZSgtdHgsIC10eSk7XG4gIH1cblxuICB1bmFwcGx5KGN0eCkge1xuICAgIHZhciB7XG4gICAgICBvcmlnaW5YLFxuICAgICAgb3JpZ2luWSxcbiAgICAgIG1hdHJpeFxuICAgIH0gPSB0aGlzO1xuICAgIHZhciBhID0gbWF0cml4WzBdO1xuICAgIHZhciBiID0gbWF0cml4WzJdO1xuICAgIHZhciBjID0gbWF0cml4WzRdO1xuICAgIHZhciBkID0gbWF0cml4WzFdO1xuICAgIHZhciBlID0gbWF0cml4WzNdO1xuICAgIHZhciBmID0gbWF0cml4WzVdO1xuICAgIHZhciBnID0gMC4wO1xuICAgIHZhciBoID0gMC4wO1xuICAgIHZhciBpID0gMS4wO1xuICAgIHZhciBkZXQgPSAxIC8gKGEgKiAoZSAqIGkgLSBmICogaCkgLSBiICogKGQgKiBpIC0gZiAqIGcpICsgYyAqIChkICogaCAtIGUgKiBnKSk7XG4gICAgdmFyIHR4ID0gb3JpZ2luWC5nZXRQaXhlbHMoJ3gnKTtcbiAgICB2YXIgdHkgPSBvcmlnaW5ZLmdldFBpeGVscygneScpO1xuICAgIGN0eC50cmFuc2xhdGUodHgsIHR5KTtcbiAgICBjdHgudHJhbnNmb3JtKGRldCAqIChlICogaSAtIGYgKiBoKSwgZGV0ICogKGYgKiBnIC0gZCAqIGkpLCBkZXQgKiAoYyAqIGggLSBiICogaSksIGRldCAqIChhICogaSAtIGMgKiBnKSwgZGV0ICogKGIgKiBmIC0gYyAqIGUpLCBkZXQgKiAoYyAqIGQgLSBhICogZikpO1xuICAgIGN0eC50cmFuc2xhdGUoLXR4LCAtdHkpO1xuICB9XG5cbiAgYXBwbHlUb1BvaW50KHBvaW50KSB7XG4gICAgcG9pbnQuYXBwbHlUcmFuc2Zvcm0odGhpcy5tYXRyaXgpO1xuICB9XG5cbn1cblxuY2xhc3MgU2tldyBleHRlbmRzIE1hdHJpeCB7XG4gIGNvbnN0cnVjdG9yKGRvY3VtZW50LCBza2V3LCB0cmFuc2Zvcm1PcmlnaW4pIHtcbiAgICBzdXBlcihkb2N1bWVudCwgc2tldywgdHJhbnNmb3JtT3JpZ2luKTtcbiAgICB0aGlzLnR5cGUgPSAnc2tldyc7XG4gICAgdGhpcy5hbmdsZSA9IG51bGw7XG4gICAgdGhpcy5hbmdsZSA9IG5ldyBQcm9wZXJ0eShkb2N1bWVudCwgJ2FuZ2xlJywgc2tldyk7XG4gIH1cblxufVxuXG5jbGFzcyBTa2V3WCBleHRlbmRzIFNrZXcge1xuICBjb25zdHJ1Y3Rvcihkb2N1bWVudCwgc2tldywgdHJhbnNmb3JtT3JpZ2luKSB7XG4gICAgc3VwZXIoZG9jdW1lbnQsIHNrZXcsIHRyYW5zZm9ybU9yaWdpbik7XG4gICAgdGhpcy50eXBlID0gJ3NrZXdYJztcbiAgICB0aGlzLm1hdHJpeCA9IFsxLCAwLCBNYXRoLnRhbih0aGlzLmFuZ2xlLmdldFJhZGlhbnMoKSksIDEsIDAsIDBdO1xuICB9XG5cbn1cblxuY2xhc3MgU2tld1kgZXh0ZW5kcyBTa2V3IHtcbiAgY29uc3RydWN0b3IoZG9jdW1lbnQsIHNrZXcsIHRyYW5zZm9ybU9yaWdpbikge1xuICAgIHN1cGVyKGRvY3VtZW50LCBza2V3LCB0cmFuc2Zvcm1PcmlnaW4pO1xuICAgIHRoaXMudHlwZSA9ICdza2V3WSc7XG4gICAgdGhpcy5tYXRyaXggPSBbMSwgTWF0aC50YW4odGhpcy5hbmdsZS5nZXRSYWRpYW5zKCkpLCAwLCAxLCAwLCAwXTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHBhcnNlVHJhbnNmb3Jtcyh0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGNvbXByZXNzU3BhY2VzKHRyYW5zZm9ybSkudHJpbSgpLnJlcGxhY2UoL1xcKShbYS16QS1aXSkvZywgJykgJDEnKS5yZXBsYWNlKC9cXCkoXFxzPyxcXHM/KS9nLCAnKSAnKS5zcGxpdCgvXFxzKD89W2Etel0pLyk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICB2YXIgW3R5cGUsIHZhbHVlXSA9IHRyYW5zZm9ybS5zcGxpdCgnKCcpO1xuICByZXR1cm4gW3R5cGUudHJpbSgpLCB2YWx1ZS50cmltKCkucmVwbGFjZSgnKScsICcnKV07XG59XG5cbmNsYXNzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKGRvY3VtZW50LCB0cmFuc2Zvcm0sIHRyYW5zZm9ybU9yaWdpbikge1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICB0aGlzLnRyYW5zZm9ybXMgPSBbXTtcbiAgICB2YXIgZGF0YSA9IHBhcnNlVHJhbnNmb3Jtcyh0cmFuc2Zvcm0pO1xuICAgIGRhdGEuZm9yRWFjaCh0cmFuc2Zvcm0gPT4ge1xuICAgICAgaWYgKHRyYW5zZm9ybSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIFt0eXBlLCB2YWx1ZV0gPSBwYXJzZVRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICAgICAgdmFyIFRyYW5zZm9ybVR5cGUgPSBUcmFuc2Zvcm0udHJhbnNmb3JtVHlwZXNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgVHJhbnNmb3JtVHlwZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1zLnB1c2gobmV3IFRyYW5zZm9ybVR5cGUodGhpcy5kb2N1bWVudCwgdmFsdWUsIHRyYW5zZm9ybU9yaWdpbikpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21FbGVtZW50KGRvY3VtZW50LCBlbGVtZW50KSB7XG4gICAgdmFyIHRyYW5zZm9ybVN0eWxlID0gZWxlbWVudC5nZXRTdHlsZSgndHJhbnNmb3JtJywgZmFsc2UsIHRydWUpO1xuICAgIHZhciBbdHJhbnNmb3JtT3JpZ2luWFByb3BlcnR5LCB0cmFuc2Zvcm1PcmlnaW5ZUHJvcGVydHkgPSB0cmFuc2Zvcm1PcmlnaW5YUHJvcGVydHldID0gZWxlbWVudC5nZXRTdHlsZSgndHJhbnNmb3JtLW9yaWdpbicsIGZhbHNlLCB0cnVlKS5zcGxpdCgpO1xuICAgIHZhciB0cmFuc2Zvcm1PcmlnaW4gPSBbdHJhbnNmb3JtT3JpZ2luWFByb3BlcnR5LCB0cmFuc2Zvcm1PcmlnaW5ZUHJvcGVydHldO1xuXG4gICAgaWYgKHRyYW5zZm9ybVN0eWxlLmhhc1ZhbHVlKCkpIHtcbiAgICAgIHJldHVybiBuZXcgVHJhbnNmb3JtKGRvY3VtZW50LCB0cmFuc2Zvcm1TdHlsZS5nZXRTdHJpbmcoKSwgdHJhbnNmb3JtT3JpZ2luKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGFwcGx5KGN0eCkge1xuICAgIHZhciB7XG4gICAgICB0cmFuc2Zvcm1zXG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIGxlbiA9IHRyYW5zZm9ybXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgdHJhbnNmb3Jtc1tpXS5hcHBseShjdHgpO1xuICAgIH1cbiAgfVxuXG4gIHVuYXBwbHkoY3R4KSB7XG4gICAgdmFyIHtcbiAgICAgIHRyYW5zZm9ybXNcbiAgICB9ID0gdGhpcztcbiAgICB2YXIgbGVuID0gdHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gbGVuIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRyYW5zZm9ybXNbaV0udW5hcHBseShjdHgpO1xuICAgIH1cbiAgfSAvLyBUT0RPOiBhcHBseVRvUG9pbnQgdW51c2VkIC4uLiByZW1vdmU/XG5cblxuICBhcHBseVRvUG9pbnQocG9pbnQpIHtcbiAgICB2YXIge1xuICAgICAgdHJhbnNmb3Jtc1xuICAgIH0gPSB0aGlzO1xuICAgIHZhciBsZW4gPSB0cmFuc2Zvcm1zLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRyYW5zZm9ybXNbaV0uYXBwbHlUb1BvaW50KHBvaW50KTtcbiAgICB9XG4gIH1cblxufVxuVHJhbnNmb3JtLnRyYW5zZm9ybVR5cGVzID0ge1xuICB0cmFuc2xhdGU6IFRyYW5zbGF0ZSxcbiAgcm90YXRlOiBSb3RhdGUsXG4gIHNjYWxlOiBTY2FsZSxcbiAgbWF0cml4OiBNYXRyaXgsXG4gIHNrZXdYOiBTa2V3WCxcbiAgc2tld1k6IFNrZXdZXG59O1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9jdW1lbnQsIG5vZGUpIHtcbiAgICB2YXIgY2FwdHVyZVRleHROb2RlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG4gICAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5jYXB0dXJlVGV4dE5vZGVzID0gY2FwdHVyZVRleHROb2RlcztcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSB7fTtcbiAgICB0aGlzLnN0eWxlcyA9IHt9O1xuICAgIHRoaXMuc3R5bGVzU3BlY2lmaWNpdHkgPSB7fTtcbiAgICB0aGlzLmFuaW1hdGlvbkZyb3plbiA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbWF0aW9uRnJvemVuVmFsdWUgPSAnJztcbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXG4gICAgaWYgKCFub2RlIHx8IG5vZGUubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgIC8vIEVMRU1FTlRfTk9ERVxuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gYWRkIGF0dHJpYnV0ZXNcblxuXG4gICAgQXJyYXkuZnJvbShub2RlLmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0cmlidXRlID0+IHtcbiAgICAgIHZhciBub2RlTmFtZSA9IG5vcm1hbGl6ZUF0dHJpYnV0ZU5hbWUoYXR0cmlidXRlLm5vZGVOYW1lKTtcbiAgICAgIHRoaXMuYXR0cmlidXRlc1tub2RlTmFtZV0gPSBuZXcgUHJvcGVydHkoZG9jdW1lbnQsIG5vZGVOYW1lLCBhdHRyaWJ1dGUudmFsdWUpO1xuICAgIH0pO1xuICAgIHRoaXMuYWRkU3R5bGVzRnJvbVN0eWxlRGVmaW5pdGlvbigpOyAvLyBhZGQgaW5saW5lIHN0eWxlc1xuXG4gICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCdzdHlsZScpLmhhc1ZhbHVlKCkpIHtcbiAgICAgIHZhciBzdHlsZXMgPSB0aGlzLmdldEF0dHJpYnV0ZSgnc3R5bGUnKS5nZXRTdHJpbmcoKS5zcGxpdCgnOycpLm1hcChfID0+IF8udHJpbSgpKTtcbiAgICAgIHN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICAgICAgaWYgKCFzdHlsZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBbbmFtZSwgdmFsdWVdID0gc3R5bGUuc3BsaXQoJzonKS5tYXAoXyA9PiBfLnRyaW0oKSk7XG4gICAgICAgIHRoaXMuc3R5bGVzW25hbWVdID0gbmV3IFByb3BlcnR5KGRvY3VtZW50LCBuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIge1xuICAgICAgZGVmaW5pdGlvbnNcbiAgICB9ID0gZG9jdW1lbnQ7XG4gICAgdmFyIGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJyk7IC8vIGFkZCBpZFxuXG4gICAgaWYgKGlkLmhhc1ZhbHVlKCkpIHtcbiAgICAgIGlmICghZGVmaW5pdGlvbnNbaWQuZ2V0U3RyaW5nKCldKSB7XG4gICAgICAgIGRlZmluaXRpb25zW2lkLmdldFN0cmluZygpXSA9IHRoaXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQXJyYXkuZnJvbShub2RlLmNoaWxkTm9kZXMpLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChjaGlsZE5vZGUpOyAvLyBFTEVNRU5UX05PREVcbiAgICAgIH0gZWxzZSBpZiAoY2FwdHVyZVRleHROb2RlcyAmJiAoY2hpbGROb2RlLm5vZGVUeXBlID09PSAzIHx8IGNoaWxkTm9kZS5ub2RlVHlwZSA9PT0gNCkpIHtcbiAgICAgICAgdmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgICBpZiAodGV4dE5vZGUuZ2V0VGV4dCgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLmFkZENoaWxkKHRleHROb2RlKTsgLy8gVEVYVF9OT0RFXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gICAgdmFyIGNyZWF0ZUlmTm90RXhpc3RzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICB2YXIgYXR0ciA9IHRoaXMuYXR0cmlidXRlc1tuYW1lXTtcblxuICAgIGlmICghYXR0ciAmJiBjcmVhdGVJZk5vdEV4aXN0cykge1xuICAgICAgdmFyIF9hdHRyID0gbmV3IFByb3BlcnR5KHRoaXMuZG9jdW1lbnQsIG5hbWUsICcnKTtcblxuICAgICAgdGhpcy5hdHRyaWJ1dGVzW25hbWVdID0gX2F0dHI7XG4gICAgICByZXR1cm4gX2F0dHI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHIgfHwgUHJvcGVydHkuZW1wdHkodGhpcy5kb2N1bWVudCk7XG4gIH1cblxuICBnZXRIcmVmQXR0cmlidXRlKCkge1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmF0dHJpYnV0ZXMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJyB8fCBrZXkuZW5kc1dpdGgoJzpocmVmJykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9wZXJ0eS5lbXB0eSh0aGlzLmRvY3VtZW50KTtcbiAgfVxuXG4gIGdldFN0eWxlKG5hbWUpIHtcbiAgICB2YXIgY3JlYXRlSWZOb3RFeGlzdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgIHZhciBza2lwQW5jZXN0b3JzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcbiAgICB2YXIgc3R5bGUgPSB0aGlzLnN0eWxlc1tuYW1lXTtcblxuICAgIGlmIChzdHlsZSkge1xuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIHZhciBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XG5cbiAgICBpZiAoYXR0ciAhPT0gbnVsbCAmJiBhdHRyICE9PSB2b2lkIDAgJiYgYXR0ci5oYXNWYWx1ZSgpKSB7XG4gICAgICB0aGlzLnN0eWxlc1tuYW1lXSA9IGF0dHI7IC8vIG1vdmUgdXAgdG8gbWUgdG8gY2FjaGVcblxuICAgICAgcmV0dXJuIGF0dHI7XG4gICAgfVxuXG4gICAgaWYgKCFza2lwQW5jZXN0b3JzKSB7XG4gICAgICB2YXIge1xuICAgICAgICBwYXJlbnRcbiAgICAgIH0gPSB0aGlzO1xuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHZhciBwYXJlbnRTdHlsZSA9IHBhcmVudC5nZXRTdHlsZShuYW1lKTtcblxuICAgICAgICBpZiAocGFyZW50U3R5bGUgIT09IG51bGwgJiYgcGFyZW50U3R5bGUgIT09IHZvaWQgMCAmJiBwYXJlbnRTdHlsZS5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFN0eWxlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNyZWF0ZUlmTm90RXhpc3RzKSB7XG4gICAgICB2YXIgX3N0eWxlID0gbmV3IFByb3BlcnR5KHRoaXMuZG9jdW1lbnQsIG5hbWUsICcnKTtcblxuICAgICAgdGhpcy5zdHlsZXNbbmFtZV0gPSBfc3R5bGU7XG4gICAgICByZXR1cm4gX3N0eWxlO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZSB8fCBQcm9wZXJ0eS5lbXB0eSh0aGlzLmRvY3VtZW50KTtcbiAgfVxuXG4gIHJlbmRlcihjdHgpIHtcbiAgICAvLyBkb24ndCByZW5kZXIgZGlzcGxheT1ub25lXG4gICAgLy8gZG9uJ3QgcmVuZGVyIHZpc2liaWxpdHk9aGlkZGVuXG4gICAgaWYgKHRoaXMuZ2V0U3R5bGUoJ2Rpc3BsYXknKS5nZXRTdHJpbmcoKSA9PT0gJ25vbmUnIHx8IHRoaXMuZ2V0U3R5bGUoJ3Zpc2liaWxpdHknKS5nZXRTdHJpbmcoKSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgaWYgKHRoaXMuZ2V0U3R5bGUoJ21hc2snKS5oYXNWYWx1ZSgpKSB7XG4gICAgICAvLyBtYXNrXG4gICAgICB2YXIgbWFzayA9IHRoaXMuZ2V0U3R5bGUoJ21hc2snKS5nZXREZWZpbml0aW9uKCk7XG5cbiAgICAgIGlmIChtYXNrKSB7XG4gICAgICAgIHRoaXMuYXBwbHlFZmZlY3RzKGN0eCk7XG4gICAgICAgIG1hc2suYXBwbHkoY3R4LCB0aGlzKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0U3R5bGUoJ2ZpbHRlcicpLmdldFZhbHVlKCdub25lJykgIT09ICdub25lJykge1xuICAgICAgLy8gZmlsdGVyXG4gICAgICB2YXIgZmlsdGVyID0gdGhpcy5nZXRTdHlsZSgnZmlsdGVyJykuZ2V0RGVmaW5pdGlvbigpO1xuXG4gICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgIHRoaXMuYXBwbHlFZmZlY3RzKGN0eCk7XG4gICAgICAgIGZpbHRlci5hcHBseShjdHgsIHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldENvbnRleHQoY3R4KTtcbiAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oY3R4KTtcbiAgICAgIHRoaXMuY2xlYXJDb250ZXh0KGN0eCk7XG4gICAgfVxuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHNldENvbnRleHQoXykgey8vIE5PIFJFTkRFUlxuICB9XG5cbiAgYXBwbHlFZmZlY3RzKGN0eCkge1xuICAgIC8vIHRyYW5zZm9ybVxuICAgIHZhciB0cmFuc2Zvcm0gPSBUcmFuc2Zvcm0uZnJvbUVsZW1lbnQodGhpcy5kb2N1bWVudCwgdGhpcyk7XG5cbiAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICB0cmFuc2Zvcm0uYXBwbHkoY3R4KTtcbiAgICB9IC8vIGNsaXBcblxuXG4gICAgdmFyIGNsaXBQYXRoU3R5bGVQcm9wID0gdGhpcy5nZXRTdHlsZSgnY2xpcC1wYXRoJywgZmFsc2UsIHRydWUpO1xuXG4gICAgaWYgKGNsaXBQYXRoU3R5bGVQcm9wLmhhc1ZhbHVlKCkpIHtcbiAgICAgIHZhciBjbGlwID0gY2xpcFBhdGhTdHlsZVByb3AuZ2V0RGVmaW5pdGlvbigpO1xuXG4gICAgICBpZiAoY2xpcCkge1xuICAgICAgICBjbGlwLmFwcGx5KGN0eCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXJDb250ZXh0KF8pIHsvLyBOTyBSRU5ERVJcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKGN0eCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBjaGlsZC5yZW5kZXIoY3R4KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZENoaWxkKGNoaWxkTm9kZSkge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkTm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQgPyBjaGlsZE5vZGUgOiB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY2hpbGROb2RlKTtcbiAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuXG4gICAgaWYgKCFFbGVtZW50Lmlnbm9yZUNoaWxkVHlwZXMuaW5jbHVkZXMoY2hpbGQudHlwZSkpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgbWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKSB7XG4gICAgdmFyIHtcbiAgICAgIG5vZGVcbiAgICB9ID0gdGhpcztcblxuICAgIGlmICh0eXBlb2Ygbm9kZS5tYXRjaGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gbm9kZS5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVDbGFzc2VzID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJyk7XG5cbiAgICBpZiAoIXN0eWxlQ2xhc3NlcyB8fCBzdHlsZUNsYXNzZXMgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlQ2xhc3Nlcy5zcGxpdCgnICcpLnNvbWUoc3R5bGVDbGFzcyA9PiBcIi5cIi5jb25jYXQoc3R5bGVDbGFzcykgPT09IHNlbGVjdG9yKTtcbiAgfVxuXG4gIGFkZFN0eWxlc0Zyb21TdHlsZURlZmluaXRpb24oKSB7XG4gICAgdmFyIHtcbiAgICAgIHN0eWxlcyxcbiAgICAgIHN0eWxlc1NwZWNpZmljaXR5XG4gICAgfSA9IHRoaXMuZG9jdW1lbnQ7XG5cbiAgICBmb3IgKHZhciBzZWxlY3RvciBpbiBzdHlsZXMpIHtcbiAgICAgIGlmICghc2VsZWN0b3Iuc3RhcnRzV2l0aCgnQCcpICYmIHRoaXMubWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKSkge1xuICAgICAgICB2YXIgc3R5bGUgPSBzdHlsZXNbc2VsZWN0b3JdO1xuICAgICAgICB2YXIgc3BlY2lmaWNpdHkgPSBzdHlsZXNTcGVjaWZpY2l0eVtzZWxlY3Rvcl07XG5cbiAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBzdHlsZSkge1xuICAgICAgICAgICAgdmFyIGV4aXN0aW5nU3BlY2lmaWNpdHkgPSB0aGlzLnN0eWxlc1NwZWNpZmljaXR5W25hbWVdO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGV4aXN0aW5nU3BlY2lmaWNpdHkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIGV4aXN0aW5nU3BlY2lmaWNpdHkgPSAnMDAwJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNwZWNpZmljaXR5ID49IGV4aXN0aW5nU3BlY2lmaWNpdHkpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdHlsZXNbbmFtZV0gPSBzdHlsZVtuYW1lXTtcbiAgICAgICAgICAgICAgdGhpcy5zdHlsZXNTcGVjaWZpY2l0eVtuYW1lXSA9IHNwZWNpZmljaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVN0eWxlcyhlbGVtZW50LCBpZ25vcmVTdHlsZXMpIHtcbiAgICB2YXIgdG9SZXN0b3JlID0gaWdub3JlU3R5bGVzLnJlZHVjZSgodG9SZXN0b3JlLCBuYW1lKSA9PiB7XG4gICAgICB2YXIgc3R5bGVQcm9wID0gZWxlbWVudC5nZXRTdHlsZShuYW1lKTtcblxuICAgICAgaWYgKCFzdHlsZVByb3AuaGFzVmFsdWUoKSkge1xuICAgICAgICByZXR1cm4gdG9SZXN0b3JlO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBzdHlsZVByb3AuZ2V0U3RyaW5nKCk7XG4gICAgICBzdHlsZVByb3Auc2V0VmFsdWUoJycpO1xuICAgICAgcmV0dXJuIFsuLi50b1Jlc3RvcmUsIFtuYW1lLCB2YWx1ZV1dO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gdG9SZXN0b3JlO1xuICB9XG5cbiAgcmVzdG9yZVN0eWxlcyhlbGVtZW50LCBzdHlsZXMpIHtcbiAgICBzdHlsZXMuZm9yRWFjaCgoX3JlZikgPT4ge1xuICAgICAgdmFyIFtuYW1lLCB2YWx1ZV0gPSBfcmVmO1xuICAgICAgZWxlbWVudC5nZXRTdHlsZShuYW1lLCB0cnVlKS5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxufVxuRWxlbWVudC5pZ25vcmVDaGlsZFR5cGVzID0gWyd0aXRsZSddO1xuXG5jbGFzcyBVbmtub3duRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb2N1bWVudCwgbm9kZSwgY2FwdHVyZVRleHROb2Rlcykge1xuICAgIHN1cGVyKGRvY3VtZW50LCBub2RlLCBjYXB0dXJlVGV4dE5vZGVzKTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHdyYXBGb250RmFtaWx5KGZvbnRGYW1pbHkpIHtcbiAgdmFyIHRyaW1tZWQgPSBmb250RmFtaWx5LnRyaW0oKTtcbiAgcmV0dXJuIC9eKCd8XCIpLy50ZXN0KHRyaW1tZWQpID8gdHJpbW1lZCA6IFwiXFxcIlwiLmNvbmNhdCh0cmltbWVkLCBcIlxcXCJcIik7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVGb250RmFtaWx5KGZvbnRGYW1pbHkpIHtcbiAgcmV0dXJuIHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyA/IGZvbnRGYW1pbHkgOiBmb250RmFtaWx5LnRyaW0oKS5zcGxpdCgnLCcpLm1hcCh3cmFwRm9udEZhbWlseSkuam9pbignLCcpO1xufVxuLyoqXHJcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9mb250LXN0eWxlXHJcbiAqIEBwYXJhbSBmb250U3R5bGVcclxuICogQHJldHVybnMgQ1NTIGZvbnQgc3R5bGUuXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIHByZXBhcmVGb250U3R5bGUoZm9udFN0eWxlKSB7XG4gIGlmICghZm9udFN0eWxlKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIHRhcmdldEZvbnRTdHlsZSA9IGZvbnRTdHlsZS50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICBzd2l0Y2ggKHRhcmdldEZvbnRTdHlsZSkge1xuICAgIGNhc2UgJ25vcm1hbCc6XG4gICAgY2FzZSAnaXRhbGljJzpcbiAgICBjYXNlICdvYmxpcXVlJzpcbiAgICBjYXNlICdpbmhlcml0JzpcbiAgICBjYXNlICdpbml0aWFsJzpcbiAgICBjYXNlICd1bnNldCc6XG4gICAgICByZXR1cm4gdGFyZ2V0Rm9udFN0eWxlO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGlmICgvXm9ibGlxdWVcXHMrKC18KVxcZCtkZWckLy50ZXN0KHRhcmdldEZvbnRTdHlsZSkpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldEZvbnRTdHlsZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcclxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2ZvbnQtd2VpZ2h0XHJcbiAqIEBwYXJhbSBmb250V2VpZ2h0XHJcbiAqIEByZXR1cm5zIENTUyBmb250IHdlaWdodC5cclxuICovXG5cblxuZnVuY3Rpb24gcHJlcGFyZUZvbnRXZWlnaHQoZm9udFdlaWdodCkge1xuICBpZiAoIWZvbnRXZWlnaHQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgdGFyZ2V0Rm9udFdlaWdodCA9IGZvbnRXZWlnaHQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgc3dpdGNoICh0YXJnZXRGb250V2VpZ2h0KSB7XG4gICAgY2FzZSAnbm9ybWFsJzpcbiAgICBjYXNlICdib2xkJzpcbiAgICBjYXNlICdsaWdodGVyJzpcbiAgICBjYXNlICdib2xkZXInOlxuICAgIGNhc2UgJ2luaGVyaXQnOlxuICAgIGNhc2UgJ2luaXRpYWwnOlxuICAgIGNhc2UgJ3Vuc2V0JzpcbiAgICAgIHJldHVybiB0YXJnZXRGb250V2VpZ2h0O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGlmICgvXltcXGQuXSskLy50ZXN0KHRhcmdldEZvbnRXZWlnaHQpKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXRGb250V2VpZ2h0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuY2xhc3MgRm9udCB7XG4gIGNvbnN0cnVjdG9yKGZvbnRTdHlsZSwgZm9udFZhcmlhbnQsIGZvbnRXZWlnaHQsIGZvbnRTaXplLCBmb250RmFtaWx5LCBpbmhlcml0KSB7XG4gICAgdmFyIGluaGVyaXRGb250ID0gaW5oZXJpdCA/IHR5cGVvZiBpbmhlcml0ID09PSAnc3RyaW5nJyA/IEZvbnQucGFyc2UoaW5oZXJpdCkgOiBpbmhlcml0IDoge307XG4gICAgdGhpcy5mb250RmFtaWx5ID0gZm9udEZhbWlseSB8fCBpbmhlcml0Rm9udC5mb250RmFtaWx5O1xuICAgIHRoaXMuZm9udFNpemUgPSBmb250U2l6ZSB8fCBpbmhlcml0Rm9udC5mb250U2l6ZTtcbiAgICB0aGlzLmZvbnRTdHlsZSA9IGZvbnRTdHlsZSB8fCBpbmhlcml0Rm9udC5mb250U3R5bGU7XG4gICAgdGhpcy5mb250V2VpZ2h0ID0gZm9udFdlaWdodCB8fCBpbmhlcml0Rm9udC5mb250V2VpZ2h0O1xuICAgIHRoaXMuZm9udFZhcmlhbnQgPSBmb250VmFyaWFudCB8fCBpbmhlcml0Rm9udC5mb250VmFyaWFudDtcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZSgpIHtcbiAgICB2YXIgZm9udCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gICAgdmFyIGluaGVyaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgZm9udFN0eWxlID0gJyc7XG4gICAgdmFyIGZvbnRWYXJpYW50ID0gJyc7XG4gICAgdmFyIGZvbnRXZWlnaHQgPSAnJztcbiAgICB2YXIgZm9udFNpemUgPSAnJztcbiAgICB2YXIgZm9udEZhbWlseSA9ICcnO1xuICAgIHZhciBwYXJ0cyA9IGNvbXByZXNzU3BhY2VzKGZvbnQpLnRyaW0oKS5zcGxpdCgnICcpO1xuICAgIHZhciBzZXQgPSB7XG4gICAgICBmb250U2l6ZTogZmFsc2UsXG4gICAgICBmb250U3R5bGU6IGZhbHNlLFxuICAgICAgZm9udFdlaWdodDogZmFsc2UsXG4gICAgICBmb250VmFyaWFudDogZmFsc2VcbiAgICB9O1xuICAgIHBhcnRzLmZvckVhY2gocGFydCA9PiB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSAhc2V0LmZvbnRTdHlsZSAmJiBGb250LnN0eWxlcy5pbmNsdWRlcyhwYXJ0KTpcbiAgICAgICAgICBpZiAocGFydCAhPT0gJ2luaGVyaXQnKSB7XG4gICAgICAgICAgICBmb250U3R5bGUgPSBwYXJ0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldC5mb250U3R5bGUgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgIXNldC5mb250VmFyaWFudCAmJiBGb250LnZhcmlhbnRzLmluY2x1ZGVzKHBhcnQpOlxuICAgICAgICAgIGlmIChwYXJ0ICE9PSAnaW5oZXJpdCcpIHtcbiAgICAgICAgICAgIGZvbnRWYXJpYW50ID0gcGFydDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXQuZm9udFN0eWxlID0gdHJ1ZTtcbiAgICAgICAgICBzZXQuZm9udFZhcmlhbnQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgIXNldC5mb250V2VpZ2h0ICYmIEZvbnQud2VpZ2h0cy5pbmNsdWRlcyhwYXJ0KTpcbiAgICAgICAgICBpZiAocGFydCAhPT0gJ2luaGVyaXQnKSB7XG4gICAgICAgICAgICBmb250V2VpZ2h0ID0gcGFydDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXQuZm9udFN0eWxlID0gdHJ1ZTtcbiAgICAgICAgICBzZXQuZm9udFZhcmlhbnQgPSB0cnVlO1xuICAgICAgICAgIHNldC5mb250V2VpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICFzZXQuZm9udFNpemU6XG4gICAgICAgICAgaWYgKHBhcnQgIT09ICdpbmhlcml0Jykge1xuICAgICAgICAgICAgW2ZvbnRTaXplXSA9IHBhcnQuc3BsaXQoJy8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXQuZm9udFN0eWxlID0gdHJ1ZTtcbiAgICAgICAgICBzZXQuZm9udFZhcmlhbnQgPSB0cnVlO1xuICAgICAgICAgIHNldC5mb250V2VpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICBzZXQuZm9udFNpemUgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKHBhcnQgIT09ICdpbmhlcml0Jykge1xuICAgICAgICAgICAgZm9udEZhbWlseSArPSBwYXJ0O1xuICAgICAgICAgIH1cblxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXcgRm9udChmb250U3R5bGUsIGZvbnRWYXJpYW50LCBmb250V2VpZ2h0LCBmb250U2l6ZSwgZm9udEZhbWlseSwgaW5oZXJpdCk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gW3ByZXBhcmVGb250U3R5bGUodGhpcy5mb250U3R5bGUpLCB0aGlzLmZvbnRWYXJpYW50LCBwcmVwYXJlRm9udFdlaWdodCh0aGlzLmZvbnRXZWlnaHQpLCB0aGlzLmZvbnRTaXplLCAvLyBXcmFwIGZvbnRGYW1pbHkgb25seSBvbiBub2RlanMgYW5kIG9ubHkgZm9yIGNhbnZhcy5jdHhcbiAgICBwcmVwYXJlRm9udEZhbWlseSh0aGlzLmZvbnRGYW1pbHkpXS5qb2luKCcgJykudHJpbSgpO1xuICB9XG5cbn1cbkZvbnQuc3R5bGVzID0gJ25vcm1hbHxpdGFsaWN8b2JsaXF1ZXxpbmhlcml0JztcbkZvbnQudmFyaWFudHMgPSAnbm9ybWFsfHNtYWxsLWNhcHN8aW5oZXJpdCc7XG5Gb250LndlaWdodHMgPSAnbm9ybWFsfGJvbGR8Ym9sZGVyfGxpZ2h0ZXJ8MTAwfDIwMHwzMDB8NDAwfDUwMHw2MDB8NzAwfDgwMHw5MDB8aW5oZXJpdCc7XG5cbmNsYXNzIEJvdW5kaW5nQm94IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdmFyIHgxID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBOdW1iZXIuTmFOO1xuICAgIHZhciB5MSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogTnVtYmVyLk5hTjtcbiAgICB2YXIgeDIgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IE51bWJlci5OYU47XG4gICAgdmFyIHkyID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBOdW1iZXIuTmFOO1xuICAgIHRoaXMueDEgPSB4MTtcbiAgICB0aGlzLnkxID0geTE7XG4gICAgdGhpcy54MiA9IHgyO1xuICAgIHRoaXMueTIgPSB5MjtcbiAgICB0aGlzLmFkZFBvaW50KHgxLCB5MSk7XG4gICAgdGhpcy5hZGRQb2ludCh4MiwgeTIpO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMueDE7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy55MTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy54MiAtIHRoaXMueDE7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnkyIC0gdGhpcy55MTtcbiAgfVxuXG4gIGFkZFBvaW50KHgsIHkpIHtcbiAgICBpZiAodHlwZW9mIHggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoaXNOYU4odGhpcy54MSkgfHwgaXNOYU4odGhpcy54MikpIHtcbiAgICAgICAgdGhpcy54MSA9IHg7XG4gICAgICAgIHRoaXMueDIgPSB4O1xuICAgICAgfVxuXG4gICAgICBpZiAoeCA8IHRoaXMueDEpIHtcbiAgICAgICAgdGhpcy54MSA9IHg7XG4gICAgICB9XG5cbiAgICAgIGlmICh4ID4gdGhpcy54Mikge1xuICAgICAgICB0aGlzLngyID0geDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoaXNOYU4odGhpcy55MSkgfHwgaXNOYU4odGhpcy55MikpIHtcbiAgICAgICAgdGhpcy55MSA9IHk7XG4gICAgICAgIHRoaXMueTIgPSB5O1xuICAgICAgfVxuXG4gICAgICBpZiAoeSA8IHRoaXMueTEpIHtcbiAgICAgICAgdGhpcy55MSA9IHk7XG4gICAgICB9XG5cbiAgICAgIGlmICh5ID4gdGhpcy55Mikge1xuICAgICAgICB0aGlzLnkyID0geTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRYKHgpIHtcbiAgICB0aGlzLmFkZFBvaW50KHgsIG51bGwpO1xuICB9XG5cbiAgYWRkWSh5KSB7XG4gICAgdGhpcy5hZGRQb2ludChudWxsLCB5KTtcbiAgfVxuXG4gIGFkZEJvdW5kaW5nQm94KGJvdW5kaW5nQm94KSB7XG4gICAgaWYgKCFib3VuZGluZ0JveCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB7XG4gICAgICB4MSxcbiAgICAgIHkxLFxuICAgICAgeDIsXG4gICAgICB5MlxuICAgIH0gPSBib3VuZGluZ0JveDtcbiAgICB0aGlzLmFkZFBvaW50KHgxLCB5MSk7XG4gICAgdGhpcy5hZGRQb2ludCh4MiwgeTIpO1xuICB9XG5cbiAgc3VtQ3ViaWModCwgcDAsIHAxLCBwMiwgcDMpIHtcbiAgICByZXR1cm4gTWF0aC5wb3coMSAtIHQsIDMpICogcDAgKyAzICogTWF0aC5wb3coMSAtIHQsIDIpICogdCAqIHAxICsgMyAqICgxIC0gdCkgKiBNYXRoLnBvdyh0LCAyKSAqIHAyICsgTWF0aC5wb3codCwgMykgKiBwMztcbiAgfVxuXG4gIGJlemllckN1cnZlQWRkKGZvclgsIHAwLCBwMSwgcDIsIHAzKSB7XG4gICAgdmFyIGIgPSA2ICogcDAgLSAxMiAqIHAxICsgNiAqIHAyO1xuICAgIHZhciBhID0gLTMgKiBwMCArIDkgKiBwMSAtIDkgKiBwMiArIDMgKiBwMztcbiAgICB2YXIgYyA9IDMgKiBwMSAtIDMgKiBwMDtcblxuICAgIGlmIChhID09PSAwKSB7XG4gICAgICBpZiAoYiA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0ID0gLWMgLyBiO1xuXG4gICAgICBpZiAoMCA8IHQgJiYgdCA8IDEpIHtcbiAgICAgICAgaWYgKGZvclgpIHtcbiAgICAgICAgICB0aGlzLmFkZFgodGhpcy5zdW1DdWJpYyh0LCBwMCwgcDEsIHAyLCBwMykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkWSh0aGlzLnN1bUN1YmljKHQsIHAwLCBwMSwgcDIsIHAzKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBiMmFjID0gTWF0aC5wb3coYiwgMikgLSA0ICogYyAqIGE7XG5cbiAgICBpZiAoYjJhYyA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdDEgPSAoLWIgKyBNYXRoLnNxcnQoYjJhYykpIC8gKDIgKiBhKTtcblxuICAgIGlmICgwIDwgdDEgJiYgdDEgPCAxKSB7XG4gICAgICBpZiAoZm9yWCkge1xuICAgICAgICB0aGlzLmFkZFgodGhpcy5zdW1DdWJpYyh0MSwgcDAsIHAxLCBwMiwgcDMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkWSh0aGlzLnN1bUN1YmljKHQxLCBwMCwgcDEsIHAyLCBwMykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB0MiA9ICgtYiAtIE1hdGguc3FydChiMmFjKSkgLyAoMiAqIGEpO1xuXG4gICAgaWYgKDAgPCB0MiAmJiB0MiA8IDEpIHtcbiAgICAgIGlmIChmb3JYKSB7XG4gICAgICAgIHRoaXMuYWRkWCh0aGlzLnN1bUN1YmljKHQyLCBwMCwgcDEsIHAyLCBwMykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRZKHRoaXMuc3VtQ3ViaWModDIsIHAwLCBwMSwgcDIsIHAzKSk7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIGZyb20gaHR0cDovL2Jsb2cuaGFja2Vycy1jYWZlLm5ldC8yMDA5LzA2L2hvdy10by1jYWxjdWxhdGUtYmV6aWVyLWN1cnZlcy1ib3VuZGluZy5odG1sXG5cblxuICBhZGRCZXppZXJDdXJ2ZShwMHgsIHAweSwgcDF4LCBwMXksIHAyeCwgcDJ5LCBwM3gsIHAzeSkge1xuICAgIHRoaXMuYWRkUG9pbnQocDB4LCBwMHkpO1xuICAgIHRoaXMuYWRkUG9pbnQocDN4LCBwM3kpO1xuICAgIHRoaXMuYmV6aWVyQ3VydmVBZGQodHJ1ZSwgcDB4LCBwMXgsIHAyeCwgcDN4KTtcbiAgICB0aGlzLmJlemllckN1cnZlQWRkKGZhbHNlLCBwMHksIHAxeSwgcDJ5LCBwM3kpO1xuICB9XG5cbiAgYWRkUXVhZHJhdGljQ3VydmUocDB4LCBwMHksIHAxeCwgcDF5LCBwMngsIHAyeSkge1xuICAgIHZhciBjcDF4ID0gcDB4ICsgMiAvIDMgKiAocDF4IC0gcDB4KTsgLy8gQ1AxID0gUVAwICsgMi8zICooUVAxLVFQMClcblxuICAgIHZhciBjcDF5ID0gcDB5ICsgMiAvIDMgKiAocDF5IC0gcDB5KTsgLy8gQ1AxID0gUVAwICsgMi8zICooUVAxLVFQMClcblxuICAgIHZhciBjcDJ4ID0gY3AxeCArIDEgLyAzICogKHAyeCAtIHAweCk7IC8vIENQMiA9IENQMSArIDEvMyAqKFFQMi1RUDApXG5cbiAgICB2YXIgY3AyeSA9IGNwMXkgKyAxIC8gMyAqIChwMnkgLSBwMHkpOyAvLyBDUDIgPSBDUDEgKyAxLzMgKihRUDItUVAwKVxuXG4gICAgdGhpcy5hZGRCZXppZXJDdXJ2ZShwMHgsIHAweSwgY3AxeCwgY3AyeCwgY3AxeSwgY3AyeSwgcDJ4LCBwMnkpO1xuICB9XG5cbiAgaXNQb2ludEluQm94KHgsIHkpIHtcbiAgICB2YXIge1xuICAgICAgeDEsXG4gICAgICB5MSxcbiAgICAgIHgyLFxuICAgICAgeTJcbiAgICB9ID0gdGhpcztcbiAgICByZXR1cm4geDEgPD0geCAmJiB4IDw9IHgyICYmIHkxIDw9IHkgJiYgeSA8PSB5MjtcbiAgfVxuXG59XG5cbmNsYXNzIFBhdGhQYXJzZXIgZXh0ZW5kcyBTVkdQYXRoRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHBhdGgpIHtcbiAgICBzdXBlcihwYXRoIC8vIEZpeCBzcGFjZXMgYWZ0ZXIgc2lnbnMuXG4gICAgLnJlcGxhY2UoLyhbK1xcLS5dKVxccysvZ20sICckMScpIC8vIFJlbW92ZSBpbnZhbGlkIHBhcnQuXG4gICAgLnJlcGxhY2UoL1teTW1aekxsSGhWdkNjU3NRcVR0QWFlXFxkXFxzLiwrLV0uKi9nLCAnJykpO1xuICAgIHRoaXMuY29udHJvbCA9IG51bGw7XG4gICAgdGhpcy5zdGFydCA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcbiAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgIHRoaXMuY29tbWFuZHMgPSB0aGlzLmNvbW1hbmRzO1xuICAgIHRoaXMuaSA9IC0xO1xuICAgIHRoaXMucHJldmlvdXNDb21tYW5kID0gbnVsbDtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuYW5nbGVzID0gW107XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmkgPSAtMTtcbiAgICB0aGlzLmNvbW1hbmQgPSBudWxsO1xuICAgIHRoaXMucHJldmlvdXNDb21tYW5kID0gbnVsbDtcbiAgICB0aGlzLnN0YXJ0ID0gbmV3IFBvaW50KDAsIDApO1xuICAgIHRoaXMuY29udHJvbCA9IG5ldyBQb2ludCgwLCAwKTtcbiAgICB0aGlzLmN1cnJlbnQgPSBuZXcgUG9pbnQoMCwgMCk7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLmFuZ2xlcyA9IFtdO1xuICB9XG5cbiAgaXNFbmQoKSB7XG4gICAgdmFyIHtcbiAgICAgIGksXG4gICAgICBjb21tYW5kc1xuICAgIH0gPSB0aGlzO1xuICAgIHJldHVybiBpID49IGNvbW1hbmRzLmxlbmd0aCAtIDE7XG4gIH1cblxuICBuZXh0KCkge1xuICAgIHZhciBjb21tYW5kID0gdGhpcy5jb21tYW5kc1srK3RoaXMuaV07XG4gICAgdGhpcy5wcmV2aW91c0NvbW1hbmQgPSB0aGlzLmNvbW1hbmQ7XG4gICAgdGhpcy5jb21tYW5kID0gY29tbWFuZDtcbiAgICByZXR1cm4gY29tbWFuZDtcbiAgfVxuXG4gIGdldFBvaW50KCkge1xuICAgIHZhciB4UHJvcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ3gnO1xuICAgIHZhciB5UHJvcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ3knO1xuICAgIHZhciBwb2ludCA9IG5ldyBQb2ludCh0aGlzLmNvbW1hbmRbeFByb3BdLCB0aGlzLmNvbW1hbmRbeVByb3BdKTtcbiAgICByZXR1cm4gdGhpcy5tYWtlQWJzb2x1dGUocG9pbnQpO1xuICB9XG5cbiAgZ2V0QXNDb250cm9sUG9pbnQoeFByb3AsIHlQcm9wKSB7XG4gICAgdmFyIHBvaW50ID0gdGhpcy5nZXRQb2ludCh4UHJvcCwgeVByb3ApO1xuICAgIHRoaXMuY29udHJvbCA9IHBvaW50O1xuICAgIHJldHVybiBwb2ludDtcbiAgfVxuXG4gIGdldEFzQ3VycmVudFBvaW50KHhQcm9wLCB5UHJvcCkge1xuICAgIHZhciBwb2ludCA9IHRoaXMuZ2V0UG9pbnQoeFByb3AsIHlQcm9wKTtcbiAgICB0aGlzLmN1cnJlbnQgPSBwb2ludDtcbiAgICByZXR1cm4gcG9pbnQ7XG4gIH1cblxuICBnZXRSZWZsZWN0ZWRDb250cm9sUG9pbnQoKSB7XG4gICAgdmFyIHByZXZpb3VzQ29tbWFuZCA9IHRoaXMucHJldmlvdXNDb21tYW5kLnR5cGU7XG5cbiAgICBpZiAocHJldmlvdXNDb21tYW5kICE9PSBTVkdQYXRoRGF0YS5DVVJWRV9UTyAmJiBwcmV2aW91c0NvbW1hbmQgIT09IFNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTyAmJiBwcmV2aW91c0NvbW1hbmQgIT09IFNWR1BhdGhEYXRhLlFVQURfVE8gJiYgcHJldmlvdXNDb21tYW5kICE9PSBTVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTykge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgICB9IC8vIHJlZmxlY3QgcG9pbnRcblxuXG4gICAgdmFyIHtcbiAgICAgIGN1cnJlbnQ6IHtcbiAgICAgICAgeDogY3gsXG4gICAgICAgIHk6IGN5XG4gICAgICB9LFxuICAgICAgY29udHJvbDoge1xuICAgICAgICB4OiBveCxcbiAgICAgICAgeTogb3lcbiAgICAgIH1cbiAgICB9ID0gdGhpcztcbiAgICB2YXIgcG9pbnQgPSBuZXcgUG9pbnQoMiAqIGN4IC0gb3gsIDIgKiBjeSAtIG95KTtcbiAgICByZXR1cm4gcG9pbnQ7XG4gIH1cblxuICBtYWtlQWJzb2x1dGUocG9pbnQpIHtcbiAgICBpZiAodGhpcy5jb21tYW5kLnJlbGF0aXZlKSB7XG4gICAgICB2YXIge1xuICAgICAgICB4LFxuICAgICAgICB5XG4gICAgICB9ID0gdGhpcy5jdXJyZW50O1xuICAgICAgcG9pbnQueCArPSB4O1xuICAgICAgcG9pbnQueSArPSB5O1xuICAgIH1cblxuICAgIHJldHVybiBwb2ludDtcbiAgfVxuXG4gIGFkZE1hcmtlcihwb2ludCwgZnJvbSwgcHJpb3JUbykge1xuICAgIHZhciB7XG4gICAgICBwb2ludHMsXG4gICAgICBhbmdsZXNcbiAgICB9ID0gdGhpczsgLy8gaWYgdGhlIGxhc3QgYW5nbGUgaXNuJ3QgZmlsbGVkIGluIGJlY2F1c2Ugd2UgZGlkbid0IGhhdmUgdGhpcyBwb2ludCB5ZXQgLi4uXG5cbiAgICBpZiAocHJpb3JUbyAmJiBhbmdsZXMubGVuZ3RoID4gMCAmJiAhYW5nbGVzW2FuZ2xlcy5sZW5ndGggLSAxXSkge1xuICAgICAgYW5nbGVzW2FuZ2xlcy5sZW5ndGggLSAxXSA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0uYW5nbGVUbyhwcmlvclRvKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZE1hcmtlckFuZ2xlKHBvaW50LCBmcm9tID8gZnJvbS5hbmdsZVRvKHBvaW50KSA6IG51bGwpO1xuICB9XG5cbiAgYWRkTWFya2VyQW5nbGUocG9pbnQsIGFuZ2xlKSB7XG4gICAgdGhpcy5wb2ludHMucHVzaChwb2ludCk7XG4gICAgdGhpcy5hbmdsZXMucHVzaChhbmdsZSk7XG4gIH1cblxuICBnZXRNYXJrZXJQb2ludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9pbnRzO1xuICB9XG5cbiAgZ2V0TWFya2VyQW5nbGVzKCkge1xuICAgIHZhciB7XG4gICAgICBhbmdsZXNcbiAgICB9ID0gdGhpcztcbiAgICB2YXIgbGVuID0gYW5nbGVzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICghYW5nbGVzW2ldKSB7XG4gICAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgaWYgKGFuZ2xlc1tqXSkge1xuICAgICAgICAgICAgYW5nbGVzW2ldID0gYW5nbGVzW2pdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFuZ2xlcztcbiAgfVxuXG59XG5cbmNsYXNzIFJlbmRlcmVkRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMubW9kaWZpZWRFbVNpemVTdGFjayA9IGZhbHNlO1xuICB9XG5cbiAgY2FsY3VsYXRlT3BhY2l0eSgpIHtcbiAgICB2YXIgb3BhY2l0eSA9IDEuMDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzLCBjb25zaXN0ZW50LXRoaXNcblxuICAgIHZhciBlbGVtZW50ID0gdGhpcztcblxuICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3BhY2l0eVN0eWxlID0gZWxlbWVudC5nZXRTdHlsZSgnb3BhY2l0eScsIGZhbHNlLCB0cnVlKTsgLy8gbm8gYW5jZXN0b3JzIG9uIHN0eWxlIGNhbGxcblxuICAgICAgaWYgKG9wYWNpdHlTdHlsZS5oYXNWYWx1ZSh0cnVlKSkge1xuICAgICAgICBvcGFjaXR5ICo9IG9wYWNpdHlTdHlsZS5nZXROdW1iZXIoKTtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiBvcGFjaXR5O1xuICB9XG5cbiAgc2V0Q29udGV4dChjdHgpIHtcbiAgICB2YXIgZnJvbU1lYXN1cmUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gICAgaWYgKCFmcm9tTWVhc3VyZSkge1xuICAgICAgLy8gY2F1c2VzIHN0YWNrIG92ZXJmbG93IHdoZW4gbWVhc3VyaW5nIHRleHQgd2l0aCBncmFkaWVudHNcbiAgICAgIC8vIGZpbGxcbiAgICAgIHZhciBmaWxsU3R5bGVQcm9wID0gdGhpcy5nZXRTdHlsZSgnZmlsbCcpO1xuICAgICAgdmFyIGZpbGxPcGFjaXR5U3R5bGVQcm9wID0gdGhpcy5nZXRTdHlsZSgnZmlsbC1vcGFjaXR5Jyk7XG4gICAgICB2YXIgc3Ryb2tlU3R5bGVQcm9wID0gdGhpcy5nZXRTdHlsZSgnc3Ryb2tlJyk7XG4gICAgICB2YXIgc3Ryb2tlT3BhY2l0eVByb3AgPSB0aGlzLmdldFN0eWxlKCdzdHJva2Utb3BhY2l0eScpO1xuXG4gICAgICBpZiAoZmlsbFN0eWxlUHJvcC5pc1VybERlZmluaXRpb24oKSkge1xuICAgICAgICB2YXIgZmlsbFN0eWxlID0gZmlsbFN0eWxlUHJvcC5nZXRGaWxsU3R5bGVEZWZpbml0aW9uKHRoaXMsIGZpbGxPcGFjaXR5U3R5bGVQcm9wKTtcblxuICAgICAgICBpZiAoZmlsbFN0eWxlKSB7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChmaWxsU3R5bGVQcm9wLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgaWYgKGZpbGxTdHlsZVByb3AuZ2V0U3RyaW5nKCkgPT09ICdjdXJyZW50Q29sb3InKSB7XG4gICAgICAgICAgZmlsbFN0eWxlUHJvcC5zZXRWYWx1ZSh0aGlzLmdldFN0eWxlKCdjb2xvcicpLmdldENvbG9yKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9maWxsU3R5bGUgPSBmaWxsU3R5bGVQcm9wLmdldENvbG9yKCk7XG5cbiAgICAgICAgaWYgKF9maWxsU3R5bGUgIT09ICdpbmhlcml0Jykge1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBfZmlsbFN0eWxlID09PSAnbm9uZScgPyAncmdiYSgwLDAsMCwwKScgOiBfZmlsbFN0eWxlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWxsT3BhY2l0eVN0eWxlUHJvcC5oYXNWYWx1ZSgpKSB7XG4gICAgICAgIHZhciBfZmlsbFN0eWxlMiA9IG5ldyBQcm9wZXJ0eSh0aGlzLmRvY3VtZW50LCAnZmlsbCcsIGN0eC5maWxsU3R5bGUpLmFkZE9wYWNpdHkoZmlsbE9wYWNpdHlTdHlsZVByb3ApLmdldENvbG9yKCk7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IF9maWxsU3R5bGUyO1xuICAgICAgfSAvLyBzdHJva2VcblxuXG4gICAgICBpZiAoc3Ryb2tlU3R5bGVQcm9wLmlzVXJsRGVmaW5pdGlvbigpKSB7XG4gICAgICAgIHZhciBzdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlUHJvcC5nZXRGaWxsU3R5bGVEZWZpbml0aW9uKHRoaXMsIHN0cm9rZU9wYWNpdHlQcm9wKTtcblxuICAgICAgICBpZiAoc3Ryb2tlU3R5bGUpIHtcbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzdHJva2VTdHlsZVByb3AuaGFzVmFsdWUoKSkge1xuICAgICAgICBpZiAoc3Ryb2tlU3R5bGVQcm9wLmdldFN0cmluZygpID09PSAnY3VycmVudENvbG9yJykge1xuICAgICAgICAgIHN0cm9rZVN0eWxlUHJvcC5zZXRWYWx1ZSh0aGlzLmdldFN0eWxlKCdjb2xvcicpLmdldENvbG9yKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlUHJvcC5nZXRTdHJpbmcoKTtcblxuICAgICAgICBpZiAoX3N0cm9rZVN0eWxlICE9PSAnaW5oZXJpdCcpIHtcbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBfc3Ryb2tlU3R5bGUgPT09ICdub25lJyA/ICdyZ2JhKDAsMCwwLDApJyA6IF9zdHJva2VTdHlsZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3Ryb2tlT3BhY2l0eVByb3AuaGFzVmFsdWUoKSkge1xuICAgICAgICB2YXIgX3N0cm9rZVN0eWxlMiA9IG5ldyBQcm9wZXJ0eSh0aGlzLmRvY3VtZW50LCAnc3Ryb2tlJywgY3R4LnN0cm9rZVN0eWxlKS5hZGRPcGFjaXR5KHN0cm9rZU9wYWNpdHlQcm9wKS5nZXRTdHJpbmcoKTtcblxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBfc3Ryb2tlU3R5bGUyO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3Ryb2tlV2lkdGhTdHlsZVByb3AgPSB0aGlzLmdldFN0eWxlKCdzdHJva2Utd2lkdGgnKTtcblxuICAgICAgaWYgKHN0cm9rZVdpZHRoU3R5bGVQcm9wLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgdmFyIG5ld0xpbmVXaWR0aCA9IHN0cm9rZVdpZHRoU3R5bGVQcm9wLmdldFBpeGVscygpO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gIW5ld0xpbmVXaWR0aCA/IFBTRVVET19aRVJPIC8vIGJyb3dzZXJzIGRvbid0IHJlc3BlY3QgMCAob3Igbm9kZS1jYW52YXM/IDotKVxuICAgICAgICA6IG5ld0xpbmVXaWR0aDtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0cm9rZUxpbmVjYXBTdHlsZVByb3AgPSB0aGlzLmdldFN0eWxlKCdzdHJva2UtbGluZWNhcCcpO1xuICAgICAgdmFyIHN0cm9rZUxpbmVqb2luU3R5bGVQcm9wID0gdGhpcy5nZXRTdHlsZSgnc3Ryb2tlLWxpbmVqb2luJyk7XG4gICAgICB2YXIgc3Ryb2tlTWl0ZXJsaW1pdFByb3AgPSB0aGlzLmdldFN0eWxlKCdzdHJva2UtbWl0ZXJsaW1pdCcpOyAvLyBORUVEIFRFU1RcbiAgICAgIC8vIGNvbnN0IHBvaW50T3JkZXJTdHlsZVByb3AgPSB0aGlzLmdldFN0eWxlKCdwYWludC1vcmRlcicpO1xuXG4gICAgICB2YXIgc3Ryb2tlRGFzaGFycmF5U3R5bGVQcm9wID0gdGhpcy5nZXRTdHlsZSgnc3Ryb2tlLWRhc2hhcnJheScpO1xuICAgICAgdmFyIHN0cm9rZURhc2hvZmZzZXRQcm9wID0gdGhpcy5nZXRTdHlsZSgnc3Ryb2tlLWRhc2hvZmZzZXQnKTtcblxuICAgICAgaWYgKHN0cm9rZUxpbmVjYXBTdHlsZVByb3AuaGFzVmFsdWUoKSkge1xuICAgICAgICBjdHgubGluZUNhcCA9IHN0cm9rZUxpbmVjYXBTdHlsZVByb3AuZ2V0U3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdHJva2VMaW5lam9pblN0eWxlUHJvcC5oYXNWYWx1ZSgpKSB7XG4gICAgICAgIGN0eC5saW5lSm9pbiA9IHN0cm9rZUxpbmVqb2luU3R5bGVQcm9wLmdldFN0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3Ryb2tlTWl0ZXJsaW1pdFByb3AuaGFzVmFsdWUoKSkge1xuICAgICAgICBjdHgubWl0ZXJMaW1pdCA9IHN0cm9rZU1pdGVybGltaXRQcm9wLmdldE51bWJlcigpO1xuICAgICAgfSAvLyBORUVEIFRFU1RcbiAgICAgIC8vIGlmIChwb2ludE9yZGVyU3R5bGVQcm9wLmhhc1ZhbHVlKCkpIHtcbiAgICAgIC8vIFx0Ly8gP1xuICAgICAgLy8gXHRjdHgucGFpbnRPcmRlciA9IHBvaW50T3JkZXJTdHlsZVByb3AuZ2V0VmFsdWUoKTtcbiAgICAgIC8vIH1cblxuXG4gICAgICBpZiAoc3Ryb2tlRGFzaGFycmF5U3R5bGVQcm9wLmhhc1ZhbHVlKCkgJiYgc3Ryb2tlRGFzaGFycmF5U3R5bGVQcm9wLmdldFN0cmluZygpICE9PSAnbm9uZScpIHtcbiAgICAgICAgdmFyIGdhcHMgPSB0b051bWJlcnMoc3Ryb2tlRGFzaGFycmF5U3R5bGVQcm9wLmdldFN0cmluZygpKTtcblxuICAgICAgICBpZiAodHlwZW9mIGN0eC5zZXRMaW5lRGFzaCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBjdHguc2V0TGluZURhc2goZ2Fwcyk7XG4gICAgICAgIH0gZWxzZSAvLyBAdHMtZXhwZWN0LWVycm9yIEhhbmRsZSBicm93c2VyIHByZWZpeC5cbiAgICAgICAgICBpZiAodHlwZW9mIGN0eC53ZWJraXRMaW5lRGFzaCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgSGFuZGxlIGJyb3dzZXIgcHJlZml4LlxuICAgICAgICAgICAgY3R4LndlYmtpdExpbmVEYXNoID0gZ2FwcztcbiAgICAgICAgICB9IGVsc2UgLy8gQHRzLWV4cGVjdC1lcnJvciBIYW5kbGUgYnJvd3NlciBwcmVmaXguXG4gICAgICAgICAgICBpZiAodHlwZW9mIGN0eC5tb3pEYXNoICE9PSAndW5kZWZpbmVkJyAmJiAhKGdhcHMubGVuZ3RoID09PSAxICYmIGdhcHNbMF0gPT09IDApKSB7XG4gICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgSGFuZGxlIGJyb3dzZXIgcHJlZml4LlxuICAgICAgICAgICAgICBjdHgubW96RGFzaCA9IGdhcHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IHN0cm9rZURhc2hvZmZzZXRQcm9wLmdldFBpeGVscygpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY3R4LmxpbmVEYXNoT2Zmc2V0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGN0eC5saW5lRGFzaE9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgfSBlbHNlIC8vIEB0cy1leHBlY3QtZXJyb3IgSGFuZGxlIGJyb3dzZXIgcHJlZml4LlxuICAgICAgICAgIGlmICh0eXBlb2YgY3R4LndlYmtpdExpbmVEYXNoT2Zmc2V0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBIYW5kbGUgYnJvd3NlciBwcmVmaXguXG4gICAgICAgICAgICBjdHgud2Via2l0TGluZURhc2hPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgfSBlbHNlIC8vIEB0cy1leHBlY3QtZXJyb3IgSGFuZGxlIGJyb3dzZXIgcHJlZml4LlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjdHgubW96RGFzaE9mZnNldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBIYW5kbGUgYnJvd3NlciBwcmVmaXguXG4gICAgICAgICAgICAgIGN0eC5tb3pEYXNoT2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gZm9udFxuXG5cbiAgICB0aGlzLm1vZGlmaWVkRW1TaXplU3RhY2sgPSBmYWxzZTtcblxuICAgIGlmICh0eXBlb2YgY3R4LmZvbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgZm9udFN0eWxlUHJvcCA9IHRoaXMuZ2V0U3R5bGUoJ2ZvbnQnKTtcbiAgICAgIHZhciBmb250U3R5bGVTdHlsZVByb3AgPSB0aGlzLmdldFN0eWxlKCdmb250LXN0eWxlJyk7XG4gICAgICB2YXIgZm9udFZhcmlhbnRTdHlsZVByb3AgPSB0aGlzLmdldFN0eWxlKCdmb250LXZhcmlhbnQnKTtcbiAgICAgIHZhciBmb250V2VpZ2h0U3R5bGVQcm9wID0gdGhpcy5nZXRTdHlsZSgnZm9udC13ZWlnaHQnKTtcbiAgICAgIHZhciBmb250U2l6ZVN0eWxlUHJvcCA9IHRoaXMuZ2V0U3R5bGUoJ2ZvbnQtc2l6ZScpO1xuICAgICAgdmFyIGZvbnRGYW1pbHlTdHlsZVByb3AgPSB0aGlzLmdldFN0eWxlKCdmb250LWZhbWlseScpO1xuICAgICAgdmFyIGZvbnQgPSBuZXcgRm9udChmb250U3R5bGVTdHlsZVByb3AuZ2V0U3RyaW5nKCksIGZvbnRWYXJpYW50U3R5bGVQcm9wLmdldFN0cmluZygpLCBmb250V2VpZ2h0U3R5bGVQcm9wLmdldFN0cmluZygpLCBmb250U2l6ZVN0eWxlUHJvcC5oYXNWYWx1ZSgpID8gXCJcIi5jb25jYXQoZm9udFNpemVTdHlsZVByb3AuZ2V0UGl4ZWxzKHRydWUpLCBcInB4XCIpIDogJycsIGZvbnRGYW1pbHlTdHlsZVByb3AuZ2V0U3RyaW5nKCksIEZvbnQucGFyc2UoZm9udFN0eWxlUHJvcC5nZXRTdHJpbmcoKSwgY3R4LmZvbnQpKTtcbiAgICAgIGZvbnRTdHlsZVN0eWxlUHJvcC5zZXRWYWx1ZShmb250LmZvbnRTdHlsZSk7XG4gICAgICBmb250VmFyaWFudFN0eWxlUHJvcC5zZXRWYWx1ZShmb250LmZvbnRWYXJpYW50KTtcbiAgICAgIGZvbnRXZWlnaHRTdHlsZVByb3Auc2V0VmFsdWUoZm9udC5mb250V2VpZ2h0KTtcbiAgICAgIGZvbnRTaXplU3R5bGVQcm9wLnNldFZhbHVlKGZvbnQuZm9udFNpemUpO1xuICAgICAgZm9udEZhbWlseVN0eWxlUHJvcC5zZXRWYWx1ZShmb250LmZvbnRGYW1pbHkpO1xuICAgICAgY3R4LmZvbnQgPSBmb250LnRvU3RyaW5nKCk7XG5cbiAgICAgIGlmIChmb250U2l6ZVN0eWxlUHJvcC5pc1BpeGVscygpKSB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnQuZW1TaXplID0gZm9udFNpemVTdHlsZVByb3AuZ2V0UGl4ZWxzKCk7XG4gICAgICAgIHRoaXMubW9kaWZpZWRFbVNpemVTdGFjayA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmcm9tTWVhc3VyZSkge1xuICAgICAgLy8gZWZmZWN0c1xuICAgICAgdGhpcy5hcHBseUVmZmVjdHMoY3R4KTsgLy8gb3BhY2l0eVxuXG4gICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLmNhbGN1bGF0ZU9wYWNpdHkoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhckNvbnRleHQoY3R4KSB7XG4gICAgc3VwZXIuY2xlYXJDb250ZXh0KGN0eCk7XG5cbiAgICBpZiAodGhpcy5tb2RpZmllZEVtU2l6ZVN0YWNrKSB7XG4gICAgICB0aGlzLmRvY3VtZW50LnBvcEVtU2l6ZSgpO1xuICAgIH1cbiAgfVxuXG59XG5cbmNsYXNzIFBhdGhFbGVtZW50IGV4dGVuZHMgUmVuZGVyZWRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9jdW1lbnQsIG5vZGUsIGNhcHR1cmVUZXh0Tm9kZXMpIHtcbiAgICBzdXBlcihkb2N1bWVudCwgbm9kZSwgY2FwdHVyZVRleHROb2Rlcyk7XG4gICAgdGhpcy50eXBlID0gJ3BhdGgnO1xuICAgIHRoaXMucGF0aFBhcnNlciA9IG51bGw7XG4gICAgdGhpcy5wYXRoUGFyc2VyID0gbmV3IFBhdGhQYXJzZXIodGhpcy5nZXRBdHRyaWJ1dGUoJ2QnKS5nZXRTdHJpbmcoKSk7XG4gIH1cblxuICBwYXRoKGN0eCkge1xuICAgIHZhciB7XG4gICAgICBwYXRoUGFyc2VyXG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIGJvdW5kaW5nQm94ID0gbmV3IEJvdW5kaW5nQm94KCk7XG4gICAgcGF0aFBhcnNlci5yZXNldCgpO1xuXG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIH1cblxuICAgIHdoaWxlICghcGF0aFBhcnNlci5pc0VuZCgpKSB7XG4gICAgICBzd2l0Y2ggKHBhdGhQYXJzZXIubmV4dCgpLnR5cGUpIHtcbiAgICAgICAgY2FzZSBQYXRoUGFyc2VyLk1PVkVfVE86XG4gICAgICAgICAgdGhpcy5wYXRoTShjdHgsIGJvdW5kaW5nQm94KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFBhdGhQYXJzZXIuTElORV9UTzpcbiAgICAgICAgICB0aGlzLnBhdGhMKGN0eCwgYm91bmRpbmdCb3gpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUGF0aFBhcnNlci5IT1JJWl9MSU5FX1RPOlxuICAgICAgICAgIHRoaXMucGF0aEgoY3R4LCBib3VuZGluZ0JveCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBQYXRoUGFyc2VyLlZFUlRfTElORV9UTzpcbiAgICAgICAgICB0aGlzLnBhdGhWKGN0eCwgYm91bmRpbmdCb3gpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUGF0aFBhcnNlci5DVVJWRV9UTzpcbiAgICAgICAgICB0aGlzLnBhdGhDKGN0eCwgYm91bmRpbmdCb3gpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUGF0aFBhcnNlci5TTU9PVEhfQ1VSVkVfVE86XG4gICAgICAgICAgdGhpcy5wYXRoUyhjdHgsIGJvdW5kaW5nQm94KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFBhdGhQYXJzZXIuUVVBRF9UTzpcbiAgICAgICAgICB0aGlzLnBhdGhRKGN0eCwgYm91bmRpbmdCb3gpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUGF0aFBhcnNlci5TTU9PVEhfUVVBRF9UTzpcbiAgICAgICAgICB0aGlzLnBhdGhUKGN0eCwgYm91bmRpbmdCb3gpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUGF0aFBhcnNlci5BUkM6XG4gICAgICAgICAgdGhpcy5wYXRoQShjdHgsIGJvdW5kaW5nQm94KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFBhdGhQYXJzZXIuQ0xPU0VfUEFUSDpcbiAgICAgICAgICB0aGlzLnBhdGhaKGN0eCwgYm91bmRpbmdCb3gpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBib3VuZGluZ0JveDtcbiAgfVxuXG4gIGdldEJvdW5kaW5nQm94KF8pIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoKCk7XG4gIH1cblxuICBnZXRNYXJrZXJzKCkge1xuICAgIHZhciB7XG4gICAgICBwYXRoUGFyc2VyXG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIHBvaW50cyA9IHBhdGhQYXJzZXIuZ2V0TWFya2VyUG9pbnRzKCk7XG4gICAgdmFyIGFuZ2xlcyA9IHBhdGhQYXJzZXIuZ2V0TWFya2VyQW5nbGVzKCk7XG4gICAgdmFyIG1hcmtlcnMgPSBwb2ludHMubWFwKChwb2ludCwgaSkgPT4gW3BvaW50LCBhbmdsZXNbaV1dKTtcbiAgICByZXR1cm4gbWFya2VycztcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKGN0eCkge1xuICAgIHRoaXMucGF0aChjdHgpO1xuICAgIHRoaXMuZG9jdW1lbnQuc2NyZWVuLm1vdXNlLmNoZWNrUGF0aCh0aGlzLCBjdHgpO1xuICAgIHZhciBmaWxsUnVsZVN0eWxlUHJvcCA9IHRoaXMuZ2V0U3R5bGUoJ2ZpbGwtcnVsZScpO1xuXG4gICAgaWYgKGN0eC5maWxsU3R5bGUgIT09ICcnKSB7XG4gICAgICBpZiAoZmlsbFJ1bGVTdHlsZVByb3AuZ2V0U3RyaW5nKCdpbmhlcml0JykgIT09ICdpbmhlcml0Jykge1xuICAgICAgICBjdHguZmlsbChmaWxsUnVsZVN0eWxlUHJvcC5nZXRTdHJpbmcoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjdHguc3Ryb2tlU3R5bGUgIT09ICcnKSB7XG4gICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ3ZlY3Rvci1lZmZlY3QnKS5nZXRTdHJpbmcoKSA9PT0gJ25vbi1zY2FsaW5nLXN0cm9rZScpIHtcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtYXJrZXJzID0gdGhpcy5nZXRNYXJrZXJzKCk7XG5cbiAgICBpZiAobWFya2Vycykge1xuICAgICAgdmFyIG1hcmtlcnNMYXN0SW5kZXggPSBtYXJrZXJzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgbWFya2VyU3RhcnRTdHlsZVByb3AgPSB0aGlzLmdldFN0eWxlKCdtYXJrZXItc3RhcnQnKTtcbiAgICAgIHZhciBtYXJrZXJNaWRTdHlsZVByb3AgPSB0aGlzLmdldFN0eWxlKCdtYXJrZXItbWlkJyk7XG4gICAgICB2YXIgbWFya2VyRW5kU3R5bGVQcm9wID0gdGhpcy5nZXRTdHlsZSgnbWFya2VyLWVuZCcpO1xuXG4gICAgICBpZiAobWFya2VyU3RhcnRTdHlsZVByb3AuaXNVcmxEZWZpbml0aW9uKCkpIHtcbiAgICAgICAgdmFyIG1hcmtlciA9IG1hcmtlclN0YXJ0U3R5bGVQcm9wLmdldERlZmluaXRpb24oKTtcbiAgICAgICAgdmFyIFtwb2ludCwgYW5nbGVdID0gbWFya2Vyc1swXTtcbiAgICAgICAgbWFya2VyLnJlbmRlcihjdHgsIHBvaW50LCBhbmdsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXJrZXJNaWRTdHlsZVByb3AuaXNVcmxEZWZpbml0aW9uKCkpIHtcbiAgICAgICAgdmFyIF9tYXJrZXIgPSBtYXJrZXJNaWRTdHlsZVByb3AuZ2V0RGVmaW5pdGlvbigpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbWFya2Vyc0xhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgdmFyIFtfcG9pbnQsIF9hbmdsZV0gPSBtYXJrZXJzW2ldO1xuXG4gICAgICAgICAgX21hcmtlci5yZW5kZXIoY3R4LCBfcG9pbnQsIF9hbmdsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1hcmtlckVuZFN0eWxlUHJvcC5pc1VybERlZmluaXRpb24oKSkge1xuICAgICAgICB2YXIgX21hcmtlcjIgPSBtYXJrZXJFbmRTdHlsZVByb3AuZ2V0RGVmaW5pdGlvbigpO1xuXG4gICAgICAgIHZhciBbX3BvaW50MiwgX2FuZ2xlMl0gPSBtYXJrZXJzW21hcmtlcnNMYXN0SW5kZXhdO1xuXG4gICAgICAgIF9tYXJrZXIyLnJlbmRlcihjdHgsIF9wb2ludDIsIF9hbmdsZTIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBwYXRoTShwYXRoUGFyc2VyKSB7XG4gICAgdmFyIHBvaW50ID0gcGF0aFBhcnNlci5nZXRBc0N1cnJlbnRQb2ludCgpO1xuICAgIHBhdGhQYXJzZXIuc3RhcnQgPSBwYXRoUGFyc2VyLmN1cnJlbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvaW50XG4gICAgfTtcbiAgfVxuXG4gIHBhdGhNKGN0eCwgYm91bmRpbmdCb3gpIHtcbiAgICB2YXIge1xuICAgICAgcGF0aFBhcnNlclxuICAgIH0gPSB0aGlzO1xuICAgIHZhciB7XG4gICAgICBwb2ludFxuICAgIH0gPSBQYXRoRWxlbWVudC5wYXRoTShwYXRoUGFyc2VyKTtcbiAgICB2YXIge1xuICAgICAgeCxcbiAgICAgIHlcbiAgICB9ID0gcG9pbnQ7XG4gICAgcGF0aFBhcnNlci5hZGRNYXJrZXIocG9pbnQpO1xuICAgIGJvdW5kaW5nQm94LmFkZFBvaW50KHgsIHkpO1xuXG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcGF0aEwocGF0aFBhcnNlcikge1xuICAgIHZhciB7XG4gICAgICBjdXJyZW50XG4gICAgfSA9IHBhdGhQYXJzZXI7XG4gICAgdmFyIHBvaW50ID0gcGF0aFBhcnNlci5nZXRBc0N1cnJlbnRQb2ludCgpO1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50LFxuICAgICAgcG9pbnRcbiAgICB9O1xuICB9XG5cbiAgcGF0aEwoY3R4LCBib3VuZGluZ0JveCkge1xuICAgIHZhciB7XG4gICAgICBwYXRoUGFyc2VyXG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBwb2ludFxuICAgIH0gPSBQYXRoRWxlbWVudC5wYXRoTChwYXRoUGFyc2VyKTtcbiAgICB2YXIge1xuICAgICAgeCxcbiAgICAgIHlcbiAgICB9ID0gcG9pbnQ7XG4gICAgcGF0aFBhcnNlci5hZGRNYXJrZXIocG9pbnQsIGN1cnJlbnQpO1xuICAgIGJvdW5kaW5nQm94LmFkZFBvaW50KHgsIHkpO1xuXG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcGF0aEgocGF0aFBhcnNlcikge1xuICAgIHZhciB7XG4gICAgICBjdXJyZW50LFxuICAgICAgY29tbWFuZFxuICAgIH0gPSBwYXRoUGFyc2VyO1xuICAgIHZhciBwb2ludCA9IG5ldyBQb2ludCgoY29tbWFuZC5yZWxhdGl2ZSA/IGN1cnJlbnQueCA6IDApICsgY29tbWFuZC54LCBjdXJyZW50LnkpO1xuICAgIHBhdGhQYXJzZXIuY3VycmVudCA9IHBvaW50O1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50LFxuICAgICAgcG9pbnRcbiAgICB9O1xuICB9XG5cbiAgcGF0aEgoY3R4LCBib3VuZGluZ0JveCkge1xuICAgIHZhciB7XG4gICAgICBwYXRoUGFyc2VyXG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBwb2ludFxuICAgIH0gPSBQYXRoRWxlbWVudC5wYXRoSChwYXRoUGFyc2VyKTtcbiAgICB2YXIge1xuICAgICAgeCxcbiAgICAgIHlcbiAgICB9ID0gcG9pbnQ7XG4gICAgcGF0aFBhcnNlci5hZGRNYXJrZXIocG9pbnQsIGN1cnJlbnQpO1xuICAgIGJvdW5kaW5nQm94LmFkZFBvaW50KHgsIHkpO1xuXG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcGF0aFYocGF0aFBhcnNlcikge1xuICAgIHZhciB7XG4gICAgICBjdXJyZW50LFxuICAgICAgY29tbWFuZFxuICAgIH0gPSBwYXRoUGFyc2VyO1xuICAgIHZhciBwb2ludCA9IG5ldyBQb2ludChjdXJyZW50LngsIChjb21tYW5kLnJlbGF0aXZlID8gY3VycmVudC55IDogMCkgKyBjb21tYW5kLnkpO1xuICAgIHBhdGhQYXJzZXIuY3VycmVudCA9IHBvaW50O1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50LFxuICAgICAgcG9pbnRcbiAgICB9O1xuICB9XG5cbiAgcGF0aFYoY3R4LCBib3VuZGluZ0JveCkge1xuICAgIHZhciB7XG4gICAgICBwYXRoUGFyc2VyXG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBwb2ludFxuICAgIH0gPSBQYXRoRWxlbWVudC5wYXRoVihwYXRoUGFyc2VyKTtcbiAgICB2YXIge1xuICAgICAgeCxcbiAgICAgIHlcbiAgICB9ID0gcG9pbnQ7XG4gICAgcGF0aFBhcnNlci5hZGRNYXJrZXIocG9pbnQsIGN1cnJlbnQpO1xuICAgIGJvdW5kaW5nQm94LmFkZFBvaW50KHgsIHkpO1xuXG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcGF0aEMocGF0aFBhcnNlcikge1xuICAgIHZhciB7XG4gICAgICBjdXJyZW50XG4gICAgfSA9IHBhdGhQYXJzZXI7XG4gICAgdmFyIHBvaW50ID0gcGF0aFBhcnNlci5nZXRQb2ludCgneDEnLCAneTEnKTtcbiAgICB2YXIgY29udHJvbFBvaW50ID0gcGF0aFBhcnNlci5nZXRBc0NvbnRyb2xQb2ludCgneDInLCAneTInKTtcbiAgICB2YXIgY3VycmVudFBvaW50ID0gcGF0aFBhcnNlci5nZXRBc0N1cnJlbnRQb2ludCgpO1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50LFxuICAgICAgcG9pbnQsXG4gICAgICBjb250cm9sUG9pbnQsXG4gICAgICBjdXJyZW50UG9pbnRcbiAgICB9O1xuICB9XG5cbiAgcGF0aEMoY3R4LCBib3VuZGluZ0JveCkge1xuICAgIHZhciB7XG4gICAgICBwYXRoUGFyc2VyXG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICBwb2ludCxcbiAgICAgIGNvbnRyb2xQb2ludCxcbiAgICAgIGN1cnJlbnRQb2ludFxuICAgIH0gPSBQYXRoRWxlbWVudC5wYXRoQyhwYXRoUGFyc2VyKTtcbiAgICBwYXRoUGFyc2VyLmFkZE1hcmtlcihjdXJyZW50UG9pbnQsIGNvbnRyb2xQb2ludCwgcG9pbnQpO1xuICAgIGJvdW5kaW5nQm94LmFkZEJlemllckN1cnZlKGN1cnJlbnQueCwgY3VycmVudC55LCBwb2ludC54LCBwb2ludC55LCBjb250cm9sUG9pbnQueCwgY29udHJvbFBvaW50LnksIGN1cnJlbnRQb2ludC54LCBjdXJyZW50UG9pbnQueSk7XG5cbiAgICBpZiAoY3R4KSB7XG4gICAgICBjdHguYmV6aWVyQ3VydmVUbyhwb2ludC54LCBwb2ludC55LCBjb250cm9sUG9pbnQueCwgY29udHJvbFBvaW50LnksIGN1cnJlbnRQb2ludC54LCBjdXJyZW50UG9pbnQueSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHBhdGhTKHBhdGhQYXJzZXIpIHtcbiAgICB2YXIge1xuICAgICAgY3VycmVudFxuICAgIH0gPSBwYXRoUGFyc2VyO1xuICAgIHZhciBwb2ludCA9IHBhdGhQYXJzZXIuZ2V0UmVmbGVjdGVkQ29udHJvbFBvaW50KCk7XG4gICAgdmFyIGNvbnRyb2xQb2ludCA9IHBhdGhQYXJzZXIuZ2V0QXNDb250cm9sUG9pbnQoJ3gyJywgJ3kyJyk7XG4gICAgdmFyIGN1cnJlbnRQb2ludCA9IHBhdGhQYXJzZXIuZ2V0QXNDdXJyZW50UG9pbnQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudCxcbiAgICAgIHBvaW50LFxuICAgICAgY29udHJvbFBvaW50LFxuICAgICAgY3VycmVudFBvaW50XG4gICAgfTtcbiAgfVxuXG4gIHBhdGhTKGN0eCwgYm91bmRpbmdCb3gpIHtcbiAgICB2YXIge1xuICAgICAgcGF0aFBhcnNlclxuICAgIH0gPSB0aGlzO1xuICAgIHZhciB7XG4gICAgICBjdXJyZW50LFxuICAgICAgcG9pbnQsXG4gICAgICBjb250cm9sUG9pbnQsXG4gICAgICBjdXJyZW50UG9pbnRcbiAgICB9ID0gUGF0aEVsZW1lbnQucGF0aFMocGF0aFBhcnNlcik7XG4gICAgcGF0aFBhcnNlci5hZGRNYXJrZXIoY3VycmVudFBvaW50LCBjb250cm9sUG9pbnQsIHBvaW50KTtcbiAgICBib3VuZGluZ0JveC5hZGRCZXppZXJDdXJ2ZShjdXJyZW50LngsIGN1cnJlbnQueSwgcG9pbnQueCwgcG9pbnQueSwgY29udHJvbFBvaW50LngsIGNvbnRyb2xQb2ludC55LCBjdXJyZW50UG9pbnQueCwgY3VycmVudFBvaW50LnkpO1xuXG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4LmJlemllckN1cnZlVG8ocG9pbnQueCwgcG9pbnQueSwgY29udHJvbFBvaW50LngsIGNvbnRyb2xQb2ludC55LCBjdXJyZW50UG9pbnQueCwgY3VycmVudFBvaW50LnkpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBwYXRoUShwYXRoUGFyc2VyKSB7XG4gICAgdmFyIHtcbiAgICAgIGN1cnJlbnRcbiAgICB9ID0gcGF0aFBhcnNlcjtcbiAgICB2YXIgY29udHJvbFBvaW50ID0gcGF0aFBhcnNlci5nZXRBc0NvbnRyb2xQb2ludCgneDEnLCAneTEnKTtcbiAgICB2YXIgY3VycmVudFBvaW50ID0gcGF0aFBhcnNlci5nZXRBc0N1cnJlbnRQb2ludCgpO1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50LFxuICAgICAgY29udHJvbFBvaW50LFxuICAgICAgY3VycmVudFBvaW50XG4gICAgfTtcbiAgfVxuXG4gIHBhdGhRKGN0eCwgYm91bmRpbmdCb3gpIHtcbiAgICB2YXIge1xuICAgICAgcGF0aFBhcnNlclxuICAgIH0gPSB0aGlzO1xuICAgIHZhciB7XG4gICAgICBjdXJyZW50LFxuICAgICAgY29udHJvbFBvaW50LFxuICAgICAgY3VycmVudFBvaW50XG4gICAgfSA9IFBhdGhFbGVtZW50LnBhdGhRKHBhdGhQYXJzZXIpO1xuICAgIHBhdGhQYXJzZXIuYWRkTWFya2VyKGN1cnJlbnRQb2ludCwgY29udHJvbFBvaW50LCBjb250cm9sUG9pbnQpO1xuICAgIGJvdW5kaW5nQm94LmFkZFF1YWRyYXRpY0N1cnZlKGN1cnJlbnQueCwgY3VycmVudC55LCBjb250cm9sUG9pbnQueCwgY29udHJvbFBvaW50LnksIGN1cnJlbnRQb2ludC54LCBjdXJyZW50UG9pbnQueSk7XG5cbiAgICBpZiAoY3R4KSB7XG4gICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyhjb250cm9sUG9pbnQueCwgY29udHJvbFBvaW50LnksIGN1cnJlbnRQb2ludC54LCBjdXJyZW50UG9pbnQueSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHBhdGhUKHBhdGhQYXJzZXIpIHtcbiAgICB2YXIge1xuICAgICAgY3VycmVudFxuICAgIH0gPSBwYXRoUGFyc2VyO1xuICAgIHZhciBjb250cm9sUG9pbnQgPSBwYXRoUGFyc2VyLmdldFJlZmxlY3RlZENvbnRyb2xQb2ludCgpO1xuICAgIHBhdGhQYXJzZXIuY29udHJvbCA9IGNvbnRyb2xQb2ludDtcbiAgICB2YXIgY3VycmVudFBvaW50ID0gcGF0aFBhcnNlci5nZXRBc0N1cnJlbnRQb2ludCgpO1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50LFxuICAgICAgY29udHJvbFBvaW50LFxuICAgICAgY3VycmVudFBvaW50XG4gICAgfTtcbiAgfVxuXG4gIHBhdGhUKGN0eCwgYm91bmRpbmdCb3gpIHtcbiAgICB2YXIge1xuICAgICAgcGF0aFBhcnNlclxuICAgIH0gPSB0aGlzO1xuICAgIHZhciB7XG4gICAgICBjdXJyZW50LFxuICAgICAgY29udHJvbFBvaW50LFxuICAgICAgY3VycmVudFBvaW50XG4gICAgfSA9IFBhdGhFbGVtZW50LnBhdGhUKHBhdGhQYXJzZXIpO1xuICAgIHBhdGhQYXJzZXIuYWRkTWFya2VyKGN1cnJlbnRQb2ludCwgY29udHJvbFBvaW50LCBjb250cm9sUG9pbnQpO1xuICAgIGJvdW5kaW5nQm94LmFkZFF1YWRyYXRpY0N1cnZlKGN1cnJlbnQueCwgY3VycmVudC55LCBjb250cm9sUG9pbnQueCwgY29udHJvbFBvaW50LnksIGN1cnJlbnRQb2ludC54LCBjdXJyZW50UG9pbnQueSk7XG5cbiAgICBpZiAoY3R4KSB7XG4gICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyhjb250cm9sUG9pbnQueCwgY29udHJvbFBvaW50LnksIGN1cnJlbnRQb2ludC54LCBjdXJyZW50UG9pbnQueSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHBhdGhBKHBhdGhQYXJzZXIpIHtcbiAgICB2YXIge1xuICAgICAgY3VycmVudCxcbiAgICAgIGNvbW1hbmRcbiAgICB9ID0gcGF0aFBhcnNlcjtcbiAgICB2YXIge1xuICAgICAgclgsXG4gICAgICByWSxcbiAgICAgIHhSb3QsXG4gICAgICBsQXJjRmxhZyxcbiAgICAgIHN3ZWVwRmxhZ1xuICAgIH0gPSBjb21tYW5kO1xuICAgIHZhciB4QXhpc1JvdGF0aW9uID0geFJvdCAqIChNYXRoLlBJIC8gMTgwLjApO1xuICAgIHZhciBjdXJyZW50UG9pbnQgPSBwYXRoUGFyc2VyLmdldEFzQ3VycmVudFBvaW50KCk7IC8vIENvbnZlcnNpb24gZnJvbSBlbmRwb2ludCB0byBjZW50ZXIgcGFyYW1ldGVyaXphdGlvblxuICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ltcGxub3RlLmh0bWwjQXJjSW1wbGVtZW50YXRpb25Ob3Rlc1xuICAgIC8vIHgxJywgeTEnXG5cbiAgICB2YXIgY3VycnAgPSBuZXcgUG9pbnQoTWF0aC5jb3MoeEF4aXNSb3RhdGlvbikgKiAoY3VycmVudC54IC0gY3VycmVudFBvaW50LngpIC8gMi4wICsgTWF0aC5zaW4oeEF4aXNSb3RhdGlvbikgKiAoY3VycmVudC55IC0gY3VycmVudFBvaW50LnkpIC8gMi4wLCAtTWF0aC5zaW4oeEF4aXNSb3RhdGlvbikgKiAoY3VycmVudC54IC0gY3VycmVudFBvaW50LngpIC8gMi4wICsgTWF0aC5jb3MoeEF4aXNSb3RhdGlvbikgKiAoY3VycmVudC55IC0gY3VycmVudFBvaW50LnkpIC8gMi4wKTsgLy8gYWRqdXN0IHJhZGlpXG5cbiAgICB2YXIgbCA9IE1hdGgucG93KGN1cnJwLngsIDIpIC8gTWF0aC5wb3coclgsIDIpICsgTWF0aC5wb3coY3VycnAueSwgMikgLyBNYXRoLnBvdyhyWSwgMik7XG5cbiAgICBpZiAobCA+IDEpIHtcbiAgICAgIHJYICo9IE1hdGguc3FydChsKTtcbiAgICAgIHJZICo9IE1hdGguc3FydChsKTtcbiAgICB9IC8vIGN4JywgY3knXG5cblxuICAgIHZhciBzID0gKGxBcmNGbGFnID09PSBzd2VlcEZsYWcgPyAtMSA6IDEpICogTWF0aC5zcXJ0KChNYXRoLnBvdyhyWCwgMikgKiBNYXRoLnBvdyhyWSwgMikgLSBNYXRoLnBvdyhyWCwgMikgKiBNYXRoLnBvdyhjdXJycC55LCAyKSAtIE1hdGgucG93KHJZLCAyKSAqIE1hdGgucG93KGN1cnJwLngsIDIpKSAvIChNYXRoLnBvdyhyWCwgMikgKiBNYXRoLnBvdyhjdXJycC55LCAyKSArIE1hdGgucG93KHJZLCAyKSAqIE1hdGgucG93KGN1cnJwLngsIDIpKSk7XG5cbiAgICBpZiAoaXNOYU4ocykpIHtcbiAgICAgIHMgPSAwO1xuICAgIH1cblxuICAgIHZhciBjcHAgPSBuZXcgUG9pbnQocyAqIHJYICogY3VycnAueSAvIHJZLCBzICogLXJZICogY3VycnAueCAvIHJYKTsgLy8gY3gsIGN5XG5cbiAgICB2YXIgY2VudHAgPSBuZXcgUG9pbnQoKGN1cnJlbnQueCArIGN1cnJlbnRQb2ludC54KSAvIDIuMCArIE1hdGguY29zKHhBeGlzUm90YXRpb24pICogY3BwLnggLSBNYXRoLnNpbih4QXhpc1JvdGF0aW9uKSAqIGNwcC55LCAoY3VycmVudC55ICsgY3VycmVudFBvaW50LnkpIC8gMi4wICsgTWF0aC5zaW4oeEF4aXNSb3RhdGlvbikgKiBjcHAueCArIE1hdGguY29zKHhBeGlzUm90YXRpb24pICogY3BwLnkpOyAvLyBpbml0aWFsIGFuZ2xlXG5cbiAgICB2YXIgYTEgPSB2ZWN0b3JzQW5nbGUoWzEsIDBdLCBbKGN1cnJwLnggLSBjcHAueCkgLyByWCwgKGN1cnJwLnkgLSBjcHAueSkgLyByWV0pOyAvLyDOuDFcbiAgICAvLyBhbmdsZSBkZWx0YVxuXG4gICAgdmFyIHUgPSBbKGN1cnJwLnggLSBjcHAueCkgLyByWCwgKGN1cnJwLnkgLSBjcHAueSkgLyByWV07XG4gICAgdmFyIHYgPSBbKC1jdXJycC54IC0gY3BwLngpIC8gclgsICgtY3VycnAueSAtIGNwcC55KSAvIHJZXTtcbiAgICB2YXIgYWQgPSB2ZWN0b3JzQW5nbGUodSwgdik7IC8vIM6UzrhcblxuICAgIGlmICh2ZWN0b3JzUmF0aW8odSwgdikgPD0gLTEpIHtcbiAgICAgIGFkID0gTWF0aC5QSTtcbiAgICB9XG5cbiAgICBpZiAodmVjdG9yc1JhdGlvKHUsIHYpID49IDEpIHtcbiAgICAgIGFkID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFBvaW50LFxuICAgICAgclgsXG4gICAgICByWSxcbiAgICAgIHN3ZWVwRmxhZyxcbiAgICAgIHhBeGlzUm90YXRpb24sXG4gICAgICBjZW50cCxcbiAgICAgIGExLFxuICAgICAgYWRcbiAgICB9O1xuICB9XG5cbiAgcGF0aEEoY3R4LCBib3VuZGluZ0JveCkge1xuICAgIHZhciB7XG4gICAgICBwYXRoUGFyc2VyXG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIHtcbiAgICAgIGN1cnJlbnRQb2ludCxcbiAgICAgIHJYLFxuICAgICAgclksXG4gICAgICBzd2VlcEZsYWcsXG4gICAgICB4QXhpc1JvdGF0aW9uLFxuICAgICAgY2VudHAsXG4gICAgICBhMSxcbiAgICAgIGFkXG4gICAgfSA9IFBhdGhFbGVtZW50LnBhdGhBKHBhdGhQYXJzZXIpOyAvLyBmb3IgbWFya2Vyc1xuXG4gICAgdmFyIGRpciA9IDEgLSBzd2VlcEZsYWcgPyAxLjAgOiAtMS4wO1xuICAgIHZhciBhaCA9IGExICsgZGlyICogKGFkIC8gMi4wKTtcbiAgICB2YXIgaGFsZldheSA9IG5ldyBQb2ludChjZW50cC54ICsgclggKiBNYXRoLmNvcyhhaCksIGNlbnRwLnkgKyByWSAqIE1hdGguc2luKGFoKSk7XG4gICAgcGF0aFBhcnNlci5hZGRNYXJrZXJBbmdsZShoYWxmV2F5LCBhaCAtIGRpciAqIE1hdGguUEkgLyAyKTtcbiAgICBwYXRoUGFyc2VyLmFkZE1hcmtlckFuZ2xlKGN1cnJlbnRQb2ludCwgYWggLSBkaXIgKiBNYXRoLlBJKTtcbiAgICBib3VuZGluZ0JveC5hZGRQb2ludChjdXJyZW50UG9pbnQueCwgY3VycmVudFBvaW50LnkpOyAvLyBUT0RPOiB0aGlzIGlzIHRvbyBuYWl2ZSwgbWFrZSBpdCBiZXR0ZXJcblxuICAgIGlmIChjdHggJiYgIWlzTmFOKGExKSAmJiAhaXNOYU4oYWQpKSB7XG4gICAgICB2YXIgciA9IHJYID4gclkgPyByWCA6IHJZO1xuICAgICAgdmFyIHN4ID0gclggPiByWSA/IDEgOiByWCAvIHJZO1xuICAgICAgdmFyIHN5ID0gclggPiByWSA/IHJZIC8gclggOiAxO1xuICAgICAgY3R4LnRyYW5zbGF0ZShjZW50cC54LCBjZW50cC55KTtcbiAgICAgIGN0eC5yb3RhdGUoeEF4aXNSb3RhdGlvbik7XG4gICAgICBjdHguc2NhbGUoc3gsIHN5KTtcbiAgICAgIGN0eC5hcmMoMCwgMCwgciwgYTEsIGExICsgYWQsIEJvb2xlYW4oMSAtIHN3ZWVwRmxhZykpO1xuICAgICAgY3R4LnNjYWxlKDEgLyBzeCwgMSAvIHN5KTtcbiAgICAgIGN0eC5yb3RhdGUoLXhBeGlzUm90YXRpb24pO1xuICAgICAgY3R4LnRyYW5zbGF0ZSgtY2VudHAueCwgLWNlbnRwLnkpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBwYXRoWihwYXRoUGFyc2VyKSB7XG4gICAgcGF0aFBhcnNlci5jdXJyZW50ID0gcGF0aFBhcnNlci5zdGFydDtcbiAgfVxuXG4gIHBhdGhaKGN0eCwgYm91bmRpbmdCb3gpIHtcbiAgICBQYXRoRWxlbWVudC5wYXRoWih0aGlzLnBhdGhQYXJzZXIpO1xuXG4gICAgaWYgKGN0eCkge1xuICAgICAgLy8gb25seSBjbG9zZSBwYXRoIGlmIGl0IGlzIG5vdCBhIHN0cmFpZ2h0IGxpbmVcbiAgICAgIGlmIChib3VuZGluZ0JveC54MSAhPT0gYm91bmRpbmdCb3gueDIgJiYgYm91bmRpbmdCb3gueTEgIT09IGJvdW5kaW5nQm94LnkyKSB7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5jbGFzcyBHbHlwaEVsZW1lbnQgZXh0ZW5kcyBQYXRoRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvY3VtZW50LCBub2RlLCBjYXB0dXJlVGV4dE5vZGVzKSB7XG4gICAgc3VwZXIoZG9jdW1lbnQsIG5vZGUsIGNhcHR1cmVUZXh0Tm9kZXMpO1xuICAgIHRoaXMudHlwZSA9ICdnbHlwaCc7XG4gICAgdGhpcy5ob3JpekFkdlggPSB0aGlzLmdldEF0dHJpYnV0ZSgnaG9yaXotYWR2LXgnKS5nZXROdW1iZXIoKTtcbiAgICB0aGlzLnVuaWNvZGUgPSB0aGlzLmdldEF0dHJpYnV0ZSgndW5pY29kZScpLmdldFN0cmluZygpO1xuICAgIHRoaXMuYXJhYmljRm9ybSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdhcmFiaWMtZm9ybScpLmdldFN0cmluZygpO1xuICB9XG5cbn1cblxuY2xhc3MgVGV4dEVsZW1lbnQgZXh0ZW5kcyBSZW5kZXJlZEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb2N1bWVudCwgbm9kZSwgY2FwdHVyZVRleHROb2Rlcykge1xuICAgIHN1cGVyKGRvY3VtZW50LCBub2RlLCBuZXcudGFyZ2V0ID09PSBUZXh0RWxlbWVudCA/IHRydWUgOiBjYXB0dXJlVGV4dE5vZGVzKTtcbiAgICB0aGlzLnR5cGUgPSAndGV4dCc7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICAgIHRoaXMubWVhc3VyZUNhY2hlID0gLTE7XG4gIH1cblxuICBzZXRDb250ZXh0KGN0eCkge1xuICAgIHZhciBmcm9tTWVhc3VyZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgc3VwZXIuc2V0Q29udGV4dChjdHgsIGZyb21NZWFzdXJlKTtcbiAgICB2YXIgdGV4dEJhc2VsaW5lID0gdGhpcy5nZXRTdHlsZSgnZG9taW5hbnQtYmFzZWxpbmUnKS5nZXRUZXh0QmFzZWxpbmUoKSB8fCB0aGlzLmdldFN0eWxlKCdhbGlnbm1lbnQtYmFzZWxpbmUnKS5nZXRUZXh0QmFzZWxpbmUoKTtcblxuICAgIGlmICh0ZXh0QmFzZWxpbmUpIHtcbiAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSB0ZXh0QmFzZWxpbmU7XG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbGl6ZUNvb3JkaW5hdGVzKGN0eCkge1xuICAgIHRoaXMueCA9IHRoaXMuZ2V0QXR0cmlidXRlKCd4JykuZ2V0UGl4ZWxzKCd4Jyk7XG4gICAgdGhpcy55ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3knKS5nZXRQaXhlbHMoJ3knKTtcbiAgICB2YXIgZHhBdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2R4Jyk7XG4gICAgdmFyIGR5QXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkeScpO1xuXG4gICAgaWYgKGR4QXR0ci5oYXNWYWx1ZSgpKSB7XG4gICAgICB0aGlzLnggKz0gZHhBdHRyLmdldFBpeGVscygneCcpO1xuICAgIH1cblxuICAgIGlmIChkeUF0dHIuaGFzVmFsdWUoKSkge1xuICAgICAgdGhpcy55ICs9IGR5QXR0ci5nZXRQaXhlbHMoJ3knKTtcbiAgICB9XG5cbiAgICB0aGlzLnggKz0gdGhpcy5nZXRBbmNob3JEZWx0YShjdHgsIHRoaXMsIDApO1xuICB9XG5cbiAgZ2V0Qm91bmRpbmdCb3goY3R4KSB7XG4gICAgaWYgKHRoaXMudHlwZSAhPT0gJ3RleHQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRURWxlbWVudEJvdW5kaW5nQm94KGN0eCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0aWFsaXplQ29vcmRpbmF0ZXMoY3R4KTtcbiAgICB2YXIgYm91bmRpbmdCb3ggPSBudWxsO1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoXywgaSkgPT4ge1xuICAgICAgdmFyIGNoaWxkQm91bmRpbmdCb3ggPSB0aGlzLmdldENoaWxkQm91bmRpbmdCb3goY3R4LCB0aGlzLCB0aGlzLCBpKTtcblxuICAgICAgaWYgKCFib3VuZGluZ0JveCkge1xuICAgICAgICBib3VuZGluZ0JveCA9IGNoaWxkQm91bmRpbmdCb3g7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib3VuZGluZ0JveC5hZGRCb3VuZGluZ0JveChjaGlsZEJvdW5kaW5nQm94KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYm91bmRpbmdCb3g7XG4gIH1cblxuICBnZXRGb250U2l6ZSgpIHtcbiAgICB2YXIge1xuICAgICAgZG9jdW1lbnQsXG4gICAgICBwYXJlbnRcbiAgICB9ID0gdGhpcztcbiAgICB2YXIgaW5oZXJpdEZvbnRTaXplID0gRm9udC5wYXJzZShkb2N1bWVudC5jdHguZm9udCkuZm9udFNpemU7XG4gICAgdmFyIGZvbnRTaXplID0gcGFyZW50LmdldFN0eWxlKCdmb250LXNpemUnKS5nZXROdW1iZXIoaW5oZXJpdEZvbnRTaXplKTtcbiAgICByZXR1cm4gZm9udFNpemU7XG4gIH1cblxuICBnZXRURWxlbWVudEJvdW5kaW5nQm94KGN0eCkge1xuICAgIHZhciBmb250U2l6ZSA9IHRoaXMuZ2V0Rm9udFNpemUoKTtcbiAgICByZXR1cm4gbmV3IEJvdW5kaW5nQm94KHRoaXMueCwgdGhpcy55IC0gZm9udFNpemUsIHRoaXMueCArIHRoaXMubWVhc3VyZVRleHQoY3R4KSwgdGhpcy55KTtcbiAgfVxuXG4gIGdldEdseXBoKGZvbnQsIHRleHQsIGkpIHtcbiAgICB2YXIgY2hhciA9IHRleHRbaV07XG4gICAgdmFyIGdseXBoID0gbnVsbDtcblxuICAgIGlmIChmb250LmlzQXJhYmljKSB7XG4gICAgICB2YXIgbGVuID0gdGV4dC5sZW5ndGg7XG4gICAgICB2YXIgcHJldkNoYXIgPSB0ZXh0W2kgLSAxXTtcbiAgICAgIHZhciBuZXh0Q2hhciA9IHRleHRbaSArIDFdO1xuICAgICAgdmFyIGFyYWJpY0Zvcm0gPSAnaXNvbGF0ZWQnO1xuXG4gICAgICBpZiAoKGkgPT09IDAgfHwgcHJldkNoYXIgPT09ICcgJykgJiYgaSA8IGxlbiAtIDIgJiYgbmV4dENoYXIgIT09ICcgJykge1xuICAgICAgICBhcmFiaWNGb3JtID0gJ3Rlcm1pbmFsJztcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPiAwICYmIHByZXZDaGFyICE9PSAnICcgJiYgaSA8IGxlbiAtIDIgJiYgbmV4dENoYXIgIT09ICcgJykge1xuICAgICAgICBhcmFiaWNGb3JtID0gJ21lZGlhbCc7XG4gICAgICB9XG5cbiAgICAgIGlmIChpID4gMCAmJiBwcmV2Q2hhciAhPT0gJyAnICYmIChpID09PSBsZW4gLSAxIHx8IG5leHRDaGFyID09PSAnICcpKSB7XG4gICAgICAgIGFyYWJpY0Zvcm0gPSAnaW5pdGlhbCc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZm9udC5nbHlwaHNbY2hhcl0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIE5FRUQgVEVTVFxuICAgICAgICB2YXIgbWF5YmVHbHlwaCA9IGZvbnQuZ2x5cGhzW2NoYXJdO1xuICAgICAgICBnbHlwaCA9IG1heWJlR2x5cGggaW5zdGFuY2VvZiBHbHlwaEVsZW1lbnQgPyBtYXliZUdseXBoIDogbWF5YmVHbHlwaFthcmFiaWNGb3JtXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZ2x5cGggPSBmb250LmdseXBoc1tjaGFyXTtcbiAgICB9XG5cbiAgICBpZiAoIWdseXBoKSB7XG4gICAgICBnbHlwaCA9IGZvbnQubWlzc2luZ0dseXBoO1xuICAgIH1cblxuICAgIHJldHVybiBnbHlwaDtcbiAgfVxuXG4gIGdldFRleHQoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgZ2V0VGV4dEZyb21Ob2RlKG5vZGUpIHtcbiAgICB2YXIgdGV4dE5vZGUgPSBub2RlIHx8IHRoaXMubm9kZTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IEFycmF5LmZyb20odGV4dE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzKTtcbiAgICB2YXIgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2YodGV4dE5vZGUpO1xuICAgIHZhciBsYXN0SW5kZXggPSBjaGlsZE5vZGVzLmxlbmd0aCAtIDE7XG4gICAgdmFyIHRleHQgPSBjb21wcmVzc1NwYWNlcyggLy8gdGV4dE5vZGUudmFsdWVcbiAgICAvLyB8fCB0ZXh0Tm9kZS50ZXh0XG4gICAgdGV4dE5vZGUudGV4dENvbnRlbnQgfHwgJycpO1xuXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICB0ZXh0ID0gdHJpbUxlZnQodGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID09PSBsYXN0SW5kZXgpIHtcbiAgICAgIHRleHQgPSB0cmltUmlnaHQodGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbihjdHgpIHtcbiAgICBpZiAodGhpcy50eXBlICE9PSAndGV4dCcpIHtcbiAgICAgIHRoaXMucmVuZGVyVEVsZW1lbnRDaGlsZHJlbihjdHgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhbGl6ZUNvb3JkaW5hdGVzKGN0eCk7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlckNoaWxkKGN0eCwgdGhpcywgdGhpcywgaSk7XG4gICAgfSk7XG4gICAgdmFyIHtcbiAgICAgIG1vdXNlXG4gICAgfSA9IHRoaXMuZG9jdW1lbnQuc2NyZWVuOyAvLyBEbyBub3QgY2FsYyBib3VuZGluZyBib3ggaWYgbW91c2UgaXMgbm90IHdvcmtpbmcuXG5cbiAgICBpZiAobW91c2UuaXNXb3JraW5nKCkpIHtcbiAgICAgIG1vdXNlLmNoZWNrQm91bmRpbmdCb3godGhpcywgdGhpcy5nZXRCb3VuZGluZ0JveChjdHgpKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJURWxlbWVudENoaWxkcmVuKGN0eCkge1xuICAgIHZhciB7XG4gICAgICBkb2N1bWVudCxcbiAgICAgIHBhcmVudFxuICAgIH0gPSB0aGlzO1xuICAgIHZhciByZW5kZXJUZXh0ID0gdGhpcy5nZXRUZXh0KCk7XG4gICAgdmFyIGN1c3RvbUZvbnQgPSBwYXJlbnQuZ2V0U3R5bGUoJ2ZvbnQtZmFtaWx5JykuZ2V0RGVmaW5pdGlvbigpO1xuXG4gICAgaWYgKGN1c3RvbUZvbnQpIHtcbiAgICAgIHZhciB7XG4gICAgICAgIHVuaXRzUGVyRW1cbiAgICAgIH0gPSBjdXN0b21Gb250LmZvbnRGYWNlO1xuICAgICAgdmFyIGN0eEZvbnQgPSBGb250LnBhcnNlKGRvY3VtZW50LmN0eC5mb250KTtcbiAgICAgIHZhciBmb250U2l6ZSA9IHBhcmVudC5nZXRTdHlsZSgnZm9udC1zaXplJykuZ2V0TnVtYmVyKGN0eEZvbnQuZm9udFNpemUpO1xuICAgICAgdmFyIGZvbnRTdHlsZSA9IHBhcmVudC5nZXRTdHlsZSgnZm9udC1zdHlsZScpLmdldFN0cmluZyhjdHhGb250LmZvbnRTdHlsZSk7XG4gICAgICB2YXIgc2NhbGUgPSBmb250U2l6ZSAvIHVuaXRzUGVyRW07XG4gICAgICB2YXIgdGV4dCA9IGN1c3RvbUZvbnQuaXNSVEwgPyByZW5kZXJUZXh0LnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJykgOiByZW5kZXJUZXh0O1xuICAgICAgdmFyIGR4ID0gdG9OdW1iZXJzKHBhcmVudC5nZXRBdHRyaWJ1dGUoJ2R4JykuZ2V0U3RyaW5nKCkpO1xuICAgICAgdmFyIGxlbiA9IHRleHQubGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBnbHlwaCA9IHRoaXMuZ2V0R2x5cGgoY3VzdG9tRm9udCwgdGV4dCwgaSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgICBjdHguc2NhbGUoc2NhbGUsIC1zY2FsZSk7XG4gICAgICAgIHZhciBsdyA9IGN0eC5saW5lV2lkdGg7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBjdHgubGluZVdpZHRoICogdW5pdHNQZXJFbSAvIGZvbnRTaXplO1xuXG4gICAgICAgIGlmIChmb250U3R5bGUgPT09ICdpdGFsaWMnKSB7XG4gICAgICAgICAgY3R4LnRyYW5zZm9ybSgxLCAwLCAuNCwgMSwgMCwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBnbHlwaC5yZW5kZXIoY3R4KTtcblxuICAgICAgICBpZiAoZm9udFN0eWxlID09PSAnaXRhbGljJykge1xuICAgICAgICAgIGN0eC50cmFuc2Zvcm0oMSwgMCwgLS40LCAxLCAwLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBsdztcbiAgICAgICAgY3R4LnNjYWxlKDEgLyBzY2FsZSwgLTEgLyBzY2FsZSk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgICAgIHRoaXMueCArPSBmb250U2l6ZSAqIChnbHlwaC5ob3JpekFkdlggfHwgY3VzdG9tRm9udC5ob3JpekFkdlgpIC8gdW5pdHNQZXJFbTtcblxuICAgICAgICBpZiAodHlwZW9mIGR4W2ldICE9PSAndW5kZWZpbmVkJyAmJiAhaXNOYU4oZHhbaV0pKSB7XG4gICAgICAgICAgdGhpcy54ICs9IGR4W2ldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIge1xuICAgICAgeCxcbiAgICAgIHlcbiAgICB9ID0gdGhpczsgLy8gTkVFRCBURVNUXG4gICAgLy8gaWYgKGN0eC5wYWludE9yZGVyID09PSAnc3Ryb2tlJykge1xuICAgIC8vIFx0aWYgKGN0eC5zdHJva2VTdHlsZSkge1xuICAgIC8vIFx0XHRjdHguc3Ryb2tlVGV4dChyZW5kZXJUZXh0LCB4LCB5KTtcbiAgICAvLyBcdH1cbiAgICAvLyBcdGlmIChjdHguZmlsbFN0eWxlKSB7XG4gICAgLy8gXHRcdGN0eC5maWxsVGV4dChyZW5kZXJUZXh0LCB4LCB5KTtcbiAgICAvLyBcdH1cbiAgICAvLyB9IGVsc2Uge1xuXG4gICAgaWYgKGN0eC5maWxsU3R5bGUpIHtcbiAgICAgIGN0eC5maWxsVGV4dChyZW5kZXJUZXh0LCB4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAoY3R4LnN0cm9rZVN0eWxlKSB7XG4gICAgICBjdHguc3Ryb2tlVGV4dChyZW5kZXJUZXh0LCB4LCB5KTtcbiAgICB9IC8vIH1cblxuICB9XG5cbiAgZ2V0QW5jaG9yRGVsdGEoY3R4LCBwYXJlbnQsIHN0YXJ0SSkge1xuICAgIHZhciB0ZXh0QW5jaG9yID0gdGhpcy5nZXRTdHlsZSgndGV4dC1hbmNob3InKS5nZXRTdHJpbmcoJ3N0YXJ0Jyk7XG5cbiAgICBpZiAodGV4dEFuY2hvciAhPT0gJ3N0YXJ0Jykge1xuICAgICAgdmFyIHtcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgIH0gPSBwYXJlbnQ7XG4gICAgICB2YXIgbGVuID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgdmFyIGNoaWxkID0gbnVsbDtcbiAgICAgIHZhciB3aWR0aCA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSBzdGFydEk7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmIChpID4gc3RhcnRJICYmIGNoaWxkLmdldEF0dHJpYnV0ZSgneCcpLmhhc1ZhbHVlKCkgfHwgY2hpbGQuZ2V0QXR0cmlidXRlKCd0ZXh0LWFuY2hvcicpLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICBicmVhazsgLy8gbmV3IGdyb3VwXG4gICAgICAgIH1cblxuICAgICAgICB3aWR0aCArPSBjaGlsZC5tZWFzdXJlVGV4dFJlY3Vyc2l2ZShjdHgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLTEgKiAodGV4dEFuY2hvciA9PT0gJ2VuZCcgPyB3aWR0aCA6IHdpZHRoIC8gMi4wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGFkanVzdENoaWxkQ29vcmRpbmF0ZXMoY3R4LCB0ZXh0UGFyZW50LCBwYXJlbnQsIGkpIHtcbiAgICB2YXIgY2hpbGQgPSBwYXJlbnQuY2hpbGRyZW5baV07XG5cbiAgICBpZiAodHlwZW9mIGNoaWxkLm1lYXN1cmVUZXh0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgY3R4LnNhdmUoKTtcbiAgICBjaGlsZC5zZXRDb250ZXh0KGN0eCwgdHJ1ZSk7XG4gICAgdmFyIHhBdHRyID0gY2hpbGQuZ2V0QXR0cmlidXRlKCd4Jyk7XG4gICAgdmFyIHlBdHRyID0gY2hpbGQuZ2V0QXR0cmlidXRlKCd5Jyk7XG4gICAgdmFyIGR4QXR0ciA9IGNoaWxkLmdldEF0dHJpYnV0ZSgnZHgnKTtcbiAgICB2YXIgZHlBdHRyID0gY2hpbGQuZ2V0QXR0cmlidXRlKCdkeScpO1xuICAgIHZhciB0ZXh0QW5jaG9yID0gY2hpbGQuZ2V0QXR0cmlidXRlKCd0ZXh0LWFuY2hvcicpLmdldFN0cmluZygnc3RhcnQnKTtcblxuICAgIGlmIChpID09PSAwICYmIGNoaWxkLnR5cGUgIT09ICd0ZXh0Tm9kZScpIHtcbiAgICAgIGlmICgheEF0dHIuaGFzVmFsdWUoKSkge1xuICAgICAgICB4QXR0ci5zZXRWYWx1ZSh0ZXh0UGFyZW50LmdldEF0dHJpYnV0ZSgneCcpLmdldFZhbHVlKCcwJykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXlBdHRyLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgeUF0dHIuc2V0VmFsdWUodGV4dFBhcmVudC5nZXRBdHRyaWJ1dGUoJ3knKS5nZXRWYWx1ZSgnMCcpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkeEF0dHIuaGFzVmFsdWUoKSkge1xuICAgICAgICBkeEF0dHIuc2V0VmFsdWUodGV4dFBhcmVudC5nZXRBdHRyaWJ1dGUoJ2R4JykuZ2V0VmFsdWUoJzAnKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZHlBdHRyLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgZHlBdHRyLnNldFZhbHVlKHRleHRQYXJlbnQuZ2V0QXR0cmlidXRlKCdkeScpLmdldFZhbHVlKCcwJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh4QXR0ci5oYXNWYWx1ZSgpKSB7XG4gICAgICBjaGlsZC54ID0geEF0dHIuZ2V0UGl4ZWxzKCd4JykgKyB0ZXh0UGFyZW50LmdldEFuY2hvckRlbHRhKGN0eCwgcGFyZW50LCBpKTtcblxuICAgICAgaWYgKHRleHRBbmNob3IgIT09ICdzdGFydCcpIHtcbiAgICAgICAgdmFyIHdpZHRoID0gY2hpbGQubWVhc3VyZVRleHRSZWN1cnNpdmUoY3R4KTtcbiAgICAgICAgY2hpbGQueCArPSAtMSAqICh0ZXh0QW5jaG9yID09PSAnZW5kJyA/IHdpZHRoIDogd2lkdGggLyAyLjApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZHhBdHRyLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgY2hpbGQueCArPSBkeEF0dHIuZ2V0UGl4ZWxzKCd4Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0ZXh0QW5jaG9yICE9PSAnc3RhcnQnKSB7XG4gICAgICAgIHZhciBfd2lkdGggPSBjaGlsZC5tZWFzdXJlVGV4dFJlY3Vyc2l2ZShjdHgpO1xuXG4gICAgICAgIHRleHRQYXJlbnQueCArPSAtMSAqICh0ZXh0QW5jaG9yID09PSAnZW5kJyA/IF93aWR0aCA6IF93aWR0aCAvIDIuMCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkeEF0dHIuaGFzVmFsdWUoKSkge1xuICAgICAgICB0ZXh0UGFyZW50LnggKz0gZHhBdHRyLmdldFBpeGVscygneCcpO1xuICAgICAgfVxuXG4gICAgICBjaGlsZC54ID0gdGV4dFBhcmVudC54O1xuICAgIH1cblxuICAgIHRleHRQYXJlbnQueCA9IGNoaWxkLnggKyBjaGlsZC5tZWFzdXJlVGV4dChjdHgpO1xuXG4gICAgaWYgKHlBdHRyLmhhc1ZhbHVlKCkpIHtcbiAgICAgIGNoaWxkLnkgPSB5QXR0ci5nZXRQaXhlbHMoJ3knKTtcblxuICAgICAgaWYgKGR5QXR0ci5oYXNWYWx1ZSgpKSB7XG4gICAgICAgIGNoaWxkLnkgKz0gZHlBdHRyLmdldFBpeGVscygneScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZHlBdHRyLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgdGV4dFBhcmVudC55ICs9IGR5QXR0ci5nZXRQaXhlbHMoJ3knKTtcbiAgICAgIH1cblxuICAgICAgY2hpbGQueSA9IHRleHRQYXJlbnQueTtcbiAgICB9XG5cbiAgICB0ZXh0UGFyZW50LnkgPSBjaGlsZC55O1xuICAgIGNoaWxkLmNsZWFyQ29udGV4dChjdHgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG5cbiAgZ2V0Q2hpbGRCb3VuZGluZ0JveChjdHgsIHRleHRQYXJlbnQsIHBhcmVudCwgaSkge1xuICAgIHZhciBjaGlsZCA9IHRoaXMuYWRqdXN0Q2hpbGRDb29yZGluYXRlcyhjdHgsIHRleHRQYXJlbnQsIHBhcmVudCwgaSk7IC8vIG5vdCBhIHRleHQgbm9kZT9cblxuICAgIGlmICh0eXBlb2YgY2hpbGQuZ2V0Qm91bmRpbmdCb3ggIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBib3VuZGluZ0JveCA9IGNoaWxkLmdldEJvdW5kaW5nQm94KGN0eCk7XG5cbiAgICBpZiAoIWJvdW5kaW5nQm94KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjaGlsZC5jaGlsZHJlbi5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICB2YXIgY2hpbGRCb3VuZGluZ0JveCA9IHRleHRQYXJlbnQuZ2V0Q2hpbGRCb3VuZGluZ0JveChjdHgsIHRleHRQYXJlbnQsIGNoaWxkLCBpKTtcbiAgICAgIGJvdW5kaW5nQm94LmFkZEJvdW5kaW5nQm94KGNoaWxkQm91bmRpbmdCb3gpO1xuICAgIH0pO1xuICAgIHJldHVybiBib3VuZGluZ0JveDtcbiAgfVxuXG4gIHJlbmRlckNoaWxkKGN0eCwgdGV4dFBhcmVudCwgcGFyZW50LCBpKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5hZGp1c3RDaGlsZENvb3JkaW5hdGVzKGN0eCwgdGV4dFBhcmVudCwgcGFyZW50LCBpKTtcbiAgICBjaGlsZC5yZW5kZXIoY3R4KTtcbiAgICBjaGlsZC5jaGlsZHJlbi5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICB0ZXh0UGFyZW50LnJlbmRlckNoaWxkKGN0eCwgdGV4dFBhcmVudCwgY2hpbGQsIGkpO1xuICAgIH0pO1xuICB9XG5cbiAgbWVhc3VyZVRleHRSZWN1cnNpdmUoY3R4KSB7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5jaGlsZHJlbi5yZWR1Y2UoKHdpZHRoLCBjaGlsZCkgPT4gd2lkdGggKyBjaGlsZC5tZWFzdXJlVGV4dFJlY3Vyc2l2ZShjdHgpLCB0aGlzLm1lYXN1cmVUZXh0KGN0eCkpO1xuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIG1lYXN1cmVUZXh0KGN0eCkge1xuICAgIHZhciB7XG4gICAgICBtZWFzdXJlQ2FjaGVcbiAgICB9ID0gdGhpcztcblxuICAgIGlmICh+bWVhc3VyZUNhY2hlKSB7XG4gICAgICByZXR1cm4gbWVhc3VyZUNhY2hlO1xuICAgIH1cblxuICAgIHZhciByZW5kZXJUZXh0ID0gdGhpcy5nZXRUZXh0KCk7XG4gICAgdmFyIG1lYXN1cmUgPSB0aGlzLm1lYXN1cmVUYXJnZXRUZXh0KGN0eCwgcmVuZGVyVGV4dCk7XG4gICAgdGhpcy5tZWFzdXJlQ2FjaGUgPSBtZWFzdXJlO1xuICAgIHJldHVybiBtZWFzdXJlO1xuICB9XG5cbiAgbWVhc3VyZVRhcmdldFRleHQoY3R4LCB0YXJnZXRUZXh0KSB7XG4gICAgaWYgKCF0YXJnZXRUZXh0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIHtcbiAgICAgIHBhcmVudFxuICAgIH0gPSB0aGlzO1xuICAgIHZhciBjdXN0b21Gb250ID0gcGFyZW50LmdldFN0eWxlKCdmb250LWZhbWlseScpLmdldERlZmluaXRpb24oKTtcblxuICAgIGlmIChjdXN0b21Gb250KSB7XG4gICAgICB2YXIgZm9udFNpemUgPSB0aGlzLmdldEZvbnRTaXplKCk7XG4gICAgICB2YXIgdGV4dCA9IGN1c3RvbUZvbnQuaXNSVEwgPyB0YXJnZXRUZXh0LnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJykgOiB0YXJnZXRUZXh0O1xuICAgICAgdmFyIGR4ID0gdG9OdW1iZXJzKHBhcmVudC5nZXRBdHRyaWJ1dGUoJ2R4JykuZ2V0U3RyaW5nKCkpO1xuICAgICAgdmFyIGxlbiA9IHRleHQubGVuZ3RoO1xuICAgICAgdmFyIF9tZWFzdXJlID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgZ2x5cGggPSB0aGlzLmdldEdseXBoKGN1c3RvbUZvbnQsIHRleHQsIGkpO1xuICAgICAgICBfbWVhc3VyZSArPSAoZ2x5cGguaG9yaXpBZHZYIHx8IGN1c3RvbUZvbnQuaG9yaXpBZHZYKSAqIGZvbnRTaXplIC8gY3VzdG9tRm9udC5mb250RmFjZS51bml0c1BlckVtO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZHhbaV0gIT09ICd1bmRlZmluZWQnICYmICFpc05hTihkeFtpXSkpIHtcbiAgICAgICAgICBfbWVhc3VyZSArPSBkeFtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gX21lYXN1cmU7XG4gICAgfVxuXG4gICAgaWYgKCFjdHgubWVhc3VyZVRleHQpIHtcbiAgICAgIHJldHVybiB0YXJnZXRUZXh0Lmxlbmd0aCAqIDEwO1xuICAgIH1cblxuICAgIGN0eC5zYXZlKCk7XG4gICAgdGhpcy5zZXRDb250ZXh0KGN0eCwgdHJ1ZSk7XG4gICAgdmFyIHtcbiAgICAgIHdpZHRoOiBtZWFzdXJlXG4gICAgfSA9IGN0eC5tZWFzdXJlVGV4dCh0YXJnZXRUZXh0KTtcbiAgICB0aGlzLmNsZWFyQ29udGV4dChjdHgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgcmV0dXJuIG1lYXN1cmU7XG4gIH1cblxufVxuXG5jbGFzcyBUU3BhbkVsZW1lbnQgZXh0ZW5kcyBUZXh0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvY3VtZW50LCBub2RlLCBjYXB0dXJlVGV4dE5vZGVzKSB7XG4gICAgc3VwZXIoZG9jdW1lbnQsIG5vZGUsIG5ldy50YXJnZXQgPT09IFRTcGFuRWxlbWVudCA/IHRydWUgOiBjYXB0dXJlVGV4dE5vZGVzKTtcbiAgICB0aGlzLnR5cGUgPSAndHNwYW4nOyAvLyBpZiB0aGlzIG5vZGUgaGFzIGNoaWxkcmVuLCB0aGVuIHRoZXkgb3duIHRoZSB0ZXh0XG5cbiAgICB0aGlzLnRleHQgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDAgPyAnJyA6IHRoaXMuZ2V0VGV4dEZyb21Ob2RlKCk7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnRleHQ7XG4gIH1cblxufVxuXG5jbGFzcyBUZXh0Tm9kZSBleHRlbmRzIFRTcGFuRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy50eXBlID0gJ3RleHROb2RlJztcbiAgfVxuXG59XG5cbmNsYXNzIFNWR0VsZW1lbnQgZXh0ZW5kcyBSZW5kZXJlZEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMudHlwZSA9ICdzdmcnO1xuICAgIHRoaXMucm9vdCA9IGZhbHNlO1xuICB9XG5cbiAgc2V0Q29udGV4dChjdHgpIHtcbiAgICB2YXIgX3RoaXMkbm9kZSRwYXJlbnROb2RlO1xuXG4gICAgdmFyIHtcbiAgICAgIGRvY3VtZW50XG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIHtcbiAgICAgIHNjcmVlbixcbiAgICAgIHdpbmRvd1xuICAgIH0gPSBkb2N1bWVudDtcbiAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhcztcbiAgICBzY3JlZW4uc2V0RGVmYXVsdHMoY3R4KTtcblxuICAgIGlmIChjYW52YXMuc3R5bGUgJiYgdHlwZW9mIGN0eC5mb250ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgJiYgdHlwZW9mIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY3R4LmZvbnQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQnKTtcbiAgICAgIHZhciBmb250U2l6ZVByb3AgPSBuZXcgUHJvcGVydHkoZG9jdW1lbnQsICdmb250U2l6ZScsIEZvbnQucGFyc2UoY3R4LmZvbnQpLmZvbnRTaXplKTtcblxuICAgICAgaWYgKGZvbnRTaXplUHJvcC5oYXNWYWx1ZSgpKSB7XG4gICAgICAgIGRvY3VtZW50LnJvb3RFbVNpemUgPSBmb250U2l6ZVByb3AuZ2V0UGl4ZWxzKCd5Jyk7XG4gICAgICAgIGRvY3VtZW50LmVtU2l6ZSA9IGRvY3VtZW50LnJvb3RFbVNpemU7XG4gICAgICB9XG4gICAgfSAvLyBjcmVhdGUgbmV3IHZpZXcgcG9ydFxuXG5cbiAgICBpZiAoIXRoaXMuZ2V0QXR0cmlidXRlKCd4JykuaGFzVmFsdWUoKSkge1xuICAgICAgdGhpcy5nZXRBdHRyaWJ1dGUoJ3gnLCB0cnVlKS5zZXRWYWx1ZSgwKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZ2V0QXR0cmlidXRlKCd5JykuaGFzVmFsdWUoKSkge1xuICAgICAgdGhpcy5nZXRBdHRyaWJ1dGUoJ3knLCB0cnVlKS5zZXRWYWx1ZSgwKTtcbiAgICB9XG5cbiAgICB2YXIge1xuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICB9ID0gc2NyZWVuLnZpZXdQb3J0O1xuXG4gICAgaWYgKCF0aGlzLmdldFN0eWxlKCd3aWR0aCcpLmhhc1ZhbHVlKCkpIHtcbiAgICAgIHRoaXMuZ2V0U3R5bGUoJ3dpZHRoJywgdHJ1ZSkuc2V0VmFsdWUoJzEwMCUnKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZ2V0U3R5bGUoJ2hlaWdodCcpLmhhc1ZhbHVlKCkpIHtcbiAgICAgIHRoaXMuZ2V0U3R5bGUoJ2hlaWdodCcsIHRydWUpLnNldFZhbHVlKCcxMDAlJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmdldFN0eWxlKCdjb2xvcicpLmhhc1ZhbHVlKCkpIHtcbiAgICAgIHRoaXMuZ2V0U3R5bGUoJ2NvbG9yJywgdHJ1ZSkuc2V0VmFsdWUoJ2JsYWNrJyk7XG4gICAgfVxuXG4gICAgdmFyIHJlZlhBdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3JlZlgnKTtcbiAgICB2YXIgcmVmWUF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZSgncmVmWScpO1xuICAgIHZhciB2aWV3Qm94QXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlKCd2aWV3Qm94Jyk7XG4gICAgdmFyIHZpZXdCb3ggPSB2aWV3Qm94QXR0ci5oYXNWYWx1ZSgpID8gdG9OdW1iZXJzKHZpZXdCb3hBdHRyLmdldFN0cmluZygpKSA6IG51bGw7XG4gICAgdmFyIGNsaXAgPSAhdGhpcy5yb290ICYmIHRoaXMuZ2V0U3R5bGUoJ292ZXJmbG93JykuZ2V0VmFsdWUoJ2hpZGRlbicpICE9PSAndmlzaWJsZSc7XG4gICAgdmFyIG1pblggPSAwO1xuICAgIHZhciBtaW5ZID0gMDtcbiAgICB2YXIgY2xpcFggPSAwO1xuICAgIHZhciBjbGlwWSA9IDA7XG5cbiAgICBpZiAodmlld0JveCkge1xuICAgICAgbWluWCA9IHZpZXdCb3hbMF07XG4gICAgICBtaW5ZID0gdmlld0JveFsxXTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucm9vdCkge1xuICAgICAgd2lkdGggPSB0aGlzLmdldFN0eWxlKCd3aWR0aCcpLmdldFBpeGVscygneCcpO1xuICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRTdHlsZSgnaGVpZ2h0JykuZ2V0UGl4ZWxzKCd5Jyk7XG5cbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdtYXJrZXInKSB7XG4gICAgICAgIGNsaXBYID0gbWluWDtcbiAgICAgICAgY2xpcFkgPSBtaW5ZO1xuICAgICAgICBtaW5YID0gMDtcbiAgICAgICAgbWluWSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2NyZWVuLnZpZXdQb3J0LnNldEN1cnJlbnQod2lkdGgsIGhlaWdodCk7IC8vIERlZmF1bHQgdmFsdWUgb2YgdHJhbnNmb3JtLW9yaWdpbiBpcyBjZW50ZXIgb25seSBmb3Igcm9vdCBTVkcgZWxlbWVudHNcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3RyYW5zZm9ybS1vcmlnaW5cblxuICAgIGlmICh0aGlzLm5vZGUgLy8gaXMgbm90IHRlbXBvcmFyeSBTVkdFbGVtZW50XG4gICAgJiYgKCF0aGlzLnBhcmVudCB8fCAoKF90aGlzJG5vZGUkcGFyZW50Tm9kZSA9IHRoaXMubm9kZS5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfdGhpcyRub2RlJHBhcmVudE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJG5vZGUkcGFyZW50Tm9kZS5ub2RlTmFtZSkgPT09ICdmb3JlaWduT2JqZWN0JykgJiYgdGhpcy5nZXRTdHlsZSgndHJhbnNmb3JtJywgZmFsc2UsIHRydWUpLmhhc1ZhbHVlKCkgJiYgIXRoaXMuZ2V0U3R5bGUoJ3RyYW5zZm9ybS1vcmlnaW4nLCBmYWxzZSwgdHJ1ZSkuaGFzVmFsdWUoKSkge1xuICAgICAgdGhpcy5nZXRTdHlsZSgndHJhbnNmb3JtLW9yaWdpbicsIHRydWUsIHRydWUpLnNldFZhbHVlKCc1MCUgNTAlJyk7XG4gICAgfVxuXG4gICAgc3VwZXIuc2V0Q29udGV4dChjdHgpO1xuICAgIGN0eC50cmFuc2xhdGUodGhpcy5nZXRBdHRyaWJ1dGUoJ3gnKS5nZXRQaXhlbHMoJ3gnKSwgdGhpcy5nZXRBdHRyaWJ1dGUoJ3knKS5nZXRQaXhlbHMoJ3knKSk7XG5cbiAgICBpZiAodmlld0JveCkge1xuICAgICAgd2lkdGggPSB2aWV3Qm94WzJdO1xuICAgICAgaGVpZ2h0ID0gdmlld0JveFszXTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5zZXRWaWV3Qm94KHtcbiAgICAgIGN0eCxcbiAgICAgIGFzcGVjdFJhdGlvOiB0aGlzLmdldEF0dHJpYnV0ZSgncHJlc2VydmVBc3BlY3RSYXRpbycpLmdldFN0cmluZygpLFxuICAgICAgd2lkdGg6IHNjcmVlbi52aWV3UG9ydC53aWR0aCxcbiAgICAgIGRlc2lyZWRXaWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IHNjcmVlbi52aWV3UG9ydC5oZWlnaHQsXG4gICAgICBkZXNpcmVkSGVpZ2h0OiBoZWlnaHQsXG4gICAgICBtaW5YLFxuICAgICAgbWluWSxcbiAgICAgIHJlZlg6IHJlZlhBdHRyLmdldFZhbHVlKCksXG4gICAgICByZWZZOiByZWZZQXR0ci5nZXRWYWx1ZSgpLFxuICAgICAgY2xpcCxcbiAgICAgIGNsaXBYLFxuICAgICAgY2xpcFlcbiAgICB9KTtcblxuICAgIGlmICh2aWV3Qm94KSB7XG4gICAgICBzY3JlZW4udmlld1BvcnQucmVtb3ZlQ3VycmVudCgpO1xuICAgICAgc2NyZWVuLnZpZXdQb3J0LnNldEN1cnJlbnQod2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJDb250ZXh0KGN0eCkge1xuICAgIHN1cGVyLmNsZWFyQ29udGV4dChjdHgpO1xuICAgIHRoaXMuZG9jdW1lbnQuc2NyZWVuLnZpZXdQb3J0LnJlbW92ZUN1cnJlbnQoKTtcbiAgfVxuICAvKipcclxuICAgKiBSZXNpemUgU1ZHIHRvIGZpdCBpbiBnaXZlbiBzaXplLlxyXG4gICAqIEBwYXJhbSB3aWR0aFxyXG4gICAqIEBwYXJhbSBoZWlnaHRcclxuICAgKiBAcGFyYW0gcHJlc2VydmVBc3BlY3RSYXRpb1xyXG4gICAqL1xuXG5cbiAgcmVzaXplKHdpZHRoKSB7XG4gICAgdmFyIGhlaWdodCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogd2lkdGg7XG4gICAgdmFyIHByZXNlcnZlQXNwZWN0UmF0aW8gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuICAgIHZhciB3aWR0aEF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZSgnd2lkdGgnLCB0cnVlKTtcbiAgICB2YXIgaGVpZ2h0QXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0cnVlKTtcbiAgICB2YXIgdmlld0JveEF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZSgndmlld0JveCcpO1xuICAgIHZhciBzdHlsZUF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB2YXIgb3JpZ2luV2lkdGggPSB3aWR0aEF0dHIuZ2V0TnVtYmVyKDApO1xuICAgIHZhciBvcmlnaW5IZWlnaHQgPSBoZWlnaHRBdHRyLmdldE51bWJlcigwKTtcblxuICAgIGlmIChwcmVzZXJ2ZUFzcGVjdFJhdGlvKSB7XG4gICAgICBpZiAodHlwZW9mIHByZXNlcnZlQXNwZWN0UmF0aW8gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgdHJ1ZSkuc2V0VmFsdWUocHJlc2VydmVBc3BlY3RSYXRpbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcHJlc2VydmVBc3BlY3RSYXRpb0F0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZSgncHJlc2VydmVBc3BlY3RSYXRpbycpO1xuXG4gICAgICAgIGlmIChwcmVzZXJ2ZUFzcGVjdFJhdGlvQXR0ci5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpb0F0dHIuc2V0VmFsdWUocHJlc2VydmVBc3BlY3RSYXRpb0F0dHIuZ2V0U3RyaW5nKCkucmVwbGFjZSgvXlxccyooXFxTLipcXFMpXFxzKiQvLCAnJDEnKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aWR0aEF0dHIuc2V0VmFsdWUod2lkdGgpO1xuICAgIGhlaWdodEF0dHIuc2V0VmFsdWUoaGVpZ2h0KTtcblxuICAgIGlmICghdmlld0JveEF0dHIuaGFzVmFsdWUoKSkge1xuICAgICAgdmlld0JveEF0dHIuc2V0VmFsdWUoXCIwIDAgXCIuY29uY2F0KG9yaWdpbldpZHRoIHx8IHdpZHRoLCBcIiBcIikuY29uY2F0KG9yaWdpbkhlaWdodCB8fCBoZWlnaHQpKTtcbiAgICB9XG5cbiAgICBpZiAoc3R5bGVBdHRyLmhhc1ZhbHVlKCkpIHtcbiAgICAgIHZhciB3aWR0aFN0eWxlID0gdGhpcy5nZXRTdHlsZSgnd2lkdGgnKTtcbiAgICAgIHZhciBoZWlnaHRTdHlsZSA9IHRoaXMuZ2V0U3R5bGUoJ2hlaWdodCcpO1xuXG4gICAgICBpZiAod2lkdGhTdHlsZS5oYXNWYWx1ZSgpKSB7XG4gICAgICAgIHdpZHRoU3R5bGUuc2V0VmFsdWUoXCJcIi5jb25jYXQod2lkdGgsIFwicHhcIikpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGVpZ2h0U3R5bGUuaGFzVmFsdWUoKSkge1xuICAgICAgICBoZWlnaHRTdHlsZS5zZXRWYWx1ZShcIlwiLmNvbmNhdChoZWlnaHQsIFwicHhcIikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbmNsYXNzIFJlY3RFbGVtZW50IGV4dGVuZHMgUGF0aEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMudHlwZSA9ICdyZWN0JztcbiAgfVxuXG4gIHBhdGgoY3R4KSB7XG4gICAgdmFyIHggPSB0aGlzLmdldEF0dHJpYnV0ZSgneCcpLmdldFBpeGVscygneCcpO1xuICAgIHZhciB5ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3knKS5nZXRQaXhlbHMoJ3knKTtcbiAgICB2YXIgd2lkdGggPSB0aGlzLmdldFN0eWxlKCd3aWR0aCcsIGZhbHNlLCB0cnVlKS5nZXRQaXhlbHMoJ3gnKTtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5nZXRTdHlsZSgnaGVpZ2h0JywgZmFsc2UsIHRydWUpLmdldFBpeGVscygneScpO1xuICAgIHZhciByeEF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZSgncngnKTtcbiAgICB2YXIgcnlBdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3J5Jyk7XG4gICAgdmFyIHJ4ID0gcnhBdHRyLmdldFBpeGVscygneCcpO1xuICAgIHZhciByeSA9IHJ5QXR0ci5nZXRQaXhlbHMoJ3knKTtcblxuICAgIGlmIChyeEF0dHIuaGFzVmFsdWUoKSAmJiAhcnlBdHRyLmhhc1ZhbHVlKCkpIHtcbiAgICAgIHJ5ID0gcng7XG4gICAgfVxuXG4gICAgaWYgKHJ5QXR0ci5oYXNWYWx1ZSgpICYmICFyeEF0dHIuaGFzVmFsdWUoKSkge1xuICAgICAgcnggPSByeTtcbiAgICB9XG5cbiAgICByeCA9IE1hdGgubWluKHJ4LCB3aWR0aCAvIDIuMCk7XG4gICAgcnkgPSBNYXRoLm1pbihyeSwgaGVpZ2h0IC8gMi4wKTtcblxuICAgIGlmIChjdHgpIHtcbiAgICAgIHZhciBLQVBQQSA9IDQgKiAoKE1hdGguc3FydCgyKSAtIDEpIC8gMyk7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7IC8vIGFsd2F5cyBzdGFydCB0aGUgcGF0aCBzbyB3ZSBkb24ndCBmaWxsIHByaW9yIHBhdGhzXG5cbiAgICAgIGlmIChoZWlnaHQgPiAwICYmIHdpZHRoID4gMCkge1xuICAgICAgICBjdHgubW92ZVRvKHggKyByeCwgeSk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcngsIHkpO1xuICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgd2lkdGggLSByeCArIEtBUFBBICogcngsIHksIHggKyB3aWR0aCwgeSArIHJ5IC0gS0FQUEEgKiByeSwgeCArIHdpZHRoLCB5ICsgcnkpO1xuICAgICAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJ5KTtcbiAgICAgICAgY3R4LmJlemllckN1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcnkgKyBLQVBQQSAqIHJ5LCB4ICsgd2lkdGggLSByeCArIEtBUFBBICogcngsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJ4LCB5ICsgaGVpZ2h0KTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgcngsIHkgKyBoZWlnaHQpO1xuICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgcnggLSBLQVBQQSAqIHJ4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcnkgKyBLQVBQQSAqIHJ5LCB4LCB5ICsgaGVpZ2h0IC0gcnkpO1xuICAgICAgICBjdHgubGluZVRvKHgsIHkgKyByeSk7XG4gICAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHgsIHkgKyByeSAtIEtBUFBBICogcnksIHggKyByeCAtIEtBUFBBICogcngsIHksIHggKyByeCwgeSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEJvdW5kaW5nQm94KHgsIHksIHggKyB3aWR0aCwgeSArIGhlaWdodCk7XG4gIH1cblxuICBnZXRNYXJrZXJzKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn1cblxuY2xhc3MgQ2lyY2xlRWxlbWVudCBleHRlbmRzIFBhdGhFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnR5cGUgPSAnY2lyY2xlJztcbiAgfVxuXG4gIHBhdGgoY3R4KSB7XG4gICAgdmFyIGN4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2N4JykuZ2V0UGl4ZWxzKCd4Jyk7XG4gICAgdmFyIGN5ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2N5JykuZ2V0UGl4ZWxzKCd5Jyk7XG4gICAgdmFyIHIgPSB0aGlzLmdldEF0dHJpYnV0ZSgncicpLmdldFBpeGVscygpO1xuXG4gICAgaWYgKGN0eCAmJiByID4gMCkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyhjeCwgY3ksIHIsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBCb3VuZGluZ0JveChjeCAtIHIsIGN5IC0gciwgY3ggKyByLCBjeSArIHIpO1xuICB9XG5cbiAgZ2V0TWFya2VycygpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59XG5cbmNsYXNzIEVsbGlwc2VFbGVtZW50IGV4dGVuZHMgUGF0aEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMudHlwZSA9ICdlbGxpcHNlJztcbiAgfVxuXG4gIHBhdGgoY3R4KSB7XG4gICAgdmFyIEtBUFBBID0gNCAqICgoTWF0aC5zcXJ0KDIpIC0gMSkgLyAzKTtcbiAgICB2YXIgcnggPSB0aGlzLmdldEF0dHJpYnV0ZSgncngnKS5nZXRQaXhlbHMoJ3gnKTtcbiAgICB2YXIgcnkgPSB0aGlzLmdldEF0dHJpYnV0ZSgncnknKS5nZXRQaXhlbHMoJ3knKTtcbiAgICB2YXIgY3ggPSB0aGlzLmdldEF0dHJpYnV0ZSgnY3gnKS5nZXRQaXhlbHMoJ3gnKTtcbiAgICB2YXIgY3kgPSB0aGlzLmdldEF0dHJpYnV0ZSgnY3knKS5nZXRQaXhlbHMoJ3knKTtcblxuICAgIGlmIChjdHggJiYgcnggPiAwICYmIHJ5ID4gMCkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyhjeCArIHJ4LCBjeSk7XG4gICAgICBjdHguYmV6aWVyQ3VydmVUbyhjeCArIHJ4LCBjeSArIEtBUFBBICogcnksIGN4ICsgS0FQUEEgKiByeCwgY3kgKyByeSwgY3gsIGN5ICsgcnkpO1xuICAgICAgY3R4LmJlemllckN1cnZlVG8oY3ggLSBLQVBQQSAqIHJ4LCBjeSArIHJ5LCBjeCAtIHJ4LCBjeSArIEtBUFBBICogcnksIGN4IC0gcngsIGN5KTtcbiAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvKGN4IC0gcngsIGN5IC0gS0FQUEEgKiByeSwgY3ggLSBLQVBQQSAqIHJ4LCBjeSAtIHJ5LCBjeCwgY3kgLSByeSk7XG4gICAgICBjdHguYmV6aWVyQ3VydmVUbyhjeCArIEtBUFBBICogcngsIGN5IC0gcnksIGN4ICsgcngsIGN5IC0gS0FQUEEgKiByeSwgY3ggKyByeCwgY3kpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQm91bmRpbmdCb3goY3ggLSByeCwgY3kgLSByeSwgY3ggKyByeCwgY3kgKyByeSk7XG4gIH1cblxuICBnZXRNYXJrZXJzKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn1cblxuY2xhc3MgTGluZUVsZW1lbnQgZXh0ZW5kcyBQYXRoRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy50eXBlID0gJ2xpbmUnO1xuICB9XG5cbiAgZ2V0UG9pbnRzKCkge1xuICAgIHJldHVybiBbbmV3IFBvaW50KHRoaXMuZ2V0QXR0cmlidXRlKCd4MScpLmdldFBpeGVscygneCcpLCB0aGlzLmdldEF0dHJpYnV0ZSgneTEnKS5nZXRQaXhlbHMoJ3knKSksIG5ldyBQb2ludCh0aGlzLmdldEF0dHJpYnV0ZSgneDInKS5nZXRQaXhlbHMoJ3gnKSwgdGhpcy5nZXRBdHRyaWJ1dGUoJ3kyJykuZ2V0UGl4ZWxzKCd5JykpXTtcbiAgfVxuXG4gIHBhdGgoY3R4KSB7XG4gICAgdmFyIFt7XG4gICAgICB4OiB4MCxcbiAgICAgIHk6IHkwXG4gICAgfSwge1xuICAgICAgeDogeDEsXG4gICAgICB5OiB5MVxuICAgIH1dID0gdGhpcy5nZXRQb2ludHMoKTtcblxuICAgIGlmIChjdHgpIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8oeDAsIHkwKTtcbiAgICAgIGN0eC5saW5lVG8oeDEsIHkxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEJvdW5kaW5nQm94KHgwLCB5MCwgeDEsIHkxKTtcbiAgfVxuXG4gIGdldE1hcmtlcnMoKSB7XG4gICAgdmFyIFtwMCwgcDFdID0gdGhpcy5nZXRQb2ludHMoKTtcbiAgICB2YXIgYSA9IHAwLmFuZ2xlVG8ocDEpO1xuICAgIHJldHVybiBbW3AwLCBhXSwgW3AxLCBhXV07XG4gIH1cblxufVxuXG5jbGFzcyBQb2x5bGluZUVsZW1lbnQgZXh0ZW5kcyBQYXRoRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvY3VtZW50LCBub2RlLCBjYXB0dXJlVGV4dE5vZGVzKSB7XG4gICAgc3VwZXIoZG9jdW1lbnQsIG5vZGUsIGNhcHR1cmVUZXh0Tm9kZXMpO1xuICAgIHRoaXMudHlwZSA9ICdwb2x5bGluZSc7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnBvaW50cyA9IFBvaW50LnBhcnNlUGF0aCh0aGlzLmdldEF0dHJpYnV0ZSgncG9pbnRzJykuZ2V0U3RyaW5nKCkpO1xuICB9XG5cbiAgcGF0aChjdHgpIHtcbiAgICB2YXIge1xuICAgICAgcG9pbnRzXG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIFt7XG4gICAgICB4OiB4MCxcbiAgICAgIHk6IHkwXG4gICAgfV0gPSBwb2ludHM7XG4gICAgdmFyIGJvdW5kaW5nQm94ID0gbmV3IEJvdW5kaW5nQm94KHgwLCB5MCk7XG5cbiAgICBpZiAoY3R4KSB7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHgwLCB5MCk7XG4gICAgfVxuXG4gICAgcG9pbnRzLmZvckVhY2goKF9yZWYpID0+IHtcbiAgICAgIHZhciB7XG4gICAgICAgIHgsXG4gICAgICAgIHlcbiAgICAgIH0gPSBfcmVmO1xuICAgICAgYm91bmRpbmdCb3guYWRkUG9pbnQoeCwgeSk7XG5cbiAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYm91bmRpbmdCb3g7XG4gIH1cblxuICBnZXRNYXJrZXJzKCkge1xuICAgIHZhciB7XG4gICAgICBwb2ludHNcbiAgICB9ID0gdGhpcztcbiAgICB2YXIgbGFzdEluZGV4ID0gcG9pbnRzLmxlbmd0aCAtIDE7XG4gICAgdmFyIG1hcmtlcnMgPSBbXTtcbiAgICBwb2ludHMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgIGlmIChpID09PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBtYXJrZXJzLnB1c2goW3BvaW50LCBwb2ludC5hbmdsZVRvKHBvaW50c1tpICsgMV0pXSk7XG4gICAgfSk7XG5cbiAgICBpZiAobWFya2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICBtYXJrZXJzLnB1c2goW3BvaW50c1twb2ludHMubGVuZ3RoIC0gMV0sIG1hcmtlcnNbbWFya2Vycy5sZW5ndGggLSAxXVsxXV0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXJrZXJzO1xuICB9XG5cbn1cblxuY2xhc3MgUG9seWdvbkVsZW1lbnQgZXh0ZW5kcyBQb2x5bGluZUVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMudHlwZSA9ICdwb2x5Z29uJztcbiAgfVxuXG4gIHBhdGgoY3R4KSB7XG4gICAgdmFyIGJvdW5kaW5nQm94ID0gc3VwZXIucGF0aChjdHgpO1xuICAgIHZhciBbe1xuICAgICAgeCxcbiAgICAgIHlcbiAgICB9XSA9IHRoaXMucG9pbnRzO1xuXG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYm91bmRpbmdCb3g7XG4gIH1cblxufVxuXG5jbGFzcyBQYXR0ZXJuRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMudHlwZSA9ICdwYXR0ZXJuJztcbiAgfVxuXG4gIGNyZWF0ZVBhdHRlcm4oY3R4LCBfLCBwYXJlbnRPcGFjaXR5UHJvcCkge1xuICAgIHZhciB3aWR0aCA9IHRoaXMuZ2V0U3R5bGUoJ3dpZHRoJykuZ2V0UGl4ZWxzKCd4JywgdHJ1ZSk7XG4gICAgdmFyIGhlaWdodCA9IHRoaXMuZ2V0U3R5bGUoJ2hlaWdodCcpLmdldFBpeGVscygneScsIHRydWUpOyAvLyByZW5kZXIgbWUgdXNpbmcgYSB0ZW1wb3Jhcnkgc3ZnIGVsZW1lbnRcblxuICAgIHZhciBwYXR0ZXJuU3ZnID0gbmV3IFNWR0VsZW1lbnQodGhpcy5kb2N1bWVudCwgbnVsbCk7XG4gICAgcGF0dGVyblN2Zy5hdHRyaWJ1dGVzLnZpZXdCb3ggPSBuZXcgUHJvcGVydHkodGhpcy5kb2N1bWVudCwgJ3ZpZXdCb3gnLCB0aGlzLmdldEF0dHJpYnV0ZSgndmlld0JveCcpLmdldFZhbHVlKCkpO1xuICAgIHBhdHRlcm5TdmcuYXR0cmlidXRlcy53aWR0aCA9IG5ldyBQcm9wZXJ0eSh0aGlzLmRvY3VtZW50LCAnd2lkdGgnLCBcIlwiLmNvbmNhdCh3aWR0aCwgXCJweFwiKSk7XG4gICAgcGF0dGVyblN2Zy5hdHRyaWJ1dGVzLmhlaWdodCA9IG5ldyBQcm9wZXJ0eSh0aGlzLmRvY3VtZW50LCAnaGVpZ2h0JywgXCJcIi5jb25jYXQoaGVpZ2h0LCBcInB4XCIpKTtcbiAgICBwYXR0ZXJuU3ZnLmF0dHJpYnV0ZXMudHJhbnNmb3JtID0gbmV3IFByb3BlcnR5KHRoaXMuZG9jdW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLmdldEF0dHJpYnV0ZSgncGF0dGVyblRyYW5zZm9ybScpLmdldFZhbHVlKCkpO1xuICAgIHBhdHRlcm5TdmcuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuICAgIHZhciBwYXR0ZXJuQ2FudmFzID0gdGhpcy5kb2N1bWVudC5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XG4gICAgdmFyIHBhdHRlcm5DdHggPSBwYXR0ZXJuQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdmFyIHhBdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3gnKTtcbiAgICB2YXIgeUF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZSgneScpO1xuXG4gICAgaWYgKHhBdHRyLmhhc1ZhbHVlKCkgJiYgeUF0dHIuaGFzVmFsdWUoKSkge1xuICAgICAgcGF0dGVybkN0eC50cmFuc2xhdGUoeEF0dHIuZ2V0UGl4ZWxzKCd4JywgdHJ1ZSksIHlBdHRyLmdldFBpeGVscygneScsIHRydWUpKTtcbiAgICB9XG5cbiAgICBpZiAocGFyZW50T3BhY2l0eVByb3AuaGFzVmFsdWUoKSkge1xuICAgICAgdGhpcy5zdHlsZXNbJ2ZpbGwtb3BhY2l0eSddID0gcGFyZW50T3BhY2l0eVByb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGhpcy5zdHlsZXMsICdmaWxsLW9wYWNpdHknKTtcbiAgICB9IC8vIHJlbmRlciAzeDMgZ3JpZCBzbyB3aGVuIHdlIHRyYW5zZm9ybSB0aGVyZSdzIG5vIHdoaXRlIHNwYWNlIG9uIGVkZ2VzXG5cblxuICAgIGZvciAodmFyIHggPSAtMTsgeCA8PSAxOyB4KyspIHtcbiAgICAgIGZvciAodmFyIHkgPSAtMTsgeSA8PSAxOyB5KyspIHtcbiAgICAgICAgcGF0dGVybkN0eC5zYXZlKCk7XG4gICAgICAgIHBhdHRlcm5TdmcuYXR0cmlidXRlcy54ID0gbmV3IFByb3BlcnR5KHRoaXMuZG9jdW1lbnQsICd4JywgeCAqIHBhdHRlcm5DYW52YXMud2lkdGgpO1xuICAgICAgICBwYXR0ZXJuU3ZnLmF0dHJpYnV0ZXMueSA9IG5ldyBQcm9wZXJ0eSh0aGlzLmRvY3VtZW50LCAneScsIHkgKiBwYXR0ZXJuQ2FudmFzLmhlaWdodCk7XG4gICAgICAgIHBhdHRlcm5TdmcucmVuZGVyKHBhdHRlcm5DdHgpO1xuICAgICAgICBwYXR0ZXJuQ3R4LnJlc3RvcmUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcGF0dGVybiA9IGN0eC5jcmVhdGVQYXR0ZXJuKHBhdHRlcm5DYW52YXMsICdyZXBlYXQnKTtcbiAgICByZXR1cm4gcGF0dGVybjtcbiAgfVxuXG59XG5cbmNsYXNzIE1hcmtlckVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgfVxuXG4gIHJlbmRlcihjdHgsIHBvaW50LCBhbmdsZSkge1xuICAgIGlmICghcG9pbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIge1xuICAgICAgeCxcbiAgICAgIHlcbiAgICB9ID0gcG9pbnQ7XG4gICAgdmFyIG9yaWVudCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdvcmllbnQnKS5nZXRTdHJpbmcoJ2F1dG8nKTtcbiAgICB2YXIgbWFya2VyVW5pdHMgPSB0aGlzLmdldEF0dHJpYnV0ZSgnbWFya2VyVW5pdHMnKS5nZXRTdHJpbmcoJ3N0cm9rZVdpZHRoJyk7XG4gICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcblxuICAgIGlmIChvcmllbnQgPT09ICdhdXRvJykge1xuICAgICAgY3R4LnJvdGF0ZShhbmdsZSk7XG4gICAgfVxuXG4gICAgaWYgKG1hcmtlclVuaXRzID09PSAnc3Ryb2tlV2lkdGgnKSB7XG4gICAgICBjdHguc2NhbGUoY3R4LmxpbmVXaWR0aCwgY3R4LmxpbmVXaWR0aCk7XG4gICAgfVxuXG4gICAgY3R4LnNhdmUoKTsgLy8gcmVuZGVyIG1lIHVzaW5nIGEgdGVtcG9yYXJ5IHN2ZyBlbGVtZW50XG5cbiAgICB2YXIgbWFya2VyU3ZnID0gbmV3IFNWR0VsZW1lbnQodGhpcy5kb2N1bWVudCwgbnVsbCk7XG4gICAgbWFya2VyU3ZnLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgbWFya2VyU3ZnLmF0dHJpYnV0ZXMudmlld0JveCA9IG5ldyBQcm9wZXJ0eSh0aGlzLmRvY3VtZW50LCAndmlld0JveCcsIHRoaXMuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JykuZ2V0VmFsdWUoKSk7XG4gICAgbWFya2VyU3ZnLmF0dHJpYnV0ZXMucmVmWCA9IG5ldyBQcm9wZXJ0eSh0aGlzLmRvY3VtZW50LCAncmVmWCcsIHRoaXMuZ2V0QXR0cmlidXRlKCdyZWZYJykuZ2V0VmFsdWUoKSk7XG4gICAgbWFya2VyU3ZnLmF0dHJpYnV0ZXMucmVmWSA9IG5ldyBQcm9wZXJ0eSh0aGlzLmRvY3VtZW50LCAncmVmWScsIHRoaXMuZ2V0QXR0cmlidXRlKCdyZWZZJykuZ2V0VmFsdWUoKSk7XG4gICAgbWFya2VyU3ZnLmF0dHJpYnV0ZXMud2lkdGggPSBuZXcgUHJvcGVydHkodGhpcy5kb2N1bWVudCwgJ3dpZHRoJywgdGhpcy5nZXRBdHRyaWJ1dGUoJ21hcmtlcldpZHRoJykuZ2V0VmFsdWUoKSk7XG4gICAgbWFya2VyU3ZnLmF0dHJpYnV0ZXMuaGVpZ2h0ID0gbmV3IFByb3BlcnR5KHRoaXMuZG9jdW1lbnQsICdoZWlnaHQnLCB0aGlzLmdldEF0dHJpYnV0ZSgnbWFya2VySGVpZ2h0JykuZ2V0VmFsdWUoKSk7XG4gICAgbWFya2VyU3ZnLmF0dHJpYnV0ZXMub3ZlcmZsb3cgPSBuZXcgUHJvcGVydHkodGhpcy5kb2N1bWVudCwgJ292ZXJmbG93JywgdGhpcy5nZXRBdHRyaWJ1dGUoJ292ZXJmbG93JykuZ2V0VmFsdWUoKSk7XG4gICAgbWFya2VyU3ZnLmF0dHJpYnV0ZXMuZmlsbCA9IG5ldyBQcm9wZXJ0eSh0aGlzLmRvY3VtZW50LCAnZmlsbCcsIHRoaXMuZ2V0QXR0cmlidXRlKCdmaWxsJykuZ2V0Q29sb3IoJ2JsYWNrJykpO1xuICAgIG1hcmtlclN2Zy5hdHRyaWJ1dGVzLnN0cm9rZSA9IG5ldyBQcm9wZXJ0eSh0aGlzLmRvY3VtZW50LCAnc3Ryb2tlJywgdGhpcy5nZXRBdHRyaWJ1dGUoJ3N0cm9rZScpLmdldFZhbHVlKCdub25lJykpO1xuICAgIG1hcmtlclN2Zy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XG4gICAgbWFya2VyU3ZnLnJlbmRlcihjdHgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICBpZiAobWFya2VyVW5pdHMgPT09ICdzdHJva2VXaWR0aCcpIHtcbiAgICAgIGN0eC5zY2FsZSgxIC8gY3R4LmxpbmVXaWR0aCwgMSAvIGN0eC5saW5lV2lkdGgpO1xuICAgIH1cblxuICAgIGlmIChvcmllbnQgPT09ICdhdXRvJykge1xuICAgICAgY3R4LnJvdGF0ZSgtYW5nbGUpO1xuICAgIH1cblxuICAgIGN0eC50cmFuc2xhdGUoLXgsIC15KTtcbiAgfVxuXG59XG5cbmNsYXNzIERlZnNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy50eXBlID0gJ2RlZnMnO1xuICB9XG5cbiAgcmVuZGVyKCkgey8vIE5PT1BcbiAgfVxuXG59XG5cbmNsYXNzIEdFbGVtZW50IGV4dGVuZHMgUmVuZGVyZWRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnR5cGUgPSAnZyc7XG4gIH1cblxuICBnZXRCb3VuZGluZ0JveChjdHgpIHtcbiAgICB2YXIgYm91bmRpbmdCb3ggPSBuZXcgQm91bmRpbmdCb3goKTtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgYm91bmRpbmdCb3guYWRkQm91bmRpbmdCb3goY2hpbGQuZ2V0Qm91bmRpbmdCb3goY3R4KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJvdW5kaW5nQm94O1xuICB9XG5cbn1cblxuY2xhc3MgR3JhZGllbnRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvY3VtZW50LCBub2RlLCBjYXB0dXJlVGV4dE5vZGVzKSB7XG4gICAgc3VwZXIoZG9jdW1lbnQsIG5vZGUsIGNhcHR1cmVUZXh0Tm9kZXMpO1xuICAgIHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdCA9IFsnZ3JhZGllbnRVbml0cyddO1xuICAgIHRoaXMuc3RvcHMgPSBbXTtcbiAgICB2YXIge1xuICAgICAgc3RvcHMsXG4gICAgICBjaGlsZHJlblxuICAgIH0gPSB0aGlzO1xuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdzdG9wJykge1xuICAgICAgICBzdG9wcy5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEdyYWRpZW50VW5pdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdncmFkaWVudFVuaXRzJykuZ2V0U3RyaW5nKCdvYmplY3RCb3VuZGluZ0JveCcpO1xuICB9XG5cbiAgY3JlYXRlR3JhZGllbnQoY3R4LCBlbGVtZW50LCBwYXJlbnRPcGFjaXR5UHJvcCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhcywgY29uc2lzdGVudC10aGlzXG4gICAgdmFyIHN0b3BzQ29udGFpbmVyID0gdGhpcztcblxuICAgIGlmICh0aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS5oYXNWYWx1ZSgpKSB7XG4gICAgICBzdG9wc0NvbnRhaW5lciA9IHRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmdldERlZmluaXRpb24oKTtcbiAgICAgIHRoaXMuaW5oZXJpdFN0b3BDb250YWluZXIoc3RvcHNDb250YWluZXIpO1xuICAgIH1cblxuICAgIHZhciB7XG4gICAgICBzdG9wc1xuICAgIH0gPSBzdG9wc0NvbnRhaW5lcjtcbiAgICB2YXIgZ3JhZGllbnQgPSB0aGlzLmdldEdyYWRpZW50KGN0eCwgZWxlbWVudCk7XG5cbiAgICBpZiAoIWdyYWRpZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRQYXJlbnRPcGFjaXR5KHBhcmVudE9wYWNpdHlQcm9wLCBzdG9wc1tzdG9wcy5sZW5ndGggLSAxXS5jb2xvcik7XG4gICAgfVxuXG4gICAgc3RvcHMuZm9yRWFjaChzdG9wID0+IHtcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChzdG9wLm9mZnNldCwgdGhpcy5hZGRQYXJlbnRPcGFjaXR5KHBhcmVudE9wYWNpdHlQcm9wLCBzdG9wLmNvbG9yKSk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ2dyYWRpZW50VHJhbnNmb3JtJykuaGFzVmFsdWUoKSkge1xuICAgICAgLy8gcmVuZGVyIGFzIHRyYW5zZm9ybWVkIHBhdHRlcm4gb24gdGVtcG9yYXJ5IGNhbnZhc1xuICAgICAgdmFyIHtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgdmFyIHtcbiAgICAgICAgTUFYX1ZJUlRVQUxfUElYRUxTLFxuICAgICAgICB2aWV3UG9ydFxuICAgICAgfSA9IGRvY3VtZW50LnNjcmVlbjtcbiAgICAgIHZhciBbcm9vdFZpZXddID0gdmlld1BvcnQudmlld1BvcnRzO1xuICAgICAgdmFyIHJlY3QgPSBuZXcgUmVjdEVsZW1lbnQoZG9jdW1lbnQsIG51bGwpO1xuICAgICAgcmVjdC5hdHRyaWJ1dGVzLnggPSBuZXcgUHJvcGVydHkoZG9jdW1lbnQsICd4JywgLU1BWF9WSVJUVUFMX1BJWEVMUyAvIDMuMCk7XG4gICAgICByZWN0LmF0dHJpYnV0ZXMueSA9IG5ldyBQcm9wZXJ0eShkb2N1bWVudCwgJ3knLCAtTUFYX1ZJUlRVQUxfUElYRUxTIC8gMy4wKTtcbiAgICAgIHJlY3QuYXR0cmlidXRlcy53aWR0aCA9IG5ldyBQcm9wZXJ0eShkb2N1bWVudCwgJ3dpZHRoJywgTUFYX1ZJUlRVQUxfUElYRUxTKTtcbiAgICAgIHJlY3QuYXR0cmlidXRlcy5oZWlnaHQgPSBuZXcgUHJvcGVydHkoZG9jdW1lbnQsICdoZWlnaHQnLCBNQVhfVklSVFVBTF9QSVhFTFMpO1xuICAgICAgdmFyIGdyb3VwID0gbmV3IEdFbGVtZW50KGRvY3VtZW50LCBudWxsKTtcbiAgICAgIGdyb3VwLmF0dHJpYnV0ZXMudHJhbnNmb3JtID0gbmV3IFByb3BlcnR5KGRvY3VtZW50LCAndHJhbnNmb3JtJywgdGhpcy5nZXRBdHRyaWJ1dGUoJ2dyYWRpZW50VHJhbnNmb3JtJykuZ2V0VmFsdWUoKSk7XG4gICAgICBncm91cC5jaGlsZHJlbiA9IFtyZWN0XTtcbiAgICAgIHZhciBwYXR0ZXJuU3ZnID0gbmV3IFNWR0VsZW1lbnQoZG9jdW1lbnQsIG51bGwpO1xuICAgICAgcGF0dGVyblN2Zy5hdHRyaWJ1dGVzLnggPSBuZXcgUHJvcGVydHkoZG9jdW1lbnQsICd4JywgMCk7XG4gICAgICBwYXR0ZXJuU3ZnLmF0dHJpYnV0ZXMueSA9IG5ldyBQcm9wZXJ0eShkb2N1bWVudCwgJ3knLCAwKTtcbiAgICAgIHBhdHRlcm5TdmcuYXR0cmlidXRlcy53aWR0aCA9IG5ldyBQcm9wZXJ0eShkb2N1bWVudCwgJ3dpZHRoJywgcm9vdFZpZXcud2lkdGgpO1xuICAgICAgcGF0dGVyblN2Zy5hdHRyaWJ1dGVzLmhlaWdodCA9IG5ldyBQcm9wZXJ0eShkb2N1bWVudCwgJ2hlaWdodCcsIHJvb3RWaWV3LmhlaWdodCk7XG4gICAgICBwYXR0ZXJuU3ZnLmNoaWxkcmVuID0gW2dyb3VwXTtcbiAgICAgIHZhciBwYXR0ZXJuQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlQ2FudmFzKHJvb3RWaWV3LndpZHRoLCByb290Vmlldy5oZWlnaHQpO1xuICAgICAgdmFyIHBhdHRlcm5DdHggPSBwYXR0ZXJuQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBwYXR0ZXJuQ3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgcGF0dGVyblN2Zy5yZW5kZXIocGF0dGVybkN0eCk7XG4gICAgICByZXR1cm4gcGF0dGVybkN0eC5jcmVhdGVQYXR0ZXJuKHBhdHRlcm5DYW52YXMsICduby1yZXBlYXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ3JhZGllbnQ7XG4gIH1cblxuICBpbmhlcml0U3RvcENvbnRhaW5lcihzdG9wc0NvbnRhaW5lcikge1xuICAgIHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5mb3JFYWNoKGF0dHJpYnV0ZVRvSW5oZXJpdCA9PiB7XG4gICAgICBpZiAoIXRoaXMuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZVRvSW5oZXJpdCkuaGFzVmFsdWUoKSAmJiBzdG9wc0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlVG9Jbmhlcml0KS5oYXNWYWx1ZSgpKSB7XG4gICAgICAgIHRoaXMuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZVRvSW5oZXJpdCwgdHJ1ZSkuc2V0VmFsdWUoc3RvcHNDb250YWluZXIuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZVRvSW5oZXJpdCkuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRQYXJlbnRPcGFjaXR5KHBhcmVudE9wYWNpdHlQcm9wLCBjb2xvcikge1xuICAgIGlmIChwYXJlbnRPcGFjaXR5UHJvcC5oYXNWYWx1ZSgpKSB7XG4gICAgICB2YXIgY29sb3JQcm9wID0gbmV3IFByb3BlcnR5KHRoaXMuZG9jdW1lbnQsICdjb2xvcicsIGNvbG9yKTtcbiAgICAgIHJldHVybiBjb2xvclByb3AuYWRkT3BhY2l0eShwYXJlbnRPcGFjaXR5UHJvcCkuZ2V0Q29sb3IoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxufVxuXG5jbGFzcyBMaW5lYXJHcmFkaWVudEVsZW1lbnQgZXh0ZW5kcyBHcmFkaWVudEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb2N1bWVudCwgbm9kZSwgY2FwdHVyZVRleHROb2Rlcykge1xuICAgIHN1cGVyKGRvY3VtZW50LCBub2RlLCBjYXB0dXJlVGV4dE5vZGVzKTtcbiAgICB0aGlzLnR5cGUgPSAnbGluZWFyR3JhZGllbnQnO1xuICAgIHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKCd4MScsICd5MScsICd4MicsICd5MicpO1xuICB9XG5cbiAgZ2V0R3JhZGllbnQoY3R4LCBlbGVtZW50KSB7XG4gICAgdmFyIGlzQm91bmRpbmdCb3hVbml0cyA9IHRoaXMuZ2V0R3JhZGllbnRVbml0cygpID09PSAnb2JqZWN0Qm91bmRpbmdCb3gnO1xuICAgIHZhciBib3VuZGluZ0JveCA9IGlzQm91bmRpbmdCb3hVbml0cyA/IGVsZW1lbnQuZ2V0Qm91bmRpbmdCb3goY3R4KSA6IG51bGw7XG5cbiAgICBpZiAoaXNCb3VuZGluZ0JveFVuaXRzICYmICFib3VuZGluZ0JveCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmdldEF0dHJpYnV0ZSgneDEnKS5oYXNWYWx1ZSgpICYmICF0aGlzLmdldEF0dHJpYnV0ZSgneTEnKS5oYXNWYWx1ZSgpICYmICF0aGlzLmdldEF0dHJpYnV0ZSgneDInKS5oYXNWYWx1ZSgpICYmICF0aGlzLmdldEF0dHJpYnV0ZSgneTInKS5oYXNWYWx1ZSgpKSB7XG4gICAgICB0aGlzLmdldEF0dHJpYnV0ZSgneDEnLCB0cnVlKS5zZXRWYWx1ZSgwKTtcbiAgICAgIHRoaXMuZ2V0QXR0cmlidXRlKCd5MScsIHRydWUpLnNldFZhbHVlKDApO1xuICAgICAgdGhpcy5nZXRBdHRyaWJ1dGUoJ3gyJywgdHJ1ZSkuc2V0VmFsdWUoMSk7XG4gICAgICB0aGlzLmdldEF0dHJpYnV0ZSgneTInLCB0cnVlKS5zZXRWYWx1ZSgwKTtcbiAgICB9XG5cbiAgICB2YXIgeDEgPSBpc0JvdW5kaW5nQm94VW5pdHMgPyBib3VuZGluZ0JveC54ICsgYm91bmRpbmdCb3gud2lkdGggKiB0aGlzLmdldEF0dHJpYnV0ZSgneDEnKS5nZXROdW1iZXIoKSA6IHRoaXMuZ2V0QXR0cmlidXRlKCd4MScpLmdldFBpeGVscygneCcpO1xuICAgIHZhciB5MSA9IGlzQm91bmRpbmdCb3hVbml0cyA/IGJvdW5kaW5nQm94LnkgKyBib3VuZGluZ0JveC5oZWlnaHQgKiB0aGlzLmdldEF0dHJpYnV0ZSgneTEnKS5nZXROdW1iZXIoKSA6IHRoaXMuZ2V0QXR0cmlidXRlKCd5MScpLmdldFBpeGVscygneScpO1xuICAgIHZhciB4MiA9IGlzQm91bmRpbmdCb3hVbml0cyA/IGJvdW5kaW5nQm94LnggKyBib3VuZGluZ0JveC53aWR0aCAqIHRoaXMuZ2V0QXR0cmlidXRlKCd4MicpLmdldE51bWJlcigpIDogdGhpcy5nZXRBdHRyaWJ1dGUoJ3gyJykuZ2V0UGl4ZWxzKCd4Jyk7XG4gICAgdmFyIHkyID0gaXNCb3VuZGluZ0JveFVuaXRzID8gYm91bmRpbmdCb3gueSArIGJvdW5kaW5nQm94LmhlaWdodCAqIHRoaXMuZ2V0QXR0cmlidXRlKCd5MicpLmdldE51bWJlcigpIDogdGhpcy5nZXRBdHRyaWJ1dGUoJ3kyJykuZ2V0UGl4ZWxzKCd5Jyk7XG5cbiAgICBpZiAoeDEgPT09IHgyICYmIHkxID09PSB5Mikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCh4MSwgeTEsIHgyLCB5Mik7XG4gIH1cblxufVxuXG5jbGFzcyBSYWRpYWxHcmFkaWVudEVsZW1lbnQgZXh0ZW5kcyBHcmFkaWVudEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb2N1bWVudCwgbm9kZSwgY2FwdHVyZVRleHROb2Rlcykge1xuICAgIHN1cGVyKGRvY3VtZW50LCBub2RlLCBjYXB0dXJlVGV4dE5vZGVzKTtcbiAgICB0aGlzLnR5cGUgPSAncmFkaWFsR3JhZGllbnQnO1xuICAgIHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKCdjeCcsICdjeScsICdyJywgJ2Z4JywgJ2Z5JywgJ2ZyJyk7XG4gIH1cblxuICBnZXRHcmFkaWVudChjdHgsIGVsZW1lbnQpIHtcbiAgICB2YXIgaXNCb3VuZGluZ0JveFVuaXRzID0gdGhpcy5nZXRHcmFkaWVudFVuaXRzKCkgPT09ICdvYmplY3RCb3VuZGluZ0JveCc7XG4gICAgdmFyIGJvdW5kaW5nQm94ID0gZWxlbWVudC5nZXRCb3VuZGluZ0JveChjdHgpO1xuXG4gICAgaWYgKGlzQm91bmRpbmdCb3hVbml0cyAmJiAhYm91bmRpbmdCb3gpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ2N4JykuaGFzVmFsdWUoKSkge1xuICAgICAgdGhpcy5nZXRBdHRyaWJ1dGUoJ2N4JywgdHJ1ZSkuc2V0VmFsdWUoJzUwJScpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ2N5JykuaGFzVmFsdWUoKSkge1xuICAgICAgdGhpcy5nZXRBdHRyaWJ1dGUoJ2N5JywgdHJ1ZSkuc2V0VmFsdWUoJzUwJScpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ3InKS5oYXNWYWx1ZSgpKSB7XG4gICAgICB0aGlzLmdldEF0dHJpYnV0ZSgncicsIHRydWUpLnNldFZhbHVlKCc1MCUnKTtcbiAgICB9XG5cbiAgICB2YXIgY3ggPSBpc0JvdW5kaW5nQm94VW5pdHMgPyBib3VuZGluZ0JveC54ICsgYm91bmRpbmdCb3gud2lkdGggKiB0aGlzLmdldEF0dHJpYnV0ZSgnY3gnKS5nZXROdW1iZXIoKSA6IHRoaXMuZ2V0QXR0cmlidXRlKCdjeCcpLmdldFBpeGVscygneCcpO1xuICAgIHZhciBjeSA9IGlzQm91bmRpbmdCb3hVbml0cyA/IGJvdW5kaW5nQm94LnkgKyBib3VuZGluZ0JveC5oZWlnaHQgKiB0aGlzLmdldEF0dHJpYnV0ZSgnY3knKS5nZXROdW1iZXIoKSA6IHRoaXMuZ2V0QXR0cmlidXRlKCdjeScpLmdldFBpeGVscygneScpO1xuICAgIHZhciBmeCA9IGN4O1xuICAgIHZhciBmeSA9IGN5O1xuXG4gICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCdmeCcpLmhhc1ZhbHVlKCkpIHtcbiAgICAgIGZ4ID0gaXNCb3VuZGluZ0JveFVuaXRzID8gYm91bmRpbmdCb3gueCArIGJvdW5kaW5nQm94LndpZHRoICogdGhpcy5nZXRBdHRyaWJ1dGUoJ2Z4JykuZ2V0TnVtYmVyKCkgOiB0aGlzLmdldEF0dHJpYnV0ZSgnZngnKS5nZXRQaXhlbHMoJ3gnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ2Z5JykuaGFzVmFsdWUoKSkge1xuICAgICAgZnkgPSBpc0JvdW5kaW5nQm94VW5pdHMgPyBib3VuZGluZ0JveC55ICsgYm91bmRpbmdCb3guaGVpZ2h0ICogdGhpcy5nZXRBdHRyaWJ1dGUoJ2Z5JykuZ2V0TnVtYmVyKCkgOiB0aGlzLmdldEF0dHJpYnV0ZSgnZnknKS5nZXRQaXhlbHMoJ3knKTtcbiAgICB9XG5cbiAgICB2YXIgciA9IGlzQm91bmRpbmdCb3hVbml0cyA/IChib3VuZGluZ0JveC53aWR0aCArIGJvdW5kaW5nQm94LmhlaWdodCkgLyAyLjAgKiB0aGlzLmdldEF0dHJpYnV0ZSgncicpLmdldE51bWJlcigpIDogdGhpcy5nZXRBdHRyaWJ1dGUoJ3InKS5nZXRQaXhlbHMoKTtcbiAgICB2YXIgZnIgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZnInKS5nZXRQaXhlbHMoKTtcbiAgICByZXR1cm4gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGZ4LCBmeSwgZnIsIGN4LCBjeSwgcik7XG4gIH1cblxufVxuXG5jbGFzcyBTdG9wRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb2N1bWVudCwgbm9kZSwgY2FwdHVyZVRleHROb2Rlcykge1xuICAgIHN1cGVyKGRvY3VtZW50LCBub2RlLCBjYXB0dXJlVGV4dE5vZGVzKTtcbiAgICB0aGlzLnR5cGUgPSAnc3RvcCc7XG4gICAgdmFyIG9mZnNldCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHRoaXMuZ2V0QXR0cmlidXRlKCdvZmZzZXQnKS5nZXROdW1iZXIoKSkpO1xuICAgIHZhciBzdG9wT3BhY2l0eSA9IHRoaXMuZ2V0U3R5bGUoJ3N0b3Atb3BhY2l0eScpO1xuICAgIHZhciBzdG9wQ29sb3IgPSB0aGlzLmdldFN0eWxlKCdzdG9wLWNvbG9yJywgdHJ1ZSk7XG5cbiAgICBpZiAoc3RvcENvbG9yLmdldFN0cmluZygpID09PSAnJykge1xuICAgICAgc3RvcENvbG9yLnNldFZhbHVlKCcjMDAwJyk7XG4gICAgfVxuXG4gICAgaWYgKHN0b3BPcGFjaXR5Lmhhc1ZhbHVlKCkpIHtcbiAgICAgIHN0b3BDb2xvciA9IHN0b3BDb2xvci5hZGRPcGFjaXR5KHN0b3BPcGFjaXR5KTtcbiAgICB9XG5cbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICB0aGlzLmNvbG9yID0gc3RvcENvbG9yLmdldENvbG9yKCk7XG4gIH1cblxufVxuXG5jbGFzcyBBbmltYXRlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb2N1bWVudCwgbm9kZSwgY2FwdHVyZVRleHROb2Rlcykge1xuICAgIHN1cGVyKGRvY3VtZW50LCBub2RlLCBjYXB0dXJlVGV4dE5vZGVzKTtcbiAgICB0aGlzLnR5cGUgPSAnYW5pbWF0ZSc7XG4gICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgdGhpcy5pbml0aWFsVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuaW5pdGlhbFVuaXRzID0gJyc7XG4gICAgdGhpcy5yZW1vdmVkID0gZmFsc2U7XG4gICAgdGhpcy5mcm96ZW4gPSBmYWxzZTtcbiAgICBkb2N1bWVudC5zY3JlZW4uYW5pbWF0aW9ucy5wdXNoKHRoaXMpO1xuICAgIHRoaXMuYmVnaW4gPSB0aGlzLmdldEF0dHJpYnV0ZSgnYmVnaW4nKS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICB0aGlzLm1heER1cmF0aW9uID0gdGhpcy5iZWdpbiArIHRoaXMuZ2V0QXR0cmlidXRlKCdkdXInKS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICB0aGlzLmZyb20gPSB0aGlzLmdldEF0dHJpYnV0ZSgnZnJvbScpO1xuICAgIHRoaXMudG8gPSB0aGlzLmdldEF0dHJpYnV0ZSgndG8nKTtcbiAgICB0aGlzLnZhbHVlcyA9IG5ldyBQcm9wZXJ0eShkb2N1bWVudCwgJ3ZhbHVlcycsIG51bGwpO1xuICAgIHZhciB2YWx1ZXNBdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlcycpO1xuXG4gICAgaWYgKHZhbHVlc0F0dHIuaGFzVmFsdWUoKSkge1xuICAgICAgdGhpcy52YWx1ZXMuc2V0VmFsdWUodmFsdWVzQXR0ci5nZXRTdHJpbmcoKS5zcGxpdCgnOycpKTtcbiAgICB9XG4gIH1cblxuICBnZXRQcm9wZXJ0eSgpIHtcbiAgICB2YXIgYXR0cmlidXRlVHlwZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdhdHRyaWJ1dGVUeXBlJykuZ2V0U3RyaW5nKCk7XG4gICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnYXR0cmlidXRlTmFtZScpLmdldFN0cmluZygpO1xuXG4gICAgaWYgKGF0dHJpYnV0ZVR5cGUgPT09ICdDU1MnKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0U3R5bGUoYXR0cmlidXRlTmFtZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucGFyZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB0cnVlKTtcbiAgfVxuXG4gIGNhbGNWYWx1ZSgpIHtcbiAgICB2YXIge1xuICAgICAgaW5pdGlhbFVuaXRzXG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIHtcbiAgICAgIHByb2dyZXNzLFxuICAgICAgZnJvbSxcbiAgICAgIHRvXG4gICAgfSA9IHRoaXMuZ2V0UHJvZ3Jlc3MoKTsgLy8gdHdlZW4gdmFsdWUgbGluZWFybHlcblxuICAgIHZhciBuZXdWYWx1ZSA9IGZyb20uZ2V0TnVtYmVyKCkgKyAodG8uZ2V0TnVtYmVyKCkgLSBmcm9tLmdldE51bWJlcigpKSAqIHByb2dyZXNzO1xuXG4gICAgaWYgKGluaXRpYWxVbml0cyA9PT0gJyUnKSB7XG4gICAgICBuZXdWYWx1ZSAqPSAxMDAuMDsgLy8gbnVtVmFsdWUoKSByZXR1cm5zIDAtMSB3aGVyZWFzIHByb3BlcnRpZXMgYXJlIDAtMTAwXG4gICAgfVxuXG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KG5ld1ZhbHVlKS5jb25jYXQoaW5pdGlhbFVuaXRzKTtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YSkge1xuICAgIHZhciB7XG4gICAgICBwYXJlbnRcbiAgICB9ID0gdGhpcztcbiAgICB2YXIgcHJvcCA9IHRoaXMuZ2V0UHJvcGVydHkoKTsgLy8gc2V0IGluaXRpYWwgdmFsdWVcblxuICAgIGlmICghdGhpcy5pbml0aWFsVmFsdWUpIHtcbiAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gcHJvcC5nZXRTdHJpbmcoKTtcbiAgICAgIHRoaXMuaW5pdGlhbFVuaXRzID0gcHJvcC5nZXRVbml0cygpO1xuICAgIH0gLy8gaWYgd2UncmUgcGFzdCB0aGUgZW5kIHRpbWVcblxuXG4gICAgaWYgKHRoaXMuZHVyYXRpb24gPiB0aGlzLm1heER1cmF0aW9uKSB7XG4gICAgICB2YXIgZmlsbCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdmaWxsJykuZ2V0U3RyaW5nKCdyZW1vdmUnKTsgLy8gbG9vcCBmb3IgaW5kZWZpbml0ZWx5IHJlcGVhdGluZyBhbmltYXRpb25zXG5cbiAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgncmVwZWF0Q291bnQnKS5nZXRTdHJpbmcoKSA9PT0gJ2luZGVmaW5pdGUnIHx8IHRoaXMuZ2V0QXR0cmlidXRlKCdyZXBlYXREdXInKS5nZXRTdHJpbmcoKSA9PT0gJ2luZGVmaW5pdGUnKSB7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuICAgICAgfSBlbHNlIGlmIChmaWxsID09PSAnZnJlZXplJyAmJiAhdGhpcy5mcm96ZW4pIHtcbiAgICAgICAgdGhpcy5mcm96ZW4gPSB0cnVlO1xuICAgICAgICBwYXJlbnQuYW5pbWF0aW9uRnJvemVuID0gdHJ1ZTtcbiAgICAgICAgcGFyZW50LmFuaW1hdGlvbkZyb3plblZhbHVlID0gcHJvcC5nZXRTdHJpbmcoKTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsbCA9PT0gJ3JlbW92ZScgJiYgIXRoaXMucmVtb3ZlZCkge1xuICAgICAgICB0aGlzLnJlbW92ZWQgPSB0cnVlO1xuICAgICAgICBwcm9wLnNldFZhbHVlKHBhcmVudC5hbmltYXRpb25Gcm96ZW4gPyBwYXJlbnQuYW5pbWF0aW9uRnJvemVuVmFsdWUgOiB0aGlzLmluaXRpYWxWYWx1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5kdXJhdGlvbiArPSBkZWx0YTsgLy8gaWYgd2UncmUgcGFzdCB0aGUgYmVnaW4gdGltZVxuXG4gICAgdmFyIHVwZGF0ZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmJlZ2luIDwgdGhpcy5kdXJhdGlvbikge1xuICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5jYWxjVmFsdWUoKTsgLy8gdHdlZW5cblxuICAgICAgdmFyIHR5cGVBdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3R5cGUnKTtcblxuICAgICAgaWYgKHR5cGVBdHRyLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgLy8gZm9yIHRyYW5zZm9ybSwgZXRjLlxuICAgICAgICB2YXIgdHlwZSA9IHR5cGVBdHRyLmdldFN0cmluZygpO1xuICAgICAgICBuZXdWYWx1ZSA9IFwiXCIuY29uY2F0KHR5cGUsIFwiKFwiKS5jb25jYXQobmV3VmFsdWUsIFwiKVwiKTtcbiAgICAgIH1cblxuICAgICAgcHJvcC5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICB1cGRhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlZDtcbiAgfVxuXG4gIGdldFByb2dyZXNzKCkge1xuICAgIHZhciB7XG4gICAgICBkb2N1bWVudCxcbiAgICAgIHZhbHVlc1xuICAgIH0gPSB0aGlzO1xuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICBwcm9ncmVzczogKHRoaXMuZHVyYXRpb24gLSB0aGlzLmJlZ2luKSAvICh0aGlzLm1heER1cmF0aW9uIC0gdGhpcy5iZWdpbilcbiAgICB9O1xuXG4gICAgaWYgKHZhbHVlcy5oYXNWYWx1ZSgpKSB7XG4gICAgICB2YXIgcCA9IHJlc3VsdC5wcm9ncmVzcyAqICh2YWx1ZXMuZ2V0VmFsdWUoKS5sZW5ndGggLSAxKTtcbiAgICAgIHZhciBsYiA9IE1hdGguZmxvb3IocCk7XG4gICAgICB2YXIgdWIgPSBNYXRoLmNlaWwocCk7XG4gICAgICByZXN1bHQuZnJvbSA9IG5ldyBQcm9wZXJ0eShkb2N1bWVudCwgJ2Zyb20nLCBwYXJzZUZsb2F0KHZhbHVlcy5nZXRWYWx1ZSgpW2xiXSkpO1xuICAgICAgcmVzdWx0LnRvID0gbmV3IFByb3BlcnR5KGRvY3VtZW50LCAndG8nLCBwYXJzZUZsb2F0KHZhbHVlcy5nZXRWYWx1ZSgpW3ViXSkpO1xuICAgICAgcmVzdWx0LnByb2dyZXNzID0gKHAgLSBsYikgLyAodWIgLSBsYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5mcm9tID0gdGhpcy5mcm9tO1xuICAgICAgcmVzdWx0LnRvID0gdGhpcy50bztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbn1cblxuY2xhc3MgQW5pbWF0ZUNvbG9yRWxlbWVudCBleHRlbmRzIEFuaW1hdGVFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnR5cGUgPSAnYW5pbWF0ZUNvbG9yJztcbiAgfVxuXG4gIGNhbGNWYWx1ZSgpIHtcbiAgICB2YXIge1xuICAgICAgcHJvZ3Jlc3MsXG4gICAgICBmcm9tLFxuICAgICAgdG9cbiAgICB9ID0gdGhpcy5nZXRQcm9ncmVzcygpO1xuICAgIHZhciBjb2xvckZyb20gPSBuZXcgUkdCQ29sb3IoZnJvbS5nZXRDb2xvcigpKTtcbiAgICB2YXIgY29sb3JUbyA9IG5ldyBSR0JDb2xvcih0by5nZXRDb2xvcigpKTtcblxuICAgIGlmIChjb2xvckZyb20ub2sgJiYgY29sb3JUby5vaykge1xuICAgICAgLy8gdHdlZW4gY29sb3IgbGluZWFybHlcbiAgICAgIHZhciByID0gY29sb3JGcm9tLnIgKyAoY29sb3JUby5yIC0gY29sb3JGcm9tLnIpICogcHJvZ3Jlc3M7XG4gICAgICB2YXIgZyA9IGNvbG9yRnJvbS5nICsgKGNvbG9yVG8uZyAtIGNvbG9yRnJvbS5nKSAqIHByb2dyZXNzO1xuICAgICAgdmFyIGIgPSBjb2xvckZyb20uYiArIChjb2xvclRvLmIgLSBjb2xvckZyb20uYikgKiBwcm9ncmVzczsgLy8gPyBhbHBoYVxuXG4gICAgICByZXR1cm4gXCJyZ2IoXCIuY29uY2F0KE1hdGguZmxvb3IociksIFwiLCBcIikuY29uY2F0KE1hdGguZmxvb3IoZyksIFwiLCBcIikuY29uY2F0KE1hdGguZmxvb3IoYiksIFwiKVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2Zyb20nKS5nZXRDb2xvcigpO1xuICB9XG5cbn1cblxuY2xhc3MgQW5pbWF0ZVRyYW5zZm9ybUVsZW1lbnQgZXh0ZW5kcyBBbmltYXRlRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy50eXBlID0gJ2FuaW1hdGVUcmFuc2Zvcm0nO1xuICB9XG5cbiAgY2FsY1ZhbHVlKCkge1xuICAgIHZhciB7XG4gICAgICBwcm9ncmVzcyxcbiAgICAgIGZyb20sXG4gICAgICB0b1xuICAgIH0gPSB0aGlzLmdldFByb2dyZXNzKCk7IC8vIHR3ZWVuIHZhbHVlIGxpbmVhcmx5XG5cbiAgICB2YXIgdHJhbnNmb3JtRnJvbSA9IHRvTnVtYmVycyhmcm9tLmdldFN0cmluZygpKTtcbiAgICB2YXIgdHJhbnNmb3JtVG8gPSB0b051bWJlcnModG8uZ2V0U3RyaW5nKCkpO1xuICAgIHZhciBuZXdWYWx1ZSA9IHRyYW5zZm9ybUZyb20ubWFwKChmcm9tLCBpKSA9PiB7XG4gICAgICB2YXIgdG8gPSB0cmFuc2Zvcm1Ub1tpXTtcbiAgICAgIHJldHVybiBmcm9tICsgKHRvIC0gZnJvbSkgKiBwcm9ncmVzcztcbiAgICB9KS5qb2luKCcgJyk7XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xuICB9XG5cbn1cblxuY2xhc3MgRm9udEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9jdW1lbnQsIG5vZGUsIGNhcHR1cmVUZXh0Tm9kZXMpIHtcbiAgICBzdXBlcihkb2N1bWVudCwgbm9kZSwgY2FwdHVyZVRleHROb2Rlcyk7XG4gICAgdGhpcy50eXBlID0gJ2ZvbnQnO1xuICAgIHRoaXMuZ2x5cGhzID0ge307XG4gICAgdGhpcy5ob3JpekFkdlggPSB0aGlzLmdldEF0dHJpYnV0ZSgnaG9yaXotYWR2LXgnKS5nZXROdW1iZXIoKTtcbiAgICB2YXIge1xuICAgICAgZGVmaW5pdGlvbnNcbiAgICB9ID0gZG9jdW1lbnQ7XG4gICAgdmFyIHtcbiAgICAgIGNoaWxkcmVuXG4gICAgfSA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgc3dpdGNoIChjaGlsZC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2ZvbnQtZmFjZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5mb250RmFjZSA9IGNoaWxkO1xuICAgICAgICAgICAgdmFyIGZvbnRGYW1pbHlTdHlsZSA9IGNoaWxkLmdldFN0eWxlKCdmb250LWZhbWlseScpO1xuXG4gICAgICAgICAgICBpZiAoZm9udEZhbWlseVN0eWxlLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNbZm9udEZhbWlseVN0eWxlLmdldFN0cmluZygpXSA9IHRoaXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdtaXNzaW5nLWdseXBoJzpcbiAgICAgICAgICB0aGlzLm1pc3NpbmdHbHlwaCA9IGNoaWxkO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2dseXBoJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZ2x5cGggPSBjaGlsZDtcblxuICAgICAgICAgICAgaWYgKGdseXBoLmFyYWJpY0Zvcm0pIHtcbiAgICAgICAgICAgICAgdGhpcy5pc1JUTCA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuaXNBcmFiaWMgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5nbHlwaHNbZ2x5cGgudW5pY29kZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbHlwaHNbZ2x5cGgudW5pY29kZV0gPSB7fTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuZ2x5cGhzW2dseXBoLnVuaWNvZGVdW2dseXBoLmFyYWJpY0Zvcm1dID0gZ2x5cGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmdseXBoc1tnbHlwaC51bmljb2RlXSA9IGdseXBoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkgey8vIE5PIFJFTkRFUlxuICB9XG5cbn1cblxuY2xhc3MgRm9udEZhY2VFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvY3VtZW50LCBub2RlLCBjYXB0dXJlVGV4dE5vZGVzKSB7XG4gICAgc3VwZXIoZG9jdW1lbnQsIG5vZGUsIGNhcHR1cmVUZXh0Tm9kZXMpO1xuICAgIHRoaXMudHlwZSA9ICdmb250LWZhY2UnO1xuICAgIHRoaXMuYXNjZW50ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FzY2VudCcpLmdldE51bWJlcigpO1xuICAgIHRoaXMuZGVzY2VudCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkZXNjZW50JykuZ2V0TnVtYmVyKCk7XG4gICAgdGhpcy51bml0c1BlckVtID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3VuaXRzLXBlci1lbScpLmdldE51bWJlcigpO1xuICB9XG5cbn1cblxuY2xhc3MgTWlzc2luZ0dseXBoRWxlbWVudCBleHRlbmRzIFBhdGhFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnR5cGUgPSAnbWlzc2luZy1nbHlwaCc7XG4gICAgdGhpcy5ob3JpekFkdlggPSAwO1xuICB9XG5cbn1cblxuY2xhc3MgVFJlZkVsZW1lbnQgZXh0ZW5kcyBUZXh0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy50eXBlID0gJ3RyZWYnO1xuICB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmdldERlZmluaXRpb24oKTtcblxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgZmlyc3RDaGlsZCA9IGVsZW1lbnQuY2hpbGRyZW5bMF07XG5cbiAgICAgIGlmIChmaXJzdENoaWxkKSB7XG4gICAgICAgIHJldHVybiBmaXJzdENoaWxkLmdldFRleHQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cblxufVxuXG5jbGFzcyBBRWxlbWVudCBleHRlbmRzIFRleHRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9jdW1lbnQsIG5vZGUsIGNhcHR1cmVUZXh0Tm9kZXMpIHtcbiAgICBzdXBlcihkb2N1bWVudCwgbm9kZSwgY2FwdHVyZVRleHROb2Rlcyk7XG4gICAgdGhpcy50eXBlID0gJ2EnO1xuICAgIHZhciB7XG4gICAgICBjaGlsZE5vZGVzXG4gICAgfSA9IG5vZGU7XG4gICAgdmFyIGZpcnN0Q2hpbGQgPSBjaGlsZE5vZGVzWzBdO1xuICAgIHZhciBoYXNUZXh0ID0gY2hpbGROb2Rlcy5sZW5ndGggPiAwICYmIEFycmF5LmZyb20oY2hpbGROb2RlcykuZXZlcnkobm9kZSA9PiBub2RlLm5vZGVUeXBlID09PSAzKTtcbiAgICB0aGlzLmhhc1RleHQgPSBoYXNUZXh0O1xuICAgIHRoaXMudGV4dCA9IGhhc1RleHQgPyB0aGlzLmdldFRleHRGcm9tTm9kZShmaXJzdENoaWxkKSA6ICcnO1xuICB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0O1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4oY3R4KSB7XG4gICAgaWYgKHRoaXMuaGFzVGV4dCkge1xuICAgICAgLy8gcmVuZGVyIGFzIHRleHQgZWxlbWVudFxuICAgICAgc3VwZXIucmVuZGVyQ2hpbGRyZW4oY3R4KTtcbiAgICAgIHZhciB7XG4gICAgICAgIGRvY3VtZW50LFxuICAgICAgICB4LFxuICAgICAgICB5XG4gICAgICB9ID0gdGhpcztcbiAgICAgIHZhciB7XG4gICAgICAgIG1vdXNlXG4gICAgICB9ID0gZG9jdW1lbnQuc2NyZWVuO1xuICAgICAgdmFyIGZvbnRTaXplID0gbmV3IFByb3BlcnR5KGRvY3VtZW50LCAnZm9udFNpemUnLCBGb250LnBhcnNlKGRvY3VtZW50LmN0eC5mb250KS5mb250U2l6ZSk7IC8vIERvIG5vdCBjYWxjIGJvdW5kaW5nIGJveCBpZiBtb3VzZSBpcyBub3Qgd29ya2luZy5cblxuICAgICAgaWYgKG1vdXNlLmlzV29ya2luZygpKSB7XG4gICAgICAgIG1vdXNlLmNoZWNrQm91bmRpbmdCb3godGhpcywgbmV3IEJvdW5kaW5nQm94KHgsIHkgLSBmb250U2l6ZS5nZXRQaXhlbHMoJ3knKSwgeCArIHRoaXMubWVhc3VyZVRleHQoY3R4KSwgeSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAvLyByZW5kZXIgYXMgdGVtcG9yYXJ5IGdyb3VwXG4gICAgICB2YXIgZyA9IG5ldyBHRWxlbWVudCh0aGlzLmRvY3VtZW50LCBudWxsKTtcbiAgICAgIGcuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuICAgICAgZy5wYXJlbnQgPSB0aGlzO1xuICAgICAgZy5yZW5kZXIoY3R4KTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKCkge1xuICAgIHZhciB7XG4gICAgICB3aW5kb3dcbiAgICB9ID0gdGhpcy5kb2N1bWVudDtcblxuICAgIGlmICh3aW5kb3cpIHtcbiAgICAgIHdpbmRvdy5vcGVuKHRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmdldFN0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTW92ZSgpIHtcbiAgICB2YXIgY3R4ID0gdGhpcy5kb2N1bWVudC5jdHg7XG4gICAgY3R4LmNhbnZhcy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBvd25LZXlzJDIob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMih0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDIoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQyKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuY2xhc3MgVGV4dFBhdGhFbGVtZW50IGV4dGVuZHMgVGV4dEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb2N1bWVudCwgbm9kZSwgY2FwdHVyZVRleHROb2Rlcykge1xuICAgIHN1cGVyKGRvY3VtZW50LCBub2RlLCBjYXB0dXJlVGV4dE5vZGVzKTtcbiAgICB0aGlzLnR5cGUgPSAndGV4dFBhdGgnO1xuICAgIHRoaXMudGV4dFdpZHRoID0gMDtcbiAgICB0aGlzLnRleHRIZWlnaHQgPSAwO1xuICAgIHRoaXMucGF0aExlbmd0aCA9IC0xO1xuICAgIHRoaXMuZ2x5cGhJbmZvID0gbnVsbDtcbiAgICB0aGlzLmxldHRlclNwYWNpbmdDYWNoZSA9IFtdO1xuICAgIHRoaXMubWVhc3VyZXNDYWNoZSA9IG5ldyBNYXAoW1snJywgMF1dKTtcbiAgICB2YXIgcGF0aEVsZW1lbnQgPSB0aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS5nZXREZWZpbml0aW9uKCk7XG4gICAgdGhpcy50ZXh0ID0gdGhpcy5nZXRUZXh0RnJvbU5vZGUoKTtcbiAgICB0aGlzLmRhdGFBcnJheSA9IHRoaXMucGFyc2VQYXRoRGF0YShwYXRoRWxlbWVudCk7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnRleHQ7XG4gIH1cblxuICBwYXRoKGN0eCkge1xuICAgIHZhciB7XG4gICAgICBkYXRhQXJyYXlcbiAgICB9ID0gdGhpcztcblxuICAgIGlmIChjdHgpIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICB9XG5cbiAgICBkYXRhQXJyYXkuZm9yRWFjaCgoX3JlZikgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgcG9pbnRzXG4gICAgICB9ID0gX3JlZjtcblxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgUGF0aFBhcnNlci5MSU5FX1RPOlxuICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocG9pbnRzWzBdLCBwb2ludHNbMV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUGF0aFBhcnNlci5NT1ZFX1RPOlxuICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8ocG9pbnRzWzBdLCBwb2ludHNbMV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUGF0aFBhcnNlci5DVVJWRV9UTzpcbiAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyhwb2ludHNbMF0sIHBvaW50c1sxXSwgcG9pbnRzWzJdLCBwb2ludHNbM10sIHBvaW50c1s0XSwgcG9pbnRzWzVdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFBhdGhQYXJzZXIuUVVBRF9UTzpcbiAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyhwb2ludHNbMF0sIHBvaW50c1sxXSwgcG9pbnRzWzJdLCBwb2ludHNbM10pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUGF0aFBhcnNlci5BUkM6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIFtjeCwgY3ksIHJ4LCByeSwgdGhldGEsIGRUaGV0YSwgcHNpLCBmc10gPSBwb2ludHM7XG4gICAgICAgICAgICB2YXIgciA9IHJ4ID4gcnkgPyByeCA6IHJ5O1xuICAgICAgICAgICAgdmFyIHNjYWxlWCA9IHJ4ID4gcnkgPyAxIDogcnggLyByeTtcbiAgICAgICAgICAgIHZhciBzY2FsZVkgPSByeCA+IHJ5ID8gcnkgLyByeCA6IDE7XG5cbiAgICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjeCwgY3kpO1xuICAgICAgICAgICAgICBjdHgucm90YXRlKHBzaSk7XG4gICAgICAgICAgICAgIGN0eC5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XG4gICAgICAgICAgICAgIGN0eC5hcmMoMCwgMCwgciwgdGhldGEsIHRoZXRhICsgZFRoZXRhLCBCb29sZWFuKDEgLSBmcykpO1xuICAgICAgICAgICAgICBjdHguc2NhbGUoMSAvIHNjYWxlWCwgMSAvIHNjYWxlWSk7XG4gICAgICAgICAgICAgIGN0eC5yb3RhdGUoLXBzaSk7XG4gICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLWN4LCAtY3kpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBQYXRoUGFyc2VyLkNMT1NFX1BBVEg6XG4gICAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4oY3R4KSB7XG4gICAgdGhpcy5zZXRUZXh0RGF0YShjdHgpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgdmFyIHRleHREZWNvcmF0aW9uID0gdGhpcy5wYXJlbnQuZ2V0U3R5bGUoJ3RleHQtZGVjb3JhdGlvbicpLmdldFN0cmluZygpO1xuICAgIHZhciBmb250U2l6ZSA9IHRoaXMuZ2V0Rm9udFNpemUoKTtcbiAgICB2YXIge1xuICAgICAgZ2x5cGhJbmZvXG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIGZpbGwgPSBjdHguZmlsbFN0eWxlO1xuXG4gICAgaWYgKHRleHREZWNvcmF0aW9uID09PSAndW5kZXJsaW5lJykge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIH1cblxuICAgIGdseXBoSW5mby5mb3JFYWNoKChnbHlwaCwgaSkgPT4ge1xuICAgICAgdmFyIHtcbiAgICAgICAgcDAsXG4gICAgICAgIHAxLFxuICAgICAgICByb3RhdGlvbixcbiAgICAgICAgdGV4dDogcGFydGlhbFRleHRcbiAgICAgIH0gPSBnbHlwaDtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBjdHgudHJhbnNsYXRlKHAwLngsIHAwLnkpO1xuICAgICAgY3R4LnJvdGF0ZShyb3RhdGlvbik7XG5cbiAgICAgIGlmIChjdHguZmlsbFN0eWxlKSB7XG4gICAgICAgIGN0eC5maWxsVGV4dChwYXJ0aWFsVGV4dCwgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdHguc3Ryb2tlU3R5bGUpIHtcbiAgICAgICAgY3R4LnN0cm9rZVRleHQocGFydGlhbFRleHQsIDAsIDApO1xuICAgICAgfVxuXG4gICAgICBjdHgucmVzdG9yZSgpO1xuXG4gICAgICBpZiAodGV4dERlY29yYXRpb24gPT09ICd1bmRlcmxpbmUnKSB7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgY3R4Lm1vdmVUbyhwMC54LCBwMC55ICsgZm9udFNpemUgLyA4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5saW5lVG8ocDEueCwgcDEueSArIGZvbnRTaXplIC8gNSk7XG4gICAgICB9IC8vIC8vIFRvIGFzc2lzdCB3aXRoIGRlYnVnZ2luZyB2aXN1YWxseSwgdW5jb21tZW50IGZvbGxvd2luZ1xuICAgICAgLy9cbiAgICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIC8vIGlmIChpICUgMilcbiAgICAgIC8vIFx0Y3R4LnN0cm9rZVN0eWxlID0gJ3JlZCc7XG4gICAgICAvLyBlbHNlXG4gICAgICAvLyBcdGN0eC5zdHJva2VTdHlsZSA9ICdncmVlbic7XG4gICAgICAvLyBjdHgubW92ZVRvKHAwLngsIHAwLnkpO1xuICAgICAgLy8gY3R4LmxpbmVUbyhwMS54LCBwMS55KTtcbiAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgIC8vIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIH0pO1xuXG4gICAgaWYgKHRleHREZWNvcmF0aW9uID09PSAndW5kZXJsaW5lJykge1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IGZvbnRTaXplIC8gMjA7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBmaWxsO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBnZXRMZXR0ZXJTcGFjaW5nQXQoKSB7XG4gICAgdmFyIGlkeCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICByZXR1cm4gdGhpcy5sZXR0ZXJTcGFjaW5nQ2FjaGVbaWR4XSB8fCAwO1xuICB9XG5cbiAgZmluZFNlZ21lbnRUb0ZpdENoYXIoY3R4LCBhbmNob3IsIHRleHRGdWxsV2lkdGgsIGZ1bGxQYXRoV2lkdGgsIHNwYWNlc051bWJlciwgaW5wdXRPZmZzZXQsIGR5LCBjLCBjaGFySSkge1xuICAgIHZhciBvZmZzZXQgPSBpbnB1dE9mZnNldDtcbiAgICB2YXIgZ2x5cGhXaWR0aCA9IHRoaXMubWVhc3VyZVRleHQoY3R4LCBjKTtcblxuICAgIGlmIChjID09PSAnICcgJiYgYW5jaG9yID09PSAnanVzdGlmeScgJiYgdGV4dEZ1bGxXaWR0aCA8IGZ1bGxQYXRoV2lkdGgpIHtcbiAgICAgIGdseXBoV2lkdGggKz0gKGZ1bGxQYXRoV2lkdGggLSB0ZXh0RnVsbFdpZHRoKSAvIHNwYWNlc051bWJlcjtcbiAgICB9XG5cbiAgICBpZiAoY2hhckkgPiAtMSkge1xuICAgICAgb2Zmc2V0ICs9IHRoaXMuZ2V0TGV0dGVyU3BhY2luZ0F0KGNoYXJJKTtcbiAgICB9XG5cbiAgICB2YXIgc3BsaW5lU3RlcCA9IHRoaXMudGV4dEhlaWdodCAvIDIwO1xuICAgIHZhciBwMCA9IHRoaXMuZ2V0RXF1aWRpc3RhbnRQb2ludE9uUGF0aChvZmZzZXQsIHNwbGluZVN0ZXAsIDApO1xuICAgIHZhciBwMSA9IHRoaXMuZ2V0RXF1aWRpc3RhbnRQb2ludE9uUGF0aChvZmZzZXQgKyBnbHlwaFdpZHRoLCBzcGxpbmVTdGVwLCAwKTtcbiAgICB2YXIgc2VnbWVudCA9IHtcbiAgICAgIHAwLFxuICAgICAgcDFcbiAgICB9O1xuICAgIHZhciByb3RhdGlvbiA9IHAwICYmIHAxID8gTWF0aC5hdGFuMihwMS55IC0gcDAueSwgcDEueCAtIHAwLngpIDogMDtcblxuICAgIGlmIChkeSkge1xuICAgICAgdmFyIGR5WCA9IE1hdGguY29zKE1hdGguUEkgLyAyICsgcm90YXRpb24pICogZHk7XG4gICAgICB2YXIgZHlZID0gTWF0aC5jb3MoLXJvdGF0aW9uKSAqIGR5O1xuICAgICAgc2VnbWVudC5wMCA9IF9vYmplY3RTcHJlYWQkMihfb2JqZWN0U3ByZWFkJDIoe30sIHAwKSwge30sIHtcbiAgICAgICAgeDogcDAueCArIGR5WCxcbiAgICAgICAgeTogcDAueSArIGR5WVxuICAgICAgfSk7XG4gICAgICBzZWdtZW50LnAxID0gX29iamVjdFNwcmVhZCQyKF9vYmplY3RTcHJlYWQkMih7fSwgcDEpLCB7fSwge1xuICAgICAgICB4OiBwMS54ICsgZHlYLFxuICAgICAgICB5OiBwMS55ICsgZHlZXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBvZmZzZXQgKz0gZ2x5cGhXaWR0aDtcbiAgICByZXR1cm4ge1xuICAgICAgb2Zmc2V0LFxuICAgICAgc2VnbWVudCxcbiAgICAgIHJvdGF0aW9uXG4gICAgfTtcbiAgfVxuXG4gIG1lYXN1cmVUZXh0KGN0eCwgdGV4dCkge1xuICAgIHZhciB7XG4gICAgICBtZWFzdXJlc0NhY2hlXG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIHRhcmdldFRleHQgPSB0ZXh0IHx8IHRoaXMuZ2V0VGV4dCgpO1xuXG4gICAgaWYgKG1lYXN1cmVzQ2FjaGUuaGFzKHRhcmdldFRleHQpKSB7XG4gICAgICByZXR1cm4gbWVhc3VyZXNDYWNoZS5nZXQodGFyZ2V0VGV4dCk7XG4gICAgfVxuXG4gICAgdmFyIG1lYXN1cmUgPSB0aGlzLm1lYXN1cmVUYXJnZXRUZXh0KGN0eCwgdGFyZ2V0VGV4dCk7XG4gICAgbWVhc3VyZXNDYWNoZS5zZXQodGFyZ2V0VGV4dCwgbWVhc3VyZSk7XG4gICAgcmV0dXJuIG1lYXN1cmU7XG4gIH0gLy8gVGhpcyBtZXRob2Qgc3VwcG9zZXMgd2hhdCBhbGwgY3VzdG9tIGZvbnRzIGFscmVhZHkgbG9hZGVkLlxuICAvLyBJZiBzb21lIGZvbnQgd2lsbCBiZSBsb2FkZWQgYWZ0ZXIgdGhpcyBtZXRob2QgY2FsbCwgPHRleHRQYXRoPiB3aWxsIG5vdCBiZSByZW5kZXJlZCBjb3JyZWN0bHkuXG4gIC8vIFlvdSBuZWVkIHRvIGNhbGwgdGhpcyBtZXRob2QgbWFudWFsbHkgdG8gdXBkYXRlIGdseXBocyBjYWNoZS5cblxuXG4gIHNldFRleHREYXRhKGN0eCkge1xuICAgIGlmICh0aGlzLmdseXBoSW5mbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciByZW5kZXJUZXh0ID0gdGhpcy5nZXRUZXh0KCk7XG4gICAgdmFyIGNoYXJzID0gcmVuZGVyVGV4dC5zcGxpdCgnJyk7XG4gICAgdmFyIHNwYWNlc051bWJlciA9IHJlbmRlclRleHQuc3BsaXQoJyAnKS5sZW5ndGggLSAxO1xuICAgIHZhciBkeCA9IHRoaXMucGFyZW50LmdldEF0dHJpYnV0ZSgnZHgnKS5zcGxpdCgpLm1hcChfID0+IF8uZ2V0UGl4ZWxzKCd4JykpO1xuICAgIHZhciBkeSA9IHRoaXMucGFyZW50LmdldEF0dHJpYnV0ZSgnZHknKS5nZXRQaXhlbHMoJ3knKTtcbiAgICB2YXIgYW5jaG9yID0gdGhpcy5wYXJlbnQuZ2V0U3R5bGUoJ3RleHQtYW5jaG9yJykuZ2V0U3RyaW5nKCdzdGFydCcpO1xuICAgIHZhciB0aGlzU3BhY2luZyA9IHRoaXMuZ2V0U3R5bGUoJ2xldHRlci1zcGFjaW5nJyk7XG4gICAgdmFyIHBhcmVudFNwYWNpbmcgPSB0aGlzLnBhcmVudC5nZXRTdHlsZSgnbGV0dGVyLXNwYWNpbmcnKTtcbiAgICB2YXIgbGV0dGVyU3BhY2luZyA9IDA7XG5cbiAgICBpZiAoIXRoaXNTcGFjaW5nLmhhc1ZhbHVlKCkgfHwgdGhpc1NwYWNpbmcuZ2V0VmFsdWUoKSA9PT0gJ2luaGVyaXQnKSB7XG4gICAgICBsZXR0ZXJTcGFjaW5nID0gcGFyZW50U3BhY2luZy5nZXRQaXhlbHMoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXNTcGFjaW5nLmhhc1ZhbHVlKCkpIHtcbiAgICAgIGlmICh0aGlzU3BhY2luZy5nZXRWYWx1ZSgpICE9PSAnaW5pdGlhbCcgJiYgdGhpc1NwYWNpbmcuZ2V0VmFsdWUoKSAhPT0gJ3Vuc2V0Jykge1xuICAgICAgICBsZXR0ZXJTcGFjaW5nID0gdGhpc1NwYWNpbmcuZ2V0UGl4ZWxzKCk7XG4gICAgICB9XG4gICAgfSAvLyBmaWxsIGxldHRlci1zcGFjaW5nIGNhY2hlXG5cblxuICAgIHZhciBsZXR0ZXJTcGFjaW5nQ2FjaGUgPSBbXTtcbiAgICB2YXIgdGV4dExlbiA9IHJlbmRlclRleHQubGVuZ3RoO1xuICAgIHRoaXMubGV0dGVyU3BhY2luZ0NhY2hlID0gbGV0dGVyU3BhY2luZ0NhY2hlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0TGVuOyBpKyspIHtcbiAgICAgIGxldHRlclNwYWNpbmdDYWNoZS5wdXNoKHR5cGVvZiBkeFtpXSAhPT0gJ3VuZGVmaW5lZCcgPyBkeFtpXSA6IGxldHRlclNwYWNpbmcpO1xuICAgIH1cblxuICAgIHZhciBkeFN1bSA9IGxldHRlclNwYWNpbmdDYWNoZS5yZWR1Y2UoKGFjYywgY3VyLCBpKSA9PiBpID09PSAwID8gMCA6IGFjYyArIGN1ciB8fCAwLCAwKTtcbiAgICB2YXIgdGV4dFdpZHRoID0gdGhpcy5tZWFzdXJlVGV4dChjdHgpO1xuICAgIHZhciB0ZXh0RnVsbFdpZHRoID0gTWF0aC5tYXgodGV4dFdpZHRoICsgZHhTdW0sIDApO1xuICAgIHRoaXMudGV4dFdpZHRoID0gdGV4dFdpZHRoO1xuICAgIHRoaXMudGV4dEhlaWdodCA9IHRoaXMuZ2V0Rm9udFNpemUoKTtcbiAgICB0aGlzLmdseXBoSW5mbyA9IFtdO1xuICAgIHZhciBmdWxsUGF0aFdpZHRoID0gdGhpcy5nZXRQYXRoTGVuZ3RoKCk7XG4gICAgdmFyIHN0YXJ0T2Zmc2V0ID0gdGhpcy5nZXRTdHlsZSgnc3RhcnRPZmZzZXQnKS5nZXROdW1iZXIoMCkgKiBmdWxsUGF0aFdpZHRoO1xuICAgIHZhciBvZmZzZXQgPSAwO1xuXG4gICAgaWYgKGFuY2hvciA9PT0gJ21pZGRsZScgfHwgYW5jaG9yID09PSAnY2VudGVyJykge1xuICAgICAgb2Zmc2V0ID0gLXRleHRGdWxsV2lkdGggLyAyO1xuICAgIH1cblxuICAgIGlmIChhbmNob3IgPT09ICdlbmQnIHx8IGFuY2hvciA9PT0gJ3JpZ2h0Jykge1xuICAgICAgb2Zmc2V0ID0gLXRleHRGdWxsV2lkdGg7XG4gICAgfVxuXG4gICAgb2Zmc2V0ICs9IHN0YXJ0T2Zmc2V0O1xuICAgIGNoYXJzLmZvckVhY2goKGNoYXIsIGkpID0+IHtcbiAgICAgIC8vIEZpbmQgc3VjaCBzZWdtZW50IHdoYXQgZGlzdGFuY2UgYmV0d2VlbiBwMCBhbmQgcDEgaXMgYXBwcm94LiB3aWR0aCBvZiBnbHlwaFxuICAgICAgdmFyIHtcbiAgICAgICAgb2Zmc2V0OiBuZXh0T2Zmc2V0LFxuICAgICAgICBzZWdtZW50LFxuICAgICAgICByb3RhdGlvblxuICAgICAgfSA9IHRoaXMuZmluZFNlZ21lbnRUb0ZpdENoYXIoY3R4LCBhbmNob3IsIHRleHRGdWxsV2lkdGgsIGZ1bGxQYXRoV2lkdGgsIHNwYWNlc051bWJlciwgb2Zmc2V0LCBkeSwgY2hhciwgaSk7XG4gICAgICBvZmZzZXQgPSBuZXh0T2Zmc2V0O1xuXG4gICAgICBpZiAoIXNlZ21lbnQucDAgfHwgIXNlZ21lbnQucDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0TGluZUxlbmd0aChcbiAgICAgIC8vIFx0c2VnbWVudC5wMC54LFxuICAgICAgLy8gXHRzZWdtZW50LnAwLnksXG4gICAgICAvLyBcdHNlZ21lbnQucDEueCxcbiAgICAgIC8vIFx0c2VnbWVudC5wMS55XG4gICAgICAvLyApO1xuICAgICAgLy8gTm90ZTogU2luY2UgZ2x5cGhzIGFyZSByZW5kZXJlZCBvbmUgYXQgYSB0aW1lLCBhbnkga2VybmluZyBwYWlyIGRhdGEgYnVpbHQgaW50byB0aGUgZm9udCB3aWxsIG5vdCBiZSB1c2VkLlxuICAgICAgLy8gQ2FuIGZvcmVzZWUgaGF2aW5nIGEgcm91Z2ggcGFpciB0YWJsZSBidWlsdCBpbiB0aGF0IHRoZSBkZXZlbG9wZXIgY2FuIG92ZXJyaWRlIGFzIG5lZWRlZC5cbiAgICAgIC8vIE9yIHVzZSBcImR4XCIgYXR0cmlidXRlIG9mIHRoZSA8dGV4dD4gbm9kZSBhcyBhIG5haXZlIHJlcGxhY2VtZW50XG4gICAgICAvLyBjb25zdCBrZXJuID0gMDtcbiAgICAgIC8vIHBsYWNlaG9sZGVyIGZvciBmdXR1cmUgaW1wbGVtZW50YXRpb25cbiAgICAgIC8vIGNvbnN0IG1pZHBvaW50ID0gdGhpcy5nZXRQb2ludE9uTGluZShcbiAgICAgIC8vIFx0a2VybiArIHdpZHRoIC8gMi4wLFxuICAgICAgLy8gXHRzZWdtZW50LnAwLngsIHNlZ21lbnQucDAueSwgc2VnbWVudC5wMS54LCBzZWdtZW50LnAxLnlcbiAgICAgIC8vICk7XG5cblxuICAgICAgdGhpcy5nbHlwaEluZm8ucHVzaCh7XG4gICAgICAgIC8vIHRyYW5zcG9zZVg6IG1pZHBvaW50LngsXG4gICAgICAgIC8vIHRyYW5zcG9zZVk6IG1pZHBvaW50LnksXG4gICAgICAgIHRleHQ6IGNoYXJzW2ldLFxuICAgICAgICBwMDogc2VnbWVudC5wMCxcbiAgICAgICAgcDE6IHNlZ21lbnQucDEsXG4gICAgICAgIHJvdGF0aW9uXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHBhcnNlUGF0aERhdGEocGF0aCkge1xuICAgIHRoaXMucGF0aExlbmd0aCA9IC0xOyAvLyByZXNldCBwYXRoIGxlbmd0aFxuXG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdmFyIHBhdGhDb21tYW5kcyA9IFtdO1xuICAgIHZhciB7XG4gICAgICBwYXRoUGFyc2VyXG4gICAgfSA9IHBhdGg7XG4gICAgcGF0aFBhcnNlci5yZXNldCgpOyAvLyBjb252ZXJ0IGwsIEgsIGgsIFYsIGFuZCB2IHRvIExcblxuICAgIHdoaWxlICghcGF0aFBhcnNlci5pc0VuZCgpKSB7XG4gICAgICB2YXIge1xuICAgICAgICBjdXJyZW50XG4gICAgICB9ID0gcGF0aFBhcnNlcjtcbiAgICAgIHZhciBzdGFydFggPSBjdXJyZW50ID8gY3VycmVudC54IDogMDtcbiAgICAgIHZhciBzdGFydFkgPSBjdXJyZW50ID8gY3VycmVudC55IDogMDtcbiAgICAgIHZhciBjb21tYW5kID0gcGF0aFBhcnNlci5uZXh0KCk7XG4gICAgICB2YXIgbmV4dENvbW1hbmRUeXBlID0gY29tbWFuZC50eXBlO1xuICAgICAgdmFyIHBvaW50cyA9IFtdO1xuXG4gICAgICBzd2l0Y2ggKGNvbW1hbmQudHlwZSkge1xuICAgICAgICBjYXNlIFBhdGhQYXJzZXIuTU9WRV9UTzpcbiAgICAgICAgICB0aGlzLnBhdGhNKHBhdGhQYXJzZXIsIHBvaW50cyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBQYXRoUGFyc2VyLkxJTkVfVE86XG4gICAgICAgICAgbmV4dENvbW1hbmRUeXBlID0gdGhpcy5wYXRoTChwYXRoUGFyc2VyLCBwb2ludHMpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUGF0aFBhcnNlci5IT1JJWl9MSU5FX1RPOlxuICAgICAgICAgIG5leHRDb21tYW5kVHlwZSA9IHRoaXMucGF0aEgocGF0aFBhcnNlciwgcG9pbnRzKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFBhdGhQYXJzZXIuVkVSVF9MSU5FX1RPOlxuICAgICAgICAgIG5leHRDb21tYW5kVHlwZSA9IHRoaXMucGF0aFYocGF0aFBhcnNlciwgcG9pbnRzKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFBhdGhQYXJzZXIuQ1VSVkVfVE86XG4gICAgICAgICAgdGhpcy5wYXRoQyhwYXRoUGFyc2VyLCBwb2ludHMpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUGF0aFBhcnNlci5TTU9PVEhfQ1VSVkVfVE86XG4gICAgICAgICAgbmV4dENvbW1hbmRUeXBlID0gdGhpcy5wYXRoUyhwYXRoUGFyc2VyLCBwb2ludHMpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUGF0aFBhcnNlci5RVUFEX1RPOlxuICAgICAgICAgIHRoaXMucGF0aFEocGF0aFBhcnNlciwgcG9pbnRzKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFBhdGhQYXJzZXIuU01PT1RIX1FVQURfVE86XG4gICAgICAgICAgbmV4dENvbW1hbmRUeXBlID0gdGhpcy5wYXRoVChwYXRoUGFyc2VyLCBwb2ludHMpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUGF0aFBhcnNlci5BUkM6XG4gICAgICAgICAgcG9pbnRzID0gdGhpcy5wYXRoQShwYXRoUGFyc2VyKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFBhdGhQYXJzZXIuQ0xPU0VfUEFUSDpcbiAgICAgICAgICBQYXRoRWxlbWVudC5wYXRoWihwYXRoUGFyc2VyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbW1hbmQudHlwZSAhPT0gUGF0aFBhcnNlci5DTE9TRV9QQVRIKSB7XG4gICAgICAgIHBhdGhDb21tYW5kcy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiBuZXh0Q29tbWFuZFR5cGUsXG4gICAgICAgICAgcG9pbnRzLFxuICAgICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgICB4OiBzdGFydFgsXG4gICAgICAgICAgICB5OiBzdGFydFlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBhdGhMZW5ndGg6IHRoaXMuY2FsY0xlbmd0aChzdGFydFgsIHN0YXJ0WSwgbmV4dENvbW1hbmRUeXBlLCBwb2ludHMpXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aENvbW1hbmRzLnB1c2goe1xuICAgICAgICAgIHR5cGU6IFBhdGhQYXJzZXIuQ0xPU0VfUEFUSCxcbiAgICAgICAgICBwb2ludHM6IFtdLFxuICAgICAgICAgIHBhdGhMZW5ndGg6IDBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGhDb21tYW5kcztcbiAgfVxuXG4gIHBhdGhNKHBhdGhQYXJzZXIsIHBvaW50cykge1xuICAgIHZhciB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH0gPSBQYXRoRWxlbWVudC5wYXRoTShwYXRoUGFyc2VyKS5wb2ludDtcbiAgICBwb2ludHMucHVzaCh4LCB5KTtcbiAgfVxuXG4gIHBhdGhMKHBhdGhQYXJzZXIsIHBvaW50cykge1xuICAgIHZhciB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH0gPSBQYXRoRWxlbWVudC5wYXRoTChwYXRoUGFyc2VyKS5wb2ludDtcbiAgICBwb2ludHMucHVzaCh4LCB5KTtcbiAgICByZXR1cm4gUGF0aFBhcnNlci5MSU5FX1RPO1xuICB9XG5cbiAgcGF0aEgocGF0aFBhcnNlciwgcG9pbnRzKSB7XG4gICAgdmFyIHtcbiAgICAgIHgsXG4gICAgICB5XG4gICAgfSA9IFBhdGhFbGVtZW50LnBhdGhIKHBhdGhQYXJzZXIpLnBvaW50O1xuICAgIHBvaW50cy5wdXNoKHgsIHkpO1xuICAgIHJldHVybiBQYXRoUGFyc2VyLkxJTkVfVE87XG4gIH1cblxuICBwYXRoVihwYXRoUGFyc2VyLCBwb2ludHMpIHtcbiAgICB2YXIge1xuICAgICAgeCxcbiAgICAgIHlcbiAgICB9ID0gUGF0aEVsZW1lbnQucGF0aFYocGF0aFBhcnNlcikucG9pbnQ7XG4gICAgcG9pbnRzLnB1c2goeCwgeSk7XG4gICAgcmV0dXJuIFBhdGhQYXJzZXIuTElORV9UTztcbiAgfVxuXG4gIHBhdGhDKHBhdGhQYXJzZXIsIHBvaW50cykge1xuICAgIHZhciB7XG4gICAgICBwb2ludCxcbiAgICAgIGNvbnRyb2xQb2ludCxcbiAgICAgIGN1cnJlbnRQb2ludFxuICAgIH0gPSBQYXRoRWxlbWVudC5wYXRoQyhwYXRoUGFyc2VyKTtcbiAgICBwb2ludHMucHVzaChwb2ludC54LCBwb2ludC55LCBjb250cm9sUG9pbnQueCwgY29udHJvbFBvaW50LnksIGN1cnJlbnRQb2ludC54LCBjdXJyZW50UG9pbnQueSk7XG4gIH1cblxuICBwYXRoUyhwYXRoUGFyc2VyLCBwb2ludHMpIHtcbiAgICB2YXIge1xuICAgICAgcG9pbnQsXG4gICAgICBjb250cm9sUG9pbnQsXG4gICAgICBjdXJyZW50UG9pbnRcbiAgICB9ID0gUGF0aEVsZW1lbnQucGF0aFMocGF0aFBhcnNlcik7XG4gICAgcG9pbnRzLnB1c2gocG9pbnQueCwgcG9pbnQueSwgY29udHJvbFBvaW50LngsIGNvbnRyb2xQb2ludC55LCBjdXJyZW50UG9pbnQueCwgY3VycmVudFBvaW50LnkpO1xuICAgIHJldHVybiBQYXRoUGFyc2VyLkNVUlZFX1RPO1xuICB9XG5cbiAgcGF0aFEocGF0aFBhcnNlciwgcG9pbnRzKSB7XG4gICAgdmFyIHtcbiAgICAgIGNvbnRyb2xQb2ludCxcbiAgICAgIGN1cnJlbnRQb2ludFxuICAgIH0gPSBQYXRoRWxlbWVudC5wYXRoUShwYXRoUGFyc2VyKTtcbiAgICBwb2ludHMucHVzaChjb250cm9sUG9pbnQueCwgY29udHJvbFBvaW50LnksIGN1cnJlbnRQb2ludC54LCBjdXJyZW50UG9pbnQueSk7XG4gIH1cblxuICBwYXRoVChwYXRoUGFyc2VyLCBwb2ludHMpIHtcbiAgICB2YXIge1xuICAgICAgY29udHJvbFBvaW50LFxuICAgICAgY3VycmVudFBvaW50XG4gICAgfSA9IFBhdGhFbGVtZW50LnBhdGhUKHBhdGhQYXJzZXIpO1xuICAgIHBvaW50cy5wdXNoKGNvbnRyb2xQb2ludC54LCBjb250cm9sUG9pbnQueSwgY3VycmVudFBvaW50LngsIGN1cnJlbnRQb2ludC55KTtcbiAgICByZXR1cm4gUGF0aFBhcnNlci5RVUFEX1RPO1xuICB9XG5cbiAgcGF0aEEocGF0aFBhcnNlcikge1xuICAgIHZhciB7XG4gICAgICByWCxcbiAgICAgIHJZLFxuICAgICAgc3dlZXBGbGFnLFxuICAgICAgeEF4aXNSb3RhdGlvbixcbiAgICAgIGNlbnRwLFxuICAgICAgYTEsXG4gICAgICBhZFxuICAgIH0gPSBQYXRoRWxlbWVudC5wYXRoQShwYXRoUGFyc2VyKTtcblxuICAgIGlmIChzd2VlcEZsYWcgPT09IDAgJiYgYWQgPiAwKSB7XG4gICAgICBhZCAtPSAyICogTWF0aC5QSTtcbiAgICB9XG5cbiAgICBpZiAoc3dlZXBGbGFnID09PSAxICYmIGFkIDwgMCkge1xuICAgICAgYWQgKz0gMiAqIE1hdGguUEk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtjZW50cC54LCBjZW50cC55LCByWCwgclksIGExLCBhZCwgeEF4aXNSb3RhdGlvbiwgc3dlZXBGbGFnXTtcbiAgfVxuXG4gIGNhbGNMZW5ndGgoeCwgeSwgY29tbWFuZFR5cGUsIHBvaW50cykge1xuICAgIHZhciBsZW4gPSAwO1xuICAgIHZhciBwMSA9IG51bGw7XG4gICAgdmFyIHAyID0gbnVsbDtcbiAgICB2YXIgdCA9IDA7XG5cbiAgICBzd2l0Y2ggKGNvbW1hbmRUeXBlKSB7XG4gICAgICBjYXNlIFBhdGhQYXJzZXIuTElORV9UTzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGluZUxlbmd0aCh4LCB5LCBwb2ludHNbMF0sIHBvaW50c1sxXSk7XG5cbiAgICAgIGNhc2UgUGF0aFBhcnNlci5DVVJWRV9UTzpcbiAgICAgICAgLy8gQXBwcm94aW1hdGVzIGJ5IGJyZWFraW5nIGN1cnZlIGludG8gMTAwIGxpbmUgc2VnbWVudHNcbiAgICAgICAgbGVuID0gMC4wO1xuICAgICAgICBwMSA9IHRoaXMuZ2V0UG9pbnRPbkN1YmljQmV6aWVyKDAsIHgsIHksIHBvaW50c1swXSwgcG9pbnRzWzFdLCBwb2ludHNbMl0sIHBvaW50c1szXSwgcG9pbnRzWzRdLCBwb2ludHNbNV0pO1xuXG4gICAgICAgIGZvciAodCA9IDAuMDE7IHQgPD0gMTsgdCArPSAwLjAxKSB7XG4gICAgICAgICAgcDIgPSB0aGlzLmdldFBvaW50T25DdWJpY0Jlemllcih0LCB4LCB5LCBwb2ludHNbMF0sIHBvaW50c1sxXSwgcG9pbnRzWzJdLCBwb2ludHNbM10sIHBvaW50c1s0XSwgcG9pbnRzWzVdKTtcbiAgICAgICAgICBsZW4gKz0gdGhpcy5nZXRMaW5lTGVuZ3RoKHAxLngsIHAxLnksIHAyLngsIHAyLnkpO1xuICAgICAgICAgIHAxID0gcDI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVuO1xuXG4gICAgICBjYXNlIFBhdGhQYXJzZXIuUVVBRF9UTzpcbiAgICAgICAgLy8gQXBwcm94aW1hdGVzIGJ5IGJyZWFraW5nIGN1cnZlIGludG8gMTAwIGxpbmUgc2VnbWVudHNcbiAgICAgICAgbGVuID0gMC4wO1xuICAgICAgICBwMSA9IHRoaXMuZ2V0UG9pbnRPblF1YWRyYXRpY0JlemllcigwLCB4LCB5LCBwb2ludHNbMF0sIHBvaW50c1sxXSwgcG9pbnRzWzJdLCBwb2ludHNbM10pO1xuXG4gICAgICAgIGZvciAodCA9IDAuMDE7IHQgPD0gMTsgdCArPSAwLjAxKSB7XG4gICAgICAgICAgcDIgPSB0aGlzLmdldFBvaW50T25RdWFkcmF0aWNCZXppZXIodCwgeCwgeSwgcG9pbnRzWzBdLCBwb2ludHNbMV0sIHBvaW50c1syXSwgcG9pbnRzWzNdKTtcbiAgICAgICAgICBsZW4gKz0gdGhpcy5nZXRMaW5lTGVuZ3RoKHAxLngsIHAxLnksIHAyLngsIHAyLnkpO1xuICAgICAgICAgIHAxID0gcDI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGVuO1xuXG4gICAgICBjYXNlIFBhdGhQYXJzZXIuQVJDOlxuICAgICAgICB7XG4gICAgICAgICAgLy8gQXBwcm94aW1hdGVzIGJ5IGJyZWFraW5nIGN1cnZlIGludG8gbGluZSBzZWdtZW50c1xuICAgICAgICAgIGxlbiA9IDAuMDtcbiAgICAgICAgICB2YXIgc3RhcnQgPSBwb2ludHNbNF07IC8vIDQgPSB0aGV0YVxuXG4gICAgICAgICAgdmFyIGRUaGV0YSA9IHBvaW50c1s1XTsgLy8gNSA9IGRUaGV0YVxuXG4gICAgICAgICAgdmFyIGVuZCA9IHBvaW50c1s0XSArIGRUaGV0YTtcbiAgICAgICAgICB2YXIgaW5jID0gTWF0aC5QSSAvIDE4MC4wOyAvLyAxIGRlZ3JlZSByZXNvbHV0aW9uXG5cbiAgICAgICAgICBpZiAoTWF0aC5hYnMoc3RhcnQgLSBlbmQpIDwgaW5jKSB7XG4gICAgICAgICAgICBpbmMgPSBNYXRoLmFicyhzdGFydCAtIGVuZCk7XG4gICAgICAgICAgfSAvLyBOb3RlOiBmb3IgcHVycG9zZSBvZiBjYWxjdWxhdGluZyBhcmMgbGVuZ3RoLCBub3QgZ29pbmcgdG8gd29ycnkgYWJvdXQgcm90YXRpbmcgWC1heGlzIGJ5IGFuZ2xlIHBzaVxuXG5cbiAgICAgICAgICBwMSA9IHRoaXMuZ2V0UG9pbnRPbkVsbGlwdGljYWxBcmMocG9pbnRzWzBdLCBwb2ludHNbMV0sIHBvaW50c1syXSwgcG9pbnRzWzNdLCBzdGFydCwgMCk7XG5cbiAgICAgICAgICBpZiAoZFRoZXRhIDwgMCkge1xuICAgICAgICAgICAgLy8gY2xvY2t3aXNlXG4gICAgICAgICAgICBmb3IgKHQgPSBzdGFydCAtIGluYzsgdCA+IGVuZDsgdCAtPSBpbmMpIHtcbiAgICAgICAgICAgICAgcDIgPSB0aGlzLmdldFBvaW50T25FbGxpcHRpY2FsQXJjKHBvaW50c1swXSwgcG9pbnRzWzFdLCBwb2ludHNbMl0sIHBvaW50c1szXSwgdCwgMCk7XG4gICAgICAgICAgICAgIGxlbiArPSB0aGlzLmdldExpbmVMZW5ndGgocDEueCwgcDEueSwgcDIueCwgcDIueSk7XG4gICAgICAgICAgICAgIHAxID0gcDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvdW50ZXItY2xvY2t3aXNlXG4gICAgICAgICAgICBmb3IgKHQgPSBzdGFydCArIGluYzsgdCA8IGVuZDsgdCArPSBpbmMpIHtcbiAgICAgICAgICAgICAgcDIgPSB0aGlzLmdldFBvaW50T25FbGxpcHRpY2FsQXJjKHBvaW50c1swXSwgcG9pbnRzWzFdLCBwb2ludHNbMl0sIHBvaW50c1szXSwgdCwgMCk7XG4gICAgICAgICAgICAgIGxlbiArPSB0aGlzLmdldExpbmVMZW5ndGgocDEueCwgcDEueSwgcDIueCwgcDIueSk7XG4gICAgICAgICAgICAgIHAxID0gcDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcDIgPSB0aGlzLmdldFBvaW50T25FbGxpcHRpY2FsQXJjKHBvaW50c1swXSwgcG9pbnRzWzFdLCBwb2ludHNbMl0sIHBvaW50c1szXSwgZW5kLCAwKTtcbiAgICAgICAgICBsZW4gKz0gdGhpcy5nZXRMaW5lTGVuZ3RoKHAxLngsIHAxLnksIHAyLngsIHAyLnkpO1xuICAgICAgICAgIHJldHVybiBsZW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGdldFBvaW50T25MaW5lKGRpc3QsIHAxeCwgcDF5LCBwMngsIHAyeSkge1xuICAgIHZhciBmcm9tWCA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogcDF4O1xuICAgIHZhciBmcm9tWSA9IGFyZ3VtZW50cy5sZW5ndGggPiA2ICYmIGFyZ3VtZW50c1s2XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzZdIDogcDF5O1xuICAgIHZhciBtID0gKHAyeSAtIHAxeSkgLyAocDJ4IC0gcDF4ICsgUFNFVURPX1pFUk8pO1xuICAgIHZhciBydW4gPSBNYXRoLnNxcnQoZGlzdCAqIGRpc3QgLyAoMSArIG0gKiBtKSk7XG5cbiAgICBpZiAocDJ4IDwgcDF4KSB7XG4gICAgICBydW4gKj0gLTE7XG4gICAgfVxuXG4gICAgdmFyIHJpc2UgPSBtICogcnVuO1xuICAgIHZhciBwdCA9IG51bGw7XG5cbiAgICBpZiAocDJ4ID09PSBwMXgpIHtcbiAgICAgIC8vIHZlcnRpY2FsIGxpbmVcbiAgICAgIHB0ID0ge1xuICAgICAgICB4OiBmcm9tWCxcbiAgICAgICAgeTogZnJvbVkgKyByaXNlXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoKGZyb21ZIC0gcDF5KSAvIChmcm9tWCAtIHAxeCArIFBTRVVET19aRVJPKSA9PT0gbSkge1xuICAgICAgcHQgPSB7XG4gICAgICAgIHg6IGZyb21YICsgcnVuLFxuICAgICAgICB5OiBmcm9tWSArIHJpc2VcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpeCA9IDA7XG4gICAgICB2YXIgaXkgPSAwO1xuICAgICAgdmFyIGxlbiA9IHRoaXMuZ2V0TGluZUxlbmd0aChwMXgsIHAxeSwgcDJ4LCBwMnkpO1xuXG4gICAgICBpZiAobGVuIDwgUFNFVURPX1pFUk8pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciB1ID0gKGZyb21YIC0gcDF4KSAqIChwMnggLSBwMXgpICsgKGZyb21ZIC0gcDF5KSAqIChwMnkgLSBwMXkpO1xuICAgICAgdSAvPSBsZW4gKiBsZW47XG4gICAgICBpeCA9IHAxeCArIHUgKiAocDJ4IC0gcDF4KTtcbiAgICAgIGl5ID0gcDF5ICsgdSAqIChwMnkgLSBwMXkpO1xuICAgICAgdmFyIHBSaXNlID0gdGhpcy5nZXRMaW5lTGVuZ3RoKGZyb21YLCBmcm9tWSwgaXgsIGl5KTtcbiAgICAgIHZhciBwUnVuID0gTWF0aC5zcXJ0KGRpc3QgKiBkaXN0IC0gcFJpc2UgKiBwUmlzZSk7XG4gICAgICBydW4gPSBNYXRoLnNxcnQocFJ1biAqIHBSdW4gLyAoMSArIG0gKiBtKSk7XG5cbiAgICAgIGlmIChwMnggPCBwMXgpIHtcbiAgICAgICAgcnVuICo9IC0xO1xuICAgICAgfVxuXG4gICAgICByaXNlID0gbSAqIHJ1bjtcbiAgICAgIHB0ID0ge1xuICAgICAgICB4OiBpeCArIHJ1bixcbiAgICAgICAgeTogaXkgKyByaXNlXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBwdDtcbiAgfVxuXG4gIGdldFBvaW50T25QYXRoKGRpc3RhbmNlKSB7XG4gICAgdmFyIGZ1bGxMZW4gPSB0aGlzLmdldFBhdGhMZW5ndGgoKTtcbiAgICB2YXIgY3VtdWxhdGl2ZVBhdGhMZW5ndGggPSAwO1xuICAgIHZhciBwID0gbnVsbDtcblxuICAgIGlmIChkaXN0YW5jZSA8IC0wLjAwMDA1IHx8IGRpc3RhbmNlIC0gMC4wMDAwNSA+IGZ1bGxMZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciB7XG4gICAgICBkYXRhQXJyYXlcbiAgICB9ID0gdGhpcztcblxuICAgIGZvciAodmFyIGNvbW1hbmQgb2YgZGF0YUFycmF5KSB7XG4gICAgICBpZiAoY29tbWFuZCAmJiAoY29tbWFuZC5wYXRoTGVuZ3RoIDwgMC4wMDAwNSB8fCBjdW11bGF0aXZlUGF0aExlbmd0aCArIGNvbW1hbmQucGF0aExlbmd0aCArIDAuMDAwMDUgPCBkaXN0YW5jZSkpIHtcbiAgICAgICAgY3VtdWxhdGl2ZVBhdGhMZW5ndGggKz0gY29tbWFuZC5wYXRoTGVuZ3RoO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRlbHRhID0gZGlzdGFuY2UgLSBjdW11bGF0aXZlUGF0aExlbmd0aDtcbiAgICAgIHZhciBjdXJyZW50VCA9IDA7XG5cbiAgICAgIHN3aXRjaCAoY29tbWFuZC50eXBlKSB7XG4gICAgICAgIGNhc2UgUGF0aFBhcnNlci5MSU5FX1RPOlxuICAgICAgICAgIHAgPSB0aGlzLmdldFBvaW50T25MaW5lKGRlbHRhLCBjb21tYW5kLnN0YXJ0LngsIGNvbW1hbmQuc3RhcnQueSwgY29tbWFuZC5wb2ludHNbMF0sIGNvbW1hbmQucG9pbnRzWzFdLCBjb21tYW5kLnN0YXJ0LngsIGNvbW1hbmQuc3RhcnQueSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBQYXRoUGFyc2VyLkFSQzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBjb21tYW5kLnBvaW50c1s0XTsgLy8gNCA9IHRoZXRhXG5cbiAgICAgICAgICAgIHZhciBkVGhldGEgPSBjb21tYW5kLnBvaW50c1s1XTsgLy8gNSA9IGRUaGV0YVxuXG4gICAgICAgICAgICB2YXIgZW5kID0gY29tbWFuZC5wb2ludHNbNF0gKyBkVGhldGE7XG4gICAgICAgICAgICBjdXJyZW50VCA9IHN0YXJ0ICsgZGVsdGEgLyBjb21tYW5kLnBhdGhMZW5ndGggKiBkVGhldGE7XG5cbiAgICAgICAgICAgIGlmIChkVGhldGEgPCAwICYmIGN1cnJlbnRUIDwgZW5kIHx8IGRUaGV0YSA+PSAwICYmIGN1cnJlbnRUID4gZW5kKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwID0gdGhpcy5nZXRQb2ludE9uRWxsaXB0aWNhbEFyYyhjb21tYW5kLnBvaW50c1swXSwgY29tbWFuZC5wb2ludHNbMV0sIGNvbW1hbmQucG9pbnRzWzJdLCBjb21tYW5kLnBvaW50c1szXSwgY3VycmVudFQsIGNvbW1hbmQucG9pbnRzWzZdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIFBhdGhQYXJzZXIuQ1VSVkVfVE86XG4gICAgICAgICAgY3VycmVudFQgPSBkZWx0YSAvIGNvbW1hbmQucGF0aExlbmd0aDtcblxuICAgICAgICAgIGlmIChjdXJyZW50VCA+IDEpIHtcbiAgICAgICAgICAgIGN1cnJlbnRUID0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwID0gdGhpcy5nZXRQb2ludE9uQ3ViaWNCZXppZXIoY3VycmVudFQsIGNvbW1hbmQuc3RhcnQueCwgY29tbWFuZC5zdGFydC55LCBjb21tYW5kLnBvaW50c1swXSwgY29tbWFuZC5wb2ludHNbMV0sIGNvbW1hbmQucG9pbnRzWzJdLCBjb21tYW5kLnBvaW50c1szXSwgY29tbWFuZC5wb2ludHNbNF0sIGNvbW1hbmQucG9pbnRzWzVdKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFBhdGhQYXJzZXIuUVVBRF9UTzpcbiAgICAgICAgICBjdXJyZW50VCA9IGRlbHRhIC8gY29tbWFuZC5wYXRoTGVuZ3RoO1xuXG4gICAgICAgICAgaWYgKGN1cnJlbnRUID4gMSkge1xuICAgICAgICAgICAgY3VycmVudFQgPSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAgPSB0aGlzLmdldFBvaW50T25RdWFkcmF0aWNCZXppZXIoY3VycmVudFQsIGNvbW1hbmQuc3RhcnQueCwgY29tbWFuZC5zdGFydC55LCBjb21tYW5kLnBvaW50c1swXSwgY29tbWFuZC5wb2ludHNbMV0sIGNvbW1hbmQucG9pbnRzWzJdLCBjb21tYW5kLnBvaW50c1szXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChwKSB7XG4gICAgICAgIHJldHVybiBwO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldExpbmVMZW5ndGgoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KCh4MiAtIHgxKSAqICh4MiAtIHgxKSArICh5MiAtIHkxKSAqICh5MiAtIHkxKSk7XG4gIH1cblxuICBnZXRQYXRoTGVuZ3RoKCkge1xuICAgIGlmICh0aGlzLnBhdGhMZW5ndGggPT09IC0xKSB7XG4gICAgICB0aGlzLnBhdGhMZW5ndGggPSB0aGlzLmRhdGFBcnJheS5yZWR1Y2UoKGxlbmd0aCwgY29tbWFuZCkgPT4gY29tbWFuZC5wYXRoTGVuZ3RoID4gMCA/IGxlbmd0aCArIGNvbW1hbmQucGF0aExlbmd0aCA6IGxlbmd0aCwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucGF0aExlbmd0aDtcbiAgfVxuXG4gIGdldFBvaW50T25DdWJpY0JlemllcihwY3QsIHAxeCwgcDF5LCBwMngsIHAyeSwgcDN4LCBwM3ksIHA0eCwgcDR5KSB7XG4gICAgdmFyIHggPSBwNHggKiBDQjEocGN0KSArIHAzeCAqIENCMihwY3QpICsgcDJ4ICogQ0IzKHBjdCkgKyBwMXggKiBDQjQocGN0KTtcbiAgICB2YXIgeSA9IHA0eSAqIENCMShwY3QpICsgcDN5ICogQ0IyKHBjdCkgKyBwMnkgKiBDQjMocGN0KSArIHAxeSAqIENCNChwY3QpO1xuICAgIHJldHVybiB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH07XG4gIH1cblxuICBnZXRQb2ludE9uUXVhZHJhdGljQmV6aWVyKHBjdCwgcDF4LCBwMXksIHAyeCwgcDJ5LCBwM3gsIHAzeSkge1xuICAgIHZhciB4ID0gcDN4ICogUUIxKHBjdCkgKyBwMnggKiBRQjIocGN0KSArIHAxeCAqIFFCMyhwY3QpO1xuICAgIHZhciB5ID0gcDN5ICogUUIxKHBjdCkgKyBwMnkgKiBRQjIocGN0KSArIHAxeSAqIFFCMyhwY3QpO1xuICAgIHJldHVybiB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH07XG4gIH1cblxuICBnZXRQb2ludE9uRWxsaXB0aWNhbEFyYyhjeCwgY3ksIHJ4LCByeSwgdGhldGEsIHBzaSkge1xuICAgIHZhciBjb3NQc2kgPSBNYXRoLmNvcyhwc2kpO1xuICAgIHZhciBzaW5Qc2kgPSBNYXRoLnNpbihwc2kpO1xuICAgIHZhciBwdCA9IHtcbiAgICAgIHg6IHJ4ICogTWF0aC5jb3ModGhldGEpLFxuICAgICAgeTogcnkgKiBNYXRoLnNpbih0aGV0YSlcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICB4OiBjeCArIChwdC54ICogY29zUHNpIC0gcHQueSAqIHNpblBzaSksXG4gICAgICB5OiBjeSArIChwdC54ICogc2luUHNpICsgcHQueSAqIGNvc1BzaSlcbiAgICB9O1xuICB9IC8vIFRPRE8gbmVlZCBzb21lIG9wdGltaXNhdGlvbnMuIHBvc3NpYmx5IGJ1aWxkIGNhY2hlIG9ubHkgZm9yIGN1cnZlZCBzZWdtZW50cz9cblxuXG4gIGJ1aWxkRXF1aWRpc3RhbnRDYWNoZShpbnB1dFN0ZXAsIGlucHV0UHJlY2lzaW9uKSB7XG4gICAgdmFyIGZ1bGxMZW4gPSB0aGlzLmdldFBhdGhMZW5ndGgoKTtcbiAgICB2YXIgcHJlY2lzaW9uID0gaW5wdXRQcmVjaXNpb24gfHwgMC4yNTsgLy8gYWNjdXJhY3kgdnMgcGVyZm9ybWFuY2VcblxuICAgIHZhciBzdGVwID0gaW5wdXRTdGVwIHx8IGZ1bGxMZW4gLyAxMDA7XG5cbiAgICBpZiAoIXRoaXMuZXF1aWRpc3RhbnRDYWNoZSB8fCB0aGlzLmVxdWlkaXN0YW50Q2FjaGUuc3RlcCAhPT0gc3RlcCB8fCB0aGlzLmVxdWlkaXN0YW50Q2FjaGUucHJlY2lzaW9uICE9PSBwcmVjaXNpb24pIHtcbiAgICAgIC8vIFByZXBhcmUgY2FjaGVcbiAgICAgIHRoaXMuZXF1aWRpc3RhbnRDYWNoZSA9IHtcbiAgICAgICAgc3RlcCxcbiAgICAgICAgcHJlY2lzaW9uLFxuICAgICAgICBwb2ludHM6IFtdXG4gICAgICB9OyAvLyBDYWxjdWxhdGUgcG9pbnRzXG5cbiAgICAgIHZhciBzID0gMDtcblxuICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPD0gZnVsbExlbjsgbCArPSBwcmVjaXNpb24pIHtcbiAgICAgICAgdmFyIHAwID0gdGhpcy5nZXRQb2ludE9uUGF0aChsKTtcbiAgICAgICAgdmFyIHAxID0gdGhpcy5nZXRQb2ludE9uUGF0aChsICsgcHJlY2lzaW9uKTtcblxuICAgICAgICBpZiAoIXAwIHx8ICFwMSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcyArPSB0aGlzLmdldExpbmVMZW5ndGgocDAueCwgcDAueSwgcDEueCwgcDEueSk7XG5cbiAgICAgICAgaWYgKHMgPj0gc3RlcCkge1xuICAgICAgICAgIHRoaXMuZXF1aWRpc3RhbnRDYWNoZS5wb2ludHMucHVzaCh7XG4gICAgICAgICAgICB4OiBwMC54LFxuICAgICAgICAgICAgeTogcDAueSxcbiAgICAgICAgICAgIGRpc3RhbmNlOiBsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcyAtPSBzdGVwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0RXF1aWRpc3RhbnRQb2ludE9uUGF0aCh0YXJnZXREaXN0YW5jZSwgc3RlcCwgcHJlY2lzaW9uKSB7XG4gICAgdGhpcy5idWlsZEVxdWlkaXN0YW50Q2FjaGUoc3RlcCwgcHJlY2lzaW9uKTtcblxuICAgIGlmICh0YXJnZXREaXN0YW5jZSA8IDAgfHwgdGFyZ2V0RGlzdGFuY2UgLSB0aGlzLmdldFBhdGhMZW5ndGgoKSA+IDAuMDAwMDUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBpZHggPSBNYXRoLnJvdW5kKHRhcmdldERpc3RhbmNlIC8gdGhpcy5nZXRQYXRoTGVuZ3RoKCkgKiAodGhpcy5lcXVpZGlzdGFudENhY2hlLnBvaW50cy5sZW5ndGggLSAxKSk7XG4gICAgcmV0dXJuIHRoaXMuZXF1aWRpc3RhbnRDYWNoZS5wb2ludHNbaWR4XSB8fCBudWxsO1xuICB9XG5cbn1cblxudmFyIGRhdGFVcmlSZWdleCA9IC9eXFxzKmRhdGE6KChbXi8sO10rXFwvW14vLDtdKykoPzo7KFteLDs9XSs9W14sOz1dKykpPyk/KD86OyhiYXNlNjQpKT8sKC4qKSQvaTtcbmNsYXNzIEltYWdlRWxlbWVudCBleHRlbmRzIFJlbmRlcmVkRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvY3VtZW50LCBub2RlLCBjYXB0dXJlVGV4dE5vZGVzKSB7XG4gICAgc3VwZXIoZG9jdW1lbnQsIG5vZGUsIGNhcHR1cmVUZXh0Tm9kZXMpO1xuICAgIHRoaXMudHlwZSA9ICdpbWFnZSc7XG4gICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICB2YXIgaHJlZiA9IHRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmdldFN0cmluZygpO1xuXG4gICAgaWYgKCFocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlzU3ZnID0gaHJlZi5lbmRzV2l0aCgnLnN2ZycpIHx8IC9eXFxzKmRhdGE6aW1hZ2VcXC9zdmdcXCt4bWwvaS50ZXN0KGhyZWYpO1xuICAgIGRvY3VtZW50LmltYWdlcy5wdXNoKHRoaXMpO1xuXG4gICAgaWYgKCFpc1N2Zykge1xuICAgICAgdm9pZCB0aGlzLmxvYWRJbWFnZShocmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm9pZCB0aGlzLmxvYWRTdmcoaHJlZik7XG4gICAgfVxuXG4gICAgdGhpcy5pc1N2ZyA9IGlzU3ZnO1xuICB9XG5cbiAgbG9hZEltYWdlKGhyZWYpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgaW1hZ2UgPSB5aWVsZCBfdGhpcy5kb2N1bWVudC5jcmVhdGVJbWFnZShocmVmKTtcbiAgICAgICAgX3RoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hpbGUgbG9hZGluZyBpbWFnZSBcXFwiXCIuY29uY2F0KGhyZWYsIFwiXFxcIjpcIiksIGVycik7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgfSkoKTtcbiAgfVxuXG4gIGxvYWRTdmcoaHJlZikge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgcmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoKSB7XG4gICAgICB2YXIgbWF0Y2ggPSBkYXRhVXJpUmVnZXguZXhlYyhocmVmKTtcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciBkYXRhID0gbWF0Y2hbNV07XG5cbiAgICAgICAgaWYgKG1hdGNoWzRdID09PSAnYmFzZTY0Jykge1xuICAgICAgICAgIF90aGlzMi5pbWFnZSA9IGF0b2IoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMyLmltYWdlID0gZGVjb2RlVVJJQ29tcG9uZW50KGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciByZXNwb25zZSA9IHlpZWxkIF90aGlzMi5kb2N1bWVudC5mZXRjaChocmVmKTtcbiAgICAgICAgICB2YXIgc3ZnID0geWllbGQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgIF90aGlzMi5pbWFnZSA9IHN2ZztcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHdoaWxlIGxvYWRpbmcgaW1hZ2UgXFxcIlwiLmNvbmNhdChocmVmLCBcIlxcXCI6XCIpLCBlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzMi5sb2FkZWQgPSB0cnVlO1xuICAgIH0pKCk7XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbihjdHgpIHtcbiAgICB2YXIge1xuICAgICAgZG9jdW1lbnQsXG4gICAgICBpbWFnZSxcbiAgICAgIGxvYWRlZFxuICAgIH0gPSB0aGlzO1xuICAgIHZhciB4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3gnKS5nZXRQaXhlbHMoJ3gnKTtcbiAgICB2YXIgeSA9IHRoaXMuZ2V0QXR0cmlidXRlKCd5JykuZ2V0UGl4ZWxzKCd5Jyk7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5nZXRTdHlsZSgnd2lkdGgnKS5nZXRQaXhlbHMoJ3gnKTtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5nZXRTdHlsZSgnaGVpZ2h0JykuZ2V0UGl4ZWxzKCd5Jyk7XG5cbiAgICBpZiAoIWxvYWRlZCB8fCAhaW1hZ2UgfHwgIXdpZHRoIHx8ICFoZWlnaHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XG5cbiAgICBpZiAodGhpcy5pc1N2Zykge1xuICAgICAgdmFyIHN1YkRvY3VtZW50ID0gZG9jdW1lbnQuY2FudmcuZm9ya1N0cmluZyhjdHgsIHRoaXMuaW1hZ2UsIHtcbiAgICAgICAgaWdub3JlTW91c2U6IHRydWUsXG4gICAgICAgIGlnbm9yZUFuaW1hdGlvbjogdHJ1ZSxcbiAgICAgICAgaWdub3JlRGltZW5zaW9uczogdHJ1ZSxcbiAgICAgICAgaWdub3JlQ2xlYXI6IHRydWUsXG4gICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgIG9mZnNldFk6IDAsXG4gICAgICAgIHNjYWxlV2lkdGg6IHdpZHRoLFxuICAgICAgICBzY2FsZUhlaWdodDogaGVpZ2h0XG4gICAgICB9KTtcbiAgICAgIHN1YkRvY3VtZW50LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5wYXJlbnQgPSB0aGlzO1xuICAgICAgdm9pZCBzdWJEb2N1bWVudC5yZW5kZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9pbWFnZSA9IHRoaXMuaW1hZ2U7XG4gICAgICBkb2N1bWVudC5zZXRWaWV3Qm94KHtcbiAgICAgICAgY3R4LFxuICAgICAgICBhc3BlY3RSYXRpbzogdGhpcy5nZXRBdHRyaWJ1dGUoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nKS5nZXRTdHJpbmcoKSxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGRlc2lyZWRXaWR0aDogX2ltYWdlLndpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIGRlc2lyZWRIZWlnaHQ6IF9pbWFnZS5oZWlnaHRcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5sb2FkZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBfaW1hZ2UuY29tcGxldGUgPT09ICd1bmRlZmluZWQnIHx8IF9pbWFnZS5jb21wbGV0ZSkge1xuICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoX2ltYWdlLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBnZXRCb3VuZGluZ0JveCgpIHtcbiAgICB2YXIgeCA9IHRoaXMuZ2V0QXR0cmlidXRlKCd4JykuZ2V0UGl4ZWxzKCd4Jyk7XG4gICAgdmFyIHkgPSB0aGlzLmdldEF0dHJpYnV0ZSgneScpLmdldFBpeGVscygneScpO1xuICAgIHZhciB3aWR0aCA9IHRoaXMuZ2V0U3R5bGUoJ3dpZHRoJykuZ2V0UGl4ZWxzKCd4Jyk7XG4gICAgdmFyIGhlaWdodCA9IHRoaXMuZ2V0U3R5bGUoJ2hlaWdodCcpLmdldFBpeGVscygneScpO1xuICAgIHJldHVybiBuZXcgQm91bmRpbmdCb3goeCwgeSwgeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcbiAgfVxuXG59XG5cbmNsYXNzIFN5bWJvbEVsZW1lbnQgZXh0ZW5kcyBSZW5kZXJlZEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMudHlwZSA9ICdzeW1ib2wnO1xuICB9XG5cbiAgcmVuZGVyKF8pIHsvLyBOTyBSRU5ERVJcbiAgfVxuXG59XG5cbmNsYXNzIFNWR0ZvbnRMb2FkZXIge1xuICBjb25zdHJ1Y3Rvcihkb2N1bWVudCkge1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xuICAgIGRvY3VtZW50LmZvbnRzLnB1c2godGhpcyk7XG4gIH1cblxuICBsb2FkKGZvbnRGYW1pbHksIHVybCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciB7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgfSA9IF90aGlzO1xuICAgICAgICB2YXIgc3ZnRG9jdW1lbnQgPSB5aWVsZCBkb2N1bWVudC5jYW52Zy5wYXJzZXIubG9hZCh1cmwpO1xuICAgICAgICB2YXIgZm9udHMgPSBzdmdEb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9udCcpO1xuICAgICAgICBBcnJheS5mcm9tKGZvbnRzKS5mb3JFYWNoKGZvbnROb2RlID0+IHtcbiAgICAgICAgICB2YXIgZm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZm9udE5vZGUpO1xuICAgICAgICAgIGRvY3VtZW50LmRlZmluaXRpb25zW2ZvbnRGYW1pbHldID0gZm9udDtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHdoaWxlIGxvYWRpbmcgZm9udCBcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiOlwiKSwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICB9KSgpO1xuICB9XG5cbn1cblxuY2xhc3MgU3R5bGVFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvY3VtZW50LCBub2RlLCBjYXB0dXJlVGV4dE5vZGVzKSB7XG4gICAgc3VwZXIoZG9jdW1lbnQsIG5vZGUsIGNhcHR1cmVUZXh0Tm9kZXMpO1xuICAgIHRoaXMudHlwZSA9ICdzdHlsZSc7XG4gICAgdmFyIGNzcyA9IGNvbXByZXNzU3BhY2VzKEFycmF5LmZyb20obm9kZS5jaGlsZE5vZGVzKSAvLyBORUVEIFRFU1RcbiAgICAubWFwKF8gPT4gXy50ZXh0Q29udGVudCkuam9pbignJykucmVwbGFjZSgvKFxcL1xcKihbXipdfFtcXHJcXG5dfChcXCorKFteKi9dfFtcXHJcXG5dKSkpKlxcKitcXC8pfCheW1xcc10qXFwvXFwvLiopL2dtLCAnJykgLy8gcmVtb3ZlIGNvbW1lbnRzXG4gICAgLnJlcGxhY2UoL0BpbXBvcnQuKjsvZywgJycpIC8vIHJlbW92ZSBpbXBvcnRzXG4gICAgKTtcbiAgICB2YXIgY3NzRGVmcyA9IGNzcy5zcGxpdCgnfScpO1xuICAgIGNzc0RlZnMuZm9yRWFjaChfID0+IHtcbiAgICAgIHZhciBkZWYgPSBfLnRyaW0oKTtcblxuICAgICAgaWYgKCFkZWYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3NzUGFydHMgPSBkZWYuc3BsaXQoJ3snKTtcbiAgICAgIHZhciBjc3NDbGFzc2VzID0gY3NzUGFydHNbMF0uc3BsaXQoJywnKTtcbiAgICAgIHZhciBjc3NQcm9wcyA9IGNzc1BhcnRzWzFdLnNwbGl0KCc7Jyk7XG4gICAgICBjc3NDbGFzc2VzLmZvckVhY2goXyA9PiB7XG4gICAgICAgIHZhciBjc3NDbGFzcyA9IF8udHJpbSgpO1xuXG4gICAgICAgIGlmICghY3NzQ2xhc3MpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJvcHMgPSBkb2N1bWVudC5zdHlsZXNbY3NzQ2xhc3NdIHx8IHt9O1xuICAgICAgICBjc3NQcm9wcy5mb3JFYWNoKGNzc1Byb3AgPT4ge1xuICAgICAgICAgIHZhciBwcm9wID0gY3NzUHJvcC5pbmRleE9mKCc6Jyk7XG4gICAgICAgICAgdmFyIG5hbWUgPSBjc3NQcm9wLnN1YnN0cigwLCBwcm9wKS50cmltKCk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gY3NzUHJvcC5zdWJzdHIocHJvcCArIDEsIGNzc1Byb3AubGVuZ3RoIC0gcHJvcCkudHJpbSgpO1xuXG4gICAgICAgICAgaWYgKG5hbWUgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgIHByb3BzW25hbWVdID0gbmV3IFByb3BlcnR5KGRvY3VtZW50LCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuc3R5bGVzW2Nzc0NsYXNzXSA9IHByb3BzO1xuICAgICAgICBkb2N1bWVudC5zdHlsZXNTcGVjaWZpY2l0eVtjc3NDbGFzc10gPSBnZXRTZWxlY3RvclNwZWNpZmljaXR5KGNzc0NsYXNzKTtcblxuICAgICAgICBpZiAoY3NzQ2xhc3MgPT09ICdAZm9udC1mYWNlJykge1xuICAgICAgICAgIC8vICAmJiAhbm9kZUVudlxuICAgICAgICAgIHZhciBmb250RmFtaWx5ID0gcHJvcHNbJ2ZvbnQtZmFtaWx5J10uZ2V0U3RyaW5nKCkucmVwbGFjZSgvXCJ8Jy9nLCAnJyk7XG4gICAgICAgICAgdmFyIHNyY3MgPSBwcm9wcy5zcmMuZ2V0U3RyaW5nKCkuc3BsaXQoJywnKTtcbiAgICAgICAgICBzcmNzLmZvckVhY2goc3JjID0+IHtcbiAgICAgICAgICAgIGlmIChzcmMuaW5kZXhPZignZm9ybWF0KFwic3ZnXCIpJykgPiAwKSB7XG4gICAgICAgICAgICAgIHZhciB1cmwgPSBwYXJzZUV4dGVybmFsVXJsKHNyYyk7XG5cbiAgICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIHZvaWQgbmV3IFNWR0ZvbnRMb2FkZXIoZG9jdW1lbnQpLmxvYWQoZm9udEZhbWlseSwgdXJsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59XG5TdHlsZUVsZW1lbnQucGFyc2VFeHRlcm5hbFVybCA9IHBhcnNlRXh0ZXJuYWxVcmw7XG5cbmNsYXNzIFVzZUVsZW1lbnQgZXh0ZW5kcyBSZW5kZXJlZEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMudHlwZSA9ICd1c2UnO1xuICB9XG5cbiAgc2V0Q29udGV4dChjdHgpIHtcbiAgICBzdXBlci5zZXRDb250ZXh0KGN0eCk7XG4gICAgdmFyIHhBdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3gnKTtcbiAgICB2YXIgeUF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZSgneScpO1xuXG4gICAgaWYgKHhBdHRyLmhhc1ZhbHVlKCkpIHtcbiAgICAgIGN0eC50cmFuc2xhdGUoeEF0dHIuZ2V0UGl4ZWxzKCd4JyksIDApO1xuICAgIH1cblxuICAgIGlmICh5QXR0ci5oYXNWYWx1ZSgpKSB7XG4gICAgICBjdHgudHJhbnNsYXRlKDAsIHlBdHRyLmdldFBpeGVscygneScpKTtcbiAgICB9XG4gIH1cblxuICBwYXRoKGN0eCkge1xuICAgIHZhciB7XG4gICAgICBlbGVtZW50XG4gICAgfSA9IHRoaXM7XG5cbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5wYXRoKGN0eCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4oY3R4KSB7XG4gICAgdmFyIHtcbiAgICAgIGRvY3VtZW50LFxuICAgICAgZWxlbWVudFxuICAgIH0gPSB0aGlzO1xuXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciB0ZW1wU3ZnID0gZWxlbWVudDtcblxuICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgLy8gcmVuZGVyIG1lIHVzaW5nIGEgdGVtcG9yYXJ5IHN2ZyBlbGVtZW50IGluIHN5bWJvbCBjYXNlcyAoaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHL3N0cnVjdC5odG1sI1VzZUVsZW1lbnQpXG4gICAgICAgIHRlbXBTdmcgPSBuZXcgU1ZHRWxlbWVudChkb2N1bWVudCwgbnVsbCk7XG4gICAgICAgIHRlbXBTdmcuYXR0cmlidXRlcy52aWV3Qm94ID0gbmV3IFByb3BlcnR5KGRvY3VtZW50LCAndmlld0JveCcsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JykuZ2V0U3RyaW5nKCkpO1xuICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXMucHJlc2VydmVBc3BlY3RSYXRpbyA9IG5ldyBQcm9wZXJ0eShkb2N1bWVudCwgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCBlbGVtZW50LmdldEF0dHJpYnV0ZSgncHJlc2VydmVBc3BlY3RSYXRpbycpLmdldFN0cmluZygpKTtcbiAgICAgICAgdGVtcFN2Zy5hdHRyaWJ1dGVzLm92ZXJmbG93ID0gbmV3IFByb3BlcnR5KGRvY3VtZW50LCAnb3ZlcmZsb3cnLCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnb3ZlcmZsb3cnKS5nZXRTdHJpbmcoKSk7XG4gICAgICAgIHRlbXBTdmcuY2hpbGRyZW4gPSBlbGVtZW50LmNoaWxkcmVuOyAvLyBlbGVtZW50IGlzIHN0aWxsIHRoZSBwYXJlbnQgb2YgdGhlIGNoaWxkcmVuXG5cbiAgICAgICAgZWxlbWVudC5zdHlsZXMub3BhY2l0eSA9IG5ldyBQcm9wZXJ0eShkb2N1bWVudCwgJ29wYWNpdHknLCB0aGlzLmNhbGN1bGF0ZU9wYWNpdHkoKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0ZW1wU3ZnLnR5cGUgPT09ICdzdmcnKSB7XG4gICAgICAgIHZhciB3aWR0aFN0eWxlID0gdGhpcy5nZXRTdHlsZSgnd2lkdGgnLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIHZhciBoZWlnaHRTdHlsZSA9IHRoaXMuZ2V0U3R5bGUoJ2hlaWdodCcsIGZhbHNlLCB0cnVlKTsgLy8gaWYgc3ltYm9sIG9yIHN2ZywgaW5oZXJpdCB3aWR0aC9oZWlnaHQgZnJvbSBtZVxuXG4gICAgICAgIGlmICh3aWR0aFN0eWxlLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXMud2lkdGggPSBuZXcgUHJvcGVydHkoZG9jdW1lbnQsICd3aWR0aCcsIHdpZHRoU3R5bGUuZ2V0U3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhlaWdodFN0eWxlLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXMuaGVpZ2h0ID0gbmV3IFByb3BlcnR5KGRvY3VtZW50LCAnaGVpZ2h0JywgaGVpZ2h0U3R5bGUuZ2V0U3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBvbGRQYXJlbnQgPSB0ZW1wU3ZnLnBhcmVudDtcbiAgICAgIHRlbXBTdmcucGFyZW50ID0gdGhpcztcbiAgICAgIHRlbXBTdmcucmVuZGVyKGN0eCk7XG4gICAgICB0ZW1wU3ZnLnBhcmVudCA9IG9sZFBhcmVudDtcbiAgICB9XG4gIH1cblxuICBnZXRCb3VuZGluZ0JveChjdHgpIHtcbiAgICB2YXIge1xuICAgICAgZWxlbWVudFxuICAgIH0gPSB0aGlzO1xuXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQm94KGN0eCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBlbGVtZW50VHJhbnNmb3JtKCkge1xuICAgIHZhciB7XG4gICAgICBkb2N1bWVudCxcbiAgICAgIGVsZW1lbnRcbiAgICB9ID0gdGhpcztcbiAgICByZXR1cm4gVHJhbnNmb3JtLmZyb21FbGVtZW50KGRvY3VtZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIGdldCBlbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5jYWNoZWRFbGVtZW50KSB7XG4gICAgICB0aGlzLmNhY2hlZEVsZW1lbnQgPSB0aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS5nZXREZWZpbml0aW9uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2FjaGVkRWxlbWVudDtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGltR2V0KGltZywgeCwgeSwgd2lkdGgsIF9oZWlnaHQsIHJnYmEpIHtcbiAgcmV0dXJuIGltZ1t5ICogd2lkdGggKiA0ICsgeCAqIDQgKyByZ2JhXTtcbn1cblxuZnVuY3Rpb24gaW1TZXQoaW1nLCB4LCB5LCB3aWR0aCwgX2hlaWdodCwgcmdiYSwgdmFsKSB7XG4gIGltZ1t5ICogd2lkdGggKiA0ICsgeCAqIDQgKyByZ2JhXSA9IHZhbDtcbn1cblxuZnVuY3Rpb24gbShtYXRyaXgsIGksIHYpIHtcbiAgdmFyIG1pID0gbWF0cml4W2ldO1xuICByZXR1cm4gbWkgKiB2O1xufVxuXG5mdW5jdGlvbiBjKGEsIG0xLCBtMiwgbTMpIHtcbiAgcmV0dXJuIG0xICsgTWF0aC5jb3MoYSkgKiBtMiArIE1hdGguc2luKGEpICogbTM7XG59XG5cbmNsYXNzIEZlQ29sb3JNYXRyaXhFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvY3VtZW50LCBub2RlLCBjYXB0dXJlVGV4dE5vZGVzKSB7XG4gICAgc3VwZXIoZG9jdW1lbnQsIG5vZGUsIGNhcHR1cmVUZXh0Tm9kZXMpO1xuICAgIHRoaXMudHlwZSA9ICdmZUNvbG9yTWF0cml4JztcbiAgICB2YXIgbWF0cml4ID0gdG9OdW1iZXJzKHRoaXMuZ2V0QXR0cmlidXRlKCd2YWx1ZXMnKS5nZXRTdHJpbmcoKSk7XG5cbiAgICBzd2l0Y2ggKHRoaXMuZ2V0QXR0cmlidXRlKCd0eXBlJykuZ2V0U3RyaW5nKCdtYXRyaXgnKSkge1xuICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHL2ZpbHRlcnMuaHRtbCNmZUNvbG9yTWF0cml4RWxlbWVudFxuICAgICAgY2FzZSAnc2F0dXJhdGUnOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHMgPSBtYXRyaXhbMF07XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgYXJyYXktZWxlbWVudC1uZXdsaW5lICovXG5cbiAgICAgICAgICBtYXRyaXggPSBbMC4yMTMgKyAwLjc4NyAqIHMsIDAuNzE1IC0gMC43MTUgKiBzLCAwLjA3MiAtIDAuMDcyICogcywgMCwgMCwgMC4yMTMgLSAwLjIxMyAqIHMsIDAuNzE1ICsgMC4yODUgKiBzLCAwLjA3MiAtIDAuMDcyICogcywgMCwgMCwgMC4yMTMgLSAwLjIxMyAqIHMsIDAuNzE1IC0gMC43MTUgKiBzLCAwLjA3MiArIDAuOTI4ICogcywgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMV07XG4gICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBhcnJheS1lbGVtZW50LW5ld2xpbmUgKi9cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ2h1ZVJvdGF0ZSc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgYSA9IG1hdHJpeFswXSAqIE1hdGguUEkgLyAxODAuMDtcbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1lbGVtZW50LW5ld2xpbmUgKi9cblxuICAgICAgICAgIG1hdHJpeCA9IFtjKGEsIDAuMjEzLCAwLjc4NywgLTAuMjEzKSwgYyhhLCAwLjcxNSwgLTAuNzE1LCAtMC43MTUpLCBjKGEsIDAuMDcyLCAtMC4wNzIsIDAuOTI4KSwgMCwgMCwgYyhhLCAwLjIxMywgLTAuMjEzLCAwLjE0MyksIGMoYSwgMC43MTUsIDAuMjg1LCAwLjE0MCksIGMoYSwgMC4wNzIsIC0wLjA3MiwgLTAuMjgzKSwgMCwgMCwgYyhhLCAwLjIxMywgLTAuMjEzLCAtMC43ODcpLCBjKGEsIDAuNzE1LCAtMC43MTUsIDAuNzE1KSwgYyhhLCAwLjA3MiwgMC45MjgsIDAuMDcyKSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMV07XG4gICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBhcnJheS1lbGVtZW50LW5ld2xpbmUgKi9cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ2x1bWluYW5jZVRvQWxwaGEnOlxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1lbGVtZW50LW5ld2xpbmUgKi9cbiAgICAgICAgbWF0cml4ID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAuMjEyNSwgMC43MTU0LCAwLjA3MjEsIDAsIDAsIDAsIDAsIDAsIDAsIDFdO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIGFycmF5LWVsZW1lbnQtbmV3bGluZSAqL1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICAgIHRoaXMuaW5jbHVkZU9wYWNpdHkgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaW5jbHVkZU9wYWNpdHknKS5oYXNWYWx1ZSgpO1xuICB9XG5cbiAgYXBwbHkoY3R4LCBfeCwgX3ksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAvLyBhc3N1bWluZyB4PT0wICYmIHk9PTAgZm9yIG5vd1xuICAgIHZhciB7XG4gICAgICBpbmNsdWRlT3BhY2l0eSxcbiAgICAgIG1hdHJpeFxuICAgIH0gPSB0aGlzO1xuICAgIHZhciBzcmNEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGZvciAodmFyIHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICB2YXIgciA9IGltR2V0KHNyY0RhdGEuZGF0YSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgMCk7XG4gICAgICAgIHZhciBnID0gaW1HZXQoc3JjRGF0YS5kYXRhLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCAxKTtcbiAgICAgICAgdmFyIGIgPSBpbUdldChzcmNEYXRhLmRhdGEsIHgsIHksIHdpZHRoLCBoZWlnaHQsIDIpO1xuICAgICAgICB2YXIgYSA9IGltR2V0KHNyY0RhdGEuZGF0YSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgMyk7XG4gICAgICAgIHZhciBuciA9IG0obWF0cml4LCAwLCByKSArIG0obWF0cml4LCAxLCBnKSArIG0obWF0cml4LCAyLCBiKSArIG0obWF0cml4LCAzLCBhKSArIG0obWF0cml4LCA0LCAxKTtcbiAgICAgICAgdmFyIG5nID0gbShtYXRyaXgsIDUsIHIpICsgbShtYXRyaXgsIDYsIGcpICsgbShtYXRyaXgsIDcsIGIpICsgbShtYXRyaXgsIDgsIGEpICsgbShtYXRyaXgsIDksIDEpO1xuICAgICAgICB2YXIgbmIgPSBtKG1hdHJpeCwgMTAsIHIpICsgbShtYXRyaXgsIDExLCBnKSArIG0obWF0cml4LCAxMiwgYikgKyBtKG1hdHJpeCwgMTMsIGEpICsgbShtYXRyaXgsIDE0LCAxKTtcbiAgICAgICAgdmFyIG5hID0gbShtYXRyaXgsIDE1LCByKSArIG0obWF0cml4LCAxNiwgZykgKyBtKG1hdHJpeCwgMTcsIGIpICsgbShtYXRyaXgsIDE4LCBhKSArIG0obWF0cml4LCAxOSwgMSk7XG5cbiAgICAgICAgaWYgKGluY2x1ZGVPcGFjaXR5KSB7XG4gICAgICAgICAgbnIgPSAwO1xuICAgICAgICAgIG5nID0gMDtcbiAgICAgICAgICBuYiA9IDA7XG4gICAgICAgICAgbmEgKj0gYSAvIDI1NTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltU2V0KHNyY0RhdGEuZGF0YSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgMCwgbnIpO1xuICAgICAgICBpbVNldChzcmNEYXRhLmRhdGEsIHgsIHksIHdpZHRoLCBoZWlnaHQsIDEsIG5nKTtcbiAgICAgICAgaW1TZXQoc3JjRGF0YS5kYXRhLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCAyLCBuYik7XG4gICAgICAgIGltU2V0KHNyY0RhdGEuZGF0YSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgMywgbmEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgY3R4LnB1dEltYWdlRGF0YShzcmNEYXRhLCAwLCAwKTtcbiAgfVxuXG59XG5cbmNsYXNzIE1hc2tFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy50eXBlID0gJ21hc2snO1xuICB9XG5cbiAgYXBwbHkoY3R4LCBlbGVtZW50KSB7XG4gICAgdmFyIHtcbiAgICAgIGRvY3VtZW50XG4gICAgfSA9IHRoaXM7IC8vIHJlbmRlciBhcyB0ZW1wIHN2Z1xuXG4gICAgdmFyIHggPSB0aGlzLmdldEF0dHJpYnV0ZSgneCcpLmdldFBpeGVscygneCcpO1xuICAgIHZhciB5ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3knKS5nZXRQaXhlbHMoJ3knKTtcbiAgICB2YXIgd2lkdGggPSB0aGlzLmdldFN0eWxlKCd3aWR0aCcpLmdldFBpeGVscygneCcpO1xuICAgIHZhciBoZWlnaHQgPSB0aGlzLmdldFN0eWxlKCdoZWlnaHQnKS5nZXRQaXhlbHMoJ3knKTtcblxuICAgIGlmICghd2lkdGggJiYgIWhlaWdodCkge1xuICAgICAgdmFyIGJvdW5kaW5nQm94ID0gbmV3IEJvdW5kaW5nQm94KCk7XG4gICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBib3VuZGluZ0JveC5hZGRCb3VuZGluZ0JveChjaGlsZC5nZXRCb3VuZGluZ0JveChjdHgpKTtcbiAgICAgIH0pO1xuICAgICAgeCA9IE1hdGguZmxvb3IoYm91bmRpbmdCb3gueDEpO1xuICAgICAgeSA9IE1hdGguZmxvb3IoYm91bmRpbmdCb3gueTEpO1xuICAgICAgd2lkdGggPSBNYXRoLmZsb29yKGJvdW5kaW5nQm94LndpZHRoKTtcbiAgICAgIGhlaWdodCA9IE1hdGguZmxvb3IoYm91bmRpbmdCb3guaGVpZ2h0KTtcbiAgICB9XG5cbiAgICB2YXIgaWdub3JlZFN0eWxlcyA9IHRoaXMucmVtb3ZlU3R5bGVzKGVsZW1lbnQsIE1hc2tFbGVtZW50Lmlnbm9yZVN0eWxlcyk7XG4gICAgdmFyIG1hc2tDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVDYW52YXMoeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcbiAgICB2YXIgbWFza0N0eCA9IG1hc2tDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBkb2N1bWVudC5zY3JlZW4uc2V0RGVmYXVsdHMobWFza0N0eCk7XG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbihtYXNrQ3R4KTsgLy8gY29udmVydCBtYXNrIHRvIGFscGhhIHdpdGggYSBmYWtlIG5vZGVcbiAgICAvLyBUT0RPOiByZWZhY3RvciBvdXQgYXBwbHkgZnJvbSBmZUNvbG9yTWF0cml4XG5cbiAgICBuZXcgRmVDb2xvck1hdHJpeEVsZW1lbnQoZG9jdW1lbnQsIHtcbiAgICAgIG5vZGVUeXBlOiAxLFxuICAgICAgY2hpbGROb2RlczogW10sXG4gICAgICBhdHRyaWJ1dGVzOiBbe1xuICAgICAgICBub2RlTmFtZTogJ3R5cGUnLFxuICAgICAgICB2YWx1ZTogJ2x1bWluYW5jZVRvQWxwaGEnXG4gICAgICB9LCB7XG4gICAgICAgIG5vZGVOYW1lOiAnaW5jbHVkZU9wYWNpdHknLFxuICAgICAgICB2YWx1ZTogJ3RydWUnXG4gICAgICB9XVxuICAgIH0pLmFwcGx5KG1hc2tDdHgsIDAsIDAsIHggKyB3aWR0aCwgeSArIGhlaWdodCk7XG4gICAgdmFyIHRtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUNhbnZhcyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xuICAgIHZhciB0bXBDdHggPSB0bXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBkb2N1bWVudC5zY3JlZW4uc2V0RGVmYXVsdHModG1wQ3R4KTtcbiAgICBlbGVtZW50LnJlbmRlcih0bXBDdHgpO1xuICAgIHRtcEN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24taW4nO1xuICAgIHRtcEN0eC5maWxsU3R5bGUgPSBtYXNrQ3R4LmNyZWF0ZVBhdHRlcm4obWFza0NhbnZhcywgJ25vLXJlcGVhdCcpO1xuICAgIHRtcEN0eC5maWxsUmVjdCgwLCAwLCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0bXBDdHguY3JlYXRlUGF0dGVybih0bXBDYW52YXMsICduby1yZXBlYXQnKTtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTsgLy8gcmVhc3NpZ24gbWFza1xuXG4gICAgdGhpcy5yZXN0b3JlU3R5bGVzKGVsZW1lbnQsIGlnbm9yZWRTdHlsZXMpO1xuICB9XG5cbiAgcmVuZGVyKF8pIHsvLyBOTyBSRU5ERVJcbiAgfVxuXG59XG5NYXNrRWxlbWVudC5pZ25vcmVTdHlsZXMgPSBbJ21hc2snLCAndHJhbnNmb3JtJywgJ2NsaXAtcGF0aCddO1xuXG52YXIgbm9vcCA9ICgpID0+IHsvLyBOT09QXG59O1xuXG5jbGFzcyBDbGlwUGF0aEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnR5cGUgPSAnY2xpcFBhdGgnO1xuICB9XG5cbiAgYXBwbHkoY3R4KSB7XG4gICAgdmFyIHtcbiAgICAgIGRvY3VtZW50XG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIGNvbnRleHRQcm90byA9IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YoY3R4KTtcbiAgICB2YXIge1xuICAgICAgYmVnaW5QYXRoLFxuICAgICAgY2xvc2VQYXRoXG4gICAgfSA9IGN0eDtcblxuICAgIGlmIChjb250ZXh0UHJvdG8pIHtcbiAgICAgIGNvbnRleHRQcm90by5iZWdpblBhdGggPSBub29wO1xuICAgICAgY29udGV4dFByb3RvLmNsb3NlUGF0aCA9IG5vb3A7XG4gICAgfVxuXG4gICAgUmVmbGVjdC5hcHBseShiZWdpblBhdGgsIGN0eCwgW10pO1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBpZiAodHlwZW9mIGNoaWxkLnBhdGggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyYW5zZm9ybSA9IHR5cGVvZiBjaGlsZC5lbGVtZW50VHJhbnNmb3JtICE9PSAndW5kZWZpbmVkJyA/IGNoaWxkLmVsZW1lbnRUcmFuc2Zvcm0oKSA6IG51bGw7IC8vIGhhbmRsZSA8dXNlIC8+XG5cbiAgICAgIGlmICghdHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IFRyYW5zZm9ybS5mcm9tRWxlbWVudChkb2N1bWVudCwgY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybS5hcHBseShjdHgpO1xuICAgICAgfVxuXG4gICAgICBjaGlsZC5wYXRoKGN0eCk7XG5cbiAgICAgIGlmIChjb250ZXh0UHJvdG8pIHtcbiAgICAgICAgY29udGV4dFByb3RvLmNsb3NlUGF0aCA9IGNsb3NlUGF0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm0udW5hcHBseShjdHgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFJlZmxlY3QuYXBwbHkoY2xvc2VQYXRoLCBjdHgsIFtdKTtcbiAgICBjdHguY2xpcCgpO1xuXG4gICAgaWYgKGNvbnRleHRQcm90bykge1xuICAgICAgY29udGV4dFByb3RvLmJlZ2luUGF0aCA9IGJlZ2luUGF0aDtcbiAgICAgIGNvbnRleHRQcm90by5jbG9zZVBhdGggPSBjbG9zZVBhdGg7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKF8pIHsvLyBOTyBSRU5ERVJcbiAgfVxuXG59XG5cbmNsYXNzIEZpbHRlckVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnR5cGUgPSAnZmlsdGVyJztcbiAgfVxuXG4gIGFwcGx5KGN0eCwgZWxlbWVudCkge1xuICAgIC8vIHJlbmRlciBhcyB0ZW1wIHN2Z1xuICAgIHZhciB7XG4gICAgICBkb2N1bWVudCxcbiAgICAgIGNoaWxkcmVuXG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIGJvdW5kaW5nQm94ID0gZWxlbWVudC5nZXRCb3VuZGluZ0JveChjdHgpO1xuXG4gICAgaWYgKCFib3VuZGluZ0JveCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBweCA9IDA7XG4gICAgdmFyIHB5ID0gMDtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIHZhciBlZmQgPSBjaGlsZC5leHRyYUZpbHRlckRpc3RhbmNlIHx8IDA7XG4gICAgICBweCA9IE1hdGgubWF4KHB4LCBlZmQpO1xuICAgICAgcHkgPSBNYXRoLm1heChweSwgZWZkKTtcbiAgICB9KTtcbiAgICB2YXIgd2lkdGggPSBNYXRoLmZsb29yKGJvdW5kaW5nQm94LndpZHRoKTtcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5mbG9vcihib3VuZGluZ0JveC5oZWlnaHQpO1xuICAgIHZhciB0bXBDYW52YXNXaWR0aCA9IHdpZHRoICsgMiAqIHB4O1xuICAgIHZhciB0bXBDYW52YXNIZWlnaHQgPSBoZWlnaHQgKyAyICogcHk7XG5cbiAgICBpZiAodG1wQ2FudmFzV2lkdGggPCAxIHx8IHRtcENhbnZhc0hlaWdodCA8IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgeCA9IE1hdGguZmxvb3IoYm91bmRpbmdCb3gueCk7XG4gICAgdmFyIHkgPSBNYXRoLmZsb29yKGJvdW5kaW5nQm94LnkpO1xuICAgIHZhciBpZ25vcmVkU3R5bGVzID0gdGhpcy5yZW1vdmVTdHlsZXMoZWxlbWVudCwgRmlsdGVyRWxlbWVudC5pZ25vcmVTdHlsZXMpO1xuICAgIHZhciB0bXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVDYW52YXModG1wQ2FudmFzV2lkdGgsIHRtcENhbnZhc0hlaWdodCk7XG4gICAgdmFyIHRtcEN0eCA9IHRtcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGRvY3VtZW50LnNjcmVlbi5zZXREZWZhdWx0cyh0bXBDdHgpO1xuICAgIHRtcEN0eC50cmFuc2xhdGUoLXggKyBweCwgLXkgKyBweSk7XG4gICAgZWxlbWVudC5yZW5kZXIodG1wQ3R4KTsgLy8gYXBwbHkgZmlsdGVyc1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBpZiAodHlwZW9mIGNoaWxkLmFwcGx5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLmFwcGx5KHRtcEN0eCwgMCwgMCwgdG1wQ2FudmFzV2lkdGgsIHRtcENhbnZhc0hlaWdodCk7XG4gICAgICB9XG4gICAgfSk7IC8vIHJlbmRlciBvbiBtZVxuXG4gICAgY3R4LmRyYXdJbWFnZSh0bXBDYW52YXMsIDAsIDAsIHRtcENhbnZhc1dpZHRoLCB0bXBDYW52YXNIZWlnaHQsIHggLSBweCwgeSAtIHB5LCB0bXBDYW52YXNXaWR0aCwgdG1wQ2FudmFzSGVpZ2h0KTtcbiAgICB0aGlzLnJlc3RvcmVTdHlsZXMoZWxlbWVudCwgaWdub3JlZFN0eWxlcyk7XG4gIH1cblxuICByZW5kZXIoXykgey8vIE5PIFJFTkRFUlxuICB9XG5cbn1cbkZpbHRlckVsZW1lbnQuaWdub3JlU3R5bGVzID0gWydmaWx0ZXInLCAndHJhbnNmb3JtJywgJ2NsaXAtcGF0aCddO1xuXG5jbGFzcyBGZURyb3BTaGFkb3dFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvY3VtZW50LCBub2RlLCBjYXB0dXJlVGV4dE5vZGVzKSB7XG4gICAgc3VwZXIoZG9jdW1lbnQsIG5vZGUsIGNhcHR1cmVUZXh0Tm9kZXMpO1xuICAgIHRoaXMudHlwZSA9ICdmZURyb3BTaGFkb3cnO1xuICAgIHRoaXMuYWRkU3R5bGVzRnJvbVN0eWxlRGVmaW5pdGlvbigpO1xuICB9XG5cbiAgYXBwbHkoXywgX3gsIF95LCBfd2lkdGgsIF9oZWlnaHQpIHsvLyBUT0RPOiBpbXBsZW1lbnRcbiAgfVxuXG59XG5cbmNsYXNzIEZlTW9ycGhvbG9neUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnR5cGUgPSAnZmVNb3JwaG9sb2d5JztcbiAgfVxuXG4gIGFwcGx5KF8sIF94LCBfeSwgX3dpZHRoLCBfaGVpZ2h0KSB7Ly8gVE9ETzogaW1wbGVtZW50XG4gIH1cblxufVxuXG5jbGFzcyBGZUNvbXBvc2l0ZUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnR5cGUgPSAnZmVDb21wb3NpdGUnO1xuICB9XG5cbiAgYXBwbHkoXywgX3gsIF95LCBfd2lkdGgsIF9oZWlnaHQpIHsvLyBUT0RPOiBpbXBsZW1lbnRcbiAgfVxuXG59XG5cbmNsYXNzIEZlR2F1c3NpYW5CbHVyRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb2N1bWVudCwgbm9kZSwgY2FwdHVyZVRleHROb2Rlcykge1xuICAgIHN1cGVyKGRvY3VtZW50LCBub2RlLCBjYXB0dXJlVGV4dE5vZGVzKTtcbiAgICB0aGlzLnR5cGUgPSAnZmVHYXVzc2lhbkJsdXInO1xuICAgIHRoaXMuYmx1clJhZGl1cyA9IE1hdGguZmxvb3IodGhpcy5nZXRBdHRyaWJ1dGUoJ3N0ZERldmlhdGlvbicpLmdldE51bWJlcigpKTtcbiAgICB0aGlzLmV4dHJhRmlsdGVyRGlzdGFuY2UgPSB0aGlzLmJsdXJSYWRpdXM7XG4gIH1cblxuICBhcHBseShjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB2YXIge1xuICAgICAgZG9jdW1lbnQsXG4gICAgICBibHVyUmFkaXVzXG4gICAgfSA9IHRoaXM7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC53aW5kb3cgPyBkb2N1bWVudC53aW5kb3cuZG9jdW1lbnQuYm9keSA6IG51bGw7XG4gICAgdmFyIGNhbnZhcyA9IGN0eC5jYW52YXM7IC8vIFN0YWNrQmx1ciByZXF1aXJlcyBjYW52YXMgYmUgb24gZG9jdW1lbnRcblxuICAgIGNhbnZhcy5pZCA9IGRvY3VtZW50LmdldFVuaXF1ZUlkKCk7XG5cbiAgICBpZiAoYm9keSkge1xuICAgICAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgfVxuXG4gICAgY2FudmFzUkdCQShjYW52YXMsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGJsdXJSYWRpdXMpO1xuXG4gICAgaWYgKGJvZHkpIHtcbiAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoY2FudmFzKTtcbiAgICB9XG4gIH1cblxufVxuXG5jbGFzcyBUaXRsZUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnR5cGUgPSAndGl0bGUnO1xuICB9XG5cbn1cblxuY2xhc3MgRGVzY0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnR5cGUgPSAnZGVzYyc7XG4gIH1cblxufVxuXG52YXIgZWxlbWVudHMgPSB7XG4gICdzdmcnOiBTVkdFbGVtZW50LFxuICAncmVjdCc6IFJlY3RFbGVtZW50LFxuICAnY2lyY2xlJzogQ2lyY2xlRWxlbWVudCxcbiAgJ2VsbGlwc2UnOiBFbGxpcHNlRWxlbWVudCxcbiAgJ2xpbmUnOiBMaW5lRWxlbWVudCxcbiAgJ3BvbHlsaW5lJzogUG9seWxpbmVFbGVtZW50LFxuICAncG9seWdvbic6IFBvbHlnb25FbGVtZW50LFxuICAncGF0aCc6IFBhdGhFbGVtZW50LFxuICAncGF0dGVybic6IFBhdHRlcm5FbGVtZW50LFxuICAnbWFya2VyJzogTWFya2VyRWxlbWVudCxcbiAgJ2RlZnMnOiBEZWZzRWxlbWVudCxcbiAgJ2xpbmVhckdyYWRpZW50JzogTGluZWFyR3JhZGllbnRFbGVtZW50LFxuICAncmFkaWFsR3JhZGllbnQnOiBSYWRpYWxHcmFkaWVudEVsZW1lbnQsXG4gICdzdG9wJzogU3RvcEVsZW1lbnQsXG4gICdhbmltYXRlJzogQW5pbWF0ZUVsZW1lbnQsXG4gICdhbmltYXRlQ29sb3InOiBBbmltYXRlQ29sb3JFbGVtZW50LFxuICAnYW5pbWF0ZVRyYW5zZm9ybSc6IEFuaW1hdGVUcmFuc2Zvcm1FbGVtZW50LFxuICAnZm9udCc6IEZvbnRFbGVtZW50LFxuICAnZm9udC1mYWNlJzogRm9udEZhY2VFbGVtZW50LFxuICAnbWlzc2luZy1nbHlwaCc6IE1pc3NpbmdHbHlwaEVsZW1lbnQsXG4gICdnbHlwaCc6IEdseXBoRWxlbWVudCxcbiAgJ3RleHQnOiBUZXh0RWxlbWVudCxcbiAgJ3RzcGFuJzogVFNwYW5FbGVtZW50LFxuICAndHJlZic6IFRSZWZFbGVtZW50LFxuICAnYSc6IEFFbGVtZW50LFxuICAndGV4dFBhdGgnOiBUZXh0UGF0aEVsZW1lbnQsXG4gICdpbWFnZSc6IEltYWdlRWxlbWVudCxcbiAgJ2cnOiBHRWxlbWVudCxcbiAgJ3N5bWJvbCc6IFN5bWJvbEVsZW1lbnQsXG4gICdzdHlsZSc6IFN0eWxlRWxlbWVudCxcbiAgJ3VzZSc6IFVzZUVsZW1lbnQsXG4gICdtYXNrJzogTWFza0VsZW1lbnQsXG4gICdjbGlwUGF0aCc6IENsaXBQYXRoRWxlbWVudCxcbiAgJ2ZpbHRlcic6IEZpbHRlckVsZW1lbnQsXG4gICdmZURyb3BTaGFkb3cnOiBGZURyb3BTaGFkb3dFbGVtZW50LFxuICAnZmVNb3JwaG9sb2d5JzogRmVNb3JwaG9sb2d5RWxlbWVudCxcbiAgJ2ZlQ29tcG9zaXRlJzogRmVDb21wb3NpdGVFbGVtZW50LFxuICAnZmVDb2xvck1hdHJpeCc6IEZlQ29sb3JNYXRyaXhFbGVtZW50LFxuICAnZmVHYXVzc2lhbkJsdXInOiBGZUdhdXNzaWFuQmx1ckVsZW1lbnQsXG4gICd0aXRsZSc6IFRpdGxlRWxlbWVudCxcbiAgJ2Rlc2MnOiBEZXNjRWxlbWVudFxufTtcblxuZnVuY3Rpb24gb3duS2V5cyQxKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQxKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpIHtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgcmV0dXJuIGNhbnZhcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1hZ2UoX3gpIHtcbiAgcmV0dXJuIF9jcmVhdGVJbWFnZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlSW1hZ2UoKSB7XG4gIF9jcmVhdGVJbWFnZSA9IF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoc3JjKSB7XG4gICAgdmFyIGFub255bW91c0Nyb3NzT3JpZ2luID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICB2YXIgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGlmIChhbm9ueW1vdXNDcm9zc09yaWdpbikge1xuICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnQW5vbnltb3VzJztcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKGltYWdlKTtcbiAgICAgIH07XG5cbiAgICAgIGltYWdlLm9uZXJyb3IgPSAoX2V2ZW50LCBfc291cmNlLCBfbGluZW5vLCBfY29sbm8sIGVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9O1xuXG4gICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gX2NyZWF0ZUltYWdlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmNsYXNzIERvY3VtZW50IHtcbiAgY29uc3RydWN0b3IoY2FudmcpIHtcbiAgICB2YXIge1xuICAgICAgcm9vdEVtU2l6ZSA9IDEyLFxuICAgICAgZW1TaXplID0gMTIsXG4gICAgICBjcmVhdGVDYW52YXMgPSBEb2N1bWVudC5jcmVhdGVDYW52YXMsXG4gICAgICBjcmVhdGVJbWFnZSA9IERvY3VtZW50LmNyZWF0ZUltYWdlLFxuICAgICAgYW5vbnltb3VzQ3Jvc3NPcmlnaW5cbiAgICB9ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB0aGlzLmNhbnZnID0gY2Fudmc7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHt9O1xuICAgIHRoaXMuc3R5bGVzID0ge307XG4gICAgdGhpcy5zdHlsZXNTcGVjaWZpY2l0eSA9IHt9O1xuICAgIHRoaXMuaW1hZ2VzID0gW107XG4gICAgdGhpcy5mb250cyA9IFtdO1xuICAgIHRoaXMuZW1TaXplU3RhY2sgPSBbXTtcbiAgICB0aGlzLnVuaXF1ZUlkID0gMDtcbiAgICB0aGlzLnNjcmVlbiA9IGNhbnZnLnNjcmVlbjtcbiAgICB0aGlzLnJvb3RFbVNpemUgPSByb290RW1TaXplO1xuICAgIHRoaXMuZW1TaXplID0gZW1TaXplO1xuICAgIHRoaXMuY3JlYXRlQ2FudmFzID0gY3JlYXRlQ2FudmFzO1xuICAgIHRoaXMuY3JlYXRlSW1hZ2UgPSB0aGlzLmJpbmRDcmVhdGVJbWFnZShjcmVhdGVJbWFnZSwgYW5vbnltb3VzQ3Jvc3NPcmlnaW4pO1xuICAgIHRoaXMuc2NyZWVuLndhaXQodGhpcy5pc0ltYWdlc0xvYWRlZC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnNjcmVlbi53YWl0KHRoaXMuaXNGb250c0xvYWRlZC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGJpbmRDcmVhdGVJbWFnZShjcmVhdGVJbWFnZSwgYW5vbnltb3VzQ3Jvc3NPcmlnaW4pIHtcbiAgICBpZiAodHlwZW9mIGFub255bW91c0Nyb3NzT3JpZ2luID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiAoc291cmNlLCBmb3JjZUFub255bW91c0Nyb3NzT3JpZ2luKSA9PiBjcmVhdGVJbWFnZShzb3VyY2UsIHR5cGVvZiBmb3JjZUFub255bW91c0Nyb3NzT3JpZ2luID09PSAnYm9vbGVhbicgPyBmb3JjZUFub255bW91c0Nyb3NzT3JpZ2luIDogYW5vbnltb3VzQ3Jvc3NPcmlnaW4pO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVJbWFnZTtcbiAgfVxuXG4gIGdldCB3aW5kb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NyZWVuLndpbmRvdztcbiAgfVxuXG4gIGdldCBmZXRjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5zY3JlZW4uZmV0Y2g7XG4gIH1cblxuICBnZXQgY3R4KCkge1xuICAgIHJldHVybiB0aGlzLnNjcmVlbi5jdHg7XG4gIH1cblxuICBnZXQgZW1TaXplKCkge1xuICAgIHZhciB7XG4gICAgICBlbVNpemVTdGFja1xuICAgIH0gPSB0aGlzO1xuICAgIHJldHVybiBlbVNpemVTdGFja1tlbVNpemVTdGFjay5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIHNldCBlbVNpemUodmFsdWUpIHtcbiAgICB2YXIge1xuICAgICAgZW1TaXplU3RhY2tcbiAgICB9ID0gdGhpcztcbiAgICBlbVNpemVTdGFjay5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHBvcEVtU2l6ZSgpIHtcbiAgICB2YXIge1xuICAgICAgZW1TaXplU3RhY2tcbiAgICB9ID0gdGhpcztcbiAgICBlbVNpemVTdGFjay5wb3AoKTtcbiAgfVxuXG4gIGdldFVuaXF1ZUlkKCkge1xuICAgIHJldHVybiBcImNhbnZnXCIuY29uY2F0KCsrdGhpcy51bmlxdWVJZCk7XG4gIH1cblxuICBpc0ltYWdlc0xvYWRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXMuZXZlcnkoXyA9PiBfLmxvYWRlZCk7XG4gIH1cblxuICBpc0ZvbnRzTG9hZGVkKCkge1xuICAgIHJldHVybiB0aGlzLmZvbnRzLmV2ZXJ5KF8gPT4gXy5sb2FkZWQpO1xuICB9XG5cbiAgY3JlYXRlRG9jdW1lbnRFbGVtZW50KGRvY3VtZW50KSB7XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IHRoaXMuY3JlYXRlRWxlbWVudChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICAgIGRvY3VtZW50RWxlbWVudC5yb290ID0gdHJ1ZTtcbiAgICBkb2N1bWVudEVsZW1lbnQuYWRkU3R5bGVzRnJvbVN0eWxlRGVmaW5pdGlvbigpO1xuICAgIHRoaXMuZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnRFbGVtZW50O1xuICAgIHJldHVybiBkb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVFbGVtZW50KG5vZGUpIHtcbiAgICB2YXIgZWxlbWVudFR5cGUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15bXjpdKzovLCAnJyk7XG4gICAgdmFyIEVsZW1lbnRUeXBlID0gRG9jdW1lbnQuZWxlbWVudFR5cGVzW2VsZW1lbnRUeXBlXTtcblxuICAgIGlmICh0eXBlb2YgRWxlbWVudFR5cGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gbmV3IEVsZW1lbnRUeXBlKHRoaXMsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgVW5rbm93bkVsZW1lbnQodGhpcywgbm9kZSk7XG4gIH1cblxuICBjcmVhdGVUZXh0Tm9kZShub2RlKSB7XG4gICAgcmV0dXJuIG5ldyBUZXh0Tm9kZSh0aGlzLCBub2RlKTtcbiAgfVxuXG4gIHNldFZpZXdCb3goY29uZmlnKSB7XG4gICAgdGhpcy5zY3JlZW4uc2V0Vmlld0JveChfb2JqZWN0U3ByZWFkJDEoe1xuICAgICAgZG9jdW1lbnQ6IHRoaXNcbiAgICB9LCBjb25maWcpKTtcbiAgfVxuXG59XG5Eb2N1bWVudC5jcmVhdGVDYW52YXMgPSBjcmVhdGVDYW52YXM7XG5Eb2N1bWVudC5jcmVhdGVJbWFnZSA9IGNyZWF0ZUltYWdlO1xuRG9jdW1lbnQuZWxlbWVudFR5cGVzID0gZWxlbWVudHM7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuLyoqXHJcbiAqIFNWRyByZW5kZXJlciBvbiBjYW52YXMuXHJcbiAqL1xuXG5jbGFzcyBDYW52ZyB7XG4gIC8qKlxyXG4gICAqIE1haW4gY29uc3RydWN0b3IuXHJcbiAgICogQHBhcmFtIGN0eCAtIFJlbmRlcmluZyBjb250ZXh0LlxyXG4gICAqIEBwYXJhbSBzdmcgLSBTVkcgRG9jdW1lbnQuXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBSZW5kZXJpbmcgb3B0aW9ucy5cclxuICAgKi9cbiAgY29uc3RydWN0b3IoY3R4LCBzdmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdGhpcy5wYXJzZXIgPSBuZXcgUGFyc2VyKG9wdGlvbnMpO1xuICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbihjdHgsIG9wdGlvbnMpO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdmFyIGRvY3VtZW50ID0gbmV3IERvY3VtZW50KHRoaXMsIG9wdGlvbnMpO1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEVsZW1lbnQoc3ZnKTtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgdGhpcy5kb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudEVsZW1lbnQ7XG4gIH1cbiAgLyoqXHJcbiAgICogQ3JlYXRlIENhbnZnIGluc3RhbmNlIGZyb20gU1ZHIHNvdXJjZSBzdHJpbmcgb3IgVVJMLlxyXG4gICAqIEBwYXJhbSBjdHggLSBSZW5kZXJpbmcgY29udGV4dC5cclxuICAgKiBAcGFyYW0gc3ZnIC0gU1ZHIHNvdXJjZSBzdHJpbmcgb3IgVVJMLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gUmVuZGVyaW5nIG9wdGlvbnMuXHJcbiAgICogQHJldHVybnMgQ2FudmcgaW5zdGFuY2UuXHJcbiAgICovXG5cblxuICBzdGF0aWMgZnJvbShjdHgsIHN2Zykge1xuICAgIHZhciBfYXJndW1lbnRzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBfYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgX2FyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIob3B0aW9ucyk7XG4gICAgICB2YXIgc3ZnRG9jdW1lbnQgPSB5aWVsZCBwYXJzZXIucGFyc2Uoc3ZnKTtcbiAgICAgIHJldHVybiBuZXcgQ2FudmcoY3R4LCBzdmdEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgfSkoKTtcbiAgfVxuICAvKipcclxuICAgKiBDcmVhdGUgQ2FudmcgaW5zdGFuY2UgZnJvbSBTVkcgc291cmNlIHN0cmluZy5cclxuICAgKiBAcGFyYW0gY3R4IC0gUmVuZGVyaW5nIGNvbnRleHQuXHJcbiAgICogQHBhcmFtIHN2ZyAtIFNWRyBzb3VyY2Ugc3RyaW5nLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gUmVuZGVyaW5nIG9wdGlvbnMuXHJcbiAgICogQHJldHVybnMgQ2FudmcgaW5zdGFuY2UuXHJcbiAgICovXG5cblxuICBzdGF0aWMgZnJvbVN0cmluZyhjdHgsIHN2Zykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIgcGFyc2VyID0gbmV3IFBhcnNlcihvcHRpb25zKTtcbiAgICB2YXIgc3ZnRG9jdW1lbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN2Zyk7XG4gICAgcmV0dXJuIG5ldyBDYW52ZyhjdHgsIHN2Z0RvY3VtZW50LCBvcHRpb25zKTtcbiAgfVxuICAvKipcclxuICAgKiBDcmVhdGUgbmV3IENhbnZnIGluc3RhbmNlIHdpdGggaW5oZXJpdGVkIG9wdGlvbnMuXHJcbiAgICogQHBhcmFtIGN0eCAtIFJlbmRlcmluZyBjb250ZXh0LlxyXG4gICAqIEBwYXJhbSBzdmcgLSBTVkcgc291cmNlIHN0cmluZyBvciBVUkwuXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBSZW5kZXJpbmcgb3B0aW9ucy5cclxuICAgKiBAcmV0dXJucyBDYW52ZyBpbnN0YW5jZS5cclxuICAgKi9cblxuXG4gIGZvcmsoY3R4LCBzdmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgcmV0dXJuIENhbnZnLmZyb20oY3R4LCBzdmcsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdGhpcy5vcHRpb25zKSwgb3B0aW9ucykpO1xuICB9XG4gIC8qKlxyXG4gICAqIENyZWF0ZSBuZXcgQ2FudmcgaW5zdGFuY2Ugd2l0aCBpbmhlcml0ZWQgb3B0aW9ucy5cclxuICAgKiBAcGFyYW0gY3R4IC0gUmVuZGVyaW5nIGNvbnRleHQuXHJcbiAgICogQHBhcmFtIHN2ZyAtIFNWRyBzb3VyY2Ugc3RyaW5nLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gUmVuZGVyaW5nIG9wdGlvbnMuXHJcbiAgICogQHJldHVybnMgQ2FudmcgaW5zdGFuY2UuXHJcbiAgICovXG5cblxuICBmb3JrU3RyaW5nKGN0eCwgc3ZnKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHJldHVybiBDYW52Zy5mcm9tU3RyaW5nKGN0eCwgc3ZnLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHRoaXMub3B0aW9ucyksIG9wdGlvbnMpKTtcbiAgfVxuICAvKipcclxuICAgKiBEb2N1bWVudCBpcyByZWFkeSBwcm9taXNlLlxyXG4gICAqIEByZXR1cm5zIFJlYWR5IHByb21pc2UuXHJcbiAgICovXG5cblxuICByZWFkeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zY3JlZW4ucmVhZHkoKTtcbiAgfVxuICAvKipcclxuICAgKiBEb2N1bWVudCBpcyByZWFkeSB2YWx1ZS5cclxuICAgKiBAcmV0dXJucyBJcyByZWFkeSBvciBub3QuXHJcbiAgICovXG5cblxuICBpc1JlYWR5KCkge1xuICAgIHJldHVybiB0aGlzLnNjcmVlbi5pc1JlYWR5KCk7XG4gIH1cbiAgLyoqXHJcbiAgICogUmVuZGVyIG9ubHkgZmlyc3QgZnJhbWUsIGlnbm9yaW5nIGFuaW1hdGlvbnMgYW5kIG1vdXNlLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gUmVuZGVyaW5nIG9wdGlvbnMuXHJcbiAgICovXG5cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIF9hcmd1bWVudHMyID0gYXJndW1lbnRzLFxuICAgICAgICBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qICgpIHtcbiAgICAgIHZhciBvcHRpb25zID0gX2FyZ3VtZW50czIubGVuZ3RoID4gMCAmJiBfYXJndW1lbnRzMlswXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3VtZW50czJbMF0gOiB7fTtcblxuICAgICAgX3RoaXMuc3RhcnQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgIGVuYWJsZVJlZHJhdzogdHJ1ZSxcbiAgICAgICAgaWdub3JlQW5pbWF0aW9uOiB0cnVlLFxuICAgICAgICBpZ25vcmVNb3VzZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucykpO1xuXG4gICAgICB5aWVsZCBfdGhpcy5yZWFkeSgpO1xuXG4gICAgICBfdGhpcy5zdG9wKCk7XG4gICAgfSkoKTtcbiAgfVxuICAvKipcclxuICAgKiBTdGFydCByZW5kZXJpbmcuXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBSZW5kZXIgb3B0aW9ucy5cclxuICAgKi9cblxuXG4gIHN0YXJ0KCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIge1xuICAgICAgZG9jdW1lbnRFbGVtZW50LFxuICAgICAgc2NyZWVuLFxuICAgICAgb3B0aW9uczogYmFzZU9wdGlvbnNcbiAgICB9ID0gdGhpcztcbiAgICBzY3JlZW4uc3RhcnQoZG9jdW1lbnRFbGVtZW50LCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgZW5hYmxlUmVkcmF3OiB0cnVlXG4gICAgfSwgYmFzZU9wdGlvbnMpLCBvcHRpb25zKSk7XG4gIH1cbiAgLyoqXHJcbiAgICogU3RvcCByZW5kZXJpbmcuXHJcbiAgICovXG5cblxuICBzdG9wKCkge1xuICAgIHRoaXMuc2NyZWVuLnN0b3AoKTtcbiAgfVxuICAvKipcclxuICAgKiBSZXNpemUgU1ZHIHRvIGZpdCBpbiBnaXZlbiBzaXplLlxyXG4gICAqIEBwYXJhbSB3aWR0aFxyXG4gICAqIEBwYXJhbSBoZWlnaHRcclxuICAgKiBAcGFyYW0gcHJlc2VydmVBc3BlY3RSYXRpb1xyXG4gICAqL1xuXG5cbiAgcmVzaXplKHdpZHRoKSB7XG4gICAgdmFyIGhlaWdodCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogd2lkdGg7XG4gICAgdmFyIHByZXNlcnZlQXNwZWN0UmF0aW8gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuICAgIHRoaXMuZG9jdW1lbnRFbGVtZW50LnJlc2l6ZSh3aWR0aCwgaGVpZ2h0LCBwcmVzZXJ2ZUFzcGVjdFJhdGlvKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZnO1xuZXhwb3J0IHsgQUVsZW1lbnQsIEFuaW1hdGVDb2xvckVsZW1lbnQsIEFuaW1hdGVFbGVtZW50LCBBbmltYXRlVHJhbnNmb3JtRWxlbWVudCwgQm91bmRpbmdCb3gsIENCMSwgQ0IyLCBDQjMsIENCNCwgQ2FudmcsIENpcmNsZUVsZW1lbnQsIENsaXBQYXRoRWxlbWVudCwgRGVmc0VsZW1lbnQsIERlc2NFbGVtZW50LCBEb2N1bWVudCwgRWxlbWVudCwgRWxsaXBzZUVsZW1lbnQsIEZlQ29sb3JNYXRyaXhFbGVtZW50LCBGZUNvbXBvc2l0ZUVsZW1lbnQsIEZlRHJvcFNoYWRvd0VsZW1lbnQsIEZlR2F1c3NpYW5CbHVyRWxlbWVudCwgRmVNb3JwaG9sb2d5RWxlbWVudCwgRmlsdGVyRWxlbWVudCwgRm9udCwgRm9udEVsZW1lbnQsIEZvbnRGYWNlRWxlbWVudCwgR0VsZW1lbnQsIEdseXBoRWxlbWVudCwgR3JhZGllbnRFbGVtZW50LCBJbWFnZUVsZW1lbnQsIExpbmVFbGVtZW50LCBMaW5lYXJHcmFkaWVudEVsZW1lbnQsIE1hcmtlckVsZW1lbnQsIE1hc2tFbGVtZW50LCBNYXRyaXgsIE1pc3NpbmdHbHlwaEVsZW1lbnQsIE1vdXNlLCBQU0VVRE9fWkVSTywgUGFyc2VyLCBQYXRoRWxlbWVudCwgUGF0aFBhcnNlciwgUGF0dGVybkVsZW1lbnQsIFBvaW50LCBQb2x5Z29uRWxlbWVudCwgUG9seWxpbmVFbGVtZW50LCBQcm9wZXJ0eSwgUUIxLCBRQjIsIFFCMywgUmFkaWFsR3JhZGllbnRFbGVtZW50LCBSZWN0RWxlbWVudCwgUmVuZGVyZWRFbGVtZW50LCBSb3RhdGUsIFNWR0VsZW1lbnQsIFNWR0ZvbnRMb2FkZXIsIFNjYWxlLCBTY3JlZW4sIFNrZXcsIFNrZXdYLCBTa2V3WSwgU3RvcEVsZW1lbnQsIFN0eWxlRWxlbWVudCwgU3ltYm9sRWxlbWVudCwgVFJlZkVsZW1lbnQsIFRTcGFuRWxlbWVudCwgVGV4dEVsZW1lbnQsIFRleHRQYXRoRWxlbWVudCwgVGl0bGVFbGVtZW50LCBUcmFuc2Zvcm0sIFRyYW5zbGF0ZSwgVW5rbm93bkVsZW1lbnQsIFVzZUVsZW1lbnQsIFZpZXdQb3J0LCBjb21wcmVzc1NwYWNlcywgZ2V0U2VsZWN0b3JTcGVjaWZpY2l0eSwgbm9ybWFsaXplQXR0cmlidXRlTmFtZSwgbm9ybWFsaXplQ29sb3IsIHBhcnNlRXh0ZXJuYWxVcmwsIGluZGV4IGFzIHByZXNldHMsIHRvTnVtYmVycywgdHJpbUxlZnQsIHRyaW1SaWdodCwgdmVjdG9yTWFnbml0dWRlLCB2ZWN0b3JzQW5nbGUsIHZlY3RvcnNSYXRpbyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndVpYTXVhbk1pTENKemIzVnlZMlZ6SWpwYlhTd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sdGRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenNpZlE9PVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG52YXIgdD1mdW5jdGlvbihyLGUpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LHIpe3QuX19wcm90b19fPXJ9fHxmdW5jdGlvbih0LHIpe2Zvcih2YXIgZSBpbiByKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyLGUpJiYodFtlXT1yW2VdKX0pKHIsZSl9O2Z1bmN0aW9uIHIocixlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZudWxsIT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcoZSkrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBpKCl7dGhpcy5jb25zdHJ1Y3Rvcj1yfXQocixlKSxyLnByb3RvdHlwZT1udWxsPT09ZT9PYmplY3QuY3JlYXRlKGUpOihpLnByb3RvdHlwZT1lLnByb3RvdHlwZSxuZXcgaSl9ZnVuY3Rpb24gZSh0KXt2YXIgcj1cIlwiO0FycmF5LmlzQXJyYXkodCl8fCh0PVt0XSk7Zm9yKHZhciBlPTA7ZTx0Lmxlbmd0aDtlKyspe3ZhciBpPXRbZV07aWYoaS50eXBlPT09Xy5DTE9TRV9QQVRIKXIrPVwielwiO2Vsc2UgaWYoaS50eXBlPT09Xy5IT1JJWl9MSU5FX1RPKXIrPShpLnJlbGF0aXZlP1wiaFwiOlwiSFwiKStpLng7ZWxzZSBpZihpLnR5cGU9PT1fLlZFUlRfTElORV9UTylyKz0oaS5yZWxhdGl2ZT9cInZcIjpcIlZcIikraS55O2Vsc2UgaWYoaS50eXBlPT09Xy5NT1ZFX1RPKXIrPShpLnJlbGF0aXZlP1wibVwiOlwiTVwiKStpLngrXCIgXCIraS55O2Vsc2UgaWYoaS50eXBlPT09Xy5MSU5FX1RPKXIrPShpLnJlbGF0aXZlP1wibFwiOlwiTFwiKStpLngrXCIgXCIraS55O2Vsc2UgaWYoaS50eXBlPT09Xy5DVVJWRV9UTylyKz0oaS5yZWxhdGl2ZT9cImNcIjpcIkNcIikraS54MStcIiBcIitpLnkxK1wiIFwiK2kueDIrXCIgXCIraS55MitcIiBcIitpLngrXCIgXCIraS55O2Vsc2UgaWYoaS50eXBlPT09Xy5TTU9PVEhfQ1VSVkVfVE8pcis9KGkucmVsYXRpdmU/XCJzXCI6XCJTXCIpK2kueDIrXCIgXCIraS55MitcIiBcIitpLngrXCIgXCIraS55O2Vsc2UgaWYoaS50eXBlPT09Xy5RVUFEX1RPKXIrPShpLnJlbGF0aXZlP1wicVwiOlwiUVwiKStpLngxK1wiIFwiK2kueTErXCIgXCIraS54K1wiIFwiK2kueTtlbHNlIGlmKGkudHlwZT09PV8uU01PT1RIX1FVQURfVE8pcis9KGkucmVsYXRpdmU/XCJ0XCI6XCJUXCIpK2kueCtcIiBcIitpLnk7ZWxzZXtpZihpLnR5cGUhPT1fLkFSQyl0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgY29tbWFuZCB0eXBlIFwiJytpLnR5cGUrJ1wiIGF0IGluZGV4ICcrZStcIi5cIik7cis9KGkucmVsYXRpdmU/XCJhXCI6XCJBXCIpK2kuclgrXCIgXCIraS5yWStcIiBcIitpLnhSb3QrXCIgXCIrICtpLmxBcmNGbGFnK1wiIFwiKyAraS5zd2VlcEZsYWcrXCIgXCIraS54K1wiIFwiK2kueX19cmV0dXJuIHJ9ZnVuY3Rpb24gaSh0LHIpe3ZhciBlPXRbMF0saT10WzFdO3JldHVybltlKk1hdGguY29zKHIpLWkqTWF0aC5zaW4ociksZSpNYXRoLnNpbihyKStpKk1hdGguY29zKHIpXX1mdW5jdGlvbiBhKCl7Zm9yKHZhciB0PVtdLHI9MDtyPGFyZ3VtZW50cy5sZW5ndGg7cisrKXRbcl09YXJndW1lbnRzW3JdO2Zvcih2YXIgZT0wO2U8dC5sZW5ndGg7ZSsrKWlmKFwibnVtYmVyXCIhPXR5cGVvZiB0W2VdKXRocm93IG5ldyBFcnJvcihcImFzc2VydE51bWJlcnMgYXJndW1lbnRzW1wiK2UrXCJdIGlzIG5vdCBhIG51bWJlci4gXCIrdHlwZW9mIHRbZV0rXCIgPT0gdHlwZW9mIFwiK3RbZV0pO3JldHVybiEwfXZhciBuPU1hdGguUEk7ZnVuY3Rpb24gbyh0LHIsZSl7dC5sQXJjRmxhZz0wPT09dC5sQXJjRmxhZz8wOjEsdC5zd2VlcEZsYWc9MD09PXQuc3dlZXBGbGFnPzA6MTt2YXIgYT10LnJYLG89dC5yWSxzPXQueCx1PXQueTthPU1hdGguYWJzKHQuclgpLG89TWF0aC5hYnModC5yWSk7dmFyIGg9aShbKHItcykvMiwoZS11KS8yXSwtdC54Um90LzE4MCpuKSxjPWhbMF0seT1oWzFdLHA9TWF0aC5wb3coYywyKS9NYXRoLnBvdyhhLDIpK01hdGgucG93KHksMikvTWF0aC5wb3cobywyKTsxPHAmJihhKj1NYXRoLnNxcnQocCksbyo9TWF0aC5zcXJ0KHApKSx0LnJYPWEsdC5yWT1vO3ZhciBtPU1hdGgucG93KGEsMikqTWF0aC5wb3coeSwyKStNYXRoLnBvdyhvLDIpKk1hdGgucG93KGMsMiksTz0odC5sQXJjRmxhZyE9PXQuc3dlZXBGbGFnPzE6LTEpKk1hdGguc3FydChNYXRoLm1heCgwLChNYXRoLnBvdyhhLDIpKk1hdGgucG93KG8sMiktbSkvbSkpLGw9YSp5L28qTyxUPS1vKmMvYSpPLHY9aShbbCxUXSx0LnhSb3QvMTgwKm4pO3QuY1g9dlswXSsocitzKS8yLHQuY1k9dlsxXSsoZSt1KS8yLHQucGhpMT1NYXRoLmF0YW4yKCh5LVQpL28sKGMtbCkvYSksdC5waGkyPU1hdGguYXRhbjIoKC15LVQpL28sKC1jLWwpL2EpLDA9PT10LnN3ZWVwRmxhZyYmdC5waGkyPnQucGhpMSYmKHQucGhpMi09MipuKSwxPT09dC5zd2VlcEZsYWcmJnQucGhpMjx0LnBoaTEmJih0LnBoaTIrPTIqbiksdC5waGkxKj0xODAvbix0LnBoaTIqPTE4MC9ufWZ1bmN0aW9uIHModCxyLGUpe2EodCxyLGUpO3ZhciBpPXQqdCtyKnItZSplO2lmKDA+aSlyZXR1cm5bXTtpZigwPT09aSlyZXR1cm5bW3QqZS8odCp0K3IqciksciplLyh0KnQrcipyKV1dO3ZhciBuPU1hdGguc3FydChpKTtyZXR1cm5bWyh0KmUrcipuKS8odCp0K3IqciksKHIqZS10Km4pLyh0KnQrcipyKV0sWyh0KmUtcipuKS8odCp0K3IqciksKHIqZSt0Km4pLyh0KnQrcipyKV1dfXZhciB1LGg9TWF0aC5QSS8xODA7ZnVuY3Rpb24gYyh0LHIsZSl7cmV0dXJuKDEtZSkqdCtlKnJ9ZnVuY3Rpb24geSh0LHIsZSxpKXtyZXR1cm4gdCtNYXRoLmNvcyhpLzE4MCpuKSpyK01hdGguc2luKGkvMTgwKm4pKmV9ZnVuY3Rpb24gcCh0LHIsZSxpKXt2YXIgYT0xZS02LG49ci10LG89ZS1yLHM9MypuKzMqKGktZSktNipvLHU9Niooby1uKSxoPTMqbjtyZXR1cm4gTWF0aC5hYnMocyk8YT9bLWgvdV06ZnVuY3Rpb24odCxyLGUpe3ZvaWQgMD09PWUmJihlPTFlLTYpO3ZhciBpPXQqdC80LXI7aWYoaTwtZSlyZXR1cm5bXTtpZihpPD1lKXJldHVyblstdC8yXTt2YXIgYT1NYXRoLnNxcnQoaSk7cmV0dXJuWy10LzItYSwtdC8yK2FdfSh1L3MsaC9zLGEpfWZ1bmN0aW9uIG0odCxyLGUsaSxhKXt2YXIgbj0xLWE7cmV0dXJuIHQqKG4qbipuKStyKigzKm4qbiphKStlKigzKm4qYSphKStpKihhKmEqYSl9IWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIHIoKXtyZXR1cm4gdSgoZnVuY3Rpb24odCxyLGUpe3JldHVybiB0LnJlbGF0aXZlJiYodm9pZCAwIT09dC54MSYmKHQueDErPXIpLHZvaWQgMCE9PXQueTEmJih0LnkxKz1lKSx2b2lkIDAhPT10LngyJiYodC54Mis9ciksdm9pZCAwIT09dC55MiYmKHQueTIrPWUpLHZvaWQgMCE9PXQueCYmKHQueCs9ciksdm9pZCAwIT09dC55JiYodC55Kz1lKSx0LnJlbGF0aXZlPSExKSx0fSkpfWZ1bmN0aW9uIGUoKXt2YXIgdD1OYU4scj1OYU4sZT1OYU4saT1OYU47cmV0dXJuIHUoKGZ1bmN0aW9uKGEsbixvKXtyZXR1cm4gYS50eXBlJl8uU01PT1RIX0NVUlZFX1RPJiYoYS50eXBlPV8uQ1VSVkVfVE8sdD1pc05hTih0KT9uOnQscj1pc05hTihyKT9vOnIsYS54MT1hLnJlbGF0aXZlP24tdDoyKm4tdCxhLnkxPWEucmVsYXRpdmU/by1yOjIqby1yKSxhLnR5cGUmXy5DVVJWRV9UTz8odD1hLnJlbGF0aXZlP24rYS54MjphLngyLHI9YS5yZWxhdGl2ZT9vK2EueTI6YS55Mik6KHQ9TmFOLHI9TmFOKSxhLnR5cGUmXy5TTU9PVEhfUVVBRF9UTyYmKGEudHlwZT1fLlFVQURfVE8sZT1pc05hTihlKT9uOmUsaT1pc05hTihpKT9vOmksYS54MT1hLnJlbGF0aXZlP24tZToyKm4tZSxhLnkxPWEucmVsYXRpdmU/by1pOjIqby1pKSxhLnR5cGUmXy5RVUFEX1RPPyhlPWEucmVsYXRpdmU/bithLngxOmEueDEsaT1hLnJlbGF0aXZlP28rYS55MTphLnkxKTooZT1OYU4saT1OYU4pLGF9KSl9ZnVuY3Rpb24gbigpe3ZhciB0PU5hTixyPU5hTjtyZXR1cm4gdSgoZnVuY3Rpb24oZSxpLGEpe2lmKGUudHlwZSZfLlNNT09USF9RVUFEX1RPJiYoZS50eXBlPV8uUVVBRF9UTyx0PWlzTmFOKHQpP2k6dCxyPWlzTmFOKHIpP2E6cixlLngxPWUucmVsYXRpdmU/aS10OjIqaS10LGUueTE9ZS5yZWxhdGl2ZT9hLXI6MiphLXIpLGUudHlwZSZfLlFVQURfVE8pe3Q9ZS5yZWxhdGl2ZT9pK2UueDE6ZS54MSxyPWUucmVsYXRpdmU/YStlLnkxOmUueTE7dmFyIG49ZS54MSxvPWUueTE7ZS50eXBlPV8uQ1VSVkVfVE8sZS54MT0oKGUucmVsYXRpdmU/MDppKSsyKm4pLzMsZS55MT0oKGUucmVsYXRpdmU/MDphKSsyKm8pLzMsZS54Mj0oZS54KzIqbikvMyxlLnkyPShlLnkrMipvKS8zfWVsc2UgdD1OYU4scj1OYU47cmV0dXJuIGV9KSl9ZnVuY3Rpb24gdSh0KXt2YXIgcj0wLGU9MCxpPU5hTixhPU5hTjtyZXR1cm4gZnVuY3Rpb24obil7aWYoaXNOYU4oaSkmJiEobi50eXBlJl8uTU9WRV9UTykpdGhyb3cgbmV3IEVycm9yKFwicGF0aCBtdXN0IHN0YXJ0IHdpdGggbW92ZXRvXCIpO3ZhciBvPXQobixyLGUsaSxhKTtyZXR1cm4gbi50eXBlJl8uQ0xPU0VfUEFUSCYmKHI9aSxlPWEpLHZvaWQgMCE9PW4ueCYmKHI9bi5yZWxhdGl2ZT9yK24ueDpuLngpLHZvaWQgMCE9PW4ueSYmKGU9bi5yZWxhdGl2ZT9lK24ueTpuLnkpLG4udHlwZSZfLk1PVkVfVE8mJihpPXIsYT1lKSxvfX1mdW5jdGlvbiBPKHQscixlLGksbixvKXtyZXR1cm4gYSh0LHIsZSxpLG4sbyksdSgoZnVuY3Rpb24oYSxzLHUsaCl7dmFyIGM9YS54MSx5PWEueDIscD1hLnJlbGF0aXZlJiYhaXNOYU4oaCksbT12b2lkIDAhPT1hLng/YS54OnA/MDpzLE89dm9pZCAwIT09YS55P2EueTpwPzA6dTtmdW5jdGlvbiBsKHQpe3JldHVybiB0KnR9YS50eXBlJl8uSE9SSVpfTElORV9UTyYmMCE9PXImJihhLnR5cGU9Xy5MSU5FX1RPLGEueT1hLnJlbGF0aXZlPzA6dSksYS50eXBlJl8uVkVSVF9MSU5FX1RPJiYwIT09ZSYmKGEudHlwZT1fLkxJTkVfVE8sYS54PWEucmVsYXRpdmU/MDpzKSx2b2lkIDAhPT1hLngmJihhLng9YS54KnQrTyplKyhwPzA6bikpLHZvaWQgMCE9PWEueSYmKGEueT1tKnIrYS55KmkrKHA/MDpvKSksdm9pZCAwIT09YS54MSYmKGEueDE9YS54MSp0K2EueTEqZSsocD8wOm4pKSx2b2lkIDAhPT1hLnkxJiYoYS55MT1jKnIrYS55MSppKyhwPzA6bykpLHZvaWQgMCE9PWEueDImJihhLngyPWEueDIqdCthLnkyKmUrKHA/MDpuKSksdm9pZCAwIT09YS55MiYmKGEueTI9eSpyK2EueTIqaSsocD8wOm8pKTt2YXIgVD10KmktciplO2lmKHZvaWQgMCE9PWEueFJvdCYmKDEhPT10fHwwIT09cnx8MCE9PWV8fDEhPT1pKSlpZigwPT09VClkZWxldGUgYS5yWCxkZWxldGUgYS5yWSxkZWxldGUgYS54Um90LGRlbGV0ZSBhLmxBcmNGbGFnLGRlbGV0ZSBhLnN3ZWVwRmxhZyxhLnR5cGU9Xy5MSU5FX1RPO2Vsc2V7dmFyIHY9YS54Um90Kk1hdGguUEkvMTgwLGY9TWF0aC5zaW4odiksTj1NYXRoLmNvcyh2KSx4PTEvbChhLnJYKSxkPTEvbChhLnJZKSxFPWwoTikqeCtsKGYpKmQsQT0yKmYqTiooeC1kKSxDPWwoZikqeCtsKE4pKmQsTT1FKmkqaS1BKnIqaStDKnIqcixSPUEqKHQqaStyKmUpLTIqKEUqZSppK0MqdCpyKSxnPUUqZSplLUEqdCplK0MqdCp0LEk9KE1hdGguYXRhbjIoUixNLWcpK01hdGguUEkpJU1hdGguUEkvMixTPU1hdGguc2luKEkpLEw9TWF0aC5jb3MoSSk7YS5yWD1NYXRoLmFicyhUKS9NYXRoLnNxcnQoTSpsKEwpK1IqUypMK2cqbChTKSksYS5yWT1NYXRoLmFicyhUKS9NYXRoLnNxcnQoTSpsKFMpLVIqUypMK2cqbChMKSksYS54Um90PTE4MCpJL01hdGguUEl9cmV0dXJuIHZvaWQgMCE9PWEuc3dlZXBGbGFnJiYwPlQmJihhLnN3ZWVwRmxhZz0rIWEuc3dlZXBGbGFnKSxhfSkpfWZ1bmN0aW9uIGwoKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIHI9e307Zm9yKHZhciBlIGluIHQpcltlXT10W2VdO3JldHVybiByfX10LlJPVU5EPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIHIocil7cmV0dXJuIE1hdGgucm91bmQocip0KS90fXJldHVybiB2b2lkIDA9PT10JiYodD0xZTEzKSxhKHQpLGZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDAhPT10LngxJiYodC54MT1yKHQueDEpKSx2b2lkIDAhPT10LnkxJiYodC55MT1yKHQueTEpKSx2b2lkIDAhPT10LngyJiYodC54Mj1yKHQueDIpKSx2b2lkIDAhPT10LnkyJiYodC55Mj1yKHQueTIpKSx2b2lkIDAhPT10LngmJih0Lng9cih0LngpKSx2b2lkIDAhPT10LnkmJih0Lnk9cih0LnkpKSx2b2lkIDAhPT10LnJYJiYodC5yWD1yKHQuclgpKSx2b2lkIDAhPT10LnJZJiYodC5yWT1yKHQuclkpKSx0fX0sdC5UT19BQlM9cix0LlRPX1JFTD1mdW5jdGlvbigpe3JldHVybiB1KChmdW5jdGlvbih0LHIsZSl7cmV0dXJuIHQucmVsYXRpdmV8fCh2b2lkIDAhPT10LngxJiYodC54MS09ciksdm9pZCAwIT09dC55MSYmKHQueTEtPWUpLHZvaWQgMCE9PXQueDImJih0LngyLT1yKSx2b2lkIDAhPT10LnkyJiYodC55Mi09ZSksdm9pZCAwIT09dC54JiYodC54LT1yKSx2b2lkIDAhPT10LnkmJih0LnktPWUpLHQucmVsYXRpdmU9ITApLHR9KSl9LHQuTk9STUFMSVpFX0hWWj1mdW5jdGlvbih0LHIsZSl7cmV0dXJuIHZvaWQgMD09PXQmJih0PSEwKSx2b2lkIDA9PT1yJiYocj0hMCksdm9pZCAwPT09ZSYmKGU9ITApLHUoKGZ1bmN0aW9uKGksYSxuLG8scyl7aWYoaXNOYU4obykmJiEoaS50eXBlJl8uTU9WRV9UTykpdGhyb3cgbmV3IEVycm9yKFwicGF0aCBtdXN0IHN0YXJ0IHdpdGggbW92ZXRvXCIpO3JldHVybiByJiZpLnR5cGUmXy5IT1JJWl9MSU5FX1RPJiYoaS50eXBlPV8uTElORV9UTyxpLnk9aS5yZWxhdGl2ZT8wOm4pLGUmJmkudHlwZSZfLlZFUlRfTElORV9UTyYmKGkudHlwZT1fLkxJTkVfVE8saS54PWkucmVsYXRpdmU/MDphKSx0JiZpLnR5cGUmXy5DTE9TRV9QQVRIJiYoaS50eXBlPV8uTElORV9UTyxpLng9aS5yZWxhdGl2ZT9vLWE6byxpLnk9aS5yZWxhdGl2ZT9zLW46cyksaS50eXBlJl8uQVJDJiYoMD09PWkuclh8fDA9PT1pLnJZKSYmKGkudHlwZT1fLkxJTkVfVE8sZGVsZXRlIGkuclgsZGVsZXRlIGkuclksZGVsZXRlIGkueFJvdCxkZWxldGUgaS5sQXJjRmxhZyxkZWxldGUgaS5zd2VlcEZsYWcpLGl9KSl9LHQuTk9STUFMSVpFX1NUPWUsdC5RVF9UT19DPW4sdC5JTkZPPXUsdC5TQU5JVElaRT1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD0wKSxhKHQpO3ZhciByPU5hTixlPU5hTixpPU5hTixuPU5hTjtyZXR1cm4gdSgoZnVuY3Rpb24oYSxvLHMsdSxoKXt2YXIgYz1NYXRoLmFicyx5PSExLHA9MCxtPTA7aWYoYS50eXBlJl8uU01PT1RIX0NVUlZFX1RPJiYocD1pc05hTihyKT8wOm8tcixtPWlzTmFOKGUpPzA6cy1lKSxhLnR5cGUmKF8uQ1VSVkVfVE98Xy5TTU9PVEhfQ1VSVkVfVE8pPyhyPWEucmVsYXRpdmU/bythLngyOmEueDIsZT1hLnJlbGF0aXZlP3MrYS55MjphLnkyKToocj1OYU4sZT1OYU4pLGEudHlwZSZfLlNNT09USF9RVUFEX1RPPyhpPWlzTmFOKGkpP286MipvLWksbj1pc05hTihuKT9zOjIqcy1uKTphLnR5cGUmXy5RVUFEX1RPPyhpPWEucmVsYXRpdmU/bythLngxOmEueDEsbj1hLnJlbGF0aXZlP3MrYS55MTphLnkyKTooaT1OYU4sbj1OYU4pLGEudHlwZSZfLkxJTkVfQ09NTUFORFN8fGEudHlwZSZfLkFSQyYmKDA9PT1hLnJYfHwwPT09YS5yWXx8IWEubEFyY0ZsYWcpfHxhLnR5cGUmXy5DVVJWRV9UT3x8YS50eXBlJl8uU01PT1RIX0NVUlZFX1RPfHxhLnR5cGUmXy5RVUFEX1RPfHxhLnR5cGUmXy5TTU9PVEhfUVVBRF9UTyl7dmFyIE89dm9pZCAwPT09YS54PzA6YS5yZWxhdGl2ZT9hLng6YS54LW8sbD12b2lkIDA9PT1hLnk/MDphLnJlbGF0aXZlP2EueTphLnktcztwPWlzTmFOKGkpP3ZvaWQgMD09PWEueDE/cDphLnJlbGF0aXZlP2EueDphLngxLW86aS1vLG09aXNOYU4obik/dm9pZCAwPT09YS55MT9tOmEucmVsYXRpdmU/YS55OmEueTEtczpuLXM7dmFyIFQ9dm9pZCAwPT09YS54Mj8wOmEucmVsYXRpdmU/YS54OmEueDItbyx2PXZvaWQgMD09PWEueTI/MDphLnJlbGF0aXZlP2EueTphLnkyLXM7YyhPKTw9dCYmYyhsKTw9dCYmYyhwKTw9dCYmYyhtKTw9dCYmYyhUKTw9dCYmYyh2KTw9dCYmKHk9ITApfXJldHVybiBhLnR5cGUmXy5DTE9TRV9QQVRIJiZjKG8tdSk8PXQmJmMocy1oKTw9dCYmKHk9ITApLHk/W106YX0pKX0sdC5NQVRSSVg9Tyx0LlJPVEFURT1mdW5jdGlvbih0LHIsZSl7dm9pZCAwPT09ciYmKHI9MCksdm9pZCAwPT09ZSYmKGU9MCksYSh0LHIsZSk7dmFyIGk9TWF0aC5zaW4odCksbj1NYXRoLmNvcyh0KTtyZXR1cm4gTyhuLGksLWksbixyLXIqbitlKmksZS1yKmktZSpuKX0sdC5UUkFOU0xBVEU9ZnVuY3Rpb24odCxyKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9MCksYSh0LHIpLE8oMSwwLDAsMSx0LHIpfSx0LlNDQUxFPWZ1bmN0aW9uKHQscil7cmV0dXJuIHZvaWQgMD09PXImJihyPXQpLGEodCxyKSxPKHQsMCwwLHIsMCwwKX0sdC5TS0VXX1g9ZnVuY3Rpb24odCl7cmV0dXJuIGEodCksTygxLDAsTWF0aC5hdGFuKHQpLDEsMCwwKX0sdC5TS0VXX1k9ZnVuY3Rpb24odCl7cmV0dXJuIGEodCksTygxLE1hdGguYXRhbih0KSwwLDEsMCwwKX0sdC5YX0FYSVNfU1lNTUVUUlk9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLGEodCksTygtMSwwLDAsMSx0LDApfSx0LllfQVhJU19TWU1NRVRSWT1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9MCksYSh0KSxPKDEsMCwwLC0xLDAsdCl9LHQuQV9UT19DPWZ1bmN0aW9uKCl7cmV0dXJuIHUoKGZ1bmN0aW9uKHQscixlKXtyZXR1cm4gXy5BUkM9PT10LnR5cGU/ZnVuY3Rpb24odCxyLGUpe3ZhciBhLG4scyx1O3QuY1h8fG8odCxyLGUpO2Zvcih2YXIgeT1NYXRoLm1pbih0LnBoaTEsdC5waGkyKSxwPU1hdGgubWF4KHQucGhpMSx0LnBoaTIpLXksbT1NYXRoLmNlaWwocC85MCksTz1uZXcgQXJyYXkobSksbD1yLFQ9ZSx2PTA7djxtO3YrKyl7dmFyIGY9Yyh0LnBoaTEsdC5waGkyLHYvbSksTj1jKHQucGhpMSx0LnBoaTIsKHYrMSkvbSkseD1OLWYsZD00LzMqTWF0aC50YW4oeCpoLzQpLEU9W01hdGguY29zKGYqaCktZCpNYXRoLnNpbihmKmgpLE1hdGguc2luKGYqaCkrZCpNYXRoLmNvcyhmKmgpXSxBPUVbMF0sQz1FWzFdLE09W01hdGguY29zKE4qaCksTWF0aC5zaW4oTipoKV0sUj1NWzBdLGc9TVsxXSxJPVtSK2QqTWF0aC5zaW4oTipoKSxnLWQqTWF0aC5jb3MoTipoKV0sUz1JWzBdLEw9SVsxXTtPW3ZdPXtyZWxhdGl2ZTp0LnJlbGF0aXZlLHR5cGU6Xy5DVVJWRV9UT307dmFyIEg9ZnVuY3Rpb24ocixlKXt2YXIgYT1pKFtyKnQuclgsZSp0LnJZXSx0LnhSb3QpLG49YVswXSxvPWFbMV07cmV0dXJuW3QuY1grbix0LmNZK29dfTthPUgoQSxDKSxPW3ZdLngxPWFbMF0sT1t2XS55MT1hWzFdLG49SChTLEwpLE9bdl0ueDI9blswXSxPW3ZdLnkyPW5bMV0scz1IKFIsZyksT1t2XS54PXNbMF0sT1t2XS55PXNbMV0sdC5yZWxhdGl2ZSYmKE9bdl0ueDEtPWwsT1t2XS55MS09VCxPW3ZdLngyLT1sLE9bdl0ueTItPVQsT1t2XS54LT1sLE9bdl0ueS09VCksbD0odT1bT1t2XS54LE9bdl0ueV0pWzBdLFQ9dVsxXX1yZXR1cm4gT30odCx0LnJlbGF0aXZlPzA6cix0LnJlbGF0aXZlPzA6ZSk6dH0pKX0sdC5BTk5PVEFURV9BUkNTPWZ1bmN0aW9uKCl7cmV0dXJuIHUoKGZ1bmN0aW9uKHQscixlKXtyZXR1cm4gdC5yZWxhdGl2ZSYmKHI9MCxlPTApLF8uQVJDPT09dC50eXBlJiZvKHQscixlKSx0fSkpfSx0LkNMT05FPWwsdC5DQUxDVUxBVEVfQk9VTkRTPWZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24odCl7dmFyIHI9e307Zm9yKHZhciBlIGluIHQpcltlXT10W2VdO3JldHVybiByfSxpPXIoKSxhPW4oKSxoPWUoKSxjPXUoKGZ1bmN0aW9uKHIsZSxuKXt2YXIgdT1oKGEoaSh0KHIpKSkpO2Z1bmN0aW9uIE8odCl7dD5jLm1heFgmJihjLm1heFg9dCksdDxjLm1pblgmJihjLm1pblg9dCl9ZnVuY3Rpb24gbCh0KXt0PmMubWF4WSYmKGMubWF4WT10KSx0PGMubWluWSYmKGMubWluWT10KX1pZih1LnR5cGUmXy5EUkFXSU5HX0NPTU1BTkRTJiYoTyhlKSxsKG4pKSx1LnR5cGUmXy5IT1JJWl9MSU5FX1RPJiZPKHUueCksdS50eXBlJl8uVkVSVF9MSU5FX1RPJiZsKHUueSksdS50eXBlJl8uTElORV9UTyYmKE8odS54KSxsKHUueSkpLHUudHlwZSZfLkNVUlZFX1RPKXtPKHUueCksbCh1LnkpO2Zvcih2YXIgVD0wLHY9cChlLHUueDEsdS54Mix1LngpO1Q8di5sZW5ndGg7VCsrKXswPCh3PXZbVF0pJiYxPncmJk8obShlLHUueDEsdS54Mix1LngsdykpfWZvcih2YXIgZj0wLE49cChuLHUueTEsdS55Mix1LnkpO2Y8Ti5sZW5ndGg7ZisrKXswPCh3PU5bZl0pJiYxPncmJmwobShuLHUueTEsdS55Mix1LnksdykpfX1pZih1LnR5cGUmXy5BUkMpe08odS54KSxsKHUueSksbyh1LGUsbik7Zm9yKHZhciB4PXUueFJvdC8xODAqTWF0aC5QSSxkPU1hdGguY29zKHgpKnUuclgsRT1NYXRoLnNpbih4KSp1LnJYLEE9LU1hdGguc2luKHgpKnUuclksQz1NYXRoLmNvcyh4KSp1LnJZLE09dS5waGkxPHUucGhpMj9bdS5waGkxLHUucGhpMl06LTE4MD51LnBoaTI/W3UucGhpMiszNjAsdS5waGkxKzM2MF06W3UucGhpMix1LnBoaTFdLFI9TVswXSxnPU1bMV0sST1mdW5jdGlvbih0KXt2YXIgcj10WzBdLGU9dFsxXSxpPTE4MCpNYXRoLmF0YW4yKGUscikvTWF0aC5QSTtyZXR1cm4gaTxSP2krMzYwOml9LFM9MCxMPXMoQSwtZCwwKS5tYXAoSSk7UzxMLmxlbmd0aDtTKyspeyh3PUxbU10pPlImJnc8ZyYmTyh5KHUuY1gsZCxBLHcpKX1mb3IodmFyIEg9MCxVPXMoQywtRSwwKS5tYXAoSSk7SDxVLmxlbmd0aDtIKyspe3ZhciB3Oyh3PVVbSF0pPlImJnc8ZyYmbCh5KHUuY1ksRSxDLHcpKX19cmV0dXJuIHJ9KSk7cmV0dXJuIGMubWluWD0xLzAsYy5tYXhYPS0xLzAsYy5taW5ZPTEvMCxjLm1heFk9LTEvMCxjfX0odXx8KHU9e30pKTt2YXIgTyxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe31yZXR1cm4gdC5wcm90b3R5cGUucm91bmQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHUuUk9VTkQodCkpfSx0LnByb3RvdHlwZS50b0Ficz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1LlRPX0FCUygpKX0sdC5wcm90b3R5cGUudG9SZWw9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5UT19SRUwoKSl9LHQucHJvdG90eXBlLm5vcm1hbGl6ZUhWWj1mdW5jdGlvbih0LHIsZSl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHUuTk9STUFMSVpFX0hWWih0LHIsZSkpfSx0LnByb3RvdHlwZS5ub3JtYWxpemVTVD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1Lk5PUk1BTElaRV9TVCgpKX0sdC5wcm90b3R5cGUucXRUb0M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5RVF9UT19DKCkpfSx0LnByb3RvdHlwZS5hVG9DPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHUuQV9UT19DKCkpfSx0LnByb3RvdHlwZS5zYW5pdGl6ZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5TQU5JVElaRSh0KSl9LHQucHJvdG90eXBlLnRyYW5zbGF0ZT1mdW5jdGlvbih0LHIpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1LlRSQU5TTEFURSh0LHIpKX0sdC5wcm90b3R5cGUuc2NhbGU9ZnVuY3Rpb24odCxyKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5TQ0FMRSh0LHIpKX0sdC5wcm90b3R5cGUucm90YXRlPWZ1bmN0aW9uKHQscixlKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5ST1RBVEUodCxyLGUpKX0sdC5wcm90b3R5cGUubWF0cml4PWZ1bmN0aW9uKHQscixlLGksYSxuKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5NQVRSSVgodCxyLGUsaSxhLG4pKX0sdC5wcm90b3R5cGUuc2tld1g9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHUuU0tFV19YKHQpKX0sdC5wcm90b3R5cGUuc2tld1k9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHUuU0tFV19ZKHQpKX0sdC5wcm90b3R5cGUueFN5bW1ldHJ5PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1LlhfQVhJU19TWU1NRVRSWSh0KSl9LHQucHJvdG90eXBlLnlTeW1tZXRyeT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5ZX0FYSVNfU1lNTUVUUlkodCkpfSx0LnByb3RvdHlwZS5hbm5vdGF0ZUFyY3M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5BTk5PVEFURV9BUkNTKCkpfSx0fSgpLFQ9ZnVuY3Rpb24odCl7cmV0dXJuXCIgXCI9PT10fHxcIlxcdFwiPT09dHx8XCJcXHJcIj09PXR8fFwiXFxuXCI9PT10fSx2PWZ1bmN0aW9uKHQpe3JldHVyblwiMFwiLmNoYXJDb2RlQXQoMCk8PXQuY2hhckNvZGVBdCgwKSYmdC5jaGFyQ29kZUF0KDApPD1cIjlcIi5jaGFyQ29kZUF0KDApfSxmPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoKXt2YXIgcj10LmNhbGwodGhpcyl8fHRoaXM7cmV0dXJuIHIuY3VyTnVtYmVyPVwiXCIsci5jdXJDb21tYW5kVHlwZT0tMSxyLmN1ckNvbW1hbmRSZWxhdGl2ZT0hMSxyLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITAsci5jdXJOdW1iZXJIYXNFeHA9ITEsci5jdXJOdW1iZXJIYXNFeHBEaWdpdHM9ITEsci5jdXJOdW1iZXJIYXNEZWNpbWFsPSExLHIuY3VyQXJncz1bXSxyfXJldHVybiByKGUsdCksZS5wcm90b3R5cGUuZmluaXNoPWZ1bmN0aW9uKHQpe2lmKHZvaWQgMD09PXQmJih0PVtdKSx0aGlzLnBhcnNlKFwiIFwiLHQpLDAhPT10aGlzLmN1ckFyZ3MubGVuZ3RofHwhdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hKXRocm93IG5ldyBTeW50YXhFcnJvcihcIlVudGVybWluYXRlZCBjb21tYW5kIGF0IHRoZSBwYXRoIGVuZC5cIik7cmV0dXJuIHR9LGUucHJvdG90eXBlLnBhcnNlPWZ1bmN0aW9uKHQscil7dmFyIGU9dGhpczt2b2lkIDA9PT1yJiYocj1bXSk7Zm9yKHZhciBpPWZ1bmN0aW9uKHQpe3IucHVzaCh0KSxlLmN1ckFyZ3MubGVuZ3RoPTAsZS5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSEwfSxhPTA7YTx0Lmxlbmd0aDthKyspe3ZhciBuPXRbYV0sbz0hKHRoaXMuY3VyQ29tbWFuZFR5cGUhPT1fLkFSQ3x8MyE9PXRoaXMuY3VyQXJncy5sZW5ndGgmJjQhPT10aGlzLmN1ckFyZ3MubGVuZ3RofHwxIT09dGhpcy5jdXJOdW1iZXIubGVuZ3RofHxcIjBcIiE9PXRoaXMuY3VyTnVtYmVyJiZcIjFcIiE9PXRoaXMuY3VyTnVtYmVyKSxzPXYobikmJihcIjBcIj09PXRoaXMuY3VyTnVtYmVyJiZcIjBcIj09PW58fG8pO2lmKCF2KG4pfHxzKWlmKFwiZVwiIT09biYmXCJFXCIhPT1uKWlmKFwiLVwiIT09biYmXCIrXCIhPT1ufHwhdGhpcy5jdXJOdW1iZXJIYXNFeHB8fHRoaXMuY3VyTnVtYmVySGFzRXhwRGlnaXRzKWlmKFwiLlwiIT09bnx8dGhpcy5jdXJOdW1iZXJIYXNFeHB8fHRoaXMuY3VyTnVtYmVySGFzRGVjaW1hbHx8byl7aWYodGhpcy5jdXJOdW1iZXImJi0xIT09dGhpcy5jdXJDb21tYW5kVHlwZSl7dmFyIHU9TnVtYmVyKHRoaXMuY3VyTnVtYmVyKTtpZihpc05hTih1KSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJJbnZhbGlkIG51bWJlciBlbmRpbmcgYXQgXCIrYSk7aWYodGhpcy5jdXJDb21tYW5kVHlwZT09PV8uQVJDKWlmKDA9PT10aGlzLmN1ckFyZ3MubGVuZ3RofHwxPT09dGhpcy5jdXJBcmdzLmxlbmd0aCl7aWYoMD51KXRocm93IG5ldyBTeW50YXhFcnJvcignRXhwZWN0ZWQgcG9zaXRpdmUgbnVtYmVyLCBnb3QgXCInK3UrJ1wiIGF0IGluZGV4IFwiJythKydcIicpfWVsc2UgaWYoKDM9PT10aGlzLmN1ckFyZ3MubGVuZ3RofHw0PT09dGhpcy5jdXJBcmdzLmxlbmd0aCkmJlwiMFwiIT09dGhpcy5jdXJOdW1iZXImJlwiMVwiIT09dGhpcy5jdXJOdW1iZXIpdGhyb3cgbmV3IFN5bnRheEVycm9yKCdFeHBlY3RlZCBhIGZsYWcsIGdvdCBcIicrdGhpcy5jdXJOdW1iZXIrJ1wiIGF0IGluZGV4IFwiJythKydcIicpO3RoaXMuY3VyQXJncy5wdXNoKHUpLHRoaXMuY3VyQXJncy5sZW5ndGg9PT1OW3RoaXMuY3VyQ29tbWFuZFR5cGVdJiYoXy5IT1JJWl9MSU5FX1RPPT09dGhpcy5jdXJDb21tYW5kVHlwZT9pKHt0eXBlOl8uSE9SSVpfTElORV9UTyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSx4OnV9KTpfLlZFUlRfTElORV9UTz09PXRoaXMuY3VyQ29tbWFuZFR5cGU/aSh7dHlwZTpfLlZFUlRfTElORV9UTyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSx5OnV9KTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09Xy5NT1ZFX1RPfHx0aGlzLmN1ckNvbW1hbmRUeXBlPT09Xy5MSU5FX1RPfHx0aGlzLmN1ckNvbW1hbmRUeXBlPT09Xy5TTU9PVEhfUVVBRF9UTz8oaSh7dHlwZTp0aGlzLmN1ckNvbW1hbmRUeXBlLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHg6dGhpcy5jdXJBcmdzWzBdLHk6dGhpcy5jdXJBcmdzWzFdfSksXy5NT1ZFX1RPPT09dGhpcy5jdXJDb21tYW5kVHlwZSYmKHRoaXMuY3VyQ29tbWFuZFR5cGU9Xy5MSU5FX1RPKSk6dGhpcy5jdXJDb21tYW5kVHlwZT09PV8uQ1VSVkVfVE8/aSh7dHlwZTpfLkNVUlZFX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHgxOnRoaXMuY3VyQXJnc1swXSx5MTp0aGlzLmN1ckFyZ3NbMV0seDI6dGhpcy5jdXJBcmdzWzJdLHkyOnRoaXMuY3VyQXJnc1szXSx4OnRoaXMuY3VyQXJnc1s0XSx5OnRoaXMuY3VyQXJnc1s1XX0pOnRoaXMuY3VyQ29tbWFuZFR5cGU9PT1fLlNNT09USF9DVVJWRV9UTz9pKHt0eXBlOl8uU01PT1RIX0NVUlZFX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHgyOnRoaXMuY3VyQXJnc1swXSx5Mjp0aGlzLmN1ckFyZ3NbMV0seDp0aGlzLmN1ckFyZ3NbMl0seTp0aGlzLmN1ckFyZ3NbM119KTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09Xy5RVUFEX1RPP2koe3R5cGU6Xy5RVUFEX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHgxOnRoaXMuY3VyQXJnc1swXSx5MTp0aGlzLmN1ckFyZ3NbMV0seDp0aGlzLmN1ckFyZ3NbMl0seTp0aGlzLmN1ckFyZ3NbM119KTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09Xy5BUkMmJmkoe3R5cGU6Xy5BUkMscmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUsclg6dGhpcy5jdXJBcmdzWzBdLHJZOnRoaXMuY3VyQXJnc1sxXSx4Um90OnRoaXMuY3VyQXJnc1syXSxsQXJjRmxhZzp0aGlzLmN1ckFyZ3NbM10sc3dlZXBGbGFnOnRoaXMuY3VyQXJnc1s0XSx4OnRoaXMuY3VyQXJnc1s1XSx5OnRoaXMuY3VyQXJnc1s2XX0pKSx0aGlzLmN1ck51bWJlcj1cIlwiLHRoaXMuY3VyTnVtYmVySGFzRXhwRGlnaXRzPSExLHRoaXMuY3VyTnVtYmVySGFzRXhwPSExLHRoaXMuY3VyTnVtYmVySGFzRGVjaW1hbD0hMSx0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITB9aWYoIVQobikpaWYoXCIsXCI9PT1uJiZ0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWEpdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSExO2Vsc2UgaWYoXCIrXCIhPT1uJiZcIi1cIiE9PW4mJlwiLlwiIT09bilpZihzKXRoaXMuY3VyTnVtYmVyPW4sdGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsPSExO2Vsc2V7aWYoMCE9PXRoaXMuY3VyQXJncy5sZW5ndGgpdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVW50ZXJtaW5hdGVkIGNvbW1hbmQgYXQgaW5kZXggXCIrYStcIi5cIik7aWYoIXRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiJytuKydcIiBhdCBpbmRleCAnK2ErXCIuIENvbW1hbmQgY2Fubm90IGZvbGxvdyBjb21tYVwiKTtpZih0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITEsXCJ6XCIhPT1uJiZcIlpcIiE9PW4paWYoXCJoXCI9PT1ufHxcIkhcIj09PW4pdGhpcy5jdXJDb21tYW5kVHlwZT1fLkhPUklaX0xJTkVfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJoXCI9PT1uO2Vsc2UgaWYoXCJ2XCI9PT1ufHxcIlZcIj09PW4pdGhpcy5jdXJDb21tYW5kVHlwZT1fLlZFUlRfTElORV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cInZcIj09PW47ZWxzZSBpZihcIm1cIj09PW58fFwiTVwiPT09bil0aGlzLmN1ckNvbW1hbmRUeXBlPV8uTU9WRV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cIm1cIj09PW47ZWxzZSBpZihcImxcIj09PW58fFwiTFwiPT09bil0aGlzLmN1ckNvbW1hbmRUeXBlPV8uTElORV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cImxcIj09PW47ZWxzZSBpZihcImNcIj09PW58fFwiQ1wiPT09bil0aGlzLmN1ckNvbW1hbmRUeXBlPV8uQ1VSVkVfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJjXCI9PT1uO2Vsc2UgaWYoXCJzXCI9PT1ufHxcIlNcIj09PW4pdGhpcy5jdXJDb21tYW5kVHlwZT1fLlNNT09USF9DVVJWRV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cInNcIj09PW47ZWxzZSBpZihcInFcIj09PW58fFwiUVwiPT09bil0aGlzLmN1ckNvbW1hbmRUeXBlPV8uUVVBRF9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cInFcIj09PW47ZWxzZSBpZihcInRcIj09PW58fFwiVFwiPT09bil0aGlzLmN1ckNvbW1hbmRUeXBlPV8uU01PT1RIX1FVQURfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJ0XCI9PT1uO2Vsc2V7aWYoXCJhXCIhPT1uJiZcIkFcIiE9PW4pdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlciBcIicrbisnXCIgYXQgaW5kZXggJythK1wiLlwiKTt0aGlzLmN1ckNvbW1hbmRUeXBlPV8uQVJDLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwiYVwiPT09bn1lbHNlIHIucHVzaCh7dHlwZTpfLkNMT1NFX1BBVEh9KSx0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITAsdGhpcy5jdXJDb21tYW5kVHlwZT0tMX1lbHNlIHRoaXMuY3VyTnVtYmVyPW4sdGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsPVwiLlwiPT09bn1lbHNlIHRoaXMuY3VyTnVtYmVyKz1uLHRoaXMuY3VyTnVtYmVySGFzRGVjaW1hbD0hMDtlbHNlIHRoaXMuY3VyTnVtYmVyKz1uO2Vsc2UgdGhpcy5jdXJOdW1iZXIrPW4sdGhpcy5jdXJOdW1iZXJIYXNFeHA9ITA7ZWxzZSB0aGlzLmN1ck51bWJlcis9bix0aGlzLmN1ck51bWJlckhhc0V4cERpZ2l0cz10aGlzLmN1ck51bWJlckhhc0V4cH1yZXR1cm4gcn0sZS5wcm90b3R5cGUudHJhbnNmb3JtPWZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuY3JlYXRlKHRoaXMse3BhcnNlOnt2YWx1ZTpmdW5jdGlvbihyLGUpe3ZvaWQgMD09PWUmJihlPVtdKTtmb3IodmFyIGk9MCxhPU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZS5jYWxsKHRoaXMscik7aTxhLmxlbmd0aDtpKyspe3ZhciBuPWFbaV0sbz10KG4pO0FycmF5LmlzQXJyYXkobyk/ZS5wdXNoLmFwcGx5KGUsbyk6ZS5wdXNoKG8pfXJldHVybiBlfX19KX0sZX0obCksXz1mdW5jdGlvbih0KXtmdW5jdGlvbiBpKHIpe3ZhciBlPXQuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gZS5jb21tYW5kcz1cInN0cmluZ1wiPT10eXBlb2Ygcj9pLnBhcnNlKHIpOnIsZX1yZXR1cm4gcihpLHQpLGkucHJvdG90eXBlLmVuY29kZT1mdW5jdGlvbigpe3JldHVybiBpLmVuY29kZSh0aGlzLmNvbW1hbmRzKX0saS5wcm90b3R5cGUuZ2V0Qm91bmRzPWZ1bmN0aW9uKCl7dmFyIHQ9dS5DQUxDVUxBVEVfQk9VTkRTKCk7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHQpLHR9LGkucHJvdG90eXBlLnRyYW5zZm9ybT1mdW5jdGlvbih0KXtmb3IodmFyIHI9W10sZT0wLGk9dGhpcy5jb21tYW5kcztlPGkubGVuZ3RoO2UrKyl7dmFyIGE9dChpW2VdKTtBcnJheS5pc0FycmF5KGEpP3IucHVzaC5hcHBseShyLGEpOnIucHVzaChhKX1yZXR1cm4gdGhpcy5jb21tYW5kcz1yLHRoaXN9LGkuZW5jb2RlPWZ1bmN0aW9uKHQpe3JldHVybiBlKHQpfSxpLnBhcnNlPWZ1bmN0aW9uKHQpe3ZhciByPW5ldyBmLGU9W107cmV0dXJuIHIucGFyc2UodCxlKSxyLmZpbmlzaChlKSxlfSxpLkNMT1NFX1BBVEg9MSxpLk1PVkVfVE89MixpLkhPUklaX0xJTkVfVE89NCxpLlZFUlRfTElORV9UTz04LGkuTElORV9UTz0xNixpLkNVUlZFX1RPPTMyLGkuU01PT1RIX0NVUlZFX1RPPTY0LGkuUVVBRF9UTz0xMjgsaS5TTU9PVEhfUVVBRF9UTz0yNTYsaS5BUkM9NTEyLGkuTElORV9DT01NQU5EUz1pLkxJTkVfVE98aS5IT1JJWl9MSU5FX1RPfGkuVkVSVF9MSU5FX1RPLGkuRFJBV0lOR19DT01NQU5EUz1pLkhPUklaX0xJTkVfVE98aS5WRVJUX0xJTkVfVE98aS5MSU5FX1RPfGkuQ1VSVkVfVE98aS5TTU9PVEhfQ1VSVkVfVE98aS5RVUFEX1RPfGkuU01PT1RIX1FVQURfVE98aS5BUkMsaX0obCksTj0oKE89e30pW18uTU9WRV9UT109MixPW18uTElORV9UT109MixPW18uSE9SSVpfTElORV9UT109MSxPW18uVkVSVF9MSU5FX1RPXT0xLE9bXy5DTE9TRV9QQVRIXT0wLE9bXy5RVUFEX1RPXT00LE9bXy5TTU9PVEhfUVVBRF9UT109MixPW18uQ1VSVkVfVE9dPTYsT1tfLlNNT09USF9DVVJWRV9UT109NCxPW18uQVJDXT03LE8pO2V4cG9ydHtOIGFzIENPTU1BTkRfQVJHX0NPVU5UUyxfIGFzIFNWR1BhdGhEYXRhLGYgYXMgU1ZHUGF0aERhdGFQYXJzZXIsdSBhcyBTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLGUgYXMgZW5jb2RlU1ZHUGF0aH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TVkdQYXRoRGF0YS5tb2R1bGUuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=