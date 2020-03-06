(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[11],{

/***/ 2782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(644);
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2783);
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2130);




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(wait) || 0;
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  }

  function debounced() {
    var time = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ __webpack_exports__["default"] = (debounce);


/***/ }),

/***/ 2783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(640);


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Date.now();
};

/* harmony default export */ __webpack_exports__["default"] = (now);


/***/ }),

/***/ 2915:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(402);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(842);

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

/***/ 2926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return Async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncCreatable", function() { return AsyncCreatableSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creatable", function() { return CreatableSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return Value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMenuRenderer", function() { return menuRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultArrowRenderer", function() { return arrowRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultClearRenderer", function() { return clearRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFilterOptions", function() { return filterOptions; });
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2915);
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(752);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(842);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(411);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);






var arrowRenderer = function arrowRenderer(_ref) {
	var onMouseDown = _ref.onMouseDown;

	return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('span', {
		className: 'Select-arrow',
		onMouseDown: onMouseDown
	});
};

arrowRenderer.propTypes = {
	onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

var clearRenderer = function clearRenderer() {
	return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('span', {
		className: 'Select-clear',
		dangerouslySetInnerHTML: { __html: '&times;' }
	});
};

var map = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

var stripDiacritics = function stripDiacritics(str) {
	for (var i = 0; i < map.length; i++) {
		str = str.replace(map[i].letters, map[i].base);
	}
	return str;
};

var trim = function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var isValid = function isValid(value) {
	return typeof value !== 'undefined' && value !== null && value !== '';
};

var filterOptions = function filterOptions(options, filterValue, excludeOptions, props) {
	if (props.ignoreAccents) {
		filterValue = stripDiacritics(filterValue);
	}

	if (props.ignoreCase) {
		filterValue = filterValue.toLowerCase();
	}

	if (props.trimFilter) {
		filterValue = trim(filterValue);
	}

	if (excludeOptions) excludeOptions = excludeOptions.map(function (i) {
		return i[props.valueKey];
	});

	return options.filter(function (option) {
		if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return false;
		if (props.filterOption) return props.filterOption.call(undefined, option, filterValue);
		if (!filterValue) return true;

		var value = option[props.valueKey];
		var label = option[props.labelKey];
		var hasValue = isValid(value);
		var hasLabel = isValid(label);

		if (!hasValue && !hasLabel) {
			return false;
		}

		var valueTest = hasValue ? String(value) : null;
		var labelTest = hasLabel ? String(label) : null;

		if (props.ignoreAccents) {
			if (valueTest && props.matchProp !== 'label') valueTest = stripDiacritics(valueTest);
			if (labelTest && props.matchProp !== 'value') labelTest = stripDiacritics(labelTest);
		}

		if (props.ignoreCase) {
			if (valueTest && props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
			if (labelTest && props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
		}

		return props.matchPos === 'start' ? valueTest && props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || labelTest && props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : valueTest && props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || labelTest && props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
	});
};

var menuRenderer = function menuRenderer(_ref) {
	var focusedOption = _ref.focusedOption,
	    focusOption = _ref.focusOption,
	    inputValue = _ref.inputValue,
	    instancePrefix = _ref.instancePrefix,
	    onFocus = _ref.onFocus,
	    onOptionRef = _ref.onOptionRef,
	    onSelect = _ref.onSelect,
	    optionClassName = _ref.optionClassName,
	    optionComponent = _ref.optionComponent,
	    optionRenderer = _ref.optionRenderer,
	    options = _ref.options,
	    removeValue = _ref.removeValue,
	    selectValue = _ref.selectValue,
	    valueArray = _ref.valueArray,
	    valueKey = _ref.valueKey;

	var Option = optionComponent;

	return options.map(function (option, i) {
		var isSelected = valueArray && valueArray.some(function (x) {
			return x[valueKey] === option[valueKey];
		});
		var isFocused = option === focusedOption;
		var optionClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(optionClassName, {
			'Select-option': true,
			'is-selected': isSelected,
			'is-focused': isFocused,
			'is-disabled': option.disabled
		});

		return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
			Option,
			{
				className: optionClass,
				focusOption: focusOption,
				inputValue: inputValue,
				instancePrefix: instancePrefix,
				isDisabled: option.disabled,
				isFocused: isFocused,
				isSelected: isSelected,
				key: 'option-' + i + '-' + option[valueKey],
				onFocus: onFocus,
				onSelect: onSelect,
				option: option,
				optionIndex: i,
				ref: function ref(_ref2) {
					onOptionRef(_ref2, isFocused);
				},
				removeValue: removeValue,
				selectValue: selectValue
			},
			optionRenderer(option, i, inputValue)
		);
	});
};

menuRenderer.propTypes = {
	focusOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	focusedOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
	inputValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
	instancePrefix: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
	onFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	onOptionRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	onSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	optionClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
	optionComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	optionRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
	removeValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	selectValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
	valueArray: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
	valueKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

var blockEvent = (function (event) {
	event.preventDefault();
	event.stopPropagation();
	if (event.target.tagName !== 'A' || !('href' in event.target)) {
		return;
	}
	if (event.target.target) {
		window.open(event.target.href, event.target.target);
	} else {
		window.location.href = event.target.href;
	}
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





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

var Option = function (_React$Component) {
	inherits(Option, _React$Component);

	function Option(props) {
		classCallCheck(this, Option);

		var _this = possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
		_this.handleMouseMove = _this.handleMouseMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		_this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.onFocus = _this.onFocus.bind(_this);
		return _this;
	}

	createClass(Option, [{
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onSelect(this.props.option, event);
		}
	}, {
		key: 'handleMouseEnter',
		value: function handleMouseEnter(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleMouseMove',
		value: function handleMouseMove(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'onFocus',
		value: function onFocus(event) {
			if (!this.props.isFocused) {
				this.props.onFocus(this.props.option, event);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    option = _props.option,
			    instancePrefix = _props.instancePrefix,
			    optionIndex = _props.optionIndex;

			var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(this.props.className, option.className);

			return option.disabled ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ className: className,
					onMouseDown: blockEvent,
					onClick: blockEvent },
				this.props.children
			) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ className: className,
					style: option.style,
					role: 'option',
					'aria-label': option.label,
					onMouseDown: this.handleMouseDown,
					onMouseEnter: this.handleMouseEnter,
					onMouseMove: this.handleMouseMove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEnd,
					id: instancePrefix + '-option-' + optionIndex,
					title: option.title },
				this.props.children
			);
		}
	}]);
	return Option;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Option.propTypes = {
	children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
	className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // className (based on mouse position)
	instancePrefix: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired, // unique prefix for the ids (used for aria)
	isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // the option is disabled
	isFocused: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // the option is focused
	isSelected: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // the option is selected
	onFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to handle mouseEnter on option element
	onSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to handle click on option element
	onUnfocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to handle mouseLeave on option element
	option: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired, // object that is base for that option
	optionIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number // index of the option, used to generate unique ids for aria
};

var Value = function (_React$Component) {
	inherits(Value, _React$Component);

	function Value(props) {
		classCallCheck(this, Value);

		var _this = possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.onRemove = _this.onRemove.bind(_this);
		_this.handleTouchEndRemove = _this.handleTouchEndRemove.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		return _this;
	}

	createClass(Value, [{
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			if (event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			if (this.props.onClick) {
				event.stopPropagation();
				this.props.onClick(this.props.value, event);
				return;
			}
			if (this.props.value.href) {
				event.stopPropagation();
			}
		}
	}, {
		key: 'onRemove',
		value: function onRemove(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onRemove(this.props.value);
		}
	}, {
		key: 'handleTouchEndRemove',
		value: function handleTouchEndRemove(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.onRemove(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'renderRemoveIcon',
		value: function renderRemoveIcon() {
			if (this.props.disabled || !this.props.onRemove) return;
			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'span',
				{ className: 'Select-value-icon',
					'aria-hidden': 'true',
					onMouseDown: this.onRemove,
					onTouchEnd: this.handleTouchEndRemove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove },
				'\xD7'
			);
		}
	}, {
		key: 'renderLabel',
		value: function renderLabel() {
			var className = 'Select-value-label';
			return this.props.onClick || this.props.value.href ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'a',
				{ className: className, href: this.props.value.href, target: this.props.value.target, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
				this.props.children
			) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'span',
				{ className: className, role: 'option', 'aria-selected': 'true', id: this.props.id },
				this.props.children
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('Select-value', this.props.value.disabled ? 'Select-value-disabled' : '', this.props.value.className),
					style: this.props.value.style,
					title: this.props.value.title
				},
				this.renderRemoveIcon(),
				this.renderLabel()
			);
		}
	}]);
	return Value;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Value.propTypes = {
	children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
	disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // disabled prop passed to ReactSelect
	id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // Unique id for the value - used for aria
	onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to handle click on value label
	onRemove: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to handle removal of the value
	value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired // the option object for this value
};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/react-select
*/
var stringifyValue = function stringifyValue(value) {
	return typeof value === 'string' ? value : value !== null && JSON.stringify(value) || '';
};

var stringOrNode = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]);
var stringOrNumber = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]);

var instanceId = 1;

var shouldShowValue = function shouldShowValue(state, props) {
	var inputValue = state.inputValue,
	    isPseudoFocused = state.isPseudoFocused,
	    isFocused = state.isFocused;
	var onSelectResetsInput = props.onSelectResetsInput;


	if (!inputValue) return true;

	if (!onSelectResetsInput) {
		return !(!isFocused && isPseudoFocused || isFocused && !isPseudoFocused);
	}

	return false;
};

var shouldShowPlaceholder = function shouldShowPlaceholder(state, props, isOpen) {
	var inputValue = state.inputValue,
	    isPseudoFocused = state.isPseudoFocused,
	    isFocused = state.isFocused;
	var onSelectResetsInput = props.onSelectResetsInput;


	return !inputValue || !onSelectResetsInput && !isOpen && !isPseudoFocused && !isFocused;
};

/**
 * Retrieve a value from the given options and valueKey
 * @param {String|Number|Array} value	- the selected value(s)
 * @param {Object}		 props	- the Select component's props (or nextProps)
 */
var expandValue = function expandValue(value, props) {
	var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	if (valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') return value;
	var options = props.options,
	    valueKey = props.valueKey;

	if (!options) return;
	for (var i = 0; i < options.length; i++) {
		if (String(options[i][valueKey]) === String(value)) return options[i];
	}
};

var handleRequired = function handleRequired(value, multi) {
	if (!value) return true;
	return multi ? value.length === 0 : Object.keys(value).length === 0;
};

var Select$1 = function (_React$Component) {
	inherits(Select, _React$Component);

	function Select(props) {
		classCallCheck(this, Select);

		var _this = possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

		['clearValue', 'focusOption', 'getOptionLabel', 'handleInputBlur', 'handleInputChange', 'handleInputFocus', 'handleInputValueChange', 'handleKeyDown', 'handleMenuScroll', 'handleMouseDown', 'handleMouseDownOnArrow', 'handleMouseDownOnMenu', 'handleTouchEnd', 'handleTouchEndClearValue', 'handleTouchMove', 'handleTouchOutside', 'handleTouchStart', 'handleValueClick', 'onOptionRef', 'removeValue', 'selectValue'].forEach(function (fn) {
			return _this[fn] = _this[fn].bind(_this);
		});

		_this.state = {
			inputValue: '',
			isFocused: false,
			isOpen: false,
			isPseudoFocused: false,
			required: false
		};
		return _this;
	}

	createClass(Select, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this._instancePrefix = 'react-select-' + (this.props.instanceId || ++instanceId) + '-';
			var valueArray = this.getValueArray(this.props.value);

			if (this.props.required) {
				this.setState({
					required: handleRequired(valueArray[0], this.props.multi)
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (typeof this.props.autofocus !== 'undefined' && typeof console !== 'undefined') {
				console.warn('Warning: The autofocus prop has changed to autoFocus, support will be removed after react-select@1.0');
			}
			if (this.props.autoFocus || this.props.autofocus) {
				this.focus();
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var valueArray = this.getValueArray(nextProps.value, nextProps);

			if (nextProps.required) {
				this.setState({
					required: handleRequired(valueArray[0], nextProps.multi)
				});
			} else if (this.props.required) {
				// Used to be required but it's not any more
				this.setState({ required: false });
			}

			if (this.state.inputValue && this.props.value !== nextProps.value && nextProps.onSelectResetsInput) {
				this.setState({ inputValue: this.handleInputValueChange('') });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			// focus to the selected option
			if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
				var focusedOptionNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(this.focused);
				var menuNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(this.menu);

				var scrollTop = menuNode.scrollTop;
				var scrollBottom = scrollTop + menuNode.offsetHeight;
				var optionTop = focusedOptionNode.offsetTop;
				var optionBottom = optionTop + focusedOptionNode.offsetHeight;

				if (scrollTop > optionTop || scrollBottom < optionBottom) {
					menuNode.scrollTop = focusedOptionNode.offsetTop;
				}

				// We still set hasScrolledToOption to true even if we didn't
				// actually need to scroll, as we've still confirmed that the
				// option is in view.
				this.hasScrolledToOption = true;
			} else if (!this.state.isOpen) {
				this.hasScrolledToOption = false;
			}

			if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
				this._scrollToFocusedOptionOnUpdate = false;
				var focusedDOM = Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(this.focused);
				var menuDOM = Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(this.menu);
				var focusedRect = focusedDOM.getBoundingClientRect();
				var menuRect = menuDOM.getBoundingClientRect();
				if (focusedRect.bottom > menuRect.bottom) {
					menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
				} else if (focusedRect.top < menuRect.top) {
					menuDOM.scrollTop = focusedDOM.offsetTop;
				}
			}
			if (this.props.scrollMenuIntoView && this.menuContainer) {
				var menuContainerRect = this.menuContainer.getBoundingClientRect();
				if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
					window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
				}
			}
			if (prevProps.disabled !== this.props.disabled) {
				this.setState({ isFocused: false }); // eslint-disable-line react/no-did-update-set-state
				this.closeMenu();
			}
			if (prevState.isOpen !== this.state.isOpen) {
				this.toggleTouchOutsideEvent(this.state.isOpen);
				var handler = this.state.isOpen ? this.props.onOpen : this.props.onClose;
				handler && handler();
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.toggleTouchOutsideEvent(false);
		}
	}, {
		key: 'toggleTouchOutsideEvent',
		value: function toggleTouchOutsideEvent(enabled) {
			var eventTogglerName = enabled ? document.addEventListener ? 'addEventListener' : 'attachEvent' : document.removeEventListener ? 'removeEventListener' : 'detachEvent';
			var pref = document.addEventListener ? '' : 'on';

			document[eventTogglerName](pref + 'touchstart', this.handleTouchOutside);
			document[eventTogglerName](pref + 'mousedown', this.handleTouchOutside);
		}
	}, {
		key: 'handleTouchOutside',
		value: function handleTouchOutside(event) {
			// handle touch outside on ios to dismiss menu
			if (this.wrapper && !this.wrapper.contains(event.target)) {
				this.closeMenu();
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			if (!this.input) return;
			this.input.focus();
		}
	}, {
		key: 'blurInput',
		value: function blurInput() {
			if (!this.input) return;
			this.input.blur();
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchEndClearValue',
		value: function handleTouchEndClearValue(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Clear the value
			this.clearValue(event);
		}
	}, {
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			if (event.target.tagName === 'INPUT') {
				if (!this.state.isFocused) {
					this._openAfterFocus = this.props.openOnClick;
					this.focus();
				} else if (!this.state.isOpen) {
					this.setState({
						isOpen: true,
						isPseudoFocused: false,
						focusedOption: null
					});
				}

				return;
			}

			// prevent default event handlers
			event.preventDefault();

			// for the non-searchable select, toggle the menu
			if (!this.props.searchable) {
				// This code means that if a select is searchable, onClick the options menu will not appear, only on subsequent click will it open.
				this.focus();
				return this.setState({
					isOpen: !this.state.isOpen,
					focusedOption: null
				});
			}

			if (this.state.isFocused) {
				// On iOS, we can get into a state where we think the input is focused but it isn't really,
				// since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
				// Call focus() again here to be safe.
				this.focus();

				var input = this.input;
				var toOpen = true;

				if (typeof input.getInput === 'function') {
					// Get the actual DOM input if the ref is an <AutosizeInput /> component
					input = input.getInput();
				}

				// clears the value so that the cursor will be at the end of input when the component re-renders
				input.value = '';

				if (this._focusAfterClear) {
					toOpen = false;
					this._focusAfterClear = false;
				}

				// if the input is focused, ensure the menu is open
				this.setState({
					isOpen: toOpen,
					isPseudoFocused: false,
					focusedOption: null
				});
			} else {
				// otherwise, focus the input and open the menu
				this._openAfterFocus = this.props.openOnClick;
				this.focus();
				this.setState({ focusedOption: null });
			}
		}
	}, {
		key: 'handleMouseDownOnArrow',
		value: function handleMouseDownOnArrow(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			if (this.state.isOpen) {
				// prevent default event handlers
				event.stopPropagation();
				event.preventDefault();
				// close the menu
				this.closeMenu();
			} else {
				// If the menu isn't open, let the event bubble to the main handleMouseDown
				this.setState({
					isOpen: true
				});
			}
		}
	}, {
		key: 'handleMouseDownOnMenu',
		value: function handleMouseDownOnMenu(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			event.stopPropagation();
			event.preventDefault();

			this._openAfterFocus = true;
			this.focus();
		}
	}, {
		key: 'closeMenu',
		value: function closeMenu() {
			if (this.props.onCloseResetsInput) {
				this.setState({
					inputValue: this.handleInputValueChange(''),
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi
				});
			} else {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi
				});
			}
			this.hasScrolledToOption = false;
		}
	}, {
		key: 'handleInputFocus',
		value: function handleInputFocus(event) {
			if (this.props.disabled) return;

			var toOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
			toOpen = this._focusAfterClear ? false : toOpen; //if focus happens after clear values, don't open dropdown yet.

			if (this.props.onFocus) {
				this.props.onFocus(event);
			}

			this.setState({
				isFocused: true,
				isOpen: !!toOpen
			});

			this._focusAfterClear = false;
			this._openAfterFocus = false;
		}
	}, {
		key: 'handleInputBlur',
		value: function handleInputBlur(event) {
			// The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
			if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) {
				this.focus();
				return;
			}

			if (this.props.onBlur) {
				this.props.onBlur(event);
			}
			var onBlurredState = {
				isFocused: false,
				isOpen: false,
				isPseudoFocused: false
			};
			if (this.props.onBlurResetsInput) {
				onBlurredState.inputValue = this.handleInputValueChange('');
			}
			this.setState(onBlurredState);
		}
	}, {
		key: 'handleInputChange',
		value: function handleInputChange(event) {
			var newInputValue = event.target.value;

			if (this.state.inputValue !== event.target.value) {
				newInputValue = this.handleInputValueChange(newInputValue);
			}

			this.setState({
				inputValue: newInputValue,
				isOpen: true,
				isPseudoFocused: false
			});
		}
	}, {
		key: 'setInputValue',
		value: function setInputValue(newValue) {
			if (this.props.onInputChange) {
				var nextState = this.props.onInputChange(newValue);
				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof(nextState)) !== 'object') {
					newValue = '' + nextState;
				}
			}
			this.setState({
				inputValue: newValue
			});
		}
	}, {
		key: 'handleInputValueChange',
		value: function handleInputValueChange(newValue) {
			if (this.props.onInputChange) {
				var nextState = this.props.onInputChange(newValue);
				// Note: != used deliberately here to catch undefined and null
				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof(nextState)) !== 'object') {
					newValue = '' + nextState;
				}
			}
			return newValue;
		}
	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(event) {
			if (this.props.disabled) return;

			if (typeof this.props.onInputKeyDown === 'function') {
				this.props.onInputKeyDown(event);
				if (event.defaultPrevented) {
					return;
				}
			}

			switch (event.keyCode) {
				case 8:
					// backspace
					if (!this.state.inputValue && this.props.backspaceRemoves) {
						event.preventDefault();
						this.popValue();
					}
					break;
				case 9:
					// tab
					if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
						break;
					}
					event.preventDefault();
					this.selectFocusedOption();
					break;
				case 13:
					// enter
					event.preventDefault();
					event.stopPropagation();
					if (this.state.isOpen) {
						this.selectFocusedOption();
					} else {
						this.focusNextOption();
					}
					break;
				case 27:
					// escape
					event.preventDefault();
					if (this.state.isOpen) {
						this.closeMenu();
						event.stopPropagation();
					} else if (this.props.clearable && this.props.escapeClearsValue) {
						this.clearValue(event);
						event.stopPropagation();
					}
					break;
				case 32:
					// space
					if (this.props.searchable) {
						break;
					}
					event.preventDefault();
					if (!this.state.isOpen) {
						this.focusNextOption();
						break;
					}
					event.stopPropagation();
					this.selectFocusedOption();
					break;
				case 38:
					// up
					event.preventDefault();
					this.focusPreviousOption();
					break;
				case 40:
					// down
					event.preventDefault();
					this.focusNextOption();
					break;
				case 33:
					// page up
					event.preventDefault();
					this.focusPageUpOption();
					break;
				case 34:
					// page down
					event.preventDefault();
					this.focusPageDownOption();
					break;
				case 35:
					// end key
					if (event.shiftKey) {
						break;
					}
					event.preventDefault();
					this.focusEndOption();
					break;
				case 36:
					// home key
					if (event.shiftKey) {
						break;
					}
					event.preventDefault();
					this.focusStartOption();
					break;
				case 46:
					// delete
					if (!this.state.inputValue && this.props.deleteRemoves) {
						event.preventDefault();
						this.popValue();
					}
					break;
			}
		}
	}, {
		key: 'handleValueClick',
		value: function handleValueClick(option, event) {
			if (!this.props.onValueClick) return;
			this.props.onValueClick(option, event);
		}
	}, {
		key: 'handleMenuScroll',
		value: function handleMenuScroll(event) {
			if (!this.props.onMenuScrollToBottom) return;
			var target = event.target;

			if (target.scrollHeight > target.offsetHeight && target.scrollHeight - target.offsetHeight - target.scrollTop <= 0) {
				this.props.onMenuScrollToBottom();
			}
		}
	}, {
		key: 'getOptionLabel',
		value: function getOptionLabel(op) {
			return op[this.props.labelKey];
		}

		/**
   * Turns a value into an array from the given options
   * @param {String|Number|Array} value		- the value of the select input
   * @param {Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
   * @returns	{Array}	the value of the select represented in an array
   */

	}, {
		key: 'getValueArray',
		value: function getValueArray(value) {
			var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

			/** support optionally passing in the `nextProps` so `componentWillReceiveProps` updates will function as expected */
			var props = (typeof nextProps === 'undefined' ? 'undefined' : _typeof(nextProps)) === 'object' ? nextProps : this.props;
			if (props.multi) {
				if (typeof value === 'string') {
					value = value.split(props.delimiter);
				}
				if (!Array.isArray(value)) {
					if (value === null || value === undefined) return [];
					value = [value];
				}
				return value.map(function (value) {
					return expandValue(value, props);
				}).filter(function (i) {
					return i;
				});
			}
			var expandedValue = expandValue(value, props);
			return expandedValue ? [expandedValue] : [];
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			var _this2 = this;

			if (this.props.autoBlur) {
				this.blurInput();
			}
			if (this.props.required) {
				var required = handleRequired(value, this.props.multi);
				this.setState({ required: required });
			}
			if (this.props.simpleValue && value) {
				value = this.props.multi ? value.map(function (i) {
					return i[_this2.props.valueKey];
				}).join(this.props.delimiter) : value[this.props.valueKey];
			}
			if (this.props.onChange) {
				this.props.onChange(value);
			}
		}
	}, {
		key: 'selectValue',
		value: function selectValue(value) {
			var _this3 = this;

			// NOTE: we actually add/set the value in a callback to make sure the
			// input value is empty to avoid styling issues in Chrome
			if (this.props.closeOnSelect) {
				this.hasScrolledToOption = false;
			}
			var updatedValue = this.props.onSelectResetsInput ? '' : this.state.inputValue;
			if (this.props.multi) {
				this.setState({
					focusedIndex: null,
					inputValue: this.handleInputValueChange(updatedValue),
					isOpen: !this.props.closeOnSelect
				}, function () {
					var valueArray = _this3.getValueArray(_this3.props.value);
					if (valueArray.some(function (i) {
						return i[_this3.props.valueKey] === value[_this3.props.valueKey];
					})) {
						_this3.removeValue(value);
					} else {
						_this3.addValue(value);
					}
				});
			} else {
				this.setState({
					inputValue: this.handleInputValueChange(updatedValue),
					isOpen: !this.props.closeOnSelect,
					isPseudoFocused: this.state.isFocused
				}, function () {
					_this3.setValue(value);
				});
			}
		}
	}, {
		key: 'addValue',
		value: function addValue(value) {
			var valueArray = this.getValueArray(this.props.value);
			var visibleOptions = this._visibleOptions.filter(function (val) {
				return !val.disabled;
			});
			var lastValueIndex = visibleOptions.indexOf(value);
			this.setValue(valueArray.concat(value));
			if (!this.props.closeOnSelect) {
				return;
			}
			if (visibleOptions.length - 1 === lastValueIndex) {
				// the last option was selected; focus the second-last one
				this.focusOption(visibleOptions[lastValueIndex - 1]);
			} else if (visibleOptions.length > lastValueIndex) {
				// focus the option below the selected one
				this.focusOption(visibleOptions[lastValueIndex + 1]);
			}
		}
	}, {
		key: 'popValue',
		value: function popValue() {
			var valueArray = this.getValueArray(this.props.value);
			if (!valueArray.length) return;
			if (valueArray[valueArray.length - 1].clearableValue === false) return;
			this.setValue(this.props.multi ? valueArray.slice(0, valueArray.length - 1) : null);
		}
	}, {
		key: 'removeValue',
		value: function removeValue(value) {
			var _this4 = this;

			var valueArray = this.getValueArray(this.props.value);
			this.setValue(valueArray.filter(function (i) {
				return i[_this4.props.valueKey] !== value[_this4.props.valueKey];
			}));
			this.focus();
		}
	}, {
		key: 'clearValue',
		value: function clearValue(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, ignore it.
			if (event && event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			event.preventDefault();

			this.setValue(this.getResetValue());
			this.setState({
				inputValue: this.handleInputValueChange(''),
				isOpen: false
			}, this.focus);

			this._focusAfterClear = true;
		}
	}, {
		key: 'getResetValue',
		value: function getResetValue() {
			if (this.props.resetValue !== undefined) {
				return this.props.resetValue;
			} else if (this.props.multi) {
				return [];
			} else {
				return null;
			}
		}
	}, {
		key: 'focusOption',
		value: function focusOption(option) {
			this.setState({
				focusedOption: option
			});
		}
	}, {
		key: 'focusNextOption',
		value: function focusNextOption() {
			this.focusAdjacentOption('next');
		}
	}, {
		key: 'focusPreviousOption',
		value: function focusPreviousOption() {
			this.focusAdjacentOption('previous');
		}
	}, {
		key: 'focusPageUpOption',
		value: function focusPageUpOption() {
			this.focusAdjacentOption('page_up');
		}
	}, {
		key: 'focusPageDownOption',
		value: function focusPageDownOption() {
			this.focusAdjacentOption('page_down');
		}
	}, {
		key: 'focusStartOption',
		value: function focusStartOption() {
			this.focusAdjacentOption('start');
		}
	}, {
		key: 'focusEndOption',
		value: function focusEndOption() {
			this.focusAdjacentOption('end');
		}
	}, {
		key: 'focusAdjacentOption',
		value: function focusAdjacentOption(dir) {
			var options = this._visibleOptions.map(function (option, index) {
				return { option: option, index: index };
			}).filter(function (option) {
				return !option.option.disabled;
			});
			this._scrollToFocusedOptionOnUpdate = true;
			if (!this.state.isOpen) {
				var newState = {
					focusedOption: this._focusedOption || (options.length ? options[dir === 'next' ? 0 : options.length - 1].option : null),
					isOpen: true
				};
				if (this.props.onSelectResetsInput) {
					newState.inputValue = '';
				}
				this.setState(newState);
				return;
			}
			if (!options.length) return;
			var focusedIndex = -1;
			for (var i = 0; i < options.length; i++) {
				if (this._focusedOption === options[i].option) {
					focusedIndex = i;
					break;
				}
			}
			if (dir === 'next' && focusedIndex !== -1) {
				focusedIndex = (focusedIndex + 1) % options.length;
			} else if (dir === 'previous') {
				if (focusedIndex > 0) {
					focusedIndex = focusedIndex - 1;
				} else {
					focusedIndex = options.length - 1;
				}
			} else if (dir === 'start') {
				focusedIndex = 0;
			} else if (dir === 'end') {
				focusedIndex = options.length - 1;
			} else if (dir === 'page_up') {
				var potentialIndex = focusedIndex - this.props.pageSize;
				if (potentialIndex < 0) {
					focusedIndex = 0;
				} else {
					focusedIndex = potentialIndex;
				}
			} else if (dir === 'page_down') {
				var _potentialIndex = focusedIndex + this.props.pageSize;
				if (_potentialIndex > options.length - 1) {
					focusedIndex = options.length - 1;
				} else {
					focusedIndex = _potentialIndex;
				}
			}

			if (focusedIndex === -1) {
				focusedIndex = 0;
			}

			this.setState({
				focusedIndex: options[focusedIndex].index,
				focusedOption: options[focusedIndex].option
			});
		}
	}, {
		key: 'getFocusedOption',
		value: function getFocusedOption() {
			return this._focusedOption;
		}
	}, {
		key: 'selectFocusedOption',
		value: function selectFocusedOption() {
			if (this._focusedOption) {
				return this.selectValue(this._focusedOption);
			}
		}
	}, {
		key: 'renderLoading',
		value: function renderLoading() {
			if (!this.props.isLoading) return;
			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'span',
				{ className: 'Select-loading-zone', 'aria-hidden': 'true' },
				react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('span', { className: 'Select-loading' })
			);
		}
	}, {
		key: 'renderValue',
		value: function renderValue(valueArray, isOpen) {
			var _this5 = this;

			var renderLabel = this.props.valueRenderer || this.getOptionLabel;
			var ValueComponent = this.props.valueComponent;
			if (!valueArray.length) {
				var showPlaceholder = shouldShowPlaceholder(this.state, this.props, isOpen);
				return showPlaceholder ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					'div',
					{ className: 'Select-placeholder' },
					this.props.placeholder
				) : null;
			}
			var onClick = this.props.onValueClick ? this.handleValueClick : null;
			if (this.props.multi) {
				return valueArray.map(function (value, i) {
					return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
						ValueComponent,
						{
							disabled: _this5.props.disabled || value.clearableValue === false,
							id: _this5._instancePrefix + '-value-' + i,
							instancePrefix: _this5._instancePrefix,
							key: 'value-' + i + '-' + value[_this5.props.valueKey],
							onClick: onClick,
							onRemove: _this5.removeValue,
							placeholder: _this5.props.placeholder,
							value: value,
							values: valueArray
						},
						renderLabel(value, i),
						react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
							'span',
							{ className: 'Select-aria-only' },
							'\xA0'
						)
					);
				});
			} else if (shouldShowValue(this.state, this.props)) {
				if (isOpen) onClick = null;
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					ValueComponent,
					{
						disabled: this.props.disabled,
						id: this._instancePrefix + '-value-item',
						instancePrefix: this._instancePrefix,
						onClick: onClick,
						placeholder: this.props.placeholder,
						value: valueArray[0]
					},
					renderLabel(valueArray[0])
				);
			}
		}
	}, {
		key: 'renderInput',
		value: function renderInput(valueArray, focusedOptionIndex) {
			var _classNames,
			    _this6 = this;

			var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('Select-input', this.props.inputProps.className);
			var isOpen = this.state.isOpen;

			var ariaOwns = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classNames = {}, defineProperty(_classNames, this._instancePrefix + '-list', isOpen), defineProperty(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames));

			var value = this.state.inputValue;
			if (value && !this.props.onSelectResetsInput && !this.state.isFocused) {
				// it hides input value when it is not focused and was not reset on select
				value = '';
			}

			var inputProps = _extends({}, this.props.inputProps, {
				'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
				'aria-describedby': this.props['aria-describedby'],
				'aria-expanded': '' + isOpen,
				'aria-haspopup': '' + isOpen,
				'aria-label': this.props['aria-label'],
				'aria-labelledby': this.props['aria-labelledby'],
				'aria-owns': ariaOwns,
				onBlur: this.handleInputBlur,
				onChange: this.handleInputChange,
				onFocus: this.handleInputFocus,
				ref: function ref(_ref) {
					return _this6.input = _ref;
				},
				role: 'combobox',
				required: this.state.required,
				tabIndex: this.props.tabIndex,
				value: value
			});

			if (this.props.inputRenderer) {
				return this.props.inputRenderer(inputProps);
			}

			if (this.props.disabled || !this.props.searchable) {
				var divProps = objectWithoutProperties(this.props.inputProps, []);


				var _ariaOwns = classnames__WEBPACK_IMPORTED_MODULE_1___default()(defineProperty({}, this._instancePrefix + '-list', isOpen));
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('div', _extends({}, divProps, {
					'aria-expanded': isOpen,
					'aria-owns': _ariaOwns,
					'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
					'aria-disabled': '' + this.props.disabled,
					'aria-label': this.props['aria-label'],
					'aria-labelledby': this.props['aria-labelledby'],
					className: className,
					onBlur: this.handleInputBlur,
					onFocus: this.handleInputFocus,
					ref: function ref(_ref2) {
						return _this6.input = _ref2;
					},
					role: 'combobox',
					style: { border: 0, width: 1, display: 'inline-block' },
					tabIndex: this.props.tabIndex || 0
				}));
			}

			if (this.props.autosize) {
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_input_autosize__WEBPACK_IMPORTED_MODULE_0___default.a, _extends({ id: this.props.id }, inputProps, { className: className, minWidth: '5' }));
			}
			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ className: className, key: 'input-wrap', style: { display: 'inline-block' } },
				react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('input', _extends({ id: this.props.id }, inputProps))
			);
		}
	}, {
		key: 'renderClear',
		value: function renderClear() {
			var valueArray = this.getValueArray(this.props.value);
			if (!this.props.clearable || !valueArray.length || this.props.disabled || this.props.isLoading) return;
			var ariaLabel = this.props.multi ? this.props.clearAllText : this.props.clearValueText;
			var clear = this.props.clearRenderer();

			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'span',
				{
					'aria-label': ariaLabel,
					className: 'Select-clear-zone',
					onMouseDown: this.clearValue,
					onTouchEnd: this.handleTouchEndClearValue,
					onTouchMove: this.handleTouchMove,
					onTouchStart: this.handleTouchStart,
					title: ariaLabel
				},
				clear
			);
		}
	}, {
		key: 'renderArrow',
		value: function renderArrow() {
			if (!this.props.arrowRenderer) return;

			var onMouseDown = this.handleMouseDownOnArrow;
			var isOpen = this.state.isOpen;
			var arrow = this.props.arrowRenderer({ onMouseDown: onMouseDown, isOpen: isOpen });

			if (!arrow) {
				return null;
			}

			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'span',
				{
					className: 'Select-arrow-zone',
					onMouseDown: onMouseDown
				},
				arrow
			);
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions$$1(excludeOptions) {
			var filterValue = this.state.inputValue;
			var options = this.props.options || [];
			if (this.props.filterOptions) {
				// Maintain backwards compatibility with boolean attribute
				var filterOptions$$1 = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : filterOptions;

				return filterOptions$$1(options, filterValue, excludeOptions, {
					filterOption: this.props.filterOption,
					ignoreAccents: this.props.ignoreAccents,
					ignoreCase: this.props.ignoreCase,
					labelKey: this.props.labelKey,
					matchPos: this.props.matchPos,
					matchProp: this.props.matchProp,
					trimFilter: this.props.trimFilter,
					valueKey: this.props.valueKey
				});
			} else {
				return options;
			}
		}
	}, {
		key: 'onOptionRef',
		value: function onOptionRef(ref, isFocused) {
			if (isFocused) {
				this.focused = ref;
			}
		}
	}, {
		key: 'renderMenu',
		value: function renderMenu(options, valueArray, focusedOption) {
			if (options && options.length) {
				return this.props.menuRenderer({
					focusedOption: focusedOption,
					focusOption: this.focusOption,
					inputValue: this.state.inputValue,
					instancePrefix: this._instancePrefix,
					labelKey: this.props.labelKey,
					onFocus: this.focusOption,
					onOptionRef: this.onOptionRef,
					onSelect: this.selectValue,
					optionClassName: this.props.optionClassName,
					optionComponent: this.props.optionComponent,
					optionRenderer: this.props.optionRenderer || this.getOptionLabel,
					options: options,
					removeValue: this.removeValue,
					selectValue: this.selectValue,
					valueArray: valueArray,
					valueKey: this.props.valueKey
				});
			} else if (this.props.noResultsText) {
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					'div',
					{ className: 'Select-noresults' },
					this.props.noResultsText
				);
			} else {
				return null;
			}
		}
	}, {
		key: 'renderHiddenField',
		value: function renderHiddenField(valueArray) {
			var _this7 = this;

			if (!this.props.name) return;
			if (this.props.joinValues) {
				var value = valueArray.map(function (i) {
					return stringifyValue(i[_this7.props.valueKey]);
				}).join(this.props.delimiter);
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('input', {
					disabled: this.props.disabled,
					name: this.props.name,
					ref: function ref(_ref3) {
						return _this7.value = _ref3;
					},
					type: 'hidden',
					value: value
				});
			}
			return valueArray.map(function (item, index) {
				return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('input', {
					disabled: _this7.props.disabled,
					key: 'hidden.' + index,
					name: _this7.props.name,
					ref: 'value' + index,
					type: 'hidden',
					value: stringifyValue(item[_this7.props.valueKey])
				});
			});
		}
	}, {
		key: 'getFocusableOptionIndex',
		value: function getFocusableOptionIndex(selectedOption) {
			var options = this._visibleOptions;
			if (!options.length) return null;

			var valueKey = this.props.valueKey;
			var focusedOption = this.state.focusedOption || selectedOption;
			if (focusedOption && !focusedOption.disabled) {
				var focusedOptionIndex = -1;
				options.some(function (option, index) {
					var isOptionEqual = option[valueKey] === focusedOption[valueKey];
					if (isOptionEqual) {
						focusedOptionIndex = index;
					}
					return isOptionEqual;
				});
				if (focusedOptionIndex !== -1) {
					return focusedOptionIndex;
				}
			}

			for (var i = 0; i < options.length; i++) {
				if (!options[i].disabled) return i;
			}
			return null;
		}
	}, {
		key: 'renderOuter',
		value: function renderOuter(options, valueArray, focusedOption) {
			var _this8 = this;

			var menu = this.renderMenu(options, valueArray, focusedOption);
			if (!menu) {
				return null;
			}

			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ ref: function ref(_ref5) {
						return _this8.menuContainer = _ref5;
					}, className: 'Select-menu-outer', style: this.props.menuContainerStyle },
				react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					'div',
					{
						className: 'Select-menu',
						id: this._instancePrefix + '-list',
						onMouseDown: this.handleMouseDownOnMenu,
						onScroll: this.handleMenuScroll,
						ref: function ref(_ref4) {
							return _this8.menu = _ref4;
						},
						role: 'listbox',
						style: this.props.menuStyle,
						tabIndex: -1
					},
					menu
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this9 = this;

			var valueArray = this.getValueArray(this.props.value);
			var options = this._visibleOptions = this.filterOptions(this.props.multi && this.props.removeSelected ? valueArray : null);
			var isOpen = this.state.isOpen;
			if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue) isOpen = false;
			var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);

			var focusedOption = null;
			if (focusedOptionIndex !== null) {
				focusedOption = this._focusedOption = options[focusedOptionIndex];
			} else {
				focusedOption = this._focusedOption = null;
			}
			var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('Select', this.props.className, {
				'has-value': valueArray.length,
				'is-clearable': this.props.clearable,
				'is-disabled': this.props.disabled,
				'is-focused': this.state.isFocused,
				'is-loading': this.props.isLoading,
				'is-open': isOpen,
				'is-pseudo-focused': this.state.isPseudoFocused,
				'is-searchable': this.props.searchable,
				'Select--multi': this.props.multi,
				'Select--rtl': this.props.rtl,
				'Select--single': !this.props.multi
			});

			var removeMessage = null;
			if (this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves) {
				removeMessage = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					'span',
					{ id: this._instancePrefix + '-backspace-remove-message', className: 'Select-aria-only', 'aria-live': 'assertive' },
					this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey])
				);
			}

			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				'div',
				{ ref: function ref(_ref7) {
						return _this9.wrapper = _ref7;
					},
					className: className,
					style: this.props.wrapperStyle },
				this.renderHiddenField(valueArray),
				react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
					'div',
					{ ref: function ref(_ref6) {
							return _this9.control = _ref6;
						},
						className: 'Select-control',
						onKeyDown: this.handleKeyDown,
						onMouseDown: this.handleMouseDown,
						onTouchEnd: this.handleTouchEnd,
						onTouchMove: this.handleTouchMove,
						onTouchStart: this.handleTouchStart,
						style: this.props.style
					},
					react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
						'div',
						{ className: 'Select-multi-value-wrapper', id: this._instancePrefix + '-value' },
						this.renderValue(valueArray, isOpen),
						this.renderInput(valueArray, focusedOptionIndex)
					),
					removeMessage,
					this.renderLoading(),
					this.renderClear(),
					this.renderArrow()
				),
				isOpen ? this.renderOuter(options, valueArray, focusedOption) : null
			);
		}
	}]);
	return Select;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Select$1.propTypes = {
	'aria-describedby': prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // html id(s) of element(s) that should be used to describe this input (for assistive tech)
	'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // aria label (for assistive tech)
	'aria-labelledby': prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // html id of an element that should be used as the label (for assistive tech)
	arrowRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // create the drop-down caret element
	autoBlur: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // automatically blur the component when an option is selected
	autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // autofocus the component on mount
	autofocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // deprecated; use autoFocus instead
	autosize: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to enable autosizing or not
	backspaceRemoves: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether backspace removes an item if there is no text input
	backspaceToRemoveMessage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
	className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // className for the outer element
	clearAllText: stringOrNode, // title for the "clear" control when multi: true
	clearRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // create clearable x element
	clearValueText: stringOrNode, // title for the "clear" control
	clearable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // should it be possible to reset value
	closeOnSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to close the menu when a value is selected
	deleteRemoves: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether delete removes an item if there is no text input
	delimiter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // delimiter to use to join multiple values for the hidden field value
	disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether the Select is disabled or not
	escapeClearsValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether escape clears the value when the menu is closed
	filterOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // method to filter a single option (option, filterString)
	filterOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any, // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
	id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // html id to set on the input element for accessibility or tests
	ignoreAccents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to strip diacritics when filtering
	ignoreCase: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to perform case-insensitive filtering
	inputProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, // custom attributes for the Input
	inputRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // returns a custom input component
	instanceId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // set the components instanceId
	isLoading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether the Select is loading externally or not (such as options being loaded)
	joinValues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // joins multiple values into a single form field with the delimiter (legacy mode)
	labelKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // path of the label value in option objects
	matchPos: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // (any|start) match the start or entire string when filtering
	matchProp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // (any|label|value) which option property to filter on
	menuBuffer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
	menuContainerStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, // optional style to apply to the menu container
	menuRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // renders a custom menu with options
	menuStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, // optional style to apply to the menu
	multi: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // multi-value input
	name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // generates a hidden <input /> tag with this field name for html forms
	noResultsText: stringOrNode, // placeholder displayed when there are no matching search results
	onBlur: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onBlur handler: function (event) {}
	onBlurResetsInput: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether input is cleared on blur
	onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onChange handler: function (newValue) {}
	onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // fires when the menu is closed
	onCloseResetsInput: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether input is cleared when menu is closed through the arrow
	onFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onFocus handler: function (event) {}
	onInputChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onInputChange handler: function (inputValue) {}
	onInputKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // input keyDown handler: function (event) {}
	onMenuScrollToBottom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
	onOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // fires when the menu is opened
	onSelectResetsInput: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether input is cleared on select (works only for multiselect)
	onValueClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onClick handler for value labels: function (value, event) {}
	openOnClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // boolean to control opening the menu when the control is clicked
	openOnFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // always open options menu on focus
	optionClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // additional class(es) to apply to the <Option /> elements
	optionComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // option component to render in dropdown
	optionRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // optionRenderer: function (option) {}
	options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array, // array of options
	pageSize: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, // number of entries to page when using page up/down keys
	placeholder: stringOrNode, // field placeholder, displayed when there's no value
	removeSelected: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether the selected option is removed from the dropdown on multi selects
	required: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // applies HTML5 required attribute when needed
	resetValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any, // value to use when you clear the control
	rtl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // set to true in order to use react-select in right-to-left direction
	scrollMenuIntoView: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
	searchable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to enable searching feature or not
	simpleValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
	style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, // optional style to apply to the control
	tabIndex: stringOrNumber, // optional tab index of the control
	tabSelectsValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to treat tabbing out while focused to be value selection
	trimFilter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // whether to trim whitespace around filter value
	value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any, // initial field value
	valueComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // value component to render
	valueKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, // path of the label value in option objects
	valueRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // valueRenderer: function (option) {}
	wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object // optional style to apply to the component wrapper
};

Select$1.defaultProps = {
	arrowRenderer: arrowRenderer,
	autosize: true,
	backspaceRemoves: true,
	backspaceToRemoveMessage: 'Press backspace to remove {label}',
	clearable: true,
	clearAllText: 'Clear all',
	clearRenderer: clearRenderer,
	clearValueText: 'Clear value',
	closeOnSelect: true,
	deleteRemoves: true,
	delimiter: ',',
	disabled: false,
	escapeClearsValue: true,
	filterOptions: filterOptions,
	ignoreAccents: true,
	ignoreCase: true,
	inputProps: {},
	isLoading: false,
	joinValues: false,
	labelKey: 'label',
	matchPos: 'any',
	matchProp: 'any',
	menuBuffer: 0,
	menuRenderer: menuRenderer,
	multi: false,
	noResultsText: 'No results found',
	onBlurResetsInput: true,
	onCloseResetsInput: true,
	onSelectResetsInput: true,
	openOnClick: true,
	optionComponent: Option,
	pageSize: 5,
	placeholder: 'Select...',
	removeSelected: true,
	required: false,
	rtl: false,
	scrollMenuIntoView: true,
	searchable: true,
	simpleValue: false,
	tabSelectsValue: true,
	trimFilter: true,
	valueComponent: Value,
	valueKey: 'value'
};

var propTypes = {
	autoload: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired, // automatically call the `loadOptions` prop on-mount; defaults to true
	cache: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any, // object to use to cache results; set to null/false to disable caching
	children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
	ignoreAccents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // strip diacritics when filtering; defaults to true
	ignoreCase: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // perform case-insensitive filtering; defaults to true
	loadOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
	loadingPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([// replaces the placeholder while options are loading
	prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
	multi: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, // multi-value input
	noResultsText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([// field noResultsText, displayed when no options come back from the server
	prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
	onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // onChange handler: function (newValue) {}
	onInputChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, // optional for keeping track of what is being typed
	options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired, // array of options
	placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([// field placeholder, displayed when there's no value (shared with Select)
	prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
	searchPromptText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([// label to prompt for search input
	prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
	value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any // initial field value
};

var defaultCache = {};

var defaultChildren = function defaultChildren(props) {
	return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Select$1, props);
};

var defaultProps = {
	autoload: true,
	cache: defaultCache,
	children: defaultChildren,
	ignoreAccents: true,
	ignoreCase: true,
	loadingPlaceholder: 'Loading...',
	options: [],
	searchPromptText: 'Type to search'
};

var Async = function (_Component) {
	inherits(Async, _Component);

	function Async(props, context) {
		classCallCheck(this, Async);

		var _this = possibleConstructorReturn(this, (Async.__proto__ || Object.getPrototypeOf(Async)).call(this, props, context));

		_this._cache = props.cache === defaultCache ? {} : props.cache;

		_this.state = {
			inputValue: '',
			isLoading: false,
			options: props.options
		};

		_this.onInputChange = _this.onInputChange.bind(_this);
		return _this;
	}

	createClass(Async, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var autoload = this.props.autoload;


			if (autoload) {
				this.loadOptions('');
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.options !== this.props.options) {
				this.setState({
					options: nextProps.options
				});
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this._callback = null;
		}
	}, {
		key: 'loadOptions',
		value: function loadOptions(inputValue) {
			var _this2 = this;

			var loadOptions = this.props.loadOptions;

			var cache = this._cache;

			if (cache && Object.prototype.hasOwnProperty.call(cache, inputValue)) {
				this._callback = null;

				this.setState({
					isLoading: false,
					options: cache[inputValue]
				});

				return;
			}

			var callback = function callback(error, data) {
				var options = data && data.options || [];

				if (cache) {
					cache[inputValue] = options;
				}

				if (callback === _this2._callback) {
					_this2._callback = null;

					_this2.setState({
						isLoading: false,
						options: options
					});
				}
			};

			// Ignore all but the most recent request
			this._callback = callback;

			var promise = loadOptions(inputValue, callback);
			if (promise) {
				promise.then(function (data) {
					return callback(null, data);
				}, function (error) {
					return callback(error);
				});
			}

			if (this._callback && !this.state.isLoading) {
				this.setState({
					isLoading: true
				});
			}
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(inputValue) {
			var _props = this.props,
			    ignoreAccents = _props.ignoreAccents,
			    ignoreCase = _props.ignoreCase,
			    onInputChange = _props.onInputChange;

			var newInputValue = inputValue;

			if (onInputChange) {
				var value = onInputChange(newInputValue);
				// Note: != used deliberately here to catch undefined and null
				if (value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
					newInputValue = '' + value;
				}
			}

			var transformedInputValue = newInputValue;

			if (ignoreAccents) {
				transformedInputValue = stripDiacritics(transformedInputValue);
			}

			if (ignoreCase) {
				transformedInputValue = transformedInputValue.toLowerCase();
			}

			this.setState({ inputValue: newInputValue });
			this.loadOptions(transformedInputValue);

			// Return new input value, but without applying toLowerCase() to avoid modifying the user's view case of the input while typing.
			return newInputValue;
		}
	}, {
		key: 'noResultsText',
		value: function noResultsText() {
			var _props2 = this.props,
			    loadingPlaceholder = _props2.loadingPlaceholder,
			    noResultsText = _props2.noResultsText,
			    searchPromptText = _props2.searchPromptText;
			var _state = this.state,
			    inputValue = _state.inputValue,
			    isLoading = _state.isLoading;


			if (isLoading) {
				return loadingPlaceholder;
			}
			if (inputValue && noResultsText) {
				return noResultsText;
			}
			return searchPromptText;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props3 = this.props,
			    children = _props3.children,
			    loadingPlaceholder = _props3.loadingPlaceholder,
			    placeholder = _props3.placeholder;
			var _state2 = this.state,
			    isLoading = _state2.isLoading,
			    options = _state2.options;


			var props = {
				noResultsText: this.noResultsText(),
				placeholder: isLoading ? loadingPlaceholder : placeholder,
				options: isLoading && loadingPlaceholder ? [] : options,
				ref: function ref(_ref) {
					return _this3.select = _ref;
				}
			};

			return children(_extends({}, this.props, props, {
				isLoading: isLoading,
				onInputChange: this.onInputChange
			}));
		}
	}]);
	return Async;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

Async.propTypes = propTypes;
Async.defaultProps = defaultProps;

var CreatableSelect = function (_React$Component) {
	inherits(CreatableSelect, _React$Component);

	function CreatableSelect(props, context) {
		classCallCheck(this, CreatableSelect);

		var _this = possibleConstructorReturn(this, (CreatableSelect.__proto__ || Object.getPrototypeOf(CreatableSelect)).call(this, props, context));

		_this.filterOptions = _this.filterOptions.bind(_this);
		_this.menuRenderer = _this.menuRenderer.bind(_this);
		_this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
		_this.onInputChange = _this.onInputChange.bind(_this);
		_this.onOptionSelect = _this.onOptionSelect.bind(_this);
		return _this;
	}

	createClass(CreatableSelect, [{
		key: 'createNewOption',
		value: function createNewOption() {
			var _props = this.props,
			    isValidNewOption = _props.isValidNewOption,
			    newOptionCreator = _props.newOptionCreator,
			    onNewOptionClick = _props.onNewOptionClick,
			    _props$options = _props.options,
			    options = _props$options === undefined ? [] : _props$options;


			if (isValidNewOption({ label: this.inputValue })) {
				var option = newOptionCreator({ label: this.inputValue, labelKey: this.labelKey, valueKey: this.valueKey });
				var _isOptionUnique = this.isOptionUnique({ option: option, options: options });

				// Don't add the same option twice.
				if (_isOptionUnique) {
					if (onNewOptionClick) {
						onNewOptionClick(option);
					} else {
						options.unshift(option);

						this.select.selectValue(option);
					}
				}
			}
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions$$1() {
			var _props2 = this.props,
			    filterOptions$$1 = _props2.filterOptions,
			    isValidNewOption = _props2.isValidNewOption,
			    promptTextCreator = _props2.promptTextCreator,
			    showNewOptionAtTop = _props2.showNewOptionAtTop;

			// TRICKY Check currently selected options as well.
			// Don't display a create-prompt for a value that's selected.
			// This covers async edge-cases where a newly-created Option isn't yet in the async-loaded array.

			var excludeOptions = (arguments.length <= 2 ? undefined : arguments[2]) || [];

			var filteredOptions = filterOptions$$1.apply(undefined, arguments) || [];

			if (isValidNewOption({ label: this.inputValue })) {
				var _newOptionCreator = this.props.newOptionCreator;


				var option = _newOptionCreator({
					label: this.inputValue,
					labelKey: this.labelKey,
					valueKey: this.valueKey
				});

				// TRICKY Compare to all options (not just filtered options) in case option has already been selected).
				// For multi-selects, this would remove it from the filtered list.
				var _isOptionUnique2 = this.isOptionUnique({
					option: option,
					options: excludeOptions.concat(filteredOptions)
				});

				if (_isOptionUnique2) {
					var prompt = promptTextCreator(this.inputValue);

					this._createPlaceholderOption = _newOptionCreator({
						label: prompt,
						labelKey: this.labelKey,
						valueKey: this.valueKey
					});

					if (showNewOptionAtTop) {
						filteredOptions.unshift(this._createPlaceholderOption);
					} else {
						filteredOptions.push(this._createPlaceholderOption);
					}
				}
			}

			return filteredOptions;
		}
	}, {
		key: 'isOptionUnique',
		value: function isOptionUnique(_ref) {
			var option = _ref.option,
			    options = _ref.options;
			var isOptionUnique = this.props.isOptionUnique;


			options = options || this.props.options;

			return isOptionUnique({
				labelKey: this.labelKey,
				option: option,
				options: options,
				valueKey: this.valueKey
			});
		}
	}, {
		key: 'menuRenderer',
		value: function menuRenderer$$1(params) {
			var menuRenderer$$1 = this.props.menuRenderer;


			return menuRenderer$$1(_extends({}, params, {
				onSelect: this.onOptionSelect,
				selectValue: this.onOptionSelect
			}));
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(input) {
			var onInputChange = this.props.onInputChange;

			// This value may be needed in between Select mounts (when this.select is null)

			this.inputValue = input;

			if (onInputChange) {
				this.inputValue = onInputChange(input);
			}

			return this.inputValue;
		}
	}, {
		key: 'onInputKeyDown',
		value: function onInputKeyDown(event) {
			var _props3 = this.props,
			    shouldKeyDownEventCreateNewOption = _props3.shouldKeyDownEventCreateNewOption,
			    onInputKeyDown = _props3.onInputKeyDown;

			var focusedOption = this.select.getFocusedOption();

			if (focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption(event)) {
				this.createNewOption();

				// Prevent decorated Select from doing anything additional with this keyDown event
				event.preventDefault();
			} else if (onInputKeyDown) {
				onInputKeyDown(event);
			}
		}
	}, {
		key: 'onOptionSelect',
		value: function onOptionSelect(option) {
			if (option === this._createPlaceholderOption) {
				this.createNewOption();
			} else {
				this.select.selectValue(option);
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props4 = this.props,
			    refProp = _props4.ref,
			    restProps = objectWithoutProperties(_props4, ['ref']);
			var children = this.props.children;

			// We can't use destructuring default values to set the children,
			// because it won't apply work if `children` is null. A falsy check is
			// more reliable in real world use-cases.

			if (!children) {
				children = defaultChildren$2;
			}

			var props = _extends({}, restProps, {
				allowCreate: true,
				filterOptions: this.filterOptions,
				menuRenderer: this.menuRenderer,
				onInputChange: this.onInputChange,
				onInputKeyDown: this.onInputKeyDown,
				ref: function ref(_ref2) {
					_this2.select = _ref2;

					// These values may be needed in between Select mounts (when this.select is null)
					if (_ref2) {
						_this2.labelKey = _ref2.props.labelKey;
						_this2.valueKey = _ref2.props.valueKey;
					}
					if (refProp) {
						refProp(_ref2);
					}
				}
			});

			return children(props);
		}
	}]);
	return CreatableSelect;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var defaultChildren$2 = function defaultChildren(props) {
	return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Select$1, props);
};

var isOptionUnique = function isOptionUnique(_ref3) {
	var option = _ref3.option,
	    options = _ref3.options,
	    labelKey = _ref3.labelKey,
	    valueKey = _ref3.valueKey;

	if (!options || !options.length) {
		return true;
	}

	return options.filter(function (existingOption) {
		return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
	}).length === 0;
};

var isValidNewOption = function isValidNewOption(_ref4) {
	var label = _ref4.label;
	return !!label;
};

var newOptionCreator = function newOptionCreator(_ref5) {
	var label = _ref5.label,
	    labelKey = _ref5.labelKey,
	    valueKey = _ref5.valueKey;

	var option = {};
	option[valueKey] = label;
	option[labelKey] = label;
	option.className = 'Select-create-option-placeholder';

	return option;
};

var promptTextCreator = function promptTextCreator(label) {
	return 'Create option "' + label + '"';
};

var shouldKeyDownEventCreateNewOption = function shouldKeyDownEventCreateNewOption(_ref6) {
	var keyCode = _ref6.keyCode;

	switch (keyCode) {
		case 9: // TAB
		case 13: // ENTER
		case 188:
			// COMMA
			return true;
		default:
			return false;
	}
};

// Default prop methods
CreatableSelect.isOptionUnique = isOptionUnique;
CreatableSelect.isValidNewOption = isValidNewOption;
CreatableSelect.newOptionCreator = newOptionCreator;
CreatableSelect.promptTextCreator = promptTextCreator;
CreatableSelect.shouldKeyDownEventCreateNewOption = shouldKeyDownEventCreateNewOption;

CreatableSelect.defaultProps = {
	filterOptions: filterOptions,
	isOptionUnique: isOptionUnique,
	isValidNewOption: isValidNewOption,
	menuRenderer: menuRenderer,
	newOptionCreator: newOptionCreator,
	promptTextCreator: promptTextCreator,
	shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption,
	showNewOptionAtTop: true
};

CreatableSelect.propTypes = {
	// Child function responsible for creating the inner Select component
	// This component can be used to compose HOCs (eg Creatable and Async)
	// (props: Object): PropTypes.element
	children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// See Select.propTypes.filterOptions
	filterOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,

	// Searches for any matching option within the set of options.
	// This function prevents duplicate options from being created.
	// ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
	isOptionUnique: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// Determines if the current input text represents a valid option.
	// ({ label: string }): boolean
	isValidNewOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// See Select.propTypes.menuRenderer
	menuRenderer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,

	// Factory to create new option.
	// ({ label: string, labelKey: string, valueKey: string }): Object
	newOptionCreator: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// input change handler: function (inputValue) {}
	onInputChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// input keyDown handler: function (event) {}
	onInputKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// new option click handler: function (option) {}
	onNewOptionClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// See Select.propTypes.options
	options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,

	// Creates prompt/placeholder option text.
	// (filterText: string): string
	promptTextCreator: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	ref: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
	shouldKeyDownEventCreateNewOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

	// Where to show prompt/placeholder option text.
	// true: new option prompt at top of list (default)
	// false: new option prompt at bottom of list
	showNewOptionAtTop: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

var AsyncCreatableSelect = function (_React$Component) {
	inherits(AsyncCreatableSelect, _React$Component);

	function AsyncCreatableSelect() {
		classCallCheck(this, AsyncCreatableSelect);
		return possibleConstructorReturn(this, (AsyncCreatableSelect.__proto__ || Object.getPrototypeOf(AsyncCreatableSelect)).apply(this, arguments));
	}

	createClass(AsyncCreatableSelect, [{
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
				Async,
				this.props,
				function (_ref) {
					var ref = _ref.ref,
					    asyncProps = objectWithoutProperties(_ref, ['ref']);

					var asyncRef = ref;
					return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
						CreatableSelect,
						asyncProps,
						function (_ref2) {
							var ref = _ref2.ref,
							    creatableProps = objectWithoutProperties(_ref2, ['ref']);

							var creatableRef = ref;
							return _this2.props.children(_extends({}, creatableProps, {
								ref: function ref(select) {
									creatableRef(select);
									asyncRef(select);
									_this2.select = select;
								}
							}));
						}
					);
				}
			);
		}
	}]);
	return AsyncCreatableSelect;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var defaultChildren$1 = function defaultChildren(props) {
	return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Select$1, props);
};

AsyncCreatableSelect.propTypes = {
	children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
};

AsyncCreatableSelect.defaultProps = {
	children: defaultChildren$1
};

Select$1.Async = Async;
Select$1.AsyncCreatable = AsyncCreatableSelect;
Select$1.Creatable = CreatableSelect;
Select$1.Value = Value;
Select$1.Option = Option;


/* harmony default export */ __webpack_exports__["default"] = (Select$1);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35ib3RzfmRlcG9zaXQtd2l0aGRyYXcuMTcxMGNhYTkzYTBmYmQ1M2E2ZDEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvbm93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1hdXRvc2l6ZS9saWIvQXV0b3NpemVJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmltcG9ydCBub3cgZnJvbSAnLi9ub3cuanMnO1xuaW1wb3J0IHRvTnVtYmVyIGZyb20gJy4vdG9OdW1iZXIuanMnO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nXG4gICAgICA/IG5hdGl2ZU1pbih0aW1lV2FpdGluZywgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpXG4gICAgICA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYm91bmNlO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vdztcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBzaXplclN0eWxlID0ge1xuXHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0dG9wOiAwLFxuXHRsZWZ0OiAwLFxuXHR2aXNpYmlsaXR5OiAnaGlkZGVuJyxcblx0aGVpZ2h0OiAwLFxuXHRvdmVyZmxvdzogJ3Njcm9sbCcsXG5cdHdoaXRlU3BhY2U6ICdwcmUnXG59O1xuXG52YXIgSU5QVVRfUFJPUFNfQkxBQ0tMSVNUID0gWydleHRyYVdpZHRoJywgJ2luamVjdFN0eWxlcycsICdpbnB1dENsYXNzTmFtZScsICdpbnB1dFJlZicsICdpbnB1dFN0eWxlJywgJ21pbldpZHRoJywgJ29uQXV0b3NpemUnLCAncGxhY2Vob2xkZXJJc01pbldpZHRoJ107XG5cbnZhciBjbGVhbklucHV0UHJvcHMgPSBmdW5jdGlvbiBjbGVhbklucHV0UHJvcHMoaW5wdXRQcm9wcykge1xuXHRJTlBVVF9QUk9QU19CTEFDS0xJU1QuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcblx0XHRyZXR1cm4gZGVsZXRlIGlucHV0UHJvcHNbZmllbGRdO1xuXHR9KTtcblx0cmV0dXJuIGlucHV0UHJvcHM7XG59O1xuXG52YXIgY29weVN0eWxlcyA9IGZ1bmN0aW9uIGNvcHlTdHlsZXMoc3R5bGVzLCBub2RlKSB7XG5cdG5vZGUuc3R5bGUuZm9udFNpemUgPSBzdHlsZXMuZm9udFNpemU7XG5cdG5vZGUuc3R5bGUuZm9udEZhbWlseSA9IHN0eWxlcy5mb250RmFtaWx5O1xuXHRub2RlLnN0eWxlLmZvbnRXZWlnaHQgPSBzdHlsZXMuZm9udFdlaWdodDtcblx0bm9kZS5zdHlsZS5mb250U3R5bGUgPSBzdHlsZXMuZm9udFN0eWxlO1xuXHRub2RlLnN0eWxlLmxldHRlclNwYWNpbmcgPSBzdHlsZXMubGV0dGVyU3BhY2luZztcblx0bm9kZS5zdHlsZS50ZXh0VHJhbnNmb3JtID0gc3R5bGVzLnRleHRUcmFuc2Zvcm07XG59O1xuXG52YXIgaXNJRSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IgPyAvTVNJRSB8VHJpZGVudFxcL3xFZGdlXFwvLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSA6IGZhbHNlO1xuXG52YXIgZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uIGdlbmVyYXRlSWQoKSB7XG5cdC8vIHdlIG9ubHkgbmVlZCBhbiBhdXRvLWdlbmVyYXRlZCBJRCBmb3Igc3R5bGVzaGVldCBpbmplY3Rpb24sIHdoaWNoIGlzIG9ubHlcblx0Ly8gdXNlZCBmb3IgSUUuIHNvIGlmIHRoZSBicm93c2VyIGlzIG5vdCBJRSwgdGhpcyBzaG91bGQgcmV0dXJuIHVuZGVmaW5lZC5cblx0cmV0dXJuIGlzSUUgPyAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTIpIDogdW5kZWZpbmVkO1xufTtcblxudmFyIEF1dG9zaXplSW5wdXQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoQXV0b3NpemVJbnB1dCwgX0NvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gQXV0b3NpemVJbnB1dChwcm9wcykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdXRvc2l6ZUlucHV0KTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBdXRvc2l6ZUlucHV0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXV0b3NpemVJbnB1dCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdF90aGlzLmlucHV0UmVmID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRfdGhpcy5pbnB1dCA9IGVsO1xuXHRcdFx0aWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5pbnB1dFJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRfdGhpcy5wcm9wcy5pbnB1dFJlZihlbCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdF90aGlzLnBsYWNlSG9sZGVyU2l6ZXJSZWYgPSBmdW5jdGlvbiAoZWwpIHtcblx0XHRcdF90aGlzLnBsYWNlSG9sZGVyU2l6ZXIgPSBlbDtcblx0XHR9O1xuXG5cdFx0X3RoaXMuc2l6ZXJSZWYgPSBmdW5jdGlvbiAoZWwpIHtcblx0XHRcdF90aGlzLnNpemVyID0gZWw7XG5cdFx0fTtcblxuXHRcdF90aGlzLnN0YXRlID0ge1xuXHRcdFx0aW5wdXRXaWR0aDogcHJvcHMubWluV2lkdGgsXG5cdFx0XHRpbnB1dElkOiBwcm9wcy5pZCB8fCBnZW5lcmF0ZUlkKClcblx0XHR9O1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhBdXRvc2l6ZUlucHV0LCBbe1xuXHRcdGtleTogJ2NvbXBvbmVudERpZE1vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0XHR0aGlzLm1vdW50ZWQgPSB0cnVlO1xuXHRcdFx0dGhpcy5jb3B5SW5wdXRTdHlsZXMoKTtcblx0XHRcdHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXHRcdFx0dmFyIGlkID0gbmV4dFByb3BzLmlkO1xuXG5cdFx0XHRpZiAoaWQgIT09IHRoaXMucHJvcHMuaWQpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlucHV0SWQ6IGlkIHx8IGdlbmVyYXRlSWQoKSB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcblx0XHRcdGlmIChwcmV2U3RhdGUuaW5wdXRXaWR0aCAhPT0gdGhpcy5zdGF0ZS5pbnB1dFdpZHRoKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkF1dG9zaXplID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5vbkF1dG9zaXplKHRoaXMuc3RhdGUuaW5wdXRXaWR0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0XHR0aGlzLm1vdW50ZWQgPSBmYWxzZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb3B5SW5wdXRTdHlsZXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb3B5SW5wdXRTdHlsZXMoKSB7XG5cdFx0XHRpZiAoIXRoaXMubW91bnRlZCB8fCAhd2luZG93LmdldENvbXB1dGVkU3R5bGUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGlucHV0U3R5bGVzID0gdGhpcy5pbnB1dCAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmlucHV0KTtcblx0XHRcdGlmICghaW5wdXRTdHlsZXMpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29weVN0eWxlcyhpbnB1dFN0eWxlcywgdGhpcy5zaXplcik7XG5cdFx0XHRpZiAodGhpcy5wbGFjZUhvbGRlclNpemVyKSB7XG5cdFx0XHRcdGNvcHlTdHlsZXMoaW5wdXRTdHlsZXMsIHRoaXMucGxhY2VIb2xkZXJTaXplcik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAndXBkYXRlSW5wdXRXaWR0aCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUlucHV0V2lkdGgoKSB7XG5cdFx0XHRpZiAoIXRoaXMubW91bnRlZCB8fCAhdGhpcy5zaXplciB8fCB0eXBlb2YgdGhpcy5zaXplci5zY3JvbGxXaWR0aCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIG5ld0lucHV0V2lkdGggPSB2b2lkIDA7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5wbGFjZWhvbGRlciAmJiAoIXRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy52YWx1ZSAmJiB0aGlzLnByb3BzLnBsYWNlaG9sZGVySXNNaW5XaWR0aCkpIHtcblx0XHRcdFx0bmV3SW5wdXRXaWR0aCA9IE1hdGgubWF4KHRoaXMuc2l6ZXIuc2Nyb2xsV2lkdGgsIHRoaXMucGxhY2VIb2xkZXJTaXplci5zY3JvbGxXaWR0aCkgKyAyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bmV3SW5wdXRXaWR0aCA9IHRoaXMuc2l6ZXIuc2Nyb2xsV2lkdGggKyAyO1xuXHRcdFx0fVxuXHRcdFx0Ly8gYWRkIGV4dHJhV2lkdGggdG8gdGhlIGRldGVjdGVkIHdpZHRoLiBmb3IgbnVtYmVyIHR5cGVzLCB0aGlzIGRlZmF1bHRzIHRvIDE2IHRvIGFsbG93IGZvciB0aGUgc3RlcHBlciBVSVxuXHRcdFx0dmFyIGV4dHJhV2lkdGggPSB0aGlzLnByb3BzLnR5cGUgPT09ICdudW1iZXInICYmIHRoaXMucHJvcHMuZXh0cmFXaWR0aCA9PT0gdW5kZWZpbmVkID8gMTYgOiBwYXJzZUludCh0aGlzLnByb3BzLmV4dHJhV2lkdGgpIHx8IDA7XG5cdFx0XHRuZXdJbnB1dFdpZHRoICs9IGV4dHJhV2lkdGg7XG5cdFx0XHRpZiAobmV3SW5wdXRXaWR0aCA8IHRoaXMucHJvcHMubWluV2lkdGgpIHtcblx0XHRcdFx0bmV3SW5wdXRXaWR0aCA9IHRoaXMucHJvcHMubWluV2lkdGg7XG5cdFx0XHR9XG5cdFx0XHRpZiAobmV3SW5wdXRXaWR0aCAhPT0gdGhpcy5zdGF0ZS5pbnB1dFdpZHRoKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlucHV0V2lkdGg6IG5ld0lucHV0V2lkdGhcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZ2V0SW5wdXQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRJbnB1dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmlucHV0O1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG5cdFx0XHR0aGlzLmlucHV0LmZvY3VzKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnYmx1cicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG5cdFx0XHR0aGlzLmlucHV0LmJsdXIoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdzZWxlY3QnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZWxlY3QoKSB7XG5cdFx0XHR0aGlzLmlucHV0LnNlbGVjdCgpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlclN0eWxlcycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlclN0eWxlcygpIHtcblx0XHRcdC8vIHRoaXMgbWV0aG9kIGluamVjdHMgc3R5bGVzIHRvIGhpZGUgSUUncyBjbGVhciBpbmRpY2F0b3IsIHdoaWNoIG1lc3Nlc1xuXHRcdFx0Ly8gd2l0aCBpbnB1dCBzaXplIGRldGVjdGlvbi4gdGhlIHN0eWxlc2hlZXQgaXMgb25seSBpbmplY3RlZCB3aGVuIHRoZVxuXHRcdFx0Ly8gYnJvd3NlciBpcyBJRSwgYW5kIGNhbiBhbHNvIGJlIGRpc2FibGVkIGJ5IHRoZSBgaW5qZWN0U3R5bGVzYCBwcm9wLlxuXHRcdFx0dmFyIGluamVjdFN0eWxlcyA9IHRoaXMucHJvcHMuaW5qZWN0U3R5bGVzO1xuXG5cdFx0XHRyZXR1cm4gaXNJRSAmJiBpbmplY3RTdHlsZXMgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3R5bGUnLCB7IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG5cdFx0XHRcdFx0X19odG1sOiAnaW5wdXQjJyArIHRoaXMuc3RhdGUuaW5wdXRJZCArICc6Oi1tcy1jbGVhciB7ZGlzcGxheTogbm9uZTt9J1xuXHRcdFx0XHR9IH0pIDogbnVsbDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgc2l6ZXJWYWx1ZSA9IFt0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSwgdGhpcy5wcm9wcy52YWx1ZSwgJyddLnJlZHVjZShmdW5jdGlvbiAocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSB7XG5cdFx0XHRcdGlmIChwcmV2aW91c1ZhbHVlICE9PSBudWxsICYmIHByZXZpb3VzVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHJldHVybiBwcmV2aW91c1ZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBjdXJyZW50VmFsdWU7XG5cdFx0XHR9KTtcblxuXHRcdFx0dmFyIHdyYXBwZXJTdHlsZSA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLnN0eWxlKTtcblx0XHRcdGlmICghd3JhcHBlclN0eWxlLmRpc3BsYXkpIHdyYXBwZXJTdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG5cblx0XHRcdHZhciBpbnB1dFN0eWxlID0gX2V4dGVuZHMoe1xuXHRcdFx0XHRib3hTaXppbmc6ICdjb250ZW50LWJveCcsXG5cdFx0XHRcdHdpZHRoOiB0aGlzLnN0YXRlLmlucHV0V2lkdGggKyAncHgnXG5cdFx0XHR9LCB0aGlzLnByb3BzLmlucHV0U3R5bGUpO1xuXG5cdFx0XHR2YXIgaW5wdXRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyh0aGlzLnByb3BzLCBbXSk7XG5cblx0XHRcdGNsZWFuSW5wdXRQcm9wcyhpbnB1dFByb3BzKTtcblx0XHRcdGlucHV0UHJvcHMuY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5pbnB1dENsYXNzTmFtZTtcblx0XHRcdGlucHV0UHJvcHMuaWQgPSB0aGlzLnN0YXRlLmlucHV0SWQ7XG5cdFx0XHRpbnB1dFByb3BzLnN0eWxlID0gaW5wdXRTdHlsZTtcblxuXHRcdFx0cmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lLCBzdHlsZTogd3JhcHBlclN0eWxlIH0sXG5cdFx0XHRcdHRoaXMucmVuZGVyU3R5bGVzKCksXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIF9leHRlbmRzKHt9LCBpbnB1dFByb3BzLCB7IHJlZjogdGhpcy5pbnB1dFJlZiB9KSksXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgcmVmOiB0aGlzLnNpemVyUmVmLCBzdHlsZTogc2l6ZXJTdHlsZSB9LFxuXHRcdFx0XHRcdHNpemVyVmFsdWVcblx0XHRcdFx0KSxcblx0XHRcdFx0dGhpcy5wcm9wcy5wbGFjZWhvbGRlciA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgcmVmOiB0aGlzLnBsYWNlSG9sZGVyU2l6ZXJSZWYsIHN0eWxlOiBzaXplclN0eWxlIH0sXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5wbGFjZWhvbGRlclxuXHRcdFx0XHQpIDogbnVsbFxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gQXV0b3NpemVJbnB1dDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkF1dG9zaXplSW5wdXQucHJvcFR5cGVzID0ge1xuXHRjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyBjbGFzc05hbWUgZm9yIHRoZSBvdXRlciBlbGVtZW50XG5cdGRlZmF1bHRWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksIC8vIGRlZmF1bHQgZmllbGQgdmFsdWVcblx0ZXh0cmFXaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoWy8vIGFkZGl0aW9uYWwgd2lkdGggZm9yIGlucHV0IGVsZW1lbnRcblx0X3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXSksXG5cdGlkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gaWQgdG8gdXNlIGZvciB0aGUgaW5wdXQsIGNhbiBiZSBzZXQgZm9yIGNvbnNpc3RlbnQgc25hcHNob3RzXG5cdGluamVjdFN0eWxlczogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyBpbmplY3QgdGhlIGN1c3RvbSBzdHlsZXNoZWV0IHRvIGhpZGUgY2xlYXIgVUksIGRlZmF1bHRzIHRvIHRydWVcblx0aW5wdXRDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyBjbGFzc05hbWUgZm9yIHRoZSBpbnB1dCBlbGVtZW50XG5cdGlucHV0UmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIHJlZiBjYWxsYmFjayBmb3IgdGhlIGlucHV0IGVsZW1lbnRcblx0aW5wdXRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIC8vIGNzcyBzdHlsZXMgZm9yIHRoZSBpbnB1dCBlbGVtZW50XG5cdG1pbldpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbLy8gbWluaW11bSB3aWR0aCBmb3IgaW5wdXQgZWxlbWVudFxuXHRfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlciwgX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmddKSxcblx0b25BdXRvc2l6ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBvbkF1dG9zaXplIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1dpZHRoKSB7fVxuXHRvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBvbkNoYW5nZSBoYW5kbGVyOiBmdW5jdGlvbihldmVudCkge31cblx0cGxhY2Vob2xkZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyBwbGFjZWhvbGRlciB0ZXh0XG5cdHBsYWNlaG9sZGVySXNNaW5XaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyBkb24ndCBjb2xsYXBzZSBzaXplIHRvIGxlc3MgdGhhbiB0aGUgcGxhY2Vob2xkZXJcblx0c3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCAvLyBjc3Mgc3R5bGVzIGZvciB0aGUgb3V0ZXIgZWxlbWVudFxuXHR2YWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnkgLy8gZmllbGQgdmFsdWVcbn07XG5BdXRvc2l6ZUlucHV0LmRlZmF1bHRQcm9wcyA9IHtcblx0bWluV2lkdGg6IDEsXG5cdGluamVjdFN0eWxlczogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQXV0b3NpemVJbnB1dDsiLCJpbXBvcnQgQXV0b3NpemVJbnB1dCBmcm9tICdyZWFjdC1pbnB1dC1hdXRvc2l6ZSc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuXG52YXIgYXJyb3dSZW5kZXJlciA9IGZ1bmN0aW9uIGFycm93UmVuZGVyZXIoX3JlZikge1xuXHR2YXIgb25Nb3VzZURvd24gPSBfcmVmLm9uTW91c2VEb3duO1xuXG5cdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge1xuXHRcdGNsYXNzTmFtZTogJ1NlbGVjdC1hcnJvdycsXG5cdFx0b25Nb3VzZURvd246IG9uTW91c2VEb3duXG5cdH0pO1xufTtcblxuYXJyb3dSZW5kZXJlci5wcm9wVHlwZXMgPSB7XG5cdG9uTW91c2VEb3duOiBQcm9wVHlwZXMuZnVuY1xufTtcblxudmFyIGNsZWFyUmVuZGVyZXIgPSBmdW5jdGlvbiBjbGVhclJlbmRlcmVyKCkge1xuXHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcblx0XHRjbGFzc05hbWU6ICdTZWxlY3QtY2xlYXInLFxuXHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogJyZ0aW1lczsnIH1cblx0fSk7XG59O1xuXG52YXIgbWFwID0gW3sgJ2Jhc2UnOiAnQScsICdsZXR0ZXJzJzogL1tcXHUwMDQxXFx1MjRCNlxcdUZGMjFcXHUwMEMwXFx1MDBDMVxcdTAwQzJcXHUxRUE2XFx1MUVBNFxcdTFFQUFcXHUxRUE4XFx1MDBDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx1MDBDNFxcdTAxREVcXHUxRUEyXFx1MDBDNVxcdTAxRkFcXHUwMUNEXFx1MDIwMFxcdTAyMDJcXHUxRUEwXFx1MUVBQ1xcdTFFQjZcXHUxRTAwXFx1MDEwNFxcdTAyM0FcXHUyQzZGXS9nIH0sIHsgJ2Jhc2UnOiAnQUEnLCAnbGV0dGVycyc6IC9bXFx1QTczMl0vZyB9LCB7ICdiYXNlJzogJ0FFJywgJ2xldHRlcnMnOiAvW1xcdTAwQzZcXHUwMUZDXFx1MDFFMl0vZyB9LCB7ICdiYXNlJzogJ0FPJywgJ2xldHRlcnMnOiAvW1xcdUE3MzRdL2cgfSwgeyAnYmFzZSc6ICdBVScsICdsZXR0ZXJzJzogL1tcXHVBNzM2XS9nIH0sIHsgJ2Jhc2UnOiAnQVYnLCAnbGV0dGVycyc6IC9bXFx1QTczOFxcdUE3M0FdL2cgfSwgeyAnYmFzZSc6ICdBWScsICdsZXR0ZXJzJzogL1tcXHVBNzNDXS9nIH0sIHsgJ2Jhc2UnOiAnQicsICdsZXR0ZXJzJzogL1tcXHUwMDQyXFx1MjRCN1xcdUZGMjJcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUwMjQzXFx1MDE4MlxcdTAxODFdL2cgfSwgeyAnYmFzZSc6ICdDJywgJ2xldHRlcnMnOiAvW1xcdTAwNDNcXHUyNEI4XFx1RkYyM1xcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMEM3XFx1MUUwOFxcdTAxODdcXHUwMjNCXFx1QTczRV0vZyB9LCB7ICdiYXNlJzogJ0QnLCAnbGV0dGVycyc6IC9bXFx1MDA0NFxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEJcXHUwMThBXFx1MDE4OVxcdUE3NzldL2cgfSwgeyAnYmFzZSc6ICdEWicsICdsZXR0ZXJzJzogL1tcXHUwMUYxXFx1MDFDNF0vZyB9LCB7ICdiYXNlJzogJ0R6JywgJ2xldHRlcnMnOiAvW1xcdTAxRjJcXHUwMUM1XS9nIH0sIHsgJ2Jhc2UnOiAnRScsICdsZXR0ZXJzJzogL1tcXHUwMDQ1XFx1MjRCQVxcdUZGMjVcXHUwMEM4XFx1MDBDOVxcdTAwQ0FcXHUxRUMwXFx1MUVCRVxcdTFFQzRcXHUxRUMyXFx1MUVCQ1xcdTAxMTJcXHUxRTE0XFx1MUUxNlxcdTAxMTRcXHUwMTE2XFx1MDBDQlxcdTFFQkFcXHUwMTFBXFx1MDIwNFxcdTAyMDZcXHUxRUI4XFx1MUVDNlxcdTAyMjhcXHUxRTFDXFx1MDExOFxcdTFFMThcXHUxRTFBXFx1MDE5MFxcdTAxOEVdL2cgfSwgeyAnYmFzZSc6ICdGJywgJ2xldHRlcnMnOiAvW1xcdTAwNDZcXHUyNEJCXFx1RkYyNlxcdTFFMUVcXHUwMTkxXFx1QTc3Ql0vZyB9LCB7ICdiYXNlJzogJ0cnLCAnbGV0dGVycyc6IC9bXFx1MDA0N1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFXS9nIH0sIHsgJ2Jhc2UnOiAnSCcsICdsZXR0ZXJzJzogL1tcXHUwMDQ4XFx1MjRCRFxcdUZGMjhcXHUwMTI0XFx1MUUyMlxcdTFFMjZcXHUwMjFFXFx1MUUyNFxcdTFFMjhcXHUxRTJBXFx1MDEyNlxcdTJDNjdcXHUyQzc1XFx1QTc4RF0vZyB9LCB7ICdiYXNlJzogJ0knLCAnbGV0dGVycyc6IC9bXFx1MDA0OVxcdTI0QkVcXHVGRjI5XFx1MDBDQ1xcdTAwQ0RcXHUwMENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxcdTAwQ0ZcXHUxRTJFXFx1MUVDOFxcdTAxQ0ZcXHUwMjA4XFx1MDIwQVxcdTFFQ0FcXHUwMTJFXFx1MUUyQ1xcdTAxOTddL2cgfSwgeyAnYmFzZSc6ICdKJywgJ2xldHRlcnMnOiAvW1xcdTAwNEFcXHUyNEJGXFx1RkYyQVxcdTAxMzRcXHUwMjQ4XS9nIH0sIHsgJ2Jhc2UnOiAnSycsICdsZXR0ZXJzJzogL1tcXHUwMDRCXFx1MjRDMFxcdUZGMkJcXHUxRTMwXFx1MDFFOFxcdTFFMzJcXHUwMTM2XFx1MUUzNFxcdTAxOThcXHUyQzY5XFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTdBMl0vZyB9LCB7ICdiYXNlJzogJ0wnLCAnbGV0dGVycyc6IC9bXFx1MDA0Q1xcdTI0QzFcXHVGRjJDXFx1MDEzRlxcdTAxMzlcXHUwMTNEXFx1MUUzNlxcdTFFMzhcXHUwMTNCXFx1MUUzQ1xcdTFFM0FcXHUwMTQxXFx1MDIzRFxcdTJDNjJcXHUyQzYwXFx1QTc0OFxcdUE3NDZcXHVBNzgwXS9nIH0sIHsgJ2Jhc2UnOiAnTEonLCAnbGV0dGVycyc6IC9bXFx1MDFDN10vZyB9LCB7ICdiYXNlJzogJ0xqJywgJ2xldHRlcnMnOiAvW1xcdTAxQzhdL2cgfSwgeyAnYmFzZSc6ICdNJywgJ2xldHRlcnMnOiAvW1xcdTAwNERcXHUyNEMyXFx1RkYyRFxcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTJDNkVcXHUwMTlDXS9nIH0sIHsgJ2Jhc2UnOiAnTicsICdsZXR0ZXJzJzogL1tcXHUwMDRFXFx1MjRDM1xcdUZGMkVcXHUwMUY4XFx1MDE0M1xcdTAwRDFcXHUxRTQ0XFx1MDE0N1xcdTFFNDZcXHUwMTQ1XFx1MUU0QVxcdTFFNDhcXHUwMjIwXFx1MDE5RFxcdUE3OTBcXHVBN0E0XS9nIH0sIHsgJ2Jhc2UnOiAnTkonLCAnbGV0dGVycyc6IC9bXFx1MDFDQV0vZyB9LCB7ICdiYXNlJzogJ05qJywgJ2xldHRlcnMnOiAvW1xcdTAxQ0JdL2cgfSwgeyAnYmFzZSc6ICdPJywgJ2xldHRlcnMnOiAvW1xcdTAwNEZcXHUyNEM0XFx1RkYyRlxcdTAwRDJcXHUwMEQzXFx1MDBENFxcdTFFRDJcXHUxRUQwXFx1MUVENlxcdTFFRDRcXHUwMEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx1MDBENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHUwMEQ4XFx1MDFGRVxcdTAxODZcXHUwMTlGXFx1QTc0QVxcdUE3NENdL2cgfSwgeyAnYmFzZSc6ICdPSScsICdsZXR0ZXJzJzogL1tcXHUwMUEyXS9nIH0sIHsgJ2Jhc2UnOiAnT08nLCAnbGV0dGVycyc6IC9bXFx1QTc0RV0vZyB9LCB7ICdiYXNlJzogJ09VJywgJ2xldHRlcnMnOiAvW1xcdTAyMjJdL2cgfSwgeyAnYmFzZSc6ICdQJywgJ2xldHRlcnMnOiAvW1xcdTAwNTBcXHUyNEM1XFx1RkYzMFxcdTFFNTRcXHUxRTU2XFx1MDFBNFxcdTJDNjNcXHVBNzUwXFx1QTc1MlxcdUE3NTRdL2cgfSwgeyAnYmFzZSc6ICdRJywgJ2xldHRlcnMnOiAvW1xcdTAwNTFcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QV0vZyB9LCB7ICdiYXNlJzogJ1InLCAnbGV0dGVycyc6IC9bXFx1MDA1MlxcdTI0QzdcXHVGRjMyXFx1MDE1NFxcdTFFNThcXHUwMTU4XFx1MDIxMFxcdTAyMTJcXHUxRTVBXFx1MUU1Q1xcdTAxNTZcXHUxRTVFXFx1MDI0Q1xcdTJDNjRcXHVBNzVBXFx1QTdBNlxcdUE3ODJdL2cgfSwgeyAnYmFzZSc6ICdTJywgJ2xldHRlcnMnOiAvW1xcdTAwNTNcXHUyNEM4XFx1RkYzM1xcdTFFOUVcXHUwMTVBXFx1MUU2NFxcdTAxNUNcXHUxRTYwXFx1MDE2MFxcdTFFNjZcXHUxRTYyXFx1MUU2OFxcdTAyMThcXHUwMTVFXFx1MkM3RVxcdUE3QThcXHVBNzg0XS9nIH0sIHsgJ2Jhc2UnOiAnVCcsICdsZXR0ZXJzJzogL1tcXHUwMDU0XFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZdL2cgfSwgeyAnYmFzZSc6ICdUWicsICdsZXR0ZXJzJzogL1tcXHVBNzI4XS9nIH0sIHsgJ2Jhc2UnOiAnVScsICdsZXR0ZXJzJzogL1tcXHUwMDU1XFx1MjRDQVxcdUZGMzVcXHUwMEQ5XFx1MDBEQVxcdTAwREJcXHUwMTY4XFx1MUU3OFxcdTAxNkFcXHUxRTdBXFx1MDE2Q1xcdTAwRENcXHUwMURCXFx1MDFEN1xcdTAxRDVcXHUwMUQ5XFx1MUVFNlxcdTAxNkVcXHUwMTcwXFx1MDFEM1xcdTAyMTRcXHUwMjE2XFx1MDFBRlxcdTFFRUFcXHUxRUU4XFx1MUVFRVxcdTFFRUNcXHUxRUYwXFx1MUVFNFxcdTFFNzJcXHUwMTcyXFx1MUU3NlxcdTFFNzRcXHUwMjQ0XS9nIH0sIHsgJ2Jhc2UnOiAnVicsICdsZXR0ZXJzJzogL1tcXHUwMDU2XFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NV0vZyB9LCB7ICdiYXNlJzogJ1ZZJywgJ2xldHRlcnMnOiAvW1xcdUE3NjBdL2cgfSwgeyAnYmFzZSc6ICdXJywgJ2xldHRlcnMnOiAvW1xcdTAwNTdcXHUyNENDXFx1RkYzN1xcdTFFODBcXHUxRTgyXFx1MDE3NFxcdTFFODZcXHUxRTg0XFx1MUU4OFxcdTJDNzJdL2cgfSwgeyAnYmFzZSc6ICdYJywgJ2xldHRlcnMnOiAvW1xcdTAwNThcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDXS9nIH0sIHsgJ2Jhc2UnOiAnWScsICdsZXR0ZXJzJzogL1tcXHUwMDU5XFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx1MDBERFxcdTAxNzZcXHUxRUY4XFx1MDIzMlxcdTFFOEVcXHUwMTc4XFx1MUVGNlxcdTFFRjRcXHUwMUIzXFx1MDI0RVxcdTFFRkVdL2cgfSwgeyAnYmFzZSc6ICdaJywgJ2xldHRlcnMnOiAvW1xcdTAwNUFcXHUyNENGXFx1RkYzQVxcdTAxNzlcXHUxRTkwXFx1MDE3QlxcdTAxN0RcXHUxRTkyXFx1MUU5NFxcdTAxQjVcXHUwMjI0XFx1MkM3RlxcdTJDNkJcXHVBNzYyXS9nIH0sIHsgJ2Jhc2UnOiAnYScsICdsZXR0ZXJzJzogL1tcXHUwMDYxXFx1MjREMFxcdUZGNDFcXHUxRTlBXFx1MDBFMFxcdTAwRTFcXHUwMEUyXFx1MUVBN1xcdTFFQTVcXHUxRUFCXFx1MUVBOVxcdTAwRTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxcdTAwRTRcXHUwMURGXFx1MUVBM1xcdTAwRTVcXHUwMUZCXFx1MDFDRVxcdTAyMDFcXHUwMjAzXFx1MUVBMVxcdTFFQURcXHUxRUI3XFx1MUUwMVxcdTAxMDVcXHUyQzY1XFx1MDI1MF0vZyB9LCB7ICdiYXNlJzogJ2FhJywgJ2xldHRlcnMnOiAvW1xcdUE3MzNdL2cgfSwgeyAnYmFzZSc6ICdhZScsICdsZXR0ZXJzJzogL1tcXHUwMEU2XFx1MDFGRFxcdTAxRTNdL2cgfSwgeyAnYmFzZSc6ICdhbycsICdsZXR0ZXJzJzogL1tcXHVBNzM1XS9nIH0sIHsgJ2Jhc2UnOiAnYXUnLCAnbGV0dGVycyc6IC9bXFx1QTczN10vZyB9LCB7ICdiYXNlJzogJ2F2JywgJ2xldHRlcnMnOiAvW1xcdUE3MzlcXHVBNzNCXS9nIH0sIHsgJ2Jhc2UnOiAnYXknLCAnbGV0dGVycyc6IC9bXFx1QTczRF0vZyB9LCB7ICdiYXNlJzogJ2InLCAnbGV0dGVycyc6IC9bXFx1MDA2MlxcdTI0RDFcXHVGRjQyXFx1MUUwM1xcdTFFMDVcXHUxRTA3XFx1MDE4MFxcdTAxODNcXHUwMjUzXS9nIH0sIHsgJ2Jhc2UnOiAnYycsICdsZXR0ZXJzJzogL1tcXHUwMDYzXFx1MjREMlxcdUZGNDNcXHUwMTA3XFx1MDEwOVxcdTAxMEJcXHUwMTBEXFx1MDBFN1xcdTFFMDlcXHUwMTg4XFx1MDIzQ1xcdUE3M0ZcXHUyMTg0XS9nIH0sIHsgJ2Jhc2UnOiAnZCcsICdsZXR0ZXJzJzogL1tcXHUwMDY0XFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QV0vZyB9LCB7ICdiYXNlJzogJ2R6JywgJ2xldHRlcnMnOiAvW1xcdTAxRjNcXHUwMUM2XS9nIH0sIHsgJ2Jhc2UnOiAnZScsICdsZXR0ZXJzJzogL1tcXHUwMDY1XFx1MjRENFxcdUZGNDVcXHUwMEU4XFx1MDBFOVxcdTAwRUFcXHUxRUMxXFx1MUVCRlxcdTFFQzVcXHUxRUMzXFx1MUVCRFxcdTAxMTNcXHUxRTE1XFx1MUUxN1xcdTAxMTVcXHUwMTE3XFx1MDBFQlxcdTFFQkJcXHUwMTFCXFx1MDIwNVxcdTAyMDdcXHUxRUI5XFx1MUVDN1xcdTAyMjlcXHUxRTFEXFx1MDExOVxcdTFFMTlcXHUxRTFCXFx1MDI0N1xcdTAyNUJcXHUwMUREXS9nIH0sIHsgJ2Jhc2UnOiAnZicsICdsZXR0ZXJzJzogL1tcXHUwMDY2XFx1MjRENVxcdUZGNDZcXHUxRTFGXFx1MDE5MlxcdUE3N0NdL2cgfSwgeyAnYmFzZSc6ICdnJywgJ2xldHRlcnMnOiAvW1xcdTAwNjdcXHUyNEQ2XFx1RkY0N1xcdTAxRjVcXHUwMTFEXFx1MUUyMVxcdTAxMUZcXHUwMTIxXFx1MDFFN1xcdTAxMjNcXHUwMUU1XFx1MDI2MFxcdUE3QTFcXHUxRDc5XFx1QTc3Rl0vZyB9LCB7ICdiYXNlJzogJ2gnLCAnbGV0dGVycyc6IC9bXFx1MDA2OFxcdTI0RDdcXHVGRjQ4XFx1MDEyNVxcdTFFMjNcXHUxRTI3XFx1MDIxRlxcdTFFMjVcXHUxRTI5XFx1MUUyQlxcdTFFOTZcXHUwMTI3XFx1MkM2OFxcdTJDNzZcXHUwMjY1XS9nIH0sIHsgJ2Jhc2UnOiAnaHYnLCAnbGV0dGVycyc6IC9bXFx1MDE5NV0vZyB9LCB7ICdiYXNlJzogJ2knLCAnbGV0dGVycyc6IC9bXFx1MDA2OVxcdTI0RDhcXHVGRjQ5XFx1MDBFQ1xcdTAwRURcXHUwMEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx1MDBFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzFdL2cgfSwgeyAnYmFzZSc6ICdqJywgJ2xldHRlcnMnOiAvW1xcdTAwNkFcXHUyNEQ5XFx1RkY0QVxcdTAxMzVcXHUwMUYwXFx1MDI0OV0vZyB9LCB7ICdiYXNlJzogJ2snLCAnbGV0dGVycyc6IC9bXFx1MDA2QlxcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNdL2cgfSwgeyAnYmFzZSc6ICdsJywgJ2xldHRlcnMnOiAvW1xcdTAwNkNcXHUyNERCXFx1RkY0Q1xcdTAxNDBcXHUwMTNBXFx1MDEzRVxcdTFFMzdcXHUxRTM5XFx1MDEzQ1xcdTFFM0RcXHUxRTNCXFx1MDE3RlxcdTAxNDJcXHUwMTlBXFx1MDI2QlxcdTJDNjFcXHVBNzQ5XFx1QTc4MVxcdUE3NDddL2cgfSwgeyAnYmFzZSc6ICdsaicsICdsZXR0ZXJzJzogL1tcXHUwMUM5XS9nIH0sIHsgJ2Jhc2UnOiAnbScsICdsZXR0ZXJzJzogL1tcXHUwMDZEXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2Rl0vZyB9LCB7ICdiYXNlJzogJ24nLCAnbGV0dGVycyc6IC9bXFx1MDA2RVxcdTI0RERcXHVGRjRFXFx1MDFGOVxcdTAxNDRcXHUwMEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTVdL2cgfSwgeyAnYmFzZSc6ICduaicsICdsZXR0ZXJzJzogL1tcXHUwMUNDXS9nIH0sIHsgJ2Jhc2UnOiAnbycsICdsZXR0ZXJzJzogL1tcXHUwMDZGXFx1MjRERVxcdUZGNEZcXHUwMEYyXFx1MDBGM1xcdTAwRjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx1MDBGNVxcdTFFNERcXHUwMjJEXFx1MUU0RlxcdTAxNERcXHUxRTUxXFx1MUU1M1xcdTAxNEZcXHUwMjJGXFx1MDIzMVxcdTAwRjZcXHUwMjJCXFx1MUVDRlxcdTAxNTFcXHUwMUQyXFx1MDIwRFxcdTAyMEZcXHUwMUExXFx1MUVERFxcdTFFREJcXHUxRUUxXFx1MUVERlxcdTFFRTNcXHUxRUNEXFx1MUVEOVxcdTAxRUJcXHUwMUVEXFx1MDBGOFxcdTAxRkZcXHUwMjU0XFx1QTc0QlxcdUE3NERcXHUwMjc1XS9nIH0sIHsgJ2Jhc2UnOiAnb2knLCAnbGV0dGVycyc6IC9bXFx1MDFBM10vZyB9LCB7ICdiYXNlJzogJ291JywgJ2xldHRlcnMnOiAvW1xcdTAyMjNdL2cgfSwgeyAnYmFzZSc6ICdvbycsICdsZXR0ZXJzJzogL1tcXHVBNzRGXS9nIH0sIHsgJ2Jhc2UnOiAncCcsICdsZXR0ZXJzJzogL1tcXHUwMDcwXFx1MjRERlxcdUZGNTBcXHUxRTU1XFx1MUU1N1xcdTAxQTVcXHUxRDdEXFx1QTc1MVxcdUE3NTNcXHVBNzU1XS9nIH0sIHsgJ2Jhc2UnOiAncScsICdsZXR0ZXJzJzogL1tcXHUwMDcxXFx1MjRFMFxcdUZGNTFcXHUwMjRCXFx1QTc1N1xcdUE3NTldL2cgfSwgeyAnYmFzZSc6ICdyJywgJ2xldHRlcnMnOiAvW1xcdTAwNzJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXS9nIH0sIHsgJ2Jhc2UnOiAncycsICdsZXR0ZXJzJzogL1tcXHUwMDczXFx1MjRFMlxcdUZGNTNcXHUwMERGXFx1MDE1QlxcdTFFNjVcXHUwMTVEXFx1MUU2MVxcdTAxNjFcXHUxRTY3XFx1MUU2M1xcdTFFNjlcXHUwMjE5XFx1MDE1RlxcdTAyM0ZcXHVBN0E5XFx1QTc4NVxcdTFFOUJdL2cgfSwgeyAnYmFzZSc6ICd0JywgJ2xldHRlcnMnOiAvW1xcdTAwNzRcXHUyNEUzXFx1RkY1NFxcdTFFNkJcXHUxRTk3XFx1MDE2NVxcdTFFNkRcXHUwMjFCXFx1MDE2M1xcdTFFNzFcXHUxRTZGXFx1MDE2N1xcdTAxQURcXHUwMjg4XFx1MkM2NlxcdUE3ODddL2cgfSwgeyAnYmFzZSc6ICd0eicsICdsZXR0ZXJzJzogL1tcXHVBNzI5XS9nIH0sIHsgJ2Jhc2UnOiAndScsICdsZXR0ZXJzJzogL1tcXHUwMDc1XFx1MjRFNFxcdUZGNTVcXHUwMEY5XFx1MDBGQVxcdTAwRkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxcdTAwRkNcXHUwMURDXFx1MDFEOFxcdTAxRDZcXHUwMURBXFx1MUVFN1xcdTAxNkZcXHUwMTcxXFx1MDFENFxcdTAyMTVcXHUwMjE3XFx1MDFCMFxcdTFFRUJcXHUxRUU5XFx1MUVFRlxcdTFFRURcXHUxRUYxXFx1MUVFNVxcdTFFNzNcXHUwMTczXFx1MUU3N1xcdTFFNzVcXHUwMjg5XS9nIH0sIHsgJ2Jhc2UnOiAndicsICdsZXR0ZXJzJzogL1tcXHUwMDc2XFx1MjRFNVxcdUZGNTZcXHUxRTdEXFx1MUU3RlxcdTAyOEJcXHVBNzVGXFx1MDI4Q10vZyB9LCB7ICdiYXNlJzogJ3Z5JywgJ2xldHRlcnMnOiAvW1xcdUE3NjFdL2cgfSwgeyAnYmFzZSc6ICd3JywgJ2xldHRlcnMnOiAvW1xcdTAwNzdcXHUyNEU2XFx1RkY1N1xcdTFFODFcXHUxRTgzXFx1MDE3NVxcdTFFODdcXHUxRTg1XFx1MUU5OFxcdTFFODlcXHUyQzczXS9nIH0sIHsgJ2Jhc2UnOiAneCcsICdsZXR0ZXJzJzogL1tcXHUwMDc4XFx1MjRFN1xcdUZGNThcXHUxRThCXFx1MUU4RF0vZyB9LCB7ICdiYXNlJzogJ3knLCAnbGV0dGVycyc6IC9bXFx1MDA3OVxcdTI0RThcXHVGRjU5XFx1MUVGM1xcdTAwRkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx1MDBGRlxcdTFFRjdcXHUxRTk5XFx1MUVGNVxcdTAxQjRcXHUwMjRGXFx1MUVGRl0vZyB9LCB7ICdiYXNlJzogJ3onLCAnbGV0dGVycyc6IC9bXFx1MDA3QVxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjNdL2cgfV07XG5cbnZhciBzdHJpcERpYWNyaXRpY3MgPSBmdW5jdGlvbiBzdHJpcERpYWNyaXRpY3Moc3RyKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbWFwLmxlbmd0aDsgaSsrKSB7XG5cdFx0c3RyID0gc3RyLnJlcGxhY2UobWFwW2ldLmxldHRlcnMsIG1hcFtpXS5iYXNlKTtcblx0fVxuXHRyZXR1cm4gc3RyO1xufTtcblxudmFyIHRyaW0gPSBmdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn07XG5cbnZhciBpc1ZhbGlkID0gZnVuY3Rpb24gaXNWYWxpZCh2YWx1ZSkge1xuXHRyZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gJyc7XG59O1xuXG52YXIgZmlsdGVyT3B0aW9ucyA9IGZ1bmN0aW9uIGZpbHRlck9wdGlvbnMob3B0aW9ucywgZmlsdGVyVmFsdWUsIGV4Y2x1ZGVPcHRpb25zLCBwcm9wcykge1xuXHRpZiAocHJvcHMuaWdub3JlQWNjZW50cykge1xuXHRcdGZpbHRlclZhbHVlID0gc3RyaXBEaWFjcml0aWNzKGZpbHRlclZhbHVlKTtcblx0fVxuXG5cdGlmIChwcm9wcy5pZ25vcmVDYXNlKSB7XG5cdFx0ZmlsdGVyVmFsdWUgPSBmaWx0ZXJWYWx1ZS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0aWYgKHByb3BzLnRyaW1GaWx0ZXIpIHtcblx0XHRmaWx0ZXJWYWx1ZSA9IHRyaW0oZmlsdGVyVmFsdWUpO1xuXHR9XG5cblx0aWYgKGV4Y2x1ZGVPcHRpb25zKSBleGNsdWRlT3B0aW9ucyA9IGV4Y2x1ZGVPcHRpb25zLm1hcChmdW5jdGlvbiAoaSkge1xuXHRcdHJldHVybiBpW3Byb3BzLnZhbHVlS2V5XTtcblx0fSk7XG5cblx0cmV0dXJuIG9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHtcblx0XHRpZiAoZXhjbHVkZU9wdGlvbnMgJiYgZXhjbHVkZU9wdGlvbnMuaW5kZXhPZihvcHRpb25bcHJvcHMudmFsdWVLZXldKSA+IC0xKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYgKHByb3BzLmZpbHRlck9wdGlvbikgcmV0dXJuIHByb3BzLmZpbHRlck9wdGlvbi5jYWxsKHVuZGVmaW5lZCwgb3B0aW9uLCBmaWx0ZXJWYWx1ZSk7XG5cdFx0aWYgKCFmaWx0ZXJWYWx1ZSkgcmV0dXJuIHRydWU7XG5cblx0XHR2YXIgdmFsdWUgPSBvcHRpb25bcHJvcHMudmFsdWVLZXldO1xuXHRcdHZhciBsYWJlbCA9IG9wdGlvbltwcm9wcy5sYWJlbEtleV07XG5cdFx0dmFyIGhhc1ZhbHVlID0gaXNWYWxpZCh2YWx1ZSk7XG5cdFx0dmFyIGhhc0xhYmVsID0gaXNWYWxpZChsYWJlbCk7XG5cblx0XHRpZiAoIWhhc1ZhbHVlICYmICFoYXNMYWJlbCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHZhciB2YWx1ZVRlc3QgPSBoYXNWYWx1ZSA/IFN0cmluZyh2YWx1ZSkgOiBudWxsO1xuXHRcdHZhciBsYWJlbFRlc3QgPSBoYXNMYWJlbCA/IFN0cmluZyhsYWJlbCkgOiBudWxsO1xuXG5cdFx0aWYgKHByb3BzLmlnbm9yZUFjY2VudHMpIHtcblx0XHRcdGlmICh2YWx1ZVRlc3QgJiYgcHJvcHMubWF0Y2hQcm9wICE9PSAnbGFiZWwnKSB2YWx1ZVRlc3QgPSBzdHJpcERpYWNyaXRpY3ModmFsdWVUZXN0KTtcblx0XHRcdGlmIChsYWJlbFRlc3QgJiYgcHJvcHMubWF0Y2hQcm9wICE9PSAndmFsdWUnKSBsYWJlbFRlc3QgPSBzdHJpcERpYWNyaXRpY3MobGFiZWxUZXN0KTtcblx0XHR9XG5cblx0XHRpZiAocHJvcHMuaWdub3JlQ2FzZSkge1xuXHRcdFx0aWYgKHZhbHVlVGVzdCAmJiBwcm9wcy5tYXRjaFByb3AgIT09ICdsYWJlbCcpIHZhbHVlVGVzdCA9IHZhbHVlVGVzdC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aWYgKGxhYmVsVGVzdCAmJiBwcm9wcy5tYXRjaFByb3AgIT09ICd2YWx1ZScpIGxhYmVsVGVzdCA9IGxhYmVsVGVzdC50b0xvd2VyQ2FzZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwcm9wcy5tYXRjaFBvcyA9PT0gJ3N0YXJ0JyA/IHZhbHVlVGVzdCAmJiBwcm9wcy5tYXRjaFByb3AgIT09ICdsYWJlbCcgJiYgdmFsdWVUZXN0LnN1YnN0cigwLCBmaWx0ZXJWYWx1ZS5sZW5ndGgpID09PSBmaWx0ZXJWYWx1ZSB8fCBsYWJlbFRlc3QgJiYgcHJvcHMubWF0Y2hQcm9wICE9PSAndmFsdWUnICYmIGxhYmVsVGVzdC5zdWJzdHIoMCwgZmlsdGVyVmFsdWUubGVuZ3RoKSA9PT0gZmlsdGVyVmFsdWUgOiB2YWx1ZVRlc3QgJiYgcHJvcHMubWF0Y2hQcm9wICE9PSAnbGFiZWwnICYmIHZhbHVlVGVzdC5pbmRleE9mKGZpbHRlclZhbHVlKSA+PSAwIHx8IGxhYmVsVGVzdCAmJiBwcm9wcy5tYXRjaFByb3AgIT09ICd2YWx1ZScgJiYgbGFiZWxUZXN0LmluZGV4T2YoZmlsdGVyVmFsdWUpID49IDA7XG5cdH0pO1xufTtcblxudmFyIG1lbnVSZW5kZXJlciA9IGZ1bmN0aW9uIG1lbnVSZW5kZXJlcihfcmVmKSB7XG5cdHZhciBmb2N1c2VkT3B0aW9uID0gX3JlZi5mb2N1c2VkT3B0aW9uLFxuXHQgICAgZm9jdXNPcHRpb24gPSBfcmVmLmZvY3VzT3B0aW9uLFxuXHQgICAgaW5wdXRWYWx1ZSA9IF9yZWYuaW5wdXRWYWx1ZSxcblx0ICAgIGluc3RhbmNlUHJlZml4ID0gX3JlZi5pbnN0YW5jZVByZWZpeCxcblx0ICAgIG9uRm9jdXMgPSBfcmVmLm9uRm9jdXMsXG5cdCAgICBvbk9wdGlvblJlZiA9IF9yZWYub25PcHRpb25SZWYsXG5cdCAgICBvblNlbGVjdCA9IF9yZWYub25TZWxlY3QsXG5cdCAgICBvcHRpb25DbGFzc05hbWUgPSBfcmVmLm9wdGlvbkNsYXNzTmFtZSxcblx0ICAgIG9wdGlvbkNvbXBvbmVudCA9IF9yZWYub3B0aW9uQ29tcG9uZW50LFxuXHQgICAgb3B0aW9uUmVuZGVyZXIgPSBfcmVmLm9wdGlvblJlbmRlcmVyLFxuXHQgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcblx0ICAgIHJlbW92ZVZhbHVlID0gX3JlZi5yZW1vdmVWYWx1ZSxcblx0ICAgIHNlbGVjdFZhbHVlID0gX3JlZi5zZWxlY3RWYWx1ZSxcblx0ICAgIHZhbHVlQXJyYXkgPSBfcmVmLnZhbHVlQXJyYXksXG5cdCAgICB2YWx1ZUtleSA9IF9yZWYudmFsdWVLZXk7XG5cblx0dmFyIE9wdGlvbiA9IG9wdGlvbkNvbXBvbmVudDtcblxuXHRyZXR1cm4gb3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbiwgaSkge1xuXHRcdHZhciBpc1NlbGVjdGVkID0gdmFsdWVBcnJheSAmJiB2YWx1ZUFycmF5LnNvbWUoZnVuY3Rpb24gKHgpIHtcblx0XHRcdHJldHVybiB4W3ZhbHVlS2V5XSA9PT0gb3B0aW9uW3ZhbHVlS2V5XTtcblx0XHR9KTtcblx0XHR2YXIgaXNGb2N1c2VkID0gb3B0aW9uID09PSBmb2N1c2VkT3B0aW9uO1xuXHRcdHZhciBvcHRpb25DbGFzcyA9IGNsYXNzTmFtZXMob3B0aW9uQ2xhc3NOYW1lLCB7XG5cdFx0XHQnU2VsZWN0LW9wdGlvbic6IHRydWUsXG5cdFx0XHQnaXMtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxuXHRcdFx0J2lzLWZvY3VzZWQnOiBpc0ZvY3VzZWQsXG5cdFx0XHQnaXMtZGlzYWJsZWQnOiBvcHRpb24uZGlzYWJsZWRcblx0XHR9KTtcblxuXHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0T3B0aW9uLFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzc05hbWU6IG9wdGlvbkNsYXNzLFxuXHRcdFx0XHRmb2N1c09wdGlvbjogZm9jdXNPcHRpb24sXG5cdFx0XHRcdGlucHV0VmFsdWU6IGlucHV0VmFsdWUsXG5cdFx0XHRcdGluc3RhbmNlUHJlZml4OiBpbnN0YW5jZVByZWZpeCxcblx0XHRcdFx0aXNEaXNhYmxlZDogb3B0aW9uLmRpc2FibGVkLFxuXHRcdFx0XHRpc0ZvY3VzZWQ6IGlzRm9jdXNlZCxcblx0XHRcdFx0aXNTZWxlY3RlZDogaXNTZWxlY3RlZCxcblx0XHRcdFx0a2V5OiAnb3B0aW9uLScgKyBpICsgJy0nICsgb3B0aW9uW3ZhbHVlS2V5XSxcblx0XHRcdFx0b25Gb2N1czogb25Gb2N1cyxcblx0XHRcdFx0b25TZWxlY3Q6IG9uU2VsZWN0LFxuXHRcdFx0XHRvcHRpb246IG9wdGlvbixcblx0XHRcdFx0b3B0aW9uSW5kZXg6IGksXG5cdFx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKF9yZWYyKSB7XG5cdFx0XHRcdFx0b25PcHRpb25SZWYoX3JlZjIsIGlzRm9jdXNlZCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJlbW92ZVZhbHVlOiByZW1vdmVWYWx1ZSxcblx0XHRcdFx0c2VsZWN0VmFsdWU6IHNlbGVjdFZhbHVlXG5cdFx0XHR9LFxuXHRcdFx0b3B0aW9uUmVuZGVyZXIob3B0aW9uLCBpLCBpbnB1dFZhbHVlKVxuXHRcdCk7XG5cdH0pO1xufTtcblxubWVudVJlbmRlcmVyLnByb3BUeXBlcyA9IHtcblx0Zm9jdXNPcHRpb246IFByb3BUeXBlcy5mdW5jLFxuXHRmb2N1c2VkT3B0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRpbnB1dFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRpbnN0YW5jZVByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcblx0b25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cdG9uT3B0aW9uUmVmOiBQcm9wVHlwZXMuZnVuYyxcblx0b25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXHRvcHRpb25DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdG9wdGlvbkNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsXG5cdG9wdGlvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcblx0b3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuXHRyZW1vdmVWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG5cdHNlbGVjdFZhbHVlOiBQcm9wVHlwZXMuZnVuYyxcblx0dmFsdWVBcnJheTogUHJvcFR5cGVzLmFycmF5LFxuXHR2YWx1ZUtleTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxudmFyIGJsb2NrRXZlbnQgPSAoZnVuY3Rpb24gKGV2ZW50KSB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgIT09ICdBJyB8fCAhKCdocmVmJyBpbiBldmVudC50YXJnZXQpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChldmVudC50YXJnZXQudGFyZ2V0KSB7XG5cdFx0d2luZG93Lm9wZW4oZXZlbnQudGFyZ2V0LmhyZWYsIGV2ZW50LnRhcmdldC50YXJnZXQpO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZXZlbnQudGFyZ2V0LmhyZWY7XG5cdH1cbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxuXG5cblxuXG52YXIgYXN5bmNHZW5lcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEF3YWl0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBBc3luY0dlbmVyYXRvcihnZW4pIHtcbiAgICB2YXIgZnJvbnQsIGJhY2s7XG5cbiAgICBmdW5jdGlvbiBzZW5kKGtleSwgYXJnKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBhcmc6IGFyZyxcbiAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICAgIG5leHQ6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoYmFjaykge1xuICAgICAgICAgIGJhY2sgPSBiYWNrLm5leHQgPSByZXF1ZXN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZyb250ID0gYmFjayA9IHJlcXVlc3Q7XG4gICAgICAgICAgcmVzdW1lKGtleSwgYXJnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdW1lKGtleSwgYXJnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0VmFsdWUpIHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUudmFsdWUpLnRoZW4oZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgcmVzdW1lKFwibmV4dFwiLCBhcmcpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgIHJlc3VtZShcInRocm93XCIsIGFyZyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0dGxlKHJlc3VsdC5kb25lID8gXCJyZXR1cm5cIiA6IFwibm9ybWFsXCIsIHJlc3VsdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzZXR0bGUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHRsZSh0eXBlLCB2YWx1ZSkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJyZXR1cm5cIjpcbiAgICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwidGhyb3dcIjpcbiAgICAgICAgICBmcm9udC5yZWplY3QodmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBmcm9udCA9IGZyb250Lm5leHQ7XG5cbiAgICAgIGlmIChmcm9udCkge1xuICAgICAgICByZXN1bWUoZnJvbnQua2V5LCBmcm9udC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFjayA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW52b2tlID0gc2VuZDtcblxuICAgIGlmICh0eXBlb2YgZ2VuLnJldHVybiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLnJldHVybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yKSB7XG4gICAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gIH1cblxuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFwibmV4dFwiLCBhcmcpO1xuICB9O1xuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS50aHJvdyA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFwidGhyb3dcIiwgYXJnKTtcbiAgfTtcblxuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUucmV0dXJuID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJyZXR1cm5cIiwgYXJnKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHdyYXA6IGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBc3luY0dlbmVyYXRvcihmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBhd2FpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gbmV3IEF3YWl0VmFsdWUodmFsdWUpO1xuICAgIH1cbiAgfTtcbn0oKTtcblxuXG5cblxuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cblxuXG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cblxuXG5cblxuXG5cblxudmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxudmFyIE9wdGlvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdGluaGVyaXRzKE9wdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gT3B0aW9uKHByb3BzKSB7XG5cdFx0Y2xhc3NDYWxsQ2hlY2sodGhpcywgT3B0aW9uKTtcblxuXHRcdHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE9wdGlvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9wdGlvbikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdF90aGlzLmhhbmRsZU1vdXNlRG93biA9IF90aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5oYW5kbGVNb3VzZUVudGVyID0gX3RoaXMuaGFuZGxlTW91c2VFbnRlci5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5oYW5kbGVNb3VzZU1vdmUgPSBfdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMuaGFuZGxlVG91Y2hTdGFydCA9IF90aGlzLmhhbmRsZVRvdWNoU3RhcnQuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMuaGFuZGxlVG91Y2hFbmQgPSBfdGhpcy5oYW5kbGVUb3VjaEVuZC5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5oYW5kbGVUb3VjaE1vdmUgPSBfdGhpcy5oYW5kbGVUb3VjaE1vdmUuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMub25Gb2N1cyA9IF90aGlzLm9uRm9jdXMuYmluZChfdGhpcyk7XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0Y3JlYXRlQ2xhc3MoT3B0aW9uLCBbe1xuXHRcdGtleTogJ2hhbmRsZU1vdXNlRG93bicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0dGhpcy5wcm9wcy5vblNlbGVjdCh0aGlzLnByb3BzLm9wdGlvbiwgZXZlbnQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZU1vdXNlRW50ZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZUVudGVyKGV2ZW50KSB7XG5cdFx0XHR0aGlzLm9uRm9jdXMoZXZlbnQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZU1vdXNlTW92ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShldmVudCkge1xuXHRcdFx0dGhpcy5vbkZvY3VzKGV2ZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaEVuZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKGV2ZW50KSB7XG5cdFx0XHQvLyBDaGVjayBpZiB0aGUgdmlldyBpcyBiZWluZyBkcmFnZ2VkLCBJbiB0aGlzIGNhc2Vcblx0XHRcdC8vIHdlIGRvbid0IHdhbnQgdG8gZmlyZSB0aGUgY2xpY2sgZXZlbnQgKGJlY2F1c2UgdGhlIHVzZXIgb25seSB3YW50cyB0byBzY3JvbGwpXG5cdFx0XHRpZiAodGhpcy5kcmFnZ2luZykgcmV0dXJuO1xuXG5cdFx0XHR0aGlzLmhhbmRsZU1vdXNlRG93bihldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hNb3ZlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKCkge1xuXHRcdFx0Ly8gU2V0IGEgZmxhZyB0aGF0IHRoZSB2aWV3IGlzIGJlaW5nIGRyYWdnZWRcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoU3RhcnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KCkge1xuXHRcdFx0Ly8gU2V0IGEgZmxhZyB0aGF0IHRoZSB2aWV3IGlzIG5vdCBiZWluZyBkcmFnZ2VkXG5cdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnb25Gb2N1cycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG9uRm9jdXMoZXZlbnQpIHtcblx0XHRcdGlmICghdGhpcy5wcm9wcy5pc0ZvY3VzZWQpIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkZvY3VzKHRoaXMucHJvcHMub3B0aW9uLCBldmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG5cdFx0XHQgICAgb3B0aW9uID0gX3Byb3BzLm9wdGlvbixcblx0XHRcdCAgICBpbnN0YW5jZVByZWZpeCA9IF9wcm9wcy5pbnN0YW5jZVByZWZpeCxcblx0XHRcdCAgICBvcHRpb25JbmRleCA9IF9wcm9wcy5vcHRpb25JbmRleDtcblxuXHRcdFx0dmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXModGhpcy5wcm9wcy5jbGFzc05hbWUsIG9wdGlvbi5jbGFzc05hbWUpO1xuXG5cdFx0XHRyZXR1cm4gb3B0aW9uLmRpc2FibGVkID8gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG5cdFx0XHRcdFx0b25Nb3VzZURvd246IGJsb2NrRXZlbnQsXG5cdFx0XHRcdFx0b25DbGljazogYmxvY2tFdmVudCB9LFxuXHRcdFx0XHR0aGlzLnByb3BzLmNoaWxkcmVuXG5cdFx0XHQpIDogUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG5cdFx0XHRcdFx0c3R5bGU6IG9wdGlvbi5zdHlsZSxcblx0XHRcdFx0XHRyb2xlOiAnb3B0aW9uJyxcblx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6IG9wdGlvbi5sYWJlbCxcblx0XHRcdFx0XHRvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sXG5cdFx0XHRcdFx0b25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG5cdFx0XHRcdFx0b25Nb3VzZU1vdmU6IHRoaXMuaGFuZGxlTW91c2VNb3ZlLFxuXHRcdFx0XHRcdG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuXHRcdFx0XHRcdG9uVG91Y2hNb3ZlOiB0aGlzLmhhbmRsZVRvdWNoTW92ZSxcblx0XHRcdFx0XHRvblRvdWNoRW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kLFxuXHRcdFx0XHRcdGlkOiBpbnN0YW5jZVByZWZpeCArICctb3B0aW9uLScgKyBvcHRpb25JbmRleCxcblx0XHRcdFx0XHR0aXRsZTogb3B0aW9uLnRpdGxlIH0sXG5cdFx0XHRcdHRoaXMucHJvcHMuY2hpbGRyZW5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cdHJldHVybiBPcHRpb247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbk9wdGlvbi5wcm9wVHlwZXMgPSB7XG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblx0Y2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBjbGFzc05hbWUgKGJhc2VkIG9uIG1vdXNlIHBvc2l0aW9uKVxuXHRpbnN0YW5jZVByZWZpeDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLCAvLyB1bmlxdWUgcHJlZml4IGZvciB0aGUgaWRzICh1c2VkIGZvciBhcmlhKVxuXHRpc0Rpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCwgLy8gdGhlIG9wdGlvbiBpcyBkaXNhYmxlZFxuXHRpc0ZvY3VzZWQ6IFByb3BUeXBlcy5ib29sLCAvLyB0aGUgb3B0aW9uIGlzIGZvY3VzZWRcblx0aXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsIC8vIHRoZSBvcHRpb24gaXMgc2VsZWN0ZWRcblx0b25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsIC8vIG1ldGhvZCB0byBoYW5kbGUgbW91c2VFbnRlciBvbiBvcHRpb24gZWxlbWVudFxuXHRvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsIC8vIG1ldGhvZCB0byBoYW5kbGUgY2xpY2sgb24gb3B0aW9uIGVsZW1lbnRcblx0b25VbmZvY3VzOiBQcm9wVHlwZXMuZnVuYywgLy8gbWV0aG9kIHRvIGhhbmRsZSBtb3VzZUxlYXZlIG9uIG9wdGlvbiBlbGVtZW50XG5cdG9wdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLCAvLyBvYmplY3QgdGhhdCBpcyBiYXNlIGZvciB0aGF0IG9wdGlvblxuXHRvcHRpb25JbmRleDogUHJvcFR5cGVzLm51bWJlciAvLyBpbmRleCBvZiB0aGUgb3B0aW9uLCB1c2VkIHRvIGdlbmVyYXRlIHVuaXF1ZSBpZHMgZm9yIGFyaWFcbn07XG5cbnZhciBWYWx1ZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdGluaGVyaXRzKFZhbHVlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBWYWx1ZShwcm9wcykge1xuXHRcdGNsYXNzQ2FsbENoZWNrKHRoaXMsIFZhbHVlKTtcblxuXHRcdHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFZhbHVlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVmFsdWUpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cblx0XHRfdGhpcy5oYW5kbGVNb3VzZURvd24gPSBfdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZChfdGhpcyk7XG5cdFx0X3RoaXMub25SZW1vdmUgPSBfdGhpcy5vblJlbW92ZS5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5oYW5kbGVUb3VjaEVuZFJlbW92ZSA9IF90aGlzLmhhbmRsZVRvdWNoRW5kUmVtb3ZlLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLmhhbmRsZVRvdWNoTW92ZSA9IF90aGlzLmhhbmRsZVRvdWNoTW92ZS5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0ID0gX3RoaXMuaGFuZGxlVG91Y2hTdGFydC5iaW5kKF90aGlzKTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRjcmVhdGVDbGFzcyhWYWx1ZSwgW3tcblx0XHRrZXk6ICdoYW5kbGVNb3VzZURvd24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcblx0XHRcdGlmIChldmVudC50eXBlID09PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gIT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMucHJvcHMub25DbGljaykge1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMucHJvcHMudmFsdWUsIGV2ZW50KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMucHJvcHMudmFsdWUuaHJlZikge1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdvblJlbW92ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG9uUmVtb3ZlKGV2ZW50KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR0aGlzLnByb3BzLm9uUmVtb3ZlKHRoaXMucHJvcHMudmFsdWUpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoRW5kUmVtb3ZlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmRSZW1vdmUoZXZlbnQpIHtcblx0XHRcdC8vIENoZWNrIGlmIHRoZSB2aWV3IGlzIGJlaW5nIGRyYWdnZWQsIEluIHRoaXMgY2FzZVxuXHRcdFx0Ly8gd2UgZG9uJ3Qgd2FudCB0byBmaXJlIHRoZSBjbGljayBldmVudCAoYmVjYXVzZSB0aGUgdXNlciBvbmx5IHdhbnRzIHRvIHNjcm9sbClcblx0XHRcdGlmICh0aGlzLmRyYWdnaW5nKSByZXR1cm47XG5cblx0XHRcdC8vIEZpcmUgdGhlIG1vdXNlIGV2ZW50c1xuXHRcdFx0dGhpcy5vblJlbW92ZShldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hNb3ZlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKCkge1xuXHRcdFx0Ly8gU2V0IGEgZmxhZyB0aGF0IHRoZSB2aWV3IGlzIGJlaW5nIGRyYWdnZWRcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoU3RhcnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KCkge1xuXHRcdFx0Ly8gU2V0IGEgZmxhZyB0aGF0IHRoZSB2aWV3IGlzIG5vdCBiZWluZyBkcmFnZ2VkXG5cdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyUmVtb3ZlSWNvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlclJlbW92ZUljb24oKSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCAhdGhpcy5wcm9wcy5vblJlbW92ZSkgcmV0dXJuO1xuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdzcGFuJyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdTZWxlY3QtdmFsdWUtaWNvbicsXG5cdFx0XHRcdFx0J2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuXHRcdFx0XHRcdG9uTW91c2VEb3duOiB0aGlzLm9uUmVtb3ZlLFxuXHRcdFx0XHRcdG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRSZW1vdmUsXG5cdFx0XHRcdFx0b25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG5cdFx0XHRcdFx0b25Ub3VjaE1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlIH0sXG5cdFx0XHRcdCdcXHhENydcblx0XHRcdCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyTGFiZWwnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMYWJlbCgpIHtcblx0XHRcdHZhciBjbGFzc05hbWUgPSAnU2VsZWN0LXZhbHVlLWxhYmVsJztcblx0XHRcdHJldHVybiB0aGlzLnByb3BzLm9uQ2xpY2sgfHwgdGhpcy5wcm9wcy52YWx1ZS5ocmVmID8gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2EnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBocmVmOiB0aGlzLnByb3BzLnZhbHVlLmhyZWYsIHRhcmdldDogdGhpcy5wcm9wcy52YWx1ZS50YXJnZXQsIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93biwgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVNb3VzZURvd24gfSxcblx0XHRcdFx0dGhpcy5wcm9wcy5jaGlsZHJlblxuXHRcdFx0KSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdzcGFuJyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgcm9sZTogJ29wdGlvbicsICdhcmlhLXNlbGVjdGVkJzogJ3RydWUnLCBpZDogdGhpcy5wcm9wcy5pZCB9LFxuXHRcdFx0XHR0aGlzLnByb3BzLmNoaWxkcmVuXG5cdFx0XHQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoJ1NlbGVjdC12YWx1ZScsIHRoaXMucHJvcHMudmFsdWUuZGlzYWJsZWQgPyAnU2VsZWN0LXZhbHVlLWRpc2FibGVkJyA6ICcnLCB0aGlzLnByb3BzLnZhbHVlLmNsYXNzTmFtZSksXG5cdFx0XHRcdFx0c3R5bGU6IHRoaXMucHJvcHMudmFsdWUuc3R5bGUsXG5cdFx0XHRcdFx0dGl0bGU6IHRoaXMucHJvcHMudmFsdWUudGl0bGVcblx0XHRcdFx0fSxcblx0XHRcdFx0dGhpcy5yZW5kZXJSZW1vdmVJY29uKCksXG5cdFx0XHRcdHRoaXMucmVuZGVyTGFiZWwoKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblx0cmV0dXJuIFZhbHVlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5WYWx1ZS5wcm9wVHlwZXMgPSB7XG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblx0ZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLCAvLyBkaXNhYmxlZCBwcm9wIHBhc3NlZCB0byBSZWFjdFNlbGVjdFxuXHRpZDogUHJvcFR5cGVzLnN0cmluZywgLy8gVW5pcXVlIGlkIGZvciB0aGUgdmFsdWUgLSB1c2VkIGZvciBhcmlhXG5cdG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLCAvLyBtZXRob2QgdG8gaGFuZGxlIGNsaWNrIG9uIHZhbHVlIGxhYmVsXG5cdG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYywgLy8gbWV0aG9kIHRvIGhhbmRsZSByZW1vdmFsIG9mIHRoZSB2YWx1ZVxuXHR2YWx1ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkIC8vIHRoZSBvcHRpb24gb2JqZWN0IGZvciB0aGlzIHZhbHVlXG59O1xuXG4vKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL3JlYWN0LXNlbGVjdFxuKi9cbnZhciBzdHJpbmdpZnlWYWx1ZSA9IGZ1bmN0aW9uIHN0cmluZ2lmeVZhbHVlKHZhbHVlKSB7XG5cdHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiB2YWx1ZSAhPT0gbnVsbCAmJiBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgfHwgJyc7XG59O1xuXG52YXIgc3RyaW5nT3JOb2RlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKTtcbnZhciBzdHJpbmdPck51bWJlciA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKTtcblxudmFyIGluc3RhbmNlSWQgPSAxO1xuXG52YXIgc2hvdWxkU2hvd1ZhbHVlID0gZnVuY3Rpb24gc2hvdWxkU2hvd1ZhbHVlKHN0YXRlLCBwcm9wcykge1xuXHR2YXIgaW5wdXRWYWx1ZSA9IHN0YXRlLmlucHV0VmFsdWUsXG5cdCAgICBpc1BzZXVkb0ZvY3VzZWQgPSBzdGF0ZS5pc1BzZXVkb0ZvY3VzZWQsXG5cdCAgICBpc0ZvY3VzZWQgPSBzdGF0ZS5pc0ZvY3VzZWQ7XG5cdHZhciBvblNlbGVjdFJlc2V0c0lucHV0ID0gcHJvcHMub25TZWxlY3RSZXNldHNJbnB1dDtcblxuXG5cdGlmICghaW5wdXRWYWx1ZSkgcmV0dXJuIHRydWU7XG5cblx0aWYgKCFvblNlbGVjdFJlc2V0c0lucHV0KSB7XG5cdFx0cmV0dXJuICEoIWlzRm9jdXNlZCAmJiBpc1BzZXVkb0ZvY3VzZWQgfHwgaXNGb2N1c2VkICYmICFpc1BzZXVkb0ZvY3VzZWQpO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxudmFyIHNob3VsZFNob3dQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIHNob3VsZFNob3dQbGFjZWhvbGRlcihzdGF0ZSwgcHJvcHMsIGlzT3Blbikge1xuXHR2YXIgaW5wdXRWYWx1ZSA9IHN0YXRlLmlucHV0VmFsdWUsXG5cdCAgICBpc1BzZXVkb0ZvY3VzZWQgPSBzdGF0ZS5pc1BzZXVkb0ZvY3VzZWQsXG5cdCAgICBpc0ZvY3VzZWQgPSBzdGF0ZS5pc0ZvY3VzZWQ7XG5cdHZhciBvblNlbGVjdFJlc2V0c0lucHV0ID0gcHJvcHMub25TZWxlY3RSZXNldHNJbnB1dDtcblxuXG5cdHJldHVybiAhaW5wdXRWYWx1ZSB8fCAhb25TZWxlY3RSZXNldHNJbnB1dCAmJiAhaXNPcGVuICYmICFpc1BzZXVkb0ZvY3VzZWQgJiYgIWlzRm9jdXNlZDtcbn07XG5cbi8qKlxuICogUmV0cmlldmUgYSB2YWx1ZSBmcm9tIHRoZSBnaXZlbiBvcHRpb25zIGFuZCB2YWx1ZUtleVxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfEFycmF5fSB2YWx1ZVx0LSB0aGUgc2VsZWN0ZWQgdmFsdWUocylcbiAqIEBwYXJhbSB7T2JqZWN0fVx0XHQgcHJvcHNcdC0gdGhlIFNlbGVjdCBjb21wb25lbnQncyBwcm9wcyAob3IgbmV4dFByb3BzKVxuICovXG52YXIgZXhwYW5kVmFsdWUgPSBmdW5jdGlvbiBleHBhbmRWYWx1ZSh2YWx1ZSwgcHJvcHMpIHtcblx0dmFyIHZhbHVlVHlwZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpO1xuXHRpZiAodmFsdWVUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWx1ZVR5cGUgIT09ICdudW1iZXInICYmIHZhbHVlVHlwZSAhPT0gJ2Jvb2xlYW4nKSByZXR1cm4gdmFsdWU7XG5cdHZhciBvcHRpb25zID0gcHJvcHMub3B0aW9ucyxcblx0ICAgIHZhbHVlS2V5ID0gcHJvcHMudmFsdWVLZXk7XG5cblx0aWYgKCFvcHRpb25zKSByZXR1cm47XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChTdHJpbmcob3B0aW9uc1tpXVt2YWx1ZUtleV0pID09PSBTdHJpbmcodmFsdWUpKSByZXR1cm4gb3B0aW9uc1tpXTtcblx0fVxufTtcblxudmFyIGhhbmRsZVJlcXVpcmVkID0gZnVuY3Rpb24gaGFuZGxlUmVxdWlyZWQodmFsdWUsIG11bHRpKSB7XG5cdGlmICghdmFsdWUpIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gbXVsdGkgPyB2YWx1ZS5sZW5ndGggPT09IDAgOiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xufTtcblxudmFyIFNlbGVjdCQxID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0aW5oZXJpdHMoU2VsZWN0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBTZWxlY3QocHJvcHMpIHtcblx0XHRjbGFzc0NhbGxDaGVjayh0aGlzLCBTZWxlY3QpO1xuXG5cdFx0dmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU2VsZWN0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2VsZWN0KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG5cdFx0WydjbGVhclZhbHVlJywgJ2ZvY3VzT3B0aW9uJywgJ2dldE9wdGlvbkxhYmVsJywgJ2hhbmRsZUlucHV0Qmx1cicsICdoYW5kbGVJbnB1dENoYW5nZScsICdoYW5kbGVJbnB1dEZvY3VzJywgJ2hhbmRsZUlucHV0VmFsdWVDaGFuZ2UnLCAnaGFuZGxlS2V5RG93bicsICdoYW5kbGVNZW51U2Nyb2xsJywgJ2hhbmRsZU1vdXNlRG93bicsICdoYW5kbGVNb3VzZURvd25PbkFycm93JywgJ2hhbmRsZU1vdXNlRG93bk9uTWVudScsICdoYW5kbGVUb3VjaEVuZCcsICdoYW5kbGVUb3VjaEVuZENsZWFyVmFsdWUnLCAnaGFuZGxlVG91Y2hNb3ZlJywgJ2hhbmRsZVRvdWNoT3V0c2lkZScsICdoYW5kbGVUb3VjaFN0YXJ0JywgJ2hhbmRsZVZhbHVlQ2xpY2snLCAnb25PcHRpb25SZWYnLCAncmVtb3ZlVmFsdWUnLCAnc2VsZWN0VmFsdWUnXS5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuXHRcdFx0cmV0dXJuIF90aGlzW2ZuXSA9IF90aGlzW2ZuXS5iaW5kKF90aGlzKTtcblx0XHR9KTtcblxuXHRcdF90aGlzLnN0YXRlID0ge1xuXHRcdFx0aW5wdXRWYWx1ZTogJycsXG5cdFx0XHRpc0ZvY3VzZWQ6IGZhbHNlLFxuXHRcdFx0aXNPcGVuOiBmYWxzZSxcblx0XHRcdGlzUHNldWRvRm9jdXNlZDogZmFsc2UsXG5cdFx0XHRyZXF1aXJlZDogZmFsc2Vcblx0XHR9O1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdGNyZWF0ZUNsYXNzKFNlbGVjdCwgW3tcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0XHR0aGlzLl9pbnN0YW5jZVByZWZpeCA9ICdyZWFjdC1zZWxlY3QtJyArICh0aGlzLnByb3BzLmluc3RhbmNlSWQgfHwgKytpbnN0YW5jZUlkKSArICctJztcblx0XHRcdHZhciB2YWx1ZUFycmF5ID0gdGhpcy5nZXRWYWx1ZUFycmF5KHRoaXMucHJvcHMudmFsdWUpO1xuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5yZXF1aXJlZCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRyZXF1aXJlZDogaGFuZGxlUmVxdWlyZWQodmFsdWVBcnJheVswXSwgdGhpcy5wcm9wcy5tdWx0aSlcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wcm9wcy5hdXRvZm9jdXMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ1dhcm5pbmc6IFRoZSBhdXRvZm9jdXMgcHJvcCBoYXMgY2hhbmdlZCB0byBhdXRvRm9jdXMsIHN1cHBvcnQgd2lsbCBiZSByZW1vdmVkIGFmdGVyIHJlYWN0LXNlbGVjdEAxLjAnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cyB8fCB0aGlzLnByb3BzLmF1dG9mb2N1cykge1xuXHRcdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheShuZXh0UHJvcHMudmFsdWUsIG5leHRQcm9wcyk7XG5cblx0XHRcdGlmIChuZXh0UHJvcHMucmVxdWlyZWQpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0cmVxdWlyZWQ6IGhhbmRsZVJlcXVpcmVkKHZhbHVlQXJyYXlbMF0sIG5leHRQcm9wcy5tdWx0aSlcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMucmVxdWlyZWQpIHtcblx0XHRcdFx0Ly8gVXNlZCB0byBiZSByZXF1aXJlZCBidXQgaXQncyBub3QgYW55IG1vcmVcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHJlcXVpcmVkOiBmYWxzZSB9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAmJiB0aGlzLnByb3BzLnZhbHVlICE9PSBuZXh0UHJvcHMudmFsdWUgJiYgbmV4dFByb3BzLm9uU2VsZWN0UmVzZXRzSW5wdXQpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IHRoaXMuaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZSgnJykgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG5cdFx0XHQvLyBmb2N1cyB0byB0aGUgc2VsZWN0ZWQgb3B0aW9uXG5cdFx0XHRpZiAodGhpcy5tZW51ICYmIHRoaXMuZm9jdXNlZCAmJiB0aGlzLnN0YXRlLmlzT3BlbiAmJiAhdGhpcy5oYXNTY3JvbGxlZFRvT3B0aW9uKSB7XG5cdFx0XHRcdHZhciBmb2N1c2VkT3B0aW9uTm9kZSA9IGZpbmRET01Ob2RlKHRoaXMuZm9jdXNlZCk7XG5cdFx0XHRcdHZhciBtZW51Tm9kZSA9IGZpbmRET01Ob2RlKHRoaXMubWVudSk7XG5cblx0XHRcdFx0dmFyIHNjcm9sbFRvcCA9IG1lbnVOb2RlLnNjcm9sbFRvcDtcblx0XHRcdFx0dmFyIHNjcm9sbEJvdHRvbSA9IHNjcm9sbFRvcCArIG1lbnVOb2RlLm9mZnNldEhlaWdodDtcblx0XHRcdFx0dmFyIG9wdGlvblRvcCA9IGZvY3VzZWRPcHRpb25Ob2RlLm9mZnNldFRvcDtcblx0XHRcdFx0dmFyIG9wdGlvbkJvdHRvbSA9IG9wdGlvblRvcCArIGZvY3VzZWRPcHRpb25Ob2RlLm9mZnNldEhlaWdodDtcblxuXHRcdFx0XHRpZiAoc2Nyb2xsVG9wID4gb3B0aW9uVG9wIHx8IHNjcm9sbEJvdHRvbSA8IG9wdGlvbkJvdHRvbSkge1xuXHRcdFx0XHRcdG1lbnVOb2RlLnNjcm9sbFRvcCA9IGZvY3VzZWRPcHRpb25Ob2RlLm9mZnNldFRvcDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdlIHN0aWxsIHNldCBoYXNTY3JvbGxlZFRvT3B0aW9uIHRvIHRydWUgZXZlbiBpZiB3ZSBkaWRuJ3Rcblx0XHRcdFx0Ly8gYWN0dWFsbHkgbmVlZCB0byBzY3JvbGwsIGFzIHdlJ3ZlIHN0aWxsIGNvbmZpcm1lZCB0aGF0IHRoZVxuXHRcdFx0XHQvLyBvcHRpb24gaXMgaW4gdmlldy5cblx0XHRcdFx0dGhpcy5oYXNTY3JvbGxlZFRvT3B0aW9uID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRcdHRoaXMuaGFzU2Nyb2xsZWRUb09wdGlvbiA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5fc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgJiYgdGhpcy5mb2N1c2VkICYmIHRoaXMubWVudSkge1xuXHRcdFx0XHR0aGlzLl9zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IGZhbHNlO1xuXHRcdFx0XHR2YXIgZm9jdXNlZERPTSA9IGZpbmRET01Ob2RlKHRoaXMuZm9jdXNlZCk7XG5cdFx0XHRcdHZhciBtZW51RE9NID0gZmluZERPTU5vZGUodGhpcy5tZW51KTtcblx0XHRcdFx0dmFyIGZvY3VzZWRSZWN0ID0gZm9jdXNlZERPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0dmFyIG1lbnVSZWN0ID0gbWVudURPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0aWYgKGZvY3VzZWRSZWN0LmJvdHRvbSA+IG1lbnVSZWN0LmJvdHRvbSkge1xuXHRcdFx0XHRcdG1lbnVET00uc2Nyb2xsVG9wID0gZm9jdXNlZERPTS5vZmZzZXRUb3AgKyBmb2N1c2VkRE9NLmNsaWVudEhlaWdodCAtIG1lbnVET00ub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR9IGVsc2UgaWYgKGZvY3VzZWRSZWN0LnRvcCA8IG1lbnVSZWN0LnRvcCkge1xuXHRcdFx0XHRcdG1lbnVET00uc2Nyb2xsVG9wID0gZm9jdXNlZERPTS5vZmZzZXRUb3A7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnByb3BzLnNjcm9sbE1lbnVJbnRvVmlldyAmJiB0aGlzLm1lbnVDb250YWluZXIpIHtcblx0XHRcdFx0dmFyIG1lbnVDb250YWluZXJSZWN0ID0gdGhpcy5tZW51Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRpZiAod2luZG93LmlubmVySGVpZ2h0IDwgbWVudUNvbnRhaW5lclJlY3QuYm90dG9tICsgdGhpcy5wcm9wcy5tZW51QnVmZmVyKSB7XG5cdFx0XHRcdFx0d2luZG93LnNjcm9sbEJ5KDAsIG1lbnVDb250YWluZXJSZWN0LmJvdHRvbSArIHRoaXMucHJvcHMubWVudUJ1ZmZlciAtIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChwcmV2UHJvcHMuZGlzYWJsZWQgIT09IHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogZmFsc2UgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGVcblx0XHRcdFx0dGhpcy5jbG9zZU1lbnUoKTtcblx0XHRcdH1cblx0XHRcdGlmIChwcmV2U3RhdGUuaXNPcGVuICE9PSB0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0XHR0aGlzLnRvZ2dsZVRvdWNoT3V0c2lkZUV2ZW50KHRoaXMuc3RhdGUuaXNPcGVuKTtcblx0XHRcdFx0dmFyIGhhbmRsZXIgPSB0aGlzLnN0YXRlLmlzT3BlbiA/IHRoaXMucHJvcHMub25PcGVuIDogdGhpcy5wcm9wcy5vbkNsb3NlO1xuXHRcdFx0XHRoYW5kbGVyICYmIGhhbmRsZXIoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFx0dGhpcy50b2dnbGVUb3VjaE91dHNpZGVFdmVudChmYWxzZSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAndG9nZ2xlVG91Y2hPdXRzaWRlRXZlbnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVUb3VjaE91dHNpZGVFdmVudChlbmFibGVkKSB7XG5cdFx0XHR2YXIgZXZlbnRUb2dnbGVyTmFtZSA9IGVuYWJsZWQgPyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ2F0dGFjaEV2ZW50JyA6IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIgPyAncmVtb3ZlRXZlbnRMaXN0ZW5lcicgOiAnZGV0YWNoRXZlbnQnO1xuXHRcdFx0dmFyIHByZWYgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyID8gJycgOiAnb24nO1xuXG5cdFx0XHRkb2N1bWVudFtldmVudFRvZ2dsZXJOYW1lXShwcmVmICsgJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZVRvdWNoT3V0c2lkZSk7XG5cdFx0XHRkb2N1bWVudFtldmVudFRvZ2dsZXJOYW1lXShwcmVmICsgJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlVG91Y2hPdXRzaWRlKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaE91dHNpZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaE91dHNpZGUoZXZlbnQpIHtcblx0XHRcdC8vIGhhbmRsZSB0b3VjaCBvdXRzaWRlIG9uIGlvcyB0byBkaXNtaXNzIG1lbnVcblx0XHRcdGlmICh0aGlzLndyYXBwZXIgJiYgIXRoaXMud3JhcHBlci5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG5cdFx0XHRcdHRoaXMuY2xvc2VNZW51KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcblx0XHRcdGlmICghdGhpcy5pbnB1dCkgcmV0dXJuO1xuXHRcdFx0dGhpcy5pbnB1dC5mb2N1cygpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2JsdXJJbnB1dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGJsdXJJbnB1dCgpIHtcblx0XHRcdGlmICghdGhpcy5pbnB1dCkgcmV0dXJuO1xuXHRcdFx0dGhpcy5pbnB1dC5ibHVyKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hNb3ZlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKCkge1xuXHRcdFx0Ly8gU2V0IGEgZmxhZyB0aGF0IHRoZSB2aWV3IGlzIGJlaW5nIGRyYWdnZWRcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoU3RhcnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KCkge1xuXHRcdFx0Ly8gU2V0IGEgZmxhZyB0aGF0IHRoZSB2aWV3IGlzIG5vdCBiZWluZyBkcmFnZ2VkXG5cdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hFbmQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZChldmVudCkge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZCwgSW4gdGhpcyBjYXNlXG5cdFx0XHQvLyB3ZSBkb24ndCB3YW50IHRvIGZpcmUgdGhlIGNsaWNrIGV2ZW50IChiZWNhdXNlIHRoZSB1c2VyIG9ubHkgd2FudHMgdG8gc2Nyb2xsKVxuXHRcdFx0aWYgKHRoaXMuZHJhZ2dpbmcpIHJldHVybjtcblxuXHRcdFx0Ly8gRmlyZSB0aGUgbW91c2UgZXZlbnRzXG5cdFx0XHR0aGlzLmhhbmRsZU1vdXNlRG93bihldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hFbmRDbGVhclZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmRDbGVhclZhbHVlKGV2ZW50KSB7XG5cdFx0XHQvLyBDaGVjayBpZiB0aGUgdmlldyBpcyBiZWluZyBkcmFnZ2VkLCBJbiB0aGlzIGNhc2Vcblx0XHRcdC8vIHdlIGRvbid0IHdhbnQgdG8gZmlyZSB0aGUgY2xpY2sgZXZlbnQgKGJlY2F1c2UgdGhlIHVzZXIgb25seSB3YW50cyB0byBzY3JvbGwpXG5cdFx0XHRpZiAodGhpcy5kcmFnZ2luZykgcmV0dXJuO1xuXG5cdFx0XHQvLyBDbGVhciB0aGUgdmFsdWVcblx0XHRcdHRoaXMuY2xlYXJWYWx1ZShldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VEb3duJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG5cdFx0XHQvLyBpZiB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZCBieSBhIG1vdXNlZG93biBhbmQgbm90IHRoZSBwcmltYXJ5XG5cdFx0XHQvLyBidXR0b24sIG9yIGlmIHRoZSBjb21wb25lbnQgaXMgZGlzYWJsZWQsIGlnbm9yZSBpdC5cblx0XHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8IGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuXHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUuaXNGb2N1c2VkKSB7XG5cdFx0XHRcdFx0dGhpcy5fb3BlbkFmdGVyRm9jdXMgPSB0aGlzLnByb3BzLm9wZW5PbkNsaWNrO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHRcdFx0fSBlbHNlIGlmICghdGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGlzT3BlbjogdHJ1ZSxcblx0XHRcdFx0XHRcdGlzUHNldWRvRm9jdXNlZDogZmFsc2UsXG5cdFx0XHRcdFx0XHRmb2N1c2VkT3B0aW9uOiBudWxsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIHByZXZlbnQgZGVmYXVsdCBldmVudCBoYW5kbGVyc1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0Ly8gZm9yIHRoZSBub24tc2VhcmNoYWJsZSBzZWxlY3QsIHRvZ2dsZSB0aGUgbWVudVxuXHRcdFx0aWYgKCF0aGlzLnByb3BzLnNlYXJjaGFibGUpIHtcblx0XHRcdFx0Ly8gVGhpcyBjb2RlIG1lYW5zIHRoYXQgaWYgYSBzZWxlY3QgaXMgc2VhcmNoYWJsZSwgb25DbGljayB0aGUgb3B0aW9ucyBtZW51IHdpbGwgbm90IGFwcGVhciwgb25seSBvbiBzdWJzZXF1ZW50IGNsaWNrIHdpbGwgaXQgb3Blbi5cblx0XHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0aXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW4sXG5cdFx0XHRcdFx0Zm9jdXNlZE9wdGlvbjogbnVsbFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuc3RhdGUuaXNGb2N1c2VkKSB7XG5cdFx0XHRcdC8vIE9uIGlPUywgd2UgY2FuIGdldCBpbnRvIGEgc3RhdGUgd2hlcmUgd2UgdGhpbmsgdGhlIGlucHV0IGlzIGZvY3VzZWQgYnV0IGl0IGlzbid0IHJlYWxseSxcblx0XHRcdFx0Ly8gc2luY2UgaU9TIGlnbm9yZXMgcHJvZ3JhbW1hdGljIGNhbGxzIHRvIGlucHV0LmZvY3VzKCkgdGhhdCB3ZXJlbid0IHRyaWdnZXJlZCBieSBhIGNsaWNrIGV2ZW50LlxuXHRcdFx0XHQvLyBDYWxsIGZvY3VzKCkgYWdhaW4gaGVyZSB0byBiZSBzYWZlLlxuXHRcdFx0XHR0aGlzLmZvY3VzKCk7XG5cblx0XHRcdFx0dmFyIGlucHV0ID0gdGhpcy5pbnB1dDtcblx0XHRcdFx0dmFyIHRvT3BlbiA9IHRydWU7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBpbnB1dC5nZXRJbnB1dCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdC8vIEdldCB0aGUgYWN0dWFsIERPTSBpbnB1dCBpZiB0aGUgcmVmIGlzIGFuIDxBdXRvc2l6ZUlucHV0IC8+IGNvbXBvbmVudFxuXHRcdFx0XHRcdGlucHV0ID0gaW5wdXQuZ2V0SW5wdXQoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGNsZWFycyB0aGUgdmFsdWUgc28gdGhhdCB0aGUgY3Vyc29yIHdpbGwgYmUgYXQgdGhlIGVuZCBvZiBpbnB1dCB3aGVuIHRoZSBjb21wb25lbnQgcmUtcmVuZGVyc1xuXHRcdFx0XHRpbnB1dC52YWx1ZSA9ICcnO1xuXG5cdFx0XHRcdGlmICh0aGlzLl9mb2N1c0FmdGVyQ2xlYXIpIHtcblx0XHRcdFx0XHR0b09wZW4gPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLl9mb2N1c0FmdGVyQ2xlYXIgPSBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGlmIHRoZSBpbnB1dCBpcyBmb2N1c2VkLCBlbnN1cmUgdGhlIG1lbnUgaXMgb3BlblxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpc09wZW46IHRvT3Blbixcblx0XHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdGZvY3VzZWRPcHRpb246IG51bGxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBvdGhlcndpc2UsIGZvY3VzIHRoZSBpbnB1dCBhbmQgb3BlbiB0aGUgbWVudVxuXHRcdFx0XHR0aGlzLl9vcGVuQWZ0ZXJGb2N1cyA9IHRoaXMucHJvcHMub3Blbk9uQ2xpY2s7XG5cdFx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRPcHRpb246IG51bGwgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VEb3duT25BcnJvdycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bk9uQXJyb3coZXZlbnQpIHtcblx0XHRcdC8vIGlmIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGJ5IGEgbW91c2Vkb3duIGFuZCBub3QgdGhlIHByaW1hcnlcblx0XHRcdC8vIGJ1dHRvbiwgb3IgaWYgdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZCwgaWdub3JlIGl0LlxuXHRcdFx0aWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRcdC8vIHByZXZlbnQgZGVmYXVsdCBldmVudCBoYW5kbGVyc1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Ly8gY2xvc2UgdGhlIG1lbnVcblx0XHRcdFx0dGhpcy5jbG9zZU1lbnUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIElmIHRoZSBtZW51IGlzbid0IG9wZW4sIGxldCB0aGUgZXZlbnQgYnViYmxlIHRvIHRoZSBtYWluIGhhbmRsZU1vdXNlRG93blxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpc09wZW46IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VEb3duT25NZW51Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duT25NZW51KGV2ZW50KSB7XG5cdFx0XHQvLyBpZiB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZCBieSBhIG1vdXNlZG93biBhbmQgbm90IHRoZSBwcmltYXJ5XG5cdFx0XHQvLyBidXR0b24sIG9yIGlmIHRoZSBjb21wb25lbnQgaXMgZGlzYWJsZWQsIGlnbm9yZSBpdC5cblx0XHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8IGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dGhpcy5fb3BlbkFmdGVyRm9jdXMgPSB0cnVlO1xuXHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2Nsb3NlTWVudScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLm9uQ2xvc2VSZXNldHNJbnB1dCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpbnB1dFZhbHVlOiB0aGlzLmhhbmRsZUlucHV0VmFsdWVDaGFuZ2UoJycpLFxuXHRcdFx0XHRcdGlzT3BlbjogZmFsc2UsXG5cdFx0XHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiB0aGlzLnN0YXRlLmlzRm9jdXNlZCAmJiAhdGhpcy5wcm9wcy5tdWx0aVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlzT3BlbjogZmFsc2UsXG5cdFx0XHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiB0aGlzLnN0YXRlLmlzRm9jdXNlZCAmJiAhdGhpcy5wcm9wcy5tdWx0aVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuaGFzU2Nyb2xsZWRUb09wdGlvbiA9IGZhbHNlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZUlucHV0Rm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVJbnB1dEZvY3VzKGV2ZW50KSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuO1xuXG5cdFx0XHR2YXIgdG9PcGVuID0gdGhpcy5zdGF0ZS5pc09wZW4gfHwgdGhpcy5fb3BlbkFmdGVyRm9jdXMgfHwgdGhpcy5wcm9wcy5vcGVuT25Gb2N1cztcblx0XHRcdHRvT3BlbiA9IHRoaXMuX2ZvY3VzQWZ0ZXJDbGVhciA/IGZhbHNlIDogdG9PcGVuOyAvL2lmIGZvY3VzIGhhcHBlbnMgYWZ0ZXIgY2xlYXIgdmFsdWVzLCBkb24ndCBvcGVuIGRyb3Bkb3duIHlldC5cblxuXHRcdFx0aWYgKHRoaXMucHJvcHMub25Gb2N1cykge1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aXNGb2N1c2VkOiB0cnVlLFxuXHRcdFx0XHRpc09wZW46ICEhdG9PcGVuXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5fZm9jdXNBZnRlckNsZWFyID0gZmFsc2U7XG5cdFx0XHR0aGlzLl9vcGVuQWZ0ZXJGb2N1cyA9IGZhbHNlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZUlucHV0Qmx1cicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUlucHV0Qmx1cihldmVudCkge1xuXHRcdFx0Ly8gVGhlIGNoZWNrIGZvciBtZW51LmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpIGlzIG5lY2Vzc2FyeSB0byBwcmV2ZW50IElFMTEncyBzY3JvbGxiYXIgZnJvbSBjbG9zaW5nIHRoZSBtZW51IGluIGNlcnRhaW4gY29udGV4dHMuXG5cdFx0XHRpZiAodGhpcy5tZW51ICYmICh0aGlzLm1lbnUgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgfHwgdGhpcy5tZW51LmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSkge1xuXHRcdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcblx0XHRcdH1cblx0XHRcdHZhciBvbkJsdXJyZWRTdGF0ZSA9IHtcblx0XHRcdFx0aXNGb2N1c2VkOiBmYWxzZSxcblx0XHRcdFx0aXNPcGVuOiBmYWxzZSxcblx0XHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiBmYWxzZVxuXHRcdFx0fTtcblx0XHRcdGlmICh0aGlzLnByb3BzLm9uQmx1clJlc2V0c0lucHV0KSB7XG5cdFx0XHRcdG9uQmx1cnJlZFN0YXRlLmlucHV0VmFsdWUgPSB0aGlzLmhhbmRsZUlucHV0VmFsdWVDaGFuZ2UoJycpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZShvbkJsdXJyZWRTdGF0ZSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlSW5wdXRDaGFuZ2UnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xuXHRcdFx0dmFyIG5ld0lucHV0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cblx0XHRcdGlmICh0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09IGV2ZW50LnRhcmdldC52YWx1ZSkge1xuXHRcdFx0XHRuZXdJbnB1dFZhbHVlID0gdGhpcy5oYW5kbGVJbnB1dFZhbHVlQ2hhbmdlKG5ld0lucHV0VmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aW5wdXRWYWx1ZTogbmV3SW5wdXRWYWx1ZSxcblx0XHRcdFx0aXNPcGVuOiB0cnVlLFxuXHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdzZXRJbnB1dFZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2V0SW5wdXRWYWx1ZShuZXdWYWx1ZSkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMub25JbnB1dENoYW5nZSkge1xuXHRcdFx0XHR2YXIgbmV4dFN0YXRlID0gdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKG5ld1ZhbHVlKTtcblx0XHRcdFx0aWYgKG5leHRTdGF0ZSAhPSBudWxsICYmICh0eXBlb2YgbmV4dFN0YXRlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihuZXh0U3RhdGUpKSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRuZXdWYWx1ZSA9ICcnICsgbmV4dFN0YXRlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aW5wdXRWYWx1ZTogbmV3VmFsdWVcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZUlucHV0VmFsdWVDaGFuZ2UnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVJbnB1dFZhbHVlQ2hhbmdlKG5ld1ZhbHVlKSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKSB7XG5cdFx0XHRcdHZhciBuZXh0U3RhdGUgPSB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UobmV3VmFsdWUpO1xuXHRcdFx0XHQvLyBOb3RlOiAhPSB1c2VkIGRlbGliZXJhdGVseSBoZXJlIHRvIGNhdGNoIHVuZGVmaW5lZCBhbmQgbnVsbFxuXHRcdFx0XHRpZiAobmV4dFN0YXRlICE9IG51bGwgJiYgKHR5cGVvZiBuZXh0U3RhdGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5leHRTdGF0ZSkpICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdG5ld1ZhbHVlID0gJycgKyBuZXh0U3RhdGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXdWYWx1ZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVLZXlEb3duJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHJldHVybjtcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uSW5wdXRLZXlEb3duID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25JbnB1dEtleURvd24oZXZlbnQpO1xuXHRcdFx0XHRpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcblx0XHRcdFx0Y2FzZSA4OlxuXHRcdFx0XHRcdC8vIGJhY2tzcGFjZVxuXHRcdFx0XHRcdGlmICghdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICYmIHRoaXMucHJvcHMuYmFja3NwYWNlUmVtb3Zlcykge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHRoaXMucG9wVmFsdWUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgOTpcblx0XHRcdFx0XHQvLyB0YWJcblx0XHRcdFx0XHRpZiAoZXZlbnQuc2hpZnRLZXkgfHwgIXRoaXMuc3RhdGUuaXNPcGVuIHx8ICF0aGlzLnByb3BzLnRhYlNlbGVjdHNWYWx1ZSkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RGb2N1c2VkT3B0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTM6XG5cdFx0XHRcdFx0Ly8gZW50ZXJcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdGlmICh0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3RGb2N1c2VkT3B0aW9uKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuZm9jdXNOZXh0T3B0aW9uKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDI3OlxuXHRcdFx0XHRcdC8vIGVzY2FwZVxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNsb3NlTWVudSgpO1xuXHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLmNsZWFyYWJsZSAmJiB0aGlzLnByb3BzLmVzY2FwZUNsZWFyc1ZhbHVlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNsZWFyVmFsdWUoZXZlbnQpO1xuXHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDMyOlxuXHRcdFx0XHRcdC8vIHNwYWNlXG5cdFx0XHRcdFx0aWYgKHRoaXMucHJvcHMuc2VhcmNoYWJsZSkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0XHRcdFx0dGhpcy5mb2N1c05leHRPcHRpb24oKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdEZvY3VzZWRPcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzODpcblx0XHRcdFx0XHQvLyB1cFxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5mb2N1c1ByZXZpb3VzT3B0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgNDA6XG5cdFx0XHRcdFx0Ly8gZG93blxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5mb2N1c05leHRPcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzMzpcblx0XHRcdFx0XHQvLyBwYWdlIHVwXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLmZvY3VzUGFnZVVwT3B0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMzQ6XG5cdFx0XHRcdFx0Ly8gcGFnZSBkb3duXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLmZvY3VzUGFnZURvd25PcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzNTpcblx0XHRcdFx0XHQvLyBlbmQga2V5XG5cdFx0XHRcdFx0aWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLmZvY3VzRW5kT3B0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMzY6XG5cdFx0XHRcdFx0Ly8gaG9tZSBrZXlcblx0XHRcdFx0XHRpZiAoZXZlbnQuc2hpZnRLZXkpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXNTdGFydE9wdGlvbigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDQ2OlxuXHRcdFx0XHRcdC8vIGRlbGV0ZVxuXHRcdFx0XHRcdGlmICghdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICYmIHRoaXMucHJvcHMuZGVsZXRlUmVtb3Zlcykge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHRoaXMucG9wVmFsdWUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVmFsdWVDbGljaycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVZhbHVlQ2xpY2sob3B0aW9uLCBldmVudCkge1xuXHRcdFx0aWYgKCF0aGlzLnByb3BzLm9uVmFsdWVDbGljaykgcmV0dXJuO1xuXHRcdFx0dGhpcy5wcm9wcy5vblZhbHVlQ2xpY2sob3B0aW9uLCBldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTWVudVNjcm9sbCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1lbnVTY3JvbGwoZXZlbnQpIHtcblx0XHRcdGlmICghdGhpcy5wcm9wcy5vbk1lbnVTY3JvbGxUb0JvdHRvbSkgcmV0dXJuO1xuXHRcdFx0dmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuXHRcdFx0aWYgKHRhcmdldC5zY3JvbGxIZWlnaHQgPiB0YXJnZXQub2Zmc2V0SGVpZ2h0ICYmIHRhcmdldC5zY3JvbGxIZWlnaHQgLSB0YXJnZXQub2Zmc2V0SGVpZ2h0IC0gdGFyZ2V0LnNjcm9sbFRvcCA8PSAwKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25NZW51U2Nyb2xsVG9Cb3R0b20oKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRPcHRpb25MYWJlbCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldE9wdGlvbkxhYmVsKG9wKSB7XG5cdFx0XHRyZXR1cm4gb3BbdGhpcy5wcm9wcy5sYWJlbEtleV07XG5cdFx0fVxuXG5cdFx0LyoqXG4gICAqIFR1cm5zIGEgdmFsdWUgaW50byBhbiBhcnJheSBmcm9tIHRoZSBnaXZlbiBvcHRpb25zXG4gICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcnxBcnJheX0gdmFsdWVcdFx0LSB0aGUgdmFsdWUgb2YgdGhlIHNlbGVjdCBpbnB1dFxuICAgKiBAcGFyYW0ge09iamVjdH1cdFx0bmV4dFByb3BzXHQtIG9wdGlvbmFsbHkgc3BlY2lmeSB0aGUgbmV4dFByb3BzIHNvIHRoZSByZXR1cm5lZCBhcnJheSB1c2VzIHRoZSBsYXRlc3QgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuc1x0e0FycmF5fVx0dGhlIHZhbHVlIG9mIHRoZSBzZWxlY3QgcmVwcmVzZW50ZWQgaW4gYW4gYXJyYXlcbiAgICovXG5cblx0fSwge1xuXHRcdGtleTogJ2dldFZhbHVlQXJyYXknLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZUFycmF5KHZhbHVlKSB7XG5cdFx0XHR2YXIgbmV4dFByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cblx0XHRcdC8qKiBzdXBwb3J0IG9wdGlvbmFsbHkgcGFzc2luZyBpbiB0aGUgYG5leHRQcm9wc2Agc28gYGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNgIHVwZGF0ZXMgd2lsbCBmdW5jdGlvbiBhcyBleHBlY3RlZCAqL1xuXHRcdFx0dmFyIHByb3BzID0gKHR5cGVvZiBuZXh0UHJvcHMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5leHRQcm9wcykpID09PSAnb2JqZWN0JyA/IG5leHRQcm9wcyA6IHRoaXMucHJvcHM7XG5cdFx0XHRpZiAocHJvcHMubXVsdGkpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnNwbGl0KHByb3BzLmRlbGltaXRlcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gW107XG5cdFx0XHRcdFx0dmFsdWUgPSBbdmFsdWVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGV4cGFuZFZhbHVlKHZhbHVlLCBwcm9wcyk7XG5cdFx0XHRcdH0pLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHZhciBleHBhbmRlZFZhbHVlID0gZXhwYW5kVmFsdWUodmFsdWUsIHByb3BzKTtcblx0XHRcdHJldHVybiBleHBhbmRlZFZhbHVlID8gW2V4cGFuZGVkVmFsdWVdIDogW107XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnc2V0VmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZSh2YWx1ZSkge1xuXHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRcdGlmICh0aGlzLnByb3BzLmF1dG9CbHVyKSB7XG5cdFx0XHRcdHRoaXMuYmx1cklucHV0KCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5yZXF1aXJlZCkge1xuXHRcdFx0XHR2YXIgcmVxdWlyZWQgPSBoYW5kbGVSZXF1aXJlZCh2YWx1ZSwgdGhpcy5wcm9wcy5tdWx0aSk7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyByZXF1aXJlZDogcmVxdWlyZWQgfSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5zaW1wbGVWYWx1ZSAmJiB2YWx1ZSkge1xuXHRcdFx0XHR2YWx1ZSA9IHRoaXMucHJvcHMubXVsdGkgPyB2YWx1ZS5tYXAoZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gaVtfdGhpczIucHJvcHMudmFsdWVLZXldO1xuXHRcdFx0XHR9KS5qb2luKHRoaXMucHJvcHMuZGVsaW1pdGVyKSA6IHZhbHVlW3RoaXMucHJvcHMudmFsdWVLZXldO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnc2VsZWN0VmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RWYWx1ZSh2YWx1ZSkge1xuXHRcdFx0dmFyIF90aGlzMyA9IHRoaXM7XG5cblx0XHRcdC8vIE5PVEU6IHdlIGFjdHVhbGx5IGFkZC9zZXQgdGhlIHZhbHVlIGluIGEgY2FsbGJhY2sgdG8gbWFrZSBzdXJlIHRoZVxuXHRcdFx0Ly8gaW5wdXQgdmFsdWUgaXMgZW1wdHkgdG8gYXZvaWQgc3R5bGluZyBpc3N1ZXMgaW4gQ2hyb21lXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0KSB7XG5cdFx0XHRcdHRoaXMuaGFzU2Nyb2xsZWRUb09wdGlvbiA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHVwZGF0ZWRWYWx1ZSA9IHRoaXMucHJvcHMub25TZWxlY3RSZXNldHNJbnB1dCA/ICcnIDogdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMubXVsdGkpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4OiBudWxsLFxuXHRcdFx0XHRcdGlucHV0VmFsdWU6IHRoaXMuaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZSh1cGRhdGVkVmFsdWUpLFxuXHRcdFx0XHRcdGlzT3BlbjogIXRoaXMucHJvcHMuY2xvc2VPblNlbGVjdFxuXHRcdFx0XHR9LCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dmFyIHZhbHVlQXJyYXkgPSBfdGhpczMuZ2V0VmFsdWVBcnJheShfdGhpczMucHJvcHMudmFsdWUpO1xuXHRcdFx0XHRcdGlmICh2YWx1ZUFycmF5LnNvbWUoZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBpW190aGlzMy5wcm9wcy52YWx1ZUtleV0gPT09IHZhbHVlW190aGlzMy5wcm9wcy52YWx1ZUtleV07XG5cdFx0XHRcdFx0fSkpIHtcblx0XHRcdFx0XHRcdF90aGlzMy5yZW1vdmVWYWx1ZSh2YWx1ZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdF90aGlzMy5hZGRWYWx1ZSh2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlucHV0VmFsdWU6IHRoaXMuaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZSh1cGRhdGVkVmFsdWUpLFxuXHRcdFx0XHRcdGlzT3BlbjogIXRoaXMucHJvcHMuY2xvc2VPblNlbGVjdCxcblx0XHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IHRoaXMuc3RhdGUuaXNGb2N1c2VkXG5cdFx0XHRcdH0sIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRfdGhpczMuc2V0VmFsdWUodmFsdWUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdhZGRWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGFkZFZhbHVlKHZhbHVlKSB7XG5cdFx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheSh0aGlzLnByb3BzLnZhbHVlKTtcblx0XHRcdHZhciB2aXNpYmxlT3B0aW9ucyA9IHRoaXMuX3Zpc2libGVPcHRpb25zLmZpbHRlcihmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRcdHJldHVybiAhdmFsLmRpc2FibGVkO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgbGFzdFZhbHVlSW5kZXggPSB2aXNpYmxlT3B0aW9ucy5pbmRleE9mKHZhbHVlKTtcblx0XHRcdHRoaXMuc2V0VmFsdWUodmFsdWVBcnJheS5jb25jYXQodmFsdWUpKTtcblx0XHRcdGlmICghdGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh2aXNpYmxlT3B0aW9ucy5sZW5ndGggLSAxID09PSBsYXN0VmFsdWVJbmRleCkge1xuXHRcdFx0XHQvLyB0aGUgbGFzdCBvcHRpb24gd2FzIHNlbGVjdGVkOyBmb2N1cyB0aGUgc2Vjb25kLWxhc3Qgb25lXG5cdFx0XHRcdHRoaXMuZm9jdXNPcHRpb24odmlzaWJsZU9wdGlvbnNbbGFzdFZhbHVlSW5kZXggLSAxXSk7XG5cdFx0XHR9IGVsc2UgaWYgKHZpc2libGVPcHRpb25zLmxlbmd0aCA+IGxhc3RWYWx1ZUluZGV4KSB7XG5cdFx0XHRcdC8vIGZvY3VzIHRoZSBvcHRpb24gYmVsb3cgdGhlIHNlbGVjdGVkIG9uZVxuXHRcdFx0XHR0aGlzLmZvY3VzT3B0aW9uKHZpc2libGVPcHRpb25zW2xhc3RWYWx1ZUluZGV4ICsgMV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3BvcFZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcG9wVmFsdWUoKSB7XG5cdFx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheSh0aGlzLnByb3BzLnZhbHVlKTtcblx0XHRcdGlmICghdmFsdWVBcnJheS5sZW5ndGgpIHJldHVybjtcblx0XHRcdGlmICh2YWx1ZUFycmF5W3ZhbHVlQXJyYXkubGVuZ3RoIC0gMV0uY2xlYXJhYmxlVmFsdWUgPT09IGZhbHNlKSByZXR1cm47XG5cdFx0XHR0aGlzLnNldFZhbHVlKHRoaXMucHJvcHMubXVsdGkgPyB2YWx1ZUFycmF5LnNsaWNlKDAsIHZhbHVlQXJyYXkubGVuZ3RoIC0gMSkgOiBudWxsKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW1vdmVWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVZhbHVlKHZhbHVlKSB7XG5cdFx0XHR2YXIgX3RoaXM0ID0gdGhpcztcblxuXHRcdFx0dmFyIHZhbHVlQXJyYXkgPSB0aGlzLmdldFZhbHVlQXJyYXkodGhpcy5wcm9wcy52YWx1ZSk7XG5cdFx0XHR0aGlzLnNldFZhbHVlKHZhbHVlQXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdHJldHVybiBpW190aGlzNC5wcm9wcy52YWx1ZUtleV0gIT09IHZhbHVlW190aGlzNC5wcm9wcy52YWx1ZUtleV07XG5cdFx0XHR9KSk7XG5cdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY2xlYXJWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNsZWFyVmFsdWUoZXZlbnQpIHtcblx0XHRcdC8vIGlmIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGJ5IGEgbW91c2Vkb3duIGFuZCBub3QgdGhlIHByaW1hcnlcblx0XHRcdC8vIGJ1dHRvbiwgaWdub3JlIGl0LlxuXHRcdFx0aWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHRoaXMuc2V0VmFsdWUodGhpcy5nZXRSZXNldFZhbHVlKCkpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGlucHV0VmFsdWU6IHRoaXMuaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZSgnJyksXG5cdFx0XHRcdGlzT3BlbjogZmFsc2Vcblx0XHRcdH0sIHRoaXMuZm9jdXMpO1xuXG5cdFx0XHR0aGlzLl9mb2N1c0FmdGVyQ2xlYXIgPSB0cnVlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldFJlc2V0VmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRSZXNldFZhbHVlKCkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMucmVzZXRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3BzLnJlc2V0VmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMubXVsdGkpIHtcblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1c09wdGlvbihvcHRpb24pIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRmb2N1c2VkT3B0aW9uOiBvcHRpb25cblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzTmV4dE9wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzTmV4dE9wdGlvbigpIHtcblx0XHRcdHRoaXMuZm9jdXNBZGphY2VudE9wdGlvbignbmV4dCcpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzUHJldmlvdXNPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1c1ByZXZpb3VzT3B0aW9uKCkge1xuXHRcdFx0dGhpcy5mb2N1c0FkamFjZW50T3B0aW9uKCdwcmV2aW91cycpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzUGFnZVVwT3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXNQYWdlVXBPcHRpb24oKSB7XG5cdFx0XHR0aGlzLmZvY3VzQWRqYWNlbnRPcHRpb24oJ3BhZ2VfdXAnKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1c1BhZ2VEb3duT3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXNQYWdlRG93bk9wdGlvbigpIHtcblx0XHRcdHRoaXMuZm9jdXNBZGphY2VudE9wdGlvbigncGFnZV9kb3duJyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNTdGFydE9wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzU3RhcnRPcHRpb24oKSB7XG5cdFx0XHR0aGlzLmZvY3VzQWRqYWNlbnRPcHRpb24oJ3N0YXJ0Jyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNFbmRPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1c0VuZE9wdGlvbigpIHtcblx0XHRcdHRoaXMuZm9jdXNBZGphY2VudE9wdGlvbignZW5kJyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNBZGphY2VudE9wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzQWRqYWNlbnRPcHRpb24oZGlyKSB7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHRoaXMuX3Zpc2libGVPcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uLCBpbmRleCkge1xuXHRcdFx0XHRyZXR1cm4geyBvcHRpb246IG9wdGlvbiwgaW5kZXg6IGluZGV4IH07XG5cdFx0XHR9KS5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xuXHRcdFx0XHRyZXR1cm4gIW9wdGlvbi5vcHRpb24uZGlzYWJsZWQ7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuX3Njcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gdHJ1ZTtcblx0XHRcdGlmICghdGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdFx0dmFyIG5ld1N0YXRlID0ge1xuXHRcdFx0XHRcdGZvY3VzZWRPcHRpb246IHRoaXMuX2ZvY3VzZWRPcHRpb24gfHwgKG9wdGlvbnMubGVuZ3RoID8gb3B0aW9uc1tkaXIgPT09ICduZXh0JyA/IDAgOiBvcHRpb25zLmxlbmd0aCAtIDFdLm9wdGlvbiA6IG51bGwpLFxuXHRcdFx0XHRcdGlzT3BlbjogdHJ1ZVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy5vblNlbGVjdFJlc2V0c0lucHV0KSB7XG5cdFx0XHRcdFx0bmV3U3RhdGUuaW5wdXRWYWx1ZSA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIW9wdGlvbnMubGVuZ3RoKSByZXR1cm47XG5cdFx0XHR2YXIgZm9jdXNlZEluZGV4ID0gLTE7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHRoaXMuX2ZvY3VzZWRPcHRpb24gPT09IG9wdGlvbnNbaV0ub3B0aW9uKSB7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gaTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRpciA9PT0gJ25leHQnICYmIGZvY3VzZWRJbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gKGZvY3VzZWRJbmRleCArIDEpICUgb3B0aW9ucy5sZW5ndGg7XG5cdFx0XHR9IGVsc2UgaWYgKGRpciA9PT0gJ3ByZXZpb3VzJykge1xuXHRcdFx0XHRpZiAoZm9jdXNlZEluZGV4ID4gMCkge1xuXHRcdFx0XHRcdGZvY3VzZWRJbmRleCA9IGZvY3VzZWRJbmRleCAtIDE7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGRpciA9PT0gJ3N0YXJ0Jykge1xuXHRcdFx0XHRmb2N1c2VkSW5kZXggPSAwO1xuXHRcdFx0fSBlbHNlIGlmIChkaXIgPT09ICdlbmQnKSB7XG5cdFx0XHRcdGZvY3VzZWRJbmRleCA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcblx0XHRcdH0gZWxzZSBpZiAoZGlyID09PSAncGFnZV91cCcpIHtcblx0XHRcdFx0dmFyIHBvdGVudGlhbEluZGV4ID0gZm9jdXNlZEluZGV4IC0gdGhpcy5wcm9wcy5wYWdlU2l6ZTtcblx0XHRcdFx0aWYgKHBvdGVudGlhbEluZGV4IDwgMCkge1xuXHRcdFx0XHRcdGZvY3VzZWRJbmRleCA9IDA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gcG90ZW50aWFsSW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZGlyID09PSAncGFnZV9kb3duJykge1xuXHRcdFx0XHR2YXIgX3BvdGVudGlhbEluZGV4ID0gZm9jdXNlZEluZGV4ICsgdGhpcy5wcm9wcy5wYWdlU2l6ZTtcblx0XHRcdFx0aWYgKF9wb3RlbnRpYWxJbmRleCA+IG9wdGlvbnMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdGZvY3VzZWRJbmRleCA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb2N1c2VkSW5kZXggPSBfcG90ZW50aWFsSW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGZvY3VzZWRJbmRleCA9PT0gLTEpIHtcblx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gMDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGZvY3VzZWRJbmRleDogb3B0aW9uc1tmb2N1c2VkSW5kZXhdLmluZGV4LFxuXHRcdFx0XHRmb2N1c2VkT3B0aW9uOiBvcHRpb25zW2ZvY3VzZWRJbmRleF0ub3B0aW9uXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRGb2N1c2VkT3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0Rm9jdXNlZE9wdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLl9mb2N1c2VkT3B0aW9uO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3NlbGVjdEZvY3VzZWRPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RGb2N1c2VkT3B0aW9uKCkge1xuXHRcdFx0aWYgKHRoaXMuX2ZvY3VzZWRPcHRpb24pIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2VsZWN0VmFsdWUodGhpcy5fZm9jdXNlZE9wdGlvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyTG9hZGluZycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxvYWRpbmcoKSB7XG5cdFx0XHRpZiAoIXRoaXMucHJvcHMuaXNMb2FkaW5nKSByZXR1cm47XG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ1NlbGVjdC1sb2FkaW5nLXpvbmUnLCAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnU2VsZWN0LWxvYWRpbmcnIH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlclZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVmFsdWUodmFsdWVBcnJheSwgaXNPcGVuKSB7XG5cdFx0XHR2YXIgX3RoaXM1ID0gdGhpcztcblxuXHRcdFx0dmFyIHJlbmRlckxhYmVsID0gdGhpcy5wcm9wcy52YWx1ZVJlbmRlcmVyIHx8IHRoaXMuZ2V0T3B0aW9uTGFiZWw7XG5cdFx0XHR2YXIgVmFsdWVDb21wb25lbnQgPSB0aGlzLnByb3BzLnZhbHVlQ29tcG9uZW50O1xuXHRcdFx0aWYgKCF2YWx1ZUFycmF5Lmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgc2hvd1BsYWNlaG9sZGVyID0gc2hvdWxkU2hvd1BsYWNlaG9sZGVyKHRoaXMuc3RhdGUsIHRoaXMucHJvcHMsIGlzT3Blbik7XG5cdFx0XHRcdHJldHVybiBzaG93UGxhY2Vob2xkZXIgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnU2VsZWN0LXBsYWNlaG9sZGVyJyB9LFxuXHRcdFx0XHRcdHRoaXMucHJvcHMucGxhY2Vob2xkZXJcblx0XHRcdFx0KSA6IG51bGw7XG5cdFx0XHR9XG5cdFx0XHR2YXIgb25DbGljayA9IHRoaXMucHJvcHMub25WYWx1ZUNsaWNrID8gdGhpcy5oYW5kbGVWYWx1ZUNsaWNrIDogbnVsbDtcblx0XHRcdGlmICh0aGlzLnByb3BzLm11bHRpKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZUFycmF5Lm1hcChmdW5jdGlvbiAodmFsdWUsIGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFZhbHVlQ29tcG9uZW50LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogX3RoaXM1LnByb3BzLmRpc2FibGVkIHx8IHZhbHVlLmNsZWFyYWJsZVZhbHVlID09PSBmYWxzZSxcblx0XHRcdFx0XHRcdFx0aWQ6IF90aGlzNS5faW5zdGFuY2VQcmVmaXggKyAnLXZhbHVlLScgKyBpLFxuXHRcdFx0XHRcdFx0XHRpbnN0YW5jZVByZWZpeDogX3RoaXM1Ll9pbnN0YW5jZVByZWZpeCxcblx0XHRcdFx0XHRcdFx0a2V5OiAndmFsdWUtJyArIGkgKyAnLScgKyB2YWx1ZVtfdGhpczUucHJvcHMudmFsdWVLZXldLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrOiBvbkNsaWNrLFxuXHRcdFx0XHRcdFx0XHRvblJlbW92ZTogX3RoaXM1LnJlbW92ZVZhbHVlLFxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcjogX3RoaXM1LnByb3BzLnBsYWNlaG9sZGVyLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdFx0XHRcdHZhbHVlczogdmFsdWVBcnJheVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHJlbmRlckxhYmVsKHZhbHVlLCBpKSxcblx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdCdzcGFuJyxcblx0XHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdTZWxlY3QtYXJpYS1vbmx5JyB9LFxuXHRcdFx0XHRcdFx0XHQnXFx4QTAnXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2UgaWYgKHNob3VsZFNob3dWYWx1ZSh0aGlzLnN0YXRlLCB0aGlzLnByb3BzKSkge1xuXHRcdFx0XHRpZiAoaXNPcGVuKSBvbkNsaWNrID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0VmFsdWVDb21wb25lbnQsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG5cdFx0XHRcdFx0XHRpZDogdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLXZhbHVlLWl0ZW0nLFxuXHRcdFx0XHRcdFx0aW5zdGFuY2VQcmVmaXg6IHRoaXMuX2luc3RhbmNlUHJlZml4LFxuXHRcdFx0XHRcdFx0b25DbGljazogb25DbGljayxcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHZhbHVlQXJyYXlbMF1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHJlbmRlckxhYmVsKHZhbHVlQXJyYXlbMF0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVySW5wdXQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbnB1dCh2YWx1ZUFycmF5LCBmb2N1c2VkT3B0aW9uSW5kZXgpIHtcblx0XHRcdHZhciBfY2xhc3NOYW1lcyxcblx0XHRcdCAgICBfdGhpczYgPSB0aGlzO1xuXG5cdFx0XHR2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygnU2VsZWN0LWlucHV0JywgdGhpcy5wcm9wcy5pbnB1dFByb3BzLmNsYXNzTmFtZSk7XG5cdFx0XHR2YXIgaXNPcGVuID0gdGhpcy5zdGF0ZS5pc09wZW47XG5cblx0XHRcdHZhciBhcmlhT3ducyA9IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzID0ge30sIGRlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctbGlzdCcsIGlzT3BlbiksIGRlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctYmFja3NwYWNlLXJlbW92ZS1tZXNzYWdlJywgdGhpcy5wcm9wcy5tdWx0aSAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlZCAmJiB0aGlzLnN0YXRlLmlzRm9jdXNlZCAmJiAhdGhpcy5zdGF0ZS5pbnB1dFZhbHVlKSwgX2NsYXNzTmFtZXMpKTtcblxuXHRcdFx0dmFyIHZhbHVlID0gdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuXHRcdFx0aWYgKHZhbHVlICYmICF0aGlzLnByb3BzLm9uU2VsZWN0UmVzZXRzSW5wdXQgJiYgIXRoaXMuc3RhdGUuaXNGb2N1c2VkKSB7XG5cdFx0XHRcdC8vIGl0IGhpZGVzIGlucHV0IHZhbHVlIHdoZW4gaXQgaXMgbm90IGZvY3VzZWQgYW5kIHdhcyBub3QgcmVzZXQgb24gc2VsZWN0XG5cdFx0XHRcdHZhbHVlID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBpbnB1dFByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMuaW5wdXRQcm9wcywge1xuXHRcdFx0XHQnYXJpYS1hY3RpdmVkZXNjZW5kYW50JzogaXNPcGVuID8gdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLW9wdGlvbi0nICsgZm9jdXNlZE9wdGlvbkluZGV4IDogdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLXZhbHVlJyxcblx0XHRcdFx0J2FyaWEtZGVzY3JpYmVkYnknOiB0aGlzLnByb3BzWydhcmlhLWRlc2NyaWJlZGJ5J10sXG5cdFx0XHRcdCdhcmlhLWV4cGFuZGVkJzogJycgKyBpc09wZW4sXG5cdFx0XHRcdCdhcmlhLWhhc3BvcHVwJzogJycgKyBpc09wZW4sXG5cdFx0XHRcdCdhcmlhLWxhYmVsJzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbCddLFxuXHRcdFx0XHQnYXJpYS1sYWJlbGxlZGJ5JzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbGxlZGJ5J10sXG5cdFx0XHRcdCdhcmlhLW93bnMnOiBhcmlhT3ducyxcblx0XHRcdFx0b25CbHVyOiB0aGlzLmhhbmRsZUlucHV0Qmx1cixcblx0XHRcdFx0b25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UsXG5cdFx0XHRcdG9uRm9jdXM6IHRoaXMuaGFuZGxlSW5wdXRGb2N1cyxcblx0XHRcdFx0cmVmOiBmdW5jdGlvbiByZWYoX3JlZikge1xuXHRcdFx0XHRcdHJldHVybiBfdGhpczYuaW5wdXQgPSBfcmVmO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRyb2xlOiAnY29tYm9ib3gnLFxuXHRcdFx0XHRyZXF1aXJlZDogdGhpcy5zdGF0ZS5yZXF1aXJlZCxcblx0XHRcdFx0dGFiSW5kZXg6IHRoaXMucHJvcHMudGFiSW5kZXgsXG5cdFx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdFx0fSk7XG5cblx0XHRcdGlmICh0aGlzLnByb3BzLmlucHV0UmVuZGVyZXIpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJvcHMuaW5wdXRSZW5kZXJlcihpbnB1dFByb3BzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgIXRoaXMucHJvcHMuc2VhcmNoYWJsZSkge1xuXHRcdFx0XHR2YXIgZGl2UHJvcHMgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyh0aGlzLnByb3BzLmlucHV0UHJvcHMsIFtdKTtcblxuXG5cdFx0XHRcdHZhciBfYXJpYU93bnMgPSBjbGFzc05hbWVzKGRlZmluZVByb3BlcnR5KHt9LCB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctbGlzdCcsIGlzT3BlbikpO1xuXHRcdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgX2V4dGVuZHMoe30sIGRpdlByb3BzLCB7XG5cdFx0XHRcdFx0J2FyaWEtZXhwYW5kZWQnOiBpc09wZW4sXG5cdFx0XHRcdFx0J2FyaWEtb3ducyc6IF9hcmlhT3ducyxcblx0XHRcdFx0XHQnYXJpYS1hY3RpdmVkZXNjZW5kYW50JzogaXNPcGVuID8gdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLW9wdGlvbi0nICsgZm9jdXNlZE9wdGlvbkluZGV4IDogdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLXZhbHVlJyxcblx0XHRcdFx0XHQnYXJpYS1kaXNhYmxlZCc6ICcnICsgdGhpcy5wcm9wcy5kaXNhYmxlZCxcblx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6IHRoaXMucHJvcHNbJ2FyaWEtbGFiZWwnXSxcblx0XHRcdFx0XHQnYXJpYS1sYWJlbGxlZGJ5JzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbGxlZGJ5J10sXG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUsXG5cdFx0XHRcdFx0b25CbHVyOiB0aGlzLmhhbmRsZUlucHV0Qmx1cixcblx0XHRcdFx0XHRvbkZvY3VzOiB0aGlzLmhhbmRsZUlucHV0Rm9jdXMsXG5cdFx0XHRcdFx0cmVmOiBmdW5jdGlvbiByZWYoX3JlZjIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfdGhpczYuaW5wdXQgPSBfcmVmMjtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHJvbGU6ICdjb21ib2JveCcsXG5cdFx0XHRcdFx0c3R5bGU6IHsgYm9yZGVyOiAwLCB3aWR0aDogMSwgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfSxcblx0XHRcdFx0XHR0YWJJbmRleDogdGhpcy5wcm9wcy50YWJJbmRleCB8fCAwXG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucHJvcHMuYXV0b3NpemUpIHtcblx0XHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXV0b3NpemVJbnB1dCwgX2V4dGVuZHMoeyBpZDogdGhpcy5wcm9wcy5pZCB9LCBpbnB1dFByb3BzLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBtaW5XaWR0aDogJzUnIH0pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSwga2V5OiAnaW5wdXQtd3JhcCcsIHN0eWxlOiB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH0gfSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBfZXh0ZW5kcyh7IGlkOiB0aGlzLnByb3BzLmlkIH0sIGlucHV0UHJvcHMpKVxuXHRcdFx0KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJDbGVhcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNsZWFyKCkge1xuXHRcdFx0dmFyIHZhbHVlQXJyYXkgPSB0aGlzLmdldFZhbHVlQXJyYXkodGhpcy5wcm9wcy52YWx1ZSk7XG5cdFx0XHRpZiAoIXRoaXMucHJvcHMuY2xlYXJhYmxlIHx8ICF2YWx1ZUFycmF5Lmxlbmd0aCB8fCB0aGlzLnByb3BzLmRpc2FibGVkIHx8IHRoaXMucHJvcHMuaXNMb2FkaW5nKSByZXR1cm47XG5cdFx0XHR2YXIgYXJpYUxhYmVsID0gdGhpcy5wcm9wcy5tdWx0aSA/IHRoaXMucHJvcHMuY2xlYXJBbGxUZXh0IDogdGhpcy5wcm9wcy5jbGVhclZhbHVlVGV4dDtcblx0XHRcdHZhciBjbGVhciA9IHRoaXMucHJvcHMuY2xlYXJSZW5kZXJlcigpO1xuXG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0J2FyaWEtbGFiZWwnOiBhcmlhTGFiZWwsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnU2VsZWN0LWNsZWFyLXpvbmUnLFxuXHRcdFx0XHRcdG9uTW91c2VEb3duOiB0aGlzLmNsZWFyVmFsdWUsXG5cdFx0XHRcdFx0b25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZENsZWFyVmFsdWUsXG5cdFx0XHRcdFx0b25Ub3VjaE1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlLFxuXHRcdFx0XHRcdG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuXHRcdFx0XHRcdHRpdGxlOiBhcmlhTGFiZWxcblx0XHRcdFx0fSxcblx0XHRcdFx0Y2xlYXJcblx0XHRcdCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyQXJyb3cnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJBcnJvdygpIHtcblx0XHRcdGlmICghdGhpcy5wcm9wcy5hcnJvd1JlbmRlcmVyKSByZXR1cm47XG5cblx0XHRcdHZhciBvbk1vdXNlRG93biA9IHRoaXMuaGFuZGxlTW91c2VEb3duT25BcnJvdztcblx0XHRcdHZhciBpc09wZW4gPSB0aGlzLnN0YXRlLmlzT3Blbjtcblx0XHRcdHZhciBhcnJvdyA9IHRoaXMucHJvcHMuYXJyb3dSZW5kZXJlcih7IG9uTW91c2VEb3duOiBvbk1vdXNlRG93biwgaXNPcGVuOiBpc09wZW4gfSk7XG5cblx0XHRcdGlmICghYXJyb3cpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjbGFzc05hbWU6ICdTZWxlY3QtYXJyb3ctem9uZScsXG5cdFx0XHRcdFx0b25Nb3VzZURvd246IG9uTW91c2VEb3duXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFycm93XG5cdFx0XHQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZpbHRlck9wdGlvbnMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmaWx0ZXJPcHRpb25zJCQxKGV4Y2x1ZGVPcHRpb25zKSB7XG5cdFx0XHR2YXIgZmlsdGVyVmFsdWUgPSB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucyB8fCBbXTtcblx0XHRcdGlmICh0aGlzLnByb3BzLmZpbHRlck9wdGlvbnMpIHtcblx0XHRcdFx0Ly8gTWFpbnRhaW4gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBib29sZWFuIGF0dHJpYnV0ZVxuXHRcdFx0XHR2YXIgZmlsdGVyT3B0aW9ucyQkMSA9IHR5cGVvZiB0aGlzLnByb3BzLmZpbHRlck9wdGlvbnMgPT09ICdmdW5jdGlvbicgPyB0aGlzLnByb3BzLmZpbHRlck9wdGlvbnMgOiBmaWx0ZXJPcHRpb25zO1xuXG5cdFx0XHRcdHJldHVybiBmaWx0ZXJPcHRpb25zJCQxKG9wdGlvbnMsIGZpbHRlclZhbHVlLCBleGNsdWRlT3B0aW9ucywge1xuXHRcdFx0XHRcdGZpbHRlck9wdGlvbjogdGhpcy5wcm9wcy5maWx0ZXJPcHRpb24sXG5cdFx0XHRcdFx0aWdub3JlQWNjZW50czogdGhpcy5wcm9wcy5pZ25vcmVBY2NlbnRzLFxuXHRcdFx0XHRcdGlnbm9yZUNhc2U6IHRoaXMucHJvcHMuaWdub3JlQ2FzZSxcblx0XHRcdFx0XHRsYWJlbEtleTogdGhpcy5wcm9wcy5sYWJlbEtleSxcblx0XHRcdFx0XHRtYXRjaFBvczogdGhpcy5wcm9wcy5tYXRjaFBvcyxcblx0XHRcdFx0XHRtYXRjaFByb3A6IHRoaXMucHJvcHMubWF0Y2hQcm9wLFxuXHRcdFx0XHRcdHRyaW1GaWx0ZXI6IHRoaXMucHJvcHMudHJpbUZpbHRlcixcblx0XHRcdFx0XHR2YWx1ZUtleTogdGhpcy5wcm9wcy52YWx1ZUtleVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBvcHRpb25zO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ29uT3B0aW9uUmVmJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gb25PcHRpb25SZWYocmVmLCBpc0ZvY3VzZWQpIHtcblx0XHRcdGlmIChpc0ZvY3VzZWQpIHtcblx0XHRcdFx0dGhpcy5mb2N1c2VkID0gcmVmO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlck1lbnUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJNZW51KG9wdGlvbnMsIHZhbHVlQXJyYXksIGZvY3VzZWRPcHRpb24pIHtcblx0XHRcdGlmIChvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3BzLm1lbnVSZW5kZXJlcih7XG5cdFx0XHRcdFx0Zm9jdXNlZE9wdGlvbjogZm9jdXNlZE9wdGlvbixcblx0XHRcdFx0XHRmb2N1c09wdGlvbjogdGhpcy5mb2N1c09wdGlvbixcblx0XHRcdFx0XHRpbnB1dFZhbHVlOiB0aGlzLnN0YXRlLmlucHV0VmFsdWUsXG5cdFx0XHRcdFx0aW5zdGFuY2VQcmVmaXg6IHRoaXMuX2luc3RhbmNlUHJlZml4LFxuXHRcdFx0XHRcdGxhYmVsS2V5OiB0aGlzLnByb3BzLmxhYmVsS2V5LFxuXHRcdFx0XHRcdG9uRm9jdXM6IHRoaXMuZm9jdXNPcHRpb24sXG5cdFx0XHRcdFx0b25PcHRpb25SZWY6IHRoaXMub25PcHRpb25SZWYsXG5cdFx0XHRcdFx0b25TZWxlY3Q6IHRoaXMuc2VsZWN0VmFsdWUsXG5cdFx0XHRcdFx0b3B0aW9uQ2xhc3NOYW1lOiB0aGlzLnByb3BzLm9wdGlvbkNsYXNzTmFtZSxcblx0XHRcdFx0XHRvcHRpb25Db21wb25lbnQ6IHRoaXMucHJvcHMub3B0aW9uQ29tcG9uZW50LFxuXHRcdFx0XHRcdG9wdGlvblJlbmRlcmVyOiB0aGlzLnByb3BzLm9wdGlvblJlbmRlcmVyIHx8IHRoaXMuZ2V0T3B0aW9uTGFiZWwsXG5cdFx0XHRcdFx0b3B0aW9uczogb3B0aW9ucyxcblx0XHRcdFx0XHRyZW1vdmVWYWx1ZTogdGhpcy5yZW1vdmVWYWx1ZSxcblx0XHRcdFx0XHRzZWxlY3RWYWx1ZTogdGhpcy5zZWxlY3RWYWx1ZSxcblx0XHRcdFx0XHR2YWx1ZUFycmF5OiB2YWx1ZUFycmF5LFxuXHRcdFx0XHRcdHZhbHVlS2V5OiB0aGlzLnByb3BzLnZhbHVlS2V5XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLm5vUmVzdWx0c1RleHQpIHtcblx0XHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdTZWxlY3Qtbm9yZXN1bHRzJyB9LFxuXHRcdFx0XHRcdHRoaXMucHJvcHMubm9SZXN1bHRzVGV4dFxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVySGlkZGVuRmllbGQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJIaWRkZW5GaWVsZCh2YWx1ZUFycmF5KSB7XG5cdFx0XHR2YXIgX3RoaXM3ID0gdGhpcztcblxuXHRcdFx0aWYgKCF0aGlzLnByb3BzLm5hbWUpIHJldHVybjtcblx0XHRcdGlmICh0aGlzLnByb3BzLmpvaW5WYWx1ZXMpIHtcblx0XHRcdFx0dmFyIHZhbHVlID0gdmFsdWVBcnJheS5tYXAoZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gc3RyaW5naWZ5VmFsdWUoaVtfdGhpczcucHJvcHMudmFsdWVLZXldKTtcblx0XHRcdFx0fSkuam9pbih0aGlzLnByb3BzLmRlbGltaXRlcik7XG5cdFx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcblx0XHRcdFx0XHRkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcblx0XHRcdFx0XHRuYW1lOiB0aGlzLnByb3BzLm5hbWUsXG5cdFx0XHRcdFx0cmVmOiBmdW5jdGlvbiByZWYoX3JlZjMpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfdGhpczcudmFsdWUgPSBfcmVmMztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB2YWx1ZUFycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuXHRcdFx0XHRcdGRpc2FibGVkOiBfdGhpczcucHJvcHMuZGlzYWJsZWQsXG5cdFx0XHRcdFx0a2V5OiAnaGlkZGVuLicgKyBpbmRleCxcblx0XHRcdFx0XHRuYW1lOiBfdGhpczcucHJvcHMubmFtZSxcblx0XHRcdFx0XHRyZWY6ICd2YWx1ZScgKyBpbmRleCxcblx0XHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0XHR2YWx1ZTogc3RyaW5naWZ5VmFsdWUoaXRlbVtfdGhpczcucHJvcHMudmFsdWVLZXldKVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldEZvY3VzYWJsZU9wdGlvbkluZGV4Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlT3B0aW9uSW5kZXgoc2VsZWN0ZWRPcHRpb24pIHtcblx0XHRcdHZhciBvcHRpb25zID0gdGhpcy5fdmlzaWJsZU9wdGlvbnM7XG5cdFx0XHRpZiAoIW9wdGlvbnMubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuXHRcdFx0dmFyIHZhbHVlS2V5ID0gdGhpcy5wcm9wcy52YWx1ZUtleTtcblx0XHRcdHZhciBmb2N1c2VkT3B0aW9uID0gdGhpcy5zdGF0ZS5mb2N1c2VkT3B0aW9uIHx8IHNlbGVjdGVkT3B0aW9uO1xuXHRcdFx0aWYgKGZvY3VzZWRPcHRpb24gJiYgIWZvY3VzZWRPcHRpb24uZGlzYWJsZWQpIHtcblx0XHRcdFx0dmFyIGZvY3VzZWRPcHRpb25JbmRleCA9IC0xO1xuXHRcdFx0XHRvcHRpb25zLnNvbWUoZnVuY3Rpb24gKG9wdGlvbiwgaW5kZXgpIHtcblx0XHRcdFx0XHR2YXIgaXNPcHRpb25FcXVhbCA9IG9wdGlvblt2YWx1ZUtleV0gPT09IGZvY3VzZWRPcHRpb25bdmFsdWVLZXldO1xuXHRcdFx0XHRcdGlmIChpc09wdGlvbkVxdWFsKSB7XG5cdFx0XHRcdFx0XHRmb2N1c2VkT3B0aW9uSW5kZXggPSBpbmRleDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGlzT3B0aW9uRXF1YWw7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAoZm9jdXNlZE9wdGlvbkluZGV4ICE9PSAtMSkge1xuXHRcdFx0XHRcdHJldHVybiBmb2N1c2VkT3B0aW9uSW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICghb3B0aW9uc1tpXS5kaXNhYmxlZCkgcmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJPdXRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlck91dGVyKG9wdGlvbnMsIHZhbHVlQXJyYXksIGZvY3VzZWRPcHRpb24pIHtcblx0XHRcdHZhciBfdGhpczggPSB0aGlzO1xuXG5cdFx0XHR2YXIgbWVudSA9IHRoaXMucmVuZGVyTWVudShvcHRpb25zLCB2YWx1ZUFycmF5LCBmb2N1c2VkT3B0aW9uKTtcblx0XHRcdGlmICghbWVudSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IHJlZjogZnVuY3Rpb24gcmVmKF9yZWY1KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXM4Lm1lbnVDb250YWluZXIgPSBfcmVmNTtcblx0XHRcdFx0XHR9LCBjbGFzc05hbWU6ICdTZWxlY3QtbWVudS1vdXRlcicsIHN0eWxlOiB0aGlzLnByb3BzLm1lbnVDb250YWluZXJTdHlsZSB9LFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ1NlbGVjdC1tZW51Jyxcblx0XHRcdFx0XHRcdGlkOiB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctbGlzdCcsXG5cdFx0XHRcdFx0XHRvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd25Pbk1lbnUsXG5cdFx0XHRcdFx0XHRvblNjcm9sbDogdGhpcy5oYW5kbGVNZW51U2Nyb2xsLFxuXHRcdFx0XHRcdFx0cmVmOiBmdW5jdGlvbiByZWYoX3JlZjQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF90aGlzOC5tZW51ID0gX3JlZjQ7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0cm9sZTogJ2xpc3Rib3gnLFxuXHRcdFx0XHRcdFx0c3R5bGU6IHRoaXMucHJvcHMubWVudVN0eWxlLFxuXHRcdFx0XHRcdFx0dGFiSW5kZXg6IC0xXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRtZW51XG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIF90aGlzOSA9IHRoaXM7XG5cblx0XHRcdHZhciB2YWx1ZUFycmF5ID0gdGhpcy5nZXRWYWx1ZUFycmF5KHRoaXMucHJvcHMudmFsdWUpO1xuXHRcdFx0dmFyIG9wdGlvbnMgPSB0aGlzLl92aXNpYmxlT3B0aW9ucyA9IHRoaXMuZmlsdGVyT3B0aW9ucyh0aGlzLnByb3BzLm11bHRpICYmIHRoaXMucHJvcHMucmVtb3ZlU2VsZWN0ZWQgPyB2YWx1ZUFycmF5IDogbnVsbCk7XG5cdFx0XHR2YXIgaXNPcGVuID0gdGhpcy5zdGF0ZS5pc09wZW47XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5tdWx0aSAmJiAhb3B0aW9ucy5sZW5ndGggJiYgdmFsdWVBcnJheS5sZW5ndGggJiYgIXRoaXMuc3RhdGUuaW5wdXRWYWx1ZSkgaXNPcGVuID0gZmFsc2U7XG5cdFx0XHR2YXIgZm9jdXNlZE9wdGlvbkluZGV4ID0gdGhpcy5nZXRGb2N1c2FibGVPcHRpb25JbmRleCh2YWx1ZUFycmF5WzBdKTtcblxuXHRcdFx0dmFyIGZvY3VzZWRPcHRpb24gPSBudWxsO1xuXHRcdFx0aWYgKGZvY3VzZWRPcHRpb25JbmRleCAhPT0gbnVsbCkge1xuXHRcdFx0XHRmb2N1c2VkT3B0aW9uID0gdGhpcy5fZm9jdXNlZE9wdGlvbiA9IG9wdGlvbnNbZm9jdXNlZE9wdGlvbkluZGV4XTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvY3VzZWRPcHRpb24gPSB0aGlzLl9mb2N1c2VkT3B0aW9uID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCdTZWxlY3QnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwge1xuXHRcdFx0XHQnaGFzLXZhbHVlJzogdmFsdWVBcnJheS5sZW5ndGgsXG5cdFx0XHRcdCdpcy1jbGVhcmFibGUnOiB0aGlzLnByb3BzLmNsZWFyYWJsZSxcblx0XHRcdFx0J2lzLWRpc2FibGVkJzogdGhpcy5wcm9wcy5kaXNhYmxlZCxcblx0XHRcdFx0J2lzLWZvY3VzZWQnOiB0aGlzLnN0YXRlLmlzRm9jdXNlZCxcblx0XHRcdFx0J2lzLWxvYWRpbmcnOiB0aGlzLnByb3BzLmlzTG9hZGluZyxcblx0XHRcdFx0J2lzLW9wZW4nOiBpc09wZW4sXG5cdFx0XHRcdCdpcy1wc2V1ZG8tZm9jdXNlZCc6IHRoaXMuc3RhdGUuaXNQc2V1ZG9Gb2N1c2VkLFxuXHRcdFx0XHQnaXMtc2VhcmNoYWJsZSc6IHRoaXMucHJvcHMuc2VhcmNoYWJsZSxcblx0XHRcdFx0J1NlbGVjdC0tbXVsdGknOiB0aGlzLnByb3BzLm11bHRpLFxuXHRcdFx0XHQnU2VsZWN0LS1ydGwnOiB0aGlzLnByb3BzLnJ0bCxcblx0XHRcdFx0J1NlbGVjdC0tc2luZ2xlJzogIXRoaXMucHJvcHMubXVsdGlcblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgcmVtb3ZlTWVzc2FnZSA9IG51bGw7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5tdWx0aSAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlZCAmJiB2YWx1ZUFycmF5Lmxlbmd0aCAmJiAhdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICYmIHRoaXMuc3RhdGUuaXNGb2N1c2VkICYmIHRoaXMucHJvcHMuYmFja3NwYWNlUmVtb3Zlcykge1xuXHRcdFx0XHRyZW1vdmVNZXNzYWdlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdFx0eyBpZDogdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLWJhY2tzcGFjZS1yZW1vdmUtbWVzc2FnZScsIGNsYXNzTmFtZTogJ1NlbGVjdC1hcmlhLW9ubHknLCAnYXJpYS1saXZlJzogJ2Fzc2VydGl2ZScgfSxcblx0XHRcdFx0XHR0aGlzLnByb3BzLmJhY2tzcGFjZVRvUmVtb3ZlTWVzc2FnZS5yZXBsYWNlKCd7bGFiZWx9JywgdmFsdWVBcnJheVt2YWx1ZUFycmF5Lmxlbmd0aCAtIDFdW3RoaXMucHJvcHMubGFiZWxLZXldKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgcmVmOiBmdW5jdGlvbiByZWYoX3JlZjcpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfdGhpczkud3JhcHBlciA9IF9yZWY3O1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUsXG5cdFx0XHRcdFx0c3R5bGU6IHRoaXMucHJvcHMud3JhcHBlclN0eWxlIH0sXG5cdFx0XHRcdHRoaXMucmVuZGVySGlkZGVuRmllbGQodmFsdWVBcnJheSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyByZWY6IGZ1bmN0aW9uIHJlZihfcmVmNikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXM5LmNvbnRyb2wgPSBfcmVmNjtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6ICdTZWxlY3QtY29udHJvbCcsXG5cdFx0XHRcdFx0XHRvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcblx0XHRcdFx0XHRcdG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93bixcblx0XHRcdFx0XHRcdG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmQsXG5cdFx0XHRcdFx0XHRvblRvdWNoTW92ZTogdGhpcy5oYW5kbGVUb3VjaE1vdmUsXG5cdFx0XHRcdFx0XHRvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcblx0XHRcdFx0XHRcdHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ1NlbGVjdC1tdWx0aS12YWx1ZS13cmFwcGVyJywgaWQ6IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy12YWx1ZScgfSxcblx0XHRcdFx0XHRcdHRoaXMucmVuZGVyVmFsdWUodmFsdWVBcnJheSwgaXNPcGVuKSxcblx0XHRcdFx0XHRcdHRoaXMucmVuZGVySW5wdXQodmFsdWVBcnJheSwgZm9jdXNlZE9wdGlvbkluZGV4KVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0cmVtb3ZlTWVzc2FnZSxcblx0XHRcdFx0XHR0aGlzLnJlbmRlckxvYWRpbmcoKSxcblx0XHRcdFx0XHR0aGlzLnJlbmRlckNsZWFyKCksXG5cdFx0XHRcdFx0dGhpcy5yZW5kZXJBcnJvdygpXG5cdFx0XHRcdCksXG5cdFx0XHRcdGlzT3BlbiA/IHRoaXMucmVuZGVyT3V0ZXIob3B0aW9ucywgdmFsdWVBcnJheSwgZm9jdXNlZE9wdGlvbikgOiBudWxsXG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXHRyZXR1cm4gU2VsZWN0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5TZWxlY3QkMS5wcm9wVHlwZXMgPSB7XG5cdCdhcmlhLWRlc2NyaWJlZGJ5JzogUHJvcFR5cGVzLnN0cmluZywgLy8gaHRtbCBpZChzKSBvZiBlbGVtZW50KHMpIHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gZGVzY3JpYmUgdGhpcyBpbnB1dCAoZm9yIGFzc2lzdGl2ZSB0ZWNoKVxuXHQnYXJpYS1sYWJlbCc6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGFyaWEgbGFiZWwgKGZvciBhc3Npc3RpdmUgdGVjaClcblx0J2FyaWEtbGFiZWxsZWRieSc6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGh0bWwgaWQgb2YgYW4gZWxlbWVudCB0aGF0IHNob3VsZCBiZSB1c2VkIGFzIHRoZSBsYWJlbCAoZm9yIGFzc2lzdGl2ZSB0ZWNoKVxuXHRhcnJvd1JlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYywgLy8gY3JlYXRlIHRoZSBkcm9wLWRvd24gY2FyZXQgZWxlbWVudFxuXHRhdXRvQmx1cjogUHJvcFR5cGVzLmJvb2wsIC8vIGF1dG9tYXRpY2FsbHkgYmx1ciB0aGUgY29tcG9uZW50IHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkXG5cdGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsIC8vIGF1dG9mb2N1cyB0aGUgY29tcG9uZW50IG9uIG1vdW50XG5cdGF1dG9mb2N1czogUHJvcFR5cGVzLmJvb2wsIC8vIGRlcHJlY2F0ZWQ7IHVzZSBhdXRvRm9jdXMgaW5zdGVhZFxuXHRhdXRvc2l6ZTogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgdG8gZW5hYmxlIGF1dG9zaXppbmcgb3Igbm90XG5cdGJhY2tzcGFjZVJlbW92ZXM6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIGJhY2tzcGFjZSByZW1vdmVzIGFuIGl0ZW0gaWYgdGhlcmUgaXMgbm8gdGV4dCBpbnB1dFxuXHRiYWNrc3BhY2VUb1JlbW92ZU1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsIC8vIG1lc3NhZ2UgdG8gdXNlIGZvciBzY3JlZW5yZWFkZXJzIHRvIHByZXNzIGJhY2tzcGFjZSB0byByZW1vdmUgdGhlIGN1cnJlbnQgaXRlbSAtIHtsYWJlbH0gaXMgcmVwbGFjZWQgd2l0aCB0aGUgaXRlbSBsYWJlbFxuXHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGNsYXNzTmFtZSBmb3IgdGhlIG91dGVyIGVsZW1lbnRcblx0Y2xlYXJBbGxUZXh0OiBzdHJpbmdPck5vZGUsIC8vIHRpdGxlIGZvciB0aGUgXCJjbGVhclwiIGNvbnRyb2wgd2hlbiBtdWx0aTogdHJ1ZVxuXHRjbGVhclJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYywgLy8gY3JlYXRlIGNsZWFyYWJsZSB4IGVsZW1lbnRcblx0Y2xlYXJWYWx1ZVRleHQ6IHN0cmluZ09yTm9kZSwgLy8gdGl0bGUgZm9yIHRoZSBcImNsZWFyXCIgY29udHJvbFxuXHRjbGVhcmFibGU6IFByb3BUeXBlcy5ib29sLCAvLyBzaG91bGQgaXQgYmUgcG9zc2libGUgdG8gcmVzZXQgdmFsdWVcblx0Y2xvc2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgdG8gY2xvc2UgdGhlIG1lbnUgd2hlbiBhIHZhbHVlIGlzIHNlbGVjdGVkXG5cdGRlbGV0ZVJlbW92ZXM6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIGRlbGV0ZSByZW1vdmVzIGFuIGl0ZW0gaWYgdGhlcmUgaXMgbm8gdGV4dCBpbnB1dFxuXHRkZWxpbWl0ZXI6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGRlbGltaXRlciB0byB1c2UgdG8gam9pbiBtdWx0aXBsZSB2YWx1ZXMgZm9yIHRoZSBoaWRkZW4gZmllbGQgdmFsdWVcblx0ZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIHRoZSBTZWxlY3QgaXMgZGlzYWJsZWQgb3Igbm90XG5cdGVzY2FwZUNsZWFyc1ZhbHVlOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciBlc2NhcGUgY2xlYXJzIHRoZSB2YWx1ZSB3aGVuIHRoZSBtZW51IGlzIGNsb3NlZFxuXHRmaWx0ZXJPcHRpb246IFByb3BUeXBlcy5mdW5jLCAvLyBtZXRob2QgdG8gZmlsdGVyIGEgc2luZ2xlIG9wdGlvbiAob3B0aW9uLCBmaWx0ZXJTdHJpbmcpXG5cdGZpbHRlck9wdGlvbnM6IFByb3BUeXBlcy5hbnksIC8vIGJvb2xlYW4gdG8gZW5hYmxlIGRlZmF1bHQgZmlsdGVyaW5nIG9yIGZ1bmN0aW9uIHRvIGZpbHRlciB0aGUgb3B0aW9ucyBhcnJheSAoW29wdGlvbnNdLCBmaWx0ZXJTdHJpbmcsIFt2YWx1ZXNdKVxuXHRpZDogUHJvcFR5cGVzLnN0cmluZywgLy8gaHRtbCBpZCB0byBzZXQgb24gdGhlIGlucHV0IGVsZW1lbnQgZm9yIGFjY2Vzc2liaWxpdHkgb3IgdGVzdHNcblx0aWdub3JlQWNjZW50czogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgdG8gc3RyaXAgZGlhY3JpdGljcyB3aGVuIGZpbHRlcmluZ1xuXHRpZ25vcmVDYXNlOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0byBwZXJmb3JtIGNhc2UtaW5zZW5zaXRpdmUgZmlsdGVyaW5nXG5cdGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsIC8vIGN1c3RvbSBhdHRyaWJ1dGVzIGZvciB0aGUgSW5wdXRcblx0aW5wdXRSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsIC8vIHJldHVybnMgYSBjdXN0b20gaW5wdXQgY29tcG9uZW50XG5cdGluc3RhbmNlSWQ6IFByb3BUeXBlcy5zdHJpbmcsIC8vIHNldCB0aGUgY29tcG9uZW50cyBpbnN0YW5jZUlkXG5cdGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgdGhlIFNlbGVjdCBpcyBsb2FkaW5nIGV4dGVybmFsbHkgb3Igbm90IChzdWNoIGFzIG9wdGlvbnMgYmVpbmcgbG9hZGVkKVxuXHRqb2luVmFsdWVzOiBQcm9wVHlwZXMuYm9vbCwgLy8gam9pbnMgbXVsdGlwbGUgdmFsdWVzIGludG8gYSBzaW5nbGUgZm9ybSBmaWVsZCB3aXRoIHRoZSBkZWxpbWl0ZXIgKGxlZ2FjeSBtb2RlKVxuXHRsYWJlbEtleTogUHJvcFR5cGVzLnN0cmluZywgLy8gcGF0aCBvZiB0aGUgbGFiZWwgdmFsdWUgaW4gb3B0aW9uIG9iamVjdHNcblx0bWF0Y2hQb3M6IFByb3BUeXBlcy5zdHJpbmcsIC8vIChhbnl8c3RhcnQpIG1hdGNoIHRoZSBzdGFydCBvciBlbnRpcmUgc3RyaW5nIHdoZW4gZmlsdGVyaW5nXG5cdG1hdGNoUHJvcDogUHJvcFR5cGVzLnN0cmluZywgLy8gKGFueXxsYWJlbHx2YWx1ZSkgd2hpY2ggb3B0aW9uIHByb3BlcnR5IHRvIGZpbHRlciBvblxuXHRtZW51QnVmZmVyOiBQcm9wVHlwZXMubnVtYmVyLCAvLyBvcHRpb25hbCBidWZmZXIgKGluIHB4KSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIHZpZXdwb3J0IGFuZCB0aGUgYm90dG9tIG9mIHRoZSBtZW51XG5cdG1lbnVDb250YWluZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCwgLy8gb3B0aW9uYWwgc3R5bGUgdG8gYXBwbHkgdG8gdGhlIG1lbnUgY29udGFpbmVyXG5cdG1lbnVSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsIC8vIHJlbmRlcnMgYSBjdXN0b20gbWVudSB3aXRoIG9wdGlvbnNcblx0bWVudVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBvcHRpb25hbCBzdHlsZSB0byBhcHBseSB0byB0aGUgbWVudVxuXHRtdWx0aTogUHJvcFR5cGVzLmJvb2wsIC8vIG11bHRpLXZhbHVlIGlucHV0XG5cdG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGdlbmVyYXRlcyBhIGhpZGRlbiA8aW5wdXQgLz4gdGFnIHdpdGggdGhpcyBmaWVsZCBuYW1lIGZvciBodG1sIGZvcm1zXG5cdG5vUmVzdWx0c1RleHQ6IHN0cmluZ09yTm9kZSwgLy8gcGxhY2Vob2xkZXIgZGlzcGxheWVkIHdoZW4gdGhlcmUgYXJlIG5vIG1hdGNoaW5nIHNlYXJjaCByZXN1bHRzXG5cdG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsIC8vIG9uQmx1ciBoYW5kbGVyOiBmdW5jdGlvbiAoZXZlbnQpIHt9XG5cdG9uQmx1clJlc2V0c0lucHV0OiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciBpbnB1dCBpcyBjbGVhcmVkIG9uIGJsdXJcblx0b25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLCAvLyBvbkNoYW5nZSBoYW5kbGVyOiBmdW5jdGlvbiAobmV3VmFsdWUpIHt9XG5cdG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLCAvLyBmaXJlcyB3aGVuIHRoZSBtZW51IGlzIGNsb3NlZFxuXHRvbkNsb3NlUmVzZXRzSW5wdXQ6IFByb3BUeXBlcy5ib29sLCAvLyB3aGV0aGVyIGlucHV0IGlzIGNsZWFyZWQgd2hlbiBtZW51IGlzIGNsb3NlZCB0aHJvdWdoIHRoZSBhcnJvd1xuXHRvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYywgLy8gb25Gb2N1cyBoYW5kbGVyOiBmdW5jdGlvbiAoZXZlbnQpIHt9XG5cdG9uSW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLCAvLyBvbklucHV0Q2hhbmdlIGhhbmRsZXI6IGZ1bmN0aW9uIChpbnB1dFZhbHVlKSB7fVxuXHRvbklucHV0S2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsIC8vIGlucHV0IGtleURvd24gaGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KSB7fVxuXHRvbk1lbnVTY3JvbGxUb0JvdHRvbTogUHJvcFR5cGVzLmZ1bmMsIC8vIGZpcmVzIHdoZW4gdGhlIG1lbnUgaXMgc2Nyb2xsZWQgdG8gdGhlIGJvdHRvbTsgY2FuIGJlIHVzZWQgdG8gcGFnaW5hdGUgb3B0aW9uc1xuXHRvbk9wZW46IFByb3BUeXBlcy5mdW5jLCAvLyBmaXJlcyB3aGVuIHRoZSBtZW51IGlzIG9wZW5lZFxuXHRvblNlbGVjdFJlc2V0c0lucHV0OiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciBpbnB1dCBpcyBjbGVhcmVkIG9uIHNlbGVjdCAod29ya3Mgb25seSBmb3IgbXVsdGlzZWxlY3QpXG5cdG9uVmFsdWVDbGljazogUHJvcFR5cGVzLmZ1bmMsIC8vIG9uQ2xpY2sgaGFuZGxlciBmb3IgdmFsdWUgbGFiZWxzOiBmdW5jdGlvbiAodmFsdWUsIGV2ZW50KSB7fVxuXHRvcGVuT25DbGljazogUHJvcFR5cGVzLmJvb2wsIC8vIGJvb2xlYW4gdG8gY29udHJvbCBvcGVuaW5nIHRoZSBtZW51IHdoZW4gdGhlIGNvbnRyb2wgaXMgY2xpY2tlZFxuXHRvcGVuT25Gb2N1czogUHJvcFR5cGVzLmJvb2wsIC8vIGFsd2F5cyBvcGVuIG9wdGlvbnMgbWVudSBvbiBmb2N1c1xuXHRvcHRpb25DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGFkZGl0aW9uYWwgY2xhc3MoZXMpIHRvIGFwcGx5IHRvIHRoZSA8T3B0aW9uIC8+IGVsZW1lbnRzXG5cdG9wdGlvbkNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsIC8vIG9wdGlvbiBjb21wb25lbnQgdG8gcmVuZGVyIGluIGRyb3Bkb3duXG5cdG9wdGlvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYywgLy8gb3B0aW9uUmVuZGVyZXI6IGZ1bmN0aW9uIChvcHRpb24pIHt9XG5cdG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSwgLy8gYXJyYXkgb2Ygb3B0aW9uc1xuXHRwYWdlU2l6ZTogUHJvcFR5cGVzLm51bWJlciwgLy8gbnVtYmVyIG9mIGVudHJpZXMgdG8gcGFnZSB3aGVuIHVzaW5nIHBhZ2UgdXAvZG93biBrZXlzXG5cdHBsYWNlaG9sZGVyOiBzdHJpbmdPck5vZGUsIC8vIGZpZWxkIHBsYWNlaG9sZGVyLCBkaXNwbGF5ZWQgd2hlbiB0aGVyZSdzIG5vIHZhbHVlXG5cdHJlbW92ZVNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciB0aGUgc2VsZWN0ZWQgb3B0aW9uIGlzIHJlbW92ZWQgZnJvbSB0aGUgZHJvcGRvd24gb24gbXVsdGkgc2VsZWN0c1xuXHRyZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsIC8vIGFwcGxpZXMgSFRNTDUgcmVxdWlyZWQgYXR0cmlidXRlIHdoZW4gbmVlZGVkXG5cdHJlc2V0VmFsdWU6IFByb3BUeXBlcy5hbnksIC8vIHZhbHVlIHRvIHVzZSB3aGVuIHlvdSBjbGVhciB0aGUgY29udHJvbFxuXHRydGw6IFByb3BUeXBlcy5ib29sLCAvLyBzZXQgdG8gdHJ1ZSBpbiBvcmRlciB0byB1c2UgcmVhY3Qtc2VsZWN0IGluIHJpZ2h0LXRvLWxlZnQgZGlyZWN0aW9uXG5cdHNjcm9sbE1lbnVJbnRvVmlldzogUHJvcFR5cGVzLmJvb2wsIC8vIGJvb2xlYW4gdG8gZW5hYmxlIHRoZSB2aWV3cG9ydCB0byBzaGlmdCBzbyB0aGF0IHRoZSBmdWxsIG1lbnUgZnVsbHkgdmlzaWJsZSB3aGVuIGVuZ2FnZWRcblx0c2VhcmNoYWJsZTogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgdG8gZW5hYmxlIHNlYXJjaGluZyBmZWF0dXJlIG9yIG5vdFxuXHRzaW1wbGVWYWx1ZTogUHJvcFR5cGVzLmJvb2wsIC8vIHBhc3MgdGhlIHZhbHVlIHRvIG9uQ2hhbmdlIGFzIGEgc2ltcGxlIHZhbHVlIChsZWdhY3kgcHJlIDEuMCBtb2RlKSwgZGVmYXVsdHMgdG8gZmFsc2Vcblx0c3R5bGU6IFByb3BUeXBlcy5vYmplY3QsIC8vIG9wdGlvbmFsIHN0eWxlIHRvIGFwcGx5IHRvIHRoZSBjb250cm9sXG5cdHRhYkluZGV4OiBzdHJpbmdPck51bWJlciwgLy8gb3B0aW9uYWwgdGFiIGluZGV4IG9mIHRoZSBjb250cm9sXG5cdHRhYlNlbGVjdHNWYWx1ZTogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgdG8gdHJlYXQgdGFiYmluZyBvdXQgd2hpbGUgZm9jdXNlZCB0byBiZSB2YWx1ZSBzZWxlY3Rpb25cblx0dHJpbUZpbHRlcjogUHJvcFR5cGVzLmJvb2wsIC8vIHdoZXRoZXIgdG8gdHJpbSB3aGl0ZXNwYWNlIGFyb3VuZCBmaWx0ZXIgdmFsdWVcblx0dmFsdWU6IFByb3BUeXBlcy5hbnksIC8vIGluaXRpYWwgZmllbGQgdmFsdWVcblx0dmFsdWVDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLCAvLyB2YWx1ZSBjb21wb25lbnQgdG8gcmVuZGVyXG5cdHZhbHVlS2V5OiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBwYXRoIG9mIHRoZSBsYWJlbCB2YWx1ZSBpbiBvcHRpb24gb2JqZWN0c1xuXHR2YWx1ZVJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYywgLy8gdmFsdWVSZW5kZXJlcjogZnVuY3Rpb24gKG9wdGlvbikge31cblx0d3JhcHBlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0IC8vIG9wdGlvbmFsIHN0eWxlIHRvIGFwcGx5IHRvIHRoZSBjb21wb25lbnQgd3JhcHBlclxufTtcblxuU2VsZWN0JDEuZGVmYXVsdFByb3BzID0ge1xuXHRhcnJvd1JlbmRlcmVyOiBhcnJvd1JlbmRlcmVyLFxuXHRhdXRvc2l6ZTogdHJ1ZSxcblx0YmFja3NwYWNlUmVtb3ZlczogdHJ1ZSxcblx0YmFja3NwYWNlVG9SZW1vdmVNZXNzYWdlOiAnUHJlc3MgYmFja3NwYWNlIHRvIHJlbW92ZSB7bGFiZWx9Jyxcblx0Y2xlYXJhYmxlOiB0cnVlLFxuXHRjbGVhckFsbFRleHQ6ICdDbGVhciBhbGwnLFxuXHRjbGVhclJlbmRlcmVyOiBjbGVhclJlbmRlcmVyLFxuXHRjbGVhclZhbHVlVGV4dDogJ0NsZWFyIHZhbHVlJyxcblx0Y2xvc2VPblNlbGVjdDogdHJ1ZSxcblx0ZGVsZXRlUmVtb3ZlczogdHJ1ZSxcblx0ZGVsaW1pdGVyOiAnLCcsXG5cdGRpc2FibGVkOiBmYWxzZSxcblx0ZXNjYXBlQ2xlYXJzVmFsdWU6IHRydWUsXG5cdGZpbHRlck9wdGlvbnM6IGZpbHRlck9wdGlvbnMsXG5cdGlnbm9yZUFjY2VudHM6IHRydWUsXG5cdGlnbm9yZUNhc2U6IHRydWUsXG5cdGlucHV0UHJvcHM6IHt9LFxuXHRpc0xvYWRpbmc6IGZhbHNlLFxuXHRqb2luVmFsdWVzOiBmYWxzZSxcblx0bGFiZWxLZXk6ICdsYWJlbCcsXG5cdG1hdGNoUG9zOiAnYW55Jyxcblx0bWF0Y2hQcm9wOiAnYW55Jyxcblx0bWVudUJ1ZmZlcjogMCxcblx0bWVudVJlbmRlcmVyOiBtZW51UmVuZGVyZXIsXG5cdG11bHRpOiBmYWxzZSxcblx0bm9SZXN1bHRzVGV4dDogJ05vIHJlc3VsdHMgZm91bmQnLFxuXHRvbkJsdXJSZXNldHNJbnB1dDogdHJ1ZSxcblx0b25DbG9zZVJlc2V0c0lucHV0OiB0cnVlLFxuXHRvblNlbGVjdFJlc2V0c0lucHV0OiB0cnVlLFxuXHRvcGVuT25DbGljazogdHJ1ZSxcblx0b3B0aW9uQ29tcG9uZW50OiBPcHRpb24sXG5cdHBhZ2VTaXplOiA1LFxuXHRwbGFjZWhvbGRlcjogJ1NlbGVjdC4uLicsXG5cdHJlbW92ZVNlbGVjdGVkOiB0cnVlLFxuXHRyZXF1aXJlZDogZmFsc2UsXG5cdHJ0bDogZmFsc2UsXG5cdHNjcm9sbE1lbnVJbnRvVmlldzogdHJ1ZSxcblx0c2VhcmNoYWJsZTogdHJ1ZSxcblx0c2ltcGxlVmFsdWU6IGZhbHNlLFxuXHR0YWJTZWxlY3RzVmFsdWU6IHRydWUsXG5cdHRyaW1GaWx0ZXI6IHRydWUsXG5cdHZhbHVlQ29tcG9uZW50OiBWYWx1ZSxcblx0dmFsdWVLZXk6ICd2YWx1ZSdcbn07XG5cbnZhciBwcm9wVHlwZXMgPSB7XG5cdGF1dG9sb2FkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLCAvLyBhdXRvbWF0aWNhbGx5IGNhbGwgdGhlIGBsb2FkT3B0aW9uc2AgcHJvcCBvbi1tb3VudDsgZGVmYXVsdHMgdG8gdHJ1ZVxuXHRjYWNoZTogUHJvcFR5cGVzLmFueSwgLy8gb2JqZWN0IHRvIHVzZSB0byBjYWNoZSByZXN1bHRzOyBzZXQgdG8gbnVsbC9mYWxzZSB0byBkaXNhYmxlIGNhY2hpbmdcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIENoaWxkIGZ1bmN0aW9uIHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGUgaW5uZXIgU2VsZWN0IGNvbXBvbmVudDsgKHByb3BzOiBPYmplY3QpOiBQcm9wVHlwZXMuZWxlbWVudFxuXHRpZ25vcmVBY2NlbnRzOiBQcm9wVHlwZXMuYm9vbCwgLy8gc3RyaXAgZGlhY3JpdGljcyB3aGVuIGZpbHRlcmluZzsgZGVmYXVsdHMgdG8gdHJ1ZVxuXHRpZ25vcmVDYXNlOiBQcm9wVHlwZXMuYm9vbCwgLy8gcGVyZm9ybSBjYXNlLWluc2Vuc2l0aXZlIGZpbHRlcmluZzsgZGVmYXVsdHMgdG8gdHJ1ZVxuXHRsb2FkT3B0aW9uczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgLy8gY2FsbGJhY2sgdG8gbG9hZCBvcHRpb25zIGFzeW5jaHJvbm91c2x5OyAoaW5wdXRWYWx1ZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiA/UHJvbWlzZVxuXHRsb2FkaW5nUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoWy8vIHJlcGxhY2VzIHRoZSBwbGFjZWhvbGRlciB3aGlsZSBvcHRpb25zIGFyZSBsb2FkaW5nXG5cdFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG5cdG11bHRpOiBQcm9wVHlwZXMuYm9vbCwgLy8gbXVsdGktdmFsdWUgaW5wdXRcblx0bm9SZXN1bHRzVGV4dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbLy8gZmllbGQgbm9SZXN1bHRzVGV4dCwgZGlzcGxheWVkIHdoZW4gbm8gb3B0aW9ucyBjb21lIGJhY2sgZnJvbSB0aGUgc2VydmVyXG5cdFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG5cdG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYywgLy8gb25DaGFuZ2UgaGFuZGxlcjogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7fVxuXHRvbklucHV0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYywgLy8gb3B0aW9uYWwgZm9yIGtlZXBpbmcgdHJhY2sgb2Ygd2hhdCBpcyBiZWluZyB0eXBlZFxuXHRvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCwgLy8gYXJyYXkgb2Ygb3B0aW9uc1xuXHRwbGFjZWhvbGRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbLy8gZmllbGQgcGxhY2Vob2xkZXIsIGRpc3BsYXllZCB3aGVuIHRoZXJlJ3Mgbm8gdmFsdWUgKHNoYXJlZCB3aXRoIFNlbGVjdClcblx0UHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcblx0c2VhcmNoUHJvbXB0VGV4dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbLy8gbGFiZWwgdG8gcHJvbXB0IGZvciBzZWFyY2ggaW5wdXRcblx0UHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcblx0dmFsdWU6IFByb3BUeXBlcy5hbnkgLy8gaW5pdGlhbCBmaWVsZCB2YWx1ZVxufTtcblxudmFyIGRlZmF1bHRDYWNoZSA9IHt9O1xuXG52YXIgZGVmYXVsdENoaWxkcmVuID0gZnVuY3Rpb24gZGVmYXVsdENoaWxkcmVuKHByb3BzKSB7XG5cdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCQxLCBwcm9wcyk7XG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuXHRhdXRvbG9hZDogdHJ1ZSxcblx0Y2FjaGU6IGRlZmF1bHRDYWNoZSxcblx0Y2hpbGRyZW46IGRlZmF1bHRDaGlsZHJlbixcblx0aWdub3JlQWNjZW50czogdHJ1ZSxcblx0aWdub3JlQ2FzZTogdHJ1ZSxcblx0bG9hZGluZ1BsYWNlaG9sZGVyOiAnTG9hZGluZy4uLicsXG5cdG9wdGlvbnM6IFtdLFxuXHRzZWFyY2hQcm9tcHRUZXh0OiAnVHlwZSB0byBzZWFyY2gnXG59O1xuXG52YXIgQXN5bmMgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuXHRpbmhlcml0cyhBc3luYywgX0NvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gQXN5bmMocHJvcHMsIGNvbnRleHQpIHtcblx0XHRjbGFzc0NhbGxDaGVjayh0aGlzLCBBc3luYyk7XG5cblx0XHR2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBc3luYy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFzeW5jKSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG5cdFx0X3RoaXMuX2NhY2hlID0gcHJvcHMuY2FjaGUgPT09IGRlZmF1bHRDYWNoZSA/IHt9IDogcHJvcHMuY2FjaGU7XG5cblx0XHRfdGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlucHV0VmFsdWU6ICcnLFxuXHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcblx0XHRcdG9wdGlvbnM6IHByb3BzLm9wdGlvbnNcblx0XHR9O1xuXG5cdFx0X3RoaXMub25JbnB1dENoYW5nZSA9IF90aGlzLm9uSW5wdXRDaGFuZ2UuYmluZChfdGhpcyk7XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0Y3JlYXRlQ2xhc3MoQXN5bmMsIFt7XG5cdFx0a2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRcdHZhciBhdXRvbG9hZCA9IHRoaXMucHJvcHMuYXV0b2xvYWQ7XG5cblxuXHRcdFx0aWYgKGF1dG9sb2FkKSB7XG5cdFx0XHRcdHRoaXMubG9hZE9wdGlvbnMoJycpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXHRcdFx0aWYgKG5leHRQcm9wcy5vcHRpb25zICE9PSB0aGlzLnByb3BzLm9wdGlvbnMpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0b3B0aW9uczogbmV4dFByb3BzLm9wdGlvbnNcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRcdHRoaXMuX2NhbGxiYWNrID0gbnVsbDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdsb2FkT3B0aW9ucycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGxvYWRPcHRpb25zKGlucHV0VmFsdWUpIHtcblx0XHRcdHZhciBfdGhpczIgPSB0aGlzO1xuXG5cdFx0XHR2YXIgbG9hZE9wdGlvbnMgPSB0aGlzLnByb3BzLmxvYWRPcHRpb25zO1xuXG5cdFx0XHR2YXIgY2FjaGUgPSB0aGlzLl9jYWNoZTtcblxuXHRcdFx0aWYgKGNhY2hlICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjYWNoZSwgaW5wdXRWYWx1ZSkpIHtcblx0XHRcdFx0dGhpcy5fY2FsbGJhY2sgPSBudWxsO1xuXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlzTG9hZGluZzogZmFsc2UsXG5cdFx0XHRcdFx0b3B0aW9uczogY2FjaGVbaW5wdXRWYWx1ZV1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhlcnJvciwgZGF0YSkge1xuXHRcdFx0XHR2YXIgb3B0aW9ucyA9IGRhdGEgJiYgZGF0YS5vcHRpb25zIHx8IFtdO1xuXG5cdFx0XHRcdGlmIChjYWNoZSkge1xuXHRcdFx0XHRcdGNhY2hlW2lucHV0VmFsdWVdID0gb3B0aW9ucztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjYWxsYmFjayA9PT0gX3RoaXMyLl9jYWxsYmFjaykge1xuXHRcdFx0XHRcdF90aGlzMi5fY2FsbGJhY2sgPSBudWxsO1xuXG5cdFx0XHRcdFx0X3RoaXMyLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGlzTG9hZGluZzogZmFsc2UsXG5cdFx0XHRcdFx0XHRvcHRpb25zOiBvcHRpb25zXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdC8vIElnbm9yZSBhbGwgYnV0IHRoZSBtb3N0IHJlY2VudCByZXF1ZXN0XG5cdFx0XHR0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xuXG5cdFx0XHR2YXIgcHJvbWlzZSA9IGxvYWRPcHRpb25zKGlucHV0VmFsdWUsIGNhbGxiYWNrKTtcblx0XHRcdGlmIChwcm9taXNlKSB7XG5cdFx0XHRcdHByb21pc2UudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhudWxsLCBkYXRhKTtcblx0XHRcdFx0fSwgZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9jYWxsYmFjayAmJiAhdGhpcy5zdGF0ZS5pc0xvYWRpbmcpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0aXNMb2FkaW5nOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ29uSW5wdXRDaGFuZ2UnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKGlucHV0VmFsdWUpIHtcblx0XHRcdHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuXHRcdFx0ICAgIGlnbm9yZUFjY2VudHMgPSBfcHJvcHMuaWdub3JlQWNjZW50cyxcblx0XHRcdCAgICBpZ25vcmVDYXNlID0gX3Byb3BzLmlnbm9yZUNhc2UsXG5cdFx0XHQgICAgb25JbnB1dENoYW5nZSA9IF9wcm9wcy5vbklucHV0Q2hhbmdlO1xuXG5cdFx0XHR2YXIgbmV3SW5wdXRWYWx1ZSA9IGlucHV0VmFsdWU7XG5cblx0XHRcdGlmIChvbklucHV0Q2hhbmdlKSB7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IG9uSW5wdXRDaGFuZ2UobmV3SW5wdXRWYWx1ZSk7XG5cdFx0XHRcdC8vIE5vdGU6ICE9IHVzZWQgZGVsaWJlcmF0ZWx5IGhlcmUgdG8gY2F0Y2ggdW5kZWZpbmVkIGFuZCBudWxsXG5cdFx0XHRcdGlmICh2YWx1ZSAhPSBudWxsICYmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKSkgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0bmV3SW5wdXRWYWx1ZSA9ICcnICsgdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dmFyIHRyYW5zZm9ybWVkSW5wdXRWYWx1ZSA9IG5ld0lucHV0VmFsdWU7XG5cblx0XHRcdGlmIChpZ25vcmVBY2NlbnRzKSB7XG5cdFx0XHRcdHRyYW5zZm9ybWVkSW5wdXRWYWx1ZSA9IHN0cmlwRGlhY3JpdGljcyh0cmFuc2Zvcm1lZElucHV0VmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaWdub3JlQ2FzZSkge1xuXHRcdFx0XHR0cmFuc2Zvcm1lZElucHV0VmFsdWUgPSB0cmFuc2Zvcm1lZElucHV0VmFsdWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IG5ld0lucHV0VmFsdWUgfSk7XG5cdFx0XHR0aGlzLmxvYWRPcHRpb25zKHRyYW5zZm9ybWVkSW5wdXRWYWx1ZSk7XG5cblx0XHRcdC8vIFJldHVybiBuZXcgaW5wdXQgdmFsdWUsIGJ1dCB3aXRob3V0IGFwcGx5aW5nIHRvTG93ZXJDYXNlKCkgdG8gYXZvaWQgbW9kaWZ5aW5nIHRoZSB1c2VyJ3MgdmlldyBjYXNlIG9mIHRoZSBpbnB1dCB3aGlsZSB0eXBpbmcuXG5cdFx0XHRyZXR1cm4gbmV3SW5wdXRWYWx1ZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdub1Jlc3VsdHNUZXh0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbm9SZXN1bHRzVGV4dCgpIHtcblx0XHRcdHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcblx0XHRcdCAgICBsb2FkaW5nUGxhY2Vob2xkZXIgPSBfcHJvcHMyLmxvYWRpbmdQbGFjZWhvbGRlcixcblx0XHRcdCAgICBub1Jlc3VsdHNUZXh0ID0gX3Byb3BzMi5ub1Jlc3VsdHNUZXh0LFxuXHRcdFx0ICAgIHNlYXJjaFByb21wdFRleHQgPSBfcHJvcHMyLnNlYXJjaFByb21wdFRleHQ7XG5cdFx0XHR2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcblx0XHRcdCAgICBpbnB1dFZhbHVlID0gX3N0YXRlLmlucHV0VmFsdWUsXG5cdFx0XHQgICAgaXNMb2FkaW5nID0gX3N0YXRlLmlzTG9hZGluZztcblxuXG5cdFx0XHRpZiAoaXNMb2FkaW5nKSB7XG5cdFx0XHRcdHJldHVybiBsb2FkaW5nUGxhY2Vob2xkZXI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaW5wdXRWYWx1ZSAmJiBub1Jlc3VsdHNUZXh0KSB7XG5cdFx0XHRcdHJldHVybiBub1Jlc3VsdHNUZXh0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNlYXJjaFByb21wdFRleHQ7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcblx0XHRcdHRoaXMuc2VsZWN0LmZvY3VzKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIF90aGlzMyA9IHRoaXM7XG5cblx0XHRcdHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcblx0XHRcdCAgICBjaGlsZHJlbiA9IF9wcm9wczMuY2hpbGRyZW4sXG5cdFx0XHQgICAgbG9hZGluZ1BsYWNlaG9sZGVyID0gX3Byb3BzMy5sb2FkaW5nUGxhY2Vob2xkZXIsXG5cdFx0XHQgICAgcGxhY2Vob2xkZXIgPSBfcHJvcHMzLnBsYWNlaG9sZGVyO1xuXHRcdFx0dmFyIF9zdGF0ZTIgPSB0aGlzLnN0YXRlLFxuXHRcdFx0ICAgIGlzTG9hZGluZyA9IF9zdGF0ZTIuaXNMb2FkaW5nLFxuXHRcdFx0ICAgIG9wdGlvbnMgPSBfc3RhdGUyLm9wdGlvbnM7XG5cblxuXHRcdFx0dmFyIHByb3BzID0ge1xuXHRcdFx0XHRub1Jlc3VsdHNUZXh0OiB0aGlzLm5vUmVzdWx0c1RleHQoKSxcblx0XHRcdFx0cGxhY2Vob2xkZXI6IGlzTG9hZGluZyA/IGxvYWRpbmdQbGFjZWhvbGRlciA6IHBsYWNlaG9sZGVyLFxuXHRcdFx0XHRvcHRpb25zOiBpc0xvYWRpbmcgJiYgbG9hZGluZ1BsYWNlaG9sZGVyID8gW10gOiBvcHRpb25zLFxuXHRcdFx0XHRyZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG5cdFx0XHRcdFx0cmV0dXJuIF90aGlzMy5zZWxlY3QgPSBfcmVmO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gY2hpbGRyZW4oX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHByb3BzLCB7XG5cdFx0XHRcdGlzTG9hZGluZzogaXNMb2FkaW5nLFxuXHRcdFx0XHRvbklucHV0Q2hhbmdlOiB0aGlzLm9uSW5wdXRDaGFuZ2Vcblx0XHRcdH0pKTtcblx0XHR9XG5cdH1dKTtcblx0cmV0dXJuIEFzeW5jO1xufShDb21wb25lbnQpO1xuXG5Bc3luYy5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Bc3luYy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbnZhciBDcmVhdGFibGVTZWxlY3QgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRpbmhlcml0cyhDcmVhdGFibGVTZWxlY3QsIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIENyZWF0YWJsZVNlbGVjdChwcm9wcywgY29udGV4dCkge1xuXHRcdGNsYXNzQ2FsbENoZWNrKHRoaXMsIENyZWF0YWJsZVNlbGVjdCk7XG5cblx0XHR2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDcmVhdGFibGVTZWxlY3QuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDcmVhdGFibGVTZWxlY3QpKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cblx0XHRfdGhpcy5maWx0ZXJPcHRpb25zID0gX3RoaXMuZmlsdGVyT3B0aW9ucy5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5tZW51UmVuZGVyZXIgPSBfdGhpcy5tZW51UmVuZGVyZXIuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMub25JbnB1dEtleURvd24gPSBfdGhpcy5vbklucHV0S2V5RG93bi5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5vbklucHV0Q2hhbmdlID0gX3RoaXMub25JbnB1dENoYW5nZS5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5vbk9wdGlvblNlbGVjdCA9IF90aGlzLm9uT3B0aW9uU2VsZWN0LmJpbmQoX3RoaXMpO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdGNyZWF0ZUNsYXNzKENyZWF0YWJsZVNlbGVjdCwgW3tcblx0XHRrZXk6ICdjcmVhdGVOZXdPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVOZXdPcHRpb24oKSB7XG5cdFx0XHR2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcblx0XHRcdCAgICBpc1ZhbGlkTmV3T3B0aW9uID0gX3Byb3BzLmlzVmFsaWROZXdPcHRpb24sXG5cdFx0XHQgICAgbmV3T3B0aW9uQ3JlYXRvciA9IF9wcm9wcy5uZXdPcHRpb25DcmVhdG9yLFxuXHRcdFx0ICAgIG9uTmV3T3B0aW9uQ2xpY2sgPSBfcHJvcHMub25OZXdPcHRpb25DbGljayxcblx0XHRcdCAgICBfcHJvcHMkb3B0aW9ucyA9IF9wcm9wcy5vcHRpb25zLFxuXHRcdFx0ICAgIG9wdGlvbnMgPSBfcHJvcHMkb3B0aW9ucyA9PT0gdW5kZWZpbmVkID8gW10gOiBfcHJvcHMkb3B0aW9ucztcblxuXG5cdFx0XHRpZiAoaXNWYWxpZE5ld09wdGlvbih7IGxhYmVsOiB0aGlzLmlucHV0VmFsdWUgfSkpIHtcblx0XHRcdFx0dmFyIG9wdGlvbiA9IG5ld09wdGlvbkNyZWF0b3IoeyBsYWJlbDogdGhpcy5pbnB1dFZhbHVlLCBsYWJlbEtleTogdGhpcy5sYWJlbEtleSwgdmFsdWVLZXk6IHRoaXMudmFsdWVLZXkgfSk7XG5cdFx0XHRcdHZhciBfaXNPcHRpb25VbmlxdWUgPSB0aGlzLmlzT3B0aW9uVW5pcXVlKHsgb3B0aW9uOiBvcHRpb24sIG9wdGlvbnM6IG9wdGlvbnMgfSk7XG5cblx0XHRcdFx0Ly8gRG9uJ3QgYWRkIHRoZSBzYW1lIG9wdGlvbiB0d2ljZS5cblx0XHRcdFx0aWYgKF9pc09wdGlvblVuaXF1ZSkge1xuXHRcdFx0XHRcdGlmIChvbk5ld09wdGlvbkNsaWNrKSB7XG5cdFx0XHRcdFx0XHRvbk5ld09wdGlvbkNsaWNrKG9wdGlvbik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG9wdGlvbnMudW5zaGlmdChvcHRpb24pO1xuXG5cdFx0XHRcdFx0XHR0aGlzLnNlbGVjdC5zZWxlY3RWYWx1ZShvcHRpb24pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZpbHRlck9wdGlvbnMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmaWx0ZXJPcHRpb25zJCQxKCkge1xuXHRcdFx0dmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuXHRcdFx0ICAgIGZpbHRlck9wdGlvbnMkJDEgPSBfcHJvcHMyLmZpbHRlck9wdGlvbnMsXG5cdFx0XHQgICAgaXNWYWxpZE5ld09wdGlvbiA9IF9wcm9wczIuaXNWYWxpZE5ld09wdGlvbixcblx0XHRcdCAgICBwcm9tcHRUZXh0Q3JlYXRvciA9IF9wcm9wczIucHJvbXB0VGV4dENyZWF0b3IsXG5cdFx0XHQgICAgc2hvd05ld09wdGlvbkF0VG9wID0gX3Byb3BzMi5zaG93TmV3T3B0aW9uQXRUb3A7XG5cblx0XHRcdC8vIFRSSUNLWSBDaGVjayBjdXJyZW50bHkgc2VsZWN0ZWQgb3B0aW9ucyBhcyB3ZWxsLlxuXHRcdFx0Ly8gRG9uJ3QgZGlzcGxheSBhIGNyZWF0ZS1wcm9tcHQgZm9yIGEgdmFsdWUgdGhhdCdzIHNlbGVjdGVkLlxuXHRcdFx0Ly8gVGhpcyBjb3ZlcnMgYXN5bmMgZWRnZS1jYXNlcyB3aGVyZSBhIG5ld2x5LWNyZWF0ZWQgT3B0aW9uIGlzbid0IHlldCBpbiB0aGUgYXN5bmMtbG9hZGVkIGFycmF5LlxuXG5cdFx0XHR2YXIgZXhjbHVkZU9wdGlvbnMgPSAoYXJndW1lbnRzLmxlbmd0aCA8PSAyID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzJdKSB8fCBbXTtcblxuXHRcdFx0dmFyIGZpbHRlcmVkT3B0aW9ucyA9IGZpbHRlck9wdGlvbnMkJDEuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpIHx8IFtdO1xuXG5cdFx0XHRpZiAoaXNWYWxpZE5ld09wdGlvbih7IGxhYmVsOiB0aGlzLmlucHV0VmFsdWUgfSkpIHtcblx0XHRcdFx0dmFyIF9uZXdPcHRpb25DcmVhdG9yID0gdGhpcy5wcm9wcy5uZXdPcHRpb25DcmVhdG9yO1xuXG5cblx0XHRcdFx0dmFyIG9wdGlvbiA9IF9uZXdPcHRpb25DcmVhdG9yKHtcblx0XHRcdFx0XHRsYWJlbDogdGhpcy5pbnB1dFZhbHVlLFxuXHRcdFx0XHRcdGxhYmVsS2V5OiB0aGlzLmxhYmVsS2V5LFxuXHRcdFx0XHRcdHZhbHVlS2V5OiB0aGlzLnZhbHVlS2V5XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIFRSSUNLWSBDb21wYXJlIHRvIGFsbCBvcHRpb25zIChub3QganVzdCBmaWx0ZXJlZCBvcHRpb25zKSBpbiBjYXNlIG9wdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHNlbGVjdGVkKS5cblx0XHRcdFx0Ly8gRm9yIG11bHRpLXNlbGVjdHMsIHRoaXMgd291bGQgcmVtb3ZlIGl0IGZyb20gdGhlIGZpbHRlcmVkIGxpc3QuXG5cdFx0XHRcdHZhciBfaXNPcHRpb25VbmlxdWUyID0gdGhpcy5pc09wdGlvblVuaXF1ZSh7XG5cdFx0XHRcdFx0b3B0aW9uOiBvcHRpb24sXG5cdFx0XHRcdFx0b3B0aW9uczogZXhjbHVkZU9wdGlvbnMuY29uY2F0KGZpbHRlcmVkT3B0aW9ucylcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKF9pc09wdGlvblVuaXF1ZTIpIHtcblx0XHRcdFx0XHR2YXIgcHJvbXB0ID0gcHJvbXB0VGV4dENyZWF0b3IodGhpcy5pbnB1dFZhbHVlKTtcblxuXHRcdFx0XHRcdHRoaXMuX2NyZWF0ZVBsYWNlaG9sZGVyT3B0aW9uID0gX25ld09wdGlvbkNyZWF0b3Ioe1xuXHRcdFx0XHRcdFx0bGFiZWw6IHByb21wdCxcblx0XHRcdFx0XHRcdGxhYmVsS2V5OiB0aGlzLmxhYmVsS2V5LFxuXHRcdFx0XHRcdFx0dmFsdWVLZXk6IHRoaXMudmFsdWVLZXlcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdGlmIChzaG93TmV3T3B0aW9uQXRUb3ApIHtcblx0XHRcdFx0XHRcdGZpbHRlcmVkT3B0aW9ucy51bnNoaWZ0KHRoaXMuX2NyZWF0ZVBsYWNlaG9sZGVyT3B0aW9uKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZmlsdGVyZWRPcHRpb25zLnB1c2godGhpcy5fY3JlYXRlUGxhY2Vob2xkZXJPcHRpb24pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmlsdGVyZWRPcHRpb25zO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2lzT3B0aW9uVW5pcXVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaXNPcHRpb25VbmlxdWUoX3JlZikge1xuXHRcdFx0dmFyIG9wdGlvbiA9IF9yZWYub3B0aW9uLFxuXHRcdFx0ICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG5cdFx0XHR2YXIgaXNPcHRpb25VbmlxdWUgPSB0aGlzLnByb3BzLmlzT3B0aW9uVW5pcXVlO1xuXG5cblx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHRoaXMucHJvcHMub3B0aW9ucztcblxuXHRcdFx0cmV0dXJuIGlzT3B0aW9uVW5pcXVlKHtcblx0XHRcdFx0bGFiZWxLZXk6IHRoaXMubGFiZWxLZXksXG5cdFx0XHRcdG9wdGlvbjogb3B0aW9uLFxuXHRcdFx0XHRvcHRpb25zOiBvcHRpb25zLFxuXHRcdFx0XHR2YWx1ZUtleTogdGhpcy52YWx1ZUtleVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbWVudVJlbmRlcmVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbWVudVJlbmRlcmVyJCQxKHBhcmFtcykge1xuXHRcdFx0dmFyIG1lbnVSZW5kZXJlciQkMSA9IHRoaXMucHJvcHMubWVudVJlbmRlcmVyO1xuXG5cblx0XHRcdHJldHVybiBtZW51UmVuZGVyZXIkJDEoX2V4dGVuZHMoe30sIHBhcmFtcywge1xuXHRcdFx0XHRvblNlbGVjdDogdGhpcy5vbk9wdGlvblNlbGVjdCxcblx0XHRcdFx0c2VsZWN0VmFsdWU6IHRoaXMub25PcHRpb25TZWxlY3Rcblx0XHRcdH0pKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdvbklucHV0Q2hhbmdlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gb25JbnB1dENoYW5nZShpbnB1dCkge1xuXHRcdFx0dmFyIG9uSW5wdXRDaGFuZ2UgPSB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2U7XG5cblx0XHRcdC8vIFRoaXMgdmFsdWUgbWF5IGJlIG5lZWRlZCBpbiBiZXR3ZWVuIFNlbGVjdCBtb3VudHMgKHdoZW4gdGhpcy5zZWxlY3QgaXMgbnVsbClcblxuXHRcdFx0dGhpcy5pbnB1dFZhbHVlID0gaW5wdXQ7XG5cblx0XHRcdGlmIChvbklucHV0Q2hhbmdlKSB7XG5cdFx0XHRcdHRoaXMuaW5wdXRWYWx1ZSA9IG9uSW5wdXRDaGFuZ2UoaW5wdXQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnB1dFZhbHVlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ29uSW5wdXRLZXlEb3duJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gb25JbnB1dEtleURvd24oZXZlbnQpIHtcblx0XHRcdHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcblx0XHRcdCAgICBzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb24gPSBfcHJvcHMzLnNob3VsZEtleURvd25FdmVudENyZWF0ZU5ld09wdGlvbixcblx0XHRcdCAgICBvbklucHV0S2V5RG93biA9IF9wcm9wczMub25JbnB1dEtleURvd247XG5cblx0XHRcdHZhciBmb2N1c2VkT3B0aW9uID0gdGhpcy5zZWxlY3QuZ2V0Rm9jdXNlZE9wdGlvbigpO1xuXG5cdFx0XHRpZiAoZm9jdXNlZE9wdGlvbiAmJiBmb2N1c2VkT3B0aW9uID09PSB0aGlzLl9jcmVhdGVQbGFjZWhvbGRlck9wdGlvbiAmJiBzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb24oZXZlbnQpKSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlTmV3T3B0aW9uKCk7XG5cblx0XHRcdFx0Ly8gUHJldmVudCBkZWNvcmF0ZWQgU2VsZWN0IGZyb20gZG9pbmcgYW55dGhpbmcgYWRkaXRpb25hbCB3aXRoIHRoaXMga2V5RG93biBldmVudFxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fSBlbHNlIGlmIChvbklucHV0S2V5RG93bikge1xuXHRcdFx0XHRvbklucHV0S2V5RG93bihldmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnb25PcHRpb25TZWxlY3QnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBvbk9wdGlvblNlbGVjdChvcHRpb24pIHtcblx0XHRcdGlmIChvcHRpb24gPT09IHRoaXMuX2NyZWF0ZVBsYWNlaG9sZGVyT3B0aW9uKSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlTmV3T3B0aW9uKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNlbGVjdC5zZWxlY3RWYWx1ZShvcHRpb24pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG5cdFx0XHR0aGlzLnNlbGVjdC5mb2N1cygpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBfdGhpczIgPSB0aGlzO1xuXG5cdFx0XHR2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHMsXG5cdFx0XHQgICAgcmVmUHJvcCA9IF9wcm9wczQucmVmLFxuXHRcdFx0ICAgIHJlc3RQcm9wcyA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wczQsIFsncmVmJ10pO1xuXHRcdFx0dmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuXHRcdFx0Ly8gV2UgY2FuJ3QgdXNlIGRlc3RydWN0dXJpbmcgZGVmYXVsdCB2YWx1ZXMgdG8gc2V0IHRoZSBjaGlsZHJlbixcblx0XHRcdC8vIGJlY2F1c2UgaXQgd29uJ3QgYXBwbHkgd29yayBpZiBgY2hpbGRyZW5gIGlzIG51bGwuIEEgZmFsc3kgY2hlY2sgaXNcblx0XHRcdC8vIG1vcmUgcmVsaWFibGUgaW4gcmVhbCB3b3JsZCB1c2UtY2FzZXMuXG5cblx0XHRcdGlmICghY2hpbGRyZW4pIHtcblx0XHRcdFx0Y2hpbGRyZW4gPSBkZWZhdWx0Q2hpbGRyZW4kMjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHJlc3RQcm9wcywge1xuXHRcdFx0XHRhbGxvd0NyZWF0ZTogdHJ1ZSxcblx0XHRcdFx0ZmlsdGVyT3B0aW9uczogdGhpcy5maWx0ZXJPcHRpb25zLFxuXHRcdFx0XHRtZW51UmVuZGVyZXI6IHRoaXMubWVudVJlbmRlcmVyLFxuXHRcdFx0XHRvbklucHV0Q2hhbmdlOiB0aGlzLm9uSW5wdXRDaGFuZ2UsXG5cdFx0XHRcdG9uSW5wdXRLZXlEb3duOiB0aGlzLm9uSW5wdXRLZXlEb3duLFxuXHRcdFx0XHRyZWY6IGZ1bmN0aW9uIHJlZihfcmVmMikge1xuXHRcdFx0XHRcdF90aGlzMi5zZWxlY3QgPSBfcmVmMjtcblxuXHRcdFx0XHRcdC8vIFRoZXNlIHZhbHVlcyBtYXkgYmUgbmVlZGVkIGluIGJldHdlZW4gU2VsZWN0IG1vdW50cyAod2hlbiB0aGlzLnNlbGVjdCBpcyBudWxsKVxuXHRcdFx0XHRcdGlmIChfcmVmMikge1xuXHRcdFx0XHRcdFx0X3RoaXMyLmxhYmVsS2V5ID0gX3JlZjIucHJvcHMubGFiZWxLZXk7XG5cdFx0XHRcdFx0XHRfdGhpczIudmFsdWVLZXkgPSBfcmVmMi5wcm9wcy52YWx1ZUtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHJlZlByb3ApIHtcblx0XHRcdFx0XHRcdHJlZlByb3AoX3JlZjIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBjaGlsZHJlbihwcm9wcyk7XG5cdFx0fVxuXHR9XSk7XG5cdHJldHVybiBDcmVhdGFibGVTZWxlY3Q7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBkZWZhdWx0Q2hpbGRyZW4kMiA9IGZ1bmN0aW9uIGRlZmF1bHRDaGlsZHJlbihwcm9wcykge1xuXHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QkMSwgcHJvcHMpO1xufTtcblxudmFyIGlzT3B0aW9uVW5pcXVlID0gZnVuY3Rpb24gaXNPcHRpb25VbmlxdWUoX3JlZjMpIHtcblx0dmFyIG9wdGlvbiA9IF9yZWYzLm9wdGlvbixcblx0ICAgIG9wdGlvbnMgPSBfcmVmMy5vcHRpb25zLFxuXHQgICAgbGFiZWxLZXkgPSBfcmVmMy5sYWJlbEtleSxcblx0ICAgIHZhbHVlS2V5ID0gX3JlZjMudmFsdWVLZXk7XG5cblx0aWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLmxlbmd0aCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIG9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChleGlzdGluZ09wdGlvbikge1xuXHRcdHJldHVybiBleGlzdGluZ09wdGlvbltsYWJlbEtleV0gPT09IG9wdGlvbltsYWJlbEtleV0gfHwgZXhpc3RpbmdPcHRpb25bdmFsdWVLZXldID09PSBvcHRpb25bdmFsdWVLZXldO1xuXHR9KS5sZW5ndGggPT09IDA7XG59O1xuXG52YXIgaXNWYWxpZE5ld09wdGlvbiA9IGZ1bmN0aW9uIGlzVmFsaWROZXdPcHRpb24oX3JlZjQpIHtcblx0dmFyIGxhYmVsID0gX3JlZjQubGFiZWw7XG5cdHJldHVybiAhIWxhYmVsO1xufTtcblxudmFyIG5ld09wdGlvbkNyZWF0b3IgPSBmdW5jdGlvbiBuZXdPcHRpb25DcmVhdG9yKF9yZWY1KSB7XG5cdHZhciBsYWJlbCA9IF9yZWY1LmxhYmVsLFxuXHQgICAgbGFiZWxLZXkgPSBfcmVmNS5sYWJlbEtleSxcblx0ICAgIHZhbHVlS2V5ID0gX3JlZjUudmFsdWVLZXk7XG5cblx0dmFyIG9wdGlvbiA9IHt9O1xuXHRvcHRpb25bdmFsdWVLZXldID0gbGFiZWw7XG5cdG9wdGlvbltsYWJlbEtleV0gPSBsYWJlbDtcblx0b3B0aW9uLmNsYXNzTmFtZSA9ICdTZWxlY3QtY3JlYXRlLW9wdGlvbi1wbGFjZWhvbGRlcic7XG5cblx0cmV0dXJuIG9wdGlvbjtcbn07XG5cbnZhciBwcm9tcHRUZXh0Q3JlYXRvciA9IGZ1bmN0aW9uIHByb21wdFRleHRDcmVhdG9yKGxhYmVsKSB7XG5cdHJldHVybiAnQ3JlYXRlIG9wdGlvbiBcIicgKyBsYWJlbCArICdcIic7XG59O1xuXG52YXIgc2hvdWxkS2V5RG93bkV2ZW50Q3JlYXRlTmV3T3B0aW9uID0gZnVuY3Rpb24gc2hvdWxkS2V5RG93bkV2ZW50Q3JlYXRlTmV3T3B0aW9uKF9yZWY2KSB7XG5cdHZhciBrZXlDb2RlID0gX3JlZjYua2V5Q29kZTtcblxuXHRzd2l0Y2ggKGtleUNvZGUpIHtcblx0XHRjYXNlIDk6IC8vIFRBQlxuXHRcdGNhc2UgMTM6IC8vIEVOVEVSXG5cdFx0Y2FzZSAxODg6XG5cdFx0XHQvLyBDT01NQVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxuLy8gRGVmYXVsdCBwcm9wIG1ldGhvZHNcbkNyZWF0YWJsZVNlbGVjdC5pc09wdGlvblVuaXF1ZSA9IGlzT3B0aW9uVW5pcXVlO1xuQ3JlYXRhYmxlU2VsZWN0LmlzVmFsaWROZXdPcHRpb24gPSBpc1ZhbGlkTmV3T3B0aW9uO1xuQ3JlYXRhYmxlU2VsZWN0Lm5ld09wdGlvbkNyZWF0b3IgPSBuZXdPcHRpb25DcmVhdG9yO1xuQ3JlYXRhYmxlU2VsZWN0LnByb21wdFRleHRDcmVhdG9yID0gcHJvbXB0VGV4dENyZWF0b3I7XG5DcmVhdGFibGVTZWxlY3Quc2hvdWxkS2V5RG93bkV2ZW50Q3JlYXRlTmV3T3B0aW9uID0gc2hvdWxkS2V5RG93bkV2ZW50Q3JlYXRlTmV3T3B0aW9uO1xuXG5DcmVhdGFibGVTZWxlY3QuZGVmYXVsdFByb3BzID0ge1xuXHRmaWx0ZXJPcHRpb25zOiBmaWx0ZXJPcHRpb25zLFxuXHRpc09wdGlvblVuaXF1ZTogaXNPcHRpb25VbmlxdWUsXG5cdGlzVmFsaWROZXdPcHRpb246IGlzVmFsaWROZXdPcHRpb24sXG5cdG1lbnVSZW5kZXJlcjogbWVudVJlbmRlcmVyLFxuXHRuZXdPcHRpb25DcmVhdG9yOiBuZXdPcHRpb25DcmVhdG9yLFxuXHRwcm9tcHRUZXh0Q3JlYXRvcjogcHJvbXB0VGV4dENyZWF0b3IsXG5cdHNob3VsZEtleURvd25FdmVudENyZWF0ZU5ld09wdGlvbjogc2hvdWxkS2V5RG93bkV2ZW50Q3JlYXRlTmV3T3B0aW9uLFxuXHRzaG93TmV3T3B0aW9uQXRUb3A6IHRydWVcbn07XG5cbkNyZWF0YWJsZVNlbGVjdC5wcm9wVHlwZXMgPSB7XG5cdC8vIENoaWxkIGZ1bmN0aW9uIHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGUgaW5uZXIgU2VsZWN0IGNvbXBvbmVudFxuXHQvLyBUaGlzIGNvbXBvbmVudCBjYW4gYmUgdXNlZCB0byBjb21wb3NlIEhPQ3MgKGVnIENyZWF0YWJsZSBhbmQgQXN5bmMpXG5cdC8vIChwcm9wczogT2JqZWN0KTogUHJvcFR5cGVzLmVsZW1lbnRcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLFxuXG5cdC8vIFNlZSBTZWxlY3QucHJvcFR5cGVzLmZpbHRlck9wdGlvbnNcblx0ZmlsdGVyT3B0aW9uczogUHJvcFR5cGVzLmFueSxcblxuXHQvLyBTZWFyY2hlcyBmb3IgYW55IG1hdGNoaW5nIG9wdGlvbiB3aXRoaW4gdGhlIHNldCBvZiBvcHRpb25zLlxuXHQvLyBUaGlzIGZ1bmN0aW9uIHByZXZlbnRzIGR1cGxpY2F0ZSBvcHRpb25zIGZyb20gYmVpbmcgY3JlYXRlZC5cblx0Ly8gKHsgb3B0aW9uOiBPYmplY3QsIG9wdGlvbnM6IEFycmF5LCBsYWJlbEtleTogc3RyaW5nLCB2YWx1ZUtleTogc3RyaW5nIH0pOiBib29sZWFuXG5cdGlzT3B0aW9uVW5pcXVlOiBQcm9wVHlwZXMuZnVuYyxcblxuXHQvLyBEZXRlcm1pbmVzIGlmIHRoZSBjdXJyZW50IGlucHV0IHRleHQgcmVwcmVzZW50cyBhIHZhbGlkIG9wdGlvbi5cblx0Ly8gKHsgbGFiZWw6IHN0cmluZyB9KTogYm9vbGVhblxuXHRpc1ZhbGlkTmV3T3B0aW9uOiBQcm9wVHlwZXMuZnVuYyxcblxuXHQvLyBTZWUgU2VsZWN0LnByb3BUeXBlcy5tZW51UmVuZGVyZXJcblx0bWVudVJlbmRlcmVyOiBQcm9wVHlwZXMuYW55LFxuXG5cdC8vIEZhY3RvcnkgdG8gY3JlYXRlIG5ldyBvcHRpb24uXG5cdC8vICh7IGxhYmVsOiBzdHJpbmcsIGxhYmVsS2V5OiBzdHJpbmcsIHZhbHVlS2V5OiBzdHJpbmcgfSk6IE9iamVjdFxuXHRuZXdPcHRpb25DcmVhdG9yOiBQcm9wVHlwZXMuZnVuYyxcblxuXHQvLyBpbnB1dCBjaGFuZ2UgaGFuZGxlcjogZnVuY3Rpb24gKGlucHV0VmFsdWUpIHt9XG5cdG9uSW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG5cdC8vIGlucHV0IGtleURvd24gaGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KSB7fVxuXHRvbklucHV0S2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cblx0Ly8gbmV3IG9wdGlvbiBjbGljayBoYW5kbGVyOiBmdW5jdGlvbiAob3B0aW9uKSB7fVxuXHRvbk5ld09wdGlvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuXHQvLyBTZWUgU2VsZWN0LnByb3BUeXBlcy5vcHRpb25zXG5cdG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcblxuXHQvLyBDcmVhdGVzIHByb21wdC9wbGFjZWhvbGRlciBvcHRpb24gdGV4dC5cblx0Ly8gKGZpbHRlclRleHQ6IHN0cmluZyk6IHN0cmluZ1xuXHRwcm9tcHRUZXh0Q3JlYXRvcjogUHJvcFR5cGVzLmZ1bmMsXG5cblx0cmVmOiBQcm9wVHlwZXMuZnVuYyxcblxuXHQvLyBEZWNpZGVzIGlmIGEga2V5RG93biBldmVudCAoZWcgaXRzIGBrZXlDb2RlYCkgc2hvdWxkIHJlc3VsdCBpbiB0aGUgY3JlYXRpb24gb2YgYSBuZXcgb3B0aW9uLlxuXHRzaG91bGRLZXlEb3duRXZlbnRDcmVhdGVOZXdPcHRpb246IFByb3BUeXBlcy5mdW5jLFxuXG5cdC8vIFdoZXJlIHRvIHNob3cgcHJvbXB0L3BsYWNlaG9sZGVyIG9wdGlvbiB0ZXh0LlxuXHQvLyB0cnVlOiBuZXcgb3B0aW9uIHByb21wdCBhdCB0b3Agb2YgbGlzdCAoZGVmYXVsdClcblx0Ly8gZmFsc2U6IG5ldyBvcHRpb24gcHJvbXB0IGF0IGJvdHRvbSBvZiBsaXN0XG5cdHNob3dOZXdPcHRpb25BdFRvcDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbnZhciBBc3luY0NyZWF0YWJsZVNlbGVjdCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdGluaGVyaXRzKEFzeW5jQ3JlYXRhYmxlU2VsZWN0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBBc3luY0NyZWF0YWJsZVNlbGVjdCgpIHtcblx0XHRjbGFzc0NhbGxDaGVjayh0aGlzLCBBc3luY0NyZWF0YWJsZVNlbGVjdCk7XG5cdFx0cmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFzeW5jQ3JlYXRhYmxlU2VsZWN0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXN5bmNDcmVhdGFibGVTZWxlY3QpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblx0fVxuXG5cdGNyZWF0ZUNsYXNzKEFzeW5jQ3JlYXRhYmxlU2VsZWN0LCBbe1xuXHRcdGtleTogJ2ZvY3VzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG5cdFx0XHR0aGlzLnNlbGVjdC5mb2N1cygpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBfdGhpczIgPSB0aGlzO1xuXG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0QXN5bmMsXG5cdFx0XHRcdHRoaXMucHJvcHMsXG5cdFx0XHRcdGZ1bmN0aW9uIChfcmVmKSB7XG5cdFx0XHRcdFx0dmFyIHJlZiA9IF9yZWYucmVmLFxuXHRcdFx0XHRcdCAgICBhc3luY1Byb3BzID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydyZWYnXSk7XG5cblx0XHRcdFx0XHR2YXIgYXN5bmNSZWYgPSByZWY7XG5cdFx0XHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRDcmVhdGFibGVTZWxlY3QsXG5cdFx0XHRcdFx0XHRhc3luY1Byb3BzLFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKF9yZWYyKSB7XG5cdFx0XHRcdFx0XHRcdHZhciByZWYgPSBfcmVmMi5yZWYsXG5cdFx0XHRcdFx0XHRcdCAgICBjcmVhdGFibGVQcm9wcyA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYyLCBbJ3JlZiddKTtcblxuXHRcdFx0XHRcdFx0XHR2YXIgY3JlYXRhYmxlUmVmID0gcmVmO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXMyLnByb3BzLmNoaWxkcmVuKF9leHRlbmRzKHt9LCBjcmVhdGFibGVQcm9wcywge1xuXHRcdFx0XHRcdFx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKHNlbGVjdCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3JlYXRhYmxlUmVmKHNlbGVjdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRhc3luY1JlZihzZWxlY3QpO1xuXHRcdFx0XHRcdFx0XHRcdFx0X3RoaXMyLnNlbGVjdCA9IHNlbGVjdDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXHRyZXR1cm4gQXN5bmNDcmVhdGFibGVTZWxlY3Q7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBkZWZhdWx0Q2hpbGRyZW4kMSA9IGZ1bmN0aW9uIGRlZmF1bHRDaGlsZHJlbihwcm9wcykge1xuXHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QkMSwgcHJvcHMpO1xufTtcblxuQXN5bmNDcmVhdGFibGVTZWxlY3QucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCAvLyBDaGlsZCBmdW5jdGlvbiByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhlIGlubmVyIFNlbGVjdCBjb21wb25lbnQ7IChwcm9wczogT2JqZWN0KTogUHJvcFR5cGVzLmVsZW1lbnRcbn07XG5cbkFzeW5jQ3JlYXRhYmxlU2VsZWN0LmRlZmF1bHRQcm9wcyA9IHtcblx0Y2hpbGRyZW46IGRlZmF1bHRDaGlsZHJlbiQxXG59O1xuXG5TZWxlY3QkMS5Bc3luYyA9IEFzeW5jO1xuU2VsZWN0JDEuQXN5bmNDcmVhdGFibGUgPSBBc3luY0NyZWF0YWJsZVNlbGVjdDtcblNlbGVjdCQxLkNyZWF0YWJsZSA9IENyZWF0YWJsZVNlbGVjdDtcblNlbGVjdCQxLlZhbHVlID0gVmFsdWU7XG5TZWxlY3QkMS5PcHRpb24gPSBPcHRpb247XG5cbmV4cG9ydCB7IEFzeW5jLCBBc3luY0NyZWF0YWJsZVNlbGVjdCBhcyBBc3luY0NyZWF0YWJsZSwgQ3JlYXRhYmxlU2VsZWN0IGFzIENyZWF0YWJsZSwgVmFsdWUsIE9wdGlvbiwgbWVudVJlbmRlcmVyIGFzIGRlZmF1bHRNZW51UmVuZGVyZXIsIGFycm93UmVuZGVyZXIgYXMgZGVmYXVsdEFycm93UmVuZGVyZXIsIGNsZWFyUmVuZGVyZXIgYXMgZGVmYXVsdENsZWFyUmVuZGVyZXIsIGZpbHRlck9wdGlvbnMgYXMgZGVmYXVsdEZpbHRlck9wdGlvbnMgfTtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdCQxO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM3TEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9