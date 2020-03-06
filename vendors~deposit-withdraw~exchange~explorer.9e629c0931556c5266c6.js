(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[12],{

/***/ 2784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(2785);


/***/ }),

/***/ 2785:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var destroy = __webpack_require__(2786);
var initialize = __webpack_require__(2794);
var update = __webpack_require__(2804);

module.exports = {
  initialize: initialize,
  update: update,
  destroy: destroy
};


/***/ }),

/***/ 2786:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2787);
var dom = __webpack_require__(2789);
var instances = __webpack_require__(2790);

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

/***/ 2787:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cls = __webpack_require__(2788);
var dom = __webpack_require__(2789);

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

/***/ 2788:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ 2789:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ 2790:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2787);
var cls = __webpack_require__(2788);
var defaultSettings = __webpack_require__(2791);
var dom = __webpack_require__(2789);
var EventManager = __webpack_require__(2792);
var guid = __webpack_require__(2793);

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

/***/ 2791:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ 2792:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ 2793:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ 2794:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2787);
var cls = __webpack_require__(2788);
var instances = __webpack_require__(2790);
var updateGeometry = __webpack_require__(2795);

// Handlers
var handlers = {
  'click-rail': __webpack_require__(2797),
  'drag-scrollbar': __webpack_require__(2798),
  'keyboard': __webpack_require__(2799),
  'wheel': __webpack_require__(2800),
  'touch': __webpack_require__(2801),
  'selection': __webpack_require__(2802)
};
var nativeScrollHandler = __webpack_require__(2803);

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

/***/ 2795:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2787);
var cls = __webpack_require__(2788);
var dom = __webpack_require__(2789);
var instances = __webpack_require__(2790);
var updateScroll = __webpack_require__(2796);

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

/***/ 2796:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var instances = __webpack_require__(2790);

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

/***/ 2797:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var instances = __webpack_require__(2790);
var updateGeometry = __webpack_require__(2795);
var updateScroll = __webpack_require__(2796);

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

/***/ 2798:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2787);
var dom = __webpack_require__(2789);
var instances = __webpack_require__(2790);
var updateGeometry = __webpack_require__(2795);
var updateScroll = __webpack_require__(2796);

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

/***/ 2799:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2787);
var dom = __webpack_require__(2789);
var instances = __webpack_require__(2790);
var updateGeometry = __webpack_require__(2795);
var updateScroll = __webpack_require__(2796);

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

/***/ 2800:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var instances = __webpack_require__(2790);
var updateGeometry = __webpack_require__(2795);
var updateScroll = __webpack_require__(2796);

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

/***/ 2801:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2787);
var instances = __webpack_require__(2790);
var updateGeometry = __webpack_require__(2795);
var updateScroll = __webpack_require__(2796);

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

/***/ 2802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2787);
var instances = __webpack_require__(2790);
var updateGeometry = __webpack_require__(2795);
var updateScroll = __webpack_require__(2796);

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

/***/ 2803:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var instances = __webpack_require__(2790);
var updateGeometry = __webpack_require__(2795);

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

/***/ 2804:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2787);
var dom = __webpack_require__(2789);
var instances = __webpack_require__(2790);
var updateGeometry = __webpack_require__(2795);
var updateScroll = __webpack_require__(2796);

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kZXBvc2l0LXdpdGhkcmF3fmV4Y2hhbmdlfmV4cGxvcmVyLjllNjI5YzA5MzE1NTZjNTI2NmM2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL3BsdWdpbi9kZXN0cm95LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9zcmMvanMvbGliL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL2xpYi9jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL2xpYi9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9wbHVnaW4vaW5zdGFuY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9zcmMvanMvcGx1Z2luL2RlZmF1bHQtc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL2xpYi9ldmVudC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9zcmMvanMvbGliL2d1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9wbHVnaW4vaW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL3BsdWdpbi91cGRhdGUtZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9wbHVnaW4vdXBkYXRlLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL3BsdWdpbi9oYW5kbGVyL2NsaWNrLXJhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9wbHVnaW4vaGFuZGxlci9kcmFnLXNjcm9sbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL3BsdWdpbi9oYW5kbGVyL2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9zcmMvanMvcGx1Z2luL2hhbmRsZXIvbW91c2Utd2hlZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9wbHVnaW4vaGFuZGxlci90b3VjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL3BsdWdpbi9oYW5kbGVyL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvc3JjL2pzL3BsdWdpbi9oYW5kbGVyL25hdGl2ZS1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL3NyYy9qcy9wbHVnaW4vdXBkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zcmMvanMvbWFpbicpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgZGVzdHJveSA9IHJlcXVpcmUoJy4vcGx1Z2luL2Rlc3Ryb3knKTtcclxudmFyIGluaXRpYWxpemUgPSByZXF1aXJlKCcuL3BsdWdpbi9pbml0aWFsaXplJyk7XHJcbnZhciB1cGRhdGUgPSByZXF1aXJlKCcuL3BsdWdpbi91cGRhdGUnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGluaXRpYWxpemU6IGluaXRpYWxpemUsXHJcbiAgdXBkYXRlOiB1cGRhdGUsXHJcbiAgZGVzdHJveTogZGVzdHJveVxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgXyA9IHJlcXVpcmUoJy4uL2xpYi9oZWxwZXInKTtcclxudmFyIGRvbSA9IHJlcXVpcmUoJy4uL2xpYi9kb20nKTtcclxudmFyIGluc3RhbmNlcyA9IHJlcXVpcmUoJy4vaW5zdGFuY2VzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgdmFyIGkgPSBpbnN0YW5jZXMuZ2V0KGVsZW1lbnQpO1xyXG5cclxuICBpZiAoIWkpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGkuZXZlbnQudW5iaW5kQWxsKCk7XHJcbiAgZG9tLnJlbW92ZShpLnNjcm9sbGJhclgpO1xyXG4gIGRvbS5yZW1vdmUoaS5zY3JvbGxiYXJZKTtcclxuICBkb20ucmVtb3ZlKGkuc2Nyb2xsYmFyWFJhaWwpO1xyXG4gIGRvbS5yZW1vdmUoaS5zY3JvbGxiYXJZUmFpbCk7XHJcbiAgXy5yZW1vdmVQc0NsYXNzZXMoZWxlbWVudCk7XHJcblxyXG4gIGluc3RhbmNlcy5yZW1vdmUoZWxlbWVudCk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBjbHMgPSByZXF1aXJlKCcuL2NsYXNzJyk7XHJcbnZhciBkb20gPSByZXF1aXJlKCcuL2RvbScpO1xyXG5cclxudmFyIHRvSW50ID0gZXhwb3J0cy50b0ludCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKSB8fCAwO1xyXG59O1xyXG5cclxudmFyIGNsb25lID0gZXhwb3J0cy5jbG9uZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICBpZiAoIW9iaikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSBlbHNlIGlmIChvYmouY29uc3RydWN0b3IgPT09IEFycmF5KSB7XHJcbiAgICByZXR1cm4gb2JqLm1hcChjbG9uZSk7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICByZXN1bHRba2V5XSA9IGNsb25lKG9ialtrZXldKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0cy5leHRlbmQgPSBmdW5jdGlvbiAob3JpZ2luYWwsIHNvdXJjZSkge1xyXG4gIHZhciByZXN1bHQgPSBjbG9uZShvcmlnaW5hbCk7XHJcbiAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xyXG4gICAgcmVzdWx0W2tleV0gPSBjbG9uZShzb3VyY2Vba2V5XSk7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5leHBvcnRzLmlzRWRpdGFibGUgPSBmdW5jdGlvbiAoZWwpIHtcclxuICByZXR1cm4gZG9tLm1hdGNoZXMoZWwsIFwiaW5wdXQsW2NvbnRlbnRlZGl0YWJsZV1cIikgfHxcclxuICAgICAgICAgZG9tLm1hdGNoZXMoZWwsIFwic2VsZWN0LFtjb250ZW50ZWRpdGFibGVdXCIpIHx8XHJcbiAgICAgICAgIGRvbS5tYXRjaGVzKGVsLCBcInRleHRhcmVhLFtjb250ZW50ZWRpdGFibGVdXCIpIHx8XHJcbiAgICAgICAgIGRvbS5tYXRjaGVzKGVsLCBcImJ1dHRvbixbY29udGVudGVkaXRhYmxlXVwiKTtcclxufTtcclxuXHJcbmV4cG9ydHMucmVtb3ZlUHNDbGFzc2VzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICB2YXIgY2xzTGlzdCA9IGNscy5saXN0KGVsZW1lbnQpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2xzTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGNsYXNzTmFtZSA9IGNsc0xpc3RbaV07XHJcbiAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoJ3BzLScpID09PSAwKSB7XHJcbiAgICAgIGNscy5yZW1vdmUoZWxlbWVudCwgY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnRzLm91dGVyV2lkdGggPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIHJldHVybiB0b0ludChkb20uY3NzKGVsZW1lbnQsICd3aWR0aCcpKSArXHJcbiAgICAgICAgIHRvSW50KGRvbS5jc3MoZWxlbWVudCwgJ3BhZGRpbmdMZWZ0JykpICtcclxuICAgICAgICAgdG9JbnQoZG9tLmNzcyhlbGVtZW50LCAncGFkZGluZ1JpZ2h0JykpICtcclxuICAgICAgICAgdG9JbnQoZG9tLmNzcyhlbGVtZW50LCAnYm9yZGVyTGVmdFdpZHRoJykpICtcclxuICAgICAgICAgdG9JbnQoZG9tLmNzcyhlbGVtZW50LCAnYm9yZGVyUmlnaHRXaWR0aCcpKTtcclxufTtcclxuXHJcbmV4cG9ydHMuc3RhcnRTY3JvbGxpbmcgPSBmdW5jdGlvbiAoZWxlbWVudCwgYXhpcykge1xyXG4gIGNscy5hZGQoZWxlbWVudCwgJ3BzLWluLXNjcm9sbGluZycpO1xyXG4gIGlmICh0eXBlb2YgYXhpcyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGNscy5hZGQoZWxlbWVudCwgJ3BzLScgKyBheGlzKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2xzLmFkZChlbGVtZW50LCAncHMteCcpO1xyXG4gICAgY2xzLmFkZChlbGVtZW50LCAncHMteScpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydHMuc3RvcFNjcm9sbGluZyA9IGZ1bmN0aW9uIChlbGVtZW50LCBheGlzKSB7XHJcbiAgY2xzLnJlbW92ZShlbGVtZW50LCAncHMtaW4tc2Nyb2xsaW5nJyk7XHJcbiAgaWYgKHR5cGVvZiBheGlzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgY2xzLnJlbW92ZShlbGVtZW50LCAncHMtJyArIGF4aXMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjbHMucmVtb3ZlKGVsZW1lbnQsICdwcy14Jyk7XHJcbiAgICBjbHMucmVtb3ZlKGVsZW1lbnQsICdwcy15Jyk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0cy5lbnYgPSB7XHJcbiAgaXNXZWJLaXQ6ICdXZWJraXRBcHBlYXJhbmNlJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXHJcbiAgc3VwcG9ydHNUb3VjaDogKCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2Ygd2luZG93LkRvY3VtZW50VG91Y2gpLFxyXG4gIHN1cHBvcnRzSWVQb2ludGVyOiB3aW5kb3cubmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgIT09IG51bGxcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gb2xkQWRkKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gIHZhciBjbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcclxuICBpZiAoY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSkgPCAwKSB7XHJcbiAgICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcclxuICB9XHJcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb2xkUmVtb3ZlKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gIHZhciBjbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcclxuICB2YXIgaWR4ID0gY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSk7XHJcbiAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICBjbGFzc2VzLnNwbGljZShpZHgsIDEpO1xyXG4gIH1cclxuICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpO1xyXG59XHJcblxyXG5leHBvcnRzLmFkZCA9IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvbGRBZGQoZWxlbWVudCwgY2xhc3NOYW1lKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnRzLnJlbW92ZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvbGRSZW1vdmUoZWxlbWVudCwgY2xhc3NOYW1lKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnRzLmxpc3QgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlbGVtZW50LmNsYXNzTGlzdCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG4gIH1cclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIERPTSA9IHt9O1xyXG5cclxuRE9NLmUgPSBmdW5jdGlvbiAodGFnTmFtZSwgY2xhc3NOYW1lKSB7XHJcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuRE9NLmFwcGVuZFRvID0gZnVuY3Rpb24gKGNoaWxkLCBwYXJlbnQpIHtcclxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gIHJldHVybiBjaGlsZDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNzc0dldChlbGVtZW50LCBzdHlsZU5hbWUpIHtcclxuICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbc3R5bGVOYW1lXTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3NzU2V0KGVsZW1lbnQsIHN0eWxlTmFtZSwgc3R5bGVWYWx1ZSkge1xyXG4gIGlmICh0eXBlb2Ygc3R5bGVWYWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgIHN0eWxlVmFsdWUgPSBzdHlsZVZhbHVlLnRvU3RyaW5nKCkgKyAncHgnO1xyXG4gIH1cclxuICBlbGVtZW50LnN0eWxlW3N0eWxlTmFtZV0gPSBzdHlsZVZhbHVlO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjc3NNdWx0aVNldChlbGVtZW50LCBvYmopIHtcclxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICB2YXIgdmFsID0gb2JqW2tleV07XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdmFsID0gdmFsLnRvU3RyaW5nKCkgKyAncHgnO1xyXG4gICAgfVxyXG4gICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsO1xyXG4gIH1cclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuRE9NLmNzcyA9IGZ1bmN0aW9uIChlbGVtZW50LCBzdHlsZU5hbWVPck9iamVjdCwgc3R5bGVWYWx1ZSkge1xyXG4gIGlmICh0eXBlb2Ygc3R5bGVOYW1lT3JPYmplY3QgPT09ICdvYmplY3QnKSB7XHJcbiAgICAvLyBtdWx0aXBsZSBzZXQgd2l0aCBvYmplY3RcclxuICAgIHJldHVybiBjc3NNdWx0aVNldChlbGVtZW50LCBzdHlsZU5hbWVPck9iamVjdCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICh0eXBlb2Ygc3R5bGVWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIGNzc0dldChlbGVtZW50LCBzdHlsZU5hbWVPck9iamVjdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY3NzU2V0KGVsZW1lbnQsIHN0eWxlTmFtZU9yT2JqZWN0LCBzdHlsZVZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5ET00ubWF0Y2hlcyA9IGZ1bmN0aW9uIChlbGVtZW50LCBxdWVyeSkge1xyXG4gIGlmICh0eXBlb2YgZWxlbWVudC5tYXRjaGVzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQubWF0Y2hlcyhxdWVyeSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICh0eXBlb2YgZWxlbWVudC5tYXRjaGVzU2VsZWN0b3IgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50Lm1hdGNoZXNTZWxlY3RvcihxdWVyeSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHF1ZXJ5KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQubW96TWF0Y2hlc1NlbGVjdG9yICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3IocXVlcnkpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3IocXVlcnkpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbkRPTS5yZW1vdmUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIGlmICh0eXBlb2YgZWxlbWVudC5yZW1vdmUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5ET00ucXVlcnlDaGlsZHJlbiA9IGZ1bmN0aW9uIChlbGVtZW50LCBzZWxlY3Rvcikge1xyXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZWxlbWVudC5jaGlsZE5vZGVzLCBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgIHJldHVybiBET00ubWF0Y2hlcyhjaGlsZCwgc2VsZWN0b3IpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBET007XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBfID0gcmVxdWlyZSgnLi4vbGliL2hlbHBlcicpO1xyXG52YXIgY2xzID0gcmVxdWlyZSgnLi4vbGliL2NsYXNzJyk7XHJcbnZhciBkZWZhdWx0U2V0dGluZ3MgPSByZXF1aXJlKCcuL2RlZmF1bHQtc2V0dGluZycpO1xyXG52YXIgZG9tID0gcmVxdWlyZSgnLi4vbGliL2RvbScpO1xyXG52YXIgRXZlbnRNYW5hZ2VyID0gcmVxdWlyZSgnLi4vbGliL2V2ZW50LW1hbmFnZXInKTtcclxudmFyIGd1aWQgPSByZXF1aXJlKCcuLi9saWIvZ3VpZCcpO1xyXG5cclxudmFyIGluc3RhbmNlcyA9IHt9O1xyXG5cclxuZnVuY3Rpb24gSW5zdGFuY2UoZWxlbWVudCkge1xyXG4gIHZhciBpID0gdGhpcztcclxuXHJcbiAgaS5zZXR0aW5ncyA9IF8uY2xvbmUoZGVmYXVsdFNldHRpbmdzKTtcclxuICBpLmNvbnRhaW5lcldpZHRoID0gbnVsbDtcclxuICBpLmNvbnRhaW5lckhlaWdodCA9IG51bGw7XHJcbiAgaS5jb250ZW50V2lkdGggPSBudWxsO1xyXG4gIGkuY29udGVudEhlaWdodCA9IG51bGw7XHJcblxyXG4gIGkuaXNSdGwgPSBkb20uY3NzKGVsZW1lbnQsICdkaXJlY3Rpb24nKSA9PT0gXCJydGxcIjtcclxuICBpLmlzTmVnYXRpdmVTY3JvbGwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG9yaWdpbmFsU2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgIHZhciByZXN1bHQgPSBudWxsO1xyXG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gLTE7XHJcbiAgICByZXN1bHQgPSBlbGVtZW50LnNjcm9sbExlZnQgPCAwO1xyXG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gb3JpZ2luYWxTY3JvbGxMZWZ0O1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9KSgpO1xyXG4gIGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ID0gaS5pc05lZ2F0aXZlU2Nyb2xsID8gZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGggOiAwO1xyXG4gIGkuZXZlbnQgPSBuZXcgRXZlbnRNYW5hZ2VyKCk7XHJcbiAgaS5vd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xyXG5cclxuICBmdW5jdGlvbiBmb2N1cygpIHtcclxuICAgIGNscy5hZGQoZWxlbWVudCwgJ3BzLWZvY3VzJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBibHVyKCkge1xyXG4gICAgY2xzLnJlbW92ZShlbGVtZW50LCAncHMtZm9jdXMnKTtcclxuICB9XHJcblxyXG4gIGkuc2Nyb2xsYmFyWFJhaWwgPSBkb20uYXBwZW5kVG8oZG9tLmUoJ2RpdicsICdwcy1zY3JvbGxiYXIteC1yYWlsJyksIGVsZW1lbnQpO1xyXG4gIGkuc2Nyb2xsYmFyWCA9IGRvbS5hcHBlbmRUbyhkb20uZSgnZGl2JywgJ3BzLXNjcm9sbGJhci14JyksIGkuc2Nyb2xsYmFyWFJhaWwpO1xyXG4gIGkuc2Nyb2xsYmFyWC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XHJcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWCwgJ2ZvY3VzJywgZm9jdXMpO1xyXG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclgsICdibHVyJywgYmx1cik7XHJcbiAgaS5zY3JvbGxiYXJYQWN0aXZlID0gbnVsbDtcclxuICBpLnNjcm9sbGJhclhXaWR0aCA9IG51bGw7XHJcbiAgaS5zY3JvbGxiYXJYTGVmdCA9IG51bGw7XHJcbiAgaS5zY3JvbGxiYXJYQm90dG9tID0gXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdib3R0b20nKSk7XHJcbiAgaS5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbSA9IGkuc2Nyb2xsYmFyWEJvdHRvbSA9PT0gaS5zY3JvbGxiYXJYQm90dG9tOyAvLyAhaXNOYU5cclxuICBpLnNjcm9sbGJhclhUb3AgPSBpLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tID8gbnVsbCA6IF8udG9JbnQoZG9tLmNzcyhpLnNjcm9sbGJhclhSYWlsLCAndG9wJykpO1xyXG4gIGkucmFpbEJvcmRlclhXaWR0aCA9IF8udG9JbnQoZG9tLmNzcyhpLnNjcm9sbGJhclhSYWlsLCAnYm9yZGVyTGVmdFdpZHRoJykpICsgXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdib3JkZXJSaWdodFdpZHRoJykpO1xyXG4gIC8vIFNldCByYWlsIHRvIGRpc3BsYXk6YmxvY2sgdG8gY2FsY3VsYXRlIG1hcmdpbnNcclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgaS5yYWlsWE1hcmdpbldpZHRoID0gXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdtYXJnaW5MZWZ0JykpICsgXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdtYXJnaW5SaWdodCcpKTtcclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdkaXNwbGF5JywgJycpO1xyXG4gIGkucmFpbFhXaWR0aCA9IG51bGw7XHJcbiAgaS5yYWlsWFJhdGlvID0gbnVsbDtcclxuXHJcbiAgaS5zY3JvbGxiYXJZUmFpbCA9IGRvbS5hcHBlbmRUbyhkb20uZSgnZGl2JywgJ3BzLXNjcm9sbGJhci15LXJhaWwnKSwgZWxlbWVudCk7XHJcbiAgaS5zY3JvbGxiYXJZID0gZG9tLmFwcGVuZFRvKGRvbS5lKCdkaXYnLCAncHMtc2Nyb2xsYmFyLXknKSwgaS5zY3JvbGxiYXJZUmFpbCk7XHJcbiAgaS5zY3JvbGxiYXJZLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcclxuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJZLCAnZm9jdXMnLCBmb2N1cyk7XHJcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWSwgJ2JsdXInLCBibHVyKTtcclxuICBpLnNjcm9sbGJhcllBY3RpdmUgPSBudWxsO1xyXG4gIGkuc2Nyb2xsYmFyWUhlaWdodCA9IG51bGw7XHJcbiAgaS5zY3JvbGxiYXJZVG9wID0gbnVsbDtcclxuICBpLnNjcm9sbGJhcllSaWdodCA9IF8udG9JbnQoZG9tLmNzcyhpLnNjcm9sbGJhcllSYWlsLCAncmlnaHQnKSk7XHJcbiAgaS5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0ID0gaS5zY3JvbGxiYXJZUmlnaHQgPT09IGkuc2Nyb2xsYmFyWVJpZ2h0OyAvLyAhaXNOYU5cclxuICBpLnNjcm9sbGJhcllMZWZ0ID0gaS5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0ID8gbnVsbCA6IF8udG9JbnQoZG9tLmNzcyhpLnNjcm9sbGJhcllSYWlsLCAnbGVmdCcpKTtcclxuICBpLnNjcm9sbGJhcllPdXRlcldpZHRoID0gaS5pc1J0bCA/IF8ub3V0ZXJXaWR0aChpLnNjcm9sbGJhclkpIDogbnVsbDtcclxuICBpLnJhaWxCb3JkZXJZV2lkdGggPSBfLnRvSW50KGRvbS5jc3MoaS5zY3JvbGxiYXJZUmFpbCwgJ2JvcmRlclRvcFdpZHRoJykpICsgXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdib3JkZXJCb3R0b21XaWR0aCcpKTtcclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgaS5yYWlsWU1hcmdpbkhlaWdodCA9IF8udG9JbnQoZG9tLmNzcyhpLnNjcm9sbGJhcllSYWlsLCAnbWFyZ2luVG9wJykpICsgXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdtYXJnaW5Cb3R0b20nKSk7XHJcbiAgZG9tLmNzcyhpLnNjcm9sbGJhcllSYWlsLCAnZGlzcGxheScsICcnKTtcclxuICBpLnJhaWxZSGVpZ2h0ID0gbnVsbDtcclxuICBpLnJhaWxZUmF0aW8gPSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJZChlbGVtZW50KSB7XHJcbiAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBzLWlkJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldElkKGVsZW1lbnQsIGlkKSB7XHJcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHMtaWQnLCBpZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUlkKGVsZW1lbnQpIHtcclxuICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcy1pZCcpO1xyXG59XHJcblxyXG5leHBvcnRzLmFkZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgdmFyIG5ld0lkID0gZ3VpZCgpO1xyXG4gIHNldElkKGVsZW1lbnQsIG5ld0lkKTtcclxuICBpbnN0YW5jZXNbbmV3SWRdID0gbmV3IEluc3RhbmNlKGVsZW1lbnQpO1xyXG4gIHJldHVybiBpbnN0YW5jZXNbbmV3SWRdO1xyXG59O1xyXG5cclxuZXhwb3J0cy5yZW1vdmUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIGRlbGV0ZSBpbnN0YW5jZXNbZ2V0SWQoZWxlbWVudCldO1xyXG4gIHJlbW92ZUlkKGVsZW1lbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIHJldHVybiBpbnN0YW5jZXNbZ2V0SWQoZWxlbWVudCldO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBoYW5kbGVyczogWydjbGljay1yYWlsJywgJ2RyYWctc2Nyb2xsYmFyJywgJ2tleWJvYXJkJywgJ3doZWVsJywgJ3RvdWNoJ10sXHJcbiAgbWF4U2Nyb2xsYmFyTGVuZ3RoOiBudWxsLFxyXG4gIG1pblNjcm9sbGJhckxlbmd0aDogbnVsbCxcclxuICBzY3JvbGxYTWFyZ2luT2Zmc2V0OiAwLFxyXG4gIHNjcm9sbFlNYXJnaW5PZmZzZXQ6IDAsXHJcbiAgc3VwcHJlc3NTY3JvbGxYOiBmYWxzZSxcclxuICBzdXBwcmVzc1Njcm9sbFk6IGZhbHNlLFxyXG4gIHN3aXBlUHJvcGFnYXRpb246IHRydWUsXHJcbiAgdXNlQm90aFdoZWVsQXhlczogZmFsc2UsXHJcbiAgd2hlZWxQcm9wYWdhdGlvbjogZmFsc2UsXHJcbiAgd2hlZWxTcGVlZDogMSxcclxuICB0aGVtZTogJ2RlZmF1bHQnXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBFdmVudEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgdGhpcy5ldmVudHMgPSB7fTtcclxufTtcclxuXHJcbkV2ZW50RWxlbWVudC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIpIHtcclxuICBpZiAodHlwZW9mIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW107XHJcbiAgfVxyXG4gIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChoYW5kbGVyKTtcclxuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGZhbHNlKTtcclxufTtcclxuXHJcbkV2ZW50RWxlbWVudC5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlcikge1xyXG4gIHZhciBpc0hhbmRsZXJQcm92aWRlZCA9ICh0eXBlb2YgaGFuZGxlciAhPT0gJ3VuZGVmaW5lZCcpO1xyXG4gIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihmdW5jdGlvbiAoaGRscikge1xyXG4gICAgaWYgKGlzSGFuZGxlclByb3ZpZGVkICYmIGhkbHIgIT09IGhhbmRsZXIpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhkbHIsIGZhbHNlKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9LCB0aGlzKTtcclxufTtcclxuXHJcbkV2ZW50RWxlbWVudC5wcm90b3R5cGUudW5iaW5kQWxsID0gZnVuY3Rpb24gKCkge1xyXG4gIGZvciAodmFyIG5hbWUgaW4gdGhpcy5ldmVudHMpIHtcclxuICAgIHRoaXMudW5iaW5kKG5hbWUpO1xyXG4gIH1cclxufTtcclxuXHJcbnZhciBFdmVudE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5ldmVudEVsZW1lbnRzID0gW107XHJcbn07XHJcblxyXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLmV2ZW50RWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgdmFyIGVlID0gdGhpcy5ldmVudEVsZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAoZXZlbnRFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZXZlbnRFbGVtZW50LmVsZW1lbnQgPT09IGVsZW1lbnQ7XHJcbiAgfSlbMF07XHJcbiAgaWYgKHR5cGVvZiBlZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGVlID0gbmV3IEV2ZW50RWxlbWVudChlbGVtZW50KTtcclxuICAgIHRoaXMuZXZlbnRFbGVtZW50cy5wdXNoKGVlKTtcclxuICB9XHJcbiAgcmV0dXJuIGVlO1xyXG59O1xyXG5cclxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xyXG4gIHRoaXMuZXZlbnRFbGVtZW50KGVsZW1lbnQpLmJpbmQoZXZlbnROYW1lLCBoYW5kbGVyKTtcclxufTtcclxuXHJcbkV2ZW50TWFuYWdlci5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xyXG4gIHRoaXMuZXZlbnRFbGVtZW50KGVsZW1lbnQpLnVuYmluZChldmVudE5hbWUsIGhhbmRsZXIpO1xyXG59O1xyXG5cclxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS51bmJpbmRBbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHRoaXMuZXZlbnRFbGVtZW50c1tpXS51bmJpbmRBbGwoKTtcclxuICB9XHJcbn07XHJcblxyXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XHJcbiAgdmFyIGVlID0gdGhpcy5ldmVudEVsZW1lbnQoZWxlbWVudCk7XHJcbiAgdmFyIG9uY2VIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIGVlLnVuYmluZChldmVudE5hbWUsIG9uY2VIYW5kbGVyKTtcclxuICAgIGhhbmRsZXIoZSk7XHJcbiAgfTtcclxuICBlZS5iaW5kKGV2ZW50TmFtZSwgb25jZUhhbmRsZXIpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBFdmVudE1hbmFnZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uICgpIHtcclxuICBmdW5jdGlvbiBzNCgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG4gICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XHJcbiAgfVxyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXHJcbiAgICAgICAgICAgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcclxuICB9O1xyXG59KSgpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgXyA9IHJlcXVpcmUoJy4uL2xpYi9oZWxwZXInKTtcclxudmFyIGNscyA9IHJlcXVpcmUoJy4uL2xpYi9jbGFzcycpO1xyXG52YXIgaW5zdGFuY2VzID0gcmVxdWlyZSgnLi9pbnN0YW5jZXMnKTtcclxudmFyIHVwZGF0ZUdlb21ldHJ5ID0gcmVxdWlyZSgnLi91cGRhdGUtZ2VvbWV0cnknKTtcclxuXHJcbi8vIEhhbmRsZXJzXHJcbnZhciBoYW5kbGVycyA9IHtcclxuICAnY2xpY2stcmFpbCc6IHJlcXVpcmUoJy4vaGFuZGxlci9jbGljay1yYWlsJyksXHJcbiAgJ2RyYWctc2Nyb2xsYmFyJzogcmVxdWlyZSgnLi9oYW5kbGVyL2RyYWctc2Nyb2xsYmFyJyksXHJcbiAgJ2tleWJvYXJkJzogcmVxdWlyZSgnLi9oYW5kbGVyL2tleWJvYXJkJyksXHJcbiAgJ3doZWVsJzogcmVxdWlyZSgnLi9oYW5kbGVyL21vdXNlLXdoZWVsJyksXHJcbiAgJ3RvdWNoJzogcmVxdWlyZSgnLi9oYW5kbGVyL3RvdWNoJyksXHJcbiAgJ3NlbGVjdGlvbic6IHJlcXVpcmUoJy4vaGFuZGxlci9zZWxlY3Rpb24nKVxyXG59O1xyXG52YXIgbmF0aXZlU2Nyb2xsSGFuZGxlciA9IHJlcXVpcmUoJy4vaGFuZGxlci9uYXRpdmUtc2Nyb2xsJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtZW50LCB1c2VyU2V0dGluZ3MpIHtcclxuICB1c2VyU2V0dGluZ3MgPSB0eXBlb2YgdXNlclNldHRpbmdzID09PSAnb2JqZWN0JyA/IHVzZXJTZXR0aW5ncyA6IHt9O1xyXG5cclxuICBjbHMuYWRkKGVsZW1lbnQsICdwcy1jb250YWluZXInKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgcGx1Z2luIGluc3RhbmNlLlxyXG4gIHZhciBpID0gaW5zdGFuY2VzLmFkZChlbGVtZW50KTtcclxuXHJcbiAgaS5zZXR0aW5ncyA9IF8uZXh0ZW5kKGkuc2V0dGluZ3MsIHVzZXJTZXR0aW5ncyk7XHJcbiAgY2xzLmFkZChlbGVtZW50LCAncHMtdGhlbWUtJyArIGkuc2V0dGluZ3MudGhlbWUpO1xyXG5cclxuICBpLnNldHRpbmdzLmhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXJOYW1lKSB7XHJcbiAgICBoYW5kbGVyc1toYW5kbGVyTmFtZV0oZWxlbWVudCk7XHJcbiAgfSk7XHJcblxyXG4gIG5hdGl2ZVNjcm9sbEhhbmRsZXIoZWxlbWVudCk7XHJcblxyXG4gIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgXyA9IHJlcXVpcmUoJy4uL2xpYi9oZWxwZXInKTtcclxudmFyIGNscyA9IHJlcXVpcmUoJy4uL2xpYi9jbGFzcycpO1xyXG52YXIgZG9tID0gcmVxdWlyZSgnLi4vbGliL2RvbScpO1xyXG52YXIgaW5zdGFuY2VzID0gcmVxdWlyZSgnLi9pbnN0YW5jZXMnKTtcclxudmFyIHVwZGF0ZVNjcm9sbCA9IHJlcXVpcmUoJy4vdXBkYXRlLXNjcm9sbCcpO1xyXG5cclxuZnVuY3Rpb24gZ2V0VGh1bWJTaXplKGksIHRodW1iU2l6ZSkge1xyXG4gIGlmIChpLnNldHRpbmdzLm1pblNjcm9sbGJhckxlbmd0aCkge1xyXG4gICAgdGh1bWJTaXplID0gTWF0aC5tYXgodGh1bWJTaXplLCBpLnNldHRpbmdzLm1pblNjcm9sbGJhckxlbmd0aCk7XHJcbiAgfVxyXG4gIGlmIChpLnNldHRpbmdzLm1heFNjcm9sbGJhckxlbmd0aCkge1xyXG4gICAgdGh1bWJTaXplID0gTWF0aC5taW4odGh1bWJTaXplLCBpLnNldHRpbmdzLm1heFNjcm9sbGJhckxlbmd0aCk7XHJcbiAgfVxyXG4gIHJldHVybiB0aHVtYlNpemU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNzcyhlbGVtZW50LCBpKSB7XHJcbiAgdmFyIHhSYWlsT2Zmc2V0ID0ge3dpZHRoOiBpLnJhaWxYV2lkdGh9O1xyXG4gIGlmIChpLmlzUnRsKSB7XHJcbiAgICB4UmFpbE9mZnNldC5sZWZ0ID0gaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgKyBlbGVtZW50LnNjcm9sbExlZnQgKyBpLmNvbnRhaW5lcldpZHRoIC0gaS5jb250ZW50V2lkdGg7XHJcbiAgfSBlbHNlIHtcclxuICAgIHhSYWlsT2Zmc2V0LmxlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgfVxyXG4gIGlmIChpLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tKSB7XHJcbiAgICB4UmFpbE9mZnNldC5ib3R0b20gPSBpLnNjcm9sbGJhclhCb3R0b20gLSBlbGVtZW50LnNjcm9sbFRvcDtcclxuICB9IGVsc2Uge1xyXG4gICAgeFJhaWxPZmZzZXQudG9wID0gaS5zY3JvbGxiYXJYVG9wICsgZWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgfVxyXG4gIGRvbS5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgeFJhaWxPZmZzZXQpO1xyXG5cclxuICB2YXIgeVJhaWxPZmZzZXQgPSB7dG9wOiBlbGVtZW50LnNjcm9sbFRvcCwgaGVpZ2h0OiBpLnJhaWxZSGVpZ2h0fTtcclxuICBpZiAoaS5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0KSB7XHJcbiAgICBpZiAoaS5pc1J0bCkge1xyXG4gICAgICB5UmFpbE9mZnNldC5yaWdodCA9IGkuY29udGVudFdpZHRoIC0gKGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICsgZWxlbWVudC5zY3JvbGxMZWZ0KSAtIGkuc2Nyb2xsYmFyWVJpZ2h0IC0gaS5zY3JvbGxiYXJZT3V0ZXJXaWR0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlSYWlsT2Zmc2V0LnJpZ2h0ID0gaS5zY3JvbGxiYXJZUmlnaHQgLSBlbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChpLmlzUnRsKSB7XHJcbiAgICAgIHlSYWlsT2Zmc2V0LmxlZnQgPSBpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCArIGVsZW1lbnQuc2Nyb2xsTGVmdCArIGkuY29udGFpbmVyV2lkdGggKiAyIC0gaS5jb250ZW50V2lkdGggLSBpLnNjcm9sbGJhcllMZWZ0IC0gaS5zY3JvbGxiYXJZT3V0ZXJXaWR0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHlSYWlsT2Zmc2V0LmxlZnQgPSBpLnNjcm9sbGJhcllMZWZ0ICsgZWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWVJhaWwsIHlSYWlsT2Zmc2V0KTtcclxuXHJcbiAgZG9tLmNzcyhpLnNjcm9sbGJhclgsIHtsZWZ0OiBpLnNjcm9sbGJhclhMZWZ0LCB3aWR0aDogaS5zY3JvbGxiYXJYV2lkdGggLSBpLnJhaWxCb3JkZXJYV2lkdGh9KTtcclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWSwge3RvcDogaS5zY3JvbGxiYXJZVG9wLCBoZWlnaHQ6IGkuc2Nyb2xsYmFyWUhlaWdodCAtIGkucmFpbEJvcmRlcllXaWR0aH0pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgdmFyIGkgPSBpbnN0YW5jZXMuZ2V0KGVsZW1lbnQpO1xyXG5cclxuICBpLmNvbnRhaW5lcldpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcclxuICBpLmNvbnRhaW5lckhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gIGkuY29udGVudFdpZHRoID0gZWxlbWVudC5zY3JvbGxXaWR0aDtcclxuICBpLmNvbnRlbnRIZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcclxuXHJcbiAgdmFyIGV4aXN0aW5nUmFpbHM7XHJcbiAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKGkuc2Nyb2xsYmFyWFJhaWwpKSB7XHJcbiAgICBleGlzdGluZ1JhaWxzID0gZG9tLnF1ZXJ5Q2hpbGRyZW4oZWxlbWVudCwgJy5wcy1zY3JvbGxiYXIteC1yYWlsJyk7XHJcbiAgICBpZiAoZXhpc3RpbmdSYWlscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGV4aXN0aW5nUmFpbHMuZm9yRWFjaChmdW5jdGlvbiAocmFpbCkge1xyXG4gICAgICAgIGRvbS5yZW1vdmUocmFpbCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZG9tLmFwcGVuZFRvKGkuc2Nyb2xsYmFyWFJhaWwsIGVsZW1lbnQpO1xyXG4gIH1cclxuICBpZiAoIWVsZW1lbnQuY29udGFpbnMoaS5zY3JvbGxiYXJZUmFpbCkpIHtcclxuICAgIGV4aXN0aW5nUmFpbHMgPSBkb20ucXVlcnlDaGlsZHJlbihlbGVtZW50LCAnLnBzLXNjcm9sbGJhci15LXJhaWwnKTtcclxuICAgIGlmIChleGlzdGluZ1JhaWxzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZXhpc3RpbmdSYWlscy5mb3JFYWNoKGZ1bmN0aW9uIChyYWlsKSB7XHJcbiAgICAgICAgZG9tLnJlbW92ZShyYWlsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkb20uYXBwZW5kVG8oaS5zY3JvbGxiYXJZUmFpbCwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWkuc2V0dGluZ3Muc3VwcHJlc3NTY3JvbGxYICYmIGkuY29udGFpbmVyV2lkdGggKyBpLnNldHRpbmdzLnNjcm9sbFhNYXJnaW5PZmZzZXQgPCBpLmNvbnRlbnRXaWR0aCkge1xyXG4gICAgaS5zY3JvbGxiYXJYQWN0aXZlID0gdHJ1ZTtcclxuICAgIGkucmFpbFhXaWR0aCA9IGkuY29udGFpbmVyV2lkdGggLSBpLnJhaWxYTWFyZ2luV2lkdGg7XHJcbiAgICBpLnJhaWxYUmF0aW8gPSBpLmNvbnRhaW5lcldpZHRoIC8gaS5yYWlsWFdpZHRoO1xyXG4gICAgaS5zY3JvbGxiYXJYV2lkdGggPSBnZXRUaHVtYlNpemUoaSwgXy50b0ludChpLnJhaWxYV2lkdGggKiBpLmNvbnRhaW5lcldpZHRoIC8gaS5jb250ZW50V2lkdGgpKTtcclxuICAgIGkuc2Nyb2xsYmFyWExlZnQgPSBfLnRvSW50KChpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCArIGVsZW1lbnQuc2Nyb2xsTGVmdCkgKiAoaS5yYWlsWFdpZHRoIC0gaS5zY3JvbGxiYXJYV2lkdGgpIC8gKGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aCkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpLnNjcm9sbGJhclhBY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmICghaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFkgJiYgaS5jb250YWluZXJIZWlnaHQgKyBpLnNldHRpbmdzLnNjcm9sbFlNYXJnaW5PZmZzZXQgPCBpLmNvbnRlbnRIZWlnaHQpIHtcclxuICAgIGkuc2Nyb2xsYmFyWUFjdGl2ZSA9IHRydWU7XHJcbiAgICBpLnJhaWxZSGVpZ2h0ID0gaS5jb250YWluZXJIZWlnaHQgLSBpLnJhaWxZTWFyZ2luSGVpZ2h0O1xyXG4gICAgaS5yYWlsWVJhdGlvID0gaS5jb250YWluZXJIZWlnaHQgLyBpLnJhaWxZSGVpZ2h0O1xyXG4gICAgaS5zY3JvbGxiYXJZSGVpZ2h0ID0gZ2V0VGh1bWJTaXplKGksIF8udG9JbnQoaS5yYWlsWUhlaWdodCAqIGkuY29udGFpbmVySGVpZ2h0IC8gaS5jb250ZW50SGVpZ2h0KSk7XHJcbiAgICBpLnNjcm9sbGJhcllUb3AgPSBfLnRvSW50KGVsZW1lbnQuc2Nyb2xsVG9wICogKGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQpIC8gKGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0KSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGkuc2Nyb2xsYmFyWUFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGkuc2Nyb2xsYmFyWExlZnQgPj0gaS5yYWlsWFdpZHRoIC0gaS5zY3JvbGxiYXJYV2lkdGgpIHtcclxuICAgIGkuc2Nyb2xsYmFyWExlZnQgPSBpLnJhaWxYV2lkdGggLSBpLnNjcm9sbGJhclhXaWR0aDtcclxuICB9XHJcbiAgaWYgKGkuc2Nyb2xsYmFyWVRvcCA+PSBpLnJhaWxZSGVpZ2h0IC0gaS5zY3JvbGxiYXJZSGVpZ2h0KSB7XHJcbiAgICBpLnNjcm9sbGJhcllUb3AgPSBpLnJhaWxZSGVpZ2h0IC0gaS5zY3JvbGxiYXJZSGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ3NzKGVsZW1lbnQsIGkpO1xyXG5cclxuICBpZiAoaS5zY3JvbGxiYXJYQWN0aXZlKSB7XHJcbiAgICBjbHMuYWRkKGVsZW1lbnQsICdwcy1hY3RpdmUteCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjbHMucmVtb3ZlKGVsZW1lbnQsICdwcy1hY3RpdmUteCcpO1xyXG4gICAgaS5zY3JvbGxiYXJYV2lkdGggPSAwO1xyXG4gICAgaS5zY3JvbGxiYXJYTGVmdCA9IDA7XHJcbiAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ2xlZnQnLCAwKTtcclxuICB9XHJcbiAgaWYgKGkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xyXG4gICAgY2xzLmFkZChlbGVtZW50LCAncHMtYWN0aXZlLXknKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2xzLnJlbW92ZShlbGVtZW50LCAncHMtYWN0aXZlLXknKTtcclxuICAgIGkuc2Nyb2xsYmFyWUhlaWdodCA9IDA7XHJcbiAgICBpLnNjcm9sbGJhcllUb3AgPSAwO1xyXG4gICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICd0b3AnLCAwKTtcclxuICB9XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBpbnN0YW5jZXMgPSByZXF1aXJlKCcuL2luc3RhbmNlcycpO1xyXG5cclxudmFyIGxhc3RUb3A7XHJcbnZhciBsYXN0TGVmdDtcclxuXHJcbnZhciBjcmVhdGVET01FdmVudCA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcclxuICBldmVudC5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgcmV0dXJuIGV2ZW50O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCwgYXhpcywgdmFsdWUpIHtcclxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB0aHJvdyAnWW91IG11c3QgcHJvdmlkZSBhbiBlbGVtZW50IHRvIHRoZSB1cGRhdGUtc2Nyb2xsIGZ1bmN0aW9uJztcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgYXhpcyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHRocm93ICdZb3UgbXVzdCBwcm92aWRlIGFuIGF4aXMgdG8gdGhlIHVwZGF0ZS1zY3JvbGwgZnVuY3Rpb24nO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHRocm93ICdZb3UgbXVzdCBwcm92aWRlIGEgdmFsdWUgdG8gdGhlIHVwZGF0ZS1zY3JvbGwgZnVuY3Rpb24nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGF4aXMgPT09ICd0b3AnICYmIHZhbHVlIDw9IDApIHtcclxuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdmFsdWUgPSAwOyAvLyBkb24ndCBhbGxvdyBuZWdhdGl2ZSBzY3JvbGxcclxuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVET01FdmVudCgncHMteS1yZWFjaC1zdGFydCcpKTtcclxuICB9XHJcblxyXG4gIGlmIChheGlzID09PSAnbGVmdCcgJiYgdmFsdWUgPD0gMCkge1xyXG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gdmFsdWUgPSAwOyAvLyBkb24ndCBhbGxvdyBuZWdhdGl2ZSBzY3JvbGxcclxuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVET01FdmVudCgncHMteC1yZWFjaC1zdGFydCcpKTtcclxuICB9XHJcblxyXG4gIHZhciBpID0gaW5zdGFuY2VzLmdldChlbGVtZW50KTtcclxuXHJcbiAgaWYgKGF4aXMgPT09ICd0b3AnICYmIHZhbHVlID49IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0KSB7XHJcbiAgICAvLyBkb24ndCBhbGxvdyBzY3JvbGwgcGFzdCBjb250YWluZXJcclxuICAgIHZhbHVlID0gaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQ7XHJcbiAgICBpZiAodmFsdWUgLSBlbGVtZW50LnNjcm9sbFRvcCA8PSAxKSB7XHJcbiAgICAgIC8vIG1pdGlnYXRlcyByb3VuZGluZyBlcnJvcnMgb24gbm9uLXN1YnBpeGVsIHNjcm9sbCB2YWx1ZXNcclxuICAgICAgdmFsdWUgPSBlbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRE9NRXZlbnQoJ3BzLXktcmVhY2gtZW5kJykpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGF4aXMgPT09ICdsZWZ0JyAmJiB2YWx1ZSA+PSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGgpIHtcclxuICAgIC8vIGRvbid0IGFsbG93IHNjcm9sbCBwYXN0IGNvbnRhaW5lclxyXG4gICAgdmFsdWUgPSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGg7XHJcbiAgICBpZiAodmFsdWUgLSBlbGVtZW50LnNjcm9sbExlZnQgPD0gMSkge1xyXG4gICAgICAvLyBtaXRpZ2F0ZXMgcm91bmRpbmcgZXJyb3JzIG9uIG5vbi1zdWJwaXhlbCBzY3JvbGwgdmFsdWVzXHJcbiAgICAgIHZhbHVlID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRE9NRXZlbnQoJ3BzLXgtcmVhY2gtZW5kJykpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFsYXN0VG9wKSB7XHJcbiAgICBsYXN0VG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgfVxyXG5cclxuICBpZiAoIWxhc3RMZWZ0KSB7XHJcbiAgICBsYXN0TGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICB9XHJcblxyXG4gIGlmIChheGlzID09PSAndG9wJyAmJiB2YWx1ZSA8IGxhc3RUb3ApIHtcclxuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVET01FdmVudCgncHMtc2Nyb2xsLXVwJykpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGF4aXMgPT09ICd0b3AnICYmIHZhbHVlID4gbGFzdFRvcCkge1xyXG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZURPTUV2ZW50KCdwcy1zY3JvbGwtZG93bicpKTtcclxuICB9XHJcblxyXG4gIGlmIChheGlzID09PSAnbGVmdCcgJiYgdmFsdWUgPCBsYXN0TGVmdCkge1xyXG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZURPTUV2ZW50KCdwcy1zY3JvbGwtbGVmdCcpKTtcclxuICB9XHJcblxyXG4gIGlmIChheGlzID09PSAnbGVmdCcgJiYgdmFsdWUgPiBsYXN0TGVmdCkge1xyXG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZURPTUV2ZW50KCdwcy1zY3JvbGwtcmlnaHQnKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoYXhpcyA9PT0gJ3RvcCcpIHtcclxuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gbGFzdFRvcCA9IHZhbHVlO1xyXG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZURPTUV2ZW50KCdwcy1zY3JvbGwteScpKTtcclxuICB9XHJcblxyXG4gIGlmIChheGlzID09PSAnbGVmdCcpIHtcclxuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IGxhc3RMZWZ0ID0gdmFsdWU7XHJcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRE9NRXZlbnQoJ3BzLXNjcm9sbC14JykpO1xyXG4gIH1cclxuXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBpbnN0YW5jZXMgPSByZXF1aXJlKCcuLi9pbnN0YW5jZXMnKTtcclxudmFyIHVwZGF0ZUdlb21ldHJ5ID0gcmVxdWlyZSgnLi4vdXBkYXRlLWdlb21ldHJ5Jyk7XHJcbnZhciB1cGRhdGVTY3JvbGwgPSByZXF1aXJlKCcuLi91cGRhdGUtc2Nyb2xsJyk7XHJcblxyXG5mdW5jdGlvbiBiaW5kQ2xpY2tSYWlsSGFuZGxlcihlbGVtZW50LCBpKSB7XHJcbiAgZnVuY3Rpb24gcGFnZU9mZnNldChlbCkge1xyXG4gICAgcmV0dXJuIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIH1cclxuICB2YXIgc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfTtcclxuXHJcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWSwgJ2NsaWNrJywgc3RvcFByb3BhZ2F0aW9uKTtcclxuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJZUmFpbCwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBwb3NpdGlvblRvcCA9IGUucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQgLSBwYWdlT2Zmc2V0KGkuc2Nyb2xsYmFyWVJhaWwpLnRvcDtcclxuICAgIHZhciBkaXJlY3Rpb24gPSBwb3NpdGlvblRvcCA+IGkuc2Nyb2xsYmFyWVRvcCA/IDEgOiAtMTtcclxuXHJcbiAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ3RvcCcsIGVsZW1lbnQuc2Nyb2xsVG9wICsgZGlyZWN0aW9uICogaS5jb250YWluZXJIZWlnaHQpO1xyXG4gICAgdXBkYXRlR2VvbWV0cnkoZWxlbWVudCk7XHJcblxyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxuXHJcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWCwgJ2NsaWNrJywgc3RvcFByb3BhZ2F0aW9uKTtcclxuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJYUmFpbCwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBwb3NpdGlvbkxlZnQgPSBlLnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0IC0gcGFnZU9mZnNldChpLnNjcm9sbGJhclhSYWlsKS5sZWZ0O1xyXG4gICAgdmFyIGRpcmVjdGlvbiA9IHBvc2l0aW9uTGVmdCA+IGkuc2Nyb2xsYmFyWExlZnQgPyAxIDogLTE7XHJcblxyXG4gICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICdsZWZ0JywgZWxlbWVudC5zY3JvbGxMZWZ0ICsgZGlyZWN0aW9uICogaS5jb250YWluZXJXaWR0aCk7XHJcbiAgICB1cGRhdGVHZW9tZXRyeShlbGVtZW50KTtcclxuXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgdmFyIGkgPSBpbnN0YW5jZXMuZ2V0KGVsZW1lbnQpO1xyXG4gIGJpbmRDbGlja1JhaWxIYW5kbGVyKGVsZW1lbnQsIGkpO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgXyA9IHJlcXVpcmUoJy4uLy4uL2xpYi9oZWxwZXInKTtcclxudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL2xpYi9kb20nKTtcclxudmFyIGluc3RhbmNlcyA9IHJlcXVpcmUoJy4uL2luc3RhbmNlcycpO1xyXG52YXIgdXBkYXRlR2VvbWV0cnkgPSByZXF1aXJlKCcuLi91cGRhdGUtZ2VvbWV0cnknKTtcclxudmFyIHVwZGF0ZVNjcm9sbCA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1zY3JvbGwnKTtcclxuXHJcbmZ1bmN0aW9uIGJpbmRNb3VzZVNjcm9sbFhIYW5kbGVyKGVsZW1lbnQsIGkpIHtcclxuICB2YXIgY3VycmVudExlZnQgPSBudWxsO1xyXG4gIHZhciBjdXJyZW50UGFnZVggPSBudWxsO1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxMZWZ0KGRlbHRhWCkge1xyXG4gICAgdmFyIG5ld0xlZnQgPSBjdXJyZW50TGVmdCArIChkZWx0YVggKiBpLnJhaWxYUmF0aW8pO1xyXG4gICAgdmFyIG1heExlZnQgPSBNYXRoLm1heCgwLCBpLnNjcm9sbGJhclhSYWlsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpICsgKGkucmFpbFhSYXRpbyAqIChpLnJhaWxYV2lkdGggLSBpLnNjcm9sbGJhclhXaWR0aCkpO1xyXG5cclxuICAgIGlmIChuZXdMZWZ0IDwgMCkge1xyXG4gICAgICBpLnNjcm9sbGJhclhMZWZ0ID0gMDtcclxuICAgIH0gZWxzZSBpZiAobmV3TGVmdCA+IG1heExlZnQpIHtcclxuICAgICAgaS5zY3JvbGxiYXJYTGVmdCA9IG1heExlZnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpLnNjcm9sbGJhclhMZWZ0ID0gbmV3TGVmdDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2Nyb2xsTGVmdCA9IF8udG9JbnQoaS5zY3JvbGxiYXJYTGVmdCAqIChpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGgpIC8gKGkuY29udGFpbmVyV2lkdGggLSAoaS5yYWlsWFJhdGlvICogaS5zY3JvbGxiYXJYV2lkdGgpKSkgLSBpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudDtcclxuICAgIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAnbGVmdCcsIHNjcm9sbExlZnQpO1xyXG4gIH1cclxuXHJcbiAgdmFyIG1vdXNlTW92ZUhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgdXBkYXRlU2Nyb2xsTGVmdChlLnBhZ2VYIC0gY3VycmVudFBhZ2VYKTtcclxuICAgIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICB2YXIgbW91c2VVcEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBfLnN0b3BTY3JvbGxpbmcoZWxlbWVudCwgJ3gnKTtcclxuICAgIGkuZXZlbnQudW5iaW5kKGkub3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xyXG4gIH07XHJcblxyXG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclgsICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY3VycmVudFBhZ2VYID0gZS5wYWdlWDtcclxuICAgIGN1cnJlbnRMZWZ0ID0gXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWCwgJ2xlZnQnKSkgKiBpLnJhaWxYUmF0aW87XHJcbiAgICBfLnN0YXJ0U2Nyb2xsaW5nKGVsZW1lbnQsICd4Jyk7XHJcblxyXG4gICAgaS5ldmVudC5iaW5kKGkub3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xyXG4gICAgaS5ldmVudC5vbmNlKGkub3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XHJcblxyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmluZE1vdXNlU2Nyb2xsWUhhbmRsZXIoZWxlbWVudCwgaSkge1xyXG4gIHZhciBjdXJyZW50VG9wID0gbnVsbDtcclxuICB2YXIgY3VycmVudFBhZ2VZID0gbnVsbDtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsVG9wKGRlbHRhWSkge1xyXG4gICAgdmFyIG5ld1RvcCA9IGN1cnJlbnRUb3AgKyAoZGVsdGFZICogaS5yYWlsWVJhdGlvKTtcclxuICAgIHZhciBtYXhUb3AgPSBNYXRoLm1heCgwLCBpLnNjcm9sbGJhcllSYWlsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCkgKyAoaS5yYWlsWVJhdGlvICogKGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQpKTtcclxuXHJcbiAgICBpZiAobmV3VG9wIDwgMCkge1xyXG4gICAgICBpLnNjcm9sbGJhcllUb3AgPSAwO1xyXG4gICAgfSBlbHNlIGlmIChuZXdUb3AgPiBtYXhUb3ApIHtcclxuICAgICAgaS5zY3JvbGxiYXJZVG9wID0gbWF4VG9wO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaS5zY3JvbGxiYXJZVG9wID0gbmV3VG9wO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzY3JvbGxUb3AgPSBfLnRvSW50KGkuc2Nyb2xsYmFyWVRvcCAqIChpLmNvbnRlbnRIZWlnaHQgLSBpLmNvbnRhaW5lckhlaWdodCkgLyAoaS5jb250YWluZXJIZWlnaHQgLSAoaS5yYWlsWVJhdGlvICogaS5zY3JvbGxiYXJZSGVpZ2h0KSkpO1xyXG4gICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICd0b3AnLCBzY3JvbGxUb3ApO1xyXG4gIH1cclxuXHJcbiAgdmFyIG1vdXNlTW92ZUhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgdXBkYXRlU2Nyb2xsVG9wKGUucGFnZVkgLSBjdXJyZW50UGFnZVkpO1xyXG4gICAgdXBkYXRlR2VvbWV0cnkoZWxlbWVudCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIHZhciBtb3VzZVVwSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIF8uc3RvcFNjcm9sbGluZyhlbGVtZW50LCAneScpO1xyXG4gICAgaS5ldmVudC51bmJpbmQoaS5vd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XHJcbiAgfTtcclxuXHJcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWSwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjdXJyZW50UGFnZVkgPSBlLnBhZ2VZO1xyXG4gICAgY3VycmVudFRvcCA9IF8udG9JbnQoZG9tLmNzcyhpLnNjcm9sbGJhclksICd0b3AnKSkgKiBpLnJhaWxZUmF0aW87XHJcbiAgICBfLnN0YXJ0U2Nyb2xsaW5nKGVsZW1lbnQsICd5Jyk7XHJcblxyXG4gICAgaS5ldmVudC5iaW5kKGkub3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xyXG4gICAgaS5ldmVudC5vbmNlKGkub3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XHJcblxyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIHZhciBpID0gaW5zdGFuY2VzLmdldChlbGVtZW50KTtcclxuICBiaW5kTW91c2VTY3JvbGxYSGFuZGxlcihlbGVtZW50LCBpKTtcclxuICBiaW5kTW91c2VTY3JvbGxZSGFuZGxlcihlbGVtZW50LCBpKTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIF8gPSByZXF1aXJlKCcuLi8uLi9saWIvaGVscGVyJyk7XHJcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi9saWIvZG9tJyk7XHJcbnZhciBpbnN0YW5jZXMgPSByZXF1aXJlKCcuLi9pbnN0YW5jZXMnKTtcclxudmFyIHVwZGF0ZUdlb21ldHJ5ID0gcmVxdWlyZSgnLi4vdXBkYXRlLWdlb21ldHJ5Jyk7XHJcbnZhciB1cGRhdGVTY3JvbGwgPSByZXF1aXJlKCcuLi91cGRhdGUtc2Nyb2xsJyk7XHJcblxyXG5mdW5jdGlvbiBiaW5kS2V5Ym9hcmRIYW5kbGVyKGVsZW1lbnQsIGkpIHtcclxuICB2YXIgaG92ZXJlZCA9IGZhbHNlO1xyXG4gIGkuZXZlbnQuYmluZChlbGVtZW50LCAnbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgIGhvdmVyZWQgPSB0cnVlO1xyXG4gIH0pO1xyXG4gIGkuZXZlbnQuYmluZChlbGVtZW50LCAnbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIGhvdmVyZWQgPSBmYWxzZTtcclxuICB9KTtcclxuXHJcbiAgdmFyIHNob3VsZFByZXZlbnQgPSBmYWxzZTtcclxuICBmdW5jdGlvbiBzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSkge1xyXG4gICAgdmFyIHNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgaWYgKGRlbHRhWCA9PT0gMCkge1xyXG4gICAgICBpZiAoIWkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoKHNjcm9sbFRvcCA9PT0gMCAmJiBkZWx0YVkgPiAwKSB8fCAoc2Nyb2xsVG9wID49IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0ICYmIGRlbHRhWSA8IDApKSB7XHJcbiAgICAgICAgcmV0dXJuICFpLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb247XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgIGlmIChkZWx0YVkgPT09IDApIHtcclxuICAgICAgaWYgKCFpLnNjcm9sbGJhclhBY3RpdmUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKChzY3JvbGxMZWZ0ID09PSAwICYmIGRlbHRhWCA8IDApIHx8IChzY3JvbGxMZWZ0ID49IGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aCAmJiBkZWx0YVggPiAwKSkge1xyXG4gICAgICAgIHJldHVybiAhaS5zZXR0aW5ncy53aGVlbFByb3BhZ2F0aW9uO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGkuZXZlbnQuYmluZChpLm93bmVyRG9jdW1lbnQsICdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICgoZS5pc0RlZmF1bHRQcmV2ZW50ZWQgJiYgZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgfHwgZS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZm9jdXNlZCA9IGRvbS5tYXRjaGVzKGkuc2Nyb2xsYmFyWCwgJzpmb2N1cycpIHx8XHJcbiAgICAgICAgICAgICAgICAgIGRvbS5tYXRjaGVzKGkuc2Nyb2xsYmFyWSwgJzpmb2N1cycpO1xyXG5cclxuICAgIGlmICghaG92ZXJlZCAmJiAhZm9jdXNlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA6IGkub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gJ0lGUkFNRScpIHtcclxuICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5jb250ZW50RG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBnbyBkZWVwZXIgaWYgZWxlbWVudCBpcyBhIHdlYmNvbXBvbmVudFxyXG4gICAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QpIHtcclxuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKF8uaXNFZGl0YWJsZShhY3RpdmVFbGVtZW50KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBkZWx0YVggPSAwO1xyXG4gICAgdmFyIGRlbHRhWSA9IDA7XHJcblxyXG4gICAgc3dpdGNoIChlLndoaWNoKSB7XHJcbiAgICBjYXNlIDM3OiAvLyBsZWZ0XHJcbiAgICAgIGlmIChlLm1ldGFLZXkpIHtcclxuICAgICAgICBkZWx0YVggPSAtaS5jb250ZW50V2lkdGg7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5hbHRLZXkpIHtcclxuICAgICAgICBkZWx0YVggPSAtaS5jb250YWluZXJXaWR0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWx0YVggPSAtMzA7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDM4OiAvLyB1cFxyXG4gICAgICBpZiAoZS5tZXRhS2V5KSB7XHJcbiAgICAgICAgZGVsdGFZID0gaS5jb250ZW50SGVpZ2h0O1xyXG4gICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XHJcbiAgICAgICAgZGVsdGFZID0gaS5jb250YWluZXJIZWlnaHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsdGFZID0gMzA7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDM5OiAvLyByaWdodFxyXG4gICAgICBpZiAoZS5tZXRhS2V5KSB7XHJcbiAgICAgICAgZGVsdGFYID0gaS5jb250ZW50V2lkdGg7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5hbHRLZXkpIHtcclxuICAgICAgICBkZWx0YVggPSBpLmNvbnRhaW5lcldpZHRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbHRhWCA9IDMwO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA0MDogLy8gZG93blxyXG4gICAgICBpZiAoZS5tZXRhS2V5KSB7XHJcbiAgICAgICAgZGVsdGFZID0gLWkuY29udGVudEhlaWdodDtcclxuICAgICAgfSBlbHNlIGlmIChlLmFsdEtleSkge1xyXG4gICAgICAgIGRlbHRhWSA9IC1pLmNvbnRhaW5lckhlaWdodDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWx0YVkgPSAtMzA7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDMzOiAvLyBwYWdlIHVwXHJcbiAgICAgIGRlbHRhWSA9IDkwO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzI6IC8vIHNwYWNlIGJhclxyXG4gICAgICBpZiAoZS5zaGlmdEtleSkge1xyXG4gICAgICAgIGRlbHRhWSA9IDkwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbHRhWSA9IC05MDtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzQ6IC8vIHBhZ2UgZG93blxyXG4gICAgICBkZWx0YVkgPSAtOTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAzNTogLy8gZW5kXHJcbiAgICAgIGlmIChlLmN0cmxLZXkpIHtcclxuICAgICAgICBkZWx0YVkgPSAtaS5jb250ZW50SGVpZ2h0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbHRhWSA9IC1pLmNvbnRhaW5lckhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzY6IC8vIGhvbWVcclxuICAgICAgaWYgKGUuY3RybEtleSkge1xyXG4gICAgICAgIGRlbHRhWSA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbHRhWSA9IGkuY29udGFpbmVySGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAndG9wJywgZWxlbWVudC5zY3JvbGxUb3AgLSBkZWx0YVkpO1xyXG4gICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICdsZWZ0JywgZWxlbWVudC5zY3JvbGxMZWZ0ICsgZGVsdGFYKTtcclxuICAgIHVwZGF0ZUdlb21ldHJ5KGVsZW1lbnQpO1xyXG5cclxuICAgIHNob3VsZFByZXZlbnQgPSBzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSk7XHJcbiAgICBpZiAoc2hvdWxkUHJldmVudCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICB2YXIgaSA9IGluc3RhbmNlcy5nZXQoZWxlbWVudCk7XHJcbiAgYmluZEtleWJvYXJkSGFuZGxlcihlbGVtZW50LCBpKTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGluc3RhbmNlcyA9IHJlcXVpcmUoJy4uL2luc3RhbmNlcycpO1xyXG52YXIgdXBkYXRlR2VvbWV0cnkgPSByZXF1aXJlKCcuLi91cGRhdGUtZ2VvbWV0cnknKTtcclxudmFyIHVwZGF0ZVNjcm9sbCA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1zY3JvbGwnKTtcclxuXHJcbmZ1bmN0aW9uIGJpbmRNb3VzZVdoZWVsSGFuZGxlcihlbGVtZW50LCBpKSB7XHJcbiAgdmFyIHNob3VsZFByZXZlbnQgPSBmYWxzZTtcclxuXHJcbiAgZnVuY3Rpb24gc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpIHtcclxuICAgIHZhciBzY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIGlmIChkZWx0YVggPT09IDApIHtcclxuICAgICAgaWYgKCFpLnNjcm9sbGJhcllBY3RpdmUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKChzY3JvbGxUb3AgPT09IDAgJiYgZGVsdGFZID4gMCkgfHwgKHNjcm9sbFRvcCA+PSBpLmNvbnRlbnRIZWlnaHQgLSBpLmNvbnRhaW5lckhlaWdodCAmJiBkZWx0YVkgPCAwKSkge1xyXG4gICAgICAgIHJldHVybiAhaS5zZXR0aW5ncy53aGVlbFByb3BhZ2F0aW9uO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICBpZiAoZGVsdGFZID09PSAwKSB7XHJcbiAgICAgIGlmICghaS5zY3JvbGxiYXJYQWN0aXZlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgoc2Nyb2xsTGVmdCA9PT0gMCAmJiBkZWx0YVggPCAwKSB8fCAoc2Nyb2xsTGVmdCA+PSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGggJiYgZGVsdGFYID4gMCkpIHtcclxuICAgICAgICByZXR1cm4gIWkuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXREZWx0YUZyb21FdmVudChlKSB7XHJcbiAgICB2YXIgZGVsdGFYID0gZS5kZWx0YVg7XHJcbiAgICB2YXIgZGVsdGFZID0gLTEgKiBlLmRlbHRhWTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGRlbHRhWCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2YgZGVsdGFZID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIC8vIE9TIFggU2FmYXJpXHJcbiAgICAgIGRlbHRhWCA9IC0xICogZS53aGVlbERlbHRhWCAvIDY7XHJcbiAgICAgIGRlbHRhWSA9IGUud2hlZWxEZWx0YVkgLyA2O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLmRlbHRhTW9kZSAmJiBlLmRlbHRhTW9kZSA9PT0gMSkge1xyXG4gICAgICAvLyBGaXJlZm94IGluIGRlbHRhTW9kZSAxOiBMaW5lIHNjcm9sbGluZ1xyXG4gICAgICBkZWx0YVggKj0gMTA7XHJcbiAgICAgIGRlbHRhWSAqPSAxMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGVsdGFYICE9PSBkZWx0YVggJiYgZGVsdGFZICE9PSBkZWx0YVkvKiBOYU4gY2hlY2tzICovKSB7XHJcbiAgICAgIC8vIElFIGluIHNvbWUgbW91c2UgZHJpdmVyc1xyXG4gICAgICBkZWx0YVggPSAwO1xyXG4gICAgICBkZWx0YVkgPSBlLndoZWVsRGVsdGE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUuc2hpZnRLZXkpIHtcclxuICAgICAgLy8gcmV2ZXJzZSBheGlzIHdpdGggc2hpZnQga2V5XHJcbiAgICAgIHJldHVybiBbLWRlbHRhWSwgLWRlbHRhWF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW2RlbHRhWCwgZGVsdGFZXTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3VsZEJlQ29uc3VtZWRCeUNoaWxkKGRlbHRhWCwgZGVsdGFZKSB7XHJcbiAgICB2YXIgY2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhOmhvdmVyLCBzZWxlY3RbbXVsdGlwbGVdOmhvdmVyLCAucHMtY2hpbGQ6aG92ZXInKTtcclxuICAgIGlmIChjaGlsZCkge1xyXG4gICAgICBpZiAoY2hpbGQuY2xhc3NOYW1lLm1hdGNoKC9wcy1tdXN0LXByb3BhZ2F0ZS8pKSB7XHJcbiAgICAgICAgLy8gZm9yY2UgY29uc3VtcHRpb24gYnkgY2hpbGRcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNoaWxkKS5vdmVyZmxvdy5tYXRjaCgvKHNjcm9sbHxhdXRvKS8pKSB7XHJcbiAgICAgICAgLy8gaWYgbm90IHNjcm9sbGFibGVcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgdmFyIG1heFNjcm9sbFRvcCA9IGNoaWxkLnNjcm9sbEhlaWdodCAtIGNoaWxkLmNsaWVudEhlaWdodDtcclxuICAgICAgaWYgKG1heFNjcm9sbFRvcCA+IDApIHtcclxuICAgICAgICBpZiAoIShjaGlsZC5zY3JvbGxUb3AgPT09IDAgJiYgZGVsdGFZID4gMCkgJiYgIShjaGlsZC5zY3JvbGxUb3AgPT09IG1heFNjcm9sbFRvcCAmJiBkZWx0YVkgPCAwKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHZhciBtYXhTY3JvbGxMZWZ0ID0gY2hpbGQuc2Nyb2xsTGVmdCAtIGNoaWxkLmNsaWVudFdpZHRoO1xyXG4gICAgICBpZiAobWF4U2Nyb2xsTGVmdCA+IDApIHtcclxuICAgICAgICBpZiAoIShjaGlsZC5zY3JvbGxMZWZ0ID09PSAwICYmIGRlbHRhWCA8IDApICYmICEoY2hpbGQuc2Nyb2xsTGVmdCA9PT0gbWF4U2Nyb2xsTGVmdCAmJiBkZWx0YVggPiAwKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3VzZXdoZWVsSGFuZGxlcihlKSB7XHJcbiAgICB2YXIgZGVsdGEgPSBnZXREZWx0YUZyb21FdmVudChlKTtcclxuXHJcbiAgICB2YXIgZGVsdGFYID0gZGVsdGFbMF07XHJcbiAgICB2YXIgZGVsdGFZID0gZGVsdGFbMV07XHJcblxyXG4gICAgaWYgKHNob3VsZEJlQ29uc3VtZWRCeUNoaWxkKGRlbHRhWCwgZGVsdGFZKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkUHJldmVudCA9IGZhbHNlO1xyXG4gICAgaWYgKCFpLnNldHRpbmdzLnVzZUJvdGhXaGVlbEF4ZXMpIHtcclxuICAgICAgLy8gZGVsdGFYIHdpbGwgb25seSBiZSB1c2VkIGZvciBob3Jpem9udGFsIHNjcm9sbGluZyBhbmQgZGVsdGFZIHdpbGxcclxuICAgICAgLy8gb25seSBiZSB1c2VkIGZvciB2ZXJ0aWNhbCBzY3JvbGxpbmcgLSB0aGlzIGlzIHRoZSBkZWZhdWx0XHJcbiAgICAgIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAndG9wJywgZWxlbWVudC5zY3JvbGxUb3AgLSAoZGVsdGFZICogaS5zZXR0aW5ncy53aGVlbFNwZWVkKSk7XHJcbiAgICAgIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAnbGVmdCcsIGVsZW1lbnQuc2Nyb2xsTGVmdCArIChkZWx0YVggKiBpLnNldHRpbmdzLndoZWVsU3BlZWQpKTtcclxuICAgIH0gZWxzZSBpZiAoaS5zY3JvbGxiYXJZQWN0aXZlICYmICFpLnNjcm9sbGJhclhBY3RpdmUpIHtcclxuICAgICAgLy8gb25seSB2ZXJ0aWNhbCBzY3JvbGxiYXIgaXMgYWN0aXZlIGFuZCB1c2VCb3RoV2hlZWxBeGVzIG9wdGlvbiBpc1xyXG4gICAgICAvLyBhY3RpdmUsIHNvIGxldCdzIHNjcm9sbCB2ZXJ0aWNhbCBiYXIgdXNpbmcgYm90aCBtb3VzZSB3aGVlbCBheGVzXHJcbiAgICAgIGlmIChkZWx0YVkpIHtcclxuICAgICAgICB1cGRhdGVTY3JvbGwoZWxlbWVudCwgJ3RvcCcsIGVsZW1lbnQuc2Nyb2xsVG9wIC0gKGRlbHRhWSAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAndG9wJywgZWxlbWVudC5zY3JvbGxUb3AgKyAoZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkKSk7XHJcbiAgICAgIH1cclxuICAgICAgc2hvdWxkUHJldmVudCA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKGkuc2Nyb2xsYmFyWEFjdGl2ZSAmJiAhaS5zY3JvbGxiYXJZQWN0aXZlKSB7XHJcbiAgICAgIC8vIHVzZUJvdGhXaGVlbEF4ZXMgYW5kIG9ubHkgaG9yaXpvbnRhbCBiYXIgaXMgYWN0aXZlLCBzbyB1c2UgYm90aFxyXG4gICAgICAvLyB3aGVlbCBheGVzIGZvciBob3Jpem9udGFsIGJhclxyXG4gICAgICBpZiAoZGVsdGFYKSB7XHJcbiAgICAgICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICdsZWZ0JywgZWxlbWVudC5zY3JvbGxMZWZ0ICsgKGRlbHRhWCAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAnbGVmdCcsIGVsZW1lbnQuc2Nyb2xsTGVmdCAtIChkZWx0YVkgKiBpLnNldHRpbmdzLndoZWVsU3BlZWQpKTtcclxuICAgICAgfVxyXG4gICAgICBzaG91bGRQcmV2ZW50ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVHZW9tZXRyeShlbGVtZW50KTtcclxuXHJcbiAgICBzaG91bGRQcmV2ZW50ID0gKHNob3VsZFByZXZlbnQgfHwgc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpKTtcclxuICAgIGlmIChzaG91bGRQcmV2ZW50KSB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93Lm9ud2hlZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnd2hlZWwnLCBtb3VzZXdoZWVsSGFuZGxlcik7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93Lm9ubW91c2V3aGVlbCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdtb3VzZXdoZWVsJywgbW91c2V3aGVlbEhhbmRsZXIpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIHZhciBpID0gaW5zdGFuY2VzLmdldChlbGVtZW50KTtcclxuICBiaW5kTW91c2VXaGVlbEhhbmRsZXIoZWxlbWVudCwgaSk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBfID0gcmVxdWlyZSgnLi4vLi4vbGliL2hlbHBlcicpO1xyXG52YXIgaW5zdGFuY2VzID0gcmVxdWlyZSgnLi4vaW5zdGFuY2VzJyk7XHJcbnZhciB1cGRhdGVHZW9tZXRyeSA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1nZW9tZXRyeScpO1xyXG52YXIgdXBkYXRlU2Nyb2xsID0gcmVxdWlyZSgnLi4vdXBkYXRlLXNjcm9sbCcpO1xyXG5cclxuZnVuY3Rpb24gYmluZFRvdWNoSGFuZGxlcihlbGVtZW50LCBpLCBzdXBwb3J0c1RvdWNoLCBzdXBwb3J0c0llUG9pbnRlcikge1xyXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKSB7XHJcbiAgICB2YXIgc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICB2YXIgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgIHZhciBtYWduaXR1ZGVYID0gTWF0aC5hYnMoZGVsdGFYKTtcclxuICAgIHZhciBtYWduaXR1ZGVZID0gTWF0aC5hYnMoZGVsdGFZKTtcclxuXHJcbiAgICBpZiAobWFnbml0dWRlWSA+IG1hZ25pdHVkZVgpIHtcclxuICAgICAgLy8gdXNlciBpcyBwZXJoYXBzIHRyeWluZyB0byBzd2lwZSB1cC9kb3duIHRoZSBwYWdlXHJcblxyXG4gICAgICBpZiAoKChkZWx0YVkgPCAwKSAmJiAoc2Nyb2xsVG9wID09PSBpLmNvbnRlbnRIZWlnaHQgLSBpLmNvbnRhaW5lckhlaWdodCkpIHx8XHJcbiAgICAgICAgICAoKGRlbHRhWSA+IDApICYmIChzY3JvbGxUb3AgPT09IDApKSkge1xyXG4gICAgICAgIHJldHVybiAhaS5zZXR0aW5ncy5zd2lwZVByb3BhZ2F0aW9uO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG1hZ25pdHVkZVggPiBtYWduaXR1ZGVZKSB7XHJcbiAgICAgIC8vIHVzZXIgaXMgcGVyaGFwcyB0cnlpbmcgdG8gc3dpcGUgbGVmdC9yaWdodCBhY3Jvc3MgdGhlIHBhZ2VcclxuXHJcbiAgICAgIGlmICgoKGRlbHRhWCA8IDApICYmIChzY3JvbGxMZWZ0ID09PSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGgpKSB8fFxyXG4gICAgICAgICAgKChkZWx0YVggPiAwKSAmJiAoc2Nyb2xsTGVmdCA9PT0gMCkpKSB7XHJcbiAgICAgICAgcmV0dXJuICFpLnNldHRpbmdzLnN3aXBlUHJvcGFnYXRpb247XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFwcGx5VG91Y2hNb3ZlKGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSkge1xyXG4gICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICd0b3AnLCBlbGVtZW50LnNjcm9sbFRvcCAtIGRpZmZlcmVuY2VZKTtcclxuICAgIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAnbGVmdCcsIGVsZW1lbnQuc2Nyb2xsTGVmdCAtIGRpZmZlcmVuY2VYKTtcclxuXHJcbiAgICB1cGRhdGVHZW9tZXRyeShlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHZhciBzdGFydE9mZnNldCA9IHt9O1xyXG4gIHZhciBzdGFydFRpbWUgPSAwO1xyXG4gIHZhciBzcGVlZCA9IHt9O1xyXG4gIHZhciBlYXNpbmdMb29wID0gbnVsbDtcclxuICB2YXIgaW5HbG9iYWxUb3VjaCA9IGZhbHNlO1xyXG4gIHZhciBpbkxvY2FsVG91Y2ggPSBmYWxzZTtcclxuXHJcbiAgZnVuY3Rpb24gZ2xvYmFsVG91Y2hTdGFydCgpIHtcclxuICAgIGluR2xvYmFsVG91Y2ggPSB0cnVlO1xyXG4gIH1cclxuICBmdW5jdGlvbiBnbG9iYWxUb3VjaEVuZCgpIHtcclxuICAgIGluR2xvYmFsVG91Y2ggPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFRvdWNoKGUpIHtcclxuICAgIGlmIChlLnRhcmdldFRvdWNoZXMpIHtcclxuICAgICAgcmV0dXJuIGUudGFyZ2V0VG91Y2hlc1swXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIE1heWJlIElFIHBvaW50ZXJcclxuICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNob3VsZEhhbmRsZShlKSB7XHJcbiAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5wb2ludGVyVHlwZSAmJiBlLnBvaW50ZXJUeXBlICE9PSAnbW91c2UnICYmIGUucG9pbnRlclR5cGUgIT09IGUuTVNQT0lOVEVSX1RZUEVfTU9VU0UpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHRvdWNoU3RhcnQoZSkge1xyXG4gICAgaWYgKHNob3VsZEhhbmRsZShlKSkge1xyXG4gICAgICBpbkxvY2FsVG91Y2ggPSB0cnVlO1xyXG5cclxuICAgICAgdmFyIHRvdWNoID0gZ2V0VG91Y2goZSk7XHJcblxyXG4gICAgICBzdGFydE9mZnNldC5wYWdlWCA9IHRvdWNoLnBhZ2VYO1xyXG4gICAgICBzdGFydE9mZnNldC5wYWdlWSA9IHRvdWNoLnBhZ2VZO1xyXG5cclxuICAgICAgc3RhcnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgIGlmIChlYXNpbmdMb29wICE9PSBudWxsKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gdG91Y2hNb3ZlKGUpIHtcclxuICAgIGlmICghaW5Mb2NhbFRvdWNoICYmIGkuc2V0dGluZ3Muc3dpcGVQcm9wYWdhdGlvbikge1xyXG4gICAgICB0b3VjaFN0YXJ0KGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpbkdsb2JhbFRvdWNoICYmIGluTG9jYWxUb3VjaCAmJiBzaG91bGRIYW5kbGUoZSkpIHtcclxuICAgICAgdmFyIHRvdWNoID0gZ2V0VG91Y2goZSk7XHJcblxyXG4gICAgICB2YXIgY3VycmVudE9mZnNldCA9IHtwYWdlWDogdG91Y2gucGFnZVgsIHBhZ2VZOiB0b3VjaC5wYWdlWX07XHJcblxyXG4gICAgICB2YXIgZGlmZmVyZW5jZVggPSBjdXJyZW50T2Zmc2V0LnBhZ2VYIC0gc3RhcnRPZmZzZXQucGFnZVg7XHJcbiAgICAgIHZhciBkaWZmZXJlbmNlWSA9IGN1cnJlbnRPZmZzZXQucGFnZVkgLSBzdGFydE9mZnNldC5wYWdlWTtcclxuXHJcbiAgICAgIGFwcGx5VG91Y2hNb3ZlKGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSk7XHJcbiAgICAgIHN0YXJ0T2Zmc2V0ID0gY3VycmVudE9mZnNldDtcclxuXHJcbiAgICAgIHZhciBjdXJyZW50VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICB2YXIgdGltZUdhcCA9IGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lO1xyXG4gICAgICBpZiAodGltZUdhcCA+IDApIHtcclxuICAgICAgICBzcGVlZC54ID0gZGlmZmVyZW5jZVggLyB0aW1lR2FwO1xyXG4gICAgICAgIHNwZWVkLnkgPSBkaWZmZXJlbmNlWSAvIHRpbWVHYXA7XHJcbiAgICAgICAgc3RhcnRUaW1lID0gY3VycmVudFRpbWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzaG91bGRQcmV2ZW50RGVmYXVsdChkaWZmZXJlbmNlWCwgZGlmZmVyZW5jZVkpKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gdG91Y2hFbmQoKSB7XHJcbiAgICBpZiAoIWluR2xvYmFsVG91Y2ggJiYgaW5Mb2NhbFRvdWNoKSB7XHJcbiAgICAgIGluTG9jYWxUb3VjaCA9IGZhbHNlO1xyXG5cclxuICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcclxuICAgICAgZWFzaW5nTG9vcCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIWluc3RhbmNlcy5nZXQoZWxlbWVudCkpIHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZWFzaW5nTG9vcCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNwZWVkLnggJiYgIXNwZWVkLnkpIHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZWFzaW5nTG9vcCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoTWF0aC5hYnMoc3BlZWQueCkgPCAwLjAxICYmIE1hdGguYWJzKHNwZWVkLnkpIDwgMC4wMSkge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFwcGx5VG91Y2hNb3ZlKHNwZWVkLnggKiAzMCwgc3BlZWQueSAqIDMwKTtcclxuXHJcbiAgICAgICAgc3BlZWQueCAqPSAwLjg7XHJcbiAgICAgICAgc3BlZWQueSAqPSAwLjg7XHJcbiAgICAgIH0sIDEwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChzdXBwb3J0c1RvdWNoKSB7XHJcbiAgICBpLmV2ZW50LmJpbmQod2luZG93LCAndG91Y2hzdGFydCcsIGdsb2JhbFRvdWNoU3RhcnQpO1xyXG4gICAgaS5ldmVudC5iaW5kKHdpbmRvdywgJ3RvdWNoZW5kJywgZ2xvYmFsVG91Y2hFbmQpO1xyXG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICd0b3VjaHN0YXJ0JywgdG91Y2hTdGFydCk7XHJcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3RvdWNobW92ZScsIHRvdWNoTW92ZSk7XHJcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3RvdWNoZW5kJywgdG91Y2hFbmQpO1xyXG4gIH0gZWxzZSBpZiAoc3VwcG9ydHNJZVBvaW50ZXIpIHtcclxuICAgIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50KSB7XHJcbiAgICAgIGkuZXZlbnQuYmluZCh3aW5kb3csICdwb2ludGVyZG93bicsIGdsb2JhbFRvdWNoU3RhcnQpO1xyXG4gICAgICBpLmV2ZW50LmJpbmQod2luZG93LCAncG9pbnRlcnVwJywgZ2xvYmFsVG91Y2hFbmQpO1xyXG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3BvaW50ZXJkb3duJywgdG91Y2hTdGFydCk7XHJcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAncG9pbnRlcm1vdmUnLCB0b3VjaE1vdmUpO1xyXG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3BvaW50ZXJ1cCcsIHRvdWNoRW5kKTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93Lk1TUG9pbnRlckV2ZW50KSB7XHJcbiAgICAgIGkuZXZlbnQuYmluZCh3aW5kb3csICdNU1BvaW50ZXJEb3duJywgZ2xvYmFsVG91Y2hTdGFydCk7XHJcbiAgICAgIGkuZXZlbnQuYmluZCh3aW5kb3csICdNU1BvaW50ZXJVcCcsIGdsb2JhbFRvdWNoRW5kKTtcclxuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdNU1BvaW50ZXJEb3duJywgdG91Y2hTdGFydCk7XHJcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnTVNQb2ludGVyTW92ZScsIHRvdWNoTW92ZSk7XHJcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnTVNQb2ludGVyVXAnLCB0b3VjaEVuZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgaWYgKCFfLmVudi5zdXBwb3J0c1RvdWNoICYmICFfLmVudi5zdXBwb3J0c0llUG9pbnRlcikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdmFyIGkgPSBpbnN0YW5jZXMuZ2V0KGVsZW1lbnQpO1xyXG4gIGJpbmRUb3VjaEhhbmRsZXIoZWxlbWVudCwgaSwgXy5lbnYuc3VwcG9ydHNUb3VjaCwgXy5lbnYuc3VwcG9ydHNJZVBvaW50ZXIpO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgXyA9IHJlcXVpcmUoJy4uLy4uL2xpYi9oZWxwZXInKTtcclxudmFyIGluc3RhbmNlcyA9IHJlcXVpcmUoJy4uL2luc3RhbmNlcycpO1xyXG52YXIgdXBkYXRlR2VvbWV0cnkgPSByZXF1aXJlKCcuLi91cGRhdGUtZ2VvbWV0cnknKTtcclxudmFyIHVwZGF0ZVNjcm9sbCA9IHJlcXVpcmUoJy4uL3VwZGF0ZS1zY3JvbGwnKTtcclxuXHJcbmZ1bmN0aW9uIGJpbmRTZWxlY3Rpb25IYW5kbGVyKGVsZW1lbnQsIGkpIHtcclxuICBmdW5jdGlvbiBnZXRSYW5nZU5vZGUoKSB7XHJcbiAgICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbiA/IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uID8gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkgOiAnJztcclxuICAgIGlmIChzZWxlY3Rpb24udG9TdHJpbmcoKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCkuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgc2Nyb2xsaW5nTG9vcCA9IG51bGw7XHJcbiAgdmFyIHNjcm9sbERpZmYgPSB7dG9wOiAwLCBsZWZ0OiAwfTtcclxuICBmdW5jdGlvbiBzdGFydFNjcm9sbGluZygpIHtcclxuICAgIGlmICghc2Nyb2xsaW5nTG9vcCkge1xyXG4gICAgICBzY3JvbGxpbmdMb29wID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghaW5zdGFuY2VzLmdldChlbGVtZW50KSkge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChzY3JvbGxpbmdMb29wKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAndG9wJywgZWxlbWVudC5zY3JvbGxUb3AgKyBzY3JvbGxEaWZmLnRvcCk7XHJcbiAgICAgICAgdXBkYXRlU2Nyb2xsKGVsZW1lbnQsICdsZWZ0JywgZWxlbWVudC5zY3JvbGxMZWZ0ICsgc2Nyb2xsRGlmZi5sZWZ0KTtcclxuICAgICAgICB1cGRhdGVHZW9tZXRyeShlbGVtZW50KTtcclxuICAgICAgfSwgNTApOyAvLyBldmVyeSAuMSBzZWNcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gc3RvcFNjcm9sbGluZygpIHtcclxuICAgIGlmIChzY3JvbGxpbmdMb29wKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoc2Nyb2xsaW5nTG9vcCk7XHJcbiAgICAgIHNjcm9sbGluZ0xvb3AgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgXy5zdG9wU2Nyb2xsaW5nKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICBpLmV2ZW50LmJpbmQoaS5vd25lckRvY3VtZW50LCAnc2VsZWN0aW9uY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGVsZW1lbnQuY29udGFpbnMoZ2V0UmFuZ2VOb2RlKCkpKSB7XHJcbiAgICAgIGlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICBzdG9wU2Nyb2xsaW5nKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaS5ldmVudC5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xyXG4gICAgICBpc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgIHN0b3BTY3JvbGxpbmcoKTtcclxuICAgIH1cclxuICB9KTtcclxuICBpLmV2ZW50LmJpbmQod2luZG93LCAna2V5dXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xyXG4gICAgICBpc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgIHN0b3BTY3JvbGxpbmcoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaS5ldmVudC5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xyXG4gICAgICB2YXIgbW91c2VQb3NpdGlvbiA9IHt4OiBlLnBhZ2VYLCB5OiBlLnBhZ2VZfTtcclxuICAgICAgdmFyIGNvbnRhaW5lckdlb21ldHJ5ID0ge1xyXG4gICAgICAgIGxlZnQ6IGVsZW1lbnQub2Zmc2V0TGVmdCxcclxuICAgICAgICByaWdodDogZWxlbWVudC5vZmZzZXRMZWZ0ICsgZWxlbWVudC5vZmZzZXRXaWR0aCxcclxuICAgICAgICB0b3A6IGVsZW1lbnQub2Zmc2V0VG9wLFxyXG4gICAgICAgIGJvdHRvbTogZWxlbWVudC5vZmZzZXRUb3AgKyBlbGVtZW50Lm9mZnNldEhlaWdodFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKG1vdXNlUG9zaXRpb24ueCA8IGNvbnRhaW5lckdlb21ldHJ5LmxlZnQgKyAzKSB7XHJcbiAgICAgICAgc2Nyb2xsRGlmZi5sZWZ0ID0gLTU7XHJcbiAgICAgICAgXy5zdGFydFNjcm9sbGluZyhlbGVtZW50LCAneCcpO1xyXG4gICAgICB9IGVsc2UgaWYgKG1vdXNlUG9zaXRpb24ueCA+IGNvbnRhaW5lckdlb21ldHJ5LnJpZ2h0IC0gMykge1xyXG4gICAgICAgIHNjcm9sbERpZmYubGVmdCA9IDU7XHJcbiAgICAgICAgXy5zdGFydFNjcm9sbGluZyhlbGVtZW50LCAneCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNjcm9sbERpZmYubGVmdCA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtb3VzZVBvc2l0aW9uLnkgPCBjb250YWluZXJHZW9tZXRyeS50b3AgKyAzKSB7XHJcbiAgICAgICAgaWYgKGNvbnRhaW5lckdlb21ldHJ5LnRvcCArIDMgLSBtb3VzZVBvc2l0aW9uLnkgPCA1KSB7XHJcbiAgICAgICAgICBzY3JvbGxEaWZmLnRvcCA9IC01O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzY3JvbGxEaWZmLnRvcCA9IC0yMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXy5zdGFydFNjcm9sbGluZyhlbGVtZW50LCAneScpO1xyXG4gICAgICB9IGVsc2UgaWYgKG1vdXNlUG9zaXRpb24ueSA+IGNvbnRhaW5lckdlb21ldHJ5LmJvdHRvbSAtIDMpIHtcclxuICAgICAgICBpZiAobW91c2VQb3NpdGlvbi55IC0gY29udGFpbmVyR2VvbWV0cnkuYm90dG9tICsgMyA8IDUpIHtcclxuICAgICAgICAgIHNjcm9sbERpZmYudG9wID0gNTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2Nyb2xsRGlmZi50b3AgPSAyMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXy5zdGFydFNjcm9sbGluZyhlbGVtZW50LCAneScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNjcm9sbERpZmYudG9wID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNjcm9sbERpZmYudG9wID09PSAwICYmIHNjcm9sbERpZmYubGVmdCA9PT0gMCkge1xyXG4gICAgICAgIHN0b3BTY3JvbGxpbmcoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGFydFNjcm9sbGluZygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICB2YXIgaSA9IGluc3RhbmNlcy5nZXQoZWxlbWVudCk7XHJcbiAgYmluZFNlbGVjdGlvbkhhbmRsZXIoZWxlbWVudCwgaSk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBpbnN0YW5jZXMgPSByZXF1aXJlKCcuLi9pbnN0YW5jZXMnKTtcclxudmFyIHVwZGF0ZUdlb21ldHJ5ID0gcmVxdWlyZSgnLi4vdXBkYXRlLWdlb21ldHJ5Jyk7XHJcblxyXG5mdW5jdGlvbiBiaW5kTmF0aXZlU2Nyb2xsSGFuZGxlcihlbGVtZW50LCBpKSB7XHJcbiAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB1cGRhdGVHZW9tZXRyeShlbGVtZW50KTtcclxuICB9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIHZhciBpID0gaW5zdGFuY2VzLmdldChlbGVtZW50KTtcclxuICBiaW5kTmF0aXZlU2Nyb2xsSGFuZGxlcihlbGVtZW50LCBpKTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIF8gPSByZXF1aXJlKCcuLi9saWIvaGVscGVyJyk7XHJcbnZhciBkb20gPSByZXF1aXJlKCcuLi9saWIvZG9tJyk7XHJcbnZhciBpbnN0YW5jZXMgPSByZXF1aXJlKCcuL2luc3RhbmNlcycpO1xyXG52YXIgdXBkYXRlR2VvbWV0cnkgPSByZXF1aXJlKCcuL3VwZGF0ZS1nZW9tZXRyeScpO1xyXG52YXIgdXBkYXRlU2Nyb2xsID0gcmVxdWlyZSgnLi91cGRhdGUtc2Nyb2xsJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgdmFyIGkgPSBpbnN0YW5jZXMuZ2V0KGVsZW1lbnQpO1xyXG5cclxuICBpZiAoIWkpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFJlY2FsY3VhdGUgbmVnYXRpdmUgc2Nyb2xsTGVmdCBhZGp1c3RtZW50XHJcbiAgaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgPSBpLmlzTmVnYXRpdmVTY3JvbGwgPyBlbGVtZW50LnNjcm9sbFdpZHRoIC0gZWxlbWVudC5jbGllbnRXaWR0aCA6IDA7XHJcblxyXG4gIC8vIFJlY2FsY3VsYXRlIHJhaWwgbWFyZ2luc1xyXG4gIGRvbS5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICBkb20uY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgaS5yYWlsWE1hcmdpbldpZHRoID0gXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdtYXJnaW5MZWZ0JykpICsgXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWFJhaWwsICdtYXJnaW5SaWdodCcpKTtcclxuICBpLnJhaWxZTWFyZ2luSGVpZ2h0ID0gXy50b0ludChkb20uY3NzKGkuc2Nyb2xsYmFyWVJhaWwsICdtYXJnaW5Ub3AnKSkgKyBfLnRvSW50KGRvbS5jc3MoaS5zY3JvbGxiYXJZUmFpbCwgJ21hcmdpbkJvdHRvbScpKTtcclxuXHJcbiAgLy8gSGlkZSBzY3JvbGxiYXJzIG5vdCB0byBhZmZlY3Qgc2Nyb2xsV2lkdGggYW5kIHNjcm9sbEhlaWdodFxyXG4gIGRvbS5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gIGRvbS5jc3MoaS5zY3JvbGxiYXJZUmFpbCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cclxuICB1cGRhdGVHZW9tZXRyeShlbGVtZW50KTtcclxuXHJcbiAgLy8gVXBkYXRlIHRvcC9sZWZ0IHNjcm9sbCB0byB0cmlnZ2VyIGV2ZW50c1xyXG4gIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAndG9wJywgZWxlbWVudC5zY3JvbGxUb3ApO1xyXG4gIHVwZGF0ZVNjcm9sbChlbGVtZW50LCAnbGVmdCcsIGVsZW1lbnQuc2Nyb2xsTGVmdCk7XHJcblxyXG4gIGRvbS5jc3MoaS5zY3JvbGxiYXJYUmFpbCwgJ2Rpc3BsYXknLCAnJyk7XHJcbiAgZG9tLmNzcyhpLnNjcm9sbGJhcllSYWlsLCAnZGlzcGxheScsICcnKTtcclxufTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDekpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2xMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=