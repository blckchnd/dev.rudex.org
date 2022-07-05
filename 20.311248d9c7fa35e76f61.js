(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[20],{

/***/ 2620:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Expose `IntlPolyfill` as global to add locale data into runtime later on.
__webpack_require__.g.IntlPolyfill = __webpack_require__(2621);

// Require all locale data for `Intl`. This module will be
// ignored when bundling for the browser with Browserify/Webpack.
__webpack_require__(2622);

// hack to export the polyfill as global Intl if needed
if (!__webpack_require__.g.Intl) {
    __webpack_require__.g.Intl = __webpack_require__.g.IntlPolyfill;
    __webpack_require__.g.IntlPolyfill.__applyLocaleSensitivePrototypes();
}

// providing an idiomatic api for the nodejs version of this module
module.exports = __webpack_require__.g.IntlPolyfill;


/***/ }),

/***/ 2621:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var jsx = function () {
  var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
  return function createRawReactElement(type, props, key, children) {
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;

    if (!props && childrenLength !== 0) {
      props = {};
    }

    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);

      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }

      props.children = childArray;
    }

    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null
    };
  };
}();

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
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
          return Promise.resolve(value).then(function (value) {
            return step("next", value);
          }, function (err) {
            return step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineEnumerableProperties = function (obj, descs) {
  for (var key in descs) {
    var desc = descs[key];
    desc.configurable = desc.enumerable = true;
    if ("value" in desc) desc.writable = true;
    Object.defineProperty(obj, key, desc);
  }

  return obj;
};

var defaults = function (obj, defaults) {
  var keys = Object.getOwnPropertyNames(defaults);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = Object.getOwnPropertyDescriptor(defaults, key);

    if (value && value.configurable && obj[key] === undefined) {
      Object.defineProperty(obj, key, value);
    }
  }

  return obj;
};

var defineProperty$1 = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var _instanceof = function (left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
};

var interopRequireDefault = function (obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
};

var interopRequireWildcard = function (obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
};

var newArrowCheck = function (innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
};

var objectDestructuringEmpty = function (obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var selfGlobal = typeof __webpack_require__.g === "undefined" ? self : __webpack_require__.g;

var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var slicedToArrayLoose = function (arr, i) {
  if (Array.isArray(arr)) {
    return arr;
  } else if (Symbol.iterator in Object(arr)) {
    var _arr = [];

    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);

      if (i && _arr.length === i) break;
    }

    return _arr;
  } else {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var taggedTemplateLiteralLoose = function (strings, raw) {
  strings.raw = raw;
  return strings;
};

var temporalRef = function (val, name, undef) {
  if (val === undef) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  } else {
    return val;
  }
};

var temporalUndefined = {};

var toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};



var babelHelpers$1 = Object.freeze({
  jsx: jsx,
  asyncToGenerator: asyncToGenerator,
  classCallCheck: classCallCheck,
  createClass: createClass,
  defineEnumerableProperties: defineEnumerableProperties,
  defaults: defaults,
  defineProperty: defineProperty$1,
  get: get,
  inherits: inherits,
  interopRequireDefault: interopRequireDefault,
  interopRequireWildcard: interopRequireWildcard,
  newArrowCheck: newArrowCheck,
  objectDestructuringEmpty: objectDestructuringEmpty,
  objectWithoutProperties: objectWithoutProperties,
  possibleConstructorReturn: possibleConstructorReturn,
  selfGlobal: selfGlobal,
  set: set,
  slicedToArray: slicedToArray,
  slicedToArrayLoose: slicedToArrayLoose,
  taggedTemplateLiteral: taggedTemplateLiteral,
  taggedTemplateLiteralLoose: taggedTemplateLiteralLoose,
  temporalRef: temporalRef,
  temporalUndefined: temporalUndefined,
  toArray: toArray,
  toConsumableArray: toConsumableArray,
  typeof: _typeof,
  extends: _extends,
  instanceof: _instanceof
});

var realDefineProp = function () {
    var sentinel = function sentinel() {};
    try {
        Object.defineProperty(sentinel, 'a', {
            get: function get() {
                return 1;
            }
        });
        Object.defineProperty(sentinel, 'prototype', { writable: false });
        return sentinel.a === 1 && sentinel.prototype instanceof Object;
    } catch (e) {
        return false;
    }
}();

// Need a workaround for getters in ES3
var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

// We use this a lot (and need it for proto-less objects)
var hop = Object.prototype.hasOwnProperty;

// Naive defineProperty for compatibility
var defineProperty = realDefineProp ? Object.defineProperty : function (obj, name, desc) {
    if ('get' in desc && obj.__defineGetter__) obj.__defineGetter__(name, desc.get);else if (!hop.call(obj, name) || 'value' in desc) obj[name] = desc.value;
};

// Array.prototype.indexOf, as good as we need it to be
var arrIndexOf = Array.prototype.indexOf || function (search) {
    /*jshint validthis:true */
    var t = this;
    if (!t.length) return -1;

    for (var i = arguments[1] || 0, max = t.length; i < max; i++) {
        if (t[i] === search) return i;
    }

    return -1;
};

// Create an object with the specified prototype (2nd arg required for Record)
var objCreate = Object.create || function (proto, props) {
    var obj = void 0;

    function F() {}
    F.prototype = proto;
    obj = new F();

    for (var k in props) {
        if (hop.call(props, k)) defineProperty(obj, k, props[k]);
    }

    return obj;
};

// Snapshot some (hopefully still) native built-ins
var arrSlice = Array.prototype.slice;
var arrConcat = Array.prototype.concat;
var arrPush = Array.prototype.push;
var arrJoin = Array.prototype.join;
var arrShift = Array.prototype.shift;

// Naive Function.prototype.bind for compatibility
var fnBind = Function.prototype.bind || function (thisObj) {
    var fn = this,
        args = arrSlice.call(arguments, 1);

    // All our (presently) bound functions have either 1 or 0 arguments. By returning
    // different function signatures, we can pass some tests in ES3 environments
    if (fn.length === 1) {
        return function () {
            return fn.apply(thisObj, arrConcat.call(args, arrSlice.call(arguments)));
        };
    }
    return function () {
        return fn.apply(thisObj, arrConcat.call(args, arrSlice.call(arguments)));
    };
};

// Object housing internal properties for constructors
var internals = objCreate(null);

// Keep internal properties internal
var secret = Math.random();

// Helper functions
// ================

/**
 * A function to deal with the inaccuracy of calculating log10 in pre-ES6
 * JavaScript environments. Math.log(num) / Math.LN10 was responsible for
 * causing issue #62.
 */
function log10Floor(n) {
    // ES6 provides the more accurate Math.log10
    if (typeof Math.log10 === 'function') return Math.floor(Math.log10(n));

    var x = Math.round(Math.log(n) * Math.LOG10E);
    return x - (Number('1e' + x) > n);
}

/**
 * A map that doesn't contain Object in its prototype chain
 */
function Record(obj) {
    // Copy only own properties over unless this object is already a Record instance
    for (var k in obj) {
        if (obj instanceof Record || hop.call(obj, k)) defineProperty(this, k, { value: obj[k], enumerable: true, writable: true, configurable: true });
    }
}
Record.prototype = objCreate(null);

/**
 * An ordered list
 */
function List() {
    defineProperty(this, 'length', { writable: true, value: 0 });

    if (arguments.length) arrPush.apply(this, arrSlice.call(arguments));
}
List.prototype = objCreate(null);

/**
 * Constructs a regular expression to restore tainted RegExp properties
 */
function createRegExpRestore() {
    if (internals.disableRegExpRestore) {
        return function () {/* no-op */};
    }

    var regExpCache = {
        lastMatch: RegExp.lastMatch || '',
        leftContext: RegExp.leftContext,
        multiline: RegExp.multiline,
        input: RegExp.input
    },
        has = false;

    // Create a snapshot of all the 'captured' properties
    for (var i = 1; i <= 9; i++) {
        has = (regExpCache['$' + i] = RegExp['$' + i]) || has;
    }return function () {
        // Now we've snapshotted some properties, escape the lastMatch string
        var esc = /[.?*+^$[\]\\(){}|-]/g,
            lm = regExpCache.lastMatch.replace(esc, '\\$&'),
            reg = new List();

        // If any of the captured strings were non-empty, iterate over them all
        if (has) {
            for (var _i = 1; _i <= 9; _i++) {
                var m = regExpCache['$' + _i];

                // If it's empty, add an empty capturing group
                if (!m) lm = '()' + lm;

                // Else find the string in lm and escape & wrap it to capture it
                else {
                        m = m.replace(esc, '\\$&');
                        lm = lm.replace(m, '(' + m + ')');
                    }

                // Push it to the reg and chop lm to make sure further groups come after
                arrPush.call(reg, lm.slice(0, lm.indexOf('(') + 1));
                lm = lm.slice(lm.indexOf('(') + 1);
            }
        }

        var exprStr = arrJoin.call(reg, '') + lm;

        // Shorten the regex by replacing each part of the expression with a match
        // for a string of that exact length.  This is safe for the type of
        // expressions generated above, because the expression matches the whole
        // match string, so we know each group and each segment between capturing
        // groups can be matched by its length alone.
        exprStr = exprStr.replace(/(\\\(|\\\)|[^()])+/g, function (match) {
            return '[\\s\\S]{' + match.replace('\\', '').length + '}';
        });

        // Create the regular expression that will reconstruct the RegExp properties
        var expr = new RegExp(exprStr, regExpCache.multiline ? 'gm' : 'g');

        // Set the lastIndex of the generated expression to ensure that the match
        // is found in the correct index.
        expr.lastIndex = regExpCache.leftContext.length;

        expr.exec(regExpCache.input);
    };
}

/**
 * Mimics ES5's abstract ToObject() function
 */
function toObject(arg) {
    if (arg === null) throw new TypeError('Cannot convert null or undefined to object');

    if ((typeof arg === 'undefined' ? 'undefined' : babelHelpers$1['typeof'](arg)) === 'object') return arg;
    return Object(arg);
}

function toNumber(arg) {
    if (typeof arg === 'number') return arg;
    return Number(arg);
}

function toInteger(arg) {
    var number = toNumber(arg);
    if (isNaN(number)) return 0;
    if (number === +0 || number === -0 || number === +Infinity || number === -Infinity) return number;
    if (number < 0) return Math.floor(Math.abs(number)) * -1;
    return Math.floor(Math.abs(number));
}

function toLength(arg) {
    var len = toInteger(arg);
    if (len <= 0) return 0;
    if (len === Infinity) return Math.pow(2, 53) - 1;
    return Math.min(len, Math.pow(2, 53) - 1);
}

/**
 * Returns "internal" properties for an object
 */
function getInternalProperties(obj) {
    if (hop.call(obj, '__getInternalProperties')) return obj.__getInternalProperties(secret);

    return objCreate(null);
}

/**
* Defines regular expressions for various operations related to the BCP 47 syntax,
* as defined at http://tools.ietf.org/html/bcp47#section-2.1
*/

// extlang       = 3ALPHA              ; selected ISO 639 codes
//                 *2("-" 3ALPHA)      ; permanently reserved
var extlang = '[a-z]{3}(?:-[a-z]{3}){0,2}';

// language      = 2*3ALPHA            ; shortest ISO 639 code
//                 ["-" extlang]       ; sometimes followed by
//                                     ; extended language subtags
//               / 4ALPHA              ; or reserved for future use
//               / 5*8ALPHA            ; or registered language subtag
var language = '(?:[a-z]{2,3}(?:-' + extlang + ')?|[a-z]{4}|[a-z]{5,8})';

// script        = 4ALPHA              ; ISO 15924 code
var script = '[a-z]{4}';

// region        = 2ALPHA              ; ISO 3166-1 code
//               / 3DIGIT              ; UN M.49 code
var region = '(?:[a-z]{2}|\\d{3})';

// variant       = 5*8alphanum         ; registered variants
//               / (DIGIT 3alphanum)
var variant = '(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})';

//                                     ; Single alphanumerics
//                                     ; "x" reserved for private use
// singleton     = DIGIT               ; 0 - 9
//               / %x41-57             ; A - W
//               / %x59-5A             ; Y - Z
//               / %x61-77             ; a - w
//               / %x79-7A             ; y - z
var singleton = '[0-9a-wy-z]';

// extension     = singleton 1*("-" (2*8alphanum))
var extension = singleton + '(?:-[a-z0-9]{2,8})+';

// privateuse    = "x" 1*("-" (1*8alphanum))
var privateuse = 'x(?:-[a-z0-9]{1,8})+';

// irregular     = "en-GB-oed"         ; irregular tags do not match
//               / "i-ami"             ; the 'langtag' production and
//               / "i-bnn"             ; would not otherwise be
//               / "i-default"         ; considered 'well-formed'
//               / "i-enochian"        ; These tags are all valid,
//               / "i-hak"             ; but most are deprecated
//               / "i-klingon"         ; in favor of more modern
//               / "i-lux"             ; subtags or subtag
//               / "i-mingo"           ; combination
//               / "i-navajo"
//               / "i-pwn"
//               / "i-tao"
//               / "i-tay"
//               / "i-tsu"
//               / "sgn-BE-FR"
//               / "sgn-BE-NL"
//               / "sgn-CH-DE"
var irregular = '(?:en-GB-oed' + '|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)' + '|sgn-(?:BE-FR|BE-NL|CH-DE))';

// regular       = "art-lojban"        ; these tags match the 'langtag'
//               / "cel-gaulish"       ; production, but their subtags
//               / "no-bok"            ; are not extended language
//               / "no-nyn"            ; or variant subtags: their meaning
//               / "zh-guoyu"          ; is defined by their registration
//               / "zh-hakka"          ; and all of these are deprecated
//               / "zh-min"            ; in favor of a more modern
//               / "zh-min-nan"        ; subtag or sequence of subtags
//               / "zh-xiang"
var regular = '(?:art-lojban|cel-gaulish|no-bok|no-nyn' + '|zh-(?:guoyu|hakka|min|min-nan|xiang))';

// grandfathered = irregular           ; non-redundant tags registered
//               / regular             ; during the RFC 3066 era
var grandfathered = '(?:' + irregular + '|' + regular + ')';

// langtag       = language
//                 ["-" script]
//                 ["-" region]
//                 *("-" variant)
//                 *("-" extension)
//                 ["-" privateuse]
var langtag = language + '(?:-' + script + ')?(?:-' + region + ')?(?:-' + variant + ')*(?:-' + extension + ')*(?:-' + privateuse + ')?';

// Language-Tag  = langtag             ; normal language tags
//               / privateuse          ; private use tag
//               / grandfathered       ; grandfathered tags
var expBCP47Syntax = RegExp('^(?:' + langtag + '|' + privateuse + '|' + grandfathered + ')$', 'i');

// Match duplicate variants in a language tag
var expVariantDupes = RegExp('^(?!x).*?-(' + variant + ')-(?:\\w{4,8}-(?!x-))*\\1\\b', 'i');

// Match duplicate singletons in a language tag (except in private use)
var expSingletonDupes = RegExp('^(?!x).*?-(' + singleton + ')-(?:\\w+-(?!x-))*\\1\\b', 'i');

// Match all extension sequences
var expExtSequences = RegExp('-' + extension, 'ig');

// Default locale is the first-added locale data for us
var defaultLocale = void 0;
function setDefaultLocale(locale) {
    defaultLocale = locale;
}

// IANA Subtag Registry redundant tag and subtag maps
var redundantTags = {
    tags: {
        "art-lojban": "jbo",
        "i-ami": "ami",
        "i-bnn": "bnn",
        "i-hak": "hak",
        "i-klingon": "tlh",
        "i-lux": "lb",
        "i-navajo": "nv",
        "i-pwn": "pwn",
        "i-tao": "tao",
        "i-tay": "tay",
        "i-tsu": "tsu",
        "no-bok": "nb",
        "no-nyn": "nn",
        "sgn-BE-FR": "sfb",
        "sgn-BE-NL": "vgt",
        "sgn-CH-DE": "sgg",
        "zh-guoyu": "cmn",
        "zh-hakka": "hak",
        "zh-min-nan": "nan",
        "zh-xiang": "hsn",
        "sgn-BR": "bzs",
        "sgn-CO": "csn",
        "sgn-DE": "gsg",
        "sgn-DK": "dsl",
        "sgn-ES": "ssp",
        "sgn-FR": "fsl",
        "sgn-GB": "bfi",
        "sgn-GR": "gss",
        "sgn-IE": "isg",
        "sgn-IT": "ise",
        "sgn-JP": "jsl",
        "sgn-MX": "mfs",
        "sgn-NI": "ncs",
        "sgn-NL": "dse",
        "sgn-NO": "nsl",
        "sgn-PT": "psr",
        "sgn-SE": "swl",
        "sgn-US": "ase",
        "sgn-ZA": "sfs",
        "zh-cmn": "cmn",
        "zh-cmn-Hans": "cmn-Hans",
        "zh-cmn-Hant": "cmn-Hant",
        "zh-gan": "gan",
        "zh-wuu": "wuu",
        "zh-yue": "yue"
    },
    subtags: {
        BU: "MM",
        DD: "DE",
        FX: "FR",
        TP: "TL",
        YD: "YE",
        ZR: "CD",
        heploc: "alalc97",
        'in': "id",
        iw: "he",
        ji: "yi",
        jw: "jv",
        mo: "ro",
        ayx: "nun",
        bjd: "drl",
        ccq: "rki",
        cjr: "mom",
        cka: "cmr",
        cmk: "xch",
        drh: "khk",
        drw: "prs",
        gav: "dev",
        hrr: "jal",
        ibi: "opa",
        kgh: "kml",
        lcq: "ppr",
        mst: "mry",
        myt: "mry",
        sca: "hle",
        tie: "ras",
        tkk: "twm",
        tlw: "weo",
        tnf: "prs",
        ybd: "rki",
        yma: "lrr"
    },
    extLang: {
        aao: ["aao", "ar"],
        abh: ["abh", "ar"],
        abv: ["abv", "ar"],
        acm: ["acm", "ar"],
        acq: ["acq", "ar"],
        acw: ["acw", "ar"],
        acx: ["acx", "ar"],
        acy: ["acy", "ar"],
        adf: ["adf", "ar"],
        ads: ["ads", "sgn"],
        aeb: ["aeb", "ar"],
        aec: ["aec", "ar"],
        aed: ["aed", "sgn"],
        aen: ["aen", "sgn"],
        afb: ["afb", "ar"],
        afg: ["afg", "sgn"],
        ajp: ["ajp", "ar"],
        apc: ["apc", "ar"],
        apd: ["apd", "ar"],
        arb: ["arb", "ar"],
        arq: ["arq", "ar"],
        ars: ["ars", "ar"],
        ary: ["ary", "ar"],
        arz: ["arz", "ar"],
        ase: ["ase", "sgn"],
        asf: ["asf", "sgn"],
        asp: ["asp", "sgn"],
        asq: ["asq", "sgn"],
        asw: ["asw", "sgn"],
        auz: ["auz", "ar"],
        avl: ["avl", "ar"],
        ayh: ["ayh", "ar"],
        ayl: ["ayl", "ar"],
        ayn: ["ayn", "ar"],
        ayp: ["ayp", "ar"],
        bbz: ["bbz", "ar"],
        bfi: ["bfi", "sgn"],
        bfk: ["bfk", "sgn"],
        bjn: ["bjn", "ms"],
        bog: ["bog", "sgn"],
        bqn: ["bqn", "sgn"],
        bqy: ["bqy", "sgn"],
        btj: ["btj", "ms"],
        bve: ["bve", "ms"],
        bvl: ["bvl", "sgn"],
        bvu: ["bvu", "ms"],
        bzs: ["bzs", "sgn"],
        cdo: ["cdo", "zh"],
        cds: ["cds", "sgn"],
        cjy: ["cjy", "zh"],
        cmn: ["cmn", "zh"],
        coa: ["coa", "ms"],
        cpx: ["cpx", "zh"],
        csc: ["csc", "sgn"],
        csd: ["csd", "sgn"],
        cse: ["cse", "sgn"],
        csf: ["csf", "sgn"],
        csg: ["csg", "sgn"],
        csl: ["csl", "sgn"],
        csn: ["csn", "sgn"],
        csq: ["csq", "sgn"],
        csr: ["csr", "sgn"],
        czh: ["czh", "zh"],
        czo: ["czo", "zh"],
        doq: ["doq", "sgn"],
        dse: ["dse", "sgn"],
        dsl: ["dsl", "sgn"],
        dup: ["dup", "ms"],
        ecs: ["ecs", "sgn"],
        esl: ["esl", "sgn"],
        esn: ["esn", "sgn"],
        eso: ["eso", "sgn"],
        eth: ["eth", "sgn"],
        fcs: ["fcs", "sgn"],
        fse: ["fse", "sgn"],
        fsl: ["fsl", "sgn"],
        fss: ["fss", "sgn"],
        gan: ["gan", "zh"],
        gds: ["gds", "sgn"],
        gom: ["gom", "kok"],
        gse: ["gse", "sgn"],
        gsg: ["gsg", "sgn"],
        gsm: ["gsm", "sgn"],
        gss: ["gss", "sgn"],
        gus: ["gus", "sgn"],
        hab: ["hab", "sgn"],
        haf: ["haf", "sgn"],
        hak: ["hak", "zh"],
        hds: ["hds", "sgn"],
        hji: ["hji", "ms"],
        hks: ["hks", "sgn"],
        hos: ["hos", "sgn"],
        hps: ["hps", "sgn"],
        hsh: ["hsh", "sgn"],
        hsl: ["hsl", "sgn"],
        hsn: ["hsn", "zh"],
        icl: ["icl", "sgn"],
        ils: ["ils", "sgn"],
        inl: ["inl", "sgn"],
        ins: ["ins", "sgn"],
        ise: ["ise", "sgn"],
        isg: ["isg", "sgn"],
        isr: ["isr", "sgn"],
        jak: ["jak", "ms"],
        jax: ["jax", "ms"],
        jcs: ["jcs", "sgn"],
        jhs: ["jhs", "sgn"],
        jls: ["jls", "sgn"],
        jos: ["jos", "sgn"],
        jsl: ["jsl", "sgn"],
        jus: ["jus", "sgn"],
        kgi: ["kgi", "sgn"],
        knn: ["knn", "kok"],
        kvb: ["kvb", "ms"],
        kvk: ["kvk", "sgn"],
        kvr: ["kvr", "ms"],
        kxd: ["kxd", "ms"],
        lbs: ["lbs", "sgn"],
        lce: ["lce", "ms"],
        lcf: ["lcf", "ms"],
        liw: ["liw", "ms"],
        lls: ["lls", "sgn"],
        lsg: ["lsg", "sgn"],
        lsl: ["lsl", "sgn"],
        lso: ["lso", "sgn"],
        lsp: ["lsp", "sgn"],
        lst: ["lst", "sgn"],
        lsy: ["lsy", "sgn"],
        ltg: ["ltg", "lv"],
        lvs: ["lvs", "lv"],
        lzh: ["lzh", "zh"],
        max: ["max", "ms"],
        mdl: ["mdl", "sgn"],
        meo: ["meo", "ms"],
        mfa: ["mfa", "ms"],
        mfb: ["mfb", "ms"],
        mfs: ["mfs", "sgn"],
        min: ["min", "ms"],
        mnp: ["mnp", "zh"],
        mqg: ["mqg", "ms"],
        mre: ["mre", "sgn"],
        msd: ["msd", "sgn"],
        msi: ["msi", "ms"],
        msr: ["msr", "sgn"],
        mui: ["mui", "ms"],
        mzc: ["mzc", "sgn"],
        mzg: ["mzg", "sgn"],
        mzy: ["mzy", "sgn"],
        nan: ["nan", "zh"],
        nbs: ["nbs", "sgn"],
        ncs: ["ncs", "sgn"],
        nsi: ["nsi", "sgn"],
        nsl: ["nsl", "sgn"],
        nsp: ["nsp", "sgn"],
        nsr: ["nsr", "sgn"],
        nzs: ["nzs", "sgn"],
        okl: ["okl", "sgn"],
        orn: ["orn", "ms"],
        ors: ["ors", "ms"],
        pel: ["pel", "ms"],
        pga: ["pga", "ar"],
        pks: ["pks", "sgn"],
        prl: ["prl", "sgn"],
        prz: ["prz", "sgn"],
        psc: ["psc", "sgn"],
        psd: ["psd", "sgn"],
        pse: ["pse", "ms"],
        psg: ["psg", "sgn"],
        psl: ["psl", "sgn"],
        pso: ["pso", "sgn"],
        psp: ["psp", "sgn"],
        psr: ["psr", "sgn"],
        pys: ["pys", "sgn"],
        rms: ["rms", "sgn"],
        rsi: ["rsi", "sgn"],
        rsl: ["rsl", "sgn"],
        sdl: ["sdl", "sgn"],
        sfb: ["sfb", "sgn"],
        sfs: ["sfs", "sgn"],
        sgg: ["sgg", "sgn"],
        sgx: ["sgx", "sgn"],
        shu: ["shu", "ar"],
        slf: ["slf", "sgn"],
        sls: ["sls", "sgn"],
        sqk: ["sqk", "sgn"],
        sqs: ["sqs", "sgn"],
        ssh: ["ssh", "ar"],
        ssp: ["ssp", "sgn"],
        ssr: ["ssr", "sgn"],
        svk: ["svk", "sgn"],
        swc: ["swc", "sw"],
        swh: ["swh", "sw"],
        swl: ["swl", "sgn"],
        syy: ["syy", "sgn"],
        tmw: ["tmw", "ms"],
        tse: ["tse", "sgn"],
        tsm: ["tsm", "sgn"],
        tsq: ["tsq", "sgn"],
        tss: ["tss", "sgn"],
        tsy: ["tsy", "sgn"],
        tza: ["tza", "sgn"],
        ugn: ["ugn", "sgn"],
        ugy: ["ugy", "sgn"],
        ukl: ["ukl", "sgn"],
        uks: ["uks", "sgn"],
        urk: ["urk", "ms"],
        uzn: ["uzn", "uz"],
        uzs: ["uzs", "uz"],
        vgt: ["vgt", "sgn"],
        vkk: ["vkk", "ms"],
        vkt: ["vkt", "ms"],
        vsi: ["vsi", "sgn"],
        vsl: ["vsl", "sgn"],
        vsv: ["vsv", "sgn"],
        wuu: ["wuu", "zh"],
        xki: ["xki", "sgn"],
        xml: ["xml", "sgn"],
        xmm: ["xmm", "ms"],
        xms: ["xms", "sgn"],
        yds: ["yds", "sgn"],
        ysl: ["ysl", "sgn"],
        yue: ["yue", "zh"],
        zib: ["zib", "sgn"],
        zlm: ["zlm", "ms"],
        zmi: ["zmi", "ms"],
        zsl: ["zsl", "sgn"],
        zsm: ["zsm", "ms"]
    }
};

/**
 * Convert only a-z to uppercase as per section 6.1 of the spec
 */
function toLatinUpperCase(str) {
    var i = str.length;

    while (i--) {
        var ch = str.charAt(i);

        if (ch >= "a" && ch <= "z") str = str.slice(0, i) + ch.toUpperCase() + str.slice(i + 1);
    }

    return str;
}

/**
 * The IsStructurallyValidLanguageTag abstract operation verifies that the locale
 * argument (which must be a String value)
 *
 * - represents a well-formed BCP 47 language tag as specified in RFC 5646 section
 *   2.1, or successor,
 * - does not include duplicate variant subtags, and
 * - does not include duplicate singleton subtags.
 *
 * The abstract operation returns true if locale can be generated from the ABNF
 * grammar in section 2.1 of the RFC, starting with Language-Tag, and does not
 * contain duplicate variant or singleton subtags (other than as a private use
 * subtag). It returns false otherwise. Terminal value characters in the grammar are
 * interpreted as the Unicode equivalents of the ASCII octet values given.
 */
function /* 6.2.2 */IsStructurallyValidLanguageTag(locale) {
    // represents a well-formed BCP 47 language tag as specified in RFC 5646
    if (!expBCP47Syntax.test(locale)) return false;

    // does not include duplicate variant subtags, and
    if (expVariantDupes.test(locale)) return false;

    // does not include duplicate singleton subtags.
    if (expSingletonDupes.test(locale)) return false;

    return true;
}

/**
 * The CanonicalizeLanguageTag abstract operation returns the canonical and case-
 * regularized form of the locale argument (which must be a String value that is
 * a structurally valid BCP 47 language tag as verified by the
 * IsStructurallyValidLanguageTag abstract operation). It takes the steps
 * specified in RFC 5646 section 4.5, or successor, to bring the language tag
 * into canonical form, and to regularize the case of the subtags, but does not
 * take the steps to bring a language tag into “extlang form” and to reorder
 * variant subtags.

 * The specifications for extensions to BCP 47 language tags, such as RFC 6067,
 * may include canonicalization rules for the extension subtag sequences they
 * define that go beyond the canonicalization rules of RFC 5646 section 4.5.
 * Implementations are allowed, but not required, to apply these additional rules.
 */
function /* 6.2.3 */CanonicalizeLanguageTag(locale) {
    var match = void 0,
        parts = void 0;

    // A language tag is in 'canonical form' when the tag is well-formed
    // according to the rules in Sections 2.1 and 2.2

    // Section 2.1 says all subtags use lowercase...
    locale = locale.toLowerCase();

    // ...with 2 exceptions: 'two-letter and four-letter subtags that neither
    // appear at the start of the tag nor occur after singletons.  Such two-letter
    // subtags are all uppercase (as in the tags "en-CA-x-ca" or "sgn-BE-FR") and
    // four-letter subtags are titlecase (as in the tag "az-Latn-x-latn").
    parts = locale.split('-');
    for (var i = 1, max = parts.length; i < max; i++) {
        // Two-letter subtags are all uppercase
        if (parts[i].length === 2) parts[i] = parts[i].toUpperCase();

        // Four-letter subtags are titlecase
        else if (parts[i].length === 4) parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);

            // Is it a singleton?
            else if (parts[i].length === 1 && parts[i] !== 'x') break;
    }
    locale = arrJoin.call(parts, '-');

    // The steps laid out in RFC 5646 section 4.5 are as follows:

    // 1.  Extension sequences are ordered into case-insensitive ASCII order
    //     by singleton subtag.
    if ((match = locale.match(expExtSequences)) && match.length > 1) {
        // The built-in sort() sorts by ASCII order, so use that
        match.sort();

        // Replace all extensions with the joined, sorted array
        locale = locale.replace(RegExp('(?:' + expExtSequences.source + ')+', 'i'), arrJoin.call(match, ''));
    }

    // 2.  Redundant or grandfathered tags are replaced by their 'Preferred-
    //     Value', if there is one.
    if (hop.call(redundantTags.tags, locale)) locale = redundantTags.tags[locale];

    // 3.  Subtags are replaced by their 'Preferred-Value', if there is one.
    //     For extlangs, the original primary language subtag is also
    //     replaced if there is a primary language subtag in the 'Preferred-
    //     Value'.
    parts = locale.split('-');

    for (var _i = 1, _max = parts.length; _i < _max; _i++) {
        if (hop.call(redundantTags.subtags, parts[_i])) parts[_i] = redundantTags.subtags[parts[_i]];else if (hop.call(redundantTags.extLang, parts[_i])) {
            parts[_i] = redundantTags.extLang[parts[_i]][0];

            // For extlang tags, the prefix needs to be removed if it is redundant
            if (_i === 1 && redundantTags.extLang[parts[1]][1] === parts[0]) {
                parts = arrSlice.call(parts, _i++);
                _max -= 1;
            }
        }
    }

    return arrJoin.call(parts, '-');
}

/**
 * The DefaultLocale abstract operation returns a String value representing the
 * structurally valid (6.2.2) and canonicalized (6.2.3) BCP 47 language tag for the
 * host environment’s current locale.
 */
function /* 6.2.4 */DefaultLocale() {
    return defaultLocale;
}

// Sect 6.3 Currency Codes
// =======================

var expCurrencyCode = /^[A-Z]{3}$/;

/**
 * The IsWellFormedCurrencyCode abstract operation verifies that the currency argument
 * (after conversion to a String value) represents a well-formed 3-letter ISO currency
 * code. The following steps are taken:
 */
function /* 6.3.1 */IsWellFormedCurrencyCode(currency) {
    // 1. Let `c` be ToString(currency)
    var c = String(currency);

    // 2. Let `normalized` be the result of mapping c to upper case as described
    //    in 6.1.
    var normalized = toLatinUpperCase(c);

    // 3. If the string length of normalized is not 3, return false.
    // 4. If normalized contains any character that is not in the range "A" to "Z"
    //    (U+0041 to U+005A), return false.
    if (expCurrencyCode.test(normalized) === false) return false;

    // 5. Return true
    return true;
}

var expUnicodeExSeq = /-u(?:-[0-9a-z]{2,8})+/gi; // See `extension` below

function /* 9.2.1 */CanonicalizeLocaleList(locales) {
    // The abstract operation CanonicalizeLocaleList takes the following steps:

    // 1. If locales is undefined, then a. Return a new empty List
    if (locales === undefined) return new List();

    // 2. Let seen be a new empty List.
    var seen = new List();

    // 3. If locales is a String value, then
    //    a. Let locales be a new array created as if by the expression new
    //    Array(locales) where Array is the standard built-in constructor with
    //    that name and locales is the value of locales.
    locales = typeof locales === 'string' ? [locales] : locales;

    // 4. Let O be ToObject(locales).
    var O = toObject(locales);

    // 5. Let lenValue be the result of calling the [[Get]] internal method of
    //    O with the argument "length".
    // 6. Let len be ToUint32(lenValue).
    var len = toLength(O.length);

    // 7. Let k be 0.
    var k = 0;

    // 8. Repeat, while k < len
    while (k < len) {
        // a. Let Pk be ToString(k).
        var Pk = String(k);

        // b. Let kPresent be the result of calling the [[HasProperty]] internal
        //    method of O with argument Pk.
        var kPresent = Pk in O;

        // c. If kPresent is true, then
        if (kPresent) {
            // i. Let kValue be the result of calling the [[Get]] internal
            //     method of O with argument Pk.
            var kValue = O[Pk];

            // ii. If the type of kValue is not String or Object, then throw a
            //     TypeError exception.
            if (kValue === null || typeof kValue !== 'string' && (typeof kValue === "undefined" ? "undefined" : babelHelpers$1["typeof"](kValue)) !== 'object') throw new TypeError('String or Object type expected');

            // iii. Let tag be ToString(kValue).
            var tag = String(kValue);

            // iv. If the result of calling the abstract operation
            //     IsStructurallyValidLanguageTag (defined in 6.2.2), passing tag as
            //     the argument, is false, then throw a RangeError exception.
            if (!IsStructurallyValidLanguageTag(tag)) throw new RangeError("'" + tag + "' is not a structurally valid language tag");

            // v. Let tag be the result of calling the abstract operation
            //    CanonicalizeLanguageTag (defined in 6.2.3), passing tag as the
            //    argument.
            tag = CanonicalizeLanguageTag(tag);

            // vi. If tag is not an element of seen, then append tag as the last
            //     element of seen.
            if (arrIndexOf.call(seen, tag) === -1) arrPush.call(seen, tag);
        }

        // d. Increase k by 1.
        k++;
    }

    // 9. Return seen.
    return seen;
}

/**
 * The BestAvailableLocale abstract operation compares the provided argument
 * locale, which must be a String value with a structurally valid and
 * canonicalized BCP 47 language tag, against the locales in availableLocales and
 * returns either the longest non-empty prefix of locale that is an element of
 * availableLocales, or undefined if there is no such element. It uses the
 * fallback mechanism of RFC 4647, section 3.4. The following steps are taken:
 */
function /* 9.2.2 */BestAvailableLocale(availableLocales, locale) {
    // 1. Let candidate be locale
    var candidate = locale;

    // 2. Repeat
    while (candidate) {
        // a. If availableLocales contains an element equal to candidate, then return
        // candidate.
        if (arrIndexOf.call(availableLocales, candidate) > -1) return candidate;

        // b. Let pos be the character index of the last occurrence of "-"
        // (U+002D) within candidate. If that character does not occur, return
        // undefined.
        var pos = candidate.lastIndexOf('-');

        if (pos < 0) return;

        // c. If pos ≥ 2 and the character "-" occurs at index pos-2 of candidate,
        //    then decrease pos by 2.
        if (pos >= 2 && candidate.charAt(pos - 2) === '-') pos -= 2;

        // d. Let candidate be the substring of candidate from position 0, inclusive,
        //    to position pos, exclusive.
        candidate = candidate.substring(0, pos);
    }
}

/**
 * The LookupMatcher abstract operation compares requestedLocales, which must be
 * a List as returned by CanonicalizeLocaleList, against the locales in
 * availableLocales and determines the best available language to meet the
 * request. The following steps are taken:
 */
function /* 9.2.3 */LookupMatcher(availableLocales, requestedLocales) {
    // 1. Let i be 0.
    var i = 0;

    // 2. Let len be the number of elements in requestedLocales.
    var len = requestedLocales.length;

    // 3. Let availableLocale be undefined.
    var availableLocale = void 0;

    var locale = void 0,
        noExtensionsLocale = void 0;

    // 4. Repeat while i < len and availableLocale is undefined:
    while (i < len && !availableLocale) {
        // a. Let locale be the element of requestedLocales at 0-origined list
        //    position i.
        locale = requestedLocales[i];

        // b. Let noExtensionsLocale be the String value that is locale with all
        //    Unicode locale extension sequences removed.
        noExtensionsLocale = String(locale).replace(expUnicodeExSeq, '');

        // c. Let availableLocale be the result of calling the
        //    BestAvailableLocale abstract operation (defined in 9.2.2) with
        //    arguments availableLocales and noExtensionsLocale.
        availableLocale = BestAvailableLocale(availableLocales, noExtensionsLocale);

        // d. Increase i by 1.
        i++;
    }

    // 5. Let result be a new Record.
    var result = new Record();

    // 6. If availableLocale is not undefined, then
    if (availableLocale !== undefined) {
        // a. Set result.[[locale]] to availableLocale.
        result['[[locale]]'] = availableLocale;

        // b. If locale and noExtensionsLocale are not the same String value, then
        if (String(locale) !== String(noExtensionsLocale)) {
            // i. Let extension be the String value consisting of the first
            //    substring of locale that is a Unicode locale extension sequence.
            var extension = locale.match(expUnicodeExSeq)[0];

            // ii. Let extensionIndex be the character position of the initial
            //     "-" of the first Unicode locale extension sequence within locale.
            var extensionIndex = locale.indexOf('-u-');

            // iii. Set result.[[extension]] to extension.
            result['[[extension]]'] = extension;

            // iv. Set result.[[extensionIndex]] to extensionIndex.
            result['[[extensionIndex]]'] = extensionIndex;
        }
    }
    // 7. Else
    else
        // a. Set result.[[locale]] to the value returned by the DefaultLocale abstract
        //    operation (defined in 6.2.4).
        result['[[locale]]'] = DefaultLocale();

    // 8. Return result
    return result;
}

/**
 * The BestFitMatcher abstract operation compares requestedLocales, which must be
 * a List as returned by CanonicalizeLocaleList, against the locales in
 * availableLocales and determines the best available language to meet the
 * request. The algorithm is implementation dependent, but should produce results
 * that a typical user of the requested locales would perceive as at least as
 * good as those produced by the LookupMatcher abstract operation. Options
 * specified through Unicode locale extension sequences must be ignored by the
 * algorithm. Information about such subsequences is returned separately.
 * The abstract operation returns a record with a [[locale]] field, whose value
 * is the language tag of the selected locale, which must be an element of
 * availableLocales. If the language tag of the request locale that led to the
 * selected locale contained a Unicode locale extension sequence, then the
 * returned record also contains an [[extension]] field whose value is the first
 * Unicode locale extension sequence, and an [[extensionIndex]] field whose value
 * is the index of the first Unicode locale extension sequence within the request
 * locale language tag.
 */
function /* 9.2.4 */BestFitMatcher(availableLocales, requestedLocales) {
    return LookupMatcher(availableLocales, requestedLocales);
}

/**
 * The ResolveLocale abstract operation compares a BCP 47 language priority list
 * requestedLocales against the locales in availableLocales and determines the
 * best available language to meet the request. availableLocales and
 * requestedLocales must be provided as List values, options as a Record.
 */
function /* 9.2.5 */ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData) {
    if (availableLocales.length === 0) {
        throw new ReferenceError('No locale data has been provided for this object yet.');
    }

    // The following steps are taken:
    // 1. Let matcher be the value of options.[[localeMatcher]].
    var matcher = options['[[localeMatcher]]'];

    var r = void 0;

    // 2. If matcher is "lookup", then
    if (matcher === 'lookup')
        // a. Let r be the result of calling the LookupMatcher abstract operation
        //    (defined in 9.2.3) with arguments availableLocales and
        //    requestedLocales.
        r = LookupMatcher(availableLocales, requestedLocales);

        // 3. Else
    else
        // a. Let r be the result of calling the BestFitMatcher abstract
        //    operation (defined in 9.2.4) with arguments availableLocales and
        //    requestedLocales.
        r = BestFitMatcher(availableLocales, requestedLocales);

    // 4. Let foundLocale be the value of r.[[locale]].
    var foundLocale = r['[[locale]]'];

    var extensionSubtags = void 0,
        extensionSubtagsLength = void 0;

    // 5. If r has an [[extension]] field, then
    if (hop.call(r, '[[extension]]')) {
        // a. Let extension be the value of r.[[extension]].
        var extension = r['[[extension]]'];
        // b. Let split be the standard built-in function object defined in ES5,
        //    15.5.4.14.
        var split = String.prototype.split;
        // c. Let extensionSubtags be the result of calling the [[Call]] internal
        //    method of split with extension as the this value and an argument
        //    list containing the single item "-".
        extensionSubtags = split.call(extension, '-');
        // d. Let extensionSubtagsLength be the result of calling the [[Get]]
        //    internal method of extensionSubtags with argument "length".
        extensionSubtagsLength = extensionSubtags.length;
    }

    // 6. Let result be a new Record.
    var result = new Record();

    // 7. Set result.[[dataLocale]] to foundLocale.
    result['[[dataLocale]]'] = foundLocale;

    // 8. Let supportedExtension be "-u".
    var supportedExtension = '-u';
    // 9. Let i be 0.
    var i = 0;
    // 10. Let len be the result of calling the [[Get]] internal method of
    //     relevantExtensionKeys with argument "length".
    var len = relevantExtensionKeys.length;

    // 11 Repeat while i < len:
    while (i < len) {
        // a. Let key be the result of calling the [[Get]] internal method of
        //    relevantExtensionKeys with argument ToString(i).
        var key = relevantExtensionKeys[i];
        // b. Let foundLocaleData be the result of calling the [[Get]] internal
        //    method of localeData with the argument foundLocale.
        var foundLocaleData = localeData[foundLocale];
        // c. Let keyLocaleData be the result of calling the [[Get]] internal
        //    method of foundLocaleData with the argument key.
        var keyLocaleData = foundLocaleData[key];
        // d. Let value be the result of calling the [[Get]] internal method of
        //    keyLocaleData with argument "0".
        var value = keyLocaleData['0'];
        // e. Let supportedExtensionAddition be "".
        var supportedExtensionAddition = '';
        // f. Let indexOf be the standard built-in function object defined in
        //    ES5, 15.4.4.14.
        var indexOf = arrIndexOf;

        // g. If extensionSubtags is not undefined, then
        if (extensionSubtags !== undefined) {
            // i. Let keyPos be the result of calling the [[Call]] internal
            //    method of indexOf with extensionSubtags as the this value and
            // an argument list containing the single item key.
            var keyPos = indexOf.call(extensionSubtags, key);

            // ii. If keyPos ≠ -1, then
            if (keyPos !== -1) {
                // 1. If keyPos + 1 < extensionSubtagsLength and the length of the
                //    result of calling the [[Get]] internal method of
                //    extensionSubtags with argument ToString(keyPos +1) is greater
                //    than 2, then
                if (keyPos + 1 < extensionSubtagsLength && extensionSubtags[keyPos + 1].length > 2) {
                    // a. Let requestedValue be the result of calling the [[Get]]
                    //    internal method of extensionSubtags with argument
                    //    ToString(keyPos + 1).
                    var requestedValue = extensionSubtags[keyPos + 1];
                    // b. Let valuePos be the result of calling the [[Call]]
                    //    internal method of indexOf with keyLocaleData as the
                    //    this value and an argument list containing the single
                    //    item requestedValue.
                    var valuePos = indexOf.call(keyLocaleData, requestedValue);

                    // c. If valuePos ≠ -1, then
                    if (valuePos !== -1) {
                        // i. Let value be requestedValue.
                        value = requestedValue,
                        // ii. Let supportedExtensionAddition be the
                        //     concatenation of "-", key, "-", and value.
                        supportedExtensionAddition = '-' + key + '-' + value;
                    }
                }
                // 2. Else
                else {
                        // a. Let valuePos be the result of calling the [[Call]]
                        // internal method of indexOf with keyLocaleData as the this
                        // value and an argument list containing the single item
                        // "true".
                        var _valuePos = indexOf(keyLocaleData, 'true');

                        // b. If valuePos ≠ -1, then
                        if (_valuePos !== -1)
                            // i. Let value be "true".
                            value = 'true';
                    }
            }
        }
        // h. If options has a field [[<key>]], then
        if (hop.call(options, '[[' + key + ']]')) {
            // i. Let optionsValue be the value of options.[[<key>]].
            var optionsValue = options['[[' + key + ']]'];

            // ii. If the result of calling the [[Call]] internal method of indexOf
            //     with keyLocaleData as the this value and an argument list
            //     containing the single item optionsValue is not -1, then
            if (indexOf.call(keyLocaleData, optionsValue) !== -1) {
                // 1. If optionsValue is not equal to value, then
                if (optionsValue !== value) {
                    // a. Let value be optionsValue.
                    value = optionsValue;
                    // b. Let supportedExtensionAddition be "".
                    supportedExtensionAddition = '';
                }
            }
        }
        // i. Set result.[[<key>]] to value.
        result['[[' + key + ']]'] = value;

        // j. Append supportedExtensionAddition to supportedExtension.
        supportedExtension += supportedExtensionAddition;

        // k. Increase i by 1.
        i++;
    }
    // 12. If the length of supportedExtension is greater than 2, then
    if (supportedExtension.length > 2) {
        // a.
        var privateIndex = foundLocale.indexOf("-x-");
        // b.
        if (privateIndex === -1) {
            // i.
            foundLocale = foundLocale + supportedExtension;
        }
        // c.
        else {
                // i.
                var preExtension = foundLocale.substring(0, privateIndex);
                // ii.
                var postExtension = foundLocale.substring(privateIndex);
                // iii.
                foundLocale = preExtension + supportedExtension + postExtension;
            }
        // d. asserting - skipping
        // e.
        foundLocale = CanonicalizeLanguageTag(foundLocale);
    }
    // 13. Set result.[[locale]] to foundLocale.
    result['[[locale]]'] = foundLocale;

    // 14. Return result.
    return result;
}

/**
 * The LookupSupportedLocales abstract operation returns the subset of the
 * provided BCP 47 language priority list requestedLocales for which
 * availableLocales has a matching locale when using the BCP 47 Lookup algorithm.
 * Locales appear in the same order in the returned list as in requestedLocales.
 * The following steps are taken:
 */
function /* 9.2.6 */LookupSupportedLocales(availableLocales, requestedLocales) {
    // 1. Let len be the number of elements in requestedLocales.
    var len = requestedLocales.length;
    // 2. Let subset be a new empty List.
    var subset = new List();
    // 3. Let k be 0.
    var k = 0;

    // 4. Repeat while k < len
    while (k < len) {
        // a. Let locale be the element of requestedLocales at 0-origined list
        //    position k.
        var locale = requestedLocales[k];
        // b. Let noExtensionsLocale be the String value that is locale with all
        //    Unicode locale extension sequences removed.
        var noExtensionsLocale = String(locale).replace(expUnicodeExSeq, '');
        // c. Let availableLocale be the result of calling the
        //    BestAvailableLocale abstract operation (defined in 9.2.2) with
        //    arguments availableLocales and noExtensionsLocale.
        var availableLocale = BestAvailableLocale(availableLocales, noExtensionsLocale);

        // d. If availableLocale is not undefined, then append locale to the end of
        //    subset.
        if (availableLocale !== undefined) arrPush.call(subset, locale);

        // e. Increment k by 1.
        k++;
    }

    // 5. Let subsetArray be a new Array object whose elements are the same
    //    values in the same order as the elements of subset.
    var subsetArray = arrSlice.call(subset);

    // 6. Return subsetArray.
    return subsetArray;
}

/**
 * The BestFitSupportedLocales abstract operation returns the subset of the
 * provided BCP 47 language priority list requestedLocales for which
 * availableLocales has a matching locale when using the Best Fit Matcher
 * algorithm. Locales appear in the same order in the returned list as in
 * requestedLocales. The steps taken are implementation dependent.
 */
function /*9.2.7 */BestFitSupportedLocales(availableLocales, requestedLocales) {
    // ###TODO: implement this function as described by the specification###
    return LookupSupportedLocales(availableLocales, requestedLocales);
}

/**
 * The SupportedLocales abstract operation returns the subset of the provided BCP
 * 47 language priority list requestedLocales for which availableLocales has a
 * matching locale. Two algorithms are available to match the locales: the Lookup
 * algorithm described in RFC 4647 section 3.4, and an implementation dependent
 * best-fit algorithm. Locales appear in the same order in the returned list as
 * in requestedLocales. The following steps are taken:
 */
function /*9.2.8 */SupportedLocales(availableLocales, requestedLocales, options) {
    var matcher = void 0,
        subset = void 0;

    // 1. If options is not undefined, then
    if (options !== undefined) {
        // a. Let options be ToObject(options).
        options = new Record(toObject(options));
        // b. Let matcher be the result of calling the [[Get]] internal method of
        //    options with argument "localeMatcher".
        matcher = options.localeMatcher;

        // c. If matcher is not undefined, then
        if (matcher !== undefined) {
            // i. Let matcher be ToString(matcher).
            matcher = String(matcher);

            // ii. If matcher is not "lookup" or "best fit", then throw a RangeError
            //     exception.
            if (matcher !== 'lookup' && matcher !== 'best fit') throw new RangeError('matcher should be "lookup" or "best fit"');
        }
    }
    // 2. If matcher is undefined or "best fit", then
    if (matcher === undefined || matcher === 'best fit')
        // a. Let subset be the result of calling the BestFitSupportedLocales
        //    abstract operation (defined in 9.2.7) with arguments
        //    availableLocales and requestedLocales.
        subset = BestFitSupportedLocales(availableLocales, requestedLocales);
        // 3. Else
    else
        // a. Let subset be the result of calling the LookupSupportedLocales
        //    abstract operation (defined in 9.2.6) with arguments
        //    availableLocales and requestedLocales.
        subset = LookupSupportedLocales(availableLocales, requestedLocales);

    // 4. For each named own property name P of subset,
    for (var P in subset) {
        if (!hop.call(subset, P)) continue;

        // a. Let desc be the result of calling the [[GetOwnProperty]] internal
        //    method of subset with P.
        // b. Set desc.[[Writable]] to false.
        // c. Set desc.[[Configurable]] to false.
        // d. Call the [[DefineOwnProperty]] internal method of subset with P, desc,
        //    and true as arguments.
        defineProperty(subset, P, {
            writable: false, configurable: false, value: subset[P]
        });
    }
    // "Freeze" the array so no new elements can be added
    defineProperty(subset, 'length', { writable: false });

    // 5. Return subset
    return subset;
}

/**
 * The GetOption abstract operation extracts the value of the property named
 * property from the provided options object, converts it to the required type,
 * checks whether it is one of a List of allowed values, and fills in a fallback
 * value if necessary.
 */
function /*9.2.9 */GetOption(options, property, type, values, fallback) {
    // 1. Let value be the result of calling the [[Get]] internal method of
    //    options with argument property.
    var value = options[property];

    // 2. If value is not undefined, then
    if (value !== undefined) {
        // a. Assert: type is "boolean" or "string".
        // b. If type is "boolean", then let value be ToBoolean(value).
        // c. If type is "string", then let value be ToString(value).
        value = type === 'boolean' ? Boolean(value) : type === 'string' ? String(value) : value;

        // d. If values is not undefined, then
        if (values !== undefined) {
            // i. If values does not contain an element equal to value, then throw a
            //    RangeError exception.
            if (arrIndexOf.call(values, value) === -1) throw new RangeError("'" + value + "' is not an allowed value for `" + property + '`');
        }

        // e. Return value.
        return value;
    }
    // Else return fallback.
    return fallback;
}

/**
 * The GetNumberOption abstract operation extracts a property value from the
 * provided options object, converts it to a Number value, checks whether it is
 * in the allowed range, and fills in a fallback value if necessary.
 */
function /* 9.2.10 */GetNumberOption(options, property, minimum, maximum, fallback) {
    // 1. Let value be the result of calling the [[Get]] internal method of
    //    options with argument property.
    var value = options[property];

    // 2. If value is not undefined, then
    if (value !== undefined) {
        // a. Let value be ToNumber(value).
        value = Number(value);

        // b. If value is NaN or less than minimum or greater than maximum, throw a
        //    RangeError exception.
        if (isNaN(value) || value < minimum || value > maximum) throw new RangeError('Value is not a number or outside accepted range');

        // c. Return floor(value).
        return Math.floor(value);
    }
    // 3. Else return fallback.
    return fallback;
}

// 8 The Intl Object
var Intl = {};

// 8.2 Function Properties of the Intl Object

// 8.2.1
// @spec[tc39/ecma402/master/spec/intl.html]
// @clause[sec-intl.getcanonicallocales]
function getCanonicalLocales(locales) {
    // 1. Let ll be ? CanonicalizeLocaleList(locales).
    var ll = CanonicalizeLocaleList(locales);
    // 2. Return CreateArrayFromList(ll).
    {
        var result = [];

        var len = ll.length;
        var k = 0;

        while (k < len) {
            result[k] = ll[k];
            k++;
        }
        return result;
    }
}

Object.defineProperty(Intl, 'getCanonicalLocales', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: getCanonicalLocales
});

// Currency minor units output from get-4217 grunt task, formatted
var currencyMinorUnits = {
    BHD: 3, BYR: 0, XOF: 0, BIF: 0, XAF: 0, CLF: 4, CLP: 0, KMF: 0, DJF: 0,
    XPF: 0, GNF: 0, ISK: 0, IQD: 3, JPY: 0, JOD: 3, KRW: 0, KWD: 3, LYD: 3,
    OMR: 3, PYG: 0, RWF: 0, TND: 3, UGX: 0, UYI: 0, VUV: 0, VND: 0
};

// Define the NumberFormat constructor internally so it cannot be tainted
function NumberFormatConstructor() {
    var locales = arguments[0];
    var options = arguments[1];

    if (!this || this === Intl) {
        return new Intl.NumberFormat(locales, options);
    }

    return InitializeNumberFormat(toObject(this), locales, options);
}

defineProperty(Intl, 'NumberFormat', {
    configurable: true,
    writable: true,
    value: NumberFormatConstructor
});

// Must explicitly set prototypes as unwritable
defineProperty(Intl.NumberFormat, 'prototype', {
    writable: false
});

/**
 * The abstract operation InitializeNumberFormat accepts the arguments
 * numberFormat (which must be an object), locales, and options. It initializes
 * numberFormat as a NumberFormat object.
 */
function /*11.1.1.1 */InitializeNumberFormat(numberFormat, locales, options) {
    // This will be a internal properties object if we're not already initialized
    var internal = getInternalProperties(numberFormat);

    // Create an object whose props can be used to restore the values of RegExp props
    var regexpRestore = createRegExpRestore();

    // 1. If numberFormat has an [[initializedIntlObject]] internal property with
    // value true, throw a TypeError exception.
    if (internal['[[initializedIntlObject]]'] === true) throw new TypeError('`this` object has already been initialized as an Intl object');

    // Need this to access the `internal` object
    defineProperty(numberFormat, '__getInternalProperties', {
        value: function value() {
            // NOTE: Non-standard, for internal use only
            if (arguments[0] === secret) return internal;
        }
    });

    // 2. Set the [[initializedIntlObject]] internal property of numberFormat to true.
    internal['[[initializedIntlObject]]'] = true;

    // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
    //    abstract operation (defined in 9.2.1) with argument locales.
    var requestedLocales = CanonicalizeLocaleList(locales);

    // 4. If options is undefined, then
    if (options === undefined)
        // a. Let options be the result of creating a new object as if by the
        // expression new Object() where Object is the standard built-in constructor
        // with that name.
        options = {};

        // 5. Else
    else
        // a. Let options be ToObject(options).
        options = toObject(options);

    // 6. Let opt be a new Record.
    var opt = new Record(),


    // 7. Let matcher be the result of calling the GetOption abstract operation
    //    (defined in 9.2.9) with the arguments options, "localeMatcher", "string",
    //    a List containing the two String values "lookup" and "best fit", and
    //    "best fit".
    matcher = GetOption(options, 'localeMatcher', 'string', new List('lookup', 'best fit'), 'best fit');

    // 8. Set opt.[[localeMatcher]] to matcher.
    opt['[[localeMatcher]]'] = matcher;

    // 9. Let NumberFormat be the standard built-in object that is the initial value
    //    of Intl.NumberFormat.
    // 10. Let localeData be the value of the [[localeData]] internal property of
    //     NumberFormat.
    var localeData = internals.NumberFormat['[[localeData]]'];

    // 11. Let r be the result of calling the ResolveLocale abstract operation
    //     (defined in 9.2.5) with the [[availableLocales]] internal property of
    //     NumberFormat, requestedLocales, opt, the [[relevantExtensionKeys]]
    //     internal property of NumberFormat, and localeData.
    var r = ResolveLocale(internals.NumberFormat['[[availableLocales]]'], requestedLocales, opt, internals.NumberFormat['[[relevantExtensionKeys]]'], localeData);

    // 12. Set the [[locale]] internal property of numberFormat to the value of
    //     r.[[locale]].
    internal['[[locale]]'] = r['[[locale]]'];

    // 13. Set the [[numberingSystem]] internal property of numberFormat to the value
    //     of r.[[nu]].
    internal['[[numberingSystem]]'] = r['[[nu]]'];

    // The specification doesn't tell us to do this, but it's helpful later on
    internal['[[dataLocale]]'] = r['[[dataLocale]]'];

    // 14. Let dataLocale be the value of r.[[dataLocale]].
    var dataLocale = r['[[dataLocale]]'];

    // 15. Let s be the result of calling the GetOption abstract operation with the
    //     arguments options, "style", "string", a List containing the three String
    //     values "decimal", "percent", and "currency", and "decimal".
    var s = GetOption(options, 'style', 'string', new List('decimal', 'percent', 'currency'), 'decimal');

    // 16. Set the [[style]] internal property of numberFormat to s.
    internal['[[style]]'] = s;

    // 17. Let c be the result of calling the GetOption abstract operation with the
    //     arguments options, "currency", "string", undefined, and undefined.
    var c = GetOption(options, 'currency', 'string');

    // 18. If c is not undefined and the result of calling the
    //     IsWellFormedCurrencyCode abstract operation (defined in 6.3.1) with
    //     argument c is false, then throw a RangeError exception.
    if (c !== undefined && !IsWellFormedCurrencyCode(c)) throw new RangeError("'" + c + "' is not a valid currency code");

    // 19. If s is "currency" and c is undefined, throw a TypeError exception.
    if (s === 'currency' && c === undefined) throw new TypeError('Currency code is required when style is currency');

    var cDigits = void 0;

    // 20. If s is "currency", then
    if (s === 'currency') {
        // a. Let c be the result of converting c to upper case as specified in 6.1.
        c = c.toUpperCase();

        // b. Set the [[currency]] internal property of numberFormat to c.
        internal['[[currency]]'] = c;

        // c. Let cDigits be the result of calling the CurrencyDigits abstract
        //    operation (defined below) with argument c.
        cDigits = CurrencyDigits(c);
    }

    // 21. Let cd be the result of calling the GetOption abstract operation with the
    //     arguments options, "currencyDisplay", "string", a List containing the
    //     three String values "code", "symbol", and "name", and "symbol".
    var cd = GetOption(options, 'currencyDisplay', 'string', new List('code', 'symbol', 'name'), 'symbol');

    // 22. If s is "currency", then set the [[currencyDisplay]] internal property of
    //     numberFormat to cd.
    if (s === 'currency') internal['[[currencyDisplay]]'] = cd;

    // 23. Let mnid be the result of calling the GetNumberOption abstract operation
    //     (defined in 9.2.10) with arguments options, "minimumIntegerDigits", 1, 21,
    //     and 1.
    var mnid = GetNumberOption(options, 'minimumIntegerDigits', 1, 21, 1);

    // 24. Set the [[minimumIntegerDigits]] internal property of numberFormat to mnid.
    internal['[[minimumIntegerDigits]]'] = mnid;

    // 25. If s is "currency", then let mnfdDefault be cDigits; else let mnfdDefault
    //     be 0.
    var mnfdDefault = s === 'currency' ? cDigits : 0;

    // 26. Let mnfd be the result of calling the GetNumberOption abstract operation
    //     with arguments options, "minimumFractionDigits", 0, 20, and mnfdDefault.
    var mnfd = GetNumberOption(options, 'minimumFractionDigits', 0, 20, mnfdDefault);

    // 27. Set the [[minimumFractionDigits]] internal property of numberFormat to mnfd.
    internal['[[minimumFractionDigits]]'] = mnfd;

    // 28. If s is "currency", then let mxfdDefault be max(mnfd, cDigits); else if s
    //     is "percent", then let mxfdDefault be max(mnfd, 0); else let mxfdDefault
    //     be max(mnfd, 3).
    var mxfdDefault = s === 'currency' ? Math.max(mnfd, cDigits) : s === 'percent' ? Math.max(mnfd, 0) : Math.max(mnfd, 3);

    // 29. Let mxfd be the result of calling the GetNumberOption abstract operation
    //     with arguments options, "maximumFractionDigits", mnfd, 20, and mxfdDefault.
    var mxfd = GetNumberOption(options, 'maximumFractionDigits', mnfd, 20, mxfdDefault);

    // 30. Set the [[maximumFractionDigits]] internal property of numberFormat to mxfd.
    internal['[[maximumFractionDigits]]'] = mxfd;

    // 31. Let mnsd be the result of calling the [[Get]] internal method of options
    //     with argument "minimumSignificantDigits".
    var mnsd = options.minimumSignificantDigits;

    // 32. Let mxsd be the result of calling the [[Get]] internal method of options
    //     with argument "maximumSignificantDigits".
    var mxsd = options.maximumSignificantDigits;

    // 33. If mnsd is not undefined or mxsd is not undefined, then:
    if (mnsd !== undefined || mxsd !== undefined) {
        // a. Let mnsd be the result of calling the GetNumberOption abstract
        //    operation with arguments options, "minimumSignificantDigits", 1, 21,
        //    and 1.
        mnsd = GetNumberOption(options, 'minimumSignificantDigits', 1, 21, 1);

        // b. Let mxsd be the result of calling the GetNumberOption abstract
        //     operation with arguments options, "maximumSignificantDigits", mnsd,
        //     21, and 21.
        mxsd = GetNumberOption(options, 'maximumSignificantDigits', mnsd, 21, 21);

        // c. Set the [[minimumSignificantDigits]] internal property of numberFormat
        //    to mnsd, and the [[maximumSignificantDigits]] internal property of
        //    numberFormat to mxsd.
        internal['[[minimumSignificantDigits]]'] = mnsd;
        internal['[[maximumSignificantDigits]]'] = mxsd;
    }
    // 34. Let g be the result of calling the GetOption abstract operation with the
    //     arguments options, "useGrouping", "boolean", undefined, and true.
    var g = GetOption(options, 'useGrouping', 'boolean', undefined, true);

    // 35. Set the [[useGrouping]] internal property of numberFormat to g.
    internal['[[useGrouping]]'] = g;

    // 36. Let dataLocaleData be the result of calling the [[Get]] internal method of
    //     localeData with argument dataLocale.
    var dataLocaleData = localeData[dataLocale];

    // 37. Let patterns be the result of calling the [[Get]] internal method of
    //     dataLocaleData with argument "patterns".
    var patterns = dataLocaleData.patterns;

    // 38. Assert: patterns is an object (see 11.2.3)

    // 39. Let stylePatterns be the result of calling the [[Get]] internal method of
    //     patterns with argument s.
    var stylePatterns = patterns[s];

    // 40. Set the [[positivePattern]] internal property of numberFormat to the
    //     result of calling the [[Get]] internal method of stylePatterns with the
    //     argument "positivePattern".
    internal['[[positivePattern]]'] = stylePatterns.positivePattern;

    // 41. Set the [[negativePattern]] internal property of numberFormat to the
    //     result of calling the [[Get]] internal method of stylePatterns with the
    //     argument "negativePattern".
    internal['[[negativePattern]]'] = stylePatterns.negativePattern;

    // 42. Set the [[boundFormat]] internal property of numberFormat to undefined.
    internal['[[boundFormat]]'] = undefined;

    // 43. Set the [[initializedNumberFormat]] internal property of numberFormat to
    //     true.
    internal['[[initializedNumberFormat]]'] = true;

    // In ES3, we need to pre-bind the format() function
    if (es3) numberFormat.format = GetFormatNumber.call(numberFormat);

    // Restore the RegExp properties
    regexpRestore();

    // Return the newly initialised object
    return numberFormat;
}

function CurrencyDigits(currency) {
    // When the CurrencyDigits abstract operation is called with an argument currency
    // (which must be an upper case String value), the following steps are taken:

    // 1. If the ISO 4217 currency and funds code list contains currency as an
    // alphabetic code, then return the minor unit value corresponding to the
    // currency from the list; else return 2.
    return currencyMinorUnits[currency] !== undefined ? currencyMinorUnits[currency] : 2;
}

/* 11.2.3 */internals.NumberFormat = {
    '[[availableLocales]]': [],
    '[[relevantExtensionKeys]]': ['nu'],
    '[[localeData]]': {}
};

/**
 * When the supportedLocalesOf method of Intl.NumberFormat is called, the
 * following steps are taken:
 */
/* 11.2.2 */
defineProperty(Intl.NumberFormat, 'supportedLocalesOf', {
    configurable: true,
    writable: true,
    value: fnBind.call(function (locales) {
        // Bound functions only have the `this` value altered if being used as a constructor,
        // this lets us imitate a native function that has no constructor
        if (!hop.call(this, '[[availableLocales]]')) throw new TypeError('supportedLocalesOf() is not a constructor');

        // Create an object whose props can be used to restore the values of RegExp props
        var regexpRestore = createRegExpRestore(),


        // 1. If options is not provided, then let options be undefined.
        options = arguments[1],


        // 2. Let availableLocales be the value of the [[availableLocales]] internal
        //    property of the standard built-in object that is the initial value of
        //    Intl.NumberFormat.

        availableLocales = this['[[availableLocales]]'],


        // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
        //    abstract operation (defined in 9.2.1) with argument locales.
        requestedLocales = CanonicalizeLocaleList(locales);

        // Restore the RegExp properties
        regexpRestore();

        // 4. Return the result of calling the SupportedLocales abstract operation
        //    (defined in 9.2.8) with arguments availableLocales, requestedLocales,
        //    and options.
        return SupportedLocales(availableLocales, requestedLocales, options);
    }, internals.NumberFormat)
});

/**
 * This named accessor property returns a function that formats a number
 * according to the effective locale and the formatting options of this
 * NumberFormat object.
 */
/* 11.3.2 */defineProperty(Intl.NumberFormat.prototype, 'format', {
    configurable: true,
    get: GetFormatNumber
});

function GetFormatNumber() {
    var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

    // Satisfy test 11.3_b
    if (!internal || !internal['[[initializedNumberFormat]]']) throw new TypeError('`this` value for format() is not an initialized Intl.NumberFormat object.');

    // The value of the [[Get]] attribute is a function that takes the following
    // steps:

    // 1. If the [[boundFormat]] internal property of this NumberFormat object
    //    is undefined, then:
    if (internal['[[boundFormat]]'] === undefined) {
        // a. Let F be a Function object, with internal properties set as
        //    specified for built-in functions in ES5, 15, or successor, and the
        //    length property set to 1, that takes the argument value and
        //    performs the following steps:
        var F = function F(value) {
            // i. If value is not provided, then let value be undefined.
            // ii. Let x be ToNumber(value).
            // iii. Return the result of calling the FormatNumber abstract
            //      operation (defined below) with arguments this and x.
            return FormatNumber(this, /* x = */Number(value));
        };

        // b. Let bind be the standard built-in function object defined in ES5,
        //    15.3.4.5.
        // c. Let bf be the result of calling the [[Call]] internal method of
        //    bind with F as the this value and an argument list containing
        //    the single item this.
        var bf = fnBind.call(F, this);

        // d. Set the [[boundFormat]] internal property of this NumberFormat
        //    object to bf.
        internal['[[boundFormat]]'] = bf;
    }
    // Return the value of the [[boundFormat]] internal property of this
    // NumberFormat object.
    return internal['[[boundFormat]]'];
}

function formatToParts() {
    var value = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

    var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);
    if (!internal || !internal['[[initializedNumberFormat]]']) throw new TypeError('`this` value for formatToParts() is not an initialized Intl.NumberFormat object.');

    var x = Number(value);
    return FormatNumberToParts(this, x);
}

Object.defineProperty(Intl.NumberFormat.prototype, 'formatToParts', {
    configurable: true,
    enumerable: false,
    writable: true,
    value: formatToParts
});

/*
 * @spec[stasm/ecma402/number-format-to-parts/spec/numberformat.html]
 * @clause[sec-formatnumbertoparts]
 */
function FormatNumberToParts(numberFormat, x) {
    // 1. Let parts be ? PartitionNumberPattern(numberFormat, x).
    var parts = PartitionNumberPattern(numberFormat, x);
    // 2. Let result be ArrayCreate(0).
    var result = [];
    // 3. Let n be 0.
    var n = 0;
    // 4. For each part in parts, do:
    for (var i = 0; parts.length > i; i++) {
        var part = parts[i];
        // a. Let O be ObjectCreate(%ObjectPrototype%).
        var O = {};
        // a. Perform ? CreateDataPropertyOrThrow(O, "type", part.[[type]]).
        O.type = part['[[type]]'];
        // a. Perform ? CreateDataPropertyOrThrow(O, "value", part.[[value]]).
        O.value = part['[[value]]'];
        // a. Perform ? CreateDataPropertyOrThrow(result, ? ToString(n), O).
        result[n] = O;
        // a. Increment n by 1.
        n += 1;
    }
    // 5. Return result.
    return result;
}

/*
 * @spec[stasm/ecma402/number-format-to-parts/spec/numberformat.html]
 * @clause[sec-partitionnumberpattern]
 */
function PartitionNumberPattern(numberFormat, x) {

    var internal = getInternalProperties(numberFormat),
        locale = internal['[[dataLocale]]'],
        nums = internal['[[numberingSystem]]'],
        data = internals.NumberFormat['[[localeData]]'][locale],
        ild = data.symbols[nums] || data.symbols.latn,
        pattern = void 0;

    // 1. If x is not NaN and x < 0, then:
    if (!isNaN(x) && x < 0) {
        // a. Let x be -x.
        x = -x;
        // a. Let pattern be the value of numberFormat.[[negativePattern]].
        pattern = internal['[[negativePattern]]'];
    }
    // 2. Else,
    else {
            // a. Let pattern be the value of numberFormat.[[positivePattern]].
            pattern = internal['[[positivePattern]]'];
        }
    // 3. Let result be a new empty List.
    var result = new List();
    // 4. Let beginIndex be Call(%StringProto_indexOf%, pattern, "{", 0).
    var beginIndex = pattern.indexOf('{', 0);
    // 5. Let endIndex be 0.
    var endIndex = 0;
    // 6. Let nextIndex be 0.
    var nextIndex = 0;
    // 7. Let length be the number of code units in pattern.
    var length = pattern.length;
    // 8. Repeat while beginIndex is an integer index into pattern:
    while (beginIndex > -1 && beginIndex < length) {
        // a. Set endIndex to Call(%StringProto_indexOf%, pattern, "}", beginIndex)
        endIndex = pattern.indexOf('}', beginIndex);
        // a. If endIndex = -1, throw new Error exception.
        if (endIndex === -1) throw new Error();
        // a. If beginIndex is greater than nextIndex, then:
        if (beginIndex > nextIndex) {
            // i. Let literal be a substring of pattern from position nextIndex, inclusive, to position beginIndex, exclusive.
            var literal = pattern.substring(nextIndex, beginIndex);
            // ii. Add new part record { [[type]]: "literal", [[value]]: literal } as a new element of the list result.
            arrPush.call(result, { '[[type]]': 'literal', '[[value]]': literal });
        }
        // a. Let p be the substring of pattern from position beginIndex, exclusive, to position endIndex, exclusive.
        var p = pattern.substring(beginIndex + 1, endIndex);
        // a. If p is equal "number", then:
        if (p === "number") {
            // i. If x is NaN,
            if (isNaN(x)) {
                // 1. Let n be an ILD String value indicating the NaN value.
                var n = ild.nan;
                // 2. Add new part record { [[type]]: "nan", [[value]]: n } as a new element of the list result.
                arrPush.call(result, { '[[type]]': 'nan', '[[value]]': n });
            }
            // ii. Else if isFinite(x) is false,
            else if (!isFinite(x)) {
                    // 1. Let n be an ILD String value indicating infinity.
                    var _n = ild.infinity;
                    // 2. Add new part record { [[type]]: "infinity", [[value]]: n } as a new element of the list result.
                    arrPush.call(result, { '[[type]]': 'infinity', '[[value]]': _n });
                }
                // iii. Else,
                else {
                        // 1. If the value of numberFormat.[[style]] is "percent" and isFinite(x), let x be 100 × x.
                        if (internal['[[style]]'] === 'percent' && isFinite(x)) x *= 100;

                        var _n2 = void 0;
                        // 2. If the numberFormat.[[minimumSignificantDigits]] and numberFormat.[[maximumSignificantDigits]] are present, then
                        if (hop.call(internal, '[[minimumSignificantDigits]]') && hop.call(internal, '[[maximumSignificantDigits]]')) {
                            // a. Let n be ToRawPrecision(x, numberFormat.[[minimumSignificantDigits]], numberFormat.[[maximumSignificantDigits]]).
                            _n2 = ToRawPrecision(x, internal['[[minimumSignificantDigits]]'], internal['[[maximumSignificantDigits]]']);
                        }
                        // 3. Else,
                        else {
                                // a. Let n be ToRawFixed(x, numberFormat.[[minimumIntegerDigits]], numberFormat.[[minimumFractionDigits]], numberFormat.[[maximumFractionDigits]]).
                                _n2 = ToRawFixed(x, internal['[[minimumIntegerDigits]]'], internal['[[minimumFractionDigits]]'], internal['[[maximumFractionDigits]]']);
                            }
                        // 4. If the value of the numberFormat.[[numberingSystem]] matches one of the values in the "Numbering System" column of Table 2 below, then
                        if (numSys[nums]) {
                            (function () {
                                // a. Let digits be an array whose 10 String valued elements are the UTF-16 string representations of the 10 digits specified in the "Digits" column of the matching row in Table 2.
                                var digits = numSys[nums];
                                // a. Replace each digit in n with the value of digits[digit].
                                _n2 = String(_n2).replace(/\d/g, function (digit) {
                                    return digits[digit];
                                });
                            })();
                        }
                        // 5. Else use an implementation dependent algorithm to map n to the appropriate representation of n in the given numbering system.
                        else _n2 = String(_n2); // ###TODO###

                        var integer = void 0;
                        var fraction = void 0;
                        // 6. Let decimalSepIndex be Call(%StringProto_indexOf%, n, ".", 0).
                        var decimalSepIndex = _n2.indexOf('.', 0);
                        // 7. If decimalSepIndex > 0, then:
                        if (decimalSepIndex > 0) {
                            // a. Let integer be the substring of n from position 0, inclusive, to position decimalSepIndex, exclusive.
                            integer = _n2.substring(0, decimalSepIndex);
                            // a. Let fraction be the substring of n from position decimalSepIndex, exclusive, to the end of n.
                            fraction = _n2.substring(decimalSepIndex + 1, decimalSepIndex.length);
                        }
                        // 8. Else:
                        else {
                                // a. Let integer be n.
                                integer = _n2;
                                // a. Let fraction be undefined.
                                fraction = undefined;
                            }
                        // 9. If the value of the numberFormat.[[useGrouping]] is true,
                        if (internal['[[useGrouping]]'] === true) {
                            // a. Let groupSepSymbol be the ILND String representing the grouping separator.
                            var groupSepSymbol = ild.group;
                            // a. Let groups be a List whose elements are, in left to right order, the substrings defined by ILND set of locations within the integer.
                            var groups = [];
                            // ----> implementation:
                            // Primary group represents the group closest to the decimal
                            var pgSize = data.patterns.primaryGroupSize || 3;
                            // Secondary group is every other group
                            var sgSize = data.patterns.secondaryGroupSize || pgSize;
                            // Group only if necessary
                            if (integer.length > pgSize) {
                                // Index of the primary grouping separator
                                var end = integer.length - pgSize;
                                // Starting index for our loop
                                var idx = end % sgSize;
                                var start = integer.slice(0, idx);
                                if (start.length) arrPush.call(groups, start);
                                // Loop to separate into secondary grouping digits
                                while (idx < end) {
                                    arrPush.call(groups, integer.slice(idx, idx + sgSize));
                                    idx += sgSize;
                                }
                                // Add the primary grouping digits
                                arrPush.call(groups, integer.slice(end));
                            } else {
                                arrPush.call(groups, integer);
                            }
                            // a. Assert: The number of elements in groups List is greater than 0.
                            if (groups.length === 0) throw new Error();
                            // a. Repeat, while groups List is not empty:
                            while (groups.length) {
                                // i. Remove the first element from groups and let integerGroup be the value of that element.
                                var integerGroup = arrShift.call(groups);
                                // ii. Add new part record { [[type]]: "integer", [[value]]: integerGroup } as a new element of the list result.
                                arrPush.call(result, { '[[type]]': 'integer', '[[value]]': integerGroup });
                                // iii. If groups List is not empty, then:
                                if (groups.length) {
                                    // 1. Add new part record { [[type]]: "group", [[value]]: groupSepSymbol } as a new element of the list result.
                                    arrPush.call(result, { '[[type]]': 'group', '[[value]]': groupSepSymbol });
                                }
                            }
                        }
                        // 10. Else,
                        else {
                                // a. Add new part record { [[type]]: "integer", [[value]]: integer } as a new element of the list result.
                                arrPush.call(result, { '[[type]]': 'integer', '[[value]]': integer });
                            }
                        // 11. If fraction is not undefined, then:
                        if (fraction !== undefined) {
                            // a. Let decimalSepSymbol be the ILND String representing the decimal separator.
                            var decimalSepSymbol = ild.decimal;
                            // a. Add new part record { [[type]]: "decimal", [[value]]: decimalSepSymbol } as a new element of the list result.
                            arrPush.call(result, { '[[type]]': 'decimal', '[[value]]': decimalSepSymbol });
                            // a. Add new part record { [[type]]: "fraction", [[value]]: fraction } as a new element of the list result.
                            arrPush.call(result, { '[[type]]': 'fraction', '[[value]]': fraction });
                        }
                    }
        }
        // a. Else if p is equal "plusSign", then:
        else if (p === "plusSign") {
                // i. Let plusSignSymbol be the ILND String representing the plus sign.
                var plusSignSymbol = ild.plusSign;
                // ii. Add new part record { [[type]]: "plusSign", [[value]]: plusSignSymbol } as a new element of the list result.
                arrPush.call(result, { '[[type]]': 'plusSign', '[[value]]': plusSignSymbol });
            }
            // a. Else if p is equal "minusSign", then:
            else if (p === "minusSign") {
                    // i. Let minusSignSymbol be the ILND String representing the minus sign.
                    var minusSignSymbol = ild.minusSign;
                    // ii. Add new part record { [[type]]: "minusSign", [[value]]: minusSignSymbol } as a new element of the list result.
                    arrPush.call(result, { '[[type]]': 'minusSign', '[[value]]': minusSignSymbol });
                }
                // a. Else if p is equal "percentSign" and numberFormat.[[style]] is "percent", then:
                else if (p === "percentSign" && internal['[[style]]'] === "percent") {
                        // i. Let percentSignSymbol be the ILND String representing the percent sign.
                        var percentSignSymbol = ild.percentSign;
                        // ii. Add new part record { [[type]]: "percentSign", [[value]]: percentSignSymbol } as a new element of the list result.
                        arrPush.call(result, { '[[type]]': 'literal', '[[value]]': percentSignSymbol });
                    }
                    // a. Else if p is equal "currency" and numberFormat.[[style]] is "currency", then:
                    else if (p === "currency" && internal['[[style]]'] === "currency") {
                            // i. Let currency be the value of numberFormat.[[currency]].
                            var currency = internal['[[currency]]'];

                            var cd = void 0;

                            // ii. If numberFormat.[[currencyDisplay]] is "code", then
                            if (internal['[[currencyDisplay]]'] === "code") {
                                // 1. Let cd be currency.
                                cd = currency;
                            }
                            // iii. Else if numberFormat.[[currencyDisplay]] is "symbol", then
                            else if (internal['[[currencyDisplay]]'] === "symbol") {
                                    // 1. Let cd be an ILD string representing currency in short form. If the implementation does not have such a representation of currency, use currency itself.
                                    cd = data.currencies[currency] || currency;
                                }
                                // iv. Else if numberFormat.[[currencyDisplay]] is "name", then
                                else if (internal['[[currencyDisplay]]'] === "name") {
                                        // 1. Let cd be an ILD string representing currency in long form. If the implementation does not have such a representation of currency, then use currency itself.
                                        cd = currency;
                                    }
                            // v. Add new part record { [[type]]: "currency", [[value]]: cd } as a new element of the list result.
                            arrPush.call(result, { '[[type]]': 'currency', '[[value]]': cd });
                        }
                        // a. Else,
                        else {
                                // i. Let literal be the substring of pattern from position beginIndex, inclusive, to position endIndex, inclusive.
                                var _literal = pattern.substring(beginIndex, endIndex);
                                // ii. Add new part record { [[type]]: "literal", [[value]]: literal } as a new element of the list result.
                                arrPush.call(result, { '[[type]]': 'literal', '[[value]]': _literal });
                            }
        // a. Set nextIndex to endIndex + 1.
        nextIndex = endIndex + 1;
        // a. Set beginIndex to Call(%StringProto_indexOf%, pattern, "{", nextIndex)
        beginIndex = pattern.indexOf('{', nextIndex);
    }
    // 9. If nextIndex is less than length, then:
    if (nextIndex < length) {
        // a. Let literal be the substring of pattern from position nextIndex, inclusive, to position length, exclusive.
        var _literal2 = pattern.substring(nextIndex, length);
        // a. Add new part record { [[type]]: "literal", [[value]]: literal } as a new element of the list result.
        arrPush.call(result, { '[[type]]': 'literal', '[[value]]': _literal2 });
    }
    // 10. Return result.
    return result;
}

/*
 * @spec[stasm/ecma402/number-format-to-parts/spec/numberformat.html]
 * @clause[sec-formatnumber]
 */
function FormatNumber(numberFormat, x) {
    // 1. Let parts be ? PartitionNumberPattern(numberFormat, x).
    var parts = PartitionNumberPattern(numberFormat, x);
    // 2. Let result be an empty String.
    var result = '';
    // 3. For each part in parts, do:
    for (var i = 0; parts.length > i; i++) {
        var part = parts[i];
        // a. Set result to a String value produced by concatenating result and part.[[value]].
        result += part['[[value]]'];
    }
    // 4. Return result.
    return result;
}

/**
 * When the ToRawPrecision abstract operation is called with arguments x (which
 * must be a finite non-negative number), minPrecision, and maxPrecision (both
 * must be integers between 1 and 21) the following steps are taken:
 */
function ToRawPrecision(x, minPrecision, maxPrecision) {
    // 1. Let p be maxPrecision.
    var p = maxPrecision;

    var m = void 0,
        e = void 0;

    // 2. If x = 0, then
    if (x === 0) {
        // a. Let m be the String consisting of p occurrences of the character "0".
        m = arrJoin.call(Array(p + 1), '0');
        // b. Let e be 0.
        e = 0;
    }
    // 3. Else
    else {
            // a. Let e and n be integers such that 10ᵖ⁻¹ ≤ n < 10ᵖ and for which the
            //    exact mathematical value of n × 10ᵉ⁻ᵖ⁺¹ – x is as close to zero as
            //    possible. If there are two such sets of e and n, pick the e and n for
            //    which n × 10ᵉ⁻ᵖ⁺¹ is larger.
            e = log10Floor(Math.abs(x));

            // Easier to get to m from here
            var f = Math.round(Math.exp(Math.abs(e - p + 1) * Math.LN10));

            // b. Let m be the String consisting of the digits of the decimal
            //    representation of n (in order, with no leading zeroes)
            m = String(Math.round(e - p + 1 < 0 ? x * f : x / f));
        }

    // 4. If e ≥ p, then
    if (e >= p)
        // a. Return the concatenation of m and e-p+1 occurrences of the character "0".
        return m + arrJoin.call(Array(e - p + 1 + 1), '0');

        // 5. If e = p-1, then
    else if (e === p - 1)
            // a. Return m.
            return m;

            // 6. If e ≥ 0, then
        else if (e >= 0)
                // a. Let m be the concatenation of the first e+1 characters of m, the character
                //    ".", and the remaining p–(e+1) characters of m.
                m = m.slice(0, e + 1) + '.' + m.slice(e + 1);

                // 7. If e < 0, then
            else if (e < 0)
                    // a. Let m be the concatenation of the String "0.", –(e+1) occurrences of the
                    //    character "0", and the string m.
                    m = '0.' + arrJoin.call(Array(-(e + 1) + 1), '0') + m;

    // 8. If m contains the character ".", and maxPrecision > minPrecision, then
    if (m.indexOf(".") >= 0 && maxPrecision > minPrecision) {
        // a. Let cut be maxPrecision – minPrecision.
        var cut = maxPrecision - minPrecision;

        // b. Repeat while cut > 0 and the last character of m is "0":
        while (cut > 0 && m.charAt(m.length - 1) === '0') {
            //  i. Remove the last character from m.
            m = m.slice(0, -1);

            //  ii. Decrease cut by 1.
            cut--;
        }

        // c. If the last character of m is ".", then
        if (m.charAt(m.length - 1) === '.')
            //    i. Remove the last character from m.
            m = m.slice(0, -1);
    }
    // 9. Return m.
    return m;
}

/**
 * @spec[tc39/ecma402/master/spec/numberformat.html]
 * @clause[sec-torawfixed]
 * When the ToRawFixed abstract operation is called with arguments x (which must
 * be a finite non-negative number), minInteger (which must be an integer between
 * 1 and 21), minFraction, and maxFraction (which must be integers between 0 and
 * 20) the following steps are taken:
 */
function ToRawFixed(x, minInteger, minFraction, maxFraction) {
    // 1. Let f be maxFraction.
    var f = maxFraction;
    // 2. Let n be an integer for which the exact mathematical value of n ÷ 10f – x is as close to zero as possible. If there are two such n, pick the larger n.
    var n = Math.pow(10, f) * x; // diverging...
    // 3. If n = 0, let m be the String "0". Otherwise, let m be the String consisting of the digits of the decimal representation of n (in order, with no leading zeroes).
    var m = n === 0 ? "0" : n.toFixed(0); // divering...

    {
        // this diversion is needed to take into consideration big numbers, e.g.:
        // 1.2344501e+37 -> 12344501000000000000000000000000000000
        var idx = void 0;
        var exp = (idx = m.indexOf('e')) > -1 ? m.slice(idx + 1) : 0;
        if (exp) {
            m = m.slice(0, idx).replace('.', '');
            m += arrJoin.call(Array(exp - (m.length - 1) + 1), '0');
        }
    }

    var int = void 0;
    // 4. If f ≠ 0, then
    if (f !== 0) {
        // a. Let k be the number of characters in m.
        var k = m.length;
        // a. If k ≤ f, then
        if (k <= f) {
            // i. Let z be the String consisting of f+1–k occurrences of the character "0".
            var z = arrJoin.call(Array(f + 1 - k + 1), '0');
            // ii. Let m be the concatenation of Strings z and m.
            m = z + m;
            // iii. Let k be f+1.
            k = f + 1;
        }
        // a. Let a be the first k–f characters of m, and let b be the remaining f characters of m.
        var a = m.substring(0, k - f),
            b = m.substring(k - f, m.length);
        // a. Let m be the concatenation of the three Strings a, ".", and b.
        m = a + "." + b;
        // a. Let int be the number of characters in a.
        int = a.length;
    }
    // 5. Else, let int be the number of characters in m.
    else int = m.length;
    // 6. Let cut be maxFraction – minFraction.
    var cut = maxFraction - minFraction;
    // 7. Repeat while cut > 0 and the last character of m is "0":
    while (cut > 0 && m.slice(-1) === "0") {
        // a. Remove the last character from m.
        m = m.slice(0, -1);
        // a. Decrease cut by 1.
        cut--;
    }
    // 8. If the last character of m is ".", then
    if (m.slice(-1) === ".") {
        // a. Remove the last character from m.
        m = m.slice(0, -1);
    }
    // 9. If int < minInteger, then
    if (int < minInteger) {
        // a. Let z be the String consisting of minInteger–int occurrences of the character "0".
        var _z = arrJoin.call(Array(minInteger - int + 1), '0');
        // a. Let m be the concatenation of Strings z and m.
        m = _z + m;
    }
    // 10. Return m.
    return m;
}

// Sect 11.3.2 Table 2, Numbering systems
// ======================================
var numSys = {
    arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
    arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
    bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
    beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
    deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
    fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
    gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
    guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
    hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
    khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
    knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
    laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
    latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
    mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
    mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
    mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
    orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
    tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
    telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
    thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
    tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"]
};

/**
 * This function provides access to the locale and formatting options computed
 * during initialization of the object.
 *
 * The function returns a new object whose properties and attributes are set as
 * if constructed by an object literal assigning to each of the following
 * properties the value of the corresponding internal property of this
 * NumberFormat object (see 11.4): locale, numberingSystem, style, currency,
 * currencyDisplay, minimumIntegerDigits, minimumFractionDigits,
 * maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits, and
 * useGrouping. Properties whose corresponding internal properties are not present
 * are not assigned.
 */
/* 11.3.3 */defineProperty(Intl.NumberFormat.prototype, 'resolvedOptions', {
    configurable: true,
    writable: true,
    value: function value() {
        var prop = void 0,
            descs = new Record(),
            props = ['locale', 'numberingSystem', 'style', 'currency', 'currencyDisplay', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'useGrouping'],
            internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

        // Satisfy test 11.3_b
        if (!internal || !internal['[[initializedNumberFormat]]']) throw new TypeError('`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.');

        for (var i = 0, max = props.length; i < max; i++) {
            if (hop.call(internal, prop = '[[' + props[i] + ']]')) descs[props[i]] = { value: internal[prop], writable: true, configurable: true, enumerable: true };
        }

        return objCreate({}, descs);
    }
});

/* jslint esnext: true */

// Match these datetime components in a CLDR pattern, except those in single quotes
var expDTComponents = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
// trim patterns after transformations
var expPatternTrimmer = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
// Skip over patterns with these datetime components because we don't have data
// to back them up:
// timezone, weekday, amoung others
var unwantedDTCs = /[rqQASjJgwWIQq]/; // xXVO were removed from this list in favor of computing matches with timeZoneName values but printing as empty string

var dtKeys = ["era", "year", "month", "day", "weekday", "quarter"];
var tmKeys = ["hour", "minute", "second", "hour12", "timeZoneName"];

function isDateFormatOnly(obj) {
    for (var i = 0; i < tmKeys.length; i += 1) {
        if (obj.hasOwnProperty(tmKeys[i])) {
            return false;
        }
    }
    return true;
}

function isTimeFormatOnly(obj) {
    for (var i = 0; i < dtKeys.length; i += 1) {
        if (obj.hasOwnProperty(dtKeys[i])) {
            return false;
        }
    }
    return true;
}

function joinDateAndTimeFormats(dateFormatObj, timeFormatObj) {
    var o = { _: {} };
    for (var i = 0; i < dtKeys.length; i += 1) {
        if (dateFormatObj[dtKeys[i]]) {
            o[dtKeys[i]] = dateFormatObj[dtKeys[i]];
        }
        if (dateFormatObj._[dtKeys[i]]) {
            o._[dtKeys[i]] = dateFormatObj._[dtKeys[i]];
        }
    }
    for (var j = 0; j < tmKeys.length; j += 1) {
        if (timeFormatObj[tmKeys[j]]) {
            o[tmKeys[j]] = timeFormatObj[tmKeys[j]];
        }
        if (timeFormatObj._[tmKeys[j]]) {
            o._[tmKeys[j]] = timeFormatObj._[tmKeys[j]];
        }
    }
    return o;
}

function computeFinalPatterns(formatObj) {
    // From http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns:
    //  'In patterns, two single quotes represents a literal single quote, either
    //   inside or outside single quotes. Text within single quotes is not
    //   interpreted in any way (except for two adjacent single quotes).'
    formatObj.pattern12 = formatObj.extendedPattern.replace(/'([^']*)'/g, function ($0, literal) {
        return literal ? literal : "'";
    });

    // pattern 12 is always the default. we can produce the 24 by removing {ampm}
    formatObj.pattern = formatObj.pattern12.replace('{ampm}', '').replace(expPatternTrimmer, '');
    return formatObj;
}

function expDTComponentsMeta($0, formatObj) {
    switch ($0.charAt(0)) {
        // --- Era
        case 'G':
            formatObj.era = ['short', 'short', 'short', 'long', 'narrow'][$0.length - 1];
            return '{era}';

        // --- Year
        case 'y':
        case 'Y':
        case 'u':
        case 'U':
        case 'r':
            formatObj.year = $0.length === 2 ? '2-digit' : 'numeric';
            return '{year}';

        // --- Quarter (not supported in this polyfill)
        case 'Q':
        case 'q':
            formatObj.quarter = ['numeric', '2-digit', 'short', 'long', 'narrow'][$0.length - 1];
            return '{quarter}';

        // --- Month
        case 'M':
        case 'L':
            formatObj.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][$0.length - 1];
            return '{month}';

        // --- Week (not supported in this polyfill)
        case 'w':
            // week of the year
            formatObj.week = $0.length === 2 ? '2-digit' : 'numeric';
            return '{weekday}';
        case 'W':
            // week of the month
            formatObj.week = 'numeric';
            return '{weekday}';

        // --- Day
        case 'd':
            // day of the month
            formatObj.day = $0.length === 2 ? '2-digit' : 'numeric';
            return '{day}';
        case 'D': // day of the year
        case 'F': // day of the week
        case 'g':
            // 1..n: Modified Julian day
            formatObj.day = 'numeric';
            return '{day}';

        // --- Week Day
        case 'E':
            // day of the week
            formatObj.weekday = ['short', 'short', 'short', 'long', 'narrow', 'short'][$0.length - 1];
            return '{weekday}';
        case 'e':
            // local day of the week
            formatObj.weekday = ['numeric', '2-digit', 'short', 'long', 'narrow', 'short'][$0.length - 1];
            return '{weekday}';
        case 'c':
            // stand alone local day of the week
            formatObj.weekday = ['numeric', undefined, 'short', 'long', 'narrow', 'short'][$0.length - 1];
            return '{weekday}';

        // --- Period
        case 'a': // AM, PM
        case 'b': // am, pm, noon, midnight
        case 'B':
            // flexible day periods
            formatObj.hour12 = true;
            return '{ampm}';

        // --- Hour
        case 'h':
        case 'H':
            formatObj.hour = $0.length === 2 ? '2-digit' : 'numeric';
            return '{hour}';
        case 'k':
        case 'K':
            formatObj.hour12 = true; // 12-hour-cycle time formats (using h or K)
            formatObj.hour = $0.length === 2 ? '2-digit' : 'numeric';
            return '{hour}';

        // --- Minute
        case 'm':
            formatObj.minute = $0.length === 2 ? '2-digit' : 'numeric';
            return '{minute}';

        // --- Second
        case 's':
            formatObj.second = $0.length === 2 ? '2-digit' : 'numeric';
            return '{second}';
        case 'S':
        case 'A':
            formatObj.second = 'numeric';
            return '{second}';

        // --- Timezone
        case 'z': // 1..3, 4: specific non-location format
        case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
        case 'O': // 1, 4: miliseconds in day short, long
        case 'v': // 1, 4: generic non-location format
        case 'V': // 1, 2, 3, 4: time zone ID or city
        case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
        case 'x':
            // 1, 2, 3, 4: The ISO8601 varios formats
            // this polyfill only supports much, for now, we are just doing something dummy
            formatObj.timeZoneName = $0.length < 4 ? 'short' : 'long';
            return '{timeZoneName}';
    }
}

/**
 * Converts the CLDR availableFormats into the objects and patterns required by
 * the ECMAScript Internationalization API specification.
 */
function createDateTimeFormat(skeleton, pattern) {
    // we ignore certain patterns that are unsupported to avoid this expensive op.
    if (unwantedDTCs.test(pattern)) return undefined;

    var formatObj = {
        originalPattern: pattern,
        _: {}
    };

    // Replace the pattern string with the one required by the specification, whilst
    // at the same time evaluating it for the subsets and formats
    formatObj.extendedPattern = pattern.replace(expDTComponents, function ($0) {
        // See which symbol we're dealing with
        return expDTComponentsMeta($0, formatObj._);
    });

    // Match the skeleton string with the one required by the specification
    // this implementation is based on the Date Field Symbol Table:
    // http://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
    // Note: we are adding extra data to the formatObject even though this polyfill
    //       might not support it.
    skeleton.replace(expDTComponents, function ($0) {
        // See which symbol we're dealing with
        return expDTComponentsMeta($0, formatObj);
    });

    return computeFinalPatterns(formatObj);
}

/**
 * Processes DateTime formats from CLDR to an easier-to-parse format.
 * the result of this operation should be cached the first time a particular
 * calendar is analyzed.
 *
 * The specification requires we support at least the following subsets of
 * date/time components:
 *
 *   - 'weekday', 'year', 'month', 'day', 'hour', 'minute', 'second'
 *   - 'weekday', 'year', 'month', 'day'
 *   - 'year', 'month', 'day'
 *   - 'year', 'month'
 *   - 'month', 'day'
 *   - 'hour', 'minute', 'second'
 *   - 'hour', 'minute'
 *
 * We need to cherry pick at least these subsets from the CLDR data and convert
 * them into the pattern objects used in the ECMA-402 API.
 */
function createDateTimeFormats(formats) {
    var availableFormats = formats.availableFormats;
    var timeFormats = formats.timeFormats;
    var dateFormats = formats.dateFormats;
    var result = [];
    var skeleton = void 0,
        pattern = void 0,
        computed = void 0,
        i = void 0,
        j = void 0;
    var timeRelatedFormats = [];
    var dateRelatedFormats = [];

    // Map available (custom) formats into a pattern for createDateTimeFormats
    for (skeleton in availableFormats) {
        if (availableFormats.hasOwnProperty(skeleton)) {
            pattern = availableFormats[skeleton];
            computed = createDateTimeFormat(skeleton, pattern);
            if (computed) {
                result.push(computed);
                // in some cases, the format is only displaying date specific props
                // or time specific props, in which case we need to also produce the
                // combined formats.
                if (isDateFormatOnly(computed)) {
                    dateRelatedFormats.push(computed);
                } else if (isTimeFormatOnly(computed)) {
                    timeRelatedFormats.push(computed);
                }
            }
        }
    }

    // Map time formats into a pattern for createDateTimeFormats
    for (skeleton in timeFormats) {
        if (timeFormats.hasOwnProperty(skeleton)) {
            pattern = timeFormats[skeleton];
            computed = createDateTimeFormat(skeleton, pattern);
            if (computed) {
                result.push(computed);
                timeRelatedFormats.push(computed);
            }
        }
    }

    // Map date formats into a pattern for createDateTimeFormats
    for (skeleton in dateFormats) {
        if (dateFormats.hasOwnProperty(skeleton)) {
            pattern = dateFormats[skeleton];
            computed = createDateTimeFormat(skeleton, pattern);
            if (computed) {
                result.push(computed);
                dateRelatedFormats.push(computed);
            }
        }
    }

    // combine custom time and custom date formats when they are orthogonals to complete the
    // formats supported by CLDR.
    // This Algo is based on section "Missing Skeleton Fields" from:
    // http://unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems
    for (i = 0; i < timeRelatedFormats.length; i += 1) {
        for (j = 0; j < dateRelatedFormats.length; j += 1) {
            if (dateRelatedFormats[j].month === 'long') {
                pattern = dateRelatedFormats[j].weekday ? formats.full : formats.long;
            } else if (dateRelatedFormats[j].month === 'short') {
                pattern = formats.medium;
            } else {
                pattern = formats.short;
            }
            computed = joinDateAndTimeFormats(dateRelatedFormats[j], timeRelatedFormats[i]);
            computed.originalPattern = pattern;
            computed.extendedPattern = pattern.replace('{0}', timeRelatedFormats[i].extendedPattern).replace('{1}', dateRelatedFormats[j].extendedPattern).replace(/^[,\s]+|[,\s]+$/gi, '');
            result.push(computeFinalPatterns(computed));
        }
    }

    return result;
}

// this represents the exceptions of the rule that are not covered by CLDR availableFormats
// for single property configurations, they play no role when using multiple properties, and
// those that are not in this table, are not exceptions or are not covered by the data we
// provide.
var validSyntheticProps = {
    second: {
        numeric: 's',
        '2-digit': 'ss'
    },
    minute: {
        numeric: 'm',
        '2-digit': 'mm'
    },
    year: {
        numeric: 'y',
        '2-digit': 'yy'
    },
    day: {
        numeric: 'd',
        '2-digit': 'dd'
    },
    month: {
        numeric: 'L',
        '2-digit': 'LL',
        narrow: 'LLLLL',
        short: 'LLL',
        long: 'LLLL'
    },
    weekday: {
        narrow: 'ccccc',
        short: 'ccc',
        long: 'cccc'
    }
};

function generateSyntheticFormat(propName, propValue) {
    if (validSyntheticProps[propName] && validSyntheticProps[propName][propValue]) {
        var _ref2;

        return _ref2 = {
            originalPattern: validSyntheticProps[propName][propValue],
            _: defineProperty$1({}, propName, propValue),
            extendedPattern: "{" + propName + "}"
        }, defineProperty$1(_ref2, propName, propValue), defineProperty$1(_ref2, "pattern12", "{" + propName + "}"), defineProperty$1(_ref2, "pattern", "{" + propName + "}"), _ref2;
    }
}

// An object map of date component keys, saves using a regex later
var dateWidths = objCreate(null, { narrow: {}, short: {}, long: {} });

/**
 * Returns a string for a date component, resolved using multiple inheritance as specified
 * as specified in the Unicode Technical Standard 35.
 */
function resolveDateString(data, ca, component, width, key) {
    // From http://www.unicode.org/reports/tr35/tr35.html#Multiple_Inheritance:
    // 'In clearly specified instances, resources may inherit from within the same locale.
    //  For example, ... the Buddhist calendar inherits from the Gregorian calendar.'
    var obj = data[ca] && data[ca][component] ? data[ca][component] : data.gregory[component],


    // "sideways" inheritance resolves strings when a key doesn't exist
    alts = {
        narrow: ['short', 'long'],
        short: ['long', 'narrow'],
        long: ['short', 'narrow']
    },


    //
    resolved = hop.call(obj, width) ? obj[width] : hop.call(obj, alts[width][0]) ? obj[alts[width][0]] : obj[alts[width][1]];

    // `key` wouldn't be specified for components 'dayPeriods'
    return key !== null ? resolved[key] : resolved;
}

// Define the DateTimeFormat constructor internally so it cannot be tainted
function DateTimeFormatConstructor() {
    var locales = arguments[0];
    var options = arguments[1];

    if (!this || this === Intl) {
        return new Intl.DateTimeFormat(locales, options);
    }
    return InitializeDateTimeFormat(toObject(this), locales, options);
}

defineProperty(Intl, 'DateTimeFormat', {
    configurable: true,
    writable: true,
    value: DateTimeFormatConstructor
});

// Must explicitly set prototypes as unwritable
defineProperty(DateTimeFormatConstructor, 'prototype', {
    writable: false
});

/**
 * The abstract operation InitializeDateTimeFormat accepts the arguments dateTimeFormat
 * (which must be an object), locales, and options. It initializes dateTimeFormat as a
 * DateTimeFormat object.
 */
function /* 12.1.1.1 */InitializeDateTimeFormat(dateTimeFormat, locales, options) {
    // This will be a internal properties object if we're not already initialized
    var internal = getInternalProperties(dateTimeFormat);

    // Create an object whose props can be used to restore the values of RegExp props
    var regexpRestore = createRegExpRestore();

    // 1. If dateTimeFormat has an [[initializedIntlObject]] internal property with
    //    value true, throw a TypeError exception.
    if (internal['[[initializedIntlObject]]'] === true) throw new TypeError('`this` object has already been initialized as an Intl object');

    // Need this to access the `internal` object
    defineProperty(dateTimeFormat, '__getInternalProperties', {
        value: function value() {
            // NOTE: Non-standard, for internal use only
            if (arguments[0] === secret) return internal;
        }
    });

    // 2. Set the [[initializedIntlObject]] internal property of numberFormat to true.
    internal['[[initializedIntlObject]]'] = true;

    // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
    //    abstract operation (defined in 9.2.1) with argument locales.
    var requestedLocales = CanonicalizeLocaleList(locales);

    // 4. Let options be the result of calling the ToDateTimeOptions abstract
    //    operation (defined below) with arguments options, "any", and "date".
    options = ToDateTimeOptions(options, 'any', 'date');

    // 5. Let opt be a new Record.
    var opt = new Record();

    // 6. Let matcher be the result of calling the GetOption abstract operation
    //    (defined in 9.2.9) with arguments options, "localeMatcher", "string", a List
    //    containing the two String values "lookup" and "best fit", and "best fit".
    var matcher = GetOption(options, 'localeMatcher', 'string', new List('lookup', 'best fit'), 'best fit');

    // 7. Set opt.[[localeMatcher]] to matcher.
    opt['[[localeMatcher]]'] = matcher;

    // 8. Let DateTimeFormat be the standard built-in object that is the initial
    //    value of Intl.DateTimeFormat.
    var DateTimeFormat = internals.DateTimeFormat; // This is what we *really* need

    // 9. Let localeData be the value of the [[localeData]] internal property of
    //    DateTimeFormat.
    var localeData = DateTimeFormat['[[localeData]]'];

    // 10. Let r be the result of calling the ResolveLocale abstract operation
    //     (defined in 9.2.5) with the [[availableLocales]] internal property of
    //      DateTimeFormat, requestedLocales, opt, the [[relevantExtensionKeys]]
    //      internal property of DateTimeFormat, and localeData.
    var r = ResolveLocale(DateTimeFormat['[[availableLocales]]'], requestedLocales, opt, DateTimeFormat['[[relevantExtensionKeys]]'], localeData);

    // 11. Set the [[locale]] internal property of dateTimeFormat to the value of
    //     r.[[locale]].
    internal['[[locale]]'] = r['[[locale]]'];

    // 12. Set the [[calendar]] internal property of dateTimeFormat to the value of
    //     r.[[ca]].
    internal['[[calendar]]'] = r['[[ca]]'];

    // 13. Set the [[numberingSystem]] internal property of dateTimeFormat to the value of
    //     r.[[nu]].
    internal['[[numberingSystem]]'] = r['[[nu]]'];

    // The specification doesn't tell us to do this, but it's helpful later on
    internal['[[dataLocale]]'] = r['[[dataLocale]]'];

    // 14. Let dataLocale be the value of r.[[dataLocale]].
    var dataLocale = r['[[dataLocale]]'];

    // 15. Let tz be the result of calling the [[Get]] internal method of options with
    //     argument "timeZone".
    var tz = options.timeZone;

    // 16. If tz is not undefined, then
    if (tz !== undefined) {
        // a. Let tz be ToString(tz).
        // b. Convert tz to upper case as described in 6.1.
        //    NOTE: If an implementation accepts additional time zone values, as permitted
        //          under certain conditions by the Conformance clause, different casing
        //          rules apply.
        tz = toLatinUpperCase(tz);

        // c. If tz is not "UTC", then throw a RangeError exception.
        // ###TODO: accept more time zones###
        if (tz !== 'UTC') throw new RangeError('timeZone is not supported.');
    }

    // 17. Set the [[timeZone]] internal property of dateTimeFormat to tz.
    internal['[[timeZone]]'] = tz;

    // 18. Let opt be a new Record.
    opt = new Record();

    // 19. For each row of Table 3, except the header row, do:
    for (var prop in dateTimeComponents) {
        if (!hop.call(dateTimeComponents, prop)) continue;

        // 20. Let prop be the name given in the Property column of the row.
        // 21. Let value be the result of calling the GetOption abstract operation,
        //     passing as argument options, the name given in the Property column of the
        //     row, "string", a List containing the strings given in the Values column of
        //     the row, and undefined.
        var value = GetOption(options, prop, 'string', dateTimeComponents[prop]);

        // 22. Set opt.[[<prop>]] to value.
        opt['[[' + prop + ']]'] = value;
    }

    // Assigned a value below
    var bestFormat = void 0;

    // 23. Let dataLocaleData be the result of calling the [[Get]] internal method of
    //     localeData with argument dataLocale.
    var dataLocaleData = localeData[dataLocale];

    // 24. Let formats be the result of calling the [[Get]] internal method of
    //     dataLocaleData with argument "formats".
    //     Note: we process the CLDR formats into the spec'd structure
    var formats = ToDateTimeFormats(dataLocaleData.formats);

    // 25. Let matcher be the result of calling the GetOption abstract operation with
    //     arguments options, "formatMatcher", "string", a List containing the two String
    //     values "basic" and "best fit", and "best fit".
    matcher = GetOption(options, 'formatMatcher', 'string', new List('basic', 'best fit'), 'best fit');

    // Optimization: caching the processed formats as a one time operation by
    // replacing the initial structure from localeData
    dataLocaleData.formats = formats;

    // 26. If matcher is "basic", then
    if (matcher === 'basic') {
        // 27. Let bestFormat be the result of calling the BasicFormatMatcher abstract
        //     operation (defined below) with opt and formats.
        bestFormat = BasicFormatMatcher(opt, formats);

        // 28. Else
    } else {
        {
            // diverging
            var _hr = GetOption(options, 'hour12', 'boolean' /*, undefined, undefined*/);
            opt.hour12 = _hr === undefined ? dataLocaleData.hour12 : _hr;
        }
        // 29. Let bestFormat be the result of calling the BestFitFormatMatcher
        //     abstract operation (defined below) with opt and formats.
        bestFormat = BestFitFormatMatcher(opt, formats);
    }

    // 30. For each row in Table 3, except the header row, do
    for (var _prop in dateTimeComponents) {
        if (!hop.call(dateTimeComponents, _prop)) continue;

        // a. Let prop be the name given in the Property column of the row.
        // b. Let pDesc be the result of calling the [[GetOwnProperty]] internal method of
        //    bestFormat with argument prop.
        // c. If pDesc is not undefined, then
        if (hop.call(bestFormat, _prop)) {
            // i. Let p be the result of calling the [[Get]] internal method of bestFormat
            //    with argument prop.
            var p = bestFormat[_prop];
            {
                // diverging
                p = bestFormat._ && hop.call(bestFormat._, _prop) ? bestFormat._[_prop] : p;
            }

            // ii. Set the [[<prop>]] internal property of dateTimeFormat to p.
            internal['[[' + _prop + ']]'] = p;
        }
    }

    var pattern = void 0; // Assigned a value below

    // 31. Let hr12 be the result of calling the GetOption abstract operation with
    //     arguments options, "hour12", "boolean", undefined, and undefined.
    var hr12 = GetOption(options, 'hour12', 'boolean' /*, undefined, undefined*/);

    // 32. If dateTimeFormat has an internal property [[hour]], then
    if (internal['[[hour]]']) {
        // a. If hr12 is undefined, then let hr12 be the result of calling the [[Get]]
        //    internal method of dataLocaleData with argument "hour12".
        hr12 = hr12 === undefined ? dataLocaleData.hour12 : hr12;

        // b. Set the [[hour12]] internal property of dateTimeFormat to hr12.
        internal['[[hour12]]'] = hr12;

        // c. If hr12 is true, then
        if (hr12 === true) {
            // i. Let hourNo0 be the result of calling the [[Get]] internal method of
            //    dataLocaleData with argument "hourNo0".
            var hourNo0 = dataLocaleData.hourNo0;

            // ii. Set the [[hourNo0]] internal property of dateTimeFormat to hourNo0.
            internal['[[hourNo0]]'] = hourNo0;

            // iii. Let pattern be the result of calling the [[Get]] internal method of
            //      bestFormat with argument "pattern12".
            pattern = bestFormat.pattern12;
        }

        // d. Else
        else
            // i. Let pattern be the result of calling the [[Get]] internal method of
            //    bestFormat with argument "pattern".
            pattern = bestFormat.pattern;
    }

    // 33. Else
    else
        // a. Let pattern be the result of calling the [[Get]] internal method of
        //    bestFormat with argument "pattern".
        pattern = bestFormat.pattern;

    // 34. Set the [[pattern]] internal property of dateTimeFormat to pattern.
    internal['[[pattern]]'] = pattern;

    // 35. Set the [[boundFormat]] internal property of dateTimeFormat to undefined.
    internal['[[boundFormat]]'] = undefined;

    // 36. Set the [[initializedDateTimeFormat]] internal property of dateTimeFormat to
    //     true.
    internal['[[initializedDateTimeFormat]]'] = true;

    // In ES3, we need to pre-bind the format() function
    if (es3) dateTimeFormat.format = GetFormatDateTime.call(dateTimeFormat);

    // Restore the RegExp properties
    regexpRestore();

    // Return the newly initialised object
    return dateTimeFormat;
}

/**
 * Several DateTimeFormat algorithms use values from the following table, which provides
 * property names and allowable values for the components of date and time formats:
 */
var dateTimeComponents = {
    weekday: ["narrow", "short", "long"],
    era: ["narrow", "short", "long"],
    year: ["2-digit", "numeric"],
    month: ["2-digit", "numeric", "narrow", "short", "long"],
    day: ["2-digit", "numeric"],
    hour: ["2-digit", "numeric"],
    minute: ["2-digit", "numeric"],
    second: ["2-digit", "numeric"],
    timeZoneName: ["short", "long"]
};

/**
 * When the ToDateTimeOptions abstract operation is called with arguments options,
 * required, and defaults, the following steps are taken:
 */
function ToDateTimeFormats(formats) {
    if (Object.prototype.toString.call(formats) === '[object Array]') {
        return formats;
    }
    return createDateTimeFormats(formats);
}

/**
 * When the ToDateTimeOptions abstract operation is called with arguments options,
 * required, and defaults, the following steps are taken:
 */
function ToDateTimeOptions(options, required, defaults) {
    // 1. If options is undefined, then let options be null, else let options be
    //    ToObject(options).
    if (options === undefined) options = null;else {
        // (#12) options needs to be a Record, but it also needs to inherit properties
        var opt2 = toObject(options);
        options = new Record();

        for (var k in opt2) {
            options[k] = opt2[k];
        }
    }

    // 2. Let create be the standard built-in function object defined in ES5, 15.2.3.5.
    var create = objCreate;

    // 3. Let options be the result of calling the [[Call]] internal method of create with
    //    undefined as the this value and an argument list containing the single item
    //    options.
    options = create(options);

    // 4. Let needDefaults be true.
    var needDefaults = true;

    // 5. If required is "date" or "any", then
    if (required === 'date' || required === 'any') {
        // a. For each of the property names "weekday", "year", "month", "day":
        // i. If the result of calling the [[Get]] internal method of options with the
        //    property name is not undefined, then let needDefaults be false.
        if (options.weekday !== undefined || options.year !== undefined || options.month !== undefined || options.day !== undefined) needDefaults = false;
    }

    // 6. If required is "time" or "any", then
    if (required === 'time' || required === 'any') {
        // a. For each of the property names "hour", "minute", "second":
        // i. If the result of calling the [[Get]] internal method of options with the
        //    property name is not undefined, then let needDefaults be false.
        if (options.hour !== undefined || options.minute !== undefined || options.second !== undefined) needDefaults = false;
    }

    // 7. If needDefaults is true and defaults is either "date" or "all", then
    if (needDefaults && (defaults === 'date' || defaults === 'all'))
        // a. For each of the property names "year", "month", "day":
        // i. Call the [[DefineOwnProperty]] internal method of options with the
        //    property name, Property Descriptor {[[Value]]: "numeric", [[Writable]]:
        //    true, [[Enumerable]]: true, [[Configurable]]: true}, and false.
        options.year = options.month = options.day = 'numeric';

    // 8. If needDefaults is true and defaults is either "time" or "all", then
    if (needDefaults && (defaults === 'time' || defaults === 'all'))
        // a. For each of the property names "hour", "minute", "second":
        // i. Call the [[DefineOwnProperty]] internal method of options with the
        //    property name, Property Descriptor {[[Value]]: "numeric", [[Writable]]:
        //    true, [[Enumerable]]: true, [[Configurable]]: true}, and false.
        options.hour = options.minute = options.second = 'numeric';

    // 9. Return options.
    return options;
}

/**
 * When the BasicFormatMatcher abstract operation is called with two arguments options and
 * formats, the following steps are taken:
 */
function BasicFormatMatcher(options, formats) {
    // 1. Let removalPenalty be 120.
    var removalPenalty = 120;

    // 2. Let additionPenalty be 20.
    var additionPenalty = 20;

    // 3. Let longLessPenalty be 8.
    var longLessPenalty = 8;

    // 4. Let longMorePenalty be 6.
    var longMorePenalty = 6;

    // 5. Let shortLessPenalty be 6.
    var shortLessPenalty = 6;

    // 6. Let shortMorePenalty be 3.
    var shortMorePenalty = 3;

    // 7. Let bestScore be -Infinity.
    var bestScore = -Infinity;

    // 8. Let bestFormat be undefined.
    var bestFormat = void 0;

    // 9. Let i be 0.
    var i = 0;

    // 10. Assert: formats is an Array object.

    // 11. Let len be the result of calling the [[Get]] internal method of formats with argument "length".
    var len = formats.length;

    // 12. Repeat while i < len:
    while (i < len) {
        // a. Let format be the result of calling the [[Get]] internal method of formats with argument ToString(i).
        var format = formats[i];

        // b. Let score be 0.
        var score = 0;

        // c. For each property shown in Table 3:
        for (var property in dateTimeComponents) {
            if (!hop.call(dateTimeComponents, property)) continue;

            // i. Let optionsProp be options.[[<property>]].
            var optionsProp = options['[[' + property + ']]'];

            // ii. Let formatPropDesc be the result of calling the [[GetOwnProperty]] internal method of format
            //     with argument property.
            // iii. If formatPropDesc is not undefined, then
            //     1. Let formatProp be the result of calling the [[Get]] internal method of format with argument property.
            var formatProp = hop.call(format, property) ? format[property] : undefined;

            // iv. If optionsProp is undefined and formatProp is not undefined, then decrease score by
            //     additionPenalty.
            if (optionsProp === undefined && formatProp !== undefined) score -= additionPenalty;

            // v. Else if optionsProp is not undefined and formatProp is undefined, then decrease score by
            //    removalPenalty.
            else if (optionsProp !== undefined && formatProp === undefined) score -= removalPenalty;

                // vi. Else
                else {
                        // 1. Let values be the array ["2-digit", "numeric", "narrow", "short",
                        //    "long"].
                        var values = ['2-digit', 'numeric', 'narrow', 'short', 'long'];

                        // 2. Let optionsPropIndex be the index of optionsProp within values.
                        var optionsPropIndex = arrIndexOf.call(values, optionsProp);

                        // 3. Let formatPropIndex be the index of formatProp within values.
                        var formatPropIndex = arrIndexOf.call(values, formatProp);

                        // 4. Let delta be max(min(formatPropIndex - optionsPropIndex, 2), -2).
                        var delta = Math.max(Math.min(formatPropIndex - optionsPropIndex, 2), -2);

                        // 5. If delta = 2, decrease score by longMorePenalty.
                        if (delta === 2) score -= longMorePenalty;

                        // 6. Else if delta = 1, decrease score by shortMorePenalty.
                        else if (delta === 1) score -= shortMorePenalty;

                            // 7. Else if delta = -1, decrease score by shortLessPenalty.
                            else if (delta === -1) score -= shortLessPenalty;

                                // 8. Else if delta = -2, decrease score by longLessPenalty.
                                else if (delta === -2) score -= longLessPenalty;
                    }
        }

        // d. If score > bestScore, then
        if (score > bestScore) {
            // i. Let bestScore be score.
            bestScore = score;

            // ii. Let bestFormat be format.
            bestFormat = format;
        }

        // e. Increase i by 1.
        i++;
    }

    // 13. Return bestFormat.
    return bestFormat;
}

/**
 * When the BestFitFormatMatcher abstract operation is called with two arguments options
 * and formats, it performs implementation dependent steps, which should return a set of
 * component representations that a typical user of the selected locale would perceive as
 * at least as good as the one returned by BasicFormatMatcher.
 *
 * This polyfill defines the algorithm to be the same as BasicFormatMatcher,
 * with the addition of bonus points awarded where the requested format is of
 * the same data type as the potentially matching format.
 *
 * This algo relies on the concept of closest distance matching described here:
 * http://unicode.org/reports/tr35/tr35-dates.html#Matching_Skeletons
 * Typically a “best match” is found using a closest distance match, such as:
 *
 * Symbols requesting a best choice for the locale are replaced.
 *      j → one of {H, k, h, K}; C → one of {a, b, B}
 * -> Covered by cldr.js matching process
 *
 * For fields with symbols representing the same type (year, month, day, etc):
 *     Most symbols have a small distance from each other.
 *         M ≅ L; E ≅ c; a ≅ b ≅ B; H ≅ k ≅ h ≅ K; ...
 *     -> Covered by cldr.js matching process
 *
 *     Width differences among fields, other than those marking text vs numeric, are given small distance from each other.
 *         MMM ≅ MMMM
 *         MM ≅ M
 *     Numeric and text fields are given a larger distance from each other.
 *         MMM ≈ MM
 *     Symbols representing substantial differences (week of year vs week of month) are given much larger a distances from each other.
 *         d ≋ D; ...
 *     Missing or extra fields cause a match to fail. (But see Missing Skeleton Fields).
 *
 *
 * For example,
 *
 *     { month: 'numeric', day: 'numeric' }
 *
 * should match
 *
 *     { month: '2-digit', day: '2-digit' }
 *
 * rather than
 *
 *     { month: 'short', day: 'numeric' }
 *
 * This makes sense because a user requesting a formatted date with numeric parts would
 * not expect to see the returned format containing narrow, short or long part names
 */
function BestFitFormatMatcher(options, formats) {
    /** Diverging: this block implements the hack for single property configuration, eg.:
     *
     *      `new Intl.DateTimeFormat('en', {day: 'numeric'})`
     *
     * should produce a single digit with the day of the month. This is needed because
     * CLDR `availableFormats` data structure doesn't cover these cases.
     */
    {
        var optionsPropNames = [];
        for (var property in dateTimeComponents) {
            if (!hop.call(dateTimeComponents, property)) continue;

            if (options['[[' + property + ']]'] !== undefined) {
                optionsPropNames.push(property);
            }
        }
        if (optionsPropNames.length === 1) {
            var _bestFormat = generateSyntheticFormat(optionsPropNames[0], options['[[' + optionsPropNames[0] + ']]']);
            if (_bestFormat) {
                return _bestFormat;
            }
        }
    }

    // 1. Let removalPenalty be 120.
    var removalPenalty = 120;

    // 2. Let additionPenalty be 20.
    var additionPenalty = 20;

    // 3. Let longLessPenalty be 8.
    var longLessPenalty = 8;

    // 4. Let longMorePenalty be 6.
    var longMorePenalty = 6;

    // 5. Let shortLessPenalty be 6.
    var shortLessPenalty = 6;

    // 6. Let shortMorePenalty be 3.
    var shortMorePenalty = 3;

    var patternPenalty = 2;

    var hour12Penalty = 1;

    // 7. Let bestScore be -Infinity.
    var bestScore = -Infinity;

    // 8. Let bestFormat be undefined.
    var bestFormat = void 0;

    // 9. Let i be 0.
    var i = 0;

    // 10. Assert: formats is an Array object.

    // 11. Let len be the result of calling the [[Get]] internal method of formats with argument "length".
    var len = formats.length;

    // 12. Repeat while i < len:
    while (i < len) {
        // a. Let format be the result of calling the [[Get]] internal method of formats with argument ToString(i).
        var format = formats[i];

        // b. Let score be 0.
        var score = 0;

        // c. For each property shown in Table 3:
        for (var _property in dateTimeComponents) {
            if (!hop.call(dateTimeComponents, _property)) continue;

            // i. Let optionsProp be options.[[<property>]].
            var optionsProp = options['[[' + _property + ']]'];

            // ii. Let formatPropDesc be the result of calling the [[GetOwnProperty]] internal method of format
            //     with argument property.
            // iii. If formatPropDesc is not undefined, then
            //     1. Let formatProp be the result of calling the [[Get]] internal method of format with argument property.
            var formatProp = hop.call(format, _property) ? format[_property] : undefined;

            // Diverging: using the default properties produced by the pattern/skeleton
            // to match it with user options, and apply a penalty
            var patternProp = hop.call(format._, _property) ? format._[_property] : undefined;
            if (optionsProp !== patternProp) {
                score -= patternPenalty;
            }

            // iv. If optionsProp is undefined and formatProp is not undefined, then decrease score by
            //     additionPenalty.
            if (optionsProp === undefined && formatProp !== undefined) score -= additionPenalty;

            // v. Else if optionsProp is not undefined and formatProp is undefined, then decrease score by
            //    removalPenalty.
            else if (optionsProp !== undefined && formatProp === undefined) score -= removalPenalty;

                // vi. Else
                else {
                        // 1. Let values be the array ["2-digit", "numeric", "narrow", "short",
                        //    "long"].
                        var values = ['2-digit', 'numeric', 'narrow', 'short', 'long'];

                        // 2. Let optionsPropIndex be the index of optionsProp within values.
                        var optionsPropIndex = arrIndexOf.call(values, optionsProp);

                        // 3. Let formatPropIndex be the index of formatProp within values.
                        var formatPropIndex = arrIndexOf.call(values, formatProp);

                        // 4. Let delta be max(min(formatPropIndex - optionsPropIndex, 2), -2).
                        var delta = Math.max(Math.min(formatPropIndex - optionsPropIndex, 2), -2);

                        {
                            // diverging from spec
                            // When the bestFit argument is true, subtract additional penalty where data types are not the same
                            if (formatPropIndex <= 1 && optionsPropIndex >= 2 || formatPropIndex >= 2 && optionsPropIndex <= 1) {
                                // 5. If delta = 2, decrease score by longMorePenalty.
                                if (delta > 0) score -= longMorePenalty;else if (delta < 0) score -= longLessPenalty;
                            } else {
                                // 5. If delta = 2, decrease score by longMorePenalty.
                                if (delta > 1) score -= shortMorePenalty;else if (delta < -1) score -= shortLessPenalty;
                            }
                        }
                    }
        }

        {
            // diverging to also take into consideration differences between 12 or 24 hours
            // which is special for the best fit only.
            if (format._.hour12 !== options.hour12) {
                score -= hour12Penalty;
            }
        }

        // d. If score > bestScore, then
        if (score > bestScore) {
            // i. Let bestScore be score.
            bestScore = score;
            // ii. Let bestFormat be format.
            bestFormat = format;
        }

        // e. Increase i by 1.
        i++;
    }

    // 13. Return bestFormat.
    return bestFormat;
}

/* 12.2.3 */internals.DateTimeFormat = {
    '[[availableLocales]]': [],
    '[[relevantExtensionKeys]]': ['ca', 'nu'],
    '[[localeData]]': {}
};

/**
 * When the supportedLocalesOf method of Intl.DateTimeFormat is called, the
 * following steps are taken:
 */
/* 12.2.2 */
defineProperty(Intl.DateTimeFormat, 'supportedLocalesOf', {
    configurable: true,
    writable: true,
    value: fnBind.call(function (locales) {
        // Bound functions only have the `this` value altered if being used as a constructor,
        // this lets us imitate a native function that has no constructor
        if (!hop.call(this, '[[availableLocales]]')) throw new TypeError('supportedLocalesOf() is not a constructor');

        // Create an object whose props can be used to restore the values of RegExp props
        var regexpRestore = createRegExpRestore(),


        // 1. If options is not provided, then let options be undefined.
        options = arguments[1],


        // 2. Let availableLocales be the value of the [[availableLocales]] internal
        //    property of the standard built-in object that is the initial value of
        //    Intl.NumberFormat.

        availableLocales = this['[[availableLocales]]'],


        // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
        //    abstract operation (defined in 9.2.1) with argument locales.
        requestedLocales = CanonicalizeLocaleList(locales);

        // Restore the RegExp properties
        regexpRestore();

        // 4. Return the result of calling the SupportedLocales abstract operation
        //    (defined in 9.2.8) with arguments availableLocales, requestedLocales,
        //    and options.
        return SupportedLocales(availableLocales, requestedLocales, options);
    }, internals.NumberFormat)
});

/**
 * This named accessor property returns a function that formats a number
 * according to the effective locale and the formatting options of this
 * DateTimeFormat object.
 */
/* 12.3.2 */defineProperty(Intl.DateTimeFormat.prototype, 'format', {
    configurable: true,
    get: GetFormatDateTime
});

function GetFormatDateTime() {
    var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

    // Satisfy test 12.3_b
    if (!internal || !internal['[[initializedDateTimeFormat]]']) throw new TypeError('`this` value for format() is not an initialized Intl.DateTimeFormat object.');

    // The value of the [[Get]] attribute is a function that takes the following
    // steps:

    // 1. If the [[boundFormat]] internal property of this DateTimeFormat object
    //    is undefined, then:
    if (internal['[[boundFormat]]'] === undefined) {
        // a. Let F be a Function object, with internal properties set as
        //    specified for built-in functions in ES5, 15, or successor, and the
        //    length property set to 0, that takes the argument date and
        //    performs the following steps:
        var F = function F() {
            var date = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            //   i. If date is not provided or is undefined, then let x be the
            //      result as if by the expression Date.now() where Date.now is
            //      the standard built-in function defined in ES5, 15.9.4.4.
            //  ii. Else let x be ToNumber(date).
            // iii. Return the result of calling the FormatDateTime abstract
            //      operation (defined below) with arguments this and x.
            var x = date === undefined ? Date.now() : toNumber(date);
            return FormatDateTime(this, x);
        };
        // b. Let bind be the standard built-in function object defined in ES5,
        //    15.3.4.5.
        // c. Let bf be the result of calling the [[Call]] internal method of
        //    bind with F as the this value and an argument list containing
        //    the single item this.
        var bf = fnBind.call(F, this);
        // d. Set the [[boundFormat]] internal property of this NumberFormat
        //    object to bf.
        internal['[[boundFormat]]'] = bf;
    }
    // Return the value of the [[boundFormat]] internal property of this
    // NumberFormat object.
    return internal['[[boundFormat]]'];
}

function formatToParts$1() {
    var date = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

    var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

    if (!internal || !internal['[[initializedDateTimeFormat]]']) throw new TypeError('`this` value for formatToParts() is not an initialized Intl.DateTimeFormat object.');

    var x = date === undefined ? Date.now() : toNumber(date);
    return FormatToPartsDateTime(this, x);
}

Object.defineProperty(Intl.DateTimeFormat.prototype, 'formatToParts', {
    enumerable: false,
    writable: true,
    configurable: true,
    value: formatToParts$1
});

function CreateDateTimeParts(dateTimeFormat, x) {
    // 1. If x is not a finite Number, then throw a RangeError exception.
    if (!isFinite(x)) throw new RangeError('Invalid valid date passed to format');

    var internal = dateTimeFormat.__getInternalProperties(secret);

    // Creating restore point for properties on the RegExp object... please wait
    /* let regexpRestore = */createRegExpRestore(); // ###TODO: review this

    // 2. Let locale be the value of the [[locale]] internal property of dateTimeFormat.
    var locale = internal['[[locale]]'];

    // 3. Let nf be the result of creating a new NumberFormat object as if by the
    // expression new Intl.NumberFormat([locale], {useGrouping: false}) where
    // Intl.NumberFormat is the standard built-in constructor defined in 11.1.3.
    var nf = new Intl.NumberFormat([locale], { useGrouping: false });

    // 4. Let nf2 be the result of creating a new NumberFormat object as if by the
    // expression new Intl.NumberFormat([locale], {minimumIntegerDigits: 2, useGrouping:
    // false}) where Intl.NumberFormat is the standard built-in constructor defined in
    // 11.1.3.
    var nf2 = new Intl.NumberFormat([locale], { minimumIntegerDigits: 2, useGrouping: false });

    // 5. Let tm be the result of calling the ToLocalTime abstract operation (defined
    // below) with x, the value of the [[calendar]] internal property of dateTimeFormat,
    // and the value of the [[timeZone]] internal property of dateTimeFormat.
    var tm = ToLocalTime(x, internal['[[calendar]]'], internal['[[timeZone]]']);

    // 6. Let result be the value of the [[pattern]] internal property of dateTimeFormat.
    var pattern = internal['[[pattern]]'];

    // 7.
    var result = new List();

    // 8.
    var index = 0;

    // 9.
    var beginIndex = pattern.indexOf('{');

    // 10.
    var endIndex = 0;

    // Need the locale minus any extensions
    var dataLocale = internal['[[dataLocale]]'];

    // Need the calendar data from CLDR
    var localeData = internals.DateTimeFormat['[[localeData]]'][dataLocale].calendars;
    var ca = internal['[[calendar]]'];

    // 11.
    while (beginIndex !== -1) {
        var fv = void 0;
        // a.
        endIndex = pattern.indexOf('}', beginIndex);
        // b.
        if (endIndex === -1) {
            throw new Error('Unclosed pattern');
        }
        // c.
        if (beginIndex > index) {
            arrPush.call(result, {
                type: 'literal',
                value: pattern.substring(index, beginIndex)
            });
        }
        // d.
        var p = pattern.substring(beginIndex + 1, endIndex);
        // e.
        if (dateTimeComponents.hasOwnProperty(p)) {
            //   i. Let f be the value of the [[<p>]] internal property of dateTimeFormat.
            var f = internal['[[' + p + ']]'];
            //  ii. Let v be the value of tm.[[<p>]].
            var v = tm['[[' + p + ']]'];
            // iii. If p is "year" and v ≤ 0, then let v be 1 - v.
            if (p === 'year' && v <= 0) {
                v = 1 - v;
            }
            //  iv. If p is "month", then increase v by 1.
            else if (p === 'month') {
                    v++;
                }
                //   v. If p is "hour" and the value of the [[hour12]] internal property of
                //      dateTimeFormat is true, then
                else if (p === 'hour' && internal['[[hour12]]'] === true) {
                        // 1. Let v be v modulo 12.
                        v = v % 12;
                        // 2. If v is 0 and the value of the [[hourNo0]] internal property of
                        //    dateTimeFormat is true, then let v be 12.
                        if (v === 0 && internal['[[hourNo0]]'] === true) {
                            v = 12;
                        }
                    }

            //  vi. If f is "numeric", then
            if (f === 'numeric') {
                // 1. Let fv be the result of calling the FormatNumber abstract operation
                //    (defined in 11.3.2) with arguments nf and v.
                fv = FormatNumber(nf, v);
            }
            // vii. Else if f is "2-digit", then
            else if (f === '2-digit') {
                    // 1. Let fv be the result of calling the FormatNumber abstract operation
                    //    with arguments nf2 and v.
                    fv = FormatNumber(nf2, v);
                    // 2. If the length of fv is greater than 2, let fv be the substring of fv
                    //    containing the last two characters.
                    if (fv.length > 2) {
                        fv = fv.slice(-2);
                    }
                }
                // viii. Else if f is "narrow", "short", or "long", then let fv be a String
                //     value representing f in the desired form; the String value depends upon
                //     the implementation and the effective locale and calendar of
                //     dateTimeFormat. If p is "month", then the String value may also depend
                //     on whether dateTimeFormat has a [[day]] internal property. If p is
                //     "timeZoneName", then the String value may also depend on the value of
                //     the [[inDST]] field of tm.
                else if (f in dateWidths) {
                        switch (p) {
                            case 'month':
                                fv = resolveDateString(localeData, ca, 'months', f, tm['[[' + p + ']]']);
                                break;

                            case 'weekday':
                                try {
                                    fv = resolveDateString(localeData, ca, 'days', f, tm['[[' + p + ']]']);
                                    // fv = resolveDateString(ca.days, f)[tm['[['+ p +']]']];
                                } catch (e) {
                                    throw new Error('Could not find weekday data for locale ' + locale);
                                }
                                break;

                            case 'timeZoneName':
                                fv = ''; // ###TODO
                                break;

                            case 'era':
                                try {
                                    fv = resolveDateString(localeData, ca, 'eras', f, tm['[[' + p + ']]']);
                                } catch (e) {
                                    throw new Error('Could not find era data for locale ' + locale);
                                }
                                break;

                            default:
                                fv = tm['[[' + p + ']]'];
                        }
                    }
            // ix
            arrPush.call(result, {
                type: p,
                value: fv
            });
            // f.
        } else if (p === 'ampm') {
            // i.
            var _v = tm['[[hour]]'];
            // ii./iii.
            fv = resolveDateString(localeData, ca, 'dayPeriods', _v > 11 ? 'pm' : 'am', null);
            // iv.
            arrPush.call(result, {
                type: 'dayPeriod',
                value: fv
            });
            // g.
        } else {
            arrPush.call(result, {
                type: 'literal',
                value: pattern.substring(beginIndex, endIndex + 1)
            });
        }
        // h.
        index = endIndex + 1;
        // i.
        beginIndex = pattern.indexOf('{', index);
    }
    // 12.
    if (endIndex < pattern.length - 1) {
        arrPush.call(result, {
            type: 'literal',
            value: pattern.substr(endIndex + 1)
        });
    }
    // 13.
    return result;
}

/**
 * When the FormatDateTime abstract operation is called with arguments dateTimeFormat
 * (which must be an object initialized as a DateTimeFormat) and x (which must be a Number
 * value), it returns a String value representing x (interpreted as a time value as
 * specified in ES5, 15.9.1.1) according to the effective locale and the formatting
 * options of dateTimeFormat.
 */
function FormatDateTime(dateTimeFormat, x) {
    var parts = CreateDateTimeParts(dateTimeFormat, x);
    var result = '';

    for (var i = 0; parts.length > i; i++) {
        var part = parts[i];
        result += part.value;
    }
    return result;
}

function FormatToPartsDateTime(dateTimeFormat, x) {
    var parts = CreateDateTimeParts(dateTimeFormat, x);
    var result = [];
    for (var i = 0; parts.length > i; i++) {
        var part = parts[i];
        result.push({
            type: part.type,
            value: part.value
        });
    }
    return result;
}

/**
 * When the ToLocalTime abstract operation is called with arguments date, calendar, and
 * timeZone, the following steps are taken:
 */
function ToLocalTime(date, calendar, timeZone) {
    // 1. Apply calendrical calculations on date for the given calendar and time zone to
    //    produce weekday, era, year, month, day, hour, minute, second, and inDST values.
    //    The calculations should use best available information about the specified
    //    calendar and time zone. If the calendar is "gregory", then the calculations must
    //    match the algorithms specified in ES5, 15.9.1, except that calculations are not
    //    bound by the restrictions on the use of best available information on time zones
    //    for local time zone adjustment and daylight saving time adjustment imposed by
    //    ES5, 15.9.1.7 and 15.9.1.8.
    // ###TODO###
    var d = new Date(date),
        m = 'get' + (timeZone || '');

    // 2. Return a Record with fields [[weekday]], [[era]], [[year]], [[month]], [[day]],
    //    [[hour]], [[minute]], [[second]], and [[inDST]], each with the corresponding
    //    calculated value.
    return new Record({
        '[[weekday]]': d[m + 'Day'](),
        '[[era]]': +(d[m + 'FullYear']() >= 0),
        '[[year]]': d[m + 'FullYear'](),
        '[[month]]': d[m + 'Month'](),
        '[[day]]': d[m + 'Date'](),
        '[[hour]]': d[m + 'Hours'](),
        '[[minute]]': d[m + 'Minutes'](),
        '[[second]]': d[m + 'Seconds'](),
        '[[inDST]]': false // ###TODO###
    });
}

/**
 * The function returns a new object whose properties and attributes are set as if
 * constructed by an object literal assigning to each of the following properties the
 * value of the corresponding internal property of this DateTimeFormat object (see 12.4):
 * locale, calendar, numberingSystem, timeZone, hour12, weekday, era, year, month, day,
 * hour, minute, second, and timeZoneName. Properties whose corresponding internal
 * properties are not present are not assigned.
 */
/* 12.3.3 */defineProperty(Intl.DateTimeFormat.prototype, 'resolvedOptions', {
    writable: true,
    configurable: true,
    value: function value() {
        var prop = void 0,
            descs = new Record(),
            props = ['locale', 'calendar', 'numberingSystem', 'timeZone', 'hour12', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName'],
            internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

        // Satisfy test 12.3_b
        if (!internal || !internal['[[initializedDateTimeFormat]]']) throw new TypeError('`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.');

        for (var i = 0, max = props.length; i < max; i++) {
            if (hop.call(internal, prop = '[[' + props[i] + ']]')) descs[props[i]] = { value: internal[prop], writable: true, configurable: true, enumerable: true };
        }

        return objCreate({}, descs);
    }
});

var ls = Intl.__localeSensitiveProtos = {
    Number: {},
    Date: {}
};

/**
 * When the toLocaleString method is called with optional arguments locales and options,
 * the following steps are taken:
 */
/* 13.2.1 */ls.Number.toLocaleString = function () {
    // Satisfy test 13.2.1_1
    if (Object.prototype.toString.call(this) !== '[object Number]') throw new TypeError('`this` value must be a number for Number.prototype.toLocaleString()');

    // 1. Let x be this Number value (as defined in ES5, 15.7.4).
    // 2. If locales is not provided, then let locales be undefined.
    // 3. If options is not provided, then let options be undefined.
    // 4. Let numberFormat be the result of creating a new object as if by the
    //    expression new Intl.NumberFormat(locales, options) where
    //    Intl.NumberFormat is the standard built-in constructor defined in 11.1.3.
    // 5. Return the result of calling the FormatNumber abstract operation
    //    (defined in 11.3.2) with arguments numberFormat and x.
    return FormatNumber(new NumberFormatConstructor(arguments[0], arguments[1]), this);
};

/**
 * When the toLocaleString method is called with optional arguments locales and options,
 * the following steps are taken:
 */
/* 13.3.1 */ls.Date.toLocaleString = function () {
    // Satisfy test 13.3.0_1
    if (Object.prototype.toString.call(this) !== '[object Date]') throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleString()');

    // 1. Let x be this time value (as defined in ES5, 15.9.5).
    var x = +this;

    // 2. If x is NaN, then return "Invalid Date".
    if (isNaN(x)) return 'Invalid Date';

    // 3. If locales is not provided, then let locales be undefined.
    var locales = arguments[0];

    // 4. If options is not provided, then let options be undefined.
    var options = arguments[1];

    // 5. Let options be the result of calling the ToDateTimeOptions abstract
    //    operation (defined in 12.1.1) with arguments options, "any", and "all".
    options = ToDateTimeOptions(options, 'any', 'all');

    // 6. Let dateTimeFormat be the result of creating a new object as if by the
    //    expression new Intl.DateTimeFormat(locales, options) where
    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
    var dateTimeFormat = new DateTimeFormatConstructor(locales, options);

    // 7. Return the result of calling the FormatDateTime abstract operation (defined
    //    in 12.3.2) with arguments dateTimeFormat and x.
    return FormatDateTime(dateTimeFormat, x);
};

/**
 * When the toLocaleDateString method is called with optional arguments locales and
 * options, the following steps are taken:
 */
/* 13.3.2 */ls.Date.toLocaleDateString = function () {
    // Satisfy test 13.3.0_1
    if (Object.prototype.toString.call(this) !== '[object Date]') throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleDateString()');

    // 1. Let x be this time value (as defined in ES5, 15.9.5).
    var x = +this;

    // 2. If x is NaN, then return "Invalid Date".
    if (isNaN(x)) return 'Invalid Date';

    // 3. If locales is not provided, then let locales be undefined.
    var locales = arguments[0],


    // 4. If options is not provided, then let options be undefined.
    options = arguments[1];

    // 5. Let options be the result of calling the ToDateTimeOptions abstract
    //    operation (defined in 12.1.1) with arguments options, "date", and "date".
    options = ToDateTimeOptions(options, 'date', 'date');

    // 6. Let dateTimeFormat be the result of creating a new object as if by the
    //    expression new Intl.DateTimeFormat(locales, options) where
    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
    var dateTimeFormat = new DateTimeFormatConstructor(locales, options);

    // 7. Return the result of calling the FormatDateTime abstract operation (defined
    //    in 12.3.2) with arguments dateTimeFormat and x.
    return FormatDateTime(dateTimeFormat, x);
};

/**
 * When the toLocaleTimeString method is called with optional arguments locales and
 * options, the following steps are taken:
 */
/* 13.3.3 */ls.Date.toLocaleTimeString = function () {
    // Satisfy test 13.3.0_1
    if (Object.prototype.toString.call(this) !== '[object Date]') throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleTimeString()');

    // 1. Let x be this time value (as defined in ES5, 15.9.5).
    var x = +this;

    // 2. If x is NaN, then return "Invalid Date".
    if (isNaN(x)) return 'Invalid Date';

    // 3. If locales is not provided, then let locales be undefined.
    var locales = arguments[0];

    // 4. If options is not provided, then let options be undefined.
    var options = arguments[1];

    // 5. Let options be the result of calling the ToDateTimeOptions abstract
    //    operation (defined in 12.1.1) with arguments options, "time", and "time".
    options = ToDateTimeOptions(options, 'time', 'time');

    // 6. Let dateTimeFormat be the result of creating a new object as if by the
    //    expression new Intl.DateTimeFormat(locales, options) where
    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
    var dateTimeFormat = new DateTimeFormatConstructor(locales, options);

    // 7. Return the result of calling the FormatDateTime abstract operation (defined
    //    in 12.3.2) with arguments dateTimeFormat and x.
    return FormatDateTime(dateTimeFormat, x);
};

defineProperty(Intl, '__applyLocaleSensitivePrototypes', {
    writable: true,
    configurable: true,
    value: function value() {
        defineProperty(Number.prototype, 'toLocaleString', { writable: true, configurable: true, value: ls.Number.toLocaleString });
        // Need this here for IE 8, to avoid the _DontEnum_ bug
        defineProperty(Date.prototype, 'toLocaleString', { writable: true, configurable: true, value: ls.Date.toLocaleString });

        for (var k in ls.Date) {
            if (hop.call(ls.Date, k)) defineProperty(Date.prototype, k, { writable: true, configurable: true, value: ls.Date[k] });
        }
    }
});

/**
 * Can't really ship a single script with data for hundreds of locales, so we provide
 * this __addLocaleData method as a means for the developer to add the data on an
 * as-needed basis
 */
defineProperty(Intl, '__addLocaleData', {
    value: function value(data) {
        if (!IsStructurallyValidLanguageTag(data.locale)) throw new Error("Object passed doesn't identify itself with a valid language tag");

        addLocaleData(data, data.locale);
    }
});

function addLocaleData(data, tag) {
    // Both NumberFormat and DateTimeFormat require number data, so throw if it isn't present
    if (!data.number) throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat");

    var locale = void 0,
        locales = [tag],
        parts = tag.split('-');

    // Create fallbacks for locale data with scripts, e.g. Latn, Hans, Vaii, etc
    if (parts.length > 2 && parts[1].length === 4) arrPush.call(locales, parts[0] + '-' + parts[2]);

    while (locale = arrShift.call(locales)) {
        // Add to NumberFormat internal properties as per 11.2.3
        arrPush.call(internals.NumberFormat['[[availableLocales]]'], locale);
        internals.NumberFormat['[[localeData]]'][locale] = data.number;

        // ...and DateTimeFormat internal properties as per 12.2.3
        if (data.date) {
            data.date.nu = data.number.nu;
            arrPush.call(internals.DateTimeFormat['[[availableLocales]]'], locale);
            internals.DateTimeFormat['[[localeData]]'][locale] = data.date;
        }
    }

    // If this is the first set of locale data added, make it the default
    if (defaultLocale === undefined) setDefaultLocale(tag);
}

defineProperty(Intl, '__disableRegExpRestore', {
    value: function value() {
        internals.disableRegExpRestore = true;
    }
});

module.exports = Intl;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuMzExMjQ4ZDljN2ZhMzVlNzZmNjEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2ludGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2ludGwvbGliL2NvcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3NlIGBJbnRsUG9seWZpbGxgIGFzIGdsb2JhbCB0byBhZGQgbG9jYWxlIGRhdGEgaW50byBydW50aW1lIGxhdGVyIG9uLlxuZ2xvYmFsLkludGxQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vbGliL2NvcmUuanMnKTtcblxuLy8gUmVxdWlyZSBhbGwgbG9jYWxlIGRhdGEgZm9yIGBJbnRsYC4gVGhpcyBtb2R1bGUgd2lsbCBiZVxuLy8gaWdub3JlZCB3aGVuIGJ1bmRsaW5nIGZvciB0aGUgYnJvd3NlciB3aXRoIEJyb3dzZXJpZnkvV2VicGFjay5cbnJlcXVpcmUoJy4vbG9jYWxlLWRhdGEvY29tcGxldGUuanMnKTtcblxuLy8gaGFjayB0byBleHBvcnQgdGhlIHBvbHlmaWxsIGFzIGdsb2JhbCBJbnRsIGlmIG5lZWRlZFxuaWYgKCFnbG9iYWwuSW50bCkge1xuICAgIGdsb2JhbC5JbnRsID0gZ2xvYmFsLkludGxQb2x5ZmlsbDtcbiAgICBnbG9iYWwuSW50bFBvbHlmaWxsLl9fYXBwbHlMb2NhbGVTZW5zaXRpdmVQcm90b3R5cGVzKCk7XG59XG5cbi8vIHByb3ZpZGluZyBhbiBpZGlvbWF0aWMgYXBpIGZvciB0aGUgbm9kZWpzIHZlcnNpb24gb2YgdGhpcyBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsLkludGxQb2x5ZmlsbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxudmFyIGpzeCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuZm9yICYmIFN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpIHx8IDB4ZWFjNztcbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVJhd1JlYWN0RWxlbWVudCh0eXBlLCBwcm9wcywga2V5LCBjaGlsZHJlbikge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzO1xuICAgIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAzO1xuXG4gICAgaWYgKCFwcm9wcyAmJiBjaGlsZHJlbkxlbmd0aCAhPT0gMCkge1xuICAgICAgcHJvcHMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMgJiYgZGVmYXVsdFByb3BzKSB7XG4gICAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXByb3BzKSB7XG4gICAgICBwcm9wcyA9IGRlZmF1bHRQcm9wcyB8fCB7fTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgM107XG4gICAgICB9XG5cbiAgICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBrZXk6IGtleSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6ICcnICsga2V5LFxuICAgICAgcmVmOiBudWxsLFxuICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgX293bmVyOiBudWxsXG4gICAgfTtcbiAgfTtcbn0oKTtcblxudmFyIGFzeW5jVG9HZW5lcmF0b3IgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2VuID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gc3RlcChrZXksIGFyZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcChcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGVwKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RlcChcIm5leHRcIik7XG4gICAgfSk7XG4gIH07XG59O1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgZGVmaW5lRW51bWVyYWJsZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqLCBkZXNjcykge1xuICBmb3IgKHZhciBrZXkgaW4gZGVzY3MpIHtcbiAgICB2YXIgZGVzYyA9IGRlc2NzW2tleV07XG4gICAgZGVzYy5jb25maWd1cmFibGUgPSBkZXNjLmVudW1lcmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzYykgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCBkZXNjKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgZGVmYXVsdHMgPSBmdW5jdGlvbiAob2JqLCBkZWZhdWx0cykge1xuICB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpO1xuXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxudmFyIGRlZmluZVByb3BlcnR5JDEgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG5cbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxudmFyIF9pbnN0YW5jZW9mID0gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XG4gIGlmIChyaWdodCAhPSBudWxsICYmIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgcmlnaHRbU3ltYm9sLmhhc0luc3RhbmNlXSkge1xuICAgIHJldHVybiByaWdodFtTeW1ib2wuaGFzSW5zdGFuY2VdKGxlZnQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsZWZ0IGluc3RhbmNlb2YgcmlnaHQ7XG4gIH1cbn07XG5cbnZhciBpbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59O1xuXG52YXIgaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG5ld09iaiA9IHt9O1xuXG4gICAgaWYgKG9iaiAhPSBudWxsKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ld09iai5kZWZhdWx0ID0gb2JqO1xuICAgIHJldHVybiBuZXdPYmo7XG4gIH1cbn07XG5cbnZhciBuZXdBcnJvd0NoZWNrID0gZnVuY3Rpb24gKGlubmVyVGhpcywgYm91bmRUaGlzKSB7XG4gIGlmIChpbm5lclRoaXMgIT09IGJvdW5kVGhpcykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgaW5zdGFudGlhdGUgYW4gYXJyb3cgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBvYmplY3REZXN0cnVjdHVyaW5nRW1wdHkgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChvYmogPT0gbnVsbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBkZXN0cnVjdHVyZSB1bmRlZmluZWRcIik7XG59O1xuXG52YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG52YXIgc2VsZkdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogZ2xvYmFsO1xuXG52YXIgc2V0ID0gZnVuY3Rpb24gc2V0KG9iamVjdCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgIT09IG51bGwpIHtcbiAgICAgIHNldChwYXJlbnQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYyAmJiBkZXNjLndyaXRhYmxlKSB7XG4gICAgZGVzYy52YWx1ZSA9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBzZXR0ZXIgPSBkZXNjLnNldDtcblxuICAgIGlmIChzZXR0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0dGVyLmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHtcbiAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICAgIH1cbiAgfTtcbn0oKTtcblxudmFyIHNsaWNlZFRvQXJyYXlMb29zZSA9IGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIHJldHVybiBhcnI7XG4gIH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICAgIF9hcnIucHVzaChfc3RlcC52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgfVxufTtcblxudmFyIHRhZ2dlZFRlbXBsYXRlTGl0ZXJhbCA9IGZ1bmN0aW9uIChzdHJpbmdzLCByYXcpIHtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufTtcblxudmFyIHRhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlID0gZnVuY3Rpb24gKHN0cmluZ3MsIHJhdykge1xuICBzdHJpbmdzLnJhdyA9IHJhdztcbiAgcmV0dXJuIHN0cmluZ3M7XG59O1xuXG52YXIgdGVtcG9yYWxSZWYgPSBmdW5jdGlvbiAodmFsLCBuYW1lLCB1bmRlZikge1xuICBpZiAodmFsID09PSB1bmRlZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihuYW1lICsgXCIgaXMgbm90IGRlZmluZWQgLSB0ZW1wb3JhbCBkZWFkIHpvbmVcIik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxufTtcblxudmFyIHRlbXBvcmFsVW5kZWZpbmVkID0ge307XG5cbnZhciB0b0FycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpID8gYXJyIDogQXJyYXkuZnJvbShhcnIpO1xufTtcblxudmFyIHRvQ29uc3VtYWJsZUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFycik7XG4gIH1cbn07XG5cblxuXG52YXIgYmFiZWxIZWxwZXJzJDEgPSBPYmplY3QuZnJlZXplKHtcbiAganN4OiBqc3gsXG4gIGFzeW5jVG9HZW5lcmF0b3I6IGFzeW5jVG9HZW5lcmF0b3IsXG4gIGNsYXNzQ2FsbENoZWNrOiBjbGFzc0NhbGxDaGVjayxcbiAgY3JlYXRlQ2xhc3M6IGNyZWF0ZUNsYXNzLFxuICBkZWZpbmVFbnVtZXJhYmxlUHJvcGVydGllczogZGVmaW5lRW51bWVyYWJsZVByb3BlcnRpZXMsXG4gIGRlZmF1bHRzOiBkZWZhdWx0cyxcbiAgZGVmaW5lUHJvcGVydHk6IGRlZmluZVByb3BlcnR5JDEsXG4gIGdldDogZ2V0LFxuICBpbmhlcml0czogaW5oZXJpdHMsXG4gIGludGVyb3BSZXF1aXJlRGVmYXVsdDogaW50ZXJvcFJlcXVpcmVEZWZhdWx0LFxuICBpbnRlcm9wUmVxdWlyZVdpbGRjYXJkOiBpbnRlcm9wUmVxdWlyZVdpbGRjYXJkLFxuICBuZXdBcnJvd0NoZWNrOiBuZXdBcnJvd0NoZWNrLFxuICBvYmplY3REZXN0cnVjdHVyaW5nRW1wdHk6IG9iamVjdERlc3RydWN0dXJpbmdFbXB0eSxcbiAgb2JqZWN0V2l0aG91dFByb3BlcnRpZXM6IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLFxuICBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLFxuICBzZWxmR2xvYmFsOiBzZWxmR2xvYmFsLFxuICBzZXQ6IHNldCxcbiAgc2xpY2VkVG9BcnJheTogc2xpY2VkVG9BcnJheSxcbiAgc2xpY2VkVG9BcnJheUxvb3NlOiBzbGljZWRUb0FycmF5TG9vc2UsXG4gIHRhZ2dlZFRlbXBsYXRlTGl0ZXJhbDogdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLFxuICB0YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZTogdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UsXG4gIHRlbXBvcmFsUmVmOiB0ZW1wb3JhbFJlZixcbiAgdGVtcG9yYWxVbmRlZmluZWQ6IHRlbXBvcmFsVW5kZWZpbmVkLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICB0b0NvbnN1bWFibGVBcnJheTogdG9Db25zdW1hYmxlQXJyYXksXG4gIHR5cGVvZjogX3R5cGVvZixcbiAgZXh0ZW5kczogX2V4dGVuZHMsXG4gIGluc3RhbmNlb2Y6IF9pbnN0YW5jZW9mXG59KTtcblxudmFyIHJlYWxEZWZpbmVQcm9wID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZW50aW5lbCA9IGZ1bmN0aW9uIHNlbnRpbmVsKCkge307XG4gICAgdHJ5IHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbnRpbmVsLCAnYScsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbnRpbmVsLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgICAgIHJldHVybiBzZW50aW5lbC5hID09PSAxICYmIHNlbnRpbmVsLnByb3RvdHlwZSBpbnN0YW5jZW9mIE9iamVjdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59KCk7XG5cbi8vIE5lZWQgYSB3b3JrYXJvdW5kIGZvciBnZXR0ZXJzIGluIEVTM1xudmFyIGVzMyA9ICFyZWFsRGVmaW5lUHJvcCAmJiAhT2JqZWN0LnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fO1xuXG4vLyBXZSB1c2UgdGhpcyBhIGxvdCAoYW5kIG5lZWQgaXQgZm9yIHByb3RvLWxlc3Mgb2JqZWN0cylcbnZhciBob3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vLyBOYWl2ZSBkZWZpbmVQcm9wZXJ0eSBmb3IgY29tcGF0aWJpbGl0eVxudmFyIGRlZmluZVByb3BlcnR5ID0gcmVhbERlZmluZVByb3AgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiAob2JqLCBuYW1lLCBkZXNjKSB7XG4gICAgaWYgKCdnZXQnIGluIGRlc2MgJiYgb2JqLl9fZGVmaW5lR2V0dGVyX18pIG9iai5fX2RlZmluZUdldHRlcl9fKG5hbWUsIGRlc2MuZ2V0KTtlbHNlIGlmICghaG9wLmNhbGwob2JqLCBuYW1lKSB8fCAndmFsdWUnIGluIGRlc2MpIG9ialtuYW1lXSA9IGRlc2MudmFsdWU7XG59O1xuXG4vLyBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiwgYXMgZ29vZCBhcyB3ZSBuZWVkIGl0IHRvIGJlXG52YXIgYXJySW5kZXhPZiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mIHx8IGZ1bmN0aW9uIChzZWFyY2gpIHtcbiAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoIXQubGVuZ3RoKSByZXR1cm4gLTE7XG5cbiAgICBmb3IgKHZhciBpID0gYXJndW1lbnRzWzFdIHx8IDAsIG1heCA9IHQubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgaWYgKHRbaV0gPT09IHNlYXJjaCkgcmV0dXJuIGk7XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xufTtcblxuLy8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZSBzcGVjaWZpZWQgcHJvdG90eXBlICgybmQgYXJnIHJlcXVpcmVkIGZvciBSZWNvcmQpXG52YXIgb2JqQ3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiAocHJvdG8sIHByb3BzKSB7XG4gICAgdmFyIG9iaiA9IHZvaWQgMDtcblxuICAgIGZ1bmN0aW9uIEYoKSB7fVxuICAgIEYucHJvdG90eXBlID0gcHJvdG87XG4gICAgb2JqID0gbmV3IEYoKTtcblxuICAgIGZvciAodmFyIGsgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKGhvcC5jYWxsKHByb3BzLCBrKSkgZGVmaW5lUHJvcGVydHkob2JqLCBrLCBwcm9wc1trXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cbi8vIFNuYXBzaG90IHNvbWUgKGhvcGVmdWxseSBzdGlsbCkgbmF0aXZlIGJ1aWx0LWluc1xudmFyIGFyclNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGFyckNvbmNhdCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQ7XG52YXIgYXJyUHVzaCA9IEFycmF5LnByb3RvdHlwZS5wdXNoO1xudmFyIGFyckpvaW4gPSBBcnJheS5wcm90b3R5cGUuam9pbjtcbnZhciBhcnJTaGlmdCA9IEFycmF5LnByb3RvdHlwZS5zaGlmdDtcblxuLy8gTmFpdmUgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgZm9yIGNvbXBhdGliaWxpdHlcbnZhciBmbkJpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCB8fCBmdW5jdGlvbiAodGhpc09iaikge1xuICAgIHZhciBmbiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcnJTbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICAvLyBBbGwgb3VyIChwcmVzZW50bHkpIGJvdW5kIGZ1bmN0aW9ucyBoYXZlIGVpdGhlciAxIG9yIDAgYXJndW1lbnRzLiBCeSByZXR1cm5pbmdcbiAgICAvLyBkaWZmZXJlbnQgZnVuY3Rpb24gc2lnbmF0dXJlcywgd2UgY2FuIHBhc3Mgc29tZSB0ZXN0cyBpbiBFUzMgZW52aXJvbm1lbnRzXG4gICAgaWYgKGZuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNPYmosIGFyckNvbmNhdC5jYWxsKGFyZ3MsIGFyclNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpc09iaiwgYXJyQ29uY2F0LmNhbGwoYXJncywgYXJyU2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfTtcbn07XG5cbi8vIE9iamVjdCBob3VzaW5nIGludGVybmFsIHByb3BlcnRpZXMgZm9yIGNvbnN0cnVjdG9yc1xudmFyIGludGVybmFscyA9IG9iakNyZWF0ZShudWxsKTtcblxuLy8gS2VlcCBpbnRlcm5hbCBwcm9wZXJ0aWVzIGludGVybmFsXG52YXIgc2VjcmV0ID0gTWF0aC5yYW5kb20oKTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uc1xuLy8gPT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gZGVhbCB3aXRoIHRoZSBpbmFjY3VyYWN5IG9mIGNhbGN1bGF0aW5nIGxvZzEwIGluIHByZS1FUzZcbiAqIEphdmFTY3JpcHQgZW52aXJvbm1lbnRzLiBNYXRoLmxvZyhudW0pIC8gTWF0aC5MTjEwIHdhcyByZXNwb25zaWJsZSBmb3JcbiAqIGNhdXNpbmcgaXNzdWUgIzYyLlxuICovXG5mdW5jdGlvbiBsb2cxMEZsb29yKG4pIHtcbiAgICAvLyBFUzYgcHJvdmlkZXMgdGhlIG1vcmUgYWNjdXJhdGUgTWF0aC5sb2cxMFxuICAgIGlmICh0eXBlb2YgTWF0aC5sb2cxMCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5sb2cxMChuKSk7XG5cbiAgICB2YXIgeCA9IE1hdGgucm91bmQoTWF0aC5sb2cobikgKiBNYXRoLkxPRzEwRSk7XG4gICAgcmV0dXJuIHggLSAoTnVtYmVyKCcxZScgKyB4KSA+IG4pO1xufVxuXG4vKipcbiAqIEEgbWFwIHRoYXQgZG9lc24ndCBjb250YWluIE9iamVjdCBpbiBpdHMgcHJvdG90eXBlIGNoYWluXG4gKi9cbmZ1bmN0aW9uIFJlY29yZChvYmopIHtcbiAgICAvLyBDb3B5IG9ubHkgb3duIHByb3BlcnRpZXMgb3ZlciB1bmxlc3MgdGhpcyBvYmplY3QgaXMgYWxyZWFkeSBhIFJlY29yZCBpbnN0YW5jZVxuICAgIGZvciAodmFyIGsgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBSZWNvcmQgfHwgaG9wLmNhbGwob2JqLCBrKSkgZGVmaW5lUHJvcGVydHkodGhpcywgaywgeyB2YWx1ZTogb2JqW2tdLCBlbnVtZXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIH1cbn1cblJlY29yZC5wcm90b3R5cGUgPSBvYmpDcmVhdGUobnVsbCk7XG5cbi8qKlxuICogQW4gb3JkZXJlZCBsaXN0XG4gKi9cbmZ1bmN0aW9uIExpc3QoKSB7XG4gICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IHRydWUsIHZhbHVlOiAwIH0pO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIGFyclB1c2guYXBwbHkodGhpcywgYXJyU2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbn1cbkxpc3QucHJvdG90eXBlID0gb2JqQ3JlYXRlKG51bGwpO1xuXG4vKipcbiAqIENvbnN0cnVjdHMgYSByZWd1bGFyIGV4cHJlc3Npb24gdG8gcmVzdG9yZSB0YWludGVkIFJlZ0V4cCBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJlZ0V4cFJlc3RvcmUoKSB7XG4gICAgaWYgKGludGVybmFscy5kaXNhYmxlUmVnRXhwUmVzdG9yZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgey8qIG5vLW9wICovfTtcbiAgICB9XG5cbiAgICB2YXIgcmVnRXhwQ2FjaGUgPSB7XG4gICAgICAgIGxhc3RNYXRjaDogUmVnRXhwLmxhc3RNYXRjaCB8fCAnJyxcbiAgICAgICAgbGVmdENvbnRleHQ6IFJlZ0V4cC5sZWZ0Q29udGV4dCxcbiAgICAgICAgbXVsdGlsaW5lOiBSZWdFeHAubXVsdGlsaW5lLFxuICAgICAgICBpbnB1dDogUmVnRXhwLmlucHV0XG4gICAgfSxcbiAgICAgICAgaGFzID0gZmFsc2U7XG5cbiAgICAvLyBDcmVhdGUgYSBzbmFwc2hvdCBvZiBhbGwgdGhlICdjYXB0dXJlZCcgcHJvcGVydGllc1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgICAgICBoYXMgPSAocmVnRXhwQ2FjaGVbJyQnICsgaV0gPSBSZWdFeHBbJyQnICsgaV0pIHx8IGhhcztcbiAgICB9cmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTm93IHdlJ3ZlIHNuYXBzaG90dGVkIHNvbWUgcHJvcGVydGllcywgZXNjYXBlIHRoZSBsYXN0TWF0Y2ggc3RyaW5nXG4gICAgICAgIHZhciBlc2MgPSAvWy4/KiteJFtcXF1cXFxcKCl7fXwtXS9nLFxuICAgICAgICAgICAgbG0gPSByZWdFeHBDYWNoZS5sYXN0TWF0Y2gucmVwbGFjZShlc2MsICdcXFxcJCYnKSxcbiAgICAgICAgICAgIHJlZyA9IG5ldyBMaXN0KCk7XG5cbiAgICAgICAgLy8gSWYgYW55IG9mIHRoZSBjYXB0dXJlZCBzdHJpbmdzIHdlcmUgbm9uLWVtcHR5LCBpdGVyYXRlIG92ZXIgdGhlbSBhbGxcbiAgICAgICAgaWYgKGhhcykge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8PSA5OyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG0gPSByZWdFeHBDYWNoZVsnJCcgKyBfaV07XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIGVtcHR5LCBhZGQgYW4gZW1wdHkgY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgICAgICAgaWYgKCFtKSBsbSA9ICcoKScgKyBsbTtcblxuICAgICAgICAgICAgICAgIC8vIEVsc2UgZmluZCB0aGUgc3RyaW5nIGluIGxtIGFuZCBlc2NhcGUgJiB3cmFwIGl0IHRvIGNhcHR1cmUgaXRcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0gPSBtLnJlcGxhY2UoZXNjLCAnXFxcXCQmJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsbSA9IGxtLnJlcGxhY2UobSwgJygnICsgbSArICcpJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFB1c2ggaXQgdG8gdGhlIHJlZyBhbmQgY2hvcCBsbSB0byBtYWtlIHN1cmUgZnVydGhlciBncm91cHMgY29tZSBhZnRlclxuICAgICAgICAgICAgICAgIGFyclB1c2guY2FsbChyZWcsIGxtLnNsaWNlKDAsIGxtLmluZGV4T2YoJygnKSArIDEpKTtcbiAgICAgICAgICAgICAgICBsbSA9IGxtLnNsaWNlKGxtLmluZGV4T2YoJygnKSArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGV4cHJTdHIgPSBhcnJKb2luLmNhbGwocmVnLCAnJykgKyBsbTtcblxuICAgICAgICAvLyBTaG9ydGVuIHRoZSByZWdleCBieSByZXBsYWNpbmcgZWFjaCBwYXJ0IG9mIHRoZSBleHByZXNzaW9uIHdpdGggYSBtYXRjaFxuICAgICAgICAvLyBmb3IgYSBzdHJpbmcgb2YgdGhhdCBleGFjdCBsZW5ndGguICBUaGlzIGlzIHNhZmUgZm9yIHRoZSB0eXBlIG9mXG4gICAgICAgIC8vIGV4cHJlc3Npb25zIGdlbmVyYXRlZCBhYm92ZSwgYmVjYXVzZSB0aGUgZXhwcmVzc2lvbiBtYXRjaGVzIHRoZSB3aG9sZVxuICAgICAgICAvLyBtYXRjaCBzdHJpbmcsIHNvIHdlIGtub3cgZWFjaCBncm91cCBhbmQgZWFjaCBzZWdtZW50IGJldHdlZW4gY2FwdHVyaW5nXG4gICAgICAgIC8vIGdyb3VwcyBjYW4gYmUgbWF0Y2hlZCBieSBpdHMgbGVuZ3RoIGFsb25lLlxuICAgICAgICBleHByU3RyID0gZXhwclN0ci5yZXBsYWNlKC8oXFxcXFxcKHxcXFxcXFwpfFteKCldKSsvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1tcXFxcc1xcXFxTXXsnICsgbWF0Y2gucmVwbGFjZSgnXFxcXCcsICcnKS5sZW5ndGggKyAnfSc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgcmVndWxhciBleHByZXNzaW9uIHRoYXQgd2lsbCByZWNvbnN0cnVjdCB0aGUgUmVnRXhwIHByb3BlcnRpZXNcbiAgICAgICAgdmFyIGV4cHIgPSBuZXcgUmVnRXhwKGV4cHJTdHIsIHJlZ0V4cENhY2hlLm11bHRpbGluZSA/ICdnbScgOiAnZycpO1xuXG4gICAgICAgIC8vIFNldCB0aGUgbGFzdEluZGV4IG9mIHRoZSBnZW5lcmF0ZWQgZXhwcmVzc2lvbiB0byBlbnN1cmUgdGhhdCB0aGUgbWF0Y2hcbiAgICAgICAgLy8gaXMgZm91bmQgaW4gdGhlIGNvcnJlY3QgaW5kZXguXG4gICAgICAgIGV4cHIubGFzdEluZGV4ID0gcmVnRXhwQ2FjaGUubGVmdENvbnRleHQubGVuZ3RoO1xuXG4gICAgICAgIGV4cHIuZXhlYyhyZWdFeHBDYWNoZS5pbnB1dCk7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBNaW1pY3MgRVM1J3MgYWJzdHJhY3QgVG9PYmplY3QoKSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiB0b09iamVjdChhcmcpIHtcbiAgICBpZiAoYXJnID09PSBudWxsKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBudWxsIG9yIHVuZGVmaW5lZCB0byBvYmplY3QnKTtcblxuICAgIGlmICgodHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IGJhYmVsSGVscGVycyQxWyd0eXBlb2YnXShhcmcpKSA9PT0gJ29iamVjdCcpIHJldHVybiBhcmc7XG4gICAgcmV0dXJuIE9iamVjdChhcmcpO1xufVxuXG5mdW5jdGlvbiB0b051bWJlcihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHJldHVybiBhcmc7XG4gICAgcmV0dXJuIE51bWJlcihhcmcpO1xufVxuXG5mdW5jdGlvbiB0b0ludGVnZXIoYXJnKSB7XG4gICAgdmFyIG51bWJlciA9IHRvTnVtYmVyKGFyZyk7XG4gICAgaWYgKGlzTmFOKG51bWJlcikpIHJldHVybiAwO1xuICAgIGlmIChudW1iZXIgPT09ICswIHx8IG51bWJlciA9PT0gLTAgfHwgbnVtYmVyID09PSArSW5maW5pdHkgfHwgbnVtYmVyID09PSAtSW5maW5pdHkpIHJldHVybiBudW1iZXI7XG4gICAgaWYgKG51bWJlciA8IDApIHJldHVybiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpICogLTE7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG59XG5cbmZ1bmN0aW9uIHRvTGVuZ3RoKGFyZykge1xuICAgIHZhciBsZW4gPSB0b0ludGVnZXIoYXJnKTtcbiAgICBpZiAobGVuIDw9IDApIHJldHVybiAwO1xuICAgIGlmIChsZW4gPT09IEluZmluaXR5KSByZXR1cm4gTWF0aC5wb3coMiwgNTMpIC0gMTtcbiAgICByZXR1cm4gTWF0aC5taW4obGVuLCBNYXRoLnBvdygyLCA1MykgLSAxKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIFwiaW50ZXJuYWxcIiBwcm9wZXJ0aWVzIGZvciBhbiBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZ2V0SW50ZXJuYWxQcm9wZXJ0aWVzKG9iaikge1xuICAgIGlmIChob3AuY2FsbChvYmosICdfX2dldEludGVybmFsUHJvcGVydGllcycpKSByZXR1cm4gb2JqLl9fZ2V0SW50ZXJuYWxQcm9wZXJ0aWVzKHNlY3JldCk7XG5cbiAgICByZXR1cm4gb2JqQ3JlYXRlKG51bGwpO1xufVxuXG4vKipcbiogRGVmaW5lcyByZWd1bGFyIGV4cHJlc3Npb25zIGZvciB2YXJpb3VzIG9wZXJhdGlvbnMgcmVsYXRlZCB0byB0aGUgQkNQIDQ3IHN5bnRheCxcbiogYXMgZGVmaW5lZCBhdCBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9iY3A0NyNzZWN0aW9uLTIuMVxuKi9cblxuLy8gZXh0bGFuZyAgICAgICA9IDNBTFBIQSAgICAgICAgICAgICAgOyBzZWxlY3RlZCBJU08gNjM5IGNvZGVzXG4vLyAgICAgICAgICAgICAgICAgKjIoXCItXCIgM0FMUEhBKSAgICAgIDsgcGVybWFuZW50bHkgcmVzZXJ2ZWRcbnZhciBleHRsYW5nID0gJ1thLXpdezN9KD86LVthLXpdezN9KXswLDJ9JztcblxuLy8gbGFuZ3VhZ2UgICAgICA9IDIqM0FMUEhBICAgICAgICAgICAgOyBzaG9ydGVzdCBJU08gNjM5IGNvZGVcbi8vICAgICAgICAgICAgICAgICBbXCItXCIgZXh0bGFuZ10gICAgICAgOyBzb21ldGltZXMgZm9sbG93ZWQgYnlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDsgZXh0ZW5kZWQgbGFuZ3VhZ2Ugc3VidGFnc1xuLy8gICAgICAgICAgICAgICAvIDRBTFBIQSAgICAgICAgICAgICAgOyBvciByZXNlcnZlZCBmb3IgZnV0dXJlIHVzZVxuLy8gICAgICAgICAgICAgICAvIDUqOEFMUEhBICAgICAgICAgICAgOyBvciByZWdpc3RlcmVkIGxhbmd1YWdlIHN1YnRhZ1xudmFyIGxhbmd1YWdlID0gJyg/OlthLXpdezIsM30oPzotJyArIGV4dGxhbmcgKyAnKT98W2Etel17NH18W2Etel17NSw4fSknO1xuXG4vLyBzY3JpcHQgICAgICAgID0gNEFMUEhBICAgICAgICAgICAgICA7IElTTyAxNTkyNCBjb2RlXG52YXIgc2NyaXB0ID0gJ1thLXpdezR9JztcblxuLy8gcmVnaW9uICAgICAgICA9IDJBTFBIQSAgICAgICAgICAgICAgOyBJU08gMzE2Ni0xIGNvZGVcbi8vICAgICAgICAgICAgICAgLyAzRElHSVQgICAgICAgICAgICAgIDsgVU4gTS40OSBjb2RlXG52YXIgcmVnaW9uID0gJyg/OlthLXpdezJ9fFxcXFxkezN9KSc7XG5cbi8vIHZhcmlhbnQgICAgICAgPSA1KjhhbHBoYW51bSAgICAgICAgIDsgcmVnaXN0ZXJlZCB2YXJpYW50c1xuLy8gICAgICAgICAgICAgICAvIChESUdJVCAzYWxwaGFudW0pXG52YXIgdmFyaWFudCA9ICcoPzpbYS16MC05XXs1LDh9fFxcXFxkW2EtejAtOV17M30pJztcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOyBTaW5nbGUgYWxwaGFudW1lcmljc1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOyBcInhcIiByZXNlcnZlZCBmb3IgcHJpdmF0ZSB1c2Vcbi8vIHNpbmdsZXRvbiAgICAgPSBESUdJVCAgICAgICAgICAgICAgIDsgMCAtIDlcbi8vICAgICAgICAgICAgICAgLyAleDQxLTU3ICAgICAgICAgICAgIDsgQSAtIFdcbi8vICAgICAgICAgICAgICAgLyAleDU5LTVBICAgICAgICAgICAgIDsgWSAtIFpcbi8vICAgICAgICAgICAgICAgLyAleDYxLTc3ICAgICAgICAgICAgIDsgYSAtIHdcbi8vICAgICAgICAgICAgICAgLyAleDc5LTdBICAgICAgICAgICAgIDsgeSAtIHpcbnZhciBzaW5nbGV0b24gPSAnWzAtOWEtd3ktel0nO1xuXG4vLyBleHRlbnNpb24gICAgID0gc2luZ2xldG9uIDEqKFwiLVwiICgyKjhhbHBoYW51bSkpXG52YXIgZXh0ZW5zaW9uID0gc2luZ2xldG9uICsgJyg/Oi1bYS16MC05XXsyLDh9KSsnO1xuXG4vLyBwcml2YXRldXNlICAgID0gXCJ4XCIgMSooXCItXCIgKDEqOGFscGhhbnVtKSlcbnZhciBwcml2YXRldXNlID0gJ3goPzotW2EtejAtOV17MSw4fSkrJztcblxuLy8gaXJyZWd1bGFyICAgICA9IFwiZW4tR0Itb2VkXCIgICAgICAgICA7IGlycmVndWxhciB0YWdzIGRvIG5vdCBtYXRjaFxuLy8gICAgICAgICAgICAgICAvIFwiaS1hbWlcIiAgICAgICAgICAgICA7IHRoZSAnbGFuZ3RhZycgcHJvZHVjdGlvbiBhbmRcbi8vICAgICAgICAgICAgICAgLyBcImktYm5uXCIgICAgICAgICAgICAgOyB3b3VsZCBub3Qgb3RoZXJ3aXNlIGJlXG4vLyAgICAgICAgICAgICAgIC8gXCJpLWRlZmF1bHRcIiAgICAgICAgIDsgY29uc2lkZXJlZCAnd2VsbC1mb3JtZWQnXG4vLyAgICAgICAgICAgICAgIC8gXCJpLWVub2NoaWFuXCIgICAgICAgIDsgVGhlc2UgdGFncyBhcmUgYWxsIHZhbGlkLFxuLy8gICAgICAgICAgICAgICAvIFwiaS1oYWtcIiAgICAgICAgICAgICA7IGJ1dCBtb3N0IGFyZSBkZXByZWNhdGVkXG4vLyAgICAgICAgICAgICAgIC8gXCJpLWtsaW5nb25cIiAgICAgICAgIDsgaW4gZmF2b3Igb2YgbW9yZSBtb2Rlcm5cbi8vICAgICAgICAgICAgICAgLyBcImktbHV4XCIgICAgICAgICAgICAgOyBzdWJ0YWdzIG9yIHN1YnRhZ1xuLy8gICAgICAgICAgICAgICAvIFwiaS1taW5nb1wiICAgICAgICAgICA7IGNvbWJpbmF0aW9uXG4vLyAgICAgICAgICAgICAgIC8gXCJpLW5hdmFqb1wiXG4vLyAgICAgICAgICAgICAgIC8gXCJpLXB3blwiXG4vLyAgICAgICAgICAgICAgIC8gXCJpLXRhb1wiXG4vLyAgICAgICAgICAgICAgIC8gXCJpLXRheVwiXG4vLyAgICAgICAgICAgICAgIC8gXCJpLXRzdVwiXG4vLyAgICAgICAgICAgICAgIC8gXCJzZ24tQkUtRlJcIlxuLy8gICAgICAgICAgICAgICAvIFwic2duLUJFLU5MXCJcbi8vICAgICAgICAgICAgICAgLyBcInNnbi1DSC1ERVwiXG52YXIgaXJyZWd1bGFyID0gJyg/OmVuLUdCLW9lZCcgKyAnfGktKD86YW1pfGJubnxkZWZhdWx0fGVub2NoaWFufGhha3xrbGluZ29ufGx1eHxtaW5nb3xuYXZham98cHdufHRhb3x0YXl8dHN1KScgKyAnfHNnbi0oPzpCRS1GUnxCRS1OTHxDSC1ERSkpJztcblxuLy8gcmVndWxhciAgICAgICA9IFwiYXJ0LWxvamJhblwiICAgICAgICA7IHRoZXNlIHRhZ3MgbWF0Y2ggdGhlICdsYW5ndGFnJ1xuLy8gICAgICAgICAgICAgICAvIFwiY2VsLWdhdWxpc2hcIiAgICAgICA7IHByb2R1Y3Rpb24sIGJ1dCB0aGVpciBzdWJ0YWdzXG4vLyAgICAgICAgICAgICAgIC8gXCJuby1ib2tcIiAgICAgICAgICAgIDsgYXJlIG5vdCBleHRlbmRlZCBsYW5ndWFnZVxuLy8gICAgICAgICAgICAgICAvIFwibm8tbnluXCIgICAgICAgICAgICA7IG9yIHZhcmlhbnQgc3VidGFnczogdGhlaXIgbWVhbmluZ1xuLy8gICAgICAgICAgICAgICAvIFwiemgtZ3VveXVcIiAgICAgICAgICA7IGlzIGRlZmluZWQgYnkgdGhlaXIgcmVnaXN0cmF0aW9uXG4vLyAgICAgICAgICAgICAgIC8gXCJ6aC1oYWtrYVwiICAgICAgICAgIDsgYW5kIGFsbCBvZiB0aGVzZSBhcmUgZGVwcmVjYXRlZFxuLy8gICAgICAgICAgICAgICAvIFwiemgtbWluXCIgICAgICAgICAgICA7IGluIGZhdm9yIG9mIGEgbW9yZSBtb2Rlcm5cbi8vICAgICAgICAgICAgICAgLyBcInpoLW1pbi1uYW5cIiAgICAgICAgOyBzdWJ0YWcgb3Igc2VxdWVuY2Ugb2Ygc3VidGFnc1xuLy8gICAgICAgICAgICAgICAvIFwiemgteGlhbmdcIlxudmFyIHJlZ3VsYXIgPSAnKD86YXJ0LWxvamJhbnxjZWwtZ2F1bGlzaHxuby1ib2t8bm8tbnluJyArICd8emgtKD86Z3VveXV8aGFra2F8bWlufG1pbi1uYW58eGlhbmcpKSc7XG5cbi8vIGdyYW5kZmF0aGVyZWQgPSBpcnJlZ3VsYXIgICAgICAgICAgIDsgbm9uLXJlZHVuZGFudCB0YWdzIHJlZ2lzdGVyZWRcbi8vICAgICAgICAgICAgICAgLyByZWd1bGFyICAgICAgICAgICAgIDsgZHVyaW5nIHRoZSBSRkMgMzA2NiBlcmFcbnZhciBncmFuZGZhdGhlcmVkID0gJyg/OicgKyBpcnJlZ3VsYXIgKyAnfCcgKyByZWd1bGFyICsgJyknO1xuXG4vLyBsYW5ndGFnICAgICAgID0gbGFuZ3VhZ2Vcbi8vICAgICAgICAgICAgICAgICBbXCItXCIgc2NyaXB0XVxuLy8gICAgICAgICAgICAgICAgIFtcIi1cIiByZWdpb25dXG4vLyAgICAgICAgICAgICAgICAgKihcIi1cIiB2YXJpYW50KVxuLy8gICAgICAgICAgICAgICAgICooXCItXCIgZXh0ZW5zaW9uKVxuLy8gICAgICAgICAgICAgICAgIFtcIi1cIiBwcml2YXRldXNlXVxudmFyIGxhbmd0YWcgPSBsYW5ndWFnZSArICcoPzotJyArIHNjcmlwdCArICcpPyg/Oi0nICsgcmVnaW9uICsgJyk/KD86LScgKyB2YXJpYW50ICsgJykqKD86LScgKyBleHRlbnNpb24gKyAnKSooPzotJyArIHByaXZhdGV1c2UgKyAnKT8nO1xuXG4vLyBMYW5ndWFnZS1UYWcgID0gbGFuZ3RhZyAgICAgICAgICAgICA7IG5vcm1hbCBsYW5ndWFnZSB0YWdzXG4vLyAgICAgICAgICAgICAgIC8gcHJpdmF0ZXVzZSAgICAgICAgICA7IHByaXZhdGUgdXNlIHRhZ1xuLy8gICAgICAgICAgICAgICAvIGdyYW5kZmF0aGVyZWQgICAgICAgOyBncmFuZGZhdGhlcmVkIHRhZ3NcbnZhciBleHBCQ1A0N1N5bnRheCA9IFJlZ0V4cCgnXig/OicgKyBsYW5ndGFnICsgJ3wnICsgcHJpdmF0ZXVzZSArICd8JyArIGdyYW5kZmF0aGVyZWQgKyAnKSQnLCAnaScpO1xuXG4vLyBNYXRjaCBkdXBsaWNhdGUgdmFyaWFudHMgaW4gYSBsYW5ndWFnZSB0YWdcbnZhciBleHBWYXJpYW50RHVwZXMgPSBSZWdFeHAoJ14oPyF4KS4qPy0oJyArIHZhcmlhbnQgKyAnKS0oPzpcXFxcd3s0LDh9LSg/IXgtKSkqXFxcXDFcXFxcYicsICdpJyk7XG5cbi8vIE1hdGNoIGR1cGxpY2F0ZSBzaW5nbGV0b25zIGluIGEgbGFuZ3VhZ2UgdGFnIChleGNlcHQgaW4gcHJpdmF0ZSB1c2UpXG52YXIgZXhwU2luZ2xldG9uRHVwZXMgPSBSZWdFeHAoJ14oPyF4KS4qPy0oJyArIHNpbmdsZXRvbiArICcpLSg/OlxcXFx3Ky0oPyF4LSkpKlxcXFwxXFxcXGInLCAnaScpO1xuXG4vLyBNYXRjaCBhbGwgZXh0ZW5zaW9uIHNlcXVlbmNlc1xudmFyIGV4cEV4dFNlcXVlbmNlcyA9IFJlZ0V4cCgnLScgKyBleHRlbnNpb24sICdpZycpO1xuXG4vLyBEZWZhdWx0IGxvY2FsZSBpcyB0aGUgZmlyc3QtYWRkZWQgbG9jYWxlIGRhdGEgZm9yIHVzXG52YXIgZGVmYXVsdExvY2FsZSA9IHZvaWQgMDtcbmZ1bmN0aW9uIHNldERlZmF1bHRMb2NhbGUobG9jYWxlKSB7XG4gICAgZGVmYXVsdExvY2FsZSA9IGxvY2FsZTtcbn1cblxuLy8gSUFOQSBTdWJ0YWcgUmVnaXN0cnkgcmVkdW5kYW50IHRhZyBhbmQgc3VidGFnIG1hcHNcbnZhciByZWR1bmRhbnRUYWdzID0ge1xuICAgIHRhZ3M6IHtcbiAgICAgICAgXCJhcnQtbG9qYmFuXCI6IFwiamJvXCIsXG4gICAgICAgIFwiaS1hbWlcIjogXCJhbWlcIixcbiAgICAgICAgXCJpLWJublwiOiBcImJublwiLFxuICAgICAgICBcImktaGFrXCI6IFwiaGFrXCIsXG4gICAgICAgIFwiaS1rbGluZ29uXCI6IFwidGxoXCIsXG4gICAgICAgIFwiaS1sdXhcIjogXCJsYlwiLFxuICAgICAgICBcImktbmF2YWpvXCI6IFwibnZcIixcbiAgICAgICAgXCJpLXB3blwiOiBcInB3blwiLFxuICAgICAgICBcImktdGFvXCI6IFwidGFvXCIsXG4gICAgICAgIFwiaS10YXlcIjogXCJ0YXlcIixcbiAgICAgICAgXCJpLXRzdVwiOiBcInRzdVwiLFxuICAgICAgICBcIm5vLWJva1wiOiBcIm5iXCIsXG4gICAgICAgIFwibm8tbnluXCI6IFwibm5cIixcbiAgICAgICAgXCJzZ24tQkUtRlJcIjogXCJzZmJcIixcbiAgICAgICAgXCJzZ24tQkUtTkxcIjogXCJ2Z3RcIixcbiAgICAgICAgXCJzZ24tQ0gtREVcIjogXCJzZ2dcIixcbiAgICAgICAgXCJ6aC1ndW95dVwiOiBcImNtblwiLFxuICAgICAgICBcInpoLWhha2thXCI6IFwiaGFrXCIsXG4gICAgICAgIFwiemgtbWluLW5hblwiOiBcIm5hblwiLFxuICAgICAgICBcInpoLXhpYW5nXCI6IFwiaHNuXCIsXG4gICAgICAgIFwic2duLUJSXCI6IFwiYnpzXCIsXG4gICAgICAgIFwic2duLUNPXCI6IFwiY3NuXCIsXG4gICAgICAgIFwic2duLURFXCI6IFwiZ3NnXCIsXG4gICAgICAgIFwic2duLURLXCI6IFwiZHNsXCIsXG4gICAgICAgIFwic2duLUVTXCI6IFwic3NwXCIsXG4gICAgICAgIFwic2duLUZSXCI6IFwiZnNsXCIsXG4gICAgICAgIFwic2duLUdCXCI6IFwiYmZpXCIsXG4gICAgICAgIFwic2duLUdSXCI6IFwiZ3NzXCIsXG4gICAgICAgIFwic2duLUlFXCI6IFwiaXNnXCIsXG4gICAgICAgIFwic2duLUlUXCI6IFwiaXNlXCIsXG4gICAgICAgIFwic2duLUpQXCI6IFwianNsXCIsXG4gICAgICAgIFwic2duLU1YXCI6IFwibWZzXCIsXG4gICAgICAgIFwic2duLU5JXCI6IFwibmNzXCIsXG4gICAgICAgIFwic2duLU5MXCI6IFwiZHNlXCIsXG4gICAgICAgIFwic2duLU5PXCI6IFwibnNsXCIsXG4gICAgICAgIFwic2duLVBUXCI6IFwicHNyXCIsXG4gICAgICAgIFwic2duLVNFXCI6IFwic3dsXCIsXG4gICAgICAgIFwic2duLVVTXCI6IFwiYXNlXCIsXG4gICAgICAgIFwic2duLVpBXCI6IFwic2ZzXCIsXG4gICAgICAgIFwiemgtY21uXCI6IFwiY21uXCIsXG4gICAgICAgIFwiemgtY21uLUhhbnNcIjogXCJjbW4tSGFuc1wiLFxuICAgICAgICBcInpoLWNtbi1IYW50XCI6IFwiY21uLUhhbnRcIixcbiAgICAgICAgXCJ6aC1nYW5cIjogXCJnYW5cIixcbiAgICAgICAgXCJ6aC13dXVcIjogXCJ3dXVcIixcbiAgICAgICAgXCJ6aC15dWVcIjogXCJ5dWVcIlxuICAgIH0sXG4gICAgc3VidGFnczoge1xuICAgICAgICBCVTogXCJNTVwiLFxuICAgICAgICBERDogXCJERVwiLFxuICAgICAgICBGWDogXCJGUlwiLFxuICAgICAgICBUUDogXCJUTFwiLFxuICAgICAgICBZRDogXCJZRVwiLFxuICAgICAgICBaUjogXCJDRFwiLFxuICAgICAgICBoZXBsb2M6IFwiYWxhbGM5N1wiLFxuICAgICAgICAnaW4nOiBcImlkXCIsXG4gICAgICAgIGl3OiBcImhlXCIsXG4gICAgICAgIGppOiBcInlpXCIsXG4gICAgICAgIGp3OiBcImp2XCIsXG4gICAgICAgIG1vOiBcInJvXCIsXG4gICAgICAgIGF5eDogXCJudW5cIixcbiAgICAgICAgYmpkOiBcImRybFwiLFxuICAgICAgICBjY3E6IFwicmtpXCIsXG4gICAgICAgIGNqcjogXCJtb21cIixcbiAgICAgICAgY2thOiBcImNtclwiLFxuICAgICAgICBjbWs6IFwieGNoXCIsXG4gICAgICAgIGRyaDogXCJraGtcIixcbiAgICAgICAgZHJ3OiBcInByc1wiLFxuICAgICAgICBnYXY6IFwiZGV2XCIsXG4gICAgICAgIGhycjogXCJqYWxcIixcbiAgICAgICAgaWJpOiBcIm9wYVwiLFxuICAgICAgICBrZ2g6IFwia21sXCIsXG4gICAgICAgIGxjcTogXCJwcHJcIixcbiAgICAgICAgbXN0OiBcIm1yeVwiLFxuICAgICAgICBteXQ6IFwibXJ5XCIsXG4gICAgICAgIHNjYTogXCJobGVcIixcbiAgICAgICAgdGllOiBcInJhc1wiLFxuICAgICAgICB0a2s6IFwidHdtXCIsXG4gICAgICAgIHRsdzogXCJ3ZW9cIixcbiAgICAgICAgdG5mOiBcInByc1wiLFxuICAgICAgICB5YmQ6IFwicmtpXCIsXG4gICAgICAgIHltYTogXCJscnJcIlxuICAgIH0sXG4gICAgZXh0TGFuZzoge1xuICAgICAgICBhYW86IFtcImFhb1wiLCBcImFyXCJdLFxuICAgICAgICBhYmg6IFtcImFiaFwiLCBcImFyXCJdLFxuICAgICAgICBhYnY6IFtcImFidlwiLCBcImFyXCJdLFxuICAgICAgICBhY206IFtcImFjbVwiLCBcImFyXCJdLFxuICAgICAgICBhY3E6IFtcImFjcVwiLCBcImFyXCJdLFxuICAgICAgICBhY3c6IFtcImFjd1wiLCBcImFyXCJdLFxuICAgICAgICBhY3g6IFtcImFjeFwiLCBcImFyXCJdLFxuICAgICAgICBhY3k6IFtcImFjeVwiLCBcImFyXCJdLFxuICAgICAgICBhZGY6IFtcImFkZlwiLCBcImFyXCJdLFxuICAgICAgICBhZHM6IFtcImFkc1wiLCBcInNnblwiXSxcbiAgICAgICAgYWViOiBbXCJhZWJcIiwgXCJhclwiXSxcbiAgICAgICAgYWVjOiBbXCJhZWNcIiwgXCJhclwiXSxcbiAgICAgICAgYWVkOiBbXCJhZWRcIiwgXCJzZ25cIl0sXG4gICAgICAgIGFlbjogW1wiYWVuXCIsIFwic2duXCJdLFxuICAgICAgICBhZmI6IFtcImFmYlwiLCBcImFyXCJdLFxuICAgICAgICBhZmc6IFtcImFmZ1wiLCBcInNnblwiXSxcbiAgICAgICAgYWpwOiBbXCJhanBcIiwgXCJhclwiXSxcbiAgICAgICAgYXBjOiBbXCJhcGNcIiwgXCJhclwiXSxcbiAgICAgICAgYXBkOiBbXCJhcGRcIiwgXCJhclwiXSxcbiAgICAgICAgYXJiOiBbXCJhcmJcIiwgXCJhclwiXSxcbiAgICAgICAgYXJxOiBbXCJhcnFcIiwgXCJhclwiXSxcbiAgICAgICAgYXJzOiBbXCJhcnNcIiwgXCJhclwiXSxcbiAgICAgICAgYXJ5OiBbXCJhcnlcIiwgXCJhclwiXSxcbiAgICAgICAgYXJ6OiBbXCJhcnpcIiwgXCJhclwiXSxcbiAgICAgICAgYXNlOiBbXCJhc2VcIiwgXCJzZ25cIl0sXG4gICAgICAgIGFzZjogW1wiYXNmXCIsIFwic2duXCJdLFxuICAgICAgICBhc3A6IFtcImFzcFwiLCBcInNnblwiXSxcbiAgICAgICAgYXNxOiBbXCJhc3FcIiwgXCJzZ25cIl0sXG4gICAgICAgIGFzdzogW1wiYXN3XCIsIFwic2duXCJdLFxuICAgICAgICBhdXo6IFtcImF1elwiLCBcImFyXCJdLFxuICAgICAgICBhdmw6IFtcImF2bFwiLCBcImFyXCJdLFxuICAgICAgICBheWg6IFtcImF5aFwiLCBcImFyXCJdLFxuICAgICAgICBheWw6IFtcImF5bFwiLCBcImFyXCJdLFxuICAgICAgICBheW46IFtcImF5blwiLCBcImFyXCJdLFxuICAgICAgICBheXA6IFtcImF5cFwiLCBcImFyXCJdLFxuICAgICAgICBiYno6IFtcImJielwiLCBcImFyXCJdLFxuICAgICAgICBiZmk6IFtcImJmaVwiLCBcInNnblwiXSxcbiAgICAgICAgYmZrOiBbXCJiZmtcIiwgXCJzZ25cIl0sXG4gICAgICAgIGJqbjogW1wiYmpuXCIsIFwibXNcIl0sXG4gICAgICAgIGJvZzogW1wiYm9nXCIsIFwic2duXCJdLFxuICAgICAgICBicW46IFtcImJxblwiLCBcInNnblwiXSxcbiAgICAgICAgYnF5OiBbXCJicXlcIiwgXCJzZ25cIl0sXG4gICAgICAgIGJ0ajogW1wiYnRqXCIsIFwibXNcIl0sXG4gICAgICAgIGJ2ZTogW1wiYnZlXCIsIFwibXNcIl0sXG4gICAgICAgIGJ2bDogW1wiYnZsXCIsIFwic2duXCJdLFxuICAgICAgICBidnU6IFtcImJ2dVwiLCBcIm1zXCJdLFxuICAgICAgICBienM6IFtcImJ6c1wiLCBcInNnblwiXSxcbiAgICAgICAgY2RvOiBbXCJjZG9cIiwgXCJ6aFwiXSxcbiAgICAgICAgY2RzOiBbXCJjZHNcIiwgXCJzZ25cIl0sXG4gICAgICAgIGNqeTogW1wiY2p5XCIsIFwiemhcIl0sXG4gICAgICAgIGNtbjogW1wiY21uXCIsIFwiemhcIl0sXG4gICAgICAgIGNvYTogW1wiY29hXCIsIFwibXNcIl0sXG4gICAgICAgIGNweDogW1wiY3B4XCIsIFwiemhcIl0sXG4gICAgICAgIGNzYzogW1wiY3NjXCIsIFwic2duXCJdLFxuICAgICAgICBjc2Q6IFtcImNzZFwiLCBcInNnblwiXSxcbiAgICAgICAgY3NlOiBbXCJjc2VcIiwgXCJzZ25cIl0sXG4gICAgICAgIGNzZjogW1wiY3NmXCIsIFwic2duXCJdLFxuICAgICAgICBjc2c6IFtcImNzZ1wiLCBcInNnblwiXSxcbiAgICAgICAgY3NsOiBbXCJjc2xcIiwgXCJzZ25cIl0sXG4gICAgICAgIGNzbjogW1wiY3NuXCIsIFwic2duXCJdLFxuICAgICAgICBjc3E6IFtcImNzcVwiLCBcInNnblwiXSxcbiAgICAgICAgY3NyOiBbXCJjc3JcIiwgXCJzZ25cIl0sXG4gICAgICAgIGN6aDogW1wiY3poXCIsIFwiemhcIl0sXG4gICAgICAgIGN6bzogW1wiY3pvXCIsIFwiemhcIl0sXG4gICAgICAgIGRvcTogW1wiZG9xXCIsIFwic2duXCJdLFxuICAgICAgICBkc2U6IFtcImRzZVwiLCBcInNnblwiXSxcbiAgICAgICAgZHNsOiBbXCJkc2xcIiwgXCJzZ25cIl0sXG4gICAgICAgIGR1cDogW1wiZHVwXCIsIFwibXNcIl0sXG4gICAgICAgIGVjczogW1wiZWNzXCIsIFwic2duXCJdLFxuICAgICAgICBlc2w6IFtcImVzbFwiLCBcInNnblwiXSxcbiAgICAgICAgZXNuOiBbXCJlc25cIiwgXCJzZ25cIl0sXG4gICAgICAgIGVzbzogW1wiZXNvXCIsIFwic2duXCJdLFxuICAgICAgICBldGg6IFtcImV0aFwiLCBcInNnblwiXSxcbiAgICAgICAgZmNzOiBbXCJmY3NcIiwgXCJzZ25cIl0sXG4gICAgICAgIGZzZTogW1wiZnNlXCIsIFwic2duXCJdLFxuICAgICAgICBmc2w6IFtcImZzbFwiLCBcInNnblwiXSxcbiAgICAgICAgZnNzOiBbXCJmc3NcIiwgXCJzZ25cIl0sXG4gICAgICAgIGdhbjogW1wiZ2FuXCIsIFwiemhcIl0sXG4gICAgICAgIGdkczogW1wiZ2RzXCIsIFwic2duXCJdLFxuICAgICAgICBnb206IFtcImdvbVwiLCBcImtva1wiXSxcbiAgICAgICAgZ3NlOiBbXCJnc2VcIiwgXCJzZ25cIl0sXG4gICAgICAgIGdzZzogW1wiZ3NnXCIsIFwic2duXCJdLFxuICAgICAgICBnc206IFtcImdzbVwiLCBcInNnblwiXSxcbiAgICAgICAgZ3NzOiBbXCJnc3NcIiwgXCJzZ25cIl0sXG4gICAgICAgIGd1czogW1wiZ3VzXCIsIFwic2duXCJdLFxuICAgICAgICBoYWI6IFtcImhhYlwiLCBcInNnblwiXSxcbiAgICAgICAgaGFmOiBbXCJoYWZcIiwgXCJzZ25cIl0sXG4gICAgICAgIGhhazogW1wiaGFrXCIsIFwiemhcIl0sXG4gICAgICAgIGhkczogW1wiaGRzXCIsIFwic2duXCJdLFxuICAgICAgICBoamk6IFtcImhqaVwiLCBcIm1zXCJdLFxuICAgICAgICBoa3M6IFtcImhrc1wiLCBcInNnblwiXSxcbiAgICAgICAgaG9zOiBbXCJob3NcIiwgXCJzZ25cIl0sXG4gICAgICAgIGhwczogW1wiaHBzXCIsIFwic2duXCJdLFxuICAgICAgICBoc2g6IFtcImhzaFwiLCBcInNnblwiXSxcbiAgICAgICAgaHNsOiBbXCJoc2xcIiwgXCJzZ25cIl0sXG4gICAgICAgIGhzbjogW1wiaHNuXCIsIFwiemhcIl0sXG4gICAgICAgIGljbDogW1wiaWNsXCIsIFwic2duXCJdLFxuICAgICAgICBpbHM6IFtcImlsc1wiLCBcInNnblwiXSxcbiAgICAgICAgaW5sOiBbXCJpbmxcIiwgXCJzZ25cIl0sXG4gICAgICAgIGluczogW1wiaW5zXCIsIFwic2duXCJdLFxuICAgICAgICBpc2U6IFtcImlzZVwiLCBcInNnblwiXSxcbiAgICAgICAgaXNnOiBbXCJpc2dcIiwgXCJzZ25cIl0sXG4gICAgICAgIGlzcjogW1wiaXNyXCIsIFwic2duXCJdLFxuICAgICAgICBqYWs6IFtcImpha1wiLCBcIm1zXCJdLFxuICAgICAgICBqYXg6IFtcImpheFwiLCBcIm1zXCJdLFxuICAgICAgICBqY3M6IFtcImpjc1wiLCBcInNnblwiXSxcbiAgICAgICAgamhzOiBbXCJqaHNcIiwgXCJzZ25cIl0sXG4gICAgICAgIGpsczogW1wiamxzXCIsIFwic2duXCJdLFxuICAgICAgICBqb3M6IFtcImpvc1wiLCBcInNnblwiXSxcbiAgICAgICAganNsOiBbXCJqc2xcIiwgXCJzZ25cIl0sXG4gICAgICAgIGp1czogW1wianVzXCIsIFwic2duXCJdLFxuICAgICAgICBrZ2k6IFtcImtnaVwiLCBcInNnblwiXSxcbiAgICAgICAga25uOiBbXCJrbm5cIiwgXCJrb2tcIl0sXG4gICAgICAgIGt2YjogW1wia3ZiXCIsIFwibXNcIl0sXG4gICAgICAgIGt2azogW1wia3ZrXCIsIFwic2duXCJdLFxuICAgICAgICBrdnI6IFtcImt2clwiLCBcIm1zXCJdLFxuICAgICAgICBreGQ6IFtcImt4ZFwiLCBcIm1zXCJdLFxuICAgICAgICBsYnM6IFtcImxic1wiLCBcInNnblwiXSxcbiAgICAgICAgbGNlOiBbXCJsY2VcIiwgXCJtc1wiXSxcbiAgICAgICAgbGNmOiBbXCJsY2ZcIiwgXCJtc1wiXSxcbiAgICAgICAgbGl3OiBbXCJsaXdcIiwgXCJtc1wiXSxcbiAgICAgICAgbGxzOiBbXCJsbHNcIiwgXCJzZ25cIl0sXG4gICAgICAgIGxzZzogW1wibHNnXCIsIFwic2duXCJdLFxuICAgICAgICBsc2w6IFtcImxzbFwiLCBcInNnblwiXSxcbiAgICAgICAgbHNvOiBbXCJsc29cIiwgXCJzZ25cIl0sXG4gICAgICAgIGxzcDogW1wibHNwXCIsIFwic2duXCJdLFxuICAgICAgICBsc3Q6IFtcImxzdFwiLCBcInNnblwiXSxcbiAgICAgICAgbHN5OiBbXCJsc3lcIiwgXCJzZ25cIl0sXG4gICAgICAgIGx0ZzogW1wibHRnXCIsIFwibHZcIl0sXG4gICAgICAgIGx2czogW1wibHZzXCIsIFwibHZcIl0sXG4gICAgICAgIGx6aDogW1wibHpoXCIsIFwiemhcIl0sXG4gICAgICAgIG1heDogW1wibWF4XCIsIFwibXNcIl0sXG4gICAgICAgIG1kbDogW1wibWRsXCIsIFwic2duXCJdLFxuICAgICAgICBtZW86IFtcIm1lb1wiLCBcIm1zXCJdLFxuICAgICAgICBtZmE6IFtcIm1mYVwiLCBcIm1zXCJdLFxuICAgICAgICBtZmI6IFtcIm1mYlwiLCBcIm1zXCJdLFxuICAgICAgICBtZnM6IFtcIm1mc1wiLCBcInNnblwiXSxcbiAgICAgICAgbWluOiBbXCJtaW5cIiwgXCJtc1wiXSxcbiAgICAgICAgbW5wOiBbXCJtbnBcIiwgXCJ6aFwiXSxcbiAgICAgICAgbXFnOiBbXCJtcWdcIiwgXCJtc1wiXSxcbiAgICAgICAgbXJlOiBbXCJtcmVcIiwgXCJzZ25cIl0sXG4gICAgICAgIG1zZDogW1wibXNkXCIsIFwic2duXCJdLFxuICAgICAgICBtc2k6IFtcIm1zaVwiLCBcIm1zXCJdLFxuICAgICAgICBtc3I6IFtcIm1zclwiLCBcInNnblwiXSxcbiAgICAgICAgbXVpOiBbXCJtdWlcIiwgXCJtc1wiXSxcbiAgICAgICAgbXpjOiBbXCJtemNcIiwgXCJzZ25cIl0sXG4gICAgICAgIG16ZzogW1wibXpnXCIsIFwic2duXCJdLFxuICAgICAgICBtenk6IFtcIm16eVwiLCBcInNnblwiXSxcbiAgICAgICAgbmFuOiBbXCJuYW5cIiwgXCJ6aFwiXSxcbiAgICAgICAgbmJzOiBbXCJuYnNcIiwgXCJzZ25cIl0sXG4gICAgICAgIG5jczogW1wibmNzXCIsIFwic2duXCJdLFxuICAgICAgICBuc2k6IFtcIm5zaVwiLCBcInNnblwiXSxcbiAgICAgICAgbnNsOiBbXCJuc2xcIiwgXCJzZ25cIl0sXG4gICAgICAgIG5zcDogW1wibnNwXCIsIFwic2duXCJdLFxuICAgICAgICBuc3I6IFtcIm5zclwiLCBcInNnblwiXSxcbiAgICAgICAgbnpzOiBbXCJuenNcIiwgXCJzZ25cIl0sXG4gICAgICAgIG9rbDogW1wib2tsXCIsIFwic2duXCJdLFxuICAgICAgICBvcm46IFtcIm9yblwiLCBcIm1zXCJdLFxuICAgICAgICBvcnM6IFtcIm9yc1wiLCBcIm1zXCJdLFxuICAgICAgICBwZWw6IFtcInBlbFwiLCBcIm1zXCJdLFxuICAgICAgICBwZ2E6IFtcInBnYVwiLCBcImFyXCJdLFxuICAgICAgICBwa3M6IFtcInBrc1wiLCBcInNnblwiXSxcbiAgICAgICAgcHJsOiBbXCJwcmxcIiwgXCJzZ25cIl0sXG4gICAgICAgIHByejogW1wicHJ6XCIsIFwic2duXCJdLFxuICAgICAgICBwc2M6IFtcInBzY1wiLCBcInNnblwiXSxcbiAgICAgICAgcHNkOiBbXCJwc2RcIiwgXCJzZ25cIl0sXG4gICAgICAgIHBzZTogW1wicHNlXCIsIFwibXNcIl0sXG4gICAgICAgIHBzZzogW1wicHNnXCIsIFwic2duXCJdLFxuICAgICAgICBwc2w6IFtcInBzbFwiLCBcInNnblwiXSxcbiAgICAgICAgcHNvOiBbXCJwc29cIiwgXCJzZ25cIl0sXG4gICAgICAgIHBzcDogW1wicHNwXCIsIFwic2duXCJdLFxuICAgICAgICBwc3I6IFtcInBzclwiLCBcInNnblwiXSxcbiAgICAgICAgcHlzOiBbXCJweXNcIiwgXCJzZ25cIl0sXG4gICAgICAgIHJtczogW1wicm1zXCIsIFwic2duXCJdLFxuICAgICAgICByc2k6IFtcInJzaVwiLCBcInNnblwiXSxcbiAgICAgICAgcnNsOiBbXCJyc2xcIiwgXCJzZ25cIl0sXG4gICAgICAgIHNkbDogW1wic2RsXCIsIFwic2duXCJdLFxuICAgICAgICBzZmI6IFtcInNmYlwiLCBcInNnblwiXSxcbiAgICAgICAgc2ZzOiBbXCJzZnNcIiwgXCJzZ25cIl0sXG4gICAgICAgIHNnZzogW1wic2dnXCIsIFwic2duXCJdLFxuICAgICAgICBzZ3g6IFtcInNneFwiLCBcInNnblwiXSxcbiAgICAgICAgc2h1OiBbXCJzaHVcIiwgXCJhclwiXSxcbiAgICAgICAgc2xmOiBbXCJzbGZcIiwgXCJzZ25cIl0sXG4gICAgICAgIHNsczogW1wic2xzXCIsIFwic2duXCJdLFxuICAgICAgICBzcWs6IFtcInNxa1wiLCBcInNnblwiXSxcbiAgICAgICAgc3FzOiBbXCJzcXNcIiwgXCJzZ25cIl0sXG4gICAgICAgIHNzaDogW1wic3NoXCIsIFwiYXJcIl0sXG4gICAgICAgIHNzcDogW1wic3NwXCIsIFwic2duXCJdLFxuICAgICAgICBzc3I6IFtcInNzclwiLCBcInNnblwiXSxcbiAgICAgICAgc3ZrOiBbXCJzdmtcIiwgXCJzZ25cIl0sXG4gICAgICAgIHN3YzogW1wic3djXCIsIFwic3dcIl0sXG4gICAgICAgIHN3aDogW1wic3doXCIsIFwic3dcIl0sXG4gICAgICAgIHN3bDogW1wic3dsXCIsIFwic2duXCJdLFxuICAgICAgICBzeXk6IFtcInN5eVwiLCBcInNnblwiXSxcbiAgICAgICAgdG13OiBbXCJ0bXdcIiwgXCJtc1wiXSxcbiAgICAgICAgdHNlOiBbXCJ0c2VcIiwgXCJzZ25cIl0sXG4gICAgICAgIHRzbTogW1widHNtXCIsIFwic2duXCJdLFxuICAgICAgICB0c3E6IFtcInRzcVwiLCBcInNnblwiXSxcbiAgICAgICAgdHNzOiBbXCJ0c3NcIiwgXCJzZ25cIl0sXG4gICAgICAgIHRzeTogW1widHN5XCIsIFwic2duXCJdLFxuICAgICAgICB0emE6IFtcInR6YVwiLCBcInNnblwiXSxcbiAgICAgICAgdWduOiBbXCJ1Z25cIiwgXCJzZ25cIl0sXG4gICAgICAgIHVneTogW1widWd5XCIsIFwic2duXCJdLFxuICAgICAgICB1a2w6IFtcInVrbFwiLCBcInNnblwiXSxcbiAgICAgICAgdWtzOiBbXCJ1a3NcIiwgXCJzZ25cIl0sXG4gICAgICAgIHVyazogW1widXJrXCIsIFwibXNcIl0sXG4gICAgICAgIHV6bjogW1widXpuXCIsIFwidXpcIl0sXG4gICAgICAgIHV6czogW1widXpzXCIsIFwidXpcIl0sXG4gICAgICAgIHZndDogW1widmd0XCIsIFwic2duXCJdLFxuICAgICAgICB2a2s6IFtcInZra1wiLCBcIm1zXCJdLFxuICAgICAgICB2a3Q6IFtcInZrdFwiLCBcIm1zXCJdLFxuICAgICAgICB2c2k6IFtcInZzaVwiLCBcInNnblwiXSxcbiAgICAgICAgdnNsOiBbXCJ2c2xcIiwgXCJzZ25cIl0sXG4gICAgICAgIHZzdjogW1widnN2XCIsIFwic2duXCJdLFxuICAgICAgICB3dXU6IFtcInd1dVwiLCBcInpoXCJdLFxuICAgICAgICB4a2k6IFtcInhraVwiLCBcInNnblwiXSxcbiAgICAgICAgeG1sOiBbXCJ4bWxcIiwgXCJzZ25cIl0sXG4gICAgICAgIHhtbTogW1wieG1tXCIsIFwibXNcIl0sXG4gICAgICAgIHhtczogW1wieG1zXCIsIFwic2duXCJdLFxuICAgICAgICB5ZHM6IFtcInlkc1wiLCBcInNnblwiXSxcbiAgICAgICAgeXNsOiBbXCJ5c2xcIiwgXCJzZ25cIl0sXG4gICAgICAgIHl1ZTogW1wieXVlXCIsIFwiemhcIl0sXG4gICAgICAgIHppYjogW1wiemliXCIsIFwic2duXCJdLFxuICAgICAgICB6bG06IFtcInpsbVwiLCBcIm1zXCJdLFxuICAgICAgICB6bWk6IFtcInptaVwiLCBcIm1zXCJdLFxuICAgICAgICB6c2w6IFtcInpzbFwiLCBcInNnblwiXSxcbiAgICAgICAgenNtOiBbXCJ6c21cIiwgXCJtc1wiXVxuICAgIH1cbn07XG5cbi8qKlxuICogQ29udmVydCBvbmx5IGEteiB0byB1cHBlcmNhc2UgYXMgcGVyIHNlY3Rpb24gNi4xIG9mIHRoZSBzcGVjXG4gKi9cbmZ1bmN0aW9uIHRvTGF0aW5VcHBlckNhc2Uoc3RyKSB7XG4gICAgdmFyIGkgPSBzdHIubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICB2YXIgY2ggPSBzdHIuY2hhckF0KGkpO1xuXG4gICAgICAgIGlmIChjaCA+PSBcImFcIiAmJiBjaCA8PSBcInpcIikgc3RyID0gc3RyLnNsaWNlKDAsIGkpICsgY2gudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZShpICsgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBUaGUgSXNTdHJ1Y3R1cmFsbHlWYWxpZExhbmd1YWdlVGFnIGFic3RyYWN0IG9wZXJhdGlvbiB2ZXJpZmllcyB0aGF0IHRoZSBsb2NhbGVcbiAqIGFyZ3VtZW50ICh3aGljaCBtdXN0IGJlIGEgU3RyaW5nIHZhbHVlKVxuICpcbiAqIC0gcmVwcmVzZW50cyBhIHdlbGwtZm9ybWVkIEJDUCA0NyBsYW5ndWFnZSB0YWcgYXMgc3BlY2lmaWVkIGluIFJGQyA1NjQ2IHNlY3Rpb25cbiAqICAgMi4xLCBvciBzdWNjZXNzb3IsXG4gKiAtIGRvZXMgbm90IGluY2x1ZGUgZHVwbGljYXRlIHZhcmlhbnQgc3VidGFncywgYW5kXG4gKiAtIGRvZXMgbm90IGluY2x1ZGUgZHVwbGljYXRlIHNpbmdsZXRvbiBzdWJ0YWdzLlxuICpcbiAqIFRoZSBhYnN0cmFjdCBvcGVyYXRpb24gcmV0dXJucyB0cnVlIGlmIGxvY2FsZSBjYW4gYmUgZ2VuZXJhdGVkIGZyb20gdGhlIEFCTkZcbiAqIGdyYW1tYXIgaW4gc2VjdGlvbiAyLjEgb2YgdGhlIFJGQywgc3RhcnRpbmcgd2l0aCBMYW5ndWFnZS1UYWcsIGFuZCBkb2VzIG5vdFxuICogY29udGFpbiBkdXBsaWNhdGUgdmFyaWFudCBvciBzaW5nbGV0b24gc3VidGFncyAob3RoZXIgdGhhbiBhcyBhIHByaXZhdGUgdXNlXG4gKiBzdWJ0YWcpLiBJdCByZXR1cm5zIGZhbHNlIG90aGVyd2lzZS4gVGVybWluYWwgdmFsdWUgY2hhcmFjdGVycyBpbiB0aGUgZ3JhbW1hciBhcmVcbiAqIGludGVycHJldGVkIGFzIHRoZSBVbmljb2RlIGVxdWl2YWxlbnRzIG9mIHRoZSBBU0NJSSBvY3RldCB2YWx1ZXMgZ2l2ZW4uXG4gKi9cbmZ1bmN0aW9uIC8qIDYuMi4yICovSXNTdHJ1Y3R1cmFsbHlWYWxpZExhbmd1YWdlVGFnKGxvY2FsZSkge1xuICAgIC8vIHJlcHJlc2VudHMgYSB3ZWxsLWZvcm1lZCBCQ1AgNDcgbGFuZ3VhZ2UgdGFnIGFzIHNwZWNpZmllZCBpbiBSRkMgNTY0NlxuICAgIGlmICghZXhwQkNQNDdTeW50YXgudGVzdChsb2NhbGUpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBkb2VzIG5vdCBpbmNsdWRlIGR1cGxpY2F0ZSB2YXJpYW50IHN1YnRhZ3MsIGFuZFxuICAgIGlmIChleHBWYXJpYW50RHVwZXMudGVzdChsb2NhbGUpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBkb2VzIG5vdCBpbmNsdWRlIGR1cGxpY2F0ZSBzaW5nbGV0b24gc3VidGFncy5cbiAgICBpZiAoZXhwU2luZ2xldG9uRHVwZXMudGVzdChsb2NhbGUpKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBUaGUgQ2Fub25pY2FsaXplTGFuZ3VhZ2VUYWcgYWJzdHJhY3Qgb3BlcmF0aW9uIHJldHVybnMgdGhlIGNhbm9uaWNhbCBhbmQgY2FzZS1cbiAqIHJlZ3VsYXJpemVkIGZvcm0gb2YgdGhlIGxvY2FsZSBhcmd1bWVudCAod2hpY2ggbXVzdCBiZSBhIFN0cmluZyB2YWx1ZSB0aGF0IGlzXG4gKiBhIHN0cnVjdHVyYWxseSB2YWxpZCBCQ1AgNDcgbGFuZ3VhZ2UgdGFnIGFzIHZlcmlmaWVkIGJ5IHRoZVxuICogSXNTdHJ1Y3R1cmFsbHlWYWxpZExhbmd1YWdlVGFnIGFic3RyYWN0IG9wZXJhdGlvbikuIEl0IHRha2VzIHRoZSBzdGVwc1xuICogc3BlY2lmaWVkIGluIFJGQyA1NjQ2IHNlY3Rpb24gNC41LCBvciBzdWNjZXNzb3IsIHRvIGJyaW5nIHRoZSBsYW5ndWFnZSB0YWdcbiAqIGludG8gY2Fub25pY2FsIGZvcm0sIGFuZCB0byByZWd1bGFyaXplIHRoZSBjYXNlIG9mIHRoZSBzdWJ0YWdzLCBidXQgZG9lcyBub3RcbiAqIHRha2UgdGhlIHN0ZXBzIHRvIGJyaW5nIGEgbGFuZ3VhZ2UgdGFnIGludG8g4oCcZXh0bGFuZyBmb3Jt4oCdIGFuZCB0byByZW9yZGVyXG4gKiB2YXJpYW50IHN1YnRhZ3MuXG5cbiAqIFRoZSBzcGVjaWZpY2F0aW9ucyBmb3IgZXh0ZW5zaW9ucyB0byBCQ1AgNDcgbGFuZ3VhZ2UgdGFncywgc3VjaCBhcyBSRkMgNjA2NyxcbiAqIG1heSBpbmNsdWRlIGNhbm9uaWNhbGl6YXRpb24gcnVsZXMgZm9yIHRoZSBleHRlbnNpb24gc3VidGFnIHNlcXVlbmNlcyB0aGV5XG4gKiBkZWZpbmUgdGhhdCBnbyBiZXlvbmQgdGhlIGNhbm9uaWNhbGl6YXRpb24gcnVsZXMgb2YgUkZDIDU2NDYgc2VjdGlvbiA0LjUuXG4gKiBJbXBsZW1lbnRhdGlvbnMgYXJlIGFsbG93ZWQsIGJ1dCBub3QgcmVxdWlyZWQsIHRvIGFwcGx5IHRoZXNlIGFkZGl0aW9uYWwgcnVsZXMuXG4gKi9cbmZ1bmN0aW9uIC8qIDYuMi4zICovQ2Fub25pY2FsaXplTGFuZ3VhZ2VUYWcobG9jYWxlKSB7XG4gICAgdmFyIG1hdGNoID0gdm9pZCAwLFxuICAgICAgICBwYXJ0cyA9IHZvaWQgMDtcblxuICAgIC8vIEEgbGFuZ3VhZ2UgdGFnIGlzIGluICdjYW5vbmljYWwgZm9ybScgd2hlbiB0aGUgdGFnIGlzIHdlbGwtZm9ybWVkXG4gICAgLy8gYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBpbiBTZWN0aW9ucyAyLjEgYW5kIDIuMlxuXG4gICAgLy8gU2VjdGlvbiAyLjEgc2F5cyBhbGwgc3VidGFncyB1c2UgbG93ZXJjYXNlLi4uXG4gICAgbG9jYWxlID0gbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyAuLi53aXRoIDIgZXhjZXB0aW9uczogJ3R3by1sZXR0ZXIgYW5kIGZvdXItbGV0dGVyIHN1YnRhZ3MgdGhhdCBuZWl0aGVyXG4gICAgLy8gYXBwZWFyIGF0IHRoZSBzdGFydCBvZiB0aGUgdGFnIG5vciBvY2N1ciBhZnRlciBzaW5nbGV0b25zLiAgU3VjaCB0d28tbGV0dGVyXG4gICAgLy8gc3VidGFncyBhcmUgYWxsIHVwcGVyY2FzZSAoYXMgaW4gdGhlIHRhZ3MgXCJlbi1DQS14LWNhXCIgb3IgXCJzZ24tQkUtRlJcIikgYW5kXG4gICAgLy8gZm91ci1sZXR0ZXIgc3VidGFncyBhcmUgdGl0bGVjYXNlIChhcyBpbiB0aGUgdGFnIFwiYXotTGF0bi14LWxhdG5cIikuXG4gICAgcGFydHMgPSBsb2NhbGUuc3BsaXQoJy0nKTtcbiAgICBmb3IgKHZhciBpID0gMSwgbWF4ID0gcGFydHMubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgLy8gVHdvLWxldHRlciBzdWJ0YWdzIGFyZSBhbGwgdXBwZXJjYXNlXG4gICAgICAgIGlmIChwYXJ0c1tpXS5sZW5ndGggPT09IDIpIHBhcnRzW2ldID0gcGFydHNbaV0udG9VcHBlckNhc2UoKTtcblxuICAgICAgICAvLyBGb3VyLWxldHRlciBzdWJ0YWdzIGFyZSB0aXRsZWNhc2VcbiAgICAgICAgZWxzZSBpZiAocGFydHNbaV0ubGVuZ3RoID09PSA0KSBwYXJ0c1tpXSA9IHBhcnRzW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGFydHNbaV0uc2xpY2UoMSk7XG5cbiAgICAgICAgICAgIC8vIElzIGl0IGEgc2luZ2xldG9uP1xuICAgICAgICAgICAgZWxzZSBpZiAocGFydHNbaV0ubGVuZ3RoID09PSAxICYmIHBhcnRzW2ldICE9PSAneCcpIGJyZWFrO1xuICAgIH1cbiAgICBsb2NhbGUgPSBhcnJKb2luLmNhbGwocGFydHMsICctJyk7XG5cbiAgICAvLyBUaGUgc3RlcHMgbGFpZCBvdXQgaW4gUkZDIDU2NDYgc2VjdGlvbiA0LjUgYXJlIGFzIGZvbGxvd3M6XG5cbiAgICAvLyAxLiAgRXh0ZW5zaW9uIHNlcXVlbmNlcyBhcmUgb3JkZXJlZCBpbnRvIGNhc2UtaW5zZW5zaXRpdmUgQVNDSUkgb3JkZXJcbiAgICAvLyAgICAgYnkgc2luZ2xldG9uIHN1YnRhZy5cbiAgICBpZiAoKG1hdGNoID0gbG9jYWxlLm1hdGNoKGV4cEV4dFNlcXVlbmNlcykpICYmIG1hdGNoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gVGhlIGJ1aWx0LWluIHNvcnQoKSBzb3J0cyBieSBBU0NJSSBvcmRlciwgc28gdXNlIHRoYXRcbiAgICAgICAgbWF0Y2guc29ydCgpO1xuXG4gICAgICAgIC8vIFJlcGxhY2UgYWxsIGV4dGVuc2lvbnMgd2l0aCB0aGUgam9pbmVkLCBzb3J0ZWQgYXJyYXlcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlLnJlcGxhY2UoUmVnRXhwKCcoPzonICsgZXhwRXh0U2VxdWVuY2VzLnNvdXJjZSArICcpKycsICdpJyksIGFyckpvaW4uY2FsbChtYXRjaCwgJycpKTtcbiAgICB9XG5cbiAgICAvLyAyLiAgUmVkdW5kYW50IG9yIGdyYW5kZmF0aGVyZWQgdGFncyBhcmUgcmVwbGFjZWQgYnkgdGhlaXIgJ1ByZWZlcnJlZC1cbiAgICAvLyAgICAgVmFsdWUnLCBpZiB0aGVyZSBpcyBvbmUuXG4gICAgaWYgKGhvcC5jYWxsKHJlZHVuZGFudFRhZ3MudGFncywgbG9jYWxlKSkgbG9jYWxlID0gcmVkdW5kYW50VGFncy50YWdzW2xvY2FsZV07XG5cbiAgICAvLyAzLiAgU3VidGFncyBhcmUgcmVwbGFjZWQgYnkgdGhlaXIgJ1ByZWZlcnJlZC1WYWx1ZScsIGlmIHRoZXJlIGlzIG9uZS5cbiAgICAvLyAgICAgRm9yIGV4dGxhbmdzLCB0aGUgb3JpZ2luYWwgcHJpbWFyeSBsYW5ndWFnZSBzdWJ0YWcgaXMgYWxzb1xuICAgIC8vICAgICByZXBsYWNlZCBpZiB0aGVyZSBpcyBhIHByaW1hcnkgbGFuZ3VhZ2Ugc3VidGFnIGluIHRoZSAnUHJlZmVycmVkLVxuICAgIC8vICAgICBWYWx1ZScuXG4gICAgcGFydHMgPSBsb2NhbGUuc3BsaXQoJy0nKTtcblxuICAgIGZvciAodmFyIF9pID0gMSwgX21heCA9IHBhcnRzLmxlbmd0aDsgX2kgPCBfbWF4OyBfaSsrKSB7XG4gICAgICAgIGlmIChob3AuY2FsbChyZWR1bmRhbnRUYWdzLnN1YnRhZ3MsIHBhcnRzW19pXSkpIHBhcnRzW19pXSA9IHJlZHVuZGFudFRhZ3Muc3VidGFnc1twYXJ0c1tfaV1dO2Vsc2UgaWYgKGhvcC5jYWxsKHJlZHVuZGFudFRhZ3MuZXh0TGFuZywgcGFydHNbX2ldKSkge1xuICAgICAgICAgICAgcGFydHNbX2ldID0gcmVkdW5kYW50VGFncy5leHRMYW5nW3BhcnRzW19pXV1bMF07XG5cbiAgICAgICAgICAgIC8vIEZvciBleHRsYW5nIHRhZ3MsIHRoZSBwcmVmaXggbmVlZHMgdG8gYmUgcmVtb3ZlZCBpZiBpdCBpcyByZWR1bmRhbnRcbiAgICAgICAgICAgIGlmIChfaSA9PT0gMSAmJiByZWR1bmRhbnRUYWdzLmV4dExhbmdbcGFydHNbMV1dWzFdID09PSBwYXJ0c1swXSkge1xuICAgICAgICAgICAgICAgIHBhcnRzID0gYXJyU2xpY2UuY2FsbChwYXJ0cywgX2krKyk7XG4gICAgICAgICAgICAgICAgX21heCAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyckpvaW4uY2FsbChwYXJ0cywgJy0nKTtcbn1cblxuLyoqXG4gKiBUaGUgRGVmYXVsdExvY2FsZSBhYnN0cmFjdCBvcGVyYXRpb24gcmV0dXJucyBhIFN0cmluZyB2YWx1ZSByZXByZXNlbnRpbmcgdGhlXG4gKiBzdHJ1Y3R1cmFsbHkgdmFsaWQgKDYuMi4yKSBhbmQgY2Fub25pY2FsaXplZCAoNi4yLjMpIEJDUCA0NyBsYW5ndWFnZSB0YWcgZm9yIHRoZVxuICogaG9zdCBlbnZpcm9ubWVudOKAmXMgY3VycmVudCBsb2NhbGUuXG4gKi9cbmZ1bmN0aW9uIC8qIDYuMi40ICovRGVmYXVsdExvY2FsZSgpIHtcbiAgICByZXR1cm4gZGVmYXVsdExvY2FsZTtcbn1cblxuLy8gU2VjdCA2LjMgQ3VycmVuY3kgQ29kZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBleHBDdXJyZW5jeUNvZGUgPSAvXltBLVpdezN9JC87XG5cbi8qKlxuICogVGhlIElzV2VsbEZvcm1lZEN1cnJlbmN5Q29kZSBhYnN0cmFjdCBvcGVyYXRpb24gdmVyaWZpZXMgdGhhdCB0aGUgY3VycmVuY3kgYXJndW1lbnRcbiAqIChhZnRlciBjb252ZXJzaW9uIHRvIGEgU3RyaW5nIHZhbHVlKSByZXByZXNlbnRzIGEgd2VsbC1mb3JtZWQgMy1sZXR0ZXIgSVNPIGN1cnJlbmN5XG4gKiBjb2RlLiBUaGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuZnVuY3Rpb24gLyogNi4zLjEgKi9Jc1dlbGxGb3JtZWRDdXJyZW5jeUNvZGUoY3VycmVuY3kpIHtcbiAgICAvLyAxLiBMZXQgYGNgIGJlIFRvU3RyaW5nKGN1cnJlbmN5KVxuICAgIHZhciBjID0gU3RyaW5nKGN1cnJlbmN5KTtcblxuICAgIC8vIDIuIExldCBgbm9ybWFsaXplZGAgYmUgdGhlIHJlc3VsdCBvZiBtYXBwaW5nIGMgdG8gdXBwZXIgY2FzZSBhcyBkZXNjcmliZWRcbiAgICAvLyAgICBpbiA2LjEuXG4gICAgdmFyIG5vcm1hbGl6ZWQgPSB0b0xhdGluVXBwZXJDYXNlKGMpO1xuXG4gICAgLy8gMy4gSWYgdGhlIHN0cmluZyBsZW5ndGggb2Ygbm9ybWFsaXplZCBpcyBub3QgMywgcmV0dXJuIGZhbHNlLlxuICAgIC8vIDQuIElmIG5vcm1hbGl6ZWQgY29udGFpbnMgYW55IGNoYXJhY3RlciB0aGF0IGlzIG5vdCBpbiB0aGUgcmFuZ2UgXCJBXCIgdG8gXCJaXCJcbiAgICAvLyAgICAoVSswMDQxIHRvIFUrMDA1QSksIHJldHVybiBmYWxzZS5cbiAgICBpZiAoZXhwQ3VycmVuY3lDb2RlLnRlc3Qobm9ybWFsaXplZCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyA1LiBSZXR1cm4gdHJ1ZVxuICAgIHJldHVybiB0cnVlO1xufVxuXG52YXIgZXhwVW5pY29kZUV4U2VxID0gLy11KD86LVswLTlhLXpdezIsOH0pKy9naTsgLy8gU2VlIGBleHRlbnNpb25gIGJlbG93XG5cbmZ1bmN0aW9uIC8qIDkuMi4xICovQ2Fub25pY2FsaXplTG9jYWxlTGlzdChsb2NhbGVzKSB7XG4gICAgLy8gVGhlIGFic3RyYWN0IG9wZXJhdGlvbiBDYW5vbmljYWxpemVMb2NhbGVMaXN0IHRha2VzIHRoZSBmb2xsb3dpbmcgc3RlcHM6XG5cbiAgICAvLyAxLiBJZiBsb2NhbGVzIGlzIHVuZGVmaW5lZCwgdGhlbiBhLiBSZXR1cm4gYSBuZXcgZW1wdHkgTGlzdFxuICAgIGlmIChsb2NhbGVzID09PSB1bmRlZmluZWQpIHJldHVybiBuZXcgTGlzdCgpO1xuXG4gICAgLy8gMi4gTGV0IHNlZW4gYmUgYSBuZXcgZW1wdHkgTGlzdC5cbiAgICB2YXIgc2VlbiA9IG5ldyBMaXN0KCk7XG5cbiAgICAvLyAzLiBJZiBsb2NhbGVzIGlzIGEgU3RyaW5nIHZhbHVlLCB0aGVuXG4gICAgLy8gICAgYS4gTGV0IGxvY2FsZXMgYmUgYSBuZXcgYXJyYXkgY3JlYXRlZCBhcyBpZiBieSB0aGUgZXhwcmVzc2lvbiBuZXdcbiAgICAvLyAgICBBcnJheShsb2NhbGVzKSB3aGVyZSBBcnJheSBpcyB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gY29uc3RydWN0b3Igd2l0aFxuICAgIC8vICAgIHRoYXQgbmFtZSBhbmQgbG9jYWxlcyBpcyB0aGUgdmFsdWUgb2YgbG9jYWxlcy5cbiAgICBsb2NhbGVzID0gdHlwZW9mIGxvY2FsZXMgPT09ICdzdHJpbmcnID8gW2xvY2FsZXNdIDogbG9jYWxlcztcblxuICAgIC8vIDQuIExldCBPIGJlIFRvT2JqZWN0KGxvY2FsZXMpLlxuICAgIHZhciBPID0gdG9PYmplY3QobG9jYWxlcyk7XG5cbiAgICAvLyA1LiBMZXQgbGVuVmFsdWUgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgIC8vICAgIE8gd2l0aCB0aGUgYXJndW1lbnQgXCJsZW5ndGhcIi5cbiAgICAvLyA2LiBMZXQgbGVuIGJlIFRvVWludDMyKGxlblZhbHVlKS5cbiAgICB2YXIgbGVuID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuXG4gICAgLy8gNy4gTGV0IGsgYmUgMC5cbiAgICB2YXIgayA9IDA7XG5cbiAgICAvLyA4LiBSZXBlYXQsIHdoaWxlIGsgPCBsZW5cbiAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAvLyBhLiBMZXQgUGsgYmUgVG9TdHJpbmcoaykuXG4gICAgICAgIHZhciBQayA9IFN0cmluZyhrKTtcblxuICAgICAgICAvLyBiLiBMZXQga1ByZXNlbnQgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0hhc1Byb3BlcnR5XV0gaW50ZXJuYWxcbiAgICAgICAgLy8gICAgbWV0aG9kIG9mIE8gd2l0aCBhcmd1bWVudCBQay5cbiAgICAgICAgdmFyIGtQcmVzZW50ID0gUGsgaW4gTztcblxuICAgICAgICAvLyBjLiBJZiBrUHJlc2VudCBpcyB0cnVlLCB0aGVuXG4gICAgICAgIGlmIChrUHJlc2VudCkge1xuICAgICAgICAgICAgLy8gaS4gTGV0IGtWYWx1ZSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWxcbiAgICAgICAgICAgIC8vICAgICBtZXRob2Qgb2YgTyB3aXRoIGFyZ3VtZW50IFBrLlxuICAgICAgICAgICAgdmFyIGtWYWx1ZSA9IE9bUGtdO1xuXG4gICAgICAgICAgICAvLyBpaS4gSWYgdGhlIHR5cGUgb2Yga1ZhbHVlIGlzIG5vdCBTdHJpbmcgb3IgT2JqZWN0LCB0aGVuIHRocm93IGFcbiAgICAgICAgICAgIC8vICAgICBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuICAgICAgICAgICAgaWYgKGtWYWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2Yga1ZhbHVlICE9PSAnc3RyaW5nJyAmJiAodHlwZW9mIGtWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBiYWJlbEhlbHBlcnMkMVtcInR5cGVvZlwiXShrVmFsdWUpKSAhPT0gJ29iamVjdCcpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1N0cmluZyBvciBPYmplY3QgdHlwZSBleHBlY3RlZCcpO1xuXG4gICAgICAgICAgICAvLyBpaWkuIExldCB0YWcgYmUgVG9TdHJpbmcoa1ZhbHVlKS5cbiAgICAgICAgICAgIHZhciB0YWcgPSBTdHJpbmcoa1ZhbHVlKTtcblxuICAgICAgICAgICAgLy8gaXYuIElmIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gICAgICAgICAgICAvLyAgICAgSXNTdHJ1Y3R1cmFsbHlWYWxpZExhbmd1YWdlVGFnIChkZWZpbmVkIGluIDYuMi4yKSwgcGFzc2luZyB0YWcgYXNcbiAgICAgICAgICAgIC8vICAgICB0aGUgYXJndW1lbnQsIGlzIGZhbHNlLCB0aGVuIHRocm93IGEgUmFuZ2VFcnJvciBleGNlcHRpb24uXG4gICAgICAgICAgICBpZiAoIUlzU3RydWN0dXJhbGx5VmFsaWRMYW5ndWFnZVRhZyh0YWcpKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIidcIiArIHRhZyArIFwiJyBpcyBub3QgYSBzdHJ1Y3R1cmFsbHkgdmFsaWQgbGFuZ3VhZ2UgdGFnXCIpO1xuXG4gICAgICAgICAgICAvLyB2LiBMZXQgdGFnIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gICAgICAgICAgICAvLyAgICBDYW5vbmljYWxpemVMYW5ndWFnZVRhZyAoZGVmaW5lZCBpbiA2LjIuMyksIHBhc3NpbmcgdGFnIGFzIHRoZVxuICAgICAgICAgICAgLy8gICAgYXJndW1lbnQuXG4gICAgICAgICAgICB0YWcgPSBDYW5vbmljYWxpemVMYW5ndWFnZVRhZyh0YWcpO1xuXG4gICAgICAgICAgICAvLyB2aS4gSWYgdGFnIGlzIG5vdCBhbiBlbGVtZW50IG9mIHNlZW4sIHRoZW4gYXBwZW5kIHRhZyBhcyB0aGUgbGFzdFxuICAgICAgICAgICAgLy8gICAgIGVsZW1lbnQgb2Ygc2Vlbi5cbiAgICAgICAgICAgIGlmIChhcnJJbmRleE9mLmNhbGwoc2VlbiwgdGFnKSA9PT0gLTEpIGFyclB1c2guY2FsbChzZWVuLCB0YWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZC4gSW5jcmVhc2UgayBieSAxLlxuICAgICAgICBrKys7XG4gICAgfVxuXG4gICAgLy8gOS4gUmV0dXJuIHNlZW4uXG4gICAgcmV0dXJuIHNlZW47XG59XG5cbi8qKlxuICogVGhlIEJlc3RBdmFpbGFibGVMb2NhbGUgYWJzdHJhY3Qgb3BlcmF0aW9uIGNvbXBhcmVzIHRoZSBwcm92aWRlZCBhcmd1bWVudFxuICogbG9jYWxlLCB3aGljaCBtdXN0IGJlIGEgU3RyaW5nIHZhbHVlIHdpdGggYSBzdHJ1Y3R1cmFsbHkgdmFsaWQgYW5kXG4gKiBjYW5vbmljYWxpemVkIEJDUCA0NyBsYW5ndWFnZSB0YWcsIGFnYWluc3QgdGhlIGxvY2FsZXMgaW4gYXZhaWxhYmxlTG9jYWxlcyBhbmRcbiAqIHJldHVybnMgZWl0aGVyIHRoZSBsb25nZXN0IG5vbi1lbXB0eSBwcmVmaXggb2YgbG9jYWxlIHRoYXQgaXMgYW4gZWxlbWVudCBvZlxuICogYXZhaWxhYmxlTG9jYWxlcywgb3IgdW5kZWZpbmVkIGlmIHRoZXJlIGlzIG5vIHN1Y2ggZWxlbWVudC4gSXQgdXNlcyB0aGVcbiAqIGZhbGxiYWNrIG1lY2hhbmlzbSBvZiBSRkMgNDY0Nywgc2VjdGlvbiAzLjQuIFRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG5mdW5jdGlvbiAvKiA5LjIuMiAqL0Jlc3RBdmFpbGFibGVMb2NhbGUoYXZhaWxhYmxlTG9jYWxlcywgbG9jYWxlKSB7XG4gICAgLy8gMS4gTGV0IGNhbmRpZGF0ZSBiZSBsb2NhbGVcbiAgICB2YXIgY2FuZGlkYXRlID0gbG9jYWxlO1xuXG4gICAgLy8gMi4gUmVwZWF0XG4gICAgd2hpbGUgKGNhbmRpZGF0ZSkge1xuICAgICAgICAvLyBhLiBJZiBhdmFpbGFibGVMb2NhbGVzIGNvbnRhaW5zIGFuIGVsZW1lbnQgZXF1YWwgdG8gY2FuZGlkYXRlLCB0aGVuIHJldHVyblxuICAgICAgICAvLyBjYW5kaWRhdGUuXG4gICAgICAgIGlmIChhcnJJbmRleE9mLmNhbGwoYXZhaWxhYmxlTG9jYWxlcywgY2FuZGlkYXRlKSA+IC0xKSByZXR1cm4gY2FuZGlkYXRlO1xuXG4gICAgICAgIC8vIGIuIExldCBwb3MgYmUgdGhlIGNoYXJhY3RlciBpbmRleCBvZiB0aGUgbGFzdCBvY2N1cnJlbmNlIG9mIFwiLVwiXG4gICAgICAgIC8vIChVKzAwMkQpIHdpdGhpbiBjYW5kaWRhdGUuIElmIHRoYXQgY2hhcmFjdGVyIGRvZXMgbm90IG9jY3VyLCByZXR1cm5cbiAgICAgICAgLy8gdW5kZWZpbmVkLlxuICAgICAgICB2YXIgcG9zID0gY2FuZGlkYXRlLmxhc3RJbmRleE9mKCctJyk7XG5cbiAgICAgICAgaWYgKHBvcyA8IDApIHJldHVybjtcblxuICAgICAgICAvLyBjLiBJZiBwb3Mg4omlIDIgYW5kIHRoZSBjaGFyYWN0ZXIgXCItXCIgb2NjdXJzIGF0IGluZGV4IHBvcy0yIG9mIGNhbmRpZGF0ZSxcbiAgICAgICAgLy8gICAgdGhlbiBkZWNyZWFzZSBwb3MgYnkgMi5cbiAgICAgICAgaWYgKHBvcyA+PSAyICYmIGNhbmRpZGF0ZS5jaGFyQXQocG9zIC0gMikgPT09ICctJykgcG9zIC09IDI7XG5cbiAgICAgICAgLy8gZC4gTGV0IGNhbmRpZGF0ZSBiZSB0aGUgc3Vic3RyaW5nIG9mIGNhbmRpZGF0ZSBmcm9tIHBvc2l0aW9uIDAsIGluY2x1c2l2ZSxcbiAgICAgICAgLy8gICAgdG8gcG9zaXRpb24gcG9zLCBleGNsdXNpdmUuXG4gICAgICAgIGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZS5zdWJzdHJpbmcoMCwgcG9zKTtcbiAgICB9XG59XG5cbi8qKlxuICogVGhlIExvb2t1cE1hdGNoZXIgYWJzdHJhY3Qgb3BlcmF0aW9uIGNvbXBhcmVzIHJlcXVlc3RlZExvY2FsZXMsIHdoaWNoIG11c3QgYmVcbiAqIGEgTGlzdCBhcyByZXR1cm5lZCBieSBDYW5vbmljYWxpemVMb2NhbGVMaXN0LCBhZ2FpbnN0IHRoZSBsb2NhbGVzIGluXG4gKiBhdmFpbGFibGVMb2NhbGVzIGFuZCBkZXRlcm1pbmVzIHRoZSBiZXN0IGF2YWlsYWJsZSBsYW5ndWFnZSB0byBtZWV0IHRoZVxuICogcmVxdWVzdC4gVGhlIGZvbGxvd2luZyBzdGVwcyBhcmUgdGFrZW46XG4gKi9cbmZ1bmN0aW9uIC8qIDkuMi4zICovTG9va3VwTWF0Y2hlcihhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzKSB7XG4gICAgLy8gMS4gTGV0IGkgYmUgMC5cbiAgICB2YXIgaSA9IDA7XG5cbiAgICAvLyAyLiBMZXQgbGVuIGJlIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gcmVxdWVzdGVkTG9jYWxlcy5cbiAgICB2YXIgbGVuID0gcmVxdWVzdGVkTG9jYWxlcy5sZW5ndGg7XG5cbiAgICAvLyAzLiBMZXQgYXZhaWxhYmxlTG9jYWxlIGJlIHVuZGVmaW5lZC5cbiAgICB2YXIgYXZhaWxhYmxlTG9jYWxlID0gdm9pZCAwO1xuXG4gICAgdmFyIGxvY2FsZSA9IHZvaWQgMCxcbiAgICAgICAgbm9FeHRlbnNpb25zTG9jYWxlID0gdm9pZCAwO1xuXG4gICAgLy8gNC4gUmVwZWF0IHdoaWxlIGkgPCBsZW4gYW5kIGF2YWlsYWJsZUxvY2FsZSBpcyB1bmRlZmluZWQ6XG4gICAgd2hpbGUgKGkgPCBsZW4gJiYgIWF2YWlsYWJsZUxvY2FsZSkge1xuICAgICAgICAvLyBhLiBMZXQgbG9jYWxlIGJlIHRoZSBlbGVtZW50IG9mIHJlcXVlc3RlZExvY2FsZXMgYXQgMC1vcmlnaW5lZCBsaXN0XG4gICAgICAgIC8vICAgIHBvc2l0aW9uIGkuXG4gICAgICAgIGxvY2FsZSA9IHJlcXVlc3RlZExvY2FsZXNbaV07XG5cbiAgICAgICAgLy8gYi4gTGV0IG5vRXh0ZW5zaW9uc0xvY2FsZSBiZSB0aGUgU3RyaW5nIHZhbHVlIHRoYXQgaXMgbG9jYWxlIHdpdGggYWxsXG4gICAgICAgIC8vICAgIFVuaWNvZGUgbG9jYWxlIGV4dGVuc2lvbiBzZXF1ZW5jZXMgcmVtb3ZlZC5cbiAgICAgICAgbm9FeHRlbnNpb25zTG9jYWxlID0gU3RyaW5nKGxvY2FsZSkucmVwbGFjZShleHBVbmljb2RlRXhTZXEsICcnKTtcblxuICAgICAgICAvLyBjLiBMZXQgYXZhaWxhYmxlTG9jYWxlIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGVcbiAgICAgICAgLy8gICAgQmVzdEF2YWlsYWJsZUxvY2FsZSBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWQgaW4gOS4yLjIpIHdpdGhcbiAgICAgICAgLy8gICAgYXJndW1lbnRzIGF2YWlsYWJsZUxvY2FsZXMgYW5kIG5vRXh0ZW5zaW9uc0xvY2FsZS5cbiAgICAgICAgYXZhaWxhYmxlTG9jYWxlID0gQmVzdEF2YWlsYWJsZUxvY2FsZShhdmFpbGFibGVMb2NhbGVzLCBub0V4dGVuc2lvbnNMb2NhbGUpO1xuXG4gICAgICAgIC8vIGQuIEluY3JlYXNlIGkgYnkgMS5cbiAgICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIDUuIExldCByZXN1bHQgYmUgYSBuZXcgUmVjb3JkLlxuICAgIHZhciByZXN1bHQgPSBuZXcgUmVjb3JkKCk7XG5cbiAgICAvLyA2LiBJZiBhdmFpbGFibGVMb2NhbGUgaXMgbm90IHVuZGVmaW5lZCwgdGhlblxuICAgIGlmIChhdmFpbGFibGVMb2NhbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBhLiBTZXQgcmVzdWx0LltbbG9jYWxlXV0gdG8gYXZhaWxhYmxlTG9jYWxlLlxuICAgICAgICByZXN1bHRbJ1tbbG9jYWxlXV0nXSA9IGF2YWlsYWJsZUxvY2FsZTtcblxuICAgICAgICAvLyBiLiBJZiBsb2NhbGUgYW5kIG5vRXh0ZW5zaW9uc0xvY2FsZSBhcmUgbm90IHRoZSBzYW1lIFN0cmluZyB2YWx1ZSwgdGhlblxuICAgICAgICBpZiAoU3RyaW5nKGxvY2FsZSkgIT09IFN0cmluZyhub0V4dGVuc2lvbnNMb2NhbGUpKSB7XG4gICAgICAgICAgICAvLyBpLiBMZXQgZXh0ZW5zaW9uIGJlIHRoZSBTdHJpbmcgdmFsdWUgY29uc2lzdGluZyBvZiB0aGUgZmlyc3RcbiAgICAgICAgICAgIC8vICAgIHN1YnN0cmluZyBvZiBsb2NhbGUgdGhhdCBpcyBhIFVuaWNvZGUgbG9jYWxlIGV4dGVuc2lvbiBzZXF1ZW5jZS5cbiAgICAgICAgICAgIHZhciBleHRlbnNpb24gPSBsb2NhbGUubWF0Y2goZXhwVW5pY29kZUV4U2VxKVswXTtcblxuICAgICAgICAgICAgLy8gaWkuIExldCBleHRlbnNpb25JbmRleCBiZSB0aGUgY2hhcmFjdGVyIHBvc2l0aW9uIG9mIHRoZSBpbml0aWFsXG4gICAgICAgICAgICAvLyAgICAgXCItXCIgb2YgdGhlIGZpcnN0IFVuaWNvZGUgbG9jYWxlIGV4dGVuc2lvbiBzZXF1ZW5jZSB3aXRoaW4gbG9jYWxlLlxuICAgICAgICAgICAgdmFyIGV4dGVuc2lvbkluZGV4ID0gbG9jYWxlLmluZGV4T2YoJy11LScpO1xuXG4gICAgICAgICAgICAvLyBpaWkuIFNldCByZXN1bHQuW1tleHRlbnNpb25dXSB0byBleHRlbnNpb24uXG4gICAgICAgICAgICByZXN1bHRbJ1tbZXh0ZW5zaW9uXV0nXSA9IGV4dGVuc2lvbjtcblxuICAgICAgICAgICAgLy8gaXYuIFNldCByZXN1bHQuW1tleHRlbnNpb25JbmRleF1dIHRvIGV4dGVuc2lvbkluZGV4LlxuICAgICAgICAgICAgcmVzdWx0WydbW2V4dGVuc2lvbkluZGV4XV0nXSA9IGV4dGVuc2lvbkluZGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIDcuIEVsc2VcbiAgICBlbHNlXG4gICAgICAgIC8vIGEuIFNldCByZXN1bHQuW1tsb2NhbGVdXSB0byB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgdGhlIERlZmF1bHRMb2NhbGUgYWJzdHJhY3RcbiAgICAgICAgLy8gICAgb3BlcmF0aW9uIChkZWZpbmVkIGluIDYuMi40KS5cbiAgICAgICAgcmVzdWx0WydbW2xvY2FsZV1dJ10gPSBEZWZhdWx0TG9jYWxlKCk7XG5cbiAgICAvLyA4LiBSZXR1cm4gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgQmVzdEZpdE1hdGNoZXIgYWJzdHJhY3Qgb3BlcmF0aW9uIGNvbXBhcmVzIHJlcXVlc3RlZExvY2FsZXMsIHdoaWNoIG11c3QgYmVcbiAqIGEgTGlzdCBhcyByZXR1cm5lZCBieSBDYW5vbmljYWxpemVMb2NhbGVMaXN0LCBhZ2FpbnN0IHRoZSBsb2NhbGVzIGluXG4gKiBhdmFpbGFibGVMb2NhbGVzIGFuZCBkZXRlcm1pbmVzIHRoZSBiZXN0IGF2YWlsYWJsZSBsYW5ndWFnZSB0byBtZWV0IHRoZVxuICogcmVxdWVzdC4gVGhlIGFsZ29yaXRobSBpcyBpbXBsZW1lbnRhdGlvbiBkZXBlbmRlbnQsIGJ1dCBzaG91bGQgcHJvZHVjZSByZXN1bHRzXG4gKiB0aGF0IGEgdHlwaWNhbCB1c2VyIG9mIHRoZSByZXF1ZXN0ZWQgbG9jYWxlcyB3b3VsZCBwZXJjZWl2ZSBhcyBhdCBsZWFzdCBhc1xuICogZ29vZCBhcyB0aG9zZSBwcm9kdWNlZCBieSB0aGUgTG9va3VwTWF0Y2hlciBhYnN0cmFjdCBvcGVyYXRpb24uIE9wdGlvbnNcbiAqIHNwZWNpZmllZCB0aHJvdWdoIFVuaWNvZGUgbG9jYWxlIGV4dGVuc2lvbiBzZXF1ZW5jZXMgbXVzdCBiZSBpZ25vcmVkIGJ5IHRoZVxuICogYWxnb3JpdGhtLiBJbmZvcm1hdGlvbiBhYm91dCBzdWNoIHN1YnNlcXVlbmNlcyBpcyByZXR1cm5lZCBzZXBhcmF0ZWx5LlxuICogVGhlIGFic3RyYWN0IG9wZXJhdGlvbiByZXR1cm5zIGEgcmVjb3JkIHdpdGggYSBbW2xvY2FsZV1dIGZpZWxkLCB3aG9zZSB2YWx1ZVxuICogaXMgdGhlIGxhbmd1YWdlIHRhZyBvZiB0aGUgc2VsZWN0ZWQgbG9jYWxlLCB3aGljaCBtdXN0IGJlIGFuIGVsZW1lbnQgb2ZcbiAqIGF2YWlsYWJsZUxvY2FsZXMuIElmIHRoZSBsYW5ndWFnZSB0YWcgb2YgdGhlIHJlcXVlc3QgbG9jYWxlIHRoYXQgbGVkIHRvIHRoZVxuICogc2VsZWN0ZWQgbG9jYWxlIGNvbnRhaW5lZCBhIFVuaWNvZGUgbG9jYWxlIGV4dGVuc2lvbiBzZXF1ZW5jZSwgdGhlbiB0aGVcbiAqIHJldHVybmVkIHJlY29yZCBhbHNvIGNvbnRhaW5zIGFuIFtbZXh0ZW5zaW9uXV0gZmllbGQgd2hvc2UgdmFsdWUgaXMgdGhlIGZpcnN0XG4gKiBVbmljb2RlIGxvY2FsZSBleHRlbnNpb24gc2VxdWVuY2UsIGFuZCBhbiBbW2V4dGVuc2lvbkluZGV4XV0gZmllbGQgd2hvc2UgdmFsdWVcbiAqIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgVW5pY29kZSBsb2NhbGUgZXh0ZW5zaW9uIHNlcXVlbmNlIHdpdGhpbiB0aGUgcmVxdWVzdFxuICogbG9jYWxlIGxhbmd1YWdlIHRhZy5cbiAqL1xuZnVuY3Rpb24gLyogOS4yLjQgKi9CZXN0Rml0TWF0Y2hlcihhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzKSB7XG4gICAgcmV0dXJuIExvb2t1cE1hdGNoZXIoYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcyk7XG59XG5cbi8qKlxuICogVGhlIFJlc29sdmVMb2NhbGUgYWJzdHJhY3Qgb3BlcmF0aW9uIGNvbXBhcmVzIGEgQkNQIDQ3IGxhbmd1YWdlIHByaW9yaXR5IGxpc3RcbiAqIHJlcXVlc3RlZExvY2FsZXMgYWdhaW5zdCB0aGUgbG9jYWxlcyBpbiBhdmFpbGFibGVMb2NhbGVzIGFuZCBkZXRlcm1pbmVzIHRoZVxuICogYmVzdCBhdmFpbGFibGUgbGFuZ3VhZ2UgdG8gbWVldCB0aGUgcmVxdWVzdC4gYXZhaWxhYmxlTG9jYWxlcyBhbmRcbiAqIHJlcXVlc3RlZExvY2FsZXMgbXVzdCBiZSBwcm92aWRlZCBhcyBMaXN0IHZhbHVlcywgb3B0aW9ucyBhcyBhIFJlY29yZC5cbiAqL1xuZnVuY3Rpb24gLyogOS4yLjUgKi9SZXNvbHZlTG9jYWxlKGF2YWlsYWJsZUxvY2FsZXMsIHJlcXVlc3RlZExvY2FsZXMsIG9wdGlvbnMsIHJlbGV2YW50RXh0ZW5zaW9uS2V5cywgbG9jYWxlRGF0YSkge1xuICAgIGlmIChhdmFpbGFibGVMb2NhbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoJ05vIGxvY2FsZSBkYXRhIGhhcyBiZWVuIHByb3ZpZGVkIGZvciB0aGlzIG9iamVjdCB5ZXQuJyk7XG4gICAgfVxuXG4gICAgLy8gVGhlIGZvbGxvd2luZyBzdGVwcyBhcmUgdGFrZW46XG4gICAgLy8gMS4gTGV0IG1hdGNoZXIgYmUgdGhlIHZhbHVlIG9mIG9wdGlvbnMuW1tsb2NhbGVNYXRjaGVyXV0uXG4gICAgdmFyIG1hdGNoZXIgPSBvcHRpb25zWydbW2xvY2FsZU1hdGNoZXJdXSddO1xuXG4gICAgdmFyIHIgPSB2b2lkIDA7XG5cbiAgICAvLyAyLiBJZiBtYXRjaGVyIGlzIFwibG9va3VwXCIsIHRoZW5cbiAgICBpZiAobWF0Y2hlciA9PT0gJ2xvb2t1cCcpXG4gICAgICAgIC8vIGEuIExldCByIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgTG9va3VwTWF0Y2hlciBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAgICAgLy8gICAgKGRlZmluZWQgaW4gOS4yLjMpIHdpdGggYXJndW1lbnRzIGF2YWlsYWJsZUxvY2FsZXMgYW5kXG4gICAgICAgIC8vICAgIHJlcXVlc3RlZExvY2FsZXMuXG4gICAgICAgIHIgPSBMb29rdXBNYXRjaGVyKGF2YWlsYWJsZUxvY2FsZXMsIHJlcXVlc3RlZExvY2FsZXMpO1xuXG4gICAgICAgIC8vIDMuIEVsc2VcbiAgICBlbHNlXG4gICAgICAgIC8vIGEuIExldCByIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgQmVzdEZpdE1hdGNoZXIgYWJzdHJhY3RcbiAgICAgICAgLy8gICAgb3BlcmF0aW9uIChkZWZpbmVkIGluIDkuMi40KSB3aXRoIGFyZ3VtZW50cyBhdmFpbGFibGVMb2NhbGVzIGFuZFxuICAgICAgICAvLyAgICByZXF1ZXN0ZWRMb2NhbGVzLlxuICAgICAgICByID0gQmVzdEZpdE1hdGNoZXIoYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcyk7XG5cbiAgICAvLyA0LiBMZXQgZm91bmRMb2NhbGUgYmUgdGhlIHZhbHVlIG9mIHIuW1tsb2NhbGVdXS5cbiAgICB2YXIgZm91bmRMb2NhbGUgPSByWydbW2xvY2FsZV1dJ107XG5cbiAgICB2YXIgZXh0ZW5zaW9uU3VidGFncyA9IHZvaWQgMCxcbiAgICAgICAgZXh0ZW5zaW9uU3VidGFnc0xlbmd0aCA9IHZvaWQgMDtcblxuICAgIC8vIDUuIElmIHIgaGFzIGFuIFtbZXh0ZW5zaW9uXV0gZmllbGQsIHRoZW5cbiAgICBpZiAoaG9wLmNhbGwociwgJ1tbZXh0ZW5zaW9uXV0nKSkge1xuICAgICAgICAvLyBhLiBMZXQgZXh0ZW5zaW9uIGJlIHRoZSB2YWx1ZSBvZiByLltbZXh0ZW5zaW9uXV0uXG4gICAgICAgIHZhciBleHRlbnNpb24gPSByWydbW2V4dGVuc2lvbl1dJ107XG4gICAgICAgIC8vIGIuIExldCBzcGxpdCBiZSB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gZnVuY3Rpb24gb2JqZWN0IGRlZmluZWQgaW4gRVM1LFxuICAgICAgICAvLyAgICAxNS41LjQuMTQuXG4gICAgICAgIHZhciBzcGxpdCA9IFN0cmluZy5wcm90b3R5cGUuc3BsaXQ7XG4gICAgICAgIC8vIGMuIExldCBleHRlbnNpb25TdWJ0YWdzIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDYWxsXV0gaW50ZXJuYWxcbiAgICAgICAgLy8gICAgbWV0aG9kIG9mIHNwbGl0IHdpdGggZXh0ZW5zaW9uIGFzIHRoZSB0aGlzIHZhbHVlIGFuZCBhbiBhcmd1bWVudFxuICAgICAgICAvLyAgICBsaXN0IGNvbnRhaW5pbmcgdGhlIHNpbmdsZSBpdGVtIFwiLVwiLlxuICAgICAgICBleHRlbnNpb25TdWJ0YWdzID0gc3BsaXQuY2FsbChleHRlbnNpb24sICctJyk7XG4gICAgICAgIC8vIGQuIExldCBleHRlbnNpb25TdWJ0YWdzTGVuZ3RoIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXVxuICAgICAgICAvLyAgICBpbnRlcm5hbCBtZXRob2Qgb2YgZXh0ZW5zaW9uU3VidGFncyB3aXRoIGFyZ3VtZW50IFwibGVuZ3RoXCIuXG4gICAgICAgIGV4dGVuc2lvblN1YnRhZ3NMZW5ndGggPSBleHRlbnNpb25TdWJ0YWdzLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyA2LiBMZXQgcmVzdWx0IGJlIGEgbmV3IFJlY29yZC5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IFJlY29yZCgpO1xuXG4gICAgLy8gNy4gU2V0IHJlc3VsdC5bW2RhdGFMb2NhbGVdXSB0byBmb3VuZExvY2FsZS5cbiAgICByZXN1bHRbJ1tbZGF0YUxvY2FsZV1dJ10gPSBmb3VuZExvY2FsZTtcblxuICAgIC8vIDguIExldCBzdXBwb3J0ZWRFeHRlbnNpb24gYmUgXCItdVwiLlxuICAgIHZhciBzdXBwb3J0ZWRFeHRlbnNpb24gPSAnLXUnO1xuICAgIC8vIDkuIExldCBpIGJlIDAuXG4gICAgdmFyIGkgPSAwO1xuICAgIC8vIDEwLiBMZXQgbGVuIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAvLyAgICAgcmVsZXZhbnRFeHRlbnNpb25LZXlzIHdpdGggYXJndW1lbnQgXCJsZW5ndGhcIi5cbiAgICB2YXIgbGVuID0gcmVsZXZhbnRFeHRlbnNpb25LZXlzLmxlbmd0aDtcblxuICAgIC8vIDExIFJlcGVhdCB3aGlsZSBpIDwgbGVuOlxuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgIC8vIGEuIExldCBrZXkgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgICAgICAvLyAgICByZWxldmFudEV4dGVuc2lvbktleXMgd2l0aCBhcmd1bWVudCBUb1N0cmluZyhpKS5cbiAgICAgICAgdmFyIGtleSA9IHJlbGV2YW50RXh0ZW5zaW9uS2V5c1tpXTtcbiAgICAgICAgLy8gYi4gTGV0IGZvdW5kTG9jYWxlRGF0YSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWxcbiAgICAgICAgLy8gICAgbWV0aG9kIG9mIGxvY2FsZURhdGEgd2l0aCB0aGUgYXJndW1lbnQgZm91bmRMb2NhbGUuXG4gICAgICAgIHZhciBmb3VuZExvY2FsZURhdGEgPSBsb2NhbGVEYXRhW2ZvdW5kTG9jYWxlXTtcbiAgICAgICAgLy8gYy4gTGV0IGtleUxvY2FsZURhdGEgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsXG4gICAgICAgIC8vICAgIG1ldGhvZCBvZiBmb3VuZExvY2FsZURhdGEgd2l0aCB0aGUgYXJndW1lbnQga2V5LlxuICAgICAgICB2YXIga2V5TG9jYWxlRGF0YSA9IGZvdW5kTG9jYWxlRGF0YVtrZXldO1xuICAgICAgICAvLyBkLiBMZXQgdmFsdWUgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgICAgICAvLyAgICBrZXlMb2NhbGVEYXRhIHdpdGggYXJndW1lbnQgXCIwXCIuXG4gICAgICAgIHZhciB2YWx1ZSA9IGtleUxvY2FsZURhdGFbJzAnXTtcbiAgICAgICAgLy8gZS4gTGV0IHN1cHBvcnRlZEV4dGVuc2lvbkFkZGl0aW9uIGJlIFwiXCIuXG4gICAgICAgIHZhciBzdXBwb3J0ZWRFeHRlbnNpb25BZGRpdGlvbiA9ICcnO1xuICAgICAgICAvLyBmLiBMZXQgaW5kZXhPZiBiZSB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gZnVuY3Rpb24gb2JqZWN0IGRlZmluZWQgaW5cbiAgICAgICAgLy8gICAgRVM1LCAxNS40LjQuMTQuXG4gICAgICAgIHZhciBpbmRleE9mID0gYXJySW5kZXhPZjtcblxuICAgICAgICAvLyBnLiBJZiBleHRlbnNpb25TdWJ0YWdzIGlzIG5vdCB1bmRlZmluZWQsIHRoZW5cbiAgICAgICAgaWYgKGV4dGVuc2lvblN1YnRhZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gaS4gTGV0IGtleVBvcyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ2FsbF1dIGludGVybmFsXG4gICAgICAgICAgICAvLyAgICBtZXRob2Qgb2YgaW5kZXhPZiB3aXRoIGV4dGVuc2lvblN1YnRhZ3MgYXMgdGhlIHRoaXMgdmFsdWUgYW5kXG4gICAgICAgICAgICAvLyBhbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmcgdGhlIHNpbmdsZSBpdGVtIGtleS5cbiAgICAgICAgICAgIHZhciBrZXlQb3MgPSBpbmRleE9mLmNhbGwoZXh0ZW5zaW9uU3VidGFncywga2V5KTtcblxuICAgICAgICAgICAgLy8gaWkuIElmIGtleVBvcyDiiaAgLTEsIHRoZW5cbiAgICAgICAgICAgIGlmIChrZXlQb3MgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gMS4gSWYga2V5UG9zICsgMSA8IGV4dGVuc2lvblN1YnRhZ3NMZW5ndGggYW5kIHRoZSBsZW5ndGggb2YgdGhlXG4gICAgICAgICAgICAgICAgLy8gICAgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgICAgICAgICAgLy8gICAgZXh0ZW5zaW9uU3VidGFncyB3aXRoIGFyZ3VtZW50IFRvU3RyaW5nKGtleVBvcyArMSkgaXMgZ3JlYXRlclxuICAgICAgICAgICAgICAgIC8vICAgIHRoYW4gMiwgdGhlblxuICAgICAgICAgICAgICAgIGlmIChrZXlQb3MgKyAxIDwgZXh0ZW5zaW9uU3VidGFnc0xlbmd0aCAmJiBleHRlbnNpb25TdWJ0YWdzW2tleVBvcyArIDFdLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYS4gTGV0IHJlcXVlc3RlZFZhbHVlIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXVxuICAgICAgICAgICAgICAgICAgICAvLyAgICBpbnRlcm5hbCBtZXRob2Qgb2YgZXh0ZW5zaW9uU3VidGFncyB3aXRoIGFyZ3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIFRvU3RyaW5nKGtleVBvcyArIDEpLlxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdGVkVmFsdWUgPSBleHRlbnNpb25TdWJ0YWdzW2tleVBvcyArIDFdO1xuICAgICAgICAgICAgICAgICAgICAvLyBiLiBMZXQgdmFsdWVQb3MgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0NhbGxdXVxuICAgICAgICAgICAgICAgICAgICAvLyAgICBpbnRlcm5hbCBtZXRob2Qgb2YgaW5kZXhPZiB3aXRoIGtleUxvY2FsZURhdGEgYXMgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIHRoaXMgdmFsdWUgYW5kIGFuIGFyZ3VtZW50IGxpc3QgY29udGFpbmluZyB0aGUgc2luZ2xlXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIGl0ZW0gcmVxdWVzdGVkVmFsdWUuXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVBvcyA9IGluZGV4T2YuY2FsbChrZXlMb2NhbGVEYXRhLCByZXF1ZXN0ZWRWYWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYy4gSWYgdmFsdWVQb3Mg4omgIC0xLCB0aGVuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVBvcyAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGkuIExldCB2YWx1ZSBiZSByZXF1ZXN0ZWRWYWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmVxdWVzdGVkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpaS4gTGV0IHN1cHBvcnRlZEV4dGVuc2lvbkFkZGl0aW9uIGJlIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbmNhdGVuYXRpb24gb2YgXCItXCIsIGtleSwgXCItXCIsIGFuZCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZEV4dGVuc2lvbkFkZGl0aW9uID0gJy0nICsga2V5ICsgJy0nICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gMi4gRWxzZVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYS4gTGV0IHZhbHVlUG9zIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDYWxsXV1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludGVybmFsIG1ldGhvZCBvZiBpbmRleE9mIHdpdGgga2V5TG9jYWxlRGF0YSBhcyB0aGUgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWUgYW5kIGFuIGFyZ3VtZW50IGxpc3QgY29udGFpbmluZyB0aGUgc2luZ2xlIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwidHJ1ZVwiLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF92YWx1ZVBvcyA9IGluZGV4T2Yoa2V5TG9jYWxlRGF0YSwgJ3RydWUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYi4gSWYgdmFsdWVQb3Mg4omgIC0xLCB0aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3ZhbHVlUG9zICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpLiBMZXQgdmFsdWUgYmUgXCJ0cnVlXCIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAndHJ1ZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBoLiBJZiBvcHRpb25zIGhhcyBhIGZpZWxkIFtbPGtleT5dXSwgdGhlblxuICAgICAgICBpZiAoaG9wLmNhbGwob3B0aW9ucywgJ1tbJyArIGtleSArICddXScpKSB7XG4gICAgICAgICAgICAvLyBpLiBMZXQgb3B0aW9uc1ZhbHVlIGJlIHRoZSB2YWx1ZSBvZiBvcHRpb25zLltbPGtleT5dXS5cbiAgICAgICAgICAgIHZhciBvcHRpb25zVmFsdWUgPSBvcHRpb25zWydbWycgKyBrZXkgKyAnXV0nXTtcblxuICAgICAgICAgICAgLy8gaWkuIElmIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDYWxsXV0gaW50ZXJuYWwgbWV0aG9kIG9mIGluZGV4T2ZcbiAgICAgICAgICAgIC8vICAgICB3aXRoIGtleUxvY2FsZURhdGEgYXMgdGhlIHRoaXMgdmFsdWUgYW5kIGFuIGFyZ3VtZW50IGxpc3RcbiAgICAgICAgICAgIC8vICAgICBjb250YWluaW5nIHRoZSBzaW5nbGUgaXRlbSBvcHRpb25zVmFsdWUgaXMgbm90IC0xLCB0aGVuXG4gICAgICAgICAgICBpZiAoaW5kZXhPZi5jYWxsKGtleUxvY2FsZURhdGEsIG9wdGlvbnNWYWx1ZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gMS4gSWYgb3B0aW9uc1ZhbHVlIGlzIG5vdCBlcXVhbCB0byB2YWx1ZSwgdGhlblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGEuIExldCB2YWx1ZSBiZSBvcHRpb25zVmFsdWUuXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3B0aW9uc1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBiLiBMZXQgc3VwcG9ydGVkRXh0ZW5zaW9uQWRkaXRpb24gYmUgXCJcIi5cbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkRXh0ZW5zaW9uQWRkaXRpb24gPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaS4gU2V0IHJlc3VsdC5bWzxrZXk+XV0gdG8gdmFsdWUuXG4gICAgICAgIHJlc3VsdFsnW1snICsga2V5ICsgJ11dJ10gPSB2YWx1ZTtcblxuICAgICAgICAvLyBqLiBBcHBlbmQgc3VwcG9ydGVkRXh0ZW5zaW9uQWRkaXRpb24gdG8gc3VwcG9ydGVkRXh0ZW5zaW9uLlxuICAgICAgICBzdXBwb3J0ZWRFeHRlbnNpb24gKz0gc3VwcG9ydGVkRXh0ZW5zaW9uQWRkaXRpb247XG5cbiAgICAgICAgLy8gay4gSW5jcmVhc2UgaSBieSAxLlxuICAgICAgICBpKys7XG4gICAgfVxuICAgIC8vIDEyLiBJZiB0aGUgbGVuZ3RoIG9mIHN1cHBvcnRlZEV4dGVuc2lvbiBpcyBncmVhdGVyIHRoYW4gMiwgdGhlblxuICAgIGlmIChzdXBwb3J0ZWRFeHRlbnNpb24ubGVuZ3RoID4gMikge1xuICAgICAgICAvLyBhLlxuICAgICAgICB2YXIgcHJpdmF0ZUluZGV4ID0gZm91bmRMb2NhbGUuaW5kZXhPZihcIi14LVwiKTtcbiAgICAgICAgLy8gYi5cbiAgICAgICAgaWYgKHByaXZhdGVJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIGkuXG4gICAgICAgICAgICBmb3VuZExvY2FsZSA9IGZvdW5kTG9jYWxlICsgc3VwcG9ydGVkRXh0ZW5zaW9uO1xuICAgICAgICB9XG4gICAgICAgIC8vIGMuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGkuXG4gICAgICAgICAgICAgICAgdmFyIHByZUV4dGVuc2lvbiA9IGZvdW5kTG9jYWxlLnN1YnN0cmluZygwLCBwcml2YXRlSW5kZXgpO1xuICAgICAgICAgICAgICAgIC8vIGlpLlxuICAgICAgICAgICAgICAgIHZhciBwb3N0RXh0ZW5zaW9uID0gZm91bmRMb2NhbGUuc3Vic3RyaW5nKHByaXZhdGVJbmRleCk7XG4gICAgICAgICAgICAgICAgLy8gaWlpLlxuICAgICAgICAgICAgICAgIGZvdW5kTG9jYWxlID0gcHJlRXh0ZW5zaW9uICsgc3VwcG9ydGVkRXh0ZW5zaW9uICsgcG9zdEV4dGVuc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgLy8gZC4gYXNzZXJ0aW5nIC0gc2tpcHBpbmdcbiAgICAgICAgLy8gZS5cbiAgICAgICAgZm91bmRMb2NhbGUgPSBDYW5vbmljYWxpemVMYW5ndWFnZVRhZyhmb3VuZExvY2FsZSk7XG4gICAgfVxuICAgIC8vIDEzLiBTZXQgcmVzdWx0LltbbG9jYWxlXV0gdG8gZm91bmRMb2NhbGUuXG4gICAgcmVzdWx0WydbW2xvY2FsZV1dJ10gPSBmb3VuZExvY2FsZTtcblxuICAgIC8vIDE0LiBSZXR1cm4gcmVzdWx0LlxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIExvb2t1cFN1cHBvcnRlZExvY2FsZXMgYWJzdHJhY3Qgb3BlcmF0aW9uIHJldHVybnMgdGhlIHN1YnNldCBvZiB0aGVcbiAqIHByb3ZpZGVkIEJDUCA0NyBsYW5ndWFnZSBwcmlvcml0eSBsaXN0IHJlcXVlc3RlZExvY2FsZXMgZm9yIHdoaWNoXG4gKiBhdmFpbGFibGVMb2NhbGVzIGhhcyBhIG1hdGNoaW5nIGxvY2FsZSB3aGVuIHVzaW5nIHRoZSBCQ1AgNDcgTG9va3VwIGFsZ29yaXRobS5cbiAqIExvY2FsZXMgYXBwZWFyIGluIHRoZSBzYW1lIG9yZGVyIGluIHRoZSByZXR1cm5lZCBsaXN0IGFzIGluIHJlcXVlc3RlZExvY2FsZXMuXG4gKiBUaGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuZnVuY3Rpb24gLyogOS4yLjYgKi9Mb29rdXBTdXBwb3J0ZWRMb2NhbGVzKGF2YWlsYWJsZUxvY2FsZXMsIHJlcXVlc3RlZExvY2FsZXMpIHtcbiAgICAvLyAxLiBMZXQgbGVuIGJlIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gcmVxdWVzdGVkTG9jYWxlcy5cbiAgICB2YXIgbGVuID0gcmVxdWVzdGVkTG9jYWxlcy5sZW5ndGg7XG4gICAgLy8gMi4gTGV0IHN1YnNldCBiZSBhIG5ldyBlbXB0eSBMaXN0LlxuICAgIHZhciBzdWJzZXQgPSBuZXcgTGlzdCgpO1xuICAgIC8vIDMuIExldCBrIGJlIDAuXG4gICAgdmFyIGsgPSAwO1xuXG4gICAgLy8gNC4gUmVwZWF0IHdoaWxlIGsgPCBsZW5cbiAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAvLyBhLiBMZXQgbG9jYWxlIGJlIHRoZSBlbGVtZW50IG9mIHJlcXVlc3RlZExvY2FsZXMgYXQgMC1vcmlnaW5lZCBsaXN0XG4gICAgICAgIC8vICAgIHBvc2l0aW9uIGsuXG4gICAgICAgIHZhciBsb2NhbGUgPSByZXF1ZXN0ZWRMb2NhbGVzW2tdO1xuICAgICAgICAvLyBiLiBMZXQgbm9FeHRlbnNpb25zTG9jYWxlIGJlIHRoZSBTdHJpbmcgdmFsdWUgdGhhdCBpcyBsb2NhbGUgd2l0aCBhbGxcbiAgICAgICAgLy8gICAgVW5pY29kZSBsb2NhbGUgZXh0ZW5zaW9uIHNlcXVlbmNlcyByZW1vdmVkLlxuICAgICAgICB2YXIgbm9FeHRlbnNpb25zTG9jYWxlID0gU3RyaW5nKGxvY2FsZSkucmVwbGFjZShleHBVbmljb2RlRXhTZXEsICcnKTtcbiAgICAgICAgLy8gYy4gTGV0IGF2YWlsYWJsZUxvY2FsZSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlXG4gICAgICAgIC8vICAgIEJlc3RBdmFpbGFibGVMb2NhbGUgYWJzdHJhY3Qgb3BlcmF0aW9uIChkZWZpbmVkIGluIDkuMi4yKSB3aXRoXG4gICAgICAgIC8vICAgIGFyZ3VtZW50cyBhdmFpbGFibGVMb2NhbGVzIGFuZCBub0V4dGVuc2lvbnNMb2NhbGUuXG4gICAgICAgIHZhciBhdmFpbGFibGVMb2NhbGUgPSBCZXN0QXZhaWxhYmxlTG9jYWxlKGF2YWlsYWJsZUxvY2FsZXMsIG5vRXh0ZW5zaW9uc0xvY2FsZSk7XG5cbiAgICAgICAgLy8gZC4gSWYgYXZhaWxhYmxlTG9jYWxlIGlzIG5vdCB1bmRlZmluZWQsIHRoZW4gYXBwZW5kIGxvY2FsZSB0byB0aGUgZW5kIG9mXG4gICAgICAgIC8vICAgIHN1YnNldC5cbiAgICAgICAgaWYgKGF2YWlsYWJsZUxvY2FsZSAhPT0gdW5kZWZpbmVkKSBhcnJQdXNoLmNhbGwoc3Vic2V0LCBsb2NhbGUpO1xuXG4gICAgICAgIC8vIGUuIEluY3JlbWVudCBrIGJ5IDEuXG4gICAgICAgIGsrKztcbiAgICB9XG5cbiAgICAvLyA1LiBMZXQgc3Vic2V0QXJyYXkgYmUgYSBuZXcgQXJyYXkgb2JqZWN0IHdob3NlIGVsZW1lbnRzIGFyZSB0aGUgc2FtZVxuICAgIC8vICAgIHZhbHVlcyBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgZWxlbWVudHMgb2Ygc3Vic2V0LlxuICAgIHZhciBzdWJzZXRBcnJheSA9IGFyclNsaWNlLmNhbGwoc3Vic2V0KTtcblxuICAgIC8vIDYuIFJldHVybiBzdWJzZXRBcnJheS5cbiAgICByZXR1cm4gc3Vic2V0QXJyYXk7XG59XG5cbi8qKlxuICogVGhlIEJlc3RGaXRTdXBwb3J0ZWRMb2NhbGVzIGFic3RyYWN0IG9wZXJhdGlvbiByZXR1cm5zIHRoZSBzdWJzZXQgb2YgdGhlXG4gKiBwcm92aWRlZCBCQ1AgNDcgbGFuZ3VhZ2UgcHJpb3JpdHkgbGlzdCByZXF1ZXN0ZWRMb2NhbGVzIGZvciB3aGljaFxuICogYXZhaWxhYmxlTG9jYWxlcyBoYXMgYSBtYXRjaGluZyBsb2NhbGUgd2hlbiB1c2luZyB0aGUgQmVzdCBGaXQgTWF0Y2hlclxuICogYWxnb3JpdGhtLiBMb2NhbGVzIGFwcGVhciBpbiB0aGUgc2FtZSBvcmRlciBpbiB0aGUgcmV0dXJuZWQgbGlzdCBhcyBpblxuICogcmVxdWVzdGVkTG9jYWxlcy4gVGhlIHN0ZXBzIHRha2VuIGFyZSBpbXBsZW1lbnRhdGlvbiBkZXBlbmRlbnQuXG4gKi9cbmZ1bmN0aW9uIC8qOS4yLjcgKi9CZXN0Rml0U3VwcG9ydGVkTG9jYWxlcyhhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzKSB7XG4gICAgLy8gIyMjVE9ETzogaW1wbGVtZW50IHRoaXMgZnVuY3Rpb24gYXMgZGVzY3JpYmVkIGJ5IHRoZSBzcGVjaWZpY2F0aW9uIyMjXG4gICAgcmV0dXJuIExvb2t1cFN1cHBvcnRlZExvY2FsZXMoYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcyk7XG59XG5cbi8qKlxuICogVGhlIFN1cHBvcnRlZExvY2FsZXMgYWJzdHJhY3Qgb3BlcmF0aW9uIHJldHVybnMgdGhlIHN1YnNldCBvZiB0aGUgcHJvdmlkZWQgQkNQXG4gKiA0NyBsYW5ndWFnZSBwcmlvcml0eSBsaXN0IHJlcXVlc3RlZExvY2FsZXMgZm9yIHdoaWNoIGF2YWlsYWJsZUxvY2FsZXMgaGFzIGFcbiAqIG1hdGNoaW5nIGxvY2FsZS4gVHdvIGFsZ29yaXRobXMgYXJlIGF2YWlsYWJsZSB0byBtYXRjaCB0aGUgbG9jYWxlczogdGhlIExvb2t1cFxuICogYWxnb3JpdGhtIGRlc2NyaWJlZCBpbiBSRkMgNDY0NyBzZWN0aW9uIDMuNCwgYW5kIGFuIGltcGxlbWVudGF0aW9uIGRlcGVuZGVudFxuICogYmVzdC1maXQgYWxnb3JpdGhtLiBMb2NhbGVzIGFwcGVhciBpbiB0aGUgc2FtZSBvcmRlciBpbiB0aGUgcmV0dXJuZWQgbGlzdCBhc1xuICogaW4gcmVxdWVzdGVkTG9jYWxlcy4gVGhlIGZvbGxvd2luZyBzdGVwcyBhcmUgdGFrZW46XG4gKi9cbmZ1bmN0aW9uIC8qOS4yLjggKi9TdXBwb3J0ZWRMb2NhbGVzKGF2YWlsYWJsZUxvY2FsZXMsIHJlcXVlc3RlZExvY2FsZXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgbWF0Y2hlciA9IHZvaWQgMCxcbiAgICAgICAgc3Vic2V0ID0gdm9pZCAwO1xuXG4gICAgLy8gMS4gSWYgb3B0aW9ucyBpcyBub3QgdW5kZWZpbmVkLCB0aGVuXG4gICAgaWYgKG9wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBhLiBMZXQgb3B0aW9ucyBiZSBUb09iamVjdChvcHRpb25zKS5cbiAgICAgICAgb3B0aW9ucyA9IG5ldyBSZWNvcmQodG9PYmplY3Qob3B0aW9ucykpO1xuICAgICAgICAvLyBiLiBMZXQgbWF0Y2hlciBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgIC8vICAgIG9wdGlvbnMgd2l0aCBhcmd1bWVudCBcImxvY2FsZU1hdGNoZXJcIi5cbiAgICAgICAgbWF0Y2hlciA9IG9wdGlvbnMubG9jYWxlTWF0Y2hlcjtcblxuICAgICAgICAvLyBjLiBJZiBtYXRjaGVyIGlzIG5vdCB1bmRlZmluZWQsIHRoZW5cbiAgICAgICAgaWYgKG1hdGNoZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gaS4gTGV0IG1hdGNoZXIgYmUgVG9TdHJpbmcobWF0Y2hlcikuXG4gICAgICAgICAgICBtYXRjaGVyID0gU3RyaW5nKG1hdGNoZXIpO1xuXG4gICAgICAgICAgICAvLyBpaS4gSWYgbWF0Y2hlciBpcyBub3QgXCJsb29rdXBcIiBvciBcImJlc3QgZml0XCIsIHRoZW4gdGhyb3cgYSBSYW5nZUVycm9yXG4gICAgICAgICAgICAvLyAgICAgZXhjZXB0aW9uLlxuICAgICAgICAgICAgaWYgKG1hdGNoZXIgIT09ICdsb29rdXAnICYmIG1hdGNoZXIgIT09ICdiZXN0IGZpdCcpIHRocm93IG5ldyBSYW5nZUVycm9yKCdtYXRjaGVyIHNob3VsZCBiZSBcImxvb2t1cFwiIG9yIFwiYmVzdCBmaXRcIicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIDIuIElmIG1hdGNoZXIgaXMgdW5kZWZpbmVkIG9yIFwiYmVzdCBmaXRcIiwgdGhlblxuICAgIGlmIChtYXRjaGVyID09PSB1bmRlZmluZWQgfHwgbWF0Y2hlciA9PT0gJ2Jlc3QgZml0JylcbiAgICAgICAgLy8gYS4gTGV0IHN1YnNldCBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEJlc3RGaXRTdXBwb3J0ZWRMb2NhbGVzXG4gICAgICAgIC8vICAgIGFic3RyYWN0IG9wZXJhdGlvbiAoZGVmaW5lZCBpbiA5LjIuNykgd2l0aCBhcmd1bWVudHNcbiAgICAgICAgLy8gICAgYXZhaWxhYmxlTG9jYWxlcyBhbmQgcmVxdWVzdGVkTG9jYWxlcy5cbiAgICAgICAgc3Vic2V0ID0gQmVzdEZpdFN1cHBvcnRlZExvY2FsZXMoYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcyk7XG4gICAgICAgIC8vIDMuIEVsc2VcbiAgICBlbHNlXG4gICAgICAgIC8vIGEuIExldCBzdWJzZXQgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBMb29rdXBTdXBwb3J0ZWRMb2NhbGVzXG4gICAgICAgIC8vICAgIGFic3RyYWN0IG9wZXJhdGlvbiAoZGVmaW5lZCBpbiA5LjIuNikgd2l0aCBhcmd1bWVudHNcbiAgICAgICAgLy8gICAgYXZhaWxhYmxlTG9jYWxlcyBhbmQgcmVxdWVzdGVkTG9jYWxlcy5cbiAgICAgICAgc3Vic2V0ID0gTG9va3VwU3VwcG9ydGVkTG9jYWxlcyhhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzKTtcblxuICAgIC8vIDQuIEZvciBlYWNoIG5hbWVkIG93biBwcm9wZXJ0eSBuYW1lIFAgb2Ygc3Vic2V0LFxuICAgIGZvciAodmFyIFAgaW4gc3Vic2V0KSB7XG4gICAgICAgIGlmICghaG9wLmNhbGwoc3Vic2V0LCBQKSkgY29udGludWU7XG5cbiAgICAgICAgLy8gYS4gTGV0IGRlc2MgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldE93blByb3BlcnR5XV0gaW50ZXJuYWxcbiAgICAgICAgLy8gICAgbWV0aG9kIG9mIHN1YnNldCB3aXRoIFAuXG4gICAgICAgIC8vIGIuIFNldCBkZXNjLltbV3JpdGFibGVdXSB0byBmYWxzZS5cbiAgICAgICAgLy8gYy4gU2V0IGRlc2MuW1tDb25maWd1cmFibGVdXSB0byBmYWxzZS5cbiAgICAgICAgLy8gZC4gQ2FsbCB0aGUgW1tEZWZpbmVPd25Qcm9wZXJ0eV1dIGludGVybmFsIG1ldGhvZCBvZiBzdWJzZXQgd2l0aCBQLCBkZXNjLFxuICAgICAgICAvLyAgICBhbmQgdHJ1ZSBhcyBhcmd1bWVudHMuXG4gICAgICAgIGRlZmluZVByb3BlcnR5KHN1YnNldCwgUCwge1xuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IGZhbHNlLCB2YWx1ZTogc3Vic2V0W1BdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBcIkZyZWV6ZVwiIHRoZSBhcnJheSBzbyBubyBuZXcgZWxlbWVudHMgY2FuIGJlIGFkZGVkXG4gICAgZGVmaW5lUHJvcGVydHkoc3Vic2V0LCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG5cbiAgICAvLyA1LiBSZXR1cm4gc3Vic2V0XG4gICAgcmV0dXJuIHN1YnNldDtcbn1cblxuLyoqXG4gKiBUaGUgR2V0T3B0aW9uIGFic3RyYWN0IG9wZXJhdGlvbiBleHRyYWN0cyB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5IG5hbWVkXG4gKiBwcm9wZXJ0eSBmcm9tIHRoZSBwcm92aWRlZCBvcHRpb25zIG9iamVjdCwgY29udmVydHMgaXQgdG8gdGhlIHJlcXVpcmVkIHR5cGUsXG4gKiBjaGVja3Mgd2hldGhlciBpdCBpcyBvbmUgb2YgYSBMaXN0IG9mIGFsbG93ZWQgdmFsdWVzLCBhbmQgZmlsbHMgaW4gYSBmYWxsYmFja1xuICogdmFsdWUgaWYgbmVjZXNzYXJ5LlxuICovXG5mdW5jdGlvbiAvKjkuMi45ICovR2V0T3B0aW9uKG9wdGlvbnMsIHByb3BlcnR5LCB0eXBlLCB2YWx1ZXMsIGZhbGxiYWNrKSB7XG4gICAgLy8gMS4gTGV0IHZhbHVlIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAvLyAgICBvcHRpb25zIHdpdGggYXJndW1lbnQgcHJvcGVydHkuXG4gICAgdmFyIHZhbHVlID0gb3B0aW9uc1twcm9wZXJ0eV07XG5cbiAgICAvLyAyLiBJZiB2YWx1ZSBpcyBub3QgdW5kZWZpbmVkLCB0aGVuXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gYS4gQXNzZXJ0OiB0eXBlIGlzIFwiYm9vbGVhblwiIG9yIFwic3RyaW5nXCIuXG4gICAgICAgIC8vIGIuIElmIHR5cGUgaXMgXCJib29sZWFuXCIsIHRoZW4gbGV0IHZhbHVlIGJlIFRvQm9vbGVhbih2YWx1ZSkuXG4gICAgICAgIC8vIGMuIElmIHR5cGUgaXMgXCJzdHJpbmdcIiwgdGhlbiBsZXQgdmFsdWUgYmUgVG9TdHJpbmcodmFsdWUpLlxuICAgICAgICB2YWx1ZSA9IHR5cGUgPT09ICdib29sZWFuJyA/IEJvb2xlYW4odmFsdWUpIDogdHlwZSA9PT0gJ3N0cmluZycgPyBTdHJpbmcodmFsdWUpIDogdmFsdWU7XG5cbiAgICAgICAgLy8gZC4gSWYgdmFsdWVzIGlzIG5vdCB1bmRlZmluZWQsIHRoZW5cbiAgICAgICAgaWYgKHZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBpLiBJZiB2YWx1ZXMgZG9lcyBub3QgY29udGFpbiBhbiBlbGVtZW50IGVxdWFsIHRvIHZhbHVlLCB0aGVuIHRocm93IGFcbiAgICAgICAgICAgIC8vICAgIFJhbmdlRXJyb3IgZXhjZXB0aW9uLlxuICAgICAgICAgICAgaWYgKGFyckluZGV4T2YuY2FsbCh2YWx1ZXMsIHZhbHVlKSA9PT0gLTEpIHRocm93IG5ldyBSYW5nZUVycm9yKFwiJ1wiICsgdmFsdWUgKyBcIicgaXMgbm90IGFuIGFsbG93ZWQgdmFsdWUgZm9yIGBcIiArIHByb3BlcnR5ICsgJ2AnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGUuIFJldHVybiB2YWx1ZS5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICAvLyBFbHNlIHJldHVybiBmYWxsYmFjay5cbiAgICByZXR1cm4gZmFsbGJhY2s7XG59XG5cbi8qKlxuICogVGhlIEdldE51bWJlck9wdGlvbiBhYnN0cmFjdCBvcGVyYXRpb24gZXh0cmFjdHMgYSBwcm9wZXJ0eSB2YWx1ZSBmcm9tIHRoZVxuICogcHJvdmlkZWQgb3B0aW9ucyBvYmplY3QsIGNvbnZlcnRzIGl0IHRvIGEgTnVtYmVyIHZhbHVlLCBjaGVja3Mgd2hldGhlciBpdCBpc1xuICogaW4gdGhlIGFsbG93ZWQgcmFuZ2UsIGFuZCBmaWxscyBpbiBhIGZhbGxiYWNrIHZhbHVlIGlmIG5lY2Vzc2FyeS5cbiAqL1xuZnVuY3Rpb24gLyogOS4yLjEwICovR2V0TnVtYmVyT3B0aW9uKG9wdGlvbnMsIHByb3BlcnR5LCBtaW5pbXVtLCBtYXhpbXVtLCBmYWxsYmFjaykge1xuICAgIC8vIDEuIExldCB2YWx1ZSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgLy8gICAgb3B0aW9ucyB3aXRoIGFyZ3VtZW50IHByb3BlcnR5LlxuICAgIHZhciB2YWx1ZSA9IG9wdGlvbnNbcHJvcGVydHldO1xuXG4gICAgLy8gMi4gSWYgdmFsdWUgaXMgbm90IHVuZGVmaW5lZCwgdGhlblxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGEuIExldCB2YWx1ZSBiZSBUb051bWJlcih2YWx1ZSkuXG4gICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcblxuICAgICAgICAvLyBiLiBJZiB2YWx1ZSBpcyBOYU4gb3IgbGVzcyB0aGFuIG1pbmltdW0gb3IgZ3JlYXRlciB0aGFuIG1heGltdW0sIHRocm93IGFcbiAgICAgICAgLy8gICAgUmFuZ2VFcnJvciBleGNlcHRpb24uXG4gICAgICAgIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPCBtaW5pbXVtIHx8IHZhbHVlID4gbWF4aW11bSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1ZhbHVlIGlzIG5vdCBhIG51bWJlciBvciBvdXRzaWRlIGFjY2VwdGVkIHJhbmdlJyk7XG5cbiAgICAgICAgLy8gYy4gUmV0dXJuIGZsb29yKHZhbHVlKS5cbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodmFsdWUpO1xuICAgIH1cbiAgICAvLyAzLiBFbHNlIHJldHVybiBmYWxsYmFjay5cbiAgICByZXR1cm4gZmFsbGJhY2s7XG59XG5cbi8vIDggVGhlIEludGwgT2JqZWN0XG52YXIgSW50bCA9IHt9O1xuXG4vLyA4LjIgRnVuY3Rpb24gUHJvcGVydGllcyBvZiB0aGUgSW50bCBPYmplY3RcblxuLy8gOC4yLjFcbi8vIEBzcGVjW3RjMzkvZWNtYTQwMi9tYXN0ZXIvc3BlYy9pbnRsLmh0bWxdXG4vLyBAY2xhdXNlW3NlYy1pbnRsLmdldGNhbm9uaWNhbGxvY2FsZXNdXG5mdW5jdGlvbiBnZXRDYW5vbmljYWxMb2NhbGVzKGxvY2FsZXMpIHtcbiAgICAvLyAxLiBMZXQgbGwgYmUgPyBDYW5vbmljYWxpemVMb2NhbGVMaXN0KGxvY2FsZXMpLlxuICAgIHZhciBsbCA9IENhbm9uaWNhbGl6ZUxvY2FsZUxpc3QobG9jYWxlcyk7XG4gICAgLy8gMi4gUmV0dXJuIENyZWF0ZUFycmF5RnJvbUxpc3QobGwpLlxuICAgIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIHZhciBsZW4gPSBsbC5sZW5ndGg7XG4gICAgICAgIHZhciBrID0gMDtcblxuICAgICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAgICAgcmVzdWx0W2tdID0gbGxba107XG4gICAgICAgICAgICBrKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbnRsLCAnZ2V0Q2Fub25pY2FsTG9jYWxlcycsIHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IGdldENhbm9uaWNhbExvY2FsZXNcbn0pO1xuXG4vLyBDdXJyZW5jeSBtaW5vciB1bml0cyBvdXRwdXQgZnJvbSBnZXQtNDIxNyBncnVudCB0YXNrLCBmb3JtYXR0ZWRcbnZhciBjdXJyZW5jeU1pbm9yVW5pdHMgPSB7XG4gICAgQkhEOiAzLCBCWVI6IDAsIFhPRjogMCwgQklGOiAwLCBYQUY6IDAsIENMRjogNCwgQ0xQOiAwLCBLTUY6IDAsIERKRjogMCxcbiAgICBYUEY6IDAsIEdORjogMCwgSVNLOiAwLCBJUUQ6IDMsIEpQWTogMCwgSk9EOiAzLCBLUlc6IDAsIEtXRDogMywgTFlEOiAzLFxuICAgIE9NUjogMywgUFlHOiAwLCBSV0Y6IDAsIFRORDogMywgVUdYOiAwLCBVWUk6IDAsIFZVVjogMCwgVk5EOiAwXG59O1xuXG4vLyBEZWZpbmUgdGhlIE51bWJlckZvcm1hdCBjb25zdHJ1Y3RvciBpbnRlcm5hbGx5IHNvIGl0IGNhbm5vdCBiZSB0YWludGVkXG5mdW5jdGlvbiBOdW1iZXJGb3JtYXRDb25zdHJ1Y3RvcigpIHtcbiAgICB2YXIgbG9jYWxlcyA9IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50c1sxXTtcblxuICAgIGlmICghdGhpcyB8fCB0aGlzID09PSBJbnRsKSB7XG4gICAgICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jYWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEluaXRpYWxpemVOdW1iZXJGb3JtYXQodG9PYmplY3QodGhpcyksIGxvY2FsZXMsIG9wdGlvbnMpO1xufVxuXG5kZWZpbmVQcm9wZXJ0eShJbnRsLCAnTnVtYmVyRm9ybWF0Jywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogTnVtYmVyRm9ybWF0Q29uc3RydWN0b3Jcbn0pO1xuXG4vLyBNdXN0IGV4cGxpY2l0bHkgc2V0IHByb3RvdHlwZXMgYXMgdW53cml0YWJsZVxuZGVmaW5lUHJvcGVydHkoSW50bC5OdW1iZXJGb3JtYXQsICdwcm90b3R5cGUnLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG59KTtcblxuLyoqXG4gKiBUaGUgYWJzdHJhY3Qgb3BlcmF0aW9uIEluaXRpYWxpemVOdW1iZXJGb3JtYXQgYWNjZXB0cyB0aGUgYXJndW1lbnRzXG4gKiBudW1iZXJGb3JtYXQgKHdoaWNoIG11c3QgYmUgYW4gb2JqZWN0KSwgbG9jYWxlcywgYW5kIG9wdGlvbnMuIEl0IGluaXRpYWxpemVzXG4gKiBudW1iZXJGb3JtYXQgYXMgYSBOdW1iZXJGb3JtYXQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiAvKjExLjEuMS4xICovSW5pdGlhbGl6ZU51bWJlckZvcm1hdChudW1iZXJGb3JtYXQsIGxvY2FsZXMsIG9wdGlvbnMpIHtcbiAgICAvLyBUaGlzIHdpbGwgYmUgYSBpbnRlcm5hbCBwcm9wZXJ0aWVzIG9iamVjdCBpZiB3ZSdyZSBub3QgYWxyZWFkeSBpbml0aWFsaXplZFxuICAgIHZhciBpbnRlcm5hbCA9IGdldEludGVybmFsUHJvcGVydGllcyhudW1iZXJGb3JtYXQpO1xuXG4gICAgLy8gQ3JlYXRlIGFuIG9iamVjdCB3aG9zZSBwcm9wcyBjYW4gYmUgdXNlZCB0byByZXN0b3JlIHRoZSB2YWx1ZXMgb2YgUmVnRXhwIHByb3BzXG4gICAgdmFyIHJlZ2V4cFJlc3RvcmUgPSBjcmVhdGVSZWdFeHBSZXN0b3JlKCk7XG5cbiAgICAvLyAxLiBJZiBudW1iZXJGb3JtYXQgaGFzIGFuIFtbaW5pdGlhbGl6ZWRJbnRsT2JqZWN0XV0gaW50ZXJuYWwgcHJvcGVydHkgd2l0aFxuICAgIC8vIHZhbHVlIHRydWUsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICBpZiAoaW50ZXJuYWxbJ1tbaW5pdGlhbGl6ZWRJbnRsT2JqZWN0XV0nXSA9PT0gdHJ1ZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYHRoaXNgIG9iamVjdCBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkIGFzIGFuIEludGwgb2JqZWN0Jyk7XG5cbiAgICAvLyBOZWVkIHRoaXMgdG8gYWNjZXNzIHRoZSBgaW50ZXJuYWxgIG9iamVjdFxuICAgIGRlZmluZVByb3BlcnR5KG51bWJlckZvcm1hdCwgJ19fZ2V0SW50ZXJuYWxQcm9wZXJ0aWVzJywge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICAvLyBOT1RFOiBOb24tc3RhbmRhcmQsIGZvciBpbnRlcm5hbCB1c2Ugb25seVxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gc2VjcmV0KSByZXR1cm4gaW50ZXJuYWw7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIDIuIFNldCB0aGUgW1tpbml0aWFsaXplZEludGxPYmplY3RdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBudW1iZXJGb3JtYXQgdG8gdHJ1ZS5cbiAgICBpbnRlcm5hbFsnW1tpbml0aWFsaXplZEludGxPYmplY3RdXSddID0gdHJ1ZTtcblxuICAgIC8vIDMuIExldCByZXF1ZXN0ZWRMb2NhbGVzIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgQ2Fub25pY2FsaXplTG9jYWxlTGlzdFxuICAgIC8vICAgIGFic3RyYWN0IG9wZXJhdGlvbiAoZGVmaW5lZCBpbiA5LjIuMSkgd2l0aCBhcmd1bWVudCBsb2NhbGVzLlxuICAgIHZhciByZXF1ZXN0ZWRMb2NhbGVzID0gQ2Fub25pY2FsaXplTG9jYWxlTGlzdChsb2NhbGVzKTtcblxuICAgIC8vIDQuIElmIG9wdGlvbnMgaXMgdW5kZWZpbmVkLCB0aGVuXG4gICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgLy8gYS4gTGV0IG9wdGlvbnMgYmUgdGhlIHJlc3VsdCBvZiBjcmVhdGluZyBhIG5ldyBvYmplY3QgYXMgaWYgYnkgdGhlXG4gICAgICAgIC8vIGV4cHJlc3Npb24gbmV3IE9iamVjdCgpIHdoZXJlIE9iamVjdCBpcyB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gY29uc3RydWN0b3JcbiAgICAgICAgLy8gd2l0aCB0aGF0IG5hbWUuXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcblxuICAgICAgICAvLyA1LiBFbHNlXG4gICAgZWxzZVxuICAgICAgICAvLyBhLiBMZXQgb3B0aW9ucyBiZSBUb09iamVjdChvcHRpb25zKS5cbiAgICAgICAgb3B0aW9ucyA9IHRvT2JqZWN0KG9wdGlvbnMpO1xuXG4gICAgLy8gNi4gTGV0IG9wdCBiZSBhIG5ldyBSZWNvcmQuXG4gICAgdmFyIG9wdCA9IG5ldyBSZWNvcmQoKSxcblxuXG4gICAgLy8gNy4gTGV0IG1hdGNoZXIgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXRPcHRpb24gYWJzdHJhY3Qgb3BlcmF0aW9uXG4gICAgLy8gICAgKGRlZmluZWQgaW4gOS4yLjkpIHdpdGggdGhlIGFyZ3VtZW50cyBvcHRpb25zLCBcImxvY2FsZU1hdGNoZXJcIiwgXCJzdHJpbmdcIixcbiAgICAvLyAgICBhIExpc3QgY29udGFpbmluZyB0aGUgdHdvIFN0cmluZyB2YWx1ZXMgXCJsb29rdXBcIiBhbmQgXCJiZXN0IGZpdFwiLCBhbmRcbiAgICAvLyAgICBcImJlc3QgZml0XCIuXG4gICAgbWF0Y2hlciA9IEdldE9wdGlvbihvcHRpb25zLCAnbG9jYWxlTWF0Y2hlcicsICdzdHJpbmcnLCBuZXcgTGlzdCgnbG9va3VwJywgJ2Jlc3QgZml0JyksICdiZXN0IGZpdCcpO1xuXG4gICAgLy8gOC4gU2V0IG9wdC5bW2xvY2FsZU1hdGNoZXJdXSB0byBtYXRjaGVyLlxuICAgIG9wdFsnW1tsb2NhbGVNYXRjaGVyXV0nXSA9IG1hdGNoZXI7XG5cbiAgICAvLyA5LiBMZXQgTnVtYmVyRm9ybWF0IGJlIHRoZSBzdGFuZGFyZCBidWlsdC1pbiBvYmplY3QgdGhhdCBpcyB0aGUgaW5pdGlhbCB2YWx1ZVxuICAgIC8vICAgIG9mIEludGwuTnVtYmVyRm9ybWF0LlxuICAgIC8vIDEwLiBMZXQgbG9jYWxlRGF0YSBiZSB0aGUgdmFsdWUgb2YgdGhlIFtbbG9jYWxlRGF0YV1dIGludGVybmFsIHByb3BlcnR5IG9mXG4gICAgLy8gICAgIE51bWJlckZvcm1hdC5cbiAgICB2YXIgbG9jYWxlRGF0YSA9IGludGVybmFscy5OdW1iZXJGb3JtYXRbJ1tbbG9jYWxlRGF0YV1dJ107XG5cbiAgICAvLyAxMS4gTGV0IHIgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBSZXNvbHZlTG9jYWxlIGFic3RyYWN0IG9wZXJhdGlvblxuICAgIC8vICAgICAoZGVmaW5lZCBpbiA5LjIuNSkgd2l0aCB0aGUgW1thdmFpbGFibGVMb2NhbGVzXV0gaW50ZXJuYWwgcHJvcGVydHkgb2ZcbiAgICAvLyAgICAgTnVtYmVyRm9ybWF0LCByZXF1ZXN0ZWRMb2NhbGVzLCBvcHQsIHRoZSBbW3JlbGV2YW50RXh0ZW5zaW9uS2V5c11dXG4gICAgLy8gICAgIGludGVybmFsIHByb3BlcnR5IG9mIE51bWJlckZvcm1hdCwgYW5kIGxvY2FsZURhdGEuXG4gICAgdmFyIHIgPSBSZXNvbHZlTG9jYWxlKGludGVybmFscy5OdW1iZXJGb3JtYXRbJ1tbYXZhaWxhYmxlTG9jYWxlc11dJ10sIHJlcXVlc3RlZExvY2FsZXMsIG9wdCwgaW50ZXJuYWxzLk51bWJlckZvcm1hdFsnW1tyZWxldmFudEV4dGVuc2lvbktleXNdXSddLCBsb2NhbGVEYXRhKTtcblxuICAgIC8vIDEyLiBTZXQgdGhlIFtbbG9jYWxlXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIHRoZSB2YWx1ZSBvZlxuICAgIC8vICAgICByLltbbG9jYWxlXV0uXG4gICAgaW50ZXJuYWxbJ1tbbG9jYWxlXV0nXSA9IHJbJ1tbbG9jYWxlXV0nXTtcblxuICAgIC8vIDEzLiBTZXQgdGhlIFtbbnVtYmVyaW5nU3lzdGVtXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIHRoZSB2YWx1ZVxuICAgIC8vICAgICBvZiByLltbbnVdXS5cbiAgICBpbnRlcm5hbFsnW1tudW1iZXJpbmdTeXN0ZW1dXSddID0gclsnW1tudV1dJ107XG5cbiAgICAvLyBUaGUgc3BlY2lmaWNhdGlvbiBkb2Vzbid0IHRlbGwgdXMgdG8gZG8gdGhpcywgYnV0IGl0J3MgaGVscGZ1bCBsYXRlciBvblxuICAgIGludGVybmFsWydbW2RhdGFMb2NhbGVdXSddID0gclsnW1tkYXRhTG9jYWxlXV0nXTtcblxuICAgIC8vIDE0LiBMZXQgZGF0YUxvY2FsZSBiZSB0aGUgdmFsdWUgb2Ygci5bW2RhdGFMb2NhbGVdXS5cbiAgICB2YXIgZGF0YUxvY2FsZSA9IHJbJ1tbZGF0YUxvY2FsZV1dJ107XG5cbiAgICAvLyAxNS4gTGV0IHMgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXRPcHRpb24gYWJzdHJhY3Qgb3BlcmF0aW9uIHdpdGggdGhlXG4gICAgLy8gICAgIGFyZ3VtZW50cyBvcHRpb25zLCBcInN0eWxlXCIsIFwic3RyaW5nXCIsIGEgTGlzdCBjb250YWluaW5nIHRoZSB0aHJlZSBTdHJpbmdcbiAgICAvLyAgICAgdmFsdWVzIFwiZGVjaW1hbFwiLCBcInBlcmNlbnRcIiwgYW5kIFwiY3VycmVuY3lcIiwgYW5kIFwiZGVjaW1hbFwiLlxuICAgIHZhciBzID0gR2V0T3B0aW9uKG9wdGlvbnMsICdzdHlsZScsICdzdHJpbmcnLCBuZXcgTGlzdCgnZGVjaW1hbCcsICdwZXJjZW50JywgJ2N1cnJlbmN5JyksICdkZWNpbWFsJyk7XG5cbiAgICAvLyAxNi4gU2V0IHRoZSBbW3N0eWxlXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIHMuXG4gICAgaW50ZXJuYWxbJ1tbc3R5bGVdXSddID0gcztcblxuICAgIC8vIDE3LiBMZXQgYyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEdldE9wdGlvbiBhYnN0cmFjdCBvcGVyYXRpb24gd2l0aCB0aGVcbiAgICAvLyAgICAgYXJndW1lbnRzIG9wdGlvbnMsIFwiY3VycmVuY3lcIiwgXCJzdHJpbmdcIiwgdW5kZWZpbmVkLCBhbmQgdW5kZWZpbmVkLlxuICAgIHZhciBjID0gR2V0T3B0aW9uKG9wdGlvbnMsICdjdXJyZW5jeScsICdzdHJpbmcnKTtcblxuICAgIC8vIDE4LiBJZiBjIGlzIG5vdCB1bmRlZmluZWQgYW5kIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGVcbiAgICAvLyAgICAgSXNXZWxsRm9ybWVkQ3VycmVuY3lDb2RlIGFic3RyYWN0IG9wZXJhdGlvbiAoZGVmaW5lZCBpbiA2LjMuMSkgd2l0aFxuICAgIC8vICAgICBhcmd1bWVudCBjIGlzIGZhbHNlLCB0aGVuIHRocm93IGEgUmFuZ2VFcnJvciBleGNlcHRpb24uXG4gICAgaWYgKGMgIT09IHVuZGVmaW5lZCAmJiAhSXNXZWxsRm9ybWVkQ3VycmVuY3lDb2RlKGMpKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIidcIiArIGMgKyBcIicgaXMgbm90IGEgdmFsaWQgY3VycmVuY3kgY29kZVwiKTtcblxuICAgIC8vIDE5LiBJZiBzIGlzIFwiY3VycmVuY3lcIiBhbmQgYyBpcyB1bmRlZmluZWQsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICBpZiAocyA9PT0gJ2N1cnJlbmN5JyAmJiBjID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0N1cnJlbmN5IGNvZGUgaXMgcmVxdWlyZWQgd2hlbiBzdHlsZSBpcyBjdXJyZW5jeScpO1xuXG4gICAgdmFyIGNEaWdpdHMgPSB2b2lkIDA7XG5cbiAgICAvLyAyMC4gSWYgcyBpcyBcImN1cnJlbmN5XCIsIHRoZW5cbiAgICBpZiAocyA9PT0gJ2N1cnJlbmN5Jykge1xuICAgICAgICAvLyBhLiBMZXQgYyBiZSB0aGUgcmVzdWx0IG9mIGNvbnZlcnRpbmcgYyB0byB1cHBlciBjYXNlIGFzIHNwZWNpZmllZCBpbiA2LjEuXG4gICAgICAgIGMgPSBjLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gYi4gU2V0IHRoZSBbW2N1cnJlbmN5XV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIGMuXG4gICAgICAgIGludGVybmFsWydbW2N1cnJlbmN5XV0nXSA9IGM7XG5cbiAgICAgICAgLy8gYy4gTGV0IGNEaWdpdHMgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBDdXJyZW5jeURpZ2l0cyBhYnN0cmFjdFxuICAgICAgICAvLyAgICBvcGVyYXRpb24gKGRlZmluZWQgYmVsb3cpIHdpdGggYXJndW1lbnQgYy5cbiAgICAgICAgY0RpZ2l0cyA9IEN1cnJlbmN5RGlnaXRzKGMpO1xuICAgIH1cblxuICAgIC8vIDIxLiBMZXQgY2QgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXRPcHRpb24gYWJzdHJhY3Qgb3BlcmF0aW9uIHdpdGggdGhlXG4gICAgLy8gICAgIGFyZ3VtZW50cyBvcHRpb25zLCBcImN1cnJlbmN5RGlzcGxheVwiLCBcInN0cmluZ1wiLCBhIExpc3QgY29udGFpbmluZyB0aGVcbiAgICAvLyAgICAgdGhyZWUgU3RyaW5nIHZhbHVlcyBcImNvZGVcIiwgXCJzeW1ib2xcIiwgYW5kIFwibmFtZVwiLCBhbmQgXCJzeW1ib2xcIi5cbiAgICB2YXIgY2QgPSBHZXRPcHRpb24ob3B0aW9ucywgJ2N1cnJlbmN5RGlzcGxheScsICdzdHJpbmcnLCBuZXcgTGlzdCgnY29kZScsICdzeW1ib2wnLCAnbmFtZScpLCAnc3ltYm9sJyk7XG5cbiAgICAvLyAyMi4gSWYgcyBpcyBcImN1cnJlbmN5XCIsIHRoZW4gc2V0IHRoZSBbW2N1cnJlbmN5RGlzcGxheV1dIGludGVybmFsIHByb3BlcnR5IG9mXG4gICAgLy8gICAgIG51bWJlckZvcm1hdCB0byBjZC5cbiAgICBpZiAocyA9PT0gJ2N1cnJlbmN5JykgaW50ZXJuYWxbJ1tbY3VycmVuY3lEaXNwbGF5XV0nXSA9IGNkO1xuXG4gICAgLy8gMjMuIExldCBtbmlkIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgR2V0TnVtYmVyT3B0aW9uIGFic3RyYWN0IG9wZXJhdGlvblxuICAgIC8vICAgICAoZGVmaW5lZCBpbiA5LjIuMTApIHdpdGggYXJndW1lbnRzIG9wdGlvbnMsIFwibWluaW11bUludGVnZXJEaWdpdHNcIiwgMSwgMjEsXG4gICAgLy8gICAgIGFuZCAxLlxuICAgIHZhciBtbmlkID0gR2V0TnVtYmVyT3B0aW9uKG9wdGlvbnMsICdtaW5pbXVtSW50ZWdlckRpZ2l0cycsIDEsIDIxLCAxKTtcblxuICAgIC8vIDI0LiBTZXQgdGhlIFtbbWluaW11bUludGVnZXJEaWdpdHNdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBudW1iZXJGb3JtYXQgdG8gbW5pZC5cbiAgICBpbnRlcm5hbFsnW1ttaW5pbXVtSW50ZWdlckRpZ2l0c11dJ10gPSBtbmlkO1xuXG4gICAgLy8gMjUuIElmIHMgaXMgXCJjdXJyZW5jeVwiLCB0aGVuIGxldCBtbmZkRGVmYXVsdCBiZSBjRGlnaXRzOyBlbHNlIGxldCBtbmZkRGVmYXVsdFxuICAgIC8vICAgICBiZSAwLlxuICAgIHZhciBtbmZkRGVmYXVsdCA9IHMgPT09ICdjdXJyZW5jeScgPyBjRGlnaXRzIDogMDtcblxuICAgIC8vIDI2LiBMZXQgbW5mZCBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEdldE51bWJlck9wdGlvbiBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAvLyAgICAgd2l0aCBhcmd1bWVudHMgb3B0aW9ucywgXCJtaW5pbXVtRnJhY3Rpb25EaWdpdHNcIiwgMCwgMjAsIGFuZCBtbmZkRGVmYXVsdC5cbiAgICB2YXIgbW5mZCA9IEdldE51bWJlck9wdGlvbihvcHRpb25zLCAnbWluaW11bUZyYWN0aW9uRGlnaXRzJywgMCwgMjAsIG1uZmREZWZhdWx0KTtcblxuICAgIC8vIDI3LiBTZXQgdGhlIFtbbWluaW11bUZyYWN0aW9uRGlnaXRzXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIG1uZmQuXG4gICAgaW50ZXJuYWxbJ1tbbWluaW11bUZyYWN0aW9uRGlnaXRzXV0nXSA9IG1uZmQ7XG5cbiAgICAvLyAyOC4gSWYgcyBpcyBcImN1cnJlbmN5XCIsIHRoZW4gbGV0IG14ZmREZWZhdWx0IGJlIG1heChtbmZkLCBjRGlnaXRzKTsgZWxzZSBpZiBzXG4gICAgLy8gICAgIGlzIFwicGVyY2VudFwiLCB0aGVuIGxldCBteGZkRGVmYXVsdCBiZSBtYXgobW5mZCwgMCk7IGVsc2UgbGV0IG14ZmREZWZhdWx0XG4gICAgLy8gICAgIGJlIG1heChtbmZkLCAzKS5cbiAgICB2YXIgbXhmZERlZmF1bHQgPSBzID09PSAnY3VycmVuY3knID8gTWF0aC5tYXgobW5mZCwgY0RpZ2l0cykgOiBzID09PSAncGVyY2VudCcgPyBNYXRoLm1heChtbmZkLCAwKSA6IE1hdGgubWF4KG1uZmQsIDMpO1xuXG4gICAgLy8gMjkuIExldCBteGZkIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgR2V0TnVtYmVyT3B0aW9uIGFic3RyYWN0IG9wZXJhdGlvblxuICAgIC8vICAgICB3aXRoIGFyZ3VtZW50cyBvcHRpb25zLCBcIm1heGltdW1GcmFjdGlvbkRpZ2l0c1wiLCBtbmZkLCAyMCwgYW5kIG14ZmREZWZhdWx0LlxuICAgIHZhciBteGZkID0gR2V0TnVtYmVyT3B0aW9uKG9wdGlvbnMsICdtYXhpbXVtRnJhY3Rpb25EaWdpdHMnLCBtbmZkLCAyMCwgbXhmZERlZmF1bHQpO1xuXG4gICAgLy8gMzAuIFNldCB0aGUgW1ttYXhpbXVtRnJhY3Rpb25EaWdpdHNdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBudW1iZXJGb3JtYXQgdG8gbXhmZC5cbiAgICBpbnRlcm5hbFsnW1ttYXhpbXVtRnJhY3Rpb25EaWdpdHNdXSddID0gbXhmZDtcblxuICAgIC8vIDMxLiBMZXQgbW5zZCBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIG9wdGlvbnNcbiAgICAvLyAgICAgd2l0aCBhcmd1bWVudCBcIm1pbmltdW1TaWduaWZpY2FudERpZ2l0c1wiLlxuICAgIHZhciBtbnNkID0gb3B0aW9ucy5taW5pbXVtU2lnbmlmaWNhbnREaWdpdHM7XG5cbiAgICAvLyAzMi4gTGV0IG14c2QgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZiBvcHRpb25zXG4gICAgLy8gICAgIHdpdGggYXJndW1lbnQgXCJtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHNcIi5cbiAgICB2YXIgbXhzZCA9IG9wdGlvbnMubWF4aW11bVNpZ25pZmljYW50RGlnaXRzO1xuXG4gICAgLy8gMzMuIElmIG1uc2QgaXMgbm90IHVuZGVmaW5lZCBvciBteHNkIGlzIG5vdCB1bmRlZmluZWQsIHRoZW46XG4gICAgaWYgKG1uc2QgIT09IHVuZGVmaW5lZCB8fCBteHNkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gYS4gTGV0IG1uc2QgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXROdW1iZXJPcHRpb24gYWJzdHJhY3RcbiAgICAgICAgLy8gICAgb3BlcmF0aW9uIHdpdGggYXJndW1lbnRzIG9wdGlvbnMsIFwibWluaW11bVNpZ25pZmljYW50RGlnaXRzXCIsIDEsIDIxLFxuICAgICAgICAvLyAgICBhbmQgMS5cbiAgICAgICAgbW5zZCA9IEdldE51bWJlck9wdGlvbihvcHRpb25zLCAnbWluaW11bVNpZ25pZmljYW50RGlnaXRzJywgMSwgMjEsIDEpO1xuXG4gICAgICAgIC8vIGIuIExldCBteHNkIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgR2V0TnVtYmVyT3B0aW9uIGFic3RyYWN0XG4gICAgICAgIC8vICAgICBvcGVyYXRpb24gd2l0aCBhcmd1bWVudHMgb3B0aW9ucywgXCJtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHNcIiwgbW5zZCxcbiAgICAgICAgLy8gICAgIDIxLCBhbmQgMjEuXG4gICAgICAgIG14c2QgPSBHZXROdW1iZXJPcHRpb24ob3B0aW9ucywgJ21heGltdW1TaWduaWZpY2FudERpZ2l0cycsIG1uc2QsIDIxLCAyMSk7XG5cbiAgICAgICAgLy8gYy4gU2V0IHRoZSBbW21pbmltdW1TaWduaWZpY2FudERpZ2l0c11dIGludGVybmFsIHByb3BlcnR5IG9mIG51bWJlckZvcm1hdFxuICAgICAgICAvLyAgICB0byBtbnNkLCBhbmQgdGhlIFtbbWF4aW11bVNpZ25pZmljYW50RGlnaXRzXV0gaW50ZXJuYWwgcHJvcGVydHkgb2ZcbiAgICAgICAgLy8gICAgbnVtYmVyRm9ybWF0IHRvIG14c2QuXG4gICAgICAgIGludGVybmFsWydbW21pbmltdW1TaWduaWZpY2FudERpZ2l0c11dJ10gPSBtbnNkO1xuICAgICAgICBpbnRlcm5hbFsnW1ttYXhpbXVtU2lnbmlmaWNhbnREaWdpdHNdXSddID0gbXhzZDtcbiAgICB9XG4gICAgLy8gMzQuIExldCBnIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgR2V0T3B0aW9uIGFic3RyYWN0IG9wZXJhdGlvbiB3aXRoIHRoZVxuICAgIC8vICAgICBhcmd1bWVudHMgb3B0aW9ucywgXCJ1c2VHcm91cGluZ1wiLCBcImJvb2xlYW5cIiwgdW5kZWZpbmVkLCBhbmQgdHJ1ZS5cbiAgICB2YXIgZyA9IEdldE9wdGlvbihvcHRpb25zLCAndXNlR3JvdXBpbmcnLCAnYm9vbGVhbicsIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAvLyAzNS4gU2V0IHRoZSBbW3VzZUdyb3VwaW5nXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIGcuXG4gICAgaW50ZXJuYWxbJ1tbdXNlR3JvdXBpbmddXSddID0gZztcblxuICAgIC8vIDM2LiBMZXQgZGF0YUxvY2FsZURhdGEgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgIC8vICAgICBsb2NhbGVEYXRhIHdpdGggYXJndW1lbnQgZGF0YUxvY2FsZS5cbiAgICB2YXIgZGF0YUxvY2FsZURhdGEgPSBsb2NhbGVEYXRhW2RhdGFMb2NhbGVdO1xuXG4gICAgLy8gMzcuIExldCBwYXR0ZXJucyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgLy8gICAgIGRhdGFMb2NhbGVEYXRhIHdpdGggYXJndW1lbnQgXCJwYXR0ZXJuc1wiLlxuICAgIHZhciBwYXR0ZXJucyA9IGRhdGFMb2NhbGVEYXRhLnBhdHRlcm5zO1xuXG4gICAgLy8gMzguIEFzc2VydDogcGF0dGVybnMgaXMgYW4gb2JqZWN0IChzZWUgMTEuMi4zKVxuXG4gICAgLy8gMzkuIExldCBzdHlsZVBhdHRlcm5zIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAvLyAgICAgcGF0dGVybnMgd2l0aCBhcmd1bWVudCBzLlxuICAgIHZhciBzdHlsZVBhdHRlcm5zID0gcGF0dGVybnNbc107XG5cbiAgICAvLyA0MC4gU2V0IHRoZSBbW3Bvc2l0aXZlUGF0dGVybl1dIGludGVybmFsIHByb3BlcnR5IG9mIG51bWJlckZvcm1hdCB0byB0aGVcbiAgICAvLyAgICAgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIHN0eWxlUGF0dGVybnMgd2l0aCB0aGVcbiAgICAvLyAgICAgYXJndW1lbnQgXCJwb3NpdGl2ZVBhdHRlcm5cIi5cbiAgICBpbnRlcm5hbFsnW1twb3NpdGl2ZVBhdHRlcm5dXSddID0gc3R5bGVQYXR0ZXJucy5wb3NpdGl2ZVBhdHRlcm47XG5cbiAgICAvLyA0MS4gU2V0IHRoZSBbW25lZ2F0aXZlUGF0dGVybl1dIGludGVybmFsIHByb3BlcnR5IG9mIG51bWJlckZvcm1hdCB0byB0aGVcbiAgICAvLyAgICAgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIHN0eWxlUGF0dGVybnMgd2l0aCB0aGVcbiAgICAvLyAgICAgYXJndW1lbnQgXCJuZWdhdGl2ZVBhdHRlcm5cIi5cbiAgICBpbnRlcm5hbFsnW1tuZWdhdGl2ZVBhdHRlcm5dXSddID0gc3R5bGVQYXR0ZXJucy5uZWdhdGl2ZVBhdHRlcm47XG5cbiAgICAvLyA0Mi4gU2V0IHRoZSBbW2JvdW5kRm9ybWF0XV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIHVuZGVmaW5lZC5cbiAgICBpbnRlcm5hbFsnW1tib3VuZEZvcm1hdF1dJ10gPSB1bmRlZmluZWQ7XG5cbiAgICAvLyA0My4gU2V0IHRoZSBbW2luaXRpYWxpemVkTnVtYmVyRm9ybWF0XV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvXG4gICAgLy8gICAgIHRydWUuXG4gICAgaW50ZXJuYWxbJ1tbaW5pdGlhbGl6ZWROdW1iZXJGb3JtYXRdXSddID0gdHJ1ZTtcblxuICAgIC8vIEluIEVTMywgd2UgbmVlZCB0byBwcmUtYmluZCB0aGUgZm9ybWF0KCkgZnVuY3Rpb25cbiAgICBpZiAoZXMzKSBudW1iZXJGb3JtYXQuZm9ybWF0ID0gR2V0Rm9ybWF0TnVtYmVyLmNhbGwobnVtYmVyRm9ybWF0KTtcblxuICAgIC8vIFJlc3RvcmUgdGhlIFJlZ0V4cCBwcm9wZXJ0aWVzXG4gICAgcmVnZXhwUmVzdG9yZSgpO1xuXG4gICAgLy8gUmV0dXJuIHRoZSBuZXdseSBpbml0aWFsaXNlZCBvYmplY3RcbiAgICByZXR1cm4gbnVtYmVyRm9ybWF0O1xufVxuXG5mdW5jdGlvbiBDdXJyZW5jeURpZ2l0cyhjdXJyZW5jeSkge1xuICAgIC8vIFdoZW4gdGhlIEN1cnJlbmN5RGlnaXRzIGFic3RyYWN0IG9wZXJhdGlvbiBpcyBjYWxsZWQgd2l0aCBhbiBhcmd1bWVudCBjdXJyZW5jeVxuICAgIC8vICh3aGljaCBtdXN0IGJlIGFuIHVwcGVyIGNhc2UgU3RyaW5nIHZhbHVlKSwgdGhlIGZvbGxvd2luZyBzdGVwcyBhcmUgdGFrZW46XG5cbiAgICAvLyAxLiBJZiB0aGUgSVNPIDQyMTcgY3VycmVuY3kgYW5kIGZ1bmRzIGNvZGUgbGlzdCBjb250YWlucyBjdXJyZW5jeSBhcyBhblxuICAgIC8vIGFscGhhYmV0aWMgY29kZSwgdGhlbiByZXR1cm4gdGhlIG1pbm9yIHVuaXQgdmFsdWUgY29ycmVzcG9uZGluZyB0byB0aGVcbiAgICAvLyBjdXJyZW5jeSBmcm9tIHRoZSBsaXN0OyBlbHNlIHJldHVybiAyLlxuICAgIHJldHVybiBjdXJyZW5jeU1pbm9yVW5pdHNbY3VycmVuY3ldICE9PSB1bmRlZmluZWQgPyBjdXJyZW5jeU1pbm9yVW5pdHNbY3VycmVuY3ldIDogMjtcbn1cblxuLyogMTEuMi4zICovaW50ZXJuYWxzLk51bWJlckZvcm1hdCA9IHtcbiAgICAnW1thdmFpbGFibGVMb2NhbGVzXV0nOiBbXSxcbiAgICAnW1tyZWxldmFudEV4dGVuc2lvbktleXNdXSc6IFsnbnUnXSxcbiAgICAnW1tsb2NhbGVEYXRhXV0nOiB7fVxufTtcblxuLyoqXG4gKiBXaGVuIHRoZSBzdXBwb3J0ZWRMb2NhbGVzT2YgbWV0aG9kIG9mIEludGwuTnVtYmVyRm9ybWF0IGlzIGNhbGxlZCwgdGhlXG4gKiBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG4vKiAxMS4yLjIgKi9cbmRlZmluZVByb3BlcnR5KEludGwuTnVtYmVyRm9ybWF0LCAnc3VwcG9ydGVkTG9jYWxlc09mJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZm5CaW5kLmNhbGwoZnVuY3Rpb24gKGxvY2FsZXMpIHtcbiAgICAgICAgLy8gQm91bmQgZnVuY3Rpb25zIG9ubHkgaGF2ZSB0aGUgYHRoaXNgIHZhbHVlIGFsdGVyZWQgaWYgYmVpbmcgdXNlZCBhcyBhIGNvbnN0cnVjdG9yLFxuICAgICAgICAvLyB0aGlzIGxldHMgdXMgaW1pdGF0ZSBhIG5hdGl2ZSBmdW5jdGlvbiB0aGF0IGhhcyBubyBjb25zdHJ1Y3RvclxuICAgICAgICBpZiAoIWhvcC5jYWxsKHRoaXMsICdbW2F2YWlsYWJsZUxvY2FsZXNdXScpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzdXBwb3J0ZWRMb2NhbGVzT2YoKSBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhbiBvYmplY3Qgd2hvc2UgcHJvcHMgY2FuIGJlIHVzZWQgdG8gcmVzdG9yZSB0aGUgdmFsdWVzIG9mIFJlZ0V4cCBwcm9wc1xuICAgICAgICB2YXIgcmVnZXhwUmVzdG9yZSA9IGNyZWF0ZVJlZ0V4cFJlc3RvcmUoKSxcblxuXG4gICAgICAgIC8vIDEuIElmIG9wdGlvbnMgaXMgbm90IHByb3ZpZGVkLCB0aGVuIGxldCBvcHRpb25zIGJlIHVuZGVmaW5lZC5cbiAgICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50c1sxXSxcblxuXG4gICAgICAgIC8vIDIuIExldCBhdmFpbGFibGVMb2NhbGVzIGJlIHRoZSB2YWx1ZSBvZiB0aGUgW1thdmFpbGFibGVMb2NhbGVzXV0gaW50ZXJuYWxcbiAgICAgICAgLy8gICAgcHJvcGVydHkgb2YgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIG9iamVjdCB0aGF0IGlzIHRoZSBpbml0aWFsIHZhbHVlIG9mXG4gICAgICAgIC8vICAgIEludGwuTnVtYmVyRm9ybWF0LlxuXG4gICAgICAgIGF2YWlsYWJsZUxvY2FsZXMgPSB0aGlzWydbW2F2YWlsYWJsZUxvY2FsZXNdXSddLFxuXG5cbiAgICAgICAgLy8gMy4gTGV0IHJlcXVlc3RlZExvY2FsZXMgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBDYW5vbmljYWxpemVMb2NhbGVMaXN0XG4gICAgICAgIC8vICAgIGFic3RyYWN0IG9wZXJhdGlvbiAoZGVmaW5lZCBpbiA5LjIuMSkgd2l0aCBhcmd1bWVudCBsb2NhbGVzLlxuICAgICAgICByZXF1ZXN0ZWRMb2NhbGVzID0gQ2Fub25pY2FsaXplTG9jYWxlTGlzdChsb2NhbGVzKTtcblxuICAgICAgICAvLyBSZXN0b3JlIHRoZSBSZWdFeHAgcHJvcGVydGllc1xuICAgICAgICByZWdleHBSZXN0b3JlKCk7XG5cbiAgICAgICAgLy8gNC4gUmV0dXJuIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgU3VwcG9ydGVkTG9jYWxlcyBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAgICAgLy8gICAgKGRlZmluZWQgaW4gOS4yLjgpIHdpdGggYXJndW1lbnRzIGF2YWlsYWJsZUxvY2FsZXMsIHJlcXVlc3RlZExvY2FsZXMsXG4gICAgICAgIC8vICAgIGFuZCBvcHRpb25zLlxuICAgICAgICByZXR1cm4gU3VwcG9ydGVkTG9jYWxlcyhhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzLCBvcHRpb25zKTtcbiAgICB9LCBpbnRlcm5hbHMuTnVtYmVyRm9ybWF0KVxufSk7XG5cbi8qKlxuICogVGhpcyBuYW1lZCBhY2Nlc3NvciBwcm9wZXJ0eSByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBmb3JtYXRzIGEgbnVtYmVyXG4gKiBhY2NvcmRpbmcgdG8gdGhlIGVmZmVjdGl2ZSBsb2NhbGUgYW5kIHRoZSBmb3JtYXR0aW5nIG9wdGlvbnMgb2YgdGhpc1xuICogTnVtYmVyRm9ybWF0IG9iamVjdC5cbiAqL1xuLyogMTEuMy4yICovZGVmaW5lUHJvcGVydHkoSW50bC5OdW1iZXJGb3JtYXQucHJvdG90eXBlLCAnZm9ybWF0Jywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IEdldEZvcm1hdE51bWJlclxufSk7XG5cbmZ1bmN0aW9uIEdldEZvcm1hdE51bWJlcigpIHtcbiAgICB2YXIgaW50ZXJuYWwgPSB0aGlzICE9PSBudWxsICYmIGJhYmVsSGVscGVycyQxW1widHlwZW9mXCJdKHRoaXMpID09PSAnb2JqZWN0JyAmJiBnZXRJbnRlcm5hbFByb3BlcnRpZXModGhpcyk7XG5cbiAgICAvLyBTYXRpc2Z5IHRlc3QgMTEuM19iXG4gICAgaWYgKCFpbnRlcm5hbCB8fCAhaW50ZXJuYWxbJ1tbaW5pdGlhbGl6ZWROdW1iZXJGb3JtYXRdXSddKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdgdGhpc2AgdmFsdWUgZm9yIGZvcm1hdCgpIGlzIG5vdCBhbiBpbml0aWFsaXplZCBJbnRsLk51bWJlckZvcm1hdCBvYmplY3QuJyk7XG5cbiAgICAvLyBUaGUgdmFsdWUgb2YgdGhlIFtbR2V0XV0gYXR0cmlidXRlIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgZm9sbG93aW5nXG4gICAgLy8gc3RlcHM6XG5cbiAgICAvLyAxLiBJZiB0aGUgW1tib3VuZEZvcm1hdF1dIGludGVybmFsIHByb3BlcnR5IG9mIHRoaXMgTnVtYmVyRm9ybWF0IG9iamVjdFxuICAgIC8vICAgIGlzIHVuZGVmaW5lZCwgdGhlbjpcbiAgICBpZiAoaW50ZXJuYWxbJ1tbYm91bmRGb3JtYXRdXSddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gYS4gTGV0IEYgYmUgYSBGdW5jdGlvbiBvYmplY3QsIHdpdGggaW50ZXJuYWwgcHJvcGVydGllcyBzZXQgYXNcbiAgICAgICAgLy8gICAgc3BlY2lmaWVkIGZvciBidWlsdC1pbiBmdW5jdGlvbnMgaW4gRVM1LCAxNSwgb3Igc3VjY2Vzc29yLCBhbmQgdGhlXG4gICAgICAgIC8vICAgIGxlbmd0aCBwcm9wZXJ0eSBzZXQgdG8gMSwgdGhhdCB0YWtlcyB0aGUgYXJndW1lbnQgdmFsdWUgYW5kXG4gICAgICAgIC8vICAgIHBlcmZvcm1zIHRoZSBmb2xsb3dpbmcgc3RlcHM6XG4gICAgICAgIHZhciBGID0gZnVuY3Rpb24gRih2YWx1ZSkge1xuICAgICAgICAgICAgLy8gaS4gSWYgdmFsdWUgaXMgbm90IHByb3ZpZGVkLCB0aGVuIGxldCB2YWx1ZSBiZSB1bmRlZmluZWQuXG4gICAgICAgICAgICAvLyBpaS4gTGV0IHggYmUgVG9OdW1iZXIodmFsdWUpLlxuICAgICAgICAgICAgLy8gaWlpLiBSZXR1cm4gdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBGb3JtYXROdW1iZXIgYWJzdHJhY3RcbiAgICAgICAgICAgIC8vICAgICAgb3BlcmF0aW9uIChkZWZpbmVkIGJlbG93KSB3aXRoIGFyZ3VtZW50cyB0aGlzIGFuZCB4LlxuICAgICAgICAgICAgcmV0dXJuIEZvcm1hdE51bWJlcih0aGlzLCAvKiB4ID0gKi9OdW1iZXIodmFsdWUpKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBiLiBMZXQgYmluZCBiZSB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gZnVuY3Rpb24gb2JqZWN0IGRlZmluZWQgaW4gRVM1LFxuICAgICAgICAvLyAgICAxNS4zLjQuNS5cbiAgICAgICAgLy8gYy4gTGV0IGJmIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDYWxsXV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgIC8vICAgIGJpbmQgd2l0aCBGIGFzIHRoZSB0aGlzIHZhbHVlIGFuZCBhbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmdcbiAgICAgICAgLy8gICAgdGhlIHNpbmdsZSBpdGVtIHRoaXMuXG4gICAgICAgIHZhciBiZiA9IGZuQmluZC5jYWxsKEYsIHRoaXMpO1xuXG4gICAgICAgIC8vIGQuIFNldCB0aGUgW1tib3VuZEZvcm1hdF1dIGludGVybmFsIHByb3BlcnR5IG9mIHRoaXMgTnVtYmVyRm9ybWF0XG4gICAgICAgIC8vICAgIG9iamVjdCB0byBiZi5cbiAgICAgICAgaW50ZXJuYWxbJ1tbYm91bmRGb3JtYXRdXSddID0gYmY7XG4gICAgfVxuICAgIC8vIFJldHVybiB0aGUgdmFsdWUgb2YgdGhlIFtbYm91bmRGb3JtYXRdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiB0aGlzXG4gICAgLy8gTnVtYmVyRm9ybWF0IG9iamVjdC5cbiAgICByZXR1cm4gaW50ZXJuYWxbJ1tbYm91bmRGb3JtYXRdXSddO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUb1BhcnRzKCkge1xuICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXTtcblxuICAgIHZhciBpbnRlcm5hbCA9IHRoaXMgIT09IG51bGwgJiYgYmFiZWxIZWxwZXJzJDFbXCJ0eXBlb2ZcIl0odGhpcykgPT09ICdvYmplY3QnICYmIGdldEludGVybmFsUHJvcGVydGllcyh0aGlzKTtcbiAgICBpZiAoIWludGVybmFsIHx8ICFpbnRlcm5hbFsnW1tpbml0aWFsaXplZE51bWJlckZvcm1hdF1dJ10pIHRocm93IG5ldyBUeXBlRXJyb3IoJ2B0aGlzYCB2YWx1ZSBmb3IgZm9ybWF0VG9QYXJ0cygpIGlzIG5vdCBhbiBpbml0aWFsaXplZCBJbnRsLk51bWJlckZvcm1hdCBvYmplY3QuJyk7XG5cbiAgICB2YXIgeCA9IE51bWJlcih2YWx1ZSk7XG4gICAgcmV0dXJuIEZvcm1hdE51bWJlclRvUGFydHModGhpcywgeCk7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbnRsLk51bWJlckZvcm1hdC5wcm90b3R5cGUsICdmb3JtYXRUb1BhcnRzJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZm9ybWF0VG9QYXJ0c1xufSk7XG5cbi8qXG4gKiBAc3BlY1tzdGFzbS9lY21hNDAyL251bWJlci1mb3JtYXQtdG8tcGFydHMvc3BlYy9udW1iZXJmb3JtYXQuaHRtbF1cbiAqIEBjbGF1c2Vbc2VjLWZvcm1hdG51bWJlcnRvcGFydHNdXG4gKi9cbmZ1bmN0aW9uIEZvcm1hdE51bWJlclRvUGFydHMobnVtYmVyRm9ybWF0LCB4KSB7XG4gICAgLy8gMS4gTGV0IHBhcnRzIGJlID8gUGFydGl0aW9uTnVtYmVyUGF0dGVybihudW1iZXJGb3JtYXQsIHgpLlxuICAgIHZhciBwYXJ0cyA9IFBhcnRpdGlvbk51bWJlclBhdHRlcm4obnVtYmVyRm9ybWF0LCB4KTtcbiAgICAvLyAyLiBMZXQgcmVzdWx0IGJlIEFycmF5Q3JlYXRlKDApLlxuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAvLyAzLiBMZXQgbiBiZSAwLlxuICAgIHZhciBuID0gMDtcbiAgICAvLyA0LiBGb3IgZWFjaCBwYXJ0IGluIHBhcnRzLCBkbzpcbiAgICBmb3IgKHZhciBpID0gMDsgcGFydHMubGVuZ3RoID4gaTsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgIC8vIGEuIExldCBPIGJlIE9iamVjdENyZWF0ZSglT2JqZWN0UHJvdG90eXBlJSkuXG4gICAgICAgIHZhciBPID0ge307XG4gICAgICAgIC8vIGEuIFBlcmZvcm0gPyBDcmVhdGVEYXRhUHJvcGVydHlPclRocm93KE8sIFwidHlwZVwiLCBwYXJ0LltbdHlwZV1dKS5cbiAgICAgICAgTy50eXBlID0gcGFydFsnW1t0eXBlXV0nXTtcbiAgICAgICAgLy8gYS4gUGVyZm9ybSA/IENyZWF0ZURhdGFQcm9wZXJ0eU9yVGhyb3coTywgXCJ2YWx1ZVwiLCBwYXJ0LltbdmFsdWVdXSkuXG4gICAgICAgIE8udmFsdWUgPSBwYXJ0WydbW3ZhbHVlXV0nXTtcbiAgICAgICAgLy8gYS4gUGVyZm9ybSA/IENyZWF0ZURhdGFQcm9wZXJ0eU9yVGhyb3cocmVzdWx0LCA/IFRvU3RyaW5nKG4pLCBPKS5cbiAgICAgICAgcmVzdWx0W25dID0gTztcbiAgICAgICAgLy8gYS4gSW5jcmVtZW50IG4gYnkgMS5cbiAgICAgICAgbiArPSAxO1xuICAgIH1cbiAgICAvLyA1LiBSZXR1cm4gcmVzdWx0LlxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qXG4gKiBAc3BlY1tzdGFzbS9lY21hNDAyL251bWJlci1mb3JtYXQtdG8tcGFydHMvc3BlYy9udW1iZXJmb3JtYXQuaHRtbF1cbiAqIEBjbGF1c2Vbc2VjLXBhcnRpdGlvbm51bWJlcnBhdHRlcm5dXG4gKi9cbmZ1bmN0aW9uIFBhcnRpdGlvbk51bWJlclBhdHRlcm4obnVtYmVyRm9ybWF0LCB4KSB7XG5cbiAgICB2YXIgaW50ZXJuYWwgPSBnZXRJbnRlcm5hbFByb3BlcnRpZXMobnVtYmVyRm9ybWF0KSxcbiAgICAgICAgbG9jYWxlID0gaW50ZXJuYWxbJ1tbZGF0YUxvY2FsZV1dJ10sXG4gICAgICAgIG51bXMgPSBpbnRlcm5hbFsnW1tudW1iZXJpbmdTeXN0ZW1dXSddLFxuICAgICAgICBkYXRhID0gaW50ZXJuYWxzLk51bWJlckZvcm1hdFsnW1tsb2NhbGVEYXRhXV0nXVtsb2NhbGVdLFxuICAgICAgICBpbGQgPSBkYXRhLnN5bWJvbHNbbnVtc10gfHwgZGF0YS5zeW1ib2xzLmxhdG4sXG4gICAgICAgIHBhdHRlcm4gPSB2b2lkIDA7XG5cbiAgICAvLyAxLiBJZiB4IGlzIG5vdCBOYU4gYW5kIHggPCAwLCB0aGVuOlxuICAgIGlmICghaXNOYU4oeCkgJiYgeCA8IDApIHtcbiAgICAgICAgLy8gYS4gTGV0IHggYmUgLXguXG4gICAgICAgIHggPSAteDtcbiAgICAgICAgLy8gYS4gTGV0IHBhdHRlcm4gYmUgdGhlIHZhbHVlIG9mIG51bWJlckZvcm1hdC5bW25lZ2F0aXZlUGF0dGVybl1dLlxuICAgICAgICBwYXR0ZXJuID0gaW50ZXJuYWxbJ1tbbmVnYXRpdmVQYXR0ZXJuXV0nXTtcbiAgICB9XG4gICAgLy8gMi4gRWxzZSxcbiAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGEuIExldCBwYXR0ZXJuIGJlIHRoZSB2YWx1ZSBvZiBudW1iZXJGb3JtYXQuW1twb3NpdGl2ZVBhdHRlcm5dXS5cbiAgICAgICAgICAgIHBhdHRlcm4gPSBpbnRlcm5hbFsnW1twb3NpdGl2ZVBhdHRlcm5dXSddO1xuICAgICAgICB9XG4gICAgLy8gMy4gTGV0IHJlc3VsdCBiZSBhIG5ldyBlbXB0eSBMaXN0LlxuICAgIHZhciByZXN1bHQgPSBuZXcgTGlzdCgpO1xuICAgIC8vIDQuIExldCBiZWdpbkluZGV4IGJlIENhbGwoJVN0cmluZ1Byb3RvX2luZGV4T2YlLCBwYXR0ZXJuLCBcIntcIiwgMCkuXG4gICAgdmFyIGJlZ2luSW5kZXggPSBwYXR0ZXJuLmluZGV4T2YoJ3snLCAwKTtcbiAgICAvLyA1LiBMZXQgZW5kSW5kZXggYmUgMC5cbiAgICB2YXIgZW5kSW5kZXggPSAwO1xuICAgIC8vIDYuIExldCBuZXh0SW5kZXggYmUgMC5cbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICAvLyA3LiBMZXQgbGVuZ3RoIGJlIHRoZSBudW1iZXIgb2YgY29kZSB1bml0cyBpbiBwYXR0ZXJuLlxuICAgIHZhciBsZW5ndGggPSBwYXR0ZXJuLmxlbmd0aDtcbiAgICAvLyA4LiBSZXBlYXQgd2hpbGUgYmVnaW5JbmRleCBpcyBhbiBpbnRlZ2VyIGluZGV4IGludG8gcGF0dGVybjpcbiAgICB3aGlsZSAoYmVnaW5JbmRleCA+IC0xICYmIGJlZ2luSW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgLy8gYS4gU2V0IGVuZEluZGV4IHRvIENhbGwoJVN0cmluZ1Byb3RvX2luZGV4T2YlLCBwYXR0ZXJuLCBcIn1cIiwgYmVnaW5JbmRleClcbiAgICAgICAgZW5kSW5kZXggPSBwYXR0ZXJuLmluZGV4T2YoJ30nLCBiZWdpbkluZGV4KTtcbiAgICAgICAgLy8gYS4gSWYgZW5kSW5kZXggPSAtMSwgdGhyb3cgbmV3IEVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgaWYgKGVuZEluZGV4ID09PSAtMSkgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgIC8vIGEuIElmIGJlZ2luSW5kZXggaXMgZ3JlYXRlciB0aGFuIG5leHRJbmRleCwgdGhlbjpcbiAgICAgICAgaWYgKGJlZ2luSW5kZXggPiBuZXh0SW5kZXgpIHtcbiAgICAgICAgICAgIC8vIGkuIExldCBsaXRlcmFsIGJlIGEgc3Vic3RyaW5nIG9mIHBhdHRlcm4gZnJvbSBwb3NpdGlvbiBuZXh0SW5kZXgsIGluY2x1c2l2ZSwgdG8gcG9zaXRpb24gYmVnaW5JbmRleCwgZXhjbHVzaXZlLlxuICAgICAgICAgICAgdmFyIGxpdGVyYWwgPSBwYXR0ZXJuLnN1YnN0cmluZyhuZXh0SW5kZXgsIGJlZ2luSW5kZXgpO1xuICAgICAgICAgICAgLy8gaWkuIEFkZCBuZXcgcGFydCByZWNvcmQgeyBbW3R5cGVdXTogXCJsaXRlcmFsXCIsIFtbdmFsdWVdXTogbGl0ZXJhbCB9IGFzIGEgbmV3IGVsZW1lbnQgb2YgdGhlIGxpc3QgcmVzdWx0LlxuICAgICAgICAgICAgYXJyUHVzaC5jYWxsKHJlc3VsdCwgeyAnW1t0eXBlXV0nOiAnbGl0ZXJhbCcsICdbW3ZhbHVlXV0nOiBsaXRlcmFsIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGEuIExldCBwIGJlIHRoZSBzdWJzdHJpbmcgb2YgcGF0dGVybiBmcm9tIHBvc2l0aW9uIGJlZ2luSW5kZXgsIGV4Y2x1c2l2ZSwgdG8gcG9zaXRpb24gZW5kSW5kZXgsIGV4Y2x1c2l2ZS5cbiAgICAgICAgdmFyIHAgPSBwYXR0ZXJuLnN1YnN0cmluZyhiZWdpbkluZGV4ICsgMSwgZW5kSW5kZXgpO1xuICAgICAgICAvLyBhLiBJZiBwIGlzIGVxdWFsIFwibnVtYmVyXCIsIHRoZW46XG4gICAgICAgIGlmIChwID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAvLyBpLiBJZiB4IGlzIE5hTixcbiAgICAgICAgICAgIGlmIChpc05hTih4KSkge1xuICAgICAgICAgICAgICAgIC8vIDEuIExldCBuIGJlIGFuIElMRCBTdHJpbmcgdmFsdWUgaW5kaWNhdGluZyB0aGUgTmFOIHZhbHVlLlxuICAgICAgICAgICAgICAgIHZhciBuID0gaWxkLm5hbjtcbiAgICAgICAgICAgICAgICAvLyAyLiBBZGQgbmV3IHBhcnQgcmVjb3JkIHsgW1t0eXBlXV06IFwibmFuXCIsIFtbdmFsdWVdXTogbiB9IGFzIGEgbmV3IGVsZW1lbnQgb2YgdGhlIGxpc3QgcmVzdWx0LlxuICAgICAgICAgICAgICAgIGFyclB1c2guY2FsbChyZXN1bHQsIHsgJ1tbdHlwZV1dJzogJ25hbicsICdbW3ZhbHVlXV0nOiBuIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWkuIEVsc2UgaWYgaXNGaW5pdGUoeCkgaXMgZmFsc2UsXG4gICAgICAgICAgICBlbHNlIGlmICghaXNGaW5pdGUoeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gMS4gTGV0IG4gYmUgYW4gSUxEIFN0cmluZyB2YWx1ZSBpbmRpY2F0aW5nIGluZmluaXR5LlxuICAgICAgICAgICAgICAgICAgICB2YXIgX24gPSBpbGQuaW5maW5pdHk7XG4gICAgICAgICAgICAgICAgICAgIC8vIDIuIEFkZCBuZXcgcGFydCByZWNvcmQgeyBbW3R5cGVdXTogXCJpbmZpbml0eVwiLCBbW3ZhbHVlXV06IG4gfSBhcyBhIG5ldyBlbGVtZW50IG9mIHRoZSBsaXN0IHJlc3VsdC5cbiAgICAgICAgICAgICAgICAgICAgYXJyUHVzaC5jYWxsKHJlc3VsdCwgeyAnW1t0eXBlXV0nOiAnaW5maW5pdHknLCAnW1t2YWx1ZV1dJzogX24gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlpaS4gRWxzZSxcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEuIElmIHRoZSB2YWx1ZSBvZiBudW1iZXJGb3JtYXQuW1tzdHlsZV1dIGlzIFwicGVyY2VudFwiIGFuZCBpc0Zpbml0ZSh4KSwgbGV0IHggYmUgMTAwIMOXIHguXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW50ZXJuYWxbJ1tbc3R5bGVdXSddID09PSAncGVyY2VudCcgJiYgaXNGaW5pdGUoeCkpIHggKj0gMTAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX24yID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMi4gSWYgdGhlIG51bWJlckZvcm1hdC5bW21pbmltdW1TaWduaWZpY2FudERpZ2l0c11dIGFuZCBudW1iZXJGb3JtYXQuW1ttYXhpbXVtU2lnbmlmaWNhbnREaWdpdHNdXSBhcmUgcHJlc2VudCwgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhvcC5jYWxsKGludGVybmFsLCAnW1ttaW5pbXVtU2lnbmlmaWNhbnREaWdpdHNdXScpICYmIGhvcC5jYWxsKGludGVybmFsLCAnW1ttYXhpbXVtU2lnbmlmaWNhbnREaWdpdHNdXScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYS4gTGV0IG4gYmUgVG9SYXdQcmVjaXNpb24oeCwgbnVtYmVyRm9ybWF0LltbbWluaW11bVNpZ25pZmljYW50RGlnaXRzXV0sIG51bWJlckZvcm1hdC5bW21heGltdW1TaWduaWZpY2FudERpZ2l0c11dKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbjIgPSBUb1Jhd1ByZWNpc2lvbih4LCBpbnRlcm5hbFsnW1ttaW5pbXVtU2lnbmlmaWNhbnREaWdpdHNdXSddLCBpbnRlcm5hbFsnW1ttYXhpbXVtU2lnbmlmaWNhbnREaWdpdHNdXSddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDMuIEVsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYS4gTGV0IG4gYmUgVG9SYXdGaXhlZCh4LCBudW1iZXJGb3JtYXQuW1ttaW5pbXVtSW50ZWdlckRpZ2l0c11dLCBudW1iZXJGb3JtYXQuW1ttaW5pbXVtRnJhY3Rpb25EaWdpdHNdXSwgbnVtYmVyRm9ybWF0LltbbWF4aW11bUZyYWN0aW9uRGlnaXRzXV0pLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbjIgPSBUb1Jhd0ZpeGVkKHgsIGludGVybmFsWydbW21pbmltdW1JbnRlZ2VyRGlnaXRzXV0nXSwgaW50ZXJuYWxbJ1tbbWluaW11bUZyYWN0aW9uRGlnaXRzXV0nXSwgaW50ZXJuYWxbJ1tbbWF4aW11bUZyYWN0aW9uRGlnaXRzXV0nXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gNC4gSWYgdGhlIHZhbHVlIG9mIHRoZSBudW1iZXJGb3JtYXQuW1tudW1iZXJpbmdTeXN0ZW1dXSBtYXRjaGVzIG9uZSBvZiB0aGUgdmFsdWVzIGluIHRoZSBcIk51bWJlcmluZyBTeXN0ZW1cIiBjb2x1bW4gb2YgVGFibGUgMiBiZWxvdywgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bVN5c1tudW1zXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEuIExldCBkaWdpdHMgYmUgYW4gYXJyYXkgd2hvc2UgMTAgU3RyaW5nIHZhbHVlZCBlbGVtZW50cyBhcmUgdGhlIFVURi0xNiBzdHJpbmcgcmVwcmVzZW50YXRpb25zIG9mIHRoZSAxMCBkaWdpdHMgc3BlY2lmaWVkIGluIHRoZSBcIkRpZ2l0c1wiIGNvbHVtbiBvZiB0aGUgbWF0Y2hpbmcgcm93IGluIFRhYmxlIDIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaWdpdHMgPSBudW1TeXNbbnVtc107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEuIFJlcGxhY2UgZWFjaCBkaWdpdCBpbiBuIHdpdGggdGhlIHZhbHVlIG9mIGRpZ2l0c1tkaWdpdF0uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9uMiA9IFN0cmluZyhfbjIpLnJlcGxhY2UoL1xcZC9nLCBmdW5jdGlvbiAoZGlnaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkaWdpdHNbZGlnaXRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gNS4gRWxzZSB1c2UgYW4gaW1wbGVtZW50YXRpb24gZGVwZW5kZW50IGFsZ29yaXRobSB0byBtYXAgbiB0byB0aGUgYXBwcm9wcmlhdGUgcmVwcmVzZW50YXRpb24gb2YgbiBpbiB0aGUgZ2l2ZW4gbnVtYmVyaW5nIHN5c3RlbS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgX24yID0gU3RyaW5nKF9uMik7IC8vICMjI1RPRE8jIyNcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGludGVnZXIgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZnJhY3Rpb24gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA2LiBMZXQgZGVjaW1hbFNlcEluZGV4IGJlIENhbGwoJVN0cmluZ1Byb3RvX2luZGV4T2YlLCBuLCBcIi5cIiwgMCkuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVjaW1hbFNlcEluZGV4ID0gX24yLmluZGV4T2YoJy4nLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDcuIElmIGRlY2ltYWxTZXBJbmRleCA+IDAsIHRoZW46XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVjaW1hbFNlcEluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEuIExldCBpbnRlZ2VyIGJlIHRoZSBzdWJzdHJpbmcgb2YgbiBmcm9tIHBvc2l0aW9uIDAsIGluY2x1c2l2ZSwgdG8gcG9zaXRpb24gZGVjaW1hbFNlcEluZGV4LCBleGNsdXNpdmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZWdlciA9IF9uMi5zdWJzdHJpbmcoMCwgZGVjaW1hbFNlcEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhLiBMZXQgZnJhY3Rpb24gYmUgdGhlIHN1YnN0cmluZyBvZiBuIGZyb20gcG9zaXRpb24gZGVjaW1hbFNlcEluZGV4LCBleGNsdXNpdmUsIHRvIHRoZSBlbmQgb2Ygbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFjdGlvbiA9IF9uMi5zdWJzdHJpbmcoZGVjaW1hbFNlcEluZGV4ICsgMSwgZGVjaW1hbFNlcEluZGV4Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA4LiBFbHNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEuIExldCBpbnRlZ2VyIGJlIG4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVnZXIgPSBfbjI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEuIExldCBmcmFjdGlvbiBiZSB1bmRlZmluZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDkuIElmIHRoZSB2YWx1ZSBvZiB0aGUgbnVtYmVyRm9ybWF0LltbdXNlR3JvdXBpbmddXSBpcyB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludGVybmFsWydbW3VzZUdyb3VwaW5nXV0nXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEuIExldCBncm91cFNlcFN5bWJvbCBiZSB0aGUgSUxORCBTdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBncm91cGluZyBzZXBhcmF0b3IuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdyb3VwU2VwU3ltYm9sID0gaWxkLmdyb3VwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEuIExldCBncm91cHMgYmUgYSBMaXN0IHdob3NlIGVsZW1lbnRzIGFyZSwgaW4gbGVmdCB0byByaWdodCBvcmRlciwgdGhlIHN1YnN0cmluZ3MgZGVmaW5lZCBieSBJTE5EIHNldCBvZiBsb2NhdGlvbnMgd2l0aGluIHRoZSBpbnRlZ2VyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBncm91cHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAtLS0tPiBpbXBsZW1lbnRhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQcmltYXJ5IGdyb3VwIHJlcHJlc2VudHMgdGhlIGdyb3VwIGNsb3Nlc3QgdG8gdGhlIGRlY2ltYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGdTaXplID0gZGF0YS5wYXR0ZXJucy5wcmltYXJ5R3JvdXBTaXplIHx8IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2Vjb25kYXJ5IGdyb3VwIGlzIGV2ZXJ5IG90aGVyIGdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNnU2l6ZSA9IGRhdGEucGF0dGVybnMuc2Vjb25kYXJ5R3JvdXBTaXplIHx8IHBnU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHcm91cCBvbmx5IGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnRlZ2VyLmxlbmd0aCA+IHBnU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbmRleCBvZiB0aGUgcHJpbWFyeSBncm91cGluZyBzZXBhcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuZCA9IGludGVnZXIubGVuZ3RoIC0gcGdTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFydGluZyBpbmRleCBmb3Igb3VyIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IGVuZCAlIHNnU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gaW50ZWdlci5zbGljZSgwLCBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQubGVuZ3RoKSBhcnJQdXNoLmNhbGwoZ3JvdXBzLCBzdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvb3AgdG8gc2VwYXJhdGUgaW50byBzZWNvbmRhcnkgZ3JvdXBpbmcgZGlnaXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChpZHggPCBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclB1c2guY2FsbChncm91cHMsIGludGVnZXIuc2xpY2UoaWR4LCBpZHggKyBzZ1NpemUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkeCArPSBzZ1NpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBwcmltYXJ5IGdyb3VwaW5nIGRpZ2l0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJQdXNoLmNhbGwoZ3JvdXBzLCBpbnRlZ2VyLnNsaWNlKGVuZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclB1c2guY2FsbChncm91cHMsIGludGVnZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhLiBBc3NlcnQ6IFRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gZ3JvdXBzIExpc3QgaXMgZ3JlYXRlciB0aGFuIDAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3Vwcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEuIFJlcGVhdCwgd2hpbGUgZ3JvdXBzIExpc3QgaXMgbm90IGVtcHR5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChncm91cHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGkuIFJlbW92ZSB0aGUgZmlyc3QgZWxlbWVudCBmcm9tIGdyb3VwcyBhbmQgbGV0IGludGVnZXJHcm91cCBiZSB0aGUgdmFsdWUgb2YgdGhhdCBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW50ZWdlckdyb3VwID0gYXJyU2hpZnQuY2FsbChncm91cHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpaS4gQWRkIG5ldyBwYXJ0IHJlY29yZCB7IFtbdHlwZV1dOiBcImludGVnZXJcIiwgW1t2YWx1ZV1dOiBpbnRlZ2VyR3JvdXAgfSBhcyBhIG5ldyBlbGVtZW50IG9mIHRoZSBsaXN0IHJlc3VsdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyUHVzaC5jYWxsKHJlc3VsdCwgeyAnW1t0eXBlXV0nOiAnaW50ZWdlcicsICdbW3ZhbHVlXV0nOiBpbnRlZ2VyR3JvdXAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlpaS4gSWYgZ3JvdXBzIExpc3QgaXMgbm90IGVtcHR5LCB0aGVuOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMS4gQWRkIG5ldyBwYXJ0IHJlY29yZCB7IFtbdHlwZV1dOiBcImdyb3VwXCIsIFtbdmFsdWVdXTogZ3JvdXBTZXBTeW1ib2wgfSBhcyBhIG5ldyBlbGVtZW50IG9mIHRoZSBsaXN0IHJlc3VsdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclB1c2guY2FsbChyZXN1bHQsIHsgJ1tbdHlwZV1dJzogJ2dyb3VwJywgJ1tbdmFsdWVdXSc6IGdyb3VwU2VwU3ltYm9sIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTAuIEVsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYS4gQWRkIG5ldyBwYXJ0IHJlY29yZCB7IFtbdHlwZV1dOiBcImludGVnZXJcIiwgW1t2YWx1ZV1dOiBpbnRlZ2VyIH0gYXMgYSBuZXcgZWxlbWVudCBvZiB0aGUgbGlzdCByZXN1bHQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclB1c2guY2FsbChyZXN1bHQsIHsgJ1tbdHlwZV1dJzogJ2ludGVnZXInLCAnW1t2YWx1ZV1dJzogaW50ZWdlciB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS4gSWYgZnJhY3Rpb24gaXMgbm90IHVuZGVmaW5lZCwgdGhlbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcmFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYS4gTGV0IGRlY2ltYWxTZXBTeW1ib2wgYmUgdGhlIElMTkQgU3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZGVjaW1hbCBzZXBhcmF0b3IuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlY2ltYWxTZXBTeW1ib2wgPSBpbGQuZGVjaW1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhLiBBZGQgbmV3IHBhcnQgcmVjb3JkIHsgW1t0eXBlXV06IFwiZGVjaW1hbFwiLCBbW3ZhbHVlXV06IGRlY2ltYWxTZXBTeW1ib2wgfSBhcyBhIG5ldyBlbGVtZW50IG9mIHRoZSBsaXN0IHJlc3VsdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJQdXNoLmNhbGwocmVzdWx0LCB7ICdbW3R5cGVdXSc6ICdkZWNpbWFsJywgJ1tbdmFsdWVdXSc6IGRlY2ltYWxTZXBTeW1ib2wgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYS4gQWRkIG5ldyBwYXJ0IHJlY29yZCB7IFtbdHlwZV1dOiBcImZyYWN0aW9uXCIsIFtbdmFsdWVdXTogZnJhY3Rpb24gfSBhcyBhIG5ldyBlbGVtZW50IG9mIHRoZSBsaXN0IHJlc3VsdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJQdXNoLmNhbGwocmVzdWx0LCB7ICdbW3R5cGVdXSc6ICdmcmFjdGlvbicsICdbW3ZhbHVlXV0nOiBmcmFjdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGEuIEVsc2UgaWYgcCBpcyBlcXVhbCBcInBsdXNTaWduXCIsIHRoZW46XG4gICAgICAgIGVsc2UgaWYgKHAgPT09IFwicGx1c1NpZ25cIikge1xuICAgICAgICAgICAgICAgIC8vIGkuIExldCBwbHVzU2lnblN5bWJvbCBiZSB0aGUgSUxORCBTdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBwbHVzIHNpZ24uXG4gICAgICAgICAgICAgICAgdmFyIHBsdXNTaWduU3ltYm9sID0gaWxkLnBsdXNTaWduO1xuICAgICAgICAgICAgICAgIC8vIGlpLiBBZGQgbmV3IHBhcnQgcmVjb3JkIHsgW1t0eXBlXV06IFwicGx1c1NpZ25cIiwgW1t2YWx1ZV1dOiBwbHVzU2lnblN5bWJvbCB9IGFzIGEgbmV3IGVsZW1lbnQgb2YgdGhlIGxpc3QgcmVzdWx0LlxuICAgICAgICAgICAgICAgIGFyclB1c2guY2FsbChyZXN1bHQsIHsgJ1tbdHlwZV1dJzogJ3BsdXNTaWduJywgJ1tbdmFsdWVdXSc6IHBsdXNTaWduU3ltYm9sIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYS4gRWxzZSBpZiBwIGlzIGVxdWFsIFwibWludXNTaWduXCIsIHRoZW46XG4gICAgICAgICAgICBlbHNlIGlmIChwID09PSBcIm1pbnVzU2lnblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGkuIExldCBtaW51c1NpZ25TeW1ib2wgYmUgdGhlIElMTkQgU3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbWludXMgc2lnbi5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbnVzU2lnblN5bWJvbCA9IGlsZC5taW51c1NpZ247XG4gICAgICAgICAgICAgICAgICAgIC8vIGlpLiBBZGQgbmV3IHBhcnQgcmVjb3JkIHsgW1t0eXBlXV06IFwibWludXNTaWduXCIsIFtbdmFsdWVdXTogbWludXNTaWduU3ltYm9sIH0gYXMgYSBuZXcgZWxlbWVudCBvZiB0aGUgbGlzdCByZXN1bHQuXG4gICAgICAgICAgICAgICAgICAgIGFyclB1c2guY2FsbChyZXN1bHQsIHsgJ1tbdHlwZV1dJzogJ21pbnVzU2lnbicsICdbW3ZhbHVlXV0nOiBtaW51c1NpZ25TeW1ib2wgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGEuIEVsc2UgaWYgcCBpcyBlcXVhbCBcInBlcmNlbnRTaWduXCIgYW5kIG51bWJlckZvcm1hdC5bW3N0eWxlXV0gaXMgXCJwZXJjZW50XCIsIHRoZW46XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocCA9PT0gXCJwZXJjZW50U2lnblwiICYmIGludGVybmFsWydbW3N0eWxlXV0nXSA9PT0gXCJwZXJjZW50XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGkuIExldCBwZXJjZW50U2lnblN5bWJvbCBiZSB0aGUgSUxORCBTdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBwZXJjZW50IHNpZ24uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGVyY2VudFNpZ25TeW1ib2wgPSBpbGQucGVyY2VudFNpZ247XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpaS4gQWRkIG5ldyBwYXJ0IHJlY29yZCB7IFtbdHlwZV1dOiBcInBlcmNlbnRTaWduXCIsIFtbdmFsdWVdXTogcGVyY2VudFNpZ25TeW1ib2wgfSBhcyBhIG5ldyBlbGVtZW50IG9mIHRoZSBsaXN0IHJlc3VsdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyclB1c2guY2FsbChyZXN1bHQsIHsgJ1tbdHlwZV1dJzogJ2xpdGVyYWwnLCAnW1t2YWx1ZV1dJzogcGVyY2VudFNpZ25TeW1ib2wgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gYS4gRWxzZSBpZiBwIGlzIGVxdWFsIFwiY3VycmVuY3lcIiBhbmQgbnVtYmVyRm9ybWF0Lltbc3R5bGVdXSBpcyBcImN1cnJlbmN5XCIsIHRoZW46XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHAgPT09IFwiY3VycmVuY3lcIiAmJiBpbnRlcm5hbFsnW1tzdHlsZV1dJ10gPT09IFwiY3VycmVuY3lcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGkuIExldCBjdXJyZW5jeSBiZSB0aGUgdmFsdWUgb2YgbnVtYmVyRm9ybWF0LltbY3VycmVuY3ldXS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVuY3kgPSBpbnRlcm5hbFsnW1tjdXJyZW5jeV1dJ107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2QgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpaS4gSWYgbnVtYmVyRm9ybWF0LltbY3VycmVuY3lEaXNwbGF5XV0gaXMgXCJjb2RlXCIsIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW50ZXJuYWxbJ1tbY3VycmVuY3lEaXNwbGF5XV0nXSA9PT0gXCJjb2RlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMS4gTGV0IGNkIGJlIGN1cnJlbmN5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZCA9IGN1cnJlbmN5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpaWkuIEVsc2UgaWYgbnVtYmVyRm9ybWF0LltbY3VycmVuY3lEaXNwbGF5XV0gaXMgXCJzeW1ib2xcIiwgdGhlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGludGVybmFsWydbW2N1cnJlbmN5RGlzcGxheV1dJ10gPT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEuIExldCBjZCBiZSBhbiBJTEQgc3RyaW5nIHJlcHJlc2VudGluZyBjdXJyZW5jeSBpbiBzaG9ydCBmb3JtLiBJZiB0aGUgaW1wbGVtZW50YXRpb24gZG9lcyBub3QgaGF2ZSBzdWNoIGEgcmVwcmVzZW50YXRpb24gb2YgY3VycmVuY3ksIHVzZSBjdXJyZW5jeSBpdHNlbGYuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZCA9IGRhdGEuY3VycmVuY2llc1tjdXJyZW5jeV0gfHwgY3VycmVuY3k7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXYuIEVsc2UgaWYgbnVtYmVyRm9ybWF0LltbY3VycmVuY3lEaXNwbGF5XV0gaXMgXCJuYW1lXCIsIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW50ZXJuYWxbJ1tbY3VycmVuY3lEaXNwbGF5XV0nXSA9PT0gXCJuYW1lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxLiBMZXQgY2QgYmUgYW4gSUxEIHN0cmluZyByZXByZXNlbnRpbmcgY3VycmVuY3kgaW4gbG9uZyBmb3JtLiBJZiB0aGUgaW1wbGVtZW50YXRpb24gZG9lcyBub3QgaGF2ZSBzdWNoIGEgcmVwcmVzZW50YXRpb24gb2YgY3VycmVuY3ksIHRoZW4gdXNlIGN1cnJlbmN5IGl0c2VsZi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZCA9IGN1cnJlbmN5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHYuIEFkZCBuZXcgcGFydCByZWNvcmQgeyBbW3R5cGVdXTogXCJjdXJyZW5jeVwiLCBbW3ZhbHVlXV06IGNkIH0gYXMgYSBuZXcgZWxlbWVudCBvZiB0aGUgbGlzdCByZXN1bHQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyUHVzaC5jYWxsKHJlc3VsdCwgeyAnW1t0eXBlXV0nOiAnY3VycmVuY3knLCAnW1t2YWx1ZV1dJzogY2QgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhLiBFbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGkuIExldCBsaXRlcmFsIGJlIHRoZSBzdWJzdHJpbmcgb2YgcGF0dGVybiBmcm9tIHBvc2l0aW9uIGJlZ2luSW5kZXgsIGluY2x1c2l2ZSwgdG8gcG9zaXRpb24gZW5kSW5kZXgsIGluY2x1c2l2ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9saXRlcmFsID0gcGF0dGVybi5zdWJzdHJpbmcoYmVnaW5JbmRleCwgZW5kSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpaS4gQWRkIG5ldyBwYXJ0IHJlY29yZCB7IFtbdHlwZV1dOiBcImxpdGVyYWxcIiwgW1t2YWx1ZV1dOiBsaXRlcmFsIH0gYXMgYSBuZXcgZWxlbWVudCBvZiB0aGUgbGlzdCByZXN1bHQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclB1c2guY2FsbChyZXN1bHQsIHsgJ1tbdHlwZV1dJzogJ2xpdGVyYWwnLCAnW1t2YWx1ZV1dJzogX2xpdGVyYWwgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyBhLiBTZXQgbmV4dEluZGV4IHRvIGVuZEluZGV4ICsgMS5cbiAgICAgICAgbmV4dEluZGV4ID0gZW5kSW5kZXggKyAxO1xuICAgICAgICAvLyBhLiBTZXQgYmVnaW5JbmRleCB0byBDYWxsKCVTdHJpbmdQcm90b19pbmRleE9mJSwgcGF0dGVybiwgXCJ7XCIsIG5leHRJbmRleClcbiAgICAgICAgYmVnaW5JbmRleCA9IHBhdHRlcm4uaW5kZXhPZigneycsIG5leHRJbmRleCk7XG4gICAgfVxuICAgIC8vIDkuIElmIG5leHRJbmRleCBpcyBsZXNzIHRoYW4gbGVuZ3RoLCB0aGVuOlxuICAgIGlmIChuZXh0SW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgLy8gYS4gTGV0IGxpdGVyYWwgYmUgdGhlIHN1YnN0cmluZyBvZiBwYXR0ZXJuIGZyb20gcG9zaXRpb24gbmV4dEluZGV4LCBpbmNsdXNpdmUsIHRvIHBvc2l0aW9uIGxlbmd0aCwgZXhjbHVzaXZlLlxuICAgICAgICB2YXIgX2xpdGVyYWwyID0gcGF0dGVybi5zdWJzdHJpbmcobmV4dEluZGV4LCBsZW5ndGgpO1xuICAgICAgICAvLyBhLiBBZGQgbmV3IHBhcnQgcmVjb3JkIHsgW1t0eXBlXV06IFwibGl0ZXJhbFwiLCBbW3ZhbHVlXV06IGxpdGVyYWwgfSBhcyBhIG5ldyBlbGVtZW50IG9mIHRoZSBsaXN0IHJlc3VsdC5cbiAgICAgICAgYXJyUHVzaC5jYWxsKHJlc3VsdCwgeyAnW1t0eXBlXV0nOiAnbGl0ZXJhbCcsICdbW3ZhbHVlXV0nOiBfbGl0ZXJhbDIgfSk7XG4gICAgfVxuICAgIC8vIDEwLiBSZXR1cm4gcmVzdWx0LlxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qXG4gKiBAc3BlY1tzdGFzbS9lY21hNDAyL251bWJlci1mb3JtYXQtdG8tcGFydHMvc3BlYy9udW1iZXJmb3JtYXQuaHRtbF1cbiAqIEBjbGF1c2Vbc2VjLWZvcm1hdG51bWJlcl1cbiAqL1xuZnVuY3Rpb24gRm9ybWF0TnVtYmVyKG51bWJlckZvcm1hdCwgeCkge1xuICAgIC8vIDEuIExldCBwYXJ0cyBiZSA/IFBhcnRpdGlvbk51bWJlclBhdHRlcm4obnVtYmVyRm9ybWF0LCB4KS5cbiAgICB2YXIgcGFydHMgPSBQYXJ0aXRpb25OdW1iZXJQYXR0ZXJuKG51bWJlckZvcm1hdCwgeCk7XG4gICAgLy8gMi4gTGV0IHJlc3VsdCBiZSBhbiBlbXB0eSBTdHJpbmcuXG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIC8vIDMuIEZvciBlYWNoIHBhcnQgaW4gcGFydHMsIGRvOlxuICAgIGZvciAodmFyIGkgPSAwOyBwYXJ0cy5sZW5ndGggPiBpOyBpKyspIHtcbiAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgLy8gYS4gU2V0IHJlc3VsdCB0byBhIFN0cmluZyB2YWx1ZSBwcm9kdWNlZCBieSBjb25jYXRlbmF0aW5nIHJlc3VsdCBhbmQgcGFydC5bW3ZhbHVlXV0uXG4gICAgICAgIHJlc3VsdCArPSBwYXJ0WydbW3ZhbHVlXV0nXTtcbiAgICB9XG4gICAgLy8gNC4gUmV0dXJuIHJlc3VsdC5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFdoZW4gdGhlIFRvUmF3UHJlY2lzaW9uIGFic3RyYWN0IG9wZXJhdGlvbiBpcyBjYWxsZWQgd2l0aCBhcmd1bWVudHMgeCAod2hpY2hcbiAqIG11c3QgYmUgYSBmaW5pdGUgbm9uLW5lZ2F0aXZlIG51bWJlciksIG1pblByZWNpc2lvbiwgYW5kIG1heFByZWNpc2lvbiAoYm90aFxuICogbXVzdCBiZSBpbnRlZ2VycyBiZXR3ZWVuIDEgYW5kIDIxKSB0aGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuZnVuY3Rpb24gVG9SYXdQcmVjaXNpb24oeCwgbWluUHJlY2lzaW9uLCBtYXhQcmVjaXNpb24pIHtcbiAgICAvLyAxLiBMZXQgcCBiZSBtYXhQcmVjaXNpb24uXG4gICAgdmFyIHAgPSBtYXhQcmVjaXNpb247XG5cbiAgICB2YXIgbSA9IHZvaWQgMCxcbiAgICAgICAgZSA9IHZvaWQgMDtcblxuICAgIC8vIDIuIElmIHggPSAwLCB0aGVuXG4gICAgaWYgKHggPT09IDApIHtcbiAgICAgICAgLy8gYS4gTGV0IG0gYmUgdGhlIFN0cmluZyBjb25zaXN0aW5nIG9mIHAgb2NjdXJyZW5jZXMgb2YgdGhlIGNoYXJhY3RlciBcIjBcIi5cbiAgICAgICAgbSA9IGFyckpvaW4uY2FsbChBcnJheShwICsgMSksICcwJyk7XG4gICAgICAgIC8vIGIuIExldCBlIGJlIDAuXG4gICAgICAgIGUgPSAwO1xuICAgIH1cbiAgICAvLyAzLiBFbHNlXG4gICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBhLiBMZXQgZSBhbmQgbiBiZSBpbnRlZ2VycyBzdWNoIHRoYXQgMTDhtZbigbvCuSDiiaQgbiA8IDEw4bWWIGFuZCBmb3Igd2hpY2ggdGhlXG4gICAgICAgICAgICAvLyAgICBleGFjdCBtYXRoZW1hdGljYWwgdmFsdWUgb2YgbiDDlyAxMOG1ieKBu+G1luKBusK5IOKAkyB4IGlzIGFzIGNsb3NlIHRvIHplcm8gYXNcbiAgICAgICAgICAgIC8vICAgIHBvc3NpYmxlLiBJZiB0aGVyZSBhcmUgdHdvIHN1Y2ggc2V0cyBvZiBlIGFuZCBuLCBwaWNrIHRoZSBlIGFuZCBuIGZvclxuICAgICAgICAgICAgLy8gICAgd2hpY2ggbiDDlyAxMOG1ieKBu+G1luKBusK5IGlzIGxhcmdlci5cbiAgICAgICAgICAgIGUgPSBsb2cxMEZsb29yKE1hdGguYWJzKHgpKTtcblxuICAgICAgICAgICAgLy8gRWFzaWVyIHRvIGdldCB0byBtIGZyb20gaGVyZVxuICAgICAgICAgICAgdmFyIGYgPSBNYXRoLnJvdW5kKE1hdGguZXhwKE1hdGguYWJzKGUgLSBwICsgMSkgKiBNYXRoLkxOMTApKTtcblxuICAgICAgICAgICAgLy8gYi4gTGV0IG0gYmUgdGhlIFN0cmluZyBjb25zaXN0aW5nIG9mIHRoZSBkaWdpdHMgb2YgdGhlIGRlY2ltYWxcbiAgICAgICAgICAgIC8vICAgIHJlcHJlc2VudGF0aW9uIG9mIG4gKGluIG9yZGVyLCB3aXRoIG5vIGxlYWRpbmcgemVyb2VzKVxuICAgICAgICAgICAgbSA9IFN0cmluZyhNYXRoLnJvdW5kKGUgLSBwICsgMSA8IDAgPyB4ICogZiA6IHggLyBmKSk7XG4gICAgICAgIH1cblxuICAgIC8vIDQuIElmIGUg4omlIHAsIHRoZW5cbiAgICBpZiAoZSA+PSBwKVxuICAgICAgICAvLyBhLiBSZXR1cm4gdGhlIGNvbmNhdGVuYXRpb24gb2YgbSBhbmQgZS1wKzEgb2NjdXJyZW5jZXMgb2YgdGhlIGNoYXJhY3RlciBcIjBcIi5cbiAgICAgICAgcmV0dXJuIG0gKyBhcnJKb2luLmNhbGwoQXJyYXkoZSAtIHAgKyAxICsgMSksICcwJyk7XG5cbiAgICAgICAgLy8gNS4gSWYgZSA9IHAtMSwgdGhlblxuICAgIGVsc2UgaWYgKGUgPT09IHAgLSAxKVxuICAgICAgICAgICAgLy8gYS4gUmV0dXJuIG0uXG4gICAgICAgICAgICByZXR1cm4gbTtcblxuICAgICAgICAgICAgLy8gNi4gSWYgZSDiiaUgMCwgdGhlblxuICAgICAgICBlbHNlIGlmIChlID49IDApXG4gICAgICAgICAgICAgICAgLy8gYS4gTGV0IG0gYmUgdGhlIGNvbmNhdGVuYXRpb24gb2YgdGhlIGZpcnN0IGUrMSBjaGFyYWN0ZXJzIG9mIG0sIHRoZSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICAvLyAgICBcIi5cIiwgYW5kIHRoZSByZW1haW5pbmcgcOKAkyhlKzEpIGNoYXJhY3RlcnMgb2YgbS5cbiAgICAgICAgICAgICAgICBtID0gbS5zbGljZSgwLCBlICsgMSkgKyAnLicgKyBtLnNsaWNlKGUgKyAxKTtcblxuICAgICAgICAgICAgICAgIC8vIDcuIElmIGUgPCAwLCB0aGVuXG4gICAgICAgICAgICBlbHNlIGlmIChlIDwgMClcbiAgICAgICAgICAgICAgICAgICAgLy8gYS4gTGV0IG0gYmUgdGhlIGNvbmNhdGVuYXRpb24gb2YgdGhlIFN0cmluZyBcIjAuXCIsIOKAkyhlKzEpIG9jY3VycmVuY2VzIG9mIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyAgICBjaGFyYWN0ZXIgXCIwXCIsIGFuZCB0aGUgc3RyaW5nIG0uXG4gICAgICAgICAgICAgICAgICAgIG0gPSAnMC4nICsgYXJySm9pbi5jYWxsKEFycmF5KC0oZSArIDEpICsgMSksICcwJykgKyBtO1xuXG4gICAgLy8gOC4gSWYgbSBjb250YWlucyB0aGUgY2hhcmFjdGVyIFwiLlwiLCBhbmQgbWF4UHJlY2lzaW9uID4gbWluUHJlY2lzaW9uLCB0aGVuXG4gICAgaWYgKG0uaW5kZXhPZihcIi5cIikgPj0gMCAmJiBtYXhQcmVjaXNpb24gPiBtaW5QcmVjaXNpb24pIHtcbiAgICAgICAgLy8gYS4gTGV0IGN1dCBiZSBtYXhQcmVjaXNpb24g4oCTIG1pblByZWNpc2lvbi5cbiAgICAgICAgdmFyIGN1dCA9IG1heFByZWNpc2lvbiAtIG1pblByZWNpc2lvbjtcblxuICAgICAgICAvLyBiLiBSZXBlYXQgd2hpbGUgY3V0ID4gMCBhbmQgdGhlIGxhc3QgY2hhcmFjdGVyIG9mIG0gaXMgXCIwXCI6XG4gICAgICAgIHdoaWxlIChjdXQgPiAwICYmIG0uY2hhckF0KG0ubGVuZ3RoIC0gMSkgPT09ICcwJykge1xuICAgICAgICAgICAgLy8gIGkuIFJlbW92ZSB0aGUgbGFzdCBjaGFyYWN0ZXIgZnJvbSBtLlxuICAgICAgICAgICAgbSA9IG0uc2xpY2UoMCwgLTEpO1xuXG4gICAgICAgICAgICAvLyAgaWkuIERlY3JlYXNlIGN1dCBieSAxLlxuICAgICAgICAgICAgY3V0LS07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjLiBJZiB0aGUgbGFzdCBjaGFyYWN0ZXIgb2YgbSBpcyBcIi5cIiwgdGhlblxuICAgICAgICBpZiAobS5jaGFyQXQobS5sZW5ndGggLSAxKSA9PT0gJy4nKVxuICAgICAgICAgICAgLy8gICAgaS4gUmVtb3ZlIHRoZSBsYXN0IGNoYXJhY3RlciBmcm9tIG0uXG4gICAgICAgICAgICBtID0gbS5zbGljZSgwLCAtMSk7XG4gICAgfVxuICAgIC8vIDkuIFJldHVybiBtLlxuICAgIHJldHVybiBtO1xufVxuXG4vKipcbiAqIEBzcGVjW3RjMzkvZWNtYTQwMi9tYXN0ZXIvc3BlYy9udW1iZXJmb3JtYXQuaHRtbF1cbiAqIEBjbGF1c2Vbc2VjLXRvcmF3Zml4ZWRdXG4gKiBXaGVuIHRoZSBUb1Jhd0ZpeGVkIGFic3RyYWN0IG9wZXJhdGlvbiBpcyBjYWxsZWQgd2l0aCBhcmd1bWVudHMgeCAod2hpY2ggbXVzdFxuICogYmUgYSBmaW5pdGUgbm9uLW5lZ2F0aXZlIG51bWJlciksIG1pbkludGVnZXIgKHdoaWNoIG11c3QgYmUgYW4gaW50ZWdlciBiZXR3ZWVuXG4gKiAxIGFuZCAyMSksIG1pbkZyYWN0aW9uLCBhbmQgbWF4RnJhY3Rpb24gKHdoaWNoIG11c3QgYmUgaW50ZWdlcnMgYmV0d2VlbiAwIGFuZFxuICogMjApIHRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG5mdW5jdGlvbiBUb1Jhd0ZpeGVkKHgsIG1pbkludGVnZXIsIG1pbkZyYWN0aW9uLCBtYXhGcmFjdGlvbikge1xuICAgIC8vIDEuIExldCBmIGJlIG1heEZyYWN0aW9uLlxuICAgIHZhciBmID0gbWF4RnJhY3Rpb247XG4gICAgLy8gMi4gTGV0IG4gYmUgYW4gaW50ZWdlciBmb3Igd2hpY2ggdGhlIGV4YWN0IG1hdGhlbWF0aWNhbCB2YWx1ZSBvZiBuIMO3IDEwZiDigJMgeCBpcyBhcyBjbG9zZSB0byB6ZXJvIGFzIHBvc3NpYmxlLiBJZiB0aGVyZSBhcmUgdHdvIHN1Y2ggbiwgcGljayB0aGUgbGFyZ2VyIG4uXG4gICAgdmFyIG4gPSBNYXRoLnBvdygxMCwgZikgKiB4OyAvLyBkaXZlcmdpbmcuLi5cbiAgICAvLyAzLiBJZiBuID0gMCwgbGV0IG0gYmUgdGhlIFN0cmluZyBcIjBcIi4gT3RoZXJ3aXNlLCBsZXQgbSBiZSB0aGUgU3RyaW5nIGNvbnNpc3Rpbmcgb2YgdGhlIGRpZ2l0cyBvZiB0aGUgZGVjaW1hbCByZXByZXNlbnRhdGlvbiBvZiBuIChpbiBvcmRlciwgd2l0aCBubyBsZWFkaW5nIHplcm9lcykuXG4gICAgdmFyIG0gPSBuID09PSAwID8gXCIwXCIgOiBuLnRvRml4ZWQoMCk7IC8vIGRpdmVyaW5nLi4uXG5cbiAgICB7XG4gICAgICAgIC8vIHRoaXMgZGl2ZXJzaW9uIGlzIG5lZWRlZCB0byB0YWtlIGludG8gY29uc2lkZXJhdGlvbiBiaWcgbnVtYmVycywgZS5nLjpcbiAgICAgICAgLy8gMS4yMzQ0NTAxZSszNyAtPiAxMjM0NDUwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFxuICAgICAgICB2YXIgaWR4ID0gdm9pZCAwO1xuICAgICAgICB2YXIgZXhwID0gKGlkeCA9IG0uaW5kZXhPZignZScpKSA+IC0xID8gbS5zbGljZShpZHggKyAxKSA6IDA7XG4gICAgICAgIGlmIChleHApIHtcbiAgICAgICAgICAgIG0gPSBtLnNsaWNlKDAsIGlkeCkucmVwbGFjZSgnLicsICcnKTtcbiAgICAgICAgICAgIG0gKz0gYXJySm9pbi5jYWxsKEFycmF5KGV4cCAtIChtLmxlbmd0aCAtIDEpICsgMSksICcwJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaW50ID0gdm9pZCAwO1xuICAgIC8vIDQuIElmIGYg4omgIDAsIHRoZW5cbiAgICBpZiAoZiAhPT0gMCkge1xuICAgICAgICAvLyBhLiBMZXQgayBiZSB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaW4gbS5cbiAgICAgICAgdmFyIGsgPSBtLmxlbmd0aDtcbiAgICAgICAgLy8gYS4gSWYgayDiiaQgZiwgdGhlblxuICAgICAgICBpZiAoayA8PSBmKSB7XG4gICAgICAgICAgICAvLyBpLiBMZXQgeiBiZSB0aGUgU3RyaW5nIGNvbnNpc3Rpbmcgb2YgZisx4oCTayBvY2N1cnJlbmNlcyBvZiB0aGUgY2hhcmFjdGVyIFwiMFwiLlxuICAgICAgICAgICAgdmFyIHogPSBhcnJKb2luLmNhbGwoQXJyYXkoZiArIDEgLSBrICsgMSksICcwJyk7XG4gICAgICAgICAgICAvLyBpaS4gTGV0IG0gYmUgdGhlIGNvbmNhdGVuYXRpb24gb2YgU3RyaW5ncyB6IGFuZCBtLlxuICAgICAgICAgICAgbSA9IHogKyBtO1xuICAgICAgICAgICAgLy8gaWlpLiBMZXQgayBiZSBmKzEuXG4gICAgICAgICAgICBrID0gZiArIDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYS4gTGV0IGEgYmUgdGhlIGZpcnN0IGvigJNmIGNoYXJhY3RlcnMgb2YgbSwgYW5kIGxldCBiIGJlIHRoZSByZW1haW5pbmcgZiBjaGFyYWN0ZXJzIG9mIG0uXG4gICAgICAgIHZhciBhID0gbS5zdWJzdHJpbmcoMCwgayAtIGYpLFxuICAgICAgICAgICAgYiA9IG0uc3Vic3RyaW5nKGsgLSBmLCBtLmxlbmd0aCk7XG4gICAgICAgIC8vIGEuIExldCBtIGJlIHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZSB0aHJlZSBTdHJpbmdzIGEsIFwiLlwiLCBhbmQgYi5cbiAgICAgICAgbSA9IGEgKyBcIi5cIiArIGI7XG4gICAgICAgIC8vIGEuIExldCBpbnQgYmUgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGluIGEuXG4gICAgICAgIGludCA9IGEubGVuZ3RoO1xuICAgIH1cbiAgICAvLyA1LiBFbHNlLCBsZXQgaW50IGJlIHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBpbiBtLlxuICAgIGVsc2UgaW50ID0gbS5sZW5ndGg7XG4gICAgLy8gNi4gTGV0IGN1dCBiZSBtYXhGcmFjdGlvbiDigJMgbWluRnJhY3Rpb24uXG4gICAgdmFyIGN1dCA9IG1heEZyYWN0aW9uIC0gbWluRnJhY3Rpb247XG4gICAgLy8gNy4gUmVwZWF0IHdoaWxlIGN1dCA+IDAgYW5kIHRoZSBsYXN0IGNoYXJhY3RlciBvZiBtIGlzIFwiMFwiOlxuICAgIHdoaWxlIChjdXQgPiAwICYmIG0uc2xpY2UoLTEpID09PSBcIjBcIikge1xuICAgICAgICAvLyBhLiBSZW1vdmUgdGhlIGxhc3QgY2hhcmFjdGVyIGZyb20gbS5cbiAgICAgICAgbSA9IG0uc2xpY2UoMCwgLTEpO1xuICAgICAgICAvLyBhLiBEZWNyZWFzZSBjdXQgYnkgMS5cbiAgICAgICAgY3V0LS07XG4gICAgfVxuICAgIC8vIDguIElmIHRoZSBsYXN0IGNoYXJhY3RlciBvZiBtIGlzIFwiLlwiLCB0aGVuXG4gICAgaWYgKG0uc2xpY2UoLTEpID09PSBcIi5cIikge1xuICAgICAgICAvLyBhLiBSZW1vdmUgdGhlIGxhc3QgY2hhcmFjdGVyIGZyb20gbS5cbiAgICAgICAgbSA9IG0uc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgICAvLyA5LiBJZiBpbnQgPCBtaW5JbnRlZ2VyLCB0aGVuXG4gICAgaWYgKGludCA8IG1pbkludGVnZXIpIHtcbiAgICAgICAgLy8gYS4gTGV0IHogYmUgdGhlIFN0cmluZyBjb25zaXN0aW5nIG9mIG1pbkludGVnZXLigJNpbnQgb2NjdXJyZW5jZXMgb2YgdGhlIGNoYXJhY3RlciBcIjBcIi5cbiAgICAgICAgdmFyIF96ID0gYXJySm9pbi5jYWxsKEFycmF5KG1pbkludGVnZXIgLSBpbnQgKyAxKSwgJzAnKTtcbiAgICAgICAgLy8gYS4gTGV0IG0gYmUgdGhlIGNvbmNhdGVuYXRpb24gb2YgU3RyaW5ncyB6IGFuZCBtLlxuICAgICAgICBtID0gX3ogKyBtO1xuICAgIH1cbiAgICAvLyAxMC4gUmV0dXJuIG0uXG4gICAgcmV0dXJuIG07XG59XG5cbi8vIFNlY3QgMTEuMy4yIFRhYmxlIDIsIE51bWJlcmluZyBzeXN0ZW1zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIG51bVN5cyA9IHtcbiAgICBhcmFiOiBbXCLZoFwiLCBcItmhXCIsIFwi2aJcIiwgXCLZo1wiLCBcItmkXCIsIFwi2aVcIiwgXCLZplwiLCBcItmnXCIsIFwi2ahcIiwgXCLZqVwiXSxcbiAgICBhcmFiZXh0OiBbXCLbsFwiLCBcItuxXCIsIFwi27JcIiwgXCLbs1wiLCBcItu0XCIsIFwi27VcIiwgXCLbtlwiLCBcItu3XCIsIFwi27hcIiwgXCLbuVwiXSxcbiAgICBiYWxpOiBbXCLhrZBcIiwgXCLhrZFcIiwgXCLhrZJcIiwgXCLhrZNcIiwgXCLhrZRcIiwgXCLhrZVcIiwgXCLhrZZcIiwgXCLhrZdcIiwgXCLhrZhcIiwgXCLhrZlcIl0sXG4gICAgYmVuZzogW1wi4KemXCIsIFwi4KenXCIsIFwi4KeoXCIsIFwi4KepXCIsIFwi4KeqXCIsIFwi4KerXCIsIFwi4KesXCIsIFwi4KetXCIsIFwi4KeuXCIsIFwi4KevXCJdLFxuICAgIGRldmE6IFtcIuClplwiLCBcIuClp1wiLCBcIuClqFwiLCBcIuClqVwiLCBcIuClqlwiLCBcIuClq1wiLCBcIuClrFwiLCBcIuClrVwiLCBcIuClrlwiLCBcIuClr1wiXSxcbiAgICBmdWxsd2lkZTogW1wi77yQXCIsIFwi77yRXCIsIFwi77ySXCIsIFwi77yTXCIsIFwi77yUXCIsIFwi77yVXCIsIFwi77yWXCIsIFwi77yXXCIsIFwi77yYXCIsIFwi77yZXCJdLFxuICAgIGd1anI6IFtcIuCrplwiLCBcIuCrp1wiLCBcIuCrqFwiLCBcIuCrqVwiLCBcIuCrqlwiLCBcIuCrq1wiLCBcIuCrrFwiLCBcIuCrrVwiLCBcIuCrrlwiLCBcIuCrr1wiXSxcbiAgICBndXJ1OiBbXCLgqaZcIiwgXCLgqadcIiwgXCLgqahcIiwgXCLgqalcIiwgXCLgqapcIiwgXCLgqatcIiwgXCLgqaxcIiwgXCLgqa1cIiwgXCLgqa5cIiwgXCLgqa9cIl0sXG4gICAgaGFuaWRlYzogW1wi44CHXCIsIFwi5LiAXCIsIFwi5LqMXCIsIFwi5LiJXCIsIFwi5ZubXCIsIFwi5LqUXCIsIFwi5YWtXCIsIFwi5LiDXCIsIFwi5YWrXCIsIFwi5LmdXCJdLFxuICAgIGtobXI6IFtcIuGfoFwiLCBcIuGfoVwiLCBcIuGfolwiLCBcIuGfo1wiLCBcIuGfpFwiLCBcIuGfpVwiLCBcIuGfplwiLCBcIuGfp1wiLCBcIuGfqFwiLCBcIuGfqVwiXSxcbiAgICBrbmRhOiBbXCLgs6ZcIiwgXCLgs6dcIiwgXCLgs6hcIiwgXCLgs6lcIiwgXCLgs6pcIiwgXCLgs6tcIiwgXCLgs6xcIiwgXCLgs61cIiwgXCLgs65cIiwgXCLgs69cIl0sXG4gICAgbGFvbzogW1wi4LuQXCIsIFwi4LuRXCIsIFwi4LuSXCIsIFwi4LuTXCIsIFwi4LuUXCIsIFwi4LuVXCIsIFwi4LuWXCIsIFwi4LuXXCIsIFwi4LuYXCIsIFwi4LuZXCJdLFxuICAgIGxhdG46IFtcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIl0sXG4gICAgbGltYjogW1wi4aWGXCIsIFwi4aWHXCIsIFwi4aWIXCIsIFwi4aWJXCIsIFwi4aWKXCIsIFwi4aWLXCIsIFwi4aWMXCIsIFwi4aWNXCIsIFwi4aWOXCIsIFwi4aWPXCJdLFxuICAgIG1seW06IFtcIuC1plwiLCBcIuC1p1wiLCBcIuC1qFwiLCBcIuC1qVwiLCBcIuC1qlwiLCBcIuC1q1wiLCBcIuC1rFwiLCBcIuC1rVwiLCBcIuC1rlwiLCBcIuC1r1wiXSxcbiAgICBtb25nOiBbXCLhoJBcIiwgXCLhoJFcIiwgXCLhoJJcIiwgXCLhoJNcIiwgXCLhoJRcIiwgXCLhoJVcIiwgXCLhoJZcIiwgXCLhoJdcIiwgXCLhoJhcIiwgXCLhoJlcIl0sXG4gICAgbXltcjogW1wi4YGAXCIsIFwi4YGBXCIsIFwi4YGCXCIsIFwi4YGDXCIsIFwi4YGEXCIsIFwi4YGFXCIsIFwi4YGGXCIsIFwi4YGHXCIsIFwi4YGIXCIsIFwi4YGJXCJdLFxuICAgIG9yeWE6IFtcIuCtplwiLCBcIuCtp1wiLCBcIuCtqFwiLCBcIuCtqVwiLCBcIuCtqlwiLCBcIuCtq1wiLCBcIuCtrFwiLCBcIuCtrVwiLCBcIuCtrlwiLCBcIuCtr1wiXSxcbiAgICB0YW1sZGVjOiBbXCLgr6ZcIiwgXCLgr6dcIiwgXCLgr6hcIiwgXCLgr6lcIiwgXCLgr6pcIiwgXCLgr6tcIiwgXCLgr6xcIiwgXCLgr61cIiwgXCLgr65cIiwgXCLgr69cIl0sXG4gICAgdGVsdTogW1wi4LGmXCIsIFwi4LGnXCIsIFwi4LGoXCIsIFwi4LGpXCIsIFwi4LGqXCIsIFwi4LGrXCIsIFwi4LGsXCIsIFwi4LGtXCIsIFwi4LGuXCIsIFwi4LGvXCJdLFxuICAgIHRoYWk6IFtcIuC5kFwiLCBcIuC5kVwiLCBcIuC5klwiLCBcIuC5k1wiLCBcIuC5lFwiLCBcIuC5lVwiLCBcIuC5llwiLCBcIuC5l1wiLCBcIuC5mFwiLCBcIuC5mVwiXSxcbiAgICB0aWJ0OiBbXCLgvKBcIiwgXCLgvKFcIiwgXCLgvKJcIiwgXCLgvKNcIiwgXCLgvKRcIiwgXCLgvKVcIiwgXCLgvKZcIiwgXCLgvKdcIiwgXCLgvKhcIiwgXCLgvKlcIl1cbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIGxvY2FsZSBhbmQgZm9ybWF0dGluZyBvcHRpb25zIGNvbXB1dGVkXG4gKiBkdXJpbmcgaW5pdGlhbGl6YXRpb24gb2YgdGhlIG9iamVjdC5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gcmV0dXJucyBhIG5ldyBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcyBhcmUgc2V0IGFzXG4gKiBpZiBjb25zdHJ1Y3RlZCBieSBhbiBvYmplY3QgbGl0ZXJhbCBhc3NpZ25pbmcgdG8gZWFjaCBvZiB0aGUgZm9sbG93aW5nXG4gKiBwcm9wZXJ0aWVzIHRoZSB2YWx1ZSBvZiB0aGUgY29ycmVzcG9uZGluZyBpbnRlcm5hbCBwcm9wZXJ0eSBvZiB0aGlzXG4gKiBOdW1iZXJGb3JtYXQgb2JqZWN0IChzZWUgMTEuNCk6IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBzdHlsZSwgY3VycmVuY3ksXG4gKiBjdXJyZW5jeURpc3BsYXksIG1pbmltdW1JbnRlZ2VyRGlnaXRzLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHMsXG4gKiBtYXhpbXVtRnJhY3Rpb25EaWdpdHMsIG1pbmltdW1TaWduaWZpY2FudERpZ2l0cywgbWF4aW11bVNpZ25pZmljYW50RGlnaXRzLCBhbmRcbiAqIHVzZUdyb3VwaW5nLiBQcm9wZXJ0aWVzIHdob3NlIGNvcnJlc3BvbmRpbmcgaW50ZXJuYWwgcHJvcGVydGllcyBhcmUgbm90IHByZXNlbnRcbiAqIGFyZSBub3QgYXNzaWduZWQuXG4gKi9cbi8qIDExLjMuMyAqL2RlZmluZVByb3BlcnR5KEludGwuTnVtYmVyRm9ybWF0LnByb3RvdHlwZSwgJ3Jlc29sdmVkT3B0aW9ucycsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICB2YXIgcHJvcCA9IHZvaWQgMCxcbiAgICAgICAgICAgIGRlc2NzID0gbmV3IFJlY29yZCgpLFxuICAgICAgICAgICAgcHJvcHMgPSBbJ2xvY2FsZScsICdudW1iZXJpbmdTeXN0ZW0nLCAnc3R5bGUnLCAnY3VycmVuY3knLCAnY3VycmVuY3lEaXNwbGF5JywgJ21pbmltdW1JbnRlZ2VyRGlnaXRzJywgJ21pbmltdW1GcmFjdGlvbkRpZ2l0cycsICdtYXhpbXVtRnJhY3Rpb25EaWdpdHMnLCAnbWluaW11bVNpZ25pZmljYW50RGlnaXRzJywgJ21heGltdW1TaWduaWZpY2FudERpZ2l0cycsICd1c2VHcm91cGluZyddLFxuICAgICAgICAgICAgaW50ZXJuYWwgPSB0aGlzICE9PSBudWxsICYmIGJhYmVsSGVscGVycyQxW1widHlwZW9mXCJdKHRoaXMpID09PSAnb2JqZWN0JyAmJiBnZXRJbnRlcm5hbFByb3BlcnRpZXModGhpcyk7XG5cbiAgICAgICAgLy8gU2F0aXNmeSB0ZXN0IDExLjNfYlxuICAgICAgICBpZiAoIWludGVybmFsIHx8ICFpbnRlcm5hbFsnW1tpbml0aWFsaXplZE51bWJlckZvcm1hdF1dJ10pIHRocm93IG5ldyBUeXBlRXJyb3IoJ2B0aGlzYCB2YWx1ZSBmb3IgcmVzb2x2ZWRPcHRpb25zKCkgaXMgbm90IGFuIGluaXRpYWxpemVkIEludGwuTnVtYmVyRm9ybWF0IG9iamVjdC4nKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbWF4ID0gcHJvcHMubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICAgIGlmIChob3AuY2FsbChpbnRlcm5hbCwgcHJvcCA9ICdbWycgKyBwcm9wc1tpXSArICddXScpKSBkZXNjc1twcm9wc1tpXV0gPSB7IHZhbHVlOiBpbnRlcm5hbFtwcm9wXSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iakNyZWF0ZSh7fSwgZGVzY3MpO1xuICAgIH1cbn0pO1xuXG4vKiBqc2xpbnQgZXNuZXh0OiB0cnVlICovXG5cbi8vIE1hdGNoIHRoZXNlIGRhdGV0aW1lIGNvbXBvbmVudHMgaW4gYSBDTERSIHBhdHRlcm4sIGV4Y2VwdCB0aG9zZSBpbiBzaW5nbGUgcXVvdGVzXG52YXIgZXhwRFRDb21wb25lbnRzID0gLyg/OltFZWNdezEsNn18R3sxLDV9fFtRcV17MSw1fXwoPzpbeVl1cl0rfFV7MSw1fSl8W01MXXsxLDV9fGR7MSwyfXxEezEsM318RnsxfXxbYWJCXXsxLDV9fFtoa0hLXXsxLDJ9fHd7MSwyfXxXezF9fG17MSwyfXxzezEsMn18W3paT3ZWeFhdezEsNH0pKD89KFteJ10qJ1teJ10qJykqW14nXSokKS9nO1xuLy8gdHJpbSBwYXR0ZXJucyBhZnRlciB0cmFuc2Zvcm1hdGlvbnNcbnZhciBleHBQYXR0ZXJuVHJpbW1lciA9IC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZztcbi8vIFNraXAgb3ZlciBwYXR0ZXJucyB3aXRoIHRoZXNlIGRhdGV0aW1lIGNvbXBvbmVudHMgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGRhdGFcbi8vIHRvIGJhY2sgdGhlbSB1cDpcbi8vIHRpbWV6b25lLCB3ZWVrZGF5LCBhbW91bmcgb3RoZXJzXG52YXIgdW53YW50ZWREVENzID0gL1tycVFBU2pKZ3dXSVFxXS87IC8vIHhYVk8gd2VyZSByZW1vdmVkIGZyb20gdGhpcyBsaXN0IGluIGZhdm9yIG9mIGNvbXB1dGluZyBtYXRjaGVzIHdpdGggdGltZVpvbmVOYW1lIHZhbHVlcyBidXQgcHJpbnRpbmcgYXMgZW1wdHkgc3RyaW5nXG5cbnZhciBkdEtleXMgPSBbXCJlcmFcIiwgXCJ5ZWFyXCIsIFwibW9udGhcIiwgXCJkYXlcIiwgXCJ3ZWVrZGF5XCIsIFwicXVhcnRlclwiXTtcbnZhciB0bUtleXMgPSBbXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwiaG91cjEyXCIsIFwidGltZVpvbmVOYW1lXCJdO1xuXG5mdW5jdGlvbiBpc0RhdGVGb3JtYXRPbmx5KG9iaikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG1LZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkodG1LZXlzW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc1RpbWVGb3JtYXRPbmx5KG9iaikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZHRLZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoZHRLZXlzW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBqb2luRGF0ZUFuZFRpbWVGb3JtYXRzKGRhdGVGb3JtYXRPYmosIHRpbWVGb3JtYXRPYmopIHtcbiAgICB2YXIgbyA9IHsgXzoge30gfTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGR0S2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoZGF0ZUZvcm1hdE9ialtkdEtleXNbaV1dKSB7XG4gICAgICAgICAgICBvW2R0S2V5c1tpXV0gPSBkYXRlRm9ybWF0T2JqW2R0S2V5c1tpXV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGVGb3JtYXRPYmouX1tkdEtleXNbaV1dKSB7XG4gICAgICAgICAgICBvLl9bZHRLZXlzW2ldXSA9IGRhdGVGb3JtYXRPYmouX1tkdEtleXNbaV1dO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdG1LZXlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmICh0aW1lRm9ybWF0T2JqW3RtS2V5c1tqXV0pIHtcbiAgICAgICAgICAgIG9bdG1LZXlzW2pdXSA9IHRpbWVGb3JtYXRPYmpbdG1LZXlzW2pdXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZUZvcm1hdE9iai5fW3RtS2V5c1tqXV0pIHtcbiAgICAgICAgICAgIG8uX1t0bUtleXNbal1dID0gdGltZUZvcm1hdE9iai5fW3RtS2V5c1tqXV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG87XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVGaW5hbFBhdHRlcm5zKGZvcm1hdE9iaikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X1BhdHRlcm5zOlxuICAgIC8vICAnSW4gcGF0dGVybnMsIHR3byBzaW5nbGUgcXVvdGVzIHJlcHJlc2VudHMgYSBsaXRlcmFsIHNpbmdsZSBxdW90ZSwgZWl0aGVyXG4gICAgLy8gICBpbnNpZGUgb3Igb3V0c2lkZSBzaW5nbGUgcXVvdGVzLiBUZXh0IHdpdGhpbiBzaW5nbGUgcXVvdGVzIGlzIG5vdFxuICAgIC8vICAgaW50ZXJwcmV0ZWQgaW4gYW55IHdheSAoZXhjZXB0IGZvciB0d28gYWRqYWNlbnQgc2luZ2xlIHF1b3RlcykuJ1xuICAgIGZvcm1hdE9iai5wYXR0ZXJuMTIgPSBmb3JtYXRPYmouZXh0ZW5kZWRQYXR0ZXJuLnJlcGxhY2UoLycoW14nXSopJy9nLCBmdW5jdGlvbiAoJDAsIGxpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwgPyBsaXRlcmFsIDogXCInXCI7XG4gICAgfSk7XG5cbiAgICAvLyBwYXR0ZXJuIDEyIGlzIGFsd2F5cyB0aGUgZGVmYXVsdC4gd2UgY2FuIHByb2R1Y2UgdGhlIDI0IGJ5IHJlbW92aW5nIHthbXBtfVxuICAgIGZvcm1hdE9iai5wYXR0ZXJuID0gZm9ybWF0T2JqLnBhdHRlcm4xMi5yZXBsYWNlKCd7YW1wbX0nLCAnJykucmVwbGFjZShleHBQYXR0ZXJuVHJpbW1lciwgJycpO1xuICAgIHJldHVybiBmb3JtYXRPYmo7XG59XG5cbmZ1bmN0aW9uIGV4cERUQ29tcG9uZW50c01ldGEoJDAsIGZvcm1hdE9iaikge1xuICAgIHN3aXRjaCAoJDAuY2hhckF0KDApKSB7XG4gICAgICAgIC8vIC0tLSBFcmFcbiAgICAgICAgY2FzZSAnRyc6XG4gICAgICAgICAgICBmb3JtYXRPYmouZXJhID0gWydzaG9ydCcsICdzaG9ydCcsICdzaG9ydCcsICdsb25nJywgJ25hcnJvdyddWyQwLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgcmV0dXJuICd7ZXJhfSc7XG5cbiAgICAgICAgLy8gLS0tIFllYXJcbiAgICAgICAgY2FzZSAneSc6XG4gICAgICAgIGNhc2UgJ1knOlxuICAgICAgICBjYXNlICd1JzpcbiAgICAgICAgY2FzZSAnVSc6XG4gICAgICAgIGNhc2UgJ3InOlxuICAgICAgICAgICAgZm9ybWF0T2JqLnllYXIgPSAkMC5sZW5ndGggPT09IDIgPyAnMi1kaWdpdCcgOiAnbnVtZXJpYyc7XG4gICAgICAgICAgICByZXR1cm4gJ3t5ZWFyfSc7XG5cbiAgICAgICAgLy8gLS0tIFF1YXJ0ZXIgKG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBwb2x5ZmlsbClcbiAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgICAgZm9ybWF0T2JqLnF1YXJ0ZXIgPSBbJ251bWVyaWMnLCAnMi1kaWdpdCcsICdzaG9ydCcsICdsb25nJywgJ25hcnJvdyddWyQwLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgcmV0dXJuICd7cXVhcnRlcn0nO1xuXG4gICAgICAgIC8vIC0tLSBNb250aFxuICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICBmb3JtYXRPYmoubW9udGggPSBbJ251bWVyaWMnLCAnMi1kaWdpdCcsICdzaG9ydCcsICdsb25nJywgJ25hcnJvdyddWyQwLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgcmV0dXJuICd7bW9udGh9JztcblxuICAgICAgICAvLyAtLS0gV2VlayAobm90IHN1cHBvcnRlZCBpbiB0aGlzIHBvbHlmaWxsKVxuICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICAgIC8vIHdlZWsgb2YgdGhlIHllYXJcbiAgICAgICAgICAgIGZvcm1hdE9iai53ZWVrID0gJDAubGVuZ3RoID09PSAyID8gJzItZGlnaXQnIDogJ251bWVyaWMnO1xuICAgICAgICAgICAgcmV0dXJuICd7d2Vla2RheX0nO1xuICAgICAgICBjYXNlICdXJzpcbiAgICAgICAgICAgIC8vIHdlZWsgb2YgdGhlIG1vbnRoXG4gICAgICAgICAgICBmb3JtYXRPYmoud2VlayA9ICdudW1lcmljJztcbiAgICAgICAgICAgIHJldHVybiAne3dlZWtkYXl9JztcblxuICAgICAgICAvLyAtLS0gRGF5XG4gICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgLy8gZGF5IG9mIHRoZSBtb250aFxuICAgICAgICAgICAgZm9ybWF0T2JqLmRheSA9ICQwLmxlbmd0aCA9PT0gMiA/ICcyLWRpZ2l0JyA6ICdudW1lcmljJztcbiAgICAgICAgICAgIHJldHVybiAne2RheX0nO1xuICAgICAgICBjYXNlICdEJzogLy8gZGF5IG9mIHRoZSB5ZWFyXG4gICAgICAgIGNhc2UgJ0YnOiAvLyBkYXkgb2YgdGhlIHdlZWtcbiAgICAgICAgY2FzZSAnZyc6XG4gICAgICAgICAgICAvLyAxLi5uOiBNb2RpZmllZCBKdWxpYW4gZGF5XG4gICAgICAgICAgICBmb3JtYXRPYmouZGF5ID0gJ251bWVyaWMnO1xuICAgICAgICAgICAgcmV0dXJuICd7ZGF5fSc7XG5cbiAgICAgICAgLy8gLS0tIFdlZWsgRGF5XG4gICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICAgICAgLy8gZGF5IG9mIHRoZSB3ZWVrXG4gICAgICAgICAgICBmb3JtYXRPYmoud2Vla2RheSA9IFsnc2hvcnQnLCAnc2hvcnQnLCAnc2hvcnQnLCAnbG9uZycsICduYXJyb3cnLCAnc2hvcnQnXVskMC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHJldHVybiAne3dlZWtkYXl9JztcbiAgICAgICAgY2FzZSAnZSc6XG4gICAgICAgICAgICAvLyBsb2NhbCBkYXkgb2YgdGhlIHdlZWtcbiAgICAgICAgICAgIGZvcm1hdE9iai53ZWVrZGF5ID0gWydudW1lcmljJywgJzItZGlnaXQnLCAnc2hvcnQnLCAnbG9uZycsICduYXJyb3cnLCAnc2hvcnQnXVskMC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHJldHVybiAne3dlZWtkYXl9JztcbiAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgICAvLyBzdGFuZCBhbG9uZSBsb2NhbCBkYXkgb2YgdGhlIHdlZWtcbiAgICAgICAgICAgIGZvcm1hdE9iai53ZWVrZGF5ID0gWydudW1lcmljJywgdW5kZWZpbmVkLCAnc2hvcnQnLCAnbG9uZycsICduYXJyb3cnLCAnc2hvcnQnXVskMC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHJldHVybiAne3dlZWtkYXl9JztcblxuICAgICAgICAvLyAtLS0gUGVyaW9kXG4gICAgICAgIGNhc2UgJ2EnOiAvLyBBTSwgUE1cbiAgICAgICAgY2FzZSAnYic6IC8vIGFtLCBwbSwgbm9vbiwgbWlkbmlnaHRcbiAgICAgICAgY2FzZSAnQic6XG4gICAgICAgICAgICAvLyBmbGV4aWJsZSBkYXkgcGVyaW9kc1xuICAgICAgICAgICAgZm9ybWF0T2JqLmhvdXIxMiA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gJ3thbXBtfSc7XG5cbiAgICAgICAgLy8gLS0tIEhvdXJcbiAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgZm9ybWF0T2JqLmhvdXIgPSAkMC5sZW5ndGggPT09IDIgPyAnMi1kaWdpdCcgOiAnbnVtZXJpYyc7XG4gICAgICAgICAgICByZXR1cm4gJ3tob3VyfSc7XG4gICAgICAgIGNhc2UgJ2snOlxuICAgICAgICBjYXNlICdLJzpcbiAgICAgICAgICAgIGZvcm1hdE9iai5ob3VyMTIgPSB0cnVlOyAvLyAxMi1ob3VyLWN5Y2xlIHRpbWUgZm9ybWF0cyAodXNpbmcgaCBvciBLKVxuICAgICAgICAgICAgZm9ybWF0T2JqLmhvdXIgPSAkMC5sZW5ndGggPT09IDIgPyAnMi1kaWdpdCcgOiAnbnVtZXJpYyc7XG4gICAgICAgICAgICByZXR1cm4gJ3tob3VyfSc7XG5cbiAgICAgICAgLy8gLS0tIE1pbnV0ZVxuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgIGZvcm1hdE9iai5taW51dGUgPSAkMC5sZW5ndGggPT09IDIgPyAnMi1kaWdpdCcgOiAnbnVtZXJpYyc7XG4gICAgICAgICAgICByZXR1cm4gJ3ttaW51dGV9JztcblxuICAgICAgICAvLyAtLS0gU2Vjb25kXG4gICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgZm9ybWF0T2JqLnNlY29uZCA9ICQwLmxlbmd0aCA9PT0gMiA/ICcyLWRpZ2l0JyA6ICdudW1lcmljJztcbiAgICAgICAgICAgIHJldHVybiAne3NlY29uZH0nO1xuICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICBmb3JtYXRPYmouc2Vjb25kID0gJ251bWVyaWMnO1xuICAgICAgICAgICAgcmV0dXJuICd7c2Vjb25kfSc7XG5cbiAgICAgICAgLy8gLS0tIFRpbWV6b25lXG4gICAgICAgIGNhc2UgJ3onOiAvLyAxLi4zLCA0OiBzcGVjaWZpYyBub24tbG9jYXRpb24gZm9ybWF0XG4gICAgICAgIGNhc2UgJ1onOiAvLyAxLi4zLCA0LCA1OiBUaGUgSVNPODYwMSB2YXJpb3MgZm9ybWF0c1xuICAgICAgICBjYXNlICdPJzogLy8gMSwgNDogbWlsaXNlY29uZHMgaW4gZGF5IHNob3J0LCBsb25nXG4gICAgICAgIGNhc2UgJ3YnOiAvLyAxLCA0OiBnZW5lcmljIG5vbi1sb2NhdGlvbiBmb3JtYXRcbiAgICAgICAgY2FzZSAnVic6IC8vIDEsIDIsIDMsIDQ6IHRpbWUgem9uZSBJRCBvciBjaXR5XG4gICAgICAgIGNhc2UgJ1gnOiAvLyAxLCAyLCAzLCA0OiBUaGUgSVNPODYwMSB2YXJpb3MgZm9ybWF0c1xuICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICAgIC8vIDEsIDIsIDMsIDQ6IFRoZSBJU084NjAxIHZhcmlvcyBmb3JtYXRzXG4gICAgICAgICAgICAvLyB0aGlzIHBvbHlmaWxsIG9ubHkgc3VwcG9ydHMgbXVjaCwgZm9yIG5vdywgd2UgYXJlIGp1c3QgZG9pbmcgc29tZXRoaW5nIGR1bW15XG4gICAgICAgICAgICBmb3JtYXRPYmoudGltZVpvbmVOYW1lID0gJDAubGVuZ3RoIDwgNCA/ICdzaG9ydCcgOiAnbG9uZyc7XG4gICAgICAgICAgICByZXR1cm4gJ3t0aW1lWm9uZU5hbWV9JztcbiAgICB9XG59XG5cbi8qKlxuICogQ29udmVydHMgdGhlIENMRFIgYXZhaWxhYmxlRm9ybWF0cyBpbnRvIHRoZSBvYmplY3RzIGFuZCBwYXR0ZXJucyByZXF1aXJlZCBieVxuICogdGhlIEVDTUFTY3JpcHQgSW50ZXJuYXRpb25hbGl6YXRpb24gQVBJIHNwZWNpZmljYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURhdGVUaW1lRm9ybWF0KHNrZWxldG9uLCBwYXR0ZXJuKSB7XG4gICAgLy8gd2UgaWdub3JlIGNlcnRhaW4gcGF0dGVybnMgdGhhdCBhcmUgdW5zdXBwb3J0ZWQgdG8gYXZvaWQgdGhpcyBleHBlbnNpdmUgb3AuXG4gICAgaWYgKHVud2FudGVkRFRDcy50ZXN0KHBhdHRlcm4pKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgdmFyIGZvcm1hdE9iaiA9IHtcbiAgICAgICAgb3JpZ2luYWxQYXR0ZXJuOiBwYXR0ZXJuLFxuICAgICAgICBfOiB7fVxuICAgIH07XG5cbiAgICAvLyBSZXBsYWNlIHRoZSBwYXR0ZXJuIHN0cmluZyB3aXRoIHRoZSBvbmUgcmVxdWlyZWQgYnkgdGhlIHNwZWNpZmljYXRpb24sIHdoaWxzdFxuICAgIC8vIGF0IHRoZSBzYW1lIHRpbWUgZXZhbHVhdGluZyBpdCBmb3IgdGhlIHN1YnNldHMgYW5kIGZvcm1hdHNcbiAgICBmb3JtYXRPYmouZXh0ZW5kZWRQYXR0ZXJuID0gcGF0dGVybi5yZXBsYWNlKGV4cERUQ29tcG9uZW50cywgZnVuY3Rpb24gKCQwKSB7XG4gICAgICAgIC8vIFNlZSB3aGljaCBzeW1ib2wgd2UncmUgZGVhbGluZyB3aXRoXG4gICAgICAgIHJldHVybiBleHBEVENvbXBvbmVudHNNZXRhKCQwLCBmb3JtYXRPYmouXyk7XG4gICAgfSk7XG5cbiAgICAvLyBNYXRjaCB0aGUgc2tlbGV0b24gc3RyaW5nIHdpdGggdGhlIG9uZSByZXF1aXJlZCBieSB0aGUgc3BlY2lmaWNhdGlvblxuICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgb24gdGhlIERhdGUgRmllbGQgU3ltYm9sIFRhYmxlOlxuICAgIC8vIGh0dHA6Ly91bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gICAgLy8gTm90ZTogd2UgYXJlIGFkZGluZyBleHRyYSBkYXRhIHRvIHRoZSBmb3JtYXRPYmplY3QgZXZlbiB0aG91Z2ggdGhpcyBwb2x5ZmlsbFxuICAgIC8vICAgICAgIG1pZ2h0IG5vdCBzdXBwb3J0IGl0LlxuICAgIHNrZWxldG9uLnJlcGxhY2UoZXhwRFRDb21wb25lbnRzLCBmdW5jdGlvbiAoJDApIHtcbiAgICAgICAgLy8gU2VlIHdoaWNoIHN5bWJvbCB3ZSdyZSBkZWFsaW5nIHdpdGhcbiAgICAgICAgcmV0dXJuIGV4cERUQ29tcG9uZW50c01ldGEoJDAsIGZvcm1hdE9iaik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29tcHV0ZUZpbmFsUGF0dGVybnMoZm9ybWF0T2JqKTtcbn1cblxuLyoqXG4gKiBQcm9jZXNzZXMgRGF0ZVRpbWUgZm9ybWF0cyBmcm9tIENMRFIgdG8gYW4gZWFzaWVyLXRvLXBhcnNlIGZvcm1hdC5cbiAqIHRoZSByZXN1bHQgb2YgdGhpcyBvcGVyYXRpb24gc2hvdWxkIGJlIGNhY2hlZCB0aGUgZmlyc3QgdGltZSBhIHBhcnRpY3VsYXJcbiAqIGNhbGVuZGFyIGlzIGFuYWx5emVkLlxuICpcbiAqIFRoZSBzcGVjaWZpY2F0aW9uIHJlcXVpcmVzIHdlIHN1cHBvcnQgYXQgbGVhc3QgdGhlIGZvbGxvd2luZyBzdWJzZXRzIG9mXG4gKiBkYXRlL3RpbWUgY29tcG9uZW50czpcbiAqXG4gKiAgIC0gJ3dlZWtkYXknLCAneWVhcicsICdtb250aCcsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJ1xuICogICAtICd3ZWVrZGF5JywgJ3llYXInLCAnbW9udGgnLCAnZGF5J1xuICogICAtICd5ZWFyJywgJ21vbnRoJywgJ2RheSdcbiAqICAgLSAneWVhcicsICdtb250aCdcbiAqICAgLSAnbW9udGgnLCAnZGF5J1xuICogICAtICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnXG4gKiAgIC0gJ2hvdXInLCAnbWludXRlJ1xuICpcbiAqIFdlIG5lZWQgdG8gY2hlcnJ5IHBpY2sgYXQgbGVhc3QgdGhlc2Ugc3Vic2V0cyBmcm9tIHRoZSBDTERSIGRhdGEgYW5kIGNvbnZlcnRcbiAqIHRoZW0gaW50byB0aGUgcGF0dGVybiBvYmplY3RzIHVzZWQgaW4gdGhlIEVDTUEtNDAyIEFQSS5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGF0ZVRpbWVGb3JtYXRzKGZvcm1hdHMpIHtcbiAgICB2YXIgYXZhaWxhYmxlRm9ybWF0cyA9IGZvcm1hdHMuYXZhaWxhYmxlRm9ybWF0cztcbiAgICB2YXIgdGltZUZvcm1hdHMgPSBmb3JtYXRzLnRpbWVGb3JtYXRzO1xuICAgIHZhciBkYXRlRm9ybWF0cyA9IGZvcm1hdHMuZGF0ZUZvcm1hdHM7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBza2VsZXRvbiA9IHZvaWQgMCxcbiAgICAgICAgcGF0dGVybiA9IHZvaWQgMCxcbiAgICAgICAgY29tcHV0ZWQgPSB2b2lkIDAsXG4gICAgICAgIGkgPSB2b2lkIDAsXG4gICAgICAgIGogPSB2b2lkIDA7XG4gICAgdmFyIHRpbWVSZWxhdGVkRm9ybWF0cyA9IFtdO1xuICAgIHZhciBkYXRlUmVsYXRlZEZvcm1hdHMgPSBbXTtcblxuICAgIC8vIE1hcCBhdmFpbGFibGUgKGN1c3RvbSkgZm9ybWF0cyBpbnRvIGEgcGF0dGVybiBmb3IgY3JlYXRlRGF0ZVRpbWVGb3JtYXRzXG4gICAgZm9yIChza2VsZXRvbiBpbiBhdmFpbGFibGVGb3JtYXRzKSB7XG4gICAgICAgIGlmIChhdmFpbGFibGVGb3JtYXRzLmhhc093blByb3BlcnR5KHNrZWxldG9uKSkge1xuICAgICAgICAgICAgcGF0dGVybiA9IGF2YWlsYWJsZUZvcm1hdHNbc2tlbGV0b25dO1xuICAgICAgICAgICAgY29tcHV0ZWQgPSBjcmVhdGVEYXRlVGltZUZvcm1hdChza2VsZXRvbiwgcGF0dGVybik7XG4gICAgICAgICAgICBpZiAoY29tcHV0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb21wdXRlZCk7XG4gICAgICAgICAgICAgICAgLy8gaW4gc29tZSBjYXNlcywgdGhlIGZvcm1hdCBpcyBvbmx5IGRpc3BsYXlpbmcgZGF0ZSBzcGVjaWZpYyBwcm9wc1xuICAgICAgICAgICAgICAgIC8vIG9yIHRpbWUgc3BlY2lmaWMgcHJvcHMsIGluIHdoaWNoIGNhc2Ugd2UgbmVlZCB0byBhbHNvIHByb2R1Y2UgdGhlXG4gICAgICAgICAgICAgICAgLy8gY29tYmluZWQgZm9ybWF0cy5cbiAgICAgICAgICAgICAgICBpZiAoaXNEYXRlRm9ybWF0T25seShjb21wdXRlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVJlbGF0ZWRGb3JtYXRzLnB1c2goY29tcHV0ZWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNUaW1lRm9ybWF0T25seShjb21wdXRlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZVJlbGF0ZWRGb3JtYXRzLnB1c2goY29tcHV0ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1hcCB0aW1lIGZvcm1hdHMgaW50byBhIHBhdHRlcm4gZm9yIGNyZWF0ZURhdGVUaW1lRm9ybWF0c1xuICAgIGZvciAoc2tlbGV0b24gaW4gdGltZUZvcm1hdHMpIHtcbiAgICAgICAgaWYgKHRpbWVGb3JtYXRzLmhhc093blByb3BlcnR5KHNrZWxldG9uKSkge1xuICAgICAgICAgICAgcGF0dGVybiA9IHRpbWVGb3JtYXRzW3NrZWxldG9uXTtcbiAgICAgICAgICAgIGNvbXB1dGVkID0gY3JlYXRlRGF0ZVRpbWVGb3JtYXQoc2tlbGV0b24sIHBhdHRlcm4pO1xuICAgICAgICAgICAgaWYgKGNvbXB1dGVkKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29tcHV0ZWQpO1xuICAgICAgICAgICAgICAgIHRpbWVSZWxhdGVkRm9ybWF0cy5wdXNoKGNvbXB1dGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1hcCBkYXRlIGZvcm1hdHMgaW50byBhIHBhdHRlcm4gZm9yIGNyZWF0ZURhdGVUaW1lRm9ybWF0c1xuICAgIGZvciAoc2tlbGV0b24gaW4gZGF0ZUZvcm1hdHMpIHtcbiAgICAgICAgaWYgKGRhdGVGb3JtYXRzLmhhc093blByb3BlcnR5KHNrZWxldG9uKSkge1xuICAgICAgICAgICAgcGF0dGVybiA9IGRhdGVGb3JtYXRzW3NrZWxldG9uXTtcbiAgICAgICAgICAgIGNvbXB1dGVkID0gY3JlYXRlRGF0ZVRpbWVGb3JtYXQoc2tlbGV0b24sIHBhdHRlcm4pO1xuICAgICAgICAgICAgaWYgKGNvbXB1dGVkKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29tcHV0ZWQpO1xuICAgICAgICAgICAgICAgIGRhdGVSZWxhdGVkRm9ybWF0cy5wdXNoKGNvbXB1dGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbWJpbmUgY3VzdG9tIHRpbWUgYW5kIGN1c3RvbSBkYXRlIGZvcm1hdHMgd2hlbiB0aGV5IGFyZSBvcnRob2dvbmFscyB0byBjb21wbGV0ZSB0aGVcbiAgICAvLyBmb3JtYXRzIHN1cHBvcnRlZCBieSBDTERSLlxuICAgIC8vIFRoaXMgQWxnbyBpcyBiYXNlZCBvbiBzZWN0aW9uIFwiTWlzc2luZyBTa2VsZXRvbiBGaWVsZHNcIiBmcm9tOlxuICAgIC8vIGh0dHA6Ly91bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI2F2YWlsYWJsZUZvcm1hdHNfYXBwZW5kSXRlbXNcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGltZVJlbGF0ZWRGb3JtYXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBkYXRlUmVsYXRlZEZvcm1hdHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChkYXRlUmVsYXRlZEZvcm1hdHNbal0ubW9udGggPT09ICdsb25nJykge1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gPSBkYXRlUmVsYXRlZEZvcm1hdHNbal0ud2Vla2RheSA/IGZvcm1hdHMuZnVsbCA6IGZvcm1hdHMubG9uZztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZVJlbGF0ZWRGb3JtYXRzW2pdLm1vbnRoID09PSAnc2hvcnQnKSB7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA9IGZvcm1hdHMubWVkaXVtO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuID0gZm9ybWF0cy5zaG9ydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXB1dGVkID0gam9pbkRhdGVBbmRUaW1lRm9ybWF0cyhkYXRlUmVsYXRlZEZvcm1hdHNbal0sIHRpbWVSZWxhdGVkRm9ybWF0c1tpXSk7XG4gICAgICAgICAgICBjb21wdXRlZC5vcmlnaW5hbFBhdHRlcm4gPSBwYXR0ZXJuO1xuICAgICAgICAgICAgY29tcHV0ZWQuZXh0ZW5kZWRQYXR0ZXJuID0gcGF0dGVybi5yZXBsYWNlKCd7MH0nLCB0aW1lUmVsYXRlZEZvcm1hdHNbaV0uZXh0ZW5kZWRQYXR0ZXJuKS5yZXBsYWNlKCd7MX0nLCBkYXRlUmVsYXRlZEZvcm1hdHNbal0uZXh0ZW5kZWRQYXR0ZXJuKS5yZXBsYWNlKC9eWyxcXHNdK3xbLFxcc10rJC9naSwgJycpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goY29tcHV0ZUZpbmFsUGF0dGVybnMoY29tcHV0ZWQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIHRoaXMgcmVwcmVzZW50cyB0aGUgZXhjZXB0aW9ucyBvZiB0aGUgcnVsZSB0aGF0IGFyZSBub3QgY292ZXJlZCBieSBDTERSIGF2YWlsYWJsZUZvcm1hdHNcbi8vIGZvciBzaW5nbGUgcHJvcGVydHkgY29uZmlndXJhdGlvbnMsIHRoZXkgcGxheSBubyByb2xlIHdoZW4gdXNpbmcgbXVsdGlwbGUgcHJvcGVydGllcywgYW5kXG4vLyB0aG9zZSB0aGF0IGFyZSBub3QgaW4gdGhpcyB0YWJsZSwgYXJlIG5vdCBleGNlcHRpb25zIG9yIGFyZSBub3QgY292ZXJlZCBieSB0aGUgZGF0YSB3ZVxuLy8gcHJvdmlkZS5cbnZhciB2YWxpZFN5bnRoZXRpY1Byb3BzID0ge1xuICAgIHNlY29uZDoge1xuICAgICAgICBudW1lcmljOiAncycsXG4gICAgICAgICcyLWRpZ2l0JzogJ3NzJ1xuICAgIH0sXG4gICAgbWludXRlOiB7XG4gICAgICAgIG51bWVyaWM6ICdtJyxcbiAgICAgICAgJzItZGlnaXQnOiAnbW0nXG4gICAgfSxcbiAgICB5ZWFyOiB7XG4gICAgICAgIG51bWVyaWM6ICd5JyxcbiAgICAgICAgJzItZGlnaXQnOiAneXknXG4gICAgfSxcbiAgICBkYXk6IHtcbiAgICAgICAgbnVtZXJpYzogJ2QnLFxuICAgICAgICAnMi1kaWdpdCc6ICdkZCdcbiAgICB9LFxuICAgIG1vbnRoOiB7XG4gICAgICAgIG51bWVyaWM6ICdMJyxcbiAgICAgICAgJzItZGlnaXQnOiAnTEwnLFxuICAgICAgICBuYXJyb3c6ICdMTExMTCcsXG4gICAgICAgIHNob3J0OiAnTExMJyxcbiAgICAgICAgbG9uZzogJ0xMTEwnXG4gICAgfSxcbiAgICB3ZWVrZGF5OiB7XG4gICAgICAgIG5hcnJvdzogJ2NjY2NjJyxcbiAgICAgICAgc2hvcnQ6ICdjY2MnLFxuICAgICAgICBsb25nOiAnY2NjYydcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVN5bnRoZXRpY0Zvcm1hdChwcm9wTmFtZSwgcHJvcFZhbHVlKSB7XG4gICAgaWYgKHZhbGlkU3ludGhldGljUHJvcHNbcHJvcE5hbWVdICYmIHZhbGlkU3ludGhldGljUHJvcHNbcHJvcE5hbWVdW3Byb3BWYWx1ZV0pIHtcbiAgICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICAgIHJldHVybiBfcmVmMiA9IHtcbiAgICAgICAgICAgIG9yaWdpbmFsUGF0dGVybjogdmFsaWRTeW50aGV0aWNQcm9wc1twcm9wTmFtZV1bcHJvcFZhbHVlXSxcbiAgICAgICAgICAgIF86IGRlZmluZVByb3BlcnR5JDEoe30sIHByb3BOYW1lLCBwcm9wVmFsdWUpLFxuICAgICAgICAgICAgZXh0ZW5kZWRQYXR0ZXJuOiBcIntcIiArIHByb3BOYW1lICsgXCJ9XCJcbiAgICAgICAgfSwgZGVmaW5lUHJvcGVydHkkMShfcmVmMiwgcHJvcE5hbWUsIHByb3BWYWx1ZSksIGRlZmluZVByb3BlcnR5JDEoX3JlZjIsIFwicGF0dGVybjEyXCIsIFwie1wiICsgcHJvcE5hbWUgKyBcIn1cIiksIGRlZmluZVByb3BlcnR5JDEoX3JlZjIsIFwicGF0dGVyblwiLCBcIntcIiArIHByb3BOYW1lICsgXCJ9XCIpLCBfcmVmMjtcbiAgICB9XG59XG5cbi8vIEFuIG9iamVjdCBtYXAgb2YgZGF0ZSBjb21wb25lbnQga2V5cywgc2F2ZXMgdXNpbmcgYSByZWdleCBsYXRlclxudmFyIGRhdGVXaWR0aHMgPSBvYmpDcmVhdGUobnVsbCwgeyBuYXJyb3c6IHt9LCBzaG9ydDoge30sIGxvbmc6IHt9IH0pO1xuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgZm9yIGEgZGF0ZSBjb21wb25lbnQsIHJlc29sdmVkIHVzaW5nIG11bHRpcGxlIGluaGVyaXRhbmNlIGFzIHNwZWNpZmllZFxuICogYXMgc3BlY2lmaWVkIGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAzNS5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZURhdGVTdHJpbmcoZGF0YSwgY2EsIGNvbXBvbmVudCwgd2lkdGgsIGtleSkge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS5odG1sI011bHRpcGxlX0luaGVyaXRhbmNlOlxuICAgIC8vICdJbiBjbGVhcmx5IHNwZWNpZmllZCBpbnN0YW5jZXMsIHJlc291cmNlcyBtYXkgaW5oZXJpdCBmcm9tIHdpdGhpbiB0aGUgc2FtZSBsb2NhbGUuXG4gICAgLy8gIEZvciBleGFtcGxlLCAuLi4gdGhlIEJ1ZGRoaXN0IGNhbGVuZGFyIGluaGVyaXRzIGZyb20gdGhlIEdyZWdvcmlhbiBjYWxlbmRhci4nXG4gICAgdmFyIG9iaiA9IGRhdGFbY2FdICYmIGRhdGFbY2FdW2NvbXBvbmVudF0gPyBkYXRhW2NhXVtjb21wb25lbnRdIDogZGF0YS5ncmVnb3J5W2NvbXBvbmVudF0sXG5cblxuICAgIC8vIFwic2lkZXdheXNcIiBpbmhlcml0YW5jZSByZXNvbHZlcyBzdHJpbmdzIHdoZW4gYSBrZXkgZG9lc24ndCBleGlzdFxuICAgIGFsdHMgPSB7XG4gICAgICAgIG5hcnJvdzogWydzaG9ydCcsICdsb25nJ10sXG4gICAgICAgIHNob3J0OiBbJ2xvbmcnLCAnbmFycm93J10sXG4gICAgICAgIGxvbmc6IFsnc2hvcnQnLCAnbmFycm93J11cbiAgICB9LFxuXG5cbiAgICAvL1xuICAgIHJlc29sdmVkID0gaG9wLmNhbGwob2JqLCB3aWR0aCkgPyBvYmpbd2lkdGhdIDogaG9wLmNhbGwob2JqLCBhbHRzW3dpZHRoXVswXSkgPyBvYmpbYWx0c1t3aWR0aF1bMF1dIDogb2JqW2FsdHNbd2lkdGhdWzFdXTtcblxuICAgIC8vIGBrZXlgIHdvdWxkbid0IGJlIHNwZWNpZmllZCBmb3IgY29tcG9uZW50cyAnZGF5UGVyaW9kcydcbiAgICByZXR1cm4ga2V5ICE9PSBudWxsID8gcmVzb2x2ZWRba2V5XSA6IHJlc29sdmVkO1xufVxuXG4vLyBEZWZpbmUgdGhlIERhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIGludGVybmFsbHkgc28gaXQgY2Fubm90IGJlIHRhaW50ZWRcbmZ1bmN0aW9uIERhdGVUaW1lRm9ybWF0Q29uc3RydWN0b3IoKSB7XG4gICAgdmFyIGxvY2FsZXMgPSBhcmd1bWVudHNbMF07XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHNbMV07XG5cbiAgICBpZiAoIXRoaXMgfHwgdGhpcyA9PT0gSW50bCkge1xuICAgICAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBJbml0aWFsaXplRGF0ZVRpbWVGb3JtYXQodG9PYmplY3QodGhpcyksIGxvY2FsZXMsIG9wdGlvbnMpO1xufVxuXG5kZWZpbmVQcm9wZXJ0eShJbnRsLCAnRGF0ZVRpbWVGb3JtYXQnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBEYXRlVGltZUZvcm1hdENvbnN0cnVjdG9yXG59KTtcblxuLy8gTXVzdCBleHBsaWNpdGx5IHNldCBwcm90b3R5cGVzIGFzIHVud3JpdGFibGVcbmRlZmluZVByb3BlcnR5KERhdGVUaW1lRm9ybWF0Q29uc3RydWN0b3IsICdwcm90b3R5cGUnLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG59KTtcblxuLyoqXG4gKiBUaGUgYWJzdHJhY3Qgb3BlcmF0aW9uIEluaXRpYWxpemVEYXRlVGltZUZvcm1hdCBhY2NlcHRzIHRoZSBhcmd1bWVudHMgZGF0ZVRpbWVGb3JtYXRcbiAqICh3aGljaCBtdXN0IGJlIGFuIG9iamVjdCksIGxvY2FsZXMsIGFuZCBvcHRpb25zLiBJdCBpbml0aWFsaXplcyBkYXRlVGltZUZvcm1hdCBhcyBhXG4gKiBEYXRlVGltZUZvcm1hdCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIC8qIDEyLjEuMS4xICovSW5pdGlhbGl6ZURhdGVUaW1lRm9ybWF0KGRhdGVUaW1lRm9ybWF0LCBsb2NhbGVzLCBvcHRpb25zKSB7XG4gICAgLy8gVGhpcyB3aWxsIGJlIGEgaW50ZXJuYWwgcHJvcGVydGllcyBvYmplY3QgaWYgd2UncmUgbm90IGFscmVhZHkgaW5pdGlhbGl6ZWRcbiAgICB2YXIgaW50ZXJuYWwgPSBnZXRJbnRlcm5hbFByb3BlcnRpZXMoZGF0ZVRpbWVGb3JtYXQpO1xuXG4gICAgLy8gQ3JlYXRlIGFuIG9iamVjdCB3aG9zZSBwcm9wcyBjYW4gYmUgdXNlZCB0byByZXN0b3JlIHRoZSB2YWx1ZXMgb2YgUmVnRXhwIHByb3BzXG4gICAgdmFyIHJlZ2V4cFJlc3RvcmUgPSBjcmVhdGVSZWdFeHBSZXN0b3JlKCk7XG5cbiAgICAvLyAxLiBJZiBkYXRlVGltZUZvcm1hdCBoYXMgYW4gW1tpbml0aWFsaXplZEludGxPYmplY3RdXSBpbnRlcm5hbCBwcm9wZXJ0eSB3aXRoXG4gICAgLy8gICAgdmFsdWUgdHJ1ZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuICAgIGlmIChpbnRlcm5hbFsnW1tpbml0aWFsaXplZEludGxPYmplY3RdXSddID09PSB0cnVlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdgdGhpc2Agb2JqZWN0IGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGl6ZWQgYXMgYW4gSW50bCBvYmplY3QnKTtcblxuICAgIC8vIE5lZWQgdGhpcyB0byBhY2Nlc3MgdGhlIGBpbnRlcm5hbGAgb2JqZWN0XG4gICAgZGVmaW5lUHJvcGVydHkoZGF0ZVRpbWVGb3JtYXQsICdfX2dldEludGVybmFsUHJvcGVydGllcycsIHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgLy8gTk9URTogTm9uLXN0YW5kYXJkLCBmb3IgaW50ZXJuYWwgdXNlIG9ubHlcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHNlY3JldCkgcmV0dXJuIGludGVybmFsO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyAyLiBTZXQgdGhlIFtbaW5pdGlhbGl6ZWRJbnRsT2JqZWN0XV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgbnVtYmVyRm9ybWF0IHRvIHRydWUuXG4gICAgaW50ZXJuYWxbJ1tbaW5pdGlhbGl6ZWRJbnRsT2JqZWN0XV0nXSA9IHRydWU7XG5cbiAgICAvLyAzLiBMZXQgcmVxdWVzdGVkTG9jYWxlcyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIENhbm9uaWNhbGl6ZUxvY2FsZUxpc3RcbiAgICAvLyAgICBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWQgaW4gOS4yLjEpIHdpdGggYXJndW1lbnQgbG9jYWxlcy5cbiAgICB2YXIgcmVxdWVzdGVkTG9jYWxlcyA9IENhbm9uaWNhbGl6ZUxvY2FsZUxpc3QobG9jYWxlcyk7XG5cbiAgICAvLyA0LiBMZXQgb3B0aW9ucyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFRvRGF0ZVRpbWVPcHRpb25zIGFic3RyYWN0XG4gICAgLy8gICAgb3BlcmF0aW9uIChkZWZpbmVkIGJlbG93KSB3aXRoIGFyZ3VtZW50cyBvcHRpb25zLCBcImFueVwiLCBhbmQgXCJkYXRlXCIuXG4gICAgb3B0aW9ucyA9IFRvRGF0ZVRpbWVPcHRpb25zKG9wdGlvbnMsICdhbnknLCAnZGF0ZScpO1xuXG4gICAgLy8gNS4gTGV0IG9wdCBiZSBhIG5ldyBSZWNvcmQuXG4gICAgdmFyIG9wdCA9IG5ldyBSZWNvcmQoKTtcblxuICAgIC8vIDYuIExldCBtYXRjaGVyIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgR2V0T3B0aW9uIGFic3RyYWN0IG9wZXJhdGlvblxuICAgIC8vICAgIChkZWZpbmVkIGluIDkuMi45KSB3aXRoIGFyZ3VtZW50cyBvcHRpb25zLCBcImxvY2FsZU1hdGNoZXJcIiwgXCJzdHJpbmdcIiwgYSBMaXN0XG4gICAgLy8gICAgY29udGFpbmluZyB0aGUgdHdvIFN0cmluZyB2YWx1ZXMgXCJsb29rdXBcIiBhbmQgXCJiZXN0IGZpdFwiLCBhbmQgXCJiZXN0IGZpdFwiLlxuICAgIHZhciBtYXRjaGVyID0gR2V0T3B0aW9uKG9wdGlvbnMsICdsb2NhbGVNYXRjaGVyJywgJ3N0cmluZycsIG5ldyBMaXN0KCdsb29rdXAnLCAnYmVzdCBmaXQnKSwgJ2Jlc3QgZml0Jyk7XG5cbiAgICAvLyA3LiBTZXQgb3B0LltbbG9jYWxlTWF0Y2hlcl1dIHRvIG1hdGNoZXIuXG4gICAgb3B0WydbW2xvY2FsZU1hdGNoZXJdXSddID0gbWF0Y2hlcjtcblxuICAgIC8vIDguIExldCBEYXRlVGltZUZvcm1hdCBiZSB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gb2JqZWN0IHRoYXQgaXMgdGhlIGluaXRpYWxcbiAgICAvLyAgICB2YWx1ZSBvZiBJbnRsLkRhdGVUaW1lRm9ybWF0LlxuICAgIHZhciBEYXRlVGltZUZvcm1hdCA9IGludGVybmFscy5EYXRlVGltZUZvcm1hdDsgLy8gVGhpcyBpcyB3aGF0IHdlICpyZWFsbHkqIG5lZWRcblxuICAgIC8vIDkuIExldCBsb2NhbGVEYXRhIGJlIHRoZSB2YWx1ZSBvZiB0aGUgW1tsb2NhbGVEYXRhXV0gaW50ZXJuYWwgcHJvcGVydHkgb2ZcbiAgICAvLyAgICBEYXRlVGltZUZvcm1hdC5cbiAgICB2YXIgbG9jYWxlRGF0YSA9IERhdGVUaW1lRm9ybWF0WydbW2xvY2FsZURhdGFdXSddO1xuXG4gICAgLy8gMTAuIExldCByIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgUmVzb2x2ZUxvY2FsZSBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAvLyAgICAgKGRlZmluZWQgaW4gOS4yLjUpIHdpdGggdGhlIFtbYXZhaWxhYmxlTG9jYWxlc11dIGludGVybmFsIHByb3BlcnR5IG9mXG4gICAgLy8gICAgICBEYXRlVGltZUZvcm1hdCwgcmVxdWVzdGVkTG9jYWxlcywgb3B0LCB0aGUgW1tyZWxldmFudEV4dGVuc2lvbktleXNdXVxuICAgIC8vICAgICAgaW50ZXJuYWwgcHJvcGVydHkgb2YgRGF0ZVRpbWVGb3JtYXQsIGFuZCBsb2NhbGVEYXRhLlxuICAgIHZhciByID0gUmVzb2x2ZUxvY2FsZShEYXRlVGltZUZvcm1hdFsnW1thdmFpbGFibGVMb2NhbGVzXV0nXSwgcmVxdWVzdGVkTG9jYWxlcywgb3B0LCBEYXRlVGltZUZvcm1hdFsnW1tyZWxldmFudEV4dGVuc2lvbktleXNdXSddLCBsb2NhbGVEYXRhKTtcblxuICAgIC8vIDExLiBTZXQgdGhlIFtbbG9jYWxlXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgZGF0ZVRpbWVGb3JtYXQgdG8gdGhlIHZhbHVlIG9mXG4gICAgLy8gICAgIHIuW1tsb2NhbGVdXS5cbiAgICBpbnRlcm5hbFsnW1tsb2NhbGVdXSddID0gclsnW1tsb2NhbGVdXSddO1xuXG4gICAgLy8gMTIuIFNldCB0aGUgW1tjYWxlbmRhcl1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0IHRvIHRoZSB2YWx1ZSBvZlxuICAgIC8vICAgICByLltbY2FdXS5cbiAgICBpbnRlcm5hbFsnW1tjYWxlbmRhcl1dJ10gPSByWydbW2NhXV0nXTtcblxuICAgIC8vIDEzLiBTZXQgdGhlIFtbbnVtYmVyaW5nU3lzdGVtXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgZGF0ZVRpbWVGb3JtYXQgdG8gdGhlIHZhbHVlIG9mXG4gICAgLy8gICAgIHIuW1tudV1dLlxuICAgIGludGVybmFsWydbW251bWJlcmluZ1N5c3RlbV1dJ10gPSByWydbW251XV0nXTtcblxuICAgIC8vIFRoZSBzcGVjaWZpY2F0aW9uIGRvZXNuJ3QgdGVsbCB1cyB0byBkbyB0aGlzLCBidXQgaXQncyBoZWxwZnVsIGxhdGVyIG9uXG4gICAgaW50ZXJuYWxbJ1tbZGF0YUxvY2FsZV1dJ10gPSByWydbW2RhdGFMb2NhbGVdXSddO1xuXG4gICAgLy8gMTQuIExldCBkYXRhTG9jYWxlIGJlIHRoZSB2YWx1ZSBvZiByLltbZGF0YUxvY2FsZV1dLlxuICAgIHZhciBkYXRhTG9jYWxlID0gclsnW1tkYXRhTG9jYWxlXV0nXTtcblxuICAgIC8vIDE1LiBMZXQgdHogYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZiBvcHRpb25zIHdpdGhcbiAgICAvLyAgICAgYXJndW1lbnQgXCJ0aW1lWm9uZVwiLlxuICAgIHZhciB0eiA9IG9wdGlvbnMudGltZVpvbmU7XG5cbiAgICAvLyAxNi4gSWYgdHogaXMgbm90IHVuZGVmaW5lZCwgdGhlblxuICAgIGlmICh0eiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGEuIExldCB0eiBiZSBUb1N0cmluZyh0eikuXG4gICAgICAgIC8vIGIuIENvbnZlcnQgdHogdG8gdXBwZXIgY2FzZSBhcyBkZXNjcmliZWQgaW4gNi4xLlxuICAgICAgICAvLyAgICBOT1RFOiBJZiBhbiBpbXBsZW1lbnRhdGlvbiBhY2NlcHRzIGFkZGl0aW9uYWwgdGltZSB6b25lIHZhbHVlcywgYXMgcGVybWl0dGVkXG4gICAgICAgIC8vICAgICAgICAgIHVuZGVyIGNlcnRhaW4gY29uZGl0aW9ucyBieSB0aGUgQ29uZm9ybWFuY2UgY2xhdXNlLCBkaWZmZXJlbnQgY2FzaW5nXG4gICAgICAgIC8vICAgICAgICAgIHJ1bGVzIGFwcGx5LlxuICAgICAgICB0eiA9IHRvTGF0aW5VcHBlckNhc2UodHopO1xuXG4gICAgICAgIC8vIGMuIElmIHR6IGlzIG5vdCBcIlVUQ1wiLCB0aGVuIHRocm93IGEgUmFuZ2VFcnJvciBleGNlcHRpb24uXG4gICAgICAgIC8vICMjI1RPRE86IGFjY2VwdCBtb3JlIHRpbWUgem9uZXMjIyNcbiAgICAgICAgaWYgKHR6ICE9PSAnVVRDJykgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RpbWVab25lIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgfVxuXG4gICAgLy8gMTcuIFNldCB0aGUgW1t0aW1lWm9uZV1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0IHRvIHR6LlxuICAgIGludGVybmFsWydbW3RpbWVab25lXV0nXSA9IHR6O1xuXG4gICAgLy8gMTguIExldCBvcHQgYmUgYSBuZXcgUmVjb3JkLlxuICAgIG9wdCA9IG5ldyBSZWNvcmQoKTtcblxuICAgIC8vIDE5LiBGb3IgZWFjaCByb3cgb2YgVGFibGUgMywgZXhjZXB0IHRoZSBoZWFkZXIgcm93LCBkbzpcbiAgICBmb3IgKHZhciBwcm9wIGluIGRhdGVUaW1lQ29tcG9uZW50cykge1xuICAgICAgICBpZiAoIWhvcC5jYWxsKGRhdGVUaW1lQ29tcG9uZW50cywgcHJvcCkpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIDIwLiBMZXQgcHJvcCBiZSB0aGUgbmFtZSBnaXZlbiBpbiB0aGUgUHJvcGVydHkgY29sdW1uIG9mIHRoZSByb3cuXG4gICAgICAgIC8vIDIxLiBMZXQgdmFsdWUgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXRPcHRpb24gYWJzdHJhY3Qgb3BlcmF0aW9uLFxuICAgICAgICAvLyAgICAgcGFzc2luZyBhcyBhcmd1bWVudCBvcHRpb25zLCB0aGUgbmFtZSBnaXZlbiBpbiB0aGUgUHJvcGVydHkgY29sdW1uIG9mIHRoZVxuICAgICAgICAvLyAgICAgcm93LCBcInN0cmluZ1wiLCBhIExpc3QgY29udGFpbmluZyB0aGUgc3RyaW5ncyBnaXZlbiBpbiB0aGUgVmFsdWVzIGNvbHVtbiBvZlxuICAgICAgICAvLyAgICAgdGhlIHJvdywgYW5kIHVuZGVmaW5lZC5cbiAgICAgICAgdmFyIHZhbHVlID0gR2V0T3B0aW9uKG9wdGlvbnMsIHByb3AsICdzdHJpbmcnLCBkYXRlVGltZUNvbXBvbmVudHNbcHJvcF0pO1xuXG4gICAgICAgIC8vIDIyLiBTZXQgb3B0LltbPHByb3A+XV0gdG8gdmFsdWUuXG4gICAgICAgIG9wdFsnW1snICsgcHJvcCArICddXSddID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gQXNzaWduZWQgYSB2YWx1ZSBiZWxvd1xuICAgIHZhciBiZXN0Rm9ybWF0ID0gdm9pZCAwO1xuXG4gICAgLy8gMjMuIExldCBkYXRhTG9jYWxlRGF0YSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgLy8gICAgIGxvY2FsZURhdGEgd2l0aCBhcmd1bWVudCBkYXRhTG9jYWxlLlxuICAgIHZhciBkYXRhTG9jYWxlRGF0YSA9IGxvY2FsZURhdGFbZGF0YUxvY2FsZV07XG5cbiAgICAvLyAyNC4gTGV0IGZvcm1hdHMgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgIC8vICAgICBkYXRhTG9jYWxlRGF0YSB3aXRoIGFyZ3VtZW50IFwiZm9ybWF0c1wiLlxuICAgIC8vICAgICBOb3RlOiB3ZSBwcm9jZXNzIHRoZSBDTERSIGZvcm1hdHMgaW50byB0aGUgc3BlYydkIHN0cnVjdHVyZVxuICAgIHZhciBmb3JtYXRzID0gVG9EYXRlVGltZUZvcm1hdHMoZGF0YUxvY2FsZURhdGEuZm9ybWF0cyk7XG5cbiAgICAvLyAyNS4gTGV0IG1hdGNoZXIgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXRPcHRpb24gYWJzdHJhY3Qgb3BlcmF0aW9uIHdpdGhcbiAgICAvLyAgICAgYXJndW1lbnRzIG9wdGlvbnMsIFwiZm9ybWF0TWF0Y2hlclwiLCBcInN0cmluZ1wiLCBhIExpc3QgY29udGFpbmluZyB0aGUgdHdvIFN0cmluZ1xuICAgIC8vICAgICB2YWx1ZXMgXCJiYXNpY1wiIGFuZCBcImJlc3QgZml0XCIsIGFuZCBcImJlc3QgZml0XCIuXG4gICAgbWF0Y2hlciA9IEdldE9wdGlvbihvcHRpb25zLCAnZm9ybWF0TWF0Y2hlcicsICdzdHJpbmcnLCBuZXcgTGlzdCgnYmFzaWMnLCAnYmVzdCBmaXQnKSwgJ2Jlc3QgZml0Jyk7XG5cbiAgICAvLyBPcHRpbWl6YXRpb246IGNhY2hpbmcgdGhlIHByb2Nlc3NlZCBmb3JtYXRzIGFzIGEgb25lIHRpbWUgb3BlcmF0aW9uIGJ5XG4gICAgLy8gcmVwbGFjaW5nIHRoZSBpbml0aWFsIHN0cnVjdHVyZSBmcm9tIGxvY2FsZURhdGFcbiAgICBkYXRhTG9jYWxlRGF0YS5mb3JtYXRzID0gZm9ybWF0cztcblxuICAgIC8vIDI2LiBJZiBtYXRjaGVyIGlzIFwiYmFzaWNcIiwgdGhlblxuICAgIGlmIChtYXRjaGVyID09PSAnYmFzaWMnKSB7XG4gICAgICAgIC8vIDI3LiBMZXQgYmVzdEZvcm1hdCBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEJhc2ljRm9ybWF0TWF0Y2hlciBhYnN0cmFjdFxuICAgICAgICAvLyAgICAgb3BlcmF0aW9uIChkZWZpbmVkIGJlbG93KSB3aXRoIG9wdCBhbmQgZm9ybWF0cy5cbiAgICAgICAgYmVzdEZvcm1hdCA9IEJhc2ljRm9ybWF0TWF0Y2hlcihvcHQsIGZvcm1hdHMpO1xuXG4gICAgICAgIC8vIDI4LiBFbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gZGl2ZXJnaW5nXG4gICAgICAgICAgICB2YXIgX2hyID0gR2V0T3B0aW9uKG9wdGlvbnMsICdob3VyMTInLCAnYm9vbGVhbicgLyosIHVuZGVmaW5lZCwgdW5kZWZpbmVkKi8pO1xuICAgICAgICAgICAgb3B0LmhvdXIxMiA9IF9ociA9PT0gdW5kZWZpbmVkID8gZGF0YUxvY2FsZURhdGEuaG91cjEyIDogX2hyO1xuICAgICAgICB9XG4gICAgICAgIC8vIDI5LiBMZXQgYmVzdEZvcm1hdCBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEJlc3RGaXRGb3JtYXRNYXRjaGVyXG4gICAgICAgIC8vICAgICBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWQgYmVsb3cpIHdpdGggb3B0IGFuZCBmb3JtYXRzLlxuICAgICAgICBiZXN0Rm9ybWF0ID0gQmVzdEZpdEZvcm1hdE1hdGNoZXIob3B0LCBmb3JtYXRzKTtcbiAgICB9XG5cbiAgICAvLyAzMC4gRm9yIGVhY2ggcm93IGluIFRhYmxlIDMsIGV4Y2VwdCB0aGUgaGVhZGVyIHJvdywgZG9cbiAgICBmb3IgKHZhciBfcHJvcCBpbiBkYXRlVGltZUNvbXBvbmVudHMpIHtcbiAgICAgICAgaWYgKCFob3AuY2FsbChkYXRlVGltZUNvbXBvbmVudHMsIF9wcm9wKSkgY29udGludWU7XG5cbiAgICAgICAgLy8gYS4gTGV0IHByb3AgYmUgdGhlIG5hbWUgZ2l2ZW4gaW4gdGhlIFByb3BlcnR5IGNvbHVtbiBvZiB0aGUgcm93LlxuICAgICAgICAvLyBiLiBMZXQgcERlc2MgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldE93blByb3BlcnR5XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgIC8vICAgIGJlc3RGb3JtYXQgd2l0aCBhcmd1bWVudCBwcm9wLlxuICAgICAgICAvLyBjLiBJZiBwRGVzYyBpcyBub3QgdW5kZWZpbmVkLCB0aGVuXG4gICAgICAgIGlmIChob3AuY2FsbChiZXN0Rm9ybWF0LCBfcHJvcCkpIHtcbiAgICAgICAgICAgIC8vIGkuIExldCBwIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2YgYmVzdEZvcm1hdFxuICAgICAgICAgICAgLy8gICAgd2l0aCBhcmd1bWVudCBwcm9wLlxuICAgICAgICAgICAgdmFyIHAgPSBiZXN0Rm9ybWF0W19wcm9wXTtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBkaXZlcmdpbmdcbiAgICAgICAgICAgICAgICBwID0gYmVzdEZvcm1hdC5fICYmIGhvcC5jYWxsKGJlc3RGb3JtYXQuXywgX3Byb3ApID8gYmVzdEZvcm1hdC5fW19wcm9wXSA6IHA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlpLiBTZXQgdGhlIFtbPHByb3A+XV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgZGF0ZVRpbWVGb3JtYXQgdG8gcC5cbiAgICAgICAgICAgIGludGVybmFsWydbWycgKyBfcHJvcCArICddXSddID0gcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwYXR0ZXJuID0gdm9pZCAwOyAvLyBBc3NpZ25lZCBhIHZhbHVlIGJlbG93XG5cbiAgICAvLyAzMS4gTGV0IGhyMTIgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBHZXRPcHRpb24gYWJzdHJhY3Qgb3BlcmF0aW9uIHdpdGhcbiAgICAvLyAgICAgYXJndW1lbnRzIG9wdGlvbnMsIFwiaG91cjEyXCIsIFwiYm9vbGVhblwiLCB1bmRlZmluZWQsIGFuZCB1bmRlZmluZWQuXG4gICAgdmFyIGhyMTIgPSBHZXRPcHRpb24ob3B0aW9ucywgJ2hvdXIxMicsICdib29sZWFuJyAvKiwgdW5kZWZpbmVkLCB1bmRlZmluZWQqLyk7XG5cbiAgICAvLyAzMi4gSWYgZGF0ZVRpbWVGb3JtYXQgaGFzIGFuIGludGVybmFsIHByb3BlcnR5IFtbaG91cl1dLCB0aGVuXG4gICAgaWYgKGludGVybmFsWydbW2hvdXJdXSddKSB7XG4gICAgICAgIC8vIGEuIElmIGhyMTIgaXMgdW5kZWZpbmVkLCB0aGVuIGxldCBocjEyIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXVxuICAgICAgICAvLyAgICBpbnRlcm5hbCBtZXRob2Qgb2YgZGF0YUxvY2FsZURhdGEgd2l0aCBhcmd1bWVudCBcImhvdXIxMlwiLlxuICAgICAgICBocjEyID0gaHIxMiA9PT0gdW5kZWZpbmVkID8gZGF0YUxvY2FsZURhdGEuaG91cjEyIDogaHIxMjtcblxuICAgICAgICAvLyBiLiBTZXQgdGhlIFtbaG91cjEyXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgZGF0ZVRpbWVGb3JtYXQgdG8gaHIxMi5cbiAgICAgICAgaW50ZXJuYWxbJ1tbaG91cjEyXV0nXSA9IGhyMTI7XG5cbiAgICAgICAgLy8gYy4gSWYgaHIxMiBpcyB0cnVlLCB0aGVuXG4gICAgICAgIGlmIChocjEyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBpLiBMZXQgaG91ck5vMCBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgICAgICAvLyAgICBkYXRhTG9jYWxlRGF0YSB3aXRoIGFyZ3VtZW50IFwiaG91ck5vMFwiLlxuICAgICAgICAgICAgdmFyIGhvdXJObzAgPSBkYXRhTG9jYWxlRGF0YS5ob3VyTm8wO1xuXG4gICAgICAgICAgICAvLyBpaS4gU2V0IHRoZSBbW2hvdXJObzBdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBkYXRlVGltZUZvcm1hdCB0byBob3VyTm8wLlxuICAgICAgICAgICAgaW50ZXJuYWxbJ1tbaG91ck5vMF1dJ10gPSBob3VyTm8wO1xuXG4gICAgICAgICAgICAvLyBpaWkuIExldCBwYXR0ZXJuIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAgICAgICAgIC8vICAgICAgYmVzdEZvcm1hdCB3aXRoIGFyZ3VtZW50IFwicGF0dGVybjEyXCIuXG4gICAgICAgICAgICBwYXR0ZXJuID0gYmVzdEZvcm1hdC5wYXR0ZXJuMTI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkLiBFbHNlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIC8vIGkuIExldCBwYXR0ZXJuIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAgICAgICAgIC8vICAgIGJlc3RGb3JtYXQgd2l0aCBhcmd1bWVudCBcInBhdHRlcm5cIi5cbiAgICAgICAgICAgIHBhdHRlcm4gPSBiZXN0Rm9ybWF0LnBhdHRlcm47XG4gICAgfVxuXG4gICAgLy8gMzMuIEVsc2VcbiAgICBlbHNlXG4gICAgICAgIC8vIGEuIExldCBwYXR0ZXJuIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAgICAgLy8gICAgYmVzdEZvcm1hdCB3aXRoIGFyZ3VtZW50IFwicGF0dGVyblwiLlxuICAgICAgICBwYXR0ZXJuID0gYmVzdEZvcm1hdC5wYXR0ZXJuO1xuXG4gICAgLy8gMzQuIFNldCB0aGUgW1twYXR0ZXJuXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgZGF0ZVRpbWVGb3JtYXQgdG8gcGF0dGVybi5cbiAgICBpbnRlcm5hbFsnW1twYXR0ZXJuXV0nXSA9IHBhdHRlcm47XG5cbiAgICAvLyAzNS4gU2V0IHRoZSBbW2JvdW5kRm9ybWF0XV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgZGF0ZVRpbWVGb3JtYXQgdG8gdW5kZWZpbmVkLlxuICAgIGludGVybmFsWydbW2JvdW5kRm9ybWF0XV0nXSA9IHVuZGVmaW5lZDtcblxuICAgIC8vIDM2LiBTZXQgdGhlIFtbaW5pdGlhbGl6ZWREYXRlVGltZUZvcm1hdF1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0IHRvXG4gICAgLy8gICAgIHRydWUuXG4gICAgaW50ZXJuYWxbJ1tbaW5pdGlhbGl6ZWREYXRlVGltZUZvcm1hdF1dJ10gPSB0cnVlO1xuXG4gICAgLy8gSW4gRVMzLCB3ZSBuZWVkIHRvIHByZS1iaW5kIHRoZSBmb3JtYXQoKSBmdW5jdGlvblxuICAgIGlmIChlczMpIGRhdGVUaW1lRm9ybWF0LmZvcm1hdCA9IEdldEZvcm1hdERhdGVUaW1lLmNhbGwoZGF0ZVRpbWVGb3JtYXQpO1xuXG4gICAgLy8gUmVzdG9yZSB0aGUgUmVnRXhwIHByb3BlcnRpZXNcbiAgICByZWdleHBSZXN0b3JlKCk7XG5cbiAgICAvLyBSZXR1cm4gdGhlIG5ld2x5IGluaXRpYWxpc2VkIG9iamVjdFxuICAgIHJldHVybiBkYXRlVGltZUZvcm1hdDtcbn1cblxuLyoqXG4gKiBTZXZlcmFsIERhdGVUaW1lRm9ybWF0IGFsZ29yaXRobXMgdXNlIHZhbHVlcyBmcm9tIHRoZSBmb2xsb3dpbmcgdGFibGUsIHdoaWNoIHByb3ZpZGVzXG4gKiBwcm9wZXJ0eSBuYW1lcyBhbmQgYWxsb3dhYmxlIHZhbHVlcyBmb3IgdGhlIGNvbXBvbmVudHMgb2YgZGF0ZSBhbmQgdGltZSBmb3JtYXRzOlxuICovXG52YXIgZGF0ZVRpbWVDb21wb25lbnRzID0ge1xuICAgIHdlZWtkYXk6IFtcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiXSxcbiAgICBlcmE6IFtcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiXSxcbiAgICB5ZWFyOiBbXCIyLWRpZ2l0XCIsIFwibnVtZXJpY1wiXSxcbiAgICBtb250aDogW1wiMi1kaWdpdFwiLCBcIm51bWVyaWNcIiwgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIl0sXG4gICAgZGF5OiBbXCIyLWRpZ2l0XCIsIFwibnVtZXJpY1wiXSxcbiAgICBob3VyOiBbXCIyLWRpZ2l0XCIsIFwibnVtZXJpY1wiXSxcbiAgICBtaW51dGU6IFtcIjItZGlnaXRcIiwgXCJudW1lcmljXCJdLFxuICAgIHNlY29uZDogW1wiMi1kaWdpdFwiLCBcIm51bWVyaWNcIl0sXG4gICAgdGltZVpvbmVOYW1lOiBbXCJzaG9ydFwiLCBcImxvbmdcIl1cbn07XG5cbi8qKlxuICogV2hlbiB0aGUgVG9EYXRlVGltZU9wdGlvbnMgYWJzdHJhY3Qgb3BlcmF0aW9uIGlzIGNhbGxlZCB3aXRoIGFyZ3VtZW50cyBvcHRpb25zLFxuICogcmVxdWlyZWQsIGFuZCBkZWZhdWx0cywgdGhlIGZvbGxvd2luZyBzdGVwcyBhcmUgdGFrZW46XG4gKi9cbmZ1bmN0aW9uIFRvRGF0ZVRpbWVGb3JtYXRzKGZvcm1hdHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGZvcm1hdHMpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRzO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlRGF0ZVRpbWVGb3JtYXRzKGZvcm1hdHMpO1xufVxuXG4vKipcbiAqIFdoZW4gdGhlIFRvRGF0ZVRpbWVPcHRpb25zIGFic3RyYWN0IG9wZXJhdGlvbiBpcyBjYWxsZWQgd2l0aCBhcmd1bWVudHMgb3B0aW9ucyxcbiAqIHJlcXVpcmVkLCBhbmQgZGVmYXVsdHMsIHRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG5mdW5jdGlvbiBUb0RhdGVUaW1lT3B0aW9ucyhvcHRpb25zLCByZXF1aXJlZCwgZGVmYXVsdHMpIHtcbiAgICAvLyAxLiBJZiBvcHRpb25zIGlzIHVuZGVmaW5lZCwgdGhlbiBsZXQgb3B0aW9ucyBiZSBudWxsLCBlbHNlIGxldCBvcHRpb25zIGJlXG4gICAgLy8gICAgVG9PYmplY3Qob3B0aW9ucykuXG4gICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkgb3B0aW9ucyA9IG51bGw7ZWxzZSB7XG4gICAgICAgIC8vICgjMTIpIG9wdGlvbnMgbmVlZHMgdG8gYmUgYSBSZWNvcmQsIGJ1dCBpdCBhbHNvIG5lZWRzIHRvIGluaGVyaXQgcHJvcGVydGllc1xuICAgICAgICB2YXIgb3B0MiA9IHRvT2JqZWN0KG9wdGlvbnMpO1xuICAgICAgICBvcHRpb25zID0gbmV3IFJlY29yZCgpO1xuXG4gICAgICAgIGZvciAodmFyIGsgaW4gb3B0Mikge1xuICAgICAgICAgICAgb3B0aW9uc1trXSA9IG9wdDJba107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyLiBMZXQgY3JlYXRlIGJlIHRoZSBzdGFuZGFyZCBidWlsdC1pbiBmdW5jdGlvbiBvYmplY3QgZGVmaW5lZCBpbiBFUzUsIDE1LjIuMy41LlxuICAgIHZhciBjcmVhdGUgPSBvYmpDcmVhdGU7XG5cbiAgICAvLyAzLiBMZXQgb3B0aW9ucyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ2FsbF1dIGludGVybmFsIG1ldGhvZCBvZiBjcmVhdGUgd2l0aFxuICAgIC8vICAgIHVuZGVmaW5lZCBhcyB0aGUgdGhpcyB2YWx1ZSBhbmQgYW4gYXJndW1lbnQgbGlzdCBjb250YWluaW5nIHRoZSBzaW5nbGUgaXRlbVxuICAgIC8vICAgIG9wdGlvbnMuXG4gICAgb3B0aW9ucyA9IGNyZWF0ZShvcHRpb25zKTtcblxuICAgIC8vIDQuIExldCBuZWVkRGVmYXVsdHMgYmUgdHJ1ZS5cbiAgICB2YXIgbmVlZERlZmF1bHRzID0gdHJ1ZTtcblxuICAgIC8vIDUuIElmIHJlcXVpcmVkIGlzIFwiZGF0ZVwiIG9yIFwiYW55XCIsIHRoZW5cbiAgICBpZiAocmVxdWlyZWQgPT09ICdkYXRlJyB8fCByZXF1aXJlZCA9PT0gJ2FueScpIHtcbiAgICAgICAgLy8gYS4gRm9yIGVhY2ggb2YgdGhlIHByb3BlcnR5IG5hbWVzIFwid2Vla2RheVwiLCBcInllYXJcIiwgXCJtb250aFwiLCBcImRheVwiOlxuICAgICAgICAvLyBpLiBJZiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIG9wdGlvbnMgd2l0aCB0aGVcbiAgICAgICAgLy8gICAgcHJvcGVydHkgbmFtZSBpcyBub3QgdW5kZWZpbmVkLCB0aGVuIGxldCBuZWVkRGVmYXVsdHMgYmUgZmFsc2UuXG4gICAgICAgIGlmIChvcHRpb25zLndlZWtkYXkgIT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnllYXIgIT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLm1vbnRoICE9PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5kYXkgIT09IHVuZGVmaW5lZCkgbmVlZERlZmF1bHRzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gNi4gSWYgcmVxdWlyZWQgaXMgXCJ0aW1lXCIgb3IgXCJhbnlcIiwgdGhlblxuICAgIGlmIChyZXF1aXJlZCA9PT0gJ3RpbWUnIHx8IHJlcXVpcmVkID09PSAnYW55Jykge1xuICAgICAgICAvLyBhLiBGb3IgZWFjaCBvZiB0aGUgcHJvcGVydHkgbmFtZXMgXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCI6XG4gICAgICAgIC8vIGkuIElmIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2Ygb3B0aW9ucyB3aXRoIHRoZVxuICAgICAgICAvLyAgICBwcm9wZXJ0eSBuYW1lIGlzIG5vdCB1bmRlZmluZWQsIHRoZW4gbGV0IG5lZWREZWZhdWx0cyBiZSBmYWxzZS5cbiAgICAgICAgaWYgKG9wdGlvbnMuaG91ciAhPT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMubWludXRlICE9PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5zZWNvbmQgIT09IHVuZGVmaW5lZCkgbmVlZERlZmF1bHRzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gNy4gSWYgbmVlZERlZmF1bHRzIGlzIHRydWUgYW5kIGRlZmF1bHRzIGlzIGVpdGhlciBcImRhdGVcIiBvciBcImFsbFwiLCB0aGVuXG4gICAgaWYgKG5lZWREZWZhdWx0cyAmJiAoZGVmYXVsdHMgPT09ICdkYXRlJyB8fCBkZWZhdWx0cyA9PT0gJ2FsbCcpKVxuICAgICAgICAvLyBhLiBGb3IgZWFjaCBvZiB0aGUgcHJvcGVydHkgbmFtZXMgXCJ5ZWFyXCIsIFwibW9udGhcIiwgXCJkYXlcIjpcbiAgICAgICAgLy8gaS4gQ2FsbCB0aGUgW1tEZWZpbmVPd25Qcm9wZXJ0eV1dIGludGVybmFsIG1ldGhvZCBvZiBvcHRpb25zIHdpdGggdGhlXG4gICAgICAgIC8vICAgIHByb3BlcnR5IG5hbWUsIFByb3BlcnR5IERlc2NyaXB0b3Ige1tbVmFsdWVdXTogXCJudW1lcmljXCIsIFtbV3JpdGFibGVdXTpcbiAgICAgICAgLy8gICAgdHJ1ZSwgW1tFbnVtZXJhYmxlXV06IHRydWUsIFtbQ29uZmlndXJhYmxlXV06IHRydWV9LCBhbmQgZmFsc2UuXG4gICAgICAgIG9wdGlvbnMueWVhciA9IG9wdGlvbnMubW9udGggPSBvcHRpb25zLmRheSA9ICdudW1lcmljJztcblxuICAgIC8vIDguIElmIG5lZWREZWZhdWx0cyBpcyB0cnVlIGFuZCBkZWZhdWx0cyBpcyBlaXRoZXIgXCJ0aW1lXCIgb3IgXCJhbGxcIiwgdGhlblxuICAgIGlmIChuZWVkRGVmYXVsdHMgJiYgKGRlZmF1bHRzID09PSAndGltZScgfHwgZGVmYXVsdHMgPT09ICdhbGwnKSlcbiAgICAgICAgLy8gYS4gRm9yIGVhY2ggb2YgdGhlIHByb3BlcnR5IG5hbWVzIFwiaG91clwiLCBcIm1pbnV0ZVwiLCBcInNlY29uZFwiOlxuICAgICAgICAvLyBpLiBDYWxsIHRoZSBbW0RlZmluZU93blByb3BlcnR5XV0gaW50ZXJuYWwgbWV0aG9kIG9mIG9wdGlvbnMgd2l0aCB0aGVcbiAgICAgICAgLy8gICAgcHJvcGVydHkgbmFtZSwgUHJvcGVydHkgRGVzY3JpcHRvciB7W1tWYWx1ZV1dOiBcIm51bWVyaWNcIiwgW1tXcml0YWJsZV1dOlxuICAgICAgICAvLyAgICB0cnVlLCBbW0VudW1lcmFibGVdXTogdHJ1ZSwgW1tDb25maWd1cmFibGVdXTogdHJ1ZX0sIGFuZCBmYWxzZS5cbiAgICAgICAgb3B0aW9ucy5ob3VyID0gb3B0aW9ucy5taW51dGUgPSBvcHRpb25zLnNlY29uZCA9ICdudW1lcmljJztcblxuICAgIC8vIDkuIFJldHVybiBvcHRpb25zLlxuICAgIHJldHVybiBvcHRpb25zO1xufVxuXG4vKipcbiAqIFdoZW4gdGhlIEJhc2ljRm9ybWF0TWF0Y2hlciBhYnN0cmFjdCBvcGVyYXRpb24gaXMgY2FsbGVkIHdpdGggdHdvIGFyZ3VtZW50cyBvcHRpb25zIGFuZFxuICogZm9ybWF0cywgdGhlIGZvbGxvd2luZyBzdGVwcyBhcmUgdGFrZW46XG4gKi9cbmZ1bmN0aW9uIEJhc2ljRm9ybWF0TWF0Y2hlcihvcHRpb25zLCBmb3JtYXRzKSB7XG4gICAgLy8gMS4gTGV0IHJlbW92YWxQZW5hbHR5IGJlIDEyMC5cbiAgICB2YXIgcmVtb3ZhbFBlbmFsdHkgPSAxMjA7XG5cbiAgICAvLyAyLiBMZXQgYWRkaXRpb25QZW5hbHR5IGJlIDIwLlxuICAgIHZhciBhZGRpdGlvblBlbmFsdHkgPSAyMDtcblxuICAgIC8vIDMuIExldCBsb25nTGVzc1BlbmFsdHkgYmUgOC5cbiAgICB2YXIgbG9uZ0xlc3NQZW5hbHR5ID0gODtcblxuICAgIC8vIDQuIExldCBsb25nTW9yZVBlbmFsdHkgYmUgNi5cbiAgICB2YXIgbG9uZ01vcmVQZW5hbHR5ID0gNjtcblxuICAgIC8vIDUuIExldCBzaG9ydExlc3NQZW5hbHR5IGJlIDYuXG4gICAgdmFyIHNob3J0TGVzc1BlbmFsdHkgPSA2O1xuXG4gICAgLy8gNi4gTGV0IHNob3J0TW9yZVBlbmFsdHkgYmUgMy5cbiAgICB2YXIgc2hvcnRNb3JlUGVuYWx0eSA9IDM7XG5cbiAgICAvLyA3LiBMZXQgYmVzdFNjb3JlIGJlIC1JbmZpbml0eS5cbiAgICB2YXIgYmVzdFNjb3JlID0gLUluZmluaXR5O1xuXG4gICAgLy8gOC4gTGV0IGJlc3RGb3JtYXQgYmUgdW5kZWZpbmVkLlxuICAgIHZhciBiZXN0Rm9ybWF0ID0gdm9pZCAwO1xuXG4gICAgLy8gOS4gTGV0IGkgYmUgMC5cbiAgICB2YXIgaSA9IDA7XG5cbiAgICAvLyAxMC4gQXNzZXJ0OiBmb3JtYXRzIGlzIGFuIEFycmF5IG9iamVjdC5cblxuICAgIC8vIDExLiBMZXQgbGVuIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2YgZm9ybWF0cyB3aXRoIGFyZ3VtZW50IFwibGVuZ3RoXCIuXG4gICAgdmFyIGxlbiA9IGZvcm1hdHMubGVuZ3RoO1xuXG4gICAgLy8gMTIuIFJlcGVhdCB3aGlsZSBpIDwgbGVuOlxuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgIC8vIGEuIExldCBmb3JtYXQgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZiBmb3JtYXRzIHdpdGggYXJndW1lbnQgVG9TdHJpbmcoaSkuXG4gICAgICAgIHZhciBmb3JtYXQgPSBmb3JtYXRzW2ldO1xuXG4gICAgICAgIC8vIGIuIExldCBzY29yZSBiZSAwLlxuICAgICAgICB2YXIgc2NvcmUgPSAwO1xuXG4gICAgICAgIC8vIGMuIEZvciBlYWNoIHByb3BlcnR5IHNob3duIGluIFRhYmxlIDM6XG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIGRhdGVUaW1lQ29tcG9uZW50cykge1xuICAgICAgICAgICAgaWYgKCFob3AuY2FsbChkYXRlVGltZUNvbXBvbmVudHMsIHByb3BlcnR5KSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGkuIExldCBvcHRpb25zUHJvcCBiZSBvcHRpb25zLltbPHByb3BlcnR5Pl1dLlxuICAgICAgICAgICAgdmFyIG9wdGlvbnNQcm9wID0gb3B0aW9uc1snW1snICsgcHJvcGVydHkgKyAnXV0nXTtcblxuICAgICAgICAgICAgLy8gaWkuIExldCBmb3JtYXRQcm9wRGVzYyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0T3duUHJvcGVydHldXSBpbnRlcm5hbCBtZXRob2Qgb2YgZm9ybWF0XG4gICAgICAgICAgICAvLyAgICAgd2l0aCBhcmd1bWVudCBwcm9wZXJ0eS5cbiAgICAgICAgICAgIC8vIGlpaS4gSWYgZm9ybWF0UHJvcERlc2MgaXMgbm90IHVuZGVmaW5lZCwgdGhlblxuICAgICAgICAgICAgLy8gICAgIDEuIExldCBmb3JtYXRQcm9wIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2YgZm9ybWF0IHdpdGggYXJndW1lbnQgcHJvcGVydHkuXG4gICAgICAgICAgICB2YXIgZm9ybWF0UHJvcCA9IGhvcC5jYWxsKGZvcm1hdCwgcHJvcGVydHkpID8gZm9ybWF0W3Byb3BlcnR5XSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgLy8gaXYuIElmIG9wdGlvbnNQcm9wIGlzIHVuZGVmaW5lZCBhbmQgZm9ybWF0UHJvcCBpcyBub3QgdW5kZWZpbmVkLCB0aGVuIGRlY3JlYXNlIHNjb3JlIGJ5XG4gICAgICAgICAgICAvLyAgICAgYWRkaXRpb25QZW5hbHR5LlxuICAgICAgICAgICAgaWYgKG9wdGlvbnNQcm9wID09PSB1bmRlZmluZWQgJiYgZm9ybWF0UHJvcCAhPT0gdW5kZWZpbmVkKSBzY29yZSAtPSBhZGRpdGlvblBlbmFsdHk7XG5cbiAgICAgICAgICAgIC8vIHYuIEVsc2UgaWYgb3B0aW9uc1Byb3AgaXMgbm90IHVuZGVmaW5lZCBhbmQgZm9ybWF0UHJvcCBpcyB1bmRlZmluZWQsIHRoZW4gZGVjcmVhc2Ugc2NvcmUgYnlcbiAgICAgICAgICAgIC8vICAgIHJlbW92YWxQZW5hbHR5LlxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9uc1Byb3AgIT09IHVuZGVmaW5lZCAmJiBmb3JtYXRQcm9wID09PSB1bmRlZmluZWQpIHNjb3JlIC09IHJlbW92YWxQZW5hbHR5O1xuXG4gICAgICAgICAgICAgICAgLy8gdmkuIEVsc2VcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEuIExldCB2YWx1ZXMgYmUgdGhlIGFycmF5IFtcIjItZGlnaXRcIiwgXCJudW1lcmljXCIsIFwibmFycm93XCIsIFwic2hvcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIFwibG9uZ1wiXS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBbJzItZGlnaXQnLCAnbnVtZXJpYycsICduYXJyb3cnLCAnc2hvcnQnLCAnbG9uZyddO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAyLiBMZXQgb3B0aW9uc1Byb3BJbmRleCBiZSB0aGUgaW5kZXggb2Ygb3B0aW9uc1Byb3Agd2l0aGluIHZhbHVlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb25zUHJvcEluZGV4ID0gYXJySW5kZXhPZi5jYWxsKHZhbHVlcywgb3B0aW9uc1Byb3ApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAzLiBMZXQgZm9ybWF0UHJvcEluZGV4IGJlIHRoZSBpbmRleCBvZiBmb3JtYXRQcm9wIHdpdGhpbiB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybWF0UHJvcEluZGV4ID0gYXJySW5kZXhPZi5jYWxsKHZhbHVlcywgZm9ybWF0UHJvcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDQuIExldCBkZWx0YSBiZSBtYXgobWluKGZvcm1hdFByb3BJbmRleCAtIG9wdGlvbnNQcm9wSW5kZXgsIDIpLCAtMikuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSBNYXRoLm1heChNYXRoLm1pbihmb3JtYXRQcm9wSW5kZXggLSBvcHRpb25zUHJvcEluZGV4LCAyKSwgLTIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA1LiBJZiBkZWx0YSA9IDIsIGRlY3JlYXNlIHNjb3JlIGJ5IGxvbmdNb3JlUGVuYWx0eS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSA9PT0gMikgc2NvcmUgLT0gbG9uZ01vcmVQZW5hbHR5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA2LiBFbHNlIGlmIGRlbHRhID0gMSwgZGVjcmVhc2Ugc2NvcmUgYnkgc2hvcnRNb3JlUGVuYWx0eS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRlbHRhID09PSAxKSBzY29yZSAtPSBzaG9ydE1vcmVQZW5hbHR5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gNy4gRWxzZSBpZiBkZWx0YSA9IC0xLCBkZWNyZWFzZSBzY29yZSBieSBzaG9ydExlc3NQZW5hbHR5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRlbHRhID09PSAtMSkgc2NvcmUgLT0gc2hvcnRMZXNzUGVuYWx0eTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA4LiBFbHNlIGlmIGRlbHRhID0gLTIsIGRlY3JlYXNlIHNjb3JlIGJ5IGxvbmdMZXNzUGVuYWx0eS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGVsdGEgPT09IC0yKSBzY29yZSAtPSBsb25nTGVzc1BlbmFsdHk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGQuIElmIHNjb3JlID4gYmVzdFNjb3JlLCB0aGVuXG4gICAgICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkge1xuICAgICAgICAgICAgLy8gaS4gTGV0IGJlc3RTY29yZSBiZSBzY29yZS5cbiAgICAgICAgICAgIGJlc3RTY29yZSA9IHNjb3JlO1xuXG4gICAgICAgICAgICAvLyBpaS4gTGV0IGJlc3RGb3JtYXQgYmUgZm9ybWF0LlxuICAgICAgICAgICAgYmVzdEZvcm1hdCA9IGZvcm1hdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGUuIEluY3JlYXNlIGkgYnkgMS5cbiAgICAgICAgaSsrO1xuICAgIH1cblxuICAgIC8vIDEzLiBSZXR1cm4gYmVzdEZvcm1hdC5cbiAgICByZXR1cm4gYmVzdEZvcm1hdDtcbn1cblxuLyoqXG4gKiBXaGVuIHRoZSBCZXN0Rml0Rm9ybWF0TWF0Y2hlciBhYnN0cmFjdCBvcGVyYXRpb24gaXMgY2FsbGVkIHdpdGggdHdvIGFyZ3VtZW50cyBvcHRpb25zXG4gKiBhbmQgZm9ybWF0cywgaXQgcGVyZm9ybXMgaW1wbGVtZW50YXRpb24gZGVwZW5kZW50IHN0ZXBzLCB3aGljaCBzaG91bGQgcmV0dXJuIGEgc2V0IG9mXG4gKiBjb21wb25lbnQgcmVwcmVzZW50YXRpb25zIHRoYXQgYSB0eXBpY2FsIHVzZXIgb2YgdGhlIHNlbGVjdGVkIGxvY2FsZSB3b3VsZCBwZXJjZWl2ZSBhc1xuICogYXQgbGVhc3QgYXMgZ29vZCBhcyB0aGUgb25lIHJldHVybmVkIGJ5IEJhc2ljRm9ybWF0TWF0Y2hlci5cbiAqXG4gKiBUaGlzIHBvbHlmaWxsIGRlZmluZXMgdGhlIGFsZ29yaXRobSB0byBiZSB0aGUgc2FtZSBhcyBCYXNpY0Zvcm1hdE1hdGNoZXIsXG4gKiB3aXRoIHRoZSBhZGRpdGlvbiBvZiBib251cyBwb2ludHMgYXdhcmRlZCB3aGVyZSB0aGUgcmVxdWVzdGVkIGZvcm1hdCBpcyBvZlxuICogdGhlIHNhbWUgZGF0YSB0eXBlIGFzIHRoZSBwb3RlbnRpYWxseSBtYXRjaGluZyBmb3JtYXQuXG4gKlxuICogVGhpcyBhbGdvIHJlbGllcyBvbiB0aGUgY29uY2VwdCBvZiBjbG9zZXN0IGRpc3RhbmNlIG1hdGNoaW5nIGRlc2NyaWJlZCBoZXJlOlxuICogaHR0cDovL3VuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjTWF0Y2hpbmdfU2tlbGV0b25zXG4gKiBUeXBpY2FsbHkgYSDigJxiZXN0IG1hdGNo4oCdIGlzIGZvdW5kIHVzaW5nIGEgY2xvc2VzdCBkaXN0YW5jZSBtYXRjaCwgc3VjaCBhczpcbiAqXG4gKiBTeW1ib2xzIHJlcXVlc3RpbmcgYSBiZXN0IGNob2ljZSBmb3IgdGhlIGxvY2FsZSBhcmUgcmVwbGFjZWQuXG4gKiAgICAgIGog4oaSIG9uZSBvZiB7SCwgaywgaCwgS307IEMg4oaSIG9uZSBvZiB7YSwgYiwgQn1cbiAqIC0+IENvdmVyZWQgYnkgY2xkci5qcyBtYXRjaGluZyBwcm9jZXNzXG4gKlxuICogRm9yIGZpZWxkcyB3aXRoIHN5bWJvbHMgcmVwcmVzZW50aW5nIHRoZSBzYW1lIHR5cGUgKHllYXIsIG1vbnRoLCBkYXksIGV0Yyk6XG4gKiAgICAgTW9zdCBzeW1ib2xzIGhhdmUgYSBzbWFsbCBkaXN0YW5jZSBmcm9tIGVhY2ggb3RoZXIuXG4gKiAgICAgICAgIE0g4omFIEw7IEUg4omFIGM7IGEg4omFIGIg4omFIEI7IEgg4omFIGsg4omFIGgg4omFIEs7IC4uLlxuICogICAgIC0+IENvdmVyZWQgYnkgY2xkci5qcyBtYXRjaGluZyBwcm9jZXNzXG4gKlxuICogICAgIFdpZHRoIGRpZmZlcmVuY2VzIGFtb25nIGZpZWxkcywgb3RoZXIgdGhhbiB0aG9zZSBtYXJraW5nIHRleHQgdnMgbnVtZXJpYywgYXJlIGdpdmVuIHNtYWxsIGRpc3RhbmNlIGZyb20gZWFjaCBvdGhlci5cbiAqICAgICAgICAgTU1NIOKJhSBNTU1NXG4gKiAgICAgICAgIE1NIOKJhSBNXG4gKiAgICAgTnVtZXJpYyBhbmQgdGV4dCBmaWVsZHMgYXJlIGdpdmVuIGEgbGFyZ2VyIGRpc3RhbmNlIGZyb20gZWFjaCBvdGhlci5cbiAqICAgICAgICAgTU1NIOKJiCBNTVxuICogICAgIFN5bWJvbHMgcmVwcmVzZW50aW5nIHN1YnN0YW50aWFsIGRpZmZlcmVuY2VzICh3ZWVrIG9mIHllYXIgdnMgd2VlayBvZiBtb250aCkgYXJlIGdpdmVuIG11Y2ggbGFyZ2VyIGEgZGlzdGFuY2VzIGZyb20gZWFjaCBvdGhlci5cbiAqICAgICAgICAgZCDiiYsgRDsgLi4uXG4gKiAgICAgTWlzc2luZyBvciBleHRyYSBmaWVsZHMgY2F1c2UgYSBtYXRjaCB0byBmYWlsLiAoQnV0IHNlZSBNaXNzaW5nIFNrZWxldG9uIEZpZWxkcykuXG4gKlxuICpcbiAqIEZvciBleGFtcGxlLFxuICpcbiAqICAgICB7IG1vbnRoOiAnbnVtZXJpYycsIGRheTogJ251bWVyaWMnIH1cbiAqXG4gKiBzaG91bGQgbWF0Y2hcbiAqXG4gKiAgICAgeyBtb250aDogJzItZGlnaXQnLCBkYXk6ICcyLWRpZ2l0JyB9XG4gKlxuICogcmF0aGVyIHRoYW5cbiAqXG4gKiAgICAgeyBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycgfVxuICpcbiAqIFRoaXMgbWFrZXMgc2Vuc2UgYmVjYXVzZSBhIHVzZXIgcmVxdWVzdGluZyBhIGZvcm1hdHRlZCBkYXRlIHdpdGggbnVtZXJpYyBwYXJ0cyB3b3VsZFxuICogbm90IGV4cGVjdCB0byBzZWUgdGhlIHJldHVybmVkIGZvcm1hdCBjb250YWluaW5nIG5hcnJvdywgc2hvcnQgb3IgbG9uZyBwYXJ0IG5hbWVzXG4gKi9cbmZ1bmN0aW9uIEJlc3RGaXRGb3JtYXRNYXRjaGVyKG9wdGlvbnMsIGZvcm1hdHMpIHtcbiAgICAvKiogRGl2ZXJnaW5nOiB0aGlzIGJsb2NrIGltcGxlbWVudHMgdGhlIGhhY2sgZm9yIHNpbmdsZSBwcm9wZXJ0eSBjb25maWd1cmF0aW9uLCBlZy46XG4gICAgICpcbiAgICAgKiAgICAgIGBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4nLCB7ZGF5OiAnbnVtZXJpYyd9KWBcbiAgICAgKlxuICAgICAqIHNob3VsZCBwcm9kdWNlIGEgc2luZ2xlIGRpZ2l0IHdpdGggdGhlIGRheSBvZiB0aGUgbW9udGguIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2VcbiAgICAgKiBDTERSIGBhdmFpbGFibGVGb3JtYXRzYCBkYXRhIHN0cnVjdHVyZSBkb2Vzbid0IGNvdmVyIHRoZXNlIGNhc2VzLlxuICAgICAqL1xuICAgIHtcbiAgICAgICAgdmFyIG9wdGlvbnNQcm9wTmFtZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gZGF0ZVRpbWVDb21wb25lbnRzKSB7XG4gICAgICAgICAgICBpZiAoIWhvcC5jYWxsKGRhdGVUaW1lQ29tcG9uZW50cywgcHJvcGVydHkpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnNbJ1tbJyArIHByb3BlcnR5ICsgJ11dJ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnNQcm9wTmFtZXMucHVzaChwcm9wZXJ0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnNQcm9wTmFtZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB2YXIgX2Jlc3RGb3JtYXQgPSBnZW5lcmF0ZVN5bnRoZXRpY0Zvcm1hdChvcHRpb25zUHJvcE5hbWVzWzBdLCBvcHRpb25zWydbWycgKyBvcHRpb25zUHJvcE5hbWVzWzBdICsgJ11dJ10pO1xuICAgICAgICAgICAgaWYgKF9iZXN0Rm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9iZXN0Rm9ybWF0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gMS4gTGV0IHJlbW92YWxQZW5hbHR5IGJlIDEyMC5cbiAgICB2YXIgcmVtb3ZhbFBlbmFsdHkgPSAxMjA7XG5cbiAgICAvLyAyLiBMZXQgYWRkaXRpb25QZW5hbHR5IGJlIDIwLlxuICAgIHZhciBhZGRpdGlvblBlbmFsdHkgPSAyMDtcblxuICAgIC8vIDMuIExldCBsb25nTGVzc1BlbmFsdHkgYmUgOC5cbiAgICB2YXIgbG9uZ0xlc3NQZW5hbHR5ID0gODtcblxuICAgIC8vIDQuIExldCBsb25nTW9yZVBlbmFsdHkgYmUgNi5cbiAgICB2YXIgbG9uZ01vcmVQZW5hbHR5ID0gNjtcblxuICAgIC8vIDUuIExldCBzaG9ydExlc3NQZW5hbHR5IGJlIDYuXG4gICAgdmFyIHNob3J0TGVzc1BlbmFsdHkgPSA2O1xuXG4gICAgLy8gNi4gTGV0IHNob3J0TW9yZVBlbmFsdHkgYmUgMy5cbiAgICB2YXIgc2hvcnRNb3JlUGVuYWx0eSA9IDM7XG5cbiAgICB2YXIgcGF0dGVyblBlbmFsdHkgPSAyO1xuXG4gICAgdmFyIGhvdXIxMlBlbmFsdHkgPSAxO1xuXG4gICAgLy8gNy4gTGV0IGJlc3RTY29yZSBiZSAtSW5maW5pdHkuXG4gICAgdmFyIGJlc3RTY29yZSA9IC1JbmZpbml0eTtcblxuICAgIC8vIDguIExldCBiZXN0Rm9ybWF0IGJlIHVuZGVmaW5lZC5cbiAgICB2YXIgYmVzdEZvcm1hdCA9IHZvaWQgMDtcblxuICAgIC8vIDkuIExldCBpIGJlIDAuXG4gICAgdmFyIGkgPSAwO1xuXG4gICAgLy8gMTAuIEFzc2VydDogZm9ybWF0cyBpcyBhbiBBcnJheSBvYmplY3QuXG5cbiAgICAvLyAxMS4gTGV0IGxlbiBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIGZvcm1hdHMgd2l0aCBhcmd1bWVudCBcImxlbmd0aFwiLlxuICAgIHZhciBsZW4gPSBmb3JtYXRzLmxlbmd0aDtcblxuICAgIC8vIDEyLiBSZXBlYXQgd2hpbGUgaSA8IGxlbjpcbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgICAvLyBhLiBMZXQgZm9ybWF0IGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tHZXRdXSBpbnRlcm5hbCBtZXRob2Qgb2YgZm9ybWF0cyB3aXRoIGFyZ3VtZW50IFRvU3RyaW5nKGkpLlxuICAgICAgICB2YXIgZm9ybWF0ID0gZm9ybWF0c1tpXTtcblxuICAgICAgICAvLyBiLiBMZXQgc2NvcmUgYmUgMC5cbiAgICAgICAgdmFyIHNjb3JlID0gMDtcblxuICAgICAgICAvLyBjLiBGb3IgZWFjaCBwcm9wZXJ0eSBzaG93biBpbiBUYWJsZSAzOlxuICAgICAgICBmb3IgKHZhciBfcHJvcGVydHkgaW4gZGF0ZVRpbWVDb21wb25lbnRzKSB7XG4gICAgICAgICAgICBpZiAoIWhvcC5jYWxsKGRhdGVUaW1lQ29tcG9uZW50cywgX3Byb3BlcnR5KSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGkuIExldCBvcHRpb25zUHJvcCBiZSBvcHRpb25zLltbPHByb3BlcnR5Pl1dLlxuICAgICAgICAgICAgdmFyIG9wdGlvbnNQcm9wID0gb3B0aW9uc1snW1snICsgX3Byb3BlcnR5ICsgJ11dJ107XG5cbiAgICAgICAgICAgIC8vIGlpLiBMZXQgZm9ybWF0UHJvcERlc2MgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldE93blByb3BlcnR5XV0gaW50ZXJuYWwgbWV0aG9kIG9mIGZvcm1hdFxuICAgICAgICAgICAgLy8gICAgIHdpdGggYXJndW1lbnQgcHJvcGVydHkuXG4gICAgICAgICAgICAvLyBpaWkuIElmIGZvcm1hdFByb3BEZXNjIGlzIG5vdCB1bmRlZmluZWQsIHRoZW5cbiAgICAgICAgICAgIC8vICAgICAxLiBMZXQgZm9ybWF0UHJvcCBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbR2V0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIGZvcm1hdCB3aXRoIGFyZ3VtZW50IHByb3BlcnR5LlxuICAgICAgICAgICAgdmFyIGZvcm1hdFByb3AgPSBob3AuY2FsbChmb3JtYXQsIF9wcm9wZXJ0eSkgPyBmb3JtYXRbX3Byb3BlcnR5XSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgLy8gRGl2ZXJnaW5nOiB1c2luZyB0aGUgZGVmYXVsdCBwcm9wZXJ0aWVzIHByb2R1Y2VkIGJ5IHRoZSBwYXR0ZXJuL3NrZWxldG9uXG4gICAgICAgICAgICAvLyB0byBtYXRjaCBpdCB3aXRoIHVzZXIgb3B0aW9ucywgYW5kIGFwcGx5IGEgcGVuYWx0eVxuICAgICAgICAgICAgdmFyIHBhdHRlcm5Qcm9wID0gaG9wLmNhbGwoZm9ybWF0Ll8sIF9wcm9wZXJ0eSkgPyBmb3JtYXQuX1tfcHJvcGVydHldIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnNQcm9wICE9PSBwYXR0ZXJuUHJvcCkge1xuICAgICAgICAgICAgICAgIHNjb3JlIC09IHBhdHRlcm5QZW5hbHR5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpdi4gSWYgb3B0aW9uc1Byb3AgaXMgdW5kZWZpbmVkIGFuZCBmb3JtYXRQcm9wIGlzIG5vdCB1bmRlZmluZWQsIHRoZW4gZGVjcmVhc2Ugc2NvcmUgYnlcbiAgICAgICAgICAgIC8vICAgICBhZGRpdGlvblBlbmFsdHkuXG4gICAgICAgICAgICBpZiAob3B0aW9uc1Byb3AgPT09IHVuZGVmaW5lZCAmJiBmb3JtYXRQcm9wICE9PSB1bmRlZmluZWQpIHNjb3JlIC09IGFkZGl0aW9uUGVuYWx0eTtcblxuICAgICAgICAgICAgLy8gdi4gRWxzZSBpZiBvcHRpb25zUHJvcCBpcyBub3QgdW5kZWZpbmVkIGFuZCBmb3JtYXRQcm9wIGlzIHVuZGVmaW5lZCwgdGhlbiBkZWNyZWFzZSBzY29yZSBieVxuICAgICAgICAgICAgLy8gICAgcmVtb3ZhbFBlbmFsdHkuXG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zUHJvcCAhPT0gdW5kZWZpbmVkICYmIGZvcm1hdFByb3AgPT09IHVuZGVmaW5lZCkgc2NvcmUgLT0gcmVtb3ZhbFBlbmFsdHk7XG5cbiAgICAgICAgICAgICAgICAvLyB2aS4gRWxzZVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMS4gTGV0IHZhbHVlcyBiZSB0aGUgYXJyYXkgW1wiMi1kaWdpdFwiLCBcIm51bWVyaWNcIiwgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgXCJsb25nXCJdLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IFsnMi1kaWdpdCcsICdudW1lcmljJywgJ25hcnJvdycsICdzaG9ydCcsICdsb25nJ107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIuIExldCBvcHRpb25zUHJvcEluZGV4IGJlIHRoZSBpbmRleCBvZiBvcHRpb25zUHJvcCB3aXRoaW4gdmFsdWVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbnNQcm9wSW5kZXggPSBhcnJJbmRleE9mLmNhbGwodmFsdWVzLCBvcHRpb25zUHJvcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDMuIExldCBmb3JtYXRQcm9wSW5kZXggYmUgdGhlIGluZGV4IG9mIGZvcm1hdFByb3Agd2l0aGluIHZhbHVlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3JtYXRQcm9wSW5kZXggPSBhcnJJbmRleE9mLmNhbGwodmFsdWVzLCBmb3JtYXRQcm9wKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gNC4gTGV0IGRlbHRhIGJlIG1heChtaW4oZm9ybWF0UHJvcEluZGV4IC0gb3B0aW9uc1Byb3BJbmRleCwgMiksIC0yKS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IE1hdGgubWF4KE1hdGgubWluKGZvcm1hdFByb3BJbmRleCAtIG9wdGlvbnNQcm9wSW5kZXgsIDIpLCAtMik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXZlcmdpbmcgZnJvbSBzcGVjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB0aGUgYmVzdEZpdCBhcmd1bWVudCBpcyB0cnVlLCBzdWJ0cmFjdCBhZGRpdGlvbmFsIHBlbmFsdHkgd2hlcmUgZGF0YSB0eXBlcyBhcmUgbm90IHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1hdFByb3BJbmRleCA8PSAxICYmIG9wdGlvbnNQcm9wSW5kZXggPj0gMiB8fCBmb3JtYXRQcm9wSW5kZXggPj0gMiAmJiBvcHRpb25zUHJvcEluZGV4IDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gNS4gSWYgZGVsdGEgPSAyLCBkZWNyZWFzZSBzY29yZSBieSBsb25nTW9yZVBlbmFsdHkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSA+IDApIHNjb3JlIC09IGxvbmdNb3JlUGVuYWx0eTtlbHNlIGlmIChkZWx0YSA8IDApIHNjb3JlIC09IGxvbmdMZXNzUGVuYWx0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA1LiBJZiBkZWx0YSA9IDIsIGRlY3JlYXNlIHNjb3JlIGJ5IGxvbmdNb3JlUGVuYWx0eS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhID4gMSkgc2NvcmUgLT0gc2hvcnRNb3JlUGVuYWx0eTtlbHNlIGlmIChkZWx0YSA8IC0xKSBzY29yZSAtPSBzaG9ydExlc3NQZW5hbHR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAge1xuICAgICAgICAgICAgLy8gZGl2ZXJnaW5nIHRvIGFsc28gdGFrZSBpbnRvIGNvbnNpZGVyYXRpb24gZGlmZmVyZW5jZXMgYmV0d2VlbiAxMiBvciAyNCBob3Vyc1xuICAgICAgICAgICAgLy8gd2hpY2ggaXMgc3BlY2lhbCBmb3IgdGhlIGJlc3QgZml0IG9ubHkuXG4gICAgICAgICAgICBpZiAoZm9ybWF0Ll8uaG91cjEyICE9PSBvcHRpb25zLmhvdXIxMikge1xuICAgICAgICAgICAgICAgIHNjb3JlIC09IGhvdXIxMlBlbmFsdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkLiBJZiBzY29yZSA+IGJlc3RTY29yZSwgdGhlblxuICAgICAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgICAgIC8vIGkuIExldCBiZXN0U2NvcmUgYmUgc2NvcmUuXG4gICAgICAgICAgICBiZXN0U2NvcmUgPSBzY29yZTtcbiAgICAgICAgICAgIC8vIGlpLiBMZXQgYmVzdEZvcm1hdCBiZSBmb3JtYXQuXG4gICAgICAgICAgICBiZXN0Rm9ybWF0ID0gZm9ybWF0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZS4gSW5jcmVhc2UgaSBieSAxLlxuICAgICAgICBpKys7XG4gICAgfVxuXG4gICAgLy8gMTMuIFJldHVybiBiZXN0Rm9ybWF0LlxuICAgIHJldHVybiBiZXN0Rm9ybWF0O1xufVxuXG4vKiAxMi4yLjMgKi9pbnRlcm5hbHMuRGF0ZVRpbWVGb3JtYXQgPSB7XG4gICAgJ1tbYXZhaWxhYmxlTG9jYWxlc11dJzogW10sXG4gICAgJ1tbcmVsZXZhbnRFeHRlbnNpb25LZXlzXV0nOiBbJ2NhJywgJ251J10sXG4gICAgJ1tbbG9jYWxlRGF0YV1dJzoge31cbn07XG5cbi8qKlxuICogV2hlbiB0aGUgc3VwcG9ydGVkTG9jYWxlc09mIG1ldGhvZCBvZiBJbnRsLkRhdGVUaW1lRm9ybWF0IGlzIGNhbGxlZCwgdGhlXG4gKiBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG4vKiAxMi4yLjIgKi9cbmRlZmluZVByb3BlcnR5KEludGwuRGF0ZVRpbWVGb3JtYXQsICdzdXBwb3J0ZWRMb2NhbGVzT2YnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmbkJpbmQuY2FsbChmdW5jdGlvbiAobG9jYWxlcykge1xuICAgICAgICAvLyBCb3VuZCBmdW5jdGlvbnMgb25seSBoYXZlIHRoZSBgdGhpc2AgdmFsdWUgYWx0ZXJlZCBpZiBiZWluZyB1c2VkIGFzIGEgY29uc3RydWN0b3IsXG4gICAgICAgIC8vIHRoaXMgbGV0cyB1cyBpbWl0YXRlIGEgbmF0aXZlIGZ1bmN0aW9uIHRoYXQgaGFzIG5vIGNvbnN0cnVjdG9yXG4gICAgICAgIGlmICghaG9wLmNhbGwodGhpcywgJ1tbYXZhaWxhYmxlTG9jYWxlc11dJykpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3N1cHBvcnRlZExvY2FsZXNPZigpIGlzIG5vdCBhIGNvbnN0cnVjdG9yJyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGFuIG9iamVjdCB3aG9zZSBwcm9wcyBjYW4gYmUgdXNlZCB0byByZXN0b3JlIHRoZSB2YWx1ZXMgb2YgUmVnRXhwIHByb3BzXG4gICAgICAgIHZhciByZWdleHBSZXN0b3JlID0gY3JlYXRlUmVnRXhwUmVzdG9yZSgpLFxuXG5cbiAgICAgICAgLy8gMS4gSWYgb3B0aW9ucyBpcyBub3QgcHJvdmlkZWQsIHRoZW4gbGV0IG9wdGlvbnMgYmUgdW5kZWZpbmVkLlxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzWzFdLFxuXG5cbiAgICAgICAgLy8gMi4gTGV0IGF2YWlsYWJsZUxvY2FsZXMgYmUgdGhlIHZhbHVlIG9mIHRoZSBbW2F2YWlsYWJsZUxvY2FsZXNdXSBpbnRlcm5hbFxuICAgICAgICAvLyAgICBwcm9wZXJ0eSBvZiB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gb2JqZWN0IHRoYXQgaXMgdGhlIGluaXRpYWwgdmFsdWUgb2ZcbiAgICAgICAgLy8gICAgSW50bC5OdW1iZXJGb3JtYXQuXG5cbiAgICAgICAgYXZhaWxhYmxlTG9jYWxlcyA9IHRoaXNbJ1tbYXZhaWxhYmxlTG9jYWxlc11dJ10sXG5cblxuICAgICAgICAvLyAzLiBMZXQgcmVxdWVzdGVkTG9jYWxlcyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIENhbm9uaWNhbGl6ZUxvY2FsZUxpc3RcbiAgICAgICAgLy8gICAgYWJzdHJhY3Qgb3BlcmF0aW9uIChkZWZpbmVkIGluIDkuMi4xKSB3aXRoIGFyZ3VtZW50IGxvY2FsZXMuXG4gICAgICAgIHJlcXVlc3RlZExvY2FsZXMgPSBDYW5vbmljYWxpemVMb2NhbGVMaXN0KGxvY2FsZXMpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgdGhlIFJlZ0V4cCBwcm9wZXJ0aWVzXG4gICAgICAgIHJlZ2V4cFJlc3RvcmUoKTtcblxuICAgICAgICAvLyA0LiBSZXR1cm4gdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBTdXBwb3J0ZWRMb2NhbGVzIGFic3RyYWN0IG9wZXJhdGlvblxuICAgICAgICAvLyAgICAoZGVmaW5lZCBpbiA5LjIuOCkgd2l0aCBhcmd1bWVudHMgYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcyxcbiAgICAgICAgLy8gICAgYW5kIG9wdGlvbnMuXG4gICAgICAgIHJldHVybiBTdXBwb3J0ZWRMb2NhbGVzKGF2YWlsYWJsZUxvY2FsZXMsIHJlcXVlc3RlZExvY2FsZXMsIG9wdGlvbnMpO1xuICAgIH0sIGludGVybmFscy5OdW1iZXJGb3JtYXQpXG59KTtcblxuLyoqXG4gKiBUaGlzIG5hbWVkIGFjY2Vzc29yIHByb3BlcnR5IHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGZvcm1hdHMgYSBudW1iZXJcbiAqIGFjY29yZGluZyB0byB0aGUgZWZmZWN0aXZlIGxvY2FsZSBhbmQgdGhlIGZvcm1hdHRpbmcgb3B0aW9ucyBvZiB0aGlzXG4gKiBEYXRlVGltZUZvcm1hdCBvYmplY3QuXG4gKi9cbi8qIDEyLjMuMiAqL2RlZmluZVByb3BlcnR5KEludGwuRGF0ZVRpbWVGb3JtYXQucHJvdG90eXBlLCAnZm9ybWF0Jywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IEdldEZvcm1hdERhdGVUaW1lXG59KTtcblxuZnVuY3Rpb24gR2V0Rm9ybWF0RGF0ZVRpbWUoKSB7XG4gICAgdmFyIGludGVybmFsID0gdGhpcyAhPT0gbnVsbCAmJiBiYWJlbEhlbHBlcnMkMVtcInR5cGVvZlwiXSh0aGlzKSA9PT0gJ29iamVjdCcgJiYgZ2V0SW50ZXJuYWxQcm9wZXJ0aWVzKHRoaXMpO1xuXG4gICAgLy8gU2F0aXNmeSB0ZXN0IDEyLjNfYlxuICAgIGlmICghaW50ZXJuYWwgfHwgIWludGVybmFsWydbW2luaXRpYWxpemVkRGF0ZVRpbWVGb3JtYXRdXSddKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdgdGhpc2AgdmFsdWUgZm9yIGZvcm1hdCgpIGlzIG5vdCBhbiBpbml0aWFsaXplZCBJbnRsLkRhdGVUaW1lRm9ybWF0IG9iamVjdC4nKTtcblxuICAgIC8vIFRoZSB2YWx1ZSBvZiB0aGUgW1tHZXRdXSBhdHRyaWJ1dGUgaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSBmb2xsb3dpbmdcbiAgICAvLyBzdGVwczpcblxuICAgIC8vIDEuIElmIHRoZSBbW2JvdW5kRm9ybWF0XV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgdGhpcyBEYXRlVGltZUZvcm1hdCBvYmplY3RcbiAgICAvLyAgICBpcyB1bmRlZmluZWQsIHRoZW46XG4gICAgaWYgKGludGVybmFsWydbW2JvdW5kRm9ybWF0XV0nXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGEuIExldCBGIGJlIGEgRnVuY3Rpb24gb2JqZWN0LCB3aXRoIGludGVybmFsIHByb3BlcnRpZXMgc2V0IGFzXG4gICAgICAgIC8vICAgIHNwZWNpZmllZCBmb3IgYnVpbHQtaW4gZnVuY3Rpb25zIGluIEVTNSwgMTUsIG9yIHN1Y2Nlc3NvciwgYW5kIHRoZVxuICAgICAgICAvLyAgICBsZW5ndGggcHJvcGVydHkgc2V0IHRvIDAsIHRoYXQgdGFrZXMgdGhlIGFyZ3VtZW50IGRhdGUgYW5kXG4gICAgICAgIC8vICAgIHBlcmZvcm1zIHRoZSBmb2xsb3dpbmcgc3RlcHM6XG4gICAgICAgIHZhciBGID0gZnVuY3Rpb24gRigpIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICAgICAgICAvLyAgIGkuIElmIGRhdGUgaXMgbm90IHByb3ZpZGVkIG9yIGlzIHVuZGVmaW5lZCwgdGhlbiBsZXQgeCBiZSB0aGVcbiAgICAgICAgICAgIC8vICAgICAgcmVzdWx0IGFzIGlmIGJ5IHRoZSBleHByZXNzaW9uIERhdGUubm93KCkgd2hlcmUgRGF0ZS5ub3cgaXNcbiAgICAgICAgICAgIC8vICAgICAgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIGZ1bmN0aW9uIGRlZmluZWQgaW4gRVM1LCAxNS45LjQuNC5cbiAgICAgICAgICAgIC8vICBpaS4gRWxzZSBsZXQgeCBiZSBUb051bWJlcihkYXRlKS5cbiAgICAgICAgICAgIC8vIGlpaS4gUmV0dXJuIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgRm9ybWF0RGF0ZVRpbWUgYWJzdHJhY3RcbiAgICAgICAgICAgIC8vICAgICAgb3BlcmF0aW9uIChkZWZpbmVkIGJlbG93KSB3aXRoIGFyZ3VtZW50cyB0aGlzIGFuZCB4LlxuICAgICAgICAgICAgdmFyIHggPSBkYXRlID09PSB1bmRlZmluZWQgPyBEYXRlLm5vdygpIDogdG9OdW1iZXIoZGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gRm9ybWF0RGF0ZVRpbWUodGhpcywgeCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGIuIExldCBiaW5kIGJlIHRoZSBzdGFuZGFyZCBidWlsdC1pbiBmdW5jdGlvbiBvYmplY3QgZGVmaW5lZCBpbiBFUzUsXG4gICAgICAgIC8vICAgIDE1LjMuNC41LlxuICAgICAgICAvLyBjLiBMZXQgYmYgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0NhbGxdXSBpbnRlcm5hbCBtZXRob2Qgb2ZcbiAgICAgICAgLy8gICAgYmluZCB3aXRoIEYgYXMgdGhlIHRoaXMgdmFsdWUgYW5kIGFuIGFyZ3VtZW50IGxpc3QgY29udGFpbmluZ1xuICAgICAgICAvLyAgICB0aGUgc2luZ2xlIGl0ZW0gdGhpcy5cbiAgICAgICAgdmFyIGJmID0gZm5CaW5kLmNhbGwoRiwgdGhpcyk7XG4gICAgICAgIC8vIGQuIFNldCB0aGUgW1tib3VuZEZvcm1hdF1dIGludGVybmFsIHByb3BlcnR5IG9mIHRoaXMgTnVtYmVyRm9ybWF0XG4gICAgICAgIC8vICAgIG9iamVjdCB0byBiZi5cbiAgICAgICAgaW50ZXJuYWxbJ1tbYm91bmRGb3JtYXRdXSddID0gYmY7XG4gICAgfVxuICAgIC8vIFJldHVybiB0aGUgdmFsdWUgb2YgdGhlIFtbYm91bmRGb3JtYXRdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiB0aGlzXG4gICAgLy8gTnVtYmVyRm9ybWF0IG9iamVjdC5cbiAgICByZXR1cm4gaW50ZXJuYWxbJ1tbYm91bmRGb3JtYXRdXSddO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUb1BhcnRzJDEoKSB7XG4gICAgdmFyIGRhdGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF07XG5cbiAgICB2YXIgaW50ZXJuYWwgPSB0aGlzICE9PSBudWxsICYmIGJhYmVsSGVscGVycyQxW1widHlwZW9mXCJdKHRoaXMpID09PSAnb2JqZWN0JyAmJiBnZXRJbnRlcm5hbFByb3BlcnRpZXModGhpcyk7XG5cbiAgICBpZiAoIWludGVybmFsIHx8ICFpbnRlcm5hbFsnW1tpbml0aWFsaXplZERhdGVUaW1lRm9ybWF0XV0nXSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYHRoaXNgIHZhbHVlIGZvciBmb3JtYXRUb1BhcnRzKCkgaXMgbm90IGFuIGluaXRpYWxpemVkIEludGwuRGF0ZVRpbWVGb3JtYXQgb2JqZWN0LicpO1xuXG4gICAgdmFyIHggPSBkYXRlID09PSB1bmRlZmluZWQgPyBEYXRlLm5vdygpIDogdG9OdW1iZXIoZGF0ZSk7XG4gICAgcmV0dXJuIEZvcm1hdFRvUGFydHNEYXRlVGltZSh0aGlzLCB4KTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEludGwuRGF0ZVRpbWVGb3JtYXQucHJvdG90eXBlLCAnZm9ybWF0VG9QYXJ0cycsIHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZvcm1hdFRvUGFydHMkMVxufSk7XG5cbmZ1bmN0aW9uIENyZWF0ZURhdGVUaW1lUGFydHMoZGF0ZVRpbWVGb3JtYXQsIHgpIHtcbiAgICAvLyAxLiBJZiB4IGlzIG5vdCBhIGZpbml0ZSBOdW1iZXIsIHRoZW4gdGhyb3cgYSBSYW5nZUVycm9yIGV4Y2VwdGlvbi5cbiAgICBpZiAoIWlzRmluaXRlKHgpKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB2YWxpZCBkYXRlIHBhc3NlZCB0byBmb3JtYXQnKTtcblxuICAgIHZhciBpbnRlcm5hbCA9IGRhdGVUaW1lRm9ybWF0Ll9fZ2V0SW50ZXJuYWxQcm9wZXJ0aWVzKHNlY3JldCk7XG5cbiAgICAvLyBDcmVhdGluZyByZXN0b3JlIHBvaW50IGZvciBwcm9wZXJ0aWVzIG9uIHRoZSBSZWdFeHAgb2JqZWN0Li4uIHBsZWFzZSB3YWl0XG4gICAgLyogbGV0IHJlZ2V4cFJlc3RvcmUgPSAqL2NyZWF0ZVJlZ0V4cFJlc3RvcmUoKTsgLy8gIyMjVE9ETzogcmV2aWV3IHRoaXNcblxuICAgIC8vIDIuIExldCBsb2NhbGUgYmUgdGhlIHZhbHVlIG9mIHRoZSBbW2xvY2FsZV1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0LlxuICAgIHZhciBsb2NhbGUgPSBpbnRlcm5hbFsnW1tsb2NhbGVdXSddO1xuXG4gICAgLy8gMy4gTGV0IG5mIGJlIHRoZSByZXN1bHQgb2YgY3JlYXRpbmcgYSBuZXcgTnVtYmVyRm9ybWF0IG9iamVjdCBhcyBpZiBieSB0aGVcbiAgICAvLyBleHByZXNzaW9uIG5ldyBJbnRsLk51bWJlckZvcm1hdChbbG9jYWxlXSwge3VzZUdyb3VwaW5nOiBmYWxzZX0pIHdoZXJlXG4gICAgLy8gSW50bC5OdW1iZXJGb3JtYXQgaXMgdGhlIHN0YW5kYXJkIGJ1aWx0LWluIGNvbnN0cnVjdG9yIGRlZmluZWQgaW4gMTEuMS4zLlxuICAgIHZhciBuZiA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChbbG9jYWxlXSwgeyB1c2VHcm91cGluZzogZmFsc2UgfSk7XG5cbiAgICAvLyA0LiBMZXQgbmYyIGJlIHRoZSByZXN1bHQgb2YgY3JlYXRpbmcgYSBuZXcgTnVtYmVyRm9ybWF0IG9iamVjdCBhcyBpZiBieSB0aGVcbiAgICAvLyBleHByZXNzaW9uIG5ldyBJbnRsLk51bWJlckZvcm1hdChbbG9jYWxlXSwge21pbmltdW1JbnRlZ2VyRGlnaXRzOiAyLCB1c2VHcm91cGluZzpcbiAgICAvLyBmYWxzZX0pIHdoZXJlIEludGwuTnVtYmVyRm9ybWF0IGlzIHRoZSBzdGFuZGFyZCBidWlsdC1pbiBjb25zdHJ1Y3RvciBkZWZpbmVkIGluXG4gICAgLy8gMTEuMS4zLlxuICAgIHZhciBuZjIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoW2xvY2FsZV0sIHsgbWluaW11bUludGVnZXJEaWdpdHM6IDIsIHVzZUdyb3VwaW5nOiBmYWxzZSB9KTtcblxuICAgIC8vIDUuIExldCB0bSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFRvTG9jYWxUaW1lIGFic3RyYWN0IG9wZXJhdGlvbiAoZGVmaW5lZFxuICAgIC8vIGJlbG93KSB3aXRoIHgsIHRoZSB2YWx1ZSBvZiB0aGUgW1tjYWxlbmRhcl1dIGludGVybmFsIHByb3BlcnR5IG9mIGRhdGVUaW1lRm9ybWF0LFxuICAgIC8vIGFuZCB0aGUgdmFsdWUgb2YgdGhlIFtbdGltZVpvbmVdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBkYXRlVGltZUZvcm1hdC5cbiAgICB2YXIgdG0gPSBUb0xvY2FsVGltZSh4LCBpbnRlcm5hbFsnW1tjYWxlbmRhcl1dJ10sIGludGVybmFsWydbW3RpbWVab25lXV0nXSk7XG5cbiAgICAvLyA2LiBMZXQgcmVzdWx0IGJlIHRoZSB2YWx1ZSBvZiB0aGUgW1twYXR0ZXJuXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgZGF0ZVRpbWVGb3JtYXQuXG4gICAgdmFyIHBhdHRlcm4gPSBpbnRlcm5hbFsnW1twYXR0ZXJuXV0nXTtcblxuICAgIC8vIDcuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBMaXN0KCk7XG5cbiAgICAvLyA4LlxuICAgIHZhciBpbmRleCA9IDA7XG5cbiAgICAvLyA5LlxuICAgIHZhciBiZWdpbkluZGV4ID0gcGF0dGVybi5pbmRleE9mKCd7Jyk7XG5cbiAgICAvLyAxMC5cbiAgICB2YXIgZW5kSW5kZXggPSAwO1xuXG4gICAgLy8gTmVlZCB0aGUgbG9jYWxlIG1pbnVzIGFueSBleHRlbnNpb25zXG4gICAgdmFyIGRhdGFMb2NhbGUgPSBpbnRlcm5hbFsnW1tkYXRhTG9jYWxlXV0nXTtcblxuICAgIC8vIE5lZWQgdGhlIGNhbGVuZGFyIGRhdGEgZnJvbSBDTERSXG4gICAgdmFyIGxvY2FsZURhdGEgPSBpbnRlcm5hbHMuRGF0ZVRpbWVGb3JtYXRbJ1tbbG9jYWxlRGF0YV1dJ11bZGF0YUxvY2FsZV0uY2FsZW5kYXJzO1xuICAgIHZhciBjYSA9IGludGVybmFsWydbW2NhbGVuZGFyXV0nXTtcblxuICAgIC8vIDExLlxuICAgIHdoaWxlIChiZWdpbkluZGV4ICE9PSAtMSkge1xuICAgICAgICB2YXIgZnYgPSB2b2lkIDA7XG4gICAgICAgIC8vIGEuXG4gICAgICAgIGVuZEluZGV4ID0gcGF0dGVybi5pbmRleE9mKCd9JywgYmVnaW5JbmRleCk7XG4gICAgICAgIC8vIGIuXG4gICAgICAgIGlmIChlbmRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgcGF0dGVybicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGMuXG4gICAgICAgIGlmIChiZWdpbkluZGV4ID4gaW5kZXgpIHtcbiAgICAgICAgICAgIGFyclB1c2guY2FsbChyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbGl0ZXJhbCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhdHRlcm4uc3Vic3RyaW5nKGluZGV4LCBiZWdpbkluZGV4KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZC5cbiAgICAgICAgdmFyIHAgPSBwYXR0ZXJuLnN1YnN0cmluZyhiZWdpbkluZGV4ICsgMSwgZW5kSW5kZXgpO1xuICAgICAgICAvLyBlLlxuICAgICAgICBpZiAoZGF0ZVRpbWVDb21wb25lbnRzLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAvLyAgIGkuIExldCBmIGJlIHRoZSB2YWx1ZSBvZiB0aGUgW1s8cD5dXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBkYXRlVGltZUZvcm1hdC5cbiAgICAgICAgICAgIHZhciBmID0gaW50ZXJuYWxbJ1tbJyArIHAgKyAnXV0nXTtcbiAgICAgICAgICAgIC8vICBpaS4gTGV0IHYgYmUgdGhlIHZhbHVlIG9mIHRtLltbPHA+XV0uXG4gICAgICAgICAgICB2YXIgdiA9IHRtWydbWycgKyBwICsgJ11dJ107XG4gICAgICAgICAgICAvLyBpaWkuIElmIHAgaXMgXCJ5ZWFyXCIgYW5kIHYg4omkIDAsIHRoZW4gbGV0IHYgYmUgMSAtIHYuXG4gICAgICAgICAgICBpZiAocCA9PT0gJ3llYXInICYmIHYgPD0gMCkge1xuICAgICAgICAgICAgICAgIHYgPSAxIC0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICBpdi4gSWYgcCBpcyBcIm1vbnRoXCIsIHRoZW4gaW5jcmVhc2UgdiBieSAxLlxuICAgICAgICAgICAgZWxzZSBpZiAocCA9PT0gJ21vbnRoJykge1xuICAgICAgICAgICAgICAgICAgICB2Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgdi4gSWYgcCBpcyBcImhvdXJcIiBhbmQgdGhlIHZhbHVlIG9mIHRoZSBbW2hvdXIxMl1dIGludGVybmFsIHByb3BlcnR5IG9mXG4gICAgICAgICAgICAgICAgLy8gICAgICBkYXRlVGltZUZvcm1hdCBpcyB0cnVlLCB0aGVuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocCA9PT0gJ2hvdXInICYmIGludGVybmFsWydbW2hvdXIxMl1dJ10gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEuIExldCB2IGJlIHYgbW9kdWxvIDEyLlxuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHYgJSAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIuIElmIHYgaXMgMCBhbmQgdGhlIHZhbHVlIG9mIHRoZSBbW2hvdXJObzBdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgZGF0ZVRpbWVGb3JtYXQgaXMgdHJ1ZSwgdGhlbiBsZXQgdiBiZSAxMi5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ID09PSAwICYmIGludGVybmFsWydbW2hvdXJObzBdXSddID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9IDEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vICB2aS4gSWYgZiBpcyBcIm51bWVyaWNcIiwgdGhlblxuICAgICAgICAgICAgaWYgKGYgPT09ICdudW1lcmljJykge1xuICAgICAgICAgICAgICAgIC8vIDEuIExldCBmdiBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEZvcm1hdE51bWJlciBhYnN0cmFjdCBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICAvLyAgICAoZGVmaW5lZCBpbiAxMS4zLjIpIHdpdGggYXJndW1lbnRzIG5mIGFuZCB2LlxuICAgICAgICAgICAgICAgIGZ2ID0gRm9ybWF0TnVtYmVyKG5mLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZpaS4gRWxzZSBpZiBmIGlzIFwiMi1kaWdpdFwiLCB0aGVuXG4gICAgICAgICAgICBlbHNlIGlmIChmID09PSAnMi1kaWdpdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gMS4gTGV0IGZ2IGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgRm9ybWF0TnVtYmVyIGFic3RyYWN0IG9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyAgICB3aXRoIGFyZ3VtZW50cyBuZjIgYW5kIHYuXG4gICAgICAgICAgICAgICAgICAgIGZ2ID0gRm9ybWF0TnVtYmVyKG5mMiwgdik7XG4gICAgICAgICAgICAgICAgICAgIC8vIDIuIElmIHRoZSBsZW5ndGggb2YgZnYgaXMgZ3JlYXRlciB0aGFuIDIsIGxldCBmdiBiZSB0aGUgc3Vic3RyaW5nIG9mIGZ2XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIGNvbnRhaW5pbmcgdGhlIGxhc3QgdHdvIGNoYXJhY3RlcnMuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmdi5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdiA9IGZ2LnNsaWNlKC0yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB2aWlpLiBFbHNlIGlmIGYgaXMgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBvciBcImxvbmdcIiwgdGhlbiBsZXQgZnYgYmUgYSBTdHJpbmdcbiAgICAgICAgICAgICAgICAvLyAgICAgdmFsdWUgcmVwcmVzZW50aW5nIGYgaW4gdGhlIGRlc2lyZWQgZm9ybTsgdGhlIFN0cmluZyB2YWx1ZSBkZXBlbmRzIHVwb25cbiAgICAgICAgICAgICAgICAvLyAgICAgdGhlIGltcGxlbWVudGF0aW9uIGFuZCB0aGUgZWZmZWN0aXZlIGxvY2FsZSBhbmQgY2FsZW5kYXIgb2ZcbiAgICAgICAgICAgICAgICAvLyAgICAgZGF0ZVRpbWVGb3JtYXQuIElmIHAgaXMgXCJtb250aFwiLCB0aGVuIHRoZSBTdHJpbmcgdmFsdWUgbWF5IGFsc28gZGVwZW5kXG4gICAgICAgICAgICAgICAgLy8gICAgIG9uIHdoZXRoZXIgZGF0ZVRpbWVGb3JtYXQgaGFzIGEgW1tkYXldXSBpbnRlcm5hbCBwcm9wZXJ0eS4gSWYgcCBpc1xuICAgICAgICAgICAgICAgIC8vICAgICBcInRpbWVab25lTmFtZVwiLCB0aGVuIHRoZSBTdHJpbmcgdmFsdWUgbWF5IGFsc28gZGVwZW5kIG9uIHRoZSB2YWx1ZSBvZlxuICAgICAgICAgICAgICAgIC8vICAgICB0aGUgW1tpbkRTVF1dIGZpZWxkIG9mIHRtLlxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGYgaW4gZGF0ZVdpZHRocykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdiA9IHJlc29sdmVEYXRlU3RyaW5nKGxvY2FsZURhdGEsIGNhLCAnbW9udGhzJywgZiwgdG1bJ1tbJyArIHAgKyAnXV0nXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnd2Vla2RheSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdiA9IHJlc29sdmVEYXRlU3RyaW5nKGxvY2FsZURhdGEsIGNhLCAnZGF5cycsIGYsIHRtWydbWycgKyBwICsgJ11dJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnYgPSByZXNvbHZlRGF0ZVN0cmluZyhjYS5kYXlzLCBmKVt0bVsnW1snKyBwICsnXV0nXV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgd2Vla2RheSBkYXRhIGZvciBsb2NhbGUgJyArIGxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0aW1lWm9uZU5hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdiA9ICcnOyAvLyAjIyNUT0RPXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXJhJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ2ID0gcmVzb2x2ZURhdGVTdHJpbmcobG9jYWxlRGF0YSwgY2EsICdlcmFzJywgZiwgdG1bJ1tbJyArIHAgKyAnXV0nXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgZXJhIGRhdGEgZm9yIGxvY2FsZSAnICsgbG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ2ID0gdG1bJ1tbJyArIHAgKyAnXV0nXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaXhcbiAgICAgICAgICAgIGFyclB1c2guY2FsbChyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBwLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBmLlxuICAgICAgICB9IGVsc2UgaWYgKHAgPT09ICdhbXBtJykge1xuICAgICAgICAgICAgLy8gaS5cbiAgICAgICAgICAgIHZhciBfdiA9IHRtWydbW2hvdXJdXSddO1xuICAgICAgICAgICAgLy8gaWkuL2lpaS5cbiAgICAgICAgICAgIGZ2ID0gcmVzb2x2ZURhdGVTdHJpbmcobG9jYWxlRGF0YSwgY2EsICdkYXlQZXJpb2RzJywgX3YgPiAxMSA/ICdwbScgOiAnYW0nLCBudWxsKTtcbiAgICAgICAgICAgIC8vIGl2LlxuICAgICAgICAgICAgYXJyUHVzaC5jYWxsKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdkYXlQZXJpb2QnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBnLlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyUHVzaC5jYWxsKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdsaXRlcmFsJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcGF0dGVybi5zdWJzdHJpbmcoYmVnaW5JbmRleCwgZW5kSW5kZXggKyAxKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaC5cbiAgICAgICAgaW5kZXggPSBlbmRJbmRleCArIDE7XG4gICAgICAgIC8vIGkuXG4gICAgICAgIGJlZ2luSW5kZXggPSBwYXR0ZXJuLmluZGV4T2YoJ3snLCBpbmRleCk7XG4gICAgfVxuICAgIC8vIDEyLlxuICAgIGlmIChlbmRJbmRleCA8IHBhdHRlcm4ubGVuZ3RoIC0gMSkge1xuICAgICAgICBhcnJQdXNoLmNhbGwocmVzdWx0LCB7XG4gICAgICAgICAgICB0eXBlOiAnbGl0ZXJhbCcsXG4gICAgICAgICAgICB2YWx1ZTogcGF0dGVybi5zdWJzdHIoZW5kSW5kZXggKyAxKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gMTMuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBXaGVuIHRoZSBGb3JtYXREYXRlVGltZSBhYnN0cmFjdCBvcGVyYXRpb24gaXMgY2FsbGVkIHdpdGggYXJndW1lbnRzIGRhdGVUaW1lRm9ybWF0XG4gKiAod2hpY2ggbXVzdCBiZSBhbiBvYmplY3QgaW5pdGlhbGl6ZWQgYXMgYSBEYXRlVGltZUZvcm1hdCkgYW5kIHggKHdoaWNoIG11c3QgYmUgYSBOdW1iZXJcbiAqIHZhbHVlKSwgaXQgcmV0dXJucyBhIFN0cmluZyB2YWx1ZSByZXByZXNlbnRpbmcgeCAoaW50ZXJwcmV0ZWQgYXMgYSB0aW1lIHZhbHVlIGFzXG4gKiBzcGVjaWZpZWQgaW4gRVM1LCAxNS45LjEuMSkgYWNjb3JkaW5nIHRvIHRoZSBlZmZlY3RpdmUgbG9jYWxlIGFuZCB0aGUgZm9ybWF0dGluZ1xuICogb3B0aW9ucyBvZiBkYXRlVGltZUZvcm1hdC5cbiAqL1xuZnVuY3Rpb24gRm9ybWF0RGF0ZVRpbWUoZGF0ZVRpbWVGb3JtYXQsIHgpIHtcbiAgICB2YXIgcGFydHMgPSBDcmVhdGVEYXRlVGltZVBhcnRzKGRhdGVUaW1lRm9ybWF0LCB4KTtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgcGFydHMubGVuZ3RoID4gaTsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgIHJlc3VsdCArPSBwYXJ0LnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBGb3JtYXRUb1BhcnRzRGF0ZVRpbWUoZGF0ZVRpbWVGb3JtYXQsIHgpIHtcbiAgICB2YXIgcGFydHMgPSBDcmVhdGVEYXRlVGltZVBhcnRzKGRhdGVUaW1lRm9ybWF0LCB4KTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IHBhcnRzLmxlbmd0aCA+IGk7IGkrKykge1xuICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiBwYXJ0LnR5cGUsXG4gICAgICAgICAgICB2YWx1ZTogcGFydC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBXaGVuIHRoZSBUb0xvY2FsVGltZSBhYnN0cmFjdCBvcGVyYXRpb24gaXMgY2FsbGVkIHdpdGggYXJndW1lbnRzIGRhdGUsIGNhbGVuZGFyLCBhbmRcbiAqIHRpbWVab25lLCB0aGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuZnVuY3Rpb24gVG9Mb2NhbFRpbWUoZGF0ZSwgY2FsZW5kYXIsIHRpbWVab25lKSB7XG4gICAgLy8gMS4gQXBwbHkgY2FsZW5kcmljYWwgY2FsY3VsYXRpb25zIG9uIGRhdGUgZm9yIHRoZSBnaXZlbiBjYWxlbmRhciBhbmQgdGltZSB6b25lIHRvXG4gICAgLy8gICAgcHJvZHVjZSB3ZWVrZGF5LCBlcmEsIHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBhbmQgaW5EU1QgdmFsdWVzLlxuICAgIC8vICAgIFRoZSBjYWxjdWxhdGlvbnMgc2hvdWxkIHVzZSBiZXN0IGF2YWlsYWJsZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc3BlY2lmaWVkXG4gICAgLy8gICAgY2FsZW5kYXIgYW5kIHRpbWUgem9uZS4gSWYgdGhlIGNhbGVuZGFyIGlzIFwiZ3JlZ29yeVwiLCB0aGVuIHRoZSBjYWxjdWxhdGlvbnMgbXVzdFxuICAgIC8vICAgIG1hdGNoIHRoZSBhbGdvcml0aG1zIHNwZWNpZmllZCBpbiBFUzUsIDE1LjkuMSwgZXhjZXB0IHRoYXQgY2FsY3VsYXRpb25zIGFyZSBub3RcbiAgICAvLyAgICBib3VuZCBieSB0aGUgcmVzdHJpY3Rpb25zIG9uIHRoZSB1c2Ugb2YgYmVzdCBhdmFpbGFibGUgaW5mb3JtYXRpb24gb24gdGltZSB6b25lc1xuICAgIC8vICAgIGZvciBsb2NhbCB0aW1lIHpvbmUgYWRqdXN0bWVudCBhbmQgZGF5bGlnaHQgc2F2aW5nIHRpbWUgYWRqdXN0bWVudCBpbXBvc2VkIGJ5XG4gICAgLy8gICAgRVM1LCAxNS45LjEuNyBhbmQgMTUuOS4xLjguXG4gICAgLy8gIyMjVE9ETyMjI1xuICAgIHZhciBkID0gbmV3IERhdGUoZGF0ZSksXG4gICAgICAgIG0gPSAnZ2V0JyArICh0aW1lWm9uZSB8fCAnJyk7XG5cbiAgICAvLyAyLiBSZXR1cm4gYSBSZWNvcmQgd2l0aCBmaWVsZHMgW1t3ZWVrZGF5XV0sIFtbZXJhXV0sIFtbeWVhcl1dLCBbW21vbnRoXV0sIFtbZGF5XV0sXG4gICAgLy8gICAgW1tob3VyXV0sIFtbbWludXRlXV0sIFtbc2Vjb25kXV0sIGFuZCBbW2luRFNUXV0sIGVhY2ggd2l0aCB0aGUgY29ycmVzcG9uZGluZ1xuICAgIC8vICAgIGNhbGN1bGF0ZWQgdmFsdWUuXG4gICAgcmV0dXJuIG5ldyBSZWNvcmQoe1xuICAgICAgICAnW1t3ZWVrZGF5XV0nOiBkW20gKyAnRGF5J10oKSxcbiAgICAgICAgJ1tbZXJhXV0nOiArKGRbbSArICdGdWxsWWVhciddKCkgPj0gMCksXG4gICAgICAgICdbW3llYXJdXSc6IGRbbSArICdGdWxsWWVhciddKCksXG4gICAgICAgICdbW21vbnRoXV0nOiBkW20gKyAnTW9udGgnXSgpLFxuICAgICAgICAnW1tkYXldXSc6IGRbbSArICdEYXRlJ10oKSxcbiAgICAgICAgJ1tbaG91cl1dJzogZFttICsgJ0hvdXJzJ10oKSxcbiAgICAgICAgJ1tbbWludXRlXV0nOiBkW20gKyAnTWludXRlcyddKCksXG4gICAgICAgICdbW3NlY29uZF1dJzogZFttICsgJ1NlY29uZHMnXSgpLFxuICAgICAgICAnW1tpbkRTVF1dJzogZmFsc2UgLy8gIyMjVE9ETyMjI1xuICAgIH0pO1xufVxuXG4vKipcbiAqIFRoZSBmdW5jdGlvbiByZXR1cm5zIGEgbmV3IG9iamVjdCB3aG9zZSBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzIGFyZSBzZXQgYXMgaWZcbiAqIGNvbnN0cnVjdGVkIGJ5IGFuIG9iamVjdCBsaXRlcmFsIGFzc2lnbmluZyB0byBlYWNoIG9mIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyB0aGVcbiAqIHZhbHVlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGludGVybmFsIHByb3BlcnR5IG9mIHRoaXMgRGF0ZVRpbWVGb3JtYXQgb2JqZWN0IChzZWUgMTIuNCk6XG4gKiBsb2NhbGUsIGNhbGVuZGFyLCBudW1iZXJpbmdTeXN0ZW0sIHRpbWVab25lLCBob3VyMTIsIHdlZWtkYXksIGVyYSwgeWVhciwgbW9udGgsIGRheSxcbiAqIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBhbmQgdGltZVpvbmVOYW1lLiBQcm9wZXJ0aWVzIHdob3NlIGNvcnJlc3BvbmRpbmcgaW50ZXJuYWxcbiAqIHByb3BlcnRpZXMgYXJlIG5vdCBwcmVzZW50IGFyZSBub3QgYXNzaWduZWQuXG4gKi9cbi8qIDEyLjMuMyAqL2RlZmluZVByb3BlcnR5KEludGwuRGF0ZVRpbWVGb3JtYXQucHJvdG90eXBlLCAncmVzb2x2ZWRPcHRpb25zJywge1xuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgIHZhciBwcm9wID0gdm9pZCAwLFxuICAgICAgICAgICAgZGVzY3MgPSBuZXcgUmVjb3JkKCksXG4gICAgICAgICAgICBwcm9wcyA9IFsnbG9jYWxlJywgJ2NhbGVuZGFyJywgJ251bWJlcmluZ1N5c3RlbScsICd0aW1lWm9uZScsICdob3VyMTInLCAnd2Vla2RheScsICdlcmEnLCAneWVhcicsICdtb250aCcsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgJ3RpbWVab25lTmFtZSddLFxuICAgICAgICAgICAgaW50ZXJuYWwgPSB0aGlzICE9PSBudWxsICYmIGJhYmVsSGVscGVycyQxW1widHlwZW9mXCJdKHRoaXMpID09PSAnb2JqZWN0JyAmJiBnZXRJbnRlcm5hbFByb3BlcnRpZXModGhpcyk7XG5cbiAgICAgICAgLy8gU2F0aXNmeSB0ZXN0IDEyLjNfYlxuICAgICAgICBpZiAoIWludGVybmFsIHx8ICFpbnRlcm5hbFsnW1tpbml0aWFsaXplZERhdGVUaW1lRm9ybWF0XV0nXSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYHRoaXNgIHZhbHVlIGZvciByZXNvbHZlZE9wdGlvbnMoKSBpcyBub3QgYW4gaW5pdGlhbGl6ZWQgSW50bC5EYXRlVGltZUZvcm1hdCBvYmplY3QuJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIG1heCA9IHByb3BzLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaG9wLmNhbGwoaW50ZXJuYWwsIHByb3AgPSAnW1snICsgcHJvcHNbaV0gKyAnXV0nKSkgZGVzY3NbcHJvcHNbaV1dID0geyB2YWx1ZTogaW50ZXJuYWxbcHJvcF0sIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIGVudW1lcmFibGU6IHRydWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmpDcmVhdGUoe30sIGRlc2NzKTtcbiAgICB9XG59KTtcblxudmFyIGxzID0gSW50bC5fX2xvY2FsZVNlbnNpdGl2ZVByb3RvcyA9IHtcbiAgICBOdW1iZXI6IHt9LFxuICAgIERhdGU6IHt9XG59O1xuXG4vKipcbiAqIFdoZW4gdGhlIHRvTG9jYWxlU3RyaW5nIG1ldGhvZCBpcyBjYWxsZWQgd2l0aCBvcHRpb25hbCBhcmd1bWVudHMgbG9jYWxlcyBhbmQgb3B0aW9ucyxcbiAqIHRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG4vKiAxMy4yLjEgKi9scy5OdW1iZXIudG9Mb2NhbGVTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gU2F0aXNmeSB0ZXN0IDEzLjIuMV8xXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGlzKSAhPT0gJ1tvYmplY3QgTnVtYmVyXScpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2B0aGlzYCB2YWx1ZSBtdXN0IGJlIGEgbnVtYmVyIGZvciBOdW1iZXIucHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nKCknKTtcblxuICAgIC8vIDEuIExldCB4IGJlIHRoaXMgTnVtYmVyIHZhbHVlIChhcyBkZWZpbmVkIGluIEVTNSwgMTUuNy40KS5cbiAgICAvLyAyLiBJZiBsb2NhbGVzIGlzIG5vdCBwcm92aWRlZCwgdGhlbiBsZXQgbG9jYWxlcyBiZSB1bmRlZmluZWQuXG4gICAgLy8gMy4gSWYgb3B0aW9ucyBpcyBub3QgcHJvdmlkZWQsIHRoZW4gbGV0IG9wdGlvbnMgYmUgdW5kZWZpbmVkLlxuICAgIC8vIDQuIExldCBudW1iZXJGb3JtYXQgYmUgdGhlIHJlc3VsdCBvZiBjcmVhdGluZyBhIG5ldyBvYmplY3QgYXMgaWYgYnkgdGhlXG4gICAgLy8gICAgZXhwcmVzc2lvbiBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jYWxlcywgb3B0aW9ucykgd2hlcmVcbiAgICAvLyAgICBJbnRsLk51bWJlckZvcm1hdCBpcyB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gY29uc3RydWN0b3IgZGVmaW5lZCBpbiAxMS4xLjMuXG4gICAgLy8gNS4gUmV0dXJuIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgRm9ybWF0TnVtYmVyIGFic3RyYWN0IG9wZXJhdGlvblxuICAgIC8vICAgIChkZWZpbmVkIGluIDExLjMuMikgd2l0aCBhcmd1bWVudHMgbnVtYmVyRm9ybWF0IGFuZCB4LlxuICAgIHJldHVybiBGb3JtYXROdW1iZXIobmV3IE51bWJlckZvcm1hdENvbnN0cnVjdG9yKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKSwgdGhpcyk7XG59O1xuXG4vKipcbiAqIFdoZW4gdGhlIHRvTG9jYWxlU3RyaW5nIG1ldGhvZCBpcyBjYWxsZWQgd2l0aCBvcHRpb25hbCBhcmd1bWVudHMgbG9jYWxlcyBhbmQgb3B0aW9ucyxcbiAqIHRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG4vKiAxMy4zLjEgKi9scy5EYXRlLnRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFNhdGlzZnkgdGVzdCAxMy4zLjBfMVxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcykgIT09ICdbb2JqZWN0IERhdGVdJykgdGhyb3cgbmV3IFR5cGVFcnJvcignYHRoaXNgIHZhbHVlIG11c3QgYmUgYSBEYXRlIGluc3RhbmNlIGZvciBEYXRlLnByb3RvdHlwZS50b0xvY2FsZVN0cmluZygpJyk7XG5cbiAgICAvLyAxLiBMZXQgeCBiZSB0aGlzIHRpbWUgdmFsdWUgKGFzIGRlZmluZWQgaW4gRVM1LCAxNS45LjUpLlxuICAgIHZhciB4ID0gK3RoaXM7XG5cbiAgICAvLyAyLiBJZiB4IGlzIE5hTiwgdGhlbiByZXR1cm4gXCJJbnZhbGlkIERhdGVcIi5cbiAgICBpZiAoaXNOYU4oeCkpIHJldHVybiAnSW52YWxpZCBEYXRlJztcblxuICAgIC8vIDMuIElmIGxvY2FsZXMgaXMgbm90IHByb3ZpZGVkLCB0aGVuIGxldCBsb2NhbGVzIGJlIHVuZGVmaW5lZC5cbiAgICB2YXIgbG9jYWxlcyA9IGFyZ3VtZW50c1swXTtcblxuICAgIC8vIDQuIElmIG9wdGlvbnMgaXMgbm90IHByb3ZpZGVkLCB0aGVuIGxldCBvcHRpb25zIGJlIHVuZGVmaW5lZC5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50c1sxXTtcblxuICAgIC8vIDUuIExldCBvcHRpb25zIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgVG9EYXRlVGltZU9wdGlvbnMgYWJzdHJhY3RcbiAgICAvLyAgICBvcGVyYXRpb24gKGRlZmluZWQgaW4gMTIuMS4xKSB3aXRoIGFyZ3VtZW50cyBvcHRpb25zLCBcImFueVwiLCBhbmQgXCJhbGxcIi5cbiAgICBvcHRpb25zID0gVG9EYXRlVGltZU9wdGlvbnMob3B0aW9ucywgJ2FueScsICdhbGwnKTtcblxuICAgIC8vIDYuIExldCBkYXRlVGltZUZvcm1hdCBiZSB0aGUgcmVzdWx0IG9mIGNyZWF0aW5nIGEgbmV3IG9iamVjdCBhcyBpZiBieSB0aGVcbiAgICAvLyAgICBleHByZXNzaW9uIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZXMsIG9wdGlvbnMpIHdoZXJlXG4gICAgLy8gICAgSW50bC5EYXRlVGltZUZvcm1hdCBpcyB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gY29uc3RydWN0b3IgZGVmaW5lZCBpbiAxMi4xLjMuXG4gICAgdmFyIGRhdGVUaW1lRm9ybWF0ID0gbmV3IERhdGVUaW1lRm9ybWF0Q29uc3RydWN0b3IobG9jYWxlcywgb3B0aW9ucyk7XG5cbiAgICAvLyA3LiBSZXR1cm4gdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBGb3JtYXREYXRlVGltZSBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWRcbiAgICAvLyAgICBpbiAxMi4zLjIpIHdpdGggYXJndW1lbnRzIGRhdGVUaW1lRm9ybWF0IGFuZCB4LlxuICAgIHJldHVybiBGb3JtYXREYXRlVGltZShkYXRlVGltZUZvcm1hdCwgeCk7XG59O1xuXG4vKipcbiAqIFdoZW4gdGhlIHRvTG9jYWxlRGF0ZVN0cmluZyBtZXRob2QgaXMgY2FsbGVkIHdpdGggb3B0aW9uYWwgYXJndW1lbnRzIGxvY2FsZXMgYW5kXG4gKiBvcHRpb25zLCB0aGUgZm9sbG93aW5nIHN0ZXBzIGFyZSB0YWtlbjpcbiAqL1xuLyogMTMuMy4yICovbHMuRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gU2F0aXNmeSB0ZXN0IDEzLjMuMF8xXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGlzKSAhPT0gJ1tvYmplY3QgRGF0ZV0nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdgdGhpc2AgdmFsdWUgbXVzdCBiZSBhIERhdGUgaW5zdGFuY2UgZm9yIERhdGUucHJvdG90eXBlLnRvTG9jYWxlRGF0ZVN0cmluZygpJyk7XG5cbiAgICAvLyAxLiBMZXQgeCBiZSB0aGlzIHRpbWUgdmFsdWUgKGFzIGRlZmluZWQgaW4gRVM1LCAxNS45LjUpLlxuICAgIHZhciB4ID0gK3RoaXM7XG5cbiAgICAvLyAyLiBJZiB4IGlzIE5hTiwgdGhlbiByZXR1cm4gXCJJbnZhbGlkIERhdGVcIi5cbiAgICBpZiAoaXNOYU4oeCkpIHJldHVybiAnSW52YWxpZCBEYXRlJztcblxuICAgIC8vIDMuIElmIGxvY2FsZXMgaXMgbm90IHByb3ZpZGVkLCB0aGVuIGxldCBsb2NhbGVzIGJlIHVuZGVmaW5lZC5cbiAgICB2YXIgbG9jYWxlcyA9IGFyZ3VtZW50c1swXSxcblxuXG4gICAgLy8gNC4gSWYgb3B0aW9ucyBpcyBub3QgcHJvdmlkZWQsIHRoZW4gbGV0IG9wdGlvbnMgYmUgdW5kZWZpbmVkLlxuICAgIG9wdGlvbnMgPSBhcmd1bWVudHNbMV07XG5cbiAgICAvLyA1LiBMZXQgb3B0aW9ucyBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFRvRGF0ZVRpbWVPcHRpb25zIGFic3RyYWN0XG4gICAgLy8gICAgb3BlcmF0aW9uIChkZWZpbmVkIGluIDEyLjEuMSkgd2l0aCBhcmd1bWVudHMgb3B0aW9ucywgXCJkYXRlXCIsIGFuZCBcImRhdGVcIi5cbiAgICBvcHRpb25zID0gVG9EYXRlVGltZU9wdGlvbnMob3B0aW9ucywgJ2RhdGUnLCAnZGF0ZScpO1xuXG4gICAgLy8gNi4gTGV0IGRhdGVUaW1lRm9ybWF0IGJlIHRoZSByZXN1bHQgb2YgY3JlYXRpbmcgYSBuZXcgb2JqZWN0IGFzIGlmIGJ5IHRoZVxuICAgIC8vICAgIGV4cHJlc3Npb24gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlcywgb3B0aW9ucykgd2hlcmVcbiAgICAvLyAgICBJbnRsLkRhdGVUaW1lRm9ybWF0IGlzIHRoZSBzdGFuZGFyZCBidWlsdC1pbiBjb25zdHJ1Y3RvciBkZWZpbmVkIGluIDEyLjEuMy5cbiAgICB2YXIgZGF0ZVRpbWVGb3JtYXQgPSBuZXcgRGF0ZVRpbWVGb3JtYXRDb25zdHJ1Y3Rvcihsb2NhbGVzLCBvcHRpb25zKTtcblxuICAgIC8vIDcuIFJldHVybiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIEZvcm1hdERhdGVUaW1lIGFic3RyYWN0IG9wZXJhdGlvbiAoZGVmaW5lZFxuICAgIC8vICAgIGluIDEyLjMuMikgd2l0aCBhcmd1bWVudHMgZGF0ZVRpbWVGb3JtYXQgYW5kIHguXG4gICAgcmV0dXJuIEZvcm1hdERhdGVUaW1lKGRhdGVUaW1lRm9ybWF0LCB4KTtcbn07XG5cbi8qKlxuICogV2hlbiB0aGUgdG9Mb2NhbGVUaW1lU3RyaW5nIG1ldGhvZCBpcyBjYWxsZWQgd2l0aCBvcHRpb25hbCBhcmd1bWVudHMgbG9jYWxlcyBhbmRcbiAqIG9wdGlvbnMsIHRoZSBmb2xsb3dpbmcgc3RlcHMgYXJlIHRha2VuOlxuICovXG4vKiAxMy4zLjMgKi9scy5EYXRlLnRvTG9jYWxlVGltZVN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTYXRpc2Z5IHRlc3QgMTMuMy4wXzFcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMpICE9PSAnW29iamVjdCBEYXRlXScpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2B0aGlzYCB2YWx1ZSBtdXN0IGJlIGEgRGF0ZSBpbnN0YW5jZSBmb3IgRGF0ZS5wcm90b3R5cGUudG9Mb2NhbGVUaW1lU3RyaW5nKCknKTtcblxuICAgIC8vIDEuIExldCB4IGJlIHRoaXMgdGltZSB2YWx1ZSAoYXMgZGVmaW5lZCBpbiBFUzUsIDE1LjkuNSkuXG4gICAgdmFyIHggPSArdGhpcztcblxuICAgIC8vIDIuIElmIHggaXMgTmFOLCB0aGVuIHJldHVybiBcIkludmFsaWQgRGF0ZVwiLlxuICAgIGlmIChpc05hTih4KSkgcmV0dXJuICdJbnZhbGlkIERhdGUnO1xuXG4gICAgLy8gMy4gSWYgbG9jYWxlcyBpcyBub3QgcHJvdmlkZWQsIHRoZW4gbGV0IGxvY2FsZXMgYmUgdW5kZWZpbmVkLlxuICAgIHZhciBsb2NhbGVzID0gYXJndW1lbnRzWzBdO1xuXG4gICAgLy8gNC4gSWYgb3B0aW9ucyBpcyBub3QgcHJvdmlkZWQsIHRoZW4gbGV0IG9wdGlvbnMgYmUgdW5kZWZpbmVkLlxuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzWzFdO1xuXG4gICAgLy8gNS4gTGV0IG9wdGlvbnMgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBUb0RhdGVUaW1lT3B0aW9ucyBhYnN0cmFjdFxuICAgIC8vICAgIG9wZXJhdGlvbiAoZGVmaW5lZCBpbiAxMi4xLjEpIHdpdGggYXJndW1lbnRzIG9wdGlvbnMsIFwidGltZVwiLCBhbmQgXCJ0aW1lXCIuXG4gICAgb3B0aW9ucyA9IFRvRGF0ZVRpbWVPcHRpb25zKG9wdGlvbnMsICd0aW1lJywgJ3RpbWUnKTtcblxuICAgIC8vIDYuIExldCBkYXRlVGltZUZvcm1hdCBiZSB0aGUgcmVzdWx0IG9mIGNyZWF0aW5nIGEgbmV3IG9iamVjdCBhcyBpZiBieSB0aGVcbiAgICAvLyAgICBleHByZXNzaW9uIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZXMsIG9wdGlvbnMpIHdoZXJlXG4gICAgLy8gICAgSW50bC5EYXRlVGltZUZvcm1hdCBpcyB0aGUgc3RhbmRhcmQgYnVpbHQtaW4gY29uc3RydWN0b3IgZGVmaW5lZCBpbiAxMi4xLjMuXG4gICAgdmFyIGRhdGVUaW1lRm9ybWF0ID0gbmV3IERhdGVUaW1lRm9ybWF0Q29uc3RydWN0b3IobG9jYWxlcywgb3B0aW9ucyk7XG5cbiAgICAvLyA3LiBSZXR1cm4gdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBGb3JtYXREYXRlVGltZSBhYnN0cmFjdCBvcGVyYXRpb24gKGRlZmluZWRcbiAgICAvLyAgICBpbiAxMi4zLjIpIHdpdGggYXJndW1lbnRzIGRhdGVUaW1lRm9ybWF0IGFuZCB4LlxuICAgIHJldHVybiBGb3JtYXREYXRlVGltZShkYXRlVGltZUZvcm1hdCwgeCk7XG59O1xuXG5kZWZpbmVQcm9wZXJ0eShJbnRsLCAnX19hcHBseUxvY2FsZVNlbnNpdGl2ZVByb3RvdHlwZXMnLCB7XG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgJ3RvTG9jYWxlU3RyaW5nJywgeyB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogbHMuTnVtYmVyLnRvTG9jYWxlU3RyaW5nIH0pO1xuICAgICAgICAvLyBOZWVkIHRoaXMgaGVyZSBmb3IgSUUgOCwgdG8gYXZvaWQgdGhlIF9Eb250RW51bV8gYnVnXG4gICAgICAgIGRlZmluZVByb3BlcnR5KERhdGUucHJvdG90eXBlLCAndG9Mb2NhbGVTdHJpbmcnLCB7IHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBscy5EYXRlLnRvTG9jYWxlU3RyaW5nIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGsgaW4gbHMuRGF0ZSkge1xuICAgICAgICAgICAgaWYgKGhvcC5jYWxsKGxzLkRhdGUsIGspKSBkZWZpbmVQcm9wZXJ0eShEYXRlLnByb3RvdHlwZSwgaywgeyB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogbHMuRGF0ZVtrXSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vKipcbiAqIENhbid0IHJlYWxseSBzaGlwIGEgc2luZ2xlIHNjcmlwdCB3aXRoIGRhdGEgZm9yIGh1bmRyZWRzIG9mIGxvY2FsZXMsIHNvIHdlIHByb3ZpZGVcbiAqIHRoaXMgX19hZGRMb2NhbGVEYXRhIG1ldGhvZCBhcyBhIG1lYW5zIGZvciB0aGUgZGV2ZWxvcGVyIHRvIGFkZCB0aGUgZGF0YSBvbiBhblxuICogYXMtbmVlZGVkIGJhc2lzXG4gKi9cbmRlZmluZVByb3BlcnR5KEludGwsICdfX2FkZExvY2FsZURhdGEnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGRhdGEpIHtcbiAgICAgICAgaWYgKCFJc1N0cnVjdHVyYWxseVZhbGlkTGFuZ3VhZ2VUYWcoZGF0YS5sb2NhbGUpKSB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3QgcGFzc2VkIGRvZXNuJ3QgaWRlbnRpZnkgaXRzZWxmIHdpdGggYSB2YWxpZCBsYW5ndWFnZSB0YWdcIik7XG5cbiAgICAgICAgYWRkTG9jYWxlRGF0YShkYXRhLCBkYXRhLmxvY2FsZSk7XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIGFkZExvY2FsZURhdGEoZGF0YSwgdGFnKSB7XG4gICAgLy8gQm90aCBOdW1iZXJGb3JtYXQgYW5kIERhdGVUaW1lRm9ybWF0IHJlcXVpcmUgbnVtYmVyIGRhdGEsIHNvIHRocm93IGlmIGl0IGlzbid0IHByZXNlbnRcbiAgICBpZiAoIWRhdGEubnVtYmVyKSB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3QgcGFzc2VkIGRvZXNuJ3QgY29udGFpbiBsb2NhbGUgZGF0YSBmb3IgSW50bC5OdW1iZXJGb3JtYXRcIik7XG5cbiAgICB2YXIgbG9jYWxlID0gdm9pZCAwLFxuICAgICAgICBsb2NhbGVzID0gW3RhZ10sXG4gICAgICAgIHBhcnRzID0gdGFnLnNwbGl0KCctJyk7XG5cbiAgICAvLyBDcmVhdGUgZmFsbGJhY2tzIGZvciBsb2NhbGUgZGF0YSB3aXRoIHNjcmlwdHMsIGUuZy4gTGF0biwgSGFucywgVmFpaSwgZXRjXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA+IDIgJiYgcGFydHNbMV0ubGVuZ3RoID09PSA0KSBhcnJQdXNoLmNhbGwobG9jYWxlcywgcGFydHNbMF0gKyAnLScgKyBwYXJ0c1syXSk7XG5cbiAgICB3aGlsZSAobG9jYWxlID0gYXJyU2hpZnQuY2FsbChsb2NhbGVzKSkge1xuICAgICAgICAvLyBBZGQgdG8gTnVtYmVyRm9ybWF0IGludGVybmFsIHByb3BlcnRpZXMgYXMgcGVyIDExLjIuM1xuICAgICAgICBhcnJQdXNoLmNhbGwoaW50ZXJuYWxzLk51bWJlckZvcm1hdFsnW1thdmFpbGFibGVMb2NhbGVzXV0nXSwgbG9jYWxlKTtcbiAgICAgICAgaW50ZXJuYWxzLk51bWJlckZvcm1hdFsnW1tsb2NhbGVEYXRhXV0nXVtsb2NhbGVdID0gZGF0YS5udW1iZXI7XG5cbiAgICAgICAgLy8gLi4uYW5kIERhdGVUaW1lRm9ybWF0IGludGVybmFsIHByb3BlcnRpZXMgYXMgcGVyIDEyLjIuM1xuICAgICAgICBpZiAoZGF0YS5kYXRlKSB7XG4gICAgICAgICAgICBkYXRhLmRhdGUubnUgPSBkYXRhLm51bWJlci5udTtcbiAgICAgICAgICAgIGFyclB1c2guY2FsbChpbnRlcm5hbHMuRGF0ZVRpbWVGb3JtYXRbJ1tbYXZhaWxhYmxlTG9jYWxlc11dJ10sIGxvY2FsZSk7XG4gICAgICAgICAgICBpbnRlcm5hbHMuRGF0ZVRpbWVGb3JtYXRbJ1tbbG9jYWxlRGF0YV1dJ11bbG9jYWxlXSA9IGRhdGEuZGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgdGhlIGZpcnN0IHNldCBvZiBsb2NhbGUgZGF0YSBhZGRlZCwgbWFrZSBpdCB0aGUgZGVmYXVsdFxuICAgIGlmIChkZWZhdWx0TG9jYWxlID09PSB1bmRlZmluZWQpIHNldERlZmF1bHRMb2NhbGUodGFnKTtcbn1cblxuZGVmaW5lUHJvcGVydHkoSW50bCwgJ19fZGlzYWJsZVJlZ0V4cFJlc3RvcmUnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICBpbnRlcm5hbHMuZGlzYWJsZVJlZ0V4cFJlc3RvcmUgPSB0cnVlO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGw7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9