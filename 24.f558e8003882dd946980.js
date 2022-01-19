(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[24],{

/***/ 2677:
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2672:
/***/ ((module) => {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),

/***/ 2676:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(2677);

exports.__esModule = true;
exports["default"] = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(2678));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ 2678:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ 2679:
/***/ ((module) => {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ 2682:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(2677);

exports.__esModule = true;
exports["default"] = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(2681));

var transform = 'transform';
exports.transform = transform;
var prefix, transitionEnd, animationEnd;
exports.animationEnd = animationEnd;
exports.transitionEnd = transitionEnd;
var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
exports.transitionDelay = transitionDelay;
exports.transitionTiming = transitionTiming;
exports.transitionDuration = transitionDuration;
exports.transitionProperty = transitionProperty;
var animationName, animationDuration, animationTiming, animationDelay;
exports.animationDelay = animationDelay;
exports.animationTiming = animationTiming;
exports.animationDuration = animationDuration;
exports.animationName = animationName;

if (_inDOM.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
  exports.transform = transform = prefix + "-" + transform;
  exports.transitionProperty = transitionProperty = prefix + "-transition-property";
  exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
  exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
  exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
  exports.animationName = animationName = prefix + "-animation-name";
  exports.animationDuration = animationDuration = prefix + "-animation-duration";
  exports.animationTiming = animationTiming = prefix + "-animation-delay";
  exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
}

var _default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};
exports["default"] = _default;

function getTransitionProperties() {
  var style = document.createElement('div').style;
  var vendorMap = {
    O: function O(e) {
      return "o" + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return "webkit" + e;
    },
    ms: function ms(e) {
      return "MS" + e;
    }
  };
  var vendors = Object.keys(vendorMap);
  var transitionEnd, animationEnd;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + "TransitionProperty" in style) {
      prefix = "-" + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
  style = null;
  return {
    animationEnd: animationEnd,
    transitionEnd: transitionEnd,
    prefix: prefix
  };
}

/***/ }),

/***/ 2681:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ 2680:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(2677);

exports.__esModule = true;
exports["default"] = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(2681));

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}
/* https://github.com/component/raf */


var prev = new Date().getTime();

function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);
  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};

compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};

var _default = compatRaf;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ 2631:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(2632);


/***/ }),

/***/ 2635:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function oldAdd(element, className) {
  var classes = element.className.split(' ');
  if (classes.indexOf(className) < 0) {
    classes.push(className);
  }
  element.className = classes.join(' ');
}

function oldRemove(element, className) {
  var classes = element.className.split(' ');
  var idx = classes.indexOf(className);
  if (idx >= 0) {
    classes.splice(idx, 1);
  }
  element.className = classes.join(' ');
}

exports.add = function (element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    oldAdd(element, className);
  }
};

exports.remove = function (element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    oldRemove(element, className);
  }
};

exports.list = function (element) {
  if (element.classList) {
    return Array.prototype.slice.apply(element.classList);
  } else {
    return element.className.split(' ');
  }
};


/***/ }),

/***/ 2636:
/***/ ((module) => {

"use strict";


var DOM = {};

DOM.e = function (tagName, className) {
  var element = document.createElement(tagName);
  element.className = className;
  return element;
};

DOM.appendTo = function (child, parent) {
  parent.appendChild(child);
  return child;
};

function cssGet(element, styleName) {
  return window.getComputedStyle(element)[styleName];
}

function cssSet(element, styleName, styleValue) {
  if (typeof styleValue === 'number') {
    styleValue = styleValue.toString() + 'px';
  }
  element.style[styleName] = styleValue;
  return element;
}

function cssMultiSet(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val.toString() + 'px';
    }
    element.style[key] = val;
  }
  return element;
}

DOM.css = function (element, styleNameOrObject, styleValue) {
  if (typeof styleNameOrObject === 'object') {
    // multiple set with object
    return cssMultiSet(element, styleNameOrObject);
  } else {
    if (typeof styleValue === 'undefined') {
      return cssGet(element, styleNameOrObject);
    } else {
      return cssSet(element, styleNameOrObject, styleValue);
    }
  }
};

DOM.matches = function (element, query) {
  if (typeof element.matches !== 'undefined') {
    return element.matches(query);
  } else {
    if (typeof element.matchesSelector !== 'undefined') {
      return element.matchesSelector(query);
    } else if (typeof element.webkitMatchesSelector !== 'undefined') {
      return element.webkitMatchesSelector(query);
    } else if (typeof element.mozMatchesSelector !== 'undefined') {
      return element.mozMatchesSelector(query);
    } else if (typeof element.msMatchesSelector !== 'undefined') {
      return element.msMatchesSelector(query);
    }
  }
};

DOM.remove = function (element) {
  if (typeof element.remove !== 'undefined') {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
};

DOM.queryChildren = function (element, selector) {
  return Array.prototype.filter.call(element.childNodes, function (child) {
    return DOM.matches(child, selector);
  });
};

module.exports = DOM;


/***/ }),

/***/ 2639:
/***/ ((module) => {

"use strict";


var EventElement = function (element) {
  this.element = element;
  this.events = {};
};

EventElement.prototype.bind = function (eventName, handler) {
  if (typeof this.events[eventName] === 'undefined') {
    this.events[eventName] = [];
  }
  this.events[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function (eventName, handler) {
  var isHandlerProvided = (typeof handler !== 'undefined');
  this.events[eventName] = this.events[eventName].filter(function (hdlr) {
    if (isHandlerProvided && hdlr !== handler) {
      return true;
    }
    this.element.removeEventListener(eventName, hdlr, false);
    return false;
  }, this);
};

EventElement.prototype.unbindAll = function () {
  for (var name in this.events) {
    this.unbind(name);
  }
};

var EventManager = function () {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function (element) {
  var ee = this.eventElements.filter(function (eventElement) {
    return eventElement.element === element;
  })[0];
  if (typeof ee === 'undefined') {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function (element, eventName, handler) {
  this.eventElement(element).unbind(eventName, handler);
};

EventManager.prototype.unbindAll = function () {
  for (var i = 0; i < this.eventElements.length; i++) {
    this.eventElements[i].unbindAll();
  }
};

EventManager.prototype.once = function (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (e) {
    ee.unbind(eventName, onceHandler);
    handler(e);
  };
  ee.bind(eventName, onceHandler);
};

module.exports = EventManager;


/***/ }),

/***/ 2640:
/***/ ((module) => {

"use strict";


module.exports = (function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return function () {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();


/***/ }),

/***/ 2634:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var cls = __webpack_require__(2635);
var dom = __webpack_require__(2636);

var toInt = exports.toInt = function (x) {
  return parseInt(x, 10) || 0;
};

var clone = exports.clone = function (obj) {
  if (!obj) {
    return null;
  } else if (obj.constructor === Array) {
    return obj.map(clone);
  } else if (typeof obj === 'object') {
    var result = {};
    for (var key in obj) {
      result[key] = clone(obj[key]);
    }
    return result;
  } else {
    return obj;
  }
};

exports.extend = function (original, source) {
  var result = clone(original);
  for (var key in source) {
    result[key] = clone(source[key]);
  }
  return result;
};

exports.isEditable = function (el) {
  return dom.matches(el, "input,[contenteditable]") ||
         dom.matches(el, "select,[contenteditable]") ||
         dom.matches(el, "textarea,[contenteditable]") ||
         dom.matches(el, "button,[contenteditable]");
};

exports.removePsClasses = function (element) {
  var clsList = cls.list(element);
  for (var i = 0; i < clsList.length; i++) {
    var className = clsList[i];
    if (className.indexOf('ps-') === 0) {
      cls.remove(element, className);
    }
  }
};

exports.outerWidth = function (element) {
  return toInt(dom.css(element, 'width')) +
         toInt(dom.css(element, 'paddingLeft')) +
         toInt(dom.css(element, 'paddingRight')) +
         toInt(dom.css(element, 'borderLeftWidth')) +
         toInt(dom.css(element, 'borderRightWidth'));
};

exports.startScrolling = function (element, axis) {
  cls.add(element, 'ps-in-scrolling');
  if (typeof axis !== 'undefined') {
    cls.add(element, 'ps-' + axis);
  } else {
    cls.add(element, 'ps-x');
    cls.add(element, 'ps-y');
  }
};

exports.stopScrolling = function (element, axis) {
  cls.remove(element, 'ps-in-scrolling');
  if (typeof axis !== 'undefined') {
    cls.remove(element, 'ps-' + axis);
  } else {
    cls.remove(element, 'ps-x');
    cls.remove(element, 'ps-y');
  }
};

exports.env = {
  isWebKit: 'WebkitAppearance' in document.documentElement.style,
  supportsTouch: (('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch),
  supportsIePointer: window.navigator.msMaxTouchPoints !== null
};


/***/ }),

/***/ 2632:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var destroy = __webpack_require__(2633);
var initialize = __webpack_require__(2641);
var update = __webpack_require__(2651);

module.exports = {
  initialize: initialize,
  update: update,
  destroy: destroy
};


/***/ }),

/***/ 2638:
/***/ ((module) => {

"use strict";


module.exports = {
  handlers: ['click-rail', 'drag-scrollbar', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipePropagation: true,
  useBothWheelAxes: false,
  wheelPropagation: false,
  wheelSpeed: 1,
  theme: 'default'
};


/***/ }),

/***/ 2633:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(2634);
var dom = __webpack_require__(2636);
var instances = __webpack_require__(2637);

module.exports = function (element) {
  var i = instances.get(element);

  if (!i) {
    return;
  }

  i.event.unbindAll();
  dom.remove(i.scrollbarX);
  dom.remove(i.scrollbarY);
  dom.remove(i.scrollbarXRail);
  dom.remove(i.scrollbarYRail);
  _.removePsClasses(element);

  instances.remove(element);
};


/***/ }),

/***/ 2644:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var instances = __webpack_require__(2637);
var updateGeometry = __webpack_require__(2642);
var updateScroll = __webpack_require__(2643);

function bindClickRailHandler(element, i) {
  function pageOffset(el) {
    return el.getBoundingClientRect();
  }
  var stopPropagation = function (e) { e.stopPropagation(); };

  i.event.bind(i.scrollbarY, 'click', stopPropagation);
  i.event.bind(i.scrollbarYRail, 'click', function (e) {
    var positionTop = e.pageY - window.pageYOffset - pageOffset(i.scrollbarYRail).top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    updateScroll(element, 'top', element.scrollTop + direction * i.containerHeight);
    updateGeometry(element);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'click', stopPropagation);
  i.event.bind(i.scrollbarXRail, 'click', function (e) {
    var positionLeft = e.pageX - window.pageXOffset - pageOffset(i.scrollbarXRail).left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    updateScroll(element, 'left', element.scrollLeft + direction * i.containerWidth);
    updateGeometry(element);

    e.stopPropagation();
  });
}

module.exports = function (element) {
  var i = instances.get(element);
  bindClickRailHandler(element, i);
};


/***/ }),

/***/ 2645:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(2634);
var dom = __webpack_require__(2636);
var instances = __webpack_require__(2637);
var updateGeometry = __webpack_require__(2642);
var updateScroll = __webpack_require__(2643);

function bindMouseScrollXHandler(element, i) {
  var currentLeft = null;
  var currentPageX = null;

  function updateScrollLeft(deltaX) {
    var newLeft = currentLeft + (deltaX * i.railXRatio);
    var maxLeft = Math.max(0, i.scrollbarXRail.getBoundingClientRect().left) + (i.railXRatio * (i.railXWidth - i.scrollbarXWidth));

    if (newLeft < 0) {
      i.scrollbarXLeft = 0;
    } else if (newLeft > maxLeft) {
      i.scrollbarXLeft = maxLeft;
    } else {
      i.scrollbarXLeft = newLeft;
    }

    var scrollLeft = _.toInt(i.scrollbarXLeft * (i.contentWidth - i.containerWidth) / (i.containerWidth - (i.railXRatio * i.scrollbarXWidth))) - i.negativeScrollAdjustment;
    updateScroll(element, 'left', scrollLeft);
  }

  var mouseMoveHandler = function (e) {
    updateScrollLeft(e.pageX - currentPageX);
    updateGeometry(element);
    e.stopPropagation();
    e.preventDefault();
  };

  var mouseUpHandler = function () {
    _.stopScrolling(element, 'x');
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  };

  i.event.bind(i.scrollbarX, 'mousedown', function (e) {
    currentPageX = e.pageX;
    currentLeft = _.toInt(dom.css(i.scrollbarX, 'left')) * i.railXRatio;
    _.startScrolling(element, 'x');

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    e.stopPropagation();
    e.preventDefault();
  });
}

function bindMouseScrollYHandler(element, i) {
  var currentTop = null;
  var currentPageY = null;

  function updateScrollTop(deltaY) {
    var newTop = currentTop + (deltaY * i.railYRatio);
    var maxTop = Math.max(0, i.scrollbarYRail.getBoundingClientRect().top) + (i.railYRatio * (i.railYHeight - i.scrollbarYHeight));

    if (newTop < 0) {
      i.scrollbarYTop = 0;
    } else if (newTop > maxTop) {
      i.scrollbarYTop = maxTop;
    } else {
      i.scrollbarYTop = newTop;
    }

    var scrollTop = _.toInt(i.scrollbarYTop * (i.contentHeight - i.containerHeight) / (i.containerHeight - (i.railYRatio * i.scrollbarYHeight)));
    updateScroll(element, 'top', scrollTop);
  }

  var mouseMoveHandler = function (e) {
    updateScrollTop(e.pageY - currentPageY);
    updateGeometry(element);
    e.stopPropagation();
    e.preventDefault();
  };

  var mouseUpHandler = function () {
    _.stopScrolling(element, 'y');
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  };

  i.event.bind(i.scrollbarY, 'mousedown', function (e) {
    currentPageY = e.pageY;
    currentTop = _.toInt(dom.css(i.scrollbarY, 'top')) * i.railYRatio;
    _.startScrolling(element, 'y');

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    e.stopPropagation();
    e.preventDefault();
  });
}

module.exports = function (element) {
  var i = instances.get(element);
  bindMouseScrollXHandler(element, i);
  bindMouseScrollYHandler(element, i);
};


/***/ }),

/***/ 2646:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(2634);
var dom = __webpack_require__(2636);
var instances = __webpack_require__(2637);
var updateGeometry = __webpack_require__(2642);
var updateScroll = __webpack_require__(2643);

function bindKeyboardHandler(element, i) {
  var hovered = false;
  i.event.bind(element, 'mouseenter', function () {
    hovered = true;
  });
  i.event.bind(element, 'mouseleave', function () {
    hovered = false;
  });

  var shouldPrevent = false;
  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = element.scrollTop;
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if ((scrollTop === 0 && deltaY > 0) || (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if ((scrollLeft === 0 && deltaX < 0) || (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if ((e.isDefaultPrevented && e.isDefaultPrevented()) || e.defaultPrevented) {
      return;
    }

    var focused = dom.matches(i.scrollbarX, ':focus') ||
                  dom.matches(i.scrollbarY, ':focus');

    if (!hovered && !focused) {
      return;
    }

    var activeElement = document.activeElement ? document.activeElement : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (_.isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
    case 37: // left
      if (e.metaKey) {
        deltaX = -i.contentWidth;
      } else if (e.altKey) {
        deltaX = -i.containerWidth;
      } else {
        deltaX = -30;
      }
      break;
    case 38: // up
      if (e.metaKey) {
        deltaY = i.contentHeight;
      } else if (e.altKey) {
        deltaY = i.containerHeight;
      } else {
        deltaY = 30;
      }
      break;
    case 39: // right
      if (e.metaKey) {
        deltaX = i.contentWidth;
      } else if (e.altKey) {
        deltaX = i.containerWidth;
      } else {
        deltaX = 30;
      }
      break;
    case 40: // down
      if (e.metaKey) {
        deltaY = -i.contentHeight;
      } else if (e.altKey) {
        deltaY = -i.containerHeight;
      } else {
        deltaY = -30;
      }
      break;
    case 33: // page up
      deltaY = 90;
      break;
    case 32: // space bar
      if (e.shiftKey) {
        deltaY = 90;
      } else {
        deltaY = -90;
      }
      break;
    case 34: // page down
      deltaY = -90;
      break;
    case 35: // end
      if (e.ctrlKey) {
        deltaY = -i.contentHeight;
      } else {
        deltaY = -i.containerHeight;
      }
      break;
    case 36: // home
      if (e.ctrlKey) {
        deltaY = element.scrollTop;
      } else {
        deltaY = i.containerHeight;
      }
      break;
    default:
      return;
    }

    updateScroll(element, 'top', element.scrollTop - deltaY);
    updateScroll(element, 'left', element.scrollLeft + deltaX);
    updateGeometry(element);

    shouldPrevent = shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent) {
      e.preventDefault();
    }
  });
}

module.exports = function (element) {
  var i = instances.get(element);
  bindKeyboardHandler(element, i);
};


/***/ }),

/***/ 2647:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var instances = __webpack_require__(2637);
var updateGeometry = __webpack_require__(2642);
var updateScroll = __webpack_require__(2643);

function bindMouseWheelHandler(element, i) {
  var shouldPrevent = false;

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = element.scrollTop;
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if ((scrollTop === 0 && deltaY > 0) || (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if ((scrollLeft === 0 && deltaX < 0) || (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === "undefined" || typeof deltaY === "undefined") {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY/* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(deltaX, deltaY) {
    var child = element.querySelector('textarea:hover, select[multiple]:hover, .ps-child:hover');
    if (child) {
      if (child.className.match(/ps-must-propagate/)) {
        // force consumption by child
        return true;
      }
      if (!window.getComputedStyle(child).overflow.match(/(scroll|auto)/)) {
        // if not scrollable
        return false;
      }



      var maxScrollTop = child.scrollHeight - child.clientHeight;
      if (maxScrollTop > 0) {
        if (!(child.scrollTop === 0 && deltaY > 0) && !(child.scrollTop === maxScrollTop && deltaY < 0)) {
          return true;
        }
      }
      var maxScrollLeft = child.scrollLeft - child.clientWidth;
      if (maxScrollLeft > 0) {
        if (!(child.scrollLeft === 0 && deltaX < 0) && !(child.scrollLeft === maxScrollLeft && deltaX > 0)) {
          return true;
        }
      }
    }
    return false;
  }

  function mousewheelHandler(e) {
    var delta = getDeltaFromEvent(e);

    var deltaX = delta[0];
    var deltaY = delta[1];

    if (shouldBeConsumedByChild(deltaX, deltaY)) {
      return;
    }

    shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      updateScroll(element, 'top', element.scrollTop - (deltaY * i.settings.wheelSpeed));
      updateScroll(element, 'left', element.scrollLeft + (deltaX * i.settings.wheelSpeed));
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        updateScroll(element, 'top', element.scrollTop - (deltaY * i.settings.wheelSpeed));
      } else {
        updateScroll(element, 'top', element.scrollTop + (deltaX * i.settings.wheelSpeed));
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        updateScroll(element, 'left', element.scrollLeft + (deltaX * i.settings.wheelSpeed));
      } else {
        updateScroll(element, 'left', element.scrollLeft - (deltaY * i.settings.wheelSpeed));
      }
      shouldPrevent = true;
    }

    updateGeometry(element);

    shouldPrevent = (shouldPrevent || shouldPreventDefault(deltaX, deltaY));
    if (shouldPrevent) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== "undefined") {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== "undefined") {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

module.exports = function (element) {
  var i = instances.get(element);
  bindMouseWheelHandler(element, i);
};


/***/ }),

/***/ 2650:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var instances = __webpack_require__(2637);
var updateGeometry = __webpack_require__(2642);

function bindNativeScrollHandler(element, i) {
  i.event.bind(element, 'scroll', function () {
    updateGeometry(element);
  });
}

module.exports = function (element) {
  var i = instances.get(element);
  bindNativeScrollHandler(element, i);
};


/***/ }),

/***/ 2649:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(2634);
var instances = __webpack_require__(2637);
var updateGeometry = __webpack_require__(2642);
var updateScroll = __webpack_require__(2643);

function bindSelectionHandler(element, i) {
  function getRangeNode() {
    var selection = window.getSelection ? window.getSelection() :
                    document.getSelection ? document.getSelection() : '';
    if (selection.toString().length === 0) {
      return null;
    } else {
      return selection.getRangeAt(0).commonAncestorContainer;
    }
  }

  var scrollingLoop = null;
  var scrollDiff = {top: 0, left: 0};
  function startScrolling() {
    if (!scrollingLoop) {
      scrollingLoop = setInterval(function () {
        if (!instances.get(element)) {
          clearInterval(scrollingLoop);
          return;
        }

        updateScroll(element, 'top', element.scrollTop + scrollDiff.top);
        updateScroll(element, 'left', element.scrollLeft + scrollDiff.left);
        updateGeometry(element);
      }, 50); // every .1 sec
    }
  }
  function stopScrolling() {
    if (scrollingLoop) {
      clearInterval(scrollingLoop);
      scrollingLoop = null;
    }
    _.stopScrolling(element);
  }

  var isSelected = false;
  i.event.bind(i.ownerDocument, 'selectionchange', function () {
    if (element.contains(getRangeNode())) {
      isSelected = true;
    } else {
      isSelected = false;
      stopScrolling();
    }
  });
  i.event.bind(window, 'mouseup', function () {
    if (isSelected) {
      isSelected = false;
      stopScrolling();
    }
  });
  i.event.bind(window, 'keyup', function () {
    if (isSelected) {
      isSelected = false;
      stopScrolling();
    }
  });

  i.event.bind(window, 'mousemove', function (e) {
    if (isSelected) {
      var mousePosition = {x: e.pageX, y: e.pageY};
      var containerGeometry = {
        left: element.offsetLeft,
        right: element.offsetLeft + element.offsetWidth,
        top: element.offsetTop,
        bottom: element.offsetTop + element.offsetHeight
      };

      if (mousePosition.x < containerGeometry.left + 3) {
        scrollDiff.left = -5;
        _.startScrolling(element, 'x');
      } else if (mousePosition.x > containerGeometry.right - 3) {
        scrollDiff.left = 5;
        _.startScrolling(element, 'x');
      } else {
        scrollDiff.left = 0;
      }

      if (mousePosition.y < containerGeometry.top + 3) {
        if (containerGeometry.top + 3 - mousePosition.y < 5) {
          scrollDiff.top = -5;
        } else {
          scrollDiff.top = -20;
        }
        _.startScrolling(element, 'y');
      } else if (mousePosition.y > containerGeometry.bottom - 3) {
        if (mousePosition.y - containerGeometry.bottom + 3 < 5) {
          scrollDiff.top = 5;
        } else {
          scrollDiff.top = 20;
        }
        _.startScrolling(element, 'y');
      } else {
        scrollDiff.top = 0;
      }

      if (scrollDiff.top === 0 && scrollDiff.left === 0) {
        stopScrolling();
      } else {
        startScrolling();
      }
    }
  });
}

module.exports = function (element) {
  var i = instances.get(element);
  bindSelectionHandler(element, i);
};


/***/ }),

/***/ 2648:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(2634);
var instances = __webpack_require__(2637);
var updateGeometry = __webpack_require__(2642);
var updateScroll = __webpack_require__(2643);

function bindTouchHandler(element, i, supportsTouch, supportsIePointer) {
  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = element.scrollTop;
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (((deltaY < 0) && (scrollTop === i.contentHeight - i.containerHeight)) ||
          ((deltaY > 0) && (scrollTop === 0))) {
        return !i.settings.swipePropagation;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (((deltaX < 0) && (scrollLeft === i.contentWidth - i.containerWidth)) ||
          ((deltaX > 0) && (scrollLeft === 0))) {
        return !i.settings.swipePropagation;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    updateScroll(element, 'top', element.scrollTop - differenceY);
    updateScroll(element, 'left', element.scrollLeft - differenceX);

    updateGeometry(element);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;
  var inGlobalTouch = false;
  var inLocalTouch = false;

  function globalTouchStart() {
    inGlobalTouch = true;
  }
  function globalTouchEnd() {
    inGlobalTouch = false;
  }

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }
  function shouldHandle(e) {
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
      return true;
    }
    return false;
  }
  function touchStart(e) {
    if (shouldHandle(e)) {
      inLocalTouch = true;

      var touch = getTouch(e);

      startOffset.pageX = touch.pageX;
      startOffset.pageY = touch.pageY;

      startTime = (new Date()).getTime();

      if (easingLoop !== null) {
        clearInterval(easingLoop);
      }

      e.stopPropagation();
    }
  }
  function touchMove(e) {
    if (!inLocalTouch && i.settings.swipePropagation) {
      touchStart(e);
    }
    if (!inGlobalTouch && inLocalTouch && shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = {pageX: touch.pageX, pageY: touch.pageY};

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = (new Date()).getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPreventDefault(differenceX, differenceY)) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (!inGlobalTouch && inLocalTouch) {
      inLocalTouch = false;

      clearInterval(easingLoop);
      easingLoop = setInterval(function () {
        if (!instances.get(element)) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (supportsTouch) {
    i.event.bind(window, 'touchstart', globalTouchStart);
    i.event.bind(window, 'touchend', globalTouchEnd);
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(window, 'pointerdown', globalTouchStart);
      i.event.bind(window, 'pointerup', globalTouchEnd);
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(window, 'MSPointerDown', globalTouchStart);
      i.event.bind(window, 'MSPointerUp', globalTouchEnd);
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

module.exports = function (element) {
  if (!_.env.supportsTouch && !_.env.supportsIePointer) {
    return;
  }

  var i = instances.get(element);
  bindTouchHandler(element, i, _.env.supportsTouch, _.env.supportsIePointer);
};


/***/ }),

/***/ 2641:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(2634);
var cls = __webpack_require__(2635);
var instances = __webpack_require__(2637);
var updateGeometry = __webpack_require__(2642);

// Handlers
var handlers = {
  'click-rail': __webpack_require__(2644),
  'drag-scrollbar': __webpack_require__(2645),
  'keyboard': __webpack_require__(2646),
  'wheel': __webpack_require__(2647),
  'touch': __webpack_require__(2648),
  'selection': __webpack_require__(2649)
};
var nativeScrollHandler = __webpack_require__(2650);

module.exports = function (element, userSettings) {
  userSettings = typeof userSettings === 'object' ? userSettings : {};

  cls.add(element, 'ps-container');

  // Create a plugin instance.
  var i = instances.add(element);

  i.settings = _.extend(i.settings, userSettings);
  cls.add(element, 'ps-theme-' + i.settings.theme);

  i.settings.handlers.forEach(function (handlerName) {
    handlers[handlerName](element);
  });

  nativeScrollHandler(element);

  updateGeometry(element);
};


/***/ }),

/***/ 2637:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(2634);
var cls = __webpack_require__(2635);
var defaultSettings = __webpack_require__(2638);
var dom = __webpack_require__(2636);
var EventManager = __webpack_require__(2639);
var guid = __webpack_require__(2640);

var instances = {};

function Instance(element) {
  var i = this;

  i.settings = _.clone(defaultSettings);
  i.containerWidth = null;
  i.containerHeight = null;
  i.contentWidth = null;
  i.contentHeight = null;

  i.isRtl = dom.css(element, 'direction') === "rtl";
  i.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  i.negativeScrollAdjustment = i.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;
  i.event = new EventManager();
  i.ownerDocument = element.ownerDocument || document;

  function focus() {
    cls.add(element, 'ps-focus');
  }

  function blur() {
    cls.remove(element, 'ps-focus');
  }

  i.scrollbarXRail = dom.appendTo(dom.e('div', 'ps-scrollbar-x-rail'), element);
  i.scrollbarX = dom.appendTo(dom.e('div', 'ps-scrollbar-x'), i.scrollbarXRail);
  i.scrollbarX.setAttribute('tabindex', 0);
  i.event.bind(i.scrollbarX, 'focus', focus);
  i.event.bind(i.scrollbarX, 'blur', blur);
  i.scrollbarXActive = null;
  i.scrollbarXWidth = null;
  i.scrollbarXLeft = null;
  i.scrollbarXBottom = _.toInt(dom.css(i.scrollbarXRail, 'bottom'));
  i.isScrollbarXUsingBottom = i.scrollbarXBottom === i.scrollbarXBottom; // !isNaN
  i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : _.toInt(dom.css(i.scrollbarXRail, 'top'));
  i.railBorderXWidth = _.toInt(dom.css(i.scrollbarXRail, 'borderLeftWidth')) + _.toInt(dom.css(i.scrollbarXRail, 'borderRightWidth'));
  // Set rail to display:block to calculate margins
  dom.css(i.scrollbarXRail, 'display', 'block');
  i.railXMarginWidth = _.toInt(dom.css(i.scrollbarXRail, 'marginLeft')) + _.toInt(dom.css(i.scrollbarXRail, 'marginRight'));
  dom.css(i.scrollbarXRail, 'display', '');
  i.railXWidth = null;
  i.railXRatio = null;

  i.scrollbarYRail = dom.appendTo(dom.e('div', 'ps-scrollbar-y-rail'), element);
  i.scrollbarY = dom.appendTo(dom.e('div', 'ps-scrollbar-y'), i.scrollbarYRail);
  i.scrollbarY.setAttribute('tabindex', 0);
  i.event.bind(i.scrollbarY, 'focus', focus);
  i.event.bind(i.scrollbarY, 'blur', blur);
  i.scrollbarYActive = null;
  i.scrollbarYHeight = null;
  i.scrollbarYTop = null;
  i.scrollbarYRight = _.toInt(dom.css(i.scrollbarYRail, 'right'));
  i.isScrollbarYUsingRight = i.scrollbarYRight === i.scrollbarYRight; // !isNaN
  i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : _.toInt(dom.css(i.scrollbarYRail, 'left'));
  i.scrollbarYOuterWidth = i.isRtl ? _.outerWidth(i.scrollbarY) : null;
  i.railBorderYWidth = _.toInt(dom.css(i.scrollbarYRail, 'borderTopWidth')) + _.toInt(dom.css(i.scrollbarYRail, 'borderBottomWidth'));
  dom.css(i.scrollbarYRail, 'display', 'block');
  i.railYMarginHeight = _.toInt(dom.css(i.scrollbarYRail, 'marginTop')) + _.toInt(dom.css(i.scrollbarYRail, 'marginBottom'));
  dom.css(i.scrollbarYRail, 'display', '');
  i.railYHeight = null;
  i.railYRatio = null;
}

function getId(element) {
  return element.getAttribute('data-ps-id');
}

function setId(element, id) {
  element.setAttribute('data-ps-id', id);
}

function removeId(element) {
  element.removeAttribute('data-ps-id');
}

exports.add = function (element) {
  var newId = guid();
  setId(element, newId);
  instances[newId] = new Instance(element);
  return instances[newId];
};

exports.remove = function (element) {
  delete instances[getId(element)];
  removeId(element);
};

exports.get = function (element) {
  return instances[getId(element)];
};


/***/ }),

/***/ 2642:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(2634);
var cls = __webpack_require__(2635);
var dom = __webpack_require__(2636);
var instances = __webpack_require__(2637);
var updateScroll = __webpack_require__(2643);

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = {width: i.railXWidth};
  if (i.isRtl) {
    xRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth - i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - element.scrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + element.scrollTop;
  }
  dom.css(i.scrollbarXRail, xRailOffset);

  var yRailOffset = {top: element.scrollTop, height: i.railYHeight};
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right = i.contentWidth - (i.negativeScrollAdjustment + element.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth * 2 - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  dom.css(i.scrollbarYRail, yRailOffset);

  dom.css(i.scrollbarX, {left: i.scrollbarXLeft, width: i.scrollbarXWidth - i.railBorderXWidth});
  dom.css(i.scrollbarY, {top: i.scrollbarYTop, height: i.scrollbarYHeight - i.railBorderYWidth});
}

module.exports = function (element) {
  var i = instances.get(element);

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  var existingRails;
  if (!element.contains(i.scrollbarXRail)) {
    existingRails = dom.queryChildren(element, '.ps-scrollbar-x-rail');
    if (existingRails.length > 0) {
      existingRails.forEach(function (rail) {
        dom.remove(rail);
      });
    }
    dom.appendTo(i.scrollbarXRail, element);
  }
  if (!element.contains(i.scrollbarYRail)) {
    existingRails = dom.queryChildren(element, '.ps-scrollbar-y-rail');
    if (existingRails.length > 0) {
      existingRails.forEach(function (rail) {
        dom.remove(rail);
      });
    }
    dom.appendTo(i.scrollbarYRail, element);
  }

  if (!i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(i, _.toInt(i.railXWidth * i.containerWidth / i.contentWidth));
    i.scrollbarXLeft = _.toInt((i.negativeScrollAdjustment + element.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth));
  } else {
    i.scrollbarXActive = false;
  }

  if (!i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(i, _.toInt(i.railYHeight * i.containerHeight / i.contentHeight));
    i.scrollbarYTop = _.toInt(element.scrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight));
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    cls.add(element, 'ps-active-x');
  } else {
    cls.remove(element, 'ps-active-x');
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    updateScroll(element, 'left', 0);
  }
  if (i.scrollbarYActive) {
    cls.add(element, 'ps-active-y');
  } else {
    cls.remove(element, 'ps-active-y');
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    updateScroll(element, 'top', 0);
  }
};


/***/ }),

/***/ 2643:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var instances = __webpack_require__(2637);

var lastTop;
var lastLeft;

var createDOMEvent = function (name) {
  var event = document.createEvent("Event");
  event.initEvent(name, true, true);
  return event;
};

module.exports = function (element, axis, value) {
  if (typeof element === 'undefined') {
    throw 'You must provide an element to the update-scroll function';
  }

  if (typeof axis === 'undefined') {
    throw 'You must provide an axis to the update-scroll function';
  }

  if (typeof value === 'undefined') {
    throw 'You must provide a value to the update-scroll function';
  }

  if (axis === 'top' && value <= 0) {
    element.scrollTop = value = 0; // don't allow negative scroll
    element.dispatchEvent(createDOMEvent('ps-y-reach-start'));
  }

  if (axis === 'left' && value <= 0) {
    element.scrollLeft = value = 0; // don't allow negative scroll
    element.dispatchEvent(createDOMEvent('ps-x-reach-start'));
  }

  var i = instances.get(element);

  if (axis === 'top' && value >= i.contentHeight - i.containerHeight) {
    // don't allow scroll past container
    value = i.contentHeight - i.containerHeight;
    if (value - element.scrollTop <= 1) {
      // mitigates rounding errors on non-subpixel scroll values
      value = element.scrollTop;
    } else {
      element.scrollTop = value;
    }
    element.dispatchEvent(createDOMEvent('ps-y-reach-end'));
  }

  if (axis === 'left' && value >= i.contentWidth - i.containerWidth) {
    // don't allow scroll past container
    value = i.contentWidth - i.containerWidth;
    if (value - element.scrollLeft <= 1) {
      // mitigates rounding errors on non-subpixel scroll values
      value = element.scrollLeft;
    } else {
      element.scrollLeft = value;
    }
    element.dispatchEvent(createDOMEvent('ps-x-reach-end'));
  }

  if (!lastTop) {
    lastTop = element.scrollTop;
  }

  if (!lastLeft) {
    lastLeft = element.scrollLeft;
  }

  if (axis === 'top' && value < lastTop) {
    element.dispatchEvent(createDOMEvent('ps-scroll-up'));
  }

  if (axis === 'top' && value > lastTop) {
    element.dispatchEvent(createDOMEvent('ps-scroll-down'));
  }

  if (axis === 'left' && value < lastLeft) {
    element.dispatchEvent(createDOMEvent('ps-scroll-left'));
  }

  if (axis === 'left' && value > lastLeft) {
    element.dispatchEvent(createDOMEvent('ps-scroll-right'));
  }

  if (axis === 'top') {
    element.scrollTop = lastTop = value;
    element.dispatchEvent(createDOMEvent('ps-scroll-y'));
  }

  if (axis === 'left') {
    element.scrollLeft = lastLeft = value;
    element.dispatchEvent(createDOMEvent('ps-scroll-x'));
  }

};


/***/ }),

/***/ 2651:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(2634);
var dom = __webpack_require__(2636);
var instances = __webpack_require__(2637);
var updateGeometry = __webpack_require__(2642);
var updateScroll = __webpack_require__(2643);

module.exports = function (element) {
  var i = instances.get(element);

  if (!i) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  i.negativeScrollAdjustment = i.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;

  // Recalculate rail margins
  dom.css(i.scrollbarXRail, 'display', 'block');
  dom.css(i.scrollbarYRail, 'display', 'block');
  i.railXMarginWidth = _.toInt(dom.css(i.scrollbarXRail, 'marginLeft')) + _.toInt(dom.css(i.scrollbarXRail, 'marginRight'));
  i.railYMarginHeight = _.toInt(dom.css(i.scrollbarYRail, 'marginTop')) + _.toInt(dom.css(i.scrollbarYRail, 'marginBottom'));

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  dom.css(i.scrollbarXRail, 'display', 'none');
  dom.css(i.scrollbarYRail, 'display', 'none');

  updateGeometry(element);

  // Update top/left scroll to trigger events
  updateScroll(element, 'top', element.scrollTop);
  updateScroll(element, 'left', element.scrollLeft);

  dom.css(i.scrollbarXRail, 'display', '');
  dom.css(i.scrollbarYRail, 'display', '');
};


/***/ }),

/***/ 2670:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(417);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(719);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(2671);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransitionGroupChild = __webpack_require__(2675);

var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);

var _PropTypes = __webpack_require__(2683);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  transitionName: _PropTypes.nameShape.isRequired,

  transitionAppear: _propTypes2.default.bool,
  transitionEnter: _propTypes2.default.bool,
  transitionLeave: _propTypes2.default.bool,
  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
};

var defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};

var CSSTransitionGroup = function (_React$Component) {
  _inherits(CSSTransitionGroup, _React$Component);

  function CSSTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // We need to provide this childFactory so that
  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.


  CSSTransitionGroup.prototype.render = function render() {
    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
  };

  return CSSTransitionGroup;
}(_react2.default.Component);

CSSTransitionGroup.displayName = 'CSSTransitionGroup';


CSSTransitionGroup.propTypes =  false ? 0 : {};
CSSTransitionGroup.defaultProps = defaultProps;

exports["default"] = CSSTransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ 2675:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _addClass = __webpack_require__(2676);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(2679);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _requestAnimationFrame = __webpack_require__(2680);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _properties = __webpack_require__(2682);

var _react = __webpack_require__(417);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(719);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(420);

var _PropTypes = __webpack_require__(2683);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = [];
if (_properties.transitionEnd) events.push(_properties.transitionEnd);
if (_properties.animationEnd) events.push(_properties.animationEnd);

function addEndListener(node, listener) {
  if (events.length) {
    events.forEach(function (e) {
      return node.addEventListener(e, listener, false);
    });
  } else {
    setTimeout(listener, 0);
  }

  return function () {
    if (!events.length) return;
    events.forEach(function (e) {
      return node.removeEventListener(e, listener, false);
    });
  };
}

var propTypes = {
  children: _propTypes2.default.node,
  name: _PropTypes.nameShape.isRequired,

  // Once we require timeouts to be specified, we can remove the
  // boolean flags (appear etc.) and just accept a number
  // or a bool for the timeout flags (appearTimeout etc.)
  appear: _propTypes2.default.bool,
  enter: _propTypes2.default.bool,
  leave: _propTypes2.default.bool,
  appearTimeout: _propTypes2.default.number,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};

var CSSTransitionGroupChild = function (_React$Component) {
  _inherits(CSSTransitionGroupChild, _React$Component);

  function CSSTransitionGroupChild() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroupChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
      if (_this.props.appear) {
        _this.transition('appear', done, _this.props.appearTimeout);
      } else {
        done();
      }
    }, _this.componentWillEnter = function (done) {
      if (_this.props.enter) {
        _this.transition('enter', done, _this.props.enterTimeout);
      } else {
        done();
      }
    }, _this.componentWillLeave = function (done) {
      if (_this.props.leave) {
        _this.transition('leave', done, _this.props.leaveTimeout);
      } else {
        done();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  };

  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });

    this.classNameAndNodeQueue.length = 0;
  };

  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
    var node = (0, _reactDom.findDOMNode)(this);

    if (!node) {
      if (finishCallback) {
        finishCallback();
      }
      return;
    }

    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timer = null;
    var removeListeners = void 0;

    (0, _addClass2.default)(node, className);

    // Need to do this to actually trigger a transition.
    this.queueClassAndNode(activeClassName, node);

    // Clean-up the animation after the specified delay
    var finish = function finish(e) {
      if (e && e.target !== node) {
        return;
      }

      clearTimeout(timer);
      if (removeListeners) removeListeners();

      (0, _removeClass2.default)(node, className);
      (0, _removeClass2.default)(node, activeClassName);

      if (removeListeners) removeListeners();

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      if (finishCallback) {
        finishCallback();
      }
    };

    if (timeout) {
      timer = setTimeout(finish, timeout);
      this.transitionTimeouts.push(timer);
    } else if (_properties.transitionEnd) {
      removeListeners = addEndListener(node, finish);
    }
  };

  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
    var _this2 = this;

    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });

    if (!this.rafHandle) {
      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
        return _this2.flushClassNameAndNodeQueue();
      });
    }
  };

  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
    if (!this.unmounted) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        /* eslint-disable no-unused-expressions */
        obj.node.scrollTop;
        /* eslint-enable no-unused-expressions */
        (0, _addClass2.default)(obj.node, obj.className);
      });
    }
    this.classNameAndNodeQueue.length = 0;
    this.rafHandle = null;
  };

  CSSTransitionGroupChild.prototype.render = function render() {
    var props = _extends({}, this.props);
    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
  };

  return CSSTransitionGroupChild;
}(_react2.default.Component);

CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';


CSSTransitionGroupChild.propTypes =  false ? 0 : {};

exports["default"] = CSSTransitionGroupChild;
module.exports = exports['default'];

/***/ }),

/***/ 2671:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(2672);

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(417);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(719);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(2673);

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(2674);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

         false ? 0 : void 0;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes =  false ? 0 : {};
TransitionGroup.defaultProps = defaultProps;

exports["default"] = TransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ 2673:
/***/ ((module) => {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {}

module.exports = warning;


/***/ }),

/***/ 2674:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(417);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
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
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),

/***/ 2683:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _react = __webpack_require__(417);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(719);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  leaveActive: _propTypes2.default.string,
  appear: _propTypes2.default.string,
  appearActive: _propTypes2.default.string
})]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQuZjU1OGU4MDAzODgyZGQ5NDY5ODAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2xKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXNDQTtBQUNBOzs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9jaGFpbi1mdW5jdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvYWRkQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL2hhc0NsYXNzLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9yZW1vdmVDbGFzcy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvdHJhbnNpdGlvbi9wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy91dGlsL2luRE9NLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy91dGlsL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9saWIvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9saWIvZG9tLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9zcmMvanMvbGliL2V2ZW50LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9saWIvZ3VpZC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL2xpYi9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9zcmMvanMvcGx1Z2luL2RlZmF1bHQtc2V0dGluZy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL3BsdWdpbi9kZXN0cm95LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9zcmMvanMvcGx1Z2luL2hhbmRsZXIvY2xpY2stcmFpbC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL3BsdWdpbi9oYW5kbGVyL2RyYWctc2Nyb2xsYmFyLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9zcmMvanMvcGx1Z2luL2hhbmRsZXIva2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9wbHVnaW4vaGFuZGxlci9tb3VzZS13aGVlbC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL3BsdWdpbi9oYW5kbGVyL25hdGl2ZS1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9wbHVnaW4vaGFuZGxlci9zZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9wbHVnaW4vaGFuZGxlci90b3VjaC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL3BsdWdpbi9pbml0aWFsaXplLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9zcmMvanMvcGx1Z2luL2luc3RhbmNlcy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL3BsdWdpbi91cGRhdGUtZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9wbHVnaW4vdXBkYXRlLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL3BsdWdpbi91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbkdyb3VwLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb25Hcm91cENoaWxkLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ub2RlX21vZHVsZXMvd2FybmluZy9icm93c2VyLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3V0aWxzL0NoaWxkTWFwcGluZy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9Qcm9wVHlwZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjaGFpbigpe1xuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICB2YXIgYXJncyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXVxuXG4gIGFyZ3MgPSBhcmdzLmZpbHRlcihmdW5jdGlvbihmbil7IHJldHVybiBmbiAhPSBudWxsIH0pXG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIGFyZ3NbMF1cblxuICByZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24oY3VycmVudCwgbmV4dCl7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNoYWluZWRGdW5jdGlvbigpIHtcbiAgICAgIGN1cnJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIG5leHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9KVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkQ2xhc3M7XG5cbnZhciBfaGFzQ2xhc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hhc0NsYXNzXCIpKTtcblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7ZWxzZSBpZiAoISgwLCBfaGFzQ2xhc3MuZGVmYXVsdCkoZWxlbWVudCwgY2xhc3NOYW1lKSkgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjbGFzc05hbWU7ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJykgKyAnICcgKyBjbGFzc05hbWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gaGFzQ2xhc3M7XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHJldHVybiAhIWNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO2Vsc2UgcmV0dXJuIChcIiBcIiArIChlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8IGVsZW1lbnQuY2xhc3NOYW1lKSArIFwiIFwiKS5pbmRleE9mKFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIpICE9PSAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHJlcGxhY2VDbGFzc05hbWUob3JpZ0NsYXNzLCBjbGFzc1RvUmVtb3ZlKSB7XG4gIHJldHVybiBvcmlnQ2xhc3MucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgY2xhc3NUb1JlbW92ZSArICcoPzpcXFxcc3wkKScsICdnJyksICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7ZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgZWxlbWVudC5jbGFzc05hbWUgPSByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lLCBjbGFzc05hbWUpO2Vsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVwbGFjZUNsYXNzTmFtZShlbGVtZW50LmNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8ICcnLCBjbGFzc05hbWUpKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5hbmltYXRpb25FbmQgPSBleHBvcnRzLmFuaW1hdGlvbkRlbGF5ID0gZXhwb3J0cy5hbmltYXRpb25UaW1pbmcgPSBleHBvcnRzLmFuaW1hdGlvbkR1cmF0aW9uID0gZXhwb3J0cy5hbmltYXRpb25OYW1lID0gZXhwb3J0cy50cmFuc2l0aW9uRW5kID0gZXhwb3J0cy50cmFuc2l0aW9uRHVyYXRpb24gPSBleHBvcnRzLnRyYW5zaXRpb25EZWxheSA9IGV4cG9ydHMudHJhbnNpdGlvblRpbWluZyA9IGV4cG9ydHMudHJhbnNpdGlvblByb3BlcnR5ID0gZXhwb3J0cy50cmFuc2Zvcm0gPSB2b2lkIDA7XG5cbnZhciBfaW5ET00gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlsL2luRE9NXCIpKTtcblxudmFyIHRyYW5zZm9ybSA9ICd0cmFuc2Zvcm0nO1xuZXhwb3J0cy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG52YXIgcHJlZml4LCB0cmFuc2l0aW9uRW5kLCBhbmltYXRpb25FbmQ7XG5leHBvcnRzLmFuaW1hdGlvbkVuZCA9IGFuaW1hdGlvbkVuZDtcbmV4cG9ydHMudHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmQ7XG52YXIgdHJhbnNpdGlvblByb3BlcnR5LCB0cmFuc2l0aW9uRHVyYXRpb24sIHRyYW5zaXRpb25UaW1pbmcsIHRyYW5zaXRpb25EZWxheTtcbmV4cG9ydHMudHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5O1xuZXhwb3J0cy50cmFuc2l0aW9uVGltaW5nID0gdHJhbnNpdGlvblRpbWluZztcbmV4cG9ydHMudHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uO1xuZXhwb3J0cy50cmFuc2l0aW9uUHJvcGVydHkgPSB0cmFuc2l0aW9uUHJvcGVydHk7XG52YXIgYW5pbWF0aW9uTmFtZSwgYW5pbWF0aW9uRHVyYXRpb24sIGFuaW1hdGlvblRpbWluZywgYW5pbWF0aW9uRGVsYXk7XG5leHBvcnRzLmFuaW1hdGlvbkRlbGF5ID0gYW5pbWF0aW9uRGVsYXk7XG5leHBvcnRzLmFuaW1hdGlvblRpbWluZyA9IGFuaW1hdGlvblRpbWluZztcbmV4cG9ydHMuYW5pbWF0aW9uRHVyYXRpb24gPSBhbmltYXRpb25EdXJhdGlvbjtcbmV4cG9ydHMuYW5pbWF0aW9uTmFtZSA9IGFuaW1hdGlvbk5hbWU7XG5cbmlmIChfaW5ET00uZGVmYXVsdCkge1xuICB2YXIgX2dldFRyYW5zaXRpb25Qcm9wZXJ0ID0gZ2V0VHJhbnNpdGlvblByb3BlcnRpZXMoKTtcblxuICBwcmVmaXggPSBfZ2V0VHJhbnNpdGlvblByb3BlcnQucHJlZml4O1xuICBleHBvcnRzLnRyYW5zaXRpb25FbmQgPSB0cmFuc2l0aW9uRW5kID0gX2dldFRyYW5zaXRpb25Qcm9wZXJ0LnRyYW5zaXRpb25FbmQ7XG4gIGV4cG9ydHMuYW5pbWF0aW9uRW5kID0gYW5pbWF0aW9uRW5kID0gX2dldFRyYW5zaXRpb25Qcm9wZXJ0LmFuaW1hdGlvbkVuZDtcbiAgZXhwb3J0cy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm0gPSBwcmVmaXggKyBcIi1cIiArIHRyYW5zZm9ybTtcbiAgZXhwb3J0cy50cmFuc2l0aW9uUHJvcGVydHkgPSB0cmFuc2l0aW9uUHJvcGVydHkgPSBwcmVmaXggKyBcIi10cmFuc2l0aW9uLXByb3BlcnR5XCI7XG4gIGV4cG9ydHMudHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uID0gcHJlZml4ICsgXCItdHJhbnNpdGlvbi1kdXJhdGlvblwiO1xuICBleHBvcnRzLnRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheSA9IHByZWZpeCArIFwiLXRyYW5zaXRpb24tZGVsYXlcIjtcbiAgZXhwb3J0cy50cmFuc2l0aW9uVGltaW5nID0gdHJhbnNpdGlvblRpbWluZyA9IHByZWZpeCArIFwiLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCI7XG4gIGV4cG9ydHMuYW5pbWF0aW9uTmFtZSA9IGFuaW1hdGlvbk5hbWUgPSBwcmVmaXggKyBcIi1hbmltYXRpb24tbmFtZVwiO1xuICBleHBvcnRzLmFuaW1hdGlvbkR1cmF0aW9uID0gYW5pbWF0aW9uRHVyYXRpb24gPSBwcmVmaXggKyBcIi1hbmltYXRpb24tZHVyYXRpb25cIjtcbiAgZXhwb3J0cy5hbmltYXRpb25UaW1pbmcgPSBhbmltYXRpb25UaW1pbmcgPSBwcmVmaXggKyBcIi1hbmltYXRpb24tZGVsYXlcIjtcbiAgZXhwb3J0cy5hbmltYXRpb25EZWxheSA9IGFuaW1hdGlvbkRlbGF5ID0gcHJlZml4ICsgXCItYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvblwiO1xufVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICBlbmQ6IHRyYW5zaXRpb25FbmQsXG4gIHByb3BlcnR5OiB0cmFuc2l0aW9uUHJvcGVydHksXG4gIHRpbWluZzogdHJhbnNpdGlvblRpbWluZyxcbiAgZGVsYXk6IHRyYW5zaXRpb25EZWxheSxcbiAgZHVyYXRpb246IHRyYW5zaXRpb25EdXJhdGlvblxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uUHJvcGVydGllcygpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XG4gIHZhciB2ZW5kb3JNYXAgPSB7XG4gICAgTzogZnVuY3Rpb24gTyhlKSB7XG4gICAgICByZXR1cm4gXCJvXCIgKyBlLnRvTG93ZXJDYXNlKCk7XG4gICAgfSxcbiAgICBNb3o6IGZ1bmN0aW9uIE1veihlKSB7XG4gICAgICByZXR1cm4gZS50b0xvd2VyQ2FzZSgpO1xuICAgIH0sXG4gICAgV2Via2l0OiBmdW5jdGlvbiBXZWJraXQoZSkge1xuICAgICAgcmV0dXJuIFwid2Via2l0XCIgKyBlO1xuICAgIH0sXG4gICAgbXM6IGZ1bmN0aW9uIG1zKGUpIHtcbiAgICAgIHJldHVybiBcIk1TXCIgKyBlO1xuICAgIH1cbiAgfTtcbiAgdmFyIHZlbmRvcnMgPSBPYmplY3Qua2V5cyh2ZW5kb3JNYXApO1xuICB2YXIgdHJhbnNpdGlvbkVuZCwgYW5pbWF0aW9uRW5kO1xuICB2YXIgcHJlZml4ID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHZlbmRvciA9IHZlbmRvcnNbaV07XG5cbiAgICBpZiAodmVuZG9yICsgXCJUcmFuc2l0aW9uUHJvcGVydHlcIiBpbiBzdHlsZSkge1xuICAgICAgcHJlZml4ID0gXCItXCIgKyB2ZW5kb3IudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRyYW5zaXRpb25FbmQgPSB2ZW5kb3JNYXBbdmVuZG9yXSgnVHJhbnNpdGlvbkVuZCcpO1xuICAgICAgYW5pbWF0aW9uRW5kID0gdmVuZG9yTWFwW3ZlbmRvcl0oJ0FuaW1hdGlvbkVuZCcpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKCF0cmFuc2l0aW9uRW5kICYmICd0cmFuc2l0aW9uUHJvcGVydHknIGluIHN0eWxlKSB0cmFuc2l0aW9uRW5kID0gJ3RyYW5zaXRpb25lbmQnO1xuICBpZiAoIWFuaW1hdGlvbkVuZCAmJiAnYW5pbWF0aW9uTmFtZScgaW4gc3R5bGUpIGFuaW1hdGlvbkVuZCA9ICdhbmltYXRpb25lbmQnO1xuICBzdHlsZSA9IG51bGw7XG4gIHJldHVybiB7XG4gICAgYW5pbWF0aW9uRW5kOiBhbmltYXRpb25FbmQsXG4gICAgdHJhbnNpdGlvbkVuZDogdHJhbnNpdGlvbkVuZCxcbiAgICBwcmVmaXg6IHByZWZpeFxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2RlZmF1bHQgPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2luRE9NID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pbkRPTVwiKSk7XG5cbnZhciB2ZW5kb3JzID0gWycnLCAnd2Via2l0JywgJ21veicsICdvJywgJ21zJ107XG52YXIgY2FuY2VsID0gJ2NsZWFyVGltZW91dCc7XG52YXIgcmFmID0gZmFsbGJhY2s7XG52YXIgY29tcGF0UmFmO1xuXG52YXIgZ2V0S2V5ID0gZnVuY3Rpb24gZ2V0S2V5KHZlbmRvciwgaykge1xuICByZXR1cm4gdmVuZG9yICsgKCF2ZW5kb3IgPyBrIDoga1swXS50b1VwcGVyQ2FzZSgpICsgay5zdWJzdHIoMSkpICsgJ0FuaW1hdGlvbkZyYW1lJztcbn07XG5cbmlmIChfaW5ET00uZGVmYXVsdCkge1xuICB2ZW5kb3JzLnNvbWUoZnVuY3Rpb24gKHZlbmRvcikge1xuICAgIHZhciByYWZLZXkgPSBnZXRLZXkodmVuZG9yLCAncmVxdWVzdCcpO1xuXG4gICAgaWYgKHJhZktleSBpbiB3aW5kb3cpIHtcbiAgICAgIGNhbmNlbCA9IGdldEtleSh2ZW5kb3IsICdjYW5jZWwnKTtcbiAgICAgIHJldHVybiByYWYgPSBmdW5jdGlvbiByYWYoY2IpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvd1tyYWZLZXldKGNiKTtcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn1cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9jb21wb25lbnQvcmFmICovXG5cblxudmFyIHByZXYgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuZnVuY3Rpb24gZmFsbGJhY2soZm4pIHtcbiAgdmFyIGN1cnIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgIG1zID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyciAtIHByZXYpKSxcbiAgICAgIHJlcSA9IHNldFRpbWVvdXQoZm4sIG1zKTtcbiAgcHJldiA9IGN1cnI7XG4gIHJldHVybiByZXE7XG59XG5cbmNvbXBhdFJhZiA9IGZ1bmN0aW9uIGNvbXBhdFJhZihjYikge1xuICByZXR1cm4gcmFmKGNiKTtcbn07XG5cbmNvbXBhdFJhZi5jYW5jZWwgPSBmdW5jdGlvbiAoaWQpIHtcbiAgd2luZG93W2NhbmNlbF0gJiYgdHlwZW9mIHdpbmRvd1tjYW5jZWxdID09PSAnZnVuY3Rpb24nICYmIHdpbmRvd1tjYW5jZWxdKGlkKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IGNvbXBhdFJhZjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3JjL2pzL21haW4nKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gb2xkQWRkKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gIHZhciBjbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcclxuICBpZiAoY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSkgPCAwKSB7XHJcbiAgICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcclxuICB9XHJcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb2xkUmVtb3ZlKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gIHZhciBjbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcclxuICB2YXIgaWR4ID0gY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSk7XHJcbiAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICBjbGFzc2VzLnNwbGljZShpZHgsIDEpO1xyXG4gIH1cclxuICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpO1xyXG59XHJcblxyXG5leHBvcnRzLmFkZCA9IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvbGRBZGQoZWxlbWVudCwgY2xhc3NOYW1lKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnRzLnJlbW92ZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvbGRSZW1vdmUoZWxlbWVudCwgY2xhc3NOYW1lKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnRzLmxpc3QgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlbGVtZW50LmNsYXNzTGlzdCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG4gIH1cclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIERPTSA9IHt9O1xyXG5cclxuRE9NLmUgPSBmdW5jdGlvbiAodGFnTmFtZSwgY2xhc3NOYW1lKSB7XHJcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuRE9NLmFwcGVuZFRvID0gZnVuY3Rpb24gKGNoaWxkLCBwYXJlbnQpIHtcclxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gIHJldHVybiBjaGlsZDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNzc0dldChlbGVtZW50LCBzdHlsZU5hbWUpIHtcclxuICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbc3R5bGVOYW1lXTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3NzU2V0KGVsZW1lbnQsIHN0eWxlTmFtZSwgc3R5bGVWYWx1ZSkge1xyXG4gIGlmICh0eXBlb2Ygc3R5bGVWYWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgIHN0eWxlVmFsdWUgPSBzdHlsZVZhbHVlLnRvU3RyaW5nKCkgKyAncHgnO1xyXG4gIH1cclxuICBlbGVtZW50LnN0eWxlW3N0eWxlTmFtZV0gPSBzdHlsZVZhbHVlO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjc3NNdWx0aVNldChlbGVtZW50LCBvYmopIHtcclxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICB2YXIgdmFsID0gb2JqW2tleV07XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdmFsID0gdmFsLnRvU3RyaW5nKCkgKyAncHgnO1xyXG4gICAgfVxyXG4gICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsO1xyXG4gIH1cclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuRE9NLmNzcyA9IGZ1bmN0aW9uIChlbGVtZW50LCBzdHlsZU5hbWVPck9iamVjdCwgc3R5bGVWYWx1ZSkge1xyXG4gIGlmICh0eXBlb2Ygc3R5bGVOYW1lT3JPYmplY3QgPT09ICdvYmplY3QnKSB7XHJcbiAgICAvLyBtdWx0aXBsZSBzZXQgd2l0aCBvYmplY3RcclxuICAgIHJldHVybiBjc3NNdWx0aVNldChlbGVtZW50LCBzdHlsZU5hbWVPck9iamVjdCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICh0eXBlb2Ygc3R5bGVWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIGNzc0dldChlbGVtZW50LCBzdHlsZU5hbWVPck9iamVjdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY3NzU2V0KGVsZW1lbnQsIHN0eWxlTmFtZU9yT2JqZWN0LCBzdHlsZVZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5ET00ubWF0Y2hlcyA9IGZ1bmN0aW9uIChlbGVtZW50LCBxdWVyeSkge1xyXG4gIGlmICh0eXBlb2YgZWxlbWVudC5tYXRjaGVzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQubWF0Y2hlcyhxdWVyeSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICh0eXBlb2YgZWxlbWVudC5tYXRjaGVzU2VsZWN0b3IgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50Lm1hdGNoZXNTZWxlY3RvcihxdWVyeSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHF1ZXJ5KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQubW96TWF0Y2hlc1NlbGVjdG9yICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3IocXVlcnkpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3IocXVlcnkpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbkRPTS5yZW1vdmUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIGlmICh0eXBlb2YgZWxlbWVudC5yZW1vdmUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5ET00ucXVlcnlDaGlsZHJlbiA9IGZ1bmN0aW9uIChlbGVtZW50LCBzZWxlY3Rvcikge1xyXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZWxlbWVudC5jaGlsZE5vZGVzLCBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgIHJldHVybiBET00ubWF0Y2hlcyhjaGlsZCwgc2VsZWN0b3IpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBET007XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBFdmVudEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgdGhpcy5ldmVudHMgPSB7fTtcclxufTtcclxuXHJcbkV2ZW50RWxlbWVudC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIpIHtcclxuICBpZiAodHlwZW9mIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW107XHJcbiAgfVxyXG4gIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChoYW5kbGVyKTtcclxuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGZhbHNlKTtcclxufTtcclxuXHJcbkV2ZW50RWxlbWVudC5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlcikge1xyXG4gIHZhciBpc0hhbmRsZXJQcm92aWRlZCA9ICh0eXBlb2YgaGFuZGxlciAhPT0gJ3VuZGVmaW5lZCcpO1xyXG4gIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihmdW5jdGlvbiAoaGRscikge1xyXG4gICAgaWYgKGlzSGFuZGxlclByb3ZpZGVkICYmIGhkbHIgIT09IGhhbmRsZXIpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhkbHIsIGZhbHNlKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9LCB0aGlzKTtcclxufTtcclxuXHJcbkV2ZW50RWxlbWVudC5wcm90b3R5cGUudW5iaW5kQWxsID0gZnVuY3Rpb24gKCkge1xyXG4gIGZvciAodmFyIG5hbWUgaW4gdGhpcy5ldmVudHMpIHtcclxuICAgIHRoaXMudW5iaW5kKG5hbWUpO1xyXG4gIH1cclxufTtcclxuXHJcbnZhciBFdmVudE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5ldmVudEVsZW1lbnRzID0gW107XHJcbn07XHJcblxyXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLmV2ZW50RWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgdmFyIGVlID0gdGhpcy5ldmVudEVsZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAoZXZlbnRFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZXZlbnRFbGVtZW50LmVsZW1lbnQgPT09IGVsZW1lbnQ7XHJcbiAgfSlbMF07XHJcbiAgaWYgKHR5cGVvZiBlZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGVlID0gbmV3IEV2ZW50RWxlbWVudChlbGVtZW50KTtcclxuICAgIHRoaXMuZXZlbnRFbGVtZW50cy5wdXNoKGVlKTtcclxuICB9XHJcbiAgcmV0dXJuIGVlO1xyXG59O1xyXG5cclxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xyXG4gIHRoaXMuZXZlbnRFbGVtZW50KGVsZW1lbnQpLmJpbmQoZXZlbnROYW1lLCBoYW5kbGVyKTtcclxufTtcclxuXHJcbkV2ZW50TWFuYWdlci5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xyXG4gIHRoaXMuZXZlbnRFbGVtZW50KGVsZW1lbnQpLnVuYmluZChldmVudE5hbWUsIGhhbmRsZXIpO1xyXG59O1xyXG5cclxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS51bmJpbmRBbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHRoaXMuZXZlbnRFbGVtZW50c1tpXS51bmJpbmRBbGwoKTtcclxuICB9XHJcbn07XHJcblxyXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XHJcbiAgdmFyIGVlID0gdGhpcy5ldmVudEVsZW1lbnQoZWxlbWVudCk7XHJcbiAgdmFyIG9uY2VIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIGVlLnVuYmluZChldmVudE5hbWUsIG9uY2VIYW5kbGVyKTtcclxuICAgIGhhbmRsZXIoZSk7XHJcbiAgfTtcclxuICBlZS5iaW5kKGV2ZW50TmFtZSwgb25jZUhhbmRsZXIpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBFdmVudE1hbmFnZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uICgpIHtcclxuICBmdW5jdGlvbiBzNCgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG4gICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XHJcbiAgfVxyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXHJcbiAgICAgICAgICAgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcclxuICB9O1xyXG59KSgpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgY2xzID0gcmVxdWlyZSgnLi9jbGFzcycpO1xyXG52YXIgZG9tID0gcmVxdWlyZSgnLi9kb20nKTtcclxuXHJcbnZhciB0b0ludCA9IGV4cG9ydHMudG9JbnQgPSBmdW5jdGlvbiAoeCkge1xyXG4gIHJldHVybiBwYXJzZUludCh4LCAxMCkgfHwgMDtcclxufTtcclxuXHJcbnZhciBjbG9uZSA9IGV4cG9ydHMuY2xvbmUgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgaWYgKCFvYmopIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0gZWxzZSBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xyXG4gICAgcmV0dXJuIG9iai5tYXAoY2xvbmUpO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgcmVzdWx0W2tleV0gPSBjbG9uZShvYmpba2V5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydHMuZXh0ZW5kID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBzb3VyY2UpIHtcclxuICB2YXIgcmVzdWx0ID0gY2xvbmUob3JpZ2luYWwpO1xyXG4gIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcclxuICAgIHJlc3VsdFtrZXldID0gY2xvbmUoc291cmNlW2tleV0pO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0cy5pc0VkaXRhYmxlID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgcmV0dXJuIGRvbS5tYXRjaGVzKGVsLCBcImlucHV0LFtjb250ZW50ZWRpdGFibGVdXCIpIHx8XHJcbiAgICAgICAgIGRvbS5tYXRjaGVzKGVsLCBcInNlbGVjdCxbY29udGVudGVkaXRhYmxlXVwiKSB8fFxyXG4gICAgICAgICBkb20ubWF0Y2hlcyhlbCwgXCJ0ZXh0YXJlYSxbY29udGVudGVkaXRhYmxlXVwiKSB8fFxyXG4gICAgICAgICBkb20ubWF0Y2hlcyhlbCwgXCJidXR0b24sW2NvbnRlbnRlZGl0YWJsZV1cIik7XHJcbn07XHJcblxyXG5leHBvcnRzLnJlbW92ZVBzQ2xhc3NlcyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgdmFyIGNsc0xpc3QgPSBjbHMubGlzdChlbGVtZW50KTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNsc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBjbGFzc05hbWUgPSBjbHNMaXN0W2ldO1xyXG4gICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKCdwcy0nKSA9PT0gMCkge1xyXG4gICAgICBjbHMucmVtb3ZlKGVsZW1lbnQsIGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0cy5vdXRlcldpZHRoID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICByZXR1cm4gdG9JbnQoZG9tLmNzcyhlbGVtZW50LCAnd2lkdGgnKSkgK1xyXG4gICAgICAgICB0b0ludChkb20uY3NzKGVsZW1lbnQsICdwYWRkaW5nTGVmdCcpKSArXHJcbiAgICAgICAgIHRvSW50KGRvbS5jc3MoZWxlbWVudCwgJ3BhZGRpbmdSaWdodCcpKSArXHJcbiAgICAgICAgIHRvSW50KGRvbS5jc3MoZWxlbWVudCwgJ2JvcmRlckxlZnRXaWR0aCcpKSArXHJcbiAgICAgICAgIHRvSW50KGRvbS5jc3MoZWxlbWVudCwgJ2JvcmRlclJpZ2h0V2lkdGgnKSk7XHJcbn07XHJcblxyXG5leHBvcnRzLnN0YXJ0U2Nyb2xsaW5nID0gZnVuY3Rpb24gKGVsZW1lbnQsIGF4aXMpIHtcclxuICBjbHMuYWRkKGVsZW1lbnQsICdwcy1pbi1zY3JvbGxpbmcnKTtcclxuICBpZiAodHlwZW9mIGF4aXMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBjbHMuYWRkKGVsZW1lbnQsICdwcy0nICsgYXhpcyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNscy5hZGQoZWxlbWVudCwgJ3BzLXgnKTtcclxuICAgIGNscy5hZGQoZWxlbWVudCwgJ3BzLXknKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnRzLnN0b3BTY3JvbGxpbmcgPSBmdW5jdGlvbiAoZWxlbWVudCwgYXhpcykge1xyXG4gIGNscy5yZW1vdmUoZWxlbWVudCwgJ3BzLWluLXNjcm9sbGluZycpO1xyXG4gIGlmICh0eXBlb2YgYXhpcyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGNscy5yZW1vdmUoZWxlbWVudCwgJ3BzLScgKyBheGlzKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2xzLnJlbW92ZShlbGVtZW50LCAncHMteCcpO1xyXG4gICAgY2xzLnJlbW92ZShlbGVtZW50LCAncHMteScpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydHMuZW52ID0ge1xyXG4gIGlzV2ViS2l0OiAnV2Via2l0QXBwZWFyYW5jZScgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxyXG4gIHN1cHBvcnRzVG91Y2g6ICgoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSxcclxuICBzdXBwb3J0c0llUG9pbnRlcjogd2luZG93Lm5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzICE9PSBudWxsXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBkZXN0cm95ID0gcmVxdWlyZSgnLi9wbHVnaW4vZGVzdHJveScpO1xyXG52YXIgaW5pdGlhbGl6ZSA9IHJlcXVpcmUoJy4vcGx1Z2luL2luaXRpYWxpemUnKTtcclxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoJy4vcGx1Z2luL3VwZGF0ZScpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgaW5pdGlhbGl6ZTogaW5pdGlhbGl6ZSxcclxuICB1cGRhdGU6IHVwZGF0ZSxcclxuICBkZXN0cm95OiBkZXN0cm95XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGhhbmRsZXJzOiBbJ2NsaWNrLXJhaWwnLCAnZHJhZy1zY3JvbGxiYXInLCAna2V5Ym9hcmQnLCAnd2hlZWwnLCAndG91Y2gnXSxcclxuICBtYXhTY3JvbGxiYXJMZW5ndGg6IG51bGwsXHJcbiAgbWluU2Nyb2xsYmFyTGVuZ3RoOiBudWxsLFxyXG4gIHNjcm9sbFhNYXJnaW5PZmZzZXQ6IDAsXHJcbiAgc2Nyb2xsWU1hcmdpbk9mZnNldDogMCxcclxuICBzdXBwcmVzc1Njcm9sbFg6IGZhbHNlLFxyXG4gIHN1cHByZXNzU2Nyb2xsWTogZmFsc2UsXHJcbiAgc3dpcGVQcm9wYWdhdGlvbjogdHJ1ZSxcclxuICB1c2VCb3RoV2hlZWxBeGVzOiBmYWxzZSxcclxuICB3aGVlbFByb3BhZ2F0aW9uOiBmYWxzZSxcclxuICB3aGVlbFNwZWVkOiAxLFxyXG4gIHRoZW1lOiAnZGVmYXVsdCdcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIF8gPSByZXF1aXJlKCcuLi9saWIvaGVscGVyJyk7XHJcbnZhciBkb20gPSByZXF1aXJlKCcuLi9saWIvZG9tJyk7XHJcbnZhciBpbnN0YW5jZXMgPSByZXF1aXJlKCcuL2luc3RhbmNlcycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIHZhciBpID0gaW5zdGFuY2VzLmdldChlbGVtZW50KTtcclxuXHJcbiAgaWYgKCFpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpLmV2ZW50LnVuYmluZEFsbCgpO1xyXG4gIGRvbS5yZW1vdmUoaS5zY3JvbGxiYXJYKTtcclxuICBkb20ucmVtb3ZlKGkuc2Nyb2xsYmFyWSk7XHJcbiAgZG9tLnJlbW92ZShpLnNjcm9sbGJhclhSYWlsKTtcclxuICBkb20ucmVtb3ZlKGkuc2Nyb2xsYmFyWVJhaWwpO1xyXG4gIF8ucmVtb3ZlUHNDbGFzc2VzKGVsZW1lbnQpO1xyXG5cclxuICBpbnN0YW5jZXMucmVtb3ZlKGVsZW1lbnQpO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgaW5zdGFuY2VzID0gcmVxdWlyZSgnLi4vaW5zdGFuY2VzJyk7XHJcbnZhciB1cGRhdGVHZW9tZXRyeSA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1nZW9tZXRyeScpO1xyXG52YXIgdXBkYXRlU2Nyb2xsID0gcmVxdWlyZSgnLi4vdXBkYXRlLXNjcm9sbCcpO1xyXG5cclxuZnVuY3Rpb24gYmluZENsaWNrUmFpbEhhbmRsZXIoZWxlbWVudCwgaSkge1xyXG4gIGZ1bmN0aW9uIHBhZ2VPZmZzZXQoZWwpIHtcclxuICAgIHJldHVybiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICB9XHJcbiAgdmFyIHN0b3BQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uIChlKSB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IH07XHJcblxyXG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclksICdjbGljaycsIHN0b3BQcm9wYWdhdGlvbik7XHJcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWVJhaWwsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgcG9zaXRpb25Ub3AgPSBlLnBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0IC0gcGFnZU9mZnNldChpLnNjcm9sbGJhcllSYWlsKS50b3A7XHJcbiAgICB2YXIgZGlyZWN0aW9uID0gcG9zaXRpb25Ub3AgPiBpLnNjcm9sbGJhcllUb3AgPyAxIDogLTE7XHJcblxyXG4gICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICd0b3AnLCBlbGVtZW50LnNjcm9sbFRvcCArIGRpcmVjdGlvbiAqIGkuY29udGFpbmVySGVpZ2h0KTtcclxuICAgIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xyXG5cclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfSk7XHJcblxyXG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclgsICdjbGljaycsIHN0b3BQcm9wYWdhdGlvbik7XHJcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWFJhaWwsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgcG9zaXRpb25MZWZ0ID0gZS5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCAtIHBhZ2VPZmZzZXQoaS5zY3JvbGxiYXJYUmFpbCkubGVmdDtcclxuICAgIHZhciBkaXJlY3Rpb24gPSBwb3NpdGlvbkxlZnQgPiBpLnNjcm9sbGJhclhMZWZ0ID8gMSA6IC0xO1xyXG5cclxuICAgIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAnbGVmdCcsIGVsZW1lbnQuc2Nyb2xsTGVmdCArIGRpcmVjdGlvbiAqIGkuY29udGFpbmVyV2lkdGgpO1xyXG4gICAgdXBkYXRlR2VvbWV0cnkoZWxlbWVudCk7XHJcblxyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIHZhciBpID0gaW5zdGFuY2VzLmdldChlbGVtZW50KTtcclxuICBiaW5kQ2xpY2tSYWlsSGFuZGxlcihlbGVtZW50LCBpKTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIF8gPSByZXF1aXJlKCcuLi8uLi9saWIvaGVscGVyJyk7XHJcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi9saWIvZG9tJyk7XHJcbnZhciBpbnN0YW5jZXMgPSByZXF1aXJlKCcuLi9pbnN0YW5jZXMnKTtcclxudmFyIHVwZGF0ZUdlb21ldHJ5ID0gcmVxdWlyZSgnLi4vdXBkYXRlLWdlb21ldHJ5Jyk7XHJcbnZhciB1cGRhdGVTY3JvbGwgPSByZXF1aXJlKCcuLi91cGRhdGUtc2Nyb2xsJyk7XHJcblxyXG5mdW5jdGlvbiBiaW5kTW91c2VTY3JvbGxYSGFuZGxlcihlbGVtZW50LCBpKSB7XHJcbiAgdmFyIGN1cnJlbnRMZWZ0ID0gbnVsbDtcclxuICB2YXIgY3VycmVudFBhZ2VYID0gbnVsbDtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsTGVmdChkZWx0YVgpIHtcclxuICAgIHZhciBuZXdMZWZ0ID0gY3VycmVudExlZnQgKyAoZGVsdGFYICogaS5yYWlsWFJhdGlvKTtcclxuICAgIHZhciBtYXhMZWZ0ID0gTWF0aC5tYXgoMCwgaS5zY3JvbGxiYXJYUmFpbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSArIChpLnJhaWxYUmF0aW8gKiAoaS5yYWlsWFdpZHRoIC0gaS5zY3JvbGxiYXJYV2lkdGgpKTtcclxuXHJcbiAgICBpZiAobmV3TGVmdCA8IDApIHtcclxuICAgICAgaS5zY3JvbGxiYXJYTGVmdCA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKG5ld0xlZnQgPiBtYXhMZWZ0KSB7XHJcbiAgICAgIGkuc2Nyb2xsYmFyWExlZnQgPSBtYXhMZWZ0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaS5zY3JvbGxiYXJYTGVmdCA9IG5ld0xlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNjcm9sbExlZnQgPSBfLnRvSW50KGkuc2Nyb2xsYmFyWExlZnQgKiAoaS5jb250ZW50V2lkdGggLSBpLmNvbnRhaW5lcldpZHRoKSAvIChpLmNvbnRhaW5lcldpZHRoIC0gKGkucmFpbFhSYXRpbyAqIGkuc2Nyb2xsYmFyWFdpZHRoKSkpIC0gaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQ7XHJcbiAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ2xlZnQnLCBzY3JvbGxMZWZ0KTtcclxuICB9XHJcblxyXG4gIHZhciBtb3VzZU1vdmVIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHVwZGF0ZVNjcm9sbExlZnQoZS5wYWdlWCAtIGN1cnJlbnRQYWdlWCk7XHJcbiAgICB1cGRhdGVHZW9tZXRyeShlbGVtZW50KTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIG1vdXNlVXBIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgXy5zdG9wU2Nyb2xsaW5nKGVsZW1lbnQsICd4Jyk7XHJcbiAgICBpLmV2ZW50LnVuYmluZChpLm93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcclxuICB9O1xyXG5cclxuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJYLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGN1cnJlbnRQYWdlWCA9IGUucGFnZVg7XHJcbiAgICBjdXJyZW50TGVmdCA9IF8udG9JbnQoZG9tLmNzcyhpLnNjcm9sbGJhclgsICdsZWZ0JykpICogaS5yYWlsWFJhdGlvO1xyXG4gICAgXy5zdGFydFNjcm9sbGluZyhlbGVtZW50LCAneCcpO1xyXG5cclxuICAgIGkuZXZlbnQuYmluZChpLm93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcclxuICAgIGkuZXZlbnQub25jZShpLm93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xyXG5cclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmRNb3VzZVNjcm9sbFlIYW5kbGVyKGVsZW1lbnQsIGkpIHtcclxuICB2YXIgY3VycmVudFRvcCA9IG51bGw7XHJcbiAgdmFyIGN1cnJlbnRQYWdlWSA9IG51bGw7XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbFRvcChkZWx0YVkpIHtcclxuICAgIHZhciBuZXdUb3AgPSBjdXJyZW50VG9wICsgKGRlbHRhWSAqIGkucmFpbFlSYXRpbyk7XHJcbiAgICB2YXIgbWF4VG9wID0gTWF0aC5tYXgoMCwgaS5zY3JvbGxiYXJZUmFpbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApICsgKGkucmFpbFlSYXRpbyAqIChpLnJhaWxZSGVpZ2h0IC0gaS5zY3JvbGxiYXJZSGVpZ2h0KSk7XHJcblxyXG4gICAgaWYgKG5ld1RvcCA8IDApIHtcclxuICAgICAgaS5zY3JvbGxiYXJZVG9wID0gMDtcclxuICAgIH0gZWxzZSBpZiAobmV3VG9wID4gbWF4VG9wKSB7XHJcbiAgICAgIGkuc2Nyb2xsYmFyWVRvcCA9IG1heFRvcDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGkuc2Nyb2xsYmFyWVRvcCA9IG5ld1RvcDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2Nyb2xsVG9wID0gXy50b0ludChpLnNjcm9sbGJhcllUb3AgKiAoaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQpIC8gKGkuY29udGFpbmVySGVpZ2h0IC0gKGkucmFpbFlSYXRpbyAqIGkuc2Nyb2xsYmFyWUhlaWdodCkpKTtcclxuICAgIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAndG9wJywgc2Nyb2xsVG9wKTtcclxuICB9XHJcblxyXG4gIHZhciBtb3VzZU1vdmVIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHVwZGF0ZVNjcm9sbFRvcChlLnBhZ2VZIC0gY3VycmVudFBhZ2VZKTtcclxuICAgIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICB2YXIgbW91c2VVcEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBfLnN0b3BTY3JvbGxpbmcoZWxlbWVudCwgJ3knKTtcclxuICAgIGkuZXZlbnQudW5iaW5kKGkub3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xyXG4gIH07XHJcblxyXG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclksICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY3VycmVudFBhZ2VZID0gZS5wYWdlWTtcclxuICAgIGN1cnJlbnRUb3AgPSBfLnRvSW50KGRvbS5jc3MoaS5zY3JvbGxiYXJZLCAndG9wJykpICogaS5yYWlsWVJhdGlvO1xyXG4gICAgXy5zdGFydFNjcm9sbGluZyhlbGVtZW50LCAneScpO1xyXG5cclxuICAgIGkuZXZlbnQuYmluZChpLm93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcclxuICAgIGkuZXZlbnQub25jZShpLm93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xyXG5cclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICB2YXIgaSA9IGluc3RhbmNlcy5nZXQoZWxlbWVudCk7XHJcbiAgYmluZE1vdXNlU2Nyb2xsWEhhbmRsZXIoZWxlbWVudCwgaSk7XHJcbiAgYmluZE1vdXNlU2Nyb2xsWUhhbmRsZXIoZWxlbWVudCwgaSk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBfID0gcmVxdWlyZSgnLi4vLi4vbGliL2hlbHBlcicpO1xyXG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vbGliL2RvbScpO1xyXG52YXIgaW5zdGFuY2VzID0gcmVxdWlyZSgnLi4vaW5zdGFuY2VzJyk7XHJcbnZhciB1cGRhdGVHZW9tZXRyeSA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1nZW9tZXRyeScpO1xyXG52YXIgdXBkYXRlU2Nyb2xsID0gcmVxdWlyZSgnLi4vdXBkYXRlLXNjcm9sbCcpO1xyXG5cclxuZnVuY3Rpb24gYmluZEtleWJvYXJkSGFuZGxlcihlbGVtZW50LCBpKSB7XHJcbiAgdmFyIGhvdmVyZWQgPSBmYWxzZTtcclxuICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBob3ZlcmVkID0gdHJ1ZTtcclxuICB9KTtcclxuICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBob3ZlcmVkID0gZmFsc2U7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBzaG91bGRQcmV2ZW50ID0gZmFsc2U7XHJcbiAgZnVuY3Rpb24gc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpIHtcclxuICAgIHZhciBzY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIGlmIChkZWx0YVggPT09IDApIHtcclxuICAgICAgaWYgKCFpLnNjcm9sbGJhcllBY3RpdmUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKChzY3JvbGxUb3AgPT09IDAgJiYgZGVsdGFZID4gMCkgfHwgKHNjcm9sbFRvcCA+PSBpLmNvbnRlbnRIZWlnaHQgLSBpLmNvbnRhaW5lckhlaWdodCAmJiBkZWx0YVkgPCAwKSkge1xyXG4gICAgICAgIHJldHVybiAhaS5zZXR0aW5ncy53aGVlbFByb3BhZ2F0aW9uO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICBpZiAoZGVsdGFZID09PSAwKSB7XHJcbiAgICAgIGlmICghaS5zY3JvbGxiYXJYQWN0aXZlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgoc2Nyb2xsTGVmdCA9PT0gMCAmJiBkZWx0YVggPCAwKSB8fCAoc2Nyb2xsTGVmdCA+PSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGggJiYgZGVsdGFYID4gMCkpIHtcclxuICAgICAgICByZXR1cm4gIWkuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpLmV2ZW50LmJpbmQoaS5vd25lckRvY3VtZW50LCAna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoKGUuaXNEZWZhdWx0UHJldmVudGVkICYmIGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHx8IGUuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZvY3VzZWQgPSBkb20ubWF0Y2hlcyhpLnNjcm9sbGJhclgsICc6Zm9jdXMnKSB8fFxyXG4gICAgICAgICAgICAgICAgICBkb20ubWF0Y2hlcyhpLnNjcm9sbGJhclksICc6Zm9jdXMnKTtcclxuXHJcbiAgICBpZiAoIWhvdmVyZWQgJiYgIWZvY3VzZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgOiBpLm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgIGlmIChhY3RpdmVFbGVtZW50KSB7XHJcbiAgICAgIGlmIChhY3RpdmVFbGVtZW50LnRhZ05hbWUgPT09ICdJRlJBTUUnKSB7XHJcbiAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQuY29udGVudERvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gZ28gZGVlcGVyIGlmIGVsZW1lbnQgaXMgYSB3ZWJjb21wb25lbnRcclxuICAgICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudC5zaGFkb3dSb290KSB7XHJcbiAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChfLmlzRWRpdGFibGUoYWN0aXZlRWxlbWVudCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGVsdGFYID0gMDtcclxuICAgIHZhciBkZWx0YVkgPSAwO1xyXG5cclxuICAgIHN3aXRjaCAoZS53aGljaCkge1xyXG4gICAgY2FzZSAzNzogLy8gbGVmdFxyXG4gICAgICBpZiAoZS5tZXRhS2V5KSB7XHJcbiAgICAgICAgZGVsdGFYID0gLWkuY29udGVudFdpZHRoO1xyXG4gICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XHJcbiAgICAgICAgZGVsdGFYID0gLWkuY29udGFpbmVyV2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsdGFYID0gLTMwO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAzODogLy8gdXBcclxuICAgICAgaWYgKGUubWV0YUtleSkge1xyXG4gICAgICAgIGRlbHRhWSA9IGkuY29udGVudEhlaWdodDtcclxuICAgICAgfSBlbHNlIGlmIChlLmFsdEtleSkge1xyXG4gICAgICAgIGRlbHRhWSA9IGkuY29udGFpbmVySGVpZ2h0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbHRhWSA9IDMwO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAzOTogLy8gcmlnaHRcclxuICAgICAgaWYgKGUubWV0YUtleSkge1xyXG4gICAgICAgIGRlbHRhWCA9IGkuY29udGVudFdpZHRoO1xyXG4gICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XHJcbiAgICAgICAgZGVsdGFYID0gaS5jb250YWluZXJXaWR0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWx0YVggPSAzMDtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNDA6IC8vIGRvd25cclxuICAgICAgaWYgKGUubWV0YUtleSkge1xyXG4gICAgICAgIGRlbHRhWSA9IC1pLmNvbnRlbnRIZWlnaHQ7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5hbHRLZXkpIHtcclxuICAgICAgICBkZWx0YVkgPSAtaS5jb250YWluZXJIZWlnaHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsdGFZID0gLTMwO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAzMzogLy8gcGFnZSB1cFxyXG4gICAgICBkZWx0YVkgPSA5MDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDMyOiAvLyBzcGFjZSBiYXJcclxuICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcclxuICAgICAgICBkZWx0YVkgPSA5MDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWx0YVkgPSAtOTA7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDM0OiAvLyBwYWdlIGRvd25cclxuICAgICAgZGVsdGFZID0gLTkwO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzU6IC8vIGVuZFxyXG4gICAgICBpZiAoZS5jdHJsS2V5KSB7XHJcbiAgICAgICAgZGVsdGFZID0gLWkuY29udGVudEhlaWdodDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWx0YVkgPSAtaS5jb250YWluZXJIZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDM2OiAvLyBob21lXHJcbiAgICAgIGlmIChlLmN0cmxLZXkpIHtcclxuICAgICAgICBkZWx0YVkgPSBlbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWx0YVkgPSBpLmNvbnRhaW5lckhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ3RvcCcsIGVsZW1lbnQuc2Nyb2xsVG9wIC0gZGVsdGFZKTtcclxuICAgIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAnbGVmdCcsIGVsZW1lbnQuc2Nyb2xsTGVmdCArIGRlbHRhWCk7XHJcbiAgICB1cGRhdGVHZW9tZXRyeShlbGVtZW50KTtcclxuXHJcbiAgICBzaG91bGRQcmV2ZW50ID0gc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpO1xyXG4gICAgaWYgKHNob3VsZFByZXZlbnQpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgdmFyIGkgPSBpbnN0YW5jZXMuZ2V0KGVsZW1lbnQpO1xyXG4gIGJpbmRLZXlib2FyZEhhbmRsZXIoZWxlbWVudCwgaSk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBpbnN0YW5jZXMgPSByZXF1aXJlKCcuLi9pbnN0YW5jZXMnKTtcclxudmFyIHVwZGF0ZUdlb21ldHJ5ID0gcmVxdWlyZSgnLi4vdXBkYXRlLWdlb21ldHJ5Jyk7XHJcbnZhciB1cGRhdGVTY3JvbGwgPSByZXF1aXJlKCcuLi91cGRhdGUtc2Nyb2xsJyk7XHJcblxyXG5mdW5jdGlvbiBiaW5kTW91c2VXaGVlbEhhbmRsZXIoZWxlbWVudCwgaSkge1xyXG4gIHZhciBzaG91bGRQcmV2ZW50ID0gZmFsc2U7XHJcblxyXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKSB7XHJcbiAgICB2YXIgc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICBpZiAoZGVsdGFYID09PSAwKSB7XHJcbiAgICAgIGlmICghaS5zY3JvbGxiYXJZQWN0aXZlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgoc2Nyb2xsVG9wID09PSAwICYmIGRlbHRhWSA+IDApIHx8IChzY3JvbGxUb3AgPj0gaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQgJiYgZGVsdGFZIDwgMCkpIHtcclxuICAgICAgICByZXR1cm4gIWkuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgaWYgKGRlbHRhWSA9PT0gMCkge1xyXG4gICAgICBpZiAoIWkuc2Nyb2xsYmFyWEFjdGl2ZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoKHNjcm9sbExlZnQgPT09IDAgJiYgZGVsdGFYIDwgMCkgfHwgKHNjcm9sbExlZnQgPj0gaS5jb250ZW50V2lkdGggLSBpLmNvbnRhaW5lcldpZHRoICYmIGRlbHRhWCA+IDApKSB7XHJcbiAgICAgICAgcmV0dXJuICFpLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb247XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RGVsdGFGcm9tRXZlbnQoZSkge1xyXG4gICAgdmFyIGRlbHRhWCA9IGUuZGVsdGFYO1xyXG4gICAgdmFyIGRlbHRhWSA9IC0xICogZS5kZWx0YVk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBkZWx0YVggPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIGRlbHRhWSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAvLyBPUyBYIFNhZmFyaVxyXG4gICAgICBkZWx0YVggPSAtMSAqIGUud2hlZWxEZWx0YVggLyA2O1xyXG4gICAgICBkZWx0YVkgPSBlLndoZWVsRGVsdGFZIC8gNjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS5kZWx0YU1vZGUgJiYgZS5kZWx0YU1vZGUgPT09IDEpIHtcclxuICAgICAgLy8gRmlyZWZveCBpbiBkZWx0YU1vZGUgMTogTGluZSBzY3JvbGxpbmdcclxuICAgICAgZGVsdGFYICo9IDEwO1xyXG4gICAgICBkZWx0YVkgKj0gMTA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlbHRhWCAhPT0gZGVsdGFYICYmIGRlbHRhWSAhPT0gZGVsdGFZLyogTmFOIGNoZWNrcyAqLykge1xyXG4gICAgICAvLyBJRSBpbiBzb21lIG1vdXNlIGRyaXZlcnNcclxuICAgICAgZGVsdGFYID0gMDtcclxuICAgICAgZGVsdGFZID0gZS53aGVlbERlbHRhO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XHJcbiAgICAgIC8vIHJldmVyc2UgYXhpcyB3aXRoIHNoaWZ0IGtleVxyXG4gICAgICByZXR1cm4gWy1kZWx0YVksIC1kZWx0YVhdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtkZWx0YVgsIGRlbHRhWV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG91bGRCZUNvbnN1bWVkQnlDaGlsZChkZWx0YVgsIGRlbHRhWSkge1xyXG4gICAgdmFyIGNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYTpob3Zlciwgc2VsZWN0W211bHRpcGxlXTpob3ZlciwgLnBzLWNoaWxkOmhvdmVyJyk7XHJcbiAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgaWYgKGNoaWxkLmNsYXNzTmFtZS5tYXRjaCgvcHMtbXVzdC1wcm9wYWdhdGUvKSkge1xyXG4gICAgICAgIC8vIGZvcmNlIGNvbnN1bXB0aW9uIGJ5IGNoaWxkXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjaGlsZCkub3ZlcmZsb3cubWF0Y2goLyhzY3JvbGx8YXV0bykvKSkge1xyXG4gICAgICAgIC8vIGlmIG5vdCBzY3JvbGxhYmxlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgIHZhciBtYXhTY3JvbGxUb3AgPSBjaGlsZC5zY3JvbGxIZWlnaHQgLSBjaGlsZC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgIGlmIChtYXhTY3JvbGxUb3AgPiAwKSB7XHJcbiAgICAgICAgaWYgKCEoY2hpbGQuc2Nyb2xsVG9wID09PSAwICYmIGRlbHRhWSA+IDApICYmICEoY2hpbGQuc2Nyb2xsVG9wID09PSBtYXhTY3JvbGxUb3AgJiYgZGVsdGFZIDwgMCkpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB2YXIgbWF4U2Nyb2xsTGVmdCA9IGNoaWxkLnNjcm9sbExlZnQgLSBjaGlsZC5jbGllbnRXaWR0aDtcclxuICAgICAgaWYgKG1heFNjcm9sbExlZnQgPiAwKSB7XHJcbiAgICAgICAgaWYgKCEoY2hpbGQuc2Nyb2xsTGVmdCA9PT0gMCAmJiBkZWx0YVggPCAwKSAmJiAhKGNoaWxkLnNjcm9sbExlZnQgPT09IG1heFNjcm9sbExlZnQgJiYgZGVsdGFYID4gMCkpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW91c2V3aGVlbEhhbmRsZXIoZSkge1xyXG4gICAgdmFyIGRlbHRhID0gZ2V0RGVsdGFGcm9tRXZlbnQoZSk7XHJcblxyXG4gICAgdmFyIGRlbHRhWCA9IGRlbHRhWzBdO1xyXG4gICAgdmFyIGRlbHRhWSA9IGRlbHRhWzFdO1xyXG5cclxuICAgIGlmIChzaG91bGRCZUNvbnN1bWVkQnlDaGlsZChkZWx0YVgsIGRlbHRhWSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZFByZXZlbnQgPSBmYWxzZTtcclxuICAgIGlmICghaS5zZXR0aW5ncy51c2VCb3RoV2hlZWxBeGVzKSB7XHJcbiAgICAgIC8vIGRlbHRhWCB3aWxsIG9ubHkgYmUgdXNlZCBmb3IgaG9yaXpvbnRhbCBzY3JvbGxpbmcgYW5kIGRlbHRhWSB3aWxsXHJcbiAgICAgIC8vIG9ubHkgYmUgdXNlZCBmb3IgdmVydGljYWwgc2Nyb2xsaW5nIC0gdGhpcyBpcyB0aGUgZGVmYXVsdFxyXG4gICAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ3RvcCcsIGVsZW1lbnQuc2Nyb2xsVG9wIC0gKGRlbHRhWSAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZCkpO1xyXG4gICAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ2xlZnQnLCBlbGVtZW50LnNjcm9sbExlZnQgKyAoZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkKSk7XHJcbiAgICB9IGVsc2UgaWYgKGkuc2Nyb2xsYmFyWUFjdGl2ZSAmJiAhaS5zY3JvbGxiYXJYQWN0aXZlKSB7XHJcbiAgICAgIC8vIG9ubHkgdmVydGljYWwgc2Nyb2xsYmFyIGlzIGFjdGl2ZSBhbmQgdXNlQm90aFdoZWVsQXhlcyBvcHRpb24gaXNcclxuICAgICAgLy8gYWN0aXZlLCBzbyBsZXQncyBzY3JvbGwgdmVydGljYWwgYmFyIHVzaW5nIGJvdGggbW91c2Ugd2hlZWwgYXhlc1xyXG4gICAgICBpZiAoZGVsdGFZKSB7XHJcbiAgICAgICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICd0b3AnLCBlbGVtZW50LnNjcm9sbFRvcCAtIChkZWx0YVkgKiBpLnNldHRpbmdzLndoZWVsU3BlZWQpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ3RvcCcsIGVsZW1lbnQuc2Nyb2xsVG9wICsgKGRlbHRhWCAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHNob3VsZFByZXZlbnQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChpLnNjcm9sbGJhclhBY3RpdmUgJiYgIWkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xyXG4gICAgICAvLyB1c2VCb3RoV2hlZWxBeGVzIGFuZCBvbmx5IGhvcml6b250YWwgYmFyIGlzIGFjdGl2ZSwgc28gdXNlIGJvdGhcclxuICAgICAgLy8gd2hlZWwgYXhlcyBmb3IgaG9yaXpvbnRhbCBiYXJcclxuICAgICAgaWYgKGRlbHRhWCkge1xyXG4gICAgICAgIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAnbGVmdCcsIGVsZW1lbnQuc2Nyb2xsTGVmdCArIChkZWx0YVggKiBpLnNldHRpbmdzLndoZWVsU3BlZWQpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ2xlZnQnLCBlbGVtZW50LnNjcm9sbExlZnQgLSAoZGVsdGFZICogaS5zZXR0aW5ncy53aGVlbFNwZWVkKSk7XHJcbiAgICAgIH1cclxuICAgICAgc2hvdWxkUHJldmVudCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlR2VvbWV0cnkoZWxlbWVudCk7XHJcblxyXG4gICAgc2hvdWxkUHJldmVudCA9IChzaG91bGRQcmV2ZW50IHx8IHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKSk7XHJcbiAgICBpZiAoc2hvdWxkUHJldmVudCkge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHdpbmRvdy5vbndoZWVsICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3doZWVsJywgbW91c2V3aGVlbEhhbmRsZXIpO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5vbm1vdXNld2hlZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnbW91c2V3aGVlbCcsIG1vdXNld2hlZWxIYW5kbGVyKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICB2YXIgaSA9IGluc3RhbmNlcy5nZXQoZWxlbWVudCk7XHJcbiAgYmluZE1vdXNlV2hlZWxIYW5kbGVyKGVsZW1lbnQsIGkpO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgaW5zdGFuY2VzID0gcmVxdWlyZSgnLi4vaW5zdGFuY2VzJyk7XHJcbnZhciB1cGRhdGVHZW9tZXRyeSA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1nZW9tZXRyeScpO1xyXG5cclxuZnVuY3Rpb24gYmluZE5hdGl2ZVNjcm9sbEhhbmRsZXIoZWxlbWVudCwgaSkge1xyXG4gIGkuZXZlbnQuYmluZChlbGVtZW50LCAnc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdXBkYXRlR2VvbWV0cnkoZWxlbWVudCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICB2YXIgaSA9IGluc3RhbmNlcy5nZXQoZWxlbWVudCk7XHJcbiAgYmluZE5hdGl2ZVNjcm9sbEhhbmRsZXIoZWxlbWVudCwgaSk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBfID0gcmVxdWlyZSgnLi4vLi4vbGliL2hlbHBlcicpO1xyXG52YXIgaW5zdGFuY2VzID0gcmVxdWlyZSgnLi4vaW5zdGFuY2VzJyk7XHJcbnZhciB1cGRhdGVHZW9tZXRyeSA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1nZW9tZXRyeScpO1xyXG52YXIgdXBkYXRlU2Nyb2xsID0gcmVxdWlyZSgnLi4vdXBkYXRlLXNjcm9sbCcpO1xyXG5cclxuZnVuY3Rpb24gYmluZFNlbGVjdGlvbkhhbmRsZXIoZWxlbWVudCwgaSkge1xyXG4gIGZ1bmN0aW9uIGdldFJhbmdlTm9kZSgpIHtcclxuICAgIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uID8gd2luZG93LmdldFNlbGVjdGlvbigpIDpcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRTZWxlY3Rpb24gPyBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSA6ICcnO1xyXG4gICAgaWYgKHNlbGVjdGlvbi50b1N0cmluZygpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKS5jb21tb25BbmNlc3RvckNvbnRhaW5lcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBzY3JvbGxpbmdMb29wID0gbnVsbDtcclxuICB2YXIgc2Nyb2xsRGlmZiA9IHt0b3A6IDAsIGxlZnQ6IDB9O1xyXG4gIGZ1bmN0aW9uIHN0YXJ0U2Nyb2xsaW5nKCkge1xyXG4gICAgaWYgKCFzY3JvbGxpbmdMb29wKSB7XHJcbiAgICAgIHNjcm9sbGluZ0xvb3AgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZXMuZ2V0KGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKHNjcm9sbGluZ0xvb3ApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICd0b3AnLCBlbGVtZW50LnNjcm9sbFRvcCArIHNjcm9sbERpZmYudG9wKTtcclxuICAgICAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ2xlZnQnLCBlbGVtZW50LnNjcm9sbExlZnQgKyBzY3JvbGxEaWZmLmxlZnQpO1xyXG4gICAgICAgIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xyXG4gICAgICB9LCA1MCk7IC8vIGV2ZXJ5IC4xIHNlY1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBzdG9wU2Nyb2xsaW5nKCkge1xyXG4gICAgaWYgKHNjcm9sbGluZ0xvb3ApIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChzY3JvbGxpbmdMb29wKTtcclxuICAgICAgc2Nyb2xsaW5nTG9vcCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBfLnN0b3BTY3JvbGxpbmcoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICB2YXIgaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGkuZXZlbnQuYmluZChpLm93bmVyRG9jdW1lbnQsICdzZWxlY3Rpb25jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZWxlbWVudC5jb250YWlucyhnZXRSYW5nZU5vZGUoKSkpIHtcclxuICAgICAgaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgIHN0b3BTY3JvbGxpbmcoKTtcclxuICAgIH1cclxuICB9KTtcclxuICBpLmV2ZW50LmJpbmQod2luZG93LCAnbW91c2V1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChpc1NlbGVjdGVkKSB7XHJcbiAgICAgIGlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgc3RvcFNjcm9sbGluZygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGkuZXZlbnQuYmluZCh3aW5kb3csICdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChpc1NlbGVjdGVkKSB7XHJcbiAgICAgIGlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgc3RvcFNjcm9sbGluZygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpLmV2ZW50LmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChpc1NlbGVjdGVkKSB7XHJcbiAgICAgIHZhciBtb3VzZVBvc2l0aW9uID0ge3g6IGUucGFnZVgsIHk6IGUucGFnZVl9O1xyXG4gICAgICB2YXIgY29udGFpbmVyR2VvbWV0cnkgPSB7XHJcbiAgICAgICAgbGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0LFxyXG4gICAgICAgIHJpZ2h0OiBlbGVtZW50Lm9mZnNldExlZnQgKyBlbGVtZW50Lm9mZnNldFdpZHRoLFxyXG4gICAgICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXHJcbiAgICAgICAgYm90dG9tOiBlbGVtZW50Lm9mZnNldFRvcCArIGVsZW1lbnQub2Zmc2V0SGVpZ2h0XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAobW91c2VQb3NpdGlvbi54IDwgY29udGFpbmVyR2VvbWV0cnkubGVmdCArIDMpIHtcclxuICAgICAgICBzY3JvbGxEaWZmLmxlZnQgPSAtNTtcclxuICAgICAgICBfLnN0YXJ0U2Nyb2xsaW5nKGVsZW1lbnQsICd4Jyk7XHJcbiAgICAgIH0gZWxzZSBpZiAobW91c2VQb3NpdGlvbi54ID4gY29udGFpbmVyR2VvbWV0cnkucmlnaHQgLSAzKSB7XHJcbiAgICAgICAgc2Nyb2xsRGlmZi5sZWZ0ID0gNTtcclxuICAgICAgICBfLnN0YXJ0U2Nyb2xsaW5nKGVsZW1lbnQsICd4Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2Nyb2xsRGlmZi5sZWZ0ID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1vdXNlUG9zaXRpb24ueSA8IGNvbnRhaW5lckdlb21ldHJ5LnRvcCArIDMpIHtcclxuICAgICAgICBpZiAoY29udGFpbmVyR2VvbWV0cnkudG9wICsgMyAtIG1vdXNlUG9zaXRpb24ueSA8IDUpIHtcclxuICAgICAgICAgIHNjcm9sbERpZmYudG9wID0gLTU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNjcm9sbERpZmYudG9wID0gLTIwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfLnN0YXJ0U2Nyb2xsaW5nKGVsZW1lbnQsICd5Jyk7XHJcbiAgICAgIH0gZWxzZSBpZiAobW91c2VQb3NpdGlvbi55ID4gY29udGFpbmVyR2VvbWV0cnkuYm90dG9tIC0gMykge1xyXG4gICAgICAgIGlmIChtb3VzZVBvc2l0aW9uLnkgLSBjb250YWluZXJHZW9tZXRyeS5ib3R0b20gKyAzIDwgNSkge1xyXG4gICAgICAgICAgc2Nyb2xsRGlmZi50b3AgPSA1O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzY3JvbGxEaWZmLnRvcCA9IDIwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfLnN0YXJ0U2Nyb2xsaW5nKGVsZW1lbnQsICd5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2Nyb2xsRGlmZi50b3AgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc2Nyb2xsRGlmZi50b3AgPT09IDAgJiYgc2Nyb2xsRGlmZi5sZWZ0ID09PSAwKSB7XHJcbiAgICAgICAgc3RvcFNjcm9sbGluZygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXJ0U2Nyb2xsaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIHZhciBpID0gaW5zdGFuY2VzLmdldChlbGVtZW50KTtcclxuICBiaW5kU2VsZWN0aW9uSGFuZGxlcihlbGVtZW50LCBpKTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIF8gPSByZXF1aXJlKCcuLi8uLi9saWIvaGVscGVyJyk7XHJcbnZhciBpbnN0YW5jZXMgPSByZXF1aXJlKCcuLi9pbnN0YW5jZXMnKTtcclxudmFyIHVwZGF0ZUdlb21ldHJ5ID0gcmVxdWlyZSgnLi4vdXBkYXRlLWdlb21ldHJ5Jyk7XHJcbnZhciB1cGRhdGVTY3JvbGwgPSByZXF1aXJlKCcuLi91cGRhdGUtc2Nyb2xsJyk7XHJcblxyXG5mdW5jdGlvbiBiaW5kVG91Y2hIYW5kbGVyKGVsZW1lbnQsIGksIHN1cHBvcnRzVG91Y2gsIHN1cHBvcnRzSWVQb2ludGVyKSB7XHJcbiAgZnVuY3Rpb24gc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpIHtcclxuICAgIHZhciBzY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIHZhciBzY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgdmFyIG1hZ25pdHVkZVggPSBNYXRoLmFicyhkZWx0YVgpO1xyXG4gICAgdmFyIG1hZ25pdHVkZVkgPSBNYXRoLmFicyhkZWx0YVkpO1xyXG5cclxuICAgIGlmIChtYWduaXR1ZGVZID4gbWFnbml0dWRlWCkge1xyXG4gICAgICAvLyB1c2VyIGlzIHBlcmhhcHMgdHJ5aW5nIHRvIHN3aXBlIHVwL2Rvd24gdGhlIHBhZ2VcclxuXHJcbiAgICAgIGlmICgoKGRlbHRhWSA8IDApICYmIChzY3JvbGxUb3AgPT09IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0KSkgfHxcclxuICAgICAgICAgICgoZGVsdGFZID4gMCkgJiYgKHNjcm9sbFRvcCA9PT0gMCkpKSB7XHJcbiAgICAgICAgcmV0dXJuICFpLnNldHRpbmdzLnN3aXBlUHJvcGFnYXRpb247XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobWFnbml0dWRlWCA+IG1hZ25pdHVkZVkpIHtcclxuICAgICAgLy8gdXNlciBpcyBwZXJoYXBzIHRyeWluZyB0byBzd2lwZSBsZWZ0L3JpZ2h0IGFjcm9zcyB0aGUgcGFnZVxyXG5cclxuICAgICAgaWYgKCgoZGVsdGFYIDwgMCkgJiYgKHNjcm9sbExlZnQgPT09IGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aCkpIHx8XHJcbiAgICAgICAgICAoKGRlbHRhWCA+IDApICYmIChzY3JvbGxMZWZ0ID09PSAwKSkpIHtcclxuICAgICAgICByZXR1cm4gIWkuc2V0dGluZ3Muc3dpcGVQcm9wYWdhdGlvbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXBwbHlUb3VjaE1vdmUoZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKSB7XHJcbiAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ3RvcCcsIGVsZW1lbnQuc2Nyb2xsVG9wIC0gZGlmZmVyZW5jZVkpO1xyXG4gICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICdsZWZ0JywgZWxlbWVudC5zY3JvbGxMZWZ0IC0gZGlmZmVyZW5jZVgpO1xyXG5cclxuICAgIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHN0YXJ0T2Zmc2V0ID0ge307XHJcbiAgdmFyIHN0YXJ0VGltZSA9IDA7XHJcbiAgdmFyIHNwZWVkID0ge307XHJcbiAgdmFyIGVhc2luZ0xvb3AgPSBudWxsO1xyXG4gIHZhciBpbkdsb2JhbFRvdWNoID0gZmFsc2U7XHJcbiAgdmFyIGluTG9jYWxUb3VjaCA9IGZhbHNlO1xyXG5cclxuICBmdW5jdGlvbiBnbG9iYWxUb3VjaFN0YXJ0KCkge1xyXG4gICAgaW5HbG9iYWxUb3VjaCA9IHRydWU7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdsb2JhbFRvdWNoRW5kKCkge1xyXG4gICAgaW5HbG9iYWxUb3VjaCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0VG91Y2goZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcykge1xyXG4gICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTWF5YmUgSUUgcG9pbnRlclxyXG4gICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gc2hvdWxkSGFuZGxlKGUpIHtcclxuICAgIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLnBvaW50ZXJUeXBlICYmIGUucG9pbnRlclR5cGUgIT09ICdtb3VzZScgJiYgZS5wb2ludGVyVHlwZSAhPT0gZS5NU1BPSU5URVJfVFlQRV9NT1VTRSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gdG91Y2hTdGFydChlKSB7XHJcbiAgICBpZiAoc2hvdWxkSGFuZGxlKGUpKSB7XHJcbiAgICAgIGluTG9jYWxUb3VjaCA9IHRydWU7XHJcblxyXG4gICAgICB2YXIgdG91Y2ggPSBnZXRUb3VjaChlKTtcclxuXHJcbiAgICAgIHN0YXJ0T2Zmc2V0LnBhZ2VYID0gdG91Y2gucGFnZVg7XHJcbiAgICAgIHN0YXJ0T2Zmc2V0LnBhZ2VZID0gdG91Y2gucGFnZVk7XHJcblxyXG4gICAgICBzdGFydFRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgaWYgKGVhc2luZ0xvb3AgIT09IG51bGwpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiB0b3VjaE1vdmUoZSkge1xyXG4gICAgaWYgKCFpbkxvY2FsVG91Y2ggJiYgaS5zZXR0aW5ncy5zd2lwZVByb3BhZ2F0aW9uKSB7XHJcbiAgICAgIHRvdWNoU3RhcnQoZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWluR2xvYmFsVG91Y2ggJiYgaW5Mb2NhbFRvdWNoICYmIHNob3VsZEhhbmRsZShlKSkge1xyXG4gICAgICB2YXIgdG91Y2ggPSBnZXRUb3VjaChlKTtcclxuXHJcbiAgICAgIHZhciBjdXJyZW50T2Zmc2V0ID0ge3BhZ2VYOiB0b3VjaC5wYWdlWCwgcGFnZVk6IHRvdWNoLnBhZ2VZfTtcclxuXHJcbiAgICAgIHZhciBkaWZmZXJlbmNlWCA9IGN1cnJlbnRPZmZzZXQucGFnZVggLSBzdGFydE9mZnNldC5wYWdlWDtcclxuICAgICAgdmFyIGRpZmZlcmVuY2VZID0gY3VycmVudE9mZnNldC5wYWdlWSAtIHN0YXJ0T2Zmc2V0LnBhZ2VZO1xyXG5cclxuICAgICAgYXBwbHlUb3VjaE1vdmUoZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKTtcclxuICAgICAgc3RhcnRPZmZzZXQgPSBjdXJyZW50T2Zmc2V0O1xyXG5cclxuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgIHZhciB0aW1lR2FwID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XHJcbiAgICAgIGlmICh0aW1lR2FwID4gMCkge1xyXG4gICAgICAgIHNwZWVkLnggPSBkaWZmZXJlbmNlWCAvIHRpbWVHYXA7XHJcbiAgICAgICAgc3BlZWQueSA9IGRpZmZlcmVuY2VZIC8gdGltZUdhcDtcclxuICAgICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNob3VsZFByZXZlbnREZWZhdWx0KGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSkpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiB0b3VjaEVuZCgpIHtcclxuICAgIGlmICghaW5HbG9iYWxUb3VjaCAmJiBpbkxvY2FsVG91Y2gpIHtcclxuICAgICAgaW5Mb2NhbFRvdWNoID0gZmFsc2U7XHJcblxyXG4gICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xyXG4gICAgICBlYXNpbmdMb29wID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghaW5zdGFuY2VzLmdldChlbGVtZW50KSkge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc3BlZWQueCAmJiAhc3BlZWQueSkge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChNYXRoLmFicyhzcGVlZC54KSA8IDAuMDEgJiYgTWF0aC5hYnMoc3BlZWQueSkgPCAwLjAxKSB7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXBwbHlUb3VjaE1vdmUoc3BlZWQueCAqIDMwLCBzcGVlZC55ICogMzApO1xyXG5cclxuICAgICAgICBzcGVlZC54ICo9IDAuODtcclxuICAgICAgICBzcGVlZC55ICo9IDAuODtcclxuICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHN1cHBvcnRzVG91Y2gpIHtcclxuICAgIGkuZXZlbnQuYmluZCh3aW5kb3csICd0b3VjaHN0YXJ0JywgZ2xvYmFsVG91Y2hTdGFydCk7XHJcbiAgICBpLmV2ZW50LmJpbmQod2luZG93LCAndG91Y2hlbmQnLCBnbG9iYWxUb3VjaEVuZCk7XHJcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0KTtcclxuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAndG91Y2htb3ZlJywgdG91Y2hNb3ZlKTtcclxuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAndG91Y2hlbmQnLCB0b3VjaEVuZCk7XHJcbiAgfSBlbHNlIGlmIChzdXBwb3J0c0llUG9pbnRlcikge1xyXG4gICAgaWYgKHdpbmRvdy5Qb2ludGVyRXZlbnQpIHtcclxuICAgICAgaS5ldmVudC5iaW5kKHdpbmRvdywgJ3BvaW50ZXJkb3duJywgZ2xvYmFsVG91Y2hTdGFydCk7XHJcbiAgICAgIGkuZXZlbnQuYmluZCh3aW5kb3csICdwb2ludGVydXAnLCBnbG9iYWxUb3VjaEVuZCk7XHJcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAncG9pbnRlcmRvd24nLCB0b3VjaFN0YXJ0KTtcclxuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdwb2ludGVybW92ZScsIHRvdWNoTW92ZSk7XHJcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAncG9pbnRlcnVwJywgdG91Y2hFbmQpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuTVNQb2ludGVyRXZlbnQpIHtcclxuICAgICAgaS5ldmVudC5iaW5kKHdpbmRvdywgJ01TUG9pbnRlckRvd24nLCBnbG9iYWxUb3VjaFN0YXJ0KTtcclxuICAgICAgaS5ldmVudC5iaW5kKHdpbmRvdywgJ01TUG9pbnRlclVwJywgZ2xvYmFsVG91Y2hFbmQpO1xyXG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ01TUG9pbnRlckRvd24nLCB0b3VjaFN0YXJ0KTtcclxuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdNU1BvaW50ZXJNb3ZlJywgdG91Y2hNb3ZlKTtcclxuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdNU1BvaW50ZXJVcCcsIHRvdWNoRW5kKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICBpZiAoIV8uZW52LnN1cHBvcnRzVG91Y2ggJiYgIV8uZW52LnN1cHBvcnRzSWVQb2ludGVyKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB2YXIgaSA9IGluc3RhbmNlcy5nZXQoZWxlbWVudCk7XHJcbiAgYmluZFRvdWNoSGFuZGxlcihlbGVtZW50LCBpLCBfLmVudi5zdXBwb3J0c1RvdWNoLCBfLmVudi5zdXBwb3J0c0llUG9pbnRlcik7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBfID0gcmVxdWlyZSgnLi4vbGliL2hlbHBlcicpO1xyXG52YXIgY2xzID0gcmVxdWlyZSgnLi4vbGliL2NsYXNzJyk7XHJcbnZhciBpbnN0YW5jZXMgPSByZXF1aXJlKCcuL2luc3RhbmNlcycpO1xyXG52YXIgdXBkYXRlR2VvbWV0cnkgPSByZXF1aXJlKCcuL3VwZGF0ZS1nZW9tZXRyeScpO1xyXG5cclxuLy8gSGFuZGxlcnNcclxudmFyIGhhbmRsZXJzID0ge1xyXG4gICdjbGljay1yYWlsJzogcmVxdWlyZSgnLi9oYW5kbGVyL2NsaWNrLXJhaWwnKSxcclxuICAnZHJhZy1zY3JvbGxiYXInOiByZXF1aXJlKCcuL2hhbmRsZXIvZHJhZy1zY3JvbGxiYXInKSxcclxuICAna2V5Ym9hcmQnOiByZXF1aXJlKCcuL2hhbmRsZXIva2V5Ym9hcmQnKSxcclxuICAnd2hlZWwnOiByZXF1aXJlKCcuL2hhbmRsZXIvbW91c2Utd2hlZWwnKSxcclxuICAndG91Y2gnOiByZXF1aXJlKCcuL2hhbmRsZXIvdG91Y2gnKSxcclxuICAnc2VsZWN0aW9uJzogcmVxdWlyZSgnLi9oYW5kbGVyL3NlbGVjdGlvbicpXHJcbn07XHJcbnZhciBuYXRpdmVTY3JvbGxIYW5kbGVyID0gcmVxdWlyZSgnLi9oYW5kbGVyL25hdGl2ZS1zY3JvbGwnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHVzZXJTZXR0aW5ncykge1xyXG4gIHVzZXJTZXR0aW5ncyA9IHR5cGVvZiB1c2VyU2V0dGluZ3MgPT09ICdvYmplY3QnID8gdXNlclNldHRpbmdzIDoge307XHJcblxyXG4gIGNscy5hZGQoZWxlbWVudCwgJ3BzLWNvbnRhaW5lcicpO1xyXG5cclxuICAvLyBDcmVhdGUgYSBwbHVnaW4gaW5zdGFuY2UuXHJcbiAgdmFyIGkgPSBpbnN0YW5jZXMuYWRkKGVsZW1lbnQpO1xyXG5cclxuICBpLnNldHRpbmdzID0gXy5leHRlbmQoaS5zZXR0aW5ncywgdXNlclNldHRpbmdzKTtcclxuICBjbHMuYWRkKGVsZW1lbnQsICdwcy10aGVtZS0nICsgaS5zZXR0aW5ncy50aGVtZSk7XHJcblxyXG4gIGkuc2V0dGluZ3MuaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlck5hbWUpIHtcclxuICAgIGhhbmRsZXJzW2hhbmRsZXJOYW1lXShlbGVtZW50KTtcclxuICB9KTtcclxuXHJcbiAgbmF0aXZlU2Nyb2xsSGFuZGxlcihlbGVtZW50KTtcclxuXHJcbiAgdXBkYXRlR2VvbWV0cnkoZWxlbWVudCk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBfID0gcmVxdWlyZSgnLi4vbGliL2hlbHBlcicpO1xyXG52YXIgY2xzID0gcmVxdWlyZSgnLi4vbGliL2NsYXNzJyk7XHJcbnZhciBkZWZhdWx0U2V0dGluZ3MgPSByZXF1aXJlKCcuL2RlZmF1bHQtc2V0dGluZycpO1xyXG52YXIgZG9tID0gcmVxdWlyZSgnLi4vbGliL2RvbScpO1xyXG52YXIgRXZlbnRNYW5hZ2VyID0gcmVxdWlyZSgnLi4vbGliL2V2ZW50LW1hbmFnZXInKTtcclxudmFyIGd1aWQgPSByZXF1aXJlKCcuLi9saWIvZ3VpZCcpO1xyXG5cclxudmFyIGluc3RhbmNlcyA9IHt9O1xyXG5cclxuZnVuY3Rpb24gSW5zdGFuY2UoZWxlbWVudCkge1xyXG4gIHZhciBpID0gdGhpcztcclxuXHJcbiAgaS5zZXR0aW5ncyA9IF8uY2xvbmUoZGVmYXVsdFNldHRpbmdzKTtcclxuICBpLmNvbnRhaW5lcldpZHRoID0gbnVsbDtcclxuICBpLmNvbnRhaW5lckhlaWdodCA9IG51bGw7XHJcbiAgaS5jb250ZW50V2lkdGggPSBudWxsO1xyXG4gIGkuY29udGVudEhlaWdodCA9IG51bGw7XHJcblxyXG4gIGkuaXNSdGwgPSBkb20uY3NzKGVsZW1lbnQsICdkaXJlY3Rpb24nKSA9PT0gXCJydGxcIjtcclxuICBpLmlzTmVnYXRpdmVTY3JvbGwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG9yaWdpbmFsU2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgIHZhciByZXN1bHQgPSBudWxsO1xyXG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gLTE7XHJcbiAgICByZXN1bHQgPSBlbGVtZW50LnNjcm9sbExlZnQgPCAwO1xyXG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gb3JpZ2luYWxTY3JvbGxMZWZ0O1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9KSgpO1xyXG4gIGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ID0gaS5pc05lZ2F0aXZlU2Nyb2xsID8gZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGggOiAwO1xyXG4gIGkuZXZlbnQgPSBuZXcgRXZlbnRNYW5hZ2VyKCk7XHJcbiAgaS5vd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xyXG5cclxuICBmdW5jdGlvbiBmb2N1cygpIHtcclxuICAgIGNscy5hZGQoZWxlbWVudCwgJ3BzLWZvY3VzJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBibHVyKCkge1xyXG4gICAgY2xzLnJlbW92ZShlbGVtZW50LCAncHMtZm9jdXMnKTtcclxuICB9XHJcblxyXG4gIGkuc2Nyb2xsYmFyWFJhaWwgPSBkb20uYXBwZW5kVG8oZG9tLmUoJ2RpdicsICdwcy1zY3JvbGxiYXIteC1yYWlsJyksIGVsZW1lbnQpO1xyXG4gIGkuc2Nyb2xsYmFyWCA9IGRvbS5hcHBlbmRUbyhkb20uZSgnZGl2JywgJ3BzLXNjcm9sbGJhci14JyksIGkuc2Nyb2xsYmFyWFJhaWwpO1xyXG4gIGkuc2Nyb2xsYmFyWC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XHJcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWCwgJ2ZvY3VzJywgZm9jdXMpO1xyXG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclgsICdibHVyJywgYmx1cik7XHJcbiAgaS5zY3JvbGxiYXJYQWN0aXZlID0gbnVsbDtcclxuICBpLnNjcm9sbGJhclhXaWR0aCA9IG51bGw7XHJcbiAgaS5zY3JvbGxiYXJYTGVmdCA9IG51bGw7XHJcbiAgaS5zY3JvbGxiYXJYQm90dG9tID0gXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdib3R0b20nKSk7XHJcbiAgaS5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbSA9IGkuc2Nyb2xsYmFyWEJvdHRvbSA9PT0gaS5zY3JvbGxiYXJYQm90dG9tOyAvLyAhaXNOYU5cclxuICBpLnNjcm9sbGJhclhUb3AgPSBpLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tID8gbnVsbCA6IF8udG9JbnQoZG9tLmNzcyhpLnNjcm9sbGJhclhSYWlsLCAndG9wJykpO1xyXG4gIGkucmFpbEJvcmRlclhXaWR0aCA9IF8udG9JbnQoZG9tLmNzcyhpLnNjcm9sbGJhclhSYWlsLCAnYm9yZGVyTGVmdFdpZHRoJykpICsgXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdib3JkZXJSaWdodFdpZHRoJykpO1xyXG4gIC8vIFNldCByYWlsIHRvIGRpc3BsYXk6YmxvY2sgdG8gY2FsY3VsYXRlIG1hcmdpbnNcclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgaS5yYWlsWE1hcmdpbldpZHRoID0gXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdtYXJnaW5MZWZ0JykpICsgXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdtYXJnaW5SaWdodCcpKTtcclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdkaXNwbGF5JywgJycpO1xyXG4gIGkucmFpbFhXaWR0aCA9IG51bGw7XHJcbiAgaS5yYWlsWFJhdGlvID0gbnVsbDtcclxuXHJcbiAgaS5zY3JvbGxiYXJZUmFpbCA9IGRvbS5hcHBlbmRUbyhkb20uZSgnZGl2JywgJ3BzLXNjcm9sbGJhci15LXJhaWwnKSwgZWxlbWVudCk7XHJcbiAgaS5zY3JvbGxiYXJZID0gZG9tLmFwcGVuZFRvKGRvbS5lKCdkaXYnLCAncHMtc2Nyb2xsYmFyLXknKSwgaS5zY3JvbGxiYXJZUmFpbCk7XHJcbiAgaS5zY3JvbGxiYXJZLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcclxuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJZLCAnZm9jdXMnLCBmb2N1cyk7XHJcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWSwgJ2JsdXInLCBibHVyKTtcclxuICBpLnNjcm9sbGJhcllBY3RpdmUgPSBudWxsO1xyXG4gIGkuc2Nyb2xsYmFyWUhlaWdodCA9IG51bGw7XHJcbiAgaS5zY3JvbGxiYXJZVG9wID0gbnVsbDtcclxuICBpLnNjcm9sbGJhcllSaWdodCA9IF8udG9JbnQoZG9tLmNzcyhpLnNjcm9sbGJhcllSYWlsLCAncmlnaHQnKSk7XHJcbiAgaS5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0ID0gaS5zY3JvbGxiYXJZUmlnaHQgPT09IGkuc2Nyb2xsYmFyWVJpZ2h0OyAvLyAhaXNOYU5cclxuICBpLnNjcm9sbGJhcllMZWZ0ID0gaS5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0ID8gbnVsbCA6IF8udG9JbnQoZG9tLmNzcyhpLnNjcm9sbGJhcllSYWlsLCAnbGVmdCcpKTtcclxuICBpLnNjcm9sbGJhcllPdXRlcldpZHRoID0gaS5pc1J0bCA/IF8ub3V0ZXJXaWR0aChpLnNjcm9sbGJhclkpIDogbnVsbDtcclxuICBpLnJhaWxCb3JkZXJZV2lkdGggPSBfLnRvSW50KGRvbS5jc3MoaS5zY3JvbGxiYXJZUmFpbCwgJ2JvcmRlclRvcFdpZHRoJykpICsgXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdib3JkZXJCb3R0b21XaWR0aCcpKTtcclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgaS5yYWlsWU1hcmdpbkhlaWdodCA9IF8udG9JbnQoZG9tLmNzcyhpLnNjcm9sbGJhcllSYWlsLCAnbWFyZ2luVG9wJykpICsgXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdtYXJnaW5Cb3R0b20nKSk7XHJcbiAgZG9tLmNzcyhpLnNjcm9sbGJhcllSYWlsLCAnZGlzcGxheScsICcnKTtcclxuICBpLnJhaWxZSGVpZ2h0ID0gbnVsbDtcclxuICBpLnJhaWxZUmF0aW8gPSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJZChlbGVtZW50KSB7XHJcbiAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBzLWlkJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldElkKGVsZW1lbnQsIGlkKSB7XHJcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHMtaWQnLCBpZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUlkKGVsZW1lbnQpIHtcclxuICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcy1pZCcpO1xyXG59XHJcblxyXG5leHBvcnRzLmFkZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgdmFyIG5ld0lkID0gZ3VpZCgpO1xyXG4gIHNldElkKGVsZW1lbnQsIG5ld0lkKTtcclxuICBpbnN0YW5jZXNbbmV3SWRdID0gbmV3IEluc3RhbmNlKGVsZW1lbnQpO1xyXG4gIHJldHVybiBpbnN0YW5jZXNbbmV3SWRdO1xyXG59O1xyXG5cclxuZXhwb3J0cy5yZW1vdmUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIGRlbGV0ZSBpbnN0YW5jZXNbZ2V0SWQoZWxlbWVudCldO1xyXG4gIHJlbW92ZUlkKGVsZW1lbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIHJldHVybiBpbnN0YW5jZXNbZ2V0SWQoZWxlbWVudCldO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgXyA9IHJlcXVpcmUoJy4uL2xpYi9oZWxwZXInKTtcclxudmFyIGNscyA9IHJlcXVpcmUoJy4uL2xpYi9jbGFzcycpO1xyXG52YXIgZG9tID0gcmVxdWlyZSgnLi4vbGliL2RvbScpO1xyXG52YXIgaW5zdGFuY2VzID0gcmVxdWlyZSgnLi9pbnN0YW5jZXMnKTtcclxudmFyIHVwZGF0ZVNjcm9sbCA9IHJlcXVpcmUoJy4vdXBkYXRlLXNjcm9sbCcpO1xyXG5cclxuZnVuY3Rpb24gZ2V0VGh1bWJTaXplKGksIHRodW1iU2l6ZSkge1xyXG4gIGlmIChpLnNldHRpbmdzLm1pblNjcm9sbGJhckxlbmd0aCkge1xyXG4gICAgdGh1bWJTaXplID0gTWF0aC5tYXgodGh1bWJTaXplLCBpLnNldHRpbmdzLm1pblNjcm9sbGJhckxlbmd0aCk7XHJcbiAgfVxyXG4gIGlmIChpLnNldHRpbmdzLm1heFNjcm9sbGJhckxlbmd0aCkge1xyXG4gICAgdGh1bWJTaXplID0gTWF0aC5taW4odGh1bWJTaXplLCBpLnNldHRpbmdzLm1heFNjcm9sbGJhckxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiB0aHVtYlNpemU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNzcyhlbGVtZW50LCBpKSB7XHJcbiAgdmFyIHhSYWlsT2Zmc2V0ID0ge3dpZHRoOiBpLnJhaWxYV2lkdGh9O1xyXG4gIGlmIChpLmlzUnRsKSB7XHJcbiAgICB4UmFpbE9mZnNldC5sZWZ0ID0gaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgKyBlbGVtZW50LnNjcm9sbExlZnQgKyBpLmNvbnRhaW5lcldpZHRoIC0gaS5jb250ZW50V2lkdGg7XHJcbiAgfSBlbHNlIHtcclxuICAgIHhSYWlsT2Zmc2V0LmxlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgfVxyXG4gIGlmIChpLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tKSB7XHJcbiAgICB4UmFpbE9mZnNldC5ib3R0b20gPSBpLnNjcm9sbGJhclhCb3R0b20gLSBlbGVtZW50LnNjcm9sbFRvcDtcclxuICB9IGVsc2Uge1xyXG4gICAgeFJhaWxPZmZzZXQudG9wID0gaS5zY3JvbGxiYXJYVG9wICsgZWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgfVxyXG4gIGRvbS5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgeFJhaWxPZmZzZXQpO1xyXG5cclxuICB2YXIgeVJhaWxPZmZzZXQgPSB7dG9wOiBlbGVtZW50LnNjcm9sbFRvcCwgaGVpZ2h0OiBpLnJhaWxZSGVpZ2h0fTtcclxuICBpZiAoaS5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0KSB7XHJcbiAgICBpZiAoaS5pc1J0bCkge1xyXG4gICAgICB5UmFpbE9mZnNldC5yaWdodCA9IGkuY29udGVudFdpZHRoIC0gKGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICsgZWxlbWVudC5zY3JvbGxMZWZ0KSAtIGkuc2Nyb2xsYmFyWVJpZ2h0IC0gaS5zY3JvbGxiYXJZT3V0ZXJXaWR0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlSYWlsT2Zmc2V0LnJpZ2h0ID0gaS5zY3JvbGxiYXJZUmlnaHQgLSBlbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChpLmlzUnRsKSB7XHJcbiAgICAgIHlSYWlsT2Zmc2V0LmxlZnQgPSBpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCArIGVsZW1lbnQuc2Nyb2xsTGVmdCArIGkuY29udGFpbmVyV2lkdGggKiAyIC0gaS5jb250ZW50V2lkdGggLSBpLnNjcm9sbGJhcllMZWZ0IC0gaS5zY3JvbGxiYXJZT3V0ZXJXaWR0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlSYWlsT2Zmc2V0LmxlZnQgPSBpLnNjcm9sbGJhcllMZWZ0ICsgZWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWVJhaWwsIHlSYWlsT2Zmc2V0KTtcclxuXHJcbiAgZG9tLmNzcyhpLnNjcm9sbGJhclgsIHtsZWZ0OiBpLnNjcm9sbGJhclhMZWZ0LCB3aWR0aDogaS5zY3JvbGxiYXJYV2lkdGggLSBpLnJhaWxCb3JkZXJYV2lkdGh9KTtcclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWSwge3RvcDogaS5zY3JvbGxiYXJZVG9wLCBoZWlnaHQ6IGkuc2Nyb2xsYmFyWUhlaWdodCAtIGkucmFpbEJvcmRlcllXaWR0aH0pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgdmFyIGkgPSBpbnN0YW5jZXMuZ2V0KGVsZW1lbnQpO1xyXG5cclxuICBpLmNvbnRhaW5lcldpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcclxuICBpLmNvbnRhaW5lckhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gIGkuY29udGVudFdpZHRoID0gZWxlbWVudC5zY3JvbGxXaWR0aDtcclxuICBpLmNvbnRlbnRIZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcclxuXHJcbiAgdmFyIGV4aXN0aW5nUmFpbHM7XHJcbiAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKGkuc2Nyb2xsYmFyWFJhaWwpKSB7XHJcbiAgICBleGlzdGluZ1JhaWxzID0gZG9tLnF1ZXJ5Q2hpbGRyZW4oZWxlbWVudCwgJy5wcy1zY3JvbGxiYXIteC1yYWlsJyk7XHJcbiAgICBpZiAoZXhpc3RpbmdSYWlscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGV4aXN0aW5nUmFpbHMuZm9yRWFjaChmdW5jdGlvbiAocmFpbCkge1xyXG4gICAgICAgIGRvbS5yZW1vdmUocmFpbCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZG9tLmFwcGVuZFRvKGkuc2Nyb2xsYmFyWFJhaWwsIGVsZW1lbnQpO1xyXG4gIH1cclxuICBpZiAoIWVsZW1lbnQuY29udGFpbnMoaS5zY3JvbGxiYXJZUmFpbCkpIHtcclxuICAgIGV4aXN0aW5nUmFpbHMgPSBkb20ucXVlcnlDaGlsZHJlbihlbGVtZW50LCAnLnBzLXNjcm9sbGJhci15LXJhaWwnKTtcclxuICAgIGlmIChleGlzdGluZ1JhaWxzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZXhpc3RpbmdSYWlscy5mb3JFYWNoKGZ1bmN0aW9uIChyYWlsKSB7XHJcbiAgICAgICAgZG9tLnJlbW92ZShyYWlsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkb20uYXBwZW5kVG8oaS5zY3JvbGxiYXJZUmFpbCwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWkuc2V0dGluZ3Muc3VwcHJlc3NTY3JvbGxYICYmIGkuY29udGFpbmVyV2lkdGggKyBpLnNldHRpbmdzLnNjcm9sbFhNYXJnaW5PZmZzZXQgPCBpLmNvbnRlbnRXaWR0aCkge1xyXG4gICAgaS5zY3JvbGxiYXJYQWN0aXZlID0gdHJ1ZTtcclxuICAgIGkucmFpbFhXaWR0aCA9IGkuY29udGFpbmVyV2lkdGggLSBpLnJhaWxYTWFyZ2luV2lkdGg7XHJcbiAgICBpLnJhaWxYUmF0aW8gPSBpLmNvbnRhaW5lcldpZHRoIC8gaS5yYWlsWFdpZHRoO1xyXG4gICAgaS5zY3JvbGxiYXJYV2lkdGggPSBnZXRUaHVtYlNpemUoaSwgXy50b0ludChpLnJhaWxYV2lkdGggKiBpLmNvbnRhaW5lcldpZHRoIC8gaS5jb250ZW50V2lkdGgpKTtcclxuICAgIGkuc2Nyb2xsYmFyWExlZnQgPSBfLnRvSW50KChpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCArIGVsZW1lbnQuc2Nyb2xsTGVmdCkgKiAoaS5yYWlsWFdpZHRoIC0gaS5zY3JvbGxiYXJYV2lkdGgpIC8gKGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aCkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpLnNjcm9sbGJhclhBY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmICghaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFkgJiYgaS5jb250YWluZXJIZWlnaHQgKyBpLnNldHRpbmdzLnNjcm9sbFlNYXJnaW5PZmZzZXQgPCBpLmNvbnRlbnRIZWlnaHQpIHtcclxuICAgIGkuc2Nyb2xsYmFyWUFjdGl2ZSA9IHRydWU7XHJcbiAgICBpLnJhaWxZSGVpZ2h0ID0gaS5jb250YWluZXJIZWlnaHQgLSBpLnJhaWxZTWFyZ2luSGVpZ2h0O1xyXG4gICAgaS5yYWlsWVJhdGlvID0gaS5jb250YWluZXJIZWlnaHQgLyBpLnJhaWxZSGVpZ2h0O1xyXG4gICAgaS5zY3JvbGxiYXJZSGVpZ2h0ID0gZ2V0VGh1bWJTaXplKGksIF8udG9JbnQoaS5yYWlsWUhlaWdodCAqIGkuY29udGFpbmVySGVpZ2h0IC8gaS5jb250ZW50SGVpZ2h0KSk7XHJcbiAgICBpLnNjcm9sbGJhcllUb3AgPSBfLnRvSW50KGVsZW1lbnQuc2Nyb2xsVG9wICogKGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQpIC8gKGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0KSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGkuc2Nyb2xsYmFyWUFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGkuc2Nyb2xsYmFyWExlZnQgPj0gaS5yYWlsWFdpZHRoIC0gaS5zY3JvbGxiYXJYV2lkdGgpIHtcclxuICAgIGkuc2Nyb2xsYmFyWExlZnQgPSBpLnJhaWxYV2lkdGggLSBpLnNjcm9sbGJhclhXaWR0aDtcclxuICB9XHJcbiAgaWYgKGkuc2Nyb2xsYmFyWVRvcCA+PSBpLnJhaWxZSGVpZ2h0IC0gaS5zY3JvbGxiYXJZSGVpZ2h0KSB7XHJcbiAgICBpLnNjcm9sbGJhcllUb3AgPSBpLnJhaWxZSGVpZ2h0IC0gaS5zY3JvbGxiYXJZSGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ3NzKGVsZW1lbnQsIGkpO1xyXG5cclxuICBpZiAoaS5zY3JvbGxiYXJYQWN0aXZlKSB7XHJcbiAgICBjbHMuYWRkKGVsZW1lbnQsICdwcy1hY3RpdmUteCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjbHMucmVtb3ZlKGVsZW1lbnQsICdwcy1hY3RpdmUteCcpO1xyXG4gICAgaS5zY3JvbGxiYXJYV2lkdGggPSAwO1xyXG4gICAgaS5zY3JvbGxiYXJYTGVmdCA9IDA7XHJcbiAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ2xlZnQnLCAwKTtcclxuICB9XHJcbiAgaWYgKGkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xyXG4gICAgY2xzLmFkZChlbGVtZW50LCAncHMtYWN0aXZlLXknKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2xzLnJlbW92ZShlbGVtZW50LCAncHMtYWN0aXZlLXknKTtcclxuICAgIGkuc2Nyb2xsYmFyWUhlaWdodCA9IDA7XHJcbiAgICBpLnNjcm9sbGJhcllUb3AgPSAwO1xyXG4gICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICd0b3AnLCAwKTtcclxuICB9XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBpbnN0YW5jZXMgPSByZXF1aXJlKCcuL2luc3RhbmNlcycpO1xyXG5cclxudmFyIGxhc3RUb3A7XHJcbnZhciBsYXN0TGVmdDtcclxuXHJcbnZhciBjcmVhdGVET01FdmVudCA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcclxuICBldmVudC5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgcmV0dXJuIGV2ZW50O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCwgYXhpcywgdmFsdWUpIHtcclxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB0aHJvdyAnWW91IG11c3QgcHJvdmlkZSBhbiBlbGVtZW50IHRvIHRoZSB1cGRhdGUtc2Nyb2xsIGZ1bmN0aW9uJztcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgYXhpcyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHRocm93ICdZb3UgbXVzdCBwcm92aWRlIGFuIGF4aXMgdG8gdGhlIHVwZGF0ZS1zY3JvbGwgZnVuY3Rpb24nO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHRocm93ICdZb3UgbXVzdCBwcm92aWRlIGEgdmFsdWUgdG8gdGhlIHVwZGF0ZS1zY3JvbGwgZnVuY3Rpb24nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGF4aXMgPT09ICd0b3AnICYmIHZhbHVlIDw9IDApIHtcclxuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdmFsdWUgPSAwOyAvLyBkb24ndCBhbGxvdyBuZWdhdGl2ZSBzY3JvbGxcclxuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVET01FdmVudCgncHMteS1yZWFjaC1zdGFydCcpKTtcclxuICB9XHJcblxyXG4gIGlmIChheGlzID09PSAnbGVmdCcgJiYgdmFsdWUgPD0gMCkge1xyXG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gdmFsdWUgPSAwOyAvLyBkb24ndCBhbGxvdyBuZWdhdGl2ZSBzY3JvbGxcclxuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVET01FdmVudCgncHMteC1yZWFjaC1zdGFydCcpKTtcclxuICB9XHJcblxyXG4gIHZhciBpID0gaW5zdGFuY2VzLmdldChlbGVtZW50KTtcclxuXHJcbiAgaWYgKGF4aXMgPT09ICd0b3AnICYmIHZhbHVlID49IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0KSB7XHJcbiAgICAvLyBkb24ndCBhbGxvdyBzY3JvbGwgcGFzdCBjb250YWluZXJcclxuICAgIHZhbHVlID0gaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQ7XHJcbiAgICBpZiAodmFsdWUgLSBlbGVtZW50LnNjcm9sbFRvcCA8PSAxKSB7XHJcbiAgICAgIC8vIG1pdGlnYXRlcyByb3VuZGluZyBlcnJvcnMgb24gbm9uLXN1YnBpeGVsIHNjcm9sbCB2YWx1ZXNcclxuICAgICAgdmFsdWUgPSBlbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRE9NRXZlbnQoJ3BzLXktcmVhY2gtZW5kJykpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGF4aXMgPT09ICdsZWZ0JyAmJiB2YWx1ZSA+PSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGgpIHtcclxuICAgIC8vIGRvbid0IGFsbG93IHNjcm9sbCBwYXN0IGNvbnRhaW5lclxyXG4gICAgdmFsdWUgPSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGg7XHJcbiAgICBpZiAodmFsdWUgLSBlbGVtZW50LnNjcm9sbExlZnQgPD0gMSkge1xyXG4gICAgICAvLyBtaXRpZ2F0ZXMgcm91bmRpbmcgZXJyb3JzIG9uIG5vbi1zdWJwaXhlbCBzY3JvbGwgdmFsdWVzXHJcbiAgICAgIHZhbHVlID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRE9NRXZlbnQoJ3BzLXgtcmVhY2gtZW5kJykpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFsYXN0VG9wKSB7XHJcbiAgICBsYXN0VG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgfVxyXG5cclxuICBpZiAoIWxhc3RMZWZ0KSB7XHJcbiAgICBsYXN0TGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICB9XHJcblxyXG4gIGlmIChheGlzID09PSAndG9wJyAmJiB2YWx1ZSA8IGxhc3RUb3ApIHtcclxuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVET01FdmVudCgncHMtc2Nyb2xsLXVwJykpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGF4aXMgPT09ICd0b3AnICYmIHZhbHVlID4gbGFzdFRvcCkge1xyXG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZURPTUV2ZW50KCdwcy1zY3JvbGwtZG93bicpKTtcclxuICB9XHJcblxyXG4gIGlmIChheGlzID09PSAnbGVmdCcgJiYgdmFsdWUgPCBsYXN0TGVmdCkge1xyXG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZURPTUV2ZW50KCdwcy1zY3JvbGwtbGVmdCcpKTtcclxuICB9XHJcblxyXG4gIGlmIChheGlzID09PSAnbGVmdCcgJiYgdmFsdWUgPiBsYXN0TGVmdCkge1xyXG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZURPTUV2ZW50KCdwcy1zY3JvbGwtcmlnaHQnKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoYXhpcyA9PT0gJ3RvcCcpIHtcclxuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gbGFzdFRvcCA9IHZhbHVlO1xyXG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZURPTUV2ZW50KCdwcy1zY3JvbGwteScpKTtcclxuICB9XHJcblxyXG4gIGlmIChheGlzID09PSAnbGVmdCcpIHtcclxuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IGxhc3RMZWZ0ID0gdmFsdWU7XHJcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRE9NRXZlbnQoJ3BzLXNjcm9sbC14JykpO1xyXG4gIH1cclxuXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBfID0gcmVxdWlyZSgnLi4vbGliL2hlbHBlcicpO1xyXG52YXIgZG9tID0gcmVxdWlyZSgnLi4vbGliL2RvbScpO1xyXG52YXIgaW5zdGFuY2VzID0gcmVxdWlyZSgnLi9pbnN0YW5jZXMnKTtcclxudmFyIHVwZGF0ZUdlb21ldHJ5ID0gcmVxdWlyZSgnLi91cGRhdGUtZ2VvbWV0cnknKTtcclxudmFyIHVwZGF0ZVNjcm9sbCA9IHJlcXVpcmUoJy4vdXBkYXRlLXNjcm9sbCcpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIHZhciBpID0gaW5zdGFuY2VzLmdldChlbGVtZW50KTtcclxuXHJcbiAgaWYgKCFpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBSZWNhbGN1YXRlIG5lZ2F0aXZlIHNjcm9sbExlZnQgYWRqdXN0bWVudFxyXG4gIGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ID0gaS5pc05lZ2F0aXZlU2Nyb2xsID8gZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGggOiAwO1xyXG5cclxuICAvLyBSZWNhbGN1bGF0ZSByYWlsIG1hcmdpbnNcclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgZG9tLmNzcyhpLnNjcm9sbGJhcllSYWlsLCAnZGlzcGxheScsICdibG9jaycpO1xyXG4gIGkucmFpbFhNYXJnaW5XaWR0aCA9IF8udG9JbnQoZG9tLmNzcyhpLnNjcm9sbGJhclhSYWlsLCAnbWFyZ2luTGVmdCcpKSArIF8udG9JbnQoZG9tLmNzcyhpLnNjcm9sbGJhclhSYWlsLCAnbWFyZ2luUmlnaHQnKSk7XHJcbiAgaS5yYWlsWU1hcmdpbkhlaWdodCA9IF8udG9JbnQoZG9tLmNzcyhpLnNjcm9sbGJhcllSYWlsLCAnbWFyZ2luVG9wJykpICsgXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdtYXJnaW5Cb3R0b20nKSk7XHJcblxyXG4gIC8vIEhpZGUgc2Nyb2xsYmFycyBub3QgdG8gYWZmZWN0IHNjcm9sbFdpZHRoIGFuZCBzY3JvbGxIZWlnaHRcclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdkaXNwbGF5JywgJ25vbmUnKTtcclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHJcbiAgdXBkYXRlR2VvbWV0cnkoZWxlbWVudCk7XHJcblxyXG4gIC8vIFVwZGF0ZSB0b3AvbGVmdCBzY3JvbGwgdG8gdHJpZ2dlciBldmVudHNcclxuICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ3RvcCcsIGVsZW1lbnQuc2Nyb2xsVG9wKTtcclxuICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ2xlZnQnLCBlbGVtZW50LnNjcm9sbExlZnQpO1xyXG5cclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdkaXNwbGF5JywgJycpO1xyXG4gIGRvbS5jc3MoaS5zY3JvbGxiYXJZUmFpbCwgJ2Rpc3BsYXknLCAnJyk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9UcmFuc2l0aW9uR3JvdXAgPSByZXF1aXJlKCcuL1RyYW5zaXRpb25Hcm91cCcpO1xuXG52YXIgX1RyYW5zaXRpb25Hcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFuc2l0aW9uR3JvdXApO1xuXG52YXIgX0NTU1RyYW5zaXRpb25Hcm91cENoaWxkID0gcmVxdWlyZSgnLi9DU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCcpO1xuXG52YXIgX0NTU1RyYW5zaXRpb25Hcm91cENoaWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NTU1RyYW5zaXRpb25Hcm91cENoaWxkKTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL3V0aWxzL1Byb3BUeXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIHRyYW5zaXRpb25OYW1lOiBfUHJvcFR5cGVzLm5hbWVTaGFwZS5pc1JlcXVpcmVkLFxuXG4gIHRyYW5zaXRpb25BcHBlYXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgdHJhbnNpdGlvbkVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHRyYW5zaXRpb25MZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICB0cmFuc2l0aW9uQXBwZWFyVGltZW91dDogKDAsIF9Qcm9wVHlwZXMudHJhbnNpdGlvblRpbWVvdXQpKCdBcHBlYXInKSxcbiAgdHJhbnNpdGlvbkVudGVyVGltZW91dDogKDAsIF9Qcm9wVHlwZXMudHJhbnNpdGlvblRpbWVvdXQpKCdFbnRlcicpLFxuICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiAoMCwgX1Byb3BUeXBlcy50cmFuc2l0aW9uVGltZW91dCkoJ0xlYXZlJylcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIHRyYW5zaXRpb25BcHBlYXI6IGZhbHNlLFxuICB0cmFuc2l0aW9uRW50ZXI6IHRydWUsXG4gIHRyYW5zaXRpb25MZWF2ZTogdHJ1ZVxufTtcblxudmFyIENTU1RyYW5zaXRpb25Hcm91cCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDU1NUcmFuc2l0aW9uR3JvdXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENTU1RyYW5zaXRpb25Hcm91cCgpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENTU1RyYW5zaXRpb25Hcm91cCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuX3dyYXBDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9DU1NUcmFuc2l0aW9uR3JvdXBDaGlsZDIuZGVmYXVsdCwge1xuICAgICAgICBuYW1lOiBfdGhpcy5wcm9wcy50cmFuc2l0aW9uTmFtZSxcbiAgICAgICAgYXBwZWFyOiBfdGhpcy5wcm9wcy50cmFuc2l0aW9uQXBwZWFyLFxuICAgICAgICBlbnRlcjogX3RoaXMucHJvcHMudHJhbnNpdGlvbkVudGVyLFxuICAgICAgICBsZWF2ZTogX3RoaXMucHJvcHMudHJhbnNpdGlvbkxlYXZlLFxuICAgICAgICBhcHBlYXJUaW1lb3V0OiBfdGhpcy5wcm9wcy50cmFuc2l0aW9uQXBwZWFyVGltZW91dCxcbiAgICAgICAgZW50ZXJUaW1lb3V0OiBfdGhpcy5wcm9wcy50cmFuc2l0aW9uRW50ZXJUaW1lb3V0LFxuICAgICAgICBsZWF2ZVRpbWVvdXQ6IF90aGlzLnByb3BzLnRyYW5zaXRpb25MZWF2ZVRpbWVvdXRcbiAgICAgIH0sIGNoaWxkKTtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIC8vIFdlIG5lZWQgdG8gcHJvdmlkZSB0aGlzIGNoaWxkRmFjdG9yeSBzbyB0aGF0XG4gIC8vIFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQgY2FuIHJlY2VpdmUgdXBkYXRlcyB0byBuYW1lLCBlbnRlciwgYW5kXG4gIC8vIGxlYXZlIHdoaWxlIGl0IGlzIGxlYXZpbmcuXG5cblxuICBDU1NUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RyYW5zaXRpb25Hcm91cDIuZGVmYXVsdCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2hpbGRGYWN0b3J5OiB0aGlzLl93cmFwQ2hpbGQgfSkpO1xuICB9O1xuXG4gIHJldHVybiBDU1NUcmFuc2l0aW9uR3JvdXA7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5DU1NUcmFuc2l0aW9uR3JvdXAuZGlzcGxheU5hbWUgPSAnQ1NTVHJhbnNpdGlvbkdyb3VwJztcblxuXG5DU1NUcmFuc2l0aW9uR3JvdXAucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gcHJvcFR5cGVzIDoge307XG5DU1NUcmFuc2l0aW9uR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDU1NUcmFuc2l0aW9uR3JvdXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfYWRkQ2xhc3MgPSByZXF1aXJlKCdkb20taGVscGVycy9jbGFzcy9hZGRDbGFzcycpO1xuXG52YXIgX2FkZENsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZENsYXNzKTtcblxudmFyIF9yZW1vdmVDbGFzcyA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL2NsYXNzL3JlbW92ZUNsYXNzJyk7XG5cbnZhciBfcmVtb3ZlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVtb3ZlQ2xhc3MpO1xuXG52YXIgX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL3V0aWwvcmVxdWVzdEFuaW1hdGlvbkZyYW1lJyk7XG5cbnZhciBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlcXVlc3RBbmltYXRpb25GcmFtZSk7XG5cbnZhciBfcHJvcGVydGllcyA9IHJlcXVpcmUoJ2RvbS1oZWxwZXJzL3RyYW5zaXRpb24vcHJvcGVydGllcycpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfUHJvcFR5cGVzID0gcmVxdWlyZSgnLi91dGlscy9Qcm9wVHlwZXMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgZXZlbnRzID0gW107XG5pZiAoX3Byb3BlcnRpZXMudHJhbnNpdGlvbkVuZCkgZXZlbnRzLnB1c2goX3Byb3BlcnRpZXMudHJhbnNpdGlvbkVuZCk7XG5pZiAoX3Byb3BlcnRpZXMuYW5pbWF0aW9uRW5kKSBldmVudHMucHVzaChfcHJvcGVydGllcy5hbmltYXRpb25FbmQpO1xuXG5mdW5jdGlvbiBhZGRFbmRMaXN0ZW5lcihub2RlLCBsaXN0ZW5lcikge1xuICBpZiAoZXZlbnRzLmxlbmd0aCkge1xuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gbm9kZS5hZGRFdmVudExpc3RlbmVyKGUsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc2V0VGltZW91dChsaXN0ZW5lciwgMCk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghZXZlbnRzLmxlbmd0aCkgcmV0dXJuO1xuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGUsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgfSk7XG4gIH07XG59XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIG5hbWU6IF9Qcm9wVHlwZXMubmFtZVNoYXBlLmlzUmVxdWlyZWQsXG5cbiAgLy8gT25jZSB3ZSByZXF1aXJlIHRpbWVvdXRzIHRvIGJlIHNwZWNpZmllZCwgd2UgY2FuIHJlbW92ZSB0aGVcbiAgLy8gYm9vbGVhbiBmbGFncyAoYXBwZWFyIGV0Yy4pIGFuZCBqdXN0IGFjY2VwdCBhIG51bWJlclxuICAvLyBvciBhIGJvb2wgZm9yIHRoZSB0aW1lb3V0IGZsYWdzIChhcHBlYXJUaW1lb3V0IGV0Yy4pXG4gIGFwcGVhcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBlbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBsZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBhcHBlYXJUaW1lb3V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgZW50ZXJUaW1lb3V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgbGVhdmVUaW1lb3V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlclxufTtcblxudmFyIENTU1RyYW5zaXRpb25Hcm91cENoaWxkID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENTU1RyYW5zaXRpb25Hcm91cENoaWxkLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCgpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENTU1RyYW5zaXRpb25Hcm91cENoaWxkKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5jb21wb25lbnRXaWxsQXBwZWFyID0gZnVuY3Rpb24gKGRvbmUpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5hcHBlYXIpIHtcbiAgICAgICAgX3RoaXMudHJhbnNpdGlvbignYXBwZWFyJywgZG9uZSwgX3RoaXMucHJvcHMuYXBwZWFyVGltZW91dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb25lKCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuY29tcG9uZW50V2lsbEVudGVyID0gZnVuY3Rpb24gKGRvbmUpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5lbnRlcikge1xuICAgICAgICBfdGhpcy50cmFuc2l0aW9uKCdlbnRlcicsIGRvbmUsIF90aGlzLnByb3BzLmVudGVyVGltZW91dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb25lKCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuY29tcG9uZW50V2lsbExlYXZlID0gZnVuY3Rpb24gKGRvbmUpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5sZWF2ZSkge1xuICAgICAgICBfdGhpcy50cmFuc2l0aW9uKCdsZWF2ZScsIGRvbmUsIF90aGlzLnByb3BzLmxlYXZlVGltZW91dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb25lKCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuY2xhc3NOYW1lQW5kTm9kZVF1ZXVlID0gW107XG4gICAgdGhpcy50cmFuc2l0aW9uVGltZW91dHMgPSBbXTtcbiAgfTtcblxuICBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVubW91bnRlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB9XG4gICAgdGhpcy50cmFuc2l0aW9uVGltZW91dHMuZm9yRWFjaChmdW5jdGlvbiAodGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jbGFzc05hbWVBbmROb2RlUXVldWUubGVuZ3RoID0gMDtcbiAgfTtcblxuICBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm90b3R5cGUudHJhbnNpdGlvbiA9IGZ1bmN0aW9uIHRyYW5zaXRpb24oYW5pbWF0aW9uVHlwZSwgZmluaXNoQ2FsbGJhY2ssIHRpbWVvdXQpIHtcbiAgICB2YXIgbm9kZSA9ICgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRoaXMpO1xuXG4gICAgaWYgKCFub2RlKSB7XG4gICAgICBpZiAoZmluaXNoQ2FsbGJhY2spIHtcbiAgICAgICAgZmluaXNoQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5uYW1lW2FuaW1hdGlvblR5cGVdIHx8IHRoaXMucHJvcHMubmFtZSArICctJyArIGFuaW1hdGlvblR5cGU7XG4gICAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IHRoaXMucHJvcHMubmFtZVthbmltYXRpb25UeXBlICsgJ0FjdGl2ZSddIHx8IGNsYXNzTmFtZSArICctYWN0aXZlJztcbiAgICB2YXIgdGltZXIgPSBudWxsO1xuICAgIHZhciByZW1vdmVMaXN0ZW5lcnMgPSB2b2lkIDA7XG5cbiAgICAoMCwgX2FkZENsYXNzMi5kZWZhdWx0KShub2RlLCBjbGFzc05hbWUpO1xuXG4gICAgLy8gTmVlZCB0byBkbyB0aGlzIHRvIGFjdHVhbGx5IHRyaWdnZXIgYSB0cmFuc2l0aW9uLlxuICAgIHRoaXMucXVldWVDbGFzc0FuZE5vZGUoYWN0aXZlQ2xhc3NOYW1lLCBub2RlKTtcblxuICAgIC8vIENsZWFuLXVwIHRoZSBhbmltYXRpb24gYWZ0ZXIgdGhlIHNwZWNpZmllZCBkZWxheVxuICAgIHZhciBmaW5pc2ggPSBmdW5jdGlvbiBmaW5pc2goZSkge1xuICAgICAgaWYgKGUgJiYgZS50YXJnZXQgIT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgaWYgKHJlbW92ZUxpc3RlbmVycykgcmVtb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICAgICgwLCBfcmVtb3ZlQ2xhc3MyLmRlZmF1bHQpKG5vZGUsIGNsYXNzTmFtZSk7XG4gICAgICAoMCwgX3JlbW92ZUNsYXNzMi5kZWZhdWx0KShub2RlLCBhY3RpdmVDbGFzc05hbWUpO1xuXG4gICAgICBpZiAocmVtb3ZlTGlzdGVuZXJzKSByZW1vdmVMaXN0ZW5lcnMoKTtcblxuICAgICAgLy8gVXN1YWxseSB0aGlzIG9wdGlvbmFsIGNhbGxiYWNrIGlzIHVzZWQgZm9yIGluZm9ybWluZyBhbiBvd25lciBvZlxuICAgICAgLy8gYSBsZWF2ZSBhbmltYXRpb24gYW5kIHRlbGxpbmcgaXQgdG8gcmVtb3ZlIHRoZSBjaGlsZC5cbiAgICAgIGlmIChmaW5pc2hDYWxsYmFjaykge1xuICAgICAgICBmaW5pc2hDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGltZW91dCkge1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZpbmlzaCwgdGltZW91dCk7XG4gICAgICB0aGlzLnRyYW5zaXRpb25UaW1lb3V0cy5wdXNoKHRpbWVyKTtcbiAgICB9IGVsc2UgaWYgKF9wcm9wZXJ0aWVzLnRyYW5zaXRpb25FbmQpIHtcbiAgICAgIHJlbW92ZUxpc3RlbmVycyA9IGFkZEVuZExpc3RlbmVyKG5vZGUsIGZpbmlzaCk7XG4gICAgfVxuICB9O1xuXG4gIENTU1RyYW5zaXRpb25Hcm91cENoaWxkLnByb3RvdHlwZS5xdWV1ZUNsYXNzQW5kTm9kZSA9IGZ1bmN0aW9uIHF1ZXVlQ2xhc3NBbmROb2RlKGNsYXNzTmFtZSwgbm9kZSkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdGhpcy5jbGFzc05hbWVBbmROb2RlUXVldWUucHVzaCh7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgIG5vZGU6IG5vZGVcbiAgICB9KTtcblxuICAgIGlmICghdGhpcy5yYWZIYW5kbGUpIHtcbiAgICAgIHRoaXMucmFmSGFuZGxlID0gKDAsIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUyLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5mbHVzaENsYXNzTmFtZUFuZE5vZGVRdWV1ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIENTU1RyYW5zaXRpb25Hcm91cENoaWxkLnByb3RvdHlwZS5mbHVzaENsYXNzTmFtZUFuZE5vZGVRdWV1ZSA9IGZ1bmN0aW9uIGZsdXNoQ2xhc3NOYW1lQW5kTm9kZVF1ZXVlKCkge1xuICAgIGlmICghdGhpcy51bm1vdW50ZWQpIHtcbiAgICAgIHRoaXMuY2xhc3NOYW1lQW5kTm9kZVF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAvLyBUaGlzIGlzIGZvciB0byBmb3JjZSBhIHJlcGFpbnQsXG4gICAgICAgIC8vIHdoaWNoIGlzIG5lY2Vzc2FyeSBpbiBvcmRlciB0byB0cmFuc2l0aW9uIHN0eWxlcyB3aGVuIGFkZGluZyBhIGNsYXNzIG5hbWUuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuICAgICAgICBvYmoubm9kZS5zY3JvbGxUb3A7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgICAgICgwLCBfYWRkQ2xhc3MyLmRlZmF1bHQpKG9iai5ub2RlLCBvYmouY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmNsYXNzTmFtZUFuZE5vZGVRdWV1ZS5sZW5ndGggPSAwO1xuICAgIHRoaXMucmFmSGFuZGxlID0gbnVsbDtcbiAgfTtcblxuICBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcbiAgICBkZWxldGUgcHJvcHMubmFtZTtcbiAgICBkZWxldGUgcHJvcHMuYXBwZWFyO1xuICAgIGRlbGV0ZSBwcm9wcy5lbnRlcjtcbiAgICBkZWxldGUgcHJvcHMubGVhdmU7XG4gICAgZGVsZXRlIHByb3BzLmFwcGVhclRpbWVvdXQ7XG4gICAgZGVsZXRlIHByb3BzLmVudGVyVGltZW91dDtcbiAgICBkZWxldGUgcHJvcHMubGVhdmVUaW1lb3V0O1xuICAgIGRlbGV0ZSBwcm9wcy5jaGlsZHJlbjtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSwgcHJvcHMpO1xuICB9O1xuXG4gIHJldHVybiBDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkNTU1RyYW5zaXRpb25Hcm91cENoaWxkLmRpc3BsYXlOYW1lID0gJ0NTU1RyYW5zaXRpb25Hcm91cENoaWxkJztcblxuXG5DU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9wVHlwZXMgOiB7fTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY2hhaW5GdW5jdGlvbiA9IHJlcXVpcmUoJ2NoYWluLWZ1bmN0aW9uJyk7XG5cbnZhciBfY2hhaW5GdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGFpbkZ1bmN0aW9uKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfQ2hpbGRNYXBwaW5nID0gcmVxdWlyZSgnLi91dGlscy9DaGlsZE1hcHBpbmcnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICBjb21wb25lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICBjaGlsZEZhY3Rvcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZVxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50OiAnc3BhbicsXG4gIGNoaWxkRmFjdG9yeTogZnVuY3Rpb24gY2hpbGRGYWN0b3J5KGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG59O1xuXG52YXIgVHJhbnNpdGlvbkdyb3VwID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRyYW5zaXRpb25Hcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbkdyb3VwKHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYW5zaXRpb25Hcm91cCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLnBlcmZvcm1BcHBlYXIgPSBmdW5jdGlvbiAoa2V5LCBjb21wb25lbnQpIHtcbiAgICAgIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0gPSB0cnVlO1xuXG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxBcHBlYXIpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudFdpbGxBcHBlYXIoX3RoaXMuX2hhbmRsZURvbmVBcHBlYXJpbmcuYmluZChfdGhpcywga2V5LCBjb21wb25lbnQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLl9oYW5kbGVEb25lQXBwZWFyaW5nKGtleSwgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2hhbmRsZURvbmVBcHBlYXJpbmcgPSBmdW5jdGlvbiAoa2V5LCBjb21wb25lbnQpIHtcbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkQXBwZWFyKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnREaWRBcHBlYXIoKTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV07XG5cbiAgICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShfdGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIGlmICghY3VycmVudENoaWxkTWFwcGluZyB8fCAhY3VycmVudENoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIC8vIFRoaXMgd2FzIHJlbW92ZWQgYmVmb3JlIGl0IGhhZCBmdWxseSBhcHBlYXJlZC4gUmVtb3ZlIGl0LlxuICAgICAgICBfdGhpcy5wZXJmb3JtTGVhdmUoa2V5LCBjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiAoa2V5LCBjb21wb25lbnQpIHtcbiAgICAgIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0gPSB0cnVlO1xuXG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxFbnRlcikge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50V2lsbEVudGVyKF90aGlzLl9oYW5kbGVEb25lRW50ZXJpbmcuYmluZChfdGhpcywga2V5LCBjb21wb25lbnQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLl9oYW5kbGVEb25lRW50ZXJpbmcoa2V5LCBjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5faGFuZGxlRG9uZUVudGVyaW5nID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZEVudGVyKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnREaWRFbnRlcigpO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XTtcblxuICAgICAgdmFyIGN1cnJlbnRDaGlsZE1hcHBpbmcgPSAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKF90aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgaWYgKCFjdXJyZW50Q2hpbGRNYXBwaW5nIHx8ICFjdXJyZW50Q2hpbGRNYXBwaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgLy8gVGhpcyB3YXMgcmVtb3ZlZCBiZWZvcmUgaXQgaGFkIGZ1bGx5IGVudGVyZWQuIFJlbW92ZSBpdC5cbiAgICAgICAgX3RoaXMucGVyZm9ybUxlYXZlKGtleSwgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucGVyZm9ybUxlYXZlID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldID0gdHJ1ZTtcblxuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsTGVhdmUpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudFdpbGxMZWF2ZShfdGhpcy5faGFuZGxlRG9uZUxlYXZpbmcuYmluZChfdGhpcywga2V5LCBjb21wb25lbnQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIGlzIHNvbWV3aGF0IGRhbmdlcm91cyBiL2MgaXQgY2FsbHMgc2V0U3RhdGUoKVxuICAgICAgICAvLyBhZ2FpbiwgZWZmZWN0aXZlbHkgbXV0YXRpbmcgdGhlIGNvbXBvbmVudCBiZWZvcmUgYWxsIHRoZSB3b3JrXG4gICAgICAgIC8vIGlzIGRvbmUuXG4gICAgICAgIF90aGlzLl9oYW5kbGVEb25lTGVhdmluZyhrZXksIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9oYW5kbGVEb25lTGVhdmluZyA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRMZWF2ZSkge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkTGVhdmUoKTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV07XG5cbiAgICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShfdGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIGlmIChjdXJyZW50Q2hpbGRNYXBwaW5nICYmIGN1cnJlbnRDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAvLyBUaGlzIGVudGVyZWQgYWdhaW4gYmVmb3JlIGl0IGZ1bGx5IGxlZnQuIEFkZCBpdCBhZ2Fpbi5cbiAgICAgICAgX3RoaXMua2V5c1RvRW50ZXIucHVzaChrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgdmFyIG5ld0NoaWxkcmVuID0gX2V4dGVuZHMoe30sIHN0YXRlLmNoaWxkcmVuKTtcbiAgICAgICAgICBkZWxldGUgbmV3Q2hpbGRyZW5ba2V5XTtcbiAgICAgICAgICByZXR1cm4geyBjaGlsZHJlbjogbmV3Q2hpbGRyZW4gfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmNoaWxkUmVmcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoaWxkcmVuOiAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKHByb3BzLmNoaWxkcmVuKVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5cyA9IHt9O1xuICAgIHRoaXMua2V5c1RvRW50ZXIgPSBbXTtcbiAgICB0aGlzLmtleXNUb0xlYXZlID0gW107XG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBpbml0aWFsQ2hpbGRNYXBwaW5nID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcbiAgICBmb3IgKHZhciBrZXkgaW4gaW5pdGlhbENoaWxkTWFwcGluZykge1xuICAgICAgaWYgKGluaXRpYWxDaGlsZE1hcHBpbmdba2V5XSkge1xuICAgICAgICB0aGlzLnBlcmZvcm1BcHBlYXIoa2V5LCB0aGlzLmNoaWxkUmVmc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIgbmV4dENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykobmV4dFByb3BzLmNoaWxkcmVuKTtcbiAgICB2YXIgcHJldkNoaWxkTWFwcGluZyA9IHRoaXMuc3RhdGUuY2hpbGRyZW47XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoaWxkcmVuOiAoMCwgX0NoaWxkTWFwcGluZy5tZXJnZUNoaWxkTWFwcGluZ3MpKHByZXZDaGlsZE1hcHBpbmcsIG5leHRDaGlsZE1hcHBpbmcpXG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gbmV4dENoaWxkTWFwcGluZykge1xuICAgICAgdmFyIGhhc1ByZXYgPSBwcmV2Q2hpbGRNYXBwaW5nICYmIHByZXZDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgICAgIGlmIChuZXh0Q2hpbGRNYXBwaW5nW2tleV0gJiYgIWhhc1ByZXYgJiYgIXRoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSkge1xuICAgICAgICB0aGlzLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfa2V5IGluIHByZXZDaGlsZE1hcHBpbmcpIHtcbiAgICAgIHZhciBoYXNOZXh0ID0gbmV4dENoaWxkTWFwcGluZyAmJiBuZXh0Q2hpbGRNYXBwaW5nLmhhc093blByb3BlcnR5KF9rZXkpO1xuICAgICAgaWYgKHByZXZDaGlsZE1hcHBpbmdbX2tleV0gJiYgIWhhc05leHQgJiYgIXRoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNbX2tleV0pIHtcbiAgICAgICAgdGhpcy5rZXlzVG9MZWF2ZS5wdXNoKF9rZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHdlIHdhbnQgdG8gc29tZWRheSBjaGVjayBmb3IgcmVvcmRlcmluZywgd2UgY291bGQgZG8gaXQgaGVyZS5cbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBrZXlzVG9FbnRlciA9IHRoaXMua2V5c1RvRW50ZXI7XG4gICAgdGhpcy5rZXlzVG9FbnRlciA9IFtdO1xuICAgIGtleXNUb0VudGVyLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzMi5wZXJmb3JtRW50ZXIoa2V5LCBfdGhpczIuY2hpbGRSZWZzW2tleV0pO1xuICAgIH0pO1xuXG4gICAgdmFyIGtleXNUb0xlYXZlID0gdGhpcy5rZXlzVG9MZWF2ZTtcbiAgICB0aGlzLmtleXNUb0xlYXZlID0gW107XG4gICAga2V5c1RvTGVhdmUuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXMyLnBlcmZvcm1MZWF2ZShrZXksIF90aGlzMi5jaGlsZFJlZnNba2V5XSk7XG4gICAgfSk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAvLyBUT0RPOiB3ZSBjb3VsZCBnZXQgcmlkIG9mIHRoZSBuZWVkIGZvciB0aGUgd3JhcHBlciBub2RlXG4gICAgLy8gYnkgY2xvbmluZyBhIHNpbmdsZSBjaGlsZFxuICAgIHZhciBjaGlsZHJlblRvUmVuZGVyID0gW107XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChrZXkpIHtcbiAgICAgIHZhciBjaGlsZCA9IF90aGlzMy5zdGF0ZS5jaGlsZHJlbltrZXldO1xuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIHZhciBpc0NhbGxiYWNrUmVmID0gdHlwZW9mIGNoaWxkLnJlZiAhPT0gJ3N0cmluZyc7XG4gICAgICAgIHZhciBmYWN0b3J5Q2hpbGQgPSBfdGhpczMucHJvcHMuY2hpbGRGYWN0b3J5KGNoaWxkKTtcbiAgICAgICAgdmFyIHJlZiA9IGZ1bmN0aW9uIHJlZihyKSB7XG4gICAgICAgICAgX3RoaXMzLmNoaWxkUmVmc1trZXldID0gcjtcbiAgICAgICAgfTtcblxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShpc0NhbGxiYWNrUmVmLCAnc3RyaW5nIHJlZnMgYXJlIG5vdCBzdXBwb3J0ZWQgb24gY2hpbGRyZW4gb2YgVHJhbnNpdGlvbkdyb3VwIGFuZCB3aWxsIGJlIGlnbm9yZWQuICcgKyAnUGxlYXNlIHVzZSBhIGNhbGxiYWNrIHJlZiBpbnN0ZWFkOiBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3JlZnMtYW5kLXRoZS1kb20uaHRtbCN0aGUtcmVmLWNhbGxiYWNrLWF0dHJpYnV0ZScpIDogdm9pZCAwO1xuXG4gICAgICAgIC8vIEFsd2F5cyBjaGFpbmluZyB0aGUgcmVmcyBsZWFkcyB0byBwcm9ibGVtcyB3aGVuIHRoZSBjaGlsZEZhY3RvcnlcbiAgICAgICAgLy8gd3JhcHMgdGhlIGNoaWxkLiBUaGUgY2hpbGQgcmVmIGNhbGxiYWNrIGdldHMgY2FsbGVkIHR3aWNlIHdpdGggdGhlXG4gICAgICAgIC8vIHdyYXBwZXIgYW5kIHRoZSBjaGlsZC4gU28gd2Ugb25seSBuZWVkIHRvIGNoYWluIHRoZSByZWYgaWYgdGhlXG4gICAgICAgIC8vIGZhY3RvcnlDaGlsZCBpcyBub3QgZGlmZmVyZW50IGZyb20gY2hpbGQuXG4gICAgICAgIGlmIChmYWN0b3J5Q2hpbGQgPT09IGNoaWxkICYmIGlzQ2FsbGJhY2tSZWYpIHtcbiAgICAgICAgICByZWYgPSAoMCwgX2NoYWluRnVuY3Rpb24yLmRlZmF1bHQpKGNoaWxkLnJlZiwgcmVmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFlvdSBtYXkgbmVlZCB0byBhcHBseSByZWFjdGl2ZSB1cGRhdGVzIHRvIGEgY2hpbGQgYXMgaXQgaXMgbGVhdmluZy5cbiAgICAgICAgLy8gVGhlIG5vcm1hbCBSZWFjdCB3YXkgdG8gZG8gaXQgd29uJ3Qgd29yayBzaW5jZSB0aGUgY2hpbGQgd2lsbCBoYXZlXG4gICAgICAgIC8vIGFscmVhZHkgYmVlbiByZW1vdmVkLiBJbiBjYXNlIHlvdSBuZWVkIHRoaXMgYmVoYXZpb3IgeW91IGNhbiBwcm92aWRlXG4gICAgICAgIC8vIGEgY2hpbGRGYWN0b3J5IGZ1bmN0aW9uIHRvIHdyYXAgZXZlcnkgY2hpbGQsIGV2ZW4gdGhlIG9uZXMgdGhhdCBhcmVcbiAgICAgICAgLy8gbGVhdmluZy5cbiAgICAgICAgY2hpbGRyZW5Ub1JlbmRlci5wdXNoKF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoZmFjdG9yeUNoaWxkLCB7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgcmVmOiByZWZcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5zdGF0ZS5jaGlsZHJlbikge1xuICAgICAgX2xvb3Aoa2V5KTtcbiAgICB9XG5cbiAgICAvLyBEbyBub3QgZm9yd2FyZCBUcmFuc2l0aW9uR3JvdXAgcHJvcHMgdG8gcHJpbWl0aXZlIERPTSBub2Rlc1xuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkxlYXZlO1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uTmFtZTtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkFwcGVhcjtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkVudGVyO1xuICAgIGRlbGV0ZSBwcm9wcy5jaGlsZEZhY3Rvcnk7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25FbnRlclRpbWVvdXQ7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25BcHBlYXJUaW1lb3V0O1xuICAgIGRlbGV0ZSBwcm9wcy5jb21wb25lbnQ7XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5jb21wb25lbnQsIHByb3BzLCBjaGlsZHJlblRvUmVuZGVyKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbkdyb3VwO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuVHJhbnNpdGlvbkdyb3VwLmRpc3BsYXlOYW1lID0gJ1RyYW5zaXRpb25Hcm91cCc7XG5cblxuVHJhbnNpdGlvbkdyb3VwLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHByb3BUeXBlcyA6IHt9O1xuVHJhbnNpdGlvbkdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHJhbnNpdGlvbkdyb3VwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8ICgvXltzXFxXXSokLykudGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZztcbmV4cG9ydHMubWVyZ2VDaGlsZE1hcHBpbmdzID0gbWVyZ2VDaGlsZE1hcHBpbmdzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLyoqXG4gKiBHaXZlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmAsIHJldHVybiBhbiBvYmplY3QgbWFwcGluZyBrZXkgdG8gY2hpbGQuXG4gKlxuICogQHBhcmFtIHsqfSBjaGlsZHJlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmBcbiAqIEByZXR1cm4ge29iamVjdH0gTWFwcGluZyBvZiBrZXkgdG8gY2hpbGRcbiAqL1xuZnVuY3Rpb24gZ2V0Q2hpbGRNYXBwaW5nKGNoaWxkcmVuKSB7XG4gIGlmICghY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBfcmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmVzdWx0W2NoaWxkLmtleV0gPSBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogV2hlbiB5b3UncmUgYWRkaW5nIG9yIHJlbW92aW5nIGNoaWxkcmVuIHNvbWUgbWF5IGJlIGFkZGVkIG9yIHJlbW92ZWQgaW4gdGhlXG4gKiBzYW1lIHJlbmRlciBwYXNzLiBXZSB3YW50IHRvIHNob3cgKmJvdGgqIHNpbmNlIHdlIHdhbnQgdG8gc2ltdWx0YW5lb3VzbHlcbiAqIGFuaW1hdGUgZWxlbWVudHMgaW4gYW5kIG91dC4gVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHByZXZpb3VzIHNldCBvZiBrZXlzXG4gKiBhbmQgYSBuZXcgc2V0IG9mIGtleXMgYW5kIG1lcmdlcyB0aGVtIHdpdGggaXRzIGJlc3QgZ3Vlc3Mgb2YgdGhlIGNvcnJlY3RcbiAqIG9yZGVyaW5nLiBJbiB0aGUgZnV0dXJlIHdlIG1heSBleHBvc2Ugc29tZSBvZiB0aGUgdXRpbGl0aWVzIGluXG4gKiBSZWFjdE11bHRpQ2hpbGQgdG8gbWFrZSB0aGlzIGVhc3ksIGJ1dCBmb3Igbm93IFJlYWN0IGl0c2VsZiBkb2VzIG5vdFxuICogZGlyZWN0bHkgaGF2ZSB0aGlzIGNvbmNlcHQgb2YgdGhlIHVuaW9uIG9mIHByZXZDaGlsZHJlbiBhbmQgbmV4dENoaWxkcmVuXG4gKiBzbyB3ZSBpbXBsZW1lbnQgaXQgaGVyZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJldiBwcmV2IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHBhcmFtIHtvYmplY3R9IG5leHQgbmV4dCBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBrZXkgc2V0IHRoYXQgY29udGFpbnMgYWxsIGtleXMgaW4gYHByZXZgIGFuZCBhbGwga2V5c1xuICogaW4gYG5leHRgIGluIGEgcmVhc29uYWJsZSBvcmRlci5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXYsIG5leHQpIHtcbiAgcHJldiA9IHByZXYgfHwge307XG4gIG5leHQgPSBuZXh0IHx8IHt9O1xuXG4gIGZ1bmN0aW9uIGdldFZhbHVlRm9yS2V5KGtleSkge1xuICAgIGlmIChuZXh0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBuZXh0W2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZba2V5XTtcbiAgfVxuXG4gIC8vIEZvciBlYWNoIGtleSBvZiBgbmV4dGAsIHRoZSBsaXN0IG9mIGtleXMgdG8gaW5zZXJ0IGJlZm9yZSB0aGF0IGtleSBpblxuICAvLyB0aGUgY29tYmluZWQgbGlzdFxuICB2YXIgbmV4dEtleXNQZW5kaW5nID0ge307XG5cbiAgdmFyIHBlbmRpbmdLZXlzID0gW107XG4gIGZvciAodmFyIHByZXZLZXkgaW4gcHJldikge1xuICAgIGlmIChuZXh0Lmhhc093blByb3BlcnR5KHByZXZLZXkpKSB7XG4gICAgICBpZiAocGVuZGluZ0tleXMubGVuZ3RoKSB7XG4gICAgICAgIG5leHRLZXlzUGVuZGluZ1twcmV2S2V5XSA9IHBlbmRpbmdLZXlzO1xuICAgICAgICBwZW5kaW5nS2V5cyA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nS2V5cy5wdXNoKHByZXZLZXkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpID0gdm9pZCAwO1xuICB2YXIgY2hpbGRNYXBwaW5nID0ge307XG4gIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dCkge1xuICAgIGlmIChuZXh0S2V5c1BlbmRpbmcuaGFzT3duUHJvcGVydHkobmV4dEtleSkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBlbmRpbmdOZXh0S2V5ID0gbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldO1xuICAgICAgICBjaGlsZE1hcHBpbmdbbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdOZXh0S2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2hpbGRNYXBwaW5nW25leHRLZXldID0gZ2V0VmFsdWVGb3JLZXkobmV4dEtleSk7XG4gIH1cblxuICAvLyBGaW5hbGx5LCBhZGQgdGhlIGtleXMgd2hpY2ggZGlkbid0IGFwcGVhciBiZWZvcmUgYW55IGtleSBpbiBgbmV4dGBcbiAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hpbGRNYXBwaW5nW3BlbmRpbmdLZXlzW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdLZXlzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE1hcHBpbmc7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5uYW1lU2hhcGUgPSB1bmRlZmluZWQ7XG5leHBvcnRzLnRyYW5zaXRpb25UaW1lb3V0ID0gdHJhbnNpdGlvblRpbWVvdXQ7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25UaW1lb3V0KHRyYW5zaXRpb25UeXBlKSB7XG4gIHZhciB0aW1lb3V0UHJvcE5hbWUgPSAndHJhbnNpdGlvbicgKyB0cmFuc2l0aW9uVHlwZSArICdUaW1lb3V0JztcbiAgdmFyIGVuYWJsZWRQcm9wTmFtZSA9ICd0cmFuc2l0aW9uJyArIHRyYW5zaXRpb25UeXBlO1xuXG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAvLyBJZiB0aGUgdHJhbnNpdGlvbiBpcyBlbmFibGVkXG4gICAgaWYgKHByb3BzW2VuYWJsZWRQcm9wTmFtZV0pIHtcbiAgICAgIC8vIElmIG5vIHRpbWVvdXQgZHVyYXRpb24gaXMgcHJvdmlkZWRcbiAgICAgIGlmIChwcm9wc1t0aW1lb3V0UHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcih0aW1lb3V0UHJvcE5hbWUgKyAnIHdhc25cXCd0IHN1cHBsaWVkIHRvIENTU1RyYW5zaXRpb25Hcm91cDogJyArICd0aGlzIGNhbiBjYXVzZSB1bnJlbGlhYmxlIGFuaW1hdGlvbnMgYW5kIHdvblxcJ3QgYmUgc3VwcG9ydGVkIGluICcgKyAnYSBmdXR1cmUgdmVyc2lvbiBvZiBSZWFjdC4gU2VlICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1hbmltYXRpb24tdHJhbnNpdGlvbi1ncm91cC10aW1lb3V0IGZvciBtb3JlICcgKyAnaW5mb3JtYXRpb24uJyk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGR1cmF0aW9uIGlzbid0IGEgbnVtYmVyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wc1t0aW1lb3V0UHJvcE5hbWVdICE9PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKHRpbWVvdXRQcm9wTmFtZSArICcgbXVzdCBiZSBhIG51bWJlciAoaW4gbWlsbGlzZWNvbmRzKScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuXG52YXIgbmFtZVNoYXBlID0gZXhwb3J0cy5uYW1lU2hhcGUgPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGxlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYWN0aXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xufSksIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGVudGVyQWN0aXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgbGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBsZWF2ZUFjdGl2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFwcGVhcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFwcGVhckFjdGl2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbn0pXSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9