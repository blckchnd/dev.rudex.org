(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ 2848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var simpleIsEqual = function simpleIsEqual(a, b) {
  return a === b;
};

function index (resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = simpleIsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var isNewArgEqualToLast = function isNewArgEqualToLast(newArg, index) {
    return isEqual(newArg, lastArgs[index]);
  };

  var result = function result() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ 2850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cx", function() { return cx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return sheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caches", function() { return caches; });
/* harmony import */ var create_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2851);


var context = typeof global !== 'undefined' ? global : {};

var _createEmotion = Object(create_emotion__WEBPACK_IMPORTED_MODULE_0__["default"])(context),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    caches = _createEmotion.caches;



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),

/***/ 2851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2852);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2853);
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2854);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2855);
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2856);
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4__);






var hyphenateRegex = /[A-Z]|^ms/g;
var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (styleName) {
  return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
  if (value == null || typeof value === 'boolean') {
    return '';
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties
  !isNaN(value) && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    return oldProcessStyleValue(key, value);
  };
}

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'function':
        if (true) {
          console.error('Passing functions to cx is deprecated and will be removed in the next major version of Emotion.\n' + 'Please call the function before passing it to cx.');
        }

        toAdd = classnames([arg()]);
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};
var isBrowser = typeof document !== 'undefined';

/*

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side

// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject()
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function makeStyleTag(opts) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', opts.key || '');

  if (opts.nonce !== undefined) {
    tag.setAttribute('nonce', opts.nonce);
  }

  tag.appendChild(document.createTextNode('')) // $FlowFixMe
  ;
  (opts.container !== undefined ? opts.container : document.head).appendChild(tag);
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = "none" === 'production'; // the big drawback here is that the css won't be editable in devtools

    this.tags = [];
    this.ctr = 0;
    this.opts = options;
  }

  var _proto = StyleSheet.prototype;

  _proto.inject = function inject() {
    if (this.injected) {
      throw new Error('already injected!');
    }

    this.tags[0] = makeStyleTag(this.opts);
    this.injected = true;
  };

  _proto.speedy = function speedy(bool) {
    if (this.ctr !== 0) {
      // cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})
      throw new Error("cannot change speedy now");
    }

    this.isSpeedy = !!bool;
  };

  _proto.insert = function insert(rule, sourceMap) {
    // this is the ultrafast version, works across browsers
    if (this.isSpeedy) {
      var tag = this.tags[this.tags.length - 1];
      var sheet = sheetForTag(tag);

      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn('illegal rule', rule); // eslint-disable-line no-console
        }
      }
    } else {
      var _tag = makeStyleTag(this.opts);

      this.tags.push(_tag);

      _tag.appendChild(document.createTextNode(rule + (sourceMap || '')));
    }

    this.ctr++;

    if (this.ctr % 65000 === 0) {
      this.tags.push(makeStyleTag(this.opts));
    }
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0; // todo - look for remnants in document.styleSheets

    this.injected = false;
  };

  return StyleSheet;
}();

function createEmotion(context, options) {
  if (context.__SECRET_EMOTION__ !== undefined) {
    return context.__SECRET_EMOTION__;
  }

  if (options === undefined) options = {};
  var key = options.key || 'css';

  if (true) {
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var current;

  function insertRule(rule) {
    current += rule;

    if (isBrowser) {
      sheet.insert(rule, currentSourceMap);
    }
  }

  var insertionPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4___default()(insertRule);
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var caches = {
    registered: {},
    inserted: {},
    nonce: options.nonce,
    key: key
  };
  var sheet = new StyleSheet(options);

  if (isBrowser) {
    // 🚀
    sheet.inject();
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](stylisOptions);
  stylis.use(options.stylisPlugins)(insertionPlugin);
  var currentSourceMap = '';

  function handleInterpolation(interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) {
      return '';
    }

    switch (typeof interpolation) {
      case 'boolean':
        return '';

      case 'function':
        if (interpolation.__emotion_styles !== undefined) {
          var selector = interpolation.toString();

          if (selector === 'NO_COMPONENT_SELECTOR' && "none" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          return selector;
        }

        if (this === undefined && "none" !== 'production') {
          console.error('Interpolating functions in css calls is deprecated and will be removed in the next major version of Emotion.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        return handleInterpolation.call(this, this === undefined ? interpolation() : // $FlowFixMe
        interpolation(this.mergedProps, this.context), couldBeSelectorInterpolation);

      case 'object':
        return createStringFromObject.call(this, interpolation);

      default:
        var cached = caches.registered[interpolation];
        return couldBeSelectorInterpolation === false && cached !== undefined ? cached : interpolation;
    }
  }

  var objectToStringCache = new WeakMap();

  function createStringFromObject(obj) {
    if (objectToStringCache.has(obj)) {
      // $FlowFixMe
      return objectToStringCache.get(obj);
    }

    var string = '';

    if (Array.isArray(obj)) {
      obj.forEach(function (interpolation) {
        string += handleInterpolation.call(this, interpolation, false);
      }, this);
    } else {
      Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] !== 'object') {
          if (caches.registered[obj[key]] !== undefined) {
            string += key + "{" + caches.registered[obj[key]] + "}";
          } else {
            string += processStyleName(key) + ":" + processStyleValue(key, obj[key]) + ";";
          }
        } else {
          if (key === 'NO_COMPONENT_SELECTOR' && "none" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string' && caches.registered[obj[key][0]] === undefined) {
            obj[key].forEach(function (value) {
              string += processStyleName(key) + ":" + processStyleValue(key, value) + ";";
            });
          } else {
            string += key + "{" + handleInterpolation.call(this, obj[key], false) + "}";
          }
        }
      }, this);
    }

    objectToStringCache.set(obj, string);
    return string;
  }

  var name;
  var stylesWithLabel;
  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;

  var createClassName = function createClassName(styles, identifierName) {
    return Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_2__["default"])(styles + identifierName) + identifierName;
  };

  if (true) {
    var oldCreateClassName = createClassName;
    var sourceMappingUrlPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;

    createClassName = function createClassName(styles, identifierName) {
      return oldCreateClassName(styles.replace(sourceMappingUrlPattern, function (sourceMap) {
        currentSourceMap = sourceMap;
        return '';
      }), identifierName);
    };
  }

  var createStyles = function createStyles(strings) {
    var stringMode = true;
    var styles = '';
    var identifierName = '';

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation.call(this, strings, false);
    } else {
      styles += strings[0];
    }

    for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    interpolations.forEach(function (interpolation, i) {
      styles += handleInterpolation.call(this, interpolation, styles.charCodeAt(styles.length - 1) === 46 // .
      );

      if (stringMode === true && strings[i + 1] !== undefined) {
        styles += strings[i + 1];
      }
    }, this);
    stylesWithLabel = styles;
    styles = styles.replace(labelPattern, function (match, p1) {
      identifierName += "-" + p1;
      return '';
    });
    name = createClassName(styles, identifierName);
    return styles;
  };

  if (true) {
    var oldStylis = stylis;

    stylis = function stylis(selector, styles) {
      oldStylis(selector, styles);
      currentSourceMap = '';
    };
  }

  function insert(scope, styles) {
    if (caches.inserted[name] === undefined) {
      current = '';
      stylis(scope, styles);
      caches.inserted[name] = current;
    }
  }

  var css = function css() {
    var styles = createStyles.apply(this, arguments);
    var selector = key + "-" + name;

    if (caches.registered[selector] === undefined) {
      caches.registered[selector] = stylesWithLabel;
    }

    insert("." + selector, styles);
    return selector;
  };

  var keyframes = function keyframes() {
    var styles = createStyles.apply(this, arguments);
    var animation = "animation-" + name;
    insert('', "@keyframes " + animation + "{" + styles + "}");
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    var styles = createStyles.apply(this, arguments);
    insert('', styles);
  };

  function getRegisteredStyles(registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (caches.registered[className] !== undefined) {
        registeredStyles.push(className);
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }

  function merge(className, sourceMap) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registeredStyles, className);

    if (registeredStyles.length < 2) {
      return className;
    }

    return rawClassName + css(registeredStyles, sourceMap);
  }

  function cx() {
    for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classNames[_key2] = arguments[_key2];
    }

    return merge(classnames(classNames));
  }

  function hydrateSingleId(id) {
    caches.inserted[id] = true;
  }

  function hydrate(ids) {
    ids.forEach(hydrateSingleId);
  }

  function flush() {
    if (isBrowser) {
      sheet.flush();
      sheet.inject();
    }

    caches.inserted = {};
    caches.registered = {};
  }

  if (isBrowser) {
    var chunks = document.querySelectorAll("[data-emotion-" + key + "]");
    Array.prototype.forEach.call(chunks, function (node) {
      // $FlowFixMe
      sheet.tags[0].parentNode.insertBefore(node, sheet.tags[0]); // $FlowFixMe

      node.getAttribute("data-emotion-" + key).split(' ').forEach(hydrateSingleId);
    });
  }

  var emotion = {
    flush: flush,
    hydrate: hydrate,
    cx: cx,
    merge: merge,
    getRegisteredStyles: getRegisteredStyles,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    css: css,
    sheet: sheet,
    caches: caches
  };
  context.__SECRET_EMOTION__ = emotion;
  return emotion;
}

/* harmony default export */ __webpack_exports__["default"] = (createEmotion);


/***/ }),

/***/ 2852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ 2853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ 2854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmurhash2_32_gc);


/***/ }),

/***/ 2855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e, m).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e, m).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        switch (d.constructor) {
          case Array:
            for (var c = 0, e = d.length; c < e; ++c) {
              T(d[c]);
            }

            break;

          case Function:
            S[A++] = d;
            break;

          case Boolean:
            Y = !!d | 0;
        }

    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ 2856:
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		undefined
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ 2878:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ 2887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBase", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return Async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncCreatable", function() { return AsyncCreatable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creatable", function() { return Creatable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilter", function() { return createFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAnimated", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return mergeStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return defaultTheme; });
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(834);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2850);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(398);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(813);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2878);
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2848);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2888);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_7__);









var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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

var defineProperty = function (obj, key, value) {
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

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

// ==============================
// NO OP
// ==============================

var noop = function noop() {};

// ==============================
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/
function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, cssKey, state, className) {
  var arr = [cssKey, className];
  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push('' + applyPrefixToName(prefix, key));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
}
// ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null) return [value];
  return [];
};

// ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }
  return inputValue;
}

// ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}

// Normalized scrollTo & scrollTop
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }
  return el.scrollTop;
}

function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
}

// Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === 'static') {
      continue;
    }
    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
}

// Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/
function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;

  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);
    if (currentTime < duration) {
      raf__WEBPACK_IMPORTED_MODULE_0___default()(animateScroll);
    } else {
      callback(element);
    }
  }
  animateScroll();
}

// Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}

// ==============================
// Get bounding client object
// ==============================

// cannot get keys using array notation with DOMRect
function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}

// ==============================
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}

// ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
  } catch (e) {
    return false;
  }
}

// ==============================
// Menu
// ==============================

// Get Menu Placement
// ------------------------------

function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;

  var scrollParent = getScrollParent(menuEl);
  var defaultState = { placement: 'bottom', maxHeight: maxHeight };

  // something went wrong, return default state
  if (!menuEl || !menuEl.offsetParent) return defaultState;

  // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  // $FlowFixMe function returns above if there's no offsetParent


  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = getScrollTop(scrollParent);

  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;

  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return { placement: 'bottom', maxHeight: maxHeight };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return { placement: 'bottom', maxHeight: maxHeight };
      }

      // 3: the menu will fit, if constrained
      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;

        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      }

      // 4. Forked beviour when there isn't enough space below

      // AUTO: flip the menu, render above
      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return { placement: 'top', maxHeight: _constrainedHeight };
      }

      // BOTTOM: allow browser to increase scrollable area and immediately set scroll
      if (placement === 'bottom') {
        scrollTo(scrollParent, scrollDown);
        return { placement: 'bottom', maxHeight: maxHeight };
      }
      break;
    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return { placement: 'top', maxHeight: maxHeight };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return { placement: 'top', maxHeight: maxHeight };
      }

      // 3: the menu will fit, if constrained
      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight;

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      }

      // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below
      return { placement: 'bottom', maxHeight: maxHeight };
    default:
      throw new Error('Invalid placement provided "' + placement + '".');
  }

  // fulfil contract with flow: implicit return value of undefined
  return defaultState;
}

// Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = { bottom: 'top', top: 'bottom' };
  return placement ? placementToCSSProp[placement] : 'bottom';
}
var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {}, defineProperty(_ref3, alignToControl(placement), '100%'), defineProperty(_ref3, 'backgroundColor', colors.neutral0), defineProperty(_ref3, 'borderRadius', borderRadius), defineProperty(_ref3, 'boxShadow', '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), defineProperty(_ref3, 'marginBottom', spacing.menuGutter), defineProperty(_ref3, 'marginTop', spacing.menuGutter), defineProperty(_ref3, 'position', 'absolute'), defineProperty(_ref3, 'width', '100%'), defineProperty(_ref3, 'zIndex', 1), _ref3;
};

// NOTE: internal only
var MenuPlacer = function (_Component) {
  inherits(MenuPlacer, _Component);

  function MenuPlacer() {
    var _ref4;

    var _temp, _this, _ret;

    classCallCheck(this, MenuPlacer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref4 = MenuPlacer.__proto__ || Object.getPrototypeOf(MenuPlacer)).call.apply(_ref4, [this].concat(args))), _this), _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    }, _this.getPlacement = function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      var getPortalPlacement = _this.context.getPortalPlacement;


      if (!ref) return;

      // DO NOT scroll if position is fixed
      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;

      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });

      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    }, _this.getUpdatedProps = function () {
      var menuPlacement = _this.props.menuPlacement;

      var placement = _this.state.placement || coercePlacement(menuPlacement);

      return _extends({}, _this.props, { placement: placement, maxHeight: _this.state.maxHeight });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(MenuPlacer, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);
  return MenuPlacer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

MenuPlacer.contextTypes = {
  getPortalPlacement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;

  var cn = cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('menu', props)), { menu: true }, className);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    _extends({ className: cn }, innerProps, { ref: innerRef }),
    children
  );
};

// ==============================
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref5) {
  var maxHeight = _ref5.maxHeight,
      baseUnit = _ref5.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative', // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    {
      className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('menuList', props)), {
        'menu-list': true,
        'menu-list--is-multi': isMulti
      }, className),
      ref: innerRef
    },
    children
  );
};

// ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref6) {
  var _ref6$theme = _ref6.theme,
      baseUnit = _ref6$theme.spacing.baseUnit,
      colors = _ref6$theme.colors;
  return {
    color: colors.neutral40,
    padding: baseUnit * 2 + 'px ' + baseUnit * 3 + 'px',
    textAlign: 'center'
  };
};
var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;

var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('noOptionsMessage', props)), {
        'menu-notice': true,
        'menu-notice--no-options': true
      }, className)
    }, innerProps),
    children
  );
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};

var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('loadingMessage', props)), {
        'menu-notice': true,
        'menu-notice--loading': true
      }, className)
    }, innerProps),
    children
  );
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
};

// ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref7) {
  var rect = _ref7.rect,
      offset = _ref7.offset,
      position = _ref7.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};

var MenuPortal = function (_Component2) {
  inherits(MenuPortal, _Component2);

  function MenuPortal() {
    var _ref8;

    var _temp2, _this2, _ret2;

    classCallCheck(this, MenuPortal);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = possibleConstructorReturn(this, (_ref8 = MenuPortal.__proto__ || Object.getPrototypeOf(MenuPortal)).call.apply(_ref8, [this].concat(args))), _this2), _this2.state = { placement: null }, _this2.getPortalPlacement = function (_ref9) {
      var placement = _ref9.placement;

      var initialPlacement = coercePlacement(_this2.props.menuPlacement);

      // avoid re-renders if the placement has not changed
      if (placement !== initialPlacement) {
        _this2.setState({ placement: placement });
      }
    }, _temp2), possibleConstructorReturn(_this2, _ret2);
  }

  createClass(MenuPortal, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        getPortalPlacement: this.getPortalPlacement
      };
    }

    // callback for occassions where the menu must "flip"

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          appendTo = _props.appendTo,
          children = _props.children,
          controlElement = _props.controlElement,
          menuPlacement = _props.menuPlacement,
          position = _props.menuPosition,
          getStyles = _props.getStyles;

      var isFixed = position === 'fixed';

      // bail early if required elements aren't present
      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = { offset: offset, position: position, rect: rect };

      // same wrapper element whether fixed or portalled
      var menuWrapper = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        'div',
        { className: /*#__PURE__*/ /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('menuPortal', state)) },
        children
      );

      return appendTo ? Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["createPortal"])(menuWrapper, appendTo) : menuWrapper;
    }
  }]);
  return MenuPortal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
MenuPortal.childContextTypes = {
  getPortalPlacement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) == 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    }
    // end fast-deep-equal

    // Custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
}

var diacritics = [{ base: 'A', letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { base: 'AA', letters: /[\uA732]/g }, { base: 'AE', letters: /[\u00C6\u01FC\u01E2]/g }, { base: 'AO', letters: /[\uA734]/g }, { base: 'AU', letters: /[\uA736]/g }, { base: 'AV', letters: /[\uA738\uA73A]/g }, { base: 'AY', letters: /[\uA73C]/g }, { base: 'B', letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { base: 'C', letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { base: 'D', letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { base: 'DZ', letters: /[\u01F1\u01C4]/g }, { base: 'Dz', letters: /[\u01F2\u01C5]/g }, { base: 'E', letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { base: 'F', letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { base: 'G', letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { base: 'H', letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { base: 'I', letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { base: 'J', letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { base: 'K', letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { base: 'L', letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { base: 'LJ', letters: /[\u01C7]/g }, { base: 'Lj', letters: /[\u01C8]/g }, { base: 'M', letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { base: 'N', letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { base: 'NJ', letters: /[\u01CA]/g }, { base: 'Nj', letters: /[\u01CB]/g }, { base: 'O', letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { base: 'OI', letters: /[\u01A2]/g }, { base: 'OO', letters: /[\uA74E]/g }, { base: 'OU', letters: /[\u0222]/g }, { base: 'P', letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { base: 'Q', letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { base: 'R', letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { base: 'S', letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { base: 'T', letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { base: 'TZ', letters: /[\uA728]/g }, { base: 'U', letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { base: 'V', letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { base: 'VY', letters: /[\uA760]/g }, { base: 'W', letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { base: 'X', letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { base: 'Y', letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { base: 'Z', letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { base: 'a', letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { base: 'aa', letters: /[\uA733]/g }, { base: 'ae', letters: /[\u00E6\u01FD\u01E3]/g }, { base: 'ao', letters: /[\uA735]/g }, { base: 'au', letters: /[\uA737]/g }, { base: 'av', letters: /[\uA739\uA73B]/g }, { base: 'ay', letters: /[\uA73D]/g }, { base: 'b', letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { base: 'c', letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { base: 'd', letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { base: 'dz', letters: /[\u01F3\u01C6]/g }, { base: 'e', letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { base: 'f', letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { base: 'g', letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { base: 'h', letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { base: 'hv', letters: /[\u0195]/g }, { base: 'i', letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { base: 'j', letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { base: 'k', letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { base: 'l', letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { base: 'lj', letters: /[\u01C9]/g }, { base: 'm', letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { base: 'n', letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { base: 'nj', letters: /[\u01CC]/g }, { base: 'o', letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { base: 'oi', letters: /[\u01A3]/g }, { base: 'ou', letters: /[\u0223]/g }, { base: 'oo', letters: /[\uA74F]/g }, { base: 'p', letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { base: 'q', letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { base: 'r', letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { base: 's', letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { base: 't', letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { base: 'tz', letters: /[\uA729]/g }, { base: 'u', letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { base: 'v', letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { base: 'vy', letters: /[\uA761]/g }, { base: 'w', letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { base: 'x', letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { base: 'y', letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { base: 'z', letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

var stripDiacritics = function stripDiacritics(str) {
	for (var i = 0; i < diacritics.length; i++) {
		str = str.replace(diacritics[i].letters, diacritics[i].base);
	}
	return str;
};

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};
var defaultStringify = function defaultStringify(option) {
  return option.label + ' ' + option.value;
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = _extends({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);
    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }
    if (ignoreAccents) {
      input = stripDiacritics(input);
      candidate = stripDiacritics(candidate);
    }
    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

// Assistive text to describe visual elements. Hidden for sighted users.
var A11yText = function A11yText(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', _extends({
    className: /*#__PURE__*/ /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])({
      zIndex: 9999,
      border: 0,
      clip: 'rect(1px, 1px, 1px, 1px)',
      height: 1,
      width: 1,
      position: 'absolute',
      overflow: 'hidden',
      padding: 0,
      whiteSpace: 'nowrap',
      backgroundColor: 'red',
      color: 'blue'
    })
  }, props));
};

var DummyInput = function (_Component) {
  inherits(DummyInput, _Component);

  function DummyInput() {
    classCallCheck(this, DummyInput);
    return possibleConstructorReturn(this, (DummyInput.__proto__ || Object.getPrototypeOf(DummyInput)).apply(this, arguments));
  }

  createClass(DummyInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          inProp = _props.in,
          out = _props.out,
          onExited = _props.onExited,
          appear = _props.appear,
          enter = _props.enter,
          exit = _props.exit,
          innerRef = _props.innerRef,
          emotion = _props.emotion,
          props = objectWithoutProperties(_props, ['in', 'out', 'onExited', 'appear', 'enter', 'exit', 'innerRef', 'emotion']);

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('input', _extends({
        ref: innerRef
      }, props, {
        className: /*#__PURE__*/ /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])({
          // get rid of any default styles
          background: 0,
          border: 0,
          fontSize: 'inherit',
          outline: 0,
          padding: 0,

          // important! without `width` browsers won't allow focus
          width: 1,

          // remove cursor on desktop
          color: 'transparent',

          // remove cursor on mobile whilst maintaining "scroll into view" behaviour
          left: -100,
          opacity: 0,
          position: 'relative',
          transform: 'scale(0)'
        })
      }));
    }
  }]);
  return DummyInput;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var NodeResolver = function (_Component) {
  inherits(NodeResolver, _Component);

  function NodeResolver() {
    classCallCheck(this, NodeResolver);
    return possibleConstructorReturn(this, (NodeResolver.__proto__ || Object.getPrototypeOf(NodeResolver)).apply(this, arguments));
  }

  createClass(NodeResolver, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.innerRef(Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.innerRef(null);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return NodeResolver;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];

var LOCK_STYLES = {
  boxSizing: 'border-box', // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}

function allowTouchMove(e) {
  e.stopPropagation();
}

function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}

// `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var activeScrollLocks = 0;

var ScrollLock = function (_Component) {
  inherits(ScrollLock, _Component);

  function ScrollLock() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ScrollLock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ScrollLock.__proto__ || Object.getPrototypeOf(ScrollLock)).call.apply(_ref, [this].concat(args))), _this), _this.originalStyles = {}, _this.listenerOptions = {
      capture: false,
      passive: false
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ScrollLock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (!canUseDOM) return;

      var _props = this.props,
          accountForScrollbars = _props.accountForScrollbars,
          touchScrollTarget = _props.touchScrollTarget;

      var target = document.body;
      var targetStyle = target && target.style;

      if (accountForScrollbars) {
        // store any styles already applied to the body
        STYLE_KEYS.forEach(function (key) {
          var val = targetStyle && targetStyle[key];
          _this2.originalStyles[key] = val;
        });
      }

      // apply the lock styles and padding if this is the first scroll lock
      if (accountForScrollbars && activeScrollLocks < 1) {
        var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
        var clientWidth = document.body ? document.body.clientWidth : 0;
        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;

        Object.keys(LOCK_STYLES).forEach(function (key) {
          var val = LOCK_STYLES[key];
          if (targetStyle) {
            targetStyle[key] = val;
          }
        });

        if (targetStyle) {
          targetStyle.paddingRight = adjustedPadding + 'px';
        }
      }

      // account for touch devices
      if (target && isTouchDevice()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener('touchmove', preventTouchMove, this.listenerOptions);

        // Allow scroll on provided target
        if (touchScrollTarget) {
          touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      }

      // increment active scroll locks
      activeScrollLocks += 1;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      if (!canUseDOM) return;

      var _props2 = this.props,
          accountForScrollbars = _props2.accountForScrollbars,
          touchScrollTarget = _props2.touchScrollTarget;

      var target = document.body;
      var targetStyle = target && target.style;

      // safely decrement active scroll locks
      activeScrollLocks = Math.max(activeScrollLocks - 1, 0);

      // reapply original body styles, if any
      if (accountForScrollbars && activeScrollLocks < 1) {
        STYLE_KEYS.forEach(function (key) {
          var val = _this3.originalStyles[key];
          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
      }

      // remove touch listeners
      if (target && isTouchDevice()) {
        target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return ScrollLock;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

ScrollLock.defaultProps = {
  accountForScrollbars: true
};

// NOTE:
// We shouldn't need this after updating to React v16.3.0, which introduces:
// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref

var ScrollBlock = function (_PureComponent) {
  inherits(ScrollBlock, _PureComponent);

  function ScrollBlock() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ScrollBlock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ScrollBlock.__proto__ || Object.getPrototypeOf(ScrollBlock)).call.apply(_ref, [this].concat(args))), _this), _this.state = { touchScrollTarget: null }, _this.getScrollTarget = function (ref) {
      if (ref === _this.state.touchScrollTarget) return;
      _this.setState({ touchScrollTarget: ref });
    }, _this.blurSelectInput = function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  // must be in state to trigger a re-render, only runs once per instance


  // this will close the menu when a user clicks outside


  createClass(ScrollBlock, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          isEnabled = _props.isEnabled;
      var touchScrollTarget = this.state.touchScrollTarget;

      // bail early if not enabled

      if (!isEnabled) return children;

      /*
       * Div
       * ------------------------------
       * blocks scrolling on non-body elements behind the menu
        * NodeResolver
       * ------------------------------
       * we need a reference to the scrollable element to "unlock" scroll on
       * mobile devices
        * ScrollLock
       * ------------------------------
       * actually does the scroll locking
       */
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        'div',
        null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
          onClick: this.blurSelectInput,
          className: /*#__PURE__*/ /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])({ position: 'fixed', left: 0, bottom: 0, right: 0, top: 0 })
        }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          NodeResolver,
          { innerRef: this.getScrollTarget },
          children
        ),
        touchScrollTarget ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ScrollLock, { touchScrollTarget: touchScrollTarget }) : null
      );
    }
  }]);
  return ScrollBlock;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

var ScrollCaptor = function (_Component) {
  inherits(ScrollCaptor, _Component);

  function ScrollCaptor() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ScrollCaptor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ScrollCaptor.__proto__ || Object.getPrototypeOf(ScrollCaptor)).call.apply(_ref, [this].concat(args))), _this), _this.isBottom = false, _this.isTop = false, _this.cancelScroll = function (event) {
      event.preventDefault();
      event.stopPropagation();
    }, _this.handleEventDelta = function (event, delta) {
      var _this$props = _this.props,
          onBottomArrive = _this$props.onBottomArrive,
          onBottomLeave = _this$props.onBottomLeave,
          onTopArrive = _this$props.onTopArrive,
          onTopLeave = _this$props.onTopLeave;
      var _this$scrollTarget = _this.scrollTarget,
          scrollTop = _this$scrollTarget.scrollTop,
          scrollHeight = _this$scrollTarget.scrollHeight,
          clientHeight = _this$scrollTarget.clientHeight;

      var target = _this.scrollTarget;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false;

      // reset bottom/top flags
      if (availableScroll > delta && _this.isBottom) {
        if (onBottomLeave) onBottomLeave(event);
        _this.isBottom = false;
      }
      if (isDeltaPositive && _this.isTop) {
        if (onTopLeave) onTopLeave(event);
        _this.isTop = false;
      }

      // bottom limit
      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !_this.isBottom) {
          onBottomArrive(event);
        }
        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        _this.isBottom = true;

        // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !_this.isTop) {
          onTopArrive(event);
        }
        target.scrollTop = 0;
        shouldCancelScroll = true;
        _this.isTop = true;
      }

      // cancel scroll
      if (shouldCancelScroll) {
        _this.cancelScroll(event);
      }
    }, _this.onWheel = function (event) {
      _this.handleEventDelta(event, event.deltaY);
    }, _this.onTouchStart = function (event) {
      // set touch start so we can calculate touchmove delta
      _this.touchStart = event.changedTouches[0].clientY;
    }, _this.onTouchMove = function (event) {
      var deltaY = _this.touchStart - event.changedTouches[0].clientY;
      _this.handleEventDelta(event, deltaY);
    }, _this.getScrollTarget = function (ref) {
      _this.scrollTarget = ref;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ScrollCaptor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startListening(this.scrollTarget);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stopListening(this.scrollTarget);
    }
  }, {
    key: 'startListening',
    value: function startListening(el) {
      // bail early if no scroll available
      if (el.scrollHeight <= el.clientHeight) return;

      // all the if statements are to appease Flow 😢
      if (typeof el.addEventListener === 'function') {
        el.addEventListener('wheel', this.onWheel, false);
      }
      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchstart', this.onTouchStart, false);
      }
      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: 'stopListening',
    value: function stopListening(el) {
      // bail early if no scroll available
      if (el.scrollHeight <= el.clientHeight) return;

      // all the if statements are to appease Flow 😢
      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('wheel', this.onWheel, false);
      }
      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchstart', this.onTouchStart, false);
      }
      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        NodeResolver,
        { innerRef: this.getScrollTarget },
        this.props.children
      );
    }
  }]);
  return ScrollCaptor;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var ScrollCaptorSwitch = function (_Component2) {
  inherits(ScrollCaptorSwitch, _Component2);

  function ScrollCaptorSwitch() {
    classCallCheck(this, ScrollCaptorSwitch);
    return possibleConstructorReturn(this, (ScrollCaptorSwitch.__proto__ || Object.getPrototypeOf(ScrollCaptorSwitch)).apply(this, arguments));
  }

  createClass(ScrollCaptorSwitch, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isEnabled = _props.isEnabled,
          props = objectWithoutProperties(_props, ['isEnabled']);

      return isEnabled ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ScrollCaptor, props) : this.props.children;
    }
  }]);
  return ScrollCaptorSwitch;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

ScrollCaptorSwitch.defaultProps = { isEnabled: true };

var instructionsAriaMessage = function instructionsAriaMessage(event) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isSearchable = context.isSearchable,
      isMulti = context.isMulti,
      label = context.label;

  switch (event) {
    case 'menu':
      return 'Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu, press Tab to select the option and exit the menu.';
    case 'input':
      return (label ? label : 'Select') + ' is focused ' + (isSearchable ? ',type to refine list' : '') + ', press Down to open the menu, ' + (isMulti ? ' press left to focus selected values' : '');
    case 'value':
      return 'Use left and right to toggle between focused values, press Enter to remove the currently focused value';
  }
};

var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
  var value = context.value;

  if (!value) return;
  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return 'option ' + value + ', deselected.';
    case 'select-option':
      return 'option ' + value + ', selected.';
  }
};

var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return 'value ' + getOptionLabel(focusedValue) + ' focused, ' + (selectValue.indexOf(focusedValue) + 1) + ' of ' + selectValue.length + '.';
};
var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return 'option ' + getOptionLabel(focusedOption) + ' focused, ' + (options.indexOf(focusedOption) + 1) + ' of ' + options.length + '.';
};
var resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return '' + screenReaderMessage + (inputValue ? ' for search term ' + inputValue : '') + '.';
};

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};

var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};

var getOptionValue = function getOptionValue(option) {
  return option.value;
};

var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

// ==============================
// Root Container
// ==============================

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null, // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('container', props)), {
        '--is-disabled': isDisabled,
        '--is-rtl': isRtl
      }, className)
    }, innerProps),
    children
  );
};

// ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: spacing.baseUnit / 2 + 'px ' + spacing.baseUnit * 2 + 'px',
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer = function (_Component) {
  inherits(ValueContainer, _Component);

  function ValueContainer() {
    classCallCheck(this, ValueContainer);
    return possibleConstructorReturn(this, (ValueContainer.__proto__ || Object.getPrototypeOf(ValueContainer)).apply(this, arguments));
  }

  createClass(ValueContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          cx = _props.cx,
          isMulti = _props.isMulti,
          getStyles = _props.getStyles,
          hasValue = _props.hasValue;


      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        'div',
        {
          className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('valueContainer', this.props)), {
            'value-container': true,
            'value-container--is-multi': isMulti,
            'value-container--has-value': hasValue
          }, className)
        },
        children
      );
    }
  }]);
  return ValueContainer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

// ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    {
      className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('indicatorsContainer', props)), {
        'indicators': true
      }, className)
    },
    children
  );
};

// ==============================
// Dropdown & Clear Icons
// ==============================

var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ['size']);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('svg', _extends({
    height: size,
    width: size,
    viewBox: '0 0 20 20',
    'aria-hidden': 'true',
    focusable: 'false',
    className: /*#__PURE__*/ /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])({
      display: 'inline-block',
      fill: 'currentColor',
      lineHeight: 1,
      stroke: 'currentColor',
      strokeWidth: 0
    })
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    Svg,
    _extends({ size: 20 }, props),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('path', { d: 'M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z' })
  );
};
var DownChevron = function DownChevron(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    Svg,
    _extends({ size: 20 }, props),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('path', { d: 'M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z' })
  );
};

// ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref2) {
  var isFocused = _ref2.isFocused,
      _ref2$theme = _ref2.theme,
      baseUnit = _ref2$theme.spacing.baseUnit,
      colors = _ref2$theme.colors;
  return {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',

    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    _extends({}, innerProps, {
      className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('dropdownIndicator', props)), {
        'indicator': true,
        'dropdown-indicator': true
      }, className)
    }),
    children || react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DownChevron, null)
  );
};

var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    _extends({}, innerProps, {
      className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('clearIndicator', props)), {
        'indicator': true,
        'clear-indicator': true
      }, className)
    }),
    children || react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CrossIcon, null)
  );
};

// ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref3) {
  var isDisabled = _ref3.isDisabled,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};

var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', _extends({}, innerProps, {
    className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('indicatorSeparator', props)), { 'indicator-separator': true }, className)
  }));
};

// ==============================
// Loading
// ==============================

var keyframesName = 'react-select-loading-indicator';
var keyframesInjected = false;

var loadingIndicatorCSS = function loadingIndicatorCSS(_ref4) {
  var isFocused = _ref4.isFocused,
      size = _ref4.size,
      _ref4$theme = _ref4.theme,
      colors = _ref4$theme.colors,
      baseUnit = _ref4$theme.spacing.baseUnit;
  return {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref5) {
  var color = _ref5.color,
      delay = _ref5.delay,
      offset = _ref5.offset;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
    className: /*#__PURE__*/ /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])({
      animationDuration: '1s',
      animationDelay: delay + 'ms',
      animationIterationCount: 'infinite',
      animationName: keyframesName,
      animationTimingFunction: 'ease-in-out',
      backgroundColor: color,
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    })
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isFocused = props.isFocused,
      isRtl = props.isRtl,
      colors = props.theme.colors;

  var color = isFocused ? colors.neutral80 : colors.neutral20;

  if (!keyframesInjected) {
    // eslint-disable-next-line no-unused-expressions
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["injectGlobal"])('@keyframes ', keyframesName, '{0%,80%,100%{opacity:0;}40%{opacity:1;}};');
    keyframesInjected = true;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    _extends({}, innerProps, {
      className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('loadingIndicator', props)), {
        'indicator': true,
        'loading-indicator': true
      }, className)
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoadingDot, { color: color, delay: 0, offset: isRtl }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoadingDot, { color: color, delay: 160, offset: true }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoadingDot, { color: color, delay: 320, offset: !isRtl })
  );
};
LoadingIndicator.defaultProps = { size: 4 };

var css$1 = function css$$1(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? '0 0 0 1px ' + colors.primary : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',

    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    _extends({
      ref: innerRef,
      className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('control', props)), {
        'control': true,
        'control--is-disabled': isDisabled,
        'control--is-focused': isFocused,
        'control--menu-is-open': menuIsOpen
      }, className)
    }, innerProps),
    children
  );
};

var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    {
      className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('group', props)), { 'group': true }, className)
    },
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      Heading,
      _extends({}, headingProps, {
        selectProps: selectProps,
        theme: theme,
        getStyles: getStyles,
        cx: cx
      }),
      label
    ),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'div',
      null,
      children
    )
  );
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};

var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      theme = props.theme,
      selectProps = props.selectProps,
      cleanProps = objectWithoutProperties(props, ['className', 'cx', 'getStyles', 'theme', 'selectProps']);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', _extends({
    className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('groupHeading', _extends({ theme: theme }, cleanProps))), { 'group-heading': true }, className)
  }, cleanProps));
};

var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};
var inputStyle = function inputStyle(isHidden) {
  return {
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      theme = _ref2.theme,
      selectProps = _ref2.selectProps,
      props = objectWithoutProperties(_ref2, ['className', 'cx', 'getStyles', 'innerRef', 'isHidden', 'isDisabled', 'theme', 'selectProps']);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    { className: /*#__PURE__*/ /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('input', _extends({ theme: theme }, props))) },
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_input_autosize__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
      className: cx(null, { 'input': true }, className),
      inputRef: innerRef,
      inputStyle: inputStyle(isHidden),
      disabled: isDisabled
    }, props))
  );
};

var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug
  };
};

var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};

var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};

var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    innerProps,
    children
  );
};

var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;

var MultiValueRemove = function (_Component) {
  inherits(MultiValueRemove, _Component);

  function MultiValueRemove() {
    classCallCheck(this, MultiValueRemove);
    return possibleConstructorReturn(this, (MultiValueRemove.__proto__ || Object.getPrototypeOf(MultiValueRemove)).apply(this, arguments));
  }

  createClass(MultiValueRemove, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          innerProps = _props.innerProps;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        'div',
        innerProps,
        children || react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CrossIcon, { size: 14 })
      );
    }
  }]);
  return MultiValueRemove;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var MultiValue = function (_Component2) {
  inherits(MultiValue, _Component2);

  function MultiValue() {
    classCallCheck(this, MultiValue);
    return possibleConstructorReturn(this, (MultiValue.__proto__ || Object.getPrototypeOf(MultiValue)).apply(this, arguments));
  }

  createClass(MultiValue, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          components = _props2.components,
          cx = _props2.cx,
          data = _props2.data,
          getStyles = _props2.getStyles,
          innerProps = _props2.innerProps,
          isDisabled = _props2.isDisabled,
          removeProps = _props2.removeProps,
          selectProps = _props2.selectProps;
      var Container = components.Container,
          Label = components.Label,
          Remove = components.Remove;


      var containerInnerProps = _extends({
        className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('multiValue', this.props)), {
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className)
      }, innerProps);

      var labelInnerProps = {
        className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('multiValueLabel', this.props)), {
          'multi-value__label': true
        }, className)
      };

      var removeInnerProps = _extends({
        className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('multiValueRemove', this.props)), {
          'multi-value__remove': true
        }, className)
      }, removeProps);

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        Container,
        {
          data: data,
          innerProps: containerInnerProps,
          selectProps: selectProps
        },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          Label,
          {
            data: data,
            innerProps: labelInnerProps,
            selectProps: selectProps
          },
          children
        ),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Remove, {
          data: data,
          innerProps: removeInnerProps,
          selectProps: selectProps
        })
      );
    }
  }]);
  return MultiValue;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

MultiValue.defaultProps = {
  cropWithEllipsis: true
};

var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: spacing.baseUnit * 2 + 'px ' + spacing.baseUnit * 3 + 'px',
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

    // provide some affordance on touch devices
    ':active': {
      backgroundColor: isSelected ? colors.primary : colors.primary50
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    _extends({
      ref: innerRef,
      className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('option', props)), {
        'option': true,
        'option--is-disabled': isDisabled,
        'option--is-focused': isFocused,
        'option--is-selected': isSelected
      }, className)
    }, innerProps),
    children
  );
};

var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('placeholder', props)), {
        'placeholder': true
      }, className)
    }, innerProps),
    children
  );
};

var css$2 = function css$$1(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: 'calc(100% - ' + spacing.baseUnit * 2 + 'px)',
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('singleValue', props)), {
        'single-value': true,
        'single-value--is-disabled': isDisabled
      }, className)
    }, innerProps),
    children
  );
};

var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};

var defaultComponents = function defaultComponents(props) {
  return _extends({}, components, props.components);
};

var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css$2,
  valueContainer: valueContainerCSS
};

// Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // initialize with source styles
  var styles = _extends({}, source);

  // massage in target styles
  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });

  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',

  danger: '#DE350B',
  dangerLight: '#FFBDAD',

  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};

var borderRadius = 4;
var baseUnit = 4; /* Used to calculate consistent margin/padding on elements */
var controlHeight = 38; /* The minimum height of the control */
var menuGutter = baseUnit * 2; /* The amount of space between the control and menu */

var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};

var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

var defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return count + ' result' + (count !== 1 ? 's' : '') + ' available';
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};

var instanceId = 1;

var Select = function (_Component) {
  inherits(Select, _Component);

  // Lifecycle
  // ------------------------------

  // Refs
  // ------------------------------

  // Misc. Instance Properties
  // ------------------------------

  function Select(props) {
    classCallCheck(this, Select);

    var _this = possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value;

    _this.cacheComponents = Object(memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.cacheComponents, exportedEqual).bind(_this);
    _this.cacheComponents(props.components);
    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var selectValue = cleanValue(value);
    var menuOptions = _this.buildMenuOptions(props, selectValue);

    _this.state.menuOptions = menuOptions;
    _this.state.selectValue = selectValue;
    return _this;
  } // TODO


  createClass(Select, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props,
          options = _props.options,
          value = _props.value,
          inputValue = _props.inputValue;
      // re-cache custom components

      this.cacheComponents(nextProps.components);
      // rebuild the menu options
      if (nextProps.value !== value || nextProps.options !== options || nextProps.inputValue !== inputValue) {
        var _selectValue = cleanValue(nextProps.value);
        var _menuOptions = this.buildMenuOptions(nextProps, _selectValue);
        var _focusedValue = this.getNextFocusedValue(_selectValue);
        var _focusedOption = this.getNextFocusedOption(_menuOptions.focusable);
        this.setState({ menuOptions: _menuOptions, selectValue: _selectValue, focusedOption: _focusedOption, focusedValue: _focusedValue });
      }
      // some updates should toggle the state of the input visibility
      if (this.inputIsHiddenAfterUpdate != null) {
        this.setState({
          inputIsHidden: this.inputIsHiddenAfterUpdate
        });
        delete this.inputIsHiddenAfterUpdate;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          isDisabled = _props2.isDisabled,
          menuIsOpen = _props2.menuIsOpen;
      var isFocused = this.state.isFocused;


      if (
      // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled ||
      // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }

      // scroll the focused option into view if necessary
      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
      }
      this.scrollToFocusedOptionOnUpdate = false;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    }
  }, {
    key: 'onMenuOpen',

    // ==============================
    // Consumer Handlers
    // ==============================

    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: 'onMenuClose',
    value: function onMenuClose() {
      var _props3 = this.props,
          isSearchable = _props3.isSearchable,
          isMulti = _props3.isMulti;

      this.announceAriaLiveContext({
        event: 'input',
        context: { isSearchable: isSearchable, isMulti: isMulti }
      });
      this.onInputChange('', { action: 'menu-close' });
      this.props.onMenuClose();
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    }

    // ==============================
    // Methods
    // ==============================

  }, {
    key: 'focusInput',
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: 'blurInput',
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    }

    // aliased for consumers

  }, {
    key: 'openMenu',
    value: function openMenu(focusOption) {
      var _state = this.state,
          menuOptions = _state.menuOptions,
          selectValue = _state.selectValue;
      var isMulti = this.props.isMulti;

      var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

      if (!isMulti) {
        var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);
        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.inputIsHiddenAfterUpdate = false;

      this.onMenuOpen();
      this.setState({
        focusedValue: null,
        focusedOption: menuOptions.focusable[openAtIndex]
      });

      this.announceAriaLiveContext({ event: 'menu' });
    }
  }, {
    key: 'focusValue',
    value: function focusValue(direction) {
      var _props4 = this.props,
          isMulti = _props4.isMulti,
          isSearchable = _props4.isSearchable;
      var _state2 = this.state,
          selectValue = _state2.selectValue,
          focusedValue = _state2.focusedValue;

      // Only multiselects support value focusing

      if (!isMulti) return;

      this.setState({
        focusedOption: null
      });

      var focusedIndex = selectValue.indexOf(focusedValue);
      if (!focusedValue) {
        focusedIndex = -1;
        this.announceAriaLiveContext({ event: 'value' });
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }
          break;
        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }
          break;
      }

      if (nextFocus === -1) {
        this.announceAriaLiveContext({
          event: 'input',
          context: { isSearchable: isSearchable, isMulti: isMulti }
        });
      }

      this.setState({
        inputIsHidden: nextFocus === -1 ? false : true,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: 'focusOption',
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var _state3 = this.state,
          focusedOption = _state3.focusedOption,
          menuOptions = _state3.menuOptions;

      var options = menuOptions.focusable;

      if (!options.length) return;
      var nextFocus = 0; // handles 'first'
      var focusedIndex = options.indexOf(focusedOption);
      if (!focusedOption) {
        focusedIndex = -1;
        this.announceAriaLiveContext({ event: 'menu' });
      }

      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }
      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
    }
  }, {
    key: 'getTheme',


    // ==============================
    // Getters
    // ==============================

    value: function getTheme() {
      // Use the default theme if there are no customizations.
      if (!this.props.theme) {
        return defaultTheme;
      }
      // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.
      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      }
      // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.
      return _extends({}, defaultTheme, this.props.theme);
    }
  }, {
    key: 'getCommonProps',
    value: function getCommonProps() {
      var clearValue = this.clearValue,
          getStyles = this.getStyles,
          setValue = this.setValue,
          selectOption = this.selectOption,
          props = this.props;
      var classNamePrefix = props.classNamePrefix,
          isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var selectValue = this.state.selectValue;

      var hasValue = this.hasValue();
      var getValue = function getValue() {
        return selectValue;
      };
      var cxPrefix = classNamePrefix;

      var cx = classNames.bind(null, cxPrefix);
      return {
        cx: cx,
        clearValue: clearValue,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        setValue: setValue,
        selectProps: props,
        theme: this.getTheme()
      };
    }
  }, {
    key: 'getNextFocusedValue',
    value: function getNextFocusedValue(nextSelectValue) {
      if (this.clearFocusValueOnUpdate) {
        this.clearFocusValueOnUpdate = false;
        return null;
      }
      var _state4 = this.state,
          focusedValue = _state4.focusedValue,
          lastSelectValue = _state4.selectValue;

      var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
      if (lastFocusedIndex > -1) {
        var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
        if (nextFocusedIndex > -1) {
          // the focused value is still in the selectValue, return it
          return focusedValue;
        } else if (lastFocusedIndex < nextSelectValue.length) {
          // the focusedValue is not present in the next selectValue array by
          // reference, so return the new value at the same index
          return nextSelectValue[lastFocusedIndex];
        }
      }
      return null;
    }
  }, {
    key: 'getNextFocusedOption',
    value: function getNextFocusedOption(options) {
      var lastFocusedOption = this.state.focusedOption;

      return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
    }

    // ==============================
    // Helpers
    // ==============================

  }, {
    key: 'hasValue',
    value: function hasValue() {
      var selectValue = this.state.selectValue;

      return selectValue.length > 0;
    }
  }, {
    key: 'hasOptions',
    value: function hasOptions() {
      return !!this.state.menuOptions.render.length;
    }
  }, {
    key: 'countOptions',
    value: function countOptions() {
      return this.state.menuOptions.focusable.length;
    }
  }, {
    key: 'isClearable',
    value: function isClearable() {
      var _props5 = this.props,
          isClearable = _props5.isClearable,
          isMulti = _props5.isMulti;

      // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;

      return isClearable;
    }
  }, {
    key: 'isOptionDisabled',
    value: function isOptionDisabled$$1(option, selectValue) {
      return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
    }
  }, {
    key: 'isOptionSelected',
    value: function isOptionSelected(option, selectValue) {
      var _this2 = this;

      if (selectValue.indexOf(option) > -1) return true;
      if (typeof this.props.isOptionSelected === 'function') {
        return this.props.isOptionSelected(option, selectValue);
      }
      var candidate = this.getOptionValue(option);
      return selectValue.some(function (i) {
        return _this2.getOptionValue(i) === candidate;
      });
    }
  }, {
    key: 'filterOption',
    value: function filterOption(option, inputValue) {
      return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
    }
  }, {
    key: 'formatOptionLabel',
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var _inputValue = this.props.inputValue;
        var _selectValue2 = this.state.selectValue;

        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: _inputValue,
          selectValue: _selectValue2
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: 'formatGroupLabel',
    value: function formatGroupLabel$$1(data) {
      return this.props.formatGroupLabel(data);
    }

    // ==============================
    // Mouse Handlers
    // ==============================

  }, {
    key: 'startListeningComposition',


    // ==============================
    // Composition Handlers
    // ==============================

    value: function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: 'stopListeningComposition',
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: 'startListeningToTouch',


    // ==============================
    // Touch Handlers
    // ==============================

    value: function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: 'stopListeningToTouch',
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }

    // ==============================
    // Focus Handlers
    // ==============================

    // ==============================
    // Keyboard Handlers
    // ==============================

  }, {
    key: 'buildMenuOptions',


    // ==============================
    // Menu Options
    // ==============================

    value: function buildMenuOptions(props, selectValue) {
      var _this3 = this;

      var _props$inputValue = props.inputValue,
          inputValue = _props$inputValue === undefined ? '' : _props$inputValue,
          options = props.options;


      var toOption = function toOption(option, id) {
        var isDisabled = _this3.isOptionDisabled(option, selectValue);
        var isSelected = _this3.isOptionSelected(option, selectValue);
        var label = _this3.getOptionLabel(option);
        var value = _this3.getOptionValue(option);

        if (_this3.shouldHideSelectedOptions() && isSelected || !_this3.filterOption({ label: label, value: value, data: option }, inputValue)) {
          return;
        }

        var onHover = isDisabled ? undefined : function () {
          return _this3.onOptionHover(option);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this3.selectOption(option);
        };
        var optionId = _this3.getElementId('option') + '-' + id;

        return {
          innerProps: {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            role: 'option',
            tabIndex: -1
          },
          data: option,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: 'option',
          value: value
        };
      };

      return options.reduce(function (acc, item, itemIndex) {
        if (item.options) {
          // TODO needs a tidier implementation
          if (!_this3.hasGroups) _this3.hasGroups = true;

          var items = item.options;

          var children = items.map(function (child, i) {
            var option = toOption(child, itemIndex + '-' + i);
            if (option && !option.isDisabled) acc.focusable.push(child);
            return option;
          }).filter(Boolean);
          if (children.length) {
            var groupId = _this3.getElementId('group') + '-' + itemIndex;
            acc.render.push({
              type: 'group',
              key: groupId,
              data: item,
              options: children
            });
          }
        } else {
          var option = toOption(item, '' + itemIndex);
          if (option) {
            acc.render.push(option);
            if (!option.isDisabled) acc.focusable.push(item);
          }
        }
        return acc;
      }, { render: [], focusable: [] });
    }

    // ==============================
    // Renderers
    // ==============================

  }, {
    key: 'constructAriaLiveMessage',
    value: function constructAriaLiveMessage() {
      var _state5 = this.state,
          ariaLiveContext = _state5.ariaLiveContext,
          selectValue = _state5.selectValue,
          focusedValue = _state5.focusedValue,
          focusedOption = _state5.focusedOption;
      var _props6 = this.props,
          options = _props6.options,
          menuIsOpen = _props6.menuIsOpen,
          inputValue = _props6.inputValue,
          screenReaderStatus = _props6.screenReaderStatus;

      // An aria live message representing the currently focused value in the select.

      var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
        focusedValue: focusedValue,
        getOptionLabel: this.getOptionLabel,
        selectValue: selectValue
      }) : '';
      // An aria live message representing the currently focused option in the select.
      var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
        focusedOption: focusedOption,
        getOptionLabel: this.getOptionLabel,
        options: options
      }) : '';
      // An aria live message representing the set of focusable results and current searchterm/inputvalue.
      var resultsMsg = resultsAriaMessage({
        inputValue: inputValue,
        screenReaderMessage: screenReaderStatus({ count: this.countOptions() })
      });

      return focusedValueMsg + ' ' + focusedOptionMsg + ' ' + resultsMsg + ' ' + ariaLiveContext;
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _props7 = this.props,
          isDisabled = _props7.isDisabled,
          isSearchable = _props7.isSearchable,
          inputId = _props7.inputId,
          inputValue = _props7.inputValue,
          tabIndex = _props7.tabIndex;
      var Input = this.components.Input;
      var inputIsHidden = this.state.inputIsHidden;


      var id = inputId || this.getElementId('input');

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DummyInput, {
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop,
          onFocus: this.onInputFocus,
          readOnly: true,
          disabled: isDisabled,
          tabIndex: tabIndex,
          value: ''
        });
      }

      // aria attributes makes the JSX "noisy", separated for clarity
      var ariaAttributes = {
        'aria-autocomplete': 'list',
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby']
      };

      var _commonProps = this.commonProps,
          cx = _commonProps.cx,
          theme = _commonProps.theme,
          selectProps = _commonProps.selectProps;


      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, _extends({
        autoCapitalize: 'none',
        autoComplete: 'off',
        autoCorrect: 'off',
        cx: cx,
        getStyles: this.getStyles,
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        selectProps: selectProps,
        spellCheck: 'false',
        tabIndex: tabIndex,
        theme: theme,
        type: 'text',
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: 'renderPlaceholderOrValue',
    value: function renderPlaceholderOrValue() {
      var _this4 = this;

      var _components = this.components,
          MultiValue = _components.MultiValue,
          MultiValueContainer = _components.MultiValueContainer,
          MultiValueLabel = _components.MultiValueLabel,
          MultiValueRemove = _components.MultiValueRemove,
          SingleValue = _components.SingleValue,
          Placeholder = _components.Placeholder;
      var commonProps = this.commonProps;
      var _props8 = this.props,
          controlShouldRenderValue = _props8.controlShouldRenderValue,
          isDisabled = _props8.isDisabled,
          isMulti = _props8.isMulti,
          inputValue = _props8.inputValue,
          placeholder = _props8.placeholder;
      var _state6 = this.state,
          selectValue = _state6.selectValue,
          focusedValue = _state6.focusedValue,
          isFocused = _state6.isFocused;


      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          Placeholder,
          _extends({}, commonProps, {
            key: 'placeholder',
            isDisabled: isDisabled,
            isFocused: isFocused
          }),
          placeholder
        );
      }

      if (isMulti) {
        var selectValues = selectValue.map(function (opt) {
          var isFocused = opt === focusedValue;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            MultiValue,
            _extends({}, commonProps, {
              components: {
                Container: MultiValueContainer,
                Label: MultiValueLabel,
                Remove: MultiValueRemove
              },
              isFocused: isFocused,
              isDisabled: isDisabled,
              key: _this4.getOptionValue(opt),
              removeProps: {
                onClick: function onClick() {
                  return _this4.removeValue(opt);
                },
                onTouchEnd: function onTouchEnd() {
                  return _this4.removeValue(opt);
                },
                onMouseDown: function onMouseDown(e) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              },
              data: opt
            }),
            _this4.formatOptionLabel(opt, 'value')
          );
        });
        return selectValues;
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        SingleValue,
        _extends({}, commonProps, { data: singleValue, isDisabled: isDisabled }),
        this.formatOptionLabel(singleValue, 'value')
      );
    }
  }, {
    key: 'renderClearIndicator',
    value: function renderClearIndicator() {
      var ClearIndicator = this.components.ClearIndicator;
      var commonProps = this.commonProps;
      var _props9 = this.props,
          isDisabled = _props9.isDisabled,
          isLoading = _props9.isLoading;
      var isFocused = this.state.isFocused;


      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ClearIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: 'renderLoadingIndicator',
    value: function renderLoadingIndicator() {
      var LoadingIndicator = this.components.LoadingIndicator;
      var commonProps = this.commonProps;
      var _props10 = this.props,
          isDisabled = _props10.isDisabled,
          isLoading = _props10.isLoading;
      var isFocused = this.state.isFocused;


      if (!LoadingIndicator || !isLoading) return null;

      var innerProps = { 'aria-hidden': 'true' };
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoadingIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: 'renderIndicatorSeparator',
    value: function renderIndicatorSeparator() {
      var _components2 = this.components,
          DropdownIndicator = _components2.DropdownIndicator,
          IndicatorSeparator = _components2.IndicatorSeparator;

      // separator doesn't make sense without the dropdown indicator

      if (!DropdownIndicator || !IndicatorSeparator) return null;

      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;


      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IndicatorSeparator, _extends({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: 'renderDropdownIndicator',
    value: function renderDropdownIndicator() {
      var DropdownIndicator = this.components.DropdownIndicator;

      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;


      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropdownIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      var _this5 = this;

      var _components3 = this.components,
          Group = _components3.Group,
          GroupHeading = _components3.GroupHeading,
          Menu$$1 = _components3.Menu,
          MenuList$$1 = _components3.MenuList,
          MenuPortal$$1 = _components3.MenuPortal,
          LoadingMessage$$1 = _components3.LoadingMessage,
          NoOptionsMessage$$1 = _components3.NoOptionsMessage,
          Option = _components3.Option;
      var commonProps = this.commonProps;
      var _state7 = this.state,
          focusedOption = _state7.focusedOption,
          menuOptions = _state7.menuOptions;
      var _props11 = this.props,
          captureMenuScroll = _props11.captureMenuScroll,
          inputValue = _props11.inputValue,
          isLoading = _props11.isLoading,
          loadingMessage = _props11.loadingMessage,
          minMenuHeight = _props11.minMenuHeight,
          maxMenuHeight = _props11.maxMenuHeight,
          menuIsOpen = _props11.menuIsOpen,
          menuPlacement = _props11.menuPlacement,
          menuPosition = _props11.menuPosition,
          menuPortalTarget = _props11.menuPortalTarget,
          menuShouldBlockScroll = _props11.menuShouldBlockScroll,
          menuShouldScrollIntoView = _props11.menuShouldScrollIntoView,
          noOptionsMessage = _props11.noOptionsMessage,
          onMenuScrollToTop = _props11.onMenuScrollToTop,
          onMenuScrollToBottom = _props11.onMenuScrollToBottom;


      if (!menuIsOpen) return null;

      // TODO: Internal Option Type here
      var render = function render(props) {
        // for performance, the menu options in state aren't changed when the
        // focused option changes so we calculate additional props based on that
        var isFocused = focusedOption === props.data;
        props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          Option,
          _extends({}, commonProps, props, { isFocused: isFocused }),
          _this5.formatOptionLabel(props.data, 'menu')
        );
      };

      var menuUI = void 0;

      if (this.hasOptions()) {
        menuUI = menuOptions.render.map(function (item) {
          if (item.type === 'group') {
            var type = item.type,
                group = objectWithoutProperties(item, ['type']);

            var headingId = item.key + '-heading';

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              Group,
              _extends({}, commonProps, group, {
                Heading: GroupHeading,
                headingProps: {
                  id: headingId
                },
                label: _this5.formatGroupLabel(item.data)
              }),
              item.options.map(function (option) {
                return render(option);
              })
            );
          } else if (item.type === 'option') {
            return render(item);
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({ inputValue: inputValue });
        if (message === null) return null;
        menuUI = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          LoadingMessage$$1,
          commonProps,
          message
        );
      } else {
        var _message = noOptionsMessage({ inputValue: inputValue });
        if (_message === null) return null;
        menuUI = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          NoOptionsMessage$$1,
          commonProps,
          _message
        );
      }
      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };

      var menuElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        MenuPlacer,
        _extends({}, commonProps, menuPlacementProps),
        function (_ref2) {
          var ref = _ref2.ref,
              _ref2$placerProps = _ref2.placerProps,
              placement = _ref2$placerProps.placement,
              maxHeight = _ref2$placerProps.maxHeight;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            Menu$$1,
            _extends({}, commonProps, menuPlacementProps, {
              innerRef: ref,
              innerProps: {
                onMouseDown: _this5.onMenuMouseDown,
                onMouseMove: _this5.onMenuMouseMove
              },
              isLoading: isLoading,
              placement: placement
            }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              ScrollCaptorSwitch,
              {
                isEnabled: captureMenuScroll,
                onTopArrive: onMenuScrollToTop,
                onBottomArrive: onMenuScrollToBottom
              },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                ScrollBlock,
                { isEnabled: menuShouldBlockScroll },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  MenuList$$1,
                  _extends({}, commonProps, {
                    innerRef: _this5.getMenuListRef,
                    isLoading: isLoading,
                    maxHeight: maxHeight
                  }),
                  menuUI
                )
              )
            )
          );
        }
      );

      // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`
      return menuPortalTarget || menuPosition === 'fixed' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        MenuPortal$$1,
        _extends({}, commonProps, {
          appendTo: menuPortalTarget,
          controlElement: this.controlRef,
          menuPlacement: menuPlacement,
          menuPosition: menuPosition
        }),
        menuElement
      ) : menuElement;
    }
  }, {
    key: 'renderFormField',
    value: function renderFormField() {
      var _this6 = this;

      var _props12 = this.props,
          delimiter = _props12.delimiter,
          isDisabled = _props12.isDisabled,
          isMulti = _props12.isMulti,
          name = _props12.name;
      var selectValue = this.state.selectValue;


      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var _value = selectValue.map(function (opt) {
            return _this6.getOptionValue(opt);
          }).join(delimiter);
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('input', { name: name, type: 'hidden', value: _value });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('input', {
              key: 'i-' + i,
              name: name,
              type: 'hidden',
              value: _this6.getOptionValue(opt)
            });
          }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('input', { name: name, type: 'hidden' });

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            null,
            input
          );
        }
      } else {
        var _value2 = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('input', { name: name, type: 'hidden', value: _value2 });
      }
    }
  }, {
    key: 'renderLiveRegion',
    value: function renderLiveRegion() {
      if (!this.state.isFocused) return null;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        A11yText,
        { 'aria-live': 'assertive' },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'p',
          { id: 'aria-selection-event' },
          '\xA0',
          this.state.ariaLiveSelection
        ),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'p',
          { id: 'aria-context' },
          '\xA0',
          this.constructAriaLiveMessage()
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _components4 = this.components,
          Control = _components4.Control,
          IndicatorsContainer = _components4.IndicatorsContainer,
          SelectContainer = _components4.SelectContainer,
          ValueContainer = _components4.ValueContainer;
      var _props13 = this.props,
          className = _props13.className,
          id = _props13.id,
          isDisabled = _props13.isDisabled,
          menuIsOpen = _props13.menuIsOpen;
      var isFocused = this.state.isFocused;


      var commonProps = this.commonProps = this.getCommonProps();

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        SelectContainer,
        _extends({}, commonProps, {
          className: className,
          innerProps: {
            id: id,
            onKeyDown: this.onKeyDown
          },
          isDisabled: isDisabled,
          isFocused: isFocused
        }),
        this.renderLiveRegion(),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          Control,
          _extends({}, commonProps, {
            innerRef: this.getControlRef,
            innerProps: {
              onMouseDown: this.onControlMouseDown,
              onTouchEnd: this.onControlTouchEnd
            },
            isDisabled: isDisabled,
            isFocused: isFocused,
            menuIsOpen: menuIsOpen
          }),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ValueContainer,
            _extends({}, commonProps, { isDisabled: isDisabled }),
            this.renderPlaceholderOrValue(),
            this.renderInput()
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            IndicatorsContainer,
            _extends({}, commonProps, { isDisabled: isDisabled }),
            this.renderClearIndicator(),
            this.renderLoadingIndicator(),
            this.renderIndicatorSeparator(),
            this.renderDropdownIndicator()
          )
        ),
        this.renderMenu(),
        this.renderFormField()
      );
    }
  }]);
  return Select;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Select.defaultProps = defaultProps;

var _initialiseProps = function _initialiseProps() {
  var _this7 = this;

  this.state = {
    ariaLiveSelection: '',
    ariaLiveContext: '',
    focusedOption: null,
    focusedValue: null,
    inputIsHidden: false,
    isFocused: false,
    isComposing: false,
    menuOptions: { render: [], focusable: [] },
    selectValue: []
  };
  this.blockOptionHover = false;
  this.clearFocusValueOnUpdate = false;
  this.hasGroups = false;
  this.initialTouchX = 0;
  this.initialTouchY = 0;
  this.instancePrefix = '';
  this.openAfterFocus = false;
  this.scrollToFocusedOptionOnUpdate = false;
  this.controlRef = null;

  this.getControlRef = function (ref) {
    _this7.controlRef = ref;
  };

  this.focusedOptionRef = null;

  this.getFocusedOptionRef = function (ref) {
    _this7.focusedOptionRef = ref;
  };

  this.menuListRef = null;

  this.getMenuListRef = function (ref) {
    _this7.menuListRef = ref;
  };

  this.inputRef = null;

  this.getInputRef = function (ref) {
    _this7.inputRef = ref;
  };

  this.cacheComponents = function (components$$1) {
    _this7.components = defaultComponents({ components: components$$1 });
  };

  this.focus = this.focusInput;
  this.blur = this.blurInput;

  this.onChange = function (newValue, actionMeta) {
    var _props14 = _this7.props,
        onChange = _props14.onChange,
        name = _props14.name;

    onChange(newValue, _extends({}, actionMeta, { name: name }));
  };

  this.setValue = function (newValue) {
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set-value';
    var option = arguments[2];
    var _props15 = _this7.props,
        closeMenuOnSelect = _props15.closeMenuOnSelect,
        isMulti = _props15.isMulti;

    _this7.onInputChange('', { action: 'set-value' });
    if (closeMenuOnSelect) {
      _this7.inputIsHiddenAfterUpdate = !isMulti;
      _this7.onMenuClose();
    }
    // when the select value should change, we should reset focusedValue
    _this7.clearFocusValueOnUpdate = true;
    _this7.onChange(newValue, { action: action, option: option });
  };

  this.selectOption = function (newValue) {
    var _props16 = _this7.props,
        blurInputOnSelect = _props16.blurInputOnSelect,
        isMulti = _props16.isMulti;


    if (isMulti) {
      var _selectValue3 = _this7.state.selectValue;

      if (_this7.isOptionSelected(newValue, _selectValue3)) {
        var candidate = _this7.getOptionValue(newValue);
        _this7.setValue(_selectValue3.filter(function (i) {
          return _this7.getOptionValue(i) !== candidate;
        }), 'deselect-option', newValue);
        _this7.announceAriaLiveSelection({
          event: 'deselect-option',
          context: { value: _this7.getOptionLabel(newValue) }
        });
      } else {
        _this7.setValue([].concat(toConsumableArray(_selectValue3), [newValue]), 'select-option', newValue);
        _this7.announceAriaLiveSelection({
          event: 'select-option',
          context: { value: _this7.getOptionLabel(newValue) }
        });
      }
    } else {
      _this7.setValue(newValue, 'select-option');
      _this7.announceAriaLiveSelection({
        event: 'select-option',
        context: { value: _this7.getOptionLabel(newValue) }
      });
    }

    if (blurInputOnSelect) {
      _this7.blurInput();
    }
  };

  this.removeValue = function (removedValue) {
    var selectValue = _this7.state.selectValue;

    var candidate = _this7.getOptionValue(removedValue);
    _this7.onChange(selectValue.filter(function (i) {
      return _this7.getOptionValue(i) !== candidate;
    }), {
      action: 'remove-value',
      removedValue: removedValue
    });
    _this7.announceAriaLiveSelection({
      event: 'remove-value',
      context: {
        value: removedValue ? _this7.getOptionLabel(removedValue) : undefined
      }
    });
    _this7.focusInput();
  };

  this.clearValue = function () {
    var isMulti = _this7.props.isMulti;

    _this7.onChange(isMulti ? [] : null, { action: 'clear' });
  };

  this.popValue = function () {
    var selectValue = _this7.state.selectValue;

    var lastSelectedValue = selectValue[selectValue.length - 1];
    _this7.announceAriaLiveSelection({
      event: 'pop-value',
      context: {
        value: lastSelectedValue ? _this7.getOptionLabel(lastSelectedValue) : undefined
      }
    });
    _this7.onChange(selectValue.slice(0, selectValue.length - 1), {
      action: 'pop-value',
      removedValue: lastSelectedValue
    });
  };

  this.getOptionLabel = function (data) {
    return _this7.props.getOptionLabel(data);
  };

  this.getOptionValue = function (data) {
    return _this7.props.getOptionValue(data);
  };

  this.getStyles = function (key, props) {
    var base = defaultStyles[key](props);
    base.boxSizing = 'border-box';
    var custom = _this7.props.styles[key];
    return custom ? custom(base, props) : base;
  };

  this.getElementId = function (element) {
    return _this7.instancePrefix + '-' + element;
  };

  this.getActiveDescendentId = function () {
    var menuIsOpen = _this7.props.menuIsOpen;
    var _state8 = _this7.state,
        menuOptions = _state8.menuOptions,
        focusedOption = _state8.focusedOption;


    if (!focusedOption || !menuIsOpen) return undefined;

    var index = menuOptions.focusable.indexOf(focusedOption);
    var option = menuOptions.render[index];

    return option && option.key;
  };

  this.announceAriaLiveSelection = function (_ref3) {
    var event = _ref3.event,
        context = _ref3.context;

    _this7.setState({
      ariaLiveSelection: valueEventAriaMessage(event, context)
    });
  };

  this.announceAriaLiveContext = function (_ref4) {
    var event = _ref4.event,
        context = _ref4.context;

    _this7.setState({
      ariaLiveContext: instructionsAriaMessage(event, _extends({}, context, {
        label: _this7.props['aria-label']
      }))
    });
  };

  this.onMenuMouseDown = function (event) {
    if (event.button !== 0) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    _this7.focusInput();
  };

  this.onMenuMouseMove = function (event) {
    _this7.blockOptionHover = false;
  };

  this.onControlMouseDown = function (event) {
    var openMenuOnClick = _this7.props.openMenuOnClick;

    if (!_this7.state.isFocused) {
      if (openMenuOnClick) {
        _this7.openAfterFocus = true;
      }
      _this7.focusInput();
    } else if (!_this7.props.menuIsOpen) {
      _this7.openMenu('first');
    } else {
      // $FlowFixMe HTMLElement type does not have tagName property
      if (event.target.tagName !== 'INPUT') {
        _this7.onMenuClose();
      }
    }
    // $FlowFixMe HTMLElement type does not have tagName property
    if (event.target.tagName !== 'INPUT') {
      event.preventDefault();
    }
  };

  this.onDropdownIndicatorMouseDown = function (event) {
    // ignore mouse events that weren't triggered by the primary button
    if (event && event.type === 'mousedown' && event.button !== 0) {
      return;
    }
    if (_this7.props.isDisabled) return;
    var _props17 = _this7.props,
        isMulti = _props17.isMulti,
        menuIsOpen = _props17.menuIsOpen;

    _this7.focusInput();
    if (menuIsOpen) {
      _this7.inputIsHiddenAfterUpdate = !isMulti;
      _this7.onMenuClose();
    } else {
      _this7.openMenu('first');
    }
    event.preventDefault();
    event.stopPropagation();
  };

  this.onClearIndicatorMouseDown = function (event) {
    // ignore mouse events that weren't triggered by the primary button
    if (event && event.type === 'mousedown' && event.button !== 0) {
      return;
    }
    _this7.clearValue();
    event.stopPropagation();
    _this7.openAfterFocus = false;
    setTimeout(function () {
      return _this7.focusInput();
    });
  };

  this.onScroll = function (event) {
    if (typeof _this7.props.closeMenuOnScroll === 'boolean') {
      if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
        _this7.props.onMenuClose();
      }
    } else if (typeof _this7.props.closeMenuOnScroll === 'function') {
      if (_this7.props.closeMenuOnScroll(event)) {
        _this7.props.onMenuClose();
      }
    }
  };

  this.onCompositionStart = function () {
    _this7.setState({
      isComposing: true
    });
  };

  this.onCompositionEnd = function () {
    _this7.setState({
      isComposing: false
    });
  };

  this.onTouchStart = function (_ref5) {
    var touches = _ref5.touches;

    var touch = touches.item(0);
    if (!touch) {
      return;
    }

    _this7.initialTouchX = touch.clientX;
    _this7.initialTouchY = touch.clientY;
    _this7.userIsDragging = false;
  };

  this.onTouchMove = function (_ref6) {
    var touches = _ref6.touches;

    var touch = touches.item(0);
    if (!touch) {
      return;
    }

    var deltaX = Math.abs(touch.clientX - _this7.initialTouchX);
    var deltaY = Math.abs(touch.clientY - _this7.initialTouchY);
    var moveThreshold = 5;

    _this7.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
  };

  this.onTouchEnd = function (event) {
    if (_this7.userIsDragging) return;

    // type cast the EventTarget
    var target = event.target;

    // close the menu if the user taps outside
    if (_this7.controlRef && !_this7.controlRef.contains(target) && _this7.menuListRef && !_this7.menuListRef.contains(target)) {
      _this7.blurInput();
    }

    // reset move vars
    _this7.initialTouchX = 0;
    _this7.initialTouchY = 0;
  };

  this.onControlTouchEnd = function (event) {
    if (_this7.userIsDragging) return;

    _this7.onControlMouseDown(event);
  };

  this.onClearIndicatorTouchEnd = function (event) {
    if (_this7.userIsDragging) return;

    _this7.onClearIndicatorMouseDown(event);
  };

  this.onDropdownIndicatorTouchEnd = function (event) {
    if (_this7.userIsDragging) return;

    _this7.onDropdownIndicatorMouseDown(event);
  };

  this.handleInputChange = function (event) {
    var inputValue = event.currentTarget.value;
    _this7.inputIsHiddenAfterUpdate = false;
    _this7.onInputChange(inputValue, { action: 'input-change' });
    _this7.onMenuOpen();
  };

  this.onInputFocus = function (event) {
    var _props18 = _this7.props,
        isSearchable = _props18.isSearchable,
        isMulti = _props18.isMulti;

    if (_this7.props.onFocus) {
      _this7.props.onFocus(event);
    }
    _this7.inputIsHiddenAfterUpdate = false;
    _this7.announceAriaLiveContext({
      event: 'input',
      context: { isSearchable: isSearchable, isMulti: isMulti }
    });
    _this7.setState({
      isFocused: true
    });
    if (_this7.openAfterFocus || _this7.props.openMenuOnFocus) {
      _this7.openMenu('first');
    }
    _this7.openAfterFocus = false;
  };

  this.onInputBlur = function (event) {
    if (_this7.menuListRef && _this7.menuListRef.contains(document.activeElement)) {
      _this7.inputRef.focus();
      return;
    }
    if (_this7.props.onBlur) {
      _this7.props.onBlur(event);
    }
    _this7.onInputChange('', { action: 'input-blur' });
    _this7.onMenuClose();
    _this7.setState({
      focusedValue: null,
      isFocused: false
    });
  };

  this.onOptionHover = function (focusedOption) {
    if (_this7.blockOptionHover || _this7.state.focusedOption === focusedOption) {
      return;
    }
    _this7.setState({ focusedOption: focusedOption });
  };

  this.shouldHideSelectedOptions = function () {
    var _props19 = _this7.props,
        hideSelectedOptions = _props19.hideSelectedOptions,
        isMulti = _props19.isMulti;

    if (hideSelectedOptions === undefined) return isMulti;
    return hideSelectedOptions;
  };

  this.onKeyDown = function (event) {
    var _props20 = _this7.props,
        isMulti = _props20.isMulti,
        backspaceRemovesValue = _props20.backspaceRemovesValue,
        escapeClearsValue = _props20.escapeClearsValue,
        inputValue = _props20.inputValue,
        isClearable = _props20.isClearable,
        isDisabled = _props20.isDisabled,
        menuIsOpen = _props20.menuIsOpen,
        onKeyDown = _props20.onKeyDown,
        tabSelectsValue = _props20.tabSelectsValue,
        openMenuOnFocus = _props20.openMenuOnFocus;
    var _state9 = _this7.state,
        isComposing = _state9.isComposing,
        focusedOption = _state9.focusedOption,
        focusedValue = _state9.focusedValue,
        selectValue = _state9.selectValue;


    if (isDisabled) return;

    if (typeof onKeyDown === 'function') {
      onKeyDown(event);
      if (event.defaultPrevented) {
        return;
      }
    }

    // Block option hover events when the user has just pressed a key
    _this7.blockOptionHover = true;
    switch (event.key) {
      case 'ArrowLeft':
        if (!isMulti || inputValue) return;
        _this7.focusValue('previous');
        break;
      case 'ArrowRight':
        if (!isMulti || inputValue) return;
        _this7.focusValue('next');
        break;
      case 'Delete':
      case 'Backspace':
        if (inputValue) return;
        if (focusedValue) {
          _this7.removeValue(focusedValue);
        } else {
          if (!backspaceRemovesValue) return;
          if (isMulti) {
            _this7.popValue();
          } else if (isClearable) {
            _this7.clearValue();
          }
        }
        break;
      case 'Tab':
        if (isComposing) return;

        if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption ||
        // don't capture the event if the menu opens on focus and the focused
        // option is already selected; it breaks the flow of navigation
        openMenuOnFocus && _this7.isOptionSelected(focusedOption, selectValue)) {
          return;
        }
        _this7.selectOption(focusedOption);
        break;
      case 'Enter':
        if (menuIsOpen) {
          if (!focusedOption) return;
          if (isComposing) return;
          _this7.selectOption(focusedOption);
        } else {
          _this7.focusOption('first');
        }
        break;
      case 'Escape':
        if (menuIsOpen) {
          _this7.inputIsHiddenAfterUpdate = false;
          _this7.onInputChange('', { action: 'menu-close' });
          _this7.onMenuClose();
        } else if (isClearable && escapeClearsValue) {
          _this7.clearValue();
        }
        break;
      case ' ':
        // space
        if (inputValue) {
          return;
        }
        if (!menuIsOpen) {
          _this7.openMenu('first');
          break;
        }
        if (!focusedOption) return;
        _this7.selectOption(focusedOption);
        break;
      case 'ArrowUp':
        if (menuIsOpen) {
          _this7.focusOption('up');
        } else {
          _this7.openMenu('last');
        }
        break;
      case 'ArrowDown':
        if (menuIsOpen) {
          _this7.focusOption('down');
        } else {
          _this7.openMenu('first');
        }
        break;
      case 'PageUp':
        if (!menuIsOpen) return;
        _this7.focusOption('pageup');
        break;
      case 'PageDown':
        if (!menuIsOpen) return;
        _this7.focusOption('pagedown');
        break;
      case 'Home':
        if (!menuIsOpen) return;
        _this7.focusOption('first');
        break;
      case 'End':
        if (!menuIsOpen) return;
        _this7.focusOption('last');
        break;
      default:
        return;
    }
    event.preventDefault();
  };
};

var defaultProps$1 = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    inherits(StateManager, _Component);

    function StateManager() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, StateManager);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = StateManager.__proto__ || Object.getPrototypeOf(StateManager)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      }, _this.onChange = function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);
        _this.setState({ value: value });
      }, _this.onInputChange = function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);
        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      }, _this.onMenuOpen = function () {
        _this.callProp('onMenuOpen');
        _this.setState({ menuIsOpen: true });
      }, _this.onMenuClose = function () {
        _this.callProp('onMenuClose');
        _this.setState({ menuIsOpen: false });
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(StateManager, [{
      key: 'focus',
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: 'blur',
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: 'getProp',
      value: function getProp(key) {
        return this.props[key] !== undefined ? this.props[key] : this.state[key];
      }
    }, {
      key: 'callProp',
      value: function callProp(name) {
        if (typeof this.props[name] === 'function') {
          var _props;

          for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_props = this.props)[name].apply(_props, toConsumableArray(args));
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectComponent, _extends({}, this.props, {
          ref: function ref(_ref2) {
            _this2.select = _ref2;
          },
          inputValue: this.getProp('inputValue'),
          menuIsOpen: this.getProp('menuIsOpen'),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp('value')
        }));
      }
    }]);
    return StateManager;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _class.defaultProps = defaultProps$1, _temp2;
};

var defaultProps$2 = {
  cacheOptions: false,
  defaultOptions: false
};

var makeAsyncSelect = function makeAsyncSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    inherits(Async, _Component);

    function Async(props) {
      classCallCheck(this, Async);

      var _this = possibleConstructorReturn(this, (Async.__proto__ || Object.getPrototypeOf(Async)).call(this));

      _this.mounted = false;
      _this.optionsCache = {};

      _this.handleInputChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
            cacheOptions = _this$props.cacheOptions,
            onInputChange = _this$props.onInputChange;
        // TODO

        var inputValue = handleInputChange(newValue, actionMeta, onInputChange);
        if (!inputValue) {
          delete _this.lastRequest;
          _this.setState({
            inputValue: '',
            loadedInputValue: '',
            loadedOptions: [],
            isLoading: false,
            passEmptyOptions: false
          });
          return;
        }
        if (cacheOptions && _this.optionsCache[inputValue]) {
          _this.setState({
            inputValue: inputValue,
            loadedInputValue: inputValue,
            loadedOptions: _this.optionsCache[inputValue],
            isLoading: false,
            passEmptyOptions: false
          });
        } else {
          var request = _this.lastRequest = {};
          _this.setState({
            inputValue: inputValue,
            isLoading: true,
            passEmptyOptions: !_this.state.loadedInputValue
          }, function () {
            _this.loadOptions(inputValue, function (options) {
              if (!_this.mounted) return;
              if (options) {
                _this.optionsCache[inputValue] = options;
              }
              if (request !== _this.lastRequest) return;
              delete _this.lastRequest;
              _this.setState({
                isLoading: false,
                loadedInputValue: inputValue,
                loadedOptions: options || [],
                passEmptyOptions: false
              });
            });
          });
        }
        return inputValue;
      };

      _this.state = {
        defaultOptions: Array.isArray(props.defaultOptions) ? props.defaultOptions : undefined,
        inputValue: typeof props.inputValue !== 'undefined' ? props.inputValue : '',
        isLoading: props.defaultOptions === true ? true : false,
        loadedOptions: [],
        passEmptyOptions: false
      };
      return _this;
    }

    createClass(Async, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.mounted = true;
        var defaultOptions = this.props.defaultOptions;
        var inputValue = this.state.inputValue;

        if (defaultOptions === true) {
          this.loadOptions(inputValue, function (options) {
            if (!_this2.mounted) return;
            var isLoading = !!_this2.lastRequest;
            _this2.setState({ defaultOptions: options || [], isLoading: isLoading });
          });
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        // if the cacheOptions prop changes, clear the cache
        if (nextProps.cacheOptions !== this.props.cacheOptions) {
          this.optionsCache = {};
        }
        if (nextProps.defaultOptions !== this.props.defaultOptions) {
          this.setState({
            defaultOptions: Array.isArray(nextProps.defaultOptions) ? nextProps.defaultOptions : undefined
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.mounted = false;
      }
    }, {
      key: 'focus',
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: 'blur',
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: 'loadOptions',
      value: function loadOptions(inputValue, callback) {
        var loadOptions = this.props.loadOptions;

        if (!loadOptions) return callback();
        var loader = loadOptions(inputValue, callback);
        if (loader && typeof loader.then === 'function') {
          loader.then(callback, function () {
            return callback();
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var _props = this.props,
            loadOptions = _props.loadOptions,
            props = objectWithoutProperties(_props, ['loadOptions']);
        var _state = this.state,
            defaultOptions = _state.defaultOptions,
            inputValue = _state.inputValue,
            isLoading = _state.isLoading,
            loadedInputValue = _state.loadedInputValue,
            loadedOptions = _state.loadedOptions,
            passEmptyOptions = _state.passEmptyOptions;

        var options = passEmptyOptions ? [] : inputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
        return (
          // $FlowFixMe
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectComponent, _extends({}, props, {
            filterOption: this.props.filterOption || null,
            ref: function ref(_ref) {
              _this3.select = _ref;
            },
            options: options,
            isLoading: isLoading,
            onInputChange: this.handleInputChange
          }))
        );
      }
    }]);
    return Async;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _class.defaultProps = defaultProps$2, _temp;
};
var Async = makeAsyncSelect(manageState(Select));

var compareOption = function compareOption() {
  var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var option = arguments[1];

  var candidate = String(inputValue).toLowerCase();
  var optionValue = String(option.value).toLowerCase();
  var optionLabel = String(option.label).toLowerCase();
  return optionValue === candidate || optionLabel === candidate;
};

var builtins = {
  formatCreateLabel: function formatCreateLabel(inputValue) {
    return 'Create "' + inputValue + '"';
  },
  isValidNewOption: function isValidNewOption(inputValue, selectValue, selectOptions) {
    return !(!inputValue || selectValue.some(function (option) {
      return compareOption(inputValue, option);
    }) || selectOptions.some(function (option) {
      return compareOption(inputValue, option);
    }));
  },
  getNewOptionData: function getNewOptionData(inputValue, optionLabel) {
    return {
      label: optionLabel,
      value: inputValue,
      __isNew__: true
    };
  }
};

var defaultProps$3 = _extends({
  allowCreateWhileLoading: false,
  createOptionPosition: 'last'
}, builtins);

var makeCreatableSelect = function makeCreatableSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    inherits(Creatable, _Component);

    function Creatable(props) {
      classCallCheck(this, Creatable);

      var _this = possibleConstructorReturn(this, (Creatable.__proto__ || Object.getPrototypeOf(Creatable)).call(this, props));

      _this.onChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
            getNewOptionData = _this$props.getNewOptionData,
            inputValue = _this$props.inputValue,
            isMulti = _this$props.isMulti,
            onChange = _this$props.onChange,
            onCreateOption = _this$props.onCreateOption,
            value = _this$props.value;

        if (actionMeta.action !== 'select-option') {
          return onChange(newValue, actionMeta);
        }
        var newOption = _this.state.newOption;

        var valueArray = Array.isArray(newValue) ? newValue : [newValue];

        if (valueArray[valueArray.length - 1] === newOption) {
          if (onCreateOption) onCreateOption(inputValue);else {
            var newOptionData = getNewOptionData(inputValue, inputValue);
            var newActionMeta = { action: 'create-option' };
            if (isMulti) {
              onChange([].concat(toConsumableArray(cleanValue(value)), [newOptionData]), newActionMeta);
            } else {
              onChange(newOptionData, newActionMeta);
            }
          }
          return;
        }
        onChange(newValue, actionMeta);
      };

      var options = props.options || [];
      _this.state = {
        newOption: undefined,
        options: options
      };
      return _this;
    }

    createClass(Creatable, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var allowCreateWhileLoading = nextProps.allowCreateWhileLoading,
            createOptionPosition = nextProps.createOptionPosition,
            formatCreateLabel = nextProps.formatCreateLabel,
            getNewOptionData = nextProps.getNewOptionData,
            inputValue = nextProps.inputValue,
            isLoading = nextProps.isLoading,
            isValidNewOption = nextProps.isValidNewOption,
            value = nextProps.value;

        var options = nextProps.options || [];
        var newOption = this.state.newOption;

        if (isValidNewOption(inputValue, cleanValue(value), options)) {
          newOption = getNewOptionData(inputValue, formatCreateLabel(inputValue));
        } else {
          newOption = undefined;
        }
        this.setState({
          newOption: newOption,
          options: (allowCreateWhileLoading || !isLoading) && newOption ? createOptionPosition === 'first' ? [newOption].concat(toConsumableArray(options)) : [].concat(toConsumableArray(options), [newOption]) : options
        });
      }
    }, {
      key: 'focus',
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: 'blur',
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var props = objectWithoutProperties(this.props, []);
        var options = this.state.options;

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectComponent, _extends({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          options: options,
          onChange: this.onChange
        }));
      }
    }]);
    return Creatable;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _class.defaultProps = defaultProps$3, _temp;
};
var Creatable = manageState(makeCreatableSelect(Select));

var AsyncCreatable = makeAsyncSelect(manageState(makeCreatableSelect(Select)));

// ==============================
// Fade Transition
// ==============================

var Fade = function Fade(_ref) {
  var Tag = _ref.component,
      _ref$duration = _ref.duration,
      duration = _ref$duration === undefined ? 1 : _ref$duration,
      inProp = _ref.in,
      onExited = _ref.onExited,
      props = objectWithoutProperties(_ref, ['component', 'duration', 'in', 'onExited']);

  var transition = {
    entering: { opacity: 0 },
    entered: { opacity: 1, transition: 'opacity ' + duration + 'ms' },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    react_transition_group__WEBPACK_IMPORTED_MODULE_7__["Transition"],
    { mountOnEnter: true, unmountOnExit: true, 'in': inProp, timeout: duration },
    function (state) {
      var innerProps = {
        style: _extends({}, transition[state])
      };
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag, _extends({ innerProps: innerProps }, props));
    }
  );
};
var collapseDuration = 260;

// wrap each MultiValue with a collapse transition; decreases width until
// finally removing from DOM
var Collapse = function (_Component) {
  inherits(Collapse, _Component);

  function Collapse() {
    var _ref2;

    var _temp, _this, _ret;

    classCallCheck(this, Collapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref2 = Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call.apply(_ref2, [this].concat(args))), _this), _this.duration = collapseDuration, _this.state = { width: 'auto' }, _this.transition = {
      exiting: { width: 0, transition: 'width ' + _this.duration + 'ms ease-out' },
      exited: { width: 0 }
    }, _this.getWidth = function (ref) {
      if (ref && isNaN(_this.state.width)) {
        /*
          Here we're invoking requestAnimationFrame with a callback invoking our
          call to getBoundingClientRect and setState in order to resolve an edge case
          around portalling. Certain portalling solutions briefly remove children from the DOM
          before appending them to the target node. This is to avoid us trying to call getBoundingClientrect
          while the Select component is in this state.
        */
        // cannot use `offsetWidth` because it is rounded
        _this.rafID = window.requestAnimationFrame(function () {
          var _ref$getBoundingClien = ref.getBoundingClientRect(),
              width = _ref$getBoundingClien.width;

          _this.setState({ width: width });
        });
      }
    }, _this.getStyle = function (width) {
      return {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: width
      };
    }, _this.getTransition = function (state) {
      return _this.transition[state];
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Collapse, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.rafID) {
        window.cancelAnimationFrame(this.rafID);
      }
    }

    // width must be calculated; cannot transition from `undefined` to `number`


    // get base styles


    // get transition styles

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          inProp = _props.in;
      var width = this.state.width;


      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        react_transition_group__WEBPACK_IMPORTED_MODULE_7__["Transition"],
        {
          enter: false,
          mountOnEnter: true,
          unmountOnExit: true,
          'in': inProp,
          timeout: this.duration
        },
        function (state) {
          var style = _extends({}, _this2.getStyle(width), _this2.getTransition(state));
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            { ref: _this2.getWidth, style: style },
            children
          );
        }
      );
    }
  }]);
  return Collapse;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

// strip transition props off before spreading onto select component
// note we need to be explicit about innerRef for flow
var AnimatedInput = function AnimatedInput(WrappedComponent) {
  return function (_ref) {
    var inProp = _ref.in,
        onExited = _ref.onExited,
        appear = _ref.appear,
        enter = _ref.enter,
        exit = _ref.exit,
        innerRef = _ref.innerRef,
        props = objectWithoutProperties(_ref, ['in', 'onExited', 'appear', 'enter', 'exit', 'innerRef']);
    return (
      // $FlowFixMe
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrappedComponent, _extends({ innerRef: innerRef }, props))
    );
  };
};

// strip transition props off before spreading onto actual component


var AnimatedMultiValue = function AnimatedMultiValue(WrappedComponent) {
  return function (_ref) {
    var inProp = _ref.in,
        onExited = _ref.onExited,
        props = objectWithoutProperties(_ref, ['in', 'onExited']);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      Collapse,
      { 'in': inProp, onExited: onExited },
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrappedComponent, _extends({ cropWithEllipsis: inProp }, props))
    );
  };
};

// fade in when last multi-value removed, otherwise instant
var AnimatedPlaceholder = function AnimatedPlaceholder(WrappedComponent) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Fade, _extends({
      component: WrappedComponent,
      duration: props.isMulti ? collapseDuration : 1
    }, props));
  };
};

// instant fade; all transition-group children must be transitions

var AnimatedSingleValue = function AnimatedSingleValue(WrappedComponent) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Fade, _extends({ component: WrappedComponent }, props));
  };
};

// make ValueContainer a transition group
var AnimatedValueContainer = function AnimatedValueContainer(WrappedComponent) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_7__["TransitionGroup"], _extends({ component: WrappedComponent }, props));
  };
};

var makeAnimated = function makeAnimated(externalComponents) {
  var components$$1 = defaultComponents({ components: externalComponents });
  var Input = components$$1.Input,
      MultiValue = components$$1.MultiValue,
      Placeholder = components$$1.Placeholder,
      SingleValue = components$$1.SingleValue,
      ValueContainer = components$$1.ValueContainer,
      rest = objectWithoutProperties(components$$1, ['Input', 'MultiValue', 'Placeholder', 'SingleValue', 'ValueContainer']);

  return _extends({
    Input: AnimatedInput(Input),
    MultiValue: AnimatedMultiValue(MultiValue),
    Placeholder: AnimatedPlaceholder(Placeholder),
    SingleValue: AnimatedSingleValue(SingleValue),
    ValueContainer: AnimatedValueContainer(ValueContainer)
  }, rest);
};

var AnimatedComponents = makeAnimated();

var Input$1 = AnimatedComponents.Input;
var MultiValue$1 = AnimatedComponents.MultiValue;
var Placeholder$1 = AnimatedComponents.Placeholder;
var SingleValue$1 = AnimatedComponents.SingleValue;
var ValueContainer$1 = AnimatedComponents.ValueContainer;

var index = Object(memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(makeAnimated, exportedEqual);

var index$1 = manageState(Select);

/* harmony default export */ __webpack_exports__["default"] = (index$1);



/***/ }),

/***/ 2888:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(2889));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(2892));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(2893));

var _Transition = _interopRequireDefault(__webpack_require__(2890));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),

/***/ 2889:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(813));

var _addClass = _interopRequireDefault(__webpack_require__(2710));

var _removeClass = _interopRequireDefault(__webpack_require__(2712));

var _react = _interopRequireDefault(__webpack_require__(389));

var _Transition = _interopRequireDefault(__webpack_require__(2890));

var _PropTypes = __webpack_require__(2891);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A `Transition` component using CSS transitions and animations.
 * It's inspired by the excellent [ng-animate](http://www.nganimate.org/) library.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` stages of the transition. The first class is applied and then a
 * second "active" class in order to activate the css animation. After the animation,
 * matching `done` class names are applied to persist the animation state.
 *
 * When the `in` prop is toggled to `true` the Component will get
 * the `example-enter` CSS class and the `example-enter-active` CSS class
 * added in the next tick. This is a convention based on the `classNames` prop.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var _this$getClassNames3 = _this.getClassNames('enter'),
          doneClassName = _this$getClassNames3.doneClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          className = _this$getClassNames4.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames5.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames6 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames6.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var className = typeof classNames !== 'string' ? classNames[type] : classNames + '-' + type;
      var activeClassName = typeof classNames !== 'string' ? classNames[type + 'Active'] : className + '-active';
      var doneClassName = typeof classNames !== 'string' ? classNames[type + 'Done'] : className + '-done';
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames7 = this.getClassNames(type),
        className = _this$getClassNames7.className,
        activeClassName = _this$getClassNames7.activeClassName,
        doneClassName = _this$getClassNames7.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.propTypes =  true ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or has finished the transition.
   * A single name can be provided and it will be suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`, `fade-enter-done`,
   * `fade-exit`, `fade-exit-active`, `fade-exit-done`, `fade-appear`, and `fade-appear-active`.
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply spread
   * them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : undefined;
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 2890:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(813));

var _react = _interopRequireDefault(__webpack_require__(389));

var _reactDom = _interopRequireDefault(__webpack_require__(398));

var _reactLifecyclesCompat = __webpack_require__(861);

var _PropTypes = __webpack_require__(2891);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts(); // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing); // FIXME: appear timeout?


      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: function timeout(props) {
    var pt =  true ? _PropTypes.timeoutsShape : undefined;;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : undefined;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),

/***/ 2891:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(813));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  true ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number
}).isRequired]) : undefined;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  true ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : undefined;
exports.classNamesShape = classNamesShape;

/***/ }),

/***/ 2892:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(813));

var _react = _interopRequireDefault(__webpack_require__(389));

var _reactDom = __webpack_require__(398);

var _TransitionGroup = _interopRequireDefault(__webpack_require__(2893));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  true ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 2893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(813));

var _react = _interopRequireDefault(__webpack_require__(389));

var _reactLifecyclesCompat = __webpack_require__(861);

var _ChildMapping = __webpack_require__(2894);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 2894:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(389);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35ib3RzfmRlcG9zaXQtd2l0aGRyYXcuZDg3YjE5ZGZlNDE1NjgzOWE5ZjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWVtb2l6ZS1vbmUvZGlzdC9tZW1vaXplLW9uZS5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Vtb3Rpb24vZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWF0ZS1lbW90aW9uL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VuaXRsZXNzL2Rpc3QvdW5pdGxlc3MuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9oYXNoL2Rpc3QvaGFzaC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3N0eWxpcy9kaXN0L3N0eWxpcy5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxpcy1ydWxlLXNoZWV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1hdXRvc2l6ZS9saWIvQXV0b3NpemVJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3Qvbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9Qcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9SZXBsYWNlVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3V0aWxzL0NoaWxkTWFwcGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc2ltcGxlSXNFcXVhbCA9IGZ1bmN0aW9uIHNpbXBsZUlzRXF1YWwoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbmZ1bmN0aW9uIGluZGV4IChyZXN1bHRGbiwgaXNFcXVhbCkge1xuICBpZiAoaXNFcXVhbCA9PT0gdm9pZCAwKSB7XG4gICAgaXNFcXVhbCA9IHNpbXBsZUlzRXF1YWw7XG4gIH1cblxuICB2YXIgbGFzdFRoaXM7XG4gIHZhciBsYXN0QXJncyA9IFtdO1xuICB2YXIgbGFzdFJlc3VsdDtcbiAgdmFyIGNhbGxlZE9uY2UgPSBmYWxzZTtcblxuICB2YXIgaXNOZXdBcmdFcXVhbFRvTGFzdCA9IGZ1bmN0aW9uIGlzTmV3QXJnRXF1YWxUb0xhc3QobmV3QXJnLCBpbmRleCkge1xuICAgIHJldHVybiBpc0VxdWFsKG5ld0FyZywgbGFzdEFyZ3NbaW5kZXhdKTtcbiAgfTtcblxuICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24gcmVzdWx0KCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBuZXdBcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgbmV3QXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoY2FsbGVkT25jZSAmJiBsYXN0VGhpcyA9PT0gdGhpcyAmJiBuZXdBcmdzLmxlbmd0aCA9PT0gbGFzdEFyZ3MubGVuZ3RoICYmIG5ld0FyZ3MuZXZlcnkoaXNOZXdBcmdFcXVhbFRvTGFzdCkpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgIH1cblxuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRGbi5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICBjYWxsZWRPbmNlID0gdHJ1ZTtcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdEFyZ3MgPSBuZXdBcmdzO1xuICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiaW1wb3J0IGNyZWF0ZUVtb3Rpb24gZnJvbSAnY3JlYXRlLWVtb3Rpb24nO1xuXG52YXIgY29udGV4dCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDoge307XG5cbnZhciBfY3JlYXRlRW1vdGlvbiA9IGNyZWF0ZUVtb3Rpb24oY29udGV4dCksXG4gICAgZmx1c2ggPSBfY3JlYXRlRW1vdGlvbi5mbHVzaCxcbiAgICBoeWRyYXRlID0gX2NyZWF0ZUVtb3Rpb24uaHlkcmF0ZSxcbiAgICBjeCA9IF9jcmVhdGVFbW90aW9uLmN4LFxuICAgIG1lcmdlID0gX2NyZWF0ZUVtb3Rpb24ubWVyZ2UsXG4gICAgZ2V0UmVnaXN0ZXJlZFN0eWxlcyA9IF9jcmVhdGVFbW90aW9uLmdldFJlZ2lzdGVyZWRTdHlsZXMsXG4gICAgaW5qZWN0R2xvYmFsID0gX2NyZWF0ZUVtb3Rpb24uaW5qZWN0R2xvYmFsLFxuICAgIGtleWZyYW1lcyA9IF9jcmVhdGVFbW90aW9uLmtleWZyYW1lcyxcbiAgICBjc3MgPSBfY3JlYXRlRW1vdGlvbi5jc3MsXG4gICAgc2hlZXQgPSBfY3JlYXRlRW1vdGlvbi5zaGVldCxcbiAgICBjYWNoZXMgPSBfY3JlYXRlRW1vdGlvbi5jYWNoZXM7XG5cbmV4cG9ydCB7IGZsdXNoLCBoeWRyYXRlLCBjeCwgbWVyZ2UsIGdldFJlZ2lzdGVyZWRTdHlsZXMsIGluamVjdEdsb2JhbCwga2V5ZnJhbWVzLCBjc3MsIHNoZWV0LCBjYWNoZXMgfTtcbiIsImltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuaW1wb3J0IHVuaXRsZXNzIGZyb20gJ0BlbW90aW9uL3VuaXRsZXNzJztcbmltcG9ydCBoYXNoU3RyaW5nIGZyb20gJ0BlbW90aW9uL2hhc2gnO1xuaW1wb3J0IFN0eWxpcyBmcm9tICdAZW1vdGlvbi9zdHlsaXMnO1xuaW1wb3J0IHN0eWxpc1J1bGVTaGVldCBmcm9tICdzdHlsaXMtcnVsZS1zaGVldCc7XG5cbnZhciBoeXBoZW5hdGVSZWdleCA9IC9bQS1aXXxebXMvZztcbnZhciBwcm9jZXNzU3R5bGVOYW1lID0gbWVtb2l6ZShmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gIHJldHVybiBzdHlsZU5hbWUucmVwbGFjZShoeXBoZW5hdGVSZWdleCwgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG59KTtcbnZhciBwcm9jZXNzU3R5bGVWYWx1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodW5pdGxlc3Nba2V5XSAhPT0gMSAmJiBrZXkuY2hhckNvZGVBdCgxKSAhPT0gNDUgJiYgLy8gY3VzdG9tIHByb3BlcnRpZXNcbiAgIWlzTmFOKHZhbHVlKSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgY29udGVudFZhbHVlUGF0dGVybiA9IC8oYXR0cnxjYWxjfGNvdW50ZXJzP3x1cmwpXFwoLztcbiAgdmFyIGNvbnRlbnRWYWx1ZXMgPSBbJ25vcm1hbCcsICdub25lJywgJ2NvdW50ZXInLCAnb3Blbi1xdW90ZScsICdjbG9zZS1xdW90ZScsICduby1vcGVuLXF1b3RlJywgJ25vLWNsb3NlLXF1b3RlJywgJ2luaXRpYWwnLCAnaW5oZXJpdCcsICd1bnNldCddO1xuICB2YXIgb2xkUHJvY2Vzc1N0eWxlVmFsdWUgPSBwcm9jZXNzU3R5bGVWYWx1ZTtcblxuICBwcm9jZXNzU3R5bGVWYWx1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5ID09PSAnY29udGVudCcpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IGNvbnRlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xICYmICFjb250ZW50VmFsdWVQYXR0ZXJuLnRlc3QodmFsdWUpICYmICh2YWx1ZS5jaGFyQXQoMCkgIT09IHZhbHVlLmNoYXJBdCh2YWx1ZS5sZW5ndGggLSAxKSB8fCB2YWx1ZS5jaGFyQXQoMCkgIT09ICdcIicgJiYgdmFsdWUuY2hhckF0KDApICE9PSBcIidcIikpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSBzZWVtIHRvIGJlIHVzaW5nIGEgdmFsdWUgZm9yICdjb250ZW50JyB3aXRob3V0IHF1b3RlcywgdHJ5IHJlcGxhY2luZyBpdCB3aXRoIGBjb250ZW50OiAnXFxcIlwiICsgdmFsdWUgKyBcIlxcXCInYFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2xkUHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSk7XG4gIH07XG59XG5cbnZhciBjbGFzc25hbWVzID0gZnVuY3Rpb24gY2xhc3NuYW1lcyhhcmdzKSB7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgY2xzID0gJyc7XG5cbiAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBhcmcgPSBhcmdzW2ldO1xuICAgIGlmIChhcmcgPT0gbnVsbCkgY29udGludWU7XG4gICAgdmFyIHRvQWRkID0gdm9pZCAwO1xuXG4gICAgc3dpdGNoICh0eXBlb2YgYXJnKSB7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdQYXNzaW5nIGZ1bmN0aW9ucyB0byBjeCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBFbW90aW9uLlxcbicgKyAnUGxlYXNlIGNhbGwgdGhlIGZ1bmN0aW9uIGJlZm9yZSBwYXNzaW5nIGl0IHRvIGN4LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9BZGQgPSBjbGFzc25hbWVzKFthcmcoKV0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgICAgIHRvQWRkID0gY2xhc3NuYW1lcyhhcmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b0FkZCA9ICcnO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIGFyZykge1xuICAgICAgICAgICAgICBpZiAoYXJnW2tdICYmIGspIHtcbiAgICAgICAgICAgICAgICB0b0FkZCAmJiAodG9BZGQgKz0gJyAnKTtcbiAgICAgICAgICAgICAgICB0b0FkZCArPSBrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIHRvQWRkID0gYXJnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvQWRkKSB7XG4gICAgICBjbHMgJiYgKGNscyArPSAnICcpO1xuICAgICAgY2xzICs9IHRvQWRkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbHM7XG59O1xudmFyIGlzQnJvd3NlciA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8qXG5cbmhpZ2ggcGVyZm9ybWFuY2UgU3R5bGVTaGVldCBmb3IgY3NzLWluLWpzIHN5c3RlbXNcblxuLSB1c2VzIG11bHRpcGxlIHN0eWxlIHRhZ3MgYmVoaW5kIHRoZSBzY2VuZXMgZm9yIG1pbGxpb25zIG9mIHJ1bGVzXG4tIHVzZXMgYGluc2VydFJ1bGVgIGZvciBhcHBlbmRpbmcgaW4gcHJvZHVjdGlvbiBmb3IgKm11Y2gqIGZhc3RlciBwZXJmb3JtYW5jZVxuLSAncG9seWZpbGxzJyBvbiBzZXJ2ZXIgc2lkZVxuXG4vLyB1c2FnZVxuXG5pbXBvcnQgU3R5bGVTaGVldCBmcm9tICdnbGFtb3IvbGliL3NoZWV0J1xubGV0IHN0eWxlU2hlZXQgPSBuZXcgU3R5bGVTaGVldCgpXG5cbnN0eWxlU2hlZXQuaW5qZWN0KClcbi0gJ2luamVjdHMnIHRoZSBzdHlsZXNoZWV0IGludG8gdGhlIHBhZ2UgKG9yIGludG8gbWVtb3J5IGlmIG9uIHNlcnZlcilcblxuc3R5bGVTaGVldC5pbnNlcnQoJyNib3ggeyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH0nKVxuLSBhcHBlbmRzIGEgY3NzIHJ1bGUgaW50byB0aGUgc3R5bGVzaGVldFxuXG5zdHlsZVNoZWV0LmZsdXNoKClcbi0gZW1wdGllcyB0aGUgc3R5bGVzaGVldCBvZiBhbGwgaXRzIGNvbnRlbnRzXG5cbiovXG4vLyAkRmxvd0ZpeE1lXG5mdW5jdGlvbiBzaGVldEZvclRhZyh0YWcpIHtcbiAgaWYgKHRhZy5zaGVldCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gdGFnLnNoZWV0O1xuICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0ub3duZXJOb2RlID09PSB0YWcpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIHJldHVybiBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZVN0eWxlVGFnKG9wdHMpIHtcbiAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1vdGlvbicsIG9wdHMua2V5IHx8ICcnKTtcblxuICBpZiAob3B0cy5ub25jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGFnLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBvcHRzLm5vbmNlKTtcbiAgfVxuXG4gIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpIC8vICRGbG93Rml4TWVcbiAgO1xuICAob3B0cy5jb250YWluZXIgIT09IHVuZGVmaW5lZCA/IG9wdHMuY29udGFpbmVyIDogZG9jdW1lbnQuaGVhZCkuYXBwZW5kQ2hpbGQodGFnKTtcbiAgcmV0dXJuIHRhZztcbn1cblxudmFyIFN0eWxlU2hlZXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KG9wdGlvbnMpIHtcbiAgICB0aGlzLmlzU3BlZWR5ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJzsgLy8gdGhlIGJpZyBkcmF3YmFjayBoZXJlIGlzIHRoYXQgdGhlIGNzcyB3b24ndCBiZSBlZGl0YWJsZSBpbiBkZXZ0b29sc1xuXG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuICAgIHRoaXMub3B0cyA9IG9wdGlvbnM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3R5bGVTaGVldC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluamVjdCA9IGZ1bmN0aW9uIGluamVjdCgpIHtcbiAgICBpZiAodGhpcy5pbmplY3RlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbHJlYWR5IGluamVjdGVkIScpO1xuICAgIH1cblxuICAgIHRoaXMudGFnc1swXSA9IG1ha2VTdHlsZVRhZyh0aGlzLm9wdHMpO1xuICAgIHRoaXMuaW5qZWN0ZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5zcGVlZHkgPSBmdW5jdGlvbiBzcGVlZHkoYm9vbCkge1xuICAgIGlmICh0aGlzLmN0ciAhPT0gMCkge1xuICAgICAgLy8gY2Fubm90IGNoYW5nZSBzcGVlZHkgbW9kZSBhZnRlciBpbnNlcnRpbmcgYW55IHJ1bGUgdG8gc2hlZXQuIEVpdGhlciBjYWxsIHNwZWVkeSgke2Jvb2x9KSBlYXJsaWVyIGluIHlvdXIgYXBwLCBvciBjYWxsIGZsdXNoKCkgYmVmb3JlIHNwZWVkeSgke2Jvb2x9KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IGNoYW5nZSBzcGVlZHkgbm93XCIpO1xuICAgIH1cblxuICAgIHRoaXMuaXNTcGVlZHkgPSAhIWJvb2w7XG4gIH07XG5cbiAgX3Byb3RvLmluc2VydCA9IGZ1bmN0aW9uIGluc2VydChydWxlLCBzb3VyY2VNYXApIHtcbiAgICAvLyB0aGlzIGlzIHRoZSB1bHRyYWZhc3QgdmVyc2lvbiwgd29ya3MgYWNyb3NzIGJyb3dzZXJzXG4gICAgaWYgKHRoaXMuaXNTcGVlZHkpIHtcbiAgICAgIHZhciB0YWcgPSB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdO1xuICAgICAgdmFyIHNoZWV0ID0gc2hlZXRGb3JUYWcodGFnKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUud2FybignaWxsZWdhbCBydWxlJywgcnVsZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfdGFnID0gbWFrZVN0eWxlVGFnKHRoaXMub3B0cyk7XG5cbiAgICAgIHRoaXMudGFncy5wdXNoKF90YWcpO1xuXG4gICAgICBfdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJ1bGUgKyAoc291cmNlTWFwIHx8ICcnKSkpO1xuICAgIH1cblxuICAgIHRoaXMuY3RyKys7XG5cbiAgICBpZiAodGhpcy5jdHIgJSA2NTAwMCA9PT0gMCkge1xuICAgICAgdGhpcy50YWdzLnB1c2gobWFrZVN0eWxlVGFnKHRoaXMub3B0cykpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgdGhpcy50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgcmV0dXJuIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgfSk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwOyAvLyB0b2RvIC0gbG9vayBmb3IgcmVtbmFudHMgaW4gZG9jdW1lbnQuc3R5bGVTaGVldHNcblxuICAgIHRoaXMuaW5qZWN0ZWQgPSBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuZnVuY3Rpb24gY3JlYXRlRW1vdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gIGlmIChjb250ZXh0Ll9fU0VDUkVUX0VNT1RJT05fXyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGNvbnRleHQuX19TRUNSRVRfRU1PVElPTl9fO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkgb3B0aW9ucyA9IHt9O1xuICB2YXIga2V5ID0gb3B0aW9ucy5rZXkgfHwgJ2Nzcyc7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoL1teYS16LV0vLnRlc3Qoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW1vdGlvbiBrZXkgbXVzdCBvbmx5IGNvbnRhaW4gbG93ZXIgY2FzZSBhbHBoYWJldGljYWwgY2hhcmFjdGVycyBhbmQgLSBidXQgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBwYXNzZWRcIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIGN1cnJlbnQ7XG5cbiAgZnVuY3Rpb24gaW5zZXJ0UnVsZShydWxlKSB7XG4gICAgY3VycmVudCArPSBydWxlO1xuXG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgc2hlZXQuaW5zZXJ0KHJ1bGUsIGN1cnJlbnRTb3VyY2VNYXApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpbnNlcnRpb25QbHVnaW4gPSBzdHlsaXNSdWxlU2hlZXQoaW5zZXJ0UnVsZSk7XG4gIHZhciBzdHlsaXNPcHRpb25zO1xuXG4gIGlmIChvcHRpb25zLnByZWZpeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc3R5bGlzT3B0aW9ucyA9IHtcbiAgICAgIHByZWZpeDogb3B0aW9ucy5wcmVmaXhcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlcyA9IHtcbiAgICByZWdpc3RlcmVkOiB7fSxcbiAgICBpbnNlcnRlZDoge30sXG4gICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAga2V5OiBrZXlcbiAgfTtcbiAgdmFyIHNoZWV0ID0gbmV3IFN0eWxlU2hlZXQob3B0aW9ucyk7XG5cbiAgaWYgKGlzQnJvd3Nlcikge1xuICAgIC8vIPCfmoBcbiAgICBzaGVldC5pbmplY3QoKTtcbiAgfVxuXG4gIHZhciBzdHlsaXMgPSBuZXcgU3R5bGlzKHN0eWxpc09wdGlvbnMpO1xuICBzdHlsaXMudXNlKG9wdGlvbnMuc3R5bGlzUGx1Z2lucykoaW5zZXJ0aW9uUGx1Z2luKTtcbiAgdmFyIGN1cnJlbnRTb3VyY2VNYXAgPSAnJztcblxuICBmdW5jdGlvbiBoYW5kbGVJbnRlcnBvbGF0aW9uKGludGVycG9sYXRpb24sIGNvdWxkQmVTZWxlY3RvckludGVycG9sYXRpb24pIHtcbiAgICBpZiAoaW50ZXJwb2xhdGlvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0eXBlb2YgaW50ZXJwb2xhdGlvbikge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAnJztcblxuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbi5fX2Vtb3Rpb25fc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgc2VsZWN0b3IgPSBpbnRlcnBvbGF0aW9uLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICBpZiAoc2VsZWN0b3IgPT09ICdOT19DT01QT05FTlRfU0VMRUNUT1InICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYmFiZWwtcGx1Z2luLWVtb3Rpb24uJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMgPT09IHVuZGVmaW5lZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignSW50ZXJwb2xhdGluZyBmdW5jdGlvbnMgaW4gY3NzIGNhbGxzIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uIG9mIEVtb3Rpb24uXFxuJyArICdJZiB5b3Ugd2FudCB0byBoYXZlIGEgY3NzIGNhbGwgYmFzZWQgb24gcHJvcHMsIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGNzcyBjYWxsIGxpa2UgdGhpc1xcbicgKyAnbGV0IGR5bmFtaWNTdHlsZSA9IChwcm9wcykgPT4gY3NzYGNvbG9yOiAke3Byb3BzLmNvbG9yfWBcXG4nICsgJ0l0IGNhbiBiZSBjYWxsZWQgZGlyZWN0bHkgd2l0aCBwcm9wcyBvciBpbnRlcnBvbGF0ZWQgaW4gYSBzdHlsZWQgY2FsbCBsaWtlIHRoaXNcXG4nICsgXCJsZXQgU29tZUNvbXBvbmVudCA9IHN0eWxlZCgnZGl2JylgJHtkeW5hbWljU3R5bGV9YFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoYW5kbGVJbnRlcnBvbGF0aW9uLmNhbGwodGhpcywgdGhpcyA9PT0gdW5kZWZpbmVkID8gaW50ZXJwb2xhdGlvbigpIDogLy8gJEZsb3dGaXhNZVxuICAgICAgICBpbnRlcnBvbGF0aW9uKHRoaXMubWVyZ2VkUHJvcHMsIHRoaXMuY29udGV4dCksIGNvdWxkQmVTZWxlY3RvckludGVycG9sYXRpb24pO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gY3JlYXRlU3RyaW5nRnJvbU9iamVjdC5jYWxsKHRoaXMsIGludGVycG9sYXRpb24pO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YXIgY2FjaGVkID0gY2FjaGVzLnJlZ2lzdGVyZWRbaW50ZXJwb2xhdGlvbl07XG4gICAgICAgIHJldHVybiBjb3VsZEJlU2VsZWN0b3JJbnRlcnBvbGF0aW9uID09PSBmYWxzZSAmJiBjYWNoZWQgIT09IHVuZGVmaW5lZCA/IGNhY2hlZCA6IGludGVycG9sYXRpb247XG4gICAgfVxuICB9XG5cbiAgdmFyIG9iamVjdFRvU3RyaW5nQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3Qob2JqKSB7XG4gICAgaWYgKG9iamVjdFRvU3RyaW5nQ2FjaGUuaGFzKG9iaikpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIHJldHVybiBvYmplY3RUb1N0cmluZ0NhY2hlLmdldChvYmopO1xuICAgIH1cblxuICAgIHZhciBzdHJpbmcgPSAnJztcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIG9iai5mb3JFYWNoKGZ1bmN0aW9uIChpbnRlcnBvbGF0aW9uKSB7XG4gICAgICAgIHN0cmluZyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uLmNhbGwodGhpcywgaW50ZXJwb2xhdGlvbiwgZmFsc2UpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgaWYgKGNhY2hlcy5yZWdpc3RlcmVkW29ialtrZXldXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0ga2V5ICsgXCJ7XCIgKyBjYWNoZXMucmVnaXN0ZXJlZFtvYmpba2V5XV0gKyBcIn1cIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCBvYmpba2V5XSkgKyBcIjtcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgc2VsZWN0b3JzIGNhbiBvbmx5IGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBiYWJlbC1wbHVnaW4tZW1vdGlvbi4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba2V5XSkgJiYgdHlwZW9mIG9ialtrZXldWzBdID09PSAnc3RyaW5nJyAmJiBjYWNoZXMucmVnaXN0ZXJlZFtvYmpba2V5XVswXV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb2JqW2tleV0uZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkgKyBcIjtcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0ga2V5ICsgXCJ7XCIgKyBoYW5kbGVJbnRlcnBvbGF0aW9uLmNhbGwodGhpcywgb2JqW2tleV0sIGZhbHNlKSArIFwifVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gICAgb2JqZWN0VG9TdHJpbmdDYWNoZS5zZXQob2JqLCBzdHJpbmcpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB2YXIgbmFtZTtcbiAgdmFyIHN0eWxlc1dpdGhMYWJlbDtcbiAgdmFyIGxhYmVsUGF0dGVybiA9IC9sYWJlbDpcXHMqKFteXFxzO1xcbntdKylcXHMqOy9nO1xuXG4gIHZhciBjcmVhdGVDbGFzc05hbWUgPSBmdW5jdGlvbiBjcmVhdGVDbGFzc05hbWUoc3R5bGVzLCBpZGVudGlmaWVyTmFtZSkge1xuICAgIHJldHVybiBoYXNoU3RyaW5nKHN0eWxlcyArIGlkZW50aWZpZXJOYW1lKSArIGlkZW50aWZpZXJOYW1lO1xuICB9O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIG9sZENyZWF0ZUNsYXNzTmFtZSA9IGNyZWF0ZUNsYXNzTmFtZTtcbiAgICB2YXIgc291cmNlTWFwcGluZ1VybFBhdHRlcm4gPSAvXFwvXFwqI1xcc3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvblxcL2pzb247XFxTK1xccytcXCpcXC8vZztcblxuICAgIGNyZWF0ZUNsYXNzTmFtZSA9IGZ1bmN0aW9uIGNyZWF0ZUNsYXNzTmFtZShzdHlsZXMsIGlkZW50aWZpZXJOYW1lKSB7XG4gICAgICByZXR1cm4gb2xkQ3JlYXRlQ2xhc3NOYW1lKHN0eWxlcy5yZXBsYWNlKHNvdXJjZU1hcHBpbmdVcmxQYXR0ZXJuLCBmdW5jdGlvbiAoc291cmNlTWFwKSB7XG4gICAgICAgIGN1cnJlbnRTb3VyY2VNYXAgPSBzb3VyY2VNYXA7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0pLCBpZGVudGlmaWVyTmFtZSk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBjcmVhdGVTdHlsZXMgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZXMoc3RyaW5ncykge1xuICAgIHZhciBzdHJpbmdNb2RlID0gdHJ1ZTtcbiAgICB2YXIgc3R5bGVzID0gJyc7XG4gICAgdmFyIGlkZW50aWZpZXJOYW1lID0gJyc7XG5cbiAgICBpZiAoc3RyaW5ncyA9PSBudWxsIHx8IHN0cmluZ3MucmF3ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHN0cmluZ01vZGUgPSBmYWxzZTtcbiAgICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uLmNhbGwodGhpcywgc3RyaW5ncywgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgKz0gc3RyaW5nc1swXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgaW50ZXJwb2xhdGlvbnMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgaW50ZXJwb2xhdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGludGVycG9sYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGludGVycG9sYXRpb24sIGkpIHtcbiAgICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uLmNhbGwodGhpcywgaW50ZXJwb2xhdGlvbiwgc3R5bGVzLmNoYXJDb2RlQXQoc3R5bGVzLmxlbmd0aCAtIDEpID09PSA0NiAvLyAuXG4gICAgICApO1xuXG4gICAgICBpZiAoc3RyaW5nTW9kZSA9PT0gdHJ1ZSAmJiBzdHJpbmdzW2kgKyAxXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0eWxlcyArPSBzdHJpbmdzW2kgKyAxXTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICBzdHlsZXNXaXRoTGFiZWwgPSBzdHlsZXM7XG4gICAgc3R5bGVzID0gc3R5bGVzLnJlcGxhY2UobGFiZWxQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gsIHAxKSB7XG4gICAgICBpZGVudGlmaWVyTmFtZSArPSBcIi1cIiArIHAxO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICAgIG5hbWUgPSBjcmVhdGVDbGFzc05hbWUoc3R5bGVzLCBpZGVudGlmaWVyTmFtZSk7XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciBvbGRTdHlsaXMgPSBzdHlsaXM7XG5cbiAgICBzdHlsaXMgPSBmdW5jdGlvbiBzdHlsaXMoc2VsZWN0b3IsIHN0eWxlcykge1xuICAgICAgb2xkU3R5bGlzKHNlbGVjdG9yLCBzdHlsZXMpO1xuICAgICAgY3VycmVudFNvdXJjZU1hcCA9ICcnO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnQoc2NvcGUsIHN0eWxlcykge1xuICAgIGlmIChjYWNoZXMuaW5zZXJ0ZWRbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY3VycmVudCA9ICcnO1xuICAgICAgc3R5bGlzKHNjb3BlLCBzdHlsZXMpO1xuICAgICAgY2FjaGVzLmluc2VydGVkW25hbWVdID0gY3VycmVudDtcbiAgICB9XG4gIH1cblxuICB2YXIgY3NzID0gZnVuY3Rpb24gY3NzKCkge1xuICAgIHZhciBzdHlsZXMgPSBjcmVhdGVTdHlsZXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB2YXIgc2VsZWN0b3IgPSBrZXkgKyBcIi1cIiArIG5hbWU7XG5cbiAgICBpZiAoY2FjaGVzLnJlZ2lzdGVyZWRbc2VsZWN0b3JdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhY2hlcy5yZWdpc3RlcmVkW3NlbGVjdG9yXSA9IHN0eWxlc1dpdGhMYWJlbDtcbiAgICB9XG5cbiAgICBpbnNlcnQoXCIuXCIgKyBzZWxlY3Rvciwgc3R5bGVzKTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH07XG5cbiAgdmFyIGtleWZyYW1lcyA9IGZ1bmN0aW9uIGtleWZyYW1lcygpIHtcbiAgICB2YXIgc3R5bGVzID0gY3JlYXRlU3R5bGVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdmFyIGFuaW1hdGlvbiA9IFwiYW5pbWF0aW9uLVwiICsgbmFtZTtcbiAgICBpbnNlcnQoJycsIFwiQGtleWZyYW1lcyBcIiArIGFuaW1hdGlvbiArIFwie1wiICsgc3R5bGVzICsgXCJ9XCIpO1xuICAgIHJldHVybiBhbmltYXRpb247XG4gIH07XG5cbiAgdmFyIGluamVjdEdsb2JhbCA9IGZ1bmN0aW9uIGluamVjdEdsb2JhbCgpIHtcbiAgICB2YXIgc3R5bGVzID0gY3JlYXRlU3R5bGVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaW5zZXJ0KCcnLCBzdHlsZXMpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lcykge1xuICAgIHZhciByYXdDbGFzc05hbWUgPSAnJztcbiAgICBjbGFzc05hbWVzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoY2FjaGVzLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlZ2lzdGVyZWRTdHlsZXMucHVzaChjbGFzc05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmF3Q2xhc3NOYW1lICs9IGNsYXNzTmFtZSArIFwiIFwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByYXdDbGFzc05hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZShjbGFzc05hbWUsIHNvdXJjZU1hcCkge1xuICAgIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW107XG4gICAgdmFyIHJhd0NsYXNzTmFtZSA9IGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lKTtcblxuICAgIGlmIChyZWdpc3RlcmVkU3R5bGVzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhd0NsYXNzTmFtZSArIGNzcyhyZWdpc3RlcmVkU3R5bGVzLCBzb3VyY2VNYXApO1xuICB9XG5cbiAgZnVuY3Rpb24gY3goKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc05hbWVzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBjbGFzc05hbWVzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlKGNsYXNzbmFtZXMoY2xhc3NOYW1lcykpO1xuICB9XG5cbiAgZnVuY3Rpb24gaHlkcmF0ZVNpbmdsZUlkKGlkKSB7XG4gICAgY2FjaGVzLmluc2VydGVkW2lkXSA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBoeWRyYXRlKGlkcykge1xuICAgIGlkcy5mb3JFYWNoKGh5ZHJhdGVTaW5nbGVJZCk7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBzaGVldC5mbHVzaCgpO1xuICAgICAgc2hlZXQuaW5qZWN0KCk7XG4gICAgfVxuXG4gICAgY2FjaGVzLmluc2VydGVkID0ge307XG4gICAgY2FjaGVzLnJlZ2lzdGVyZWQgPSB7fTtcbiAgfVxuXG4gIGlmIChpc0Jyb3dzZXIpIHtcbiAgICB2YXIgY2h1bmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWVtb3Rpb24tXCIgKyBrZXkgKyBcIl1cIik7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChjaHVua3MsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBzaGVldC50YWdzWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHNoZWV0LnRhZ3NbMF0pOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgIG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1lbW90aW9uLVwiICsga2V5KS5zcGxpdCgnICcpLmZvckVhY2goaHlkcmF0ZVNpbmdsZUlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBlbW90aW9uID0ge1xuICAgIGZsdXNoOiBmbHVzaCxcbiAgICBoeWRyYXRlOiBoeWRyYXRlLFxuICAgIGN4OiBjeCxcbiAgICBtZXJnZTogbWVyZ2UsXG4gICAgZ2V0UmVnaXN0ZXJlZFN0eWxlczogZ2V0UmVnaXN0ZXJlZFN0eWxlcyxcbiAgICBpbmplY3RHbG9iYWw6IGluamVjdEdsb2JhbCxcbiAgICBrZXlmcmFtZXM6IGtleWZyYW1lcyxcbiAgICBjc3M6IGNzcyxcbiAgICBzaGVldDogc2hlZXQsXG4gICAgY2FjaGVzOiBjYWNoZXNcbiAgfTtcbiAgY29udGV4dC5fX1NFQ1JFVF9FTU9USU9OX18gPSBlbW90aW9uO1xuICByZXR1cm4gZW1vdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRW1vdGlvbjtcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJ2YXIgdW5pdGxlc3NLZXlzID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IDEsXG4gIGJvcmRlckltYWdlU2xpY2U6IDEsXG4gIGJvcmRlckltYWdlV2lkdGg6IDEsXG4gIGJveEZsZXg6IDEsXG4gIGJveEZsZXhHcm91cDogMSxcbiAgYm94T3JkaW5hbEdyb3VwOiAxLFxuICBjb2x1bW5Db3VudDogMSxcbiAgY29sdW1uczogMSxcbiAgZmxleDogMSxcbiAgZmxleEdyb3c6IDEsXG4gIGZsZXhQb3NpdGl2ZTogMSxcbiAgZmxleFNocmluazogMSxcbiAgZmxleE5lZ2F0aXZlOiAxLFxuICBmbGV4T3JkZXI6IDEsXG4gIGdyaWRSb3c6IDEsXG4gIGdyaWRSb3dFbmQ6IDEsXG4gIGdyaWRSb3dTcGFuOiAxLFxuICBncmlkUm93U3RhcnQ6IDEsXG4gIGdyaWRDb2x1bW46IDEsXG4gIGdyaWRDb2x1bW5FbmQ6IDEsXG4gIGdyaWRDb2x1bW5TcGFuOiAxLFxuICBncmlkQ29sdW1uU3RhcnQ6IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bml0bGVzc0tleXM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gbXVybXVyaGFzaDIgdmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9nYXJ5Y291cnQvbXVybXVyaGFzaC1qcy9ibG9iL21hc3Rlci9tdXJtdXJoYXNoMl9nYy5qc1xuZnVuY3Rpb24gbXVybXVyaGFzaDJfMzJfZ2Moc3RyKSB7XG4gIHZhciBsID0gc3RyLmxlbmd0aCxcbiAgICAgIGggPSBsIF4gbCxcbiAgICAgIGkgPSAwLFxuICAgICAgaztcblxuICB3aGlsZSAobCA+PSA0KSB7XG4gICAgayA9IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgOCB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMTYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDI0O1xuICAgIGsgPSAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKCgoayA+Pj4gMTYpICogMHg1YmQxZTk5NSAmIDB4ZmZmZikgPDwgMTYpO1xuICAgIGsgXj0gayA+Pj4gMjQ7XG4gICAgayA9IChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKChrID4+PiAxNikgKiAweDViZDFlOTk1ICYgMHhmZmZmKSA8PCAxNik7XG4gICAgaCA9IChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKChoID4+PiAxNikgKiAweDViZDFlOTk1ICYgMHhmZmZmKSA8PCAxNikgXiBrO1xuICAgIGwgLT0gNDtcbiAgICArK2k7XG4gIH1cblxuICBzd2l0Y2ggKGwpIHtcbiAgICBjYXNlIDM6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMikgJiAweGZmKSA8PCAxNjtcblxuICAgIGNhc2UgMjpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmYpIDw8IDg7XG5cbiAgICBjYXNlIDE6XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZjtcbiAgICAgIGggPSAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKCgoaCA+Pj4gMTYpICogMHg1YmQxZTk5NSAmIDB4ZmZmZikgPDwgMTYpO1xuICB9XG5cbiAgaCBePSBoID4+PiAxMztcbiAgaCA9IChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKChoID4+PiAxNikgKiAweDViZDFlOTk1ICYgMHhmZmZmKSA8PCAxNik7XG4gIGggXj0gaCA+Pj4gMTU7XG4gIHJldHVybiAoaCA+Pj4gMCkudG9TdHJpbmcoMzYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtdXJtdXJoYXNoMl8zMl9nYztcbiIsImZ1bmN0aW9uIHN0eWxpc19taW4gKFcpIHtcbiAgZnVuY3Rpb24gTShkLCBjLCBlLCBoLCBhKSB7XG4gICAgZm9yICh2YXIgbSA9IDAsIGIgPSAwLCB2ID0gMCwgbiA9IDAsIHEsIGcsIHggPSAwLCBLID0gMCwgaywgdSA9IGsgPSBxID0gMCwgbCA9IDAsIHIgPSAwLCBJID0gMCwgdCA9IDAsIEIgPSBlLmxlbmd0aCwgSiA9IEIgLSAxLCB5LCBmID0gJycsIHAgPSAnJywgRiA9ICcnLCBHID0gJycsIEM7IGwgPCBCOykge1xuICAgICAgZyA9IGUuY2hhckNvZGVBdChsKTtcbiAgICAgIGwgPT09IEogJiYgMCAhPT0gYiArIG4gKyB2ICsgbSAmJiAoMCAhPT0gYiAmJiAoZyA9IDQ3ID09PSBiID8gMTAgOiA0NyksIG4gPSB2ID0gbSA9IDAsIEIrKywgSisrKTtcblxuICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgaWYgKGwgPT09IEogJiYgKDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSksIDAgPCBmLnRyaW0oKS5sZW5ndGgpKSB7XG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgZiArPSBlLmNoYXJBdChsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnID0gNTk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgIGYgPSBmLnRyaW0oKTtcbiAgICAgICAgICAgIHEgPSBmLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBrID0gMTtcblxuICAgICAgICAgICAgZm9yICh0ID0gKytsOyBsIDwgQjspIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgICAgICAgICAgay0tO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodSA9IGwgKyAxOyB1IDwgSjsgKyt1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5jaGFyQ29kZUF0KHUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0MiA9PT0gZyAmJiA0MiA9PT0gZS5jaGFyQ29kZUF0KHUgLSAxKSAmJiBsICsgMiAhPT0gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0NyA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgIGZvciAoOyBsKysgPCBKICYmIGUuY2hhckNvZGVBdChsKSAhPT0gZzspIHtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKDAgPT09IGspIGJyZWFrO1xuICAgICAgICAgICAgICBsKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGsgPSBlLnN1YnN0cmluZyh0LCBsKTtcbiAgICAgICAgICAgIDAgPT09IHEgJiYgKHEgPSAoZiA9IGYucmVwbGFjZShjYSwgJycpLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocSkge1xuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSk7XG4gICAgICAgICAgICAgICAgZyA9IGYuY2hhckNvZGVBdCgxKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgciA9IGM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByID0gTztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBrID0gTShjLCByLCBrLCBnLCBhICsgMSk7XG4gICAgICAgICAgICAgICAgdCA9IGsubGVuZ3RoO1xuICAgICAgICAgICAgICAgIDAgPCBBICYmIChyID0gWChPLCBmLCBJKSwgQyA9IEgoMywgaywgciwgYywgRCwgeiwgdCwgZywgYSwgaCksIGYgPSByLmpvaW4oJycpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHQgPSAoayA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChnID0gMCwgayA9ICcnKSk7XG4gICAgICAgICAgICAgICAgaWYgKDAgPCB0KSBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGRhLCBlYSk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShmYSwgJyQxICQyJyk7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgayA9IDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKCdAJyArIGssIDMpID8gJ0Atd2Via2l0LScgKyBrICsgJ0AnICsgayA6ICdAJyArIGs7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArIGssIDExMiA9PT0gaCAmJiAoayA9IChwICs9IGssICcnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGsgPSAnJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIFgoYywgZiwgSSksIGssIGgsIGEgKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRiArPSBrO1xuICAgICAgICAgICAgayA9IEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgZiA9ICgwIDwgciA/IGYucmVwbGFjZShOLCAnJykgOiBmKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoMSA8ICh0ID0gZi5sZW5ndGgpKSBzd2l0Y2ggKDAgPT09IHUgJiYgKHEgPSBmLmNoYXJDb2RlQXQoMCksIDQ1ID09PSBxIHx8IDk2IDwgcSAmJiAxMjMgPiBxKSAmJiAodCA9IChmID0gZi5yZXBsYWNlKCcgJywgJzonKSkubGVuZ3RoKSwgMCA8IEEgJiYgdm9pZCAwICE9PSAoQyA9IEgoMSwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpKSAmJiAwID09PSAodCA9IChmID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGYgPSAnXFx4MDBcXHgwMCcpLCBxID0gZi5jaGFyQ29kZUF0KDApLCBnID0gZi5jaGFyQ29kZUF0KDEpLCBxKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIGlmICgxMDUgPT09IGcgfHwgOTkgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgIEcgKz0gZiArIGUuY2hhckF0KGwpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgNTggIT09IGYuY2hhckNvZGVBdCh0IC0gMSkgJiYgKHAgKz0gUChmLCBxLCBnLCBmLmNoYXJDb2RlQXQoMikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIDQ3ID09PSBiID8gYiA9IDAgOiAwID09PSAxICsgcSAmJiAxMDcgIT09IGggJiYgMCA8IGYubGVuZ3RoICYmIChyID0gMSwgZiArPSAnXFx4MDAnKTtcbiAgICAgICAgICAwIDwgQSAqIFkgJiYgSCgwLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCk7XG4gICAgICAgICAgeiA9IDE7XG4gICAgICAgICAgRCsrO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTk6XG4gICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgICAgICB6Kys7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB6Kys7XG4gICAgICAgICAgeSA9IGUuY2hhckF0KGwpO1xuXG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIG0gKyBiKSBzd2l0Y2ggKHgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICB5ID0gJyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAzMiAhPT0gZyAmJiAoeSA9ICcgJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcMCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFxmJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXHYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIChyID0gSSA9IDEsIHkgPSAnXFxmJyArIHkpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0gKyBFICYmIDAgPCB1KSBzd2l0Y2ggKGwgLSB1KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgMTEyID09PSB4ICYmIDU4ID09PSBlLmNoYXJDb2RlQXQobCAtIDMpICYmIChFID0geCk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAxMTEgPT09IEsgJiYgKEUgPSBLKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmICh1ID0gbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICYmIChyID0gMSwgeSArPSAnXFxyJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgMCA9PT0gYiAmJiAobiA9IG4gPT09IGcgPyAwIDogMCA9PT0gbiA/IGcgOiBuKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbS0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIHYtLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0pIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcSkgc3dpdGNoICgyICogeCArIDMgKiBLKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDUzMzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHEgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2Kys7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSArIHUgKyBrICYmIChrID0gMSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgaWYgKCEoMCA8IG4gKyBtICsgdikpIHN3aXRjaCAoYikge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoMiAqIGcgKyAzICogZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIzNTpcbiAgICAgICAgICAgICAgICAgICAgICBiID0gNDc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICAgICAgICAgICAgdCA9IGwsIGIgPSA0MjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgNDcgPT09IGcgJiYgNDIgPT09IHggJiYgdCArIDIgIT09IGwgJiYgKDMzID09PSBlLmNoYXJDb2RlQXQodCArIDIpICYmIChwICs9IGUuc3Vic3RyaW5nKHQsIGwgKyAxKSksIHkgPSAnJywgYiA9IDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMCA9PT0gYiAmJiAoZiArPSB5KTtcbiAgICAgIH1cblxuICAgICAgSyA9IHg7XG4gICAgICB4ID0gZztcbiAgICAgIGwrKztcbiAgICB9XG5cbiAgICB0ID0gcC5sZW5ndGg7XG5cbiAgICBpZiAoMCA8IHQpIHtcbiAgICAgIHIgPSBjO1xuICAgICAgaWYgKDAgPCBBICYmIChDID0gSCgyLCBwLCByLCBkLCBELCB6LCB0LCBoLCBhLCBoKSwgdm9pZCAwICE9PSBDICYmIDAgPT09IChwID0gQykubGVuZ3RoKSkgcmV0dXJuIEcgKyBwICsgRjtcbiAgICAgIHAgPSByLmpvaW4oJywnKSArICd7JyArIHAgKyAnfSc7XG5cbiAgICAgIGlmICgwICE9PSB3ICogRSkge1xuICAgICAgICAyICE9PSB3IHx8IEwocCwgMikgfHwgKEUgPSAwKTtcblxuICAgICAgICBzd2l0Y2ggKEUpIHtcbiAgICAgICAgICBjYXNlIDExMTpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoaGEsICc6LW1vei0kMScpICsgcDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTI6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKFEsICc6Oi13ZWJraXQtaW5wdXQtJDEnKSArIHAucmVwbGFjZShRLCAnOjotbW96LSQxJykgKyBwLnJlcGxhY2UoUSwgJzotbXMtaW5wdXQtJDEnKSArIHA7XG4gICAgICAgIH1cblxuICAgICAgICBFID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRyArIHAgKyBGO1xuICB9XG5cbiAgZnVuY3Rpb24gWChkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLnRyaW0oKS5zcGxpdChpYSk7XG4gICAgYyA9IGg7XG4gICAgdmFyIGEgPSBoLmxlbmd0aCxcbiAgICAgICAgbSA9IGQubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHZhciBiID0gMDtcblxuICAgICAgICBmb3IgKGQgPSAwID09PSBtID8gJycgOiBkWzBdICsgJyAnOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgY1tiXSA9IFooZCwgY1tiXSwgZSwgbSkudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2ID0gYiA9IDA7XG5cbiAgICAgICAgZm9yIChjID0gW107IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG07ICsrbikge1xuICAgICAgICAgICAgY1t2KytdID0gWihkW25dICsgJyAnLCBoW2JdLCBlLCBtKS50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFooZCwgYywgZSkge1xuICAgIHZhciBoID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIDMzID4gaCAmJiAoaCA9IChjID0gYy50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgc3dpdGNoIChoKSB7XG4gICAgICBjYXNlIDM4OlxuICAgICAgICByZXR1cm4gYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGNhc2UgNTg6XG4gICAgICAgIHJldHVybiBkLnRyaW0oKSArIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoMCA8IDEgKiBlICYmIDAgPCBjLmluZGV4T2YoJ1xcZicpKSByZXR1cm4gYy5yZXBsYWNlKEYsICg1OCA9PT0gZC5jaGFyQ29kZUF0KDApID8gJycgOiAnJDEnKSArIGQudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZCArIGM7XG4gIH1cblxuICBmdW5jdGlvbiBQKGQsIGMsIGUsIGgpIHtcbiAgICB2YXIgYSA9IGQgKyAnOycsXG4gICAgICAgIG0gPSAyICogYyArIDMgKiBlICsgNCAqIGg7XG5cbiAgICBpZiAoOTQ0ID09PSBtKSB7XG4gICAgICBkID0gYS5pbmRleE9mKCc6JywgOSkgKyAxO1xuICAgICAgdmFyIGIgPSBhLnN1YnN0cmluZyhkLCBhLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgIGIgPSBhLnN1YnN0cmluZygwLCBkKS50cmltKCkgKyBiICsgJzsnO1xuICAgICAgcmV0dXJuIDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKGIsIDEpID8gJy13ZWJraXQtJyArIGIgKyBiIDogYjtcbiAgICB9XG5cbiAgICBpZiAoMCA9PT0gdyB8fCAyID09PSB3ICYmICFMKGEsIDEpKSByZXR1cm4gYTtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAxMDE1OlxuICAgICAgICByZXR1cm4gOTcgPT09IGEuY2hhckNvZGVBdCgxMCkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk1MTpcbiAgICAgICAgcmV0dXJuIDExNiA9PT0gYS5jaGFyQ29kZUF0KDMpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NjM6XG4gICAgICAgIHJldHVybiAxMTAgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMTAwOTpcbiAgICAgICAgaWYgKDEwMCAhPT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5Njk6XG4gICAgICBjYXNlIDk0MjpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5Nzg6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDE5OlxuICAgICAgY2FzZSA5ODM6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgODgzOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg4KSkgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcbiAgICAgICAgaWYgKDAgPCBhLmluZGV4T2YoJ2ltYWdlLXNldCgnLCAxMSkpIHJldHVybiBhLnJlcGxhY2UoamEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMjpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNCkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDUpKSB7XG4gICAgICAgICAgY2FzZSAxMDM6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LScgKyBhLnJlcGxhY2UoJy1ncm93JywgJycpICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2dyb3cnLCAncG9zaXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnc2hyaW5rJywgJ25lZ2F0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnYmFzaXMnLCAncHJlZmVycmVkLXNpemUnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTY0OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMjM6XG4gICAgICAgIGlmICg5OSAhPT0gYS5jaGFyQ29kZUF0KDgpKSBicmVhaztcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKGEuaW5kZXhPZignOicsIDE1KSkucmVwbGFjZSgnZmxleC0nLCAnJykucmVwbGFjZSgnc3BhY2UtYmV0d2VlbicsICdqdXN0aWZ5Jyk7XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtcGFjaycgKyBiICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtcGFjaycgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDA1OlxuICAgICAgICByZXR1cm4ga2EudGVzdChhKSA/IGEucmVwbGFjZShhYSwgJzotd2Via2l0LScpICsgYS5yZXBsYWNlKGFhLCAnOi1tb3otJykgKyBhIDogYTtcblxuICAgICAgY2FzZSAxZTM6XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZygxMykudHJpbSgpO1xuICAgICAgICBjID0gYi5pbmRleE9mKCctJykgKyAxO1xuXG4gICAgICAgIHN3aXRjaCAoYi5jaGFyQ29kZUF0KDApICsgYi5jaGFyQ29kZUF0KGMpKSB7XG4gICAgICAgICAgY2FzZSAyMjY6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0YicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIzMjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiLXJsJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAnbHInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAxNzpcbiAgICAgICAgaWYgKC0xID09PSBhLmluZGV4T2YoJ3N0aWNreScsIDkpKSBicmVhaztcblxuICAgICAgY2FzZSA5NzU6XG4gICAgICAgIGMgPSAoYSA9IGQpLmxlbmd0aCAtIDEwO1xuICAgICAgICBiID0gKDMzID09PSBhLmNoYXJDb2RlQXQoYykgPyBhLnN1YnN0cmluZygwLCBjKSA6IGEpLnN1YnN0cmluZyhkLmluZGV4T2YoJzonLCA3KSArIDEpLnRyaW0oKTtcblxuICAgICAgICBzd2l0Y2ggKG0gPSBiLmNoYXJDb2RlQXQoMCkgKyAoYi5jaGFyQ29kZUF0KDcpIHwgMCkpIHtcbiAgICAgICAgICBjYXNlIDIwMzpcbiAgICAgICAgICAgIGlmICgxMTEgPiBiLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGE7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjA3OlxuICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgKDEwMiA8IG0gPyAnaW5saW5lLScgOiAnJykgKyAnYm94JykgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYS5yZXBsYWNlKGIsICctbXMtJyArIGIgKyAnYm94JykgKyAnOycgKyBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGEgKyAnOyc7XG5cbiAgICAgIGNhc2UgOTM4OlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg1KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNikpIHtcbiAgICAgICAgICBjYXNlIDEwNTpcbiAgICAgICAgICAgIHJldHVybiBiID0gYS5yZXBsYWNlKCctaXRlbXMnLCAnJyksICctd2Via2l0LScgKyBhICsgJy13ZWJraXQtYm94LScgKyBiICsgJy1tcy1mbGV4LScgKyBiICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWl0ZW0tJyArIGEucmVwbGFjZShiYSwgJycpICsgYTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtbGluZS1wYWNrJyArIGEucmVwbGFjZSgnYWxpZ24tY29udGVudCcsICcnKS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3MzpcbiAgICAgIGNhc2UgOTg5OlxuICAgICAgICBpZiAoNDUgIT09IGEuY2hhckNvZGVBdCgzKSB8fCAxMjIgPT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMxOlxuICAgICAgY2FzZSA5NTM6XG4gICAgICAgIGlmICghMCA9PT0gbGEudGVzdChkKSkgcmV0dXJuIDExNSA9PT0gKGIgPSBkLnN1YnN0cmluZyhkLmluZGV4T2YoJzonKSArIDEpKS5jaGFyQ29kZUF0KDApID8gUChkLnJlcGxhY2UoJ3N0cmV0Y2gnLCAnZmlsbC1hdmFpbGFibGUnKSwgYywgZSwgaCkucmVwbGFjZSgnOmZpbGwtYXZhaWxhYmxlJywgJzpzdHJldGNoJykgOiBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgYS5yZXBsYWNlKGIsICctbW96LScgKyBiLnJlcGxhY2UoJ2ZpbGwtJywgJycpKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2MjpcbiAgICAgICAgaWYgKGEgPSAnLXdlYmtpdC0nICsgYSArICgxMDIgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctbXMtJyArIGEgOiAnJykgKyBhLCAyMTEgPT09IGUgKyBoICYmIDEwNSA9PT0gYS5jaGFyQ29kZUF0KDEzKSAmJiAwIDwgYS5pbmRleE9mKCd0cmFuc2Zvcm0nLCAxMCkpIHJldHVybiBhLnN1YnN0cmluZygwLCBhLmluZGV4T2YoJzsnLCAyNykgKyAxKS5yZXBsYWNlKG1hLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgZnVuY3Rpb24gTChkLCBjKSB7XG4gICAgdmFyIGUgPSBkLmluZGV4T2YoMSA9PT0gYyA/ICc6JyA6ICd7JyksXG4gICAgICAgIGggPSBkLnN1YnN0cmluZygwLCAzICE9PSBjID8gZSA6IDEwKTtcbiAgICBlID0gZC5zdWJzdHJpbmcoZSArIDEsIGQubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIFIoMiAhPT0gYyA/IGggOiBoLnJlcGxhY2UobmEsICckMScpLCBlLCBjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVhKGQsIGMpIHtcbiAgICB2YXIgZSA9IFAoYywgYy5jaGFyQ29kZUF0KDApLCBjLmNoYXJDb2RlQXQoMSksIGMuY2hhckNvZGVBdCgyKSk7XG4gICAgcmV0dXJuIGUgIT09IGMgKyAnOycgPyBlLnJlcGxhY2Uob2EsICcgb3IgKCQxKScpLnN1YnN0cmluZyg0KSA6ICcoJyArIGMgKyAnKSc7XG4gIH1cblxuICBmdW5jdGlvbiBIKGQsIGMsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpIHtcbiAgICBmb3IgKHZhciBnID0gMCwgeCA9IGMsIHc7IGcgPCBBOyArK2cpIHtcbiAgICAgIHN3aXRjaCAodyA9IFNbZ10uY2FsbChCLCBkLCB4LCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSkge1xuICAgICAgICBjYXNlIHZvaWQgMDpcbiAgICAgICAgY2FzZSAhMTpcbiAgICAgICAgY2FzZSAhMDpcbiAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeCA9IHc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHggIT09IGMpIHJldHVybiB4O1xuICB9XG5cbiAgZnVuY3Rpb24gVChkKSB7XG4gICAgc3dpdGNoIChkKSB7XG4gICAgICBjYXNlIHZvaWQgMDpcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgQSA9IFMubGVuZ3RoID0gMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN3aXRjaCAoZC5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMCwgZSA9IGQubGVuZ3RoOyBjIDwgZTsgKytjKSB7XG4gICAgICAgICAgICAgIFQoZFtjXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBGdW5jdGlvbjpcbiAgICAgICAgICAgIFNbQSsrXSA9IGQ7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICAgIFkgPSAhIWQgfCAwO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gVDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFUoZCkge1xuICAgIGQgPSBkLnByZWZpeDtcbiAgICB2b2lkIDAgIT09IGQgJiYgKFIgPSBudWxsLCBkID8gJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGQgPyB3ID0gMSA6ICh3ID0gMiwgUiA9IGQpIDogdyA9IDApO1xuICAgIHJldHVybiBVO1xuICB9XG5cbiAgZnVuY3Rpb24gQihkLCBjKSB7XG4gICAgdmFyIGUgPSBkO1xuICAgIDMzID4gZS5jaGFyQ29kZUF0KDApICYmIChlID0gZS50cmltKCkpO1xuICAgIFYgPSBlO1xuICAgIGUgPSBbVl07XG5cbiAgICBpZiAoMCA8IEEpIHtcbiAgICAgIHZhciBoID0gSCgtMSwgYywgZSwgZSwgRCwgeiwgMCwgMCwgMCwgMCk7XG4gICAgICB2b2lkIDAgIT09IGggJiYgJ3N0cmluZycgPT09IHR5cGVvZiBoICYmIChjID0gaCk7XG4gICAgfVxuXG4gICAgdmFyIGEgPSBNKE8sIGUsIGMsIDAsIDApO1xuICAgIDAgPCBBICYmIChoID0gSCgtMiwgYSwgZSwgZSwgRCwgeiwgYS5sZW5ndGgsIDAsIDAsIDApLCB2b2lkIDAgIT09IGggJiYgKGEgPSBoKSk7XG4gICAgViA9ICcnO1xuICAgIEUgPSAwO1xuICAgIHogPSBEID0gMTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIHZhciBjYSA9IC9eXFwwKy9nLFxuICAgICAgTiA9IC9bXFwwXFxyXFxmXS9nLFxuICAgICAgYWEgPSAvOiAqL2csXG4gICAgICBrYSA9IC96b298Z3JhLyxcbiAgICAgIG1hID0gLyhbLDogXSkodHJhbnNmb3JtKS9nLFxuICAgICAgaWEgPSAvLFxccis/L2csXG4gICAgICBGID0gLyhbXFx0XFxyXFxuIF0pKlxcZj8mL2csXG4gICAgICBmYSA9IC9AKGtcXHcrKVxccyooXFxTKilcXHMqLyxcbiAgICAgIFEgPSAvOjoocGxhY2UpL2csXG4gICAgICBoYSA9IC86KHJlYWQtb25seSkvZyxcbiAgICAgIEcgPSAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sXG4gICAgICBkYSA9IC9cXChcXHMqKC4qKVxccypcXCkvZyxcbiAgICAgIG9hID0gLyhbXFxzXFxTXSo/KTsvZyxcbiAgICAgIGJhID0gLy1zZWxmfGZsZXgtL2csXG4gICAgICBuYSA9IC9bXl0qPyg6W3JwXVtlbF1hW1xcdy1dKylbXl0qLyxcbiAgICAgIGxhID0gL3N0cmV0Y2h8OlxccypcXHcrXFwtKD86Y29udGV8YXZhaWwpLyxcbiAgICAgIGphID0gLyhbXi1dKShpbWFnZS1zZXRcXCgpLyxcbiAgICAgIHogPSAxLFxuICAgICAgRCA9IDEsXG4gICAgICBFID0gMCxcbiAgICAgIHcgPSAxLFxuICAgICAgTyA9IFtdLFxuICAgICAgUyA9IFtdLFxuICAgICAgQSA9IDAsXG4gICAgICBSID0gbnVsbCxcbiAgICAgIFkgPSAwLFxuICAgICAgViA9ICcnO1xuICBCLnVzZSA9IFQ7XG4gIEIuc2V0ID0gVTtcbiAgdm9pZCAwICE9PSBXICYmIFUoVyk7XG4gIHJldHVybiBCO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsaXNfbWluO1xuIiwiKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IChtb2R1bGVbJ2V4cG9ydHMnXSA9IGZhY3RvcnkoKSkgOlxuXHRcdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lWydhbWQnXSA/IGRlZmluZShmYWN0b3J5KCkpIDpcblx0XHRcdCh3aW5kb3dbJ3N0eWxpc1J1bGVTaGVldCddID0gZmFjdG9yeSgpKVxufShmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnXG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbnNlcnRSdWxlKSB7XG5cdFx0dmFyIGRlbGltaXRlciA9ICcvKnwqLydcblx0XHR2YXIgbmVlZGxlID0gZGVsaW1pdGVyKyd9J1xuXG5cdFx0ZnVuY3Rpb24gdG9TaGVldCAoYmxvY2spIHtcblx0XHRcdGlmIChibG9jaylcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpbnNlcnRSdWxlKGJsb2NrICsgJ30nKVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdH1cblxuXHRcdHJldHVybiBmdW5jdGlvbiBydWxlU2hlZXQgKGNvbnRleHQsIGNvbnRlbnQsIHNlbGVjdG9ycywgcGFyZW50cywgbGluZSwgY29sdW1uLCBsZW5ndGgsIG5zLCBkZXB0aCwgYXQpIHtcblx0XHRcdHN3aXRjaCAoY29udGV4dCkge1xuXHRcdFx0XHQvLyBwcm9wZXJ0eVxuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0Ly8gQGltcG9ydFxuXHRcdFx0XHRcdGlmIChkZXB0aCA9PT0gMCAmJiBjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDY0KVxuXHRcdFx0XHRcdFx0cmV0dXJuIGluc2VydFJ1bGUoY29udGVudCsnOycpLCAnJ1xuXHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdC8vIHNlbGVjdG9yXG5cdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRpZiAobnMgPT09IDApXG5cdFx0XHRcdFx0XHRyZXR1cm4gY29udGVudCArIGRlbGltaXRlclxuXHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdC8vIGF0LXJ1bGVcblx0XHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRcdHN3aXRjaCAobnMpIHtcblx0XHRcdFx0XHRcdC8vIEBmb250LWZhY2UsIEBwYWdlXG5cdFx0XHRcdFx0XHRjYXNlIDEwMjpcblx0XHRcdFx0XHRcdGNhc2UgMTEyOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW5zZXJ0UnVsZShzZWxlY3RvcnNbMF0rY29udGVudCksICcnXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gY29udGVudCArIChhdCA9PT0gMCA/IGRlbGltaXRlciA6ICcnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSAtMjpcblx0XHRcdFx0XHRjb250ZW50LnNwbGl0KG5lZWRsZSkuZm9yRWFjaCh0b1NoZWV0KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSkpXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgc2l6ZXJTdHlsZSA9IHtcblx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdHRvcDogMCxcblx0bGVmdDogMCxcblx0dmlzaWJpbGl0eTogJ2hpZGRlbicsXG5cdGhlaWdodDogMCxcblx0b3ZlcmZsb3c6ICdzY3JvbGwnLFxuXHR3aGl0ZVNwYWNlOiAncHJlJ1xufTtcblxudmFyIElOUFVUX1BST1BTX0JMQUNLTElTVCA9IFsnZXh0cmFXaWR0aCcsICdpbmplY3RTdHlsZXMnLCAnaW5wdXRDbGFzc05hbWUnLCAnaW5wdXRSZWYnLCAnaW5wdXRTdHlsZScsICdtaW5XaWR0aCcsICdvbkF1dG9zaXplJywgJ3BsYWNlaG9sZGVySXNNaW5XaWR0aCddO1xuXG52YXIgY2xlYW5JbnB1dFByb3BzID0gZnVuY3Rpb24gY2xlYW5JbnB1dFByb3BzKGlucHV0UHJvcHMpIHtcblx0SU5QVVRfUFJPUFNfQkxBQ0tMSVNULmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG5cdFx0cmV0dXJuIGRlbGV0ZSBpbnB1dFByb3BzW2ZpZWxkXTtcblx0fSk7XG5cdHJldHVybiBpbnB1dFByb3BzO1xufTtcblxudmFyIGNvcHlTdHlsZXMgPSBmdW5jdGlvbiBjb3B5U3R5bGVzKHN0eWxlcywgbm9kZSkge1xuXHRub2RlLnN0eWxlLmZvbnRTaXplID0gc3R5bGVzLmZvbnRTaXplO1xuXHRub2RlLnN0eWxlLmZvbnRGYW1pbHkgPSBzdHlsZXMuZm9udEZhbWlseTtcblx0bm9kZS5zdHlsZS5mb250V2VpZ2h0ID0gc3R5bGVzLmZvbnRXZWlnaHQ7XG5cdG5vZGUuc3R5bGUuZm9udFN0eWxlID0gc3R5bGVzLmZvbnRTdHlsZTtcblx0bm9kZS5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gc3R5bGVzLmxldHRlclNwYWNpbmc7XG5cdG5vZGUuc3R5bGUudGV4dFRyYW5zZm9ybSA9IHN0eWxlcy50ZXh0VHJhbnNmb3JtO1xufTtcblxudmFyIGlzSUUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubmF2aWdhdG9yID8gL01TSUUgfFRyaWRlbnRcXC98RWRnZVxcLy8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkgOiBmYWxzZTtcblxudmFyIGdlbmVyYXRlSWQgPSBmdW5jdGlvbiBnZW5lcmF0ZUlkKCkge1xuXHQvLyB3ZSBvbmx5IG5lZWQgYW4gYXV0by1nZW5lcmF0ZWQgSUQgZm9yIHN0eWxlc2hlZXQgaW5qZWN0aW9uLCB3aGljaCBpcyBvbmx5XG5cdC8vIHVzZWQgZm9yIElFLiBzbyBpZiB0aGUgYnJvd3NlciBpcyBub3QgSUUsIHRoaXMgc2hvdWxkIHJldHVybiB1bmRlZmluZWQuXG5cdHJldHVybiBpc0lFID8gJ18nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDEyKSA6IHVuZGVmaW5lZDtcbn07XG5cbnZhciBBdXRvc2l6ZUlucHV0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcblx0X2luaGVyaXRzKEF1dG9zaXplSW5wdXQsIF9Db21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIEF1dG9zaXplSW5wdXQocHJvcHMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXV0b3NpemVJbnB1dCk7XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQXV0b3NpemVJbnB1dC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEF1dG9zaXplSW5wdXQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cblx0XHRfdGhpcy5pbnB1dFJlZiA9IGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0X3RoaXMuaW5wdXQgPSBlbDtcblx0XHRcdGlmICh0eXBlb2YgX3RoaXMucHJvcHMuaW5wdXRSZWYgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0X3RoaXMucHJvcHMuaW5wdXRSZWYoZWwpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRfdGhpcy5wbGFjZUhvbGRlclNpemVyUmVmID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRfdGhpcy5wbGFjZUhvbGRlclNpemVyID0gZWw7XG5cdFx0fTtcblxuXHRcdF90aGlzLnNpemVyUmVmID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRfdGhpcy5zaXplciA9IGVsO1xuXHRcdH07XG5cblx0XHRfdGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlucHV0V2lkdGg6IHByb3BzLm1pbldpZHRoLFxuXHRcdFx0aW5wdXRJZDogcHJvcHMuaWQgfHwgZ2VuZXJhdGVJZCgpXG5cdFx0fTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoQXV0b3NpemVJbnB1dCwgW3tcblx0XHRrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdFx0dGhpcy5tb3VudGVkID0gdHJ1ZTtcblx0XHRcdHRoaXMuY29weUlucHV0U3R5bGVzKCk7XG5cdFx0XHR0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHRcdHZhciBpZCA9IG5leHRQcm9wcy5pZDtcblxuXHRcdFx0aWYgKGlkICE9PSB0aGlzLnByb3BzLmlkKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpbnB1dElkOiBpZCB8fCBnZW5lcmF0ZUlkKCkgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG5cdFx0XHRpZiAocHJldlN0YXRlLmlucHV0V2lkdGggIT09IHRoaXMuc3RhdGUuaW5wdXRXaWR0aCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIHRoaXMucHJvcHMub25BdXRvc2l6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25BdXRvc2l6ZSh0aGlzLnN0YXRlLmlucHV0V2lkdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFx0dGhpcy5tb3VudGVkID0gZmFsc2U7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29weUlucHV0U3R5bGVzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29weUlucHV0U3R5bGVzKCkge1xuXHRcdFx0aWYgKCF0aGlzLm1vdW50ZWQgfHwgIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBpbnB1dFN0eWxlcyA9IHRoaXMuaW5wdXQgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5pbnB1dCk7XG5cdFx0XHRpZiAoIWlucHV0U3R5bGVzKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvcHlTdHlsZXMoaW5wdXRTdHlsZXMsIHRoaXMuc2l6ZXIpO1xuXHRcdFx0aWYgKHRoaXMucGxhY2VIb2xkZXJTaXplcikge1xuXHRcdFx0XHRjb3B5U3R5bGVzKGlucHV0U3R5bGVzLCB0aGlzLnBsYWNlSG9sZGVyU2l6ZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3VwZGF0ZUlucHV0V2lkdGgnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVJbnB1dFdpZHRoKCkge1xuXHRcdFx0aWYgKCF0aGlzLm1vdW50ZWQgfHwgIXRoaXMuc2l6ZXIgfHwgdHlwZW9mIHRoaXMuc2l6ZXIuc2Nyb2xsV2lkdGggPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBuZXdJbnB1dFdpZHRoID0gdm9pZCAwO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMucGxhY2Vob2xkZXIgJiYgKCF0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMudmFsdWUgJiYgdGhpcy5wcm9wcy5wbGFjZWhvbGRlcklzTWluV2lkdGgpKSB7XG5cdFx0XHRcdG5ld0lucHV0V2lkdGggPSBNYXRoLm1heCh0aGlzLnNpemVyLnNjcm9sbFdpZHRoLCB0aGlzLnBsYWNlSG9sZGVyU2l6ZXIuc2Nyb2xsV2lkdGgpICsgMjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld0lucHV0V2lkdGggPSB0aGlzLnNpemVyLnNjcm9sbFdpZHRoICsgMjtcblx0XHRcdH1cblx0XHRcdC8vIGFkZCBleHRyYVdpZHRoIHRvIHRoZSBkZXRlY3RlZCB3aWR0aC4gZm9yIG51bWJlciB0eXBlcywgdGhpcyBkZWZhdWx0cyB0byAxNiB0byBhbGxvdyBmb3IgdGhlIHN0ZXBwZXIgVUlcblx0XHRcdHZhciBleHRyYVdpZHRoID0gdGhpcy5wcm9wcy50eXBlID09PSAnbnVtYmVyJyAmJiB0aGlzLnByb3BzLmV4dHJhV2lkdGggPT09IHVuZGVmaW5lZCA/IDE2IDogcGFyc2VJbnQodGhpcy5wcm9wcy5leHRyYVdpZHRoKSB8fCAwO1xuXHRcdFx0bmV3SW5wdXRXaWR0aCArPSBleHRyYVdpZHRoO1xuXHRcdFx0aWYgKG5ld0lucHV0V2lkdGggPCB0aGlzLnByb3BzLm1pbldpZHRoKSB7XG5cdFx0XHRcdG5ld0lucHV0V2lkdGggPSB0aGlzLnByb3BzLm1pbldpZHRoO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG5ld0lucHV0V2lkdGggIT09IHRoaXMuc3RhdGUuaW5wdXRXaWR0aCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpbnB1dFdpZHRoOiBuZXdJbnB1dFdpZHRoXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldElucHV0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0SW5wdXQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnB1dDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1cycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuXHRcdFx0dGhpcy5pbnB1dC5mb2N1cygpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2JsdXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuXHRcdFx0dGhpcy5pbnB1dC5ibHVyKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnc2VsZWN0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2VsZWN0KCkge1xuXHRcdFx0dGhpcy5pbnB1dC5zZWxlY3QoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJTdHlsZXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJTdHlsZXMoKSB7XG5cdFx0XHQvLyB0aGlzIG1ldGhvZCBpbmplY3RzIHN0eWxlcyB0byBoaWRlIElFJ3MgY2xlYXIgaW5kaWNhdG9yLCB3aGljaCBtZXNzZXNcblx0XHRcdC8vIHdpdGggaW5wdXQgc2l6ZSBkZXRlY3Rpb24uIHRoZSBzdHlsZXNoZWV0IGlzIG9ubHkgaW5qZWN0ZWQgd2hlbiB0aGVcblx0XHRcdC8vIGJyb3dzZXIgaXMgSUUsIGFuZCBjYW4gYWxzbyBiZSBkaXNhYmxlZCBieSB0aGUgYGluamVjdFN0eWxlc2AgcHJvcC5cblx0XHRcdHZhciBpbmplY3RTdHlsZXMgPSB0aGlzLnByb3BzLmluamVjdFN0eWxlcztcblxuXHRcdFx0cmV0dXJuIGlzSUUgJiYgaW5qZWN0U3R5bGVzID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJywgeyBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuXHRcdFx0XHRcdF9faHRtbDogJ2lucHV0IycgKyB0aGlzLnN0YXRlLmlucHV0SWQgKyAnOjotbXMtY2xlYXIge2Rpc3BsYXk6IG5vbmU7fSdcblx0XHRcdFx0fSB9KSA6IG51bGw7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIHNpemVyVmFsdWUgPSBbdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsIHRoaXMucHJvcHMudmFsdWUsICcnXS5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkge1xuXHRcdFx0XHRpZiAocHJldmlvdXNWYWx1ZSAhPT0gbnVsbCAmJiBwcmV2aW91c1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcHJldmlvdXNWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFZhbHVlO1xuXHRcdFx0fSk7XG5cblx0XHRcdHZhciB3cmFwcGVyU3R5bGUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcy5zdHlsZSk7XG5cdFx0XHRpZiAoIXdyYXBwZXJTdHlsZS5kaXNwbGF5KSB3cmFwcGVyU3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuXG5cdFx0XHR2YXIgaW5wdXRTdHlsZSA9IF9leHRlbmRzKHtcblx0XHRcdFx0Ym94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuXHRcdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS5pbnB1dFdpZHRoICsgJ3B4J1xuXHRcdFx0fSwgdGhpcy5wcm9wcy5pbnB1dFN0eWxlKTtcblxuXHRcdFx0dmFyIGlucHV0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcy5wcm9wcywgW10pO1xuXG5cdFx0XHRjbGVhbklucHV0UHJvcHMoaW5wdXRQcm9wcyk7XG5cdFx0XHRpbnB1dFByb3BzLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMuaW5wdXRDbGFzc05hbWU7XG5cdFx0XHRpbnB1dFByb3BzLmlkID0gdGhpcy5zdGF0ZS5pbnB1dElkO1xuXHRcdFx0aW5wdXRQcm9wcy5zdHlsZSA9IGlucHV0U3R5bGU7XG5cblx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSwgc3R5bGU6IHdyYXBwZXJTdHlsZSB9LFxuXHRcdFx0XHR0aGlzLnJlbmRlclN0eWxlcygpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBfZXh0ZW5kcyh7fSwgaW5wdXRQcm9wcywgeyByZWY6IHRoaXMuaW5wdXRSZWYgfSkpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IHJlZjogdGhpcy5zaXplclJlZiwgc3R5bGU6IHNpemVyU3R5bGUgfSxcblx0XHRcdFx0XHRzaXplclZhbHVlXG5cdFx0XHRcdCksXG5cdFx0XHRcdHRoaXMucHJvcHMucGxhY2Vob2xkZXIgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IHJlZjogdGhpcy5wbGFjZUhvbGRlclNpemVyUmVmLCBzdHlsZTogc2l6ZXJTdHlsZSB9LFxuXHRcdFx0XHRcdHRoaXMucHJvcHMucGxhY2Vob2xkZXJcblx0XHRcdFx0KSA6IG51bGxcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEF1dG9zaXplSW5wdXQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5BdXRvc2l6ZUlucHV0LnByb3BUeXBlcyA9IHtcblx0Y2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gY2xhc3NOYW1lIGZvciB0aGUgb3V0ZXIgZWxlbWVudFxuXHRkZWZhdWx0VmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LCAvLyBkZWZhdWx0IGZpZWxkIHZhbHVlXG5cdGV4dHJhV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFsvLyBhZGRpdGlvbmFsIHdpZHRoIGZvciBpbnB1dCBlbGVtZW50XG5cdF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLFxuXHRpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGlkIHRvIHVzZSBmb3IgdGhlIGlucHV0LCBjYW4gYmUgc2V0IGZvciBjb25zaXN0ZW50IHNuYXBzaG90c1xuXHRpbmplY3RTdHlsZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gaW5qZWN0IHRoZSBjdXN0b20gc3R5bGVzaGVldCB0byBoaWRlIGNsZWFyIFVJLCBkZWZhdWx0cyB0byB0cnVlXG5cdGlucHV0Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gY2xhc3NOYW1lIGZvciB0aGUgaW5wdXQgZWxlbWVudFxuXHRpbnB1dFJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyByZWYgY2FsbGJhY2sgZm9yIHRoZSBpbnB1dCBlbGVtZW50XG5cdGlucHV0U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCAvLyBjc3Mgc3R5bGVzIGZvciB0aGUgaW5wdXQgZWxlbWVudFxuXHRtaW5XaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoWy8vIG1pbmltdW0gd2lkdGggZm9yIGlucHV0IGVsZW1lbnRcblx0X3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXSksXG5cdG9uQXV0b3NpemU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gb25BdXRvc2l6ZSBoYW5kbGVyOiBmdW5jdGlvbihuZXdXaWR0aCkge31cblx0b25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gb25DaGFuZ2UgaGFuZGxlcjogZnVuY3Rpb24oZXZlbnQpIHt9XG5cdHBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gcGxhY2Vob2xkZXIgdGV4dFxuXHRwbGFjZWhvbGRlcklzTWluV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gZG9uJ3QgY29sbGFwc2Ugc2l6ZSB0byBsZXNzIHRoYW4gdGhlIHBsYWNlaG9sZGVyXG5cdHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgLy8gY3NzIHN0eWxlcyBmb3IgdGhlIG91dGVyIGVsZW1lbnRcblx0dmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55IC8vIGZpZWxkIHZhbHVlXG59O1xuQXV0b3NpemVJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG5cdG1pbldpZHRoOiAxLFxuXHRpbmplY3RTdHlsZXM6IHRydWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEF1dG9zaXplSW5wdXQ7IiwiaW1wb3J0IHJhZiBmcm9tICdyYWYnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcywgaW5qZWN0R2xvYmFsIH0gZnJvbSAnZW1vdGlvbic7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwsIGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQXV0b3NpemVJbnB1dCBmcm9tICdyZWFjdC1pbnB1dC1hdXRvc2l6ZSc7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgeyBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn07XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBvYmplY3RXaXRob3V0UHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cbnZhciB0b0NvbnN1bWFibGVBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcnIpO1xuICB9XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE5PIE9QXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ2xhc3MgTmFtZSBQcmVmaXhlclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBjb21wb25lbnQgc3RhdGUgZm9yIHN0eWxpbmcgd2l0aCBjbGFzcyBuYW1lcy5cblxuIEV4cGVjdHMgYW4gYXJyYXkgb2Ygc3RyaW5ncyBPUiBhIHN0cmluZy9vYmplY3QgcGFpcjpcbiAtIGNsYXNzTmFtZShbJ2NvbXAnLCAnY29tcC1hcmcnLCAnY29tcC1hcmctMiddKVxuICAgQHJldHVybnMgJ3JlYWN0LXNlbGVjdF9fY29tcCByZWFjdC1zZWxlY3RfX2NvbXAtYXJnIHJlYWN0LXNlbGVjdF9fY29tcC1hcmctMidcbiAtIGNsYXNzTmFtZSgnY29tcCcsIHsgc29tZTogdHJ1ZSwgc3RhdGU6IGZhbHNlIH0pXG4gICBAcmV0dXJucyAncmVhY3Qtc2VsZWN0X19jb21wIHJlYWN0LXNlbGVjdF9fY29tcC0tc29tZSdcbiovXG5mdW5jdGlvbiBhcHBseVByZWZpeFRvTmFtZShwcmVmaXgsIG5hbWUpIHtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIHByZWZpeDtcbiAgfSBlbHNlIGlmIChuYW1lWzBdID09PSAnLScpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgbmFtZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJ19fJyArIG5hbWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xhc3NOYW1lcyhwcmVmaXgsIGNzc0tleSwgc3RhdGUsIGNsYXNzTmFtZSkge1xuICB2YXIgYXJyID0gW2Nzc0tleSwgY2xhc3NOYW1lXTtcbiAgaWYgKHN0YXRlICYmIHByZWZpeCkge1xuICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkgJiYgc3RhdGVba2V5XSkge1xuICAgICAgICBhcnIucHVzaCgnJyArIGFwcGx5UHJlZml4VG9OYW1lKHByZWZpeCwga2V5KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaTtcbiAgfSkubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIFN0cmluZyhpKS50cmltKCk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ2xlYW4gVmFsdWVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgY2xlYW5WYWx1ZSA9IGZ1bmN0aW9uIGNsZWFuVmFsdWUodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUuZmlsdGVyKEJvb2xlYW4pO1xuICBpZiAoKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHJldHVybiBbdmFsdWVdO1xuICByZXR1cm4gW107XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEhhbmRsZSBJbnB1dCBDaGFuZ2Vcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShpbnB1dFZhbHVlLCBhY3Rpb25NZXRhLCBvbklucHV0Q2hhbmdlKSB7XG4gIGlmIChvbklucHV0Q2hhbmdlKSB7XG4gICAgdmFyIG5ld1ZhbHVlID0gb25JbnB1dENoYW5nZShpbnB1dFZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgICBpZiAodHlwZW9mIG5ld1ZhbHVlID09PSAnc3RyaW5nJykgcmV0dXJuIG5ld1ZhbHVlO1xuICB9XG4gIHJldHVybiBpbnB1dFZhbHVlO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNjcm9sbCBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaXNEb2N1bWVudEVsZW1lbnQoZWwpIHtcbiAgcmV0dXJuIFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHksIHdpbmRvd10uaW5kZXhPZihlbCkgPiAtMTtcbn1cblxuLy8gTm9ybWFsaXplZCBzY3JvbGxUbyAmIHNjcm9sbFRvcFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcChlbCkge1xuICBpZiAoaXNEb2N1bWVudEVsZW1lbnQoZWwpKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgfVxuICByZXR1cm4gZWwuc2Nyb2xsVG9wO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxUbyhlbCwgdG9wKSB7XG4gIC8vIHdpdGggYSBzY3JvbGwgZGlzdGFuY2UsIHdlIHBlcmZvcm0gc2Nyb2xsIG9uIHRoZSBlbGVtZW50XG4gIGlmIChpc0RvY3VtZW50RWxlbWVudChlbCkpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdG9wKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbC5zY3JvbGxUb3AgPSB0b3A7XG59XG5cbi8vIEdldCBTY3JvbGwgUGFyZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgdmFyIGV4Y2x1ZGVTdGF0aWNQYXJlbnQgPSBzdHlsZS5wb3NpdGlvbiA9PT0gJ2Fic29sdXRlJztcbiAgdmFyIG92ZXJmbG93UnggPSAvKGF1dG98c2Nyb2xsKS87XG4gIHZhciBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgLy8gc3VjayBpdCwgZmxvdy4uLlxuXG4gIGlmIChzdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykgcmV0dXJuIGRvY0VsO1xuXG4gIGZvciAodmFyIHBhcmVudCA9IGVsZW1lbnQ7IHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50Oykge1xuICAgIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpO1xuICAgIGlmIChleGNsdWRlU3RhdGljUGFyZW50ICYmIHN0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChvdmVyZmxvd1J4LnRlc3Qoc3R5bGUub3ZlcmZsb3cgKyBzdHlsZS5vdmVyZmxvd1kgKyBzdHlsZS5vdmVyZmxvd1gpKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkb2NFbDtcbn1cblxuLy8gQW5pbWF0ZWQgU2Nyb2xsIFRvXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gIEBwYXJhbSB0OiB0aW1lIChlbGFwc2VkKVxuICBAcGFyYW0gYjogaW5pdGlhbCB2YWx1ZVxuICBAcGFyYW0gYzogYW1vdW50IG9mIGNoYW5nZVxuICBAcGFyYW0gZDogZHVyYXRpb25cbiovXG5mdW5jdGlvbiBlYXNlT3V0Q3ViaWModCwgYiwgYywgZCkge1xuICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCArIDEpICsgYjtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZWRTY3JvbGxUbyhlbGVtZW50LCB0bykge1xuICB2YXIgZHVyYXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDIwMDtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBub29wO1xuXG4gIHZhciBzdGFydCA9IGdldFNjcm9sbFRvcChlbGVtZW50KTtcbiAgdmFyIGNoYW5nZSA9IHRvIC0gc3RhcnQ7XG4gIHZhciBpbmNyZW1lbnQgPSAxMDtcbiAgdmFyIGN1cnJlbnRUaW1lID0gMDtcblxuICBmdW5jdGlvbiBhbmltYXRlU2Nyb2xsKCkge1xuICAgIGN1cnJlbnRUaW1lICs9IGluY3JlbWVudDtcbiAgICB2YXIgdmFsID0gZWFzZU91dEN1YmljKGN1cnJlbnRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbik7XG4gICAgc2Nyb2xsVG8oZWxlbWVudCwgdmFsKTtcbiAgICBpZiAoY3VycmVudFRpbWUgPCBkdXJhdGlvbikge1xuICAgICAgcmFmKGFuaW1hdGVTY3JvbGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgYW5pbWF0ZVNjcm9sbCgpO1xufVxuXG4vLyBTY3JvbGwgSW50byBWaWV3XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gc2Nyb2xsSW50b1ZpZXcobWVudUVsLCBmb2N1c2VkRWwpIHtcbiAgdmFyIG1lbnVSZWN0ID0gbWVudUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgZm9jdXNlZFJlY3QgPSBmb2N1c2VkRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBvdmVyU2Nyb2xsID0gZm9jdXNlZEVsLm9mZnNldEhlaWdodCAvIDM7XG5cbiAgaWYgKGZvY3VzZWRSZWN0LmJvdHRvbSArIG92ZXJTY3JvbGwgPiBtZW51UmVjdC5ib3R0b20pIHtcbiAgICBzY3JvbGxUbyhtZW51RWwsIE1hdGgubWluKGZvY3VzZWRFbC5vZmZzZXRUb3AgKyBmb2N1c2VkRWwuY2xpZW50SGVpZ2h0IC0gbWVudUVsLm9mZnNldEhlaWdodCArIG92ZXJTY3JvbGwsIG1lbnVFbC5zY3JvbGxIZWlnaHQpKTtcbiAgfSBlbHNlIGlmIChmb2N1c2VkUmVjdC50b3AgLSBvdmVyU2Nyb2xsIDwgbWVudVJlY3QudG9wKSB7XG4gICAgc2Nyb2xsVG8obWVudUVsLCBNYXRoLm1heChmb2N1c2VkRWwub2Zmc2V0VG9wIC0gb3ZlclNjcm9sbCwgMCkpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR2V0IGJvdW5kaW5nIGNsaWVudCBvYmplY3Rcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBjYW5ub3QgZ2V0IGtleXMgdXNpbmcgYXJyYXkgbm90YXRpb24gd2l0aCBET01SZWN0XG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudE9iaihlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgIHRvcDogcmVjdC50b3AsXG4gICAgd2lkdGg6IHJlY3Qud2lkdGhcbiAgfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUb3VjaCBDYXBhYmlsaXR5IERldGVjdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaXNUb3VjaENhcGFibGUoKSB7XG4gIHRyeSB7XG4gICAgZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ1RvdWNoRXZlbnQnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1vYmlsZSBEZXZpY2UgRGV0ZWN0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBpc01vYmlsZURldmljZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gKC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KVxuICAgICk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZW51XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gR2V0IE1lbnUgUGxhY2VtZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZ2V0TWVudVBsYWNlbWVudChfcmVmKSB7XG4gIHZhciBtYXhIZWlnaHQgPSBfcmVmLm1heEhlaWdodCxcbiAgICAgIG1lbnVFbCA9IF9yZWYubWVudUVsLFxuICAgICAgbWluSGVpZ2h0ID0gX3JlZi5taW5IZWlnaHQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudCxcbiAgICAgIHNob3VsZFNjcm9sbCA9IF9yZWYuc2hvdWxkU2Nyb2xsLFxuICAgICAgaXNGaXhlZFBvc2l0aW9uID0gX3JlZi5pc0ZpeGVkUG9zaXRpb24sXG4gICAgICB0aGVtZSA9IF9yZWYudGhlbWU7XG4gIHZhciBzcGFjaW5nID0gdGhlbWUuc3BhY2luZztcblxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KG1lbnVFbCk7XG4gIHZhciBkZWZhdWx0U3RhdGUgPSB7IHBsYWNlbWVudDogJ2JvdHRvbScsIG1heEhlaWdodDogbWF4SGVpZ2h0IH07XG5cbiAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmcsIHJldHVybiBkZWZhdWx0IHN0YXRlXG4gIGlmICghbWVudUVsIHx8ICFtZW51RWwub2Zmc2V0UGFyZW50KSByZXR1cm4gZGVmYXVsdFN0YXRlO1xuXG4gIC8vIHdlIGNhbid0IHRydXN0IGBzY3JvbGxQYXJlbnQuc2Nyb2xsSGVpZ2h0YCAtLT4gaXQgbWF5IGluY3JlYXNlIHdoZW5cbiAgLy8gdGhlIG1lbnUgaXMgcmVuZGVyZWRcblxuICB2YXIgX3Njcm9sbFBhcmVudCRnZXRCb3VuID0gc2Nyb2xsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgc2Nyb2xsSGVpZ2h0ID0gX3Njcm9sbFBhcmVudCRnZXRCb3VuLmhlaWdodDtcblxuICB2YXIgX21lbnVFbCRnZXRCb3VuZGluZ0NsID0gbWVudUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgbWVudUJvdHRvbSA9IF9tZW51RWwkZ2V0Qm91bmRpbmdDbC5ib3R0b20sXG4gICAgICBtZW51SGVpZ2h0ID0gX21lbnVFbCRnZXRCb3VuZGluZ0NsLmhlaWdodCxcbiAgICAgIG1lbnVUb3AgPSBfbWVudUVsJGdldEJvdW5kaW5nQ2wudG9wO1xuXG4gIC8vICRGbG93Rml4TWUgZnVuY3Rpb24gcmV0dXJucyBhYm92ZSBpZiB0aGVyZSdzIG5vIG9mZnNldFBhcmVudFxuXG5cbiAgdmFyIF9tZW51RWwkb2Zmc2V0UGFyZW50JCA9IG1lbnVFbC5vZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjb250YWluZXJUb3AgPSBfbWVudUVsJG9mZnNldFBhcmVudCQudG9wO1xuXG4gIHZhciB2aWV3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB2YXIgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsVG9wKHNjcm9sbFBhcmVudCk7XG5cbiAgdmFyIG1hcmdpbkJvdHRvbSA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobWVudUVsKS5tYXJnaW5Cb3R0b20sIDEwKTtcbiAgdmFyIG1hcmdpblRvcCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobWVudUVsKS5tYXJnaW5Ub3AsIDEwKTtcbiAgdmFyIHZpZXdTcGFjZUFib3ZlID0gY29udGFpbmVyVG9wIC0gbWFyZ2luVG9wO1xuICB2YXIgdmlld1NwYWNlQmVsb3cgPSB2aWV3SGVpZ2h0IC0gbWVudVRvcDtcbiAgdmFyIHNjcm9sbFNwYWNlQWJvdmUgPSB2aWV3U3BhY2VBYm92ZSArIHNjcm9sbFRvcDtcbiAgdmFyIHNjcm9sbFNwYWNlQmVsb3cgPSBzY3JvbGxIZWlnaHQgLSBzY3JvbGxUb3AgLSBtZW51VG9wO1xuXG4gIHZhciBzY3JvbGxEb3duID0gbWVudUJvdHRvbSAtIHZpZXdIZWlnaHQgKyBzY3JvbGxUb3AgKyBtYXJnaW5Cb3R0b207XG4gIHZhciBzY3JvbGxVcCA9IHNjcm9sbFRvcCArIG1lbnVUb3AgLSBtYXJnaW5Ub3A7XG4gIHZhciBzY3JvbGxEdXJhdGlvbiA9IDE2MDtcblxuICBzd2l0Y2ggKHBsYWNlbWVudCkge1xuICAgIGNhc2UgJ2F1dG8nOlxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAvLyAxOiB0aGUgbWVudSB3aWxsIGZpdCwgZG8gbm90aGluZ1xuICAgICAgaWYgKHZpZXdTcGFjZUJlbG93ID49IG1lbnVIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHsgcGxhY2VtZW50OiAnYm90dG9tJywgbWF4SGVpZ2h0OiBtYXhIZWlnaHQgfTtcbiAgICAgIH1cblxuICAgICAgLy8gMjogdGhlIG1lbnUgd2lsbCBmaXQsIGlmIHNjcm9sbGVkXG4gICAgICBpZiAoc2Nyb2xsU3BhY2VCZWxvdyA+PSBtZW51SGVpZ2h0ICYmICFpc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbCkge1xuICAgICAgICAgIGFuaW1hdGVkU2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxEb3duLCBzY3JvbGxEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBwbGFjZW1lbnQ6ICdib3R0b20nLCBtYXhIZWlnaHQ6IG1heEhlaWdodCB9O1xuICAgICAgfVxuXG4gICAgICAvLyAzOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgY29uc3RyYWluZWRcbiAgICAgIGlmICghaXNGaXhlZFBvc2l0aW9uICYmIHNjcm9sbFNwYWNlQmVsb3cgPj0gbWluSGVpZ2h0IHx8IGlzRml4ZWRQb3NpdGlvbiAmJiB2aWV3U3BhY2VCZWxvdyA+PSBtaW5IZWlnaHQpIHtcbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbCkge1xuICAgICAgICAgIGFuaW1hdGVkU2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxEb3duLCBzY3JvbGxEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3ZSB3YW50IHRvIHByb3ZpZGUgYXMgbXVjaCBvZiB0aGUgbWVudSBhcyBwb3NzaWJsZSB0byB0aGUgdXNlcixcbiAgICAgICAgLy8gc28gZ2l2ZSB0aGVtIHdoYXRldmVyIGlzIGF2YWlsYWJsZSBiZWxvdyByYXRoZXIgdGhhbiB0aGUgbWluSGVpZ2h0LlxuICAgICAgICB2YXIgY29uc3RyYWluZWRIZWlnaHQgPSBpc0ZpeGVkUG9zaXRpb24gPyB2aWV3U3BhY2VCZWxvdyAtIG1hcmdpbkJvdHRvbSA6IHNjcm9sbFNwYWNlQmVsb3cgLSBtYXJnaW5Cb3R0b207XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICAgIG1heEhlaWdodDogY29uc3RyYWluZWRIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gNC4gRm9ya2VkIGJldmlvdXIgd2hlbiB0aGVyZSBpc24ndCBlbm91Z2ggc3BhY2UgYmVsb3dcblxuICAgICAgLy8gQVVUTzogZmxpcCB0aGUgbWVudSwgcmVuZGVyIGFib3ZlXG4gICAgICBpZiAocGxhY2VtZW50ID09PSAnYXV0bycgfHwgaXNGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgIC8vIG1heSBuZWVkIHRvIGJlIGNvbnN0cmFpbmVkIGFmdGVyIGZsaXBwaW5nXG4gICAgICAgIHZhciBfY29uc3RyYWluZWRIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICAgIHZhciBzcGFjZUFib3ZlID0gaXNGaXhlZFBvc2l0aW9uID8gdmlld1NwYWNlQWJvdmUgOiBzY3JvbGxTcGFjZUFib3ZlO1xuXG4gICAgICAgIGlmIChzcGFjZUFib3ZlID49IG1pbkhlaWdodCkge1xuICAgICAgICAgIF9jb25zdHJhaW5lZEhlaWdodCA9IE1hdGgubWluKHNwYWNlQWJvdmUgLSBtYXJnaW5Cb3R0b20gLSBzcGFjaW5nLmNvbnRyb2xIZWlnaHQsIG1heEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBwbGFjZW1lbnQ6ICd0b3AnLCBtYXhIZWlnaHQ6IF9jb25zdHJhaW5lZEhlaWdodCB9O1xuICAgICAgfVxuXG4gICAgICAvLyBCT1RUT006IGFsbG93IGJyb3dzZXIgdG8gaW5jcmVhc2Ugc2Nyb2xsYWJsZSBhcmVhIGFuZCBpbW1lZGlhdGVseSBzZXQgc2Nyb2xsXG4gICAgICBpZiAocGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgICAgICBzY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbERvd24pO1xuICAgICAgICByZXR1cm4geyBwbGFjZW1lbnQ6ICdib3R0b20nLCBtYXhIZWlnaHQ6IG1heEhlaWdodCB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndG9wJzpcbiAgICAgIC8vIDE6IHRoZSBtZW51IHdpbGwgZml0LCBkbyBub3RoaW5nXG4gICAgICBpZiAodmlld1NwYWNlQWJvdmUgPj0gbWVudUhlaWdodCkge1xuICAgICAgICByZXR1cm4geyBwbGFjZW1lbnQ6ICd0b3AnLCBtYXhIZWlnaHQ6IG1heEhlaWdodCB9O1xuICAgICAgfVxuXG4gICAgICAvLyAyOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgc2Nyb2xsZWRcbiAgICAgIGlmIChzY3JvbGxTcGFjZUFib3ZlID49IG1lbnVIZWlnaHQgJiYgIWlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgYW5pbWF0ZWRTY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbFVwLCBzY3JvbGxEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBwbGFjZW1lbnQ6ICd0b3AnLCBtYXhIZWlnaHQ6IG1heEhlaWdodCB9O1xuICAgICAgfVxuXG4gICAgICAvLyAzOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgY29uc3RyYWluZWRcbiAgICAgIGlmICghaXNGaXhlZFBvc2l0aW9uICYmIHNjcm9sbFNwYWNlQWJvdmUgPj0gbWluSGVpZ2h0IHx8IGlzRml4ZWRQb3NpdGlvbiAmJiB2aWV3U3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQpIHtcbiAgICAgICAgdmFyIF9jb25zdHJhaW5lZEhlaWdodDIgPSBtYXhIZWlnaHQ7XG5cbiAgICAgICAgLy8gd2Ugd2FudCB0byBwcm92aWRlIGFzIG11Y2ggb2YgdGhlIG1lbnUgYXMgcG9zc2libGUgdG8gdGhlIHVzZXIsXG4gICAgICAgIC8vIHNvIGdpdmUgdGhlbSB3aGF0ZXZlciBpcyBhdmFpbGFibGUgYmVsb3cgcmF0aGVyIHRoYW4gdGhlIG1pbkhlaWdodC5cbiAgICAgICAgaWYgKCFpc0ZpeGVkUG9zaXRpb24gJiYgc2Nyb2xsU3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQgfHwgaXNGaXhlZFBvc2l0aW9uICYmIHZpZXdTcGFjZUFib3ZlID49IG1pbkhlaWdodCkge1xuICAgICAgICAgIF9jb25zdHJhaW5lZEhlaWdodDIgPSBpc0ZpeGVkUG9zaXRpb24gPyB2aWV3U3BhY2VBYm92ZSAtIG1hcmdpblRvcCA6IHNjcm9sbFNwYWNlQWJvdmUgLSBtYXJnaW5Ub3A7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgYW5pbWF0ZWRTY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbFVwLCBzY3JvbGxEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBfY29uc3RyYWluZWRIZWlnaHQyXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIDQuIG5vdCBlbm91Z2ggc3BhY2UsIHRoZSBicm93c2VyIFdJTEwgTk9UIGluY3JlYXNlIHNjcm9sbGFibGUgYXJlYSB3aGVuXG4gICAgICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgZWxlbWVudCByZW5kZXJlZCBhYm92ZSB0aGUgdmlld3BvcnQgKG9ubHkgYmVsb3cpLlxuICAgICAgLy8gRmxpcCB0aGUgbWVudSwgcmVuZGVyIGJlbG93XG4gICAgICByZXR1cm4geyBwbGFjZW1lbnQ6ICdib3R0b20nLCBtYXhIZWlnaHQ6IG1heEhlaWdodCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGxhY2VtZW50IHByb3ZpZGVkIFwiJyArIHBsYWNlbWVudCArICdcIi4nKTtcbiAgfVxuXG4gIC8vIGZ1bGZpbCBjb250cmFjdCB3aXRoIGZsb3c6IGltcGxpY2l0IHJldHVybiB2YWx1ZSBvZiB1bmRlZmluZWRcbiAgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcbn1cblxuLy8gTWVudSBDb21wb25lbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBhbGlnblRvQ29udHJvbChwbGFjZW1lbnQpIHtcbiAgdmFyIHBsYWNlbWVudFRvQ1NTUHJvcCA9IHsgYm90dG9tOiAndG9wJywgdG9wOiAnYm90dG9tJyB9O1xuICByZXR1cm4gcGxhY2VtZW50ID8gcGxhY2VtZW50VG9DU1NQcm9wW3BsYWNlbWVudF0gOiAnYm90dG9tJztcbn1cbnZhciBjb2VyY2VQbGFjZW1lbnQgPSBmdW5jdGlvbiBjb2VyY2VQbGFjZW1lbnQocCkge1xuICByZXR1cm4gcCA9PT0gJ2F1dG8nID8gJ2JvdHRvbScgOiBwO1xufTtcblxudmFyIG1lbnVDU1MgPSBmdW5jdGlvbiBtZW51Q1NTKF9yZWYyKSB7XG4gIHZhciBfcmVmMztcblxuICB2YXIgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgX3JlZjIkdGhlbWUgPSBfcmVmMi50aGVtZSxcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9yZWYyJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIHNwYWNpbmcgPSBfcmVmMiR0aGVtZS5zcGFjaW5nLFxuICAgICAgY29sb3JzID0gX3JlZjIkdGhlbWUuY29sb3JzO1xuICByZXR1cm4gX3JlZjMgPSB7fSwgZGVmaW5lUHJvcGVydHkoX3JlZjMsIGFsaWduVG9Db250cm9sKHBsYWNlbWVudCksICcxMDAlJyksIGRlZmluZVByb3BlcnR5KF9yZWYzLCAnYmFja2dyb3VuZENvbG9yJywgY29sb3JzLm5ldXRyYWwwKSwgZGVmaW5lUHJvcGVydHkoX3JlZjMsICdib3JkZXJSYWRpdXMnLCBib3JkZXJSYWRpdXMpLCBkZWZpbmVQcm9wZXJ0eShfcmVmMywgJ2JveFNoYWRvdycsICcwIDAgMCAxcHggaHNsYSgwLCAwJSwgMCUsIDAuMSksIDAgNHB4IDExcHggaHNsYSgwLCAwJSwgMCUsIDAuMSknKSwgZGVmaW5lUHJvcGVydHkoX3JlZjMsICdtYXJnaW5Cb3R0b20nLCBzcGFjaW5nLm1lbnVHdXR0ZXIpLCBkZWZpbmVQcm9wZXJ0eShfcmVmMywgJ21hcmdpblRvcCcsIHNwYWNpbmcubWVudUd1dHRlciksIGRlZmluZVByb3BlcnR5KF9yZWYzLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKSwgZGVmaW5lUHJvcGVydHkoX3JlZjMsICd3aWR0aCcsICcxMDAlJyksIGRlZmluZVByb3BlcnR5KF9yZWYzLCAnekluZGV4JywgMSksIF9yZWYzO1xufTtcblxuLy8gTk9URTogaW50ZXJuYWwgb25seVxudmFyIE1lbnVQbGFjZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBpbmhlcml0cyhNZW51UGxhY2VyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNZW51UGxhY2VyKCkge1xuICAgIHZhciBfcmVmNDtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBNZW51UGxhY2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZjQgPSBNZW51UGxhY2VyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTWVudVBsYWNlcikpLmNhbGwuYXBwbHkoX3JlZjQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1heEhlaWdodDogX3RoaXMucHJvcHMubWF4TWVudUhlaWdodCxcbiAgICAgIHBsYWNlbWVudDogbnVsbFxuICAgIH0sIF90aGlzLmdldFBsYWNlbWVudCA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG1pbk1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wcy5taW5NZW51SGVpZ2h0LFxuICAgICAgICAgIG1heE1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wcy5tYXhNZW51SGVpZ2h0LFxuICAgICAgICAgIG1lbnVQbGFjZW1lbnQgPSBfdGhpcyRwcm9wcy5tZW51UGxhY2VtZW50LFxuICAgICAgICAgIG1lbnVQb3NpdGlvbiA9IF90aGlzJHByb3BzLm1lbnVQb3NpdGlvbixcbiAgICAgICAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgPSBfdGhpcyRwcm9wcy5tZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcsXG4gICAgICAgICAgdGhlbWUgPSBfdGhpcyRwcm9wcy50aGVtZTtcbiAgICAgIHZhciBnZXRQb3J0YWxQbGFjZW1lbnQgPSBfdGhpcy5jb250ZXh0LmdldFBvcnRhbFBsYWNlbWVudDtcblxuXG4gICAgICBpZiAoIXJlZikgcmV0dXJuO1xuXG4gICAgICAvLyBETyBOT1Qgc2Nyb2xsIGlmIHBvc2l0aW9uIGlzIGZpeGVkXG4gICAgICB2YXIgaXNGaXhlZFBvc2l0aW9uID0gbWVudVBvc2l0aW9uID09PSAnZml4ZWQnO1xuICAgICAgdmFyIHNob3VsZFNjcm9sbCA9IG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldyAmJiAhaXNGaXhlZFBvc2l0aW9uO1xuXG4gICAgICB2YXIgc3RhdGUgPSBnZXRNZW51UGxhY2VtZW50KHtcbiAgICAgICAgbWF4SGVpZ2h0OiBtYXhNZW51SGVpZ2h0LFxuICAgICAgICBtZW51RWw6IHJlZixcbiAgICAgICAgbWluSGVpZ2h0OiBtaW5NZW51SGVpZ2h0LFxuICAgICAgICBwbGFjZW1lbnQ6IG1lbnVQbGFjZW1lbnQsXG4gICAgICAgIHNob3VsZFNjcm9sbDogc2hvdWxkU2Nyb2xsLFxuICAgICAgICBpc0ZpeGVkUG9zaXRpb246IGlzRml4ZWRQb3NpdGlvbixcbiAgICAgICAgdGhlbWU6IHRoZW1lXG4gICAgICB9KTtcblxuICAgICAgaWYgKGdldFBvcnRhbFBsYWNlbWVudCkgZ2V0UG9ydGFsUGxhY2VtZW50KHN0YXRlKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgIH0sIF90aGlzLmdldFVwZGF0ZWRQcm9wcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBtZW51UGxhY2VtZW50ID0gX3RoaXMucHJvcHMubWVudVBsYWNlbWVudDtcblxuICAgICAgdmFyIHBsYWNlbWVudCA9IF90aGlzLnN0YXRlLnBsYWNlbWVudCB8fCBjb2VyY2VQbGFjZW1lbnQobWVudVBsYWNlbWVudCk7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX3RoaXMucHJvcHMsIHsgcGxhY2VtZW50OiBwbGFjZW1lbnQsIG1heEhlaWdodDogX3RoaXMuc3RhdGUubWF4SGVpZ2h0IH0pO1xuICAgIH0sIF90ZW1wKSwgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhNZW51UGxhY2VyLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cblxuICAgICAgcmV0dXJuIGNoaWxkcmVuKHtcbiAgICAgICAgcmVmOiB0aGlzLmdldFBsYWNlbWVudCxcbiAgICAgICAgcGxhY2VyUHJvcHM6IHRoaXMuZ2V0VXBkYXRlZFByb3BzKClcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTWVudVBsYWNlcjtcbn0oQ29tcG9uZW50KTtcblxuTWVudVBsYWNlci5jb250ZXh0VHlwZXMgPSB7XG4gIGdldFBvcnRhbFBsYWNlbWVudDogUHJvcFR5cGVzLmZ1bmNcbn07XG52YXIgTWVudSA9IGZ1bmN0aW9uIE1lbnUocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuXG4gIHZhciBjbiA9IGN4KCAvKiNfX1BVUkVfXyovY3NzKGdldFN0eWxlcygnbWVudScsIHByb3BzKSksIHsgbWVudTogdHJ1ZSB9LCBjbGFzc05hbWUpO1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIF9leHRlbmRzKHsgY2xhc3NOYW1lOiBjbiB9LCBpbm5lclByb3BzLCB7IHJlZjogaW5uZXJSZWYgfSksXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVudSBMaXN0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG1lbnVMaXN0Q1NTID0gZnVuY3Rpb24gbWVudUxpc3RDU1MoX3JlZjUpIHtcbiAgdmFyIG1heEhlaWdodCA9IF9yZWY1Lm1heEhlaWdodCxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjUudGhlbWUuc3BhY2luZy5iYXNlVW5pdDtcbiAgcmV0dXJuIHtcbiAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBwYWRkaW5nQm90dG9tOiBiYXNlVW5pdCxcbiAgICBwYWRkaW5nVG9wOiBiYXNlVW5pdCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJywgLy8gcmVxdWlyZWQgZm9yIG9mZnNldFtIZWlnaHQsIFRvcF0gPiBrZXlib2FyZCBzY3JvbGxcbiAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJ1xuICB9O1xufTtcbnZhciBNZW51TGlzdCA9IGZ1bmN0aW9uIE1lbnVMaXN0KHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlzTXVsdGkgPSBwcm9wcy5pc011bHRpLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZjtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IGN4KCAvKiNfX1BVUkVfXyovY3NzKGdldFN0eWxlcygnbWVudUxpc3QnLCBwcm9wcykpLCB7XG4gICAgICAgICdtZW51LWxpc3QnOiB0cnVlLFxuICAgICAgICAnbWVudS1saXN0LS1pcy1tdWx0aSc6IGlzTXVsdGlcbiAgICAgIH0sIGNsYXNzTmFtZSksXG4gICAgICByZWY6IGlubmVyUmVmXG4gICAgfSxcbiAgICBjaGlsZHJlblxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZW51IE5vdGljZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbm90aWNlQ1NTID0gZnVuY3Rpb24gbm90aWNlQ1NTKF9yZWY2KSB7XG4gIHZhciBfcmVmNiR0aGVtZSA9IF9yZWY2LnRoZW1lLFxuICAgICAgYmFzZVVuaXQgPSBfcmVmNiR0aGVtZS5zcGFjaW5nLmJhc2VVbml0LFxuICAgICAgY29sb3JzID0gX3JlZjYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGNvbG9yOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMiArICdweCAnICsgYmFzZVVuaXQgKiAzICsgJ3B4JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gIH07XG59O1xudmFyIG5vT3B0aW9uc01lc3NhZ2VDU1MgPSBub3RpY2VDU1M7XG52YXIgbG9hZGluZ01lc3NhZ2VDU1MgPSBub3RpY2VDU1M7XG5cbnZhciBOb09wdGlvbnNNZXNzYWdlID0gZnVuY3Rpb24gTm9PcHRpb25zTWVzc2FnZShwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc05hbWU6IGN4KCAvKiNfX1BVUkVfXyovY3NzKGdldFN0eWxlcygnbm9PcHRpb25zTWVzc2FnZScsIHByb3BzKSksIHtcbiAgICAgICAgJ21lbnUtbm90aWNlJzogdHJ1ZSxcbiAgICAgICAgJ21lbnUtbm90aWNlLS1uby1vcHRpb25zJzogdHJ1ZVxuICAgICAgfSwgY2xhc3NOYW1lKVxuICAgIH0sIGlubmVyUHJvcHMpLFxuICAgIGNoaWxkcmVuXG4gICk7XG59O1xuTm9PcHRpb25zTWVzc2FnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiAnTm8gb3B0aW9ucydcbn07XG5cbnZhciBMb2FkaW5nTWVzc2FnZSA9IGZ1bmN0aW9uIExvYWRpbmdNZXNzYWdlKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIF9leHRlbmRzKHtcbiAgICAgIGNsYXNzTmFtZTogY3goIC8qI19fUFVSRV9fKi9jc3MoZ2V0U3R5bGVzKCdsb2FkaW5nTWVzc2FnZScsIHByb3BzKSksIHtcbiAgICAgICAgJ21lbnUtbm90aWNlJzogdHJ1ZSxcbiAgICAgICAgJ21lbnUtbm90aWNlLS1sb2FkaW5nJzogdHJ1ZVxuICAgICAgfSwgY2xhc3NOYW1lKVxuICAgIH0sIGlubmVyUHJvcHMpLFxuICAgIGNoaWxkcmVuXG4gICk7XG59O1xuTG9hZGluZ01lc3NhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogJ0xvYWRpbmcuLi4nXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lbnUgUG9ydGFsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG1lbnVQb3J0YWxDU1MgPSBmdW5jdGlvbiBtZW51UG9ydGFsQ1NTKF9yZWY3KSB7XG4gIHZhciByZWN0ID0gX3JlZjcucmVjdCxcbiAgICAgIG9mZnNldCA9IF9yZWY3Lm9mZnNldCxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjcucG9zaXRpb247XG4gIHJldHVybiB7XG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICB0b3A6IG9mZnNldCxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICB6SW5kZXg6IDFcbiAgfTtcbn07XG5cbnZhciBNZW51UG9ydGFsID0gZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gIGluaGVyaXRzKE1lbnVQb3J0YWwsIF9Db21wb25lbnQyKTtcblxuICBmdW5jdGlvbiBNZW51UG9ydGFsKCkge1xuICAgIHZhciBfcmVmODtcblxuICAgIHZhciBfdGVtcDIsIF90aGlzMiwgX3JldDI7XG5cbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBNZW51UG9ydGFsKTtcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQyID0gKF90ZW1wMiA9IChfdGhpczIgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmOCA9IE1lbnVQb3J0YWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNZW51UG9ydGFsKSkuY2FsbC5hcHBseShfcmVmOCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpczIpLCBfdGhpczIuc3RhdGUgPSB7IHBsYWNlbWVudDogbnVsbCB9LCBfdGhpczIuZ2V0UG9ydGFsUGxhY2VtZW50ID0gZnVuY3Rpb24gKF9yZWY5KSB7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gX3JlZjkucGxhY2VtZW50O1xuXG4gICAgICB2YXIgaW5pdGlhbFBsYWNlbWVudCA9IGNvZXJjZVBsYWNlbWVudChfdGhpczIucHJvcHMubWVudVBsYWNlbWVudCk7XG5cbiAgICAgIC8vIGF2b2lkIHJlLXJlbmRlcnMgaWYgdGhlIHBsYWNlbWVudCBoYXMgbm90IGNoYW5nZWRcbiAgICAgIGlmIChwbGFjZW1lbnQgIT09IGluaXRpYWxQbGFjZW1lbnQpIHtcbiAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgcGxhY2VtZW50OiBwbGFjZW1lbnQgfSk7XG4gICAgICB9XG4gICAgfSwgX3RlbXAyKSwgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpczIsIF9yZXQyKTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKE1lbnVQb3J0YWwsIFt7XG4gICAga2V5OiAnZ2V0Q2hpbGRDb250ZXh0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UG9ydGFsUGxhY2VtZW50OiB0aGlzLmdldFBvcnRhbFBsYWNlbWVudFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBjYWxsYmFjayBmb3Igb2NjYXNzaW9ucyB3aGVyZSB0aGUgbWVudSBtdXN0IFwiZmxpcFwiXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFwcGVuZFRvID0gX3Byb3BzLmFwcGVuZFRvLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNvbnRyb2xFbGVtZW50ID0gX3Byb3BzLmNvbnRyb2xFbGVtZW50LFxuICAgICAgICAgIG1lbnVQbGFjZW1lbnQgPSBfcHJvcHMubWVudVBsYWNlbWVudCxcbiAgICAgICAgICBwb3NpdGlvbiA9IF9wcm9wcy5tZW51UG9zaXRpb24sXG4gICAgICAgICAgZ2V0U3R5bGVzID0gX3Byb3BzLmdldFN0eWxlcztcblxuICAgICAgdmFyIGlzRml4ZWQgPSBwb3NpdGlvbiA9PT0gJ2ZpeGVkJztcblxuICAgICAgLy8gYmFpbCBlYXJseSBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmVuJ3QgcHJlc2VudFxuICAgICAgaWYgKCFhcHBlbmRUbyAmJiAhaXNGaXhlZCB8fCAhY29udHJvbEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBwbGFjZW1lbnQgPSB0aGlzLnN0YXRlLnBsYWNlbWVudCB8fCBjb2VyY2VQbGFjZW1lbnQobWVudVBsYWNlbWVudCk7XG4gICAgICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50T2JqKGNvbnRyb2xFbGVtZW50KTtcbiAgICAgIHZhciBzY3JvbGxEaXN0YW5jZSA9IGlzRml4ZWQgPyAwIDogd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgdmFyIG9mZnNldCA9IHJlY3RbcGxhY2VtZW50XSArIHNjcm9sbERpc3RhbmNlO1xuICAgICAgdmFyIHN0YXRlID0geyBvZmZzZXQ6IG9mZnNldCwgcG9zaXRpb246IHBvc2l0aW9uLCByZWN0OiByZWN0IH07XG5cbiAgICAgIC8vIHNhbWUgd3JhcHBlciBlbGVtZW50IHdoZXRoZXIgZml4ZWQgb3IgcG9ydGFsbGVkXG4gICAgICB2YXIgbWVudVdyYXBwZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IC8qI19fUFVSRV9fKi8gLyojX19QVVJFX18qL2NzcyhnZXRTdHlsZXMoJ21lbnVQb3J0YWwnLCBzdGF0ZSkpIH0sXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gYXBwZW5kVG8gPyBjcmVhdGVQb3J0YWwobWVudVdyYXBwZXIsIGFwcGVuZFRvKSA6IG1lbnVXcmFwcGVyO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTWVudVBvcnRhbDtcbn0oQ29tcG9uZW50KTtcbk1lbnVQb3J0YWwuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIGdldFBvcnRhbFBsYWNlbWVudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbnZhciBrZXlMaXN0ID0gT2JqZWN0LmtleXM7XG52YXIgaGFzUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGVxdWFsKGEsIGIpIHtcbiAgLy8gZmFzdC1kZWVwLWVxdWFsIGluZGV4LmpzIDIuMC4xXG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSAmJiBiICYmICh0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYSkpID09ICdvYmplY3QnICYmICh0eXBlb2YgYiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYikpID09ICdvYmplY3QnKSB7XG4gICAgdmFyIGFyckEgPSBpc0FycmF5KGEpLFxuICAgICAgICBhcnJCID0gaXNBcnJheShiKSxcbiAgICAgICAgaSxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBrZXk7XG5cbiAgICBpZiAoYXJyQSAmJiBhcnJCKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgICBpZiAoIWVxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYXJyQSAhPSBhcnJCKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgZGF0ZUEgPSBhIGluc3RhbmNlb2YgRGF0ZSxcbiAgICAgICAgZGF0ZUIgPSBiIGluc3RhbmNlb2YgRGF0ZTtcbiAgICBpZiAoZGF0ZUEgIT0gZGF0ZUIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZGF0ZUEgJiYgZGF0ZUIpIHJldHVybiBhLmdldFRpbWUoKSA9PSBiLmdldFRpbWUoKTtcblxuICAgIHZhciByZWdleHBBID0gYSBpbnN0YW5jZW9mIFJlZ0V4cCxcbiAgICAgICAgcmVnZXhwQiA9IGIgaW5zdGFuY2VvZiBSZWdFeHA7XG4gICAgaWYgKHJlZ2V4cEEgIT0gcmVnZXhwQikgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChyZWdleHBBICYmIHJlZ2V4cEIpIHJldHVybiBhLnRvU3RyaW5nKCkgPT0gYi50b1N0cmluZygpO1xuXG4gICAgdmFyIGtleXMgPSBrZXlMaXN0KGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCAhPT0ga2V5TGlzdChiKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIGlmICghaGFzUHJvcC5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGVuZCBmYXN0LWRlZXAtZXF1YWxcblxuICAgIC8vIEN1c3RvbSBoYW5kbGluZyBmb3IgUmVhY3RcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoa2V5ID09PSAnX293bmVyJyAmJiBhLiQkdHlwZW9mKSB7XG4gICAgICAgIC8vIFJlYWN0LXNwZWNpZmljOiBhdm9pZCB0cmF2ZXJzaW5nIFJlYWN0IGVsZW1lbnRzJyBfb3duZXIuXG4gICAgICAgIC8vICBfb3duZXIgY29udGFpbnMgY2lyY3VsYXIgcmVmZXJlbmNlc1xuICAgICAgICAvLyBhbmQgaXMgbm90IG5lZWRlZCB3aGVuIGNvbXBhcmluZyB0aGUgYWN0dWFsIGVsZW1lbnRzIChhbmQgbm90IHRoZWlyIG93bmVycylcbiAgICAgICAgLy8gLiQkdHlwZW9mIGFuZCAuX3N0b3JlIG9uIGp1c3QgcmVhc29uYWJsZSBtYXJrZXJzIG9mIGEgcmVhY3QgZWxlbWVudFxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGFsbCBvdGhlciBwcm9wZXJ0aWVzIHNob3VsZCBiZSB0cmF2ZXJzZWQgYXMgdXN1YWxcbiAgICAgICAgaWYgKCFlcXVhbChhW2tleV0sIGJba2V5XSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBmYXN0LWRlZXAtZXF1YWwgaW5kZXguanMgMi4wLjFcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhICE9PSBhICYmIGIgIT09IGI7XG59XG4vLyBlbmQgZmFzdC1kZWVwLWVxdWFsXG5cbmZ1bmN0aW9uIGV4cG9ydGVkRXF1YWwoYSwgYikge1xuICB0cnkge1xuICAgIHJldHVybiBlcXVhbChhLCBiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IubWVzc2FnZSAmJiBlcnJvci5tZXNzYWdlLm1hdGNoKC9zdGFja3xyZWN1cnNpb24vaSkpIHtcbiAgICAgIC8vIHdhcm4gb24gY2lyY3VsYXIgcmVmZXJlbmNlcywgZG9uJ3QgY3Jhc2hcbiAgICAgIC8vIGJyb3dzZXJzIGdpdmUgdGhpcyBkaWZmZXJlbnQgZXJyb3JzIG5hbWUgYW5kIG1lc3NhZ2VzOlxuICAgICAgLy8gY2hyb21lL3NhZmFyaTogXCJSYW5nZUVycm9yXCIsIFwiTWF4aW11bSBjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIlxuICAgICAgLy8gZmlyZWZveDogXCJJbnRlcm5hbEVycm9yXCIsIHRvbyBtdWNoIHJlY3Vyc2lvblwiXG4gICAgICAvLyBlZGdlOiBcIkVycm9yXCIsIFwiT3V0IG9mIHN0YWNrIHNwYWNlXCJcbiAgICAgIGNvbnNvbGUud2FybignV2FybmluZzogcmVhY3QtZmFzdC1jb21wYXJlIGRvZXMgbm90IGhhbmRsZSBjaXJjdWxhciByZWZlcmVuY2VzLicsIGVycm9yLm5hbWUsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBzb21lIG90aGVyIGVycm9yLiB3ZSBzaG91bGQgZGVmaW5pdGVseSBrbm93IGFib3V0IHRoZXNlXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxudmFyIGRpYWNyaXRpY3MgPSBbeyBiYXNlOiAnQScsIGxldHRlcnM6IC9bXFx1MDA0MVxcdTI0QjZcXHVGRjIxXFx1MDBDMFxcdTAwQzFcXHUwMEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxcdTAwQzNcXHUwMTAwXFx1MDEwMlxcdTFFQjBcXHUxRUFFXFx1MUVCNFxcdTFFQjJcXHUwMjI2XFx1MDFFMFxcdTAwQzRcXHUwMURFXFx1MUVBMlxcdTAwQzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2Rl0vZyB9LCB7IGJhc2U6ICdBQScsIGxldHRlcnM6IC9bXFx1QTczMl0vZyB9LCB7IGJhc2U6ICdBRScsIGxldHRlcnM6IC9bXFx1MDBDNlxcdTAxRkNcXHUwMUUyXS9nIH0sIHsgYmFzZTogJ0FPJywgbGV0dGVyczogL1tcXHVBNzM0XS9nIH0sIHsgYmFzZTogJ0FVJywgbGV0dGVyczogL1tcXHVBNzM2XS9nIH0sIHsgYmFzZTogJ0FWJywgbGV0dGVyczogL1tcXHVBNzM4XFx1QTczQV0vZyB9LCB7IGJhc2U6ICdBWScsIGxldHRlcnM6IC9bXFx1QTczQ10vZyB9LCB7IGJhc2U6ICdCJywgbGV0dGVyczogL1tcXHUwMDQyXFx1MjRCN1xcdUZGMjJcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUwMjQzXFx1MDE4MlxcdTAxODFdL2cgfSwgeyBiYXNlOiAnQycsIGxldHRlcnM6IC9bXFx1MDA0M1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXS9nIH0sIHsgYmFzZTogJ0QnLCBsZXR0ZXJzOiAvW1xcdTAwNDRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XS9nIH0sIHsgYmFzZTogJ0RaJywgbGV0dGVyczogL1tcXHUwMUYxXFx1MDFDNF0vZyB9LCB7IGJhc2U6ICdEeicsIGxldHRlcnM6IC9bXFx1MDFGMlxcdTAxQzVdL2cgfSwgeyBiYXNlOiAnRScsIGxldHRlcnM6IC9bXFx1MDA0NVxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXS9nIH0sIHsgYmFzZTogJ0YnLCBsZXR0ZXJzOiAvW1xcdTAwNDZcXHUyNEJCXFx1RkYyNlxcdTFFMUVcXHUwMTkxXFx1QTc3Ql0vZyB9LCB7IGJhc2U6ICdHJywgbGV0dGVyczogL1tcXHUwMDQ3XFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VdL2cgfSwgeyBiYXNlOiAnSCcsIGxldHRlcnM6IC9bXFx1MDA0OFxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERdL2cgfSwgeyBiYXNlOiAnSScsIGxldHRlcnM6IC9bXFx1MDA0OVxcdTI0QkVcXHVGRjI5XFx1MDBDQ1xcdTAwQ0RcXHUwMENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxcdTAwQ0ZcXHUxRTJFXFx1MUVDOFxcdTAxQ0ZcXHUwMjA4XFx1MDIwQVxcdTFFQ0FcXHUwMTJFXFx1MUUyQ1xcdTAxOTddL2cgfSwgeyBiYXNlOiAnSicsIGxldHRlcnM6IC9bXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhdL2cgfSwgeyBiYXNlOiAnSycsIGxldHRlcnM6IC9bXFx1MDA0QlxcdTI0QzBcXHVGRjJCXFx1MUUzMFxcdTAxRThcXHUxRTMyXFx1MDEzNlxcdTFFMzRcXHUwMTk4XFx1MkM2OVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3QTJdL2cgfSwgeyBiYXNlOiAnTCcsIGxldHRlcnM6IC9bXFx1MDA0Q1xcdTI0QzFcXHVGRjJDXFx1MDEzRlxcdTAxMzlcXHUwMTNEXFx1MUUzNlxcdTFFMzhcXHUwMTNCXFx1MUUzQ1xcdTFFM0FcXHUwMTQxXFx1MDIzRFxcdTJDNjJcXHUyQzYwXFx1QTc0OFxcdUE3NDZcXHVBNzgwXS9nIH0sIHsgYmFzZTogJ0xKJywgbGV0dGVyczogL1tcXHUwMUM3XS9nIH0sIHsgYmFzZTogJ0xqJywgbGV0dGVyczogL1tcXHUwMUM4XS9nIH0sIHsgYmFzZTogJ00nLCBsZXR0ZXJzOiAvW1xcdTAwNERcXHUyNEMyXFx1RkYyRFxcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTJDNkVcXHUwMTlDXS9nIH0sIHsgYmFzZTogJ04nLCBsZXR0ZXJzOiAvW1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRdL2cgfSwgeyBiYXNlOiAnTkonLCBsZXR0ZXJzOiAvW1xcdTAxQ0FdL2cgfSwgeyBiYXNlOiAnTmonLCBsZXR0ZXJzOiAvW1xcdTAxQ0JdL2cgfSwgeyBiYXNlOiAnTycsIGxldHRlcnM6IC9bXFx1MDA0RlxcdTI0QzRcXHVGRjJGXFx1MDBEMlxcdTAwRDNcXHUwMEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxcdTAwRDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHUwMEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xcdTAwRDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q10vZyB9LCB7IGJhc2U6ICdPSScsIGxldHRlcnM6IC9bXFx1MDFBMl0vZyB9LCB7IGJhc2U6ICdPTycsIGxldHRlcnM6IC9bXFx1QTc0RV0vZyB9LCB7IGJhc2U6ICdPVScsIGxldHRlcnM6IC9bXFx1MDIyMl0vZyB9LCB7IGJhc2U6ICdQJywgbGV0dGVyczogL1tcXHUwMDUwXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XS9nIH0sIHsgYmFzZTogJ1EnLCBsZXR0ZXJzOiAvW1xcdTAwNTFcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QV0vZyB9LCB7IGJhc2U6ICdSJywgbGV0dGVyczogL1tcXHUwMDUyXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4Ml0vZyB9LCB7IGJhc2U6ICdTJywgbGV0dGVyczogL1tcXHUwMDUzXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NF0vZyB9LCB7IGJhc2U6ICdUJywgbGV0dGVyczogL1tcXHUwMDU0XFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZdL2cgfSwgeyBiYXNlOiAnVFonLCBsZXR0ZXJzOiAvW1xcdUE3MjhdL2cgfSwgeyBiYXNlOiAnVScsIGxldHRlcnM6IC9bXFx1MDA1NVxcdTI0Q0FcXHVGRjM1XFx1MDBEOVxcdTAwREFcXHUwMERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHUwMERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NF0vZyB9LCB7IGJhc2U6ICdWJywgbGV0dGVyczogL1tcXHUwMDU2XFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NV0vZyB9LCB7IGJhc2U6ICdWWScsIGxldHRlcnM6IC9bXFx1QTc2MF0vZyB9LCB7IGJhc2U6ICdXJywgbGV0dGVyczogL1tcXHUwMDU3XFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXS9nIH0sIHsgYmFzZTogJ1gnLCBsZXR0ZXJzOiAvW1xcdTAwNThcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDXS9nIH0sIHsgYmFzZTogJ1knLCBsZXR0ZXJzOiAvW1xcdTAwNTlcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHUwMEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRV0vZyB9LCB7IGJhc2U6ICdaJywgbGV0dGVyczogL1tcXHUwMDVBXFx1MjRDRlxcdUZGM0FcXHUwMTc5XFx1MUU5MFxcdTAxN0JcXHUwMTdEXFx1MUU5MlxcdTFFOTRcXHUwMUI1XFx1MDIyNFxcdTJDN0ZcXHUyQzZCXFx1QTc2Ml0vZyB9LCB7IGJhc2U6ICdhJywgbGV0dGVyczogL1tcXHUwMDYxXFx1MjREMFxcdUZGNDFcXHUxRTlBXFx1MDBFMFxcdTAwRTFcXHUwMEUyXFx1MUVBN1xcdTFFQTVcXHUxRUFCXFx1MUVBOVxcdTAwRTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxcdTAwRTRcXHUwMURGXFx1MUVBM1xcdTAwRTVcXHUwMUZCXFx1MDFDRVxcdTAyMDFcXHUwMjAzXFx1MUVBMVxcdTFFQURcXHUxRUI3XFx1MUUwMVxcdTAxMDVcXHUyQzY1XFx1MDI1MF0vZyB9LCB7IGJhc2U6ICdhYScsIGxldHRlcnM6IC9bXFx1QTczM10vZyB9LCB7IGJhc2U6ICdhZScsIGxldHRlcnM6IC9bXFx1MDBFNlxcdTAxRkRcXHUwMUUzXS9nIH0sIHsgYmFzZTogJ2FvJywgbGV0dGVyczogL1tcXHVBNzM1XS9nIH0sIHsgYmFzZTogJ2F1JywgbGV0dGVyczogL1tcXHVBNzM3XS9nIH0sIHsgYmFzZTogJ2F2JywgbGV0dGVyczogL1tcXHVBNzM5XFx1QTczQl0vZyB9LCB7IGJhc2U6ICdheScsIGxldHRlcnM6IC9bXFx1QTczRF0vZyB9LCB7IGJhc2U6ICdiJywgbGV0dGVyczogL1tcXHUwMDYyXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNdL2cgfSwgeyBiYXNlOiAnYycsIGxldHRlcnM6IC9bXFx1MDA2M1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxcdTAwRTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NF0vZyB9LCB7IGJhc2U6ICdkJywgbGV0dGVyczogL1tcXHUwMDY0XFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QV0vZyB9LCB7IGJhc2U6ICdkeicsIGxldHRlcnM6IC9bXFx1MDFGM1xcdTAxQzZdL2cgfSwgeyBiYXNlOiAnZScsIGxldHRlcnM6IC9bXFx1MDA2NVxcdTI0RDRcXHVGRjQ1XFx1MDBFOFxcdTAwRTlcXHUwMEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xcdTAwRUJcXHUxRUJCXFx1MDExQlxcdTAyMDVcXHUwMjA3XFx1MUVCOVxcdTFFQzdcXHUwMjI5XFx1MUUxRFxcdTAxMTlcXHUxRTE5XFx1MUUxQlxcdTAyNDdcXHUwMjVCXFx1MDFERF0vZyB9LCB7IGJhc2U6ICdmJywgbGV0dGVyczogL1tcXHUwMDY2XFx1MjRENVxcdUZGNDZcXHUxRTFGXFx1MDE5MlxcdUE3N0NdL2cgfSwgeyBiYXNlOiAnZycsIGxldHRlcnM6IC9bXFx1MDA2N1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXS9nIH0sIHsgYmFzZTogJ2gnLCBsZXR0ZXJzOiAvW1xcdTAwNjhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NV0vZyB9LCB7IGJhc2U6ICdodicsIGxldHRlcnM6IC9bXFx1MDE5NV0vZyB9LCB7IGJhc2U6ICdpJywgbGV0dGVyczogL1tcXHUwMDY5XFx1MjREOFxcdUZGNDlcXHUwMEVDXFx1MDBFRFxcdTAwRUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHUwMEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMV0vZyB9LCB7IGJhc2U6ICdqJywgbGV0dGVyczogL1tcXHUwMDZBXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDldL2cgfSwgeyBiYXNlOiAnaycsIGxldHRlcnM6IC9bXFx1MDA2QlxcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNdL2cgfSwgeyBiYXNlOiAnbCcsIGxldHRlcnM6IC9bXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N10vZyB9LCB7IGJhc2U6ICdsaicsIGxldHRlcnM6IC9bXFx1MDFDOV0vZyB9LCB7IGJhc2U6ICdtJywgbGV0dGVyczogL1tcXHUwMDZEXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2Rl0vZyB9LCB7IGJhc2U6ICduJywgbGV0dGVyczogL1tcXHUwMDZFXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxcdTAwRjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNV0vZyB9LCB7IGJhc2U6ICduaicsIGxldHRlcnM6IC9bXFx1MDFDQ10vZyB9LCB7IGJhc2U6ICdvJywgbGV0dGVyczogL1tcXHUwMDZGXFx1MjRERVxcdUZGNEZcXHUwMEYyXFx1MDBGM1xcdTAwRjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx1MDBGNVxcdTFFNERcXHUwMjJEXFx1MUU0RlxcdTAxNERcXHUxRTUxXFx1MUU1M1xcdTAxNEZcXHUwMjJGXFx1MDIzMVxcdTAwRjZcXHUwMjJCXFx1MUVDRlxcdTAxNTFcXHUwMUQyXFx1MDIwRFxcdTAyMEZcXHUwMUExXFx1MUVERFxcdTFFREJcXHUxRUUxXFx1MUVERlxcdTFFRTNcXHUxRUNEXFx1MUVEOVxcdTAxRUJcXHUwMUVEXFx1MDBGOFxcdTAxRkZcXHUwMjU0XFx1QTc0QlxcdUE3NERcXHUwMjc1XS9nIH0sIHsgYmFzZTogJ29pJywgbGV0dGVyczogL1tcXHUwMUEzXS9nIH0sIHsgYmFzZTogJ291JywgbGV0dGVyczogL1tcXHUwMjIzXS9nIH0sIHsgYmFzZTogJ29vJywgbGV0dGVyczogL1tcXHVBNzRGXS9nIH0sIHsgYmFzZTogJ3AnLCBsZXR0ZXJzOiAvW1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVdL2cgfSwgeyBiYXNlOiAncScsIGxldHRlcnM6IC9bXFx1MDA3MVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XS9nIH0sIHsgYmFzZTogJ3InLCBsZXR0ZXJzOiAvW1xcdTAwNzJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXS9nIH0sIHsgYmFzZTogJ3MnLCBsZXR0ZXJzOiAvW1xcdTAwNzNcXHUyNEUyXFx1RkY1M1xcdTAwREZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5Ql0vZyB9LCB7IGJhc2U6ICd0JywgbGV0dGVyczogL1tcXHUwMDc0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3XS9nIH0sIHsgYmFzZTogJ3R6JywgbGV0dGVyczogL1tcXHVBNzI5XS9nIH0sIHsgYmFzZTogJ3UnLCBsZXR0ZXJzOiAvW1xcdTAwNzVcXHUyNEU0XFx1RkY1NVxcdTAwRjlcXHUwMEZBXFx1MDBGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx1MDBGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODldL2cgfSwgeyBiYXNlOiAndicsIGxldHRlcnM6IC9bXFx1MDA3NlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENdL2cgfSwgeyBiYXNlOiAndnknLCBsZXR0ZXJzOiAvW1xcdUE3NjFdL2cgfSwgeyBiYXNlOiAndycsIGxldHRlcnM6IC9bXFx1MDA3N1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNdL2cgfSwgeyBiYXNlOiAneCcsIGxldHRlcnM6IC9bXFx1MDA3OFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERdL2cgfSwgeyBiYXNlOiAneScsIGxldHRlcnM6IC9bXFx1MDA3OVxcdTI0RThcXHVGRjU5XFx1MUVGM1xcdTAwRkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx1MDBGRlxcdTFFRjdcXHUxRTk5XFx1MUVGNVxcdTAxQjRcXHUwMjRGXFx1MUVGRl0vZyB9LCB7IGJhc2U6ICd6JywgbGV0dGVyczogL1tcXHUwMDdBXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M10vZyB9XTtcblxudmFyIHN0cmlwRGlhY3JpdGljcyA9IGZ1bmN0aW9uIHN0cmlwRGlhY3JpdGljcyhzdHIpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkaWFjcml0aWNzLmxlbmd0aDsgaSsrKSB7XG5cdFx0c3RyID0gc3RyLnJlcGxhY2UoZGlhY3JpdGljc1tpXS5sZXR0ZXJzLCBkaWFjcml0aWNzW2ldLmJhc2UpO1xuXHR9XG5cdHJldHVybiBzdHI7XG59O1xuXG52YXIgdHJpbVN0cmluZyA9IGZ1bmN0aW9uIHRyaW1TdHJpbmcoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xufTtcbnZhciBkZWZhdWx0U3RyaW5naWZ5ID0gZnVuY3Rpb24gZGVmYXVsdFN0cmluZ2lmeShvcHRpb24pIHtcbiAgcmV0dXJuIG9wdGlvbi5sYWJlbCArICcgJyArIG9wdGlvbi52YWx1ZTtcbn07XG5cbnZhciBjcmVhdGVGaWx0ZXIgPSBmdW5jdGlvbiBjcmVhdGVGaWx0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAob3B0aW9uLCByYXdJbnB1dCkge1xuICAgIHZhciBfaWdub3JlQ2FzZSRpZ25vcmVBY2MgPSBfZXh0ZW5kcyh7XG4gICAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgICAgaWdub3JlQWNjZW50czogdHJ1ZSxcbiAgICAgIHN0cmluZ2lmeTogZGVmYXVsdFN0cmluZ2lmeSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgICBtYXRjaEZyb206ICdhbnknXG4gICAgfSwgY29uZmlnKSxcbiAgICAgICAgaWdub3JlQ2FzZSA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5pZ25vcmVDYXNlLFxuICAgICAgICBpZ25vcmVBY2NlbnRzID0gX2lnbm9yZUNhc2UkaWdub3JlQWNjLmlnbm9yZUFjY2VudHMsXG4gICAgICAgIHN0cmluZ2lmeSA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5zdHJpbmdpZnksXG4gICAgICAgIHRyaW0gPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MudHJpbSxcbiAgICAgICAgbWF0Y2hGcm9tID0gX2lnbm9yZUNhc2UkaWdub3JlQWNjLm1hdGNoRnJvbTtcblxuICAgIHZhciBpbnB1dCA9IHRyaW0gPyB0cmltU3RyaW5nKHJhd0lucHV0KSA6IHJhd0lucHV0O1xuICAgIHZhciBjYW5kaWRhdGUgPSB0cmltID8gdHJpbVN0cmluZyhzdHJpbmdpZnkob3B0aW9uKSkgOiBzdHJpbmdpZnkob3B0aW9uKTtcbiAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgaW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FuZGlkYXRlID0gY2FuZGlkYXRlLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGlmIChpZ25vcmVBY2NlbnRzKSB7XG4gICAgICBpbnB1dCA9IHN0cmlwRGlhY3JpdGljcyhpbnB1dCk7XG4gICAgICBjYW5kaWRhdGUgPSBzdHJpcERpYWNyaXRpY3MoY2FuZGlkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoRnJvbSA9PT0gJ3N0YXJ0JyA/IGNhbmRpZGF0ZS5zdWJzdHIoMCwgaW5wdXQubGVuZ3RoKSA9PT0gaW5wdXQgOiBjYW5kaWRhdGUuaW5kZXhPZihpbnB1dCkgPiAtMTtcbiAgfTtcbn07XG5cbi8vIEFzc2lzdGl2ZSB0ZXh0IHRvIGRlc2NyaWJlIHZpc3VhbCBlbGVtZW50cy4gSGlkZGVuIGZvciBzaWdodGVkIHVzZXJzLlxudmFyIEExMXlUZXh0ID0gZnVuY3Rpb24gQTExeVRleHQocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiAvKiNfX1BVUkVfXyovIC8qI19fUFVSRV9fKi9jc3Moe1xuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICAgIGNvbG9yOiAnYmx1ZSdcbiAgICB9KVxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIER1bW15SW5wdXQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBpbmhlcml0cyhEdW1teUlucHV0LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEdW1teUlucHV0KCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIER1bW15SW5wdXQpO1xuICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChEdW1teUlucHV0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRHVtbXlJbnB1dCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoRHVtbXlJbnB1dCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpblByb3AgPSBfcHJvcHMuaW4sXG4gICAgICAgICAgb3V0ID0gX3Byb3BzLm91dCxcbiAgICAgICAgICBvbkV4aXRlZCA9IF9wcm9wcy5vbkV4aXRlZCxcbiAgICAgICAgICBhcHBlYXIgPSBfcHJvcHMuYXBwZWFyLFxuICAgICAgICAgIGVudGVyID0gX3Byb3BzLmVudGVyLFxuICAgICAgICAgIGV4aXQgPSBfcHJvcHMuZXhpdCxcbiAgICAgICAgICBpbm5lclJlZiA9IF9wcm9wcy5pbm5lclJlZixcbiAgICAgICAgICBlbW90aW9uID0gX3Byb3BzLmVtb3Rpb24sXG4gICAgICAgICAgcHJvcHMgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnaW4nLCAnb3V0JywgJ29uRXhpdGVkJywgJ2FwcGVhcicsICdlbnRlcicsICdleGl0JywgJ2lubmVyUmVmJywgJ2Vtb3Rpb24nXSk7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiBpbm5lclJlZlxuICAgICAgfSwgcHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAvKiNfX1BVUkVfXyovIC8qI19fUFVSRV9fKi9jc3Moe1xuICAgICAgICAgIC8vIGdldCByaWQgb2YgYW55IGRlZmF1bHQgc3R5bGVzXG4gICAgICAgICAgYmFja2dyb3VuZDogMCxcbiAgICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICAgIHBhZGRpbmc6IDAsXG5cbiAgICAgICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBkZXNrdG9wXG4gICAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG5cbiAgICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgICAgbGVmdDogLTEwMCxcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJ1xuICAgICAgICB9KVxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRHVtbXlJbnB1dDtcbn0oQ29tcG9uZW50KTtcblxudmFyIE5vZGVSZXNvbHZlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIGluaGVyaXRzKE5vZGVSZXNvbHZlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTm9kZVJlc29sdmVyKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGVSZXNvbHZlcik7XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE5vZGVSZXNvbHZlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE5vZGVSZXNvbHZlcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoTm9kZVJlc29sdmVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnByb3BzLmlubmVyUmVmKGZpbmRET01Ob2RlKHRoaXMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5wcm9wcy5pbm5lclJlZihudWxsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE5vZGVSZXNvbHZlcjtcbn0oQ29tcG9uZW50KTtcblxudmFyIFNUWUxFX0tFWVMgPSBbJ2JveFNpemluZycsICdoZWlnaHQnLCAnb3ZlcmZsb3cnLCAncGFkZGluZ1JpZ2h0JywgJ3Bvc2l0aW9uJ107XG5cbnZhciBMT0NLX1NUWUxFUyA9IHtcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIC8vIGFjY291bnQgZm9yIHBvc3NpYmxlIGRlY2xhcmF0aW9uIGB3aWR0aDogMTAwJTtgIG9uIGJvZHlcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgaGVpZ2h0OiAnMTAwJSdcbn07XG5cbmZ1bmN0aW9uIHByZXZlbnRUb3VjaE1vdmUoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGFsbG93VG91Y2hNb3ZlKGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gcHJldmVudEluZXJ0aWFTY3JvbGwoKSB7XG4gIHZhciB0b3AgPSB0aGlzLnNjcm9sbFRvcDtcbiAgdmFyIHRvdGFsU2Nyb2xsID0gdGhpcy5zY3JvbGxIZWlnaHQ7XG4gIHZhciBjdXJyZW50U2Nyb2xsID0gdG9wICsgdGhpcy5vZmZzZXRIZWlnaHQ7XG5cbiAgaWYgKHRvcCA9PT0gMCkge1xuICAgIHRoaXMuc2Nyb2xsVG9wID0gMTtcbiAgfSBlbHNlIGlmIChjdXJyZW50U2Nyb2xsID09PSB0b3RhbFNjcm9sbCkge1xuICAgIHRoaXMuc2Nyb2xsVG9wID0gdG9wIC0gMTtcbiAgfVxufVxuXG4vLyBgb250b3VjaHN0YXJ0YCBjaGVjayB3b3JrcyBvbiBtb3N0IGJyb3dzZXJzXG4vLyBgbWF4VG91Y2hQb2ludHNgIHdvcmtzIG9uIElFMTAvMTEgYW5kIFN1cmZhY2VcbmZ1bmN0aW9uIGlzVG91Y2hEZXZpY2UoKSB7XG4gIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzO1xufVxuXG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxudmFyIGFjdGl2ZVNjcm9sbExvY2tzID0gMDtcblxudmFyIFNjcm9sbExvY2sgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBpbmhlcml0cyhTY3JvbGxMb2NrLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTY3JvbGxMb2NrKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNjcm9sbExvY2spO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gU2Nyb2xsTG9jay5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNjcm9sbExvY2spKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5vcmlnaW5hbFN0eWxlcyA9IHt9LCBfdGhpcy5saXN0ZW5lck9wdGlvbnMgPSB7XG4gICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSwgX3RlbXApLCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFNjcm9sbExvY2ssIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAoIWNhblVzZURPTSkgcmV0dXJuO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhY2NvdW50Rm9yU2Nyb2xsYmFycyA9IF9wcm9wcy5hY2NvdW50Rm9yU2Nyb2xsYmFycyxcbiAgICAgICAgICB0b3VjaFNjcm9sbFRhcmdldCA9IF9wcm9wcy50b3VjaFNjcm9sbFRhcmdldDtcblxuICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgICB2YXIgdGFyZ2V0U3R5bGUgPSB0YXJnZXQgJiYgdGFyZ2V0LnN0eWxlO1xuXG4gICAgICBpZiAoYWNjb3VudEZvclNjcm9sbGJhcnMpIHtcbiAgICAgICAgLy8gc3RvcmUgYW55IHN0eWxlcyBhbHJlYWR5IGFwcGxpZWQgdG8gdGhlIGJvZHlcbiAgICAgICAgU1RZTEVfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICB2YXIgdmFsID0gdGFyZ2V0U3R5bGUgJiYgdGFyZ2V0U3R5bGVba2V5XTtcbiAgICAgICAgICBfdGhpczIub3JpZ2luYWxTdHlsZXNba2V5XSA9IHZhbDtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFwcGx5IHRoZSBsb2NrIHN0eWxlcyBhbmQgcGFkZGluZyBpZiB0aGlzIGlzIHRoZSBmaXJzdCBzY3JvbGwgbG9ja1xuICAgICAgaWYgKGFjY291bnRGb3JTY3JvbGxiYXJzICYmIGFjdGl2ZVNjcm9sbExvY2tzIDwgMSkge1xuICAgICAgICB2YXIgY3VycmVudFBhZGRpbmcgPSBwYXJzZUludCh0aGlzLm9yaWdpbmFsU3R5bGVzLnBhZGRpbmdSaWdodCwgMTApIHx8IDA7XG4gICAgICAgIHZhciBjbGllbnRXaWR0aCA9IGRvY3VtZW50LmJvZHkgPyBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDogMDtcbiAgICAgICAgdmFyIGFkanVzdGVkUGFkZGluZyA9IHdpbmRvdy5pbm5lcldpZHRoIC0gY2xpZW50V2lkdGggKyBjdXJyZW50UGFkZGluZyB8fCAwO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKExPQ0tfU1RZTEVTKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICB2YXIgdmFsID0gTE9DS19TVFlMRVNba2V5XTtcbiAgICAgICAgICBpZiAodGFyZ2V0U3R5bGUpIHtcbiAgICAgICAgICAgIHRhcmdldFN0eWxlW2tleV0gPSB2YWw7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGFyZ2V0U3R5bGUpIHtcbiAgICAgICAgICB0YXJnZXRTdHlsZS5wYWRkaW5nUmlnaHQgPSBhZGp1c3RlZFBhZGRpbmcgKyAncHgnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGFjY291bnQgZm9yIHRvdWNoIGRldmljZXNcbiAgICAgIGlmICh0YXJnZXQgJiYgaXNUb3VjaERldmljZSgpKSB7XG4gICAgICAgIC8vIE1vYmlsZSBTYWZhcmkgaWdub3JlcyB7IG92ZXJmbG93OiBoaWRkZW4gfSBkZWNsYXJhdGlvbiBvbiB0aGUgYm9keS5cbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnRUb3VjaE1vdmUsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcblxuICAgICAgICAvLyBBbGxvdyBzY3JvbGwgb24gcHJvdmlkZWQgdGFyZ2V0XG4gICAgICAgIGlmICh0b3VjaFNjcm9sbFRhcmdldCkge1xuICAgICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBwcmV2ZW50SW5lcnRpYVNjcm9sbCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGFsbG93VG91Y2hNb3ZlLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gaW5jcmVtZW50IGFjdGl2ZSBzY3JvbGwgbG9ja3NcbiAgICAgIGFjdGl2ZVNjcm9sbExvY2tzICs9IDE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAoIWNhblVzZURPTSkgcmV0dXJuO1xuXG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWNjb3VudEZvclNjcm9sbGJhcnMgPSBfcHJvcHMyLmFjY291bnRGb3JTY3JvbGxiYXJzLFxuICAgICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0ID0gX3Byb3BzMi50b3VjaFNjcm9sbFRhcmdldDtcblxuICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgICB2YXIgdGFyZ2V0U3R5bGUgPSB0YXJnZXQgJiYgdGFyZ2V0LnN0eWxlO1xuXG4gICAgICAvLyBzYWZlbHkgZGVjcmVtZW50IGFjdGl2ZSBzY3JvbGwgbG9ja3NcbiAgICAgIGFjdGl2ZVNjcm9sbExvY2tzID0gTWF0aC5tYXgoYWN0aXZlU2Nyb2xsTG9ja3MgLSAxLCAwKTtcblxuICAgICAgLy8gcmVhcHBseSBvcmlnaW5hbCBib2R5IHN0eWxlcywgaWYgYW55XG4gICAgICBpZiAoYWNjb3VudEZvclNjcm9sbGJhcnMgJiYgYWN0aXZlU2Nyb2xsTG9ja3MgPCAxKSB7XG4gICAgICAgIFNUWUxFX0tFWVMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgdmFyIHZhbCA9IF90aGlzMy5vcmlnaW5hbFN0eWxlc1trZXldO1xuICAgICAgICAgIGlmICh0YXJnZXRTdHlsZSkge1xuICAgICAgICAgICAgdGFyZ2V0U3R5bGVba2V5XSA9IHZhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyByZW1vdmUgdG91Y2ggbGlzdGVuZXJzXG4gICAgICBpZiAodGFyZ2V0ICYmIGlzVG91Y2hEZXZpY2UoKSkge1xuICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudFRvdWNoTW92ZSwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuXG4gICAgICAgIGlmICh0b3VjaFNjcm9sbFRhcmdldCkge1xuICAgICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBwcmV2ZW50SW5lcnRpYVNjcm9sbCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGFsbG93VG91Y2hNb3ZlLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFNjcm9sbExvY2s7XG59KENvbXBvbmVudCk7XG5cblNjcm9sbExvY2suZGVmYXVsdFByb3BzID0ge1xuICBhY2NvdW50Rm9yU2Nyb2xsYmFyczogdHJ1ZVxufTtcblxuLy8gTk9URTpcbi8vIFdlIHNob3VsZG4ndCBuZWVkIHRoaXMgYWZ0ZXIgdXBkYXRpbmcgdG8gUmVhY3QgdjE2LjMuMCwgd2hpY2ggaW50cm9kdWNlczpcbi8vIC0gY3JlYXRlUmVmKCkgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y3JlYXRlcmVmXG4vLyAtIGZvcndhcmRSZWYoKSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3Rmb3J3YXJkcmVmXG5cbnZhciBTY3JvbGxCbG9jayA9IGZ1bmN0aW9uIChfUHVyZUNvbXBvbmVudCkge1xuICBpbmhlcml0cyhTY3JvbGxCbG9jaywgX1B1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNjcm9sbEJsb2NrKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNjcm9sbEJsb2NrKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IFNjcm9sbEJsb2NrLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2Nyb2xsQmxvY2spKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHsgdG91Y2hTY3JvbGxUYXJnZXQ6IG51bGwgfSwgX3RoaXMuZ2V0U2Nyb2xsVGFyZ2V0ID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgaWYgKHJlZiA9PT0gX3RoaXMuc3RhdGUudG91Y2hTY3JvbGxUYXJnZXQpIHJldHVybjtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgdG91Y2hTY3JvbGxUYXJnZXQ6IHJlZiB9KTtcbiAgICB9LCBfdGhpcy5ibHVyU2VsZWN0SW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgLy8gbXVzdCBiZSBpbiBzdGF0ZSB0byB0cmlnZ2VyIGEgcmUtcmVuZGVyLCBvbmx5IHJ1bnMgb25jZSBwZXIgaW5zdGFuY2VcblxuXG4gIC8vIHRoaXMgd2lsbCBjbG9zZSB0aGUgbWVudSB3aGVuIGEgdXNlciBjbGlja3Mgb3V0c2lkZVxuXG5cbiAgY3JlYXRlQ2xhc3MoU2Nyb2xsQmxvY2ssIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgaXNFbmFibGVkID0gX3Byb3BzLmlzRW5hYmxlZDtcbiAgICAgIHZhciB0b3VjaFNjcm9sbFRhcmdldCA9IHRoaXMuc3RhdGUudG91Y2hTY3JvbGxUYXJnZXQ7XG5cbiAgICAgIC8vIGJhaWwgZWFybHkgaWYgbm90IGVuYWJsZWRcblxuICAgICAgaWYgKCFpc0VuYWJsZWQpIHJldHVybiBjaGlsZHJlbjtcblxuICAgICAgLypcbiAgICAgICAqIERpdlxuICAgICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgKiBibG9ja3Mgc2Nyb2xsaW5nIG9uIG5vbi1ib2R5IGVsZW1lbnRzIGJlaGluZCB0aGUgbWVudVxuICAgICAgICAqIE5vZGVSZXNvbHZlclxuICAgICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgKiB3ZSBuZWVkIGEgcmVmZXJlbmNlIHRvIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnQgdG8gXCJ1bmxvY2tcIiBzY3JvbGwgb25cbiAgICAgICAqIG1vYmlsZSBkZXZpY2VzXG4gICAgICAgICogU2Nyb2xsTG9ja1xuICAgICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgKiBhY3R1YWxseSBkb2VzIHRoZSBzY3JvbGwgbG9ja2luZ1xuICAgICAgICovXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLmJsdXJTZWxlY3RJbnB1dCxcbiAgICAgICAgICBjbGFzc05hbWU6IC8qI19fUFVSRV9fKi8gLyojX19QVVJFX18qL2Nzcyh7IHBvc2l0aW9uOiAnZml4ZWQnLCBsZWZ0OiAwLCBib3R0b206IDAsIHJpZ2h0OiAwLCB0b3A6IDAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgTm9kZVJlc29sdmVyLFxuICAgICAgICAgIHsgaW5uZXJSZWY6IHRoaXMuZ2V0U2Nyb2xsVGFyZ2V0IH0sXG4gICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgKSxcbiAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFNjcm9sbExvY2ssIHsgdG91Y2hTY3JvbGxUYXJnZXQ6IHRvdWNoU2Nyb2xsVGFyZ2V0IH0pIDogbnVsbFxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFNjcm9sbEJsb2NrO1xufShQdXJlQ29tcG9uZW50KTtcblxudmFyIFNjcm9sbENhcHRvciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIGluaGVyaXRzKFNjcm9sbENhcHRvciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU2Nyb2xsQ2FwdG9yKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNjcm9sbENhcHRvcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBTY3JvbGxDYXB0b3IuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTY3JvbGxDYXB0b3IpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5pc0JvdHRvbSA9IGZhbHNlLCBfdGhpcy5pc1RvcCA9IGZhbHNlLCBfdGhpcy5jYW5jZWxTY3JvbGwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVFdmVudERlbHRhID0gZnVuY3Rpb24gKGV2ZW50LCBkZWx0YSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25Cb3R0b21BcnJpdmUgPSBfdGhpcyRwcm9wcy5vbkJvdHRvbUFycml2ZSxcbiAgICAgICAgICBvbkJvdHRvbUxlYXZlID0gX3RoaXMkcHJvcHMub25Cb3R0b21MZWF2ZSxcbiAgICAgICAgICBvblRvcEFycml2ZSA9IF90aGlzJHByb3BzLm9uVG9wQXJyaXZlLFxuICAgICAgICAgIG9uVG9wTGVhdmUgPSBfdGhpcyRwcm9wcy5vblRvcExlYXZlO1xuICAgICAgdmFyIF90aGlzJHNjcm9sbFRhcmdldCA9IF90aGlzLnNjcm9sbFRhcmdldCxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBfdGhpcyRzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wLFxuICAgICAgICAgIHNjcm9sbEhlaWdodCA9IF90aGlzJHNjcm9sbFRhcmdldC5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gX3RoaXMkc2Nyb2xsVGFyZ2V0LmNsaWVudEhlaWdodDtcblxuICAgICAgdmFyIHRhcmdldCA9IF90aGlzLnNjcm9sbFRhcmdldDtcbiAgICAgIHZhciBpc0RlbHRhUG9zaXRpdmUgPSBkZWx0YSA+IDA7XG4gICAgICB2YXIgYXZhaWxhYmxlU2Nyb2xsID0gc2Nyb2xsSGVpZ2h0IC0gY2xpZW50SGVpZ2h0IC0gc2Nyb2xsVG9wO1xuICAgICAgdmFyIHNob3VsZENhbmNlbFNjcm9sbCA9IGZhbHNlO1xuXG4gICAgICAvLyByZXNldCBib3R0b20vdG9wIGZsYWdzXG4gICAgICBpZiAoYXZhaWxhYmxlU2Nyb2xsID4gZGVsdGEgJiYgX3RoaXMuaXNCb3R0b20pIHtcbiAgICAgICAgaWYgKG9uQm90dG9tTGVhdmUpIG9uQm90dG9tTGVhdmUoZXZlbnQpO1xuICAgICAgICBfdGhpcy5pc0JvdHRvbSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGlzRGVsdGFQb3NpdGl2ZSAmJiBfdGhpcy5pc1RvcCkge1xuICAgICAgICBpZiAob25Ub3BMZWF2ZSkgb25Ub3BMZWF2ZShldmVudCk7XG4gICAgICAgIF90aGlzLmlzVG9wID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIGJvdHRvbSBsaW1pdFxuICAgICAgaWYgKGlzRGVsdGFQb3NpdGl2ZSAmJiBkZWx0YSA+IGF2YWlsYWJsZVNjcm9sbCkge1xuICAgICAgICBpZiAob25Cb3R0b21BcnJpdmUgJiYgIV90aGlzLmlzQm90dG9tKSB7XG4gICAgICAgICAgb25Cb3R0b21BcnJpdmUoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldC5zY3JvbGxUb3AgPSBzY3JvbGxIZWlnaHQ7XG4gICAgICAgIHNob3VsZENhbmNlbFNjcm9sbCA9IHRydWU7XG4gICAgICAgIF90aGlzLmlzQm90dG9tID0gdHJ1ZTtcblxuICAgICAgICAvLyB0b3AgbGltaXRcbiAgICAgIH0gZWxzZSBpZiAoIWlzRGVsdGFQb3NpdGl2ZSAmJiAtZGVsdGEgPiBzY3JvbGxUb3ApIHtcbiAgICAgICAgaWYgKG9uVG9wQXJyaXZlICYmICFfdGhpcy5pc1RvcCkge1xuICAgICAgICAgIG9uVG9wQXJyaXZlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgc2hvdWxkQ2FuY2VsU2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuaXNUb3AgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBjYW5jZWwgc2Nyb2xsXG4gICAgICBpZiAoc2hvdWxkQ2FuY2VsU2Nyb2xsKSB7XG4gICAgICAgIF90aGlzLmNhbmNlbFNjcm9sbChldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMub25XaGVlbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuaGFuZGxlRXZlbnREZWx0YShldmVudCwgZXZlbnQuZGVsdGFZKTtcbiAgICB9LCBfdGhpcy5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIHNldCB0b3VjaCBzdGFydCBzbyB3ZSBjYW4gY2FsY3VsYXRlIHRvdWNobW92ZSBkZWx0YVxuICAgICAgX3RoaXMudG91Y2hTdGFydCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgfSwgX3RoaXMub25Ub3VjaE1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBkZWx0YVkgPSBfdGhpcy50b3VjaFN0YXJ0IC0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgIF90aGlzLmhhbmRsZUV2ZW50RGVsdGEoZXZlbnQsIGRlbHRhWSk7XG4gICAgfSwgX3RoaXMuZ2V0U2Nyb2xsVGFyZ2V0ID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuc2Nyb2xsVGFyZ2V0ID0gcmVmO1xuICAgIH0sIF90ZW1wKSwgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhTY3JvbGxDYXB0b3IsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcodGhpcy5zY3JvbGxUYXJnZXQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcodGhpcy5zY3JvbGxUYXJnZXQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0YXJ0TGlzdGVuaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmcoZWwpIHtcbiAgICAgIC8vIGJhaWwgZWFybHkgaWYgbm8gc2Nyb2xsIGF2YWlsYWJsZVxuICAgICAgaWYgKGVsLnNjcm9sbEhlaWdodCA8PSBlbC5jbGllbnRIZWlnaHQpIHJldHVybjtcblxuICAgICAgLy8gYWxsIHRoZSBpZiBzdGF0ZW1lbnRzIGFyZSB0byBhcHBlYXNlIEZsb3cg8J+YolxuICAgICAgaWYgKHR5cGVvZiBlbC5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5vbldoZWVsLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGVsLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGVsLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0b3BMaXN0ZW5pbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nKGVsKSB7XG4gICAgICAvLyBiYWlsIGVhcmx5IGlmIG5vIHNjcm9sbCBhdmFpbGFibGVcbiAgICAgIGlmIChlbC5zY3JvbGxIZWlnaHQgPD0gZWwuY2xpZW50SGVpZ2h0KSByZXR1cm47XG5cbiAgICAgIC8vIGFsbCB0aGUgaWYgc3RhdGVtZW50cyBhcmUgdG8gYXBwZWFzZSBGbG93IPCfmKJcbiAgICAgIGlmICh0eXBlb2YgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25XaGVlbCwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBlbC5yZW1vdmVFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBlbC5yZW1vdmVFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTm9kZVJlc29sdmVyLFxuICAgICAgICB7IGlubmVyUmVmOiB0aGlzLmdldFNjcm9sbFRhcmdldCB9LFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU2Nyb2xsQ2FwdG9yO1xufShDb21wb25lbnQpO1xuXG52YXIgU2Nyb2xsQ2FwdG9yU3dpdGNoID0gZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gIGluaGVyaXRzKFNjcm9sbENhcHRvclN3aXRjaCwgX0NvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIFNjcm9sbENhcHRvclN3aXRjaCgpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTY3JvbGxDYXB0b3JTd2l0Y2gpO1xuICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTY3JvbGxDYXB0b3JTd2l0Y2guX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTY3JvbGxDYXB0b3JTd2l0Y2gpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFNjcm9sbENhcHRvclN3aXRjaCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc0VuYWJsZWQgPSBfcHJvcHMuaXNFbmFibGVkLFxuICAgICAgICAgIHByb3BzID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2lzRW5hYmxlZCddKTtcblxuICAgICAgcmV0dXJuIGlzRW5hYmxlZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsQ2FwdG9yLCBwcm9wcykgOiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU2Nyb2xsQ2FwdG9yU3dpdGNoO1xufShDb21wb25lbnQpO1xuXG5TY3JvbGxDYXB0b3JTd2l0Y2guZGVmYXVsdFByb3BzID0geyBpc0VuYWJsZWQ6IHRydWUgfTtcblxudmFyIGluc3RydWN0aW9uc0FyaWFNZXNzYWdlID0gZnVuY3Rpb24gaW5zdHJ1Y3Rpb25zQXJpYU1lc3NhZ2UoZXZlbnQpIHtcbiAgdmFyIGNvbnRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgaXNTZWFyY2hhYmxlID0gY29udGV4dC5pc1NlYXJjaGFibGUsXG4gICAgICBpc011bHRpID0gY29udGV4dC5pc011bHRpLFxuICAgICAgbGFiZWwgPSBjb250ZXh0LmxhYmVsO1xuXG4gIHN3aXRjaCAoZXZlbnQpIHtcbiAgICBjYXNlICdtZW51JzpcbiAgICAgIHJldHVybiAnVXNlIFVwIGFuZCBEb3duIHRvIGNob29zZSBvcHRpb25zLCBwcmVzcyBFbnRlciB0byBzZWxlY3QgdGhlIGN1cnJlbnRseSBmb2N1c2VkIG9wdGlvbiwgcHJlc3MgRXNjYXBlIHRvIGV4aXQgdGhlIG1lbnUsIHByZXNzIFRhYiB0byBzZWxlY3QgdGhlIG9wdGlvbiBhbmQgZXhpdCB0aGUgbWVudS4nO1xuICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgIHJldHVybiAobGFiZWwgPyBsYWJlbCA6ICdTZWxlY3QnKSArICcgaXMgZm9jdXNlZCAnICsgKGlzU2VhcmNoYWJsZSA/ICcsdHlwZSB0byByZWZpbmUgbGlzdCcgOiAnJykgKyAnLCBwcmVzcyBEb3duIHRvIG9wZW4gdGhlIG1lbnUsICcgKyAoaXNNdWx0aSA/ICcgcHJlc3MgbGVmdCB0byBmb2N1cyBzZWxlY3RlZCB2YWx1ZXMnIDogJycpO1xuICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICAgIHJldHVybiAnVXNlIGxlZnQgYW5kIHJpZ2h0IHRvIHRvZ2dsZSBiZXR3ZWVuIGZvY3VzZWQgdmFsdWVzLCBwcmVzcyBFbnRlciB0byByZW1vdmUgdGhlIGN1cnJlbnRseSBmb2N1c2VkIHZhbHVlJztcbiAgfVxufTtcblxudmFyIHZhbHVlRXZlbnRBcmlhTWVzc2FnZSA9IGZ1bmN0aW9uIHZhbHVlRXZlbnRBcmlhTWVzc2FnZShldmVudCwgY29udGV4dCkge1xuICB2YXIgdmFsdWUgPSBjb250ZXh0LnZhbHVlO1xuXG4gIGlmICghdmFsdWUpIHJldHVybjtcbiAgc3dpdGNoIChldmVudCkge1xuICAgIGNhc2UgJ2Rlc2VsZWN0LW9wdGlvbic6XG4gICAgY2FzZSAncG9wLXZhbHVlJzpcbiAgICBjYXNlICdyZW1vdmUtdmFsdWUnOlxuICAgICAgcmV0dXJuICdvcHRpb24gJyArIHZhbHVlICsgJywgZGVzZWxlY3RlZC4nO1xuICAgIGNhc2UgJ3NlbGVjdC1vcHRpb24nOlxuICAgICAgcmV0dXJuICdvcHRpb24gJyArIHZhbHVlICsgJywgc2VsZWN0ZWQuJztcbiAgfVxufTtcblxudmFyIHZhbHVlRm9jdXNBcmlhTWVzc2FnZSA9IGZ1bmN0aW9uIHZhbHVlRm9jdXNBcmlhTWVzc2FnZShfcmVmKSB7XG4gIHZhciBmb2N1c2VkVmFsdWUgPSBfcmVmLmZvY3VzZWRWYWx1ZSxcbiAgICAgIGdldE9wdGlvbkxhYmVsID0gX3JlZi5nZXRPcHRpb25MYWJlbCxcbiAgICAgIHNlbGVjdFZhbHVlID0gX3JlZi5zZWxlY3RWYWx1ZTtcbiAgcmV0dXJuICd2YWx1ZSAnICsgZ2V0T3B0aW9uTGFiZWwoZm9jdXNlZFZhbHVlKSArICcgZm9jdXNlZCwgJyArIChzZWxlY3RWYWx1ZS5pbmRleE9mKGZvY3VzZWRWYWx1ZSkgKyAxKSArICcgb2YgJyArIHNlbGVjdFZhbHVlLmxlbmd0aCArICcuJztcbn07XG52YXIgb3B0aW9uRm9jdXNBcmlhTWVzc2FnZSA9IGZ1bmN0aW9uIG9wdGlvbkZvY3VzQXJpYU1lc3NhZ2UoX3JlZjIpIHtcbiAgdmFyIGZvY3VzZWRPcHRpb24gPSBfcmVmMi5mb2N1c2VkT3B0aW9uLFxuICAgICAgZ2V0T3B0aW9uTGFiZWwgPSBfcmVmMi5nZXRPcHRpb25MYWJlbCxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICByZXR1cm4gJ29wdGlvbiAnICsgZ2V0T3B0aW9uTGFiZWwoZm9jdXNlZE9wdGlvbikgKyAnIGZvY3VzZWQsICcgKyAob3B0aW9ucy5pbmRleE9mKGZvY3VzZWRPcHRpb24pICsgMSkgKyAnIG9mICcgKyBvcHRpb25zLmxlbmd0aCArICcuJztcbn07XG52YXIgcmVzdWx0c0FyaWFNZXNzYWdlID0gZnVuY3Rpb24gcmVzdWx0c0FyaWFNZXNzYWdlKF9yZWYzKSB7XG4gIHZhciBpbnB1dFZhbHVlID0gX3JlZjMuaW5wdXRWYWx1ZSxcbiAgICAgIHNjcmVlblJlYWRlck1lc3NhZ2UgPSBfcmVmMy5zY3JlZW5SZWFkZXJNZXNzYWdlO1xuICByZXR1cm4gJycgKyBzY3JlZW5SZWFkZXJNZXNzYWdlICsgKGlucHV0VmFsdWUgPyAnIGZvciBzZWFyY2ggdGVybSAnICsgaW5wdXRWYWx1ZSA6ICcnKSArICcuJztcbn07XG5cbnZhciBmb3JtYXRHcm91cExhYmVsID0gZnVuY3Rpb24gZm9ybWF0R3JvdXBMYWJlbChncm91cCkge1xuICByZXR1cm4gZ3JvdXAubGFiZWw7XG59O1xuXG52YXIgZ2V0T3B0aW9uTGFiZWwgPSBmdW5jdGlvbiBnZXRPcHRpb25MYWJlbChvcHRpb24pIHtcbiAgcmV0dXJuIG9wdGlvbi5sYWJlbDtcbn07XG5cbnZhciBnZXRPcHRpb25WYWx1ZSA9IGZ1bmN0aW9uIGdldE9wdGlvblZhbHVlKG9wdGlvbikge1xuICByZXR1cm4gb3B0aW9uLnZhbHVlO1xufTtcblxudmFyIGlzT3B0aW9uRGlzYWJsZWQgPSBmdW5jdGlvbiBpc09wdGlvbkRpc2FibGVkKG9wdGlvbikge1xuICByZXR1cm4gISFvcHRpb24uaXNEaXNhYmxlZDtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUm9vdCBDb250YWluZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgY29udGFpbmVyQ1NTID0gZnVuY3Rpb24gY29udGFpbmVyQ1NTKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBpc1J0bCA9IF9yZWYuaXNSdGw7XG4gIHJldHVybiB7XG4gICAgZGlyZWN0aW9uOiBpc1J0bCA/ICdydGwnIDogbnVsbCxcbiAgICBwb2ludGVyRXZlbnRzOiBpc0Rpc2FibGVkID8gJ25vbmUnIDogbnVsbCwgLy8gY2FuY2VsIG1vdXNlIGV2ZW50cyB3aGVuIGRpc2FibGVkXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfTtcbn07XG52YXIgU2VsZWN0Q29udGFpbmVyID0gZnVuY3Rpb24gU2VsZWN0Q29udGFpbmVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzLFxuICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICBpc1J0bCA9IHByb3BzLmlzUnRsO1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIF9leHRlbmRzKHtcbiAgICAgIGNsYXNzTmFtZTogY3goIC8qI19fUFVSRV9fKi9jc3MoZ2V0U3R5bGVzKCdjb250YWluZXInLCBwcm9wcykpLCB7XG4gICAgICAgICctLWlzLWRpc2FibGVkJzogaXNEaXNhYmxlZCxcbiAgICAgICAgJy0taXMtcnRsJzogaXNSdGxcbiAgICAgIH0sIGNsYXNzTmFtZSlcbiAgICB9LCBpbm5lclByb3BzKSxcbiAgICBjaGlsZHJlblxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWYWx1ZSBDb250YWluZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgdmFsdWVDb250YWluZXJDU1MgPSBmdW5jdGlvbiB2YWx1ZUNvbnRhaW5lckNTUyhfcmVmMikge1xuICB2YXIgc3BhY2luZyA9IF9yZWYyLnRoZW1lLnNwYWNpbmc7XG4gIHJldHVybiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXg6IDEsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBwYWRkaW5nOiBzcGFjaW5nLmJhc2VVbml0IC8gMiArICdweCAnICsgc3BhY2luZy5iYXNlVW5pdCAqIDIgKyAncHgnLFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9O1xufTtcbnZhciBWYWx1ZUNvbnRhaW5lciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIGluaGVyaXRzKFZhbHVlQ29udGFpbmVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBWYWx1ZUNvbnRhaW5lcigpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBWYWx1ZUNvbnRhaW5lcik7XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFZhbHVlQ29udGFpbmVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVmFsdWVDb250YWluZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFZhbHVlQ29udGFpbmVyLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgY3ggPSBfcHJvcHMuY3gsXG4gICAgICAgICAgaXNNdWx0aSA9IF9wcm9wcy5pc011bHRpLFxuICAgICAgICAgIGdldFN0eWxlcyA9IF9wcm9wcy5nZXRTdHlsZXMsXG4gICAgICAgICAgaGFzVmFsdWUgPSBfcHJvcHMuaGFzVmFsdWU7XG5cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjeCggLyojX19QVVJFX18qL2NzcyhnZXRTdHlsZXMoJ3ZhbHVlQ29udGFpbmVyJywgdGhpcy5wcm9wcykpLCB7XG4gICAgICAgICAgICAndmFsdWUtY29udGFpbmVyJzogdHJ1ZSxcbiAgICAgICAgICAgICd2YWx1ZS1jb250YWluZXItLWlzLW11bHRpJzogaXNNdWx0aSxcbiAgICAgICAgICAgICd2YWx1ZS1jb250YWluZXItLWhhcy12YWx1ZSc6IGhhc1ZhbHVlXG4gICAgICAgICAgfSwgY2xhc3NOYW1lKVxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFZhbHVlQ29udGFpbmVyO1xufShDb21wb25lbnQpO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEluZGljYXRvciBDb250YWluZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgaW5kaWNhdG9yc0NvbnRhaW5lckNTUyA9IGZ1bmN0aW9uIGluZGljYXRvcnNDb250YWluZXJDU1MoKSB7XG4gIHJldHVybiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhTaHJpbms6IDBcbiAgfTtcbn07XG52YXIgSW5kaWNhdG9yc0NvbnRhaW5lciA9IGZ1bmN0aW9uIEluZGljYXRvcnNDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzO1xuXG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBjeCggLyojX19QVVJFX18qL2NzcyhnZXRTdHlsZXMoJ2luZGljYXRvcnNDb250YWluZXInLCBwcm9wcykpLCB7XG4gICAgICAgICdpbmRpY2F0b3JzJzogdHJ1ZVxuICAgICAgfSwgY2xhc3NOYW1lKVxuICAgIH0sXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBJY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBTdmcgPSBmdW5jdGlvbiBTdmcoX3JlZikge1xuICB2YXIgc2l6ZSA9IF9yZWYuc2l6ZSxcbiAgICAgIHByb3BzID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydzaXplJ10pO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnc3ZnJywgX2V4dGVuZHMoe1xuICAgIGhlaWdodDogc2l6ZSxcbiAgICB3aWR0aDogc2l6ZSxcbiAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgZm9jdXNhYmxlOiAnZmFsc2UnLFxuICAgIGNsYXNzTmFtZTogLyojX19QVVJFX18qLyAvKiNfX1BVUkVfXyovY3NzKHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwXG4gICAgfSlcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBDcm9zc0ljb24gPSBmdW5jdGlvbiBDcm9zc0ljb24ocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgU3ZnLFxuICAgIF9leHRlbmRzKHsgc2l6ZTogMjAgfSwgcHJvcHMpLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6JyB9KVxuICApO1xufTtcbnZhciBEb3duQ2hldnJvbiA9IGZ1bmN0aW9uIERvd25DaGV2cm9uKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIFN2ZyxcbiAgICBfZXh0ZW5kcyh7IHNpemU6IDIwIH0sIHByb3BzKSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1eicgfSlcbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGJhc2VDU1MgPSBmdW5jdGlvbiBiYXNlQ1NTKF9yZWYyKSB7XG4gIHZhciBpc0ZvY3VzZWQgPSBfcmVmMi5pc0ZvY3VzZWQsXG4gICAgICBfcmVmMiR0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgICAgYmFzZVVuaXQgPSBfcmVmMiR0aGVtZS5zcGFjaW5nLmJhc2VVbml0LFxuICAgICAgY29sb3JzID0gX3JlZjIkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG5cbiAgICAnOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwXG4gICAgfVxuICB9O1xufTtcblxudmFyIGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbnZhciBEcm9wZG93bkluZGljYXRvciA9IGZ1bmN0aW9uIERyb3Bkb3duSW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIF9leHRlbmRzKHt9LCBpbm5lclByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6IGN4KCAvKiNfX1BVUkVfXyovY3NzKGdldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcykpLCB7XG4gICAgICAgICdpbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICAnZHJvcGRvd24taW5kaWNhdG9yJzogdHJ1ZVxuICAgICAgfSwgY2xhc3NOYW1lKVxuICAgIH0pLFxuICAgIGNoaWxkcmVuIHx8IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRG93bkNoZXZyb24sIG51bGwpXG4gICk7XG59O1xuXG52YXIgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xudmFyIENsZWFySW5kaWNhdG9yID0gZnVuY3Rpb24gQ2xlYXJJbmRpY2F0b3IocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgX2V4dGVuZHMoe30sIGlubmVyUHJvcHMsIHtcbiAgICAgIGNsYXNzTmFtZTogY3goIC8qI19fUFVSRV9fKi9jc3MoZ2V0U3R5bGVzKCdjbGVhckluZGljYXRvcicsIHByb3BzKSksIHtcbiAgICAgICAgJ2luZGljYXRvcic6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlXG4gICAgICB9LCBjbGFzc05hbWUpXG4gICAgfSksXG4gICAgY2hpbGRyZW4gfHwgUmVhY3QuY3JlYXRlRWxlbWVudChDcm9zc0ljb24sIG51bGwpXG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNlcGFyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSBmdW5jdGlvbiBpbmRpY2F0b3JTZXBhcmF0b3JDU1MoX3JlZjMpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmMy5pc0Rpc2FibGVkLFxuICAgICAgX3JlZjMkdGhlbWUgPSBfcmVmMy50aGVtZSxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjMkdGhlbWUuc3BhY2luZy5iYXNlVW5pdCxcbiAgICAgIGNvbG9ycyA9IF9yZWYzJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICB3aWR0aDogMVxuICB9O1xufTtcblxudmFyIEluZGljYXRvclNlcGFyYXRvciA9IGZ1bmN0aW9uIEluZGljYXRvclNlcGFyYXRvcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgX2V4dGVuZHMoe30sIGlubmVyUHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IGN4KCAvKiNfX1BVUkVfXyovY3NzKGdldFN0eWxlcygnaW5kaWNhdG9yU2VwYXJhdG9yJywgcHJvcHMpKSwgeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKVxuICB9KSk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIga2V5ZnJhbWVzTmFtZSA9ICdyZWFjdC1zZWxlY3QtbG9hZGluZy1pbmRpY2F0b3InO1xudmFyIGtleWZyYW1lc0luamVjdGVkID0gZmFsc2U7XG5cbnZhciBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gZnVuY3Rpb24gbG9hZGluZ0luZGljYXRvckNTUyhfcmVmNCkge1xuICB2YXIgaXNGb2N1c2VkID0gX3JlZjQuaXNGb2N1c2VkLFxuICAgICAgc2l6ZSA9IF9yZWY0LnNpemUsXG4gICAgICBfcmVmNCR0aGVtZSA9IF9yZWY0LnRoZW1lLFxuICAgICAgY29sb3JzID0gX3JlZjQkdGhlbWUuY29sb3JzLFxuICAgICAgYmFzZVVuaXQgPSBfcmVmNCR0aGVtZS5zcGFjaW5nLmJhc2VVbml0O1xuICByZXR1cm4ge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICBmb250U2l6ZTogc2l6ZSxcbiAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIG1hcmdpblJpZ2h0OiBzaXplLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgfTtcbn07XG5cbnZhciBMb2FkaW5nRG90ID0gZnVuY3Rpb24gTG9hZGluZ0RvdChfcmVmNSkge1xuICB2YXIgY29sb3IgPSBfcmVmNS5jb2xvcixcbiAgICAgIGRlbGF5ID0gX3JlZjUuZGVsYXksXG4gICAgICBvZmZzZXQgPSBfcmVmNS5vZmZzZXQ7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge1xuICAgIGNsYXNzTmFtZTogLyojX19QVVJFX18qLyAvKiNfX1BVUkVfXyovY3NzKHtcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMXMnLFxuICAgICAgYW5pbWF0aW9uRGVsYXk6IGRlbGF5ICsgJ21zJyxcbiAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnLFxuICAgICAgYW5pbWF0aW9uTmFtZToga2V5ZnJhbWVzTmFtZSxcbiAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogbnVsbCxcbiAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgIHdpZHRoOiAnMWVtJ1xuICAgIH0pXG4gIH0pO1xufTtcblxudmFyIExvYWRpbmdJbmRpY2F0b3IgPSBmdW5jdGlvbiBMb2FkaW5nSW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBpc0ZvY3VzZWQgPSBwcm9wcy5pc0ZvY3VzZWQsXG4gICAgICBpc1J0bCA9IHByb3BzLmlzUnRsLFxuICAgICAgY29sb3JzID0gcHJvcHMudGhlbWUuY29sb3JzO1xuXG4gIHZhciBjb2xvciA9IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDIwO1xuXG4gIGlmICgha2V5ZnJhbWVzSW5qZWN0ZWQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgaW5qZWN0R2xvYmFsKCdAa2V5ZnJhbWVzICcsIGtleWZyYW1lc05hbWUsICd7MCUsODAlLDEwMCV7b3BhY2l0eTowO300MCV7b3BhY2l0eToxO319OycpO1xuICAgIGtleWZyYW1lc0luamVjdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIF9leHRlbmRzKHt9LCBpbm5lclByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6IGN4KCAvKiNfX1BVUkVfXyovY3NzKGdldFN0eWxlcygnbG9hZGluZ0luZGljYXRvcicsIHByb3BzKSksIHtcbiAgICAgICAgJ2luZGljYXRvcic6IHRydWUsXG4gICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWVcbiAgICAgIH0sIGNsYXNzTmFtZSlcbiAgICB9KSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmdEb3QsIHsgY29sb3I6IGNvbG9yLCBkZWxheTogMCwgb2Zmc2V0OiBpc1J0bCB9KSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmdEb3QsIHsgY29sb3I6IGNvbG9yLCBkZWxheTogMTYwLCBvZmZzZXQ6IHRydWUgfSksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nRG90LCB7IGNvbG9yOiBjb2xvciwgZGVsYXk6IDMyMCwgb2Zmc2V0OiAhaXNSdGwgfSlcbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuXG52YXIgY3NzJDEgPSBmdW5jdGlvbiBjc3MkJDEoX3JlZikge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZCA9IF9yZWYuaXNGb2N1c2VkLFxuICAgICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycyxcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9yZWYkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZztcbiAgcmV0dXJuIHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDUgOiBjb2xvcnMubmV1dHJhbDAsXG4gICAgYm9yZGVyQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogaXNGb2N1c2VkID8gY29sb3JzLnByaW1hcnkgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgIGJvcmRlcldpZHRoOiAxLFxuICAgIGJveFNoYWRvdzogaXNGb2N1c2VkID8gJzAgMCAwIDFweCAnICsgY29sb3JzLnByaW1hcnkgOiBudWxsLFxuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbWluSGVpZ2h0OiBzcGFjaW5nLmNvbnRyb2xIZWlnaHQsXG4gICAgb3V0bGluZTogJzAgIWltcG9ydGFudCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAxMDBtcycsXG5cbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMucHJpbWFyeSA6IGNvbG9ycy5uZXV0cmFsMzBcbiAgICB9XG4gIH07XG59O1xuXG52YXIgQ29udHJvbCA9IGZ1bmN0aW9uIENvbnRyb2wocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICBpc0ZvY3VzZWQgPSBwcm9wcy5pc0ZvY3VzZWQsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBtZW51SXNPcGVuID0gcHJvcHMubWVudUlzT3BlbjtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBfZXh0ZW5kcyh7XG4gICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgY2xhc3NOYW1lOiBjeCggLyojX19QVVJFX18qL2NzcyhnZXRTdHlsZXMoJ2NvbnRyb2wnLCBwcm9wcykpLCB7XG4gICAgICAgICdjb250cm9sJzogdHJ1ZSxcbiAgICAgICAgJ2NvbnRyb2wtLWlzLWRpc2FibGVkJzogaXNEaXNhYmxlZCxcbiAgICAgICAgJ2NvbnRyb2wtLWlzLWZvY3VzZWQnOiBpc0ZvY3VzZWQsXG4gICAgICAgICdjb250cm9sLS1tZW51LWlzLW9wZW4nOiBtZW51SXNPcGVuXG4gICAgICB9LCBjbGFzc05hbWUpXG4gICAgfSwgaW5uZXJQcm9wcyksXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cbnZhciBncm91cENTUyA9IGZ1bmN0aW9uIGdyb3VwQ1NTKF9yZWYpIHtcbiAgdmFyIHNwYWNpbmcgPSBfcmVmLnRoZW1lLnNwYWNpbmc7XG4gIHJldHVybiB7XG4gICAgcGFkZGluZ0JvdHRvbTogc3BhY2luZy5iYXNlVW5pdCAqIDIsXG4gICAgcGFkZGluZ1RvcDogc3BhY2luZy5iYXNlVW5pdCAqIDJcbiAgfTtcbn07XG5cbnZhciBHcm91cCA9IGZ1bmN0aW9uIEdyb3VwKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIEhlYWRpbmcgPSBwcm9wcy5IZWFkaW5nLFxuICAgICAgaGVhZGluZ1Byb3BzID0gcHJvcHMuaGVhZGluZ1Byb3BzLFxuICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgIHRoZW1lID0gcHJvcHMudGhlbWUsXG4gICAgICBzZWxlY3RQcm9wcyA9IHByb3BzLnNlbGVjdFByb3BzO1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogY3goIC8qI19fUFVSRV9fKi9jc3MoZ2V0U3R5bGVzKCdncm91cCcsIHByb3BzKSksIHsgJ2dyb3VwJzogdHJ1ZSB9LCBjbGFzc05hbWUpXG4gICAgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgSGVhZGluZyxcbiAgICAgIF9leHRlbmRzKHt9LCBoZWFkaW5nUHJvcHMsIHtcbiAgICAgICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzLFxuICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgIGdldFN0eWxlczogZ2V0U3R5bGVzLFxuICAgICAgICBjeDogY3hcbiAgICAgIH0pLFxuICAgICAgbGFiZWxcbiAgICApLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIG51bGwsXG4gICAgICBjaGlsZHJlblxuICAgIClcbiAgKTtcbn07XG5cbnZhciBncm91cEhlYWRpbmdDU1MgPSBmdW5jdGlvbiBncm91cEhlYWRpbmdDU1MoX3JlZjIpIHtcbiAgdmFyIHNwYWNpbmcgPSBfcmVmMi50aGVtZS5zcGFjaW5nO1xuICByZXR1cm4ge1xuICAgIGNvbG9yOiAnIzk5OScsXG4gICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogJzc1JScsXG4gICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMC4yNWVtJyxcbiAgICBwYWRkaW5nTGVmdDogc3BhY2luZy5iYXNlVW5pdCAqIDMsXG4gICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nLmJhc2VVbml0ICogMyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICB9O1xufTtcblxudmFyIEdyb3VwSGVhZGluZyA9IGZ1bmN0aW9uIEdyb3VwSGVhZGluZyhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIHRoZW1lID0gcHJvcHMudGhlbWUsXG4gICAgICBzZWxlY3RQcm9wcyA9IHByb3BzLnNlbGVjdFByb3BzLFxuICAgICAgY2xlYW5Qcm9wcyA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ2NsYXNzTmFtZScsICdjeCcsICdnZXRTdHlsZXMnLCAndGhlbWUnLCAnc2VsZWN0UHJvcHMnXSk7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGN4KCAvKiNfX1BVUkVfXyovY3NzKGdldFN0eWxlcygnZ3JvdXBIZWFkaW5nJywgX2V4dGVuZHMoeyB0aGVtZTogdGhlbWUgfSwgY2xlYW5Qcm9wcykpKSwgeyAnZ3JvdXAtaGVhZGluZyc6IHRydWUgfSwgY2xhc3NOYW1lKVxuICB9LCBjbGVhblByb3BzKSk7XG59O1xuXG52YXIgaW5wdXRDU1MgPSBmdW5jdGlvbiBpbnB1dENTUyhfcmVmKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgbWFyZ2luOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBwYWRkaW5nQm90dG9tOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBwYWRkaW5nVG9wOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICB2aXNpYmlsaXR5OiBpc0Rpc2FibGVkID8gJ2hpZGRlbicgOiAndmlzaWJsZScsXG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsODBcbiAgfTtcbn07XG52YXIgaW5wdXRTdHlsZSA9IGZ1bmN0aW9uIGlucHV0U3R5bGUoaXNIaWRkZW4pIHtcbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kOiAwLFxuICAgIGJvcmRlcjogMCxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIG9wYWNpdHk6IGlzSGlkZGVuID8gMCA6IDEsXG4gICAgb3V0bGluZTogMCxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgfTtcbn07XG5cbnZhciBJbnB1dCA9IGZ1bmN0aW9uIElucHV0KF9yZWYyKSB7XG4gIHZhciBjbGFzc05hbWUgPSBfcmVmMi5jbGFzc05hbWUsXG4gICAgICBjeCA9IF9yZWYyLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gX3JlZjIuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJSZWYgPSBfcmVmMi5pbm5lclJlZixcbiAgICAgIGlzSGlkZGVuID0gX3JlZjIuaXNIaWRkZW4sXG4gICAgICBpc0Rpc2FibGVkID0gX3JlZjIuaXNEaXNhYmxlZCxcbiAgICAgIHRoZW1lID0gX3JlZjIudGhlbWUsXG4gICAgICBzZWxlY3RQcm9wcyA9IF9yZWYyLnNlbGVjdFByb3BzLFxuICAgICAgcHJvcHMgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMiwgWydjbGFzc05hbWUnLCAnY3gnLCAnZ2V0U3R5bGVzJywgJ2lubmVyUmVmJywgJ2lzSGlkZGVuJywgJ2lzRGlzYWJsZWQnLCAndGhlbWUnLCAnc2VsZWN0UHJvcHMnXSk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHsgY2xhc3NOYW1lOiAvKiNfX1BVUkVfXyovIC8qI19fUFVSRV9fKi9jc3MoZ2V0U3R5bGVzKCdpbnB1dCcsIF9leHRlbmRzKHsgdGhlbWU6IHRoZW1lIH0sIHByb3BzKSkpIH0sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChBdXRvc2l6ZUlucHV0LCBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc05hbWU6IGN4KG51bGwsIHsgJ2lucHV0JzogdHJ1ZSB9LCBjbGFzc05hbWUpLFxuICAgICAgaW5wdXRSZWY6IGlubmVyUmVmLFxuICAgICAgaW5wdXRTdHlsZTogaW5wdXRTdHlsZShpc0hpZGRlbiksXG4gICAgICBkaXNhYmxlZDogaXNEaXNhYmxlZFxuICAgIH0sIHByb3BzKSlcbiAgKTtcbn07XG5cbnZhciBtdWx0aVZhbHVlQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZUNTUyhfcmVmKSB7XG4gIHZhciBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBib3JkZXJSYWRpdXMgPSBfcmVmJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLm5ldXRyYWwxMCxcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyAvIDIsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1hcmdpbjogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgbWluV2lkdGg6IDAgLy8gcmVzb2x2ZXMgZmxleC90ZXh0LW92ZXJmbG93IGJ1Z1xuICB9O1xufTtcblxudmFyIG11bHRpVmFsdWVMYWJlbENTUyA9IGZ1bmN0aW9uIG11bHRpVmFsdWVMYWJlbENTUyhfcmVmMikge1xuICB2YXIgX3JlZjIkdGhlbWUgPSBfcmVmMi50aGVtZSxcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9yZWYyJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIGNvbG9ycyA9IF9yZWYyJHRoZW1lLmNvbG9ycyxcbiAgICAgIGNyb3BXaXRoRWxsaXBzaXMgPSBfcmVmMi5jcm9wV2l0aEVsbGlwc2lzO1xuICByZXR1cm4ge1xuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzIC8gMixcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw4MCxcbiAgICBmb250U2l6ZTogJzg1JScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBhZGRpbmc6IDMsXG4gICAgcGFkZGluZ0xlZnQ6IDYsXG4gICAgdGV4dE92ZXJmbG93OiBjcm9wV2l0aEVsbGlwc2lzID8gJ2VsbGlwc2lzJyA6IG51bGwsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfTtcbn07XG5cbnZhciBtdWx0aVZhbHVlUmVtb3ZlQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZVJlbW92ZUNTUyhfcmVmMykge1xuICB2YXIgX3JlZjMkdGhlbWUgPSBfcmVmMy50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmMyR0aGVtZS5zcGFjaW5nLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX3JlZjMkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgY29sb3JzID0gX3JlZjMkdGhlbWUuY29sb3JzLFxuICAgICAgaXNGb2N1c2VkID0gX3JlZjMuaXNGb2N1c2VkO1xuICByZXR1cm4ge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzIC8gMixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRm9jdXNlZCAmJiBjb2xvcnMuZGFuZ2VyTGlnaHQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nLmJhc2VVbml0LFxuICAgIHBhZGRpbmdSaWdodDogc3BhY2luZy5iYXNlVW5pdCxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZGFuZ2VyTGlnaHQsXG4gICAgICBjb2xvcjogY29sb3JzLmRhbmdlclxuICAgIH1cbiAgfTtcbn07XG5cbnZhciBNdWx0aVZhbHVlR2VuZXJpYyA9IGZ1bmN0aW9uIE11bHRpVmFsdWVHZW5lcmljKF9yZWY0KSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWY0LmNoaWxkcmVuLFxuICAgICAgaW5uZXJQcm9wcyA9IF9yZWY0LmlubmVyUHJvcHM7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIGlubmVyUHJvcHMsXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cbnZhciBNdWx0aVZhbHVlQ29udGFpbmVyID0gTXVsdGlWYWx1ZUdlbmVyaWM7XG52YXIgTXVsdGlWYWx1ZUxhYmVsID0gTXVsdGlWYWx1ZUdlbmVyaWM7XG5cbnZhciBNdWx0aVZhbHVlUmVtb3ZlID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgaW5oZXJpdHMoTXVsdGlWYWx1ZVJlbW92ZSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTXVsdGlWYWx1ZVJlbW92ZSgpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBNdWx0aVZhbHVlUmVtb3ZlKTtcbiAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTXVsdGlWYWx1ZVJlbW92ZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE11bHRpVmFsdWVSZW1vdmUpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKE11bHRpVmFsdWVSZW1vdmUsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgaW5uZXJQcm9wcyA9IF9wcm9wcy5pbm5lclByb3BzO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIGlubmVyUHJvcHMsXG4gICAgICAgIGNoaWxkcmVuIHx8IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ3Jvc3NJY29uLCB7IHNpemU6IDE0IH0pXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTXVsdGlWYWx1ZVJlbW92ZTtcbn0oQ29tcG9uZW50KTtcblxudmFyIE11bHRpVmFsdWUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDIpIHtcbiAgaW5oZXJpdHMoTXVsdGlWYWx1ZSwgX0NvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIE11bHRpVmFsdWUoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgTXVsdGlWYWx1ZSk7XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE11bHRpVmFsdWUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNdWx0aVZhbHVlKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhNdWx0aVZhbHVlLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzMi5jbGFzc05hbWUsXG4gICAgICAgICAgY29tcG9uZW50cyA9IF9wcm9wczIuY29tcG9uZW50cyxcbiAgICAgICAgICBjeCA9IF9wcm9wczIuY3gsXG4gICAgICAgICAgZGF0YSA9IF9wcm9wczIuZGF0YSxcbiAgICAgICAgICBnZXRTdHlsZXMgPSBfcHJvcHMyLmdldFN0eWxlcyxcbiAgICAgICAgICBpbm5lclByb3BzID0gX3Byb3BzMi5pbm5lclByb3BzLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfcHJvcHMyLmlzRGlzYWJsZWQsXG4gICAgICAgICAgcmVtb3ZlUHJvcHMgPSBfcHJvcHMyLnJlbW92ZVByb3BzLFxuICAgICAgICAgIHNlbGVjdFByb3BzID0gX3Byb3BzMi5zZWxlY3RQcm9wcztcbiAgICAgIHZhciBDb250YWluZXIgPSBjb21wb25lbnRzLkNvbnRhaW5lcixcbiAgICAgICAgICBMYWJlbCA9IGNvbXBvbmVudHMuTGFiZWwsXG4gICAgICAgICAgUmVtb3ZlID0gY29tcG9uZW50cy5SZW1vdmU7XG5cblxuICAgICAgdmFyIGNvbnRhaW5lcklubmVyUHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICAgIGNsYXNzTmFtZTogY3goIC8qI19fUFVSRV9fKi9jc3MoZ2V0U3R5bGVzKCdtdWx0aVZhbHVlJywgdGhpcy5wcm9wcykpLCB7XG4gICAgICAgICAgJ211bHRpLXZhbHVlJzogdHJ1ZSxcbiAgICAgICAgICAnbXVsdGktdmFsdWUtLWlzLWRpc2FibGVkJzogaXNEaXNhYmxlZFxuICAgICAgICB9LCBjbGFzc05hbWUpXG4gICAgICB9LCBpbm5lclByb3BzKTtcblxuICAgICAgdmFyIGxhYmVsSW5uZXJQcm9wcyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBjeCggLyojX19QVVJFX18qL2NzcyhnZXRTdHlsZXMoJ211bHRpVmFsdWVMYWJlbCcsIHRoaXMucHJvcHMpKSwge1xuICAgICAgICAgICdtdWx0aS12YWx1ZV9fbGFiZWwnOiB0cnVlXG4gICAgICAgIH0sIGNsYXNzTmFtZSlcbiAgICAgIH07XG5cbiAgICAgIHZhciByZW1vdmVJbm5lclByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgICBjbGFzc05hbWU6IGN4KCAvKiNfX1BVUkVfXyovY3NzKGdldFN0eWxlcygnbXVsdGlWYWx1ZVJlbW92ZScsIHRoaXMucHJvcHMpKSwge1xuICAgICAgICAgICdtdWx0aS12YWx1ZV9fcmVtb3ZlJzogdHJ1ZVxuICAgICAgICB9LCBjbGFzc05hbWUpXG4gICAgICB9LCByZW1vdmVQcm9wcyk7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBDb250YWluZXIsXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIGlubmVyUHJvcHM6IGNvbnRhaW5lcklubmVyUHJvcHMsXG4gICAgICAgICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzXG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgTGFiZWwsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIGlubmVyUHJvcHM6IGxhYmVsSW5uZXJQcm9wcyxcbiAgICAgICAgICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZW1vdmUsIHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIGlubmVyUHJvcHM6IHJlbW92ZUlubmVyUHJvcHMsXG4gICAgICAgICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTXVsdGlWYWx1ZTtcbn0oQ29tcG9uZW50KTtcblxuTXVsdGlWYWx1ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNyb3BXaXRoRWxsaXBzaXM6IHRydWVcbn07XG5cbnZhciBvcHRpb25DU1MgPSBmdW5jdGlvbiBvcHRpb25DU1MoX3JlZikge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZCA9IF9yZWYuaXNGb2N1c2VkLFxuICAgICAgaXNTZWxlY3RlZCA9IF9yZWYuaXNTZWxlY3RlZCxcbiAgICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRDb2xvcjogaXNTZWxlY3RlZCA/IGNvbG9ycy5wcmltYXJ5IDogaXNGb2N1c2VkID8gY29sb3JzLnByaW1hcnkyNSA6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDIwIDogaXNTZWxlY3RlZCA/IGNvbG9ycy5uZXV0cmFsMCA6ICdpbmhlcml0JyxcbiAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgcGFkZGluZzogc3BhY2luZy5iYXNlVW5pdCAqIDIgKyAncHggJyArIHNwYWNpbmcuYmFzZVVuaXQgKiAzICsgJ3B4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxuXG4gICAgLy8gcHJvdmlkZSBzb21lIGFmZm9yZGFuY2Ugb24gdG91Y2ggZGV2aWNlc1xuICAgICc6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBpc1NlbGVjdGVkID8gY29sb3JzLnByaW1hcnkgOiBjb2xvcnMucHJpbWFyeTUwXG4gICAgfVxuICB9O1xufTtcblxudmFyIE9wdGlvbiA9IGZ1bmN0aW9uIE9wdGlvbihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZCA9IHByb3BzLmlzRm9jdXNlZCxcbiAgICAgIGlzU2VsZWN0ZWQgPSBwcm9wcy5pc1NlbGVjdGVkLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIF9leHRlbmRzKHtcbiAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICBjbGFzc05hbWU6IGN4KCAvKiNfX1BVUkVfXyovY3NzKGdldFN0eWxlcygnb3B0aW9uJywgcHJvcHMpKSwge1xuICAgICAgICAnb3B0aW9uJzogdHJ1ZSxcbiAgICAgICAgJ29wdGlvbi0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICAgICAnb3B0aW9uLS1pcy1mb2N1c2VkJzogaXNGb2N1c2VkLFxuICAgICAgICAnb3B0aW9uLS1pcy1zZWxlY3RlZCc6IGlzU2VsZWN0ZWRcbiAgICAgIH0sIGNsYXNzTmFtZSlcbiAgICB9LCBpbm5lclByb3BzKSxcbiAgICBjaGlsZHJlblxuICApO1xufTtcblxudmFyIHBsYWNlaG9sZGVyQ1NTID0gZnVuY3Rpb24gcGxhY2Vob2xkZXJDU1MoX3JlZikge1xuICB2YXIgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsNTAsXG4gICAgbWFyZ2luTGVmdDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgbWFyZ2luUmlnaHQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKSdcbiAgfTtcbn07XG5cbnZhciBQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIFBsYWNlaG9sZGVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIF9leHRlbmRzKHtcbiAgICAgIGNsYXNzTmFtZTogY3goIC8qI19fUFVSRV9fKi9jc3MoZ2V0U3R5bGVzKCdwbGFjZWhvbGRlcicsIHByb3BzKSksIHtcbiAgICAgICAgJ3BsYWNlaG9sZGVyJzogdHJ1ZVxuICAgICAgfSwgY2xhc3NOYW1lKVxuICAgIH0sIGlubmVyUHJvcHMpLFxuICAgIGNoaWxkcmVuXG4gICk7XG59O1xuXG52YXIgY3NzJDIgPSBmdW5jdGlvbiBjc3MkJDEoX3JlZikge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGNvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWw0MCA6IGNvbG9ycy5uZXV0cmFsODAsXG4gICAgbWFyZ2luTGVmdDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgbWFyZ2luUmlnaHQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIG1heFdpZHRoOiAnY2FsYygxMDAlIC0gJyArIHNwYWNpbmcuYmFzZVVuaXQgKiAyICsgJ3B4KScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknXG4gIH07XG59O1xuXG52YXIgU2luZ2xlVmFsdWUgPSBmdW5jdGlvbiBTaW5nbGVWYWx1ZShwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIF9leHRlbmRzKHtcbiAgICAgIGNsYXNzTmFtZTogY3goIC8qI19fUFVSRV9fKi9jc3MoZ2V0U3R5bGVzKCdzaW5nbGVWYWx1ZScsIHByb3BzKSksIHtcbiAgICAgICAgJ3NpbmdsZS12YWx1ZSc6IHRydWUsXG4gICAgICAgICdzaW5nbGUtdmFsdWUtLWlzLWRpc2FibGVkJzogaXNEaXNhYmxlZFxuICAgICAgfSwgY2xhc3NOYW1lKVxuICAgIH0sIGlubmVyUHJvcHMpLFxuICAgIGNoaWxkcmVuXG4gICk7XG59O1xuXG52YXIgY29tcG9uZW50cyA9IHtcbiAgQ2xlYXJJbmRpY2F0b3I6IENsZWFySW5kaWNhdG9yLFxuICBDb250cm9sOiBDb250cm9sLFxuICBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25JbmRpY2F0b3IsXG4gIERvd25DaGV2cm9uOiBEb3duQ2hldnJvbixcbiAgQ3Jvc3NJY29uOiBDcm9zc0ljb24sXG4gIEdyb3VwOiBHcm91cCxcbiAgR3JvdXBIZWFkaW5nOiBHcm91cEhlYWRpbmcsXG4gIEluZGljYXRvcnNDb250YWluZXI6IEluZGljYXRvcnNDb250YWluZXIsXG4gIEluZGljYXRvclNlcGFyYXRvcjogSW5kaWNhdG9yU2VwYXJhdG9yLFxuICBJbnB1dDogSW5wdXQsXG4gIExvYWRpbmdJbmRpY2F0b3I6IExvYWRpbmdJbmRpY2F0b3IsXG4gIE1lbnU6IE1lbnUsXG4gIE1lbnVMaXN0OiBNZW51TGlzdCxcbiAgTWVudVBvcnRhbDogTWVudVBvcnRhbCxcbiAgTG9hZGluZ01lc3NhZ2U6IExvYWRpbmdNZXNzYWdlLFxuICBOb09wdGlvbnNNZXNzYWdlOiBOb09wdGlvbnNNZXNzYWdlLFxuICBNdWx0aVZhbHVlOiBNdWx0aVZhbHVlLFxuICBNdWx0aVZhbHVlQ29udGFpbmVyOiBNdWx0aVZhbHVlQ29udGFpbmVyLFxuICBNdWx0aVZhbHVlTGFiZWw6IE11bHRpVmFsdWVMYWJlbCxcbiAgTXVsdGlWYWx1ZVJlbW92ZTogTXVsdGlWYWx1ZVJlbW92ZSxcbiAgT3B0aW9uOiBPcHRpb24sXG4gIFBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlcixcbiAgU2VsZWN0Q29udGFpbmVyOiBTZWxlY3RDb250YWluZXIsXG4gIFNpbmdsZVZhbHVlOiBTaW5nbGVWYWx1ZSxcbiAgVmFsdWVDb250YWluZXI6IFZhbHVlQ29udGFpbmVyXG59O1xuXG52YXIgZGVmYXVsdENvbXBvbmVudHMgPSBmdW5jdGlvbiBkZWZhdWx0Q29tcG9uZW50cyhwcm9wcykge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbXBvbmVudHMsIHByb3BzLmNvbXBvbmVudHMpO1xufTtcblxudmFyIGRlZmF1bHRTdHlsZXMgPSB7XG4gIGNsZWFySW5kaWNhdG9yOiBjbGVhckluZGljYXRvckNTUyxcbiAgY29udGFpbmVyOiBjb250YWluZXJDU1MsXG4gIGNvbnRyb2w6IGNzcyQxLFxuICBkcm9wZG93bkluZGljYXRvcjogZHJvcGRvd25JbmRpY2F0b3JDU1MsXG4gIGdyb3VwOiBncm91cENTUyxcbiAgZ3JvdXBIZWFkaW5nOiBncm91cEhlYWRpbmdDU1MsXG4gIGluZGljYXRvcnNDb250YWluZXI6IGluZGljYXRvcnNDb250YWluZXJDU1MsXG4gIGluZGljYXRvclNlcGFyYXRvcjogaW5kaWNhdG9yU2VwYXJhdG9yQ1NTLFxuICBpbnB1dDogaW5wdXRDU1MsXG4gIGxvYWRpbmdJbmRpY2F0b3I6IGxvYWRpbmdJbmRpY2F0b3JDU1MsXG4gIGxvYWRpbmdNZXNzYWdlOiBsb2FkaW5nTWVzc2FnZUNTUyxcbiAgbWVudTogbWVudUNTUyxcbiAgbWVudUxpc3Q6IG1lbnVMaXN0Q1NTLFxuICBtZW51UG9ydGFsOiBtZW51UG9ydGFsQ1NTLFxuICBtdWx0aVZhbHVlOiBtdWx0aVZhbHVlQ1NTLFxuICBtdWx0aVZhbHVlTGFiZWw6IG11bHRpVmFsdWVMYWJlbENTUyxcbiAgbXVsdGlWYWx1ZVJlbW92ZTogbXVsdGlWYWx1ZVJlbW92ZUNTUyxcbiAgbm9PcHRpb25zTWVzc2FnZTogbm9PcHRpb25zTWVzc2FnZUNTUyxcbiAgb3B0aW9uOiBvcHRpb25DU1MsXG4gIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlckNTUyxcbiAgc2luZ2xlVmFsdWU6IGNzcyQyLFxuICB2YWx1ZUNvbnRhaW5lcjogdmFsdWVDb250YWluZXJDU1Ncbn07XG5cbi8vIE1lcmdlIFV0aWxpdHlcbi8vIEFsbG93cyBjb25zdW1lcnMgdG8gZXh0ZW5kIGEgYmFzZSBTZWxlY3Qgd2l0aCBhZGRpdGlvbmFsIHN0eWxlc1xuXG5mdW5jdGlvbiBtZXJnZVN0eWxlcyhzb3VyY2UpIHtcbiAgdmFyIHRhcmdldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgLy8gaW5pdGlhbGl6ZSB3aXRoIHNvdXJjZSBzdHlsZXNcbiAgdmFyIHN0eWxlcyA9IF9leHRlbmRzKHt9LCBzb3VyY2UpO1xuXG4gIC8vIG1hc3NhZ2UgaW4gdGFyZ2V0IHN0eWxlc1xuICBPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChzb3VyY2Vba2V5XSkge1xuICAgICAgc3R5bGVzW2tleV0gPSBmdW5jdGlvbiAocnNDc3MsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XShzb3VyY2Vba2V5XShyc0NzcywgcHJvcHMpLCBwcm9wcyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNba2V5XSA9IHRhcmdldFtrZXldO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxudmFyIGNvbG9ycyA9IHtcbiAgcHJpbWFyeTogJyMyNjg0RkYnLFxuICBwcmltYXJ5NzU6ICcjNEM5QUZGJyxcbiAgcHJpbWFyeTUwOiAnI0IyRDRGRicsXG4gIHByaW1hcnkyNTogJyNERUVCRkYnLFxuXG4gIGRhbmdlcjogJyNERTM1MEInLFxuICBkYW5nZXJMaWdodDogJyNGRkJEQUQnLFxuXG4gIG5ldXRyYWwwOiAnaHNsKDAsIDAlLCAxMDAlKScsXG4gIG5ldXRyYWw1OiAnaHNsKDAsIDAlLCA5NSUpJyxcbiAgbmV1dHJhbDEwOiAnaHNsKDAsIDAlLCA5MCUpJyxcbiAgbmV1dHJhbDIwOiAnaHNsKDAsIDAlLCA4MCUpJyxcbiAgbmV1dHJhbDMwOiAnaHNsKDAsIDAlLCA3MCUpJyxcbiAgbmV1dHJhbDQwOiAnaHNsKDAsIDAlLCA2MCUpJyxcbiAgbmV1dHJhbDUwOiAnaHNsKDAsIDAlLCA1MCUpJyxcbiAgbmV1dHJhbDYwOiAnaHNsKDAsIDAlLCA0MCUpJyxcbiAgbmV1dHJhbDcwOiAnaHNsKDAsIDAlLCAzMCUpJyxcbiAgbmV1dHJhbDgwOiAnaHNsKDAsIDAlLCAyMCUpJyxcbiAgbmV1dHJhbDkwOiAnaHNsKDAsIDAlLCAxMCUpJ1xufTtcblxudmFyIGJvcmRlclJhZGl1cyA9IDQ7XG52YXIgYmFzZVVuaXQgPSA0OyAvKiBVc2VkIHRvIGNhbGN1bGF0ZSBjb25zaXN0ZW50IG1hcmdpbi9wYWRkaW5nIG9uIGVsZW1lbnRzICovXG52YXIgY29udHJvbEhlaWdodCA9IDM4OyAvKiBUaGUgbWluaW11bSBoZWlnaHQgb2YgdGhlIGNvbnRyb2wgKi9cbnZhciBtZW51R3V0dGVyID0gYmFzZVVuaXQgKiAyOyAvKiBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIGNvbnRyb2wgYW5kIG1lbnUgKi9cblxudmFyIHNwYWNpbmcgPSB7XG4gIGJhc2VVbml0OiBiYXNlVW5pdCxcbiAgY29udHJvbEhlaWdodDogY29udHJvbEhlaWdodCxcbiAgbWVudUd1dHRlcjogbWVudUd1dHRlclxufTtcblxudmFyIGRlZmF1bHRUaGVtZSA9IHtcbiAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gIGNvbG9yczogY29sb3JzLFxuICBzcGFjaW5nOiBzcGFjaW5nXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBiYWNrc3BhY2VSZW1vdmVzVmFsdWU6IHRydWUsXG4gIGJsdXJJbnB1dE9uU2VsZWN0OiBpc1RvdWNoQ2FwYWJsZSgpLFxuICBjYXB0dXJlTWVudVNjcm9sbDogIWlzVG91Y2hDYXBhYmxlKCksXG4gIGNsb3NlTWVudU9uU2VsZWN0OiB0cnVlLFxuICBjbG9zZU1lbnVPblNjcm9sbDogZmFsc2UsXG4gIGNvbXBvbmVudHM6IHt9LFxuICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWU6IHRydWUsXG4gIGVzY2FwZUNsZWFyc1ZhbHVlOiBmYWxzZSxcbiAgZmlsdGVyT3B0aW9uOiBjcmVhdGVGaWx0ZXIoKSxcbiAgZm9ybWF0R3JvdXBMYWJlbDogZm9ybWF0R3JvdXBMYWJlbCxcbiAgZ2V0T3B0aW9uTGFiZWw6IGdldE9wdGlvbkxhYmVsLFxuICBnZXRPcHRpb25WYWx1ZTogZ2V0T3B0aW9uVmFsdWUsXG4gIGlzRGlzYWJsZWQ6IGZhbHNlLFxuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBpc011bHRpOiBmYWxzZSxcbiAgaXNSdGw6IGZhbHNlLFxuICBpc1NlYXJjaGFibGU6IHRydWUsXG4gIGlzT3B0aW9uRGlzYWJsZWQ6IGlzT3B0aW9uRGlzYWJsZWQsXG4gIGxvYWRpbmdNZXNzYWdlOiBmdW5jdGlvbiBsb2FkaW5nTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gJ0xvYWRpbmcuLi4nO1xuICB9LFxuICBtYXhNZW51SGVpZ2h0OiAzMDAsXG4gIG1pbk1lbnVIZWlnaHQ6IDE0MCxcbiAgbWVudUlzT3BlbjogZmFsc2UsXG4gIG1lbnVQbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtZW51UG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIG1lbnVTaG91bGRCbG9ja1Njcm9sbDogZmFsc2UsXG4gIG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldzogIWlzTW9iaWxlRGV2aWNlKCksXG4gIG5vT3B0aW9uc01lc3NhZ2U6IGZ1bmN0aW9uIG5vT3B0aW9uc01lc3NhZ2UoKSB7XG4gICAgcmV0dXJuICdObyBvcHRpb25zJztcbiAgfSxcbiAgb3Blbk1lbnVPbkZvY3VzOiBmYWxzZSxcbiAgb3Blbk1lbnVPbkNsaWNrOiB0cnVlLFxuICBvcHRpb25zOiBbXSxcbiAgcGFnZVNpemU6IDUsXG4gIHBsYWNlaG9sZGVyOiAnU2VsZWN0Li4uJyxcbiAgc2NyZWVuUmVhZGVyU3RhdHVzOiBmdW5jdGlvbiBzY3JlZW5SZWFkZXJTdGF0dXMoX3JlZikge1xuICAgIHZhciBjb3VudCA9IF9yZWYuY291bnQ7XG4gICAgcmV0dXJuIGNvdW50ICsgJyByZXN1bHQnICsgKGNvdW50ICE9PSAxID8gJ3MnIDogJycpICsgJyBhdmFpbGFibGUnO1xuICB9LFxuICBzdHlsZXM6IHt9LFxuICB0YWJJbmRleDogJzAnLFxuICB0YWJTZWxlY3RzVmFsdWU6IHRydWVcbn07XG5cbnZhciBpbnN0YW5jZUlkID0gMTtcblxudmFyIFNlbGVjdCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIGluaGVyaXRzKFNlbGVjdCwgX0NvbXBvbmVudCk7XG5cbiAgLy8gTGlmZWN5Y2xlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJlZnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gTWlzYy4gSW5zdGFuY2UgUHJvcGVydGllc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBmdW5jdGlvbiBTZWxlY3QocHJvcHMpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTZWxlY3QpO1xuXG4gICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU2VsZWN0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2VsZWN0KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2luaXRpYWxpc2VQcm9wcy5jYWxsKF90aGlzKTtcblxuICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlO1xuXG4gICAgX3RoaXMuY2FjaGVDb21wb25lbnRzID0gbWVtb2l6ZU9uZShfdGhpcy5jYWNoZUNvbXBvbmVudHMsIGV4cG9ydGVkRXF1YWwpLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmNhY2hlQ29tcG9uZW50cyhwcm9wcy5jb21wb25lbnRzKTtcbiAgICBfdGhpcy5pbnN0YW5jZVByZWZpeCA9ICdyZWFjdC1zZWxlY3QtJyArIChfdGhpcy5wcm9wcy5pbnN0YW5jZUlkIHx8ICsraW5zdGFuY2VJZCk7XG5cbiAgICB2YXIgc2VsZWN0VmFsdWUgPSBjbGVhblZhbHVlKHZhbHVlKTtcbiAgICB2YXIgbWVudU9wdGlvbnMgPSBfdGhpcy5idWlsZE1lbnVPcHRpb25zKHByb3BzLCBzZWxlY3RWYWx1ZSk7XG5cbiAgICBfdGhpcy5zdGF0ZS5tZW51T3B0aW9ucyA9IG1lbnVPcHRpb25zO1xuICAgIF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlID0gc2VsZWN0VmFsdWU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9IC8vIFRPRE9cblxuXG4gIGNyZWF0ZUNsYXNzKFNlbGVjdCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zdGFydExpc3RlbmluZ0NvbXBvc2l0aW9uKCk7XG4gICAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nVG9Ub3VjaCgpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU1lbnVPblNjcm9sbCAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIC8vIExpc3RlbiB0byBhbGwgc2Nyb2xsIGV2ZW50cywgYW5kIGZpbHRlciB0aGVtIG91dCBpbnNpZGUgb2YgJ29uU2Nyb2xsJ1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b0ZvY3VzKSB7XG4gICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgb3B0aW9ucyA9IF9wcm9wcy5vcHRpb25zLFxuICAgICAgICAgIHZhbHVlID0gX3Byb3BzLnZhbHVlLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBfcHJvcHMuaW5wdXRWYWx1ZTtcbiAgICAgIC8vIHJlLWNhY2hlIGN1c3RvbSBjb21wb25lbnRzXG5cbiAgICAgIHRoaXMuY2FjaGVDb21wb25lbnRzKG5leHRQcm9wcy5jb21wb25lbnRzKTtcbiAgICAgIC8vIHJlYnVpbGQgdGhlIG1lbnUgb3B0aW9uc1xuICAgICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gdmFsdWUgfHwgbmV4dFByb3BzLm9wdGlvbnMgIT09IG9wdGlvbnMgfHwgbmV4dFByb3BzLmlucHV0VmFsdWUgIT09IGlucHV0VmFsdWUpIHtcbiAgICAgICAgdmFyIF9zZWxlY3RWYWx1ZSA9IGNsZWFuVmFsdWUobmV4dFByb3BzLnZhbHVlKTtcbiAgICAgICAgdmFyIF9tZW51T3B0aW9ucyA9IHRoaXMuYnVpbGRNZW51T3B0aW9ucyhuZXh0UHJvcHMsIF9zZWxlY3RWYWx1ZSk7XG4gICAgICAgIHZhciBfZm9jdXNlZFZhbHVlID0gdGhpcy5nZXROZXh0Rm9jdXNlZFZhbHVlKF9zZWxlY3RWYWx1ZSk7XG4gICAgICAgIHZhciBfZm9jdXNlZE9wdGlvbiA9IHRoaXMuZ2V0TmV4dEZvY3VzZWRPcHRpb24oX21lbnVPcHRpb25zLmZvY3VzYWJsZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51T3B0aW9uczogX21lbnVPcHRpb25zLCBzZWxlY3RWYWx1ZTogX3NlbGVjdFZhbHVlLCBmb2N1c2VkT3B0aW9uOiBfZm9jdXNlZE9wdGlvbiwgZm9jdXNlZFZhbHVlOiBfZm9jdXNlZFZhbHVlIH0pO1xuICAgICAgfVxuICAgICAgLy8gc29tZSB1cGRhdGVzIHNob3VsZCB0b2dnbGUgdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCB2aXNpYmlsaXR5XG4gICAgICBpZiAodGhpcy5pbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbnB1dElzSGlkZGVuOiB0aGlzLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZVxuICAgICAgICB9KTtcbiAgICAgICAgZGVsZXRlIHRoaXMuaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3Byb3BzMi5pc0Rpc2FibGVkLFxuICAgICAgICAgIG1lbnVJc09wZW4gPSBfcHJvcHMyLm1lbnVJc09wZW47XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG5cblxuICAgICAgaWYgKFxuICAgICAgLy8gZW5zdXJlIGZvY3VzIGlzIHJlc3RvcmVkIGNvcnJlY3RseSB3aGVuIHRoZSBjb250cm9sIGJlY29tZXMgZW5hYmxlZFxuICAgICAgaXNGb2N1c2VkICYmICFpc0Rpc2FibGVkICYmIHByZXZQcm9wcy5pc0Rpc2FibGVkIHx8XG4gICAgICAvLyBlbnN1cmUgZm9jdXMgaXMgb24gdGhlIElucHV0IHdoZW4gdGhlIG1lbnUgb3BlbnNcbiAgICAgIGlzRm9jdXNlZCAmJiBtZW51SXNPcGVuICYmICFwcmV2UHJvcHMubWVudUlzT3Blbikge1xuICAgICAgICB0aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2Nyb2xsIHRoZSBmb2N1c2VkIG9wdGlvbiBpbnRvIHZpZXcgaWYgbmVjZXNzYXJ5XG4gICAgICBpZiAodGhpcy5tZW51TGlzdFJlZiAmJiB0aGlzLmZvY3VzZWRPcHRpb25SZWYgJiYgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSkge1xuICAgICAgICBzY3JvbGxJbnRvVmlldyh0aGlzLm1lbnVMaXN0UmVmLCB0aGlzLmZvY3VzZWRPcHRpb25SZWYpO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmdDb21wb3NpdGlvbigpO1xuICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nVG9Ub3VjaCgpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25NZW51T3BlbicsXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBDb25zdW1lciBIYW5kbGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTWVudU9wZW4oKSB7XG4gICAgICB0aGlzLnByb3BzLm9uTWVudU9wZW4oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbk1lbnVDbG9zZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTWVudUNsb3NlKCkge1xuICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzU2VhcmNoYWJsZSA9IF9wcm9wczMuaXNTZWFyY2hhYmxlLFxuICAgICAgICAgIGlzTXVsdGkgPSBfcHJvcHMzLmlzTXVsdGk7XG5cbiAgICAgIHRoaXMuYW5ub3VuY2VBcmlhTGl2ZUNvbnRleHQoe1xuICAgICAgICBldmVudDogJ2lucHV0JyxcbiAgICAgICAgY29udGV4dDogeyBpc1NlYXJjaGFibGU6IGlzU2VhcmNoYWJsZSwgaXNNdWx0aTogaXNNdWx0aSB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMub25JbnB1dENoYW5nZSgnJywgeyBhY3Rpb246ICdtZW51LWNsb3NlJyB9KTtcbiAgICAgIHRoaXMucHJvcHMub25NZW51Q2xvc2UoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbklucHV0Q2hhbmdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25JbnB1dENoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKG5ld1ZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBNZXRob2RzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgfSwge1xuICAgIGtleTogJ2ZvY3VzSW5wdXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1c0lucHV0KCkge1xuICAgICAgaWYgKCF0aGlzLmlucHV0UmVmKSByZXR1cm47XG4gICAgICB0aGlzLmlucHV0UmVmLmZvY3VzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYmx1cklucHV0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cklucHV0KCkge1xuICAgICAgaWYgKCF0aGlzLmlucHV0UmVmKSByZXR1cm47XG4gICAgICB0aGlzLmlucHV0UmVmLmJsdXIoKTtcbiAgICB9XG5cbiAgICAvLyBhbGlhc2VkIGZvciBjb25zdW1lcnNcblxuICB9LCB7XG4gICAga2V5OiAnb3Blbk1lbnUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuTWVudShmb2N1c09wdGlvbikge1xuICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgbWVudU9wdGlvbnMgPSBfc3RhdGUubWVudU9wdGlvbnMsXG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBfc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICB2YXIgaXNNdWx0aSA9IHRoaXMucHJvcHMuaXNNdWx0aTtcblxuICAgICAgdmFyIG9wZW5BdEluZGV4ID0gZm9jdXNPcHRpb24gPT09ICdmaXJzdCcgPyAwIDogbWVudU9wdGlvbnMuZm9jdXNhYmxlLmxlbmd0aCAtIDE7XG5cbiAgICAgIGlmICghaXNNdWx0aSkge1xuICAgICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IG1lbnVPcHRpb25zLmZvY3VzYWJsZS5pbmRleE9mKHNlbGVjdFZhbHVlWzBdKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPiAtMSkge1xuICAgICAgICAgIG9wZW5BdEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNjcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMub25NZW51T3BlbigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRWYWx1ZTogbnVsbCxcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogbWVudU9wdGlvbnMuZm9jdXNhYmxlW29wZW5BdEluZGV4XVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYW5ub3VuY2VBcmlhTGl2ZUNvbnRleHQoeyBldmVudDogJ21lbnUnIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZvY3VzVmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1c1ZhbHVlKGRpcmVjdGlvbikge1xuICAgICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzTXVsdGkgPSBfcHJvcHM0LmlzTXVsdGksXG4gICAgICAgICAgaXNTZWFyY2hhYmxlID0gX3Byb3BzNC5pc1NlYXJjaGFibGU7XG4gICAgICB2YXIgX3N0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBfc3RhdGUyLnNlbGVjdFZhbHVlLFxuICAgICAgICAgIGZvY3VzZWRWYWx1ZSA9IF9zdGF0ZTIuZm9jdXNlZFZhbHVlO1xuXG4gICAgICAvLyBPbmx5IG11bHRpc2VsZWN0cyBzdXBwb3J0IHZhbHVlIGZvY3VzaW5nXG5cbiAgICAgIGlmICghaXNNdWx0aSkgcmV0dXJuO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogbnVsbFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBmb2N1c2VkSW5kZXggPSBzZWxlY3RWYWx1ZS5pbmRleE9mKGZvY3VzZWRWYWx1ZSk7XG4gICAgICBpZiAoIWZvY3VzZWRWYWx1ZSkge1xuICAgICAgICBmb2N1c2VkSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCh7IGV2ZW50OiAndmFsdWUnIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGFzdEluZGV4ID0gc2VsZWN0VmFsdWUubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBuZXh0Rm9jdXMgPSAtMTtcbiAgICAgIGlmICghc2VsZWN0VmFsdWUubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcbiAgICAgICAgICBpZiAoZm9jdXNlZEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAvLyBkb24ndCBjeWNsZSBmcm9tIHRoZSBzdGFydCB0byB0aGUgZW5kXG4gICAgICAgICAgICBuZXh0Rm9jdXMgPSAwO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZm9jdXNlZEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgLy8gaWYgbm90aGluZyBpcyBmb2N1c2VkLCBmb2N1cyB0aGUgbGFzdCB2YWx1ZSBmaXJzdFxuICAgICAgICAgICAgbmV4dEZvY3VzID0gbGFzdEluZGV4O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgaWYgKGZvY3VzZWRJbmRleCA+IC0xICYmIGZvY3VzZWRJbmRleCA8IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4ICsgMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0Rm9jdXMgPT09IC0xKSB7XG4gICAgICAgIHRoaXMuYW5ub3VuY2VBcmlhTGl2ZUNvbnRleHQoe1xuICAgICAgICAgIGV2ZW50OiAnaW5wdXQnLFxuICAgICAgICAgIGNvbnRleHQ6IHsgaXNTZWFyY2hhYmxlOiBpc1NlYXJjaGFibGUsIGlzTXVsdGk6IGlzTXVsdGkgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlucHV0SXNIaWRkZW46IG5leHRGb2N1cyA9PT0gLTEgPyBmYWxzZSA6IHRydWUsXG4gICAgICAgIGZvY3VzZWRWYWx1ZTogc2VsZWN0VmFsdWVbbmV4dEZvY3VzXVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZm9jdXNPcHRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1c09wdGlvbigpIHtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdmaXJzdCc7XG4gICAgICB2YXIgcGFnZVNpemUgPSB0aGlzLnByb3BzLnBhZ2VTaXplO1xuICAgICAgdmFyIF9zdGF0ZTMgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGZvY3VzZWRPcHRpb24gPSBfc3RhdGUzLmZvY3VzZWRPcHRpb24sXG4gICAgICAgICAgbWVudU9wdGlvbnMgPSBfc3RhdGUzLm1lbnVPcHRpb25zO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IG1lbnVPcHRpb25zLmZvY3VzYWJsZTtcblxuICAgICAgaWYgKCFvcHRpb25zLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgdmFyIG5leHRGb2N1cyA9IDA7IC8vIGhhbmRsZXMgJ2ZpcnN0J1xuICAgICAgdmFyIGZvY3VzZWRJbmRleCA9IG9wdGlvbnMuaW5kZXhPZihmb2N1c2VkT3B0aW9uKTtcbiAgICAgIGlmICghZm9jdXNlZE9wdGlvbikge1xuICAgICAgICBmb2N1c2VkSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCh7IGV2ZW50OiAnbWVudScgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4ID4gMCA/IGZvY3VzZWRJbmRleCAtIDEgOiBvcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICAgIG5leHRGb2N1cyA9IChmb2N1c2VkSW5kZXggKyAxKSAlIG9wdGlvbnMubGVuZ3RoO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdwYWdldXAnKSB7XG4gICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCAtIHBhZ2VTaXplO1xuICAgICAgICBpZiAobmV4dEZvY3VzIDwgMCkgbmV4dEZvY3VzID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncGFnZWRvd24nKSB7XG4gICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCArIHBhZ2VTaXplO1xuICAgICAgICBpZiAobmV4dEZvY3VzID4gb3B0aW9ucy5sZW5ndGggLSAxKSBuZXh0Rm9jdXMgPSBvcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2xhc3QnKSB7XG4gICAgICAgIG5leHRGb2N1cyA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSB0cnVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRPcHRpb246IG9wdGlvbnNbbmV4dEZvY3VzXSxcbiAgICAgICAgZm9jdXNlZFZhbHVlOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRUaGVtZScsXG5cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIEdldHRlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUaGVtZSgpIHtcbiAgICAgIC8vIFVzZSB0aGUgZGVmYXVsdCB0aGVtZSBpZiB0aGVyZSBhcmUgbm8gY3VzdG9taXphdGlvbnMuXG4gICAgICBpZiAoIXRoaXMucHJvcHMudGhlbWUpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRUaGVtZTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHRoZSB0aGVtZSBwcm9wIGlzIGEgZnVuY3Rpb24sIGFzc3VtZSB0aGUgZnVuY3Rpb25cbiAgICAgIC8vIGtub3dzIGhvdyB0byBtZXJnZSB0aGUgcGFzc2VkLWluIGRlZmF1bHQgdGhlbWUgd2l0aFxuICAgICAgLy8gaXRzIG93biBtb2RpZmljYXRpb25zLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnRoZW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnRoZW1lKGRlZmF1bHRUaGVtZSk7XG4gICAgICB9XG4gICAgICAvLyBPdGhlcndpc2UsIGlmIGEgcGxhaW4gdGhlbWUgb2JqZWN0IHdhcyBwYXNzZWQgaW4sXG4gICAgICAvLyBvdmVybGF5IGl0IHdpdGggdGhlIGRlZmF1bHQgdGhlbWUuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGRlZmF1bHRUaGVtZSwgdGhpcy5wcm9wcy50aGVtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q29tbW9uUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb21tb25Qcm9wcygpIHtcbiAgICAgIHZhciBjbGVhclZhbHVlID0gdGhpcy5jbGVhclZhbHVlLFxuICAgICAgICAgIGdldFN0eWxlcyA9IHRoaXMuZ2V0U3R5bGVzLFxuICAgICAgICAgIHNldFZhbHVlID0gdGhpcy5zZXRWYWx1ZSxcbiAgICAgICAgICBzZWxlY3RPcHRpb24gPSB0aGlzLnNlbGVjdE9wdGlvbixcbiAgICAgICAgICBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgY2xhc3NOYW1lUHJlZml4ID0gcHJvcHMuY2xhc3NOYW1lUHJlZml4LFxuICAgICAgICAgIGlzTXVsdGkgPSBwcm9wcy5pc011bHRpLFxuICAgICAgICAgIGlzUnRsID0gcHJvcHMuaXNSdGwsXG4gICAgICAgICAgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnM7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSB0aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuXG4gICAgICB2YXIgaGFzVmFsdWUgPSB0aGlzLmhhc1ZhbHVlKCk7XG4gICAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdFZhbHVlO1xuICAgICAgfTtcbiAgICAgIHZhciBjeFByZWZpeCA9IGNsYXNzTmFtZVByZWZpeDtcblxuICAgICAgdmFyIGN4ID0gY2xhc3NOYW1lcy5iaW5kKG51bGwsIGN4UHJlZml4KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN4OiBjeCxcbiAgICAgICAgY2xlYXJWYWx1ZTogY2xlYXJWYWx1ZSxcbiAgICAgICAgZ2V0U3R5bGVzOiBnZXRTdHlsZXMsXG4gICAgICAgIGdldFZhbHVlOiBnZXRWYWx1ZSxcbiAgICAgICAgaGFzVmFsdWU6IGhhc1ZhbHVlLFxuICAgICAgICBpc011bHRpOiBpc011bHRpLFxuICAgICAgICBpc1J0bDogaXNSdGwsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIHNlbGVjdE9wdGlvbjogc2VsZWN0T3B0aW9uLFxuICAgICAgICBzZXRWYWx1ZTogc2V0VmFsdWUsXG4gICAgICAgIHNlbGVjdFByb3BzOiBwcm9wcyxcbiAgICAgICAgdGhlbWU6IHRoaXMuZ2V0VGhlbWUoKVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXROZXh0Rm9jdXNlZFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TmV4dEZvY3VzZWRWYWx1ZShuZXh0U2VsZWN0VmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB2YXIgX3N0YXRlNCA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgZm9jdXNlZFZhbHVlID0gX3N0YXRlNC5mb2N1c2VkVmFsdWUsXG4gICAgICAgICAgbGFzdFNlbGVjdFZhbHVlID0gX3N0YXRlNC5zZWxlY3RWYWx1ZTtcblxuICAgICAgdmFyIGxhc3RGb2N1c2VkSW5kZXggPSBsYXN0U2VsZWN0VmFsdWUuaW5kZXhPZihmb2N1c2VkVmFsdWUpO1xuICAgICAgaWYgKGxhc3RGb2N1c2VkSW5kZXggPiAtMSkge1xuICAgICAgICB2YXIgbmV4dEZvY3VzZWRJbmRleCA9IG5leHRTZWxlY3RWYWx1ZS5pbmRleE9mKGZvY3VzZWRWYWx1ZSk7XG4gICAgICAgIGlmIChuZXh0Rm9jdXNlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAvLyB0aGUgZm9jdXNlZCB2YWx1ZSBpcyBzdGlsbCBpbiB0aGUgc2VsZWN0VmFsdWUsIHJldHVybiBpdFxuICAgICAgICAgIHJldHVybiBmb2N1c2VkVmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdEZvY3VzZWRJbmRleCA8IG5leHRTZWxlY3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAvLyB0aGUgZm9jdXNlZFZhbHVlIGlzIG5vdCBwcmVzZW50IGluIHRoZSBuZXh0IHNlbGVjdFZhbHVlIGFycmF5IGJ5XG4gICAgICAgICAgLy8gcmVmZXJlbmNlLCBzbyByZXR1cm4gdGhlIG5ldyB2YWx1ZSBhdCB0aGUgc2FtZSBpbmRleFxuICAgICAgICAgIHJldHVybiBuZXh0U2VsZWN0VmFsdWVbbGFzdEZvY3VzZWRJbmRleF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE5leHRGb2N1c2VkT3B0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TmV4dEZvY3VzZWRPcHRpb24ob3B0aW9ucykge1xuICAgICAgdmFyIGxhc3RGb2N1c2VkT3B0aW9uID0gdGhpcy5zdGF0ZS5mb2N1c2VkT3B0aW9uO1xuXG4gICAgICByZXR1cm4gbGFzdEZvY3VzZWRPcHRpb24gJiYgb3B0aW9ucy5pbmRleE9mKGxhc3RGb2N1c2VkT3B0aW9uKSA+IC0xID8gbGFzdEZvY3VzZWRPcHRpb24gOiBvcHRpb25zWzBdO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIEhlbHBlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB9LCB7XG4gICAga2V5OiAnaGFzVmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNWYWx1ZSgpIHtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG5cbiAgICAgIHJldHVybiBzZWxlY3RWYWx1ZS5sZW5ndGggPiAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhc09wdGlvbnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNPcHRpb25zKCkge1xuICAgICAgcmV0dXJuICEhdGhpcy5zdGF0ZS5tZW51T3B0aW9ucy5yZW5kZXIubGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvdW50T3B0aW9ucycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvdW50T3B0aW9ucygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLm1lbnVPcHRpb25zLmZvY3VzYWJsZS5sZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNDbGVhcmFibGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0NsZWFyYWJsZSgpIHtcbiAgICAgIHZhciBfcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc0NsZWFyYWJsZSA9IF9wcm9wczUuaXNDbGVhcmFibGUsXG4gICAgICAgICAgaXNNdWx0aSA9IF9wcm9wczUuaXNNdWx0aTtcblxuICAgICAgLy8gc2luZ2xlIHNlbGVjdCwgYnkgZGVmYXVsdCwgSVMgTk9UIGNsZWFyYWJsZVxuICAgICAgLy8gbXVsdGkgc2VsZWN0LCBieSBkZWZhdWx0LCBJUyBjbGVhcmFibGVcblxuICAgICAgaWYgKGlzQ2xlYXJhYmxlID09PSB1bmRlZmluZWQpIHJldHVybiBpc011bHRpO1xuXG4gICAgICByZXR1cm4gaXNDbGVhcmFibGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNPcHRpb25EaXNhYmxlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzT3B0aW9uRGlzYWJsZWQkJDEob3B0aW9uLCBzZWxlY3RWYWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLnByb3BzLmlzT3B0aW9uRGlzYWJsZWQgPT09ICdmdW5jdGlvbicgPyB0aGlzLnByb3BzLmlzT3B0aW9uRGlzYWJsZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSkgOiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc09wdGlvblNlbGVjdGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNPcHRpb25TZWxlY3RlZChvcHRpb24sIHNlbGVjdFZhbHVlKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKHNlbGVjdFZhbHVlLmluZGV4T2Yob3B0aW9uKSA+IC0xKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5pc09wdGlvblNlbGVjdGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSk7XG4gICAgICB9XG4gICAgICB2YXIgY2FuZGlkYXRlID0gdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuICAgICAgcmV0dXJuIHNlbGVjdFZhbHVlLnNvbWUoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5nZXRPcHRpb25WYWx1ZShpKSA9PT0gY2FuZGlkYXRlO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZmlsdGVyT3B0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmlsdGVyT3B0aW9uKG9wdGlvbiwgaW5wdXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZmlsdGVyT3B0aW9uID8gdGhpcy5wcm9wcy5maWx0ZXJPcHRpb24ob3B0aW9uLCBpbnB1dFZhbHVlKSA6IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZm9ybWF0T3B0aW9uTGFiZWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXRPcHRpb25MYWJlbChkYXRhLCBjb250ZXh0KSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuZm9ybWF0T3B0aW9uTGFiZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIF9pbnB1dFZhbHVlID0gdGhpcy5wcm9wcy5pbnB1dFZhbHVlO1xuICAgICAgICB2YXIgX3NlbGVjdFZhbHVlMiA9IHRoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZm9ybWF0T3B0aW9uTGFiZWwoZGF0YSwge1xuICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgaW5wdXRWYWx1ZTogX2lucHV0VmFsdWUsXG4gICAgICAgICAgc2VsZWN0VmFsdWU6IF9zZWxlY3RWYWx1ZTJcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPcHRpb25MYWJlbChkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmb3JtYXRHcm91cExhYmVsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0R3JvdXBMYWJlbCQkMShkYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5mb3JtYXRHcm91cExhYmVsKGRhdGEpO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIE1vdXNlIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgfSwge1xuICAgIGtleTogJ3N0YXJ0TGlzdGVuaW5nQ29tcG9zaXRpb24nLFxuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBDb21wb3NpdGlvbiBIYW5kbGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0TGlzdGVuaW5nQ29tcG9zaXRpb24oKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0JywgdGhpcy5vbkNvbXBvc2l0aW9uU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCB0aGlzLm9uQ29tcG9zaXRpb25FbmQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdG9wTGlzdGVuaW5nQ29tcG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nQ29tcG9zaXRpb24oKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0JywgdGhpcy5vbkNvbXBvc2l0aW9uU3RhcnQpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbmVuZCcsIHRoaXMub25Db21wb3NpdGlvbkVuZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RhcnRMaXN0ZW5pbmdUb1RvdWNoJyxcblxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gVG91Y2ggSGFuZGxlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydExpc3RlbmluZ1RvVG91Y2goKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0b3BMaXN0ZW5pbmdUb1RvdWNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZ1RvVG91Y2goKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIEZvY3VzIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBLZXlib2FyZCBIYW5kbGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIH0sIHtcbiAgICBrZXk6ICdidWlsZE1lbnVPcHRpb25zJyxcblxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gTWVudSBPcHRpb25zXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGRNZW51T3B0aW9ucyhwcm9wcywgc2VsZWN0VmFsdWUpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzJGlucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBfcHJvcHMkaW5wdXRWYWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcHJvcHMkaW5wdXRWYWx1ZSxcbiAgICAgICAgICBvcHRpb25zID0gcHJvcHMub3B0aW9ucztcblxuXG4gICAgICB2YXIgdG9PcHRpb24gPSBmdW5jdGlvbiB0b09wdGlvbihvcHRpb24sIGlkKSB7XG4gICAgICAgIHZhciBpc0Rpc2FibGVkID0gX3RoaXMzLmlzT3B0aW9uRGlzYWJsZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSk7XG4gICAgICAgIHZhciBpc1NlbGVjdGVkID0gX3RoaXMzLmlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSk7XG4gICAgICAgIHZhciBsYWJlbCA9IF90aGlzMy5nZXRPcHRpb25MYWJlbChvcHRpb24pO1xuICAgICAgICB2YXIgdmFsdWUgPSBfdGhpczMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKTtcblxuICAgICAgICBpZiAoX3RoaXMzLnNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMoKSAmJiBpc1NlbGVjdGVkIHx8ICFfdGhpczMuZmlsdGVyT3B0aW9uKHsgbGFiZWw6IGxhYmVsLCB2YWx1ZTogdmFsdWUsIGRhdGE6IG9wdGlvbiB9LCBpbnB1dFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvbkhvdmVyID0gaXNEaXNhYmxlZCA/IHVuZGVmaW5lZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLm9uT3B0aW9uSG92ZXIob3B0aW9uKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uU2VsZWN0ID0gaXNEaXNhYmxlZCA/IHVuZGVmaW5lZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLnNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3B0aW9uSWQgPSBfdGhpczMuZ2V0RWxlbWVudElkKCdvcHRpb24nKSArICctJyArIGlkO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaW5uZXJQcm9wczoge1xuICAgICAgICAgICAgaWQ6IG9wdGlvbklkLFxuICAgICAgICAgICAgb25DbGljazogb25TZWxlY3QsXG4gICAgICAgICAgICBvbk1vdXNlTW92ZTogb25Ib3ZlcixcbiAgICAgICAgICAgIG9uTW91c2VPdmVyOiBvbkhvdmVyLFxuICAgICAgICAgICAgcm9sZTogJ29wdGlvbicsXG4gICAgICAgICAgICB0YWJJbmRleDogLTFcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGE6IG9wdGlvbixcbiAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQsXG4gICAgICAgICAga2V5OiBvcHRpb25JZCxcbiAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgdHlwZTogJ29wdGlvbicsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gb3B0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgaXRlbSwgaXRlbUluZGV4KSB7XG4gICAgICAgIGlmIChpdGVtLm9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBUT0RPIG5lZWRzIGEgdGlkaWVyIGltcGxlbWVudGF0aW9uXG4gICAgICAgICAgaWYgKCFfdGhpczMuaGFzR3JvdXBzKSBfdGhpczMuaGFzR3JvdXBzID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBpdGVtcyA9IGl0ZW0ub3B0aW9ucztcblxuICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGl0ZW1zLm1hcChmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb24gPSB0b09wdGlvbihjaGlsZCwgaXRlbUluZGV4ICsgJy0nICsgaSk7XG4gICAgICAgICAgICBpZiAob3B0aW9uICYmICFvcHRpb24uaXNEaXNhYmxlZCkgYWNjLmZvY3VzYWJsZS5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgICAgfSkuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBncm91cElkID0gX3RoaXMzLmdldEVsZW1lbnRJZCgnZ3JvdXAnKSArICctJyArIGl0ZW1JbmRleDtcbiAgICAgICAgICAgIGFjYy5yZW5kZXIucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdncm91cCcsXG4gICAgICAgICAgICAgIGtleTogZ3JvdXBJZCxcbiAgICAgICAgICAgICAgZGF0YTogaXRlbSxcbiAgICAgICAgICAgICAgb3B0aW9uczogY2hpbGRyZW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgb3B0aW9uID0gdG9PcHRpb24oaXRlbSwgJycgKyBpdGVtSW5kZXgpO1xuICAgICAgICAgIGlmIChvcHRpb24pIHtcbiAgICAgICAgICAgIGFjYy5yZW5kZXIucHVzaChvcHRpb24pO1xuICAgICAgICAgICAgaWYgKCFvcHRpb24uaXNEaXNhYmxlZCkgYWNjLmZvY3VzYWJsZS5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwgeyByZW5kZXI6IFtdLCBmb2N1c2FibGU6IFtdIH0pO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIFJlbmRlcmVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIH0sIHtcbiAgICBrZXk6ICdjb25zdHJ1Y3RBcmlhTGl2ZU1lc3NhZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25zdHJ1Y3RBcmlhTGl2ZU1lc3NhZ2UoKSB7XG4gICAgICB2YXIgX3N0YXRlNSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgYXJpYUxpdmVDb250ZXh0ID0gX3N0YXRlNS5hcmlhTGl2ZUNvbnRleHQsXG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBfc3RhdGU1LnNlbGVjdFZhbHVlLFxuICAgICAgICAgIGZvY3VzZWRWYWx1ZSA9IF9zdGF0ZTUuZm9jdXNlZFZhbHVlLFxuICAgICAgICAgIGZvY3VzZWRPcHRpb24gPSBfc3RhdGU1LmZvY3VzZWRPcHRpb247XG4gICAgICB2YXIgX3Byb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgb3B0aW9ucyA9IF9wcm9wczYub3B0aW9ucyxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3Byb3BzNi5tZW51SXNPcGVuLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBfcHJvcHM2LmlucHV0VmFsdWUsXG4gICAgICAgICAgc2NyZWVuUmVhZGVyU3RhdHVzID0gX3Byb3BzNi5zY3JlZW5SZWFkZXJTdGF0dXM7XG5cbiAgICAgIC8vIEFuIGFyaWEgbGl2ZSBtZXNzYWdlIHJlcHJlc2VudGluZyB0aGUgY3VycmVudGx5IGZvY3VzZWQgdmFsdWUgaW4gdGhlIHNlbGVjdC5cblxuICAgICAgdmFyIGZvY3VzZWRWYWx1ZU1zZyA9IGZvY3VzZWRWYWx1ZSA/IHZhbHVlRm9jdXNBcmlhTWVzc2FnZSh7XG4gICAgICAgIGZvY3VzZWRWYWx1ZTogZm9jdXNlZFZhbHVlLFxuICAgICAgICBnZXRPcHRpb25MYWJlbDogdGhpcy5nZXRPcHRpb25MYWJlbCxcbiAgICAgICAgc2VsZWN0VmFsdWU6IHNlbGVjdFZhbHVlXG4gICAgICB9KSA6ICcnO1xuICAgICAgLy8gQW4gYXJpYSBsaXZlIG1lc3NhZ2UgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBvcHRpb24gaW4gdGhlIHNlbGVjdC5cbiAgICAgIHZhciBmb2N1c2VkT3B0aW9uTXNnID0gZm9jdXNlZE9wdGlvbiAmJiBtZW51SXNPcGVuID8gb3B0aW9uRm9jdXNBcmlhTWVzc2FnZSh7XG4gICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24sXG4gICAgICAgIGdldE9wdGlvbkxhYmVsOiB0aGlzLmdldE9wdGlvbkxhYmVsLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICB9KSA6ICcnO1xuICAgICAgLy8gQW4gYXJpYSBsaXZlIG1lc3NhZ2UgcmVwcmVzZW50aW5nIHRoZSBzZXQgb2YgZm9jdXNhYmxlIHJlc3VsdHMgYW5kIGN1cnJlbnQgc2VhcmNodGVybS9pbnB1dHZhbHVlLlxuICAgICAgdmFyIHJlc3VsdHNNc2cgPSByZXN1bHRzQXJpYU1lc3NhZ2Uoe1xuICAgICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgICBzY3JlZW5SZWFkZXJNZXNzYWdlOiBzY3JlZW5SZWFkZXJTdGF0dXMoeyBjb3VudDogdGhpcy5jb3VudE9wdGlvbnMoKSB9KVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBmb2N1c2VkVmFsdWVNc2cgKyAnICcgKyBmb2N1c2VkT3B0aW9uTXNnICsgJyAnICsgcmVzdWx0c01zZyArICcgJyArIGFyaWFMaXZlQ29udGV4dDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJJbnB1dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcklucHV0KCkge1xuICAgICAgdmFyIF9wcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfcHJvcHM3LmlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNTZWFyY2hhYmxlID0gX3Byb3BzNy5pc1NlYXJjaGFibGUsXG4gICAgICAgICAgaW5wdXRJZCA9IF9wcm9wczcuaW5wdXRJZCxcbiAgICAgICAgICBpbnB1dFZhbHVlID0gX3Byb3BzNy5pbnB1dFZhbHVlLFxuICAgICAgICAgIHRhYkluZGV4ID0gX3Byb3BzNy50YWJJbmRleDtcbiAgICAgIHZhciBJbnB1dCA9IHRoaXMuY29tcG9uZW50cy5JbnB1dDtcbiAgICAgIHZhciBpbnB1dElzSGlkZGVuID0gdGhpcy5zdGF0ZS5pbnB1dElzSGlkZGVuO1xuXG5cbiAgICAgIHZhciBpZCA9IGlucHV0SWQgfHwgdGhpcy5nZXRFbGVtZW50SWQoJ2lucHV0Jyk7XG5cbiAgICAgIGlmICghaXNTZWFyY2hhYmxlKSB7XG4gICAgICAgIC8vIHVzZSBhIGR1bW15IGlucHV0IHRvIG1haW50YWluIGZvY3VzL2JsdXIgZnVuY3Rpb25hbGl0eVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChEdW1teUlucHV0LCB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGlubmVyUmVmOiB0aGlzLmdldElucHV0UmVmLFxuICAgICAgICAgIG9uQmx1cjogdGhpcy5vbklucHV0Qmx1cixcbiAgICAgICAgICBvbkNoYW5nZTogbm9vcCxcbiAgICAgICAgICBvbkZvY3VzOiB0aGlzLm9uSW5wdXRGb2N1cyxcbiAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICBkaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBhcmlhIGF0dHJpYnV0ZXMgbWFrZXMgdGhlIEpTWCBcIm5vaXN5XCIsIHNlcGFyYXRlZCBmb3IgY2xhcml0eVxuICAgICAgdmFyIGFyaWFBdHRyaWJ1dGVzID0ge1xuICAgICAgICAnYXJpYS1hdXRvY29tcGxldGUnOiAnbGlzdCcsXG4gICAgICAgICdhcmlhLWxhYmVsJzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbGxlZGJ5J11cbiAgICAgIH07XG5cbiAgICAgIHZhciBfY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzLFxuICAgICAgICAgIGN4ID0gX2NvbW1vblByb3BzLmN4LFxuICAgICAgICAgIHRoZW1lID0gX2NvbW1vblByb3BzLnRoZW1lLFxuICAgICAgICAgIHNlbGVjdFByb3BzID0gX2NvbW1vblByb3BzLnNlbGVjdFByb3BzO1xuXG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBfZXh0ZW5kcyh7XG4gICAgICAgIGF1dG9DYXBpdGFsaXplOiAnbm9uZScsXG4gICAgICAgIGF1dG9Db21wbGV0ZTogJ29mZicsXG4gICAgICAgIGF1dG9Db3JyZWN0OiAnb2ZmJyxcbiAgICAgICAgY3g6IGN4LFxuICAgICAgICBnZXRTdHlsZXM6IHRoaXMuZ2V0U3R5bGVzLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGlubmVyUmVmOiB0aGlzLmdldElucHV0UmVmLFxuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICBpc0hpZGRlbjogaW5wdXRJc0hpZGRlbixcbiAgICAgICAgb25CbHVyOiB0aGlzLm9uSW5wdXRCbHVyLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVJbnB1dENoYW5nZSxcbiAgICAgICAgb25Gb2N1czogdGhpcy5vbklucHV0Rm9jdXMsXG4gICAgICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wcyxcbiAgICAgICAgc3BlbGxDaGVjazogJ2ZhbHNlJyxcbiAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgdmFsdWU6IGlucHV0VmFsdWVcbiAgICAgIH0sIGFyaWFBdHRyaWJ1dGVzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBfY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cyxcbiAgICAgICAgICBNdWx0aVZhbHVlID0gX2NvbXBvbmVudHMuTXVsdGlWYWx1ZSxcbiAgICAgICAgICBNdWx0aVZhbHVlQ29udGFpbmVyID0gX2NvbXBvbmVudHMuTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgICAgICAgICBNdWx0aVZhbHVlTGFiZWwgPSBfY29tcG9uZW50cy5NdWx0aVZhbHVlTGFiZWwsXG4gICAgICAgICAgTXVsdGlWYWx1ZVJlbW92ZSA9IF9jb21wb25lbnRzLk11bHRpVmFsdWVSZW1vdmUsXG4gICAgICAgICAgU2luZ2xlVmFsdWUgPSBfY29tcG9uZW50cy5TaW5nbGVWYWx1ZSxcbiAgICAgICAgICBQbGFjZWhvbGRlciA9IF9jb21wb25lbnRzLlBsYWNlaG9sZGVyO1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBfcHJvcHM4ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUgPSBfcHJvcHM4LmNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3Byb3BzOC5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlzTXVsdGkgPSBfcHJvcHM4LmlzTXVsdGksXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF9wcm9wczguaW5wdXRWYWx1ZSxcbiAgICAgICAgICBwbGFjZWhvbGRlciA9IF9wcm9wczgucGxhY2Vob2xkZXI7XG4gICAgICB2YXIgX3N0YXRlNiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBfc3RhdGU2LnNlbGVjdFZhbHVlLFxuICAgICAgICAgIGZvY3VzZWRWYWx1ZSA9IF9zdGF0ZTYuZm9jdXNlZFZhbHVlLFxuICAgICAgICAgIGlzRm9jdXNlZCA9IF9zdGF0ZTYuaXNGb2N1c2VkO1xuXG5cbiAgICAgIGlmICghdGhpcy5oYXNWYWx1ZSgpIHx8ICFjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWUgPyBudWxsIDogUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBQbGFjZWhvbGRlcixcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgICAgIGtleTogJ3BsYWNlaG9sZGVyJyxcbiAgICAgICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHBsYWNlaG9sZGVyXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc011bHRpKSB7XG4gICAgICAgIHZhciBzZWxlY3RWYWx1ZXMgPSBzZWxlY3RWYWx1ZS5tYXAoZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICAgIHZhciBpc0ZvY3VzZWQgPSBvcHQgPT09IGZvY3VzZWRWYWx1ZTtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIE11bHRpVmFsdWUsXG4gICAgICAgICAgICBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgIENvbnRhaW5lcjogTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBMYWJlbDogTXVsdGlWYWx1ZUxhYmVsLFxuICAgICAgICAgICAgICAgIFJlbW92ZTogTXVsdGlWYWx1ZVJlbW92ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZCxcbiAgICAgICAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICAgICAga2V5OiBfdGhpczQuZ2V0T3B0aW9uVmFsdWUob3B0KSxcbiAgICAgICAgICAgICAgcmVtb3ZlUHJvcHM6IHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5yZW1vdmVWYWx1ZShvcHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Ub3VjaEVuZDogZnVuY3Rpb24gb25Ub3VjaEVuZCgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQucmVtb3ZlVmFsdWUob3B0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGF0YTogb3B0XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF90aGlzNC5mb3JtYXRPcHRpb25MYWJlbChvcHQsICd2YWx1ZScpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzZWxlY3RWYWx1ZXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbnB1dFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2luZ2xlVmFsdWUgPSBzZWxlY3RWYWx1ZVswXTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBTaW5nbGVWYWx1ZSxcbiAgICAgICAgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7IGRhdGE6IHNpbmdsZVZhbHVlLCBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkIH0pLFxuICAgICAgICB0aGlzLmZvcm1hdE9wdGlvbkxhYmVsKHNpbmdsZVZhbHVlLCAndmFsdWUnKVxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJDbGVhckluZGljYXRvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNsZWFySW5kaWNhdG9yKCkge1xuICAgICAgdmFyIENsZWFySW5kaWNhdG9yID0gdGhpcy5jb21wb25lbnRzLkNsZWFySW5kaWNhdG9yO1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBfcHJvcHM5ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3Byb3BzOS5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlzTG9hZGluZyA9IF9wcm9wczkuaXNMb2FkaW5nO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuXG5cbiAgICAgIGlmICghdGhpcy5pc0NsZWFyYWJsZSgpIHx8ICFDbGVhckluZGljYXRvciB8fCBpc0Rpc2FibGVkIHx8ICF0aGlzLmhhc1ZhbHVlKCkgfHwgaXNMb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25DbGVhckluZGljYXRvck1vdXNlRG93bixcbiAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5vbkNsZWFySW5kaWNhdG9yVG91Y2hFbmQsXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2xlYXJJbmRpY2F0b3IsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpbm5lclByb3BzOiBpbm5lclByb3BzLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckxvYWRpbmdJbmRpY2F0b3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMb2FkaW5nSW5kaWNhdG9yKCkge1xuICAgICAgdmFyIExvYWRpbmdJbmRpY2F0b3IgPSB0aGlzLmNvbXBvbmVudHMuTG9hZGluZ0luZGljYXRvcjtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgX3Byb3BzMTAgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfcHJvcHMxMC5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlzTG9hZGluZyA9IF9wcm9wczEwLmlzTG9hZGluZztcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcblxuXG4gICAgICBpZiAoIUxvYWRpbmdJbmRpY2F0b3IgfHwgIWlzTG9hZGluZykgcmV0dXJuIG51bGw7XG5cbiAgICAgIHZhciBpbm5lclByb3BzID0geyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmdJbmRpY2F0b3IsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpbm5lclByb3BzOiBpbm5lclByb3BzLFxuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckluZGljYXRvclNlcGFyYXRvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckluZGljYXRvclNlcGFyYXRvcigpIHtcbiAgICAgIHZhciBfY29tcG9uZW50czIgPSB0aGlzLmNvbXBvbmVudHMsXG4gICAgICAgICAgRHJvcGRvd25JbmRpY2F0b3IgPSBfY29tcG9uZW50czIuRHJvcGRvd25JbmRpY2F0b3IsXG4gICAgICAgICAgSW5kaWNhdG9yU2VwYXJhdG9yID0gX2NvbXBvbmVudHMyLkluZGljYXRvclNlcGFyYXRvcjtcblxuICAgICAgLy8gc2VwYXJhdG9yIGRvZXNuJ3QgbWFrZSBzZW5zZSB3aXRob3V0IHRoZSBkcm9wZG93biBpbmRpY2F0b3JcblxuICAgICAgaWYgKCFEcm9wZG93bkluZGljYXRvciB8fCAhSW5kaWNhdG9yU2VwYXJhdG9yKSByZXR1cm4gbnVsbDtcblxuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBpc0Rpc2FibGVkID0gdGhpcy5wcm9wcy5pc0Rpc2FibGVkO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuXG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEluZGljYXRvclNlcGFyYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyRHJvcGRvd25JbmRpY2F0b3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJEcm9wZG93bkluZGljYXRvcigpIHtcbiAgICAgIHZhciBEcm9wZG93bkluZGljYXRvciA9IHRoaXMuY29tcG9uZW50cy5Ecm9wZG93bkluZGljYXRvcjtcblxuICAgICAgaWYgKCFEcm9wZG93bkluZGljYXRvcikgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIGlzRGlzYWJsZWQgPSB0aGlzLnByb3BzLmlzRGlzYWJsZWQ7XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG5cblxuICAgICAgdmFyIGlubmVyUHJvcHMgPSB7XG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uRHJvcGRvd25JbmRpY2F0b3JNb3VzZURvd24sXG4gICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMub25Ecm9wZG93bkluZGljYXRvclRvdWNoRW5kLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bkb3duSW5kaWNhdG9yLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaW5uZXJQcm9wczogaW5uZXJQcm9wcyxcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJNZW51JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB2YXIgX2NvbXBvbmVudHMzID0gdGhpcy5jb21wb25lbnRzLFxuICAgICAgICAgIEdyb3VwID0gX2NvbXBvbmVudHMzLkdyb3VwLFxuICAgICAgICAgIEdyb3VwSGVhZGluZyA9IF9jb21wb25lbnRzMy5Hcm91cEhlYWRpbmcsXG4gICAgICAgICAgTWVudSQkMSA9IF9jb21wb25lbnRzMy5NZW51LFxuICAgICAgICAgIE1lbnVMaXN0JCQxID0gX2NvbXBvbmVudHMzLk1lbnVMaXN0LFxuICAgICAgICAgIE1lbnVQb3J0YWwkJDEgPSBfY29tcG9uZW50czMuTWVudVBvcnRhbCxcbiAgICAgICAgICBMb2FkaW5nTWVzc2FnZSQkMSA9IF9jb21wb25lbnRzMy5Mb2FkaW5nTWVzc2FnZSxcbiAgICAgICAgICBOb09wdGlvbnNNZXNzYWdlJCQxID0gX2NvbXBvbmVudHMzLk5vT3B0aW9uc01lc3NhZ2UsXG4gICAgICAgICAgT3B0aW9uID0gX2NvbXBvbmVudHMzLk9wdGlvbjtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgX3N0YXRlNyA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbiA9IF9zdGF0ZTcuZm9jdXNlZE9wdGlvbixcbiAgICAgICAgICBtZW51T3B0aW9ucyA9IF9zdGF0ZTcubWVudU9wdGlvbnM7XG4gICAgICB2YXIgX3Byb3BzMTEgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNhcHR1cmVNZW51U2Nyb2xsID0gX3Byb3BzMTEuY2FwdHVyZU1lbnVTY3JvbGwsXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF9wcm9wczExLmlucHV0VmFsdWUsXG4gICAgICAgICAgaXNMb2FkaW5nID0gX3Byb3BzMTEuaXNMb2FkaW5nLFxuICAgICAgICAgIGxvYWRpbmdNZXNzYWdlID0gX3Byb3BzMTEubG9hZGluZ01lc3NhZ2UsXG4gICAgICAgICAgbWluTWVudUhlaWdodCA9IF9wcm9wczExLm1pbk1lbnVIZWlnaHQsXG4gICAgICAgICAgbWF4TWVudUhlaWdodCA9IF9wcm9wczExLm1heE1lbnVIZWlnaHQsXG4gICAgICAgICAgbWVudUlzT3BlbiA9IF9wcm9wczExLm1lbnVJc09wZW4sXG4gICAgICAgICAgbWVudVBsYWNlbWVudCA9IF9wcm9wczExLm1lbnVQbGFjZW1lbnQsXG4gICAgICAgICAgbWVudVBvc2l0aW9uID0gX3Byb3BzMTEubWVudVBvc2l0aW9uLFxuICAgICAgICAgIG1lbnVQb3J0YWxUYXJnZXQgPSBfcHJvcHMxMS5tZW51UG9ydGFsVGFyZ2V0LFxuICAgICAgICAgIG1lbnVTaG91bGRCbG9ja1Njcm9sbCA9IF9wcm9wczExLm1lbnVTaG91bGRCbG9ja1Njcm9sbCxcbiAgICAgICAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgPSBfcHJvcHMxMS5tZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcsXG4gICAgICAgICAgbm9PcHRpb25zTWVzc2FnZSA9IF9wcm9wczExLm5vT3B0aW9uc01lc3NhZ2UsXG4gICAgICAgICAgb25NZW51U2Nyb2xsVG9Ub3AgPSBfcHJvcHMxMS5vbk1lbnVTY3JvbGxUb1RvcCxcbiAgICAgICAgICBvbk1lbnVTY3JvbGxUb0JvdHRvbSA9IF9wcm9wczExLm9uTWVudVNjcm9sbFRvQm90dG9tO1xuXG5cbiAgICAgIGlmICghbWVudUlzT3BlbikgcmV0dXJuIG51bGw7XG5cbiAgICAgIC8vIFRPRE86IEludGVybmFsIE9wdGlvbiBUeXBlIGhlcmVcbiAgICAgIHZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocHJvcHMpIHtcbiAgICAgICAgLy8gZm9yIHBlcmZvcm1hbmNlLCB0aGUgbWVudSBvcHRpb25zIGluIHN0YXRlIGFyZW4ndCBjaGFuZ2VkIHdoZW4gdGhlXG4gICAgICAgIC8vIGZvY3VzZWQgb3B0aW9uIGNoYW5nZXMgc28gd2UgY2FsY3VsYXRlIGFkZGl0aW9uYWwgcHJvcHMgYmFzZWQgb24gdGhhdFxuICAgICAgICB2YXIgaXNGb2N1c2VkID0gZm9jdXNlZE9wdGlvbiA9PT0gcHJvcHMuZGF0YTtcbiAgICAgICAgcHJvcHMuaW5uZXJSZWYgPSBpc0ZvY3VzZWQgPyBfdGhpczUuZ2V0Rm9jdXNlZE9wdGlvblJlZiA6IHVuZGVmaW5lZDtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBPcHRpb24sXG4gICAgICAgICAgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCBwcm9wcywgeyBpc0ZvY3VzZWQ6IGlzRm9jdXNlZCB9KSxcbiAgICAgICAgICBfdGhpczUuZm9ybWF0T3B0aW9uTGFiZWwocHJvcHMuZGF0YSwgJ21lbnUnKVxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgdmFyIG1lbnVVSSA9IHZvaWQgMDtcblxuICAgICAgaWYgKHRoaXMuaGFzT3B0aW9ucygpKSB7XG4gICAgICAgIG1lbnVVSSA9IG1lbnVPcHRpb25zLnJlbmRlci5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGl0ZW0udHlwZSxcbiAgICAgICAgICAgICAgICBncm91cCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGl0ZW0sIFsndHlwZSddKTtcblxuICAgICAgICAgICAgdmFyIGhlYWRpbmdJZCA9IGl0ZW0ua2V5ICsgJy1oZWFkaW5nJztcblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIEdyb3VwLFxuICAgICAgICAgICAgICBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIGdyb3VwLCB7XG4gICAgICAgICAgICAgICAgSGVhZGluZzogR3JvdXBIZWFkaW5nLFxuICAgICAgICAgICAgICAgIGhlYWRpbmdQcm9wczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IGhlYWRpbmdJZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGFiZWw6IF90aGlzNS5mb3JtYXRHcm91cExhYmVsKGl0ZW0uZGF0YSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGl0ZW0ub3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXIob3B0aW9uKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdvcHRpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGlzTG9hZGluZykge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IGxvYWRpbmdNZXNzYWdlKHsgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSB9KTtcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgICAgICBtZW51VUkgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIExvYWRpbmdNZXNzYWdlJCQxLFxuICAgICAgICAgIGNvbW1vblByb3BzLFxuICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfbWVzc2FnZSA9IG5vT3B0aW9uc01lc3NhZ2UoeyBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlIH0pO1xuICAgICAgICBpZiAoX21lc3NhZ2UgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgICAgICBtZW51VUkgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIE5vT3B0aW9uc01lc3NhZ2UkJDEsXG4gICAgICAgICAgY29tbW9uUHJvcHMsXG4gICAgICAgICAgX21lc3NhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZhciBtZW51UGxhY2VtZW50UHJvcHMgPSB7XG4gICAgICAgIG1pbk1lbnVIZWlnaHQ6IG1pbk1lbnVIZWlnaHQsXG4gICAgICAgIG1heE1lbnVIZWlnaHQ6IG1heE1lbnVIZWlnaHQsXG4gICAgICAgIG1lbnVQbGFjZW1lbnQ6IG1lbnVQbGFjZW1lbnQsXG4gICAgICAgIG1lbnVQb3NpdGlvbjogbWVudVBvc2l0aW9uLFxuICAgICAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXc6IG1lbnVTaG91bGRTY3JvbGxJbnRvVmlld1xuICAgICAgfTtcblxuICAgICAgdmFyIG1lbnVFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTWVudVBsYWNlcixcbiAgICAgICAgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCBtZW51UGxhY2VtZW50UHJvcHMpLFxuICAgICAgICBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICB2YXIgcmVmID0gX3JlZjIucmVmLFxuICAgICAgICAgICAgICBfcmVmMiRwbGFjZXJQcm9wcyA9IF9yZWYyLnBsYWNlclByb3BzLFxuICAgICAgICAgICAgICBwbGFjZW1lbnQgPSBfcmVmMiRwbGFjZXJQcm9wcy5wbGFjZW1lbnQsXG4gICAgICAgICAgICAgIG1heEhlaWdodCA9IF9yZWYyJHBsYWNlclByb3BzLm1heEhlaWdodDtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIE1lbnUkJDEsXG4gICAgICAgICAgICBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIG1lbnVQbGFjZW1lbnRQcm9wcywge1xuICAgICAgICAgICAgICBpbm5lclJlZjogcmVmLFxuICAgICAgICAgICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd246IF90aGlzNS5vbk1lbnVNb3VzZURvd24sXG4gICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU6IF90aGlzNS5vbk1lbnVNb3VzZU1vdmVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgaXNMb2FkaW5nOiBpc0xvYWRpbmcsXG4gICAgICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIFNjcm9sbENhcHRvclN3aXRjaCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogY2FwdHVyZU1lbnVTY3JvbGwsXG4gICAgICAgICAgICAgICAgb25Ub3BBcnJpdmU6IG9uTWVudVNjcm9sbFRvVG9wLFxuICAgICAgICAgICAgICAgIG9uQm90dG9tQXJyaXZlOiBvbk1lbnVTY3JvbGxUb0JvdHRvbVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFNjcm9sbEJsb2NrLFxuICAgICAgICAgICAgICAgIHsgaXNFbmFibGVkOiBtZW51U2hvdWxkQmxvY2tTY3JvbGwgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgTWVudUxpc3QkJDEsXG4gICAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJSZWY6IF90aGlzNS5nZXRNZW51TGlzdFJlZixcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBpc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIG1lbnVVSVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIC8vIHBvc2l0aW9uaW5nIGJlaGF2aW91ciBpcyBhbG1vc3QgaWRlbnRpY2FsIGZvciBwb3J0YWxsZWQgYW5kIGZpeGVkLFxuICAgICAgLy8gc28gd2UgdXNlIHRoZSBzYW1lIGNvbXBvbmVudC4gdGhlIGFjdHVhbCBwb3J0YWxsaW5nIGxvZ2ljIGlzIGZvcmtlZFxuICAgICAgLy8gd2l0aGluIHRoZSBjb21wb25lbnQgYmFzZWQgb24gYG1lbnVQb3NpdGlvbmBcbiAgICAgIHJldHVybiBtZW51UG9ydGFsVGFyZ2V0IHx8IG1lbnVQb3NpdGlvbiA9PT0gJ2ZpeGVkJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIE1lbnVQb3J0YWwkJDEsXG4gICAgICAgIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICAgIGFwcGVuZFRvOiBtZW51UG9ydGFsVGFyZ2V0LFxuICAgICAgICAgIGNvbnRyb2xFbGVtZW50OiB0aGlzLmNvbnRyb2xSZWYsXG4gICAgICAgICAgbWVudVBsYWNlbWVudDogbWVudVBsYWNlbWVudCxcbiAgICAgICAgICBtZW51UG9zaXRpb246IG1lbnVQb3NpdGlvblxuICAgICAgICB9KSxcbiAgICAgICAgbWVudUVsZW1lbnRcbiAgICAgICkgOiBtZW51RWxlbWVudDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJGb3JtRmllbGQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJGb3JtRmllbGQoKSB7XG4gICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wczEyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBkZWxpbWl0ZXIgPSBfcHJvcHMxMi5kZWxpbWl0ZXIsXG4gICAgICAgICAgaXNEaXNhYmxlZCA9IF9wcm9wczEyLmlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNNdWx0aSA9IF9wcm9wczEyLmlzTXVsdGksXG4gICAgICAgICAgbmFtZSA9IF9wcm9wczEyLm5hbWU7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSB0aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuXG5cbiAgICAgIGlmICghbmFtZSB8fCBpc0Rpc2FibGVkKSByZXR1cm47XG5cbiAgICAgIGlmIChpc011bHRpKSB7XG4gICAgICAgIGlmIChkZWxpbWl0ZXIpIHtcbiAgICAgICAgICB2YXIgX3ZhbHVlID0gc2VsZWN0VmFsdWUubWFwKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczYuZ2V0T3B0aW9uVmFsdWUob3B0KTtcbiAgICAgICAgICB9KS5qb2luKGRlbGltaXRlcik7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyBuYW1lOiBuYW1lLCB0eXBlOiAnaGlkZGVuJywgdmFsdWU6IF92YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW5wdXQgPSBzZWxlY3RWYWx1ZS5sZW5ndGggPiAwID8gc2VsZWN0VmFsdWUubWFwKGZ1bmN0aW9uIChvcHQsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAga2V5OiAnaS0nICsgaSxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdGhpczYuZ2V0T3B0aW9uVmFsdWUob3B0KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgbmFtZTogbmFtZSwgdHlwZTogJ2hpZGRlbicgfSk7XG5cbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIGlucHV0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF92YWx1ZTIgPSBzZWxlY3RWYWx1ZVswXSA/IHRoaXMuZ2V0T3B0aW9uVmFsdWUoc2VsZWN0VmFsdWVbMF0pIDogJyc7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgbmFtZTogbmFtZSwgdHlwZTogJ2hpZGRlbicsIHZhbHVlOiBfdmFsdWUyIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckxpdmVSZWdpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMaXZlUmVnaW9uKCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzRm9jdXNlZCkgcmV0dXJuIG51bGw7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgQTExeVRleHQsXG4gICAgICAgIHsgJ2FyaWEtbGl2ZSc6ICdhc3NlcnRpdmUnIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3AnLFxuICAgICAgICAgIHsgaWQ6ICdhcmlhLXNlbGVjdGlvbi1ldmVudCcgfSxcbiAgICAgICAgICAnXFx4QTAnLFxuICAgICAgICAgIHRoaXMuc3RhdGUuYXJpYUxpdmVTZWxlY3Rpb25cbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAncCcsXG4gICAgICAgICAgeyBpZDogJ2FyaWEtY29udGV4dCcgfSxcbiAgICAgICAgICAnXFx4QTAnLFxuICAgICAgICAgIHRoaXMuY29uc3RydWN0QXJpYUxpdmVNZXNzYWdlKClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX2NvbXBvbmVudHM0ID0gdGhpcy5jb21wb25lbnRzLFxuICAgICAgICAgIENvbnRyb2wgPSBfY29tcG9uZW50czQuQ29udHJvbCxcbiAgICAgICAgICBJbmRpY2F0b3JzQ29udGFpbmVyID0gX2NvbXBvbmVudHM0LkluZGljYXRvcnNDb250YWluZXIsXG4gICAgICAgICAgU2VsZWN0Q29udGFpbmVyID0gX2NvbXBvbmVudHM0LlNlbGVjdENvbnRhaW5lcixcbiAgICAgICAgICBWYWx1ZUNvbnRhaW5lciA9IF9jb21wb25lbnRzNC5WYWx1ZUNvbnRhaW5lcjtcbiAgICAgIHZhciBfcHJvcHMxMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzMTMuY2xhc3NOYW1lLFxuICAgICAgICAgIGlkID0gX3Byb3BzMTMuaWQsXG4gICAgICAgICAgaXNEaXNhYmxlZCA9IF9wcm9wczEzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgbWVudUlzT3BlbiA9IF9wcm9wczEzLm1lbnVJc09wZW47XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG5cblxuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcyA9IHRoaXMuZ2V0Q29tbW9uUHJvcHMoKTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFNlbGVjdENvbnRhaW5lcixcbiAgICAgICAgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgaW5uZXJQcm9wczoge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgb25LZXlEb3duOiB0aGlzLm9uS2V5RG93blxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgICB9KSxcbiAgICAgICAgdGhpcy5yZW5kZXJMaXZlUmVnaW9uKCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQ29udHJvbCxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgICAgIGlubmVyUmVmOiB0aGlzLmdldENvbnRyb2xSZWYsXG4gICAgICAgICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uQ29udHJvbE1vdXNlRG93bixcbiAgICAgICAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5vbkNvbnRyb2xUb3VjaEVuZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZCxcbiAgICAgICAgICAgIG1lbnVJc09wZW46IG1lbnVJc09wZW5cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgVmFsdWVDb250YWluZXIsXG4gICAgICAgICAgICBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHsgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCB9KSxcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlKCksXG4gICAgICAgICAgICB0aGlzLnJlbmRlcklucHV0KClcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBJbmRpY2F0b3JzQ29udGFpbmVyLFxuICAgICAgICAgICAgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7IGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQgfSksXG4gICAgICAgICAgICB0aGlzLnJlbmRlckNsZWFySW5kaWNhdG9yKCksXG4gICAgICAgICAgICB0aGlzLnJlbmRlckxvYWRpbmdJbmRpY2F0b3IoKSxcbiAgICAgICAgICAgIHRoaXMucmVuZGVySW5kaWNhdG9yU2VwYXJhdG9yKCksXG4gICAgICAgICAgICB0aGlzLnJlbmRlckRyb3Bkb3duSW5kaWNhdG9yKClcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIHRoaXMucmVuZGVyTWVudSgpLFxuICAgICAgICB0aGlzLnJlbmRlckZvcm1GaWVsZCgpXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU2VsZWN0O1xufShDb21wb25lbnQpO1xuXG5TZWxlY3QuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gIHRoaXMuc3RhdGUgPSB7XG4gICAgYXJpYUxpdmVTZWxlY3Rpb246ICcnLFxuICAgIGFyaWFMaXZlQ29udGV4dDogJycsXG4gICAgZm9jdXNlZE9wdGlvbjogbnVsbCxcbiAgICBmb2N1c2VkVmFsdWU6IG51bGwsXG4gICAgaW5wdXRJc0hpZGRlbjogZmFsc2UsXG4gICAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgICBpc0NvbXBvc2luZzogZmFsc2UsXG4gICAgbWVudU9wdGlvbnM6IHsgcmVuZGVyOiBbXSwgZm9jdXNhYmxlOiBbXSB9LFxuICAgIHNlbGVjdFZhbHVlOiBbXVxuICB9O1xuICB0aGlzLmJsb2NrT3B0aW9uSG92ZXIgPSBmYWxzZTtcbiAgdGhpcy5jbGVhckZvY3VzVmFsdWVPblVwZGF0ZSA9IGZhbHNlO1xuICB0aGlzLmhhc0dyb3VwcyA9IGZhbHNlO1xuICB0aGlzLmluaXRpYWxUb3VjaFggPSAwO1xuICB0aGlzLmluaXRpYWxUb3VjaFkgPSAwO1xuICB0aGlzLmluc3RhbmNlUHJlZml4ID0gJyc7XG4gIHRoaXMub3BlbkFmdGVyRm9jdXMgPSBmYWxzZTtcbiAgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IGZhbHNlO1xuICB0aGlzLmNvbnRyb2xSZWYgPSBudWxsO1xuXG4gIHRoaXMuZ2V0Q29udHJvbFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICBfdGhpczcuY29udHJvbFJlZiA9IHJlZjtcbiAgfTtcblxuICB0aGlzLmZvY3VzZWRPcHRpb25SZWYgPSBudWxsO1xuXG4gIHRoaXMuZ2V0Rm9jdXNlZE9wdGlvblJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICBfdGhpczcuZm9jdXNlZE9wdGlvblJlZiA9IHJlZjtcbiAgfTtcblxuICB0aGlzLm1lbnVMaXN0UmVmID0gbnVsbDtcblxuICB0aGlzLmdldE1lbnVMaXN0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgIF90aGlzNy5tZW51TGlzdFJlZiA9IHJlZjtcbiAgfTtcblxuICB0aGlzLmlucHV0UmVmID0gbnVsbDtcblxuICB0aGlzLmdldElucHV0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgIF90aGlzNy5pbnB1dFJlZiA9IHJlZjtcbiAgfTtcblxuICB0aGlzLmNhY2hlQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChjb21wb25lbnRzJCQxKSB7XG4gICAgX3RoaXM3LmNvbXBvbmVudHMgPSBkZWZhdWx0Q29tcG9uZW50cyh7IGNvbXBvbmVudHM6IGNvbXBvbmVudHMkJDEgfSk7XG4gIH07XG5cbiAgdGhpcy5mb2N1cyA9IHRoaXMuZm9jdXNJbnB1dDtcbiAgdGhpcy5ibHVyID0gdGhpcy5ibHVySW5wdXQ7XG5cbiAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgIHZhciBfcHJvcHMxNCA9IF90aGlzNy5wcm9wcyxcbiAgICAgICAgb25DaGFuZ2UgPSBfcHJvcHMxNC5vbkNoYW5nZSxcbiAgICAgICAgbmFtZSA9IF9wcm9wczE0Lm5hbWU7XG5cbiAgICBvbkNoYW5nZShuZXdWYWx1ZSwgX2V4dGVuZHMoe30sIGFjdGlvbk1ldGEsIHsgbmFtZTogbmFtZSB9KSk7XG4gIH07XG5cbiAgdGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdzZXQtdmFsdWUnO1xuICAgIHZhciBvcHRpb24gPSBhcmd1bWVudHNbMl07XG4gICAgdmFyIF9wcm9wczE1ID0gX3RoaXM3LnByb3BzLFxuICAgICAgICBjbG9zZU1lbnVPblNlbGVjdCA9IF9wcm9wczE1LmNsb3NlTWVudU9uU2VsZWN0LFxuICAgICAgICBpc011bHRpID0gX3Byb3BzMTUuaXNNdWx0aTtcblxuICAgIF90aGlzNy5vbklucHV0Q2hhbmdlKCcnLCB7IGFjdGlvbjogJ3NldC12YWx1ZScgfSk7XG4gICAgaWYgKGNsb3NlTWVudU9uU2VsZWN0KSB7XG4gICAgICBfdGhpczcuaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlID0gIWlzTXVsdGk7XG4gICAgICBfdGhpczcub25NZW51Q2xvc2UoKTtcbiAgICB9XG4gICAgLy8gd2hlbiB0aGUgc2VsZWN0IHZhbHVlIHNob3VsZCBjaGFuZ2UsIHdlIHNob3VsZCByZXNldCBmb2N1c2VkVmFsdWVcbiAgICBfdGhpczcuY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGUgPSB0cnVlO1xuICAgIF90aGlzNy5vbkNoYW5nZShuZXdWYWx1ZSwgeyBhY3Rpb246IGFjdGlvbiwgb3B0aW9uOiBvcHRpb24gfSk7XG4gIH07XG5cbiAgdGhpcy5zZWxlY3RPcHRpb24gPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICB2YXIgX3Byb3BzMTYgPSBfdGhpczcucHJvcHMsXG4gICAgICAgIGJsdXJJbnB1dE9uU2VsZWN0ID0gX3Byb3BzMTYuYmx1cklucHV0T25TZWxlY3QsXG4gICAgICAgIGlzTXVsdGkgPSBfcHJvcHMxNi5pc011bHRpO1xuXG5cbiAgICBpZiAoaXNNdWx0aSkge1xuICAgICAgdmFyIF9zZWxlY3RWYWx1ZTMgPSBfdGhpczcuc3RhdGUuc2VsZWN0VmFsdWU7XG5cbiAgICAgIGlmIChfdGhpczcuaXNPcHRpb25TZWxlY3RlZChuZXdWYWx1ZSwgX3NlbGVjdFZhbHVlMykpIHtcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IF90aGlzNy5nZXRPcHRpb25WYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIF90aGlzNy5zZXRWYWx1ZShfc2VsZWN0VmFsdWUzLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczcuZ2V0T3B0aW9uVmFsdWUoaSkgIT09IGNhbmRpZGF0ZTtcbiAgICAgICAgfSksICdkZXNlbGVjdC1vcHRpb24nLCBuZXdWYWx1ZSk7XG4gICAgICAgIF90aGlzNy5hbm5vdW5jZUFyaWFMaXZlU2VsZWN0aW9uKHtcbiAgICAgICAgICBldmVudDogJ2Rlc2VsZWN0LW9wdGlvbicsXG4gICAgICAgICAgY29udGV4dDogeyB2YWx1ZTogX3RoaXM3LmdldE9wdGlvbkxhYmVsKG5ld1ZhbHVlKSB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXM3LnNldFZhbHVlKFtdLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShfc2VsZWN0VmFsdWUzKSwgW25ld1ZhbHVlXSksICdzZWxlY3Qtb3B0aW9uJywgbmV3VmFsdWUpO1xuICAgICAgICBfdGhpczcuYW5ub3VuY2VBcmlhTGl2ZVNlbGVjdGlvbih7XG4gICAgICAgICAgZXZlbnQ6ICdzZWxlY3Qtb3B0aW9uJyxcbiAgICAgICAgICBjb250ZXh0OiB7IHZhbHVlOiBfdGhpczcuZ2V0T3B0aW9uTGFiZWwobmV3VmFsdWUpIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIF90aGlzNy5zZXRWYWx1ZShuZXdWYWx1ZSwgJ3NlbGVjdC1vcHRpb24nKTtcbiAgICAgIF90aGlzNy5hbm5vdW5jZUFyaWFMaXZlU2VsZWN0aW9uKHtcbiAgICAgICAgZXZlbnQ6ICdzZWxlY3Qtb3B0aW9uJyxcbiAgICAgICAgY29udGV4dDogeyB2YWx1ZTogX3RoaXM3LmdldE9wdGlvbkxhYmVsKG5ld1ZhbHVlKSB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYmx1cklucHV0T25TZWxlY3QpIHtcbiAgICAgIF90aGlzNy5ibHVySW5wdXQoKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5yZW1vdmVWYWx1ZSA9IGZ1bmN0aW9uIChyZW1vdmVkVmFsdWUpIHtcbiAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpczcuc3RhdGUuc2VsZWN0VmFsdWU7XG5cbiAgICB2YXIgY2FuZGlkYXRlID0gX3RoaXM3LmdldE9wdGlvblZhbHVlKHJlbW92ZWRWYWx1ZSk7XG4gICAgX3RoaXM3Lm9uQ2hhbmdlKHNlbGVjdFZhbHVlLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIF90aGlzNy5nZXRPcHRpb25WYWx1ZShpKSAhPT0gY2FuZGlkYXRlO1xuICAgIH0pLCB7XG4gICAgICBhY3Rpb246ICdyZW1vdmUtdmFsdWUnLFxuICAgICAgcmVtb3ZlZFZhbHVlOiByZW1vdmVkVmFsdWVcbiAgICB9KTtcbiAgICBfdGhpczcuYW5ub3VuY2VBcmlhTGl2ZVNlbGVjdGlvbih7XG4gICAgICBldmVudDogJ3JlbW92ZS12YWx1ZScsXG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIHZhbHVlOiByZW1vdmVkVmFsdWUgPyBfdGhpczcuZ2V0T3B0aW9uTGFiZWwocmVtb3ZlZFZhbHVlKSA6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH0pO1xuICAgIF90aGlzNy5mb2N1c0lucHV0KCk7XG4gIH07XG5cbiAgdGhpcy5jbGVhclZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpc011bHRpID0gX3RoaXM3LnByb3BzLmlzTXVsdGk7XG5cbiAgICBfdGhpczcub25DaGFuZ2UoaXNNdWx0aSA/IFtdIDogbnVsbCwgeyBhY3Rpb246ICdjbGVhcicgfSk7XG4gIH07XG5cbiAgdGhpcy5wb3BWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpczcuc3RhdGUuc2VsZWN0VmFsdWU7XG5cbiAgICB2YXIgbGFzdFNlbGVjdGVkVmFsdWUgPSBzZWxlY3RWYWx1ZVtzZWxlY3RWYWx1ZS5sZW5ndGggLSAxXTtcbiAgICBfdGhpczcuYW5ub3VuY2VBcmlhTGl2ZVNlbGVjdGlvbih7XG4gICAgICBldmVudDogJ3BvcC12YWx1ZScsXG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIHZhbHVlOiBsYXN0U2VsZWN0ZWRWYWx1ZSA/IF90aGlzNy5nZXRPcHRpb25MYWJlbChsYXN0U2VsZWN0ZWRWYWx1ZSkgOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfdGhpczcub25DaGFuZ2Uoc2VsZWN0VmFsdWUuc2xpY2UoMCwgc2VsZWN0VmFsdWUubGVuZ3RoIC0gMSksIHtcbiAgICAgIGFjdGlvbjogJ3BvcC12YWx1ZScsXG4gICAgICByZW1vdmVkVmFsdWU6IGxhc3RTZWxlY3RlZFZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5nZXRPcHRpb25MYWJlbCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIF90aGlzNy5wcm9wcy5nZXRPcHRpb25MYWJlbChkYXRhKTtcbiAgfTtcblxuICB0aGlzLmdldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXR1cm4gX3RoaXM3LnByb3BzLmdldE9wdGlvblZhbHVlKGRhdGEpO1xuICB9O1xuXG4gIHRoaXMuZ2V0U3R5bGVzID0gZnVuY3Rpb24gKGtleSwgcHJvcHMpIHtcbiAgICB2YXIgYmFzZSA9IGRlZmF1bHRTdHlsZXNba2V5XShwcm9wcyk7XG4gICAgYmFzZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG4gICAgdmFyIGN1c3RvbSA9IF90aGlzNy5wcm9wcy5zdHlsZXNba2V5XTtcbiAgICByZXR1cm4gY3VzdG9tID8gY3VzdG9tKGJhc2UsIHByb3BzKSA6IGJhc2U7XG4gIH07XG5cbiAgdGhpcy5nZXRFbGVtZW50SWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBfdGhpczcuaW5zdGFuY2VQcmVmaXggKyAnLScgKyBlbGVtZW50O1xuICB9O1xuXG4gIHRoaXMuZ2V0QWN0aXZlRGVzY2VuZGVudElkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZW51SXNPcGVuID0gX3RoaXM3LnByb3BzLm1lbnVJc09wZW47XG4gICAgdmFyIF9zdGF0ZTggPSBfdGhpczcuc3RhdGUsXG4gICAgICAgIG1lbnVPcHRpb25zID0gX3N0YXRlOC5tZW51T3B0aW9ucyxcbiAgICAgICAgZm9jdXNlZE9wdGlvbiA9IF9zdGF0ZTguZm9jdXNlZE9wdGlvbjtcblxuXG4gICAgaWYgKCFmb2N1c2VkT3B0aW9uIHx8ICFtZW51SXNPcGVuKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgdmFyIGluZGV4ID0gbWVudU9wdGlvbnMuZm9jdXNhYmxlLmluZGV4T2YoZm9jdXNlZE9wdGlvbik7XG4gICAgdmFyIG9wdGlvbiA9IG1lbnVPcHRpb25zLnJlbmRlcltpbmRleF07XG5cbiAgICByZXR1cm4gb3B0aW9uICYmIG9wdGlvbi5rZXk7XG4gIH07XG5cbiAgdGhpcy5hbm5vdW5jZUFyaWFMaXZlU2VsZWN0aW9uID0gZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgdmFyIGV2ZW50ID0gX3JlZjMuZXZlbnQsXG4gICAgICAgIGNvbnRleHQgPSBfcmVmMy5jb250ZXh0O1xuXG4gICAgX3RoaXM3LnNldFN0YXRlKHtcbiAgICAgIGFyaWFMaXZlU2VsZWN0aW9uOiB2YWx1ZUV2ZW50QXJpYU1lc3NhZ2UoZXZlbnQsIGNvbnRleHQpXG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCA9IGZ1bmN0aW9uIChfcmVmNCkge1xuICAgIHZhciBldmVudCA9IF9yZWY0LmV2ZW50LFxuICAgICAgICBjb250ZXh0ID0gX3JlZjQuY29udGV4dDtcblxuICAgIF90aGlzNy5zZXRTdGF0ZSh7XG4gICAgICBhcmlhTGl2ZUNvbnRleHQ6IGluc3RydWN0aW9uc0FyaWFNZXNzYWdlKGV2ZW50LCBfZXh0ZW5kcyh7fSwgY29udGV4dCwge1xuICAgICAgICBsYWJlbDogX3RoaXM3LnByb3BzWydhcmlhLWxhYmVsJ11cbiAgICAgIH0pKVxuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMub25NZW51TW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIF90aGlzNy5mb2N1c0lucHV0KCk7XG4gIH07XG5cbiAgdGhpcy5vbk1lbnVNb3VzZU1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBfdGhpczcuYmxvY2tPcHRpb25Ib3ZlciA9IGZhbHNlO1xuICB9O1xuXG4gIHRoaXMub25Db250cm9sTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIG9wZW5NZW51T25DbGljayA9IF90aGlzNy5wcm9wcy5vcGVuTWVudU9uQ2xpY2s7XG5cbiAgICBpZiAoIV90aGlzNy5zdGF0ZS5pc0ZvY3VzZWQpIHtcbiAgICAgIGlmIChvcGVuTWVudU9uQ2xpY2spIHtcbiAgICAgICAgX3RoaXM3Lm9wZW5BZnRlckZvY3VzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIF90aGlzNy5mb2N1c0lucHV0KCk7XG4gICAgfSBlbHNlIGlmICghX3RoaXM3LnByb3BzLm1lbnVJc09wZW4pIHtcbiAgICAgIF90aGlzNy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gJEZsb3dGaXhNZSBIVE1MRWxlbWVudCB0eXBlIGRvZXMgbm90IGhhdmUgdGFnTmFtZSBwcm9wZXJ0eVxuICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnKSB7XG4gICAgICAgIF90aGlzNy5vbk1lbnVDbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyAkRmxvd0ZpeE1lIEhUTUxFbGVtZW50IHR5cGUgZG9lcyBub3QgaGF2ZSB0YWdOYW1lIHByb3BlcnR5XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uRHJvcGRvd25JbmRpY2F0b3JNb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBpZ25vcmUgbW91c2UgZXZlbnRzIHRoYXQgd2VyZW4ndCB0cmlnZ2VyZWQgYnkgdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoX3RoaXM3LnByb3BzLmlzRGlzYWJsZWQpIHJldHVybjtcbiAgICB2YXIgX3Byb3BzMTcgPSBfdGhpczcucHJvcHMsXG4gICAgICAgIGlzTXVsdGkgPSBfcHJvcHMxNy5pc011bHRpLFxuICAgICAgICBtZW51SXNPcGVuID0gX3Byb3BzMTcubWVudUlzT3BlbjtcblxuICAgIF90aGlzNy5mb2N1c0lucHV0KCk7XG4gICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgIF90aGlzNy5pbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUgPSAhaXNNdWx0aTtcbiAgICAgIF90aGlzNy5vbk1lbnVDbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpczcub3Blbk1lbnUoJ2ZpcnN0Jyk7XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgdGhpcy5vbkNsZWFySW5kaWNhdG9yTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gaWdub3JlIG1vdXNlIGV2ZW50cyB0aGF0IHdlcmVuJ3QgdHJpZ2dlcmVkIGJ5IHRoZSBwcmltYXJ5IGJ1dHRvblxuICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX3RoaXM3LmNsZWFyVmFsdWUoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBfdGhpczcub3BlbkFmdGVyRm9jdXMgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczcuZm9jdXNJbnB1dCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMub25TY3JvbGwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAodHlwZW9mIF90aGlzNy5wcm9wcy5jbG9zZU1lbnVPblNjcm9sbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaXNEb2N1bWVudEVsZW1lbnQoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBfdGhpczcucHJvcHMub25NZW51Q2xvc2UoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBfdGhpczcucHJvcHMuY2xvc2VNZW51T25TY3JvbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChfdGhpczcucHJvcHMuY2xvc2VNZW51T25TY3JvbGwoZXZlbnQpKSB7XG4gICAgICAgIF90aGlzNy5wcm9wcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uQ29tcG9zaXRpb25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfdGhpczcuc2V0U3RhdGUoe1xuICAgICAgaXNDb21wb3Npbmc6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLm9uQ29tcG9zaXRpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXM3LnNldFN0YXRlKHtcbiAgICAgIGlzQ29tcG9zaW5nOiBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKF9yZWY1KSB7XG4gICAgdmFyIHRvdWNoZXMgPSBfcmVmNS50b3VjaGVzO1xuXG4gICAgdmFyIHRvdWNoID0gdG91Y2hlcy5pdGVtKDApO1xuICAgIGlmICghdG91Y2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBfdGhpczcuaW5pdGlhbFRvdWNoWCA9IHRvdWNoLmNsaWVudFg7XG4gICAgX3RoaXM3LmluaXRpYWxUb3VjaFkgPSB0b3VjaC5jbGllbnRZO1xuICAgIF90aGlzNy51c2VySXNEcmFnZ2luZyA9IGZhbHNlO1xuICB9O1xuXG4gIHRoaXMub25Ub3VjaE1vdmUgPSBmdW5jdGlvbiAoX3JlZjYpIHtcbiAgICB2YXIgdG91Y2hlcyA9IF9yZWY2LnRvdWNoZXM7XG5cbiAgICB2YXIgdG91Y2ggPSB0b3VjaGVzLml0ZW0oMCk7XG4gICAgaWYgKCF0b3VjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkZWx0YVggPSBNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gX3RoaXM3LmluaXRpYWxUb3VjaFgpO1xuICAgIHZhciBkZWx0YVkgPSBNYXRoLmFicyh0b3VjaC5jbGllbnRZIC0gX3RoaXM3LmluaXRpYWxUb3VjaFkpO1xuICAgIHZhciBtb3ZlVGhyZXNob2xkID0gNTtcblxuICAgIF90aGlzNy51c2VySXNEcmFnZ2luZyA9IGRlbHRhWCA+IG1vdmVUaHJlc2hvbGQgfHwgZGVsdGFZID4gbW92ZVRocmVzaG9sZDtcbiAgfTtcblxuICB0aGlzLm9uVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoX3RoaXM3LnVzZXJJc0RyYWdnaW5nKSByZXR1cm47XG5cbiAgICAvLyB0eXBlIGNhc3QgdGhlIEV2ZW50VGFyZ2V0XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuICAgIC8vIGNsb3NlIHRoZSBtZW51IGlmIHRoZSB1c2VyIHRhcHMgb3V0c2lkZVxuICAgIGlmIChfdGhpczcuY29udHJvbFJlZiAmJiAhX3RoaXM3LmNvbnRyb2xSZWYuY29udGFpbnModGFyZ2V0KSAmJiBfdGhpczcubWVudUxpc3RSZWYgJiYgIV90aGlzNy5tZW51TGlzdFJlZi5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICBfdGhpczcuYmx1cklucHV0KCk7XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgbW92ZSB2YXJzXG4gICAgX3RoaXM3LmluaXRpYWxUb3VjaFggPSAwO1xuICAgIF90aGlzNy5pbml0aWFsVG91Y2hZID0gMDtcbiAgfTtcblxuICB0aGlzLm9uQ29udHJvbFRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKF90aGlzNy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgX3RoaXM3Lm9uQ29udHJvbE1vdXNlRG93bihldmVudCk7XG4gIH07XG5cbiAgdGhpcy5vbkNsZWFySW5kaWNhdG9yVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoX3RoaXM3LnVzZXJJc0RyYWdnaW5nKSByZXR1cm47XG5cbiAgICBfdGhpczcub25DbGVhckluZGljYXRvck1vdXNlRG93bihldmVudCk7XG4gIH07XG5cbiAgdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoX3RoaXM3LnVzZXJJc0RyYWdnaW5nKSByZXR1cm47XG5cbiAgICBfdGhpczcub25Ecm9wZG93bkluZGljYXRvck1vdXNlRG93bihldmVudCk7XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBpbnB1dFZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICBfdGhpczcuaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlID0gZmFsc2U7XG4gICAgX3RoaXM3Lm9uSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZSwgeyBhY3Rpb246ICdpbnB1dC1jaGFuZ2UnIH0pO1xuICAgIF90aGlzNy5vbk1lbnVPcGVuKCk7XG4gIH07XG5cbiAgdGhpcy5vbklucHV0Rm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgX3Byb3BzMTggPSBfdGhpczcucHJvcHMsXG4gICAgICAgIGlzU2VhcmNoYWJsZSA9IF9wcm9wczE4LmlzU2VhcmNoYWJsZSxcbiAgICAgICAgaXNNdWx0aSA9IF9wcm9wczE4LmlzTXVsdGk7XG5cbiAgICBpZiAoX3RoaXM3LnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIF90aGlzNy5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICB9XG4gICAgX3RoaXM3LmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSA9IGZhbHNlO1xuICAgIF90aGlzNy5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCh7XG4gICAgICBldmVudDogJ2lucHV0JyxcbiAgICAgIGNvbnRleHQ6IHsgaXNTZWFyY2hhYmxlOiBpc1NlYXJjaGFibGUsIGlzTXVsdGk6IGlzTXVsdGkgfVxuICAgIH0pO1xuICAgIF90aGlzNy5zZXRTdGF0ZSh7XG4gICAgICBpc0ZvY3VzZWQ6IHRydWVcbiAgICB9KTtcbiAgICBpZiAoX3RoaXM3Lm9wZW5BZnRlckZvY3VzIHx8IF90aGlzNy5wcm9wcy5vcGVuTWVudU9uRm9jdXMpIHtcbiAgICAgIF90aGlzNy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICB9XG4gICAgX3RoaXM3Lm9wZW5BZnRlckZvY3VzID0gZmFsc2U7XG4gIH07XG5cbiAgdGhpcy5vbklucHV0Qmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChfdGhpczcubWVudUxpc3RSZWYgJiYgX3RoaXM3Lm1lbnVMaXN0UmVmLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBfdGhpczcuaW5wdXRSZWYuZm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKF90aGlzNy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIF90aGlzNy5wcm9wcy5vbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgICBfdGhpczcub25JbnB1dENoYW5nZSgnJywgeyBhY3Rpb246ICdpbnB1dC1ibHVyJyB9KTtcbiAgICBfdGhpczcub25NZW51Q2xvc2UoKTtcbiAgICBfdGhpczcuc2V0U3RhdGUoe1xuICAgICAgZm9jdXNlZFZhbHVlOiBudWxsLFxuICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMub25PcHRpb25Ib3ZlciA9IGZ1bmN0aW9uIChmb2N1c2VkT3B0aW9uKSB7XG4gICAgaWYgKF90aGlzNy5ibG9ja09wdGlvbkhvdmVyIHx8IF90aGlzNy5zdGF0ZS5mb2N1c2VkT3B0aW9uID09PSBmb2N1c2VkT3B0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIF90aGlzNy5zZXRTdGF0ZSh7IGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24gfSk7XG4gIH07XG5cbiAgdGhpcy5zaG91bGRIaWRlU2VsZWN0ZWRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcHJvcHMxOSA9IF90aGlzNy5wcm9wcyxcbiAgICAgICAgaGlkZVNlbGVjdGVkT3B0aW9ucyA9IF9wcm9wczE5LmhpZGVTZWxlY3RlZE9wdGlvbnMsXG4gICAgICAgIGlzTXVsdGkgPSBfcHJvcHMxOS5pc011bHRpO1xuXG4gICAgaWYgKGhpZGVTZWxlY3RlZE9wdGlvbnMgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGlzTXVsdGk7XG4gICAgcmV0dXJuIGhpZGVTZWxlY3RlZE9wdGlvbnM7XG4gIH07XG5cbiAgdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgX3Byb3BzMjAgPSBfdGhpczcucHJvcHMsXG4gICAgICAgIGlzTXVsdGkgPSBfcHJvcHMyMC5pc011bHRpLFxuICAgICAgICBiYWNrc3BhY2VSZW1vdmVzVmFsdWUgPSBfcHJvcHMyMC5iYWNrc3BhY2VSZW1vdmVzVmFsdWUsXG4gICAgICAgIGVzY2FwZUNsZWFyc1ZhbHVlID0gX3Byb3BzMjAuZXNjYXBlQ2xlYXJzVmFsdWUsXG4gICAgICAgIGlucHV0VmFsdWUgPSBfcHJvcHMyMC5pbnB1dFZhbHVlLFxuICAgICAgICBpc0NsZWFyYWJsZSA9IF9wcm9wczIwLmlzQ2xlYXJhYmxlLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3Byb3BzMjAuaXNEaXNhYmxlZCxcbiAgICAgICAgbWVudUlzT3BlbiA9IF9wcm9wczIwLm1lbnVJc09wZW4sXG4gICAgICAgIG9uS2V5RG93biA9IF9wcm9wczIwLm9uS2V5RG93bixcbiAgICAgICAgdGFiU2VsZWN0c1ZhbHVlID0gX3Byb3BzMjAudGFiU2VsZWN0c1ZhbHVlLFxuICAgICAgICBvcGVuTWVudU9uRm9jdXMgPSBfcHJvcHMyMC5vcGVuTWVudU9uRm9jdXM7XG4gICAgdmFyIF9zdGF0ZTkgPSBfdGhpczcuc3RhdGUsXG4gICAgICAgIGlzQ29tcG9zaW5nID0gX3N0YXRlOS5pc0NvbXBvc2luZyxcbiAgICAgICAgZm9jdXNlZE9wdGlvbiA9IF9zdGF0ZTkuZm9jdXNlZE9wdGlvbixcbiAgICAgICAgZm9jdXNlZFZhbHVlID0gX3N0YXRlOS5mb2N1c2VkVmFsdWUsXG4gICAgICAgIHNlbGVjdFZhbHVlID0gX3N0YXRlOS5zZWxlY3RWYWx1ZTtcblxuXG4gICAgaWYgKGlzRGlzYWJsZWQpIHJldHVybjtcblxuICAgIGlmICh0eXBlb2Ygb25LZXlEb3duID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbktleURvd24oZXZlbnQpO1xuICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEJsb2NrIG9wdGlvbiBob3ZlciBldmVudHMgd2hlbiB0aGUgdXNlciBoYXMganVzdCBwcmVzc2VkIGEga2V5XG4gICAgX3RoaXM3LmJsb2NrT3B0aW9uSG92ZXIgPSB0cnVlO1xuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBpZiAoIWlzTXVsdGkgfHwgaW5wdXRWYWx1ZSkgcmV0dXJuO1xuICAgICAgICBfdGhpczcuZm9jdXNWYWx1ZSgncHJldmlvdXMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgaWYgKCFpc011bHRpIHx8IGlucHV0VmFsdWUpIHJldHVybjtcbiAgICAgICAgX3RoaXM3LmZvY3VzVmFsdWUoJ25leHQnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdEZWxldGUnOlxuICAgICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgICAgaWYgKGlucHV0VmFsdWUpIHJldHVybjtcbiAgICAgICAgaWYgKGZvY3VzZWRWYWx1ZSkge1xuICAgICAgICAgIF90aGlzNy5yZW1vdmVWYWx1ZShmb2N1c2VkVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghYmFja3NwYWNlUmVtb3Zlc1ZhbHVlKSByZXR1cm47XG4gICAgICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgICAgIF90aGlzNy5wb3BWYWx1ZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDbGVhcmFibGUpIHtcbiAgICAgICAgICAgIF90aGlzNy5jbGVhclZhbHVlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVGFiJzpcbiAgICAgICAgaWYgKGlzQ29tcG9zaW5nKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5IHx8ICFtZW51SXNPcGVuIHx8ICF0YWJTZWxlY3RzVmFsdWUgfHwgIWZvY3VzZWRPcHRpb24gfHxcbiAgICAgICAgLy8gZG9uJ3QgY2FwdHVyZSB0aGUgZXZlbnQgaWYgdGhlIG1lbnUgb3BlbnMgb24gZm9jdXMgYW5kIHRoZSBmb2N1c2VkXG4gICAgICAgIC8vIG9wdGlvbiBpcyBhbHJlYWR5IHNlbGVjdGVkOyBpdCBicmVha3MgdGhlIGZsb3cgb2YgbmF2aWdhdGlvblxuICAgICAgICBvcGVuTWVudU9uRm9jdXMgJiYgX3RoaXM3LmlzT3B0aW9uU2VsZWN0ZWQoZm9jdXNlZE9wdGlvbiwgc2VsZWN0VmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzNy5zZWxlY3RPcHRpb24oZm9jdXNlZE9wdGlvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgIGlmICghZm9jdXNlZE9wdGlvbikgcmV0dXJuO1xuICAgICAgICAgIGlmIChpc0NvbXBvc2luZykgcmV0dXJuO1xuICAgICAgICAgIF90aGlzNy5zZWxlY3RPcHRpb24oZm9jdXNlZE9wdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXM3LmZvY3VzT3B0aW9uKCdmaXJzdCcpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICBfdGhpczcuaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgX3RoaXM3Lm9uSW5wdXRDaGFuZ2UoJycsIHsgYWN0aW9uOiAnbWVudS1jbG9zZScgfSk7XG4gICAgICAgICAgX3RoaXM3Lm9uTWVudUNsb3NlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNDbGVhcmFibGUgJiYgZXNjYXBlQ2xlYXJzVmFsdWUpIHtcbiAgICAgICAgICBfdGhpczcuY2xlYXJWYWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnICc6XG4gICAgICAgIC8vIHNwYWNlXG4gICAgICAgIGlmIChpbnB1dFZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWVudUlzT3Blbikge1xuICAgICAgICAgIF90aGlzNy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZvY3VzZWRPcHRpb24pIHJldHVybjtcbiAgICAgICAgX3RoaXM3LnNlbGVjdE9wdGlvbihmb2N1c2VkT3B0aW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICBfdGhpczcuZm9jdXNPcHRpb24oJ3VwJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXM3Lm9wZW5NZW51KCdsYXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgIF90aGlzNy5mb2N1c09wdGlvbignZG93bicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzNy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1BhZ2VVcCc6XG4gICAgICAgIGlmICghbWVudUlzT3BlbikgcmV0dXJuO1xuICAgICAgICBfdGhpczcuZm9jdXNPcHRpb24oJ3BhZ2V1cCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1BhZ2VEb3duJzpcbiAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG4gICAgICAgIF90aGlzNy5mb2N1c09wdGlvbigncGFnZWRvd24nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG4gICAgICAgIF90aGlzNy5mb2N1c09wdGlvbignZmlyc3QnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFbmQnOlxuICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcbiAgICAgICAgX3RoaXM3LmZvY3VzT3B0aW9uKCdsYXN0Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyQxID0ge1xuICBkZWZhdWx0SW5wdXRWYWx1ZTogJycsXG4gIGRlZmF1bHRNZW51SXNPcGVuOiBmYWxzZSxcbiAgZGVmYXVsdFZhbHVlOiBudWxsXG59O1xuXG52YXIgbWFuYWdlU3RhdGUgPSBmdW5jdGlvbiBtYW5hZ2VTdGF0ZShTZWxlY3RDb21wb25lbnQpIHtcbiAgdmFyIF9jbGFzcywgX3RlbXAyO1xuXG4gIHJldHVybiBfdGVtcDIgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIGluaGVyaXRzKFN0YXRlTWFuYWdlciwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBTdGF0ZU1hbmFnZXIoKSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhdGVNYW5hZ2VyKTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gU3RhdGVNYW5hZ2VyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU3RhdGVNYW5hZ2VyKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIGlucHV0VmFsdWU6IF90aGlzLnByb3BzLmlucHV0VmFsdWUgIT09IHVuZGVmaW5lZCA/IF90aGlzLnByb3BzLmlucHV0VmFsdWUgOiBfdGhpcy5wcm9wcy5kZWZhdWx0SW5wdXRWYWx1ZSxcbiAgICAgICAgbWVudUlzT3BlbjogX3RoaXMucHJvcHMubWVudUlzT3BlbiAhPT0gdW5kZWZpbmVkID8gX3RoaXMucHJvcHMubWVudUlzT3BlbiA6IF90aGlzLnByb3BzLmRlZmF1bHRNZW51SXNPcGVuLFxuICAgICAgICB2YWx1ZTogX3RoaXMucHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCA/IF90aGlzLnByb3BzLnZhbHVlIDogX3RoaXMucHJvcHMuZGVmYXVsdFZhbHVlXG4gICAgICB9LCBfdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgICBfdGhpcy5jYWxsUHJvcCgnb25DaGFuZ2UnLCB2YWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgfSwgX3RoaXMub25JbnB1dENoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgICAvLyBUT0RPOiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHdlIGFsbG93IHRoZSBwcm9wIHRvIHJldHVybiBhIG5ld1xuICAgICAgICAvLyB2YWx1ZSwgYnV0IG5vdyBpbnB1dFZhbHVlIGlzIGEgY29udHJvbGxhYmxlIHByb3Agd2UgcHJvYmFibHkgc2hvdWxkbid0XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IF90aGlzLmNhbGxQcm9wKCdvbklucHV0Q2hhbmdlJywgdmFsdWUsIGFjdGlvbk1ldGEpO1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW5wdXRWYWx1ZTogbmV3VmFsdWUgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlIDogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9LCBfdGhpcy5vbk1lbnVPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5jYWxsUHJvcCgnb25NZW51T3BlbicpO1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IG1lbnVJc09wZW46IHRydWUgfSk7XG4gICAgICB9LCBfdGhpcy5vbk1lbnVDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuY2FsbFByb3AoJ29uTWVudUNsb3NlJyk7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgbWVudUlzT3BlbjogZmFsc2UgfSk7XG4gICAgICB9LCBfdGVtcCksIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFN0YXRlTWFuYWdlciwgW3tcbiAgICAgIGtleTogJ2ZvY3VzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdibHVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICB0aGlzLnNlbGVjdC5ibHVyKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0UHJvcCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UHJvcChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHNba2V5XSAhPT0gdW5kZWZpbmVkID8gdGhpcy5wcm9wc1trZXldIDogdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NhbGxQcm9wJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxsUHJvcChuYW1lKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wc1tuYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBfcHJvcHM7XG5cbiAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoX3Byb3BzID0gdGhpcy5wcm9wcylbbmFtZV0uYXBwbHkoX3Byb3BzLCB0b0NvbnN1bWFibGVBcnJheShhcmdzKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKF9yZWYyKSB7XG4gICAgICAgICAgICBfdGhpczIuc2VsZWN0ID0gX3JlZjI7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbnB1dFZhbHVlOiB0aGlzLmdldFByb3AoJ2lucHV0VmFsdWUnKSxcbiAgICAgICAgICBtZW51SXNPcGVuOiB0aGlzLmdldFByb3AoJ21lbnVJc09wZW4nKSxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICBvbklucHV0Q2hhbmdlOiB0aGlzLm9uSW5wdXRDaGFuZ2UsXG4gICAgICAgICAgb25NZW51Q2xvc2U6IHRoaXMub25NZW51Q2xvc2UsXG4gICAgICAgICAgb25NZW51T3BlbjogdGhpcy5vbk1lbnVPcGVuLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmdldFByb3AoJ3ZhbHVlJylcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gU3RhdGVNYW5hZ2VyO1xuICB9KENvbXBvbmVudCksIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMSwgX3RlbXAyO1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyQyID0ge1xuICBjYWNoZU9wdGlvbnM6IGZhbHNlLFxuICBkZWZhdWx0T3B0aW9uczogZmFsc2Vcbn07XG5cbnZhciBtYWtlQXN5bmNTZWxlY3QgPSBmdW5jdGlvbiBtYWtlQXN5bmNTZWxlY3QoU2VsZWN0Q29tcG9uZW50KSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgaW5oZXJpdHMoQXN5bmMsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQXN5bmMocHJvcHMpIHtcbiAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEFzeW5jKTtcblxuICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQXN5bmMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBc3luYykpLmNhbGwodGhpcykpO1xuXG4gICAgICBfdGhpcy5tb3VudGVkID0gZmFsc2U7XG4gICAgICBfdGhpcy5vcHRpb25zQ2FjaGUgPSB7fTtcblxuICAgICAgX3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAobmV3VmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBjYWNoZU9wdGlvbnMgPSBfdGhpcyRwcm9wcy5jYWNoZU9wdGlvbnMsXG4gICAgICAgICAgICBvbklucHV0Q2hhbmdlID0gX3RoaXMkcHJvcHMub25JbnB1dENoYW5nZTtcbiAgICAgICAgLy8gVE9ET1xuXG4gICAgICAgIHZhciBpbnB1dFZhbHVlID0gaGFuZGxlSW5wdXRDaGFuZ2UobmV3VmFsdWUsIGFjdGlvbk1ldGEsIG9uSW5wdXRDaGFuZ2UpO1xuICAgICAgICBpZiAoIWlucHV0VmFsdWUpIHtcbiAgICAgICAgICBkZWxldGUgX3RoaXMubGFzdFJlcXVlc3Q7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICAgICAgICBsb2FkZWRJbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgICAgIGxvYWRlZE9wdGlvbnM6IFtdLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3NFbXB0eU9wdGlvbnM6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWNoZU9wdGlvbnMgJiYgX3RoaXMub3B0aW9uc0NhY2hlW2lucHV0VmFsdWVdKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgIGxvYWRlZElucHV0VmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICAgICAgICBsb2FkZWRPcHRpb25zOiBfdGhpcy5vcHRpb25zQ2FjaGVbaW5wdXRWYWx1ZV0sXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgcGFzc0VtcHR5T3B0aW9uczogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcmVxdWVzdCA9IF90aGlzLmxhc3RSZXF1ZXN0ID0ge307XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NFbXB0eU9wdGlvbnM6ICFfdGhpcy5zdGF0ZS5sb2FkZWRJbnB1dFZhbHVlXG4gICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubG9hZE9wdGlvbnMoaW5wdXRWYWx1ZSwgZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgaWYgKCFfdGhpcy5tb3VudGVkKSByZXR1cm47XG4gICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub3B0aW9uc0NhY2hlW2lucHV0VmFsdWVdID0gb3B0aW9ucztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocmVxdWVzdCAhPT0gX3RoaXMubGFzdFJlcXVlc3QpIHJldHVybjtcbiAgICAgICAgICAgICAgZGVsZXRlIF90aGlzLmxhc3RSZXF1ZXN0O1xuICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2FkZWRJbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgICAgICAgICAgIGxvYWRlZE9wdGlvbnM6IG9wdGlvbnMgfHwgW10sXG4gICAgICAgICAgICAgICAgcGFzc0VtcHR5T3B0aW9uczogZmFsc2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBkZWZhdWx0T3B0aW9uczogQXJyYXkuaXNBcnJheShwcm9wcy5kZWZhdWx0T3B0aW9ucykgPyBwcm9wcy5kZWZhdWx0T3B0aW9ucyA6IHVuZGVmaW5lZCxcbiAgICAgICAgaW5wdXRWYWx1ZTogdHlwZW9mIHByb3BzLmlucHV0VmFsdWUgIT09ICd1bmRlZmluZWQnID8gcHJvcHMuaW5wdXRWYWx1ZSA6ICcnLFxuICAgICAgICBpc0xvYWRpbmc6IHByb3BzLmRlZmF1bHRPcHRpb25zID09PSB0cnVlID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBsb2FkZWRPcHRpb25zOiBbXSxcbiAgICAgICAgcGFzc0VtcHR5T3B0aW9uczogZmFsc2VcbiAgICAgIH07XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoQXN5bmMsIFt7XG4gICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gICAgICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHRoaXMucHJvcHMuZGVmYXVsdE9wdGlvbnM7XG4gICAgICAgIHZhciBpbnB1dFZhbHVlID0gdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuXG4gICAgICAgIGlmIChkZWZhdWx0T3B0aW9ucyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMubG9hZE9wdGlvbnMoaW5wdXRWYWx1ZSwgZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXMyLm1vdW50ZWQpIHJldHVybjtcbiAgICAgICAgICAgIHZhciBpc0xvYWRpbmcgPSAhIV90aGlzMi5sYXN0UmVxdWVzdDtcbiAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IGRlZmF1bHRPcHRpb25zOiBvcHRpb25zIHx8IFtdLCBpc0xvYWRpbmc6IGlzTG9hZGluZyB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIC8vIGlmIHRoZSBjYWNoZU9wdGlvbnMgcHJvcCBjaGFuZ2VzLCBjbGVhciB0aGUgY2FjaGVcbiAgICAgICAgaWYgKG5leHRQcm9wcy5jYWNoZU9wdGlvbnMgIT09IHRoaXMucHJvcHMuY2FjaGVPcHRpb25zKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zQ2FjaGUgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dFByb3BzLmRlZmF1bHRPcHRpb25zICE9PSB0aGlzLnByb3BzLmRlZmF1bHRPcHRpb25zKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uczogQXJyYXkuaXNBcnJheShuZXh0UHJvcHMuZGVmYXVsdE9wdGlvbnMpID8gbmV4dFByb3BzLmRlZmF1bHRPcHRpb25zIDogdW5kZWZpbmVkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2ZvY3VzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdibHVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICB0aGlzLnNlbGVjdC5ibHVyKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnbG9hZE9wdGlvbnMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRPcHRpb25zKGlucHV0VmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBsb2FkT3B0aW9ucyA9IHRoaXMucHJvcHMubG9hZE9wdGlvbnM7XG5cbiAgICAgICAgaWYgKCFsb2FkT3B0aW9ucykgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIHZhciBsb2FkZXIgPSBsb2FkT3B0aW9ucyhpbnB1dFZhbHVlLCBjYWxsYmFjayk7XG4gICAgICAgIGlmIChsb2FkZXIgJiYgdHlwZW9mIGxvYWRlci50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbG9hZGVyLnRoZW4oY2FsbGJhY2ssIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgbG9hZE9wdGlvbnMgPSBfcHJvcHMubG9hZE9wdGlvbnMsXG4gICAgICAgICAgICBwcm9wcyA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydsb2FkT3B0aW9ucyddKTtcbiAgICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9ucyA9IF9zdGF0ZS5kZWZhdWx0T3B0aW9ucyxcbiAgICAgICAgICAgIGlucHV0VmFsdWUgPSBfc3RhdGUuaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgIGlzTG9hZGluZyA9IF9zdGF0ZS5pc0xvYWRpbmcsXG4gICAgICAgICAgICBsb2FkZWRJbnB1dFZhbHVlID0gX3N0YXRlLmxvYWRlZElucHV0VmFsdWUsXG4gICAgICAgICAgICBsb2FkZWRPcHRpb25zID0gX3N0YXRlLmxvYWRlZE9wdGlvbnMsXG4gICAgICAgICAgICBwYXNzRW1wdHlPcHRpb25zID0gX3N0YXRlLnBhc3NFbXB0eU9wdGlvbnM7XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSBwYXNzRW1wdHlPcHRpb25zID8gW10gOiBpbnB1dFZhbHVlICYmIGxvYWRlZElucHV0VmFsdWUgPyBsb2FkZWRPcHRpb25zIDogZGVmYXVsdE9wdGlvbnMgfHwgW107XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICAgIGZpbHRlck9wdGlvbjogdGhpcy5wcm9wcy5maWx0ZXJPcHRpb24gfHwgbnVsbCxcbiAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKF9yZWYpIHtcbiAgICAgICAgICAgICAgX3RoaXMzLnNlbGVjdCA9IF9yZWY7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxuICAgICAgICAgICAgb25JbnB1dENoYW5nZTogdGhpcy5oYW5kbGVJbnB1dENoYW5nZVxuICAgICAgICAgIH0pKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gQXN5bmM7XG4gIH0oQ29tcG9uZW50KSwgX2NsYXNzLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQyLCBfdGVtcDtcbn07XG52YXIgQXN5bmMgPSBtYWtlQXN5bmNTZWxlY3QobWFuYWdlU3RhdGUoU2VsZWN0KSk7XG5cbnZhciBjb21wYXJlT3B0aW9uID0gZnVuY3Rpb24gY29tcGFyZU9wdGlvbigpIHtcbiAgdmFyIGlucHV0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICB2YXIgb3B0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gIHZhciBjYW5kaWRhdGUgPSBTdHJpbmcoaW5wdXRWYWx1ZSkudG9Mb3dlckNhc2UoKTtcbiAgdmFyIG9wdGlvblZhbHVlID0gU3RyaW5nKG9wdGlvbi52YWx1ZSkudG9Mb3dlckNhc2UoKTtcbiAgdmFyIG9wdGlvbkxhYmVsID0gU3RyaW5nKG9wdGlvbi5sYWJlbCkudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIG9wdGlvblZhbHVlID09PSBjYW5kaWRhdGUgfHwgb3B0aW9uTGFiZWwgPT09IGNhbmRpZGF0ZTtcbn07XG5cbnZhciBidWlsdGlucyA9IHtcbiAgZm9ybWF0Q3JlYXRlTGFiZWw6IGZ1bmN0aW9uIGZvcm1hdENyZWF0ZUxhYmVsKGlucHV0VmFsdWUpIHtcbiAgICByZXR1cm4gJ0NyZWF0ZSBcIicgKyBpbnB1dFZhbHVlICsgJ1wiJztcbiAgfSxcbiAgaXNWYWxpZE5ld09wdGlvbjogZnVuY3Rpb24gaXNWYWxpZE5ld09wdGlvbihpbnB1dFZhbHVlLCBzZWxlY3RWYWx1ZSwgc2VsZWN0T3B0aW9ucykge1xuICAgIHJldHVybiAhKCFpbnB1dFZhbHVlIHx8IHNlbGVjdFZhbHVlLnNvbWUoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgcmV0dXJuIGNvbXBhcmVPcHRpb24oaW5wdXRWYWx1ZSwgb3B0aW9uKTtcbiAgICB9KSB8fCBzZWxlY3RPcHRpb25zLnNvbWUoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgcmV0dXJuIGNvbXBhcmVPcHRpb24oaW5wdXRWYWx1ZSwgb3B0aW9uKTtcbiAgICB9KSk7XG4gIH0sXG4gIGdldE5ld09wdGlvbkRhdGE6IGZ1bmN0aW9uIGdldE5ld09wdGlvbkRhdGEoaW5wdXRWYWx1ZSwgb3B0aW9uTGFiZWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWw6IG9wdGlvbkxhYmVsLFxuICAgICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICBfX2lzTmV3X186IHRydWVcbiAgICB9O1xuICB9XG59O1xuXG52YXIgZGVmYXVsdFByb3BzJDMgPSBfZXh0ZW5kcyh7XG4gIGFsbG93Q3JlYXRlV2hpbGVMb2FkaW5nOiBmYWxzZSxcbiAgY3JlYXRlT3B0aW9uUG9zaXRpb246ICdsYXN0J1xufSwgYnVpbHRpbnMpO1xuXG52YXIgbWFrZUNyZWF0YWJsZVNlbGVjdCA9IGZ1bmN0aW9uIG1ha2VDcmVhdGFibGVTZWxlY3QoU2VsZWN0Q29tcG9uZW50KSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgaW5oZXJpdHMoQ3JlYXRhYmxlLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIENyZWF0YWJsZShwcm9wcykge1xuICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ3JlYXRhYmxlKTtcblxuICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ3JlYXRhYmxlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ3JlYXRhYmxlKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICBfdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGdldE5ld09wdGlvbkRhdGEgPSBfdGhpcyRwcm9wcy5nZXROZXdPcHRpb25EYXRhLFxuICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzLmlucHV0VmFsdWUsXG4gICAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHMuaXNNdWx0aSxcbiAgICAgICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHMub25DaGFuZ2UsXG4gICAgICAgICAgICBvbkNyZWF0ZU9wdGlvbiA9IF90aGlzJHByb3BzLm9uQ3JlYXRlT3B0aW9uLFxuICAgICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wcy52YWx1ZTtcblxuICAgICAgICBpZiAoYWN0aW9uTWV0YS5hY3Rpb24gIT09ICdzZWxlY3Qtb3B0aW9uJykge1xuICAgICAgICAgIHJldHVybiBvbkNoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld09wdGlvbiA9IF90aGlzLnN0YXRlLm5ld09wdGlvbjtcblxuICAgICAgICB2YXIgdmFsdWVBcnJheSA9IEFycmF5LmlzQXJyYXkobmV3VmFsdWUpID8gbmV3VmFsdWUgOiBbbmV3VmFsdWVdO1xuXG4gICAgICAgIGlmICh2YWx1ZUFycmF5W3ZhbHVlQXJyYXkubGVuZ3RoIC0gMV0gPT09IG5ld09wdGlvbikge1xuICAgICAgICAgIGlmIChvbkNyZWF0ZU9wdGlvbikgb25DcmVhdGVPcHRpb24oaW5wdXRWYWx1ZSk7ZWxzZSB7XG4gICAgICAgICAgICB2YXIgbmV3T3B0aW9uRGF0YSA9IGdldE5ld09wdGlvbkRhdGEoaW5wdXRWYWx1ZSwgaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICB2YXIgbmV3QWN0aW9uTWV0YSA9IHsgYWN0aW9uOiAnY3JlYXRlLW9wdGlvbicgfTtcbiAgICAgICAgICAgIGlmIChpc011bHRpKSB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKFtdLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShjbGVhblZhbHVlKHZhbHVlKSksIFtuZXdPcHRpb25EYXRhXSksIG5ld0FjdGlvbk1ldGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb25DaGFuZ2UobmV3T3B0aW9uRGF0YSwgbmV3QWN0aW9uTWV0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBvbkNoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMgfHwgW107XG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgbmV3T3B0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgIH07XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoQ3JlYXRhYmxlLCBbe1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdmFyIGFsbG93Q3JlYXRlV2hpbGVMb2FkaW5nID0gbmV4dFByb3BzLmFsbG93Q3JlYXRlV2hpbGVMb2FkaW5nLFxuICAgICAgICAgICAgY3JlYXRlT3B0aW9uUG9zaXRpb24gPSBuZXh0UHJvcHMuY3JlYXRlT3B0aW9uUG9zaXRpb24sXG4gICAgICAgICAgICBmb3JtYXRDcmVhdGVMYWJlbCA9IG5leHRQcm9wcy5mb3JtYXRDcmVhdGVMYWJlbCxcbiAgICAgICAgICAgIGdldE5ld09wdGlvbkRhdGEgPSBuZXh0UHJvcHMuZ2V0TmV3T3B0aW9uRGF0YSxcbiAgICAgICAgICAgIGlucHV0VmFsdWUgPSBuZXh0UHJvcHMuaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgIGlzTG9hZGluZyA9IG5leHRQcm9wcy5pc0xvYWRpbmcsXG4gICAgICAgICAgICBpc1ZhbGlkTmV3T3B0aW9uID0gbmV4dFByb3BzLmlzVmFsaWROZXdPcHRpb24sXG4gICAgICAgICAgICB2YWx1ZSA9IG5leHRQcm9wcy52YWx1ZTtcblxuICAgICAgICB2YXIgb3B0aW9ucyA9IG5leHRQcm9wcy5vcHRpb25zIHx8IFtdO1xuICAgICAgICB2YXIgbmV3T3B0aW9uID0gdGhpcy5zdGF0ZS5uZXdPcHRpb247XG5cbiAgICAgICAgaWYgKGlzVmFsaWROZXdPcHRpb24oaW5wdXRWYWx1ZSwgY2xlYW5WYWx1ZSh2YWx1ZSksIG9wdGlvbnMpKSB7XG4gICAgICAgICAgbmV3T3B0aW9uID0gZ2V0TmV3T3B0aW9uRGF0YShpbnB1dFZhbHVlLCBmb3JtYXRDcmVhdGVMYWJlbChpbnB1dFZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3T3B0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG5ld09wdGlvbjogbmV3T3B0aW9uLFxuICAgICAgICAgIG9wdGlvbnM6IChhbGxvd0NyZWF0ZVdoaWxlTG9hZGluZyB8fCAhaXNMb2FkaW5nKSAmJiBuZXdPcHRpb24gPyBjcmVhdGVPcHRpb25Qb3NpdGlvbiA9PT0gJ2ZpcnN0JyA/IFtuZXdPcHRpb25dLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShvcHRpb25zKSkgOiBbXS5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkob3B0aW9ucyksIFtuZXdPcHRpb25dKSA6IG9wdGlvbnNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZm9jdXMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgICB0aGlzLnNlbGVjdC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2JsdXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHByb3BzID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcy5wcm9wcywgW10pO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMuc3RhdGUub3B0aW9ucztcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKF9yZWYpIHtcbiAgICAgICAgICAgIF90aGlzMi5zZWxlY3QgPSBfcmVmO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBDcmVhdGFibGU7XG4gIH0oQ29tcG9uZW50KSwgX2NsYXNzLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQzLCBfdGVtcDtcbn07XG52YXIgQ3JlYXRhYmxlID0gbWFuYWdlU3RhdGUobWFrZUNyZWF0YWJsZVNlbGVjdChTZWxlY3QpKTtcblxudmFyIEFzeW5jQ3JlYXRhYmxlID0gbWFrZUFzeW5jU2VsZWN0KG1hbmFnZVN0YXRlKG1ha2VDcmVhdGFibGVTZWxlY3QoU2VsZWN0KSkpO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZhZGUgVHJhbnNpdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBGYWRlID0gZnVuY3Rpb24gRmFkZShfcmVmKSB7XG4gIHZhciBUYWcgPSBfcmVmLmNvbXBvbmVudCxcbiAgICAgIF9yZWYkZHVyYXRpb24gPSBfcmVmLmR1cmF0aW9uLFxuICAgICAgZHVyYXRpb24gPSBfcmVmJGR1cmF0aW9uID09PSB1bmRlZmluZWQgPyAxIDogX3JlZiRkdXJhdGlvbixcbiAgICAgIGluUHJvcCA9IF9yZWYuaW4sXG4gICAgICBvbkV4aXRlZCA9IF9yZWYub25FeGl0ZWQsXG4gICAgICBwcm9wcyA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY29tcG9uZW50JywgJ2R1cmF0aW9uJywgJ2luJywgJ29uRXhpdGVkJ10pO1xuXG4gIHZhciB0cmFuc2l0aW9uID0ge1xuICAgIGVudGVyaW5nOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBlbnRlcmVkOiB7IG9wYWNpdHk6IDEsIHRyYW5zaXRpb246ICdvcGFjaXR5ICcgKyBkdXJhdGlvbiArICdtcycgfSxcbiAgICBleGl0aW5nOiB7IG9wYWNpdHk6IDAgfSxcbiAgICBleGl0ZWQ6IHsgb3BhY2l0eTogMCB9XG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgVHJhbnNpdGlvbixcbiAgICB7IG1vdW50T25FbnRlcjogdHJ1ZSwgdW5tb3VudE9uRXhpdDogdHJ1ZSwgJ2luJzogaW5Qcm9wLCB0aW1lb3V0OiBkdXJhdGlvbiB9LFxuICAgIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgdmFyIGlubmVyUHJvcHMgPSB7XG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgdHJhbnNpdGlvbltzdGF0ZV0pXG4gICAgICB9O1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7IGlubmVyUHJvcHM6IGlubmVyUHJvcHMgfSwgcHJvcHMpKTtcbiAgICB9XG4gICk7XG59O1xudmFyIGNvbGxhcHNlRHVyYXRpb24gPSAyNjA7XG5cbi8vIHdyYXAgZWFjaCBNdWx0aVZhbHVlIHdpdGggYSBjb2xsYXBzZSB0cmFuc2l0aW9uOyBkZWNyZWFzZXMgd2lkdGggdW50aWxcbi8vIGZpbmFsbHkgcmVtb3ZpbmcgZnJvbSBET01cbnZhciBDb2xsYXBzZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIGluaGVyaXRzKENvbGxhcHNlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb2xsYXBzZSgpIHtcbiAgICB2YXIgX3JlZjI7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sbGFwc2UpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmMiA9IENvbGxhcHNlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29sbGFwc2UpKS5jYWxsLmFwcGx5KF9yZWYyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuZHVyYXRpb24gPSBjb2xsYXBzZUR1cmF0aW9uLCBfdGhpcy5zdGF0ZSA9IHsgd2lkdGg6ICdhdXRvJyB9LCBfdGhpcy50cmFuc2l0aW9uID0ge1xuICAgICAgZXhpdGluZzogeyB3aWR0aDogMCwgdHJhbnNpdGlvbjogJ3dpZHRoICcgKyBfdGhpcy5kdXJhdGlvbiArICdtcyBlYXNlLW91dCcgfSxcbiAgICAgIGV4aXRlZDogeyB3aWR0aDogMCB9XG4gICAgfSwgX3RoaXMuZ2V0V2lkdGggPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBpZiAocmVmICYmIGlzTmFOKF90aGlzLnN0YXRlLndpZHRoKSkge1xuICAgICAgICAvKlxuICAgICAgICAgIEhlcmUgd2UncmUgaW52b2tpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHdpdGggYSBjYWxsYmFjayBpbnZva2luZyBvdXJcbiAgICAgICAgICBjYWxsIHRvIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBhbmQgc2V0U3RhdGUgaW4gb3JkZXIgdG8gcmVzb2x2ZSBhbiBlZGdlIGNhc2VcbiAgICAgICAgICBhcm91bmQgcG9ydGFsbGluZy4gQ2VydGFpbiBwb3J0YWxsaW5nIHNvbHV0aW9ucyBicmllZmx5IHJlbW92ZSBjaGlsZHJlbiBmcm9tIHRoZSBET01cbiAgICAgICAgICBiZWZvcmUgYXBwZW5kaW5nIHRoZW0gdG8gdGhlIHRhcmdldCBub2RlLiBUaGlzIGlzIHRvIGF2b2lkIHVzIHRyeWluZyB0byBjYWxsIGdldEJvdW5kaW5nQ2xpZW50cmVjdFxuICAgICAgICAgIHdoaWxlIHRoZSBTZWxlY3QgY29tcG9uZW50IGlzIGluIHRoaXMgc3RhdGUuXG4gICAgICAgICovXG4gICAgICAgIC8vIGNhbm5vdCB1c2UgYG9mZnNldFdpZHRoYCBiZWNhdXNlIGl0IGlzIHJvdW5kZWRcbiAgICAgICAgX3RoaXMucmFmSUQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgX3JlZiRnZXRCb3VuZGluZ0NsaWVuID0gcmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICB3aWR0aCA9IF9yZWYkZ2V0Qm91bmRpbmdDbGllbi53aWR0aDtcblxuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgd2lkdGg6IHdpZHRoIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5nZXRTdHlsZSA9IGZ1bmN0aW9uICh3aWR0aCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoXG4gICAgICB9O1xuICAgIH0sIF90aGlzLmdldFRyYW5zaXRpb24gPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBfdGhpcy50cmFuc2l0aW9uW3N0YXRlXTtcbiAgICB9LCBfdGVtcCksIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoQ29sbGFwc2UsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnJhZklEKSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZklEKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB3aWR0aCBtdXN0IGJlIGNhbGN1bGF0ZWQ7IGNhbm5vdCB0cmFuc2l0aW9uIGZyb20gYHVuZGVmaW5lZGAgdG8gYG51bWJlcmBcblxuXG4gICAgLy8gZ2V0IGJhc2Ugc3R5bGVzXG5cblxuICAgIC8vIGdldCB0cmFuc2l0aW9uIHN0eWxlc1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgaW5Qcm9wID0gX3Byb3BzLmluO1xuICAgICAgdmFyIHdpZHRoID0gdGhpcy5zdGF0ZS53aWR0aDtcblxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgVHJhbnNpdGlvbixcbiAgICAgICAge1xuICAgICAgICAgIGVudGVyOiBmYWxzZSxcbiAgICAgICAgICBtb3VudE9uRW50ZXI6IHRydWUsXG4gICAgICAgICAgdW5tb3VudE9uRXhpdDogdHJ1ZSxcbiAgICAgICAgICAnaW4nOiBpblByb3AsXG4gICAgICAgICAgdGltZW91dDogdGhpcy5kdXJhdGlvblxuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICB2YXIgc3R5bGUgPSBfZXh0ZW5kcyh7fSwgX3RoaXMyLmdldFN0eWxlKHdpZHRoKSwgX3RoaXMyLmdldFRyYW5zaXRpb24oc3RhdGUpKTtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyByZWY6IF90aGlzMi5nZXRXaWR0aCwgc3R5bGU6IHN0eWxlIH0sXG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDb2xsYXBzZTtcbn0oQ29tcG9uZW50KTtcblxuLy8gc3RyaXAgdHJhbnNpdGlvbiBwcm9wcyBvZmYgYmVmb3JlIHNwcmVhZGluZyBvbnRvIHNlbGVjdCBjb21wb25lbnRcbi8vIG5vdGUgd2UgbmVlZCB0byBiZSBleHBsaWNpdCBhYm91dCBpbm5lclJlZiBmb3IgZmxvd1xudmFyIEFuaW1hdGVkSW5wdXQgPSBmdW5jdGlvbiBBbmltYXRlZElucHV0KFdyYXBwZWRDb21wb25lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGluUHJvcCA9IF9yZWYuaW4sXG4gICAgICAgIG9uRXhpdGVkID0gX3JlZi5vbkV4aXRlZCxcbiAgICAgICAgYXBwZWFyID0gX3JlZi5hcHBlYXIsXG4gICAgICAgIGVudGVyID0gX3JlZi5lbnRlcixcbiAgICAgICAgZXhpdCA9IF9yZWYuZXhpdCxcbiAgICAgICAgaW5uZXJSZWYgPSBfcmVmLmlubmVyUmVmLFxuICAgICAgICBwcm9wcyA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnaW4nLCAnb25FeGl0ZWQnLCAnYXBwZWFyJywgJ2VudGVyJywgJ2V4aXQnLCAnaW5uZXJSZWYnXSk7XG4gICAgcmV0dXJuIChcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX2V4dGVuZHMoeyBpbm5lclJlZjogaW5uZXJSZWYgfSwgcHJvcHMpKVxuICAgICk7XG4gIH07XG59O1xuXG4vLyBzdHJpcCB0cmFuc2l0aW9uIHByb3BzIG9mZiBiZWZvcmUgc3ByZWFkaW5nIG9udG8gYWN0dWFsIGNvbXBvbmVudFxuXG5cbnZhciBBbmltYXRlZE11bHRpVmFsdWUgPSBmdW5jdGlvbiBBbmltYXRlZE11bHRpVmFsdWUoV3JhcHBlZENvbXBvbmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgaW5Qcm9wID0gX3JlZi5pbixcbiAgICAgICAgb25FeGl0ZWQgPSBfcmVmLm9uRXhpdGVkLFxuICAgICAgICBwcm9wcyA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnaW4nLCAnb25FeGl0ZWQnXSk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb2xsYXBzZSxcbiAgICAgIHsgJ2luJzogaW5Qcm9wLCBvbkV4aXRlZDogb25FeGl0ZWQgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX2V4dGVuZHMoeyBjcm9wV2l0aEVsbGlwc2lzOiBpblByb3AgfSwgcHJvcHMpKVxuICAgICk7XG4gIH07XG59O1xuXG4vLyBmYWRlIGluIHdoZW4gbGFzdCBtdWx0aS12YWx1ZSByZW1vdmVkLCBvdGhlcndpc2UgaW5zdGFudFxudmFyIEFuaW1hdGVkUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiBBbmltYXRlZFBsYWNlaG9sZGVyKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEZhZGUsIF9leHRlbmRzKHtcbiAgICAgIGNvbXBvbmVudDogV3JhcHBlZENvbXBvbmVudCxcbiAgICAgIGR1cmF0aW9uOiBwcm9wcy5pc011bHRpID8gY29sbGFwc2VEdXJhdGlvbiA6IDFcbiAgICB9LCBwcm9wcykpO1xuICB9O1xufTtcblxuLy8gaW5zdGFudCBmYWRlOyBhbGwgdHJhbnNpdGlvbi1ncm91cCBjaGlsZHJlbiBtdXN0IGJlIHRyYW5zaXRpb25zXG5cbnZhciBBbmltYXRlZFNpbmdsZVZhbHVlID0gZnVuY3Rpb24gQW5pbWF0ZWRTaW5nbGVWYWx1ZShXcmFwcGVkQ29tcG9uZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChGYWRlLCBfZXh0ZW5kcyh7IGNvbXBvbmVudDogV3JhcHBlZENvbXBvbmVudCB9LCBwcm9wcykpO1xuICB9O1xufTtcblxuLy8gbWFrZSBWYWx1ZUNvbnRhaW5lciBhIHRyYW5zaXRpb24gZ3JvdXBcbnZhciBBbmltYXRlZFZhbHVlQ29udGFpbmVyID0gZnVuY3Rpb24gQW5pbWF0ZWRWYWx1ZUNvbnRhaW5lcihXcmFwcGVkQ29tcG9uZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXAsIF9leHRlbmRzKHsgY29tcG9uZW50OiBXcmFwcGVkQ29tcG9uZW50IH0sIHByb3BzKSk7XG4gIH07XG59O1xuXG52YXIgbWFrZUFuaW1hdGVkID0gZnVuY3Rpb24gbWFrZUFuaW1hdGVkKGV4dGVybmFsQ29tcG9uZW50cykge1xuICB2YXIgY29tcG9uZW50cyQkMSA9IGRlZmF1bHRDb21wb25lbnRzKHsgY29tcG9uZW50czogZXh0ZXJuYWxDb21wb25lbnRzIH0pO1xuICB2YXIgSW5wdXQgPSBjb21wb25lbnRzJCQxLklucHV0LFxuICAgICAgTXVsdGlWYWx1ZSA9IGNvbXBvbmVudHMkJDEuTXVsdGlWYWx1ZSxcbiAgICAgIFBsYWNlaG9sZGVyID0gY29tcG9uZW50cyQkMS5QbGFjZWhvbGRlcixcbiAgICAgIFNpbmdsZVZhbHVlID0gY29tcG9uZW50cyQkMS5TaW5nbGVWYWx1ZSxcbiAgICAgIFZhbHVlQ29udGFpbmVyID0gY29tcG9uZW50cyQkMS5WYWx1ZUNvbnRhaW5lcixcbiAgICAgIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyhjb21wb25lbnRzJCQxLCBbJ0lucHV0JywgJ011bHRpVmFsdWUnLCAnUGxhY2Vob2xkZXInLCAnU2luZ2xlVmFsdWUnLCAnVmFsdWVDb250YWluZXInXSk7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBJbnB1dDogQW5pbWF0ZWRJbnB1dChJbnB1dCksXG4gICAgTXVsdGlWYWx1ZTogQW5pbWF0ZWRNdWx0aVZhbHVlKE11bHRpVmFsdWUpLFxuICAgIFBsYWNlaG9sZGVyOiBBbmltYXRlZFBsYWNlaG9sZGVyKFBsYWNlaG9sZGVyKSxcbiAgICBTaW5nbGVWYWx1ZTogQW5pbWF0ZWRTaW5nbGVWYWx1ZShTaW5nbGVWYWx1ZSksXG4gICAgVmFsdWVDb250YWluZXI6IEFuaW1hdGVkVmFsdWVDb250YWluZXIoVmFsdWVDb250YWluZXIpXG4gIH0sIHJlc3QpO1xufTtcblxudmFyIEFuaW1hdGVkQ29tcG9uZW50cyA9IG1ha2VBbmltYXRlZCgpO1xuXG52YXIgSW5wdXQkMSA9IEFuaW1hdGVkQ29tcG9uZW50cy5JbnB1dDtcbnZhciBNdWx0aVZhbHVlJDEgPSBBbmltYXRlZENvbXBvbmVudHMuTXVsdGlWYWx1ZTtcbnZhciBQbGFjZWhvbGRlciQxID0gQW5pbWF0ZWRDb21wb25lbnRzLlBsYWNlaG9sZGVyO1xudmFyIFNpbmdsZVZhbHVlJDEgPSBBbmltYXRlZENvbXBvbmVudHMuU2luZ2xlVmFsdWU7XG52YXIgVmFsdWVDb250YWluZXIkMSA9IEFuaW1hdGVkQ29tcG9uZW50cy5WYWx1ZUNvbnRhaW5lcjtcblxudmFyIGluZGV4ID0gbWVtb2l6ZU9uZShtYWtlQW5pbWF0ZWQsIGV4cG9ydGVkRXF1YWwpO1xuXG52YXIgaW5kZXgkMSA9IG1hbmFnZVN0YXRlKFNlbGVjdCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4JDE7XG5leHBvcnQgeyBTZWxlY3QgYXMgU2VsZWN0QmFzZSwgQXN5bmMsIEFzeW5jQ3JlYXRhYmxlLCBDcmVhdGFibGUsIGNyZWF0ZUZpbHRlciwgaW5kZXggYXMgbWFrZUFuaW1hdGVkLCBjb21wb25lbnRzLCBtZXJnZVN0eWxlcywgZGVmYXVsdFRoZW1lIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9DU1NUcmFuc2l0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9DU1NUcmFuc2l0aW9uXCIpKTtcblxudmFyIF9SZXBsYWNlVHJhbnNpdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUmVwbGFjZVRyYW5zaXRpb25cIikpO1xuXG52YXIgX1RyYW5zaXRpb25Hcm91cCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVHJhbnNpdGlvbkdyb3VwXCIpKTtcblxudmFyIF9UcmFuc2l0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9UcmFuc2l0aW9uXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFRyYW5zaXRpb246IF9UcmFuc2l0aW9uLmRlZmF1bHQsXG4gIFRyYW5zaXRpb25Hcm91cDogX1RyYW5zaXRpb25Hcm91cC5kZWZhdWx0LFxuICBSZXBsYWNlVHJhbnNpdGlvbjogX1JlcGxhY2VUcmFuc2l0aW9uLmRlZmF1bHQsXG4gIENTU1RyYW5zaXRpb246IF9DU1NUcmFuc2l0aW9uLmRlZmF1bHRcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfYWRkQ2xhc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJkb20taGVscGVycy9jbGFzcy9hZGRDbGFzc1wiKSk7XG5cbnZhciBfcmVtb3ZlQ2xhc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJkb20taGVscGVycy9jbGFzcy9yZW1vdmVDbGFzc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfVHJhbnNpdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVHJhbnNpdGlvblwiKSk7XG5cbnZhciBfUHJvcFR5cGVzID0gcmVxdWlyZShcIi4vdXRpbHMvUHJvcFR5cGVzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbiBhZGRDbGFzcyhub2RlLCBjbGFzc2VzKSB7XG4gIHJldHVybiBub2RlICYmIGNsYXNzZXMgJiYgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gKDAsIF9hZGRDbGFzcy5kZWZhdWx0KShub2RlLCBjKTtcbiAgfSk7XG59O1xuXG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhub2RlLCBjbGFzc2VzKSB7XG4gIHJldHVybiBub2RlICYmIGNsYXNzZXMgJiYgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gKDAsIF9yZW1vdmVDbGFzcy5kZWZhdWx0KShub2RlLCBjKTtcbiAgfSk7XG59O1xuLyoqXG4gKiBBIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgdXNpbmcgQ1NTIHRyYW5zaXRpb25zIGFuZCBhbmltYXRpb25zLlxuICogSXQncyBpbnNwaXJlZCBieSB0aGUgZXhjZWxsZW50IFtuZy1hbmltYXRlXShodHRwOi8vd3d3Lm5nYW5pbWF0ZS5vcmcvKSBsaWJyYXJ5LlxuICpcbiAqIGBDU1NUcmFuc2l0aW9uYCBhcHBsaWVzIGEgcGFpciBvZiBjbGFzcyBuYW1lcyBkdXJpbmcgdGhlIGBhcHBlYXJgLCBgZW50ZXJgLFxuICogYW5kIGBleGl0YCBzdGFnZXMgb2YgdGhlIHRyYW5zaXRpb24uIFRoZSBmaXJzdCBjbGFzcyBpcyBhcHBsaWVkIGFuZCB0aGVuIGFcbiAqIHNlY29uZCBcImFjdGl2ZVwiIGNsYXNzIGluIG9yZGVyIHRvIGFjdGl2YXRlIHRoZSBjc3MgYW5pbWF0aW9uLiBBZnRlciB0aGUgYW5pbWF0aW9uLFxuICogbWF0Y2hpbmcgYGRvbmVgIGNsYXNzIG5hbWVzIGFyZSBhcHBsaWVkIHRvIHBlcnNpc3QgdGhlIGFuaW1hdGlvbiBzdGF0ZS5cbiAqXG4gKiBXaGVuIHRoZSBgaW5gIHByb3AgaXMgdG9nZ2xlZCB0byBgdHJ1ZWAgdGhlIENvbXBvbmVudCB3aWxsIGdldFxuICogdGhlIGBleGFtcGxlLWVudGVyYCBDU1MgY2xhc3MgYW5kIHRoZSBgZXhhbXBsZS1lbnRlci1hY3RpdmVgIENTUyBjbGFzc1xuICogYWRkZWQgaW4gdGhlIG5leHQgdGljay4gVGhpcyBpcyBhIGNvbnZlbnRpb24gYmFzZWQgb24gdGhlIGBjbGFzc05hbWVzYCBwcm9wLlxuICovXG5cblxudmFyIENTU1RyYW5zaXRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQ1NTVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ1NTVHJhbnNpdGlvbigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcblxuICAgIF90aGlzLm9uRW50ZXIgPSBmdW5jdGlvbiAobm9kZSwgYXBwZWFyaW5nKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lcyA9IF90aGlzLmdldENsYXNzTmFtZXMoYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInKSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzLmNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZXhpdCcpO1xuXG4gICAgICBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRW50ZXJpbmcgPSBmdW5jdGlvbiAobm9kZSwgYXBwZWFyaW5nKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczIgPSBfdGhpcy5nZXRDbGFzc05hbWVzKGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJyksXG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczIuYWN0aXZlQ2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZWZsb3dBbmRBZGRDbGFzcyhub2RlLCBhY3RpdmVDbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcmluZykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyaW5nKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRW50ZXJlZCA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzMyA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2VudGVyJyksXG4gICAgICAgICAgZG9uZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXMzLmRvbmVDbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInKTtcblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyZWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcmVkKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczQgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCdleGl0JyksXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczQuY2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdhcHBlYXInKTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZW50ZXInKTtcblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXQobm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdGluZyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczUgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCdleGl0JyksXG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczUuYWN0aXZlQ2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZWZsb3dBbmRBZGRDbGFzcyhub2RlLCBhY3RpdmVDbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0aW5nKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdGluZyhub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0ZWQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXM2ID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZXhpdCcpLFxuICAgICAgICAgIGRvbmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNi5kb25lQ2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdleGl0Jyk7XG5cbiAgICAgIGFkZENsYXNzKG5vZGUsIGRvbmVDbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0ZWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmdldENsYXNzTmFtZXMgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgdmFyIGNsYXNzTmFtZXMgPSBfdGhpcy5wcm9wcy5jbGFzc05hbWVzO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IHR5cGVvZiBjbGFzc05hbWVzICE9PSAnc3RyaW5nJyA/IGNsYXNzTmFtZXNbdHlwZV0gOiBjbGFzc05hbWVzICsgJy0nICsgdHlwZTtcbiAgICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSB0eXBlb2YgY2xhc3NOYW1lcyAhPT0gJ3N0cmluZycgPyBjbGFzc05hbWVzW3R5cGUgKyAnQWN0aXZlJ10gOiBjbGFzc05hbWUgKyAnLWFjdGl2ZSc7XG4gICAgICB2YXIgZG9uZUNsYXNzTmFtZSA9IHR5cGVvZiBjbGFzc05hbWVzICE9PSAnc3RyaW5nJyA/IGNsYXNzTmFtZXNbdHlwZSArICdEb25lJ10gOiBjbGFzc05hbWUgKyAnLWRvbmUnO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGFjdGl2ZUNsYXNzTmFtZTogYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICBkb25lQ2xhc3NOYW1lOiBkb25lQ2xhc3NOYW1lXG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ1NTVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbW92ZUNsYXNzZXMgPSBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKG5vZGUsIHR5cGUpIHtcbiAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczcgPSB0aGlzLmdldENsYXNzTmFtZXModHlwZSksXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM3LmNsYXNzTmFtZSxcbiAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczcuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICBkb25lQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczcuZG9uZUNsYXNzTmFtZTtcblxuICAgIGNsYXNzTmFtZSAmJiByZW1vdmVDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuICAgIGFjdGl2ZUNsYXNzTmFtZSAmJiByZW1vdmVDbGFzcyhub2RlLCBhY3RpdmVDbGFzc05hbWUpO1xuICAgIGRvbmVDbGFzc05hbWUgJiYgcmVtb3ZlQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlZmxvd0FuZEFkZENsYXNzID0gZnVuY3Rpb24gcmVmbG93QW5kQWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgLy8gVGhpcyBpcyBmb3IgdG8gZm9yY2UgYSByZXBhaW50LFxuICAgIC8vIHdoaWNoIGlzIG5lY2Vzc2FyeSBpbiBvcmRlciB0byB0cmFuc2l0aW9uIHN0eWxlcyB3aGVuIGFkZGluZyBhIGNsYXNzIG5hbWUuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgICBub2RlICYmIG5vZGUuc2Nyb2xsVG9wO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG5cbiAgICBkZWxldGUgcHJvcHMuY2xhc3NOYW1lcztcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVHJhbnNpdGlvbi5kZWZhdWx0LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIG9uRW50ZXI6IHRoaXMub25FbnRlcixcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5vbkVudGVyZWQsXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLm9uRW50ZXJpbmcsXG4gICAgICBvbkV4aXQ6IHRoaXMub25FeGl0LFxuICAgICAgb25FeGl0aW5nOiB0aGlzLm9uRXhpdGluZyxcbiAgICAgIG9uRXhpdGVkOiB0aGlzLm9uRXhpdGVkXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBDU1NUcmFuc2l0aW9uO1xufShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5DU1NUcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IF9leHRlbmRzKHt9LCBfVHJhbnNpdGlvbi5kZWZhdWx0LnByb3BUeXBlcywge1xuICAvKipcbiAgICogVGhlIGFuaW1hdGlvbiBjbGFzc05hbWVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBhcyBpdCBlbnRlcnMsIGV4aXRzIG9yIGhhcyBmaW5pc2hlZCB0aGUgdHJhbnNpdGlvbi5cbiAgICogQSBzaW5nbGUgbmFtZSBjYW4gYmUgcHJvdmlkZWQgYW5kIGl0IHdpbGwgYmUgc3VmZml4ZWQgZm9yIGVhY2ggc3RhZ2U6IGUuZy5cbiAgICpcbiAgICogYGNsYXNzTmFtZXM9XCJmYWRlXCJgIGFwcGxpZXMgYGZhZGUtZW50ZXJgLCBgZmFkZS1lbnRlci1hY3RpdmVgLCBgZmFkZS1lbnRlci1kb25lYCxcbiAgICogYGZhZGUtZXhpdGAsIGBmYWRlLWV4aXQtYWN0aXZlYCwgYGZhZGUtZXhpdC1kb25lYCwgYGZhZGUtYXBwZWFyYCwgYW5kIGBmYWRlLWFwcGVhci1hY3RpdmVgLlxuICAgKiBFYWNoIGluZGl2aWR1YWwgY2xhc3NOYW1lcyBjYW4gYWxzbyBiZSBzcGVjaWZpZWQgaW5kZXBlbmRlbnRseSBsaWtlOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjbGFzc05hbWVzPXt7XG4gICAqICBhcHBlYXI6ICdteS1hcHBlYXInLFxuICAgKiAgYXBwZWFyQWN0aXZlOiAnbXktYWN0aXZlLWFwcGVhcicsXG4gICAqICBlbnRlcjogJ215LWVudGVyJyxcbiAgICogIGVudGVyQWN0aXZlOiAnbXktYWN0aXZlLWVudGVyJyxcbiAgICogIGVudGVyRG9uZTogJ215LWRvbmUtZW50ZXInLFxuICAgKiAgZXhpdDogJ215LWV4aXQnLFxuICAgKiAgZXhpdEFjdGl2ZTogJ215LWFjdGl2ZS1leGl0JyxcbiAgICogIGV4aXREb25lOiAnbXktZG9uZS1leGl0JyxcbiAgICogfX1cbiAgICogYGBgXG4gICAqXG4gICAqIElmIHlvdSB3YW50IHRvIHNldCB0aGVzZSBjbGFzc2VzIHVzaW5nIENTUyBNb2R1bGVzOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmNzcyc7XG4gICAqIGBgYFxuICAgKlxuICAgKiB5b3UgbWlnaHQgd2FudCB0byB1c2UgY2FtZWxDYXNlIGluIHlvdXIgQ1NTIGZpbGUsIHRoYXQgd2F5IGNvdWxkIHNpbXBseSBzcHJlYWRcbiAgICogdGhlbSBpbnN0ZWFkIG9mIGxpc3RpbmcgdGhlbSBvbmUgYnkgb25lOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjbGFzc05hbWVzPXt7IC4uLnN0eWxlcyB9fVxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge3N0cmluZyB8IHtcbiAgICogIGFwcGVhcj86IHN0cmluZyxcbiAgICogIGFwcGVhckFjdGl2ZT86IHN0cmluZyxcbiAgICogIGVudGVyPzogc3RyaW5nLFxuICAgKiAgZW50ZXJBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBlbnRlckRvbmU/OiBzdHJpbmcsXG4gICAqICBleGl0Pzogc3RyaW5nLFxuICAgKiAgZXhpdEFjdGl2ZT86IHN0cmluZyxcbiAgICogIGV4aXREb25lPzogc3RyaW5nLFxuICAgKiB9fVxuICAgKi9cbiAgY2xhc3NOYW1lczogX1Byb3BUeXBlcy5jbGFzc05hbWVzU2hhcGUsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlcicgb3IgJ2FwcGVhcicgY2xhc3MgaXNcbiAgICogYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlci1hY3RpdmUnIG9yXG4gICAqICdhcHBlYXItYWN0aXZlJyBjbGFzcyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyJyBvclxuICAgKiAnYXBwZWFyJyBjbGFzc2VzIGFyZSAqKnJlbW92ZWQqKiBhbmQgdGhlIGBkb25lYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIG5vZGUuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0JyBjbGFzcyBpc1xuICAgKiBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudClcbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0LWFjdGl2ZScgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdCcgY2xhc3Nlc1xuICAgKiBhcmUgKipyZW1vdmVkKiogYW5kIHRoZSBgZXhpdC1kb25lYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIG5vZGUuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jXG59KSA6IHt9O1xudmFyIF9kZWZhdWx0ID0gQ1NTVHJhbnNpdGlvbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuRVhJVElORyA9IGV4cG9ydHMuRU5URVJFRCA9IGV4cG9ydHMuRU5URVJJTkcgPSBleHBvcnRzLkVYSVRFRCA9IGV4cG9ydHMuVU5NT1VOVEVEID0gdm9pZCAwO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JlYWN0RG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIik7XG5cbnZhciBfUHJvcFR5cGVzID0gcmVxdWlyZShcIi4vdXRpbHMvUHJvcFR5cGVzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBVTk1PVU5URUQgPSAndW5tb3VudGVkJztcbmV4cG9ydHMuVU5NT1VOVEVEID0gVU5NT1VOVEVEO1xudmFyIEVYSVRFRCA9ICdleGl0ZWQnO1xuZXhwb3J0cy5FWElURUQgPSBFWElURUQ7XG52YXIgRU5URVJJTkcgPSAnZW50ZXJpbmcnO1xuZXhwb3J0cy5FTlRFUklORyA9IEVOVEVSSU5HO1xudmFyIEVOVEVSRUQgPSAnZW50ZXJlZCc7XG5leHBvcnRzLkVOVEVSRUQgPSBFTlRFUkVEO1xudmFyIEVYSVRJTkcgPSAnZXhpdGluZyc7XG4vKipcbiAqIFRoZSBUcmFuc2l0aW9uIGNvbXBvbmVudCBsZXRzIHlvdSBkZXNjcmliZSBhIHRyYW5zaXRpb24gZnJvbSBvbmUgY29tcG9uZW50XG4gKiBzdGF0ZSB0byBhbm90aGVyIF9vdmVyIHRpbWVfIHdpdGggYSBzaW1wbGUgZGVjbGFyYXRpdmUgQVBJLiBNb3N0IGNvbW1vbmx5XG4gKiBpdCdzIHVzZWQgdG8gYW5pbWF0ZSB0aGUgbW91bnRpbmcgYW5kIHVubW91bnRpbmcgb2YgYSBjb21wb25lbnQsIGJ1dCBjYW4gYWxzb1xuICogYmUgdXNlZCB0byBkZXNjcmliZSBpbi1wbGFjZSB0cmFuc2l0aW9uIHN0YXRlcyBhcyB3ZWxsLlxuICpcbiAqIEJ5IGRlZmF1bHQgdGhlIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgZG9lcyBub3QgYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHRoZVxuICogY29tcG9uZW50IGl0IHJlbmRlcnMsIGl0IG9ubHkgdHJhY2tzIFwiZW50ZXJcIiBhbmQgXCJleGl0XCIgc3RhdGVzIGZvciB0aGUgY29tcG9uZW50cy5cbiAqIEl0J3MgdXAgdG8geW91IHRvIGdpdmUgbWVhbmluZyBhbmQgZWZmZWN0IHRvIHRob3NlIHN0YXRlcy4gRm9yIGV4YW1wbGUgd2UgY2FuXG4gKiBhZGQgc3R5bGVzIHRvIGEgY29tcG9uZW50IHdoZW4gaXQgZW50ZXJzIG9yIGV4aXRzOlxuICpcbiAqIGBgYGpzeFxuICogaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJztcbiAqXG4gKiBjb25zdCBkdXJhdGlvbiA9IDMwMDtcbiAqXG4gKiBjb25zdCBkZWZhdWx0U3R5bGUgPSB7XG4gKiAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7ZHVyYXRpb259bXMgZWFzZS1pbi1vdXRgLFxuICogICBvcGFjaXR5OiAwLFxuICogfVxuICpcbiAqIGNvbnN0IHRyYW5zaXRpb25TdHlsZXMgPSB7XG4gKiAgIGVudGVyaW5nOiB7IG9wYWNpdHk6IDAgfSxcbiAqICAgZW50ZXJlZDogIHsgb3BhY2l0eTogMSB9LFxuICogfTtcbiAqXG4gKiBjb25zdCBGYWRlID0gKHsgaW46IGluUHJvcCB9KSA9PiAoXG4gKiAgIDxUcmFuc2l0aW9uIGluPXtpblByb3B9IHRpbWVvdXQ9e2R1cmF0aW9ufT5cbiAqICAgICB7KHN0YXRlKSA9PiAoXG4gKiAgICAgICA8ZGl2IHN0eWxlPXt7XG4gKiAgICAgICAgIC4uLmRlZmF1bHRTdHlsZSxcbiAqICAgICAgICAgLi4udHJhbnNpdGlvblN0eWxlc1tzdGF0ZV1cbiAqICAgICAgIH19PlxuICogICAgICAgICBJJ20gYSBmYWRlIFRyYW5zaXRpb24hXG4gKiAgICAgICA8L2Rpdj5cbiAqICAgICApfVxuICogICA8L1RyYW5zaXRpb24+XG4gKiApO1xuICogYGBgXG4gKlxuICogQXMgbm90ZWQgdGhlIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgZG9lc24ndCBfZG9fIGFueXRoaW5nIGJ5IGl0c2VsZiB0byBpdHMgY2hpbGQgY29tcG9uZW50LlxuICogV2hhdCBpdCBkb2VzIGRvIGlzIHRyYWNrIHRyYW5zaXRpb24gc3RhdGVzIG92ZXIgdGltZSBzbyB5b3UgY2FuIHVwZGF0ZSB0aGVcbiAqIGNvbXBvbmVudCAoc3VjaCBhcyBieSBhZGRpbmcgc3R5bGVzIG9yIGNsYXNzZXMpIHdoZW4gaXQgY2hhbmdlcyBzdGF0ZXMuXG4gKlxuICogVGhlcmUgYXJlIDQgbWFpbiBzdGF0ZXMgYSBUcmFuc2l0aW9uIGNhbiBiZSBpbjpcbiAqICAtIGAnZW50ZXJpbmcnYFxuICogIC0gYCdlbnRlcmVkJ2BcbiAqICAtIGAnZXhpdGluZydgXG4gKiAgLSBgJ2V4aXRlZCdgXG4gKlxuICogVHJhbnNpdGlvbiBzdGF0ZSBpcyB0b2dnbGVkIHZpYSB0aGUgYGluYCBwcm9wLiBXaGVuIGB0cnVlYCB0aGUgY29tcG9uZW50IGJlZ2lucyB0aGVcbiAqIFwiRW50ZXJcIiBzdGFnZS4gRHVyaW5nIHRoaXMgc3RhZ2UsIHRoZSBjb21wb25lbnQgd2lsbCBzaGlmdCBmcm9tIGl0cyBjdXJyZW50IHRyYW5zaXRpb24gc3RhdGUsXG4gKiB0byBgJ2VudGVyaW5nJ2AgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbiBhbmQgdGhlbiB0byB0aGUgYCdlbnRlcmVkJ2Agc3RhZ2Ugb25jZVxuICogaXQncyBjb21wbGV0ZS4gTGV0J3MgdGFrZSB0aGUgZm9sbG93aW5nIGV4YW1wbGU6XG4gKlxuICogYGBganN4XG4gKiBzdGF0ZSA9IHsgaW46IGZhbHNlIH07XG4gKlxuICogdG9nZ2xlRW50ZXJTdGF0ZSA9ICgpID0+IHtcbiAqICAgdGhpcy5zZXRTdGF0ZSh7IGluOiB0cnVlIH0pO1xuICogfVxuICpcbiAqIHJlbmRlcigpIHtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8ZGl2PlxuICogICAgICAgPFRyYW5zaXRpb24gaW49e3RoaXMuc3RhdGUuaW59IHRpbWVvdXQ9ezUwMH0gLz5cbiAqICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy50b2dnbGVFbnRlclN0YXRlfT5DbGljayB0byBFbnRlcjwvYnV0dG9uPlxuICogICAgIDwvZGl2PlxuICogICApO1xuICogfVxuICogYGBgXG4gKlxuICogV2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgdGhlIGNvbXBvbmVudCB3aWxsIHNoaWZ0IHRvIHRoZSBgJ2VudGVyaW5nJ2Agc3RhdGUgYW5kXG4gKiBzdGF5IHRoZXJlIGZvciA1MDBtcyAodGhlIHZhbHVlIG9mIGB0aW1lb3V0YCkgYmVmb3JlIGl0IGZpbmFsbHkgc3dpdGNoZXMgdG8gYCdlbnRlcmVkJ2AuXG4gKlxuICogV2hlbiBgaW5gIGlzIGBmYWxzZWAgdGhlIHNhbWUgdGhpbmcgaGFwcGVucyBleGNlcHQgdGhlIHN0YXRlIG1vdmVzIGZyb20gYCdleGl0aW5nJ2AgdG8gYCdleGl0ZWQnYC5cbiAqXG4gKiAjIyBUaW1pbmdcbiAqXG4gKiBUaW1pbmcgaXMgb2Z0ZW4gdGhlIHRyaWNraWVzdCBwYXJ0IG9mIGFuaW1hdGlvbiwgbWlzdGFrZXMgY2FuIHJlc3VsdCBpbiBzbGlnaHQgZGVsYXlzXG4gKiB0aGF0IGFyZSBoYXJkIHRvIHBpbiBkb3duLiBBIGNvbW1vbiBleGFtcGxlIGlzIHdoZW4geW91IHdhbnQgdG8gYWRkIGFuIGV4aXQgdHJhbnNpdGlvbixcbiAqIHlvdSBzaG91bGQgc2V0IHRoZSBkZXNpcmVkIGZpbmFsIHN0eWxlcyB3aGVuIHRoZSBzdGF0ZSBpcyBgJ2V4aXRpbmcnYC4gVGhhdCdzIHdoZW4gdGhlXG4gKiB0cmFuc2l0aW9uIHRvIHRob3NlIHN0eWxlcyB3aWxsIHN0YXJ0IGFuZCwgaWYgeW91IG1hdGNoZWQgdGhlIGB0aW1lb3V0YCBwcm9wIHdpdGggdGhlXG4gKiBDU1MgVHJhbnNpdGlvbiBkdXJhdGlvbiwgaXQgd2lsbCBlbmQgZXhhY3RseSB3aGVuIHRoZSBzdGF0ZSBjaGFuZ2VzIHRvIGAnZXhpdGVkJ2AuXG4gKlxuICogPiAqKk5vdGUqKjogRm9yIHNpbXBsZXIgdHJhbnNpdGlvbnMgdGhlIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgbWlnaHQgYmUgZW5vdWdoLCBidXRcbiAqID4gdGFrZSBpbnRvIGFjY291bnQgdGhhdCBpdCdzIHBsYXRmb3JtLWFnbm9zdGljLCB3aGlsZSB0aGUgYENTU1RyYW5zaXRpb25gIGNvbXBvbmVudFxuICogPiBbZm9yY2VzIHJlZmxvd3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvYmxvYi81MDA3MzAzZTcyOWE3NGJlNjZhMjFjM2UyMjA1ZTQ5MTY4MjE1MjRiL3NyYy9DU1NUcmFuc2l0aW9uLmpzI0wyMDgtTDIxNSlcbiAqID4gaW4gb3JkZXIgdG8gbWFrZSBtb3JlIGNvbXBsZXggdHJhbnNpdGlvbnMgbW9yZSBwcmVkaWN0YWJsZS4gRm9yIGV4YW1wbGUsIGV2ZW4gdGhvdWdoXG4gKiA+IGNsYXNzZXMgYGV4YW1wbGUtZW50ZXJgIGFuZCBgZXhhbXBsZS1lbnRlci1hY3RpdmVgIGFyZSBhcHBsaWVkIGltbWVkaWF0ZWx5IG9uZSBhZnRlclxuICogPiBhbm90aGVyLCB5b3UgY2FuIHN0aWxsIHRyYW5zaXRpb24gZnJvbSBvbmUgdG8gdGhlIG90aGVyIGJlY2F1c2Ugb2YgdGhlIGZvcmNlZCByZWZsb3dcbiAqID4gKHJlYWQgW3RoaXMgaXNzdWVdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvaXNzdWVzLzE1OSNpc3N1ZWNvbW1lbnQtMzIyNzYxMTcxKVxuICogPiBmb3IgbW9yZSBpbmZvKS4gVGFrZSB0aGlzIGludG8gYWNjb3VudCB3aGVuIGNob29zaW5nIGJldHdlZW4gYFRyYW5zaXRpb25gIGFuZFxuICogPiBgQ1NTVHJhbnNpdGlvbmAuXG4gKi9cblxuZXhwb3J0cy5FWElUSU5HID0gRVhJVElORztcblxudmFyIFRyYW5zaXRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcywgY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSB8fCB0aGlzO1xuICAgIHZhciBwYXJlbnRHcm91cCA9IGNvbnRleHQudHJhbnNpdGlvbkdyb3VwOyAvLyBJbiB0aGUgY29udGV4dCBvZiBhIFRyYW5zaXRpb25Hcm91cCBhbGwgZW50ZXJzIGFyZSByZWFsbHkgYXBwZWFyc1xuXG4gICAgdmFyIGFwcGVhciA9IHBhcmVudEdyb3VwICYmICFwYXJlbnRHcm91cC5pc01vdW50aW5nID8gcHJvcHMuZW50ZXIgOiBwcm9wcy5hcHBlYXI7XG4gICAgdmFyIGluaXRpYWxTdGF0dXM7XG4gICAgX3RoaXMuYXBwZWFyU3RhdHVzID0gbnVsbDtcblxuICAgIGlmIChwcm9wcy5pbikge1xuICAgICAgaWYgKGFwcGVhcikge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRVhJVEVEO1xuICAgICAgICBfdGhpcy5hcHBlYXJTdGF0dXMgPSBFTlRFUklORztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFTlRFUkVEO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvcHMudW5tb3VudE9uRXhpdCB8fCBwcm9wcy5tb3VudE9uRW50ZXIpIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IFVOTU9VTlRFRDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFWElURUQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzdGF0dXM6IGluaXRpYWxTdGF0dXNcbiAgICB9O1xuICAgIF90aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRyYW5zaXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb25Hcm91cDogbnVsbCAvLyBhbGxvd3MgZm9yIG5lc3RlZCBUcmFuc2l0aW9uc1xuXG4gICAgfTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhfcmVmLCBwcmV2U3RhdGUpIHtcbiAgICB2YXIgbmV4dEluID0gX3JlZi5pbjtcblxuICAgIGlmIChuZXh0SW4gJiYgcHJldlN0YXRlLnN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IEVYSVRFRFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTsgLy8gZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUocHJldlByb3BzKSB7XG4gIC8vICAgbGV0IG5leHRTdGF0dXMgPSBudWxsXG4gIC8vICAgaWYgKHByZXZQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xuICAvLyAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHRoaXMuc3RhdGVcbiAgLy8gICAgIGlmICh0aGlzLnByb3BzLmluKSB7XG4gIC8vICAgICAgIGlmIChzdGF0dXMgIT09IEVOVEVSSU5HICYmIHN0YXR1cyAhPT0gRU5URVJFRCkge1xuICAvLyAgICAgICAgIG5leHRTdGF0dXMgPSBFTlRFUklOR1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICBpZiAoc3RhdHVzID09PSBFTlRFUklORyB8fCBzdGF0dXMgPT09IEVOVEVSRUQpIHtcbiAgLy8gICAgICAgICBuZXh0U3RhdHVzID0gRVhJVElOR1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiB7IG5leHRTdGF0dXMgfVxuICAvLyB9XG5cblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXR1cyh0cnVlLCB0aGlzLmFwcGVhclN0YXR1cyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICB2YXIgbmV4dFN0YXR1cyA9IG51bGw7XG5cbiAgICBpZiAocHJldlByb3BzICE9PSB0aGlzLnByb3BzKSB7XG4gICAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmluKSB7XG4gICAgICAgIGlmIChzdGF0dXMgIT09IEVOVEVSSU5HICYmIHN0YXR1cyAhPT0gRU5URVJFRCkge1xuICAgICAgICAgIG5leHRTdGF0dXMgPSBFTlRFUklORztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcgfHwgc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gICAgICAgICAgbmV4dFN0YXR1cyA9IEVYSVRJTkc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVN0YXR1cyhmYWxzZSwgbmV4dFN0YXR1cyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0VGltZW91dHMgPSBmdW5jdGlvbiBnZXRUaW1lb3V0cygpIHtcbiAgICB2YXIgdGltZW91dCA9IHRoaXMucHJvcHMudGltZW91dDtcbiAgICB2YXIgZXhpdCwgZW50ZXIsIGFwcGVhcjtcbiAgICBleGl0ID0gZW50ZXIgPSBhcHBlYXIgPSB0aW1lb3V0O1xuXG4gICAgaWYgKHRpbWVvdXQgIT0gbnVsbCAmJiB0eXBlb2YgdGltZW91dCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGV4aXQgPSB0aW1lb3V0LmV4aXQ7XG4gICAgICBlbnRlciA9IHRpbWVvdXQuZW50ZXI7XG4gICAgICBhcHBlYXIgPSB0aW1lb3V0LmFwcGVhcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZXhpdDogZXhpdCxcbiAgICAgIGVudGVyOiBlbnRlcixcbiAgICAgIGFwcGVhcjogYXBwZWFyXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlU3RhdHVzID0gZnVuY3Rpb24gdXBkYXRlU3RhdHVzKG1vdW50aW5nLCBuZXh0U3RhdHVzKSB7XG4gICAgaWYgKG1vdW50aW5nID09PSB2b2lkIDApIHtcbiAgICAgIG1vdW50aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG5leHRTdGF0dXMgIT09IG51bGwpIHtcbiAgICAgIC8vIG5leHRTdGF0dXMgd2lsbCBhbHdheXMgYmUgRU5URVJJTkcgb3IgRVhJVElORy5cbiAgICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG5cbiAgICAgIHZhciBub2RlID0gX3JlYWN0RG9tLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICAgIGlmIChuZXh0U3RhdHVzID09PSBFTlRFUklORykge1xuICAgICAgICB0aGlzLnBlcmZvcm1FbnRlcihub2RlLCBtb3VudGluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBlcmZvcm1FeGl0KG5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy51bm1vdW50T25FeGl0ICYmIHRoaXMuc3RhdGUuc3RhdHVzID09PSBFWElURUQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IFVOTU9VTlRFRFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiBwZXJmb3JtRW50ZXIobm9kZSwgbW91bnRpbmcpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBlbnRlciA9IHRoaXMucHJvcHMuZW50ZXI7XG4gICAgdmFyIGFwcGVhcmluZyA9IHRoaXMuY29udGV4dC50cmFuc2l0aW9uR3JvdXAgPyB0aGlzLmNvbnRleHQudHJhbnNpdGlvbkdyb3VwLmlzTW91bnRpbmcgOiBtb3VudGluZztcbiAgICB2YXIgdGltZW91dHMgPSB0aGlzLmdldFRpbWVvdXRzKCk7IC8vIG5vIGVudGVyIGFuaW1hdGlvbiBza2lwIHJpZ2h0IHRvIEVOVEVSRURcbiAgICAvLyBpZiB3ZSBhcmUgbW91bnRpbmcgYW5kIHJ1bm5pbmcgdGhpcyBpdCBtZWFucyBhcHBlYXIgX211c3RfIGJlIHNldFxuXG4gICAgaWYgKCFtb3VudGluZyAmJiAhZW50ZXIpIHtcbiAgICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBFTlRFUkVEXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyZWQobm9kZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uRW50ZXIobm9kZSwgYXBwZWFyaW5nKTtcbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICBzdGF0dXM6IEVOVEVSSU5HXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJpbmcobm9kZSwgYXBwZWFyaW5nKTsgLy8gRklYTUU6IGFwcGVhciB0aW1lb3V0P1xuXG5cbiAgICAgIF90aGlzMi5vblRyYW5zaXRpb25FbmQobm9kZSwgdGltZW91dHMuZW50ZXIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgICAgc3RhdHVzOiBFTlRFUkVEXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIucHJvcHMub25FbnRlcmVkKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnBlcmZvcm1FeGl0ID0gZnVuY3Rpb24gcGVyZm9ybUV4aXQobm9kZSkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGV4aXQgPSB0aGlzLnByb3BzLmV4aXQ7XG4gICAgdmFyIHRpbWVvdXRzID0gdGhpcy5nZXRUaW1lb3V0cygpOyAvLyBubyBleGl0IGFuaW1hdGlvbiBza2lwIHJpZ2h0IHRvIEVYSVRFRFxuXG4gICAgaWYgKCFleGl0KSB7XG4gICAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogRVhJVEVEXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25FeGl0KG5vZGUpO1xuICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgIHN0YXR1czogRVhJVElOR1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG5cbiAgICAgIF90aGlzMy5vblRyYW5zaXRpb25FbmQobm9kZSwgdGltZW91dHMuZXhpdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgICBzdGF0dXM6IEVYSVRFRFxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWxOZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBjYW5jZWxOZXh0Q2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMubmV4dENhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwoKTtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNhZmVTZXRTdGF0ZSA9IGZ1bmN0aW9uIHNhZmVTZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgLy8gVGhpcyBzaG91bGRuJ3QgYmUgbmVjZXNzYXJ5LCBidXQgdGhlcmUgYXJlIHdlaXJkIHJhY2UgY29uZGl0aW9ucyB3aXRoXG4gICAgLy8gc2V0U3RhdGUgY2FsbGJhY2tzIGFuZCB1bm1vdW50aW5nIGluIHRlc3RpbmcsIHNvIGFsd2F5cyBtYWtlIHN1cmUgdGhhdFxuICAgIC8vIHdlIGNhbiBjYW5jZWwgYW55IHBlbmRpbmcgc2V0U3RhdGUgY2FsbGJhY2tzIGFmdGVyIHdlIHVubW91bnQuXG4gICAgY2FsbGJhY2sgPSB0aGlzLnNldE5leHRDYWxsYmFjayhjYWxsYmFjayk7XG4gICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0TmV4dENhbGxiYWNrID0gZnVuY3Rpb24gc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgYWN0aXZlID0gdHJ1ZTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBfdGhpczQubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMubmV4dENhbGxiYWNrO1xuICB9O1xuXG4gIF9wcm90by5vblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQobm9kZSwgdGltZW91dCwgaGFuZGxlcikge1xuICAgIHRoaXMuc2V0TmV4dENhbGxiYWNrKGhhbmRsZXIpO1xuXG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXIobm9kZSwgdGhpcy5uZXh0Q2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICBpZiAodGltZW91dCAhPSBudWxsKSB7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIHRpbWVvdXQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dENhbGxiYWNrLCAwKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG5cbiAgICBpZiAoc3RhdHVzID09PSBVTk1PVU5URUQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGNoaWxkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY2hpbGRyZW5cIl0pOyAvLyBmaWx0ZXIgcHJvcHMgZm9yIFRyYW5zdGl0aW9uXG5cblxuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmluO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm1vdW50T25FbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy51bm1vdW50T25FeGl0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmFwcGVhcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5lbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5leGl0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLnRpbWVvdXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuYWRkRW5kTGlzdGVuZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkVudGVyaW5nO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRW50ZXJlZDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkV4aXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FeGl0aW5nO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdGVkO1xuXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHN0YXR1cywgY2hpbGRQcm9wcyk7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG5cbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbjtcbn0oX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KTtcblxuVHJhbnNpdGlvbi5jb250ZXh0VHlwZXMgPSB7XG4gIHRyYW5zaXRpb25Hcm91cDogUHJvcFR5cGVzLm9iamVjdFxufTtcblRyYW5zaXRpb24uY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHRyYW5zaXRpb25Hcm91cDogZnVuY3Rpb24gdHJhbnNpdGlvbkdyb3VwKCkge31cbn07XG5UcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIEEgYGZ1bmN0aW9uYCBjaGlsZCBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIGEgUmVhY3QgZWxlbWVudC5cbiAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCB0cmFuc2l0aW9uIHN0YXR1c1xuICAgKiAoJ2VudGVyaW5nJywgJ2VudGVyZWQnLCAnZXhpdGluZycsICdleGl0ZWQnLCAndW5tb3VudGVkJyksIHdoaWNoIGNhbiBiZSB1c2VkXG4gICAqIHRvIGFwcGx5IGNvbnRleHQgc3BlY2lmaWMgcHJvcHMgdG8gYSBjb21wb25lbnQuXG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiA8VHJhbnNpdGlvbiB0aW1lb3V0PXsxNTB9PlxuICAgKiAgIHsoc3RhdHVzKSA9PiAoXG4gICAqICAgICA8TXlDb21wb25lbnQgY2xhc3NOYW1lPXtgZmFkZSBmYWRlLSR7c3RhdHVzfWB9IC8+XG4gICAqICAgKX1cbiAgICogPC9UcmFuc2l0aW9uPlxuICAgKiBgYGBcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkXSkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogU2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZW50ZXIgb3IgZXhpdCBzdGF0ZXNcbiAgICovXG4gIGluOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IGlzIG1vdW50ZWQgaW1tZWRpYXRlbHkgYWxvbmcgd2l0aFxuICAgKiB0aGUgcGFyZW50IGBUcmFuc2l0aW9uYCBjb21wb25lbnQuIElmIHlvdSB3YW50IHRvIFwibGF6eSBtb3VudFwiIHRoZSBjb21wb25lbnQgb24gdGhlXG4gICAqIGZpcnN0IGBpbj17dHJ1ZX1gIHlvdSBjYW4gc2V0IGBtb3VudE9uRW50ZXJgLiBBZnRlciB0aGUgZmlyc3QgZW50ZXIgdHJhbnNpdGlvbiB0aGUgY29tcG9uZW50IHdpbGwgc3RheVxuICAgKiBtb3VudGVkLCBldmVuIG9uIFwiZXhpdGVkXCIsIHVubGVzcyB5b3UgYWxzbyBzcGVjaWZ5IGB1bm1vdW50T25FeGl0YC5cbiAgICovXG4gIG1vdW50T25FbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGNoaWxkIGNvbXBvbmVudCBzdGF5cyBtb3VudGVkIGFmdGVyIGl0IHJlYWNoZXMgdGhlIGAnZXhpdGVkJ2Agc3RhdGUuXG4gICAqIFNldCBgdW5tb3VudE9uRXhpdGAgaWYgeW91J2QgcHJlZmVyIHRvIHVubW91bnQgdGhlIGNvbXBvbmVudCBhZnRlciBpdCBmaW5pc2hlcyBleGl0aW5nLlxuICAgKi9cbiAgdW5tb3VudE9uRXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5vcm1hbGx5IGEgY29tcG9uZW50IGlzIG5vdCB0cmFuc2l0aW9uZWQgaWYgaXQgaXMgc2hvd24gd2hlbiB0aGUgYDxUcmFuc2l0aW9uPmAgY29tcG9uZW50IG1vdW50cy5cbiAgICogSWYgeW91IHdhbnQgdG8gdHJhbnNpdGlvbiBvbiB0aGUgZmlyc3QgbW91bnQgc2V0IGBhcHBlYXJgIHRvIGB0cnVlYCwgYW5kIHRoZVxuICAgKiBjb21wb25lbnQgd2lsbCB0cmFuc2l0aW9uIGluIGFzIHNvb24gYXMgdGhlIGA8VHJhbnNpdGlvbj5gIG1vdW50cy5cbiAgICpcbiAgICogPiBOb3RlOiB0aGVyZSBhcmUgbm8gc3BlY2lmaWMgXCJhcHBlYXJcIiBzdGF0ZXMuIGBhcHBlYXJgIG9ubHkgYWRkcyBhbiBhZGRpdGlvbmFsIGBlbnRlcmAgdHJhbnNpdGlvbi5cbiAgICovXG4gIGFwcGVhcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGVudGVyIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBleGl0IHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBSZXF1aXJlZCB1bmxlc3MgYGFkZEVuZExpc3RlbmVyYCBpcyBwcm92aWRlZFxuICAgKlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zIGxpa2U6IGB0aW1lb3V0PXs1MDB9YCxcbiAgICogb3IgaW5kaXZpZHVhbGx5IGxpa2U6XG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiB0aW1lb3V0PXt7XG4gICAqICBlbnRlcjogMzAwLFxuICAgKiAgZXhpdDogNTAwLFxuICAgKiB9fVxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge251bWJlciB8IHsgZW50ZXI/OiBudW1iZXIsIGV4aXQ/OiBudW1iZXIgfX1cbiAgICovXG4gIHRpbWVvdXQ6IGZ1bmN0aW9uIHRpbWVvdXQocHJvcHMpIHtcbiAgICB2YXIgcHQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBfUHJvcFR5cGVzLnRpbWVvdXRzU2hhcGUgOiB7fTs7XG4gICAgaWYgKCFwcm9wcy5hZGRFbmRMaXN0ZW5lcikgcHQgPSBwdC5pc1JlcXVpcmVkO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHB0LmFwcGx5KHZvaWQgMCwgW3Byb3BzXS5jb25jYXQoYXJncykpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBZGQgYSBjdXN0b20gdHJhbnNpdGlvbiBlbmQgdHJpZ2dlci4gQ2FsbGVkIHdpdGggdGhlIHRyYW5zaXRpb25pbmdcbiAgICogRE9NIG5vZGUgYW5kIGEgYGRvbmVgIGNhbGxiYWNrLiBBbGxvd3MgZm9yIG1vcmUgZmluZSBncmFpbmVkIHRyYW5zaXRpb24gZW5kXG4gICAqIGxvZ2ljLiAqKk5vdGU6KiogVGltZW91dHMgYXJlIHN0aWxsIHVzZWQgYXMgYSBmYWxsYmFjayBpZiBwcm92aWRlZC5cbiAgICpcbiAgICogYGBganN4XG4gICAqIGFkZEVuZExpc3RlbmVyPXsobm9kZSwgZG9uZSkgPT4ge1xuICAgKiAgIC8vIHVzZSB0aGUgY3NzIHRyYW5zaXRpb25lbmQgZXZlbnQgdG8gbWFyayB0aGUgZmluaXNoIG9mIGEgdHJhbnNpdGlvblxuICAgKiAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGRvbmUsIGZhbHNlKTtcbiAgICogfX1cbiAgICogYGBgXG4gICAqL1xuICBhZGRFbmRMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbCkgLT4gdm9pZFxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyZWRcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0ZWRcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyAvLyBOYW1lIHRoZSBmdW5jdGlvbiBzbyBpdCBpcyBjbGVhcmVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG5cbn0gOiB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cblRyYW5zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBpbjogZmFsc2UsXG4gIG1vdW50T25FbnRlcjogZmFsc2UsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxuICBhcHBlYXI6IGZhbHNlLFxuICBlbnRlcjogdHJ1ZSxcbiAgZXhpdDogdHJ1ZSxcbiAgb25FbnRlcjogbm9vcCxcbiAgb25FbnRlcmluZzogbm9vcCxcbiAgb25FbnRlcmVkOiBub29wLFxuICBvbkV4aXQ6IG5vb3AsXG4gIG9uRXhpdGluZzogbm9vcCxcbiAgb25FeGl0ZWQ6IG5vb3Bcbn07XG5UcmFuc2l0aW9uLlVOTU9VTlRFRCA9IDA7XG5UcmFuc2l0aW9uLkVYSVRFRCA9IDE7XG5UcmFuc2l0aW9uLkVOVEVSSU5HID0gMjtcblRyYW5zaXRpb24uRU5URVJFRCA9IDM7XG5UcmFuc2l0aW9uLkVYSVRJTkcgPSA0O1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdC5wb2x5ZmlsbCkoVHJhbnNpdGlvbik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jbGFzc05hbWVzU2hhcGUgPSBleHBvcnRzLnRpbWVvdXRzU2hhcGUgPSB2b2lkIDA7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB0aW1lb3V0c1NoYXBlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMuZGVmYXVsdC5zaGFwZSh7XG4gIGVudGVyOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuICBleGl0OiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyXG59KS5pc1JlcXVpcmVkXSkgOiBudWxsO1xuZXhwb3J0cy50aW1lb3V0c1NoYXBlID0gdGltZW91dHNTaGFwZTtcbnZhciBjbGFzc05hbWVzU2hhcGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlcy5kZWZhdWx0LnNoYXBlKHtcbiAgZW50ZXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGFjdGl2ZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ1xufSksIF9wcm9wVHlwZXMuZGVmYXVsdC5zaGFwZSh7XG4gIGVudGVyOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBlbnRlckRvbmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGVudGVyQWN0aXZlOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBleGl0OiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBleGl0RG9uZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZXhpdEFjdGl2ZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ1xufSldKSA6IG51bGw7XG5leHBvcnRzLmNsYXNzTmFtZXNTaGFwZSA9IGNsYXNzTmFtZXNTaGFwZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cbnZhciBfVHJhbnNpdGlvbkdyb3VwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9UcmFuc2l0aW9uR3JvdXBcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIFRoZSBgPFJlcGxhY2VUcmFuc2l0aW9uPmAgY29tcG9uZW50IGlzIGEgc3BlY2lhbGl6ZWQgYFRyYW5zaXRpb25gIGNvbXBvbmVudFxuICogdGhhdCBhbmltYXRlcyBiZXR3ZWVuIHR3byBjaGlsZHJlbi5cbiAqXG4gKiBgYGBqc3hcbiAqIDxSZXBsYWNlVHJhbnNpdGlvbiBpbj5cbiAqICAgPEZhZGU+PGRpdj5JIGFwcGVhciBmaXJzdDwvZGl2PjwvRmFkZT5cbiAqICAgPEZhZGU+PGRpdj5JIHJlcGxhY2UgdGhlIGFib3ZlPC9kaXY+PC9GYWRlPlxuICogPC9SZXBsYWNlVHJhbnNpdGlvbj5cbiAqIGBgYFxuICovXG52YXIgUmVwbGFjZVRyYW5zaXRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoUmVwbGFjZVRyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlcGxhY2VUcmFuc2l0aW9uKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBfYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIF9hcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoX2FyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX3RoaXMuaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkVudGVyJywgMCwgYXJncyk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUVudGVyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcmluZycsIDAsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFbnRlcmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcmVkJywgMCwgYXJncyk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUV4aXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjUpLCBfa2V5NSA9IDA7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICAgICAgYXJnc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkV4aXQnLCAxLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRXhpdGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNiksIF9rZXk2ID0gMDsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xuICAgICAgICBhcmdzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRXhpdGluZycsIDEsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFeGl0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjcpLCBfa2V5NyA9IDA7IF9rZXk3IDwgX2xlbjc7IF9rZXk3KyspIHtcbiAgICAgICAgYXJnc1tfa2V5N10gPSBhcmd1bWVudHNbX2tleTddO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkV4aXRlZCcsIDEsIGFyZ3MpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUmVwbGFjZVRyYW5zaXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5oYW5kbGVMaWZlY3ljbGUgPSBmdW5jdGlvbiBoYW5kbGVMaWZlY3ljbGUoaGFuZGxlciwgaWR4LCBvcmlnaW5hbEFyZ3MpIHtcbiAgICB2YXIgX2NoaWxkJHByb3BzO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuICAgIHZhciBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pW2lkeF07XG5cbiAgICBpZiAoY2hpbGQucHJvcHNbaGFuZGxlcl0pIChfY2hpbGQkcHJvcHMgPSBjaGlsZC5wcm9wcylbaGFuZGxlcl0uYXBwbHkoX2NoaWxkJHByb3BzLCBvcmlnaW5hbEFyZ3MpO1xuICAgIGlmICh0aGlzLnByb3BzW2hhbmRsZXJdKSB0aGlzLnByb3BzW2hhbmRsZXJdKCgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRoaXMpKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGluUHJvcCA9IF90aGlzJHByb3BzLmluLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImluXCJdKTtcblxuICAgIHZhciBfUmVhY3QkQ2hpbGRyZW4kdG9BcnIgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKSxcbiAgICAgICAgZmlyc3QgPSBfUmVhY3QkQ2hpbGRyZW4kdG9BcnJbMF0sXG4gICAgICAgIHNlY29uZCA9IF9SZWFjdCRDaGlsZHJlbiR0b0FyclsxXTtcblxuICAgIGRlbGV0ZSBwcm9wcy5vbkVudGVyO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkVudGVyaW5nO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkVudGVyZWQ7XG4gICAgZGVsZXRlIHByb3BzLm9uRXhpdDtcbiAgICBkZWxldGUgcHJvcHMub25FeGl0aW5nO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkV4aXRlZDtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVHJhbnNpdGlvbkdyb3VwLmRlZmF1bHQsIHByb3BzLCBpblByb3AgPyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoZmlyc3QsIHtcbiAgICAgIGtleTogJ2ZpcnN0JyxcbiAgICAgIG9uRW50ZXI6IHRoaXMuaGFuZGxlRW50ZXIsXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLmhhbmRsZUVudGVyaW5nLFxuICAgICAgb25FbnRlcmVkOiB0aGlzLmhhbmRsZUVudGVyZWRcbiAgICB9KSA6IF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChzZWNvbmQsIHtcbiAgICAgIGtleTogJ3NlY29uZCcsXG4gICAgICBvbkVudGVyOiB0aGlzLmhhbmRsZUV4aXQsXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLmhhbmRsZUV4aXRpbmcsXG4gICAgICBvbkVudGVyZWQ6IHRoaXMuaGFuZGxlRXhpdGVkXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBSZXBsYWNlVHJhbnNpdGlvbjtcbn0oX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KTtcblxuUmVwbGFjZVRyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBpbjogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IGZ1bmN0aW9uIGNoaWxkcmVuKHByb3BzLCBwcm9wTmFtZSkge1xuICAgIGlmIChfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5jb3VudChwcm9wc1twcm9wTmFtZV0pICE9PSAyKSByZXR1cm4gbmV3IEVycm9yKFwiXFxcIlwiICsgcHJvcE5hbWUgKyBcIlxcXCIgbXVzdCBiZSBleGFjdGx5IHR3byB0cmFuc2l0aW9uIGNvbXBvbmVudHMuXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59IDoge307XG52YXIgX2RlZmF1bHQgPSBSZXBsYWNlVHJhbnNpdGlvbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIik7XG5cbnZhciBfQ2hpbGRNYXBwaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvQ2hpbGRNYXBwaW5nXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxudmFyIHZhbHVlcyA9IE9iamVjdC52YWx1ZXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gb2JqW2tdO1xuICB9KTtcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ2RpdicsXG4gIGNoaWxkRmFjdG9yeTogZnVuY3Rpb24gY2hpbGRGYWN0b3J5KGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgYDxUcmFuc2l0aW9uR3JvdXA+YCBjb21wb25lbnQgbWFuYWdlcyBhIHNldCBvZiB0cmFuc2l0aW9uIGNvbXBvbmVudHNcbiAgICogKGA8VHJhbnNpdGlvbj5gIGFuZCBgPENTU1RyYW5zaXRpb24+YCkgaW4gYSBsaXN0LiBMaWtlIHdpdGggdGhlIHRyYW5zaXRpb25cbiAgICogY29tcG9uZW50cywgYDxUcmFuc2l0aW9uR3JvdXA+YCBpcyBhIHN0YXRlIG1hY2hpbmUgZm9yIG1hbmFnaW5nIHRoZSBtb3VudGluZ1xuICAgKiBhbmQgdW5tb3VudGluZyBvZiBjb21wb25lbnRzIG92ZXIgdGltZS5cbiAgICpcbiAgICogQ29uc2lkZXIgdGhlIGV4YW1wbGUgYmVsb3cuIEFzIGl0ZW1zIGFyZSByZW1vdmVkIG9yIGFkZGVkIHRvIHRoZSBUb2RvTGlzdCB0aGVcbiAgICogYGluYCBwcm9wIGlzIHRvZ2dsZWQgYXV0b21hdGljYWxseSBieSB0aGUgYDxUcmFuc2l0aW9uR3JvdXA+YC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGA8VHJhbnNpdGlvbkdyb3VwPmAgIGRvZXMgbm90IGRlZmluZSBhbnkgYW5pbWF0aW9uIGJlaGF2aW9yIVxuICAgKiBFeGFjdGx5IF9ob3dfIGEgbGlzdCBpdGVtIGFuaW1hdGVzIGlzIHVwIHRvIHRoZSBpbmRpdmlkdWFsIHRyYW5zaXRpb25cbiAgICogY29tcG9uZW50LiBUaGlzIG1lYW5zIHlvdSBjYW4gbWl4IGFuZCBtYXRjaCBhbmltYXRpb25zIGFjcm9zcyBkaWZmZXJlbnQgbGlzdFxuICAgKiBpdGVtcy5cbiAgICovXG5cbn07XG5cbnZhciBUcmFuc2l0aW9uR3JvdXAgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHJhbnNpdGlvbkdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uR3JvdXAocHJvcHMsIGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkgfHwgdGhpcztcblxuICAgIHZhciBoYW5kbGVFeGl0ZWQgPSBfdGhpcy5oYW5kbGVFeGl0ZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7IC8vIEluaXRpYWwgY2hpbGRyZW4gc2hvdWxkIGFsbCBiZSBlbnRlcmluZywgZGVwZW5kZW50IG9uIGFwcGVhclxuXG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhhbmRsZUV4aXRlZDogaGFuZGxlRXhpdGVkLFxuICAgICAgZmlyc3RSZW5kZXI6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb25Hcm91cDoge1xuICAgICAgICBpc01vdW50aW5nOiAhdGhpcy5hcHBlYXJlZFxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5hcHBlYXJlZCA9IHRydWU7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgX3JlZikge1xuICAgIHZhciBwcmV2Q2hpbGRNYXBwaW5nID0gX3JlZi5jaGlsZHJlbixcbiAgICAgICAgaGFuZGxlRXhpdGVkID0gX3JlZi5oYW5kbGVFeGl0ZWQsXG4gICAgICAgIGZpcnN0UmVuZGVyID0gX3JlZi5maXJzdFJlbmRlcjtcbiAgICByZXR1cm4ge1xuICAgICAgY2hpbGRyZW46IGZpcnN0UmVuZGVyID8gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0SW5pdGlhbENoaWxkTWFwcGluZykobmV4dFByb3BzLCBoYW5kbGVFeGl0ZWQpIDogKDAsIF9DaGlsZE1hcHBpbmcuZ2V0TmV4dENoaWxkTWFwcGluZykobmV4dFByb3BzLCBwcmV2Q2hpbGRNYXBwaW5nLCBoYW5kbGVFeGl0ZWQpLFxuICAgICAgZmlyc3RSZW5kZXI6IGZhbHNlXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlRXhpdGVkID0gZnVuY3Rpb24gaGFuZGxlRXhpdGVkKGNoaWxkLCBub2RlKSB7XG4gICAgdmFyIGN1cnJlbnRDaGlsZE1hcHBpbmcgPSAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIGlmIChjaGlsZC5rZXkgaW4gY3VycmVudENoaWxkTWFwcGluZykgcmV0dXJuO1xuXG4gICAgaWYgKGNoaWxkLnByb3BzLm9uRXhpdGVkKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb3VudGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBfZXh0ZW5kcyh7fSwgc3RhdGUuY2hpbGRyZW4pO1xuXG4gICAgICAgIGRlbGV0ZSBjaGlsZHJlbltjaGlsZC5rZXldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgQ29tcG9uZW50ID0gX3RoaXMkcHJvcHMuY29tcG9uZW50LFxuICAgICAgICBjaGlsZEZhY3RvcnkgPSBfdGhpcyRwcm9wcy5jaGlsZEZhY3RvcnksXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNvbXBvbmVudFwiLCBcImNoaWxkRmFjdG9yeVwiXSk7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB2YWx1ZXModGhpcy5zdGF0ZS5jaGlsZHJlbikubWFwKGNoaWxkRmFjdG9yeSk7XG4gICAgZGVsZXRlIHByb3BzLmFwcGVhcjtcbiAgICBkZWxldGUgcHJvcHMuZW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLmV4aXQ7XG5cbiAgICBpZiAoQ29tcG9uZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uR3JvdXA7XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb25Hcm91cC5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgdHJhbnNpdGlvbkdyb3VwOiBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5UcmFuc2l0aW9uR3JvdXAucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogYDxUcmFuc2l0aW9uR3JvdXA+YCByZW5kZXJzIGEgYDxkaXY+YCBieSBkZWZhdWx0LiBZb3UgY2FuIGNoYW5nZSB0aGlzXG4gICAqIGJlaGF2aW9yIGJ5IHByb3ZpZGluZyBhIGBjb21wb25lbnRgIHByb3AuXG4gICAqIElmIHlvdSB1c2UgUmVhY3QgdjE2KyBhbmQgd291bGQgbGlrZSB0byBhdm9pZCBhIHdyYXBwaW5nIGA8ZGl2PmAgZWxlbWVudFxuICAgKiB5b3UgY2FuIHBhc3MgaW4gYGNvbXBvbmVudD17bnVsbH1gLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgd3JhcHBpbmcgZGl2XG4gICAqIGJvcmtzIHlvdXIgY3NzIHN0eWxlcy5cbiAgICovXG4gIGNvbXBvbmVudDogX3Byb3BUeXBlcy5kZWZhdWx0LmFueSxcblxuICAvKipcbiAgICogQSBzZXQgb2YgYDxUcmFuc2l0aW9uPmAgY29tcG9uZW50cywgdGhhdCBhcmUgdG9nZ2xlZCBgaW5gIGFuZCBvdXQgYXMgdGhleVxuICAgKiBsZWF2ZS4gdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgd2lsbCBpbmplY3Qgc3BlY2lmaWMgdHJhbnNpdGlvbiBwcm9wcywgc29cbiAgICogcmVtZW1iZXIgdG8gc3ByZWFkIHRoZW0gdGhyb3VnaCBpZiB5b3UgYXJlIHdyYXBwaW5nIHRoZSBgPFRyYW5zaXRpb24+YCBhc1xuICAgKiB3aXRoIG91ciBgPEZhZGU+YCBleGFtcGxlLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMuZGVmYXVsdC5ub2RlLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGFwcGVhciBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBhcHBlYXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGVudGVyIGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGVudGVyOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBleGl0IGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGV4aXQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuXG4gIC8qKlxuICAgKiBZb3UgbWF5IG5lZWQgdG8gYXBwbHkgcmVhY3RpdmUgdXBkYXRlcyB0byBhIGNoaWxkIGFzIGl0IGlzIGV4aXRpbmcuXG4gICAqIFRoaXMgaXMgZ2VuZXJhbGx5IGRvbmUgYnkgdXNpbmcgYGNsb25lRWxlbWVudGAgaG93ZXZlciBpbiB0aGUgY2FzZSBvZiBhbiBleGl0aW5nXG4gICAqIGNoaWxkIHRoZSBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gcmVtb3ZlZCBhbmQgbm90IGFjY2Vzc2libGUgdG8gdGhlIGNvbnN1bWVyLlxuICAgKlxuICAgKiBJZiB5b3UgZG8gbmVlZCB0byB1cGRhdGUgYSBjaGlsZCBhcyBpdCBsZWF2ZXMgeW91IGNhbiBwcm92aWRlIGEgYGNoaWxkRmFjdG9yeWBcbiAgICogdG8gd3JhcCBldmVyeSBjaGlsZCwgZXZlbiB0aGUgb25lcyB0aGF0IGFyZSBsZWF2aW5nLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihjaGlsZDogUmVhY3RFbGVtZW50KSAtPiBSZWFjdEVsZW1lbnRcbiAgICovXG4gIGNoaWxkRmFjdG9yeTogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmNcbn0gOiB7fTtcblRyYW5zaXRpb25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0LnBvbHlmaWxsKShUcmFuc2l0aW9uR3JvdXApO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZztcbmV4cG9ydHMubWVyZ2VDaGlsZE1hcHBpbmdzID0gbWVyZ2VDaGlsZE1hcHBpbmdzO1xuZXhwb3J0cy5nZXRJbml0aWFsQ2hpbGRNYXBwaW5nID0gZ2V0SW5pdGlhbENoaWxkTWFwcGluZztcbmV4cG9ydHMuZ2V0TmV4dENoaWxkTWFwcGluZyA9IGdldE5leHRDaGlsZE1hcHBpbmc7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbi8qKlxuICogR2l2ZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gLCByZXR1cm4gYW4gb2JqZWN0IG1hcHBpbmcga2V5IHRvIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY2hpbGRyZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gXG4gKiBAcmV0dXJuIHtvYmplY3R9IE1hcHBpbmcgb2Yga2V5IHRvIGNoaWxkXG4gKi9cbmZ1bmN0aW9uIGdldENoaWxkTWFwcGluZyhjaGlsZHJlbiwgbWFwRm4pIHtcbiAgdmFyIG1hcHBlciA9IGZ1bmN0aW9uIG1hcHBlcihjaGlsZCkge1xuICAgIHJldHVybiBtYXBGbiAmJiAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShjaGlsZCkgPyBtYXBGbihjaGlsZCkgOiBjaGlsZDtcbiAgfTtcblxuICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKGNoaWxkcmVuKSBfcmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjO1xuICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIC8vIHJ1biB0aGUgbWFwIGZ1bmN0aW9uIGhlcmUgaW5zdGVhZCBzbyB0aGF0IHRoZSBrZXkgaXMgdGhlIGNvbXB1dGVkIG9uZVxuICAgIHJlc3VsdFtjaGlsZC5rZXldID0gbWFwcGVyKGNoaWxkKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFdoZW4geW91J3JlIGFkZGluZyBvciByZW1vdmluZyBjaGlsZHJlbiBzb21lIG1heSBiZSBhZGRlZCBvciByZW1vdmVkIGluIHRoZVxuICogc2FtZSByZW5kZXIgcGFzcy4gV2Ugd2FudCB0byBzaG93ICpib3RoKiBzaW5jZSB3ZSB3YW50IHRvIHNpbXVsdGFuZW91c2x5XG4gKiBhbmltYXRlIGVsZW1lbnRzIGluIGFuZCBvdXQuIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSBwcmV2aW91cyBzZXQgb2Yga2V5c1xuICogYW5kIGEgbmV3IHNldCBvZiBrZXlzIGFuZCBtZXJnZXMgdGhlbSB3aXRoIGl0cyBiZXN0IGd1ZXNzIG9mIHRoZSBjb3JyZWN0XG4gKiBvcmRlcmluZy4gSW4gdGhlIGZ1dHVyZSB3ZSBtYXkgZXhwb3NlIHNvbWUgb2YgdGhlIHV0aWxpdGllcyBpblxuICogUmVhY3RNdWx0aUNoaWxkIHRvIG1ha2UgdGhpcyBlYXN5LCBidXQgZm9yIG5vdyBSZWFjdCBpdHNlbGYgZG9lcyBub3RcbiAqIGRpcmVjdGx5IGhhdmUgdGhpcyBjb25jZXB0IG9mIHRoZSB1bmlvbiBvZiBwcmV2Q2hpbGRyZW4gYW5kIG5leHRDaGlsZHJlblxuICogc28gd2UgaW1wbGVtZW50IGl0IGhlcmUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHByZXYgcHJldiBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBuZXh0IG5leHQgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxuICogYFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoKWAuXG4gKiBAcmV0dXJuIHtvYmplY3R9IGEga2V5IHNldCB0aGF0IGNvbnRhaW5zIGFsbCBrZXlzIGluIGBwcmV2YCBhbmQgYWxsIGtleXNcbiAqIGluIGBuZXh0YCBpbiBhIHJlYXNvbmFibGUgb3JkZXIuXG4gKi9cblxuXG5mdW5jdGlvbiBtZXJnZUNoaWxkTWFwcGluZ3MocHJldiwgbmV4dCkge1xuICBwcmV2ID0gcHJldiB8fCB7fTtcbiAgbmV4dCA9IG5leHQgfHwge307XG5cbiAgZnVuY3Rpb24gZ2V0VmFsdWVGb3JLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleSBpbiBuZXh0ID8gbmV4dFtrZXldIDogcHJldltrZXldO1xuICB9IC8vIEZvciBlYWNoIGtleSBvZiBgbmV4dGAsIHRoZSBsaXN0IG9mIGtleXMgdG8gaW5zZXJ0IGJlZm9yZSB0aGF0IGtleSBpblxuICAvLyB0aGUgY29tYmluZWQgbGlzdFxuXG5cbiAgdmFyIG5leHRLZXlzUGVuZGluZyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBwZW5kaW5nS2V5cyA9IFtdO1xuXG4gIGZvciAodmFyIHByZXZLZXkgaW4gcHJldikge1xuICAgIGlmIChwcmV2S2V5IGluIG5leHQpIHtcbiAgICAgIGlmIChwZW5kaW5nS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgbmV4dEtleXNQZW5kaW5nW3ByZXZLZXldID0gcGVuZGluZ0tleXM7XG4gICAgICAgIHBlbmRpbmdLZXlzID0gW107XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlbmRpbmdLZXlzLnB1c2gocHJldktleSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGk7XG4gIHZhciBjaGlsZE1hcHBpbmcgPSB7fTtcblxuICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHQpIHtcbiAgICBpZiAobmV4dEtleXNQZW5kaW5nW25leHRLZXldKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbmV4dEtleXNQZW5kaW5nW25leHRLZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwZW5kaW5nTmV4dEtleSA9IG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XVtpXTtcbiAgICAgICAgY2hpbGRNYXBwaW5nW25leHRLZXlzUGVuZGluZ1tuZXh0S2V5XVtpXV0gPSBnZXRWYWx1ZUZvcktleShwZW5kaW5nTmV4dEtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hpbGRNYXBwaW5nW25leHRLZXldID0gZ2V0VmFsdWVGb3JLZXkobmV4dEtleSk7XG4gIH0gLy8gRmluYWxseSwgYWRkIHRoZSBrZXlzIHdoaWNoIGRpZG4ndCBhcHBlYXIgYmVmb3JlIGFueSBrZXkgaW4gYG5leHRgXG5cblxuICBmb3IgKGkgPSAwOyBpIDwgcGVuZGluZ0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICBjaGlsZE1hcHBpbmdbcGVuZGluZ0tleXNbaV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ0tleXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkTWFwcGluZztcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcChjaGlsZCwgcHJvcCwgcHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzW3Byb3BdICE9IG51bGwgPyBwcm9wc1twcm9wXSA6IGNoaWxkLnByb3BzW3Byb3BdO1xufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsQ2hpbGRNYXBwaW5nKHByb3BzLCBvbkV4aXRlZCkge1xuICByZXR1cm4gZ2V0Q2hpbGRNYXBwaW5nKHByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICBvbkV4aXRlZDogb25FeGl0ZWQuYmluZChudWxsLCBjaGlsZCksXG4gICAgICBpbjogdHJ1ZSxcbiAgICAgIGFwcGVhcjogZ2V0UHJvcChjaGlsZCwgJ2FwcGVhcicsIHByb3BzKSxcbiAgICAgIGVudGVyOiBnZXRQcm9wKGNoaWxkLCAnZW50ZXInLCBwcm9wcyksXG4gICAgICBleGl0OiBnZXRQcm9wKGNoaWxkLCAnZXhpdCcsIHByb3BzKVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV4dENoaWxkTWFwcGluZyhuZXh0UHJvcHMsIHByZXZDaGlsZE1hcHBpbmcsIG9uRXhpdGVkKSB7XG4gIHZhciBuZXh0Q2hpbGRNYXBwaW5nID0gZ2V0Q2hpbGRNYXBwaW5nKG5leHRQcm9wcy5jaGlsZHJlbik7XG4gIHZhciBjaGlsZHJlbiA9IG1lcmdlQ2hpbGRNYXBwaW5ncyhwcmV2Q2hpbGRNYXBwaW5nLCBuZXh0Q2hpbGRNYXBwaW5nKTtcbiAgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2tleV07XG4gICAgaWYgKCEoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShjaGlsZCkpIHJldHVybjtcbiAgICB2YXIgaGFzUHJldiA9IGtleSBpbiBwcmV2Q2hpbGRNYXBwaW5nO1xuICAgIHZhciBoYXNOZXh0ID0ga2V5IGluIG5leHRDaGlsZE1hcHBpbmc7XG4gICAgdmFyIHByZXZDaGlsZCA9IHByZXZDaGlsZE1hcHBpbmdba2V5XTtcbiAgICB2YXIgaXNMZWF2aW5nID0gKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkocHJldkNoaWxkKSAmJiAhcHJldkNoaWxkLnByb3BzLmluOyAvLyBpdGVtIGlzIG5ldyAoZW50ZXJpbmcpXG5cbiAgICBpZiAoaGFzTmV4dCAmJiAoIWhhc1ByZXYgfHwgaXNMZWF2aW5nKSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2VudGVyaW5nJywga2V5KVxuICAgICAgY2hpbGRyZW5ba2V5XSA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICBvbkV4aXRlZDogb25FeGl0ZWQuYmluZChudWxsLCBjaGlsZCksXG4gICAgICAgIGluOiB0cnVlLFxuICAgICAgICBleGl0OiBnZXRQcm9wKGNoaWxkLCAnZXhpdCcsIG5leHRQcm9wcyksXG4gICAgICAgIGVudGVyOiBnZXRQcm9wKGNoaWxkLCAnZW50ZXInLCBuZXh0UHJvcHMpXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFoYXNOZXh0ICYmIGhhc1ByZXYgJiYgIWlzTGVhdmluZykge1xuICAgICAgLy8gaXRlbSBpcyBvbGQgKGV4aXRpbmcpXG4gICAgICAvLyBjb25zb2xlLmxvZygnbGVhdmluZycsIGtleSlcbiAgICAgIGNoaWxkcmVuW2tleV0gPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgICAgaW46IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGhhc05leHQgJiYgaGFzUHJldiAmJiAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShwcmV2Q2hpbGQpKSB7XG4gICAgICAvLyBpdGVtIGhhc24ndCBjaGFuZ2VkIHRyYW5zaXRpb24gc3RhdGVzXG4gICAgICAvLyBjb3B5IG92ZXIgdGhlIGxhc3QgdHJhbnNpdGlvbiBwcm9wcztcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd1bmNoYW5nZWQnLCBrZXkpXG4gICAgICBjaGlsZHJlbltrZXldID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgICAgaW46IHByZXZDaGlsZC5wcm9wcy5pbixcbiAgICAgICAgZXhpdDogZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBuZXh0UHJvcHMpLFxuICAgICAgICBlbnRlcjogZ2V0UHJvcChjaGlsZCwgJ2VudGVyJywgbmV4dFByb3BzKVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdGdCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25uQkE7QUFDQTtBQUNBLFdBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM1FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3hySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3psQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=